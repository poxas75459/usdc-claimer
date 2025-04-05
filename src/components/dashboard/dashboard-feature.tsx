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
    "54QqRnvWFtzXaxqJbNd2rfXKGin3xefVL41SME9z9hB6smVP4KBUodyZxwmy8Rkb9peUB3zAvbgT3fsPKxwBbGNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zi98sc6j3XmUZuKS746PK4UY1gVveBckSdpy5EnXTyP3coAu6wcpA7Z7Qe86iTb3qEQHptrkeoWtSeVRFo8jtmy",
  "key1": "veTq8ojrupfPnnofJbu5sxMiPpqwYm4btf9KZrdzBE75Po1kaZpSdvVchiBZdu3gipQg5MsoiZHbHLuciK9fQC3",
  "key2": "32DJipcXpuwLKm5cM8MWY9BTw8AtX9M3hxdhFDWYz7dkJfLYAdaGeiADAMMMyBxo3okqxy5Ra2EiBrMRFSqdb6oQ",
  "key3": "4hQyog2fq4mu1Mv2grSCsky47PqHLuQPkmthEGEFNBmUs7yrwVdezpVogLUYt2nASYrTE2Nafya12QTSdhCgVnB4",
  "key4": "4Sq77nRgr9omJeUTz1woRZ6zXchDQ5ukqKb96ZLGrzJVWEPdDRm5znoYd4zxYZpZKPnk89cffQhFgPSr2XafeHQw",
  "key5": "52YZfFcMy4sGaQM5nfmqJC1uPac9xtuuQC9nJn1RZe6nKn83PknU2ugy5u7HEXxL85YwgqAcjKNf5XtaMcp19Ena",
  "key6": "5ZURzdYrgLauzSJ9XgkGwnQmMcYw5TjGVhLx42kLSDief9TVMRwAeH6Ug9xnp7J9tEiEPxYwYsmrkf39UUh9NWgC",
  "key7": "5P3XLAGYrWXDvYzQBMhTbrUdM8C3ZBMAH3nDuwi8Kkkm6cfGxd6PdYYzc9ZEtVhCcuPpaaUhpGve4fg1C89KghvL",
  "key8": "GdHQkcziaq64FSwSRRfpSwWAUBZELgXdPo1TnUpiV7cgSzF8BMG5cYhBRfjnHePLWa6FJxTwZX7NMFmrYxUfTPC",
  "key9": "4zrhCdPhy8tWb8M8gK3a3u6sQUaGqpvy7yHi9t4Ejm8FnrKP5QCvXcHGiZFUJtHVkKe5M4iT5oCcm9gTDvTFFWCz",
  "key10": "5qqpRDbkSuZNK6WqeAEeZdvdS17XNY53XoMRdWy3XroqzjZMCqeXMh2XnKKaKEfTxTpBEk4fGEcpCDeyecyXKJwh",
  "key11": "3BnGKPsCRgiAJwTPdY7Vy7cazMEswuZGXv1LdJUD6w7UFutn5CQATNMe14o9vCsPZxN7q8uvKRPYybaHANr5fYCC",
  "key12": "5csXbfQ2iRjhbp4niEaAprJC35ymgCGDQ9gyJpc7DLewzX8dzoCnDRP9ZdBw8aSa2N7YjpgkgPUNrmCTRXAuqdXL",
  "key13": "5vLwpNmXr2N5oQ1wxaowNu6kNFyiKNAFpyVttWT12ey1JSoZQ1FHTX1iCd9eFFWuUtCyjfvoDptVtc4HVrDdQEtB",
  "key14": "36Md5diTuNLVSGL4kNkGCvopAxmQ3YkNFqrDpEWTtpW22kgej4ErPhGc4tBvwG9hr45oQ5wSbV75XpXUqxQo8v6g",
  "key15": "63egxHV3kT1o8nDCt8XSpnLqV7nGhmokF7BCMaDZcvhCgKMb4o1n81UrXaBXqNbs1Bp74RBE1kNDrsDPBcj2SMKv",
  "key16": "35nUnejnYLPwJL3icGAoUPiHbWG2JRTQ9sHmoghCCTnNsPd5N97NQKjwyCxmC3RgM5MJYepPxEHAqcF1h4yMFgCp",
  "key17": "4vqX8NaN89awPYdurUQ8CtctrJqqCSpVQgX4R6aej7oJTtP1VTNzQYbXMewbdqjZsiLV44oRezD9TosWDmwD5uDc",
  "key18": "376eyiFyr5NVcVDcUY6MAosBmmegYG8mMyThmpfamiybeQQvUDdQ4EJeupgBYe2388C8ttzfHojF5A6y1X8n8buj",
  "key19": "4rSPhyybLsEy5TsyGjt9Q2KXPnuGGNVkYYRLKVkgWRJLjMLxVNLbtpEni5xxDzbejDGgbGsaSuhnHpVM8CyJaoJ2",
  "key20": "MZDHb3Ezt2S6pC4HiVkDj4vXwYwCSmtvasN63xrTrEb8DS8YK3AF6Dr8tcZCmZVP4ApMaCic3P5vBUcW8SXS7jy",
  "key21": "3MFdvMdxuBcmHFXBYGD38qhkb47Q94Td7FeCJX11r35u1FLE47SCPBmCSBgT9sbX8E1vRKn2WXVtoTE2uQ8GwrbR",
  "key22": "41dGkFfKoe9GCrYzyBfPy7gMNU6kM2CWzjaNeNmit1sw1VnXjaHvE5DEmmcHrHfs7z6AqCvvEXJRhMoVt8Y9JcYf",
  "key23": "39XkHJ2M2dVFyALMB4Whdw46dus7y1pwhdBTUH6MqNQH1wNpgQcmEE6S1q7aJR6tQQJHWr13NiPwbFPa7ztqPyk6",
  "key24": "3J1BbE4H8xgdCCPjjqVGZAs8dn6AxE5pGAsEC4aDuvfZmF4nxA4H1LdbXTxM1DrmZtXUESWfd1D7UhfggC69QTE4",
  "key25": "XHQNCin8JVmtYHfMr6tKeTaQ7iYTDEz1hjyQ3RR6aBoNB6z5mWsyKr19MYLRbSRokmgNPtTT6vjVvBjEgdykFv8",
  "key26": "4bLSxP8AZdtpu9uTkVJKuDfUQKq9tSMPGDipibQhaLNRSEStCb5zQPpW9x85Sn3kL9cXrAYyj6zar5jnAVq3ZcPJ",
  "key27": "2AMiPxD5BsdybPbkRfDjTBu4AfK6pqLWMtiBKezCuGZuF1yYEypWmUQ4WV8qiSYmCagzseMtrame1mnukZAwetRN",
  "key28": "2cyHsLJXFdGPAUqKj4u5w4dYPEEEWhhraozwHF7Z9g25RCHL388TDtj1iLFzjMAaKSjhvwEsXjLxk7Jv2qKaFU5V",
  "key29": "5pTnCP715p5cGLwawxeBeyrLqJTe1aEW6aNH6NXiBVbtQ4M7g2B5ar5HzEtadhfry2cSUvoGhEVdKm8bP13Gd9VS",
  "key30": "2PBbAUwDLRR6oDYCqPiByUjNprJJFthDBMF1vpcgvPpUkgWD8W1ESdNqcHbi7MqiRvtUVqfCAds8You7XTQWncPx",
  "key31": "39dHQ1cTVuLZnn5YPamb4qf3ARAkAuyNgKbqut7pQVtXFjoJaTMLBwJzKFdmCNRUzafiCgySMqQypYJLHFyzK1QJ",
  "key32": "V4LnRzqAPGkGfAPaPXDhf4MMF14b6iC41jAA5WjXqxWzhe2cUB6g8UAsnKE5NmRSHEKSiW2wGZKgt82A2wL2fTH",
  "key33": "omREga3YM2CruhBPCGPXvpDwDw22zLmFt1NkWMJLjnQswAj1Y38VAGn2k5zDCh3UnLduCwyZxTZGDR61AGNrt81",
  "key34": "3ds7bwks11v2g39yT2sXwd9DdW6CeDHYXdsY2dtW4wAZNbDpAnW7dA8FAS4i4yiiBghQvAMitNcbLjGAAWwLYCX8",
  "key35": "52C4W8i68csfdQz7uCGrMa1vxAPUZ3UbtQuTDSoJyr8RHYqH6qMZGEBq39oWhr33MAhQCJWZbkBLWq6eZNX3s7nW",
  "key36": "9JEZZMQwAgsF6xPYjkUXQXv18Q74maFnQgQws2MHTVgcZLdHYTNVPLM1jfSsMDoy3PicWN8g1tyN4NuigAtptyG",
  "key37": "4wb1RXM2GkorHd2tbMkvnzijgRXZa3abCWpTF7nquEFamtYB7BZJBn7gJupFJKCD1xe3d7CZWHTABZd2MeBnQEnv",
  "key38": "3Pj4MvxWZLFKKyXwKRUK2awgSux6UnDd8qDE27WDcDLPZN5ykXqhVD2osD6achfF6486XFfKrwymbWtKAkjvc7L2",
  "key39": "5VpiXS98d2yg2Vzfj8Ks91qVQtRHBk4CAMSNtCCDr5rtqmTXirRAnxMxiMxaRhqRw4AqrLV3KTKBFaU1Yr3Ymqz5",
  "key40": "4CqSqjwCAp7Pmz1rNVNqWrew3N5moK2zFusE7D5iLgYVTUMTa8nbp9Nnbpaq3pgcegXbTMkN4qDTtpz5tybgSTmg",
  "key41": "4t3jmgjN11Pg1BrPE2L1iCmQ938Ymm1zA4FKNHyLJK6dDRs85ZCM8sH6FvVvS7z1QvMUgsFHUL1SAxUs4ZQXf7MW",
  "key42": "5guLVMwe5Kk6HNbzfZtBiMtZ6qhL61DtnFN4fuEnEFztE85RvYKo4e4tAFZEtTupN3x48kwtDq3h2MYP4As3Vtv6",
  "key43": "4DuKXzLcB8QLbqkw4ZgrG74F4FyrCWe8vuRdwm8mW3yPubQCekRAnY4XLtBrx1PyZpHDzmijsJMVhgJU3XucpEKW",
  "key44": "4qfxgm6nHqEthTgSQipDhFKbrGvq7VuS9vm3TaoGdHsaHPPyWF7G6Vv9yV2FDWgHVsYCL1NY76fziyjhdVtC2M5v",
  "key45": "NrEzfvY24BDQb6wG4xhiZ5UCr7sLtV827RbGnrhwABEQ8qG2ereB2NVuovwVQMsJzd5k6ESnakmnKueaMLxK8Xw",
  "key46": "2BU3e4d76AwHhaaCiugFp58jFPH77kMAn9hmm5T9tBzhoste6rNr9ixRxsyvJdDZSsd8K6LWRtXjER3VRvHY3haC"
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
