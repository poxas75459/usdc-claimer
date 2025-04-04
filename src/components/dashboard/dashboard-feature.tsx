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
    "3BLQZrFWjDGbTSv3SLtfgwMqVfi8zTqMr22aGp7aVEqrVNHh1mUwvN6qE1UFxuiyhApiiafDkDQFeqM85W6k1CRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjLvLx8jraLMNw1jvhBgdtsnf1jurcPaUAzGm9gqVpcWcjfimXewxbbjnSUAc8MaGjtehUUUUAvzwpQ911G1nM4",
  "key1": "j3DSu9CpxfVcDQbAqHPWhEz6v55o1eB8sJUZRebnZPnN5ti33KHG3x9NMDSb8ygjWv75Y6acHdNjREZKPtEb3Lr",
  "key2": "5H3aDg378LGcUb8JLztCgBwSKEXFPdgdds1a34ta894fBi3bvgQXCjHEs9v6xFkJFiEH8GxHKFhKgVjd462q4oT",
  "key3": "5r4q5YxUae6Hsz6iaFDC4E1qT93PjL2q3SQ1rWs3UEBhNY3s4kJo7MESeQgLufUH1VYQ4W5nhLAb56yzjCCJJV5Y",
  "key4": "5oXbp34Ka16Wn2n3DBT2Y4c3MEQRg8H7KaW46VqMY7pbeK6kdznRDfFkqho9vzrnQzpRfDLf8xv6TDqxiCq6tT1y",
  "key5": "3DFC95mgBP33nyKBNv71fpADEd1F1BDPCAzKeCscH49AWRQ3FXouUnAxzfHAGwa5a25pJxx8m6LPPHEuCwonGGRv",
  "key6": "KFjqUDYJjsdi3SJmKDw3oqsZpvq6NjyHq9qXDRevp1JTYgrt9rqCXcUBKDLGv74YvsTEecC9tT5trwPP3aw3f1S",
  "key7": "66bXpAoJwALicEnZ3CKGRMhGEMcV7rkyhumwXguVLMPmikPjZLBsUAawgo5z5auqRfnxLCkn7xjYXKKk1N6Uqt5S",
  "key8": "4LGUkTCx5HMZBHNrAwHvBY2EiMNGqmsD5u6ZbmvHHNQm6N64oZYvVuHGauynvAn72Kz3ZGNxo5ewUhiHS2ETJiCg",
  "key9": "3gmmTXtFBrw2AFsW9XhdzUU38PjmFAWGd8UmtUByRrakJhbtxCHfros8Lx79PKeUiS8DQ83AvUhHkFF6HZz6o7xb",
  "key10": "2CYsPk7wVTbup6znUqbCGy8ZS1MB9bYrBBiAUWv7rLRuPwvqJ81gG47fNyujQhM3jgFQp9gRHqbVrKshtM3cAX3e",
  "key11": "4rEn8W13qDys7358CVVckriu6JRVX24dmoEdHRPkqhtX6ePE4jMazk4rDrgeqZHtfSWMCcMqCXxgjAUUhxt6f8dr",
  "key12": "4Qyhhse52qv3JASEKFcqgzbypHv9CF7vRvMAJ3kigZWjYr3QCw1a3oqiekVf4sXtRDpKSC8XRTY7mmbAHhLsUS7",
  "key13": "66emt77ELRc9UNwijxJ5q9HAK7LGE5rHXHyMpW7azqZWLKW3faMjyk9caLCDD7BppnRnKEKTd8eownnoJV3cxbNY",
  "key14": "ybJgZg6DcuPspawa1D9Ew7JpdwMbqKDNmLx43TnSdBTE6kvHEk9c3iWPYxuWH5vyEYYaVzhZYr2SSj2SNQyi5ta",
  "key15": "NmdFwh2b3r1M8CrmacuEF8urrLJNAkNSSMKimuktjxP1yR6R171HCuot7XqZxnS5SSV59eHSrGvRaagkNarn77z",
  "key16": "1KV6Vm2JWG9pw9irX9M2KTYesvVwaCGUa3gxY56J35raWtY1B9NBXvDh5cbQuXdPwU3Qg1Zp1m8TPbZhfwiK2U4",
  "key17": "4wkoCmtrYT41fSY9oEQnyJWzVPBa1DeU8JCGKd55Lwta7yoxc41d5R5faDTvo89sojSWNETjMVs6RqTbv4YoqPvz",
  "key18": "638V6HJfomC1oETuBZhuguZJRW5RGvoyDfh3fDvNXVDDaeEjQdoJDd1Pt5ZYHWZGBSS9eWjj2swN1jWmyGqeCdKs",
  "key19": "48khizAfbjQqabvbnEKZA4rNzG7sJYt3TxkxVujXaGyq5Y2LnuPVpnFWSeSqefNkeqDHhbPmuvFg4ZXqeHpDV1Ue",
  "key20": "gQwEPNj6Tvyh3T7j4STJvCVx85E4rjchrDf3rdj5ofASSVujea5HpJCWb4T5JLPCscnZdwF38HbCdCctLTMA2iP",
  "key21": "DhBJEen6YgBLYhg4qW4LznwX9PTF7rSWAoJjfXGGf2EsYvAAwqo5cytHXp2rN7oa7UStaLfaNUvxHbgWgBDAVz3",
  "key22": "4kQQwfmjRz1WbiRtzmSHKzD5H6xGvRVhgVGeYns4kYxDo89EXaDRtLewwXGpHGaD3ycy7NWnQ2cTDiTMMEs3pgcD",
  "key23": "36Jwwwc389jFwj98hqiHckWxxT2FUhtamDo7kqYfr4j39BHYAGSQbfXvK8MH34VHFiXFjerJP7VXnDXyjU15KTsg",
  "key24": "5JHnGwMhKzHitQTcPZ7ZGWstpHKjJmSBi8LK69ksyqQ3eSdtjwWrpBWBQftyApGAdyRFjGHHvQ6qsvGnazrSTHcV",
  "key25": "HNd7NxCVjw8vCDDPyUHP758oFWpe7ovmxZGiyrnXusnhVBPmhpEuqi4An2Pk1tX6h2uhMyvyB4PG1Ld4u8m6pYH",
  "key26": "3ztQKVEJmBbLN9ezU6suipqW2XKpNiKWBxHjaFCY2sVjGWbLsLTDqtXavaA6obdKtJoQtzULubJ6f3vYDRD8FomE",
  "key27": "dr2bF71Tw521GkY9aWt7caE8hamWaZrz2cz7NzofmLBhgs772VE8xPrP1XJGKW78Kfn5u68WWaCnsRSTpgJx6SA",
  "key28": "2uM8AVsEYSBTZoMBwHVAtd2fjf4J6p3LP6VadewcbkqYtjdWFaRwm14RZs8ZNkLShKnwkgirD6nLY46nd6UMpTdV",
  "key29": "35eqq3Efmf1ZXHv3VaN3FC1rornxXeaqysr8GHbNKn986ZfLoBc7PS8yanZk45idYcRo3TTSSwAJYJCTGBH5Jc9X"
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
