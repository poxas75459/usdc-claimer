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
    "2fGMVhqdx59Q5DMp3N9gtRNNz7HXzZu67vE5Sk3abcqJhSehmo9Sn1iyNmhfc6UZoac8ybWLVdnpsrQMD7jWzyb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVNCuUozQKuPGhRh2mUthsG68xxiyEMj28SBSQUw2pifkdurLf1rbnNTWJaz2cFx22tmLUXQiPaazJyZNxqepYE",
  "key1": "pKaEbDMZsQctbqX18iaK27vJQmqDbYPm43Dyymows4XvVuHJgLvza8NgVJJeGTKwiJd7Q5XtWiBUAeaT4okTtpV",
  "key2": "2SZCtAyiBobgR7wpvMazZXxD5QJebnbfaM2QjhaH1q9ZZ4NSStyMyUjvjfs9r1HrjbwmAiCuLeGf1BVHtEfbURSk",
  "key3": "2kXmGEASx917YBUX5RPAoZgaG1wSgYKxYjTKraVTvnKCf5fQxSMY5G2YhTN1zc3yGnry3dJGD6AbsVrnWk8XBNN7",
  "key4": "3kLxq3SFsXLV1FMeXP8iLedjgS1CJUZEU6dVDPkcSDRhuGFqdaeMjvHMLN83EJbxWbewXrF6GYwt49qbzsuva2ry",
  "key5": "3n52f3qSBJWGzUNMUCXWxhyU1rydFhpMZ8PdYtPPSmdmaQTVPUT2KE7BEJEdDcmZS973hqTN2ygzDdpX7PP7RkE",
  "key6": "5enHaAKRos92dgeVonYtPVfTRVcRffM1XcPgMBwysRKPhNnqpZbJjQcv91XTyb6UDhWSkjHsxfoYvuKLnoN6NTj2",
  "key7": "4UeuuV7s9SbwuuaBtiBKegDpAZSgVAKQf55cXq3xecDXWpEFe1TWMFHDh1RY4M22iPCt8D7WeqG9aa9kNAEPwBn8",
  "key8": "43RyszgGb5KuNfYjupPXgdyfsjr4qnXWbq1ArbQLwEKSGFDBuLDmupFuqnrPKkknLJ2YWbfHz2fHBodjLXCzbdMt",
  "key9": "3CBHyJovqNbynkEHRVCEh1AW8BdhwDWE7NHuEDryx9fVb4idXYdLx6oGYmieqAHG3Kk7h748eoNKWM1Ek5QS2b74",
  "key10": "jzm72HFBtNrytCtV8f3vUyHHM2SWhtUGLA9vYYamh46TAR5EuoJr5MqJMpWDWMa3ffQkVxEsXKLSmQAxJnTx2qG",
  "key11": "2U3KNmtbYe211quxaj73aadNp69G4zMpLiuyCM93g2XZrsFyr7ezdasjzDuLUJVLSNjgwZUnXP4ArA6ryTzy9Cxn",
  "key12": "57AN3K4dpN1qYCjTbjjhcX4Que7VugBj7b6JL7e21DvUb9EmYq3sYpnCgpUm1Q6yDeBEtEtFcC3Pvt1hAhDvarPf",
  "key13": "5TrSSxiQmHSt3Udzjkj2nYU4H8s5YXVQSQoMoLAB9HxeGrAURPPJ192CHBySu7zitXvtop8kFW8f6KCV1AKAyyxR",
  "key14": "n9ykoJg9zNWL7miyt43N4L4PJ1mL9VBBAJLeah3Qrza16wavKUwAwNanVXNK7QA7uRFNNVth3m274uEwrSeEN7M",
  "key15": "3tbT5VPqzHwWBnPfBHsmnT6DJ6KFggem3AnbtPxede1VAutgG2Ef2SoVkKHNwhJ2gqXsm194TczmKvKHUitb8mQj",
  "key16": "twjyRSrHgDJL9ud6cTBHyc2v2CqUtuMwpJ3MR8iS1qmMvocQ1khukZRqF2zigYgE9P9fzBuDq3DQrxrRpbK4nSR",
  "key17": "5C84Cii9LuHDpCASgAT2EzzdB5gSnwyELfZjEG4fF1GNwryrD1pThEckC9ZUPeAyq9WXrt61yjXpGL4KxQddKp2S",
  "key18": "578tKjJcAmvwymMRCMDDUUhxqTr6YAiGtra5E4EuE83co6EHYkniJCNknYSGQuUqyJPkk5DWyChRiiVmDTXYn9cx",
  "key19": "38e5sTpFsftXcTiSQYFucZZjYkk9nzPwNgHhaDfH3pzQxecgTQwgwhgPQqUXu7myVa9nNKTQvdexmAjNYKFDLzXV",
  "key20": "4wdc6Aa9nLt6qaDw6opHZyiXYqKsDdUiEUtfWFCGGyz9tvr8yjAnuivY7hS59KmH4uXPn9aUXrc9BzTft8r1hpj",
  "key21": "E8PwgnePUomkku1HUDckGGkjE4a9SwKm7CmbYjKckVTtfsFmpJn8Sp7morPp9vq3AQhWL8NmHgroZiuMHMNabxL",
  "key22": "2pgu4RK4uBF6tEc9jBqdJGjRMTGPBhQCb9Mpuk6zLybBcmAfAdLBqDnSx73m55xtEKKQbAGeTozECjyprqWnGpAA",
  "key23": "GmuCkWZ7V1gNdqy9MafYq5Cf7FtpVVBtzZnYmNyAYEL7pBCBaiQNuTxC4ptHjyHCgCguz7ujvgkZqDxvAoVrki9",
  "key24": "49RHYsAXxGyxBnwHapDsWVBRFYyN3WAmxpxYwmvvXZFDAMcqoXg4fN2vCy4CeSYJoeNZcRPJiTeQrpgkUuB7FDH4",
  "key25": "3qN3Wv6dnsZuKUK9ZNa8tEatiy8kjHXWu9mvdpCprDz3gymYSNes3MhkwG7QEpmCe5fXapQRfKPvcX4CBRNaSNbj",
  "key26": "vmaiP65987D2zoWG7edkVzSRaTcrTFK8NoKpMSG6L3TX4eLjZCLDKb8CtpH2C8jZZsyh2ymipBD29wfMtDaxgUJ",
  "key27": "uHNzFZ7sMqz8cBKWMwpBETqY7WK8cm5d3W4RRrZV9fCBfiB5m8DyLdUQdoayiSHwySAturfRo9TFZaXJ1GGhLT6",
  "key28": "5tkfjEXyJkK96Z8XnUz85d8MjnWCK8CJmLa2KQPXZkJEjNZcWi27bUzKUE5P8tZjWoP7JMh3jDGh2zBTATabnsrC",
  "key29": "5sp22MXiQvYRW54Hm5MGXAM46mJHRwSxbg8KVNk51cnYfSdxcwAf3Q4Qmj3pqQ8v8D3e9rq6rMQ4wrR7vPdykKYJ",
  "key30": "4hASX1dsttaD6x7nLZGW4u4ZvfrFxpv2bKPx2fq7mNYjWbtan5piWWPDpJwn7jwJpM8Wis7Ax1ugMWkcFi6oYp4n",
  "key31": "4G7pxMLRvFDeARnKZtf53dYGzmmob8V9XZX8boymSBiTo8jZBdXX3peVCvSKkvgf7HdnBGe2oV9Yb6pPioJGP4EH",
  "key32": "2jBDszKVhpVdXf4QfyMZo1ZEUXfsrXhsQq41FMwEqeKYSBq4k9NXbj4Zu9L4i5o5Uqw9f57u8DEVpCYT2aD56rMa",
  "key33": "4WkZUuNhmaQCLc7Rs2P3UMM2iLHVix6iMmpneUYCh12NmnomeQreA6H6tSvML4CGZ3RVaCPyD3uyz5VQVDpu6EkD",
  "key34": "5Pf91Uiv19k1Byis9gaXaVG3BV6B9VJ5BDhU2sssYEYVmYS7d2sASbj29mwM3WU2JatvJ5NLRpQweoGR9wsuunZQ",
  "key35": "MxxCTm6w9P8w4X8aqCy9UrqZExa4o33YvFuJ1XwkMTxMstXpTy9bm21G9gPzVRyQDFquXZDoe6pZy6FRadGTaAC",
  "key36": "5h1bZT4qcMhsD3AbrBjRU3n4gdSN2gBK6zkXcUFi6tPE1x9MQs3pe1q5MvHEUDjduC89hj6CLnsQ7WE18pUWs7n8",
  "key37": "4UaT94Q3XZnba6VeneLK3oBNBBUik5nMqdGTmJUEGPMMCnXhCAbu9EKoY8k2nvKV2ujfU28SGoJKBzPnDh3r49LJ",
  "key38": "5EE6n2LsEaWPLTax87Tao1xk5fQRSDt4m7jQaG2nmhXacRipyHCV8xbyrJoRN3wXnpzXZhNm2rUUTQQmgYkE2KiP",
  "key39": "5nkFLRFCjWDzPVCUcCaNi14x7McZANf9qszuxdskzVPTWWnquEysqUpQ54yabEGHcuCFVVPE99N8D3cqUyDUaK7Q",
  "key40": "3jGBH2hSvPGTPKE6utJJEH6tGrN6qFrVywidLa94iZiP6nWa4GopwBg1fuPX6tsSCv4N4xQmWy9YLPecsnt5X3Ju",
  "key41": "KPUw2BXhLfrhLj1Bo47d5z37rAMWwRnCVq1cRCmwRAVZ1bwCkzeoidyihyBgrMQt2gdVc7kxJtEaHsLpqnzBpTG",
  "key42": "3fuLCjgJg5JKZ7AUHv3KhXEGzRmsBYZMKydbBt7G99ez2o5cSauVVpr5x5CYosirSK7fSBPQ83qohXVEM2YCRUQQ",
  "key43": "5sNcHKgMt5ft21y7hjgQmBUpQ2x3PS2jbCeNcPHaU5noKMQUw2MZxD3XQcTUVeGgXzZu6936w6qEQBxfzBfuALsw",
  "key44": "oEsg7Mi3W87Te8ixugfD211VixiDpqefqf4iS7H8k3ix33Nu4NKuSdQChwsfyMNp7iaRoqGucVT6xgMF442XkC6",
  "key45": "2kpsB1WY2GpNkt8fpr1sLXd4wnpR4jyGWDpAgwAWTeswgrdYj66Xv2jdtGqzoJ3NN6oxmxATzi5BrV2vJtJ7QTwq",
  "key46": "2kRph3GnP3pxXN1NyDkHFWRcL52eUSejZNorwPXFTMpNh7oPeiyeE21UPEdwX9QM48PYeC3Hy6GJUaQBDwcShEsh",
  "key47": "35oMUsQUjL8RxsCPTNuTRyutAu4hZ8JaZJMKLXdE89gtKrdQTvg9hsjeLbyKzWYn5hM5BrbfBuuMkAQs8uiC38EC",
  "key48": "2V5JfokK8KrzZX38QYTvJg7QxRiT2QS6wFqQ98KcgTJHGZ4SjyHZiFtedBES2spwrHLGXD6oPxFq1oQgfwrXDmzo",
  "key49": "3fDxiN189NYjxkp2s1AozeFV8BzPymWusuwxyzShd7BwYK4F8JGBTog8CaxwV9TLhnRxKgbsaduaMxtzDLYMc89e"
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
