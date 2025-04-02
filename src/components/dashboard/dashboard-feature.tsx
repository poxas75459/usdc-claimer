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
    "3PNNGwVLhUYHFU4HbZJWG3UPKi8whFF9w93LtJu2TYDvR2hkvKHMZGCLBnQPyqH2ezCwdbBdkUo2hcFxuS8RAptN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478hnK4VLxGGYth3FB6tRs4wqD9N2gvkarCo4riGG8ZBACDWNrt1ikuEr8yJdFu8XX26hhbzGtdNaquWnqGBHqYA",
  "key1": "2DGSLz81H6kV2V762ZbeSriZv2yHbziCgiCSd1udRyL5XthpQwHiaJpTB9wctaZknNz4jHRxCA7DPT6R27KvdA3f",
  "key2": "3ZHR2r8YdkcZsUdLuBdHMwtoGYcSw8oTg1dQCtJtoZ9QaEe2VgN2rxuwpjq3cpBJXcwv8X8VVANDr9z4trQkKunt",
  "key3": "DiExVGBot65WtpRdbsu9QcdevkQtD3cys5LksJXTPBKPGxYUGStS2ZrdLhbk1WruEmvLn86TazbxcNFzUhjMkib",
  "key4": "5PfQtQPEs5ChHuppvWu3kV4VP7MdoDJvYZYmJ6CEqw8Vku7K3ARGzv542MhPBUcpWj3V1yXiSvHyaMbKRKf3irNj",
  "key5": "5aaVS4Du6PD4TsJ6Q8jAezCawps3sW7FxNsHc2d1o8SyAGb7LMTUAkyPXLSDMxy88ChKYfijcCQhMzEDcZpCJCip",
  "key6": "5ZdxUasXot1TwQgLeJmcm2YSDzAJiqgCZ8spHUN7BiqHC54zBw486PUhD4cybXAZpS4M44UC9BMtZkaDWtgBgsbQ",
  "key7": "66DX1dTKEYsNd9STZucrBE4gUrbgJobcvjhxLfdxE2oHWrKhPa3DoRvWhUjQmcTkTVchC6J5eKJKuiT21ic8MdQ9",
  "key8": "a4eo3AYnEKTU9W5dmL1ZCb5S2HkiaeQpx6KPorvMP6MHavGMaHpNzbt4uww72uQDdCBafRPVpzCS27qySnsgzz7",
  "key9": "6p3v7QL2xosfSik1GZnR9sNrei2nHjSiKehrvGUk5wtmdobwPszFG7jidCdLG9nwpQP7Ff1jqjEg6YVJKeuUkvo",
  "key10": "4d2yN444cr56ErSkRRGPzCcugcYBDKn4Wf12pExs9QYkCMjMUx64GTSyaG6iFPhKwump58QUtQEcQZW7e6MY7N39",
  "key11": "5ngwg4zf63aQiHByMZaERov4S98cT4EgnRdQBUcjkPu9dtfMwYH2UV4nB4KtE3K1HU5NUxo1o8HszMUBrhrEGr47",
  "key12": "64Y7xHuJ6dcdG11XDh8CayHDi5PASgjf1pJdViD2yD8o8sGJPMmFFxZEZFFMmjdWiLsekTNXPJUT7Rb3F9tmwBs1",
  "key13": "4k2xVTPfn6JQFT93tJYPJ8GBKsK6GrRp4Q95LJ6fqzxtvH6xEg12RGWyGUkVzbepGBnuQbEvUpm1n2A1Mzf1fszP",
  "key14": "2Kqkq811RK13YnnxyocU4RskFoybGG7PGeFGKRLtyaN6QEQ46p2VfDgStKuPPYvGxq6dgATHNotFBY1eP5dXvBZq",
  "key15": "5NcQYCE9QHJHjgajvnkbcCDXUxf5d8CoboymCF1v9Ke3GWFLgifTLdqY2hC2EUpyBA3QWBaBTgdQDSwcfw4un1wF",
  "key16": "AjCTcjCwP211Ni6F5e6PmXChj8sacZfGeT1AUQiCruA5mNFy5MjiFCXtbLYudNw77bLaBMt3ejEBBgju4ywgUS6",
  "key17": "3hjy5toEqhxm7xPS4C7cmcFASBj9ys5f2XyjoPj3MLt1AaWR6yHxFaPDffgSquhYkAVXvStQq4bBy4hswMUhC6du",
  "key18": "4jikjSJKqL9PkzipmeW6wDw4XKMyDc5tJTR8nZzVcETQY6Zs18kFcHMWcMdGjkR6s5sF2NofWyyrYgqzCCeznjru",
  "key19": "1papE7ZHNkEFbJQ25EkXdKaCottNExbMkVPrqhouSMzuT5nZVdVyuqnkwXqcqRsmkwwwW1h16LwoTsdxYy3DrLo",
  "key20": "3JHRQgudevYMBjkDBPpVZ5ePTLVzwYSs16Qdbq2aZsP1TNaq1MrLaAE1jRYTKjWux8JTLYz8qiyWbgN6gR225gWF",
  "key21": "pvHZsZ6nTwZSVsUmTM16Z1CBENJBCTBGNYtZ2Bf5gdqeFC1Ui7ugztFiZ8FjrTa6nTfYriYRqKoqdfL47PphDoN",
  "key22": "33eFxA3eSSFHPQ6CaPwMYQYN81bSPEW35M2AXfXXcUewsPyNNJh5e3Za5xUSZfgKu3Q3tCr3vaAyV7WfrKAvoQzU",
  "key23": "4rXey5ersXSq4d6kW8vQpnbWuctnDAcymPWkE2aLghqHHQCBdyuatpLBXXVwwzQEzFLHBy9ZXMHaGbGrw4JLZZci",
  "key24": "5xsv3Vi2eBsL9qsUkYVwaJtCBgjkmiE1fVuLri6zT7KJVX2vRUqFPAJS5babsiJa15GvtbSWMVEv7aRFAZ7D68Ti",
  "key25": "44os83Re24ABeQ7syCHm6TnGeuEnALXqZDZA2y94kZ9TpA7BrSYSGSWQNtQyfA5tRZ5Ccjemdt8scpbVEfE5J453",
  "key26": "27NmezqrmXvo3QJtN4e6t2DurfDpZEmXs8cA6WBnuDeakX2P2nx6NpzkuDhef8bCMKjDjDsBeNVKre8deDbd7bUv",
  "key27": "66MQVZkp2ucB8zA6b3zs2Gajz3RYaVXPRLm2VWEKsbnJXHpoem6F2sBWsUZEsvyuYTEnetGG8KUMNJce8bdRQYtm",
  "key28": "fgwUeinMopWfgnNXxQgANk4iJSKRnHuMwA51BkhiyFZiS8AKANYCAcABPikthnotmSxwKKMmyHC4iHCxUCEvmhV",
  "key29": "4ffJdzwECjm8Ltev5XvcScjARvNc6sPKGNjS9CL4d8vKfbhzFR1BgBpsmS1zVWM5X3zRhwLB1WRKjbzN8WYUNJ6k",
  "key30": "X7rkaTrbYGRtjAQPgxRAAh4tXpjC9Ad9FG7y1mutkSjucFgzFpAdiU52Yych6fmtFkQtU7p1w1Hfo4uPC7ekuS5",
  "key31": "3iG2KH1m2CTEPvuYEMBYbFhvc4bgZLKuvgjcU7HmHqUSSNcDT7bTmMs2K3SMLSwqFraQSCeyN4wuuYewWJyEReb5",
  "key32": "2ZQHYbTQV4AP9bxvSPWh2tkQ2p3pXVpBdGtK2vzjHcgGhNqgneDixYLh16zzvshjFThUcEvn7gHdat8yJ9v75tQp",
  "key33": "4W99dH76hpnqbRxX443kYCUiqfSxxy9CRFFVhSDmSViB82eujPhSp3bFWYNjsyHgzMT5jR7RCwP78JvG1eimTJwK",
  "key34": "4oTDSG3uxP6ukVTF7PB8L1U2qiU1wXpt7nuD2Aw5SGsA9Mpf5BgdrcRsYW9iW63H8WQtS3yWjZhdMWYG6TCjRdK2",
  "key35": "5fUg2EQGQihkkopNZbrHUEmxMEdTr28kGV9NksUZSMuHSGypuFgP3YSa1gCHAX2UbB8NsfrThLQ2KL8UE774Gyt3",
  "key36": "3DpCh8XtBQ7hka4xbgknmnwFtGabWxCbMbxGrm9XVsZwYHAshrxhabU5hNAhQ2b4NrrmfDViukyXmhat7mnMZNjF",
  "key37": "YJUb4mvU6Qwykf2nNVDqQdcJTyfbecK1tmbxSK795v1cJWQ24Vto8xDxZc6NAsYse3KLFZ8Rafu76zZfoC54SvD",
  "key38": "29C81U4d3BGz72U51wAgovc1vFMCnhG9f2kvbvnMPzFSz53RZQ4diwukMThNBLdjkDEB4AWXazBqvx6GppbpfQYi",
  "key39": "4TESKzaPHaPARK9tfF4dAWFVthMMMrnyVnabMmXkBa2ivYCXiCWe6s3G7oZ3XDgvT1YzH2HMFapF1naHBsxyeTWG",
  "key40": "4RPUmjJsNP5hfHV6Awu2bSooZZAPeMdF1amn2h92SMDgzyC9epXMetC7YUrvxHkkZkhZPZVTyHm2d59SFb8ygixf",
  "key41": "s2VFJ9SizqE6PKeNGEgLppKc9kvxpr7UezjK9dQoFAMisdTCh9XVkMeBv8YZKLkFTNXshkL4qVfEZDjkmGgCtdn",
  "key42": "29MjThT9Lsm9bYyurU8EcZ23vt3omx26WNJt6B9g8uRQir2wWmkQWq2bB2QKpCc3fejj8oQXBb4exmqSYLq7sKXr",
  "key43": "522HgM7B7fE7JyrX2r3MqCHadtEh3PAtEuS7sfkG3EQQVXCdJWoPC34KW3FkMgKxKToRYpnkbpmvxnigS55n3yFn",
  "key44": "3TuL7WPRv5oCpgrK18E9wM1ZGDdMkAi64mUmzdXGpr9waLpAXEUvPLTZN1pcryT8ygDon4oGPrBC3qppkRnSzvoX",
  "key45": "5KyChKsASYm89qPXXaTxyWKwA6pT8CXfAD7yEr4XPwL7rZSZKkqRfdDW18k18h1pSgLckRxkBsAsq6PupDaHvpbv",
  "key46": "24kVcmsXWh7P43i8y9UWPQkc1uchexF13rnzd4GP8YDT59VYXGNjFHUyw6RcwT7RjELMtyPfXq6xvq6sXrcgrWKd",
  "key47": "2dCR4nZixrkYKkjQ73GSa7wFcgDhgfD5RUyd6LFT4FQJChyBfzendbAxpPYtNHLM9EsLAsdaw5K2ko2rZFuL4XYL"
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
