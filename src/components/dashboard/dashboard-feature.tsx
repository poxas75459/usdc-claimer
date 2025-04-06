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
    "4ZD8MrZYK2NBgn1my3XVx6ahSKj3HShdt8e5pqZn85k5BSNJjdSSSAXsrQyRn7ov2BwDPdprAoK4TyocTZKZdXP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Gehrw6fDKeFsUaZnQzcXEurowFxnVfb6m4L5xcZLBBsmQeBFAvpuavgphN2zmikp1suQkUo7RHymWkYcK8yppq",
  "key1": "3iLFWWVr9zJSKwgLS323Jdwh7hiGQQjbpKqjiqpNUwRAEn2bqsxgJ4zijxTpbQMeX4hDi3R3uGbA4gHHeCJM1Rky",
  "key2": "5jSDsVeseCk7scWPoMtPnYMXjqgjh7bbKMaL2pEDvnGLK379pwEA8yLwYkiCCoKbv7vVfN2UTBistZgJzKaWYUho",
  "key3": "4HkP8rwNGrPgYndMGobH8TeAcZnF3iaWZpTH3Eu1ep9sgJe3dUrizxi5LEffDrG5xkJDzhzX7XCkqrS23A5S8nJ",
  "key4": "39N7wGnXScLFos2uJz1n8oaJX4wXJzXNS9UoicmTn2w6PNGDXaRUQBsufcbRicv7nBiuQbHE6EdmV6pgsKTT5MtP",
  "key5": "2uFaM7StmBGAMMdSbK16owputdmAuAJFNXQvKrgc14hfSLeHJckfAaswhjQ5vejKekTJREwAn4GhahHuqozjAR1Y",
  "key6": "48jjZErREgRCgYLzRDRwE6D5ieyzBJBWERgUthcKJ5QAy5n5QXJpw3dh8jaftKPGQMmSyQyYPHL6poDU546eZ7oa",
  "key7": "51CBHpaLhjAkPg3WZuob8xtV2MGjsBMzvMU9R7LonC87VptQAcvNDa7EnfRqaLuYBWzecSi6tfrV7Ff6oxv8cznL",
  "key8": "3nUn7hDfRjP1nM3YbQANTBFcuwMgtGLdeBnBNTdZEgGswpJWfZm3sgHxRisCM4amKddojG6JC1ieY5hnoaXag4xd",
  "key9": "4vJ9UXuSUbDXc4qyT4Apm8s1rRfiBJkkBbMvGAkTuBi9cqUehUgM36c8TCVNq21VLHL86MEgdTK3VZLtAPU9KzdP",
  "key10": "5XV8Qp5rXkrgWyu3w5Z1kgSMyBVqwrupmaiRmGa6DVYLh2W7TabmBpFPfzaQoAcpQLhyEHmZVdiJ6qNrrPQ6UXrT",
  "key11": "32rcm5nTDNwR2c2CWxPaAd16rdqRNWx27UpDRAp8XHSb9NFn9rauGXTb1GBmUcLgSi62KNMJ4qMCsEEhyt3pyd9h",
  "key12": "63b4cXwHNp4RJmK9QBxoT7o5mmYRy6GwNxKruVQ5T8Rx1jZ5cVp1F13cjMjfRy5Pnsf2t33heEDLTj2bTdVuvqbW",
  "key13": "3gYioCjQmJJzKBwcg6fZFPaZR55SkHjjgUYkuuEoA14e97kVZooHhSRNgfL3QuFiA2wcyPyKEeGurmRVwTJJwnax",
  "key14": "2LExxxrtZrCtvuiL2rN4yScktKM48C3AHHyV7oKxnTF82XhM1DbifBNEzQdm99raVpdMkpfRChVKoPGyAvZbDKde",
  "key15": "2XdA55tYmKRM8p5LtrnY5aWHbej6Z7fkTHvzumFi3oh1Erd78yiixsenMFVtC8tgwmSmYwphqFbCjvTahYPL5pBX",
  "key16": "5bMoYiu2WbfwmZ6HKn2rrJu5iKJ8ufqTbpanStM83uFbrCxwRbhB5ShA1WfWtQyKuzMjQZiX4aDtqaZsJRBNCJte",
  "key17": "2anTg7Fi1PQmtcBda4mFgXhz5gZsYVZ4NHbNEVNrKJQRc9XLMP6r7tNx9VFGfEMxMUjPM61ftyp8p5cQLv9MbsSq",
  "key18": "53oAtANModrwFAjLYh22PA977WVBoJ51Yn8HzkRvFzagdDoruMT3ttH8AG3QDXHgAau9bRWxuJ2avgShqNpNhnCc",
  "key19": "2AgLieUwmJ17AcvNFdnANdCG9KP4UoAvWBzkKDMcKMwLuLab4v2jwBSczHuzdRgwhy4Uyxauravu6a23VX1baH4v",
  "key20": "uj9zv5T2noPmzHW5k71q5gUkTLXu4VYgzr9htmCG3fvNZUq6QL4i6DhRarruVwirgVmKsTaLNT9rtzV24ozhNiT",
  "key21": "8FZ2vKyL8mcqYeHB4u2GiPn8VCimJeC2vJjCJHkCvuVkqav4LsJvj2WfYi7RW3jEDsfWEZREo6QQtB5HFRCt1qu",
  "key22": "5yawKU4KmeWaUMw1PETbmCnjY1SburKrPJbRzTrSdVHSZydVGCXK4tCUwsn1cXM6fCTsTyqfJk1uJh9TAgJB7Po5",
  "key23": "FWky5VEZ2XuRSXxgB8X1nJSFowu4obK9AywhJNmuQ6KDBLMrDiPm3pg5aHmEQMWuQuGrk6rarimcU9jj4MYAJNH",
  "key24": "z7dc5jTF63g4zG3S6mgpS1UJa2zVNcsnUic2uYAC9D5H3gyY8ttN9T4mes5uZgdSMfX4VcN9gEzne1Jjm7dqqG1",
  "key25": "AKfysDdJF2yQRCfNydXXhHSnmsQAMNSaQ9GUznoQ6pPVJWED4gPCqYMSmZtKgU9Xf4EeTVinuhx8zjV6ogmQBWW",
  "key26": "2TkBJPpRq84N1orzXRLncuDwFxfpa1Mu2HWFAco4LMuYnvRNPLGMvKxZeoCtCgTniwgEsoQmdeJRWDg8VwGsYXPo",
  "key27": "5F2gkMrW9wh8Rpe4ph43ffFYDv28eguGz51ycPE7yr6Tt3FmrATMfwuKnv6jVXR4aBoXuoGcNWLayDuacFotVMtM",
  "key28": "4MP2XZL5fSNjiZisJ5K3Pk78yx3NsL9XdE5e4FKUYbEvenGS7y8bdh2ZxemFTLBXcrby739VnynVnmXuv6ZSrwyY",
  "key29": "2BGJqiUnavYSCfp5xPa3PbCbZ5URZytgCSuzNbxNbWZEWnrBNFwAez3HaoTq9PVk1jUSUKykYf7d8fQrJdWUEVrS",
  "key30": "4j3Vv684FrTTshREDicAfxrfc6VPFkRP7poCGu7RHieGZdTzjUkJBtge8qJPHgUeaZsTauJXDfYGZSdgr5P15FsY",
  "key31": "vhGghPyXKnb5jX9TesPNxEY31ekahzRotCQCSPgs56E4nCQhUmZF6k9b4rTPU8nhVLEKjiZCfeR2xPpUeGxZoZL",
  "key32": "3iagd2aMJTqbWwdo9rmv8GQQ6UBUCKUZVAwPTVPwJdc64EixbPdXmS1Usf4Y45xpRpy24UA3f7fZPFWXBJrQgQWD",
  "key33": "5MMjTJUzy4Cn1eocnsWL6AuZNb5nPVZPw9tQLehsAdAPuoZYJEaSgwo7Be8f1aHF6sNaqqu43Rjjg5xYS24VNY9d",
  "key34": "5BkcGbJUKrG7JasRNdBRrQiFdWbp1pHBMu95QuJcWW6FyxAtn6LbAsEGFhkcvA97n7TKQfot5fFMzBUAnLa7eMZU",
  "key35": "2gtsYKFS8L3kNcNfopdw6JznJAcScBNw6y4UAdY4Y4jofuiP9qRQQbUQRh3S2tPFu1vdSp2Y8Puz8cTURnzxLTc",
  "key36": "4ejfuivy8V3C2mdSZs62Nt6uVPwXnubZmUFqTBMTa4xv3ygvyMCt6QA8qH1C6wg73NermmragCd22Wk7gAjRxFmz",
  "key37": "4x1TvNnAXUASsP81afnDwTMHXMpcAj49jWoZysQmogXXBVJhAHZFKSpWkxwaSm51p4maTHcddjSF1M8oZn8KwYK",
  "key38": "VSbDLXMPWLPLcphhQzVyh2QdSKVZmxfpmhBC5y4qLSNbfyzFMpC2wrpikt8rvVj2EWSxd2e9z6qgn51ZQM3shJT",
  "key39": "TqLxNzMWD6uGQF1Q1WLBtF8w15kGkCouRFowV6h9jR5kXJyvwCUExdwCLvxsSMgX8ANSdmbiqfJGadqUsuTP2sM",
  "key40": "jM72cVm1nBRhUYxq6fbLn47wia7C6Towc4Mg7osPPP1bs2orMNbvQ7TC4ZUS4EkdMY3Za8eMdgWZdEQyHTeu5K8",
  "key41": "5ZgNukMLceYigyYe7JN6behnRKvNtogd2Ggdf3SCfjNWXvKJu21mrpKeuZN1p8E8BqPEjGJDaPmFr8bCVxsLPLhf",
  "key42": "rBqRvfTARp76oN1MRZQhGhhpUCx98znmEwN1PW95Gs1bg75y4YEgfCsRXtAjwhuMuSjd29EzxmAqrbXybg5kT4g",
  "key43": "rXTJbvKvujMQSMHgmKk6YrihCBtw8LKY47W1KXDcft7BFbnngqSJTyzqUv6CQ3w4G3YksvQ5f3WYHfWyX5rNCfx",
  "key44": "5K88jddyj1XXKdGzAo21eotkWcxJnjjUTzGQxzusozcx7sEqh8y3m78uwbpmXykenkQGd46mHeinxURnWh6BYuMq",
  "key45": "5YzB4FnCbXnj9M45GtMhvXF5bfxkN4g9iC4d6Lxydcjy3YNPpHP7xeWkBhMi9RT8echGfxu3RbLHnxAhAPHsAsyq"
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
