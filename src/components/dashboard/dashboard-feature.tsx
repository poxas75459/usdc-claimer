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
    "48wjBxE3qRdhs32BwSzHtayBeCfK45gQUSkYfn8yNkBHk5h54SEwQKNZNW4y1wUNxAARvVvP9hi5VtwZbZQqw85i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PjXZdy4jw8nXtnZvpwo9M24GKtXY5pkKGY81RxtfDPWFW4XF7ATJGWdkU9NnA5REbdZXP5pDRJ7XwSdwqtmduR8",
  "key1": "2ZaYMteYWkagnRBqmKXUJcCPu4KZeE5CPRgMoZosr1BVNTsWA49hyMoPsY35WQbVxh7HX8Xi9jzqBzPPb7Wh7si7",
  "key2": "cc4ybUEj32apmY9qatysFip4P5fLp4cSJyQ7jXeUvjuAWTt9ZjZUP7PfQZyppsYjnkEi2xxHd7NjStReHiVujsA",
  "key3": "CHdQdh1Asq6mqiof3wkmmvRjsiNSezVH2Gw84bkGqYqqQtsUbsyhZLbBg99Rigfih9QtjCxB51GH6jDkniYNeTc",
  "key4": "32rQqucFkWvf7GhUqa42Ms3WpVMMAoBgv8g2ozGyr3wR7ugsrDzJrrW2oK9W3EameJcMadETb4u2VGE2h8A9k6fm",
  "key5": "67hsSu5mGgQ2bRnsRet7bGppV3z7Msfc6WYi9YgxsPEFydrB9BEz4wkGQuP6yB4CQzczdbtry3fKDN2DudAWfgJ",
  "key6": "5eCHpGEGZxjfswU1K5ovuftZnaY763ogae5Q9ixDzwcbyu11tfEvLtgBAN9QQpQLfTGQfJyDbzT3V7D2JBu5Q8nA",
  "key7": "2XTF7VtZino6iGF24KrHCfTe6n1WA4XR3KXCN5tXECnJAdAVBNdjZ5vyqHmXtcvzq39no6xhc9Sn5fuZiyb9oaTU",
  "key8": "xUejHUs7HBZBoD39eF294n9Qgh8fCKieZvSaQa5zZkQtyCHdxyyPS4Ujh42Msa1mWuLK5U4MSkosAPvDL1Md7bL",
  "key9": "3UEbqvP3tNHBZ6k7xYLLYsj33GZg1Jb9QsseAqHz3QZvhehNM41DZDbFB6b4qeGx5VeFkj663xEWcS24Qh5ECU5r",
  "key10": "5s21HjWTw5x9jFVEjczJ4awv9j5nCx8JF9tD17R7iMVL1jzZ5zSfPm85czyAXStSCgJFQevHToLAh4sqQznMtMyX",
  "key11": "3QGXWQLmeT44RrtoaWW9ERXbGa47HVShfrdvVfjebY34pZ2JKWykQCsKyw3mtWtUtqxUJjkdeQs8GxzHzuW8J9xB",
  "key12": "324XRcmNxT2cwKy88Vr3SRV8WLeFN5k1kPnGzaDP2WitRKft8JCcN9PAqWoBFbyqbunahKKHqt2JVs2AYWduUV5L",
  "key13": "4SsSQp8Z35t2AoYyZ63rPM6vmxCwSL9UhHB7VkQ3AuoskEMdwEmnacvhDrR6WmqXFXGMoGV7q1917YSP8yAfPDc8",
  "key14": "MCTra3bJT2FB3ao4WhY3GEFPn789ev2GEVdTigoaJcMrSidvah4SHjpRnntThtnJZDQwAfGYQ8JRXEC43BjDbnQ",
  "key15": "3KnLPzQTfFo8Z2knBMt451bx1PsqJex2Uhte1zXuMREjaqSKf2UT8NJUy594LBerrW3Efsha9UHW8dz9b5jBGj1S",
  "key16": "5zEZgi4CuncTKeuv5en7eBrCigPtsraGo8NxBQN1AHsnSbnyBpzMNXR2t5fWs37iLEykRiVcTjALz8fz3jCYCk9H",
  "key17": "4p1KJaypyYtKkLssVfCq9FYBK45enesK15iDy9xVR8amg8eheXFd87jPa1yG1Ma5ec3tqo8odbsupePRXsfjAQbM",
  "key18": "5jCjZ1RzhkMCPDXBVVLyrawMs3Djr1y9zDYAX5DCDDTNKkzPAjcVz6oWJ1EpLsg7i7GaEi7BNf8TyL8BGHmsiLTE",
  "key19": "4JrNHd8rrB15PWE66hSw7UmP4xkQuKCyjuBUcePeSt6Q9k3H5ZnhZYp1tNZdnKt38LuYzfCknAABdCiB18G6JE3t",
  "key20": "5uBVRJN3f2mCuEbftoHr4sLyWgXKZJhbqhYL2h7J4XBCWx22vXNaN8HuLZXZ4gt5vF58cSb1oV4zWdREtnUrtUvy",
  "key21": "XZNtsVZHrCthDy2GfskEpA9wR8wmrGsB1FzK7pSrfTnb38Gfpqa53nCX4Y4rmFMAJdPLModghS9MUcLKQUQtkCP",
  "key22": "2i8MGqBuF3gwLZ4c7u9yGoHVpe34kLrwiSLKEVautnqAtQso8Xr5tjgEmJggkWEzBBPbXxcpsnaifKD44jbSxvsi",
  "key23": "4pUmTMg9tJwwXoNciaxfhdDJhHviYupMo7emMcZDMYtzPnTw3aXH4MwMG35iMMGgER2Yx9eYmtdFqVsDxc1qNK12",
  "key24": "4BeiqqpaAfkf9kdZEmCxEmjfo86RBCwdDvcCv6DPyAKFCwie535srxRPqhFoioc5rEHa3QgdjhaNKHRe9CBvqDkP",
  "key25": "2rpnxnxQ615hzDt2Zw5DiSaZWSh1YwgxRFwYZZ4CAF7e15iuBLbpKqPhDTboRwdM9i7ccJeKdWGD9oKNfGwCfitd",
  "key26": "4fK74cLYQg6K3HxA8NtsLijooVyEdMscotAJJRarizDXecgFfJ9AhqiLiFDQDtsTB14Td9zW5caovVGYfuUAAdj5",
  "key27": "4wkkZsEsSRPrcwHeKcVG9x7DA1sJKd8zyKbrJ9dHaRtohs6mumcBLAWJg8kiW3wGzoSowmRVYvPxyH4JgeEs5SBL",
  "key28": "5Sq487rzNtgdhK2kV6NEoyb28qrYLRyLCTT2wWP2tBXHqwbGXtUFNYrwXhEuZy7XAC58BPXV9LxYfTyg92yQ7knp",
  "key29": "5MUe5zbBnF5xa19aPefqH7AbV3RAwG7QAFrKyH4kYwxzmXNxXhLzJgjeP2z6KKfu38nNfWV97SKmW2njzq8TFbEr"
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
