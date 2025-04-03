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
    "5T93ySKEF8Y6ejMz7mzGGPtFkvtfebrxg1AA7CHi3o9xcf7gwRxPwqsC15yMBNC3aNZarh9xysRi3utKRdJ7nkkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMERUhj26WNbcJHb2m8AnMg88w844v92PbGtTVdvVQkua1DK4GTxYwNzsxdTbkmDKk6rS9caBVcap3Hz32gZeUn",
  "key1": "35tw9o7FhguoodmjmRfhx7vVkPwYnumpzUe4RCAuFt1tcYg2S5V8RXbUvjQ8vPtutYPrDgjUWwVX3iRJEEuvAQ1B",
  "key2": "5qvwNZ8JwhuLWSjS4B6MtRsAx4rMCqDzsZzYzf8JQh8jxbygw9LyDwHeSxYBmW32h8qpFCg2qeVWKs3YWAbLYz59",
  "key3": "43mg6VW4aLbWCd9hMPTB8gng2PstX7JwtisuCidTMfF8Wh8e6M9KQpvo51Fo7gpVtcuU318nd7RDaf2v3KdZUrvv",
  "key4": "38MPT4qYqZchTW2pRV8xz9CgoyXrCegpDaYnfJzbb1fVoEn4nD6g6LV66enosDB3dTn3wRJ2tqv76so3LwqSdo88",
  "key5": "4g7QXfGMjTMXFJPbBbme8yi2U5h7uMjQNvyNCZfMLxiqrnVdszKCJ59kbCpCzu8btVathMESUN6sWgCjRvYdGGMT",
  "key6": "jaJZXJuu436DtroszP5feSCJz9YhTX4HjJpQMAoLu8xUV13pwz4fvU8LWahPovCoh4LYdYAfS7CypAWehdozxeK",
  "key7": "E2L3MsFn9SV6n7p9fC4MpYAZDhouN2GQmGtCBtp5igQauDeNQzJgMozDzdkJ22UbCc8U1TJw9LSQE1J4XayxQhA",
  "key8": "3EYypcH72QFaMhpAGbEo58WPo3x4KbMeARX3FHFXuA4yHxueF2WEjwWehgnGg9zYuYrv73VqVRiSbHt4aar8FJo7",
  "key9": "4D1hpFXx769KtyhkAGGo1d5VfRTe3jZKGRiNW6BuzGekxJojzPee138fhy96dSkBBCpV6qPCQNfYtAC92NFc3etM",
  "key10": "sDE3BuvujyuP4ztqkiErrgoGKQi82ACMQteR9oLAVEvycd6urX9D1qQAfQHWSPYY5SisqUP9E3nGbswtjUGAwV9",
  "key11": "27T8M12MWPuvP82uzA9SgkxeaSakotVfJUwVWZ2b7SyUvTuNFMSiYWS48Cb8kuaevAkjMRU9tJS5cT3fWHCd6Tpi",
  "key12": "5e6dDU4atPkKRCWHMtPbWPFE4jm9jquHrQoC3jA1BoADKCrJGTg4bZ5jHGrFBVLCs7BUPsgz6gxTj64zNYRMJRE1",
  "key13": "5XHotw6eX7qsKx1FpJRz8cxyvVGG8iXZoi7v8WHrsFK5PzgrtMxHR6941MSNzBi58mCajZPuQgxz6WnnEeV8sk5X",
  "key14": "4G3HjZNQfetj1AeDSUbrKm4WGCicR1qUf38yGKaV6QtEfrwGQCuSW7qn4dN3FH9pD9vseVc8yR158hggfyRpcDiM",
  "key15": "4uukaP7S9Kw3zUPCrjCGi9Z4ByMsUSSS9enZqMtgocycviBVYrunZ7z4rvgJnYTZQAUpTTN8dc8xmo2eeRmS9n8P",
  "key16": "5AsE9JMWypybYVCWXdaFauYxkgQxNpBK88UiqK7gdiFGY6WPNYA2hXwnahJ7eyQv8LSBsK9r6HYSDo2tRHJdrtcU",
  "key17": "3wrtFDvmdMiCrLQ1LW1bMjHLVBTmy3HHRZHYmwz2K95AeZta3i9mqhJV1NUyv4ha8eHvR33QcuUbga5scXmjuXyJ",
  "key18": "262QYuDcqr8tNiEDWUzU7TjynYJvUwdK5kKMEhz4ATa7J5Mf7E4G4KWjveUZbsY9Ld4ghar98jWEq2so41sm6jE6",
  "key19": "3H868MFLL3N1f6LVzyMSW9cni82ZgYh3PLiTpvXS2yxJNRBEAcazcd4ktjKGseosFBFsDnqVPDrbXcQSYDaMutpp",
  "key20": "3eXvFGJoWUwYyN1UmtkwrDZwQANk91Bd76eK1tjRmmmdUhzF8mbxu6bfk8ix6PuiNfr3PWTFqxNkCpygQy6rCRir",
  "key21": "4oo7ybqwdJJK6ByANMLzFLi5n8cUwVnR9YEcMy3xymHc13u5RzQK5HNbkpjgcRfHsNeLAivTUFLFiYyqTkvHN4TR",
  "key22": "2zKno4tS9vzJYi7hsdjMtPF9hY1Zdx9tL5XRhqAnwUSgfhAqgggNCZCkeV8RUpQFt4VG294Y1pSrMH52VbH4gCay",
  "key23": "dYPWdRLopVtqtMMhEKD7cnVF7x1jax3az33XvqqWZ1JC3svjQFpvEhfEdDW6ZpoYXka1uMupUyti3hrLhqinMrj",
  "key24": "2d8fKZAcyVvL3J5ikEYXyAxoq9CrM43eJrh5s2F5CgxduVcNRjGZsYwNRxQB8ZWyBRPG2yHQ3JKWT48sMgTYd4x9",
  "key25": "3mKMeEXRV8MP6n9ow7NiNdJnCq7uTaUVhRMh918CVV7WUHPfDnBy3YjGR2vednRbmPZCB5UKRfersGHM92eMko8M",
  "key26": "EH6quyqNMxDHFsxBWRq2rgCsofBvNKAZ9ogBv9xpqJkiiskZKVKPSrxmR2XmPkXCBz61Yg6QrZsUAR5F56Mr7vA",
  "key27": "3KSZi2bAyUD8inKvWh8YMwhaWRd4kY7sDNE4s4SMdebAWzZXp3F3Q5woS11tr1uY42RrLNue899CJ5pEK6qo7e93",
  "key28": "4AJdw58rTJ44ZMYMihYdFsQVKeraEigvY9dHDpnuZ4ZVX6kd8yVrF9dse8NuPiWyq7ZyxT5CrNDU7wsWb6GmTDWD",
  "key29": "YJpTZHeox6DJ9asPEK2FDC72mnc9T4pXmKx2vpcB9gLf7Y95ADd5LjT6mqMpGqwN23ETYbJQW6vghtdLuxmLD1d",
  "key30": "3CK8WqoAf9f7B3zmWV8meQhMsWAKSUQhSu1dGadPAfiXHrpjWRdFdopAHn6MeaMieqbBeV2Wf5oFvTg1SHg6Hfnc",
  "key31": "4X9sRm2HDdR8vZoEzgDwLGqgLP1KtkS2iovWxsMVeLeKw7cKGSb9zq88av46ZtY6VuUBhZQ4ho86HsXto7jiTjwF",
  "key32": "5qRLG6eu3Bjns6WZH4BJo3RtsVeH9DDCcxZRkZatYs23vDrFjRzDiqZkuw4KC7G2VErt73p5cgHPsgWMLKKwPXef",
  "key33": "aYjY84tcVrYpTe9JY4e6JQxwRRYa8JsNx2oYr5T6abwrkFNVYCmz3rLoHzbHVwbNKCV4quQLQifja3jkYWkTZbk",
  "key34": "43JhY74MULqtf9q9y5e9DCSnHTHSSfeJCuSawsDCPb7UvSbrgpi23Pc76NsDRRGWjLyST376FJy8kn1FEVm4YkTx",
  "key35": "34f7LenLVt8Wuc2CrUR54kEtWB9GC6qBnayjr4UV4Qxm7AS4RQc4TpEXUqhqJ9Qr8UGG3ZwVJr2JqFynEmAvrKsz",
  "key36": "QQmNbU3NuoZBkBKmycMCF5Q6tgawc2ULbc2hqcPHaA8ke25kxxg4RgGu3LNoM2b7raP3iS1wnKZHrtt8mNbcKiG",
  "key37": "3RWxw71YqwMFfdvyEE3rHYLeEfVmJ9868mVZCdW5M8q4saVx7vfRJ5PtuRNqHd5CnXbBjzRiaZRcUFN83tQRnAJD",
  "key38": "23KAj2iYRRwxqaCRgcNYUAPiLAf2k3bGcuod5nRGSM3uA6DkQFiKsm8b3GNpgsa8zVA9Ni9aDbfey242RB8FUJfL",
  "key39": "4N6F9ixK6kKmK5pPt4pxNRkqEVdMmNhfigB9KVhGKWFpWqD4eeBPm4bEiihWmEVMmZUp1FdaFpFx2wBntspbeMFg",
  "key40": "5FJ2QzpSdNGR99rAi6ReeosqTimREKnjLKsNgumAtDXvuerVBXRTpGHF8txEq7hWSA8eCNfDrG7VrHfd1NLobsRG",
  "key41": "4CUEQjyetDieEB8QubMu9m5xZtwnGxpce9PbaSr1g8giPGG6p4CRm6Kz4y94cobFQRTFLNDLJK9nkzQVzkPmr4EK",
  "key42": "PW1aHPX5xqigi5iJX1m28Fh4ac9wE3TofJ87rVsJzo15fzyzroyUcXbvNYpYJfN34e5adSpmwSjytopTEyYXQ73",
  "key43": "4MDYEukv1gXWEeqwPgpi6HmNPfaoB5Sxw4dMps784oRcYVtHeLiAodsytGjziJvpe5LG5yjiWqvgTgRqgCgDmkRC",
  "key44": "3xrbkhcmJARLuNqRRRydwJhyLgjpxUwWVbzeawyKmmYXchFqL5WTauD8jnBUbtpW8oVJL7RuAZ4VwBT4bSPgp4zp",
  "key45": "2gtZMFRGxGterf488L6Ue9Ty7Dre7FmcSmxcZ7jqP1x6M67ApSC5tH4cMRA5wRZaL9nxMuNfNZcoYGLzG5nkXaVG",
  "key46": "4m2HenN5heWEhD88saJN7pMHPAirETB67Fxb4MvTPeSQd8h54jHZrcgborSMDKgsAc79kEb51i7nPfTY7UbkwXZP",
  "key47": "2dn9eEvq4FRNQtRk6DsQ2tkqHJZ3jc9Rd6gqfKWGJ6aeofPPD8VW82K6MK5KGBZR7xQYWFo1uozpxukPnqQwjT6g"
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
