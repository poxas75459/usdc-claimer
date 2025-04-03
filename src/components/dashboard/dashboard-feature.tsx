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
    "3nKqXuf8oimoNQyyXpro65TCTBuLc5cSYHZG1efVcNy8Wsq8MurMeW3n7igM1DC24a96HQbht48RJz51Lkc3V5pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A9HKfTMSzbzhBUfVhQM7g2d6LYbwm13MDmji1EoW9DGckUPgeUNczhLPpgBWMnZrdWWMb6VSfiVYiz6hKFcN8gM",
  "key1": "51yfBqS1HnaDWSS4DPcEpEPFEVixuazgUfRtT947Jp57NjCsXAhrVD7jw15FgcShKkJpZLAGdyp2nLdoSjUab2H6",
  "key2": "5kQ4B5wswXS4Y7suPGW6DMfc1AmBEHx4YFKydaCfwisxCRB3FpsJnQYea2vsTt5HnZLXCu6TP7rBK2BkEoSpbrZk",
  "key3": "BGvNkrEhBXqAhytN9NSUmFzvC3E5aQcJNHMX4CB3zc9AmTBcXBLt1uzPU6Z6CmLzdnipvWggNFiBWqiVtyYn4nc",
  "key4": "5S7jq1zYQRQebTyFnx2kstL9jRijzyaW5YoCuvomizsTmqD3RGqH1mH7NsY8KHyft65T9BupqK1h3c6RRJAorJiQ",
  "key5": "3bZiZ1G6iJThpxeMWHp6Cc4XVG3BA2TdRjNC5rfuHDtYhKiAg7WF6JGhzyanxZoBgUqBRAaHEFR9wGotMQFCZEKm",
  "key6": "2GGVbJZWDEQ7xMSNDVsfcS8vkouzwoH1ZvaE4KWy5LtREPFNgMJ9hXvtZjht3GveQjzHGUSMUG8BBN1MVgRmufHt",
  "key7": "2vL8n1HV5oxh4QqcuoNozcNFJar6oDGM5x5JTZuRui3UKoyRpUUJXJHofDV4D7VBejTJpZm1GtHTJNTvNcmRhYLH",
  "key8": "2vGeRHHvZbt8PKDuPifueTyBKvRVqSmw7cgsf2mYYoLUQWq8xudnRjV2deKJfJDwqG4FT1mAiuFCaQiW7ThDLJqe",
  "key9": "2XNq8E7dSNd13fEpAdfUKeBpYXiPPNz9q1uPJjx9iU9ut57whXLmtdB3D6mfq6zfaim86pZGg4p5qGaLJxHW3FkR",
  "key10": "4jjmXDQiecwSVCK17R1ZaC7JXiwPmc9qkEcYjRyattjTt1Rx3bXgVtZoPcHk88utc2UUQBdvapZHyFEZpG54HVax",
  "key11": "UaGPqk7ShecxkRtnj65RTniktj9knPkrkL9AdeZSRhwdnhHtuiEMiCAFB1MW39YMUwJotpAJWV37saZ5Q9rB6rb",
  "key12": "37xKHQosCvEp2M6DiNH5Y5ZeS8uWQSEqLNV9y7RcMf4EEFhLt4rXo3DT63uwLEzR7Fwu7dNHKbw1yeMbrhTZGmLf",
  "key13": "ANhP6xXnVicwe1aeFvz2dvD6w6deh2j4eqxAcReey5AQVRazQ4oGmPhjczmaBJRCxAJr2xo4pXM5NDPh4yLD3NT",
  "key14": "54tPq42fzjngwaDH571JEbeDABB8RpQgTvpv5nUMjXrDxWh9XKWtJvJervsXhsqmZJGEMB4oWi1Rvz7DJCCLMJjc",
  "key15": "48FDChdQQ9N5hUxQa6KWMW13sDUrmXaVnS8dpnDNu3yz5g48cuAFjaYv4nb4Ue6jzwX1ThVGDYfynd8Lm5Jwbcpm",
  "key16": "2LRiYTkoZrnPu5UxErsFAnUUFjTE2KonsB38ck9KJSnzgN3yxxa2w6NjfeacbuHvPEnT85AUVPRD2c9q1dWnPswT",
  "key17": "4m6nogtFTAZKtH3XGjcFunvpbgRJQRN4rgkwQgkRj1UPNb3EBsttZcG8zGPvtW7hLRq6sizgaSGC75wNmFeHiXAY",
  "key18": "5YqjWUyVL6Ux8G28u8XaaABpdaxbJQire7v5hp9GhQmeHQ57iDHf6JDuhAX8xzpSSVEr5Kk1VrHT2nyUeQ5rawNC",
  "key19": "5vagGKEQp3aGbynSQAYRbD9myQXRkyfRNUB1cC5vsPr6EQsyWwnXUpVjFCtJpCHz9pAvWiaiWtahjWrnaAG3xyHm",
  "key20": "3voPKrcmqEoqeQ4yZsGjMZqZefwfQ1NhHV65YHYtT21dJaBdvSFvFqMuwzEP7PE1RHVYmUfEEWgpK5Lvz4yYW5XV",
  "key21": "2ToaBL42Gxm24r2X8wfVTXC9bbRLMcC6NpfUmdWUi7UNW3m8qXMdkxhQyaGL9wCzgwQvbfupiLd72PqhwsYRVVrs",
  "key22": "4WJhBKTffqadiuzZoSpf2c1gLtmXM47ZK49W7qTietx7xeguDYD2EfYojyVXsRoMjMewAKLpibYjtnkvwK7DtwxY",
  "key23": "3a1JfieUJUbKq2fuMS6QvKiuHnMAZc3vcSxzfzvNKSTzpAEupkqpVguRThofwfBeFs6HUiiNyXRzWxVhhNixQbYr",
  "key24": "25Eq6Eb6voyjNMKMV3n2b2foVwphCeHHtGdtusDRb93JEtr5xySeHmMx9nvdKbZxpsYpCjo425rZdb12uQwTuu4z",
  "key25": "9aTJxsCEEyHwbcHGeNJQJTPnGntyK7iqhsTb42iSi61b8tzTvqQqZNhVRRKfWf4Vjpy5TDG31D5ZC65Cq9RS5ag",
  "key26": "52s6Q4gv75CZvPouNESTvaUv7uJkem5egMjt5fejFvo9bR2JhnV7iWAUsuAC1rnGAjnZNLhK5AMHWi5mjxBs7Lbq",
  "key27": "2kGeHoq3md68P1p9qG3mm5JcGeMKAwDAj1BRqk9LKAU7XSyXvwiCc9gGGN5maTqayQr44DTWeL5Vj5xFG1cJKYb7",
  "key28": "4uPXrVzCFYXaXFBJy28VGSatMppp5XWkuM8tbDQiK1pgNDRF6EtdtDLco7QHRqhXfb8uiGouycDvqUwF9HSoreFq",
  "key29": "3CxkC3rXRVQLqEsRf9AABmU5pBXN9chJynRAXNVQ3mTMzefWYPA2beMwx3GcppSaeLNa7RqrjzQr8XXbQAHMeYyj",
  "key30": "5UoCBz3egR3d3MVwqrJVH6Lg3fMTGEEvcnzidYvPYBMxqv5ah8T699xgKXwAAPCsjsYChNZathgaXzihauGcW9Mq",
  "key31": "UmyPa8Tq3sSDPyu9LUBs8bNmFU3mN4odZYBy7DYSAZjC4ExRDJCGWnV7dEbHYcp24rS5cMt4vuugBuvaVfCSRh7",
  "key32": "XusFNxCWGMjMhEQtAkjDCJfAgbzpieTfVb5foBncHBnESsn8MAk9mvspV63V8qQVawGHHBdECB5S9snELLQLDkV",
  "key33": "A1cp39Y75kyviTYqNPehxq2yyTuUwqCGCXe28VJuncLWt6cbxMLNSbkCiHgmKaKuRbKX6mc8PPoQxmhxtqNjS4G",
  "key34": "4KXT5uz3jNAwPDkzsaLVu44RmSdHqf6W4UJC7CihTQatE3hro2YTvYE6wLCMEA5avVAXSnqb7xcjhajkSEr6c5PR",
  "key35": "TXMeni9ZFZUtJZhF618xYt8kuaEqWUjNhweiXFspUF86SBArDtjfFLbZXe9UgX1TpQ6wECZqQRLaLqCsnN52rGc",
  "key36": "jh5rfeWpcYCY2bk3muPudb2VotwxaBZVJZK1xbWH1VxoH7PC7YezdQ7RQ8qHLCZTkTsyxWDCjHMCf4zLtu5fJQq",
  "key37": "5Mns1wiUgXdy3LgR7YU9nubqG4u1Vn6KMAv6H2kfBpxJNA1V683p2NAXTEEJXmRMmF2BwquEvshFrqAVaqwfdJio",
  "key38": "3deVh4xXigwQbai8DPKwuHdrugS7DxfV8oXKpTWMSzVBgCgpKNkNXKCGkPDVmFHfmS2MX1pGdmTJz52Uv4oZcx5q",
  "key39": "4bPkDX6ADGaGUve9ziv3UNjyFRm2JjVNJaruFvZaVd6T4265o3MNxzkRfr3K5HVF4Kn6xCXHfbTsdQRT68mhJN9F",
  "key40": "3RMDB82xAqUP1RADGozs4qxSciqtwq9Ww3Wu2fPNWpL5hqqwYiibcMpX114c3Jjq2V3f9ooZuDgXvfxagqfsP1RT",
  "key41": "4cDXGxYwEPaAmvAeTt3Y1pjfLhRziRaQcvrtDs4LRPNgZV9QgQXgB3YhDZYoMchQCrxtvPVwoRLFdihBtnqXRagn",
  "key42": "iFv8GvnTA6p9Nspd8aa6vH9gkuzHcMoSooPJGRmsXFnEZCiLDWhzrsLChodGZ7jvxEjxe2QTxXgrj2ntKqRBSsP",
  "key43": "51qzYvMFhkv6ZN8PnVy1qTmAtJ4mQt6WULqDedzKi9JMyKFU5SrmgsisSGc7HhVtDtVe4ibM8U7bTzrL6QbtoMGJ",
  "key44": "45suHoYBWEwLc97DBziC9otbCNZbGjzmuFjFZtfzXar61inSkAPjm4tCogFTzpn2CgippHsLvJXNnER8rnGuKEyn",
  "key45": "2pDgpXrr7UaxdTUqrVHPjGmqv7ht5CCxu2tKfeezb2LeE4xwaPCY6gSopfRvJ9ptUHhS7Ftm4ZKwCVwmjsty4gTL"
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
