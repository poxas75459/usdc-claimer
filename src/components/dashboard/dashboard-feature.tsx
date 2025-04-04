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
    "9swRGb4j2Tg1tFMR5x7msDWvYESKLCzT9swnP81JHne6tLJRmLH1523ijMKhuAGTWJNTfJMpWm3hy6iRL2cpP6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z8Zcgt2FFmVp49cSz5Ngo7g2af5W6T139w2hT578Foi4TsyjDxQWfKyqjy2Q9SAVSfukDzetXC9jKHMpDNXjTZT",
  "key1": "5aQ7bAH2C6LFMJUEkVSKxMc3ppU2xjgQVa2uRD3KFMpeqa4etMntVWigx3RF4CqqYJw8mnnBsAWzbGB3aTodhGjm",
  "key2": "eo27HnSTutQHB7rEsnJKr1pu3pD4YpzeU3arHiDTEby3ji2sVtwTJVtQt5Wwvm8NPpp2VPHSUJDEWhhVJEj21d2",
  "key3": "5PuhXgaGmJfDJ5dbmDaof69NuxryY6rRjmRXta2ANYNmAHfCuJw6xZ4D69D4tEA2ztGKqM6mTG4EH5rmBJDwYx6x",
  "key4": "3z5BdFu9gEFtozmXPpm5gjEJxKFfR9zzAid3v16uTW47tpEFfGoJwBGcNb8LKmQigx3zftWKvNah1o4oqGQqm6kk",
  "key5": "5YLoxTJXsuBm7jT8mucZEECjrokYDL63bgCNc3xCzrjk7EeiM6ZeGiEj9NhWEE7der7GQUhdfMGfQ9uJeTT84AoK",
  "key6": "45QnvmQSvetWtW281Y9D2ECkd9iWTutbBM8FfFL8eqfoZg8R547PYmd9LTBz7HkKP6cnq6Zhh6r3KwD1qBRvq76c",
  "key7": "619ve7RWh2D97iVhsVqF8BaH375mpXudTVeU18Arxn25tQpGhCK8CU1ceyL6jqeyuqSFVe1KH6X8nEqsvoh56AdP",
  "key8": "2rFU82Zksymi819on4M5LQou2dU9HnYyu8ShW6NDNm7rwMy7V5typRzKpq7viqJin7SanKeCPKW73VdLXCu6cYPK",
  "key9": "27425dXQFTdGM853KxDqHdeX3gPnadBVJSGwresRYAHfUz84stGyZHRPsRoS3umAhp6f3n3ADremDXPwDo6HYmNs",
  "key10": "5kAydrrvirnGZ4EiYXE8Zo1AywkzMWq18E1R7smDeJRY5175sJNX8gJgM5EJEAcJQQJ1mWDsbws1huLyV98TNXD",
  "key11": "2GC1dMQcjYJS8zZJcst87Mu27uCLxmVCdvo3U517HkMQcLhPX91KsN2HA2GQC7mPx1kswWGAkojKVe4pHo4numux",
  "key12": "3tyeKQ7ka9K1rcHbmntMKUd7GmGL1drU9QgGfziz9f8pR3YTzqptkBaVjRGpJLUKKrGRTQs5HYzNSx6zFEtRU6J",
  "key13": "2izBPVQjHRgtBVUes6oNmPCwGhG1Fd7wUQMb6iesZEkGeiHeZAuYyhAVnoXza8P3ivCutVaUqN2LMmsSrKjqjfm7",
  "key14": "Cp7G8YApcgistzQZyydhgsuucA4U9DFBZUL3SmQFzHRzDDtZvSb9Sz4PasU5wxk9G61gLvinvmHi7iVNGoCRvj9",
  "key15": "4Po1gpdAVeVcJWRP4n2CWwsb35uE1ZxYh6Y4F3mi2E1UT6t3cwqoquvtjYjGCcHeFfEFDyZ5UHC1tKb5aWSKpdoa",
  "key16": "2cyxeF8jSqaEx6YbkUmoocUurh6eyEVNzQSEMQfcCkyDuTbJYEzbZmgYCHfJkGD9Sw8TupSo8rakUt37gVca1bH4",
  "key17": "4JoFCHs1WaBFZXpKxuZiGPQBc1jX4e8wWE4erTNyTv4xVhmpFoyLoThRqW3N3RavqZxaFspQiRQ4PW5knngpdf21",
  "key18": "2Z5iY6PST2paPFztuVLiKCU7su3CLFAoYwcGTFeQZXGbD6wqR5AxDn7RXbeL6hk9zYQ7YQXxphhEg67T7zEUhQ84",
  "key19": "sgntK7U5MrnKW3pKc9WV6CjaDYv2iwgMh1V4BBdQt18nQubSxReuy74uVnZXxmoGUkrtTzPri4riNRcM6yULRGf",
  "key20": "5TGPDrVpdW3hs6YMy3SujdEtMijjuf7Y7YJTW7autAyT17u1VThPvofoFwQCWNGMXr2UmUewJL8gBfkXY14TyYjr",
  "key21": "5wZqTSakcmaskhjcwD3zcpbLi9r5gaFfDNgKpgMzYZ6VrnNDmJLBM2SwYNAp1PAXRsXVbfssKvt1fL3KbHe1NDDQ",
  "key22": "3SyBfvhNfGSkXdu5u7YPZzTqFt2brsSpmgWwJpFWy1oe5NCE71PsPhZ5dKt6w38ib1BbofNeSejVzs9jsESPN71u",
  "key23": "3GJ2MeP2ERAX4JMD1Fkecx1FMEPCGhizofHoFk5C6UnwLr68DRhVsJzzQrNtq3iTUgpzpTbMQnr8jWYHNYgQoh6T",
  "key24": "25wQ44kXZhBt9mxSKC4rSurH7vBijHLWd3o9FztxLcuVokjJ5gW1XrR3FiP3DiL5kLtKoViHSytwdeCfDKHQC5Kg",
  "key25": "5Gnq7ZNXir4RTADzcGUboJZHJpjNmtf6cpD73WmkpC9VPXEA7dnBANjuM7iN5qaDnkSUS9o8PDfhbtxMYSFKxsWg",
  "key26": "2YFFTo1rz7jYMwrRhQQ8tQEceQqkwHvUBsV1dtmadXTRpHstqishcrPgMX9WzJLvAQjKWZjfVuagdGFqWLrRE8JB",
  "key27": "2ChEkTkgtN5ZXDJLYmgkQp4bbc8HDsfcuRohQqmTWHabicrRAkMinDtEbWkBKfXuLS8Tn6GpQt6hitDGiRRoxtWz",
  "key28": "93M5vs2FJuD2LG7NejS7axEuWmvHjq3RhkntUqKeePzEpj7GDoQiYGtp9v4ywjtXLvf3NcMtk4GRuAbWwsV3odQ",
  "key29": "4QuXTik8wtPR9fgiNz4fMTwV8uVq1xBanDykFDpr4thasF354yehAQnw7kZMWXFabtGWU4Li3B8Mpq3XmKFFMVbL",
  "key30": "21nNBLLrXD1msDNzXjqvaSwQZdKWijMgb7KACgKiuEdHZ2ck7qGUyypHgj3AzhZkeiWCXXMfDxBQstw1RZwqv6bX"
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
