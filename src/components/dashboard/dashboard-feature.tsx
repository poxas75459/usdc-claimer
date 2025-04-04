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
    "5P8A4kW6qYHRAKHbd3ABxsyvpDNw4NB4fMGQcDSYsRjL2MjGTaU3reqVHBe6prXeQnuBctwHYA4Syi5MwAEUzEfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2emCyAcdVzv1VzYuLqW6vVcE8RRJCrnnEEwCULcy2ZwBhRiK1akES5LeEmL6PV2hNmqpTrhMJSTe9PvuTTmeYi8Q",
  "key1": "5CsPhGSSrgjM4k3NyGY886SF6QKCZbdkxHx1WMGAqYFCk5B9wyi8NbPZjM1sFMyRhpRSKHJvH77pq5Wt1KuexZQr",
  "key2": "2D2sHNqNZmnHSN2UxVR5cr1JSfggEc4CED74xCeKMaBuoNF2qHBzVc5LjvDeb96VbDt2DEf8y36aTqWjtEZxGArW",
  "key3": "5JXiNaVUWr9DKSCGuiMGeifgXqEupUsZVBm2Y9E324h7BdovxuQvC2NZt32mxNMuSQSkZojKsFcRyABz7Ck3WfwD",
  "key4": "xDbcYhtHtxHh5qRa7T37zAjtz2GwBu3QNNhrb5ByFbWw8zaYvfEc6LjsjS3M6ziiZSTtWWNFarkAZcrwNroAutq",
  "key5": "4tZrVrgZN5noG58EEeSBa3QAEzmTdF3WJoyYfAeeV9PL5PNwn4yESyALzjn8nPPYxA4zxn6HcXFb5JgWAmDCpyv4",
  "key6": "4vvZgxN4am7nuB5SZMws6BoQZdXbNa5iWt3KrT41Z8kUgqGLX9LnwTqVobUxmRiZHtpeu8jqm9QWgCNDGYzFr1jF",
  "key7": "3qXkpppLKFEdopfqfEsC6CuGBUKKLsQY4pBpwu9M192smTt6p5PUjLBheqsAbXt7YG7wBiAgHeEVZ3PPFSsjMziv",
  "key8": "Mi9hAu2bNgLdKCjjo11YrwAdXw4iwehH1c91iMP93febnHtJn9gDngLBDsrTqceHWPmYQEpAub55nub7P5BnugW",
  "key9": "24KmgwCRWhukxy6RMCHsNKs2EUbYzempiFHVpTpa7RNRACUjbB6EWzBCm5L4S3nRzCmUCmiofRwKgB4t4FT1jZK4",
  "key10": "sEMdjT6nyU4P23ry6Rta8vCU2yepnrPS4BoQx4pnZ8hf6DVv84sfBgFG44VfsS5mYYBMmpDst2cjnnPRBCrDHFB",
  "key11": "2Nm8wKMa1EMrKAwPWnidypiLeC8EVknzgN82URjaVXv5j4QFXqm9PLYLpkaeGqSvs5dF2v7VLGmzcAv1wBnqZYdW",
  "key12": "bNMkEniPUh9D8ncSyJxoWgvWJxHtwUDW5zw1zwFhXGgUPK59qAezr2S2M5xgmmdrLDJnz8NAGJCQuPGZtHVp8f7",
  "key13": "kxPBv3vjLVFD6QfzN1jBB3cEgozvH9n4eotcjH6zxSeu162XF1id3jiA1NVnLoMDLewXomPGfqcpkh13cNHtHH1",
  "key14": "WA5CR2KcFgF4TfnFp3Q4TjzN9p7ArWsXVAfzMQbibgqw2nS1n3PA33B7kwTrAZRmDSbkmd2hUFBFE8rdoNYycQN",
  "key15": "4HFBN5NwosYh7S6bRsivJvEdWATtDT6qwFtUJrzcyzVSu1HPFdvvtJABwb61CXqVF4uX1EDeqA1a1MDUuxf7ccWG",
  "key16": "41s3USxURKtH6Jp4vrUj37SWXBoiktFHk5h786ZqHpeo2zFHH9LvWYZdfMuVChdxfsoRujNUs3oVDxGQ5aowpLkr",
  "key17": "5dFR3pkf6PK66JSooXNqz7tZsiMdnrqkPBSbKeZLZDtRLghskoFYF3A8YsS54fs5cLeMmXS1phpPNXKvjA6GnaXm",
  "key18": "zDAoqSiekCLPsvaTMUXhWCT7ssRQV2Gg9d9z1yK57g5E4Evo2VqpqLF7RuwPvSNznfbrbf2EC1L1aKwZFnaEsWQ",
  "key19": "2vLHhz4ydkpVoSSrSMNhgEMnyJpcGNAjt3TMsZPBLdd7ELo6F2q7paJ3WRxpz2GPV3gQzpFRrAh6ULEHsH3g4g3n",
  "key20": "538bLVxzoeWd5hk19qLeSnfvRr7y8TvPFSJBaXACGdefNDgZo5DhJrFWbREJorU97vYSppE3PTU4Qd6b8AtvWK4a",
  "key21": "5UHPT7YddQqNr8V7tnzh3ZqnXKD69LjrEMc484x9cseeo1eGL1MpRugdSXHJXxeXPzNRQKCunb3ACXummcKXedM2",
  "key22": "HxdL84coQUeXv4QvUBvCMtG8jGh9fDwq6G4bk8tSFGeBP6MG6FkvGBTtTyEd6LzpJhpessTPuZLDNtkkBJErBRF",
  "key23": "2WXxHCxSRmQ49J8RqHCEeEBdw4By2DkrTQhxMcUMxkZKRoL92BxmrMvvHvYc8WVg1STrLMSget6uv1K9P13YfSes",
  "key24": "UbRoiD78cfcfyBDzj5NXe35zLw9BPpNAbhpEAqeJDrZEfQAuR5AZdsqTcpMXeQD4AaHUD6zcD3zv3igHTQzL9jz",
  "key25": "44Qd1hDj2fD8jsvBb1EGxgJstXgntb6chpehwtW5NzKWGGTEHKXcYxyhvazpcWXFS4APNz88tiYRBCqgr3p2nNc1",
  "key26": "B3arjKMw7Vg9UnRpREJNNtAr2LTagh1gsDvoABDc1rwXtdXy4dTRjzugPnVmoPsVUBLK6fEcXXb5Z1zwgZhiya8",
  "key27": "22Lxb2EEYciesnnmn2tSeYKdTcUMjv45zFZCbX7a2KKwSe7ZWYZSb3xRonLDe5QiKPqQ4pU7n55XoeqhGPDA1L5S",
  "key28": "5aenGZatdfVvaseHXM4Znu9soMsaP8kNkwWJMnHbwWq6P8deoGn4R7mEPvVnPjuVufFX39SEJACsqh1WU94gPFvK",
  "key29": "WW6NFx1srUMNoizLodubdoP93j1erGy1iaMzpxKPY1krVnj2bzH6Dwhpr84QbW87FiD6oJHvhmfFYcp3KEzaHqV",
  "key30": "dHsJy47F78aKWVnU9fsoDYpCzKGBrgeHzebD4ZDyuEc4JhFvcg2y4cxjgmpwXyDo6UZSGEdTiyA4fe8hLTfPFcC"
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
