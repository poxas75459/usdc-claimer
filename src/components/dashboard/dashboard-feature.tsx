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
    "3Ne58id5sbr2BeM4avdKrRPi8KqVccsagk2pqHKP3bpwf4jZR7joCjUofvQhtJi8m8ZP5gTJ2xJzWfG8xGaBLfja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jVyDRgXX2aioeS5iJD5mMHBtdATfgEGUH9VGTxhsm3z7CiRNYf7kdaKiZzdccH1aG8AssFxmzs4N2J81QHoTPB6",
  "key1": "2RqBV8srKXt231BPsLZuyDkgYaGS5vHFgXFhq9B9Zp9zKFx8CsFfTF7L7zsFWz9Kz8jzHZoocTwDMVCHVqT1Rh6o",
  "key2": "SS6W8WwrQrZjKBBHw89Za3CzAT53vuF8hYhB3aiL7nKJJtjCUah3AX51tw77r6NBHRghvh4snALDC6xKf7zJR1t",
  "key3": "2nAzQaeqxVGffwxosfsD5rzxYUXwgKL6kR6WHsGTUwKqsA6jXobZgWUdti8LH3P1RidLJXKBeLf6c36eX2dRqJ97",
  "key4": "5hsNciGwtWcHXeUeAQonUWnrT4FgnU3aLPXzStFhYiX7TXmhDzEuHcsWf7gXMQDtYVVjon6NygP91xdF2zPH79mc",
  "key5": "5AjsBi6ECq8FzHgdRNL9qziTw9EGCXVP1j61vvNHqQuCNB5cYcZDS7hABKoWDujgiokbzryDUWts8L67dnkfdzgm",
  "key6": "3VSFMpFK4CqtCgLFggaqUvX2nnJ7qyixthVaVew6rmn8LjXANHZ5gpags7L1FUoH5Z4aihLNXEngZpDMsgMHvULW",
  "key7": "3G87JqKyJdEGUgF1BnarU9tXVqhAorDc7BVrcw2KAJ47LxKRRGsQhxvXajPba9t3skdg7xUBN8AgGpRiazy155JU",
  "key8": "4YeVkF8Dw9XbcBRg5pCC7Kd5DyA2ue7PpFqpusQb83VAQrE8f8vibzUQNbrv1fbyVDTa6oe5KGNUkC9DFg9ru6Wh",
  "key9": "5ksWjVcqGPatZY6apbpVNDQvBDtw9unrcX3n7jMi75b5yVJyLFYz8vxxmJnxVcEDz7ggkneEB1jNXJ4oxJcr8PCa",
  "key10": "53tnve3hekQ5x2KQED53NYLzm8jiEwk3xLTgAp6hVzwiEAePC8cdBEyPZZH56jNYN1zKuUFh8zPrqo8Su8Da6Gbt",
  "key11": "44Rg3ARws3cwPzV4W6L5ceSaAD1HFemtDfhgqEmp1EhqXZCbvTFtEhNpy2YXBuvYpw15u5o1TJh34e7sqPpLBkx1",
  "key12": "2b3QuehivXiHrsRv2Jw2fzpP9s1abXtkNDoS1XeXAE6GWrYWnryDYkjYifN2QjmRwJQFkvWUZn9Wd4H9MBGGFPBx",
  "key13": "N8F9gEZPn5WSto91KQe7cqpDNCxGt8jrE1Qdva4yANn1VS9r6JHX6tVnxFyAw6iUdoKHGHZMKYxPeTiBcy3PGGd",
  "key14": "5cMcioTv7KGxjtGzt8fHBZvjnr2WUJ4NchqaFBKg6Y5AsEE3oMG5CyNJcJigChokNTpxV24pZ8bCEZJeXh7uXX7a",
  "key15": "4Mvf1dN2rquz5TdPuB88N4DyUJHsukiEPCWJorQM4XNpoZFdi4qXkLEW7EbrYicg1zkxUwoobmEyLgDC3gqgzRUm",
  "key16": "sdCjBDyRkPtGFQaN8WUuVDxwzx8bMQv8C9vfPwhyedFhCMfHuoDZPMPue4D45KXUJTvVamD6y62bu6chrNMku8K",
  "key17": "21SRXwhMVpq23rZjA48sbjzaFHvsmaF7LVX4eSeuyW98XnHkPbRSFDfiP3vapkTq9cjiBS1pmaN31ezX6pEpYBGK",
  "key18": "2pR14E8gppV7wd4La3p5WbwTfnRKTxh4uA3MAujocFsEYqtCG4tMtKuEDjG6m4Wmgkjno2Eyy9u1QN7KJsp6UcuN",
  "key19": "4czCLaciNKS11iL4sJj4g9XfMr3TTrotBhzJQp71zN2tbXoG2T4yVdRNDHPaAMmPG8mDyhFVf4A4kyzihxHeXhy2",
  "key20": "3bPGhoY9j4WozLCPdX5HRzxrQWohcMi5JpSkzNFNvAWuzSVRKPiFqzhWCGct22LNuoNJjhzn19U4fqfmw4wEvac3",
  "key21": "2nQUiHJk6vQdLWxxjkuvWWvqwnW9Kc3DEHx4iKsYhjkrwnppoT9QDbRC37rrQypdTh8MsquqgioJfXteWxZioxF4",
  "key22": "R1yEsxA9xTArE7KcxJNLefUNNYcnErNCjSTP8X79N38M4hTovpKB3wd98KoR8HwScGW88gVh77cU2V7nW3GmA4t",
  "key23": "5xfcncjEHNtwfA77QncSJCXi7eGdW2ht3fhioixVN7mayLwjevvCk8dosN5s1dgKuokPyRYekxDuDoBVvc7Z6Cpp",
  "key24": "2F5NkFdumnwwjk6pmsNE7RPbVWpeCauU4Vmy5BdxLywfSKgLwxmozkFPzxWuy5gcBkQd532Jgod8FBw7W4xFXP21",
  "key25": "4D8E9yLJE2vR8JbS2oqkKUJneNjFCno8WguZ16dGH42tqSK3wyqm753ge2k5rQd2vCfGZatxqRpTpkVFN4vxr8rb",
  "key26": "5nYrJU6cP6zUwfRu7gRa78sERiMNowL3RJJHHKfwwEKhB83G7m5jLPqxTYTekPSPbPR3bMRMzXTEpHNoMKrEhKFk",
  "key27": "3Szz6mCmWqPYYwKnvXMCM11CxUX9t3N4PdzxXVGd84zHX9M4wB4a4dNSwMoX24iHobBuUYgP2Qtc115ye65Krw4S",
  "key28": "SbhAoXodtgQxMv2VbCHgbr4Ab2tgaT778V48zBD2BxmNYSXA6TE74HdgiEMbazQXRZe2PdHp1ERpsj3jh4Zknbe",
  "key29": "53wkBAWs4qesPrrhfpnqC3Dj2k2uV6nqmaPZ2VTQzadD67vCji5zdEWRFBSrXGCGT1KVw6XQvkZ9AkJaoL5QeigB",
  "key30": "oubvcgeSBzJRDAzijbjJnnMyKxFh3pb2fWFMvQutJPRX2ztMgC9ejH4A2soZSc9yKvws9Pd9ZvRk2AVBottanmU",
  "key31": "2pRjQxQGxUa8sbMaUTaZqWiM3PsyCbk8uCKa5TkfijdP2qgH2mww5zqwxfRoHbnqBt7ZkXi8NfYiY3c63txQewXS",
  "key32": "5mF4XboK2RUH9C3Vnpv6ALHTru9FYgm2UF7jJiNA1J2tNLZUnXTyXm8bp9knkfkvB6n8RxLM2cuueeaVEwpHsQos",
  "key33": "9vbFshyn1jRzYkHPJFS9hE3D1UNCNCzdSMADxEgnWjxLeg9tLVauzyVxTj15Cc4hP3ZkLDSpSvNo1qgGanAM9yX",
  "key34": "2JUNsQuQFnGBygytjtGb3v8E3EX9bcgqziXJtk4zZ1axvQoEB9847moaPvqT6ujEJvFMXFCkC3gxkqGZbZ7aidyL",
  "key35": "2T3ZxCJcBm66a4QseZtqPGvv35K7zqHAxeTfUMzp4qHTAs2c7ZZYCzCVoUd3j4wG3yYqZdGynGUUQKUMX7U2uB2y",
  "key36": "oeUXxF8KnwGKQrDdoxVp8B8sR1D2Zaq86C9fgSDCuQ1oJV1PnCE3V1yryvY9ttCQAt2o9HWtJnbFmbUJESMuLc3"
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
