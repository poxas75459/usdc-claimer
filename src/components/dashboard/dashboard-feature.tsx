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
    "2aVii3JjhJYp7hw4mPC57HdEDULv57mJWeyBmuo2hBKCP1qbBxa1exW682Cwbo3eziLf34psCLG7Ekmhoqfm7LNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bChnNdifTS6DVWm7FqWqSWu1RmmgmaxzojMLwiSteqbp617J47ZW5zgmj5nC1RkJd1YfusjaBdp59kzmr9RQNP2",
  "key1": "5DTPs7R2LdFfioCSdVjtvcxBc1N2mp1F9ZCtKPa6T1KnfXjZTHXaa51Ks7zYb2MGN3Hjy1WiZFr75mfwjogpqHrU",
  "key2": "u3YyMES3iuGqg72EuDLvZc6Y46hrP8xTqV5KehgruAMQHX8H46j87JzfNNDfBUqGqw5z6C2pQQ5UdCvB9FGwDtU",
  "key3": "3NWhMfvy6EjV87AL3kqtLZYRNbcpuq4rmkKtW9HRbHM56UbXpEiFHRfhyc7X5DxdAPLib3ngYxpddtHLgsqC48Cy",
  "key4": "5LfGS57VSfmuFq54eK7PgH6ZpgQ59QFBp2SqBJd9FeT2wQ7Fn8v69CL9okv4k7eBdRFK1o7zeZKR2bSQeecnKaF8",
  "key5": "BSB4ficoScvCZKAtPwBJUtXX5N59xhBRemXNMzyTWcXosYDVxu1A7LbngNvcXGBdNk9CvA3YQ8Z1qQXmATexeTt",
  "key6": "5VakEdVrpRjTtAdxqkpmWWCgFFHrGuvHAui5iYABKrsKUnDLgQ33EqdY3cMSaNFk1hCD7ATKSf1GdGjGisUJmKpZ",
  "key7": "3FK46kyV78yjkuYP6ZpoDp93WFFU8A2cvW9KMwxazVa8RdSCYLL7Az8JyCWGfAdWujypgFzVhZBbgfEULWnLatXG",
  "key8": "2XZbFGCoEKfNcNYhfhU6TeHjsp33bCsjsdqKBdKMf5cubPM7MC4nHiqjDSTUW6jM2bqs6ysyF7qnXL2KxJ978zQo",
  "key9": "5vx7wvichRxyeoHVCN4MJzZRwEtdsSjodYEeUXFAEQ8e4euB3hFE1pWnN8a3j9qWa4hn7ZMGWjqPz7W6yGF2vo9M",
  "key10": "2jZts9LqUwuK4Vb6ufYzm1johb8hx8VuMHx3chjhgaABbVB6qqDrwYf99Z7kvou2Wsz3sHFhL7NZgKyN3T4xwqht",
  "key11": "2dHybcTTF2erB4zXNMBkbEnyB7ThwrNb6biywqquPhisUmgJ1KUN2CBKqyZb81w9wYX8C3z3LqWt6ZNWEXHL345g",
  "key12": "3ZiMU7U9TnMC39WFLi9QhK1kQ51fVaGH1QU5oQjcR9c7xbpaXq7AJAQxtjCnqCQzpjYxLA3PFn43wAFWczXNmrpC",
  "key13": "f4y22wjvEPLdsVV1W49VZPTkLh7jUVdfb5VFeG3h3PAaJKmeDpa9DpWcJjBbtMdPJHGnzejK3qb9U9UyTi7CpSY",
  "key14": "5j5C9yPn2DqP31cchqSY1x1vqyyUs8VGBhDyxpkP8WG3ZvWKKo8Bemgd8TPuGt5yMBcrK2TPJjFjGovpGQpt71Zc",
  "key15": "4Fh8o3Ua9zXVrQQNN5u8jXBrzDBWcggxjcJCBSNLZeLNxCMxYrXf78UZiMotUFseP2rdFZji4Y8fMwphsaQ3fpkF",
  "key16": "5Y8GTJY9ATHaSQWWTNFPFncEfvGWWFEiDkNtzokg6TmQqUzqRLziZoJJSATa9HdKqVKzd4r8wwnAxVzqP5agyfkW",
  "key17": "2G81p5vYAYHmzwMKkBV4hhnYsDiAjkSiN8WvwiiYMhs5crdhyc9cAEawRhSMzi7UPP1wPjXdeJCQENHDVkxGj4Nr",
  "key18": "3mhU8i6wNGFAyXbaZuETE4eHbayt97VeC87uBtnasLDCKgFoFCHSRjjVgTfZnBHXQf4o8teugFX1CDRZ4uCzXN5E",
  "key19": "233GFH9Y5Li6haNjAhFivSn48eavxk3qjyAeroPLZRuNynxXFotd41HvNpyf5pTvNJjJps5EiMTRcXa8xaqxrFAW",
  "key20": "55FYrNiDLWMXCBok9gyvfGnMSm7rKA77hNSvNxSh4LQmcUbWdve1E6FXuktZx3496ZT4YEt6rT51ufcxH2cF3k4C",
  "key21": "ewc8VkXVkMGa2pknj9vE2XgRz3WRrSRJ2HpwUyiJUdfeMtbyx9E4AHnLoDNXgY7bYoaZh64dttapWdxBnjpfw48",
  "key22": "57ALGP5188SDPukmTgFQESNPAmZedCfgBDYE9kMq8HjmFTCmXdhcbnqhcsX2K1ukLXuuu7CQXZJiV3KouLvQ73qj",
  "key23": "4DsEuRJ37K6K1u5W1FEn9M96CzixiVM2bsS9KdYu2iRvSprCRztFsS6MNqesLkjBNxi6FgCDwBk4J7gw3J7ZL8TC",
  "key24": "5UjqdaSHxvPG6yb3FQy8GCUQNLsKq24tfNXMb9m6kRFSvvUU3L7F7qg3nAcKLKs8LX6dUM9bwZntPKwPG3TQvhcL",
  "key25": "xQQvjZReEbCuLxLJczMgVRUckuMCDEAVHmPDS38JjL8GHyGbBoLWYchvbH534wUUHmCYfWAkPBp7PjG3Vctq1V7",
  "key26": "5nfjAZ7viDF9ni8GQLaaYzWt4Fq9FHCrH6szx53jBNbttmqU3pS95Bj4drME7H5XJh6mg1a2eeFLmBVkJpWrGHxb",
  "key27": "59aumSx8MFiH3aP9C4WkCC1Phy1meyoh5bvCxj5YPqdAEou1PWsLiLvAp9hwB8EZ8FyFVwETjjYEmtf7XDHPNViH",
  "key28": "nGsh9ZJhUkDcRcScdVKauic1r3L5hvXFzXsQzZ7UX6kp6eCQ4SyaWKUyLtK2o7YNhzSy8nof4qDRzZmSfSZ5dJ5",
  "key29": "54JzoVXSCMqogBdC6tmzKwEZCyaFwjz9H8myQjULuNeLHdrSgBhqmBxWFmDFfiUc6dyfh3NdG3x2Dii6ZtA29c1R",
  "key30": "5s3t58Cgfc9ky3DVms8gTZ6S8mL4JeLtHnQhMj95Va1tgrFuSY4DuDNUENR7g9dfgKyEd4jAUVNa7jbTiBEdfhSM",
  "key31": "3DdAmE21hac2h2rPr1R6S2LbJZcdZnxXaWRmuWtwjCBLQscovNonL94B27RXMuQNrDpQFhMAEgQuf2PZnST1tucT",
  "key32": "4bixMopUq5za7VDeVwfusyPW8vbeN7inX96gbNxxVALgJJzgCuYGeyW6W1gP2zgynMSA2poYHHsQNXLuFFMy9gvp",
  "key33": "4c5Z56S5n4d5PHLCpr9rDqQrPrZ2pFWW9Yrf3KALzTeWYsFGrDizmj4kH2cN2rksCo7CDBsEYcRavY5E2QNA91YS",
  "key34": "5Lp2WJzLvS8Ypa7QzjmNoeRwxnp4vkBpwbbPw8Hm2TockXvTBCpEhUJ9JvSc7QfCNK439dW8LtgfK8P6AixmbuqH",
  "key35": "2jJetFXZS5c4ae5j3yNkbFFuEwDQjAg6vgPEo3SRK33zGmQ7G4Sx9SApA6K8Ht2DQ2PeBYPaz4tG1TyNQ1XKPUR",
  "key36": "4ENkfeKaBrBHXNBo3nAtodtXvViXXTNLX6wxQEutv4MkkPQ3Tt9TzwnM3u8u2jnp32acuRT77bGXoaFvR4rUqQnn",
  "key37": "2WNY2ntAeQizxCqFZUqmT8ruoy98FnxF9ZWTC4wDjCyGmdCi2zw88gGviQ7M9SPdXMyco9FDSK6TaAAPqAjUaBjP",
  "key38": "57bW4iY7de5YntmJpQUDSHq5KDjzc6bpCd1zps3aMT9Vm1EHg6ZzZ1iVu2EfgcYFGGWMSNKPt266mfFjeTRgDh49",
  "key39": "5bqdu9hCk5osSZkbrPFLgMsLiDYyAMoC1BVR1ZTi8jQQD7ZXJFooj6CtvtEekL8b3Eq5LcfGtvjWZpjazktytGQt",
  "key40": "4L9qTmdnuvnqEtpT6WuryqL6itcLFk4F71LC75y6JKGgSkoHUecMYbsMXU3KPXo6m5EC3foojdh7Xx5iH6EQnvRL",
  "key41": "3VFTcqZr36RZe3VVoBMCKjXfGe7H24G6bLNMRTDGDX7QWrhZup1cTZY5B6VrnMx3etj425TNXHiVV86y894VgDx",
  "key42": "3ipQUQiXoija2jAZAYd52jRT5364tSWJPaWxLnz7EYGQjjM6cvhuN2fenPhXxcr7S36kNpn67LvvTuVQMLJxbhop",
  "key43": "4G5Tci25imN9KofouT6HYWeqQCA6Fpv2scLBWtN9WzoTKBFHZPLrJVeXQMJ3VrEU9BGxFS2j2zSCESpz7gPV927s",
  "key44": "4QRCod5TLGqoFH8KyRApLuVJVxtYPYBTMyU1zCh16DU3NCAbPRoH5CNim3qLsWE5yGcgjVCGM8a9nAVZXJuEcVxj"
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
