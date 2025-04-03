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
    "37Y75TfC8URJSdiT7WE8Ht5wWXDaiFhfhDyQuEbbKFbrHE49FxtfVuLQuVH37FK4gYLywJ7D98MeSukhj2Z3uUg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KCZG5gpvKMSz1VhYKLq8DzCTs86VyaUfqB44UWzRKLsV514Xrch84FKkXMiajD3a3AULqB7ZZkfxfxSea7fdS8q",
  "key1": "25J23uSDExcRY8r5e33jjzUVXEzrGdBQD31Tss5wJZV9FhUS6YvMFsJGd5NNGBQQ7GoHbS9DuuDaWBEyKF37hdKo",
  "key2": "4iAyfDcnwbhyA6EEnAebDSCKywnTzb8SRe3yAyiUwhrMiCLY4xkgeB4rNQEnm54EjMRNsB8tc5dtD7C4TCS5ZBae",
  "key3": "3LUTMXNsXpHKe9bs3BMzmBE5LRtLcUmbWXmBW8eeknNdsckEsjNPdVv5qogQvAfLABCNEhgqPejwyBeXd3vABHhc",
  "key4": "2urjmH62ADYieSYPVimnVZTkHw8hyNBF9NNwcUeVHcbHL1G3crS6gddBFZYZF1xYSWGzNKgkgXCKt5zJxvX6Yk3Q",
  "key5": "2RVhDoaYvKyLr4imTBNgqqP8ZW3BwWEv2Bo38cc7ffswdnT2DYekfgKvrMocSDauWTyqUwYC8xLvLCuGKGxJXbfr",
  "key6": "5bDx9cgLPdCzVjGyKMaV2zApgTceBC34ecJPoyX5m3PoetXp87CrD7zjTziB9eZnaPUuT1nLEtUp8aXSKU9TArfm",
  "key7": "4re6qosvtQLvgMfoJEoKkX3E6ReC7qJjCUMNtd8S8QAhWkUeSWYGkTJjC3kTKYvzudRshb86EU2mjUSnjSMyfBE9",
  "key8": "5zS8ecioJJUqs5scq4GFZBKLeSrb69FhrdET3qRVUYFjGqUuXg7AsVN7uQjDNqZtGmVoevWbiPLAfVMQ7e3canye",
  "key9": "2grStsEPLBLneCXnaCGKTh5Q9q5fyz8Ucyj2TXGsNaa4YiptXxkYyaD6L9ULFuMhNPXkAn1UfiJuSnJVtvXK39kg",
  "key10": "5HjyrAkv4H6bRjiYV73jru1RcXiQc9zCGceGHpgoRwz5VnUbDu81njyukRRsVLmkLcETj6RBGZVEmfKZsbSTVkDL",
  "key11": "4ryVMhPyUjFPCeiH6Zmz4bU3NE1Gt9AtU26ghnHYmPnYkwsBuews7MgMtzYrCdkDHjBzLfR5Krds3FDt13wXNxxX",
  "key12": "5J2EAw15pSMQhCkGcq2hSJk6pgAJwQiqEAQFeidetppizj3CopXkZCXT5LYNicSwR1oy57Sw6uAAZKGW966sfExX",
  "key13": "1YJY6jf3W1R9gPJ1TtL8Dfw2d5DbcBYw3gUsyEv3WMd2nAvi1NXWaR3w6B1txdNELVq4nvaQ3FtdMNcBxvc1aj",
  "key14": "4EXbJFdPrpm9c1MtuqZDje2y7Qi2oA4w8vRoh2WWAti87vYPbC6bL1Any4gaUCzn9hZo4fHat2MVcutuPturZW7g",
  "key15": "24p1D6ifz8MrKaupZeZ3PhWZArtco8SGsoTczF82wC7k54dSpPv8WQeDRbBJTEmg578PowfAZW4ziMQkpnksjcDr",
  "key16": "649GwCY4oGkEZH2mwCgK4zBiPrFfkZ9YL4NKhfVzmDZWtarH4teL355SUkC3XjDTaKFsj578dey9ptEWdCgdoqvo",
  "key17": "3xqr91AcdF9Sfqq6r8sKK4botDQfG7gXZNsTPugpmruMvHmBDerisPjrjk66QnsZvAemRB775HnNjczyei6dmVZ1",
  "key18": "4xs6zZST9AJwZyLvV1QNQ9YoL1hECaMNKPMKn4sF5CPGJ7xkhVbgd1XRRWnJsDmcqEET4B9ivZzAbBKKGHztw6S6",
  "key19": "3NyzH93AnfZxcML4AkHBpQKahVqvd7FKCC4GCDDePxbevEjGgoc1nKhZgZ7VkYMuhtuLEUCGEGRVDxzMr8pgrtny",
  "key20": "64n27Q73xubMAp7g6B7PMLbg2Ccd1tS1mzFnKdwCRxFKxmEssgiCVCQTQbhnqGxAskwo6ZUeAy8LyP7kTgPsANtG",
  "key21": "TMhXUrwMb5WJu6NyAH47r1VcqoeNGHmhZxrdNa3dpAcxwHtndPxuD76fw44u74g9PdJJdeerQppP9PXgLPBJKDD",
  "key22": "3SGZxnATBfKBU2KYQ39qB9FvQ1XfjDhoaEascj2rHKJGETj6V3LRGEnXWG2A3qEqRmqMZYqGtEcevZGdeyAUUJDn",
  "key23": "3fg5KNGHPK2aUZhgAV44A4t6ehXo2nHPHxm8ZdVPQKrURoSyCzic93kRboDuZvBGZJaspQAEj6RWWH4tuFv2Krn9",
  "key24": "wTpT5XiiWMAB4MxZJpBw4exMAq9a6RhLspG4g4j2ed3z8QW7Y45JWqe7FxcsSUBoXxsVjBhwaS4MJhUmZYHewxd",
  "key25": "5SnvECwS3xLZsCQxFixR9gvq6Lk6oxUotPcWtos9np4V1SfH8RLXip14w1wS1fdfhYo16bcpBjj447Fn7uHaEvHe",
  "key26": "3RCQtEY7nk57G89neLgPZyrnhVvTUfn5sFN9WpwSViZGdQ45AxzwTZxjMuQ1akC28hD8q29nx8NoT9DEmrNhp2CJ",
  "key27": "5rX4RwkzsLGpq45Hee1hxiRBowgGS1aWH7iHif29CiKbeY7AUJ1Ccd5VQnNSY2Z9auxX2pao1Xgjtr4NrhYsU157",
  "key28": "43PWvZR2LQvVFJuwzKxmjTLaxtyRmXMQKTfG3fk7xg4vc3kooFbU8B8tkYVtaxBGcqnjP2JuxXKvdJb8SpqmR9W2",
  "key29": "bb7gxsZwiLDvAGbtKn4h5J2AwpNy6SLQgDBc33DppBZi7cowWhagXVte5TsPT9oAYV164bzsGBPYQfikECfLaX5"
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
