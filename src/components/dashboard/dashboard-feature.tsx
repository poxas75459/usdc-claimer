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
    "5cnjZSZ4gytopUo1qpDFZ7uMvqcsp61PhMDra9n6LAFsKDebcDU2Aut2zZRthx31hbXnnpKWSjK61aNjEW1MywgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52TQ9mFJUs2iBJNVAch8jPB8HVZ7aAWJ819BTKcKX3jvXvzPGnjALqHsBsLJ64SFiErkxwPFWJJgK2cqDBoW48Em",
  "key1": "4eRttVKyhby7i6sKbg7r7vWKhserTR741pPnmDTG8HbAhX9x7g3xSSUAvv89m5nHXg5UmmMwxhrJgB7VM1RtARzi",
  "key2": "eVEG3oREY6G1q71oxdciL7UoMmAMpFETtzoazsVvgSbE7U5zzswD8D7A6G2mCmfcFmt45ifSCBHpQyBuRy54y1S",
  "key3": "5enevRHdywKCasqnm1S5kF35YfnDVG4jrxVaigdRMubkopATVKYoJAgvDLRZ9tujsZgGv92v5LP5bRmaXdaKAp3N",
  "key4": "LUkGicZUQQZmGeKvPNuxmSvTYNZcnnoaRcrAeYq6WxZtUjb5Zo8YkcmyubpQaavo7GnS3uPTxQoY16qJxoPBhnw",
  "key5": "6134bbzA24cEsw8r3KmmRriG9pqqfJwjjyF1r7os3YVLxZyJpfRyjbu7b5sWANghXVuFh1NvijC8AGGb6LpYwHtJ",
  "key6": "4McP5oCRFxZ1DBaAhFT6XSJ73raP5DL4bTvXSyT8BkfPbYVoJTx6CrvicuJya8iW7A8VQLcTYMs1czLvkDKZxBBU",
  "key7": "4NReZ5QdSQyRpgPHbSTEdcp5ZMzjuhvYwsL1nH8XoU8mknMH9to8H2esVY8i3sNy73d7455255wP2bSB6eoiZ2K1",
  "key8": "2gEt6bzijPRQrBVdN4uAitfvt7TiMShZcPpDbfrZkkBCKPH6ovw8tRULJHcdyoUNzGDEr8qB6drzLDPu3ADNpt3u",
  "key9": "4gnNWZv9oYhD9nG3HdC8S2oe62eVBS9dKW4dGJXjcyztLovWP4LYhoQGfFHP7dZV9XmDU8pgw3QbmkFFQyXmRpts",
  "key10": "62pHEpFg5PEYmK2ovB1J1vTnNvKNSvPTDjhmXMwmWNpaF88n3qJAnF8SawXdQPeEQvPKXcbi59mUBMwxjjN2Uf4U",
  "key11": "5Pojxb8ZAeXRHAACGesM195FXKmMphLBNa3yfLe42cZTKgXxnwFUFswrmPYxZgKLWeqQ5LpA2shGNG8GCoS6Na1A",
  "key12": "2Dy5DH8EsZoNbZjJpbzQ9Uh1DS8yNhBrCDPaT6SDtfgXdPLKiZc1Uvzz3yDgs9CYJnvjZ6WxvTN7sHNQCtcmMmo3",
  "key13": "569pWuMkoEgmF1qqsxry4nazxX4bMxU8KeLzSXE8v8Zgb4P9N2FY2yqG9PYZ7ZGwQoeNNJcMswQHs48njkgBZu5n",
  "key14": "5jihmemLBUpU85oeFqSGD4HfZJrDMiYeZzhEvHpGqX5NEcqqfunSrNwphdmNfUU8qzY5H5nBHFXpm45veumX4tYo",
  "key15": "2r5wyZmZRYsFwVtDXtdc6aBCnuiLnRcnxp6Q5bDNg964e4isC8dEtMMDPNtyBikx4J5mKnP47V7pV3xS3QGvBNEA",
  "key16": "4J7XfdNAEjkUcEo8geYM7RYpoAAyeTGReLYiTQhv8U91FXK5pTbrUWLuKmsfWpxnda56otwB1TqW2n3Yng23nk7B",
  "key17": "5jRGKm5ptnFYSJhJhyZfdP4v2gHdr1D2JXqWR6SDeuqmH35Kb7bWY43yqEaRJ7PsK5EgGsAafYZTAFANo5HCK6Nk",
  "key18": "4cbbVL5WSGZEsZxf7hZLFAJ3RURLoHhLT4Swf36Lb22UrAnhuo1HzjdTPc9kihXikGssTSVXhJi9d6uKKG5GibZB",
  "key19": "2vUyNqeatWA9a1bjmrsbCnUw6fTgfxphZhfbW1wExEWegkw35QZq9Qd88UC4a6M7UsHSPKr9Ufp9iDoip1jLNTco",
  "key20": "4f975dASD6BYcF4cp3ahT832dCRUDMPoQa8naLDgh6ZB5YrRofar8f2d8nRriqv7CHK6xhFaBbUDWMWFsemyQJU6",
  "key21": "3z3g4Lj5jqxxRf6L8X8sE5L2qs1U3tarroqZ4UXooe3CXvkPUfeo81efm1RUDAcaDi5G3MLNdoVY5AmJU51o5fjC",
  "key22": "rXdB9ojsfoyctAu3N1yaKEKRApRGHNmxd2oqDnmc91JEWy8n3aULno3qr8zDw9qhgbq3cgCVhdJPwcpkCvqvysJ",
  "key23": "4hoiaNppWZo3NVMWxTRvmajPxxZ8wQvy8jBktADvWypjYEdCy6wCyfziDQncNgqPq5ZcsLLSTCGgYHfzaZaBy3jk",
  "key24": "2tGoEdsYbSfWCG69vLD4uxKsuP3p8hd7qy6X7binrPYNGj5pirsdJ4KvtZc4CLDoMDuUetq6qpvaAX32Yqp4a24E",
  "key25": "31b5kzP1funeof5mLA9sK64GDP3s2a8PkjCQqW2NigGhR87V3c2vaW6LuFBpKeBCHLDrEtDesNmAix5XvyZjjp5",
  "key26": "VreX8jEKEaPg12Deff2poek517P2f9jGWUt8TyLvk8riJ5a863dYaw5xoHnp8cAcTCpmBxFTPUKSpjTh1VgEgj8",
  "key27": "5BvQm2d8iHGbtKwyA78EZvXAtgNv7wcv9gKRBciKuKM2NHe2PDCtLxdMgnaKuvqtx3kcJ6zBi6ymuVqbySa6UKR2",
  "key28": "9BRq57vXXZ8hmAuGVeW6LBA27nh1iWtfC5vYssMaUH3yhy2TB8X8NLQ9uhcikrzeqnTvMifa4cMbHHbJc8vS2U8",
  "key29": "2ueb7CuwpMAxpeiNg6cvmazJBDA1M3cb8CA7GjdwvuWrBzy4mcdd2WkZkegna1a2AkuPnzR8SLHhMDFa163Vwkpu",
  "key30": "542SPzbfGzPq5n6YngfEBf7X1GxHXnkyCSQAAkmNb7LcwNtx5HgDpwutAceYuKA3habHTMEzmw8t4Z78j8b7sHpc",
  "key31": "2wWdyr6jwz51P8hw8D74kh4fJFThM4fmQ53m8hjD9dbcEd9C24LXeBBtHifE8PoTKKE5ePB66McTM3XbJN1b65an",
  "key32": "5feUBC6Ecj2TWBFWcR5SE8PWsS31aLMEiEBTqqKQPsEVZX7TziiHcsSryAWZv9VKk5KQzqZnBABtdaMxwSkEmoC2",
  "key33": "3C8rF4bT3VSmUbKZ2yDZYLwUs8uoYYJ1gYbQtNghLBJgGhsGb2Y8Vd83mTQgEB7oVTNGXyzKvHqRTLX5KcSuDSrQ",
  "key34": "jnjwArUUvSbUbgo4Z1QW2qRGfYv5CFvnPT41qQgHFDCTNGBFqrhUe91VNc9sW6vaUWgy5Y4AhvKjctz4sA3rxy3",
  "key35": "2U3jEenHQ2dJapRTTyLX4HKSdo3dfG9PsrEehTfMa6L9RqFmVKNT5vBvdUhSVH1UVgAbM4r2qw1mqz36wuvWWsby"
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
