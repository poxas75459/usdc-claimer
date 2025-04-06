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
    "66hcS57c7WsoUDGYVPNb8AaA9DxjrnNZg8rrKf1Zbg3Kj52vddrkBGf3ZEvsY94mvGT2bgWV6sY5nGRPZ38WT2mZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBhS23CpkvXaRBQqSmug46BLMEM4P7NRWeMk3VMZToHZCF5qbZP8XfiRJQXZs1f2gRCbF4v3mg6WnHBtXyE7Zo7",
  "key1": "HWpn5Kfz5LVzgbrsQu2mqqxYfFDjSbAFnJRWgySqHgaaJLu7xLej3z2xxgasqQaLvpvQNBuzEJbpnbTkZLYgFEw",
  "key2": "348G3mqpKQRnHKAanAxfGp14mRGzpka7ARsQDQYoAK1TjZqDzLbymvXXpd5LqAStnFDV7CAcgepV5JQx8UgC85ik",
  "key3": "41swTxjB8wiWNKuADtudosqLyS6gBU7PA2Gqqnw6wuuSgeGY8x3yZrxBCwJVeEwcPnBNSGbm44uPLjPKUuCDufPo",
  "key4": "33aVjybonEgnTMuq7TF2VJnJ5mTK7fi9vbLACuRp38b5d1Us8719u3jchtPzDFGxbrTpfbR44ksNDMLnWGRkHPdV",
  "key5": "4LUiQwMYQ7NPHTZ68yfkoqLsAhCLh5LHwWw5J73M24ucqHELz3r72NnmLn6BMdDfQFb9vqDEgyGyRciFnDyytS8X",
  "key6": "5k3PiwGp4SrP74UZUXYNrGQ99yLMHGDmSbF6NrUqRox6b3Wx3kVGZ8mUU2JgGCHCurXJi9KDmXUbkb5FuxJUU9rp",
  "key7": "48ifDYZAefzZptFtqjghH7Ujm6NQK3aaBJa4hi4MFheq4GeFRE53pyjD8oDUooNbcZcsmREZu8nah2YY6FFkaxpQ",
  "key8": "ao89Z5vXDRje3PbN3JQyM4VbFzaGt7v87HB6jvNLPu9xG9P34WY7VaWTKzHSNTin2Cs48PsdvtoTCtRQ8dFpexG",
  "key9": "5nqzm52hCkSUDBGZryhFg58YyTtFHH8ibTLmkLPb7VocqHGaATcRPAT1UwYiQyw3tPWKJPAb6qztcp8aALcUtKny",
  "key10": "66NwginnkWbxPNP52ZeBmifxVfZQFifXtY9tdTbPyf4fLpvaMuHSy3FWkfb8U1auTYDdompHXmMSCxTuZpmgf35K",
  "key11": "zT8Lk3p7vzbCNoT3iNExKDfXCpb4vyCuEjNbUhuBmJjJy7A7JXj2HJsbirqTzZusdtFnqHttdXazQWYjShEPGWR",
  "key12": "3TiYTrcx3Q1hQKNymXXqFuFeuErF4uPznUpY8TzqDMRehymwqV9jt2982tZ2jnvCbi25HRFEpRVEZtw9sks2tQxX",
  "key13": "65NR7nq2i7n1qyx6kacNfr6hGy4ijVteLL1npsW7VfpdJc1cNiequV548AGKFXioCoudmpykhgmiPUGfNrEX5SHv",
  "key14": "5yMmGVxXB8UU6TFx2mCFYRCvir6qM9wQyiysJcaxWHKFK5sEMJhKRJj5ZFhcXsCpzkoBdM386jUFk8UhvfjwsMQg",
  "key15": "Bxm72xP8gsFtPDaQ43NRuMcm7EbozLXq2kvb7dxq7v8kyLERoSjHGCd3Tr3ohsXTcWtg2CKQLhvKPvnh5Ar7YsF",
  "key16": "FPViqMkSjeakpzdDh3fDk3btSWeqVrJw2bMxC9R6Wq3bttbCdvtXXeTdUJNGed8bTKziUEccbKjQu2TWkY9J1En",
  "key17": "3jGmPhzxK9YAF7JqMJ7CuGe8q6osChNqZMMsU7BiGFnJsbAkutUYQW19bNxoY3yN1gJKTvDKBinZdrA6yEq6ZAta",
  "key18": "5eqXxaEmH6WP7osmAt1Quv7sUNxMSomHsD1nhdptNttaeaZ4TTbmUzqF1zgWhH5aAcZunDdyLqfutd56PjjrrbhP",
  "key19": "2CJPcJxzQvAXjrjFthcJPVE43fMz6nGEsmTFYwc18eWtw1Q4GoB4xHi3D9x2ihv7W5PE6dgm7jHer1somUdbTjNR",
  "key20": "2B9yXv8oSX7PCfkp4JzLXHo5hN7TwMRkTbeobmha46vHjYAe3ep9mw6V1AEx3eSWHDBEWwRWCckLZKHMVvtBaZ3B",
  "key21": "2XTr6ydP4LRo542LEmD1C8epodSdQzuiQxw6LckNLYbEXFiBYpMgShPsMKGLHcq2mzhDYpatHFxwPrWy1ewwrr1g",
  "key22": "actPaiQKZUXmHGvZRr8QV5pUGoo8f8G2xDEEk8KDTzKjYv3RVTh86jYBYhm26Z4HuxtxyBCBZLLohRwgdwxF3tR",
  "key23": "2GBQ3nMf9VkKXA5GbP2mxVgNTVaHPgCWmB6on6Fmx9z9pj1AFMtxzX3kNNbmdWRXrjA4JPUyDVFAXtZFoW5QCxAU",
  "key24": "4mNg1MNgjMgiEUCwhG4ompdPMA26AUjNWsx9FSRedHGivovsGj1SWNut9BAfYNiDsKw4PL5QN8Cp3ffxbV4rt3E6",
  "key25": "4XEkfRLygAikpk8TDDFww2tG9qBN7fJRKU9vih61kpRLqm4rqsxUFKrqNhDrRZBj6mFsWjrmFkXwHPLCcb7Y5Sxo",
  "key26": "2ajyL7uQPGn4BxgGXRLVEZ2yx3j8ZvMwyFFasuv2o3Hkn9aGo92YUf9doUy7n6LcKAsxTHn1XAaA7b58F4mLsVt9",
  "key27": "4yko2CbsnPDzfsD3pTHiyvQ9UC46cU95GrCS6RMdTuZFAxAy7WmdWnm7o7nMZatyJRwTuvJJ3geCUhoNyFV5jyfa",
  "key28": "61a8HryMhxUACW6tCQNJjgZrbeVZ4Ktbjgv8cL5maVfmj7N57F1Lf9Rf9yiA4dMySJ4rVWmeFu1oWtPJXp7jt5uj",
  "key29": "JJqPT4PheV7pqkn4h7etAMGPqLduthENW2dL97Sw9dMtaBZFmTXuyBUw5n7f4RL7Z59peAZsVaumczdb7AuDHPo",
  "key30": "51pmyMrJZLTPPoDQDdt4z3S7pkRmG4x7EfTvF8j2YG75yQFm5AkrPxMRMnUr6FQafGs8L8hbSU1pBe9Spr5bJJmX",
  "key31": "3JSHZRuijp2t2F6YyjqBwircK2yeHL3hyBs2ZTqKjLwxZRVQvgXBNVzw4ckTCP3N11xJnZJ7T62AZhZKqhgg46h2",
  "key32": "3UHV1GxfMM3qG5CJGwp72MeEGT2kCeYfwqDc2185RjzTuf4UajKtRJmMJr2jZVSaSTonAgUcKHLrzsKpGum8Q7Gt",
  "key33": "5aYwPXrxa4z7WMAj7WY7aFYFu1BXkVtyTypXfCzayWR6v9Ed9uTbpY7ft7VtZsC2pcc4v6xXXzFSHsr8EKVeY2g1",
  "key34": "3w4nABuryb5jvWWa2qy35FECTpg8buqYeEMewUzyqrBxAaLpWHRNMoGGRAhsQE5PKdMmBVoHqY4EQfuGEtRgEBUJ",
  "key35": "5GSrh6UGyDA6EDXo8478BCfELQhiXUpaDLpQFz2bDGWVLs3es8Sm5VDRY98uWFzrkGYvVSVyVRPPZm8r3fFuZcDC",
  "key36": "fpjNR6o61FQjLkF8t5z7A8GXBMCArVz5GrMPUbcbatUa63SVCN9G6q2N6xuqWLwxmvTXGnsvgpMuyzxSsVBPR5a",
  "key37": "35Tsm8aPwJbQd2Ks3vJ7xUFVVW71WN8UxF7e5uaQo4kaDopm5X7rnBaYDx5G5NPKZNPM21hFyPUBEV3jVGH3g6MX",
  "key38": "4FPxY9GHXCBhVt2kMxiXupXr1cTQEuoqcc8K6NEHGsrUGrEE52AGR6MXVxDRcY28hodJyuRejfnZvPHUdjGYmfV9",
  "key39": "4ypGWi5PrDDZCWc2Vzr81pfC1Mxbf9vxgTvipKdeBqFaWdm2TFQSQkigLGhGYQZZQEgq1TvD6vnEtxpADsqQPaGD",
  "key40": "3o5eS2CpEPkF7pVmc26By8qsBtURpTA1LgL5rWfKM9fBL8mHT3GBJauigzg2XyaXBdGqhzJyPpXvJWBQGrrhygYp",
  "key41": "2W6FmU5xhuxa8anYmdFvdG32iStksbEPQPmcs1EZ786YrsjsCTuudrRQfKUqz6WEDZbAEwHQU6rjH34gmYnv3CtR"
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
