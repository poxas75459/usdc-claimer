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
    "5wMLAMLyYUsFeXTnLpJaN1rRPyh4mHizXqf8XeA9V8e7674YMcSH7g8NVoKaPrmWNAt2QS9E9XEHbfGemDgNCvBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QS5HV2Hqwd2tirn3uNePJTQEizy9h5LakjiLQGQNchYV8pioyhHJn3qPSYPWeHW55BDAv5o8zEQhBr9KqDyLsNL",
  "key1": "67ctBGq8dDcamNsBDcrHooF83xPDYQicm9uyV6RFPX1uoNEwxzK135bT9y6xwarM6wen6X5mAetggcUWzEoa4URc",
  "key2": "4pXuM1vLQUvAJreD1fUA1jSVUEGswSFRA28FQr9zZCR5zDPQJeB6XajicYVYuYmdPtA5iACEhH1B43iDuoHDhKkV",
  "key3": "67HsHsJJnUTGztJiWZzq66quheXGonnYXima1qh3u14rzVijr7i1fXrrx96frRK9mPonPoFmAQXYUwuh2W2yVh6U",
  "key4": "FuPrQTo7PawHa3gFx3Evm1tuk6uzYiFn4gXXFvULxUATRzfDanwakPMt1YxcEUWho4U1Rb8PuYZ2MqC6mafQK6D",
  "key5": "5EnwQ1oGjneSmzm4AuwT1j8miobvMuJ6yZ7fyJdabweiurcjU8SmrQJ6hX8JsHzdt3XyktLuxyEmoyczCRXVBbCC",
  "key6": "5XeVayT7NfDuLzmVsaEaUN5b72MdZQSuwgK61WPirUnQF8d1FNDcfUJYmjXzijX6PbbK7eeXbdH28ZR8pXgvprFi",
  "key7": "j8fjRjFRxT9nz4UzzUKMTheweU4KERRpx6U88fgfuMEos4PFsM6K7f8N9QgPAdqHuMQSdT7DeVaiwo4AnkrWbig",
  "key8": "2tEuiRYH7bArD3HZmeeUcAemK36h1kS6QnEgAc8koh4LB4v5x5SfugC4HJYrLJssyBAS1gJYDshLYZihprSPHndC",
  "key9": "5LNxMKgFP86PJdBm12wDMHDR4yavFNcxPRkZErggkuwR6iDqJGqx24v2ZjvWfy6cTCG51UPYT9vHgUokNDAz73LT",
  "key10": "2XzBugWje7HV8MHxMJG1HaAnSRsa56Ecvwgd3611PcbAqhpafwWjjcLpUg2myTdLBhtoTQk9tx7HiwYufAnzFVaJ",
  "key11": "5Q2oU44A2JpNK2kov5xbvEw5NvTtMCj92R6Eme6HQdLkC5wFL9bmJZwgBvBnuFk3J1pgKeCXAyShiZF2FsmdvW7v",
  "key12": "3HXLHF9nc2Ps7148kTDX6hWgGdKqVUyeUpVuyycfGUJUX6CQBXvLwhNd77323LTbG6zDD8BS2hy8jmmsWffjNs87",
  "key13": "4VV3BKf1Rznt9yMmwr9YeVQFRS2Zzq1Fz7HsHCJqFATSmDkaxfYprE3B9wVjHdxRzSpnkzixJKX7F2ZZVepk6Wrr",
  "key14": "2wVz5iHPS4TMSwhLDwMgnsAyiEc6Pdv1ix7sX9bKAgKFNgeQmeKMbZYwYWrD7mZC5KT3RKExvaNWmoj7X7aYKuTz",
  "key15": "2RWPnrZgqzRPfxzL2YHYmMD5wnN9PmzApzdxPhoAxEJh7Bitc9TzeGWLtaXYWgpPFWiMEGTdsPmTrSdXDfJNcxQY",
  "key16": "3cjWPFCLrAetQP6QPCVH4JTKTda8XxDsqfZNYwyjJv4b52LGyX5oJ2d7a3ajDFqnbr7TcRb5HBASQfVMBkHooZUb",
  "key17": "5hk8PDXjGr8tT4iLm7CBxHoTfa4ojwyLQwcDYd6cPHeDRCSjDeUsgLybTUv83b1UsULBFFxmBtNgkabnR5po3j9X",
  "key18": "2FdVMFz6fJh3BF261A6tJFYRgjKTGEqEJNVDs9NKuCkuvBaXAvjTBWem2dCqP4VQ8TgpERw8LCcsC4JwmsbDyUZr",
  "key19": "bM7TNbNVQALSPwbzJ99pKTHUSVEcY4u18GLkZC1d9AWEow8AGjguwsXC4t6wKUJiBavbvRKNM7P7kfjJgu5RpTj",
  "key20": "3mHvtZbDHyjrLZoDEHifdQhqQYX71sXvinsRK58VWxky7hc7wfvtTqgAvBqPySSVkwcfs4HMoDah7r3DDA1w8NRc",
  "key21": "3o9oX8StDWMELJjbGJXBGA5yrCwsN3tCfn4grx2ewpvLqB1LcQxdsWKqXHJ3GGD8FQGUeZGm2migWc3cLm6rERVn",
  "key22": "28WELGXU8c2HjUN9sKKGutAj7tFqjnjnQXFqTNVKd2F1N17XpFbVtsdJtYvJFMAp7cfpW6mWZ4r8MkVFwoPAFgHX",
  "key23": "56NK6eGbEdd5UTWL5CfqHEXTZxWouM6frFVKmEdDy8ykLokb4UVdcYfr36Y2bewMgP57QK9iCYjdQ9CLDVFKaNZN",
  "key24": "4LE9JyhNaovbPb3g4cheZsi24jPfDTASgj9qXBJDyvzo4bAabJqmxNFKbSMCv1eCFhZXrdUBsrokXFNPgHFu9opQ",
  "key25": "3d9EAMC5y4HHW6ajobSDUcrBuKBjdfEQZ8BxPouAG9cFEP3YCKDiDEjk4axHG3bEYyBVHCQPvcq8XX5HF7qPMuqc",
  "key26": "2aAeKoRiu2YjEPXwvXE9ZLYHGMubco7772ebPUxvWQyTMeM3FByXvFWpUCSXuffZe8hGUUvTHRc7iPJu2rz3LEor",
  "key27": "xzjYgQRzEgTC64rh4GgjDmYVMVM4L3jh1xze9b1kBwSKui7HbiKoUZ58sf9iUpNxGBQgMSvzTWRcSph5mWVBnkm",
  "key28": "2DxJvRP7KJJVJKhMmc9RSkMiPcLKBrTKBkf3F6YjmgX7r9GGBqSCPDAduU7S4BahJU1TeqFbPWKCpRj4Nw1zSqZM",
  "key29": "5ppbht9jjWoYy2tVzeKHtUzdsrtuW1Wnhicp63LoXgbsCedpKNgJ2eKVeZVCfQf1d5RfdRX7YMJXWrK3FR5Auv7t",
  "key30": "aBwjXYffuHmK2vdxwfHf7QkmTFjzyhjEGXGKv195KzQvwijgbCpF4nhB3jqa997snXDyaTJVcTStgHCwxedWsLK",
  "key31": "4PVz3Vr7UXTWMLY7nkmCWYbjCf9fUmYTMRQgcLRWyYLj3aMZmpHN8MbMuSpQELeTMXchVMaAF5VWdd9zBErfSgjE",
  "key32": "43mPc4TzosTsYAt8vXJLomkSDvwMvv8oXXk6N4TReVmxhUTdqebYHjgFFDmanLyzNVNHuiXJfbceDovypHqGoTdx",
  "key33": "B6udGNtRp37wzfJ4Hwf5dVN6WfwERiZQcuryCqJu2vj71Qah8ibtR2ByzDE5nLNRHETAkuiP1zNAD2T2BYgxCWp",
  "key34": "2Mk7hCZnwTg4ZKLtzQLhCtSFEHJCphjoYTSn3Hb1QGtJukUN6fg35A3RMGXFuoGwbDs6CpqqMrPbqXa1zgtXcMUx",
  "key35": "2XcekkrjzRBHuThckhQAk7oUnQKALegUy1tsLohdUpwgjiCeJnwLJGT3Z1Fr9LzfHATRbuhPK5wXZsax5jBmrD5j",
  "key36": "66cLLWZLSA6QuFD36PMoSfAnodaxohA1yHpwpSmAMGt9bBZjV49tetdUA6pk1Cs2uhVyGyrxghxL4GduGDsDdWQk",
  "key37": "5VAPF3TWSGHUGErdNcocaFdQYdLENXG4dPBAXVTMBvKiYLjHX4GD4TeUrgW6Ec9ocyqXy5zwPMPZzxkSSCzHv1o2",
  "key38": "2arQ8vZ6XUyd2ky7eWuo88fbTtyGje46Vs9vRA4fHuPAMHwkaywz4NoAUpk5v42mtd2UuHTcGEGb4sTygXjcEWHo",
  "key39": "3okyDgiqopYcJp76tBDBboSPxvp3Atb1J2FJvMCi3TxfHefe323E44Dss7Pt5WjJbTjMNmtTqave5rimGh7fyvSe",
  "key40": "5f3ufTc3vRJUx3TdhgKYuQdrVm5YT7eq8888XwyZKqFrQtWEqKCWtigqks6Szv9FhhE4BPptjTPCrt8shUyMALcW",
  "key41": "3YnJ4thd7yrLvMKgGtkfTtR12JTmq8c9ESnTCZ23H23RMoN3jR4BcCkU2itibrd4UoJj2e7X36upG8AyvH1Hwdk4",
  "key42": "2Xdiov12grpgC25JgjS6NMGug4v5PL4j7qWYUnumcNr16VhVoraigruzFnPi3CpN17DPcjVtVtwJU8ZYFhqrZzyU",
  "key43": "3aLZvreZCpCsi4C3YLEbPdRNtrLu64b7B89PnvSEAoK67HH5ZtLJh5eRoQVHjmN1HmVrFyaGb5pvMiEeobA3Bi6h",
  "key44": "4qm9WH594tzmNho2FEahoo7oCTeH2F4YgJgB1rCJXLTRqGV5pNP3NsavdxthnWMTfMqzJVYSHLzAMF2rdF5GCt3"
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
