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
    "2z7t52f6vuRJ1XhfnAAkkXzHBgcWFdsYo45eSZ16varBGWGAd3ohCkwbe6eQPe649WSWrDxH48PpfGhfGJbKNs9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xncWTEHkzZdHz2RGnapB5s7BAX5RqKToTzvobVWwDas4KH752WM2xo7mUqXdGJpfaEd29pVpTmvqh6pgB3bvSuY",
  "key1": "1MUrdHMSUrkN8Hz882wwKxwEMUs6718sqnVmW7MLigctxqHoQ6BRT6Q81L58s4eE3Zvdkv1jhpAkERYmTvtEkMq",
  "key2": "2HgRMxMcQvSQ2CUSe4ozKeT9i2maAMAEBdNYcKanaiVFHqiFE3XEi28ceDE7PX48okRBhiNV8VhE8pDcGDNeXimA",
  "key3": "4xpEDQYh5JLBKBwr6D7BDZfCmADw3bHJxzt5ozeioo19DKaEh5iVQMfLhNeFqmxHvVgCiTKjepHKRzkyWVVye5gS",
  "key4": "3XL2bcnNE3EoV8DTLp5QceXwQPhC6phc8gL5G6KNV3aGvmFu5KeceefnQJnLzQtMNHjjxDUi3Cirq7AkLsq5w9Zw",
  "key5": "8rSQrYjpyXwAeRfRkEuQsM62x5boe3yXFLWkBDb8tGeLfHv4yDs2ucmNvz3rhFFChvb5yeE3rcs8F1xcV7XfNmm",
  "key6": "3Z8j2PoDbktgREHa8NhMQBM5SzFY2maVUEdtzyA1L7xetqr47DBGr5yCF5pyaesstgFZGCvaZSWe9kS2NBP1qM2d",
  "key7": "6vMr8861gXhzMPQ1eGi94HVPc5eRdGVcNTrfqQMfQtYvRipvmpa8eYEPibFSXRCKudKwwgoib8L3cJReqa6LFmv",
  "key8": "38ah6z339jeRDh9oRXcAq3357qxapatC3RUGxTtMSWjKmGEf7Nr4gNZgdYndr77jQvV6xnBb9549Ktq239nR9vfQ",
  "key9": "3fH8eBMsBcKHHoPNpKqFoMvFLRmQzTTh4SoNcwyoTHxkWPWsnoEjg9ZYZKKXbovuLG7jWYEhCNq9E4frFCi2SjCm",
  "key10": "62KpJuZDU3ewGync8ppimoKfqmTwBA9DPJwnDT6KHePzhfzJEwEf89F7H6jn8JCiVYxbmUC4EbwSUydv1tETxiDt",
  "key11": "4hHWKThq7mPyFgzD3sfHwiNuTAvJML61AqfWHWe7Jisq1jibuty6HQELUgP6gqs4Mdi6rTmaF4HsMUNkHsT8pBmG",
  "key12": "2cQNbDy8D3HYrnt6sKV3nGaFEhfN7UQkGcYTKWDqE3PabzuoHJoQs5RE82PMygZipjrDzbZyqR1oRPeWqH9MgiGK",
  "key13": "5rj7SmgNucjH1aa3asGjfetZPyjCeGYuM9Vn71D1i5r4vs9GgSyiLzBVeY3dcQut4TEAQHHYXcLF8uirpZh1t2Dt",
  "key14": "5MkjPUriHPvQcnkCxjcxFJ4FwRpbZSrZhEfAZizoZnMzK2RNzg9mEJbuR47uR3mfDWEc2ifBrrj8HwtWu36evVRW",
  "key15": "5u4o3dxRPqDmE5piNuysQ4gyW3b5xccBNvpW5r9KbGNaVm131FYCtPVUmQsV8RuTrKMWfYcLHniFhzJukw6uYQPu",
  "key16": "528odHNqLKQFDKBCNp8CotfhNiTrn1wyFZttR88vcxAWJdgRa2U6Spxs69c2Q2c7PxxT8mEfGHJqSQfw1iVdmLWQ",
  "key17": "5v4ytix96BiW51rD5i1nr9U6UvTWGEcQhfv4riU2DddPaJncwDDErxqW72MSkyZ43oiCga2m4HWnLUrBbq1mk3YM",
  "key18": "56iF6XfotzG26AF3xcZeoZFTpB8f72P3qvdGCj2F1Y1Rd7FxUHvNYqcpuqgk617WZDvAG76UxZhgoBuUPApmxfeg",
  "key19": "4h32b91siyGbLaV3hv157bnAdXRnCxc5sHhY4EU21NwdGi69ETBDDPumd4p3ChK42xrSQPjqKRM9a9mpjTRF8bfu",
  "key20": "A7CLWHxyiRRTdfyT8G4xPM1KM9ukEV8BBn5TKoNHv3wiTGzmjtmwZhfWgQThViF1KjtWFqP8CxXVesBZxPc579o",
  "key21": "epSSLbA2PBaUcKMdXibyTKeoDVV4ekAqXDUQY5kL68X6YGtYfFSEFnZYNNizM8TyEdJ45U6YmRm4UQWBo9mDgax",
  "key22": "2cha3sZ6b197VT7MQ59wHs78MwEHuGM7vqnXaJDw4qhqFD93nTincpGE9pSQDGgBgAoCDazcgpw67hVV6nGC7q6i",
  "key23": "BuTFtry9Eym5mqCHKgZQBo8ekawkH9pUCyTZDWrCyS38S4gugNNjvPixa275LmiyF5vgCvxiqtWWospp6XsKwDD",
  "key24": "9k8E892Hte75ZCB8WVHKwmPaBqrd6D4EMaMuYKD38ADekJxcvJR2PuFCozDaczC8WKYR23FzyBisWG6drfwUbrE",
  "key25": "3fdDAZMN5zy9esguEvkz7L8MEvPWse8QLj3uwo78aNxwD4jAgKaRsdun8EqxMmfs2ok7MgVccTWnj6mLuXMwLsCz",
  "key26": "5TdLs4EbjWUAhPRCkN4e2e5NWKi1oFWgX7pSmUsdicLXFowzpM7W4SPPm8MHGXTaUBfaYzfQ7dW9q8LvLJKYLfG1",
  "key27": "2P3ugJf4PrzGhYrbS5pePLAjnaRrBVjdg4KLRFYCTZumE4VxhcaUJgKMDzZ6J1mJnmgGkqL4wmW6Bfo3TJrMLVG2",
  "key28": "3hwJtsKayTmTEnAGMjssfqGb7hh46nptSLPXyRb5PFkzMJYMMfb4Vwd21qJ1gW2T1oYapZTc3NgeS7j1Fqthq97F",
  "key29": "m92mATfocXaU2UiXoSB9hHvFiWgrdqU7ZMWX4aJ6h3RU2j12uQjm9ku6Vrd92Dn1yYQYA9CZNMamVsZqQsz9tzN",
  "key30": "nfywVyn4G95AspnXngD16HJdVTcjoycKd2h4ZkgBiXEbznRkpoAAfR4S3M26P9eCZkJhJ8YQV61dLuxXHxwMrcB",
  "key31": "M7XU1EtupQQ6GW2tAhQNeoJkr33WTeELmDBgmkS2sy46V2q3Vbf8XVQf5ohH84WaFvDCCgqchFu9gWa8zaAZtEG",
  "key32": "ZzRoapKiPSbo5mnij8en7aBo4YVsmWhsikWsq8CrksWaF6ExDi7kwjtkfGFncXmu5cUDxwtCKvLQS6S7rR3MMQX",
  "key33": "2VRNH8hAo1wwen5X2U8pW3kSnNF8xAaTzBT1okQwrikzPwqc64FmpkAwaWq9crCGibpb28ysGnX1vnXCrM43Nv2C",
  "key34": "4JPQxAQdLZnAusS61FzdXfrrMMYySmdQ5aM8dPQxsgiiTh244cSBwwGZXpMaVKk4s44njcCR7nry4gmsvekEEJ4G",
  "key35": "5GFb4JD664YAa1Nj4BJsS3Xa9YLzAnXy39CUmpEpqcWWjDU357eQBj2NHebHFrBbKYCHqn5CXDwuGMoKEAHXCuA6",
  "key36": "4qVQGErNZYBPEVMzJcSxWfiqBKAGY72GegvqhNKY4VUeejzJ7voQtzpTDcbVnsghDjT49c3DNGVc94YLsG6bG5wh",
  "key37": "N8vf1BLrD1g3bskGjk6DfYgHFppwLio6Zug7mghtTFnfhRX2Z5DkKREKMRnhWhNE8dFt948GF6Yn3mSwwvvzikF",
  "key38": "DrrgsgYDQNekbKyK7NQsv2RhDPw1MiCewX1Emz6oNpKdTknywpbBxeLbUfycEgUQKCrPSGabbjbUHxQfYc5JKDw",
  "key39": "3DwQPuZkNq1r58UJJe9XEMauxiT3SM4B2qptCJY5Tn6DvRP41Lytrcx9xRd6ZC42PNpxfK1rD6rJuCfsA8v242ar",
  "key40": "T7beDwzRqfGiS6TxrDc3RVe2F76WmczF7vY683beianXP2YUQFKKQ5LYTtjSXn7rZNSMV94nDExy7nN9HadKGtr",
  "key41": "4Po5wxYz6RHR4VUpVj8JbyJQKQiQRkfC6rMaMy5fayr7S8oUpxkNKzcLbv8EuCJ7KBAsRLZoP6CXbB487n8mCPRw",
  "key42": "4jhKzqXcAVwfATMnUv3EbDWt3smEVQp5NSWBFT5u5hpYrEg6sCuKqKKWPySwi29tXQ2zvfDQUdU5WCKNfss8yDxY",
  "key43": "5ZqHUWVnuP1xYjXyWYhigVrAr7SVmLw2WLsW4KMh8fZ22iGUsjG6Q5ZQsLBcqwxPkvtm7JA9v8dHgnkW4YDY9mT8",
  "key44": "5JnL8WbgNKFVNHLAXDSDAMHXayCVsUkhzYWBrWNBBdkC2g8vHoJ6CqJx6Aym6PHK8XtpsvxWjBonxDiiS3iHX3Dh",
  "key45": "3tenP5N4NfssYUpFsaBN32oQeZLTwTAAvPqG14NonBmwNW22qPxp2vqX1RDsNT89HoDznMMcTNJvPqgLUw6U5qRA",
  "key46": "2cuTZbAvHvJ63HP1ckqwd63yESnZK1ZuqAvKUjcCyyFvn1pTAPQ7PEh5d5Mf5uJjzrF5oFQG69oH4FS8sV8KrUTh",
  "key47": "3ktkoRv5mfnCynD7RNrqUuQreTuwMrMBnBYSPaw86p7za65EjNbDPTeZzGqRZCSqS3ExQyJSPb3XzFsN2U79mEYH",
  "key48": "DWcYLpPrJEy7GTj1dNFbxhfBLFom8NirsZ899CYG3vNnk4vQgA5SWpuMX7N5PdRgvDmxSvp6KT2itP1Afkec8NU",
  "key49": "oYhbtiyCVZUzovqL7xKMLW7zgjgr3MVBMDF8kaN3r9oUiP5GJu44Qz4zRNsYpiRgGRYeecLJzpsjVUq5BJ9ofy4"
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
