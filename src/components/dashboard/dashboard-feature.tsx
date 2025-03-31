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
    "2MEfxVU1ALP6REzUdTZutxUMhEpFaxgf59w3xsTBgdVr3vfs4RW4gfWQUCSuEf9ZWYBbEHafA3FhdoTC7qFAzEdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DXmya1S3Za91Qu37tFunJQ6EcZPmwYeuWSxWJvy3GDzX3e3cURwxTfXi3QaVwzFeYtfwMsJVhsdSyeydWfiiy1",
  "key1": "3Uw87uRyGXDDMoDDEb4g6Td813nLofHEz5b1PBXJ2d8ew54DucH2rpXs8Zsxaf9EM7UgUsKojQFF5Yv3a7yHiWGy",
  "key2": "3s35NJyDdivWQfFUhtSm9uDv1ybyz3QSejtJztKcFZeorUSZC1P61F3fDjs1Gvjpd9DAamPT1DcGDtNvGQ5JJiWP",
  "key3": "4EeLNmsB4zAnsPWxiHj2TrbCTxVCDgZu8RjvF4xgsNfrQSgvvL6rK5Nj8bchqkMtBAaw5FQb5D95G8fsaCUzbXYm",
  "key4": "3iQfXgdPkrPiJrjaDb1LDqC8a6uWtA1zRgjPSPxJwVHioE2nNkdz4fzNb9xfvQcztubS7mXwsJjAjXtw9YAw9RGf",
  "key5": "4H27uL3FhGaz2r74EsZpcBoXLVsLgfMsyfZp7FK8UFQPpgG8YkLzPhBh4PBMsmWjLFCJKHyYURsT9WAb2XoPP8kU",
  "key6": "5HuVMh1Be5uwGxsKMsZgDENpDw2jVNUWHcVPE2GmSs81jbobmCm7kwcgrZYmR3h9fjPCXUiJtWKzKLY81Bt5ChV6",
  "key7": "2TsXXoPqzFeEonejQAqACGxhXDo2KoPcgvAkLDbBStopeb3HSS9JMDvtUrrXqWg8e73MZKw3958QcY6NEEKPUGCB",
  "key8": "BHd61riZYKsWCZynMGn8gUmcLEXJJygbjUMKzjr3x2XfnyDFBrrwZ4Hj8ha2eTvq5SV45VNgvnFirJvF6gqG7wU",
  "key9": "4erd86cFTbPMt3B5TvNW4dXhoW1zHD1MjKK3k1ucxy1jmVPiQpDKfBTz4RqMjn9dcQLruTw5kGNpSXdq9PnMS7Zv",
  "key10": "2wNGd861caTWTovbQriTxUvCsbe67Zey14mo7uDCg13HNXvzynmpiNyCww3LReyyV91yLAagQCXu1m6pDBrgm3qX",
  "key11": "4n7vHwJmHV2rMrvwbDsbG2kajS26As4JCYhcJCorrpKBJCmF4ADe2RPb9AUZjYwoUipXamk5u9EN9h1oWCkzETN2",
  "key12": "2D3gNLjFiLdtjNpSEDxpGYhAYqExTL3f8oaFV9i7y4HJDGtGm1C7KnXrQN2pLZ8Sh55xyBeD36TTdPuCPNRxF1Q8",
  "key13": "MX4y497kPU883kiZAFbpdCU2sR9wubCqk29TRQgErjbyRDvxeskTtKC69RxJrF22r5KVaq2AGGSLgmi8xvouvm9",
  "key14": "cpu49GXHUt6mkJQeBBHSbVZRbuQEwqXzTfcp9zUEEF5meAhyY1J44RoCtrDz81BMGFwA1wjVN5GrWE6Tf8egKfx",
  "key15": "41vi32CyjTEKTUz5jc4qJoxSs6UwYEz8YFjd9xBG3BDt2qPgF3MGLT6Kua5AEyuNTEshgxkd6ypHG4pRJLeUVZyN",
  "key16": "25sGZojG6DEzPn6Fs9prSuH9Qt1ohw9epCsa7d9uznoCrLL3QXPekw71aFNw1Za5TuUdygmwRfu2maLHesKQdZ6x",
  "key17": "LNjd3uBTzSrBaCjG5UKV1wiDJnLNSQKMeRtHUE3zgFkTuTAtUkKDKMMkpJCLjD6bw3aYTBvnmjcNkwxMdWchvX6",
  "key18": "4Y6WqLF4J8iJe6WzPzA9R21rsGcwjrDcNtJCEqeE6ZfSEmB88vDEyXaAHhBEtVtiknfmihJppMpnRmqMspEDpzpN",
  "key19": "4hRyeBL4QtpsE2cXNeYoM6z2qYyE3EjgAS4u4sGyVB4jU2TRD3A1KYfo9sZMpaew3WzMYdibXVSE3oXzFtC4zVPr",
  "key20": "S9pRy9eLN15APmnPEEw7sHzZ4pbat7i6g5Sb9hUcE9RDkEdGHvyZCGmbLS5ZPb5VVpHKHGjgUkb1zWDxsiVHidT",
  "key21": "4WYXV82sQf3mwoEt6Dya4MT5HpWkwVTgMezJ3nWhn1gAwFDdqa95qgdXiQ4PoHKYahtA9pR3ZN1gc71HZSxNtiDJ",
  "key22": "sxH3FJNzK2Qj7ujCyUojff1Lv6jGXrUseqn9917QWZjo2BvgWZKx5PiqwE7Qq8ZznQDchJaXYpqTQDWQokHunFi",
  "key23": "4siMgPfMfWKoEkS2hWJVfkocY8RmaQ5MjB6ebX2YcpeCoZ4cc9aCGecFgiTkNuojLSvXX8Te5Hmas9X2ZhHKYtA3",
  "key24": "5eZe3eH4nYwjCkdGsQN2A3No58E1aRQEgbLTQix9oCg5cKZdcyoZDtJXvEWfpe7y5bVJvLoALS1RJrJ8v2Urbzhh",
  "key25": "4py3NV9qdVdCXMr7BY47SFEwmMc4GJbwcoYmZLuKeuJn24norrCwXHpmAGc88YrFcbsUP9jUMk6nbdDbBTb4C3PC",
  "key26": "5QeEuneLyUBXEJUEyRJwqbqzPC5nNFwv4L7CZkdiKoTerQ6i5fjGTSow567bGiwdCQSrpwGfgGcYYVenBhWd39L",
  "key27": "53vA42b2sJ7sqjprNTzRCTHC1f6XTPqvtfy5gtuzEq8pSaJHh5dX8XLCsTK7GCYsM5NpYVCJ2mdVjfHACSpHw5YB",
  "key28": "3ovHrDJbU4MKxCx1XFNCpq8cuhcexw8kwKpjXtw8UXmCoPLfg4RyzhBJFT6Xz4S5r4pLanZ7JNkpcJbTMqLvLmKn",
  "key29": "4YsGbnXT5W6nd5XGp9ZpQLiQrKKyBjtZxxG9oFS1c9HNoUfhjJbRkTj65UGt3WASRuxRQEh7zNxjv9MAZBdUpoaX",
  "key30": "XfgpF86s7mvXobj5nmz5U3XxNpPMDfCrpxvi8Qb12Rj7LxojwdKtRLxQvm5UQ6PwAKhjK4B7Fu6EfenZLYStfiy",
  "key31": "2zvFJMx7H2QBjD35QEHDcri3nzWCuuLzUQsim2Z1BGG7JkbfPhSq22dh7zr92RLxJ24nBgeftxwm7NV5EYEHFyeb",
  "key32": "5kV8MQMpDuhzDdYEp1zgufbNwFohjHChWaetzXny8Ls7Egg34deoQLYFewH9tqCqs7NLiZtBJHCK6UEyHZxkp2fH",
  "key33": "VcdqwXasRAyh8QRPnNiGP5xiZkq4AAKCxePEHd8o5yYvdQ8JtSnnRXPo2gAEwhHY7owX5JPh8nz8fCCCZVKNu87",
  "key34": "5ETZBcsMFnUP1DBdfNxzRgt6uD9hbhmrZHfX7Ly9xWkSe7mFUua7ZPCAk8gPCSYNpQAtb1MGMgCNfV6zXvyq1UMv",
  "key35": "4Atan5tHDvJwXBjXzBzXzpDZP5DVpZghvySh3GtM1CvQQiJ6WWDbaXin2mcA4o54mvrmoLhHeTLBP8BYTwhSXE2e",
  "key36": "3n6hAg2BsWD7C5Ybj7TtghMruG6r9DKY3mAziqzppG7KKrRCJ6RL7kszz3yPCxG4znyXaLrLzHnhpstUrkXvFLS2",
  "key37": "45tcTMLsHbz9BCENU5E7pX1dtm1vBhK8h3H5Bg3hJNCmZi6BY58jeNv9vz9fsTCyStDwxFRFJeoREZws1XwiCMN3",
  "key38": "5bqux8xc71HzVUodweXXrtyCJXNf9jbovPCaLWcT6yC3bdTbXck8XrzKQfUVDTu5LuTTmh4MQbHNDUt4qn9P6MhH",
  "key39": "5nh7kYwUqqYFyNKcuwa4Ba24dibXXnpw34WpBLL48iJs2B1oPsGmMHvcgLDXzMoJGjvo4LboNgxtR5PVuoJ6vNSr",
  "key40": "3Cjxh5EJvAuCmEAfiiScmxoiHbZFLMNZVrQLjZfHYVKCuikemJ9tRHAhBQTePgPsFRRuz2jo3gqkfg3rq2XYi7G",
  "key41": "58MhpwDFtzvwGj67sJpLbssHbCxJBrzacJX4EJ991tH27cQY9gjs3uhEKwzTpovuASNu7o14XK4gKCd9dT9R8sM",
  "key42": "hUZjK2N8AMaxXJR3PH95NLCt2oqvdFKkSocZoftZMBNQBJQxbnJMFsyBtXDQvttznvuG96N3QpMPhPS5CvGRb4V",
  "key43": "3Ezh8mS4LpJV8GCTC9f45nyEvaBooCUszvbyZCbLgjUG1MHgPdy9NRLtCcqEAqT8bL9SwJCWTeZ5F5gQkhzMh2cJ"
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
