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
    "5oEzdCKnrz43QWQ8DGvLRedMRkrcSpduYzcoJRTm4BN1mQ5jvzXWoLgxbdzyRJUsCRecv8VCuaaLV3B9VmoABcJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X7BzdNRwvComGFPVTDJuo4te6Go6VhnF6UDWQRQfJgb1jS193FiyA23pEb1jeTr2N1nGqtyMbxMLiWPZdRaJXWg",
  "key1": "3vTEKVoR9Xft5GrofUyWLD8TbrstfE5HWvwiKEF2qLuRYDwfKMg1yFw9HXiqojYspfJUDAsLYWEdVES1J2Aa671K",
  "key2": "2AtGjVUUaPLhmUnKFoxQRhViuMrTWJaTDaYKwR1oFzEo8AMkyRdj1b2i42wMeRVSWdRC62sxga6fpq2Q6r6hoKRa",
  "key3": "UDh7oJagbxTB4hGw86gCTmVYUoLSixsyMN3narfr4gw8GqzkEgUp8V47MtbdXLGMiqvzeuDhHPY4QaH3fRLYA3w",
  "key4": "2XxhFPRHyFomBFZ49dYobBmnbYaFsoaUsKtRyVRVZw5tMHGVBb6WuAoTepH8XesegpJKue9YnZUG7KAZPZKS1WXD",
  "key5": "5Y9i3t7mN6hrDbV9d8Prns2NJqWxQncB4u8xvTDGyefgUpSRUEnN51ornuChEQMqaaaHdFsYUiCyJR7a3nLMB2av",
  "key6": "61UbgPSLC6urEbsPmR8Go8yggB64bNDZD5eYhdFmmGSSVstvunnsWcSQ8rgRyXSMDFd8GcX1qsF6kUngpcWL17QK",
  "key7": "28FVYaxqS5RdmdC62iwh2F6qwCCzPrFGeQeZxYKet8KPvpc27GZZA4JyEuVgQcQFG2hBxA1mkpRo3Zm9uPQbxjYM",
  "key8": "2dQPav2Z8cSBaiR1e9B1TTEWQB5dTJrdSAp2CkDZo2o42ZUvsLRR5uMTKQbkAGTEWBvSJd6W8U6JyZTxDSwVnQAy",
  "key9": "2BbWKpYmJUK7hKoJBUTdxVa3ppLXeKvvk4fUjhUfTcnNEEufA4d6VNPK7KxmThqNdowWNb8zMahD7C6yyKe67ZxR",
  "key10": "SDdHEoqHYcZLB119GjJRxyAUKA1hUugwmLzgEMUzLgwtKZ6biVrFVThKnzXQbJAuTnkWjEHsHPpJsL7vmjP5F12",
  "key11": "4MQCvtXExE6L36AJq2E1Qq57eSdsqWNaz41GweLHucYjafwCw85uzp6SKnyazAVGc37FvP4d3Qt6VuEiZLyy5UpU",
  "key12": "4D2PZS84GBMTnMBkPU5x6e6yonNZL2vRaWA3APFWyLow8mHydEgqPi9G35ByzwCSZAWtUq51efSuySd9UCHZZNi8",
  "key13": "MPh3ynr6DbhQxBsVrj5mFoXqAk1Pwx34vLgujaMMBVzEb9sDPCCf9MjH9Vr23EsgwqoAuvxHTNqacRfkYi6FuBr",
  "key14": "3HtYz1kABddTSpW92UET269cu9eQgTBKFr7YwnC4MdsSk9aD2A5EAUWurssjwQhcZdoxHvYofutMmDU2tjZqGF9k",
  "key15": "5smTdSCc4aKPAVrJq8iLV9YqDuwRY67nL88SFYsNgsGgWYj3CMRoChchvzNBKj2FhybUV7s6B26HAAdJiUe4DuAy",
  "key16": "5Qe7jvnUgy6KUkBDnx9ZNAxDHKr7xmXp1yuRTApWRkr89wYrzGD2YXS41jsqB4GxHMCKF2ypVAdAL9nm4NeKFfFj",
  "key17": "5aZW6BRxwcn2KKwjrkT7choiwFLrdvSGsMJRtChHc9nLaQehrsSTg8ujYTdxDDZ6a8AfewCszMc1k57fpeedDW4",
  "key18": "2BQDMr2tERMytnw42xDBuqnKdqVCcLRwGsHfLzQcyd8WLgJsFMtGwRVeiYS82b6PQwyoYJwgBCauwTtU76qDarV5",
  "key19": "3iq73k1ifhNctAMSxovKesqiKoh8UqWTRj3oYLcKG8ySy9vADDdJEQVcVjBxuhKMZdkFn1GroGAQpAQDC5b7jdiy",
  "key20": "5EMt8CYEy4QTHFTzth3NaZMMN2XhrXJEDsZVRpK7UPhQgY48pYYWKhQqvjSBhRfeZmLaVRSf78ExXkDs5Qmshk65",
  "key21": "fHLZ7d5GUTUPX12ipNDonv4ZhLn1nh5zqz63Jw3J4x1rUNUGVja5gFgod6ueSzKsXnkD6hionQccVki28Y8xM1r",
  "key22": "2LF91eMHBLn8joTxLDmxuT6n75HcY1RHp2tgywNHPLwDbQnA8pVmwr9F2t5tGwgGcRu1x1iWCNiaSfU3zQYKSBeM",
  "key23": "3cEcrVFhehCn1ySonM99mNmNaAzvWSsKdPe4nVACRBRNTyCuMPsoSRr1BjrkuG3tEvXy5NB1Pogpm1zYv75KmWEE",
  "key24": "3bTkcv7t57MeWZaE58Fn7NdBwXSRami4QSBqChYciMfdyiP86eet5d9yKaJE7mCN9569HiRxqnTUep3VydXqgGLx",
  "key25": "3qrjkQKYsHD6kX9GtVp34s9cBcDbpr1AujTti3yau7yPoyYnxDsSEw6PcHGucGCTpXX1Gm2vFfDN72wb6U4eHcT7",
  "key26": "2VMhYkLeMrxkgdrWM3NLwndUfGjo3pduGdz7xpZK4dhaZiwCWvLrLvcngJZgd1LZCDCBV9nDY92b9nhKxTWqsgPQ",
  "key27": "4HgSNLuTRuzJRnjAzycUPWEyNw7S6rtFRZab5WiMBeDqxHxmUWYzQWbnYpV5sVQj1t59AxgdzexrqCx3HaaGgzNB",
  "key28": "3ua8JtqtML8cdCMSEGW9fNQ8SBq2LzkWGjMtz49Z3qALXFjoPFTLiRjPWNCi2gY5sJRsSpM63j6NrVnCAGXWgmff",
  "key29": "2BLpJ4ZERSVaK6FSyvoDeLCNLmMhu6kgdXZvy6Kb5YcC5bXzLyxkHzb3ByHmAL8BR2tKzyTpwkzQ3XHDHo13qVgE",
  "key30": "45GqJXRUuLdkXr931gyYxRfvZKavBhAPcZk5KNWgqDbQ3SjA7bt7JUFtu7sVR2RNLDaNwHUn9tq8E9HS4VpmxJHJ",
  "key31": "3CwaEkoqHnyaYWQyS1pC5xSquTCMrWXGh9pS9PuBvk9P5E77ZY6Z2MfuHEi74iCG9L3rW1WjfUNboqZDqQkrFRyt",
  "key32": "3ULJisRfKujcX9gjdL7htgHByWep953Ga9p7yKtAxNps9QJ4qTaoAGs4WNjzABCKm4vU6GG9S53avRSF7jnXg3PL",
  "key33": "5ViLCkipZTUatjaKmZajrh2vaoy6ihJVzJFMDWBP5EvLoyjT64U6N3CZQJNbRFCJvE8CufRjjxij44m3cWCXNvne",
  "key34": "621anU39oJqeqUWzx2CmqNaavNawYdvPmnD5epAah9ANapXiHQsCYVm5RLCxUL8rRVnA41gtgaLuSgrmDQqi6g6q",
  "key35": "5ph3RTHjnMwHLaAv4QsfjfxFJSD4SnsTLhw3wj5v4G55qg9xaGxRiK5x4hLvgDaf9Y7afZSkvyjHhhsC6TdSJ2dc",
  "key36": "3Kk3i21oxmKHMhsAdvhXhB2qnbUy9zzLUMH6yfKWq2brN1A86AkPeUZtibxEsyCWdxKSJy7DZ9MpkuSKhebtM1LW",
  "key37": "4reJagxc3NwV4qn7c5jSEazrfLsz9A497VymigF9y4grjAFauUDELvwtvLeUhPpsPqEWhmL2LYJq78cCAnZBNj7W",
  "key38": "QmZyoMihnKzYcQUQCPovPZdXJwyLP7Hp8wcZk8mRGiz46VVPn55oeEAVRJ4d3fMekLLco85ARRwBC7qNRWhELzk",
  "key39": "PRarCEAkcfjxJcLyoCJgAHE5yrN1AJziX8tWUh8dQCr7uayue8hmMYqctmn5xvFkFMs9nhtwPh9bMDiYYk6Kiqo",
  "key40": "2dFtpA28KvFTV1WfbB9NQyWaykqSKd5mtJDVZGVZsSRWmpWfE2E4QK3Gp2tgvJ6yKnBHsmSBDCiHCEibPAXQ6sW2",
  "key41": "3LPgc9ZuGQvA14r8hVqz5M2nedidHY7RzBu9YbTghkTTJDsu4FVNkXpoMY2jur21v7DzqKUcBpZxocH2kuoFcNQm",
  "key42": "3nPNCyQnFWLQBpunLvXhkiDQs2YxAErfWJYk2c5xGVprZ2wAmrLCgtHxiXK9rYsjX9Jv5nC7cRr2zzjHii2xs2Q5",
  "key43": "21jPQpUJURSBqo4LDMEeCZ6xddYvemuL6VeLHTHfWZ5fThkQnc5WrT7dZYzDNPQEmcMaQ55NG7VYVcGQ5eF5G6QP",
  "key44": "twq7QUARHpCqqNkwz5EqysGLxSphjcE2Sus51RJ6yVi6xaspUPwzFNsjLCBVKczqLDLyUzKoLnRB7sNn74Syn9p",
  "key45": "CLNqjZZ2o8L3nBNs8gg9Dj1CWdpz2QsjzfY1hi9WhLV7hRTwU1rxWknZw4SSiZEL8YiXTxERgiwP5jGbRNYV9ZC"
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
