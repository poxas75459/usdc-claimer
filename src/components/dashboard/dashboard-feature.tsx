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
    "2svngyKjYRXGFo1YXTk4S3RxWnFpMrCrpHW4L8N2wd7ukSNE9MLSA927jcmmea5g1tCSbZHEXzrG7hcNYzQPSTTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xLCECjmif7Sm9svctwgFR8R9Jv4ooy6ts6wJKy8bssmx3FbZMdNMHsSzKqZjgeJwWDG3hg1McmwbEZnSxT3XxHx",
  "key1": "2MLxNUKG4wH6UmZ49u7y7CWVAxBHXj29DQxusyRQKV3FsP9dJzavAfQjQiot9awtiTstRqRX98kbxzjHLUX7nXzB",
  "key2": "3W3SDJZugK3zR2UKtXftfgoXRzxDqDZfmH9sVdDfjnMR9KLGDA7S8AWy51NBitdNFKL46sr4yaRRvW8ebDM3Sy7X",
  "key3": "25Wce61t2Brt6XFhe24HtnZZf4CZxRUf1y8iX4tPWJTK69jMa11PWkaQuuFSVMmzhkrJwo8qjyxfgHDuHsEgRPj8",
  "key4": "2FVU9gFpfU6UYRVg78Sf6G3tY4eNdrDwBpgxnnmoczdbidhEkXXBG717edFtDEZUfZGE6ciEJ6hmFrV9KB5w7fDd",
  "key5": "47xtchYxED6sVqbuybVvW9R99khaDZS4AGtuEWj2y24fSWqHa4vf7nQPgmgpJXx9zi6z8q3xcGSh2TnYrNsrjGt3",
  "key6": "5FbDSzfodnKDiVL1Yz17bbprwSGR8S6sbzL38baG2Lr9gYjwjmZ9uTvxZhJ8wKiZ9XzWuac7swLoXb8fRaFuM2KQ",
  "key7": "2YBUZ46urPJyXR3dgFTQkfVMa8Mm1spo347xx8u17QmNfhe3nSBgRRR8r1gxvRWV9sfgD61HNee5nS54aPutx1AN",
  "key8": "5JDcyn7diuXo682LcLdCCy8kp4mFRNrP5Q4x89C2fxtq2obZqP2sRV94nccZgtNqRamwPnu4RTFMPXBnkJcWHBJ4",
  "key9": "44THdYBMniKeb5UwAZWwijrPYbg4Uvmv2bHQEcukwFaMGDaq6Xu8DW3rWEtvxEPRniLpkUzY4VodYiq7q5Sgi9sv",
  "key10": "3UBiCGrx7rscqCyLXaZpsGXTRah5a6fRAiEfyQu8QuTNFpid8oGLWxftrLr6SVG91xL7M2WoERQoUpWTszTDddBT",
  "key11": "5J29EmhgSP5ty8yFuyxszYiAm9cGhs2Yg8PudpngZt2terU1d2JoNQBqDjy4ZBquPxH1BjaP98gHkJLkqqB8jccp",
  "key12": "2naiYohnrBgBiSbhAq31JgbBUDUYf7PoMtRGvCrKhWgGsXT1z3mVjLscocZWKY3HWo2uwSsT58PgK9tTyz2qPxfY",
  "key13": "2SiNDipQ6Fyi5Y8nSw8qMxGT5JpWzJh791jcucd9zMPpCVCgpDhuFUkQHKchUEWT1kLfUCGyeu7YNUf6dR1zMXDn",
  "key14": "2Ma1rRpz1HCVxz4eHrK3o7fp4BiFqtBaGkku4qD3Pg883J3AYBPdA95TZXL6vGNBtoicD5fnK7dFbtmzRCKEHRe4",
  "key15": "4Q6XBH7ZYXMcPeNQgV8kjXPYSt52xspQBPSe5g6Qe23v8NrydpzSf4K6mHRJpGktBn64W5HdYGo9N96DRf5Xv77x",
  "key16": "d1WaXNJ2J43QJVpxxSzzYmzPo1TbSELJuSj6jhbFLGtbaLv7DEP6LHBq1WtacFvXzUBThvs9SifA9iPnrJcSYgR",
  "key17": "4CsUgQuHBYs3NC71xSHeQmHWJMqteWLWJCczRqQyXyS2RP8q4AXf7Ly5XqgVVDTfA8TWRttS3wgfPTmMu1YcWtjL",
  "key18": "5rvCShrmXefE9nzqFHhZUDSVoN1yJSNBNakAy3CY3Ljkw2HnxL5zs86R6iv7dgCSGod1cf3fnodynmFu6mVwHGQu",
  "key19": "246GC1ELC3kXJtfVWvCUr6WFktm8AKDYLsHnrn5BeqcrUGtGAtt3DPq27r8A5hM2bF9LJFQHhxc5dQEVqUF2Ubbm",
  "key20": "32hHs5799e3yZdVXeArpzF4WuWCsrwVMVpPAwtDRGqzW8Q5EBbk1g6J4TpjpK5TLG6WBqzys4JSTX5AieBJu853H",
  "key21": "kGAUaLuUjTxn53rEzMmkd4H1kdoDSC9JdbzceCBPd6s3L9RqeK4B1dB9yZ2kYvyNeGN2rmX2g1MJm1zeEwjtUF8",
  "key22": "5BkDRYiX8ipHwL6vNZEL1JCNmhqmUgiv9JDcVbRaeaoBLvLByw8ehzLeP1xh7TNLQPxVu36hmzrVgGNM354J4TM3",
  "key23": "xqch3FbgLaEQbKos8QW9YLTej8zNgTqbVmkzSsHbtgZP3PoL2pnPF6cNwhdeidcMW9K6ioiAKsJFXAeSfpk14UP",
  "key24": "4K7xbSmqCmn4AyfpQ5B32ACdhB1K9hUxgNiGxAHX31eHTNKDn7gykk9nZorSDAWaRByN1WViCcMiBBDzr5V7vmro",
  "key25": "PxwYtnrYGVANU3KZNrQxNxJ3iwFB9nCTM3CQe2cgMjkm8aau17UoxhcgNxxW2TysYWUwpDm8igE8fxQiJkyT7D6",
  "key26": "4ZaagM6P5C5Q17FrnAYCGTCgu1y678uAdAfnwBTWkUgSpWk6zSsumeR5c9kHZNmHHWokr6rCmDGJsQcZwntoCUeM",
  "key27": "5JcyD3YrXq1838f9pfqTmBooh58bAEPSTT8dSD2NVGUKxXtgCBBGCTkzrcQ1RpuSSggC3PpzAcWFomYrQAXFWBM2",
  "key28": "47hrQhBNknYLptZBJA3sC6BPLvWTp6PQVxJdBbCGyc6me1G4vmKyodZPjmFqo6bctbzowoYJR3Y7jfaqgnbYHY9s",
  "key29": "38kgyiKpJdvTxC3AoXTScLBxqHcPk3sAU3BH7rDp13BVCwP1HHEMA6FMqbzyLRGkC8UFqt23udTxpeXWYfQ21Dvx",
  "key30": "4oapt5rEyVT5G9MPjcMLDdSraGPVGMptujV43MKXdPRYncfr1FmJUU7f5hJx7sc81XsV7py52UkyfHvjfQowoBsz",
  "key31": "4rQxxkDZJuVP3MUkJpJuFQqnPJVRvn2aQE52w9fUF85FG489AiU1UvGgxLLgQNYFLiqnuPRsgDedbGJZPhqiREER",
  "key32": "3fYiUNEoBLdJqQXM8bCSYnK59mm6UpLxVHgcp7M1gYtZZDQrr7VJMQp9ZJwaXydU6NGn78hnoiaYMxqhoeMtGP4E",
  "key33": "2m6eDggne9jYTyB3wsTM34qeuu1sYBh6e8vWWgv6mjJwHVrGASr6Xu76Snf22Kgez5tNCwjVGUTDshRZVhbzDUym",
  "key34": "5vYVdxCtvp9jRZvKgoXr17CRNHGYgZq1FCgiKXGrYytF8xFLXMLRCtVtcp33u42K5jeffAuNkT1uvJb9T8TtNSQH",
  "key35": "2vzJkQfBTMotHmfExXRsWjK3ADSVzxAVrCcLMV2ajisrebBkfgN9oPBVryYXciVRub66Bosh8rr99fBkYRm64X2L",
  "key36": "4ExzA3CJTkYucEtVWCSowVjUDMSuK8T29pYyS88uDwt1d1gJazyqK7K4jz2QuT8TxC7FzwcgXM63Ec931A6J9yvt",
  "key37": "4xCs9RHSBkBSfv46Rqi8PkrTzSEQPKVPNiA1eEmFGR5V98n1BHLefyQf8JEwa88tGKi2Jq4JNegpDPJz2f13m9uQ",
  "key38": "Pkm3na2EqPdqzQ3Gr4hgdohLDiwkdakptZxW8N2d3RVZNpvFE1wLWL1gFS6kSe1dpqb9RQU4khbKnnfx7FGuUfv",
  "key39": "3FwfUx3VdFDjVDG6ogfc3kVzYmTH9BSVjvgbcnJTuYbGyGu8NHPdTvVaaNFhNWNY3Qdr93EbdUXgjkvBx5QcRj4L",
  "key40": "32x4ismiKK2YVvbuFsn5hmya6qNCjmtMJWc9fRiRwMW3odkmN8xgMb7gxSEwTsPztUaW77MSeR2DA9KrwRrkZdmt",
  "key41": "2xCPy4JwXydXatd7sZ1FvmRwjVyFAYqUepbSxsmbwHouRNs8TRRC746j9in3zeQ6JfsLohJpqzWtBtWLPA1YmkrW",
  "key42": "66orXY7siDpCqsbtUuaZWsWdTBnW4GtzjsJuMUt7fbYCtSeWzgMCMQWmcvRiLYp12qQShtaxdPLXF9QbcCLXk5Vt",
  "key43": "Fesp9281dYJdTscuYKmiPjuFsRrZ7rc4i6Aq3iSwnEb3uFkf95WdNdRqLKSkXHTrjwEMSjGsRAy8FP234j8B31r",
  "key44": "3C9WPbNpnrQYGVABkuxnaw28VHTtT2z4o5Hg5wfem5XcS8ux94Emz8nz6DYruCdFAiT7GXexnyNtGRrhx9wbspVT"
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
