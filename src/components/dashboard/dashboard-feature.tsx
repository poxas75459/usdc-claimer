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
    "4ARExkfCT45hGgnnFRqysg1HHQSRUqjVHSCaWjaSEq1UWVCUZBVEmLss6nZH7zP2sF76PNrtVrS5qwFrgWw64wnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNiEXjdqE7T4q82RwQuGHBJ15ydXAtQKd7YqxWcn5hSAjVEEsFVFC5Lavdt5VZ2YU9PdPVs3CuVDEd7CzQRzfYQ",
  "key1": "2aWd1EjvkTvAuRsAz6Krk1tg1Gh8vT2c4VKJt2Cguu5aJmmGNm6StVVWJR4TdPMijB66gXwADofzbsneLHUKNUQQ",
  "key2": "qeJ9P9PZseGKXpRtkXcm8fYVNemKccbqTuVFCcXL4sxoVbUQEL5XTpkonqL8DnXSWB7hps7sZuiQB3EG26JhEwi",
  "key3": "4skKart59f7pYJNHFcZ6mMyEK2pVMfowYQKDvtN6xF2BqDNeQwLxy1cMAWVFzNaULaXMRogUndc6tvX1GGFCVx3C",
  "key4": "3z7e8DEsmKyEaoxGRZcKWiG1jRyEFrbzFRvkw4uA6C39s9wL7j76uAKkZR1qXqf94KWaFJpn5UfaBdRrH1zt6fsu",
  "key5": "5ckhvs6BrsTtXKCHvCRZAtQTw3k4vs56q6zobApAQTxzxURa7C3sUpDrXM1N1MUoTJ1kdu3U3VfxsR5QjWAcqUWt",
  "key6": "6515TCQsJ7h3jij43XAp3QwJB8UPRPQHKumv6oxGYjLZ6etZJxXCJzzQ7414DfLrWYqziBZ8mpKKf9c7NLdTJwh7",
  "key7": "4pBUtmtNJCssvNUfUFL3kJhcSeWnpU7apN75se4AUjBg38jieypmGSMLGzHe3n6yTsLyA4cZc44iftvcYdUAKRbY",
  "key8": "xogBADPj4Gc8avpo6QMzAxXfThnq1FXbMd2ueeccmtk3mZfJFXvhKW5BLP9EvQycNLDMRqTNXVCJx81XCf2kxLG",
  "key9": "5b46tL2aHw82xda7PKLGuaLbMZs3y1apXq6EBPW6V6LbzXKsRSohw2m6ZfxBjgoKfgL9ZCw6TigNgAodrJVBCE29",
  "key10": "57DNsgADTugpi4hwHi62AYBSUTWrmMnwP6giEdLZ9hDNcE5iS93eVutRCxVMsFwQ5KTLhSSgABgMfSqwhAxhsHCU",
  "key11": "2ZyHKLjbaoX29oFL7CQhsBZHWrzaxcjYvTeqrsp1y3XJb8KGdj1oU4Z2s5HwLE9hYFG96MnSvEMhcbxCByzwwLb4",
  "key12": "292KHiEHc27KsZsRnVSeSnpGgAUnWeJrJqh9Qwm48KtGT6oXZojiCZvZZv5qDJ9JRaFM8qRGRhJsg873kuWG7Eh3",
  "key13": "V4nCGjopULnUYXGbuQzP7B8TnxpQu9RMN95KXTMrjZ3PbgaSD2ZSvAGFnw1YQ8dqKvFQyDGTY3u5uv8Y9TR9K9B",
  "key14": "3dX4HCoqooHRvp7A8KJaEPrPWFwRJUqgrCy71ybW4FDXbDbnqSxeLwRKZF6qGbUjQtXUEqJU9yuYy3kjptaZ2pSX",
  "key15": "5qopzvS9J6x9oUD9QFi3renAVAYq3WVeN7PNEb2pB3g4RUhsx45YbpzrZQGGxrgC4hdBV8kZxtawk3Uzt8WZw6Wk",
  "key16": "42xfLpmuUK6P1irdV3Q8YYaxihxUrQkhpYZhK3du23cwiWvyVboo7tDsCAp93JBXxr4SErQ7PKNVuuhk1bncP6LG",
  "key17": "46WBz8MGy6tBqyWLiKjdPMefrdxL5sffbZYX3Q4n1GtRY6C7xFHdVauUeqPd7C1TWbAdrVwo5oJbtA1TXtnyTMkQ",
  "key18": "4T297LwrtWAnLK9TXsCgMNjx95M2wbRyfpFprMzfwkfwLr8NSzuhZuhnUwWmpyEN87BwWmFuj8PLoRw54D19rdGW",
  "key19": "5Fk5gKgMiVcHf6WP6Tq1p2YAP1G1oCrcMcfHRk6gZhcfLB4wk9i9mwUW272geqHyFCGXKPVjkZ3zrv1kwE1Z2gfy",
  "key20": "2DvNwAdSt9XPnivJXJvAryFou5qJnJMUiNya5aWrtT4YYAbLRXYCccL16euFPrS4y1V1LKC561c8yAean692zmHV",
  "key21": "5J94kJgCfBgpuksezF2RncGxuhTrp23bcd41JjKi4LcKKTraJRipscCWpJcsS9kTjNcQGHqDaCgqFxSZ77uZNCTk",
  "key22": "4R6RfbmcPyj69aA19FxUVuPggvW8UvMscnWbULzApSyR593QY6DjDM3yQYosptJDaVWQV7nbHsicaxX6zQ7L6Cwu",
  "key23": "XHGfByxr5jT8yDT37XeL6kqaDrmxeAtpXdyzDVfWZQy1sKDaT8G3JXsqmvrAoTDrTGnyVds9hPRxNgXQyuemSqp",
  "key24": "3BoV8Bm87YyhT8rnpurZTyoHhREdTbTvN7k4A871wvvHexhFMtfdmjc7u6ibd1jcmDdLJF6CNu2Vwa97t6ZbA5G3",
  "key25": "3w7M8GL7wQ8LdAH6n8bSQ2G2xC9NHJrcTMCV5zTZtg76pLgBpm9zHDPuHZJZEFxcnzoQizZG7RMmFqN5ZnLjDPsP"
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
