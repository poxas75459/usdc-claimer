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
    "49rfX3Foq5u6Xzgo3aBMLDAShUkxdxmvxxJWQjhfd6ng8cekjZqGrwMchNEJKDraWZ7A1gjZpT89AWDBUiNb91YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uM1qyQGyz9RigJYvVp1cr9oQBv3Fqze2y9iiRmxzaxdY4zKhU5vVjsJbTGFdmstzmSZaVe318uoH63d3ZocqKWq",
  "key1": "4otoiupk4R5fuM7WKWdEzV1SGXCqkUwAnEWEwAL5XSVqwqEddcn7GvhnnaUnCbmGmwTYvyLgv7r7GnDZus4ZVBJ7",
  "key2": "5vpxPnoXzcuuv6rPgzXiZCiFo2hnFkwWxhDyVu4eeupewRh9GLw2hurwYuQFVQvT8QJx45Mg3Jd9TGPqYmjNfnmc",
  "key3": "3ZuyPrgNVSEudat5a1VSZvSyzUWACmDRm88hWw237Z5ur4szxqCUpCUxkJZtCWSuKivmJZFAmKgxmUjZM3Ps8WTq",
  "key4": "5Jiy2ftMK8mEeALpdjcGdcChL3uNmmmLn25vADU5KN2vYc5LmEEtJRYyiYfk6hS4BBWxgvVPpkwq5JfB49CZRdzM",
  "key5": "4fGLe1CqzobRicz8etx3PzKuabQUBzh7gkBt6ZQiMDVLMeMM8iafjGXCesFDgitucBwbv1mSysUdtiwEifGczqXR",
  "key6": "5gnB46T4roBVw3t1GYwNJHa6tJqXYLPpcCVRRaxyVehzmx8JT8xDBUm9SRKqnm4waw63Pj5KUwe6YVVvdSqCBw7t",
  "key7": "2En3kVQaDqJG2hyGDu9oGUpu7mjDUWkeXvTUghaEovJk2nhgwf5UhTo86AF2Y2KSyogXXRHn6cUJttm9uU5sfL4V",
  "key8": "5FDzMiZnTV2UJhxapYRRd8TAgbfN1tYbaST1yK1z2GvgWKRKBHzn3mnL6dj682YBL1JSDPMazQboFPxKmA7JRvew",
  "key9": "4GjEwB2XTPe7pZqgvEVCsu7wGskms2xb1SSwMeV3ShtZiWmp4SdTnS2sgNioX89oFDJRx7SbbGaCj1vMnSZWh7XZ",
  "key10": "MFXaAeA6yHSp5B2MuCp1E2W7Y4RP3ED34ioMxjPU9ar5vVGUmBgerUY2QpwfSxeZJeoJu9x64tVfc9Xe1hHnQYF",
  "key11": "61ky9ugdErFifwhSQEZSRPM9a33uAzEFX3sipkQxz8FmhEi69g6KHoZCZxQrwSQRD56ULphe5BnLaoLCRK8vSm3n",
  "key12": "2aTixgNBk4z88QLYLRKTmwEuT4Uq5jW6CPhBSV2Jty4GuxRgvrz5pA4TgCxPqjHvdMuV6fkgAS87kMGD1Taq9kxP",
  "key13": "4potxL5WgpVBWvq4bbh8cgq3qPcHTbAUj9aGT11mmPYxJ2w1DLw39ZNo8a6cCDJ8RwW1mUqSnrKoAtTPnxrRCevv",
  "key14": "5PdSHRJr9cxkAPEX1pmJLjAgaxLmHHw5XqhTjzz8fviRE7jizhSJNwVMeVtPMyDd4PXU17DkTMCDXxhxoE6Ek7YE",
  "key15": "3sY3d5i6HVUwPmoVhJKeaqbTGzs8fcHKyRxrEAV3iWb2Z3ahb3aidpMfwk7Y1xj5VbMV3gWjVXREXwP9EpafBzpk",
  "key16": "2TNs6Rv2VX1rfQm81LuqWQWjDogiY525RgTK8MEteNYJAxBzuizxym1HosuRD2JqMYRFFotmVb5uWvm9UegkcbHm",
  "key17": "2wC9oq3nREt35JHKD8VPtMMRSjDYGdcG7arUXM1a9henEfuy99T6rQPLqfYKh1PA4hnZoY5AobnHWznfSXnYfNpf",
  "key18": "e2am5XLkefowR33xyF3H9sxGAk2wWSKpwGJnPWLyKGhF29aqjo9RKBz7ccmQ1PFnqEUVUVDEofHWLuJX2aKdkxG",
  "key19": "2XmorfpEKgoNfu7UgJ3rHoLZdUFsNgUv21Q6htLQo7Z7mz8u8fUKMJuLwq4YbyuARiqD1cDjJw3C8UqyN6WMJgP1",
  "key20": "28Eo1jAj7MhaZ861eUL4EUpH1AmQ32KD69KZueskAfdfLUSBabWyT6Dq1UxtZWdw4pjdAXta4BYWvw66yGHxJ84Q",
  "key21": "3WaeFCRuXmimmeFuXgvTkxnsyLpb372KLGW8h7EhhvEdqjMdcvQETzzDMxZMaBzjSZU71oh5JhfM8Pxtg8cYd8it",
  "key22": "5NNrBAkFER1MmkQ73QbSaqn6UBBHDBkVzX3y536hpiEdV5cVUF5X9ar6M9NmEkbubQjiLS57v6csM3tX34CzBWTc",
  "key23": "2r9JWdDygY1K7Rwgvypxyijzrjd5cAMSNbYeC4j1cHTyNeiFE1iAWLoFiCChvdDVYUc4o36gRK5d95Re8QANF4wq",
  "key24": "ouiK5c8n7Vvuc7pkR5ECRxUKtATfTJj1xWNdbEkkNGALj2zNjJ5Ag7fAtBjLL9khG2SQGX8dKktzsYfeXDQHP5q",
  "key25": "4YwnGwVsV7QLiEoVjjTpYpw2KJj8ZYqu31LtJBaYzk8jCiALy4CXbuWdmJy6BxLr9uannVwQ2AEjLwXRtizVvBDD",
  "key26": "5y6GV7HE36RDaNihs6Mk46oSsNKK1Gz61gCSyzVDCGjktoiJBJxUEVLsacEdkrqCwf76KoarF27Si6imuqspHuVN",
  "key27": "4XT7DP4W4KSFdCtjP7SJie6DBawFkDAYTqL78EqZZz15ArUjmNjTDhDXPzLNxgsdrQifZyWBgxtn97EZGUPJzonK",
  "key28": "2aiMrh1taLnstiH3fMpQqt4wo5HgYUZBcu61vfjLC3PGHTN5WBJNuEVXjbNVsxuD9xhAAe7sTX79PV64x7J9UJ3r",
  "key29": "3LkeKE8nf5K45qEDRyZ2NrFbzBNWkWxGvRizBgJ5Uo7qwk4vve6YUPE2hbjfugv5gJyjo7XvRZwFVdhL8FheQW9S"
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
