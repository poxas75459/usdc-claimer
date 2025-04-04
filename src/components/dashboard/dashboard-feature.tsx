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
    "5RMhXRZUJWLLvgwfcSCHs6Vv6FAQEFNE98g72mTjmzBPmg2Kpi9WXrLvjJSCpU7UgXHKhSKFdMtzXncw72QiArtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJ1v2SQH5zcNrU7P5eK1tp4hxrwCRxPHDL21dM8azhamM9EmyULM6HmHJtWRW5PDBVQQP5AVQE1GFtHSbLkVFcv",
  "key1": "5hYuhMWqJj6v8RvZoztGbn4xTFt1UFPp24yG3LPNXujFaJHTL24f15G3VWeP3aLZKfo1TQo7nvoxM1Hqbfgkpw83",
  "key2": "XkasvsKNUBBFde7SKQLaY5zeFytSQHPqx23ojN2qk9FfhUG2rjR8qVbfbLjHToh6yYgK5aqsMe64GZb7poS1SY3",
  "key3": "4rytLGC9bgv2NAYBUasiGRnPKBhr8u5u2tdj4dmGf9rQyE2fgvYcGo3NviP7etsf3PaygVcpzftbD2onLvccnbLj",
  "key4": "Mr5hkr8VpS6CkFhngxBk67euX9JFLc3WURegVBi5okvTKE8ZSjHyepHygoFSnDh1H6A2bJt5HyWWTezhefhBH5n",
  "key5": "2SVcnuSfyLunRECSXEHQGd6U8xeG7KcCegcFpTgd7ZDtwMaaLfNBXLTwYL2wH3aV8458iNTrvQq3oYM96o337YPj",
  "key6": "3oh7589Diou2FSfq62pcyuz8GHf7nKTPZVviW2DSexTnB6Q75up2acJpnmEam2fWDR1tJCEdkWbtqeWFVMmto1RB",
  "key7": "2KtstMyzgdMavD6BAqm8ho8x8crBxnTMvVJoarHAE9X3kLmd9VXT1GAcuYCgtza2TuR4nMsvzp1YbwJQAsCXzkWN",
  "key8": "63PgC6ndSDBHyHXnDnkc88VbFx8gBj6WJPuCZv9mzujMp1nDwdsFfSqEhovo6YbPdv8bfL18u8rQ8MvXTN2g7NLa",
  "key9": "5HYHo6tfkrv9M3JmsFRjgva2FutMKrouEkATcNBFaB2RB7Dsk6tmEbn8EkAkswFxVuBzF9ncutoywV1xzdTENuMk",
  "key10": "GuMMrRXcASE4hWxevPr1MgFcHyBvibfSv5CjsYVPjtsEKQ1qojmvPS3XY6psahkb2TCGGFhvsKo6FGgWbrGk1bh",
  "key11": "3ximZQTV33DH1WVYNuHdCbiKfr9H5bGvroCZTZBRfTVMNSjk5CaGGMVu41QRmBRmENM1YC6SDRBBhSR9BUipeS4X",
  "key12": "5UYhq5RcS8WcbjJQEvNNNoubWJEQyE7h5qX74ntZD5DAdJEUVWWkqwV2zib6wGvDHMfzHfGmhX2BMRc6sqsNNCNq",
  "key13": "4y3nkAVLxqtrFFek82sZxa7c6nYuK7e9rMBnuSdM9LAD3wgC6xuLwLGZhBHKvawpAH1nsh79AxDtFoGKRSzxHjqr",
  "key14": "2TbzWkL3GE9NFoMAkQULmZVox5UL1tW88LivmqQ9S5m4Yx2uT5VF669zPcWuBDuhSvTTE4aLrMenJ4zhyquF8xnS",
  "key15": "3he2nR3ZMptBEjSRRgwTJoDqhsF5W468juCrLnY5wCsfDLZ2iVwkJNCYcWBKPqvnxcseYaFGpLkELTmYmLEWMdUQ",
  "key16": "rtvjj9Pa3sj7qMmQrFuT4nWnEyQqugDtPutkXAwbh64TVJzYumrs4C5kpg82p65MnxEncMg7tPEbxKm4oHYxFP6",
  "key17": "3FBQukcu3u96Jo2NB8SD4QBQYqqGPJvmgmGdTegjHEWKXmzpZPVDNjoWNUyaviVp29W2npTdCE5SpRfzNigg15me",
  "key18": "23zEez2uyHvMJ5dbrLkepdJQ7edYDkDyWMTrWkaRRodq21zcZB67qX3cCUvzUTjNJYXym4QAX1XZm4TzRq7As4e9",
  "key19": "4d2rfc8k75BEsSB6BcADUfbnUrZGnDggG6A7ACY7UgGuvK6EYrSq5NwKoz2E9FSR1QQnjfvaTRFjKGoH1Hwnm9o8",
  "key20": "YrkrPaeAAwAsVuwfZZtHHcKR57LBKh9bHCMsugBUgopTy8CBUgZcvizXVC375TZK1zmEqT3ysPgUHHGxksNBzmh",
  "key21": "3oKX9XbdGxDTKyqUdKwqaD9oYqv85DgQHX6pfW3QtRuZ6yzHUoUQBPD7cxoLxLD7zYjmbxotD1QJuA4hPEuz3ya9",
  "key22": "5WCYkCxLXjoHptLJGGstLjJ39WwKAGGvmgm3DkpEvSH7y5f2TJrhRdJLYGkmLKQ5fx4k7DJqRDVWauN8ScvYiFPy",
  "key23": "2JnC4NkvyFYtMdoBwHYUUWzzizoufW6977GZNg7fZMXJTm2yqca9qdgE8NNgCMZxzr8Gu81EAdVShJmhzsWnnDF",
  "key24": "2SAYsXp7pmKj9ygaAoPv6dNnq8w9Hj4NbpPNiPPSKr8yLsuPjiUxj3n3dtcom2R3jnV8F4ih82dXmAwVYHsH1kv4",
  "key25": "SfTfZzey4zAjgnEefSxUhip5c8MtqbD7zwcdQZcZMBzUJxHJURhpPHyU16Dx6ytcSgidfdmV7o7iJvy9yobbk2N",
  "key26": "23Kw5VZfsYMHamP71e6czJyV9hMJcfXWBT2A5LzLQe5K2R5KE4nEoDcXGS2AupbJqsmhrvPaapGAWZ1eHQ6NngKu",
  "key27": "mdeTHQ9gHujVJMqCviRjqbHTkSAE8s9KfwVoG2CYdpXaxctrm9iBfzabRd5kPickE6vNP9x9YCFhG45wJ6Qw2QT",
  "key28": "s3jh7EsVEVHED2fhewYZcs5C6aGMut32X6CtFYryrdzf1KEGBkshAcQ2HYAoVC4SzcdviZF12W1JaheDJkM44iE",
  "key29": "4duBLHSQNzGL2KVPzpfRLwvZiNhuUbxjb2Ef4dvwS335jRaJkGUfTGizicfbbmeYSQK5NzpmLM5d32FmCLH2qng9",
  "key30": "riUn8bbdpuo7Ssvsny8krWDAfc9WZwxGV73vBMoAevYUMbvDVKm5CCDDhzoV2yWocDdj6BpLmPN2q4rS2hTdfsc",
  "key31": "3u5TKAxxzGncrqUUTYbJqMxKxRar4zwicrHxAffqnfVkmFZrZ7hHfAB7V3EWtJ34HecmzJqTfCaMzob39JycbKJn"
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
