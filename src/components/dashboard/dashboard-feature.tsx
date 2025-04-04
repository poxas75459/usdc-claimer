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
    "2Y42h8q3jMEu5T4Deur5XBWFUTCQQoGe7MuVPDAvH8d5BxqRXbDvgv7Eb7LeHNJCSJnoUtr8VNZjqEyKaqdyzi5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5s1dheRQNTwdQidsiWGHQDftmLnDD8cu8AegrBkLk7htgjCTmPQZF1zakysexeM4JXE3Lx6TJdgohSZ8QVWZjX",
  "key1": "5YAkdHxLrKW1w19b6PeCRDsmi3F96aXipFG5JvGABGaPGK3MQEmU6uw89urmWTdeZV1Fq6dbdLxC4ntFYphE7bme",
  "key2": "zWZX6MdSwwbC7PVYBtRXHk5nfTtydqMTB298LAqXuBZyy3Ji9D5pEXpnMHyihcJbz42tM1hduGKBz7haeUYxw9f",
  "key3": "5us2oHYdryrtNQqLyBQK66hdGoM2N6cvrKhcK9H9CejWkqJ1ov3dYSevGaVkDKUkfvfMu6Vc7h7D31iTdMQGjMCe",
  "key4": "2ugJmCXNX987TEXkdBQ86joWqZUHeeTLDLPbjPTpw29ERBFuALfbjSpASMHUV2GzR7h8CNzd3A9tQ5nPTcHrL4A",
  "key5": "Cxq9JocqrMpLP6r8ECnr6vkduvfsmd79rhJhHrHPXqWT7SZUEAEK8C8eNSQEpVDDJLf7MywucUD2vt5kkes94fa",
  "key6": "4rJsUCuSJH7R9MA5iTmAzypMtmxx9ANDXbsAUpo2nGWvo3rFWVjdHTzBTm1nMbhHEKQevaFAV8ffHYQ9RsriUDxR",
  "key7": "36FiPgwDsiQU4nu8s5S5ZHrt9N5xHzf8ZMzr65cJHqk53iKCH2mJhcLDZsJJQAqgtRwr975bN5J9Du5hyQTDzrbp",
  "key8": "znf4jifRiLJB5WpR2reNM4QpNFqCnoGSwbkb6r7tUCet8sgDtUFk4uTLrQ8eZhFRec2aVdmzNekQgxCuJES9zCg",
  "key9": "2XQent55ZjFt4mfbD4eNJztEeovtLJL4S3z1SRg6PfkZqizPsPfcLUBbGLUJYb1Ru61rqn5XE58hsZe2dVi2nMto",
  "key10": "3Bxyej6QCEPbhighrKucuCp7DxpaC9L9M8ZhnENg73AUwxUwNQ6CQbaSXkYczVjcZs3LfwiXyRRAbQ5i8be4jJ5W",
  "key11": "2wg7YvgZSX96WhfDAJi9UndfSCL6XYZWnCwtvvvr5Wa3f2mYCiTasHMNUhCjffYsmceroscXJyyZpC8fPLxkHQsQ",
  "key12": "2X1o2u6tmQ7sraZ17b5NR5suhgGsMCZpyit8Keimk9MSvMbiCgtj5FWwdc5TPMzPK7WHjeWJUTCeXdxgnVbtXp6K",
  "key13": "LSAkz9sgjUN5Ce6YCjmvL4MKpif17x4gbqsya5KysMTbN8qEj2dN45hUyVwTDHbvJArT4wq7xAWjqQxMJ9rmAzZ",
  "key14": "5HwTWKo3MD59NrosXe7q1f4cezwy8iMtwWMzCU8icuZiKcogGxXrYhLhYatvbgvu5SuJj6SF9cKfN1BwhkS7C8iG",
  "key15": "674W435LDapPM41t6Zztq9vp9Mq9DxZw6yF6kitK7B7cqQWLVX2MPf3D5vMctF3hSuKnaLh2z2Pf5eWi2k48MhrY",
  "key16": "2Z9bunXMNUutpCb9vSMm3M6XyNqSDPm24dtrJkorMfhVkKN1nR8odp6s98354Yez8b3AsCpAb4EXpQLvX8Xtarbo",
  "key17": "r5BFW8BxaiJwS7CKnCaeikffqNt1H53akd8vdCW7ZNmKT7AAcFFuKwneubdW3Bcr7cFtRuAZm5krPts5YuPbk9W",
  "key18": "3s7nFHb45S3ukyRVE5jDm7YPZP5PCLUaGhBRrezp84S24uUX5Vb3wmBA3TgRHnc8eHAbvAoQb2ZF4QCGuSBeE1bL",
  "key19": "PEHRtCeuYJsxACFgiV2qKXZJnRBCDTQzSP33kCDGz8QB2rFx8ZaV2x8EnYf264eetCyhJsXfqfCUwXc8fEMPpCw",
  "key20": "2qSmuUA7Fqtv9etWaKxgUvLXeX1EeEXMSWQtty6oJmhT1yBmJtdzeiwzkL2wsCqg3FBsJcaH1ZZscQGhnhL9Dna3",
  "key21": "3Mt28oS1AnNzoiduoXufLhRZ2RHcBpXDgLdFmMRsGekrepT9uopnWpJwZXz7pNrM3yTpuhrnaGJsA9Us7DyMn4oG",
  "key22": "5jD5BQLNWLKoFnrUbGzDrJvZ7pLpmYV45QxKLe5RaMBJzADgGcT7Gfhx9p6QtWmyqzSXm8ondQG5cG9AwhedYtky",
  "key23": "66VEHAsYWRZT8eTB9f5oXmLqhnRVpMHuk6VuPna5RNwBG5i9hBjhzT2CQ2GKTko7t6UjxytyewyD2bzFZQTaH7WV",
  "key24": "3pB8R3te3vbN7ABDa2ZKFp49aYBELyGgYGydG7mSY1AFewuYbKNswnmziW2foQeVQMrBudFisih1LgPtQqmLv4rn",
  "key25": "oqY1Whu1FRgh4W77rcBAezf3dwgSNGmiLxjWrK8J3myuoNYZ93FwRRCphD5dmTRAbmWRChBNuzoQ2ZETdVDkuD7",
  "key26": "3S2GuWu8AfuxrcPmUgfpBa4LSeTZ5MUcXAiejYnMn9sQhf7tgf4ZrAdiFYLsqiChpxhwcQQSAvT4yjtuQZxLHDBn",
  "key27": "2cxEGXTEiyVLF6qvqnF1hBWj5k7iuR4Ncg8foJYkAqyZSk4LSLHhW5eMs5zAwuVJKiSqB4RNf4FPXKpeRjnMw2Va",
  "key28": "4MQfg126je2485tVjVRdPF2JYKqL8gvJcRyswWP1xk4Ho22cRgtjkQkyEFabUpnWVdYLooneVCrQPzqUFKBXC4ht",
  "key29": "w5bWSkdBowTy6q2TKzVkZz64GDBU1PgXMHeS6WnMkXk62C7CGA6i4izDuqtLxqVp6UQdab7QWMByBiAkbztJnsY",
  "key30": "2BQnNobBTCWoQZg3Lge116cpizwurQsJecgXmYf65ZkduFSmYEYvgpqnoPtVZ6AZKMFBcYKG6ehNjrjQzv3UebBY",
  "key31": "5eCCW4mftUSWkhaqcA1cRvVL7nrfW2Y1xizYg1FUMC14hixg8dLtSURF6AwFjUk9SvAggnarvPRD6wNNo2jXdVzo",
  "key32": "wEVa584mNMxtEGkWiEjE7M83WWBXWtfdXiuTT8Fb8Vrp15DKah8hSRSxMjpMJuuUoPhMxg67SHUMY43SP9hXFrx",
  "key33": "5aR7XYzQJKVjBtzG1yJBcL8dM4R5CV3u1gTveZeYoZJ1m9YjcFJZStBMpZP1E4i5u5FMRVE29XeqodguKywurn9z",
  "key34": "2rtxZfY7SpziKh52YvPLXs5CxcUvnfHq69frmoqPBNMPaT2U4oGdyxCaK8yZZNj7ux3fZJhksw6b7hpQm17r8kaZ",
  "key35": "4wnsccw34k3FbyLT48iogqF5UDCJ9WrBuEPFkoaLKVApUU6DrgdtXgSTwz8pzczCRdbsL2sF3q2KEGFk5QdD5vFM",
  "key36": "2DGth3AbPDeWHUoM2mjvrYMtL1QULVxSxUNdhy68mbCNAhPaKyPkSkWycyUcwk6KCt9k7KQvp6842P8Snf9sgjZD",
  "key37": "38Dz6ohm7ZJ81FemcnL4Yhf3GmC9TgsZoHpGtxPcdWHSqPLwzsoyUTBp91E8yXuJ3crSpLXiokAfhtT4ejBqcaPN"
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
