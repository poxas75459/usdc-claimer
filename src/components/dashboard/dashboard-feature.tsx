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
    "4q76qjUUecCcWZVbNZP2E3MPzsexvafTwZiuCjm8JKmnszbr5k4gLSLDTMpAEKTtSk84gNmy4uU42CHdQvjxkXyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GDodmjEpc2fovVR7wsByT4V6DZi82n8efUvFUKwMsQQMjM6SUeBKLchfexf98dh1D2henEPLWFgsrZ9UPRG1Mqu",
  "key1": "5vP1SZD8U5z4mTdH9APKoo19zq32j7g4mE33FRPkKUoceK5PkQgeNsg3woTPuuUFrQBS4LuvPFUGw5bwLSPiqQrp",
  "key2": "4Udtt9m2MEdxN5CVFWi5bFPXJ3sTHXfWAUFFJ8WUeYiFqLakWKW4ruRFnjYuDHJLanQwVdrMN6asBeRZdqyaZqLg",
  "key3": "63L8Sqhz2iTjVVjyZPevqLCwwx41wuq1gQ3eYvhoQAkL3qKj7AhvckuDYJ8WndscSqHEs1HtyeotN9poBwyUKh1k",
  "key4": "5YCSr4R5kyi1b7HqFcx4sYdK5UQJQVSLfuKAAgFqzJ3znw5aFHoyzo3rBRfYRt2GUSxvar3FUNQvVk5X67WfokyC",
  "key5": "ZvCLAjykuQSj5JdGgaq1QrE339t5kQV4k1HimGocmtQSfDQNMYYgisD4sxvBVRjCjW1pJgDAL6T9CWs4RcxafSE",
  "key6": "4LBGxCHmh4MbSaMFhGhPVDnGw7G2v3LFVvgfhiqKXFoVMcpzRsv1MWbWq3Y2Uwa1XeGwAMGaXWfzzSR3ehnzGxEv",
  "key7": "26skoeqY7SjiK6qytnXXgDHmgy777VBo5y8dqJeUCWTv8ZCJvCqLUzKAqPFMBpqCt3Ged9nb6EG2UQKZ3h43Y45c",
  "key8": "C4fJghLiJijUoajMaBzPoANnUWGhUvQLe34Fnk85hCVBDo619o2AMCENQsbk3q3PnqSkFrYWThRp6kKYfpJrdr5",
  "key9": "4K3xzB6s7JBbyVUwacpRN1F5wyehhbuGRNt4wzccVbLNQvVXSFxbGQ6uMFhSmx5nnA3RDANaiuRf9zfTiuEwzeir",
  "key10": "2MKg26RUHdGxDRe65VhwJ4ZxDKq8iFD9tjw3znJtG11mPXWTKgWEpopDz4Ya8u2nscmofMX2Wmimrt3S17nWfYyg",
  "key11": "2uamCWsYQdx2j2u8dr2CoBDynKbwra1Wz7QyrpETXNstBsS3AvYugyLjNyJXhXvo6WDGLa7nY4WZ5Ki3CrwkLyzq",
  "key12": "2oSvFe6vHS5v8m3bqLapgcqMUDoJDM3m2VAb71Jy4eNsbkTiJ34RR5CVAmAuQEAtXBypdnY7wTfA6o1LPBvscZLd",
  "key13": "4aB7oGnUNnrnoBKRafLUYGRRQKG6DduwdSAkSrLXSxBq1LPnN6ojk9jpZZXrk7J5RtFPkszPJQYVJEkCxjk2TMFM",
  "key14": "2zJAKVuCvP3xRspU7SQqk5coCUS3miL2g2DaQ4Sag3FAbXVLkhc76uvRnjNsE5PEe4EWN9kM7c9gKENQzdGhLYyB",
  "key15": "4Ti2d6HAuMaWyuz3jDqTh1xzCEdRYS1TEXoPXjqYHTbTPQ12gGFg9HfvUk7u36cmUUdscvar3KPtKrUFbLpVzqYy",
  "key16": "4f2PRtsu2mEpcMFiwAGrZ6n97berwh2zSarieA8GkF28aUC1m5Y79b53DvQay6UhK57j2i6t7DfiXN3jMXTtvgkz",
  "key17": "5fNsyyaX2r1QGfGe8MRegHdvUjtHrMej2nbPcECsowbLT9i3XnSXdwUJw1kNPQC3eDGbkJ1UFJDasEGmTGSdjfPH",
  "key18": "36cFZhVFxvyf8wLDKZonmi4ZZXinPYuyKXfyR8Gkvi6B5Viogf2dahdpd1fd5HFQZnfxbJxkBpoaCHdMqsT1zxhn",
  "key19": "3nghzgzSYRqqYUdc7y4FyrR1pitCpR2mmCVaKdwiHrqRBRzGSozc6LkqUnyDxpadc8D7TkpKc3VhPBkjxnAfGfhS",
  "key20": "61URMcawDUCjJqPnLVKxJJ6YJJ68AgXBEmVMha2HUQXBcF2aACKCzd5mWV6fTBSV2tg93ZxSEZLieaJs4T7Z3b9f",
  "key21": "4FqvB3jxzF7nh1SJBzchaau1DhDcRDjb5yBHxpKTB7BKAiRHj5hY8gUiGm1yzuQzgRVm3k4JPDnd3gx1bYNvRm3n",
  "key22": "3pc2A4w9bP5xYDZUKetW8LwdKVE9vHVCiNSrK5SLDRSznURdaqHcZfgAiFvnfRq87m8YxVP87cHkywdTjULm4G6H",
  "key23": "2nefunkqDKaDnRXUu33JBomk5iMKfcqexLHx8aE1m7T5K7WAKGamDE9pbuYkDYXGwwHLXvKUrxHgv5iLGnPAFFjg",
  "key24": "5LfhMUGAXQukrTkizwr4g4K1ra8dKnomBTcnkfHR4Fj7mwGm8g3cQKEj3kaZAg1RsNR5nypYjCNgitpcxgt3sPUr",
  "key25": "3bWwZX21J6KxDWT8QiKuRNNZNacv69gYYQaMnGkEFnZxgLAuWq1J19uH7vwKQy3obmAKCxK5rtXYsf3w4ZKyhCJh",
  "key26": "59H1SutEy2vfAjQc6PUi6oMxhHc2c9Y5WoqKzvtDmWxFkAhZ1sMumCGju6EHjoK187JToUdENyXhSSvvnBe2G9WX",
  "key27": "eqeiZvjttu5MzrytLPDo9uSScuWfubAGrTjutovRM6FrS9iNHHP9C5PU8paJu33M2A5ue3hN6brEThXRv4gSYnj",
  "key28": "33ZpWpSUQg9whVKCAsedn4K9Lj2uwdGgMcKda6cnDXPeSzZwxJ4Xrc4iU8VU5X9KwqBB8j5BPmMQ3bRdN8Gk8CBH",
  "key29": "3Zrgkyc9DM4os1CRv6bA16n1bLBfXcAvvNJb6TM5ZNq6RgpD7SQ1Wngoibuk4pr3CDx1vth5aBrKYwaqHNJFVrYQ",
  "key30": "4XnjEAwasTCiy7FFLbzKzjkC3Hborjwejgzzx3meLHnc6wFE9SvfEbxwVBrWhMyWd4dZxUVLkuk7wLYqGaW8UMm1",
  "key31": "5NWtryYFXD3pumf4dNAkGeiTd9nBt1gaKG8Vq5M4d9VWVDrteyJrQZGW6fLERCbbxhD8u8te5jFiXQRmEJwst5Zg",
  "key32": "5k18gVjUnbWcqb73XomBwCYWJhU86NDPLpFvjrL8MqFQjLRNDRqPb9LvYdV1nA5MZkddDQEXPHN5icnW2v1nUfdg",
  "key33": "4LycJkhaCjGHfFNh2y1xznpt8NZhmQWZXNyxkdrFbWRW2NrseXTL4GwdcLpN5uJSCZT9RPQU4PjTdXX2KT7TFojq",
  "key34": "YfUh574dVz2YHfhSusPNKbiNcx41qXupr9uAwSEhSGvVAd4RPkKSAKJK1PFDNefYendNMJ2Lyj5nnpLByj16d75",
  "key35": "3nyFCHXLG1aBXJEN2f4RUuxTw3dsWucwS3kSLZiegSuQmNu4XPdYZW7qDxS6sX8ktUCo3dCB6B8DexwFJpn8WDEo",
  "key36": "5EhEihcH7TinAEUAAPXrTm8DHLTU5GHFEJqZmzE8E4md9b4WyvStGPDpAyXhUjbBfV5zC1VNA7jWtY4Fz8bX9UUG",
  "key37": "3oqtcJhEybhroByoFj99QFfdVotWcv9DQMQmFwERFKapKjeT2oQg2Ec6dockNUsWdFRoAPeSk7E84kh6RYZnsfJH",
  "key38": "5vHG1WazW3oqKa2CxJikSnB7ALwvYZGBPxiFkNhL1WRLsF63fs93y5eZxUz1EbTjuxf2vJQNkXeXH6DNtyNhiBkr"
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
