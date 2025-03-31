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
    "5w4PX953mr1kwbGxBoLU3iibwWiL53KGespsr5yDcFTMqE6NMwiCebKgg5Rocmh2Jnvu94xtSAn3LDoqJvxDM4Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khEQQLKa48yXkhwxYvUmoB6bXyAG4yWWo7ECDnpUUKAKBuxy81JCpggKqpCm1tRMzZinxy7cEJUrJAKoLG36Py7",
  "key1": "3TcAPkvodXJMQarbKy4UqAz548hWHuLGtA37VqGDBQiVrMoEnBd8tqyMev6irAWHpMvvGnNW4ciLuAjtXyPA6ae4",
  "key2": "2idoMqV2jdNhRar3UGDcTK32DRiVPCKsjqUCyiv36gkeLC8KaCGXDoFpG6LLp7Bj6gMw11YNans6iUPz1bKp8gdh",
  "key3": "2obzfhyE7n28GLdPZwKeoLYvoQgHaiCBrawNWUZHMkTMdiMLhzYCFw8rE48KErbBqwWcht1A6pzwQmMyazJzueyV",
  "key4": "5RugpLUqAD8ES6GPFSz6T6R3FFzYYmqiRtdHrtzB5H8JvywZaJVHu69QNZMekiUBdawsAND6VrsgaP3kjE86mCpB",
  "key5": "5QFXD5US8zDh92E8sQUnD2J8MWnozGb4skVMzXVkWHPU7FnrM5BcTNAJuzDJHHzp6dAtfg8BuGpJwYNWThtq7jWT",
  "key6": "3H9TaX6mXnQqXjqg3XeCoknfkARZF1gsFFqozdamg2k2nN6fxAXc6AkSUVPq9H9N3jnbk5gZYvmCgCjEwJe7dgKc",
  "key7": "C5hAaT8B6gi6mgP6nE8fVwPsFhYTQjGsowt5KoDz7LNAZc1dfaT98y1QafPNjYfSrKwxMXyrgyDSesqipJftoMg",
  "key8": "4BvWEUTRLqnuedh3VXg7vFaudiEFwQDeKb5wugEocTpKXet6McJjsz3if9TGSTBNneDhtuhUZsxym15ZWgyUUzoi",
  "key9": "3f4bktgi16nzeWMZoxWuvYN3Auv1s9fwVz1ZqerWoUXiKBFSiEzvTSnbgC7QWRZMeAbvpqvqZPxw8fb4Sd1DmazN",
  "key10": "3A7kcPrfjjpdkFNgZnHoGk7Y9WuVjzjcRFgXtq6rHy2SNq3gTsJ5hbW7NNWb4nsLpZa9H9dMQH1LHRZuJygPTiY5",
  "key11": "298WfdASkycmf4zKkG71cviFC7qmfcC9rjci14BdoYM8zVQehr5YDfhJ4PdbUnHPZtVDDMmcZdC8YuGJwDN2SB82",
  "key12": "37MnTp6aKnDypS9xCcZw4oHfsLooYSSM5uK7tgKtfGkEiPF37c9VVw1TtTbFpJdJ4jezNBJ78Eb6MtjEymaskXYC",
  "key13": "647xRr9h1GqazrDZWNw4wKwRa8fo2eJJzBM64r1iNe9ZuUQBDNBUTjzkwhR6bCrQe898msDxDpeqQaKhGmXBzgzn",
  "key14": "2JHsjM95hR6QQchV2TZBQqfgZHp1fePzwDiQSpiVu6oyqrvREhHqBPm2W3VQzMJRCyYwaqAnJRb1xew5pgdazbt5",
  "key15": "tHNSf5SPQkWuC3qBNkUdKkyaatp9TjgP6UPo5GoL64jv2cA3WxKeLnpEZpHhdUyxVrTDPLqvvfZbmMpCM2GdPWG",
  "key16": "V8pYj72s2ukCsSTKFg7BDMLtiXM6jVt1MJHvY7qwxgeQdEo2SDMtUdpcnmPWnDa9aRFZu3XTf9e6s2p5FPfGofZ",
  "key17": "4Pe2P2pz4FhrUm3T2mRACUykGBx35M4FMC3Qy8atjw2orz9GeCYTgauYawf2o1APrnGwDDm8g9NLHCYWbFrZnZBG",
  "key18": "2nhXwhju7t5AhJfN7uBEnHh3NUukkEt4WPDvhBJpa94nSnwDePtfomAXSXzVx2DWwXk44XEpoh5Fe3BA7q8pnFuH",
  "key19": "5uSLR1MJGGT92NKZ9vjgxpi2DZUAgf8SQmUKVDR7DRiaFSrRddyZyrC3HKBtqmJrhKtv95fYbF4gCDhEAQHydmPq",
  "key20": "5rvXco3p1eqkJS2Rkoumshh26HkUoZqme4U1GByfKWzo9KK1DdYAFM5YKTUA1vToEQ3ToACkVcEbwSfbYwESSSuf",
  "key21": "4FEpZa11KbLabw9JsVJPnBN2WC3NQAYX51WBowxdX7TuZww4jaG7DdHf1TzHcDbVxLWoztg9UXPW7ZhJCygeiWEM",
  "key22": "2GWEGuTVugWMs1NGfFo7z5NsjYVd4T331usxinbNHzXCj6TZAW7BwGXbcbESSQeavsiGKEBFmY1qUMxfe1F3wffv",
  "key23": "5fwe1HErk7FLJv6WP8gwWhEVkNfvu1YmEMDcHLTb6NS13StbcqcnoXknHCq9GRh6EmGEvgnV4S2xhjNjRe68K5rN",
  "key24": "5Xwpn6aS5ArAB9AjqqKhyxCmZZnorJKJJpqeU5NdZgXSQhAE3RKJahtBESFzKyJeqms4RBcaX9h7idyXqix1PGFz",
  "key25": "4ATo2isBcLVueybXacpAcd6CXEiyNXKjgydLCUR9d6UCo23GcZ14hNQK7dGZUsDTMxQzjCqYYm389A6UgLkRK5R8",
  "key26": "4F1JEwdU65Ttto8Xx6WhFRqnyqNSPLmrKAJ5Tdg9GTLpM2KhMaXfVRd78pVqz1YcDa54KWdLBiErp6WuTYjFbbVD",
  "key27": "ojhz42nbgDxcDbNJ6ds9avcbgeyUm17QNNnz5wkKLTVNAgYYCVw44HHyhUAV4ynLxb8wNfjjDZNU1TGxtKEtaVd",
  "key28": "4Ls797MoyCV4zjrgVzd8TLeF1G2Y2KUfnmMsTBwphYRg1SfaFyTLgQYqR3uDsEDCSzhAfZZ7CAEgT6vcyxu48Ymw",
  "key29": "2np9Qvj8fXAAFDFLQo8fbYAioKyXgjJWJY6TCYQ7k7YgVgmtwi3495XCDgqkC4NCD7ukh72yx85ht5ghrt9PMDpD",
  "key30": "4YwQUZNWCe2cSNLwWfhYpeZVhdkRkEkbu2aPFofAtsFbajeSLnsBwSdDQ2jE2uwMTYe1KZEt5Kn3qZ1NjYRErYw8",
  "key31": "55xmEPNMcMo83WyFEQ9arjRPYTJuHhcbxV25EQwWCC77HokDpvK63rFAPftpLuhJf78qEw3UX3oUiYb3NHKLfG43",
  "key32": "43zXjwxhoBuic9z4nF6mUexQLN4udYvWtLmqMp4QERMpaYzARWopW6GRVRTdYUHJA1qtVL28h1SK2TC3TSXyDBy3",
  "key33": "2eNUfhVup3DAZ1HJ235RLZbPutWeCjdsf7TBVciRJhMH5tGTCv5CqVJZYGSAVCVJF1zGzyRsJesEZx6j19Rta1hQ",
  "key34": "3GK92ShWwtDoAsCPTmTbDLEi9RuUJcZ4mdrVPLzPXDsbC98dRA67uimUbkjyFWX5TG9YKxTF5tZLG7AAg7L25EpY",
  "key35": "3q1abfUAndTSJG5uZA9hRiAiPPhn9hKp9KtVMSnCBUR3bkc3it99HYc1JXTo1ChdHUFnsD7aFcAtSHwHDE66AxY7",
  "key36": "4B7o9CwdwYR7Q3XTyeg1eJXddMWiCMaA85GkKq4ha27VCvKJ1mzSPZDwStDuyM86PLaki8oT7KYBbJpP8moNn3Nk",
  "key37": "xWr7KTgW86kkxpj41f18ah8Sa7awnyYfYhLT8TnArcv27wd591pZp6ckWyErzVgQ7GZPh6vhT42ha6yjbvMx9wZ",
  "key38": "5wF8iZGo7F6rAHPDY5HxAKuUdmXG1NnTVTNvAf8DbJ4qYiJCqvaUTwLyYL8ENi9z2DnPYE7njAYGH62YsYkvjzvN",
  "key39": "537KZSFfzkAXBvijh8d6KaF5K2VDsW9bj2DH9rum2oWeBFGonZT669s3udCTUXA21pUq9r2pYd3J2XJFjpHJaEHp",
  "key40": "5beETe5muTo1HVtYPBNuatjizSvEo7MD7vbUTGP6AU2TSH4qVKKVbYkDxu74fP4PAVYK15SkiLyxrVP8bVm7LSvq",
  "key41": "3hYbtYS8W3PQ19amUt26euUyf9uK4ZeAjYPFg6sNiFKCjjLqTsF4ow2yd7yccu6t4qxYb1BEtLJ2X94U1Cn7TNWf",
  "key42": "JnnpLujoDStLLTZvBukHXuv2Q1fSAH9mcxHhPQb8KsWfwqjgyzRGjtNRhd896tFphnDQwDbNtgBEQ5Hu6DtcF5F",
  "key43": "mN4pgsG8U18Z72juDTEbgVtNP1ogQASdc8Ld7h5WKDaRbcyn1YWEVvEzkSHPY46Mhyd5DrFR5NemzLzn5BdYnZ8",
  "key44": "5W1q192qhZjQQixeeBTskeT2Q8TGh1wHEtEZvLyNGjuuUEwCeEk8zsPzj2uofGydDjC2sygbZFdKE7pYRLMGETNQ",
  "key45": "YagJFGuus39Cqw1mGNjpWXmSQW8rxxttxMiUqR5RXvYen7ERtkcRipnjxbaW6HKqRLLwBFdM6muyMj1nkJnCXCy",
  "key46": "42EReqEtfenzJySXXGuUSPNdxL7fJ9q6P7wYoLjXN7HTNVWsAv6PuvVGaurQKgbAfoWsEbGVjZcDTwvyo3snuTsm"
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
