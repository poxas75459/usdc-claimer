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
    "2XX4T8Z4TxCTMh1sWQbKPk6dF82tbskxpj5aDtvtVeHLaPsPn5B5ajHwXwKaEBNisGyVyMP6r3mttwL9hZ2ycd2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RNJ4cV2MCrwPtSyjHhThAzCRyB5VpcdpKnWHEvyf9tTPzjqohJGUwYijDurWa2pVQWzfDKGrRr12DkjtQ4sxE7D",
  "key1": "dXFWnzTvJnVm8Da3BPVNxHLgTKNLMfmK4jvwsobTW2czXbjHUB8GTHJ38dvsv6buCg8JY2DS5guysvsFEMCjXLb",
  "key2": "347V3tZegBPYQVQ5McfHtUDCg3by4V2vEwWFaRta1vn2WPdpP44edR6sj4PGKRBjkji18XeuQYLf7A8cgfPBPj6H",
  "key3": "8stsN8Vi6DbxfaHYiVRZHdTzQkfAa9kWqKVMoawWiLvGKpaBzLJyHpDwser214LeWNoXDp1LPbCyQSbktGVPqwi",
  "key4": "52k24YaGTfNU6GhHkdpQaadjqE4KMvi4SET8K37gyAt9q7zn2aq3ktGPa2HnxhyinLC2f7hK7jkCoV1kD2AS8Rx4",
  "key5": "4WLWXUgBTAqzAwavDb1E84bCUXpx4aLmpfJxfzNv62Hgq82cupa4ZVK4XheUyqKhDeEA7NXS3ax1DhnJWCpptAWi",
  "key6": "4ztpPjC1trNu3ZRRBkoLfiUz1fWSf1JWVWq59ZiM363QZo4aKhchuPmdcdcJM178ARdbv1jG8p84t7L7EPV6xuvZ",
  "key7": "5qiYJnHniExoXUovSmcLQJLxGwXKbdUELCM1CAnWbncpjN4cTqTH8v7WxjwAKuvjCmYNn3uoT7Md3e4Y8mBGusx4",
  "key8": "4dLE6Cus6JHbLfypKvhV4mmDkVSEXrPTXd3rEmVvQH4vQZCRVKQXyVhTCmShNe8DqqwGBGoRTrxjMxivXPY9gPok",
  "key9": "3i749WgSYGkjRvj6zxBRTuoNE23HvgKe4J58uw5fZG8LEQDSLg9sWppvyTMKUZJ7qRUBapQkrsQbXRu54HfuLVay",
  "key10": "2zcdK62n32wT2anFt9HG7d4UKX87aViKkLAEe6X5MXj7PMk8jNqyESW6dyHCjRXBnHQfe9MJCeoRpWxyunuyir8u",
  "key11": "y66WyQSdHy5PBCNnnzRffqN9CfgFDHbgF6md3ggLN7ah7QNGN2f7vsuUbDVKj4r7PqyBzcHahUwBk9khewCe5hu",
  "key12": "3LXv8Ktw7jovQL95kTJYuVxS6tLS9C6VTqvq8R1jYbBdVDwux6SmL9JSAKrp7HU4P5ELsUigPrXmTaZPc6Rd91vX",
  "key13": "59ekuk5eJCBDyRmicUQNkDAvEAg8nebfQwJKu186ZJECzVkznCb427iP5xT6BrpVW6ZtxqDCYwUpu7z3V5AkwYHF",
  "key14": "5iGKfnxH4h7n1mYZbtTAK1oRMJWgidL5jSFUCxkNxhExMQRgWP8nb2qWtXsHwnyJtmkFn5LWYQVU1idXrPMcZhqq",
  "key15": "4959owDTpixRKsgNzsJb3R6aLqL3zpHcVhuoTVzoUSdnyCjZF6xT2r9kq5G9ZuW1kVeA7C2gjFKoATrwgUyZ9yeN",
  "key16": "46nnQoeKbTDcRwGzLUfjhnZ38R6w4L53sBpUrFooFJ9sKtFfxsfTyP7G6ovoHRuNadpWprW1wdLndFvKY54U6BbF",
  "key17": "3sRRKTyJJ68t27m36bcRTmn5mCPBdKRKiJHJeB8KZUXPro8jT5CkHsTXTby2rLEcEiVQK42gSn5P358FxuTDHYRm",
  "key18": "2HpXi4yU7iGTmBQkeQtCvKVXwpAKb7u486QzxtvU5xNSo65pdoosuAgj82pLdFeQbn6BbbQa5AMNaMr2GqFPkNw6",
  "key19": "615tdWDRtb39NkkWQLcfbFpe1zzkzBSZUjo9RLmvg2GcuHRB2PTUDH12uTfqScDmapDQezW2eHS11GkQeEgnaSwS",
  "key20": "3gJDfekktbiihRq6oo9rQmu3jKNJno1j8JD4xS2ULYL4KYTU87o64Fm4f5yJB4Y1AHV57hCABPw313DMF5vfxv5i",
  "key21": "2V9P1hox7L7SVqwD4drmarJVtkw5yF5WBq6oUcBFKghZFP6QBUU4tBWNfAExccYuQBLXZKf2RutdH6BuodfxMK2M",
  "key22": "4ev4NEq5enjUH7EMFk4TUbSNNrecmHQSkQLA3cSnhzzHkvhs7goxUAjETVMibbFtitH8yRYBKTQME4K5kTuUKHzT",
  "key23": "Wvoxnvc6F1qhmNd1WgTGjy7rA1RMJxXPzTw46txcYr1nr2h2RPX7MmwB3REyiTxLLBUXHLRpTiJJRyMhXrVw5eS",
  "key24": "4wr3W1LTZDWK1XET4TtTeEjPwVtTY63XRycRuzpoZHE6aPr8Q5wo7GY9tA2KMpUk1UTPyM9SCzKPRSVhEjyUbJf2",
  "key25": "w8VJRsNkXKRNCCYAyp89sfrt5sPcEDs2jNWVLWSGkHFa7Y6wsE1whphFGdzHhoUBm27oc7XJXzvegyMrec4bdn7",
  "key26": "4ETVvPauQqcuNVLu3DPUFjzWWNiCZvD8GT1sUN5KCJ7WSccmjEtReMTVJspCQyXPoB6yzuepHkN19eFoSUDYxAHD",
  "key27": "7aacXc9RzaV1goHDDWUV3gaR4qQ96CDqTnCtzCeyWG8YzhzwPcwaqv4fhdZfW2yN6jvtRVGNrSdtQiZiPWUdaEw",
  "key28": "2JvUDtzQuUC1bEetN2gW8TPtA34kQQcLTZUMmvbiinVkz5CH9AG65uHbf4LmyTHusCqG5bByF8bjWcVFrvEcEXCe",
  "key29": "3dYehZBp8h281bVzsVCF2yMVrtUmGffXwcLJ9EHeQozj3GPFk3CMqBt8JqCj849wBqziH1Lwm55z8we1DguLmkpG",
  "key30": "5vvPFXGoNE8uTnRt2Rwcs68SmTHwEPZMGrmt7gXARzV3xSqRxwP1j9PhBWqW4z8XPCZrJ8NN9PD5yuhbmFQqtvkv",
  "key31": "3jLL1FCqS3jScT1YKaRVhQSBKCE12yrpgrMkoaZg5fVdaT9DyFcAhS26uGjqAxiUYvw8qY7YvfsVEnNm6FjZqv63",
  "key32": "Y2KNMpngab16haNJducuV1GXiQ2xKH7uCcaF4GEp1ihRuXpPNuNzXUn3r5sn2R3KTbDxMx8NaHbCiZB2vjy6wZQ",
  "key33": "5hxLaFxeTddBpzQkwpRMUP5cWyUJSSVjuoxMaSnyGCkJHrkqia3TPb76i5zscqUdz8RKQ84NZ2wCohkfnmAXYyc5",
  "key34": "JsrZKzWktHe2KLbMvfj4ojkykxSrYg7jaXpgmq5e1BAR2gwA8zhsy3czJeL6VqdVkVwtaagRzdP9WeebnDrobE6",
  "key35": "3v2rMgBrTrJ4Rd3yrkAQAENi6cKVtXkYGM1jtAE2r5PnqszTJ3Bh5uu6kW4mhbsfz9fidi89bXjTTVhdFLXyFYJk",
  "key36": "3JbpJkkqnSvbQtnisdiLPid3mJhvX72GcrgDfYGYiJTdtQAxreN5PQ2CpivVgsLpadcc9BE7MkohkcERv72JYfX8",
  "key37": "5hiXbeCda1exJ1p4nuZLcfy7nkRkD6LUFJcQbR8DLsxtoQr6NLCQgiFbmF1HVM7g6qRmgXVtEXVqTNAb3zwWSvb",
  "key38": "5oijaqphxCg5xFc9dsrVS4iecVBPUVDmmoT65GgNi1gd5N3rv3MrzUFgF5S1PzAHqwQ1u4ipq7pJ4nJuXqcYGYnH",
  "key39": "wHtkJyMF53PGD6AuA7eQZq5JdcnZxQFqAGonbGzHVp3Ko84hyqgDvrp9dDtwf2q21q6GayeoatWTDxtouqwTf2x",
  "key40": "4EAtwwpQrv9os2sbWWYkxKQGfYAmbffYrrEUCyQru4NNTH1BFAV8MexC2HAnQhtUJE6vGo6vTaTuuChNRh8BjxcG",
  "key41": "iRLA9aoPGGb8ffBuFa4r74LVRjJDFkF6HEH89rQo28X915tmrqKjpXiLjFYmuuDZQ7LUUYxZsJScShduyBYzhZ6",
  "key42": "2i2ZGj9VUtpDmSoQRfyVaooRY3GA988CsNfhtCh2PUYuqdMgdTM2zD3WwcZUADWLE7hjws7T8HDjwM48ozSohggZ",
  "key43": "5g5ZcMEjdrv2Dw38hKVK1WvoRMTLkNV8MNiiDBREVBQRxaUkMW4eV6vGNWwWthk71kJcw7Yo44tYqrPcQevN3CGQ",
  "key44": "3DAmhnsGTh3E8bi2kEm9mibhW232UM3UmBAGuamPQcNgLhnGuRKfSNNihZaHECWazNvc2eZxEf1CnSkiDDcwqgZJ",
  "key45": "4HtZagJb4xJ3roffhake3ZmzKMGXEYXpWM8vi7SJ67QcALtQM1bsHhU4HFAwRx6hLqBAxY5JdJckPy2ihHRtku4k",
  "key46": "2frBngpk14Smgz5N5KgAQbVx6HMR4ZVu1mS3MfLKuR7dWgKJdVmy87n2bAMNNBdJ9c3Pxk9deKSk2Naj3Gh25Xuh"
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
