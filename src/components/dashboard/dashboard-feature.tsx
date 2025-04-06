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
    "4rbhPodJg4nNpF8BzmnRJEq39oLbk7gvarmYQLDvtRyfPzbMK6JBFYRLtcTcsebx2TEikATPTbeJCAGyzpDC24A3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GNyaNVJDnqYzkdJv6DezUHTrwrcXcxYxDpFp5LtDmGhcpmCeLL7G4ChqbhPKk9buydALeg7tLLWF5ELTcab5XQ2",
  "key1": "57kzpZGaHSkRKB95znqwAXGaz5ucwSLFLRF2DzHxNTFeYBhvdtc6WZYjQWkLVzmcZs1dKSHp4cmYtgp5N9eKa2fQ",
  "key2": "2978vskwp3WS3rc4FQpntEjGWFuxYs3FgP4Ws4HtLwEmrBa1ZTquBprBZbhnHyMvxnV7zcDbvMNwvTJdr9Z9ybzc",
  "key3": "2xS7ApkTg49Gb4AoBP9DKGmeFP8FAXn4sQzvz4G27jhYUUWSF5QHNQDbHXQYE1hteR8U7pzcEEnb4P4Wanh4vRiH",
  "key4": "5Vh9DpKjvP9CCAs6jksetDymwGgRZse8vc4fsoGUCKCqArfAHAiotBcLoLxZebEm1hnubTAmMJDt81ZUP3pGzkiW",
  "key5": "2M7YJX3vUACMAcjrPMgeiFacPGnJjmrDeW7m2RnyhoyH5H4edeZcoJJ45vW4JDJmRMj6NzMERvVJnvJm8BFnoua8",
  "key6": "VzB8fPMPjNM49MMo9m1y1YMu1P4C8SHX9ww5SzSzvEzgg6ozJT9RTRLj4hP22NaJjHEmDE2ageM88X2HsWNAbsG",
  "key7": "tMYhT6cMA274qX2B562SmN1aHFnG6hU5rnLbKRMksWVM1GQ5i4EYyNkaE5o7r4fiGv8nCeKdK7eBMWB9VodBCnL",
  "key8": "5cvobfqbZVpKy2L8DJSbht8esQ4PM8dC6DFSxV5g1JHnXTuqPbsez5MKYqbDKYWbApT4Jmyc6PrUB6Y19aYYKXkK",
  "key9": "3hRyHyPHsyymKNeTcXFfpgTkbT71yG3VvcMFgoukUg5A8nLsRiMgQN6LeTmC3bX7aA481rJTenxj95vj8r4WXLHb",
  "key10": "39yui76KqqdQ1MPPUXdkFTJNrcj7S5ZMPWtnMhwTawiJ635mLrVKh4Pu7rwVPAJr1US7QAE7rW9SLRu68v5BJhWc",
  "key11": "PfyVPwVjU6G8S9N6FgewCygrJLPg44oMVNyBU4N26z9A5MKr27VeTMgn67MbX8uak5TwfMqHThvNrDYrLXB3wvu",
  "key12": "3qnrdEML3LiZvJTzKp8cN8cTcf9WCGcq43oPZG7NDnMBM1BXMRMBpqgvQhGfHXfRbcTCPsaMJxoryR1HPhGMySWB",
  "key13": "2eFUxm98e4ysYs9arDX7NrJKZKMnxDKUCx5Awy25BaFy978UjhRKzrjvTgXnRn8FysKvUAEMY3w3NFXQ9jMLRQ8p",
  "key14": "34xbxsnWs5kS95btw259UhWnAadPNxByrTJFv38mQwoEp3YbxDKo22mg5xwnStzW8hMUQKz12Su9vjMx7YHUZAY1",
  "key15": "SRmjMmu1PD3NkYTZBY1Nu7VnYhENi1d9RRAu4C7tcdrezCjDnFE84PSUXVGSQW8pWBmEtutWi8CfGXi5mFvacBG",
  "key16": "rKoF4iYH8YuRN31YMUayatqQ5fNJqZcpSfWdCKeRnUWeK7zxqZFw4Zv3bhzURBBJJYtXEqvK4Xnh8XsNZScwdtC",
  "key17": "36iFegTxQKb26av7CEs4eBq4d1HhU27oaNKprYz5RP8RkN48G7jNAkqK8WXTu7f9UD9EB4s93L4XTXaTrD6eGVRj",
  "key18": "FwN4MFchcbFQBaFAvg7t9S8Q9jYh2sWJY23WUr9ESKrzunNpb3znEdy8CwYuiVbRHJcCDhADWXbpd4YXF3wBt3m",
  "key19": "4D7EVG6YwX2n9SE5Cr4L3PcdiWSNhs3nfd6XdMnqGi8qALi6b8Gsbs7MnrKt4czi13knkmyeadiYyLsaS64jipvd",
  "key20": "61cFacC1KxQqxrB4fWys1xzDgwmvNiLbk8kQn9gwsRMzMseeZqFvU5awxwzMbA4E9WABwdAc1TLfPQKsmfaxesBa",
  "key21": "tuAvKDsTrh5oNbjhpcisdeigXhrKDP3546GePKnPdAsRuAMKimqTkR4U2nvdmfVLbLvXQcn6aULzriBPGppSLYx",
  "key22": "3V1JcZwXWEGuiagnB5u8PFWNtW2mBbGU1s5BMhpTV6U1PPfMTmbEFGSnxrfkikRhQoGsEBGdruuCrMquTfVN5zyq",
  "key23": "L9S6GMHactSr5FGNQRgYQ4o2iV1h7NkRfctfCcS8r14BQwPihTNsimXmNdvifWGg44Sg1x1KA9cYusL8x3ZRYCW",
  "key24": "4sFtU5hHqqkMG64vzXCftgsfE287ftDkLMznGrntR6JBYzT7q35hPfGDp93rVEPDxGRJtyjhgFqfc3jFkMcVwM5a",
  "key25": "2nbbjKijCykNGScCCRAwgJdtPV5sDyMcKsZiBdVr1N3F8FyQFGpodhARYEnMeAeZanmbY4M7ox4kEookgxpWXuSr",
  "key26": "2SZqu1Zap4pa4DhNwN6QoCyUJcXgsKzDPrWGAbY19CLvTDQeVUZHA59QDgYcsvBgJ9QixHPfb8454NckpZ4UG16C",
  "key27": "v54RpzLfUwPUjxfepRX4Df8YfdeqFkxY8TS9XA2y5zUBNNdi7JTTtbUeJdFVvrcTLChBaXnhDHWGRc8LshD57sg",
  "key28": "Ahe3LRGHf2otXSjShS3ydjYcMhnkWgJhsseDm6HLVsnwrNMpUXANXbfdxmfgZUjpnV8fcZiwzqH3fgoBZbF9bjV",
  "key29": "5cZTB7kH87Ua2jeX4c9Np59YY64JPx573iePUgks2SLQhmt867zbyfiLsWuqfe7VxVFB9SidNyfdg6BkEuHXreBs",
  "key30": "5mpKVpuZqbLcg1NpXv1m2QccgssgPNGFzFzQeRVKNays9iNGg368HchcoAWJVxJza3tfGWTFxyfhqoEw22KQiznm",
  "key31": "2bHTcF4i28PZbJGWQVuG7z6Gpc97EWELwbuYGQozzwWbm3VZFkbmB5snSa9qQQuLFPEocbw6rnCiYLMkD96aBEtW",
  "key32": "4BnRvqmScJfq4vam3H5eWwmMBdmCY4cMEt2AdD7bYVfLdQtMegh9KDzTUgDSxY9MTbqCmDCQv2oFRYDJ4HdPxyYp",
  "key33": "4WctKKqe69s3Egtz7SKhtYeYcAFkCEZQJtcGQYgN9zTsxWuA2jPQHymiyUS3x1UeyB7kSRyaojDFyQUSFvZb9ZZX",
  "key34": "58oF1DLtCrxHWLh9W8Gc2FTybRpkb2BxgyZq4oJPQNkYCHmzpUeoH9gHGgjGtm35ixL9F6USS2PyVmYSLJz3o1Qj",
  "key35": "4gFVFKR793cLC3TTFx9bpSKLha2zHWcLaEJzjar99ArRmgMF7mcGgeGdLovdUNdHFaVrpbTFLmLxQFpC87Ji79hC",
  "key36": "2MHSQqbkHSn7hDum2uVZhpUxs2pJg4MSUgAUY1xpanCznhXQZm8b989zZad4uYx3pRJp7mJh5rc2dxWFiMj85RaZ",
  "key37": "3kPg2qa6KnGweSkbvnbDsU6B4wXMU1ZLmBUGeeaKM8Cee5dYZe7enTG2uVgbtZB4SGQBM5xS8gsiuVECNcM3Fudj"
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
