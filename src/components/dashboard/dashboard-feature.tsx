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
    "4QYUhvQt3AJY3fqWFsqSdF6fMWNekWKy11Pc1F8HDkvVKkXCBH4VLaZM3J3iGZDVSBtF5xWyrDLb46syKzLLtTHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YEAQhDacahyjBJB6xs1VFijf4RYSWnHJgTd8mcgDEQ9rnyS8XaCGu46MXHEtRpSVZdj9mWsL6Cf1GhpggJxzJya",
  "key1": "5sthN5v4KT9R3EBtgnSXg3CnjiqP8T4X7NUgxwkVBQ91TsaFMJC3s4mSsP95LMaCpjKanL6AK2D9a3GttqLg35ju",
  "key2": "4uNFvNjXdgXTY9Xwqgx3cRbv7pGRmLq6ab3nWddM198CHo6GbiPuQrAeQwWFQwCDQQTsaWgz5KVZAUE8xUedMa6N",
  "key3": "MgyPwYU6TYeP4s8z3sDVr4CH5xsxzVYbpPMzcB3Hj4VR2p8GHjh4tCqbd9K1y5Yvyp5vFJCWsko575F7aCQEKXR",
  "key4": "2WwaXQHgDa8VQoYHnnsKfVh3W5F3i4D3sgJayqdwf8edUTEHe67KqPEYr5Q3KtaXrG9J1w8pwRmsA4QG4Eiu5fXF",
  "key5": "65uATvPJ1PoyYNDP4dmzrffNvhH5g45NyfH4uM3kNcjhpsXJhNMfXrvefGqYed6mcMgWfeu1bvUX51uq87NyMFAQ",
  "key6": "4zXQExAJbN18q84iayvdTtyjSbWhtbPBwTG5QqjtVnCKzW9gEgYUShS5nRBnDtFAusps6Bqfx2og5swqimyQPkNo",
  "key7": "52sarE1fnVbLkN7R8oiqZm2MPAdHbuPRpSk3x61CaQcrSM4zWwybmKrFjs2BA9rGnYAfyLcQ9CF8MmNKvpVNdkxN",
  "key8": "51gqknYmXim2MAG6hUCBQX4djrD5NXLk4bJg4bkRiLE6HS7gRkvkVjRFxecA9RZxPbdyHddY3SPwuse98EoTusKX",
  "key9": "5bcbJ2d2bLcWoD3uYnj8B93NeWwi995o15vpfPnMdEjdZUyxuxezJHobhDKVCLzYPHKgkBXcpYiguGJhFojzn5QT",
  "key10": "2Evc3ZbAsiQ7u8XiZvhQQfFEAe6yWcovgokPXedt3RmLxK1W64ty5rwMr9ockfvnVLXg9xjBkjwSbFyCdD437Z3T",
  "key11": "M1GxpkZ86uT88GwJA872sM9UeSR8VpmU34Nse2FMtzGwwnTSWS5SgVkgFJUeyseMTkiqPTDEygQa4X6EcgUxsPy",
  "key12": "1vitP36K3614iqtmHzYSHKJaeBsHx8qpNicsoSVugUsHK1jwMcWmLvd4eXBTHj5zTjruBoYtQgT5UNnyAxQUfbk",
  "key13": "3LB8JK9j421ydYcM4o5SjMEnfvMYa27s2faFUgJkFNAYvzssXGgL7Quaoo4aW2iWC1qeF7B9vr42oCdQgHSQMvWc",
  "key14": "4wWEYG1Gnqa4j3RXrW4PVMPkid1DHbe1PZnqdukriMtsxbfVWKiwXdGggMwtcaKqpHLh9RzUJHTx6TvDmUv2jkPG",
  "key15": "9WEU71KMKZ45VqTaPp165Be6kbCaafdDZTDVyj3t5oy6nMb2gThLtcPEyfphbykgi7w1GwRowHVjsDBczVTNQnU",
  "key16": "3aZTANaKY8NKxRyLPB4yvt9yUSkNvkbb4uwqQMMuZtaBYhx3UXFb3p4XPECHKizpG4JvtjWfg5XuDRwwF9qEYrEK",
  "key17": "pfzTnUowGbhFRHXJ7eWx7cbJQDJ1NwsEuPv2JXubswKo6msmvkcX3ZcRJqZZ42WS2vqZkvB6p2PehgmSDJFHhyC",
  "key18": "MHVzApbmKGLrkKaeLXF8Ta1MxrV2A9tLWJQJtXz3my7hfn7xyBNayYaqeEncLTTVaNLNpanVjzBtqKvFmKzgvui",
  "key19": "3gBKrmeu8uXMQmUaS3ZFLjyMjqNHERWttjmFxtKSAHvdz44Xck98sN3ELRzvJ6f4ygwc6a3m3jsQ1zoimG1JrqLo",
  "key20": "4S7rZXnBrzFarTJzJdPT88TciEa5u13MbXaAUNqexeeWmUeVU1kprBFP6ZtUiQrBTfbMnfn9uM1iLGsvZqTHTRNR",
  "key21": "2qCsbDfyCePUDDdW2SYojLBGXdJqYdes6ag1squNovwkdGNjDoiZAooojYerQfdqd9oSR8HrTweVNYxccdk3zPwq",
  "key22": "St5Pne4b7Zg8rTDJj986QSQAZVWT1CznWVTC8JA4sfXKLAiihRW8AE9MG4PCeLQGgjrDwvGo93ZqsANzPxrS5nj",
  "key23": "2B6cVEpXLtSMnevgSwK23N27mPQmFht23SD7dU5xge59EqZPnyQDpsqNwhqDoDM9rFSTgqdtx9tFExiVLRxmNA17",
  "key24": "MzAUG1MNaN4BFjXwwPkNSFEMQsuU4t2bHSfohwjBeQaNeq4JYyxovUV5u2sagG7bcbmy7SJBPDuSiSAVRwubGSw",
  "key25": "62gcwVZhTby8hudtGsubnXvTUS3qbLXuBqdXJ35nBiQ89TBx4gZ6DsUrvkDaFX2iUEYwpTgDNUcXGWoBVJZ5pEYh",
  "key26": "2hKu1gh6HozUaeTMQpgsp66PuSAsy99tbKNWKrrjEK2BQ8wYmKJdoFdZQAw5tqkLrsjmEQChffHgRsKevsuPPPLW",
  "key27": "4jdEpkRvb9UromBPDqBbQZ1q3g9rHCBojtjv27hYFHGGF1PrEq1GNy6JVGB8RPCBobQXcvLXKEe6Jcy3yswgZaxS",
  "key28": "2AoCzRgT4WZhDnZBJKB5YdFibZGZCbExPSr4GUuGjAm2b8g6GUDRZ6xXRikynyVRqLZCoud36a7Grdiu78a2kPuU",
  "key29": "5Qcffnyzs3xRbX1dmXoUis7APs21U8qgBGELWDBGoUx8roNXJYqCPpkpWEwTrLy2WHJZPtW5ejU7GRaXkQkRToda",
  "key30": "3dGD4pp6odDp6uSRfUaAjyZETVLmPT5mKANobJbqCR3ThWsWuSWbDThPzAyPYc8dLPUzkqWSSaWU85FMEnXUG2Ry",
  "key31": "5ZWdrpPZQwHYZJ3fpvVNA71xghCwUUqghzTn3Yhyguqfx1qVZkaCvaVuWJK5x2k8k4185fFims6HTx1JUkwsyjCf",
  "key32": "5Fp7Z6DD8zfhXiAQ14fCR8VgT1buxw9osZBdwHNigyxKzWrbfJBgGoCZo9apqaQymnPQTzwp59rxwUduSyaxi3kR",
  "key33": "ij3YQRHRHbbHtzvEyRF4axYXDwy67WcAdLq1SEtVtJNWUV3vPC7nTxfNNtwHi7PPUDqLJceCR1QcDdtBz7ypqAN",
  "key34": "C8LHgdUgU89UmVuDj1HeoqJLqnR3e77zbNUUjo9KLPqxZBEAY2w1bWh3rCBFdsGqB925A1jbh2zszkrommtTj2m",
  "key35": "4vhJZcfUV6bYRDvjxeMAKVmaBeoBQe3PY8VBs1yFBa53DHKJSSh2A2XxYU4TJoA464km11UNKX9q3GrP5wegFDJw",
  "key36": "5ZVfuyqTn5RkfC9Szcf39KY1R94kPbt9CmNhmAp4HtQCCsfZBNogLwz6bqfP156T23nLYvuE7nanXMph8QNSMpX9",
  "key37": "5LdgSPhwxnEztgq8pmTzoSs9cZnBReBA7vPJU52Ztp8QcvXFFXuTFHGLAnQQYXU66xXXsrG9jGPWwLFaTJAbaJDf",
  "key38": "DFg1phwxrDuTN5NRvmNdbTLiAtuR5CWAGhug5FZXjh2ZJR2o4ZoWjMhMBpgembRNJZtoeLaeKVASw1jkwoxfP9P",
  "key39": "3JoFFBvDxeMxN66Rioa669QNnrGtqD2tt9noBVgYW5PYYVcGtmPQt8fUhxfLNexxUaZ26dKW4HFAWXq7CfMHmnt7",
  "key40": "5wE9EwVfXqw135quBwq9JWv6CcWvmc2dnfkxWpgFamtH47pWBTfgk1gMbJZubtEJbHv83EpdMPweCRQreqXkEMPt",
  "key41": "3Y9YjLG65HQsUnPFrNHXiMGB5Aqc8JKsaHEwK1hsybGc8UxQ5KGgd83piCdX1ZKiSiNBrBDbrBPkLz2xd1Lx26AN",
  "key42": "121bDUDBnAXDvrURNnqEPMfYFS1DecmihqvaPhA1XPDgveoG8mPynnHWZFresdMYwwr4NNz2ZhdrgncUsw3JZg5V",
  "key43": "5benx3aX3TkUmwDALQF8d9Wh5tK8fcq3t4iiw6892NZp2MT2J9AyK5RffHtwCvAepXmisWbKqYRJGZJn469Ucjuj"
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
