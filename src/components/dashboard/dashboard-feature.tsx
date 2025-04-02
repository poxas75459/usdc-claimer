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
    "2GJb9h1dUHgTuYo516XSKt4Mj4WkbrvT9CVkNYd4ybFcrD8eJARj9u3Qe5gDy1FM4pQDMjouGp5h4StxhjtKKAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJ6FvjDMWPbx9H59DiwjS6WXyJ4ktF8kuCS7hrpmEyc5xQaqkrdeqp2FsEBa6jGeoEAeXhfrQ5WPfGfrcRCCEfk",
  "key1": "2TVxbtPsJRg7RkgH3oqCqUubpaRPAgixSXZo33xjFqqDccdSSTYUmbZV6tWCw1jLASC4VgNCbvXxFpzgwuGJBS1S",
  "key2": "5j7ZHjHhhWHzf5BL1wUXR6XH92hp8iXr1onoyx51mZxyNvqyxZCZrUtVwfAC5nP58HgADcpSEmJodWtE31R7gBRT",
  "key3": "4uyGuSBbKPFwfxiHSnrRTcrY3Z61WKG7Zb9hTgtvWPdRJDuMi37xG9t9ArDP2xB68Cbr9JjGBkW7HWN7cRL1Zq7g",
  "key4": "344EXJ1ygWRT35UjZvdubEW3zZCGdyFvgPHRJmopKJEha3Khsy5V2pMX7btFLVv8eM212KviCR57CqZpukxjdtAa",
  "key5": "3vMgKEVr2kWqKdV3SwCeLw1up6JAtgjSo7ksbyQYpnnpzvHBXC7RYwCBEuGhs4VuPqHq9NahjsJ8JT8AQ3BeiaUe",
  "key6": "124vUNxUSixVa1EkBwMcNt7MxHsFbR13mFhpJ1zueWtynJBN3a3D28wnnjkbSBgsybA35dui3jHGish7zc5hQcDB",
  "key7": "4HQrsmZDPf2ci6Xguq3m4MYfrPAYEkfqhbzWq5hK8WQunUJei21BqtyrVfKZuY9NqN4UXGGtEue5uAkKwn3WFRXb",
  "key8": "4Njd1qaYQm6cUy5p7L2YYNk5YuqwTb8yoHbGFeXjEF4uiWjLDMDZMww4CTHU9ShSVpinbi826vpxTf5sYJxw14fX",
  "key9": "5YcWinN64GjPiHpsivZn3rbqjNiYmiPVWXE9JxZDn1wGsXDRvna2WmG2uqBtWwZ1EEGZKxmGd4Dte7YHXP2pCXMs",
  "key10": "5fUh58121M5U4GCfJoK1FAW3opuVdWpKLAuFHD2EqGH23KED72Xy3h28xGig1QdLPNtuAdCNC7FjGFnGh8BJaiY1",
  "key11": "4pYFpcCQShsnrA2tfgbNDaJdTdxKymmdksus2aCvrrHHErUgYWKwHfLe2VByBRTbBVaVcCF2kZfLcZAvELpAWivi",
  "key12": "625A8CCey2HkTV1HAPWm3UJeLJAhXumhpYsqMcHWiBQArZLQ1RPwBUAVHRtdjy7hrFRCd948ppfQegVUPfpSvrnm",
  "key13": "4BjagdFWHMh1GMGuXJB55h6kMpfF7VpTMGHJmwZzBfmVmBiGGFhHWY2ZmJqMNbVo65vqVzMnP6RFGz66fomcSAZf",
  "key14": "3prH73ooZkgcwTe7XxTCqr5kavWVvVWYzZsHUKMcbmyLfceW11eGFv9v5WuQ31mYb6SMGs3uagNpWwbf67tRkryq",
  "key15": "42p77JKDwjiwAKQCNyfSLGoLsCqbqzG7bMsGNVjQyLNydMCtKdgcHvnojL5BsL2K1QGnTGTxDWhr485nVAtPX2EV",
  "key16": "2ArKeYNP7DoK5CVSy37aJaqkpgbcGDhGheVBffkWvHcSqzMEKJUeK2fLBvf23UjS9pmpd9Pj2UHq54dhbTLybybM",
  "key17": "5Zgr5JxRaoEFm4vMLoj2ugFyrkQM3RTBW4wDUgpsyfKy3RvH2ffmz7VMuhAbRt4yiPkinqJMyw7zGbwLzV5KW89d",
  "key18": "21MQBndQVVH6qAhtgTiER2EHMdHXFEXzwoVPgP9du3HBcm7KWzRLqErPs6nvWwvYGPhaRgE4TUwcuiWz8cjYxEaP",
  "key19": "2z57nUr7UWZs2d38iYvoWdsWGdwsy6fqyHTndtCkkDRNafD6NLSByoCYcfb9mJmMWqN9RXRFKwRMLyXh4ms8pWM1",
  "key20": "8weAiE2mgubw2KLmmTPSCrC7kctnSbDkFxc6WY5KJzZAX3sGxVu5dHV6rP4ExZudcVbzRDb8w6B3uS3CVdWbCFv",
  "key21": "2dZpGENvsvuA7uziXYoJCFu6A45t4UFXDoiiF1J5LDriAqaLjQ2CqXraApAyTSHkeiiTkpTrom2HPzka8KEBbNYv",
  "key22": "2Rikrxe327Aes7DrjitXCDzjxJQSkV2dRjNnWc3uhsSvAbBnikMB8GQmpmmbZH252tUS2qpyjWSWqSURG451Gj3H",
  "key23": "3VdETHHh8cNXCxshTqsTVNimxZ1c44LRjvnTXpBFLzMV8cPxPhCNVSLCF8bwQHSBGA5k7SnpnQnfvBAsTU8GV8ZC",
  "key24": "66wPhGKaFZJYqVm9gb66njxRFQs5ARYKMDGV68J8BccvdDYydkPQpjxTg445xG5QBuYcDgURZL5KjLL9bZ2U3k7W",
  "key25": "5kGU7QqdSJ1ZMadDFGstv6nvYn2bxXgdeCHgfzxQr9xzyF4xJs6xPUDriL1KiQUVQeiKReq4W7iJG2aMQQh6Zt11",
  "key26": "5Yyz1DzX4rsk6peqEZ4saSNCssib3m3EbWWZPcuT9GLEK4tc1yFTgP6uv4x7XbxyHU6zyDKg8oCDNDpTYRqnUtiH",
  "key27": "3fETjW1Zg8egStAmzFetd4ieRpAQWjJJtvqTADm1u2xu7r3fJvXh8f5WvX81FcUubHc59RLtLjHQwgaVQbCgpQXf",
  "key28": "1mCUVyF6uMUXHW3QHFus3JcgQS4cFGgVjXY9K76UG7U2KeXxz65MFoRKPTuj1mVNVktc6ebjJb8jsT5bzkySm5p",
  "key29": "5DddGzrk8RdqrAa5b3w6wBQ2665cRkXvZpGyKcHJDvcPv9TVPzCYiRXwkwWvGMjLXgJVo3LufpsUt5GUzmbySjKe",
  "key30": "5HzqmWDtyD6YuWPWEHWmDuYMLSzeFRH1ShQket3EmuG9j7LitEKrgNP42ogGznTJx8rZPYCMMVHL5E3RKpjkkVtc"
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
