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
    "YjAB67xBHPBVHzugsqV52qaay1Uu8XXzTHJBvXuRE6MX2WCNUws3hh1KqQ7fsBxLKgHBk7T4PMjkMK6PzkDnoLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EQGq4vzoPGbCr4kXraqDhUAa83NjebpViGGWfDNcUdoDEexvP2m5uHpcwW9ydSwXZhKhUkL8T1383EtsBYBn1Ki",
  "key1": "5EaWZZaSXfcX1pzLTyrhHynfN5MLzbf56ZTJunFJcdzDpB2PL2EduhCCsWrgLbbDo2kihvdd5MRDRN3b8ZTJvHXA",
  "key2": "3iwPzNFVTsN4ojF7rUC4GW4gT4h1hs2A3EwFr2ZrvBLnixnScKwcJv1WUqemCgDj3cW3tiakBb7pGRH3aCbz6EuC",
  "key3": "bVgTgU7zcdcrsJbLZJE37dmun5EBeWaWGCEFrPiwMMxA55Z2HLzNkXfbeMZb374Q6oEAn1vvBrxQYLN5RKwRdyc",
  "key4": "3SRHDsdHyTzrfA2sqDGfLZA4Za1hMXSvfg47GiqENQ6i6qn6k9bYVnnfNVSj1X6WHz2d1E8st8NGD1JyusvxPdGK",
  "key5": "2VHJsE6mhURExNfHEJuqkiiGjx77vxKw8mzSyAPuHS4ysPDzTD6QKMsFiApL8j3JmrSCiL6ACSPV6o2B3gfLZp17",
  "key6": "5ng4QSXjN54u2T3MWk8pEk2ynHFMhvpr8JAP7tQG2p3ARsUtowJxeVDhmxeyQsZovWZKnBtjgG3AJ8QkXqhkt4E1",
  "key7": "4yyks9ZgHNH4krJsMYdK4dZ6RsKChcDAdEjq8W65bYkG5tW4gE8a2PYFM86FT7B6z349zFRwmXELnUDKmbZiH5Yo",
  "key8": "NrYG7dKA5hkXmNzijnSorAHCjptSYpfTX9kYNvNJfPvpUmcwutznzqaKhdaP5x7shoC7pG6Amf1jmVAmpcpzArb",
  "key9": "43HXgZgJXQpH3xN5xEZfVRnycfuLYEYjFUTHU622s7B44enM6ornMTsT2FfD6sVytTz568RuHJmKdMEBLSWF625B",
  "key10": "2wkPJXG1D2vRd43v8M2UBtNnN89hVHJKhM7Qaa2ThGyeMkxH1mrpSSDEfn3jF25DeFKTmn4e2d3GmWTZv6oZw3d6",
  "key11": "2MY4bCYtYLkcFV1BK6JBFZVopNW2YmNBhpMNMzhyiXkXqVxLM3JqFLpWDpKqRifdjtQCbWuC5Q8sivfFVGBwLtnY",
  "key12": "2AH2E9dugGJiEKakA1XDjz2NGbrxnvvoAu7Z5nPcg2Ac2aAMnjBqYLVEHWvbHudaYD1vpCaLnjFA1xB6u7gjLTYD",
  "key13": "cWzY9fDnTPfsfnzqXdCotvJommz9ua1u3DfxMT7t1hVR9bpvCbdTmEHGgAubFK3GN7NhqFCuZrDd31EswD63bHa",
  "key14": "61WF2i3DDayEvmLSj2v3x8XrTQkmZiM5ULc9yKJhoZuwErPhdo5Y7T7MLcNUk8hzC71Vwkyz3kNTwkQ91jYwSCaZ",
  "key15": "sHpCxaohpNkbBXmqgcu7CVerCh88RnqsK8jbJ13kgGodnA64dcQYyYb2Rc6qFgVMGwFTmqaQ5kTXGkHjej9M8bf",
  "key16": "3tWquafFeiJQrEe3QE4ma4oatXJaLbg86n3VzQy2k2YPWvpatFLmu41ajVooq2Jb9NHUQqJfq5Czw4rrCVjVRPVf",
  "key17": "57JvujQBQkrUUiwcLW59ohQWx2cQCySBfXuGAwcKFYwtjonkj9tQFxLVbNPvCSLTcXN3BSv1EWzPvJcMkxkGtyZU",
  "key18": "53wpRc48nmtYUGr7ZDvTybnFiPSAzW9m7nhzHV2SUxuBL9ybJhaEVeE6uKwG9tMyrjDF9EQCSJfAeWijtpCXmzdQ",
  "key19": "2rfmJV8HHAZYx64CXqLwZ2yYuTNLsQBtAf44DBXMH4MdfYfSdxjxFLrqCdTiot1jF5G37NUVW9R4mdz6gX499PCG",
  "key20": "37p8zmZW95yPo4vpWaffc9ULHDBzFNFB9gAHgBDd3KPzHr6x4yWRfqoyziyGGMRLd66USieZwuGFnuAiPx1wQ9U3",
  "key21": "2rNNGcNdsLVA7qnJYhdcLTLPRQovvVaCpNKXw4c2U4ih9Due7S5o5LajpynyKBqB89LdCVeB7BXKr5dvcPLh44Di",
  "key22": "2UYwT7aJuVD6gphXxDLCjHBLumZuqHmzRbQeJCMhDDx1Up3q4rAeUBqSQ7hYHFCbozsEqZ1u9BqWszgcxkh1LYK9",
  "key23": "2DHskJaTVn7EjBVr1EXwEfffuzHwHApPTNR6iPVmjrowcjHpL9EwwjmkfXkvheMwg12Zfi75ZKJGcZgB8GToDG66",
  "key24": "5yp54a3of3qKZ6cTfQaw8eePrkGcNx8ujmJ1dr43P2BjDG5N3kajHkUfrzUGiA3A3hEPkLb8iYZT1vkeNFaxjMoT",
  "key25": "3sMheWDvjCMxEV81gojtbLrZF6PRjH9vYBvvqSprXrbZfnhwzeZBwWJKReLg9Dt535PKZLnDUXUzchhCopJkNRSY",
  "key26": "ckpz46ZSYANsxyucA9Gfq33eu5KRuLSn3GzoUUSeMFPzxwBau41mkogTS2hE83ojbzVYrz2JNapEX2MGDRyfqKp"
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
