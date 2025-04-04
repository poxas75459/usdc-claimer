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
    "TTQCSmZXqZ7xnXqsBFxBZzxoDUrqTSNByMC9gRNYnFpWqauUAQXHKy4sqHKrqUFaUBsubCpbfiw7oRFxtgVN78Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZK2MUn5MH662XSojYMniMg6XsJaWG6fMdTFnSXxuYP2RmdqopHXnLJKMTnrxqu55KWYN4yRoh6sLSHtDVNmcUoS",
  "key1": "2RXj2JT53xdSzrx78ray1WBcxVqmaH9mMRiMBjxsJvZnG22tfJJMPjoJrVyuTYkbMKPTryEksqP6S2eSFa4j2cg5",
  "key2": "51bnDJRBk5v2jj626eUzFzaUyBybELK9WgQufYnhimggDyREGCRiP9FwPYZMBxzMy9GfnGKBgBJf6ySjnturocRV",
  "key3": "37zhjTVLD9Q87PMZHxDtm1E6zcNpCdz6F7DbznwbtK8cVNK22qas4759EpdjicYntotBFse3ux2iUrdNrE5nEvey",
  "key4": "3oQwK8vTgASy6pKFeKpxUUpquXH9XFhuvrBiFSj2FrHMKbHCJc9JA1ktsVEgCFfouMvMNTbmZV6TsRTmtzKMnLpE",
  "key5": "41Ttk5KD9aAgi3Nxika3LFf5jshmXCUukiuZzzFwanzS8PWYX6FPx6HL9dS7sLRXA3umYSkWL76g8YQnTsawCFJv",
  "key6": "33EAEdBCPKLwHfcLHkxA1TajxYLbCaqej4hdVVWcaPDw8v2fv9nfFoHPEBChsJEKMJse1gzhBX5xQqS4a5ALf7b1",
  "key7": "2jfEYaRRTf4u8XhuEY9WxX5rLvbZfCfMeoupZuQzaxP3DRoF3XvsCVDrojVAE5uS33emPsS5tWoKvn7cRzrkJtc9",
  "key8": "5y4HvYWGM2z5i5ukoWfnaoEh6T6kfcj78F9434cobu22QoepxjNUrcCJHXkhMzcNyJ71BxPzNpycuQx9FyRbcHse",
  "key9": "47NNBnyXZCFFJ7msKt4WYxMRsp74JLRRxW3QJV9cqRTt7BFRsNeJeZanKUJRb9pSGYAg1ydboX9UztjPMfgKMzKb",
  "key10": "4RGyGw1cEMAb855nyLPRQtsC2WiP9fEYgRoVEmaCGn36AnrQkXDoXuxqChrHWx3mwgHxKSSvN2ymePnKMfGxno86",
  "key11": "r46hsi1471RMJ3ce2oePbEeA1xxsrqDcvpSi3Kqc5DKmzBRQoR27p638XDBwUHEFyLsVSiScGmzvoiwqF6tEQCG",
  "key12": "gJYUQztgXE8P1F12Pvg5PNsnNpf7k3174Xf9KQTnAF4s1hUfFgLjxNU3BBZZwmDAVRcBaM1fYjsD7jvpwaMvSi1",
  "key13": "24f8f34y8cGZ4u34gq9YKFcqio6nWcPwk3wyeDXXUWegGsyMd4q1QGcXJRyGUaeFg8XFvyn2dskt997Vq7EnZzFK",
  "key14": "3XGA6N8wE7Uv2oPY4NSVQLBHoWuPBjFHpyG9uiNX26XoZNGsFfXayjhrDut546tzZxFmpHySyB6VBGP8gZyrWCHM",
  "key15": "5XNW4PvZHeprReJPj3GvTbhgQjvwM8eYDYAWHYMDvHfzPheLpFkGKCNCXexwbQF8rLgtf3bK4xN7bUwfEH2gMafd",
  "key16": "221srejxVs7vUEiADdo9sgph9rNSGHGTY96objjNtnpgmcAFBNALNBSSksQk2CHxna7LTFSf2XyUJKjQcY5HC5D2",
  "key17": "6KJCzoh65mWzNk4kDhuDbHiu6JdYsMH2uKzN2PbAGBDFzXWkAeUdCCH39uKWWCWXPQ1th9puZLxiczW56j83ABw",
  "key18": "41R1vivCioXb1GpxpNyyA3aBhr94p8L463ZSbTpn32GQe1kSBVZd18at7xDAipENRcGJwLf59H5adoV1xzjuqiFd",
  "key19": "5tD3sjA1BjSxuSH3rUsEWcw5y1borgrtaRk6j1MKtkE7V21xuZy6qTxQPxRyU8btLKUQVhiZtjRYdnGqzNwFzJoR",
  "key20": "3CWwG5Yr7hAR96GDzomBLBzk2Rt3PunfzB8VtFJkJMavnvzsmQGTiEk1zQN8NES3VqGGfZQPpodkr3rPoRW9zadW",
  "key21": "35DNseSuxJdm133ZnYwbXQYtp81T7Qa261Cr7RywF9YAX5Fsw38zZxj9WtqmEX5FBKAg5JJinJARJE2ceaTwsWMH",
  "key22": "5pKor2LRuNuMqPKKhd3gvtMVe5A2QJ2tAQFXWgKv7DyWNhf4zfUc5DVqCpnDDLarq5Lwzw9MR5fRPnmpBDDYMWno",
  "key23": "36vPcc2cs8knt5SfZwfav2yzW7BAY7UhEgHnGWnFfTxmodobUyr99yb3prmLRUzmL7ZKX7YQ29y8RMKBNnHwf4va",
  "key24": "33x4qxuNd32PYA3dwCpeZiBJTdqVTJJUnr3cVvQSTHqZ7rEQ4VYh6J87r8SjbZxpaHXRnzNw95wsxixk6wwvz9Qz",
  "key25": "vNCkTrvov9jbVRJqC8vUStaNcF58ykw59FDXwzbZG9oLx8a5CsHraQgQgZfRse4G8ZKqCb7ELpCaxtLVZbhJp5w",
  "key26": "4C8A79AGuW7TmNPKLtUgiJHJKGutif5hQ3i6ZrM7iUSf86wgd3qqMczbkY8w6H6ijaND1DtZ45zjsvUmRyNdvqZs",
  "key27": "BDwEmtDgfMwXmwtBnFSVUNwTYa3v9rMBJiyncHm7zrqabF1v3rG4vKXZyhNFL5jNj9htoQoWPaKqwZ6xCWNkV4j",
  "key28": "3Ws8Ecq4zNKs152GVFPppkwGtLaTeDHHYtpV8ULuxfVA52maDg5qR4c1MR6uV8bZB5USLHu5ZXaYH24CU7i5bWt3",
  "key29": "3cFPFYa3GsERA4sPu8oh2pAi6kEgsHswHBAmqZhRKF8dYPQ2KrfCJGwz25po5y9Vpw3Jb2fwC4pdKC83dESUdFVm",
  "key30": "4nywtDsJqoK6BAA179YvbD7xZ4Mne42Ch1VkAcYbNWMqHRTSKsSDjKDf5qUNCZqqpJGGoML552Nhzkv2GspHYcae",
  "key31": "2CG5tCbcQZV81hf418ouxrjnR44k1d8dCX48uR5fyQoX2rD6UBtQ1HAHdSMFQLWZbFdXpDgw69aKGj7Fk1Px3sB2",
  "key32": "vEGkMQfHbZSFGd2dH7k9BcpV96KjDBDugGmtjq229jyPkWt4MyQPH9SAS3Mv1C6WJY2QPPzWo4J1pQ3S5jnENe1",
  "key33": "3ZnFZUBh8shnjuYXvKAZGMrGtM5YgfiBTP6c9JZTYQtf7w4hhqyG1rE5cGWWnUXHzuKYZ9HFmC9WoUPPYEji4xEe",
  "key34": "2dFcS3KhEk5RBExwoks6bpQMsiaswr3SY6XYTjyZExR8HyJ5Bnp87hadcqtPMJiUre7crZ98Y5bEWrXQZEXsS8NK",
  "key35": "2dbdcMoK8YmakW3hGtqjPgxKfXdW8pfKCuSbNaVnQibg1GWH74Esnt2K1iB7tWNE753x8BfJfCCHwoK6a8xqws6u",
  "key36": "vePH736JArGttb5bkifccduKLnUqXeM458FQdwQu8FDxx8jDPXTkcbaqRrDZswJQkUPwRTMUba1kWfUSS9xpAWy",
  "key37": "3aGN6znUSnemxuf3h7f9cwjKSfEyGhueDZsJDzQjaJS4VXypDUzv7mxiSxdpcYrzpxYiA5KnSmU7YSQq3hq2Yheb",
  "key38": "2xBAwiLjmEmoppFakCjF6BwMDjBzaeXkwcCEMqWnaZHSKcfuVJiWeisE9Wdr4oYBy9B9Cx2qv27r95snsqAuUCi6",
  "key39": "5jrMqHTdjwExGxRmYpcbGLvZgMhEUrsnGoTG736G3Ju2UKKE95nWEFFxLKB74sHhyrbQv5Z7xg43nUCQgXnZDd1A",
  "key40": "3aMQAjtJw5rSXTw5CbpyrgCQZ2mYFmsP35duNWF8ADdhC1GRQJM8qRXLnJmPGJutxc9Cmw29gDq6CmzPiR6Fz2o9",
  "key41": "8WcA6ohaimtqd2kY5p5FCFJ6wGJg4dfmbXciXfLZXbAPpZp88HGHvMmfm3m87Cd3fcHP82M89CiNnTQkHM36DFk",
  "key42": "3yVsrnp3RuXWZoNbhZiynWkJhLKG6jHaBVPhm4oHDgCibgUcxoSTFNRFEWob2meAWVeN8MVanSzrqBTxXaQNja9D",
  "key43": "5zL1n2cs3dwVVt7NTaso6tLip8TaBSQHj1dApvtXeCfprnGeRfyaRasU4bvxvGd5STCwji1HwfBWGcC4empbXkZB"
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
