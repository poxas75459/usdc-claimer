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
    "5W2WsbJKo9YorKCWZPz72wmraUVWgTfhdbC9WF1ZBb2EGsXHj1P7yHkGHxDovD1VetZDwivJ4SBi3qzwjQnWcagB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LFAcvWdS1K5kcRqZBbxWk9KBRj5JGFAhqeieA9nkSvxZdFCgQJHWHbs5NfEgNweu8qDbzSeHscPW2Bu84L1Eoyu",
  "key1": "4Q8t6q6SPiwfdG4RoQdp3eEYCHyJVJTcLF5QqL2YWxQeZsugwJSk85pKKpCGEjQKMTAMbmny1JAJYni5WSdXDeYw",
  "key2": "43vLz1SytH8ssBE6bS5ZSRPhRWy8tWMnVPFm53qGCE55xBTTVeTsqdbwBdeNrvutjjfwosVraKfwTtziBTFL31Dg",
  "key3": "2PhrBwrb2fp3EcXgssCLEjbQJbRAxvK9HFLL5yWddnVoq91G255GZr2HCZzFyrzjsa3F4eb8RtyJkwjBhK1bPEDk",
  "key4": "2JVVApJXQGLiWhmww3jPTgmu2rzxLVU41irjHnudAmSVSpdCQVGXRW34YYmkWXDtb5KzXBzWjthkhLZDWm2hfvFz",
  "key5": "48Z1rKCneHK5B8GrS7YrWAdmTC53kzjeXZ83rpsHqMGAgLk1fbSERKjNguJyp6wjxMg6sVU9JsiADPWFkhiKxT6g",
  "key6": "2p1mkd53FKa9sR54SmetwP3NmcQgT3VpZtcBajfxo6uYcx3YN6s1HFeEeYKczCVGrJ9MMq3dNa6xicsm4ijvRxQ6",
  "key7": "62yYEPpjwwja6VtNAHVrCLEGx13d57Ein2ZrE2a9pohG7VaU5jgasK5PkmkHoC335XiV3yEWk6XTjeg264yq3RA1",
  "key8": "dC1gzmrQ7JbNPh9f7fJkEHGmwcjwa85khVh7WdvmGgyQTiViTnvf1rkD1TiBLxSgHHetCwxq72uPSckbRNF4Nwo",
  "key9": "2dLPsLLARH2PgWm9NXZL5avz2qPd2j71Y8o8fRZ3PpXnQmwCmTW2MLsvRvyFee3MkBQbt7SU5LXiJFeFx2wAhP9V",
  "key10": "3Bwwv1xf6buBCzSvMyBRXp2mddcrp7JejTbhNi69tgcBDUF6kzTK8hUxnprRWh7ZJL2Yk72P4kR7Yp6tjviTnnGY",
  "key11": "4moixU5mQJxAwAk2uvGF1nEj9D6iB1DiEJ5oru3Nh9rM5v8rutXNznT4xPJHRiy7UGKQ14XgogQJqqaQwNxQ7iPa",
  "key12": "5faTg7TY3mDHzCtjD9eztpXVNUMzmify1zV39LBk165Ec21qeCjYWcTyz8JtBY9mtonMdh5LPLdtCvg41Qck5iQ7",
  "key13": "4XQyy9wQAYmPLNmnjUsB1i3AguuKhNeki9uHR144PYc573ziAJ4ddPNfuusd3T8hoFEyajohdcgbnf5yqZTyrvBB",
  "key14": "382WQQjnxpRLZiEQbV5wWjcNLAyFyAAFnBaGYwAb3NwXHU24ZYodZPPJBxa8VKfBEftkJC4Yuv27CFWP3vGQdWux",
  "key15": "c2aFyGB6EpewEuBhQAK4YejKqhMbcnCVbNVsj8pJxuLZhTsbK5j4AvNTTpBJ3fbfhvMFafLiLkBEPn5kMturRQ1",
  "key16": "4cKRznnsPCgDCediGewECvxcZtw1Tcm2oPSdKKz77JM4qPJgvU63bLB8Ra4Smw6XKDVdg3K9YV9Bt2TttVhHMfvk",
  "key17": "4cJeUMQr8mJe84LcDi2qDUDf1rXPSy32W7o9CuD4SPndYXdqQL2FmVngnqfa69S3ke2qougiMBc6qXEAxSMoxpNs",
  "key18": "41o6Cu5CCfjXZGRTsvtVF5gbvyVrDv4Nmdjr6TxmM2YMxwzSomLaKKowVg8syPum6MGyUyfc71J6udp83Jg6L3ej",
  "key19": "4SordLBp1Msgyp2jZSuoGZaDWnsYFmp9RjySaki3fMStieZaMAUD9hFi5AhdcANhucGcwaE33KYjBCGdJyYyUmnj",
  "key20": "5e1kM8GhjuN2i7ZJzx3W5chgmVs1X7QnH3ipnVMN4gViziXa3iWG3dUxN2NgdTazajcUjcBukTfRMJHUUK1pqs1T",
  "key21": "ySDVGDbtyVmfgA4zTioLyPk9uJC3Xd5QUcDztyspKEkT3DkCGgUV5w8LQrMSm7WvPScwAmPciwpa6XSMCoHiXWS",
  "key22": "52hq64ifd4f3L9yJm27nGqfEZmqZig3wDa4WFjjKV8BD5eNB1GP9V2CmzHkFb6HQ1syJweg6XKqUfKpKV83Z5dDr",
  "key23": "DFyjaKrBuoWCPkCc3W8cjRcaK1KZFwS2eEBFxXmxPWPr9M5QdAxcqxvTTfZy2fh3sm8Knoa9E6JAJe7dFgNNbp9",
  "key24": "3kUF5518SMSPDoptingiKnZeU3BAZL88yZBDfPRM5nryKMLj1GuKxHvsoC4j3o7uBCxL3i3HayRWYXry4d4a59DW",
  "key25": "5LgPRu11W69vzc6KkEnK7M1ii4ypAXdLAUxtzptvSofKf8jgGs9odpuyfb3pSNoGgJe3R62bh9Jic1HWgaiwakH7",
  "key26": "x44sgAC48jDG1rEZEKfSw8xAPg3XxpqZiSFS7364piFyaB5Wq1Q99i9esDbxfnFty5qA3WXtpar2J2gAcQNKjhM",
  "key27": "3zByoWK2WDcdRd8SuCE9daJ6WgfbunvSMtMcjALwQx6wKSdhfn8tPFACyxjMqb78TexEnf2yK5f3KkYeCPatAyrE",
  "key28": "cBTUFP2sUnXN1DcNMHDSwS2LjTo5g6DHL7oFNGVmqq1x3NSVNHsD5TYMjHMjgBegBhGV59uJSDx82jmEcPvC7pH",
  "key29": "P6j2seV41LLssEf7uJmHYQBy3xKXGiBodDQwPaKcvB9km4Yrk8VBh1sV6JjckxZTpYzVJffiRjZ31iUSGw4YS8Z",
  "key30": "2bWvy9sLGLPgtrT2s7bcarqfTtMhtv1Tby4aVZgTFgBfLst2tyjM9ogU4erd3BeTkykr8mycS4mtrBT5YpMbB74x",
  "key31": "2ALJN1VfzZmcMiT8ojr1XmbJwqJHh9Gyze2NBR4T7Ku65Kjo3iBpKAxNgC9s3FEUyXD5D932NQQcrXxDhnNjesky",
  "key32": "RvykhVNAtBja8G8qFHF7Q4PF3GSCK6MZdLhVYC7g7DuCXdTTNoMJfDqYyMRvhiFwjqNPriFHUe78KfgDyBTTJrN",
  "key33": "5sCRA2Veyh98nZ3XjWBVbj1gPWCQULz5SMk3U9GoM9Z8ocur22FcdHzPt6sS8mfBJaZUZokYzbffcPLdWi947ft",
  "key34": "5NqiuLwataxmSAKy2B8nQwEgeSAAbu3kALEH6WbG6T4eZzXc57dBKExm4gEuh79j4EdyFEybapShb8VNCUXDj3nd",
  "key35": "1Dv2YnXkWPM2N8R5SjaAide69cidJ9kyoSxwXrRW59MhBVtsFfY4f56CFmfMKQ9RFiZfte28tZV8Cq1PYPvTvZa",
  "key36": "fZftF7Cbqv5L5rNb6uggBNhyooUmBEk4B7WkJPp8P3RMhGMRS7mDdoiteXRL6HZ3tgTZ8gDhLJMi7DRcAKFi1eJ",
  "key37": "4TWdTrkLMVVCQuWvshUzvBuwhUpP8tpKYs2WMz1bZbhh2zVZotQEv8NMqqoc5rfTCJTNY1U6BE4HFLbZ2JKpcmar",
  "key38": "5duto9YgGsAc1o5o27a7mCBGKfpsEuY2An1HCxdcWYH3ZC36ABks1i6FooN2A1vj3mf9AoHrthsFEz17oBvqCoMw",
  "key39": "4q5FRdZe9BerVNLqjCKjaKWZRk9poKyHFzYXs57jMJp4SwTpXy2GSq6Td7qGxzrUqohjnj5EADSxkwtfMY9b149M",
  "key40": "3Fjy1xfvrFeoDmt9mup9RiTZ1LNjhcbqcXjLFr6w3abN6BdYsYTsdBV4fWeiEYZGspLKKuGyuXXH2zvrVaNaj1Bb",
  "key41": "4bxcnU5n26MgsBnBvvTCVnDUGEaaLpppHHa2P8jvbQCdXzcKs4jgi9H4VrPK5fB6hDdCQDsCoHtFL4yhABW2Zon3",
  "key42": "32zhYSZxkAqHrQd3oUXVxjW2vXkmhmAA9oPsPGRQv4uYBcDQNkcStrNZ3HkV9EfvA9JLpsrBU89KHDQ94DmeLG3p",
  "key43": "3ceCgnqZTdjesyusC1j4KCbVi8My2YCx8pGvYxJK3W5ZfYWuQRLaubsWPjHcfX8MGjHPxEsEezqZvkE1vd8GSZ4G",
  "key44": "4MrErtbC3v1k2WuH5m5RdFaahx57mgkR4cTJTcenxwXPLPbhR9Y7Vg2GrNSredqPjA9xwrs4De2HNpsJ2WCVW3dE",
  "key45": "ANbpmitjvK3bonkjCuT5vj3JE3RXmAKvkqh1cEev9pHJHpZj8SsqGWV17MP2c9YkSZVZrBnDYD1dksEttdE5ad9",
  "key46": "5yzAP18skHhtNgFpsp32QUtdMYgK17Hgev5TUtCWzuoZcPR8sLsJ5KDFmzTzGjc6sHTFNyhHFtuk2EWJAhESqB8i",
  "key47": "3kw5SchasrStuo7PhVE6sR15ELBumVQivtLgmARnJKSfojvZGV2J8sb31nap827NiHPXopKLsxtiJxYzdrzzGdGA"
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
