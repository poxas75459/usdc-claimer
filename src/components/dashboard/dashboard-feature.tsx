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
    "38b38mzTrK6Pxprfo7FBg5BsKKn7k1bXMpSbRW7dQUBaBKaSQSgy25R6nHoWY5fa2hoUaJ5tSrGUUWtzuJc2KL6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YMfxtZ3KVpJisdtEu8jEuE6sUJQthrChJU5BksuBmgztxvBoLLU7oAg4ZcuTvDH68uJGMFpMybC4sujXHfix12Z",
  "key1": "2TTztV9xANKPJ7aXis4AsC97oBzbgUu2YVe9eFf2zLfR7z75VVGQjiGS7DZWDSsFyErDNAGyXvmiURuHoyyyWN8p",
  "key2": "639HrpGYvcV3ZgC3ss1zkf5oN49YGqTF9LYLnwDYKLFi2MH7MkWNBiqrFzYWK9V1MWjgeNEASzzqaY9iDgpaBJjq",
  "key3": "2ETsAGDthvWaPwBj62pJPcb724w1kWFtCVtWFLsyQ4Xdq5crJDWgeWTpk9aq2GkSHFsTzUT7ncbfyXKsAxFaNaam",
  "key4": "5c38fkQjCAJX7VJCXRqF5WeYMdvrPF59LpgWHs4VuWxBdg8xgx68MqaWHjxzbD64kH4iUVcPJLGV57NdVjiW6zH9",
  "key5": "3ViSpKXhrEpv2herCzprGvcXbZawpkt27yGmRWA38TkFm79U8MCTy98zGtwd5eTREmBxeBGgqprN7KHEsAFAPHxm",
  "key6": "vQf2AVuJ88upjwHPzgRXAQpKYgFK4bU6JnH75v923bsmN2Jwu23gX55aMEQKM57vrJhtpEJhf8ULtn9AQCwSQzd",
  "key7": "3nqUqUdyNVcYBko8juXDP5JAuw6mZeNpmRdwKMoEHSrG8yyhdW4CFFkep8Qru4psERfdBksaMZ3Gt5a3uxhrge4x",
  "key8": "KhBbGcWM2CVKqcS266SoM7jhARmu984p5SmfmcdN6Cjjp8qUEr5popqqDKKvKdoW7kqzqYqwyhHFm7vdQJGWi65",
  "key9": "3a7PRqvPBjBCD2yeiYoqmUNbZ7G2xBbtjdGprSaDhxjLHqVNoNsVRJzSTk1AxAPaeL3nfvxrwkGzexgbn7GUng5S",
  "key10": "4E9ydHN2xBQWkhmUeHbDLj8LiGqt7AYaDFieL34QC9JK3UdS893VZHLXTPK4z4bEwF2N4xn4nD1jMYzvNGpt7xZu",
  "key11": "4Wm559q8oQKwLvaGpA8pvnc84gcVFc17yFtrSZzXBENTvfVSZWLoYtj8rt9RPzqMAj1eNCgMmGAJiBfYPgDLrEAp",
  "key12": "2e6ASdvg1gvSsoDRCgeShygirh1jXmatjgoUqina8fPzb2hT6Vse6ioVFJAtfNVdA7hthS87C7MAfkH1e3tEZT9j",
  "key13": "32MqVu8igN6p9AkHmPpaAxhNKx9bhtaewenWF74nGhQUnHoUrEVEQrvGE1Rs4pD9Jtg4zXJXSYpz2TXhtf1RPThf",
  "key14": "62zBPfuTFDP6rtngUe1mSdYAboc6qRQi1kkhK59Labr4bru6CTeDHCeZH6jksoVnww9uV6zCodQPrKB23n7cnmqK",
  "key15": "3uDS5d8cphZs5fCS1EoVVvVCAKqy9UdpFNpkv692SZREQDtAci4VY5Ldz3xdeUqZ2qxbxvJt1QgRLg8Vc5Vbdxgp",
  "key16": "3XQcLcPiSn2rZ7TExj8AHN8yJwGrPrsr8QCG6baxL2WfoShs9TaxSuGf3kMdN4NTDQT3Esg4ryM7mJuFjjs9dY5w",
  "key17": "4pzYzNDuHRb8tBioKDqnUCY1ddkKWee58tcwChk1PaU9Qn22tKr7H2q4LJEisZEJoWJebeF5mMbACJAikMSdrsFQ",
  "key18": "5uUneBj1qUMJmoZ1GZ4GQTWAGoDSfK34t9LtiNJDharLghjkfdQBGreSzsowHpZcvhb2jrsCMXMsUEFVofSjBe6U",
  "key19": "3KuuNesm4R4Pe8hKJE5M1BdSX9Srwa6ERmnTzLvMzYHsePwvycFhM8AXtZBn8uKKcdWL1w7AqSEQqW2vuPAuHtvE",
  "key20": "4Qu9Ri8mjFnUXBpGv9JaRtcqZ4nAfJWXmLWCo1J2KNEC3TKP3FSGq4zbjUZPgPFPCMWPbVPErfiosdCuokGGtbe2",
  "key21": "5RCULM2vMTZnEHeEzWid9vCbUKbYSyYZC96ZSFoMxahZF7vjKVvHcro7CxfFYFofKmdcbMygFtDAHqwjbG1DWWTj",
  "key22": "3hcaX4odrkEfkjSYcMsLHEXNRxdEHHCgyeMdSfeLi6atYaByiGhzuHJFRA3k2xm5ARJwp69eeA64od5Ja1Lc8VFN",
  "key23": "LaKsvqYcnCyuwbSfRaL8LU6kSRPnqD1HJ51ad4jEUe4AG5w9VWPg5DCz89U6LQTz5TBpWVbHabY9E2FM5eaAeDM",
  "key24": "2EJiPsQgBp1EFPuXjABF7vjUXnDaDt6DG8VhTB993KisiAgk8BU14uBUTHEB42RPp3GZBwzytYpt6iFiypxTew8Q",
  "key25": "4ZjocrRPtNHdVWRGTecoqgDSCjbQqf7qDfDvnZXKFRcLwyuhjHKUpAVgSgRrpzWWZttmjKWF7SAxMSN3Vj7VK27W",
  "key26": "55Zm8N8TRFsFYecMtdgYefaJ25EZ8vY7cvv7zTxZ9GpmeV8A1BjvciAPX9BZbfJgD2NoYzKzvcpa1i7uhgbVxFq1",
  "key27": "2GeDqyVPV5KTxcGskFcz4ea1Juwh3pcyNnH8gwZtwymgxS1HfT6MunQNDvWK9Dm1UAPcmezRq5jgFj5wsB1cbzcL",
  "key28": "44dQDKZS8XPPNY59DZ8XgCcu2poPjcpMwiV4iPyRFnkdVAokuyDYT274NGBMagrU7rkedB3tGaCdCtYzmJANpfRt",
  "key29": "2DjZJBdA2YiohkVh75DUdDbneJKEzTVd7EsgebGBjC25ubhCGkYVSeAapDgE731CqEpXk1CCKssUnyBfD4ABUnUV",
  "key30": "54NrABV88UsB2pwFn8SGuHYZtuzF4wFhuicjfJb3pMRetepCP6f7BYYfSYh4y9WVc8sxQpHpbKaQ6F3UCLjpLpp",
  "key31": "Md4eeQjf71YHDgssDRXLqn6xKictVpGW7V8z8QYk9yhDi6pbMVhCjYzhZin8K31ttutK7nobLkkqi9JBbH8J6w1",
  "key32": "8W6WA4qk874odiSgnqDzSoZQ8W4LCnA3TwY8pNmTQYsuPPkNLj1ANBLRGKMEJMZFsJ5X5ajaTEBbwrST9qRMZco",
  "key33": "3u7fbPiVjC8pyWDxs23gV5iVgCUFhc5A6Hb5N3Pk8jE3VjhKUxyagjFfNCa2gWTme3ZFosp6L9gPVFGpRArEtp2y",
  "key34": "5ykDnRPw6mPPKJyiLeUCu3QWM29aEVL5TRMxKdqv9e9MqikpVCwshsh6k5vACEzAnRJkyCGktvkDB8jJgQv1Pwk4",
  "key35": "2ABHUFPHcmH6cJuPFTWjqX64XyVojgdoEJK9s5d5dYLmytuk7UcnWZJp6GoGzYiauAvL4Tv4D4F1w9xv3JzLyGJ4"
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
