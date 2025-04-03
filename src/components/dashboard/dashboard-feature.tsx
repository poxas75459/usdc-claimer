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
    "3vA5QwSACCzi3owjkuFWfWNghjKQt8NFJ9VcSyrnrncjFeBX6sC73BDYrTJyVKWwMyth8JrDb1nYx5W7R45pHwfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36oWTpgmn8TtMARF9AFrrGLUQMjTHB2eEUHQ8m9yAYDM4kzksc8yEmiiYN6KqTPMDgbe3mMbgBf8eCGwxLbtYXFu",
  "key1": "2LWGBySjsMMHDWHG4x9ZfTS26TCY3uCiTrMLaFvSPaGi5gvCGNJaXjjrreMfsAFd3PUZLRhAkdcWsiysPWS1nif3",
  "key2": "4v5r8hJKZfdP4V6TvkeVDM886G9Kusv7WHAAb98LMDztSSRwSqUSfH5Nwkj7mEBxpPa8cKKwMRG6uWWxyNo6z5WF",
  "key3": "27Wk3WLJ25iXT7WgEhrF8wKjzHa7wKSZgijjp9YBGtjwdFVnWMxo9LGbNiGaXm8FqpTu1jsguVg1R3YkfptBiGrf",
  "key4": "5yJgGYJEgmtjnQS4Co41G9Yg1rvK61HCsDvAGGm1xw7vZXBwKXfQfUziG7hD3VEg934A6svvHtrqRNPm6MaA8iw7",
  "key5": "ufRrfTt5dS7RmnjapA7vsa4J4JBRebqs9bnQ4PxaHmkC4RgCrZRfGFHMJTVCss9Uphh8ew4zP9EgyqKh8RWCUwX",
  "key6": "57SnCogTzxWh345tCpCxbKVPiJvEKUBHNYGy2KzNk9hLD2ymMVHP3sToE1B1bnX7CPnhT1Awad6JSfwvmy76JYJ1",
  "key7": "5nwQna9KqYw4E8VixvETN1znkPKudg2UQtPDs8FcQ2k98XwZUbMiZhZJQzbbn9rFfJ4kF85Tv2M8MmpdkAejSKHN",
  "key8": "qGeQV5GPG7QFhdmsok4Keha6yJwRqfzvCBk2VppjorFxE8Mqgb38GyqaqGq5ofz1NtDwF7pkg48cqTLezNnyCbA",
  "key9": "3752hDaf1GLMS3bu8UqyuZzFjXihsNUhWMrWs5hZfH3wobvchGT5gaFKiXfKx7yAsrjXaDwXp9TJvjdbx9VMYd53",
  "key10": "28D1tDqK4BPQcKNen3oSmmxkptHYsP2xvyHEsAQAn4QkEdrTAGw2JHuNzjSDDqJLyoedN6B6GeDgPxc8tHQBbhwN",
  "key11": "jFjPqsnS5KWkFaysGSbwCLMK9MrusDF4D1QoQVbr3pMvBBbGpm3BcwuEQjQEXCbnzFt6WjPvmmLREqmXp8W32oE",
  "key12": "4Xb64aWMFq3gVBoEXyPrZ9UfQvVaaYhnuLt8Hvag7rZRKq1kWF6XcUHiS1vLKFVek7rXFushzeTs92GgU87vzo8V",
  "key13": "3CgfKkbthGMCbuxVgFB88gdS8wU9yNSPgDY7RBd9JoLjadu9VpLDDuA37F5BoXjzjcbUkshoB3S1kta5n1UsCz2V",
  "key14": "5B69BvDhAUHJm9nCeVZe1Hr1m1MnYB6gZJjuW3Bj7SQ8JacWzEUCZTFRoesiazdjFqB3Ndja8wMq7BFcPz4EZ9q4",
  "key15": "5NAd4w7iE8WPaEYchzMhf8qs7R4o15ibvq3efK3pRB2fJB1DahwtWGp4d9M9N4fqAqTsPD5SZLU4Djbpa8UP4c1H",
  "key16": "5S45EGmxqermcPRwFEQmbZ9FPJV5H6XofbL8DUenEf2ctwNZ9ZcJGkiJUyXm2rdxU3ZHcJSbjLnUhWsRhPctrU3Z",
  "key17": "38rzDmKG8jB1jtKLfNGvBGfbD8mahTnjW7LjF3kGag5dZ2G3Hgs4XBoNXsEanrxiDLWAkcixxxE7g8h96Srpnsaf",
  "key18": "4ghPq4pzQJeuzskeC969dJkpasdkJK3CB2qMAcrnzezbUA95Lq9rgTN4EtUzG3LhMkshmrR2iVv8fqt2T9K712q7",
  "key19": "5ZQkreTSHnWYrWinppjPJZvvFXfkXVHRasUbrgzDBATqRC9GQHbZp7DmmnwLd1qBJL3c5sGR4rMJSWeez5FFk1Xz",
  "key20": "2neMAhBvS4Qxu7ggYev7Ct866nmLTgQKnMrSG1RQrSaWF9K8XTSX9iSi1LHiRvdtv3MXCrm5PHhss8xGNfgqLPur",
  "key21": "5ehYGeiXh8mkhpyrVetVGjXXimHQJVKesyiabccC2HYB2j9XpLjA1aoBoXX19cUuP7ry8mP3R6TmCVjKG6fiUG4L",
  "key22": "e1DjFNenhLVbMthrhTquGbqA5oDnEjYg5TcMYFrnMBPBg6aoScBfjN8seGaMfpJkCwLBFQ7k8kQNztEVVKK2HHE",
  "key23": "4aLWrZqCLM5VoMGRB356TW7VovwsrikqnUjG34Nn4jEWiMrz2j5d7gChZjF3nckB3HnYSydRmjyKNdrD5eDo1jFs",
  "key24": "3Pdm4NYkVxYkFuUDPEoPMtbGamj43CviCSTPbY54ivecfpUU8tFbXkjnDePbZ3dWtEdzwhNdt2CxaajWm7y9hiVe",
  "key25": "2Yws7qkXiQ8MEr567R3NBSubX7eUt2EZC7fARnzZsoqxoR9z3foEEKHJsY1BpAqmX7s4PGjFYErBHC9nvi75JD5x",
  "key26": "3LCUyy9yn5sjzhLrvVJY1hpTZGvJ2pDfpYMWdkMKWveKTb8UCWc3M6WSH9oj2y5XXVNxQmaUaJoSY5hB4ejhpf2v",
  "key27": "4G4voEijAHHXh2FoHh53dLzCBPzekG9J6KkZyHMRmSEGxPGnzLja5r1jRXrTAB9BbfuWqyNRu3Z7W12BUcZ4CSot",
  "key28": "2jTLGF7GHdvPsUou9YxdHuWb2Va2WbcbwC1VnDu3148iSUBVeJs9tMfdfsQENyEgB4qtAXy3TZ7gkEJ93iFY2c4w",
  "key29": "24TDiV9G7FfPCwjiF7bNYpQWPKFdc5YKXFgjxY54Ge6QALJwXz6cp3Uby1EduRF4RJh2gGB6tm6eJFEmUGXrqcH9",
  "key30": "4ZVnPgtaXqL8v3BnPfcy7HLgnnTUpHzpgx9Z9jcYHDN53awq5JvcWUb7DfTitpbMgyduFJGJSExh7pLfAHBWN4JA",
  "key31": "5KWvP3NLUTmRzSjXrt2UZxiaLP1f5FB9nfwngtsXshzMo6dsCo4WcLT93iELncbMPgb59pYo1jtRPQyKjUeyCxqE",
  "key32": "42aFeETTvJUdxRfzW3UAB2UkT8ZDQuspFuBzQxwENGDgDqD4qYsuyuhS73D21fzsoAMh6TAKHCp9XF3aX79Bqi9y",
  "key33": "4NJBdDQpanyoctpnyHY5WDHsbmKVByC1niGfhQEBSYpHSF5szTkaVPwxhAJR1CkawDWV3TeQ1sk3ifhghCzbscCR",
  "key34": "2N8FsDP2bsvw5NiNK9CqdvFB2Pe82AVF2paEEXSwhhaXNLnLjm3XuPVdyKS9b39QMgVzEFneeK2cddDFjXsRC1wT",
  "key35": "5G7tn5rjgXVjRrJ3s2HCM7PJKxbCtNScWyVAsmdMzisNsSDFLXgwPKPhoXwMzhG9tjsWLZBu6APFL7ZDoMqPw8hk",
  "key36": "3d6L9FNSETYjRQnJPRAMNnR6RiZsmKA9eNiQw3r68uELPYB4DoH5eVjhhhb3qPM3trHuRvjsC1fBGRmpYDvetsax",
  "key37": "3XW2sQCkUKeXq7WXkPZq8CYo3dTw6k6XeNoiFTYECMMqHHiSt4NNeBFztaeJ52tRg9JZXiDnG6aQPMWpbf233Pc5"
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
