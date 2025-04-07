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
    "4by4CoKscqaLvC9xNVZxB3BJUVbPLU4QXD3PzrXZaRwcVKizaouY1QvE6xeFk4WT2Px4Z3MoZr9yAi1tBTUxudwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYkRtuMYJZqLuBPXraurjaDssqgZ8wkMSfE2zLMY6VPsELx69ooYYBPFPWPtacjTTufdVJZH7ykPq4cmCN2NWQs",
  "key1": "4Ns2BNZsRrwsoaivN7EBT9eHKS9eKmLcq48FUQV5UzJ2PAqnRBWok1JFgTDpeKAucBUFr4TUYd7EQNKWmKuKbzWD",
  "key2": "G1RXmzv9kK4MymyGy1imdX5AvNntAqmNgA1QkJrnYsXmfkhtqCEGUhLPLE1VCyCPLanVg7cjAXyjMUvEbsNHJ45",
  "key3": "5xCLsUgvHMSjafEd7QSTEcwL7u4L3aovZTZ2TKYymoCevwxGVkgUFQHuyAumozmW1AzYf9wPRm38yDEm1u76LzdV",
  "key4": "Fb6jANQocTR1kRq8XKj2BNNo4paCQ4STtCa6mM8M2ncipSPj2uT3sZHSbe23tcYjhQtPMgNtCLtgs5KrMvqB93q",
  "key5": "5YkLr47Ktu1r7FuJmjCcryQNc2ooE9H6rn4utcSG4D3f3KDVUmvjkHFP5m9B6YXe8aqvLr48pESAvwwHSCAqbRy8",
  "key6": "4AMWtcwAY3hAqwX8vCyv578pqxiBwALnq25u4kwSNPttftxtD3qfAzR7p7jkd7mQp5NJxJmSZ9MHTuYKeoGCoqPU",
  "key7": "416JAyjfkREHv4CE4Yyroqg2W1FpxF4M3ZSHQkFL4bQbaGHNSj2Lr1e8VKRh7str98K93Cnqm2sR9vN4FwwcCW98",
  "key8": "5ne4bA8aqgTvx4Ld5aFH6qBoJp6JA789TNaWQnFPsiQTwA7S3SBUTsN8pGGetv1gvAtpzywCJq6xGttW8CmUMgSC",
  "key9": "3NEduVSVRnp79VJRVRD1XkDMuTTU4ekfrpNFcDfj7771VHFdywzqDVJ73UPTyejeXHMHHmfb4QoeBXvBNppa8ekx",
  "key10": "65N9W4u3rzSckjQnZ37gh9JtNivKiFQycmm1DX1M54R6wE8MHg9g9oG3i3aDkWYEd8YXUfe6qu5iNqguTNDF3uSQ",
  "key11": "5sMf4t2XJgfe8jmRDEHWaHCcH1FJH6vAXqJu398VzHjSW2bNyKmoRsVBCxYPabDCLcuLVLoxtxG5AE8wg5K5Zpix",
  "key12": "5oFzDH91CzpraqdmzgCycXwtGmyzHSSmZJ2xjWmPVQTVpG62yukj7Jhq1uZi9FaQ8EBQwDo5pksfSUjnwvSHWysj",
  "key13": "66ux7ekdNZkaa5caBZSo1NqL6ZLr3gFUPi8SvnghyZDMrQmSjH1AxQNHuiBWiKQ2ZtRtx3JZzx5DJdJ25wfYCNMr",
  "key14": "4qJuVUwdwaURFeGVByPDorZf8naAGwT1zVVgdEeb9QwkcWNC4jo1qjeeTApfLykiSVVDtouZt4wtbP3o4ZwJazvz",
  "key15": "r1imadowSSJCY8k8YuEsrEpM2mc2YzoBtAA8MJ6YgnSV9UBjqneynwhme3ipHKGYP16uwcC8YsRLwK2VvLuMPhq",
  "key16": "2ExnLoN9vaV77yTebXKZ3iYhTfH8ZuYfaaQcEAWCNHP3Fa7p5ZHFnYHV8rRefz1QENFJ1NcYy48jzrFWj4NECRsV",
  "key17": "4Dkeop4AGGw1JSeMvyCXNV4oYdaGJ32qY1GteGX9fcjioGYN6N59eE2gTAs7hDYkPmm5NhV7JyENSR3FTodwHeFF",
  "key18": "4PkT1Htd9gDbG59SBpCFbH7L5G8ZhrHBy2JicJ3r8w2n8QS6QeVjMFKgkDoSYQW3qEzz3m1jyJ2xppS6jyrEL19E",
  "key19": "4VYetA1Na94Z9FUyiUxUwa5uuDR58daGT9bUbM49DPZs2LEFXMStGAN38DXVtYWJLdz31pMv61sMKJfh6syPoDpN",
  "key20": "XA7ZA6euvT6xsH58oyR1kYoLuJwb7cbyPJxvHXfFk8dt4f6NNk3diLKqttenSeuBEbKjUqjzPAqAzBwFfjWSnqH",
  "key21": "2U8csSXVi8DMfL2nTwKhNViWEjzMmBFjnyfWRS3oKFWoCP126KAyB6iJdVaACQogJN2XejtrJXQbZ4JdJUJidCAw",
  "key22": "3ieXJaiY2eYc6gVbmZLJ4P5QQr9ME5vA8zJkA9w29rypjiAXNXTzjnq2rQ5g13agikLZdTAt25qcvE2Q9LmmNMmo",
  "key23": "2t25vwP2yppqumpLaKeAf7kUBprB5sF8MnnpsRpWaFFvj2k2kV7qbC7qxbmZmbXLJLT4pNF5jTycFRf9rWG9gamr",
  "key24": "WJ4FabTVNbqHNFTru8Yrn6mAQ8CKpKDnCy4hWKjFk8PuaJedV39s1RJnQY7wbbYBvyCq6SSViDDTZJq6ohDegXb",
  "key25": "2AJP5538km31xinib7Z3uuhmhvhXufc74pNzKwkKLyCNT3wymqbmY6RTz8L4o7CdvotEw1kDA7YwypQAirTSWsRE",
  "key26": "3aLn1KaXzUvKjZS256EbBBJR1rPbAvSzocK3JAEbmJWWwNTFTAazDnEywj1vUZ6Hxq1Q3WsKsSEmFv2FzAR8X5AJ",
  "key27": "5ZmtpdT99tPMK44QYZZUsP3NsKLuX8TwuEfwer3fAUzucyvTr94mChhdsDBRXqS1HcLYQoSxJHuS7KejTe1LxHT4",
  "key28": "4XsZYo2Xj51hv7VpJV7h1sgpMMcJ5K4DsVAP3oGjfKLZvg3D9XdUTCuB7hpmRGFjwhMBqcvypZC3e4RvJ9XDQ5m1",
  "key29": "4Rir1m1UUNj38N5ZcsohkgH8f4ga7iFrgyMM2ikKpfNUFWUhsRcYjv4mjtX7Wtw242GDvWXbvYK5VuFPupYmcpN4",
  "key30": "2wBBCTN4Db91FLYHsXGXpxP4h5QM2nZ9CVzpMKEBrz4zs7DZ8hZcm55sn4NDyAvqssgL14hq5zHE4npyWaJnFFEB",
  "key31": "1219xczTTumMjKu4bSKRGJEJuruVuPGmzFtBHa4twNVNrL6ywkUH3fpGZ7RraPdBF4yi5cf7Zc1FiGYBvG7hABbk",
  "key32": "3jNjVn4V7JUXhEVp4eZ6BYXH1mby9WKwqz9XCLNdapK7JVECHFzV3oSoT7n84dPNaqMjLeqSthdUWunYBU6mqKvT",
  "key33": "3Z8iRZxpkid7eFtyz5CY25BJqGtEMQf5PGbqGbmrmG2JcTp4Jq5h1iHQ2CkJvs2faAYY1o2NhGsVkTkafppU3eZq",
  "key34": "4367UfCJCvEUG2PhZhhA74giQ4mx1bjpRSHsyJevDzVuGYc6shxhnXFnr7LexvGMYSX46AN1pcy96jd1PDbAQoM6",
  "key35": "goemTrZxBZxaCHMQVzXNrZ87RL1vTMu7RLktyxvvWgEQy3E7ssNTRhnCoKWYU3ytxqAa4tDBkqudM3qubtbPALj",
  "key36": "4XQRvPkod4mMFvH1RDhheN86xxgx8wPdTHniht7auaFF6NrG57r6aY1KAmTBMVegKMw8m8NUjYPJhsm8kXmyxjsy",
  "key37": "wmBU2grw5FJEJbonoeHABEnCVXWsm7KXuvHCKjiykNuWTfHPMBvpRuwugMEEBJHURtUf9Wjx9zPG6TqPyChBHWo",
  "key38": "2vvfjB15Pzuh4Pon4UgAyYRBjkDzGsjxeFinGDpsXLESbNwdGziuq42ELHCPWGC7AQPhPAV7k9QRoy7Y6pHTWPf4",
  "key39": "5AbnVXgZrZ3dBgPNGBYD9F3vwxtzdo5FGJbXJrCmHoUVFfE5E2k4a6YoKDpXorLvo12YDLtKrPBcv8KQ1h8cvYsZ",
  "key40": "3y5no9pMoEirMG4RMUzK8SPmCTUgk85SLuTTbFy9JViQ3DwcUJLxyX2up6siHAxaqcUTnYjoHoCkpH8EkL33sGJ4",
  "key41": "4UrXLjn89V7C8Ta8eEJeHWRTzsupWUtKcdLd3KHTkoJjEKuXp4yoXxR9oNpBZcJT4z4J9TV5akEA2uTkdc1ReFCK",
  "key42": "um1RUAdoXJYtVDibVY2qUkqrXN1sYjs6SCy2wY9pUmyG2P423bRgx9Xwmm3gpPXGKMs26yMxN5Xv5xTQjQoKEHR",
  "key43": "66AyRAB2DjLEP2VdhFzbVuPwDFC1sRLkaqhrzqygErw9bgpi6rPKzfeSZ61k7kZNfXYR2bWuXC1dDnXwLHJMFq9x",
  "key44": "5VJ8kwvyZirMqhPF37L1Byc3sPXYKyqVEDHVsvUCP64RE9XVM81TENA7CdP81ipRhEANGbWAfRnGhfr1oroCDnmi"
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
