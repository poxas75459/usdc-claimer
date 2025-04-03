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
    "yG46qsiEC7jMj9tMBxFPCjd1HnJyZZ8wBkynaKm6XRMoCbRaStmdfGHC2sJYSp6Vzn9qUG8BNhjQJXVEqPrxWwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YA5iH95BpnzAGu23m9ZrWoSZ1QXjvPbLmxiiHzAcYLVxLxLtpfPa1mov8tg9pAgn8zzAz9tqdMj7UHzMTY8Tkd8",
  "key1": "2qGqZX3SWeVQpqoNZnTM6rBBijQ2Q4qG2s3ZNnqHjsUoG191mCgLaDLJz4myeYafsfZqfdYtS1fLXsLxFTfGS3dA",
  "key2": "4RTuHTpuWAsVzLTrmuiR6eWB2LigaEyaD41hT5nkCwXVqMPhTnBo8Pa3DFMsNuZgtRnyd4rGTFmhi9UMZxufH9nG",
  "key3": "3VhcmZcsjfsq71HcqRmymmhwRqNrJjF8A1DZyxkjfTzg6UJzR2d3CLqro8GojF4Xd8GiHA59CH1g1aZQ7CE25Egw",
  "key4": "33789bfQ4yjWqZoms7mRDd9Wv4rsFrvvgqTcDZnfCeJH1v8hr9To9aVa8mgaRzB3ox3tawCACe6JV7hQnXZhifBG",
  "key5": "3JEexTaKzkR9BkS7fMFR681JpXGbMucn7fR1wZb7WDiFq26r7xZPLFKqmS8QpxDHgZZx6kw93qsrsNKRPvSt944g",
  "key6": "3WsGczkCRMeghLDMotAchLC17a26LJDAeTVK1E1SBog2bqF8yLHzzWdqa3iWu9K2JYB9AZoArZtwZPPmuQsRmMSP",
  "key7": "4JPkxim5xcEJMv9MKen6qLL9BWgJr8qfHhPrntc2xoPP33tkPpXs86PQppiSAn1dG1KMfXH4pKbY4QvKjNAWgTds",
  "key8": "4cncFCrYB2DxDQUVwzBhwMNXiVkZRFuJQDzKtLw5ATmQi196Htky2rUkuDVLJn5L9CCV4M2nL2hfzG3qSRi34chf",
  "key9": "23js25voVNwfJkUhoQGnH7jiybQjP3ueX3RcCQW1p58zoz9jNuCpG52wzYFxYDK31by8SfSHx8Q2n2skBNUNzdZW",
  "key10": "JS3FgxVgq71GhhpdrhRTvv7MStvd8SnnSdLYfJKmxvnXnFepe1J2SLAybupKNFShjrkn1RUdgkEk4L3A7CsaAp1",
  "key11": "4pNBXvgkNH639v1gwGAcqv9dDUyRtfAMZ4WpkMwYkh57C5vVkcRuu4KeY1jTe22kSEP8d7SPwQwsqcMhBmbMF2n1",
  "key12": "XTF8prWy6GYJDPNnhL2XisCNDm3PWXxG5at4VWdwCZCAdrybzc6hc1PiAv5Xct12HQ5Smg1jURwqsr7rpMCTVpT",
  "key13": "35S4TMaADbDXRHJToP6fSMcsVv2w9fAkRjQnH7gFLG8KEsS218foDJnC18Ej98GsTiqg5NoyPVfHyyQ9H2CQ9rbc",
  "key14": "42fUUmMrMD1GN9rN2eccs8YYm6x8AUmxYgU2kYguKwLNE6UchVGUYyUrAwGBjqPkAAUix1suYLedrjyKEQogMSpZ",
  "key15": "2wG7yL75RifdSdt3cPDMmu8YXeZo8xNMiu5LaWzGsZNx3MYuW8dT4kpwJMSrmmuTEYZrN6maqz68Sq2iYkgHQYoT",
  "key16": "411P3x5mFiX7kZ4tYgrCEX3MCu48kkjn6e9nrdtBHYMApExH4M2Pn7zn36mS4ydbhurPoDy24ECTEisN1kRrah4D",
  "key17": "4ry24Gjo9gn9i9kCnSb2ax6TabxCPgEREqyydvKLBtuC6g8mvv7haLWkeqpDQM3u4PY5WQLNtvR4WEc5eLirKQbR",
  "key18": "3jZudDcXxVdbd2xKucFHzqhDWTb21iVzC5FZs3vsBK8h3Bm3H2uoD8RvFaTXcYFfoRHbyc715xVSgNSkVzw26TNS",
  "key19": "5aP8gE7eBSZLg2JEUNNqBaDt9LvbedKY1FwQ54EJmSCnBbBbQDYxEfyuLEFbxxWrWTmkApotp4Mytrgawyt5efSN",
  "key20": "3RLaTiwJwmLRZPnhbpXWSARtdF2C3mFSQ8zSSwjTzyNJYHQuFaMQDBvx14JqPiKr1k9Zij39p4uC1yBtBTUGyNK7",
  "key21": "27PvUMXg1ZdYgpbHcGC6shbbGjNw9fWALYvna5bVA2yaP4s1p944aRhmsUotrhC6aaMXzPKGsMXzx8FEdoUEuWnG",
  "key22": "5y1wMZ6gU9fFnhgaAL1GJwMt697VccnHkqeJDqP48MR7yDgRYS8FmBv8ieqhzgMkYBWUQsV2V7xXuywK6cbLGB3Z",
  "key23": "1zFv5zzfZfvzzf5tzmNPNQueHdWunZa7jmfB6DToWQzjdS3MnT9gT2atf6oEeTFmiSti4VnY5G5RXAHU4i7MBNk",
  "key24": "5J5wM5oVk3o5pVMqed7DKjawyMPPwYeUK1tjGcCouZYy9kiSE93KEG7uwTYvcSGk2srzy3xTCyb81DzZR1Y1ej4k",
  "key25": "Mp6m7Te1tezgrWMXEuEi79KeZ8jrwWAF6YfbMbgtdxEuCy53Vhh6hgqDNWCtrta6Xz7tDNWyZzLEhTcB4G8vvac",
  "key26": "2VztgtjoPEi4rmJxspxRzuNChWysaUki3FSDQjiycsSxbSXBi7jMPUyEFDhffWVrCLJyE6SSeDeYvFqbbf1cA19Y",
  "key27": "3YqgbqzzgCNSggvZepmGHrAa1qXtFq7KC5CLgEggZ9s2eP1K5RUHMYxFdKeEBYvwu6bwvYGhZUURMfR4sLMgsu5Z",
  "key28": "58kQh2gkEkNkhfKbLt9gwtKAq2X7NKfzuUtWenhNvgZf4gavqvECNCJKNsCqk3qTkwgdvEh2Pis2gAL93WsBPQQS",
  "key29": "4JdbRbAqkN6tpoNyC7cbWVQX9UTAQ4LvdCDGXvZhUqWFWgzYk8nUTNPW1ai2c62ZqHwsz6fQRfs6s72SBbNdqkUK",
  "key30": "5VRn9PEwYCCP5hqybt4m7dtfcJB2GDzChArf5SnL8Ng24FeHHxMLkrgxN21bMJzaLDciP7xL3soRNBKdk8YBELEW",
  "key31": "2JbdywUEofYwdB3wicPsY5UqoYXAq3eNjhRLgXb9kLUrtwiGRwjiYcHA6Ympp2WuxLJxuVvYBfzU6xPwkus7t8C6"
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
