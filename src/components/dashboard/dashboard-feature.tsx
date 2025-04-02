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
    "WnB679fYkB87cavjZYqk6pAJzoiEiv1nMSYuriXDsLJxoMQmqg9vfViDi8CiVyhzTkQfHF1n46TqCZBnQw9VKs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oDyGxN4BWUJCYZY2mKkGJn4CYFqqxieKvcvkcPH55hP34Pnzzx3QQchBUkWQS2VArdGREhdCtyjoMNMBm7THFK",
  "key1": "5wXmzSYK8jAEhfJBjphAFA6bp1AhBsXQvEnudg1gfvYTcx91kN4Q38TEZ5naQp8CUSXP4NDutezjWyxZBiRX4Eit",
  "key2": "9spcwi3Vb2MTUdMvH51HgKXX2BjDu47U9FKXcUaumU8w53pHUKJZM7vRD4ZV6656YQXcLwoiuGkVNgKfdwT6Jcn",
  "key3": "5VNdvNtDvqGM6cADfAJpwdeb7t6UWHy3nCqFg7Brpaxtv4G2aGMNhuh4E24Ffu15myQwt7F4onDosCnY9jJCZHx4",
  "key4": "2PU68XVVB5CGq7tcuvM9PqPDr5x6kjGSir8sDZ7VG9AJk54u178AB1VGzutji7LuMe2HEywPfthW44w3BP3Wtis2",
  "key5": "ZvLN177jRN5JYcxGt9YFxgqL5tTr7eHKtzduXYNBwxYkpjn36dsvCyhj96EioLjCRA4BBgeVxHGzjbKtKKC4NgX",
  "key6": "2VmwWAQjaqRJot1ZGhbkGLqKnpEEvdk2Zpq96z4xL4MmyE1k96Mh2RtjpvzSJqBxRKR9aMkMHtPWCkTXiE63DJNv",
  "key7": "5rd1KEvPWhduU19ebj8XM9PtoM6bgeS3HbeADCysYjCf3cuTZ3PfiPeQmhD9zFBzypa56ANVpubm8EEcPtbH3iJE",
  "key8": "3p32vH6QcjDWCpcuJabtQpVwsecPKoXiavRLyedN1QqJN6D9h7Vbm1u8wUKfeosmR4c4z4WTFonRUXhuKigQBVDQ",
  "key9": "5DREFkG4CDN5wKJ2wAz64Rt7GcSXRYpkYtzT3jCuAaNizMBXaVNCgbNJ2Fukw2reuZXAx8r69HWYRSUCL7Xrh5gA",
  "key10": "35H3NgeHkCgsfgXXKzKsFf4zPZeBwqF8dg1KKKXctmA3juCy3k1nJS48UuSPt4XwBaeCEgDZedXo7PewzonqyZbY",
  "key11": "VgWxJHbYToyVpyPc1VfeZXvFSpp6ZYph7yQ3JcXaVbV2knw837pnP7BB2z7EyUqMA4JdeVewxZ7g393vGRsDb55",
  "key12": "4jGJdDYN8YcrK1a1LuPcthyP1BzumtYkT4bFXhF5hVwK1anjjpVsK3P95dZEQsrhcWZiM4jMP1pDfSg6g6KMDB12",
  "key13": "5WiiJzDGSYC6J8bANCvLWmknVvmgTkK6mL7xZSvbd2LkUfyGp9t6WpgtbwDEZT4fzisA1mqyussczDSf816pr77Q",
  "key14": "4RBSE8gwievK3qpPrGJmQe6npP9m82SaeyfqVjMTsGFW7i9SPL8pwWrnLRuGYyd5iFhjWEp6vAPRiGKjL7DfpPi8",
  "key15": "67csMPYhFToFPcGiGSkLsvn6swx8TH4xjiTc6ad9YF1EKGBWp6GNEQzkjGkFKGfXiJ3QkXPxiTQUcmq8GzLsAnPh",
  "key16": "4p5p8wHF4tYjLbdef6gw4VL5B86mbWU3mNaAH8rfNN58tkNQ6dmfg8nxiDTLHERi8XfRpjDQED5kk5srM6SRcYig",
  "key17": "4PxxxhYqzqBJiDb8VQwiSuXEZWiDDMi283cP2YKE7KeeAMWJS1Y8QMXgoLMx5qiDSJPx7ZwHfDGPgBBXkfEaLFZ8",
  "key18": "25FF3vgRkSbEGJX6z4iXSiFhJ7yRboTqR7gMk7pgvFNZHeST8rrsBZuGnUG78tzTVbdeFmy4ST1EmuSC6RjZ9s6G",
  "key19": "5dmT7JPHJSAxNHeeebHUQHLYBGbd78AdNDsJgfFo52rDryAYmVTAybfoa1wkYz4kBfuyYoMDQXEJjqWgfPyPksXP",
  "key20": "4mLqyPCbnBnk3QsxwzRhtPLj4d9ChDyP9sCSeH2ZM4eJrZsRBGsqdAXTdtVXuJZsqpL9tSq1ojYCktqKqoDUou2g",
  "key21": "3v37v6horkEGA12ozESi5xNS8C2YG2MvS6C5UL6vLXrb8R3zmtta9J6AFmvYbRuRSX4h9z4hDJZAvNixkH491TUF",
  "key22": "5WmXpczB5MuAgDciVG2U366VZLuTpnZNPUNmaD8DNW3PUiLyBkCtos1YKaR4qknjqkDHPJw6zTYG7YJqsHMtWbcM",
  "key23": "4XBiHhYZw3Lb5XJMNKkiSK1tb2bZi7pfJX5kYHAnWsjbvTKU7p4GqihzomoNYmo3bUfBXzYCzP4VhKaiXtFX58Zc",
  "key24": "2ZiAFa5BPMS3vw79BU1YvtQpSjqb4ru3gdoErJDZkAs9a4JAKd3NyYtTpyqgdqgkqGf45Q3mYYCPf2r65E7NtQjr"
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
