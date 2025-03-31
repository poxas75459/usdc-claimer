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
    "poQYMB9FkTTea3oqfGZJx5Wdez7t8S8SK6LvFQxJtqBqzjZUWvTPJvCmMvYZPq9qqwfDDgyfCEz943wDygvXmin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5woqFWhJpzQzooYwxohV5QALrXmVxZQRj2Vnu9iQagaxdD1ex68L7WFJ8PKJP48BYJzeiqobscsgCCiUy3Et4WPF",
  "key1": "4CtaSJTPHmyLqhrt5WM6sQUEcdQWQFG2dSKEoeBHLKtrrbBnaF34HfWikEAc1yQcsZ8nsdL4riVNiMnM5QuESU8Q",
  "key2": "3LkRxa67g21MJ96WpAdUSCPPuQLGPz1haYEcx6hQtRFQbWJNu8oiADQerAeX3pbo9zJzFnNyqCN4DRsYMN1XppT6",
  "key3": "qdB5JXNDrUN442DzsKowfJS9SWytakd5cKcJsCyt2aK4GCLPvWyWdroQ3RTZsDJuK3zz8yd8sXSKmWeY6CPDeHj",
  "key4": "2t4wc3RYp11yFLYML9PntpUpVmM2LtytYVCLQKEx9eg7AWMEXLbevKMAToEwEjCyKCfBEQ8wiL6HNcmimCY9Mhyg",
  "key5": "57WiRU9vzVMGPPBEVW9oBRHrAm1jvEiWUqF8rzQBnTuzQyAuJfTD64oLkTgXLynkkZ6BJsCnv8SgqvhqiYtiRPav",
  "key6": "598iX1tP9ThsnVQARXmNFdYYN9XjnmhYiNGJKngBBwv5vtMnHRFf2vnUYYDMFmvLoh43a6nijoYYSZi4WZCU4e5C",
  "key7": "q7z1VfMrRKsnCfhBeTXG2hfbVXQvEdGspj2yTGb5xMh6PFw1r91r3fmxYaaRZhfYGMsvw6n1dRqdASA7vYncFsz",
  "key8": "2c9t5fDBD7ifdkNjJLYGdfX6qGD6GfygVTCtXtnPcNW5nv45tj5L7sqLASZ1RV75tim6Y1RzYaWmqAqkaMfTihhh",
  "key9": "2x3eWkiHCqbY6grEER4EKG2zRM9g6uXf54oVhj2unSvw7er1RyZw8gYwDb43DFfyFgvUbeGbLWxComf3Zqm3i7oi",
  "key10": "3DWLcxyWM2ann1qT9Cc5r1wwZnc2RxX5ozoQGNsCMWK5fEejYz5FTSHkkXr7rGZdB7UStZWhAPYkgT4KFEH91EN3",
  "key11": "2vrXkHLBeehH1KRynemNE3JDbRYXgZwCBEFhjjpobfWxvteao8cSiEgZa5kbyC5aSU3yzucA2m3AGjoQgHpMjLqW",
  "key12": "2bTw8BiL7xSEcLc8fyanAqsAo5kCjSFKCaQXTe93Yd5VzC8fzBJnGqVinEEvTDHk2hdP6rjd3dzPFd1wsFKiT6M7",
  "key13": "2eSTQ334AyYM6DkhCvAa97t4EdxWSTAeT8QojzeNnjvX5nhwpTom8gqFqH5pKeB7gnJ7c7FPdpjPGrMRKJXUPE3z",
  "key14": "2JrgkBqsZHm2msM2E77UURNf55SDooNU3BfkdtZrsg7Dd7eWTsj4cNuf6GpQ5iRyt4MvgdZtrR56VqCnvTWPhTZP",
  "key15": "3i1ETrnzEYcYWM2EzF16oaEuEbd7CQZTPY9MyuT9qKFPdgwQ2m8wqFx2oxRWz2ULSHHpiKRG8CWhaiJDKW5tk6an",
  "key16": "5F5TtZYXZcJJDCqqH1cXLFhSRhCwveXumNtnZcevQPS2tpgErkhn2X742m2xkev1o4XpBB8igus1R1bSxZ4bh5c8",
  "key17": "TVWNpa3AneTa5hipoGVPfvNPvDthFFcdsEYJiYciBhT6kTGYYeMQeZSsdKaGUoNYDCE8erKZZnScg9KmB7M94Gm",
  "key18": "357yTJoEGcSuaqdzfEaMSASz37HKsFwriEP6ZNEXC45BDycNQmz6WQW2v1HQVWWSUdYW3RwZxpdhqdReUf87LuBQ",
  "key19": "31K4KQDwAwV4AuVv8R3WwEmDxB7Hx7X58durSzCyMZUp8GU4y9h7BcRmh6UXsPiFB2Kk3p21HN4yjwf2NoTBmcA2",
  "key20": "RD4RP5jqUPRfDQrTWnyzeSog4zEo5SHXBtKi1zXsg5mZ56cCXVkmXqxTQUaemok2CrEaAgTBdBUmxxrWtFTwSAf",
  "key21": "2qe2HFcREU8jKe8kBnWXxZi9gUuwFq3kygvFcce45NxWAuyGzky4BK4B3D9QfaL1Zr2QoMqqD3bXKjPM5TsW3kYY",
  "key22": "2HWW2DRyx8rLGPrP9oSQgQXjVWp5MFUMq41uEMBteVzsbAU3Boy3skEGn2WdojY1CvqcM2n8NdLAvsqxyRY45EtN",
  "key23": "22FykvA7teqFnVyLPWSgSb7DGoi5xLrmPbvZppY4ArcPDhPPL726rfw1MQQqJYgTNm2Eu2yhrLJhsQPXejqxR6GK",
  "key24": "53Cedp6ax6VtJxkCgwj4xJ37jApTtN3rSRTj6XiUZYfvishVaVeo2wDzTiVEayJNcnAQbZw7E5ivPECjdW55sior",
  "key25": "b7Pe1hUv4WjUsyXPjqTGtZa4vLtHHNRkUDTfTFRe8mHnb9Ex9AWi131kdzTkeueHJHoPTs67XE6WmurV2exbU57",
  "key26": "3nRgDhTj3Rhm1bq35ru6Gaqpzr7Z2bXWprEZrqeYaGZbdjL1WFibXYE5rGwU7RTPinJBhkToXsetWSofb2Ro6QdX",
  "key27": "3jesWjDmzeCBdq1167AZ5Ry6jnHAFdTeckXAP8xxt91G7ZH2cK6A7UtoLLurJep2TQXfg6VzoDvGPHbyNxenvfdW",
  "key28": "2kBNPZcu9YwX6PJb8NfWyFzPyoWfJtGipLDvF2yYtWyoy7YSYKTZyH71DoG95xwSsvkfK38GCN1EAx7EPcUJLuRp",
  "key29": "3ZcRZjAmgpV6ZAuUd5fDiJxBmE4L7WiSU2vVYpQGJDgEfbMPkRNDfJnUwZ2bdaHndjrKrvThBUbkffxTtDSAxyMn",
  "key30": "3RwJayaXhemuyfKeMJfh9YDMUYRukmi1pk6MsqMFLSyQpJKHcTYgGSJ58CQbuwi5BjCrVMV1VJy148BymDqJkCFn"
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
