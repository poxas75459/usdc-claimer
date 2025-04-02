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
    "4cog7QhLvtbZ6dqnWW1uigwWGT2NH3JjupZVWP2FSjjSmBxneCrmv5EbYLuHSV61Ta48zyqsw2qqMfQfu8DNhqPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gQjNboa2YmqCfFhLHM1F1VeU3eoUNNA3kuviAqGY3JKCVEwzAxf3mFcdGnEzTZVRtrcSgUw4y6xVX99tyVtyyuT",
  "key1": "3aUQ16FcVWYd6tedjQT7RV13LsMmehwYtmnxcearwYrs5S4BTZ2PpmdyjmQ3nWSNA88ywegVeB1m7iNFYHgBKXwf",
  "key2": "3dEUFZ96YU14UgQHAtjGaDfbWVv1fLoRUeV7yJ3mW5biRmT4q17P6aVU14xt9JWnmncq4bbkU56dQkJ3gYsm9iKZ",
  "key3": "21Wm5tt7KGE9v66DJGexk8GjX7t2GoWZyPh45GW3pANcKK7cutjGoNByrfKJdu26udqW2rcYVoSjK6cxDHZShLJy",
  "key4": "2LSpkSoWdajW2XRr21H5k4AoqNSyGyXpA5FareZEy54AA1nRoVPkebRaQfTxcQ5VRbFJmUd2YbsQKjiTL7QzEoNX",
  "key5": "5kUqR3QVDcubZh6ZnhzUWEmZq4Fzw8FuHFtmaJhqkmZmmpGyfDMyS4kVtVbVHWTEbfvSv6x3GPuo8axo9wWx7Rvw",
  "key6": "3o16usnAfE5CFU5bvJ43gMEWyjeMEqCYyLdqVa1jW8jnBuERcNo8zozffvoLXqEDn7M8UK4RJJseJBt7cEsaG9Gp",
  "key7": "4c4EkVQvfWesoE6ruZEWXq7v8F6E3HqhDG66sppekdPmZ3HcdS2UydxbKzWYqKvoAuDHzXtTx9eUvkYyYuMQCThm",
  "key8": "2DQzf88ziqZLmNZQaRgvk7RjM2uUs4QrqWpZrfuww68vcBVoCphKERrnaFQnZTdPwE5TANN6XwLxow3CndR7uckc",
  "key9": "oRKMVSvWvmnxQH8qZaAefjNRLmtezy8pWmdfHbMM78L4iwYinEigKjyqStV49fSxf9zFeEK5K7x8DZiKRV367ui",
  "key10": "2pGSFC3seVaDaKrQJoKZGbXKDiocVEuZkkLipJ8RyBkyc2AiHoLYETAbnyb1D9sA6ojQRe3Gpz395rG16UsfQqnN",
  "key11": "2BvRxVLNTG2g1rDs7c9qvHQwXSWoCvre2MGjPpt6fFZNfFWSzgNnm3dQRvtFepRjbCCAtQhvfGbrVJswhwQiBifi",
  "key12": "3n6XJ7pudFF83vUvog4JVN6299SkiJbS1svxS6rA69egqfL3KkcmfM5jTUBrqqpguphXkoi2ympABGfgLwyagZ3b",
  "key13": "YNu8XFv49zwaZFZE5vn6ZiDnuDozyorT2ERMuz3zPBufk2EbyNd7Fm5M52PWQEXJeLqYv52cGwXH32LbwURZeZD",
  "key14": "3ZXS88FKbZAARbUVXYaVb8BWbMV5UcD2qituARnrvLjXFJteS2G9ko7Z4kaSS86zLHwXCqQKWAiawrmdhFDV8rSR",
  "key15": "42woY3orV46mL13FbkMTyw5if3SNtdpRFijCcsMNMKq7PBnF4s6KrQJzN3NrzrXJSmGysHsnU3Cd2J2jx9MjKSsV",
  "key16": "65kEqRSeq5r97FDDuumGCNLQMoepDZ7L6mww5Rs8epSwJwZjBmHx27EBQHFEVtXjceR1QitYgHFQ9MuPjPJuDM7K",
  "key17": "52dkpsa1pwTxciSF9WquHX5gVDBY7p6goTF8xBeg19myXYzxF729ztr8VKZd4zVdw1CbEGK2ptn7dAAbKnXhbf6Y",
  "key18": "ej5Y6S9DdbSpY6RCQkK4sy2y2aaCWAx28emt8wmUKZYQLgqinp6JrPVH1uJoWgJMY7rstzqwvPeLJou94NjEeWE",
  "key19": "4yGtZgb6sFQ6DUodtVRhw8HKTBJFCMQkrFV1YXfT95AvbRcXPJXxSg3JPCwfAg9UVhREGakvYX9tHSr1RyTnrzBp",
  "key20": "a5cmKKzbmXd5wpkPCX2rB7FTjbcJyYZbyZNZmPZaW2CapfretwsmR97dY8kYARFkZyfwggGga2FMDzjxEQkEjxj",
  "key21": "5EqPFfiE5g3w7FicSHN6p5x64hzdtNPeuJEUrpDShhe2EE68MgY8C3ZbsFfXnpAffcBxmVracFLNEfjUhVNnXbU6",
  "key22": "3DUpGBY3Zqa8Qo18s5AK6YqKym8Q448ee8iGenpsPQWDn2TQycND42fPhSYduHXSrPPsfacu82wtTKC3nB3gfuLb",
  "key23": "3bfcAp5RWHGgsW9WTqoMAmLxQYEHademhUY3VbitPajr4hbhihW2Ujg2fnKDatx1Q7iTuvtQhRbSVa3nfgkHBq6M",
  "key24": "nisHw1tHee6bqpYWfF6QBYtp5D1rXnpDNru4oKn4nb8jp1XY97bRGBWJJ1Q1jiWWu5DWxu6PMCUV8uoZvoFb12a",
  "key25": "3yQN1QPARwV4c6mCLeRB7JktikmLGnKv8teCrk6jpyhLcvSEn8J5NnuDb4qJWFA9pDHiKiHkZhHWzUqz4Wbm9nCT",
  "key26": "2stZrXD7ASb7uUZZWtacEPhUg8utLDSgVEDY3vqmjWjSkGAETLvQQwYWXSHMrpGpN6jVPRzJi9jgVFAeffuf8JMu",
  "key27": "5pQVK7xR57motC9nZrGjcetM8LFBjHEErmN6J8YTLWo1WbojanhQeufXijALSr9YmW2xQTCVHBFM55d6ocRvQMdD",
  "key28": "3kbg5JndxqZiDjjYpHCq2TuVB2Dz6S3W2mSdUDL2aL5tiKZ7Ygg3uh3nhAipbFNcXfNgjbcaJmBAufDgiYumQt6U",
  "key29": "2yqpcmkHxVMJsBpfZzUW4QC522NyFVwCu1bJgt6KEmHeFDcPjBGKqu47WqU4EwQj7WuKLX6aqDAL6PHXsFNRcsa3",
  "key30": "FCzPfbh2cQChASii6RphvBQKdQ4XVd35JwnZkrZXGhtRDqatt24zHHGFtUjmTwbb5ey5bLKnB3eqDiMjfqB4hnf",
  "key31": "2uxwmWatrj3twEmZG575s7fTstAQybVLiGWDKGgduBbux3SkHto15DKSCKkGdZaCU14s3nurHbXGUvqwCD6X8T2J",
  "key32": "2tQ3BDKsJt8RT6Bw9hsihL5tLUaaDBV8VYjstJDwr4qh4HbjXH1jcbVhRdJGX2c43GLrcMTcZEKjcCXH6wDNR7Ri",
  "key33": "2HiyRKF4Wt17bEawApQ9rwSaSZATY1NpG2AyH8Rnvf4aCnt2jq9txHELsj2gNwuzgKw2j6S33ag8VCY2FYtMfvea",
  "key34": "urm2vpQ7H53DV4RKRSPBgPfbKvt7hWR4J8KisLg86J7hpPhdrtcYgtwo2B3U61QPDcAvkF5cKmnyshsMP5VdL4f",
  "key35": "Hpm98HsAjeHbyoA2jXnc8tSx3sCyXvTH39jz4fhYUA2M8L62Y8i1r6v5xShZZFNE2RUmmosz2fwA5SNA5Sqqm77",
  "key36": "2jYJgw5i699SEK1MvsqL4k94d3oQyymYoTjHJPrzscFGkJVUWfUJaBG4EqfsPhNJec6aoi3Es8rnKowY8BbBqvL7",
  "key37": "2c6mPBbYpkDP9G8C9b1FHk1k328ft4k7mwr3GTWdnSHbzHb93EYqQm64jady2Ti1Gqqi1UcF54DdsbEh1pmo2otA",
  "key38": "3iYxTWqL2fkiqo9tgW1FDkw4kMw2bjMH6os1Ejv2DEufQhhFRo44g25r42c8cgvCDkj374griMxEDB8ZErJh26Mo",
  "key39": "2kgTbAizatCUeuTEVyzPWy3E6phgUnYpSGY18jCHhHpGCcG9BKsdb55qft5n6YgiMg8FZmTGQ5otUn8xsdaURrKZ",
  "key40": "3YQgAQBivRwAYPz5VWnFtdGoWy214KSLMRMtEyK4HLccWSeTMeZcktQyEL2hnhaiepgsuNpxG8xVgCUG9FJRA68c",
  "key41": "5wDLHf7Uv8vXx1QrjzfX5yRGqzBxE4MPcgAy2uT6zFguh5qtzp6MaRbsyh9VW7dK2K2UNYjda2gBFxrsmEENYCpC",
  "key42": "2avhjtVAp6fBhknqgKT4LxAQLda2N8dvLqu9XJM5pvHff3nW6A4kbcseqpkrotLFa2ZnfPJr3oTgwFTbDc3tFnKi"
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
