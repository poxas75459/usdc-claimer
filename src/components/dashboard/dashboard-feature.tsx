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
    "332ycTe5NHK2ko5y3D12M3YXm6gzvcF3dV9fbffDtexxbxKLdPiSprbJCFZ8CEiqqpZHjNSs9NMNjpngu4fzVCLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4idqiumQfAqx7fRJ1qrGJqKTRg6YzbxpwRatxw8AyQP1RiL3K83U9fnbFLSmJYvV5pVu7swXN1cfWRRpbh5iD1hq",
  "key1": "j1TMBiY5vVzed9rKZqd4AhPxsceoAd7PunH1BqUH7FUyzzPm56rE5oyQNJTTRX88cqTJpF3W8yPZBfptqNFE6nC",
  "key2": "4QWbZ2oGH5pwpLdu8oL4W9h17C5iyJmY2SmsVCVdGSj3TTcG71Dy83RHGVTRyvjY7bMzwiG16foWyou2QaGD8bWb",
  "key3": "5sjqXsFzSj45R6sV42JQ5YcDJh2m4YaeK9cwj1vr559XUVx8V8g7Ef9bqRY8BJVhJ6yrJFajZzpZNHHXXu82gE6h",
  "key4": "4vm5ify8DiN2WD6C79g733vQUdsHpwTWVvkbcjfkygbLYX8jRBwQhwsawsy74evBQXfbMFLfCrCwegLEv1JziWB",
  "key5": "XpZkbC9AhEaChHKuKvxq5H6tKen8g36NwCVLcQPBck7BHbY1vEz6obv5Vi7ijVPFyLavFP7TRDViw5VoFe4ygjU",
  "key6": "3bmZmdUpyKZHPNiWHDmBy9kBwbLRNqhq7qm1cLqPiHUfKr83Chd44vkfC2BvMy4BYZF7njomLKBDwerdjWxP5nXR",
  "key7": "5AePU8AdJa8k1u422SzxrnSmoR5FzqKRxneR1EARD1V4dLjiJpcrifVSikH3hD71mUEDjpftHqaYSLK5YC8GY6vG",
  "key8": "u62Ykw3mE2ssWMChdLvwGDcacWGXmccLQ6iPj7TMPD5cgEhvNEWe3mdnwGouvZwhohnMwtppXkuRLkXDJmRbuPQ",
  "key9": "2ZpNHHt3T4KPPCX4Xd71UhBDFNGsdWYDjMcfAWSdVRy7iA89sZGhKQZNWtL5raCTKWfsn15Ubmyq43nq1d9X1Y2X",
  "key10": "424bLaGYGSXdNEiLUcimYQFrPmKyingcjxi9MPerHJPYc3NkL2sMuHSAHGmoins6QuuWQcrnApcoAJx5ftZEYyqY",
  "key11": "mDXzNUL46b8XQDnpY26eiE3GhMFBpC6J9LMoqA7c8ZArQLdXkNZwpidVSKb7LG2ydQoUwKcNEcaGys5KH2n3pqG",
  "key12": "4nZrVi3jWhH8yPoKr7Z5c7jyhzBbsABy3nx3odgsX7krbR9Dd7xHxbi9VfXXSWzgFXLDB2JCfudGiDsyhqtBhNZB",
  "key13": "G9CUoRPdj8nPZ1jGf5MbKFFqb4WN5uTLBJ7FJx2kfDPvAEhTE1s2M3Sx5BrGA8g9xUuh8zQHdntNAzQn6tV2VzS",
  "key14": "2Ejzbax7D9eV4TqFRP9a1Eg3g9vetRD3mCp54vomYUkZd2Aa2rteF6HWR2Ywo44gaT41NpLJP94Lqsd7bpZg8639",
  "key15": "2GFnPanvqXpC3uXw6hej91YRaTDMqy3dBx65rFkvqDLMszm32RPAz14eaeCdRAYxjzejCdYH1X1e4LLVf8tpsPMy",
  "key16": "5svtB1Vc4wHjMErrBEvpKfGVnFqnzLyjoXCu35KzP8WWU4rPpg1BwYXSnnvyjptYZw59XkcyaoXwDkdQ1g6RRKj2",
  "key17": "2ntBgqZXge6gDny3DuWG1ALtYqiRoqFMx6ssNwnauFzhaKjF7kn1KTHeWA53bM7EJiWFjUkhu6nXB4ZDHxhEgA5F",
  "key18": "3nGE714BnU1knASworq3Lu9EDHufu4LjPLGh6BRAJH7dDiDUmreUr7WqBsRBBtpuwYDzDZ295gfupukyFydtXdqL",
  "key19": "KBmuMVSakwAPpBsfMpTBrKZN1xKJetSXfLG2zsxgEwzqu589WD3sJDWkJHwSEBaTCxBWpucELkZLvKyTB31CAFJ",
  "key20": "212EGCxU4AxYtwjfu1FJGs6CanpkeGB7WAJG7Lo5StMufdykSqxHtE5M7HABtG86bjZSEN9wtT7gx8gJvWaiBiyn",
  "key21": "EW8poot1ScCtqQfL6ftiawZLCxGUMkt9jt7FAvRmZv3BA9BaQGuPJHZsHuvRaXHJ8KGNJCfGMAq2TYvqs5jpTKT",
  "key22": "RrjqFdqbkh19CSP6p8pCatUzmvMfC8VwUjNw2SwhnfqKeMt2ggUKCLiwZCYy1tYhFw3d5orwSmqDcg7N27bWEmJ",
  "key23": "2Nem51huSpz8izSPX4wWihN7oG3TULkYy6s8KKjaUHFU3poVMcL4DDpArQiCsHhjVWkKNVn5kMHZCibQnMyrDeSc",
  "key24": "2CMZUH1mqm3P6WjrGC6p3TVojmzedUhTZ4udt2vJHdMaDs3j9E24FYo8AU44r3LyQv7bzRXbL3KMoJTYWtsAG2Sc",
  "key25": "VJJqrjRUQ2dL13LmttJJPGdrST8xLDWNZjkSDcsZycdAhrdQk6dkJ1mnByw62KCpoyEVhvQcvtWX7369QS5CSGh",
  "key26": "3Snigc6qae1ekmKJ1m3CtwHyrPPgLVymFdQoKUQ4rboDPdrPhiRaGPe5aVDhKofsLay5bW3SXPk56ygzkyG4kTK8",
  "key27": "4XzGvfC7hNTaThZLe7nruDdKzuQioBizgFMbKyH49q8DfPwbyAucH781ueNHeibkwLtaqygDVL3CcKXDwbXmsA4A",
  "key28": "3DT5ppbQqFwTsNC8JHfkpiEo5LHLANegnjMMKZHry4cUmRacEergoqVfcfKpd66rhrT5CFo5rjswUfjawjMjGxyU",
  "key29": "5RWoFAtYRSZqzhLuK9RWdAMCQeg5JFF3T1Hbxcfyftr7oeD7bqorFX1PQgcUp1Cpa9iVASUWKtDZyCtURQej2uRP",
  "key30": "5ZVpZNyLj74RmyNzWruaaYzZCYPzW4vxqkgD4bRt1KT8KWCPTX1PEP4PA4hTjZY7N1TKqPuwaVVJqraqUSMKpqKg",
  "key31": "2Bpv6dm2p4Kw9v7AF2rMeDANKbnMfL1bXDGfsZk3XPKa8qYtW5XPeicadke5h3Jiz72rEcEnpH4gbXjGbLs9Ry2d",
  "key32": "5QQee4do2GsiEnLni9JxnqmBPAqY73uB8VatxxN7daAkCkPyvreSHZ7dNboAURDSpGTmuPLDmHp1cG6vKvfvXB38",
  "key33": "5ad6vXrJGjZbxRjoNVQxiT7ZbeTjVpyf2cswJ6aZg1yQuzP71eTw19miFzDjzpnkVrkQ7zBiTJFugD5cRTSVSnpW",
  "key34": "4hUSZRwYgcK3rD88pmp2mZcqb3TVQhqh863nvXtegJ2jZ2tA3rgDt8f3C5nj7PwCvdiU3Fwri4F8FCAKNMVgJpy8",
  "key35": "kfaPXuXfpR4vNpav8FAuTtKDox1oEHtJ9ysoCkiRtm6UhBv5fKXU4PmgzXvbcBz23THboVFiYzzKa8hKNUz5YGd",
  "key36": "43WVhmmFGad27J5HTcwP3ZPx5NeWMNAL12px8Gbinb4FfsZ2zXh3zJmvu7QJ5Pgw9XE3FKtAgHLLfqoEoGppsZUK",
  "key37": "2pe8F6RdR6fGZysJyKhvxXiv6SyLZjsx2huTkeVrFJ8WMCHwjSVxkLiSd61hqaS4XKqFKvodP5SQfQqCzXrCyot9",
  "key38": "3NzA7DXMxA6iQKufP6BLSkbZK1KbkDUGJ7EcAihBW63g66FouZBi32J75cEux1Dx1MR6B7waehWhWmWyfbu6XX4A",
  "key39": "2JJNsKCfFsyd5Wi665rigBrrrBJSSSUVHq3EqgHcj2VxmGUacoMM1CKLY48B96Pnd4TSecfmPHS8rfkFeGcpT2rG",
  "key40": "3TmVCoaabcAdVFtjQUpR9VFwDXs95sqf3Lc1FWcX5urU8xp1UfKtfyNsS3bJ8AKtgVBJG3xnWxAiHKpaw4ZPSUyq",
  "key41": "2WMdt4rHHx7f2K2ZVYZhF1XgEEoYW1otHMnCauDovF5mUiKCvrDSwnsoSfQVrdiagSvi4rW6CHnK2miqYkwzMfhT",
  "key42": "3XaCEix2HYDYsDcymcEC6vFNHpQytDz1Qnaw7d7wEXTESrVGnFXxfCjYWq4ukGFTuZjzT24wQTAN57SkrRnwU1WL",
  "key43": "3rCAd5gL5D6ZMohBnMjA5W9hYQ99crkNkLRuPWECaE8t7QeLdFuzgZSYJQ7Z26SVCKpKBxhVt9hBcDQS81EYiJaa",
  "key44": "52jo5znNLf5E6BG24WB4egBX9tPSeL7MCVjgv46bfuhjzdnpzvB2ofVvsiJFsRC4ioAvT4dLE4etMMT9souRMSTh",
  "key45": "4kYDuoFoGN51mj9AGirnHuFAjV26ppHu3Qp31HmynqtneQE5AHZnPKc5Pg5PdK5aqTmBMj1TCgkLZvKfMhwXdmfG",
  "key46": "5hR6VADVVsNpWfMBmBH6xrPLnknm4e5wSGDu3sK8tE19EsoYTRizVjKthJ5kYDwYFrDCBiVvnEHooXULrPcn71Sw"
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
