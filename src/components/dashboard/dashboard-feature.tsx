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
    "J68gt7aHs1udECVWpkyDr6wnYrNrkTbmNDPa71mtE34vEUp9QumjQSCzfzNpsE3zpatFtemocE6h3xvKX4Wa6dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EXpLfyzcvWCLHmomMcm7Goyw2kHn9Whf7wyVy9hYXJbLwDTzfUPYUHQEVVJTi5DHSP1mRD2ETvwG7wsyK3oQZUT",
  "key1": "5eT11mWTuFamNeuedAGEP472HQYzs5MCwLQTUCzUurCv3bdswZtn6iZJy7x3Y9kNafvsBQaV3ZqwFSVzQNVVvUwk",
  "key2": "3hyTSQsNU6UCwYgWgM8zF5we8tbKEfGEf11G2yk21qzhzw7d5mdcERb6b7H16jkzHfoV256YXHMXRzFDRjg37Vj8",
  "key3": "5AoCYS2o7Poxwk65jiEcNy4eEEeFZdUpqoNj2r9mMwQi1gstTvq4hMu7dKEMEvkwRqjJHxKyMrSswJsq9or9bQ1B",
  "key4": "3AkFyRqQ52zqqUGj1gEpLMWiNf8sS9E2N8GBpnxDGmh1YSGiELhgGd9NBVph4MBnZENi7GtDMVw2B3RzDfof1QH4",
  "key5": "3MVCCxS1JRgMgNWUs2ovgjku7giZ6o4to5hR7QzDDdgFTs4hRWnQsSrkf7LfxWhd2QxMMJFmF2gWA5w4yUhHt1cB",
  "key6": "WSrx3NVhx7jjSW8MqvTrNAWJ88HcSUNNvNhguBZsVCuFXdfXbp7ZqUMoxgqGZhK6gviMJFFMHbU1i1UH15N14Wo",
  "key7": "1XRr3uYxqKPjpBp6FrkovhSpZuoz2QTEfES7k16fjn5FFsRG597nzKd6K1zrfkt2mFcL1TsXXxzAYnodtaVrwCE",
  "key8": "5j3Uy8QBbDWSpWtbE2dkLxWwzojuRYDthPgxQbL2gDdSvwfrFXGxAExgNpXVZi1s2Vygd8ZGoKG26dhd8n7DMquC",
  "key9": "26u5HKRLP2Qo3VMSsbsenLJ1UuTpVU32XQ2wwYiPq8x8FGkMJKnW1ujUoNH3WP22Pk6TBNNHCdLXBvscDEM1NcYE",
  "key10": "5jZECZopvTtqXAZ5QPUNXdmWgCZnuu4dCgaSN6gNJkRyh3opYMuoGf7LhiJTWHs2MrUUtxuumqEBA2xcuqWzLuFB",
  "key11": "CGnwxVFvRnbQxggUJkReeEEsjXaDVwaiwDa786UuwE7T3DVHaj7EP1dGm9HJEaXCowvLc9mPxbareh6hv9bH3wa",
  "key12": "48yn6gdyEVGC9PDtMZV2tbVVgYfcM1ECut7PYZaGGAvo4KB74GQCZwhCbWgEBeWtCcWQfEDnivxVi7uzmyjy4MJe",
  "key13": "5ZDTPfiNZn7hr197hvAKLthcpVFsLkHv7cAR1URSkv9g2c6cx8Q6QmtcpniPBWDzF9jjJpRE3Gn4QyjJRs48XqgW",
  "key14": "49py2JEVbton2PPQkJq92MRw46xmsmp2u5Y63EU87MB38qN9HHtXgapqnkatXqApGTiUBVrPsQDsbGDaU2Rykqj6",
  "key15": "41jp6grQMLZbDNqxvJ7vc7agt7tbvWmNFyBMdwrp8n9NK4YomfwavQrbg1MZE1SxMnMvhHRrTATEHtUvRB14QJ5G",
  "key16": "3eyp9kgyhYgQvDk5KEmcg1ShMuqzu5U7Tnv1ESbto5bdDM47X5ZwwMGt3fPvH7iuNW99LLqPUUdU51Zaxe2n7iZD",
  "key17": "SpZC7w7eUES9g31mcZ1UhtPXchefFKidSpfY4xioxVedxNy3zuSefHcRKPrLKSRsLczaELBfVmKdKEYbifYB2Mp",
  "key18": "2SWuxPJsNe2NDjM2VPkLeArSgLVTvmRLw1bumTidd5FUFkmYgSKHG68dMHt6UCc9oqv9H9z7gHzKC3fnX2K4H9hx",
  "key19": "rkY75dcdV4bFB7TEPz9XudVxYgu9yziZtWavtT68gypW618ea3XmhGF29qLoZkSbY7WdJRNUXCYqBN9FF2BzvM2",
  "key20": "idjt43ZsSTDdi6rRE92dSbnypmg9Wqa2z2oimW2e1Pq1W7LHQtK5na76rQ5ZQs8RRPM4bpPEETYouuKTXBVvUT5",
  "key21": "4HkBGfr12PWFpvNKpZVWLHxz2FiZfNE99rAxBvDEa6gBx1fZZBLsRgn5Gy5njhzAp6NBBkPVFcKnexfJ7KV3dbuC",
  "key22": "5v4L6DEVT1zSnnb7V9kmSMFLUwX4TRCpAR6H4PMqLahfevKQNXyd6akZ8X5hqHW5d97PPwLvDuuFPtBbJMxjDH2G",
  "key23": "5FRxLze9BWpURsSsaW2TgXNUcomfg9pBDKz9RwFGgVjRpfcsgtDcG6udJB98bPajguCpXBcJdZJ8AjrZ9PUo341h",
  "key24": "o2LjjJBbNw1YcBdTc4DxW5YgDRamhPywxuuLaDVb31WGEm4TqiJ7sUHyWX4CyVq8fjju7MGP3T9z3bvqdJvmH6J"
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
