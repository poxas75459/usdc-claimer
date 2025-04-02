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
    "WmrQaHjt4y1PGwbRPzLYabLe1j4KY7Qy7T5PWW75KoXyn5k4hF8TXR9425aQ6gSLvzzokRDXRMtdGxQfcyYvY5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V6UfxoBCuHQR59EsJa9ej7v7LUbvCJAXudc2EwWxYAuEUpv1kJCmndmXKKxhbiEiDjcKQp1nyYhw7JiWfSjttKv",
  "key1": "46vZeEKCwSGSSmicBMUeeM3srBZB5xCaHioKKfrQgtubtmVYpUbAd6KRNccfYdkbxLqzWSrgmuxiQxhmujEzUqvx",
  "key2": "6KcYKqv828aEo4JMyD5NWhTe3HGJWagv1coc9uABM9ZZoj33TfTPyit56KL74v5o6pWwg2UwsTPUw2ZSVK2P3ME",
  "key3": "Hbm1cyBhFMnuJjMimhLjXJNoQTUjrbpEUJpNN7a4xHRv6pvfBrJXpPULMh8U8qPzzD6n6gNHc8j6GWcvcp2ASCb",
  "key4": "4nPAtauoXs6KNyAcfiiudCPqnciW2xZvzTzGsb1XnVS1ynJoQnH4X8JiA1eG2MhxfB1codFkvUBZUaAn3YifPTeL",
  "key5": "2YJGZBiUHoKffXnbnRjKW4inhuaFpr1t6rMRGoRE2J7yuTXUtiie22suH9Bdyy3vrofrKWbacsT8S5bbX8mA5x3d",
  "key6": "5C7dUzjNg2JXaDXXrcMhyR6qxcyMK5gJPn7jn6kqzDarDNWZVXZo5XJwPuAdjK5CT5zMGQUdZXM5FpuFX7tyPKZn",
  "key7": "31Bkx4JmJUN4ykz3Dom9TxJZ6eRA1kSU4SrgoeXAKzw5rNwRnSeCaGxhnEL67tPg3sqUB6eBwMyBDrCNneCGde2b",
  "key8": "3h1YeLGeQP8CkDYrUoxUsqaaDBoyeR6h8SNkBW9ipmRqviZ88WpDYtFCbKP6RNZh7kFg4eqcnpMfdM2p72rJ9ngT",
  "key9": "2pHvb5h6vBWsSWwZZwVEHduvGQ4333Fmg64iPjN8QEvWKRX78oAHZ7phXxHyGADs44ngJjpDwtM6MqauqMtNc8rq",
  "key10": "3CZLGn9HxwXLj2zPc5eHVTW6p4gnG2rqKLG82V5JeHJLLvpuhTVfcuEeo7Shcj4VgTtLad2nw6MUaxDhMNkJWcQK",
  "key11": "r4FzKtoRbyFm6LVccKQJGPUsAYWfH4zKQ4EiVEsr5sMALCdmB8YX2sVC2PYump7ug42svhh7Kcio2dAmKTSAYf4",
  "key12": "5Fx4i6bgmNcdV6rkx2wfEN1ztNxkQVrp6Ef1zyBT2bdSMETpXW8XPDYDHDiTEveLnwapA3iFyLFVgmFpDcL7b54K",
  "key13": "4yDL9Q7mebvUAc6dZQLn3ihxTVu9FGumVNfdms7RZ85v43m8g4Cdju9jxMJGGF4B7nixGtCGKpSGeF6zcT4Nsvhf",
  "key14": "5MWKr4oepVMERS88J4WVdY4eqD47MKGorwSVzWn8g43qrf1NaDHBcnLnisxvWDUMJCme8ZYDPM6MvbrHsToHH21Q",
  "key15": "5SY4MEoo99NSpxHQoDZcyj3ce6SxAK97ySyZ5LLs8c4u2PpFbvGgchtWUbeRS6WipAYkgzaNGi4miMeFvByyt89Z",
  "key16": "2rgDzpmKtrEcyvTuYgxL8YfDkzzWarHZmUNhjSk3Zf5ExmAevcTQHNQ9P12SNkVSpDnZaa8JyPNbDxDUQvUzdkcr",
  "key17": "nAZ4orr7NCiwqnhHs3mPktPhT3AVVtUXGWh6kjqb2FXxRvC1VnhaxMuTx4UKuCfWah1Ep6FiX2fZQVEoHqrGQCE",
  "key18": "2x7a4oKbVbnGp496NKwfaW5G2WLzw9ns2CcQUBV1v9Hmcwp5US5FsiuxtojM3TjNou8VHtPKf67q2A5piVHz33mi",
  "key19": "4yJtWK4vyDU2LcxXYhmtpDqPzRRKq1cBhypVDAb3v2NyCXXPDVsFPmAqzNi1CRC3LKjuccTMC6YBZiv8HgR7k2MP",
  "key20": "2paq1Um3vk6jFL4Q13Hj255GsYpiuDqQshdbpXpjjEXUdWAF2jxjUgkANoTNVZ4ox2Kcv679Vow5uLqKoXVS9Euk",
  "key21": "28cgfXz5qLbCVSfY84CWDLWHJYsyGyqzW8gHiHaTTMmRZR9xHWuwtcuj1ExN6z54okUPwpAE2CxeEqAMEgSCgAfD",
  "key22": "jy45EocRQiGrx4jYAZ4RkqQn5hWEz37CMVFvAfBhTgTf5GovY3W1cnY6kWZ2Pmksb2MRCyvXWKsJaTu9YueyqQ5",
  "key23": "3PzJi5EiAMGjygRkPJyywg8pTq8naNbP6raQpUXoC4iKhbRestTHxKHBikKNjcoNDbJLV55s33ywpHFcrgN3mZNX",
  "key24": "2MYn5AzkhVwGoCc3Wa8itU4fAgv7pjZZo17RbksT9xoBifDKWhoYQ5m1sdXQEKLjrpttGDja7qSM9Hs6KiZK2TkW",
  "key25": "3FqDCMmCUHCwhgpcVfgkdjMeb6pWHjhFgB44xbJMo7esyTEEPzku6SudGdvuhQDN9HVBQupVpAMpfJgJSWfn2PBK",
  "key26": "45thAiCYNw6XMCtM1sDEL7a4k76sbNCSu3Pw2zZR1dUnWLhyB25y34hoFvt8ZEt6MbHVUCgULiLyEQ6gBu9PxSq6",
  "key27": "2Pha6STFAx36brMLfxYLhyka5XHP7zN8s67uXAr4eF7McxVvG8LG154SzYoEMowBVkC5GsvGkUCc5XnCQdTDUAvF",
  "key28": "RDgY1XAkJTbx2P88wi62T9ymnAAG17HMSAwX9PVynFH9Q4qAMn4xibEk9pPppePh4RPscMAbrXaho57y8nBaQR9",
  "key29": "5xLuLYPUzc3kW3XxyLit7pRo8XkD2jPTLNs8HAXkMS7DgVqCT4fS8mz59QGHtXWddbiJ7zmW8c7Txubh2M2h5ukP",
  "key30": "3mRgUGiYNJ7h3WEAPVCgYy6dLHch9B7YotedTaJzABf4qzUW1C7n76WSgngXdR6hKjQsveA79488xGce7fcpiAGr",
  "key31": "3PPEgeyEn7dNziojLK9tVtnA1fRDHN2w1MZzTRtGDjW2MsG92nLcBhVA7q1quY7Yx3PemyzZm9ZdP23v7if4Nxmq",
  "key32": "6c3ap5MhZkPFt47ZVwghoxajFiAAk271DAMBQW6kQL53yZy7coFAEFS77CTnp6e3gqKJnaeeEGBWogtcj1jN2m3",
  "key33": "3K6PbKAoGck1MRUkVUi6ePAdEWAWe7ex7srPY5sEMpsJrM38JbxSNuEkvHPSuKdZfdYvLFRCLN1NG2Y8u6s898iJ",
  "key34": "5s3froZAUTFugvLzbNYEgquCi7raeV3JmVc3huKns7qfiRbR4RNreTptMRrYX4P8GkGcbo5Zw8ZsWSjARoPwoc2R",
  "key35": "iaU9V3L6YBkPLkWxQC4iiDKjfh6m4S5WXvavQWziAa4xTmttkxG9d2AcCzC31Lu7fXGpdUKxdjrjHAqcPWfDZfq",
  "key36": "3vysm8EwAwJ8MBmEeUQSfjv5oiVrakt2NLo5sbuVKBPV6TrkzPuG5gbTKkQX2h9PNerPftAGetRVqSYqujAkuecZ",
  "key37": "28iBXvU9dAZFXY7Fk8xb2MeSdPm5x8TCVcr4ERgbvbLccig53kwa6sTmmjjFyMPfZAfwnsJCQSCx7n4GXZ83hy7M",
  "key38": "aWmPsob4WoRFR3UGU8UDdp8siMJspiBosoJq58uU9yykeo4TTek1pytiZB3jRjNpqzgDqtkSzXEZQyZpF6unotM",
  "key39": "2A112xCBbGUai8RYAsJ5ehbtJEWky53qUdLBtK6nqj42RgkWifvYdrX9n5qgh34pzYkdXJHnCQU4waT4z4pNAv1F",
  "key40": "MAhnU2WWmvt6GWDDVbNXTsnhz62Sup51oFg27bKGi3SYoWxhA1VeW3w7JKStiTtxKvEhYGv4g2xBaeU6xciMbES"
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
