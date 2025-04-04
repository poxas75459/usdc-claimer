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
    "2PEC4CDRE5c7FdYcfJQQkNEJsFpy42LJmPDgbahL5xQN8KthovmSZKvbbpX4d14pasbb89sJfGBjfAMNsVj7doca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sbo8qhofU4ZuHcANMemeKERxBk2vrEaVRuLsuCQLY4ipqYqKXPjS5qHRHaVCiX2CoHdhBPxm6VD87TXjP3k4dvr",
  "key1": "3cKnxyc2s5ME6oo9eBotfW8hmPwqyxSP1soBwkBwQLn1Xm89UoNTCTy95MauwgMsKRm2XqvMWEumCntdqayXBRmm",
  "key2": "4oCXCpQ5zfoegedZbMaHjugLo9g9VjjUu6xY9Bv6H24wb7CWnvLVCNWD9NAbyHGT5UjJZGgkkgv6xsGzGWMVuF39",
  "key3": "2893Ze8rxQDEFKqpzoEKqojtYhpxToUGMyNckns1cCtXHbdLDc85z2A5eFTp7RGvqVJ1jt7BZ6h2FfFP1sooohQr",
  "key4": "2GCXGrXzikvwif3uwYhW4LRGo8sbsXLcHj693o6YXfKVPts4GyPwUHWpVe5KneAJYoEbN3Bau3qz6UQzpAS5MLFm",
  "key5": "4j3AM5kaN6tCY6XQvEeZAvgCC87wZEgPme5eCJQRc2jWy4ajgN9TsrDR9h2XHG3sMNPijk7F9rvRmyAeiGaaRe5m",
  "key6": "3AwSubXk9FnEdg1rTfmKEjhFJSc1t4M4ECGELxAFXrdSqWod5v96f8TZCjda2dmwpjh1CbHyZiHczFsNjmERv2Pr",
  "key7": "57kUDtEd1CrZf3RcQ4MWKH6sWUqwBPTVxCoTZmzPjRrvmv6Uk254W1JYFh1WRafWoN9kQyD3jTB4wjkM9cifhc3m",
  "key8": "2auCcydXdD9S2xFLZXwBmxDjmAgLKhbgx69hVBQkcoQRnGpQW4PgFXkhEz1fm3rodLNpULck6hmiMPVdVZNFVBkk",
  "key9": "2pKgKyr9fMeMhEgV8jhymqg2wbeXGifpM2cWvmAzcjFqoPAYtH8iFAGLiBwrbAcPZxffugbdEhTAD7wc7EkwwzCq",
  "key10": "4AFRRkCNj2hCTMhQYaFSw3KXg5nCmazQjrXivqsbg9sbNJRZPWc5T3QKBhzfbvErTAaTPZKWHCNJgicmtRX9Fteh",
  "key11": "4R2zP1QATTLHDgPj93mbK5wtHjbKMB46f6Fn6KM1EdiFbrwJt6Ds7U13uNe5qY1b7w9BgoPGvf7fBTNLJt652v2o",
  "key12": "2h92MJbKEiA75PrBzYcx8ayKMDqHtm7f4F1ygDEkPQhsqqFaZLoyyUatVze5cYWbEJT5B4y9dio1zisw7EZqdEU6",
  "key13": "QkSQr6xgPybQt6G6JfSiU2Uq9dcfRi6XmwfmgDCoXerLUoQSkUF3zvyRw3exgCAvyJ4JTFCQ7HKSVKtXPYW5C8b",
  "key14": "29BEPFg7EwXUgrYkbeEMmWV7La3eaEujQqzg5zuQKAZig3SeMxWJocHWVyVURVY9LxjMTa9mhUgt4diSVWTwYXWD",
  "key15": "1btKseSp3RFG2KAmCxAwHKct8oc5WgbuPN3LNUhYmzeM7dqcrWAJLF8ZjEJTTqTfN78bBuZ6rPC67PfsrDmTjoD",
  "key16": "3fks6cHSAMiay55EM7fLgGkqvpD8k2iKZqRcAxTqUYW5SVxf3AkDrcoN4X5bVvuZPKCQAwJN4WqV8PRvp9A3Rmqb",
  "key17": "AdgNmziuedFwkzU7gPgPH3vUSpBnqiPgn99hTHh422NjFLj1K1mwZD8JtLHPEDja4nj66qHNQ175kU8FfwqCYXF",
  "key18": "3p628PmXLFLX4eroT7C8hZzs85YuggkrbdFQgbQLwnkxXm84Rg4TzptD6F97dMgw8gmasF5CQA5jQSqWWkxbvic9",
  "key19": "5CAkxbUt6UwcoNFnpZyG16fqssLWQtpk9khDF34CmgVJ4P7sNfJFR7LnuwQ4DkyWekvvx4szfSxDKc1d4ZSDkMhX",
  "key20": "5Wxn1Y2vEaMziGTB1ChCZnqVp6xupPHAUFNsZenThrMJhwTwATEuYfMrQZVJSm3PEHFpn9xR6gRiwKzctgRNjQ7K",
  "key21": "5QV5Q8dtn6b1rSTD8fMP7oAiJ9VAWB9LYLmsf1oBpE8FHKDXi9FC9Bb5SJWW6xDA7SX74tQi6mfjjrRFk6szatnT",
  "key22": "wf4kRQS1KNxgbeTnSZr6z9ULxHpy3iKAXbNY1YNe3Nf8dXLniRTehkHPkirJkFDbEmTAjGVev3HTxzBJKfqQJVv",
  "key23": "cEiZ5ka6KZXbg9jDooNT8EvML2SNm26GF5iBJVNn6JiPYeknXNNYL3uYwApeTEKrPaTX3XuXvUHSgjoKkVNfKaa",
  "key24": "5WQjUE9Xv4RJqzQUHHAU8x4qsb3aAin56gANVHzRKmou747GfxQU9qmQj8tobPEXaYxL7KXTePD2Mv2Dq4VE1JM5",
  "key25": "5QZvtAtKXzcuA767EDK8RFH7Cs2hNrRbzDA8Dp6kTHPe653BJivVCFzQ1Sbd9YaDqeNEgraV78bVNZJwKD9tUzxT",
  "key26": "3FLP4RLPTtWhbaoEy8Ys8CQnF7yAtMBxJ7DRkJ6SExSnMWiiBNp6Qjb2NKwiEoKwNGxMyDUxq8pSb8k5qpxVQn2V",
  "key27": "5EbCht5xH9KwJ7KCryD3v5Y5YyQZu2DdNkuGjFTCK4YeAYUiuA7mdsMNwm6Pa7zUExKwH25KmT7PvAXuj5Ji16mE",
  "key28": "uoQkBbpj1JhCdC36ZErq2WiQYXDGemrurXm4r9HiSgxUgu6Aq1U3F9VVMYQT4BudEFEHUVnJNHWQCVpLDGbztN3",
  "key29": "4gjejE1xPpWxvNU6ueeJkxhzjKTKRACGNsG7CmCNfTxfK8s5NazFPVdrxRf3eo4Td2tHNvmPU6gqm63vTU9nNiGB",
  "key30": "62Xu1CbWe5oGbyAADiDhGcKffUHAiBSsDPvcrAW2CjSeZMY12XSnLotBkzbYxoAW5DWGDNvd11aWQhMLU1wBa9R",
  "key31": "oBP2kk3ra3txjUzWEr46r3x1p6aTNeCPgFQGWJL7hFxHi5Py1KANHyXMobagQ1vyzvmEgdeEn7uShqkwFBaYZKd",
  "key32": "3MSzRQ22VWQM8abRtPrMnMPo8NKxDvkxREJvZbs3FiSoxwWzZSVCdKoYWbLqemaR6b2HxKt6MPQeW6ag9gZMR78y",
  "key33": "3kc1yudJqa8qTVAZzibbQCNaxW821JuRYaeKFUKRsbCHWtV3rfamuQGBPyD2FjjaXowCxZFGXvfftP3WGm39GNHD",
  "key34": "2KgDRdRMidReDkbjm4t511VcTUWP9fUXQLADekoKDtBLjENyvjSgpUGR3zyC3jf11CasUCWy3xzkH7ATr23ZzaZ2",
  "key35": "5re8Ukr9NQs43abKbM6Crd8CpMfuuWGvmWidURWrZ1e5SauDK2NXKBTMLv8U2reNKnHF4RPTHXoSAtAbxHboWnBU",
  "key36": "4qT4hryroK9GNVjP9kapcE4crLCxdiZrdLCBxUxvmir2jJ2J1xzvkLScszpAqwrwsQKa87CDueQ2LGY5mZJEwVLh",
  "key37": "35nbW1mDbpETzCkoCiu7R7aiogmdLp5MZdsdcfmdUXiexQdDdMNHYSZSmGuFjKcSHpWgg6QD8nTz7Ecy8Uo4sTnW",
  "key38": "3mJpdgQw3mMDyLLWu2HC5w1NKDKjN121qAKdBGESf5uzXHZXvMW991K5ACw9Mwtb1Rc99rE8HF5dKhdZ2p8NJn8X",
  "key39": "3NskbPb4EUzBQuGgLt1gDnKhWHoQfdVGCdwjwD84ZKmruFgNU4YcqM9fEoFRn9KJK3Mthp8EZV5XxbcJk8D31u4C",
  "key40": "2ftezuEN88G77apE9s71LaSJ51M724C2iiRxP5d73wSsoDvLvXa6bovBh7chJFFhiqec8wcYDturz4LQpmbvL1BT",
  "key41": "3RvNQenZqBdXxeppezbzKhrkHs6WZCatknqyi2nebcRpPDhjnkgYZek5LVs2mihH8JadzMvYJFWDt5PofTYRcdJn",
  "key42": "2i6s9MRJ25MihokiFJFRnuaYvo2sNbC4XDSXEukYrMJGZRubZdFozgocS5qdAtFEzCyEc9W6VJaFRpoHnssUpGSb"
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
