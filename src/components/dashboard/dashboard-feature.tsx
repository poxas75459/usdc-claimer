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
    "2ur72sMAYhCPqns4ZrpQosT4vub3iCqVzg5ZnyUPMWAXneRMM5gos3ethjVLtMBDZRBYsqbq1nsdpcn1sfwpFT3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9coRhB5fhe4idWsEdFEhFboRf3wMM7qC9dSjvwcS2R5nyWfGu3w19PbXNo528yZrwRWWLfB1N49Tos2pedMn3K",
  "key1": "4VQDXiheLAyr7e29PULKLSPxP7Bd3TJhcRspzya6WZWbQZNiU6tCenhJtCsbievTQbpWmVzuUfMyGGzDVaTYnuKx",
  "key2": "58RA5HbaJAU9kA3NpVyB7hbMgXpbYxN2n21oSxVy4ovFZh5nd5NvH2T7vhtRSv1NdsF5am9Leh4CL3wEkzxFequi",
  "key3": "2zK3acFftRotQRzqR92aVxaagPVYR8SaW7rq9qPFecknwAGafPbd6FRsea5G2FvdnssfbS9GtxmzEBWJte1w6gNE",
  "key4": "4zVGHykRWwYqkzW5ppeno32fkscaCViRoeRPtgnVV4NkFxVmrKLHNvv1mNmmKVntRT4zyBbcEhurxEFSqak6gqYy",
  "key5": "3ZgWNMnuTLGdx2VXYXDMt1tcaaCrWanP3RvRNQ5XBUuRbeP9tpqCTrV8CicZXGqrxvUdzpxCjpNGY84fafepmALN",
  "key6": "fgM8G72srKTmeFHPmdqPNdeWaAAuFc8w2i6r4kHCPuiVrNmL7dDAYsX2isqft22usUZJWmtKLy6yvbWUoosVk5b",
  "key7": "2mA51JDYCrQzM8CmBsbi1iJT7hxmBgQ4gjc3VRaC7p9Ae3EpziyonfhDPHvxxEvz6BtUKvmLYShwowzcfomDhCEA",
  "key8": "3ZPd9yiUCModaPJn8FmsniJf7uxso9sLL1tZcnRK8uGUyDJVHiYJVzbt6ydWxpkgW8AULq5D2tkQ4uuS9iWGu4eH",
  "key9": "5FD4aNixRj8gh59iSCZqgVA4VLpZdT9DFTwdDztuH3roVoqnRYVELZKMJvHU4GnPsqMQMrQ8q32GaUAgkWHQyDJK",
  "key10": "5npRNfn7EL2W4sAcREiyR2auaazHQahSC8juvw3LkBNT9nfLa7m3DQuQFx7qj8n5Uihi9L5ZPJKk8fib9417Rx4J",
  "key11": "UnytiEVxqbTLWq5xzpr5GNqfu8ZARBXgC8BTERLAxY2AmjCw6xuZcCVSBsCJSwBtWpA8vgSC2UrzV1PvbMX7fMy",
  "key12": "4x2WSmVunrkM34bA5LAKuTCrWwUbAedsSGdPWVqqWmhwbyT4b8tZdkAmBKWj7DPcK1u5BfY5t25HgoLSuJWKggKU",
  "key13": "5Ysg3YXgEPPnSndUcXX7CZcbRDvfzTgBvWriHdhiHP5CiXfc6GunDHr7jgyoG39iCHBghDBZJdRCsbgRzS9R1wwB",
  "key14": "4PtjyGQiiNaZWixr7xJEHUmX3CfW6XRKHrWrNhgoGAHaBbijdtkgUU9fqeu2jBxnW14yif44whg9Bs7E9WESNTaZ",
  "key15": "5g1iTzxqdaXL7epWJ76B8V7zbpHh6uL8u8W7HNsmPfxu7oacEDC8oCPmNXt1mnnFevcNfvCUUSidasW312K4GjTk",
  "key16": "34M6bF5M3jE7JYSCHnf1Pq6xUyRNSuBY8Nh4hQ582AEtEE3aALh7hdZg4pu68YS5cVLi1KxmfUjNgg4FQRW8ESqD",
  "key17": "4EiMP9SBaVJwkT8aMo436h1JKyPtbCtkYyqiKs8FoMT1731mSsgEJ9hmRSNwSjsdNmogNNS1oiaRgTt1wSps8nHM",
  "key18": "2S9wrmnMTARRf1g1kFwanZ46GPdYYkT9Ktkhs55VUYGSYoNnRKnojS3iYkBpyTwD5vCLpqpoxRWA71k37reVLK9i",
  "key19": "2cCW49NSQoxYjqVjsdCeGnjbXnXWhAdYbJrdkWyjRmGUdKtY8edspMTKD9udiBzhu5MdGoQbEQFG9kz8Cte4jPUm",
  "key20": "oZAJZobZJGQmXX1AmhZ2Uj4xxj2ra4bgrBAqk92LRQHe3fHwzKNJP9rkvWuytTmtMWcELW1FQNYUcrvJ6xDN747",
  "key21": "55vkLqwhPSkimhi65tEJAF61ShudKRfDc6nQpEJe5ZA9LQ2fJD9FWEuZoHqKNEFDjwWE6JV2A1rem37JR6xbkvX4",
  "key22": "5NtWRiVsYQ9pSF6V4fwjB9rZBvF3yWuRjb9bjqAtoWVKBuwQwHZCKoRdS9hYZSTmRMXvJ1Vy8GnDGP3T3PkL9EJb",
  "key23": "69crmTXdiKbCwKuYJiekuvD9BPNMtyTUgEgzyDcLTdiSWfMVpFTvCZL6U5eGosAsnJRDr3semco7NRAvP57sqLs",
  "key24": "49mgKLRfq7QbyDTFr3uaPj9FKNVKuC2fEXCNtniswYfnuHAk73QaE8gH32xZHkPM6KNThvVks1iN45RH4aQvS2ae",
  "key25": "3bAEJUPahQqGKMX6xhA5t2ivmi4NxN9qSiiC7gmSCgtBo3skvGmnt9sBFb9jT4cp1QoUfWB8patTwQiwYsomqKcj",
  "key26": "1z9i18jsMhS8ifZQtTg17W1e39Bnqb8qJX29P9LtHGGgaLPJxSHApPjZGwXVq8yzaJgVuUpajeZ4sWymgziAt8x",
  "key27": "2L9bPzS4d36kCnrAiofUnLLiMypX643UKtXfMJJagD1Y1mPEjBnqVtFikCtk3KAQvqCQQtPNxGiDQit1Nxv9YAk9"
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
