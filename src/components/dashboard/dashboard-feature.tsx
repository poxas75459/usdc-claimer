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
    "pA4sqhj8UACubrZBgzScL4DqSJdGYNJ55vwsb4Vuy27pa2RWvFMZ1otqWGdc4cS7vzmSn5C9sESGM9VwnusBgFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMFiDyRKazfLf2Hpj3oCsjpXhBmqBX7K261AYRjbYGPGB5dGKnZQwjj4jk1AE9SaGdMQvBXmsC3uY5g4Tjvhp9P",
  "key1": "29u7vKkWY2iJopqJ7q18byzg15vRq4A1e9S7nq6LZ5HMTmE8fXTtTeZhqF2sqsyL1VXoQQcaoaazr5Wxit6s6oyu",
  "key2": "5yn4i7xiuFwpSYpkt4JjbykiHRyQu9gSyCDuwDSpWinbvA1qmjvw2aMPSLFKp5fUQeqcQZApAwhzBakz9yKQGcAB",
  "key3": "5AMiSpibGYNjaQSkXnj3sJ5HapyKccS7woBJUL6CQo6d4tc9kTckZfqPFpyNnV6KXp94xEaGZRVpJTFC6ZVVYdev",
  "key4": "B7bgp8J6RXR4xrfLYhcSBZKHPAnXVCSVVjsyGmrica5drcNv84k6sSAD9vC6f8zbxohym1ud9fagGbQLrKxCvSj",
  "key5": "4MuCfGVFpT1PowYtmJz2xkdtM9wtLsdthNgUKMSLCLeZgza4BchUryqkHKjAfHBWUpU3gBrb73vjxnp9pmVaaapQ",
  "key6": "4J767uNvMg2TEk3MgpFqFq9RPPbfUQWC19TcvdwGuRRmwZoigch5fq4MKTgSj5ZggSw6BAep71V3R3zNTNRSVPMv",
  "key7": "5Pqjwtvz4VshAkyCoftWqpFhWCiBBVYsghwv9ofr2PK49vemqFTRRtnoqpVV6sbVCDvkbgr4vdNTTC4fgQPUT39L",
  "key8": "2zzV7BEYkGKuRwCRyBxNGR7gF2L2Dx2kWEBtUtwkbCpiJpFD4617nhEuqvn8WvnpsANkNcaxBNnmMzuzq2wN4UDJ",
  "key9": "4k2x9M5KPUoNAWJBjGx5ZxshMuHgQRihuF66z8t514eHcNo24WTgjgq8wx8Cvkifh2UeZe9arS86wqzrtfZf6Zan",
  "key10": "5fEKqZ5Tmr54gM7PQMGG7PhBUrNMTq6bMYu8VYPUhHBf5TZbeBkyBQbtboqkHWyaLa4zdLWoNvhxAaxaHyEEUJxT",
  "key11": "4Ep9mznwX5Q9HnHWDRufT38dXaiLy81zK4hwrBtEuiVY7xLR9zaFXCiLw8hXB7pXMX4yv1xMwrCHutZe8CciNcSS",
  "key12": "3xw6WPfM45fMyT2ePknqePnqTGV13aHbkQfG9k6BPaQRsz3MBYrhudpSYRMxW8wFDpZ3J34uQ9LwihsLBPgZndWa",
  "key13": "4ELigLAQfmUWRKhXxd1kuePwEKgriHxtGNK14tMaYRY3K2HwLMz3VZuavnz495R8jSYJBfycpFG1AddtSWmjaax4",
  "key14": "5yBZUqXoRURph66SE6XYNL4573JUdqW8DKVjwLGQMWHQfWcu6M5LLGkkHweCjJVuvkUNCwvum6qTxNURqaKvZW6N",
  "key15": "3Zt35EEEfDxJhq1jZMtEBUc3XisDRoWGVpHDFLNfdhhGD5TomYk35bgqhrwQWyg1eNHqnfrHuRkNBg6VdiBiahY2",
  "key16": "iWWoZ39iFoJKam3ni6fZQFwi2nbncLJZQ9Fg55RZYBN9Nc73g3t6TTDVaRbAfEEegpN1VNaWN5PjVXw4MDpuXqx",
  "key17": "5LTSrtLYkPjjHozGXL25huKZVqQ1TNpd7mvwn7cAEFX6Kr9qSZN7XVvKSpSTZwdCQLz8kJKTfP5bYMacWyDnVPq4",
  "key18": "2WXj2AaPSxitJDiyYBB3vRFN5EhS4kx8w3mFjmZ71Z1gbzUu6y1xy6gLwiAE2v1vPr6MyYjMpnpUjDmp9qGpFgei",
  "key19": "2PsmH8Z8QJDJEBo4sR8WjKotBDsuFh2QySHM1uSXF29s2fVDPnRBntwpgZRQg1syCfHqyXpcFAsV2ZsAuS9vw8r1",
  "key20": "4k1osSCqLJgx2NMvGeht5BKNscrnaRPgM8Y8Z5CnTYzn92HYaPuNfWKnGuAH5rQa7bozBxg45Z9kjWAaY7Fmb426",
  "key21": "SnYDhFTVRVkQ5Jxk5CdA2Eh8zw4FLdAR1jheWfmgVx7KMHjFfYkFDqs8HHNDqwL9UC1KhGpVhydy74np3CTRjQT",
  "key22": "2LM4SCmiGpzSwzkGCG3akHaTsf4Dotd2jpwPgGgTGSwsDim3G9VuLCYVKCDY3FAhypBuZDLTCVmrHb65RdKzqNng",
  "key23": "3zYaXiYUao7RQZmSuoagoSJHc4pZ8trBSw6zgEsMJNM9eXy8MSBgasM2CPrurMsmeHwZDb3tec8Bmd1WPRdZb8dK",
  "key24": "23FSyrHgWjneWCdCD2aBG3Y7JkrD1B1Rrve7zZCkyXUEyQJPtaaMM61fWkwdvsCjjVKB4UwSrKwVrucnPAKkPbiS",
  "key25": "289LBFMhAUnmSqaw6jWPaGuExmyqLvtyAzWhHVgYbEHij56CP5VCExVSb2QsXNWGc4hRLwo71nC3iJk1SdyABF7N",
  "key26": "59baoQLu96rozTABjxTBzhtW9tF5ToANQzmUcRJM1oycHGBZMnz1t2wd78NrKrYJjCGQabVYJHm4MwGHLZxWv76f",
  "key27": "4Smyc43MCbU6WGEkMkr7YAnRKEThJkkjU8eznLJpFrVtGfGcid5J9BZo5X7E19t6tTHhpM6BMcxsADk9qaGuiCFC",
  "key28": "HKSf7gFe6CS6NwzrpG7FBuYVJv1KsSoLm9nU9zTi6JbR5WjHtSLto6vvXUb2fy1DSGKhzrYe3tzjjBUEPNHVTb9",
  "key29": "ktGmrmU7GiZRxEQ6Pn3U9HtVYrfnSai6JCJdNPHH234dnb9uekRCugtSqCE5Cwwjyv68T8PyUN8Cvf36U5wRHtG",
  "key30": "voi2ByT8dwC7rxMZGGupyJHZvymYXaUzeQiDMhStpjBw6ZoRhRFBnPffLdqHG6PfEBeNnkijCrbhdX8B9AyaDV8",
  "key31": "48xi4TxdYVb1Ebm1evBbDAo9p5MZTsGvNQut2zkB2jJPHoBZADtKMeP4EqZ4pPb9WX3mMDZCc4kZyycNRmBqxZmv"
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
