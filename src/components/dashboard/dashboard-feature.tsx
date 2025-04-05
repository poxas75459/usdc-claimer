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
    "QvDPB3a8c91Sjq9KZcGqMUEYFUQUvUnuz3Aujkg8RQQ1sDLbQkAt5XJ1HwgT9TvUdUJnddfYidaCay4a7J3Mtro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qgH1tYPfzURfstzqdurj6aeEzNdvr4bzfD6eWXDyPUsSLFcnd4NfRpEDUUNnfMzEZZH2wF7cqdknaUXJ1tmURSM",
  "key1": "4mukacF555oT1zHLq4ZybnoNYTkgzcioWSm9uGjMSzWzHB8T6a6yAaUqDoy2DfEHxeLepC7MwpQNXfaVGyr49vpW",
  "key2": "41e8uxfH9KZegBU5csBt7wiNkupDSWeC6L6gJeU2iPRZ3X4XF1ZKvzLnbctdzaeXg3mudaeKHHg4Wf79RZfonELc",
  "key3": "jeVrsMx5heoid6qMy9eJFQi16VK83GfHuNXa8fwwqb6MSYthEBgB7sPeoirHrFYFqivbhwyU2D7MjVw3iLr92hy",
  "key4": "3V4MRpehgTqZYM5yW7xmd14ubJCt4qKSTZ7yxd7ZHxDWrw4v69DzTH3EuvG4m9TxGjkMpzeYm1FgxZ4ZQQKia1QL",
  "key5": "5vsw3FneZnX5KtpHRAacPZwecEtdkpiw6YgUuWK7bcCLt1YJYppttqBZ2WcM4C2EhbTcKD1sfjguWd9aYYrMqePd",
  "key6": "3woZRxG45YNytjtiJQ4NJyH79vok3TYPU4XmWo4iHEss6fxiSv3KEX1YaPgaNquLLG2XQHn1p1Pm81cgEYwocGWq",
  "key7": "4vG4GqUURptHDQHE2s7HA7VwgLNm7Xkau5qGZgNtxbWw3ktHA13vEeSWPmLXXEah2HzcB348CztDmpdHLbvHNRJy",
  "key8": "TCr5Avg4S2S6Pq85vu82dnyTBuau1oXipX4igwDpCawgDseDacNmK12nm9ufbyU6kED1pPMWbN4hV8DLXq9XLj5",
  "key9": "4zmB2XeoxDVvZvKhro9ZomkvDX7ipCL3nN3CC4ZYxgYJ99GDNB7WPz7JczxjeJYq3QsxxGXoGjmiUDpFGGS9sG1h",
  "key10": "4VgBQGtMhPiq6fkKqbQtojBbokkGtzC5BPbsVKmzHBkEPDnJ1Gw8NkrcrFGUJFttmvK5Lj3h3u3A6dPkn9t5DYki",
  "key11": "4bHhqHaFBa2n7om3R7oVqgG9eE6a8wWxgVYReikScuvb5ZLb9PcDtNoLt9iqXH6ybWc11nueRZY22QSmZWnbd1XK",
  "key12": "3dhzqHoMQUFXM4yiZeAsgUtXgCeXFFMgRW1w8dYExndx7CZY1XVAjHU1SzHnRLNZTxGKgiZtWxd58GAUGSZRf4KR",
  "key13": "bfBae1CupfW7oCajB3qd5DAshnEPbQv38V4jwrMAhpRWd1raTcSCeZRB2DFGjg8T88oA1oU9BsrxKi3wPxrTVYS",
  "key14": "5GGD2zs7ULqSY3WhqfcSX3azXATLff63WmKshGdu7ayiA4rBm84M7iomaufdPoGoK3jfHMie3E2pUhycSHrs72kw",
  "key15": "5vV4i4ZKhcRWHDCy88JuQf7m2NxSsmQcPu3ZtEirhLncd1xkj9aFYPLCpoKsWcntKTRq8yGJf6UGx3bzrAmkWZMf",
  "key16": "4zobYaAXbwYdCFf1iYmWDtJ4A6dm78gt9i1FLNwPoaaX3agaXvkL2e9oMM7xQVFgJeo4RkpHJ3Ey6QzUpkG51M8T",
  "key17": "3NoNQh2GHrdPoLufG2hqMNzKSRaasgm3CgyLfRgDmjaqq61YjTUJ4TyofdQ7yaH349Yy8EgqZ6jo8UUHMkTJWHo1",
  "key18": "Le36zMPwV9RUQ9n8o6ogfVM5JskXQe6DvrvVn6jMnBzB5PaZnMvGmskuZaWSktUF9453AwQ7hbtCLZAVmQHfqFM",
  "key19": "5RugJQjzywESyMPQjzr2zLqXz8HBLJ6RuTvLCKAW8suLN8EtTi8pmyou1TCbwzvEAAZGDwzJCA172ZxAwCFBYHMZ",
  "key20": "V9hMenGEU1TKaGwyabwP9gmRy5KT5PJw4SFG6v7F9E3jDLpv7aQxGtNPB6zhrExzYHTyotVBUcB3KQSnrgt3HAa",
  "key21": "59JE7besr6vKxgegw9p3WDaHPexhNckk2b2bR72sd1XeZdwvNUMtU4gge4DftUhAGgNw68kVJuqFQuccwQpWoRxE",
  "key22": "2mjoHyy1owpHHaFs1bnQxN75QPhqsq1df2tJJ4A9bLJB6GzomE1uTQBUbujMpCGC9abYA9x5XXGxSRkRJvKSUL4c",
  "key23": "3TY4hBcQ3qkUp1D2FhG9ZxBVBpi5E9aYLL6UkFsnmv4QKmap5YcozhN5YDewg1FXcTMuEWgi2agjgLk2xEvYWzad",
  "key24": "2u33gbKH3FwXkBPSiq4urWmcoNQnuNC8tJXGmskbtL1jMawgWRLFGtMPw9de4tVeH7utBDRZyUyVNVF22h6WcRwV",
  "key25": "4G4Xmwg2zVGiXNWTvxh3K7u1w1Hb5k1F7yPKdF4rNf8EL5vPR3sVpdUArhTxfLTcJ4A3C4PDje2i6ErzVDsJcuj6",
  "key26": "4wxZmBCR65UNUpywheAZk2L4heZeHuGBbtqVhC92joUh5u8bBvxDNuXKSosTKoRZvviGKXWMB4fcfAnK4DquHPm9",
  "key27": "5g3MCgSVdCWguEh7DLTnm8wX3F2QBRMdEnfUYGULoQsPmwQcvoLNVx9C2LpSFt1Cc5J2rLBr2gox4NT4SfLoSkFh",
  "key28": "5DsHubSTrgRMA1Do6EADNorgWgBD2V4KY1CnZs8rYgNhrJ1rJsvbwv9moHnp6jFNQtes19YTyqpscBLgbyfUjsiA",
  "key29": "3PmDr7hgeV7KPbbfLLaqy5bR4BdSZDhtViWeXzAejVJcL6oyYMg4yJwFXQ3R5YDArh8oUskyrk3ewFBHSfzSYMoA",
  "key30": "42kjuXuAKF26PqS9P9qYQoYwGtZn3wfDkw3pttA5pn6B6PhXLvg6dqF17UL2XQd3k92dnsML8bEmL876jp2pkGnY",
  "key31": "3HDbkJuikrprPMT9KtuJN5Z7rcQivW2ZE9vXeVthzjhdtJQyaFXmuyiEEGbwzvZKgtceSBLEpJfjHF8NC5EJiFXv",
  "key32": "664pm1vfwkb388mfVtp3wRqQGrFKCr52DsKEXzBVSZ9WThxh5CtfZRcuwqRfkbEqDxPwsZUvBrJaP3sY96ffsCag",
  "key33": "2NAc5nbVe9Add5E6EoMCCqUsNht2U1nHLyNmcDBfu2xSYBuVP9t7h1fpgcwGDYqb1gdc5oAi7fWkvFywSzfeazmu",
  "key34": "2Mvib8MxZgqy4ncyZeSfjQfo29YcxW839Y9fwXBFJWZHJmA9HpyWfxAbMvYidQeJ7QxVRurWg6n8jVNBHVdgyF9u",
  "key35": "3Mr1JAYFqtHYYJgy95KcQQdzmDMiEmWgXaoCJfuhoNPPgoqMjSoQuPFa9zXC3wwwyksgJCJDwwFpKDnm9sikBY2G",
  "key36": "3AQ8o73pCyNPr8b7NyTPqeNaA7nbaWnyHuB37PCXz7eFY1qmXirfNikN2Z4Tq5hH7ESwa45pmmcaFGj4ijDP2cEb",
  "key37": "4NKZNDueppB6FC8Q5zU28uL7XVipwK8GNJNuUPUbmeWaG14TAiRh9MgUZE4F8cJLjSAhXsurTN7eQoL5ZVuSZdst",
  "key38": "5Cpo4XYGTybggKGgDvo9WSC8yKRG7c55VrCayK1HoucujizTtge3ovH4koTbpPwBuMmqpDsq8FRk7tBrsxJRVQ3e",
  "key39": "45rT36ZhJHoaXJQ6wQg3zEHkJDxBA1V9tGjkS4JVBw1TK25uBooyCcBiWGScQxr2TSFM3ktkQTpgJhb7NE39uCWG",
  "key40": "3dzTmadtCyu4PuKmXEGEwd6VHRr8PWYQ6UEAqyzUFHDBLfp5YGwe2ubHBfqrKYWsXUqKxK5QQ8caWsz2795Le8V7",
  "key41": "2bUhUCtK2cB9JiAoRFzFFVjn2kB2kxRjrQ6czQYAUYhz6yuumpdQdpJiHiYEPDdhPjUaTwgsrgACeSTHM626T4CJ",
  "key42": "2uQXRFqHJaiMj4jjvS3zQ7eiqMb4GhEH62my41NuLuQ7skCnPaYcAe9vddz4eKyLMU78iacW2YMJZuc55Y8nzPrX",
  "key43": "2TvuSbhgku3hTdWEQNBqcNpQ5duzc3EbfsbBqXqSxHNVLwxqkuAnEsBxkJQtn8mgzVMtVyCy8mD1qpVX6WbNTaiz",
  "key44": "1286isXotXPei12CEUrUC84824fDf3GjiESHrsXxUPyz9w6zL8hiz3UqLKbz9CH2g1WzY6erohUD95dYLe9CTvj1",
  "key45": "5mAr5yzVE986UQVFtwv5e9FeGhj1pcr7oa3tQYX7zVcvWMgHUsfKUeoGcHcrGbopRhTwfNBWC1FMagX8wLQH4Ch5",
  "key46": "2tJ4gYeTHXtuQRuUCHX4EAZANxkWe57cq8PCxPjbcHzoVCYmcrhect82GHWXArdpoWTRXXB4zYYbyA7RyX2SNrua",
  "key47": "29XoZp2Dw1nQWNjNVsPMPVtdLFWTwzA27WBivhhb5oT6DYmEwBLGeNRGdEZAUKhC9bJCET8WLfb5TvG3ogRt2gY3"
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
