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
    "57HL6pJHmKmBAtLJPH4sVEvwga1kzkzUiB6zd8auJPcgHXbBcGF8kv9byJDh8CM1xSBjTBRsHDZhAFSEz1dAsf4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27PSyfKGa5Lhk4gctdyaRmTzuFd58usCgcEZapCD6jBZbXp71eqJDyHdt2FB9GYvHq6StWuTsYJnRUZS42vU9JAf",
  "key1": "2NM4fir9BrK2oGJLWxVeeXuXDY3faBMNGdsdZmy5JyTsfWDBoamxVPh2FzE8cgWkQSKm9K44mf8fV3AdJVGz9165",
  "key2": "3VXmF1PGfWMNsXu6kX6h88b5jRVuTEX2rWv6e3g8Z6vk5rnCYDFt5HvpKjDzop6827T8bpKX6GUkzActjsLpYrrb",
  "key3": "5WvxZn6rCk2F9Sf2mohAXyEjPKdbG8UQStUhxoAPyzF3eKz2wce3SPyQKrQ8sHyqQr1aGPF1pizMYVazPxvWQujZ",
  "key4": "nnhthAvDdTEX9ew1KFjGXfaAd3ebsVdmXkN32AqNmTYEhXbivctWd6AjGgXqt1uuKaieaNkKLCUtJe8g7rwyEj1",
  "key5": "27KhQQdMPzoczAJgcS5FMPT6SP4c4cAdNgVtLFyf5MGQbUeUBrXGFXm6zL9LnrZwzjLdZLLGyuGK5WFCZEDfPvof",
  "key6": "4H1PmE4nDfzzzFvVEHdZC2MGbYYu7JF5brT9VxakNe3aRJ72BpJ2i5TibGqSCJwRx57kwTyQSUNoGRrzVTXpxF7z",
  "key7": "TT7NouQAGEobAYrBte4TEZHZ92ybtEMzCZhr7Jj5yeDhGgLShpYkQfBxCurD7E2soYigg7tqhJWiVTP56gTemr5",
  "key8": "E3LfJJsFrU7HrZWhQqwXrwLorx5MbzS26QPq94smc88XRq4JUCYBsE2SYwbTypF1xQ1v8oFnpWPBN1QnJ4QXuLA",
  "key9": "3kaUGpKE52q2S8qutrH6oVf2uLjB5eWZUSmEvFst88DBo6Sey4KtbXyFdEjvdXJqL3SzgJcU6mAptCWt2tsA1gem",
  "key10": "4aeXMQHAFyZaACMdoVSXwcCxErHyDw2wn6tm7pvAKsM9VoKrWP7vYsVFdWdZ9pPFCHe6j8C922cB52Y1LyRMLmC6",
  "key11": "4FzmNwuKGL8USvUTSnw8GtBYfB9WrsfSU47pSV77rLJHfxyKSZT1WNvvTRT9fCXaRhaNrqF87D8QRhjtWPLPpa2u",
  "key12": "2WBss7a6QLyinsvBNC38CespZqkAgdo4wfq1ABbU673doJUdpNnQCV9gxxcGpKmCgsChzrT2CCWpguVWYVjtFpjn",
  "key13": "2XsWiC2HQdvq5H7xpKAd7MVXgkA1Jzg2QRSFj9RPvHcbwjvv4GV27qWgbL8SFqPxusfJ5bWZBKWmsfxcPhsTKpRE",
  "key14": "KytFmSxA39CAiN514oEMDjMhaERRMh14kSwZAN6R66dvmMSXwWksZouQR4vrDs6eXhLMhvffyj6M3hVHauqNPgW",
  "key15": "5Rh7eEhnFu8yocygAutjywi1ameKD9JvrsihTNLPQw944zkANZzVx1UJgQaBM2iMFYD4gwKahfNbZqVbKCC7Dx7V",
  "key16": "64cV3JQTfyT9AecD76hr3n1GFyJBkNDYqkJiWA5ihSSUr5CgNkCxkZGjxoYnsB5VYDmmQSvofZTmwo1ArKAecPd2",
  "key17": "YNQZfzpUZ6gNEU3BcrQu2bjfTzRm6TiGvpLV9dQysmXUJ5LvPXLP1MyUmH8B46v8UrpUyNSLbHcL9oepNnfhNpQ",
  "key18": "3ZSAnSf8WMCAofa3qtggtBba37VRzkt7zHeypJEsJRDGXgraK9zs8duY8W6cjSzz4J6ZTX1a7TVLk7VRJKyQz7N8",
  "key19": "3D5WMPkoUvVygsuYPDhz4e1CNQpAXKuXxCivuEABbTKhrXr4vZUFtkodHenXLkG9VUtKHa2Hbv9pwCB13NGKxrYy",
  "key20": "3D7mWe4eSMakQnoHvcRymv6SgEBe4rcEATwEg1zFdZKs9Zr1Um3LvhoGJD9hkhTNBUrPVNZo2zMWk7exaq3BNvHv",
  "key21": "4QwQCZSxosx7qMpvCVWa8jxKrvb2zY5xbRqZQVWLHdzaA4qqvPBTqzDbK56MQHG3XXeVxhvNrveZ45mnjHtq44SM",
  "key22": "3Z5zR89x77nHXZjRhZAB5f1nrhpTMvD8Cwhsqnk7s6KbRmDQ3pLZsgi6dEyQrnttNJM7nYzpLUKhMMXKTSqH5Ja7",
  "key23": "2oxycg2tue2vMpZpZqfQvz4rF7Yci7g91v31o28JQZEyVJdYMDu28GSX1afx12w34fQ92Yxn9jhGFvztmoSScYcP",
  "key24": "4RhJgciHTQegWwmeYTv9VsFieSCTUjrdVFjZCHZ7NUin5zXg7GJ5ESrEMziS8vJm4yoPYHhkw1f8xDJzQdk9EiBt",
  "key25": "cbEGMFNin9k1P271tP1U8fcHmVVHY1979JDCosPHCxFAcE3hUWzDaEppBGLbTiZgRopJSKP9rcigeKfQoREMKhz",
  "key26": "3rVfhduyEFt4BeMc7tEsxcpDkxRjCUQPraxdzBGWwvLp2FjZb73r4sD1ftWtTBaq6DFUp26gZxkNzQgmw6dPRKgb",
  "key27": "3gvRSUmJwPvupbmPgBniX8X4xjocSLu5zxjxgYndSE7LZtXSA3cJP6t45E8hSVCPTTWJd9z5b9Q792Csd5URTcCd"
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
