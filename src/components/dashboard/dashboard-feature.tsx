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
    "nbZdjXteukaEgcxMtnnAWy9PJAjVpznW5LmJLXGsqZfEkC7y2qbEuJY3Kr8My975KXs8oB9MZFuwfzSegcABv68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7NdwEeYubrZVfD171g9W1ByVAeeTSpnQkPqDU9AkvjfzP6HsyGMYYkbrJGLKrc1D88SUbYP1Mkvvj6gFBr6T1i",
  "key1": "3T3Rd4sWke4mc6ci7gwPNjvGZG9JRyYybsdgYcmA5y37ZYSq9ymN9hWWSkzUG61aNnGL7iKYS6QSg6RtQB71wwXg",
  "key2": "2EchyGAvpwagaGdK7ZgP8gb3qVAhShHjc5mq4M8zVnRDB1C4qtnkAMFi42fyMMziyxR985m5Vsa8Wg39PGWcZ4Kn",
  "key3": "4xow6jZGJNQfDi3VD8RQ9g3jjhRaZ6jC91Li3E8NfF9UGcGy4pedx3p4W5Q1dWiaaJQ7F65DX7HKh68ZSr3N9aSZ",
  "key4": "4W6E3iunWE6dVAAkUjn2DG2qSAjRy5zGJnanCdkHGjcqbUrxUNhxMG3Xmm6C8Jhdw2RW2inmNKqbwE7TpX8y4TL4",
  "key5": "4dJVEXCCtG2zTxFFeaVcFPgJAGEYczxmeTWct9Fb1ppYqofudpTxYxjwYeGefK81AGcKxYab41hrgifwvp8QG1hc",
  "key6": "CS1t8RjHUD5eurAPytjd9MPwBfAm1KuftGNMKyuhqYKuhJJfuKUyQteEf1NR2rMfL4RFN4oqdm4DcKesJ2uSmwv",
  "key7": "45heiovbJLyU8Y7VG3DCLzfbdpJfqso94jSJwD1fW2QYLJko1SgfXN4yY6DEtC3xa4qsXegsk3BBhtSuEk69oEHj",
  "key8": "4F5kZM78ZFNNjdGdthyGReDF6Kpt24YRZ4B3TA12pb7R9YPREXXCwW15yeqiJyMdM5q5ezVSLuy32hSmD1fRDkfV",
  "key9": "5ARt1TmGkpMpzSNTqTfqPkAwUQn4FMV9xwSWnyrRPDRf3rDBH3G8DcukZw7j8tSXHh1pKYMMyymMJ9guhwYiPXjG",
  "key10": "4bZycL8mjcY31KpSWT9BEqkFqb2MetqYrVCsRjuyZbQjgiSbJb7Lx22iKbccXgaXFC6vAdQiSi1yHg6KG6h4mGhM",
  "key11": "4no6BmayFtz7R1Hb4A2SkY8RFu6HSJoqR17d7KdwnZcjdiMqEWaRyWtNufN8KLV9Z6MYE49z8GvN9TMMUZaiwfjV",
  "key12": "3JoYJmEyKQnGvgsVVMErrAA2Vv76khexupMQQ2wskhK7aWEURJk6SNUB69eMGKynpXoRyY4kuyFEm7fsFRM7VWes",
  "key13": "4HXvj7muXX6k9UDfxJi4GQkS1K2zaQf2jE4Tcud6W4TMcRt95a7x1LjE1EP1swUJV9KHH6njJepfwAPi1qSsUK5F",
  "key14": "4Xeb4Cf2JZrRZCgptjjtGBJmsEegxRTmQy1NYmodbH7WDnQGcStazoC11b4TCuSBCrNmu7puDEUc32NoTb5usQh1",
  "key15": "35odUCjTxQxorwxuh5Xm5mev18SMpn6ik9mHShi7HJ9yqnYx8VKXv39dpx3B3m5vUyd6pNBf2ku87vxSwyXwZ5LT",
  "key16": "57WB6kLAVjPpzzSnRnf8XF7YzjJDMTghfx55YeGCftJ6amQLByfS28etmsjBSmWVsCby4yWYB8Kcy2gEM83qi6ng",
  "key17": "2foDnAbDhYNJGiPj25Vu6GtvYKsChFDnH1egcqU6WhoVXnd4GVyRxuW11XNRkpznykZjKoayTchz7o1q2wMPXmkn",
  "key18": "4Y74Ns8H64kcvfdHX9Jaop2q7U47WMhZdGFZqmyuWdH3tMLact4L3Xv6Rqjfe1YE7h8ibAzAmaoSrUcZwrTZRqV9",
  "key19": "4zCRY5pBwi19a9wfYfzFnh3PJ8dC2GobT81oxrA2JcF29c75mtTndWC6zBG1jWTMA2XweRNqfXBW2nQ1EwAHbsds",
  "key20": "473U27qvNA7Tuxayb7x1snzbKuNFhdPPd14kfey3ZZgkT7hG7iTGVD66qCziotCSThziRLt7d8LeickCHg9dhwkp",
  "key21": "3LenhdTR88in2wvL9MBHF9z8VAhUMvgMYA2KoLXeNcmLgzPsNypMxG6SKJyEacqiEjtcyLsadvBYLWCdxBPnuxTu",
  "key22": "2R7nf8yExuizzYt7X3S5Bk4MYdyaCPcVgFJDNjkdoXnfMknYpLqpDFpibUZEzkUk8uQTJV2RfPdg287GG5nxNrSp",
  "key23": "4NXduifVDNY7Bq43ShFZ4q1TjZWcJfuJ9ju39supT5swp4jzp1HTaB7zxKYefuhjzmUVzR58tkSRgdn7quMZeUgC",
  "key24": "2JtWRz8HcrmVbtsME7kEwTdnbEnMGPhQdfAKu5nAvogCh6m6mCp6egBSSPNesehVGFM9QY6karwhByr9gSsHYNA1",
  "key25": "HfkdhEWiy4zLj9uStENtQAG1zXCjhBSFd7dyh2KuGHrw1gHKcvw3vsmdo7EG5b2AoHVP4yxfWucgjWiTWAexhj4",
  "key26": "2Do2uxUsFfKnCbRPQUE6nDnzWWzFtvg2bpQk7DgzC3KduJ4ZESVziSEdfDmo3Yujw2G3311Wsy3uuDyhGq7HdFhV",
  "key27": "2pjLKUVdrfYj8VTRCrGtLdtvz9czA7AAFytR3ALQdafr7F7bp3XyZPLPjHLv7vBSgjBLAx7RLXx5Fv3ikcmnMN2y",
  "key28": "T5bQkugMuryLachjBBYPUgtr8smWripqABf8UPDsmuXpnnMtFcXZ8B4LaEPkC4MR4ADZgT4anKTCmQH4zvndx8B",
  "key29": "2sBEfgzRKZhsiKrgFq5goytjF74Xo6SKAURWocGv1wXm4z6zXDvXHxtFMybYdHa5pTE773j65BJMwwGQdVhCXwVd",
  "key30": "2bfcRginTiFuQJJu8isuLPiiFj3MLuF2amhcGS1xtdQubuXBmeXEZ3LsH8RieWXr6oEP9xz1bYdso653HcwT99sH",
  "key31": "5wDGd942CBaJURbfLr9NiVsESXJxpisYXgkeYxkmikfJAvWxYdn7ps6ihmDhcbn8dWUyf7sEgDw4wM38TwrL3twm",
  "key32": "2nh2z9HucocgrFjhbcxB1gGpihy2GhAPQmmhNfKoqh8pAPUYkjZBrvDmpRZSmyEcusqoBGJPgPwZicsnYP38ny1o",
  "key33": "2k36gjUZeiAnByPTS3E3Lry33FcvFy2BJVk4dod9hBoQAaqUop7z7cZeGoXw2VtMQG4xcAddKHz3aYoRrEwinahv",
  "key34": "5KBCdDuYTzVgTPwpFbfa1Uz3kUZLkAB8GmbXEyH9LMvupe1rmyJjDVHW9ckhK1bw4q9km7EuP3rqQdmxzcue2SVB",
  "key35": "2GfmkKKhy69i6YcpM7oAPo1wiMgLo9ff6vYHSBPTazm4U1bWgwdWPkNtDmpdcHQ7XYVPGhTcKXXHoyKwn3tJSPX7",
  "key36": "5cV4KYxKi4gWjW9ucugaiXd2onyFmtxA8ypUwgwWcAFfcfJSyJvWkcveZs3ZJpF2QSkhygvwqHfgxasbZjzA7Wbp",
  "key37": "4ibHGbSHVK4ttiHbAvqLcnb83a5cPoehbS62AkMueGx6nNWprRKoBWGcPqk5PqBvEyGVFhE2jAHcXDVjpbq8XpHX",
  "key38": "4QNtXo3TRFap1bTsMWZFLdFTHkgvfA4N9BDQtGbYSbH2gs4CmAFqWnRPb8PYhNk2kCktdBLxKq3pTJrVsFNL6iFJ"
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
