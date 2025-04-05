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
    "5R4ren66YKx6xCgdePTuYaA4D3oPighFPrpxPUNg2pcXwUcc3V91e2GWaJR1CMtfjwKisp8qgKVsbtVQN6NiC21V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Bkb23oJsF4ShBZ5QHEcQ5LGbAnLPZyKv6227szD5FozUaeHMfX3bwXhcupUhT81tCShak1VoDw8JFJ5M2jCWe9",
  "key1": "2Vhp1dp5ygCVPuNEZJPhvvQXKf2ySHSvXUaKejR9Mo342YHJEX67enbp9fXBgJwCy3PvwrBtVeXjAaMK2v9gdAUK",
  "key2": "4PNHBWCQBnAmCyGhJpwGhY1o1JX89oNLA567tqErTvsybN5z1LE5guQsPYxPqy6etib43JxnjTmFmHsM1r6R7gyN",
  "key3": "2YE8nyz5DU3EVeN9Y8XKmk21J5dXJcUmzauADtAnZXjdFr47Ptc24tMU7qCTajRHQfmghRxhJbq3Kocdcb2TNSNp",
  "key4": "55JtegswxwvNudN6gC3YfjnmNQtdVAe1Kqf9LCEVYZvC1nxsu3L6BWjUDEzpcobPcwXrAj8GkrdxYQFXFrEzJ8U7",
  "key5": "56du2o3iEu6iBQQTHNpFzF5rvQFhDS59QqVvKNBgpm1bLuGdH9bvP1j6mkN7rWWwaA7gEEaGwaQnytbtsgS9vUce",
  "key6": "5WEWK6xcGP6MTaPhF2GUiind8vFev5i4kNknUxzXs4FDWf6hAFBirbRaPwdWfp6Tv5aJ9eU3n5rPqYTxfu3BRYrL",
  "key7": "3Ykisp94EF4h4E3wjTJRPDA3rKatnN1jyqiCSic9f4Xr82Kn8mtxVE8QgyEzpCpzbegSvabQYDjwBT71FHotbpmH",
  "key8": "5GFcxZqyBCXNLPFgW4rRQsQcanmvxWXtDJcZiDEUMf26ao4x15yYH3DVAnAK9yAaw6AKgaCsfsGnc4ir4DjNTGZf",
  "key9": "U2VT7y6eF27Ksm7bdrKjn86BwcUQBgR8GfGJAK1kZz3xrZqbPSzazopm9mYA1WpEcTXj4zdUDjPR6AqfAmz7EQ6",
  "key10": "2QdeCXDzNiEAApw6tKXMduyi68fhMmCFh6R8rqgaKq2DRgtE2RdXkPiFgUozSkLJjcSNKSygtkjgNC89KHomYMdW",
  "key11": "2CdSTTi8A7onSTwuTeWDV4xHVy5yZdJdoaJbKBJTs1P1gknq8ZJ1J9tRTV916kQNLWHixd6Vh3hvgjEX6qdZr7bv",
  "key12": "55oTit2yVX76BjJMfQBM7B7kT5FDbuAP8Y9jmnuDV69dq8hVkg7J6v3bcGd2RxHzrsf3dPaQ7LbSApueoWbZcjsA",
  "key13": "41Rk1kcq8Zqy1yGLNa9nNUgpbZquNybbFc71XbzP5mcnmcXoSK7j3gTksq75r8HFQQtJRcxmpgYzLDrhFwPExe1Y",
  "key14": "2qzpvWdytbitf51ELbzaszM3N8EDK1Qk7jpsEqY89z9iJ4M1CW5thoAynQoo1Am5mN9xLKf48vTC1AT46wpjMimK",
  "key15": "9vWCxP4SgtyFoj9obeiL2moqUBwuUC3JAinUr8BBY6gZG2KR6BmCzf7UdmVTefmbi1TYFVwvJyAobjTDAWsgiDJ",
  "key16": "WeAz2SDWx6auU9ouQXMuS54GaZ6YFgMp5v1zmaALrqJ491qdW8FjBZfmKdCCCz52KPepneTnAjTsdVkVHnFjQCR",
  "key17": "3qFec3DDiWuyB4hKWdjDgsuxi47UJdXCfnuvi8hAvUejrdnd3qLnQESXToaSZiU4LQeFnyb6ZucRwJxbSY53uFD6",
  "key18": "4JrfHeaskMJbf5RwQvakwJUrgicDkER7jNkbTE6PGiJW2dJvusr8fFb9cFDyMdnybwXefPJxJY7eMU8TroVnAebX",
  "key19": "34jUJLeqmgfe4GCM5BpdBc1d5th8FNvEeVQGDgZGUJcBnetXmrMGfWkKAMCzpwkQvnH9GBaR18GkWrQjnvXFL8TY",
  "key20": "4TsDivNe1VSi5GyoJ3yuyGN89Fq9kz3GXDqPWgbbqrXCra7qx1Cv5CLaP27f92N7Tyf1x5zeXmEYwnNssrU8m7CJ",
  "key21": "5UBrhfnNZ4pEEgCbmroM8tA8voY5EB7nBkTgi4MNiDCZyeGWYdvQB3xSJ5qpwTVzLnKjvKxKdcsMaia19Tnb7oGe",
  "key22": "4riLKdm2rEgeEzGvfGUpHHPStirKBBcj2cT3TpCR7rKmxYtfjc5k8xcGY4C6yVuh1A4inmnJTYUamtKXtDpvHiw2",
  "key23": "5eiEzFLBQTa4qREsdKqZ8byfW7NXMK1GBXKfQgYXF1MUvm2Rzm14XMLVfkzfT4kJukzmZ5TJYnLEwsVx4cZqVdS2",
  "key24": "5vCnxxYBupL88su6YgtKQtbiXWmLnSwzHb7Bd1yeTwHCSeidGnxXqyKTV2tvZH69hMTQBUY75fQ6WdoeGefMB355",
  "key25": "3KKtCeaHfwxPSEybAomjLPid2THhajRzoKEC9E8T1LCgxF8kA1PRh2GRp721tRBsNsydXKJfKJj1DMMtHjqwd3Ym",
  "key26": "4etseQzTkzB1pZwjPgS2iAkoYDQbQVxFAMQv33DPhLx4Z1hvMjkTyWvvNt52C6KSnmufnb9X2PwsFjM4SWV8iTn1",
  "key27": "nLBD32rDyJi8EyxjWuhPeLu3NK2BwuDKVhmFAzRbyALqTj6UjP9YvSjNawDT8XH6yzrbsgnao8ALL1yzdbpEPq7",
  "key28": "4pVbMTJk3wGFKKDNeW5RMH9gKteCwiJubjixdHCCDRB8azahcM8VbsvWggyzh8EHPTEvAtJiL7HamfW6ows2mYmE",
  "key29": "5yHhFM6bb57bvwhyrCeoL21MckquJgAPoiCSPJxLHStUqU8T16ZzBPT7VHGXKXhDjRzCoStJrWXcwC8mid588iat",
  "key30": "335VbE81bjULTYN6h41VMLxGxLnWtPHRK6PTvA1du7TQXaksFv2v6qamoyDd5j7iFfELSPny6dxf15ywedhncZLU",
  "key31": "3ngWbg1JS1Vx485iwo8Fq8oLoMhrzuuL47Pv4nVPJvXsEgqmmzFk7CqUhp8KmXLUxTUVB7BFeyBss2giFgdTW1xD",
  "key32": "3HPYcR9QEmGiQZhAWCgoboMcYS7f6SzcNop5wVtXaamawzY3FwpDT4M8HwSPPGoqMVFRJg2eof6vPVdr8FTLYzxj",
  "key33": "S4swdENCtcEF4ZGwWqKrUeKfPMPbAwwjFaxz1RCMe2JkdFyUrsqZFE4jGwQYdADx6hhhJq9vckfMc4Zay5egtTK",
  "key34": "4fWRQy3uPnnZFKkShfdje95SwgMYG86Nxb9U5yQv1sxbAWpcEZFVU5hF4sFZWNH31x4CmYJ5VgreFWA2bnvHN2FF",
  "key35": "2BnQ53LxYj66HUzVmG9WU6bwF7shFZUimwk4hF55f4ZGMSRRQeR4YRMzqfU7jWjDFGn1pWjz1C1vbahDiwTNENVr",
  "key36": "jDR5LLJXkcwUYSSp19N3LXuUzvBDDzYY71JNySk9hC6r3KU8NxHe2T19ryV5pe1yn4R57T5b4V8Je9t8mCeWqgi",
  "key37": "zATZghpj78NNNr2zkLEupCfTobxXs4eS2uQh6J1GAadFrKddtz77e7JQL5HqezG2c3LWjDNZWr32aNEWdQkTPnT",
  "key38": "5bDFf5KkWqTxU3B9gGonXX6wLzcu7UXKDdSAj3VsizTjTvQjvTRJjNgorn5u3Yu4CWqZgtdoUHXRNt6y1gZwV9xQ",
  "key39": "4YrCXb38oHskduRFrtKsboGEnL5LwY4s9jQzvEg6Y65gUx1kdooHj4PZNnT9byndxvgXBsDBbSMUw5Y6VLfGJi9m",
  "key40": "5UzJdBDHkTzW66Cd1avLWXUV3xpSva5LpvdP3hLpqYf89yuWRA9sAiFA2NcNpz31UEnFD6SoPGE1E2Eimf4okpCk",
  "key41": "4jR3S7fvgpytNE475WweG92Tg7C5T86Bh6vQhBDp75LLNjzosUDbQGw8Kwnjzm8s8rgAjV4f4bNBedGYuE5MTgbd",
  "key42": "3aRg4cpjrLgjXYS6DraXz1TBw9gA5W9aPQs15UhN1k7ghFNYBYN65oXmGwAEi2tsuB9RdtziWXLMUAoZGgkXuroR",
  "key43": "3hDBgHQRJHj1Gt74gEQTxyDMJoLZTso4t5ADeupDGJEBpieaXxeh7jgLJFLDbsF65NWaarymLN2c94n6cj8xNDVn",
  "key44": "2W7KH7z3tYuTFpjSov5ZvZ6k1Jf5YJX2GZxuSXRdyuzucQBpv1BeTTZmtVdEehw9atjUgQju9JmdsNHNWP9ZU5ma",
  "key45": "4XE7tnp9DNrFnsCXkXwkdqkzN67bfaR6529LCFpvD3McquZA3YhGAGW6gVQGZKzLJAydAAyY5L61q6mu1SN92K8X",
  "key46": "5zA2p6DaTyKpcUPz8JXfArJNprQodMX56NK525dDtpVUfNZLEKbH1KcQEzaJgY6TjRdsCzgHtcwZpnkSco9b1ojo"
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
