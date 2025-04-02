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
    "nNqpVwikLKbXcm6MnWkihXxrbijjBE1m11S3TKno7Nb3Pn1hswVgTmiB39P4d662c7qqRGpqcSDwywS8Htw8vwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVkQYZwUrwZ7Ftz33VDRgpDYLCHq6g9E5ELtUUrbBX79hgHxULSyErFmCcJvp2JQxZ9vVMSJcs4ZdB4EBdPwRih",
  "key1": "5TWyBWX1U78i3qoNKrRYRxYzL1eHH5sD6YK9xyfw1CYjhKFvTQpdrrFS8a2qQiZZDbv7aRusdWNoYcqKZQrAS5XW",
  "key2": "4cNpAbVyZg34qFrvbRfL5XVh8MfSp1C94f39etHTXWiVzD3BfFQaU6hu8Uw3ewEaJF4MErzptfHk3Ce8rXdzEyLV",
  "key3": "31gFXPQtYhvAPoXRLD3DpMWfrejjuvmF73t5zbPtyA7jPEgxoHHQuxX1mCKK1XdpshwziUGguSGMeDpxaTjXeAy1",
  "key4": "43TmZNGdUBGwPSunWzMRuz7fTrsjgx5XNEtFTX4Kr9V7t6tC8UkxyUUMak4yfHDKixaNF5htJ3a95TtbjyrowYXK",
  "key5": "3yWYVjDmFbPaB56BtnNRybieLCeddN4wJLsx8JEuxjVifK5jt6SKngk6Pqykyzi6GJ8NHFbTH39fDUh23bNFnXSb",
  "key6": "jnsVURU5Bsuo15kg2jfErcgAoqTKwSsMTrJEBvJTYrz6oApmvVER5qh7qWfcyvSUEUKLLrRrdmj3hSeuY44M6Tp",
  "key7": "4f4MGZNaYh6nzLjFUMVjFvrkgYY29JcZUWrsL1AJBxnYsGgTTFZx9qq7xcdx6wpgxcvWVtSmTiLmegtAAxYsNab9",
  "key8": "5CkCJMPDechxnjGAWjaH4PfQHHzJ6ZCc8YMYT2FjLqLFfDgcmmdF2htFcQgMmN5SZSwSLPStUV5uHEzVpgjGGZ3m",
  "key9": "iRkjzpZcdZZpgP6GrjvLf2rAXXS9m1672Gu1xBaV2ShgDfUqMgrkcGWvKdiuFpVBRQVDyCbtkuXVRa8ZWvBAM5d",
  "key10": "4GZKwPccToWb6UGaokdqCGoHbVdZWGay2tm3vKJ2yEPEP8yyoshSj2NFmPYt4gKqjMh6xTD9RuM5sSxuvnedBiDe",
  "key11": "4qWoFztkmhjT7TidJU2Qu5irYxLTTDbRyoiQBkxqamLKsUYpsEMem8CVQZgHiHevnA6EFWAYUtTP253wQnsMNyZ8",
  "key12": "3UhZZsDLuWyYVPuBmdVJLHdZ94QaYq4R2Tc3YNXxutsrszYqjnWbrL67Fq1PkTMFe66Ga6q8cZq7qTVRaeENEp4w",
  "key13": "3UrMHpikkLPLnN5Sz8eErZQdHeZQFf4wxJ8945Rk4LbDgUL8xffkcGhaLqARxHhdr7MjVA8Brw4kZXViQkG1JHGC",
  "key14": "4SqSL7By7dcFiHfcBdQ8yHUYinQF8R28Mx6M4yncMk3a5y45nWn58m1LSVihZMFLTHmTTkV29PmdrmEU8F1VcapN",
  "key15": "HZTrzaPH6A9MhvAtKf83JJ8RdNcERBCCY2pcPqJJwVDnexNvfyZSW8EHJ9xrAe4UWnbGajya4GK89YukJxViCm5",
  "key16": "ysGWrnq4xu6TekfqeQW4MswnP2ddtuis3JjKWF35rnYuBi6pry8ZCowNyiU9gXyK79gdVNZKbh9dP6pQGdxgi7x",
  "key17": "5sEWgfJ37A9Y2Gfp7bRd6a4dU2FfvfyajpvrJa5xnD1qrnsxEFUZRMDPNdmnhvk34S6qjghiDMDWRNHr7Aj7WNJd",
  "key18": "7PLB4jQRDet7qz4faU7uMMvnA5VCjN1QLzJnw5s4UBz61k9kWRckGYqfjCFBkvQoo4AoFXvFpKJN6TeCnYuZbwU",
  "key19": "3dp5vSU6y9FV8KuFRfd5okXd7k6RyxW8f2btdyrY5ZgDycqgo7jLHXNPJF7B9uQTKmMEVXyVah8XzBBm8c7ns9yS",
  "key20": "SaN1U5mJt9nchiJkLmX6YzvP3cVzxzoWwSWX8emGfaJUuJwaASLgzrzduTdTNzPLAvpiEvztGhtgQBFqj9f9uyF",
  "key21": "5LMJPc5P1proW9ujtPMYDjJANgZzqB7QTY81BYMMtrbYs6ek2vJWRPGPaF4Ju6VbSSdZPCT6CPiYKsqu89m42nML",
  "key22": "61ZDPvDraAFtRkXR6YMUevFppdpjX4fkcQ6y6ExpifwKVB4d59o244RWR5eQKgG861PKRtwPSsmP2b59NWUp4qwX",
  "key23": "3sLS4MLot2wYWYbi8sfTi9FEdfXL5Y4tkksLJgKVZ9A9zUNJC5xrsQABVLziXmzQgUwPisNjzgQtRK2eS3ijRzJg",
  "key24": "4iXwr4nkTHZLegkowmTs2ZNNmfAGByHCPca9mZNVuDZjTUBVqL8231hueUxHcDeRAn8osiG3mLPXhnc5KzasB83o",
  "key25": "3n4qMUF9qDRv2Q2qdj9o6FvKmAUYoyuooBzjjjJs6CHCifbE4y5bpPn8qQbEXdzTCPmiVe661kbMb3mQ3xz1jbtr",
  "key26": "AhXBei2Z5PLqpbpojNcv9F8SuUttfmgYyeG4ZxvkG3ERvEU3fs4QJbdjHdLw4geK1HmEz8iSoPrW7J392Eim3CP",
  "key27": "3hDLFqgfKTsD4J51tB7fKbQpRuSGr55BYPTF2qQqeBbNFZLGFYNc6NPgPp6xnDu1YXT8EeWXqx6yDvq6f6T3GW23",
  "key28": "yp3WwrXrLWW38hwjnqwds9pfG5Jjx9krpPD9LgBd1RZgEWAqaUqk8EWCjQqWFYUo7pkb4L6xecW81sWn4tT9bYK"
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
