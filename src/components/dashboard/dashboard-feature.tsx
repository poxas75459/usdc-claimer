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
    "27NE57DiF5Gc2BvpX4uzcE8s4PrZya6bTSMGxJmobE77LgsUu2eZLwfyV4LCFmdgyKKbjshsxRKqhgxQiu4X26B2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywPpvALoqPkB8UjonapZ8edBKd3Lnhm5NGsJFyPWxMDFuiUxXtjVGJdfGrJkjwcV2kVYZGRe2PU1pChXb7wyjvf",
  "key1": "3xjGUPoKqZzCvjg6JioNxBDr739MLt6cEp878biWrVqtVFdM5c1CstDYBDJnX17j9xBEQDm5vwpE4yvitXG9xHJA",
  "key2": "5RzL653FwNaYxSax8LcAZB1CgNUEbs68AvwrsQGw9h7A1zi4ZCztGYsZ6aMXCExR97c9b4BmypWruRvtKm3dt7bd",
  "key3": "4msGwZyVL9uksMaLwijg1N5NHsNRbW5fvjfKDptMSY4y58FohbyJmwaRsqK1jxqkjvupFc7dG2y41ubg1x7X5Zus",
  "key4": "27i8NXwRJRXxeKHoS8KztznqB1XM64JC5yaoHFBQYZSraCStxtoAk8TC6hRG4558wmHyDUGEcEBcyg82z8mEGnsZ",
  "key5": "62ZcqT2baekqdg2ZxCzTiG1DyyS8tesRK75QYjbTgmw4S576MLK9qoTemkVA4W7pJPcTRqu1FwXpvetKeFwHhQ7U",
  "key6": "Phv2ECiMZahQ8hUJZQoLTfCGEG8JWC82H7AVaiKLFxBWgSBJMnwgDszi55PUa4GntGLyJQiro84AwSbFsfdJSM6",
  "key7": "2w8kVLPa4BDvTcLR4ENWg6XpAuszhPUCohz1u8f3RVRdoNbZgFpvfsgtatoizUkX93Vj2neYqzKfL4QjRSJADxq8",
  "key8": "2mY43Eb95BT35MK6n3ghYJQHNwyQb2r2LNR7yp1aQzqGyfQoHQWkaqDwh5NKUyJ2BwoM4pvY4cWc8EcYdqkzZnL5",
  "key9": "4XVsRakX22pDrtRX8CDsVd9rNDK1795ehh1h2GNUBNfTkrf2zonXENpyxRStVo35nb3UThZLobLGMf5jLQcTNDzX",
  "key10": "2Ves7zGhH4DbSv1djj7kzwJmCAJpcDTw9G8KVFDBfK6bjpgKMGhbmxcDiJWbu5F6zeFGaXiDG1n5RSMJnw97gMbB",
  "key11": "2Wr2Ptbd3fVfxEZQNbXnSaYD9UTHidCgKoR1SDwy7rwSffeV4WFQfA8Y7ACgf3hxHxFSJtZTUZAvPWdeWgNUrRo3",
  "key12": "2vDiPaXmUBo1Xpz86jZt4gA1QmcnNCPDDWChf93HucsMP41SwDZSatJkevDHCFA3byMQE9HWrNa6H3Rii5dA2Jen",
  "key13": "45ivw6vHqyfKWiSXfn8smAcKnLD87hWBgp53TzaJokn6J5yC2uPVJr4Q7KFuBuZ9vzsB29hKBLnfFAjKfkfEumGr",
  "key14": "2ieVMwozhufnhovptTVmiTytwz251795D3dCZ1nJa3PNbV6Feuxq2HMS8UJXrGdoLEcYvCFXV2K7NvjARjBZP26g",
  "key15": "5H5rfSsYaPtRisyu38J5d8UuzKeKBk96KaopfevnU5QTgpPCWw3FT5488Ynk3oaHtKoqPnzfcSzpMVvuYtdrKg9j",
  "key16": "2hQBrBVQFWcsQrqyxPTcf6HyzurD4LpArn1qc5931VcidSB4eYSNrYmuqLTmQxqiSXbp7rLi9X5R9yPMDTV6NtLJ",
  "key17": "YkYyjWtGvWKShFHCoGnikCJp4XHVGzNNtZieTW2PBLhVX1u32usPAPW7XNpEHH2aVTBHLnfH65C8Nkpz1vmNQir",
  "key18": "2itVXhdobEGMHa7sd2HskNkriQ4bJTfMC8kf8PEvtacPvo24tDu52CT3dq4qWfrAVA4oGozDgAExVisSJRecvQT1",
  "key19": "35MqJDFAQr2ssQrkVqYmPg2SRcJgeYRGsr4acXn8d1a7DKJaHisJ1pgmi1QVw8XeTjHc6NGjtzqE7aXUeGhe9ALq",
  "key20": "3nG3kGomYUoS4VQJm3DvCnVoLtQnm4nZLC4xrDcB51pdfkNXbMhBHHKFbBzRogvaitB7SVihhq2bSurmbKQbcCTk",
  "key21": "396UwKkZAqMCupZ8F923Xrzmn7i5Gxta8oo2sYU79j4hDgVddbtdifNb7vLUfT9ByJUtF2S4ARrJ2MaWm9ENwqtm",
  "key22": "2FdRjKeqUJktLmA1xCXeauCq79ozMiMNyDszE8BYpZeZW8YLWt8GTMmdaux4GuwL2SZiTnMQZNtcYBUzsFKxJuDB",
  "key23": "5hYEJnJjdxVM3MKhuVJWk58QUpkGizGwJWNfgrVBEeK33HNmARsbqFkvezVqqA9fcy7P4BTdoQ67tyg7vzKTzpBt",
  "key24": "J2kACcbggHD1cGYPpQo8db2bsZeRdAFSB1bY4swn81EvKrhyeLGKwPfybSYKAqmbgGwbtxfrqT53iXGiTAKCYb4",
  "key25": "23nkFj5xqsFd3L2eEBrtQCrCRYJNLkLwW5Wiuk5bLvDZc1LGhdqK7sfhDnCuxYXpUmASrBTE71UYUUSrUrBdBfGo",
  "key26": "m7PPDCg3oaS7eUUSeTiyaUAQUnMqXm66at91zXuN25YAyLw8bSKZTNc32H7egF5iTToRfQUgScjamHXfPnXzH3j",
  "key27": "3nGxVUazmkiw7PaWvcuhPKZE3fD2g5UQR5J6ZqeGEUKe4ccgpdRXqftXZLrztitaU6W9cNWnYz57VfxJS24wvGjr",
  "key28": "sxwdUJtVVPmxoonCuxD8hEj31139ubRU4NsJMDSa7zgwCXsBUL3XnMrinN6qrzc63PrDBvvUh793zNfyUmyB61m",
  "key29": "47CnEwQBQ7kMMwFhj4A1b9uPWFDXVYJJyiFCtt5fybKFqAA2URy9tjCso3wvvUxeJLG12Ao4rWP6UoJBJGt2PsYu",
  "key30": "3h4fX5FWDvAKwe3NvsU8cqbv4DoJFEn6LLyLxnpLLokP9j4d4GXgxPqveF73ggUaDqtX1qsJrEeE3yvqm8M1ks4B",
  "key31": "85cJHWBdvCYHVmeAx9eFZyX4TW6B51UdmWSHmzuapcxVYAi8KUjtLFoDumKL22dfX5EjX6GwD8Jjp5bvoAAR5Li",
  "key32": "34AGkX3HNSDFXRdqMrZc3GuVMMEvpByagQz95AQuCYLuoUTqP1XwH1KQCg9JRmqtJkjk8hNxN9rfjQqnaR1C3n1k",
  "key33": "4q7V1pGRHDNyiYtSn7dAa4veo4Z6gQUyaUymQzVLpwUe24evWcLRHAKXCn1kHQSgLSz5niEWBbD2L2b48BNTFK8o",
  "key34": "51UsvaZRAicvXXDpYNY6JDzDymtS16AtuVgmmBVaparnNBxiWM7QbmKikgwVtTtdezV1v6DFqPUduiE8KbPcSSWv",
  "key35": "452ZWneWc21AQrPphrqtazo165UVVMR9UaSMjrAX2ek8JuGMMFamRe5SLXp96dSXsEzfGeBwF7ZAMUYHBnw31KYb",
  "key36": "5Lf2wRKdqtC6x81vX3KkUDHxi23Y1AicmZRpohgQz1xFLWW1twMR1iHu2FvbJaYXaA23rq9C2on8XTBruEvgjHJx",
  "key37": "ZknrS3jK1ttgsKtoTYEuZ83hweNbNEEHdVdDxx6scNeR6Pgf9kXARSSKsKPSocMf8FDDBgdoHZ82CJG3WVV4BZH",
  "key38": "3Xgaz3rfk9yJzEKgDoMjv46PEp6mf6aAhooixX9qx3mcHphKCzSS7oZroP4wK3dRrAPSW54poRBw3HWWGNxVgXdv",
  "key39": "e2WzXLtKy6MrJUAZJRD92izQApifesPArD3tU6LgweZJNWXq3VxBqqKEvG9f5LCjw9ddFJFhwYwkaLkPas9moS7",
  "key40": "2WXAnBojSrNGT9CTyFR1bGFSaohxk6Zg7jswiuyRqCfA4McWDu9uELF8B2E1N7nt16AWAMhfpZR8bdF1hK2VeTt5",
  "key41": "3uKfY2kxzrPe8xpjAPe2VJcs89bU6PszqWcXpC75VTgYb7BtPaZJxKVpdGsQt6nXY9XrbeCyuJkPCd3WWjdYSKcf",
  "key42": "5r6AjJYk8pAb9z9bbQJZgUx1wNa6sqYz42NCpoiYgTDooRgVi4ioBFm1cRNuVtNJXtQsVan7YWUA1LDHN8p2NP4u",
  "key43": "46fcyn9jX49Z5hwm78uJ18Gjco4uZ3cExTdcpo6MA1scxVCqLeTstuo5tKQ9sBvwyCbxQD9PV1iMCzYDJv9bZ5MP",
  "key44": "62PSBjPvtTxxhQbUt8KW34zYWXRGDQ82G2sq7DhdcAhtwYa9CRuwcsVGb1YBPCmURoWWzjdNsx8r78Q6wkdG3adw",
  "key45": "2LMwwthzuAqRjft4NzEpmK1WPVvdMvcbNFuUnd1F7AHAG4cnZf8GXL4HCw8bpNNXdXwCnvToeRgFqvcpA6N6zvHD",
  "key46": "2jtYgmDmMwzh85HQ9vzRENB9YCa4Z4tZQqQ83onbuzRRonKoM3RboD47c4hLxbVohX83Sbe1PWCFxkmdNWvcbE1z",
  "key47": "KegPXoXhYzDHfHsQoFZLgo4gpbqe6KoCRrTAqiAQp9QYesi8RpnUKw9AybT2M3iSd3mEcNUxzV5AFMNcHmKn7La",
  "key48": "3TnuDKTqxv9LzwmhtdeKZWmSjg3NF5yY9S5vg2WjGxhaTH9A1QNkCf2tmSWtb91X5vbt6iYXhyk7sYCL1ARKNN3o",
  "key49": "2Yr6G25zpxfxvzKHvTbcDTQG4RrQ3WtFW6EN69Tfa1CYtrNAij1rFgwmfFPziTFYPvcQxpsK8TGexkTw33dMWqmE"
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
