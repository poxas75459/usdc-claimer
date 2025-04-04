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
    "rkzsiVLfcCsBGrf779Pyf6zLHS4yM6tGZ2ScdmV41G8BBj4QWZmzNknACGm4ouwPsgnaJtzdqZLDif5YCUoa8MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DAAFV2QD9mbNTmiPNnt9wu1R5r1gA4eCuCG91YkzscJfYsNYECFJMEqKkFVoBFSxX5hHV9qzGX9T9FbmPGF9nH7",
  "key1": "3j8STRGTyMVKpNs3MZwaQqmd43JnaxDYWRWWpWmukhac9MNfAJsrMe2eHKhvTYiCvCcWnVygt7didjEmqeEneSXe",
  "key2": "5R3f6FtRbJnzry9P6icy9VpUbG9xS2KH4sRqkXrFMeEet6A39RDQZ4GDcyWEn9vzpYubHy64t75kDY2wKntF9eBb",
  "key3": "39baFsrA4vHu8MLMhs3xjqQFoj1XTRDPVWU2yqKGZTTdZSyMTw35Q4iexxDNCmUh3mp9WGrbxskxLtp4LKFYmSzp",
  "key4": "jMqQDNeFohzaoPbuW8GQ9gStRCL18ek1sLb755fq3LbAeAMp9CFpoSY1fxjbdR57wfis4bvuGYH3anBrTJTgG5G",
  "key5": "3KQNmzEvAhbHPgsWhGNMdcwXkPfB51xdygaqv2aQAzyLB7tbsdfGppcFu73B4o2sPDfczX1CZu8845nJaURPtwWZ",
  "key6": "4J6fn63nByE1HjzDgDeN6TueCpzeWw6jHp5xPjHGv2KXYDN5nvKCPtM96abJUttkYPNcJpKekbc7SJU5sCqHdo42",
  "key7": "334tip6FSW6CBDB9Y9JQkuZW3VG8D454jrnwVrGZBkgeNEEBchKfNfDxQbpMLUPnaQBD2fxTKief2Nd1Leu5vEs",
  "key8": "2LkeB5WWip7o5h7bD7wicxoNczgVbz4oyBsv3XvByEYY9xUyD1q2bmq8x2oUokFyYuCFxDNzzBHpgMrA3zUNFAGH",
  "key9": "3pfiRkahpKF16V2M8WaaHwvNAwFuvirp8HjhMoEJseUJYxXrJxuCpZZkRqEMf7UjgsthkbRuHD4AFRyfHCYNAKnx",
  "key10": "337xp5dc1tN6oxcYfvcTHEoGCzgVkbKmCQbDBwiRZx88xYy2E5TwE6F5SEE39T9gJtb5hm1ieethWRsZz3ygU8g1",
  "key11": "4ksL5eNmaZpUXpjpfDzn3osRbV6g615Pq19pL4Pi56nG6pkBC9dDiJWi7WkULdV82NvoQ9YcdCupnsXg1bNcMECM",
  "key12": "3RMzLtWhmwtv8WkCAGBrsCbAZFXQFSkgGmGEU99xgvZpGjqaN1TcMpMZxizCav3LAKsGVa8XbUkGUJXogm9J1xXN",
  "key13": "3W9EU2UoBaLpXo5Ksqbkr5CGE18jJpt8WLSejhWzPG24vdA7MqCR5QtjmX4SMMkAfo1CoGUdYh1QXMMehTLDVRFK",
  "key14": "5uZcCaPQzMrRQwr6TncYhwg6J2WFGjiqehJeGY2kHG1TiU6dzj7kLUQuUsb43DFYpV3kT5FscMUdKGLj6YAeqjoD",
  "key15": "da2aBn7wni52W6mdfGuDtqokSJzfYLpZ8p4USvMZ6PZXCTQscSpjUwAABxFbiPDcaqxBU8RoBPxT7sYznJNGk17",
  "key16": "5mYrHTQ3QaixMEQXYKEG3YXMuEND6TUhW3oFqpjmwxm3LEg9XyEmUXK5PHCDUE48GmZf1Js3c6g9YjCFAX9aF8SL",
  "key17": "VN5GKfUE2sB9ut85mZA9euvGvFtEfLMhrUWeLK418bgYsLaQaNivHFwzgAGEPeSaUMnZSZ68zXvP12B8agFo16f",
  "key18": "63a83GkC4i5i9RBpEExRNAaWeQnWjswEHMD8AYuiPsyc3wHBbHiWDCQY1fr6TAYFjU85wbNKzC9ZqMAGnQSCje9B",
  "key19": "2PJetYy6AwQ5bkx3yiD6XvqQwfQkHTYnVriyPfM7cczqcHKc5sqiHCRqioX3bNrTyhp1JrLyKYLN4bcbWvxnfHgU",
  "key20": "3RRsFPZDBJP8kep4R6kuXq3noEKntm6hyBwfDv8rqza1mcPezZsXmkgnoQco5TaWuacj3DAxYgasvAJM5KacVJBi",
  "key21": "BLRdrNDTNJBNeg4Y4L9NZwGkbCFDXwZzzyTqM532CCDCyJTZnx6hYaE7aanNZELsBfPykqk5XM2RrUiABkSWbEK",
  "key22": "4Kk3LfHGnMoCfXxxEqCRf2QDEc4Z3egCAJr7bCKnqe5xUoiBmK49wT6pUPucFGpxetE7oJWUrB3q56CpHQ778QP4",
  "key23": "3CXAGKnfJsisK4PsS6wd8YFQfiZA2QPZ1w3jisDmqxXrHM2JTRuXJQ822oKyUkYuJCex3WaRCHstjXvad4mVCKdG",
  "key24": "h4Gqru7kx85PZW6C6Pz5q4rgKAvRmpvD26s4YoEjTbyyLygxr9YVKuo45o92LW7j5XyYAA4DkAY3Ct9A29FqiNo",
  "key25": "4MoaERSbHbwzfLxHuhH7z9xL4XkLcZ5XZXmm1YUqRdEaYdEevwLTxscaduyunwWg2SrZuhXCV94azucp1qFGwiXp",
  "key26": "27MggbrXfLHrzCLv88jmibvi9cXzv8pvj57aJqCcshS6aZtEsvrvcekefisPrbJU8i93NBnFsZQdhSBanbzDd6N1",
  "key27": "3pQwjDAsbsTQ8DYuUnc9fjZN68H6eLLdat38Xas9VQ2rf4USSZhrEKiPCqpTRtA6g5MsGzWMVzYYiaFmLWmwjM95"
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
