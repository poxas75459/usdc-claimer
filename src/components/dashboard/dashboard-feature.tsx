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
    "354nodRQwHBdw9ZRr84QCnUwMzkme5CfiX2iW3wifRxFYhhm8My6ayHZEHWZ9GpmxQ6VALLYe8anrijB5NrAvdib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5WwuV5c5JnGT8Bkdc9hgHEnqzZGXL69eDE2QhRksQAqAvTJ4QwiYK2iTZUg2694CZnJRnxC4zvpwYEd139yVRy",
  "key1": "2Z35riMkQw7Vwo8rAeccEgGGUMYdzacn7VRYx64Nw19xw5xKajDPbjWMtoY1YZijgZsSE5v2ZwzEQXsAbiQv1UWp",
  "key2": "p1fEFAVimUfpjq2EZfwk6f8LLyPux5N8TYNtyhKeZWUUqQoLZf97o2TfecmFocbYT3U9WnkkzP6qeMZcubh3W48",
  "key3": "3eu9aToGPW3zHp6sG3UFBRHLapCVTVpEhsmrdPewGriv9s8pXgFi4pTwRtEgtFDL6LT5YHBzfuKEyct9nKL6SYhA",
  "key4": "32LscbrP5SXCFgK2quyzSVbNyCsppAcaqfgnFCHd26ype1FFEFhVW7baTQd72p8vndp6ZQGb534Xp16fYGvkY84s",
  "key5": "4gNNhuyLo9sDF7CXPMg1BJ4W6s8hmwRKdRomGE9ATwTXQdMG8WSQWLxjtfTDowDCH42b7YrAR5t3ZQpvVw6Fb47z",
  "key6": "5geSvxrygnrs8mAVdmgLAiozaLdQqm6GrS4mVsufgbNZN4d3m8EUVtYsg4ZifBx6uWPStAM94kwNPMJ6B8rLdrRT",
  "key7": "4MRtXacS8hAi7HfYy4GUsGg98VduHpEf5Z3ynp5UyB6jGSiCccnHBxTe62nCbAkCEhcdzjkQuVTNkNvn1hjkrb6W",
  "key8": "3inMjA5nKehGVLPKF9pHqZPjy8MCAM4E8fKjABErCro9ywcVrivRMK9GggU217vPeca6uDszwQXbxKC8PQVqDJ5B",
  "key9": "4ZpGvgBXhmcvmyi4VvAgSPrgpZhFYKREBe7M2R8AcyJw5XYg75nFxV9BVwihgZdawkJezcduXTo7nwinoXfNYviD",
  "key10": "5WXGStLUAjSVJvWtUEN1GAUJURqsxiCDkpoe4uxPKmGaj5AU2HEVATnspPyNyzvncW3LALgTJTdSKdcXuZK4gvnq",
  "key11": "5Nuj5Qn885u8kSnTdr2iVqmWJNDUdFdNeFK4vwoTkn5XDKXVMcUQv7hj5A5vWQNZLt7ehFKy8jJWsrS2NNXRMidm",
  "key12": "RDdnZCF53yzVaM4aECrL4hnXZXEgbRFL7P3aRtx2JT1FdNP89zvonaME7CyyLFPVV17vNuWtVJXdajVPFV1JCRs",
  "key13": "62EQw3hnfbeVLEsqzSuMsK56SoXRxdBb5oH5LD3BrXETLNHk2nXef2Pq6ybshqZR4n1oYLQy6RaYYNefPZ2Zh5og",
  "key14": "5fyh2muYhcmpvN5ZbLsq7wvRZmdt56xZehyWMvYyrqHckYJMDvcFHeiFWFtka4FVNpRHjoehYB1jgAMMRxxhF25j",
  "key15": "UeEsh37F9Af22849AJi9aaCpKwbzASkgvf4EzeNwp3a8k4R91hpKtMqMqqWLCzDmRFUjkLvL1qeUY4amT4pNv8p",
  "key16": "4vBRz1RT3ADmETVtCxxGHuiVyfq126QNJsR3Yj6Lz9vEFwZYgLwBiCsx2wj1F8bdAkrXWyUnKDivjnxXV9SDRpBm",
  "key17": "unE5yYHXQxNYtRmG3VYyhoBK7Zzdzcm6zKVUTE4CR78FBVjrQnCu5jmynqqxdsdZkZSXg66uG6WcHg5jDuiFHzh",
  "key18": "3i1FNUiJDkAFwZZRWeqYhoy35UjF3ZSg5zjZ5EAJ6tkHyyww6W3e6RHn8CBAwC785UZxiWEcXkhTCvDJvefJaC1K",
  "key19": "2YC345PpGrV8KNDDxA55AtJy4yRE5SzweyhqbBqVdrKzYUSvcmnwghutoDSVSpc3cG3zjeEaEf7F4Pm82SKR871i",
  "key20": "4nEpvVpaEM9yeWtKTHNMSdQJze97pCbEcKGf3ETAGHxstuukU51fmPytENkZXT845umz8NFWJBGkvUpXv59aKj8P",
  "key21": "jRLGkisRSe3Y9CSXdbf4LSAb7b7ZvUoUoy5R5NQoi33hpif2fCmvQikqaHzgPr82LbF3GUb6jJMGYdjaVJfjyoQ",
  "key22": "5vaZziTJsE8XsXbLdaq2TSi8Fc7vMu7YJFb4z2b5E9XgxHkWTXnXDsKj38X5pt9bXvoGuEYJLeBMK6BtCau5CLi",
  "key23": "czmDyisqoRXwyJHvpMAPriaFFjYgGTCAup5fpQFFbWw2j7EagdkVsuCMBDSdd5TeYAX2jWeaCZANqpDRAZRwuvb",
  "key24": "hYPJzFTwmjdsbMEeGPR3VuJWDVwtKcETAMuU2m2n1uzZkp4vWc2KPWsYUkL2eb3v5hdaxeR9fLCAgZwvSvwnE3u",
  "key25": "4tKb5HXcN5YzSEmgkunLdR8im3t1jnH7QjGbX4DmdUM33rBYuxbUwo58Mk2x3eDJEfWcyqJreokD3XH8kFNx8qc4",
  "key26": "K3WCU9EPVQMeK7JqpHoYDM725SyqkxoU3wWriuq9oiLgk82UhG4x6BKpzxog72WkoqTY6bwCwwtJwuC8ScLyufq",
  "key27": "3ZxHLJuVq4NGbwHm6xnFkbB9BtiBX3e4oLGzhPDeajjeR22jjm4oyT2E3SDbsmvV1cF3ggejxQCuWiqyjJ2KQknD",
  "key28": "2rWyk1FhVqVjXWPN55m1QcEmKxDQGiM3r3M3W1fi4Cq6XnabfyhHXG5KTSfFyQ1Zsd5E9g3o3DugSH9aSEHbgYhS",
  "key29": "3J1dj8uo8evcqdUpJjCJTsf8v9z6fy8Ri6tkTJLnLkQzR1mUzktsHAqneJDFPU8PoN6rNWC79LTsrjUqMQqWJynV",
  "key30": "3JmoiiNM4yVBzqVoxDtdzSnYkmNgubTvy36coor5bc2DZagMVUR9myu8wCt9FwNASDuW6hFSLcMVZQKEtp2QczKD",
  "key31": "382bZfCet9Marc2XBsQ58DNhCTrB23Agtb9c5LiAsyKPMBLyotm3whx3sGDhZM9MNKWKNtg5gzNRLmnJsAj7ook6",
  "key32": "4xbfJvhEqX3BsexSRMt3tKFobtD81vjoRGURioK1NigbAAj318vcHEiFfmHDy2J1x9UJFrtqdHSPmz7h7N5hzHwx",
  "key33": "4nCk7mD66s4TkpkuLupnx1ktif2TzX14rBYRghZiRCWzv3shfTeJLiU3S4WPwAjBpYmUzzwsMUTHpYFgC4Hmhjk4",
  "key34": "35D5KAy36Ghhi8X7PaJpaJkmipFcJkiPxXTVKEAkG8r477vPi8XTHX9JuzLfReMFNAKDAhaN8Gbq3KEXJu5Vn4Mw",
  "key35": "2dUHkaaJjXN5ZqLwvqY5eFDZXh7boRWabrk8sMPVox9ULMpKfEJYyFD8hSwU1SkdhPML9VrCJn6CG7sTAq5KyqnW",
  "key36": "3WwjGzozV42P7mQiwoAFp2joCHNBC11cvHM3znc1ARJ7xUtMn7afC36PEfXtoDdvVt5RwMHjP9CD5uZwLVUUQx5m",
  "key37": "62q6A55FcBMsXYBZaCGXYmBNDhJYmWfM7nzSiEPb6kGbdM9xLSdThNjD8q4rY31zN9ucBsp1PceNE1Lf2BBmuXh",
  "key38": "5tHd5XfLKoSAJT2uncYFY4mEaVtWrhwJT7ST9GjSHs2wpUEXngeGB2DTFp47gMH1JpT6GtZxF9yU9Wev71SY3jag",
  "key39": "3MrjMruEwUo6cEtuUScT3LGp9JjXxqL73tnjET8vF3N4osEn45BNDMmcKEb5Ke6JqTbS4LuyrArxMBpvPem1udKX",
  "key40": "2BHdGu8dwUhuoEMbRS37i7soKBN7qfD3vzZ4SrEyA1JGfYqj96DXsXpqmDoXawMed1bZjJ5ehxmrK9mAZN649iXy",
  "key41": "18zysToBBM7oKjWRY8JAKFX2emy8PdfLj5BiPd9cPoUgf5DSpga2j5zoQs3M8XhkUE5jDidhtexvFaCvATpwWNH",
  "key42": "rQB1zz1Kjr4QfrHM7nbXrHx3Mxy7HeS4fek4gmBodSSbaDjCt9kcRY5X4NQxx5WXWpkPm13vnEk5CMQoNnpTRZ2",
  "key43": "4om49LwDT6c6Ud4zNvEdghHRxmW1ANS4xDX578CNeqAnJ4cqYuAXHNYtfJaawznf9GmXpovpA6NrETLxs4bJruSK",
  "key44": "4SyJGyeSzvfnVaw3Ldf9LXeUXg9GuwoDdzri3ka9jrmwMLJ6ckBtMMhZSNUHcyYa1gySkCs1SfjWiQRAJrgQMFcW",
  "key45": "2ZB5SMLRcGVzWUN6CT1pQZpVxA7zs72U8JKYS1S7LF4LWt58cZpAb6MeqMRkq8StLgyNLVzYLyJJgPP4JMsdqymE",
  "key46": "5nEwEJjWQ7FChjWKJz76FUqvDeSr5z5wvGeftrCfH4gVAg8MRXSGbxC51Wq3WVieGejVBm4caUaiREMcujZB219R",
  "key47": "4ryxwmDm1LwuuHBAVGjs1MqFNeRsL77J8G5WKsYS5mUs9s6rn4X99VVkBYK3hxoGYf5VqDyHdA3hdCLDHJwiCgNb",
  "key48": "51AQe1X9J9euMQHhfquCJscTh5yMKVjhCUKJbJ3CGfTosfSKCYGm36CQ6LZZeQ667LpkscoSnjXrgU29zEt4QoCo"
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
