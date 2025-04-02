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
    "5WnvM4CKkwDGvRjtpGBEZbx3qf2qdYXqLEcyc5ocn27hHB7J7i2HdPKdJYxiKNL8NqsBFNAgBQKFod4THxiwkjoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48vhUv9ke72Hre2SBMqp2qsSFncboAoRF8AXqhagheCHTkLn3DhfZSksQFvQPQsytPvdmcL6e3z3cdwUxnBnL8Xs",
  "key1": "3xzpRjVpQ8GNQWAu3X7qT7Z2n8Xjz3CtbRWUQnsrWxkry4jRNTnsCc3R5zuByCmxni6GbaLNV9fPZ3qNN3F6rYDT",
  "key2": "3SVDDJzV3XFPpPWSbZJQyEPvJkRMyuCLFvrma29RFcCxsvtRcH3YJDW3vW4ApckTTSF8rTnSBjDz4tGHLb7Mcfzn",
  "key3": "4BEXuvzGz8LtAF6Eee9qpAgN1uXXkhqLehpepEc726HMm37riBXxNeritxbf3GhSqrbaDTQBNRUPogGsMPJrrDGp",
  "key4": "5Uz3GUrBBzRKPwff6jYgZt5cbxtFd7FVS2R6KLKRp8nBkq9rBb9S7EqKHHM528UFcFHuZ52AVJkcVopvaDEEmtPG",
  "key5": "49a83CcBfeupYH7taoCiqopK8kY9ipgruCVnQrMeuTDxP1Wb8trX3iojPFGTA71PKK5AisXE9dMFWzsSswJzz7eU",
  "key6": "3QTUmLqyQqCjdVg8YoSSofPz2fLFqWKKmNeR6Nyhw34DacfhmbXmrRTApV7152T3NozdhPZhKogGPDKSasLdGSdj",
  "key7": "67FCpsUwe6EamEoXNyVJ2WdWBNjzQJh4iwGsPxG33Esezzmxiy8aUfqm7MWAJgwij7CQdETytCA7mU37om8of8DJ",
  "key8": "3qRmHSLJWPG9UVFcwL6wyqRyN4mq9PAv1AN4LJhbv3tguDY2saQMdWssPqcTKWMuYDeBWc66GvA1jKSsgjKPMvai",
  "key9": "bschGzD4sqXYoiUgkBcfUynRsg7XYYWmksMEU7BcUKPN9FPgPdt49Mn9x7v568zowv7SN1og3LgJhXo3vE1Zg4n",
  "key10": "4Tmhhzgd9ZMg369s7qrWEES5xxAqGUj4vL9oRgnt48sTWRuL8SrUzWbMFRm1aRx5oGM3xTz7Q5DeCN9oE1UGEq5X",
  "key11": "5mVmiMvJSr9mfk2yiWYN25fuYwV7RuBmNqrL2kAcibrUus98wKxEDvi1Sothr4tAj2pXJ9VsoMJDPFuikhm3xHEr",
  "key12": "PMgvjQZXoYuvP4hqczkP1etb7RuSKs89yNh1LhNTFRwHgLNGQv5hFePG5QM6pw141xuaVbL4w1cqRE8pEFnCsWo",
  "key13": "29nZRbLbUvyRKTZwR2YjCnLd521wefRPkuhWyDptw13fB9URbnULgVhZrjuQ76HDwUYpd9xWDJqYkFfhWWeGvQnu",
  "key14": "X2zmjQ9g66yiCvCHMhYMXb7cXsd4g4LCkNfuErnqza9esBtxVVEtoYfo4RAR788XyCRkFa77WXG2HNwnLRQisCa",
  "key15": "b947wqy1u8H2VfYegdtFVLcSNLivkj5FBT3eHsLb53zN6S2AjnZBRceQSgCcajPjQEBCoJgTQq5QBtVfwVZs6Ve",
  "key16": "3mi14dg8ArLjP8ZKBA37ZRsNRANqGWT6Rmn1YuWxaYtBTh3Mf9MRRp8b8meZtua4QQc8aEAaUAJYUcj6YUgk55fc",
  "key17": "5aJ4CVT9gorpcfG6DPWDDHkajXjpoKmF41JWpxRMxbXxgT557KsAeZ9XVsLxXdFAVMkgh6A2E8w7x7S9xErtTarD",
  "key18": "LzYaFaLrL8NmfTFEeDMsn5wrEyHhQmrzWFq9eb3bVGu6pRyuWtHvz9U7daXr5mwpeFSaMBQCSKdSvuw24c6R4sY",
  "key19": "3E887HqS6xjtauqwGYyx5J96jiVDLHzS7xGvKiJthengdmdQ9Fq7wL1WVCuRjSRQuSiaRkTjSx9cT7jw1tNudX6Q",
  "key20": "C5ZxoKRKtv1BCTzGrif8c3bvx4wFBqPv2q1EBk6msMRn5NwZ3mDABVvpxLF8iBG9mPjRYon9iTWmCHrpz3hgR9M",
  "key21": "2W1KG1BnYusCYNkDewFZghDQyKoXvD3DdPfquY4uKuh1bPjK2MdTqWSXQNxjcs7T6QBmG8sapi2nC5mtd14SVb5c",
  "key22": "57dBhm6cjsapxnMs7JpuMFQ4mrhZDJTRhnR9PFL4Yr3yqEMp1NyRvzAr68r4Pz7ZbNKhmpaa5RhUbCBK5fZCnLBQ",
  "key23": "3JWXD2DtkqNMbuowKb5SyimUq1LJpY3j2vANTs3hsBHCmqgdKBZuc9zQM3C8xQSpXfBwPv6yWADdjnwNwDFSNqHm",
  "key24": "4ZPiqnF3Wj5vXkS4BUtjHTGjKpNEEiMSfTjm3o4SyqELiCRoUHyKNmnmLo3aj2defnNjjXYXPUwUiSXRNn8LVc6p",
  "key25": "3qUtiUHM1kqjhS1JwT96aZPZfezoVMkgkEuEomQmJpR9GGtqrz1e165r5Wj5Ls9vqzdAwcWiTAtuU9AxKCWVKoFq",
  "key26": "4YcU4wb3MYuVPUpBT2GJnAyQ7sWP7M7BMHxNLKbJrR2JtqZpZyu5KJHpRGdHtxkNwNudQyzPaEK4nXQhH792TEZL",
  "key27": "2bG4MH1PS6zM1r373LNor69JP1D6gTYyUxVRqbkhaGuuxggsqF9Mf8F3vFj4DZeWkrZq4neJo8YUNjTaQvum4n4r",
  "key28": "3zEiLN9jvkfev9noHX5DpMAZ4T7LNpQUPT9BvQ2CbREsrkM3AAL3QLMt49edSSQXAKVx1dLMxZEzN2PhoQ1faaD9",
  "key29": "5ZK32iosXAW3ZX8Byi4NF9NHRLstw2ydvDEawzu2AigNL1rPuJ33w91FpJRZKfTVBiXipQYS4qGFFeYA21hQRA3f",
  "key30": "22GCfbcKhqfARvyHRmfCqDsA7dZZDSgfYHHEAL2uwTsyYbnfq2En4AGFYPSWMzGwM29MF6tLZK6D7ZrJfW1ReZCf",
  "key31": "1NJBkfZKG8vpDwrQcc4MFTV4JKjxuYR1gM6daqhGzLpDX3dkzDRKUAq4MKbY4xQd9zLsAxATU6t4mBQ2Aho9yGy",
  "key32": "5hSUuDU3wGmRoESUgbSWN1g5RBdokV1MJQCYYDPQtk6aFS3jYcaymAvyAwSx7V48PaHrVwmL3ofERDX2YaEjiyEV"
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
