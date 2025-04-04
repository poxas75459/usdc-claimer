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
    "4AUHJmm3cxDNrcVd2xHBcomxzvWekiyNv2kyHxBHnsHQiAtP7gyXYdbWYsSinAixDYyAQLwaeJxdJiuEocwKSy1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdU55XacHfaGKGApPQ2oE3UTLudPeVcsC8yQ25qJZkqJr4iMvdr2xFuzNfNqxM3oF67EPmNEUCdrBKVFoakE8Fw",
  "key1": "2mGrfswf9WN68nFUFonUUwYqsLxuYwfwSNiMQJMhCWLwB3ZFF1fh7iKqHc4k9hQ2uh3mycDGusdSXTDwYsDVSR7B",
  "key2": "4L5cXbmSYAUGCEwT7AJjmB2jh54J8bMwiTaP4Uj8stpbKXjZf9kyamLSghQdGpuw4F7hVmgqeCrzfNLAHDWTdAcP",
  "key3": "5py2JjfLQYmR1VZm7EFhTWkHYQfJMrYFKKVAADURx4vHKVsd2dd8LnPKU5AiH9tDNKDkp9GGFcxHV9WPCApQ12qx",
  "key4": "jf6hu3HhqJdUqqRzcbD5Fye3UW5LHipauvzUUmYJvTU88wnLPTzdH2swjV1RLFicoLnuJ3aFQqyDU4UoWn3dtPn",
  "key5": "ZneXUbXE4f7UnncCaiXZBjzsCGbzoy8gEaNcx2siLSb7KNmbgMPsN8VckS2oLFy83f598b5VPVvGaHkotmd6pML",
  "key6": "onYhGaDivJhnHkBy4H1MEcpde2AGqHs5Lvk7cJrvXtge5ZNRVfhcGzCs3EitNC2aSC4baRqL2txrVX9sirRUgvx",
  "key7": "9dhtRKfXmv8HSGCCBqShp44mBuSUSfiMVbbcN8nbrQqXzhNpc9t4vVsKKQ4LzSCpGfcfeKjJ6Rfa2JBh6X2Y5pt",
  "key8": "5NMefaegFv8VKPvw7YfRncTnqPjuDoWyx87hrn3RaxRcvKNc4v8NbG1Apf6bahmZtjS5LPdAA62DCFVZad4omiVi",
  "key9": "2t699EKvW8GzdpwFCEWj8eUi3os8ayooGEKASi5boqdAKTX4MmcKPs6tq3kGbQAjrahfbTkYHBZZUMnEpm1768pT",
  "key10": "2ssyBBmysfT8xbYGxKSrFAEBNWXQHyFRDf3NzHXZbfgGKYkM2TFundH5Phf4Y3Dt2zcAW6gMvNhM2PKcDwjmKvza",
  "key11": "4Y6UPvEz3xJ8B4yTM2PzT6edvEnaxM8rptPvmpXFsTLSh4qfZijCWzZhwtptCnEhhPUNogwCXXZntgqvurN7EEAA",
  "key12": "5n2yBpp4NzZKEXzbK7rnhQUjh5fFsJxqVmcHvx6hK68qvFVsJeFyLx4Z5tN8vCsGe3ZrnYji4brAwmj2iZSExtxR",
  "key13": "4cXyE4XfJ6m3pqgVHfkjvd85X2s6XJage2HoVbwqbvKrkhR2YnvWhBoB8sxHCBgGWh2NKUb6imQ4YZ5q16SQb3P8",
  "key14": "rzrFJUrgKT83sG9mnC9FqB8SzXJzGTCB5AcJxVvTiK6S57bpRaKv7rLoW4eUZEdatdq8SnPZrCWD9qLRrQu7pto",
  "key15": "35mDDKtKfjfsRnK1NDm2q47mY2r22wwQXLN2cdorkWUebKXkwP3xSNCwbL2KBAbGxJirfCt7kmD9qDN6cWkg1vEs",
  "key16": "4zQ7hFNQNmJHJWy7EV4JGp3QKMTYr8gfLSPV68zkBFhSmbsagffPtcABsRq3YNiQRxbLuWs1SoMeeuMRtpZjVGKr",
  "key17": "35PPsf5YWcezgNqPmSjckpmXHLogeQPq25h3S7pvT65NoceQ4zRMbqjVqdQqE4Bu7rFxLZGWTWdEzvvEZbTWwrUy",
  "key18": "3JfGTv2UC2sAXs38Ex3posAs922Fj85sggBa1oJFmsNXzcQZ5U3gcBXXucYbL6QteX4BfqXbLwYMHcda59LmDNqX",
  "key19": "2x7mR9FLXbV4KctuhYJ45ChAi6tqvDk2HX1om5T7pQvciwWf7uK33zRLcuSffWtCN6SbxsdNtMu1i1yCWfd5Yujt",
  "key20": "26ZYKN4cJbFWJ96LE6oeaymkUviT97kVgk7Rck4VwZ4Y3VqQmygtaJRpJMfT5aKTTK5wAVLpxKTjjJerjaTQuosb",
  "key21": "4ZC3J19mMMNRD354sTtvtfzCw41FUYG4cXnaBV9MD9C591CTmwXPpeCAHXMohzpUUsADtXfwXE4yknJiDvEz3dbe",
  "key22": "4J2kSb51LqDSqW5YwoJgQhFPWJyxjeSSLVvfM37pY4zb4PEi6j9bzXYRTvapxfeGwzMMKEGuuQopQ4PKDgEKVNrB",
  "key23": "4CWhhsj8nmRtgCQtgqkgqMghyTsjnC1WG8pVe3Wk1JTofbPgmvsnkrpd2sifTj68M5SnXVaYc4pfGGiKR14wheNH",
  "key24": "gh86DJKBKPg5Nn5Jrdo34KpKCp16DySeHFscHo9YznX8Nann47RnJAyAvMP7ZNNKpypXgfyxmZcQCj6zoW4wvyD",
  "key25": "4y1i6uD5p7sGS2X1cSH6mH9PsmoxaUM45yuxgmVdbuX6Ve2abGcBL7tNyT88hJtrMsq483shBqaLnsnkmvrcKQux",
  "key26": "3GVChsbui8RERW9E9QxiDz7uvLFopk347M7gEVvp7CcsVmPJ5bKkF2Y9bWzb5ef3VtBZRx9DNxRfdmEayJ8X53Nh",
  "key27": "4ncNGGUuem4eEkuoAtjApsH23bVrRm9QnEJZFWypLVC3jxiw2WGifPhYtDcHDKEbpWfEsmZyMQAQYgJ4b9rq8jHW",
  "key28": "4fkzM4XNKNebfKVkqbrCSsF62tEtzLKcNWkWPRtkjANZMnsAJX2nJ4SDTRnvMdPkcgguWwmkMKxyjqZ8Mpwof3a3",
  "key29": "22XUjpzm1qG6bPVqLYgs4VvcEWBFVUfECc4i3XXax4AmpAgeowyogUjP4JGuB6bsMZLPLA6Kp2KRtqd8BEDfCXWY",
  "key30": "3fQct1piFdSzaUcDCMMqk3gDafsY4CvpHkK1XdjRD3DZiT7yX1kU6fKJQEAn55B6ERAfW6efcMmGbxnTdeaLrbh2",
  "key31": "3SgevaroatGxQ7Qm1q3C5vrHaQqTCtBGsnmXi4MbWd6umvX3Pr8kBdKxT8dXDt7FN7WNPyoV4vPMPYSU8jEQ7TEc",
  "key32": "4TDEB9Rg2wcSs5Zppr9hZdm8wMmn9a5hKEzeR1JW2KNinQy2Cwn12gs9kHSv2GvHjkdzRYvURdc1H4YUTDBUSr4o",
  "key33": "P58VqvLgnAcmavFLpnkLZQs7CKDrrfFxtMkA3PZbWx9CmmDaSsvynx5gWZFpH24r2x7juzHskAswceQ9LpgRtdc",
  "key34": "4JNNLN2wSj5mw84XNoRJCrzo9XWetZRYixqo4PsSjmBBkLmccGLz6oKAnH29W7FNY3qjYDTYEF7oGA6wQBvBMrJ",
  "key35": "2wdKL7cFz62BaeyyujT3Aq6cGNcrXV22StG4pN6BjG1vVzX2Ziv79q6qSfJXPz1KCZBv5HPLE494RuT5xF4GLEwy",
  "key36": "4T2tBtttFsu4JC1fEBURJHs4mbfLpxDoofNq33q1UipQwFtXFG3tHk5iaNLNYKVdsgVJrL1S6baQsHrg8skinAJE",
  "key37": "2V7KoYqZxQwkQF3Uf6LajyPY8eu3UkcrTFdzy57Wx1wEabQkxaafWE49toX6cDexSbqRPesFcei1EjEqt5Kh3NAM",
  "key38": "62VDCrrW84WWc4p34TkM6RWwomBpSecRhPjkJy5ryTGuLvrthFDKsPU7tVCvscaWPHCZ6pEEzFQrbYQkzTm4xT3p",
  "key39": "4CxK6VvDEL2m4sCYD5VdVaJR8XsETQ3rmmC2vrLmpNYBFpLPkTWwqAXRTDsZPKHoiNjdFB6gCgM4j54U9W4xVpd4",
  "key40": "3UNJgXcYjfuTSuMJ92QVPuc57dBF82xQgBExgmojFkPvZ2mgz32ZQpsJkEXJD6aiGPNxc3zwhkG1VPTnJ3tc8wEB",
  "key41": "62mA7C9pALtabPZMeziVicavSKznu1voLveHwNEKPN7p9pjuQCx2uyVxX8AtJsd98hLji198Bwyjvf51AhTK6WBZ"
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
