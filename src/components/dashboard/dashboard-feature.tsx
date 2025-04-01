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
    "ck5etFPe9AXPczwWdibzzmijzC6GYDCYiMnsCqwfvdgojvcRL8jiSqj5ecGSyBYNS7QAXSuWqb3HFBFtbanvQs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qu8yEUb1D3toqYJg4oU6xpC2b5hzSFwH45KbTauDkSgbXtXtssssqkCwvRMvryGSjsrmYdZHUta6yhPxivDSfKd",
  "key1": "w22u6pev3qsm6GdtDEStWRtimzGd6d6JZ47XfhFmZPfmbsWAj93WCPMBJcj6TGf1b34j5CEtWsZqXFRqMw6jS5D",
  "key2": "nkLRMNM6z2LsPBX5VDTCATDyNXQ33Ztcvi6na86siR9xx4Hx9h4LGiTCnYTrazvp2wxQu8QJu9twnaRt9FQW7CR",
  "key3": "49VY4WPt7k75dhcLFjv6uP9JJu8DsoNBzoN8ueJRT7UYrJWVFrLJ5qy85cVS8f9jFngiEqWfPZf19C5cM1uAM1Q1",
  "key4": "s1bvjYzBiaPWmaAYvEMnv1UiWt3bvuvwTxiw9mbtTcJPKrG53F4hx3LXB2j7iZvBxFTzEnJU2egisXHH2koQ93i",
  "key5": "4TLcAyMGJtyT8uCNDzJuMb8Hzu74wx4WpzRGt9RZWh5V4RTcjoyA5BVwGuwnWARWCeA67fDvRcYzDJhPFw1Wx112",
  "key6": "2aSaghH87T4NpVarSajyVo7iwNvYBHYDXkCuBd5Ke6TCSn8RLCBLnXunsHK5pdUCEZRvUzKt2uP9jApsmLdv34Me",
  "key7": "26FAA7AiwvK7cEgj5oZe2BXTW3KEFRtyhSucAhszKKeZdE1SV8LyCQU2JX7CzxjMSjXZSj6du5cdj22BnE41W5Fx",
  "key8": "28hJFfRkTLXHSXsyCKzfYjF6dqkDHcDeHCriPbCW3H7gSqJ4NyaLrGaSvNQyFntcRsCGq5uAt3Kwy7hLj76vCBSf",
  "key9": "jBR7uj8XfVKemD4EGqp49uHsroWZ8JtHKJ5xyURbFkLyvc4L8Ywq1t82CofU13GZ8R6DNgZamkw9ASTMTTBtGWM",
  "key10": "57MLC4rJcMKeGKdyhLoDjFQtMLWxMiJ9C3LXgZwajiKZahwpQrkX9KFgi1Fehib8D1W8AKCzJJ9groLPaQaWZGk4",
  "key11": "HNm8T5LPKncpaNyxqYW9qrcSdYNbVH1wWy2jZVRP7ibwLhmZGytGHs8bsoUoBZJM7PQkrFrfXrX5B5WHLESWwPE",
  "key12": "3rHMfWqmZjbXpPMQQhvr7DspeL2YRpFmFKHLcPHhbTRGQNNqDVm8KJiYy5ET4oumMuSuj1Sa59cLwqoYjZQcdGwR",
  "key13": "2SCiPoHKRn5D4k44FynFCYETtVHV2bGva9sgTjNCcqHqQ1LaPpCR1xWa6w3JUsLmAJMJx8hy3UzriAPMBB9tZJMT",
  "key14": "5AyM94A6sAjAS53pKGC8MiurgsEWG8JQ6bFV9RQCCR2191LsKqLccQJeumPHBoSaFMav4mEmhHd8a846DEfbnU3r",
  "key15": "4fRZT5d9hJdAmfdrF4KAxRJKApNaPHD9k44FnLjNBw9GvUr4XgWNqfE3XwRU69WVP6u7cnHHTBB6qdeuWPpWpCr8",
  "key16": "QDGVVVabY4qjd9dGAjcRnMK519kCgskii12queQPkNhjBK3gghJmjbYgiLMaSqSrAjgSigw7mRy8VZQUCtT9VnS",
  "key17": "Q8u4epcco4FMkxj1A1h3CEL3RMbVuVQrqc7mb5qJeZMSL3oMEBohgorbUy72vofT8vr1PhNhp5psAApU7zaAyqz",
  "key18": "2FViePgmQLxZxCLP6b8wyGQauWD9pLiC8JtR5LAw9uAZtHsR25PCC6w1mn6YLBNkAm3u7qEwfqinTTjwmKnKb4uZ",
  "key19": "2hjNFDnCTY3HqvRervZPiQsuKL4sDDsj4fPo1sEfDrNzPpN6i5ZZ6mLFjU8bAPmR8cuVGZLcW1JgNHyys5CTRdPo",
  "key20": "3FL7hZztjG3qnG2mKwM1zQGCWXGBeM5Peb3YgTXPtaFnJ2WUS7J13GjPG6zoHSyM7wRNCDDXLfMgtnxrcZy5qcv7",
  "key21": "3NZVVMmmcn61VKurXZPwX6XhGgSdkvKYivegqy9HYkCkAEF87Fq1HEW4tVUWrNPv3bthZGvtv4RauTLGyn5oWvqv",
  "key22": "gJ6hMvKMBTfoSDxjyyUsfbmeovcZkmwgx8NipboFUz4itaQNLVqg9tZ2u7BTzd1otYum94R7VEpZjesagpVEtpU",
  "key23": "58d7Csg65cjvMy8qdkkJG3FF8GzqRNP14r2oWrbvGcbcZREjzDY8kK5f9khD1kpduotVVSNmfMARgEGBLaw9wivn",
  "key24": "4RD8UmXh8VfeCuUj16EmVGdqB18a5C1gcVquRyvGk1ZKqeow72FuVTMSkBvRrqvydtjSERPh4UiR8rCAZSLkrLwj",
  "key25": "8dCWkv2yscDqzCFLzNZvK5GMvZDP8UBwBydEdFwZQCwjVaSEz5AGqy4wP1S2531R7Y5jzjknGw6p1aUKHDDwt6U",
  "key26": "2dwRyDa6kN44ovHawdPJJATer5JeRz5fKKorQJBL8wk9LBUsRXbzpwvCvXhM6btZtNAw7rY8cXGHen3a9jDRQDCE",
  "key27": "5FPoPXy2wjLZHnU8M9RU3mwcVGN8pqvHRLhknVj3Y8YJCQMZhQPTChZPERKztFSBabhidcTp8Lvs4L87Uzhub54E",
  "key28": "4sdcpwXjJM8ZUfp2wFZTinVJ4qSiuLfMkQ3RSpcRMECv89pVwpj5vVooes3Qzvvpo4VzqLxRZf4FDAqRe3wL8Z3v",
  "key29": "5e6pyg9hxgqisx197apACYSvZFTCT249hsJYxcRNa9s93aEQC84CDnvXmSY5km5SDB7dFbwNWAVyY21d5CKfx5hF",
  "key30": "574Wgzzbcfnv68SPgLLRyTWDRWoC2ry8QRpVFkb2AXyRWjFXVS455C17Ry7jQ7aXsfydbaenN7V32YMJjep51r61",
  "key31": "Qwv42q2sZq8KZWbHRKPko24H3mvhTMDR43hmP5yMZD1hkWYchbCKUNKYCXdVAfrV4cbaS7QFUGkTj4KeYPrxaSw",
  "key32": "4P8gj1DfsHAmuDijr7B8iTX89WHSC7Fppz16codi8KKkCAXeX8fCgUBHZqyZfe6Hx5o5VodAh9QXWxpXKZ1KSoHe",
  "key33": "2vTsFF6sWV4jbTkofu7BSLzecfLRSDqLkx6EDynmu3vjD4wq2BTcxJfz2aG4WiRr1PbRoX7ePDnsi1vKg1SW9yyw",
  "key34": "54cPyNirAuwZsB7SGSn7xMJrBjC6xzARQQTeTN5G6WYq2Cg22YG5tT41jHxAuF4CMBsk2DGxsxWdSsYDRfLqjFcU",
  "key35": "5TZM2WD5AWgh3RGwwrwBig7wetouVK6T3CHgvj48moBp9ZSzY6CsGaSEqQcfEByaVcjJyF39Z8Y6F6Z3Qjg4ea5f",
  "key36": "4DS5fAcHAqXWWKj4ZFYbcXMEGUJQocjHk6NcvLqK46Y3f5qEiQ1H4XL8yEtscq5rRz8jGTmZdFYyn6h283mG8Pdb",
  "key37": "54HQkce37cTaTcCaV8jXzaupbfgyCqRGc9jvRsx748Zn5NtBjw3Etqd8Eb2hF4cZUppJBnTWXsGGLYRgVr2Mzny2",
  "key38": "2zuqS65363Cdpyvvqg7JrexVPEiwW3DRMxtZn27xPRhDt1NubRct9cXC16pBJ3Xd24oQEXeFUueY3W5mg1memmo1",
  "key39": "3twVY2hDBVHTabhwJWNEyuGqN2NGa1HTycVEDXmeogqkpiANL7cpSvPpuh3ZTpfnky1ERVcN6b2fPqdPgaUg4Ehg",
  "key40": "4S7MfFiG4mHShmCha7S195Ef6LCSyZ31utUeQAYkjW7mC49Cv6Kuh1KKJ29E2uJMUJEBWjNJJ18VGBmFiSuoHJDC",
  "key41": "4athzkszkFPGMoPy2WL1ZRQ6vD8L4mVYyFg8PmHk9AZ56EKCuLPPx5zDsbao4JvWchRTFL89XyA7wY8tdFRXpMEZ",
  "key42": "EVQDZcUsL1b1jssAKUPzbCbzoVNqM6sXyAD2jzjGmcqviK9BimtgxGnUzuaohfF7Yq2XNMbGdiDPV2M9bqCnsgT",
  "key43": "4E5Uj4ggwx1GYPtfj5bAACvFonSoTSFJQNgHSuNPg12UHKZ1WKZBPtoLEaAibCffXzDXJfEyn6RPQWRrAF6V9UWR",
  "key44": "5tanJY3MA1qBCuuiMosChvPD1fn6NbRSQVuRwo6v93XsoUY4fTvWuBtggMhBAc5D9iKVXUoRhS6tkjFTzNtYnCea"
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
