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
    "3zvvjBAe3sjwSxzUtq4C9NKXyDYb3Wq7odWAYnehhnH9wbnDMFKAe2GwNZ3ZRLmeHyF4rZrzZ2uT1SuTDxBZ2zzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ooDMq6HJoNukQVUmPjRhffvVWEabbgTUoYGUWpBbqtmAsNYBjgvAMht7bmPJDvQZpCtJfbzYU4nqEWKfhyYf6ZS",
  "key1": "F52VCWyw5mQDCq6X4Wz2AWGrjXKckMyvsfExDQhm8vkRdUWuuakeaHrLzxENswKaDVwGUXsoGfpPyu9ZPgMLgoM",
  "key2": "2yD8oHmW5ZZotcy7Kxk2ugwdwdKVZnvTMihpV8P6sNdvukZHiBzSDUEq7Yf6Z781hsiR5rB3MvDQNYJPQnXPcY9G",
  "key3": "29UVVAWqtsTBVKUUJVNkLzbq8kDntcL8DBSzqtMPsbxJuz5aYgkztqAbaQXkmEdp5isW9b6eFwUamnHeNHEWsJWA",
  "key4": "2JPaMADL2ZYg4Mh5MCj34TyRk6G4waENt4d8b8rZZkcLioGrx99Q7H5JwJkxFgg3wmyoxdLvnepaLMF3FzcHmYcC",
  "key5": "63jUxz9jv8qLfRZ2BBNwfUffpR3fcinKSCzRauf16YMVjxDFsSXRzJTznkTeFcRH9fZ9FKXcC2XryibsWNUwAhEy",
  "key6": "3APqTL8u9xoKp3Rv1RYCCgb6VdZ4JKbnZGygWmLL3gSw9UPB73CYzHw5dmAQYpxrzgWNaQ2gUgddEC2djWjoamLx",
  "key7": "2hvwh6du7778gdHtrdYNsNnTsRDWMm9chJYoshxX9u5hCNT9JxxwJAwXyVEDJCJbhUX2giZB6PiVewf2FByqWfH1",
  "key8": "48u3b33XVNcLPd4PXe97dKgdGBJWedPkJpiMJvUSiMFeFQtYMMXbEL8NRbWiXS47UYEaAaiGkNhSpdEeeKVA61Fu",
  "key9": "2xp1kKW4wTsS39JviWpFxoYZYkzj35AguXiCX2itzrMeazeRLDPDDV7oUhy2A2LzsYSZrXnNfbA15qapK3yvi3PY",
  "key10": "3XohfqGTiB4KHfaugJgSj9tdPoxXFCJVLy66zkyeKzErHvpGPAx5Ccd69B7NAvT5uXe6VD4o48wLWTgqPcNKNTba",
  "key11": "Bg9PJrUXUzH2nzCGFz3H7o6uP382pZQjxs7uKK2Pedmoi2kdpArqsEUa3BcHuQPuafJJmHK62NRL2PhfypQBP2r",
  "key12": "4QF1VJmq26rksJzF7sWN1621shSMhzu8bXoAhH6zFAmM1VLM4dJBDfZUHJZi673VvTgDviHVKMFTf4P24ND9WGWP",
  "key13": "4KG2JyXSzv7Tj6MWt7swToWCoQCLnSiRumVmT5sgLw3ZQSiZDnYzbP9BKSb6bc2NHdLknDVn8VjZcSkHVTZNDshy",
  "key14": "3VZyJr6xSD8fac8FYg3DC7Q6sNm6JBCXaXH3zCUPXf7JvsEe6Dyopha9D4BZEX4ss2ubtV1R1EAZSxvNgRcF4BKK",
  "key15": "3RvQJJ3sWQ3Z7GtWxQMPYo3JUhBhbsJZNia2PA4HrB5WYR7Y4ctHmRsb2D9trenokY7mKLGcs7eJhMZogA9SXck3",
  "key16": "KQxcNFaAZLc9qftfs6CEqCrAPjohMGtACm9p3UEc29xt2WX938CtVceqxLpxgKMSahSpks2cAcECmUQZKjqwM9S",
  "key17": "444FAgLuhQPLWs36AAk56LRrQP2pu6zecxKNznEJitNB3ZLNCurh64qDQohCKdRYWDBJHew3nwDkUdTdMu5TLF7h",
  "key18": "57sDDM1MJGT1oEQSf4orLbE5G7m5dXHDYE62Gb3b7gmkPCs3dv3JpDdRSrwoc6SG7L78NXtvUu2DhwDVdKA1kZcB",
  "key19": "5DwRmzXxRgQ8WUJXJiQ68SSF3pAhmzPhphkb36ruiLezQ4ixhxdBBxSBV7Ebz9WuozJ4kMtzUaCsHNQzQdiDcmRk",
  "key20": "5uDRBPVyY4CREAB8E6CG8GhXi7SVDZNBDVuniq1mCsBw1454Dvqm8dVyW7WQJinyeiAm1VvXXvDi4RSs9bQabfjC",
  "key21": "66TdDGsMWnJcRtez7hngD6cmTbBhNTDrpBJTzFy32xgEVKnt7AgqbDHzxEQkNj184mZC4jeX5TRdkwAzF54KkFvP",
  "key22": "3xVWYB2VHTNm1eh17woU7rFLMnD6Gbvj1Jha8LxrnJ2orKqxNEvz4JsyT9dned2vNTGn9RfUFHrfBvuKECynR5PQ",
  "key23": "2hQ2Dzf6nsiDRVib22VJENJJZKyDALkrKgoQRVPCY4EgWsDouPcEs9JQp5o5V4yguQ2gcGQD3ubpJGEsdYCXTumV",
  "key24": "4LbrhSA5nc1xHpVy9rD7ch7EYWFSswpdYhJqTxfwP2KnpbG91E7h5U6s1DGsewLC5xe3k1dd3YVEHbw6Wd2CQwxc",
  "key25": "5MbtbFjQei6yTJjbxbrBZ1crrzB1Nv3D5ttMqkkJ9Cr4fDVhp1ZcKu4Uj5AV9x4moSfMU32FgaUc9efrq1AoVYgu",
  "key26": "4t2Tz6Kw7qSqTHgGkCExd2xBWk2To7sdNPYgMaYRRr3f4ZK33g2ZY67tBKPu98LsS79FAyQrsTHhsJVJkHnitHVs",
  "key27": "67c3XCRbKAY5GMHGSoDfPTCDiMP5Tojk2E7PX9U7sujKgoCv68Fb4mgvcaufR6UtWy9XicjKA63fpRtKfFtrw8zR",
  "key28": "2trcyGZVEwhSgnLUP6CZRapwVg2xCJvVm7Fhhgo8mbkDGKzEbK5w9vtdbyKVd8GQER5pZvjk8q3UFWrHqDGxP5eU",
  "key29": "4efNSCAARauwjs5dzKNDUkg7A33eYJxoRMMYayni7rMseAWKdmRHTj7BUYKRrQM6cjn79ma7BQqhzdqSGC9UAqrJ",
  "key30": "4vNRfFRxGvFJyorNxEhfwibMxhi8otgWXBaWeCKfVMFUu6TUUQ5JNNdNjvzR269Kks247qo2uC3Xz3njPViQBYiw",
  "key31": "2a7dv6CTfA2mceoQwdApM8dDpsyXddqdUNPaTS2NNLo6iEfkC9P2gjb5kEsx6YyYYbqGCRP2mTbsYyDMYK32WqPK",
  "key32": "3rxEQ13xK3JyFGAi1LgNRayCPfbdRyVRJpy7avkbHT2C5nvTwZK5USnV53BddYZGFxam5w2eMA9VCwLBS2C53Uk2"
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
