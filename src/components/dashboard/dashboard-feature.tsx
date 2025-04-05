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
    "W4bJC2J99hADTRWoy6R1bKvUhwmBGUmVtV8yCkxeeCG4mBojFEVUNsm3P4pH9jgQWehxfJJpaYzuJ3mddfepB95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rb7xXwVCJLSiuDz1wR9j36rgLkNZfjEx1UgRdcdAuof6wE2qvKZqygUZ7fr2w7FvwkXZpmH5c7mVQ5QWDbepUvq",
  "key1": "28RXmKRZ8DLdpxDxBLrTTj5fyUjRdNwhhjHQhVCfvuWRnSmSgAGBhKcs3YJqCpg22pbWfnp8vUMCfScEoLApSN6h",
  "key2": "5Gs6TZPHczxehbLdGv2NeTQRjGZn1ogadswZFZA7t3AUuno4as7SfC9bChum1o88QnbS7JP1dQEChofdBiz1fbpj",
  "key3": "2kVBa6BK78SD9W7sZhSzsANrDRg4FrShhyjHnrZBo7omTuZE9CYgZbrwNBKC2RxcQbUCdvZ7iUeiLE1gc7eWXYcB",
  "key4": "4jpqrWvA5kVCrEsK89rsDajtesyCSMrCq23Nd42pvZxMzJxUWYgrToYVrReNz6QFhHGKqP5QkGyVmZfL6fkFroDQ",
  "key5": "2WMk6p7T4FWgaqhVsR6zCmxNzLufquNVqpTk7Dkjbczk3S2FuTBkN28W7Hraqot6hL2tAoM3fFi2yavwiafPAJ5G",
  "key6": "r1pgeoPTxLvkX6sYdP8aoaXJX5vKAyM2VucuM7F7LJs2JrRSCc9qSdFpzGiiMcmMbWRdMVM2yT9d59EkmWJzEca",
  "key7": "2mtb7Lqi4rWJ1xpDkP88BSErqssH64vY5wzhQTyoYvrQZTaAWbVEzZkBAsarrFTuwXR9xoErnQfMTEZCNLVbxTRD",
  "key8": "Ke7uAC9ibRypukXLGaexV41hYKnRd4sThhYoVP7HQQ8KSneV9A3cPnUUq5R4TjxuosyhnNobDMLYnErP8H7CqHQ",
  "key9": "4GaL9G51nZhmz1iZvTqE4hT1fgx54XxwyTbVFrSYjByGxTZM18WxEDqbMJtLtW7nBcoTaArEgufzWceZffM9Rc97",
  "key10": "WErUPbdyNigVv14RwPgywhQfFA1qfUKfC9h9LqEJQoSxsA1BMgiGXD3DvPxT2xcj6sMoisbYXWxzMunYZyZuc7r",
  "key11": "5MxqcJYp1vHHiQq6B8D58zKBUEJEkFQki1GK9gkkHA87eX1LePpfq5Hupg6zLq9Mo2bzFMkfVqBGLvJwPxj4EbpS",
  "key12": "4jKjtgdGrxZwQsJp4fwKjpKXYet1aEowzo8YD9Wm2GojeCP4x6ZXwKaphsEMQxbBPzV5UB6vuMaNFmWWPQbUWUfR",
  "key13": "Dq8vprxUqJaTUSpebx3NmjQzWz4gjudprFQ1tczsLtwG3udqSQQPk7qewUrbvwT2hEJnUdCmnhe7Ye4pSHX5XSE",
  "key14": "4HFB7D58A971vP5gKfUXoYATaZsnyEkDX7QJkiFoSx8XHG35qN2VZEWuCMWdThBpbiurDjkG5XpAFj5jTLnPjemX",
  "key15": "62adu76yLHrgpYB9vRqZKuJBqGoJUaifosS54ozdyk6s5QwyoYMbdn3MqPj7uEqQAqHZmdaaUX16qjAPtFm5nGqP",
  "key16": "5w2qAUPDPfGTseyQc9NrMKUhWFUVQCXyyH6YVnXpXaViHmSwntaEdT75877RoyaVV4DC8rXjGLeEqGENbZyBe7Rg",
  "key17": "PgNnpjY7LPrCg7GRxZw76AASKuUN77d25C4TAmjNX8JzBdoPaTgz5bag9YgYJR3XgAgDbFJChqrB7rC1FcMYNAK",
  "key18": "4gA3dVvFTWMKCcvzDmd4mZncm4sVWitMjMhcpjjRTnTynAuqkqYD9pNCyR5ph5Qi449NJPwpB1JNn7kGXhhySTA7",
  "key19": "5ziZpVuB9qSW72eudGgJnpX7gtSyAE1GwT91jDkT6bg4yLzWsukQN5f3RpypV8jKWAqgMy7kjkHHQLJdG8nwL8ng",
  "key20": "2SwmmMJveHagF57rDaZAJmq8qz6yDAsUkYEzjhRT9Y6MJ1ZaiqSDZJHfXHU15GU9ZcfVNFkU2jgqxJ56w8MGpSAS",
  "key21": "yqrfkZB3EDSVVvaTZxZcH1unberHZ6zyYM1sjtJRhqTjJZsUJJhHG6LLsFt9ZnhJMxuaCPJvANRvud82ySQVP99",
  "key22": "4vzExuDr4VtrtfhFeF35ML22Z3eccnC4wjwt5vtUYKWvnQCqfsEBRbcCyFt7nPdyk5G8BPMsurHfitDCs2oFoYqG",
  "key23": "5QkQrgefAmCzS24udeCFXSyPf5v3FoB19piC9FsNKqGw7WvyNXSrNHmSVW1tb4UJnsmdtdrekTha4VEvjnpDDV2c",
  "key24": "5oPA6CJgSM1W1gCG6xeBVRYQrLtpNTWkJHQXvmj9jUK7uctv962w7ZCaekvbRY6CGmxYJmnw7DGuzHGptQDJLUgb",
  "key25": "3L5k71JEDjHcVpWm7rW5HZBjwQbVyaw56aXuD2hpwTwmToe1SyLyQZbw2vfwZ9t1G1FjE9w8fUF4MXnmboSSCoee",
  "key26": "58R8Lz6doZkV1cwwzXeGsa7sU7GYqr7ai5cWXmgPayLnpJnzv1ju9HchaUsE8xMbYYZUm1FRgT1PKPGnq4MQFZd3",
  "key27": "t2JxsnHwpUW7MYz4UEoNVzJe6qsdSpAYbvZ8ZqHFzuFBctPFmPzevtHnVSr9DFtwuFztuqetnPond3kfSiMwQrP",
  "key28": "gAMapYTK5GMDQELLeBZYxXAhhcqBBV531MdGgbPaBFQ7djEGrZsZ2hk8oP4ocCiuDduxhut6rokvq8EL64Kh7v4",
  "key29": "3Kx1dWXBu7hvFZvxjpN2EFNBjfL9s3pMm16tNiBxqdTAMRKwHfWsNHAwGd386PpmuEQodt52qzetNonHLJCLj3Wn",
  "key30": "37mLzAEN9yN2RV9KFQmeXThzBwdzXCMojZrZCSyoaYcT2ZDviWyHaBwfucHKJgfgHE9AT6xuDS35yuaGobk2Vak5",
  "key31": "m8SirY1zUUM6QqbCLNrHfmAKP6hVjvtbcibQPmKVqpPj8RRjESwoRqEDYamq2zb13XgaTj8eN8b8CNNj1j9WkKP",
  "key32": "3UmPf7F4LTAYfedzTmPkrGFW3ngnCHJsSFbYJCdxGZqTcurD6ygzCz1APf56Hzmx9fTbfignhvqoakPKqrhnWVTS",
  "key33": "667nHAvxC7zKpxonZivkQF317JJXDsAkYSHzBP4d2gttwMXu3FZzv73VuSWZaKqpvvpjfTzKwCQfgshLMNqgGidN",
  "key34": "3KnksJfDCR739pvZoUs1LFwgZMrF2LbaFRJB3C4Lr9YF8mwwpBrmq1FZANYwoKD7jvY3JudFpz98AQWbagsqrv9G",
  "key35": "3hse99KUzxhxdWPJFobBhhzxpPy1vPuXgsZQuSiRa87XsbT5ViTu318sZLQkwiQeSiRN9JEyi9m6vmMimrZ3TmQU",
  "key36": "4jmGm72vuzixz2SygBFiTcRfTZGDHABaSP3i6dCHtTbEvTtweZFFYVP85bpcRYCNBodfzsWXD4PL6PmjNyX1rkCq",
  "key37": "2E2eAVjx5USpj1r5sB11TjKfKxnArKumHAMuDmUCtGSPGpKRPVKqfMWvwchvYGDieL2CXAHcEYG2Nf9vMic6ZFxj",
  "key38": "3AHTcCzmC8RYJRSWDLwn9Wn5xcPM9WKhYerA5hoiez1mJgjdopqwCrtQNcA433DV6UC9TJFdriiALarMyHrETH3x",
  "key39": "5YsRQ5GTLV9HjzRfUAonZe8TviVjxHkEWJzHH4iBQe323CqKQKCNQaLpYnkocbvmPxBRUJRVp91SiiiEPxHoZtgq",
  "key40": "2C6NAuAA4Kovaoet1N1GiTryMzh8mmCoAW6UUaQ2k7kfy3foPixaKNe9M2sG6fvrp7SM4xydm4KR3wHjvFMsptPQ",
  "key41": "Sz3CbRBEurUL5ig56GFH3FVaHQifhtpBfEqFDXjJe8hwLdLKWtRTEtW5som1B2UGkMZxcsDtYuTuTk9hWnxJg37",
  "key42": "2tefSZ6zzGWpESdA3Y9P7qQ5ToUoth2EgxNUnpVGyaXcNNrhBVCWsRiZhi8ywZKRK1NTuAj6cZLTq1gPiPmTVJMW",
  "key43": "4wFAkFYedDVwrwaX2BoBCGcodQrG7BPQBBTvsVWBWNiYgwHadA9cVHpeXMKoxnJAV9dCbwbpH2Qgp8aucB3WnMYm",
  "key44": "2ELRtB48AQdCC196FgaKYdpw76J3bEVM2XD8wJz8EmKUc8verNqc1pvgVYLVPkEA5vTcjzGgrZAAwpYpZCoUmND1",
  "key45": "f7JiSBjaTbcLYYrTWtkc1iUo3DYs3ZjgQcQnRPmdfDL1Xbvi5ZLzFqf8UcLJhUfTRyRLbJ5SeXuHF9h5tnUUWgT"
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
