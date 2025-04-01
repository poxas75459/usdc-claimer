/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2sPUrw4BJY1AkLnyj7REqtiWCfkuJKKGXSSLvd4zUFSmmfsBgss3mbqHhTc6gMB6eRuvWDxqSPnU4h4wLqDoB9Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gBxnfXBkWNTru1izmgNtJz4JvsknXgJaHEcVFUHjymbGp2bZbu5DMguDyy1ucR3M1KB7n8m3U5ZsSn4DxAzb2cn",
  "key1": "4GdtF1Jq7deMhpd4XDRjU7S9rnVZm734gysfkxHxe78FtiiaYpFJSdg56bpHJu5xFq6H13SmNdyTK7HWwFQjWH9f",
  "key2": "5mXvGs75nVjguJn4EwM1QVHVKNZHyAuWQ4ZhfxhunBnEoWS6nbYoos8JqsVfhutyCyQfojmzt74jktGXBDi9RGfy",
  "key3": "DGmu5v5x6RKJbLuNkG9jFR7dqcAP6kch5ec4U1keYAFUNg6x3vXLGupM9qHbqrjjaQVBPHNHYYHfj6aWPStC25Y",
  "key4": "2MgnqtWAoWCXbqBy1DmJ5f2rfn8WiLoiSdXwNovcSAk7XYu4XwvMZpmxUmEJrXr1YYXM6uzScji3VLn9xQGnW8bX",
  "key5": "3MPDYcSTB4zard4zFp9bvTw3sv8LLFn8Z1htZzMZS2EFyNWa4DHzaaCwvDjAXnSLXj1UQHh5zxYJAFJZxKBeeUKM",
  "key6": "57TeVZYEnFGandfYytVAHy5gQRKFD5Td8AyM5kudoRScEGkvx3nzDk2JVoB1RDVV65pMCBEGgQDEZmYdKFd9BA9b",
  "key7": "vQco6FLj5EwLReauWXBfqK2VJxJ2b2sGsnc96AQq9k28io3cydBc7p5vKmyg5K56JfqwnAvY37S7fKvpHP58NCJ",
  "key8": "4gjVQc3vmxeH9FomKNvs6arR3qpwkBuPyEyqY41K5kKLrViMYr8JfsTifHYktiddXSwQ7wnw2Re4vMNp6zNjtZ3F",
  "key9": "2xx24bsJx47HxViPxfaRNde9fQBwwyYauRwsUn2GGgNvA8EffDiFEoF7iomSwp3PiLNA7eAFGAou2PbdNxDEtPCu",
  "key10": "QK5zTp1nL2b1M2fC389dYfjVpVPQbeMYVAcPmnVFiE3a1JfYH7yzTDYh3KxJG2jr8Cf5Hhccf1vgQfd3EGAf94E",
  "key11": "3Qix39ydV6D9bhJB8eH6HXHw1XLEXK46mwoq3GugcirSVw5WZ5FyPVZSyM1DMgo19Kcm25NHYyyAWDoyRC18m8p8",
  "key12": "5J2q3P6zDwtURMGoyfk9wtqPRmk1f4BLX9XDhUeMBofqgP9wQenABbqbvYqWdU3jGdVRbM2dFuA9KhxTwqrqZov7",
  "key13": "5AHMr12YkRxx4BaggHviQMD2chNeSfNsSWd1uLrN7BAU6PykEr7Tvkr2uy9BgTVKWUWou79kFZgEzVX3f4jLBeex",
  "key14": "4FeetDjFVG3RyRV4ZT95889WapiuQobtNZneM3AeViFWXS5iD7CsPbDyrnx5DJhuac8jc4FdFV3jaB9Q9896nK5m",
  "key15": "5CeTnWiAvC23pRW3gj3ZZTwy5MbDmZLvrPHcAhH1e7TTEx86TGNVQE729x1aP14zS1pb1qWWYvwxG5uwvMkTY5KG",
  "key16": "236spEvtTcADCphhr552kpH6ra8stzHcbz4v8uj4xdqKDCqTKDY8L5YW3pfuT3EJcwQ9AGzyyc5NGpJYVtdh6BKu",
  "key17": "2Ys5S4ztm7n5jcbJfcPT5FhZZ2Bv2cpVShCafpZq98EmmF3wf4cjYAUbBgp59wkcNHCdZMPMjB8tAwZYZhwwxtzq",
  "key18": "3rtsDYR4msf45oGepC9TUso73ZBHSyT9N2REW3b3LCeFFy7DhyHPCv2U7n4UfcR3zfB9wFFdm1d5ksSmCQrjnsiD",
  "key19": "63i4WB6TLdHUj1nWcsCkRnv2MKDQgYS6tTWaLdGMZSeTtKXCEn68o5po5Q6Ws8kDMusfDEquvNpURNzMjKqEmPhX",
  "key20": "41N8vny91cPaKQoYQA4wf4J4GRkfKoUG4kxpHW5LX5cHg7a4ZX8zQR5ynVJoQo7ybseXzxyKf7Zo3fUCK8GP8nAZ",
  "key21": "s71BWGwX2o3SMgF2NcJtTMhsukjy4YQSygc6mCtAEq6eXgDK985c7mLn2ufsAXp46eExAcEMPLARq9sZoR3Jp9n",
  "key22": "5jmnBxsQecS5meAmwMSawtnefcAdax98GNQKcSjzfR7UfGCLDrYBUgfJsXXJnA1V39mVT8oAjM3Pr2ivwZHsH2EF",
  "key23": "4iyuaz8qTC3bjtswa7NKU3dLnjEJwS3wcPTF24dZVzTfD3YBeQXgCaBp2YNJCvqk3a8XLk4cWPNDrmVxcHUZ1yLt",
  "key24": "4Nh6Hgq62cvZTXidhbop6LXSh9g8HEXmG6KHqbZD5N8R6PXDhg9iCup5pNc3VnPD49cH5mLUZq2j928mtekyVmLb",
  "key25": "3Y8xvM9JhiZMGBy3qcj9KDbJzpGBV3fWKCFHtFp7VSjHNvfxEjEAVSPwNueHW8ycakPYc6AsxWubqJXJ2raYtew6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
