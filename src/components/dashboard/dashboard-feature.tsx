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
    "hZjK8bwRAowoKTSrC9h6qHJ4wzHkWk7Kx92bUBDuDoZe49muVWB9p63vn54JMAFEirELFgkaDiMUC8MQQRPKdxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zfscotEiNjj2KjLBRyjvyry5chMyig7UrpGQiWP7WTkHVabrXeqTdV2KCa3ornZXVug9XvSfoxbMiPF8gjfviD",
  "key1": "5LiBPRCwx6xpPBrEcpNXanyav2t9zr29h15BSMi77ypgEhJa97X1FxyeQQNTuP8fjH5mJ6tSuNnx14ihDaNJPwqe",
  "key2": "5nLBUrazXrjCHqNsF9WB6sF644YNYrrk8Lb2qhuj4eLUA4L6AF9tK8eAtcWiGHAQ6vTiWXfr55JoPr5i7hdTphTR",
  "key3": "3ZYH6uNXYkx28xED3VBDvJajbCPcjXxt3zZQaUSRKYi7xfJHE75THynMEMs4cYDzXTPPusnSP8BtsJcaeKqjNJuR",
  "key4": "47vYC4xQx7onQWGkqdRX51JJgdKYx54s2pukCRiCtVspEBqsteuedFrRKWhbiqLdxHhjRzK7PAFpJeTbEnPDujij",
  "key5": "mkwTbyMoGA1Ay4VJa34Wh57jj3kHUcvdu6rBJGGbGiEnUfPhhBBQEB9zEtUr2xpvs85G8K5NTJzKsBeRCZiJegA",
  "key6": "5uF4DD1FTDVhmdYDSmtGqfJCE1a9Zky9g75JGjAAmUd9X41GwEY4bhuWCCqNsX57AWo7aiQ4fPGj1GkFnpaRZXXn",
  "key7": "5hwmFRomJtLQhKxm5fJL6ws4B4CuzUGULQurSpjCfRhcDZb55v95v3uEb484yrKkj9RgWZmzPeAbFEgxFDT8nfrx",
  "key8": "DUTcpGkETXPwCnjPRbZnWiE34DVzvc5qJm1xNfq3vLnKDR395gxxqXZAuVJvBR7pWTNDohWy69pkkxDdVabDpco",
  "key9": "4L9eeTVz5w4KEHmquKJtRf4jv4Q3aCWHCKFXahYobrN1bGrLUxXjTM93LWp28xtrPeie8W8nrX8BbPmXKcviLaNZ",
  "key10": "5pvvtqpnmkVQaaC2Yh34R8bSk4fFJDZNUMmoTzsdtY7CxbA5mKB12LY732qdCRm1VtEqmFchrL2iFCT85DFtEFjr",
  "key11": "3aYuv4xmmtWT2cQ1TgbNE2BqfbpSuPAzFKs9WfxaSoF8icGWidgXiykEy59NBua9K6fsszQve7jakgguN5St851p",
  "key12": "2bQsNHW8fC1ocJgcnDhbxLLjxK7Gs9siypVxaK4bKdmVUhDXFKN8FvFteK6QZf6a8G4fhxu19CaChj95HKLgfkQG",
  "key13": "2zAJNFEoL2Vg1a3niUQQPZf7VfDBtkG1saSgCPP8sxBnxYmpgcX33mD6R1rLAS5fsQw4914mrEEDx8KkWAhs9ATY",
  "key14": "49t8x7HtnA6n6a1huQk3NgaGpaN8FxXjxEW6cBMc3BXquHfxC8DBj87vmx7FVu3p5vC6Gz8sTBMKFY6zn88Wwybf",
  "key15": "5sKAwJYQV5dWxgJwx5EaNmmPWcZwmNKzgqkQxARr4LuyV9WNiAagn5brjdM6de6CUMi2h9AJ5s3a17jiPso3YNXY",
  "key16": "LLMoz3yRtHMZzpr3YKj315pqg8mLFBJuAwYWfDv1a8Hk8VcruQ1bptW8uuqGAJ7uFrryeK2wN2QHg65ZjfnhFoA",
  "key17": "5K722AQy3D1nQugP8zL1vc1nD7RmtHPBnrZiP4ddgfNDytG3VCijfCaZfRp3zDp8MDSM8XdgJonT5BYHsK4hnHF6",
  "key18": "kaStDQAaitSbk5G8wse5QTi2w8moDiHxEbXGh7sTHXqEAu2r5b1sxPiNv33Nn7iUeKKhpCW98TNajrJJUjL6nvR",
  "key19": "4vjy11bJ3rRQmnhPpkkyFWZkAwaC5iZhxEYm1zKph4HobbNznEraE8bd3s1r1xuZYmoUf4T5z6TGn2GyVEFN33TM",
  "key20": "2y4NYXkxyPor4NkRYgj11YrJHxueaJjfwJLXF16gzh7sQgjhx2tAXnUZ3F7LKX4xhjUntFDtsNDuz4zYFmFX6Gcu",
  "key21": "3db5r4Y8BY3wAKDi1HWa624gmKsy39mYCLKSzszA5JL7rZkmwqD5cZaDirDC4wfCjsCPepze7tm84j6jUNvQgRKZ",
  "key22": "3XPyrjeNjimDfnupLdRVFYYya7Tjge2B77KrGJW9kLRcaEvgqMGsAg7CDR3naDW1iggiXAi4KXzPVmwZfiu9EZaf",
  "key23": "4d1obYyR3Zq2QnfWQe1f5Rn4QU3hfVFaAoMHyFBM7mATJ5ycYp4qxqX7JJ5qPgwP7i887VBQkkMJeXYCEKpXwf7w",
  "key24": "LefBMHkHwkzot9z4P93Q7notx1CFqsxYzHGWkcsbf7rJpUyjxJTR8sGpPU67xJFGtMepTRDskuUnC1coa9KLBdN",
  "key25": "53uBLyUKRUtWTYphKAQBVCryb6JHHT4t8GSvdRQw7nsSPVGBUZDPC6FbTXWHxpPbiLuQJe6EXW1BtugAVndcoPsk",
  "key26": "4b8nak85k7Ab1uFZJVajg26bP3qN2yc8XXxTFf4A76qgfpw9hVFuKgfxPDHshhKxqdLmcbU4MiPzeT8gA5v4mqMV",
  "key27": "4EeDfMK3PjL1q19uhPWxHi6KJ2vuwxtEKtVFWynmGtXH5X2uguwoV3BtQLYQTyxi2NPLmbKy5nsxJgfT4U9nxMUA",
  "key28": "3M8o4yPLS3XHb2Z2YfTMiBT5TUvnDpYLr97xRUYUtXwfftfbBWC2U2HCk3h9b7XLviLBvMXFsy9XAVq4txYcyoVU",
  "key29": "3UjWnQ4rhYERQxaCjCcyw7TMrMdGnxnsXo93RhMgSvMzr6unLwSDSy76MdYenRfMMRGWPUbmSfT7FP62BoUtfKDP",
  "key30": "iMUXe1q2dCwojU7QQ6bQiWh2vigAZgZBnrYGvZDtQKtiZZ3hS8efBMuhfgtUULdgTX2uv8iqtiUnLjMmgpLG539",
  "key31": "4mFs1MfMHKYKqAK7vCEGx1VXKJocQ6o1EH5bHaMsYXEbsq8UijPrEuJ13ShxsQxtFiao6N4TG45PhzTjmKBvG2SJ"
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
