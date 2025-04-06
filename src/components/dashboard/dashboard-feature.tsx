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
    "2DiGX8ddqPtpG5DLDX4cMaHYj1T68MVJh5BoZ4FAETAkHgGmMAwpA1bhEw8dwsduhFRQTmHRtLfVbRz957xgJecE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKgcbnUGJPnRyRrtg9tWwiP1ieJ2cebLhoSfa7KdH6FEzmpyZjWBFdAM7BbC3w99rTFD66Fbk2Z6vwfciW5L3cV",
  "key1": "5gfcnZ6Q1pNujEyJJp3ryFtixnr6dWeyf8CMeSa3tDcCNE9b8tSox4j9SVrfX1ZY5zjjxjoifShH1mmZFgfXJVh4",
  "key2": "3i1mS3SXTFdDuCLEj5aWEeTWj6Qz1g9DoBQb91R8RJ7YauNeMxALDPcZ3MSyXhyzAoMpXx1PvzHBFi3NpvwwXDcK",
  "key3": "3fXicPNeiqydQY2k1h2eRTRBfd78ZFdySWEKhBjpiJxLUZ1maZbGFTy32aPepFw2zfXx1vyvVYTPNmVxvxKDwqC2",
  "key4": "4NZukfbZYsq6qAyLjJQeUs939aVRhbWVmiLdhh47QW14Bszr691agJFzyo22evPjFRxkzq3D1ZKwJa9A84AjeubF",
  "key5": "5P7ruH3GBABaeCJvS9gTiJ1ZhTJUGdx12A6p1hHx6abPiyEdiZnW4XD1xRVTH3d1fHGwMU8HMeb2ge2LfZQg3wMr",
  "key6": "5C8K89UfniQWmGf1BT7uqEfkTkaBKu1PoA1rTJnkzooriRoHKzHHjdueMoNsgupgmzt2PZYSADuiFcfyDQZS9nu",
  "key7": "63cWvxcAx9Aqxb6HnWAztP5R4EJnKTrnxiqiVWdzCkq2FXkukcS65B9KqxyEAbjLg16VoJeAfqGQnm3QRSTjsnbQ",
  "key8": "3AKx2kiEj9LuFGD6j4FzbfLk7CvffMwUpHsXT94WwSxqD8BvkdSKg3d8uUvXMABb7RvdDVs3sXushhumfQnDCr3V",
  "key9": "2ukRRiapwFUKCeYoYaozNhCz8G9SMpksGYkcsj417iSMKTtkd6hVxoNHwmd6boF9sazXuKcNgQZsjoBT1FQrd3kM",
  "key10": "5jSxNTZVNfkPSji4bXTULHKDtudEpM7ubLZw8jDcxnmojDn5eEXAArUh1TgjGr4HsoYYECvtK6zFY6mrxbitqNPd",
  "key11": "5tAW38Z3FQzvRcazt4awWNUnLwEYjjzo5c5CiTdFGiqpvxwCSnF4RAaR2QoG4Ab7wsYXEwWuBa3toes2Uss9HmbY",
  "key12": "XZ1ZexhQ96WGbTaCSDDURx24AwPd1X5ibTUXRf5LAiPKxxrcD6uJdtYY6t35sKjj3UFqYDUqkx2C2JMndKKWrxD",
  "key13": "21wZpyWfJBLtp3iyALn2SEg6QwT6gDeANHRGTccZWZtvcvCpAN1jmojNHJXCPGnH9UJ6c6hmk3HKCEfctL7neE6E",
  "key14": "s6kQAuNtDeXmXYALtV6TQFSe4F6EFRbeBHnY7AaSLPd6UHGyqYcyn2qT51t2hbCD5GEbSkVjYDwaJiumVgTuY8m",
  "key15": "c7Rguq2DyqguC4btbDsfrDgmX6WFHKLnXbfieiy4UV3M1RF5agCTb1kugszp5Xoo8A6Ky2wg8Ss8Ahi8i3WLtta",
  "key16": "2vbUiJXjdBNQrTXNRH5VR1sSvA38rsioeafNXL4Jdof7NsMWUwRPA41vGWxMZrBoNMrgi8pwTaJBU8y8fFEmEHpr",
  "key17": "5KMoXLCvEbLU7MYQiTrVrntX81GURpN9jEAAsY8qC1UjBauCxw5XyzRcFxWEgnLgWogeV5Ck4voMWNWgjUGoHZ7D",
  "key18": "5gEuuX3k162KQFwfisJjM9KV4qGzUeU9vRrt7L6G9z5JZ6VshLdDmSYUsEDhmWNpJ5Rb1E7KqX4rFFvdDbmvqXb3",
  "key19": "4Q4fKQE3T6yPVQCGzoNj51Y5YyAUDYaLqWmR71txRtXUeGFashobAMt7r1efKhWdhECm9yFixgM4ZTcr3GLtv6v2",
  "key20": "5XeZ4FNksWEWNWRpcAV3PMjjzpUQi8cBu1oimbQxmzWnTBd4aurcMMUkzfhcrNrvtSNQLorjRKuJzXT5iFHtwuSM",
  "key21": "4UmEvK2p6afkz4PHTe5AMYMRZDDyjUFPKK9wr29kwr7p3Acigk794XXQp354m1Y9a1yPQH79SronXGfJNybsFMJo",
  "key22": "2xYuhhatsL4NQXseLEjRU9dqqhdfcdzu2TKQs1R76HbLcqdhL81xgjqojWrxpEvGLXfrayEnnwfaSvsFAjGrD7sq",
  "key23": "3y1kZXV13xsBh529YhcEyLkVY7RiD6ZQSzUFHpz7BHj7vYwShC43Z4VvfXz6NRSzC1FWPQ4Q76RU7VfvuowfgkP",
  "key24": "3KRrokbTzV5pey8XjwRhQbiiAnxxNXawU5w7Lpkh18Dof7PWsfXK7sHpmkh8HMQj4sdS41u48oZp5za8sdmb6kYN",
  "key25": "51wQ6puVqVU99XP762MEk6mFsCzu4miH3obhdHiedNGpiJwg65sEn4T9HB64gyXrCee8hD8Qqod8SgG7kzgwz1ec",
  "key26": "2995NGEdvvyhBsEMSeRBzEqQWB8iHBJjMJW9XmWHEgt8tWpTkCxKwWs449y4muoXJCLFsxYjKmaYuPn3zUgEX6bt",
  "key27": "DFfzNoeshnknuxdiFDuHjseQT1cM2ZHoD8ugjuAmfMqtaTSHwENhwzta9ucq5h7s6E55HYA8Riha1qDpMNxKyam",
  "key28": "3d75UXzztscRG24NAhhJwurNS11JZfNRyknAupCWz1tBxJWnhJupeTykgTwnme3gUvuuiaEdPcYz27BmWDPYLNEP",
  "key29": "3wxbjavxSJLk3hvKZ1QjGDm3nQNougMsRWnh7u9VsaAb2urhyiyAeMZS4vCapYKdG9jYeSa4FC2nzSc52ki2j8ba",
  "key30": "2ewJnKcL4gJz9RnivxyT9yjTQYb2zjSU9SePxPg8vNbNQ9GsigUjVVe1j8AoukKjYTt6gJmGNnzh9RCukUXERSjL",
  "key31": "5omkABuyu45bz9AsumkER3R13GkQjtPCrQUxYSWaotLbVdjMVQLNZ1JoMG9i8zSF1pkUmejziPNKEvGwDQdC8dsR",
  "key32": "31ExdmqWJV4AMcDmygZR1gnhxF8tB87vPBdLNbe9M5DkLjpVyiEqtaHK7qBgv67tD8QBK7iBjEaggw1cNg9pCQUT",
  "key33": "2EyuLsRjRLKQ9CwxBDudrBx7pHCVtErgVUMZ5Zo75NNYxRzHdRJzaVFSFhdVzZ3KCkmGNxFLxpEH7T6HWJSjxMMX",
  "key34": "3ToSsN3kKwQsVM1Uh595WVMAfhPqBW2L7HK43BeSsKfxLFsSjiwfKrnBFNx4t3AgLC8qFrDoW7TcHCVsMkyw65MM",
  "key35": "4uzzwdCoJazCHMgkCJ8D98cUaSm1FaPD6TGeQGev1JnjGPgsf5DUiU8bdJMnEmkbRu4zm8R371RxTaNUgCLZsPVS",
  "key36": "4Uo1NeYxa2YYgeTn3L3QH6A3Ttw38LhFtQa1krmK64amLA2EWXDzsn3qDWDqZaUarzPGm9kpCE5EDH8uwG6SF7xT",
  "key37": "4UqKsYJ1nBBaSE36xxPofVuS3j8vjYypbPC6j2r8QqxYK99NaV2rfg9MwVatjS861QhPPmUph1LEsBMWiFqoxMs6",
  "key38": "5HWsGCXmToVz5F4vg2wLJ6gbxXAcZiBASxEFstVmTa9iWry3kYb7uvgn7hBTxTm12JqLjB9M3XNttTsgwULXgZPf"
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
