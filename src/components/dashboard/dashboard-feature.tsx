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
    "3R9UrWhJwM3T6ENjrkVtBkhQdTf6yb9UKpWpQnFtDyBdoatdWWD7bdJgojk2MMef44iFMmJh9tVup3ASsGg4fUMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gir8Q2TNx7qJmEoyCLiqzymide94BscrKuQfvLm15yQWuFVui9gYTVN6Q784uN1wZAYTotcF2Tpavqy722Gm8RN",
  "key1": "jP5FjQ3SqsvLdyZ88cTra3Rq2mh26J2SXLihrjy844xqWUyAkLDaYZqstC4QB2biBn51mTCFX3gX3J7hZqxqiHn",
  "key2": "4g4czdTNnymRnzwv2jxpXKaWMUAovxrtdwLDdvBKYfjXJXd1edjReGXNrQkjjhzYM23WGdACXo8CCdMqDnZ2qdxT",
  "key3": "5vKre6w6Rvq6ruQDPyeNBvmUJyJdmTxxUjJyDcjyG43uAsRMUPcjc2o6m9u8YaxQ4qAfy13Txk24zQT3wbz3rheD",
  "key4": "4p5eXEDs6uNX8GF9yjSsAQ9S4HmCNpws2TbW3LrSgcij9H856jBRhRioNGDu3ms74scHev5qMLckLCPkgU9vupR4",
  "key5": "vqFA5rvyqbds4Sy8JE3xYM9nsjKA7gsbmBuYPKfiEHKskP3uMc91TiSk6zzoPBQbijJhG5vYwk4Fn6NySHLf9EM",
  "key6": "JSjypbhVyouEDCFX1KnHrSghEohRW2pvVpYS9NjpGcKScFmdHewkzTnXEkTbRqsi7EEHZVyYmxRjM4LR9kE6KjW",
  "key7": "49bzUE7eQssxcQ4UbE1MKdFi2R4ZzA3FmA6ijPX95Gg9XtLHeo9Q4ntVf6tiaf1h92aKNwCeSNG7NMDSyrDRvc4x",
  "key8": "3YbiNgg98PsKTXTYageV7xxfayuE4vGU6HtYuy5bk2MYMe5AfZ9NixYq53GHZA9tMxSAibV5hvvFKF5esYVzstJb",
  "key9": "9tZapbkrQkFnbev2w5tHm8VVvDWe3XzqtCXfvdZWhJMPGi6UrvLxAE1PdcYxA5oTKKsYcE7Qr2Bn9nb4CgFWBP7",
  "key10": "5gi3hKyoGuatfcrhPddX8MnQjzJkPzEGrc4GjBaaEHfdjEUYfM54znsb8vm3L5W4hbqkAxjTqsDEZguw5Sni9Z3x",
  "key11": "5KYk5tp1g9dksHX7dMuHKU1DPhb3ch29A51sapTMFQ7mPDLXGYeYaUmyVn3iphmo1bku4BonA8qBvsenhfa3pwyi",
  "key12": "n9SFDoSgiAX5SG1hRkFcjg3s67A6ojyddVwMdxfZAu2BpY2K4m9QVzZgM8brAPsKhuo4BfEnjeRMsdQMBUSU1vJ",
  "key13": "2VQ21chZjt88cJNVeEBmBeymWPdHern1XYGFugvFKThnW6dMfLyUg2gvZ8KK6dEG9b7XFxiNotdbU5o6stSwdx5V",
  "key14": "45WVNUPbuGZ999Gmg2VUEnYKmaENWM7YuELDrQmEH7wJoAmwRm1H5cCLAen5BtmkvneJokaPXxyhoR3dRtJZiXUS",
  "key15": "MQMARre6pZEF6NAkTBkNvUW9Qa8mWc4Vw8MtHDTP7VVbXwXM54KeXjzFqWozTy6QRJxm23H3UH7jiRJWq3wU8XU",
  "key16": "2urctZ1FhuzKsxPEqdWwfzjTdqkUQmXesNmEfaMqm8JashtbQLS2n4zRt7fnnfsDrrAqrv93xt3iZEq4KACb22V7",
  "key17": "5fAqUukQBnt9ZjrpHfiYvnsPKk9FY9wH1v6MqeLfpQ1kpK9AK3wB8297ZG8scpP12caTJGiS99LJcRfSASMXTNn4",
  "key18": "5nkARVT4hpsTRGAJM38Vms4gQPSZBr6zbDGCkVYR2pAdEKcD5iqFRFPAuJytym5fY1qSFZpHz4xTYqqeDW54GAgv",
  "key19": "2LsRRyPpN66YatnQ5TrWMz7toUGp9FMKBoeUtWLLZBaoxTgC6G7M4CDT1Rf2QPNSDtKFBYEmsRev3GLWVWC9NhV4",
  "key20": "4UAzpBXUGDEihKxueUE1BoG1nvbvJzfz6H5r7MrKhGhT7ud3qZFJDHpLy3g3tsZDqfEuE8yWxZmdKYZF5hiv9HnL",
  "key21": "58Z7dpv4JWsA9ekngE7qd6pPdF6drquP62CZgCmUoFi5xu3BTGYZt1Y61YQ1FwCH1hr1JoJ1FSF5CJg1TSUQ34Yv",
  "key22": "44wHx1ZExEei6dNpmJukBKM8xjU93AJoX7M7fDfLb8YpTqUR9Utr2zdjP7poss7VmEZDfBZwLqBErnJfmfDFrzCL",
  "key23": "ozjsAnPN7HUnvPY1tayvBqGvEtMP4CDtok9DT6rdS43QAWwLdWkHjGznK6bL4fuHYbGeBvN2fz15x5Rffii7dQh",
  "key24": "4JjWU3AuZUec5GWcBHqSqXWLpzZQx7CJ8JsjJgvm4H42MfU28dLrX44kFPC4YGDYVwifAAfLpBiDh8fAUDMLWYof",
  "key25": "wqAeaD4Ww3D8F7YKBwq5dc1SSy1rTVzjYCBwihFrz8se3HxmuiQ2TLQcXtZxuoXeuk24EBbqHMz2LVHfyBGAHme",
  "key26": "q7ignCE93ywUrGA3VBbzzFVbAtsvfen5o6qWjBsncFysAjYtvdHUdMmQtucbZ3hmS86tqtyRCULPDbmFHAarcc5",
  "key27": "4Hu99o2tSWCT5yH5D5WELqoUVLh9EdZspF9hMg13B4PBFGjWsxFQETm5iv7sAu5Lh5ZB6Tr2c3mns2dToLdFb2BU",
  "key28": "HeY3bLP9k6mTVw5sydXifkecWNz8FpQHNYc7qZUHjBmrL4xEMNwKDJ7dpr9J2wY16K8TSzY5gnZGMK7crM1Jhp5",
  "key29": "5H8g4HYdQXftwsaAPGg48qsYJFbhaziBSku1bWFk76iSW84Moi6zicQsBCrHbe3dT87mxhYDc6AJH8PpHnD76sfj",
  "key30": "4MpjyZEDWRvWC6TDxEVKeVyZV7X73hpGbTLCXEVkKTYbWN9gsaLNj4K8XmgTTZQ7xC8uSfW57CeCVQB6qeAkxQVu",
  "key31": "2tvyPRTZyyTPqLKPxDKQL5kB88HhNYqP9B9mTgnKtwJd6h9uYtBWLHMt5US3MkUpBzJJm7jneYoEnNBoDPEYsECB",
  "key32": "5jMbLGxXFmL7q4hqTd6uSe2tRrCiL4qoYZt6rDoRN2CB7LZo4VSzaUhJ1vUhpApDW9PiidrnwcLe7CshbLJU7Uge",
  "key33": "2nuoKmfRJipUdWC4Ppfwof16rRMmeF1UUHo5U8mep7JDpVDmVjMhKBsvQ9i5Emmw5xEsEGyFenzW73qiPGUjVvyy",
  "key34": "38yf3qdmcNjxmUq9uaanPZDyijgfvCtD8PNaidZgMhZt2jMgyDu9v5VFisR2bz55KmMDrPf64UEUx2J8niXkdZsP",
  "key35": "3wLNTDkUnWJ8gY6Fm8i8Z1DThc13srSQpLhGRF4tvxUhNAmnovN8pDEbTEebP799xHGppAn77dmwyi93UWtjRFZQ",
  "key36": "4a9PzhiQ9crBLKXSacXsPHSEYqRcfmTJasZMYyv9NiTFSxKtAadBuMKjCznyErQfFCfFZ3pHQh3doSZMdu4vtkrD",
  "key37": "3CG3cqH8Bbd4ARmtMXqgTsMEkkeDjs9MXoE459edatCPMjgU2ZRh342UVCpV7bJ2RHm2oNwz5eDamFidwfVsxg8D",
  "key38": "65SrZ1JLeSdSS6RJZ2Zv3jxTR423xe6qeegd9Ya1UsqjzbDVKCJLx5edot7WWK9N2G5B9sCyqLpafZcM87riWiy7",
  "key39": "64mKGGTk7wMKPdUqbVMxSyAoFTwdxdXagncjUrfdiC6JTsRpWq2CGZMHcXGMAvQDz7gLTozcyGpWPGHGL28qSVQc",
  "key40": "JwdUbroaPUvpEur76ez2sMb8fDjQUhTgPPWZ6mzD6MN21rKo7xS5YqnSNF7Rh6R5VbRCScjnP8YXvBMSCEJAfCB",
  "key41": "2b5FPy4F6NXe1Nnc2VY2AEcrmZhZrpkBPiqa228vKBaFRXdbngXmxW2hv2ZFTuGAkpAYvcLJY1qCDZtoQkBxLVmS",
  "key42": "46nCqWro4umqWvmnQvgFesEF6DhYyxCQrMgL1f5XonnxgfeW4bb2GC6Sd2UEJ2tobL5aYeL7NBxPiZHUsDrCVn54",
  "key43": "3TiawhxHkRco51mGHZk3cBhNR58d9JgahEk6WTD4CTmc2KFm2wz4dMnpJVSWXnaydGmk5TjS7wvCapWe21ua3rki",
  "key44": "15iCsozgGJBnBFDxKNHG7SPt7jUfZj4fLxUQunm9axmRUi1WekHRkJA4rjbLAeaAeF3roDPn1c9KFKR56E4M2fW",
  "key45": "NWJiVqjDXhxMcvm5VsH6DW27ym2hB9Xrb5GxvugBp11BX34EdGPsDJJeRZDBTEvGKU1p4p1VrktHfNAqErJKWz3"
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
