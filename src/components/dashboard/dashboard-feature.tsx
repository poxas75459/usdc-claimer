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
    "65u6RbHhvvNJURGsVjbSECfeFR4s6d398kkGXBuSgVxRZAuxqncA1DtxQpGVGXBGhDb6fLXH8gtgA2YhYwyBxQ4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2okLQ12rbTkH3FFrpyPcYU97eyVQd5BguThU8MzhaWy9TMYKetrETyNHmRrJUG2mhKJ9Gz8EGM1SpMH7acpjQims",
  "key1": "5bYZ6rVHzpVwTuHt4qna8JV24hpiqEbrhNpUzUtA5pEeBo1aEGpJXLhX3CMN3QbjssCP8kuj6ekmRfmCsH8GYjtr",
  "key2": "HyXApKND7ByXdmbQNo8Yn3yCVJRR2k84SKXPURgnTqNbonVoWoiLxNSEsPMYJCADVefEM3JNWbjMWF8zhyHwmat",
  "key3": "2cRhqMfGR5GqysaDv4rxqRc1rwWnaBmVAyirmVVwt2Kb1LXEj2EWQ3FXvoNpGsXLN2JPFSUxWEz61hmKs4GAyAAL",
  "key4": "3PR37jRmNm8HF7zsJn52RaUHu5HqBKADhqdNS9ir1MfNSWnjv1JchMFKPy7rzbAKmPPsgwxzEkBNSZxqhzzqhDDc",
  "key5": "2gURLv8mSnGyG6s8QhMD73QSJdtdwjS6tDjen2oNUmTq8EXhsUakmFE8WgLp1mZxwrLto9oKunvpqi1sPFF3w8kB",
  "key6": "bAG9f4ENg2B2BvKFEKzxL8XCzXd7fVDVfwVMUrEocAdrkM8dESGKb25nF8JSi4fJmg34aqDxtUQQViTo5jWGPU6",
  "key7": "3PQDFF3AjofTAKEP4s6kJRM3Qx62zy35ZxWQHhk2zBpK2et3MEwUp7SWsqVZ3ntnBVgja5nZGE1xVAq5NNCXCAun",
  "key8": "315xFpk7gFiJkn94hTyyxjx452th8Yz9AhC4EwC7sTCDdf7Uik24sLJ9eJVpN6D5mnuswDS44taYFGLpztiaGnFS",
  "key9": "yNZ3U6iDRefmEaygY52Tdpywb3vaFhWzoHE75RWiA7RMiH5YtG6oVGB6LGFFJd23bM4AtN3FkwufCwtnWPBTUcA",
  "key10": "3our8PqLrowQkcJxGHfkmc1TNEZzZ6xHNCsBsVQ5XiEkXuSAdhzX1Jbf3gBGpAGukNGJSSZ2VcJu25eXCNJ8TYei",
  "key11": "5so8qXMQL3UZDr7vTs2n44u9A1hpJqL6PKBMhSsT3AyBQ9JufWhCy53bFcdBXc9ABN59CBX34C5o8EZTDvePV1SW",
  "key12": "2ZC4jAke9wxw3uJK6vN6uEHBF4KThCRun51WCDAEDBzXbPNLrpFT8fdVAffEyNYMsyPw1UGcHKaBg4rYARzNFWPU",
  "key13": "3X17862KLKxqSeiuB4BXAbKCRhwMspGgD7LQATofYN7aomcNawNoEfosLGRAj5vdqMk47SA3RbtEnRnMAkLLXQA4",
  "key14": "2A4YhwXBLYLbQPNi4DK77fa6pMNA9ACbhRH21kUmeBzVcVev3gGpqiiYDEsBbAMwU8QtCq8QUGR2WzS87YrGgxhs",
  "key15": "3DxppmF5XokruV7sRgu8X2SG7CFf4JjDq9fmcaJDWAcsQq3BFwFAGAuFPTbUMEiXqpVvNwuePdeaKBpG2gwFGErE",
  "key16": "pG3SaNMVPVAJhfor6JjGcxLwWCArJ3XNMrQjEXYuKpC8jv6f3be7uGYvyyy4G7MNHbyNVe6KgxnMLbEAhJWNByg",
  "key17": "4pWDTyfXSTGVeAAugDrC7AM12d7XdJFd6ScBKGjJMYrcoxrH41A59eazFQmzVdugJzUzbDnBUmw6WKVAz2PBcHSs",
  "key18": "29pLwHzUUXTHsnQJxkWvPLRkYiYXizpPwBmNrPJE6d1PBHhM9VHekZZiy6zcHt5GrHYSHcJeStjxziVsum1JUe1t",
  "key19": "TsPopAYzNpqg1ZwU4bywm9ni7ZxDneX14dLSGYGoar3mmSkn1gcvQPeSF49T98AJrpie8cbPi3dMZyCwu5EvNXc",
  "key20": "4CjNs4wTuTc9paejZTo1VGAeqaxnm4uQ7DdpmKhh2HYyCEr83rS8kWePfyZGeHqMGg17m7fozHxeGb29iBCU6XpZ",
  "key21": "FA8oT5iAkMFx4AYMsU981youhDcW5QcQTjKP7DJbaEEMmUCziDhcp33iXZfw9k8eKfq4SPSQytgQFMyuaucncF2",
  "key22": "adJq1q2dkJNFMXzULWydsBMhWBs9bPvCzRCGtqm3u4zXhy5JDY3ekh95k3ZX63Bky2tJAvSjPww3nYuVT4rjzeQ",
  "key23": "453wkajvwBZzwjGqZJrMswrScyDrrS8jiW6SMQRM7b6Fq34iarDE3kJmYjVNG72MCKGsz5oEu2UV7iM8xS36Lyg5",
  "key24": "52b2VgeZew7GUgyT5Pp9hvifbrKvJD4X316ZzYr5Ywpf2y8KJLV31M8ZmZ4EzAwKD7rmNgPZaWwM9AAVcANTarU3",
  "key25": "vWMiueB1kAMPQwV35o96JTJqzw9rTcFBTYRG1UqANJPcudwkTyBqcKJAJWzFiC4jv2T1eNbR6EJSHpzNLzHXYY2"
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
