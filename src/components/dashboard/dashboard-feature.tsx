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
    "41Ac5pn2REmVWqnmRwcm9U5KspvASkiXUfut5KuydxhvAiAaAzPgPT2wEURAXgn6mEBPqbPaubQ8bzrudJSPhKAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476nxsqHnYhHf58gAyXXniEdHYpwRwj1gSWMfTZyhshqMWh5jwix9o3v8aXUF8FzgNA41hh5sM9cEUuAbkEBx839",
  "key1": "3rAroEbVGxBmdsv5BB8tPvExRe2H424m2RycxmA8To41YxJVzLPdBEJ65kdDWSPvYqXqUtSfxGEXbdyx57cEwy1i",
  "key2": "43P88bdD8VxgnJ1sXcrh66kvKNu7qYG9pMyUBgw2jyD4a77xL4wqF21b6h6CSNbp9e8G3faDCvXdFPVx44TsRuWm",
  "key3": "2t1QsKMwF6N9Sixfg2r7UmLNwFSQ2NC1quGz3WuKbArhd9wuhx5ALAPuRRfq8b86WpYCJ5jSUHjj8Stnhk29bBzi",
  "key4": "5habZvpMhB6LWedjYCgYv3843bCAZFGmyGh2eJK8C7EGLnVBb8doAEf2iUQZMzzMMHk8H32nyF9kUm8ab7DYJ4ET",
  "key5": "4MyxGKoB1jr6T9kCqKn4ZAq9rWNYb6PzjcJEwytC499PntGAJrCbY6ekEmNAbqceHXTgSj1eNkmUFpvJgmvBYqAp",
  "key6": "YuFiFS6j4ebuhQcNHSMfi3FiS4SYWHWSXXHmEMZi1LKReebXa2iHsfJBKva82UwqFRWxeVGMvDuvdXHs3PorSgP",
  "key7": "4e8L72G1nUb95i6j7MhcxZHLbUVKTi4oLxLcjNX3ZNDEHiufZSseux8ZVUZFDmtnVcTdNBSFjHzPVMp9Qn9fjjx5",
  "key8": "gJJ5uDzizAWDwfxcPFH3DM59rv3YUXJ94zRFQJo6CGzh6UNuFuKdoNjdR2c6vDdSP46xrBSTEde5dqySmejkSb3",
  "key9": "5V6cnAgRUkRTcdUAeNA1dGvuipDpbDrFM3GLnHm6bptUUoNN943UMsN6XL5FDbfNXWTiGMPCgBvhtgN8KwtXpXTE",
  "key10": "2w5wx4jHyyxbGAAxaEMhjiFCoDNkjvCqDZ2bGx6DnAh6CrbpMqEfGazXrgBTTXsSouVdGhxP1HrEhWHWKPHSSmj5",
  "key11": "5xVzS6cHsL54KmbfBu4CxfUqkupCZveQi7cJr3joRyHj8Mxcr6rdcvT2SJToWG6NR491ThaYXKDvZAkA2TZg2S4k",
  "key12": "5E4QU41k3r8RwE9wGBh3UjY2WNJVHCGRPwVLTFnj4gNaXrbWnfoNAXdNjQjucY7vz7nekACB9qyhc2Cmj1aKffGc",
  "key13": "2ytWXydWWPxATCjatmChCCc3E8Zp4GnZ5XcNufcCYZAEGwcwKxRxZr6536ADhqZbkYPN8vrbcpVMJPC1XyESEtde",
  "key14": "3zbEVr2KqpdrijULYn4DgiTAt5y2k2RabP7spwqgrn4P2YXBbC6kmsDKK8X9VtQ8pxPZxPgkyMSFJ4UNLtobm6vv",
  "key15": "3LsHe5VChPSDhfp2GX2FJH9nHSFufwkdczvDhztEoJQTfvjQ1Qfb3BzUgtMFZSZoXicTR9pBqtWezy5GkHRi65Su",
  "key16": "44pKskphWqappo7g4Kw4vYUbqrmpyV59CdLbXWGCM2tpN1H7wU2kqKEzY57uHgSJjHaHc568JEvwox6v4W5LJCPB",
  "key17": "22DSYdkDKS3gZs88jUXPfWMhX4sYdzgUaegayg5WzdGEVLMapt55oeJBNHhh1iveqgNM2yWsuAZSNGByQvAmQoDC",
  "key18": "4facP384jgjNTwv8ff1u1m3rWsm4yKWyyd5auCjQSJztaahmM3uvaMiN7mA4Ybhekpxyu3vScKjqkjeGtXnDQzDt",
  "key19": "3KeAXHiArija9JawEQ2ebEGskuDH1nUeMPU4DHmV7ZVM1nUbNUrRYUviY9JRVa7G6yhocDxRhTjCEjtEkbGTEMHC",
  "key20": "4uXSh9CKQ4BtPrWTqkTS4nnsm6swkCYCQ9tRwLYBRuYraKgNBn5iXV5YoFbpvrjBKKXNw6Rq6sf1RBeC1y4At182",
  "key21": "2zT6FXje726v4aK9gUW6qjpHH7TYihPYVZmFPP1etPacKGxkvGsT8KGTxE9madSZtoWd5DrV3h1ZCo1gyaY8tH1h",
  "key22": "3DaLi4keSG4rg33BY5bac8BiGmEyxQiqEsFEgAFV8XqfmWwWujQtkzpNVV6hnjWMDWw5ncS8y8a1N1fESapBgu9g",
  "key23": "5VvMxHpjwG9PioVKrS2AmwwqJCbhTdBvXXSXKF3JdYkmKrvuqW4wGigZZMYmnktWFxPdNrpSWTZ3QybFeDFjE7QU",
  "key24": "4WSNmHeNq5G8gcSjqWCES2iM2DUqh2A8S2qejSYf2eqAEDRVRHXoRKEqiBvfG8Ahx9Jw4DjudfhWEk7kcWz8wRsY",
  "key25": "3T96DcokiXZrLyvjkVV7hx41VTAYGxBC83mJEVcnNQA7ahBvPAr9LP6KQruquiQkkhTnfS2P3z28emFR3tg1TwE",
  "key26": "3MjvaQqhuMtZhvdSDqHc31mWybMpcW5jx3DKU15BREAPRkBVJQ6MUEwNKkWTbjmTA4ZNLTiU52vXj2JLQbZbJq6w",
  "key27": "53z3mnYgLeMipUrQWWLJuMtwv7yhrqqT3bp9y43CzvtxMzg34yq5rrGQfkaZTdRd6ePjkT5YiamAsQ23eGdVi32s",
  "key28": "42Jf3M2EHYsiGgNB3rup8iB2gMS69NYidYdLm8t1dV3p5JNpAeisUJUVwYTwv2jwX7zkMqNqxUPid1NCZwqhSjqP",
  "key29": "2jYBeiSFVwnfuj9tT2HpKrK7UbJCt7ZZUNKnmuQ9JpsaAfUuQYyUP4c4xzC7tUoJfiowLGZrEVfFEfkVb8fG1AE4",
  "key30": "661Pfk4MMRivH8PjXi216snNZvuRKCvDWzeWpMzsxxMHFKiuTZ2GJWdoNpbY3J2SQVRJSpBtQ1DBoJRXCv5eyNDz",
  "key31": "QtxwaHbKAnPuxenUEtkk1P5K3gypdCTXoi1TYxnT6YGHqHSojdCMFMSJhvYn2YxvqCebgss4EbV2vY3HsF4CuTD",
  "key32": "4YSy8NaM6b8pr2HNRZhdNhM43bNV5suUTxBttEavw3v8dNhGUusNp1Q7DWGcXTRvirhSsUwnqwPVorMKYQFkJU78",
  "key33": "4Ge6iti42Pau9DUtVq8ojKSEPzxS9AUYZADWffRaxW66tMXnizeuALNKZTkgpxMJcUGLnSMCY9SQ6hyA6uA32ELY",
  "key34": "2HXK2uD72ZZYQFpnvQSM6gNpXxQ6HBvACP1yLCK4xTxAeCYAVbVqb2ocz34rEUSyQAipK3MF7zzXCpnWvB24UWzh",
  "key35": "3SGYZS7Lx9J2YVSeC4Ny43c14dFdCZPVFcBgBp3WrdBVu16Mz6UPdCoc4TfrRJ7NtQBmzi8V2YRhzLxR5bxtaCsY",
  "key36": "2rEf4Mag7cT4kr3HJoMDArd2CcsQahjqQLjEdDYu5YiVEg4FpXr5fuJaJ7pwdDuZMBQ2EThhNKZoQHbnCsXffPBx",
  "key37": "5McFXSz2YmRdgMhPwkTsqpDzX2ot9nS3YdPW7HW6XGLqyWnPgcyNRQFuaJoMxc66cb9XsnmdW99C5otZjUyz2Pao",
  "key38": "5YQTGk1eANHCz5ZZmsrWHvzGEEGiG3erQrmLatfRqBa84TW1VMFEApcmcCUAVc5a6Gb6VNt74rhAx4ixcxNDZ5mL",
  "key39": "3SZmXgXV28T9GGdmk9BMpsZpZ4x9CVHwyQmYMWix5n8kbHKHkhhE9YHA4q91AWtS7VBZZBtZMNGARwuJL4ZFAMP",
  "key40": "cPAwuaArazLBnYrTirm9k7atmkhWgC6N5qP6AeEmsihDHq7iFLDyGfXHSWTWJTi9Mdztxv2p9e9HVvgVqpX4W3p",
  "key41": "KhZntxZnRvi9p8Yr9ZCJcSsGrPANZ7scEjyWnHTDFWqSSuWVWqND1VL8SGwmqEBCM6g11dahT4ADw46wfW3487R",
  "key42": "2Mf5KnYkPX8uQMxsDaKZauQCfmyn1f3mpx2nc7rJj45tLtMqcVeK9zPYyEDqLYmKpNzu7bWeKim5nSh1AnRJL4JM",
  "key43": "cLH9VFwfrCMaySdP9af6s6HfWErj1342M7GP71BdA9Gz5uhpJTaskdzgXxiQmrjJMfvJ2PPYMfzQ4Grjwpcr33i",
  "key44": "27cnDD8CXoHmuAdKNKcqMM4PpQPXefdJaP4ke3ssGpZdTCLN1eNXjBRHPPd1uLKu1BJS7eKSfbf89V8pWLVpRzXm",
  "key45": "3LR64uTsBoinGWXFzCewVZhYLKX98AR4eB5TeUDCkLBzpcoxWgoEYvwUS6RB6DtkP7Nidao9q6hGM481oy2MFDa3",
  "key46": "61UiJM84MkrtDRvgjtk3oSyux4x1cgoG49MRRaZyEJG1SHsrCkLsX6pbnurm9gaMHTqQibXrhpr1qCyyHPE7GnRp",
  "key47": "bLxYZNa8LoR62cu4stQznp9axHaLo9nA9iiZvdjZ2f24soxmZEexgy2WVRxuWTje2GoGiNQtPxnDpVDw5F9myWt"
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
