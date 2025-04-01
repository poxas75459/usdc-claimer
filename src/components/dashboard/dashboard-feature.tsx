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
    "4eWikdcgwG7XKfzo7akDWzRFmH7nzhv4hqbQj2Dq1mzU3AQvpD3TgWAq4Aem5C5F7euPGqgyNMDBrSYHA6x3fB5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ryP6KQzWX85agpmq2uXF7JYdJkdhWMfcekWnBG2oT4dCohqTP4hwL6ugSF8JC2CTKwC1LohwfycVTSFcD3RA6GK",
  "key1": "7HZUm7enSVeb1hhoE3azFx6X892ovSeRu6GX98R1fk7vY4E43JXpqVEuPKyQDdebm1Vc5Spcr6poqNBo1oatebR",
  "key2": "5pfTBj2dyAUyi2mvgK7RgfyaHJAeMLWuqJZAyWBUCpoA2LYrSGjm7yTn79eghdy2tHgLKANdGxbZNGwVRH1eLFMC",
  "key3": "5ufXn1NaaRwnfyYTzDwz7CRomfrpi9dNUudcRQUC7R8xHPKeUdMH376538bYzQY2QFfuGFPnoM4x3KjUwyAuThky",
  "key4": "2oR5emzFz73LdbsqF9onPdaoQZSC299w7r8WbTXwtqhrxBgbtSeDdvkBZ55toJXny79m79ZBTaJ6fr6dEGDr2H2D",
  "key5": "3hn9XD8UEuUMy6yMeCbQE17onQwZauXRyzZAggL5w7XPWxFrFx7Mm1MTQj1aRQ2VcBXZz4U8rpWg7ZGXZeNovcgF",
  "key6": "67ew9rcbvUQ36vrqMDXJzaL6G36RB2fqvqkHu1HVY2AqB3r6CnQfkoDBLcUDvZr7VNE5iCz8FsduoeWZTGPoJbpg",
  "key7": "3aVePdt6STP9itXwU8XwxanjvYZERyb3YLTbFzgmQ3kGNVaKGE36b8m9kGBo8VLLvibfccbBrD8nyThPL1J7P41y",
  "key8": "3SQ8CpTvhUhbbX4zrXCdfruFqEqFotSZVSLB7eEMJyzkbePkzTWtmUHKZ48NRdXnrighRX6kFVTai9MyS7hGTvum",
  "key9": "3ByiXF7zCzkWmw5xPZwg7jgW8c5baavvmHhJBpytnt6YqMHSBDNaDKAbXbr8ighq71AHgUSxhK4ruyWv3pmQk7Su",
  "key10": "2LhtSVWKFnrddnwAF4yP27wUUcfPWcA8gAZoTuhUiXpNM318L71y8YKgKikWzUN2cu4QPu54KdMDsmwsUpd3NxyQ",
  "key11": "5VGbzNqjA4xLqf7T7Ve3VT3pgZzsVv9pJAT12XC3G9AEYycLWozUzJvXPy3DehAwAfw9yC5tw8RF7DgzyCpFMoXn",
  "key12": "3aS9VTMb1M7N2FRv8pD8Vjmseqo44KDuNApLVd9w2JvmFLNTcdvFDLNRrBza5XG8YyC2JN5Cv2MxUfFMZAPm5u4E",
  "key13": "hTWxtHkPmQhsUaMdxg5sc6coy8obgETdKCbvBaYJNZRN7w1GHmafecB9yEFBSPMFjoL5gnrUChE3uLtYoWcBsnt",
  "key14": "4T3eJi4wZ5jNvwtkaojgQL2MzjSUfccMQ62u1cu96hQQA4SUSHtaH7NwrS9gHX7ue4JJSQdAYNPsouvLHeXdbz5W",
  "key15": "4bVgcSLa4vhbXdbahk4kfQucuV6jnwasMYKeW7uioErTh9YbH93Z8uyDyuY6NQy7Qq1WB7sNpbPX8eyS8QVXRo9c",
  "key16": "5Buxrf3L5ZN4VSAsve4AziXYv14gYAfnz6wUqRTcgnjyzp3XLuRiRES2WssVKZPHYULPUyFPH5CC99Sg4Tm54q5d",
  "key17": "536FnCbr818Q7ikpoPzLUUt9NZTRwRwqXKa4X8fkkTQYXn2EEd9JsHc5iWTvM2UyYCSGVxwdNZoo8AnmPzW2WC2S",
  "key18": "3afWJUAm6ZQ5zfDJWc8mNGWMQs99XV9PYdQvySCRYDbrWF5q6uUW7pU3RCxsVgRenQ2sj6K737BsB1Xn898QSMC8",
  "key19": "4yDWsnxFhd8iRPEU2mFZqrUgEhNWJ2Ja19bSpXhiZmYbQcQgxKCdfknSC5EarMu7uihh4N4mxcBB2F3bnLCcQSnf",
  "key20": "4eT6FKacy7x56wQ44MhDJ5MWKLZYcYFsmosK3ZDafqZeLohmKbtKt8w5ttiwhx5pPr36eoK7AeBQwK96YcwXSQE4",
  "key21": "huTg3JQuBFejKqDtjhGQLnSmEmoqJo276X2ZiLwyH2CcBzF1gFvhSTCZGcNckYBhS7H1f4nEenjHqVv4cLxAUQ1",
  "key22": "HeCJ4hskSHdCpgau9zPomX65mQsjGj6yKvMXm1U4xU4wKqCbQ1UacqhpDKCcJBCLyKG75Xsk6GfdHmMMaBY9fMB",
  "key23": "2kXVEwSbnyJc6m9gnF2XSf1UYCofDJak59JEvWZZ7JC99MgeoNJdKrRqBjP7MSL8bE9WfYrn4dCBv5QHfhSDaeS9",
  "key24": "CHXgrBC3XAQiU3EbQ6Ujtd9i5fp3ssQhqeShyMvDZTVKeSjGvhXYve4nFgdWhPLi8z1SYfGrXKcxkAmhupfgCQ7",
  "key25": "2nLQcqz7p3ptrhkZ8jyBHGSQkbTcbigicTLqKK9HWKrH92mveDyBnES42yYSdRKtwtNPBARZNr33fSRPEbgivTTN",
  "key26": "37SqSfQjhHAby9FnhQiRUySAFweQ1xni9k4s2HbnT7sbDZSTCtve5fujUxBkSotRa9AMumXXVDfTmtnuMZccJR98",
  "key27": "4yxdBKtvyiXPaV3xknFp33EfUrEUBtcA2yKKb4tWyGNZ2KfRDaoTNBYBH1RWZMYLFoCHZUFphsHca38YYBBG26UD",
  "key28": "2649nx8ET4sWc8Qz1i9DxXmdEc787Dys4V2xXX6Pm4agZuHzKQZGXk2FBLHqUVUYFFfVxqTfiP1oQbgM1UPjUB4N",
  "key29": "4xL1myCbMtZVBqLpWuk81Qjp8Bu3JxGVGUZhYS8Jk9JkoaqK59Rh72iz2AoyVJWLBPhFY772kXWRneWJpU3McfPi",
  "key30": "VnoFpnC45Cm4dqMGPqDAJs7JRoAWjSy3SnzCt6F5MNR3eCgnYwBnJZahAm75NxdKByCvb8SdH8hNdgspfwVEd7i",
  "key31": "4dpzaHYjjqkQfJGB3EsvXkNBZSZqpreiJEbMcSRYX8rDCK7KwxZXtL6ouEMcmesjdnv4o4rrQo3kBn5qv3WgfLZD",
  "key32": "3NjHDRN2Mre1PJN9RtRN6juQLb2QUsteeoHHRnSE3BGNt93xkagUyhiLLAESXUDdeEBY98nX6xN3WpRrknPrYNNi",
  "key33": "5R3zLNfp11kLPBYdkqoxy5HhD5qVVyLvMYdxC4Uh88MprvRcYdPkJZrgnTrhTWKdaeHoEVQzCFhNvFtcjcW3GEAM",
  "key34": "3Gbo4GyzZAV2Kc4qepfng42nzniVpqTw3P8PTFrzEbL651HtE254tngskvByrHnYtZNc4gmCX6tcuUCizfPcQ2xB",
  "key35": "3aSn5CSRRFnbWWFEcC7c8c3FtQN8mansp1Rwkhh8SbXxGgVu8ZzczekRWr2Pue5scKAk358hxHgdoe9UEPdSavya",
  "key36": "ytZS6yqhWG4NxqUyjNcjwwrk11nt47Z3dEhKdnX7R7jYgFda3SBh7ri35a8aQZjnAmGdVR34cZ2XH4rGnYG8GVL",
  "key37": "5ZrFrwkoCVMup6uM4TfKz6rGcUoQ6XrW2mFaBRXrB77yUtWkrgWA9Z2234LiTc2QeHS3hhU8yF9qVo3CajP2A8Do",
  "key38": "22mFCNhbRDf2qbZPfqMURjDJxieuYKaJxyi8EjTNhMK74hRwwUroFwbFqvhVZkgvaMqbSbnTdFXu8s9dEFaRbXfZ",
  "key39": "4iyJEtTNoVk2ACfQZqD7kBP6uarkyCvkam4PppCHXsN47rPNxP8j355GuUzjUPxbk9GDXBAXiUAmkE14w1wUUUFT",
  "key40": "3mQGEdXtnVe9fu3Q44T3c7L3Geq91tzp1iEeMavE7G2hvJvjdrmjyuURL3Ao9YkSjP4TpPH2yj4C1rmNL9oysCmw",
  "key41": "4cEorsF74fWuLqQJLsZfA2rvuGmuTPk9TJuzXWEACAbma6wJgiRXxF3GyYuQCNSCM7qmz9nbWiPEHyJBesoLfgFk",
  "key42": "3Hn2Hk5ScaZJWWFgvCaoABF7G5cU6eAL85ipm9iPmbthRKefhuyvyefzSpoqsGJyjvwr3HfQpBYQ5MEdReE2fQC5"
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
