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
    "2PhZ1BaRtXTo7LaDCrq86YCg1C4SSJzFdU2s9raYx1fMeXiwkaRKgjysZLLu8kHz8cLmSPJFmK31v8uhijozEWg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLdc93AerYYMqKM92GpzjuAqBouUCb4XK9V5dELrnSTx2C9Yr1bjzfrzGkk8MmTDHUTAXkffxSxDbcHMSgMU39c",
  "key1": "2RS4HhJTwwVeJz4MDBT2eyoSqSHfMp6KMvShAPwNkpHBE56s4bEiCDXLTdW1khZNLveubJvbg6abaSK8A2RBSWrG",
  "key2": "5fQWSvp9dt2mTN5TQj6Q1hTShnBJUEhscvS38cVnab45nVoZEPL8QvHNNfq3Pfj6C88rZibfFnE2Y9DU76QYnNKe",
  "key3": "5BEoAijewUWJh9KLdRdJknDmTWXL9ziN8ZZm4shwttzDbSUioLsHdoZvATwhn2L13rYZqa4M7uCmtYrp4NDTuSvz",
  "key4": "5w8u4sG58XVAzeNiCQmrZb4oqdTA3T1wiGD47UCYjDeRCeTfC65HviZ2BjeJxKaYHL9u9KMKA4KZERnueRfuuwYC",
  "key5": "9YKeYCNoAGVEtPSegrCiZpA57QvpYevPNYBhsBo1hZ4wXevFNdABFrRT1ox8dx3Axf3CfZjSrXYaaxH73Q1FMA8",
  "key6": "5NXYkuZ7BTDNUKuqjYh9qzEzbv3E1Hkq7YPzPjDvpB973uAUJ5jjLo8cABrz51asJVMotDmeXAag7pxBfBLwhaPK",
  "key7": "3QZqAfvg8N9BMBBypfC6TxjcjmG56sMDiwYM2XDmW9f1e2EFRJTpJnwUXDjGih5GRZPLJGEQ753bYzx56vzMCELA",
  "key8": "4FpcFp6abmB16Uke5EZ3TgfLDJbqPFSBTb8h8xwRywwY6nW77GNuZ32p96xbmzfMuHETZNfiZdHWp5opTNBKfmX8",
  "key9": "3K7hh1JfiHCwK9KnNa2fnEGncgo9xCmiTLSUm4zjKZuY6PwUSoUXV7QcHD9qBY4Cf8L2azAgTfKhHZ8pgUjoSwcB",
  "key10": "4VNhMSaah6eSCRQfciKHvYUVf8RLHr5GJxWB3kqui8tqob4Zkfkc3zebGUtLVYAz39ambAAfBEbEjSKEDpe6Dujw",
  "key11": "4WWTc4ucxh1JPi6fP8ivQ8mgUzYAa4WfHzHD9u4U4sXN788rnoW3X1G4MeJajsSjcaNG9BtbdgHiaXEAqxt88qNY",
  "key12": "5qWU2VaULQiLXXWytoBXxaZn6Ea6q8EqyStc9pvA18zrbVi5YjFipJXBshfCELS17aoRCa4o6Cfh9kcj5QFc6TgB",
  "key13": "2hn89cmATm6fk2g1GkG1iEym15TDG1qpmwJH2hRQAsUci5UDN62BpQtkNspk7UCfxB2dAtS6sGtEimTnLfn46tvk",
  "key14": "3VwQ36tRMh44e9sLsr7hMdwDi7MVo7NGH6poGtyudDLWsJTsgF1qYaGXHaow3panrm3VJW3VF7rqSeuig5ftcRqW",
  "key15": "22o9Pmjfi3r13h55Nn6GCKHbC4qMFiCKLZQysMz9UR3yeW9WyzRTLWtX9JQZ5akTnDh8f3Wrsa2fTqN8f4io2Nhs",
  "key16": "4Q2YjywVZC7NJ9cxexx8z4hKKrkZRiofJxj3ueRgjuicnhWawdBu6V5WZdp7CnaBHNDtVoGBVB6uxgbFoAbsX2Lz",
  "key17": "3jVtngXdCnNYSjYhh23F9cUP18dpAbrbaTjM6f8PQ1EGEuf2qV4dyxQ1vaWjs8b8uxQdYcVd6oAQ6y5Jehqv3P2Z",
  "key18": "3usStP543E8DRoWYbg8PJnkUPuYmDsMx49npMrEV156prUdPg7VRUbKsT6VQjBJyRVdxtSMPydtsCrQo1qRFhaLY",
  "key19": "3DZbgpUQu6C4GhjMhq3UtDWnsGGHnK1UHUa31mdLqEJF9kpxNoSyc3gxwqQBmGe3J1Wsfee6UCDsx4GyWvQsKR8U",
  "key20": "41Wz7d6WYTDeBFJeQDjB4GPj6t1nQX32iGfN7JvMqrGeA9ZVPMmVwYPXJg1nt7jF1uyhun7F28D2jHYVNrfpD89s",
  "key21": "31U3edTMRt2JqHJdimRoCVcXUa4bfAiNaz6CDpeSwfTEFPUvNaBmmikMgz9vNW36TdZxQnNTU3WENebVstQNnv1n",
  "key22": "3EAKs6DRUfC15yNb7eJXGjFPbbnypVQNZWRKET2zW4nECqBy3fPRsHTMp5NbjCkNzVAV9wjAryPc3FWdeU8fP8PZ",
  "key23": "3e6UyMvhXJps1Mdc5EQLD7vco5PGtpYWJcMzJuarPFH1AAszRFMggkk2aPCxXLXpJ3aFn5v44PXNH2osoxAx2fZB",
  "key24": "41JWfkjWsbRYorA8wbGVspbuLZ5Bqp6TU83MH5M2e5TXEvJsWyucTrDMJw5tUEA5UYhvp561p8g2Zbt4QPWXsz7f",
  "key25": "5MoF8MKTWBs1qy3VmuT8b9qXBmVHqV6a4Zvrcs3z5TfRfuSch4excTviWr6SVC78uuiWv2GiHsFXCmFdb7r3oCR7",
  "key26": "d8AXYRHmecq6rcfveRgu3JtYi62vkZLGdFneq2EWkmQRJBbvVgErMseQ3oPetWhECRGnwphRWG4o2kp99R51FhB",
  "key27": "KHNzvEdT3yAUXcmALcKiRuicJjMx8C3jHgmvRDdMpvw7TD6iMCpp61dh4MCVWSHgoyX74ARPbYBkCw1NAeektzi",
  "key28": "2QwdGPVSqg3aX17dEiASSjEcVb8dWZH161FWHmsFi1KvNTNuagAcbs7iobC32vY6N9qXgqnRYexi8jaqYHLzwwWX",
  "key29": "2Z8zxfQtUoUEFsTEQ2SDacFoZV67kCQwqU3ADqRfD1qDmNaYuqoLPChoMzs7meUCDUd3SHFu1R4GvFvWXRLQ7Jhn"
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
