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
    "5m176vBgyEKmoLkMP2eSk5zNTgCPYdbCnG1kbJTN2sDYH8L6VBHjS98ScgPk2P6j8EeqaCHFTQvdc78uwpfkM3Ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFHongrSCMJP9Mz8up6z1jLKuvjig7yDbpaarcq8GuVtEd5oWHo5uzNJ98ADjbkUbnRviVHvGrPwnHfyirUbGNy",
  "key1": "3nowHrWAmbhhESK9WA5sKzcvqLSm7gB9WVRJNgQLthULSw3ucg4etLtALGo7W2MBvqVPJWqwHVSJXyqYcCmUXsCT",
  "key2": "3Ci3FhuNUiue3TwpcA3xFLe4i1FvSwTeETCE2F9aPjDaw23veqoN3nuyGb7XMQPBsQAS6h57VAZm3AxS9LDJr9E",
  "key3": "35wxUMTx4WCRmBgTvHh9fMggZEnZR39v4NtRXUtEx49iaYxJ3Mt6UNdWZPo6uPG4BEGenebcU2eNWAVRsFWHiukg",
  "key4": "5bJgeopoY5czFnY4ZXf894Qjo1WZEZEEQj6cVFChJRaWCnT9VwiyhCYzFS6R2yVS5noXcTknWRXDC7Zr2GPZH9w4",
  "key5": "5kufFUKHRyZNLa86xvNvoNrroA3rWnLYxf2PX8JLBz7kWFRTTF9A4YyDS2VS73qz8YH7Yf1Bk2TCsrw5p3UdXuua",
  "key6": "56MxxKsm84TVJ59tPdQq6G37uzypKVv9BABoLVgdhXfMkkjUo65mjiCcEHWDbU8geAnTENAC9WDvTa3G7rzFLahV",
  "key7": "21mc9jvguiw4nBZUFYcuhD3KcXmoNc4t649EEGFgGasRmEHH4i4kz9yidsPUXQETEHcafg9HFR58YPCY9LMW5oh8",
  "key8": "2uThxTRJc3x8Vp8FQopsLEkmjPQS36UN5wa4xFExqQwjYFXktXABmBakGFfDamQ8U8ssMWfxZERwxgBwWnDQ4fsL",
  "key9": "5cYCB7i1No8kgnyUqk7oRxMgnHRCcBTLetdNjixMho9y8hN5jApQTRDucifux6k7QAWo95u7c2oeZX815TwK4n6H",
  "key10": "3qPmFC7opktpz58JDRctHziZ1fvUMeeCZbrhBXZPNsUrggrgfzdW2QZYr2f9smFWry4guuEmPH3wncnd3vFRtbEU",
  "key11": "4uuBdFPyXiW1d2cYSDtx3GR6aKpBVyotGabHULKZozVGUQnSBuCqDB8xPRWWvD8Hm6MPuaDgkd7MzvYZtSATxSm5",
  "key12": "5ywrLpm7jvoXAaHEDWJBtjFJLAEEgLAkmPHiP8WNbSDJXW1J2ika23zh19DidbNQ9JRE7MbdoCY2vysyasxyMSKD",
  "key13": "2AaSifMF3bYepYLctA3bsF3CxLfBemidr7dcse97hQyHsdd6NH8W7zdUQK4yPDmtayhnc3rcAktHtddswHYrn3YD",
  "key14": "3ToofkpMpAhGLizVUjAQB3CX3QdywuQ4eG4rZ8Tyd12GihQNSo7UP1q62BQpAQQckHZ87uZ8doUw3BnKMxKz8NmA",
  "key15": "3nBrcqnzebjwbfqxroExZYUzvoRausqx4HZmFG198S26EphxbVS54GuSbKuQ2Whgc8prVskxWr165SSpP99KrMQt",
  "key16": "5wCJXKRUHhh6JkBH1jCuZhG4U3rxgDMvtrGqJBr3yP5Rr5rc4FYzd9thmrpyGj2mMmXdV2F9WQQWkwm6Vu1FgiNH",
  "key17": "iGcpUxLQHs8W8me9zLCvZAxPCR9v92WN9fjLWM9n1WtBrG2ZqyU1JvP1fr1KT9jiS5VmtLyrXrGcN623VC55NT2",
  "key18": "4XTccNgVGxJCT8XUAK8XqH7aoDpZGDo7LrC4LWgjGX68Q3JzeUCNa5deE6X2dUPvee8PPRpScgeb92xrCydszq7g",
  "key19": "Zp8rZ3iyRPHoSq5Np2EGPyAFjrBm9fpN9riWQcP3Wgrz4HbpQFMsYusYdSVJ4MfWgK1GuPk4MFvfDEyqBHbdPFT",
  "key20": "3tfaQaMJ6AhtX6iFUAjJ27gWtMFczNyn1rYvPpuAankotFdGxhAujjhw3UqDPBsAVANh8BXmSr1a9vp4Dff58mfk",
  "key21": "4LN2xFijip4LZmYAsdZWu76qT1sZbEadfpzsayaDjZjBW78HgMbUViG9CJfWR4t83i8RHfhJegUZHTbD6HRMHLuu",
  "key22": "4euFK3vsdzNN3sgF7pM9thmdoaHB2L1saMiMGqxDS2Mc1suhL1keUqTnQ8pVDBe22wSW7TMH1PDNpTiagHFdkt4S",
  "key23": "2A9oDvxmRQNGExHMuvTRescqETori9hKR4ix7qsqdBdoiD63AhBJBUjf2eraS3gaExETgqujHFEgYbSstTRcaTQG",
  "key24": "2pBVYwVy1vRtY27zZZ54pLhkmpqoCADaAR1hakBTJkFrPaWu1XuaLTpW59XbrLGK65AGHxzaZ7UmjsJBXv8feK6S"
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
