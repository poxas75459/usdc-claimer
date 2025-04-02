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
    "3A3skX5Xwm1V7mnrucdWRcGMQdgWB6MfTcdUCa3v51P31h7M1uNCrbFu2ZN5pDKCDo5EHYKcanw4GATY2dpTVUa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mFWJAGsJLU67iizxpsYMKWSpAXBWKQGYgRxDAuv19LsnDNbfaNcxSefeb3zdJgG6uHDQwjd8rTzr6U6Zmg3AtCY",
  "key1": "5zrF6dJGNXkMNupTWTtiALDy5ea1KAswwQErQDPCo3ak6X9Ziu2Dasfaq3dgGxgjhQY9CMwESSdzyUrfZSUXnCnB",
  "key2": "2dcUWxVnSA64eZVvTRZ65Ep1LLBudvjHUUZh6GQmCWpaMxMg1mYvmfebf89eDzV1JKWrvE7TLVZdX1nduBKhWebr",
  "key3": "4vMHF5t191XBU7FaA81TSyz9oTRrodLsvXrUK3x6jS4L8VRb7btHxv6dGanQdixCz26D8fM4J2K1TVAyewGHLBiq",
  "key4": "42y4Hj1YNZdWyEMiMwGdnM738McLeafsuPgFgxaCukytgU5NQqes9o549dLdMMUiomvCEqYtW6SDk7NXdyrRNNfw",
  "key5": "67cVUev78Jm22Nn8uAimSs2dx628SADsGYhjsdFNswimsq9B2rgBMYF8QRVZW89tz7SpW4Kh6VyYgEuaRpHbYsSP",
  "key6": "2U1Y5XDKKHJmPNaQj2v2SrbVuZXQS6n81fjYdqYRKJVmcdADkcj9yev8c8JHcfUk9GyWRvT5zf83qSpN515YvmrN",
  "key7": "3PASCcY3GDweCi4RUT1CMASTx5uNDFXbdCHFe1FKNNgcAgzbtmEafkzc4LBtwJLgLZ2i7P4PVuAa4oMs9NxPmn8n",
  "key8": "21SntfcHpaZiTy49ejHokzLLJsq294DdFfSRqDJRHXLbiMX3aFEKM32BFQBsxdoPRCAopAoQjfqp5NyKxFNZYBQb",
  "key9": "3veUqJMuZRCnHGGCftCrwGozT4b6otjJ2sFV7pbauGQwbmNrSRAY8sd4hxxiXK7GdEPj4fd7ZeNzQ87SqE2zC5Xq",
  "key10": "648KvTnNXQE2JSUJEms6ZUfX8jPjiYEmVq2ncPGnPVb2B1YVrzesfEX4j9TVSy8NYyYR4HrqEGCzr2hP2rdi1SuV",
  "key11": "4JDXEDopgjFoGKVxCjr5RDWHsvSYz7af9qfxs4etESH9RMwg1RPvt2f1E2f8wDEbQpDE4kZjxzV5xWofdAQRNrpp",
  "key12": "22otz5iFqnoNhi38hH8Vdm8F4Jem2brdjtb5KL7WDAjbfQbhar5stAxgmcqpShH9XJMqR9UsMZyuAAkodMWL6jny",
  "key13": "4TvvrymvuDYtro1LesZzVWSxNX6PMx9M94u8WNHpFbJ32ADDoJY4EHRtA6P1dKEsYfR3EGHi6fAtLZB9UenuF9gq",
  "key14": "5GxRkw3e37LpBuUayW65droeKmqZw4sqhm8pRBSpNAB8gZMRMu6MunyC1MgDQz81MqEnXNkgFg5RNrnVjS6yk8TH",
  "key15": "2XoWQzrgdPBX9pneVv68bafuNGQUf3ECyWQShVBoLvnAxcPoa8f34x8QG1s8hpEdhAnnEm67n7RjwDjGw21yQWoj",
  "key16": "2TaMFprPXEisFgAH7W2zehzvzrRWhdotJKz2nxunUTuCHjGjsnC9vsi5FHABQjUfn366FogktD3K1cEJmGyye1vn",
  "key17": "3ThRnKxFnpGWsj8yFajQ2tX5AvWA6Xm13F3K8j5E2eW8bKKNeoAPwrDWPLKVrRSHbEBPZyLCU1u3mAjMULa7JS7i",
  "key18": "4i9B4CMgPpVMUfPnrcxhSjSQDs61DCMYBMNkLSZCF3LhbzMfH8yby1GB79TzCCR7cKdAJrENWbjNrjaPD2Bi4dCq",
  "key19": "36tgxEUZkMA1xBaHXf2wTY5UnNcEmbWtPfyiAdrZpQw1rk2yEgGL5yW1rE3UeAwZoWrTAzcQ1Ri1DNHN1uUvBD9w",
  "key20": "2Fq8K3cfGbwmFsyM9UMUKBMFFX7dCwEZiSBWmEMb9J8Pu6aMNtUgA17cj37pvieuk8wej2kR5x7SRzRBiNe5Npqu",
  "key21": "2oV6QJpjoeWuxJ69KogdPnJQQ83GK57mMHQYUv8ma7YuK2bQJ12wpaWH7xGhBa6S1AQGCjX9xr9hu5DWbUkwJXHJ",
  "key22": "vEcwmY5ZCKw9AfU1s57pHcXba8sBLaqkXdniNu5jZrbQCCYP23q753cGsv5wjxd7r3nrR7QdVTPd75DSMVNxM4M",
  "key23": "3Z5NGq4ffcsirYYEPhf2C3S6mN38WwUgND7DgghWUKzqujbzPaZXsrapqZQo3ceS1PSpbvwadtoqA3QtpNKJMtFu",
  "key24": "GBNUV5dsJc31B4BwBg6myTfziPv3Jn2ya8ysiC2wg419q2h4tKV9B4LvB5JL96tdh45cFPKZPzMBxJDX22FH5Ym",
  "key25": "2NjSXHEqGz9tZtybsdvuoydbkBjcuPAteZT5WE4AnPd3UhXWfxLzXnHwYPfhiMAzpCo1BrW4BXXVd5mmoZSWDhnc",
  "key26": "38o699Hbk5ypzqz4FxDxxgngmgB1LQwewCXVZ287wZxyfyvcgxdBEGmoJ4pmkjxa5HtmbFK3Yu4gLxtpWseZFNnK",
  "key27": "2DSpwSfcpX91NipP6Thst8LME4CYSpyXEirnNeYHNvmgUmV5Tb87QqXnGecwBQtN1Prryh4pJWjxZV21vfr1KJx8",
  "key28": "4fpfDcNNHmiaaHntg3zVxC7wTaeAcw4cXf6y3uGtv6NyW5xC5ck8THvZ1JqMg6k4G1tUM8NPV8oXBC6uty5YckWW",
  "key29": "4fs5CAUEp7kmzpBua8hQagzGqGka7g9bznDdNQqAhx3ME5972MBiu6rNr1MWUjLXYjMysn5KU5Kc9hwMLSBhkUwL",
  "key30": "5cJob2K4chVgWNegEdKfbrXaKFx1BdXp2j8xxqt6tQRdJVeBb9cUSB7w5boQuCDxwTRhgRabVsyzwLr7ezLHkcu1",
  "key31": "4ZgcR34icqy9P8f2ksKUKWNsowCbHSLCxrjr5bWYRmKc1cdE2Ys6uDZCHLVgGYhyPfp5AXU2fgY5YJDxCFNrCKxv",
  "key32": "4kqHffLFgGrq1UozQhgLGAfdJC411SXAUiHHaCMHEubiXhirdYARBTBXQpnpuy8zpYpEaZ67zfvvaLw4KL3j5fWT",
  "key33": "3gFzwU9iwkoWSVmhiP2qQ6CL2ngnDipjwu6E2JjzA5tz4oQcN2nbjXKdN4Gc8fp8muoaHxUWZdBfib2R95jEUpcU",
  "key34": "2bPTG2NQEQ4rKWomrdnVypwvviYEqueAvQ4wr4praQYEjh1BRBabsHs5pEmoC214cMzWda6Nh62GDqDyQnn76EqJ"
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
