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
    "2As5LtyP7xvS3dXuzhyreLxReAQMTWs4uLmHSpyuBGWijqzn1WqBiQXkRKCgWWrZACmKFLeEcf2Ue8jDh1YB7rHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwZ19SVKQGLNyWijh1WDXDvCcuGNsuPZfnn6zKs9k5j5wVf8N9REQ51ixnUW4mmHormSSR29d9PRryncPWFuzLs",
  "key1": "4Qp2nA8jmugwgzw23aVmrJC3uxmYKpVVPaLKyq2e25LtoqbooqRw4F9BPZfdtY5D6ASH26VvFMJeJBNAKwVg1oy8",
  "key2": "nq78M1mwjNcaX92d6JPa9YwnNqAWB7EpVNJEq1Nof9221Yp642nBVMiNiwUQyiXRLkdgK5ifWnXsNDjSP3PfrNf",
  "key3": "21VgQgXoxdYwY9JTt7V7BSqij11fqkxByNKbVbBvgbG8bXK8JZUvo89s36DSNKxp2RGg3CEswLkeVsh39i1rfAN6",
  "key4": "4Tg2KDBQmGZmTofyXikdP9xw8cdksWqwA8iahRjpTeUaHo3M4xiBBttzmJ4gPPagirGDEoRHLQF5uKth94dvUz43",
  "key5": "3PByTHiXpWSBSHaTvVXF2KdQZgGeqjMj92EE6m3aQKLR9EgfMdS56rKYh9ZSyUUF1kSYJeoTLa14odHaJLk8EhKE",
  "key6": "EVL4WHzfsXbCkrFzkW91Tj9sV8GmUKTYR41HaqajugisokMEfkksSpL4pKCk6Xkvod2h8T5xZY2zYQTUx2AMxQm",
  "key7": "3LEP9LdyGHyf9ytx6fnSytBLzAW7TnAxd394hzzVo9qr5fqg8oVB3YVP9pD11URPNbzmL6sBJ5Z5tgiwrLAvxtEm",
  "key8": "2J6h2e4oiovGCbNQFQyR9N1fWSxBG4VHEPBz1FjSdYhapYar1ZAEjDF5Vg3NAVENei2gmvHRy9FCBU7SgsVU1Mis",
  "key9": "iWcbtXTCEGTDpWEimCsVAHu2E9m5Ks6CqKpXPLi5zfTP1rjuW3JFq1E7wSXv1nXRXeyooCsMB9bznromQYiFvLw",
  "key10": "5x2KcDcR2haGAE9GUhswC1pd6YAbTLigXWShk3cxyu5HJYuAod2LFJRYzUssayfZBaLFcxxKisUCpeAexeV1reFD",
  "key11": "3heEhph7F9QtnzoUkjAXYPuWGwtDFutUWohCRS1W7HLKeo2E4Sq9CNnhyhawFsRo53GfbpJ8BLeuuzjtzicTPrsw",
  "key12": "51SHNbtzp56iXSpEir3qGuXAJeTnjD7HhthcAqnd3r3zNuVt9GcXsygNn4XLm1PiRn8jsuLMPpmhomRi1cqaz8Mn",
  "key13": "5RBGp9kM9SgSo8UL7HbYUK11bQztF6Nux9LpurG7rPdqtdgbEwHsmTDXT3MtPqWyS25Sr5G2Vtm9EFxo6LDrbrqS",
  "key14": "2ceWinh8CymaRFzKibsdU82ha1f52e2iC3aGQrHLGCndC5Rbvo8bXhRmXxVB2e8g4wzTn9ktXopQg49ZKmV3hQZJ",
  "key15": "5fKWZ6tMoG6bNjcRqdS4ktFZcbu3AEwaAEaiRW85TGL3ZYEBLvbSL9dsj9DoMusv8eLqszquQKyCDq9udHp6HBnY",
  "key16": "2PxbJkF8df8Q8fFCGo4tFv36xRjL7W29WG24tqL2c5E1VptSDSWWDNkS25wnsV8WwVTrnHvR8qMagewoVMRigS8e",
  "key17": "x2vv66UB7AHm9YVG1CfLq55rHQCafMq7x1Xh24S9bZW75FjZ51tzTE297EXJkcos5RqSo9mSqUP6cgz9Ea53kEn",
  "key18": "5M2P28KcTvzhXUz6SwdUagrcrpPungttwuUVSJRF2x3VSw4ENLbwBB4A5NyYQFyxUCaNvapqJncpfEiCuU8whPkC",
  "key19": "2JBgVPCoxYHzS4CufsJeN6RrsNNrX4eYFeV3HpU1fto51w1rFYZYBxnUVdSdVPSPWcynvpoiwsGPA1Kh65CSBa2x",
  "key20": "4BTqcmAGRXpyEbYHxu2PysbzJTajFVvTwpLUfv92vUHi3Q4t6t3SMoEPSxKZpB5DWSDYcAzWen1nTjz2LJjnsdpW",
  "key21": "4QXbksgTBgCDY6XwhRAMpnHsizq5eiCqFB8zpJmbtjoiWcnnZ7PpgM8V2HgUXKQPxm7DVtbWBZzGDrsD11ER6UhD",
  "key22": "211SrTyczY2NsCMfrKXYuqD2GehBJdApes9kMTLHGVwyF6e8QhVK1FQcDPBXAr4bjZc6vYsfXzgFAHMCDWnMtYng",
  "key23": "oUoNsmyJN4r5TbnSDqiR348MRixG2kTvZPgzC4mcYhLQcpPsxj5ttQqvLt2qWgj3L7qPhwDLBquCYWtSx1FNMPL",
  "key24": "4izTjRozUbegu7tdLoGE4hqPZaeM4x7etHFd2NMMSQLDEphM2PZS2pj5zXCufXvU4jbh7eVX2JnuDw4RVHm7Ve31",
  "key25": "ohue835UfkrnoZBJcJfvjjDomPQyYSJ7B8vQpNFkgUdqxTB9CYNSj5R5Nvzqn5uTr8JcHjJTBU4DfdZdUVQTegK",
  "key26": "3M6j6kE2y7biQps74ZKXVXGVZdNnGidg87YzTm8L1DE7ifTzEHrjnKcxhfUhzaSJ8FwJdAVTeyiPRuNSPGs3nPn5",
  "key27": "577EXXBdvfLXc4b7txv5opB1U4XqhjM4a6bUgtibHuks87mfigxYTawrwhH6TNG9wrVRFWqVT2SacQ97UpeWhSsq",
  "key28": "5hnd5YPzjLAtRrNuZHRC4mkC2tnANwLXQtmvK1J1rBNgJGeiAV7SxhChyiFBjuWDCn6tYB1chCTMDd9jagT97PUx",
  "key29": "5WxNZYt38AAcuc21PhhrFR3uThzjfPndgBq5xDdXzXiv34eifiQRcQqPD6DU16cMM68aQfhiQQn688MDqmL8CrR",
  "key30": "3mEqSR1z3TcoCGA1o5a5ujFkbfDucfyRf5QUudr84EX4AUwvVaYs4xqKWyuSBS9Q2HbTpB3e31VLQjUffxRqC1Te",
  "key31": "3PPC5QsA5fS5AkNXffpnKukKYxqe55ZgArq1B7ZBFG81whSdya3tGVHfngCUnfTtVzTvG5cJ5QUDr8y5vHoz8UPk",
  "key32": "29M2RHasTRbVU8XQjsVMwhKNMSwbzWzQE4pNxBBFMwt256ba3gFZuwNHBd4n1TtF8ngn2mJToB3QvEmSCpV6vFcH",
  "key33": "3wi9Lp9t8c8b9y4d4XJMv9t4PtH3AmqinzgJtPmvtJkVxF3vUTRsr1tn5x4D5fRTwF6vW1m7Aj1PBWEdAESGrdJQ",
  "key34": "24xAeAPD4obuXxhvRtPsBwEcyXhWTYeNmU61c1LRtUNwbk8Gb2a99r66hu9wdz6GHBg14g17FjSNakFNq6Muwz6e",
  "key35": "9D15NZmsmFDezxFBGESLazgktu8dpygGxbRNfFCWAEmXuoRxN1pNNNXRi153uCVLAPpf1G2HmES78PzrdfnVZGg",
  "key36": "3GLVK1xPSxCBccuJcaP68bw1xXL2cwLWGcKogTGPp3hTE5d9ubJQoAqj9scV9Tu7bVAWrjRzuVicsUUWvpRF9Jcy",
  "key37": "r1gamXLLKDXyjfFiSvXUKF3hgdW6dpppcEWbQz3Q1A7vQTL3DHq5iaQfyDSCcAZysVecjZGe4ryV3XRcjUhNWmK",
  "key38": "4mG9PUyMr6p52ELfGBqKTKTBo4Q8UpNEbnkDrQfqQx5qGxhK9LsK52sF6mMvMfBCc4wS1VMeBixDDea62hvtx8mR",
  "key39": "3WFGE68jvQBbWge2zgGxYZenUsunCNa65QqEuN5PagQanyZYMkFqHMtMtG3WbsGzCBywwA6JHGR9GHzxsbHDpH9b",
  "key40": "2barGPXowApaRXHThdKKRG6EKtgYZDVTNpgvvGnrzxvRJPVCf2AjGZA5h78jGVBemVQpn1nn14L8aSiw8kHzSzZp",
  "key41": "5HHNyTTsrjznwJUFekspcE2MqjyfFHzMXVVEnPvh7LxTZeJUpK9DcdEPdPX6Pc8q3pgZPdwNwW1EDYLUbruYsbhn",
  "key42": "25e8UweMg2Z5DFpobsTtnKASq63g2LphSCmUto7fTa7VASf84wioSnsJJL3swSpxd4X6KeY9gHhefDYvgxUiu9jh",
  "key43": "4KzwsNd1uFEwBuh1RJDki42YytFHchRYHFHRYvVGkRYsHvg5WZGuUzTTLkrR98MDowzvp1URuQ3JL165Hj8upKxG",
  "key44": "5Yo8WtBYbPvyWcW6GCXCcvseveSaBWcxMdH7pvYbaanba2KXmXoTLohzPmPLJznH71WGHhgi2Frjee6t8Q2FEcFR",
  "key45": "5Zzq71FsaB2qGkP96RFAUtHKpyRb9zQvPbjNiHbY9b8r3Q47uF6nZwRgWkf75zBN9baY6H85XFFUVn7JKx8Uwn1T"
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
