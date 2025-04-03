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
    "52Gvva6HnjkF8MN5hej3xwtwe6e1VKMQFEStMriqycLVwDXUnYc8GiZ8xiJ5w283KqMqPRM5pfWXjPidMzE1PFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnLFgyeGWSDQkCcZQuAbVQ1DpQntSGKpWGrquXkS6erj6K5Pb3icbTV7WSQknXBJhbP3NyTNQ6ZyW2Q3H98SRGr",
  "key1": "meQSVtKQbeyyrzcvadFsKrjKnCmfQ7LHNgpogvm2gMFji2xUWZkvXRWxFsCn6YBf5kX2cpK5baaq77tRmSN6kAd",
  "key2": "5HXt2bqZD1EGJrUfVF5BQVUse1P4VsBpJaLFwnpbY2EiBMrkspYks5jrta2Yqvthhjbvjq7GMUeeFtxKKmwZZup6",
  "key3": "2HdhYwg7KbSrQQspPX4bh1eTb9S29m2L5AngrzuiqDHWg4C4gg2hysnSPUEsPHqXCQm6o4H5HggKS396HdPat92W",
  "key4": "3otgRUpprKHkhrMXj1byE4rufccLjKMzJbxyhT1Fchy3N2Ma7dkCcjf9PT6pgv14Bjf29U9R6gCKgQEPTYr3AXaH",
  "key5": "2qnzRXLZKvV4tqa2gtykZzBQSoXMJyEE79spqUeu35Cww7Jo9hMQaBAZkj9MKbHkmjYfsvhpKq4ssPGDAbSVmHT2",
  "key6": "gj8qH2xaFV6pJHC4opzRiW5qpqmatWWgwqK2PNct2Y7tYGw6XA57NQ1bJLUprkuy8THwYGsWgRXLkWq1eNGRmz6",
  "key7": "aMX5ov1ZrGkAeRLfgSBQ1zSqwfMErBfh4C2up1WbXzmAAHKuS1dKV87YvKi4AhM77fNCXyBYzvq8rQEFXwsaAri",
  "key8": "2otUZvCGGZvN2B3vHowgas16fA24eSVTZhkfqiTMBHBdYnbJ5rVkq7EZbMVjpuMtLEu9iFLNuCk76xqn7qSCz7gh",
  "key9": "7RnHmDXBUH4bHCn2enV6rZnSy8ZApZpBGfeaC7n9zdX7j1xr61HAw4az8wHbJeta4eEdnGiZkzRaZa6N9FeN6ne",
  "key10": "TwWAta6SR9bFMHmZe2MJezHev72o3F3auF2pcoQLifQwabUdefh8tqxkSEBrMKH215HwH43AAzFWBAvRYHCCoHV",
  "key11": "3iBYzQtHXnUZFbx3NL4bWVzF7fSZFoH3JA5aS3JkgCWEmpMnaVZ5Uc9GGkWiPz1tr1pAKHq3u1kLKxPYQMFgLuj2",
  "key12": "3m4B829TYHE7nYeCPEmQvLdMhVPGDTg4fYvwS5DHEx1Fjixcu3Dsk31D4vXoXN2W7Rzpv6QY2mDhFu6Mjw7HzDZH",
  "key13": "2jMN64hj88fFFXp4JpdirqGMxcSfpV2Z9A4Xa9QhKsAvJC2NMgDsCB3hXNxc1DrsgoSJYFcNjbCVUZhS5wbWsZ3i",
  "key14": "3CdnYF17TheXn4wGPn4ayFmxgqkddo5B8JT2tC6LFtpbycDJc2sKttjrxfsXMP1kPxzbvMNYyjrGccpsGJPKPY7R",
  "key15": "4mNnPU2kjhxmYtMGkFXvV1AEaWjdWixLkUzvTnEJzGjw4r61C35ddgwRgpwxtBmws8ouv5Vbm3KbBVW4vcYNdgiw",
  "key16": "4VAUNY3kRGERSgPbp1rrjM4dpeaAnsAfwJLXwQiezrHj8qFfcdLQjt1bPBT5q81gkGvAZ3pLfDCECCQ6RPcb7TSD",
  "key17": "EQw5yNbM8pMkme1Cg2rQEaVXRsMVvqeYgpBFAvnpkmxZqwi4TdTPtyzHfw4PjfyGYD5bHMHKxhJVU43dfz8DzMn",
  "key18": "5Q4AKHcAzMgio33ta15x4bn1PYFWF4XNJxpfesBSLPNNjgaDcsV7t6KCDXX4nrLHkF7pzoRxQBpPrJvRx2RESuvP",
  "key19": "2VFuBGVuqgmstr5WEe1BZUkuP99Jyo7sz8Z11T1F7MGFo4r7mtFGWYCUwroqDjrnqbUFTH75RQQHMnuGRtX7L5Sz",
  "key20": "4fLNoos9M9n3aGCYKvfWQJ18XK4oBVtSXipeuwMx21zQ8fQCRtiEJLhjxuhYpyUEZmfgkC9LZd94uMV5fkc9jjd6",
  "key21": "Cen9enbheGyuJvhuXbV1ZmK6hB6u3KABry9sA2hnjwcDBJqrF21Sga3xg47bEdL9y5JD1yURr7vHk6cVF4G9SnK",
  "key22": "3wahtx2dCih2xkk58MuV3eQnzx6SkXEaZxUzovccsEwt5vsvSoFUxJ1Br2qUS2bMRghsscBDzU4Spxo3PNQ1fcRz",
  "key23": "63pZRxZcsqy2VuBRKjVmKN5MvdjjtASWXTdHTZsxHi98yS1VxgZmGd8za5BYpRCCDbJeSLYXMPooCFwU9ZbcVoyC",
  "key24": "5EyXy5ecJvxZMVbobMhcr3aB7bE1Jm2yLhqkf4tnwhd79dLskkKvWzLGvnpA2Eg1odKx7ocr7tSZzibKtCYzTXox",
  "key25": "5r1U3EejoezFCa6mXmoUbqtD1KG2ZRPhPM53NCBDh9qyZBUBaVRAwe1uXMBAPHFWeEpvghcLYEQkk7uKoV2ATykE",
  "key26": "29ykyGbbaqWFHNTv4kusd7LsLToCgYk5rKGixmnJoxXmiDC58dvrtK3bwPaFDhYS1YSrUnWU6mMLEFNa1hPK1v3s",
  "key27": "5cLDfsMR7idreDCCLgZ4gTqNsE5PnFH4efd8prWRzr8rdNr94tWXXeX8g7ZHxfSR5qDxXJqeWMBCUBcv9HzoykDg",
  "key28": "4BWj5RWJDWWKWePDEotgADZPaQjvddGiRyFEeNpyH8dr6BFtsiyRQb9EoQxDKYX6d9CnycYuamtachwkGpebTUxJ",
  "key29": "2jS4bUHYfDJCeVukpACmiR7eJexC38G4jwZo3ReZ7SncFLeZThtAP7UAjnL7YCqexeHFJiNCokqMLutr14he6M6T",
  "key30": "3Hj619evs9ptdSW5hBfssF4J6Y9XC2GfQYvKeAfNnFjmzMJnztin1MeTCzWvnzBDJ4s3d2D5S9ZvLPRZriQJj1Z2",
  "key31": "596h7hM4vSYpx855o8hz8WHo9VrL8pwPmRfuPNtyoDRUthsNLRayiB7BimCdZdNpQmgD7HUifgSRopV1FMQAsiwB",
  "key32": "4YSE9poU4s9vkR7HUxsqUYtVHfTAV1zwwiAsouehcPwxaed7Spd4GJVE7mP1EKx63zGsNtPkMGCEDb1osXd2FrQH",
  "key33": "4Q3L54TCXzRf3YhiECQ4T4hQ1bBoTzo7jt41tFJcWq8Cvihd8zbcRTbBXR9NMSMQ3ZmsEtF7LxEJqHhfAtJjYcwS",
  "key34": "5LPvStRr5LfdMzLSzNdHKgTfyadaSsu8PTgnEK9f6gaRP95zzfUyebsqH1TeRVaho4wbwUYVfHmdEMf55b68dmMr",
  "key35": "2hwY8D84gGW1NWWmSfeqtpMo1re4UaAGcoRJcaztnNd9j5CifhC83ZKCQJwZb6v8pEZuzzhYmwRH1zVY3othe9g4",
  "key36": "4aokj68jhZBWbsuVkACERYin93oxRvs3VR1oGVHpfzWJdMj4uJ58CjRvXZKacwiaNvB8GUwbDxATLpwXaJd2AYZf",
  "key37": "mKK4khJ4GNLdoUK8Qu3eWc7LP4fmagoHxjoedoizK7EKB1Dy89i72qJkEYRDAwpoW7bQj6jamwD7h5BaZ7Z7gzU"
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
