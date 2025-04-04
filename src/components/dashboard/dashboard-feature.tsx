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
    "LLZJyGqgUwW24GvBJrZPbG3LtRDwNUqGhqNsm3cVFmjqG44RsyPh1LhkEkdnsghDxPQFku1jEZmDYjGFxnh9M26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hQqSwjKDFmmztyaw7qDQcdEdY5TUqNRxx3UWq6qm6rVRYYTFC3SfAJ1X48obMEYmXmZRPfyYcsTDqHb1MSfTM98",
  "key1": "JTTtqMfPdVr9Jhq5wJi9xnvbQYE3ecF6Xdqa5L2KSZP8jV1p7sF1AdNN924xUZofFiCNvosBxFR9Nw9YpRvDCLa",
  "key2": "458esyx1gZECmKmzD5jtbdyk6XbC8QFK8ieww2UHpkKopvMyTJTTKbSa4wtiuVwJFpRkd7rnqHQEBYKakXDYJB7T",
  "key3": "28ArpDYibMi4b5K64iK2twdb1Gig84R4Pc2TUYnYb9zK1xHpHq6cBrW1eKGVeXE25rqkk81MhMDJ4EqGTeWvU42Y",
  "key4": "jSNbnM9kWMyHwugjZvYmM5VeHnsP9giddatCcXKyChzNB1eiuLgZhWvMDB6MawaHjx4bS1eb5YJEgAz21oLYt9A",
  "key5": "4qnQycVqJwLEbLiCdtu8dWeqjAsVatMDZwHPBJrefFmwvbm6nw84eydCF8RNvHn6xYoYyMtaFBfH29iho4AJCCge",
  "key6": "4Y8iqPuo5ZeGcVsoKojRXpLmH9UEG37C8mzh9VzwKiGxgdycC3RnCRJKa9xVv54QJD2Ycx7ScCDefyoYo6Nf7TPY",
  "key7": "5J73JfMQypa4jMSXoNMy7Xm6pMVAeR6GeHs1UYE6xPFmuMQLxu7iENUgrNCMAmKaAvKXztdUncGDnTsCh9grPR9C",
  "key8": "4WFm2wFQs5PE6od3U6sFDCj6Umowxyhx1MAVmAGbhwa1bah7qMYzZvu4ACLKkjkHNuKgUn121fpWh5kuPSiesETo",
  "key9": "65FzHyHoeLvJzNF6vTXQnc3SQuwb8wmZP84bDSHeiTV261kKD5fAHBrveUxG1eFjnqkoErCgapeQkPFxscGnG4hV",
  "key10": "2X2sPxMj43hBAV5JTt8mdqLbgN4b1Mongmciwh78T5zgym17qg7PNEdCkTAHTB9gJ483sA4kbXBUQWDwa8ZsyW6i",
  "key11": "5fEo8cmwvfaWx3JXtXUfU1GSqNx5SVtro9LVY7DXXnP3fL1RvgEJfQXPBAX2jfDDuDrn1y5kWnDfy5u8UUfTkMBT",
  "key12": "26ZT3jWw85jyq3xotyVvXLBzpvHSiodLXPiPaqzsZ8kaTmyghPxW4PfbkHMX61Fewef2V1SKDGgXm4g8X7XmJ1Nd",
  "key13": "59MFrDfpgxqptVZEhdnLApnNt4qrEDLAuZY3BpXvB6tEuPJttb4dQHFUK22hXE6WtiVAL8CBq73WQ7zx7qa5VPyr",
  "key14": "4y2W6zJ3JeUfFCfxquxn9tXhu29orXX6w98SXLjXcW8zgG6pLzw5WjAFfLRanQuvcf8xqwq6hRPYuiLRTcMqzHqV",
  "key15": "49dzJXLYCbFv8DMiR6tM6AYxRKoRdiqSLef9m1VwriiaHjJgcu997sZHuuoL886Gjj2YXhehZ8LDHkTLUs3azP2P",
  "key16": "3rTLRTbCWqrJSNBDDdc4b3LT2mhRF3HDEoMdiAF7RBZHeMkBQGMpFSn98eQHc23yHB8FFw1pTGyfDe6Eaop2FayA",
  "key17": "KigmYvM5mSDr75ZuaGKbpq5zToBoc76pmWoBzTSP5FyqXtb2uHZxKFr9bpWYofRoLstHEp9yqPHbGvCD8d98VCH",
  "key18": "4jS97DR932q5fjmdTmwdo76MPECqxhorntC8GYSSsHPXAktEFDGjEFuWergA4kX5kjmGYb3CaNoAYb67XtghR2oU",
  "key19": "3H5PCargVMPkQ8H5B7AocywdhGC58CCKZaWGeE3mjCXQNTRnyKKdQn9QkZfq67zAhmJJXf6DfNXMdLdKay6QPkVf",
  "key20": "2Qa3h9cpYGDs9p9NNTi1U8ooX47dDDMELofqXMgbNequ977g6iYLowHnothKmav3TjWs7vqjDqvfapAe7rsuSjjM",
  "key21": "3R95abeuPTp63bUr5tRiNEBj3pHuvoD9XsNMF9ekdpHgkntCdh1Tg3Wa67jNqeaWfqKFp8thrrRvEta1gJVnysPn",
  "key22": "3ygMYn9LMZwfQqzYLLcoh4vYfzVgcYgxndKUJeXUB8nziX5td43NSMdSjmqFs8VMb5GE6CcQyDZDNhUAaHRvYKnm",
  "key23": "5re5yNTkUmpk8fxUgx8kWhUALQBTcYoDQkJ8cVZhfPAwQcZzPnywaPDfUnHNq2HvmMKv2owLVPfC3ZVoDhLCaB4B",
  "key24": "38XN3oUWAY1r533AVCXbsoNWCq3P2rq3mScRDMhSsi4z8QHYbxCsDKQ4mLeZ71TDHoHNgEhY7cSkw6jsg1UE9FpA",
  "key25": "31d5VkeXoxwasW6zFtsgFGgj8mNEqGkua3mzCcdUDnAHR73cYAV9aSq2Gi3uPB4QAYPSMGiZ9bLLwLc7QewgDWZC",
  "key26": "3jLkA6QuWA3ap6eXutRn9h4Fhfituz1SWt2mJpxHoYJwk6JSNCcs9YU8bygPdjndZyRU1heMTsk9qnHEhKRhiLMD",
  "key27": "5AzgJDMS7JmZYiCxHRLrrxTGosghPHXVLqia87Fx7kyg6DEsMp1PzP8cYsUDmps3ZpekDUEF3QbdJCxAwcPy9ohN",
  "key28": "5QvSZHjACfhCgT36AqLXVvHxHT7RbUEBdWHgbBi5EkYAMFec4TYUp4j3oQQBpvs8Ff2zHUMi86GQnDRkLjMthmCN",
  "key29": "2CjfcaDYGf3CXTnGBUUbj2uqJd4Fs9tqJZH6M7Smm8mCFU9rKhigUMisdoDEH7JqMtEzur14ioUgTpmMWMGG5NzA",
  "key30": "izDrsGgpPPHEbWHvGL8hjozfhDwGEQz4rRxnqAfD7dxMxYmZFvHL5tRA1PESRrfvE7SXmfSXaDzti3kz9QhcKGA",
  "key31": "4cKWEjchZTUbjcybajUHns5r3TqyyjALY3nv7WcEWXnrouiDFYmWvUHGe7KBcTFUBKX6Z88o8vQpiGbcKmT6xzBK",
  "key32": "5HBZYTTmDRBcXZKSLtemGpNpk9DHLpKoJr4s3GEB4S2YRxf3gRpAotBH5wESLpnA5d4KQ3tEBKKpGXcgw1DQYJVM"
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
