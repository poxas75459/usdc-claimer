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
    "3kD1CsoFpjtaad7KXEBdVjjc1dDM3thiwZUF293Ciq8PWqwgvB6Nx6AqWY8ckkHff4jL6P2vcND954HadvTBMRoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xjde3XZnoCTkAVdP12jx8uSTPJheTnaoRQjP6yYmCqqvZL6WGRUvtFaSyeXmBUrhs72h352N1MufcKQjts7QSbo",
  "key1": "VeoytzSuZmBxh2EfyLpq44V9uAvgYeeyPx94hYPXg2iD3538ENWUkkBRXA6d3C8gyKwt93M8f8wAPXkjzFKNFoM",
  "key2": "4HHCtP12TZ5oZ3hDV8X2opqHN5jxbHTRNurhCH9Sv6yhd2n2BW7k7b6r6UBpg4YMyBgzb3Auv9JHgV8gnU7cfQPN",
  "key3": "4mp7a4V8omEzwT1RMVfahJTDKEg79tqxGwcxUbZWbGmKDMSFfk2MLtLx9hdH6A4Tvd7gWLoD5ZBakyxB2bF5TqhD",
  "key4": "ntkksb6Fse5fRXbVKazoxv56KYYAwutqntdrQgH544AVCs4BGoTWg39PNPrQeVk9k3Nw4CdtMPM7cDqeRxiUvmm",
  "key5": "2d9hxHrV6LGEwnoVyG7MbNku8a8emFo3ardLEMGpLdFcV9ViqExBEWe5HvZqiRDZ2wik9Dh3jqDihqzws6z7najK",
  "key6": "cgb6ySwy3pnWSZhxh22iWtCmT98yv87QJEmJD9kWYWonQ3q9eLksZj4hGDJdMaWxXV2MhqMCZ3CrgVQuPXNUBCn",
  "key7": "37wNHWXQ3Dq5ATgXnQuZvBUbQ9sT9GgGSgPsKWTffezJcdUdarSXXwmsdehgYYfrDhsUAEvtWpK9BgSyqXDCPAb8",
  "key8": "3tCoVdkzefDBJj4QwZP4U35qMxCUCNDTi1MyrwvSV269TWPYRsTbELFc2ku8XomcwaaumLfKbWKn96Pa9UVXpGu7",
  "key9": "Tu9GfDpsrjmKdqMgi5rHEHnXXBfvzxMFUjavxY8PfXo3Pzn8Fg13z8waj1hrPT8PT5uhJHEZdmQJCYbxKsNSFed",
  "key10": "3ZXNWkCgUVkCn6ZNp8xCcKCTE6JeQCkTJA9xeSa1rmvH2PbyLoNJj8QBxZb6ffyzSQms7kPFNYQS7XfnXU5iPZva",
  "key11": "5C2Qju3oatUnvEMqbXcYPYfrtpGt9EYdbiMMBPCuULJLpxcbu2oGqjFGYrz6t4gdbsHCgouiMUUffAfNkoyYPrUJ",
  "key12": "4885fim1eSM6bSmdPc33fUCXS722fdyJGE5Y6An5bsV5apfvN6MAuH7RyQjkvKKjVtGVc3NSWyETqdJGE8WszKiD",
  "key13": "5ptaMWPd4FTSDVAAX5a9eQYJuD1xx1d7cr9P3YDXNBzTDp2vDveag5qxws2zpzEiYdNY1jpghhboEBzP7c2ufJqp",
  "key14": "4FHaix6mmLCPK34jtW7HDgSyMwDjt4mTowr4hLJsiFjYw6AeVtogQaefZTJzAa7wGhHHYFBjLTRfeCahEGEjsFyy",
  "key15": "41YxjXbUYFbr67DrD7oJNtUspEVu7hZswxRqR7uN6vzftvgHCR9k7mmDreWvyqWWMS9V5NP6NJBdNvvsGHjA1RKb",
  "key16": "veAGuGyhZ8NqWjsapKTiky1eqY63k2y1XCTv2B8z5UQ7oGiE3EUwS7ddxne7uzmuDz7fyUbK7hqv6uqE2275iGD",
  "key17": "n3194XR9MbR9XPkrpT32Dhi7cGeRfn5qfdoVVqQyhduaZhqdyzMzTGhroKqEqDMYhmYqZh6BbovVZXyEai3AWe1",
  "key18": "4jPtDPav5Bhr8iTMWkAKoGNF4z4zjdYue4mYAEpwKSS8UsALpR5ojvffNH7NMoBBziC6qzrzF66byp4yBDRr53da",
  "key19": "cJb5PoY8cBpMTHuV2GQGd3W5ovTQgHVz93gwwfmHTtZisM8YYM4qoVcdek1GnLZQRFvbtt9qLEASE5k4es31uew",
  "key20": "4gtyjsJPrKus7Khm5KxvBcmcEy414KMdAGMon3k7hJm6EPDBL3gADvpfB82Zq95NGUtGM1p9NUFe3nkAnS5KgKg6",
  "key21": "Vmw5Nk5hjPdRG1V3QVqdsh9WmpDkXMpzv6nEVuTvhPAwF3U3P9RHCmBta1x87PLwb5uG8Bhvv9BzAgxQNAxpGbA",
  "key22": "4g2bHm3GSJQiP9RuMthpFxUH9hXC46AREqpPdbqb9VuK49V7JqBwYmdAz42WLjkJoxGM8659NLbPGvnocLGkNEtn",
  "key23": "iSG5JXn8C85c7RZgVUF2zm9ic5DgjvrqnpLCejKVcna7mEttopFPPTyrauWNWufnrMh4rmagKXtKNjVcFgmadgC",
  "key24": "4k9z76Cs4DRjZym1FqVSTyYPVncHVEjfkH9h5CVYaUx9AZ4qRZ61uYEvNMwpLi5diK9Yqq3QCQsH8npQQwTByE3Z",
  "key25": "2tBBVJEScTRYwmq6yM5A31zWdMQieFHYTXaDYSoXuVQfSkp4hhu2rCggMakjbjemMUw29Q8VP6jp7dTtHrUPasu4",
  "key26": "34gEzygWL1kxNbh5xfh6aJGyb3DEPU65ZaDNoaMNkfEtVkTcRFe2Erf3J495QEvmkFj1MssfQr9yr17Vdfsustc9",
  "key27": "3no5i4MLDPYnXEody7urLd3hzWnRRKw68CPkq9PQyRgGP5nEXWP9JF3a3LxNrC2jbWk9khrAUGjuRoozDu4zihNF",
  "key28": "DrZ3B9nyLqe3YvXMqq58A1wAGN5d1vmZLvu7Le3KZwqdnzDnMXvf7T3PrF5NbJ5nNh3KgLbcfHLKJvPTNw4EnmP",
  "key29": "238fvYfRtHN26S4GQCRJeJSd1o6JDtLTJEpYjjmSAgb82jmhZp1Rqv7JuoGYdGMvJ4NhL3xqHeBNtQXTuZVvtGLm",
  "key30": "NqtajAfpxoan6kVgTfspC8n9A77EkUN3ymCNMiMU31TzBQ8mfPjvHnAfqDdq8mc33itdjwWGMn1HUo7mDqnXBL9",
  "key31": "FGeEUQuYxRZNPQkVf3pexwxnbNaLYT1kwwRyFmRGeLysLKWNGSqS4A2PUj3UpqAMNXEpx1f2xxZuLGwVHMsCnus",
  "key32": "3AP168NWB4DDeKt7ZcBYpHXu5Tcc6ZRYZmfZu2iGSRBCUEXeQwvuYETpFcJRM6iJBRYtNSpkbAQWJKBUWyAXQA1J",
  "key33": "46MLHp1VgWQnuqoPd2h8pjbisEcRMNrTzrwcbqrqarecRhTFxBt8Cq2z9CERq6rBpdVSoy4zDoAGWCzDLuQ2LtUk",
  "key34": "35VRjDsEVTGjJ92fT9wJNVurcV52gcA7DaGbGUboCWK1TcpSEYxjfjBLSWybK4ZZYct1AtXCEa6L1c5NXZs94Fj9",
  "key35": "2roWax52NBLi2b8JWKTYHg63cENfHDJNwZ6aKiuxQ5W9cd5bPRkep4poq5C93d5om9wYJe4HvLfUAF4BVQ1pwkpH",
  "key36": "3WfAgjxhJ2YnqWpbmG7Jk7TUHbVYJFNQaCRDDiB7MT6jXBKnRcbW5U24nCjH3NWPe6uk42EYH8G64L4X9k4iENVT",
  "key37": "2fDafdRDSCq4YQx3qBFF7TkPtXR52JEFWvc3Gt4mCRMKZG3bBZnSLjXimguR3WFBrJdnzpG8Gq4ZNb63ZKiczeVW",
  "key38": "4y6Hb7R2PnPqcwdqD9geMjQx2CwpADMLJFLyZnj8ChNeGnccZW3R1y4A3qRvi4B4PSvgE9p1Cg2T8nEoKXycEENo",
  "key39": "qr6JYcsS9UgRnYWLjoDo4vdvupyrLUTHCd44N5mRoPfx1Cuma7rTjaHemQ9rLbUP1qpKJn7mfyqhUGLtjnnXSpe",
  "key40": "3zd4R2YTjP1idncW5JBHihJhNgNGkv4f9avZKaXZBJ3BrWeFko29iX8zLDsFTeKmqCo8VUHAYoXr8ScT9J667Eyp",
  "key41": "7v7aDbJFL3svoTyyStSUJLJhWN72kgfAhKrGz7bn72k8aQE43CgENi6m43XC7Lih2ouQHmbMULtCDpuhwPszWV9",
  "key42": "2qXX9JTqr4RjMSSqweQoFoCL22cx9EaHhp9jtApDXGhnvusQSh9b9oXokrsVXJyzFSY1VxS3nNcUC27HWbvn7sFC"
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
