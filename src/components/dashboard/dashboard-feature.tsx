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
    "DKRY9D2yDF1w1MjQB1bJFiFVQ7sqxSNYKL5Y2jDQMrJsjkPTGEhmN8AxgT2prin42GdF7EeYR9tTZdsaCEfiw76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sABoosCjCQzp5NVxoczvpMGvMmyxJCBJmguVQZKsFe1Sror6sM1J47jbDVNz8Ra4Ufi4fjj4UrV1fvfzG15qkN9",
  "key1": "2MN9BexSQSfUQqeRjfF5JjGeTv6kbsU92BiawKuRgsose2RvCDsLG4hMYMwgwVGTuBU31uA5AsaLuGRSLeGMRLgz",
  "key2": "tSjitynZQe5wR8FW5SB1Jet3aN6ReskcUycSxpLpYJJY4cmLK9Vu6GZvmqrkSp2XFCAJRFnJPjAUXV98bnW6gsk",
  "key3": "5D6g9YLnuhkC9PTyCpyoPcLeGEhwXK6cS8UtxnDNPYxjNs4w2kMarWoJ3R4jsKwBvT3LM9jiJYMVzahemT6b1Usx",
  "key4": "47zKqqw8DJdKkVMgBC1WK5MFANk2tFc3owTYew1937phrkgT2qMxUNj6x6nGcvtt3XiyqNA3YVcs5cyjo7MVJa7y",
  "key5": "2KmLWXpGw2oK7U9P8C9m5wKhJNAw4FXN5PCDkqR3KWLbvrBsdCwBN2TwtoresHxG3M51Wqq4jH1fnERgM3dyY8bc",
  "key6": "3RqtmXQxANH2CL1iZKfBroWQWkNPKbtqbhjHU1dcwnTaRaXNc3b4R3NxrWhBRxmWsr1BBGDBTbk5LBo3xNWJUJBG",
  "key7": "Am3ggfdReH4gkZNSbNSuMX89qD3thFoitiTmZAwzXqJyigN6pEiSeAjhpPd3LXXUM2okk9TuZeS2sE8vqb1GxqY",
  "key8": "3EaVz9wu236LXEmAv6b3fpqfZyFseMDTK1RS6ZTohGHhBTMAgMtCJQSTdYAsYs2XuU74U69wfLqdmkjQ4MrHC9Pt",
  "key9": "3prbxfpX4KHt34R7qGs9NSNcKH7jwNoLY9rqSdCHbGZRfVfXH3vsYReHmZtPLDjg2Fr2JboPVXqT1Z1NrDKkNcTY",
  "key10": "2Z1Zvqqv643KSSvkL1REbEfMMfAbgzQbmChNWfvTUR5oY6LyYNgcN4qYaMCeB3YQR4K22D9Zu3kKq4Uq9pvtQxsi",
  "key11": "NtdN6fQd5jyrGmTCiLbADcms8Y9NUR9mBybsCXBLHfGFDi15bmBD36Nd1x2RVYNiZ9nvq13vAPmFEovvAwuszJ8",
  "key12": "556YHEkoF1pWCDG8s1WyTv6dDm4371HJxJ6cBC3Wo7yi1kQ4ep1MNcawEe8cssjwDt9zAUDpes9X13qCVgB3Q5Fw",
  "key13": "4xXAGpo4tWB6LaPBPxrVPrrpK36XWM5mLHFArpiuH7cgncQ43vanqfRQZ3gypUMVic2VLwUZsHyGvvon3aLfiYZR",
  "key14": "Cz7qcb3SW6EHRxccQ5a269kzGvpffwDPaX8YQtnGVyzKbTpu1jALzkadPrp8NNLWU3PfKgmofyNjNb7RF7d2gWs",
  "key15": "5CnEYvyuXX1eSUqx3jJm5KFrf9MPva7azTru5XY2J2AfmGbXCjSmt16tZ9rJm2iQRfbKRMY96nrUsqUNqZhWSYMs",
  "key16": "y7wDUkTkmLLFs9gXC3PLYaWiWF6e69FgRdKzsx9NxLTuiyh2XwpFGWn93gpQh87B6s69ie6ZXzUnJGC48hvRq1P",
  "key17": "4QKQ5kDbG3VkVQAzAEuC1jyNUHEm1j97r2qh2fb5EiscRME7L135q4F6R5wbxDcFu4opE3paWtWPScdtWBhTTeVB",
  "key18": "YxTm28Qj6JV2TTsX7ab5GPDz4Geir5KYQKUvqwHxhguu1AiTQiJMqJWardG9L3izDg4KKuMTCk4fgFwKGQstrp9",
  "key19": "2WeHJ2YEo44odsF2g9cNcxHkS8gg5FzPakxsg32Td4sR8PuTfBbCz2UAcTypVQCHcfWpjsSYs3jQf79fpWokTs9n",
  "key20": "513ZGyo9euCzhT5SSeK6urTKtCPr6mPsPBJVzW6Sox2jjQiMQThr3VvuduxDqmEvuBr2Rd1uHQFHthqjXqR51uNa",
  "key21": "2xfLBivdoJie7FJuXwSEyLGWF5i46ZPdatD3gB7TQgCx7jbki6YS97bWCy848AGLKxT8RtuQbyqLj6gbUnCWy5xe",
  "key22": "5tqpQDVFvDFh6MF3XsCKbFe6HZEM1kYmTtyADaiMRf9NnDByxEnATMvpLBFZc8j2LL77auPM1pbYUsnLUXJbaGCe",
  "key23": "2wdCQqqhwgruB24ZUjVQ83zqb3gFtfA4WSqAWapBdGHKgg3VhwNrWoaMrqodxtRsBYqySyuf4EAebZ2QN4zXijf7",
  "key24": "4ZxXzpMj2kC946vpuuGSvZ4Wv1ZTEKJPoEWhmTdDwjeu3PFK7hNxL5BNUhuQr64jZ95RaSXxcwf5rqdtmY5uyPeg",
  "key25": "3y5w53FJhy5e89o4SWkNfH1uoK9PqZPv5JpiJEX7UMo1asoYQqPvoGruYvtH4YdppZbYdi1rKqR5u1jmGZ9mY9KG",
  "key26": "Z9Mq23fRujYNVVYWsJHqeYVHFgu3ia4io58kpizwcwuGEEWz1jQVdtpiR5CJ48Y4sN4u8HjE21fnYndDjAesw6G",
  "key27": "4oBKy9ExndH3QASPLbaDD5mT8AMMUoijgUTPfcepEuh3u5kDbC5fiX9YDmANaMiLDainEGHepLyjm4V1P8GMNEYH",
  "key28": "49MdGfwpQKQstdPGduFxdPjyeDRVyKyV4awHcJ7vfnteZzNj3ztPwna7M89oHE4hbRmdMyFC87iJe8nX9Rywr6Sb",
  "key29": "5DiKQzxBJFfndhYHLMnZFiQLdQWW2KsC5SVNPRAJ5MmbYi55HwJtMmAMBVpqkTLF8MonJjkYkHWZuDnKxN6Hdkau"
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
