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
    "61Nk31KUkre8Tnc8Tcf5NZcpBbnfQnx9MgS5fvG7zPufYEuZgCu5t6czBL9Ro89S8vjHM8d9UwiuMuy73vMLkgBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzmtypisNDDwhvEQdnVaju9tzhhBrE6moXfihHUfAedGmYNNxiJRXSPXrKg42pWrwHMDpwJzuHoJwP2vJU6eTyw",
  "key1": "4XJgVbdbW9bmxZSdfUHo91qYeFiwmox12av9tcoya7oG2fJ8G6F92KCJ3uihVH7xp9A1gP1WuePAXhbwKcfGGyAq",
  "key2": "1gUNCm58Bk1ZZ4RLJN8JLECChfQccA2jdVfg9jyAZx8kvUwLZDKHpUoQM7cUUtsKKj9KWgknWzZHVkRuRWpLmaA",
  "key3": "2phYdAtv6jK7PiUe9NW5LAm66bTPNfHPSG4YBUrUAh736iKjG5qHzkxZmG1dvXj3Sq31uvxhYdy6RQRimXCNaKso",
  "key4": "3r3bPgscHEmupoRf8iTAFkiTgSbXScH7oPGq79n2rEipw4SbEcn8CftjgM6RcX7mk3JVVM6ovXZs21LgfvzNZMca",
  "key5": "2wumK7Xx8q2UbZFaY9diSB3tqZcVJuHrdDQdUA87xAikHSxTAJTvqkhSFnfUP737d3HgnqxACcX5MT3D4DUi74na",
  "key6": "4L9UdvNTTmwoqN8pZw9UmJZ6CJdVxDb2baBJdKkQkKQrg9qjuqsBenMbmGVus37x6BxhjRd16kSPAJGa4KqEkFt2",
  "key7": "54NGMZd9WxDomYE3V4X9N3AfCuJ9VHogowJobMjf7VrSLxqwWdU7UbttBaKFvXT2DKAqapC1THaKtmWtMR78Zo2h",
  "key8": "2YNoa3WB65xd8ZYh5nE4NudEKbsQG1xJpF9MkDd9YSdJYmdcyYcgJw21xVS9kcfRZititDCSDjvvEp8PxAA2Xb1p",
  "key9": "2WtYpMNAXAtcxXhuqnQsd5K7Uve8t1yXgoAkJ8NhWKrkbqJ6ZgYzikd9NKb1JCSGBNva3WFZnd1bpbYrGb448ki8",
  "key10": "2YyixE8TjhGfBiQCzuCTuyoXa8jQicRRghY1CTyahRDpcEABGiEvXJ3VBZSnFzd5uuNW7Jgs83y6avbq8vFjzx1d",
  "key11": "3z9ocmHbZA7LBuQhXaUJiwiskT2aEDgzcsEBEXD4L9FH161pxKYWxAHbCeYCxHdK4LA7FiYsThdoQDr1uEvThcVu",
  "key12": "2X7M9Prewbk1sCNL2ETBdFE48LYWDCpnPwT5xodnRwYwfEmHW8KNr9PzuERo99EkMB7eSHuVujKWT83nd6yBfEEB",
  "key13": "1EmUbFnqb2DqZT1whad6LqbApWaSE89t3X8BXqvWGTKLYU6FvWGK4spao5sUqeNiZtZznGFXMBLwrKKmRcbxxhN",
  "key14": "26nSmr7nM5Z9aqsL5voB8eaTWiPpZzL2gNK7frr7R6RHmyJtoC8hUXAGmFn9A56tj7NBxFALV4wkFtCNiDhSvNFD",
  "key15": "5ZD1R2sbbzKjcm8ViJ5aMtKqTUqmXQPkkuJAaudY2ZpkTKAVVebSenzKVfnXMfuvuku94GTKN71NFMa7WXkzpZVU",
  "key16": "36pnfekPtWQKCJV1DYxZea3k2RaQwF7xr4nq2nN6twkXMKZC3k3W1oQeaPPKkGxtLHkwA9RNHYbCkuJ6D61s8C3r",
  "key17": "36VnwsJXJJ1ifqxc6zW7k6tGdBhKfuYxL6bhjpHaY4mbMM87YJDQHn2Doh1sLbjBLgPiczoqwTxAZPtANYpczQn8",
  "key18": "56Wi1F73cQToujtV18uHa9XVLpkTBf5cJydb48fsjNxe4c7SxSFHjsNYtCEfH9Tm9c9kAXgRJmS7LnNG3kTXor59",
  "key19": "SjtMW1EjJdoQsJv2nrYmVocS1J7bQ1pyQETX8AJ48qjDRCEGBahD1ofAJeBjvjKkPiG18Z3bTp4TbfFqSybPMiQ",
  "key20": "5jE1iudKFXGpuXfgm9QnM3zUipjFuojGk2QtYJi5JiGKEWcLM6nbXNpo3EMJctoH9HarTpQWfG85ivxvDatb2XpH",
  "key21": "JNuFFrXSifM9rcNsHkk9vaNysAyr1QogEaHwXHGiu21f8yzjhCtvKxyS2wyy8dVo6KhvVpWJ5xRSe1XQUZDX1F7",
  "key22": "51zRqgkH2UBRwcdko1g4QpboMY3HLrnU4ThYyT1LSjvEX69LCFYGkanujcAFs7KXMR4EL1rMpXXiN6Rzi9zfMgda",
  "key23": "34F2nTMn9Yb6P7a7ypFDwSS4AMbgrNuxWHUrr3r3YsvugRai2atKomLLmRZXxyax79kx64V8o24oZ8nzHkxfcQjv",
  "key24": "4vnyJmbSYJCS9jjDsirT6a5JDx5nbxgce63hGUsSZwuiRNJ24AvJsTddcnbmMetbX2VHE3xLuXbNj3SEtccrYQqN",
  "key25": "54u6UR6L24p78xFrqioCgvhSVUW9Khz5MAL1rFtUdM92fegpRogiYtWqACHGQfrq5snarTjdc3RaXMbe1d5XHLdn",
  "key26": "4BbtVLCHZZRhn8T2JTm9CfvyLDYimRquKSCVGUVa2Qt9JM6SMWn4yoKpm59kfauJ4TqoNNVzDAFANXzX2TCAzhr8",
  "key27": "24x55DT5KG5xKj8WpgyTpkw7GXQr1VbBixfNScG33WntCLmjVXee2nbZraSQs25gFuBogqnoSM78EhDjd1zJXVqW",
  "key28": "4cC6vNMw4HuuvscDqUZnyR5bh8jakdt6YouSQxyR3U5bxLzeZENNCc2as4K9DAA3j2bbEHfJcu3g78sxobe7ZVMP",
  "key29": "2yFJ34Y1z3s9LrkDQ7MMW1Sq7Uoeh2QYw5Fr1w35c9XFdWrZiLWDjXT2XFLozP2rZ96dZkrgwr7hZsE7gp3NRC3Z",
  "key30": "4mv4BSxABWbR1xk9Qix1tQot6VNEs3vb3KDMQ893H8YKDhjYzfwtvMsx4HsiLfSLN13pyYgw7QwKVqPv4E4qu48d",
  "key31": "5uTQpKFZwgMkd1h58uGXtKuNaRHEmCCKJYW62AVNH8NK2NeYYjAx931URNEX8evKbTwX93viEJYHx8bZDKsnrfeq",
  "key32": "25tX98Mf9EP6678M2TbZJR89VsFunS5jpfPtFJSDHmGYFrHkb1B3pDnjZEcaTnyfAQfgYcgoxhybvcCn9tpuEoAS",
  "key33": "3NcNPtU6J97DexLFQhqdB6MokgKs82Fr5JMVixfMUDhfpeciFkYcTfpbBpgkZAcmoD415Zb3F8gN5DDMBWj1CZCY",
  "key34": "3uhtWqXTFK2VcJp7Mr9hhqkiHTHbcSyYn5WEspz6VqYcKhuYWncFCTMbMSoQEhct4FqbKG2BPn49t3h1wGYecZaa",
  "key35": "Kyy48zzH7tsasB7VutS2Kz37zs3wF2hNVyxae8h6Y1pMU4FEauS7u2voywq6wd7PKTPXwnQjaT3FWK8yTXjcJoj",
  "key36": "4diLk4CMH2PhcwWK1oeMMxgaF4FPEkZwnFVpUtfLRhRgftT4pPGpqgjnMsBX7tW1ALLEZfX4J3Y1jp95SCxiv6cP",
  "key37": "3dTKg9Ti8P16R4opmxJmMdvzb7bwjzuzVuvwZrt29ibCKQVTnWTkociPzCXXxebHfoPimLofa1RLaAiXhjof5Wuk",
  "key38": "4mUv3T1uRuXmKbmApUxTU2kCc7S159Ka6tZLzvPwEew3WEh4Ckp9kph1UekBsVpQXsCm8fZKKiukLvEYaxRckefX",
  "key39": "27GCQRdkeNnV4P4Fvw3b4jMJHZfjdwF7qfR7EKtirHgDyBcwhe94HoMj31bJ8z8wrvuJtu2GzzN8KjE9T875Z9ev",
  "key40": "39KU8imPsqe9Mupx2m5Y8zusSPy7J4Fvg1ZAdxefZdAFsGATv23XzAHbQnaWUr4kNxH4XLADDTZojZeR1GawPAU6",
  "key41": "5CKCKdUzMyCrGYJiGivo81fTrydkM27iv1SD8dsRW9UFA94Zf5pXKpct7VgzHAMcwbtMa92ze1G1wBoqhoSc96Sm",
  "key42": "jBXH2LVWG98ZPy22WEwiQLozMwvkp61zeD4Nzgsz6yrf224Lo3TqfKvsLaRxL8DY5EkF6MrGP3pcbM3ntFfQHEJ",
  "key43": "QQmGQr8tbv9BxvM1RmHLmSATMiS1Uu6CCyyxSp5gfo2NAzT2vKhGFWkuiiLhiygZRFFCZWmg5WGskuL2XTdqCy8"
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
