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
    "3uYpuPWQ5eBYCTbfgQYqTk92B4qpp3g6dya32WMeMz3cPiCQShbSkwfmGkUie6hhNi8cK4XevtsvgJY9iRKH893G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fKH49UQu7zDm2JKzzcoeJouVuRvreF6Vf4bnqdJ7U149sgnTq35t5eeSENQpCorc7Awq1X7Ghxk2n7oyzgK3r9",
  "key1": "kAusN1b4opNSQbxkVkeRgVdZ5XJ8GcuCT7f349hWKNxJ6VjqSD4fDKsCTduPGJRxff7DbgXFzWwaQtcc7XeRhRA",
  "key2": "55HAwfnsiYhiHeM1BtBFpWhWBYENhgruCJx3QRsJLUnTuNU7snt34NX9RyAJyhHycYxTPiBeNz5VucXmK5tSmm48",
  "key3": "5y2cJGP4fyruYJ3ZVrKrieyMuVPtyYD5GaLdtXKbbNTrS6ko6o5qr7LVJhp8MviPbKnt72EfHRj1mJBhy6mbwh13",
  "key4": "GaqsjEbwPmXww6rh7GDjTyiXUYUA9AnoL3ZQ4ps1cnDazcBm8iatT1ZgrvMnEqAzkoVJUChmXLAM4tqYSGT52uR",
  "key5": "5Yb1rCToNLLbpQVqPRTV39V8FLKmnXLfeHE5hPtffjMMyso4K2MPNkF6tV2hMfGcGwYWz1UT4FbXV68HAsQ9oGF8",
  "key6": "2Pft7cZUHHgrmX5CGAuKVGAb5DPCfoqKQBeVcDkr84EYmmC8Zx5U4Shqik6iStYfQmc2tmSaJC5a3xFaRWuRwW8e",
  "key7": "4XPiUrSNmFM8yztsZ7L4vY3Mer6TRLe6xD6WPrZnayyHuWELnTmLyP8Xdpcho7cKH9CZpzYHXuxWyytCW2r3Q81w",
  "key8": "2zigmACZXo39X34V1dbLu3Fja8RGt7nhzcybeTYrESZvYTCNgeb8SCQgFAsCK5QydbWxZZJKyA7wBxpsaV9z4gWs",
  "key9": "DMfKBgnUwsa4dkzhnoe3uvFToGqn8MUY8E9FgzhM2ebHNXemd3YGptPfdrpGJQxTKEiKogDDqFsRih23hEAeYjW",
  "key10": "3bYxovfWEQKc65imWzuvoejw1hQTekGa531t5ALkBpRVDAjaFVDcQN7t6jPiG88F3utwm63EbsA1cRBM2CwCorL",
  "key11": "AvXSkmRdAvmQcCAqiYg12VpWHJFkAsYQuQDoZeUA49td8nYy3b2Em8dzt3QCK2VSWp5ZCB5PbtqGSEDKiPT9t3P",
  "key12": "5nt2HeMn1aMb9zbsXecUn5SMkNnYcxTdjZL65s7sdygKoww65Tor8mDi96GKyyXEAsjUXAJnsuTDLTZB5wk5r3b4",
  "key13": "3638f7fhapQJQZQUrpnWM1oEwhtKyW1j9nwPiQbQP76m2YzmReGF3foUwnWJtXYraA3drRVnfAXJiRtMoxS58Xb7",
  "key14": "2ASYH39tGSeLujWbYKiZoProurxYge7yFH33vXaDYXBWqQkGxxbCFQvnhBt3FKJF7Zcue83Qj1U5mVXxJvrf1Mi4",
  "key15": "5RPSXFQZRpAzanGpQoYMY2yYQZkBssVkbap1hHVjxwysm9xR48Jy6rQ8RC51n9xGWrzLHNAAh2nJggJDfzPMk3Rm",
  "key16": "2s4czJj17BmoERApR2qFDe6Kyu5pMCiNHQRXe4StqRz98bzTFctKJtjF6DKt2CqPtgfbt4kEK3mRAh3cY2a4r44L",
  "key17": "4vgDazVcA5Q5DCF34BAptxKuSKcMR1mzUmiE21GgP4JqR2uVWrUdxzbcp9neqjWF97j2VnjjyLhfj9Lw2NTidRhe",
  "key18": "2zu4GpYeY4mbxA29x5x5qf441fyqmKTKBLr8MYGyaRMoi3XUJ2natEqTLRjSmNPNCjKPvKny8T6tXFt5VYrEBKY9",
  "key19": "TcjqrQc1LqVjWsLpToXFJYLfxSHmYan1MCgTdEo8srBZ7pkpd8o22KPoDCKNzLds7DkqUSwHdph3vQAzo598oiU",
  "key20": "57XKxbUEwTL9Jx65XLyoTCkppxb3Yj45uZbb7ww4f8qfCvzYuSzCZPptZ1Q1kMNWBZiESGGM3Wv73DR6REbBpVer",
  "key21": "32FbfY4VPZ3erceq8sZtEASBYS2s4gskKtwy6QTSeG1SK8SvZnbhyZUF3FqJxHpf6d4DBAakRLyNGU9PdYrqN3vC",
  "key22": "2LX9uNohYVnTfrHPxzZTCdsiLeJUfWUysauujCaeVAC7X7iPFCpSrPt7MsijQhEvnyzzbvCCh2u2errJNLLbuGsa",
  "key23": "3djYxxbpb9Za5ubuAn1mdesyQjKFNSknkXkPo2xWoke8Vwh1HuvtcwBM1FmcHpjRbF3gFfGs6JPFQpQTeXpH3hup",
  "key24": "2c3pQ4qDNdSrU2ES5BWfZAT4jAUUxK9WTyMCmXuXvv37SswA8AZoue6Ve9wPKYd8PiLjQWAanUfUZohRA3oLNw1E",
  "key25": "3J1RbsxPHUBo35jWbt9P51ozcziHbgj2spJBBSWbVJafiYN1NT5x5B1XFGRyj9kKbRwUJkCD3tVrpi79EszKwUCB",
  "key26": "3gsh2pdT9gggo8Eh3jaaD2AZpcVCLRbnCRnH5hGj4xm4VVoTTmvmf9CvhJueYx1gwHpsDDdFHXGK2dBtDqQjAzfA",
  "key27": "5AceHJHDLgkoDL5JH3hNoamFD9HCou97Kr7z6rPmx1RGJzZKyudPceP5ULQWKx74bFMtK4kZVB3cKk5wSUEsAVFT",
  "key28": "2dFR6NuJ3QL4Jo76jaBAXHVGXPQWwUp6NHHAUejuXCrHF1wBMYQ5Rge9a5B8BkdTW7jLaxHEEFsV5rHqDfAm3KF8",
  "key29": "obpds9NM8UF6aFX19eqaMiMPNdzCUrDb1e78f45ejo9U5Zk8iaDBPpkmspznVsGXDpNXuQnu5rFDtWZVUaob78v",
  "key30": "34duP5Ha9s3XfKffxmMD7HRM6gXGVpACn2QDmngFcr8zMNrZNhGY4BVg73gK3anTuBLe3rbaDKAajRAKJCAtSfSk",
  "key31": "4tUeE9SCqqkJxdSau3x8Ci3GLbJhHPsH6EabtGBfiDcHRZqMvHi4kN3JXGFE6wip9NZ4EasVMM7UZr88eihF5VUk",
  "key32": "KhXEheAgYHBpo8LtcoD1y4Qric9eW914tCQnKtPR2PEEq4r2PZWPGucMGryimunwgz2kv3VqsqAErQ2ok2kFkZd",
  "key33": "5Z4oiRnDJaAbimejVgVvp8sWu7BQVmYjHh1vZ7PUAfuPC6SA5qWSEbycx2BJS79aqSSZUjJS39DK92JH3A2ukHin",
  "key34": "3CREirwCKGYamkW7bBz2PhY96jNjUs8f9WVn6QgGzPuNMexs996LpRPCL2ot4TFHL1aybN1HznZ2VjHVuLtZzSg4",
  "key35": "2PTn3DLjqisMmCLan66rh4GNpJCiC9F8bBFhWgeMKDtaDsJuB566tBscLv3aZK7ZzCLStYFRsobNhjsJgqnHTZ5c",
  "key36": "4QeQD2n2aEeLmovntatT7vxtCrWreCmGrHXKJQJ4jpeJLxGXhujrGpnbxzBFp7P8Vm5dpirBm4Dv19btPjY3Utez",
  "key37": "2VCbKSTgqctDQvuGCf8KAqApQGpa3iyRbRSTsLFSc37K4NRRCnKvp3sG6whmuXZfuxkn8xt1Arsgt5cW6Pd7PVa6",
  "key38": "3X78HuNPRpS5Pzhjn9ZafJcU7wxGobUR4dSG7f2m7bTWoBdbzyVVokbaS9nUBxYtAGQ5GhnxdWj3eVJr1utaAmhU",
  "key39": "5rQeP7theqQpe5xpVdXoumiHaYAM7kbqsiKsLqHZA9eitBCstUqtfhLo95ALWth21YbdKEb33T41rgn4JPtPHHEJ",
  "key40": "3kjGdQ5YsQgVajLGqdnvR2cuLjZ7hSr5QyF31nLDL2q7F1NnGmoxawXjvGnF62JFpUrX5D6ug7swHRySMedhvhx2",
  "key41": "uiPtv4LQbnoMSY1HdxznhryiTFDjZ3wZNUT2gKBogb4UzyLjEBRnZ3NZftRhwKsSXYfvJBbzhngwzDTYUzE3Cvu",
  "key42": "3UhJhcuvoDjCbnabVVEirW2eQQi7syo3ZAzrQCEQytxWqtbNXYB4eTqZL9Y2pJedJiQmxifAHN2cuVY3bpPkwho3"
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
