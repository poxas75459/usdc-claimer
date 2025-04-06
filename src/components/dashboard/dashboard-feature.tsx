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
    "43VmDdurHtAKWAkL2j9B7gBnEHyjsFoaQEoEewcgChfqJCNn3xxEVpvgRugPhkutHKcsfz7bsszWmYLv3s1sWG5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hb5pitj4RWrLiJRzjwE1747vzrhnQjT5Theet32KVnbe2qzBU4b2VpZca6RFxFyRNkbcUQcq1FwKLmdUfhW4zzs",
  "key1": "43LJPgZBAV5KhKMjt29yyhfYDrrf8vzgB9A8vAPay7TXDZwRy9tm95eziGefZaXGiWQ4QFfbFxZST9ggb8H1r1BK",
  "key2": "4g4TneN6P8jNjujWDVsMpggLCUud8Tc1H7N8r6fM9cr9KyCeKposMJWRZaTiQgMK9nFN3SHs7UCjfvNwWKmNZG9M",
  "key3": "dNSjnxx6Fxu9VMmN11CzD9TwXRhdorYD7T8AXN1Cggsgkt8eFhRDCUA9YvvrGzJvgWCgCNMWmVZh1w7Vk4udrrb",
  "key4": "4aTH42RYQDhrbY4v9oBNaDuBxbUrjPKDQfM8eXz9dx5DFAi4FfQAurByaxJeQx7so4n9N5UstD5eWzDGY7bJYyBD",
  "key5": "3Bv5FsbgpoZoThoHr63fK8pfsUu2ysTjk1nU2WMXQfVGsFzPN3Je2w6c9eATJgjRPcZQecx2kcKP3ppbCNt3vvAa",
  "key6": "53x2vR2p4vyDa9LgHo1WwFPCcFvkEoSedfVpjjKwKtciYV1UQx5WEAHoLmvGwkwBqdZtTj9ZFdufW2jii2soSxW6",
  "key7": "3Y9mh9xoDgnB4SE3Z7f1FckJLEKGS1TbsR9a51jb7dw6qDnM1b137P7bDcLJLzLpWCHVDjXsuMYaSCCMgWz8s8Mv",
  "key8": "6357ha1Dik4uKsQ7W7efTVQPb2amQjdx5WPm97EoQJZEPmpkXzt5mf9HGVZPPYko3LvqcrM45RyGRJHvAWUkxMkz",
  "key9": "2WAmnzY6c4i9bY43FjMUJgHKxsGRkd9Zbzdwj13ojmwz91V2bKWPcc9paHJCYLxCPfXY5ysU2E7Ad9ssY1obfeUX",
  "key10": "CJ85PsGcH7CXvxiLyN8gFu9x4oNzoXciHmNrz3wZAqAsNBNoRoeeF6XnX8pwod1hasGzvGeLNVz4BKtmvjKb1MR",
  "key11": "53V55B6XshEmr71kFGdokKsWUkwt4m4UTR847AVGN5DKTEPPdLtmxjm24eno5QfXSBrxcn4LtVxfnUS5RNFbCXe",
  "key12": "MbJybht7PjtovQnruuaSP5HD5jQfZsnSn7ouvXfPvz9QULi2jWk2AR9i7pzRuf56NTSw2jzUN5itNbZ2xpSVnx3",
  "key13": "4uz4JS2fSwkQtoH3Pkid4ho8MT1MbP3UWc1qKEbLPhrfqp3RJ4nwnUBo339Pine3WgqgCmFdNKRAEz41p3fWeh79",
  "key14": "5Tii8X7PYjfGf3Dun6ZKEEx8XasguLKeQRzGeDAkMKw9Pa8HSK69TXkFLxhr2gtVKmFw1YZrpkjzGZzvUvkrUbW3",
  "key15": "4iyBED3Re75kpKRVAm768rpHSjvotStBBPK2mkUZxGXjZfk9apfjXXjCjy1CwoMJCSSu4SyHjZXDe6B4DXH68ob9",
  "key16": "5DTFJyhGqarmB6hGii3pBE1tiWRi9r1xQUNVQcw4ZiQUtaRwgGLzrPXyHUPsQP5jqv912tyznuZMATaPnR73xSbv",
  "key17": "3PfdAKgWMWviS3H1smSXSpG9ZWvmd2dnsVRCXbDqjeNbe3Ab1kK2LwyxyVAxxvQgmcFSYXEFhi2JKZRwuxKKd55v",
  "key18": "5Ge2VRWaVJf8Gnk1aL5yu68uphAELzk7QUtzAZBMBwLshyQoGGh2QsxHEM4N3FvpMsgPjVHT4Fm4AifXG5cVBUv",
  "key19": "5MzEhXEnfNVy1Jqj5JQ6YgB1Cq8eZjuqPLTt795DSM7dTqzpTF9a9Ty1VPWDoeHUEEtfi6haw4siGCbLmL3WKS7K",
  "key20": "SNqYFzmTWiLUaEqXe9Qo4eY9vPa4vvDo9RXEvq4u4FmosztNeiS2e1m3xfgGmy4tFGVaYu5TKJtgDUBGsYKi2yb",
  "key21": "3NTwLE8BFWmdyQueYg2Go3PoyWWUmJWgDwEd84Wapn294eWVNmPToMMkJxcBcg2esJwJVmQnvWDL3UfbTXr6zLk4",
  "key22": "2qCWxH1QTumhQcV3GLtTYuYVhaBD3cZ8fpSYa4WH6CE7CvrKPuv1HLa8N9rVdFEQ45SL3sucANDQuBRmsEVwoHNE",
  "key23": "42TFkHCGF2CkEGjUwjmTgYafjzfeFqz7gcueihJDHyb3SrrBUifVbKziAo1MKhZLcqQefuMwQpxgz6ZoFzD86cvu",
  "key24": "28LT1GrEGZc9hzx9ZUdCboUnsKAQ5Uv4sLHfUdjbsD7Fj4GYLLJTucr1qSnzcN73HNtDdskz7JS4AYFWxdMgn6ZD",
  "key25": "5YzdeRCLDs6uRvJJtS5wjPjYHSjkkrhxHF3EMLNSfpgTTvGH5Lzj3zvGcWHQYAtMmv7RXzDxG5Sj5HVib2cS2cc1",
  "key26": "5raJ8yJHBLh8xJu4H9mGQJN2CCNedGrU8wFzDiEz1tN4XRDjm1cqvkwUEL7KqBT5nZoYUbVXy1PVKjYxvcxPro33",
  "key27": "GgeAR9DTHXKXe72Uo7gJRBBtrgdDa54Lwx3tqKiFqv486roKzpH5PygoPSXz1SsS6haZefBfT1EmtwBzuHkX5Mg",
  "key28": "5v4kSyPyCTC96nczrPT99kc6JuZzC6k3PfhGR579VjeM7mmhjNDAWE6WRjC1KUTZdXRLGpR7b1Edv34UkF4gmAmt",
  "key29": "3nrG5qBM1A4KoHAFDYt21HJ1YZ238JpDWPZVzVWruRQL2gbD9qxyzTQtFZqR28F8ZiqiLJhFeDCzAyTEF1718LAw",
  "key30": "5V8a1MMqaFiwLz7ggcgYfSRaaY9vtQmxETSAABck3x7Wq4ek2AX6yGaC5WxnpUjzJWFaag949RehAXp1qBsDpmJ9",
  "key31": "Mpj4cX96Y8fibrFbyLw7Ko3HewUak6YWXj1pLas6RTojFPxrw2Wg5KveQsBXQ6hfFeziM7eZ6NZmrDy6LwQVQ1H",
  "key32": "5TCzW8kwHuHHwcjndFJsiHMkRyuKnkfNENziySWdtWHChQySLiE2Ejd3XppB6uphE9AKysd9KHuTgdfoSPxYKAxd",
  "key33": "U4cD81wKKpeLa2vqoAgq2t1NYLRA8TqUto4YB3Mx5kZ68zUapKdRXcEHXthv8mGAEXaBgeSATcF8BTF6BaEdxi3",
  "key34": "61sqfxjP5h3dGsfHX2DTDwVGLY1fsq382x29NZnDh2i97abnfa2QVpF7CqgFZtEcac5mtp9prAzLsTxcr8RxVAgq"
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
