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
    "fQw6sHXHTbbZH9sor8zZirVN3QRAjjnkD18LcWJdi5PDygRHqmJm4UvoVWP8SJNSZFpAfkJysX7tkoD8fGnc6Qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52953LMANQE9EAW9SPgojVXiUL4zQ4b7YfJnsgJBdarCd74SUsFu3kMyXp22RtF95sWLxVV86xBktef7hsWNZvpy",
  "key1": "4oDQw9sB4HeBJfZfp3raswpj5BeU4Mw4fZjNuBfghHJf7MhdpnSVHZ9abLYnz7urpo8Mz5yR8CVNcHQg7vLiB2Aa",
  "key2": "t1HVgb8QQZF5F7wZD7boc5KwLdpKwV6aYD3eY5NqdskKVDN1CY6ghdoQA9anNk2e5F86kr4sHw1w7hVPy23e4F2",
  "key3": "XXjweCR4f9teBBiyTnqSrhLLkARtPrvKYEgRmQveT66rsmiS6BVo39vcTjnKZkBP9fuy6DZ2cR2sKH55iRg4nJU",
  "key4": "53W8EPVNemyYwwcx6HUKMPsmzVrtXSHNbXHsgRoHXNohRp9oNTTj5Fxq4kS7cvB4r6tQuAqgPrp3TgFmzrcZeMU6",
  "key5": "51TG6vBqSMwb6oW77SSFfVK9xmKei45wJsQbpdMarUjCptKD8NLQBdnT9jUL4nPrG5A3DdC3YUSAGmrGLyzLVmpM",
  "key6": "4rcrh8racUM2amyzCNrPztKzS91BfQcUNRQPn5Vwzc61aLL4Z8KyWFJNwvn9hrmdRLcQDFgnktUScsVMFLbwwxVJ",
  "key7": "GLyqYDmgAdcJT7VM95Tk2NYRrs9paY4fxdaC1SoLkpWDbZAd8ezMRUJ7wEibtahBpBdeVzZ6YjuLj4aJxXG2Qxp",
  "key8": "Db6yJvDP7oZRx2LpevEt1d7v2TJ2QsXb2sG4xXt1XcQxY4tBDwJzJ4wPvBBuDAFbzeuTrR8Cd87dHxS6sZMfkzF",
  "key9": "5c6j4McqGHJVGnViMMdUjkpA2H12aKR9AJv5p1QSEqvYpbURz3h2PP4eF3RYq56npUcPxpcZKQgAh73DCr9WBi2B",
  "key10": "3vC46r6Xby7xRzy6kP5hBHRKHABECrMox68iVJyMeUEEsb9tA6cGcbNg3U8GCLYp3B2R52UBFMetvvC6sWFX8R4M",
  "key11": "3QBrAgTQo4ufFe5dwmeGaCd5c1hF7zUCQee3TD5okVVTrhRJ6ZnsSDL3BZQ2ssUebKSJ5PSbxGHKX2hexgoBmTCp",
  "key12": "qw6e4ZstwSXqJWGDyNNdDVcddfQG5bQwVuTe9qrgAeEB7Myb7L6nMqpvkHpqdCC1xmaSeN72cJ5yyzeWiRhsqyG",
  "key13": "4LMHsiywQtXX1VDHVaejHFq75XfQeY5pqcE8RtscXxVjo1GQFsJUSuj17VDXsW4ceh9wRgkp38UzmTacQgK1MDxC",
  "key14": "38DDpcJuo63vPbrquQPZJmJYqMXV8ZgVfJVUrHjD8UrYdEAwq2FDyLuGUn3jPrum1sxUD8q4ygpYmxke82Gn6Quz",
  "key15": "3BrSzCxEKaiY8kTU6kuDPvbosSeAzW8yiQ232wvdM9KewQjpVqSZ3zJZq1V63roDqaPnmKQWyb1UgjmL2WCMBx1T",
  "key16": "5fC7eDfeKetuBApssWEcYodJ2HUABuf7v6is87MRYDNHWaQSHunjvXkFSmLNCSpahwUVmyXsTU8RgyitguiabLvT",
  "key17": "2pdzFBLfa8SASCHy1nEaJEsNfEDXhYSa4PMkUrqdfygLtUCDyDa1YZntrjM1wxbqbKdkTp2TqK6EtNv4oYRRJv5D",
  "key18": "qUA8kM2qTryZhY7n2zR4jZ2rFwTsWnUieWNfGY1URdMjysiYwVrfN5qJW2pgRYUe8KriWEeoWKo1Y3HzBNPe6R7",
  "key19": "2Z1EfPd6SUrP3Kb6nHRTFzkDJGXcRjze9PG8o2kDKzQe4MMpoeYNcxUYhmnY3wjzQN6pnrieaK56uvW6FdUpEc6X",
  "key20": "AeMwCeeogf4wmfjMcfUq6q5uzjrXrJut5y8rzkWLXFkm4zAYkSQombAtn6xPWFB1N3Nnb8sETmYShv6NjTh51pt",
  "key21": "3aJg8WprJYx9RWtomcJHkPqfwTdfFQRtG15chD9t3mzBzykfthZ4uiohUjbKV4t2MqxoteMcZLkbrixandFuo7Zg",
  "key22": "31N5tYRnwzKPNwFg6Kus7tuhpvxADHFAu35AG3RG1PKRJhfcDx78MF8QoAcybGC27q4EKS9eq1Qi766bcUMAGDmZ",
  "key23": "i6LbuthbFye8JXa7cnWFgBJGHUPGnRE5Hu6byZEAwKjdH3TsYTAFH8JRkEEAw3dkAGrLrs2e2Q7A8E4o9UytdCH",
  "key24": "4M5vniNbDUEzQawMPc7XVV8cMiz16FamFzRVRLQKVw4t38ESMg3w5oVWqtYjzcuEAVx5urdvREPXvV6esJa9VrvM",
  "key25": "L9cZkApgvsgkcL8fuv5aTegFeCfJd4pzCgzJRRRYXYxA6EgPwCkJewuP1AfYwn54qsovpG6tVGhE4W3HwSr7V3J",
  "key26": "4i8uSefjD7udZhqJBrJnW9CTfCQPBBA6W4P43bRzrTB36cm51kEpYE5ZXwyLUadCtNnnd663ZZCfYsjhouwnQyEi",
  "key27": "31xDa5fZpXxFSDZnQYQhaKMnXXRLKBpKMn7SY9bVaedNVNmJixVdo4FCvSaPwjNWNbywpj9BAzWegeizzSaScSFC",
  "key28": "cvGjv6LW7mb1HWd6Hbf9e9PJAxcpuqWL2pEZDsRMSpFxqtp3UkLsm7v48NJtV2wEVrZyerPHZ494AWkNXvbimCA",
  "key29": "5hZS4tELZKXJPhfpGkqb2cdcHQXM78DmApHmoNnL8wZov1ceXeNhP1PwbbtCxQHPZxFmYtDyK8GcA1wXyuAiBWtj",
  "key30": "3X75xFZFwRUz9A3h6wUHqLxRwQmZujpAyZZcoFq4rxnotkpfnKRdcBpUCbuo7zNGfF19aWUyCMnHa7r3rMJWRH4H",
  "key31": "2JMUxDLn3LvabUPJC5ZMB8coLJVzKqHwS4XS4owe91URB4i3eGRMP9Tot2YAd1h8rH78ZnWXLYLjasiGha7W3Q25",
  "key32": "3au2QhFYk9tXNjcwje8agJTBDswZxg7gny4Nr6g4sJgTtaqR7cRBRJYrm88Ka1JubMG77sWxAz8f8XciHnuShLfP",
  "key33": "4fdbkKJu83TWDeQQHbEAqvs2BZ8iVXXjwtgJgwcroK2NTCLxa38iDi9HNumDwjjhaeBr9P6bCh4Q3WSvb4CHVtDY",
  "key34": "47b6KSmuwyqQwTs49BEtZK8it5MacJdje3N2tVchuNdTVUckMMpN9M5kDJuFfWnc95DYJhk5hf71sJYASw1dRKza",
  "key35": "3eRRbz4PMQm1rFtRhFrxaVwALP6MyT4FMzknE2rSSe1jkQoCmdkiow9A4aqzAbjnfzM2K8Bv9hfpDrJZ2WNCyMFf",
  "key36": "3yhRaei9x7jBX8hjLArg3eR19EDqZ52iYcz6h8BUFkNcEoTTp7UTc9BZDqFVHEE9FBjXwsa9dyjeAWMYjfmZxamw",
  "key37": "2PiAwHiiMJAqnyodxs7K8VXr4PLi5XsRed5Xd5mgpPkSLPv2AGa8nwK1eGxLJjm35ceARptTQangfA6sax2FiDQQ",
  "key38": "293p1TRokpAjFXbPoM2c4fJiwxbP59B34RaZvC8quZaazELZ3y4yhoCDkvd6FLa7ApTLBHyyEeswfArQepLWUaas",
  "key39": "5xELkVhqbMFrbk7b1VZpAcE3XLrSKUo58PKeBNTjH3VyRgERGrQAq8sPh9KTbGaLocj8hCkBhAS8TnpHsZGkxCAn",
  "key40": "5vKvgxVQArTmykXPopyi3eMN8UHCmitWCtDGxcNobmdL68GR9ZpSdd3qs4mDdXVfMzENRwyGcdYrFSeydsK8q4bU",
  "key41": "3MHyEN3VkUi4rTcjya1pU2mNoUCr9Xiu2h1wc9CXCFKwQAF2t83bKuc45KVon5SP7n5szpXGLevx7EsWiKCXDYXi",
  "key42": "5Luc8JpHRS3eB95gcWe7nncwUH9XuisGWC28mdQFLuep7EEWpNQzb2JLktMBQbSPEAVzGSpKG4ipYpUSFVzjHy7U"
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
