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
    "44e7ybQ9QJnE8AxCsGdYrZSRM7rv6N8r5moyWaQ7LchJjscVEY3Z45L5L5CYxiiEVWU3xXDcuQuEaWQJHTtE3EFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xj7K81cgZk8bRBdSiR6bZQc8yu43DkciY5ciRSENMhbjGC913odKZ8F4m2LBJ5v6cf52BxvNm3rsMuiMJJDDeKV",
  "key1": "qShWrRGfgdVZN25CDM4y28bDptqzoNWBZvNrcPYb2YCPyq4hZhnSeWQVJhsUMnZymHBEi9dce6XAvCH554mTeJb",
  "key2": "5DWJUnrGaA9aRKyA3ZV4y7TxRMks1eC1xuGvFCQrW7uECQGCYum8kSE3Eu3u2wK2f8brckLzy7kaXE8AU74mkEot",
  "key3": "4wL9ivukTQCFxK8iGDMp51H8c6TVyQzvrPyGivr4spEMyBBtZsM4BxKaQ4XShsTXd8WUmY18chR3sDQrJzLzk1Tc",
  "key4": "5kY8rfHgUQdGun5yZXwtifTSd2CLuJhfz3vmUb5JaY54yrwZE8qjHGXqnK9yrQhNcVmMz5LJzA6wMoVuJHm5qcmq",
  "key5": "3UWUqKfjBSG7w8ECTykWzU97i7s7zmBCkhm11Ni8KGevHghKN7bBx3CRGvmqjA4hZPUv8JLpC69N9dJExF3zSgb",
  "key6": "47WL9CmmCp1i93YB71VHsYh4kcvaYMN9wFdVXcAMC9mPgnkv9mUqQNMkbF2dQK8XkeFwUQw7F1QL4Qap2zQdXtZK",
  "key7": "36BHEKDpwteS9zG6CuY8VQVvRmjMer2RcMJ6HZsKnNFmL31GfN5neLzXsYELb96G5XY5ZiWhb7jtbiakV3TAE2gb",
  "key8": "5BLidbe1QaV9kzi2qkzMqnLUmhzJZK8e5heR8pcWpx5vFLZQseGxkDBtooqWx3hSzhL3rwJvRVtVmWMyCF7V5DgV",
  "key9": "MNhdqiFsPpT6Q92XSEwH6TvobyLykDLywXVGQ5PLki6H9YvBs5KALVdrJivQkgv5qn9W57kvYSjHsnzAcMsGLdD",
  "key10": "4FT9nD2K8aLkwwAXH686H3WNdgTV4trthEh66RRTSFNa1qHzBdBh28tQED67RVesdAk26EMipLamEZmwVqBpfXWb",
  "key11": "5TZAksk4wCr6uzV2GYdK1JGyWwqpKMniogGZuiZwc1rfwioRiXKqjU643GxS8ffCxEX4hocikqa1Nf24MGmSGdN9",
  "key12": "5TwPXb8x8dcnD4dD3Tae9d4kTXMHnJeQCbMP2afhpzDupFtb1Fy7u3VfT9CmkBsV1uz6PuYG3Usr7U3dDUigF3iX",
  "key13": "49skAQxrKSANp8wMpbQReiBNrLZPhSEnm4zhEssfupuEdoEFrVrLgcPMJQ4GqKrQ6emJdoY1BjEBnw9Un4ssci8Y",
  "key14": "3qyHhc29gtrDhxWKrrhWR1t9rUb9V82HuBubyeqjsyrXk7qq4osgynQNcDWYcGJDRWnvDnVaG7i5L9Nprc6HbNvV",
  "key15": "58GouW96aNdMBjVsQdQNuGciTLfBuQRjxFAJiTanTN3cEYThzNc7PFjnZBPnknufTVSdVekqiBnybbr6iXQYvmdp",
  "key16": "57sA6Ds12DTuT7traikLTdKMbQe3CM1JPvp5zbego3y73d6U7mA4sgVZ4BCAkXsWh7r8TUpE8xPWLe5QU7piDKRW",
  "key17": "3TVgEEdp6fwnuKqUnp6JmCkew2RjDDuKMZmxBS7XS59qtvkDmeChUz7cqvDk8v1dZdSptqegYkgGkqNMdZ4xpTGT",
  "key18": "2KZBKWkWLDjEvRmiugbLd3RoxTZbJp1CyCoKvnBAHFiKcTmwBTpaygtibDhvsWi5psExsSePyGeYSgHUpvN6WWqF",
  "key19": "52C3WduXSFPRPGPmzxCP8syPhozK6MX5SPof6d4KpgntXmTKfKtKSKqi4xJ9Xh55n6t6conZ7n1xT3aLge2GsjFT",
  "key20": "tqJCE7y45LedkVcFdZ591JL3xaypcosgmj45p5mjsfEJsmqteisostR6A1zMY8vn3zg1oevFquuafZM66d1znjB",
  "key21": "5u2jc5rAF1biCZLk5jZoKVchRL3fn3pS3b3czK22hCaMdnr4HKpByGxgLyqCSSpuH6ELb7aVZKMYUV6uHUwkzh6P",
  "key22": "4KLbMEo97d7Kwb79945VH66KnvGPGBWLWqxdp21qCkdmQzFhAru7JCNmHZMJDBTofkkYEBmnbvpevTgJEyEDBY7Y",
  "key23": "eyTULdTYGbxocYxL32RinnZCLcFafDtNXiCwL3GnSDsfcyDLeXDNYqWqCxLufHMK1EQxHdVvLakYRfrxwfo7i86",
  "key24": "3rx1gR2hTkUXFqovRpcryi517YTJafMhN8aDDZ4ZWGZ8XHNjVV6FuqjKounNfYZbU4XbQhS73zStvXdtVMBDkyUP",
  "key25": "3qA7C2mEuriuNZg1tK9bBCa1Prqw21bvmpui4VaNmkPKtSBKTWBAW2dWrHuAx4eLZ75Sf6di9K8qZ3u33B2W6uPt",
  "key26": "5NFQ9LgueX979zLkUPdQVCPNz4pkZf1e1ovf5qtkV48TXQSNsSt2e151sAB2sJh4xcXFghXJsxWpCLBKBUNnKytV",
  "key27": "E9gfiWdiwSrxsvVzf8W1Doo8VcYXkXbHP2FhMiXV6oNMAHqdDA81FtQAR1x5fSMJvGZa24oDAUX1tYrWuV3vbUi",
  "key28": "3vcqg1PaxVAVSdSh6ZH3V6H6JK1wFuwY2vn9p4WNq5WT3vdjJFEfxcXg8xLr8XepHbHyF6vM53xHeuuCgPi3A6nh",
  "key29": "3MQrepy7htDnjqcDsEbCnuws3Mn4wwgSEbeBUEjXsZ94ZPmqTW3g7BvVfzkkhR1KiavnDPUPTc32jo6eXuLsYeA6",
  "key30": "5D3EcFLjVuBZfmj3cxJMNZFgRD2GepLyGFnaYohZ3C8opnnm4xCtuH4vRUyPjTKGck3ZLPkrzL5piezrKAtfLFM5"
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
