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
    "3ebEen24rpW1rokSSp3wMPHDX2MoAbC9GxfvaAuzv3XZVdPwi89K81FkA5Ypqh8tpBNSmJCoVJWe7t56V1KMKZnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HqvBhiYwjnzWy9JVSj3CB56USXt2hqdYunC4fZzES7jEzZ1sdNewPsaAw2AW2Zs47Bv12KxzN9mn3xWvChaFfyS",
  "key1": "4sDAcxA2AJWknyG5MtWaJGUfocT5JBStFu5mYGVp6YNPJWMLyE3XUG1GconUiYFPXjychW3oBweMVUE3vLZ412Sk",
  "key2": "51bWU5MDzj7Qjihq6VGiKsPASHdpahoCoXdkdEsmAc2eSSN7cHat2GhgGjk3TUFEYwgGGPEWExidERenSmPDDgRN",
  "key3": "4Zyb2jFb6uBgcnhyTsAWPVaatD3RXxM1HCSjVkwF3wi1JDcEi5MsRfD8a4n8FBYNT3WwU37MdQYebfRZiecjDZio",
  "key4": "61J4sfi33rULVcpsN6j6YvDRNaWz9VudVgP1AD86o1E9LzYaDb9Eri6xF4J6gBHvk28oFWbBuTQoLdXS8S2ctg2o",
  "key5": "3aqn43ARG3noLeb9atw73knucFhoSvFfQuZjbtXPfobPCiCxr6BgtAmd9m61ant23Afzy7mXMRis5bkeehgkBqxJ",
  "key6": "3XdU1wrPFVYY2SU4he7us4hbUxTNo8iwLdXpRKL23PweJWi3CUqhsqkcT7GePE2LPzrNU58LVhtkj86uHUoz91h1",
  "key7": "4brvxnSCnMwKpzBrkdD9T6kgG1W5BLMxM3oaGGswWNH7gV8kirG6RnYCMCcL2V4t5FNJmVf8vUpvNhEu8AfP4uaQ",
  "key8": "2Xpr3wae8VCaYQEEH4p9T5QDUuR1gskYyK1MWh1byxPGj6vKw99Mn9ZACAwPftmNUXTohdt5W4GcAxY6FaAU8ZxE",
  "key9": "3uwABkHysYcZhVDpy5XHreWmqJEMj3SeDC1SYCtY9PawzkMVSxLmFX1WYSVrRRtsYWXm275T9VX3huuijpVh1mnJ",
  "key10": "4M8C4uMD4A2L7QUdpmxKoxEobTc55JnNVMN4FMQ7A3LcwUxhFfVd7jSBoDB372nxELgz9LnHqfkCqhBDVGXPzX1S",
  "key11": "D6j4syLhXn7j7i7w8YJfxRQgYuTsTscJy8ooyLnwxFWLDyJX5WguybcfyviNkJyLEwV73mNPDek278rxnyPWHjP",
  "key12": "XybLHD5ywANJczTiCM1fR8Bqdxhdw98yduvu7igiaz89uSqpfxBh7hdJvuKXb6jau7ocHv2sq15tT5VsJzrLN34",
  "key13": "5WRPmkFLxvwGarMg5xtHEcFDurdGGCpQ2PJnYWDyVZDCm2HotyfqhHFXjMMZJckb89Rszrep32QEtpBnAokqJB7a",
  "key14": "5Pii11fQmLdpyHAYSjdyg6DtzRvCqeLE3yj6zjJhH7NkdPkntXQJG4svmTgrQjbY421RaRexgYWYiSmiQmQoRabx",
  "key15": "2CogjNPtRuFMAcwAvWe8YCE5vcyBc9PcUS7xfsHZYf4Df6wzFMwk6XsFhStd2U8xKLbFfijdPXJBqmAWhoTHsnNC",
  "key16": "3XU3z7WLeJ99EgjcRgJEqAjedJyfp5SZS5GRQGa52ANcmzPuAd4ThnEQEnREuCeaqxSHU4rGPJ6oGzVwKAEBP5h5",
  "key17": "5jeqvdYrSVdv9cYRJ81i8m1GujFoxP728v7PbcocBM3wxPtsQHMsZesJGTTprcjcumcFaoKaDM64Xa621GGFeGzp",
  "key18": "642pqC3WWnysJHDm3CvEEiBNCMrUzAj2DE2Rew3eouXjugy9E3w7aVwGGD6FRbfqBGf9rFgrGWSdxiyC85qFpsej",
  "key19": "28dA9LDHE94gmcBHD83KwNvJNaPe1mHqirgUNGPGLUnshJvFdmuAp6gRCVhBu3jrb9xyJAHsyv7e62UTsjDGfAPb",
  "key20": "5gYrBUAozxiotv7DmB19D8LUaVP9cji4UWFx9prNNL4XegoaV1aUSQaEQwPsDByAHQEFY2WbbfSsBMMKFPpuCa8z",
  "key21": "5HAxuEAPNyuvqPJUY3UKL9vVLwdRopqbLtXuiAi61TAdw76iJMrBbgv1WrPUPMFEeVuN6oziNWFaERub1XpCgHG1",
  "key22": "3WWi2L5VArbNh313EK1yM8tW678LmEvHeXbDfNRo91d3kzzZ6E97QPRExwqbvaZp7BapnBDKooWmfsbtyLmmNSxF",
  "key23": "4ypojL4g6bb7JD58jQXQ1xgnrR4hbp722qDdgjEUqkytd8nhPRbfrhysVb648eP3CerXgc85rb9k5jJNYDPfYZGo",
  "key24": "Q6Se4rPoBv9vzDUq8dtpxsGftcsMSriopcoF37TA6Ftg8iohgksrP2kvZL6NGRzGnNtAWDwSiGd5QoPPtWGtKWP",
  "key25": "4e7qVPFPE7iTcVVhaPvgvKWe2QMGUyQdRGzm6gYjeLZuYqMhMybwWiD4zdHWFsoaMoG2t3EA3MYsPGmHb9sHHuhQ"
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
