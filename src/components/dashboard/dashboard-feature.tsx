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
    "2d3AWLeHatwhjioeeMxTt9xSrDBnZ2o3FwqmbJCeddUdpL79bvbNTjUAsxLdbtSWUhbLVrFKj8RAvBw6mrX8jPzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CdHjKChbUrfxYLkQzVGjJWdHBap3HUfweojhm9HKisEiDLHrLdNGTPxGnuDJA9XHafhnmwz4PudXxNXgZD9v3PQ",
  "key1": "uD62twwhJMyoUU6fWu6u5TyL2vH5zzpp6HFHPsJP6DdYQqvTQ9mk9Wd5he3vBpEHcYLtyi9crMpnmGYZQjRBWQt",
  "key2": "5daJD3YpbmnmpDU5w3dTNJPsJPnJ4vMu58PkBYsLpqMo9oCBGuaxQLvCkkLZxxEQbZbqq1sJQ1FZNcBqve8hCBSK",
  "key3": "3nLoYeWozVhcc7Dt1R2ArCPNiKP47hazWVESTVikuwj3nuUPXFyTqvGcRshU2TqJeJG3EEtGKJ42kcQdSe53FMkF",
  "key4": "2SvJ8GMgs6hzSe1RnHCLeENEP25MfuHXtC9ue6VXDeYnnmYBiZtjPL2c2o9Qpb6z3tmXEtKJFM9PQWhN4pJj8ejS",
  "key5": "4D837xuVCiXZ73QYJFBcjem86bkWusmx7C3Ar9Q7VoLbsfDi9J9KJ48UEJ2z741bqLiKdyrCA46fetYsmWUDC9q8",
  "key6": "x8DRGY6hY4iX9JnANxKmDL3wzHmrMPDGpc2fDQKTSi3HBNRawkGxtbwsyQkCPazzXrXVd47AYjW52jmLij6sfZ5",
  "key7": "bnAHYBXijQBM794HS7m4PXfYMSVLswjx6BULMCZKCBvtYPXkXp8z7Mjuw3qiTxjmcbkNrYnkDfH96wXPs8vqdMj",
  "key8": "3A194BbVgakeAp2Nso7GS2xJpgXMWh2LBaBjuTUD5NMV1L55QRYovNNyXkqhNteoPvLpiqSkbTxHFff4QxzSLroy",
  "key9": "3t6mEsuwCLhMKwyr2hgexFoJwTpiUW7bgFnhSErHtwhznSDDKiGfUTy2vM66RsemmYsSYytuD76RoAvo43uQY35F",
  "key10": "27bgJATT3wxVpNk8TpcF4bNoZWuisde5UoyCSWfGDMPkk2hmsNXmuTDj3B6HkYeFb7tzV5XnepAFFV9Q9CsM9JyC",
  "key11": "qqt59SzNe6WnLrHukcw2X2LzjK4bgEsHKpsMdzC8UTSzZeLcEBJnS4Fw9sx6HQLivTigJASnK9nd3vTguUkqypx",
  "key12": "bb3UjJMSmL4WGkvE5BtE1ZQmxqrGTF1bMNiKVQsguFsWQo6xFLM5jniXfhzbyovV5o6NBv3vtE9RwoEpyj4JjqT",
  "key13": "4C3L4C8G7Lv6BscdjozTovB5y1RHzyKcDr4grwoBxxq7M17U9tJ99mGka4ULECczZFZyPNCD672YqeDG8z76WuTg",
  "key14": "5WUwfJnFxz13HS2eJVWX6jCHCbi8KATwdnY5a7EFUozVFomPXjp124wnNdPvk5Va9ddLJmzkXLhpbL6zov4Ddu4w",
  "key15": "2DT99ZxG3WccjFN4g17kQRonEzPw2Vaobib8JFSpMNEomGFWc3sv3SwhxFcAKZ5KhmRmJy8o4cP8D9nSwG966Tu8",
  "key16": "4Y2ndRziKEXtkLGvHqmLHUyVGQSqJHZCBjjfJfPCExDiTpMrAVrqvGtndVEyRMYuRhQYxW4ZyeoD26gWuh8tX2Fd",
  "key17": "49ULEiJ5ogkQPPiWHaCFkMmc9smYVbQaQWa3sTwrP79Ym2CDnhcmiXPbaDDP2P3Q8BShKe8GsgSQ8J4Mw2LGkksf",
  "key18": "4gYCz59nA1d4ipCo4v8VNACDDr5HxfU9GJcbXTgKG1WjAwEVWa1uHuBm8qrozGRzxxo6EXQCFqckMqUwkmNiF16V",
  "key19": "3zdXHKK47UBt1vRc2DMU83Q2KHfN9eNsjVyb3hiiKNbSYbQV7Kd5PTs7ZFujP3pmV6SCpT7fy3PhjPFTL7zukWzy",
  "key20": "4BfstqfgGMki7UKjfDZEe3yaaGockXaLu3ZcxEGyZoRPCCbFoWq7Aan7u83X1ZBxqKz3A7tXPEKV5er97Ko36PfA",
  "key21": "29H42QcLjcef6R1Skn48j1diLqx3LnN8TTQoRVdrNdmQGL5T8yWSGNYN53wFAkFWiUKUnK7yEfpeNqDtFyvkbuUw",
  "key22": "5dQgv99XnFnMQNN9C2PGTRQWK1FuPPTXps6Zmxch9uUsB8zisMnRFbXj2yyrgt74HYw1nj47ExY8dyAvE2LcRWCU",
  "key23": "3yR1NDN55hX4awo7k3BipyB4pmd3VL1MPcHoYLUL3ksjjtVnLVUxCpHobpfkpN7VWoifGNnC3eXnos5ckFpYkk66",
  "key24": "5iiGRkJVFEn1FMRNxPgBHVYbERmE379HEPnXCejt6ounVV9hivJr2QwYpFy9qtJzF29bdigm6SMGt1KTmRdyUfzv",
  "key25": "4vF5xLWexqN3vJV4v9UiaucvtGb3tXTJLpJKiqnwZMqD2AVM2CQK5CgkQfz91S1DfzgqaSbcHoh1B2fMxLLAMBNE",
  "key26": "3jVCs9SSf1cdREKrEfoFMkcUU7MuJPgS9VgqdN93T8SvCRhJZBUnvjVTX9GHsumTfcwmHPVJjQgrofe61GwwA1vd",
  "key27": "3z3kc4HafXL2MGBHRLK6uX3wk1JVEcoTbWjh8tPudGtY9rRLmqAkC4J842Uk4iC7xpE8WEKiQVbhr8RbhyFfs1Ph",
  "key28": "2dWEqhtyFdQEaDhiK7u3sWZJmE9Gb4xoucPPjyLins353XowfABVJJNMyNccSd3xz8jhPW3KeJzRUkM2N5Grc6GC",
  "key29": "3WVXqRKzkADGm2tZspCCiG5rsJLsTtMNK37frwxvC3RNQmEQLcSjWcKKDMvu7J5Aqrfx9RhkqBZ29MUU82j9F8My",
  "key30": "56vSYQG6EaUpXF3HYAaVYcNbfN438jQsKi59DPSSsKnE3iBCzkBt3t7xYBwdwmo4UJgaN1RxNgmUWkqGvuDRwuA5",
  "key31": "4MRLDHo2mUCLjkVkJ2otBTAsTDibPFo8TsXfHwRcj2AH2YKutset3J21zYphvq2nW1sY7TaZwPWAfoxY3qrFrnmM",
  "key32": "33KrEA2DrWsDQnaSVET7cLZeEBZ1aEdpE8N664ygxf2fS4y6yy1JGPh2R5cDMLb5sdEQEk3SUWrnYV1B39jnbsh6",
  "key33": "2huhXWyMau1g8aaKLxGHi7EmFCfPuQdzVjL2LS842kLAu5kbQy8zELT4QbXQ3iGfk4pDkrNsUDiXnu8n7RFkyr2t",
  "key34": "eeegB1PfRYn6S2a4oGBTiUxNaVybbWbuusA7hkiHiJxG47pPh68wHLYHzAVdGFnaav8GncTeszheTB2y7bbE7nx",
  "key35": "4qF8REDQ2gaSabQPYt3dpJGLDrcAnRswrgrFZS6ZhZfmAjRyvr6htw7EDGpPVuYHWNqwxpaDo9YGUDGGqsCHo11V",
  "key36": "39MGGVZmmiKBjG8groxsxbZy15RW9qcktP7AKqGWYd3zMxx5f2gYiDad3Bu8wXC95dLmjBLAqaN9uxb4uB2XKbR3",
  "key37": "5qvTykjQiwpbszVTJk4msVrM1xrjm8S1HzVKB9TMNfonNjy8rdHFBrQeVYhKHcU1BWbUVTZdLJWWVFgC4rR8PgLo",
  "key38": "4CYByZRwrYghKJ1Z3AZMHZvMZbbNSS11wWS8hPvsKM9bZvpVC98zsNR1etcBYqxrZw3MrsnBwf6AF9mBP1W7rRnc",
  "key39": "4sgvAS89yRswPgWtAk9vKRf1W4hTUNnHgYvaju9qZpZcZtCnKLdzsnEJrSDdxe9CUVkLMwFeBYE8EVRVQtiUhQCe",
  "key40": "2APMMpG9um1StmDLyH4wVzRk7CTzpKYvGKPFmDMofQouhL6Le9e6LuV4sjWKGyAFPMHj1Bbj2BCd4ZUsM2j3KNu",
  "key41": "4M1aPoit2CxKnpM5aMdsckd6cb3q4PpKHe4Rbk37axrFdHBLSaVFj5EjQaqwu2xzjrWxKhiU1Vnnx6fT9uUprvPA",
  "key42": "49hXt8hNBwWXZXZpmHimQgSH9AcuBRZW5e2gNH23fUQqSApV8Y434kkprvNWnkgD9rpJpFX26Y3K4spz9WdETCb2",
  "key43": "2ySpWdHJPL3tU4R2z6c3f3AcnkcvL46uPBiGtoPZQCzZC9k3ckUPKqo6BAYH4v6JF4Gw1y1Axp61Twp9kuYQfGTs",
  "key44": "3EhtNEeAuKXciwr6Ua1coiosfSmYdxNrxaGsQL28tpsBEo3HfnNAXhLuL1dUphWxU3AbCVNa3d3pfmtuLWFXBdH",
  "key45": "2iXh2D7pcLnYdfS5cVWgTQiWQUW1FziaA5f8TtqSySD8aqzidiSujS9EULkGj2J5NCTu5YoKzT2ZCtstzijD3tcR",
  "key46": "3t5Wm1XeHrjaVKSy7ZzRdJwea77FcyHHcMn5G4sHbrohPJnoWgvoyBpqv2yYsnSKuQJLY9cN9r3qrRbSfCNrocbt",
  "key47": "38KDkHtV8JqhcrQvZ989RA9qMd29LZ3J6NdVKWyTAriN2y1a6K5S5o7BvKcUt9anP5Chmi3S8RiVz7gfrE8wimfA"
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
