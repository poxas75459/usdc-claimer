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
    "4YV26WL9m5Uddx37aU2nsuxw3S9s8GuDpp8jmQxoMyLdSJDEGzjJ18RU6nz4cuog43ARQLKMxqULqdhg6h2aeYGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RHRAtGaxgPsVpqPgTnYQWmrikAYurAB7jLQtjWE8u5c4SNArfPdqHTxZ9vp9pfgVFegE5N3LfvwQS2rn9xnzZN",
  "key1": "2xC2s4JsxEsq7iTtsEyTGurm4g3wHH7kHtAehiveLBLPdAu8D2hWziEwzradgtvKPWZCw1a3P2VZJroyypQ8638K",
  "key2": "332zLRf5FYVGxCv2wKU4LKDaNC2uycVpoZkYunVLxKX2gDaYt31VjsqUJtwq7iUFXz8Kbiy5WTFT4pUSqTpoveEp",
  "key3": "yu3y6pyZu8rJYzNcwEr4T9yMZMj2Vkad9zv4ZbJM3ABad6e7vBcLwaa2BpToCcuRjtH93Vnk6x2mrfzou5kswfi",
  "key4": "3Kuj6ZBMqgqXZbojEkbvkYrtQ5rNRy7coehNQ1A2Sz2Q51Vj9RYjCvTTLMDE9AYxzqqY4r2MErwdS1Dcn83G8LKW",
  "key5": "3f6FbSEywG1Ems9q1tsv4k9rpiACGHgdFEHT2PoFXhXm9YQnux4ZECGXn6KPrQaP19kQMNU7YtYqo6UXBaBTT3vV",
  "key6": "3sEABS7Gs6FktcqM1AampxkPoC2x5kwX6i5Qb6G39qczbHm4jZyWCaEehwcsJSNzigWrxZtNHa6aWUvWPc1ahD7t",
  "key7": "2yShWkMCAU2YEjP7biqZCuqL7SvLiiHbJK8MxVkHXYgBaizb5feJqFDwEjodYEfMUi8GmZDQAfWV1uoXT9VovVsz",
  "key8": "NuzcpXMhUV74zwmbA9TuxqKtPkK6Snu6fvBSJHeFKXzacovd59VHuyCduaU7cH16YP37aBAmMCBeRHDTMCC4rNg",
  "key9": "2sC6BheKiEWEP1kdhuergk9GYon6Mssj9oZEKmJjszNg25bhdw6oM33Fgugug5eiFB2CZSog5YZrcGozhc5SMQUH",
  "key10": "4x4fwK2LW2vmS8Y7hv159a5RgvmqFpJiSC4Bsk3TN6Dhd4FEXdLrgdWWnqXt1gga9tvkzqaba8Atfva5NcVrp6N2",
  "key11": "2TsCTygxVgLYAzsGjvfSZuHDa3H6f9TM99T1jDduivFq6Xtsa3CNi3HTb69eBrK5g5R6fSFqKw9vwMUBeT1sLoSG",
  "key12": "3HRvZ6JaAW3wiRwW2VS3nhLyrJj91bmPigPxPaMqynLvrMTnLjCcHM7EojNbkxVsT119yU7MWvRxv3zk1t1gfByD",
  "key13": "5QUDpg6r6tiFyjpu6hDEQLfPYxW1cTr3hUYmHtknUHUY9HY5VKmjmzotkgSGAe8jufQieP95J5YgP8NjfHW56MMC",
  "key14": "Eod7A9TCML2JjHcYJL1fnc78MfUtJSEZSUZkq7FwGAsGpxiVQXJHezgjguS8MWw5DZ4cK2VzsXj43qFacrhH6cY",
  "key15": "5rVRBV7qaTB48WrhPcR1PbXs6mcAEnCTygxGdubf6XvSgL8Bt2hPnpVB68nRRGS6hD6sEEgPhCfB9ikZd9vm1DZk",
  "key16": "2vTBPHrfDery9UNsYv82z2nSb45p2z8Y1Dmxx46PqYZxLisrVo6syXNVtvcmZGvwArR99fipLjxBByHkxxcWU2ze",
  "key17": "36XwvgBqtuNPbvPgJQHMg8w3mdJpCLuEEGiqmW8Xn3vVGm9Ah6Pk6UTe2DDLqoSjpvkiwrweevkAmJ3ys1tsbbjH",
  "key18": "5WzXmYhrCxvAZ9NYxA9fwcfsnu8ieSFnF68BxJgipRdSBgJguEFbTGuj4eQv5pDZxqir4VRwsUPsUpGuMchNPjw3",
  "key19": "47ixU3sbvfnLwPveacq7rQLKascL1uY7EUw46WfZUxbNMuXw73scDhkkZHAMBDXNmwArwi5N2uVDi3DwdegC3e6N",
  "key20": "2Dpyv38c773mHtLYoEbT3BEE5McVvyVGSZswZwFhSzUfsNEmXmzGxYtS7c8NRfwD3FvamCBhnnvvxMyqEMfp3cFw",
  "key21": "3sjFBUcuptQegAuMnznaSwV2soM7xbrTbAE86wW1wb9PAFf7ZLwiYSiH7zE8FVrVL8xFWny64ZfoTqM9GckbUFjR",
  "key22": "5rFpTczr3cyN19hzWrTjiju3abunHLBW2G94RXGbCVbbvuWYwdB9h9uUHdDrW7wrXJ5ARrqTmViXhUzNczQyMp4k",
  "key23": "2w2taTyitYbTWv3UdqwgJkyMaZT1RmobuxKhNPYTcCXdfcCCVNVZhoRJZXhZLrp4ZmPZbgnbvkEmMcZCqUUCyPvr",
  "key24": "43WHDxCBswHQRXLrpJSFi1PiCbnW65eeATGzQVwdJwx71gnonwePv69w3bkcMxMCTN4wDYhBprS2HZwceLnpB7JB",
  "key25": "4oqyHtoWpDfW3DesWHp4kyc2Ny9NHZX3qoMPCdcN5p9sVeYtVS5RbLoDb5VnabtUdJkCMTE2AGVRTzXxe2U4Fxub",
  "key26": "37qou4e5vZC6weqp3JsN3J8YsvB11s3cDvhYtkR4KJnhZgJoFjFyzPiLvd158HHN9QDcjDBZanWzGhTcPsqHN1zy",
  "key27": "4JEJusA4SqaC3sxApCXaaVrEGTrzsxgFSwvNqru7NGFua5Azty25y5P65bbkH6VqnzofZgoDycgzoXdfn79LZs73",
  "key28": "5h6uupaW9BD8RPp6E4QtSsnsk3Kw9iDB2JNWtaoD5iqWaZ8Ew1s6Dn2QLJwoZ6WNqYtEBBQVazw4qSPP4vaiFBuj",
  "key29": "4M5TbRzCjeTMXSErnzEmqr9EjW1MG6fGyidCapLcLqNTH2UQVRL7D1rAFkxVnXw9YYvtVTGE9EmimuLx3xt4prSc",
  "key30": "2TAUzHBwLRqyYEP81uj4UtzTYoDNLe7KW2q3dXy6iJhuszqMWL9VwVp2NoPLVbdjfoWAwgXR6zwke7MpVwBtA7tB",
  "key31": "5p52N7Xq3P6m4QEBfY5iQBFaQunT4QTT8CV8qrG1zUr7TVakMP6RbkedFmy78NrryQcTpKE6TFdTDo2SEoY2sXkY",
  "key32": "w1QRYA6SSsCAhA8Sf1xrpgdf4EFroXmeqrUuKDxLzTcRU9WojEWXPjQVHvPAP6g3mDiMMz44EC3RFoovmVrB83D",
  "key33": "2oevj11zcTAXy7RJit121V172tqCnk4ZEnUjX2ATyGpeVBMuWX44xZGEPRADZvPZpTCLj3c9VD5uTpEeqZBUkNcb"
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
