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
    "4nJkNPsa596H46LJv8YV2eNjLZTfnHJ5NKmAL4Ca72EEH9GLtNE8Sn1mF2m5ei2tsEe5zEfwXNt49JYr2HZh1HVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6tu2mDjokG69f5sUKKdYenq3asnT5GvNonie7v45JcXZunJ4yx3FwiJqdfaf7t67KHRA2g8AUD7bMNDTr4JNmh",
  "key1": "3MeZv8PRjuHzZiS8C8tJpuYCKikj5EsSaYM7qNcqh5ZhfYXUo1aGpFFNjLdEgtezFbCRTHnnmuVcqsNWpRP7kQA6",
  "key2": "548kRS8u9shLiRTFoT9oPPhnPP6VjNavmqEPWBVY4mjuqpmiueWfEXLBiq6dEygGYAuvGEdjPc26rRdKGeouqvUn",
  "key3": "4K61cSLwBwMqwmTfJAu97yi2XTZ5xbTpb5xaMbjQe4R6JTn1jVXS8iTPe5t14kDHjv66dk3b5FdzBGZC5Je6S7X3",
  "key4": "4RU2WZs6dfpWrBFfVkDxjyqteKtZr9SVEGEzF2aMjjACqRkeQx5CtwDARpkBtZqFDYZCFWEQrr3FmD8AEoMtc24i",
  "key5": "5Amxi7t6oDq5Kms4npcRKuhoTdQ3amMZkEMfNwEpVK2FTp8ErnbjWK9yD7TA2U4HpZ8WMJBkAxtpYYao2qUtSevo",
  "key6": "5xxGrJq6ocGtgMp9VdFA3wkkb5WnJiWXt4CHSCRqT8HV1DUgKUVPveqJC4R3ry71ik4sBSqYia5sFiqj4QWexrEJ",
  "key7": "5bbUjzWmdbrTngCQah6VwJeAcse5pQ76j94aECWSKRxaGMdvfRfGDzYii4eAFbfXZokiqqE36phYzigPFdzHwPXE",
  "key8": "5dgYZxaVxgyqB8HzSHTQAcQKCFAcDtfEtavTpJgqvG2a3Bs9HALvqQwG1MRMSKsPKywSncvrg2YctVFsrqMz2dSB",
  "key9": "28pfAMERcCp5jKdnGAtbxpL83ns1MD8LqcAuJKGvaLSzejcQMBC7FpWEZW28xtQsrp8PzXf6JBjYD5ooYhpu4geK",
  "key10": "39YkxZKB8ZbmyKnByYGDH2LXqcLUbSVMTgszbNYP4DcSNeSaSBTHo1pHMo4aGjAVUEbK8U9h4s58vr5zGnLfjUEk",
  "key11": "3aUKijpLccdxP2eZHvymC8jEpWq8Sv9vkLQBVfzhzVadvVcFMh1KiyacvrJyApEgFJhZcnP6H2CUYP6jDo3b8sKg",
  "key12": "36UErKLS76SgbkJhhuHEagGX74R6Ce8ANdsQbP4t8bumd6Zhx4Zr5cXZ5bsiigWtLCJwk4z641Yy7iw4yu4WX4sM",
  "key13": "GrZrMXxL12hYA5wcUx4CozcU4xdguA8DCRwaK1yj9dU7m1Lk1ffgpc6FqqUMU7VK1WDhpS4U42rxk96C6EYdu4A",
  "key14": "EanDR4PpGsRmYK7GvA26VYHuKyww6zz3axhf7S3FN8Cro33HnjM2RVgCUQcRG9DrP6RUfiwMzZvCXAKEdctbp19",
  "key15": "66nqoChSVcfe6jP3dmjrJxSgQ9T1DTyjoriqsHoGE2PSfAyrHimgPTewNxXBsKM7HNWEeLL5U4wtw4BW3ARGQn1h",
  "key16": "4LuL3i1iicgEKDE41i68NnibZ2GwwWpaEQ2FzNDYX1FgskxrCLmSiFz9UDCq6ZXjc5X4x3aJiDZK6QPfxBka9wLN",
  "key17": "3BKq2kXdv7YDWA1VM9h2xQR6tXcquWuoVfwd3cHrHoDoPABx3Aa4b5bZa7z54xt5EK52LCUXqEeWXpvumh7vF4Wp",
  "key18": "xrvkdmioDTtxmPxw3mpyHnRLc1g8fZjZ4JwJi9Km2xQhdsPp47eoYnLtY1xXTr2nwZmgFnLUJqZeYUZZxSodFMe",
  "key19": "3b6uENjehQZypkU3KwjyoAerNQLgnoaR96Uk8r3wzK2PBeJzFcycyyZzJahWhZNprMVR2hXdgGbYArbNwryDBCk5",
  "key20": "366m45HieScbqm9ws2kDB3Fh1ZjbQNKZWQJoLCarYjnDRbZsfUPpSQUu9aoot4LnTzaH5tieKtbjzQTrar5kMeko",
  "key21": "4xrcjp9WaUPHN7wJLoRtaM7VmVPobLUJAHJEmDBgzaG2imyBa8oTqAJL4GzRVeiXjxXxMsspc83Bwogpoi9q2biv",
  "key22": "3WgaXszcQoTHavUf5ZKW35nt5DNpPW1FdKosQ8mQtMjEBu1yFcP9txJGHoxkXVkQ4PNxP3WpGtvx96tT6wjTM8K8",
  "key23": "48GcAQ5x65B4eoXLHdrdABPw1DFgE7s7CU8bs9J7NwNuYKijtREyRnBqvgsR67zKuxYKEUCCPmWLFVxjQ5Um8Sbm",
  "key24": "2gUrrQJHVs5u96k2Hmz4tnmd4FWbsYtwpDADcUu5GJ1HWmZzB7kveNE9Zmt1rHWZvyapgpdzh2HcjQPKE7hECppU",
  "key25": "5zg2psu3QGBdtMD4Weuh152xK6NK9a6EjHgsWe2XXFCrEW9oqg1Aodu5fJ8CtZHACXsfK1TSqSzkCzGHXMbQcGPW",
  "key26": "4FfmeptWvpXtiRsn3XnGqQjDwnPV9n1hcL17KxnerfzqjadN5UyHYHU7yPr4KArenRqNA6kfzMQsK9yhu4cJ1GQo",
  "key27": "3F8vVziSC7tXf8gJJgJpY3K8cEV6pXSX5t5oeNvBMGkQtKuhw3aMah351syKeW8foJWg9bwD9tuVZ6bJ9Vq1WCNv",
  "key28": "3qSxS2Vs2EQgVgJEFsdECQoi9uo2Z5TDgyPwDF1oHAta7an21mmgMyzpTF9Xhu1EakDsSf2aP2NbNQBPLEBZCzxP",
  "key29": "5tr48d22vqe3h6b1q45E3uXLKmcGUFduVxwdZW83fyXgDiPR9q5W5xtNvWxCDVfY8ukSfYD4uk7KHKCNgHkGKFU1",
  "key30": "56mhq85o9JQuGWHmx54CHchbSgoFZprSdsLpTwmhL5oPtDRewG1uHnTNyh8tLEqDwAYt6zWaBG98pd3DPkYcTFVF"
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
