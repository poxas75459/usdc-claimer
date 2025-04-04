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
    "5oPF67PgiggcVnvby3tUikdm9dqB91hMUzdUxN4o7jTmYYUw9jMyePe1EiPBkEMnbPLGzSwDQaVo5FbzrqPLKHTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25e6vbD6cq5YxFJ6p1bYdUumtwyeXN5U8g5NNnewR6E58kiznf89uunqnEPX8Bt1gvPgw78aaSpRMDuCJMwBymcg",
  "key1": "2weuJPDXNMsTYjjyaA8tTtUawUWxbKyrLr1BQXnZFzfmNtCRNYbazzbUA18S3aBL8H12XKY4cGX5dvq8B5e7XBan",
  "key2": "5SrXuHtJUy128romvNTwru2ME5K4w51SmBpzUZNdbzDncbN4PUFo1oZhsEKfHorHNH9XN4W3yXtJ3gEASeoAuiE5",
  "key3": "4q6v9qzbCykrd5q4Fh7SczMoCe5WyCf1r7igWfWDES73j7JinepAKcVDJLQ2TFEXyeqSnxwV3kkNLvhHsG8DJjcg",
  "key4": "9JXWeEUN7pguQNuTMZyBfmx18g75NvUujyb3tzQPnziXvyuFZv45ow5yukVV3r5jK96EjfzGT1UAenvGQp4mvjp",
  "key5": "5pmFFTk7p1KKoxyUaSi48kR8fUySKw8oJYh361VPJG6VGPDGqPyg9hSeUkC83VDLRWydzQ5itAWEC2UnLqwVGJfb",
  "key6": "4Vpbd9s1SLhwbFAoPHXyYP55dcrNQYvbDfUf5UtKr2Whwafuf9JZdE2p5iujm8WgQieEkpGRor7h9otfPsKRRLM3",
  "key7": "5fD3xvjMsarApJuRbWyZ5KnbSEZigTor6jRBk6CWuGWYEG1RHMk6dBWwiPcsdB7M27g4hrWFmLLvD4NpDN9dpiSa",
  "key8": "t2tDU3xTLePMJCMEYaxvdVn2uXbEFL88prgB2hPKSjPaK4Eck9xXRK6e3FrapfFeTjhUyphPGfYwQjAUYsspn1K",
  "key9": "f1HvVF74Wx2wPFxj2FVPcydFUJH13C6UtKqnUhjsXzGdVaeVhc89xxWGouEiUEuT5rndy7mAktvuxWRkfiYMMSH",
  "key10": "2u8raikg1ixEx2S17tjyPwC1QKbmrQFJeoaDXaeFH2U1ET6KjTybWYHu65mAMYrTVZ4D7Bj1PjSnsEnzV3e4rsNW",
  "key11": "5iiYQKschjhi1PD7iCybRcQCri6QVG9kGfABVdAH7xTqiiEQE2vdPeey17cEqSeHrcQHziThcyToFkkoZC2CqggD",
  "key12": "4oegM3yr56XFq3TF7CtSEHVnUFmvEgU2ixsAR9k3nZj7qTJbYjagpDVi8NxjyMpouc4br34Psqjf1QVyAurmG8XC",
  "key13": "7yKjD2oeo86dpGWgvhBA1dMcoLUV1VBzRBAnPM2EiaxTCKxH3F3MZZtyNqs6Hc6rccbzQEff5GG4ZeFyMuQPX84",
  "key14": "5pvwosbEm4B5ZJQjU7TdL5GUdEPNRgWfeL1xfP83iJQ1hhSh2AhjSiihiRU1SjaLMDkbDnBxGL6TpUNGVvHaWqrq",
  "key15": "2jeRS9qZcLyR1mKyQFWJ4CkKpRcVb28CPTvrqgz6hCYhis4LWU4JUda6jh8aq2iCQaay1aJWVZ3vbvUVb8LPWU1C",
  "key16": "5cMBCtb8TavwNVgrmYs4kRuhoEcKc4VAfcHuRXeBpT9FyGMk48gVrx85HZaQSu1MALHHujjWXq6EAWMuBH939myS",
  "key17": "23fzei5CpTi93HEmDjXYBGpfMBREFCWF7chwa2yXRW4UYRKMBsZ1wc3p4xtSsCsku3f9Kaxcid5ysq36P7DXjUnC",
  "key18": "42dDoHajY5TM3q1jfVT8ibMZxcnsFrGQpPiAro6g4h8WpM2KKaPt3yhgMyzezrdD9Zrnts5MkcnfPJ5NfpW6dGiT",
  "key19": "5NHqEaCDF2WTkDPt1i7GMfKeJP1GbkJvs5M3mQKHFRF768e3c5jRz5ZG3TLCAm7YACNwZif7sdVgmk2UN2NBCCaT",
  "key20": "2Et4VSn4AWKJWsxGp2Vb9WdhAUWiaoJJiTyzsbKb7VxXBMF5pa1atws6fZsn6nv2HzbMHEBons1APu2xhnxehtUe",
  "key21": "5eqtc7GNPikHL8c9YKDDfR5hcLGSDMriHubaLQZRnk6LgiXXkHF16uH3qRC1qb5AkgRriRJ7ZX7wbbatBnpZjpkJ",
  "key22": "zDWSr1A6HoY4h3fccuWw5yuu7yZ3Pobr2hV388vRxbLtAtjDWodqmtFDiS24zh712bvi9pZ8pV7RGtfqziyYBvJ",
  "key23": "4PZqCNzhKzyvnVjdH18aVRCNLxaPQo3Rf7gnJzHRbsuibf3u5tQMSTPN1oaNXX1DjucgkTuEgVaBbeAWxnuuifJ7",
  "key24": "2rcqbYkBygc4MWpMkNfU7YY1MtRunteBdSzDS8WRqbbHoJysE2fjQG4LqiAT1yyDeJe8HeWgrr3VoVbe5fzyYi7r",
  "key25": "2nhXASF95gGqKtydrEnzfGeBUBgcn3m8FAWcemn45XRq5TjVveWAoNuxTXZWihfc4kpCatixVwGNsx6hHudeAL1m",
  "key26": "2Z8XD8wHrev1KRpnQLhKx8D8ViVLKmgRxSFtmLbY2wYdvPzbLuNA5dkvVM6eawNvNngCmY1dLxF2pgw5zLi9nhXR",
  "key27": "4qumTTbJMxYvdBYkT1GiNrcrY6EhAn1BCMHY49kQaSN27X2Ty7Jjmsmp1Mc7uXnotvV1SSHfbdcNHLuB18NEJWDY",
  "key28": "5GCQiUK4v7iznk4aGfA7soy8WP1r5EEwgmzg7cVSBDs13ketPwihBZ3m3sktk5y7ZJGcvTBTiZm5n9eppvxJU3AG",
  "key29": "3KZvdBAwXDtvCyeWGLAm4KXEqT31AzgAsgiYFHa7S8fEwoF3BojzhPAf3s81a8cEivKVrfbfPZKHANQWPCojAxXz",
  "key30": "4VHwt9MZEd9F48DV9UnNogsEBWc26qhg8EKgHDYQ2HxBPaA33tM5PqRKkCQqniPHrnGF4DX1g3EJNa1qaEkm7FcS",
  "key31": "64RXVwaduZSmmodQwFfzj2CGLSiKsibMj7uamzc11HMaR4iqmriLssHAtX4kX1ZzacGW7ScVuNgzwBbmxAGspSv3",
  "key32": "3JjuBV8QWAUejdkex6nEP1mBMKFtwFw51v5LLeqoZL3A3uRMPpmuss4S7CUdiwksn7CmJ82EMVxz5eaFn41ALVSm",
  "key33": "3azUyY3cj6HHgYDSgmUxB82i7hCjD684FXjaH47PbLEwPnTi5QMwxXodrZbDeyiiFC5vevt5EcxBQYXgyhubX4N9",
  "key34": "2AihjzowcwJqJcwiLEWtTgAAndz8bD1Hk2uebo8gB4dGUVxdwuyAYJinwwahBpDkWUUbyjJ4YcGyYXpz9wcR4zH3",
  "key35": "4LJ8Tfmfq9gsmk81wfrmSZx512nwZ8dwaZVas5do6p1Zp25rRQXRRgCv6T5EEYYs8uh55QxSMySmBmgzuGBPi84o",
  "key36": "4fUKzhFpDgTLXRAgbQndWZ4ba8N361TCAtEuJVmSwSr6TFsizvNxzoxWZwj3f4pcnNmSEoS68zK6stTobUpM3Rz7",
  "key37": "2XDXeVMFcKriGpomJxQAPRKKdG41dh7DEM5ivbeQbFXjgdjNEaMAgpM8fNCXfsuFHE9W8s5BZvfuiU75b1XKRA1y",
  "key38": "4eu4BnxXXkWvC5rrppmAQAeUTE2LxysuhpkC4d6EKq8SfiB2ocgYdJHMyscxbBy8oZjtg3XbQNtw5nobDm2KpLGh",
  "key39": "5NahWgsTj3e3NiQpCMzg88uHsArN7Qk8hzeW8BKZsVe1zsD5rNCf8ccHYevqAeuDDe44WfzBtKqAQDdnQQyUfxZs",
  "key40": "35LUvtDp8E2q31wTj4q4aftR8GMzsmvZA5UPAkfKun96mfDCTyXfvWWkox5xzV1fvZenHFgpryFfWeHFAzERP86N",
  "key41": "Ew6bdTi1zRD2mBpCAoyz1h2ofc3k1hSKLNuUrcMDVgWGTKkXV43zxUjPvuWrosX4QZZJxwQLKXv7HrvGv75qZxr",
  "key42": "25ymKz5wZJfTfCuLpsLgGifVaESyKr3jMGdfWRa6nNRs2kv6GjvaMAL2M7M2JzNjf4ybss328VxwERHFp7yBHYDq",
  "key43": "2H7kb9H9JcFF2Q5kBXWsAC4J9HtQE2p6MsKywMJY2YkavErfBevRi4PMQgbkehpr33KY9U17ENVaqSYLSPZe8CZF",
  "key44": "4cqvo4US4mgPqAXjotGrGBtp3gbZYZHfEufDbK68DYb8PW2c9jMYyWmYLzhzJ8PJmY14Sugcd6Cfepq46cCGMdkr",
  "key45": "3irZDRsatKZMeYY2K9HwiTdizMhbN2YRKiFZTXzzsrpgrqDMX54Qio4ngnATPZmQNvGp9SRVHsqHztqt1qPJatmm"
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
