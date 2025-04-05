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
    "ojoT1T9KcNct6diuJXpE8vxWDmaJph6QFmBDdt18edbM8XPTXUSAAx3G18q1qPPYZpM5U31qx4qgGsmgXXXEjq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sxp4WSjSFrQokCRJqkn33154Lay3ndJK22jVj2dV1LKuiu6dCH53iHXJVxvG3yuwft8Su6acDtQKuDP13acwPf5",
  "key1": "49cd4bmmKD6ZNc8EQyQNNepX9rLw4Pak2xEgBwzej39Jf24jyXscgteVrSDPWFvw4DMM27Rwyhy8SHMnUTy2whk9",
  "key2": "V8TKaCfFvn6NB7EefPyQ3XWRZHHWzNC5PhmYBuXjxpZJEySETw6GJF17B24ygFjqNb3jkNBNH9nqHd7STpdSDJi",
  "key3": "4hDAqFyCVVr8ieSYvdsCNJrhA7k2xMhFYYLH5fJ9CbD6KEy1m9vyZ1bDEFeS19XSwYEhfZzemDzBNbTgqDYAr8wz",
  "key4": "2wh8BqHCVZuYQ7vks1tt7YZp4r9CuFTcqb47u8brKp9w98KkcyeZryFeSp2ocH74LTV2BTL3VZcLnUQ8kYH52LoN",
  "key5": "2LkZVAqYximhBBM1HoK3bioAgPNJSFu2Bbo6UpNVUmfKf312D9LdbAbj2P2tHS4tpLzxhLh83Je41FiQ3f1qr7hG",
  "key6": "zGWBKUeqfZ2wsa5B4j8bfuPFB1zp68NASvgDAcm1LZNGR3pQ5aJeC2U95Fpcc8vamwCMJbeDgEAoK36aviEeuZJ",
  "key7": "WyvDTSHRKB2PGUA2k5jW5jmekEgoZx1rxjz3HXeBQjE8DUJSPYmdT5HUCtNGYH4YEBv25cztqrVeRUYRXuYMUQf",
  "key8": "4SCiNXmVRJDzcFGCUo2ayJ4gjmiYyTw9PMARafLegG5hQPYXeTFZc7VDyjv8i4gJDtG23xtP2N2je8oCL6kTvwME",
  "key9": "5Zgh933zzxZRB3JqmE8q9DaUxmKEumkvKwLwrL2bUFE2yGqnDQx4tC2zsrPA8fKUK6oFXpoPKWdHovCAbn93b1A6",
  "key10": "3Dteyi1M4qgzj9c8ktjAuGAjUQf51pdFvSmPn6Z1qfCAU3QcsedXz9vSJ55DsHDwnpSfS3WbnePTkUjzxKXLJqPm",
  "key11": "47ESM7p1DF3XCRSKKitFz1XUuCDi2btVgGwvcvgfvZgpw6EW8DwjB3CkrGxrr6FLBuWmKdX5oyZPDMCex6JcQXru",
  "key12": "Ncoj6QJxTnjBUzhpubP1qFFnvLtVo1VxSvnAGAMfwRgeFPNYn94oY2biexEYh8AiYmXnigFy5VhpNq5ZUx9c8mL",
  "key13": "45BVGX8vu74x7JPyrku7aWfGt8jicqdEYqEUPbqgz7BSiWveqRYXRsYqayGPBj81o2riVeDL617FHo4pfMAsLp7v",
  "key14": "wgd1tCvZgTD3cWE3HjRQsCJ9jDPg5KT24braZNg5n5ZUgWaf7H8v5ftftYq3BbKy3ESS1LtHdtHyXJJ2SmKyHyk",
  "key15": "35ayemnF2DkSig8YVMGbpH8i83Uf1JFBvyNULeuofTayg5RjhXk4MHHqUo3QXrmAbAnpx9TkBLUYx3b84CxUWapM",
  "key16": "5hsjUKzKDUNCyki8RjbNPrYsCG3t6BkA3XMnH6rpeGLoCsPiLghjAGpd8NVBGJAaym5TpDJv9N5kXgKkfrxwRWmW",
  "key17": "5nhH5VgP29DuyiooxHkweewDNwzjzP3CsWvuA6ysjGK9V3Qxkgo5jKCTbLsGSYJBobPtdPrksUdhZqBPMkg7Ryki",
  "key18": "dx7Qgnaek5djfj4Z3wGpix6sebq6Ts6kapLfDLjaqTXNTqvmLotcN4MG4K1ahBnbum2ULzcKMjUGNvSsTBEFCLj",
  "key19": "2Wne2K1Nqbd6RsaGyXfyHEmGV2z6yxRjhVvrz7MeaxBrMSqxhBfNrcnXAqdazVvoQn9ZmZWYWkENsyzDfzCpCst3",
  "key20": "3W8vw9i4vJTZiAqyMrHijvtMEjVabe4GZJTVSBPYof9svd57VBQdxvwBieQtVvQ1hpkupJVqWnfhXG7TDkyDADB",
  "key21": "3vEnVE6hwComHHkC7h1iLJnKWUGsVLPrbT72evdQ2rQorbVLv8DgpFaRpjFg5hmnaPqKsNpEY2YwL37P99pHM4Jo",
  "key22": "2tUNG6ggvzWW8sNpNTVQUrNvafcLxtGVgdMkQ4kNusAyetB4M1tb7LQEZE7FPKo9mXys4mwKgdqPpkTDnMzGc2oh",
  "key23": "2ABTxaGYhERmwwT6KjoMe6VTLDnzPNBJVZu55VamaFkUKZkXUqXtwVhTyVvnxQExYALuBWXu7hh8yboUDUnQgveG",
  "key24": "3GuFEgcMwcP4SEpH3MCzwARP8hw9oaueG6Ja4mymwPD8FoV2HKduyHKyUTJCQ51Ef6oWxLJo2rtaqWudJ2DG5b9F",
  "key25": "khHgfChrbyf77zGgsSeGyuedFxV6iU6F7pULkbsdEidgvQy9qt3c966tp1wn6q5JcQVAeCuNdX8mp5EM4B1e8st",
  "key26": "2vXDwuA5jJN4pmd7z2epep8Ww7sUKgVhE77MuYc7PC3qEUX1tTdVqHXE7ephy7quTbCfNReSVUafAkK8vMsU6iEQ",
  "key27": "5GnPfdBNUi5YLXFR3k7oC4Zqg5dB6uHUoaXjGUX1sCGw93UHwMbX5PaqPEfFsp6EUwXa5ZM3p6s22grPy4bMxJUA",
  "key28": "2R5HjWABZGU44SxHtzwjBvtb5BUJwGKoYd8dRTtg9o4RMuFi3CHoUckrPfZhC8dTN3B2X9dk2d47xnsLgfwSjWmF",
  "key29": "qJ1sK4SmGpAqEsTby3LDiKfa59zEEooFH8aaTD7mcqtvqYxA7zAKXsfSReapE6Fo97oCBNwTwTXmSoQCWk84Pyq",
  "key30": "3uR1tTadLUCD1BZ1MvnUY9RrLbhT32LeyCk4TEjhfvJcN1bZL4k689eRYfSVgW7QtMTMSfUtRsRpNfTLnptHEjRD",
  "key31": "3NVQfZ6xFrsNRSbG2fnN2ew3L62EKap7k7qo6MpyCR72ay7fagr2U9JoMPQbi2tetujFDKCAxERZhXreVhf1Rz84"
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
