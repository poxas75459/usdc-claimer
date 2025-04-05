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
    "eRjh6zFvP86uWBJVv8tfyvVJJpuvesh3QDz94CJkgGWNXQ2WwsS2Ks71uF98d7aFDZzmV4x7xQHsztPYvAm4Kkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vrTnBkn6q2LD4yK8HAGBn6DYiu6xJQ645r8pkC9uRuybZaKU49FpXzrWoTNNj1MdNcrP52yRM1W5xk3SQVNugJK",
  "key1": "SnQ7Ma6ckFwkQnftwP8RJpihiRGXSppzBDhFqBTnPFaVaF7DRDH4AYNFggpf9oJeTGiQ95htKd57qZ5C7hESeH5",
  "key2": "LwjHzKP6AJ7fVN2AKt8ZrQhgpDhKGHBoQAUza5fStEtW7qx2pNAo5h9bqKmBSSWAPgk827AV2iQwirKZAL1SePr",
  "key3": "2y7dPV2Rjbp6FGjbc2LnieRoN7ADiTTK4RiecNEcHETNSSN4HWmNUjghS7W72vnGrjg8yPoSvMxA7ArbqxMvcCmi",
  "key4": "4u1DJrAUZGG2AY6AbqdpQaoVnFSFVQBHkKngkBdJZBwKpZd3eujgob4KDrHQrEvChZ1WGuZCEjv1xtfxHBMKW7UM",
  "key5": "2AxQAH3PFBuZPSSwNYXh47DSbKj1pHquKEWmyEwKTDEccNXFW8jtCbD2j6jDnaNjDhMLhSUqMz8jw7vZG7p9oVJi",
  "key6": "3zwrWpQ86DD4XPb3FXFa3eSv8gqNuvUBonEs6x4Y8vqycyWFqnUqt5ne3vPKr2wNiozFDhEj3pxM8ffG1uJjZEcV",
  "key7": "2XCS2zxaiGKcizizLD4hBVrHGMk5KpBAuiZHsUjZHXCFQWn7rvauFsESGTHUUVcELjvMpXzpLiNCQ7a9J3cAsLkw",
  "key8": "2PhwzngZx6BYKp4M7WyXrPp25XR9Wdh6xLRvu6ckLmrUBH1jSEuEB7Eh5HbNaNpxq5o3VRdGVg74dioTXoEC2oes",
  "key9": "5FJnnYWSpvqPpdZYHH8h4SdyEc4fvt5ZPEjfc1mZEYitJ8KNNqjvGTB8DgpxXUHj4f5JMexX6mFuF4gfLaqkxZQY",
  "key10": "4dMukGSwrwk7qpBMytVpx7dvakLCNG5hz7f8VZEqcAH8diaBipW4oq9ydboZTVpWgw1ZjwceNJXcVmywYvpYfqTq",
  "key11": "JrawEym7pPtxNFSQ5R6GKon33zneDGANan4RhttiGEvrtwWKKFkAGDq5iuBiS5EYCx9LgiHTkttsSwMJ4kKsZqz",
  "key12": "5byfn6mNtT87cSURPcwCSvJ4rwsAGeuj7VyMf3fnUmwbRpub2JKNBg6jHgt4m4DKH2WkwfRvJYvYmdGiX6fVAz43",
  "key13": "Ynia5zYMHKM2VMf5dfHoKbeN49QMKY83vZEcUh9gVURiC1u6zCpAMbZxYVxu7kaKw3jPYxMP4r8c4r2ppebYzWi",
  "key14": "3ib1rDZvQMy4zSWgQwZn9vGzQ86KA3ExHqpHJ6hk6Dvdw1Gkjk2EwS1ByE1RognwVucoLSghXLcZaWUhkLxCyoag",
  "key15": "3MgyhxDd9RgBjQjpiV5xiiE8XXTmJw5odrbCmCVVz3tLrE4uTbShiPwXU7W1ugxT59XPKTD3TwPmiPwjVnwzGpUx",
  "key16": "xf5xUNhgQiHg1nLDkjNzPQoznvKR6wt3GJZ3uC7V9wjJuvrJjqLT3kzQcrDxHHWcc2vFpNMn879wDU6TP2TzB8C",
  "key17": "HvrcR9votio51W7C81MjUyxt8suREAacsAgCxyYwninHQVRYFmFCTznMGcvVKRNLhX6ijawffjctSYYgy9zjrYm",
  "key18": "26CRfhCSL8oMiJs7MuexzN3dNZJCk57YoAu8w2HWWvUABgHDmXwYF95SHQartun51M5Pjqow13dDpYJfQ2zRRrhQ",
  "key19": "51hbQr6APUsqsZrAgJLVoBCRukidrS1Qo3AZvFNDjReV5nNiFb9AAdifuKxdfAwVk1mFT9Y3gpCsLHLgnnMpJgy4",
  "key20": "3ouAsQBNd4s4fzFoykArdiDQ9Mjdtg94ua6gZY7c5Gfrx1mndpDBgDf2Dz7t5HQCmEMPseDWuNRiPeoJZz1oRmMf",
  "key21": "2KFZ6Uk6tGeWpYyAc2rkdiWdh4czyp8GMde15rExyF7hZFTXRProwWDuRkbBRhdojtdMTv2QcDkNnqEQn8XfPPjJ",
  "key22": "4Bt8EEC6v2ngs26DMvLQNnSo4ddSRmKiZFkwSeh4XWDxuzJ87dYQanwfJhGhE5M9PJZRnJZvoQyDMdMHTC2iMFaM",
  "key23": "5CcJbM3XicVuNNByYCfywbDsAqe7sw7hFUuu5wedqk16WrSZHEYJpdSUv4FfMaFMKRRUMsBACESawsawRKiq5mhd",
  "key24": "3XeQMD1oTiwu6tkarVMSk664bwDwHmG1v15wsVK7YKgwWoPSM5WaK2YhbanXPDanDE4osqwKke46M3cnzJYr4HeW",
  "key25": "3JvNgwwnQeQvjmz9m8PuS6u8FRk1kynhxyrXdYV2mRDnpf1847tY6Z7KRv783niKxPrYZb1tCjNnvMZdic3jcWja",
  "key26": "2wdGy2hUtBoxaoAy6c1NEVD7Pyw4AB9qCm6NdnqnpLgem14f8xfUpT6LmVAbqoTbvGzagSJiLjevwucX5Uui2yZV",
  "key27": "3JiyCxpPNBvakYgQuSV8fJECjipTiLMJcfv4L7ZZ2g699XFGNjEker5tdd6S25PiXfUeXeaPp8riQ9wDhL8gGdXP",
  "key28": "4C5VXnskY6eaAzhQXagDoryx8AQFtMw3kSZ12bugEB9W51MP26wbHpBSXekAfJcozRktDgyZ5ykS9boRp25greVd",
  "key29": "43B8rV94hChoKXjVkJHi67NuSLHzBDdo82rxZdXxmH1VJgRJSDpCmYzKwKaDXjYp9B3TjPUeS4BrUsMBFxVsgfXf",
  "key30": "3zqUDnUG3V32YLc4bc8BT41L8R4cn45X89aeWbZtW5QuG5PEZ2fSxRdj597AFadehB46GWtFZsEUmZNkz4f4EGP9",
  "key31": "JRvs6oqCbet6jKQM5fEyqrWaN8u4pgtrC1r3QeZtyKZ2YbPD4QxjDLheMkargHRgRXC86Y3xEJ4mPTyBsNudv6F",
  "key32": "2PeTpLd5VWLAR7jNrzij44FDdbMnoM2yssqNb7U5aRjj46oiV8CckHoUqMPtc9Et8hWxpfL2RuvKy52Ha4SK2Wky",
  "key33": "3XM5GYf9pFE9dRjFDZCJYkUocmBaBZF6bsLq5HsyNZRzE7zyRBPULciqhJXaJRwpwhGVZ8xkUrEuNfJLwnAmNozi",
  "key34": "n9D1Lfn7jmEghRUPWcCHMRBpqQgWYhkfmrdfmiAkJRmKLk4yJvCj3TFo2LyxSB34bfuZV4FFJcSDFQPjkAcy6v2",
  "key35": "3snA6apRLAmKTTjKKhZcPmbFGSvhRFEr8tK3Hd24SymLp3bVG5t1MVq6He32BtJqQNxSVYvmanv2HcmNYq2F7XLr",
  "key36": "wKEUpswBBkcM3fMJ45c4adAdNHkz6sTnme52kMEPKZ4ua5vjQdGrSikfKjZQou3PoaqHsce58cRdGzEtbyEz62t",
  "key37": "4x8Upen2e3T2oiMuD6WFzuJcSVU2qPig4FqcLBE3XmMtHG4BaKDXQLtsaAksiMGJ7ScoRx6J4z7di1xsUf9AZcM9",
  "key38": "47ot2noErVZkoSfMCaFfuwwpTe5Y5Ru3ESxKuj32ZYfB4HCqiaLZ1FEQwTcWnuZs5c33uXJhnANsta1PyFPsP5AC"
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
