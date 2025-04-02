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
    "5XC5KZXuyXLyW2CjjcSu462nruFRBehndHT6c69XupufocG9GDDzS9LF7wPhr6S9mcZaWVSpC3bwHUzdDpcH8b9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NUkdttbnvgysf1ohHLxjgvxNmirAfBWfmZmpTArtEKnJem5hQ3JmAWM6wzesWNzLb9EqDeyyF5k1rBgsfraLEP1",
  "key1": "jwrbPVsBbA2WaqC1tDBfmwqMFm9Un9BBjhuBFZceZD8yBfDF26hTNQ1uMEsiqj6MA8LUGbG29DRxLhdsEtfdN4Y",
  "key2": "4fwa491Kf72JrBtS3XuSyQM3FrpHy97KPz6R74rHQbbkovj8sn3NkhUXB4NCv4anHhVhXRc4ouWaGsN9cNQy1Efx",
  "key3": "4wZJdouknuui9RSEKu9SwbGudNHV8U72ACgML951PU6zJw1pAkkzfyx5QXsa5Mu73z5jHsMVS1TpHVmBCF5ECxQZ",
  "key4": "57iuv2zspmXDuApL7dUt9kNnSWMExwjmGpY1pUyVXfV1jeQuEAFnB667j3e2LCZYS3CyjNySyCQvrjxqg8Drt6W8",
  "key5": "rGsMunuRgTmUVhM17aJXQFJqCWGyddeybCXw1wPX6FTYf9rFnnm7iGvZdBQ96NKhT9U8XduyqxdVVq9NyFaBFye",
  "key6": "3ncLzX3AxkQZd74cfQffTz8zYRfgzhyKB7pLCNwF6c8toj147noWq4wHVHbPhPRmYbW2Q9zBR2fCtvFjYZCiw7HP",
  "key7": "26RD38e8NPHGrZ9SV11bu5hrok8bGpBFRYVrF87BDkuWrie67Y5mPNDVVJHPes4BKJiTDwH2DqHgfyQhKosM6kV5",
  "key8": "2gdkcvcoXPHtWVUvp5RVW4JqM6LqkBvDFEcUVLo5xocc78SaiyuXjiLi9YHDvbkKr4MbcL6nT86YqTMHZLqcAjcT",
  "key9": "Cg3Tu5xBsA9ohMMJdJLENijKVVBnwpZ6iucy8ABeTDXotB41dzUcsxzGUhEzuCYS9i2RLZKgvZPKjuEDEjzHQPc",
  "key10": "2RaTktPFgPSa24LGJUTJJbGXXjSs9ScBgMVkjxCnBtCVDx85P7PuRkn3Voh824LTZdAvGwUHddM7VsFzwvMggsBu",
  "key11": "51VDbm95pXWg6Hek4ZKZp9kn2guRDrjbsXpc4sQf3GhQqTcw3XPvrzESincJW3bhaSyCi69CnWvofqGz9owrnQwc",
  "key12": "67MfkM4SGDQLcGySzJgKtEpAHcV1NqGduAmXgXsJZRvEZQXH543oYy7JYWGdAe7hjoRZ8tPJUTp36eTMrgCkfvpv",
  "key13": "3cmmjQVANtor8yEouAobhxLhvHu58df4kE3Lm6M4LgZHon1J2aSBa5saktGbXHWSFerAStn7fWydz3ZqS3entF4s",
  "key14": "x2rYaqR266wVzzuwf2V9ZsabLHc9mfWb977dUdxRUdqJnuYZaPx6BFjwJE3F6yUqFbL3oozm6AF6SbwDekXPFXy",
  "key15": "2naX3RqYnk9BEgd5E3nWxZRkiT4AfXDAqqrgtaMD4VcGop18bZsjoyYSH88tVjLc6RqcQY1tWDNF5AtgfuXH9b1X",
  "key16": "aVpA84eS1WSXAFf41Zhi8mHqqpfgKoUPWbyKhMTGCZnFcCQGXcGYPQJUg9A1x5QHZBvDhFT8rTdzxQq6mmJShu5",
  "key17": "36vqp6MHQKrksHNZmo68p5Ji9bkukpks2n2wWen4GpB1jYR186HgRQPouxuytvVuAeVcrvC1wSoQ5oqP4iaE61Ys",
  "key18": "c6WMJHrjcq3LSMdFmP1vvenLj8SLwiv7WgQToA5hdeegJ7i3GhHfwB2kB2hdE2CYsJYrHj4AXQyJy24t3Rcu7xW",
  "key19": "NyCHVx8Pbr6BMe1iJuVqBS2dJVTMegFmAUzhuUyF6K4EbFZiG4ERgNyBjdFrqnhenKvUhKHgsngGPE3sx7R6fyr",
  "key20": "EU9dzwPN3LAP914FW55cLVZvvpMYjm8E8cU8Pv42Y8VZmukQRNhX2TvHEYHxzc8UJ2vKD9GGxhkimtpbr5KbEkv",
  "key21": "36fDcpXfNAWavHNHt74uxegerRwLpds1agKStbcg9wrnXsAcYfZTKFUGrb1pBQ9Ga2yfZFT2uG2WXnWLpZXtD3nA",
  "key22": "66bB5yttwbduDBBsy53PQbcwS8K7hAPv44cmiyTVCUcpV7YEY5bqyVrGt9t2EwxjFg59yoyUiag34MrNtF6vdkRE",
  "key23": "KaCZmNqL6aca1gMJvVqQwkFCksA6qTrH8ccGZhui1ZrnZFLCRN68HYPqdmdrXSg7JEkVKaMim12FxYHsb42n4JX",
  "key24": "ruRLvJJaCURnmzeEoqxSsD1ADP1gzc8ix6fe7v52yFuuLqhWuXAhbXdcNYAbDJN65nwCHxq2WWJYAhs4nxuHKgL"
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
