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
    "2UmSbKvCZzeACbgt6gQFpLFBGYpR19vqQAkgVLqQxdifRkMGT4twdkPCkqzT1VrrQH3n71vxztgUcpLiAdLoPAL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57u2vhKZZRp7tJydX3HgzEXquA3zJAn2nPHhMttGThMXmmBmNGcoDKYHBsGgHaCtnD9h5DN5oNQU14u7zTbFyjAb",
  "key1": "Kj8KJ8gkcjYh7JfvRM2Mqmiemhbieka9a7SBcDa2k4EuchqCNBGnJeU6o8z86cEYXQyFWLdwbmb4kDTE1LduM1W",
  "key2": "deHPoY5L8BNZNX8fnRY4iJ33wraZqvSPp9NpHXhb7WunAUJo2Y4g4dYKZFWUUGyDdEXGrbHueprYGoLVagKcJuo",
  "key3": "uRUEkP3Me2mvd8zqBMM7jQQE6GNzKEcHogfWM7HKACP1zsuWxQA7g7uCryvx8Dck8NyjXPGAkAhrVFqWzKe83SE",
  "key4": "3QQpNzpLqNHhr5LrTaudcar5vgGxLWpSLMt8n4grd7Hm9y6FzqZJNs4H9LXTZ8W63wedDfZdGmC58cjP3ZeWoeh3",
  "key5": "4hUyykGMzJG7K4T1SFsmFR3qvqxvQDJ44CgUksyYex2jZeV4fymcUm97TP7qbGMmVizXtK1gE8qdnq72N12myCXR",
  "key6": "35SbYTBUXL7uNEBK9fUkWf43Cc1TDMJUdMBk8WGMy5NLC2yhfkc7gb7Y7q3c9rB91xtgyBS3CKkSsxVBSvuL4wUP",
  "key7": "2P2obdG3tA957MYn4Eh8JSfeMv8mi2YUEXrD5uE37beSk8KhRhjAmKgwHmkkFBJ4nJcqQdWYmNztYBBGYMxFZtZD",
  "key8": "Mi9PmfiLcQTzchdU5pLZjMAGrSqkePk7Xp1mnp7zaEShMJWjkTiUFVcnN3wLS9E63WtzEhfVE1EifioyxvWL5dn",
  "key9": "4tdqtnDFGhrSShfhGL1FtiLZYz8b8YXXWM7HV8WxwSWXMzDdbktG3FfTHNfS49v4gYkPsixV7E9DEAWuy4P9fYrd",
  "key10": "4thQj6qGQGZHQdAb1tBTQb83qWzTAxpcfcEud2Xm3n6BiftbxS4pAikF8YtY4ckgMgxjuBdGY5w7RdrtpSM6v5Pg",
  "key11": "5DXNNnpb1hMmfCyFsoy2pTg9539H893YBfLcMrgW1SPpYW6QAFUPSkKg7TDzdDG3HGQZkxcZaPiSXjhiHwhxiGhZ",
  "key12": "3ELdnHnJQy2BtX4t71ZRuekpv4RDk1FZA7HRqUmn79w743MbDatp9cPz5B3xFAKLDnoBcAUFh7MWGTVxVZx9Jq2i",
  "key13": "5AcUTN7dKUPvdxWbCwgrH5G5qNnh23DqqK8Ec2TD9uy5iUtSJ58qbydzAQzX5Goqsawur8GKrJZXki5EzKD6RmJn",
  "key14": "43tawuPQbf7ByvH42jTWzCdcG8tFP3Uu8MUWSjJx9CMv9j74YzbvCPtdGZgmZ1fmsfTbk7pRsS3Ly93pY42RrW8o",
  "key15": "taGWnmrhRAdLjFVrjxq8C5VhyCh98UEYnCVqqWaiCvjoJ22n45RWLLzSXa3cFqzSmaUmeQLXJJ1ctdYfBx31y1Y",
  "key16": "4ZFYyR3cyAEVkkheHMfV2WSF8pahmrW4GpVDDTXRcCGL79hkmBqTbDTmmasmE7tSygu7MFZvL8o6kLUvjmZEPD3K",
  "key17": "4TkgBrNTiuf79snZvCMukNvTvkgooepXwW9jY9C7JC5Vau9Gw8hKfa5fj9pQ6sYoDxZsH4KEp3LTpPbAkWnokA5K",
  "key18": "2RojBBUXR8tTuZihBMiCQE4L99Fhe6Za3rJg6KoqNAf4fsMmBW2Z8k3ARjtEHcU6XycaPCQPMSmfb2XrSDhtb78F",
  "key19": "3mui1X1WwFMh8DXn5Cti7k3Zb1ZFYvVYiFX7wchJMfWsHSU2fdmQihWpU9DG82HbeZvQnqa5vURuGWobtTr6mwXm",
  "key20": "NBZQ6H85Sbp5HqUKWsHtf82rWTzAT9vYc9ckEqwS51FQUdXioB9qRWnSry4v3Ryh3hyTwqUPYobC8LPRkrkwhDX",
  "key21": "4BHo6S4bMTdXjFrUUwwpHo2pmdn2Ch2AHHDs148CqYjbgL3HmxFbp3vvyhTh8aAubgEiXwAjjnU9ZMYcMzaf3SXA",
  "key22": "4QQdDvf5DV8U6SdYXVTPmi5VjoTCkAx4hik9eRgenQCFpzMekyXby5ikwek5JksrrNfLoXJ4Kwrj5P9s5tC7uqfm",
  "key23": "2FioqyWaa4qUiJ1KBL4F7wbd75Pxvwy7ei4XKwieJYTEcJp6VjkJaSAM1kGBVXp2JHMxofNWHYN2GFXVWJu6WkJd",
  "key24": "7P7SFmDEqd76SgEF5Ddew6ftixUKnoJzP7B1xJBrRcRKPqPJ89DVXQnsvM2ufvFJmiMV3dM7SE9CqMsRQtU9b66"
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
