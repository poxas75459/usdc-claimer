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
    "3y4QTgkjhCct5pz5QCVjQbiviQVtFLWyW2mbnWwJbdTUkzfrY8RCN8FzP7toE7sstrxutvCgg7gZLaKjbAmu3DV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bczFQR7T59BmJuXJ35dWKPmEbuZg7JRKfZQzuGK8vHqSBR7W5hvELZxxe5qQzQJki1n6sxPL1NDYUpymdzbB3sw",
  "key1": "5Mfm2yC5MPbinqnyNvXhtf7MBcZUqK1x4LbSAY5jztvyUNVo6QdCi6kXqc5eZMhKbLFNLGoQu9WYwGmLUrEtbuZY",
  "key2": "UZTrYZDKycZWgcBcfD8UHrRkoGkUe7LoKQnWRnjQ8ZbZKiBCKQB4gEpUFvfN5sNWhASkLSRBcWdvKt4MzpT8sWK",
  "key3": "x5BFE7hvetvg9y6Q3ZX4eEERcwMvnzCveUf8gbLWv1rpRDWoMaTpwwkeW9fMo2VnskVe3dsXn3kpWvyCgmJMdmi",
  "key4": "3LsBvgBvcVHR5A93BUHaeq9vAALSKLb4NdsCYiLB9t5xGh5v3XbMshnqmY7JV8jjPwYXd7AVtCWo4nHpBa8jVdoh",
  "key5": "5pbsVDzwTTPZ8pDzXPbGQX38P4DqjKqdnRgCKu41SxqFEsHCrEPg3sJydMxSbufoF9si8wo2Db5t19qpJSZPTPz7",
  "key6": "5Uv8JPGo55r177pqrYGF3oHK238BuubFZHH9TNaAa68QPiCs9g4Z59yRvJsDvvZka9HUr7qp2Z96JzE7hBYnkBEG",
  "key7": "27RKYv4UsGucXr1EDpjyLeMr45AgD77usShEd8Dx65bgdHh6SqvQdmbsoh69kX1ondH5FdL4YkQ5bfutqGrixjRR",
  "key8": "53bVuphCjd7oUX68vrWU4yH4eEJspMFQzSreL48xpT3McQ1neCtdiuWjuECCiafFLH7PW9JEMuJCWe4s3RcsXFBz",
  "key9": "5i49arKa4ZUXfLNu4Dpmsm3pz2Jk62JSBVTD4eD2Q5jtFcY1vYnH3QppKeVfozP8Q5L6zW6vCcDBCW8qL7qseuZT",
  "key10": "53EB9SKtVU7H8tMNKUFWWYWrtGVxqRP8No4CmyidqSoBgEoeYEBSdKxFwq5KscZMf9kji5sx36zQQroWXq3uAWMj",
  "key11": "29pPhuEGMreXro2e3p7MzNge1kuhJpFipEH797SVBE7DB6hypWpmKqcBnMeBxRU8YezMjML3hRaK6swthEecwwqW",
  "key12": "22zp4rEyxg8tnzBXESrpLbmhVG4WsgHZmPAZa8LwX9Mpcv3Gnq3sqhHVRnwjaFGWRybS7A5SgWyeNFyHJ79toJ6S",
  "key13": "4hZsgjxFWPRqob8Gu91dyxHqRofW8WDoCQwFfGHFXjC6UPH33ZaB2nHTZQQFKcjLY4R3MdhYbPoGQCojN2BV71qX",
  "key14": "5B3KLf2jpMp9vDLRXft1KRnJJwxtSVvMBG2SEiM7tSnZHfkMrxq3yWPr5fHCazHGnBnnX79sqctWdSzdcYNmudpd",
  "key15": "61LDhgms6XfbXs5aHqrBnQi5G32Q2gddYezCVWczcrdaXzpkVr6msvRXGDdk7yUxi2UJLqhTUH9GB1hLtHK9j8hT",
  "key16": "3WBrNbkB9wnNVaqKT3tVaW3WA9AVLr18L2c3TeAzr9sgsAG8wyEz51oVDJWVMCEmbEUpVqxkabCyW5ocdcMUcp1G",
  "key17": "5uyqtLgu5wXEdyNjQgBSnYRtcSjUWgGEKKW5uTfomhwyM5yw5baNjbCeyb2d61oTC7oisxFPWRrR5iH8ggnmtSZU",
  "key18": "5zZbhuzcKDj5vpVcWcZxVMkFfFrbxqkzRhux8gfNYdNf9rKW4NUxokQYdeofGH3i2giEJMovZy1sZBeBs7Dzs8hb",
  "key19": "3B2hykzPGrDcdKrynzGjZj2t2WRerveJd4PogBnf1Jy4gGnLnyVY9vxDj3DtBhabkVPMSHEZaxF9Vb2JqgmRsqDS",
  "key20": "Mqdi6GoFg5b8WURNfJ8rxfT3C5QfhPumffh6tmhE2SYTsiUkJzGZJdT18xxsYiq7jDMo6VYmhaQqdSoG46ospm3",
  "key21": "4WX9DuQKT3sHCRxwZi2X4GDEL7ET6dinHrNx1esJoYJFEqp3w8J4eBn2iPEcKaM7ruE8df33W3BSZ9GxCzKp9m3H",
  "key22": "3pEPVoZBS1PyG2RUYMN16LndNimyeBdemKpu2s6ifYBwtyiHoWgpSfNQDWMoDC8Gb1fv5oneRwhf7dnBw2PpXBZx",
  "key23": "5caPSr15hJrD7vVjKWdE7PE5eHmWFay744scuD6RngZbgysAFCnXeEWQ3KCnZ8SNoPs71pwLjz4jzukau32BvxBT",
  "key24": "4hC8sbpPxSok4j9EHkPXgvnneTjvh7zxEiwy4ihEGGKjDKWMXEhYtsFULEzq3MBLH5SjajyYBaujtXNHj7Ncrvwt",
  "key25": "5jsWwE2XzcsmcFsmNnYzbRtNGfAR3S36eFApQ5GwS7Weg7uQturxpJtbx2FCDF9Kz1FkugSvVZxLwdpgKt6pFqNe",
  "key26": "5Wj2cJDKBiCgoACoKMLNqQ2SjfDiHR3iRGVkMhEWCP8Tsuxzo66nV7Aut5JL7PFbKQxmVqUM7p1Q4nyS3z2Az93g",
  "key27": "4V4fbDucmg1MS9LTm1amMC8yGgicAr8yu2nHCp6PBn5TiZ8PNWyxgdS2GAk3VRayznp7ra6DfjSVdDuQVHkM7rp3",
  "key28": "5YbnrvoJWntdVmuL81PR19z3ug8Hp7zS5qiRYsUi9sZkbG6Vy5dM7frqM2RGLFq9f7Zuf27L4aZfNKAaLeRJ1fQd",
  "key29": "2ugjsbp9Ry3n7W7jfLoyEs1wJoHcsX7NxXcmKGVPd1J8jhTGAR3oHTjEcjkShepKN54k17wG4QfMwpFpERyBFWex",
  "key30": "3sy4RP4EUsHLAZW1Tq9ZUWN9AQ4BJJRVJbaSCBMNCn74WmAkKd2ABymYCdAAWENdUmbTSZnNqyQ9nDd3WKFMcubr",
  "key31": "4N4qoG7jqtHW6MLGWPvnL9f2Untv1igPRCeCN17G7gC3XQ7Bj8mGs7YJPrtnAshNnz2AURrQxvcmjdybvt6CqoAj",
  "key32": "5Qj6zheHzB2ffzren3F9wBBuNbk9bdrAs3kweSomwmLfPqYyQeVpaqed99LfAuKLxB599pQMmKywqy7uG8ghUeGb",
  "key33": "2EJdEwiEv5bK75MV9YhahHXUhsTMdfMAFKqWS9n86D6ZGPovyMKE6fCyDbCKYWtYaXrT1tRbADDBK7Yv2CLHv9gz",
  "key34": "CwiEy6g1b6o9CYZ8MxFwCumMYMxXEB19UPVLXf8dC1mg9EntCk1HJGaoy2ziofi3qh1xxznTZkxfXcekYShD98J"
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
