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
    "5ZXow1gkuqZXSvkqdxKFSeWGPRU1JeAgqkF48UZ81p1Fbzab1zNFG4K93BuVu93vi37FD39TFggbGsihwL6Nucvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hf7QzhAAVEqftmayCW1SqYjvpBRB7bD2kmeEwYwq4H1HB1mEiuAnbtjhxUeXgKRVRMy4tPD2nFcdWgb7n6NxoVG",
  "key1": "Mt8PNd4jtLZyEXqMNsRjAJnHMcm6QU5T6W6Fiyu3jiedU7q1Eh7gsWXgM9VpM1Mgy2vVxXvUXzFB1fhFFonTs4H",
  "key2": "SaG2Qw5N6GYmcuJRKrGKpojHFSjanss1z7BtWfhqufByWCfNHam5hypq8mnxPtRgZY2o6tHD7DrfD5YER9sVuZZ",
  "key3": "5jFZu92ebccUpY1Wha37hmnF3WuXgThbtpuhHZCcwnsjcfSyfJN8F8yJp9yND56EFPMjFTMjshT3nM7Rc5JZRXXQ",
  "key4": "2FAVsP3T2EJg9BWXqLzfyr4YECNogGtUwSp6A2toDRarMFNgRwzy3g564kSdLKDLJ7EnXsnVKashEcZmWE8Ycf9H",
  "key5": "4Nx73hqGARzWjjbbNKj48rzoXC3jcSuaQqk89j2vn2MeUUD1ifGAheu4cfitBfYvSXSzqZFitpKzMGaBuhw9mi9s",
  "key6": "2q6FY7ydi8EAcy94P5fe7y8g5RvHkY3PL4iDFbZFG3Jp32DfvSCeXddBbf31fyUT6c3KsUKvVq2poVxFKJqcXEdb",
  "key7": "4DQ48rghqALFjKXcZCxJfhe7zgDZzH4uvA2qh3hPwKQKmzh5g5YfpXyJz8A7MDs9CPGR7GSnz5pYE7NZhL49ncE8",
  "key8": "24TEMxAedUApQmZ4KULpQeb3tnzoUSC7sMpq7hsAsWnHuQ9UDQvGcVJcpNirjxDcfz9Se55AqxWxU92DtpWE36TH",
  "key9": "4op6SCLDoq7GeV9tvchGajbPp52oDhDjyKra7gMSm28VJNCPaj2hbuyjRg2aTY8ssArvs86JAhRtEXPMmYYkuHWq",
  "key10": "4rgXcRmrC6KiSgy9e1BRAC2TQVz8ijtam6Dzxa3WWTJE2DhS8f1wBuWTEVcoAB5tApugnomf9UR1zr4YyF8A8yw4",
  "key11": "aguhaWcVPkbCoioQhPqheD4bnGrWA1JPxocBgTE2JetsfGwyDLRNa1yWY2A2F6j7atFqNPeiUuXV8YBgdfUfZg8",
  "key12": "5H1DHSkob2dqZtySE4WfMtc2VTpBLf1GdCqc1pGdDLtkariaGttGYfxx4aEmQNNxubDf6jXbQoDkm548kkJggnhE",
  "key13": "2g67UpUPVCdpRDzxdua8Z8LmRgHUA7G5bLzQubkbuHbmSF9vzuFQsgUvv8bTWAXY2Ni9ohA5chhfbFCVUJ8cfKtk",
  "key14": "4i9CYzsFMFjXjAqcXRhstGVPorwtmBFSsyTj72Pjp4Zq3iqw6MzNCU7MAVKusyK6ojzscUXoU7vCSQpiCQxJphwB",
  "key15": "ENWc8KLrMqVyZDTozXYJyNSJWkugTQP2oJ5J97zd8mYYMEWT12n4vU85QeGe8bLV9dSpgwYNUytWEtSs5hS81ZY",
  "key16": "5g2LEScjLnpGYhPTCDe2EBpZPCjjUvJxZPfRUe6qEy5pyNDAkosRkbTw5K3n8bcahQwhP7DEbQXjz69RDGgw9XhG",
  "key17": "1wNLnopZXPKoGC4r97j78sRBuFc8bkJ4mdnpmUhKaJ1upezjD8MzD9xeB3wa3JsRkVHPEXRSegUt1ZybnEuzoUy",
  "key18": "396P8hohQgj6B7who1tHxcK6YwmtJpaXa6r8w9mMdm4A6cqg7Yf8wZDQtT2osfr5TLvTgSMBzjxRZQL4mDhkgWwW",
  "key19": "3VJBY9CV3mNUw3eG8FX8AbzPMb8CpooacBGVZTrMQYaY2xSc8ZygVnnJKYttzzvAiheBAnZLwaqfCu1P1SodRtky",
  "key20": "4hkVgrDYG3fkmq4oT9RAgurkh1wQMgLXcM5AMSsR8n6t6KbeHYK7B633CmDvaKBJfqBZofXao2J9RpbLz4NvfSyf",
  "key21": "4BRsoemu28VWW6ZoGpbEQhqrwpxnH2xoMVZvFq8YsWi7tCHiodJz9vkK8LJHaMfU78uLj6ecdS8dBUgQKvhiVnk7",
  "key22": "2x1qZJVMwX39TuZgKJy8uHvfQxJf3QEJobotFwb4M4g1D1gSVGZ7BZu2vNS2Zv13abBZb427vGp5zVvuQ7UhYrZL",
  "key23": "2w2bKKgtDEWsbwE72wrpxho7MyQ25aueUVRT1Lx8aeJTM91NQCaWanHVAB6WoSJGmqtwbZkkADVX2k9xhmcjKR2h",
  "key24": "5QBLBJv4iJxXTqWnXwReWrdUWUWQFccgnFF4kcz8CihzDMkVLxFt6aN77uoJHymUPhWAobEf9wrwhk231oPMbVwr",
  "key25": "5iVHHJARjZ6aBwx2Bg2DwMSjPBNm6SChV4StP3XUsyfHSTHMXDWmScunQjvbfKNQrVWpzB7vPhyNxFiGQWkuKbcL",
  "key26": "317SYo2Rfk77dQGgKsuux4Da7sQzM3gh9zj9n4tpphku9d46Gk6tudjZdmrxSv7Mmw5Z5t9jUtirWqd3bteUGZ8T",
  "key27": "3yTnw4PVRyGDc7y8S2ZC1XmqT2jHL1o4PJzZ9pQxqjiqsSK98KU8iAAW9atkmPcys1DgG3MJquSeDArDFjpkN5oK",
  "key28": "299XdwKoHpdM4mq6GskfTbyufXCSDpBd6CrJmsmiC1RybNPMCPfUZfdfsQoBj4kRUysuDyYS9cAydnCwmE3SRjsG",
  "key29": "291n1cuWwaJqrjLQqBWHMUXYCPmwtkGopvBs516DhKwhcELuuiTYKAgZy431GJiRpe2DdRHrymXWfwCdGj4eVmw8",
  "key30": "3JsYtrQLsWk8Ghsekc3XF5jpspVjjuk84YhoPHVBXyREesJ4V3SVYkh2nM9exSawTRbHUPoRSj2oK489WoJyDxxV",
  "key31": "2grCRSMMZScw7A6bdEN7jbPitnQB78R4VXKWb5MAaAonAbjsDBbceBmhYyhJ3dgxHYzZhVW4KbvBYCGotwxuraXi",
  "key32": "2qGxJ1C5aX8QrHy9RfQTTWp45w8Gx6VZQf2rSYM3uTmXHj8Ms5Q8vEQshBHSwiUxMhmqV3vkFN1MwtVjJfqLKPHC",
  "key33": "3pAiAjBaKnSc67cdCUiFQJoKu4iqiKgC6fJm1J7vWA714JWYEngLJmDgap5XokTkiuJFXAfPAAa4Ty2ufpZtghHm",
  "key34": "5nRjTgc3qhc2QPUmPoFPZ8579tJ28pj4UrRrXhx8BQBxZo4mEnbbWzxamUaBJdbqf2Ho4ZfLss6SDznqjn2caWvp",
  "key35": "3NuPvzDbPqN1hKMbDqsnVMx1vEmnXEUk1fKKVnQPe1cow1TXhVRyZKB67Nv5ZLWzBG1zXhiT5vJoVyinUfToL93v",
  "key36": "5dTzjvcTZiRfEJQ9THqJ3EGMn1VfhixbkfmVDnYFGu97k7dZeKYVNcoJEZbDx9n2gEQ6Epb2PN5NyW5s6D1ucKyg",
  "key37": "2PWLCrsbNCrUwQ3tqMppAGNbFiz2syXLvL9W8pogGgxM23HATojJm5KisUnf7SdKfYRoifnFmj9UfLWBPBNzbXgp",
  "key38": "4Z3SGmRBRHqbo4aFz2NnXCkRsbRf2mNaNebh9L5wvGsACi39kxooH9PKvGFqqXQ7dRu8zDtSJavxZ72E9afimsJE",
  "key39": "57mkMnd5iPJhAwg2TrxDw7jyH3jyGcP5wV4QRFhvTsdbzgYikUo2YFrMj9NJjsaB8YA4Un9QvcLnrBTYkt4QNRmC",
  "key40": "2PhkxDn4WSLbGNLqauL9dRNniYYKoPynEm7qH3ZkVDiSMFNKTBEWk9FVay3gRo5ZsZoMv48L9krmBifCNi5BRZbd",
  "key41": "2cx3VXeJu4hvF7REJzAfenQEaR4Ng5otktvPZrC9SgfMTDJKZyBU5gJ5jk5PsWhJEe6qWfFDP2Neq418umwHfEua"
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
