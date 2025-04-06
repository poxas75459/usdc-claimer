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
    "2pJb5ZBa9cdXVdf1H2N1xauaUBN1kUvhW3xTiM6cZkNcnd1CiBgrs89wFWywc9ps9DVoo9yeD7Mjy8kW3WDTs3Bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgsq6pWVuBfw9GC3ktZGK7boHnQ2JfZX3vUYdTfverDW8fhyuFYqTdhGwyUorYNmnThswWeRtmkdLG9Zaucy4yb",
  "key1": "4hyL2trjJgxKnzu8A1zREgyXWYVy83ZMysJiNvsBCPRSNoC2JoZoim8FZ8G2ZnKAt3YPA2coXDTLruFYUuBJ3wVb",
  "key2": "Vw1a7uAXHXdxjPDqCBzanTr9mX2c1HqWEUbFvT3TGBqR4yKHqXzLRhMepU2ggFxNGwMjeSDqmrfBHgL7ZFoHAPu",
  "key3": "4UbAcZTU8YmpqXZRD7gW45CgMWad6Wd7wbm4LwcpVbbySwUBAyubBmGxHb6cXQ74HThBLbMTeVEgKwETc8mtu8Ay",
  "key4": "23PsHu6eMRZSRnDiZzQhPXicRVnL6R1QBStabmXKRTaC1MY1emZCyU7VAbPNnEdrfRrkwGV3vfW6apnVRU7FhBtg",
  "key5": "2hovwQkHXx91M3RWHFXEUhGsRJrG93XimYjbLiGE1yFtCSeHazD5cMEVi8yJqNBKSb5DrUe5bizYMNGMbpGSdrQa",
  "key6": "3wUP7UhkQM9iy6mGsJ35Y4vjwXoTeoY7N7GHVt7uFLADUZ3umKsL5bZMAiJn4554HHEEoB7xz36Dqh9AjWxXBJgs",
  "key7": "3uh1id2kh39eMZRijiARvuQBm2zh1WYJHzDSU5Jm7b86x6uLLbw4em9fT922Js8iw1nEGiMd6utaCygZMuZXLWBz",
  "key8": "3rSzERvBrt7WHtNmJ4JcrWpoGqesx3ihYENWGnESQ66NDGR6vyk8pPpVJuTdeni7mcsFqPWcJSgf25uJqiKYEaBd",
  "key9": "5okdArMfR6urrwFE7MFgwJj727tquEDSsJ2mSShXLXwEJbdLwRKYypTtkBiR8tjKAXpNMRPg4KyY939YWLfCQv6h",
  "key10": "4Ye7tG4oJSMnpW2EJZSQeXFm7nSTUa8sG77CPJzGH8BdYmY3wBQnJyuVjZt7F9kvZ7e1rrFtWifMKgsWMCkHXdg",
  "key11": "2eZ3jcYTA41swhX7hoprv9rejnH8znsTNqtiNKwxnJLmBvoUstx29bjhw5bBbXf8anqsvGYx5i4emeYTgNNAX2of",
  "key12": "9eeo8TbYLWe3EUDhXKz2qbh2aofrVthMTyffcpxWMyhXAYsBajFnEdfthGrM8Hees3YGsVFBGaaGtY9s9Vq5T8j",
  "key13": "5tBDnGeGBFEuZKtojLeA4EZ7ednwRMfyAooUcmd6Qpbdp1Yf15fBZpzBtAdjapy7wmK8Dzoqm65avAhjL3mxGeZD",
  "key14": "JpvWnJEEXT8BsgyKjtcUNkoXxZbSJmg8QgRcRabD86XWAGUDujUpMbf2JUNgMs6v3Bt2U4X15bmMqgH8f69H8zZ",
  "key15": "bWK38Ld9RMaroPHJbxTeKvt72gpDu6AsEWND2yrqUFcezGRkM8hHJYVHCg1E1jGQfwxNuo9YNAyfz4VNc7ZbKht",
  "key16": "4gcawQGny1TKTxdb6FKgc4cQsPDpeHwhD58cnL2DurU6RwtoYmKtR183MhyyRkpU6cbXfTURvHmUzQS5grPJr5S1",
  "key17": "4Af1BvEEg9m2e3JXCyY3KpJj64mEhFbZtG7ZPmUTpd9gC6hRqrMNZ8dMB2fxh6qjyaqeSBFuQGT5cPasBLhJqyri",
  "key18": "27eKc4T5Wa3eWvAXdC34kQQBSJmCvD7p9iXyQrGyVJf2JwoPFn1FgBNxaKfSkJQsvW4dBueB2NdHnJ4AYySJXK13",
  "key19": "26ayyjwtKLDFkHP8cddvnjqqSsSjPkuLAe9qC8pYegPboFnwnAkrPxfnFU7iksyeN8wjuor87GzCM5chfGjvSAvE",
  "key20": "2ZtcwGjTXGofiSAyLnvexj2SRB2EYG5AjZQj5egjJKn6uGM1Q1SsW8UXCEnrExzRbXBfzMnDhHdg5kLBFBmcpMrb",
  "key21": "QBj5ZNMTxXbj2jF1yWKJVgF3a3hnXdxmWywbTWKfi64EXoxGcbN5GKcbNXYBZWHSrW1HECPFT2HXoow7VZJcVUK",
  "key22": "4KSVvetQRjRRxD3yQMzzQzrCjJjjUSdjEYzQh4ke2Qb3LTtiV2xNocH7GWk5QhbUB3FNj7E4kgcQktCwVoTnn5ud",
  "key23": "5LFDDBvvomzENgKiPZknBGaN4y5X49vLtP77bM3X9vPNoYxF3QdDD2TyRGviwZz88uSuYuH8x3JWhCv7DxQozptJ",
  "key24": "Cz1wKeYsYSgmRwHJx4Yh76sJbJioRJCarM8wLFQP8ipmo1pu3y5Wu6ENXvSHZbc5Kwo1RfECStoRJ7ZwcPiQV1y",
  "key25": "NJSGnN2b3g4eQQJkAbfMatkspxUHbVd6vBa22zyKjEnAcwJhtbmnGndmGHHSKmVJtirMHsrcU2UP8aRBeAMoEXm",
  "key26": "48Q9hth9BeXq8Mq5SPjPLunCM6eFBDSSwYaJFL5XnLQyecUR7BLjYfcHspa1LQCYK2AHv2Y4KpXu32LK6Q6KAzhW",
  "key27": "5xeGs74DzeWrT4sgX56tAx3peRdeL8Qm2xuWqP4Nv3zz1zLsSUKkiZ6JhFKDtCcoc13HL4K22QJBPrMp6acZTVY",
  "key28": "2meVVDMxQ6NfzXNFWR8AvN698daygt89K5rsEmTeyQRAVjXcfJXpMwmpW8xgdD8UMcHzLgstUW2MsadKonHaLBwk",
  "key29": "5kRTLuJ5mkUrbvfqFRpLDQSDu56xkiaX65APBZ4baQPCCrpsxBnUfiMh4eziSZeeJ2V9FhdnmDSHVHCroHb3zqPm",
  "key30": "4GiE5EKee5ZqNQfP3BHamgjvfR3QLDtsKu3KxmYhTtwAqLQanirNSbrn8ePm9epzkiKYiFpjx5cDuSCyd9mHcCiy",
  "key31": "2F3yBAv7JLzyUktpz4Du2MQAg7BSbh9W3je1pEgt7ZhbhXodgErwLjZxbxnnmd2cyiiWimRasQpD5qHXBSeQAa6G",
  "key32": "bhJsia3UTSxhcDEPGUMNJojnRsz9eB4m6J4mrKJcB2WXyQNoGCCHrPAke7K5m7StsRitwuTCowGP87KT5kGzGba",
  "key33": "1ttyb6HTiUR9d4UHpP47FsbJngP3XNyg3jf3VGzyKUWMoczzPVgce6SeNmt9pxjupZ9wMaCh5N418XAgrMzta5H",
  "key34": "4RPiRy4h6s8bpNgkKaDEGfuWBLyQAyhtYk5AizWPSt1MnuMbc5Db8jWndHdwdjZSG5cGLVZ6HYKc7xwRSJxUzRDY"
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
