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
    "4CYoqEeNU3yuBJaVZo73UStyzMStSTCwPTPAhgWnAU5yGQD5azBFd6RGCGdwUuz3zg2K2rrWHHtyrTSK4ZA56qLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4drB8CX4SnCSeX2C4UrrAErjHG9KzdR5eFarMm4CM8EaqruR4HSfXZWoHW8vvTRVoCyFKzKxzvNpn4ny7Zz9QSrx",
  "key1": "39oV5BTQu8wi9gasCPV9EQ4FjQUZYHWyEM9zFqE8ezAguhKuvRHqDEDwAPcdBR9QbK1vb2UXgv3nb8mKkEPGQ1Mk",
  "key2": "2j8k76z6oDaHvXuRt7br6H2BC3WYSrEoFWc95SEEfypvJNekpoSuZzgQyYFffxE7ykRwhAH1kVSLXpuEtdemxztk",
  "key3": "4on2nGbetYMpgtuM7uryheWvz9vYt5ZQK99X4a7a1gVvNSsuvfrzJhe7bYutwYmdEtHiggYTDEY2tCp8W4botaaz",
  "key4": "tTUSxTHS4BNS5AkniUnNNvtzjzhaLsa6jBEiCBfYxsaQ8Xqo7UswGRemZ2VM18ajT4QAAW9GhHWo7VDEWQDfLLt",
  "key5": "fi5vLd1W1vgxeR717uTtjSAi3hjLwkFrftUBvDH1y35pNC4MjmHEnzsjaRxSoofCrnpTorpPJYo7tgpvgwriYGM",
  "key6": "3UVi3JwdKtqnttpeVEByAQwug5LUZfZ4WTzztPu6gDKXPjD9FuduuKqmWLvfw4zGu6rL9ewVJYtzCjADEq7dddJX",
  "key7": "5ZpGhErv2ZK5SRPuVgdDWT8eaYsZkmWuPGbkfymC1rWW7pSaYC9Des6fRpHbeDPhzCEGW8i65FHTcTrNPMN6D8xx",
  "key8": "3LMd59cLtEUbwje79JTJcGVNV2uWhA3SwUZ5m8QsCk4ZHdMn6umX7GW4ot2h1ud5xTfh6aMtu1jV2e5uqcfEH7GD",
  "key9": "4ovYMHa2Jo6p9AnCneNbxtXhRVNmh1tTzNrQDLwxF3Qc5trensFzeEZ8uuMbUEbsF6kA16QRw8dFRiQmg41h6oF1",
  "key10": "2qwnGjLJ2VbGk2DajJM3JGtEr9upu6zTjir4E8q6FX98zxNX7K8ddnw53crZyfi7YJ5XRnKoZuAoBF2LgeqDs4vr",
  "key11": "n9cRp9JB9Ef7vvrwXuCfWbKncPdATKpubyoKu1XfXDPko2eu9kPcDJwmotigoXZJkCrC2MPoBrCfYhEeBmFe5Lb",
  "key12": "4gXNDoPTFyDyuakwCBzHxg9LtMRoAU1XegbsVBU3miWYTf6kbMVLif7kSTwu7TBdKjDZ6HhUXCr88yaJMTWG7znf",
  "key13": "4DPShcPYReTmK7rfpCCTw48E9TCkYhdfBNFmvsEVpCXCaCBDw5Hz2aYdorWLqJo7VKeeHGmdbMuRqWLV2cikGpqr",
  "key14": "2XeJ2KuM2daGGPbXQi4hiaegUuGrvjYEcbJRk3M5EsMNePuBi25QxK4EouXkpGvKbiFcziCAwmWESLoTn6FgdVEn",
  "key15": "4z7FRGZPrepFTxjQfw9SiHPXC7NwgJDFy4fN9W7MKyJaZtMr8tvwmVZmDDMRyyGjAp5G21ptyavek631cMUCtvAS",
  "key16": "s3HqQaFfnbcgbHWy91XZLdsrZoE7H3YHp9gzMqLTo2kfpuncKqU9qbNhNZbZPaLiUqqz7iXQUtGTWEryGcsAxJ2",
  "key17": "1eSkQqxjt73tpsPDjJUtwM5JzGDELBRUMYaggn8mpvmi4LLfUreZsTGSEHj9Kdpk2xzTue8dxohg8i6PA2YhEXU",
  "key18": "mgz1E39ui86dszTE2yvbinNFxCvR6uPo7h91jJyjRhC2iHZrkTyBfhcLzHom7mCQxDtCQA5HT1SxD5eNmVWN1X7",
  "key19": "2JXNcdarbb7VS9rnwNuKmJWvMbZAPRvnGCeAQ541PEjgk1W9VP1acAm8iDrWZCzXXqDf4UnrKhkesdUkHx7jYJMm",
  "key20": "4ZTXT5XTd6ezVT2DzmNJ1mX4jjMv7PhkseZK7qvuNCW7yoSQZDFjfJUrwhoarF4NhAT5Rxw84shJYpfeTm5QmNHB",
  "key21": "KHnC31GNDsyuq7MiC8WTcT9BUzUDLkESSujo3RkbVuSZ8dRDn5miiUp5hvvdLGqJQR24D5LqAvgq1Pckuzv7HgH",
  "key22": "2w8z4QWBQqMMJiu1XFM8ybUf8YGFoc5fZwaBWCF23KumJrQMpJRmiM5wmhLEDTaWcBZU3j2cBjTtvaAJqhSZjt12",
  "key23": "2TRaYcsbDRURQLNLiT85SCXqy5y3wm8HgTFjMzrf87jthM14yjvCNu1Dqs1a9adBk6fM9Dsg8xNULUV9sCbCcTm6",
  "key24": "2Funut6h8rnrP35dS84MShhbwZRoceSvuGxQNKmy3nEHXKD9WoWgje6NtXQyhP5MAxdkjCPwGwFyFvGzdxbW25or",
  "key25": "N33Bp4vGKWAAw9oV9x62vMsEdDwxisDz1TXwXjmsesfDan1Vh9YttwVpUpqQ4UKA8UwzT4m4ZHf53FRbfNV16VB",
  "key26": "5HfT7GogkWssWvK2aBSppcjerLCT8ht5w7hPQ4xoWCdecVYeyFi7iV6MzNj5H5JMaFAtVtMt4o26DeSMjXo1XUSX",
  "key27": "Kxet6KYRrMWuzSGxqZWXcTZxZPD8tXWYGJURFoc5RLUYNTted51i4ArXDoSmL14ZNAGCfCyftV9wYV2MeDHa5qj",
  "key28": "5vW4bQRsrfFEjZvxBALxCJDM2aPMAbRWtzZ5qbQN6rskp9WFddF7ckfCpYSYoAV49GNgmWVAtX7BYG4cEWFSv589",
  "key29": "5ScbUNY6XzN76F2FtmZftEfoxdQ2q6UYvXN8DWTi765UuQx1qbHuagam9oybBRQk3fqQBVz1jpENkrviuGruSmiG",
  "key30": "2mgML68iaJzyuTMMpRbBeFej1c2ceo6b6UeSS6t7TCmDjfTyLckXfVbnyxqCPAHdBMMF6WHZi6kVQgNCrQLYy46k",
  "key31": "2HhcHZ44oaMipQRasUnvfXMEYSWzx9thTddRZp3At51xT6GYYEBErr58Ej6wfLzK5RbnNedgvKPTi8E1d5LtJpP1",
  "key32": "4GBGm7fy79fQMM9rU45deCsnRAmRgXnN5Rd7ehdQK3hwD3ix9H5e8Yadyz97Gb9JzRXBc4qRj7H1FkKBK993rxGm",
  "key33": "5GXZ9hyzCKGBRUFcav8CB55DfJP9nQArMm1st9ArhVR1P4wDmGCMvqd1NmLLExETdciGzMLniHnh9sXZ76bXGdbB",
  "key34": "4aBwhooMUnk9n9LJibpzFyYpSzuvoWTsh3hV5ubSfEJEo2heGX66nB2o1z7dYffZZ1nSXcqA4Y1pcyZxZDgy2UVL",
  "key35": "661LCyXSmtHKv6zaTwGqPACLgwuKs35uCBEcXCpxQnMsUMGpGxRBthfiPu4o3SgtYnahfPh87UbTd3xcFiehwpFt",
  "key36": "2vtWSD18TYRQqLmw2kJsbVMpWjR7XJdZW8XDDDPnoYg8QyQWAZcvHdHvb9SQrUiQFAGuNipA3xMq56vehRzcyW5P",
  "key37": "dfEqQqKj3n6kaM7fUkNkotTXLQRLdEXNYvYJtupQswFfNbQF1MiPZGy5uV6c7PrjWF1oEbqAXNDmResU1ojV4xS",
  "key38": "5cMDEr4ZaAaxa74ZXzJ3BLagp28ftAgQ2Rqrj851qEgRo6gp7WFApU7ckUyPdfQsU235oKTNvTL8PH7q2aK1kG83",
  "key39": "3WFWtAhq4YFsrfXM3snZu8Hdi2J5tHJYcFxjnkDcdsy5s9fGCNU3otK7yC2UumuVd1pfr9q4KFHAZgvgsW1QZJ7T",
  "key40": "5umhooARKofFjgiVozCy5jC7SVC4HtTZtjex8CrURdzWoNuV49UK4Pfh5Mwm8mdaWgE3tWK5LF8B56prQuHZkmr9",
  "key41": "5XxBbvbm4JNdP35VvJTs9YQzvQ4LmuYhRnG55xf4Xr7bw75W6LNdZ2Z3QfBMotZAgBm5KP5qeqMzeCx7WDsgSonB",
  "key42": "Y7DEfY7jrDLNpTE6kYZTj49mhbSoW1k2sBESdF9mq8WqSwGV6rmb9doFApXj7cf4ApPKZpUzvGPks9us5p1MMC6",
  "key43": "4yPNH7EQt5cJVycnW2uhKNLVs4eAyKAqNt9NxvKViUP44Q8QqMo56rHwLzoYLs6RSpEkcuQQ7ECW3dcWk7YCgexF",
  "key44": "eCfAxh6bVLwXWrxvq7B3Ct1JFKgmP768bedVQi47pXZ9BnfJuKaT6jxP5CY19Hd4jxxbvD29R6QomWBKZ8YRUwi",
  "key45": "5DFfMtezCJB6L6t3Ar1azKJ9dp6sg9Da75fijdJMsXEKy5bK8VR2BVZhhKpTF6y1ds679949Zz9Su2jWg33sSbWf",
  "key46": "63fDHA3Qv77dMgdBsfw6gn76LppT3hokgXtxt9L3bo23E9TC4UvB4YSYQbtdoixqg6s3rKKZgejmERDnN9MNwQtS",
  "key47": "3phKe9J1EEXatCRT562TXsZmv6joBE7kDV4MB8f2eUWvLfo9FMiPPoocFLvJzQUCm5MP45nihH9WiYe3R1Mp5CTx",
  "key48": "524KQVD5U65fCviFPBXz2oMvvNKZ84rXMSHrUepy7P797zHSYxW4z71VhJeeBMSfkUH4rTaPh6DaG4XH8SPApXyu",
  "key49": "cvmsevZ1AGVfCsKvaicfXSwQJ1sXtEDejWLK3QBbaqkF795EPZR1kV8KYjk5Rb3kHPeMYjjQKBQ2Fnc3kfmJjig"
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
