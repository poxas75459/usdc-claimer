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
    "4haFLntFE3ZCg1shPh7MVU6q14ZqTXMUXb7RPexopwzx4PDJkrkXGe3HZPx36kibWkfzLob7QKNVv7juRbpGr1xN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578z59YSpQDy67WmqiBqXzQpqBnhEMNm7e6XcyqhMFh9mG46qnkuFx1GU84BbHzrRbzoq3WnXV4GDtQ2f9pLeaxS",
  "key1": "2DrL6wTZbiLWdEWReXubcTPyofwmBjU7HkRASqaAXNnNaSuZjCNwShxxo4YzYUDgwQ4dgB8B49A9cWYtJWrFGsaj",
  "key2": "3eYbfV7Uc98oAsjWPuB4n398TLoJesR9Tgf56Y2Wwj1AZmQ99XK3uEyv1G9xJZkHBKm7dvcMfvnXPoHcQCNUqQxH",
  "key3": "5dqaVFFcRyfy7YoPPdjCDWnjySUKpgw894fS76Xe9Nf7zUw7Z9JZpSJ1sKecnrwPm6ubZ3zJhFKLQxZqrQ4k7Ho3",
  "key4": "8Wy4sYxnWDwCEGhMhN3JpqWBJtqu42dQgMtNK4pt3QDnLcfQM58FNmN54RbPAWCw6yxbiB3jDy16YP7cczALswZ",
  "key5": "3Zgr2PRF5YXtyT467AMycByjRKYbEXo7Qx7vrb8KrwLLq2t7hBQAjUsQB5uoLDsJiMaBoh8QKQcLCekSXN5swUUn",
  "key6": "2wDxzs1nDkSpj8NBxBLsniqqW9kUcBSVUEBSA8MTSXjyW19LKpPEm3DrFVZCAHjqdYjmxerMjx4fP9FTCDP8bFAC",
  "key7": "2EYceyTRax94FXDtQ7QYAeCHRPMCqhHrKvbyVNom9GtgSaPsCpB8jwicQ7YbBjMxTk47x3B3AuRP2PN1YuX1pPfX",
  "key8": "5c2phnDnipwdWyxTa3YcHsvj4tRsgDNvg9M1obTShXLv5N43QeVWaZuXWY3RwXEM3J9WR791DX6dUbJ6LDnXrFgs",
  "key9": "5dAVwTv17No3DaHPftjT6BkiGYAjTmRfxurYqLs1k5NTEwdd7fk7ShyRuNz6vqyjkfzVMxoR6ypLVLdZEHaLczRE",
  "key10": "2uf3MjwCD97HBExo43CxqPPnPBD1Vb5T7pzFujsx1wzXGZA9xvvMDXr9ndZv8H3siLfkYP99gx6JaBZxcPdD8rCR",
  "key11": "3bRkSirLdisWfRh2pjQjfNqthEPxnPgYwpqxuYStgtiQKZTiZwXZytebrBEUgQRXBWYKjMhZPUGJnVfr5sDgfCd9",
  "key12": "5MMNGfHwmNKWvM9vbXBVUHb3waTZbdU2bUFz3FoKztRWpg74fz5LLLxgGiZgHaFXzZr5PYiZHWvT1LDhYFCe9v8U",
  "key13": "5cADLXLixn7PZ136xrEQE6ks2qWgAx9uHrAWJQ6pGTbZ8nPknpEY5KK7Da2LVMs72wKTFfs28ZG8mZCaRU1R3GLS",
  "key14": "2seFAh3aYZifZeBPqvujFCqWGhbCCba3gLU7iZm69kaBz3xPuxnN8WAxbgcacwtVquNmeeuj4MHXDTddmQkXn87v",
  "key15": "4TA5duKRLhtsxTxp47vjXy9iojUFCaC6uHhEF7F6RzEkmKHKy7qBvEiV7Mf1R9Hev7ZQYGcM3FyH5ZadKYuftgNr",
  "key16": "UKmYZk3haxxmoighKpUpJvBf1DARhCoEYET8gkpPZ6ESJVv138Dh4r6vrWhgVPPykPyVZgdoZMQJVYGxTVssFqp",
  "key17": "7Nwwt6ZBJRVX9ZDWTU4tyxhpkrKUZw93T3aXvsuwjuQMjzmobLt8KGxqCPUjFsWjPwQSnxS4MP9uzbBEFRgda68",
  "key18": "49PnySnT2dR3nHec6joJAZruUYhjwUGDBg97G49iFKvWtVMMxwViqttVDW1uFTMtc4Vh8uLHomFyCDxuCt1yQqSP",
  "key19": "4LDHtWLG7kBCHX5hoTYEmdgu1F6MMRPMNRLAM9iR3ytobUdPqzQxSwE1Grz9Age6pN3xupfzZLzBcXsurVbqajEP",
  "key20": "4cHXmNCc3NTnnFtsWkjWpsyHmowvfQkBihsCnD3EGVcUvTf2vCXbTt3WSV2gNVj6fc4gPT1VZZ3GYVYcf1DXt1kP",
  "key21": "4SrCdDgy9qjamtU9pzn6xM4BRLo6uT4NRiaisRU8oW9UtFGsCwdnJ7oTovpA8yHnuxQjVFkceK4wsEnppkPkc9Kt",
  "key22": "3x6m2mpT3noTmkKN7TEGztDWq6xYD8xerSwWH7EZeWHTE5m8kc3mBUYCFdEZRM4caqemaHAnSAmvrx7DqzJBWH1J",
  "key23": "4eWnNiVEXX5R8FX5iZEsBMgjDSpXR1MobEvoBMuGDmREKodfY5gC9sewq4A4k2ZBNkKBZdozcS69iuYAGf1fSoP4",
  "key24": "55ZQRLARJuqNoD7M3KXgQk83KG3kz1C27djM9VzeC7zPtaZTbM2WjEcqgZSrZGHrB1YycyVRNrqjR4pmNyJiThTN",
  "key25": "3E1g9notjq3XmMtWx2d5NKuN4c7Qih1J73nefpCRSznxUdsbZEujAob4XJDXXRpAyp7GRu5ENerMV5YjPbZbC44t",
  "key26": "5zAj4XLf6Grea9CiKTpEWLC85oTfyLmdrUJPqBJwo4n1R5wUXNzzHce5VsSHBR1pL1YdTU1koNt3NcuLSWiouY1W",
  "key27": "3rw6xqDjigqrMs5mTuqX73XgRMiHTfXubYC69jE1mLLPn5AHUncCQdWkWgT44Gf7WeABHYyC8GZdaUZ51LuT7H8t",
  "key28": "59DDALqF9JYn45jugNFj6fCTfE4mxQWmyqk1uyR5k6q7gY1cG6AZSPyVxLyYodYydtuVixz6eixyg4XJ3WJiu1Cs",
  "key29": "3G1yPiukxi3Pnj3qhmmDc6NwcWVvAudS1juNrtmeSJFieBgcMuvzuiEeNgCzKsR39YjRbpdUUjd73JyU7e4NZUFB",
  "key30": "43v5DmxGRPJfEL8fcGQUmUdW6AKGEEURKxTBvzqtCLe4dXVRqfTVV1D1CprriMuhmoWzAkkgpnBMRRHUDfS8vnhr",
  "key31": "5dpLYvf7M1rUk1yKgSVVNNt5r8zj4GHf6yY9NfugVaGUrVeaHdLP8KZUL5RhKKGKhseVQs9wXTmKvf2p7vsifFWH",
  "key32": "2YGN6hcpiMfCLM8rZXrdNsqez6hEJd7eYsMLoCHwt8okXPvbYYdkkJDwMWyE4szzC56PFoMxFuX81anwJexuqEpa",
  "key33": "C5q4jAufFC2GJD4EcJMqx2hFWoqQMyunhJ4xRhbEEiyrJaYQpVN7auQefp75b9mG1MycYwEc1ZNKZj15MM21A6g",
  "key34": "j8Fg6jKfULgaduRTrEDXbDeXAyqvVN2MJXgW6CAuDSvqtxPoSPHvh3JSfByB7B7d9dwiKhfaqpG3KtZbhsANUPT",
  "key35": "29cCnyLDxbWKHwicubWeewiJMW7hz6srStsqwmx1x9VtboKrQ37CDgBubR7G3KNfrH9qoJ6pCJite1ukAEFskgBu",
  "key36": "4qqAWSQnGgaQicvU6ycc3u4w9JTd6WFgLN4drAsxQSRWiU9u53L98jCKgBqrYAs86gxqBhQw4kHD9acaw9DAUxU9",
  "key37": "5c4t5YdNX6RpnBMQF7gMiHVoBjWQTjHXBJahp4WPRtQX2Ffzb8BKoNMFyBKEHNecPeUEUHffA6uJERYQibQ4Jdd2",
  "key38": "5nG8wmjLa4WWWR2JXKqP7cX1GERtwx21JW38pDbEfhkXQFgHUeaZAe5bKTKbvaS28Y1FqRxemfgH22U93f2gMYHg",
  "key39": "5BQhbg9dRob56UfaVHwX5mmBBS9k1wHoxGFAjFyfQQCQuLMt2xKePQ8qeCV52M1NXxufuqQv5ZygHxqZHFRQxD4N",
  "key40": "4H3wQNZkfSEdk6Gc3hrBnEwxLBvcgAC1E2DQRYN4e9QnVHEnHyndDVx4fVnio9g1Nu51tQsahmXv6tuE9pkckgFo",
  "key41": "4vaUkoe2BRkUWY2GhLmGWfKr4yG2HvYiUhUEpNpUJpLWVFzSJPBKpvVpe7dw2M7TGnbK1ARLGz54Ma3fTk9cSKik",
  "key42": "2utWP7ANBiURnbpdzp5PCsa18k11z4b9LTe5rUysxzGoDNx8bJoftY7n9VzoHeWakky1M3D7r6WW35G5X7h2UYZd",
  "key43": "2vYNbhWeY1ixhCR3h6LTYhma2wxmqzfcu2312ubHeuGJFShDGnrCWN14kh2utxnq8jJYgsSUCUhXzMs8pYjfv5GC",
  "key44": "4P1wfweADRofeuB7TtzYG9G4Hhx9EVXedDvmBGMFwZ2vovEbKtEDYFXn4RkG5LQZ9THJuJDVQ9JFPJLUowj4kHtN"
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
