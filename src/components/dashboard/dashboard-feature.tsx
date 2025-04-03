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
    "5a6ViWD15mq5XH2R11B8DJeYZwSzpx2xkPtyozEi6sHiYjbYSoWrXUnqML5HxEKJuWLp4vZypPNqf7YCvaFyaAoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQjYwT5ocrFGYeuuBXn5WUx8JeJchzdVfa5Lw5vjjGbqVEpimywzhpq6vu9hCZLLE7Mudze8jAUwDmyrsAJoP4j",
  "key1": "3Uz6dvEdY11qt9bP8mTSd3RYW8bRyzYpT1bQinV5W5sFTAF5i8ntmpXtrswUw1Zq7GBGpKSyyQDNppq6gKLWev2P",
  "key2": "257hTEMTwqejj5ANWpCMpWZNhJsSAyxcknAJJA89dJvTPGspshy6djm7UXqW6yvr9GUSftokaSET4L8v5AkuEfVz",
  "key3": "45LAmWQ8NBCCyHz6LUw5LdfkXjZw5CoSaqsEHhcmATwrMbVkpqH35sZTaEKb98i5mZSrwiRpTi6ifJVnLp7nMbyc",
  "key4": "5xJXCfHJ3nhMF2RwSSJg5SSfMPdVjvXwPsT1USQQP37X15Kmyx7QGcrjLhTgVjpCRg93tYgkj8rEjrZf4HrNvoqN",
  "key5": "3c4Ue7V8oXzRchX8bmfqy8HWYQRFh5EwAgY2TmBFoMS1rAJgqxPxsK6sSRP4jsL5Xs5qbBYfbioLnt76m6WruvDk",
  "key6": "3iicrWJ9PK8TQmM8a3HHYvnA22nKHJFCt6stBM8p9s3nVQJa4A1h1cy2LZUGVPEd4VUCEPwDcjfZk6uzii22Tjfc",
  "key7": "4awgw1EnezwFQMcXvTPsbnfzgzSVJxvxHG8CoWMqurkVGN2g4Wa2NN77wHQQR45TJyRSG6JeU9dPuYcbQfGmw3Dd",
  "key8": "2Hf4NbhDPQxr3aAFgQ2FLHMoTk6jbk3WMSp9PrenMkhXSETsVcvYtvYB1ABEhqT8XQ9tkuFnNxKWrtm7UZ2j27PS",
  "key9": "5azuAw67Fg3gNRjQurTJkASPwCnGYmprALtR7xT5gB3GSGGBwrt1GSq2JAbi8tR4GrrQFzCHePzdxvf1sDhx6SAw",
  "key10": "2PLEXonwojRDTDtb5PcuKxpG2bR2cojwLd6p1tiuBMTwCU5YvfeBkYenR3GZhCybvMdcKjBfDDYqYpoevFsnJ3v5",
  "key11": "5KTTSpaBthhkwh7UocioMcb7ssWzXoNxgfUmmW2MKMBWvHfGcT4kfETPm1aDmMQvbZvZadmNa5jXaxsMmAMhL9GR",
  "key12": "5tEpXBZaHvLgcsoxLPrinXCuj3K91hxRsTes8WHdiUisr9MsMu1LvuEXhFN7yAqXyTcpUvvKUxNJ3ELBUNk7gVvq",
  "key13": "4CxCW6PKS642paJBfpvRwksy4NpxbCBRr5f1MBWtGim5yZ93wkSs3UfYFXFi6Bje3SUnFowniyc1wYMRuHM5JtYs",
  "key14": "4zvKUNwhHY5iMAd8FmSLj8g1rs78raDGK8hSet3wYn2RieNuRcbVakJDnKYLBqTGKDc2T9pRDtc5CY5k1FB9ctfR",
  "key15": "4cQkQDDTNzKrAxZ2odVWKcQ98WGsMnZZvbYJrZyb1Y5TRKN7UCka73XqoVA1mwfjchdyduBDGUsiYSD4U86RfDF1",
  "key16": "5SQt7ENSkqQA7LEdPPhwCuYyfpF7Y8BsT3wbVKHDccbb8ZAxBsVJ3T8uRTzmXrCFdxPSdRwG3G8bReVdWztW95bh",
  "key17": "4sG5ggmg7iAshqtL9XfQRVdRYBdRD3m3rv4fBbx8ExEvf7XwpYCWQcg87Kd6CYhNmGBGzrxpfCXjsZdPrC2wTecA",
  "key18": "8zK3cgBxJoC6CN9kMikznC3kCrJThQAZ1mHRySkKb3eaitMk3hNRNGNx5ivW5zC7UuVNtFCPGGZnXabwgAhcpJ1",
  "key19": "3tXcgkCeXrgHB4gA45mqxLootBEvUJZuexV8RMMySFAiKy2SCX6tYpHfKWo5a17gjiSQw9oWvHUJBDPAm1j9nyVg",
  "key20": "4EcL9pNRGK6uf9c4knSfmbsoC8FHkYGgMhUtVjV3KtVLT6HV2TcvbEcMhEmGo4iQJCGAAyKgXKkgrhVXeSJQFNFL",
  "key21": "5FV81RvK1Ym316r3qikxoTE9w7h6gYpWKKvjUJKPKG3X6GzWcqnAFK1HnfJCnoY6YTP5qtHVyZ1DJt3GQrKCWCS5",
  "key22": "ncpajsV3JTzPPnKbtJeWpMkUeXjZa1yZs78B6YbLj964mwgw5iHfuzXwgSTs5EB3xywS34sZzBwS9YTUhzUtcza",
  "key23": "47iyN1Wz1gNzpeHr7YriDdLqrenGt1h6NNuAcZ7usYiWPBdFGdwCpZR5VpgUSTtGmZJvEHr8FXdb3byUq4ptQKvy",
  "key24": "eW6wCrnN2f8YtuCAxq5uTCEazBG8YPAAQESsD3f6E8Swc8RwVY86CHVhqrGD2FyNciK43zTYN2DyEDkY8Ht3nMa",
  "key25": "25CqVf1sxFbrfJ8P75cTBFBDZAsfbVrRszGkSsKqnzFebdYVNBfd6T87t8knKBXbMhkyXqvrTpntyvpg4gsaQKtu",
  "key26": "2Z7YFfDasuG9tDxFwY3x9y5RtGnND1HWjicJ6e64VY1m991u1wiNk6KsfFAd4YHDwjMnxwCfwiYvnLc5E9nzCEVk",
  "key27": "NmS1mq2KzfNZ5YTbNgh6TeD55b2rUaRvpwCsxopiyjktAUrQR9PH1nMePiLTxEV7q2VDs7hfMDBQtjQd53hh4K7",
  "key28": "1BpyGWtPYXyvy3xEwCqFFgNqkDB3MTqb6pwk2wgswUpexKmwzv8qkN5n5Soa2uLbkz6WsgHtV2fWcTvusJRTkft",
  "key29": "3H242yUQLpWcLUvzJAfPpBWcYyeSYToXnvzRoLmEFbV7JXDdff8r45xZaWF2FQfVwgprzHBw49qoJw8ALWnRsoop"
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
