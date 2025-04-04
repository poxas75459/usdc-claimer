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
    "3exC9LSifXDd32xWsJtNSnXJgDyVQRcBLL6pTW8jWvpwyJHCE2yNyhCjBvDTY8vn7SDN3ad7ohKLrdGcbMSmdSDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Geo4FwLhjLLVNdUSr8GnbCmr4ezWGNW8aKhcfARsL5jBvBCfRNPdhACgvuwsKfS9DYGqxcnsoqPrZipWQs2VyZ",
  "key1": "wfKkh8ZULq7VHVa32eDB3BQ8t6GBx3K8QjLC22YyZRQFPyyB55Fi68Xikngu5NTzhTYDBhWdzq9HHj9vNgQoThX",
  "key2": "4yS6DEvwMwcSte74Yp1MSzmZKRNkYUjjhYxi5w4h7Axn9RgqW9wL52GkVNyoq3fhFBBPWHZWfUc9pKck7AaMXVvn",
  "key3": "4nZKyUy6itrTdC2d5RhNjdSzKpeo6rzp3jDgUg4GSEfraThjuJ6jWPiENwZzEvE9gwztd2EQMz6SDygm2gTapyFt",
  "key4": "3UEGpiJHGrrtUeFekcPKLL1EKdFA4GveKSfUsPg8GamEthkgrdXgitSbd7Sf5Bt6psnwQvS3NTU6WZaNbYUtA6XC",
  "key5": "3UFsbsUVavj6SN2XmXRGvygZjM9UtXBQ61Hfbdpj9EpaAgSKV8LgpqNr6xofRumrzwVdwPuKWgSoMATC8pxR8xSa",
  "key6": "5vZFmLX87sVCVCchLvfUQKgN75Dvbh1AH9yYSnTgvmhiBw9CQyaA8HWnuvVaGpi87vKTyADyCRQWKGP5n4XwBZyb",
  "key7": "3G8bJkJhuHRfq7EE6uyszdNMb6g8srdQETZcyruZnLACNQ5KC9Ws8yjbZ6cACRAhCs3MAvekFE6JXDh5mJztJ4U5",
  "key8": "37sr2nq6CE6MbK157VfEQhnJnxYTpWTQG5w9oksNiX2K7nKeYTzRbdn71FGnLcpa94LJ17vxjKYb4XFw3rEYNPDi",
  "key9": "5YeNDy6JQGywr51oQxtGjrMUKf78zkTco7F8s9a6WiWKy5TPxxme7YVXt2pR7wf2QzQsgf5xRCRtU4GadKx6G5w5",
  "key10": "26RBKSLi4bEx9p7K8H6BhcD1bqyeEeDJDJRvfU6X4eNPMvjnaxP3H8TEM7p2XgTqP5nFcYT3P2C31pzDvKjuCkMu",
  "key11": "4ZeRps9MfzpEnrs9bHXGDDEbP1T2UpJwKbTJrcrTqBZ4daHSn6ZNXvcdkaLqfw1GLN79b41ACLKD8AY7SFoqc1B7",
  "key12": "QqmJPwJZsnU72J7XFf13BPXdbGpEFAxZBmKW584ihUzTmfKchefMFMEAhUgv2pTXEpddu2WEw8epVEzF9gQRqoY",
  "key13": "37ZVMMPVbpHkpnMq5pmL5EMt4p8qW6HHGhejkmR8tqh6C9LkTDpbDipLRdtr9EoSEGtDM6kiDKjXejsLSCuyMoNE",
  "key14": "2TigkxwkvfQfQE6SFxwMFgDzQx2N7jZ9xgG144asktfXDir7XUVNuDxq5c93ycvo4YLhDgPUNprEAZfgrFBfcGJg",
  "key15": "3YEFxJ2E9KZPPFREtvxAyguxxSnwe6uNedUPrk3eMHY84scSyQc8h1cQ7rN8HtaDJhfjxZ2ibpzj6PH3EVCvfFWN",
  "key16": "39HaoUi3WwimrQshzMd3i8ugSKJYduRVUKFgpPSZjHm2sCmQwetBZKAH9XPCbGiXUnu2o5Z6rhij7hEAUDsHGQ9F",
  "key17": "4uXEt3eBdYMt8TwQvTjZGoRAK5qX7m93fDuQuthtsa6ekg1dpwR8Vp1nm83i1udzwvgM5Q7buGnFSFdB63RePZKm",
  "key18": "2SQd1Gg7Jt8mj465LeHr3eNETbbMfmi3xbUdZpEaXJ1yFYwrqFJsRjgnmhcgP95urQmajbv6y4q1jG13gjrTmvjB",
  "key19": "4M9TAqbNvYqiYNsao8innJc4Uf1Xx6Td3q4W92GWo1Tk5QJcSRtMts5Z5q6Ame7ZHcrSpwi3Hrns3c7eDKt8h4W2",
  "key20": "2AJRDLisVDjRwdbVnfz4tJbJnN7oUM3bCeRZKxaZi12KGaBLfgXjVPN5obrN49jjRhQS3tNQgWS5Zmek667TM2bW",
  "key21": "5JmWQNSGmCffaqJkBTWxCXNHZFEfEozCjQzPtaue9bf41tPmzwWLA12zR5FKuznJZaP9r3ZsFS7TvhAoWhBKZErh",
  "key22": "3i9f2hKnviZF6MT6kL9VWAjcJUrqgXM74SAtWpbKGcxLyxNvFiK8AcfF6obznnEXQrrpLwTkqTXM5Z5X9oovQKE1",
  "key23": "4g9Bicwzr5Amy9kAscxMPwaE3AFdD8EPjDuyAtgnSBkPNRTBF2eGEdjRdQNhbTEhU5496wEyXpjiwvmRDiP9FsKS",
  "key24": "2TuQTE524eEAduyz5eNoQ9zQzquvG5e2LBTfA2JpYwwobnWVeJDHDYWgRctzcXfg2TG4RHiYfDFDaaMk2BK5igan",
  "key25": "28yqFYzSJ4avjqkVPMGriKLVwZqUgkXPDkBKgEF1sjE19fxpRE8jqETW9WBPmxJcnKJRdYajQr4PsNECX7P2jWDA",
  "key26": "4LiFHZGk3kXAJE1viDU3tti9Pmn8JwhzVKfRJ3dUE6mnLi4nrD9JPjbdc5DseCHHbuaeBRwSZCXHzeT3L9x35iCM",
  "key27": "3sPJHFcYNoBhmiKFmHqwfQYyJxBdNLi5ck7rsLTyxK4JhmoeU25LcTbQh2kYDKhrpHvqj3tKd9vcKTcGBQFxyTuF",
  "key28": "7Y9SYzm3puAkck6cDXhevRznf3Z5tb1X6dcDxrs6CCYB5FhbuPRJa9PL2zGQD8gBirDSSVZ7gp6RPCbxaob8rju",
  "key29": "4Jfm9t1S25Jwuj2k1e7Cg6QRPMhJz6amUuErhh74A4oTAyvQw1ouG4FQfbmgFEoVZJH7eiQmMrpf5HcBfrYhxhPv"
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
