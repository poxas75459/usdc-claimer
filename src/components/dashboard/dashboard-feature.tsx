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
    "k9EfMQrWuGM39qCkkmJ5HrYSexggTSgp5d6dkjFWNq8a57EzKKgbJb1pg4p2Zq1SvU4pa51aXzg1SNnCm8RaFcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kbWSU29UJ79kTgqoU39WF5YHUoJ3hUcFxvkaUHgE8oXHP3AVRHbCJbtWdNdEi3DxvEGoKjJWeHDYbTEfXdW6aA",
  "key1": "3MSpHJNUGJFTAWoV2FSwiKybD2HPTgqaVAeRb1HECHmE8Q28fGL59GTj4pCajdurG5rYNwhcs4yzpbuVTvKgpQLZ",
  "key2": "jbHv4VWzmEY7PdkfHHrZA97QpuJguGYaNmP3kmTgmqtgvJcYsvwp4DuZ6FAJ67ceVDbRR1pA2FX7p85jFZDjQZn",
  "key3": "2eump1Ffqoz6jX7oyKGMVATwmYD4jD1MoU3W5ukknE12uBqqx1sS8E6duap1JvYHjeTG9sPBK6zNjAAEq2JJix2m",
  "key4": "22zszLBPTrxdJEctMVK3gp1Sk1vVibnxGTAKDJjxJVYX77JmT1vUQ8yTyNyz5qQTceHdrcrg1YAW7iN7TAscWW3F",
  "key5": "5haLutJYMagWZrKg87JxyjRoAXLixHqzyYfrnDKe4VggBEzvkpgLuWJozA26oC6Lxsi2LBVEBvSbUjFmMxNXpybr",
  "key6": "5pMXjSgX7uK7BGwGZAyZRoDbDtHKRAX8DSXL5hFiTDivCqEa7rSrvgo7zei42fcAf1kSaKwbWAZ8CD1ttd9GhRz3",
  "key7": "Lg6Y7ZPuhbPAxeM68msgajgvRQ86goGui3hDUdSWCfNU5mqB1FPvrLpkSFHv6MxXGCaeJphvxzxwfcJjx1pCMi4",
  "key8": "4CMqVRCt1JPgyNgNUpan68QhVKaVwaJgwsh1P8esDBiuUvVPpVBkZqymikuSAKmcnT3yj7vnfBzcBtsiqjLQz8f5",
  "key9": "xiZYPiFbJjqiuSh3xYvPnhBE228SV3K7cjZwftAWnBCpri335RthvciidPo222RWAhMsgzXdoUZt5qPVLSer7ZZ",
  "key10": "2TU51QgkH1yHt9CB916cz9YSPG2qgZayS7AdBwDLLdLPMQUQWa4XjLDeE2dbb3Er67LoMgJr5Ld6b3SqiNEFbD6R",
  "key11": "3scQdMpuf1KhPXCVSTS1Y9LzhCx8xPFHG3QSXkWo3EZcPdyF5qme8ksXP8KhpXoK7vb58Be7GkczhoarSTQZbJ8w",
  "key12": "2r3PkL51bQaCVaqhMm5bSJYWbQvjvtT1f55c8phTHFXu4gDBEtaHxdHJCnZ3sUHoo2Ls14eY2aaoJa7jYDGJpFBS",
  "key13": "5xcGnCureBw3FdEMryC4byfdhLev4daFbcK8GUvErQS5wsbvgyTgoBDpiLnyEzq7j61KmTadHToPfZEF5iURetqj",
  "key14": "45LprcoKtuSL81JNGg8aSsxcGnAUR1m7Yz7WbqFjEnmTBz99PJmFYgkZ6fKHL34oPMpER79AcUKh2Q43jfHSohm7",
  "key15": "3LeeV31fZT11Lq7ce6gGY9y8NXJgX91Y4s6oMmwYdFfx9pUvtDFDgfgpnZ96Aw3GaAnsCquNN3Yov7HjPk3MR1xB",
  "key16": "2xbC78Hw4ScSKYjAKwY4PyzeMrkcnHQMP5FFxsBDwVS1yyghRbZf3fS8Nxd53fUhrGdNe6vMXcVmTikxJAijm4Xs",
  "key17": "3iYKVU5oqWo2uJVMWvC8nhjZrVLCeJTL3EbjU8ud8KLKbrZtZ8qgmn24Liqr3fbN1GnanHRM87dHmmKix4ydUgYF",
  "key18": "5f7PH5cq43d71NrPi3qyvbBuw2Bqz1N94qaUyq41QicKfMKoA5x8SrYeK21vwnwx2rYYHC7spqhsEtSo9P5NGqpV",
  "key19": "55R25VxP71tz1wqVUUAirxVSGw9d3BmY9zk4gbL1jsyyrcrZgTFGVqsKh3PEp6C2WkHEVJqVLQ2kKLtAezko9Xne",
  "key20": "3qk2gqU94hFHDrsXRj7NM94LHdCYkA9gsPAFUEwiGnZfEW8TApi3ZSxBuGhiuAYZbMhynEPfumVNawuKYpw7Xfht",
  "key21": "2dhBXmYNLQEnDsnsXqm3ApYyYyX8o4jMRM7TeScdMSd3n1sVag8zpcFX1kdAKGzTLWP4iR1swp8zDUL4KjxGSsyA",
  "key22": "Ahi8XkcpxvG2ABoMz6kZJFic1UPaHaUAYB6RFsM6fXJWkoZwALjPHhWNCmuKJqqKWYaV5FgcqxNryrSKcRTbBtW",
  "key23": "5wxz6epDbz2SNutzpvTGv3t9NW3ZyFdeJGYN7v9boti9QhA26TZ62jNEDXDSYmg6bFxmzY7Mg7hdqP99Q6xLkcir",
  "key24": "56D8sZPzrUpZs7arPyihECqimFoKWagVwRpxqe8gjjo9Y1GEsWQtoZUseXd7G9a1KAFTga5YJfpUzdeXfQm3bue",
  "key25": "feTZ1dAVMszeq4oLTbTZvJX4cFgzbxjvi8t2zfg6LnTDv39GWUsbvoTTouvh7fC9rqSZM2sB2xcQZk4UQdnu94W",
  "key26": "gAkRkLvHyCVEyehAdNRVf5sZxYZ25QUy1naRrXHqzyBihxSDaddJ9AksPgAaaCJqEYuV2dzfBFCEfbiMoJetmc6",
  "key27": "3pUHgHz7Cm1jBpidtmcgakK8azMoiFDBb2zufpdXxqfEAZg2mx3rHdTnNCshDJcDohcCmuxZMvkiA84JD8Dmgmp6",
  "key28": "5tzPgv3iMMgNW9CMBWGCrUg8p8A5fpX6uYkAJuuLi5oVuJStgSrTj5sKKNFzZbS7Y7aaJchitXCXHghAti864YVS",
  "key29": "2v9LymBoQ8W8ji2oQLUiWVFnJQtK113hABe9UD4e849VDGuHkvcGzw1MGqGe4wTPewKFdNeLfmEj1TaeosSd6Tez",
  "key30": "4sNeRAvgNFWDhiopEEte2Z2e1xMjFCK2z1gsdYjqqhnnyqHvKvbqwAfFW7gc1iU3ZFL3DtcEvScfy3rGDk1ZWbo5",
  "key31": "fU82k9RT4zchBN3NrmPaZTyXc7YyHevFVWV4RyMUG5aXKPBe4YF5pNLkNAYAXC5mW1jY9rvkKJx7JFGyomFbNEE",
  "key32": "GkeqjhDErnQdWnyyAb6HZXsstSpNoWsPkUw6j7H89c5h6ZZZvM2wKLCHzzuA3ijteeLDoX2vSmqnFmR5vzMf4FH",
  "key33": "mep9eFQ2xSK1AbRphaBN6zxznvWjF7oFZ1ipar8qPeCCi5KgLX1FZiWu9qHs4jDptHkq5TJfNpSBAkuuE2hpUK5",
  "key34": "5GHPc2NiFKtujWT24fucQKEi5J66r7grcGmyr2BmydpQpb4wRYo7s4u5MRdWJ5bzBnBmLaWFqATWAH2gtgzNXHLS",
  "key35": "2b729NnTn68DjEDty6SiMES316xdXZ5Pzg6MwwbBRTAtkFiEuZTx58ogN8QLmrU731JUgaM1WnDXzb8NmV8MnC4i",
  "key36": "3AT58XCdJWynZrKwcQwyX4anbW5sxRqKHgaAbK59B4JEoysxDJpJdvXxrigwJ3BV7gMyxqJji5Rya1eR54jcnXoL",
  "key37": "3fjJeFreDeFWufE93Z35Upw2itQoAevpgRnC3ZYDdo5KQdjTFFhT5rcYZgkktRAHeqTAiQqQfWHQPnTa5uKNUeQ2",
  "key38": "2iUJUX6iW5QCsTmdzHxaBVeqnDcwWNYNANG9QSayjuS61xWYgwmFFU7nheHnYVJjgFdX8sYrNqSaXV9wHr91nN1f"
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
