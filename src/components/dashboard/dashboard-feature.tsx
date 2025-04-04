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
    "5D1ZMHR1eSvzqX2YUMw2FrqZzW161vQ9eQVLW4af6z9BxptbabnjDQ8zVfyeksfWHkDbm9i1H8Y8vEQ79hntEAW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65iWbeggvG8pMB23NtYTZx22Wt7eebnkXvbGZizjxRCYke6PqpLMyttmzivmaRMdcW18phq8f9mCjmSjbQdVQ2bk",
  "key1": "srQTDjSkde5xx886BzMLPXcAthP98t4znZAv8XZPrNJC6TgAxFMPmnhsGRpkDzMURx3m93M3YZpFD69xL4HyTqY",
  "key2": "2pycqSb3vXBBwdXBD8WAHGRY3ETRaCpBV7RZMmB6EZ9HZrasM4wXXxvXVvAurC2Hxe6ps6UpamDFwtcgfyKpQZAM",
  "key3": "5PMv8YR5qVkrQa8NFk8SwFcLv8b7rkDEZFV3qgCRv4WH77obnBtZ9pa7pEyEpH3ccMjd5usz3zGu1xhyuLfoZvTc",
  "key4": "2z41WDYYV5sucVVb29i2bBEMFzJTs2DqsP9Gh9coQJ7VQuXbcLWQ5ox6tdKv9YZycQFa7jQzsjJzEyhVXDoDRZrU",
  "key5": "Dz8MBDzE5uer1svZCtgicYscptvKSftnouFBFdWcSoHE1aJhc7sCf9jnhWuwCYHfmojjKo4FFhXhoF2ciDULJ5y",
  "key6": "2dFixXrD4cERR71PSKrrqp5HcsXTQ1PdWSEJAzBojDrPD5QyAQmKNU5xwHtG5UBnwvnLmqFdwUYcsj5GMBstLPdg",
  "key7": "66Qb1Gwpaer1DCjXoP4i9yhLU2viwyp3nsTnT9y6fzid871i4NJ76yuuW3KcDEqSGCD4ncu7T7UrHo68Hsqe7tyc",
  "key8": "3txQEuL67RXSKsCZLhNxQSzSamM1UigzSBwzHmL3fsVuc4dJ79JmxiuNXDva6ddpmKaq8qKKh8YxBkDmg7VjnuaH",
  "key9": "3pK17iPUpG5JU4THx9dsDzeir9FKds8iNMrvjUgCReCjNJbqdWbxbpeGnxSd24wexvyUdpKgWWhzPuJ1RCy1G1Uw",
  "key10": "4ZrUwm7e99vA22r3ikMxYBUweJpvmZDoK4iyPftMnZUgjjwBX3uwLrKGADLc1fZCLHaKdzYAqTypceYD8wdxYNUU",
  "key11": "2RzeBMafN67i3yMULyXUe7y9KqiZ6qtAuBTfJ2FkHK41TLwEy5GJDvVYGLc2jhR6GTZmKzN3L1tAAZNX9yA43mKx",
  "key12": "JQif5JfMmex7wHhKc1jU2fNgh67Qfh7xfFk94qTYXg1jWPGkXievsqCwFEq2EkqKsNpNCEWwkmS7sqFqraWo9a6",
  "key13": "SptK2feNAJxL9AJJ49eAEkzTpUre1PHPiTMddWL9D2ruQ9oEpnfk6KWtP6zQmoPiV6Q8iSW1gWvp1RZCdeHXtUk",
  "key14": "46smCQhuSq3RMM2i23ZgXEL2XWp8n9PFT43u9kiHeSztm3By37VAqXCsKA88iVK4VivoLKfD1CyEBQ3j66tGh1PV",
  "key15": "34FBGBget8Ea9EZz9SrhekiyxKqrqHzPnbaS2yyiQxcS71qkvr7HSJ4Vf4GqLjY3o1YHG9qqdooxGhmTr98TDgH5",
  "key16": "5ZHJmEkvvrzjcEjvRVd17KSbNt72em1YBkRYFGYH1E5asNHKs1K8NDykrD8Lxt242VchLMYHcQkC4o2Y9PEZiwru",
  "key17": "3Yr613PQsu4eXCRkhtVqmaQNRsnedAoZhNZwHeM9445vrG6HsNVRLkvRhE26y2XomQXSwod4pMdbAGHaUaxGgsjh",
  "key18": "5i89KXVuvRthVQPfyDsX6YUb5ZwcSvtgqdt75iXozwrbqWd9ECpAL9hZU5Rd7ScDS1cUGZG46hkrtjqCSig8TgaD",
  "key19": "26rSobhCkKXXVtz8uVUyS27UWCHNT9bV796cku6v9kEJ89PjoZkZUvCDZmMLgGmnstNs2sNi6nxqUpHo82CWj9o7",
  "key20": "nhMbHHdfMSHtd41QUXR6CEyipWDwpiSu2v4cVAM57mZ5BAJ5x24dr7JRnvM1M3t9zwBpCNXVzUhhtAQSVn9tffA",
  "key21": "2PiYK5Rw6Pp3hDuFJGNphj82eSPnzR8QrdwZfvByCtj11rPEo8nTWGYCFb1Va7fZo3L3pNyLyvqWs4sP3nUJmruK",
  "key22": "5gvL8CgAxpsp736ZH3A84k13i1XGcFvxqNiGup4oMng8xGp4hyjZi1P39GRBe5Jsp6AWHfL3Utjpub5Jxcf5xYaJ",
  "key23": "2LBk2RKhK9kiLTGUqudqSpYT7vRmpNW8vpmhce1BVFdJTScrB93pcf8T6ob52FWW7G7whAs3MYfaUJGtE94zzyp7",
  "key24": "57fvWvxqgp1s15A2kVMsoiDFRE6TygBBvGij3YpAzCsyuukLQcSmZryHhe1ubty1rLfrRLjngDfounpYjGPfJyK1",
  "key25": "3mpvDVRGJ3QYjq51YA1iHE8wbfF8Uotk75ZFepgQ2s4fYPM1wBaKFSsazpX32DvpvRkK3Ds4wyfynva7UcEjotBb",
  "key26": "5vaND6BVpDkdUeVwxaK2Mnxi4rj7ACkurMtYbchHyEPCZ53gw18jXcvhnxAuR5apDKUuaariSWJQbJiiF9pFmvcF",
  "key27": "omTXXnQSk81Daecbh4xKniqPQhYWwk7jMsk2NG9G84un5cnUZHqN697N5XhRo49aHBZjcpc2jiccLW1Ci4CdPCt",
  "key28": "cH9UVyrFUi3P5TkpoWGHboudbDRKKHne2ired7UP28wEc1jphdBau4m8CmLa1C4VXS4FpAzaWcV8iKauXYMDyqN",
  "key29": "PbNmh54RdNs7hzCGTuXXr8PLaq1JJNEw264rjrCuxR9SXK4gZJ5TdqUMWgHKF9c1jxm8ArV6o6LFb4EnefvKEtu",
  "key30": "61XpDimwToEUH5BDZmufQZpFhLgLDLeG4VyT2ibZHhfV6eX1AEJ6ubzzuX5XikRvLXpenX9bCRuUcYLJkaA59zPo",
  "key31": "4Mnv8dRCuaPQ2carng3usBW8Sqhtyq4KbvLE4MhNvqgGogeiqQmVX59BkisPgFCtrBqBZjuaktogEYgez9ZbB7BU"
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
