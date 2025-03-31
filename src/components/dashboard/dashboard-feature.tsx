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
    "3YUqD1neq8e6QWfMrRaSF1D9UcdN1JoiFv5ff6nNMgQbxqbSLFnm7XZBfFSaCAU3YTcv9VQAMkfn6iHnfnqFW5G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJ4Aommfkpq9Za8TMbKkbVM6mhWDp2aturSRRhzwRYUHpeXBEuokbyVr6uNMmpqMudbLK84nNpCe3ScZvsaAE6B",
  "key1": "4H53FGxKEBAkhHMK3GYg8skKyn23HwYAZ6XHYDd4odcdoNrY29UmBy51yTYKndy3ESHddCVhPnvbBzHxUNgFnZks",
  "key2": "qpfs2o2ipnjDHMfp2dQRv6evYa8RyNUpdnrJN9UNdU2kAzyEAp9nFQ6buTnxzduQw5zj6Zpj8HbLjyjmXbX5rRw",
  "key3": "3JBRzQ6J9T4Z4m32Uwnk9feHUAtx32xqz1WQ2AhWTQpEuACkVesjkdWha4CA7uddsn4QQ9FDefZAPiWsRKuJeXFW",
  "key4": "5kVigX5RnQrqiRZJQfZuMjMHg466c1QPZS1TPbRDXWNcg4DEBn9yg9bfWs7FXz4EnVC7Qrx6SuVUipya5u4VZQcw",
  "key5": "4XBuP3XDixeXC6DP5reAcrb8X9hFkGYae921WDRGgzD88kuNZe2JAGS1kDimcVME2Jxeku95zQZmPziyNziqvduA",
  "key6": "5CpH9SpzgoGGtGYnW1EKbqD2J9EXsTpPRaTpUbSttjT3RtBuazDEcWocJij63KjjhpvAnqPrqQh51o9yebRs6v53",
  "key7": "62wazEPR3RTN6vzB7zHthKzBdho6Yo5Yx51b7vuM5SEBLwm8fToxZt1mNHG27ZMuVWqiqE5NpVTuwwh9hMMHNXFC",
  "key8": "3wEX8pf2HT7KK468TKSPuwXmd23MMvqMStyPvs6kZh942MZB5m5XeZVFnep2PoXFvFxi9xVZL7pTRgLjvNMs2xJN",
  "key9": "5baKkiAMRtYTsr5H3GioFx7cKHqw5jNCP5Yu9iRGnDJk84vdMJofqsDg6w2Sr2ToeR7xmdgSyenUkxyR2ohBbGCs",
  "key10": "5fkN4Ce27Aa52YRBovQZn7wK8FpFHdnkjFaVYtNBbMAivKLZasEiVLAzU9GPQJJbrUsYwCs6MskuUrrx5PxydkXo",
  "key11": "3gtvAMVXgzZyJ1dbEi2X6yqPgxfHp1brNLg7SodoRmajEPByBLmCY63xHR3YqDWWw9aj4sRwg7R2x8NEBxyH6sh2",
  "key12": "5K1WYeKNnrhhhh6GQ2nY8tNtYFZBziuZskXM6kX5MUvtm8RqeFdeKBM1rULUtdxmwDWWoR51NWivX66vnwF58Ync",
  "key13": "5JNMCma1mCJimchH6qCM6utLythvzJwHba9dR6kjjv97VGCNnvuM2tayuN24tJGKrULovf3t67Hhz8pTrFyuVjUo",
  "key14": "61uopp6NtFPLrbHvG2ZA6zAEvcwqZfuJ9NB1rmH1LoN7NggBZGiHt5NpZYfkrRm3DPUQYXR7nDkebn5c9h2e5wnE",
  "key15": "3eJYyVwM2eSQ5BhQpTYxPdZNkZ3YsQWf3u2LUVQvQGdxBbThUZZwC1cnMQfkMSuCNg9UtQHFYVwbtos4juNywK81",
  "key16": "2pogqYqPGV8Za4mGdu1Kwe7gVxUCpMQH4QbKMr9SL5sdubsyJZKtSLuyRSBi5UeXmckmUF4A8k8jvzGWW8YNAQMj",
  "key17": "3UiMqzsscN75msALWUQNG74EF9Zp6hv2Gf4889KCpwdhiTFmCG44hBAno68T9msmjBPqRKSfPtvf3mnuDf7p7NZz",
  "key18": "QYLwjJNMcD1ySiH5Yk4G8vx59ZbLUMyZb9uUmBhHyArY22xy9bMdd4xjLt5GNhvbdqTgEEconRzDXrrJqW1HHWm",
  "key19": "3dCsvvcvqgw7wJZaT4Z43VMbZpKFqTWPgnShn98sfhzi2Lv5jg8Xm1HtmfMRUeXLh67DqpdmWuaVHaSGmYmwzM3R",
  "key20": "4DZgwgPLJ9MNe7Nu1KSB5k5znW53FeU2yPMsH4HsNrfk7ju3qSFZEEJkvG72R4VeqWQQtPttAQyrp9zwbukibupw",
  "key21": "34TmehMYWpJw5bBDx67SybhqHz1qiMoXkd2Pz1E45qc8sD43Gm4sV9RJmMJ8xgVvZ8vYTkH7uMasrBbDnybeW8dN",
  "key22": "3neP8LPajuvmvBRkyHuTbRxMC86BYhUYA99EBX6LtvRfTP1BLfnKRnq19LxtyS1zcag4xLiirf4M4LWPscs1ze3e",
  "key23": "kyN75vPHjCgd4VspK6cCQ9wFVJNHs79ZYtaj5HZkA4PVo66AAPhq7Vg9eNQH5yP4Qkxg7QciDtG5Rkp5fLE1TVj",
  "key24": "3gBF5abYj8wySWKR1zLBRztYxcWWwx2fjKCVydeLnadJ6ucDPGsmWoMs9bQZdPXdwhRKVwWKPjHVCep7hvwdHm1u",
  "key25": "3vY3Bn1bup9ffr7TRywzQkshSwdZbcwNfUVXfXU4bT42aYUi6vfUnpfzWhSwGKc2Ea6Kxne4Zgv7TWYdRfEoJbSx",
  "key26": "4JFvu2KSBqwyeSKiVn3Gb7XCddPwAetqAneaj9kHDpHg9P5JsU1Anemf3y4o6aPz22uhg6MSNYib2jvsy942Ndjm",
  "key27": "244uFn5388vqX35r1jjLin212Rb5wrz5LfLTmwc8d5X3vXkresf3Rbim6zkxFwJ9WmG7zfrRn6GdGmrQkrdWHrxY",
  "key28": "5C9xeQyYh3Pr8V8kZ5FUXyyzB18vgS2twR32ybWEDmndDHMngNwwj6xURPNa9g9t7psFTTTKLCrb9csqmtZe3GY",
  "key29": "iaaWNAy6z6FfBQzc9ATq2RJ1rfn7rkB36zEky7hjo4NGzqjSsQUeaVB3ajiYQ42c1qma1tmgFht5xLCKGPZTb51",
  "key30": "4At7rkWEwKzQJyy7x5HsdotRSwjrGvPP2jTvtXc2WiGcNFS2BD7PPUjk6KgXrQvxhyWJK8zpCCAZ9LzkD6rFHyFE",
  "key31": "3eCZmvP6uMAke5TAyzWRRo2dfR4KQUYsxTPA1oN3A4ucep9bhDQpTq4KGFH4a143WQ2tfdBWLaLz1oxGSQ51A7rz",
  "key32": "4czEtWLMhUJkmH85P9mXwp3YQZFEYe2pEDVv6s2NbNyH3ULTZNkrz1AEZE8hicv4zdbG6sZh1TsvsYjLYe7PbGAr",
  "key33": "4Ftr39h8n8chg5C9vdp6VRXzm2q2vGvaFdbzhMvJma5HHBtuaKbnpbAyuQVrozE55geFdVxsVbtVMjVmQ3U7hn5Y",
  "key34": "3vWw1mvADDa1GW5iBsPu11KJF4k7jbEcpbytqooBbatrC1gdPEaaXbfEtV4zXp29JrQPd4sqPkg9ZguXFYMeZoD9",
  "key35": "38eyFCqivgSztt2FLKpo3YehHfD4u4nYhEpMyjsDxaqkZSaoc9t3MJSaSn2G7zGjukz3PhKVyDZNpXWPDxVkzu2e",
  "key36": "3VuLa2vPwPWhHAhUR26sEBn1sjAYJZZaV2Z4R4cPgDccDcrEwV5tvrEqPkdaXX8VEjeV4dbUDphoPTGWvosNhbgW",
  "key37": "9hLxXqf8DSTv2fbCBVYTUKHq2t4cxv6fjfvNQHHoLQbxwvTZALjRATdiX6reLTzsgfooh64PMMVwxHwmJ2pUjyZ",
  "key38": "2nWyWoJGw8KmHVNCR2Fai5DH45crEYT3KQV9bZu9ckDfG2Tk4Pms5P8Zesz4kKfmhM7jPybtFBQygHcAJ21dfoAy",
  "key39": "581hLWojd7QKPT6SvpryAvUNkFYn3tAPMb9xYBLJ16ZD5PcmTbj8yVD85tpp8PyQjVhZXfkxwJMtdRcr4FL4yVXk",
  "key40": "2ZHy6ezwYX1EzMrnBD3gQsoWHcfRVzG1voXmeNvN3NCdPGdomY2asDchBDenPz9NJn54vRbvsR8HVtHztBUmUpne",
  "key41": "2w8ejTRSYeKgvtqcZpqsGXhCxC3HdtvC9MEfGuAHFAt8NyCrqF37N5PQouY7KpdaCPLYTZsDnfxCJjCN3wAkW9kQ",
  "key42": "ZSFGpndVS4ix8X33zmx5CHPhEW76DQ13vfGXkccUQi3wwhN5KUUkMJPjJ2rRQEZYfVogfQL9qtaAsp124CBrRzb",
  "key43": "4XQ7mnF3FzcCguyYqoFE8jpPmCoUNvDWZf1KaUcwGveTu1RuezHNESHF98gRJiA5RbZSTioyopzEc7oPchCV85m6",
  "key44": "5L6dvQkij65ThZEqx3kyu2rCSG4nVpgbDiQyyybuyRNxPSo6rWV1k8obni2p2WyDs8RSTysJrUJNxN4sr5zX8dZx",
  "key45": "2JiQSojXyTVWeDTS2QfoMfXykKXpubuoAsTwykMAFJsxcSBDX4T4spNK7us3KZkhe6uVf54g6MGRzCNv2ADNDG2M",
  "key46": "4Dgaj1z1HZBA3pCpfuYKhn4XfSVMi5p1qWevQHqoyutt9TCvXHh6HKwuXsoV8eHJJRzY9S3f2qAd4hjmpSNdttJF",
  "key47": "55rGTynDDWCPEKTfTNcYr5RaaJ6vmvKBKVRNHGLFPSt1CtSAqV2RpVvNueayctgp7tcbAqy31CuY9PKVSfHvFJpN"
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
