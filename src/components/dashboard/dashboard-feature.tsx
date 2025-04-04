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
    "5ZwMUxNdQHxZRz4rtqPHqtmYpCbxMq4wstY4ruzbWzsjiKSeKnRYMaXBP55qebnk1EWx4AAN64ALPMjcmGuznDV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XPDbJHhanRzQCg9QxWJRBUsCBeUGCPaQZLhxfSVWXJrMiCYCNuKpnXBEYScGhq3MFaNnyuPvqwTkNbTyuc3FG2V",
  "key1": "5gpvYmEaqewJUAMukf6V4FfFPVU5hYCqewkdgjoHxt1TvafSWgiWf2b5wY1ZEvMKUonFL5F7sQAaaG3itfa1pHGj",
  "key2": "3HFz7R1rsjcNvxka36w5dZRuygY165N1ti1HGSgtDhD1KT1PYZokatkExi6G7kpCSaRdvDDxH4KeJ6fQPvYtNqFN",
  "key3": "3nNjCwiiXSGCbAoNmkY8jNzKdg3DFHRZhEhwX7N6QNzNEq9nV3KB6Ez5CtvpChR6Xr997RzpLAZs7mFptE3HPZn2",
  "key4": "2XG5th14Wexe2J557ud1KSgY7QWdN6W5CC3sdjwb569zkbDGb5zXzxMobfqpsCVSiqcaEoRDZGu8wN6qcS6d7RSF",
  "key5": "4oBMw6DuK1yne4ruwtqbxnwGPFoY8H7hFaK4Yf3YdoQ1DKj66FcimpXnPsVc811woDjCYAF1HA6vtrR9xB27hie3",
  "key6": "62ovhofCH7DgBWrKMb3Ucg9cGTnqgH2QSiAPjnGWAv7H22vMANmYqaTXiapHF6RvQicxJknDjmX1UPXcNXcbDNAU",
  "key7": "521nur4PfKYeNcfqXECtiPWHyjffidNvXpXKW7om9WjpjvELxctZTMLhYWgDNwUhhGfxMtm6N5VZyz6kxKG2oD1z",
  "key8": "53RMmXG8hftp7bMmCbVwUaQAVhuk1N7CpiNP2x8aaF8gcfiZUe8ApnYfdhpgWx5e27eZqxuW7fMUbHpEirVfa3dP",
  "key9": "3b3rrXE9AUasQ4D5d2Y5eJ57j5VBEbGLcEkQjLqWvkLPWjdGQt39dimqurRzYVvtGcmFa9arotK6b6TeY15dw5eG",
  "key10": "3sq5VssPc4yvMxi8w2sP7txPdQPs66kHSjB1GwFfXH2t5GMfS4MNHt9oNn3dhbXZ6nGsi2RcBgJrz6kHqSTiu3YN",
  "key11": "5wd6wczLmum23EuQuAcfM4NE7CyrGzTrDkrQQaBRbtHiR1Gs7qYG5AGRZMdY7HrG7iKaoc6ArSJQswsTkcx6NScC",
  "key12": "q2rWhTJ5JLCoMF1JJg54Kh8EyVMALzRknX6BhzRhRhodckGL4eu18vtJckqpNfq8uU9vPZTp4xvRdW5xJoqmRpa",
  "key13": "63a6Rj6Z1qqZBonsUT52xZuDCoUgmAyMMc9oAEN5QUCptAHE1DzecMEpKaUMUNWed2KT5Sx9kRmG5uPQ5EwkY4dP",
  "key14": "5dgLMBpq2wNhVncLQbYdJHb4UjThZshdkdoF5SQrzUdC1p4XAhvUKzJ4isJe8KVrxkYvAsdYWrTpxKnM1YQor3J1",
  "key15": "b8jtd5hDxWMjTz9nYZaWt1H68crsF2pQXj7mcRbRcjtPVUirhk9GsDnc6oiLMaSCrEjH9abkRhYuL2AVjssV5Fu",
  "key16": "McaxGVZNwudz84YAbEDwAVk5sLD9aBPLKWbHhHR4LrKkfhGkts8SM7Qx8792pa2xTLBEs1UvdS2NfBPrJJMCs6d",
  "key17": "4NwQMGUpyjGsYcqFsvgY6URYCke5vF2YcKRspw3i9giRoGaQgL7gLDDkv8TNnicWqGFZxYj4FF2F8zvuZp8mSroc",
  "key18": "3xT8NEKD3H1QeWx94psTojD2SqFN7bGBFBA8uhrj8Xh27sM3vVvicSFRTJxmndYRj3HaPXENniRTbAoJd5z9mmqn",
  "key19": "2eVMVn8WEmrJewiG5UVESuBGfRZ4oLNUkdFjGtZq4tJLZhwVdn2rwzga5BbvntKjLGS6BinZfGtseUQC3xvDbuuM",
  "key20": "3jvbPt7JMbm71jH2oGjaUzvNdwn8k8kmemHPigiZxpqMty8JF8yVHbqW58ND6NHJAhrf8pk9WCJErg5LT42kXiZ8",
  "key21": "c5toRvb18Gp1Lz9qHmRiLDTrgFZGkDeMHQcrGnqTJ5UpY4nUjRKUfjKuhMTQ1jwLWzXLFosRhdAukJn7ardpmxB",
  "key22": "4VcXQCzcRowyPWWiweKABAbmn5fduzAaoghTm2JtPvt3ghVuYzqjtwoE926aZxi4zpvdnFFkPnte5bCBMBdQY1gH",
  "key23": "28CiTr1rVTnwwL6r6ZezQgcgDUTLx2W4WXNx1CmEqB3ZGxDvaFjRkPnY8vhRRWPRJHkbktVdAe1FxmFHUXgKgAF1",
  "key24": "3GCfrkhQZdavWc33sr5UQGJoRXs6bEGVbuLUu59952eRVa2wX3owB1yVsHBhZqjCxpZGEZWrX4YtUtyWRGwMMdaY",
  "key25": "3LobijzBpCwT5VKsUvibAg1x36CEbGbg5emQrrZkQQGYh45ngPYSHCEvaR6JWGXxU3h8uVvmsPhV3vYvSCSLXo3c",
  "key26": "mYdFNUD4rvdYzxaFrWsWdR31nyimYDEjd2Jnz89nWXGziZKiqTqTQZun9dRDj78eTTHUhxdbkSqEZpkTsFJXbcH",
  "key27": "36pLu65qoUGUEgDVeAyCUU87PWG7iu9obmuBncDvnTKG4QfAu63DhX34s6HNzZtzfPVyJ15ifDZdN2K1t3VuubaQ",
  "key28": "1FbMp9n9VeXQVcdptrDQESFhCc3xE2Bhq4g3fgSq9Q93JCuELtmwvcxQZjuBqH2pqyMHKSMmrJZmvdpVBk2af67",
  "key29": "4Vx5XwaT2BSv5MXB41ErTYrQWYLDfq7wXFVGSwu59qWsnuh4RdDVWw2N4LguPFbaqzUorSt1T4zTzfGckUz329Mu",
  "key30": "3wT6SvH5biy87DADCXUeoHS4hFjUhNtuRovcGurYkU9arS77onAqdUMeo8nCDSNo8pYyewi9DquPT2sd4uK5htK5",
  "key31": "5nW7Qp7mxcERyCLQv3BEMWo6w4jFpCx6gFZtrAfXsxqy4MjWZ7nULXw6e2ZgtaTMuUMtGCTBaMkoBdBfmep49cCr",
  "key32": "3JfrU6sTqPe7ovX3cnDCYiNszHSNxLR2iLniBGkvFz5u94Y3oCBd2wc7AjipwViEYj1iUfKepMCJRWDUXqNpL6jG",
  "key33": "3U1TyCh2Ex8wSo3evNXERCuhDGzMEPucdQMYVMbC2uiq1g9VQTpxsG7HiHQUKgLqNJyoU76eytXPQS6NmJwL5TG4",
  "key34": "5eWT252G9Z7UcFxmkMgHKPvawop22wxtpwM3y9MRAz4QK9isNuPDtQidqeJnHKKf7C5rsGH4euF2ksYLyVkyNj2T",
  "key35": "x9drLDdFzaGMPaZy7hAPcsExqyHSWGR8hK4EdB9xvCgNcPoJeYT1zz4QJrYs4TXuVQzqNN1fto9G4P3DrkC3jLD",
  "key36": "3zr9XfWjHbH6Scdv1LkxjGoBhSCRvfoTATAH2g2pdAFEcogmPb8G6gTpGPTQAAiukmfwiqDcgo7yBDiV1bfo5QFH",
  "key37": "4LNjJPmpvZwYTgQsjAsYSSbdQUyvk2oqUwThGfVR9z1QkGChn8NdUyGc2hiPgfhN6imsgkxrS5YGTmvwx6fRn4E8",
  "key38": "djm4b8LnFg1f4y6TGyCJXrSVQP1xzH4xr4m1mN6MuB1bXaf3YgB1bN1LXDuV7tR6mfSL6sJgpqDCxV5MtyPgcvf",
  "key39": "3WdakbGUz4wmnXjVSnpcrewFPFKrffo7LJuD3rqbJ42C3JMunaBJH4oF93NU3eL2MemEg9zrswmRCoCuTLZHbDLW",
  "key40": "3qZHrZDfshiDNjngR4giYbMkhjf5WbtbpE4DGhryKJCup57TKgfyx97YJVzQWUY9TTtyVobrW5ZRKtiiFgDpRRHk",
  "key41": "2S2drJgHcjJH5yXvabDqiyUSZCzFj121SDryJXSjTkf4Hi4nr3kHf7hM4YEwajmdriQTmVnDoDwU1JrK15AtCbMz",
  "key42": "3zK6bP5EdcTnQDgDxvssHAYqrF3NYTzVgiqLchu5Krz4ZYoUQxbdHn13HwU2MRJ5djauGMNNq2uX8wkN853j5siw",
  "key43": "4UJmaVtXuoCtSbg5FRxuRAWpX8T8nUZfxjkfdRdxXsydNq9wKSAsYCySNFYDsiixkUyE2J5E8yrhCnBn5sk5KAfN"
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
