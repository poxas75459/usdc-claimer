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
    "5CCgx4rJhEgQjuKoqrj2c8ay5z5Bx396FkzsqpgbGuUsC3PWQFHY8wwZT1zf7WC7qA2rTCoVqbVDvTXqp2FSUh4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n99ngdAXxtCVozZ8JmMQAvyz2ee9dWDP4wXSGSXQvKrLBvbJEGHQivDJDoCfu6bBwX5iBwicGj6B8tzQVFGRV7L",
  "key1": "4E5S3Xvhj1rWqmWd1oKdjE9pACyxjPfckX7B6VxgY8JMtcJ8vm6nckBnbYBUXwjadbwhY7c6EjbP5KDT8UkDtKUH",
  "key2": "21V6MWKt54tJpF6XECCxN7wGRaMovYyAXNH8ZUCTQrW9zqSqpmRjkXXq5LYiCgmmJGCcxsHej5bjsY9ezANfyxFn",
  "key3": "4kvei1PRpo6Np76Az36wBweggnH4Rk71ERvF7uW6Q6m9n3zj71LjcR3oZC9XwB71q1BKCta5E9midSScRxyajXYc",
  "key4": "5nLrKX7MUAGerPL9zX6HjjuUi3FJFe3WSbVHVyqqUKyFdR3CsJTU78RQsQLKZQHnb2cPkNd1FskDtzPVdAKXiwHt",
  "key5": "TU9uGbLftH3bX8yxAni79owDFeUg7bi7VhghvgKSboNUxySWubhe463xG9EPJqdLDJCHooXSX5NPhzYs9FCDQh7",
  "key6": "4BeXxMsTxWU6uBShAX2QBBiVoKi3FrWiow9mmthrvq8R5C3bNU7usaj4mJfFhPuie7hKAaGb4KhY5uqkFd6SHz2S",
  "key7": "1TaubM5Ytr44JBwmiCv92G4x1tDoZaVvwWoFc3ws2P76jmKy946unRdKgjzNYSDQ38gz7CYELLvx8virXuDQroG",
  "key8": "516nY5odJ4cBNejKTNBnGqjfVRW8LFdTgd5hHWMTWQVoDUzyHXapJhZvNroDxhXPMNuTwgL5c6Sk5DdD6TZQ1Ztz",
  "key9": "NqMoCY8PvJYTTtL5sgsnHhz1pQCXu8cQCjPcLnirpL6eEWgHPmgAqdvwBKVCcxMmWAT7MtMGCwECre4n5w1PBi4",
  "key10": "NnWBWP59KkHqtjVVWAA5jchAxXxwx5PeNbekMaYRJQ6bajGddJxTB22ZUUJtv86RZH2Az2cPFNUdcY7FUrTxQN1",
  "key11": "KndzT72oc8PdzZProv8iuF5mx2LHT22ixFGJ3J6gyP2pj9bvUwMiLnF4dMgEsEHWp3ze4e3qqWw2YJzD5BFWZ1U",
  "key12": "3upWyoTU8x1URiZie4WNpT4USvMHHp19oqxyAHcGJoUtZuRXs6kJSPLQCn9s69oeu5iSvLBg8jhfCeTjXUpYpSnF",
  "key13": "2B5f4ioDSBaZBRdRr3X1FuqiAgeHJF4GNShbRJmTqKcvJpWjWEZ4AF3pYqdJCGjGXS4tiB6U1EH81WoAFaqs5VDe",
  "key14": "5FH9XQHyB6aUXY3v3mE3BWdg4giobfrymMcRfQ1sxhqFdqUp7o3MCRN9v9YKBfu4ugBTZ56q9WALk4banbhqJyKB",
  "key15": "62SjSniF4bH6gYEAxyW9cD1ffQDx3kQd3B2wrGBnqtzMCNxakauEp443ZeeiyCt5pKxvEZbs76wwQPMq5rpS8avg",
  "key16": "2zK1kLTMRmczVFC8UBWdmDTaDsPCbcKgHAs5gn2BTvWgFrLxokP4EETSaanqohdDzRpHfv2Cp2WYbGdJhJMzbJgJ",
  "key17": "2mjDsJeNepWNxB8cP9JSAj22we1a3ChQAhMtLujWFTzTZ3Fk4t94ewnDnoobxQUJ2dGGcuCgyrNxDpBgpD6niMMS",
  "key18": "2uBr2UwuMumk2nuQARF1f2cJdFjyZm8Kzumm1x1k4HuDxAhzqXVuMtRkWpQoSC2MbW3XuzM1QUFJwyPZucprEbAT",
  "key19": "2PBYeSgGPuqwGtBurEXHrD2DdDuQKK4a441VMPCsm2xSxXcZReRiHMT4dZH6eba9oFYhsso1d2siGTkFtFBKdJYT",
  "key20": "4a59vk7E3mCqq2UvfpdGNKop85PagTuhr17HiZc4i3nyBHht3y3scygHnnyzPCKc2dUt4LN6uJrisYioRjw5Fmvf",
  "key21": "4NEPH3NhCLggP1C3tTA8RHoWvKM7Nxbgcb3vGV4pEvnniqdRWmBUAHTVqhad3bwmEhMC3XJMhQSwQVT9K7oE2m5D",
  "key22": "tJchddhAiH4xmfEPepAnth2Wr8BaBLCG4g8K1vsG25tJM4jcKyHEJppqoxueg6fzBw67DUimfS6m861CzBikpWX",
  "key23": "2JcCtFpmFV88BFQfV8oyqxGQPLPpiHV3o64iAKfyG27vqdwKoMR4wgvHza3F8dySBJW7BBRfQ9UKtipc59kNvDC9",
  "key24": "2mwU4H5Jh8zneGoRAUAZeDRznu4AensPzNkzdPWgE6abUan1Y4vpDdhpKf6NeCAn3441nUnUoKoqfPAkAqXp8qcj",
  "key25": "3saDy37u2pjj6mi5JaKpW9XjrandvkyU5Dz7QMRKVXMuBctoVzc8FzcDECtZi3gUN18KmEE5NrTBGDNMdVYkcKSd",
  "key26": "445geDkcGkvEBdvWrcFLgfKXj9gwEPNbtZ717fe2kgcaYaHYh99dSM7gD9UooV8K5fzezqvJmhUkkCqCSt9asdY2",
  "key27": "4Fx86dwrDy8gwE1cXJyGwzXADLRbUf4CdiPLkf5MmaNosqCZbEs2Kx5RD8aneHESY5HrFbv8uGquiNnmSgC5c8YH",
  "key28": "2ue6noM3qeUEmPyTNJZnEv5z2942XNiF5Mr6NuT29XYu2VuLQLJyZnv1oJZh1zvzHV9DUAS1fWi8qeHBoQ17yFXx"
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
