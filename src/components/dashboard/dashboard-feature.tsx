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
    "5kvxtFFoY8x9QaLXikBX9q6A9LhujrFjHz6wm5Zdck92hKFbaPGKSccKgD5WxMZRf1P338Qi9YGqomp9gvEv7zmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5imz3Q8gEikozShEsgmpeUvzuTgdQhmshtvjaP7gHDtgYNLBzHQaPZxnPUyHPZFxeeWQC67u42TSUcRR6GhqyY",
  "key1": "khxgWmjhh5ys6N5p5EfufbTRinNe75VMCY6ktHpNnw86txXfHWhe2kDVME32UgCJJ5Pv2WhkXkVwAGVHfuvJRRZ",
  "key2": "3PYRzysBLt8PDx4WPzDRTEFKjXLwq7rjqb9YUzhiSWG65nrc9jumdcWMr84ZDNJZMNuYeJ9D7J8KJyeAUb3vnDmU",
  "key3": "3aikrbXQXCF1eGKUDinEM342Gs9teeX5YiFGySKk27ky2JSCMYjJknr46ZD1bKUUMp9wxBRDz8tMJD5ozJiKEssE",
  "key4": "i2BA1oPpYL5SfxUn2LRRDV2rmVZNEUDdddCPbPyo2rLKC4JBKrm2ddwsemfdJ9Y6gyTfF5dcfTN2vz7QybPKBhb",
  "key5": "5U6rGQ7oHx5z4QP1oAoAjbwWune4i6oUBh71vB2JX7Lun2MWoLwVZFJbrUkL891NfPm7nkRc6EhYsfqbukrDBQJE",
  "key6": "3KeyAiSjCwGrBXXi6U3QsonMWLVcZR4Le9uad5RuPKKeM3TRS9picsbUutFtqvCzsurTCyqGqtnE1cELPnP8hEUD",
  "key7": "2B4zUXS69tRA2NzjBLD63mC3egBCi37dHYh2nYxhPBjHSy2djUNRtGfpr1eNrkoekJA9H2sb2jtdsXt5zMmb7LTh",
  "key8": "wxxbuaaoGwR7edJ2geiyPpEjQnkt71DB7YLQGmJ5Ur4q3wETXtao8LBcfaFAi38q6JdbdgBFaGEd4s61CkiKhTV",
  "key9": "2xF1FAvwQWMyW12GZ4Ui1ZarWsT6CZC2J8kB4gicjhDvKt1bReewYEgFbWgCE76TqQwCz8DssEAti2SzKNGXfLCF",
  "key10": "3MuSKBEtyC9xhxZQtfZmhdUAxzrLqZ27TDSbYUeGRwxTVP84xrbrJYicdSuNJFxcCMUQ8ipNSvkF3bfj2JGZxxL6",
  "key11": "36HaQuqraZjSJq94nVqKBS4NsKkC1Mj4buJCbLiQjonqkH4zPj9nds2bfvuN7jLRMU6F21KZ3YJXNfTNx7SZSovt",
  "key12": "44vA3tqkEHTWfkQdAYzV8juZafUBHML2mqRtZ4hyqj9v4pZyRr7zZypg4jhbukRbNAKCT1gb5Y1VrbkMcUfpizHv",
  "key13": "5QAJ68RE9nohqVfvqj2UVtzsv7Wpip2fTXzTFL5k44T6p4eFexhLXMsoNGzBcM2i8fcvzvYHXu6iW9UBDEqQfWDb",
  "key14": "3sa8iZ7u5xuPrTVWv7tWLmcZ7jr9RuCSjQNrA1ai5Cq9VVfiYgHiPvYm7dvGXggWXqbfryFVM6MdinD52NgLGnqH",
  "key15": "5NZEWbax518m4n7Ztpv79eUwaJVrmfSViqTKJsoatYtF7o3n9UMTxRbmLvaNrWaWLF2ymSdbxf5uoRuzA3yWNcon",
  "key16": "GQJfVRT7poUEzUqb4fuSoyiVboSdKeuE9D8dom6uuMQAbEBqu3dM83r4bdD4ZmkXbaktWuWBmsVpvPFWYjzEH6a",
  "key17": "2FLwizHdGhhQVsLNYj5mPZrdsF56zatTgmzp4cbfK6ME3JERBhqQEP3DpPXTfYdCmSreUixkNefz8VBg2xDrVfn2",
  "key18": "4ptepP9e7yvSPiqZ9mcjYujqQUeCe68ezPszauD3qaYejxUX59w99p1B1xAwm4p8AXbYA2fgffUxMgx8eFwWGCK2",
  "key19": "2GsWVJ3kANRXrxkvXBM2L4KyvJ8NX1hVutTGtw1yt4LQYeF1scVMo47suYwZH9XKTUPjJ14a8Ew8v12QQ81DDCBj",
  "key20": "SP1uPqJPtMsQTSig343MSrFT6ePmijtD4AfYCvd5LPJWSYpnbyvNQBDTMKavKgmRNv28q73nTdKUqrDmouN2KZH",
  "key21": "52mJ4VZ14SRZsTfNhAXrKNWAgNT775KRuan2dNVX9iNDoatF5uGWJSLRzEUu5tW1qprQbuig4PuJqLr8qa7YXTTg",
  "key22": "5CEcQUTXDFR2J3npXN5ovBdbbWfex13XFeGUCwapzWKYMpxizRJqxTLqDG5a18i3yG5322hH6gpSvCkvtLGqjKgB",
  "key23": "46kpzR8J9BCvMw4rZ4UAHMDN5reXQTYNy1dwqNFQKRoKXBQQKq2LSvHMho7UbcyxEy6JkBF2mCEv9rXFkz91fxrj",
  "key24": "3kP5PuBdb6DmAeQQzvzteFCrkCfpMPaVwQR1mNts3rJou3v9q9xNZMSKrcSPueA9vUcvVD1UJABPMd6tsToJXtkV",
  "key25": "2wPAnEeEZaEbe9uUC76fMykHBQnKFFPxU6xsrwFmubtJhiAaP4qgiorop7Afr4DoKFgKyCjbwT7pMSoibQnrgEdM",
  "key26": "5Qac56fohJs2qd3AeGWoLztLoy8TgcF2PnL8XkktAvrLwrAvw4JX4ZbhfeURYjDbnFsyp7tAMnd4qRBXrShm1zET",
  "key27": "RFFPseWx49prD3C48rKATfuArXWH3kFveY3vrM7mAepgvwNieiyfK1Bbm29Wqzd9mXSQqFVzQFUg17NZKQkopeY",
  "key28": "44NcxvZsc9g3Zu86wpTrSUkjbj1tsSCzwtEUbcjagMWGPNPCsEdbnW5UyzAuCQr8eLwZF2nCTYG2wKCCFPTtjhMo",
  "key29": "45XWQ7Ae64iPV76yE4oVJgvEwyRvamv4RjdTWpq3oMocePy6hx6rnbXt1icEv3MYJiFGsjQE6YEQPRGBS6igU32j",
  "key30": "5QSLJYckRdwCK7wzKHsdHsUEjgbjEeyBKbZiAJSRC2rXSihq9ZsoDjxGfsBzURaKffwYQqisuhDXNMSnLVjfdMp9",
  "key31": "3b6hBE5muaKTu6UsiM2QoqtqtTsTc7t14tJ16sKYSVGVyMB22RJmPRxdvJnxPjhFCGNUW42PYMukVc3dVb9acfT2",
  "key32": "2jEWFLxNwygQ1eZsPLjHLsGpLsdZWgbFjXLeFSyVM8FMFYrkNFoE9ZgfDydVwfLmnG1DXjZ7bgmB17viM1xCCeA3",
  "key33": "5fsbn7JagHQm7vVT374JMqgUMaz6a15XYDpivnDr2L7PRppSUUQZw7WGUcr5NLo5KmXwRsP7sqbzYofHiJtmeqxH",
  "key34": "3jhJbxxKXirKCVQ6ADhxVV5GW14JW36zKfEYGa6tHkWvHoRBVZXiJhusgTquC5BjZj4fCX4fZ2BbkLUH9wE3ESEr",
  "key35": "2tF5pc46Yy6RbrC1m1TXLGAoyEfKLiZS8PahmsbAcjNz93PZ72xRox2oBr9jKZhmfyodrpgnKEZ3U7bb6Uch3VAY",
  "key36": "39sgNb4ntdFTkwsxExREgmBUJbsrSnLPnp4qja1x62ZUeMXwU1EAGeZTmbvnxN6GXY8q4GogKmpiikr1bMgNQutH",
  "key37": "4mnTgR1Ge8RganyFeoZg6yTtxdnQgEhEmFcjsuwZUXrY2MmLzXBmuGs1Trud24KVmApPPdwQ7MEa19xTC5dMmRMP"
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
