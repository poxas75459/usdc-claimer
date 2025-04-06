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
    "5ZzGhNUpbxwJ1pw5MnCeYAsGFJ1oqUsuXj9JxUNvyFzKD8aUMMFjAz8mpk6MKpxZ4MqNhpJewqptKG7w7vNVf7ib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62A2HS7nwURAsMzMzMzHNsGAByDmZuhpXJ7dguajsGxXrF6iWKa3hL6KiA1XRZAaMeciogNSKS6dTwpycaSBBdyg",
  "key1": "3ujj74Kfq7MDqsYRXjPPSqWFvfSreLeQXdXkL43WJy9PjWWEGnT4x899xS6PGwkowt5MbRcyjdKjCr7Pz9rALvpZ",
  "key2": "38oeGFft1UpXCJEAagKtu5U1x6TNVRp3Qw4JqWk1osK4BrZDYto3vmw2fbAeMGrgH5YUPVFnPject4k8w4vttF4X",
  "key3": "29S9piF6ZvxsAWbVe4L8Cd8eqtv53xWkTmiPnoBNFDHER37ZZybFiS3SZGBvqwGFH95ADTGrFkV4TA4p8SuuLfrs",
  "key4": "4QvutsoDbP8zJyVZUZQC13L8tNzV1X1WwA14xM1Ym6WQj751F9bnDUVcMeuwB3anUbBx2BDE4S4u1GfUW2mkZBji",
  "key5": "CNiBFhauPqXeDuf7iFReXNodYViPhH2MGWaFrYtnh8fntSLQc5cvmNkAybwX3zDWzCPLjCG4zBRtHWNSXUxkMKw",
  "key6": "RR2h5NxDBmitE5tgHV3cCaSYRQwnmfiSd2qGUjikz5fi4ZsFei5tpnCEmbAEKXsZcd56gRw4DMo1moMBuepyzLT",
  "key7": "5f7LrX7YYUZ92VsfrLFt3rqSJ7ZyiRkf4A7hRDwGV929gSit5dxmqUtF5zeaGV69KEnRiy9LPKSz99AUnANdQoTi",
  "key8": "53pBEdn7Er5RomrtKUaDu7m9KLgftkGX7rAAVuEjNi2twDoX4i8pGin972unt83QWAt5Wt8dVCZnMVQmV5D1gyH5",
  "key9": "49qHHuspaZvBBCHLM3MJsB1fCKTAaPCf8vJ9jCUw42CZxUHu1JCkfk7AkMReE8Cb6CDE28uCQEqzDhFFwciFq2id",
  "key10": "4K4HSx1cxqs3rcAKj2y6BEVWP1ZsfLRbewRVQXdNKobEZBZDZTYdaS7WZpzKPPw95t5iV143oc3NQBiCfXtuBciz",
  "key11": "3g9rCw1SZRAyovpqQQqSJvwfVDWbWM4pixwtsLbSZeipyXqfFENG2kPcvzYL7KRdeDGA1WztFGg5pCGrpw1JYhed",
  "key12": "3qevNorgHfWt7z1Lk2exo4qWNUXG9jxs85UjgybVhP3EVYoH2HwcW6WjaiTcA1fZj6R5VZzTyxvShRsD3BV2ZkoK",
  "key13": "27bYi4FJnu9ymMCFiktN5Yw8xD5cNjEqT2g38KTMbstsdj5stzfVsHWWi4S9m4DFb8UwU6YxasPwQYZEThAP7KM4",
  "key14": "4yE95n8x5SkGZUDQAsq9QfEwgSX6iedd8SZNjp4zHUDsHeVPddsCt36PmqPVGjRvN3WhJtXe5YTWFdrSudtXPCLo",
  "key15": "4qgro4QLQk357zeJFquXsouqZAXsCNBx8PfgxSQ5DGwCRRiKwGa1xURkEtmZ4KQTMEG335EoTTu5fUGsDU4EryF2",
  "key16": "5qP2UpAhGEUogTNpnB7TZhazLZfikzfA6BkSLySVQkMYFDZFEXPSMuAb59gN8f7sSmSCnxMHHsMxYw2Y9W8W7Vb4",
  "key17": "5dtNndvrYPwxDQqihjQQ3kVcVkDZNeumF5w1hnLXHWTLUMsKuqGQ1yXbe6jk82B3PKtXdUfVGvQWSWMXjoa6knXs",
  "key18": "3xUpqQuSCUiLA8ePQKxqFvRgWCHkh6N3xZmDyU32g2PQ5QfPSb1JUxBRbtMZsGcqEhY7xLqqjqtGfUp1vZNgFuUk",
  "key19": "4o9BjZrEanay7EUTgAQkrbJnvKxVzSrmyVw33iv2roZW6qrhA8HLn9ZFRq1zoufAwi5sV6xsSA1b6rziAtRjpphh",
  "key20": "mfLsxQSaUDt5zFbgwV2jHgJmMFfQrSLLCtDnjJBW4dBFJBR39VP1njhm1FQ76XbLkb5xtSCu837XBFrmZeAkykA",
  "key21": "55zzBJzFC9qfqfqCmC4hEkBdFhQ58aj3D1fkvUWr1svy1ZM6hMJVfx8nYVj3ExkcNY3qLQ4oE3j3WLp3wvGtd2uX",
  "key22": "5xnbrxHMpDWpRM9VshozimxLZ1eWjHMNNqmHbi2L5BLhf9HBWbPgwRc5MyCbxErDCZ9vSp7v8nwcxZKckNtct4ty",
  "key23": "4LB3Y3E6KzoAEYHit5QqXSUBRBAGi5g3SRGin2kBBpb7YkQRGB37HvHU5nW6FCHcy7sy9n2xKNq2NipKbfijDXm",
  "key24": "2bfJsQByYTZomsVvDdbQ5WnAhmdrrnacp4a2ctNqew2r6gqfcqfpc9CCyzjc9zFwSc5Q2pVpwygmnbgu47TFBudz",
  "key25": "519N71fJbRyPCLWwybekuRpkCMEoScPvmRTyGtTYXqmuL5DQ9DNAimHEZmpmyMQWNdF649NJwCoZbzEydJL2a1No",
  "key26": "5J6VyqnnnbmcFUKMfofKiRJdD2t7XmWnH3FdUzq17xbJ2fRbN8san4DnCiQ4HyRcyouXk3PMiKDV5xRgPpspy9rs",
  "key27": "5freuiXLV3KphcZPRXX6KnNBqgCwWNy5cJ9nbcHF1R7r4AVpAcUvVpVCZh7x5C84XkF1wrCCF5mKpLTX4QAvnpJP",
  "key28": "4e4EpnUQBgtVQ9cktU2nFtALE1Hsz5mv9J8ivbXMFXzE84FDdc6up2NTSm75yaCcVeDU553hRXb26Bh5gnjkKJkf",
  "key29": "3EGWv9JTfDVb9cVfh2Dnqt3wbD9Ha9ebq5kdg77dCu6JPPakYDzFeTSFDSw3bUr8QqrabC1NVYAKoG83YtAFEBCh",
  "key30": "GYNBWTC9j8UgcZB8afRJzGSeqEN7HGR5ydsKTCgDz84V5VZa1gzpdbQFntV9FWSKheNNNrM9MH5hwcupsVwXqz3",
  "key31": "54UFMuLGzWHfmbjhSgGzjcKv3zKmcyyTC3sHHDFxdCTrzo9ZLNeYmEP2GzNWZWLZuY67qjRyZJcnSH9JgSVZ8UXU",
  "key32": "j7caUmASn6MZf4Uza39wR3V344dqjkzSLSC5Xpj7fyRmPKMS3faJweKA9TeK7AJpZW4F4R8MBtCrAxEXSj5B2m3",
  "key33": "3YdNNrjiun2JU6y23yewEhx35yfnG4r7Ay8nh8FvTA4QiRyfAkT7Xw19W2UuNVi1ZNpqLh99yAMDCgvep8Vh57LS",
  "key34": "weqEEboZaNzdimw2uQwNAt4pKZFQdRpKns9vQuWd88Apq7SEeHt5hFpFQLN4ibZezbJSqZGcfwq7ahaJSbT3674",
  "key35": "qgSd7tEL3RqQPtxXsCKtgBttkvKeGTtfBg8R9GENgk85saE9dN9z1PMYvsTqJXBqGEtcuDsterQKnA1BrXZxTnP",
  "key36": "4EkPZPaasENAn1zc9fEtny9W2MEfrcE56J52Z8tnMUL4RiJXC9GFqx8sHG6VRUArnFR1MTX1THDLv9emct2wXc1a"
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
