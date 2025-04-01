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
    "5VZaXiwhr49KsCUsYB13yY2phCbgZ8NzWTAHJdmu6JbX3HmyC79TW6exWNTxQunDkuha4fgF2bRFucR1FZo9TNP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MbvttqURNFvFBf6jBP5k3oDSU7a6W5RBfruSoY3KGbAppKuA8KN88BNu7cdTDou6jLJuA4Fzjv8L4Jm8VSiwZL5",
  "key1": "vRTAcCc4rmxTxoMNCByxoHyC2eeYkpvsZqoDEMPRGoxqfnMeqYkwpUTubgMST5ZA4eHTPWWdBMyVbcWUDQfzD2R",
  "key2": "32WSVESAVT22mN6GqJP4qMnhAJ4WwCWnErZaHYjkX6o7o2mKJSd86ewDA6UuCyzZGCPq31zezbW4qemQxTfwiayF",
  "key3": "2gxdgd51TMEjDdrJ4gUVfpwzgxvuNkyiKmJHXTUm3hrSk2WvSa9dR3qvHU4PMVenr6VvMsLMxTCsZm8rtQDZmXzY",
  "key4": "5hgxBz4bEUqm8nTZw8VT2GSoYgZ69S1iuwPtaKh52cXePothBh5WhzSZBg2696visc3rqoKV2fNypC3jH4UrYNmr",
  "key5": "341X95o5GWhpdKqQEnma9bTS3fzBFwwuTp3UJrDxRuqZegxkeiihtuq7wtmnbjGQnN4UJz5AFsek97FBDuLEEmRZ",
  "key6": "3SqYYR3m2yof3BFgeeZovFQxnkyCpsgEu36LFt6j67VYP3Lkmeyh82Huwc9ntk8u5KEcoDSsEgxVqatLTpmZYuQP",
  "key7": "5SuDywvxtEdFNB7EiRSNB4TBUtd67iWdECxnKKyAKp6c5x8XcbbXG7yRbbzmh4d9VUGjPMjRWgNcgYtYNFTUsyuZ",
  "key8": "2Q2kUzZcTsbvXmfAuD27h5kadXgeweH4JQJH4s9kwLNtuZLmAJ1gBPpAnSCaJtoeoyYDsauirhNNXoaCfjA89hpo",
  "key9": "3sBbPgH1hDfG7x7jGTEaLTChvqiBmhufxdqMVinMepfsL7Jt2R7yybELzMSfenuxmhUedKPGY5EeUnW8bahQSriN",
  "key10": "bc1Q4N9R835dZMprQKns7PQ791UTnvAygyPt2LWXd7mrWtzrzr74D1TmWRuecZRQw87BQzu5xzvHhBeL3C8T7BH",
  "key11": "5BhHYGF8n8yHrM3wVoVUxmrSqXaAmnn3dXNF8h8bLFvom86M7QQ5nn5M719k5tkrS4szLLskWTAXwfZrKS1qqjZr",
  "key12": "27KpTd8B6QMpzEbRELS4HjpvUAMivDkUX3FP5wHs5kJhP95tK5Bo89vdXBcRTj9dJFJM9se1qtBMLybzeiysPkza",
  "key13": "2znVZniJWJ7p5ya7AiE4dgTDscRK75WfVY8PZMfSC56BTpdjHM22m31tCRQuku1T2ocMKsz4vrfF5h4uhYgF2E9X",
  "key14": "R2rgRJMUzycq9jD5SgxVFoNjzpRBfhAAkQuLcC1LjytBMfSCrpzGNg31qNNcDhWJdUG2mHHp2KWbBr7Swpg8t3z",
  "key15": "4KTHL62iPJSDx7FieAx57D5mkJyzBgwb8P7hQAutC2MpfW7mG4nYQ1bBo8FHMsVdZ98jGaaHSo6DRCqnr3Jtzctb",
  "key16": "4jvUxtQVivXWiVofmGwnHHDfAJXj8Ft9jFcYjoA1sYhMV4vVCc2ingTbqT7x6KuS7fyCMpHeFy6FLyCd8MMbWsyp",
  "key17": "FrSJPJqmLodMLoBEeKTY2mq2uYcBEi9HSYtVS8FggqjUV1LtYA4kb7ks9XjzgdfR8GF8Z9oXY4wojmhdmuv6oEz",
  "key18": "tptzQMKqvFsX62huAYYc4qkA6jKa238BVtsXYvGHxz52HRnnsXbqi6hWFpbwK1KD6dBeMxZE7X3hfm53XTCutj6",
  "key19": "4Z7NZBeyHxQCQLMGMK5Ukdsv452PDfWqHd1Ge46nLouqGCSao4qkX1CFYETb1MYRnQxuZ3PxwzH6Z26ZWQXncRY2",
  "key20": "3XdMF8HTfgkG8XsJsnQm2Gm3y66YcJmAzS9vxr4M1URcQxxX4tffRp8cbsUnWsVtTynNrdtTeHaLg2LKHkLnxPsa",
  "key21": "2DUATphWriu1y4MSES36Mf8mVNAhpkgwbW47zp18Lv7qUbt4AEk2ER7aeQtxDSwPcXiLSyaaKATvUyN2eUibGx93",
  "key22": "itKnkJKA43bXfxeo1SEfHU8b8jZfAsLZ44yNPzbbfPSZxUFLmHpcimkm2Vd5UcqQuwnbJbV9KSeRxTVivhXcQCu",
  "key23": "3QyQAFrc7h1SVp6amtekAE7vVPbCB6K1NgXEkRm3yZVzBgQAsgBX1minB6DTuMCC6A9DJLUiKR92wXKHtVJp8i1F",
  "key24": "4QRYMQgnAWPcNL64AGSfYH5kSkAzgJ1sD5Vx5TmKBZ4RSX8nc53SPDiB5UrUnb1uYF8gE7SdGTBVw5G7f6jSksSQ",
  "key25": "Gshnq8yopxkKtxfwmHxDyicEjA9RGvb4FfQJ7EugrzcBKenmunrp3ofzgak8rEBUpF9jDKxCvwzmcBjNqqgaSp6",
  "key26": "2UNrekoBUSFAaxkuD1x1BaVonYwBhwfoaVTX9iJKdGpgMs4fyUFvo6prtG8z9E7wZhrVUH3KCBWk2gAgb5Ch66w8",
  "key27": "2mqabcTBfNBya2ScTM3zyf6XLV5U7M5jkzrosuEVa4x5KmfU2SC527h5tJLXcxcC775KL4Bh87wMLmqVEbS6hid8",
  "key28": "seRz7B7PS5DS67HFejDWGCjZaz8gs8RX5ruXjVow1aVpESv28VDrNNmeg9xBHftuPx6WVvuz92Nm8ToGKzFa9HP",
  "key29": "31S852LnTmnjPq9qBAQabT9zphaBeQU87vDU93S8TmcKwmQRw7MrvoYVht9cnbiW3EuUBNe9YYy9u1UztQGi1xQ4"
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
