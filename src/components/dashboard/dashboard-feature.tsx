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
    "32NRe3QTTxcZoAvd1Bit3wFukEMZcWBYPGyeXWjg5k3PKDHHGeHz8F93xGrycSmXMdqEAqNiBoqrc1pBHmh4ZKgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXGqPVHygnGa6UfNKapVsJG2WBjhrgmUHZCDG3vmgcsrKgVW52V83gkejRHbzFPCUVSgkSx7fRhhUDkfC3KRe4y",
  "key1": "3FPBjCwTh5NbSCR7HLwWTp8ZjHBrAVoF2JqZyoSTCaDbzriu7GnFhix9rSFpkZdC5tRxxWFPhiPya2VH7GNYkBfT",
  "key2": "3u881sVN4Fp4V53tUdqCkYeBmddZP5H7MfKbh1BiAFwzh7ZFgS7UgcjHmfqxPZqe975ysJpicggaYH7F56jX74Dq",
  "key3": "4DESfq9Tyy7BD8piiRe2BNcTSTWWnHAB5c9Nm5rZ5FTwkkT6DjmNKSAW9Sbk7nQxbsVNLmSXQe13ghj8t3YxNGaa",
  "key4": "4xw7Qtojpw1FcBwacBn9mXpdXQ9ac7QF26SGHEyvWdw7ARNGpZsH9UXNnocMNS9EAK6BVDXcVPQjbpf7qG1TMMzk",
  "key5": "244Vb8QxFz8zNSGffCdAEbZ92HxeWMofz9FePi64oXqdSJRZbomDZ33N7AtJEPotjBoKipetkTSSHPyTTL9on4eb",
  "key6": "2GbEiSKCAdrybWSpBf7SqZNHZS1pc7sRSETQAqH1exQRwCa9Z8CDi5P6kNzFPMFHjWrNu5XBmJeUz3eQZjd2bXeb",
  "key7": "zjfQhdxUwP2RTSUbWtvSjeYuqnfi24y2ySDVxFNYSkymjdmxJobaQFtDvdM693LUcXWiyuxUV2yPEaRMs3A3hwY",
  "key8": "4psQZJTNvktezELDkNsP1XKFwFyvUL2HxZnst7EB31dwAWK69QVqrn4pV9az4EdzQ2BngGMNC753JRTDgfSoh4rQ",
  "key9": "4Svr5M2PGFFPNrxkdNioYVSFpT9aPJqMv1dNpQnLJsP7dU7afigqpwaZZs7EPpuvSiMZwYqhhiNGKKnApZMtYoV7",
  "key10": "5z7zPPeHjyH92r4tpitCZLc1tVn97VLQoJGEaJ5QuPeJQrXRuVfABMBfLsE53e5Mxwxa14nvPrsxmbphM85Dc9ue",
  "key11": "5fgjEnC85SDLiRb1FLnpDP8wgXH4L9YmLRELScfGqZn9fXRPFqsjGGhuMKqniphiA3jhqiSXXMoJ6h3qCrn4thXM",
  "key12": "EpzPYkvztaDrkBGiF3wm5N9fGzydAgMb8go2eHigdk3yqQigX7B4GQZENMFHy4Yd4Cj95aGQn13Zga5LbtW9g7s",
  "key13": "3x9h8rJzo1Sw8DDmVmex1VCr6DBDcoXNs3dz2DwWCRNzVJNPZkHRZEMyJhdKf99uq4DK3YeNZSTdig9UajCdLa9q",
  "key14": "4gNtWKiKidUVErcTN6qwjqCWJsxwTrkLD3nHJcy1iD7VVjG23832Qhc3C5DcJqUnM8V47itmo1t8tKgMXvfULuTB",
  "key15": "2SsRjpWyZfPyK9AbKEPgZrgA2nKA9SSXydkdX6CfPbfY4atSm6WfSW3P7MXAQqwXDPJZjTB423UxrUJ3BxDoy15S",
  "key16": "4davAxoCVJyQYAiugXqBKHF6UVZizEswi569y3Ld7kp7S7cgGEe9McV7ZkiXcRxSzpBUDw56VAzWfFzZ26nfkPuM",
  "key17": "3VwwWPXTrE9CiWTxFtecEYjwy35Qg5P6xPs1juyhxqHoBJ3U9ddHatZB9X2X4Mvvpwn4ir3Ku8VUAWYAbxqZRwQ6",
  "key18": "3pZpMkNnt3pqoZGuwVKegDwxHLq7EhGn2iZ8cSXFYwLgcNDVRwPXzupXkXwFM4mc7wSG2SJ9hr6W4aHFPEqCJT3Y",
  "key19": "3kdeGxDnEBoKBmHeBAE7WTek6RbvRLrMTZVRB5VXn6XDD8BXbxTUAX34kyesni5Qqr2Ugsxfkj9HTGVYsnre9f8p",
  "key20": "3xL2QzZxccRtTMdWVs53M2WoQZBRE5h7bN7gF5zbsDRCnM33rrAHW2MgN9jwZ67c8Ncfp7pZfiXSknqf6k6omykS",
  "key21": "5h6ygFZF56ZZNLRc7nqkN4eBdMBshwyZa7NUkt6Bv9XKAXRXy2PyzFeiBzG6ACJymrRSiHcb1ReEQuWdCaoV68xj",
  "key22": "62oCyei4j7pCj2tw578CnjCknHqwYV4kBpsMiZgL45s1U3YUhZEfkctKoAXgiMH7MEzcehQ39LCAyjQPrySBp61j",
  "key23": "3ycm69a3gerk99SpEU7rniQeYiPkYzhbZQ5Yfu2gP5sNAzW955XDb9xFEZw5TgcMHCDRGWbnmEXmjZCZqWo3xunK",
  "key24": "2m9zCUq6RXCZJCHTWvF7um7muzBWGu4Ax1FSAFsbjN711oWu7NtzTxfHF7XwQQdBfoCMyS1brr8JGJTuMYC72bxq",
  "key25": "2xnoLfz6s7rvFz22QZ9E6LbeJtM2aza46z7nQJCxXuG44QWn5CNL2yLtcnKN1Dt2U1yFidZMm7QZbgY1W13ykZFV"
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
