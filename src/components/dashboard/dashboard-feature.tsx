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
    "2Jos1NzocwK3PEEp6HwEW8gA7itsa2Uj3xuw11UXzrYKQxGvgFxo7T7YeVtfh16ERhBFRxWwKwCnnXSnsjJ71E5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HxNJTn7jLxA9tHowRa5NE2oxFhJUSngAyPX24T1uieYrDCmmUehKTGMPMWUtk5zDNUnJXLsei5Ba2vbEWpKkrGZ",
  "key1": "5bzwSeauk3zzkxU1r5BxcXXGuUtuSNqndBq9wqKysMEu4Sxw3E8VKqTSnEomUBjG6xazWTuKbVUaarT9cWsQvA48",
  "key2": "Zg3UC3dayqqsTEXLas2zUo4bhhN49kgEUk1suFoJrPkAQyu5CRBtbyqZ2tVQNfVUcxBcz9LBZA4CQrKPEUoPJTP",
  "key3": "3CvJnCVwDvGhuwb5tUz3D745QFgqV9raqpX1UzGTRBLPEwgsisxEKKZtAEU2V97jGjSMa7dUcK8Dz6cRNsoasb2d",
  "key4": "2GEb68mHYhVDTmpcwk4SX4FJewxPkAq4ccyJq1bEvZ4cfFw6nqnMS2PhFxbGMdadUZj37adNLSzKsw7ogAbUqzP1",
  "key5": "3fRxhzSUEB3wet2jyQuZjQ4mFuRZke31NnsjuMc5ihrUr9Su9YZdpRuLfyeUk5wChCgpudXijRwPqvimFScXCA9R",
  "key6": "4h83Y8pbZhKXNBoigBUto1EH1tG3QQCP121QoWh7trT745Q7Eehugn1PqY4D3G4845PWCFWsAD7NzL6sjMoS9RT7",
  "key7": "3JHfw58qofMGvEPxtqKBeHvJm6PqrWsF2TzR7VZLp9mMhmmtocAAADH31LeTVg1E5yc2gg7u9zS7yztgDkC5oFYA",
  "key8": "5cU8MU1TLcF7ozu8117LEKJzFseiWxkB82C8Uc8UZxZu2viEq4uhtmR8yqu4XHJxcCZXSSuLcQzdzj6oZVbYPAER",
  "key9": "29feKs5aDChTGqNMqTpij34z16JX3g4h5pnNQp78yXsbK1JTHjKhQzEqnJ5xWXei1Wauzf6MrGsRk4TBB2bUytzb",
  "key10": "LGtMJNq8dM7wBuvjsKF5K4LjfLv5xVFtsTYD38vMJYmPWkHWNy2qXBaC9cXJZi2i6tBCeg21wneHa7XiaTcRhx2",
  "key11": "2cCEWG88BRRMknqmkeBamuQgmjKoQB47DhdRSsDYzkDMjNikce6Z82T9urxc6tx9gWg4x35gpXCQhTPevssrTC54",
  "key12": "e4TvsDKPkAUUs7HccrTxRnvbKBLCQaMLdCs9e2TwcUN8Ez467PVDxPV5gfX8YbH7Chi6GSVWGchTgcuub3c5Lbu",
  "key13": "3BLDDQQE1b6fMMk6KgTLpMfTU5hui6kDeG9m7GzrQt7tiYYdPiPVnjgWkFhmXFvvmrmeewNLgtkB8Nqd55M3ZS1H",
  "key14": "3wDEXKeyK5jwDPvqUnwjtngvpCEanWMjm2qkVeMqRNSLVvPnZBbruPnDgJvxChmQMhQVinwGTe6rjLtNBX1GrgVC",
  "key15": "5nVWjd4akgXvU3sbe469RnBTjis2nd67oo8YMZgfzYBZcapP6NkmMjt9uNhGSiz3ptTjGrZGjbKPvdWKTFCiv76r",
  "key16": "33J3qzcfmjQ181oXY7FmKBC9SKoXe5ouRt8Lgs6H6y3ntF3EvBstNWuv7qJJx8prQW7SkLE2bKcwBPCNpt8GD9Jw",
  "key17": "2mLN2SdF9rv9UUgXovLPA7JtAc11ccCEabemPSkKByrkgGWm1k5aEru1XCkvXxB93c59GMsZdVHgVZFoWuZo86Fu",
  "key18": "52aVyySYuaokPhH5AupzEiSh3NcRcuX5j4tkoCi6LLUAE9rfSRP5AKdZHMmyYcYxMJowpJBQHHAaDAB8nsRsHqqA",
  "key19": "57vbkwAn2xTpCLLK82kWUNiujHExr8kwiMdwrwsrMrUTknZ5ypxDsgyKMkwUu9JTXSnE3tTqDVygsZMFn7MkLhMP",
  "key20": "5VutmhoJA5qwP53GaAppAXzWjyQeQfpN6a2LQnVEEBhHE93pUHXhX1nqc3jVbbDNBqA1BZcdXoojGQoHtTEpG9CU",
  "key21": "5mVeuHg7M3hTi8tY6G4XtMHC9Z2RScQm3kkMZ348RiCq4bSqRRXrFtPtzu7fsGbpCkXweEcg5Q9qWwZ3ZYiEP6KF",
  "key22": "tBSm5xyyUu6UZpPahouCuvQXkfw9SHLagVUgc6z2t9m8Gh2s1uxitKViFiNAfGFemMes9aUxz7Pv2P73eD1h4qn",
  "key23": "492Cv9UYfkkYePGCHHArYbwCdGWLtteKhrpqa25M3A3U3GLEai2T2cc9JuF4EDwVqEze8N74DZv3CQ3J8Dhr2Fcq",
  "key24": "3tEWxNY2prd2L4U6r15c4ykttVwAmfNCpFEmNVULMGCJe7hMjSPBcmcL1dRupef2zCybsSXT3RTitj2BfkQmLdVw",
  "key25": "5B4HUqp8ttrXVAh6j7BarP9QLjhsDdx8PEmzb3AKVF955roq12ZvNYtQ4szVi4fMtNgw2yQnrDo1cwugKNfecGAf",
  "key26": "21VndjC3JS6DJwePaLtnFLqs8TLsLhLvkAk9G23hrXVXQRJtzfqQuzH6wSTAV2cP4s7MYvhMUyYkyeBGqR82F3VF",
  "key27": "5aC7Va1kH9bd4HTjPEe2hfN16kzDW5izNgT5wAAPVXUtzrYuf4n556LbydoCQVfQs7A7z2ooYthURjWtPCXusABk",
  "key28": "4ppTdmQy2sfcqKxMK78HnCGxcPtQYBATHEsnz3qYr72tqgHmGPWktk8ZM8TMcYCcXvPspCRqLfH1TovibQK4m1dd",
  "key29": "B4hL9N6cyECk7nUcenbkgPE2qt5v4u8Bu75UifQ6tzz8TM61jBatMpgKMxfqku61guFZnVfqRzKgyC9QkpW3DFG",
  "key30": "2ovJ4ZEZpwVqnohJhyXTHF25ShpzQZzrWTyHxq6RhbnRB6mHBvwjSc6trsRLqnUEwcby9uoLxNiw9AEFYsdtrpYm",
  "key31": "5JbJR9CNMxhLqkV3Hwf5Uh68NCNvsZs9yUe995MMKomkYVxcSwBMp8rasHYiJhRqibY9C7tgXnntcEdANgREsVmc",
  "key32": "mXgSmzKaimWhjupr8VixEHBUuEeqQErMu7QgJSh8f5fjc31EnyhkSFBs1akUqJLNp6tMvgc47djTskwdoHqXJYb",
  "key33": "3ndrS4ty8uDgpAUrqZ8ctw5FPjRF4u3tKdzRzEHvcK7wQbnrL8CbJCZer5QLPTCvfdnFa2Gb9uYLZhaHASyM163Y",
  "key34": "7AW48rJvb3aCPnw98Mtp6ZhYbfSxErGkgsbsQygwmj5BrUkABfHYk1DH3tkyRNuYZXN9qRAZLrsK5hYjiPbDj9k",
  "key35": "2Y9Lpj9CRfWcCixoGxq2ZK5ge1qu4oJoywK2hBkdVjcx4C6qQRFb3Juvw4Wjkde5Kw6ZvroPod3guAHc9gSoGzQF",
  "key36": "2eqmJvTpf7cyn2sjbkwK2y7EaUGoJNB6nVQFQW7VJBZ3WW6fneVkpzd34Lhxma7GiTs1QvA3R2Ke1jF1HhSgMVvB",
  "key37": "3pnp7d3SqytqnxAM4iKT2HajCvwUF7ZjkXnsrW7JLLWgAuszqQqah1ZmNHcXA8SZEXGbDhmA23QcAmVbcDc1sX7L",
  "key38": "67E4ebC13LoRyufSjKmu5VkgmVjBZvd3Ld5gS8AU3gqhyHbCvqxxchoc7MACEtfsXM5g7ZgQBnxSJdyaaxMuJg92",
  "key39": "5Zm2smQwEbPygKdHWq1JKDX92pxu8jGRM7Ek25QeAVmTfa5kuZaZgxXRSkXbX9asJxxs12mzmxoK7gC5c4Y5ruNL",
  "key40": "212MTCArDv6ye3mVNorLZETMFCbV3DxNpezKtaTNzEnLCcpn1RrDrEGtTBE9SWGF1ACng9NWJn9J6ofrqhpJN5eU",
  "key41": "2yhyrXEQZqWiGXYadp1J22zRu21gx2ghpZ3kdCPGb4tshbj1ZnWEwvJB8ptxaq17ieXiyf7xkiYdRz9Yytsg6JPi",
  "key42": "66LGYUGCSM7RDaGaWGfBnCmBFYZPWPRsyZvzejvTsETs6cGFCf9MBw1b3yPnixTcuNhBneZrPpjCKpgokw4W3krE",
  "key43": "5eAGikPFFX1eJCMGvBHkmWD451WBANYRDznrgCzuyAzP9St3LzJG34CjJ5x1XfJXdDRZ94ahyxR5syH7HTRiDDs4",
  "key44": "4MWXzZPRJeb8Ma4opZXwtov3NpqgMeispkZrAFZZVF5Gfh9tK8kmPR9couneiMvBdYAaTQxpTRE2aBddUTkRcYMs"
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
