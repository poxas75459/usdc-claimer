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
    "4scahECyqvi4xUEZ5DWKBkYjwZkVxUVSmoGpx4ULbAxekUUdRse7Uftuwgin6nSSx9FoD8kft7Mjx8na15kS4J2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "398tGNxcYzskaEnHZQ3fFnWKjSNqiq8M6tHNiFLvPjzhYJu29MctAJtYaFJXgTYRqKbZZsSRhQx4LoFsqKJFwSbx",
  "key1": "281JfJohtgG13vTwhQa3CK8HJxnei4F5KdUQ62iMpdMnJphotYHcELH8fqZHz694WFf3KU2X4Q2Md7ugMN2vHGUL",
  "key2": "mdcik9yNdVsDwuNarkMzsZagdAoY4uYaRehv3nfbxMApysYmrcJ3GQbAhiyLysNrqmR9qB1RUkCVo5der6AExdr",
  "key3": "3V81P7SJW5oR7Rh3y7jFPZS3pxp1CJjzt98UqrzPFru64YWeYKymoB29Rph1sAX6yZsApcu9oSHtjUnYyCU5PUzZ",
  "key4": "4uUGCc3jzFUupB3BjBywJzs9nPozkhMUTBHBfxUpq4njhQHCrLaGTbdNYNo9juUuFNBEsERFyff1CKxDx1PZDzEC",
  "key5": "4ZvwLnVSofBGqAEKQGFTBLuQMWJj1mPCpMYfDhqvVEW4SrNFGmboGBNzmTXHkzTQoRdcr6Dxkygps853YgcF8Eh5",
  "key6": "TdHaJPjdiJiBS4DDM2EuPxFEDczuqfENRJU93ZkJpudwHdMNCradHSUuLRjNDWWE6rM4xxndDUnJN2VR7dTUtwB",
  "key7": "2YYq2M1HByA2SMWAfWjygxKL6KfqsGLPr3LxFrnVSacdbtQgoUQEdZNrejHeBiGtETeHn9YZDsUHMy5AFcamLmnM",
  "key8": "4DWC197nooVva5fK5gjgTnKFFDCCvHrN7dUEExwRzU4NSsM67ECoFmJYrGijpuRsGwryyKVXzF7vU54vTWsn5aA1",
  "key9": "25tpEC1KpZGsfZgXezRx2U3fy6a62rqk3KxWAsbW3ZocJmng8wSDbaNjRoXjAGpYpbEEUuaR3BZ2s3tCYyVRh2iC",
  "key10": "5Jt6SY31dmwDaUc6PRbB82MpkZhkUarqucMHDnyVRa5EbPJ8Qt1z8gba5H32qVUQGX7EV1A4iMRZutPAJzk4gX18",
  "key11": "4y6HoQE9wrkJmSCSjgjtopc2SMQADTzUP39aPwbJccPE2th112TW9Akt8xH4AtdLnDF6EqtmQZHQerUzzXhwLCgL",
  "key12": "5DjVaWQ8XiednqZmG1WsNPWwX4ivJ3E2oNjnMpCqRj8mYFAJqV4dKpFD63k2aTDRonURqPJ4oX1npTdLjUyoeoaw",
  "key13": "4pNhY2QkUoPooFS4SAcuKsY4fNKEUUGzH86equ121o8Dq5CYcenMnACmMCe1nWFp5bbfHu2aa5gmSP8SDBmPmWgz",
  "key14": "4RjX1rkBqy6EKEQX8XT43JHiRRQqawVNWSUGVAEXEDic5uP9LcQNeEMqJWF56mXuCqMfn9u1Qb8jmFEExdCMFDkv",
  "key15": "3XaNcCdBjmnN5cxqgVBUa9JnSie7ZconiFgvw3GNUVT29TYxJAVV3DbL7bNko9GYEtY5NT1289KrPXJr8UUtjwxg",
  "key16": "3XT2Voyw5PUuWJ5Jo4SHehtxsfbeVVsfgRRnGU7hB4ws2gzzS4wTJFy2MB1TBAsCaXTd3AwvDrXMT9ZaqEN6BpJd",
  "key17": "PvWxXBeLbvzmaBHcVxPVfiJETb4RF1rUJsXt7o1JW7qV5qQ3ApugDPsGi48CuNTherXUt4qjxSdWRrrJmxbSNTJ",
  "key18": "5i6pFwsRkQjiwm43Wjr586xxFrBx6j1D6CuPtsUTz3SFVthC2J3v1jc97vR6QjgSm33nB8y46Y3ZfFhnCz99Ake",
  "key19": "5HLz2t4nCy8XUVuZE74wiACHuY9H3twJ8MW1WBZ8D5ybn12fc2mv9oP3RkpgT7SXtnexKAEkdjfc2crKzJsfLKg7",
  "key20": "657GZsVxZjGDyG6D6SMd4y7ZoQKk85Hg1ck2qnXBexAbfZ2GqBb6tJuf4s4KEjmdMakoDTDWYgG7NBYdddmMiPD8",
  "key21": "5EHSP5Bu5YZby11Sn8U9QQfBK3K6U3jWdHYUnmJQL6jBop3znAidvJyT58jxPXH8a2o3g8uttCX7j8TgZrJVdwpr",
  "key22": "2bETyvhFSbUMPSju962NFf9hVCrHDgEpbqouXJ1qAfo4SfHF5r2pyTCMpqJkSKc4frZPyNL1uHqLy3S2GKmSJq17",
  "key23": "5n65cBkm2cHaeFpUWHZCz8KazvHFp1zRkCYNGVqpeT8bEbaSAyWjH1hQmwmdPz6Hodg9VEzHFKSUQPetatYB9EZ5",
  "key24": "2LQLC4M8Gxn1PQfaE6fkKq7DYdSAygwsHUKcMsMLBtEnNJvy7krK6kGHbWRS6Vj9ng6BYigu9fgiL2bwgudtrXQa",
  "key25": "43gzC7HnV1v3S9S7TzBQmqGjj3yuWBea89pTddPCw4QWumqF3ZrzbmVN6S9HEbCRLirG5zYgWn3ZDJiBFZHvumWv",
  "key26": "31ki8Lupq7nw524b59uguCWAguk2XjPArzxYF26zvEDAzAX3N5inUNSfawcffeyTgjYmLkobqjDxMj4qgBbEp5ah",
  "key27": "5YAuBAWAYAKTfdzJGkN3dZ2nzC1oH1hVfYGQHfwqr9SuvLFtM9QyyqmcsdggpRZDRuNuWwG4mr7vYHaQBkzBmfrW",
  "key28": "5LZZ5XKVq8nkLG36Y8sMsQSiio4gvt82ZmkgZLsSSq36Fxohkncihg1LmfMqQ7Um83hDFLJXzohyeCT7Q1wAxWnQ",
  "key29": "4SXDAsqYSTtqqdw1CKCyMY3xbcEAg3QDwuB8pjdXgjMvc2McMyEi1457dQ67e3DcZMU9pWgon4uyYMTARuCARfaM",
  "key30": "HZHWCaJV1miRZ3MzpSKy25WDg75DPyBLHgu1m9jbMAjtcrhwm44CMap9xL6npYEwmVx3SuRicnJVBWDhBJ7G1X7",
  "key31": "4DL9MGR1Sv37bie4Zt3pCKVMPshDXqkF2dVg9wc4897emf7iXvwUrX782uLPSV5oAdp4XQqFTFmR77R3qe1siq91",
  "key32": "5LRNqJjEoG7bCq12Psvz9Bcn4sdJeaNxZCAYanoXJwVexYphQsKxMn4sRYirsPwt4X7Hnfs7kFKhqEwNkjkEPVJw",
  "key33": "3UdRcMg9hqBdrKLrukBYDh9mUroSi7NvuGj4hQCPjixmDP2CFeoUPh5Z24sWKoHHj6Fe4n6mVkHxzWHCusgdu9TT",
  "key34": "2EkCSiPK3otHSy3vQtNu2KKnSCZhZQJ4kYw3q1dgr2jhqJxqrUmooETMgFo659EACPauc6YaWBfty5V9Ar8AqwgY",
  "key35": "NCfUTkZXt6HuAdY6UL5Y9V5PTrFp11uXNDFAuNwXG6sdbKBkDpN14amGTqNrefNBRMwgmuAofuTRmtffYyRaNnV",
  "key36": "Bx7QbAnB3hJcoYbvY9FAfUiZ7k3ypeqS7g7pnMdC5qdFeHcNAV1Dhat8obE7AVpE5EQLobttWJ2LL1srfmmJmxD",
  "key37": "42eagJ7REHLS1wb1qdLZ5Mc215FbTpfPDQrFvb2JvGv5HPPkHjE3ESgjLw1BKfgPT4XMwqfCkMEtwRRFbu84DL9C",
  "key38": "tmp51ipHgHTSrQFp6fqSehFxbVfFzwMEHfXvghhNFvcJVnUybxwPbCtsHn8gbPN1FJohcuJvh6Q7R7uhKucCofT",
  "key39": "34etaYs8RJ2NmiAMZDeTS4ocrfZVBkUxkHhCaU2cFxzkM3wxNZYbZVAS8F4nj96gqAhoME9t56o7tMj2BukYkbgB",
  "key40": "5bXLPirx7jUiwZPaeqMUKSsKhzsN5wTYBH72KTKfoKaKayvpxMmZVVLeQW7tE2tHKjvcXstjD9ppWpxdfiAMRFX6",
  "key41": "38Kp7tCkVQVWjgWeA84AjuAYgurujL8hbnRHpjRdcW4uvpnUg8ggCYTge6EdhcjjCnfsNEeac9mhuAGB2cCSkDhz",
  "key42": "2ptpNXJMCFLjRCvvveFK2hgRqSVcCpWuJKuHre1EA5928Mk92JGXzjd78b8DAYd6krsKAUJPrGM9gGPZ3wN6PRfW",
  "key43": "2AUSHYKHp3WMdMf4iXnm2jv1j3BcJVEwHaCAdYT8TxeWELszBAco5eJvAEEvBVdwPgLEastoZsiXCJmVzD9Pg2sP",
  "key44": "2MG8XjHa8spm3HAvCVw11Pobst9eA7xo7TJ9PbmwMgRkN71AJiPxiRenth8UkSVRZrXWtLm1d5mk7RvF65DuFBVA",
  "key45": "3G5Ug9e62LFoEY4R9GzwUV6CkF63RMZTUVShyTwYvMKMrBHxNgWupaax5Ug5ne48aUJhgmRc9pkfEMRy4tP9mYDH",
  "key46": "47nb2ZXtLCnnLu55JNZHSUxVsD7zx2jNJv2Vdb9jbP8miD6Lh1HBznGL61q1kUDstSHpwdLyf1x2c9u9B4VsxoB2",
  "key47": "A6ocjvgtvYyBKvEap9CWbUSxJEsGFCfD93kzvLLceudcQyPt7hYi3gxtdGbcM1oCNPkesmdXXabuFTvcSrNkC9A"
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
