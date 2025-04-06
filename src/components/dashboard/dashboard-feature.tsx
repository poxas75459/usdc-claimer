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
    "5eL5yoGK6ut48Mg9ZJcimy5AVp8hWypV852icRFTkxLNEBKbTEEND6YXqovD4i6P9wikwvhn6my3TSd3T2CnvH6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RoFb2XPR9SqB4YjAnXi8S5fCdYkRbJJyW8nK4wDoEXLrmqx5QF8km8F72iZWttAAiAnN3EgsN9ho9r6iskgFucB",
  "key1": "22sPPtP1WeqreJvJFMCEtaxohpf95v1nZGXmsvCiWdzQ6G7nZ3AW1KWCk9p6wzjpHnoShh31zc4qVxFQdpaVvqfM",
  "key2": "24gg543t8tXLwm61pkydW191gpnf3Yb9DGPofPiDT3aTDttKsABaPPVtiVh976TQDiGSPvLxpGDBotSPy7rqNjaE",
  "key3": "z9VnN6dyTabo2qhncCksDsWFDedxZ8C7krH9kgh8yuVeu5dwdSgR51bszRHJhP4jLD9mFsJPhRncFeskzCPWFqF",
  "key4": "iJJyKQbb7QsVre31NZkZHreBuXLfM4ssfgGwKM9trCc1gjbiDKjMCFV7wEXzeGoxyJoKqx9wfRWCVGCnx8fqc2k",
  "key5": "54NCF5weMgHWrqDvJ2nW8FmeCj6ieoqSywL6Wm2KzDUi2XVYTMrbZEtUU9qWCgwsgz3CBaWZ1bFt7YdhQZP26Vrf",
  "key6": "Vmo4Q5xHSUTiZji7NbvHXBoVhgonAhbjdTsgNV8Z8dheHZueJjAstELiwVjZmQb6m6r18xsd5orqsEnqK4GCVHQ",
  "key7": "24hdps7eDZ59aWeGAXQF8mE3R4TLu9ZVgXRiHEZmB1FY36mJkrxcLVoBAiPHhnHLXjiMG3qEDpVEdtzq947rhQZF",
  "key8": "CmDrxr8oFKaead4Q9QdTPos9UJe8mgsoE5fEmMz81SVnfb9CT33onRdmCEX6m6fmBsbP5rgYKu7eFZpmfBTLjGA",
  "key9": "5jzEqSLVvcFzb1f14xyJXpsfgKccPMFpY8LTgC3MV9UEx2BBDWH9SKSrG9LmdSK7vEmrZ56FEz3MrBdf5ia27MRy",
  "key10": "2yJmZ1Zv3SyKWJCdhxj8Nw5fNCvKC8Nvff2XMztjYDNWFHwZxVBim9jkTXtPXxt2pqcr5n7gU5QPHZzSZDvvtBSD",
  "key11": "5vL6ckLAGDE13UBEjDc6AybGUUxtgKP9RE4K3z3juBSifZaPYgH8AwJvq4UCnvvty8Zq9DGrPE1c82gLHSwCaA44",
  "key12": "rdceApFqeBjzAEZFkq9bVyBLfAMzcH6xajMSiwGJmNkkJXbahChYpmtTggKtxdj78wKXbfXJNpcpXCay1tLoRLA",
  "key13": "Qb9HYXePzjH3HHsg9PDACDeEqZH76WPhZHedRZya1Q4Xf4YdtsqXcHJFY5HhoKpQQGWynaEFB8Y63gBm5yUXVj8",
  "key14": "5pdzUtCeJs3rfUAoT6vX4qPbNQmJBSasftMyLRW8PDcqaVwBLducZLbSGnaYSUry1AKrQNe5oKg9sY3a4JfBnxja",
  "key15": "4gbp9WxFFefAL2av8JotsYySneUdcPY1reXwzjygeN3a82NA78HjFJaLUXJKpw2QM9f6qBhq1VMehwt4XmJaAuDe",
  "key16": "5czkoJtgcb9N2aTepVaBDcEBEUD6WKh9JGB86mRTKEuePCfgNbM19Ww3TyupPdgFdNDdxfvADFGrRatvB6bLGiBg",
  "key17": "3u1jB5g9AKoeXF5LvTcrQJtDT9viXNA7b48XARTshdtGiZED8mdgHV2Xp2UpzDXEfS1FYo7LHRmT2gFokDU5vya4",
  "key18": "fYjwb8g3RpZV5pyrNTFCvJh6NxBqoKU4dXRKSaQZF3QJyZNu9WK87LiEobZFWFrJtCRCXD8friSTt1U9XPhZZHD",
  "key19": "4WtZVzRdEwKbShGaJbwnBkV7pZFDLyhBqytwzY87fvrsQoNwU3P4u2vFqgve2sgiHhEjst1gRf4A9aJogYBkLDw7",
  "key20": "xy14D3s73CmjcPsqGzhHg1mggYv18R7PeY3eurpDdrVTuPMCiTEipg22GNh2jRZbgkVDGKghCG1gmRwNaMC5cDe",
  "key21": "3owDvr6M2Zc6XL7z5z6pKdtJawWCEQXYyiCECWjUU571kC3hTc3kqdLvAJuENH9fEaZx938cy24M4fZ8eYq5FBFv",
  "key22": "37hj9zNgGue9fKUqTBYnXZ3Pe9guuLhUbgasCsBjBma9zQLAobUKmk5wGzishMssfN91o6kGCTASsYmPYsTDZ5af",
  "key23": "52VmMk1vt9Jar9s3kkgpN18wyACit8tegHAgtepAhcD5N6fvS5MKW6oYK53UChtQjgBV3x9dYNk9ySUeumDjk9By",
  "key24": "4WD7bYz7z7a7C1sX8t6JiPJg6HeJj3Y2gHdixdb2muwR5rLHPfbKSjfDZsh9qqyU48AwMfCKdzniwmKLBWyj6PFd",
  "key25": "rh4MoqYGDuqEk3FNMrCsg2p9ePAhrxDSnveXHZH72hvU9EpvE97d6A2h4fFNyd7FruNtk73nfLz3oRh94pMGPB1",
  "key26": "5a4ysdsndHXViXSp831vKZFTBxPRn839e561x83MN3TmPZrpXCcw7bEfAVxgYc7wdK3hRvC9naviDMRtPcM7tL9V",
  "key27": "3DM17zYLzB8hQDn4nx6YmKeiUH4gp3zAhzZEDaReJnZ9St5wTNndMw5yq8bxfq6Y2jtZi7Sqs8Cos739SKoUtgnR"
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
