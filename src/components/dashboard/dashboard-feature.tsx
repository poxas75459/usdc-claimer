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
    "5RY9i3tW8LTHfgDUMWqbBEmWGm5GkLYxwCc9JXqLusdsDmJqeaG1xmTyqnywrhZQAYSqKbKYfuzQGr9uzs9y8usF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36axbBTaGkbdA7rXANinr8ntct9hq4aZ7CTdNszgSpqz7rh5JYc7m1mi21PEKn2uAsWAxELctTdct6BoPz2s7W6f",
  "key1": "9vReENMPXPkim9KvHGehuzD92D7xQtpk3HvBtquqt7niGb4fVJd6eSDPNr5Qr3RcTHo78snSgMBBp1xagUjwGfE",
  "key2": "5NN6iqQSx2wz6oHVX3iaHZpDvqYy8fpEEc8YivJCbng1StEkBE8EqhdbusgnYLZnWt7JYUN7xNabwNByxgrhZjrz",
  "key3": "3o6YAfMyMHtTmXKSfLi3fFpMtbFEegJwRJf3xSa7eoL9aY4v765dfXjFwTRuPGDff4YBN2RDPQ5yys3P6xna7B9j",
  "key4": "4wdKQomb12dVGGgyWtFrRDnS47NDsQRVSwHQStMe3kWcL6szje7EXsjCsq1pzTMdLxF515DEpaMCj3D4PcNwjbPz",
  "key5": "LgNetDuQkpqYh5rnVfQ8E6Rv6sFdhnrRYKXRseTj3wsZfqbcYau9xhaPp61b2Rpx6e5Rk5vjWUzkDeiYwd6t3fq",
  "key6": "zwbkJ5gThExfRRFveJHHkRCa2RDNWuB3xiQKqLQFT2N8WdK7a9LmHcfMjr4VZkECa41BAjLM82ZXLeKyVexmtVN",
  "key7": "z541z2JNrtD3vKX1LECGytXNgxhjJJH5TVJe4DRrRZaxnd6sAmMv32Eo21Jia4wUoTiEaQuSyueZTP27byiKWq3",
  "key8": "2EZyMf1fB5D236WFyKhVgKE1QZyJ3n3BrxrCv4k2EcAkKiod8tbTJU39bFJQs9hF6nsrjDRPztztQQq84t9THqrF",
  "key9": "575DhrsPwwRwqyZ38SvrkdVwdsyoHyGpFDPE9FWqwgz4AZQKjaV6HpMPc5vzwdzUfcRimZjHwyM7VQ5psA86b9ML",
  "key10": "5iXqHMna5yb7ZAdC9jB38Wk2iN25cVcVE41fhsC5QZ8GrZ5oPDtWYu5KCD2fzov51iCDU7ynvSh1mRGoWDQMjQuw",
  "key11": "5uV4QtPPw5nABbU1gvncd3FDf5vjLJPHcnZJJTosSdLpgXiPHhicZ9m25cFuiRW4agqjzz6ea5PQpY5bEnxzY4ya",
  "key12": "EEh9m4zfHfX7yt9UMruiH1KCeXDtw63Gj8YN3jrtqjNvj1eJZNstWb2Li2NkYf7t7QjRXVf3wSW5cRrddgq7zyU",
  "key13": "2wNfeJUVFxbKAJgNnWa5yKwZX48KkuN4fZ741J97Zcqr8gRn3Yjv7ViKjd9DR91siUmxrd81475BL86hCXEzMqeN",
  "key14": "5LgmVuWmk4nhshVSuQU1oyBniWZ3C4UTXziwmMx5PD6BwC4v5bPttMvewUqKHWjKSAxxZzzxb6ijPPsv4PU6U4bn",
  "key15": "4nx1XPHZnuzqGU3FBzmeZKJrHEkYLqzUVWHpZZ8rK9qCME3y8nXPUL2oCKZufVkvpbYzGSqSZrLTcyywWzv8Std3",
  "key16": "2iNUZNKDASWcB9ncDdMssZ8ZR9KiApCTRxdSTL51Wdv6PfjaAFiH65csf7PSfoFoEtut68ER2gL1GnQjrHc2vEWK",
  "key17": "5uuenhCWTEpcJHecbF3Zqrk4pcK5DD9Zxg7QZe1nqAkGSwnPV3BE2wygyc4Y2jJcf6kyvWZe4Jkv4qVrL1ggWXyS",
  "key18": "3B6LJJdMVGRooKPhNBW8a4dfzF9aBsa7M3mhyQKadvzrL1SiSExkSG2vHtdywQ7eU7HGFPNHgh1g5mpH9NbRwbMU",
  "key19": "419E5tuPdkKEUJjQHCYLz6GwmP1wD7ix7sUP8pHFvWqEkqPPK6RLgBKRzxioXFE99aW7GuKSpoY5Tnme2fw4kfT5",
  "key20": "M18hKDV4qS2D85UzwXAGXRXqJ5nqCyexevNYkbyWdLTSsHLxT5JuReHtta7jDMmsXPxJtmQCL91MVn6CnJaYJcu",
  "key21": "28zfbkkdJxUB77TZzLy9CjQV2xz9jyLzRB7VMGBcVkQhcqUeqPTV1daZfKd8JzVw9HkSJnWky9JwQcT9ZGgDXpXA",
  "key22": "5DzqqfoYt4G3UEfHnu5gT8AUbqM367aXkteJ9E5kzaFYBmaT7oTrJuSv9GAdb7tQq4oZBH1xYQsEt1ahp2auVRPC",
  "key23": "4VuH5dFVg2GmekWp2HrqQ3KnzMowU13rMF32FrXZciYNXPVZeX7DpPKKiGvAAm4HqrnMpAcguZ9TEKPfc9vWT2w9",
  "key24": "5JrNinRGHmQcAvbxvyvrxMrWR6oDWFEsJ9zAA8392VhmN2otjhKBJBbKkSTioDfi7ZSi5rmtBVZPGbdxiLfBCvF7",
  "key25": "MgiD9YW7uuQZnCQBth4bYzfYYWrNMgQsW5zxfXcyUSCSgA2ceUzsC9Y57g9SjmFNJa2fAUivdtS7FHSGrqGJA68",
  "key26": "2nkYNndRiXHEQGTNRhePS2k1T1MQy68bMr1hNHGACtGdZvTfyFjhqj2am2TURarZB4sRAE11Z9rAcaPm4nPoAnZg",
  "key27": "epYSgkZeYA9djcCWd7dT2aZTkFZHEmEKZd6EigWPadyGHYW4G4aJfDjVAqcQejPXdHeJrdupbzZVbZ3agDJYK9E"
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
