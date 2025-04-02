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
    "4NdEtSBDXUV7YEmuDW2dowHxRaXnmH9nX4tLcDHNs1stZfUAaRQ7xJpVDSA9U2MUxSMeuCVSLXJQtWyGe86p8ThN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idcXYtEbUz5gb4kbEHRA9R4ttDFjmyjLk6kzZ5nqQRpjueLmX22onQ4TQH2WgeFMpfuhTWC4ReDRNxUc3P8xAf6",
  "key1": "5AHaCnEboXApJ9Hcn3bYCWpgbo6ocRdmErYSqc51F9pvBfTWVGw5LP3rgdn3WUWnva9GDJegcs9uGCX4srMYYbDN",
  "key2": "3DD42xFsjxBxG1gf6eCBLjBhJP8UmRebzmxzkWkYpwCiZiipPNNxSfochqEHNCuvRi1tvQFqiup81CBjvuk8roXx",
  "key3": "42LTqVU7JSxFkYzJPnJrPYhPCUZh4JUayyoqK3ecAYeqWTzCijorALBbVYrqiswjzz1hnTFgLBKKgqaEfw6utDnc",
  "key4": "5DYjEnctduuueKpcWUn7JoL1W4HHqcPo1qx1FmFvS4P83gDm6fMnbSbUMpdve9mD7fT8EK65jBra5gnqBa8kYhyN",
  "key5": "4q5t3airweyQDVVWPknqaYrmVJc7LzPkUUV5jwBRdPps68BqY3FTArfjAR178uoyy1mrMRrb9F9aTg7wDKzPVRJj",
  "key6": "2DCRBqdP6sXqeaDx8wYDxk3C36ubEPAAnXdGkGk2tReF4LWZuKkfAVjUKaoReNzf3qA1FmyZxKbmfkMemRnsxkhJ",
  "key7": "HMA7CFW2NaxAKKD7JBDMsHaxpmYP1EyTMzrUcCZhp8QBwBBAyDyntUvnXTkcA7ytbKav2KkpHQXRfmoxmbyWSDs",
  "key8": "3fCaao58HhxVwbATfy5p6T4ZhMcHmJ5e7RebwboL5rtLSPVL7r2165Gez1aNLeeGr63d8ikS4NfZKW7dXDaPG16G",
  "key9": "2tZJaBqyxkhiewoeKi9HoAaePnbg9AEzniA1cAWmMrF7wgnckc4Ct7qZ2B3uGA3WZXbfBoreTkCDUK93z9avud54",
  "key10": "DXUuoXCRuKkkM9nndhPUXvFgLGxyJGE51jSxsvd7ESuSJ34kLiyW3TQyqnouDMutULTNZmmsvgK5o78BmEVexqD",
  "key11": "GFkMXJDZ1SzzvXHUB4K7BMm53gAqgegAaXFm9jaEX9DHNpkJrP2yUoTEtYmR4BmSevxdMuJ29Ke3cF3HKbCoACW",
  "key12": "rookKji6xqA2py9pwF59RACghHJcFgjYuTRtDquqNKv4o4KCVV6pxfGqEQ1QVeUYUe3s7FPGJVjAR7EhMetdnVb",
  "key13": "EkcJCDWRLE4BTQKDM5metCpcH7K2aFXG1DQKY7zT6qazoovqjbpuC4BScUaowGGUYyiEQBAFDZDCmxa1YFx6A67",
  "key14": "54kQQamuFQ5iBq5Hp71s8LMyPiWy85bS8uae2mR1F3TtuqsiBZiep263jGrwhDeqLw7uH9HtvoyXqNTiRzeUSwYE",
  "key15": "2mV2p5RyqQNhkFHF4B59EAhNzsw1x4pEjRUEHYqRas3yLcymQVdsNLzJYZM53G9QrpYGgdp4C6R676PXAi7dHBmr",
  "key16": "3sZqAbF5HBEdXnUcJfjJknjcE2jwRavPPWVsYbr1ekjznQ9qnfad3qw2KvNeWnPS5nj9QioGMSHqj4tSNJbSujRR",
  "key17": "BfhzDfMjEMHLk4JddjEZJ3v574WpKp1wzmwcbaPJEciJegXMX9iozqBEnDMxSu2g36sMHLQfep1dHNTFz3Ly3iF",
  "key18": "56Y3a2kFM1VhntyiP11D9s5vhkadpvatM5PtTqxcPx1pBepWNPGGDKEN7X44gVPVv3AcVWJKYnKNaoenHczMNtLG",
  "key19": "3F4b7t3LAdMRSJYnBCBUSj9MG66F4AzUgBWCKozJ84WKa5cQUYHnVKhJnGurCwuKzgMUtKohGCDgt8RXerMj5ST",
  "key20": "zyawfewoZQ5QDZKDufKmy8zM7wJvj5at2Mm9Pbn4sPP5Uhd7u7afLVdKaJ5buZiWBP7fUaWMA2uanThaYiGZHza",
  "key21": "59eehZDPUCZMM6j8Kcja46EebEgdCqmUC1JYQVtrwhppyxKZeoPKvBrDdBfAS35zceKqeHtSJuwkkd2hKaw8ivWf",
  "key22": "4HwDNJrHE8jM8kpdHvAZbvAN4tCff9B6WdbbcTmgcW8uyDJFaaHsm8E6j2cwUtXUmxDUS3SHaDRNoKjeXJmck1EB",
  "key23": "2oPTefWhxgKpHd2eF5zT7x82abT2v2fJ2poB94H8r9EiuNFGjAWv7FfachQuqy99JqBzJamZLH9VFeVsTARHYzhf",
  "key24": "2NTuYyn7ywM7V6C3ENQxtfTPkd2zFArGCJGCyTx7DmF2TYxDDsExvsyimNubyZcWDLTrjAu43J1odtnxtizETcdQ",
  "key25": "346BYdFCvDogArnaugt17HZ5VkZhKeUGT3u3LV1uEeCeHgqNfTN3amrYMdBLtNVWjoCetdFerbSYqebuoHXdS1Qd",
  "key26": "2ebjxnijcMfyJdpBWAxwepwQGuGKgd9Nwnt8LYGJU7vA2LrKp6E8dKBwWoEL12DUoNwbNLzKLD79FXbTr8rP84uq",
  "key27": "4Nfbt9vz67SBjaiuXGsZNYwwnrE5hXbp4b94LY5jjV4qfXXHZ4ednJoMdUk7JptPHJ2ymmjMmTp6hd2FLsVY7B77",
  "key28": "4Szf4RAkSn6FXgszoUeWAADbBFhWmU74aov1MLo5UW7ffYUriFdY5dLsfoosaLMY5tHxJDqmuh8LtXepPfdffWWp",
  "key29": "5QakAya8NJxGsLtfLf8hysRMYBzqSuyz5yzQNhLygJxY8Ps2cGHX9syZ1VRZYGnGfvPEPQjdzPgNuwE9MWftEYuK",
  "key30": "2WACHoToDTrYp6s4UoCnhwa3e6tS1FbTZzEwY7s6o1HcAD7r6QRhNtMvZQ2PRVTRwK6z3kcRhQTJUgxytcDV1Tot",
  "key31": "5tbqW7AKWaPbgHtWR4udA62PHL5Mja3q27MPj2Eqy5B8iPksLpTYCWuDbbdVGKc3nvKaashaR9xZp3UHMeojv4NE",
  "key32": "3YrTYhxDrBEnRqDKTfzGrTZw5AtzwVTzubvqC9eqXKMDuUHxWPgpWBimvmuKyGLRFAEy41xKJLy3JKBNazWer2qg",
  "key33": "5rZqofuCU3ot63Wm8AG3nym2QPjP3QqpaJVmCzPo2qfHRYhvZSTfXYHp7CHR9f1j7DspQtrMnAjpGHYcRgE8hAtc",
  "key34": "63kkEEUNGA1xn4mSZYr6p5izBxfaoQoVJjxXHQc1KbhMCc6JtzJuEBUt7FM6NsvkwPBZkermAAPrnxgkKNjZUh3u",
  "key35": "YxmUov6JUbkiLzPk6N4LjEKTqJ82Gry1myVB9Q9qqdvTC82qmoXZQu9dJLHCXS78bWdHgcavoaFmU9HMwftmbjH",
  "key36": "46uEoj3Qfdk2XtxPjdpmq6zFbv2fm9AKJ8KdFc7XQeKC9aHMsvkinuyAGTAm9iyTNiqsWCbAWfeRPAg1AS6J1UA7",
  "key37": "3BCPYh2vKe1kEZ2LkMsRaqoCQeYeT8Mr1zqhP7bufKDUAT9gK7EBmJMdhTGV2XseRcGvZZsucGFgiUitDKtnDBV1",
  "key38": "H6SvbKZcdrtW1smb3baC55DFoEra97Au7oZE9nAPPpjsMj1yBWhyWZ6aawgwoW5MQsa2nEg4H5m6rrY3pj1w1PH",
  "key39": "4mtM3L2dbrWrihL3ZKoTbmePjhaXfmMEGNj5GmLpeQLh9XnWTHqxWPKHCBX85A7iwd8J7ZU86ryzdoSnQfWmCqvx",
  "key40": "5334zEJUrSNsUTwHHWagkqBnLibuqdTAKYHMLDgsBwEXq7397Wcm7vEhYePULqGosLh8ZzzYsFoENHZF5GUuUddd",
  "key41": "3PM8q2xDkvQZZdYRksrWFkDzWRBG3qoC1h8fCcic3u113mqKsZTQThbLUwty4EGWg5w7jqtTu7VvcXBoLueVNDJf",
  "key42": "5ra4jz3ARMDXEsTxFETDzDZ7FYcMRSF6PcWzxt1rT4UuNHoKkRWLuv5axn4ZEpavfjWZqx14eoWJKLRzFxvADhgN",
  "key43": "2XbyGB4a8Cbn3fjzR8RHPNQVCUxwMw2jVTokRNNGZou13cF2pxTRF6GVv9V6RayKtVTeyFyouJxfihJ9cbo43TQz",
  "key44": "663Umupk9VJWqYXqtrVU6b1myML6mtYEVAETst9jghmAU9QH5LWy2pMPdzdQ3CYaxyAuKpLdbeaPYCLCcQsyEvPu",
  "key45": "63Q7eVmUQ2cSjPzVVyHN7fDXTThetvEQ88VGg63dLRvh7XVEzpCHZzTszNikt95FDisuhxQ4Q7MawDXwqQXNYJzs",
  "key46": "5CAbPYHnTwpJHWHwMZis5sT1vUovAQXDcAjf4MEQL64mAC848DM5NQiGjxWEhMPtdFNFQMpg55oE4rLZQmfvEdJa",
  "key47": "5ueL6YSDTFh2xaSJC8Pfz5Bue1USTsKodffwYMhCgVpNncQAMV2jArmeAtyT3Q7WqmPngTMVb4BfnyzSfECd6qry",
  "key48": "5c5Em8qFpUEVpYK2PAKKoiVzjL3zDUePUNTd3CEifQHxQ5xGVzjeoBMmo7ER5ZD7Ltd4w7Fu8bnYdcqKUkBBuagn",
  "key49": "2oep1CmV8odYRMGF7PUux8dYawH1PhH5C4LgcTUKh7uVKofuVahh71i2Q1QvC6RXPeJ3C3XXgRVAt2inknRikvku"
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
