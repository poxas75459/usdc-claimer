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
    "4EEeZJEUQ6M99Ecs9v7CK19XhCWZGeF2yfPcakYTU3qzdRV64pooJAVXL8GDMQ2SFXyNmeJLjK8gCpWNPw4wcgSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "547VTJMvdMMgGSTFrTwNxkbGDNxNzE27LFEVA6eiFmGpZ6uGfTGKsCiUezKRsegEd3h5GC6jhBWCRk4khg58XbjQ",
  "key1": "2qgf8wYdRLccZsy8XiU4g4NfYdgwFeUGuRUC5rtb2o3DHJ8QGL82iMEguZVj4ERFCLXS6You2As55GUVinmBbmdr",
  "key2": "5jVt1xLE3CZiv9qkLffA6HnHhyrqz7GzCZPUTeJiyGNxBfLcSXvPsus5MuW1yjy9aw3BepVXVK5Bk5a58WUdHhm8",
  "key3": "648tLCmGLKiUKnMMv7f84b4yvTFZ25dWUMntQyyz3zFPZP8BsoizHFsdvSLh5VQNzdV1fWY5xycSVuCLY4DarNeK",
  "key4": "56ZE6f6fTAG7CU6CUumshMxby767MXpB4giqrU7eMVQjEGnAbmGQzeXXyZb9zS8Vomo36a6WShbcpN7KqEaDy84q",
  "key5": "5U3h1FL9DN8uC63UNwAuUaMdybHyw23uv9AQigvX9VUQ9ChNWXFzW6LMgr93yVwjoyA9K8jrmxt4p4esapWwnCpE",
  "key6": "4vQ1cd2DCmyHayPKPkZWcuM1K5HBDCKyuTZac5qknGmSie7szTpAjFUmk6mqHPfG8JL2veyQjNZ9Z899uojLmaNV",
  "key7": "5GEXpDtDVVoS1AjGZ6nKKcXJrcXQAGWU1BcVBftHRAdrrodue3EhSGQiwzhPL8Qj5hWmX3VPHeZt5jWgatcHzPK9",
  "key8": "5ngwSb71t5PT7us3tBAktapAvewm4ezpDqZMAqssbas6dUZoVrzhD7daW5CNoGp3x41GSHG6NkQj1rwT5Y4Z1aC9",
  "key9": "41affFkZnNB9smqcLe5tpbf4bZDgMFnv5eT8knd2QoJXm47KUH6eooYWedGQqQKJmgWPgYvnoSvKpeXRJWZQBixD",
  "key10": "3zaFyvFJLbyua7cVSDDTZc1poWiZJHYkxUmWnJTPfqJXa4899b6Yr34nWdeZzkSXHQw96M4cam7EnPaqvQ3egDrW",
  "key11": "5CjB1yaraezgsLwapCkDVc5yVvqDg8u6hTGu3kAPFBA93sDR46RdCbXDrDUq1Nn6VjnDmEQeg5CwyK2ipcsCu2ph",
  "key12": "4MKYCYmvua3SnzNV4R194DbMCR2RpVmFu54PinnvMR4A8YrhbjNYh765eqMqYzv4sVAxrvQfzKPiVBYvN51kTGVt",
  "key13": "5mYcz6W9aaKora96mapkutdp64s5pJZ1ErRovNN3Hj8thZP88F1JfKSbC6NTigP5uKtCEEanGuCqRDaj6BunSzkA",
  "key14": "5kJooHT8fUQntALG5UUCptXG6pwshA9jY2GfEqVxRftzSqh1Vo1tQthLPxru871WCcphypegA8ujgTAe3Nrvdtd1",
  "key15": "3g6GsRtvLSF4WV127xFEBA3dqWBjE3LKeUw1MazUV5cAWKhLRuUfSPMaZse1NXdmkbiHqagKxbnhWyPMuTfzpoVp",
  "key16": "ncUW6MCr5FrL57twFAa51oSRg7tcZgTG2TMKVRSGa4L5xDExSWwjAfWfHYepwszgWPFM1BFNhJybx4sMyQcP1xi",
  "key17": "3FawbgCiyVcggCuR4jWf1ajYe1hjQMQpMqR9M4pTcXuGDCxTAtm44ouXCS3sQegUPLt61wshqhBWVHDjDFgXgFmN",
  "key18": "36DYU4N2AWa3aCWjNykJogXKwpJ2GUQtwHJX6CGT6tvrSBTKGheoZ6QqyLo3mCkm5rMLwa8NKLxduns8ycpZHzUj",
  "key19": "4G89mPUQdYVb9z4ev761Kds6R7y3MsbLRPnsRbtdnkV248nRm5bBJjgBxT3sT7YUAN93EcVeEWqxovnW6BoMGs6c",
  "key20": "4NThhMihgSg8zgn7porThCKH2fmZQwumWmHhB5KhyZBNm3LJCktR2dBh3TpNmFAHN2Sbpam7xX2bW1NHQACHUME9",
  "key21": "3Y2A9tPCWLJ7SEVUwGzafTuVdMNHn84m2b2X23cmpLbfuQ4KnA1tvgSRRqJ6Q1bU8N94Dv7fqbZ8tvtFppxT14X",
  "key22": "45ZK9etRKvMGDN1oRy1LyN9NA35Xx8Z6caeAxFnZZhN8uvmCNoSSDCEvUKVB3ZsjQXFMudmqqqMC3pEVicDnPiqC",
  "key23": "5gpBiBzXuMvGRVGAzTgc6H5fjGq57dDMseDUR6MPUwPP79TfGMkPo9Ge71ViXDFqmA4PEytdoozoxuDcSh2jR1EV",
  "key24": "5eJEHXKjkzPqbs4hSRiiUBNNPLr7gHxgJ2cDTSk89xSacd2pmrSnKCgMB8pHapzY1vkC8acg1XmFpmmA8Bye5psc",
  "key25": "3F58AR2FXqgW4n58cPZGh4kmNnkNfxy4L7qFNwUyxbQbuu6K3PLhLVAgseL8typxxFTkvYaF87F8jaHf9jKzyoAt",
  "key26": "PPVdtSFPcK2vJZ3nti45njJqiTSjqqAHzG55ZHf8KD4PpzL31jUw1B771nBnqcUVvU8epqg5wU4qooFJRpzXhiQ",
  "key27": "XWcuZ9Z1fZTwGmrN7icfGYFkHoB52hVZXMFZLxhHFegf62vqeSV8Nuyz1L7252vu6cDniXS8LwthvT9AfQMi7TZ",
  "key28": "5qqRXsZ1Ug1t7z3cB1MFABM2iYXaX4nUUsaevZroLpMoYjVvnvTVg3kDps4cysovgBbKaVKH5t6b169cj23xFa9T",
  "key29": "Q1y9y4xFWnnmNNqMF7StXXCt9BQDvD4z4dX1EV1DmcnDrYPMGkrpavvT4ftmvrsX4JVZYbd6tQEewZUK6heF8L3",
  "key30": "TRFXGS41czvFNqRjoGucQjkXmQBSTWuPE4ng9LuJ4s5VYi4CxaJ16J2vRqFCHj5xXYGw6XWzu1wqWFN5NSoW7Rb",
  "key31": "6zz2CpyNH1azWEXGXUzxR6DKfm6y59a5DtAKfvtBK2UKddwpBjEZctw7QMc2AkVT7grmLGUNJo2kf9fAvpciSdj",
  "key32": "2EZYZobM8ecd3669bJ4cgQTmuPBboDNffApKjU2gziKHVHM5M59CyJUXceqMqUB2FRS6rtYXQcuT6A88Bu67SP2F",
  "key33": "3X9f848K3DhAoHzq6L8NTm2HKM3beoUxaBoWbCDnCunbSD7GFb6KFzkEcG6SZL1UdXcrVFt3DWcmjjG1eCZS3ZGa",
  "key34": "1hsfRpxSRaFCvzxyN3cxzMgiWEshXkhRuHEe83GK9vAYWCSUMMtBNhJHAwou7yJpmCj6oersfR8VX9GwBPVSdZt",
  "key35": "V7mCTcS4LLTZiWhDMjKuSjHqXTQjrhfeGGVKKUYTv2KSfJoauWjsC7iZ8PyRNEyycxVaXBMMpkRz3bfoP7GGgpd",
  "key36": "4hw1qKahYvVRXPDryMMCtTDcVGG5uFB8oFwfd4cMVyvLZy9ZRr34pgLF6Yr4muMkxKSjTu21SS8Vsr5WbpBzshxK",
  "key37": "Hgvbaxc5DVwY3wjtnaChDQuHNksa5cR2Gvfe2wm5BzzbZcPHezwYFdA4dzGvWH9sGgduY9UFqDx6sSgQW24dkwg",
  "key38": "2jHpxZjfJbHsp3HjYmgQNzzjWevcffPGH16yY3Rcp5zLKSgqJsVsUHnpNZBw6ZmUcG92jGU2Ta17p1n5VmvwmLA6",
  "key39": "itieuxop3RBbS2vexR2obTfic989zDnXLqwSaYvamq44QLRMk31owbuuYvrUsvdL9jrZW1FivvFLXYfQpKND4hN",
  "key40": "3U5uCTAPtihVt3RoVvnpnND49HAMHqwyijcZAs2rHdyQCKNwdWg3qGsH73UCjQ2qM14myX26TpEFHWvVYAnRCuL4",
  "key41": "5zPexWfh8y2q18EHHySNSkde9wFxXHY7GrhDw2zFAAm9KNuKA8NVUaVQaBqxZyp3H1tDwLtfu2GM6b7PwUxLBdzh",
  "key42": "5u7mhR6n7jD6taypLRhcYPTopa7Td7w4j5BrGdsLTzTEf84kDQDGfeEKsjYUktWsheLJMSfZ6wsszysPL7yYt68q",
  "key43": "4keoKXy8ZhpHzp1v6AK59x14u2s3ZLG89Zek4cuZy1U5CBQZMP8bUSa47CHaMNcyCVCP8eKH1LiLhJRZ9V7S732F",
  "key44": "5GKUWdTttQZSkJYKYSnMgnsgrV8dqQEZaXch6tzqypWSMwRyxCLrm19UBxeCDLu2AXyHS9tm41BSkYu5TzTNGgjR",
  "key45": "5QVEk95GKrURJdL5E9zFt8p2Mx9CCDTvH58H2hwhkYS2dWXVSRaDHNgc8zoqVgpGedix9GfTCDqZS1BKhsRymbTj",
  "key46": "3npaVRsji9Kry3cWRiSujwQy15hVNdWb6Vg6CjAeepD2Uk8YgtdsuNeARPjYp1EjL6hZwzyehTDrpbxqWjQqBu9A"
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
