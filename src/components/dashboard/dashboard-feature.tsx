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
    "48DXjvnoJ9nFQPydrVs9ptXCQovNsEwNeKeCcgB5fssgGkHB3e7VaL3kGRrhpcw9N5uhANVBWvnJeSJKgmrK8dnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m2D4FfxLBjq7QGkmaS9HgzEaH7iFUrZ2MvGX5uqpiHfcy481H2PzMNTwCkbqRGRjGwYHRLxV6Kwf9Sb4pkncECk",
  "key1": "4iww2Q7UhB3j7e2mU1VZ6FPwKChfVnzEgZn1KNRYcZAcS8y5xWZunLJYptmwzHDw3fLyvsVCM2URXcugW7iZLu8x",
  "key2": "3duuNm7dv21bKaWR4nSLAZtvGcd3zZJ1s2R9afAoxsguyogJrWaV2zdteHsrnnawH6Nbj9HE8yzjZ5QyqRFhk6Tn",
  "key3": "54SvkVmqnbgYRD9uueKXFVriXMia4eD9LtDGpx8gEytqnHXcEYoSuQGYijv7NZfE2roy8cH6TMzGVi7ECpoM1veu",
  "key4": "4ANYUTG7LDwU1oBrAjW6MwVh6NVTeWT8wPCCPvaZ3ABkQuFeMabjostY4gWHm4Dd3hFG6KBDWnbqN7tLAQnbYtLy",
  "key5": "4EcM6FfP8GmSZKtXA49L1XwSjANDqJbGyhaq9DpkohQ8uDbmBHEAiMWW2bjfsb5PgnWLsqBDmoc15muQhSvqiaBs",
  "key6": "4uPxKvTtLgUxL3e9FnkzujJzwgPZzkymSp4iunHUwmyWnXz1gTXamJsVVXhmrFvXi8eURUoJQEJVgt7uLJuGk99q",
  "key7": "2xPGq4SspCLpiHtopSPjmDjM5LNTPkvXPPGejpvxwD8WbF6UGiEsezZBmAhLyHeo79nCq44H8KbpK12UdkGPgG6V",
  "key8": "2xM6eXL8nAGNrX1G736BtVPLMnK1PGeVTRn2oynMu4XcqCdStQ624WjTkG7WNeDroAeCeYsVQyK2iLVhDVPmQL1e",
  "key9": "51K8tGjJCniHdzax9CvyYvTN2wMNXkDr5Jba2bsK4dhd8X9ZupjDrtpyuZ7pD5AUyD4gXmGmUYWqkidyMxBQQ49F",
  "key10": "4QGCwCW9Pc3TfrSSvMasnL8eeH7bZfp5rBRxH2DWKY5LNkQyPXNEmQv5saz6FFqbZRpa9qyKmsDFfzmjMxz6hwtx",
  "key11": "5b7Jy9rnYSzcDcuSpHfut6oiDGvGiF2zrXEfsxcUmu6RzKDvCnt7ueA3Lk3fbks4qWXVMgUQrNEG311gFaG9rjAo",
  "key12": "56eZfScpFfcS2Me6G9e1g4QtbJZt7JapwA8saHg8g3qV94sV2jRxaSWZWJ4cM1HzQuCLdmEnfEhzisDmf3BRquZh",
  "key13": "3dTq6uFJSCcoMPdmBPv3YsJh49qNuy7pC26AcPrd7cZuGqTMuoATApBw68sSLKMz5b4SDLwG1bBEdHDKnmozKaZ3",
  "key14": "4ej7N6m2FuuLNPZE397WsXy5vHupQiFjRirbsNxbEZQTSi5VKbQesKRK298dojt6APp4zGAKta6nHVCigTrEPG7N",
  "key15": "2hP4CLwGgQoToSjVACqzYnDTf62LifEQR435cZYTUmdQpYWixmdEbtEMSqaWcambG7oivpYW5J9tuLZDn6rnipFd",
  "key16": "2i91Wfg3MSxxZd58AbaXKAXerfq3Finu2rnn7Vk7tCBNgu4hAunNmvyN2XtWnTRgwkqJ8taXqkum1fKomPTGmJ4z",
  "key17": "5zkoNvfabg7mw1yDSJtGrFV7dTp8Ef92xqBnhocGsy3eYocJpR1FkSV2XiW3PFdhCkn6jrBhAVSioa3fbSEL9o6Z",
  "key18": "JnHfNumeiGJCqXGXvX43746dD3WkFms3zogpNHM8PFuR2fj9uwraSXtHj8xKD8MEfX9HtKZCYQxt8uMzSsWGRR5",
  "key19": "5koamttbGmythHLr5YqtSzrPkojv4KRpDsPa2DxC5P9o7Lddyfnp5DZvixcFWwL4Bz1mX897Erge2BcN59KwLX6N",
  "key20": "2bz1HN1c2grvYWm23LrWTGin8bnVLKzoJ4mVRiPN7Phi71smng4KqmdZ2qtKSuH7KAfrEtkS6144PNLXYe7ZMwFy",
  "key21": "j7P7jnQtuiVV23Y1SiV3zxCZcPUuQVtgUmKa9u5VyhdtQqqUKUH5pjHDbWyu4z5AZTY4XWcbaqRkWJBFGFUXauM",
  "key22": "3RjiN2qcqRS4ukivx6T21Kui1jW6Xnzs7wpCfjdmHBVPEn36kjxLJ3JVF4mv9v4XGi1YxfVn3aLXDtnFrFgwi3Jp",
  "key23": "5cmDaevqgsykGPmeBeKAb6LoC4tUSQnXm2EyNwNEaWPmpQQa8xxPqVNHf7oQiFSjteyeSuyRF1jf2F5N7B8D874C",
  "key24": "2C2Bwfh35gnqoTFSupYboj6QL1YGuSZ1FM5Z2Ag3hm4A3fafq98mcEiiRwgibLpcdCCNd3Fh4vhJ72xKzokdYPZR",
  "key25": "62SNvos6kCvDhfN5RcPnTGzpGw5YKEdaumqC8V1NpYUQpLxU3CV8KH9KuCEXmv9Uq4JEMUwiAfDhEpqurVa5Zdgm"
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
