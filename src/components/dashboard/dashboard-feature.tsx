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
    "3KGhsNLzbb49odh85As95m7CPygbog92SSmxFioG7nZ37Lx65SHAhxzbxnk5LJNBeSZSZGJ8aRwxGPdLFVQEXCAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v4ZrWUHTYWCiKE69aUoBMHeRw1LDAqfm2cuZ1jnH52iHsytyEqkk4RmVyn9Anzy3FjhokQHJmwqtEPDSEK6o3yN",
  "key1": "25v1nxphbd2KKyabep7FbAu53QZgexE7oovVURfNJARaRsrb92qJwdkGmd2oVTkLopAKDjAkd71w98yC2ZHq4sJK",
  "key2": "3eJviN7hVJ7dRYJDA2foxr47qxfFRcLTWD83ui47jjjbS2gaTBf4nCiNAoQEXJApQQSq9G2B4aPU2koFjkBesRHz",
  "key3": "2kGVJqZCv8TGhWNrZ94UrDhM8SBUc6XuAeDQbTMt5bQtM5PUQoeqc6NcfATRK6nZ1VhyY9FCfivSa7pJeTgTUkyT",
  "key4": "3osHRJ2fE9UzPRMsKEDq4YEG99mVDEm8wBy8qMi5aBDy71VN8TJKY7UShWCBQbPsLgx2MiVMAqg69cdRYKpzc4Ks",
  "key5": "3r3Fv8S25hqgeddSdmKg4cBHKmVfNLPuRb3xPNZAA6yfBKvMxzb42oegDmYcVPAV1g5paHgteiWmcLq1SMWt8RCq",
  "key6": "5hd7tt5gbp415oUCjwVK8uMJ9eLwWDYhMH4Ke8vGjdHvGan51Cnb7kNLJs8XQLc8xx1JQCUW3MLgbn2a9TWjauYp",
  "key7": "5i3VQB3PaP2EPgHUWcNmzERpRSFHE1Y6iAAzwMbYGyYFuP1wnE5tyvTM2WjstS3kTMiWNPxDf77FeuxfYNc4Ww7t",
  "key8": "3BDsb7ozkHTLRXqXw46rDEeFedzytg7uVXzg7aQcXVzDH1PuaPswWuLdtkBvnMjAdPUidLs5VFM4AREvJ9PJiN2y",
  "key9": "RgbseQSjkzoNSvBVpv4JDTw5WDHxcddv3eu16oENk6ZsgPCTxu82KDhrbQjinHq3KEebMC341kj6smSZJyE12mS",
  "key10": "5iZVSdHYeuSWih5QaqEXMV3wyEqGRaq7Bto4gqvD8rHUZqY8uBvnkRT5cHt96hKR4n2knXPm85oY8Bg4XM9zaPpW",
  "key11": "4AjAcZ62bSQCBRS5Y3beg1np9U7GwyLcHFQJ2An4DnK6nePdSh5o6gvsjecfSMTmg2SSP26kwD26zZJu99K9ERYh",
  "key12": "MrTfonpDFMtMCPzJMdMVNJqQ6LT2YbBX7JhvVPJ8ybwHi72cae9BejJcS9nzzZuXRjcJReMF2MrqTjDfZtnShhv",
  "key13": "3fiw7eFAmhq2htAtzAqjjnJ7ahw5DqZKG9zVZPVnNTfCpQ3LxMDcM9A9EwVLg3ZuC11yHKe15N9K6faQfrGvfwvS",
  "key14": "314RFFF2kPYbWBKa63rSgHUhaFhVo6iVFtFWLgCxTJugxdYLARthh6H8AP5R7yE7LPe4b3RbJmAnPwq9Hc3LHMag",
  "key15": "zUcWfTPG3jU8h3Bo6NGtQGMwbUCZbfBjELHVzwrXCri7CgNfR8KQsynnusQYQWW8J1sJT1jkvtBhWa7LWwHfd3G",
  "key16": "33pczqqSZTdcFP7CbjPoGq9uioGtyRTtoYJ72Tx1hD8fYzwpfhQL9qVGSY4PNr6ZQpVwVRVde8gW2UAciEsWBQ19",
  "key17": "4xh8ECYz2L4JyET8cq6mAc5Nmo4yPBHKEmbHMFtcUPkfQwipuhRESK3YSaT1XLpSFBSWSbD4BKMPtjDLukgetaEX",
  "key18": "39UUdL1UH9gCahknUZ5s1Yg7LVP5fax3Tds8hg8Trez6QkPmwEmQKWU8quvA1DLffS4Pd5FMYyHyFaL6YnnSyfZi",
  "key19": "EH7B5eEXESVK61SkMiWaqW52m4dPJWd5KMEQ7cqwT4pckfDzD5UMUrYWPxFsu7BwmUDiDaeMhD73KEY52dhsFKp",
  "key20": "o3xo6XnNg2bQg9p3NCVZ7ZeWNtU9vLxubvcGKWRLEKFU1itM89Qo9gNYj8CHTCPHmWPz7bab1FZu7ijr2Z8rwt6",
  "key21": "2By2vLNzpu7W8eCEL84aoPU6UksqbddMhh3foCLRQA2dgrvutGGC3qLzAKGNSEnuNXNp9NZ7FrBYzcWTz6cKLanj",
  "key22": "4g3jPe17QfNaZZjNFNoaEVphSdPDCJGSngnrPBLG2RSMykzXfuj1zQSz4RirEJzULL6DfZhay8dziHyaNq7DLX1D",
  "key23": "9oPxYY7aTaKnJnuoyA4essLPk2yxunTPu1exz8rKY4HwD46R3jNkBCufcisLTRzrnF3kCwbApf2TDUCHYLF6QN9",
  "key24": "LutRsGZQAjKMcSXZzxoi2UB4NcJFbB6HfR6iEUZrdeYtDXTWwL99DLFA1UfB9UHM2EZdppUtMsxDucRBio4nji9",
  "key25": "5F3URceC8Yf2FM6oAeJfg4dEBfGyK6F2yPbX4jw4TeJjx7qfBmj3CB4aABGR48HA9px84QBwXzQjfaERz9tTZKnQ",
  "key26": "2jxLGDALNE4m3uGjwrsBGvjg3KBHSxRcFmfMPQgyav4Tc4UsfVoPUn8VBhiXu5CetEAk8evBSWQp9cgTLptVsWkp",
  "key27": "4FUXdpUEFZAeQAD6QdVnCxJUY7C8cKYaH8LLPEW17cjgCAaSfD37byNEcopEr1YJjkR1UbBVmB6rTqEGZvvMRhcH",
  "key28": "4Kboci26iAHSAQLyqtAuS447xx3cnY33P7bWmt9aq3pqQTPC3JU5G5w4XG59jFYXVE7WL6XVB578sDotQtNtDujU"
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
