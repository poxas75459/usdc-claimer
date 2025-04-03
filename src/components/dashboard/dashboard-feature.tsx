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
    "Mkhroe9Zrh7LmafGrZ4ap4wE5KjFiTUptvskMrCwjauoEd5ePczLNehpoP3EFomTtAS3DCf1oCGH8jmPmK3B1jX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxMd14jCKVYYavdpttsmExEcX6La5HxRd1XneF7nz99opSbdv5ixcGY4mbCcWwMv71gmGWVaS85hwHtABfeh8me",
  "key1": "4yKBxK2VxqvjMsVVZ4c566yC1gthsvQWr7Fzd95rqtCoammMpCPeGTzDFRCytGASjVvjomx85UWYH5NCCzRrprVP",
  "key2": "2pr7wofQ7suPYHMtUXzycbViSZ3NrVAWXAM7eVN8NJQqPsAHBxzzYqEZYsz88UieAKY9f42BLWCR5vBUVot53yQb",
  "key3": "4vYXK2mJ7bohTQnheeo4GsPdet6NZAyBmS4VeZEscAYAc4xuij8APXpUv4tm9TwGjVs7gT1kCnrMEqUQWaTyi5yy",
  "key4": "5jjdXEnv8hM3SWFdpLLsrsMoVpmSmoVS56VjQvpPnDXgksNkpesrYwyHWTJ89LgVtR5ctDWi6hKEhn1r2M8TQStr",
  "key5": "38mPRRirkiwgysPrCGt31qN8MTZrkerR4d3PATL8fkVzqeW76jCsUp5VuXQCj6GMrPMpGVAa3Js5Q9hAraMZiBU7",
  "key6": "2YsGZ47Mud4vFnyb97D3EnUUL3KVfDwc3AvxMwrY1TWEegGShsNkSPLWmsDeofgmwqcLdQWLgaos3eeNzbRr4mcu",
  "key7": "4PTjw6kLHiW4mHsiPVz1aV43WNJ8VToh5kJXEgTyUkftkSAsVabdcf5UiXjUYBC32MZvwufMyvLuEP62zbm2hDNx",
  "key8": "5UAb47Gc21crwigtL4fMGZodp5v5Yc2rcZmXxgoU8dsmNbBZrtu3M85UFEAs6XcV4sdQvJfkr7mYC8csQjutRJah",
  "key9": "3gjJZzvKFrqHm2NapYwt8PWR8pNxYBdSJ39JXX2DLTaZZaPschsPAw7Vu5q744kQZTHndqEfV4k1ycWJPGNeHFDi",
  "key10": "38NBNpuPJSs7y7WvkQsFuq2Gthk1uSmsXmQeP7QXcAY5xk728XRPj2RbgUKarQdvGfLbVqrr22WehqSXxevKZxme",
  "key11": "5QgQiKiyyfBJq5BnnQjR7Y8sxGMvxPUKEz5VB8uVGaFWVLLa9irdALAwJQmo8FUMr7Zo1hCBf4wQegCu183ebdnK",
  "key12": "3hL8o5t7RbEaoLe5cUhtpk2X4KBmbtdQ8bHyNBm5zerVvsvZjqTNv9YS4MbjsG9MSZx9qiCGSZxjn4kMZqMfq8ek",
  "key13": "3HkRvuwysqhM3VetSmzuFwthf4aJgpcoTeaaRFuwwxzPrYuFGZt7gUGPt8Fg7E6xRwDgyn9xc1ecrRBqbfSUxJbs",
  "key14": "2zefEWYfseQvQfBRHL68iRaBsxoaHxWj8roSXpJq6zG4CYuWCG5zV9WnecesD5cAteV91PrGyiHZ4e3aP9xopq9X",
  "key15": "3giiSFRW4bfo6GgjBzXYfBBEBwVY2QAr5EuxraGLR8ee9WJ6HrhWffnUzFry9xsF4oiky2JENGxYuRSBsjCDN3DP",
  "key16": "3khuM8ZwbrV7g3E2mntHs97NGEHzsp24N33gBNtdnERmoCswH4b9ZZs4aayivkxAqaV6A93n4vBKXJ82BvSvFM5m",
  "key17": "4np9MQvQvVx5YdyDCnoMYyEHtppCGN8hmHhT9dVGP32NoP5KfjC68RMZoG3jJ6SUTBZhotAuwhppGz5CnnpMW8W2",
  "key18": "3PCE7FKecjfHRKvwuj8FmBCuR9cG5vj2k39Rt3b97UXkn1A9j1vZJ5NeJNXpEe3YH3Tc9XhEN6uz3jLJyGreZgXD",
  "key19": "2FDK5Fw611iW8abgJAHgHg3S5erY13keFUBufaNgTu9ob2bGVwe2dVBrjfAKdhwtqJknRnuxJBD7pVASuWzxxTGw",
  "key20": "q4oto6bFmbWHrJfPTqrrcFuiMr4pwVA5ontM3ZjFuxb8g7yzzdRW46Kw39sArLQiBsA5Quea2bjCT2WpPGEUrvu",
  "key21": "3VDmyxjD6b3GFgQujJsu1BgWh1bWF1ZsZ3XWzwS2e4bwUp4borS6oTERndTwgSEUdSj1TAeo6jUuGqsALskj3dFx",
  "key22": "MBavrEn5zuy2QBicAfThfianfovNzTcENnZRK1fdaiweKGGFRMofjeDozEnB7U3dVosqCRgkcXWnBgpWFvTmDVD",
  "key23": "5zKToLq52Ao1ykevT6s4EsxCWzXtYfS5uQtNo7iRNqEN2riXphq4wEPU8NrnHLoLYYPRQWGnkg8fS5fPxy5mxJUk",
  "key24": "43R8uJDr6vkk6r6UYJegqCpNJzQq9ekQJWUPGZEEpMZk7zv238R58UNaoHsMc8DxEgB1zVYiLs2AZhrwN8P52QkW",
  "key25": "5NZxEfjxi6NqbQDh23caXyGpL25uRwUhTASuHQEaPTf9BG9PX9bgdE4dhvssye9ZiEbN1DFZkSANxtKPfD8SrY1f",
  "key26": "5ycLZSQHojT2SuoNPZwTLC6NJjXwmZppVNFgP2oYm7Crxo459XoG2Uz2WqYnYapHNJnzVwK5PtHuhcww1wd9m61g",
  "key27": "2aah3tdceMvE9NAjboUsq9haJJPKqm35RLHrEWkMgwN55yqGxpZqe5tnbzB3jQzZfMxhZDvPeZSPgkjYH8k9wZUy"
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
