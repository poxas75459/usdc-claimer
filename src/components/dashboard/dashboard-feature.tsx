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
    "YzFXkiXUaLcraou5yUcGmtg5g16ik4Wmn72wNNi3aqwj35CDCLJVdFWU1XQ3iXrM6WoQpdvGejzQUZni5sZ7zPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jH4bAPLGxLtHkveWTJ1dh7RfTzYPVvi2hgfCY2qDmmDaSTxZgu7oCMA6RCunL9HHKwHVbv1tk7uQAt7QjBux8ph",
  "key1": "37eDmtk9S7Dkko2tmnUhDsiZHYJHk5DwhNJhF9ddw56UAcj5vqywxH2wSJPYpTJDR7bzeCK2kwknNeGRxnCBDD2r",
  "key2": "46bZDXc4CLYdPDX5oVE9FRdhfz6Apmy3tm414ZuRbFmCotkDuvrYWVBA5fjp3SuJYpg1qTrbCkxrFDf25JcQWve",
  "key3": "4Uq53uAMxLcdELNG94TPgnG2wmch8zd6KiW1tGbANhVR7CfffMPrQZegb1a1AJaQGUxder7WXEeszCMW6vTaJpjX",
  "key4": "65fKxnDYXHAyCfXBqmJSZe4TFjYZtLRcVDG9XfNoM9Z1xeG2mnUCQ8JgqaZ7BUJkahpTUHuym9pdaYa3LVzP1fZr",
  "key5": "58s8GAjkp2aA3AcMk7xMbTgXMnJwRPAfKFpKsxF6m5HErJVmBwrrBCWqjyUim3gcqQHnNRCHjtumJbybMEzwCHhh",
  "key6": "2dPzEEBmiYEPHMQ3mbMXMaW9f9vZ8vRxC6QhUQfyTKunxJn2hGjvzkaohRcmG1xM5XwFAw73L4yhLFryhbP7XZQY",
  "key7": "3jnuSgrSJdntKw3ayj3yWS9pdbyScnvk5esk8C9Fd1LaAWhQ6L8Cyxa3cPRmwmrZ4nWi9sV3yZaeWcW9FjfQJjbs",
  "key8": "35HuHUnfiracUzdNwGHEsz3DjqTDNH4Rvbo8uqTFSwYeLBADWQXTmEjx8qqiLveML57PtR8Gq134A3T7YyZkkiMP",
  "key9": "2nH7dhfEEqV2vauBdJqvLJurXRoZ1Pn7cCQ6XWcnHZ3d6tbShkj7mg9A22irTLbyu1Ku1HbeZwwKC5gTc58rN8TN",
  "key10": "34Hq9igEUSQJSMhATLP8WucGpg6EGwXnpEP2Giq8iQnaXJGLE4byhL7pJsgkyokm1sBmtdnMh4RnLue3s2Xrk7xr",
  "key11": "42jHzDwJ51uxbWeGKwJ343vaJZSxpwQh1rfN16cABP1re5meHiv73FfKHEK2vfTD4Pyne4BEpSzSmQGovZtCz9H9",
  "key12": "431VrchdC64m8RzaqBuAz9YmKj19tkVAwRU24ygyUcsf2VjCBwjLaMHFuVEwMThSATNYyxowsX4PDcDnbVa9fVmG",
  "key13": "31FfXyogW4mYBMte8PtLnXMFu9YR1aoUAabfi98WHPMqWsUPGp5GJuqsXLAfQQ6fc7xpkrNfk6fs3MD5HVzAh65m",
  "key14": "KxjdXM1GDqZXsFvjjKQqvy2oEzhTuCUJB4CJQgatAFQ1cZUkiudajp19V4tLMG3ywGgnCxgVuFWJAK8VX1vUYXV",
  "key15": "5C5vBXkQgpow9cPYxbzE9KEep4ohoZHmx4Ujz4XU18KSt1Xi53qcC3NDrRSd7LxWHYymWDPUVkxNh78nkNpQjwhM",
  "key16": "cm4JFTrmHH5Cs4G71zxAXaRYyo8tVp2PKkewCNhLNwFamK4kdaccipTvuGgYbYrA3ZFuCMmKPHFeRqGZfUazggr",
  "key17": "NmzFz26wg6KM7UJLPoBzrKEmh5ExC9D1NoVbiNzvr7ChqfDdHFjFKjaYNcyY81CLnbqaf4swYGRCjNngPQWEtiW",
  "key18": "3K1Dnwn9QZYCAsouCPY6yKsUmjLBNNwCn9Xk8USpHHDFhhanhwjARetXJZwJUeyLq8u7SZKN7hFd13DBQ4V7kxfw",
  "key19": "x5y1M6ejKZsViWC4uDro8roVrRH5Re8jBrXTjVsCB4s9wXZwphatc6aECLENXk91nEp9TQ77Jo4VNK3C4oPhndK",
  "key20": "3dJnFSusnCu378M9wCUdcm7QhZMwQWLtvDoWkQ2xJvZREQEpdbCPHHDCeztgNggfsqSvf3QEL9Yqf2RZ1rBoaDGJ",
  "key21": "5RbK56B5ezibeJ2uwoNS4AuvhjykD43KRRw1L1RSPeaA7Eb5XT97mg9X8sW1Ui5ZRhna6EEHMogMbW53mkLDCJLK",
  "key22": "5y3JsEiGTQ4voGutZD7aVfQnx1R4WZHJrjopn9tXDQ75uLDYWFvNKLu6c6vrR54NUPJwbm9Vp4kSWKxQHsQGfiGr",
  "key23": "3JTsqE8fFjUypPFFubrC8msHNSeZ1ffcfYTUhCaTUbYb7xvdpaSDGFePkwzEBCgATCcNEoV9WAet3tKEXT4b5gYs",
  "key24": "ByrRiPdEUpm88MZR3AJdyjEgJYBX5R8irfh1zahpXzJ5gtu1CHsw1nqvsPDTzDWkLdGwtuARqwGY8hvK3fEncGM",
  "key25": "xh7kf5oGDrjFxMyZEnS8bvGx4KxHy2MzTSvgmCkoFDMHw9xzg61agdtumARRktJmKNeeCEVGVHVxJFZYfq4v6eu",
  "key26": "3Z6q5z1BUn7T49E8TV4RGC2c5QwzQSCd26MtVcfw1Sbc98V4a6VnC2e4V8zF54Mg7cb6MumoYn2ixLyCepippfuv",
  "key27": "4eXFmFE3QeRtjWVoZ57dh6Ym4eK3idVm3WCkWo3up1D7uBZCMAsbAW3cVGEVtdagpUPMPYCdDSoB5XZHRFngdSJg",
  "key28": "2EuN5XMCa3RokHuh4EhhJX5dR4euBMyE73iDNsoYhaKpaQoc7rhnJtfqE6ZnZZSs51vNUpasmpqMPQiTpWDhkwAH",
  "key29": "2i2EdbzebyKEo1amCUXMomzjmkG5spDs2diMRjpPxcfdoU1XRLuUhd2tUxTA675exHNNfY5yHkS3dG8f2UTbghCE",
  "key30": "3ma7BuuP4tpDzFg7U1SbCgz59eVjXU3KhdasBQ4VRfQNudU56aPpVMLDA4eXJm9voAKTqYHGeaiEbpo7QSYSFvzV",
  "key31": "4ihrKiRGBDHzdTcRSBt1rR2XfdEKUi3AweADEfyz6JwnN2XWfBEkcGMj2XHt3rurNpgPvLTFTzpMPMnk9YW8Rcee",
  "key32": "km5Aqu2oTvruTFKcoLzuLS32g3Q3DJHrDH5se68STvy27dSmnL1yWDL3dY397EbcXQFvmbrUJDATD8si6HU7S7c",
  "key33": "2GYWXXhA61EWaZ6QYGCE1NJSEBb3ZQTQ9ij2VoKEoNCjLUUXj4TECVEFqJpgFhzsg3cKRAVveub8uU1cr8Vgqyz5",
  "key34": "2tSi2ZC6bhjC7ByjsXWC6V47GQKxt3aT3wKD2dmS4rJNq7qjKQ7vDSX4w9hhkxg4tmrQ9dKAtqDZz1vZNooakGC6",
  "key35": "4KGH1GCncUJfAU3qhnqChFoVRBztTrSz8c5SoveZK2M7LnYxpMsGbiYgzuRY5x7u3KQZTrBWLY56xfMrvTUmVX1C",
  "key36": "35tQ3DiCnRRczLbiZ25ixGJX5LTHQqguwtDzENVVh8jC7bKDaMmLngFSdpGJiCuFuk7t2JPED18LHLXXxehgbBtP",
  "key37": "2xfKVs7iVTj7yK2ae4Vtss3NRMthmP5pDAdHVBsxeh9jof4EabWeRieuNa83r6PeVNykuUQboUqBDiBGRgMwnNmL",
  "key38": "64ES8CwCY5UFdaYCEttfq76C2STCdjq6kkptS9db7vNQcYroR4sTJPV82nsGfAFwBUjMDSUrEh6fJwUdCyPBTvD4",
  "key39": "5yFDSoEP8QNmwhj2JgynbhCvgh2f9NkL7wBDKUEuuvEVY9pYHdmMu5qvH1hnk1XLArmkAjwN4oMgeaeJcoCBgKrV",
  "key40": "42ggaJVRRRvig6sLfjhhRNYWrnDrHt5U95VRsoLqFsvVynZambhQuWPbassWYuSriNXDQA2UGHTiMrmyG7SDvYNX"
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
