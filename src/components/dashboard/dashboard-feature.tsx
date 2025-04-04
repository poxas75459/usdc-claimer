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
    "V6mvogCxkyp6YQHisCecZuSeKq2bBreL61nHZp8nQvCuVfTRP8ykYjbaXxRuGgevS2HCoHP694uEG6GPe5MR21T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRgvgrku9hssDiUuK4FPd3GMsfHimHq6aZMoGKyWob4BY6RyuQTf7qJWb8T8C6hEzM6J94hhmELN7D26pi3VgPX",
  "key1": "2B4DXbrib9gJX2DRfTUB4vBfXXgYWvcXMwwuRcjiqqQSe8uFufvfVH7EMZbNrFTyiLpXpdhPPyLHWTajrZbRWNcw",
  "key2": "4mhHD8wncymZahkFS6M4a3mFYkwb38zKhGLpJQBf1cPtGUS8EteKqjJnrPZeo1UMi1UBECawb5h19q6QXzLtjGSY",
  "key3": "BLHHsRP96K7qn67vKV1XK1273j9EPj487iQGUQzAN7qy44RMpkDnCdUtbzU24KjCTFaMwT1ctmYmgzZP4JyuSxt",
  "key4": "64adfx8319R3cQdqK7xzDNkKBcyeF9twwmojN47fRgzZCRBv66JGRnz2a6P1QepuqPDJ2rvuDPkZdiW5w22qYBB4",
  "key5": "4jg9Zb2nqQyKDBP8H5rRRFeUgFfsPaNY5EGpnqddhU4HNDGhgdSTEqchdGHzS28WeceknsKo4NCniFGydmBgWz7R",
  "key6": "2V47RwFykYnr23NjWAzmV93t9NyN7ztBa8i9pnvwgi1bfRX52Q8VjV2dt7hiKoPsdeiFSn3obDtT3srioc9GJDs4",
  "key7": "EWshT9uNoto7wpVS5RJskYrE4hp1KhQqLid19aUBt4CJ6Mx38B6mX5NEX9jLo9nMWrLNDgH9xYzBRZVa9gQd5bh",
  "key8": "UAMQdG8RnDBFXkh5aeLHgDR9xEPnwUNCaPfGpopcQcQReavsKEWBgbPVhk1N399HHZTwrXLmvLaS4cgsrgxDChZ",
  "key9": "2mhQ9DwtCwqgCikqeRVDotddHxKDWVqyarF4evL9MUvwZV7UuFs7zdxw5wWRJqtQkZoDYmeridJ9v6VGbtPT516U",
  "key10": "4bJyvvTpREFpZTRfcGcsg7EZkQyC95uAMeToHjjTG2aL6Mat2CKBZ9RSfaMkZfQu1ndMF18jAKDA7WEEfLmdsgyu",
  "key11": "yaNXgouNpHbrmXWvqs7FqEFHSNELK3BHH7Svb38MDbrFDWh92J5bWGjnH85vZasHF6YrQZwFu4gV3eJU47v6rnx",
  "key12": "27Ht2dqTQX5rd1skpBPiEP6YHMQiXCG6D9D4F3xgJqFN2tL8GPZPzJiTfyRixHX8985EFA6MtFHryQ7XQujMy5QU",
  "key13": "2bQafCKmLQXpatqgPYgUW59xei5Fbb5QbVZkKgiAfpyG5eZ5cc29xgYTqt9qUJ3VBe73ABP6gx8DTt6CitNS3H2E",
  "key14": "4BnYgRF99jpbDN9R13CuhaCuu8xbU4ma2mwhG8kUZzBDBermVwo58u6iqvVepkEfHcbHPbHmWRKNTxLggaxc7CN8",
  "key15": "2aucUdMLPPEW3ubRPHRz4hdrVX6mSkUDYXLXUdKYjGBtvxEmh77Jry8wnk6CNsbxuZDxTjMnsicuSnzhJ55cHbbi",
  "key16": "eakTzit9XS2k5vDSG7FLym8QdoniHFGf9rffq69vh7wFepJbwcxvKMDTnrY2StZPH1y3SdmyBuiF9hMdfxQRzFU",
  "key17": "1e9fy2hxopirBaDsmDzAp93d8fXBasnJoz79DA2fLdvJNRdDfEmQPYgFrq5guzCnjrhe1BxeZkipKRUbDfTw2Pg",
  "key18": "2T27VM86ugpLx1KAxYiiLMUM7oYuqunsESvCPxZbp8wuF1aBKowieigQ8mTxZ8d4HUdkYPxZ6Anf3BDLzGARufsq",
  "key19": "4CY7GiF49DEbQS19kceRKKQa5TggSXk15nXbGGohFyHBYAwiB2oueUyhkgJXjqCW8h9ovaiS7i97jSarZ53b6JWF",
  "key20": "62XicYLcCogNikTR5ZnptGVg6mw9ys4mr4GmJScgAoZTgAj2oFWXwsmDKmtrxSqqGGhVH99HtgUzFmb5JPahvFAq",
  "key21": "5SvEdFS5CZU9BmvhrbDueihK3KfwMA1Q12Go2cNphFi6G8HUFd6WW7zH6KPf23LK32eddvcfVTGvsqwKu7FWDUPL",
  "key22": "4BBuqrRKE5uED3xbbm9Vbe8YxzLV8ypxofb35aatfDhPHcxAxjG8Zt46uNC2LZ7a7fyge2uqUev9VdL93mwNLXpp",
  "key23": "5CPLVXxuFpwdGtHUX8pyMXdKu2RXLd2jPaSxC4PkMhUgDWD6wLkBikUFG4F9HDhHaoYWUzzWqKcuW6AkMKWoospT",
  "key24": "oHLKRTBev7SMufn4HUc2DaSSWERyJwM3EAWtm1J3NrSGBzaECRC8Z8foDmPJfywSSsRzdD5hnNoaowc2qmLrf2Q",
  "key25": "5d6juPsjyFDkPYy1hpgk2NHFR7RdMPjyev4rGYpMoBKNZvkyiBzR6maH8np9heDDbpV4FXBvpML3PNoDQEvrjngx",
  "key26": "5wwT6zZp4pQadbhDJLDk6gsDjDSNA1dbxNxUJhmwhU9ZgknA8j2Gadk1QQpg1e98J9fd6tybukXE1iW58iB18dtB",
  "key27": "3EMAcKsRJd7hEDNtmz3dAtk3cFn11aXpU5ukNxuF95mA7wJoEqYFWputA9eaQAyG26CJvUkeUu9CVSmNYqAhGWqM",
  "key28": "QkTqE1CpYAgreBrumbFduk4nALFeso9StuQy5C6su6qHT3G22D1XgfUbCi1ibvYtpwgyqrFWnsotMg6sHXYExPv",
  "key29": "2vTMotuxD8GJFUm24cTir4VR88kSueTULukRKahm1Pu1sLVN9s1xRpH761pxVbHaCP36autpmqVtCn3aFq2ge9Ns",
  "key30": "2y1skayngw6jdC778un2dnQZ1YrJaMUhHuZfKXT7ovJ7spPuqFLeB39JBCiYT2CPrXDwzAczPH3AcEc6tKMcB7PL",
  "key31": "5zFiWUjRc1TJpXE8sjKQyEx5RKbUiXfqfbvdb5ADoUrMEZ27RJkdRCaUmFBZixsuNdpMeN8fFJqN9kLWoHohfgHd",
  "key32": "3qDWLbpf7xPsDqoG1PEnuzetT7txhuQcagPUE7X85dTiJG45L2pfYYnbiCvrJfuiFMYtQtB8jWJhEZRkPtVhuVJM",
  "key33": "Lu9FWLWEdr519ZSofPCGYYpsLDaQRkkR1FYo2we1KHb9QQ9JJAug6GEFcjbQUSmHqUZFrLYXBS59M43fP8B99RM",
  "key34": "PP254PWJane7aF4rxtou5ZBQ6N9w6Q1Vachkdds6Qu3v8VAR4KYHEVyRnSfThFR5iwSjorpJz62KV6vxPvfgPGJ",
  "key35": "5yMzvHPxUq2GuJ4LUF13b25AKJwU3EXirqAtW1HPsqq9vtY16F2QPgo536EUw1Qtu3n2C9SQeZp2v1BuTFq2k8zQ",
  "key36": "2jcPeQJ28fV6aPbtQujsfNU8WFKeUugi1ZpAkAWutZuK9c3E3n8rQ6WhR1Mmzwb5qLeGif1mji2ULmmTqMPt4ubG",
  "key37": "2NVdga6Z7XDsDwhZbrLAY7Hko6bkerRVnZJBAHoyF287py1mSFFf6v4niE7bbnt4WN7eYfkyAfJYzkkPt1TsmVpC",
  "key38": "2LZ5vSB4G1akN5bce9Yfk9qhgPt1EExgJYNx6Xa77bC6JKuRg9EWBZ2xyhKyVecoW15PaAor1we9kKurCW719NvM",
  "key39": "4osdwqf2w57Pzy92PrJPK9a3FDVhB7coqEUriJcivXVoNJayL4LU3zMuPbFEnafFEy7s7cgemWem3mhim1N59Hs9",
  "key40": "3zzwp9Nh9haDAm8z5TJv8rj9GHmJneAXA6uP2LAMjVJHBbFdaBgUkKjFM5bCzxnJC1AfTytLgLauzev3o7mqpwv9",
  "key41": "4N8Qx83tYqu9vpeAAnawyn9mYSTjsVxa6ZAsgWW3LHunUf8q7MLHZRtLK9nhQGGNP4k7pcUb6YzzqUD9KyeorLRu",
  "key42": "p75vxXBZSaE6aTi46sRkw7eLVRm4H2y7m3vRtV2ACWGeBYVcjtoyFM3pnXNpFqnR6VcsbNS3rkQ5edB7w1zDCyP",
  "key43": "33Wh6FA171aWWAXwX2Wb7LAQTEauNDY1fTPiP17w6VCM3b3qJ7uC5Av6tgAgy7H6GLPLbF7DX9E61dj1KJBUGyiq",
  "key44": "MNj39NpiRSNcpkDb9sbcwGSpZcNDVmJMd2ExrDXm3Ue7ZwcRsj2UBGwUNohAhHmttAkjFXeBpU1z6RtGxTBe6xP",
  "key45": "4CbDC3wxv1FfphVaBJ7YQErq8LiMUvQz5599PMy4sBxCmQ2PyTktwjfFALR4ynYPJYAuQBEAjRs918V6U2nZXStP",
  "key46": "4DyfcLtqpVXYgXu4zA5nLHMKEXh9Yqe8Hs9K99Sye7hDgGf3Y1diCVUURgBLzJXnDt45d7U3aRCwVQrBYG8ReoZW",
  "key47": "4HG3FcG5CiV3kW6Ucvi9PDWdTdNocntcVzxBPqhKrEDmt3zpJXXTRXMqZqmCnPTd4hPKgt8bHQbe59SkZocoTdTW"
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
