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
    "24akv7YJEDnkC2LV1oxLatZCVrwwt4RU1ZYYYtTtmqfBBSSjBBWVPXEHQnAdLeos3j99o6fand81swEbD7KoCDw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n5cyiZ2C56guXoYMXnpCUeMpj8PGNt2LhRj45Vgv4T6QXbaMmsTVr1crBTtGBHzPmauj2G2f6fLteNPXf7wJr1W",
  "key1": "2ZA2m7PS8RzkURGPuTRwmAijkPEPL5T7T2pC7KdL6HM5CX35dRvU46mmcaod2HcrMuoogYgcveaZC568paCEn21m",
  "key2": "3rZS8hkgqTHrXb58QVf611ZWhFb5AjgkKM7P4ukQ6ftzq2SyLX9H12CdX5kqJmdiEfbsHkU2NjgjuU5MnzYA3iuC",
  "key3": "4PcEuCeX1nUexa2gzLs94Pwhgv6PTGDVXf8SgcvxCixunXxXYVnpaiZQsVUBxZLfk5MD527rGH4BjvX9LEk24KR3",
  "key4": "49EufNvdoHEE6ZPLb7HEKEHjob4hDTNqii2VTaq3MqTRCDtn4o6KzhFG4faAuf7dcTjWkRYE3fu4fk4roauEB7rJ",
  "key5": "2vdtv92xdn4cu6ynh8G2nARp7mKVSc2sXqmZ1db5St8hBCdziP2UHRYQRMsNAVpjZ6JE1TMvVENLzeopDeeyKLgq",
  "key6": "4vCk6pBJocuBiVixTfp9obTWwAcyGSroky6YdEDFvzmFKQnwwPxAbH1UKzje3Bhfz1CgqGFfAjJWkX8FEmhM1bCv",
  "key7": "3GxJdZP4RA5BkmAUekbSpVdEL6LJHpmwMDAn6GX2HHN7njMjFZryDcUxFFcKQ2dbyHLMqhHmwGcZyBPswrp57hcV",
  "key8": "2TZ1pwJvtmXzosXZ6z7UjLMQHE1b59BHbLnkYZWbm25qxXWnbVQKknsdoHuJosXLuYweJxeRBv8PD9QCQqmaekXe",
  "key9": "3PqBF5xQuciWCHQXynL3HT5xgNANUHgnd9LNWHcBEfGL93dtUn49ZJK7Y5ZvyDSwoR8owm8vQL8LjyB6op16qojz",
  "key10": "2VDaY1wLtQR479TJRyn5vyg4QwrVwrWbN86EsZ5FomW4UNYjZAPZsNawZHQu4b5UhgQ69711Dkf6NyAiydoDtH3N",
  "key11": "5ca4Mr6pZUcX91FnNsS4evdAbETE6gM424JtJaFWcvJdRURFrxEPmUVyPXjomY4uPuDkkfrReGpCp9o5HLfaJ1gQ",
  "key12": "4zsLZXJSzwD6zj7vA5iEpxYCvFe3wSEdsuFtnHn9RZxLZbB4QeryVVEWSCZF2EPeW1SyLoQDTEigfJFXCWEoogmK",
  "key13": "3aw25U2uPYTh47KSzXfcxCChT3fEoZSJdRCMahr7nAA6ydCNHSqNNumjft1ksba1gSENdJ32sD98hijzSrVwy55u",
  "key14": "2ZELuGAhXgzN2ooTfWxNzRNLpxE17ZL3KnUPb1d3shbh5b1YsLhRMmk2jFz73xGs7UyoLjPvjKY37Q52S6iC4NeP",
  "key15": "2GbqRGg8svp7vnanDzRZMcNQZGGbHz9qwJrRpnE5vSsDDsmnaM8c24iRn1h8g6SPEXijUoFQozjzrwBEhuDEx9vf",
  "key16": "587ekaEw7gv5G3x9SvkrzSjkBHZD4sqdo8b25XSeDPuqw8kePYSYdJ9Por8rG83W2mxdbWEPqciyorZjGbgzE7Cw",
  "key17": "4D1gAezmLTw5aJVp47XAmSKrTNBaE5x1kPU4L69oMwas93CF8qVKTHw39kPAJgwmUj8ZcpVfKZPuzKYckcjhp7kk",
  "key18": "2SdHHeCPZCk72CWUogTupmXCCtRUUsf3LANq8WkUNs3ueG6PbEoJahPyVynmNRufJnnxXKKhjhgdt9EGx2on2XoJ",
  "key19": "3ZhX9f71UYzsM1pxEeb1w5nuqkUt5zVTtDxAboZnPMESjSaDJzqMZW3skkfdDVvYrSN7r2YijPQXfWUdytEaYgLB",
  "key20": "5sFvKkgb8QA7Wu8fHMssx23BzVA2CwBVfpWpiedRZAcK7duupe1wCEcXWVXYioveuRfZUt6hRL2v5xj1mshYfak3",
  "key21": "4RNcencpEm8D2DEKQDjG88zNXrQuh7UfVTFxVkCkSFENzUEm4a9eBx6hUPf99RbkTDqhVKCMe6sK6ZDJorosRoae",
  "key22": "4ceaU9RGf1xNoKzazPWsAeSrTkL5w2CJi3UzQVGnZDZxg9qgjauHtg7ERjkbY8rNb3QFVjMFLN35QoAq7J1b5F1f",
  "key23": "37MuYhQbiocgmRbyoXAnXkB49XbL6FYYbhxrnthkDsDaFuXuxaHgcDmADVmr9a2Ludk85FkCDodXKEHLRmHJbqca",
  "key24": "3WZAQnzu7P7rRnZt99PkeG7yGAT18vbyHtNZGyrE8iay4vasZvAVKwFGQiyKUhTWxmiuiBWEyMw6PhBE4qo45ESA",
  "key25": "5LWg6dKqVnYctufeGrTzXhJWNf4uv3k2i9WwE9FHhdVaRcJSpnhut2aqTfSah8K1s3X27HDH3YTtThFgG7FPybyA",
  "key26": "2An5J3XKQXbF5jKSYbMKS5xAdP9tpVVunJUgFbPP5nKj9oxa8aQgBFF5Kq2edrfcXaXYrod62AsANMoBQyreUXCV"
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
