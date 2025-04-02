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
    "3TnxrxX7cbXDcF2pKmL7R41MNQLUNpGh8QWoMsPJ2S1JPAcM34CwBogrbgVfHMHvfZ3CJvsdfNpXEKPTmZue8Pnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQJyf4383ojx7suGrtF1ouwdyzEBYG9oEvYqXonQLPEcvFWdaxtNB9Qu42uJTWeSucpcG3AgULpaqWKWU5Ex4or",
  "key1": "PQ3sK8C7v4XTUosz2FizjHN5BGsAN5ZAMtXxQTzxm8kDyMT13kJe7FYoaJfBybndYkQS6C18Aa4cVqDY4ftVDx1",
  "key2": "4yrj24DBZVNyGkKpxpdX3Jp5yTKaZqziegrA6ayYRvifkyrSQ6sN6XQ8bDPtVMf5KYFjebDDjDTPMc4TZVkESAoM",
  "key3": "H9ptwjs2yx5HvWjz2KmCWwoekpcQw3Sck2o1FZn4JpmBie6bwoaDLi4oWFtuCDArJP2ZfYT2Qb6N3S8aMNTFNbk",
  "key4": "2U7eqVkr4EhXA51emL47iEKfyVvjmSfi6ndzkUZWZy6saUKmxWcFFGJe9qqxyoUb1CtmpfwxqfTcP8pPoMaSP18Q",
  "key5": "iVnvuHgXMtb4HxAToioK6X2BJzjMtHKNo2GznBGvU4zx35cBoFN5Pcqidu5QaU6kQVxf1ucoQQfN4PsQcfyphD1",
  "key6": "3q98bqnpNdNWsJAgv2dWKTYcSoPdP5TwUmJm6gwbeyuiA14UM6ig9y5Zyb6HZgNtMbAaTgLtauSzUXVnBhzm12Ry",
  "key7": "5nH2GUjjLY5VzqaThLtNMY5F2DNHQ9FDnLYUCa35GzrsfsXu8prKwvEk5gJyNPUF3j3Dpybirxgwnjk9d8r9ir48",
  "key8": "599zrFQXisrFRLi7UfREPce4o1RpzjNeJKqBw54xRhait2cufgLu7RsWZjdjaqFyqcDSiVcxjAawqobucoSRMnWC",
  "key9": "2xzbnNpwQTgyWbCJKyfRgVcT3M3f1rwQiR5yNYvJ2y6gj7Zg1rLeTqtjw6kWjVXZgM7H5cFBtzHSk9w4E681h2A3",
  "key10": "52Rbux7m96pRJDoQwuA9AMQCQ9uKzsBKTLpsUrJC2KHfYUkMtSkRQK7cDkRqwMHNie8JfpPWrWYdNG9yvU76Kz1b",
  "key11": "2jJNFf33vUXiLNjZc427cwYzQFhb3cjwkY9ghsGws74WhocDJQrerhhgv4Am7r5qeed36Db1rbynAEXSmuToogqv",
  "key12": "u7JbwhpEW7L4Qo9xM566Mt1K2VA71Ctex4yiaud8iotWkoahEY2mpFxgFsQ7qt2DBapcQVQCF9e632tPZ8u8bn1",
  "key13": "5EGXAseaPceP8d7XfkDYwNVGG2KP3kmHqyLXsaFxKi8UYD5gC8MSiKt3nEu7NJpFDU2PKBhSZXz62jxpmUBsKucc",
  "key14": "4fqPNYQ9vgEvq4nQGBGEcvE4A2i9KaUoVPUwbdkmvWLAgL4z6U1759wybLGwmY4qtCsgUboqn8C1cTdht6tjXokb",
  "key15": "4Sv4cP1zTTZSrUqVwG4DFWv53u6xCtR3Jyp1h8jUsPRh9ewkcR1fUYCycxMHRv2yNZQr4C7YVKjSuJseDr8TKiEB",
  "key16": "YaG6Da9g9K8CT8Rb4tMqPBgVa86A9twVVC6WVmMwVEFJgkCNPdiU67gyBhBBCzitB4Jdbp8Z8vsbkoKfY4JVq7r",
  "key17": "3vTjUvqtmvdL8NbS59DVQ6m5LF7UDLnWYqdHXYZCVtNisWyabXTKnWrHyNPN6A9jpv6487B1cu85uN38qySZhWLW",
  "key18": "2WFcCR1tuqWkng5Dj7tf9FG8gs2WmEJ8KUU6saoR5hVq82SZrGrGFyxqMEcqCrTes1Aasyum8qAeqF76kyYUEfqy",
  "key19": "4kbpiS3uUgHr2THJVqaL1bRmDTvjLnh4MumxtP7rBEidZiw4d7AQ9DeriTTfzzrV45g1RpBUwD4XCcWQprAukQbU",
  "key20": "3k2BQh86ScFUHTDb2wUEajG7sauwkCvKA1qoRxqvBpkqB2yBLKhi6Us9orZfujBuFMK1bnkC4syvYgGa33wLshQf",
  "key21": "232Qn2x3xTJnkdYwcVYVvfbjzEnoeUEn5hEF4DPbRHBXMZxzWqtisHoR23wpZSEAyJodigV6bUeoQ2vLdSv4DVmg",
  "key22": "47pq3aBEaRMzTwe7Zp6Qa1hNSVkPwDSwHDn3brihaDTzu8HJw9HBSRzpJ4Fwq2ma8HthqbTxp6Q6Mf1wo8qEhzUv",
  "key23": "4ZFMF3hZceCmi65yFjQLRWHWRk7AcMkvBkKoKvWVa3mUUNsUDZAKgoVZFCtqATRCrrvNzgSA4vAMvPUXQCwGS9dE",
  "key24": "43n3TTL1sDcMoQoDiDKc74VzhgqQNhkRYNciRZrxzoSHKkgXKsPLMYWW3AQ9y3MtdFPeZhp9a9uthxgWwVPUj7R7",
  "key25": "52PSwmb1SGUW6RUoduxpW6CgiLTNHfmGR1WZ8DVVxPWVaLsXZdA9odh5HcPnrPnT4Vu8ZsyRjXTHeqf16CCNK5hG",
  "key26": "65k5zPK9GQdfQ4faYLBqAzzzynDTgRFLv3sBrPXfMy6sy7Nxy17QT6Gwp5kdUXUX4F9b1znWGNsA13TnhGhSMF87",
  "key27": "2P6yvZpBoGiAPTD2yR3ycu5PwseHiskVt1qSXxtL1xTFfVNXXFdua1TynYuWHJefTUYi2yKKpKzsxzrnsPvngMkt",
  "key28": "UeesCPnLKj9DqyW4uTXKMNXnGvYcMb26oeWbLMtgZZeZMfdNWQM8zDVZ3wafviBkDQpx23cZSPaGMYUgg3s6UU6",
  "key29": "46AH5PS5yuesfM3VpBuwa4dQ8Lhp4pjtgszCjQZRuodngABMoueVdNr9zTf5vGZJmrx6qq1WgHUrqYpdqNhjpDWY",
  "key30": "2kyrLnFUxQtX6Ra7FZih2L3VoAYQ5eFRgpX7QPpxaX9V8sRZXqeYE3eAdFgyBoJsCgv4i1FDeyNE2ernXR6qNjwv"
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
