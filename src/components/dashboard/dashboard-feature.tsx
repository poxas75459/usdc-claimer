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
    "45EqxZ7Kz4iWtyXLYYw1SiCf2HMph6hTcN16Amh1WBW839Eguj16SwXvpcJifK94MncZLY2cDaBbbhc8qbJeQ32m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXjH5gs9iXVSHV1wuKcr4vHJo92Bxbwcq694nCp3GyKbbUKjPT3nzABcxuw8A9YYu3q6d4idFW6MrqANWBQsERi",
  "key1": "56ZE3NxBrEr9SpNwcf67a6H4j8hsjY8nMnUVu8byE5ot1WQuPdH3JF8CnfxW5tpAcpKU2jwUy5PSNZ5c3nT3XSXp",
  "key2": "rzKquq3VQofQuXxKmjzznvudStgzDQRWYYYF2Vw9SSXSsiCLoyRTfMeeaUXqLak29k4Ep25XJfo2LefNYKyFk8K",
  "key3": "4JPwMAFbvutpxJHKCu1CN7NwonpmpiCqiS1AYUWWw3W5zSqNbpmPd1ZLnuryFjbAoraP9NkyzzuG356rjkhL1asB",
  "key4": "G3hMPBKNTkwSKMKYkTMhwaUQe3QwXDtKMWGPnbrWXqM6mrWQLXX2s3ur6gC3eXSm2pwfZxDvGDwBDGBvDAQoZJ5",
  "key5": "VrWpPC7MK82U3ruJBrP94NjKDmUUADc8DvVT4uTZ4GvTNYZzZVzVSKYAsvrkmEug3iZ1thCkBFGw7PpuK3kuc8n",
  "key6": "5ZwrYEcYNrVasCmrtWHzV61u9XVrfDJjDTtjUx5w3LifpFrtuvvy4xGcfqWiN9N6DdefMZYET3qvZc9aHSQ9etHR",
  "key7": "rDBXsXbJXEn5wyrjf6s2bNmAZzgbPY8XXUcZmfBMJLH75Ya7nV1VwjLs2JwNZSK4tSypS3Uxt5RNw1g7VQPZGZh",
  "key8": "3TSBnJ1hfmVNf1oLADVCvBnnERukfu3Uve5vc9y3YAfKcSgKQUrAgZuSFsmB6Ho33dMY59Q6PkjeV9TLN2bApEmz",
  "key9": "2q7hzZ93cUodAQkgXJtwTLsayS3G294TwUWPcFtXktjS4zoRhXfNXhPBxADa1MFwvw7uxsu4VKTMJ7SgVteNrEX4",
  "key10": "2DhRHJv7rGDEf4Wnp9fCK2VnbqeYUCkFuekBom8iq1Vad2E8UMdAzV8BHy3m9ARU5aTVpMj4dmH7U2twgV8FBJaQ",
  "key11": "5xjnzU4d4hU5NftNtUXkmg8y7fUoZMncHSBrsXqdviHctkxBws9eCSkWA1Smtmb7RK6dUxxfKMzSmFfKYiFCgyG2",
  "key12": "3Jh9Q5v3UjEa77ZUK1ApXECo76gbXzeXzDGdgsCPAxfdYEiMhYrMJcT4LjTVt1mgB4oh5DuKTjHwoZiJrudUn9s6",
  "key13": "3ZfMTTtqo2jpjoF3DyDi3mafzbx82ZqkxdCBAgGX6yGbawUm9RUYKjvonzLVFzEVYe2nrTVjbLMisWD4LiCUF58Y",
  "key14": "2niqHube12q57ZDAW2Tzbr9hPwKgo1LdaNxqmojyTjhabCUzkt1ykBZTdhvQHjo9FBmtKV57naMsSntZ8WwJWH9e",
  "key15": "21SBLknVwMH2xLPa1kLg23NeQbys5nwUzcYipWDZLmCvmyySC7wE3GuZJ7Uy4LLRCQuA8H19aSBPThTvfZ6fzFCT",
  "key16": "X3KMuDHzjCVkBTM2uwKfG5x7bg9WyULv2hzjg3cZ3dkfMosYyUhYjN5qKrwtap5acYqeDBbFu8gtPMutbTmtnVP",
  "key17": "QwPwHi9EzCgcjDE8i9WQi3U1NnC4XqyuZPkQ1vyFqhhRq69X2so5vmh9662GHvtFhaCUQt4poFPmXu6ky3uxmZd",
  "key18": "xds3TeZSAvSi1owHM1vqYgX37FQuT4JriQ5YVEKVKGmXuCa9QGzg4gDaMHGBu8T8odTQrmE5ArvbhGHTgqqcubY",
  "key19": "3hv4yQjLPZVUsHf9s9c5i3B1YVi2MwUEfttKYr2aUU8J6KLK8MrZQepNT27SZar4XRtkCJ7pMSkCdjGHc35TFTeo",
  "key20": "5fQTQ74eHg2mVv49G8Xh5eHLvWXQeAY8AWTqRvJUS9xv2C2Rd1NJiGipC7CYdFUGAgfs5V5Q2Vrd2U6X9Hm9cDtX",
  "key21": "2hCnpa9uDk5ruY1gRzR4vT1JUdw4bNtFr2DH8N5HygaVHsc7BhNRqr1KziogTHYuEHoFu4FM9GGHmBBPirvV3JcL",
  "key22": "3txWsr81A8fP233gAFAHsemvBVoYAeRHkVLTx41Vdkn79fNND2sFZrgVKGj2HtckVtCxgcSfYpsZeMe5Mx7YyugS",
  "key23": "3PBXaG4Fz8ADTpGYvgh8taYyLHYjj7Awv2XunfUBLP58vwXuwoPB8S1PaF66JV7xCW84TeXm6VTP1oAPUsyTeKnZ",
  "key24": "5xGVAeuVyKKLALCHva5jnpf2xscoQEDKm7cpLb8SghMcLfkLfkp1uDRiMsrQekrCcWQoPshQwqM9K463CnADd1eM",
  "key25": "kqtVVvZo66iTgVFAXFJZVmzBejQFDw75bRmLhWoCEyhdp55XtVfnELvCie4n1cohZJtuVNPwcMBs94XmtzX2FJm",
  "key26": "62ppXUxQtZghXK3Nda5biaNFxgVhpFovDYVE4T1HVDXD9hCKA2tv63utQGZqc1q67hLNky8KxxSzyrMnm6CxHWx9",
  "key27": "3PeDHphG8fLCnm8hywNUsUym6hTYvmpe1BoQ3vzZRvcXk7JuE6BHopLzPXx8anS2sQxTGNaBvdtCzsMV3oTcckXZ",
  "key28": "2m1c6q3RCMrrhXLFVMqFaAXpo4dRjnLRTyoXYHeY8a4WKiWcWeEBv8teUhVsoZWooBtuCNnnbRZa2VoM9gR2jov5",
  "key29": "5weRyrB1CzB9orybnjCao6pu2BV26evvWMZWGtBgmBwJLh2uNKmM8sUjm8GZ5SfrWyBybXZviaybLvhRqL8B1KuT",
  "key30": "2xWfBuyFTaueLfC6Sy5G57GAZ2mznVrWutfL49hG2mRf75nvrnZn44TQztTrpoxXpaop9bwFrZycFEcyCghJyXk5",
  "key31": "5mHFKpzCoGrLicgA9RJhPUkLHfGxVV99bWvGwnZhwy7TbATUimF4sbPY5W1N3wuxKoag5cgr66vPFXQDRoHBNPmW",
  "key32": "5kj5fad9HSnZjJcP2iZJBtUExA8YJk4re7wKCkkLjoPFbH8dzP5jiA1uew2mwYVBQHwV6qTV13R7mZG4VfRHfDhG",
  "key33": "5ad4q5a1DkvAx89Nz4A899zxKRbBiovb71LLwKuGKSECxKKLJg5KxmwuuTgNrFsYXx436KNcEsgzYtWLKCrSf6wx",
  "key34": "2KnTXd5fmwQvd759d4h56ZYB8J9o2rKjs3ERqwukqzbc3wo7Bqj4wyAr5AM7Jk5Bzm4aG6rRSFZENfGkNPP8N9N5",
  "key35": "5joH2o7zEAxbpMdqAv2aD81BqKusbVSgn6p6AxgXGMRH682EevZ1DSWFWYVZibPcnFwhokX9EgH7ShYP4zvM9LLW",
  "key36": "3jGLRYFFCWvkJ6KaNenZtoVnvvnPMtQDk1ZHSDk3cznjep6FrFaWV9Uk9REs6MyerShqonsKqJtyEL2c2KUag2QA",
  "key37": "2nAePm1m95UawqmXKuJZtB6wPUm6zma8WSNHs85USyQVD1Fgz4NN1k9nYciRL33ubc1v5QYyetvcwziDUeZgcUwM",
  "key38": "36kxb4EJUD6sQy2bsWs7oGPhK93iQLWzy9wW1rkNmWqQSW9nNonN99FZAG2JmtXE3YnPLyYEUF9FcdTCrVMKrPv"
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
