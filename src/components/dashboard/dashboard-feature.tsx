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
    "346M5mkbwr39Rfjv5orJsPLRqrf24kmd45RZvCkQNbr2MPuqcTgTYshcq6xq5wBZiuC87597Pyk9mK48i7NzhSQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dzsFHAvLNJA218HhdSNG1thwqcTsZZGc5EdaVV5xy2LUjuLGNPizEsgYMBNCgmN3Q8bcFxUL9oyAPJAUPtYeH9s",
  "key1": "4v47zWavNDJA36VdXgkhvGPrGFgdkE6xdckCv3RUYTbiK9RCwnzLZBEdc6NbckeDKzcsTPFhRUpDt7RwYRNkWBxj",
  "key2": "4F8NrhESG5Goa6s5DYpPPxEe8eccc7Aqy63VcV9ABegzzNEeGctN1xhQKh6Ypg45iDY1pHB3uQDJXxjcMQL4kJu2",
  "key3": "3FJa7iduT7hkSyn3huqpAkdDPACjhKiPZ9ZSDgDpJvvaLVJcPFRTidcFJQ63ATZvczTxEbmFaNKsvyMNXjGg711h",
  "key4": "4NWMF3HMNv1YHJxfivs3k2aAbjfSXySNu5iyt3j3zQ6oAjVa6Xx7Acac8VV6WsMEAmQPoiqCJjVYE6CnCwJhcYKU",
  "key5": "4rvQpuWhBn8Sr1oecqFbk1psAxZ5Ar23uS3DmdGrv63Mc5B9YM37EvRRL51KiaLEfAvjKFx1U14axYx7wLGLowvy",
  "key6": "4NZCSgAcBLA9BuBLUq7J13gwJuuaeujmkddmxWzwYFqLDuByvNhhRVbvceUca98zLoJeYjofhfsL5uad6T5CCxvy",
  "key7": "5o4KEV1nz2rgo13nTKve4KmqJ8msgAeEo91SfZQUxQ74mFnL9vkKQJnHZUzxvZ2dbVc7GBu3PQPzkjT5P6byzqFa",
  "key8": "311BNFYXaonicCXtdEoxAvYXXfVo3PePxSoDgS1tZkErfuqjd4aYwuTxBYBzRZzsRe9ZN5HKagNXpPtGX5EJMWHv",
  "key9": "2PvLnTsqjgMgdw5HpZqjpzCEoufg3KTLMAFPTgr7naaJWkmbWjkhwFtk1CqdHGAke3FqCQ32X56VCpGH79vNQ6EX",
  "key10": "35wVQ3gTTeUeAFK9NXR3qAVRNPvcgkXnop6iT1ZYpMiBn1HaewU6Z7uSkSCDcAF1Z26Nuwq6swXXctB3xnS3HaCA",
  "key11": "3H5tZwTUHTEwbyT8mhdYdZj4D8PeGehmmEANrBf6eAaUTCgRVSMmyUL3NPAmzRJYRz8LFiM3bBTNHuAoRdAWMzec",
  "key12": "yuFDM1buKrN6RzDeZVFnczBgQB3CgeEHhVZepXWe7m91D89njzVVLp7ZT2z9MUGo59zNTyC4n1Z28gAE5ia36Ko",
  "key13": "4siRNx2Dc7GypSWQDFdANURSoaWJpTGTy8MFUPbwjQtCgZGTE86W9L1Z2tNu8NY3LybLXHeXhdc8ghjKeRHMdaT2",
  "key14": "da9g6J6mox6dzqkh7wSnnq3DjRzrEi8rVeTFLdYXJ1WLz3BxvLsyUD2sba8WNdYVaSZuoo7yaBrTCs1btJULXFy",
  "key15": "EeFM5wsSuBikg2gtLf3VjhhDaHtWWjjkpVqy86tZqcB58AeQrecnqYz8evQu45miTHTwSusnmEojiVFtYVskHx2",
  "key16": "3jqea3cAaAbRjKivaL2q3fMPefcvMJS922CPM2ntocPdQjdjxRw8ymUcnhC1m66Gtr6CH32qFPEFXm8VjYwUtyt",
  "key17": "4dvoZoSdnxnd2FWCXNM1YQX4VvQuJGWk4ASpaWSnnZkyQJskRM3Q1vKBvRgSNr8Tizs9JH8mzdkR6CgMDMxNsAds",
  "key18": "5fHzaSbuMKJbcwjG1qbaiDNoBmBEEUQsAHU2KwrUWqz4fd2kiFrH4tNFBZhowpGZxnjdbVbUKojzsLwAVjMNck5j",
  "key19": "4zNX6HP2adWMuhU75aTWmzvXzgcXsChC8XSSPchdesKpBP9gWKMD1a62cUkpzep4boP9Zct3WgMQAWUD89LfY4Yh",
  "key20": "5LeZgFea2mrdtheuc2HwBCUwBuZpFEpx3VGo5njLKd2J9WcAGpax7BLca39jiqJ6YdnQH23HP76B3DkPoxLkbbhE",
  "key21": "2MyQdtDddzi4tHbFCtzcbkqioRKH6J8pwwm9vRLEEemRGy4n6tJpw92UuLRipk4Dzj7WpiVpD78LHfEmvCxrxb1b",
  "key22": "3a1S3SWXj4XrwBB5u5Jtt9VuyzcmVEZzadG9jfDmSkc8abb1uAaZr3LXdzJtD9hK886MEg6dg8WzDEC1UuBYmN4B",
  "key23": "2yGJktTt4nBee3EigndUcgFR5gxzDxtr4GL1RVegzq2uTSf8X5nNqFx3XMG9gEiznMwyWE1gNzxUvW8x5WJUk19m",
  "key24": "zs8JkbbVDg7RY7GkuTquvb9tQtc8Nog3sX9zkB9TkTmdzxtWuvKxMqJP4LkBxvVNjdPX91jnsridEF2QNCFVZSa",
  "key25": "62Srk991NXZvae48GnGrKuv91BTTzkqY8rp6FLG1mGoWukPCX4P6hfFz1XKi2Bz5WKWn9fziTF4tXdcmc82SodbW",
  "key26": "4hDYGQD7ffMzUNekkgHGCcBMUPCPikw7BuMWEXjTNSYdjHjqAezLt3iFjzaeHQbNQUgzcF3PHcapBzwEVXEp4j6n",
  "key27": "3oaBRrXbyySkf3c6Q8fP11KFC78xqVEwxCTNiMAFHhV58TaYpQhr4ahjHuqtk4ZDonyohSzt9kv57PytXoDeAK1N",
  "key28": "4zmjD3XtStyFSuuPowzraTVigHJ7YPoAnZQo28btHfxaenBrgnW5VanCkXfS2Cgir21QKMBBddsGbY3GEShU8P64",
  "key29": "5oqgPcnaeGtPy3vx136EwArhmbTSAHUAVNBXPMNwbC5yqH2gBuUXHgStXCLXJH92hCoPgr6sbAhdXfH559AzUgay",
  "key30": "4uhSKrD7h37GUuwzkPkNw2RMz8AvFYuuRMNoLG8Js3uVH2cZbHcxhvJtxCZ2hCi7GF8faYU94Wv1c3xRTa653Loh",
  "key31": "3p5ZpFYw6xHtQ3py4VrTs4GVPKn5cGwGaF7NHGrLiqMcVmcrGWGn26YoDeiixN8rtsSYVsXzL1Lfjc7RPismBNDs",
  "key32": "5cPN8rdDfF8BNMfoKr3gwTd9mwtBYzcTLfSJuTgUVDAFk9mLUkPANx6GXoB6Kf4gkK5YMHJiS4p1PREfW4CHAfgq",
  "key33": "REpmobub4gvEnYG3VMti4NrGNRPDhQ11A9m9fbamvSxFM7u54AdArhyHtxRCT57UWbvLY1McnD4qPahtLUV8hxx",
  "key34": "2zxFTxQudubM5EZ8EEVrSLsqm6ReR9WDVpU9pVyLNusdqWTjjDDWxBV7H9ngk4eKuHhNJ7LoHpDAn2sKpcqgaPYy",
  "key35": "4pekvvhS34wAxyrB56z7mis7scmBb7roj1bRhG37MeyKYWUZc2tbbeCVr5FRt6NqLZykLQeRUb6aBMr7acYXBFAq",
  "key36": "6XSfhzocvi8BsanQSU4g5MdvKGrX9xCCCmg95MuYyknWQZVBdn8qqws6SDA9fqWSfxFjvt2eADQYaiRqacSPkVm"
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
