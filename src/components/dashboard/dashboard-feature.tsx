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
    "o3uRkiSrfnZAUzafvrKfKZyzppYfffSdaWjtJqDKwFqHKjmMJszGg7LZSBHJFckDfKeodUpsTvuW7E3AqRo3T4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tn2VE1v1ETxwEwZXMCSEEeYGtL6XGNY74t3ymDXAmGmYFuZpmc2bEiqXdqLtzWgpuu87QWd4AtCgAyLSKzap3TY",
  "key1": "4gpwpSzjfJGPQpUxhrGhK9ANw6HcmdKddeqrgqXvmTo5GZauakpjYZCCyKokhQX7Bk7C1QMDByYNsMnSENKYcARF",
  "key2": "2rTeU2B2zHTAdzTRaazMyjwmCaEuKZxe18ZsDKqM23DnfcTgn6e5hsb3ho9K8S7uQriZdLdXPmsjhSvPba1m4fna",
  "key3": "65hd7Xtw34TnDdsi1uh7jg3LuWFXUGxjdCtEBN6x3X3NvvbUqBaHbES1oFGNgNskLeqLbLpkc2eBgi9ijaqqofq3",
  "key4": "3zSNUdwcjzYoRGEGuQ6ufUSnwmAQFmUis8ig5dE3B7b6JmTeaWBKDM6rSp5GtM4urVhTweVP6kdJa8UeGk6cHKc4",
  "key5": "5gz3xQTisiC9BgvnrxByJTRxaNAjiS21R3inZsmJZBJLrQ6ceqJzK41mPubhxXYQKRWGaDUVvmp3HHFwweiZzjX8",
  "key6": "42B11vd3JQjvdJkSWePBsjtu7fgUELw9ifRPTy7P4cjj6VGZBFzueWwB27kojn7Jd7hMMvYWuBiKnS1EwF4UmYqP",
  "key7": "4W3qNo9n5JGtN9QFCukJTDLKNx8UcyhAAS5LDDdUJ4UvHXs7i2moDPKj3vL4yK6mFwPLCNt1TpHc8nytz1aJjCtB",
  "key8": "AvPhGUMMcwcyHZMP8fA5feWUSwnksdxBM85fg9DwwgbKER2Rd4ZPowFGrvZdRAmWK5wc9SgWPbzXnhskpmmu29t",
  "key9": "43bPtoqBoLBMSzYuy99rEgmMceAsqyff6FkCsjCyzpXNoWiT1CKyWvS16yaMR4dSZygcNnS6Avbx9zq1aKh1aX3b",
  "key10": "278K7yaGSSJt5jVfNehaakKVeh7nsBH8RSjeeo8fUeKCcDEVQbLo6cQ5sDRetHLGiqRdqUPU22sTSm4eAktnkDL7",
  "key11": "2NRrw9oDNQ6uQMMPiD3u83ZBfqt3bzVMEUA22nBbutTMCrebGjWVyZDUrBn2Hm2J86oz9rPKs7pQ923vgt2SBzPV",
  "key12": "4aDkn2pJGbx5UQzkhhA9do1h5pFdtiZM9yV8rj2dCa1fcegVnWTQT7UJzoyaUQXCFAW9dYfkUkgSqiMzRdhsDtcL",
  "key13": "3KMQZ2ND9L2bdaHZyjZ4EmDb8PMZc3MQUHPGA3U1FhfpAof8YbQhkK5grBGwQn1fCUiwbxXLQVEYLP9KpGT5UZSX",
  "key14": "3aoUENXBisbsRgEqsvvDGTuopydLA47KB98bfPgbsduG1mS28HTo2muzwPYuN8Pfuq5GTmVGHXnjWrTuW14MY3HH",
  "key15": "4kV8MKejz9RwjonbHzngsuDJ29oy5kW62mLjxk8KcZkbsXpt6PbNzXvZA7CbhNgym4VkbrvZXbmWHeEQzp3D3B5g",
  "key16": "zuM2xoffWhfGK2WYB52PmmsU8bdAGc2b6prLDo7UwqQ4MoePcnVCGtE1kaZoUHWDtxCodTVipum9Cuf2TSHWuWW",
  "key17": "2gAwqWqoG86AJrx1J7k5UyZaXsckdRz2qcXgjWj4TJjs5reQvP7ddFVd5h1JKyjo1Wiw8AwWo5gC7ZfrdWAAF9sZ",
  "key18": "4dREZckAWJe4QSTEQkbQ1YL9DBJ8bxQ3PBHdrFQkt3CkiPBjXmDm9hEWbZJbXwjw7J3oiivZdoq9s54kRZTiHYkW",
  "key19": "4dCA5A1mKyABnndRZmMTfG1MViucheZ6taoKeL1SdGSZvzxajmwS7tbwm77GNj4MfRjWBbByWMdVE2E5umbF8vHa",
  "key20": "hkW3oeaG75tkP9w6L3chn5d433hjm1EGderBBTetrWYaLEXovrwNQQL29XywgJDnfkYJK4HDLMGVg2Vr1MThNGn",
  "key21": "2zVy96PWmgobLsoYzACugxng73jozcgc8myLAKRDHhArP5VfByZXBKKmnTDdvNdksuBxHvPk1ouLPZVkK5tFgST3",
  "key22": "59zC52gKYbDCrERvS8BeMj8H9YSnbkS6TDDbTcP6mZRubH6qWaG9ytfM6FeivBC9bCm24f67TsEy9FAVMqJVc1C3",
  "key23": "3ACNaKFpfsUXLjehNj5H25Sux38d9W6FYtYVtW99shqfg2jNZULTqQnKHKLwdcYJHD8hnfLseWeoE9WnZBXJuFNL",
  "key24": "4dD6ogLUmU9eoWe9QXAuvpH9LuzssBLUU2RGSVyZMP4Z9U3A4t7UjdHytstU9iCUkFePA8DgSyGJ7iEVRsEQyRKr",
  "key25": "63dqZJAuz5KwRD58S5oCVFqStA2MTVgiG5E3TAowAMfg45trj9GioU7XzBXX2JRvfC4XJKhwy7Zz5EAeyWrc5RrB"
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
