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
    "5Swmqp8fjuhoPT2HBfRd8cyvsViuXmbCTVXmMpDUZRhhSx8Exco4GJMMCrLY8nYjEsk9iA9Rh3eQbdU2Ltcv6HLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rk4umgWiX7Woci2fKU7U9FKQUWVMuTeBB2y571Tf9p5f37NjAzGFbUBE6eoWCYhsnSCf3v9KF4vTs44fUPTHVWj",
  "key1": "5UzMSUu2sihB266JWJZDcSaT9RxAw3SyUmw2cj9fjcocTxhMoThv12Kzsi7BL2gR8JTrCwygLCuQSs5DDiADRWrH",
  "key2": "mERukTeDENrUWhuoZUTdM99Lxt7qjmQa8CUMVUgVPpxYrtBevehgMGSMQ7Yfy9sLZnn3wU36bXMRQKKnxFVxYoA",
  "key3": "5ztb3yQ2LCPffdnnQHotLVY7q6AGX9ijCimecp3yKFeHahB73pL9DKhJ515FFAWa8EA5MZCGK6TNWyLn9myJeM3K",
  "key4": "5Q9fZufK17V1G9ebBxf54Pc8LXAPBebs8e2g84ENGyUoBbDMaiQBi7NGF6MvnR3uLGPMfSHvvgCCG9RxfmJf23m7",
  "key5": "4pgZcJGV8DWHQmMHFPVU2XJGLgkU9QxLFULoZSjZxzwKsdXWB8ehW4dkZYSsEnPGmrzwXWCwiVE3GD43WNmGPEk2",
  "key6": "3ktuALB1sdaGAYaAx46TXP8ayCKx47BJVAvphkoyYZZJY7tePwAXgfkDXV9xMLaW2gRs3SQVLsWDxcUKZBbZUePA",
  "key7": "5MiMfWcvCAXYg5HPxyuMy5GABzd25Kw6c6BNLghS9fF2zB6sNvaSP1B3eAJBYB6qV1AxNs66Yjb3kzgMyP379krX",
  "key8": "4GiMF7ytxJiP1rDaXD5yYK8vQjKmNBxg8SWMajHxpmkRTqciWLiNQTqwtqtyd97yZPWuU4Ffdn5DbGFpwHtBYpCD",
  "key9": "5yspQGNS1YTNW5cfZssaHuXizRNzvMEjiUyLES2kDnPUfmSHS5m7Cj4DgcdxsA87DSBEsBwdSJ7bZUQbvW6AnwGV",
  "key10": "4xxpW8nc1EsVe1RQKY8SvGB4DBwBXL8wudZ5dx7rp9LzXquaB2YG1pL9waQqaZgtKtXivqHfkFtmDq92nRdfRicL",
  "key11": "5VEtGjraLqPbKHDmdL4NneRGKYqP9DxxwUBoopR4p1ZyW7P4RPTR94pc1Qv4stNtsiHUxD7ELUCtxrZ6oFKcLvAa",
  "key12": "4V9w98T4FR7CVW1LVq9HdsnFYueDi43MZegr6ryrvpLY1xEmQ2FFMtbahgf8c3Eb3mVKz7Nn2oCmxNZU2Q9gtx4Q",
  "key13": "sVukc385DgCQ9RGEJ2giQNCjQaGd4DFV6nhKXyBsLYcGXuuRs6YpVoGpC9VqAZKxCXDbaHMHMxsYd1J2LD57LKW",
  "key14": "2EzFGRVgwGWji2hHiF1JoQfqYhxPCjrqnsqod5cGatjebdwmRpqFgt49LeodyoAr2JV6A2sWMTwaCDjVN9wtXZG3",
  "key15": "2Xgtzyzt8fEhzp9iFW4r7vtimq7s6yQHF3nKvnpw3YfTtJZoMeELTLzSjfuopGG8xcpyMv9iQBLneKKYjngSRrmw",
  "key16": "eywgrF4NenKTHuc7W1zPU8HLcgMcxMi4pNNsso2ic11ynb4K2TXrJwHjtn9QxmXWRRaTw769XYb81XHd7z8QUfy",
  "key17": "3FVwc7HzzsA7koebqxdGrDsw77qojw35as9HVNF6v13XUn4unWe4P7xbLVqn8xiAmS2UnWS9XZSzi8cdQwKRHQwe",
  "key18": "tCu5PW77DQ7Jpv564ZgxnbhGS5qrEKUnzzVafpAobUbMRiAnBWSAXfwFtN3LCcLzB8JHkimWc54RctdqjAUr9WJ",
  "key19": "qDkSuYCfFFvePh8XxrsnG4PYbaowjNVkXv2NbVZVfaocPus9fyBsZZ3DDR4Bmn59mDNKAZRwoBCkn44tReREPZm",
  "key20": "54KbfnDEEJBPsLx6QA2BawSiWVwjx2NtUceTjcLn1TozmoevwAJb8Jy8Z3Q19NyDSAuKtKUj6CvEyrjKyaCawNC6",
  "key21": "5rMmRvMo3AFGcc1hNHvLZAeksaCSfmT4ru1yjJgSvHd7Ve1gRry1XRo7V11N7eK6YF4GUuS5aZAaU3Hs32dErWqC",
  "key22": "4G6GqTuuc76AHtzyAu1iH8GwFqRux1VKu5BJ3rLD64AcCwmqyRxJ5L6cgUTZv55DfqY1GU4SgXXzZ2DgY6kcAeTJ",
  "key23": "5bMMPiBL5wJeScMDkf4ESECq2oDaPuTdiah6UYEviitbYHGnGqfJb9AUbYdpTV1UfUFxz8UTqds9oj2K57L13F3P",
  "key24": "54h3TJ1hFA4fa9KukHXKrZ4d7EuKVuJGsi5urQ1hpZQpDs9dQfxHC5hiYnrMMYLkBJJiWihHWagfbwspxME7TZ62",
  "key25": "5jvM7cotx7mDgeojYJ6ufL31KEjiFqsnCt8qBpKBLNasXGKuXAVfVaULGZCG3JxJX3CRPmkieeU3tkTzsow66mJg",
  "key26": "28tDVHce1grFWfygjY9hzTMS76n9JhDP9uVh6tTZw2kkhrupqY75dQgGKs7HyLZPfA7nbDE81QspwoUXLRaLXRhS",
  "key27": "MM5VCH7eP3bhXbbHc3kFEenkc2Z1pWo8BtVCxGSsQWV2enhEZfFzKXDCx3L7AwvhckatntTHiwD2P7UtVH3S8bE",
  "key28": "52SdaEvHKCMfJq6UJmRwn8ZxU8JpW3BBbMhYEWSAycJNxjPAjWAEKPF1ASPDoYEse6tAcPFySGAA9iHmFoLDUbW7"
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
