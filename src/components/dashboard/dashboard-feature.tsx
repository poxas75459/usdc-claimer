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
    "3VgGg9MbxubFLhb7wRqWDqmZdVKEYrGFAH3maX3cYSfrUHzpru3B12fAisfE1yjRQUHu6nypjhufcn4KtnrSNkEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TKk75RFVyZGFoxJrKRaPscuvRTAGxKoMWdh2wNcMDRD8AtCezKGW84F69EdnmDPhq19sUoC77MZFJHP3GpeAuQp",
  "key1": "3m1REDMLYArJPwM6Foa2zAqrMjxphbD4jeTW4HmQaDJWXQrEeCrp7S6WBiSLFfCgd5akzbJVNTyCwdQvF8zCyxt7",
  "key2": "3hg23mru3ark5W5Y77QVXjb5vq6kyny5fkrJtnsn4K6vV4iSQwyfPU9epas1xY9mNhPwure51GJvS1hWEoaYmiHA",
  "key3": "5qg3asPAcrLrpKLMp1VfS7cSCdhYWpnHLmkUS4tR1StiQExGJhANpJxJWgwnaizmk6jtMEChF9BRVMTmheVL5JfY",
  "key4": "2BxVFopXvj4rvwEQ4M5Qgv2fgkbUUurqDs1QZZvsFGaNh99v6RA2DtavzBr7k4FSr2JZFTfbhMD8pE6yYYUBhRXp",
  "key5": "nkbGHTpXgDYY5jfsKHL347PLTt5yz4ssSQVBuCtXDBLe7y75SaLjepBT3VjJPjctTUR2c59D9uwg7NfJF61eqCb",
  "key6": "3xnstkUsc4Bxk7zpWkHTzB9ets8pcuQSZDyGJG7Yc65evtvM1hKQvJCyB2YKVpU7Jrqsr11hjTVrgFHF1mZTPUm1",
  "key7": "4X9s2hJ9L1mPnhCAoP3MyYe8aWicLzZsj1RhGQkdNxsBqi3VXo6AvaWYX4uK7rYtupnv25hQjHWEXGeJThrSz13L",
  "key8": "3GAZSJw1hJ1Rqz4WuVk641cBiy8jusa4JUfCRGbjvgPVA5Qz2WxguHMVmyGpsZs5ry1Pxud67itfw6JRpDGRcWGA",
  "key9": "d9fZiXcboXUr9AWeXtcm9pMtkbUV1YL8JexeHpB1ZkNaxYZWayyinVi2WVusaYpB1D1NpFjXP5QxwsAdAdEbpFc",
  "key10": "4mk6gi9yWSbyfghcv4yTdhkkiS5NkRZN3Z1E6qtxvJ3hVTW6N2xka6dferBL57UB8MHWYEoYT2wogu6ssR6D15p3",
  "key11": "3EFGkvkmkDTeHmFSDyUkkZfekEzM8oPwyqzQ68sZGxFNGNyk5XPjV9taiWoKa69jBt54tmkkiz8w6aGQyymvE26y",
  "key12": "2ywCk2H5oHo9kUtqkVGoJhBPTLU2wnDMoJZi2f2E3ABfNja4us1SMEUWYGuer6CdNg5r7HhxsARKADNh5zvwa38S",
  "key13": "3VYx47QCh3Y3T5HaniAmmhjhQ2CzaHatMqs4uBTTDwMXfaFELFSr8nCjsxQvmgauhPQQqaYCHeyFmtCHt8BaoCyM",
  "key14": "5qD3J42T9uCJZjZgVJcjei52XPmiiEhqNa6hyVCWNzcuECAmsT3F5nsUd1LKTYo9LJZRJxgDyPy4hg7dX1JwXD85",
  "key15": "2f5ByrxQM8ZRiG2Hq4SvmLztHkQgfWXsAQuaPfhGgXXDkgtFE7MCMHjhmJ7MRvLpFpqoqCq8euZvuYm7iFQH6YG8",
  "key16": "5cqCtQn8xWF4KxRkBFxTNMM8CH4AGP8v37WsH5okmpBzDt1N7QhDDqtwTPmh4H9a5jynZ6V8uCWbC9jiAvrigkur",
  "key17": "fKMFpfQG4MywGgtZnTqvHgJMmvDp1oeZHnVxk8SDhsGQGEc897dZwZ1x2QXSEDy2U1aSN8V4rgB6Wz6V61DfHn1",
  "key18": "2QVYBDoBnEVnsJH9rrbuRzFNEsS3UUo1737KknFSiCMkVQyoKYzJwL7q2W5JNRSq7KhyHALJtk6w3aGWSHAXy9Q4",
  "key19": "4czrg5oBePd2jPQ2f8m8isv357GkJfpLqxP9tXaK5FkibMumK1c2tYgXrkvaYvBRdBHyZVUhEBHj9tpnXMK6zKei",
  "key20": "5poRhF5bWMhqgCKQftzTChzdYNNvRXgPoy3z9bbK9WzAygTKhCzM2pfyB6mrzQw6A1ZKCaYVNKecxSoe6G3bndnn",
  "key21": "3mRWrSLA3wFpy7N3Kzn5JyJ5ufuCkctxKyGm7ErvU1aZJMP21wJEsjXkS6uoy8RaFjhKiDbghczy8zKcdhcvH3kU",
  "key22": "2EnLH7iBa9TkajkDQB44ArnpJsBRxDFCyZ5JTYRJDB5JqJeMAmjJnp43oWcutnZaqbBSuvegoGRqsRXLSs5UcM7P",
  "key23": "5rxn3TftToELqwK6D8YJWxAxqWUN9W6CpQHJk7PxgCudru1P9m1qaVE2NpNAEom9W9QDthcpUxMcaT1H3TXSGmdE",
  "key24": "42Y19twkECGoNEDToBAFPhQMDaq8iHohMGnZoGTP1VQLusUxWBdLWu9yc3VEBHRSWfPhSmEwio7ENcXugoZe4pNh",
  "key25": "2Ps9Yqc3596jMY1fHbV1bPKFpP5LE6ByYvaZNag3diAyKGSaCNEEhZuB6Wo2LiKw8x4bFx1EofpEZhk9WaKWN7ZD",
  "key26": "54R363p3Ryfz19N8ALUMdEtmk4y1Dr9j4Nsuu28icCqzujA93NM98ptzMxDxXaK1XqbMKVCeUvVBVJTUam4HQypY",
  "key27": "2R59H1EUNexW5QTHzoMR6Ey3tnTC632izYRC9kfZsT2NtqJjYvb34p1CfqnLjJzSCofdK575Qqcv5r1SBWyVeAUb",
  "key28": "3zjzAJcU9tUCpnZ2CgMqBYG6riaVcpXus2ojyvNtmUQ2t68MwzibPiqiiB1VHb1xVBnm57ufDQqhnRPk5op7GxPD",
  "key29": "45cKbV5XXzs7bAtPdjuBvxJYNZxLvPnPXuw3fQzzqCrRJ5L1TPSpSEhmCec13dkgXxJghJQ2SkZeYRiMsfeQZoGx"
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
