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
    "4oB5H9X4w3FFQcQNJ3bvCLzraMZeTEbDi8nPzCzvbWVX8EktkMBD1WYyHpepA2yDfXjS2JiLcZnoPfPYw5xBP89s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjp6NeWgYyNCagSQQDcVKeVmtChVPJX3gj4r3BooC8kNRZ91sNJ9EVJm7ETFkrAuPZuEJF3Z4sW3H6q3tDE8Guw",
  "key1": "2VGLWRWJhPqMZRuEV4JpNszSnEUiPV1z8p4Kt6ZTte5cdfJ7upGEoY1zgfNtUu3HzJM21ZYLpp34X5tUBp2TZF2T",
  "key2": "4ciSGLhcP3F2C1U6D5jM2avMRQUt2JeQXro7uetMrsQRFwwLSz1o4nCMpuscfqhTFU1k9mhpP9y52SJQe9vLAh5K",
  "key3": "328TzNEqD5CgVK7ddJsnXvpA7h4VkCurLaST8zQPErx5ZRnsXTjkqdZ5n7beiqZ1GezBiEFvRpCtbNyu6BvADemq",
  "key4": "m7Eko6HiXttHxJPacjmv1rdJCb9kzEhd1NGMcCnPAhKFPi76TnKUyRqSrKvJ7ESCtz7UwRFCPzVx488ReXTPChi",
  "key5": "47JX5ggbRxabcEpfzwYTUPBN54CFxJV9Jxf3dd9NqcB7Czom5wE7RZjoBNXuJd4JqHfEgrvpHqiScKYdYgQtygxA",
  "key6": "4pUv4W6ReBPJnQXon7AvC8k6pnCdr46iVYbWtsdRXVJJDvqRdb4KyDfp2QMBSpfyWrzmfsPpmz24wAwjbDhihBRT",
  "key7": "2gjJATz5zoRzwBxZW5RTuS6iiUNkzsCfks7kP1jTtHY6hWJVCVfEJo9RrS8uHVdAUANpi8BpEhxcDhTfkKALzCXq",
  "key8": "63RYCbU3GdJicMPEZtJztsw5DL8dTRwFLyyVcH1QHZsvHUz9kzMSigFfHTWD5JKLjrFnyW34WPt5cmHdHmrnzrZi",
  "key9": "2YnSWR2xCb9vC5dd9BsY6xRwStbLLPkcUXbEyz5JJA8Djj8dVg5ZDrTGRR6QM6XLPZas8fvY8CcUfQpb2XiG4UKA",
  "key10": "5WTvSuwMt695MheivwoT7DwhbN6o9JQzuGNNxNaxZiQfN6heFtRz7Kxjgb1ky7v3GkgnEvEjHv9qMaY8iEpC7DGb",
  "key11": "4qXHMQZ4TPktmVCvgifVLWGstFeEqf4dynPHoy7xiUvHFNSMnfr3gni267YJ5vEx4r8X8Dumy5qsSWDKwFG3gpGT",
  "key12": "YT5TdFMEDwB2j4mtyt642wnhx3f2kUZp8JyfJPWGQimVaeG6WEGr3V8R7QztXjAA8sAddnmKdWbiY1zd9ojejgw",
  "key13": "iRJkR2sgzGJcbjeYyRaJeVEK69coAoCVHj9rKNhmLsXtBumyLj5isghj7CiaedUwpsvhYfUREmshZPWn7eemaN6",
  "key14": "3NrvWUGVqxoLNxLCPLYUciRopkUrbLAiKmVz22yzXQVUg45Cd8VMfmT51mujEMsD6mpDoFopxtkpViCtKmreUAJk",
  "key15": "3dU5d6GFksPJzjFRQQNwTrutyNuKjMCVcLbfeVpKc1BURn3GA9bCNhfjMJoNLJrDLVpD4ymBZERmSYQ3zVCd8JLi",
  "key16": "5kdpTpDSEbGaUHZq1TYrav6KFdyWfyG8eDCbJ8dnvhh8rmyEr1x61JkzvTSycNLjMpv2WDZCeEGHY91P147UFnA1",
  "key17": "4EcgfDWdG4HUFkSoTtbiWMUnb8XePcS3NNxBRZBxa6WLZtC6yqf2agfY8HvCZSaigJZhzVeDZgrdpLXBbmxe9hDp",
  "key18": "BaTTULAjEnVo2g7uBxXNYdvZY2P77vYB9s17QhXEwhwsraP6L1qfv5uC3ePC4XLHu6j4Lx8wMpSc69gHJp69ukS",
  "key19": "3F2eR6khuSyYek35nEYAfwMd1uXx7cM9MR6mfHy2jTG78rvw5dwHDzcErA4GY2zCe5yzNHGcmf8eXkUnPdvY2Jzj",
  "key20": "4pS7HzPK4CfqoBTUEgC2m3cPpe88or8tVvsAn6iEQw2WGKStD2NZgbpTiU1ouV4ok74jaT7FFJhEon1fUnUEYhhz",
  "key21": "R3nRTWyHgLKQf5Tp4svje9buYpsyFu1YRkVfZZByfR2Lz2q6JQirip4x3YeX53CmiCUohfmb2chvDt18QgETz23",
  "key22": "3r4ysgn7bvFQo17GSbiu4L6TDeEGA24rCfr5tZLfR2fgdZbv85XBbbWLAEmyHKbK8TKcDgea5bDdqvvZ6Uhvu7cW",
  "key23": "2GpRx8HvzwQUqQzPVWNjDLyBVPcHuQ714WZ7cGDAcaki1B4kcgA3zwwgAZv7H4Qcj8hDaJuLVBgmeBHPq8ThUqha",
  "key24": "mbJe2Ef8WLj5QYcMuzVyiy6yi8Mgwm222oeh3FzLDAkjc5zoN84me8DtBus3jDTamHaBKR1ZHzfaC8mzxEBZHC4",
  "key25": "4N1V6pyc7ygEkeZ54QszfR2faD7r91Knq7Cfv3hRYXByThtWZNW9UnJGDw7MRtQGEcrG8y57hd7NE7egzfUmUBVJ",
  "key26": "3Sku4HEcdzvC5BY1QGZ46ATLmxXzxkjhosDSJ6zQsp5qGvfcAzPg7NFq8LDLFbih5YEpLsYNz7gxpWd5EdEc8Gth",
  "key27": "3MhjPnz6mAeJhe9T1xTiauMBW8PGiQRmkdxFFd42f5A3VJxT48Sfb9TsVbKVQHCm6YPuzMmxwneYCtRBQDHCMc8",
  "key28": "5k1Sq7QNjs8YvdXiJ8RLQ1j4i5StPbWAtGQM6AhpS3DxpiHbQS5E6dXQJqvB2o7knaxTqmMSFifXhim26o7xxYpD",
  "key29": "4quoLjXDxi3R73xEfhxHmuAK5dDnf4oaUZFjP3JmKrNF68B3wG12U96vhUp9MNAPdGUrqZrYez1QMz9YoivUKqrN",
  "key30": "4BTyP3AQS1SUfcbccxEhJnGJEUdBsFYbj89aaSBE3HFEAM9H6cD4JDzs4uXWt3v4x6gBuuNHukfNH7KCASnzkTHT",
  "key31": "tZNSs9S9fUwH1G5C57ixRAi96YMeGaQcZSM1Vr6mw41ua5hb2PvsyHvD4tk5veaHXUxJUi65XRQZfF5UVbwA9h3",
  "key32": "4X2g9z1tYoLCNCiPRBpMqrTFoSYj8Jg9d5sPEjJ2EVN6qMs83Saqda6JdPEG1MKUTqF2WCzHmzEzdheLUUixbfzP",
  "key33": "2z8asWGUCJ57U3Xz6CQbaWksMHF7NusnHUpT1DXojtM8EkRLendrd8gpSnpDoiBPun65m3yDtNACpgRczSHzKvXm",
  "key34": "bkpXnt9ZnhuwJjuLiXsonrZYDvXwU4Baf5BHDv3BoK6Dp92Q2M3zwq3tuJQaLJCUWj9tpHbVAfqaH7fo4coFZ5m",
  "key35": "2jRsJ4VLxLtds4S1qkTnko8uW4ZCR7dhMsSSqZphtXMRV9HRcGX5H9Tj9SiiB44TaN8v1etASSKDaXK66FLrYh78",
  "key36": "3gJhgKwa3rU7HZS4zgXNvYXaV7xUu7iNUydCJVsbQxD8swbXHLtR4nHPgngoBXpRdeT4HoEJvTK3aGBZnUuawhij"
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
