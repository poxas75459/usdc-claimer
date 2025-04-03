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
    "3cuXbFNdwdkuN2xFZFqsNLrwgNWub6UxzP6713rt4HzhW9bYUUi7SBJxvXNnoRT8e95fTUPWbEFYaSwLSeyYhv3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N9Jf2E7GeL65Aivv1EtRw7SqviQAie3fDJUs5ig4t2jrkXuw4z745NvMBwmbAendewiFf2mHQBRXp8SonD2rAmb",
  "key1": "33y2caTT1WBB7JMfeigi4n4eNodnjYJK46N95JNhTumfjrccVyCWNEE9HvpBS2nzsGEKZNwS1KpK8XheGKcwxQeF",
  "key2": "62bHxFqe5muKfAJXJdhFeTCv6PaiM5ivXUhdK5hVXqxo2dHy4WAaT7vQozvEcsnxNpPWXM8W1G2CqFPYsvW1hzm3",
  "key3": "uenWA6Yhj5BgpA6ZFkfPnQjHWzn2R9ssFSHhoQgMfjFCvqferaK19924pakqud3uLo2Fvi5tPvuKHkQxAoRQyVC",
  "key4": "5b1GHQhzn8ncN1xsCsUQsz951YHPZXe18d5iJtyA4CLPT5WAyRtW5PM1Am13eH5e9ZT6k5FZnYcu5rx5zvpVsLuA",
  "key5": "3e2mscUSAeE7Xgs5zLufcwgkBwdPdP2iX8531QuLgmNc1Wnf2sadPkkxHgEX8wLA7wi3TCRcANjhyNKwms4iZ6cv",
  "key6": "3g55bbbayLR2Y6ygqbXNvKMVzFb3GM34wtSw6Wn8W5pUA1j1x6nzzxCYoKJAho9UznJBpchPgm6PSCy85hPYFNZh",
  "key7": "4dz6Ha2BmhHrLzhz7prphbRucYbXH5SP6gjhHywDrJt2QChSoGML9tH2ieRctzhpDAdU2idEA4i53kXj3TdrFYoy",
  "key8": "4KcrsiJgghWtL96qcYVqtwGxjvYcuULHWxiWReJqWEyRnUDKWVyqVcYxKAfB6PrNMUoZpbBeQ6SdBhUqYJ1s5QvR",
  "key9": "4Q6HHpUrJ1c43Qhxr25qp4esu4pJbvKomvsr3UCvUThGo9WFTJcyvMtK1ubHnzHxAVQkAjtK8FsRVJTnXFSUhyiF",
  "key10": "2hXbk1V6KvUeSWHjyweNPpAornkqyorUKEsBgWHfrFDyouFWEa6t4JW1R95dRpytzGZjw5t73vEUK4enDehjScYd",
  "key11": "4m5WEUHJ1WhVYQx2reahiYcvrgCniyN2yqbLyrjuiTYFSrjFaEhpE2uE2YnmmtYFkHmE9CE1hha2ZUqVqi4KnAzw",
  "key12": "4SQ2Gp5j5N1mtRsbcAJTEUWNYmQgmyHuw74Y9MtTRvWFKgBPz2uigkZ91KaVx4thC9BUTJdtSrHyoyp9P855hbU8",
  "key13": "4VaYDgGm7AGFS7KqaDjHDwhyaNG9sf57xHBgeDzAc6MPG7ri4MiQqceGpNoLfZ9JstxcSUTzciJae91Q4S7wxQxj",
  "key14": "3iZX3A3zrij4Be947QXuCSTTRi9k55TThGvLUE89VNzNxmac3phJRRtvSPUfq1YMoyMaaAC42Un5TGv6KdhnPsDp",
  "key15": "4jjMrdzYzrCppUoQxz2YBxh9QuTaTjfi6RseB5ywtDpZ5L2oM8Z7obyyxkkqGnsXh8AHshzSyL39zbztHr5w4jmG",
  "key16": "4KYT71fESWXn2aMX9oimzMdUPWqwtRkdu1jwWwsHhL63qcZGNbjAizYYCGWc76MW1Kao7QrTh7mmKo17v6LtRizd",
  "key17": "4YLf4M4h6fLJhrMbsNB9Hr37gQLPdo1dq63CRpXrAyCUANDvtpZZosxSCpYMYT3icx4U77N17HzBjeuFHfmCW1uA",
  "key18": "5bPmYfNTq4shBcMvrsDuo478owgECKp1tGmeyKAmLk6MvsMc9MnVHk6ca13HiFrcB3cuKEXdNzZcuAceRSB4v2SR",
  "key19": "yM4iLDqhGHnFetFxyQVBR5MmKy5YZRTWA8PoqHMm4SJBgZTpP9vZBvM68WDJtauQU7wFwNiNQW6kfnZJ987RWDL",
  "key20": "2XNLyBAtYHxsqUhsSAHUznwJqZGVjHAgSphNQFGbxEfa6ZY4fMPBsmoFZ2GGHxeWrQQUxGTX5UWU3VDyj3RPRgES",
  "key21": "qnCtfQEyWjLafzQJRXc8L45pD5yrgHygsyqiZ4emykoc339obeTabvkyHAAsQSXhB7GZxeN5bAX7pj2cxkdxja6",
  "key22": "5qR4XW6fDuviJdp1rGZAUGhY5K47Z4bfL1PvqU52dVhP5xYZzKsjPVdhh5sa3nX9JiCbaMUVq2cdbHZ1zKfWB73Q",
  "key23": "25qAmxqCDPTpPi9mNZU5aJ3rak5X5MLgKhvJmrBp7vGxDgE6SudycbcP93tnykn5DQY1i8xjJmgLU6EwhidseGGt",
  "key24": "3AtFLmtMnHyJKZapFWsSyquukDsGYS2SqfNvj95TGwkXVDk3mUooKdPWGqrxBnPZj7Wwu776wPr3qmEvtNawETa2",
  "key25": "2H8KjvStzEf69U4mStt4qumVhz2SmeGWD37xy5VZ1tAWQu7T4UqBghVdGoNqJyoepF84oB8g7AxwPph2rSCd3DWX",
  "key26": "51cZeuwdyfHBoNu61qFFJFCL6rnzEgjD6s5m7NSxNX5AAm9HpqvzwCQ4418GRR3uarz8VYytJH2o3FhyigbUATVB",
  "key27": "emECuhvc5MrDih7Brg8Zz9QRzwQLAc7Mq3EZqNt6xLduzv7SG7FLn7ujPgx9PyqR4xGQabUPyJwPted5XfAHy8Z",
  "key28": "5516YUdYEW8rZ1GXXvxrQWQpTMjQF3wYH4rSsT6g11mEUTqdogLpGoW3Hxc7Ns34CF5UXBhMXHsRbDNVZS74kge3",
  "key29": "5Wmxn5TewzCCEEGiNkvTY4haPEKstepgX7quuXzni8yFWdNNBqw9xr2XhWNCHmm4LR74mXVLyN3TJ7hraF6bevGg",
  "key30": "5ktSidio5Z9MHDhDCgrLhz1bJ6SpfgYFmct1sPcP3PoYvx6zfBZBAsdiq3gX5DHT5tW4k961S9SFjqYvhjC4PYHU",
  "key31": "5g2b4WBK8S7HAS5EeAoavVghXcC4FJtcmx9pq9HM4FSpuN3kKVAVoHpSni4psgKxA62iqBAPG2FjB111M6C57hgk",
  "key32": "3QQ3hsfouZH7Vvar1QGaE5L9Qc7a7SDqFftUwNb7nd1UFK55CwLUdwZvc4v9gDd8P4iTBS75U4anQ5iZTC95GXnC",
  "key33": "5yHGcocR42qXTAyaMGGioYLrXCfYFboUuj3r4thtXCnQ72SSaCwHHDE9GHRyWRX5JBttEA4tDf1TDmBpX8nJEWjW",
  "key34": "5vtAeZmvAsDV6mjMuaddC77b12BHSUtMBxzcQaCrcsWAMWXqTEh4TD9jXKU5FLrUsXdf3osgkGHG2ZsvDjaYPHaC",
  "key35": "3dymCUFXRSPjjFnioMTAtsQXpLugbitu9D5v3TutmykkS4y2xdQ5vzYfuzfR53Et1KfUw1R9eR7tRKfx94uQPDxz"
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
