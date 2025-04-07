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
    "3q5FMn6i1TKPeBr1w57JtXjYQcMejofC293fpV2kyKPUcnMXDeqdPm2x7qHNNg3HbAQxyrm6d3VpK3TogAhc34Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwvHVxBYdsfXcy1smENEFvR2tZ53AkwWuiCfKk995gYNcbBaCmmghjqjXYZZPAthh469rYmM2ivM6ZQQikT4hG8",
  "key1": "4rr18HHioawX6w6x8TGMfLgtqboRZoNhucp8A7UDuKi4FTTRgN4VYf24KTum1iGZyTzX9WbppY6mZSsAgaK8Aw2v",
  "key2": "28nynT9e1Jh8RDRmi33QNQA62kBC7ZisYUNXnEYtipTAicYxZL5uSQAkbrnCFFPTe9urk8sVTrDUBSTmCDt22thi",
  "key3": "3rv5JSbi1vMfK5KBJtVcp3GDqqsimzgoazRQaMHFohg71VgzMhRCy3ZzACVPKj1m897BxBKAdmCiMn18gHY7yvJV",
  "key4": "5qYRLCV6v8RTsFwdaHcqfvPUciNyzAyLGBBSqYPWabw8q9zMC8vpM7rUJNJfeRLsraSZtmZjbyz1jCKrNhrK2ddJ",
  "key5": "NEVSuLuhRnXq7UCKVHkLvrHEW9XbuG71twuQths2zWt43kVZMx3TCTq5xu9Zmpt1tDuE2H8yt61eCxGU5pB68UJ",
  "key6": "39AUdqvis7REXqyCwQNPJ9axJn6WgfAKy984JDjkfWDJYX5rEtCUTQAqsjCCL7fYgBjdo3UmwmE1feFw77mkv3cu",
  "key7": "5amo23U8VbhhKJaSE7MMPNqQEVmsGrqY7BaUSLYYvcURcsVns4kRrN155kXtGpg6JAsgQQUSvWbo6yHheu8bgzHZ",
  "key8": "2qmwRrT7Dnmp4xEWk7nMY3siuEQYtXhuRekEoomhzdexhiXysTYdCBUYYLFWzHk74uMzGZqwDptjqU1x98PrwsNC",
  "key9": "5C33fqjohfLKdN4ZLWn9VRFYmnKUiXsPabccJwcvZhDeSrCakidXe9NKyhTuwJonw5JW1TiEx6oFPYr5ku7LVNSZ",
  "key10": "43nT8wTop1FkTy9MBuYrj7UZfsKJ68iLoE5SLTXWVn836QNoTWkKB2JZq7SKrgdwcqrzjnHcBh5RJS7nSc1dpQYQ",
  "key11": "3HjFKGgpBqA6G4vzykSxwkHFrmJccQutND1DJpMyguhUmtSFKwSoaPNgxyPbnjdy5ysM4Mcgr5juS5MTZuPTJmDx",
  "key12": "5wC5sdWXyrkKHBPUEu2wKcHiykHksPjyAQ41ewyNNtEwpwEKcKBoo4bPuUy6qhfGURmscSoLVWqvSJeGzyTGsKgC",
  "key13": "2WAkk3FmMXQthBtboz3MdChGVRQWkquxDk6Rf66xY8ynxrPLibwcvwD3mfo9ki9ocLjXzhp1Pmiq7ULeRmq6tsT7",
  "key14": "29p9VWybekCu8mFseWiKVSmNiKHSLCTV7yhEw5zcpCkKrGGTcgLrNYksxKNWwzF6Z3qcbjZYccYdjdmkbprtRzjx",
  "key15": "4C9GMpzYkdKD4xKfmrgbAAYYi4HFxoFW1R6YvrTGzm8uFG5pZ1nXzeFawMZvbnK4i5Nf3W8Fn5dK5a41xUsTa17J",
  "key16": "3Hyr3t7vvb8GqXrHEGLCsoYhMvXsQtrzKct2XfeUytHRDoEUMWrmfKUkgCr9TvHgHfMmf9bmkAVSUeUAcmZQsWKo",
  "key17": "5xEGYPshmxzb7t2vtEoCnrmfvpPsRkNEWsnFqTP4CsnsWdLEGdZpSm6rfcTBCz8mzzNuAuAiCBwb6MnHxC3KKmzK",
  "key18": "3AEyECRaHMxk2V4oxyQkeRnqr7hWw719aCqmyzHBtzxrKVaUFHv8DsdXYM2VYX73NRkFi6FRPNsZKYbHSGmpgfqu",
  "key19": "J1Prm1hFBtFUeUVYgGFJKN89J7VyqCo9ZpG9mXVoZBin4Byp1yoHvDH1eJu2PwEgHMyhwSGLuy5cgLTapuEN1Ku",
  "key20": "3svWFUzXMwhTXhJsBYZvGytKGumi6nGQ5z8KPjGwPY6h7atPraiLqyjF2Y37CX1V3AQdoDu32DPhiZVSwmwagmTL",
  "key21": "5Nih7ZUPe2DbiUL7VA6so3XDqJt59cc8azd37cyqFeojzotNa5fTrZgRpZ3W6yCr1zhW6eFFyMfqQtpgCYK5Ueot",
  "key22": "3ZBV5VjFUoaxnjHoC1BpPgMTkpSfsSCuhwrwwizvjNYy9LJeArVwBVgwNeGkd8bGtz14z18cN9BCmKg7biSxdSjf",
  "key23": "C7QgDwG9zTfJAYC7auVgqTLGSVVafRUUx2HzYyKJX8CuZ9wFneG7wvRP6HhZ6tc2a3wuzhb6XUgqnJSK9HZsUZg",
  "key24": "ogiNQw5cxuPJXPC9CaSPTRNccZwjthpkqhXWSnCRfi2g7XY73mZQAEwtyLSwfZY89khDiPGo5pK136ff1ihrBx6",
  "key25": "35GWLAENtfPBugFyeV5VaPJdKE1GmghhdPxs4ThmjYh2URKMomvieBQ8AmcqAAfNrHmtv3YTB2Seb7xqj9H1YkRQ",
  "key26": "4BKYnTsYQbRDXugajjRCjS1T7LUvsCWh6DFENxvWobTnW49an1W4Rr1N81E78oTEczvY2J6LKRSH7c76VZD5d2qC",
  "key27": "5MTUAvxCVxVYoQsp1k1J44bbr1ejq1yT7FVjoNJ5eZXPdQoLhVWGPvqF4sNUi6fMYKyS5SckR95R6eGUkmxKkCkB",
  "key28": "ihmwgtBYReQ695P8DmJjpgfAk8MYJXJGAAcoVaB97q7SoaSy7LbbxCD1V7y45mW5qCvQgVGdTqYf3fb9nAyHZo6",
  "key29": "3bzZtQGsCjLtoHvue2EvesRGddajH2EDvfJHk97ygwJGFKD2sXmKdHVDzbNv24Gs8gUgy3sLWFvZx1ZbqztvrfJD",
  "key30": "58aaNXRpaWReLLSry1wj5MKgQURu86JbM252NogU4H8ME7JsiYpTsvcj8ghkZ6mz68j5Xcd6ubkXAgAxKV2kq4E3",
  "key31": "41WDQEGb6R9ABTHmobdBff9N1jJnD46mmcPQvBBciHKTj4H9dntkux3HM715vTdzR7D6QxWFnKiZNBQra8qY3W5N",
  "key32": "4HP2iCrqM9YYHHsr1CxW48gHzRwovNPyP87yTP9XL3ov2EhvWBssuyb97Akd1NAQmHz3Tx3hg57hWLVi1JY1jUiS",
  "key33": "2FASDnFrRvsFwwjdHPnfAQuGGKpsRrXKn4bPdpg1jRrDSB1DvcxBU3pqZ1vFWojd5gqUgDyiokgPi8e1eB2qGdj8",
  "key34": "2iVXEibpbqfNugUcT34trY5PWd5gPSYuR8VgC4Ts1DDDiW858Ahb21LJJsmhzTFnyuggQwtfDc9nBE51DqYfvn3Y",
  "key35": "ga9ZaRHvgWVB3X3xBU9hVtvS2NZuMjQ8LbW5saM1rVk4TBpg3JWntdoJdA8nB7nBk1DbFGYnXEnimsPWxzGrNFu",
  "key36": "41swD4cPHRh5vqaUHcxNx9gjYGWbT1LsFUdYc8ucucusZXC1KEhkaPWQHSizFk8qnCosBBfUXBFUpT8oNW86dQHc",
  "key37": "3oFpv85KdPpi5ADNZ5PSF32YnfH69YXmzqhj3eSP1Ew3ggW9WC7BhbE3wByppxd27swoBeZPrVCeeDX5MHAPNs6q",
  "key38": "3fpyKAzenvgDQXCX84ngXYN6icvVTf1zdT8WGkJ7rj5AQHyiq4f6tqM5AbjvgWkaeEHG6joRWAtuxeRL7RdiEVy3",
  "key39": "44q8QrFBWuYXryyprQMHufC48c3Rvr9u6Q2bTAT3t4AkVsy133xrJSrw5iLsgF6oTfybMjbuLGddXPoEVF2merBm",
  "key40": "46xAxPfSZCBWWiqAstF5Xb27YVU2j3xHETY8XTKufBp6eUbaZTKLkSXiHQc2Rv9pu1Rk2vMtbrer7usPngPUudjY",
  "key41": "66H8VrRhztDSSUVX72wXLTea2T2CJzido3bLUi3btxLrJdgtJXiQ4t8Mm4ZFDarB6TEkeiU5BMEpr2ZEhiSTVFJA",
  "key42": "nkmuRt3zRSARvGTGfdCHtSzFQQn4rdAaAtJkSNwwiFELsVutqye3ePVDZUxxUYvtNAxGrtGCxA1S7UXTe5VQnfm",
  "key43": "65FnmuKRh4VGysmhixTeLq9a9jLYrswmyVHtyeok5N4GBCkLn2UJhygZQ4h3XT2bAiwSnQxBponqgg3sGH46SaA",
  "key44": "4UKZ8J7HDGKe6SmED8FJfwckg7WJwSMYewXAg7MjG476veRH9NkqK2hydFnLTDmPH4XdbkRAQq3ZK5n9jcJ8GTXC"
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
