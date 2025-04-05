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
    "66vr6yQxpydET7cr56a9RyhAeNKjvY3nTmXB7dz6sXsm9sRjVsB7mdEQEAo8eXEPEcfnptPNVkCcxpEeaYD1oX7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VKuZUF1tWFtQ68STqt5Lzc7MWqD2zBN4o5EMsbxDhSbKGBwMbZgTBqBHEHqgQNLFzusvbyKixCEr7JGnTcwJyiJ",
  "key1": "619mX97xnzHHBsW558A8jAbQDEAtZky9Ao1JsXfxhQmwJSgrEJNhybV597H4s3DfNJA7bW2eYARHjWmTTdShVZbs",
  "key2": "5sjQvfiKxvK245kCcBxG588aWavWaPQgFEznJQ7PbZx1rCwVboru9Aw3ja8sQJcw8B6Q8b5WqwVozyWZwtSZq8j5",
  "key3": "oqDXugBYgr5TxieXwckCutmzwGsCrMGb9NhdNrS5s9uMZT3FiBPqMTrHkp5Tj8FJn5VghCup2BzVt2ebkmXpTqX",
  "key4": "3ehniRtVPRJPpnbGcfu8BqbFiFFgDbsTgk8xHAoD8Xi3p7LeRYgMPZxqsrTmKmBuCFmvDubzyuzSdnZ1JGyxwWPg",
  "key5": "45pH9bgkYExBZrS126QvoAtxqapfYZgTW7zMJuNvW2Eubj7UZ3GCRSvKhjLXZPCrisVvPuFncXMjHPoQz2MzKRd4",
  "key6": "5mwDbjkPazvqVCugXJAwjnTKqMa2tVvxJTMFzzwK2xdfAhMp69RqVuHQq5ncVgh9PokrtyAGrVFydVuQVoALF2vk",
  "key7": "4UWSTBoswiZQyRbjK62dwgqdpwmcSKqTvsgeVb6tpKhwes8E6w1V2SpU6UPJh436RsC2ZHhJysJkZsjodGRcsdi5",
  "key8": "2HtVQoMDdmqUFtTZ3HBDaANF8iNAgVLs3WqRdoMyiQG3MgsSoYjra8UrJtvjXE3fAp9MuD72hPTx5HaqRWFFWoSJ",
  "key9": "aTV8Uvixao8chxUpxLgzwjoMdvL8JPDrgn7sLD1JPUZw9Vgq5uxFJ8yhhhr7dLfjxv9Qu9UgDeC9T4v1kzsMPqF",
  "key10": "52Sgi5Z77YeGCttANeu8dR9FBzdXuPF4HUXqwxPxW7P7JSY6mPJPRZMjz43FcFWfuc5LSq9TViZ5ig2G3gpHKPJ1",
  "key11": "65MShwepnWHuJP7GNsaNexiWY6QtBfZmjC2aus8Ce1KGCSd9ZSZwt1AvFgX71kGmrY74v744zd2EZ1KTGjfGbS4e",
  "key12": "4tPMiqFeBKxg8UDZivKV1Xg6pTmHESkhRzBqGeExYuRq6jPZpdvkixHV4wEGohHF34dE97YcSPTYiDtco4KVCv54",
  "key13": "63wjRm5aVNp3Bqmn22RSVKW3c9bFhQQngVC1HL1Hrby1t4EpYwDiGyJ8C2HrCN7pk9Lj8Zv5ruppKYaMagWL9MMk",
  "key14": "3Hb5sh45QxAf4JeXUeyXXSHYAxksZWhK3EcsYdVu7wQfp3nJgLrFwdWdJ8FK3r3B4DaFrbNaJqnEMd4SGds6MPMi",
  "key15": "2FrWd32jPzgqsYvF3YLAgHCvWj5oajVDURwA9J1jPypYCQCzyQFgM9dX9kPnBrpgNT1pNmGGSpmAv652iM6cUW2Y",
  "key16": "3aWVNyfyUYeH71SPyufSXi6e6E7NgNCAGmHKMYhBG3Zb6SydbFPhC7tJg5pYwV3jeshGPxcufeJghgdfz3wxMbmM",
  "key17": "3W8zWXTzSt6cv6Mv6mFDHbEAKPjMRzZxvosFFUSKx4XHXCjWdoU9LnZ3kb8fKXHBgePua3w64FYWtSpXkxmKsMdG",
  "key18": "4sWFvQYY3meDa9cWeCdqVUCh7spZN7zGKnQQ6udEpR41Uw4DC9wX4H7ciKNwj9oUffHaX5Ss1yfPXNU7PFSKTRVz",
  "key19": "5ibkkRgGjVfbzt7To6qnBUT91FxS3P31NDSdzr3JDaQEFyqwykS4Zm729nHaU7ZT4tDU35YXvpNHBCSq6h2DwGYJ",
  "key20": "5PbherBgThnfx7yLpCxsZVpuWpPKRca3wYTx2AkAokH97VtuYAHmFikt5qZs5hka84VRSB1NwkNLu7wZpAg43xgd",
  "key21": "37tCAN3VQVTfpZsSgAgfaWGzdeJEk77nnCAAPXcgR2mhV99FrvMtvbj4sCEuDca1LyxLTDL5oxctNkQGw5b3ecWm",
  "key22": "3sbX9Zk9ubZG58BEAJgSfpf6H3hMVbJA4xDdGquKbk9N86wC9HFb2pwc1VEgbtSzgsU6UTW5UvyLNLTof6xQX4jv",
  "key23": "38T5NywMNUNoDEy2HDr9E1mJGkTRhSjRexgS5PY9othuuPmekdRLkChK74DsairFLGSJd1unto6ivduaCqvQi8eH",
  "key24": "2D2rDPBYtXBmePEPp6XmcHYBDgYSMRTycFeHA2njU3LoYS1ALGiirudnNE7tWJU1yt9oYSqzbCJucekgM2HZSmJ7",
  "key25": "4cQdhxeg8sb2fhpEy7e7q3kQfWjqGJzfyDgfdP3PYAgugaUwv4HPAEiDxDJ7Lx27myVALgFWZePSmvYdNJiajpbk",
  "key26": "fPUcgHJ1DcwztjHHEzvXvB5DFa4gL7FkQYHJwx6wDz7e58aL2fd975S8eXmCoJkNbkDzJkSCPVZpMdv4zPxDeYZ",
  "key27": "TJDm4grAbfdscYQ4gxSmQZg2MPtVqaRfvyKuRmPmd2LfbrrBrDudnsty9rX7bxrcK8myMx2RuAsjJAJ6esRd1g3",
  "key28": "3J6SMn9bPpUW1P6uknpkwCzv5sciiF7nUBGzdd6fLKMJuQHr3VvwfAvwLo2GiD1bQajPeq4Y3queSxyQu2TTt2of",
  "key29": "2jhURRNJTBhcVVUbddMmxbzjiD8Qf8EnHoGeTdngzSWPLQGXVv2JsYcPhFhtB39J8Ke9sxe1a5pAXEbeWDcGNxKb",
  "key30": "2RcWJRmVsRdg4wsyLUpBQ9mKqRt4Vib4E3LnqF3J9fUYsPaUMgYJzZ85KhfKVp5rGpAd9BhCBeotb4hf64Xh15Hh",
  "key31": "Azihx1JaAUSAYKC2LuVeojsWk1uaHRwacHYd8wVrnFdD2kwKJ5JusVkVeLHJEoZK9YUq3xyR7MRj4xokCYGB5iL",
  "key32": "Sr8KZf3nr4VaJZJDypY4wVWrvnR4i8Cc5uoedwrt3fgET7psc3QQoR5FpjsYbWVCZVinLFjBGrJMQyixkXHffUe",
  "key33": "5w2Y9qaV5qxwd1w7hDMGn4bGsBMVKGUuSWQQVf73Kd4MEJELRfQjwUfoTtyguYcBrax9ar9r49avQJwJSDW9tExS",
  "key34": "nvXgJaKGYCSkC3t3im9tV6UX5pevLxbbCmcFFu819Zog4LL2opLnuck4oZ1TtBq6PHR5BP961j6pVQoAevAnWRD",
  "key35": "A9DcpfnGo7Jgz3XZ1jLHfdwzuSC2tNknW6J2Tb7KzAqs8buFbyXtzNdr6XJRP14zJoBegW1YsQatXLFRUCu9vLt",
  "key36": "5246Mh2ZjFGV5CDJscaCNLF973XXiWjyqAtm1kJ2j5UDLTtVa5JcodH3KSSsAHcQuQkTzWhhkBoEnacgJdy4vhw2",
  "key37": "2EJ2eFggWnv3hd55DSyT9XLsHJNEooztKFrXdt8WArh3U7zu8ZynvmgvL7SsAv14yCrDt2gmL7U8pq7UwrhJTQR1",
  "key38": "5Xza7vTPa6RoDpZNgzK2EtnVfhWdLPVRLrpZsBi7Eib3t3p3HbAbPr2xZxjQJyUgveV8JyT9iWy13Fehji4T6VUr",
  "key39": "3wUQH5eFHw5KpDuoj2W37LFeSZ49iRYKvqy5u14k87chLiUMGi7SKhJvT77s1BFbWqMfBc2ek8JjRoqEDhRLQgKA"
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
