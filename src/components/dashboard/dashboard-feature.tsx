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
    "3FGPQmxMYncW9tMs1xHZfhAJThyLfFYjvo3EMaGjzvuiR1BxtUSyipAQ9wMmJZdFpY9me5okNHG6K6XyMF4AEk7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kmd2k6qrL3Zs6F8ohuCdPJLvLvNqSyekCuryaVLigR3YLoiMDyfxMViiU2yPxmMUWjCJWZPGHpqXYtjMPf21h3j",
  "key1": "fSsN1mHS6imzh5yxXzLFp1gENZ3KUhdNYMXxCBCraYCxJ8TLEjgKMikPKiga2q4nXzBooFBpj3zcu5Jdrjj6tcw",
  "key2": "GWwpzZUneTvSb4ehrdQjJnq36wjRzCjzix84fRsjxMPRmT9RBJdTgAyVbDDkLrea9PGnvTyUqdSAJaZPv1ATYbc",
  "key3": "3Qv3TjeR3ukjACxyLj5BKR4xWiy8zMpeBEJm7SX5tE6yj42k6gp7SfUyt6efVpi8xPTttBKwP731aNt7CDM7UG1Q",
  "key4": "5rFPo9HjkTSx212zKNpv4NotCY77i5CSYcA5KandR2CzjSxT13GDH9iYy2tc72XyrE1YXgUxhUpaWvYio6A9yXXE",
  "key5": "9W3gM6o2LCZdv8z69eZnG7WbbceByQ7ysRVQ5ihSxgQAn1f77RGhKiPnVBDWQ8MPRY7tDT2MaWgNPAfGQetfCce",
  "key6": "wY5pcutXLseJfa4xc7i2nMdwQ18Q3Yrf3TSTGBx4vU5Eg4KsVBBw3AfcWJmNkfjZtBpJAXXz8o2C4dMDHrUW2JL",
  "key7": "2DhCbfWUbT3TbA6dGg3Vcjddafp4FgR8DQQwdVy3AFFNMrZ3Fkd7Ef9KAkombbFsCNcPhVGc4ANKqyrEuGWfc2tM",
  "key8": "4n4ZJV94WXN9qyJEbiWrDA1oTuMeNXyeTzgE5UhwoBFUkFbyz6shhHWx5bcRjr19jVRprv39GbJb4dZi9voW361u",
  "key9": "3ZwRX8hodLcrJ34mXcVf1y2Eyd2QQPe9gdE8Ng2RafHR2qep1tx6teGeZvUdZ3h8fmFgr66GJR8KyN3GtXfwga57",
  "key10": "2eJouHmmD5g5HdEcGzUGfyFaSR3DEBTE7X7PfgBnHiijnXiiVWf1GnkZu34TQgUZWJjydfaNRwVjpTv2zJfUbv7b",
  "key11": "rCABY2V2wEzG9A1QA5JMchCi5uaMEgPtMzmJEUmgqfjQ7U6pRHDxixw2Ce3a8oeVDVQ9HpUT3dZcLzbLhEs4hF7",
  "key12": "2mF3cGjT9fJcw16yXUF4Va3gEzonomUDQYag5vd9aY3ZHuZ2uLYKUYAV5AvN8qm2GTYKfMz7eTVyhsXH4CWZhp8i",
  "key13": "31XSSJVXbWLroctNxXtNJzPM3ejUN64yx56UMgfGc2JMTRhUYSBBgWqyPDiLqyd2Uk5jNpuG8RgYUhudvgsqeCzw",
  "key14": "46Tcz59oQG2kj1wHJeRAevXCnacfc2VR4DvvUzJuZ7MqjxoK9Eps6AZgGNnexhz8Mp9Xx3KteFPjHAgeJHoTY52A",
  "key15": "nZWgfeGGJLHyzrwXHt1P16np5uuMkycHVxSkdBbBATNG44D26dgVMCpASPBbxexVh13JkszgcLg64qSi96RxRgg",
  "key16": "SdFuNmLNK7WZQyUToWnW8hLaZ6ecwoL8xgif2socYQFHWxFBJoRD7aGPpCVFitfLnrBBmZKQgx1eDCxK2Wg7LAA",
  "key17": "3GShhgmcYD2rHcVn8VZ95UvCsNURQs4ef9w1DqtnVSi7c2kJXJeqLGw2vuAx7xU1e1tDHAzqbbcQdSYAC1jHVRo5",
  "key18": "5JxFnzkWQBaYxLABMXrKVKEV5c5TQoESt9j9pjQL5Jumc1UvDp7K6hLyxLRNwPBmoRbVbuYwxVhoX2x7U6pUFwEd",
  "key19": "658FAFF1k8FNkvUJymny35xwHEYptWYGY8tMBToi3u1fjUvmwhK2o7qaDKH2UHu9KdD3m7oGM94W5n9wYCRALEiM",
  "key20": "3HTFye7apvnyFFhi1N3s7nPB9LaMPxr8VEp96NedeeENC4rF3akonReKriwfmkwCUpcJB25UKxb4pW9KNdzSe8gw",
  "key21": "3phs8WLQP7PtN1Fc1XsTbdRLZ7cUBK7t73wLVS1gXB17VarNAeYSexZWDHEeE4ioxwW1gVXonwXYJk3rJGVdMLc2",
  "key22": "5RC6UZ3qzvs1zTPbdqAeukdjvgiUcHYNBmZnk8SNAQHq6pSeXSd3b7fQNJhStSosjgrJ3MprhSszG4b63KUdaTi5",
  "key23": "3QKj1ZjDE3XWLqiorzkcYXuixQe5sZYKuXm7e2ZJQRAmq4qbvbr4XfPVuhWxk7gyGiFKYEGTztA98JbNDyfcDFfj",
  "key24": "5KF2vgzxsr3rEeafEFXXo62ZWLDFPhuojw2UMy4Wutv9GMNpNokr6FfdLwq6GjEuvGD1N1CkkRG5tag1dutBxiMz",
  "key25": "4xr7EzTSDG5D5gVMCygwzEHNacfaxrxQiMj32LyZzsqVoCnqfVQJu5GPMBPPH7SXTn6AfRaq2Wt2H1wRWM3C94jT",
  "key26": "548WrS4R2N8V58FP71sDnKhL5MxFctMUdmrwFeVuJuT7kMDK56VqT4WCqAeKmVjyRpMfSW6SsxrRRu7QJXkcs5M4",
  "key27": "3ouEYymSkLxbHdrgz6RcdRZ276qEW7jdSBGNdDiL6E2dLkNsmVmGWaR4v19wfHEzmtUgeadGmy7ijNsrhQxrQLFj",
  "key28": "59Kqkz3jnYufkUz8svbQCrDn6NUrT4QYxRGqaUaZezg2AXXKQ1YzzGbS55DxyfyeEjUgFjTDeuEf6iHS6BrXRuyE"
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
