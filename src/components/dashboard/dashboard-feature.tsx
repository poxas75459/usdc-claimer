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
    "4DrWideatdnJRDWY89w8PNtGFcykPbBTLVytAiHtX3ZcH78PArM5nkHEPUpv688hZv4BQsSMwdi4o1SyuUYtRehB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L71ZHvHw8JugpuZEeUFx2HfYeUHyCHsaFLrkYSTj1xMBNKM2pnnRhukSZH2FYgVJdgkm9HAQyXWoaKeMwwFva8n",
  "key1": "3Qmhz5HJY11xW7LfTB6nHjDEhxKQtyD1aYPDef7KWaqYwiH9yeBWFW1KDtkRMFJzuBB1v4i96AoS788AFHbWxhp7",
  "key2": "4SCE9hGdzqxi5ucJumEyNzSDS8xKqVta9xoV84QPeGAbwm48aEemjARKgHLGfpDUmiRfja9pzPCQvWnSLGU4cqw6",
  "key3": "3cSeyBpTtn3qmnG1hqAFQT3ooj3Ewe6pKdmu3i3RVg3FRr4n6UzvCsojL5e4Ay1uktWSxGhi2Ltv4AWC68f7MBke",
  "key4": "3Ds1ETL7mQwuXRRKhDrTm2uwu6cz2AJDRBGkueFPXveFnndoKNWjjUYhW9pkbGzaUMwHttFB41iJ8Ta5s8o9ffN4",
  "key5": "24cHLbPS2bu4JpKFGYC9vnNxZgakkkS9NzALU7n5SXYyXiQW2kF6i8vyJpJvJo4Fvqk1Jp42hkYQLtiDfXqEkx3S",
  "key6": "3kZCmxyJyFREfR8p9vLbRZRNMxuKUFBUbxbmqB671dhax4kti7DZUcriG1rtaoK8xVq4VFRAn7oDu8kjJadhBrrj",
  "key7": "4hmG1QG8M5AkkaPwvoRHxkX8YfxkELMX7oeZh2pawHVuPbTfxAhRxum6NS9s5tLmeuanpMvcbjufaz6Au2XHu3md",
  "key8": "5ug83Zct311oCm1rkg7hajAzkHAFPWz1VLx2tFDypVtZ5iz7PFMYwRPLRVGs5S2RpxLJkir56g31hfpiGER27NRW",
  "key9": "2knpVZax3HTUw2L4XuwgHup3R4uW8qagHoy9BBNydeLqBxqaCnQjzjRu2HJ8j7mva5CX2S7PdTzZCW6YKM8etguZ",
  "key10": "2uQRZpzZuvjm4UquaoGQDC4kgGcNeiWgbNwSWsPVcR7t5DfhtW8HQuJuXARbmi48CUg8wGt5HgpyPxaKnFkd5jcZ",
  "key11": "32kvB3TmKDmNdXELawo35xakbGtBb4VS1EZ4g12gpd2vXGKd7XxddqnCERX4pTEPLc677gHPZGH8FyjewC4e62bV",
  "key12": "5EThEvUa6Xf957FGBC9VTqX1dtSp845XwXTN55NXD9hG7aeb4z6Y2tAbTtCjpsesNTv2DYcK3WUCLJn1S1ZuTCs8",
  "key13": "2Brbjbm2bvDT8h9xSfCYogVdoysddyvsWmyzY6hTw2bnQgGkGYbVXgC9GXQzQFbD4EAgeepaf62scgEP41bj4nj5",
  "key14": "5d69UgNBR7hx1EECWLGNEYwehxcZh2SmUt439axzMYXiRBmbN9FKy1PZ82HmjGVRhiQCGAoS8MDnN6vuJdMEbr7z",
  "key15": "szU1jm4qUaZtCVZMJB7XsVa96uwmXWU7Yk3F2t5autQojPuhgKa7GFodSiKYZ6gpJKgmLRdrWBm6oXdb6AudMFG",
  "key16": "4CqGUEo1xEhz6R6n8RudpZZzSPAKUGADdXUGeS1TYxcWy21aJofG2R8nKwnzczwQnJ7oXX5nsSq9K7zXjYcDCCcR",
  "key17": "2We9xtnQjibNftJPpLKFv9RWqfUuQcMw8gvMTvkNUe78DUvwCeTPAeYwmcu2a1h4jRHZrRzsQWTcxWVkY5pejz7f",
  "key18": "5qRYTGtBq3uUQiHNJn5qN3mp7TF8w2yCLexZ1BxQyBqXe2jgh3AZ2Ad225qsXquBK9HVbB4ujg7hkAsfD8jdQisC",
  "key19": "5SR6CBL5CGxnJ5wvJ5T8LcETrpyVUYpouyhRpz6d238XnwFRd4xZ3eUDJAKtS4PkCcb3DczGq1g4mGXbSXLBywSV",
  "key20": "2bGJdrzmxyyZ7WkftnoiQ4BFz8fg3gwDwD8cSYnkPLRWqMCgHDVCKBVqTSBw5LTS9nn2681mEaLKRCAwngTmLbG8",
  "key21": "3riyyUBFeuxmQpLRvwgF2mPDEHNU3HLrxNjGrGgUZFA4JnixT5m3CM5KhyRHxi9m8yP8M1TpWpy5RBpcvzsZ4qxT",
  "key22": "2LmWFjWGqqQ6RvGVTQvwW6KTyixAP5V1BVaF6YptaFGmLU7Em9NDWPfGD8nW4AuQaY5SuDzfihRLxWx3CGucANrX",
  "key23": "VvWY63eZvRxYaPptF3gNREbCAbfMmWpEBogQdTvTMZix8DgMsjmzT3iZzZijQqf74JC5pRxKXeJE6LxyV1MLA7S",
  "key24": "4uUASUsUQwfAmTCb83zdA6Q6hJmE8sNRfDn2YKHheQ9THhtXYXKnAMTT87J7xiaStpVAYYX6AfpCTceMR1UZPb8V",
  "key25": "3vhMX76ezpcp1WkYwQ2Bh9ZeuDBiuVRZCFoUYiQB1eTg2VopDMmNgjH5cCn4E1CshvfVUHKcmsRF2bcSTvfHDuPU",
  "key26": "2RA9VxB2foeHxvmmkx4PCd6qECDGvp3uRmMaPPDUomFwseVSW6ewDzKgQAosk87jPjeDThd1nT8JdKKobMoYhC2i",
  "key27": "3CZBg1WimertmrkqbryNrex9BWMrkuwsSHH8fGMGsMKHKCPKQrkCgkFu6fr6ybtWVWcrv9gRyqxn1UymGd5YthJu",
  "key28": "2jwKWnecWHG9Z456pxMr5BrwrRMgzRonndagBzHpkyK9swJhQGNh3Nm2ojj9bMfw6qhyE9DbgRhdyTCfvRR4MNsb",
  "key29": "3JKkUa9gVvhoENPXyBviAq3E1h7ztueZ5nrCD5SAxjnb24JfYJHoZfbDfkb7gSugQe3wd4i2AnCDqTBc4tH6enZL",
  "key30": "39URQWbThaQQ9RxdGmUkjLdFLHwQfcbqqw3du3xv85HVoCTmax7uDFspmdQ4xKz2bmj5UXWLUMkQPXsxcPAnrUbm",
  "key31": "2h1WpyTj36rQsnqQxkcK4Dn2DgQyJ69nsBxQUBkFH6GQb2CGX5Gty4u5qtCBGhh6q2L9KLm12mBzKnwSBVF5Dqzk",
  "key32": "pC5vMByfsya9KxbvS6mKiGLzSCNwEvPUahf5VaD5B1CMQGXDtZWSkU9ngH38yvhFhmR91MPEmxao3anMK5mdTSS",
  "key33": "2YMMPqQ35BDw7FiVKEZjDzV2qtA6ThvFqoQFnLvrTrJmgWpC52RXVUL8iKGSJKbykAtUG2xa499rD5SFzQcozPmA",
  "key34": "2Yz2VA5jbd3bYL3uSXndrDp8Xov1F5UMhoiwXB5KkYertdGvFKBqQJ7k79XUxTMVwc5UxgUMjEGu6SwH7yAshe8r",
  "key35": "5oieEoBYYLb27aoL9kw6xbJ2WPYFY7EdqkgEXeHMMdrLYCqRkwFBp1xhg3UEZy4GvSottns6SN8GXEVxYkeTnz7t",
  "key36": "5iNpcMxRieSko8W5YbRnYqL633ubS1MrytfoNhTro9CYWeGMdomHLZFbpAboiQK8NLXBovHBUaDFtEtXYanjxzKV",
  "key37": "4KmqPSoikgCVgRseC8XAe5d6xZw4GcxQkBvQ25HLfqjuZ3SsFwQE4eaHvy8sYMWBP3sVGNkAxn9y1fXR98Z913NT",
  "key38": "5Y8G5P1yKrGYquQBxd9r8cbiMwF4gnnrtvfVxaa7KYaAyKToser82ZTxUyJ3gCXKPr95C2jcT8urek9ztchS7Jct",
  "key39": "9DFeMwed1RWMSxGBs9bv3DB4YWd7LxwS51kS2tz4RJsugKsjqRs7xwedgT9paf71PsaSn4tgpbMPAcTQZrmhsUG",
  "key40": "39mXZ1DktubVPqdC4pFnKMqxuR7bq49Z8owEcR8Tc8kPqmWBs1ckMuiMFvW77Rx2jdz3Cze694ExGcLQVvSW42qq",
  "key41": "3o1WNvhXouf8ipDmBSMY2KdtNsEP9xo68gNjNdvuSed5wYe15fv1Ni3wxS78v9i1pVX5isRMkPEVowBYjMVifxAS",
  "key42": "5yi3rTUoZHXNHFHxypCNgTNk14TBduNQYSKekZVEg64nhQMMDDyarab7mGQa47MZP21udoyP6GqzUGNCgPoEGqLP",
  "key43": "4zqpjMR4BSVMbRgPxroy8gPB2gd2FKVuba1LZHSUQn92BUugEiW2A8zQU1eFV6n8dibXoAtwy4wmGE4NyS4gwEtB",
  "key44": "4Dx66G8Wtj1qEGrz16tXphw8wEAQ7vvudtLGMgbo7fZmv3jMayHH2i2GRZxTCK6jJB9fpDgNzx5ZbMXKzRVLVRmH",
  "key45": "5tXJK9E2es9yJ7pcLBfQRmbYLRBxbd8LrTkEQkntgtGoYtbyhF32M74MyPX7GckHcnANCBNhcjgf1nPXLR1GS1PU",
  "key46": "41LgjTjd4fPwiytF2NXnZi8ZPyXzmHd2gfrHUsCXoHLBzKMV87WKN9iySRgEnwW7cErNAJHciU2huWBX5EgBBYay",
  "key47": "3urM7HowbC3HuL9w33CasV5Qm6KFzwoqL2uw4QbTnGgToWZWKiyaFGphJPYp3De169XWtkswVtzmzBrnCs9R2a9n",
  "key48": "42fezyQmknu3BxWtYFnD6UY67Z7wVEu7NorB9L2Kkqgc4Zq78VgX3ns2scxp5XuWYew8MQMy5CKBdLUqP4PH41H1",
  "key49": "2GC5WBntJNxbtwyyhW7mDpfrnkyp9gMsGRBA4x9nfpqNoefd9bEsU6RaqxWwLXhHGD9t5sbi72oZfJNDRGyesK9B"
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
