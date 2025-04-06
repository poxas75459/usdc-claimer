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
    "1hCdwBqxfgWkCn43TP9W8t4sHoKqZd4iEh5VMhkJwy5fvyzhPQ5C14nyrEMkbWgVDbJ3V45NX5E3jWNpRu5c2Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZiUdnKfzcmGF9ndPPQz3bvR6n6XNPy6S63JqpEH1ru7ZL1ygKb8ukf9wQwkW8FzHA74TJVGjs6nTX1Rb8tekc6q",
  "key1": "5WCq7MgCnXbbne1i3CB2pHLvdW5DUfAfosdu2SXD3ckaNWQHU8pQfHu7W4uTVzaexL8j1vXk9u52h7sJAJGMEGLp",
  "key2": "4QJsRUTwpM9hCtSx9FjPFE8vA6Zbc6WiHwHg1p5JTQGUzCfNuE67rUqkvkwjvxap67CyVCGF9moNJbkoS8xTuRgf",
  "key3": "2b2vWxG15wXvrUJRn25bE1mtJLZtDbaofJ4myVhWsfaU6WiJibypMb6myajMRNboU1cEEsPQupTFFmCBdPyWQMzx",
  "key4": "3bFB6dmNQ1SzMMrQXaodGS6YgQHvKNSCWQqbXm7kCZwzX8jgaE5SHR9hRrCXtGmCZ67UenxzJSwGXzdqEZPuKhNv",
  "key5": "394iLstQytGqNw9kv5N7SBq7duR73HDwddQuwHUM44SutpSxREsmvfch2QAy3Vx1MRnUbQf8kKVRVC8hrGLcWcG6",
  "key6": "4KirtBnMwwCEf9L7GYnA8FYSKeoKt3ucfR5rxCJL4fV5NATSjpuddTtXEtUjpxDFKNwLXLDGG2i2RKJ4CpPyL1z",
  "key7": "29VQNv3QhkxNC9DuSehe8eiTgWU6cBPkaanbHUJUjmncKhDfT9dssxuPfz4ZtXLA6Jj6kZKzogwhZWkdTo5DSkn9",
  "key8": "5NpBE3iZw7q3xBDB4ftk5GfnYQYnzE3DJw5YacCAqg4MoQ5uWvCkJne6UmxaTeVHobWC5RGbowKZ5Yb7vLFnfw7y",
  "key9": "3FuLFQCkdF6odsc99AsugeoVZDPhvsfKMMsWP6tFmLCDssF7LHhdp5CKo2HSUpo5KURsKBBh87ZuLx3LimDebGom",
  "key10": "5zAa8ckBAzEokySu6hQv3F6wjnhs4Jbg2izQFeanTADoS1ZwCHn1K3sKx8ygVj21xwiDpcXbiaJNUd6F1CpxqQUS",
  "key11": "3riJEpfeWU8Jrc6zgVTuTknsWot56whU3PbPFbpeRBX8GDZAVwL8Wkussv5Uz8NZwcvi3cNcSb7TjpZLErhAtkrJ",
  "key12": "3oCcNHBAffMzSCSvVzaTybpCQNV7Y46uTnWPXfRqPhUue5Wv7eXLCJwo39ZJDVMHKE22kQRkKR7H6gCYwQP7oAPP",
  "key13": "5SMUQ6qNFGMkJxbkkVkxjYFEn7jqbT4N5D2nwFfsxE4wiWu7aeGVV15BTP4euM9zyDAxUYHbsvLHzeD8nmmNuk4j",
  "key14": "2VyD1wCv6Pep1Tm9n16GwfhKsSU9pyZTrHaXX3KdRh4pe64XJzqfJjt3YvvPukFWgBRhpyRcUMmfBvPtQbTVAVqY",
  "key15": "45VjGXnDRUpHx6qNRTRpBn6im1P3XKacQnVsLXYsg89aV7LHSi4uwpvr5pdrWa2DLq1T5AGWh27VKFrqiRs7yimM",
  "key16": "aYVSDHU1BXu7JQq2LKiRmi4BSnBxQVAgNJ9S5eusC9R7Y9wdmfBaNGwcM1A4U4HntTAnbZ5ukZAWjzzKecCooMs",
  "key17": "4n9r5TaYda56YhaaTVTLHhxEhtG769rm5MrxWJqSd5M2YPeRQni9kXevZUnb4ytiejm1gy7jNjudY5kjd53jqrvm",
  "key18": "oc7Kmujr1Bt9xbgDZuimQYcHpY5mEymk39yq4nK8Sbg2rNQB49hCpTDqggkG492EVye2xjmhHhgHusiF6EKacP7",
  "key19": "3BVTLefbaLwhRwGJJRJQTEW3C6TRdpNhdknM22WHGXrnCgukSKDis75A7Vy5cuvBAUmVwF96QrqkxEKQSBwTKR5i",
  "key20": "4q9maCoj1RRqUw11ubxszhJouj16Rtr86xLjiG69v8BhNaM5d7hZYEiNBxPKeZXpE98L9CjS8psuHx2NRBX8C2ma",
  "key21": "bZYFnuoWxAfdFQTT8q2NWya2Vnt2dXksuzqZ6KG5TZyFpqBV3CtBMJDVCVRD3PmNKknNzN7b98xDKWYyn5ykmWs",
  "key22": "3jE4z23FuE181ZhTpemSudcNk9aNaTtfYgCb3bGErTYTZisohMj3Tur1rCpzvmGETrhaD65TNniDfe6c8WcfZvPf",
  "key23": "2BY8vLdEmihAoNAemfUUSijDLRAxgz1FkQ2Gcu3etRPfdtjtzwXWCjs2RGesF2VvGiC2jMf7uFUSFZvZLFUwPMDJ",
  "key24": "3BUrAe6PtpKPbQVcPb4kcUUPfbjW4FJGCEsLKWJXLdU5cccpGCR4zcsLLHd6q2z2nhf9Squ4A4d4DLTaRBSAKVou",
  "key25": "WUXvAwL38rS8gqPWypTwn5aYyRkGeLynCMdAGzxHFf9rvstztR8EtPFE4i3VTYS3NZkuMF14Z1CVSFwnLpyAMxc",
  "key26": "48KxiY5kqSJSHFN4e2io7LQT4BZdZCb5579Z9VtsjDcypRbHBzpXfh7GXBaBA3nW6EVedju9uzRguf6ZxSmD7PFU",
  "key27": "5cw3i5wsMcAhhrou6842ocPJVcFmBk3Pp9z7EwmdwfRf4rB9ZDx4ppvbYp3uvCUJubLqZGTdpXFAjuZVP7CxJDKH",
  "key28": "QMDnfc1w7eTHr5CbyxoH3tWQmWWXrT2eAv8RLY78RdQPLbeLdER27GpxxHPnqBqsSUsDZCWCJDfZWWQdFC7YK6t",
  "key29": "3sgUxxkk9YL5QRT9Fqokg6BMkPS6Tb4ArbYWkY8eJJSzGDP8nrK3xyFKTkFzP4v4FrG4sSMjZkkB7G948z6A1gMx",
  "key30": "3wZevEjh1uPXxBFP5urgDSkUQpCReGWqyjerqLC46JtxmjnUt7nWffMwwctuFiYpiTuXfdig47TcshA5Zmsk1oLk",
  "key31": "5GdJUPRXQg94Us3yiiMd7Nd9hu93bCxYnAX3cY6arotrfyExBpUXLyWwdv3wypRaoJ28WWkL84Vhtmg6PF5YLjDW",
  "key32": "26GbQFLbEKr47SYWKC4M6iU46q2f8dfgPKiEYJ7z7pqUgv6QdtmJtoYfSPP8cYb3ZKFXhFnR4TW2Pe7uj2girJUQ",
  "key33": "5YbFRZrA6NategH6DrZJrTkjVW8zSpeG6rNfzmtyVRiJMvC3A89PUTBQF2h9iNowvAnS9YwocaCNdSbPGRpFgbSD",
  "key34": "3q3ZXjKfAeVMgiTCKeywcAfH72uCbX8GVQW5qkfYdWqDfgF5BBU5Uwu8DuupEGh7pESm58u5hqrULvaX82jsWSq6",
  "key35": "3aXGzCnidpvpMp1Bg9tB4S6tgv3y3J2ng5Rx9P4ttbBj15Uiogxk7mqnAP3LEWQkEE2NXSqW8Le69qTrdThoriWr",
  "key36": "4mbqwSEreg7bpzho2dwJk4rDijinyFnybpAaPhjUD1XgJGQyEpWdTqvaFeM4NCM6Ed6nEum81CZZ4empVkn8u2Ja",
  "key37": "3WDADcqSbFWdkzAmwdt8h1pJ8SXC5g84X87AhtLK8Box4FyFfQav4rB6TPAMbn2LDQ84eUWk8pAhYZCeSvwJRcXq",
  "key38": "3oDu7WoUHVw99C69niboYeh6Q2LuM3Fedg9U6fvHtjpeJ5mPURN3s166SZWht3ktKrQeFatakwpQgfDzix9h1VRh",
  "key39": "2ouYz2FPGV4ezLgX6PrVnqaJv8Wgghkp64G1YTcMsXnMsUxCK6y8x9Wi5UTnEGx3XRrHuJQ4qiGrWqmAc5CaRrDC",
  "key40": "iqCNSPsVeizrHxsQMhiWxJ2UdrpFSUat6ForB2Wj2sVjyVQWGzdjBB2BQJtiic1chjBmA2CsUWb5atxBhWbZCM7",
  "key41": "Cv4YwC51HAR7F4Aa7oY6cfv22u6ajekKc8APJ551cJem6vnb6CiykRC6nwny2NxfkpC3136d6rdPEAVvW8HZWci",
  "key42": "5XaA4HnvdnWJ7HMxTAxwbWV2YVRdWzZuUQDMrmxtSD9Qhu6k1YXs2FXoGnU6SJuriRXBnSskbFyBSbjQZ5d94HNU"
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
