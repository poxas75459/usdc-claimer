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
    "4S4ZeD8zh44NHrNERuafKoDnaiorJRxsLfCfqx7PKYtb8a26CN7VSM4REMPMdX5GVsmLziZqNaAJzJzABKj1sUrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FQpo5TSTUWKjZeP6RnTnKvcEQhe8bu2fS2uuuqC26tMz6vBxmkiVUVd1V3YNKdEpNwDFERazW6HrPrk6NCj32Yw",
  "key1": "4314bCV7RLv3hDsB7kpMwS325MQL3BUZTPyPus3R69WBEcqTauqhYEWEq7vhS26QYqWfAB7p8fQXRPGJCRHgrpd9",
  "key2": "2rjWqmsMb6uCaeSHu115c7VtmGKRMGFt6eQDAbYureA9RGeJMBnbJPHPoSpojF1cCZxhUBAsWuF59AkdprbHqCqk",
  "key3": "5nG9CJDUXsRuDK7xRN8RE9gy5drhACn7VcEMaJX5hSHm93evECRCkNF58bvvbJ4s4pt5SPkpHujfCkbRJUSFVcAU",
  "key4": "33atHKkfv7PrJXK3ZHsRjLhmqU4wbLvnYSmv5gZgaGGS3KJaSRPqmy91qS4BsEHjph79KE7a61i4EiPLjAzVPoWr",
  "key5": "58oiJhCyMyoqR8uD84HANcGYXNuGuLDpUzS7frPb91WCRmKqy9vo6CsHRDGNcZXNkackNftjDKWWHq7HBf46qQPd",
  "key6": "4ZHgai5nSvWW6FXi8KEp2KwMYEVCkd2NxbMtQuwvVaaSc9xWG8URM7AmaRNNie16VNaHBHW2GaZQyYicVqJzt6zQ",
  "key7": "3DnQmj3U6pvD661FzFQnKegxN3u6B2FRhiwa2CRPfrG5WCPM49ABtYj9ocSPtAMKA6RT6NJoFKvphdj45vKbXXiZ",
  "key8": "4nTUeRNUwbWV5CaDEoxaRWAUyfM1LPWirPqPepJRzQHf3GKNSEDsjhegsuuTYjub6psazjMSWqtnqoFeE247LZLs",
  "key9": "44G7KnthbSbiE2QRf3zg8M2maLAYo54Cr6WtjZAqMEE8mFw9NwqHBirgknM9Z599v4s2ecRphcsgYmnz4D3oMZ3N",
  "key10": "5MPnYGSgwNPv2nBphCmFjJQFZmZJUJbdawFAP9rtASJUZJ5nNFMHxDynWkLfv7SXRK26n2bdstPVFDyAVN7HrAhk",
  "key11": "5CB94aVFMueLnzAGYnvmYce3J7RAMMFoY175YxY16yNSca5RrYjFM3YRNZQLsrYHQ3eCFKPJEj1kU3PQPoTPCERr",
  "key12": "uUs7cCMaqmsH87xNAkbZhaSCnfzYwTQqkma6CwmT6m3fbRgcEc2wxe6Ku2xhKL15LP8KnTWzBFraMPg37mXzw7P",
  "key13": "2sxr8ZD51hTd2QHCDaVrZFSm6tSUkBL8EXDoV693JAu73eyNbVh3co42J6duPZxkmLNgJVueS89fkSxVC5pAx8GR",
  "key14": "2t81PtFL7QMuqNzbN3dwffJjWA4hWvgRhzHPmg5UnCoYH5DHVVP9RvCZp3WoNRUgVkKM96mMnid4iWAouBuycU6k",
  "key15": "64Dsd9dacDRKbRnG1RtY8fATPxtVdxkaFX7JaWFb1YmSCWponc4AbyLY1yib1Xqf1agpYnk1cQzeUkVyE3dM4uSD",
  "key16": "3V5hx2hPmc6e5XV4XgR9KFk3aLheQ1HLyTAWN2gXRp6f7LScHxLh9S11t8aW8Ar11vjtjPThZwUpC9JtVxR9hFzw",
  "key17": "5foSty57aP4k7Ct5YmXKCFarifVDtvkq8mxEhTt7ivDMCmGxzDnKPVMxbZtarp1QSecv9eS59dXJC87buuEy7ncF",
  "key18": "4BFypLzuMsz5fZKvaVMzibK8CJ2evAxrLv4e15QmkDDmzzcYyCp6ZQMkzYs9FCFciJQ79rQw66pn9f1ZL9GgHxjk",
  "key19": "2fo9Sunmay97XV5C2x18aw6aJKTkjCjHnrssSWf56Ct7SZ6WjwJy87v4gtSd5U3YnxVDSi1EtiKmeJ9UsTbdnn4B",
  "key20": "3BQ9CJhWiYRUGtnBrdtkmHS1nPRCTdKYgwDyRSRSwhUsVZ7jvAsovH3PLk82RNr7HMKhhrkpHLwjbSjf2C9WNXit",
  "key21": "Jwwn8Lc5tuuUkGoVLSFPmkHzGLQcviWvj2hbuNw2cLmYLxykC2pyETGHoDXkBtbY7qR8TXrYJvewjep1Tn2ZcKc",
  "key22": "22p4qSVKv2hpY5shUpD2gKQuo14cZycn3DiPbUGSGiwqwymgTQi7a2WVyA7cext22hxiywG6uGdGUhtQ6zoRGdAZ",
  "key23": "3qE5pUNdxYzuwAxoKQn66Xf7obUvFaW6zTwk3RUK4BF7uuJsbbz53AfDRT9FEgX4kSezxLG1J7sJ8HpaL1XNhfb3",
  "key24": "5zcwX2z6tYvXjg7xZEBH3bAN2EEGEkAcWu4Qjhz5r5gV6CgzWBUzjrx3QYKxYC2xf3noXDDFnscxc2jiwNVDSGXJ",
  "key25": "5obzAURvNNEUWmHS2XzeVL5SX4yyAp4fEauVeMi29JxF573i5jsv8Fv5zFhKqYjAg9C8Z2R6Ath73fghPQat7rAi",
  "key26": "4B3UpZsBMMSxEXcqUtAA1VMGZjq1or3NDDjD7jZ4iSbrBC6dz8GfRom15zwr6R5BXt9Ty7A4nvxJLXwXHMgXEu5x",
  "key27": "2Jc7jBcxm6U738HZH5pLZVnePGr8g6LVFeB8pE6CkvCspLbvSgip3bpQghNTgiWLDPJQJCBa6nYwrA2kjxqQJBiN"
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
