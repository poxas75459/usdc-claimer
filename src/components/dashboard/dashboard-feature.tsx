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
    "3LEMUUxrp9Pxfn8UkoVMj2Z5yYkycjFoYiSWj9imVZE6952Heqgm39ikQy2gy8LsPcfk8pdGVrigvdrJQZngHsde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yVvDfNTgGbFCJgHYiPaX1oEtS1nGVNMosAVpMBAy5PonUMcFLpBAjCLR6chMnX693f2iGoX1CByHcGUsNY9YGRH",
  "key1": "2UaejJHWqzDeVEkCrwhdYjJwWKACerjFcnyLZ2qtYxTTLLEsqQ5ji3xZ5DcmYB8AwUj5mGPdRXr2GvdCidubDksW",
  "key2": "5of6DGQGKp1FyKSYCmgXhpJFAZ8q1C9Nzn8n2pjEXsdb3UySWMnuskVzwMCF42wzc9FTkk5r8o7epVvLeyXXG7Y",
  "key3": "4Le5it5ZvNkMz5qRGY5MLRk4sJL5RXQNxpC1T5ZUQVV4n7tUcW37u5xaw9RtJYmuBA6qdW2Evy9dmqEhCkRgCez7",
  "key4": "3Zk2WAQMTHDEsRsUMfQJXfomkB6ssD4YhST4j8corbeXctKYmMyR1tTUenxbzaDdV9MLDqqHvMa3rUiNoBfdJzD4",
  "key5": "3AuLbDM81w2Ui9iqYPYbSLwLKvdqmupiWophzvSGP5sn9PGHPfeXoU8ZaLggkuWBYY6csR8X3thH4p2GAXshNztf",
  "key6": "e6iA34nBikgVBqgzHdtzYMRMuxSrhxXaUGxDEYcnYV8mcM4553Mdc85Y4ZAg9cKCJgeYVaaVqNJ9peMEmyGgD4p",
  "key7": "4MDR5Qpa3wWa5DesZkYUY9pVRddoEtdoDXzcUnDfGGc4BikBikxL67DxRtQpDydgXwvwCv74vojr7Fm8N3jTGsrF",
  "key8": "4QxphhbC67kgqWy8rSeFBr8JrRPgSS4JMgxBVBQhdCF3EXavE4s4pNUiX75TD6DZJ98JXyf2bzmVEc9fvwNxkqh1",
  "key9": "45qyCMRtVYDnTNurc48epLiL4SefaNvuJiyhyPS9oK9oEJbjf6FGPeHDxzDoy1aSBqbk2WcDHtvhjUXNYua6ozLs",
  "key10": "3KTXkXnXAE2uSAi7czoyAijAC91yyzaWxvZVrrn4xbP9yEraunMPpSCci16VUgRXoAUZ37zePfwp6Re1GBEj1iHC",
  "key11": "4Wwj6UmwWt87PMce62433RBUkeM4MvNntSGVF3PpKCr7Ntn4HEFMZ1uFguakBn5J89N5yGDYXxMazMdHJh9TJQRG",
  "key12": "5ZPiKj994gwqeVtV4kjaNYHws2LEjfvHemnmGXLEXeMYjtuUQPTSuHwrYLAxgEKWmQpphBbFvyozomPwUztJKC27",
  "key13": "m52qbEaLJJ68exBtQWGz7HsZ3MC6kXDA26D75uhcGYG2HShHpRaJMgCdNUgtvSyRX2dAnWseq8oQHhNwebyWPUf",
  "key14": "2SotnPEqS6JYEg57RPco7bToJDyvZ8uYednSQPwLLMqpsP7CDZAF2PjHK1ZawQERBewpHRFonZothLFnyQx1iQsC",
  "key15": "2AGGvZrA84GWhSwVpiZ5fB2huS87rxnQS7YVx58f3WooyFScFUyHbvuj8h8ymYbSUxoGdoMM479UYdRgCbMwXtJU",
  "key16": "2PTCQbMX5r9gAKJYtJdtyyhqTRzw8E1MWDY4k7cM1iGZeKvVD4pDFsBoZY1zQkWXGXaTwyV3YT1jjeYLa3LbqQia",
  "key17": "4ytGiq2GyVgSbCpj5EQi2ZXoJWPVh4j37ZLFAaP54URWWx1HZXh6soVkicmt3K4WsxTNe3nvQKMBwJc8zWr15HVP",
  "key18": "5gNm7FadPR9nKNS5x1SWd19WxpG7rtcjC7r3kZC5EBJKf1d1gKokrL35y3zyfXdg1713sBDSoFKCucr1LEuwyjzC",
  "key19": "5pkK9bWGMu6bDrjMtReJpqEWp43V9HvZQNhdNvJ3GBCWM6uhLqHrBoBKoyRPywNC9vdukRzukwie43yirFMTLcvM",
  "key20": "5kgpWzXcvPVNtLCuPJhXTv5VuTSaPYxbsEV1P5VQks6DYzKj9hv2RfWbgG3hPEab8JLDow76ogTXn8sjE1iYxK8o",
  "key21": "2Rp3MTSUx2228VtCxgJheRxfJ9Q5Kw34ZFkBXGKRiam1rz4ze7i5BqjzZKSPqzTLnRMfFkiCW3nSwikeDCHwEifX",
  "key22": "4tKgspWwajewJUhdijrZkj1gLk7k5UNaV8JkN2shQhnGL1jV8FjuUJUN3vqpgEamBXGwyRaAoumJjMZht3Cvj6Nn",
  "key23": "2UeVZqhaeKGCn1hgCQAj2wsG6kd3p2PyzKej62hBFBqwxgNF78aNkeKmHUVGYtaMkWKGzKwTaerLpW3GiZUubQoZ",
  "key24": "2zBuwPEbtHiwfpmmAZEveHH4ZMkvNLZdjfb91QPAhXrf5rpTUyCja7vKJM8UzC2JGmdiDAwSQo9gFBcDHwuwATA7",
  "key25": "HBgcWL3N5RQ75ihjQxTx2kXkRc6nVQo4DhM5tFxThw8y7Wt5xYLsHY4jqQyZtiwbWGc4DmiemqT7L8WD7BCxGj4",
  "key26": "3cVHyo8huxysC8i63ZcqDWkVEiHHjQuZfrPPr3fLABpcwywoHgUGo1EjXkLqZGsyC5rQCabdiCVn4WavJhXwUTHV",
  "key27": "2cHnTuYPCtiAR86q3k5Xizjzb63TVWNSkmmmVVJ7NSxUeWdxVjNC1KodezeQgHyULoPuurRPjMyceV4MzzP5vQjb",
  "key28": "5bq6gfayUz6X1bCpez9Xn1HY7y3iyboCa5r1RQhdwtx8izNdxmQhCvPpCPZd8vhaGEiJmX6eDWNEfMtAFcoyEFyS",
  "key29": "5u3bKk1MUErZZ3am1wd8aS89unC1ACuvL3qaQCpS3jkYvi3NcdeNUX7Ynrkdorc4asQwfaqF8XpCD5k2jqxwSPsr",
  "key30": "26jisfKmBJHMAbvEDyL8eLyKRcRbtJ9PJ9EcFrg9KRCbmJ6MY1PJiNhzDDZPwtk7pCad6AET7RVu2cUhUwinVmwi",
  "key31": "5hHmqYYe17gntfFUym6S6xwd73iDFHBvn4aL98KaJq1ATuJvDs7kVrqcTX782XpiJeF1uUhjVTv21yooh7V5EwtS",
  "key32": "2ESZwfz9AzRHsi67e4BbSYoMYV6A5RR9zEXKaAYTcGbqX4iTKfT24EXYmkkTB8i6peMBrAqLhfRahbmxspZ6swSC",
  "key33": "2eLLJjPMYNYdqatYfe2qKaq22vBUt9rnC2RTfkWEV6q78jgJM5eQvkq7rC6hF5fNRRLR4YoGURLU9hHVdRerGF7U",
  "key34": "9jENHhsMDf9WbZs9EHYW7KzsUSyud5xRo9AS69ehixyNL44n6ML6qJR5GrFRXvDGhZB7QrXSw1npdYjWddMLRBd",
  "key35": "3eck7AMx7E2d3MYH9NtCQaK1WfyBgUB5Z9DJVoT1QX3GvUjZF1Zv9dXaxfxEnC154HwmrQU1ornv4wuYsbHtDnnU",
  "key36": "5mNvjXQTsrDPxe4WDhH8hGYkr73TJoFLrdeG2zXUvsWCGkW9BTpfzNbpb7axj4R9feQywZsqMqfSJo2JgZq8UNMb",
  "key37": "5d7HE3AckCEVHpzVZCx2trCYxHVpDUTYbVGRunWfEJXwuWAqR3ChbGeB19c32GRchC7Wzypm8mHiJY7Bj6ajYEHW",
  "key38": "29tC1pzK1UynL24Uy2ewriQkvsn6L9QgzghzZQV9SMJNoe7x4MxGddLGAEirBb2zDZDpwfyZFmvPFhGNHEEn7tZt",
  "key39": "9FyifXtnreUMRKGMV621H3yqsZS4eJaSTzoZVQsb6TJZEe51SYeFHViaq6MzPFJXbUQJLVtMLevtJLsShzyVNHb",
  "key40": "eahBpXJPu5xs5vX3C8jmpEF92ti7EYunBP2G7rWZjTAm9yA6s4n9W1SucCU2aRxSNacwzZ9Zo1h8vKa91pLe6TK",
  "key41": "itvjcC8P4DfA1WGBB5HxhSkbiKyzNT1mqFxF4T7qGBppD5P27NMFdTJbzkkYbz5xwrYe2eazBZBfaZrgYAaDSkx",
  "key42": "3TMjALEHkCYRj2bgmCXCziktHqNq99Uy3r3Q9rhyTBdQq1rBJPLF2F8Citi7wNys7FJhqevtWMXHingWUhniReRU",
  "key43": "2WR5puSsmtNCqt4XgSo4j1REvNayhnPU11xNjRhCSQTVJ7PnU99vn9JgoacAGgn93vunSKFembDQZbbyqkygZgbY",
  "key44": "WKRRfUWY4NrwPBLHzv7GDToWs1edxTTJQGMUWzBYZciAWePoHb4PRpoEqbKJoB43HUG6Kzu8fNA1hJeShXYLJsC",
  "key45": "585wRaq4yvDhURxY8Fzzy1ezoLk5h4zAqQJ5JZ4nvawPsXt597e1mTueT2R25o6X824QwzMpWz3CyBz4hFVgE8Jb",
  "key46": "4NXoHt12pdxntWfGT3UoPmWfF98dB2QqSWSgP6a7E6x6aqSw2J1oWNB7asA9z1abmjTD9acbsn322KhzT8mHG5b2",
  "key47": "4vJvLk8SWDC173FGbMwyeFQL8itWB4moXTgVtE7gXCYDtzP8TN4BCxE2R58Gu6AnftrLpcS4tFFjXURkgjN82LYr"
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
