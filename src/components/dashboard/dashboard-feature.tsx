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
    "Gopmhv8sSVe5HbrcmFYoBR55GmjzxBv8u1smtQuMGfxVAZwBR9eGXr1kMQBVnWM9JCqGp4SWZ3zYq9uQhbKpdS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A1fP4VqryJC6tb9HB4mXeqCArZRdsYvch5uDTrqMU3GzB9CFqQdDCexsqcXxSh9p5XsWLYDYbDZL5VMSY5ZAXnY",
  "key1": "3S4ZsRw3Hm1KL7hni9KY6WUnkYz6R9sdNjS9JNLr7EXbpEefBSVbXYtSdaV2WCUU9Y6hXpEKFUYo8zV5Z5BEonNp",
  "key2": "5xGuc5jea5rF15VLoHNeFbBUT5K9hA34kLDrKjXiywwoVTMt9RjWHeC925zYBvL2x26vCmQBfN99xw5ruY7hzrsq",
  "key3": "4PYpdbyZCQjEBUR7hoAcJnSpyazqxzSGCzJj59rWr3ADKqis5UFFMejDqfBaBfwZDv6J9ehutHNKwZR118Yc2PJJ",
  "key4": "2XsJpKVvedmziuvhpehnoSP7MFTQWh8wcM6nQaKdepxgkHXMN7zrAphFA7U1vrtP6C1QQ39rvAQujvN18yBydTZP",
  "key5": "hTMhBFTnM8HWucDPLC6uArEu8BKRJRQ23K8JwLeNED4oXYkoBmT91AYWi8pYkyRJiDeCSjPKh5uTimDECykwYGX",
  "key6": "3spCzcWAwvRfwG9xnqws4ZrdWLsnafQ13GXkC7BUSQ9CSL8GTJEA9f5nKbXDqjT4d8DA9RdR6doiNYpAKTJeDdaM",
  "key7": "3jyZrAQCcwpM5qLwsdvEDoUvaobsiHEHxpkdqnLUxuAEqXCqa3eBFJeAwCpiUeLtDAJ9oQ6QEAQ6C2or2hPBkuA9",
  "key8": "YwYrT6bwa7GFgL2wtmgCdSkcneSpfhwT9KXms91Dty9966dGaxEtVJVUJWLWD45R4wGRkT5tt3p21gudu6xGWtB",
  "key9": "3y8p6UqzZ7NT2GP3WaezSKaQZ5mHiixC5xbdLZ9Kd7nWvear7bEAJDhcCQxnvzdCDghYRoc42ihaNjJF4Ww9DEtE",
  "key10": "4sG5DGDSpgTbz6xo5c8H3dSCrKW3HaDxneNpaEHuHW4uqE8G2ezsDVqha8HU53qD7SHy6K5iXDrAWE8kphdTCCE",
  "key11": "3aq6U6oxsmM1CnkNCzEBMjGmQRGxCL32vG2tgYwGzJagUVtxDdgiTinrzy5jfjueQiSwozJwaki1cMMuqfeMZXKp",
  "key12": "3i15x2RtZCybnRcYWoLDnRnFsbEEXVzwdqwQLuNnBR4KByzDsHwaZQ4Dmkj5KPmFthNrRvBnY9bngCzgWhHbEqgT",
  "key13": "2dCf51fMUER71rWFar5LsvsLP7oUSYQ2rSe3kgSKXMerPPq6M1wGXcxrCLFjgvjBZrxs9wLf1L5B7wj7BWhs31Rz",
  "key14": "3YjXq6qjzyNhG9931cUMCDcj7AA7byWwKB7oq2yXRnsPyEi19xf5MsJCWvAibZ2Ah6WncipothxTZYvG5kCp4M35",
  "key15": "4VsxwdtmnfAQk5tLDJPJnhkC2WSiQxsLA9gUsyrhooEzMsKwhpUntD4biPnivj6gLu2dUPzR6mCvawfbpU5LyJKS",
  "key16": "3sGMNGBD6zDvwo4tMZ27hie7vfeoWZXZ6tQPoxD2DqMp3JM5w9Gwjg7fjp8JC6KSgYqBE4QtKz7jntVB2WF5Gkju",
  "key17": "5myoFnmEBi4haMFkrfPyurAQWZ53kqRiqPdyTAk9A17uK3STNvvGkEevyK7AK7yHeKfbnSTy9QmT9ibbnFWmcGgw",
  "key18": "5gamAQFsy2CKyjU6DaSGsdAXFHVQYU8EMvF7YwpPKN3Acxb11xjBNKCJskdxrg321pvDfWgxfGs686kxqZUogXed",
  "key19": "R7znPTye3XkxGnzCHavMBfpcnR3pGK5joXsfpW31pSbgvTAGBnF2Yao24iWvdaKkrBenviyxvKgHHQ8Ensny65X",
  "key20": "49vF8v9bhGv9whrm89jJss3HVMVRs23X4LYVC3M8Ef68EnH9eTHTCasVNHcVKEexvySQKVyMDqr6tqTcV2Ds1As9",
  "key21": "5VGK7Pf3ZsVcerwKcPqEeWhGTSdu4PhjdqJxir1XVqsDxngUHUMSzYLUR1D4eXmZNrsRaoCfPXdRMeSqQsHNyUfG",
  "key22": "NPCdjA4fsKsoL7Ya9qp7JMPPnUyJXLPyPtDeQMSHTMRDMUmY62hf6V5SQizdxvRzfFypinzCw3K79j2tMdgCZHE",
  "key23": "52KD5huXzHBtFkQZiugz3ijTNw831ZvabH2QoypUq19w3ScWJJk8maxGEtREZjRyaL8htVK2YiPKEtvNGRDUh89o",
  "key24": "4pN2Rf1cm96YdkDAu4ZJ42FkCfdNtdSPnWjYmMG55tzoUQhEQoNxx2ZLUZcjmQvtMb5pDB5DydjZKuHL2KQvf9W",
  "key25": "3fx7UqkyESC2GU2eLnp54HBCWFVrsMs2brsAMZfYLPreGFw9AHWUMqqy14UtTwx4JaKvcrVMEejQ17aS9pcrGtUq",
  "key26": "4XhP4EHfbTs6S9WnMwpisMiLyAWddg6Xf4pRgtm5NdY1f2psDDhJzX6SwuLHp4P4ovVbauSDKLM2bB3C27KCb7k9",
  "key27": "ReveAjzSqfoHSMFUWg66CpvBB3oRnS4TZhYVC7mWvgRueupApx2FsCb7SMoMSoKqymSfypSuSRXbzJJMFTJfXR2",
  "key28": "XGWZx7QjTjJLxtyjmF1N65ahABSdyko5t6TXR2X8MF6wYodL7fPrb8xAaThFza62JULGCgXJtG96xQLCnF49uSe",
  "key29": "2yyKqRyHgFBPC2Yxrybpua562wkwNCMFgdjP8c4LeT9KVASG41RDbiesxnkTFgMn4dvqgRqK7mxLS5r51sPEoCP4",
  "key30": "5Ku9cMdcCmh2nBz4ZGLvFtLWPty21UhXhvGTkeHdUsS4JsrDrp3xeKPHh4zuuTgXFxpZu5eHxcdeVgno9unTdqGA",
  "key31": "57XxqRN8zZKUoL9af2gHXeoAYREUgibTBsj1BXxdFKWdU34gQNFjjPXX3rWFfJqJomxry9qcoLVzryraUo9RiHYr"
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
