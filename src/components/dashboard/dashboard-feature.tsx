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
    "5Wu9oANzn5HkSotW3FHNXSrx3UEJFeuhLXWoRyxS1NHPJ1PcTVKsa2JJ2CVXLsgcLPmE7HCxroZr8EqYwM9PcryC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x9H2yX6T1rSJAqyULNdxv9kWn9uAnR1aub9wEL3t28EXBMCz9KeEs7TQPZKEz55QgD4h4h8wcQ4YJhgxfZEvFLf",
  "key1": "2Ls7NRUHHQ56sYvvESLDc7Ms2GMVhwMfZXdW2qXSPJ3wbD29aPBRtepZYL39d3pcnbGt3ReN5rg6Q86pyet6zTc",
  "key2": "2QDRi2Cg9K5uBzPzyAL6BNk3cfTrcqKgwiQpQHDJe9ZJDpU66eUesV3AcSoZrrF48gwC1eSAUW5E2QnsZ8rW5nyc",
  "key3": "ieb1deoxGKRp5rjVTWkosDVi8GmXFFjVWdXvm4UYqmNPMnPqeTJmhPrJavbE6Y1bBjiAdGUGdydxKy9mmApZ3jq",
  "key4": "4F9vHAuxnVB86BH9pLzRHFSPfB9tuHcZkGXHyC9PV8a5SNL6XqXcTyF1dbuNTozvFQyB3BbGNTajULmZyUVA14tU",
  "key5": "5Fo7xowrLAyEbjRX4enVCj1WK9Ux7757LQT2DVyKEC3fAvGLVCq6UzdXqRVYjXxZEv5NP74Kr2pCBekx6d9grQo8",
  "key6": "4HPmF1LNgThYYpHaUzpEL3rd5zGe1cN966swEyBuqa8pmutz4ikJWErWwJ4Kg2Br8wmaoP2D1aKNRRTqzBRV6E2Z",
  "key7": "4BTQj3i93djv2XArkr7tm26QRHZpyhbPZ8Xfaz3uoiFhhxq8Vop8WNsgeD3uL4qyNJzgubWbEQGZwUG9FfQHq7uk",
  "key8": "3cR7xbJQwShdMGM6rYMsg6w2CUrGZjsaJ3Vs46MGRjr4ReXnrPDj1ovFCcDMHC7b6GYE4nkMmvWHGQMZY6K4gNos",
  "key9": "21umYJb9oC6TgRSpNAnUv1u7HS17vzW7bA9mXUncy8PC4qbBxdApMJF3xJvG5kmnRvypQWCwDnUGJMo2yiMEgSpY",
  "key10": "2FjwJ2C4JNbTP8C1FZkNGJKPivaa3ynVqBTncikvXKXhWjQzhdgvc78FeYLs57JcvtgB2HkNLsNu6shCQ3NgC1aM",
  "key11": "4nGy4MBnzhET3SBguCE7b4S7B3rtoyrxAn7wRyRTuMKYsEMo4HDtRRkXtQPnoVpemb2KV5JWxA9Apip4XLkLbWbT",
  "key12": "12A6YtraKDq8Tx7cq94jjyJJNcbg6W2RkvKxGjKYPWkczmH6FiJuQwwveJtRNqwcSRfxgwmzVi9n3eeaPqLqoVX6",
  "key13": "2ZYBiJ8K8TaD1nDb23rtCLwMLRpbnB1Wp5SkkjiT7HjRfqBKV8tYrPvaBkqE1eWj7KJLMM49KSsH2a1xWuvu8c1J",
  "key14": "5rokA1KMiRSEew3qh3z99BBaAxom4o68fcVTdWRyuojnx3S8qek23rGQDGoRH4RYpGUUBr5jpMwxvyK13cahDobR",
  "key15": "5xCdrgHgdSi7dBbY3bsLcnHsY9xsUEiu8nCz5YYzxK8uY4ZHSTRKRwNLkP8fYk2f99Ybk87bWdpct7QhzKzzdQf6",
  "key16": "2HNGR62FY5WmAKRi2BxbwS5qLKCvnCqyGSumvvd98Ehe9MXUXgLmfZa9FqQNUydW1jc4YASXpwyj4hMk1FpLxiu4",
  "key17": "pmAwXzskypDTygxwL2fH85hnSGor4Mv43mk23AkuoMi7VbkqZndrB4FDruD7kb7VthrFiFakKCKsXxt3BgpMpQf",
  "key18": "5gNNBP4C6XcGUeUXhfzCX1Zt1DFvmuuyF5qy8Nnmvq3HMQ3Deax3kMi4ZiwesRLo9t3TngrvcxEDMX4zMFDzBzUM",
  "key19": "L8dPNQvZ6RKVdEGyYjsV2vZLJPgtVJAGt5zRso1KbfWd7P9b4XRQ4EWc4DBjdVk7WntXiowq9ky1v4WhKrgFWWh",
  "key20": "4njKnigoitcSCXf6PZDe3ebH1wDmueyTXYobZiXRaPab8eFPnYoC4UxbDe4pWFL7t5CFwN5RoFn7bDhX5NdXspuU",
  "key21": "61BpGeAy5dVz6uvCUYj2wBzugmRerZUQZdxkMAUnYkUSN4ZMooJMyQx6NZq193CGiTEq59NSaYpdfF4B4b5MXZJ",
  "key22": "5uTYQVouadgp43nGKpqXuw5SUVz77wjAs7BV6JddA54Mv42TmXvBHEbyAqtHF68H7AfJK33Bbwjr1QLMPGCZvpQU",
  "key23": "4vyfvdceLhYJNBSybLTrcd2xv3811xJjmJ9hzfih33GfJUeZs3wWSpY8aqrymNA1GwMAmMzX7no9G9SnNDBEsNWq",
  "key24": "4u19zpSfHkYScGuLvEM9VFqBe9iHp3NL9CdKiVVaZZ8rv4TRLcPn5opcZ9pSJphuStq6oWv7NV8Eem1PnrFbgSzK",
  "key25": "CxMve24JkZF4dT5QxdeuDMakCPEM8c6uzctR6jHgN3unwBhMA4Mhm36XoHHTK36aVqTNTCrEDNgc1GZmU2DDYnN",
  "key26": "3FNchJv3fEsHAfStfYyKVwwwDijvxDCcKivMj1c6LLXfQ9QuBPBJ1xjq8LzrfY8pvey7iraqsyiRBDr5aSGECgEm",
  "key27": "4untygKQDcZJKPHANGyJyYHzfSqqBfhW2MUQv8Ck9547be7AzAq3XEYoouuYLrXtei5htDrDWviBrxsgnaGe1MwZ",
  "key28": "5obKZhmHFdEcix99sbVXWEFS2VJi5cu35h4afdF3PhbYBk2JWSwcXqYKr1nnwisw1EhHrJ7HkE2XSbgrkwsc2EfT",
  "key29": "3PxBsC5ycH4kKbtnHg2VBPhsrEzfVNkDZK3Qm6jno8pwMbDXp8vBFXnsFEQhjsVza95yvU7pBLKfmuMQPksSPVQq",
  "key30": "4c6V1crX5M2cqD8M46nuKswdScJSuKEJhZu9ZBbtvFvWdJXcpdXAyzZAmjKqpMHRw6JN2akj1Dm14c19Y52iTepp",
  "key31": "42m2X8ttufbTj27cVCzJXHt98e2w363SuKFSuH5RQNzaU2zvqrVEjrjJCC8ZwTwBx5LGPeKdxi4XJsen6byLRH4d",
  "key32": "34qBFBCL56gSXE3VFED2o3S7MoBf7FYLZckw58iuWRQDaceYZZNJYnX1Vxfsjivz3NbRCbDp5XqNN9hsKu4t9Hsm",
  "key33": "35PL3HHE9BjRuvzTeYfvm9rZohe4Wiy4VLXMJrv7Uh5b51SXFLmtfn4KW72FQAvkpDQdjs4u9qGiAernXJKqfqdi",
  "key34": "3RsW5aTHBdBsmCPjfAwnN32fegEDAe6WTQ9FABvmGcusPpmcW99KPMrf9LaRmF4CjoJChMWQmVtYru7eGv5whXeR",
  "key35": "3u6mXhJEY8xUi3JH8j8zzrj1bzs4pYY6UqNm2pyxHAnV7Au4iEwLnZo41AfDKqXXVn5SYgFspCporpAt7HYHwVtW",
  "key36": "3uzfojAthzqeqZBcbdKWyDwUoy8JZWYFtYvkyqGncaQaauM4ze4UWrg4u2M8fWQ2fwx5Fxu3tz6g8wsMLXvL97xQ",
  "key37": "38Aq6WKrygpvnyW2d3GF2GQ7yjxXkPsCc4bsp9YnTfvuiw1Ud44TPZQga3TFhd98W4gpLdksEuoM2pKyfMbfUM7i",
  "key38": "J3yHyucNHZ9S5TN2rjk2vwFR9GfoFRYpFwYvB9NDqqRYzXvUugEZLF1ZS4GqxFESmdMQpb6Ho4JvcTNEv3HDvzB",
  "key39": "2et2zx1ER3qpdNfJNAkG5bvwvEoQ2jtR9K7rj15RUJREohQ1oadsuKXzZvPvqsnc3z7JNaUKaCJ2bo249jfZ7831",
  "key40": "8xYWDSmnRPuMheozwysfAZDtjTagt1W1vZcqDpq1APoWigyhuTHN5BWpkfUx9RpsvF37XAQDEVCmcBrVAhLuCT7",
  "key41": "3t2HMN2ZPaMz1jJWKpnqHSLGAZ5qGVXQx2a6q6scextDY3Y1phVi9DBi29kVnPs5V5u3jZX7cdKVbymrLed8SbDe"
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
