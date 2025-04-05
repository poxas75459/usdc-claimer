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
    "51AXBDxQ2paGKCBTUzbAcrSuoNU39984cG8UVfmyMSyrdjvASjQVp36bAdsdRSEGmi9zENuV4KGbuF725utjgp9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "572hQCaRbsN4noDJGDRZHo3MbouyoELKLrWfgBS1NaRSnoa6fr51MHytpKxw6TLX8rhm24Qp5nAqAY82GLxqL7BF",
  "key1": "39Cq5T35RWhYQ1ZreUEBqosU3syjk15r2G1BJdjQW5qDFh7sbSHuwrV4amekjRwtCWpdTaaQ7Ty3RVorMpRRMhaW",
  "key2": "3mq3ofTZihNpzQ4KMEEtk6KJpny1UQeT3jtp6EghrShQPsqQj1owmRAb64ZLk42nuqBSjDR2TV7JsBxSQLHtJ1Af",
  "key3": "2Q2JDrnr9JXRnfrKJjvwwuDU6JRbPGKzySpYTCiPWbTxtTXVoUoVKdZcJTb6hba8TXdM3UpmzpaEyEE269ZCAZLX",
  "key4": "5b5J7WifzutHfScjxEjcGMuTERLohQioRPtssqEcmquFX9icenwN9rvZu6RuUcjr4J4CyevygHdKGGngGDyG7m7B",
  "key5": "2ddWGhaPtiCef6foah157TkkGybw9HeKXFB8hKHw1YDJgoKmAN1P3ohrksZtFE5grsk55FUMY2neK2WMkNP6SWVh",
  "key6": "2zD7eTm3rhtw3aUGg4ZDWj5HMTDYbBkTuTSwYZyQRRmduVLir5jqGVvU5n5a2tqRWV7t8GcG42V8AGw6hKSV3ny1",
  "key7": "2ju7G1yAU9NyERRfoEpUDvdZ43kQYoEEk2VBm9zKmMtpUs98jcPinbKgxTMYEp91xoa844gjCVbzGp8nUiVn7APX",
  "key8": "3oHTvZXtL6tw24UN4SdgsWkWmNKHPUVrpLnfy3zuaWtDQgXbqtFdevwDAGQobF7kRWSpfzn8jYh4yFukQZT6hYLR",
  "key9": "sdnYiYV14RH3PKDLdbUkhjE1FKrnxHZSttwt5hKViFsngsfv2fnFstuYeTvobCAdkPntrk3eqjowWVejEu3WqCj",
  "key10": "2tCbQVLGZBrwf3RvKrjVAacPEdErRkDa7APSedWfd99DKgi5oX1oWtNp22eedN9iy3eEHkBk1bKwG4kV9zeEoQEt",
  "key11": "59M3yTKeFBRRN3XnLGThDRwgW3s8NXbwLU7B88oj7RiQtreZD7XKBTCnjbPKVaPmhZac91XmKV3umLa3gXf8uMkB",
  "key12": "4yK6cKG2bzHtWPaaaDSHH6hH9damZ19m67ditBSJn6J6dYGB3E48o3ZFgDCgAfsem4sjGrNfmqAbE7XLHvSCahGQ",
  "key13": "35sPUJtAgmCAPkqTLdoU21kh7Z5iCwv6x4HnGc2r7S21XpAR9XgzavPZcVjWehFHud3JMBkWLm4EMQx8oQp7P5Ge",
  "key14": "4kxEN6RJHhyPMCv5TJerhqeYkoabsx9SDBqTbctHHbqNgQ5ZVRwHSbPA93X4LUA1j5Fqjvmvs3BXBZko6AgTPv7U",
  "key15": "5UJeAgZBPPgCQWXU91VUFY44K2ducW6cYcY5gj5cswm23G8ZWcYWJDC4hVBgjzQPrLn1wPhEhgFKuTRF8qNnCMWo",
  "key16": "4CDpssfMVw5aEnDfMe2WQEkv51g5NuPqGA4SeaubcDth6vRWuJgH5j7P8mUp9Gixn9cJEWN1F2PiqRMXVCFYeCBW",
  "key17": "2ciFhUxxxeNkzUqnkbzGfdCZ3yQR39GUkyti4Ch32Lzfeyx7ELArAHdxztRPgNoxkxpirucmp2h48FmZVgqZnXuB",
  "key18": "4EygP3N8vxC2EwFfqGqc1K7YQxqDX4epTJ3wDkoXanuTgh68FZBCjyaq3tKh3hh2reBSKZnSc84r5qHxMVVkqrJ7",
  "key19": "47a8Q3AGRDZiukdjeoxuSt8VWjPJsDXd2HYAUhrHk7XtXRuWLwwqn1J6KdLjXYCKeQ8tCjo9dHe67azMr2namqPe",
  "key20": "1229AsN8biBU4UKxtcJrAiUxw3XvPrREN5vyeuCb1Hc7w9BFRamoA7Pj9AFmePQr8gPWA1yykKLf94Pfm342D8Rt",
  "key21": "2Jf3mVCag35tjWv6GevJ7hhoEfL6bTejFcj4AsCyD97LvSRFwaasd9RXYELQDAqk8GfZ1PMQAnnZ5aytrAEDdx5G",
  "key22": "4MSghzsMHLmkyKrb1kpRs91Xo1xHVpgQ32KQRiAPCAvgD472sd8XMn2MbNyi9UYTMfdYnCCnMi4xfzPkoSXk9oiQ",
  "key23": "nXVyRyoM28hctjPFhRLRQ4eSxMuYnYrVg8MvgtZMiyJnZR4g3BPMoN1iZUApxcFWocUHWpgFGyx1ZkX4qs5F9Cm",
  "key24": "5qRFCAZ7wT9VRhvmj51zgZhcXL9duZzEc2NNgPtD767FLuVbRAH6HfT99d5j4S8fiZTorWnpR8Ys2WDtb7x7GmeC",
  "key25": "2wHGzfjpUBSD1Cu2Adzw67ZR8AHTQkEgim5q8YJD6o2VwzRCP2rh732NqkRxNg2dp6wS4azWUgb6S5fN8KvueHJc",
  "key26": "5i7js9qmebRxw66xQ6dtuiCcHgNavwFe7oirhW5cp8ijzs447hAPRV6AQgK7X7GrrYivrrqtYq4HG2SMNnz9CcYG",
  "key27": "3VQt2B8Dw8EP2VrsHBdNfACSKYRo83guZJG7UaRX4BHfrfq1GP4SXkNKxBg6Fmdy36DTNRVy2jnxwKrCVrK2XZZK",
  "key28": "2eJ16nUNvgHjaPHpwADs6FiSrTRe9tn4fUK9VgjhbppMSPcTHeaV72KFeJeE5feAtKnY5RDqkENcAj1vRpWD99u3",
  "key29": "4zSLjpR9NJpH4mVuSYx1TMVNHbVRo7TdpBDgMk1vhEfKo3iz4evLyGVckUn62xXwvq3cC9Arjwk7wTVUjx6L6pPg",
  "key30": "NHoVrQkGGzE7aSuA89sQjwRrCS7x5VoBmhefG6RsGbzSSNk5N3xxKdfqvn4U7gaGJTHghBiagTw9Lguw6tpy4wH",
  "key31": "61hM2uWByGuWJmVBpqos9wcmugWHpnMFxGZbu6aFKBadrdAAYJN1qENUitExRPrqoSxEWWt4ERzFa2TJH9iUbyRZ",
  "key32": "4icV72MfmJmWPTne9uFjRB8gswkm9iQSGsrXjj2Z5gbUTjCTcM94QiMvaXrZWQCtjdpUdFZYktJT2PcncSX6iLmn",
  "key33": "2m8CDKXi6gPcePCA4kxfnXuqs8uv9h1YQiPfWhLGstxeMGW8d3GXyYtjPDx1Ay8RHjy1WisuwecN1FuZhP2JwYBs"
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
