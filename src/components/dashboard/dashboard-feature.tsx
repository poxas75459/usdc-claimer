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
    "59mUksgD8m69uZLiS2UPvTcPj52rd8D6t3SkKndFQwHu18CKvr7yQMB53m3roh3ZtKFriP45CCt5fD4meBmDdzxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPWvtA34pmojDjwpA5KCXwzmhsxqXLD6os3eQwvonpzP4smaCYhUmBMdtzRDbhoGWzW8LdABxXz8JfHiX7vy5d7",
  "key1": "5m26CdGMZoBqYLKfuYPLcJECmP1RLD9KQhRGWPRn9FG8qXudfWLdJQPhxATSzpkTVy65zZUijoyF3rWQjkmz4jsa",
  "key2": "2hhesip35HFYVngCkRsXzJhv8VauYXonz1PmHRZPQg3AZYQ7Mzc8QV9pNjZP6dsKiCLEMJBtLziqRpCGgfKnQwnK",
  "key3": "31gQVywpxUWCbi9JF1KTRyaLLu5xDW6eGssPWbfev6pLkPf5xHjECdejjaZoEGb3CPXfMgvxnkuM9rUctX8puixf",
  "key4": "2GvaNDDJk1LgtUkckoyJWBr3HBKmcnH2EphRW6YnjEm8qXFdog7jD2rNaMGEe6mipAGidW9WKzSH2ajwfHHvT94R",
  "key5": "5AsXb6eARk2AXZoT7k41yw9mWdubJY698MyNpzWMz1MW7qhWiXm7GnzrYgGn9s4qSDQKd9fnX6cmF4wmshVFqiHg",
  "key6": "3uzAB2jcp4FDJBRGRhbN468oNSQaqchUkaWozoDx7RdtjooxoWSmZ859uRbKbxC3Kzr5CxMuu7RaSat8Ecp5bR5U",
  "key7": "V21ckLUvivHrmtNHutig1BZw5bun1219KzQiuMDWc6P8rs8dd5FEoYExFp4kDrtybrus8qxUpkKoCiBXP6Fp9xe",
  "key8": "662xZT4PeB2SKufAZsJxc4J8Hsb8ajpNjd91AgC23WAKcakBLLf23iobmXx8bw6ZDnmMjqd6AXbewUER21YXriKn",
  "key9": "5zsFqLkR9z5Dv7J6PSZoheQq8dzrQaWeL15pCHkoEGL2R5mxw5N9tUThnkKdUszVccGmfDQMpYpjS7FbTFR7obNh",
  "key10": "4cevncABzPZJ3ys3gyBqAfVVrZGnTSwnGE88qpFvXXYBcnopqJu5SZUefo3qnhqqtHzMnHKsuXTwLxY6ihtXgoem",
  "key11": "3W9yrmFbtBtkwdCrtRWU5AJnDLH6v1PHLsBUsLfLVKsRNMsauvMAdLFnxMLfA4hjLuCVquQjdJ79HS96ADPCaKKr",
  "key12": "t2ZfeignLR5gxq9KVDtAhQvGXTPGpDed5PBGEX6APMWp7G56Y9TVWAAF1NJjYW8Q2YSJ7EJ4bJXDquPA2evdk3v",
  "key13": "4Qm4D4fy7yNJ6tyRJNoUUCWJRygVyJCbhDuV9ncB2pnkbKHs6FSjr6hZXXQXqGfbBQrkvkrviyYAXLrziUVgFeAs",
  "key14": "5FxqECjvBugo4TtbBJcnyi3dXVoWtwKtAoYWMFXLXULkKoQmbDqKgY2yPsHC7fWYxCdXGueoHbp3XrGaQav8x5bp",
  "key15": "2PpyfziLMnpCnrVmozSunBYHAxvr2eZ5oWuhcKBB7CTxtaeuMNpAKvHojgkyokt58DZeExEB9miVBjmk4iy6pMxx",
  "key16": "CxojL3iZYLCKFyGwUUL7oQYBoWA5AShRhVnwFdmhqtHRrCSDssf7whFBYGYJTiAyGnFTCiEF1skVwh4H1zGyDqi",
  "key17": "2f4JgbpJpr7XJP5ZkXbXoQikpx3Q8BWprj8m53ix8UkKagKaqw5SvfVGaRTubUVKx4uSmzZVxGYxaYVXprh4uBJn",
  "key18": "2RWooyhs6K52ArKcjWd7ePZiRd1yVB4SXPKHHd5R1QhU7iQMz5i5UAHKma1c8iizMVBCTgBbcpdcYKnMGMhHmiZ4",
  "key19": "66GoRiigKWRSLhG3seY4X3wBRaByHZXPKSjLVZCaHJKCr8aG9u6HECFQGKRsj5zDwcrCFRePUWUmyYx985jpdfsw",
  "key20": "25qeUsqEsC4fTKEAFWzJsYrT1iKU15vQYsNta4EnCuj4ktNT4TJxau4ydTZrgTFNbXdftgUwzvru2bhwm3pYAWTw",
  "key21": "3zjGsQqbAkVcZu3XpWUJbNVE9ikbzhvuWSzrFLvAX3e9rbStz9JzTvoZs6CCp8FpYDq2TzPmsCmwRdcXQNCUJEFo",
  "key22": "qcQsdFgUZMFZKsppcvXgEEMco9zcYRaboK1Muxo8W8mr3dcXPyhuBdbTybw48BMqNmuWZsT5TPHFgGrZRQ6Phyt",
  "key23": "4NyBL17iYmwRXAqESvdqnMgdvbCSoMqe25RQhedxqYcx4PqN2MLtyJq6xUkQ49mY96DpDbohf2tqQ1EDhKLqPCF2",
  "key24": "AuGqUFpx3oVPVhsuAEHaunmRvs284VxPnGWXxBNBTQdPNNfQsLBNrhMwvA84t9pQsqk95qHkTqRsfovZ1weE42y",
  "key25": "2hFTeoTJrb9ZLiQaHDhUt5N2iZ4VXAJsZwvoS8Aeo3CMzF3ty7DuTirNFopo8CrNMCw5nwQQpGKVQBJAF1EsU3sL",
  "key26": "J1sSVN1BXLCqEWANqPbqJRBB7WHJopFvd6k7sBooAaJVBinNQXCZ94pnwckY8K7TTZqQRGixE1rqtPgDVtHSCK1",
  "key27": "29B3FyGpwixrj8qdWYtkb2a1guytxq349eSqjw9aPKMb8TKfT9dKnR6AhRknEtJYECcaYVagBC5qzkH2VBiWCutU",
  "key28": "mu7VRDCqcht1CX4b9mBgU7HHykTjDYuYRjUaGPRiiUsd9u8qwy8CRER8bH6kopELGY9G9e4Unp2t4dHGEcc51LN",
  "key29": "2N1JgZVGUPjhw1asivXpswLZ64BteyoM6b6UHSBUskArUGwG4MsgQ4U641dYRDhC5jgwNDt2A3BMSCYYwJ8s8pGL",
  "key30": "3wsyzm9Ks7q4QnearWQoK8p5eJGQSq1bbpS1RH5kUPL9by2XeJSdtMwuephjVr3GvSJHYowFh3My1qBTd555fFaj",
  "key31": "2q9Si3fmgai3NLwnGGpyLNLoLiwv4R19KcLpzZoNP6RK6zPCJ2BBxxWBuagMnaome9oLrPnqyjajvsk4H1uAgBPx",
  "key32": "51jSqvdBMMzpDCyRY1LYujzWwFvV9LKNNaJ2MifRoTDRzYzgJA9YD6UfpcnjPcotJuY3fpWXSubdxUbrpKGx2sWu",
  "key33": "5g6nL1E5QJovxhfuCwFekX6p8oKR5sPvsm3tpGbTKNi1AQZykfYNf83P4dxBTtEYczbe9orUX7KMheWr6dkEwir5",
  "key34": "5jDiXP88qQLEJeU2ZmGpYXyucuXAzAHuNBgQMdAR32bF2uzrK5xsYExSoWQA3p2hPmVQf64G1LhveVKSdaWXJv1E",
  "key35": "54uq68DEk1fRXTB1HCgKeQ8ZtL46YifwxYDeB55nCL5FLZ66rmGMuGdV9czi34J6BDBmvHfY9E2J5sbopNMz3KDz",
  "key36": "2Yrrcma9qxQH6cts9vwpouKaQzQGL7eeMR4cyeozCQ4FFwqupbQUGNjGYSniG3pEcRYMaYq7re6AQLcZqjyLuMun",
  "key37": "2ZAmzrYf292JpjaQnFDG9ScqaHWBT6BRfgBzNAjjEupdyFdTAyK9XKbffeY62BdUmZrc2EREeYqaiTuZCLrUKZKP",
  "key38": "44EKvzRg2454kbKBjv113MC4iGRAEgTS1Y8sjttbLwf5ks8UBt946NYHHJgXNnb9KXJSqAGRoxSFK7M7PUE2ur4D",
  "key39": "3rhdZNm297uH5v5WZfAdTNjrxPH9fPmuyTKBy61PeTStSXwv6isfBgJ8g37U7uBge3nQqc89hV9n3mgMLxt6vE8f",
  "key40": "3THYqh81AscD5keZiyyQeXyZRKDYNQ52phE3NfKQiFLrcPmvYyQ5MWaD31esrDY3zxQgCB6ttKCNBPobsv3RShPc",
  "key41": "NQ7U9j8onGTjQAVTchzYARc5b3Kkf3tgfpVvpPWnXoTm4FKgfj9QkLa3rQMqwpRJMQyeRGRxdcM74im1TfLBHc6",
  "key42": "5HDCuGidrJPyboSfcDvV6hwKkWz1peURLTdwT67GLMQ1CaJkoLGunTGq76Bzc98EwBQQT34WmaEiz2k34EyjeJYw",
  "key43": "4fcZzX1ZS5CDyGGEtRYg1eVyyxgY1ZdV7UkXCkY6dTuwhMiqAjgpjKpLjy9aptSdg5zrWyrb82deE1DhgGsjsBWp"
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
