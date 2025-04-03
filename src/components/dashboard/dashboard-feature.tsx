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
    "4xwS8AVMu6nd5wJ99y2SH1nUqvNSXzT7pZaaHZjyFmAFk83MnKhgzccAHZjBWuqHthmWyuwRC4mAhacT4qRXy3nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36BhJ9emfyamFgRYqwaYduPCrRD72WWEDZ5qqBykYcMkrjQqgzUrgHmrTbUYUpYn5n9xkTMq8MiQkYhU6KXfA78G",
  "key1": "wceLKTh5KfkwcgjJraa1ffaD6o1tFknvZT1vP1tmNdrLjb41B87E4uUWALzmPAdfiC9KfJfYqKeW4ewjkYZ5DYf",
  "key2": "4ShVms5XbjwMn3UyaLibjrgXwu23N8QprKhkTexBQNFjyDe3Py5LkRgm3maDq991VgEV2beNwg4bk98nVi85T6Dz",
  "key3": "4ExoM6h1gxcKZXx8BUNwejcFafxHPtKkL2sFM4JfmZCWfPGHpDg4z4veMZ62DeNKUJ6UEBCizkL9Ugj1f93FXynG",
  "key4": "59Swn7ZL9vEcBoQfmhYwfbSubcdPwscFe6fuiSjZ1wK3YatbFYfemydSF27A8NHSj3MgtNvxDASEQH149yfjfaPo",
  "key5": "2fqNkWn92vNaPVWS9Kac5oAZQCzv12qYEAabNLpSs5hVCqN7hDDTGUKpWhoudJnmin7DohpVL24LpGWaHTSkXatj",
  "key6": "4P3yamcmUkhGE5mtGKq2Bq2Qc2X7zVvyu1r1F6yDFywtmcfQRe6KoHWe9mDRyF38JEUnnox1JBLpGSjJ63UKbK6V",
  "key7": "2EwmxSz6eTqSWjxGzCPUFnDpoPQuT4PFE3KoazQFnMLv8DX8R7Tzx9Z2nwSKF1QMtg59atqJ8jdRBidYRL8epAj2",
  "key8": "2dbNoDcr62S7Xfrx2sPC9d1358By11TJsSCtn83m5yjQY7QEbaS3zAkseE9jiXDVfQeDiiPD6VHNLDKW92h1nVqc",
  "key9": "KZwGFAe4vW7bcocMxnypTzyQH63Y9L3TrP7eyT6ZXQs5u24m8viLXH3AeHK4KTQY97cit4R3S7LzeqT7qVa3YVy",
  "key10": "4UpLgLgAGE4PCfK4V4yZZEvPMdvnUxDD39yNYPrKbBantnr4LBBZDr3sVML6HP2D3V8KgHNReWrGzEZvJEcYL2FT",
  "key11": "ui2sqXN6zpUgQAYwkuvJNxQXFBZ1NWG1KqSdHV9ZdHfPdXHxsrbQSRijURr7EhskqFzFYCssc82Z6yqZhW2cVqb",
  "key12": "KZC3tcKZxcNXNnsX31QXeibGzaPpJkhGuF7FYszw26zCaFpgqoMEFejjrTkq1859TnsNaVqz9NiMpjrNaGWqk5L",
  "key13": "3MVJHucY7ZdS9pATYBuTD7H5CnfUcixo91nRmF8eyZ4dsbys7UzQjCLZ2BKA8uxjZqpJhWmHPe9b2q3A2Ngptqui",
  "key14": "469Kxr923Ab6RGC5FuuhEufBYFwb81UcPh2Ez3LqFvwFRh9wpy7EhFs6vhhELCVohbkEyXfeFKuKATTn1U7qN3pz",
  "key15": "5Dg9UumQiyeyBgYY8rzvTiPsjFfxyVGAhNAjeNMJMwf6m2tqcSPvDiS5bbBVVQHEa8NGvAYjhiejVUySDFfoBfvj",
  "key16": "4Sjoq1vEBRcrVaaRhNmNnSXPqRRqg9rNy813AHRA1Dmw4KspiwuG9FgA5pZKz3YioMWMXWaXvWeZpeSTdtMWwt83",
  "key17": "5EUGRo8dUujiRxVMwJcLYDL5XEZN4DbVyNbpfWfR7bRNJXJq9sLGbwJZMthB3hyR2AXaMWqahjmacw2RigWBg3Yt",
  "key18": "2inCS4rV6pEUiKPG99T8F2PoYhJ2rtiAXgrNavmgrWcfKQ6AkCoGbUSKFRSmfJPBXewez9C2aHUGxKU3mVFxqx5p",
  "key19": "XXg88mKEznFEDUJKGEBRfdrwoDWjWe5fHYY5EiGCWdV8kEkvmpzF6hjo3zFPr5PcgxkFD7v1a8vMivxPjgpzBZM",
  "key20": "21wrE3pmy16w1DXmAmUSB3svmANPdh4HftmUk2zaYazAsGLPq94LYHPe3ecTLgqpRofryDKouCcD3eX26H92H8oX",
  "key21": "37kDPsEQGd3oQs6bnudBeTNsjb2mHbt9wdrfbsiprFzXhVsaEPUKVjUXXZFGjejoB4SsCiQu3bqa6EoaFuAMhGj3",
  "key22": "4ZWbA7DWeYUXFT143bCon7keSjjCV684aimNnaWuMfdkfDztQxydsM2BqAgWdxRKRmfyBA9QQZhYt2G3BaBTPBeZ",
  "key23": "4UXsWkpdsNDQkry8QgjfaTiYKbsQTc7qLt5E11DcLYMbMheW4qnfRiPLNT4mW3mSnuaC35amsheHfkZNuy9CE41R",
  "key24": "3bDedMM1gMRoTParKtEMtoMkTsB8Ag9QVEqvtLja3bqfVDR2ZwcwmXMbp3VZMhea7ZHUeC1zzLPnGzSPi66k4jdq",
  "key25": "2LsdueAnu7BccpsceZqu5uGrBgybpoDhJnr4iaWEj41Ftfz16hrGmrhkX94SyvxapQxhn1pbqe3VKYzPhtxXUC3M",
  "key26": "58oYPoCfQCtFg81xJUUtzdSCbdGP1dghevjdQqYCXzK1RUtN5bQRAAg6e1MMZw43UMqAM3yVVS36zNYD1ZC3itKL",
  "key27": "3PBqagHF4oVded7npV3nnpF2HzcAMc81mB2fxfBbFVUQjAN8AMTVRZvXJtSdYvXUU1uAntpyNPV3bQH9XPCMW2Mn",
  "key28": "QyhDVN5vp1PYQLfhvSzfLgvRtjYYLtZYuzMuQRD4P3rNGft6Jg6ifr2BrQ9R99YHzeDpNfMZ7qtvqbsayca7cok",
  "key29": "6493NP7F1SvEhBrB53MHyFUnHtMk64bMewDabq5TJQkh25YfT7E8w5jjk8HkAmj8Yits4qDF65fpMSWaP5atQJaA",
  "key30": "3b2mLUae1sNbrwC9j87tjK6uWJPdJkdquZuSBcapcVrec7VAhFejCRf3zdHokoLD2S3kBJpawNFpKmWvT6pUBvZE",
  "key31": "2CHbcFf4NU9z98S8bmXPNEkDJsXe3gTCJZPTM5ZgxRijdk6MSGZFJ5kCyMyvZvY9ozac4mRJN3pfGvsKBmrrRwCD",
  "key32": "2PLJDQV7oNv58LaAWyLyz5vR8vCvrseSpe3AssLkWVpitmE6jqbRRKVtYSYEJ9n6ySc8C1AU3V933tG8egk2UG1G",
  "key33": "2PwfZBZ5GtJNqz4DsJYAFqEbJqhk6da1Z9ao9bcMRyxVUCH55dQd6UwQDiYhhuxQuQJeCWHKQWSSnEZVEAkG15wZ",
  "key34": "3gxYkZ8pDCobBCkD6Xf4zfinHUUwK25B6vnYPELdjQMRvpY7TmdoyWtrsh8uigbH9oFp3A1aJBvRMpD2DFZggzSC",
  "key35": "2RZKSSEP96Sy7PUwpygkaSjdiV7dRGsgwrxc3oKZASs2Lt1ERecWSTVd2dMvhyazuY6y7g62w8A79nVjLcpxT2Jh"
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
