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
    "4p9cUAGfARbzf8orok3NPmViNtGfvDKw7MnK4XtN1mgjFrAYg1T6RrdwNYNJwSe4jGWrrM9HkjpJmhFe2ZrG84NK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rho3kZ5wy4auLB3fMWXphqbAxgZswSJfpkDMXs3Az8BTQkEtv32KoT1Qkh6CnPef4yfVHBHCkBvvgboXikD2pmZ",
  "key1": "396NscLX8mTcnwkFZ8p4hFEz6iGfFYprXHbjJXKnGJ2486qCswYVgr5HGb6WqceqzYwnosakjtFcQiFqtgSVNwyf",
  "key2": "5hNupHNr9fJq8kN8UxqH1XyJEUnp3j9HAkB7qMqHYtivnz5w8Ti8VWHo382YSTPxja9cgYUuwdYoDefsjE6tx87d",
  "key3": "2UyiwLDR8A15wfioNiAfmGE8riUBMpT8MMw8d4cahzDfhitKzbnasJQY7AqpwmdG3MuXknrZV7ZzUYSpHbBRpH4H",
  "key4": "4raxzTokrrXoHa7td6DBk5HUao68pW5ig6HD6JoDX8edwGfgFoBbW1NhPvJCh29ZyBgrNgfSkHmBnFjHKtoYWy81",
  "key5": "4Vw433dLcKQVuyELLeqBTgSPH6wyFRwS6LK2iD6ixyJL8KBSWemwcXwhbncKNaBRGRKoBLLFp4JiVGGdEH4zX7vi",
  "key6": "3z6oSvAGQA2N14cHxvct6A1KY7U3u7sFwpBCoZHvrrJMbtVx34dQCacq9N9d9EwYKAESW2SY4bcq9gzJuKWCaTa6",
  "key7": "2Mo1hMQPuDM9pwHFVdjkdZKcpdq93LMp3ggpe6XFy4TezfGAYckxD75zyGKXYEf1WwaFLKBSjD7wbcLwh7fuCQac",
  "key8": "cb7TDLxYLa8AUUZBGfPBJdBgw2WZw8FfnLboN4SxTqmCSzdCkbkBBxhPETUatnAD9GpUnRRPQVDnmF2ULd59GJ9",
  "key9": "4UE8BpH1HgPeJNwEXV3SZDeMtecuP6zEnpgJE9pcgcvy4uTEsj5EnnphfgxTLmwdduQ6cLffKZCeN3vKPaT8zSDS",
  "key10": "8f7GG48Caogr1s6vYjepKeCy52ZKyG4qnV9yUjKQXmwk1QkKTANk4TomiBKfUmzCam1FohPuWhn1Fja3RF1XGjD",
  "key11": "31iDMagEXaJHmbanvhgdvxXwZgiFXd74CW14khu4pD82PXzfFC5ykRUMSrZAje16ZfPmVt5GjzfiC8e1wVUgVcCF",
  "key12": "5EkyJUPGJCnFFP1znRfKtntVvMLxhpT4qo8yAS5zzkAWkdqKcJhh6cvzucKSrLXH4Q5GqpvuNtALeiCyermkY3Bp",
  "key13": "31ikLFXto6qFFaCVYoiJEccwy9hSZe15RCWKWhVsdxyKRxzN5zbgbfBLw93gNfw2u7Xa3DCnMFSxVnktbDBQeEWe",
  "key14": "5BqKpdcU2RYwA92gghyUzkAwVCbBWZR3KrbhZkcD6CbZhLc2vT43pcWqr6jYwSSfkbcHnrf4jGfdHCsurqQRAxoH",
  "key15": "3FeQxSS5w7P3P9QFkQ4o6Bf43BpkiSfYWtFEXcLmaXoFRoFfWmefWSkaejQ1EYoV2HBp9s93ES5otkLG316geBjV",
  "key16": "35Pjc1DttAmTW8uoiU941m8wTTg9pJtVVB23gRwmCNwDjksDGzPs5u3ySGzbGErBFLKvLfWfyeHZ9giUvU5Eg97e",
  "key17": "3BEiLb7S48UJ3RWXMTYZ62EFEs8CHmztytvFsy6diiSBL7iY35xMkRrNJXGvu9QZUSZzcf7ECZ18kfPEKf1zPJLv",
  "key18": "9fD3NGyEzG9AQBP9KDqs3diRM1ErvwgcQwtdDkt9nwF6CiRmTwq18eftrCaeNF3J3AD4SY5jxXnwhAKxvUPB2uU",
  "key19": "5EEQ8D9o25B27t8te2Ss4qc9SBxdn59EpzA8vJjy2GZYhyyviQCqk3PnjTxnWX5ecdar4DM1s9Wy7uFcs6pvdQjG",
  "key20": "5RAeTmLWgbMM7VWAAufY3mNr5ktpTBLJadTCnRphyhEymm6CidxjGeMZ7h3DRHTMjgQAL6x3gFyPB6kMSW4Md24B",
  "key21": "3ekfoLpuiG3FAxWEJ7vE1W5M46oae4obbth2HomLutnv7gn9ErKr1j2CbK9AcLLD6XgyVSanGHp58k4ijCzSxXUG",
  "key22": "2hUqdTtBzw2HsCWs4RjH6WTgbLhKxVrj3Hv7FyoVwZYtTzVcVuCrCZATGx9q2QSxBhC7fFJUTNXGkXGe8pZ9hY3e",
  "key23": "47k9qtVTBfqDeFTharYVNJfi5kmb38sge4ZgXFCQELarnii6o1AnzJgi4Jovzuuhma5rAK7q6W7VRPmpAZyqgTto",
  "key24": "2hb8XF45JmgqsaSHDt9eK6gvAqjueyuJDkDekm8H9hnAvkStDZ83z4sDSxU4qGz7uYmvHCyfzKzVGek3R53ny7RK",
  "key25": "tktARngFCq1nMo3fqmKa9aAjy2f52ut6wL3UrSzk4njjnH7ir93bDGp2UCN2ADiWfPnZ1ijKWUts1D19ZsPvLqP",
  "key26": "469GKSPcK2EtZ5SHNpx75drPvSWM242R5S4SK9n2T8yb8qaXqsVtSoauGnJ3xqLhPxezNnZ9Gbgc6b94CEu617nk"
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
