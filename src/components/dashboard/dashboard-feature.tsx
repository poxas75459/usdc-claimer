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
    "nQGU8tYzGCE7YS83Yv7PgxictpELfeLvyKHsnvsSVb8tDHCkd3yauCimV4t1n72SDgs3HVSFmxhe3bmFjUTJSP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43oHzb7CksTCMqhvurcPctVRTLkBnNkakxAaTJefm52Ca3VkZFhkNNQk5peExXLsSpp4Ecn3yhUBQ4WDZKh36A7A",
  "key1": "4AECwTLvadd27VP3hWuFjVTRA17diFabNgsJpjC4pe5rXA68F4fjRKG27XvBxkb628jbYxD9iCdamCpmPUbFWBMY",
  "key2": "4uhnMnz8j5ySrnT69mw4NJdWun9tmYE4N6Gu7eog9PM8HcEN8S734oTRmDGWtxodzGg8BQdcAidcsxffyT7nAuaF",
  "key3": "43ciHkyLqKQg6Shha5okRNfbupe2bdUswn8MEpK9GoNEDnmN4gJyaYUfAssEvpcmjyiLFdGLHkWhRPbQLzuoHq7x",
  "key4": "pmcZddZJt3UH3UASQgVmHSbyyQhyjp3CiZAYR5ezoU4AXvLCbMrzhjXUbDQ4pTgJxnWeBqhvCkLCyLfyWATW7QE",
  "key5": "2jZ8ctqBrcjeeJh9ro4bu2r88bzuZ1gaLMdFoa7AnqRYy9ohyyYyRXosjoEHyhvAMQz3xp9qM5aBLhLXiSWTeV8D",
  "key6": "3ZRh8CRVG6mvMLECyQAzU6XNsRQNW9YThNk4XnaSqfoqivApKKaNRkpfuqQQ3JxAaSfp8ZBbuuAitTHUdBk6k9gJ",
  "key7": "Q6KRWfeTtDbE2bYHMJSERBNhP8gfvUcV548cakdQmfcJMSAnJkbvekxGzNAw7kkiKrhHb9ZZquBHN9jYarxQ8qa",
  "key8": "64eSQuiTJHFkEDAdgUy9h1jkJgA8onnpnz9bjVe62pduLPHvWK7GU57EA8san4pHj2ucT7deJ4p4VrpeyviQMiuw",
  "key9": "4xSJoPjr7yYfd3Qw96bRe7pzVJaD9PxwRNbVy9Do6A7wFebnLdhWhwLRRGEPrUf5eCjp4wY9beytWdqPSRcTMyrC",
  "key10": "4hdCUPMxsS1ont6vLu6KzMXfSeAPH6bPbYNtbrQZUA32fMkXXrYX55Gq3r19BmZXXrgAzYPVbFmDSWHvU6FB13fh",
  "key11": "2WWcZegGN9igx9JH2T2UUeToTtr1yajGoinYcwhFVJfQxFjDinirrVYf652a9BG3THSxmed3wxSSs1ow4DhGLp2o",
  "key12": "3DEJhKmyo2m8K6nb91p3E2iSRovCFetLX3V53krVqedsu9kjh46LMBgoGC4zZQu9brye6tseRUNHRWbmxg2WomyD",
  "key13": "MZ7JrbAHkraxqNgpExHUKjkciywUthZjM4fLRv9P4sRC6aAvoJswZ4cToRDQsyPqt52tedV2GbmGPFj6WdAvVQE",
  "key14": "4dQstrbPx2nACU7ZrR8x3mbaFL7dQvwn1v88Wx2sfEPNNhTnmpi544zBGjcCfwJENyX4pVcV9DgYbpS25uwkaJsd",
  "key15": "2vJjwWUJiHKJevEpFF2da5XjjD9gUiQPE2WEF4dT2gs9fdC76WGMDD9y2yg4z76SGQo1mnXb2vXX7sFWJXAwCwbs",
  "key16": "p771zJ4QJnDhEQfrCB5uosqVCfVKYb5579Eew9JQa7iMzZjENUAnL5Ro1M4s2LzN5k3D2AQaSg7uynf3B33552Q",
  "key17": "eb3NsjdMknAZ8U2SFXggw5GagD9Xh3QuDESAW1n6xKxhWkXbK496wJ5ge6y1R6e5tseQi1oyTHHv4y5RauucBtr",
  "key18": "2YjADWTuC7vRG2jVjjDMnWSvrfQHnyWJ1TgA1NFrP9d8aoc9oHL3a85N6eBym1PbZGzELe1whqVmwApuf9JwZTBn",
  "key19": "4E4nxFfFfD6N3T3fD138mdwZkZHq4Q95dF9NVHdVaKUhCyfw9AGKn4tLJdSTzcY4Kkcyo3kJn4imNqQaTrBryVS1",
  "key20": "2Ce5FqkDdtjuyLXjTLMM6wjLpwrG4uAPtgd81iJV1odFhAk6YnhvFxJTzksQyP8MyjWyVoG1ZQ6QxamiXKShD3A7",
  "key21": "3YUzH7KRsCTdPoWCrp9Gk2Tt69LCye4UnTdPsK688o4rN88JmASEqSqHygbtzCo5CNdy8MBddVTGtsuq6QCoynFC",
  "key22": "53AR9JrYexv7YK9N2kjDxBSDNXXRxkxD5u8wQqehRay9nacFLRJBEhH9mvQfbLhCV4UEo9XdFFqFro7Ti1ZqpXhk",
  "key23": "4aUeRBB4yoxgVUmyQFiUFnbFnzFE77BxZ52VRxHzeDiXahvy6CvvVmuPwUPD2Xdt1KnVnH2hrPxYayBdXfXeMKei",
  "key24": "57EQxFVPuig9v5ASFAPtDy1CGfgQSZDXXzsRAmrV4S4ZKf8EUrA87vnhKFVnzYP4KyKJyp2FR8QiKayc4cDpUZP9",
  "key25": "48DuiZwrx5jGk7pW74Wj6eFAy889f1MbJrXmuUCiCrK8oym8trsa3VzSuXKP2vfmL2ZSB43rcacaunCYRtneCBsB",
  "key26": "63H76pmp8cUav5dTtJw9QK6zQUmgXN1S3TVdWJYqMrcNz7DTmVfJNqyAizZqviJZHHGqnDACU3JWfa967rUbSJCz",
  "key27": "5zRc3X6UBKef4K7AEWV67uXNtCdrv1QYEvX1G7xxk2qBqyzJrwbqDnXgXtP6iahLoEfXkBhqeYu9AVnPGPWioVgZ",
  "key28": "4CmfLckUUP3eAgS95LcWA4vPavG9GqQnMXECzoaF5woL8B1hHV6ejTRJX27mVMVWCX5ku2ygaFPe1jJZpW7SJmmQ",
  "key29": "2vcET9ErHhAcBCHgWwwbbrX2FTSmgcCrD7T7hbv1Q5tj1Q2i2EuuECS8fvJQFbuK3iTJGxka2o6cYUAmyRqvXHmy",
  "key30": "5v3BfU6PjbBNWjCjQ6SGPEyf6S5VreNjbwDoNcE1XKTGrqemtVchX2qe7RwgLJRByGPqqWz5RxEVcPccrUQwHBQs",
  "key31": "5ewtHFU5Hwf1HMAJz5sXxtn9tMmpMhnzBNndewAFhHpcpwqQAA47o5BY8ApPTV6iVtrE8utu1q4QDH5BFJQHUbax",
  "key32": "3cw9MT1qJ9jKFyCgfK3MSECQhFmYYsbSC2mH6vLFrEfNUaz9ENHBL1MBfasP1Jr4C6EkA4pmYQdrRQC4hibWLSjD",
  "key33": "TbGphfa5Vu73kNXkupNgiA5vM9oanpLztAs2XTuhBd5BNLv7pme5QSCcS47PLHtra3p7m6Tu5vH3zevCQKb2QdU",
  "key34": "2DT6QSxcMNAuKpvjzeHFAXzPvg166FFc1EgYtW9nXS57nm8J5Hi4xbrnw1KwcoZN22norc8EFS3LWyPQdMS7WxPS",
  "key35": "4qz3vkEATCHK4LVBSwrVp5Wzc8RhVumoGoHrkPKEmkcGwghTTwkJtS6pQRxMF6LmTfrxWaW1F1BHTJASpojKT91z",
  "key36": "xAEBuxSC4zzJvGjyWb12ZgEaPjNYUHu9w5MqrJZa9WX1SGnofdWnAzEsmYWfn9vYAQN89QTrYgVZ8g1jy19vYEj",
  "key37": "53tZBBswdMXESkbmse9X5i74m9EHANZPibAJjrJtYR4pJXT6nj4XANaUnVip94PXg8MSasqXrYUA6e5iwUwRtk7d",
  "key38": "39tpr1N8H1bPQREeJCQhpt2FfPD5h52Hpx43uiVs5FkyjyDfs4zD1c2Dx4fYHSrappV6TF9usLiYV42im6HqesqG",
  "key39": "5H2FFvVQPpxgi7CTM29r6grgesgoUB2nYW9DtZYCqp3S2yLFXvakTHW2QYkWU6Wb6JDQjGgjZUoyh5c67N6pwQzi",
  "key40": "5ayvkhztxPuenW4MdawPsjUb5zgbm9jVPG7ZqUvSAy92NLhrrFTT3TZPrkba4CGW8Wk8fW9gd7qJuzbhfzqLKM4U",
  "key41": "3StX5ZHAJy1MMXJahxQFkJhemHVGyNoPhqHEr5XQjdvGRF8iP7WE2G4uPm7oZqAbn37Sa7yfe69vQxcAFiibJa4A",
  "key42": "2mhyoYV3kt5T3bHoFtZdydSKu24tLNxVQYYjPG4vj7KyT6KhNsxoK9KKsaJpMd18AhZG2WHZBdftSjZ53HUkG6pT"
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
