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
    "3NAohZuJYFMh6iiBP7tDzRKuFDYr15CdMheZ174QhTWS7E6kqiU8zPZJ4g8nUHG72WW7gccAFa3xFvSvEkJtHVT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xb3haKPnjwepky2Ai3AiEnZg1oQWGKyAJ9Nusdk82ZK5JFaqVeiaVngNJtTkr6zkt9MAx2QPcbcEk7vD84GEePR",
  "key1": "4kFRrZ24HN4tj2cmhtUVDRShH4KQPXFV3pdoA51PVrar2bcPTcWykmoFhVpLKXQAHHwSB2As9TSDLYW9iKVzvcX7",
  "key2": "2Fo47W48r9Zd4wAyEnWeQZj8zTiyD5EBxz7TKAJKDdRXoNBKmZNViwr4ZtzKHdxHPPXtHKme3c86TKKtxC3dWw2i",
  "key3": "3ZsDfme1F8nks4as5oDxwfaFTEUt5x3QApi2R9ZGdEbx6JZiJXUfsVzrLrNC24ca1TTrrMW8UcYrGfiH8vhq3DN2",
  "key4": "5hv1gbNXoMXSpPj6JToxEu51pSyJEwe8ygKSQyxYcsPquAUsqcDEPY6PYLdfHkYFAWk11t37cyyQwS1hDyM6cQpL",
  "key5": "5ZpCe2ZnhQnSK1KgSo5QUJwXj9RzbNLdKZvBR4omQ9RMcrXbNiw2bq847fWdbSYFRjh5iAwkbRHJwunLRGKrWz95",
  "key6": "3hWo1M7hcGnRaMNDHHLZ7MrAi6qYe3nUr8p4RpxBTqoCr5YDKWux8PadPr8yy6yqxD1UeEEEpvKuiNGGtyZirrtQ",
  "key7": "bnu8zzcaxFqpa8J6G1dg5ZFp3rE7MBeWkpAmiDxMMDpkCGcugPBnnyKHfTAXU2rtBVsTNcuFJF797gHz7NVKmsp",
  "key8": "4AZB9sm4YarcryXda8VZbZkxUamuTXtCZ8DcCRTBPV2UZJBbF8aPcGKZ6ofgWctt5QVuN6UcdH6BsS5wYHxHEf2G",
  "key9": "2gtEgoQXzTZZnL9oQ9At4exbgXjAKqbAxaGefsjEM3PomESNpeUM8AeGLBDbRhj9gb1zet3XiuTtEKzuxtZUPmnH",
  "key10": "5DJSLmA1dzXfjxGwca1nBgkba8JMqU2FH4jwdxhmNvv7aAt14CzCBgi8uYNMoT479iebMLpSi9vjBuLMziFV94dY",
  "key11": "3PvxR3Uv4k9c35WYy14MhkZgX2pGwKno3sTXYyx7rei3QGojhnrAS9mS8JeYx4D91JShnMXRHgBNPNRJuHKuzNVo",
  "key12": "4oH5neUADXpFXvu5xynMVkAzsjJxu4SMhDEXvMjLCzki4BY5xDbe1bMtu9KZno3AVcg3ZDbRxbosH58vaQaNXTwM",
  "key13": "5EVvQLz6tZ35pEiu5Zj1gcaM8HmouY27iGF9MPEFthf3KHQ7x3juYDy2J48mCCh7LxucezVfJ7GLMB6pGec9vZws",
  "key14": "5ymfMTRzkdN3NZ8brAaq5DBREwxVdZV2dMqd9jRXjFPMYDqoHE5PzJW9jWd4YNCGwxfYNoaJFx1ytkfCheegEXPP",
  "key15": "5P83T8JXdGiN4GHXfcKXzoewhdZJSt3Z47Puzx4ctGxw6TcaeqkztYt8ScqZLFchPtzwpeEHrUcFgmVYpUZZSSJr",
  "key16": "6sjMsjA7hZrvCCJLMnte5beqCzXb8cVackVxNQ3uBZP7NusHApVxSqmFsvTcx56G8ycuc2ztKGyPnsWiJwyLXvL",
  "key17": "5311L3Xcg6wo7ARXmnn6B1nhgcDZaUTQFp8y6fcRbCpigrd7hPNfGRX61VNEERqLLejaVvFVphgq6SU6aCk6z8cv",
  "key18": "5J86SmxyGokstCjHfuXXWuRYwiPtSKcfPTAofLyoZeymAdN2Lo4WEBJXai2LEWqHUMkX4jK7qodeZtnxi5kUNmD1",
  "key19": "4KRsMyH7V94eDPg8eB92GX8fjHyAGEu26AvvKK5yjsyTTrbtqwRZauTfzAE6YvZvKPh9W7Dxy4BVaFKaeAAxNKVs",
  "key20": "4AEcX2myaDaDDdQA7mEV247zb1BqLD7XZrHQWsc53k1xUgiGs4WuWT149vq9Q1hpdk6bMgVfogeibeNT7s3nU8rJ",
  "key21": "2Xr1NmKB9JhWGx1DtCZztJyozfdG3gddvPTzRU7pLF4FLQdPav6xemYqJSqVfhyJFdpJstFsiKq5k7wfTxeRBM9u",
  "key22": "5PGk58cu6EyiSbxhJAuyscAWieNtySY1wPaujdVHCoj4e24mA8mesSNjte5y6iMkytJ2XjKCJ3XqhuYpwvrLr9S5",
  "key23": "62ULdAe9DRuHBxurnMZkCFcZFt9PfcdvnYc3WhQVMgNxdJmBGdFFsgLNVcRaX1Syu25jbXfSu2LbzBdgU4BCanEL",
  "key24": "3ZdKeWGfFjV21dEz1NtEYKYfhdGDS9QKw54rubCFm62x4Z6eQfAVef7ZUumszTSrAJGVE5tTriuUu4FvBEpRcdPF",
  "key25": "4YVBKHm5wvH313ZNFJwWh2tkZQvbqUc2eQK3JkGZf8qcfQ6DfzJ8SLiZMb4Pcqzrk3q7VoX3fadrfDVqWbZp1RJm",
  "key26": "26851fgv8LaumEzYKBFkRvSeREgj4pU2CDDDtFboLYnzGc7XHTQREBaaRv3yEJHDfRegcNF4RaSowsn7P65kG7fM",
  "key27": "a5PvaHYJXSUQn86LbiePeVkTj2RvvEm8BS7EV9pdffCQTfrC6Jk95eBrKNGqyJDp2QTCQcDFV3kBWHsCv4bK34C",
  "key28": "29MJ8hWDRzKEyc2ZeijB4915eoMUEfPxhSBJQWk2537kRCyEGCd363gxzNkwKGU75866XquUnkVex5434Dk66txS",
  "key29": "41RbRrpA677eEfVBPPoiW26YQ7TzNWpLhkyLSo9SmZ8UvdaazswBAEgPE8XiTLwkiEssrcrYtfKTx9ujrDUkS2Yp",
  "key30": "3B9NYEgvgCbLFJHxU2B8LNwDB7EW8XTeF68VseQw1V66PruV5T7AfSLdSocSBaqjUqxK4ZFR8D7edbETJtJW1575",
  "key31": "GS8ZLApcvxUfGmwnPTSm3vBLM5iviWcgt69BG2aYxFtugj3zeD3y6tWeyFWc1wF6eZwxCXMoRVN1VySAACUohBU",
  "key32": "2jrfMGwt2zUBhbhhrXaKNMh9hdmnvVg2Di4jBbqVtKHZAbmXd1t97PbLVSX1c9qT2pqXJ5iKrBCGLcpZEsETAQku",
  "key33": "jtxFrfVzoPXahEcRm5mQrGAKsXXtEYdJ5BXTeJnuXLqoMc6c1h4MKhnLeExyvKA5Wh7Bd619csV6MFQRsgCBmX2",
  "key34": "4E1hHSZimDcbbCQ9WhMr1Fj62ePoG4C12qs5LcQDMPU6JTnBTkUQmru9hiTBA9QwjavjP6WtAWiboYn6QxLTqo2U",
  "key35": "54zHdjuZBW1on5asjrvRu3tadQNyQnoYrAqCnrK2hz7PFEijd7gXJJnvpG4SNSKQtpnDAgmtm6U52tRzeQrzeaLH",
  "key36": "3ypG8az6G7fsDE8D5SuXfnNEuwBt1g17dEJ6pwrKGcnCqmxkVRJJntaztVC2gG7fPqWqWTdCjkDFY8wH9Vd4K4SZ",
  "key37": "4uFbpiEVRxnVDbN1TFLvUX3MLCjexJUt5QKQLc9DaeSJGxFcHZeQy4MuXhaH1rnLJp2teZy7bvnabmkfX3VvG8jE",
  "key38": "5LE4xt86oA1hhim62tT6jftcV6mr62RP8oEjTf1dd9G2KS5MozGPA8No6bUzD6rzPHTo6WuLyBdb81nWPgWSQ2Ea",
  "key39": "4Q6J7BZYHf1jZp5RfWmDhvwmwoLU1j1saPZt1x4G57efE6bQs7Ae2aJqE6rai75e7fiZGsZh2YB2RUE89k4KBPX8",
  "key40": "4rBZZHX6rUENqcYAV52mDQm8hdFz3XjgKwrKetumgvQfg64RmYBLfiVSpT7m2VQbf71G4wL5qqsNzWUF8jUpzkky"
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
