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
    "iEep3FsQ97safMrNFaEW3T9n7EXEYDoEKsPTPbJzrcXJPkKser9UgnD567ipVPSZVyd7sgvbHh8FKbiVdeH7jz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ccSynfs7aCoQ4Qf2miW8QuYFb3xj6cy1BrKgqg9ncewrUd332QX11Sb9nS7qNpRdj7VcFRgXM91Mwb6wLNUTACa",
  "key1": "56CE7b2cM1bKxeSzZFcgKdFr1xvk71MCNbJnPZhp7VcRvMAnnUiuFGg9TTRNFJpDhkEfAzjX2zydDEsXEjemneS4",
  "key2": "5sMaXwJeFHKBfrDgCT2JG5ur6683mGRPGvKsF9C3LvWbKrtCDqhs3xqVWPHAPXsmYZ3bJhFR2Pk9GQ2XEFPLSsXQ",
  "key3": "2B7DLKTsaeEjx1hPkmgghrAHZbfcPGBVNm3fevbwk34YTQY83rhQU9fSK2QGKdEpaWgAevBPMeGCdZJMKMscPKMY",
  "key4": "2ip2SoETDG55f6JUM8xpaNq8WPEVNYnH1qeJKEgepZArj29vf2kMh2WHMwiSbAw6pu21JCGuh85aG2paidm2s3Wr",
  "key5": "48mtdRsjNEPB9hbHTuWXs7jHc9zfT58QY7FaNYdSUukoJvviwkFRqPsTuhqBBL4k5d2Db8R2nqv7x9AQCiYqKzst",
  "key6": "3Y7gxZFeFWvREXxLQCAKQYHaWvtV6inoJxaDFPodyBQxijnXNshT1Rd6t9S6VeiF1Nknuqp6yaBeHo4pQiEeJs45",
  "key7": "3EVHjxqganaDCZy8coF6HTS69oCzAJSzyaTyrAQRZ7k5iVLs2Wp3yEWPUiBmRrGn7zTDQPkEKcPGPZzQHdvt1xEi",
  "key8": "5jHd13buHrLBh2e3KePEnHPgKSPrLKTmGqnEfvHyjqjh6g24fyxQrWqKc4WeQYhoHrxNUvNCRsnMndkYZ86ZR1ZJ",
  "key9": "581fz3RfCzWoAzYfPmct5VwZPgRhzd5yuQ7HdQeZqFjE9LdRHYoqH9KecJcNR5AtcqBpGMLfQWwHVKZba55mMdX8",
  "key10": "3iBGzdLBpSmd69SYKEwFgY5NSmfFT8tepAx29bfhLLCitxkxWHevnhzW9NKnSMKUp43MReiRiEsL82ie6vLotS4a",
  "key11": "32vfog1eEfAPKUCaXTJ846riGDAPqX1Am36ASuMi6WWCDXGomHTg68n1bGJpFquPoehAybfoHmypG85RdNEJcVu",
  "key12": "5NZLdNaCVZxnWQUf1M1Tmpo4rDesqHQhqTxHaTfa4SFW8CnFhw9QqJoWN5EDj2XhaXn7kib72Vw9tdmB5DDAWwLG",
  "key13": "SorKPVgRzVdqs42BdhQfu7BGGWX6vNa9xVmFqxeirWFzpmMsYVCY75wS9UUjTPgGK2xKwuK8CH8Xn67F3XJV5Fs",
  "key14": "4g6ZUEXmJpAadkfaprRHQAXpPRbPuQ8K2gyzMjG4BHUszHvRnWhWM7DQx2pwaaj7BvTySwhpSfhL2y17d33E8XhN",
  "key15": "4NUfLCCxb5E7r7pjJ97pnRW6m7c9eMohxM7DA9vz5JYEU5WgqJMdMCZu1zrXwwd2oCNVZQfv84NDAhUHH24246s2",
  "key16": "5WahRryp4U7ks6uQ7JzN9xhwJYe1oag9VQgmnTcwhkAiMYB5yrkAyKLLWnbv4wZo1gmGqU8tnXGWmbsZ8G2aRYP2",
  "key17": "2ChfJaA4xfbTgcdR7rpUHqGfcwGaN1m6MQTnDfHJpaiWAAzsarM1xmnVhUB93YE36aJbVpfmrNveLtvP17ir3CNg",
  "key18": "7CmDHyTNKJc54LRdfrppLTR6u3GCqeUuKBeD9Ki6r9KJ3gQ6QHGuyF3CjShxhMDrLCNnC13vtrtHmz17PtX3aPh",
  "key19": "9tRWnYfewKwZJ1hvY8KxHzUX2Ftjnyf8xQtMKCYUePMAjwpS8pZ6YP6oFQZkfy8AFSYV56F6973sY8hRLRs9Bxw",
  "key20": "34p7x6bV25WkwfVJEqnPVQeheo4VQy1PmrAnLQZBdGvVV9Fj2Gn7VGt8fcUJn9UyDcHDy4BXbrVEUYooCSdnbMsr",
  "key21": "3pjcSMNC51EXGKWdtkqUwRk2Gav6KgFCqW5AJycRNWZ3LA9Y4hkaJhm5QFz9oGQTVHsaMyf1ufvQDBVfwYGe8VaJ",
  "key22": "5cBGoq7R371qWu3kp2nA6RZE66j8r3xSdMnqh4Q3oekqiBdaSJz4RC61RLGS7VGqsPecKnPUagoFswCori4R7d1V",
  "key23": "3pLN1fAc4z9nnye1EJe8QaQfpsnPB7DaHdDkdKvbWdqc7wCimf1GsMNhSxJL4u8Twc7Cuxf26vTyYWFixDs8AU5Q",
  "key24": "cz5mC6B5daXyZEmEBqMB59jKg91UqSAMEtD1TGBWbB2i8TEZd5wPpiiLfZnXPfvWsvRqAaTgWfUbJzhvRySMH5q",
  "key25": "494VRQTmVCHmuToqqgN81Jw9DWnfQYeMsyAtFRSuud2SskyESaEd8C7LfFjxBKyoLujBB3pNBoMjSJHHCoWgyCoo",
  "key26": "44fYiJKAbdMHMCyvT53oDCXxieAY8Ltd8jTEvph2BAzWVruPWegaRQKJTtLvfR4eXeQa6K3cVAbJFU5f5SrK2nix",
  "key27": "4Sdc7RiB9qhhAKjCKr24JQwBNrudrDZymsczat6rVPji7vDPZwLhyvmLa41RM3aUMiDmYwX2nbk7oAS1qWQUKjhu",
  "key28": "3ErHk5uqYNZLhkhVBgh47QLVYbThBttmExXBgtS739tCVctTzGhnnEqLjJFhZUeXVxcVwp3sA1etY1dP2hK5Wxfg",
  "key29": "4g7BBeVxdEeC55LQoAsK5Tfo1TAymfatCYz7P76iT71hWgfWoKKxa7wi2fVGowUTh1aNqrSgteZq3wqdadPmVRnQ",
  "key30": "2sgkDf5PfG9M8r2Camn69crjkZDAvp386NwjqzmSZrLigauog3eTtrQPPBA9B1u7bJHcQZUnTryuvuA2kzrEwLAZ",
  "key31": "5kFK277CLCPE5N5rRRFT7jTTyNz4NXm3kWxDWrXxMkCoAtnZnvkxVTXxnGk47bK1wx6gkkMLzbK5AfLezRPh3TgN",
  "key32": "45yBxMGxeXnqtCXjHF6RCeGuu63K64NTWFtsAiAo7h3RkYWxJw3p5hD3zyu1BESfvRFWbJ3KJYvZh91WpyZnVLfR",
  "key33": "2abHHNy5dSjSK5pZr4gGxRwoH9qewHx5G4QBvCecFQYauUE4Qm9SAmMV2nD9bPENX9czrjgUuPgapuBDeSswL7xR"
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
