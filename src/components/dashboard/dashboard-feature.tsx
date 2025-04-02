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
    "2jRo2PW5BeiQHiT6dfooqKGEeaEBu1TDZdiiGhmF5aiVpNA5V7sikuVJonrhJxGQ5mKbmTpz8Ty2WH3ZT3VdiuuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVrSAqjWFkfbU5epZ6wfeuyxqTe25YXkZQX1W6fdFFyZu61sUqWNjecgqeRFAiS3HCXTuP1cwjw98YA3s8pDtoQ",
  "key1": "XHBr4pvSN8BMMdh19WNBXerukXevTs8RhkjG981ioyMBe5QBM5s3s46d7yBCAJzVq33yFtV6tjzM7dWdYiB1eHN",
  "key2": "3i7QK18bHB1yxzkLEESVwUS5G7hz1TVGL8gxfko5PdLVyfDKC44REkgyG9yjqdHazwLimdzx2pjQedWeDeU3dmkh",
  "key3": "67Fhpk3QGhkfodtRRHze433get42Bij151iPxdJLKMYr8MvwZv6Y58S6nA8Q6tngRXm6hihsJkYX5pmCZQgfoXXD",
  "key4": "8hC9gmnZowpQVbNEVrZo3ArMghqZYARD5TjDMj1MQEGu7aJ387Bi8doSkawxxxkyQn5NQHQMVdnrAkhNt2Mvj3q",
  "key5": "MmP4DwWpyAKt5nujoNfPiCzWFWuCyTuTEZmU5Vw3vyepMuychdjsq9X1FiAmE7TxcacAf7rFMSZdjsxsCFoFxW6",
  "key6": "yvbsNJxzu1qVJqznrYsgq5JcDbvfrMWRfu4VaSWmkn5awUqDpUAXTJm1r9koYRUX1PixseY4GiNC9UKMVtizoE6",
  "key7": "5GbEQ8aCDhss69ne2cMJuZ758JbjP3fLFqQaqDer8vhdQCYoHLHB9s43ht9SByavxknFwnWbouaRqbX2iVoKsqVH",
  "key8": "5oxyw5EcWUkizZ1nzNf6yzZdXJJGXh9dULesGJ4r8hkLsWMCo3phE4whSvs9LSay79ZxFuJEwfPXWx2LpN6tEW91",
  "key9": "5yCQCtuHLCFH7jvPMZecTDWKa7r8Esgix4GDCQjkHSrZ4ftFct3WYErrcwUMEABBME8xseKA4bzUE1yeu5dMAtHm",
  "key10": "5eQspujEAKHSnD7JxV5bTDJVYHbKtEfurbYo2N1SvgEPTRUSAsm7o1HMocVauPuvQY9WochqekMkgDVwrj9KvW1u",
  "key11": "AsbvLSC5NUE3TWo8FwA4FS8t7kAaHfH8b24rBDC27HdpM5kssZje33kryowaWpTJsNmxgQYQ2CLBiW7wnmGq2eJ",
  "key12": "45tDZN3EjCWwawKaimBxQjWZ1pQcSVwG95Tk5Fk79ewPvPzeGzQb4aPapwr1tTPktHPbYG7bQ5NjpX1jxSsrSNvP",
  "key13": "5NRr37E65bMo6jJjrQqysfmTF7M4WmxoGNFZ7vFHwCvqAc5D5TBQdKLDVRXnv1RGMyQ28m12cMgqfPu7iyt3XsVj",
  "key14": "33Tc4TEkHGFG3s5zXJgNg6Dmnu38o6aw9Ux21BsqyML3DZ9c5cdzyjMpX3g8xYUgEkTxM5faBFRMd9tPAfZq8q3U",
  "key15": "4izT6hDcZeQjJNdiXVcpwJvnMjhRVuwr9GixWfyqnKLd3U1fMvN9ghjFJkozT7p3EouwVxMe4HpZRWxYZvh7NN8o",
  "key16": "5v3aPfkoqmP82cUPkzYTsdG7gHyfvspY5jaAC95QmyyfELRhjcnKFdqDGrTWV6XkgY5vcPrBfN5B69NJrxY5vMN2",
  "key17": "43SJsJ4gLiW35YFjRZ1qg9pY1EUAfc86NqwKGCKMyhLaAXfucbBTH5sq5VdJnwdUbsqd6R3s85axFPSY8iuXDxzJ",
  "key18": "3X1iYnFoMiucDMK6EQBNxwrPzDWSQjxSuohTZmSYaTEZFbKPdjHfEpuFNvuDou4oMznFVwC8UMUD181qFrTmf8E8",
  "key19": "33TEGPCdf5TE3rr7LhxdXgo7qgojEa3ud9doJ5xMEUCRpfzq7DxThdjwfV5jMZm8YSiXfxFWZDcEfNE5Xp7Yk86d",
  "key20": "2y5CpcQFGuGJg7sDr2CjrVZK6vnGHQ3pnBrT48XQ7UPw4gy34mKk8Zt2xW6CrnFkxLYHgJWk3McRN7xesPWM2rsH",
  "key21": "31jSSsCjnuoTtbDJatX9DTG17wC5ZHVHQHuotuKMcJL5AtXyaPfWsPLVQvFFeXF66utucj3hiGL3vMoJKmcC5jmV",
  "key22": "3oFaYW5URgkpZyYFH68eqrhWTenfmqyv1yPEx8iXyVr4NYuxBih3iY4whJTjFNhVgG11ArncLZWCSPiVoaTa5Gm5",
  "key23": "3kWNobCQYNzYgwuwhu1RdJFyY4mhEo7LNceYhARCinsBE45yZ33e6RteXx3DQXvpfegZLeRvEbasM1b3uviA35ZQ",
  "key24": "2L9c9GP6XRvF9uVoypGadZGBvf3FKDoaaFdvmopYLx6HdEabDCUs29BFYrntAdSfTGZ8wTzUaQryzXzSAozPVtMZ",
  "key25": "57Q9gVzFTe2BUVgs5wd9LpZB9oZQYNTjTdYoCF2jBH8En5bkMbi3yQuzKGiSNGrhhLVVrAQid15yP5u8UQgkLvt7",
  "key26": "4MHGbuJ16DVchKmbebDtYRMvjrmJ4orXWHqT6WpqgNnwaQb8s32uwSJXcjXfyHC3CPGDzAHsgRNN9d91thLfErPT",
  "key27": "4tJb8ThdrPbSH5Zwfnr24CKautjT1duq2rZviTcrggHpyXKPi22iSsMsyjJky77wpkKxDNhe8yNqwVYbKNQbA7XG",
  "key28": "2UfrtWuu6Ep4WmpwoT1iMKWpe8ryx9M5ujEh6szbhbKaBxnqqh8Xc1J2SXRdkU96oeuXrUSdzTRkxWrG39fUn9j8",
  "key29": "3CK4JiT6VFKE9Ee26JF3QFfmDns8y12K5RmSajqkX3HqpkiQCBR87zDWtVyssjEthpuReuJrmyBjPoPYN7FgqBWF",
  "key30": "4dTAqvtou7iqwqpPwwKqb67RG3ryXvQVGNqmAZQjAqq2D6fmYev7KfqcyB9cZL5Yan7goD3UJdnQGAvkP6mD13oR",
  "key31": "4MuUSYVEZXvqTkXD3Go3jjfQUbhhBP3nNhoGyGMZa3Tm8HADbzCueuV4ngmqk3uRLK5L2nwcvv8SkqhCzvKfctCm",
  "key32": "4qoJfdjjy7bXA9wzXimSaUDVddcXEEBLTw9y9bVLFw11q5fvVc4AApFXpqtDKvXeQt9tCwmhBzXQwhgJ74VajTrx",
  "key33": "xAeEJvVphhJeLpdAmiP4BZZaebM1Sqyz15HzNmhzCLYLkA6XvA3GZEwvWUKFrhMKuUjdQ1bV4PHqKUw7UyBETVd",
  "key34": "4zYVWTmuMRJSpir6ZW9XFrKT9qty64QTbktEXyzMEFktxioMjkfC38ojP7nMdyoPTeQ8wHbjyZiu5FsthpevY6ju",
  "key35": "31yLSTv8uGM9pMsdfCJV5T5FrH4R4fiXAZbYEYuo1oQ47QfhG96vyYVtKDCqmF6JWUiKJLB6YpNTkqTqhXqm1bHE",
  "key36": "5DRmzRkuoxJy8dig3gZFhgdw7GaQpQnznp63aUB3CEgzPAgZAXdeL86ADE3mdu9E99nKKyr3hfdvaapw88ivXA8Z",
  "key37": "2arw9zHgEKkVy9GJnVa5RV7i9J3Nic6Z5GoEs1poJNJjeisEyLRtWA8kzwwp5gG2GvfH7BRQiReHv7yVNCfKEsK6",
  "key38": "4oUFJeigEgvzEdoujdAJEPEeqYobMpari6bYPuDseLtXP13F3bd7p3NhcS6ku4H1rTDwrqn5XhSFkXFyBPAysSUR",
  "key39": "2v7MweFQKt7mTBvVFUDHw6g81cqZ2xrM6ABrQ7pKPd32M2yxB2LnZKtHXDaDx6TrabnZ3QDBkasu7xdRUMtYeUuP",
  "key40": "4ALnobHaGncGurUPFCXHZyBQanH56dR7k57BdqY4No2efiisN1B3zmQ1BteFjCbmHPthdsnXe53z85sb7ejYXzxZ",
  "key41": "3RrWxecz9VEkLo7UmphHhUSMXUnTxJQZaRHVH9NdeQPvUTvQE12PmRNqZvat7nwQEtWfVwgcVUh7DY3W4xmRLcSL",
  "key42": "3hfmgJig9b6DepnQ9pTE8QVaLncnAqnuLwzSnQ3ksiXB4jbn4RkX86diGinvobnha9hsxGwgwPqV55WmxjcLGGDy",
  "key43": "3X3izt2MyE4Z3g2grosdYbp7mGH9QLjmYNTaJANifpEUj89D3gPLwhvku6NTvJKrvRSs5QxU5dRZPk4UQ4XE4BWc",
  "key44": "5wJ8X3cQ4fZa9aizPujaKoQHPaRZ1LNCwnE6hB7yocvWdUxo6H9G9DeKb3X7x5kqJTgSWm7kJGAzAFAusUe3pQQm"
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
