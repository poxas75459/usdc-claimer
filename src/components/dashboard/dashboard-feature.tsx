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
    "5segEJnJf9K74giQbYc3919v1ihT99RqFFxNoDWX5BYp4o4qJboypsrpMWFW5y1GifnmbXbUu1fRMXhVghVdW4oj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xNibREKPBcXikuSp6KPUYuJrUrqwvGZAT2efCMsKdX6J2WsedwrtcrkWJZ61Trf63ZBPiE1TWqzrsCmkMgjvacC",
  "key1": "4CmUkiwY3N3HVpjp2esg8tqGybjH84Jft4U2DDfJ1ttd5igswuiv51YLT8CXqpsL3e4eRUtTwka4sz2B73Hd7PWS",
  "key2": "3A3ZjCaxpzwiqqJZBq7BrKjuZwcBxtXdHuiypMeLvftHtr4kL4xGrin5AeXMcE4SUD8sqLb1TMw1QLfzW8ANWgMN",
  "key3": "vs7GrfKAqiB7enupqp9NKd6LShcYwYW2pM3iyzL8hFmkAGvXiu6Qb27PiqtXCKrwi9CBCeX6aiMHUW3EzPENFCL",
  "key4": "334CpUeBF1QNxHY2tMroFfXu4vP3YWh2Ewb5nfuxBscHczdWQjvCEyps7C8ctibwqVv4krHb3YRxKEGbeyYRT1As",
  "key5": "ZSy5mKNju9pWvmC9xwFvyazMp9tkrbm8a5vBRNtZALCvhK2td2qwWGUUtQZcJoWWcX4B5qvCyKx4zZdXnpuH1Q9",
  "key6": "7pnSdCgsSskQyLbKq2bYfSMHiYMLSWG5HDmhQGbh2gNsxieFykGftM3NWs39RWYfkR7AbFCTigS7rHa23bXNb7H",
  "key7": "62X3Pz12daDvje6EDnJxynSC5dZo4mYe87ScePL6Bz1cyoRE3rSjw5KDuMTDj1KNuFwLobrmTEnjXjPMYqmJ1yDF",
  "key8": "4zC2TDrhCfHfxd4D6jmHd2hZfKgVkVwioeJ1c6d2kH1YjiLdkJpjeVJ1q7UvQoAUc8Qn9w2SPvJQe1rgCr1jdnDw",
  "key9": "5WZTMEpRJBg3x5MANYbH9sdafRuYqhkk77or1tVseen3SP2Yu9DSP47TVTNqbCCncNBZv7TJrqQrsQ43DrRk5whE",
  "key10": "2NdStuo6tJXG6TPysRW7ppM9VSc6poGav3wYNYwVSHmQBbouxpAmrSZEUTZQ43efjstB8eb5hyni15wuDt8TLp6N",
  "key11": "59jSHVs1AUGCPxCCCHCHMjqoJZHKJFwi1yHh2VqRggo5DB2d3kr5qSyu2Ue4ZLADGdJzxvwMXomFaRwBgBCU9mNw",
  "key12": "53w3F7Azc8mhUdPAGr9oJSgzujAozzJr2VzL2DXa72dLN1GZ1stCwLWKouEzJ4kfKxH39cpv9a24b17o9x8cB9Ta",
  "key13": "FxbafzCtLctzrKCmSyGR4DU22ndbDq14MC2fKhvSBXqqH9Qfdm4Ts4LmniapXBzZDFYfvCSKmb7QQDMKkEdTvnJ",
  "key14": "As5LmshoiupuqDc26cWS4s7hjRZ2rp9tX7pmqBGALo5xu98isKq56ZfArCnfKA4s5yXsHjyqDHdU4s3ZJVwCufz",
  "key15": "zCEqphCxsFCyGStH1bXmeLoME6gAox5AH6fnPr8FZC4HRdzPUFDFtzyX1zrnoM9Nsd1JozxHRtBphWr2j1oskmu",
  "key16": "3Ju4RLfqeui1wq9Se9qY9gyJoYi2WaErvu5feSVxxc4zbaDgtYKaqQq4D9rVvnZWbC87BBoh7hmF7nc4Tw4NCdgo",
  "key17": "2rP1xyeHdLbQK9rfc32ZsEWeyw9Sio9jHR7z134PuazwTUuR2XVmb2Vsjrmhtuf6jw8b7UxZLTS2DoBPYHgQKca2",
  "key18": "38GAzzJinvTdxZhYNoAA1SzW125H3m8koj9PFiwihfU8CnzUqEAPeBGN7aTzNLMAwZzj3g3tURnARSAjZDcS2SPd",
  "key19": "5hjZaSGuvGy9DNRGpMxWwsSJk5P1Y93Tu3noE6S7jtXxiqvtK7RGLJ6DhWuhoDhvTLp3WCy7zXk1bYfn7WSL96UF",
  "key20": "gfZBjKrfDuaaLNZWFsfVNjYDcszYX2GmQpnPSftTuWVY1h5D3NEPRsHqeRBe8VoNNGMvQAZQxsdDkFRe3jWWbNB",
  "key21": "4SQ5yb9BaiYEFBrsVQdhQxoWt7f12pQXFq8v36URy6nw5mjFE3y2cCQjMdZ1p4kKttbwQBKfjxRSFLgeMRvWdKAP",
  "key22": "4qKSGYYBXLmCDJhi7owcACqWdbtJ7tynqw7xgniTd2kHccfMNuCdrtS4Ptkuq2Qhfd3vibKiTSLS6nigs9MKtb5d",
  "key23": "62tyZmLP6kcAsayx8vee78PRaD6uj5R6sThY8aaDmxxfFTQAqmqHMyzawLRmRwqwnDFYDRfyp6P7Xns58CcMSWYB",
  "key24": "3VFqsvPGbPLS9334mLrwmVvBVBptg5EKfRJPTU6NbpsgLVYFWmA6vTrPVS7qWCJ1TqrKdAviy4oaxkQ4Ry2gEPLt",
  "key25": "3gh36XgpFc1Q413FjXYs3zJs4JhXnFAzhwF5CKV5LDf7SruyYepCePsFrxVtEaQF5d83rhtHQoiomgKY6o7kebuJ",
  "key26": "5fWidzPDrRMkjzTk2VXSmeSmPKMt6GzEdmcvfsL5GJxUsXmxMb89LMvjYqYgUWCBUYh21hBrF7CVStBzj9GqSc5Y",
  "key27": "3VxhhsCRXHCNgAvAiAx4qk8Uiu2NcsxWZRaPSiu9m8MFEcGqU2fvWAGnHhPJNheYNUVjmNbUqDdzzj7Ut89pN8pF",
  "key28": "2cJLJV8mGBGjHje1pHddXaaSVk2oy2JVVUF3TwDKy4BGnJTYbDkXTfbe4h1A2M3YLn2uMVhJnw8mdV8TLc3yumCx",
  "key29": "5dMsdRd7N7firixZ1H49nC34L3cR7DdijzcvMU4wbFNQHrjEP4JHJPX8wvox336RatCDypkmdVZpJdcZGBH3UXFZ",
  "key30": "3H2phmGCcmsRVhpC84CP9qNyJ3ELDjCTTGszpz1pTanp1hNYHXa6qQjPHmi6PAnPuAQTDC7nrRT9eqz35mD5DEDQ",
  "key31": "aRSdVLLJMmkfddbGNdE7BK2bdyRygm6XQLZSqvue3XnUnnkjoZRXmVzk7gJ2V6SxDQ3KSHXimNrRoVgLzNgRP56",
  "key32": "ygdPuP5RHi9msgGDnLwwgo3Cz9rR6bLj6MX73iChmaNkX3YojaswrXkscmHNvCpX4Wu3QeK1fsfVsBgDLiLwT6n"
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
