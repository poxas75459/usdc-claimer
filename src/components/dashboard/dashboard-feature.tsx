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
    "FjThVXrRwmTwSvVh2a4xFhXpPjj5a8xgd1jA3k4EkkAXc788mnfAspZBpJumwhQBLHHxwWBNsLHmAwDickaq4v3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DEsNGVrVG2fWdtEc94mMzg2BwGQezkaErxomKMAYeySdfZUFT84ZAaViRRXAXH6SB24napw4k3KJ5RVYGNHKoV7",
  "key1": "5ikAg8yVcLs5pox1vQpfhcT4jy9C7T3ebmS59RbHuE5v4PWPznznRLyVcVWSkno5JQQJs1SZK9raAEHsyRYZnbmW",
  "key2": "2n8Qrc9SpRngY75ow3FdujPAfYH51RcssXNBJTLRmLQPdm941BccKL9HkX7M5zgukHusVv9rwvYca1PdsXkdxN5L",
  "key3": "5owAaofabq5tN7vyNtLXnRChxTpkjHtau6Hw7kScd1TTmjZ1JpWtbNq6NSWNp2m98DhkqXAcy6UtjXd5wkaDEfmv",
  "key4": "3Q3qeGWTo5LgmaVMkY1wPiV2otXaw9xanpTaiUS1TEeky4ZVJWt2DWxKSUfsBLVkmUVDbP6q8ut4Rwt8HNpC6STH",
  "key5": "3BmRjcqW3872faydVE4RQrhyPjZfHoQgkEfnwtCu4GoZ4BGfVM7j4hk3gbkP9sEwRoVfrxVwqpg961TQu2bwrAcS",
  "key6": "9qgFJsHuDEBJFRcZHqVGTyqtZAKtvJCMTGJV7uSBFKS6zY6WKbP5r9pw1Pq7UkDuqoPaTnWkgBXmXkyYTBwLoni",
  "key7": "3uPZoynNhwEqZgrAz3ftbA7rwvgciwJWGmdbuHaDAuzC6kiuXpZaZhzHg6tKPg5j1vVRKgQi3VXgXHwkiFVYK1Gz",
  "key8": "2nrG2MkoR35CTjGKrkCMjucXiSLR6vtAKw2uoUDkoswnMzvDf5h48kChSSe2z83fARpSsLx5hQzgtCftTiVXhkQL",
  "key9": "5GsjVawp6we6XXrVok6cfGDGdzZPGhTWZrUL8j2yXZgtBvEY35d3Yre5FzbfntveR77my1o3QCPtN87zwnrWfBeq",
  "key10": "4QHKudQnbPjQ9KV5Qr7aFMtga86hTx68y2eG1XYUs1qke8L8fzKP4qHZJNe7JfHJyvSXHnNoXMiUgifZg8Fhd84k",
  "key11": "44VcfXGmqaurvBYHMJyRbkTzqWAaobCuEcZTSUYUgbebSWiaJFyczbmf68uc3B5yaQ3QY5qSDcr5vaAvZ7mdQfiX",
  "key12": "2AfiBoA4fumYBGPjgLYWYvjt3teeGTsJ1XUAC8ywxiSSs4GqU1HBBPbqGyvEWsBBL7GSBPvXkJ6Y3LPpWq8nrvev",
  "key13": "GQhP2Bheq5jet821EM3CMaqtRg4Do32K2mUep1AV97kmqPo7Ms3ndFj7XXc7WofX2TVE1VY9NXrDeZATevk9NRb",
  "key14": "4znnoKS8nx6fU3CFdTs9Dv7UbSsLL5Qd5sqQj3aD8uQa6NANvmKU6bbWjw9YayzihGxtB66jFANnFBNjpo4fpiwt",
  "key15": "3csYv3s3pH37EcsACWwb9A2pxfAmGmiXpXcetX5NQg9b8Zk7YvYcezocbzZF5Vn8os8utQWJeHmmdxmdFUfYb8rm",
  "key16": "3KVePQwEV2rhUT9NHUHSTfUQwpkw7abrzrS5kD2y9w37XPcVSq1NHDAikN7Jc5NU7kNdEe1DEvveo3Vyhoxun4Aj",
  "key17": "3MiYdy4y4uAGw7nfZDKjXU8kyT56R7P6ryqjb3NssQQhjTzWzua1uRDVG5vBraX2MH8yLsBaLrz6momvpRCQhbng",
  "key18": "5xSCkv5UFfqkDKdnp49N4WbNR3bZ441D9SHTomX7DrvuVKnMaVnncrqsHSyAZ9r1YZDHMGxfmfGAPBThQwU6b39g",
  "key19": "4MPsmf3FNSm58VRg4AYTc1uYAdcmDqA1yJm1Q5JcQQyCCjsZU85uyYEpcdGPagbddWv2xDExgXw2KBbZpW5H5bq4",
  "key20": "3PtGGL1Q95yswbY18MnorVCzaGTMpkoAcs2RZq5YpHp4qMyW4jDwgmM4dtkwdCfMzhTwuF8bEym7zjmdbhkfkuVQ",
  "key21": "2UyLQzHDcrRBRmsfrq2rnb7Fk3qTZp3NTupMzUfCTXsm2Ei9SQSr8yGuCygQAh2ZWNdWMMC7WhapkYFLc5Hyi3LB",
  "key22": "3mpA9AkDmu2vDTKXRvKRdTAVRsCPA2QaPt7TMrAg5rQoEcFR3QsKnSy65WxqLLMM2iBtjRAwNYyztqKoB7yKuq6w",
  "key23": "2hqdfnMyJNQz5uVsHdse4X8eUFHuz8c6Cx3sAtVjYavwj1pJXXv5W4oF9Gm2pASq6i44mhFMjKBVwFKzymfCcjka",
  "key24": "5Sgqg1bjyDsXUNNiADLe2RQrg2h2ALAPnhjGSdkYioGrTB4TqSi88G3gX2dXFocoExkRPV7LeEa3awixbpQzwMSw",
  "key25": "22Sxoj9zEbvCKn43iXZUE7neC3gm9cAewpHF17afAcfLFDxBPCeAjTf9wX6F4F8v2MyNKuGESNoXrDs2i8tgjkgJ",
  "key26": "2bAZLDqAEvyJowxBucDqBjHWJrCiomL6oRU5QtFf4eeQVFLtnWPidw1w4muJKkqtMY9iqxkKmYRqF5RBjfBwgiwT",
  "key27": "uFrgM5aqgPs45gED11BWPaZ84ZKvYyXJC7bQiQ2m31mSV88GVnY9niohcdAJkrjcTipC2FyMvmM8CDRDjX9YZga",
  "key28": "4UsTMpeqGeamUFeMu3SeDtm3DmcMAiyYjY1EMe2xbREdwvqbcroQCCH8uyGCjFUT4zqAa1gUERks8UPRNnRasDuy",
  "key29": "3N6K9pfji7g3YVUN4eq3eZjf16bZRvVxiDRBFzv8YSq2JzBz8sPrtiFULg3jRGWWuWLauHy4BTAH8o1iG2Fst6ui",
  "key30": "2jkPGXe8nL5E7zR54gdPuShxgxnzaDA1jGfHoyjBF2KAyyGxpkb14DCPEAzMVBip55RnPmyTUnHjn7Gqej6n9bdL",
  "key31": "45P3JNa5bK9G9RzKXExBAc236WaTvUn9uDPrpwVJosknyBTwpyRcX8wwMGz4nbqXWbkYjTwSbq9BsH7um78NGQVA",
  "key32": "2fiUruRFDTyXQJ2Ap3Nbx98BsuMeB2LHPj7kiRDQo63dM3e5bu9uk5hf4EBvkZBj98acJp9ngmqEYQfZHSrVNyfE",
  "key33": "29QskFi5fxRuKcqwHhD3SWfVmFvMhUgtf46qWhhik89Q9h5vwdYyV6ApYNf6YD6xVod2iwHQfubLCigS3MMv3c8b",
  "key34": "4axEN54c2pcYb9baTu3BYs5xoFi87jzwKRTC1q4aposWdg25T9pvxzhgbAzDhQ17ie6i3t45LDEdNbfsREQLR5cE",
  "key35": "23qbciNE5okM5Xz1Ef3qqRKr3EdBqiyZSKi8Y5GpKXfyHLqnoLvQWdQMGkHWXDRrXLHNyzgenA67HFzYHSJLYX3X",
  "key36": "4UG7FFiaMu6qKZVywDwFbSoCzAqaoVDsdw4WVFzWVrhWotS16VmHg7qLcLjxW5Va9nnPFvT1FgVNBN3C3FnMwEXq",
  "key37": "VKhK7rsxXzVcCgZ42RtZLFLZ4rjRb6MABt6VMqfZAPyphgNqbVqV9LXi6msjh2EfHEJrHLwqQKEeg9jcNnTjS2Z",
  "key38": "gtFgTU3mT7mjXTv9cRRFNy38uandviEcBEEe1QJpkDKto4ELGddXuGR23kSN367iXVUhe6oiYN4tJeKeeac2y5A",
  "key39": "38x6V6PbrnvmiChvDsZnYMWK5M3BySN4BGkdfxhui1VfXaDUBbQvHNbbBXiYSJYXYb2MTokD4MQUiVdtVrMiMiY",
  "key40": "5iSxq5BoX9oPcbGWXxRLvpTDhdVEbERfc5k6YQukoeW8BbCrenfTNV7gdpzDvjJKTZR8QyQy5uiihUbnPy1Y8EmR",
  "key41": "5o6KdvishJ6stMkNrMLjAobGFuSnPAXhFih6UyaQ7eBbhiYexvwfDTzgx2Xy8uhtmr5RzT8wQb6DQfoSqydjPFnC",
  "key42": "3AwYeJnhYBoao873xqa269dbvBtJ66HJwv7vYgh6BqBVghdkGrU8fFnv47pBrzEXyaZKtionMyUBu4WwucyYnBMC",
  "key43": "37Y7zhZThc43ahDN6HB7dbTiCkBZcspJRsezKxNSRvy2Wd4oSvXdmXm4FB7FuA5gusDx4uNgeMqszWw4rU2pL9j6",
  "key44": "VZzNDr55bMzaUSf792FXHeinLpvuC35vN7dqGV265NQKBogxYAYDiEQ1bsvT84G4Fkbd8PCASC3YbRJcPwjE4JU",
  "key45": "67fFqyCtmnfnHSZZUAAjN2vEaRFiPap3FaKZd9kTsoBruhCRP3voJL8DXGBVJ8FDBKzj1oYBeCfUFok5Kwr9WJnJ",
  "key46": "54WxUhP3XRdAKBRqZkGJb222wtpY7eLkAKNtrRcwnXHdwvfVC9GV7yW5kFAhrTgGtC886gmJU7kCQwJvxAmHZeTu",
  "key47": "4YigAJYpQEvS9LZb7fiNQaZXzCX9ik9nhenUu8qzMGvmpuiFy4XBkDer6SqdU7hvrK4vSjgnHMrnqoDJpcZxcnDe"
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
