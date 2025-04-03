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
    "4WvEprLXRsG7xTp9x4q1D2GjguFwoystwxXcDHHqK8xSZKtHvGLV4kKxhMNhb2E7FteWEm2pthtjXB9vrbvdNPKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Zg85EBuZ1dJtSrfzS5HUzqzEf9N24stdKjb7rj14L2NSP5r5VFiY6veZbupcnnmTqzFK9CzLeN68LiX2Z34AMn",
  "key1": "28eFyBn5TESEV7YEAyTuWF8h76EhYEKKAhZ8xEPvebrxruvFKMpbGNbHGnuD6eknTG5Xz37tLdmiKAmptwRBuyP6",
  "key2": "45ZP1rENZxD7BoZEXagXZnthLT8TYVALhhvxdy6LLjRSPNW6BEs4Aig9LiCbSDtyQkg5JTGdgoHv1FLMQez7Dz8i",
  "key3": "2q5qxH82BFKhXbppDE57NSv3sJd5QEA1c489pwFebjFTGBqV4uHcBjsbTs4fSpaju7wJpkQRxT7FnLM493Wz6CWP",
  "key4": "3gwseXzEA9QQ4qi6a1AwRQh3odCBy2JScN7DUpA5ZYrZx7Eye3vGkZL7h5mviW5QC5XGyppaS23xBGQKUMzE8wnx",
  "key5": "iFX5QP8c4XbqAtG5VtguJ8WSm2qUzFP85Sd2G5YjFzmUxLVEcWuNyPdwTvjFKDgjAwFgjmAadqvyFLk71zZnKqS",
  "key6": "2q2H9AFpUTZPR4kjcS6jwZCefa35b2ak5ztzdetPMj2U5vWgQXFn4aaSeQ3CeKzCQKARe59PBe5ZtZ8oZcSMRLgD",
  "key7": "2KqMSBRiwoZsQUkUEhNgt3rNnu5SufkxkGBoTBwHNUgKuUB2hh2tZFPfav4tddornQgmDhwvxAfneJ5AojTjCeTs",
  "key8": "eKyN13HhhRrQ8ZvMq3MU3V6LmjzLS4Nm1ZUkPP86tAXaqZxikngzt7LEVC6brvbQcuxSKUsGvDimjQcZbUvu3AM",
  "key9": "66fbky2b5swHE5ZkNqChreGNgTHML7qofRbuJRyk7cphZ848sdSwr9rQJyvLd9snoqawWjFi985E6WkPBrorzrrT",
  "key10": "3D9prfSsVJCiK3MctwUY8X7wrLENMM7YM8HFGrnQGgmyGUBaYMJd5spsYNw2VrdoH1g5oMnMgoX8YjezWy6arvLC",
  "key11": "2Dx8V8zBhu4t9jxdSAJPMWPqoN4tHjuv41m1E4Xiw9js9vqH8Rc6RBitVM8zAEu5PNGAMPucModmo7UYbiaoWbt8",
  "key12": "513kR61yACWt1YQeyYrwWZymwrWYNMyNorNHyVo19JV1783NLeSaX344JMTZFckA8WCevg1FphMFV8h3exA1gRGh",
  "key13": "o4Zh9r8pQgWmp7peDubvbEp23pwwoRCuEvTe5eby7bcRmjtdcjwAnx3aAngCKXQcmGyaiFvekWThHUnKZFkxuaW",
  "key14": "5h7Jkgz5YT3J7skDsEyfFEiFQpqXgJ678YNvu6JJqsKw4GdL2ainmLErLAhSZmeTEEEC7zJ21tPbfmSjZ3F1jWHV",
  "key15": "3LBqAy8ztWF5sEMUhza5Easw6tHs6UMfh89hTEWCg3RDgrAnCSuiTQuW88vZvk5G9FrT4VtYokDUbcdo9s4W81JX",
  "key16": "3Cz1otW3qvR7cd343zACcJTK1UFULDsiGyZv2Ym82iSUQVLQkmnoQ546uwYWqfg4ArEucZR22q4Rs9ShnNZhHSDv",
  "key17": "4HQAUod9uPwotgcFduVTCUbFTkPPrwbaTUCf8S1tbYEAnzpyZi1n5PRGXrWG88gWTE1aP5nSKymXwnDRED86Jf21",
  "key18": "41VkHkEW8QA8sXq7Xavy8xNsp4Sq66Uq4fQYn15mB6JCYqZ4tqAXyR3D8gYYZGRy2DWnGscfe1ZYxCZDRvz7v48X",
  "key19": "5J1TDYqP15g9swa5MB7JdFRWbBNv8KTJT8K3Q95C7VsNxPCJqwTSdxz6WEPBDKzeWNLDPGvkqCtzcaCQabYTj7DU",
  "key20": "4tSpGzNy8pZzudNZTixh2Fc15eL1rS7iVLc4mYzuFPdyoQEjE1FGkj7ARTnxeStSvDKVtwV3d6SE1dnT9acSija8",
  "key21": "5e8fetB2rQUsAWQ3PtrBimCft6T9iYKjtaBrSds71RxTCUfGNECRVVqdcFxvijuVqFgiCArJjrmCXMBr1K2JiC1s",
  "key22": "5JtVmPsoTDpdwTUJhkCszEyFR37mr444pK7ryxxLmah3HbEEhnGCCrVPUiTFoENSkVCx2x7iXDoBAobDaNfnBwve",
  "key23": "79HncJnazNx4SPStFj8byLEWBWJpFCQcZtDjpVuVtg36PJKgB2kP72qSjsqUXkyTGiV6Eco5PEZdnpGvY19tKcr",
  "key24": "4h3tVVw6Ed9QVwEQWfPBRzggQ55wLnebjJy9zfPxpR4kdoReLGmDjwGWhfSzyXr9wiCnypd6jsto9FQQGtTDWxyu",
  "key25": "M23vab9q24eYtTv9j56LNfrZmTdwpMj7ZJfqSjRfRwaFiCEaavtQbpFDyRvMnbuSuC9mrdt2JoeyWanGcaVV6Yx",
  "key26": "2vRAHe3QwyMFc9o46SQGFhg4HTBhWGYNzFP5gDhpyGbizHGGioRrX9R1r2gukt487nL4KeiRgYBv87b2Qb3T8oDc",
  "key27": "2zdsDRsmeJX9edm445FRMSrThWgshuMrhr8iDnj5YrySURb7P5BcbvP8XTDPHnADiXjHozePAgJjeniKGHr3pLSc",
  "key28": "YEEWhqm9osM53tHWtWVkn6B6cTvufyYEFFxYY1iXpVu4ErCDnVcNiSRPiJeWwiBhyQ5N587rgmnroSfhjtDyTsA",
  "key29": "2Gx5bKdjaS94wfP3ARqs3JcGc1TwBtJXJFrJEafyhY75XDXNfr2cxmoPV5WCgxMQCgZefDhzao5RERquS9twqkUd",
  "key30": "ofLgfghPFZTYUvxX3PQa9yXFCHJYpan6e3DfZgUHFv2ws5xzXiVY13AEUMdgvqpiUYy9jhgKJtb3UurAoMVWznc"
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
