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
    "41Bcc8nESGCV56VipW6mSTkUYQ78XqQbnh4KSZYHY2xjDs7erZgqchTaV5L8REiFZg9QVQxDFFn8vFu7CV9K4frP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3funEYYiZnmh7LaXCuPqnAxCzpRNZXVpLxzACPkR3AWfqnW4iRX4knngSCjmw8VHjECoDbwm2X871eLNArTtXcL6",
  "key1": "3iBBKzC7wK5JnHB49pMDDNb7xnUdvsihv8fbRqwyaqWgYW8bGDKFjuNojXLrTVpvoSRd1MteheU8XNzZx495FeJ2",
  "key2": "4vWLmydr2KYwE7vKeR7NMm36xo7MyZjKmpqTCYZeAY6KyUrjg7Muca7TuGcaiUS14QY3tMaUGkYP42k3PBCzsXfe",
  "key3": "3MFFUKZqRKrH1RbxVvxDwUqwrGbK3SVAZsE3YzVgFTm8Y6MvsL85puQHV3KKMDYc8EARRpAP1pT1Zo39JwM3Qtne",
  "key4": "4NVsaimd5S7Lwaqe1HiPErTX686vyCSLvfVBJzRYssX8MeT1fsfwjWascGshzosHY9mUYJTN8i4v7L6dR4acpJL2",
  "key5": "3YeR6pVb86qTb5EyHo5xrf6iF1HQPNLzonqnNG1tbaANewX8XY1VtCb4FC9eX7NvjHpkFmdLrJXYqYVykZD8RvyD",
  "key6": "5x2JcaK6mhy1FfnTRiLcNAPnMq7oE8LC1oLTEuAUgrMPZC5mH84wTY3qf2X4EHpS4y98Lbjhk9srz5eqcBgbZ9ME",
  "key7": "5WmkQtQWgT3mzJim4Xdce17Z2anrKuAyGecNRtVCotps57jc2aWzhjZY8sZTfFKPdJcqzspzHZjG7XSE1pDDNjV5",
  "key8": "Uxtayq3HVFKoorJHbti4zE4m5XihEdBo76cP7R6BfZD66MHusEWxZsCz6CrERttvcmSD2MKBw7XxVqJ8mXw9sDF",
  "key9": "m9oTGPbX9JPpNHiZ4ic8DJAwwqopHiDvkAfqfwoMSmMRuEjQygzSN3Yjt3LjvCoRdfFF51CXYoyWTavF2DyvnL1",
  "key10": "6uyUuxGSsf5eRUnp8dEP8s7pSAvX5WAWLzEhjF4E8EgXKaakP25UPj1mTnV3gTascTexa1LZfJ96pH4vBtkgUVu",
  "key11": "5Q4sdMV4aZjh5VDXPFs8ZGpJ7cZ4wqgLWrJG6U57xy3TByEsxZUNGu4yCy1WPLPWuwnYWNgf3kERZxMXy3xn9kUN",
  "key12": "2ajjaDpv6MDcwAAFFXEgxb55b87WUeAe2fYDt9HneFQMkXdkGojjSkZWbesqQFu4XgFRQzFt2RMMqzG5pSJM8ejU",
  "key13": "238a5TkmBG1A3HHFEzMbcEJkRKDZF22k3s6qMRD8gpMnCkB3vYERuDvtVSmGyXdbR1g9LEZwk9DXA7dAo7GhzmrA",
  "key14": "Eh9fM9TTX4sMfCpBFe9B5AsmVK8WMMfERcnGk1d62d8ucYT5SKPssPvUJTcMbKRVAATHNQRAbE2EX2uGiyonZVo",
  "key15": "55rowmpgRRYpyHeoknPuRAuKbsjjvcJsAg8x5NxAZih1AKKyaFbqfqqcgvaF87w2Rs2hoWSajJqd2xEDMeMmPAVx",
  "key16": "5yg1R9SpFq6z8fbd8YdYnowzmd8rubUVhqQVVBmJ8Z3AF4oZkQ4ZerN4f3gUi53hSQqHJZEgURPRGUzuhLUysPet",
  "key17": "44vax1Cuep9Xe29hsKeysaMi1RN8uzEmv6sMCNpsVrNStAyADKtUDH9vFoA46omRDsRc8QDNs9E6YebF8iVSASiX",
  "key18": "5qoq6uqRUD2s973NfPPhEJ6LiQeoVx1wov1EYh4B2u61vMG2FPxmemZKuDyATNgUsV64QgBLyGmVciZTHu4EoDEd",
  "key19": "4Xotsn9XXEeGDii4X5BKJsXCdZWnTVwDLaNGazVQokc32SGdvmw5gBNpsCeBBCdqpkvFaT1RjKpHDnTMQ5ijtRgr",
  "key20": "5FpHiwgMH8aBFnTEHxsc1oxL69yi1kTTAxTZXD4eTjfs2ReoHeXA5Lv2mSMqmL6vxeaQXydKHa4dW2WYi22Qo8iA",
  "key21": "3smHCZ6ZcRp1qHHBoPmLf5SeJqCXuDhDtEjWo3tC9FozT31kbApKmpzSefKPS7orc92a3HGEcCTDQDcawuusjTag",
  "key22": "nJtS7L3AcZvtdDKv3FZzVYMuz1V94TbwqDCm7SjvLKWC1ZCTkPAVJQdf2hgY1YY9r1aTAr5ksPueBXPqpeXqVhi",
  "key23": "5PtVaJGCswRN52UZWyVkPy6ZS3P9FbsKD9RYWGbFMdKoMhNL55AdVuXkQMyeaJT6KnteYbVqp9Jwo31e9kQsph8L",
  "key24": "X63VkqtcJchHrX2pjv1N48yKuor9sjBzHtesDcWZ5ju3HNrASwKf9rQBVp1bKbdc8EXAFZKQVHnPhXv8aMFw4CV",
  "key25": "211JD7Ae5dyCHT5MAcEswmZ1AxASxhjjvzExbwnRa2RWwqCzeEfkyofu85ud8DkURH1r7j1NtQSWEdBBamRmUFKR",
  "key26": "3QabvLr8Azb5G4DBpL3BxeqZtroD2jy7UCGuPaiYRGiYAy5ynBHiVW9EBSr5Xoq67hipoFtNjGowdvUgwzqPgXv7",
  "key27": "5JGVxo4pBhYdqiDPgxqP8cHYQk8aeCN9Egxx1dXdN2AZT41MUbcLuiTJzuzLbMmkZNFGaL4zLoa1ZHnSJt87bLVn",
  "key28": "4JErYjdiV32gvrxnC8TKinkaTyHcPJeQzLMP8ChoX7wQJFTXsxxWCJJoJ2MLxtVfGuqyW59iWDW2ECDGBnpEaMPX",
  "key29": "8JGgaHpB7EqF4pPkVSomqPj9Di6QdoCWNTqikUBUJqAcsNdMT3P1JJWQ6oRUfGmWGDtE7pD1YFkrZKsH1canemt",
  "key30": "2YWTLJJRraNYaa9QZVYGQWeZeYsm5XJUnVm5M8qy2bLyTLh2Hac6vSMjaXFTwFDHv6TDYWbjk8m3rmS9MNmJWb6d",
  "key31": "2khfVwUQ9mf6FbJ8U5DpbhRBKkmTT3ujh4CCvCZ234PJJnWCzXqUtUia6UDkX3csxMJ1mfHoHTFewySK3QLdVSCp",
  "key32": "3ie9zJFC4sfJthZY8TZxGwAHNZEZEf1UKSHWKP8tnBwgEscM6YH9Sqg87NDnB8sqSq8bEe8gFJNMcfuHXYoRDE8h",
  "key33": "5b8nNqd1wkszoTNQ4ch8Fnv9sr7ig3RnSApk5iWWKfQj1DwoufLqXHo5gbdXgiaHcFA5CqZHQMgvrdNDALSk7hkG",
  "key34": "482rFyn2TXnFBVVy7PaNoFEFUkG3HeWfE3VH2vT6bkRUT9kTaX7XtrBMzePasmmWR7Rk4PD5pAy8U7FXUpqDn2JN",
  "key35": "5dJe8vRoeajLiZkQLTCTsMkBEj15CU2Z6H8ueeFNL7AReuFGwPJ5qVX5nCToEUgGeNDu7Cm71pfGmnvHQ4cpfChR",
  "key36": "XDBeoVnQaYgr3X7caSLCa4snRy9BzYzoueY6XzbvRR6J1NBnU8oSPoLXi3kRWocL98VrgRsZbpucDxcVi1rttyh",
  "key37": "29AYEM4Uq3WbC6Z7Rr1fQjbpPmgCt8kvk7zZBSUdk4r6ZwTbG8h8QEjT6zmc2j6VDG6ZfbSL3gSiRNCRYd3wAzJJ",
  "key38": "5F728EDCGGpoQJJRW2fovgfHUQAMqgBA81vX1cGD7rXRfLCMgkfyvTq9iaB5ZeSjMYfbPG34bbk2UDqwQi7QdeKR",
  "key39": "2qeVtRDi1TRbPPBwU841hZQVdTRQZSxTm5vN3HzFUvA1rYos5iPqUyCo1r4y6aGMCYydDo3VDSoU7frrLikx6ZHg",
  "key40": "36D5UqoLpFnU7RQNsstRdjfk7ZC1TwWGXdMZKEFSzNADKVnuuuUuL8Tk8k6RiwHjhJDZovoFVPGxEVbaYp1UU47d"
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
