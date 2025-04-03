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
    "4CX5s62c4we59pkY88gECCXo5D6UJ7idMUmasxSvH9FNbrnuZ4vxVZ4vYXZHAe3ZToYR4VVUJxZxFTaMT8z5zrRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idDTSpiaM98ySFjNDaqxY94ycCQm7KobigTjYsLGq15LecAJqMnGN3LbtwuvjcYfjitVNnBknJPM6BVioeqJpcY",
  "key1": "4fLHbqp2PMWeDxwAa6cAMUfjRCQwFSFP8T5LpGyh76AWetbdYVijdqP7dr4hLa18xhL9bKfCjNcCCtaS7zVB5ckp",
  "key2": "Uv7ppYGDvkmuck9ismkuSKfgq5X3ivXjhFAMdKpMuji2BgchR1zVkVDZAmh7p4bH4BMrHMrRAiZQQKDALpPHzuK",
  "key3": "2ypcfE8LhP4MrNMSWD9dTk7quuUmmPUzHTkU8C9cLYxfr3tMoTJGaz4NbYb8hZuezZTkx9E6i5nMyZKoSAx6eYss",
  "key4": "5NuCNLK51rJkJjZUuzR25DApg8RaVZjHaBuYiyCSjG2Z7v5nmUDy654Lynwb3HptSNESjRA7xvZkLytk9qSAACLb",
  "key5": "2R4gaPTmN4gKqjJc7nGuPDZcLeMV5Ya43d2TEWrv6xL5nGrMcfj68Zj341iEne814RUq7otsmGzmcV9EePRxnDhr",
  "key6": "5h6jyXjJR5YTseCM6VqR3jCuRvRPf3gy22Ykt3p58ekR1P3ocDnzcPGtvaEz8cUsQ5NAKRmraG1PM586ZxbdWmyp",
  "key7": "5XGbfZCzF3CM11kMaPu8gYQMZsKKLpggRQV74HaV8rmSKArsB6Dk9MhAKhTz8mNzMVUd4JoeuV8EXt3sGUPuQJ6E",
  "key8": "43Wao646Ae8tsVrKt8ZxZxPiScW2V1WSp7RVNdjde4shLVkzo8vVPHAFLQHhobWRbHi519qSaoFbcvVyx6tkgDec",
  "key9": "5kAE3u6HmZPyWjTEUhqbkwwdmKCp3QpFjqb3yrqMsx9kCDNwUiB9i7tWe6K99xF3UyGu8es9E7irddB4j3997Qvw",
  "key10": "666TtpPK6YFujTKiUWE9LJZUCqEUFTzoYUo1oYrgTfmBZDjro7oTLndrGhz6DV8Jy4JcwpbZSz5ocZQmFe7qu2nd",
  "key11": "48Ssji5MRrQrH2cKYXAbRLkXEKQ7VPgEBu1SgnV4DftFyHXbDBaLvjquexptRnSDgmdchy5z5LkJjfgqYZy8LTMo",
  "key12": "2dVi1o6g52j3xWYbUg3VA5TbajjSxMWSfA5n9PyjVeqZhWEx573Yro19V85dWu8UAGYgr9ht7SVVW28z3PkPHjnp",
  "key13": "mgvWMq2z6D2mmRPcdrQc7YGBeLNSq4xTUYnMksChzTN7Bzav4tYj3pf3i4oKMbYtYw9aiVTj7C2DjGVpJh5ZqSb",
  "key14": "315EA4nu4qj8aenyYF6h7TE2d2sBbQsTMb4nbU4Aj8rLkstzb17tnJEZUedAC7UUinLhug4vUJhwVgSNYgF291R1",
  "key15": "3y8z2t4baWbGPKnKrp45tKFRgRPvpVcwAo4iWEGjzBdU56vjcsUUTf48t5Jy49SQjiadGnYkCajorf8PkzjTQQW4",
  "key16": "29zohufskDuCZyjjsb9LYmy1MEcweQQp4ujpeMj8dPBshWuPQmJ7dgEdzUVEoiohRHBNDDtjdXF318LZZvLMKTym",
  "key17": "3uPwWmrcXQYwzydXVEqB7ts3rtGtLib8TuVu5ZozouF2qq5r3cuCs8EBATh4dSBiLgESWarWYmCqmmet5y3RU9dV",
  "key18": "GFEm2r6UvWcDXG4rbVWjmWGTHbNodnGSTNpgpqyTqRZTBpswStr6E7YWxgD1LWMSkdN6a84KmSySBMnon6TQdvU",
  "key19": "2doZH77Up4uaUqDFCyDQSnwf8iPR9Z1jgixQv6uQ1moVLvkBcq7Pc99YAg4XAR8jieiNerG27ekdg22xntBE89aM",
  "key20": "2tuVcXLrFqo1S1sE79TTWrabVWtShSJD6oNHTB2hHeRUEsyZb6Ewyww3ny9MiDcotQFuC2BYcaraPFnHsTchvLGu",
  "key21": "5xoTKguerqvocyXJJcV7GttJrhLYydLP3HduQ91XYFZC2SUVZsna1zXgsn9bC4iGXn4KSk5jXxsNA7Et1NABfLS",
  "key22": "4oPBoFeTDpt336TUJgxgBC6YnTHV7evszoYFrhLCdpoXU5zL9La1XqPJR7ZL5bZkPVhiU6UPev7uLadZyvXc3Ydq",
  "key23": "2xv6XDF7j6aavKoYcRum9gJqg4oBRxU2XrHUAUAKSDAvNrpFcTBLqRVErbSp47FTGyhYkqbJHYKxR7TjmnWz4Ug4",
  "key24": "4U1DAupGuMdih3FNEUsYhqBF9NPpi8mx5PMMAt2pE3Xp1KeWYuXSByxTX16f58vADWnvvGXs7VQVQ6g6ygdEugCn",
  "key25": "4fpLEMmRBnD5yfSGfJNRcFoqb2tARyAKVwt5S3GeiXqXN3Xvn8K8ZPDxhTCALv8jPdaqqenzDKbRwKDb7pQcoLkg",
  "key26": "5KhWSyGt3agQQ9eiC278snVHU8YfHyb7iCTXWcZVAfsZVUbKYVvY6kWmFF5E6LCivFohKmwTwZi1j4DRDtgwoPrr",
  "key27": "4kHj5hM32NQ9hT3vmTTn3xcp4yyb6UnP9125dfmmJsxUCr4PHbTTm8tecaKX5tTszFrXk3tnkGPrrtQUgS2NbUXB",
  "key28": "4cRbknyG2jnE3NTHX5t44p2T8Bc6Ub5YfmQCTo2jvGS7q5gbQCDUWKfcHuvuaFMtSJLDf48KPJyhyLsX7YT8nDt5",
  "key29": "2CKY8PbLNJM7Nq1rug8zzUQsjJU61733YVLNahyw12tN8LfgpXrZEW5dCVwPfepqyWXdxNKpaKiaK4Xkp7NjaUYe",
  "key30": "55mjUSySitm9e6c7f9z2i8SdudDFCuMMbxvEigkRovxcDSf1VBqbvCcg1r1C9cFLfHeWf3dYnN2rEbGRmSXBpvth",
  "key31": "yzHLjSnhgaVkBjRUi17tS1VWNxkRmEiWtPUvchQS94i51PFCg2qkFJoqGZV2nybswBVXBWZzcespD4iWMLs8KeK",
  "key32": "24aBLwcaNJ58nt1eu7ZKtfQsaFZbb2qEhxV7UwPg7mmzvxfp4Q691oVmCgAkgS1t869aWgkjWbRDvm7HZtwREAeL",
  "key33": "5PjhsCYjHFCHvU8CSwzcdS4juNkwCVr6aJFUMp2bqbM59PBsfwysbcCSo5tqrEWSfARsFfUvsYMnL87Y91mQ1tfV",
  "key34": "36mqYLZYTHGaiH1i5tmoNtfkmd4PxHKf8E1qpYMWss9X7g7ZCtiL8dWSq6x5RoKTjQhadAnmtwEtYLq6VPeg4gXi",
  "key35": "2MWhXqXcrFUfrpEw3ySCMnN8ErdFY3Y7EkdHfL6fmB6WJ2t2jL6eX5N61kKRGrEm1mwWEe8a9sCFBrSyqj8DYXWd",
  "key36": "48dMxqWYxmqoquvHtEwn21CKQZeMLRVGw7inFXZZauRAM2wFjbZ7ox9N6o3V4b8KpG8kdiZ8UV5VtZBsdihmRBTC",
  "key37": "4Ru3uPk4d6CRVb2f8eNym136X86Zcn32uRcAwtackNG38FZj8g3QkoScYMvS63phmwLZwLEdtH3NookTV7m9byBB",
  "key38": "3vGDo7XgVbZkd7r8dkAzw4A6DRju2ZrX4CksUAf18WBB79HQYG3iTDDkeFxUDcK6Ub2VK3FfgxLbXJ7NQ4ebJhHh",
  "key39": "4Dmboe2nemFjCBiAFnVLCn6bqC8Y7xRsHH45m4dsZjca38GW4D4wwfoSsz9hUsrqWkDoh52RuHQxdGV7Dzo48NJQ",
  "key40": "V1oWWJRP64LnLQnjCHvVAzQV7ULRxaRw9v1iM6s7htAuh8XtPsfZCdwfFKA974PjMqghoL66uZR49WP8DL39wfp",
  "key41": "4VAhJms3n3LPNEpsE1UhcaYmAP8rugPg5pjYt5oDewRQgBCQU7gVUtuEEriS9AMid2hg17ggSMa3Q5Vg5JbiLYwU",
  "key42": "nFJD7pbK35TE5tSuKxFFRvNPnFEFUGsQkxcJVreuYoT1BS74eRLpwk8g37JYb8bhj3kHQqLMCCBqMg3nGaYkuYW",
  "key43": "2iYZVx5e98W3vcnFLWxauzZPAPMrHFbQ5LbfMDo1ag61t5hxs9bSzbQK992ddNVnfHqSQ33afWUowfrxq2LjQvsa",
  "key44": "2QQuTCAu4oH7FA3ECMoxX8QPoKYbicUKjiEpsNjJ1CYgDTft5tayNspGUdrkBxEKtEuA8HSkw1gGvpUgGm8J5BMm",
  "key45": "4Pr8p83CCpoQQgixWhi3qJoGj783wjWGKxskgHmMa2AMW46pJJsr3Z3wP2JmGnnb7EgNVbEHXh7s39VSuQxvfsvv",
  "key46": "66p9EMAdHWT7GfN87mVZ4XVTjVWuPC97tw9qiiBWed5FrgKtULTwH54u4XRokQZGyXJvjF1F6q6TrALjs9NVk4uZ",
  "key47": "3KdTFPaLwgHLguQDVXomwLFo8QAev8cEtkkoXLYU1sqPw6n4dq1CJobkH1n1xgLHfAhEPMHnCJxKh6PdZBimENjJ",
  "key48": "4uKVnYezKxR4WtYUDhKQ9wzrC1nQ9ar7xa9mtoD3VCWe3Fgu68oqT3yjAfrHaBi6vANCPoYt2TY63wcjKZ5T1ozP",
  "key49": "2hR4EHrc5DkTMXAFM3Zhf4KysJMRwuZJGz6BbmdQSTrNMCRqDLWtyGPGYJo99hhzZh8kZT7Ay1yD4vfQAUjLjdz6"
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
