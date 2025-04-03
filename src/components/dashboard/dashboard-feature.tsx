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
    "4EichtRY7riD9WtcsgCqw4LnDew2xKXUssUdqfkuKtg3KBuZRBj7nQFXraT1cxsh22KNBpwqSgekXNA77GGHqAJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g31M6mQUz32t66eCet9qsdG1fxFL5Wh4C8rKJS2cjTTVuAArPNeageSSnmDYn4qR2j5f9TnAH1L3G7ndnqA656G",
  "key1": "5cMC5zuEdvYTrPtYpPbob4uWfGfKA4zhbwqsnakgm4QpdPn4MrcGZXnRke4QvrtEkYoYojHiwULMxXoXB1np1pu7",
  "key2": "3BBGCSm1EzUmaKi5d4ZmW3VRrQK2QC3zYfJaC9uciYswVZ9u863seUTdZeiyxqvssJ3kzpMUDibQKJasiqyEhP3Q",
  "key3": "RL546nYuiQS48Wd473RvNeW7sjoxFkzX74npKMUrxzWxsUBRna4ks7s2FjNP1zwHjo5xk4gvvVpqmMv4P1zKDFz",
  "key4": "2HcvqqLgAQLfW8i1LUN2AyzobQ6YxN5eGTWsgcsuLYKxJQEA4DfofZJy6arLGTZhHiivbQ2wKjg1A7rytxhB954A",
  "key5": "4movmj9zLsyA3u85zTfoxqjua8ZgCjLqDovWXQjgasoqpSch2wJgpePjjs8tdahT5dmBSc5b2dJjiUqGpZ5SiQwJ",
  "key6": "Ei6aEU9LFi1nNjtsFwmFHLQajQVM7zb4BeimyN8sBD66ktUGrv5MLeqSq4JamgzCMMfzSQaVUQvsCnv9JMEWu4Q",
  "key7": "31s2yYnYSQ2NVzKRZYNJqB8sM933guR99FVCtA1dT5NmXRDyjt2Up1zM3XqakoQMM48L5jrU32XKPqVk2quaEqHP",
  "key8": "528iQgUmc1TMyHx6t58CXjcXkv9WCfZSUrhgjw8BSfahZ6JJaSm22wGn2qjiFoWere77WzVzjJdSwnVV6j92D6P5",
  "key9": "2i7EodCrjwnMzQCaRYGfZU3JRBUUapgZE9TzimAihd4DEK3YvdkXhUKgDDS2gVBYCaQtsqkqa9f93YWVTXs3BVgW",
  "key10": "3Ug9zAvVkfX5qV4CaCNu4R8b8AA4NUL7h2VNGZcbjFsKtY3WaNSJJbjh38CCBcmAmvKWz8V3eNCJGswZ4NRxwnWU",
  "key11": "2vV7rQGk7CoB7kj5zBk3vBdE749A9rtsnX5jdpGcc6Ax1i4apV5LA7AZXb86RyjqqbhDHmrWrSrM6KhttXtKiwCq",
  "key12": "65aJiohVsFYa8G46FnE9KeHzDtBTZuRQrCuHPG4nwVCve9wNG1yDeYcmxJ9oZbrSWT3knuhN3gwgtVdYRXCB4NSK",
  "key13": "4CX2VAbCay6i2xkK8FimSHC7o3Yuw16ihL3Uk4MapH8SxU2hjvQtMXhkZQt6n1QiXtUknr319JRJ271KStj5ehWc",
  "key14": "5hWgFbvx3E2PWtTFNKth1nnPVNwggFs9WbhxdbsEkgJRjA8nSPouVTi1BGJt1tb1RHhMmhMQj4DNqA8y55bpfzUw",
  "key15": "qQpWbbZcupzpiLEUohm1Zvh6MinsCGBp8hEJwe91zPuaKfcMkmKSWfsJEBsx9Qi9L57NeYjmtvbR8PCM1R9sW1B",
  "key16": "5661JGn74YZ2Gejk9iWkagTvpe4z5McrkAoNcaWTFHBDzcrR33tq1BSoRstb1NjrAXd4AUrgaC97M9t3A7XeEigS",
  "key17": "4w9yetY4ypuwUBj39PbC6stRCY4qMPVkBWdFbUQdDgB2qKjUZpE2qAmFxvfnEt2NHbbFXgxA7UDjBxLPPoL1Lr64",
  "key18": "5XWuDRcUACCv5ew7ikZa4yEyktQQ4aQ9JF4KTWTZ7bQyd3tg9WqnmmUEziHmeJnCceWUbjfnTrt8Ag2MDWCudcbq",
  "key19": "2Vrbev8jTRiAjdGtYGfFKEnw8gQ8ohrNNPmviwNaCXDvBcUsKGqeXpC2uQ4w2inPnyE3kijeX5gQnUiw9bEmSm9F",
  "key20": "Sb6ELdv9E1GCZS1dnYsGBLuC1g5F8bKcoDEtxZBBZojBRAQDwdfQTRMTN5bhPyaFDEzKsKevJDHZA4EK75zW6ay",
  "key21": "4f9xfsUt4rdTTJKnewsmgRWpwfuBvsFPMfGAmhKtshLPyQQEY2HPaPUTXRZg67cBzoBWhbYJfPQ3D4QSrRbDH8mE",
  "key22": "3HBKewepXFqZpVjk4BsNB5WqrkQRMCpxHx7G5wRbvSDCwJrgB6EYmY1WJVxFhWhZYA36SPCE1JSk28JPUois3WXF",
  "key23": "3vWHS4eEgVSDCoejV8y2SvWjnqvxy4HjpsqTZmTu5vx2NYj6ihEJjNGgQ4To7yZzMKxL4uMHBLgBXM4K8ehNqQ68",
  "key24": "2JdjpZp9vnJjbuZVE1joSrTUqpiRRB86473DwEpqcftDtDwtnPNaVH5mgCa9ZXrpuvquFFnUfvKgceAGpUrtEicz",
  "key25": "5xUSBxRuRq51EoFDp2NqaWG3qqVQDEhLGYRvERrMmiHZMK1JgMDspze42XK68mkdodMzYwHdKvtGYptvNLJHVU8Y",
  "key26": "5iYKfX9CGfmop1nnoGh2mEciQSCh93CwLnuifNXj6Kq8iMLMJaoWb7cEJUXJaWzNPHqdetsb8YAdrGSq4xjH73U9",
  "key27": "U56YPJRJQpQ7pe7Yo2MxXby7dkQFh4HhcbriPFLk9STvYZYadpYwRW5ahFrMxH4CZnk2uA9fGodmVQTqx9uSYNt",
  "key28": "2W8boR116kDUqHFTA93kH5g3UzYTH1JURKVkbt8UFRSJAbcbFqWTeyAYgHr5Qj3k2zM55x1YyACV1r8M4qHfba4a",
  "key29": "QRBhfsJ7dyWAs2eYWTJdDc3wMDCbc2NYWxnRfDhx5nTpu716xEJDeCuxYMfEFSv4i141WySVyZBBeLqKruaQYEM",
  "key30": "5BcQh8jcZRP6JMoYWumam4U3apYGCdvcLUyJCJNZRDoB1MPWjCKoFkAPWd2niJPntEXhzdKvreeQEvKPeYVBiadp",
  "key31": "31FEXsmU7Q6AgPmpj2Xot9Nm7r6vTafg6CJ8JAMxndJtc3pjBXntUdJvndDS9daHHrjR2ycCU7GjxeYCvzR3HtU1",
  "key32": "3mK3SU1mwt7Eo98pxnct2HBxRzZ4R1GRnFPSzVnz5trZjFpYStraVThGaF2bMDGJGKCG19G1qkmthv9ewxJCRhC2",
  "key33": "ZFBUnW3eBaG496SP3WJciNHnXz32xAMBvy3LchaKnt42pbTUbEsKTskmfKtoFNMYqRDfkm7oweqMmmADxf5tQxM",
  "key34": "yE2qB9nRrDMwLRn46uwFJZjAghBoKoF3WTAE2pyUPc32JvGEm45rcXToUg7XnE6Z1jq1ECa5sQTmBjgKKQwcUdq"
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
