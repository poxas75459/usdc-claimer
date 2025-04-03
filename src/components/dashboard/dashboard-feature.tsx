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
    "5ghNg5ZQmrbRFbvaSiAkK2fsjkBYEJtxFmAekNZRNNwfyYTYS5TLgDjx6NAtKVqRXFtuy25nM6tG9h6X1nYCANDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2irZ8RZpe9L8dGFJg5nYmLWTDf8a2LpYxvBYpeCCtFuVPo78849Qp75LoS5ozpJhttnVr5ECNR44UQomFPJogcnT",
  "key1": "41wQATBcKFtbixjJ823sJakYVvv4c9pTEbnCKzzAKFBTsWpT7so8KGz6C3MKsogZFaHwuP6QcwCMqchJmDJWGoB",
  "key2": "39sJoqmzHUW6Z5FZB83bijyyfuCpYK2g6Yihjh8pELLcPQb7AwTHNWzTLkoSyxVB9eGog61SFJqb637FbVA29mAv",
  "key3": "4FTrMM2kAM7Pae3eEE53Whfu2h63xC7GKGr9hR9VUxdVA1QXFyjLFg7vhkPweDUkr4jFnPDCFkzLdvMa7TC6bZtA",
  "key4": "4m7DMqPYyzoNnYL8KQqrQxxgwd7VHCWTtqQte4FDXiiaBp5jCtJP1MD2jq1GnKQseQx5HxCxRpvYW4fHLsMk7KXG",
  "key5": "emuTN7UorQPa2pLryBL7uH2jmHeAeKzfhDZ7EioCtnbFfThLpEvBoy6FDFSDL7BfeFZhstE13RgarJMzVsD5zcR",
  "key6": "4dGcu9f33FUzb9ydNo2f9v7rGWxzHs7FbSABsheZziqJW1xZX2za2bNDeVSUiQgzXvd944c8WPPTsCa3ibvnLEyr",
  "key7": "3jseYxH4v85MPPSjLS4PA7Efyjp7siErGMT7dCkjecz5KArApvyKT9yPN4GG66EA3GoZcQrAi37ENuoNgLiezr4v",
  "key8": "AVuNYgrgpE4HWYRey5Xxxry96pbaUb2iABuircpD3v1ekPtGiUViExxLoiCZuspV3M22oxRUTjRRP5ri2KwBQnU",
  "key9": "2Acx6eohx7Q4TqmbwZZdg1crL5Cgkinw1sr6Vo2Q5MLB2Xo9fTLRahgsj8np7vWjPvCM341PiZhCJav1NrTrgsUG",
  "key10": "56xFXKJ7f72RvSyDu1wFifs9HDoCrHEbeva8rqAr4fnhDvZZyGAoiQ9mi77tA2yX8Ms2uLmLtr7hFaaFLNyn5NJb",
  "key11": "3TUm46fhLkGgfSPGq7EtvL658CGgVEWdtVDJcdtTNGg3WandBrDipvgjBw39vxFV8sijgJXLS7G6jEVe7rZ2fpgW",
  "key12": "MCCcSUCWCnoFPRfzUQjRXRkoeLxTQwF54mxYyn23sfA34jxQ6qGcZyQWNQjzdFcBLrWF4LTLxRBZNPj4X8azu6X",
  "key13": "j9juKBSsiKak3k6SJSmFqVKmgn2QThFHoPzobfe5LSP3sSJg7GA1jTs66ygPjkDoCUxrznM28RnUoaGjiorE5sN",
  "key14": "3bYysZxE57Hn1KD7LmsDLDLngUrAF2rjiipytY9Yuwhdhyxjj7oYVQ1bdsyWcaidmtenHccVSNWw6K1p6F4SuuFA",
  "key15": "2CsRW8Vn5neUSPU14yYJ8MtxvnkZveYQjN2m5kq5gZjEVEtmEDfGU2AVp1EqF8NVcH9jWF99WuS3Dijh59Bsn9xx",
  "key16": "4VYie6nZPuYx1kvMfr7PHJL8LvfHu7ojH3wo3bZUBbqbUtaCT627JW1jRiuoEEnTXmnm9ekxxZwjfi1RbTFVGqyB",
  "key17": "3ufgh8oxmtxa1heeeGhfR7v5MmM3m5iKKypYHdziBYxNigyRjKbxBNJg5iwJ4xYxEgysYRBrwXfFccpv11LGdfBZ",
  "key18": "4fdAKXYRZDYdx9NUb4Hx1Tnu9tQJykA95wVaf8KXZMUX7e7TSPFqA6Ee21KKKV615JhAiFm3Qe33CeWHRjKDSr7X",
  "key19": "5Huwc92iRbzWS79XRAJxrLsNwLer7W4JLMRDa5xaZB2PCMLB1EVC8y6ycDtSWJRBh8VFf6qR2ESLZmiJ1W1Fj6jw",
  "key20": "vYPm7fPFFeJBcLqpJWdGFQfWEbjcKBrqz9pn8WJeXkGZ6WHCWN6oPAWgp9he2VhQjVSzNGZ3K5JH53Bnpr39XL6",
  "key21": "3RpwGjVsVoQU39mZtT6saWWRjUa6v8dBo21jxx6utcp3WPyyWWsrXM6CVTQKxjGkLD5sAjgnwYfWv2eLwEJaGcjV",
  "key22": "66hAsrvzuBHfpJXzo5dmDs2X8fHE6FEMeeoiuTpgmLdHweF6pqGd6wxFMUkaaKZTZiArbk7GCbapQMpvKQfPx92Q",
  "key23": "7NxNvHUgF89T8N7fjZL4jvD5papzRNfkq6o58oV1u8mQUSh577Q5VYxmMQpRikC4ryxQBaG8fotQ6L66Lzehz7W",
  "key24": "afcuibg5TFo7C6tFagEVWh3q6BAFdGiWdcZumkPL6YcN9u2D4AB2yYsMRjqM3no8hzmXEwTnCJ8iFGuuj3KnBDn",
  "key25": "zRPZusaYpsEb1otN1987uzwSE69QqCeHKiunZmbpLmdG6keHh8NnQkD6fDVEQtqckn2nsp85Keio9CPGKqvTNi3",
  "key26": "5Fs3aE1QNqJRRinBgNVvhXSH7HnNWwrBQF2croJtKZPjTGBMdrp9zDYNTpicv1kSpKfqUAfJKTq6w4Cwvsoxmanb",
  "key27": "xNz3qH5qnPrygh4v2UZ6wqwwRh8M1UVpC1ywo5fmyR2czaoncjJAM3yCP9FHMcBaAXpvr19f3bzuNn3VU4HJSYk",
  "key28": "4zf6brfdhiZTkct49CPjjEagkLbXiYj1mk4EEWQNEzgA5yHpSAe3jSb1WExMWhDQ6gJRZHx85mD4GXZft2pFazUF",
  "key29": "4jzY4XZ7rAztRM1zRcGcTzA1RvSdYtuUM1MHekqqtE3Yex7kZPANaFgUn4fT6Vbp9sFmQ8STsdLkMcwYNUaojvu8",
  "key30": "2g44pg9cpW8FYK9Kz88jxEqgHNUtEdvEnNqXvjcEYaM29pN6iGU1ysrE4jXEUB7pBuFYohS3qoQER8Z5x7k61avC",
  "key31": "42w5GHg3A1FkE4aMQtmeuHKvAyZvtvxYJSWGvG4rArffu8hJmGessBWXKPyq8q2jQNbjjuyiHybR1gAhu9zGSMx8",
  "key32": "4J2oS1vKE3qyaDcy7sDD6bwFkg4KRjkxzZvf7AnPijMdUTHbQyGXzjAcCZD9ahehr4ripQjyhrxhoeHbf7AEbTSV",
  "key33": "o5nY3wzJFDU13XJ1aoPuRkfKbNGVAWU81xT4BEz8zbG3fz3YGdZpd6H6U5ZasHzVAYcPxF1DeVFygrkWb52KZaz",
  "key34": "5VSyhFB5cE9EoupsK6anZGN2rHJrygbCLFZNotpxDwQXCtgPrGFHkU9GyTgFqbDJ4uEYNhLNFbT3GihejvAc5VtV",
  "key35": "ZiVMNz9fBPQnDGm8To4YmQ8e8f6iECuff32M95mb7y9P8d1wYsyJtSbZPRwu58Ya45jsAUHoW8RMtWHL47ULBsd",
  "key36": "fu6LVDozcnF857fTKLV9UrdiLf5BTk5Uf7wsvvXnWQY1h3suaoPk2dZhCG52JmRNUh8idQXx33HBL8zxmiLJKXF",
  "key37": "uqfDbo4sNx7FhxtjRZxuSSfk1st8StygB5cM31YeXu6y8L3RqRQYfJ7DEMnMsv8bsaA2T6JKXyrbHqKnb9s5V71",
  "key38": "4v1R2viLhfkfrHJSc4UkhssPeJCtkwrVa4ipezNp3ksknxfRVZSafWReah74PnxLVfDt483ZEcZHHxCeQHtp9Rwm",
  "key39": "3wme9bp3M6cJPEmfUTSfHXZsYYQrULjGD5rieytRhwwZbJnpzJy8dDB6KUo9uDjDsGd51rvXknsnt6AYQQ793dvV",
  "key40": "4JAoCErW7C62LSkrjhdCzo8iuUH1yq49ivbE5F87hUNUCSsBnVAKyqmFVF6vw98GFKpsWd6UmHJqXHjryHLvKsrD",
  "key41": "22BMhL7GQN2FoiVFmbLRxk8iu4eynS6pWg5k3aXgLwFbuoGge7SGu36gUF9SHauQWGi5GzSGJnApwuxSn2ocK8EJ",
  "key42": "4FJ73dWq3YE2jaPoU4B3aEBpjixUrdFHdyAQccDcQFBh9pM1Jxpr2crnwVsBn7UHnuGP5gRJUdXpT19zcseRJeRE",
  "key43": "iWj938rSFcyiNKDeqzfd77dMCYoRwxSiC3HoMK1Vrd1rLRKRhoKM8vmB4txmNSJbJUuDSsYBDVLsYdVcurmWkC4"
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
