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
    "3Ev3gE6zqdwZskYkvwnHdsMzfmXQAUpSZ6SGFDeEnnEZ7X1NNfM1SFXd7Djo69KBvsvhTyiKjouovZ8GHmNqNq4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhTKCo4hzJUSh41e7xFTDKzRbcBiTPmUiDxE3ZJbqR8FFHAQN94S2Fqxau36mwdvUjZVbrzyjYGePQmWkJBjkHX",
  "key1": "4UoavksYreQ7hH4LqvDu5ThNaFxU1WnnaxtBMULu67T524ucoPPMdd3CMo6ghQt8ggXLXAU8QeCop4d1Cyje9S2s",
  "key2": "45swziWwmc9sD1AzhaMANpA3LaGHg6TdiqfpjjRx3oMsnHFy2CCD1SKvDV3gHe6CJSqK6kreFP4omK8LrwNt66uW",
  "key3": "4MFbuFiRrGJa8svmG5fb1hxBurHqLBFuFqnE1ZkEqHDtNv8witgut486cEc1XqtFeHQafHuLhgxUnAeWhDXZqxzJ",
  "key4": "4eWqeGonHfyZaS9xkoV1PHWGPJz32ZDHH2H7W3pQsj67Jh5zP6xsnmGLAyAqi66HWhYuohjZzhLPgVfuynW9Q7tE",
  "key5": "3PUyhkvywYas5zuKLTnFEPtyaAPjkv8qpWCTiGQiMzaqbNMUsdnDRnK8ph4UaDaJs44snUUU5YodVaqFQd33Sikr",
  "key6": "2rQ9qwiU6QfYGLF6QPD3sb3qNgXP3RdoZo9jE9oaQ639N8FkDtoSGbyHEa9oC4zCm9PpTM5km7kDESHfxHaKNa7G",
  "key7": "5Q5hs7wYvtb3g3tQEEanUMXLZqXRD4DSpJmrvJkm9ABorDH8wWAzpLokfm6ihxGZfuxtrTVRQFzjdNm1QgWi4U2u",
  "key8": "2GhDCuNGtpxQvtzW642877Fp2pminRnyENMsz5FDZC9eSfUsvycKGutTCNSgkGVjPxX6x4YS9gFuEXaHGimQ5wKC",
  "key9": "58SaMDEgQUztqKcy1zxq6ZxASp4sSejJpFjXWh2AZytfXYdhhYpwWK7WVgBSTsLEmR45X5GAKtTe1CebZQMvvYgj",
  "key10": "4UBKtm9CEAtU9sD4oieNkkatqE6W9zoPWdyA8TrwiHq5yStk2wrviQbRCL7CHRqbwA6GhBhawHmXgF4V94Q3doSF",
  "key11": "EJX4JuHDKvGcWzvBKG13Zic9roocarWnqZQXQk9PaRThWuQrFT1uHUTJy8t9gLyFkvdCZPex4DnE85zQ3PvkPzu",
  "key12": "5hnEXVReDjHQ5L3SCpzuWBtc4Fq3K9bKHJgT2faWci2AJupMxdZGvCqzAqsNG7U4qi6CLiKXvXavTBtWGws4eaWP",
  "key13": "2FE26rFWDM9BNDzdATfk6t5FPpTcSvH1HWXfs5GcNKdAUWzmpV2WDpoYvpCR3sJTQDWByNgsn6V2aaFPvACa2MiL",
  "key14": "2TZwwmu5T3s24gWfHXTHg43YKerLXQ5niXqfaZjL9txFV6s1nRzQfLbGmCBHxtrK1WRZUNX4Y7EVTDMTzRh2PPNY",
  "key15": "28zUKn22RYmnryvsQJzXFgqZwRGqhrJ3aWrhYWCC7KkYRz5XsoTxFrnBcPfTgwLPrVETvG8dxMShbPE6Gb9Pr4F9",
  "key16": "5z2dA5izpFo7VjSdhXE6esuqLxHboq9yc769MGGqZ5Euomc1rtggU5Rbdfw4xKVe9WZ6kqruaCNXEJP3nCesKxqT",
  "key17": "516wQp7zG2xkyyZazuSaxN8JrTATRuXGxxxiqEGH4vst7F4fKrwUktYPyRQec6FTaEApNRLR1cSy2N1WMwDhqMJn",
  "key18": "21vK15NF8XJZHehKn8Sqw9qfd6oceed551bqRdEmSQbSdo6CXRB6hsCyfKyprvzuzgN3NzENLBPgdDm18tULj4Wx",
  "key19": "54UkvK6gGHUXspdhz5hrmRaiRXhhGZfqK8dPz6uQ45W5C6rTNyvAC55riAQE1zXEfAUyJh8BZEi5TXozs8RiCTQ3",
  "key20": "2atPv64Pno1PVFAhFhY8974qUeJcsP7H4vnbkjYnSz7QnP273Z93LFiCYv7BDsH3HFtG3tS1XwQmC6mhnfDUao7A",
  "key21": "5aT5jptZhTYiGBTBXWzRFPmkS8fDBxzWSoMhSB8bKsSaoW4QU31c1tnujb51M6fFvp2WngxnJwsziDZNpKYehLVb",
  "key22": "woHrk51hDtGJSfC8e2azzbKs5pTZsyUCazxmaREDHHtAAV5VLZR9SSs4FoSGsYBphdHuSUn4v7FZmvpUjZD7TWR",
  "key23": "43nDa2rhBX6rH1Cgeqz47iyqSNzVMiDSdLUnsn2uB5t9bdocqsdqYEkVzVaJ7W7BKxgGAzDXM2rH2aH87WEtPHBf",
  "key24": "4T9NXJHsyWfd2vGcrpy9ykQS3hE8JvvF2PCC7j21qxGtqs7e9gokbDy8q3zWmTpvc96DDZuZKQUwaBP5MS64Eu5r",
  "key25": "cLZCotc91RhdQT1TvJhHVZajUVoHGXdpVUGjJ6GN1DaC49eyfLXGPa8zXMT9dnpZLnKfwCfq6xiVqQqg1eZtYFz",
  "key26": "2FwGzoERWnEBmsLrsfg2uBnPnYJosczXRSi3hb8zoZg4NFhEVdGohBHhapyUqkVhmJPwzQ6vmvhDj9MWXW1fgcdb",
  "key27": "XCjFmcjziayfT4zzKJyKFAqhnyhkteoUPwjqprNRbRWZ6DwJaRKE27nBN8NRSN2vju8HeYhq6meNv3eSnJHDuBx",
  "key28": "2DcdGdceyq3QcUC3bcM8X8BrPwDmp79qQ9Ek7dJ5XCPw5FoV5qHw8yNydweVsuhDP7XU3D1irFoFhfcoBYZdr7e2",
  "key29": "5em4joXmgrn9JK79iV14HFbv9BSd8r6ccFEQesyM9YqLkQCWLsMEhZtG9ksxL71iv8HcgjWddsVUWJntxk47FBbU",
  "key30": "28QcXThe1U5T7FPCMQBKRCLU7FTBr1Qz62Ep9eaqowKFd1W7WBt5L5Uu4vjUyw5WfSMjpFUJF12MMLQHhKovF1i5",
  "key31": "5HNp9CwuJkZfYkmyogoGTAjVPHUFN34K2SYgiqVXsG7p9jvjyh4fc53WoAsghZgBJXPRYdE6hZvD1PUpbZ9gxWJP",
  "key32": "5wL84YAu4gKc5qnxMDabMyctd1huAJRiESzdqAzmF1S2MjFeUEVjB2i5pfcTikPado6o6SZtppkDLh2JYzirxFTf",
  "key33": "3Ji7TeNVWwnNBCMuviHzmLGm4tZyA2ENTVJCAr3zGaPe4hgRjrpxPBJLVGe7KcKnyfVHd9enEdMoJtt9aqwba6Qc"
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
