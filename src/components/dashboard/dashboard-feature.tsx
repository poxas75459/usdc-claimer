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
    "4LA2NPS7jqTKh7GvW75qWfzsQsmsiH1okDXrfhBxJ2uw7kggh6RbmhPVDuJhz4bPAS5hNDnTetf5RiQ5JD5kuZyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pACZNZMJoPKet47t2Bqmjma4u6HzN2u8Ns2NLxMsEDT6wMn7rgQ8iL4BBWBYWhonWkEbZ6Xg1vyuX1o8F4VudkG",
  "key1": "3YBdoWxBYe4bzDWNq7SMpJhrnKX9pvcBEYauc8XJDuYkymv352tWSm4YrDJJCyLVbmVKJptxRLxcesXNDBCTKUw1",
  "key2": "5oSYePW3yWedFh4n2kJBUf84JWxbPCGahH53HD3hgmYqSWmKpdx85cqhs1AVWRmc9s4UfatMvNwMD2ZPuMkgA2Pa",
  "key3": "4aEFQW3J3EFRAh6wRW2cqc9SFRo1oo51tdVf4UVkhv3ceu6bruA838X8xgy4rfY2dGTfFZhd3QGYnTq32fzczT4i",
  "key4": "2LdHWnkqNDS52h21MG1QN4qe9gYn5pK1n8Cm4vqt1CHyRhvUnkTAxoLP5n8v6B3PwEnRrtbwENvtSN2Bt8cmaxzu",
  "key5": "4af7ojyjV1DLRZAsE6Rz3J1TGiG9kUsneqj1T1NL4Hr7vf2gv9SGQsrcEiFTWTqLDvJYwuy4KJQoGY5j6hs5Z2kP",
  "key6": "5PQa7tJJXikcSgV7W2TsdwQyxqa46qauNRcjm1Fh3i2pqo6QEs9tgtNA6vSvDKEVTEsKj3YaADKiByTNsERTs6Dn",
  "key7": "2fQ6J1YvoLEopvaurGhz1xNpEAJuVFPrAbrifFpfoqCmhbjYEWw226V1nFKCiQBeYKAdP6W3U2zEQdJTiF6943Gb",
  "key8": "4ffc8HcBB8cC6yALnJjpvst6ivcFPzLBuX2xe1VnftwroCz4AmHq2a5YjHKBBpRtxuYiN3bfzHGqVytVwTSWLCot",
  "key9": "3MXQw3EetC1oYWBjbFKaMJvUYSeoy9L4tJzUPfTSb2EYYPBB5ZYXFekkaCgNYFF3P68zrnLi3UPEpEwwXjEocXvv",
  "key10": "4qq3a7G23qPNhaHVyb92aJyhojadi7K6LKM16zRdDpPv6wjHdzVPLnyCESPpmCxBrGWh5fcYj8oyWu2e9kMyd8en",
  "key11": "vgDwBsvfJd5EUmDH3ii55w95DrkMbXHdf4QnvYSoVd8UoXSmoBNv6C95wgwoFiAyuiw3t3NJ2Xwe7rKmSagZmCf",
  "key12": "3WTVnD2ZU49iTdNnBZ6naoSafQk44L7iRc22PhvpFkcABmbijjvvdUXHQcpvWBM1qZGrvQGhaHm9cBgbmT5BMZrs",
  "key13": "5VTVxFZebWtKZWRMsJQciPsHaZpUb4rKseZuhPCXFDSEF648UHKFG17bMLZeYEFJKeUB9opJsnc7pNiwvgwf5Y1B",
  "key14": "5PUgzSjzbiaa687Hw61yo9bTDEHXLFVPNbwt7fc7rgTrVgPaYW4kTCqh4nYEeSa5ei6VptqJW7iXnF8TkiupZ5P1",
  "key15": "2q5PrAsttB21HWVspEfoF2R277XsWRoZgMnDbdpQnLgbeKTQw34SysrPZf5XFRqXcSRbE96yyVJVDkA3GzawXfvV",
  "key16": "5FwvCEDYctevaCL5QBdvXqwP9WX5ZBx1uWqKnxgEDRB67LcA5XLxZrc4pGcy8CsKr63DuxEjyodHe7D4qjw1ny3z",
  "key17": "2Yfmocw3g9CqT6ckySXhQcqP9qRP1vMETP4jNpmX7eGsPGCR1dvEmoMp4hNA7dCHoqNcThNbqYrPdq8vzf4CFEyG",
  "key18": "3brV7G9D1EpRhiJ8DSPdME9eSSgf5NURRrYfxqKL78tSeusustCZWEb4zaUyGVVp2MsBfURqic8nNEwEicERcchp",
  "key19": "rQprNmczMWetpw9CGJGDMVSm8bXB4rxXRA2DW4cwso9dbpJ51BA2VmwcWAvtFKgt8iHTP779oBPdCyf2PHJJiNR",
  "key20": "2wHk9bhySG3KeB45bS3Wp5qq7aHFxLDBaBT5GJz3T3uma5tjLkBV6np17QgAWATW6q2ZndM7kNKAEPpG5G1k73uR",
  "key21": "Hkmd3pRf9E1cMCb9bDsGLfz9aNWACLqShFNGiaH9p9Ce8L6U9kYVRcqvCVvbywGGnqvJQ5feT9enLdfiP95LEDq",
  "key22": "3A31KQWNKkHGPVx8mqKok2VP6DM2mBZjCMPmqnRSTnDJTZ992pVVfaRAUPYuEnS1UHA4Pdyc7abWUyyeq1X3TGnC",
  "key23": "3KP17s5MCqp4pS19tLhZtwb3X1hgZpTNKnfc5o32QGfJUfCswv9rKAaeW46rB5BfU1Z8e4FoorWDxpu6mBvGuRGA",
  "key24": "2qgnx35eSjEBmMeR3pZhRXDbLh2ee4DgtyGRZmLfBhZcvU77Sy74XJuNPWBfdt8ANTWhF8yu67GYDQkZh2J8PgMd",
  "key25": "583GenL5VYN3UamwvbQ6AciYa6yagRhuhAcSUrmkL4gmtSVSFnZYmLzVYKZVYdLcWLpwwhx7UMKFwRVPsTEnjCtV",
  "key26": "2L32qVsVpeH5rEwPT5qwh3r1oZ8uubAsBZWHtJFW5no1PStA1Wtkfih7s1nsvvbR9RCxoFo4PAYjvyAAhvsntWdy",
  "key27": "5fGaqPwugohV2zKyAeFCf2iHCKu7QxVqSvwFSJNP3xeizEWEdtGjLGUk91JnZr5yR4V54As47xzVgVi1WXYLhx3k",
  "key28": "65Z7kwL3zLjtRht1xdzo66WXvn171odJVvvvp7yRuW98gs94MgizB33Phxy9YDibz4wFV2FHyC291wJuBU28TfnN",
  "key29": "4kHSYdJT8jVn7Eqi5Atmgmc1v4EM8vSp1fiXU6wRmnxTY4Q5EWDaWAAi1aPcoArSA2kAaRDgmMASQgcwnKvngmzu",
  "key30": "vYZ9bDa43TKdgTM6euBH5jCo9zjDVaDed5U4XZnff8rN4Feyy7yyViBmVSQ6f1GD4uL5WJ4KxKRqBx7z2AbRrq3"
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
