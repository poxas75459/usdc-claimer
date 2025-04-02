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
    "KN3q1p5QNstCYsKC6BC2CMCff5fYLfLBmtY3C5vKehr1cv7SNmkiMEhx98e5MKqV7fVD8jfxD1nnBig89DPcGLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "559Mdct7jvpYxWSLbWKNMGzdfmX6itgfp7NGME5NT1RiYrkp4Yj37fz5gX2BBCKbycMfo8NwDUqhB3KbMSoxBJhz",
  "key1": "5TFVqNd7iaHCqKC3Y5RNM395s7ZDfJjfHVoM66AMdiEjvKMMTLrY3943aP59nqVzJdMgvdtcCNf99qTQoRgqoEb8",
  "key2": "1267uE7wQ1YjNnSUgUxYTVgq5Buu2TpghxprT5K8xUFwhZZxa3uL1RWJDi5CiEyo18K8HFPFZZsyuFMNaMcUND1K",
  "key3": "4QxSKfkvPyqjzi7deejWUJ4gff9XknfZUPXYPD867iCg6bFfpQCMsGxfhaePu97X4EQAKpmPh4X9Tfdh3Z9ufbEF",
  "key4": "K7pi51JGU3kvwqTf7k9YJgdBZbBCbnkfPvCnywu1G6c5bGfj9H1Ctv9zEDZsGDSH6WwfPUYvT9gcWUkyDJEHeuE",
  "key5": "3Q9KChs5cKZ5FxuKEANm5uRR5mYojjKHDW6qMseJD4D9iuz82J33SvWh4NdcVSatrvKz44SfF9PWRfqx49k5DfGr",
  "key6": "42ij1fFBAfBfpACTtZu6QZEhRNTYLuXLJzyo9QjSbCHpvT7mzX3h3fKcdyQW4bMGafkVRTvXriPceQzNjuPKChdZ",
  "key7": "63yHtGBjBBRFcMk5FWX3PVXYEkFbiMJg9GUBjQBFDGK1PFNmGyUi4p7AnjnWys8nCGwWuzrqCNVHQHcq6wKp2uBk",
  "key8": "MUmUSNwLq4MZQVuSnvhLEdiKm9jN4QtQFLUR7TYNLaYx9SzHmoQCoMqRdxSdsNEUWaEuN3CqfE6Wwrnc29D6wSb",
  "key9": "4H6dk5s7jGQQrFHsFDTSwqgvbsCX2vzDPXpc4bpvLK6Nm53sVf3YT4yedE9rKBJX9hEG9XMd56R5c4E7NMcPCFyc",
  "key10": "MGm2mwEXVmCwKja3goqXLzE8rnwkPVb9mnLcrRWQiNJptBHdRg9UsWh2x152x812WaEhVZFB455bD8x3bkhtJ6s",
  "key11": "5XDPwwPQg9q9JCGx1CAD6k2gdMyAxU8PFujcgZr64MWZRCXf8iDebHEd1CHbDmuk21edmTthdohh6y5gjerF4roG",
  "key12": "4DKciNve6kwwo49frtygEUJHpCr4RMFTgn5xsrw5wJDVmFgTXKenkjt5tQ81cko52FP1oDQQqwpkQxC8qqPv8RHG",
  "key13": "2eYSgi94Ak4nTh5MqtyqLgwkiuSCjFWVDD5NPvLXQ2c3GbWszqfRaxzsYTXv2RDfpT8SZkFsaGM7rcg5XyJhw36i",
  "key14": "2tb2223RP4Mq5RPk9ZP1FuzGX61qdnKfngahxAXzNFDR4BaML5MbyaohEG9y2HMp6tZcoBjn5njNthzqfP2GVTSE",
  "key15": "4xjG74b8tSMz2aTB92bHcZbumWPMz7brBkbpvQmit4huwjMhFm5tWXFeTQKAvsYWwx93Gkz6z2iL5UniuC2u2VNB",
  "key16": "5bj7dDhZNndZZiL86AXLP7YoE74Qtad9nquzPmbc55bweTNn2cVmxuDa82Do1fbeCukis5CbohjDHdjK1DCDupLU",
  "key17": "4k3wy22KHekbCeKunMq1NRMbiAHKwh25tmbJkA8RHsPQ3oEkh16tQGB58sD59G5LoCtwyguUExncG73GMxBdjbP",
  "key18": "2CDeRhTxBb5Tpbspn3NM1L6fguMDjyyWatxmNeRuGj91oMhGBWmkDpsckJQdijtbkvp1SMtCXqwiCGUxDYuj6bNh",
  "key19": "5LtFLNbjghc1tkzQKDabsR1mqzjyFBpxnYiBUT3CatUX55MfYxfx6xA84xj5w54kDJ1cgjXREiuTGW92j3KGhwd6",
  "key20": "5heDt9jiNxtitJt1SExJMFkScpRR8ugqXeHbdikYP7r3CqVLjnVDaJVvTV2rSotieFTBB1ruNDJ1wkqtg41RicbP",
  "key21": "5WzV31AbDDQhPthTURoYsMG6UEFDzc4JZP8ShJ54kCEL18HxamSJQPcGxDzotT6soFQse3jBxq2UHLqK4Q6KYhuz",
  "key22": "42vf17C2RP1w6ci7dHAjeVYekJ3ViZSecYcM9QCpccUXYSZwPGzd1cp4zjjnk6wtumpZ7Mq6acREexM7Wmpg6GA",
  "key23": "2LCciBgrRGvMbn1hZTbYdxEmdaQiExDZvwnoc18176Ndvh6os1LXyaTQDf51FhRh51f6hVYm4J9muv8QbowHb1fa",
  "key24": "xpVPALNRyAzTsiFkUP6UgHA3PKZpEBkJrk57kjayxf3CmEfaXdrzESx2FGVThszJ8wYSeUpxZrLdu5XW9w6cus4",
  "key25": "28sHjhbcmjDrZaUfJSK3gFV4mDVCth2pHxtFLvg73cXVzyAR6hHyFUikERaa6WXSXs9NMpAncpQLApCV1ateG4ve",
  "key26": "58LPwAxBJMe5suGc4owH7WSZp5CbtvzhtSHYJZ3kyTVZYNu5NHjciVz8uBHA1Z6GA9Um37ZfcJortEYwh7mkFN3R",
  "key27": "SYqLzV1JBA7CgvCTwXNoSsqui3Z4bmFhKLP48B9Z6d8VSvjKUNniPSWCXBr6EQ5TjdW71V8EGyFvF8mujQekXfD",
  "key28": "2mht7TS1EYSUg8M1F8MhUAqhc2YvaLfNf6EXjWe7XYepczqsNcMLR355hYguE449pfqRQrsADUoXvthC9QsF4aGK",
  "key29": "4KWAuZ3xeuQMWj3acGcvSPY8G4vadMc7FGD9QXV653fuVeZwm5QsSjx6wHB22wMb2JsSygH7U2HX9MRyEwasKCk6",
  "key30": "3S32Ykq312BCrADPYcxTWPdFAcrEBh3UyHLgpQWSSu651jHtxDd7qrUSQm3z31MFsk63yruBJmA2NiVh1zSCan4D",
  "key31": "42LpDcsuxYhhszAH41n6UJDQp7E7iRZqCHV4UgR4kB6Hz7SV26vcZtrb26NUQgiSqyhwVPVUGtYaA2E78tmBAetK",
  "key32": "4J6Mdguw69WbBWWGrGpdC9RoQpBRQwVp4rccYexMR88eNeXhm4QFHFtmPZn2PG74n1hRx6ZszpiXNM1iFQ2DUNGM",
  "key33": "P2KYrdNeUgjRitdGWCLFHRkFg8BdGiDfUWrg6rLPrE7Q4oeX3D3T8aQKi3RUsVwU6LpD5fhdGMGMsJVdN1jMpZi",
  "key34": "4RC2qb3vbd2kFTbGf6WdoGXiuzwRhL9tcDU17mPjVf4fzxcFqQZULXChgqqR2kpCRSgr8dTRboCfzBxERzWZBQQ1"
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
