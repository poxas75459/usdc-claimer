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
    "5PodvmesVYiY4arT3kW1kF8c4pCdMh32QJRTezRdEaxrxkZBJ9hRL8SSzgS9LAdxmQaskzvop1ZGxndxwMbqeeTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEXdLxMCSXvuSexMpJR9Po1nXvaJax6qYhcSAxnox4sHZ3Q9vcLzFv4DWpCi7VgCJRkXWTzCudqAPfJDiz2tQhy",
  "key1": "5ZuThZUV2VuAaBqAhRnahi3XqLK91GkTpcowZHa6aFX3fj9rL1zEjsaaMxFgv1g34h18fcXVC3WcwhcCJWWzk2t3",
  "key2": "24mA9WqsJeU3yx5Sbjv56S6L5N8NjckLNo5PE736BS7rEBM2nre6aWcfJ3nwMwgJ7TxiYD7RVdxYWXQa5XfqhkAU",
  "key3": "5d5ynSNCafFao2sL4YyVySJTqfNhXwovHcd7hNh5mjRcP2RiNkxhtyks1c5zMncwoduFb3J2FiomNMSNvFGiupMP",
  "key4": "XRLVBzdGKF1zbsYvfQdHz6AX3MKCqbw1mrDZ7vXguysnFwiz5icK1Ey3jRyrEoEKJP1EYWPB39TEYzfcJEsjBqv",
  "key5": "67ng8vKba3oEpJbwXETeqqtczjWnGBsuZKQZWWeTbDzC6vrRK8r4dhFwVjcWY99mnKqUZcGMZFqeGEDjCXWX7wNg",
  "key6": "21U1JeGnr851tF3CVtaM64cv6GJbWXxYMCa96gewVvuyKYTdcDP6t1rQUq9zYnezJXM4mx1GdmJfjojDRXkgiX7o",
  "key7": "63FpF7TNAeednF3Q9et8F5kt5gW6KicqjJw1xaT2WLCEZtiThEbW9b8KsKcoFcAZgGqH3dNHE6QCB2LxQBD6iGFQ",
  "key8": "3aKM72vjwPPY9NaXy7AZKcAHbSGBTS6GcPzEgEYwvJcpBAunrSkJEAmzuwKtJyHpt3yDm8FJLAHjY6oSskrubgEF",
  "key9": "2RGZocAXTBt9r8oPnA6uSkjTPVHwQu3UZPEqqrhaaCojhiaFaNnLfxSe1aqQdJeVzxp2aJm8bwMLhsEhuGZ1ACL1",
  "key10": "4KdqPYr5MzfXZ1tRBSknDAVLYDo4JJUZicYFDWRwfVGmU5LhKoU6gc49eWySBw4U8JFd21dWLHD8CFJZkzs15ASx",
  "key11": "kRkiEQ6SPTqAgTqhrfieQkPefgdWXnAkU6aFX5Q35fq6P1eprALiZ6R1UypEamHdZU2UNP5A1TjRUkKzjB9FwMm",
  "key12": "5atqXayccrwTewedtJXQkbiDWGMp79qSXzCELaEErznDGskXo9e5tYwjCs76xMoX324MN8nGoNErjBwxAiJEtMrG",
  "key13": "pavTA6HBfjhz6v56cFiepGVh2bDzjhqyqA9dHGocpaL2joDZcSjRagagD3wfpLAKatFi9Erw8nDUeGJqA68xjrN",
  "key14": "5oBBQhQCXPd9b4jyb4bY75qWhE1THVcAmb3Uk1DRARq92WEcTTTGtCHSyeYSTkFWkC8Xhip83o5m6QUMXPj963gw",
  "key15": "21DabDP966StUEhMjFa2FAf5hhqzhF5K1ioPafiChXuR8BQsKyM7hruVp6EQG1u7NCp4UidubcWcksXoQSi22bcd",
  "key16": "2MGRVWpsxUPCzFaJdHyzaXBrKjMKb9W2zwyA4QgttbWJZqTVyWTpt9BNDrjYU59tAhyXQ4J4kNEdS7TYCAPT7dRD",
  "key17": "3SdREuFob2dRm3ycUTrVJbm3J3Ydkv77J7GaUstL4PxRCUpQdcE1TRxnsiZFufzXsbEhTaiyV5tUvkmg2kVPFtSn",
  "key18": "24ZKTLBN5q5MVtMZ75Bq6VU2oa6SNSMnPNXeRvSPUbi9kEShyhhDJD8SEygkTN2bXzhW2V2krcWudgMDxQ5v6fLb",
  "key19": "3QMmYWvCbi7PU2UPr77QcghHj34ubVW5F8m3jTqe2AFkFSxNfUu94o16BvvaSS9bTNLWWctfQurJRC8qVok4b5ZY",
  "key20": "uK6Fe2BvZxxEgdm1jcnxGXLfCvs6wQucYcVUsPtTZPTBnxqbwmTYVwFuK7fHDW1QDmspSrK16inEcMaAWVNcGt1",
  "key21": "ZZEVHrxjiRPYVdFbTDednzzJDtZJgC3Yk6NcFDsxtHxae4wixyp45x2JeKrKgmdF4VZW3krDFnRmaFYk7xSGhjY",
  "key22": "4SgLsnxumJZebop45QuUohbG2RPkQyx7Rd4H6yUV8xKtkP9HXJpZ6Euxpi1uqVzoFZ1LcF6cfMh1p3JSSsdBkvA9",
  "key23": "oQtWkRyZ815v8wJqNjB52uDEwhiqQqUX1gesMG36CyFjp2Y4mGvZ1X1RQuZshDNw1Dc3aGECYKnu1QukBaTtjtm",
  "key24": "2iVCr2ss28zvWAo5wgBvxXfjfWj6M7nCpnprC93AmSPhrHQK4dXsCoUWtacZzuYxct2j3VMBwhyfxE9vdBhgJes5",
  "key25": "3LqvfJ4dwQRxG4tZt6WdCFLsrScKUndDKFqaGTsQNspRp5R8UxGrJhxq8cWtpw9xnGxQC2arHK1VNSztx1RqcgNf",
  "key26": "4rev1qUbQq1RcEx5BXJtNYW6YvFXNQtx4jYBBJ7AC36wirSZpx6ntMwMniYe4dbH8q5oBXVddKTSk621Cat7BrgG",
  "key27": "3cDNC46J1P5PPMQPsBJPgTGwvd8bQPQyxH8osGK4RwB3r3u944y3ooyorokE8mMvczcuc8JyZPNfJyMUBQu28PBj",
  "key28": "26u3Meq23J7q9wCzcKN1HNRXTz2Xeu7HKXUuoEknnFMhx3uJASzBtoE9BL6Ao8nMhBQsjiTspujfsfkCxHU7Vsha",
  "key29": "3qiakrRUNFBVYCXcSikC3tbr4atNZoNhX1eLkvFAtAFyu1JJvuTbN91vgMj31cesTRWddxgVtrPqp9V6xai1iSgH",
  "key30": "PHCRNnVTksyEp9NxN6eyQbeFe9aSTqbPBxtucW3LR63tbH69DWTmEhEN6SAY3NVsw7WrzetH9VEEpYabZGA8jiB",
  "key31": "DVHDrknz1pSPT5ae4YQriyob5TAswGNj367FAayLDXRP2vdfHVNGvaLqD5cJBQqd6N3acmuse6EmXysrH79HPF2",
  "key32": "4pnjLezhzJSwrwMdMcRUwGU3nmFQDHTdCGEMxnAVWWjDwk9XguN7H1apRCg44g9jihAjgYCTRA3q2Uv7LYfj7Dx8",
  "key33": "pop7TXNWbWX1SaL3U2aDUiQyotr1sZw6CsAQUn4qG9XWozUCKwNgpzAMDaMEDqtFNKs4tiMY2ZNv4s4HVSwYysY",
  "key34": "4PbemNY8r8kYBe93gUCiNBkmKpeA5D5Xo8CVzJoSWar7mQJtAB4FpETKD1FYDiP17tuFTLph4uKVStA83a34FwRm",
  "key35": "2BheEjKKJEbZhTpc3nzbmT4rrPvaF3z9BCNcXwvtFMF7axBkmbVQXMFPuYe7NZhV2b8crBDCTEtErwXxvULGDsie"
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
