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
    "3p8duTKGAkktEwoDeQPXyzeGVqf7Hn5zs5GTPWN7hiUrCXsYRJYMuEgjymFLWVe2SpzbeTn1eWES7R78BH46BTEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j8rknqSNG1QmmKSDEBjeyFeNDdnjWcwx6GBdSbSdneHZuExW8omCPX6yp6ezBt9Cn72qkGFNbg8Cd6daeNxKqtq",
  "key1": "45Sr1zGYPndwnnCSFuqtpqgxYn8jUziZtoKwLGJ8pGGCZkVBgpzQxj8j8hfq5yKXgRi8A6Vyt5vFdkXtVUVjH85Q",
  "key2": "24UU5fPVjnBtYpw2bKxeRZc6UrFBGiXYRKmXXdtth4fqeT7H6k6Sx73CGLdwP6wHdUrc5uyUJz3bpxjCoG4UnuAk",
  "key3": "2GsEzByjJTCtWAgsx9t9bobtSB9yaEVzYAWZpxZYZcrDGzaeu4wkW945zYAEWPUo5fyEQbaeWbmTx6qepLWghEJB",
  "key4": "2p26ofp2ZBi8AqjD4yoBkivWw2SZZdw1jZ45cd1WCEJnpDn1xVTDqYtiVe6iBrcABzrdi1sebpJgdiVf2cUFuWvC",
  "key5": "4g7rvXvLBd7aaftQ8wfwWfc6WTkMxgJenMUQPXcRqXciuL9rGaS3u59ZCukHHJEMyjRxoHF38tX3YToe5kVR4xDj",
  "key6": "3pjc93ikcRDMP15D1xquH9uJZyXTCbS1AdNVpuHX3yygbmCB4gFkMDNeznkjKoz2xe7rosrh8LEMQQu92QG5QeTS",
  "key7": "2SgB6V8qq8vofUQ5Y9JXZkfubH1EDUJkaARrEFexeyVhjTUypdaGpuosHJBY6tGT8yvEfJB7VWboRFjp3a7EbixD",
  "key8": "tkAcE54c1b8uBRaVbYWPk5uXsdSWHU68ikpMyjajQK1Ab21MVC2a5nefSZDX7oL7aE1SwKPwMtP9oYbYD948Jfb",
  "key9": "3iH2hwvkVnXMa56jKJtt9Nb65sPiakZz9nRz64K76XabRogKaCAiHF8XiDf6KXgFWyZv3QKYUcoaA1WPBkTPESo3",
  "key10": "PQ2AjW5kzp7bZh7Pm36Bsvg8zLyygT4zsNmw9bt1ronSdJ7WKhhRT1LtBmpdFL7QSmSxBynNa5oFNqx7ZXa4ysq",
  "key11": "3N4XbJpQWNaGM9p6gUbiGptrtJj9dz4gfUE9Wd1azyvCPZYFBWuZvNAPbREor5iGo1QQUbf5zYE4Vw7eRQrf67ES",
  "key12": "3eJGwpsW6SQZVL2qq855bjipEfhaQpxRXoyb5MX8fzVNxMB7w9SrRskaUmBMFoghJBv7ou3DQqznUbHjh9ozZG8w",
  "key13": "7qQfVpS7niSyaZvJjHALHcTwZNa3Vb6PY8rntjxhxT9xepfkAjqvAfsUPmhuRkiNfm7nf7n6zzcqrdMDum1mdKo",
  "key14": "4qH1xwbg7MdBGgHEU4JAFPHZDLgyCiQfZT8EJGGFxnAv6zvPFpSbh198hcYu5vK9vDbpbid6MFNyyUqBYhy14qtE",
  "key15": "26KCArsT62nGoqnXphNbrtDujpvGYpoCJpenFHFXRCeZQbNtx6gjiuXdQCd2z1y7zyu4gxofETg441P15b5QzRDZ",
  "key16": "4dSUYZYYiynVXkDzzXji7HVF8yWLEEs6kP3NMYHdJF1dEzUDxTCxUYfayH9oChdy6NWWwwf2eSGaoisRHgxqFofs",
  "key17": "59xk7xduVrA3YxNca9uDzGhd13n7abR4VX83Xhr9j6VbdCg5M59NsAmybdTaKE4JyxUaPbcXiCydTFuqiMbA2jJA",
  "key18": "dspu7AyTA7PgucQHqMbPg6nW1h9C2BGkqhhxASuztES2abEoWUSfdUHUjNGkEuDiEWtZLNaGfhTHQLz9onsk3uj",
  "key19": "3ruFc7Kz7VwScKzekBGRcJfeFDu9J9VtoyHLbJLCxdC5wJFTnHgmV47SBD8fTXk3aUAdytcvs6dz3XkCmKY3cyqd",
  "key20": "5pfVh1TRtUfHPStpiwvtkCKZ22BnDPg7TPcvSdSBE5TbP4vnwpbViP8rSvm63QqYHQU49yGbTpdQgBdYbND4zAQp",
  "key21": "5DiMSN631XYEq7qX2xt8kj5sQartPnXyst6hNuAPtdvM7QkMFp5NSRBb7SmVhyjLxLNoh6Do4ECtCucPbB4AJQQ7",
  "key22": "2fGe5ZbP7Esx8k5GZaVPGCzp7tNLvMMgEKt8mDM2Lw4NEPdrgrPkQgxmKs3KvyyvPZGy1VbpvNmAmeHZh55764pM",
  "key23": "5ytiyE3SrTP8TUAmUyyrBWbmGcE5Q4hwuvdKL4W2yn5QuUXS74egHLdwSi7dcCZ7DxhTrUdMfZA1ygnPYBop57Uv",
  "key24": "4xAcS2tVWzbe3tFBJq1BBHFK23g54Y7B1RYPJnrL26zQ6ReJRHLzLwTEMaMhUEBTKw7DmfcsufTJshCh3dn3ZqS1",
  "key25": "2rX2dJWY8sXdyYRt4JLyGVQ6PCAtxfMcDwXLcQcBRBVHTM7xrndfjpXpoFw24YC5B9QhyUSFZgXXLmF3tVoNivQt",
  "key26": "58Q9G4C3xCmXp2HMAaSaCVEp9PsDrahmtc7FXbxkE7hWR7ix49YTc77W8VWauWh6kNDnRZ9PDR22b6Lhw1Bg3dcG",
  "key27": "5wtUBZVpHHba5GdsougyLNuekbS1BNVcFbKs7TnErhSCM9Pp5vE13pJE8aLEYzvgNWGXEGYi2Ws48Vt4oJudDMTb",
  "key28": "4qh9vbYTjEAGxg4d1EZPgWmnsrtNejQzCXRnm2EGdNTiN1qPBjKQ5fxPsW3w3kn2JNSQbpmBBMwB96NkYsUnAvoB",
  "key29": "2iuuJvvXAruMaeWygSaWhEcebTs4XK2Kuv93f8ufKgBVZccxYyUuoxxNUFeDBC6kGWaMew1visvVJrLbLvrLX7Zz",
  "key30": "4SM1JndsiAK28VHH9WdjqAcUxyQ1PC9ezzh4RgCqJciWcR87u6owPwWjWWF1zT2QJhyuoFk1L9ySR6vYwo2MoMZc",
  "key31": "3mJZKatkPmg5DSLEapsWRy1tEGw1N6YCdB4nqBPGBvGg9heJJraozquzWsNP1CMjqUtGUujyh5jSsHxwmSggJLKk",
  "key32": "3X2CGPESHuTCZbhahKLJBpUSycDCt6NwBH9Fevefk2knRkhA62vJnQs5XfADq5oz6CsJ8R4D6EyUDS1ztPSEnFiK",
  "key33": "5ob6K7cWUgHSikV4LUeqj4t7EgdjJWYvmPR95RjPS8gkKtwcWvvpz2qi5vMX45KiGKZdh19HKex2DxLxE8fFjXbF",
  "key34": "4sBZ3n28AuMuCjnAT521zjm4XUGFstC8dkfPDmLZj2eHpa19A5AuVBXkq5Ws54rxDvF4KrggQEFqRkdzjMDmg4NG",
  "key35": "3fXhuvGCLN15jrtRux3skgYxRaGryoYkkDJEsnvYW3ER41JNNoGjCjBMC8vRm7cJXbFE8t9mGS5HfRhd57GM6a12",
  "key36": "rfTctuGb9iWkDmgKt8C392145beTDgwETXohByVesqMuBfjvUte5KFUswJLc8CvgcgrPF8QF5VrBnkLSiFR37gC",
  "key37": "AgsRa6mJZb34dugXuyPdNia2vqhcLaYeq73ApzcXqDhFEgmyYR8uySm4f2E4YBcFokWNyxpCXAELnivDhrn7F6v",
  "key38": "DBPX6v2xza3QBgMwdcckBYpXWLmn1yPvf4YERX77cZb1jnorDkYL6uD6DwyxE3MMLte8ioqVB4i86uJG2HEoMah",
  "key39": "4uZzbm5jwaGgB6jw6p4ayPZouzFLZST2vCHDCyfcBecNs9jjeTxvHaewEGDBcJCgytowD6E5yRGsiP8EEJ15J1n9",
  "key40": "5YS3gvJvuXRiuAoBFyvpKCbLLyW9pdjfgGV6mfvd3E45yXvFiPVA4WX5yQtvu4U3ogFQf4Nw9qJAZW6LsyYRvYWM",
  "key41": "2c2Gk6BQmHW38saMELrWN5tNHAPZNpWsDVxrSAnNgqBNUEwWRcTZf2nTPy1WSh9fGTDbAQJtkpfQzHoJN8nGw4Lp",
  "key42": "hZ6FsRspfogExnwgxVaFzygagQihT37rMX3mVHCZHnmRAuQpFjvYBMpE9oXJgiAG1G62HDBMzpW1dAXfnpoSZMn",
  "key43": "4t37JbFoHLcG1bKhDGsR3YuL6WgVvPaVgruqktiXT2Hs9SfihmNpZtQt5bYRMM5NdNLFSR5HLsdQmwSc3K2TNepi",
  "key44": "2yoNqbcrrdZG15uFMnrryDJJuJ69HyiX8BnVWqPCJWxxLqGExF4FoZSGX6snbQyyfLY6a7xRaCndtPR1QaBmGbyi",
  "key45": "3HcnZp3PsRpnGo6GMhCsEAXidaEfacbEsvhyi1opSy577eeSceaXePQHBfDj24v9LQ7FqEFCLVkMhJpCQvRRm9QP",
  "key46": "2MgqyMXoNL6uUoBD22ZBVnwjK7qGLmPFXAtYA7wW9U2hYDi8ADcMuaJM2JiPPX1kCi2tbHkzTLkezT4h2ZuNMH97"
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
