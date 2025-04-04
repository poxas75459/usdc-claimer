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
    "5WM3cPpueF7Ma531iy7q2Lk5JFdp6DdE9dUbdYqETswaoQaS2SU6XMxoTw4m6GHgfesU6GHWM5fiVnEwh9aTQjaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ML2DvFaPy71kqRcJLQEnzz9wejPCUs3XDcUakZo3i3Ad4Eo7BAUSFFKfehbsrddwVWRdfeXfztozEkW5ASDEmV",
  "key1": "LndaetSo4iwjGg4zdmkcPSUSqQhUPesmahhn9JaXQ3p4Yhb8Tmv15M8n66u4hA9ivEqnrEV9B1iM5bPXV3qhUu4",
  "key2": "213BHg5rtoZ3VBbA62AXPShsTfxzSVTMqJvqyevJ4WNKg4yUrpuXYKX9wNBdGmvi6X6SPsxomJ7GBvr49vt9yP1r",
  "key3": "2T4snyEvSFCdfaY4Fs9LYdxrGudGPrxfWTiqKkpdH6KjsaacHFoDU4NFS7iDwYKy2dddDUsvyEKUzpw1LkrEMQm6",
  "key4": "5Z39XvB7AKjUAEu8mfz9We6H9UDMXUTi1dXn9auK28TzFtAXmh1kyoW3aaDDqWTs5vpYmFoRTMzmEpCGT5S3ziqZ",
  "key5": "4P2kUTs2oec8VfqkQvSGLNRmHRiUe4DT1FFwueY2Dheb3n57Sk9NTthL43p8GqEKsJP94eg8X161jACfYdNZyWGg",
  "key6": "2wbci83u2LzpxLCa5pYpt79418TnSJg1T8HQXVJU7W7XJrW9U5YT9rLTswC3APBpAkdNiB6anccvLzxDHbuDyoiB",
  "key7": "3RyGSPCEzR4tiu4t6LjJtG26TFhBQLrHu5h18sRrRejkkTooCEvguBCCFTccALhKnTZvD2yjwg6rQv6Eq8VmZEix",
  "key8": "579rtZJiiaFR5C5Hz9tNv69gbJxgj84WZAbocFiSiQ8qbtYRf1F6ENWQ3cbk5DGQFftuk95wWSpTo9UNvqfUhrkT",
  "key9": "42pmwPPcHzsp5wy5FzoRyPaXSy7ve83EqiREHEE8Ly8Y8U5iQJrFvmqwLKvf7GMtFoZPfSd9GEcW6794gQfnS2zw",
  "key10": "39jXLj4ABvAHYhyUPqVJS4hwsL4amfVubFFjN8UXrhRJXYT2nAx22mmpLcFHN69ke7Sv8CyaMJZeM3uoTvhhvq6V",
  "key11": "3S6tqNyUjitkdP6pbUzB6qVaNLXd1JXQB9Yrok4oooMTGYkH58GkPHeAu3Q2HQdqMjgXG4pwVekKqaX5raxECHbE",
  "key12": "4AwNxTGHNhsY4QSsD1vKvN3DFAsyDJzgPFw8V6eU1jN122iGrcZBPRUrUzoD81Kg9VrHHgMthHph7iCEr3sh3KAF",
  "key13": "2vU5U3BF34YrhaZG9cgD9JfD9XXarwHtVgm2MKfqbckqvaBsgQRrg9Jp5Kp8S1DcFFmKuUzWJ5aeBqL3QidioLLA",
  "key14": "3sPrJR4HxwM2iJzYTigUMr8W9WZ9PWSFWZh9j34af7Xkb4LdUeSAWjG7Wo8iBgEizYCdYYiytcBRve8tMjC8fCgm",
  "key15": "NhUmTHNVDhyX13MLgYSNkJrCXbGPJpyb99K6PJTkuvTammEpGAnq2qPPAuGVAVjRiLVN6Gvee4SNjrdKTrR89Gx",
  "key16": "XcAFkRADS11bgvW3J4oRry8htJczWqU9T93XZmyiAVTc6MD9L69tXdk4AV8mxQarLHawiJC5dF7tPcmuVYAEMPg",
  "key17": "64CwB7dNxXSh15UyEkTApeMyMTwfTdCfs4N6n4DpjVS9X57ppffWyA39s368S4VPsx73mqRbHUahosMxbpv8qUmT",
  "key18": "4cjyThfFQwc2VrjHtbJUdwhFPBiseWqCa7AJhY1RpqcSt2NnsaNp1yBUs2sQJryECFeNMuqYaKGDm5pyoj36WrGw",
  "key19": "3Rxs4fVafHVtHwfmcqhFtqaYQ9D8ViJnfFQHukxuEmtMk9ABXCWs63CDF6sJVhanfwoFDHzhPDHfgmL2kthDv6sM",
  "key20": "5UsC8m84FNrvkPicySEda3nAX639H5aF8TGrnEP4Uj8VwwfVAVko4QLWmEhFK9gfddA7X5jguoQtDC4avRvaqchG",
  "key21": "2ktYH7rC82W5oS5cTZq5mmqu9TGmcM5ZrYinwjPNvEugFiywAj2WvdNxaNF3Map1agQSCaE9F1P4huLRLqzTjCq1",
  "key22": "41HWyxfMLrGciQRxAntQgYmnJg8JtY8meh2N2otfoNy4FrihQRGYHepCUK4aKEJg95e4GCy8TcULXBUc9bsQupDv",
  "key23": "Kxv9whtVRTheNV9HLCQycrk2BwRnSspHHrqTe3zNdbqVYgzhH3arA5oz7xQ7upZCS7EHee2Ff1sDCrvUJu1b1jD",
  "key24": "24C3kx1abTgtYPWzX6QP33uGAAqP87iRZvG1PJB934aG6J2VTRs1Kh22Kj6TQJLbgz4HB38CQ4ci7r4a2a31hYzk",
  "key25": "4ZN25aaXApPqvR9Z2i93q4dQPFbjFfTZZf2d5bLWq1wNoiaxfLRKxSqVU7rVErGzjffSN3wqMGbA4fz4E4YtwRb4"
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
