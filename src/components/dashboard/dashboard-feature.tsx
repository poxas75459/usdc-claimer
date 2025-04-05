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
    "3JvQrotRUEvBAYETNpqPNYJ9oZs8vxaDNyAoSHbuixwJoMZYokhHaik8zoKTQ4RVX48E2afwGMMvcZx9AqizFPKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cx4JwoyD6hz8ntPy1GRagmoagwJuaHic4HYT3Z7sSNES5HPwJKGBuuP5NzyBMpJZxYLRU6FzxEHSwvyhJrqy2jP",
  "key1": "46hEVC6mzMmiRBujEmLF9YNBQZqFDNWzLC7kHAFbumhWf3Egzd2LPekUraCHou5fb8NVhkEUfuCaZBeW6AeSVUJn",
  "key2": "5NR9LQfNxgmrp5KKFSgnkkdUZhtHQCjYgxKyBfQFiTyFASAESuZNVRru8uXYUCaNyGjeMA8zQQK5LjZEyBbP71wx",
  "key3": "785EnC4A3mYTSDP7ZHwxrBDhcU1QceZAnp9Y5685XDMdE76evsN13EVEnQafDrJmv6UveAMc4FrctfEmzncodha",
  "key4": "58uCTJ1YTiBCgiSS3z8QMkSbwfjXxXvTh952rRA9o45GCMjDJjB3YzfobyQ5vjf2EMUinJ9zhHdkiyWRbAsfeUw",
  "key5": "3Nu6GYn4fnJsjVGQA2Qs9gyPaywmPULEfw5WBpju3whA6Gvedf4eeioJMRtLmjMqrn4S1qNfMwry2JperEjYuZBB",
  "key6": "5JZ7prYaGzS8KpE74AcQyavMkgrZiwsC7wyhCsCU6e8Za6oiEZxC1rXuasp2RR9RdafLGJiSyTcKJrMC1PhB4q9a",
  "key7": "AyvagSzQFXZtRiHsxJDTKKhQmi3dsrWj4J3ZRumHHHDPioW5ue62ACnMT1GTyti9i3FYtKyFp4GuGZdbMNqnsc4",
  "key8": "2pqbDGRTfGw5aZLuLz3GuVUfMjiGjuKvhAZ69QSnXMY5dbXR2va41YbuuHaPcNaLKgXgtBgMfXKyS7o5ksmqbADT",
  "key9": "3kAnoxKe2B7iEp9npfG4UhYihuHxcAGwgXMC7wxgiPnLzWfpJ5WR6fEDVwFdrQUgAXhDGTtGzVsT44jestJrkoQS",
  "key10": "2gP1QBstTuzQwTWni3gNUxzWkckkkvf1KW4sACMaFJWECaheVgMCW9k51zqFS76BzoEXA9NR8LaSLJYCoHxFJAdg",
  "key11": "2fpwaRAyuuGa5xxKFGygnwhxZMHSqpf8iRkMM8yb94DkPgfPxQM5VkTsYQRtpwTakBFhmjaikKm57YgNnVbcTMww",
  "key12": "P2r3PhpaCUoVPtgK3Z5dHQy5vxZYAY7cZJfxzhpzHatWDH8UdkDjvWdraSVT45sp2znje5CkojAUvFaxpm4oae1",
  "key13": "QhnA4fbS7qs5zYj2gPx5r4yT5amFFdoFYeA9Uwr3rbg7MKoZoPzJmBKBdik5Gr4cMMNXFs2tVh1pqgvF2ezjwZC",
  "key14": "2NW7vDRi9m5pg79jv8icZTsQyk5YkpfZwU1sShQJUMzsp9x2qscdj9EE1jyWixqs7F1Qm4FNuDiJzhTCtnW1NgKj",
  "key15": "4VHgNzAWDoL4ArU9J4wvAapEhXb82qiQ8yH6716Q28cgHuLuKKy6L4Zqa72RdYKTYe83KTrgBtRM8hkTAd79Wxtj",
  "key16": "3y2pzLZvgZ9NHYAKow2HQH9XMM5ECvc2xdK7ngXFa8FgcexPFGRRbJGFpVHtVohP1XjZE2uY2EzEiNqtiR7jB2AR",
  "key17": "3Fq5GTb2HxenrY9u7eYS5GdbbrPKqwwBre7AEYACqAH7homWeCN4iZBnHP5W3o2zB4BMbCboe1YsGMbWKyjBkvpV",
  "key18": "5uZMEW2JFWy3vZTAXLfPChybHWD9wHpMk6kRbo5YbvWUPL29ozBwYWPLpjYuydj4be7PqDSBVn3RnLLmFzf4f418",
  "key19": "2yvKFEiyy36uyNGWFdRUYPRx8AAqnMKC7ZXExfKaAzKZv3sSUK6VHhD6fWhYC3Xh1mmyDgYV9dCt6WxKWA3WHHtz",
  "key20": "5TnnbycZbaBZPAoE4yX27whqVXArX9euinDLTZXZk5GzRRKMW7dTZewdWS1Lh4Buydh3TQE9esmUAJNadmuuHG4j",
  "key21": "3ZiZp6fTkZiDbYocVzaBJaco2rXzr5pJN2p3TDrr9YzFQUvuRpmBRn54rV7E4hLxJtKkio1ryZt3LVfj5SpXQza",
  "key22": "48Y3bBzgWsscx8rqh4e7qMVkwGfsYNyMgcJonwMFmqneLiZn9xuGbfuz7NET3cLrM3TZhQAsDAb19uh3DWsLVnA3",
  "key23": "3iyftyGhVVHitakeeVAtaWZt4f1Hj54ENLKp2jyCS1mhk3xzRqett4UgGLLWEG23i9UFzPcHiHRywuJEoYcHyRHB",
  "key24": "3kSdhrLoRefFQXRz48uNJAYFWDJXobgToKYGnbkxxThesMY8Qf5W4qSLif4gqpKhaUEKw3AErm5zon7e3CL4ENRF",
  "key25": "ZYgg3zhwaxRRSNQZz9U7o4VuXHJfU96P3LjsY1keUPYf1Kx67dErPXWYh9ukp4Geh4yfUufE6RqDw4viEtiH3Vv",
  "key26": "2RNhGXrbasAQm1aV2s3wQY8RKFkuggCJLLFetfLfw6wv6SsuriPYzS65HkHtKYfD2Ehg4y845Ah16qJNvt7xmh1A",
  "key27": "3qKucDzNskktPpTKSjisUtqESv5cNv6f9CjQFvcuVaEebAyCq5yG8NBKdyWapaC2bVZDCwmsUg7iP8sGYi8hsNxR",
  "key28": "5owneo24C6nUo49ZvGA3yzCyHLCbgKDSPvmh8zwxLQmcJex7HbrbqgYiaZhuUFVMrHQ7jhfcfBvsFare9Qx9cPsz",
  "key29": "3Da5cdGuumH4Qm2WsbUhfdmw3sqnvBE6x7Sy15siUAKwxtjNMgG4H2buFqLa87NAyG1HBv5wSqDbHQdzk6xQrAMB",
  "key30": "4Yteb7dywKn8iJfG8dsMNpfPZR76a6UdDjuKZhSb5aKQPa2she46it3PtjbxPskb9E2tMGcuPDGTUsey4AsoakPB",
  "key31": "5dNABqD46JFjQRXDH96Cocfx2BiCeceyGTogauw8sfKBpvYjinL4APMNvXAGE6BybDA7LsvQb42EM6TDeVJVzWkn",
  "key32": "65aBVrNn4aj8d2MnVwB6opkT3sfo6GDazmJ4RumGEhvqj69eW4tsaZLvGACoub8ue1v3JEVDm3g7PKKJ1ppm52Pj",
  "key33": "vktu5aaiDpiTWjekXY3wzZ5uRaP2iF55LoFhCgQHxir1HQdH9viuEKSWZ8qAYqpgU9H42Yq4hupdT7BRa23Cuvm",
  "key34": "5E6wa2VApUeBv2ETkNgHCK7TYPTnEyhvnfRAFXxsKPSp1Fp67vHoJgRRNVjvtCA7hG3f1dRJ4D2KCNzBjdfqRnZg",
  "key35": "3TsjpJLsUtecECwFjmFw2yytwoGL8ws6RjmVHVbYK6TNAJY2cJdgZe47XhSf2kTdF6UVg4yNwXL1dEYxTLcVNpW4",
  "key36": "5cFkzwcMjHC8exfXNWRrUTxJqgd4fFe63M7hQZFPwwhWHmpJUs6AxhfEfqpP2vP8KXJGGiau9yvu8BTabbqr6XnC",
  "key37": "3uPrMew8z1qKhCFcCharaM6RbBJqXVT4CX4BfcCZ8XJ9UcSS5w8XEFToHThmiNhowVDuvM5vU1WqE9JtLm7w61JA",
  "key38": "5dZCYW7G5QUarsvnd4dxFqQRTCm7r2k2cFK3vavSExjAbvP9vM9AEiwdLtXwQXmetRf6V7wpeihjnaovkbnmtXrq",
  "key39": "4D4od62MAdq9xb4Nw1B95rJVcwxv4jPZBhEXrs9KcKih5wsnp9MAU1xQnpU9PEcfb5v7eCKRTz8jZpgNn2mpyyxa",
  "key40": "5947ACb9iJ5QATPkYLtEY99N1rNHXq7aPhwNycV4q3mprSmp5DCUFkCD4Zfix2xAa1NRhrnbe9B564QaM2oSFc9h",
  "key41": "2YWWSTuYxv5Kt6L2Ckwyd3BWp43UAGFzFAYfhrpimZpMnAmN8k7WJrvufnkg9MSbnzJ7vvQ1vof736D9CXob95Pj",
  "key42": "2vmhK6fC1qGqG2tyrq1AXJ3mCxAQTi74zFy6ztiEuWCwKtRnTd6XMPhXyhKFV4rF6MggiV9C9hBM61TBC2UYWom2",
  "key43": "4QriTeosF2EcN54CbyoSJMHB72bCtgN5qJWXJdkQtfkirfRFWMTSiNqd8fSJVbZULdVm1NW6F3DtmQWBWygdSxec"
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
