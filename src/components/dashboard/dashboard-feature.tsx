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
    "3gmXPGFHUA1XcHo83cdTqjnGFYhPwNbf3A2FHwsTFJ6pMKUGKizyAcosMajN9nkuQNKzUYnADVxCHVvZKAMcSajw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqLyPcq3PV78Rv7jqnuT99LtoSNBzvQXe6HRDXWX824827GmkP7iyxBourvZKNhjA25VXQXg96MXjrcpEbZPuQq",
  "key1": "2aRuhiLZHJZ8xGV6WvK6XAh8mNhtbVXBMZua8KfovxchSUwu2SAZtkTMwDogwqzpKe8dC8QrRFcSG8qpCQMHvnNj",
  "key2": "2hDP9HEZQeGpEwjsmHs7ZEwYJG3rDAuFJqhhv4QpWcjsY8EeMNLmnQ6BTWZ8xPaFQjW3Yt5RSk2wYLXEjAkGbL8s",
  "key3": "5fnxhqUZ5st6sdNA66rGaEmBqBpueoBRfM49Dp67oQoELcj9c8M9bsCpF15Bm4gtj61p2s8aa4tBxhtY5TEhMDCN",
  "key4": "38u1ZRPowmQ7wge7Q5auMNYoEAAiKdkg5wDhh5EkdqGXcWgKAUXyWp4geFXJpyok3veddDRfb7pGXRfPvAeJo5tm",
  "key5": "3FH992Vao2hr459dVXvJTZCo7EVBHzmAvYqx1LpYEpTzrUmfC9nPt5B6HZGVKMA8rD8Y4Zwb9HcwPNcCwVE7HUF7",
  "key6": "2cfo2aS4SZLsqhaq7Fp5XZA5wQ6CuLjRrZvFXxEBR9xmPnKVpkM2cZgCKfujvNSPAv5R6rEsRnsmhTSvQVK3HoV4",
  "key7": "2NTwS9CiPt3BmYxmrptJ2puXb7tgy19nKwp464jg1PWZsSo5ngyg46tjBPM64vB5scnP4DKjN1dwF8TfHfaP3swy",
  "key8": "3n8FMg5ZzHBMjkTH59T7jpU62Tx5wSFASbG5rGTymBYhHswxZtoJpQ1g1FxHZmTp6SDNSQj3DQoFVRW7eGTh636Y",
  "key9": "2LWFmPetjb2vjKiwV1RiLGPud5jV9VXLPJL71Zc31h9WLueNRxKnFrV2sgREiasEPc6o9cso2tVmzBLp8KDdrXcw",
  "key10": "38UaPUPR7ApuKDHNybYTnucq8CZBLqqjPjYWMtESKtcmZQzTeuFKhj833HskmbBfLjVzK71mnjfQSj6AuqNksRk",
  "key11": "2JfX72hDLuuzM8EuPpCjjpm9Z3zk5pKMd7g84TdGVjj5e57xGZs2STtmm2CoFdbchrwkembPS8PrB2VNwSqXmC3y",
  "key12": "4BZVP48BJFAMDXkGsaqKsjoWs8RKiJLvxTuRNkBqiszpTNDKARuhnTA9QrEb6ZE3m1Yq2jkAz7Q6AnhrcKgYGhm9",
  "key13": "2LdNAWJxVZfh5o2ij4Hi9WQcBSF2WzCxxdzWtwkxkSWFdmcwnQPWQ86jioPsKFD39ymidXPnmmzBtfG3Fw2cFHKx",
  "key14": "hs5uuK3hwt2xosw3Leen18JN9iYLotcpaz1BipZTURuXzfzqtrPxSArTUxmRo6MiYyhR4iTnHz1yvnekvaZnbEM",
  "key15": "5VyczF8z7xpepcELv1VZxUg9rCZ5RG19JpJpaFerWeowET4QBMnTZw5YtuMZtqLjkFhgsSePMXLmA7EPCrkgFjR",
  "key16": "5SoShMhv8gd59qrhKQNjRhiG3NBLZeardXmCXng4ZhSC2iCuEVT8fdHqsEeGj4g9TuYiwUZL8LWEuxSzHNqGG9LS",
  "key17": "3B2PVWMS7e8nFJt4kEo6DxyvazXnnntJDV9SYw5Tsg8hzsMQhU3encoMXJmp9ZmkdimqJxSKGcoP1bXzSxTNPy82",
  "key18": "5pAQ71AdavLyDcVbvAA2vtAe86JVrYvyQY2P1DZcBkfJ1EaudFpoDbGhwpvWJH1w1JBhsQPyMYNMCrzWhiqJeKnM",
  "key19": "3menhowosHgoBfw6JYVMuyiDPD6cBoD8uiqsWfTEFNDUczU88sKz2RpxLh5B5J6Nq59NKEZZ4XkcQsgadDqxzeex",
  "key20": "4nZWVDuozgpUeKro69Mr4865As9TcSB9BZvNsg8NHgPioMiWHZYPhZtx7YpzGLVgvYYePuKWq6xP67XqS66bccVy",
  "key21": "2Yb6L2s6LDSNm1QZkQZw65ghRG5vKA6pSyP8kqKZKnMch4MWw7NaA85TNqZ5QYehjamLriGELjyoe3drPN7GBsYo",
  "key22": "5ovqr83z8uoGaFaoqxM1F5mLgcUt5XbCAW1brHXnBtjR6rey9DZvPWwJsu5HrQQaUMMvQCSeACf5e2x5578HXPPf",
  "key23": "5Dk2vR3LHXckeYiJyG7R1xETiFvKGv8APqwp64PYeEjTeAEpvQLzmzDwEamhKzP2GCcJpK22ts965tVAJwPmZeYk",
  "key24": "2HxTzLq57L2TiCDqJEYbuCFUwnoHRcLFmbUdZtY6ZbiowBf3Bj9t5mvkJ5GBEyEjWMKUVeEZ8gCgKumrdz1ziSnN"
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
