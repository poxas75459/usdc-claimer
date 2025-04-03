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
    "3rnG14afW2NrFhv494GSJu5SpiSY8Wi6kPrHzrRknK8a4fpKQe7oeXn4dBnwKksyshR4VQssjE1qezXqFehCpnoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgdgtUUpWyx8xsEzEXDCRH3mdEQfkKfQutGSVLgRaxzW8t6Fk5jXwiC6jr2AnUoueSXjLhEMgyu8aAwaaWWxxoe",
  "key1": "4wJKUm7aUvuCi4vK5S5RyKd27NBFS4A1SnCRwVA7Wr4ruATfLrSJjRqRPbojYNb8UHYqjLZ7GwcHFgDjtdyH3xK2",
  "key2": "4QAkmLeLdvVXznUdegjAAaP41FXPURvBvXcnEr3SCuEQ51gteB5wa9hnPtCJsWv2sGWKjoZrC7iDto931EUpZHNU",
  "key3": "3ZY6e3dPBRzhHW6oewmnGe76xuS4gfgrfs8hWgVDgD88bGaD35L6NwjcrNk1PCXbh1n5NB4ZDphidFNXUK4Bw5jG",
  "key4": "4AFywAe8Ec45b4B5jyvj25v1ngfro2gef4vPh5bu1TAnqrbbNLfaaxwVsHeF3JppFJJxGyw1L41aEqKkRmw99aa9",
  "key5": "5DtVSzKKGmigrxuk2qwXPFczd3n33SmkA2jJLcsQZB37wDHpuBRiVAbk1FTky3h3KanUvEG3BBCs3GitG7Dk7UAf",
  "key6": "3wXiT9eoH54mChrKuADtxSrf3sXt4swJMNkExtfo6BrADdrKu1L8gE8ZpumkWvzRSSh47rXHCWSi8s8T1rJt9Xt5",
  "key7": "4D1dcX1a4wKogMTAhmJhT51fU9T5kNfUqiu5yjYvCj8wMkfYe9KdAQLLXfzZL56VUh2ejKYuVQ1XjwUzKS9YLsxH",
  "key8": "2u6nzc1csinEVN6JbE5GRTV4TYV4M6h64sUW4hLjavX4CFF1Aba3Yjb4gykT42PSAfLGArNUDCa3oNKP7EmNqzfN",
  "key9": "3aWE8L5B7aw7fxBCYAUpn6LhHfAgdi3xNMa5Grm3DiEfDzqyMJ8r7v15MMv93BJ4CrePh8BqtypG6iV8nzgH4YXb",
  "key10": "622bcYbR5TfYSPVJjNgVSFb8vkUpGpjD53UKDanpzxR1Uqxxg6bgskM6iSfdziruwMQTjPuowhnLuxnUW41Kuy4i",
  "key11": "5kHFaiww188rnxXNAcJeTauxEhWf8Hfx4HG8zvU2VvyWivr8JLQr8ZrUQ2TPABkvEr4p3WZsrmJYDboWdhbpQEqV",
  "key12": "2D8K4VWCLTnycXMe3YHqVibgR8utuqxHRW5ePw3taoT1vXNj611Po13uwAoTif6Vw9CT4WAS3m6kmMkNP2VTHzRU",
  "key13": "2JPQcfSoQj2hwh76eQr74mipBTad4ZX85kUKsiUP64ZvU8uxhEcLptUXX4kmZ83iNpa51AMwprwkHXWWAwoei8Qd",
  "key14": "FMQQjUHKkUL4fTJhW35gq5YLaoDHCShy7RTRgW1yJaEc2WuYJdEa7hrnBqYp7pt3BnYGfKmPhjz4vzXRd5HjjeZ",
  "key15": "GgAZASWw2uj5Q5X1dNCJD7c37dNqD77xtAQHxw3hzzrVX8jcw1yPsAkjeFR2PC1ctG1hhTECShiWWuarrYKQZg5",
  "key16": "GmnQhrzoQ9kyQDaXZogjtHvnRnDKBgSYe5KM519fpHCzJp5m9T6vmNPmgRN4GrnGEi151skty8eNU4eKbkEREaw",
  "key17": "4b55H6EXs3moBqs8QNa2zMkfDxmK44jF917VDeRwrjN2A5LAYB1Ka9nSAof4ShbBNkgNU4fCtiXkcrTxmUcaBkt2",
  "key18": "5nDkaGfDqobKhbq1ckVS1A1Xu2Cm6MEeM4MqmPz3wKh1sD6aJEx6fRmK3Egu6FLveMQmhVr9EFVQF6YCbrWP7bY6",
  "key19": "35iK5jUkDva9G5WrHqWTGTqS4YeDv4hcUGG3UhF3w8PJ49jUYHqmFLwaFidnP1KDHYu1VgQNoZoPMaZXENak6hW2",
  "key20": "2exLvzqN1VQRkASKs1A71waPFSzGQmDxCnGATpCpYFbrBquexJxQidYWcXE2s93KWZ1p83wLBC8B9pRTtVMWed9B",
  "key21": "3mGM3FtRtwrM3MF5Pzv7CB99eYq1wMZuJ8HdKoC3aLyofEDRXdajtbkqb8oNo4HDEpbTGAnK2cxyU1zVkuziYEGX",
  "key22": "4oSGhj21Ni3H65yjonpVD6VNHWN3qnuhq2i4VXVQ31ksdeMMNoXRY9i3SEDAkuc52hja8adPqhyFz2QZNruGcYZh",
  "key23": "3ibsqJ1tWTrc7KPZYLeuQgxT8wc9hUBHUMmUSkfdZxoHpEcnb4pgpAhgi4Q1BgGn57K69iGAK8KBLax97JoPxH86",
  "key24": "9gadvHZvH7ic3EfFcbH2p64NsFHuQTVLriTeEor4vA81dNHJhxYU7DjgaufuShKXXa6c9o9TRf8vm9Lmty3CYtc",
  "key25": "5eQvE7bUrZqNHwM3NtCGWfoTi8BuyWh9a7Q474PTiffhB6mbJ1Tqf9DUwkuT1k7Kdt5YKrP5JfmmLxfSE9TgBriN",
  "key26": "4NdmPGNgDifZgPZeZnkaKdqspKaQe76n9pZ3YNkt7wovsM3kh2DTESRS8RaaBi22kc5Ws69yvXvrE4UDSTF8eJCE",
  "key27": "5tzkQHgkavaJ15jUUA2fBu5f5EweomQSvoauCKsgHwe8KpnWSKVdH3gDkrs48fw3s2UGRRZmktg4ATQBWd8PPTQa",
  "key28": "4ERQMzKqcXhBpyWTDFcYTiFj43mDZ1z4Y3qJupDcb9YShXkTqDq56EKmKsrF1Dvp2FVG5gGr2ArhaYnukqTXJyhC",
  "key29": "2XFtBMXrvNAMCLkmw1XMjEpaj4GUGDbAnTNGE9zLe6kvfq5qNeufe7ezm3wevdXzm7AbgCBRUHR9d9PmGq6XZVKB",
  "key30": "22DCYDjjT45ekgKymNteYEXZxAbJFgZRTuHNE26RG1dYG4MUBSerTbG9zpSqDKjUUTq5k7cAE7e8WtsizfeZLRbq",
  "key31": "2ad4oeBFHQ7eUKrmRiKhJoj45spWVp2ujMqNMZmrXbpRUzNttkuh2Ca6aCoh84WPp6ZeqfZyvKxC5qqaMsKPfcCG",
  "key32": "4EqE9RUDtbYFXAyPQvehNgiepamWvejde1HehC61A7uUDSte3jqDab2omMxgQ7oV2KwfZciUwh48YPjqiJiYxpND",
  "key33": "3FSNgsMDFT5PvQCDZHTLWCyDDgFMscQrqEdUpU2Vbpsyw5B9RkgidQSh8xUJ5Ut2ia2yLcfTuRt38ByUzWsovb3",
  "key34": "BYudJajUTe1jYn5zYSQ5HwMFzkz2U4KajiYY5P57FL8wuojCXvQv5pj2Q5DtPp3Jcc4LzhezyujGGPcrpKGBoZj",
  "key35": "5UnbQTP851DCvQx4kjTbXWSQDn7chkVQo8sQpAESCJA2HELNj16oTYRnYDuZZdEV1Tj6mcb1afWTndA2g1aSSYw5",
  "key36": "4Eg3uwhLFrdgtTMxa76sYGqPMRDegNphcxaLXZCY11WZdKUW2Ei3MYsCEaLzq2zwKNfD5PZk1HmCFiL4yym4KnRf",
  "key37": "4BUjubmfXGBNYg3TxyytPK429BcW4w2MzkwvjJ4R52wL7QAV4XuxSQBKT3yyBNK8BXU6wL9GyteYxbXFBvNUCbmo",
  "key38": "5WVcZUXJ6K4tvcrdyiMRjGQTZxFtg8qiBCa5AabHyjW5BijrzBMyH8vy98CAo7edR7grnQRUrubgPUeeSkGs48FE"
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
