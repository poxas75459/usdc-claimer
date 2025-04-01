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
    "2M5KhfeB3rTX3cpFgR4ron5PVA8uVm7eX8BSxo22ukRfMrtbpsSSQM5zwkP1r5oKQNzFPLrmpxsc7U3HBASru3Q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnSbKqzNv2yacpx8euETbHgP8KvBaogNqz8J8tzdbuWWUv4PLkuRVx2Kv8AzVhJkg3zKEv3Wjnq4ftvqNcZoYPF",
  "key1": "39SiLnQGZMd9GqGrahmAXsKDG4Ap9pQ4y8WpNgYCkk9bYq1nCCFVdqgzSKYAggN5JxpZ1tFuwWHJJrhGpUmjHv18",
  "key2": "3Jyjv1wXtNbcHNHWyk34uvdUApLXDj4s6AhXpQW3Uc6MAVo633het7ePUBnEYp4fU9ycnQErgLmPM8BBi5hnVygo",
  "key3": "3FZZXakyaJtVsnfzAxizL5CJ8fxDk9vWghtoamCZVhVUaJnkVaxtpY3Ky7Wt9b3NMLuMW7mATQiQgK5y1SQmR4ex",
  "key4": "eLiX4SqJ2AoY912zt9PSD1cfYoqdJgaWFMNud76T4uNpBd82zQgsJWxjjTzVft3jrKogCQhbMWCSuDhovcJ38vA",
  "key5": "2vbmna7njgbcUdEM9qijuCV31i647HB53cj9dGxNML9uR4cWP53U4EQEEuSAdF5cCqevvJwH6TFZGCdPd9QoRuqi",
  "key6": "YozxMPgYKnxFMXAjZM3axgn5kAV3hrCz8mf1RCUJHZ63fLWB9AKyWWLSdHDEZRJdRm4gDbKHxiwGf3z3hwzA5PE",
  "key7": "jK3A1yY3eBZktyWT7n2z6dpvu9r897S8Hhc7WeqsbdJjhwhG6ApnfcQSAH2edkK3twEvoKfSpqfx4W482ijmT11",
  "key8": "5WwWJb1w4wHknzFs9NRvoNYpkFvc5WQYH6dc2QqLMPquFPYJu8ZcWamkWRHeYrkWc2htqMPpzSAtxWyDXKNY8Uys",
  "key9": "2512mEjvSRhYeV1vkB4s5bHZtGdAKkEezFwsGofsNKS5tP5rPn4euxtfcuVZkhAtvHnfQbbLfmV3sqvF2CRB7mYW",
  "key10": "2vmSgYfQ1zsndDGyzDH3wLdNUs8YXwU6xUDYF1W6stWXYPY7D21NRcaq7z8RcKjRHHAk6Qw21fA5x1VF4DHGadfN",
  "key11": "2hbddFepQ4uSckPo5Kcn5PNM7x4GvTKphmefgn8GqdfsUD6pRo4ZdLznraPwWNpPCAh73YKR6Kpru2Kf3zizXNFC",
  "key12": "4pmdafwPjmA26vYekPPr4nCGn8SzmSsaYL9WMsaMD9vRXaQua95zTosPK4D3HmhoMs33FSiAh5u69r1iuYq9isK",
  "key13": "3aNG65TNVw52CsMDfwCDoah2QVCCHqYRJMZa6m6zCeWzBeyyJMcw9GUSr5jvtq22xxWfbc9CBhQqSzYL4W4Auj4F",
  "key14": "29FfHD89yZZbSEvtUzXCFx1PYYVNi5LMXgZChyq7XvzxyXxQdhseGdrVrXqiVQw7Kp3nZW9LdA3UEkThpjRCbJjX",
  "key15": "2KxwxdAiQ562Dur2PXcXQjZ4gYSoQAyuHhqA41cpmjjx6JK7pdPyRvq8o86ucZuN6FG9cH132SCcD1HNkQVcW4aU",
  "key16": "5wVUfHyLXLonyJvSRPabUE6mziGpNPqPwHqfcqEY8vN6xoji9mE7FdRPYn8mVTQy3Z6oYPC4oCECdCQ8pRZo9esf",
  "key17": "3hqNZGn6gSjarmPTWDBeF33LCgW65Be6xQ1yB8Y1jqKJV9EUZZQ2S5gpF1tsx4ZdsKsjFoGQfZ15vfAhgkQrdpzo",
  "key18": "9kkBQwgJCrTJyiwia39k817ZBrvPDErxyLJchcV9ykYYjFE3RF9X9FL8xy8cnUcVfLntBCHqX4x4PcL6cGN8HF5",
  "key19": "5oxizCoU7ZqWK8ER6e663EuWi2zs8L1G1L3oYq9QQZLMKRGFv7d65eSw8K14FBmcENrF1u2RmRfEpvi4GJhZxLCY",
  "key20": "3MBArqp8xBXxRWsBoKsTysAW7pTcZCKuatxU8Bqpiew5Qquk5iir6Kx1ksWWmYpZEB3GnjGtEA51jnL7vQsu7vzr",
  "key21": "xXqkHQXRdfbY8kw8PDWX8cx3ov6cG2GxuUveuNs5RFkpuk9DBnD5xhJ5jZZgsrSgHJNBftRGTSqDFyGc6ZVuh7S",
  "key22": "5RM4R9QnZkRYHkcNyeuYrGV3neBuPKCXSKy311D4LkSv1JdqS1zS2SYYedCXwvNHVWEHDZrRBWW3xkmyFsgFGBHC",
  "key23": "4sh1M9z1G2CZPjcy3hCekFVsQjCW2fexTFBSzFwA8rm4CVWPL2unNetiyKwieNuAvum7CqRmSXzR8fViyD4kazG3",
  "key24": "2HEp5SQjc4xLAG675XUL9shsp4LukWp9JGGdqUCKiZF9o5ywET4VW5grzSXH6VjJpSKi1G12SnJFHHnFGd4o9jHS",
  "key25": "3tGyw8jwbeFCsPU6xfrptacxzMq7R4ZhNrxbyLzmi7uVCbC2VhYzhH8hENfPcAZmu22qq4Y3dDAMmKENtFEVW3V3",
  "key26": "2k1QVXECEZEArCgRDTxq4qRbJPp12RC6ZYjxVNfom5nuk4r5Z7R5JEjQaug7mqr2mjSucmMF5gJXRmeftTk2cBap",
  "key27": "3oR4drivxpdUxpmSMpSm6Hsg4yEwnzb37HhBuDwWzjXK2ppMEsVJ8toPETvDAbcoCuxbciPR1kVsBJA8o3jtVWno"
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
