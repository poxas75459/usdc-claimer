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
    "2toU4qjdtD5QQRdSaAKVyw3qSyEn9r8VYU578XR9i6MjEwDtNE4W365dMGN3ExRoyQp1LHyf7PxLwAhRJNiCBb8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUAAzHj4CGkDjszhNUv8ZR4Rgm4C3raNyGGpchqZzcJwMuo4ZbbXEcYNwiaxDHLrwn91aeHebQoDSCzPuj1QZd6",
  "key1": "S85T5vMxakhssSkTbFYgskWRtyQjr95ytXWrxam9wJFR1bcoeavDLi9ov9vf35DiL7MfDSCRrR1XZmUmEo3urmS",
  "key2": "4Qyk7yK8tqy2ntpjWgbvj4XxEyCBckmL12gMuPCA2DYiYwdVWEtaENJB9oNag7hqzdg9oMTNZSK6wymFgECo5rRc",
  "key3": "4S1nVfYqHti4aUJtafcpbLnGBNnH23B2ntFauEVEwTFnAmxmTumuvyjLeXXERuakcCvLtXMusj8BjNjRCrWnn4H5",
  "key4": "5djvVsP2qbyRkmmieCwhFZ6BFJwPr5meiAKqtrrMwV4LPkHXPR5CsVski7CkbLSfZj4zw4xT9WQAPgggmz5Z3jXh",
  "key5": "iCvBDVTY1aRhPxPLtjhk4ve6tRBTtPXHN3J6KmczRvG9dY7L9Ge2p8bmQ7LymBasqGWngNkjCmeWrKSix8yjGEV",
  "key6": "3tE4AnDQycfuExqfNwY1YWqgEX9SfuNZjdejYzBm6Y69cFJ9MjFQsdhEgY3he37HqZLcqqqWbEcxr8FX4dr1BV96",
  "key7": "4Cf5WnjpS5XBFYhTm6d8mb8z5NVPgz85njimt4VvYzS34avSE7PAb7Whd9AMrp3FSitW5J8zaDX7aAVEDYmi9piN",
  "key8": "3VcubdyT1ZwtkkEZ6CRr6EbEaWqDsN2Zo6ERy1DGWfenDxg1tqDtCVjHiZnBhvzoS8bheEv8L18ZumPnAdxLdxCC",
  "key9": "55ktVcp7BtbTbrKdvQsbKPjfeN8gvYMQYrg3iWEUVDtJV7TTC9evZ4zrqE9ZXd8rGmwzBuCxA3R8sdwGkFbXwBAe",
  "key10": "3ws2pz6iPCeKvU845bHGDQKFtM1DZMWZPuq7Jx3EoScmbWnHeehb994dAG7pK24q8LTCTyTa2Zd5h4gndpZ8wy45",
  "key11": "FDscZTN7JWUuV9LX446WhUNt6Yto8yevkzC4FhGjfC9dVwGuzzVDg5ippAwtTZhWzMwUjjPfA7WL2r4XLZP8m66",
  "key12": "3x4kNNAbY1sgcpcfYjhddMR1dVyh2WtMxaCPfthRRRJiahieWoqfwTmYo988tVGRaHUZjWprGFo23f9vdWBsFe67",
  "key13": "5PgmF2w7QEWL95XLGAY4oTaDH1iY7fgehZGZf7KzYza167GJ2YHSTH7bYqXfdRU1x2pFUmETDu7GUs46Je12Dufq",
  "key14": "28UNZXtQEEuBzcMkhUghj2pCExXox6usVvRsMsGhf1wBh1HugyTHSJPkiM7QdpaGkkBkUfsUeJmX1Rz544nvmzWq",
  "key15": "2fSR4GAvgrfUW4N35RnMyf1DSpLfdtFmDt8pUWHqDbA13hfKBbinSK4hWTPMUsGxffsP6Koo93radusVeYuD4T6j",
  "key16": "3zKr8poP8QbpJhsUbCYQhNLNpu4tYPRqVDSQehukapNJFULPUnyUYUTiPspHBTffCiEjnBtxmArXFmXDPfgyTEF8",
  "key17": "3nVQb1SDwz65GHf59FVvHNB2Xso4cGA6kVNTxHURR4THz48m4mPiu4t65KVKY2jfDywuJM6cxpCSU2nUY2eGPjki",
  "key18": "5U3jcnqc9NzAaBGrGafJBRA3yLdt83E3YizbZWkqWgTJssnfF4Yf12wcKSTrVtux84btNkGmCvkKMJ5iKMhhpPW9",
  "key19": "3nRDW2ipcCvUJfMaaZkgRnBBiDtEoiMebeLr7gHVPt6yyVVz8HjNyjqvwakPoC7rXN9AxzQRwAiNFdVBdtJrMiZP",
  "key20": "2X5vfiGpTtRV6LQJgvEBied8jGHZ8BcDUww6S1qCyDuycvhmFpwbT7fwZtHV2BCg8JtBjf7D3VubYy3gnqKvtA8W",
  "key21": "65Mum8tm3P2WC5uxACCRAL2p5TaNEDA7c7L8Rs5Mf9pinsDm5YgLRy79Fdvk2S3n67dZHvSSh9uC6BVhRD3TwncC",
  "key22": "5gTL2SrzpowPff5Hy2rUWuRqVnwyL8JHuduRkCvNf4YUVXssMpNrQL1RKjLnAD2Zvp2ULtAt9TK4Q8DTHbY8wHC1",
  "key23": "3r9XDYHj9WKcV3bLk7HKpfUsdzLy3f85Xtg2FPdb74B8JMZ7S98QV79Ljif1kbfmgLv6abVUjexvhbPwp384f99U",
  "key24": "4kje3pD1812hPrQBdrqS6j8TGYW3oUJZas8HzNDqeqtZ9uWPHstPqZwmur2qFJGqzX69ngsugfsdkcbPXVbhD5tY",
  "key25": "3gqR8uNwVsemUvRNorRfEkzbPESPUdTEvoSeaeEmcRHtoF5EjRs2FFh2wWSmivD7XxWcD27KdXnAV6iB7ZAQYHwr",
  "key26": "3Xv7JwS8zFsHEXrtUVN6MkpDGbULC6xZPaVMd5dBsnZDvaP5Z3Ypno6BStA67CkuuVvEeKSg3AuUeRwojuvvDTGe",
  "key27": "pDKc2LzkWQoAtuinnBBDh3jvD2X8nNg2kAbFMuWFJ4mEVkpjNxyi9h7h6YpHcz9s1ctJ8Pa3pfvdH3K4FQgkC9K"
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
