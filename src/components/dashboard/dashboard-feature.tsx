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
    "3mhYrVtixPJ9GYEzc28Qjb2EvCBfVEYrBdcJuvha9saFkhw8JoTwZgH3K6WjEDX9PSWDqotvaV3sE7oLWh6sWMPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUE3USYgwdTjY1bNLknusXtwup9Fi7Kp5JrQhyPs7LuPKNt2o8qE5bze5ASi54ZZxMENgprrsGtUAnmSiwDKxoL",
  "key1": "3BzN8QrsrQ5vBv37Uheef2vAxAotCvsJEoLHW8LVHvpv1mGY5GdPMfDnfyRmgY2grm8oikjQasnKwszPgFfgdSrS",
  "key2": "2wE66bd9f2eaYDQBPTffG3wUH7gprMTaV8mYADM6EyxcstpoUYyJM9ttdh2JPovRiwqP2BPsdeTDLzxyLdFjqj9A",
  "key3": "mH4R6FwUJNsA6DbT7EVP8uDZ524nxrTDQEBEaAiMfeEKKY8gGrud3cpQpPHwRN9L8yF4jxPZm1uCdPPty2KEzwU",
  "key4": "3TY4kmzQCEv6kmZ9kRQyPdNZwwxM1AseSDYUFp9Fs1urgYr1AsPBZGzNQPRg2xG3F7pbcn2vphr4kuhVmEZHGeVE",
  "key5": "3sagcpP2TWnwHdHfrS6K3s82c89LMcz4KxssrQmjTrs5ZRk6469eWmp38U95zM35nnXexXHA9TYn2fFLzHYRnkQx",
  "key6": "2wTp2vAv1LX86vEXToQkmKaGuxXxmfjrpPMX3u5Sajgp1ARD9SWt6PKfgKTW4mcdY3u7K9juQCDFxMmuFq9Y7Pmu",
  "key7": "3ng6bVbtwdafNjRvdXtwkps8yk1CChg7MmSUzbidY3YirMfvhDKFGC3YMrf78aEVS5BZW5QGU1WxAp5togDeDRsp",
  "key8": "3K6SnE6RH9bDnppF4bSCSRNsxKymBYP5GLZqcUHMcriEy67dtGQwezo7sucQuQnPUHgKEQyt2mk2D4qnuLa6PCRp",
  "key9": "5BMJA4N5LKJNXXVaUP3e7katJpLe2zg59gNCVHnXKpDM1rW8cTbpKXvcVGtqBnk5K8iktdXxFqiS8czaDwGBdHhR",
  "key10": "tiGJayBuS9AC5edHyqn4kjFS8XtBspmNkRyWs2ufkChXQE7BkmW4KtU3zD2QcpPsFsaF7vRRRxGETvE8DcytS84",
  "key11": "vX3dVRBsXJaUmAZdJFkBU8gNyfQiuHtYWgiiriQBtoygDa7QEUKmtwcTB5wTtGibdRh7meqWVVhnoRC9t8DuhYg",
  "key12": "3A4tCPwDdNyddpSuWCSSzFzik5iVL5UapuK4bxDpadF3S7QY8JpNgCuKHwgfXvAC3SwXZYQYRfTcY7hs2JptVNFg",
  "key13": "2nf1WZCTBqnkoeJnt1pqbgB6xpEhYsi2Dy6Cwuct7JWQ7gDuQkVKqGjkpHsanFfkGCUWPHe9qPFyZwHCK8WqwKEV",
  "key14": "2q2xh4hmQ7WXQV6K46gsjpaycTM8w4AvKBm5HW4bE7AvR5pnUBvLVjEePdqVccJGdzBvBDgbksQ7FDvnb2CswGmS",
  "key15": "3H9g1QM9BTwaftXTgfCdifvskWQvwNQkKaNcNQzptFBRAhaD2gg8geyCmGYfikEbBsA6kem9L75zsrRDLTDaZnYf",
  "key16": "5ZTiCHMaZe71i41NjVAxvm2NJ7D6tEFwSe4qAyRhDyxFLSBeYT6kgikXfdXp3aMiHpyH8yA5CNutxsK2kGHFLiXy",
  "key17": "5TktSJBMYjspZtrikjY6F9EGV6nTSKi3Z9e2DvHB2Y3WUram2HRx19ZfVWtjNuCFma8sSQhGPfQA3GHsGNZa8isD",
  "key18": "YretR5CzjVp9EvKhampSyWQL3mNmuw4uYedgkMCHyKzUdtTZHFutxc7Wfinukh65RVjdGZnMDXmbWpVcjP7WNjd",
  "key19": "485j5s4sLdvEmN5fXVLzDK3uL7gatvi3HHvX2TTR13hJr9MG9Byn7EqA6itu5T2nyyTJ7xxvBWHouDSgmhAGdcnA",
  "key20": "2yAfJrsuo5xjfhSwBJhRUtDBuqLkBg3rZABsGfXHQUyjfvvETjGA8oawUbsdQyFhiNPuVWStrnT5xD3gVayVA5LQ",
  "key21": "2eTmYtuwwkqTX3fewkSktb6ziSx6Z5bH836vnBLqp65GHLV4emTjjg9cf35t23Nz1zHhnPdqQ4dYhv7uAFRbhVXE",
  "key22": "5oPW5UMpJPs93NttbMkxZHFfGz5AUrSwyTpuNbEq921maTAS8fTdzrPpLzERU6qFXMy3Vz5z2ZHPrGPSTBLCFNXu",
  "key23": "4jUNC1rqDjRBjpG4C8wvYD3Cf673SbcGLNFTp8vW7qMhrpKxq823VrhrZ3yis1bSxKxzMn4iMqek1KDMHW6dhBdY",
  "key24": "29daisZKGBAVyhxuP3wujCSZbj5F4JrNAEhqG33qNZ6wG15LsF2agprmWnoDRsFv9sJPaAtyNQ4Mv6HqZ7i2hhfD",
  "key25": "RsnQqcEPURE7PqpjRuDZYsm6Cw7SZCDrtC3duEjcwUhGAdDcxdkPGfefs1wQhANcZo5g3TDXYZdENRqJp3rcj9k",
  "key26": "iPoevrT43AVh8i1nNk5PgY51KuvJrB3uVhr9mTRi5QZTwjgYqwPe1rGhiQrfhvJr8xsc1kiHHN6mtJGG1suetkF",
  "key27": "5nCG9pmJszAfjJpJQyVpAT7A2i5pqynnUNj8JEajjLd1H3wMbi1qguzwsdZsXAhgmKf8JHJY8KZ37YxpVdTR8cei",
  "key28": "2V3LCSZwgwLHzR76kXMFNjEJjghjiwi5Bo79vb2Yyr2mQdrB2piqxg24XjFScZtwoNDsvtTtMvwi8z5vKs4dJ6RU",
  "key29": "4q7nkqAacXeHsgKdKCqeyWUBR5dnSXXKL3cKpManzgSu8YMir8EduqQti9XDLvqvhkPXWB1cNjqQaaC5Uhdt5E4q",
  "key30": "3ALZLvA3VXqpk7PrinEa8BzQZrGY5TUm6BbKwArwrwq76EQmZpmvDgw44Jnui8hGURfeeMzg6oSpw7sAyXZp5QnX",
  "key31": "4H52mbqw9GJPCdCTFJcuAD7HFybdGrDc7ZDkdGVQabygHydqp6LFgeotDznbU4QSsAsR9eL9c1Bik5vfML9zVs4x",
  "key32": "3uVmUu465YE8gqBeNRo1EVt6tHQwrTa9sxBN6rLVVwp5XNv5u6bdAX5mJxzJCi9hpH9j6SVMGW8nW6cQyqeMkstA",
  "key33": "2yEi4gQpRBSHqtUhrjEjTrLX2o59a832RsEhnpYb4XoXvScC5DtvcXNvcDv3W3YuHib8nGN6TJFief4Gn51nfH2a",
  "key34": "3gv2m5WyqcXVLhSVMAhXLS2dJ1gfs93F7VUZaXR1YR8nnGLhikctp4NCV6nBg9mRH6MLEnTzAQBc8KPLn4VReT24",
  "key35": "4WKCfeDX1GDKni2NPJYNTY6b3ncsMveenfDV9ZLdPoYNbb4fkSJGChNebXfAWeApTQR89We6AWHEAMQgUJseBjQv",
  "key36": "39yBgnnb6YNyPExMxkmv26VjRHeHczqGd9nz6eXrzXs1if9LyNQyXh6NJ53pheSFYe3re5JfjrgBZF59XC5YVyef",
  "key37": "2HEw92J7RRjHxa2e7TBa5u7oTezDsTRp5XCZy5dXaJdcYffCpttYPcMLnNksiB1d2mE9WqfmhokjCRocB6LijBp2",
  "key38": "3puZyAKA9EdpNgiG55gBLxtMc61S7ZPzB2C2XsyhktVenzrsovJUq72KJb8dukfDnaf3Nn8B71BnAMvPFgAMYy3u",
  "key39": "NHQ6uajJkJHRayVGSXsBzkgqRcBZHmGi5G36vWu4N9djwxFa8N5Z6nP32TFiT2Lbs1gBhkktS9EenM4weL5y3pU",
  "key40": "5Zs4DNhJznDafGWdrjBb68HNqkQcR5pvXXtAwWQtRZGBCqui3v22bXmsXs2K4uDcqPG1WGQrbewri2Y1GLZXzzxy",
  "key41": "587vGMVqESpmx7jfR8gqtRXW18Z8jiH3M4wU6aTSRZ2EvcT4kxZ1xpTYVPRWVRPUSZBXDrjw2HJ8PuT5QTtczqvU",
  "key42": "5KRRmwgWii78q9nsS4VvXBQfwEAARKK58CKR94K72gALtgTGRp4rJy1t9ssdmCaLbwkg6me25GQ8JLrYJTUkSmq",
  "key43": "5EkhFmBaT3f6B1yin7quQaRARGpUSU8r8zsecCmVMxLq6BKz5CdnuGqTP4rSBT8JJint929S24KAQLB6xmWfgf38",
  "key44": "2PnRpu5WAiQs9iCynJguKdPzb8C54LKFR8VjQCYhBxqDKRaEzgxLTHwZHLeMNSgs64JmNmtN5RZCx9xPxue7M9dN"
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
