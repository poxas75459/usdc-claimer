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
    "4tVAtPofte9ELfGkYkjNaPQ6Zh9V7aQGkx55zXuFfSfGqj1TQEU7oPBqoG23oc2v3Qo7AFpozxCCLR94YH9oSEUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nTfBMiVB5KubEpoPnD3JfbvAQhtnCmkX3Y2xECwSrNVMWhfoQSEsVAZybHZEggBad3A72nH7CxPyJy8y1Yyw3x1",
  "key1": "5jA8iwhrKAB1bD7EhLbC77hP4y4ePE62ebsqUSWZrT414nRYtk8NWTV86HRjkJvEKA3XAqVJPLnnPunhqVzCJj4E",
  "key2": "4GpeCnMhLNeDFfTxgJmL1K9SBqC4krKknXBCgX22TrLmfbuyiMtgmKDvejKK1uRrvZQHkzovJEYSZAYae8t5RRWS",
  "key3": "2ZZHJzQGakobm1MKbaxQ6QVS5c7ZwzJVP81F4xDaWGfgiffPpjB2aL4DDAr1mABihjvR9Qshqs3raf92wbVXoPzK",
  "key4": "2tkVUa6w2g7HWGwCei2FSnuXEF8Ww4C9tS4TrBgPaRb7a9rrBzNvX5CkTC3KrChcKhCBMCz5o6RGweC1nKo6JWYk",
  "key5": "LhtzeVq1zW13YzFagyE8DTH33GJcaBF5D6fzkczmhSowvA7fZeJZSyanNVyfejK3d2HE2Y5BTsKvGUeJPUb8rMS",
  "key6": "5w66yqc8CmJJYzE2HNamksErMczrWShCiH7jsHYfJZd5D9ZGzcuZwKTqCgcop6huRmG8HSkibUScSsGA67xenGj8",
  "key7": "25HiZKbUi28HMD4o2w1y5NSrmNXy1N1Q51QhXATCFFHSmn2vVTP7aCdp5zq1KCHpasNnHvXfuT1Prgm55WmGqy8F",
  "key8": "3dW8LAQn76615PSZDozrKudtgusdjxYkcc4uroaw3mJQGTM7GxcDUmKkmgSqcqbMTDcJwdesS3LqXeHyYBfVcQQy",
  "key9": "4r9FrTeeZxP5SmB59ZyjhjC6AiCJxtcJLN8YaJxiubG3TvvCRCdgr8VUWX78N3bFNPm9HZuXco9vK3KeX1X1F2Me",
  "key10": "4nEhD5rKMtmzsJNYcU17w1EsxeEYEib9Aog3hmfHLvupQ4idQQjLS7dLXgfW4kVSwDgTrzH47FN98YGkjRrmpcSC",
  "key11": "5s21vz6WHED2jXtZskjBxktBGv8TJ3L51R3dKTjgjPPJB3uua1GqBYymQ4dppBPPrCi1Fk7jdpaYPzbNB5gtSesE",
  "key12": "4fV9PaD6BXU8nZcThfLDHFhNjR5Y1cv3Cg9Wy9BDuQFmTYF759Pz82LxNU2hVSFYF1EVVvrnRnAbErQfMjDKvhGi",
  "key13": "2hSWenWbPk8XZuEP5Npy87M5C8mnt1okv8T7UWAAvpsp488YrTG9cBkUdkrsno9LxKt5wbWyTdGmP4ZAcHoge7oL",
  "key14": "49S43pGZfykyMdccxhkDoJzFwPNPdjjnKzWdn2Q1Uo7PATe18zSJmkrwegsqTD6mhUSoQny7ELnfD8Wkg2FtdKx5",
  "key15": "5sK1HVYKKvn1ck1TW8iDndQ5KMFp2WUDKKF3Cuq27udcvDNPycEn2AuVwAAzzHxQWfPR95tYdm5FgAKEJhfqaoLr",
  "key16": "2jp3sHAGAPoKdhkZCmNGC4QMMPM3jdRLAZxbZP4CR2kbdcSn4aXDfe3cKmCDriryGKnz8e4E7o8nPmBi4MetCrwA",
  "key17": "3VAVd32hpkdAdbtXa5YpJWxrD62zBKChckq2mGiqcBd3g6h5ZbhEGuzjVWFNsC5erZ6SxuZAo77p4qynfJc7aHkZ",
  "key18": "4sJWEKXuTpQ6YfJCCgBKyXzhxybkEZx4ifYu9QfQGAod47AayFMt481Tv2W3EUgfXdQQXhipEVoD4Exb65sZ7TT9",
  "key19": "2vV8bA1KPpTpBEJhu34EQn2catYv1kQ6vtTFLgFWUEMWVsbVt2n83j4wcXZmpTbreqRGtNQjpJhsHt171i1xzYH9",
  "key20": "3wP7wzuEipYFfCUXh1pratYqG6J3LhYvvjNBrKpmkesvL7taEnGrubPsnra9yj1QxSk2j16QgTjycjbJ1CDdhAiU",
  "key21": "4vn2TSU4pN5peD5NgV9FGL79T9J9Mgghcg6Q86HfddtRzytTA8eViK7PAMCwKs35uAp3eVcD6Xda4Mb6LQ5jAvmu",
  "key22": "KJFnkf3iyTbiQ2QDNRQPNqTRxqM7KZSWFQoZ8bxjoU572ABdLr4EH4G3XuVkpRPLQbzm7HRTjVUVeCT9QqKwxmY",
  "key23": "5yVFfWL1mmqkA3EJhHGmnXgTCLkyUTrXzVG7JFWLJ2Y8UKNmob9kktqHPj8JUgTmM8XzR6ucPtrBEv5v2Hd5wKiQ",
  "key24": "3dpbQm735h4Gnu8ofi7gUT9awNWu3R35iiekSTpm7FXPWUmmuAsBwv3ip6AGy6x3U52SWmLwsqfmjRcqWRLsbVGN",
  "key25": "4cMaw5dBgkfpcPiwvQvSc3ZzFC9b883gEcvw6X3R8Aj5bwWP6WrkNJXrwfCdSsgCK34fZ66eue5kJGQQCFdLpzPo",
  "key26": "4agddnzUz3boTMTNWrdimT3ypSjSTayuSKxPWqxvjWQf2xM6nLTaNrdRt4GgJf4d1z1yAANwGBkUyp5HmybWxni9",
  "key27": "2rPRs4YaTGgHdJXumApm3jFxeRsvB7VgvNvg1YQz5k1YLCuDo5CC75mpXVBoG5qVp66MPFaXbjmGLFRbQwKwqYwN",
  "key28": "2xFbHUG5tWG7dnJCkSnBnhpL1cVd4d87gXhLpzwHXDV2VXxx67XN1vFnQoPrG814uP1V7zxmLApwBJP9CkWZKQTG",
  "key29": "511cS1khi2wNr3PK95afBWFrmgXZGhtpT47C1gKPY8wuWAryNY2RfqBwPeRbt3uhSbrdPCw5N1fPv7RsiUqghBit",
  "key30": "4SfeqVavSbRuvoHnKi4f451HSdTKtKxoHPLN51Cxv6NA5N4FvfWS9G8EhizjtzZv4vKpcrNxgzLzpEpTZoV1j8E3",
  "key31": "59hGGRDH7bcuiUaCyGvnrkDKev9tiMUgUtTaiVsnoUhb85VH7WoVBgj858FJvGVntAHigbzfPUtM5L5W7Gmy5JDf",
  "key32": "2CfYpRrLG8Vgz5RAgWFDv8cf7aeKtkckVoCoF8cBWgxzaf19rR9Muoz7ehJreunocVJ6KFj7s9UosRQ4wnqbJjBQ",
  "key33": "i18aNQbfLy7A6R2sCjxMqARoGFSPGpYQGvD7MwrzYpKP5TAy6aFHsF98rB7pJZ6wnjqPG4P1oXRPPpGPxzADy7J",
  "key34": "5FLJ8wvhEbPhym5YrYS4UEQWi1i1W8XJeXpZ86MeuW8jjmhAL3L57eEL9fBwjvPi1cBZiJYuhqSDT45FXDeHzoMq",
  "key35": "5aMA3eF5BwVSNhiubhvRySm9FeD9uCupyxSSGgRb9DZnH2kqvGbz9GCmkag6mzkq7PGtXkaATg9V7zG1gYeJwLF5",
  "key36": "2nAvjX76zFimGVYSrVersAg27BtuyLrY1gn8nqDZtZtN4HPUNxdgezUjrpX2QwcQiS9yUxCRUQ771zNWA9kmbq6V",
  "key37": "kcLwUk6PPJNreFeCNMCjaao2TvTSDT5siUYQZMWwisLqhLv2isCu8z1QJ6MEy962NHG2itGhGMCv46D99d8SbDU",
  "key38": "3h6BD1YFkKs5Qn2ePU8qap5dkjGhHURcHYFoPi6JKmwosjw3nxRi1fomDU9bRXP6ej2YLQLtLTv5kwqgCMKQaLMA",
  "key39": "J4AfyQkdeB9vobwhxA1UDXyHygtgDL8gtAS4oGzmsrzAwsT4RAm7GjchPUYpoMZA51gYA615FkB2DVT4hMrSELF",
  "key40": "2DV9G1HhjLSosLD4gqDvEuhi3LqQgLPRguaFTVmijq2ZLfEgt8Yw2fBRxRDZy3G7g3VyAjWgCTeD5AdUHMafTqYw",
  "key41": "2jzcPbCX9EPGMrraPnQK4B7gNZyWgNYHuhBpzbZjhSQJPx6NEb9xZLahWNTJMuHUiuYjDp1kuVGqwtbme9TiG9pb",
  "key42": "3TvSpAh9MXSw2x9NvNmZ44ZJvukUzACpCeHz2cE4s98pW9YQitLTtqnJRDqTEHFdEHrXUtTepYdERuWT5PeRsrPv",
  "key43": "4Lvh4EmY5KHE5QvHkthvRnWWV2DoXwAQyxEndCnejYnJy6SayGQMTZcPd5thYPhadrqrFdbjfeeXYiLwGCSQJhcm",
  "key44": "33qUFvpnkvJp62ZMTVgJEGzTg3Q8h5SSeh2uDQ6T4zFt1VWB2YSfZiwfuxkrxUXXnuEsVKx8u6YfeV7iMeR2XzxE",
  "key45": "5btGysuKvtaNgoBAUBLzQ9kmUF5PyRXx238xGFbTijUSyrXWkBpTbdxYSBqiDjR9AtiNn5PyPNTAf93ev2cG4ifT",
  "key46": "3CwN94g8D1TybTt4z3i6F7EbRdpK5w1EVNsQGyFGNuRxRr7xgtwyosVCfUrYxg5YWhaSfzgZFY5dVsPeakFx9d2W",
  "key47": "4vtkBqKtcqmxZdqgG3zWxhExXwKGrr6Laf2wnieohaQqpiKwxh9tRwy3KBzmfYfB74MNC1WPEKaGzzfSTXJ23tys"
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
