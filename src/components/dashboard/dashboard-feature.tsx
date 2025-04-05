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
    "4ezpLzjRiphfYsjZdujBEmK4oRszsA3r2akRafHAdkaiuKCTF8AJKyAr5mSUgeVKEeDguAgZ3siMRJcJ1WLUuMco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dRKWQC8bn3kABJB9apyoG6iKyWTmBqC9ddVvyFZqnf6oKu9steFCi9wN2Xe6hDLnoYp9MdMWegJyE76hndYqUH",
  "key1": "vxvJZL1jYdsHdz9wKNW1RVcCbKKbp1dcem8ySVBtGY7pyn4cDFCq8CEhMHjKUhhrF2vxmUqb3u3M8XSCV1py4aN",
  "key2": "5PTNv9hr6U1WUdS8HeiDmUjqBA97mWUuo3F2ELi5NeAK14ujjotDFathqz7RaV6UJiXBrDu4KEV9Wsycz2D3rfaV",
  "key3": "33AnhU7baiygMZQzxAt4zoFwBU4ynufswmueaUYh65sLruNDnxzZP9Yvz26eD9qxMyLhkSmpUjSGjHW2un93dE1i",
  "key4": "3QkKsg9254i9yEj7ANVkLvSgvhdbbjMU8PQDqEpMriJtJmT27x7RvZFqTefyK4gmaaTEjqVV6YoAJyWMnkT38Qee",
  "key5": "4AtJ6WpbA6m29n6NASTbFUnWa34cj21jBY2ECA5wbYp9Y6vKTjGGSuhqAQ4e1GmsDnuavHLgxiHxKoEvn8po5tHU",
  "key6": "5wp5s6Nj992LqjZixxdbk8GYyLT4dXC1FvciiCDYRiZi1UoBqmr391C9xShjuCVapCLHFCFJ5P4EvjxnL5rRF4qk",
  "key7": "4hhkTW9Bo65i1SmdASJt7Mg1X5sh7sybeGkaMfFL657p1c4tghit76dWNnpXM71PkiV7xGiXmqDah4EQ7Mqww7FC",
  "key8": "3uSMvg9bsaQQwD6ia7fenXtxK6TiMW2EpbnmbWrzAkL457bR5MmMdr1QZ684R9R8AsbdBAXAZNCnxriaSVUtQLG",
  "key9": "2UB5UtRDvKNCsdgj6dUq25C5iVrpBLozxQ3eB1KjCT77zq4qc3FySFhqbmKD8f89mdjxPrFWRpZystecVEJwNaaJ",
  "key10": "AUcvWvrcmP8MGSwNT1ugM2Co9cjPdsKuDjwMeFiPGZWAaYGR2ihyB38xB84ovXhKz3Yebq6aCDGzrMaVMGCjMjP",
  "key11": "JWtSnboJheZT4Mkevkn2yUQEu6LG8yaBNkUoBTA44gKn8z3JYJJ3EicjbvnmcF6pwLEnA3oBMbLtZ1gfXjeUCwM",
  "key12": "YMutC3inbyh9WY3UhAHxPYxZYHX8SQsNJXv3UEzvnqe2XvaCqWxCdNUb7zQzs5iB6cDjX3a1uNornyu8J6W3s85",
  "key13": "48wqynzGthJyZCaAtNuChYEq5JenYLFTic6dFz9NYpubWgSw8vPdwxBKbpe2iDTBZSksxpkGiksH3Ke5L9nhqP9y",
  "key14": "gcYHgpCcMXukNssNcnUzB1g32bWG6TpfyzRDhUUYCJ9PH7XCKGWb19ZDPZseZNkxXBFSmTYmaMXNw9nrrdCgvvW",
  "key15": "3H6Px1o8whQuqS99Vr1h3bQrcsHjf32CtVeBQLSCoH4uc69o8EHqjrcqByKQWgdS66TtursALGoU1mfrL1rZx51f",
  "key16": "24CwJn5MuNNxKQ5mS3AwqXcxikV1qBTpvBb11DDpMYafJJEUTWVFoqzX5ANnrZt1znWVTpagoUnrsjBAbKzzxkMc",
  "key17": "5Mz8KkW8TyR7NB6v2fV1vKsgJ9aT5xod373ooaAEzKujhrGyBCZ1JnwHcDEZPSBDk3oSn9rbYqRuEFQEEpRsvmbW",
  "key18": "613isqWkDhYswnCNAmKqDfBGhXbb7bdYhuz1hJwBNioMVH2penvE3Cfa8zdkQ7rSZciDuTw1wvzHG9qhaB4jbUhS",
  "key19": "2UWmRreC18V9LwYFcN8t6PFcCF7s1yeTfZhKUNwRKQ13qLdRmo8ughwvwjiqsBVtTDmSMmcP4k7nHqhU4NkzUCzc",
  "key20": "3u7Qazv41KnE7VAHPysHMvzv3wu376QHUecnEk37xJoAqbqGxmBPVhmLeXE3iRTyuR1oT843mVgVgPrsNykqhbvS",
  "key21": "2QADx3zXc3KZ3G9d65EsxTTNz2LmuVkNCRzVDQdVu8VebTCUFi4oQBBmMTMJkCDGFMGM2UeSfLJvfNzSnqFYuZFL",
  "key22": "4icvDDzxNytgkqvxzRTTGoPB38VFdfERjv8bFVDfqS35gL6K5w3notwCrDHWLtDE1Z4rtyN6TpA4GyT57gCBdKbp",
  "key23": "59hMLiACmusSzXxG8WPJ23Edy8THoV3a4H7NKzspcuzSDFL4VaiGZU7PugR9EeKHP2KvD8hMXjxWseWRCSWefT47",
  "key24": "4fuzfkknnrLmBLFGaAbrnyprkjSbAq2Z9pEe99i98ydmf2iaJaGUsiNMFEPWUUHSMpmeagyftuVa4JhmxAfrz1nC",
  "key25": "4UyBptF1ZNurMRsHG2NUZrZN9YAg7PZfCCaYArPVbYJJ6krFs9WrTVJ7Vkyf8Dibvjs37fvUxei3bgdWvkKmXuSU",
  "key26": "LNwZa1ZVm4junamTB4u8yAAdXCWcNeh12ZK43KGVWVobrywQCx7ojYvV5JJGLjahd4YehpzBaURjJGFYVcZfuGz",
  "key27": "53HKAFoyW4ruLYefhEVsZUAqNgirdgZLRLmTAdmj99HydPmSEUGvs9TdFroeUWK64HAgPwyHAAUYCLEedFj5vmME",
  "key28": "4rY3HyzXqCW3m6QucRvsfGHcshC56H1hXDvJrDQpTHaMEbyGh1bf5JojvaoFrrwf8E7M6UizAFWfRSNzfAPMvMvG",
  "key29": "3xxGfagtyYe5a5VMXtbWBanrpBW8QYRu5tdi2b8uMRzmVGVnSKCr17jzxhniXPRGECVrMZSzfMbYmNJ8QkcfBeUX",
  "key30": "2Z3PeJhuPVb3jYo2wosrbnCCijcAcrW2eJ4zjvHiuhr75F1ygsDGxeWDepgWbdPqg5jTvauZy6qniLCTNvGDm6FX",
  "key31": "4qDkqgbY9dGZi571UKrvzw4BeNvZk2bQS4qz5UsJaHb7hkewUuRUacyEhmnz8zg7oZycTbY5EUT5GSHuWg56nFjo",
  "key32": "24id6ZhHu2qtpmDWKZDRt2CurXAD8cthPBgyynMePjfTiU7Xc9WgrMDfptgXgnPhZF3wbQeR9vUAt6ZgAcr4PQUi",
  "key33": "3gWmNLMZJd5w6VPz1egUNqLZMQr4etmmEfw1XUBbsEfV7WXBgHUQQzkRAP77E4eWAKgMrv5xRZyuTxDyGpKRNGUg",
  "key34": "5Fnsh7HczjvpxsSBH1pfL35m3vPzE5XJruTXje6JTQtTb2BwTzr35trMGMW8Dg6Hpw2vm3TtsJk4UdCijmMiqeCa",
  "key35": "48FytHLuyeFLrRgFiL3oCmbh1iutEiCXrQM5sqymDTMV986dEwThpYuqi9Q2FSma5tAvBYcM2HkyebfKA6FSEx27",
  "key36": "2acwGLF4NHH19b28VGFBLBbi7WhEtX233WwXhiA2K6d3ZdzqYqMbTmCp9FN3fLpz4b7n6zKK8A7uaSCtnMsWQD4M",
  "key37": "51jDh3Z9Z3DkxjWCsKzsNynTMgadJdYpkxqWDRcPi8ug8CNzvpH6eLuqUS1HLDDXGqwQ8dn3byrb7tJhG55EDavu",
  "key38": "6YAeHAMgBWnUKU1DkJkXLbSHbs8G8P7JGNcQvQ78NbEE5HrwG7BeSwDwQdhqQyANMhKxRWapZHQFZfFpvoDxt5J",
  "key39": "ALXNi619KTf46Ge2yiTwRNcGJeDM39qDLXUWUy58Lna8iG2qmP4knZvBX48hxhpFenmRWTB1PpBziBWHjZeZY8U",
  "key40": "3u9tdAQkTzSFde1vfTvLV46wNE9GB9ttTYXaH77MypCM2dxmU49kyKJidFRRJuBkYfTuwoMJcQWX3Msff6siX4gd",
  "key41": "3yiVDS8pr9nQd59yNsKgCJbrC4XY1bXzATiZ8YHEaGJ28NC9uw2bKb5Hh3qbeH6dcmf94PXGKjco3mt3NPkqL5TL",
  "key42": "44NjSw3TxZVSt3As5XbSN5SM3R5jYHzxAZ1YbBX36jRWM4aCCsjRUtjPjVEvHroR16jQnVpiaAsSsdpQ3yUtbBM2",
  "key43": "3poJFxWcKjP24rLYQfSZS8pe3v8Zv4HvLceVwD3K2XoF1tXTjHgV5iwavfZQ4HBmd3d7ZPfQvxpBgXefw86fU4YM",
  "key44": "2QP7nWHvgMLkxfPYNaTjY6ezuLbief26aDwWZpPTEca3Uoe1yphwLYTXSF6E8GCPpsBacPYXeixR1iaDumBr2WMu",
  "key45": "3dJcyizVwf5exL2wheoaLU4aVSwhM88MCQ5ardXS8Va9p364A7pSgspc834ZyHrHDff3hR9P1wnfr3pS9S1aDZGq",
  "key46": "aYTEorJod6S1X6bRM6X5y4zDNpzYLTZozbKCuE4tf9Y1pGq1W1KSyHHbgPJGLfoMGejupmHiGSTMdwKtMm7Zzh2",
  "key47": "3QTywJE2whyJBg6kV33vTKPWTz4kggEwAb1EgUm4EDnZPBY8XxDwq7qRHqMBCqdudmbwyBEbgtkp2QxiiMkrK97W",
  "key48": "2Smr7tZQiEF8RQPpugcvzWpWxPNGnstF9Un7Hit8rYto8T5SjXUMRtpgzLXMAt2Goc8netE1jxtB4d7n37WCwUC9",
  "key49": "ZHq3t6orpbszmXRUbfZNJ8huTtwyRM4vz3Fa4RhnEx4wwR4G6RaEbYEwvce5ryJiYfbo4vB2iigmsuzyNeK6z69"
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
