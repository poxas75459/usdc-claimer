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
    "5NGwfQeBuzMq7xKqWxGNhCMLYrris3qfBJNnipYNB1PzPymfp9w7gXAKJNGxQFjCzoh5qBQUkAnMkD48mxYKPnjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCkaySDkzTNf2rMsZfNLZ3KADtUdEuFkkpVsuwqkzJTrAuxn8bffWxJr43GGvSWpoeQypedEEiboSuYj2whFSfe",
  "key1": "23BjwMzrEfTNTXViHZnJn9yeNkaaVu2zwv8AWXCXpEepDPXstFniyz9tDn6mWoH7o26uUyYZKJk149Xq1rSbLyiq",
  "key2": "55wGKb7mGg7dhjwGLFpatyxaWRCHE91sRhJRpadPWnQ3bdCmrmWSjCtbwP4u9kVgUevddUmeyQ8R2jJNuaFGkQXS",
  "key3": "2DEqCtFyUEJbQa4fBQpTuhmfAZX1WkKzrNwX2KixQvbuaMwzZWJVZG9W7wtCKbdChM1pGgW5tdcqiXMRwfhQ5xJL",
  "key4": "4omm4ehdgDvD2yjTF2noaeQoyrR49kg2QhtdiYDpPhhEdSzdLEm6KErjMVh6Ycd5SCPzPdR1qEojgEwtpSTVKrZC",
  "key5": "27R1GiUpBy6rQQgG2ouH7B356ScCTUposP6kzXps4BsA87WFnh4yCbCCNgYu91XrtfmMUAdnc9r3MHY9naA4x8kF",
  "key6": "52qXSjEtDCXH4rX8aXpddyEUBVrSipyEoT4gtBtQpCSjgYatAgQNrJuzS7Fxw6Qcy83zCP4xeN6bjskGgcmBHeDP",
  "key7": "3Ri2LLu6DMySY5bGb5wrfeEVQsXyrFgqj6Q72kXsYzxvJu1zef8paQbh28vepLPbA3Km6CJRyMCRaMUzgWUrpZz1",
  "key8": "2sgapBggNZArsPFrUGFWaSjWEdTHB6wkSLraSiwYsP34rctd8BNUmHejtBAn6ehj1vv5XTQQzFxbes4M8CDPjCFJ",
  "key9": "4RVcHgfHesSQg5TP3hGLHX3e34baztMV7UEBybtGR8TSrM9jbPpQNuWsA8iiFPd2TFwjZNAJyuEoLZtrW8NGMCbZ",
  "key10": "P2BC8KM6YSk8d8JygkQ47ZCUBrxveQAz8FYw1e6yA4peMKASz9LwqRSk8qgyTzZTQ5Hm3ja73uyg35D6rrQeWHc",
  "key11": "3VvtU77Ca3wajGB7dJWxS5UcipjpuJurh1fd9ZM1Cbk8tfnbnf6s4WriYFvmKrF4cQ7JGau2toqc1ihKW5SU3SVr",
  "key12": "53naMTcxxsWWgyNoNbtUa9aEotnLFgHv4jTMnjmtV4xnnbGTq5qnhLox4dhbYoVzn38trofiwsbkzZZdKyBFqZh8",
  "key13": "ac3TQ7B2UBjZrNVuNJ5tLzZBeJJjcwujShBcd5MRCt9R3Fh7U9N7J2edD7n3aBF3zzeyWTjdvYpfn3pUgXNBjUS",
  "key14": "3PUFujcxUhre2EHEUopAYbbZLPNcPSaPpx87Mpk6EsruuQdCyVABZAKEi12kxbfh1JveHbMeVZkcrWdtXRkKHCMo",
  "key15": "3XrqMMXKQpzJZmbE5JR5DGkmHeuPPcXjzvAaFB7TQDdsbGUZKGeQrgCuFP4e8uME94mqZAwqDyEDT3me79ZLopUP",
  "key16": "4AU36s7oaLRBekSKeZDH6rvcvwgr4LLzvYx2i2YGrErWso4xQ8amcCGoVDr1KENCMHmLuZ528m34ps62LnXoiGUg",
  "key17": "475VAtmFDcE6QMKGQEqc5pF2qsZv7NFu4fDftHRM2fBr9vv8dzZAV6mrnTcZwLsYQzxChCcd6vnb5X1fckJ3X13V",
  "key18": "335YGobezj1M3Xpbn7kVSDtPURp8hj9zAtc1WbtvHp1cLarKXK3vweWtW2Q6SaVPfCsVLsbSGYNyq1Ac5v597Db6",
  "key19": "2fdswV6EDLE6zqXLAaHE3YyFvhPQn8hjjdULUkVy8C4CjYPHQHmfQqUAYh2ERk9GL1ECUhAULyf69sE1rP4F4bMv",
  "key20": "4XN8icqy9e32XE3ypZBcEXLhpyfyv7WPVBUrdst6t5PTtBtbJCH75Q9f7bu2Va7rmWTFVJBzhaP1DkFzLXuEs64M",
  "key21": "nFdvGzZFzrwv7ohDatjjDyCQK6LozmQit3T2BFbZJRXaMqS82DfRbvgGfY1oGudqbyWGb9UACJBKyL6nTf8TshN",
  "key22": "5CQTMam8H8pamWfr3nGJc5KA8Xw82JTSqG3gMCq2kzQW7adBT1YZkmdWjvFp7dyau94TvTExocBShgLkHr98rkn4",
  "key23": "5w7ehxYbTm7niGhZvZSh6yBBVDPZiAQNrxy6o9YkoPBf5JG74rqwaccix3WKCzBZF9UUyWP6MJpLLVPyaJJZpnNY",
  "key24": "4RW6NDF3QPGgxYvNLYKZ8jnDqdGetbvGztUXUgTMi3bg97tTfVEMjRjLKPrBuYLsDX5KBJUN8riCxX3hEbg3HwQ",
  "key25": "2rvwWq6sioDqdBZ26PqnEFib7ngAWuD8c5rA4bbvt4J5o6AL5Fw2zv2XeKnSK1UgZGBqoZWnSm7urWUd4vdjjRLy",
  "key26": "2DnzS4jyimYjMNhzuiKKfGkNs8wMeQj6AwCZmmhGwHzcnMTvM2xayh8sb8qjaLWZaCpidxf85GYM4XeQVy8NDKyu",
  "key27": "4H5GG8jgQ4Aa6WUkbHifGqQU6CG94qo38vBVhj4NKcWEwtRbprEVdJ5R2FdJH7J58QMYwnBeyKWHJuwjq7yYp2DZ",
  "key28": "4j15VxpjwU6aJU1pGDbuZ21ZV1c87n2ohGhJomokugrCySZG71LURtJpk232sCPCkZosYQ8GcSevsF5ar7mGR3Wu",
  "key29": "5B3oySAPA1TpdSiihPTYKzvAKBMEPX9uQH7TE75C1rhZkiQ4a1yyyqmjmWVC3v2Zr7jPUgdCxjT3zytXp21FN3aT",
  "key30": "368w1P55hxtEyHYSPnZh7mvoTWogm7Aan4GZTC1m6785gMpzP98TBypoCePhFRJrHdnsgCvf76QdkZktaSv67zsj",
  "key31": "33c4Vurojp9Xkm5PXuxy3jgGWpYNRNzmFDZTiynGgCAhbg5n5zJQb2A772ChU6emj5fUtLNTtbyYekhDvZLmJzW7"
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
