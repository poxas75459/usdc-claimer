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
    "2eYDrTnwVpWyH5wZabYt3pvJF3D8ExGjkjGov67V2ehxJTLLgDo5qQB14VDghPHnGf1NUbEwaYyX7sMWvWnbW4jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49NSzmcen7hXbQK4TePjnw2n18ZXUiud6YRUesU3abdYeF1NijGwCv2pvpxDe2ansrAy4yYrKBUuhXqxeAFiuQAe",
  "key1": "ybKbYewG9bY4XAwe7A8C7kRMJy2dNbxmSqsH7uJ86Ein1U94vfmkTmPvPx4T1ZaQz6ns9fAHvytQzYmRdgHgU8L",
  "key2": "5az6HjMZpUxDycA4gc35b17PEgZBgdmfeeqZ1xpRMXuBPZ5tN7Nbx6aJicFo8fPkbafQazNdVBi5mR4TALnR2ner",
  "key3": "5KS6NL9XMuGwb8bNC3Sfzkrsmefuis33qBPCMu1aVAnhJVi9No6JDeytgQirrrqmqv2VQfd4RcUTNh4ZprM2VDYH",
  "key4": "45MdVzithyMi7qLTdVx3wwsso1wrB7ytCtrwyYgydZ4c3HQXBeMkyW3wtLgKxw3xr2T5EVsZTbwwK5jDACqqAi4G",
  "key5": "3427hV4VwxHn7F75zP935w7AaMr5dHjscpQ53iEY6DswaYCsksbHCWbn6p2V9ve3Zoj8bzoqiRbwGseFdN8qNAaf",
  "key6": "vgGd2RyhZ98ePa4CsVTAc5WJxRYoLJD5kWFtJiYLuC9gsLZMTjcoS6rQy7oipByiKmqsJDPqeJn1aASEeTMpP4T",
  "key7": "RfSSRjnZqhxVogkZ9Gg3NLxMQpR1BcuiUhfuYozA1B9aHoU1AW1uKAbNpqYN4WmrTWsUXZTKAxz6kCfdYgXxq3L",
  "key8": "28buepSrAXcgQ5VSvoo1pWushJH59oDUy15WHgH5L8MHaSaXApeFgg7tbwmxS9AFZ1w4p8iLjEpnpWxev4LwFw93",
  "key9": "2FGR8QhraBH1teMwZpJbrVrW4UotAbbiKTT2fCVHec5UZQAPifCVWPmNDzi8NmLdeemD5yvRt6oFZ9BzRsPGXrdP",
  "key10": "3P8hCWxj2w19FjLGiyTNWeEx4C8o3MFgrkRxvCn5ZM7Gabmhd5gcZdWRgM4ZmoQKfegaEBcSEeW8jZ92YKkA67yW",
  "key11": "4pzGrkMd9V57nu6vjZx3FSetRhjg1kdvFXehsi2cMVDUAhGbMLAxCd5xGbSefiWKvt9WVFtwaMrciSNwtHoDw9VD",
  "key12": "2xPLMuyYpwHpFn5EBkbrCpwapB1sAsii3hsgm9CHtYW6WGHcQGq63x8PKLcqaF9hLiy9usQ4rsa84caeKUpvadfQ",
  "key13": "iT6rYt6Et1s7u7zSd5KGEhjUNYNhqPDjZWMafd1abUDhSzJTwdZSGTDuCC7D7AJtJuvGREa1vkq7kW1NpERQY5B",
  "key14": "2LUot2S5BXRYEYdE1ZbngcT491uiAuwrk7kPAmNbtMWYhDaTPPasixvU2tjJTjYbGRk8oKcWAMKsfrGayRVgHugS",
  "key15": "1UNR9GnzBM31zQg8E8MU7SDN7NouieDA3BovEWnha7fAWfDubG5PurWzPi7gyaFLGgoG3XmYe4MeFeBgsyQsa5m",
  "key16": "a6fVE92qZkh9YihqCnPpp5zVHuKsAkUxRafBqU2PZporatNZMy4RSrapHwGRCAmSrCpmb186iy4QNuc7zw1vGXK",
  "key17": "21yQEB8rsVQMnTJTUjrg1qCQ6GLnNeHPqJuTiLJE3ogq9BBDMUoAjR5X2phgftDUKPGcgjHfwGWDQRFNinV2WPtV",
  "key18": "3m1jTwWjN9JCZ2zgnumTyRPmq1GBQrF3cQ62X8GHoez6zni1HMw9FpADuFMvcvC4RMtbNmB16qgn6Qy9Uwgg2Bj1",
  "key19": "44gQ3GhPt7F6dEHJTvft3VPBsPZ3ArKe6CcMqgdSX9okCYubN3h9Y6Cyyb1jTvmxZP9wnsrG1vzenLns6qAk2Gwo",
  "key20": "3N98GYUzmPi1zu1AxjtkBT2E7MBEVcVBqP6a8cjaRgzEwH8BixGrz9ddBEmEe3ZNSYx9bM7a9L2tFLdEEkMvqZbB",
  "key21": "26YDfvbvAWJqPw5itVTAgPkC6KiN7uv5yx3X4srbBTm7ztAiSeHMQvafJqLc6JLa2fEgTVq6jXfL1GCq3HZbfXy7",
  "key22": "2zPZJ6uSHsccXocUZVnUuRyYZXw2Yzt1uRiA8roamD5YV8XBAEV5PNCysSb49YyiXdUvQk1tA9MAwbtSbdL14BkC",
  "key23": "5vV6iu7d7HiQmDrL3UtyrniNgqg58seaLGuqpgk8DZBsyX6exg3eicZ4MGt8P7z5QJH2VHdWzbmpsQrMV11tdKkw",
  "key24": "2DpCQZHyAD9kKXYe1Ng8c85mN3YbAbkvKq4g34VC4u9VDGR3SJN4CW57S19UaS1Ha4vTGEzRqz2dTWYLv2RMuTkf",
  "key25": "4TQ5NgJPXywcVVawGcn6NQYCdeZnRuGCwDA2cmpSqspyLh2hKXNRZr8E1UiSzHqL2wkLtXiaTbp3qNe5vV346voS",
  "key26": "oDfA7fnxHfAeF3MaAspmWCjGopNoJUo41sBJFH3yBsXqTGuvvfGNrrkjN5TSLnhcM5zufgReGC19wE21ydPLRtV",
  "key27": "2uVBw4MoJXH7TP9PqcxHCjpaRHyGjMaTQkRGNgEVUpvPfEGtCkqBPXehu8dtnnq2VqJFCojSk5ykM7m4Y5D7h5B1",
  "key28": "4xrHaFkWgDYxp4mjK2XfxPWDCwv2kmGVJ6ek2H2Z7zVUSU713MszqwQWFNBc21EhSKoHmq96X2B4tJuNJy6kRTmM",
  "key29": "4iyv4efrwovpUyhRrEEt69BZovmZ7zhgzXbTpJqxFUJnao82WLZ1gFK3EYyniZ2SNVsBo1DM3xvG6reyjnvNUw3a",
  "key30": "3oaVrmVV9VKLB1yrkERC24HpRd4z1fpEGy8vSHmSWnkWeh66hT5rhW1WXHmwFpEqb8jfoK7YnC6BUosNbNXgPKjw",
  "key31": "rXsRSZm847DQP3oD7MUt4RbtP4fJR1wuY16YA1jguFftsr2XDbizWMMpp6jeCGcYFZnLa74ncqNpDkhdgQi5gLK",
  "key32": "5nYC1fRFBAc9Fot86wU8LgSXuELoe37tJ6TTMsae3gAXigPSk2yJqVCY6ezTPtHZrwG1bFvDULVfi9xwjzuMqd8Y",
  "key33": "HNgHrgARMEc3z3hAY33NP3Fijf6B8wxtWgZ4NY7Cf4Z6Kt2jntGBNtWLLKhVNmyFum7oAuSL3TrrVqsstmHzuBW",
  "key34": "xXFxjA1nTggz4kjmgYQCvALScDTMv6sRsriGLF3VCFKQctgQA8jAnZ8VqF9qJw1iGPaPVjLBNKxqV5Z7j37nMvp",
  "key35": "3Vd1yWtFzgVWAynZtwaakiAziiEJYHpdzchsAjNsnUuF8jc7Xr17sNoxYaMwMD2Zi7wrms1GuQhCrN5UrEH1r5wR",
  "key36": "4a3HkLN6RwUFZ2pgMm5koLtGeAs4JRJmY2huyS4Gy8HEq2PSgPAfZsynne3aEi72u4brji4LEUj4tJb6u5W9dC51",
  "key37": "BW4n6keiTEiqCRZ34spfajh83nRYmdsUVRRgTNikq66ugt2ryfxHx3kJGddrMBvJypZmi7awnUf9vQ64U1JLwiN",
  "key38": "4jYhUE4Fu4n7gdKRNRv9qwuxDDx8Js9Bejn4BGT39uBQfcRTiSH4QAGLj864HXTeULUETLf78tAkW1kjbzLwtX6s",
  "key39": "5djRJtvPMBTm4QUgQKyr4uDxaHm8MHQHGyTvcFphSTb49SXwvvjUdFzs2mngDysMGfhifcTrVFeagZy95FEWUWun",
  "key40": "654SBH8MsQ91evSjDs1CSRN1oVC5hH6p2Q8tv9tDzbjdQGcmzivDFnwxVXVcXVJJqCy8ztboQT47TbdkZR6BREQg",
  "key41": "5Lmcxh1osoTKx81ttG8UWb6kqC84fJcrFWTXDuoVabcMg9n8sqVbfzGgTPuWZV4sTTcrQSkKZFtqDtyMx4BQDkhT",
  "key42": "4MbqAmxc2Azb5z7Fk6gty6TyNYedCcKjGkDFQvE6dr7Z5TYodrQbWh4zmpGtQS6wTyBnKVrwHyBxSgaTETj3eZgL",
  "key43": "4Lae4ssJL9myawocY3n7ankEdZEDvU2nC4yfR4J7AYNrkGwBPjFkwNZc9KoxyUV9mbef5UWsUYbE3cK54RvdJQiw",
  "key44": "c8szc7L7w96YHcbHTB94fA7XowV2EDoNjYyh2LoKBAGWwiRosuttq6KkMygw9dbFXcn11W1EYG8KsphVsBwGpvh",
  "key45": "dY4CWRi8kAx4yYwGgnvUS9Bqgn8K4SrcpfN5NvTM9oRHt4A9Mm5UAtpdHyhamPRHsAEHqnJEmMDrW3QuAEg2BzR",
  "key46": "4nh2LE4rRa7pvPvbgQRwpp4Daqjn8eLTTnKTXqpJTqJVCqf7Ft87GnTLsad21KaH6mQXhGPcPgL98yarXJdY2fdd",
  "key47": "Lji6aMXeKWHvcoqMGvbbvad7HQkejPX3NaPvxG7mCR21igCaEYf1EpCcL96NfNxFo6k9xnPRqPuRTJrhQpFpxiT"
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
