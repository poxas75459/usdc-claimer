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
    "2FzitxCMxwyUEV5XLatrVkkQaL9S1di3xQM9DzcK6LyzGQhnYLDJiYG7U9pJczy3eb8YEoRtN2UDTVBvAdxjbHwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67UiZpke7vBhkQ9F2TgrBFBGZLVFugotXXkG1bbar22Y9ihEcbVc1ZbJx8DV8GW8fxBaRcy6dUngYskCc6PLyLgc",
  "key1": "e3a5bi4B1X3kFfFd4kaWFUZV9kKi8RY1JxCpRr1A62XcXcWRJ9TTqZN4cKjg9yuoXhPF5Mqui3D6B4bpEZ48XtX",
  "key2": "2dKLJ1NztfB437qmudamZCMQTkUDq8CnJ5DAgk8jwoCvYbvs58JEzzTWRXMDDbwUU9VTqAbqGfkV9o2S7rn6UqSA",
  "key3": "ar4UfNjbtGguTqjYkSZSQ9iJFMWkN6FvSx7x8NXgc1vrt3DDUUvTptaUf91BkNCSoYgqx9H7rQBo6jquAtJMFPM",
  "key4": "5e3G4qZmWeStmmRyCsn8hhUSmPKUp5p8t3qhdNty9B57J6341bUW7LaeBdCmZEdAw1NeH1nuwohwudADuoevEdSM",
  "key5": "3SMN9Hu9k14WJ8JkEWThJ9e2tWBiha8hUVRByjAaERN2NZ1oBu8PoAtxUwkoSgaqKGqG17kX4cQmvK3uJ4vtPsNm",
  "key6": "44TBbNmEErPJozJuNv8ZgWgU9oyMAzTwujWtvD3EDTJJPRaadHrEHUUUDGZfXU7FxpPFyTK8sSxjU4yZG3ZxhMsh",
  "key7": "2tk2cwcEdwW2fBPgo6Kro9PuQ2aequyV7PcjGVEfPquJ3aVEDMdABL5eYwGuQmQj6Rez6ZZyoYmgvN5rwtbyZ1dS",
  "key8": "3FE2faLmqzfruzoNa8j5ASRXVeXdRqxyK5MMERWLj2fXtxMoYQp4DHy3D4RqebW2cz1W5JjupcJfkTSsMYFU8DQs",
  "key9": "65qr2ciNQ46YwgCMHouRMvmPNjstVbHrPFqYixbXd31vg9UpSGQkZjXY6U83uTdDYm91Quhw4jfkfV9Qtk6pBcK",
  "key10": "4XL7iebhrMUUQ1oSXEwJBd8os4YhoeRPGLkzPkwiURMtwxFCDW3ci9u9RrNhcxSC2817YG1fNKKJ7mYHiEHCNrXr",
  "key11": "V9buUFPwMAGTB6MLft3qzWjWsya5942Zkked6twyWie7zLKWdaVGVDEpfNPZhYWrCNegSX5kfjBB18s9APYr7xA",
  "key12": "3mKNEuUzu3upyhxadafPULs7VJsw3jYbRSTFKjKxwKCiKjYMst41kLreTTdRRtSuJzNiq94hHaXpd4XWCUhHNgnq",
  "key13": "4psQNdoZ1nQxvJ7Kwro7fwCbAdjLnEH8WBvgqo7HBt7DgeNGTrNmpR8b2s13HBefznnxRH9oTBuZAqd1WAxkeRoM",
  "key14": "3kiQBdiSBBS73DVLVwwQGVqTEdW48xuBL4nxhmLEBGvvnM21K6weDjK32JWvQnG2Lf9DV643AjQ1zDWX5MHLEvvv",
  "key15": "2VjFPMMNdk26XuM7JMYWNj8xjtm2uZAL2WFHKEC1X4cTgFBpsNxUaQG3oZ4DHpynKnTuhnbRCp1DJ9L5N1W4pYi2",
  "key16": "3m6tKb1Fbpgf5T8JoyAif3tFsXgB1Lr9XHqYAHCbzkxSFTESe7QEr4rrwrg6wh6Y6bX7kKpeAGiCq6kQDoegJLFd",
  "key17": "cxfmzVFqSxxkbhgfPP89kuufwe16tiaL5WmzUsfSXEitoPGyT32xDxQLkJwA8trbnQFhJV4Xut2PaiHogYFAFLC",
  "key18": "3SSnif6BSo2aLf3uAoTMS6M7ayHhV1h4cJnP75kLZEUaFKPMAk2RuoVHoyju43DWMRo9vc2TEJPLjAy3tuzBUnmg",
  "key19": "2hqSgTeBBdYDVMX9CVu59EHiTBxqaV7CvnWorYvLrzwLooynXaq9fTFytPYae8xwH2KyKDjW1PHVpHVooUg2ZQA6",
  "key20": "3qrwv1okFDqR4FPt86JHXyzS7jzif7xcTCVrLbW2y6E5T3TiBEWYcLSZASazZQbx1cdagkN7hXSKAbNg4vnbCiWA",
  "key21": "CM9Z2aY9qVwbnQPMbgibYHZDWsD2PDsutvwNs8BECdkhamMgmNCq5yFjXn6PPf4aX6tPognZkeJQStTcaG6fGhk",
  "key22": "32WiTBU6UEo9ssKGD8gS16QfJmVFbXZAVUX7jWxbWWXmX9AYeSPqYokPi2J6KBMqoHN2DHc93xkDJdSzkU17yuzM",
  "key23": "3yr8dEGuVtDkt5xshwi3APeC7fvKBS5kHFfhqawfyn7pEkY5AvzpYmnWbTVLjpWJEUSZYRELgnwsPigkxxw7kuSt",
  "key24": "3mRtiFx9rDTBFJxRziHqx7DK97xUAkuszgKqYcnZjuW4APxTxwakjufnnRjrrpY4D8pbudkSQBfMi66nYcddFM78",
  "key25": "2EJqGH7MqzHbyBs7GCQEcnVYxA2FSVgEQxXWYMhYJjnt5K7WzLT2srXahWY8JA9zwHJC2kTdioPrjSf4d7qtvL89",
  "key26": "3D3H6EAuHMmFkCb9TZ8RQywpJsoJQszSjEHFt4GCRnW24i59pPziKLR93YnLmhjdpKFoRgDrDQ7m7p7hNpkkT1zL",
  "key27": "3yZtJNQ2fDoQ5aDb7kA6s6DHg4ZSSa5NVYQRvtHuF31ZKtpFHdrjMV8Ro6JWCaJMLr8M8x6GFFBwK1ZMX91Xer1W",
  "key28": "5Rj8XuCw2Ww8eqjSpLXvzUejuHyEdMeMy7tJmyd1t68u8HFrY1EBsBFtWkJjhhy372n2eqMiehkk66Kauw9phCoS",
  "key29": "4LUFut7XiuWKXR442XnxPduqXzSXaBtu3jK1ouku3yJxhiuTuZCwSEzT6XAKg4jxwY1CgrE2EkQhyfBskF2GrkDY",
  "key30": "2PP7Dk64afeusaKYXBx2unSK1jndpc7DDhpQuM599HdFtmn2sMMXfD9BtWvJ2ogp7uRsCUmr6wyrpHJGmuHLAwz1",
  "key31": "3FyFcmch92KVBFPhJtDcUSq9HxiZ2PiU8KV9HJeeKEaw93Y5GG13xXLoQxsWnBAa8bFFZpL8MjHhBnsfwhfXL92A",
  "key32": "2WX3dSL9uKLXRx4YrqTWUdezbGJmuUSHkH5CjyA4GASJZRSVBYvMzhjdSQXrEhnxcZiqopZDSPtJuQoBuvGMUbyU",
  "key33": "cHbSrSoh8xDEbEiFarxS2fZXFuz6JNVeFZLoinW9gJETi5FVWp76e3kxnw2y9JXoNxBmpSH7k4wtppRh7ZjYCrd",
  "key34": "4LcHgB1EcPdkaRaDLmDAMHshVjLsvCbq2vBLThLgPKxCWwz4VVeJS4RttoKdefQL8AzSwoHDuoLdjkXmp26nmgnu",
  "key35": "4WiBXJNuUWcbVmmBrUZL4Ji7w7b8n6teXr5sbeuvrTJRDSHqk4LkzY3bkq5hoyzF5ENNHYQic2cRzuBr7svRdCBy",
  "key36": "3dcmiZREvJ4FcSWnE37CijXuPxvPxGYVVo3UTUBgsDTHiThdvXSkUo1J8Grs4jgoBfjq29u6AueHgdu23GMtmGHR"
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
