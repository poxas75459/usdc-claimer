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
    "4PJpw6Tm8tt5QZ5PQQwEZ8QFLrHBcRYevXjk7juXJAs2mP56Kc8ACi3iExTYMgozctNt1hZAuMt7SxhA9oMTyioN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAtpxEwxDc3DsCuR1MDehsGW3wXJ481V8pG399pz1uXoZx8SzhsoHNeskJx9y7qCXnMcdz9LR9kxd2SYLAcdY1w",
  "key1": "YxhZPgCBCunS3GkvhfZZcGHKv5qXFrTajJeu5X92VyqwBn2h5JwqhkEW4DsQ3aCiGtx5CS1ZLmr7o5rQPehWChz",
  "key2": "378XSZqpMZFiUkbnARwsUTkj7qYqk2J84sCMfEdempx5PLKTxXc1fHWBZQdc2dGM3CLXsD29ps9rVTRm79mZJJAk",
  "key3": "3VtnXJuUzzQVRtecYDXVo8C9U5ajEsEjrpURKk67H8GfaNmTR4ZqJxAwH4FZwnsgjpbJb52TMpRY4gcNd3XM2p1L",
  "key4": "KenLzrg2SktNCKHgetnR3MQXEKsm7it1LtmFD8WBypojwRVw2TNoe8F8ZFdch7M4a2Dks9L7oAvRBJu8xgTSCML",
  "key5": "2aPS8cZcVzCobJqFiY5nhRAi13yXN8y8QPGdWL247xZE5Rmr1J1EYgXY1bMbhnbko9ewfcbYysbL4cZRq2Y35vTr",
  "key6": "GuzhG1Xnx49yEbof3KK8nAv9GcLw7YtNXUKFGXBYMpNogZYm6rqvjWwWux9trrBPzaYuxXrcEmgPKscXs5hps9k",
  "key7": "jcpFXuHkEqQYLdvaGokVZ1qP8yvUFUHaA3wZfrcF1bAoaUUW21kYKbkP1JtqWseQrsyeBEpBxXMbYyyQRpoTT5m",
  "key8": "2MiAcRsooGqkPYkX6qqoBvAhhXyxYjqHzBbu5aRNPA9p8kAVnbuutHzYVDugGvEkuT8DNE36hk5dUwHwt2kKqYuY",
  "key9": "kqDnckGpkaiZceyURe9k67Xdy1oERRvoq9t3F5ptUyXkvtaBMgY5LMRDaWizvsPkT6Zf4TcDY7yiB7oea5hBfcU",
  "key10": "3fabFxvnM7b87AZNKFS4FigeYnArop3rkXoz5wcCFg2RGgvGGPp5qt63eZyfKjCd4GrHFvSJNVVYyEaTbKP3RzkF",
  "key11": "2rJrQUaW6MkuLrRYfCxgTVM9o5SxtewYE9KQyevSRHCC8XBrFNsoWGLVHSsuQqNqZd8dKivNdS7sD1wkKHxosFbF",
  "key12": "3J3HmaYi6eGU4ax5J4Yx5LspBNNB5UcoW1ugEReKy4JCBjuc8ugc3CLezVyi33UgimC5eW7JK19mNQV7nxr9iXLj",
  "key13": "sMmJUnvyUPiwqaRnjYLHz6qhdHmFErjTMumkgxuuzkebMvkqzgvLhXUQ75yZAAZNwkFyibDCPWWsiMWrzeEDBpC",
  "key14": "5PHk6Xnf2eZJFo11umYJPZZLg2QQZDWCxYYjuZZMFTHJPNAwvR2ftiWFQNW8EZg8BAJLt5cpwkcNGMtNPnN2NGev",
  "key15": "5jqwTtVM8Xch9M7u48djMtiGcJ9rKo5yv9qaTuhnpQcBrFRyNPycUB2oGNeh61VUdJce8ycUKiDwLnJy35VvcVq4",
  "key16": "5kbjriDzEMdS7WiTLG8Kz89TnMkD9tjm97ZviJhnhpTPB6PGAK5wKD8zFpnEQ1aKuHNwuXixCHUQJ1nPkHKd1SWh",
  "key17": "3GBtVXNwbZb2KUK9H5crVQWp2SST7dWoM3XRzX7UCJQXD2wY3pwoBXurLMeMgcj8ZVARqRBTgj7h4DDEaxibLPCW",
  "key18": "4W2ohADP81WtLL1Q1d9VpX7cgqtNVEKB8C6gaCX9mzJfi7nq33B27m38G4KAapjSoxPXrAMZYEAwCnKiGmtwpPei",
  "key19": "3JMyruGLY1NAZ1E1wc3CR6E4mkgmKf9SFyf2kACzKWKLumuAyW1pT8xgrWCQbQhxxfJnr94gqRJwHcnexFa4E2De",
  "key20": "4v59LwBn69mmwGdMQcANAk5V9GJ1WcJ9xjQNQNAVRSvhX9u125Baho3n44HTZ5CyUsgo2Rhnc9kVVRyKP8x1Dmxk",
  "key21": "4UhEHdVjBePNCrLDc2oMg17yQUUNQNTmdCaaCLiQf8PMYmRhMKeA2MVKADUrP986BEV9ZZhjd2x8RGYZ9cxAsUP",
  "key22": "4YvomMk5qQzPk43Ra1NnoTAS69har85JHZKXAT2JCYWwsmAXL4ZfjfKB1CqUcrp4B9KFrVhJrYogUXMEjprpYX2h",
  "key23": "5ou7jrZFvvqzaHDxW8GqiDPKLAmPAAX3bPvNsiosz2p2nBof9n57KQASx7G7dH4MUTHmdrqPwkqoA54E6P6MHrMC",
  "key24": "3BgXwwXTBwhhWSZReQs8mJmHE2jHWj3qGrALhqSJKwenv6HWrFyc5DCyHTP4ZaS5AVomjdU8yFrKo8XGsv26uo8y",
  "key25": "43ktMqG1QQaZpJ4Vj5cpMBXwEHBW1WiZLrJgd9E3VaMjgGZ9Tpp6V4RUkPZtgGg1YDQbSDTyBKMyWSBFuXiE48Hy",
  "key26": "5XaqVkr5paw9MM9YJhrNwxVEcBdjPvA6JXGTZNZ6VY4vJ9RWkMEQ8cnVQMQr5H9mkVQZmrHMVMAAYN4kmN9R8ccc",
  "key27": "546vaaPf7L1gjxHkUpcVYf9FNB7m76YHt9onkC4KQMNnKMwqJhoRFNFYLHhHTG5gmwJZ85t3NwMHac7YoaubNiHh",
  "key28": "5W2X9RNL2ZYf9z2MSBoV14KUe1KKY8Z45ZRPPkLAeSFhW4T6hF1UYXWZT9PaHpijToD5XWtMT5tt3UrpEmtLek8h",
  "key29": "5qN6QNYXP59DsY1h7PTdDJLyTgT5jfT39BEmjZpUUeLEBCz8d1L3oNEMAWDgn6y9QJgGNr1ovkv1jUwivJLRDUtE",
  "key30": "2e63D5LC1pPMFSNzpq3JvCzjWG1YXusNnUfKQ25yxEsZQByTHZ4Hf4vmfEYzuBy8kFSMQU39e7d4eqqjBnP3wncb",
  "key31": "4PB5Yeoaou8srvfo2RcJBx5GoZE6jDvyq85UspFKGop9yHkbjoHWgkNSSsqLhfyN1WXrJmEC6a3XwttyeZ6Hmzrw",
  "key32": "7nQooLAhpkNHVUZkm63vA2PGze64prEn4uayomoq4zqwFmWtpTKGTcWNyqHgSFVWUg3qjhRK8UCJBBazXXJohXf"
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
