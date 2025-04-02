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
    "3LjvudRVUDrRwUhjsoAjwdi2o1WVFM8zA3ijMMV5HqS471WgQvFy2ym4H6kYDF1bMqhdMXv6T1uoeQs8CoATXGvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gsuwbigfKUVL5XFhdj1Jbwvkzz7vBFbrCrimUhxXQqMqY8Pf8H7Z5KofjivtPfb7heTpUAnhXGAP6Teywz67FAZ",
  "key1": "217YGGzrwyhZFbG7xRGZXr3kU3D8GZWFzGvT4SUi6q42wzukr9A3pq84rticxRBYSbSfzMuJ3riuzPJfa1J6Xy62",
  "key2": "nsRNAqEkjHkSQXbniembF8z3gKetnmyMay1NXgrcRsWgPKi1Bewzv4gF3GiPTocWMC7GkYdybcotsfBqPEDqBDm",
  "key3": "J6juxrfgeiBpsat1fJVw3LNuZbyK6GHeHvqG38AoMi7VNc24Q784sFQg6tSD9bo2d1S3ekYqZRhnKspcu4EuFtK",
  "key4": "2v8YxoLebYjruTLk4jTZW45MJANpBPyxNzbhUnVGwcpBZhpfSZT3jvJZf6Pn35mUfPpfLLcPQ8ECPHu78NErrytB",
  "key5": "2jmfokoRhUDnKakQbpE6BM7mEa9KZaWxZHSJYXdzVtoCNV4UduRgQ5w2LUBCtP4e96JCktRfvgQsZZKomRAHkRfH",
  "key6": "3v6UGkoNCQAYn7imsT35EN8s4DUtU6nKMRbHrHeEN1aKLUsmp4PsJVTR6p2iv5ygoaub1xv4UATntrjU9SAzEVbw",
  "key7": "48VuVFEYPwJ8pgdp4cJ6GdrXuqcJkJcMoxuMY3gBGEJkSV7TcjfQ6tEm6wQfwkVD5gdKPG8skHDXj4Voz1TnZxLd",
  "key8": "MifN2PNZaibWEE6h1q2wrGtPiddQyhKxUavjMGVtBaaZ8R7zBH9PwUx7qBM5ChomiLze3t9aPLUzo25Ht9rRRMK",
  "key9": "26m9wYfwhawsmdnLr6W4Le6y5LkrmBTsKPSMBuDHFtUrKDSZHFomsXH3zYZjWho2j99HtteComfRzNBbbLAUgtHR",
  "key10": "3Q9Vd497tzRGLvR4DWcJ4SPe66ByAyz55oM2iQ7aq9EyWhpiMSrJizXpVwe9AhSeXWr8kcJBW6SurFJpyRaxWZq",
  "key11": "3jnjQk5oboaCdK3CxbJTSjAzcn1ArjSRKzu7AXxt37ZbCqJKmzcmTiicJ65g4unysqPM9avySqPSYZUj4EZ78xMy",
  "key12": "5PSzKrDNP4G3kEEV3xYxH92YEsZev6Zt15kETsBgSQuT3DQDWMz1dFvzxcLYy4LKXPcW8vMmXUcwipYUdpvyPCDA",
  "key13": "3G9MGmPc9oqTYexbGMxNNQ4WwL3Y9wrohFKffDiXEZhA4Lwo5hQA4gsapWnrZxRE3uuZNciUk6JDn6MFFafpXvXf",
  "key14": "3HmP2M349KtYS13RKhYod8Q2BxX24Nf3EsCT3JoBwGWwnSor6zqzRM53GQ65xhiy69YrSHTs6FCsZpjPvUjjASJd",
  "key15": "2KSNfijDuKbqQUVsCNZasupbtuEZETxTWHqb37xX1WPh62ki1gApGEkScFVWTzHJVTXMxfdYMdVNAcr1mvpoV82",
  "key16": "4gyctykZw6CT1njZTrpHK9AkK2LXZdn8mGTsMPE3Mu1xbTTs3WE8aA4T8ipE9KpKTjFEhtEECuaFkEhoHpq9MDuQ",
  "key17": "36UvT8NRgonp8ZWCfR7VUPbzdCJTu4sFbsMDiWwyc6tDXsfgFxeXiQK4AcmNerFHqYswpAxMXJPo9kRqpAwnji5x",
  "key18": "2btLQZqSEGLg5X6vDnqjiFco2ccNfTWSz3ohSYaBFUPUCWCHSa2PEJaxGoGguwnCtzLvX8RjRRhy2QtvkMgLFKNy",
  "key19": "3qPgT97RyDMyi1CEAofdSuamGYGMMTaoHcuJofrbPtZSsRfUkrte8y3wkDM1cXuwb255v4Euzg7asaUFYbiY16gF",
  "key20": "59cfpQkYyFaQoQy3zdjVZ2m1n47hnHNLKbCJqCHZH2TEuKySks2SiEUDRmLGp2UGxupFrUqTvRjxgrRR6VAmj44d",
  "key21": "2tL4p1jFXLBySCb7THo3mN17NAEqwPcd7eTww961HRLz39XZmwRFWVFobhV8FZ4hRaexcQiBYjtRVsmXxmMo751M",
  "key22": "5npV56mAsdbLRNXsa6QtpVHkKzh4cB8UqaUeYa5UvxGzocBanJdw63jxX1XT1CfhHZgBF2fF9ixc5Jk8zMmzpxrH",
  "key23": "P22zQy6tYNdsY9cKWFaht4FeUcb9UQkuwEEyipzYTcBfKUWtqgw9RhNK8cE8f7JF6Li8e4wC2SpUKg4BmDj3GYR",
  "key24": "2wL9cEj2KxTYQWdThqp9paeJMxy6b2kQaCiJbfqLi6isvtyCBV75RKa66igqcD5Me8BrLeC9YbDDGEKsgKRV17E4",
  "key25": "3NGLLtKjhEia4ApPf9QRMoCHnAomzWx7y8Ev7e5JPS1Ks9xPdYRtrwc3g7Kycj6D7ZuMFoqkwVSUv7KL76qfJZiq",
  "key26": "3bBDGvRqq6yePvo4ZwH2GM2JxeFN4cp1fgW2J16oWYecvaZvdNYmRiXLyKnHbgEojp3u6aoVvoj4DDf3DMT6weHV",
  "key27": "3cwiWXwKqSfL28T7FyB67EBydrTjh7hZDJ1b5yq2rkiv93vrW8tEu4Zmdg9vNJsekeDCVjJCuoe8DnTmK7hBHGVX",
  "key28": "5Eomj7upKfBp6eACdb3zYaK7VaiL8gd1DaDRmLUmcbjvehVekZtXVM8sDyxXkmvGyLnyGz2ipofsyVh7HiaBTwKF",
  "key29": "hT5kZkvDyPRQkqjAohXvDAftpDZw1sZAQkzGARhEQzAXzQ7SKY8oDjknxXd8LdrA8yf6KRo2SCxvmCjNpgRc4br",
  "key30": "4YtQUr3uEfaJbgJ71SH653D4ZGLi1MfAcZRjbQn941ohD3T548cXkHPGDj5MRRDRkZqmwB3aqTp9buSfzRQhnWFG",
  "key31": "4SaRRn4Vmfimw7Wuvb8dEuxyBjyZwetS9bLqxbfM5WCPweZnjo8tnvoeHLD5iJ84SSyBzv8t57g6qLL6PoquUs6Q",
  "key32": "3tEtTW24oR8YvujuDG4dSBduZ4AammVN8tdiysY3tjTvLMfE3x3UPbzTMbCMDQULKzuJUpJneytr6cY8d5UZSs1o",
  "key33": "UUGYUcAh1hgGsc3TJEA9LfB81YnEH3rTDunv1hoKzzdBtP4MCyUNkZnrE8L4946K9nWY6SgKeAnaXP9juiLRa2G",
  "key34": "2nET79UvAYriRXpQ65PZoR6zfSLqVwjE5pBFppy53ma82Md29fqt3CfZ7B9ZfwcMqwrJXdKQRpHwihP8Mg9ujeNd",
  "key35": "DQEidw965hUvJHLg6nYP81LpZ1LK3o5zmCHdf6vUEeSm7hzo25FTyvbnUY4aeQ8v2ouUPYRmFcBFARxp8K4C7yL",
  "key36": "2nzapxDXoTnzrUUVmkiVv4VHZxzw7aQNwzi6dzs8mU3JQ3HPMcY244XCkNfyfLcdkpRT17vMy51vo31ATgtL1d33",
  "key37": "dfJd93MmkUG82FEBAZ7gpCNHeD7hF3z33rZ8gYhhdJUAxRCdrG2Y26h8W2t8rL2n6MbTZa6uwtc6bAGmZmUmj34",
  "key38": "3LEBTXsZfQxRZHHYgc5AgL7FixmVKoyVWc3P8DEoW28S7ZbUimse9aGnuWfwkJphwpXSG6QXvH9JmLAjaQhgoMku",
  "key39": "5hQvmeC953GwMbS2nbtiaDKxuT8PFh5fY2tf5hYC1oZvRWY1Ehfw7vVMW3wEFTJsgApVupQLLs9EPraH3mY6P4nM",
  "key40": "5Ug8bmXJGC9g8g9rqTUMQkh1F3EosBK8aJJiVDbXQoGDEhiAx4rJg6ZaYK9CCnTdQP3MFCUQf4haaSRMfckyYK36",
  "key41": "8oHpmBwi3veGAxP8M9bVYk2DvjpfTdwCgPNpBW4fboJRKbtnwDStWzqXr82ubqyo7zsxGwj2RAADuau4WgBhDZ6",
  "key42": "4vuatY6f4kADeMiMbwx9MTvaKSJRp5e9BW42zWkNiPMXtnoExZrNJoQJEzQ55QnudZBftiMcJ31Jve3pb5HAgVTJ",
  "key43": "4X752jujYq9iiSF9EEXpuY66eS3u7ApxKRJAyMLid8w9qbwsS9BBiHeEPcGZLaf5WWSfizYKN7CjEyZLxuNZCcgg",
  "key44": "47MsjyzGaiM3uRfiee8PQAo4jDFa94rJ43NgPu6rcgr3w6hjLkJY2e8tWsqWQyYFPAt2HWu9inv2XCQCLhDgE6y3"
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
