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
    "2tSkdbZm8W39bjKaDMHJVXoVHbLsB4EpvQdSnX8mrTP3UixFGgSSFKD1txcwNthdZHXX9ejQbYYwSqZ2EtkPwvWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TFgWHDEvTye9UDVYY1WQycU9PW9872yZMymkGj7bRdGsnqjgcS9h3SzbMhH5jdkRFXKcLzfEkF8938E1u31YnSd",
  "key1": "3xcSXuaRFFKMXKw7dzfP6Cfd717UMhPbbibYgPAvgb7eLa4NgUHvwuiN3R63Nb3kKUZ4wiNGW1HBSJAraQfKprgY",
  "key2": "4GtJHk3S4vNW6wFmtYgF5L1knTWr2Hvsskyjfa1Xfc1hXBhdVgECKo2tsjjfSVRdvKaiNCQQFyxLcdMYkmHDGDE4",
  "key3": "25ggH9TNCDZMMNNKVBnwYYtcsUeNgJw3zxdhXSBKAd6WRp7UbcxA5dHgjNkgjjvsfHhgd9J3HwEU3ALrjpSXRFzf",
  "key4": "4zEaasiNhfKkSYAPmfNTG9kFEzjCVt1Tev1dp4QyFwUHLXTCrMziASA8S9qfKjW4SWYMsVb1GwSwR95xvHhwHUqh",
  "key5": "5gsJd8CRGyQMRekYYsPZgEY4NkB8dix61Mb2PaQGPcXA352jniQH3mM6FZSt79mRMAiFobdwjkhVN8biu7LmhbDL",
  "key6": "3HxN7c3VKp281nLaKm2mYXzpR1VNdfbrMXGURKKawFJnYczhZ8Dqi1XJkqMt9aEMzCKfoRLC3efqH3W2cAcYc697",
  "key7": "3sCTZPrNXjiF7iFKWUPVc8ewR4VpxqQVbYMbcZ2gjXHoQTr6Dz6jMwSuG3cJMJdQqqpTPJmQvpxdiAbnTZzCkJmF",
  "key8": "3BKDdiJh7jzhpURcWe4NcYzQB2MBdNzsooQzopCfoLhhU9gWJFEw9UQ2ZPhxU9n56uCbAX4jWmtx2WVEt9J8Hki7",
  "key9": "4xWRh4ezB2MAhzazq1tuXae9NN26fHbX8W7qanC8ThoiFbTUpc4WAiu8392TpC4FMXMqcgqgY8gHRsnupeN2jkoj",
  "key10": "2qsMPUshNDLnxw4TUB1ZRzpnA4i35GfHK9tqD9gqi7sdp2as8Utzgz9WpsusqZ3bQGw7o4jCxjC25Q4V7dvBmZUR",
  "key11": "5iksy5TqnDy7qc8uWU34pygkCuNdEUJJB5Pwbmt2TsMKQTuN9NAgDVXv3dPdnufkcgZxwx8uxZH26C2zHCs4USaG",
  "key12": "2nTRpg1eNEjrhjDa7JDohsKsFHJbcPLAZtMHEbcDdfzPbVFiMSxvc69y2Cyw86qk46tEVTMF8hygy78fA8Rgb5EJ",
  "key13": "ZHr1gHtBpmsD1ysiC37ZPhSsEUCzrEghaxxkic2FF3v8PPeRu3uhGkitLQTrzUpXqgyWjCoXvPNSfoYikBhZkHX",
  "key14": "3AuhNJ2fawioG3Z19hJojuX73jQ8vw3P7MtmbHDtnqgTQojoWi8u3GdxhSsT4bKw9qbj7PxNRbdZHYi61nNXgLRw",
  "key15": "54qQab6Qrykwe5edDqCVBo5yXGb1DGJ5WEQaDesRTca4v3okC85jbZaAkDgETbE7gvVzpGyMd87Py9JAxfQp6Z5o",
  "key16": "5NDbtFbLvkn7QpN2HsgXuVgvKoigZbF9BrWovJKRTBH9LEdLPewViQiiL9E28vJznQUhou1Cyw211V9S3CcpnFpF",
  "key17": "2FwCq7ZpKcsDLjYvEjBh4JLBSnUct8djqmokp4GHVf8g8VqbEhnVNwqHWqpzihY7xNqGKPYabhRqh7kQnp8gg5TB",
  "key18": "3EDgW4ehB659GXPqLJFhugdp8Z3jvfwenD6BpuYC9fVGVKHQq5M225X5stxPxrACYdt6cjECPTPG9bfPKsNS3Lxt",
  "key19": "fFMYxLZtQSfJhTPPXqkkWmwTF7hs4Xo1ypcKtRUi7VCKd8yDqWs7hmgDc396ZwDvAbLCxU2WwGXDCzRrzhauV8T",
  "key20": "5eScviap7jDyu39JhoWofKXjAkd2tKDKrwEZbe493T9MdsiJoYcaHrrXJCuMYVw255up1ZVtzJaEY5oREQEnnuQK",
  "key21": "56413Tpbcb9GqyQmxXJSxEzxV3wkbXbvboK9HXY9TQC9PTGvrSG5WGjJ2XptFVKoiwJb5LAwu84npnE8THQNdoye",
  "key22": "41oztj6ui956TcJiVE3SruK1Bkq4bs6XkBj7xsiZochxjkU2grLkhwK5W7GKs5m2Hek6Rbq2ak2J9NyuadfYKTq2",
  "key23": "2oAT2sjkmufK246G2YZuQK2ZRkeiFurtcongnNeZMH9NVcattvrsoENVu2Mui1G8aeHPujRR357ScfXXUwn6Rw1b",
  "key24": "4cGzUJvv8YahtAUWwfTBygnSRDJxpfau967tbjrn1sbVzNBrg3Yr8QGLQHhWujNAHbM3K8nJ8jH6sEHM6469xnUQ",
  "key25": "3bsRJrqzCNJmPdeGhMh2sjiBcN1gR8s3KHFQpfYRJEtAVcZuJJ7nh4J6BPkpG1jHRUczS9guvpAiiL1mNxhSZwrN",
  "key26": "4Dn3czGTLgSMSFWP2nbHJqXnJcarAhiZkfUXA75EQWqiYYt2xx5k3QzK1156mJVZZXxzUBypHqjSvTVPjmMfXkFm",
  "key27": "3Hrz35NUd4HpbsKsbTLYiSByKceBEGVUW8a58FfE9rCAn9oaa9fLxkVtn8BXmiVqcLqCowkXgFxDvz3E4wp9pTHg",
  "key28": "4pf3YfXBjMvXwkSuQZmXeE2FMsyds96Bcf8DdiRmSo26jRiSHywDVkUqhNfPBEXYyf8vbXtSrb1KAYN4H3MnLCJT",
  "key29": "4wkFtUQwvC4CbT23hZatePWkLBM5St6Xm1FGFZi3f4KNwUi5pmQqVKvApBBmJmUbx9ib7XsPHowxHfHzaZzkV85C",
  "key30": "4wXvBw2LCX8J23stbEuhdsufhodqhUKjK4AwyuDqxwzVSRSVUvAFQcFCZmaPo8XMEyKP8Y3vAUDD3PiudptBPayf",
  "key31": "3ZNnzWVemaTx1jduBHdMb5rLrJy4G4J6YSbRM6zz3PWeKhjz1EeGQbgpXj975qvcemtMTfcSxvMoew33eKZuXk8w",
  "key32": "5S4W4j5SMA8mSMxNmN1hYgQSX9D4tdyaTuNizN17ZbWRa3KrjsTArY9SDF9vPYQbiFTXSA33rh1E1KnWrp2hhu39",
  "key33": "H2DYu3GXrPfFXQLsc99psKM6ms5NdRaFFDSiY1yATosKqR9YawyF3ZPK2XUwvnhd6QyxLXxUJCMx6SXGULmeThd",
  "key34": "3UmDpH1fS1C73GzS6CN1WeLJUrPovhSy6uhptrL7GZJHMHfnTyzgCzPwDg4wz5iVYn9KnfP8svfoDAeq35RkGG1r",
  "key35": "2ziJAS4Y8zKShTsXkJpizPkYBdmXM2M98mxoDF8PvPp4azmCsaMwQ7PsXCZJW8mSS2tBGZ6mdpagx3qMbKRZRh7p",
  "key36": "3r81frbKxH2wZpvqBe1KAyumV1d6fimumPC5iYQr1ZaBcu67X74ZFKBRbQg1TPverHHdfN5QioHmpwLzKcjNXNfm",
  "key37": "23opE2BuUEEDcwpVrErWrdDQEzhsR5UVmr1LoDCTkj45CAYGkjFCggy3Tw3AZo2JhCGtzh5cjAYYXka4qrfdUt9v",
  "key38": "36VKdmBBDVGCrEce5ppa7dxPCsWenuuSqDDKpJvh8JvtGDbrLTZT31TAjH6opieDKrwFcuJuwrf8je2CWnD7s98N",
  "key39": "zQ7s9KiP4ZyeTQqLB5oQ7TsKZZW1RW4fmGjw2nGZKJkz5m4bg5u2aBQY8McdghSfHAtNT6Br68pAovUZvVMFMqD",
  "key40": "2cZihtiE1DhnJoaxKGFqcm8BjVSArfP6sXjfmu3H9TKzik8imtEpqcpMT4YdEVrLW9bjQgd7CdmAYVt9Ej4Qvcft",
  "key41": "4Q4SYX7PMGKcuXD9wTiu79Mr2g64HbeW38eySVMuZmfqRoL7x3GCR11Hr7CzrQjx7yy8gvVwh9ZuFbhMPtrim6D3",
  "key42": "4q851qK2Hk9Y75QKZZvco8nZUYMHrbqYWebMKrVrFTVAqSkH8mjwt2Sw6uwWZtRB773g2qY8rV7jQ7tFHUFZpPa4"
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
