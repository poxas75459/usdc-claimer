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
    "CVvXH9gM66X8w9PvSucNZqWFvegJCwy4Vo21gBT21LpYoNo3gu1EHLXoErAWMrq3CG3VVSYWpFm7VM7Q7WUez56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5krEEDHbFMcHWGiczBbZv7GxjDRFzVuX1U7pCxmujrUgnFoo1kzjgRAKbDYzhQd3gbu5mM7M8TwTno7aSk7kLg9g",
  "key1": "2KivfQJXCMbhipvYLVSa334TRVcTsB52aEvAxjzfbRpoHaXqjd4n5HWzdocFe7wJNsrvzehJGboa8ogwswrpuyFt",
  "key2": "2sq2Y6W6EFiDwvREbPURiuwrbSS4L8Fnq8kJJDxWyAzNBFucSLcx5MQZj5wmwQc8NyCYN5ge2p56gLbQ5dEkYQme",
  "key3": "5rpkUTUm8qUd8xj1jpMiJC6hv7vAyRKqkrLfLHTvfEyXKjdZ6ifNLYX9EJ7Eov5mgQr5EA4Xu2NTWJy7eDfWeHgh",
  "key4": "2FAVJA19ja3XK3iBgmkbmJTt9ySvQZKfz9d4KHsf3m3JcojYhCHQ3z3EhCFrZGdWXNxwNmGqjuQzGhjzZyoXuoFN",
  "key5": "2tTLoNwEs1fv2jPxPfHDZsHo8rhdWEwckrXNWm1BxrMeFjPkjFzaXMyYJMK4D14ZJN3fANyeN59Bri4cPHrudhGv",
  "key6": "xKKL5otHhNbodB5P54uNrCA2aNhph7GQsgMz6SMkTvRiFnU4CKtdmzh2DqQ2Bnh2to88y31ixWXWaTAF3RXoTBG",
  "key7": "3MVtbcu1CWwxUn1dzB1EWHUrbreanUa1gbwk4DST3f4zHoWZEodaBhauXGrmc8SsPB93UYrrmYg984RAhTdtV4jF",
  "key8": "56XvPcSdAQGVPuP5EgZeLLPYv8Q8igR9dFsUcDMBoC3mxtvYchJGfnoXxyxawGf4WDbYHDbzfKscL7rjT1BXkebV",
  "key9": "2QA1xpDsDfqAqghVba2wcg3vzatCYeNtGbbuSuFkuaCjzrmiBnK14LYABg5dNyseuSaXb1juRcAVDaL941CoWk1a",
  "key10": "5rgDSNK8Pg8UwWjCDSJLhD6ngQHtC3YzZNx1kwhemDSP1Dcn81PEEAigvznJEfmeuGtCJpgc3SPBfjyf4ssJVCY6",
  "key11": "3wViU1xcjK3FYxttXPm3AoutP4rzMVQjNP6WiurRNQQcFJcCnnXXVLMFGVSJYryr2pJUrC8U6LEg2qss2dCFPVVd",
  "key12": "3kPXqbeHwRozDfAovHV3ojSPmqPkeyzSLAtjeUGTb7UTSxQM7txZ7y9GWca6e3uR6nYYTA3mmAFc67R3Yx9UkhWh",
  "key13": "4jxTCBdEzpvXfLaDUsBuHqzrKHMMvYuTonTaDwG627mvd5Ls8RkKnuLFcu6oiqk7Dv6Peu3Hr2CnLq94XRoDs55V",
  "key14": "CqDCHWpuwwya5Si5SDdcEnNmHNWv3shmkcKALW6i22A6aV2PtwXP12amyTXyYVwcoeLTU7fMLd3FtWku4QGoG2M",
  "key15": "4re2ydYsAtRB4BgruyCE4QRoEH2gpgE3vRU7bMqyWHvSQ1gCAf9McGQAyAipNDS1UraaUMmjLfhN1T4FeZDMMmKK",
  "key16": "5v7u7MStiuC5TKZsgKZ2u3gXdsbtuFdV9ErRkUkTTeWHCcvfesVKNksqmLge5w2c3Yv1m5JzUi2vWPni7u77vTXs",
  "key17": "5aibaLbYE4wLU3N1KE3u5rB3vy3sHws217Lk7TpfnKZEYqDZ4xYdCgxCQsJTp53hx5FszXpKd8YyYrjeqV8B4YKZ",
  "key18": "4doS7b6XWbD2gyhbLUex5BDrTjS9HpaBeXyhoaaCQwubK2zK4BUTSkkKQUGZZ9u651JEYFKhoFj8TLwLmemk1C2",
  "key19": "4pgSVdvSu2e1jgTAC1dL8NsBXTKJ3s9GJsdMg3gAw2SzCPQ6QjZ2WdcFLMTwmLdNDoEWXhgsMixhb7beUT6DagPs",
  "key20": "3sk9nove8bfF8qvuvuRojkPHxfsk1XV4ctMPPSbnMUT9i3kX7SKHHgaxBwiEAgPSx1CQSQExKS7Qv6PyAXz5cXyJ",
  "key21": "35LjVjum36MwsNtrPnqNpRtwQE1Zrx4gV7VF5UHAPyJNgMtQNuteeGzjihTRp4KqBA9PEndPG1Vw5KF94p5MyfGD",
  "key22": "3e2YXjUwACJeWYb5PbXGZvkJhB9wvXcYMHxAEWNJppTwxkpNxSfyXNb7DhzpxgcPuiXAosuKNgGEp8iNPvCmi3xx",
  "key23": "pxYHBo7dLiGNikU9vprrimV3esJpk5WbJUcipuaZjovXtQycQyvcMoca4q48H1XS5fHL3i5iTMfdajoDEvCFmSf",
  "key24": "517957YDcF2ZVN5snK19W6dKAE7KwYm8wdYdfjqx7GfiWj2MuMoBKySqJ24hpAm8qpdpP1LiMmiTKf5mB843msnW",
  "key25": "5XSBuRFaVTafMmvqaZKvYXdLLNqstxV6RpUzeUjDeJfr1cjvXWPdtf2fjoQ6JDJ7qnoo47hiUtbFxYt6efT61Cub",
  "key26": "3ADvwWquHdUfbGUXqgWjH1AYYEDyGQ8EJErZi8p2kidDnZt5JPsUpMRgijz43b8kb9ED4X1Jn9U8wre4qRvi6bcu",
  "key27": "YXxVaN8VGd86MAxBWad1hPcKCout4nsmWCe3xEcK5pq3bczuk1PcxiRbacBBNJexELoSePD5yGMG2sjKaBofFuu"
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
