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
    "47bCX4q6ScG4BckrSWNstJJo3KyMGntnHEediboDNb7izz23BPSrAZ4oyhrPsYro1uVFQGxxW7QmPVUXztiUyS4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BnBtkznyjNh92FQtCfk3o1TwnPojrgibjeapYfY2fYWXUzzyfY5bsTkw7DjRQkx8Z25Xn2q4oxRWmEkZ8WD7cBb",
  "key1": "3p82dE6WUutHWVHHVUwya6quXTEdpAM67CHoHxM6KNfpQK32B5AcRH7HD4A2GihsvoXA921r7gYGfDthSvcUxpEU",
  "key2": "5jgbARUXK4KyxcH6d15Y9AEbvP3PgQT8sBiEM3rF85paWFqs1Mmm77xUthVM1Zru8RavUhQC94ACeimeG1msSzNX",
  "key3": "35q6hwvDLMAzJPA5p9Y5fS55sWyTLnVsWQYcwxDHtXdjY6kA9hd36qVGgzaPfuLE4yFKuCddzjg36aCi5ggHGPDY",
  "key4": "3rUeheDGgK4gzDZ4GSatWG7AX7kNgdxG7WQmxcSR2UcWo6cWx7SBBEFUK2iKhyFdZ2mV25hyZUwovGQFAEReeZni",
  "key5": "HNBoEEd92iSfSbiFFGy1mys1QVus6MN1FFA2igyCi5VCqLeNyutKgVDv3KoxgmkRj1KjtjfrLHfYLvuC8qynMxS",
  "key6": "2Dk81sDD1Mk5rUFppYfNTxaPbHyXzFHpWVyRpvT1qhCKBCsk4bGsftkPWx1BiaFwAoNrF6rJiuFJSYFimuPa7DdC",
  "key7": "hG7QBXZVJLvR74Q3jKNzk75RRzU67WA1AUmNHDKXccBvdTs8JCDZDQYC5NRKMMUGLbfUXHDE4qxvRNqWBxeyyXg",
  "key8": "4jrzHS1Yge2botcNd1H8FF9cfqYbriDiH3HujTHPs6q74Y6bPYc9KswcZcJpGYVZr3ReWNUcx6XJoRZkWvJ4ECSn",
  "key9": "C9ETvubAPhLPUj2xYfy6aKkZ9xhWF3bY23Qdf77X8JwJCfb4YimBat25mz4zSbqAjxhQ3yN6k7Me3LqrYEsGwXe",
  "key10": "4o3L9DkihD4J4BayajP5g2P5fFKXdUGVDJVwNAQrVT2nNw4gQQHQ6X44rQKuHGLJJqfnTB2ssQtq1tadLXcKJNDK",
  "key11": "4LkkjBEUREDmCKeusBZQWMhtH9k4p8UxrBJHEsKqFGpaCkLXd2XnhYXezuiqiz3vRvcUSTCGZ4wDzvFrkvvE12qa",
  "key12": "5g9QvyWPV8F2YgBhs4GBvV9FN8m7vxg72uWyJuhzwVgaLfizEeziDzj5hfbZazLPQ5QPZMDFzma8CHkQEg9gxQ3f",
  "key13": "4bMa7M3H1c1FPT8HoGaxGxeiAQdj9GLGuwr7ihf4riP7JsLthT6RaXEbKCsKFoXamhS6C5jUEqDKn8dziooCXW29",
  "key14": "5zZr9wKhxcUXaBGoRUSH8GqCwcveF5twPvfEXZkAKc1ERyD8uBWAiffPnv1PdR7hswHrzEgnfW8fSunHHYvnuhnU",
  "key15": "3FZxMLnN7LPXWwjoWruH1JN7CQr5ewc6sVuzu56jQqr2fhdu8dGR48z1FMLtA2yzapyJTRNr2NagwV2FbYXkw7pq",
  "key16": "3NJEKmqLg57sS8Vta9VvmGPkctqeAa3Qda3dWCghifhmzHvEdgZtSNqpRoS7nH9BFJUcNhX2Fye6SLgEV9zMeNV5",
  "key17": "siC3ePcPVZGXu9Xww9JqEcbLDrtK1KrYKGVuifNkNQgcZ3n5ujFVcHmQPNGfQkWP8Y2obdZqBY6K9E4ciGkgpyp",
  "key18": "jxYrGhrpjKCiKMogPCSTotJTFX1NWsp9RKr8jwJVVTry7CeZg7Y6dEbezjwT3b48CZrdqyLnZdb1yD3KvVSgkeJ",
  "key19": "4boJ1iCSFPQfSCEYEb3BXEzWRbGykdmQcD1hJBF1HW7vsxEnUVLM7bdLyG7eKj1V5NTmcfUeTrsZeUQccjLktrc7",
  "key20": "25kJUvjbb9W5QAXFjcKFoqNMsVeq8P6cvT7WtQUqfcr5MaqRxj6oWAnKnzYsw2ZTZvaXNViiSragTAPZSZ3CWMaU",
  "key21": "2FgQNH6Yb5Xf7zLrCkGpfqRg9UPcFy8225bqek4mhHtUsepZzwKK968ubKkeVUm6oAmpXkAPcuEg6rgD9cZKNDhK",
  "key22": "2VhXg8JRBDkGpqy2oE2eFBgepG73ohCEC4jxKCT25ESLPsQGB1QsqTkMrsTPhCnQEjssj612wkGQEouqDwN8ndp",
  "key23": "4gvNJeWzNMQeAPRcVaVewksNXjY76oei38THfnRxWTGWgy5Jh9bungZNsTW47VqjosSFx3phqLQpqScv7UYo2BGJ",
  "key24": "4AgfBRDSUoeyPnatYsTC1Femya6oyKcikxrzvHgDxb34dQMqXQ3ZBZJMHyeBBha7Vw9pcyfomBKbgBfgayS3LJBj",
  "key25": "TscXj145bYNk8zwdfgQziudRvadB1ahtYruBaChf2ccPMuqrnMSUD2qf87unhwTZSWHijWmV52Rc9wxX341o1oQ",
  "key26": "3hD1HHoojBRJis455jTYiUn6VxVuXvxSd9tCLZGG1Qc5kgKBdawsixqSXJvC49rVU4cdyXk68546iJejZkanmts",
  "key27": "SkbnB7bG3xUqFked26X2WuBSZ7ib8V56sud47DHwnh2J96DXW8wy9dtoL3txeaMuE2vqLCCh92XuxuCxBzKqMhk",
  "key28": "2wEBQRsf1RhvFiqpVNjKTfnqogzyMLwD3sZSuZsnoWMrvWcEsWf6wu8KTfFVVPB9P8oVXtaamnQEutfsiFQ1ed9P",
  "key29": "4f3MsVi1nDWPxejqYrZm4BTnhTsmbhckuW1qF5Np55Svt6r3Eif5EUm3EcHKpLvx2XYSgNaqp44jMf24v2bMLbQL",
  "key30": "2JRptr6Z5XdAiMHt3uTB2JrLhBHu1pfv33dz7B7vqNg4FKiVK76UZ1FbGe39NvoTqSxhjW9ydwnWPkTJ5NrVgbn3",
  "key31": "42UCyP4xiduJ94hf1SDKGixnW8ZDunevHYnsLLJH52VouRaMQyntUMVPXyDf79mJqwu4Kq2ca1eDCYGbPMva6V7A",
  "key32": "2ctXyAKztWdYTBoHTiSZwhsdWe9vuaxoX5RHrY568WgqwWGBhsaqMhJJ6RDcTyLJoLNV2QQCgUmYmWozPZuNPBSz",
  "key33": "45AP8DyYoFNcStbndwmt7PeYgCzMWkEPJQgFtkQHS8FGz1UpqrvcVKwA6ax1R5SpsJxER6kNpejWHjrSuiW9cuG8",
  "key34": "4uqjfGaGhsS23pCZb6D7Di3LXQ9TMiKLpZVTSM83fCK8bkozxR6veeKYUJQQjgrAnXuMP7HRWGVsCQUiTM1qykjn",
  "key35": "2fRVsEqL2kmsGhKwTTk5mYjf5mazNPxRaYEUu12SUS9H8jCjCPFfNPPKo3VzoMernqGkjjNTRTE3njuY32ueW25Q",
  "key36": "2xZ8WyD6RqD8UV6R4eRdpYquLmB1mKfUt2d5h7mNHTS2wsT1aLHHcjSiq3TYGGHWFRYAJeFgdW1wtRmumGixwmc2",
  "key37": "2WHqKbJgEQ4fBQxQri2qwZ6q7N3zBEW45Smka8LMy83mxocqB5a1peg4weer19Jk6H4ftD7imGiZuTwPQ5zna7QJ",
  "key38": "WHZiP9oPXPNWbnKr5dqzaRKpwZYAXj6KmvdVi7Wo6zUomYw5ej91hkNSR3JohdyaGD7ELec9ix6DDBbv6m2xF17",
  "key39": "3No7aqSQXks79cV49oo9fEThNCU8xb7s6uWmMhhc92WqAxCjw11XFHygkGhWKzEKt46hTGJT4XU8V8Nn9SQepHbN",
  "key40": "39SFeBxW2RKUJjT5bmHtHAStTjkaz3FnRre4r1NFJp5ywfrUSQq7YWxYANyrCAJAaTPCcBcZFSSqL7N4mjWQRe2S",
  "key41": "5Nam4ZaVRsueUr5EuDyrVrrxvwMvAqBJ6nifXe8zXgUrwa2qaw64sA2d6NuNawCYaVkF5kZYqrs6cNNFim4JjMfZ"
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
