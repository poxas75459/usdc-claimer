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
    "3Q2ENrncTSFo1zzbFmSYsyDGSe45AiRVWbzXSG5CNvX6bYZdMJhuQVXfMgbrHMp6q48rGUTJRiAP6pCoEamYzy7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QvguPd7ijPPwBP9Y2LqWjE1AxcQFGR1jACyCaBEEGGnojsvziFpV6y7bCV6SUaMrjNE3J8oMfLHLCWANriMsSB8",
  "key1": "2KNWngE59ZkVBY1pHaeMTtjKa3v2hcLHGf7dq72KZGkvcisDeRLEE8tw2ivUtFxgiZt6EiB5rQTf3jHHMmhZ9NKw",
  "key2": "2DPjeDpsdkT9KtBTUaSqzyNnK2P29rW6nG64FSVhFiqJAtrD9YKsKJCejcMTNnQ7GuFa77zvTQB5y9w6DmkAaevn",
  "key3": "vVvMvUumoeH9NAYqxECAvKWB4PiV9QBpz7ydREJvryeCRbGBcWpUZ6Jp79136xMxP2hXtLqkjG5YjCqv7BufK1k",
  "key4": "5EjGDNMq5KgHUEnAwrF9xo54T3KKWfZBoNJHiVFRo6tSnXPymyv4J5hCd9VN7y1GtVkXchYAyM2NMqTxcAQjKRyF",
  "key5": "YK5Nzjb6XZgHKtfkTzm55SC4nezwLvDkJhNZKzu5zP3SzcVDJDQCoxTHgnW9yRDCLcDNfKoCw63JnH692dfgSPU",
  "key6": "3NvDE8c73SFcDne2SqDmJFX6BL492FKJTvEWfihcZaBqVCn17cp4AWyqjjuxU7mu76cMPpn5kuLftYrW9RB5Vopj",
  "key7": "5Dz67SHrbjetWPAtNf8cofg3euNbKJz5Ghd7QTUczxHRgHvHpkVKycRWEZZMfRNvN11LdGCCQPimmxeSpQiqTTM2",
  "key8": "5HeqUeRfxpyXg5Nx8ngGPbjswmRkKspj6smM2snkbGvrwU4GvqGar7gnpuV5yLWisanLnK94BznxuSRMpRA7vq4x",
  "key9": "bgu6WjzUmbvTLDTGmY8ufAwvK1rX1GU4BwX5LZnmb6tW8ScaQCh5FhsYvU16T2PJ4G4vnoaHBWh4UekuQbUx7eM",
  "key10": "63uXmMGCWvAHXuux6gPnKfDvn3YVGT7Tag7Mue2UzayoUfRSQXDDPthiEUjiqpCAmzz9B3PVi3rUYqFziwHihSug",
  "key11": "4ujwZxL7dvQFk5WrydrR5C7VYMScFKCpBsKGVZBhKHNSEQ1ocRiKjEyGovX4KAGG2qMamoyUejYXfho9P2QzUbRd",
  "key12": "2BVNn5RR2cEHViX4k1EDrYufg7d8we91xEbEL1QQ2J2UT2Qpe5ovEfeMzocFgpifWcUEJLe3vaELPTrrFKmwzjCq",
  "key13": "23EryANcDrjHSN4qz8u9QxtXd8F5N5GC2FJe6NcJn8vV9Vm319BMqtE5biDTyxC8KJqgY1qa6WmPXHCnyuzinVNi",
  "key14": "5HebNRcjGjrHbfswobQciqKwsuZQ4wiTCwfpc3JApwZy59qQFL9jzn5sP5wr1bvFwTCQZA3HsxZvUkJqy9XuWeHt",
  "key15": "2fZzGempSQA794PDGZZssfwG9iPeAEoCVr8ekimaKUHZfn2vPPCbBJSmMjGLu19as8JQ8n5fn5w9eZmGNeAny7bm",
  "key16": "2qam5TAo9YkCSAf8f2LVWU227FThzbQHxvdyWQ2xusxe8KuZggdLyS4h9wrHwoXZcqAYDdngx3t3cmaPgSJxwUpv",
  "key17": "2vRwiwBz8Sf9RzisZaf5SJxx2eDRE5RzyvtifEFd8LjT2iP4yMkqjmaa7RVEFoZw3xrmN2uadRAskWbFesqrwEDw",
  "key18": "5KirJ6bsWnHH8HTRPeTFmakuUEPwS2CTyxyD1qiSxgcTZfNnoLTrnMYeYD24eyKseDib2WxKBmCvep1PrchDReYH",
  "key19": "2RbVD7SBmwNk4P6Ty7i8yuvsZfLoAPhkWGFL5qA1dCQSg5QZ4s3MxV5E9hq4USUuAx1zNnz5DmHJjS2bA8EK4Tv6",
  "key20": "PoK9bfXbuaCp7tyHs2WeTTdkhegcBDmBc7xJoTeogNL952uiC7ib1FACM8vpqk2BaAYXKzF53Bjg8sgMXcuxAHw",
  "key21": "2B1uvAuRsc8nn27zH9pCHedM39eb2CgPpt3h2t753ssChq6E98ZwK1SCL5E1LboVKJRkMznkuJWP2tSQib37juiU",
  "key22": "8RmfgrUG9Z2UpjMhf6t1jwHjUqqT3hfKiMbC1czS7GcKqpBmF63yFPKmAeYhuTm63Fcr9jhzVCkM9LSgcCnmwqX",
  "key23": "3f4poG6o2dzwa5sc7ZhnnHoKwzw4E9pmKEve78kDKaR7suXpZ5vLUckdnfjsjuYHiKbuCjs31FLYc5i5gDNUsMY4",
  "key24": "65vsidthcTC3Aetakkp69ae9vJ3dJd4EWgjFgBYxKvtZNJVUPXttFKcnDSKzwSb9hHLW4njW84pskFrFxD8mjUVd",
  "key25": "2d3e5fZ7WDmLGotECLExApa8zT2HuCfi92f9aAvN6y42VRBZaSnXjMHcZui6ZEn9rjMkNB7pPRTCBWU5PFbwo5Jn",
  "key26": "4SMmveUcRsykjMAE2ARctUQdDTZLvimuEUqF5ArQvLgPYTfHGDzRCYLLNMjDUG1Rgfr1DEHDRvUvEkgCRV1SYrvn",
  "key27": "3oPWdUpcfYNY96S5eYjNgss21xtaa2A6SxmEVWXGjAf4fu3BRN54RzMvy5XUgsMUVndjSKyt7VnjXk7pe2kdZfUN"
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
