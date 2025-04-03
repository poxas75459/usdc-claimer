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
    "go2muSxbY4EqUv5xgNFrdKyLk9SyR87eJh33tYZHD4eLDKpnY9rw2mrftuthaSrQqUM5q27JFLsM6Mr77gKuLQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xxtThB3jeiSNUZYQjPLfnJxEMZmRWD4My5WpYwHJPwUWRvEZYUjx7ArVxG249cC8EW4mwnrC5JtuBAwLVKNr53",
  "key1": "3hzWZjHTsYyrbPdv7aNBwMchowd4E3iY6cyxZvGuWr1vxhWHb56ssZBYWe7iPG7EEzaZ77d6nnGsrApvNiXfDq26",
  "key2": "48BTEM43rfAAmVanRUksMEKrZQWuETAaYUELBdXHFdsKzVcwQjycu6ZEGF7QN6m7CtdfK1QFzeczygaL3o6MSX49",
  "key3": "3yWADZeAG4GB74u6hRXmfD1et3dkH2cir6RLvqKMCiNvydGDmoYmiA6zJ8ngtdCLLKC7BzA7YGV5TEpPsEzfK2tD",
  "key4": "316tRXBausLJZF4t8Dof2PPpPP9uhxBUdqAAriB5eoPwDG16wuAN8Z7VdE8YnyiEBs3m6hQJayM9DMFdz86M7EVt",
  "key5": "4uUCeaw9e8MT5iQ4T2ru7vpEs9kBDsD4ZwtdvxXjyc4ghUhdwJBKyan6XGCjwjfcuXfhXTavHYTae2bLqzgrqb1W",
  "key6": "4cpURzDyRY8PDaUwarby7X5rjuwgthBapS5qVbC3vnLAX7H42hAp2iiCk2DTzmGvwCZmdJvpGQModBhNVzjqDbVt",
  "key7": "2vbKg9JxDegwUedsfagtuFM8saXpcyw4Tu4EjvpjvwrSVDcxzRyieXBZr9rGsHBgfKjR9jGaLB2qigLN1gjMXv2P",
  "key8": "pxTWBBjeG23zqAKfMzs4atKbTVQ2ig7M5FbzT3B7Sjiu4d6aMA6c2vX8WRiUwyU7EjVKiRLkakYPSj4SBBLFtQD",
  "key9": "3LibdXB2hEVdFMjDvLSXspHzmLUQDzmvhCFULaDuEXiBardxn1wdhJFeaYPpqAy8GmyPhgLUEFoWu331tkmmdfnk",
  "key10": "24YdkBXVJDamsxfv7ZeYCu2E6VYXLGUCZ5qy4ngFmaLZwiUazx4F5hmPnKP1gRV1KZknqLAzmz4i8pREBaaqhnSE",
  "key11": "3xsDRjPRY5iZmpmx6wZ6HRoRV9WmsLpn7pcbtBWaEtrLg9RNTMsUGXjv2YbbZjVUP46r9efwNVWVE6yqenGu9UmH",
  "key12": "cYTnCDpcWjRfaNdyK51RGZKV1KezemnnmxPzu2smyqxWmeymFj8hC7UbdQcPLEEepejD6jnatxQ5LwMmbYVXqjy",
  "key13": "5oMZpYpvTNjd6jMTDwQgKLfJXFiVQvq4aksyzqq2cb9J6nZK8VBmMzUPTWQGtrnPUaE1ET6UMvVx7uXS4frgWGNi",
  "key14": "2Eyzc3ApNNP1aAhLsju1oStFoxcEmFfYB6PAgKZVb8424CFkqsDb9PcpvfLGpbtpNyJojGrTE2h6rAn3ed6rpjsr",
  "key15": "28YHLnUPKkAM8opobsj2HzFfjkJssymfgwgLJaZ56ijx64SyM8csLMcvvk2jWcvki5uXz4UTQVAc12u7kGtbfKKb",
  "key16": "3HeU62MiJgVGz1ke22phxWT8ESiLejBoyAzUHttf2gEdoA2bB24wxcmcSKDCJcnoj9Aqwf6KwJHoFVfxwCxHCY9G",
  "key17": "22U9xTR8JeCri1GVabenxAaW3BBVdxL5MFGcKNfvNpYsgcQnqWQgcaD9QbLQgzRgL7PB2yBEXqATzrFdggMJ5BGE",
  "key18": "4zrwhtyHNNLuwGBgFp1hJnktMNRWTgvyp15t4EXYvjRgU7K6KcQRm3ZBKMbNjPnXVNAXooxUpuAhnrwhY7fdWkB6",
  "key19": "59kfQ9oVEjLzkZ1m3LUvminQ1hKXPdaRhEyy3bSYETi5kaC5hR5hav5xL8JM7g55BpiwuvhSCPsvnqHNvpZ4JfwG",
  "key20": "UGVFYqbUfqwbxfLnuksfPdoVDiz6QL6NpRiiEbsi7CBVgFCwRAp1uxATNL2Km3qY6ZVsXgE2i1yEs4yiJeiCped",
  "key21": "4qNH99LFo7sg7utw9xv46NM4Nk763VG1DRx66T8jc3uNDdBcvtCgU1U7MnL4ATYSdjxPACNctpyL11GwXeAURd5j",
  "key22": "mFDFQuqsH77fhhcuzMmcStD3vUvnSCrLS3j2WU3wPd89wYKpJcvimmikh6rHfcuhHwMeeGA8w2vwCpzry4suVDW",
  "key23": "4wcbG1aBx3iXndYreuu1gJ7gQHRw956RRLSU4FagyzJ6vnLDGBj7v8SktvFcLFi2jFM6RKUi5kUExFJGmZUKWMaM",
  "key24": "3yaALrNuxueWSeQxQDQ7RKqsnEbN1SmzA4j5E5pVLT1RKGhjSeSLRpSyu9c7aq8JL5Uf2xo9kx444bHKaQH7wwnZ"
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
