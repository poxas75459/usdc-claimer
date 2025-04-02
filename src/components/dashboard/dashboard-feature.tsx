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
    "3speRk4MqgNMd9mGqbuzTk4QSNgM1YqfHPVhEoKzk7BDLJZNJYu9H4VZddXkey12QkJbA1Lp9WHmLXjvVFWx8Hx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2g9w8rjLiLZTEiGoEwA5Ekp1oa6NvBvEb3akk5UYW6Mb86TmYDewxA76DP8ZfyTXSTnAmUUjPE4dLHdmrnGUvn",
  "key1": "5jBwT75bbspzvnBaWdtxYWFP8Xw7acjMXJtbWeYBHoDztLKg6auVUhcadTw4FJwFTf5rYbxL9eXwYShAnTaU7P6o",
  "key2": "D3RGo1rYTLeb1RAMiGh7ZTeH22EZvqDb4D74Sc88urbHSnnTfKvq3c8CYm1J2k6U2nysVu15GV29TqUhRNvhtqN",
  "key3": "4dY72DvZ96CASzjANfuryrTHbrpFDn1R2bq5RxuNmJ5X2DGmYAJWViCSuzZvTh2NZ7J1TwMNydeTk5whxKnkktnB",
  "key4": "39WsNuX2J9SeAjikqeKWHxByQK8ixkBZs931y2PkB6uW7wqsRRZ4FYHpacqDj88aSAV5AhC3vQFucLbnKZuouuyj",
  "key5": "245HoaMBRvrykzHARVWumsioPPfu5St34nTWN6uFmoSjGXwm2SaGu34Tvw5exqVnnpPNA9L1TFt6HBUm7hcEEbm4",
  "key6": "Yh3aQbfp7HdXqvcfmkYaSvr1B8QpePRNLM4de6SR9fKJtZCacP4ZynW1q8bbWZpmZCmDw3RMMyoAMb42VEYyuRu",
  "key7": "29VzCTnLmRDL5ua2zGJRHYwuCvUQapPSwcAh7j988NW4AcTguhKQybu4j6YwRpJNhTf5qbNiJfcypP8nYcZiouW8",
  "key8": "23kdJzkC7dMBERCKfkRoMcA7xyqXaMKnAbBNfi1CEzLiGKcHpCGwMdD9iv1VatVps5sNhaFCS6pekFb5aBoLvVrq",
  "key9": "5xCtdBPrr5AzkJfTRCaCh5uBoz4a6S7fmp28FuRCXy1nNP6wshifCWi7cPHNG5yFecSUFm74EvYdPVwrHasdbXAU",
  "key10": "5pFFziuQQXKKHZi2xfVNzcrrJjSwizwEtquvt3cwrvzB4R32Jsj8rLRB4cYfajAutt18UPoUaZcCJ1sJJutyuaWa",
  "key11": "4BtSofD6r2Jn7yHKnbrz6eNtWWPLpNLVVJqXaYdPrMghZUaior4a4zQwo8F8WQpxDTvF6CESpjVgy2AdoagiNnAm",
  "key12": "4LGYUGaEfjESy9JzuV65mmMQrwcd8uSxJparuVw2tjcd1ukKZcnXhSm2ExcTP9CtpMhtcmTsvTyvw1ohvW22X9S6",
  "key13": "honoycJUordWWb5oqYevGsfg6WnTcXL8UufKptWaaELgpdK1XLPHX3tYZYG8Y9uFv3nJH2iwvE18LF8QcRoYs4d",
  "key14": "3rawupTVEC1qHvcQNtB5gvMbVasDr8CxBQe4WGLsNr2MMbDDkUi8oY49jGkWQmsKhX5UeDEneQL7tTcyPHeu3LJj",
  "key15": "3TyEfJ85r9zAuf4amU7AgSmV4m2eHYZdr8L3LV1z1c2EMAo3duh7NQctuKduc97d9cEZ1mphHsuKCNp1ewDrVnyS",
  "key16": "3kmTXdiae7jFSpF1PhohE7FbCjfTe6UUNU2t44KGC9HCzjPFKASd5FSTRYiEhJXkNwMsRxigcevNQRCy4mUo8p3j",
  "key17": "3GwsvverYMhka5Xv9o3yDBFdaNgFFgi6FXS8pB64YrNxUa7G8mb7bQJ5bvyctoqmgwXNq533Ad2cRnqYSgeH8T9b",
  "key18": "Qcj38Amch7gvtTWWkPia8MXqqQh2HWby6ubMQug4BGW1xK2ftQERhWgdKzLUn93qm79pub5qzJWZo2pEdqBjEA1",
  "key19": "3fsGDabCAGoXtNDs8QWa7oDC7qLkrFDHukSrc1F23DsisXzCwwnqomK37MmSCG9fmy4xySBEGQeoYnrmGg5xwibh",
  "key20": "4hi47bQY5HRtvK2vRvkHmPixTiTLwb4QQXRb859NMwoY1PaPSjYgBvoFWMLs6ouJUyjjxcAPAaTsbi2Ds8jViPfU",
  "key21": "2CeFC48TCuXx3yng1Gcm5r3Ur8b4mvqoBz8VzonepYDeYmyV3eDG5KRzPwsRuq5xk27mppfrGKdruBKSkbcWWWHK",
  "key22": "2FWY277Nm6c2hntb6NjeX2PGVBrcp9qqGBaz4b6np9sGjaej2RekC3cVoC7qW5KJkEdbiSxCFZzA8P8m4PsJM3jb",
  "key23": "3FcGWBvTbD7ymnJxQVRvqe2ZqmnY4mUaWNmc8HdvSNCbm7QDK3vyi35roPYpxjNosggToJvXGnqshvEXwW8NXYpE",
  "key24": "26724RxQbRkhxBeWt1opBU4Buo6ZZarUB3MCwDFpBdHTTs6yzDGrHr3oiiQkChUnKGLW6LGvy8w3MsLesJyvPh3E",
  "key25": "2f5fjokSFSD61oQP2fpCa6yvMkmrcoDwHYi4oRnGbD1UEMyGTrbYewQ568iBm7uVzzn5cFBed57pyQmg6RCpN41F"
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
