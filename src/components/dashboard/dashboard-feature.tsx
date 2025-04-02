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
    "34Qjj8kq6toH2u1qFrqz4BuPwLy2kJzag6busysUk12BGiaDQgX4VwpUnwJ4SubuGF1mAAacHCVWNi6RHchX7X5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4VCtYqfGRsdxU86iLaZ793v23p6qzm2mYFZyRF5E79s3GeM2a5LffB5Getem9gpDuv5CauLNQNWbzSfbDKAEUT",
  "key1": "2BgDXALHV74uKXV8JoNoyEQDYhqySnHGdWad4xoGKx1RDDEPCaeMBqF1mMcvpwCeu6cA8dyaSGvjTaGUDp8GuGsA",
  "key2": "4jDnQHD6AtVCpCSab1Fac4fpeDN9FFsLpHtgX4dhtyeqffhPkxgP3vx7h1uyyxFE6FAyFzHSCCui9oaCJz1iLLKH",
  "key3": "8P1PuGchTpJj1Tdt5UTXnmCvCAoP2TWHaPWzCDC3DkfaKxfom75SfcdHiSMMTbaEXmUyXXNrH18ZG7En2wMD3Gt",
  "key4": "4ikn3Rb1gU71dKsrZ65vDFHaxeEVamVFZWtyLAyzjJxSDsSDq7Ewt6jYsXw98TVq7zTJwShhGtwvMRjFwRVmvtCM",
  "key5": "3au16Wc5nZd6V1CfJ9u9c2dnJ7MHjoprNf6ratKt4PNvcLusJihFCH4VW22XE8P11HRBWEr9yiNgH4LpYeeXXSUS",
  "key6": "4g6NxtafaawavvpE8rgbBuw6PvTnAaiRXm7EnYfSk1R8PF5YF14L15gYBmKXWqEYLRbWKJmexmB8r4pRPGsjV8oa",
  "key7": "5qR7PdpWzYB57hDMjnHad5Y26LNZkxzMGvcuyCbrPEwKjAq7yFcKvq2KRFNLFudVuPnCXqmqJdknTHDmtrAvXoj6",
  "key8": "5rpqAjcFUHU4Z43rchoGMd3CuDwp1FWevoUWS2UiW88S3mpEnVHgfzo3AXVdjbFqF8zQkHHU4rsvmdG3xPNqo5sv",
  "key9": "41HDyuY1cF7rJVCcG1fbwzVBKPU8FMcKuwprNg2n2CBXDHPfbnBJLbBkYPzVd7nbMt9v2JSJpVvJ3qXBtcsCZzvh",
  "key10": "2FW43goxjqpR8Hy8nbRRrBBaCQGcAqxsfeG1zFeragX7E8abq7Cy339yBhCRzZ4C6mpGiwnRYK8d47FSx6GHpc3L",
  "key11": "5SttKZ9sgXCyRcvgwBp2HA7FcPXzUrYaPbYcvcnYBTos5kW1jAu6tjUegt4CqXj2ZYEu63UddHB7DHJVLAC5v4GA",
  "key12": "3D3QxTT1rJUHRnTW3x6BoKdJkxXXfeC8zc8MXiiHF987Kf6oeYRSEiiA7zKWCETWc5f7bornghSTxLV7FFs3qbrS",
  "key13": "4DXHUUL679q66t8BvgUQQsRNLgE48baLXNZWyLKStjE82qoRf5163YsmjUbD8y4Vrr9LKoUyi3VJfTq5CjZN5ZtD",
  "key14": "whjywpeCNHJZjr9Lgeid2KnBmzgsqZrLfNjAJuprsHUKiMg7BHkXnN7W7CtKcYv1wHeSwMGdxBPGpSwEhVzQybJ",
  "key15": "4SPdJNbepzmYyFA5bMk1ub8VtBnhoo9D9QB8aysFskAe6AQ1goWGkDUWfq54u5T51igaWVSYzRN1cVeC7FuVZaW1",
  "key16": "629XU2BGSxWhGupGQ8ggQL2qAHJK2xgN7P9cvaye7BJcr3vZ2Zdybt1EzSkHMK5avh8WAPwV4EnSfF3c4LezjbP3",
  "key17": "6363qsCdPyJAtsjzMHPXZvnvwvvKe5s2stA7fkNWpqKhwPF8p3c9knXCwTH1YuNsdHYAox4skMtGUDUNRhMGWU8f",
  "key18": "3ZWJ1dJqjEBV2eKVCR8b5cvxNLrA7BJnyhbaBrLAEPBZTEfppvXaYGzL57N1kkmBTmZaDUmXUP91GGzAAga6gN56",
  "key19": "42RgvQ9bE1AdF6wBrTwsZUjzghEE4zNmWfdvBPLGwZbE4i7KdoJZpxUzC1CEFUjeDJWbZbxcK3Rc35buS13W5XqR",
  "key20": "52jMJagwBA2rXMDh6KRwhP8HjEMqKXd8rLEnkKSdhxN5QCvQpHb6A4ybkEGpPssyvDtfGnRv4fQTwyvYNKV7UgZa",
  "key21": "3T5b2TGvnYqTUgqVVfRw9VxTKV8WroesX1kjsFeZL42m2x6VXnubpF4ectXtV8oPPuYVWG8LxZYdSEmkvsHkfJkQ",
  "key22": "1izBqz5NJkptGRzdVWTjJCx5GCp4HSefJksfBQTRj2kY5GJzGSW1GEzbxtScsmAtjVtHmMnK5BocKwzrKFcJriX",
  "key23": "3XDFSedd1Wfuiwz2LJtpuqVfZhLDFSJKntbHYFjbbA21UWHVH6wd1aGSEBoj8ZDCrhNwqY6BhtNvFpdebLtiiWiC",
  "key24": "5fqbaDa8ZZJ5RPLCVC8vtA58REG4X67rbe72Q4bVipjjAm6PV2SJ3GkgDVPWrSxbxfh8okqd29WD7Zw4La1VwHfZ",
  "key25": "2qbcTNoWH2v4LXh3b4o6Ptj5vsZdk2VYjsHyeUk6X3X7qp1yntgeaAeCcyPuzpG2AaSDvwWsp6JFPicaE7FxxcvA",
  "key26": "5fSgdSD9XxxuYSyYoyW19f8mw8Hu24PgeWoFxUzxD3bVrWASiEmRZ1GAXYWGnu1jnrEUBmJdMNH4AH8w2qt9riRG",
  "key27": "2SuyTJ2RSVNadhjhEZUnaa9ccAaQHgcrwfgG76rtapvCXUWBE3jYRtmKdSnKA3Y5MvCVdeS19WXvLVwhLP4MRPi",
  "key28": "4xbDuysgaVzzRqWX6XwZwBYdKN7PxZ2nqY84BrmTMhv3fhmBZP7sXdtsJFUX2nBLUiufvEdzxjEvh9h3BysM4gfp",
  "key29": "4a11DCpUg2HbrNomixSWG8F9bKqTr4bbVy6fS68j9kfXFqeiF3qYH3ZthYD6c4bkcrJTecVcdpF5SwtZLtSqjweH",
  "key30": "5LWHH8uacHicfM6e4wHers3fWMqTQGrvBZ3yQPrY7kMQS2bAj83iLr9WQGgCS94sHDJtN16vymYXonpz7i1pyqmm",
  "key31": "Y2GATCPk7bwEL1tVSEdF4KdYfVMmn6pycSf7Dh9TvWS9e3XzSfdZK6AMCP4C2kEWWorQeY5PVqSUg494QVxgUsR",
  "key32": "5n5kLzaPHqk6XZ52j4mkt5jKegVmChnkneEupdH7BwVpVWLE1VPUNNRBx7APKhb7PRv6g1tV773m3wbyHhKgYSKh",
  "key33": "5cgaW343ZcXD13Drw75kV2nq9HWQLKGj4DXe98aZb7tj5jPB4bAjhRSVT1Fo1xbnELnqYjRX4QNFTmKReL6efYZ8",
  "key34": "3kZnuy4epNjBkog7LTdBjgDQKLr6789MVygnmiWLRgDoYDSuKxbSGBJfkCK7keF1a1Y5FBHHTmBjjiHYbQ5WhY6f",
  "key35": "1iSaoyKQo2rL5cKXvzCdQyqZ2G5jc9x6t1kwATXkvjyWD3p98Ec1J6ZqQCXxqqj1G3RjcHG7i34m5Z2G1yYppZ9",
  "key36": "4mNGVA2nfW56zPJPL9QvFehANR36QSkhyGd52bfnHGebBm84NmTamBNfCVE33HdGRJNvidD1xBUicdPjFtpVgfwj",
  "key37": "2AxyBU5LduDemhuAVgcfoRhe8eVKxn5tFjYuqz9T2vMX85M5E7nPZWMnqA4PeTL2q5F7oK8ZQF7KYHCG4zMS1U5K",
  "key38": "2H9LJ4x8oLzFofXA47pUE8Jg3ZTbfULNoT84toVEcfNFUuusxA4J1Vabc2wxHrQCxqCUxr6ehvMkGcFmNkeFin59",
  "key39": "5x53BaJrfTbijT79nF4Ki43z7dYfjQ8SvE41KdVL5VFLwMRvJuePedMUSzMASGugWJVT94cbdTkfeacyJPQDumMz",
  "key40": "2S7NREDeGNaGMZmvefJe5mvHv4mPwyx1HvSSsrxP73DH9uFmZBechQAqQrDerJ79iBnsMJP9vEQv7HeQxCsNkRiz",
  "key41": "3cdTtU6FdnXJ34GmQ4KMJVpdEheKEvoqUNaQMYKQmNRbxBsTa4TDWsnA9EdNgha5rY1fgyk9yWpzchpxGZAQoG6G",
  "key42": "3vTfd5wXtRsXhngKTqSrvytM6UX8bcfuwbNFeNBL3Emn8d5tZbiQu4xd9d17KcbycHVSBzZKXBHftRAHL3vrgkSo",
  "key43": "5D7Lo1YGeZTGPMaXuJSjQPEULvZ4ZoRKM8zXvrP7YqFjAbnSVieJTYXYVkvWP2PnhoPhEAB6ZJNToE7yz5EhtMm2"
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
