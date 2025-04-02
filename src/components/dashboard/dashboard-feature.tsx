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
    "39dgWGmpoAyLAJzejbw5wLnCW5zXowSDV3sEWSXUSwkvvcnTbBSoya387WgaUDi31wXDtiGsFeoK2zSCmKCcXVYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PULWzy9N2tQuKaDYfZbc74AZu5wKTj3M1VHVngzzcpgunxBHiTYeNDCyZSjWVGb4HFAiXiX4QgH9gFn6MS5Q39o",
  "key1": "2JW29ARcvwsyzz7xiqkeJ4c66rH3RCb83VQ9JDrcGihKSDWP87gjctB3VTWY752mSTjbgW2snb9qWRRf84pJSUDY",
  "key2": "iDfxjho26ZnG78Zc5gEoMXj47uP9KNh8pFiBfGCuQEV34VcZpNP7YmDBg12nMDSvtT3pAhGfVJe1ZFrjTiZtsUo",
  "key3": "3ERCaMwH8TJFp26E9LQFLD1yQ1ytK3wop2FFQVrkjqvQzD8DhmVxWkknpAz823xjHVE2i4yP4bVp5jwt3z98vgMz",
  "key4": "4W65ZqQNuUTYTEgv3DGqeN33LefnXP6zeGjmQ7kMxKNfAmavvE9Mb5hhXvXfSAaLt5W3FUTJdTh4vg7jdwrYohCE",
  "key5": "4K5Qx1XUtgMWvDmX1D3stKbDJA4ehPNgwHE8gaaPx9kULhFU6sLmVoBcgYCUwWn4hEk1FYo5XcsXqobTRpsj3apM",
  "key6": "62BDS3dveRkWhzAmF8BbNKBG6xytzsHM4EoQWKV691qd2HDA4V1ezYvdPfyk9pYHcA2WffkQegJEJk7rfeSZGynH",
  "key7": "4D9mNYxvoMJ8WyruFL9MQeJfZvUxAFNB8T5dHFvvvfV2QNLw2m3vn8DYmQtd9XtvFv6PLHJuzrjYL3MqZWZzBG4W",
  "key8": "Hv3FUHQUWZku5V1aiam7NPfurtob7h5SDgL8rJ9LcUs1MrQ3JSg61kAN2ittt74L4kbxL94Fwf3cYot6VhXsViA",
  "key9": "5uzS1Bu5wnWbgi6qHXYJUyPtqH4sFGSdyNDZieQzzQ3g8S6a7rqcoBpzcR7PJNaHrgNqF2BitQ219w9oyMrfDFDJ",
  "key10": "63KhdQtzaKGocSDmKLunon2J4fVcPqJrp1DPMjcoeJQgYVnuYEtjLB7kQ5DekC9zPe5WBc2WkpNvmHJuqGpX8L92",
  "key11": "2XeqF35vDLSgdeyP3WbWFX2UBAcjwZsTHJRWUtSMie19JdahPZcSCAJ8byHZGJ7BnSVBi2ygwbiqcWq6Y17jVbwG",
  "key12": "41NvtCy2bVHZeqNU5YAAFn2FFFpEGTzYzQJRm6uzyirbi27Wepvco95BAYedKsbGxFB9CGCnHE8zS2MbMTymr4x6",
  "key13": "TRxVox3pSNPy8W4rsHHpVJ7FnwgjjCGWUCrVBLRyYxtdia37nqQu1sCHuQtC5WmU3dbKgV6MyK17ym1NbGXiULe",
  "key14": "5fHaJa4CaP4NoXZ7mKWQV5MDxRHtED5dEXSGP3RLZbaUkhz72Z57KaDSm2sy3KJ5qy438fcxA15K2Vx26dPqBocX",
  "key15": "2h7ukStxtKdj1WMVY5W7tx1EwUdwB9p6ZfhE8HqpS3bx8Bidm6YoJKkS8tEyzKNPr9pVLfAiv6MpgN6cqZZKUHjb",
  "key16": "2FaBkSeWhP1QBx9UmhT62N1nwWzZifnSaQeVVU1JWjJ6anTFfc5Ci2KtD1fGf32djmrC9UtgQJ58mnTNwfTqyCF6",
  "key17": "4yeSdcUoWB8phLYiGCJiUjFXrU4zmCfJL3NihAdyzewLQBHWq2cpFhU6duBbJN4pbaGmrk7Kw7TpSAdeMdreY13Z",
  "key18": "VdAk3CGvtQ9GZb4zBJyx4bm42y5qNT3giFyJUYm2WgHvNKQwAwBSjC1UnFUZbEhqYRkcZkDc8SSNNT5MVkUnZjA",
  "key19": "2MZLYFWy1pWR53hU3bbCk8YZ5jWhKhqNKieDDVSj9YQHCH7AUKJoSfN2Uzmw4WRyU666szTs6HbxqwgsmPKV3d1A",
  "key20": "4NNPwzgDp7XDqD29BZUjtYHi7rTUEGnJyrgE1fjfuhyFSbRw5eDoVST34ibNSTezYYrvjjirMxr96hqsC5SwV7Gh",
  "key21": "2oS3G6qa7MkSWnXWZ9bbvKzGiieYyypHiGPwCkbRsqUU24gfc3dQ8CtNRJgJeyKcfhW5XRqGsrCx8HPCXvX6cjzm",
  "key22": "PpScw9zayWweGRq3sd1amKpFwSaSA51WJuMFiaZHPsUi3XxoaAN8SfBeVqEBX7DYSQXf38jBJZRy6vvh7GfviW9",
  "key23": "3AmWUeL1MfnpYMkphxa4LajtL1uodVcH3GauxBhKC6qwkKqRpiC1ngL8VBXfA6KjhtZo2r762oqVAnu46hywdodg",
  "key24": "5Q9tHonXqeVpHUrn8ydGdaCD8XnxJAyC6ZLaUFEU1FgJQtYi3Yg5Rggo5EYzaCXkCL9xwnCfMsEV1Qdqsxpj8sPj",
  "key25": "2fKoFPDguuvhuNBejntDjs4DrsJoUNVEyibs26dpcjicBtptSHUEBPJULKcdkQbV1Sou4TzaUJQKVs8dNuDpz12Y",
  "key26": "5ejHEobPh3SoTguAsMWPqG9cLXMynwrh18GMwi4yxybodV7MVSqh3WEY4QhYNUkZbLrcLoTAnBq4jQ1DnsT2svwn",
  "key27": "5iYToRAAUk1StrBxaoxGAJUKsYAWWLePcnqpGxVENgzQKgqTNqLB7DGBe8yzckbMPdVpdUKEdJwoZ4YrUwS8Q7sw",
  "key28": "4QYPx8Js7ggTXWqEsn9mt55zjP9hjMzqR6NULbRYYjooXA8fQv5c92TnVAbZjMGiDyRAYxnvFgRxvTCkxd8eaJer",
  "key29": "3SURUutbzoLYo38pJRYNZteT139KWBTX4dFyWsuSoTFUY7Bi9YKwAJ4ddyPZ6tyP8HsLmSHGhzwm7cVzGm5NmEw7",
  "key30": "ZZZFrUizTqnCmASFSPqdWRxRaq5FE7B3rvfRXpLHxJAgZJ3VafyyJCxFtSAgLzhkH6JxK5pw4B84wK1E1iEia2n",
  "key31": "ms64B96ZtLLcyLpQdsP4cB2iD9Ad83J4vZ5yDAND5TmSuYMEJy1mVv6v93kg7uWqhPjHkuP16U7KZpxzAKFoyfF",
  "key32": "3gN1epkW39AfkpJtofYgPZoXcNKXwrPMuiUuVH1uoAP49RVFYsfvT4rrhfTRmi7viH6TeGyN4tz5Uebovq38uQFi",
  "key33": "3cahCXYYkizTsHbdrquBqtdgt9jJy1dKzahrYRTrkyGSEtibNWvfJiPoq5vMAnF13fLe1rrwAToekeAvJuK2i5Na",
  "key34": "2jfVCgsrr6jsdcMYvGPDVrPw6FtLNFtC5zE8MNdbZcU7QDRnxrkXWs9ZLkigRM5eJrr3Lasvo8wES4HpnKWu95q4",
  "key35": "nmzQxngE6Rm9Fuk9cBURy4Tm9tAbVdtTpMSqYmfRacL1H1a1qH7e7madLEdtrP5YfdBxqBWyDT29m2pjrWttAz3"
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
