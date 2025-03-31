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
    "3nc9G2BrWMJqHtSvjmDmKaebXPMDhshqbp7ytFwr4w6ys7f9okVUpdQoAsEyjCfnAWAN66tf42NqJMxbuAqrYurb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2BCw57mrMfuW1WTpZNraADkrwpah2sK7GQojanPE2fm6Nyjr286BQqu6NhfTVYvnQzAA4h647QbVioWBiDQ5ix",
  "key1": "2389bdSmhyd3AeqZvawL2KmeXmDiYKvfSVz4rF5uwBSmTYsk4NaPB3F2BPxKXiLYJK9SqtPAU2YTLkYNhMgb5AfX",
  "key2": "x3tKsrUvr2g1kF3RDmmxmX2jtekbnvGQZtsaboEvxqQzRqZqc97qtzCDA2EhRH3sA9dM9FQMtdkhKyRVzxfyqLx",
  "key3": "55kw8CQGxsJgpRRUq761kGKQsEzLCHUENaho8i8eJeGZsLa6QeR3S3hgFxZ88b4scsk3LhDhsTu3nLjGm4y3pyJV",
  "key4": "3cTcSigUPSvxt5YfEQHdTLoMbr95JwMK9prEgi7s8tYDRJt4R7mvnfQqkZwrC5rA5bp2aSvNbu1sMPjBTtfNn9Bj",
  "key5": "3q5sJqxC5d6LN7ekrdkgq2gzHhGZTDGZjMEmRdZE78YwisusqtbnV6tPmKSny6N8QMQVY4p56eAttQmG2XPAHpLG",
  "key6": "2Dh1DU4gDeQUYbb9ePqcENEGX6oM3Qt72rCZSZJZRThb2LwyYcthHGrKwpVR7KHkcf9QRmvPCaEBBhMJiMAwaqgv",
  "key7": "43PqkDqVedX8YYd424CNsGRKQQfhVWoQBdqqiLU8c4NTVgT9fHt2FTWFf74ZGrTWpNk755Lv5xuH6vjCWutSL5kW",
  "key8": "mviqjKk4W58ZFFztr53rNkzSVi2gmqn4ChYTVeTRTFuw4po31fdipomCVDnnAfSFmSwDo7K3pbDJZJ7Yi97Yf84",
  "key9": "2D8xXt7goTbHsmjsfD1T8drnMgvnAope3PG2wo4qWn36Ygku4E65LbVrH19G7mxZ8k1breQCjLik3mpafBQ2PkgT",
  "key10": "3xdjEqgNkEVnQpXRSmNqZ9ipUxMPqXihfEkDhvnRfxFWZtm2dLM3Vw7XjxUzQjrSwbCDcsNvQ3snXsQB1iRYgRot",
  "key11": "3hbNinpDSdcJbEsLbjyHdeXvgYLDM3f4BxZUbCy4vdusMFgPztXfX7evv3wnByrJ3F9jnZVNzjoYoMrUDYn1zbRo",
  "key12": "4T7FBQVhHk2irPjTjuz5kGEM6Ck5L9b5PaLKyBidVZyC9XNH2vBRwhpUsDdQ7uuZTP98NKPauSYRDYUgJGdzxgP9",
  "key13": "ccyeFmmQDFVmEBmDm63z2G2ELaMtDNag7JpJXjHkxhgS12nfgMcn394iNoVpoPqHRzNTphnvaKCj5aZnt8hdDGU",
  "key14": "3h7mZ1j7uaAPdF1fGWFDdcwMUwFAdHEjP7pfGDKxarrYwVSz26aERVUGNTzXPLg46uSLF6714PhVuWvWDFCasQ8E",
  "key15": "3MeX1BBsa6V2pCkB9qqt4cKz2o5TL2NnKESQtwYKrX3CkySDSdfp9KgB3F8QWkpxY7oEgxW7U6v6RUUgSox48AZf",
  "key16": "2tJ58sj4mxvQ3PfrGANoaXKPzirnuM1oKxZPPtVLZaYd1AZXNayADDzYvdj5ABQgBGDBcthuAGJxnJ967jdfXAUJ",
  "key17": "36HXQtB1aN71o2ooinSvc9vx3hvw69E6RTgXXF945qrbjwoHENGqgL6mdbUXZoYANQYsgkVkQjqbbdYULira2VeD",
  "key18": "6SFFjBMtfa6Krearh6AjptV1CC6znHDbBwAsNrvFZJt5JpdroqFsT5XEN491PS8LTLVvfvwiSNjLnguFPtaXxte",
  "key19": "hFRFfchpNQ72y54DXcFG24zfPDy4TakZBjAPSGkFoWAPCt22yfbXdJ3TLvCGy2s3mZFckJM6SuMkXPaZBbpU6rC",
  "key20": "3cefoWNPfyXCwxyAfUmPZDvy2Hy87gHuVox6SwcthCbwT1AvrgF1gD58V9383nmd2Bhoer2x26y6xR71iPzKbGy1",
  "key21": "3MPjVFXfH6bN1XaTJKbSTJxyKy85UFt7LCETHPDThMUpnVJuoiz4uCvgbxWYoqggpKUV7NacRwXbJr7s4h2HerBx",
  "key22": "3aWM7LDRk8H11G4EfxyQHvoaPgebxdHqCXLLUzMD6ve9QwkphCKtF6LpZWWdA9tLCf29F4VF2jeyA57mViCu1fy9",
  "key23": "XquCd39fEkR2ESuWN8fXAfgbtxLNABjj7EZjzmv7K3MnjYimqmF4EfCrrKteKyt5UcWm6aSQrWTb97exTtxsaZX",
  "key24": "65JAmYZbNGinyxmBsPdPasRdBcro2fbC95Mf4zsHRzsXXC6WXV1aKNHMeGy46aasFieC6w83FRudNRR5V3srTBL7",
  "key25": "5m5KiztoPquuFTTgY3eAg6m4kxgzjGHvNK9ZshDVLL5r8XuVTcDtq5SCz5z5ZgRPwZoyiJsbfYwaD18KjCLELbBS",
  "key26": "58cMzddTUUyietZMb2unG66Y5kr1dbGgWgsyqLJMnFm5pTpS3h3psRbSsAsLgSaqPq6Undv5PzxZH2HH6arzS9qi"
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
