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
    "2R2TegU6NAVZA5WDU6PYyjNeRJo4cNmzExfSD3YxXmpLNRq1AGBbhsUDfPe5YZG1htQRMsNucFWAGgEZdzWSq9Tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iEkkn7rMAt43tfCmg541Fe1zNWvXUwmMDcxLuf9PSiz4ufTLLzjbuqmtsoRbxYwSuBcNB9uFnxHequDLJ2ikRCY",
  "key1": "53iVfRHMR93YouVBAF4vnmrdupmZn5mcqPk4hgh4a8GocefxxXZ5R1NLwgrPXKvgD2MPGJmFasZ2oXLyDtc1T12y",
  "key2": "5ELHgqn43tEgq2VFsmC5uyRMTXUTbjF2vgkbFtqnr7oipzJ2aXKDTbFaPpbV2aHmegNhVV1fqWvQafXhvkSbYQM3",
  "key3": "4vukVD5NxkQV1YEC67YqDGugttM9Nkug1TPGr9asHZQzpXo2gMBxhhi2AdogTS1dHD9kE8ZzQoN9fookqjRvxNmt",
  "key4": "29vHjWRfvkgGYqXiaTcTVuXqRaGmzeuCRkagPyFvkmeiwDfNGQLYJMwBdT3xU4fipceHjfvpwCHq3wSp71mvC3U6",
  "key5": "4sSyLaEFAg7gwPTFqJEnZnpLs5E24L6WascJ5FLmHZmxm6KeUA6qYKSdxW93rjVH8L9vW7zT3ckoMKGRVMtci7sH",
  "key6": "ZaayKR1SVVJehWBbdHzCCYqvLVuxEiXLj1Au5Nw6ZfpcQXF3xr1GEuyhnYhBPttSteovFKgKeryL8xS5Q1vWHra",
  "key7": "1skstwNQ3QmThyUDAUfbV3bK8t72PnicWPn5SHxMv68VfDjT2tFYDmHB9TnDKLUGn2SoRgrFWixkxqLWD1UTsEj",
  "key8": "4UZJ28qFGozeWdUxEwC9fbuy9p9H2K4wd3VHzPVnEQHBtPUAGcjjhfRV3qJdNwR8vtw6to795CoxnCc5VKKiFprF",
  "key9": "2cMpCPA5emyPZU6CUDXCyLQidQ3hRhd8tD9z1HHVnHoGcbPchDuzAAuUU1dZCdSjCq8vuSdD5QyBVAGLxBndqrJi",
  "key10": "5p57hm2PmsxFMi5ED8narnQu2sQ3QCZ6rYbCuutCFpaGDnnto4wnnT4vXZbHSFJnZMqrrLA16BgyBAX7vxYTc9YW",
  "key11": "4dCgWTCTgcGSiQTe3dTjXy6uunzGjNSbQ7LiE7JRdXLwVT8dHLbKEuiytU1X7JHFrPiptwkRaSbXGcqAR9mbKqXj",
  "key12": "3yj45PVotXYvN3tz1eWpwWgXxRVbkqwJ9tBVr2XNoLBmmMhpA6dZ1cqoTbqHore5BoCzBFyKd9kV6Rr7wYBzFd18",
  "key13": "4kdqhssAEi41apcZayLrPinXiyEL5p2fzReEfPUbdpoNXgZR3vHZLKUuohpdRsFzP34f1KswvGpAF7o3Rff7DCLC",
  "key14": "4ZRmw4ZPiGJYuUCDVUeFY3LVVwGiSMvj6jyF9bktf73iPa8JsTCdbmYJVjyGdaFYo3boAkU9fRQ5zLEob2893Vg9",
  "key15": "2XgiSGR4YbpTT2QNNigKW9BLdML1azrgRTBdyZ6bGxcuZ8ZEYwC45gEc3hRxvbchVRDfiGyvCuRyZZnHVr5iMH96",
  "key16": "9FjTYedJMFZLCoQDBCRoSmXuLpaxvGP518uELMj9jUH38dpVVyY42RaiRzFG4nx7s1ZerVz2NCrzc9Nbv4eXpc3",
  "key17": "45bZwmzNqC6JXT1uZRhUfoUoa1unCbX9zgUd4E3yYoJjS3JmUT67qFW6D79S2G1gAqcc1eatwDUREYXoX5Wn9KmB",
  "key18": "34CrEjgYpPt1SAZwoMk24L1mxn7FsaePpn7peBxTwWsJejbKJ4FaDUJVVgBWdNE6zazsWUdeoPQHTDpgnd9LX6Lb",
  "key19": "4aNS3LEAHruSSAsEAmVVmzx1fRzsWZKc7B85VWr1gguAmE55F1aySvsN2NeggNDiHMu2hr91pz5fQMjKFGRD4oEA",
  "key20": "447oFDtZ12vWiX91Vtre74JV198eGtEPd5cD5W7XnfNjCJyTgtcWFRhSvq76qGTLS9oBUKg7SsJaQmjobjdinJr1",
  "key21": "5sGHMv8Jib2hc3SnECbfs5HBtVgmwLw7QxjVWYAJvoJvy3YPXX5DuMpHFZH8XUfyCiCXnSSUaucEK8TZ29oCmV1Q",
  "key22": "GSyS7eodCBGbqFa6UC8hdh38mo2rK5FRhrQDomFfXERtjctZ3R21Gf7BcjFxPGtrtsVZ4aoKPCRUgq38tv34tig",
  "key23": "5EbGYMuHf89f3AdWoL9MqWGn14YcfZCjAGD3RUE3484eZLsQz7BLnhqvPqSPuYW7Duj8uDD22ULEkHKubvUAaHL3",
  "key24": "3tRoB7bVjcd7vs8WjdhCqUbumyuXdgCdpg3F5e47BmbccSwmvz3WK8LCaNxZpRtPZ2HZ947LJQ1pXwHcLnHBA6X9",
  "key25": "5sivPrrg2Ag2WhJLzKfT3WpV9D4fgY8RHRfboAHvYxsVwnnSEfiC7eWTiN6dF1C8QgAHFwf5nYLMRPU6g7BWrZGE",
  "key26": "eXYuKpjLmk1y2xEUkNZL4JAmNb5thZe34y32Pzwm49LXFSHa3v37QcWwaH9CHY7PFBhXm4WcUS1QUGVKtc38aaq",
  "key27": "V5G21VmeNLaKc5aKgnMBkBr6RuH9TGrGezzGvhFUBWzpzCfkHXcMxuNLGXZJHiK1sfPW4uW9jzoNHnYubrcVGxE",
  "key28": "54tc8pPsPNzGCaWAuJZjxZy6T5qe4mEANA3JbdXyaGCvEVxrFFmywD1afJnRxZxbVentZsHuzX9rqZfghYjdWz8k",
  "key29": "5UP6gFkc54EjRPct4QEHiWAfnLfvocyQHDTpo3XuRy21JcbmnQV6hihyfMjJYc43fra2SssmB26PZSdcRitghPif",
  "key30": "XYubzDShNDFRjhsxekPHN1soszSXPKXGABLjaP6DFV8myVoCvBorwnYtmu5G669WDyLez28dCuNmoXuF4o17dA8",
  "key31": "9fof1zJ67kFkvogzgi728APFei8nVbyaq8N8MRBEaWHYdW5dLE4FMm1nEPKsLX1aUe4NUywRp7vZFEfVfqxL2gr",
  "key32": "32FvbJzgzFyaPneaQrCLTLsGDK161JRJdJT7DXMtiemYtJADDMPM57xRhNZkiE9bvtdJCGHX71GnAZnznRvi4nS4",
  "key33": "5veunjyh7PXE9T4u7kahqAaXYLJv1ndSjEpXNBXjtLjvKbitwWp5e73Du3GD976ahKuWSG2T1ojSgKoGRgM9vmH7",
  "key34": "nzHpkTJ19fCccPz4scBY9nwsbjjxywLe48ZQT1Q5BHKCNTLt3CAPnWkCAtx1FkqpwruCLd9dH3YJegYLD273LZm",
  "key35": "gGvYN5C964T7s99TH2BzdSJ7sAQ3JPCHidM9EPq33aCQfi5uUjZo2YgPYhTj2kffh5HUNHx6dfH6ftfeVNPcvLT",
  "key36": "53Hju36E5KqQs7aPoW7Mt6zXxUJoT9iYkh2n6qqSDbwcMVPeJsfij9mpCEVmsRv9KSTiP19edQoCfwGPucUUnQuW",
  "key37": "vhfR3tJQw66cxLq7g6W5e2iSojJ5XmBzgxwAoNSiwz6uDGptxjxG9psbRaZRiQU7CPx5eXkgtsadYUes5bo3FT3",
  "key38": "Z7Hude1H8AEY5NpEBCR4PnvGsfdTekdR8WwauR1oMnLKwsU4GdtaMstfgkPKFFaqnVG86NYf5FeLcUsq4npURSD",
  "key39": "26oGYUgHRkXCLrjCboZWqnnAJFXGwnVLSsNpWzRGt75oJ8GugrVmDscWas2gLQz5Wb4E1hWMrbH6hzMt5xudg1ff",
  "key40": "5bY93N4EKvQubv9CFK3q2M77sJfsfFCpGFepWHmo27zDCScykP6GkD35gG9d5v1rqvp35vndeSzHNTzFB9WuUmYb",
  "key41": "K4A2SsQCnY3aKsGrbkb2vaybRJmVsiGpMxtEb51eTsPuzXBMgPUgkuTKd1CuX1iYoxSnDyMQhVMdgzyUtyHhaH8",
  "key42": "6ca6hUSjjWLfjCSR1sqLpyMHdJjzANjHwVRCS4qom7ExQ1E7jd3jM8bpFAQpJWcYkuvRvnknEaP7QekrxiqSLia",
  "key43": "4Q75Nd1T81VL5FuyiYLEDVhMFuaALUqmGuPWLFrSVio6XVA9FN4sbwwxstK4C2f2vSstk8xBsJP6Bd83v1aDwV3j",
  "key44": "92oV27ciDUttUe8EgJ4HoCyHmeuubKo7qQ6qB7zQ14UdrK5Sijgf5snCwKDs5gSqPfeKj8nr43zNJ98rteAysLZ",
  "key45": "4gifVjHZQQtXwX1hxPgqXyGjsAny2mbs2hWX1J86Nvq3xMfaDTTBFhAMcFCEq8Vgug5j5rgQhtM6hkqVqTacxw7n",
  "key46": "2YeqXKiqA5czT2mny9Sq4DAgyzdrrhY9mWyFnmHi2gNmfJSJrZFQwb8xdgXfV8m8PeVWGe22EZ34FjsomDAFfe8u",
  "key47": "2GLHx15e1FEQ1CSiirDeNbz15XCYtW4tLcbUp74uFDJzBpxzRAXi5vQM9joPhyMe5iuRfGGRHarKMt5pt1Z85cgb",
  "key48": "4r8UJngKbo2Sg4JWsRmc2gbeCB4GtZdV7sfRSUqRju4DFdRr3f5JfC76dz4sRn8rE84zaxjhcsKR2P4qWPbR3gTs"
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
