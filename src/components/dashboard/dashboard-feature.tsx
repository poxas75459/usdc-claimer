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
    "5zqcYvFveTqznZVYbqx8X1DX7b91ttFsKSYjndxZ5TnMLxhGTH1mbGYgUgsw87SNsc1yvrtZJKNJBaj3uMyNcwxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41My5bm6R5UvqmA5JRGDomonS1XaoXqfoieUuNGhN2Zw5yn7ADKiQ9ZtiZPiaqAVAd3qDp7HjUNZHHshf1Z5hYTB",
  "key1": "47ibDwsVXEU1wifwBt3YGauwvh8zkm3EEtFcRQGAz8JM5Lt4pqdQCC1HiS5oRqRFknSeY4PteCKNwF3qUTJuWbpk",
  "key2": "gifzTvPPgZtS2gVDuYcAQX4zKZudgbh2NHN4N5L4pjnF1JxUv5jx2B3TtErqGuBsXc4n54rJrSQ1yhWAuQs6832",
  "key3": "2AogciLX7xyqCkP7vwJrfKAEmFtGxvJZnpfC8svVA2yu3aVPzp71p3q6Yo9HPFKEaZBLg9FexgdejLYoKb6EatK5",
  "key4": "2iauP7h2SGNgGjYxJRUpWYLLp625q37bvjLHnZwKD52n51JWe5gPvnyZgFmaqco2qPU1xYMjkfvRZoZwnRV4jnPc",
  "key5": "5sCea9EwaEmWetm5dDJGVDbbTfeCSt7CPLAND8E5oDLQ3PGXzsDkCmyZuHR4HoTeNLAf2eYWSXDuEZQJiMfFop9A",
  "key6": "2xmBGBc37QuRGWLh9rfqhxwmkoKVByWXtmW43CaywXQNUEaDDxKj2ydyYJqm4m3HG8fw9X1eDphckRy8t8mxrsGf",
  "key7": "5s4bcou1dQzUaWPQV5z3JuDeF6ahaBK9CfSq2gWtv1ddNTh42f7AgiyVRnsknsBMSPEzfL3ZE8FTiZmiH8Xxvveo",
  "key8": "XBDo2MQg8ZfN7v3qFeuLVgVcmSBftnHwmvtP63ut3gq7PxXLV3ZWUW8yNZLwLzwQcx8nJY9xZVG9qbvUGD4GyJq",
  "key9": "4eZu7b23qG3vfYyLt3YNggALvNMcWgFDqb1dXzKUrPi177vC1n3EFHCtE8k8awpDSjKgYgXTARjAb5p7yZkwjEQA",
  "key10": "R8u2NNzogcj6hkrJK1hgaRb7XyUVMeWE7RDbG9g7YAmifWxxrkZ2wuYPNU8rwhZfVt7cbJLygZD7xV5ZZSqikCQ",
  "key11": "3CMCafX92ct7dwPMT4DDfduBBTYLeFxP2SRT9fn2AXT51FQ3FSBt1Af8sc93LRUHUaVUHcfoQedMNWm4ptki2g5L",
  "key12": "34x4QmMetJDs7Z95iJEBQn85x27m2298FwABdZDo7octrR7EUM4rpjnztzPhDFQXcHgKk5FwyeUgPMCSnJkb5fN",
  "key13": "4iT3N1NwujFW7vLwe9ReNGqHHYZLcD5T6b4PgMfZeUw58qMasaLDQV8uLmKyQjDYviDVga61yzmxfkKfR49TsQMk",
  "key14": "3atChZtkTc4threrhPNckKow6khPdaGyDT5sFfRwaW2NzYEwciYfx9LgHsmPTCYrFDp9cbkC7qZZucsZnWhRuBk3",
  "key15": "2R61YRQPEsxXr8KsM5SGxRoXQFM7bofWgBQX2nhrzfitpiQD15q4YWJ4VJ5diDYKNzaQBMUBpGnYYrx3fQxGJ3bQ",
  "key16": "5NAYuSwX8CCNB2zTd2XNugc2pS637ZVNR1bUy7RfchZ1xV2HVEbVYWX2f2qEQw9E64x3dQnuH5pNKC4xamkgkug5",
  "key17": "PEaaGEGAPwpkJgLWW5pAQLznyRMC5vmKeTX6w9Aox37PGPLTTcJuPdU5zq3MdLXJ98ExgSh58j39ZaLqG1HKbPH",
  "key18": "5RanWPk86HkFW4Lt2N4EzKFdjaJjciP4xpKWJYo1wREA8RhEfTWkJrDywMhhUDqbxMsC9ePp7AHecmGDFks5ft89",
  "key19": "5daTJyr2RZ2meWjViiiYBSwfTCfjRE6HhdS2LSc9iUNSKkDg7JX37VVrhDrih6MYo5vWXEuGjko3tQ5mLW8Q2cX9",
  "key20": "3wwLnGkgrzsryjyHtXq9ZimkT1hxp9JYYNe56c1gs7a3odWSkqbKMGWS1w38dnwyHgvpEg92tyiXCP6CLJmrFSPJ",
  "key21": "3yzjgVwkZERJbPYJTLu8qx37kNbmq6A8fxd3uohULUjiwSvJBBrBRdDMWTzvtrmQB6dDKrkZCxZuL25Xj6SEWa7y",
  "key22": "4qNKBtetALUv1WzUHg96xS1oTeT86RhTQbGBqB1ST3as1wwPx2eLHG7NVkdT4JwNeap5gayXq6tEN82f3nBGZtTt",
  "key23": "2EtCkdH4tWdvdEyUfxxQ5MvfL8ZDGTaEw5XqHi4RwSrEHgrvDFVDG5yZrFhUvudiWzt9wL5hjqbhj1WmzrZtP7ie",
  "key24": "2eap4NjnbajgQjxzpU36YZpQ6WzgPiEBu8MoRrZFD7ssd7ZRjCoHneJPvHmLvLigKPBwrthL33J2uLbVHK7ogRQj",
  "key25": "56dLrXUEUCnjaCMqXmmgRCG4qZsVWc7i8ET2Wm8oKGPZ2CpWJgNewnNxEP8BfWWZZpogRfDW81YjK8Nxx3KmUUVq",
  "key26": "64xfPLeT8jjD72Ythsgrn2rjiGxQVas8s9sKdaQ23yjxe6pKFB817m13TcUtzVYsqfhDXArC2g3jjBATX5icbE5K",
  "key27": "4WPuJBkpgUXSRU6G4WTQvc6XPQBzoPcTBHErJbWpsZmtdSuzPWYw6M4yY73yFmSpuURQRwuuKdR8TnRLn719oQ7X",
  "key28": "36FDz8mLWZFPTd1N7j5jEwSB1qwpJEq8mYcFtJ2JsC2YZzxPoJMaK3eyv3gHXceaZj2hnvPZEESuK6HEcLKBoGy9",
  "key29": "29whf5JwogbZxLs8sjCYpACqAjQqg8Dxf1QKtuaQam7f48MuLussEWTfaQzWNXa5C7YkiuPAHQJF4j7fqJFrtum4",
  "key30": "4rn8vYoLk1DoesiofSBCMMpZJDtVZzp5ibhfFH85tfrmjG5P2tidzSL19jqM7VMXHfCY8PWWanYvwhbKyH4zTodR",
  "key31": "3DX7fYi5Fb32ahdvq2ZkDY6sknKPR3b7KYEBi7X7hES6Q8asbZE8q3G7veGrjJv1GX4rKDbBed44M1o9qWSn5USF",
  "key32": "49f5E2f86WEPw7ezQ61zpPfi1yXFNKzWbpRVZ7bJUZWydrMiC7KaWJZ6bf1c65QBL34YWymf9KctXF6sDtPvsZ1E",
  "key33": "3CLRsFcQDzSssQzSnvHn3XLQyfypPWGqj74j5E1W7ARamU6Um1Lx6SdzufMZQe7P9Tuqs9j5RzPbcPmzCgtMSzVn",
  "key34": "3WxmcXwaM2U2uutcuUM2bYNfnQH7UJLcDCq5nZiy2jVDgaEjFfcTKufKnF7GAwPPTh9oe6npB5wNs3Hvaap8Wh2n"
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
