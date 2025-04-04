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
    "3JkevBaqZbcCS7o3NKhcwvQDBZvojKQaScWZzzHf2oW2VuNsRp5WVpczFd91gmebUFbncjHUkaRsmRJzcH1Y5tHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ZcigrjwyK1HF2nVoy5igjPP8JKZmJfSDLSRPyswUD93joTLDZpndbrKQaPhW3VaRGeLSdgdZu94PTr4oVZ26JB",
  "key1": "5LqVDBJyN34Lapa7UYiq1rDCokyTyM4SnJBGzUmmma4CdprNrqF5aubVzqgLkodnUDKQ2aVPTCqNErLkdXiQwQVz",
  "key2": "5bJr5HRfEzUtckK4rxifVubMo4AiHqNiobdfXRLo7sxRMNEG2ALFXVPGU56roiQHsgKcwuBag1LLDDkvTsuPdSEu",
  "key3": "5XWADfF8whEjrZHtaPmRWJyc4sx1wzy5yATQ3ZRw8YvGcs4rusZF1ZKPr72Rm9cib22h8CHAyqsvGi664j6zvREV",
  "key4": "4LTEejRbsPijZN9GwEfu6GFH8RFWTwsLff5CfZLwjXFmhamqtMCQPEnUadWnn6cE4kWJBTQh9mV1PUBVvoNpNmB4",
  "key5": "9YegFx2KuvnFVUfsZp1AShqZ9aNGqs6ahbRjRpMw54Ssfao47y2p62BqHCKgM83AiWMmry1LR32SrW5yDzqYoTk",
  "key6": "5N2jLa69Kri6dFYLz6MUrXhCK1Eg8U3yUG3sYbHGeJd2MC6JR5kg124aSPqzbFH7FHMrQD3av1MD93tGc7Ys2pSP",
  "key7": "2QEEfgF853xtaYnyBfdiLf3jri7hAwnaQrux3w4Y4qaMdQ69kD8eybvJrFPAE6PNFSvnTJTmmk21vFeh29MZYfBu",
  "key8": "oqVjp3fs63B2i2z9n6dJJBja4oXtVqX34FuXEz4ReYFeMNK8ycVn3vhtwy5R1Kso99ZUCvRzGTAvCnJJQtwmRV6",
  "key9": "5T4nh5JSk5Tx7f33r73wwpvjrc9kAuw2ZzyfGxoGLrkkqMbQWA3HcqNnF7msWpn49XAd8jQyACHYjoLCY84gQAnG",
  "key10": "2VxDPRSt5GYsfYQd8sgbobdUkL5etymV5BaBmpyAgi1B7Tn5fe7Y2doJy3GxFW7cQZUF5BCEZ46GLjK5whJXkYCo",
  "key11": "3Rbe6puV7CFtdtVi4o1ZQGNjACtPTp6QTQ6CGMpYVpwKMQqxv6qfvo7Ucef9D7uti1pabbCRB5nvuSKnEdWMZ1mQ",
  "key12": "32rdW9dJNmj3fAUcyQTCbDkoDMbJgSPCpJM32S1uaX7Fd7P4xc5pqke5zkzdTN6bgWMnqq2aonZ4Qv9ssPBV4kYX",
  "key13": "hwo6UCsA3HetJXvjzZrg9bnDwK4MD8b1tTBHe2txiQuUbvbd33jnbufPyknNEKxhik2V96c6y2z1WwCs9jbrEqD",
  "key14": "5SVVPVMsEvQTTR47kDwDceqKtyQkJcd1PaDWCRsuHZ4mfkyKrqVgQsGfhWvPu4dkqyu8AAyCJ9YdLVvV9jtuKupe",
  "key15": "2yNp6dn762SjitNwCfJmyVDqEHUepZ7PhxTPiyMqFeGGK7KYqj8ioF1esZP9iJgKqf3Ki72ouShgus4x5GGPeHbG",
  "key16": "dM1ZKbw2fV1fFq7Jm1w1jjJQz8H3RbkaQGQz8BodnzZkgDXsBGbhX8T2GDirCXRnLMgJkNGN3Xq3NC2AFPvqsBP",
  "key17": "5EU476uW9VDQG58RAF2y2FRKffKXNPX93uegSwRv47RMisC8nBwKftsSds4sp3rfwSNPYTbNsteCMaK9KPCn7tqX",
  "key18": "21vJEPxHYCBGtTh5WrsFfSDehDosHXFU98mNt5kM13LPUqYJRTNjnan3xpsp5RSWqS87d2D2ALotiUaknpQBkDyc",
  "key19": "X2dz9oMBxYD92hJNq1GKWBMGUovugGEq7HvCdkzRcUJaqU6QfuP4rVnjqqssmhtfvXAFScbihmY9g5e2gVM5qd4",
  "key20": "3ugjFaoFU9o1c6XKjLM2ixXoBamFHuY1GNMKy2h3w4gCRcVaAGxy5rTmbeA93f6Uio4v5GArZHV8faVVVcUGsi5f",
  "key21": "2HzY11RQpcVc4LwAZY74tfL72eUH7RrPjjDTM3jG975xShx1bWFrndBNVN916jriaTs7YRdAyES6cicgzkf8gbTQ",
  "key22": "45Hzzi3LEAX7F82gfP9aRAQzqCntxa3cmLRzHZs5Bri2orkRcv3f6r8CDy41tCjMKi53Sb9FRACJ6ctePSFHzwFh",
  "key23": "35QoJcsKAgAannQdykn7Cczeauh3YJqNz6zx9GGRrfeF3ZR7jg7MoW2fcrBp9SDV4Ax3nfXwLvgKL88v72UMXAeM",
  "key24": "41Hufks7ma3EqRY6NotHzSs1giECAYL9jHqYEgACTSrbHjKwKZpWRXW4bQLuQUnAHDJH4iB6qiAa9RMoHCYYNAcm",
  "key25": "3CNu9vj9fopQSSWGNbx2Nw5jBrwRGJQAobWE79TiQ7hZ4JZRXhnmhLEHDcXz9W39zKkZ9JGCcupvFuh8Hnx6b3GZ",
  "key26": "36UVF49j3VsJHf29QwggRhokinUb6ezoxQpf9KUS1jwjviwKyd8RcXsuewAWmThJgNgjBJpyaGdkZJQDsnM22wzs",
  "key27": "2WUVNU6B4nsjRbAMUaWRAwMthLv92AWH7Aa6kCTFrTW34W4fTarGMay41cToaqAadbMaQdFxiGaTaqhpRDLj898t",
  "key28": "34SrLtX44DdRwuvLbPUMapQCn6cxJ3y7mmndpXrF13goTpQfP5zY54HQVThTXDhpX32crXPcvTvQd6NaHKARjjyJ",
  "key29": "37qsyKQQttXj7fd56oPT47zHvzLE9Y4HapYpAf8xuFcJfyEvU1das7GD4opya6oRzscfm6urcsXPGbVSTYU8FUsn",
  "key30": "5oB7g6VbGSrBQumg6VB8A3ExktKipw65jV9BakNrV37Ybg3x9wLHRJ76C1k1XTdFyGsX5bkuFQ9YbAtvd3STzLYX"
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
