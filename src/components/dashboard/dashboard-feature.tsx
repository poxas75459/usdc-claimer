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
    "4QHYuvZ7WpX6bMFpMqiNau2Y1a1o1b622vZxqcpioRa6tttE5JUpnVVc2oPsxvdHDdLgA84HK64QV7ZyMg9MXAcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQpSXK2Uh4dTZeMiKP34mwknjURFxhFYRVVQXumocmFR9GxyCB3WyCw6bodKrMnzDQanC7J4WqdbreSktfiEzDa",
  "key1": "3MA2yFH5dMRHskK5tejsP6faBwpJurLrdc3AET2iDmJ23gFko1HwabhSCkPYNXTFnJi77Qot3AMuLacpNzaoJGuG",
  "key2": "5vNqfmrAZ1qdc8FJqq63uQb1WzirYxvBs5QVjDYZ5QenNF3mTbSHDuTWrgwfCmY3czSv12giDhoWwNEzLXTUvE9t",
  "key3": "41esZQdtvBnxuvnF5qrckrqCVfPpFXFigzWZSp3286sp2BDTAtHwfTszoUegxyAX7JnsfDuUJxVX9zqcEAD1Yf8g",
  "key4": "3FdocGgRCWQo3NJmggf6iaFsxzxXZZE6wmPsoU8iczCuKMuijJPofLcA35J252Yg1vHZn6t292BypjJv6eis1Xwb",
  "key5": "37HcviHFeuHjodUp5fRneaYcjAhS48fJb9rcQy1iomMmx2dUusEPwPbZ4t3xZY5KNiZrEKReZ5qBMq4MBHUGtVnH",
  "key6": "5emFnUCyBypQrFH8g6kYhnVUp5MtSyC1SXKPYRC2ZpKpN87Gcm5LE9LMEXZRXCNNsMVB91KHPt9tRrvXgrGzuNow",
  "key7": "HsJUxtXNKMTGfRQnE63Bg1p5Z7mwWZyRCauWVihCy22dTvELXDBpyJF19LvXqNTZq1v7NJcdzeWPirhcFRrTKFq",
  "key8": "4MTqW8GeaywwevG3iAXp3rq4Y3n3ZQyD8bStPHdN3y2rggrtB4bu8gvZVPExCgJKGF38tdjVCYMUBpxNxpC38tus",
  "key9": "WBoAjBv7rXCAAjpK3jMr2mP1q68skphHJKupbTrWMdXYmbvpn12W4STsTj9c1KyZo3Nrafm6p3UAUDTrf3ieSKg",
  "key10": "4dg7LvKwgkyyrN8y74NaBeeyaQzLpq1PRJGFVrUkGSBtdLs9qczRJjhTqJpT9xYfRL6WXPnvzCx9ZXg9Gz14c47a",
  "key11": "5QDtQtSU4PVkcX3EerxtUYFCfNcZYU3ebNjZRYqvocPyDwhQ2oBgPwDhkby3JMsJCDacH4LU8KqL84vTK8KmRf2d",
  "key12": "4EXVKD9czS19Utq33dZcVtnkEiC3Too7BQWfbcsQn3yz4iiuDwMbjwvz6zJ7CuY1jf1Gv1S5Ys6Ese1YK4Mh8yJd",
  "key13": "52x4CoRrsemBUL29npHhbdLk4sj5vRaVzp42yTvjMZa2p7M7d7ADWegQm43QdAkcD5pQGPP4qdw9eT8i4BRabHXZ",
  "key14": "3Evvd2C3deEJ2ag7Mah2zv5zHLpjCzDA5NcsEuJUAmNPrbcL9MRKVpGqbKuqmnUesnFELxTX1vyEpDtFwVAJHSYY",
  "key15": "5i8vsMUeWvPMkkShEjxryePYjwUrExCMe9g1CvHxfemvZeF5o4pcNwn7vyCJcSFDA7KhJde5ibFLPzufvZfp4STu",
  "key16": "2Tz1rV79upLjzegBeZ8SfKNWPVEEx8U9tcTkydAkQpiWid6t2Go1xRi2uLB5JjUZTp1ajbzHYEPJnwkautQ8or7A",
  "key17": "61M3dr8pjA1AnqVtzckdSCfsdighgcDuUtZ6PvUVy918mrBdXn7DU9FydBsxusnReBJEJ2XojSQvzChSYpgKyY13",
  "key18": "3PYaGAido7ojn4veryrZuUVro2zm4R9SxJYqNBZE2CBssRvLmPhcWxM3vXXANCnJCVUDFibP37B1Q8G4seDguPM7",
  "key19": "iunSFnHXQqSencK7nh2FJxk9VQJ3ZPcobGRfBqrU9NUaxghZScgY3hh5m2e9eJqy66Wa8S1bW2KEpXszPRW7G5k",
  "key20": "57r9uD8FRCnoNQnPH5cH2pPfRTYbskvpyBVGLPB7n5qUhPXpkBk9aSCc11VTCp3LgkarN3XaJmxWgALpCL5qJmTL",
  "key21": "4qpgoUAhtf3qpSsgyZBbh2BHsBiHhgxURN18hyKPVrssnK4k65qsaAhY8DyCUthf2yZd7NQaPLXDayMckU2R12qj",
  "key22": "2Dq3EQ2qkpbadPAyMezGD5KUx64oA9r4nrdRvVVkwDFz23VzsGDFjHtz2u1LPP2Czqx5YorRHvAXkRVsWtucANnz",
  "key23": "4e76uZp48EXz8NGmgwSEYmFGGbpyyWscQ2Eu2FUYFYekFYEt3hFwFB9f37DuU1m2BQiUTcrSTV4xYzpswZqdtiok",
  "key24": "63A5Z99PSLTgU6fzDHpGzwCJ8fxyjY1YU2sEprg3igSPwCs3zbMMbJ7ZBNjhVhPyGh8HFysfLvfPtboVNNMHxqye",
  "key25": "2vMZcMsgfm6bxmoncBZxTrAoTt114YKTavrjg2eUQggpoW7urqE9C2tLBUqL5LkuDhZfjtUQD4e5UV9LKJ7xYhTe",
  "key26": "DjBjab6foYvmNuV2BVxT1hsNLBVBjgJu4e8nEJ6qPmFST32X1NjAx8wX6pK6P6JRYscxf3qWmxwjL2hCXfnvvQi"
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
