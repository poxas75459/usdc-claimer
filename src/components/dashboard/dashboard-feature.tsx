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
    "4aTFh3ZjtPiKf6pL82gNNXURgXUCjhSzCS47oLLwgJyKoMaX5yzX3hkf3EnFNXwzJW5gDFr8mAxmFEwXL5QQJHh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xCXfaA57L1zC14ao87nfJnLxYngq6SMX9YE1RCLv7HSurSJDFwVpMvoJHozB78jafDaTmHszSqrYn14RsaQvWPt",
  "key1": "2Pc9DfvJ3isehxdhHGoQ1GGn4UQFY4h5y6Mwp7kaFaBWKZMUpZRMe5Jmy4wMgeh729MgkJL2EHNJUV9jAvsXVdEZ",
  "key2": "2bW9kctkBLE2pqfnGD6z6tvGcrVC7fGX34ccvFDjPK2wknL8U8pScmGZNJ5Ruc4g4KFmPEWq8amGeKD2uZz6jnJE",
  "key3": "3qvXsdPgavUsxFvGvf5w7bGn5bejA8zs2q5pcCHAqxJzyaSevRX5swefh6mrTvaWVoWgt7ee588eGaYvau7CYEwB",
  "key4": "iWGjV9zdeFbjneGMidJMGFVdGdUm6HmSRZpXrEoyPWUSkMvU6biEFwHYY1En1pU8KxM4CSSFNUCdWsdRAiiQag6",
  "key5": "3QJ1dPSqM8NpFRMS2VvjyFfszbM9oihnVn4m51hpD4PqdSj15DahcAVrA5hT1NpzR7wMRXZmQpp7SrnyujJBADjv",
  "key6": "4RhA5EA6NrZpHYxNeawBTvD2ed2nQ7pyg1wXvxh7shqVsRTdqQxJSTJbhoGNqnisggNh5mqL4j9yEoFeFxvKtd7N",
  "key7": "3TVdEuccjxcmrPEXXTwwhmABsgxFnoEENjXakn6MQTVHYxbsUE7EPDBNraXhh29WorkN3WKacuBjYNzu4zFCqpW4",
  "key8": "5rtSkFrH6R6A4fVxE8HKHuJxoQPBL2fUVeLd9cQHfZHiBNACk3JZcN8S7EKuk9ytNmsmcfm8uM2vxHnfUUSytDox",
  "key9": "hVSP32VkNcw2dHProJuj6bRSKE3ZySDrMwSbyzdJfqTW53BrMPDWQYMgLWWyvytGuS8z6xMZQ89iKEM2UZ5boFA",
  "key10": "2LMGs8G4KYJquzppKg5CAWnTv6u9yt7oK9QvRA2QBg89NqCki1rM5K6joYLNjE7VudB1gzXpu7Godsfhju65Mp8v",
  "key11": "4PtNTKTh8EzDrXAYzuCMWxtYPeCREHePCX9nNvii45goVLPSbVak7aSJPpPwmWX8Ri7KtiG2ntc7mHztVzPhhggt",
  "key12": "32HUeY7WUHsfg45atmTvMc7d3Z1PWeFAsaEzaRNSW5FoyJAPrfieYK4Kr1vqRVc2tfYU854MS1dmVyNV6Uq3Xtyr",
  "key13": "2NUhPs9hEtayGsf22HEPoKDH67SKAsg8u9PuFWA2RmvWsav58q6a6GME4F7WDp1SevanoSqPcWHhQ5imXn7W5UfE",
  "key14": "v77Z7JChQyVuwvpzfreahhfvcGjJy6DneKZ6R8sDzK6xuxXCuchd7Kyu1GnGwP45frEphGpR1L54JR8feE73rwe",
  "key15": "2eYR9aBiV5izpPWoS2U9Yst3ZrXs2VJTGyY2pzPokVYdH7uWKuiGheRtp1Xyiewzd1AMRE51cuaS2ZL33qAjbRaX",
  "key16": "NNofsRXjRzAd2kqESU4QGkZzLvahAQqDZnGiDd6szG7VrFJz2YqPaa47M1yutnpvxJDFaCaXhHWU1X3LAE9aFPP",
  "key17": "3WXeV29jA6MPirD9GeEdAcnxfGbBAV3QC9KrGXdz47x317SqtUgpPC2XPf6izwT7h3tq8AcKfS5yekgmLxkDpubJ",
  "key18": "2yD7PHSgebeQwqxGKH2qjdPiA68SBo7AuREP7RZTqdk67gcZLuzVcHzPoNxNSUyt9wrPv89EQxGEYmc1TSqjYJ34",
  "key19": "2QSMvTzty6yNAoaRgybKvEDLKXwkmaL9uRbbpAERSEWq8piKuYDgnzaviEVAVPRpffcyHgBXGQb4a7NvBdhLZGJJ",
  "key20": "3sXmq8jRSN6DqW3bDmZMQzE1CfaAVxR6YQzLvvWAxRRAu2bNea9w9RfvCvAJccGqZ2AVChinkdHtbRAaWa3hsiKH",
  "key21": "3cvSCtUBe7B1yfMb24xvwSmAadWYwCwx78mhmEAApS8LEK7oaEw3DEAuHS5jEMDqCVzuYAEdGRx9AceguDoU9cXo",
  "key22": "2G36ETw4mWLi2wSpsQq3VoWNKACjx9D5aPvo7GjaHSAqgCJSCS5SNSuP6CvpptUVxgWeXAVivf72Q8tCwK1325w6",
  "key23": "2YoYPypY5FSM3dQB8zrdeGD9p1cyqu5oa2L5LN4Jy3b4htNwaYb3ftqvXyhy7sKsdj47atkaqHgfUyepT67Cid2w",
  "key24": "3Dh8km97aZozhoBuc9joVgWQYukNFKmsSpzW8g2TPssgpytE7SDBSjVVrZ1ChYAjmUXM4qpuyG3Wkv3Q6cPJzxfA",
  "key25": "4Xg4uznAL7BYsDSzoEjvmz1ZHeqSRStmYBGfyJ6cEoDGpPDCneA7MNASmncogV78junFD7TdircUaAe5nH1M5LK5",
  "key26": "5JkVdiLLUeAFBVRPZznfn4rgMTvNMH7WsswCigcpzaC7fhGJVCGMXpyMDbH6wi5qfcEEm8VnjddyjVGHt7LRe2zq",
  "key27": "2gEVmfTABQ7orKoSbogEXzqFtqExpxCUWZeP8TypufJCib96gTqom17q39NHAxq2pReH996zZKM8yjrKx5Fbv9SW",
  "key28": "5M3NxvPTGKRr6dEsbQNV76ph6HGZksGdgvPjvVuP2tPJxRtFQ5JWG8unJ5qTSrwgR6XFJP5pg3HRVQVFmZzUZnDx",
  "key29": "3zN5bQrUMYD7kLA6k4PoXhqbPcKwTdqEWyP3ihVphx6ssPqys1myCRSggwBnr272A7Xr4beEEmqxfhGCGcpUASFu",
  "key30": "5WQAxrcsXAGiQJ4Y7Q3YLqgnDQqbDC46rkBMXhg5MKBRvU3nQi2hQbHgdNMQqassjqcWKyHZpFpEjjv72DrPfam4",
  "key31": "4cEhfo3VCRrud9s6hKXLAK5MEy5gptn7zfPh5FyaV1Jkr6ayEBE81wBXyrLcizAnX1Lh6HP3hzoPyZ4FUaHjhb2j",
  "key32": "4frNQzBN7yqY1ZvB4oxmjGHydNtgPbUznMBPgVNwYJq9A65S3DDamz1o1vJ7TnucWUz7y1VEmcMCrUbbd1Kt73PR"
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
