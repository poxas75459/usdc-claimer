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
    "4vPb47ik4WVxmL5njzJMPFdexHGmA7aNyUXZgAeBZY7ArvTsiPKcdeAkJpJF2kZNZ3h9PBW6FiRw9FhjWfKqxoeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jbx83ej1gc3PcZGp4qyhppkgQYpiRXL4GaLis1sxRpVFaySZuV3JExD4AtD1neBDKkVUPp7dWWJ9coyrQr9ewbr",
  "key1": "5pk5LJ1erGr7AsCuuEF3BPf3oEsWfBoeSyrZk5oRk7ZZde7uNLRiK9gfXUDmyZhHcNUQSLBuaVaSXjtJK4Z2vYZU",
  "key2": "2tqEtQ1HrHitKYmvXfW9KHhhMgRgBrNhw8uX8qk8U8cJB1HyAMuYos5s73NUE3p1SUKcD9DLKUPTkeSxnA5Z4F9o",
  "key3": "5MQXPmbt1xKck5eDe6bkRbXWQTjPvp8V9MApSieTRsdrtztn3La9EWQZqjH55zXEwWTiGVBden8hYE6G9YN1fxfA",
  "key4": "46byTkJVnabFFniXD1iWYNCTQ7rFib63vg7bpRzasAzYXLEPPDW9jZ17jjc7kT4jixoHM1RQ5sEHnWvfZ5Pj3tQ3",
  "key5": "3jf1hfSdFor62q13MtmZgtVmjaTCE44RZ7HDLSk7GPSg5qNUDAf31seZdnPdsimtbhzv3B53b8kZwtEzYDPWhzES",
  "key6": "63jMJRAAvqTyjxBAm5AitahMBERNVog95c2he5aPuBBJKKeHxxamHAbL58D4rhZh2KVyrsrp28PdhoBGJEXSjJaD",
  "key7": "4Umv5Da9Ga3g4u8S2P4REC8i8W5vNiaXK1LQJaKTmii1i2TKRYCFN5j5ZALVqRuSBwuDP82Y923A6mWMXHCHG4Wd",
  "key8": "DxDwfg5RTwWJvFucapzXeAdtHvhNwyPGGgdphTorsQfgoHf4qa83cjbXxYpiQrzKFFU2VbpuanNNT691Wu6xhGv",
  "key9": "syXFmiqjifM2qa6zrhWogCDKahFctvzYkjSyUFdtqKLxoL7E8oT2Sf7UursnUbE81m3jj71pJt56pdmiXs7suB9",
  "key10": "584ey1EgWFxuLzjEeKQD2EiGUQG6a1UPTXBR9HGe4wYmmFFyXwMujr9zj8bvXgGBPuqBJz8JMpWLwxj7VMrkJCu9",
  "key11": "5TUvtdc9D1gmoydJ3wbrcAXgrAENZrjf8ozULPZggUeBdtwps9WPfL9d9C43gLNspMNMTA3spFYKUrcDUuDEnSUb",
  "key12": "4eXHsbW2gMGZuGugax3rk53x8gXQmj6bHbgjrRT95SgVLrVP4N7PGFzg8JqpEDbxfB4AW8FV9XWH6H1HTzfJXjPh",
  "key13": "3u9Y7Fr99g3fpYHQapRTaYfCBbHEZXA8rqT3Tnvgz3NcJL4wZUKgGUbJmryt1GVnGGuVg7HHFFzMibA9CsndgBJd",
  "key14": "4RfdCWHTa6VFgbpBM8CV6FnEdZBbpyTQ1ydptzfaN7WFKB2fLUmRppUHM9uLPJXVSpaz5Ygo7AtfevBK7hmfULmJ",
  "key15": "39x2BhAFvJkKbAGSHMVa4ie65RibuxMVcerXLJzsyZ6xHKdgi5Qbw4tUs73csnYXuckpenYg3EwdHhrb5MBpNbrQ",
  "key16": "5pquTaknQibQMemtQbp64VSqePDrTvEj25GohgYazUzDFmK69Mdtc6FBAyUfDPNMmG6GumRqgUFk2FMYHZSmohmX",
  "key17": "4pfdfyHZB5Z1UqSoaSjWU4ZFhbevafpxJy98fJG7vjjizyC8BGy26K4DLN52vWvfmC66iKDENWbPxaCwzGZVbM3V",
  "key18": "2FiLhhyLiD2MCwaQqpQEecfj2idVyrLs1gdZ98J63mkpukejTP69VLLZKk6MxfThV6uC7ajaFTKPN5pDm575qf5D",
  "key19": "1UsZy38VsLjjgAdbfgiEP1NivtDCoTwexU1A21NJPBnj8mYnwfVJxZopusarGNZaDPjADDP3eQ9gwxAd8wNcFuh",
  "key20": "5eiBbkJSEakRebACzisPTbe64JhM7wSDyxsn3rE93WQV6tfYUShVPtEQdtaV9od2JfxWf51biDE1s1aDDBx9ULBA",
  "key21": "4M9GrTsEdpzpRSQxMKUGEG3H3Xn3bQrux4wngS7eZeWuWgYAfNDwwiEG7mi1Z3FhNok4zpcsgEvaDBEZLXqq7Tuh",
  "key22": "54FEatr9487zS5U2bDw91q1UXRhGDia9wowBJrUtiUCmqnPQTFSirzmmhCmj4kmUimCG6Yn3A7pxBFt8BsFRKr31",
  "key23": "YQq23egWcpCuAT8aUGn1UA8yP2iTb5VdDCzkPNbC38CxeAbCM2rCdcB1bcsENpp1U76tDKPHRya4xbRq1GGJHpq",
  "key24": "5W76whazyW5bPoFYpVdXzgjR6ACPWFKPR1m7Q9eeX4daqKJUzupkpiaC4XRPcoumnXysxup89oyhotBSAgRLdGnC"
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
