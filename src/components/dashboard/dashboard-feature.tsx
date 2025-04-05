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
    "64roJkHXMzeprr8HmKLkfKo3cNZ12eXj3MaJ3CWCwNZxJVxK8vSnGnVBL2zHAecow9eCkAZ3sjTw5KsPKNbfJUDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veZXZsDegswNmdh9VS5F6asMCmZadzGn3Wrfiyi4edqoZaCMEUsJpB2vMMU5bjvoTKus5o9QCkA6eduh2yAWDqj",
  "key1": "4QaEEqrWjUP78Caz7BYQtzogbgGKeBMTcBcDxsMpuY5u4u9ua9op9ff9GUSvvnWd1SpCJr2tjUqJ6npiJj44Nqnf",
  "key2": "53QixJ58HYBLwsBC5o63zBFidfKcxE4uMnWfP2Di8b28wwTX6QQQ6F2RQMR2DU1gcGsXbCZXcH1Zn62qpd4EGFWF",
  "key3": "fVreMdv2tShaFEGcvNdpWEx3vyP878YWW78TqF8ZBtEfuZBQfSNng4h4BTrLh2uxBfPBqRdKZzLLUoxfPqebP2p",
  "key4": "67SHy46QXmLbyW6NgbxpmTYCRbHnw56zoLhdnkmUXbnwBXWbDai66udtyGkzrxf4kSwPfTSNDusa8PBYeajmXNRK",
  "key5": "5fBSsZdSY4cmFsQo4ApE2bQ9EwNwdZV5VYwar7EFZxnXnL4LRLH6Zuu247vaWbGNXmWBVH5zd4Kp8jUTvndbWUtX",
  "key6": "2SUKth7ynfUKheKFW4jWCsgKHkH98Yn4dHQxenytaRuTq6HbDKWWzxqbeNtiLemJXFEmtx36sKKpdNsu45AzHdZZ",
  "key7": "32nSb4ui5XtgkegKtdvp1PPPARNJ7JZKQjnjQcP6vpEA8mWG8rTg6AYh5qcp9AfDatLCjJB3geSNWcWxBSv2ECDc",
  "key8": "4tmrtrT5e4QfPwF2gggKQhPLHPPGh8NJxnjpkJ8MBi97ojyk4Y2hwHxH2qXmsi4FnxqgHWiGaZU2XBjW1KP9kHR3",
  "key9": "4JJCTVTQyHsVWc5AtsqkH5usCrzCqwVy3hiZ5SNZa1XXDE1xSyoJ4N8LmWgrXpYvgeVLJKLWWo1psXdjejbhKAHp",
  "key10": "4ZvriyFoNHpNRgE636RiUR4sSGDkr8iGDKnKqR3UbQ6MHYieTtsBBcuWFNMyXn3Zws3tJibDRiMe4EMPMD3nXxq3",
  "key11": "2486aTBPtzkLoaMcKC4asfWTtPZ4Vtyn13n5Zhz6DyFvNTbyzukZuUMGGL3SSrQ1nmka4JiwXd9NBPhrDQcDNxnd",
  "key12": "226eqCCS4fFEfFBfGWxKQaVF1eSTibx4DAMMu54E3xhMmm16owJgwB2Z81bnwHYvxFTJDokrNowE5wpXTWonoZ7u",
  "key13": "2DQLAdfhAvEufvKSpMvGtvR7iDooUWSFdFAxm2fv4t7bwApAH1PKSdys3pNh9wmgtu9UtXK4S3GWFmuLqkc7sLR8",
  "key14": "5HYcQGRx6xBdANVv6rSKoqbzARo4CGERokXTxwwE4eLQ7sfg1ixPiRC7AGwXYjDnzLBuBo9csYCthunSx8oajdUi",
  "key15": "4F3BjzsDeuzjGu9QJ2YxoGT7EzhDtfPSQem3VszcX7WrPqsrrjs6Gv1yMSQ2zBLDVEVwRrbJDq3xuEsvs7LLbHFg",
  "key16": "2wG1EtA9hMaQ5FT5i5UBHBuo74tFLQRsRQcfKLKuzMKZJ3hxi4yHuHcQF9WsUxxiUYReE1KTohqbqm3iDhJvoC5A",
  "key17": "iJc8Ly4vLwozVKx89gtYg4Kyro7aQa6YLa3Fza8M5sSSSdcwboHukJ994rvBbzXKZCU9uKmKrrZupopYKUnsuvj",
  "key18": "3VwjeyBWULuyskNXZbZ4gGqA1m4924vCEnzPbiwa3DePXwq8XuN6bQvqgbGCfuFZUVgxqA4tUahNYsGNTwgLEvw2",
  "key19": "P8aLq6KphY4e6MTQcY4r6UdfopXavzNPQxMnpGSHJp4Fze2A5FeQvw4mQZW1WjBr9d56p9JoADjD478Nmsx7a8j",
  "key20": "46DyNbKURVbPYbXPLMifSrNfo5cRnSviKoMiUgHyuPBAhui4SVCuQWNtERssZZSUx6GpGfFptjRrTvqQbH6cFFXh",
  "key21": "4ZqZGWtKaQMszLmz77TfALS3abg6WS7G31m244XaG3pNysM3vXJBnnNDw7Mguimzv1LXj81wm33ZiYbnZaU5eng7",
  "key22": "3dKJ6L3N3JRpkFdNvG9AUpg9Gp8gjBjui2kQo3EvAyAFhkNSv1LqfisaTe6LtoLbzcGzS51cuDianttAhzEpeEtY",
  "key23": "edCxXbsfdmiBiav91M7upgixsNCbK4ruHNkztcy5moUkxK8zWzHbWgJhtz9spXHdx8Rtd5mh82StaD3vt3Smd8t",
  "key24": "fVD9TmUM6BBCNsaT6aNK7criPhAfVrYNwTYw9nLKj14NEtTzm3HwUc4ijLwk9kZGVLdAXxAVHpomfA4Gzxzo4p9",
  "key25": "51YNQ5iWh5WrbfrwcQ8iUGPSx12zG4m9fmBa13LTL2su4mFsV8YsiZpW93Q81ZFsgD3W12NHbdGYtThQyNnwbPak",
  "key26": "4ZuRVj82Lv8vk8Sxz8H9LiDoUrgtgHAqKuPBsEUTzu5vQqhxUGGbTjQpk7iEFH4N61KCWFqW3tDbbNbb8UkUYR3E",
  "key27": "aai3Rr6rijRfcx4TxuYX6P4xzV2gSQT3CAbmiuNhymAkur7TvCpEmiJ7UZ86dJkWahY8RZY64oSTwfZ1Fdao4dP",
  "key28": "g4NBsftpZFn4gaZ89oXNanfvirsanBuP9L8tCEdhS8ka22wktvzksH1Y9XPGXRxDUWTTmiJYDMTesAKV9xEmkWB",
  "key29": "3LBey9F9W2AiKiS2mFyFcNnptkW86jnRRLuR4oQaGvrgfViJqzeiTd3SqxWthcTzDc2jshjRnX2szz538FEymMqA",
  "key30": "4xy7WsqtXArdxqGHuNQpnqJCprritBhmLRDckE269AxwD3e36PQ6KZWrr1QSgfDeWvUN2N7fkFanRqK7LzxXj3tM",
  "key31": "Sb9MumAs34F4UEv5g79zY5eYft4TR1tPCacJdYHzMahbuMWEuraMjwRxJu33CuuRxc9j4b2XB32vP6pPZ6QnzNo",
  "key32": "4UkaPcj5y68f4MFqwS3q5un8cBKKGGk5f1PwzQR7b4C43LGRE6abnM8vcDKKFaFxEqq1stSQydcDZBiHVA4RGsn7",
  "key33": "5vL5aZ7Nux4u5iaAStLWfjP6dKEgj8GbiEZUK9Yyv1KEmo21cYJkMkJJWNCePeEvf3SWsXKpNXRsuWej2uVNZyQe",
  "key34": "5WvufAfyrk6r9mEyLsu4A1Sy8ykDsYtqrC3AA1hTiqyXVkRXPEi52FZzBQEquRY55bDPYjfyGvrqjt8LkowMtFDP",
  "key35": "2FWHGbfw6nWq7Vxi9fZPxCqPkKPQmQZDMa7yBNMT4c8DphQN6HE4A6RZLsvtE7G3zenEfTfVD4Fsw8gJ4rvo3uZE",
  "key36": "5EvCNPGB93TZnyThkyU445ZUwjbQVbvVFpuAPThKhrGWgcVPYXCCRJoxSGoeAxFuajAm4X52nYS6mpAAuDam2AG5",
  "key37": "2RqXCt6mzfU8f1tUyPMbYMTxJ97djNeTQfVS3MZQoFVCP2rnWAJ2qMPG6DFJCWmxV1L8PbNT8MPA7ByJ6EEPBbug",
  "key38": "3NQbiibrvSp61hawW76JbXzHNxNWcT7cv8ZfYNWU7RnoP1AS5JPbwMQHSdbA31JnbGV5Df8ZQf3XMUs6E5Xpjv3E",
  "key39": "4f9wwRENdbbbFGBMT3EgRgbKDyj4ZnLDPkQp7uaH3mi4fAcrw2hZcuHHbGspUxFNBcbQPqH5d8shtHov5wTqUZ5a",
  "key40": "5dovaeKdfM2PPMYx9ydf1uz1CbHmDDy6RgeiqaKuNSKjWMkPAvVMkFj7eGEYLnDDxcqABVwo5nSnyznhojQ7ixPa"
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
