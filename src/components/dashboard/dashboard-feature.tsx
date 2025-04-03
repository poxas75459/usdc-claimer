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
    "59wkSy2Rq8HjqYHgYcoZ7sx9mjndESEdgnZBjnVMh8rUeRna9JdY36HSF93uZvkW5u9SnHKe1LGuD6EhcJYhAsBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TaRPuKNnnD1Atk1Y1RyxZEoqeQL3DeNnchrsnht6bhguJb4P7WrmuSjHciH7oSKbbcYn9d94EKCPABx26mJi8Hh",
  "key1": "EqGZSYaeER9gDWKvV7VH2NyRQsdsyzWebN6syYrmGWbVKFaYTLiMMg5QUgYS6gWzPsWtBCd7WufmrjTmrpE7sEM",
  "key2": "26W9i3PBKfn7CynCxMfftAT2zHprJb6bunCRjDgEKLVJf7GhpAH9a4Z79ES2BmyyqonwQEfMQABSRs3uuegCVfxk",
  "key3": "TD45KZoTkALHcNdoAURAZnLDCh69JeGPE2CM9XGRdBxwH18QskCYzkJHmWBpT22SpBEjLdd6WRqyofVA9N5sgT5",
  "key4": "4dk82UwmJcrCEaHs1TD2NhAR57sKjrfmSWYSTDoR44TjoeBQNpEL8FBWVt4qopZb3vGtyghYybQ7jZ4qSADM1zkh",
  "key5": "3dBftxyEcuC8yssxvZK6yeHi7XWixusduZaca1cEaVgfs1y4p1Snq4gZLEb3uoWVumfcQEKo4UJJ9S58BZhL9nR1",
  "key6": "5ppniEE16W1doJUmQneK2RzyZukbWNaNH2x43JShomrFyykM9hHeN1HVnDbuyzk5AcJT7Fr3ceUNmtsgkY812YkW",
  "key7": "2MBjR1gPnBMeQ6uz6U5ng5RbtzhmwCtGwz7Z5biW1w75pAZnn6gXnT3BD6MHBwAaoKXDt7NjZWczgKNiJ7c6tjBL",
  "key8": "3ZXmg42KkhxBNiu5xmmtjC7D7ADzxCgpEb9X2gXk36yVsVESgcPLEBUrJHih94irumkbVYXrYaHHAbpYR5HgkJqG",
  "key9": "5fEuMCMzYb5cmP8oQwjNKseGqaZWx6X6duMjYoBajVA4D3U95fRe3Lo74JzvpBG6f4UJHngq9DbawBCgvyb2fJyH",
  "key10": "2WusepQcf9J3L1htZQue8QVDPzFopuwtXXv6z6NtmCEXut2ERZbEEnvc9o5sMuE9Y5EGrt9KetQiddrnpvjaydAz",
  "key11": "2rnqT8R5MdzZxUWR4QkorebTiXQ6R4tAtspSFv8Lt6cSYZ9Kwqgc5BiW11xoPvLWhBn9SFVJzQHWm5qZv8YxWFa3",
  "key12": "TrqEyLth1y7kyanxWMhq7hr6S8zYhZ2eF7VpNgN4sEDSzkV1WRegm8DfjTarXAQsu7Zja5jmyND8uB2zCAbanrq",
  "key13": "4ucXXgyJveV8noUFnHX9VcQWpk7rb5ubDmGY8NC8raWToKiRtfFJDsAr88JxDiCqHruSVTGzUshfHcV3QcP188XA",
  "key14": "3ae8P62WqaMoowjPktN15zJgjwqCn7VVBbRfQZMQNPWtWUJVpLLp2Lo29i1vuEfm37PMYfASc8i6fByptqrQFY5P",
  "key15": "5xcjEaL8NbAp1X7BGYdaLEwPuew6CMPqYr4JQWrfancU2DcFNYi16nP6SiWbqqycQ26E15qUUj3HnZuzad7qVvnn",
  "key16": "y1aydn5UtVSukgnEgEBzMU7NFxX5SfgnBKQDmeD996tUvZe6RokjC8LjAAG8M5LCT2bgo1HD39BUiw7HVuGZTzH",
  "key17": "2ceZV3nnmHGo1kZsH7NGEm8VCy2dKv3K8SRW46ngH3oxMgzfiwHP7vbyiuiggof58iZ4tLsADiDYmTCH57D5Y7WP",
  "key18": "CFo9dvvgiQZjZgt393siH9EiFPCPZECq69YQUFYLZYpKt2rT1rJpDGd6zL8uqNwVMidAG9ywj7sG7nPmVyRfyaA",
  "key19": "33y6ofpGCuMFmuffMXrKyUW7e3rAGe7cQpVbCdR8WbD86YwL2qjkE4JL9TViQr1FHyvXFfeBmVikhu78ui1jPekH",
  "key20": "3XWTiuR2x2Jmbgf9RudXzcDZQGFCPEmRZ8dPLPiDZanbUTrUho5soxyKAqYa3FUhzZGpeWDVwpxiS5oumVeQfF9f",
  "key21": "U4SyRa3MTZUb5y8ZBENcbhuAjPxsoLQpjcgJ7qhArHTMGw1eMBtQwkGS8TyZymtLfwoPmnoAkjTHbWjws4H9U5j",
  "key22": "4MVhu7CiwHkuvNuT4wc3MtwEpHmh8BunKqJZMLqqdGE6Ae78ThmKaQWTWh8m5yuAApA48ohLe2eET5HxEuNvXpDr",
  "key23": "5ccV5YhDmTnikjXyqxznwoNPeKzah6FzKrZWvtV6uu6pywDFwf1FUc5Yb6gydiDg7Cumk2eqXgwn23hyuEdaGAGq",
  "key24": "HoJCov7pcAeN3PchzUscKDbMWX14NeinL4kcJiEfQNp2suWVkCNqRe5mfuMPJPsnDsGg6iCpFRnAFPzW1kFJ2oe",
  "key25": "XHSeAV61KwJQdhg5KGEZzXggDtUEKX7gFVZHnRtC6akyAunLmTPi7xNDemQ8moA49cMYV4u4GNgRfjUfULF3jLw",
  "key26": "8c1mh4zkBSbga7MLoqx3ZbJVhjhukyu24EnZhXxSWKhrSJ6gbokLsUCC9MWW16fJ7S5gomoZFGXaFHSGkKaCXfk",
  "key27": "2EH593mcCDgZWSh2qrVC9MNnBkA7ooPpXrCJRbDuz4o6K4kVJ3PpoG4qm254d5P9wFNGE6tsx7ZV9aTqyWVNiiPe",
  "key28": "4QXku28zFLxkfZqkrWQFDWAtDhfeURZXoiqAqBhf5iPmtqLWKdMuvNqEXEZ2CscnfYxNFCxtnJHamFSDewus2ELr",
  "key29": "4cueAo57AbSES7hJF2R4KZbP5K5MCFnXPXvg95jRsgaXLqcys2hYvwMLArmb1jbgWuEvRdsJesCqjec6h2toH9kJ",
  "key30": "4w6yQMqZsHjG7Lyi3yzcia2muADP4TNC4czFkV1ntzZnc3BHx1z5VT4vPwPv7GAQ7gEuwkkDj2w47AQcs5d1bqwi",
  "key31": "21gmos2HFC7NbtH9ppYFdrQzJEav4jiiRAxHyEJysfim4bY8sDzYXoyumnnsf4EQ2GvMzjmG7sxPnd6vyrefDPnn",
  "key32": "2ChevemwEq2Jn4oKsRbonF6FbajUkdrm1cjG7ykaDktc8rX8BHuATb5T8X6ZM2UxTzW1CcCyYmTWkfg2pQa3eQnY",
  "key33": "2PGwxaaSVNikCJ98byPCJVVESrwWiW4PciDbPunkjrnNyQdVNm1D41SrB184p7LfVtUxmQxigQxaEdhEZ8ri4Aok",
  "key34": "2oF6tNdaDa6TiA8JVhCtJNNEeco2mtHnxL9c9UUMBxU6sieGuDmPvJnL8noHcy6VP61CqdcedyrwuzdCsBLdbNeY",
  "key35": "2MyfFSLeaqiRGN9kUfMDPqn5DAZzh7bHjje6RnEosBgaUjEyLizfZWZ4d8YZPoBUas7NUXJavZzAdRqr8VkQL5Gs",
  "key36": "2BgQzG1BQy4FpxMw3oBd5Eu4PqQ9XoBLpcUhQ1dim8hMb6k6WfFEi36jqN7kcGrXL57eHGY2sVHzrgBRFkhyhQWj",
  "key37": "2rW4zDEmqxGiGbj7GHqkeshq4AYhX3qc68vMw82Ca8kyB5ruJxHdNQUGftYRXfRdTteoCJR3nTe5LpNVVWHvuhJY",
  "key38": "mDzh18dge7ZnFuW2dzokvnSjuw2wj769MxRcUVCdDYVrAK7Mw6KuYUYyPxDCpz4wMKKJGoLVoNKLj5g16FCYTaW",
  "key39": "2wWoH68d7APrABeRvfvLm7N1ghnDotkLvfTiHLUwDisT3DZHWfXXxgouL31Kg4CqRyaNhN87dUK4XNPdrdPs6Qae",
  "key40": "2WkHKY4qxGSSoxTbDFLPxyd329cm7cyiB286huCFKnRwSUXZZbEeVLJr34nVZfLn725CB82kjHYcri4tiV4ByegA",
  "key41": "5jJg8QRqEPqcEP29fVY4mUBTP5YXdQFY3ZbFSxT2ghQ2gdfWaoqsXbUNKXvhk3JEGD5zDStinvwnfZktZnZwKFD3",
  "key42": "5TwnSz3DuX4ydpYGWha2JuWKR6pw2tNahuj93AUn9Mmi9a8nwLPB4SnHrMTqPAzmZzQf3oPNon3omYrcUSxTbBv5",
  "key43": "3UimKs3RJ6k8bVUp3C9ipD3K19X5zBoMiCDM4dqMmZKtbmBm62hcggqKVGs7T2DJE9aWd1K6j2hqxdn719mxN6Wo",
  "key44": "5RBZGy1G35xKC7cEX2A3auLbeDfyCaqdLiYjrc3JHN7fvgqSA9X2oBLkarH8TRJnTRkeVSTghh8ArzvVgaQUfiJ",
  "key45": "3BaTT6CM48e36GBYGB6qdd5hTpHuE41Vpp6JjanQ4K7rSe71oeo7tabyD2zrW6Rq152zinziJqyJh17dXiKyYcNJ",
  "key46": "2fhD4txJgXuApi5pu5x5Bym6FpPYwohw5LnEPfyuZj4r6Ju2E8XTyG3uF1vtd9ctMkKJKKvzGjGobypgtJ57So5m",
  "key47": "L4K4Z6du36sY3ifNDA8CJUYrRmw7yDhSPz7Kzj7P5di4CTBjQ734NQ2giVwbSgbqjQsrAP74X1qrGFWDriETdkU",
  "key48": "5tsDHuTGJM1a1kCLoGPXvDyRpqAYNPp3yNrtaAT4mBQAXqw4qLRxfFEKYR7TNbBVQXCLPKSGbJSZMAN35WrWSBmh"
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
