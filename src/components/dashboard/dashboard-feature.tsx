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
    "53vEYNyi9ogxi84m6MGVJLvHcMRCcLg9uzpoyue8nT3s6HnegPSpANtXVyzLaBLwyqSoFNCLwJpgnsEEJ8BY6yTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dSStkAfC2DDJuk5rz5sN5VmkKYfs38hQ4M93xwNNP3wDS81MKpYfs8oua7gqdmuJSuH4sgscexKH5c8sciNkoMK",
  "key1": "2bECjnBxm6V1o2GKqSwU5LGygEL9W65DF99CZmLuBPaxeesHDdjhbnD9LLp7eXwEXwxMSCN2B6JmTv8uQQKGSse9",
  "key2": "3dtgN64vYW2tjQRPR8R6V3S8nuLrXo3vJ3oqywvunvjJN9mVvPWC4cUu2s9fC8ZuWSx6kQGpPebL1qKFJ2tCudwQ",
  "key3": "5NvKr4NLBbhVcy5vTiTC6tt9KD8nC23sCwPvF24Umeipe6EeDDeD1jf2zyvs6zZaJmApnupTwiVXegU46Nsc2rP8",
  "key4": "2n3cU1XdyigK5gFEDhBZfVaXdv8C5gtNmf93Lm5VRLFFKWGeDVv41YDzsHzieLxhYD32KqfRG6RKesvvCiSA4CoP",
  "key5": "2gZm5cNQmvbtd8UiAkeP4Bw5prQJ4FixpUeJvWtQc7hKAqRmpwfcZr1d3wC19hvZXKjtLrPMLBKjQBNmTxRb87wY",
  "key6": "34Uxih8cL7YEEitHPaXzDZDGUL86bqEsys2W7nK8rCooaEasTLcsCgZdRiPh81f5GiBHS9eAZt1diZXFXw9jp8NT",
  "key7": "629WDydUDZJSmKbp2ty47dzC9dtY12m65qcFzJ3J4p6d4XmTb6UMQraM1GPAY56jhFW1Ei9zot5ucZyktTAiBxvG",
  "key8": "AKhuxt6iwAUDWXEbczoB4ZDMPHuM6yuE1p36ahZRh2kD9qtNKrsN1Mo5rQCgJcABR1VZErhqRpJ1UnoYN16aQfV",
  "key9": "5mZDJEWxC9R9wuzbZBsuu2CbvgKBP3BEpk8NQCf2WQrqt9LKKjyaverBGtL5jPPKeUE1TGjvvkg1yg3ikGiZaZxS",
  "key10": "R2y1pomViHRZt7PHekF8mZyp2wDdkX46Vcq5yh4CxHb9gfzcMdk57zrKvtyATvWzPk9A4wUQZUET9n7EELRDhXU",
  "key11": "36Rm8rSH7Pt3Gvt5sND2kgKd6atkZS1QEUKC1sQBwBHoeLAfm2iZswXHEBqcReENG83pjAqYer2k7EgPvkyXtJQb",
  "key12": "3bCrS9Ci3fB4z2Gk6YWUKsL98QjUQ7eHnT4Fag5sWisGNikMxcnnYGQSLa2s39UxPUK2s3Zz783fveZmhG26ZZgK",
  "key13": "36HD5BcUqFheRCy36jq92qS3DUjEkYYCe23gvbdEASwSn8QXprS3KFcnA1BibX7Rm6SU6TSFrqkXTaRGU62LQEXy",
  "key14": "2by3o8dPdSAZydyXnAHEpEP1VNKMuUGhJA26wjWwXxd1kbAGBbLiw939Fzk2iesZq6pZB3sQchoLgNjMWa5ff23y",
  "key15": "pZFnSo2EGCReBhHXUpsWnSUdSGqSNkyXQsDRCSEYzZpntoyTRRCWQyJC1H2hdK227iJVUxabeoaoQPP58XmeNm3",
  "key16": "mwEvsjkihTbSfa5sXsmdApwep2ybSRFApJvncfG9J3pEduKWn7JiVBiY2k6zp3nzZUeZFC6DjTLKPzEzaUXAEJ3",
  "key17": "bLpjBKXx7tUtR8exeCqHMJ6AJjfL39AyoLB3gWJthPk1uAGxsiqFV1FLYH47USMJaME6ZnJgCB8YhALjXJuqRpA",
  "key18": "qCHJUy5Vbbjxi38cWq7YyLUBbai4tT7JqE7sbtRmCNuqy9DRQYGtxwMPgjaX52krkkeJWv7AxoyZbZEtkCAgCyq",
  "key19": "8NWY6cFLC7USzhYM81Ac6v1qZ9RBsWKcrHSFn21Ypw2uiujrpJR8KxY3Vgi14CQcptBmzakiy8gQ9PceDJxvhDd",
  "key20": "47kBypgG9Q8F1geGNGg1LNXi5nsBg41xsR68KhPkGzKPT3dEE4fcf1SPoegYGk5z44Yt3NwxbEsSNdmZZkt2ogUE",
  "key21": "3q2bFem2qYuHerXXwCtTycs9rdrfwF4jA2M74iSmkinB5M5qwB6qup6jFHFHFYd8hH3sJqeXbhfvvZqeLLhe2RPT",
  "key22": "8DyAbqewoTq5MXE4HicgWSTsprt7AhWKfYFpMm7TeD3ZSGEY6HDux7JM1dNhnSSLnz7EaoW5BM9ygpHWGVeBQoQ",
  "key23": "3DyXsYcgx313VqCiemERT8CzueEzqkYr6ZjtcSakBA2CZ3bMe9rRkbRw8YBF1kxhLLT2dkccBM9HDmEUBXTVu8Mp",
  "key24": "dfcY1Pvbm6B767cYEffnnZsvGQHCXZnXJpXiihAbiq6yfiXrJ8dJx5sms1wU9zDdGwjU7AsbktwjYAwNaBXzPUn",
  "key25": "4YUbT1FscRfxMernvVRCDDujHqXGEsVyir3uVpQfZA7XPS475jq7eaujtmG7ACMF7swWG95j72Jun97rzZiryedY",
  "key26": "2WY26dv7Z3XCGyJpEiMKQqFS8LRJrXasbzVBELtnt5xgaaQYphhR6ksb2Spxg1JwgR9HivSpJ3zAn3TCSEwJZT6q",
  "key27": "4LCZH58Th5DrbzV3DSpFbHAvwckXiK2zFkEn5wJXUHD2tHdJDJnAJ2NfUFKoGHteM5KbGuLdxAJPeFxUszkhcXhb",
  "key28": "3tsspGcHKFxfxHeF1uvtV3vXP1Sz6FQwCBWzn627PeoHU8zStyQvUp5m7b6LJ3jPhU9avNR4AX3kf1trEjsztr5f",
  "key29": "25gtcGSLFc2J4pNqJrnqU9LzH6j4TcHnLajVQSVzQHANf6ZLcjXAWZVSxxAE5HSvYRL6hEMvSUW4tJSBLaHPpY9w",
  "key30": "2AboDkMsSSrHLybSptz5UuCkQx8tHdpLdphdPSm6eHrjawJuQ1Q1Rd5xRxL4FbAzHoQugF2hv1PoajReV2JVUWTx",
  "key31": "3Z5f4L52aYLdf1HVmERnZ5xfmkr5QtTDuw2FmtQVgjzM13vBDwN6XMeeWvLeFzmyPTiHpYquEr57u6uqFqa9ArK6",
  "key32": "4EKBjCQKWUpsYtMpSFNfaMGnHfr135QJrUJJEhfUaq4rRRWu3Kv3HcbBNEjTDSWmfcV7VJmMobdkueqmWgTrM7NJ",
  "key33": "2KM2V7RbMFPMbXf8gZEpr6JskfdnU6JN38XEgDeGJWctGiSTTLaLK1PgoLQjq6mviAAiGdAgve8epHv5p9Zr5akD",
  "key34": "4DBE1ms3L71opaxhD4W5MK9YQqoSUgxQewJrS4U1fwY8k89yBPC4Jt1muhcCJBfKD7oAPVaTXMAJZzn8dTNuh9LW",
  "key35": "3zr7G8G3GLnFiUcC1Q73iZXKiasCjwiVkiev2zSvofzYUFPWMx2d3KLjoTev2Bw5T1V7Ae5qXPMw5rD7CCYm1R2c",
  "key36": "3FX8zTJtp8ojU2J987LwDigwukqu2f8px1gFFiEqhw71KrLvvHMczFV9sey7oihtcHp2gXwjm1kLjF85nRgr1GCK",
  "key37": "5Hng1XTsQTKxoesBHKNe2dX3PmEPuufoSSiHSzf8UWQ8D6WvQ48DDGBv5SgjBcEQFZHb3nnY44KA4LNzEv91pmM8",
  "key38": "5of8Us7MSAYRK4FwfdBA21akiGo65tgqEDtYuTjhus7apuuaRUtmmLa1YjToVx6ry18zCQrWPsDbUVGAr4Gh9inw",
  "key39": "5LGE7mLnfZh479DX2zBPs4aARA1QPWfBm67NNzeQbzN3wfLa4d2L1R4WaPQnuLs9jZpydJ1aAQkFyHt5McooXk1J",
  "key40": "3VnAXDKRpwxP6LW9p1bD5zAUGZR1mw78oT6YkJ85RXQBGJ6Xaotvn4HLUKZHReyPQ7jizQwS6EijX35JWpxnB3uZ",
  "key41": "22tr4shzh6hEDYjiuxwmFhMyWi4xMCG2Xgft8Z43qDsnPc7ttL9dpKPShwbSdVthUCrzRW5NH15mGHFm6FabFUui",
  "key42": "3kQxkM1VX1PauoVxjFGWCfebsyy82s8nhQZw9vYfDS4nfTz9UAFRikNKss2fbfK5p7VZWoEd3jTp1Jr11b7XzdBt",
  "key43": "3o6a2VrmGg7QE4kUtYe5eMh5bsRvahNVFakXWu2acgd7vW6RqPyLF9oCzg7hAMfoecEhyB2BdWDLCUXy6p2hdfxa",
  "key44": "5iFW1XvQmA2Ha8fh1wuYRDj4Jn7Vq2uJmFVevXwvx8i5DBL3txGnua1CPg6tFswoaugKX2gkczASwuS4imsaRuWb",
  "key45": "4R6MmJVQYRW1uBggeK6nNFqNukajCVwMJpmuwai8VkS8Ti7P9xkbLz2QeMvYZ7bA5ii2M2XVH9JqWCZCj7bSfkrr",
  "key46": "4NNmaZKJMJxSqXJfRAafHU2yQAh3huxCFQ685XjrxinXVZUKT59afb9e9tffX9t65gk4rkYMSmNK5ZdazmkryHLg",
  "key47": "2xGomTQrtJCWiCJVPgFiu8R78boN3KU2sypt3LBvRJfkXDp6buJtPqu6pqLTnyZWoqS6djhS2vb3tahaaN9aXK1e"
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
