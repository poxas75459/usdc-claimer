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
    "2LWGiQBDFGatdHaZ9nAcUNDi3HPznK1Quf2HUDKx4KekLKonPVsMJYjcnDSwknffZEEpoLE4iHKGqQEdPGqerxV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZvQyPb6k6Ncv8fCXL1NMphXthHfa82R6Dqy14UmXJ7KTXCxhCq5biUEdvzdAHAhbsPuYeTohpggoFHDNotNTGT",
  "key1": "JaqLuTt48nQF6NgLUPrXUi73azwsahnPu9ZZmaYFuXhXV64XQRzwvJSCDB86veNqiaZFPZqL5objzqm8ZxhADYP",
  "key2": "2sQnt5vpH3ZSYyk1HhqcJEeuLVjGwdbQqxnkwuwH98dhAUnrxgGsLf92F32sghZ9Dd5eshBAyiMhZ4Xa7yv6DZBE",
  "key3": "4gNtJ16mNs5mJdgfwfQx7ykZKMRCmesPxAgPQsvc776Ze4EZU21kpWxYrB7Lwhe1tHYMDdvz5hasg7JQ7oM6yzWB",
  "key4": "2P5kwCHKWK9ukKQdXhQiSGnrDCakn4Ka7Pk5CVh9anXfpoQZBgGUviDJ3WS8DUTAYripgjeyDnnvY26NLKSTr7nB",
  "key5": "5WA3Xm5KSXCWeL5V2RfnuTWcmPb9yuZuzLWKEs6czY3vFjfkKxoPXDs2hXt1LnfKyxiG5EMXRHGegU1Qa1dpnVKP",
  "key6": "4EDDNnJeLCRB115acvBUDKWtJTrudGWjsTTqcCRqQ9VT2SEREHoe5zP3RSmc4fw8eWsLim4PHwY9XHK2n39f8Yp8",
  "key7": "5x3ZUcvZmQjvT4YSTviQ9xfPRBKacyGMNojeE93FDwnAMsr6FagB4psMT4qJnaunamurGpJyiNHiLZdQyyGkCXh4",
  "key8": "5QrXYbcRdsue3nctRwqHKR1ofDXcrVerHsQtM7TF8vNRGSLVRhPDVLUutihAM4bZb5SPJMcuQRLSTJSQGngKyMGi",
  "key9": "5VAnJYMDzvPp7rMasHDJpd7jhyAW863kP8hx35sRq6W8LDefe8wpJNwfJ3Jnn2cNTbgvh4kcnTWAocqkA6RR3rK5",
  "key10": "jkBN12AfAr3fFJoC48y5oadBDmusKRkJvyGAi1BJ8b5JCdEZk5t6SctgqvXD5PfpfwcGKTLVNFLeyE7DdxS588n",
  "key11": "2jSwmyDwLDgDhenCZbsrQQqoNRy7oUHtvBFmpTgEcZSuvwwCaHSeEmzZsGqoM8WckbAQDpoRT6q9jWQrHmu8ce8x",
  "key12": "3udvtiT2MetZ9yDCNNiweFNZQF8feLPZevxEtwFNujRYKkyxiRkmRSLMW1vDEDD6jyNrCkD17eBKyqdtD4jWN2Jd",
  "key13": "4NzeXTMxgTioo82dhVF1J9LwKBs1Uof93VUedy7RpSBvHqXY8Jk2tqQ2gNMbwnJ2BuaiRvu3FJnu2gwCoMAiKu4i",
  "key14": "qWRFFVW3i1YgUMcoCdy5MVuusQ54PrHqF5hd689aBRsCTQsjf4w9fNYzVQJaD65SyKeEgtJfLpz1AKgU9jp8rWY",
  "key15": "5N8vAPUqWHdSVKPLkJSVj1qjPtBtMXbZniAvgZ4E2agp9w94p22hsgDcYer4CAbGkjd6NgG5N1Jor5cYBEqSawbD",
  "key16": "2gHmAfNqkoWFATBn2oZYLay4NtnwYafD6eJh5mnVrYvrJsZ8XDjRLzVvZgkK4P5yaL9s6VgsQUWKQim3dYF5qdDG",
  "key17": "3nCGwRWmCFAYUwViA7qSoRXYi2tKQgfVQREegYVG19SsbfjLYazyGseNuASX9hEPoYGFo4879TnC2H3HD4uVLEKk",
  "key18": "2q7Bu45MnYRtBSN6gFEFBthwwo1JMLqgYQKGUtmA2ExanLmNT8AAcN66rJzbPoH9CFKZmFpghR1anqUSQxteDmQf",
  "key19": "2XrxFsujm2YRTiBfr6hHZvZAkn7n5nBtq6RvNaDfHumqDcxxToaJJ3M6DTjgYtfbXpvYhxXhjdZW6oJ6gyMq5bQF",
  "key20": "927nuLZSCweoacGjCwV9WQLo2dH3nX1frTf3yn8P3ZUGBecbY9YetE13C2RGrWPaYbn31F5BhBJbtvLBmnXLAnH",
  "key21": "N79eWrWyY3PVQQ6rkwaNakFRpBaVwLBXaWfuL6fRhAs7KzVfmg182mMBUPLSzcNzjw1h6uRh5QXAsWUNehtTDC6",
  "key22": "5Yq4BSdVtysmJY4b6Dpu37opAkjcAH8NgMw6Zuk69zvkDAtEGNTewxZRv8TK9sXCefYeA2sTacpC8oBSXNHWbsmw",
  "key23": "4QWgB9697SYj2hhvBchGxVZaTEFNvc5oD7h2vZQxkb863RoDA9c2AVxCmAQxf3SUh18Nf1YroPAsmoXyMWsx25Xv",
  "key24": "3gs8E2SKXFN4d2LAQHUBz9XqTTd8PRaBCH6XzTyNAmYK7rqRdtNS2z6AaxsGJ4f6YWFYzgU7i6tuSrQTAXXD59wJ",
  "key25": "47ub8qDJ38KCzmzb5gfAYJP2zkQPJeaGSEC9CHrfmZNMjYzuv7T3sFqxz8Y939bHsXqEszXpmTV71VQECvouR9FP",
  "key26": "3ESFMgaivx3CexjRQ3Fhtn5i5XGmyfKR6WSPz5MfcCN4qoawhukZWrMjEwTdQ79E6CyoNNncUab8XAydFVBEdApJ",
  "key27": "5jqEgFmJQ84NsHArUmxX1wZWGNb56k2RnV8mi7Pk8cr1eLUo2JnjzsC9ohTkMtABkuE3dhw2TPK3bkXioqyXAupy",
  "key28": "51nmr5yefojPKpy6edPsZQcUcGo6EbZVs6rkRTeAKHhC43yYn4iY8KKEgX2v8B1FUZmfAPRLv7EZPbARWxeirN56",
  "key29": "2FJXyAHGxVZRrAkyAZnVccsu59oay3tTWghMUZk15a6ge3dGZ6g479CKB5VEzeRxkXKJFR9Jv8aTC85KAC6GfWQ2",
  "key30": "Vzn4CHkQDw9myoauc7ByaPqVVY2Ej2XsbY2Ui1nNsJw9sAXXCj3DuFqZ4Nnp5Fwh7neibRAniaiMhebfno24BU9",
  "key31": "4ySNtXvV91TXZX48aWxmnsCatqDcKSPEy16CxyAZNfvuuiDwm8dUqfwSQpzuFmbefurn8Bt2AWBQXmKz4iER86hg",
  "key32": "W5ZrsKyCuqA4dfAHxFTPhe4AeyGQV13PwqAZgGJMzJA8LPijXFifwwKWd5sKQknFoSYPh5CEcZ5RJDzbDHnGFxJ",
  "key33": "4vxr3u1M3tUcYe1ab4BwwKV4HQVnMpiFBq5Y92KET1iq7HAbMNk1F1WeSFpGx7MVBh6S2JM5enRPE97wYYZdP7mn",
  "key34": "3WwricMv2HJdVcfAZV15hQHBFaKrzETvfXMp7Uan7cvLokfTdC8MKs2eZ4Mio6H1EA88CZYzCLSqwNAx2BZktjYt",
  "key35": "5kftLGUXePokk4cQTMy2v9qPQSepPyshN6fh3VkkSmzpf5SM7xv22KfmUGGWevRZPTsDwRnhm42aEa1n23cuSh7p",
  "key36": "2DLor1QuXzYc7YzFnZYdPnQi54P5o984fk7k1N1o8J1cKNthy61ncLgqDo7WiynEmUA1ZtUKWFU6BYrMPxbXaXn6",
  "key37": "5ScNwFpYQYo5AncSvwucg54QYH3fvxhuFYxqv1JBWDkMT6wJjpKtZTqM12JVQyv3zghHL1DotkwivWN9kF2LUADN",
  "key38": "4N6taXQ7fiK8DmKLXGiZnsMBygnUXwrB2eH8pT7mS1T5wK3zT37ZRUFrEe5PvFfTfofBgCHFSYLDjNshyCag16TZ",
  "key39": "CxSLHyZEWvaysvQ8GswMPG81VGVZUf1KoJyV9FbcTfsAohSHXmKBsdpmeYpjR7PdDKZHELk12c5mkErPYW125S1",
  "key40": "5qoWbhMCsYFifJ7p42QUAKuDbAkDyoirdwQ1wPhVva1q4LN7YStnFTuD5koXeH28oGfFRZ4NstW2MchHqLeZW2vM",
  "key41": "2QTh3y853SKAyX2gJRsMogUGC9J9zEMN2BUrTHTy3coaGxiVQtjUWeREcqaVySE9knGW1kZXeLa5GGSMxL35DyRa",
  "key42": "4SJ1E9q1sA38vroE3jRvWsh6g1Z3N3eEcenwm9jWPtWQrkcAe8iwA1BqJbxPz9ccbMbEa5SDBkJWxzfxWEhXDXVJ",
  "key43": "YkKX9Jw9k13vX3BhmLa6ti3oSwi4Pc3WrNmhkNKorDov2TNm1U7uMBjg82naK22nEFGaUcjQJvFpP8BbQJVCP61",
  "key44": "L1cTocibwGvbNYx7ZChdHm4j2QAEvayyL7ribkK5aybAvw5wcyWeSCRXGoaQ1tyAhKBniiwDSbESPjBf2JCidG5"
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
