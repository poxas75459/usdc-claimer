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
    "jvZn7485rqjd3J7MKFbkp9aUGKrQXUZ4cJvSZteejDF41jJS8ZNbKivAgThH8JAYmwU3RTvFCfHmHkfmibDcvVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REuKwmHimcN9e28xDJxyetaqbqmkujQQz67Dm28BfmdWDsLvthzcDrExxi5AyxmMoiUGDjxWKESiTsJ38icd6L7",
  "key1": "4mnU9r4LLJAoEjPUptvHB62KmfwnVgER9VXewpj6ktppJxCS8QY83uoLVLyXGXCbaFS8RiUKb49xLdCGTVDqyNR7",
  "key2": "yhTurNQsL47XV4mEkEpcH6cMdvHAAmC24kck6RZjAHqV4HeMWmgiGP28h7TRr2yB66yZfN8kds8WdQ5mKBsW8aU",
  "key3": "58E4BMEWaJhd52qHAYzU979p1y1Qs7dhpKZVzXCUDj7NdHgbKWsgy6ook5i2JMWrXFxKbnCeuTWmBtAvT5y4yNPJ",
  "key4": "3Bd683vHrG3tcShmXrLpeVWEkUbTczdHMUB3VkZTwogD29Vwy5uzN3dDq15Je7hhfpkHVdatDSBuitvT3gLrLSHn",
  "key5": "3F1T1CTaw6JVUn6pjr9KXPo9jXkiEFaVxCCVUjsWso4gPJrBpZkjBbPedcR8ieTDeMP3T3GZpKNYusk4KjCLBh9x",
  "key6": "2Cji79c3k9BY8ceSNiNcouxnyMEWAYMLpheKubtgvHjgREqPKtuRTn9TLdiKC4QSnwCnoAuH2WjnvjaJTRte8Xsy",
  "key7": "5E42u8MjN6xYDQ5gYLVNQnHkd7bw27WeqRMx764moRYZaiyyeBDsnXbC9cgQ8ckRrdi6BpE2s96ZcfzQai57bqx",
  "key8": "4wqLr4F95S2GbAKF4myXBH21oVeEYCYLw2egBoDXDVdwykFQ2Mcou11DyQ5Zs5n2Jkxw6igaz1SHrgFF9SBB6mme",
  "key9": "125z7YbD7Kax6vi3KfgCq8oB1kbX8JAd6R4w4xDVtiFzh2bq4Kk4Hv86mcoxdQ6r6vDfz1ZKhyW6n6DyRNV4CE2Q",
  "key10": "2YNtxLc6pgbcNqrw86iRtfSVyLq5gVHEb1zzN5GwUpt6c4eEoWYnYg5j7ZWrDJhXtkBddL6B2ryFLQZGeTrMrxRN",
  "key11": "4EqNH9Xg5fS7nugqchHfFY6R4Md8UDNBGi6JokaaxRVmMSVPYmKppXJNnszmnk9jqZXi7syBw2B4U7dewZrT57Vo",
  "key12": "4NRSxPqajXmm48ru7VoqxMoBEfxA9NFCzcj8UVbK6Tpf1Vu5ujba4xfqEqcjeeCk9NNPzyj9gMcxB6BGZ6PwM2Ds",
  "key13": "ob7ekR9RifimcYYPuSLcCERduqWkTdmGcHaP7e4ZcKJuFwkAnSqpGcCr2pXpGW12hNPj67kAAiyfpBaeK6dRHaT",
  "key14": "5xzXXbp2jueArwGk9FJQNDrWffqR3tBjV4pNUP1FTXuQAH6xJh6Y6ei2YSnooExBhmctejEgzNJzW2cAdqsWZJbS",
  "key15": "TPBswsXpft8FsEFcuz1pdhmCqGLE5iBzG1HEBVr6tKjNThchwziDK6rRSdi3CHTY2wxzxHYBLQcJVd6MCWCpYAT",
  "key16": "2Aq1AuMkfzeUsrDGHDYZAZ1y9qR7WzfjEEitZMRV2SV8uN7Ry9ebWyRZa7eqMR3aDN6p7dWSwiHk4XMbJVDbCQKc",
  "key17": "4aiMybybMdvn56bHZb91fnthyhmBLVyfNBkDtaqFroMp8kgMKKpFGaEuh5xfir4u7P2vKS9zLFyGGaKo43YNwwbL",
  "key18": "4zSdSH39X4b49fF2sPD5bdvu8GP5rfMscEB1z8iixUCBbQ2HWFqSLj3KQW21DHP8SxLf5mKEo9RHtzBChqFwYiDG",
  "key19": "3PHEdmu9qz4Y3uY95YsdPmz3sk3Z5qjedNnvLzcfU8TM68DyHAEnuGFmtdvq7nmvWfXqZEEwZaYU49Bf4PjTip1q",
  "key20": "2J5yzMgTZXiMXhC8gzFyFbMze1rCDCzyyqF6vUssg8UYgxj2HEhrmo8ahPs1a4UnJc2x6qcLjCfwTFmaLJMfa2Fi",
  "key21": "2q9FAaGWZW9mVV9eGb6zyciWrXUSUHZ5GGXZ2soh9F2sa3dmEGBmkgAkWJdjTw7tmdnqxLzpHe9Q6H1SzXMEpLa7",
  "key22": "23bEnnfwCiJhifWMufUMewZBNq1AWdMifKJepDhYfd87AyDXiZM2EdTizod9wN8yeTAjwLq3mMjT3zteEEZzW7qR",
  "key23": "2G3fYThB9BsB8DxQEPNYtc84EMieF6NfrZiSLYrD7Ub7TT3tpmWtahnZDrELoFkhRA4y7Um9hmtSSJRHfFe7xye2",
  "key24": "5Vvs37nuKB9psB7JuJbY8hSzJz1TjSQZ6VT2VhfuC1Kf97ZVg6iQnNonobi1vieYijPf1GovZgEnft5utSjpjz1r",
  "key25": "5jo3c3wkyEWzusCsSX6jvh6G3xDXBP4bkEeXYuFkEQJp1BrBuaPq34YX16UkEsDJvPfCYccm7Y1XLZ4jJfMUbLwT",
  "key26": "5ovv5ZTg4akifdCxMnCgRGr1VSpsfAxydFXEZYZo5zJ4V76MrdEnMcgqpjtrnZvGgvnDo1y9qRHgn3cjMHoaxos9",
  "key27": "ZA2DgkuCFtAJkyCg6bp6YnySghe8TkZYK2JGaMFWAAtEhts5ZVfzceRaKoh4mYcYYiJY72j6FqpD8LiYBvrPYog",
  "key28": "65azd9fvaL2ZyzMYCjSt6L589DoEVTf5i9kKf1CowpibKF38j6AGaxUUmbMKpStfeVwZDRGHVp6ZC9sRk1LoLX2T",
  "key29": "3w7riL3Wdy5mKcqyXRxDaFoTP818qYZN5kTHej96n77jSsMSJYf3Z7rX3ad72XNqEQRgLKPAzvhQ3MgeoELhnKBX",
  "key30": "3gPm87tmXL82dcAsAuY2bkReDrGDGJgPteuTHf35HaZ6hmsLvxA49nroGi8hTLjWz2m7cJmrURfQ1n4VW5zeppaA",
  "key31": "2jvYYzQLu1JAnkRCs4Zex8Hnx9dWpcADUTDEoqU265xEDFUnKqckxaJt1Pd9qzixYBHZuoPm4KRgbTu8tkbDsoRr",
  "key32": "3roaz7PteCGQ1RwXagkwnZbh8T1CmDTN3BRk5UPjLZ8TTTSMML54LvZmywcyP9eMSadva7DCzLNoZQG6pvcwBAX7",
  "key33": "64n41iRqqiMjMP9SLPzRrq35zRLDU5nNL6tnRU9mAo8wAybyncdPoa51cP1pNMiX2MXDS5hFgS353JcVh5VZXJ6h",
  "key34": "41QUcDMEs5Cyjr9EjQHg8YE8vQh3eCNYM7isxQK8s9J6iVrB3bKvnCMaSagbaMmmsvequpVin25LiurHgwVktX8P",
  "key35": "85UFdd9NFG3UFTEysoW4V5AJdNRZgWaandSdKvpTJfDotSKf4zKbipToUkidC3J4UziY9TabsM2FTupUnyxazfa",
  "key36": "2dxSrsaaBxFa3tbraobXXTL2H4Nu9LPrWYyQ88bTQ5J3B4EPcomyp63uVvC3dcvhXor4pu4ZVxuXjT1KEuwaMyGZ",
  "key37": "2PmQ7e5WmUtYoREP38wQBnsRcv7kb2vLJcBKiy8JmHn9GVGLpnL9RVPQXDBx9Trsc8RoKRCM3ybMY1Yv2cxf5jZL",
  "key38": "3Ys7ZoPor4tE4hSRWVTCzHUKc7CjP2JgZR4bVbHf7e6wmGLHoW5dUoQah93UFCF9h2yhCyXRsz2LAnbqLvDmZaXK",
  "key39": "3s6i74RT1HxNLXwyFURDvP22n7yoNcvvHLf165qQ1cYYHXSQyYMHcRnPKgLqLpdzNmwWqbxXvHi6Yrvb2sovhQnT",
  "key40": "4ADRTwiLNNTc67Pw1EQrshXWCZ9uCzGznBJsZ58ddjBtUifJHCVUz22LaaeqMQZcytxC827M59Q65tUHp7HpkwCj",
  "key41": "4juH42tLTuwUbkkkTDnm7efm5SwJo1oEXgpuqHtUYKmcf38jsjS9MKkzXuxSjwBbncNw3iWoqdvMMwpjyjgKHS5a",
  "key42": "5SE2F2s3DqejwV6WRuXU6eAN2d26M8wV2rxNtyiPF5gJqXkm8nv1yumczygXb5zEbUaDoT5QGDZNJs4fqKapm2xj",
  "key43": "5CV5Rq2oBqVcECqB43Yu7whbZeuUq5aNs9eACne4m7ZfXcuy4em1QwChjX6jcAgjE51ZzS9kEGRwB3cKwjZ6JNAj"
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
