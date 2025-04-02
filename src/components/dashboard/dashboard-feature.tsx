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
    "3sgypaygP3iCPjdpJE2N14dGC8JRHJsAMh4gyu9J3wk2EUBb5dJCB1gShCbRihqJZK2LvnXxdtQSAWBk9b3i51Cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4feuihfUfRVqq369Sj73awKWiHEbJa4mVppLYEDKG85WNS1b1buoFdUpAsEJzcxJkDVxmjiyPs556aHohaGgs86f",
  "key1": "4N3swcsuFKeCDZngb7wuEYPsDjCXtcCzmLzpoG7L7c2LyZokuQm7pQ2VgAJ6rf6ftkmcfLAB8Br8AsSC6BgYjt9u",
  "key2": "5tHKc1tbk6QquvaSXiDxadcAFuQLYbJkMJZ3aXdJoFBaXY9ACxSNjQwi6i6DFDAGfPRyJUR9YLQ39RgiToXd1QMo",
  "key3": "21gihGGLbNHiKJRB15b4vYPujm8CGyAu8JKhWpzb7zrbti3jVTKYv199xth8WBJgDwhZB7srmPFaDSpMUeKxUDez",
  "key4": "JznEDZDgExYTYXDoQ9NUA3Zz3HeKm6R4S4VtkAJXMxmpy2eEFExSt16Yen1E9njNVk7kSwjAbvi883ABMWWjES4",
  "key5": "toyyXHxXrqhaiaPJJRfpBLQjdfdk963hyb2SyK8y5CTR9wScnou8W85qTe8XRU9ipYwC41Ha6rmYm7Vjdtt4qL2",
  "key6": "5roKE7sAxm959XGQoECDXFJ8WP4w5GBuDaP29Cx1CS4g8uiHLhEwByx6kASG69S2ddTBB64uo472xy6sJrp3eq1U",
  "key7": "29o69bp2ebd3Fn2DDdZETxSRVnhjUiNix18UDE46ti5k8wV9WfLgQrXvXPrC6MbW85K5xeUuvW5UTQXZVFfmEroQ",
  "key8": "3WeNxJLqW38gSJZEH6miN8u1ptfifeq7YVz3eaTNeRVbwDrpPxjumfEaFaE2PLsUU7jAk3iBeXxPjdSMqk9UukPF",
  "key9": "3Za7v9tj1NKMvkmEfPUoBDqbxtizK9sBPyinUijpCyHJwSKhNFE2Xtr5rPu1rS2hRueQqGfHnjTmaVkGy9qnkEsS",
  "key10": "55jSmTHNKcyi3MW59kNbLLqtpGUPbFJbjQh6U5LMYfuUiDD9peavamxBTHvnRdiioDx3Vw5STUugVUTukxYvsX6W",
  "key11": "5EVQjra9hPjDFszwmLWctM4UWfnsBoHjnWuWN4bMpRKJKASTt7HacJgAEjQtgo4TPLKmu8PpV1TU2WyPHCLVk9BN",
  "key12": "tCqcDcd52UbxCTkMJ3RRTenmjBCLygc4Wby9YS6Gk4sCu1EimSPaohdykvK9QgVHLveSEFRz53NEu3t7vnZW4wE",
  "key13": "nhqyZXnTw3s8JLkbPu4bj8PB2CmubARPWxYHPFtx5WGtzouAtMViZWD8VQFvXYXnnpse73ZCRQf4iLAtK9QNpeU",
  "key14": "4RsJQt2YpNetKNwvLay6rN7QazKpu8q2b489uhgaTrobow6fSk4zfKV7pvEnzt85HBmYEZcQbSdW3sNwecUjiYVX",
  "key15": "2AsZvDPqm9dYZAgm3V5bNkdmEJzucH8tVtHYTbeLbSGWN9RCNBBzqrcmXrHq1jn5SAi6GpxkA64GLZWREVdry4Vd",
  "key16": "3KFWbUYLARQ6mPFQKDauxEkyEqUoUepU21QPMeryi6MCyod1aBFATWzaMXvVP1eyKHnKY9GzJHDFY2H888MRJ6xR",
  "key17": "3tictk9nG3rtieTurTw25yDsPht9uw7Fd3oiCZDwH741wrWFDigcr24P7bQ92kYbWHX4M91fLpNbMjG6JQFuTJzT",
  "key18": "5MPxqswXES8qBMWnTdBngZWAfvL232Z4fH7PZXBUpeKHgRYYu1CRRYZ4G9hUDCgEv8mvCGrKrEjy8ciXAsNCFLtp",
  "key19": "3nBpvRAbVxhKsrx51NYN6JP24hD9hdkwXG8tBNZTg4WgHPz3cU2aE2Gt8ubAEQnZtHpPtMTGg9o5oEkkyYbLiGqE",
  "key20": "2v2Y2SAWCuWF4NsMKwC23prx2XSU3VGPr2VKvp8zHkPJP4AQdmqLHxqoWJcTQVQ1jJBuNSGPEisVqTzVUN8wfxcL",
  "key21": "4nxXfkd9mQVJ6hCbsT2QHFXD11Nkrv7ff4h9n7h256atqDNqFknuxDGp4tT1qKgpw8Y6ACTni6VtxtCqhdbuwGxS",
  "key22": "xvuLxaGYkdk2wSpxGgPpNuX1pmd6iTnHqSDn4yMpYK12WGLDGdkTgAG9MqU51iBgd8hXm77DBjvZ5ABGhbLpFcr",
  "key23": "c1vLaCKrnXeUy9Feo4t7LFGfqw4pVgumXd86bncnzF7gUWB6mfyxxHLzeX1mnsK6nzSPKjQUgYkFK8tuVXoh6FW",
  "key24": "4t15yNNJ9XPKb1MhWXu1t8HBPVNDq72KSbSwVeunAPLMjBCyVDjucKrGhnqanxgvMwfUChgGSNJoeQ6Np5aysJ2k",
  "key25": "2pi3u7rMQ4eqe92LDEpDi4d7UA9XWDAyXykcfF8pVxjUKc45eDwp5uNHcCtRrQd1c493AwNbiWJBwMG5cf3MYCho",
  "key26": "2ECk66J5K3SDGsiBXuWstmSQgw9HJo1sSzqVLfHHh7sdTzJmzdeeu9HnZB3Mz4hE8ZMBN1XmWk7eKzBRj9dFfxe5",
  "key27": "31E1cmAojqsZyH7kAWuZjgsDptSssNeFLFKTTfq4TPKJiiryLEfjBocPrae6GK6ftF6rEw3hgWKi9AasboLmL4VP",
  "key28": "Pz1GtcEJLjvUjy4ezkXYqYxBQZGC2mMNnAZ9V2iEBcFck7e34HXGbyHfQwvuNLw1uB7UGQvCPTkqtaUhwgpXXrg",
  "key29": "5Nwhfyvomdp7ye1HXfPjydMNQFgU39Zq2jWsTXEio4PyQMB2ZdrEzs3oV7BDSmeZyRDKQbBK583MamEbCGZTPFSt",
  "key30": "4uAV35pur6esaDsUgVhvYPmAds7NNj4ivLsPD9Pqp5QRKbcfMQxz3WwgfUwcdPtCbvKzkpu5orWQ6Vx6MjtZLRMQ",
  "key31": "61gCH7ihAXTpXgutixMe2sufTBEA6MF3MAzt5rMqEunGtYwYRQm2V3W5WkvELC5QHm2hghAtdEfPZooDt5tKMJyC",
  "key32": "3cexFigNg1jesaV4WscaiPsV4iWX1HcmVKq1Ldcjefr7sTN5TQNkajxWDJA4A2vT8JrS3UaCqcXYY3gkFKKBfnu9",
  "key33": "1CPD83UjbAfvK6X3d4W22HeLQKkUd7UCHrVivvN7zu6GjY21KFqqw63JtQMQQgAkYQwmeN6A4up4MwZvLEonw1U",
  "key34": "2c3GH5jtrEwo7ztZrPVaKMnFDPAkRDPZhLtGxHZ9tNKjoRFd4atPguVohFdTaJL5pqd6WorQZbVV837ohEGChjXW",
  "key35": "5NjCUZesknDTHC8Tp5M7xkSABZnZRGL3GviQuswu5ViDbJrxwn2zSF5o23UfQxZBfoqATYJJVA3UxVGaZiX2TTzn",
  "key36": "2vxVq8LWu6j7yknrzZ4QHSQabGQRmEVXx91to9AeTUsgyWwMZoqk9JwunY7ZCSMCHpSbFmcfxeQZ1hBhECv8dgsL",
  "key37": "62tJbUjR4cV5NUyDkyGfSfSnA49ZVbgs3mHsJRhnhnUNwJ2kE6HPZ3T7t3BhxkvyK5YihLb7yMMC6Qwr8GLqgb5x"
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
