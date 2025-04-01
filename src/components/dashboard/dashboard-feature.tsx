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
    "5tJKMJTZWM8eniuBNN8x1CM2wMr8P77zYAkKzemwSxrJgCvmjWNpEYkzmdN7YEaQ2boCvPdaGoo9LbcAuSAvQAbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmYBVhSg2cfa556U5VKBQWvPascVEy1YzwsUjshTb6vF9exX9CE27qBdvM34pEFQY4SarD5ErBG2coQTLTJX1FC",
  "key1": "5UnhggUj9uTnJVL9hxgQgreoijDoVo3y7GqwerJfMHKhCLTCcJq38rMEVpBp58dzRkm81etNXpnuPpSQREW1YsmM",
  "key2": "xjwRkF8Cuvu96yPFhbvsMQ5b4wvsaV1rXmC14LEdFPU87sfVfw6rvaUTyifA9tPjnc2fWJevDys2EshS6DM14Mp",
  "key3": "4CEsQrzD1A8JtcQ3osLTeRYCVkH93zzXMvrFFwXNmRTmGNzKRaCaH91vBYNFmLvhBo3pxut5QTDyoauk4T1u3EFA",
  "key4": "2VsHJyWGc9mvFZb9UGd6Qk2AK3aXLTPHLZbvGFN7aCwYezQo8Hqk3CbPoVg6rqDKWEPFtnuySJC7HSH4f8TLYU8C",
  "key5": "5ZSzBKZrdHMF2eGmbfV5uGkw4UM2BXuGSbZ4UfDZ7wZTCxHYPGh9ELLi7UuvyMk8ka26dX9jxGVCb2eDypEd2HKu",
  "key6": "3Xnw4Wfs1Erc4W3zeudZBAdpHtXqqHmbRaoZ191LTcqxH191Y8etUyt6dyPFgqjpj5Hv3jwpYVkDtk7maQXoHB1N",
  "key7": "3vgPgxhNZA6NRdFc1ERkdKe4BowkEJmfy3tVytanpZk6QM3iCCQJv3qVsoGwrnUmSHQuGy6osbCiNERXwMpzdwL5",
  "key8": "2sWPY4mNmadYdh3V7Yy2bAoBk1Ysx7EZuCp5pmdaF4tQm6ic7Xwbsc7rKyxksNFEyV8AP8HFmFEfcu6SQr3eepb",
  "key9": "5YMtoJ48Rzm6jvGNbdLocnLeR7jDN8roZfJ88EbYjaGgrEaiSV7iz1uV9jeUZJJEArMa2jXGDpYNQAYCdMSgadVL",
  "key10": "2cWHtV7Ju2M8BD7Htinkx2XAZR5L84tLFmuPFasoPqCpc2xiBbXGcnSu4svk6Bw1CtEKnsiktp3nGDvKC6M9poTL",
  "key11": "3PjjnaBUDv68fPkcr3oSozxR6cKgvKoSY3nMCHLbQ18EQ1j4ZkLeXksfDaAUoGE4N8EsDk4bQfLVXatSrn6yFut8",
  "key12": "64JxNSHPmTn7iGh1u2ToP4vjbFmtCCqDv3sSNdcizg8AfkrYmttwkBG7zqDN7VH2FnBsSWUADCQVASi4eHj692CM",
  "key13": "2jyoKRywBUY9nUfzGAwvyAkdd7zhnG3F6BQ6wM5WrSbvV3LA1ZWVJGksT56rc8F5cMnpkrthhQ3LJfWzcj82Kkp4",
  "key14": "47mtN33edR6rqy9Txmi7dP9S2nimAZ4HcxKgRJeerTxKd2mvEJQLkR4fPrpuKew4DQL855wSX4w7uW9m9qVmpztG",
  "key15": "s46NiVgm92Uw3hJyiRSRLg84H74mt2HrjkhmCCs4zcFbZy5VcTL95EzcURTc4cg8gZEmP4vQh7W5zSn8dr1Xdg2",
  "key16": "2Xz9NyvMiD91Dr8vGwXiNcfJqd2UFmMFfDai5WygGxq9WG1Aj3P4rNC7A2aLm7PW9wtaJGqH6LqJnfF9jPFBV95",
  "key17": "nvVvyP4AgmCFYJzrSSQJ4GPvsXuKdGPVULMF8EAjcnKgMNCZzdGFK8U4aQqb7TeMZfJyoY5dzRXhXey5e4T94fD",
  "key18": "2rkvhSB4V5X2mgZS7bVfeYymskqeUA85764cGawUcbkHMhD6ESARj6eyCGykqV66wNGDtGDqYQQgM4pehCc6gXrm",
  "key19": "2rdwezKw46XTR84KCTBnnVrehSd3wEdhky9vuZTwFzwmBcmu4Gu3mj9tc3G18jdErv7V3PYCL3bpryETnpBwqAxV",
  "key20": "4dsy6T98MYJ2c9C7SDSJzH5zv56EJqeWrgKiG5JAFMwiep2qBrhgKdh941U6DB9y5qwfXuTfskRqiwkC63vPPcb6",
  "key21": "3BZJWCDGp29RRBNPBsP5QNQV8Dd9ANgK6U1bMmRF6hFdGPaQUV2bQ9PcXBrmGiwDrrCdnWnwjUeGBwn5bEie3jj6",
  "key22": "4pZecDHDvDnxipUrbSsWxx8SbLFRrLXoPrhtXY4jSfBUiCroF2drgE4AhYR5Jnv2NVqKFyhroFxo8gsCYCXuN9TT",
  "key23": "Kyye1sjD7sa8WNR6xdFXkWViWcDqJWnytAdXS1ByF2ZVgqcpx9NRcN2yw8SJBBb4h8ttB1UvNMQSvtvRrSZApf2",
  "key24": "2tDeRDxSDfwftmLS5TwNShnjtfJz5UgACqbSLA24bfgsSYUGDbdaqPQUFrFZgscJ5Y66UpAEpW8u3HUrjJKP6RzN",
  "key25": "2aGcYx5t4ziFakMbpoecJVoHFiSwwYi8sdM9444Xmf8GkBBbLsfx6TNozw4pWXa8kd9Q82imZaqyRXMemGeyvvc8",
  "key26": "2NLfrHHPsqxGBFiuoCCH6DtMCQbxzbJVdw9GVG74HjcnFKzeAEvkULeku6ArDF54nJh4UmaHtpMSbrsiFg5EZqhZ",
  "key27": "4rTKVzAbqYiVnCVVjEf2zDGASuwPWNhQ4ormREd41upUVQBSNXMTsWfvMa2WgLfk7JY143khkK9i3avyny8hV9ce",
  "key28": "3raAXHcuANaWjLCqXih1LXqxpexmwQZwjavCDdwEt5ZpSsP2KzQk5DZVe4vQ5jZwKTNMk8zSSGtFXi9QVxHEixNo",
  "key29": "54KccHHzydZ8aE2itmPv5Jsk3fZET2foXzwzYYjuFK5Bi6SyontUDReiGjfvUbXzALbCNsVAZa41aVcPjimcPYWq",
  "key30": "5BazbJEBnhpbM1xZjzXaKMaYN7ebhhfmSFNURoXVnc3REhwjizrhaEAxFMvMCuYMNVAZBa3d67uFWSr8G9KJCz3k",
  "key31": "2vpYpvRCT3PhSHfmKPhu6PrNvJ6oNYirDPZpsrbKtgvDwH6inNafP3itSgUkhbHH9Wa3ssq6bVWbppPVngUAXfuf",
  "key32": "66tToV51j1ZZ7gipqmwcBE4FpgVXivhaM7Xa1RsSKDLzjNffk2fUdHcRumfZ4zQofbPS8Xi3TnPrfVRt9EEYfvD7",
  "key33": "2Va5fWy62dpuJw5DsNGQoxAECBkFeQb8sfqYNwUe8ft4x88c2rwXs4jhArsC7WdEmfvcNPL3ZeZ8Urw5ua6hBRbq",
  "key34": "38zjKfb42yqSTErgbCGMtXz3FRzK9vo6L9FrZgpnFDH5W1pGn5aF13K7DC5PHMk1ZyesgxVvkQCidQEoCK1u3Kc3",
  "key35": "3V1ps4YBg9PQzzuEgtSyHtAKudNLWCLSUUxsUVm6h8DWJXkEM9Zx6AZWc53AmvoWehgyoxnyYak82AL8PNGsRJ4z",
  "key36": "2xSbXhfnNVtaH4U6RKsfrWYi6MbAKSFM4i5tBxJdMfu8g5mBgSFjP339NYKy8NbMmn1rkBjKdCzmBFJiXJbEZ41i",
  "key37": "22Hj9rxWEaLMkpRU9Ariv7BgbqdrGLwiC4qZzmbwsNy2sSNgCPkmQeFaBNdhDMRCLruHQhr1nZBB2jgoEbPEXuuJ",
  "key38": "4heswC5tifCdZE62KwXNVvJtWKksWPetGZaL7bHAyiG6KFJT1ChBq1M5wNHqMv6mKxqekdcEGxi8FeHnPnHBSep9",
  "key39": "55rUFWCjXVjdVckeaWtrwdV36bLY1MDibEpQFhoUR7UdascLb4a6yvJGPm4SYTAZVvXjTdaUasRKLH8Z94EckVQY",
  "key40": "7U8MD7A6Rz4mJc4hmMzyv6ufnHf1b25y8dPoKEVQhqfKfMjDGy129qnWszrXhnQSjyv939TEbDVFucY4ogVPyNv",
  "key41": "5ScGmLe5USo7khrqCgcFGmadJJyeXSQMYbNxuVXqjHebHfP4WzmKWNs2xSCy4wzRNEB1dUzBWaWaCasnzWDcJpeQ",
  "key42": "4xaMjA1JBE8VvoDrtw2vKYtAosyEDKy5Pe4CRPY8xFoQ4vVN6kFSa4P7nhzNeXtzvBtq2tvqsvSm2HFqsqknGDJ4",
  "key43": "2mK2h6kVUjn4cppt3zSYzTyooZXWFi4GM4nHa5rxqeZ6EMQjr6LkRgyDE2evVQSKhevTETnxW7JpKVPxUGLKM3WE",
  "key44": "5uFjxijsJCYVng9UuN2AFeFpdMWVNwnxhL3T6Z62WpaL4L5wZsFzbYZsibyeMrc6HaRzW2T4TTXPR5nTSmauTxB4",
  "key45": "2TLieBJrTQSuuvQXK6h7fTvKwB8NrXCQb4i1RQJgfDu9T2UakrCcBk11TH8E1NRMg68SfzVceLN7KfrRiDR459wE",
  "key46": "4pfoL8CZn3PJ91JFCp4icWn69quLN6Ry9EcP4EasiFmxVpfbWdn4hN6x6M9iUAjJgdHd3xy4Mfbz6XrCmFEREMBX",
  "key47": "3GhTcWuQbkw5sSEoQGWg3sxsdtyLFFT941NpwmtGbHTqqCchUtYuz4vmKWGaVDGDmDRQAKnwK878QG8ouQDpHc71"
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
