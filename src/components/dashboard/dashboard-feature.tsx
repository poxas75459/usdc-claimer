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
    "4Hyz4HLvyua2bnSSRPVzb31KSTmBfKxyW4dXcRmtR237Uedmd78jDrnqgwqcregqKNTv4eMYerZD6FcJQ3LXdFMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tc22iX6XCtnEWjpd3py9RUoVDJcXGPYrgRREW8aADPx8CYQUoRujkcM8q5aav397wU7hzZ12Dbv8nQuEG6nXUVm",
  "key1": "5vRzbp9ovgCcqS2xYcxR561GUPcJWSKm82AXmWiPdpXTUthuhxSdeTTgswk66DSTBAsRouLc7QexydA3KZhsvmsS",
  "key2": "4v9TfJeczZmkwVhA2SXXtXdLTH4CFu5RuA9bCUHtS8S5kT15RY9RbChyJz3ghpoQM3J9k62TVSqmBnkExuKisZNc",
  "key3": "5bB9Rtrxby62fHofM2m22AP4s8JfQcT6cGAF4M211ETnh9DEATw6jHwUGNh39Qn3c78NU3SyknzqvTiRTYuEUR2o",
  "key4": "WDWwRPZ1yqNKCaZ2unBwR2r8xvetQ1BwrKYw1tPqiErYmrHpnkzHqCEKV9ox4sw6LEg4CUT723PQZS9VefY5xrn",
  "key5": "3pMeqLvVVRF1t5jHQ8cr178bkTYYdS8ebL4CpF8KU3PdULpC2EJ19MJFyJNm3jHLNsRv8M8KzMbapgDCuFY7pd7W",
  "key6": "2m7seHjDJqq9rFnxfaWVKogTboc5JPa25avysLrYm15Mn4vQsRHGDXJSBAk7EQ7ZBjhKsZ4ieuV1vnimU8kJrMD5",
  "key7": "24iV37Aq8KNfBDZoBFhooGKiTaMs1ojttFhUGpUhkupmbFmkQVZfofspWSJJ1ygCUSSF3hHjshktriZQLy8Xh8gH",
  "key8": "3y9AKK9zewUSdP7bi9bcvx5p2LvGVTBy7GGdsJ3XKc96Zr5s27mMXQTPLQxP5pCrkeTvbFbQ6NLonyNDHCQQxYuz",
  "key9": "s12k1WgBCWpMvoMxgbS9TKGjDbuUWdv2ZdC7gqJMGu3STDhQes4E78Ncw3XgUZD1qQQs3kZwUUw6dBPJ3o6VWyW",
  "key10": "2ezdtjae2163cwTXAEGgAsEqvMNhYvgn8cXcjzE1WqT8x8evC7t91F3ABDKQeeEyRLuPqhdDi5Z7r3VeoXeT4nQU",
  "key11": "2F8noH1dE32bER7h5c59AMGSkqXc4agdqpLNRBReug1kCHR8GundeuVRNtPhjdiaTSUxu9h4jSQMEMFpHgk64VFV",
  "key12": "21AbxnX2HTH6QbF995Q2BddgRHCu4sRgaYr9cFBMA8vcMbb8FcThi76Gi668nF817MfMuS2Gg4xEoVgeDLGiKqRn",
  "key13": "294gn5uPhrhp212r5BzukppgCuUbqR6WGcpnW7ip4jG3sVbGMi8fFNE3vNEVDh7zeZ4TLeW4ZTauzaEwHpS8WnGd",
  "key14": "5zjiCq85ME7pbYSWPZy7vpW1TZ4vajTpux429pRscxX11QM93d1jjYVQKydCkTavv13vgSFUx3QpKfzwBcNLvgna",
  "key15": "3S66yjHaytvLguPLbU2UhMRzZyCB3EgNazUL7NFVJKnf5D1q9o2ZTgnJtLiqhcmTKtn4mM7aVWcivherWLb99L2X",
  "key16": "2MJNaQjM4KBoPTbo6Lib4nnAGiG1JKW1UJsLAyP5AgzPhK8yhiAqFJ1EyUZvzZZH5WcfMuKkdPyVcH33FiHKr6rs",
  "key17": "tMGTrRpnnS6JaCnQy2pJoFJ8gYhhCLnPMg8EJP9yPDeSn3DqX5GwgD3rynC48ZP97hinTZj2Z7u6Yede7W5k8HT",
  "key18": "snrZTLTTZiSTUdKYEEFNk3kkqnowg7R2YUbjfKQeMLJQimPa4YaqnxviC2H3fFiVkJTe7ZvbtR9JM5xesbZJTiY",
  "key19": "4ZCpTyGk4F6qvP7R7SZhQ33BCGzywGVtWGJPqWQDkmfWaCQdgukwre38TUKm9nLyhrgGxBK2f2yxJPop1kG1b2cj",
  "key20": "3oCh9wAWqf1h7WL3i3Kc2dFPdB2g8ASuKiEXyNtTuFMopbHVk2MDaVFq8cHzeViHwghcwU7jeCZsjcyB5TAVLhMS",
  "key21": "4HQxxnaejxa7pxL6yVcEs9zfgvHbYvmQtMRrLE1ZqGfAWDkkiTioyFRA96KZTHvku5DNZRXj3FDMNjPoPy8ZPtLn",
  "key22": "4Tn4Xdd2LhNip7saaB5KWAKuDYgYseAgxuZEC3eUbCJ8XujUmYmdzGc7idnHAF2WeHyhTzea1fEHSjw4ST6PVhPC",
  "key23": "4srFSkvGjURSRYKunkJzHcobigFVhFXeAwm8R4pWSucWMkoVqU56bqMcuQdSkwjUDczQxo7MwgRLCQxrrkharU9P",
  "key24": "VWu3bK983nW3zmcbrCe68A2PxQ2nU9j2Brgy6KQqC6hURbs5sWbkfW9QuTrnY2e1pL86E6DDipyRex4pV4Ucap2",
  "key25": "67Dcqw22BJTafRn3epLC1LZz3Ak688FEKMSaexZZwu1uLD3NP377mpGPCenvD5UpYcJadFK2GnomfhNGMNuPXNbZ",
  "key26": "6755ey3tgEJjmJQhUmoQopH3vg9co8AqE9KUyojyRmPhzEXDaUyNFQZoqRur85632h5G9Z6hZV6wFGpapQwSdLi8",
  "key27": "4SMMsv4Q57sUp6Lvo5BMTKxmsfvHgrxGKez5TKzaNB46S9XdK1dNXWhqBxw6P2kVYHoM2dbCVZmJKSeeyjVtfSbh",
  "key28": "66zLDrpKiVHvC47t3m4rvqZqYdNWPsW5zerdXGPtNsWX3CQT4oAwwiLeuMugEnm7cd8WbuNhRHM84dGttJg4jUhr",
  "key29": "2d4CYRPQEmMFaJsuR5jSozB3VDp59xZ3sfHQPD7t9JvRavVbHWyDkGtzdV6fKSeL6YoM7UtHfJeRPSRsCM4akfC1",
  "key30": "nM3GBW3kH39ghJdnSAK161wPcF3MLKGj9xDv49uCDD1uJFGXb9TuPDCKRr5LK641e4c1mQYijgpnYmgG6PJj7Kd",
  "key31": "2K6mEs8cJoCguUUhikaHtR1cGMb8XNTgQdqJpiyAaNVccgv3rm59XeavBaij1Qs1PdvCBQqQWnCM3cztoaTLe1ok",
  "key32": "4cwHdj1ZcEdYdmgbEPZFnUU2VzCLLZz7SSqxB7Zoy4xF1pHkJRYhEfaH7bewgvYcCwXJdNajD4xh9gi6VYG7uefv",
  "key33": "4cZBdDEY1ZzcywbRmfcFFEp9GqT2uURkgcoMUjakgFQJNdM9sRqRMe3g1jrgKo1oAvahPgfrSrLy2TeguL29WXnZ",
  "key34": "2ASPYcjcuaNCSStJ9onRWkJtbhaC28x8g8kLkUKR1N9dLAVdRfwnrx19aMFMTjq3EVXvfSCN5zzbR3viqSyJu8xh",
  "key35": "4Y3nCyjs59grWDZCbUKkqHMYx9YSK4MeYMD3MseDiw6BhHyquXDs9zEf5JEb2TBuvWbktUez7rJPW6KQKUgbnmHp",
  "key36": "5z8NFjQyRECTXZpJVn6jbDqRPGKC5AiZ6wEEr5ghszNpCBpz3gozxQRu8uQixW7CbDTLmgSTpRfX2B3znjyMxxDc",
  "key37": "5qy3j7JPVpRvSYfuuwLkNCKQnNR5wW5uWzhVnqCjvKHnLFDdwS8EmzjDhEuMLVQqgGVjLgyCV3spCr3BVhrqrAyi",
  "key38": "26FKr3BXconM3NLUS4uAzWmRh1k845ixG2WiCiK4KLDi7cgB4aFTbNzWV7hdfrYCh1VpCbLjpQt9ch9Y2UudPJPp",
  "key39": "3jcMvPohNvSzJT2DyGqXakwG91eHuh6GC1av95G6rtRL9xPC4RktcnAL3HaP9Jav7KzEYazVgKqYPv9DRHL3BFQM",
  "key40": "inJnz5vX4tFrxCncQfpu65kGoAFZTFCYJYUvB4MiBtkA4PAk4VhpNYCkXCWRqT1xQ3KDTZTdFYqvDaHwvEE2NSU",
  "key41": "4GVoNQZt4PauhPDsmyco3NUhG5W1xFkHbC9Rhye7Lho1DmPyxjaaG4mzrHgkqbpRnSjAZT3Qo4otx9Bp5So8755W"
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
