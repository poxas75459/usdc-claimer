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
    "5y5fzTT6mpAoH3BiBFWDnUSFEa7vrWreVsjNqjo3qqZ5Dia9EvyHUSeub4opRT7Qr7bDpTRoeRpuWschJ6ZpK6iY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqCqVGjt9fZQqCM6FeUttSc4Br6vfAcNEEMsTTRGA5stiQzR2bLbi9RBpzNRhYcSvm4nNKGXzbsE4tEamnkSwwQ",
  "key1": "5JS2hwMzP4rpUM4VhCReV46vYgwX7m72YvyjdU495JTQHC4zzBfAncsi6Q2aUqsX2rxHhoMUQxRKh4X7EGjPEWDY",
  "key2": "2Q4xsWawFcYNq4n5ws7aAvWfZ8kZ9bAtJktkostSY7zkiUc7gvoUASYY9RtpK12vMXhdy4ZMM1zpkL3eXmd2tBjL",
  "key3": "5e6q4pasUS4GMVt8YXN5sHxw5dMqtq1uLr5tKCNkPMAZtRBPBj7hQexbhuapBLQZTW8gZ3aYpFJFDBgpKGkgyjpg",
  "key4": "4HmJMc4Usm358FKh1qzgLRbXRhGXogav6aoqZesxebZ21w9ArKmjaQTsJKv14PZoC8Hh93fwGMJYUSveucXcJdvV",
  "key5": "2iJPbJUczRv7VZaXw5uGp17ph6U9QUmochVGXLizDrbhxrRsG9W89z7iNAQbUiyqq2K8YyyEjAG3jp7w9DH3G2L6",
  "key6": "4F4aKAVyCEfkDPHFajoJw3Pe7JQK83u5DRnydPyr5x9SMimYrh4or9a9P11tMxVRHjTFkJcNdiGyGxiKgyieBiV9",
  "key7": "WDyWJxEnZmmGy6vu1HABTGqUtoQ3BBKDUG5AXycpXkXtLvVDcQ5fxkXZR7o4G8KQ9HcvMfXa2EwUUQu3wprsuma",
  "key8": "3iu1axi3auoHBMg2E53FmfRxSBs7r7Rh9AMy3p83VDpbSqDvEm9eTSeuKKJFsq9Ass4s2MaARLddiqayT2TWNxwu",
  "key9": "5NBxSgmRnuULh4n11sTpkS5Q7e2XXTnSso3uR4WToj77TDESMrSPUwwLi6JvaWpKv6YsGY7PF4h3XiouPc8dPVVv",
  "key10": "5x4omT3e6kA7VtvyG1Nf4RaEk2AXnXfCcF9eDVDjyvLFNoBS111mQzgymnoQTYcb4NF6qLg9FbfYLUfWsp9Sd3p7",
  "key11": "2McMgWLj9SyoLrir1486y6yBtCDHybDYdVwaakZaJxbaRG2k3y1KGPgW9cTxxuN6rEMk94MJVZ5wBsK22Wy7f2Pe",
  "key12": "5hsQ3ai4mTM5jtgaEjCHMBfgD6LnxdwZXnokBuou3gFCBa726DZh6bQbXkL3bNhmWJoEps2FBxMCNhuxNwHMfAKs",
  "key13": "4GznJ6DNYb8Xk2Ps4gNuq2cQwcjpF3124TuNL3rLE1ZSKEP5fnzwtsjdPutQwsRtuqJV4mPHbw41ujy7p4d35t8s",
  "key14": "5c47SB2gZedCi4fj9NV1QrKZsKiLsWojNd7vRZzecdrFHLc8yYqitdcUovHAXJyUUb6EAYPxMQU8Fi4VnGnTNcjS",
  "key15": "5ngpNjnRDmdkEEmsE9pQzCHHXb7sbF65ctgnSDtCRif3bkp6k9Qjkn3KLFczZjrnLo6VrEqfeazkTUG6YAmWWenZ",
  "key16": "2DMQj2avGpo4ytm1Ph3kB3R8dHm4xSrJLbKwMLhsayhkURmQD4Xu3NqBLF7FjAVmeSvDrW5q8VVoLucP9zEXPC2p",
  "key17": "4bqYNhUEbog4YKN1GpB5xpvVnxD1jtkRVLdk8ajvJmYm6GuUtw12yKaV94EproC5PfuANw9eFYwt1eCcC5bm8T8B",
  "key18": "3r4cFzXpYdH5smsu997za11GzQsgXkyLdLWsf3swFGgTfmysd3WgnB5WWKdzDqcWtsXS7bwwJUiCPCRNfue4iLdM",
  "key19": "51m8UGeXd4RpubmGv55ALCRUnQjMeryJkVNbBYHaV59rXg242y7T3NG12Utut1upVYVt5sCadjuHF873WZhZRogf",
  "key20": "3pJZtB72UpxmWgoc77ishonCKkbrvFBbZrj74GsLQoq79JHhaBTbHNPhRYfKgevRhSvMot6PGZ49YHawg4nd2xMQ",
  "key21": "2mrapMrd1nFT8MzAX23cKqWPiBLeXJ4n7PKho7FerMCPb9LWXFBwSnn3pquZazWJS5Frsim8K7HkY9yEitEutokZ",
  "key22": "3GTHLUGcN28GEu5iB8cev3VotnKWHA9nFaWD4zukcy5izDk2q3w9VgwCqHo3Tjm9xxvuopUJgUTbeLLEg4v42zzr",
  "key23": "27ZpPE9xpwQfL8LsWh8dDLzBR4R2pnTPQNA7SdSpkegqtXER4Age387DutUarp1V1yxGb9eofpnQjhVt9dMtsMBu",
  "key24": "2cWgvBZTy54wzvJEh5CNkMkg4tah5GWxrsvKma1Ewp3KX6cLrqLxrEeRzp4FKYggsMJ9uC7LzeGYWym6mQBJgtHT",
  "key25": "3wVNvrHr4UgsSisuZ5E1sBH2LeWbQjp4vu71x2aoC3CPb2DW1DrwyYCofeAP6HV3zbUShJxSe2CCYPFjTrhAM1fc",
  "key26": "J8HSm1nRrSt6a6P43L8qPFbBpHhwXVUVSAWCV1yhpSeqZUDgpkngCzqK9vVAJCfhZFjyosJ8SE7pUSETZYoJKys",
  "key27": "23ZFczCFTZE1i5fgeHEWcnD1e7ao3cGbjnwVXqRE3nCmnKWNGKVr4rST8fSbQLh8NE9byAmcfc3dk8pfFz45DioX",
  "key28": "4w1FXdVWUwhi32cRheNFCGpCfJZ7C3BV9BNrqa44G3h3qvVxw7G2JNsZK8C7hRyBHfCWN5scyYVqzDwjrBC8SAnu",
  "key29": "3QF57inaNFCSUSTaa91uh34kMmYX7j2zG3dki6KLoFBXFXaWy4D5KFwDqJHwN5pjWvUM7mQZwrifuzSawt9GkgKN",
  "key30": "5VSooSnLgk8yMWoVBf6h4W8v6hfaL7rgEickS3PVf1tqyHVoNNN4hGktY631a6Jyy4rn6pigYwymRn1pRskVhTxM",
  "key31": "4dRCpfVefLTTZgEvHLdM7d1ZNkFHZ341wRyJVbP3wmGcUyU8NiyssJz9VQt39noEMnwGb1RwBCbrinw2RhEieEus",
  "key32": "5DUivSYucCbJM4Hyuv8AAybgfB1EsmmwyGQJJLLGLAtFQbtGYkh6VMytfWdVYbPuCkdwjKmqUXTwMwP3TV98BbU9",
  "key33": "3DYG79tjQYVzWPFwNykHZrGKEMDbP4y7Bfoo94zQEv1SeSsgbgseZErdogrnd7vfWSYinx8pzKLGwpPud1EMkVtK",
  "key34": "icM2HtEYF9JtTqz9cdE224KSAhV6Pk1UdwwzV6aaprkzw8HrQYrKRki42DpVyRK5s2tCj5xzqaRTuT1Vjbh3uDi",
  "key35": "4xnHn3NHVBxqi44WEQE8QbkbbBP2Ujvq5XibrHAVy6Cnjd7qvDVPjZrjD1i54ebqguUf8cvciPVnG1ESk6C16vrk",
  "key36": "2FvPpB42qRR1sjUBbeeuhWLqEs72LKKz4KriyYc8mv2L2CaP76fNQYdEGbUYSRWmbdkZs1HPJ835J3EiUeSizZCm",
  "key37": "47vUAkYrLTWUddec5CKLCN1t1vKDyP46F9VN8SejAM6khfwuCtkYruUqLAz6v1UbNSbygZVWURcFuRhzrr9xQ4TY"
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
