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
    "5yNMUenzhDf57xYJXQ2e4mPNfBHMXqrq2ZrBiZkAdff1QjGNZSAbGMsbANZD1FrFEpPqZcDaCC1zhr3qPN5KHDQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SbqXZT6GabdNydg3LaMxPGR1dmAAvvCuPD93MqH7napNQJvcT46MT61LUwdfBSfQMj4YbXzuGzNZLt8VwdgXuzG",
  "key1": "2YEVHeign7y5emJYniKznnWaSpQXXtGupXRveAN6bkaaF33cJiCEhcv8mGUcFJaujQziQ8yjgt5Uf7p5BYUSFrUM",
  "key2": "3M2Xy6zGyJ83Ra6Cz6xkn8cGL79DtV2CFADZKs24YQEuZ89YqhssZhePARq2MPzRhSPdoBBtU32ZoS8K4aMscLTK",
  "key3": "39ikhQ6pRW7FGsJWpgVh1tC5S7VsZQJHQyRUazwAdmDo5hVwbog59apbnbxPFViqBXKi579KQ5dunrmGeKkKk1Rf",
  "key4": "442YaYDhTh28GL4fXxjJCnHMeff4V7kQaSS5Rm55Hr5hwHNUiumsyEdGjUnWgU8PT5yZ3t2oixuk1oN4phC6AkRR",
  "key5": "2Yxd3dnbVyJWUoBweVDa3Uavb83JVmMx73x6pt9FYZMA965BJB9USqyygMGLkE7wT6h73bijy4j3GNTJJCfXs1sG",
  "key6": "2631WenSgFRCZKdyktgDkvS23vQ1wobAykfYpEP6vw2X1QshnTEvnuRUpFNuQGhRw4vucJd6cpbk5C8wKDCTy6pw",
  "key7": "2LUQWw9BKSxVQzAWEaxnydpH662EbW82ytEDb1j8qFZYJLip24wJqbN4Gdb6NR1mJrwbW6g9ssAFRt5k8hhCmYZV",
  "key8": "3u2c6hAmVWPbrxByfDKEusjpwv8azFt89edKWydnKZfGPNvxZiNmNKa8vbVzBg8AxGCtXdpKwxeVZNhe9jod31oJ",
  "key9": "4EPtjMDtqFiDP5J6dTkn5g8JsKSW213BqVfdCGsWFAZ26f6NLbdhWkWgEV7SKAEp3qukSP8yaBUcU8749ULdoHr3",
  "key10": "2KpRZvCWLxiLRwYv5u9hm8bYoyE3mpgRjByeem44UYEJzUgqqZ2Vj8tshWmxJStjPwJcWd15LtN4EsfAur4xZufU",
  "key11": "2dW1fNjbXfxvHzXFxfytNCxrtju19xPN86UdARE9hZVqMGdgGDdxFFcGFebQLNs5aYWCACyKT8oHruX1ps52G6EF",
  "key12": "5dKFpEQLVj8BraLkqCehQYwTyvrfpSWoFQSvbTuPinCqhsiuGn3Mkxb7RGgi3vtjpSYXjZXcdNVzVE3J7RYVXndg",
  "key13": "CtyaTVUyezF9E7rxgsge5GC5H5x3WM2ZwT3QrrrEVkTHgb4ZJsTCftg8wfoWWtD2p4h17VSs8dt4fttgrNcrfev",
  "key14": "RjyE4H7qjHprcsZ376ZQX55XxhawBpjx6nXg4YxdugVG4ACP3TSBvf8int9jzqcnJwKBSCvxNxYxaSNqAaUSu6j",
  "key15": "64daVCz6rGVeihkToWh9yMpukaaNDVSMDXqEYDJfSRT7tDpUNqZgYSV7yzxPE99TVH3EgeuTLAYbDxMdJUJgqevL",
  "key16": "3GhRRKW8Srmq27x2wGxTgzbqeME7sHLrYqEGiPnbCEd7kSPeHyBFEN6xuBoJyEEY8hsXhtT6DCYVueHthcorhZoZ",
  "key17": "2FFWiHoMkKHAgqzpLBfhj2iKySFLW9QJLAr3WL3kyUWonRu3C9fcnQ1yJafpXBCPFj8AzbkBUSbpSbW5doGTRmxD",
  "key18": "r7SbtzkYWMG6kGRjcj1dC8oYp7qe7vFwH4hxtgTv3aQ6R8NpXqDc5U9Xr9nAYLiKYJneHoRjGnmQ412xBW1qgLW",
  "key19": "2YxikZYWb9FUk5aheYZLwGTcqiA1STnz321DoQgXVBFenu3myUb3h69M4pjvjXGfWLMqoBmCzEhvj58U9NLmAfi6",
  "key20": "31Ep5jLPobESvfbTHeeNn7gH8mDnDYUiCezZcHkgfbRJpH5aHBZmek56tsajtXX1xsVAq8bBuE48o9F5bS1v8SH5",
  "key21": "2TfaLHLS5BG9ySWNQc9AebU9cFNbPGz1oZd3L3JcqRQRxF7htbJa1CmcQdCokWffF8EaJrdUuXgRAnu9UG7FL7c",
  "key22": "45g9jRTsRcods54U5LCBrYzyhno4mnYfZmcYMn4Lc6TkR6HB5gHC5x3VoMoUeNm7CigBykfE9ZwdVRNsTvAyTuCq",
  "key23": "4uaGSr3VDyCi2YprD8sjdYgPMVzFxZgBgr2a2MER3FD1BWLJbApoG8fduQS8F5cHnfERUUwJXkUudD9XQARfz1sc",
  "key24": "5Ff2Xu6CHEkHTkEoUSiq835JRXkwjL6AFh2dkaXKPUuYhyPLgw7FqG8MPSKVpsSrEX96A9XMquUMx2E9fpakoadR"
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
