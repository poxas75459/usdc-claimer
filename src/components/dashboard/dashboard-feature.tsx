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
    "4UJ9n5yK7cn5ZK2iKqsmzwcRs8cQFYfzNw62xWwRHWPpyuma5NuvqWPTyXgFaYQJ8yHC5QLseFeSqZBvXQFJ4fFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jBdhGZER6uFpZhdjRgYMtVUQCxupRNLLFCoahnqsg7PGAvq5ZE8T4qogYVHhbmingEPdNcH1eSM4EY4tYS8TEUr",
  "key1": "4yaCJsqY6fu3o6EDMqxKKmRYJWvd2hVir3Bd6DF9QVpyTxxMGMuy8tbbhnLCBeN7ezkKH8nDN5nMqpXyYDQvRrNG",
  "key2": "QWxrViaHRWQnjuSLQ8tKhagk4V2kDZEHeHfvNnDG5AP2aTfQZfSWNBn3cLTjmycvPPoyBaUGR1iCKYynxEm5z97",
  "key3": "NKhD7GfwypEGEatVSEC7FKqzeesGtNiX2dpPgFKFvxj9RdvQgJLVPB2SotDhp17RkRF9aGHz3cHFemLjkG1hU6A",
  "key4": "4KSf9VK9gi8FgzQujPkm5aw1fpqjsvPrbit6cm8gmysKnpJGzXmBaEEzcofjCZuwnjUMpXn3ToxveKuGftrg5d2T",
  "key5": "yUezx1NcSSVyHCxHFhDdXzT3wHgNrJnke5PSqQ95cqJcgg32zEFZEg5cvoqAMzoPVY18BxijHwHdhrmyDJS8wPG",
  "key6": "2cE7L4KQx7cCS3kqpR7vuhEqw3K3rEgwgmNgrGuLSpuGpGvpLoYopZMrqY2E6i8CV1aMHrZ92kxnbZEBK5Bc9VZw",
  "key7": "Mpu9EsJUdCTesxVEfLmjvM96LbaNnfhtW9ZcYPSoCJxXoUPvt3JgYwmLVrWaB4VEpRLo1uJon1mh6CRu9uWTgqY",
  "key8": "5X1Bxd7Vxrz95xoPtc7us7UTUmdFm5KngT2pKAySjWwY1QgfHaTTqNtWHAMjyDzk2skCQYH8GLgxETRqChZUFhhV",
  "key9": "2ywXYJdEjHZsuj9Wxd3tqWjgoycSyRoKDyd8XXpdUc7piQXAv6sJXA5wQfsby9yE9o3AWhbgXSGHnzCeroYRtEkp",
  "key10": "5zQEMBKY1zL8GvDn5qvHfAUDprxt4xn2C4ybtF9VnjYQCeEGmneqJchtu1pMx1VtRiTaC3fvt1iqZAN1jxcHQmDV",
  "key11": "4nQekYaAT2URmZAs47eLyrmWYfcFEDZ47nYWSLALvr4qJUBt5PTZmMEemR1hXdEhTeNEGcfCW3Zd74cNZRkzvjca",
  "key12": "hwupoRYWFUWx9mwdpvhyZ4JNpxpB9SaMnSWAPD3gKBSfPh95fhjtaL7up12KMQDsT1XYt28148widxBSfQnMX3o",
  "key13": "643NSVogVhPcddrienw6sXzGsF1vVhsHmcF6XRSsLVsvJSJWLkHrEEmNk6zHr8z7rsKbWhASViPtsPHEuyphEdBA",
  "key14": "ZcroHhh2TLMWrBWxZ9HhPMmKJ1yA9xBoPuxzjWGFwmmhpWfKVZpkRx6VhvDuUbt1aAbCnjLxy9aL95fanh8mTmb",
  "key15": "JUr91QzF8hDqJx7rq2gCgAALGCM1NitnZqxhsBidi4ATpntFKCNsrNx6VgXzomYSgbQM5rF9mRLthea7GLMTKbC",
  "key16": "vkZnuDu6n56rHrHqXV8exmZFv8P6pgzyBtTSyfHmiRja1iFFWPVKeKeCfTLgPMzw2et9PdEx8uFdwyWtuspYZ5U",
  "key17": "triqupXBi8YyCh3XJSefGegGRgP2HReLTJqAMsW49h9kQ6LMDC7D59gGsXESfTs5aPKckY9c2KVduiir6KRBN6K",
  "key18": "2w55Xjg2nxyQaTDaSBNxiLtGxGzVwUJWhabcBiqRYfpAGHj14pLkPQaPVkcjvF9nHUEn9j8B8Z4HoAJHkNxzXyWu",
  "key19": "5nJpBuhLi1ZpWvU642jEvkSjWHdJoPFLdruxh1ysGRu8BtSWgURgzcxzin4eeYc8ZsxM64HKpuYHhxS2yuEyibmu",
  "key20": "3LtAAbkaVomeXVR8FAHRDpjf9n8jeEKXB59VMhNChmtA8DX8oiNXEaHZi9uGk3BbsZQVqMryxSekxLLTD7ApT5f7",
  "key21": "3TavC6LPiYvj9HWbr2JmGA1ChGtudGQhHNqtBVheJiaAb1q83TTvvqhv4SE8w1sbexBiy3xhrhaNytmWMXpSSQuW",
  "key22": "5pcxbtYHoaiXBrMcvp9eTjrfJyGnZgWBSdSeCQmEJXnBatYoUTxzFcZXshsY7tB5pgBhkK9oe28YHk49ij6AWpRr",
  "key23": "4VysjyH7cwbDhbK3ZVmi2uUKGvM9B7ZbMnF5TRHViXg3QNWbfiP9xDXZWu7SFcMefDNHhceUd8g4rRSbDngAjXov",
  "key24": "2JPLEYdkXbacJexoPpkLE9p7o92ikmEkK3FNwY3YjSiZuNYCSa16UvqaBbUjcqsZtn1rVKdRsdMrbaLYisXixhjX",
  "key25": "63yQ9h8HyXg6c74nhYg7oCjQHj1GrDfNtSWm5ZmL7yukVmRyjE9USyi7Z5LHpVyMxFEYEtHA6e2MM6RatTAoF2cz",
  "key26": "3H9gMfLGUcnsDh23quteHbLnvy7m569XYhpdwziqMbZgVcNAgeqP84cTqTJcMyBfyMjxewpNujVU9chm1wSnGEHf",
  "key27": "2EV1HBZE4r1JqUpmJtopfEKDewcrioiDx5Xhr36peMbUWnKUZRHHCNNpzzHVo5b5boxdY7EnPLqgwwbDo8UqavL6",
  "key28": "VchDgmGBj6bt77C1LVKqyRKAYcdPAESnTiNGDvVoQLqbXM7n64aAqF6gSdHdRKFu1KH1syJi3KMD82KLQfhyETW",
  "key29": "4gTNfNxSyZPKLAeaHLuHdXHDxqLeHaErJGq2SNFAvi8dGHxSrrRb1XQbXPr6q6UehiwwUEuNmSy1cyh15RHyZAR5",
  "key30": "4fyMGRyik5pfGtxNCDmscZvsMcCfEyYMFyvstXdsv9PRJTK4TW66UUduLsTA186Scy2ASacwheMDgsQNXhZj8VNn",
  "key31": "3DW9Fk5kWdLhi1CnscbqeA4CfxT2cus6Y1b7VPfzSna9qtVPXatvT82pfirvRNux7fbutu2CFo8hivXXen84qwSC",
  "key32": "2Eds86NbJQ6ETKr6HWopVNXGZpfi293Ngt3PnGzV2BYcEfmaZcNrwmBAtnNMCKtMDHgu4rZkjGCDYBWLESB4uaTQ",
  "key33": "5TQrQZEPvR5QrNsuiXg4dGvAm9rs3hd8Qy6k1yu6yQLHuBdKgFGYrbmRthhW1L6VbRSARnN8rDhG5yB9zoYRfgPo",
  "key34": "3Tjd9xgEcghDJHSNAFp3w426H5rJpVF1Qm8VMgVBs7qrh6nxi7Vj1fRngB1US6qqdw7LSCWU6mA8Q5s3sqQWsLN9",
  "key35": "45nCsZ84ZXNbKW3HVyQNkY56VeozjFitXoDKzoftfpV2ukhE4GXxWfTw8r9DqxaCjbeRRWYgFnTaubTHDVdDXUoy",
  "key36": "4Hu4cfA8yHfD1ZpLPjHESPa6RpFRqGN83bvKAbGE2gjWsA54cuxGNLkE1TnfyDfAd32nfYUR5YivD6SA1C49PkyY"
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
