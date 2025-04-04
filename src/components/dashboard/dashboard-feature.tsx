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
    "Tx4AV5sFQ6yBKpxVnYNi2VZvru9ERpaPzxZuw5pgfAGia54WHREyDsw68VyhaKjNtfTQ3N7FyVUUjrRrnhC2eGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "diPLtyAPbe7SBLrDnsgAPkQe5ynR5wrxNeNRze9uDbkhy8p1whW81HzFtG8v9KkXasyu2T9tAThFQEocwCEYLNU",
  "key1": "2eyjbLkA4gW9sHUSpnp35HdNZQ26Lt9rEdPinPkgJRkRjrS8ECCNB6UercSUJfkddYMjABhBiM8GesQnjTmy6Mde",
  "key2": "5CoPdScQozLaPrtkhBikMqioPV2nY4tHaoU5jQjwicG2fNUPRwKozEchX5Mv5rxoeboB9v7fe71ycnZ8xm7DYKH3",
  "key3": "2QuexVqSZPpZaDT6ZFU1RUBRKSNhvjwmFekrzvjkjnebEDcTJd7YBoTi8Zndbx4k9wMwNf2drgX6yLgjG2ADtUrG",
  "key4": "2UKviT3ZD41nGT8U7eTVFYAdEFZw8M6CR6KvCmPehQiqqETbqzjenVu9c2CCCjyu8sMuXKzV9p1TgXTRg8rQuv9p",
  "key5": "2d8rsXmyYjCqaaj1msmymHymiLs1RvwPcwXs1gbKzEif2Xb9owc75ugA5rzADFhpSjY9cEqgVBNttbDUMGoCpoxw",
  "key6": "4sxFhWrp3YUFLb3E785A45GXPHCovHga4FYbWzayHgnvuGZSWgcmHpVstibeQVXzX1voCz4KdyV9zgdmG3YgJYFR",
  "key7": "5qFz9626EWCuSnXGL7rCGUq2W3NbXAqXGdUS8n41BZZCxTirphzWovYtdtd1Cb8v5LWNHdL287EHxZRWEupMuPe2",
  "key8": "5ocDPbPXhWCrnvoB6Y66pDF3xjH9cBZoWngwisE3ibBoSV5ATJGviKFGBmHyQWMjgrfBb3TgKAnTKiPCmryycwJa",
  "key9": "3tMqVAduYRAoBekopsca8MrVPfhNDff7PMS5HYjhVTkGCc98SNNbRoAwDhrwpgfnGsJCYhcidgnBvVp2VKUgHW2s",
  "key10": "jDnJLZE6ExxvVyN8MSVTP6RhkRBuWmZL3b9DnUkuqeA9VeakWJnPhgnE3aJBXujS2A5oVmxvokus9r83AhQmT2p",
  "key11": "2DCom8dBJpxYMw4c5Pr1KKs8Ht1eEKqByp9E7xY3nvBmrsdj4ZQrdC3r35edp1BCA6LHYWRdpuQydfrt8PNkzVbt",
  "key12": "2XQckfThEtsakdvgQ2gU7tjZruhttprAMaPHbtq7DNaDfSarvEqSx8b9cEFYTbpQYAEx7vC4PjWiaPC5ZFZySg6j",
  "key13": "2svDhiApKVsS9dQUdbLeHYQoLH6z7k3pPr9MKLSdB1ftofZJ2gsy5yLXNehjznxiG9atnCUKLkSzoVBazfTUrYD7",
  "key14": "4tgGfyzMwkJUfKZuR2hUq6HrWEnG6byVPjbzMs3Apsj96KgfbAmFMKyv4JSW3dw9YnAZw9ot4AjRkifGcpe3SkcD",
  "key15": "2QH9nzhSPy3cR3kQ6E9BHPda1QNzX5AQ7S31GxUkJWEJt7RRSiVcCKgUEsActGwbX6LV1smpwNL5w4NWzdgTq95b",
  "key16": "Znas1e2rE4EjdTgDE8jRaoK7o3PVHahXxdKFx59WcE4DrbkiGhJQfbmmbi7c9CVNJWYX6g6zTWBVXp2FSR5zNQw",
  "key17": "3QxDz9HBZF121U72RGcT4WUBXpXBc36p52RCRC69FxkQsv339xvY7HYh1c4H9jeAPZVBWeZ1ni4LLfqdzLJGPFw4",
  "key18": "2yYJ2nBCJtPtfCyx21jjPaX522FVkNZdsnYxuGDf2FLAGm59ot7XGV4fjxmE5HngsPnMTEKVr9eCCrnJfCH26rE8",
  "key19": "2yuRnsWbjj4oxnW2NNdqtkQTV4GuxKbh1AQwFTm4VdMTJdgot2fu8NQj56aUZyseymZvfEr84RyRAzrbsHHxb7bv",
  "key20": "3WGc5EDUjxQWF476jJcPCsskTWfa8G7Lf77cd5tyEGrtreknvaqvmBMZJzQUZ8xygbs7CXRVm4ZtEy8gc9r7Sjsc",
  "key21": "LUtgjtWwtVr6frGTKJV7kj3BQ9gEAiNsA8DEtfDJMCUq4LcREtKng87sFYUjaVT1x98qt2uPYHyeB2pBDUmo8ox",
  "key22": "2W9z5V9WwB4NC2VuANATCjgooy9BZ3tWFzuGrLWDF3FMz6boqixNkH17C4srjKmGS4NtBWEv9m9UfEiEJ3bVvpL5",
  "key23": "5cqhDDHnYksX39PBwNPy4PApMvZMsJuK9bKXLNyaw2qewR4CK62srmEjnjvdRMq8TGBtNnezCZy2JqZncT5FNEt",
  "key24": "5Up9t5jZxucwsyxTdq4LannQhj3UKaKjw96NLkVg53syrwPvLRHWU21Mrjfnix47rBuw32AAP3f4SNbUxBqZNPq6",
  "key25": "3o72fWLTKmavvfUfDFsgA2168mAPKP51PpYuVi8EWwaFnhTfEjVgkqYPgtuEkDh3T3nPFJfpoeQXiSBpAs5YAgMc",
  "key26": "5XJWL45VR3byrSFmgrdhL4hfzS3U6rPmKkAEcnjEkd18KmEri6YRoUV48mvBDHVahT8eqWsPTDe3HGDAFvnMmr6a",
  "key27": "5t7FryroBCsBkoyNPvu5maNVi5nk9N8RieagMgrhmHz96tLzBMfxUZBUeKMtWTsc4mWShXpqYQD8SJeqq9FBfvjJ",
  "key28": "EbUiNNd17TqcAbeTbeX7FdUmjnjmea7SLQYmDwKxYciUHEu2FpfZSpFUyzSo7s93ki3XtRgJosqzct9tZX5DDcN",
  "key29": "52uddhgYRP1gR2puJE6qXNtc1QGnMVVtLySAdPidqbh63E44vDAC63v3vqNSg9whNNSugwD95Hz2LUCKAHHpygHG",
  "key30": "26Q481uDyzLE1wAeMdrhqGBkK4wRuXTSgPvZuajvk2m5EHTgo8YVsbphKMY4vGYgKuSQCznDoNBbJYMsdxrLEzDR",
  "key31": "DTyBbyS1RYH4MJnHM9DJEAAwSncCrVmS6zDjwSx3mMRTFaXn1117fTK9eA4baANBifjFq3UySZBWfTEmFpjwSaw",
  "key32": "61i11V7hqCKv5Njnt3MSu66gf7Y3tK4J5kwLNZsGb9FVc5my5fKoL5VZTMujyffb19h5Sc61QhhxCTYiN8n1BELi",
  "key33": "4G1z8MhGMgHxwvuNq5gjLmTjfCTpeL2dmrWd2vQQLXBMZF14kRmCiDvKr97AvKocP4CCrXLuCHdxbChPg7zEcQ6S",
  "key34": "2MH5hazuo4EzTzJb6yS1UWoK4XULRJm1Qeta2j69ajMiQZtS9atPi6Co57RySnB5Ju2reMx8r8bALsiLApjyA7BU",
  "key35": "5ETsPc6aiFRNj3BErskAKiTtNv1pB7Nid7efTjpBoGKvZtR9qvYBYELY8t6AKQmqjgp1ZCQJWmJXjaN9WUfxitxn",
  "key36": "49qoBhpPTTkqF79GQjyut8fJMRy6QPch57X4baKbhSKei8nf8ria4UcUZoZJfEFKWDUry2Aibveju5DS2mFBHh1",
  "key37": "34ir9Baw56qnfNa7bRLCgqrUZNjfst32eonhjsG7QJci1AzXc4Qoaeiidkzybu1rP8PtKCXYKWdgmmE4wcwpepY6",
  "key38": "3DocvEPhZZG1iAfBA4RDtyLYZ2KuVY7SdpubqqxQk6NuMTK8XGjT3Lr6LAhoYCwA6nrt3FVDb44ZhzkQU6YWuW36",
  "key39": "5yhd6sqL9Vb3rS66S2agBaDqUyEZSZG8GsD315kfWZ7MxLUJz55iySVm7AUgeybjQkYPH1fN5qAE3diFFyRvFaNS"
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
