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
    "2FqfKkKLHMycQTuHxsHMKKax5rUzBCevazd15iaoVUwWK7MfLCA6DEHXRPQd3cfNC9SaBzifasMfBYryjg2gusdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rbm316pR6S18ynv3rfA25VPsYzMdCjAQqYiik83gajPwfgQaZDHzXuMFKLtic2RexA9CeYJ2iBfjk7YGUSZYd77",
  "key1": "3C8xjWsfF7E9KZnqsrQdtweP2KRx7A5e8VyaC9dyZ81tj7sW7GhrA32a3diikB8w3qdvDy9wv4WTQXC1UyTRAZZn",
  "key2": "44BFooLZoLnsHjCNsR4fGefqPQAZQ8q1Zj8oMaLafAmca2JEDFxrJpjU1JK6GmywD4BydGDxFGWBjaQoLaQgHm7W",
  "key3": "4wP3gCWrEniD76GTCMV3etss4tjb64zmgz2VA1VabAVWaVgLJGzhZgNoF3s96kVryscDnTjAYk6eptS6coo2rYd5",
  "key4": "3g75RB22V91FdFFTYsZu7FeC93V32di9vrCAV2rxNDG8Vzh5nFJMvqiQAMviAdKt9pP5HTkZWBbJhCu6iJifaALw",
  "key5": "5evRvrymx676nzUAcqa7B1Pq9hsQVCU3Kd4qRkwJK9CV8NyvH23cXbgMUeDsTphPp8z1i9jqyNvvzrwJxuCisrqr",
  "key6": "5GeFYcpw7sWahmVw5NXpwjdqE98kSSAzinnnf5woSftQK76t3yKBZ8qrggtrFNHpZKJGvaZPchEqqbaZvycQKYcm",
  "key7": "4WS2CWGXEvCJgnao7jioKwgHhZwGGj69fSzhJ87fyYZ1kiAZcWt3nFyTPjXRdqt9K9TxJhpLiNstSoaB6MA22NJH",
  "key8": "5vQpVoMyqx9dW1bBEcwNYXZHyCnUVXG733ovijd71QdSJfoTJaxqPsByCuEZJDqQDgKq4wtzHB2Jg5PXcudM3yT2",
  "key9": "5BTH8oV9Phuqj4cobC9QtiY1ZbxVbVfWzytv8ASbkZN1CW4QcFCqxFnuezgT8THo7ripmYJqQPhwdzALEsxr4VUa",
  "key10": "4B1q7J3sbbKq1Zjn8GseuQP5Yh9UTJX7UbKdDhDxCGM55xDJ5obUadRGhPLf4EMmtJCEvyKyXQtw5rGVYoTCDhST",
  "key11": "v4xs5zRQdM6RPcu1vEeCwsfD4eKt3AegTZHmyc4JpS4FRzKztCuYL5vPKZ2fT4Yo1E5G9kPh87a18RjcnwGuHXV",
  "key12": "5UmkzUV1UX2MAPk325vnWH5dH3PAeoAaELH27bvQRsbDYg2yWy9A7aXAW1SsLyFH9Sy9rPUd3vtKEsp9tsneXTpL",
  "key13": "2zH7SH88ZNuVMM2rtXrGT5RqNaZysefzVXxiBz2L525V7L3LGdDMewFxYPSX6xf1Q1WDrMhrDQmet7qFqBdRNccr",
  "key14": "4ECA3LgFSA9gYBE1R9i1syrMG8qgg1MM7x8dN61gyf1cGM151Apwf9sPX2WreyJZDZagmFju4y9gxm3VH4zoS2n5",
  "key15": "2QFhEGCDApxtv6MydRWxPjjn88GfWnfRoZRDs98nQwgNMXAQFc5gNNhdRba65CXKfvGvZrpjA4WamDKVUbt4ebnF",
  "key16": "2pckDJfNUBGHExKGeuySVuKi2K9aTJoEyPqPGH1EtN5WWXzu8Zt2Z7zWPsfyaWrt6Twyaz8FBzhhboeohiUXPhmk",
  "key17": "2VuDMheyp4y73oMHc9K6AMJiXC39nqGawX4Ruyj6KmW7xdS3yj54MYsZHPUhjmW2tv1TRz983jaQfibCgtUK7U29",
  "key18": "5pM1Pb7n89hTLi2YjdSe59x5vo8KRh1mRo3WxX1cM7NZiZ2uHPPWrEe65MNm6cWJ87tF7kys1WLuKDZo8zG1D5ps",
  "key19": "4XPdw12wK969nqrRbDR35EeeKj5DbUc4tPoEZ4KhGGa64jY36MghDn7i69mNvc2MwBuKk3dRN1CDvGXwbr1TX2et",
  "key20": "2W7WRG2PUsmjD1gXxuw8su6jfgoFtcoJwiAuR8hUCuBvUPNfTTkEX2MufYoja1DXMungVYG9StjhrDMcNwkbDbvx",
  "key21": "4mhbctXpshxgBpFhS5z8R5FYgkMLbo19yuD9oAdR1AZNAZCxgStgQiCTcqdSMXCPavHihwnWz8564efP2p4Pq9gU",
  "key22": "2CVc8bajokJUeWFwNaEnrpbvBE7aKBHxCnXEB5bkQcA1eu1jApWu1KRQwfgCuZoC2CVvHwUQJ7zT6UGh7tLvzbYX",
  "key23": "4aCq5d6wMUsxY7ZRfbzYiYUpyoZ2ovXjejzHvJZV1uqkUnN7DySBqQLUEmRxd56j5GQYJoXMCi1hkLvNMC8LBUYE",
  "key24": "2akPjG14sEF5JgvbaN9J5jo66SRnzjQ7tWdRJ2djHC6XrutDtwqooCzpNyi1JcyjeFFP3BweJuhJw14Nh8AWLqSx",
  "key25": "xAckkF184wwFS2QDSS5mGZcMgs5mMtAvvd8YPeajgr9AVx2sdJaQHww3vghNDgDCUsq9TjPvz9B5YQXdYsWSkRz",
  "key26": "4Lcwmn4766vCHNVofGuc8QZrrgrUX3NGWSbF5j7S7W8xHqD268oxqCp633qS5gHcKqsAdMLRq1VHAgBQwaYtJ7Nt"
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
