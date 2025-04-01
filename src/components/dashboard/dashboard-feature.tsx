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
    "3NqH6bCJAPHQBHzgoSxYDAzyUUP5ZKGHjjeH838zFMSrBk7sUexTs5CZTaVWiNZU5fN3S4uGPrjwEWVMXcKRpuWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MY6wxcU3iTaMnEJp2qHTy9u6iCWm9CnkCXCYLbMaXiPCCzR4a1kxxY1XfiY13HVMJptanK4PiwKDCgQ8pCTG58",
  "key1": "3FosFFoWagXxzCk1ZvD6wRQDnyUNRHkVXiEC9MKmbWxbCTuDiocXqyNVDmmt8NnQ4ycjoPxzQzLfenUN5vExBBqa",
  "key2": "5cvdmeoypdSxLd174TaEmJM9mHqoZhHHzCiyQ5fuGfFQpraccQesct7jQApbw8fac6K359vp3xpwfWAmnG8QmEZi",
  "key3": "5A3yiLHpss3Xmgc554ZqmDTE2YUQxBH8F88FUTN8zpqZhmigxwCBCna6oMrpfiubk9ZV6V9Lwhkbu15fD9Sc6SCe",
  "key4": "3EhBraHDjmeu7ZBQKoRcY4nAdS26NCNpKu1mmx43hptkgZRGsuVWywbEv1B8LCbQofBFnsdg7wU4XGuj2HChhHJf",
  "key5": "2KA3jaf7t3n5HCvJ136Ss9b8XdFyYDjaEiK6oFt1hpyLm8Tn86FuVQGoRUMCVtb2QGyRj1cAWUjMWct57DL1TfwK",
  "key6": "t8q1tYZhy52qpU7Hz3zaHGm1HgJVXmuQxThCfsW2gP67koVLmd21rmX9VoGD1DeAtFzXow4VHZ4a44cGAy652sZ",
  "key7": "3kT3wsda3oFppRa4C3UcP4Fp83effWDQzB1Hjb5i5Z7H3E6kyTXKvKmQG6ks55gS1qjkHg3MjtSi3yLRGPwhYxve",
  "key8": "3d36M8Svgo2Ki8GEtJUJnZpXLC8c9azZzHmM9381KXhPshou9Z7dk9p1ARo7npAcCgogf82CxvFHpz1qDEA5YuW5",
  "key9": "3vio52tJM9hcsxVG7dncu7m5wkD1QLPZJ5vQvQU5hq9Z8Bmf6NoEuPCW1XCEYw7QrfoDwG6oj762EAeEwTiBP8aP",
  "key10": "NyexNpB1hXmWnTnAGe5UoLmCKtumFNWBhxHg85Gxa9idzwHfettGg7hNc3JVGLZY2V7MMLQUuW5K8Et9smwgWU6",
  "key11": "f2vRFQLbUQdsFA3CpzxDtvF8Bi2MGF2aqNeTrW4nC4N32kosgHjpVomy4tGqoCYWvdFxrCKpNvqp6VupZ5wcvmE",
  "key12": "K1nV5rWRFUKTM1txrCuHgbiFxudKbW4YwrRRRANUGLvqUeDXC1CDm2gpXNtaj6yvDgAM7jbzFsFPTSyTKv8yU9F",
  "key13": "3Wy6Z2zViPYvotxCqY9ZiboZW9bZXMumA3cR3QHTa3BnVKJzQuA1hkSpoZBGu2FoDexsZNq8vB44tY37sL6qCdxB",
  "key14": "wGGXn4UwcMYjVYSEdGURQE7vjMpxBUcYwvxruxXXirivo7RpghPCZoWzMWFPChzUTszimiCu44f8NnXuDKJLzFz",
  "key15": "5uHRyDTh5otBiABH92LXMGmghmZruFWAGEgfSWJNvcpqBTE4aA3XrAgSteH9NZ8Mck3Tr5GY1mDiuqvfQEnZJL7v",
  "key16": "5eyZ3HzX2f6EStXe7FyCYwi8ucznYsm5tMrYd7cuNQhKMKjNcdBnBwpB6meSp9y56xuxdCfn2C9nRpbZtE7HxPo6",
  "key17": "9Y1weVfjwuWpcVctVkoh3DVoPq8jr2SzfGiU7FDb8RSmCFHerJWw1mmS5Bwm9niCT582qYggzwoPEWnEUi8fWe3",
  "key18": "3ao2FXTpUb1EiZLikpxzFNNsJj8ZvdruSeCRN2ALWd4utCwJ7MbSxHrdJ1dh4YZU2Kp9GNiLUzZFcyaK1HVej6Ew",
  "key19": "Cj4bnBKXQxeMiiR5XzCGKYvbPShUdpfZ6cYVkpnyPZybd38p2LoNyWQVMDGvF28NLVV2oMoAhC6DDE78qDRc4eP",
  "key20": "3utNfuh9hGtgwy9tUAQUPCWUYMnNz1qmNkrZdtP7YHsqMwQ4V6GDqnxCHycLbDAsxdiTXhwuxGa47srA329UA2yS",
  "key21": "39Naj5rDut9H8wqVfZmUA8pFPmhi2jvWz6vNNDsZkj2sgact4eSdWCWnwsQ4c6eRsTXDs3U4YcBBknJkyBYgVoLJ",
  "key22": "5yASpur1WBUyMSJrtBxU8rMcwvisj7oxpd4gastdT5ATcsgk3BC5YM4arJPMkzE5UreMhDBnWYfb2yHHPX7QqSx2",
  "key23": "5ZHRDJBshbKxpDPQv9RQGP6Tr8PeFYkxYHicadP2uGMGDW8ZYXttTy1UoFG46nBBAB2jPL7YEuiTM7if5YNb1qSQ",
  "key24": "634iniPv7GW83hiZfXGaoZhLuLZZmq9dXR3pGozYaJ8c6DovR8HP3Pd7hzacdDmMkJKAuKGcsscRZefiKDo9Zh7K",
  "key25": "5inNrsq3rVezm4VAVAx2bMG7ivRDSy7h7t72gfLn5swBCNn25vq8YCdVqyKPNSQhJgkPt16eDaE9GuUDm99YYUB4",
  "key26": "5WvRpqCAaAtj1mBzsLDBkEFmq6ZwJZJ12ovsF5oZ1EEdnRCBiM2nSkvLri4AKp5EVbeSPrSi2YA2SKiC1J4MEm9p",
  "key27": "53V3A2zkiUhr3AxdQvgALEN5hjzSSfghr16JxSm2bFYbsawaQvdojuEDbegtBsU5kvhzeoN4nifRk1pRSwgtKFdE",
  "key28": "5CFFJcckzV249kdndi2Lwbk4bPr3CJ8sZoBRuQBvUpxAKjCoSe9qYBJfsf2pVdyHgGgKkebi1LFtz5KjsCgnkfcU",
  "key29": "5ojjHkmWG53JE8wftb1ZVU3XxVAohumKnyJhdvvFj45z1LNNaNqxPRVEy3XRXGX14zz6Avj1ENNnLBc47rfv27vh",
  "key30": "5prJ6CkqHbAB6TVYDLa8xREw25peJuBVhMkjaNGQjbrKVoaJhXZJWGx5WVf5ecFi1bZcuZ6ydPvgtb6p9yKj7BiP",
  "key31": "VSL3PN94a9CpBc14MWZcgpFSac2E2somnwxRerYGk9toQxXsmKnecCXHGE5fBhweKgHsb7awBxxd1zFgKdq1nvx",
  "key32": "4Ka9VWbsvvQzJRvxiHesSyV2vB9zQ1mXXXnUM9EgWh2RPHcCHWkGbGaVbgs4zrDLNKBvzNYQ6M7Zp6UGNcg588sk",
  "key33": "5FkjHkEbwRaMGdPgfSXdDhTyiN9u24ZA6xMcjpYUQrpSBx2vu9aGXPFqVzspZCSTyEC15su52LPCUreEUpZ6HYTS",
  "key34": "89xjAM6J5fSqvqwkHfMPwoantaeeKrhyCPzkknG9w6u8DfeWipUzyT4MG7sqEKLWYfVmEUXMD4zo3EJqizbqctC",
  "key35": "3e3zNArYi9QEhwrXVGtxtDK4gWiHrnxEZF1tN2d5BAGMpTL4P7p3sARtwMDKYackUdE4qSuqjqC9KBUcsGooMEvm",
  "key36": "4JoePDfngzv11qjRGbpt4tdzfFXjyrqdrYqT4116GBsNAtt1dwK46kcisCar4FsGXzdro8We5gSeCnBhsNfKXqhp",
  "key37": "3t3e2CMpd12f1SYAuPvjdY7gpGCLozZKhtRKEXtJxUTtXMpzqty7rryhKiLJRiRMVMphf3AFjR3gKmZHrtJFCrCR",
  "key38": "61o6g6m9acs5XVmHwu4AohYJem8Ld8rHUR6Xv9fXmdmrHuhaH1Zf7pcH9oEP2kTfbvBmNuZxcJnC8sT7phTb6f6f"
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
