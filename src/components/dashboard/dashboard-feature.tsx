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
    "4WobzTYfNNFGreGPxjEw4YGoVvUooELSg9uik19jGFBZUBi1TsPepKgu2sw6rRuBGoaK2eXixRDkcN8DLDCGAGF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z56JYSHKCCghhNqYxfkFUctbmh2r9aF6KWW6RShTFd3QEJPcsjtMWLRUNVYFiqg4oH3DvPCEek42osBScQWMM6N",
  "key1": "25HL19snsXdmg4EG7DffBQR8t6D4n9rWYUaBxm5f2XY4p9oQoGNhNomxRNgV4vytnbKNcP5e4xhP12s4YQFLFecX",
  "key2": "4GNB1UqfE2tFX9ZtSurLEjTRww5kFURNwNwppjjrFhsNxqHytsv6BviW9HzccAQfQsE4T8aPdB73yySTeJg5qHBB",
  "key3": "8xNjxQfcBmLeu8oMs4GXSnBjpKmYLC1w3fMDmdB8jo87ZyjU6j4tLJ4AEcu6CrXXGQR6hzHg22oyyUPcoRDk2Cz",
  "key4": "2rhF4LXKCKXvqLQSVDcUzV8A3ipKTPP5FwSoBT9c3Hk2QtvQ4iivnykNMwQYYsyy1Zf4Tav71wPJCRVARy5PdcQJ",
  "key5": "66A7k3jxG3YoRRZuKdPf7bqjVkpBRfbGE8EvSFQVKpLQPGTYCdTu7PSLXzvsEYcfzToJhqw6FM7WmNvJ7aVZftYs",
  "key6": "w57fU6dbhPUDcPmG2nkCJv28vUDf6FjRgtqqawX2M1utzw5ZuDh64xf5GEpZ9fm5FSR5bEoRYbBwuVvPrDt84dW",
  "key7": "4oLz5t9ZqZbx8Ww4NdbzgHKvR43nR2FfYzXvhrCusGWgeLHXkxLtYVvkGfKvkjQv8AFWRooP4zoZyKdwDup3DrdZ",
  "key8": "5V4CDQqf8ZzaozfeSVgG7EhtcvGsrk6ftTMm6dRnVhJwigdZt5XXjv6YHPHR2QpCDJVM8aC7XvxCZwGcesV22agz",
  "key9": "3BYGVr1j6SeiXSiT665jefak9ytEtKa2nHdmgg54Yron9hdyYYFp2fqGgmKMhsC8V3CTQVaGCmsTFXc5ViUWTN1A",
  "key10": "cXBiPLsqK8MfXEtbVBvCngTfyGpVHnGvCHTrui8HtdXq4VEW7B1UVETnfyPc6Pez2fRXMUbD7R2usj43yVNUDBZ",
  "key11": "2fRWHfsuxrsckXCVQGyMFmL1zCxanqdEWQCGRJLx3CkvhVZpdFZfTf7X13x8xoNhJuJWAdahv5eXcJ1CMoPVj8dt",
  "key12": "LengoR2AsMYa2mG5YVrrogoJ5AWoStMnWA3a6h2LpFH49WGMF8PwsxyQAUW3oWTKEHNN97WumW3LCFcBmitAwgX",
  "key13": "B95QG5wRgfLf96UV8Z3mZ1wanvgmscEVKYshvPGfdkzxyDgBpwdwsbAyKKNnhKkCbssGo1mzRo2ouzXyfxwvYub",
  "key14": "8TjvNtk6rptjnZ4n1B86jyrZ7YY8MXnuKUrgCHMSbAetXddc5FR8mi8WwsCVDUHqB8rVbxQUZYuaFDHhQKVRiAM",
  "key15": "38cYqvYtX4nugFbs855MQE63ZCBp79S9irHZx8H49qXT6UbBF2RijeLxxacrmA7PFLDKRcBnbcEzazFC1HVnaRpm",
  "key16": "ibCT6VQbyhcTievNxmQrx3yWUrxtc6SL4twH8pJJcicGny89m68QAiVzt1BsL7myA93ZSr9Dr1bUeQ9by7kSViK",
  "key17": "38dSngj8z8eyfmD2DLLLt2LiCNhTMeFzWeBGhaV7dE1X8ni1UfPN6uZiUh8mJ9eJ8JPu9WDt9SRdFnkhKmbvAsPW",
  "key18": "8qjoKDowwLi572VSwSZgT3mqoZqYCnaK3q9Rzmt4YeV9LHLnS5b5BS2B8KPmSD3CxavUpcGqz671eYijgGdBzoB",
  "key19": "hBL76zqaAraP1PukPLJSQoCTEpTkHsFxT6Qtp7QbbsLzQhcXF4jxddgCeWsfb4Mp29NoZyDg3xSioFcs9qkjmTE",
  "key20": "3pQHZ57Kn23TFUVc8751rHP6PW9toiLNYHbFdPwDBYT7mLnJxdc1EDe1TkNm4GBco3MyTBAXbaWttF5bUMc77N6t",
  "key21": "5BkVRg23pkL8syA7sqMpMmeSHd6FxFPwxZ7F1332we8kaMetdRwa6nRGxfFGTk8hJ7tprPiXQDoMzn6uAGPCc2f8",
  "key22": "3jNMk8QsEHuaD2w3yPjvphaDZKtBfA7ePepkGvNZLwgdcAAJsx3mLmjrYzAEqBiCptuEFeWBphzj2z8QNJX72n7D",
  "key23": "3T84yyaRj3mKFZranWokHg61RP2wC2sxEKnaJHLvvqfv5yFx2RYXx62ouQZXmm1TWPAqmRqk1wZLnCFEQviQmdLP",
  "key24": "3tzJSXRttHG8skPPQKQ5dEd9MgiRfunuf11ZUshWVi7EVV9C2Z5DvjMTLTrkKstf7CyC55D2uveqD5NjGfUE6Zj7",
  "key25": "5PaScqD95HCzrhjLMCU3SfyBG5xgiQW6fwckEJQBTpBuuiGXkvnmvRGgdjqVx6sqvZNpdHQqZ4bFLQr7KihmTGng",
  "key26": "53TQLZiF4aXZwPrscAkxJ7dHSY4vzLVejt98jNA53uHG3nKhQKZinhBayZr6v14HW4CD5DWd4tPMwHCtpPMdJcAV",
  "key27": "UFsrtgMYQUVYXBDoBwvdHkrSrTuoUjNERWp6hwGXSWSvpmMNY2DmYyMKSrPF2S6GVd3vJWvb698v2CQPUqPkK5A"
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
