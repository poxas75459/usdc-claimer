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
    "2xqPwhyj27XJ1vhzMFxqavpZBqHAxsBJSyvPdkm1xz6wQVT6oNqrUz5RdhNLdS3aHraiC1wQekVQfwZa7h6axRo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQtgdK8sHmy3e1ot7pB6yWWEdZGAcpAebkjnFhT5FDCqWD6M8WXcn4bGsX9w15TnGHH9woBg65TB74MTEks2cAW",
  "key1": "3TaxQkYTm8U9zVdnb9J4MLn8AqVjLTkG1AwQCDjhaNSrUzfnMcVuQmrVhJmjaGfqeJWCk7vaMQjRxGE6h3y6tWpu",
  "key2": "BReUz7CFXA3ShoVsAAzaNqRqPtSwgjHWZ2xbV7Y8cwpgvDjBd1P4AuWDV7RdUGnLW8jYrLUFGou1ERuiLdu1Kpj",
  "key3": "3LbiHBzTrUJguesxgnKHPFgYcFrUJebwLgdo4fYtBuj6Qh3M9zEPGqEQ3GmBkx7BP7utsvHmPF1x5dQrxz8VyR9T",
  "key4": "4W9gG61JNsirAZ9AmvPhDfftKbYf6hnu4MqSqvwkC69sqQKTJFxk6P8x7ex1ZAGgr8ubFKRUzXkewBC3khXkUfTU",
  "key5": "43voP83MJZp9t5qVWf454LGpc6DgkhP95u9qkoapqqc5scmvfB3tVS7hjjgACXZ7STiqJzvpNYyLPkGVSBXRXs9t",
  "key6": "3AnZwPF1MjgHkVbYoiz1bhzVDNnfAsjdzRZZQW9R9qBfEUESeVAcaBEKWx5BjFd9NycJ6akqRfoF1GNqbAZk8fpW",
  "key7": "yHTtLLvHXbkoj6ngr57g2HHhXDsdrcnG4Xo3EhtzuB8BjQzvXUeeVBmrbr2yXut1Da2aJyLBnMuGxb1xPE3aeKR",
  "key8": "4gk9oesBzrDRrPZpbjejbwnHZfBkjnerDSQwg7bVT4XbATUzijphoT7nWkPdy3yoUzEzxdCzyb2AK8n2hwU5Jrvy",
  "key9": "4TcztqtYMFd3BuB37TaSXhg1zdmANya345ondV2fvNfoFjTRYhNW26oUceu6QwnRMHmpXzhELjuM5xHSMa7rj91W",
  "key10": "2mwNwF1PiwVvTWpa76T5MMyTENCD1Vae7K5zizTmYtG2fDFvbB3Cm7ctwCm2r1BptWxgrNN4PLLXpZn2owLWuzaN",
  "key11": "2FfKhQ8JzSV7QpXFhd4bV7RdUMWUqm9Gu6yueLup1Nk49FhmsE4wdFqMcwYmUN4mEYHEuE2D9eoqUxyHHw3WvraB",
  "key12": "48EBNkAYqa4y6kYaKHGLtbtn7Hfpx4a6UqvbeAA6xCwXBHdcVGTEbmkfhje6nAunJhQJkduEvo1p2goMhBhU2uZF",
  "key13": "4aMvg81BMuARWP1TNkdhofuo8wrLiu596sQXc12Q3xvgt1Kz2j2n5Xofig83yuafWuvsgf2SKGzZ8awC9MXsxRp9",
  "key14": "2e72k1291FrMDbSZKDBLBW7vDmxtFJDiDaiAr3YSEjETgy5z4TktFmdEPioSHfnczRJEXjx2sc8TgW58n5KM2wXy",
  "key15": "51HQVztdw5H3AjjU8nD5B1Xk4EuLtDGiTT6MwfdQw7UCk466fMoLi9rWYdfnHyZLN3ZAEfAJimj12vUP2E7tjxgu",
  "key16": "5Cpk38TzwQeYQ2rK8tzX9kF2a4fxDjZwPj7NEAXiUHL82gVihk4n9VECFoYocJHws8J45fQTE2vAr1LvEX6SEAce",
  "key17": "4BxJvYoowaHheez6DRH5nbvPb5isawVDEEKKVQRya6sENdJoKpVQMVMLC1T9B5W5DViqzFQHBgxyazEVXNuCJPP8",
  "key18": "3JUNVaUiBLzjdGkNitv2nGECkBZmTW1ctM5TqVTzqitrE1n9QM9i6J3axiNibHpgwT6YDytXf2G5E1WxfoRUuSVp",
  "key19": "4VmszYp48EaQb9xhtNiRQV4G9MhujaY1aa3tanvWYHqQqZXgfwvY4yBh6ZG3EpY1GQR73ETEfeqj5XekvU7xJfA",
  "key20": "5HRQR59bum9c4v5NeTpeJKiLg7sGYs76vATj2uHz81rfM1LHpH7wwaXRXcFyhsXnp52TvEBpfMrTpqFhXXRhpGLV",
  "key21": "5jqQH9gA5q8sZhhh5UHW9QB6fHetLCsKWL8QtpnyqFiCbNNMhG8jLD6Dypb2KztYroEw8LDcEa5oTrKPtXg2Lriv",
  "key22": "5phyGpZNfLBVrYBiD5WcrF9oxzEAW1o3gVvyEedsEYUFGnitEXuLcBjfxAi8KVEgJjEs8ke2bu27GMcd5MCg2DfP",
  "key23": "3nkHHhLdZjcLjuhcpNTj3gxyXebouuDwb9yysZB4HFLeDDZUv99ukXFnUH1a7bEHQs56QL2VtGkgPSAmRsoDgxXo",
  "key24": "mfcKhHccYmoA2UTm2j993ph1axx9t6aeBT4sAu2MfYAVVbysV6bvET9GDdAcm4XpsVW7awm8tVVsvHgmHTRgdLB",
  "key25": "419sx42mnQQUuBV4mE3F69zQoKqMqbUBbeVFzPoztmY9RdBVbLz5WRZVFVPsEFPiCsKMPyWKn122jSRscYJUexem",
  "key26": "2XAzdC6RMJeoQAoRztrXzf6BwF9Rfpjri2ywgxYAfMEnsnLj31c87CvYZFTKQvLZAGy73yTAbeM9cSYw8Kq1hoVp",
  "key27": "5GeF6ZWte9dffYswF7Ncg6Q7u277ZVAbiMrSTdyVSdnRLDkZUsYXxnxZbQ55JBnbmKtcYNWVye3wwzrDuT3d3WMM",
  "key28": "3euHYpLbxqY6ZooQzqXQKQKhQJCJYFR4cueHvCCyR6PRR7KkXHXCVQ61KaTU4kBDpu8H57k6vgzm1NE6zXudGkVo",
  "key29": "5TFvzWzLxTPzwavPTCe1JLJVoKLb1ULoTYb2H9w9gy4xTsCCk5inXUmGrjk7cTg6enn9bNWyCoSdq6kmRUKab8g9",
  "key30": "trXh2ZAJzDmGeiqUfXnrb7AsWdkhBD8Dt7M62QPkW3jQyuBhi1qxZmcq2qhytJnzikGt2igJfZNm4MrS4ZkcuRX",
  "key31": "5348LhJSQKoJ4mkmbEhJKoi4jjwpigbgGTxoWQnNEypGPx2rLCqMM1TTQWxKAmZTzi5cME8sXzk7xez1ehjXGSW8",
  "key32": "2aBeDkbYSDQtB3LyQdjM8WwKqFQvfCDPEUdeaxfgngn5YF1Ytjea1RZDV2rZXtQo7xBPUEQTLoYFk9jzt5ibBixR",
  "key33": "2WEDbAmmsbqn1aMzq26axLyWMaeytdc9kaR7xFGHCdLtsjLjyK2Y67pj2Tz41Fx1gCf67SYXCtCZog1wTNTK9Wwa",
  "key34": "4RtH1uHRAKdrhT92Zca8c3GsskGGWURxjVZwjHGdDpHiv4RFNrcPijkidx6FZhYNDWXvn4bo6XjVL8rQsZCjw7Qk",
  "key35": "5nSHea6QoaVj5G4iUokiD8Et3grzTo8vJiHA5hehn1ZekyWYQNUgphtyERbr4ysk2P3rDBhcyvgkKtGaQ3pi3P9Q",
  "key36": "5HBme5Nc26W1q3yPX3ydoFMwDXXDhH4DLVUM8KvghfvaNzXBKoFWwG4y744HkvAJCGxQVeCuEw9VNSz7nqdvPKkh",
  "key37": "2fs9PDDWN7AgLSsbRrqupVsR5zBwb9FR2K3nnjfrDJ8uQULv2zddFs2u91FoF7HnEXrLvmKdXPmDykSjnLNjmgBC",
  "key38": "trde5ssYyVK6d5cJcd9YK9pVPfdg3HJauMNTWRicKr6RYpJ9AdYRgFFcJfP2DadWDM6LmKM1n49vRJmyYKRHhEd",
  "key39": "5SrPK6ZTZxcqDc186e7iaTaqDMWa7sdPbcEtgzpR29E42SHHx511Vi1wi4eha2tzWuqeZUVRSga3YBS8gkE9E3SF",
  "key40": "5qfguQkBccWoqEhN6WpzGfDgzcWXFR1rSw4Nfu2WN166PFqCFJ8VpvQLgDwEroW7gixeYKBYyrH9HgAVUvogb2Jd",
  "key41": "3xZ32VxfPzveijP9Q22ReF3LPwK8NWsgLa3rZV8sVweB68hHGYctoiCrByLQRh4M8sJGc7UUY1njFjD8uhDnazWo",
  "key42": "DqEQzW6coKaQfdqMiALj97QYLxyfv5bPZm1zfVKqMQtYGtALdcGeW59CBhuTg2JC32oga1Xj6vkg2qdwzhBv3B8",
  "key43": "3NNTkNQTjq3qQPkSjmAkLRF2fgA7Mwog9HdksDZFtNBc9ZZUvMZewmKKM9XynuqJgT6S9AKixRGwVhj7Bs7J6UG3",
  "key44": "35FEPEZ67BBSFmRj22weVy9u7sPbZ6XVfHUa6eFw1nLCXSZNsMCgr8SwDqNzVXxgKxwd4eTZiTVLFsYHst2KHb47",
  "key45": "2Ruiwp4PTcPGh1UzSy4Qbo9NqsVGVNhysWoHUXHYoYHT1Sm9ynsftuz8EiELNncNoZDQMxFwQFCbhRhs6VydrL99",
  "key46": "6538RJtobov8qUo18vSLaSa1z3XdKexQoMec46XqRPqBCcKjt2BSbQXHtdVwJMV9TaLe62i5yXtMTPxHp2c1AY6K",
  "key47": "5K96EcoaNyCoTvyXp2dGsxbT664P4PWjMtDvVBcuogR9G5Njgf9YWdDfydrR2cd7p7EK72Us6ozDxtqW6RgHKSLs",
  "key48": "4qKo49nBRbF3Cj8Ys5tZiMMF6BXEY11u9sRGbRuKw9FeD55HoxVVRyUk2BwXrZMZQsxAXgcJFogdhNc8MZnkhj8q",
  "key49": "2NGrkfs9hdrMPezuBZn3DkAGHX8Gu9joFYianzbSDPfkTp3htTmXh2V5iAngkWtTk3f7pKRPuTRQbhtNMyXBgEiY"
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
