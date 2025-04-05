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
    "4dL5rK5suT7drPwz5S6oJvrcsQSR4ZiYDfZwWjbGuNpFRugB1uhJhnK9raSJq1pHEn4SahoSMj1jueB5ySeojMdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fqDRkoDa8Jg8UReMV72yBmHz5YYwAZTR1on15wX7AvQPuD5PJoy1Bej2dWDvFh2DifoWkbn7VH33jzGihm1X17b",
  "key1": "575Nuov9V45TPFR22QxQuiLEV9aviHdf4NLhLGAugbPW25SiqWg2K7NMjkHNMTFcYmuHL4YQWyWHtHfihQyXLsw2",
  "key2": "4g2XAoFFa7M1G9pjBHotA32cMbEarJAbrBasrYUPaCYCGHF2ncpbv1tvFs5Y22Sab6kKRdV8EeZLXfpVegsQa4kL",
  "key3": "4Jn41vGNDntn3XHijupfumDsnAhDGiDZbi2LH5T3FQCGKqvUt6gPuXjubwoaF6xy9Wec7heEXEnuruUkkwYCDhtQ",
  "key4": "4Jb5PQZKhLmCiuQvxv7qnBMa4mLo8vsVqxQm5zya7r4FqGgabyMyPkjH4YL8dmqK2ZqM83YstxtmoyguZRyfvfEc",
  "key5": "2C7XcDKMeDmnbyLXfaMJkvriesfFiw8DbSjTpXYxQuhAetk3zgoQyS7mHy6mH8rGBjwtTgUb1Q5FkJxDVeCN9cpS",
  "key6": "29XNxbYgUaD6BB8P7BKTjoX8MR47FYyt5oYRKaeH8DqDQC7FjKoPTaFBYUvNVNtFAopKNpKNcnycbtuCrEMFBmN8",
  "key7": "2aeNFNw1gumb7ZsCtjSTtY4SWryLTRLYjnuUKoMdvsnfG1Fx6cPYZWfawSQucMZzeZTCPmAqgkVXj53zod4EfsiS",
  "key8": "52b2nnQfiJHj8ttFa68JGtYzLPuf5UoVEZ9d45Z1NhLrBbQyyDGC5vTSrpKRrK71z5UuDC2UcHs5tUqUV6bf8UUt",
  "key9": "4AXswyfGY7GQTFxdPpoUSWnNjK3YsFvBzkApEPC5EV3vFqRrKDcXdfcVvbQMDkdgJ9bnZu2WziHLvitYBKResK7u",
  "key10": "66XomNYPGqd3XHiZjjPrpuEkLJtpF1qZ7N8CvFoEZKPoGtFcRDyNgSVdJPKL69K7fJhqxBd1xBSEcgF5xBwp8TzH",
  "key11": "DCGe5c5pcsbaZYmyJBQus4jdupUCDww2ACJUdYmusdXRqMi7BbYAt6tYz92gKruWVWhKKdTNvoijw1ctpSy2Dk4",
  "key12": "39eMWY4Rz6pdBUqLvduasxH6D6PB142wtmcDLqJtrgxSQS9aSo25Eooceg9rpEV9vSnW4SSW9erG7Cgef4WEz37",
  "key13": "5rUWvYZDebeFQv36T5VNjxYc7kFrxe43MgitJUnbebgqsYgibAHVjacizbZhf3wr1Z1yDfNB84KmS7Zf2PH1Z6WE",
  "key14": "2rRv7eHbaZwDVQYUfaXGnDfxLM8eConw45tjjRFi4b8XkMaxaBcJNBjr7fUj9FUYCNadrax6KwkUDtnXXGgqrdb3",
  "key15": "3kLT8sBgXnynh6R1PY16JKzqjPSAUuu3CvXLrgnTiQsjeBpn1oz4bkQzHyVNJ5PF6u9PspK5wmsRbu5An1XZrk3",
  "key16": "3a5yfoz6krXpkg8JpdYDwHJCtEnB1D1EdqnqeqYL4tDhPumFj4dim4kh9Np3uAyyxhvAVVWESE289MzDmt7cTTrr",
  "key17": "29MFxsVKLnR7qQ8e73nEHEH4sfLuk1UJWhgkHQ94fE7hhURbdagJetL8Wz1n6fixsKTaqnMfkZibRkPKCti4biW3",
  "key18": "4nov2wsCeqjrSeCTtYTh1a9BU9nUT9dpdQPAjJJ2CX8tUnruhaXNHkhVagM96qBWpDi9Kf9Wo8AMiHki7FJoCDka",
  "key19": "Pn2AnRdMz8JaeYgjt5y91aXsjXfdyVL3DXJiL8MzEttX1rrm4SgXdTn6w7bmcQXvgxH6d2xLJx8cLUZubC9nucG",
  "key20": "31CVT1iX5iiAwMQvJaniaBamg9WMrUA4oEmwXYBbk1AjMjRjVB5wq3mGBbjnTbLi1pBDusmx5LqnSwNwEok3HAUX",
  "key21": "4yqgE8YbbCdKhxQ3HTRFM6MLU5KPVUgcY6NvjUKiCUGhF3DspC17y4zwovLjBbjj3wLPDz653vdeumbVSWnMFCDy",
  "key22": "33PgaByuegC6AivFbvxymoNfnvGc5jhzoEouLpsmcJVLhanaBGUQ2Powx6Qwe9rsPvCiKbNsENP3AnFKx6SULHuf",
  "key23": "2YznpwgQPjFisJkMwnKXxaSQFJSnPSvsTBhDxJMzmoFqiyH1fc4Sgyu93mMKV3b6BVxB58raP5y7bCcRJ5MvdM3x",
  "key24": "5SRQpqGPE1CwF11K1rLwKZiFbZ9jkFtXboaXH5nZcPHqFTEwbxU8c5RMtHSeQmpCfrje9158RBt2PPCcFQNewGCX",
  "key25": "4uGErRq5mEcFMfsaYQE4QigPW52V5ow6JAkmwwsz5sQnjvkunBHUgk83JSMLkDkeVyh71qg1o825qY9yVyz9rBgY",
  "key26": "4vkAiSSWEXgnXjg9fVafmw5X42dNB5Yo1wpEHFUxpvy6XoAUjzrUUfwAnXVtjNuFBru1ScCXTP4XKdKmKi7du2cz",
  "key27": "4rzAMo8eT5EBSGHPVtiRgsaufZhrRL589DPxC8UkLMxNNQjzuPTnZZawA9WNxKksvoiXTPcNGWVmoZq737bdkgeZ",
  "key28": "28c6LMG6PQdDYWkYCP6SfHeeB2RdysjgUXnDHgmKzJ2jNiGvAmwb5GFHZ9r2hpepjZKUyHRa7W3G7JsqjhokYZw2",
  "key29": "2pCGdpDjtHKrQXcKrvJNL7TBN1kEHVcVoSdyTwckbTUTvyQemJsYA3RxNcNSMvaYWFbk2Tt3SSV448RcBahe2pSc",
  "key30": "2A7Y4gbkgwtRjjKH2E5PdEv3GSukRnou31rwMtDNnFSmus5N3prCXsgzA4nB5Yp4X5jXY7XNYH5Xc5SrApqidBgy",
  "key31": "5d8E6z9DeyxqHSRUCdakMuyhHuVuSBNb7v7zsvC6EQS218KYUnMmcSAvygxvZEAtei8ehu3DV94HGVBR2Q7aiEEi",
  "key32": "5XRg7txLvtcaKgYtL4HEVpjMbTRjGWMynUyRfo4TAv3AtST8btCEfdYHeRABHdpu1tURLAJogCisK9uobjhFcwYD"
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
