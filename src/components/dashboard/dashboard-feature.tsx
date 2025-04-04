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
    "2Hr7DJmikNsnoRGK8om6uaHA2d4Z6z8yqLH9ztoWjL2gbJFUE9iN1EsTKMrU8y7mhmoK1EK4SiYydXNGPjQShHik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25FMrGoSNyfRfK8WpJ7WRisnppKgALzGrRY8j8Lrd9mY9Gkq7eaznaMmmFiFRe2pFYWhNG8Ag6mRjqDNFTTMbtB2",
  "key1": "5eZbecAA6kqG1p7zngUU9TeR9ZEaAELg6oqRCHbAVHraLi6mL7Nc1YdJ2h6yztDPGKYEJCvaHUZmVapbN43sg1MX",
  "key2": "5Ynxainz4tmkyJVMEn34MmMhFryN5g7uZnsfaPKFfeg7sL8nUjMuEJNc5V6p2VyQtnH2iGC3hgYzcFP2jn2FePCG",
  "key3": "tpHuMZwnUihAeKXEBCRth6ni17YKtywwVjyv6wJXmp3r9L4MVa33nXTD5fCzrAUPtbRvqeqQSrmepz3X5gnSqFj",
  "key4": "24BzMkrdYYgCx7HU5vQMiNqiYKBmbn3Wwp6xsu7cDokXy61q3ZyCNEAiX34ULmTG8WJpxA63KogNEugEZsZsbhWq",
  "key5": "4Y1RZWR4skoAMxBiJqnyL5mvkXHWRaW7XYCfmFqMgPYpqyqUry5Zytp3nxPzsi3FSqC1KQSWmCEsPE8mDHRMBqcK",
  "key6": "2fu7nQ292tGFtrbU17kqAgmubeKHhkwdkYXzK4xoCr1YeP5gwXgZSAwEUN24TqEBQztNeXCVtMb3Sa1zX2HfMRGY",
  "key7": "2mJK4nWEf3y3ump4evz7bnff4XtwCzbZauzYb9zZrRELcS1es2VcRjdHfumDiJqNy3m4tkNsaYWcnh62QiD3dsno",
  "key8": "2QW87UWFtUChRiPNPrUKwBwfmSbC5CMpaTuLtwsP3WYHfRm2YnFgKB7eBGuKfmoPnwX4oTxAb9xQCexskhu79YEA",
  "key9": "63A8fpDMvzTYeRaGgz63XfUttkQsyhyFXCSN6GWwtPsDmSL9pPvHXpsi3ycF56sM1GUAe1TNdWE6JUSfs44xDUjY",
  "key10": "4XSHtiYVp3DqKHgGMKwtLSX3xctL1kpkX3oaB1Nt3Tobma2fvyox3Um5WkeKpxECTa83nFcrMAnrU9PzC4UsmyfU",
  "key11": "2n57oSSTv6dT62iHgwq3mNAAUXj6o7JvvNs426rucjZbpLBVqKHCStBeD46SZ6YY8oDRECNFVjivx8f3LMHqSnpE",
  "key12": "5dVcBtjXmrbzcxUoPkjw6gTrDo3JnPHoKEjsm66fFRmYjvYayHNzS6VixUrryRn9YQUcfZMaeMiqnrX7NYwwYN88",
  "key13": "3ngwGKQiGnzgF2zA11hYKCEr3tS2Rm2ThoJfyv3tW8yZRusZeiz2Hv26VjNbUf5aiPwTSDgz9BuMe11mRiTo9KAU",
  "key14": "kopgATzPTneMo8Ea2F6hbSxtPLpHku4BvqYtZtPUeAft1BqvLPvqHZ4a6eLnXieo9WkrzoWHHc3fXLBLeLMyRxG",
  "key15": "5JdHu8XeiZjgP74Ua6iNLTFfM8asuZgSG7vzDqcPdaPY2n7xbHmigrnVPwEv8ggPbnAw8W4Yaz8QMDibufwP42pr",
  "key16": "5uKrrub8tG3SLoybVQ7Z7qncP71u6Dhb95qiZgYpQAQc14tW21S4AVWkMC8Ffp9qQTKdTgMZRoiwNZ8nGzzbRAJ6",
  "key17": "2cKfnGCQKtog75WmUiFZHCYabTTkehnvmXgQi4SUPhsc4hHreVWSoeeYKEKpGPcKEnP2jkx2wF4V8sHpdxRniAWX",
  "key18": "5eoqKT4yNschxZr13zy6PeBeSYucZDXJ4xJUpgmPcB5AmMnwqwwkVbG7X37xyvfQGmp5iAjE9KZSXWuZMwQtoc8h",
  "key19": "4tfjaBBy3pKB2KuEmuRTwXHjspDoMJyeJc2VcGozVo9fVh2rut6c4y85yC1cs4j4vwahUgW6iCPJJCMwnQsrQ5py",
  "key20": "3RNz231vmC82soPigW85boePwEvQzjeabF4NP9wYkxmthpmRyq7Fn2r3LkKEVVbV8gCLuPDWekdXQRAKhco3n3Qs",
  "key21": "2Lq79AVVG1R6ACRguRkGMvLBu14eqrieRjHGPzNXEibaDWkwBfsa12AupTAaJmaMkxWAeA3YcvHNA15pZ5jUtDkX",
  "key22": "3mxbb8GFwdT3CPFAntbiAGVQwpeHT6KLBzri1SHzsSoBrEiGoXQZhRr1c1pVp1gpzuUx3yuCienwg5yUDi9wyndE",
  "key23": "4BfxUXDu37UYcAYnc3y1hzcKR7fyw5hnCbDXJqjoaBxnH1U9KaCwYGV7SgqYx8V3AXP8mtB7tmnDGew3D3o9E8VJ",
  "key24": "3Xt2sbnDvS9KNiPt2DYqo2BmLw2H6U43Sko7v33QreBkaXPBfnQLywmkzA615UHeeS6zqneLMSWiLnxhJGyuCkBz",
  "key25": "4QFEPDJ35GZpdk5mxAqMzeG98FdBNLz5zeTcRUa6dRMzFwc5qsGTACncQ27iJGGm3RArBWeCdEJBeMHsTazG4vCp"
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
