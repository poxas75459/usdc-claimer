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
    "tsEtgrJiH3atirPgG9FK6hcHnm2zD6miv8FRUbsfCrtUBtGxk9TpvCuxCZqz4W5WpR8c3aaeCkt4PsuhGMV2fh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZ9jTDyHSrsbR1Dj5FAuz4AfYwHa7AZccTTypeXPEyyzp23JRc5PU3aKEVRQHjT1BbW1uWgqCWhNm8tHRfZuf3H",
  "key1": "ikBQJDMpk8jTpbWiHwQK6YwLhGfFZywHXLUZ8Gr2i5iQmrpJmRjd4eT9GDE3PA52nJLGdNKTs3Kr9QccVf17zPc",
  "key2": "4kMDhKzbHca4MfYDqCX2uNthgGeE36kd1kcrVX9WcDCNVTpRm8PFER2i8UyQSRAVRb5Dm9goR4GY98hkH7iGf29",
  "key3": "2Gz97bnkrJgW9iGpVHLsUnFMu5ywrfg5DCSNrccgWLHhssKUjPQk3Vueo6c8VQFa1KC9hZXAwSwnPMhUGatdDLkp",
  "key4": "2Rt2Bha8DcrNWaZRFg5vBx6vXjv2Sevw3DCTLbM4WAD1QVLEjVYT6uHtjt5gbh8WUDTVLCoyCaokfNS36JAi1pPt",
  "key5": "2V6LhGhJFEWj9XTX6MRixDSCPzagYw8WAmfDZks1ZVoraKeQR9YpS7ug2Yg8MtCkes34KCFSAUL1GDSeVzvQxbhh",
  "key6": "NaGWLfqXx17zhEBMp7reuZAtVVcvmS6VHgYYs7isG5rvKLrYLCMYvGywN5cDor912mkGoFEwMGcfidiAqJ7rGmE",
  "key7": "2H8iNnJTx4qQ7ombcvbVDgPKm9L5noKM6HcEe2Aq8CVdjrJcHLHps4SDTYHT6m4GgSxz5Ebi9CFhiHofnAdRPLyu",
  "key8": "2oaBuHmXWcNz3ATSpNCaqwe97FpXe6sedfVw24FbGkpSBU9sWyxmvdSWw86b8cVKBYYSgoryxo24GHyU6cv84LyJ",
  "key9": "SJne71B6rayfQ3xyEqojv8y3om1TE4ScYH12ewe1eVbxrsZxW6Hi4LJsbnnnD3N8ayq6C7xQSsBoKsngyGtybXT",
  "key10": "3LWS8J8bmDqHCxyPNgrZWoe6qByfYdS6QHnPSdmJYKu9zyJ5eo8x8tGCA5CMkgMsVdffTh4cBvuQbkMyRooD3sA5",
  "key11": "3CNB7XfTacjVn3nVi2tNtmpAGvRjiA8NHaDrb5FbzeAw1kZjSz7gawmohqoarsYRULrmA31U3BvBuCAj38jAsUHX",
  "key12": "5aAghcfrxj9SoosRC3mXeHYgZNx63g6awLYTWSQHPZREWNydidbrSmnJczWUuWwHFaeXzH781tFWWWPTCNSpNjEZ",
  "key13": "55gMtiL5Ms2oLoXhDqqx1JQbPVutHk35vZKRWnHZKiCfWjzrxe29Lfx1z4AXMAVgVnCo3HP8S7vaioKG4joCoVRB",
  "key14": "4pGLovQDaHMEAWFtVceyQAR141oAwbKzYQ4g52AhMd8pqqCagcuYhQzhNkBQSgVGPmESpT46rMRm7CsFLGjz3kmt",
  "key15": "2ApfzYq2zDUxfamLRpiSDDH4jVtgW6vn2bF8ubWf9QN6gjJ9uGhE9qjr6tcqe9PwTS8UBJZcGFpVMn7f2SccphES",
  "key16": "QndRzgEQKKphZNfineTkq8BHxdCByhnydhY7bvFdKAEA2Vb6iTA86pWjc2UFddMtaRY1GfXgrWq2X9njriBohhX",
  "key17": "5B8nPFG4ZLduJPrrcbCorVcymL4gY5ELAhtsUjhZof6hyf2zThGoSRh8gcC9kQbikJqPi6WdVihY7nENZaimPxay",
  "key18": "41E4b2ZchT2ZMv7nfPR9uWwqdjApAc9Bk3UbMDsDbfLRzmYWZKpPYJJiikGmwY6TACWYAwJzBni8cxCEoQ8DMydS",
  "key19": "5eyNC4ppGusNaBFY1bTF3o8yZ9LftRELRxYB3nsiMBHdPZ1ZHbjZceDTNRXtpP5F8gJvYU35tcpGEhfRUcw8bbmn",
  "key20": "65BFYtFPzHNjNXeBZoViqTVCCzeysWtuBvq9paP9FqHf2YPkJ8ercHEiMdp6XVpVCgoW4i34ant4pPSXkj1R7ZPA",
  "key21": "2rRRnkFtXvurpq12TdcRzKDcC3jtTQ9oyAHM9CwoJVLHhTHxD7KtSp3R1q5Az7A5AnvZNJeJcLPYbVrFU1W3CV8G",
  "key22": "zbc2JEbWvcbuKZKaDxXjTM9Gd2waqW6AKFYPixoPcBWPxDUHzwKxrHPPLd3tbJGXrB4t8WtE7iAchJ1pPW73qtf",
  "key23": "2BypHCCe7WpK6n49k7EB944y4NsYBknwoTVRHe2XWeEpRG1gmU1v4212ASqGt4PsK4tkqBnRtFSTHVkTQ31AQhpG",
  "key24": "4nxxFCtVHNEjKvSjCF8Q8RRc1ofQWdnXfA5XfiEKuJqkBPi4xTc6jST5FnbAW3xRxL1tM97m15afZaBzn5bHpXQW",
  "key25": "uKZyB22mz2D6Hxzu7ibb6GYtsgSQVoqCtCVd5vPEQLJm8ss9bUgjtQXx4MnHiFRL5urnD9qGLa6BH22Avm4yJK5",
  "key26": "5Ty1JTAEDJ1iVWCPtJvXPR46vkqH8hiwNbZkaD6USinjfTJNHs6XNMnbkGaqLTDVxFxD5ADvuRL5x88frVcjRmuz",
  "key27": "3zsKxmc2KK9i6RqjJUZ5tF6EsYkcAw1WeQA31Ea75bHfx7WXuWi68urMdvxobkCxQf3mpJ5BZQwQ7chxRtSnJ5AW"
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
