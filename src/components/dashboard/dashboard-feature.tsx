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
    "TXQrJomWLVytCsqrCRsbLhrkF98wvhLMDTrCzH6cn56vSKcXPfCa8FGiM5i767iVfEfA1GgBgqzaDzcAjdxKL8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdQ8p6iG3b5vUJ1nKoUC8mxT4czUu6hHDbKtnJrPeKwiS83HYvEo17y9Ge1dKr27R56iwQs6bvVmuy4Mj5mJuXL",
  "key1": "4EGGWWQ3QrjySGw6YxmM37TxibMH2o887ym5GJ6wjStkVinay1wKsuvyCsyui9drMPeURhBAHnY855KiL2WbyJFe",
  "key2": "3CgCz7KqaK8rMwVteUc79FNUrnFjJBSkDNN7MiDk9Gf4nv2QJCc31VaHbWTngejrpniNjBrqHndGZbrc4Y2RMjj1",
  "key3": "2bVBeurXCuRFgBCvZYUptJJFrTVnxbakaN3D3XN9ucsswx1AVuVRfqs3VrawCa71sZWJUqB1WyvPgbPtXPRhZJvR",
  "key4": "32krYth2at6XU2F6wo56yzrf3NmYDnfRg4kohvMBnXfLQ3WJvhdzbVM6tJzyfnxWPRH8FPRJppbHepB3GveDucPp",
  "key5": "2KQUdisXt9Fgn1XVewmQYWaBjtkehRoaMCQQZT2XDto4yTac12rrPJxJZ7W1dYJZEyinAsVXd5pvzb2Ujw2tMAH",
  "key6": "676xhS5PJnrZop9gyWAL5scuMsc4bTgu9LDtTcHhLAeTN265zGXrGd8p1psaSEXQYboucZBx329vBzFYy3Z9Bmac",
  "key7": "5pzwFWgYPgHvhXPcn963vyedvu2cwUBZtkk4WyxNNmrkoEi5CVTj3u2kVb5MEZ4WyGfE6FY3wHgkHDMtuGQqSxfc",
  "key8": "46B9X8b5YLb93xsfKvWvrMQBEYRYEvhxn5qxds7QrmEfXNd59vPbXobnsNBWpQ5syNHreDKEQx7yDoiR3xeLn4mw",
  "key9": "2TjHKMo8xWY5enz757QMT3HxZ7SWLWB9hEBXGdXnQ2nEJBa4WxKtHWrRjFV2qFCUtS16FSUbGxHqmTX8nEyxMDyH",
  "key10": "mLb9eGoNLDtYG9sLEidRjHBFHryGdESiZaVyZdmaH9qnr4VHZYr9DEPyaqB6xMvqVLwkEMxAo9wBhcDgBMUxNB9",
  "key11": "2YwNgLziuDGoCrCyoHcwZGV5p3AzPULCearDy8CdyHWsL9xS6i3X6HEgn21k5BtnNQfzc1sdrKFRd9VqMJqs5Nbd",
  "key12": "2CJ2tPcqCRFThrEQXGDCi54XBBt7maUavyZcMPMbXbD8SsamGJtA4vJ8TZykGazFoPvCe3gaH9sckgNdqySSLQdr",
  "key13": "4VNd55Vcthtkka8f9p6DMkgrGDo8sSwiR2CmDV4gRT3qLcmZSx5EYvcdaPWuZjZzAGHLhjhbkPd768jdRy4TwZXE",
  "key14": "5Q6RcSTSBEuU77fDXRAtZ5as7RMWcHpKbH6ztB7EDVMZQPEMTU6M1EnZGWiA4pydusHocWPc13hpZCk5y1X4EDFM",
  "key15": "5AQDYZXdDWtHTGE23G7kLD7GYkcK2w9JwnqT3Pag8dGU9WtRZLWcxUC3MWiYTwoZ9A25SAiAkcprkHDZXAJQPQcQ",
  "key16": "4dBviB1svLL6rJ3AhoDVr27jPMm9W1AoZ5E2HCd2fbZqWfvMs3d8TTVcLJnzsVi92M712s9StbD4iav6sNA81kco",
  "key17": "2Gk3azKUZEi7NKV8d3ogb794mRFGiFFdbSFciv4QQRyqonqTK4gEMbYhKumZ3PEzQfHUhna8EKWnaomL6oKhAZDB",
  "key18": "aC8GfGm6B2ES34BGavKgrbfEF3HU2Cx6R35wm6DFnXPM34TUtbxVsx8BKbVMB5UvFXWfEoY1AU7rM2Tu6wH5EiV",
  "key19": "KTrPv1668CDfr7dSz1fXDmHWvmvaySYxJs7dJC8vNuq6K8ygVDF1YGa38RYyTaidFKjYTHRxWVBZps1tfJxmRhe",
  "key20": "4gXDabMzteUcn5ZbgqqKgVrrxRTujcuCUyZoYJQyWkQgZE715iZAS97H89SvedC2QWjwTF14CQiccgqv7BU4jpak",
  "key21": "39tSxXb2Qj593PogaVS6XyqUqKFT9Ljo5bqyvsBanDQXM2xV1tbCmvBiajydYWLTTKbwGYnVF7TgB9fpXnmGhfDG",
  "key22": "39WcmruaXC6PiuGQpx8Ga8avgkFrmXPYU8QDkPoV7VBPzfKzLkZghssBPZWVkf8TfMStKMHriTYc9p8KBthUz4uX",
  "key23": "RKNMb46sYPv68PaB5Zfv9dsQg7gopHwbGAdFJmFXTrTnEHe3dquytRZQw5fzKHsz9UtPzekGcAogLYRCBmRxLV6",
  "key24": "2yAmChz7a5MfZrLjmTYMNzyAdr1oo5GUHKxmmT34Ntv8qiuSNhZn14jFvMdmTS5VsnpMUY7YLHjNhfo7yoQHkDYa",
  "key25": "5iP1KbWPjLK4gYYYkvLfEDijmLWjkEyAU7L9Q3qUauW9kqer3LVQMQEh7rC8t4fXAHR57KwwxhYE2nFAZKcoi3xn",
  "key26": "gKRydgSJcr9xiLbsdKuzjYACAcKjLtJS2NGMoP18LMZQ43EsdgX6gtmAZfgb78szPtBJs8R6Y2YBufG1nFUkK8J",
  "key27": "4PGHFrYT4KDTNwLDeuc3yvu5cWGwGdpLn2zFbtujbB7qhGThqqZS9rHbgoxmdYZLkHoB2KzzzC59BDGWygamhJD3",
  "key28": "5eBVqP57tP92S6iorwjeitMyVwHwJXbvxC2p1xHGheaduzGz6b94TjHr2P1EY2bzgWi4k31mcPSV6pyiej4i3yGz",
  "key29": "3mRQzF2EuER3PCXTuX3hPd3CkkznwxoB8DxMeRWaRhKJ3TMrbu3VwfmUq4BFRguHUnr92XjMuFa7YHdjPHLLRdSR",
  "key30": "3x111K4epzNGBU7EzNpj8LYFJ6eqiJpUDjVygX5sfmgTrMXMHkWEoQr8rShuyKUg6iCjJtb68dHQ73Mpdwx41zRm",
  "key31": "35BLBam93rJUS3mp61awfHJQsa5Kg4xGJ68ng7ensKxPm8cmGxR7GL4wLJByJtqvv7xRyTsardwQQqYxtp3E4XPb",
  "key32": "3rBpysaz6grP7Ug5jLHC2X3QSbcjfqzTMQmBATmLn1HT6KCup7g2HydCr6e6MiM8t2aNKnQL8KYGHa25jTxd4vJt",
  "key33": "2atYjjamZHLwK3Cgivd7Hgs5XxmusSdKiYwNVKzPjvF6DNLkVSWAuGrXsEGbH6eAXZtf6p4SrPHMShiTeXBmNXqg",
  "key34": "4iVkbFLZKXe72NdeM8F4co1HHtiBsRA7zuBhNEw4vJZH47YA2ZiKfcUZaKmb3AjWBqVebBLMmpZBTri8gri4RvL8",
  "key35": "65pz2iL6XG4VAMepCsTgisAX68oni4Beh3rk4a3j2HpAjhTLzyeFznM1Fk3rVVX62sP3nRaZifKNwV3GiyUWZgFN",
  "key36": "29SzwCJZx61MEeoGBi7Dh17CstU4mF9LmXkixQFGPw1L1LdGJNW54zSar84Gm4BqjM4YDQs1Vb16sGuL5ZBZECKE",
  "key37": "4Zd7okFNigruQGwfBEeAFvrMj4B8WWjZQhjuv2VP47jU6okzudF43X3MEQHv5Brf2uZCAnQEzjKNeQns7bq4KweZ",
  "key38": "AwU9BbHjSkTNXdgpbQqEMz62sR3F68WZTVar9GwoLW9x1DfycHgx94p7AntcRF2UmA4vQbYquSVGQcZMgSSVBgE",
  "key39": "5uX7ULizB3UKjju3iG4DswqiRrbHCSYoMQCsU2prQwQdjwxAJ1Lh3dYy3LPL5jtPqyxP26RNf4MUfxKRUoezGSSP",
  "key40": "5PkY862ncUrBZE4DSLfq1DU5DckbjjHrb1BqHivfpKrdLPsc1NALGsa3Aue4njopVTyrrsh3fFVZEygbeczsuFeH",
  "key41": "37Yf2Xn6Xj8Bx2yDxedwzLaCpDjymW6GrrGheR6o1wJVoqKA1LNX7fyrXbSzVaWsvwhnumxWwFaWmK3CKX363AuT",
  "key42": "5YRWfTCq85TSitHwLbPNwqTbLwty5AfSk29U8d5XtTWcKv8UX6ney6P12iD1XhkPkhcjJdFyF7NmRVyarVvHpXat",
  "key43": "4YcKTmwNbv3VqzZLUN76zUBUCgRYELa1SH3aTRY7fB1LYt3EEyh8CUzzZBnN22RqRgJZFUN64MkfznL22ZTMhFuA"
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
