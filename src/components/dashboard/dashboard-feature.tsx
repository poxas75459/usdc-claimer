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
    "5Tfv5WURLGSFCDbjYKqTTQHWvKwfpcGjWdvGMH6t1q7xaopG3728pKhBht6NcJzt8tkctipGYGVLpDDYkvn8PHZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyTtjrWjJVq7ajEhh3BAXktuCGadA2LYRCAh3URFZ5X27kNXC315v7KJEUQYMbXCahuYxGL16ezRp8VVvJQLCYn",
  "key1": "47hpe542HtacnKBiVpNPofmdwKmBgmqUbz8RxBGJMUNyVb1DaTAqAyPkmkFRFmYfAZqznNVLy8AxBrQh5RBr5TpS",
  "key2": "5RjNcV748q8vFyBt3RDgffA86f8c3ujzskeskZXV6aiAVKJGMbaTF8TwxH7eZZGijiybSMUMZBzscUxsxb8gnNsW",
  "key3": "29yMG1uvSkFTC9SxaScUpH5H6n87QLhYvHzrkHF8ytt7LjGo5A8qdaxtYME3uLP8h9hALCisZHUEk6EhJJ1imUfH",
  "key4": "JsHwmLZeCywmViNU6RgamRxMog95urXKzsyErggoD8hbcr3BnBPiDfxCzkeuWytTazEjKVcwxAff4jzxYuLQLPN",
  "key5": "3jv9iUM9Udk1AoFv4BqW1Cg4iaxSvyakr4TWaFiazooXvgUHXd5Be71eCyXBETh5A74uEV9yP41rcgvXNyVPUpSo",
  "key6": "aysv7Xmd8aME3zPFSQ1tzNrz73LUULiEqV17f4zjiBWQ7kV5vNZWB7cWUfGMbv4Hgzv7ASSo8nrCi4KGxp8n9Ur",
  "key7": "5BSxupZGTBbxUskbss9WxwDhapo9G1C1Fj3RrekSFfj5LznyC6DXdbbSamQ88927Yruf2GvMFP7og76m4Q7RNkwv",
  "key8": "3MJAkkYrVfXAFxZ3hCF8riKuunAgvZ8onZ2tAdenjHeuNcvdPCmZFQ7N3ghJqMVaaMozGZieRXUTMkV7XAfr5EgW",
  "key9": "4bQeAPRZo8JqY9dcyBm9yLyDBf4X7Y6Ej91Dt6xWWtC1HbxqvJnghzkt2cSY6vHepkbiYUnYvVwkHNo4tnHdwzcU",
  "key10": "Rknr9c5sHDPKHz63tkzLFwxezcZDhc85utYAc4ynWPdNEQA27RibWJUt9uiwVLaRQ8zMqpwJU29ArabSZ4TAb7P",
  "key11": "36mgEiAPXTdGyys1BTZ9fLWoiwia4q7UuscWQ1w1ogG8R2V6bC6fNxfk2QMawdR3wTQDrFfWFoxMtsiAKtzxQGFA",
  "key12": "1J6SPApgS68BmqDobaWVBtwwtvfuLpLUUmjK3jgWAaZZvsgGrrwp7LuA1fbJ35RQhm7JTQE9r3fXExjMwoT1KjC",
  "key13": "4bkFTuEKrahZMCfxVRnntr9fuX6XHqKrYQfYwXmyDmsrnxRLeGznXEvLqwhHv58jA54YWYYKV37MyAXAjJ5ZN8Q4",
  "key14": "4DjS3WqjgyKU8UPFJMcDWGEMXXvksGCiEDHmUtLqdWPDtucLZYtUNgTrqJ9pGDBKL9VoA4FP12B4WjHtibcSzY4g",
  "key15": "4f4fh5VgAzo4oD7me57aNBsv7o5LwZA1ZiYz4t6kX59is7NWRnQzngQLyAW3VzT3mr5gJu76cWFtfzxGuQziXAwm",
  "key16": "3nm1AQa54eQPvj2TCrSAARGMZdGYhM1ji3MPSa11HRBsk1KduA4NWx1g4YN5BHcJyJgxKwg4yje3DowA2TFCYUPA",
  "key17": "3FpovcE4cQAPFB4WGiESNEsjxYZijsB4eYQ53UaAN8sVNZdBRRRd5vcVwks3ShKWYEKBqTBTJTQbreybMpRn9SZ5",
  "key18": "4iAYV81aonfGK2kJQga36Z3ftUvhpgsa9c59fonsNqrfQWz11HdGJ3WZPmrUpw17xLLDJhodeUm2Y6t9Ek76Vth7",
  "key19": "2ifR4DhJE6DPK8n5Xwd49VWmWhryBy9eMtYPdNALNjBHwZFXg7DuSiL8rrsZNEdxuDZZXNhR5vWiAXr2BMgF5mgV",
  "key20": "2cgDnc8HQkmMUr6jMPXHCwdqMHAyKfrVgSaGMUSo3Cj5PCEYhGECU28ZFCYftbQrGMTEZFPaZeLBrtAM2Nf52fCZ",
  "key21": "PtSb9rstucvaqDcMkvMpXuJed3rNBb7PV6MweMNh76BiZx7LpPBhm5aKtKnprKPocGVdVHrTpqsf4EvMzQD4vTZ",
  "key22": "wfKctkrtTQsPsPsxxK6fxaMTxmJe11ZoBwJXKZi9u3d77v8ArpCuvhsJ5jvtnDvegJhqKB4JUALKKMpapxEg4gA",
  "key23": "5nggPF73qp2NwjKmfGQDWEvmG1JDYbQq826Czo6Na51WjKxVsG6h1NEWw5vZoLb43rz5GVdT2ZaAYiPoLMCbJhP1",
  "key24": "2tKz3XojNv2ixSRedEbF4SidVpD8AABVKBapFKzMvChNpisxqn2grDP78LUhXuCY97QyGcgaVeNTAe4hN9hZNY7Q",
  "key25": "dAFwNBLV9HeGN3yV6cyGYJbZhLoRnuccgLJv8UGW913zDYnorxLBfNNwv5vgQAB7h1mmsGvxVbFWXGdcwmmPXXQ",
  "key26": "4z8bSysZKJoYjEBCTU7meAyFP2zL4ZT7JKffhKGkbZFqmn4Yw1zAaXwjjgTe4joHAQrk9rKKk1P3cDsf7WoFPsV6",
  "key27": "4cp4aFm9Cop4fkPZzYgMytn1wmk8wtZoUttmHwrPwxjZWwjdZLVRgZJCPLxHjm8qkUumje1rHAf9JKheghwvvheY",
  "key28": "5CjYBW4xykudwraJfp36v4p3QHNMWyivxHifsuQp3zuw8jRM3dSzSm82JGsfebnR5WJ28D857cMcQtKAWCtHEDUZ",
  "key29": "36aYPqSmb2wu9c4hnTrUzmDzWkvwX8mx88TikbMDyX2XTyCZQ2Q4x1x1Jmw681g3DeCMnDRwQifBrqLtHStmggmZ",
  "key30": "21RRN8JVxLvbWt5AttjfwxPffKBzqXQVH23LAUn1igwfVYAwikqqUqV7FJ1Ppq2bA28r37wtRPL5q3vu1XFGEuW3",
  "key31": "3TMUbEmcu75xaMF1sRmmZjRBA1zWFFUABY8vg17GPDzAs4Uh6pzEwacyn9LVykoXKNW6prkBvQsusxbnFvhcKQWF",
  "key32": "4NKd2eRxgZTNm77J9tGayXPwyfV1mzeRKgBxmVPw1JKqaAG4aaoQuxtVLsgEQGurQArNfJR4owbkgWvsd5pxqiMd",
  "key33": "QWLtYdX2HKABQ42rg1FcneKuSbFBqme2ecxbSRzjE5eDMDGN2hTRjukSetDwYZVg7WxmjgrzGakK7zYFV78rRQk",
  "key34": "4hGxUv7PsXQbZHGhssCzdZK9gfqT9UoL4unuihYL1zi8gPNtoM4JBiZBt9peEELpNNsXRbXGFVqKGtjGxwrHcutn",
  "key35": "3iMZ2viVQuWkCb4gYfX9q5rxDQkmXBBpAUWvsWMHobrJkQYAqSsHVwCTZGo4k5qaA52ZxeKzz9sCMysYwU5YQMav",
  "key36": "38QZHD2S6DEWpqbhRyKhJ8F19uHgCxoz29UoAD9oqVpcNz8JkSUZwJbGx6cSDmzNwfkL1o8SMBJPTrBvgY81w5C",
  "key37": "52d437HhK86tLVqMN2iKXiZAMxvq7YnFRYkG9WRKbGjR5LP7pA2Gngs5jH4PvWTft1t3FMJ5jAERJjLWAgKsDecZ",
  "key38": "4sWqSbKofMwvz1Ketint5rfLSdH6F2itDztVJqX4XLcf6yqo4eLMtyBJ5FAqToL5kGdJK6Qtd3ihkPYZqN8jcW7n",
  "key39": "iVKwGVjdMqcnBo2bxgsQnrAhGxBUZfyRWSKJotk3kkYjZn2zFVmTBotjCNBRsWqHYNEi4yegUaVP13L1YbRzoie",
  "key40": "3rBCczJnoYRos42eHWoZSHTCTyDhXibgPArFRWB731aenGTHboiPPbA39RsK4zU7hJNv9ZmhsGUGVoRNYnTzMruc"
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
