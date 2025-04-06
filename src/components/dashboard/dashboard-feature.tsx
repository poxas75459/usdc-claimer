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
    "tHULA3rqDQbcKM2Xrqdkq3bXEuCugfVHUQVdnCezY3oZGCeNut2q5StwyqZxsxrVC9WWKqpL8DQtXc6zNmBDXsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oo1FgksPai6h2HTRRpzvUu4y9o39GL1n8yQsZ4LBSSG1pBPaCjLTezEnPHmNNShdDGvc7mRZ3udFBHEzX1eoSKw",
  "key1": "4SEJnLjf6Hy77tfw9tykLKb2zEMiv2XogrJfDw8hGS8qknEckAAVtSa25aaykzNG9oVjzoPRVbhVzsfcpHXYqo9q",
  "key2": "4Y3QPGtbNQ9sRCKMBsmgENQ4QrtAbUGDFSL2HUz6rTZdAHjYxMTDtPgrcHDo9UGNNAsbmwvHP27otWG81DreA4nd",
  "key3": "3Esa1jtRiSMHLNyjsfxa15RL8RCyoKvXniG9VdgcjxGKKvNF1CbZUwgfwC3vwQXQxSrSCJ32YZHFgenCJW9ASTWa",
  "key4": "H5zXrZgkKyAQBZbj1G4dLfgB9xq5yPadwQECNaTf39atsFtjXw3XMiALWTrYZe9HhQ6F4pyG3CWZPwegU98EAfv",
  "key5": "M4wj7dBWDya3AaxfNQkfM7XJpy1iJT3T3RvXi1c38qP4jJQ4G66oRy2Z9RXdDaqq6LarYa9ukq6b5gizgSRM3rx",
  "key6": "5wqEvvJsm6gWPDp8vUurj2XxEuEAxynKqhTTehtekfib7qxAexS2DzyCtcB9hmkrgP4gcZHGMAHAo9TotHYjbn3E",
  "key7": "3jz3Bt8Z7p79YjSc3X553YAYKBtqLn5NvFACtRSuejkdX9ipwjNcvD6h2fZedXjLnRFcfxPzHoz5R6pCZdeu3bhz",
  "key8": "4DcdC67h9YhwUYHYyXn8Fr1upWWKko7f7unDUKvJhQjNapYkvBTpEcs3C8oZUUcgjsKzgrG4VEZc1WnrDasjxpRC",
  "key9": "3148dR76f9fy6mgbW7g8An16pXg6MdF13wPcNsHyT9jmHGBNweLENcEdqVAbbsx7zMuYa5NqKEcFNF9GUD8zA642",
  "key10": "fbooSsJkBJvf1w12apV5uzCtKn8dqDAYyPWtaooR954dujUieHbwAE9CWAfnk8kL8npLbfR14SkeRrYnbqrHcai",
  "key11": "5EKP4eyna3EPUanWHDiRWaDuHME9N94giEr57DdJH28mxSZ8s3vmTd4fbiKcg9L6Hxeo1pbtfPqvnY6jKhymPUu3",
  "key12": "5SyhvyqoykKbcgV3J3djjtiigUvfKV7PTm5QNCFXdZ7yvHEHiFuvTMpN9wYCvigYTeLpDucTL47ipzoVWzyiwinx",
  "key13": "3TB2KPuHrSQTjyPBXRWwXxdfEsePBB4wkd2f3FT4HmDLHnt7iaiC6sxd8o6VuUVFUtV3b1q2aJKngnTkJKHc91dv",
  "key14": "2VT1mtZxSdudJUf7vbE5F3TDxcDVHQXspteGRjSVQBhRWEZk8H7h5MV5QTJkwzCkUATbAxzFF2eGS5tFPAdGzrqt",
  "key15": "5By2mR4Ccgq79sA6vE42DTMvZnzyZvbvej3Dp6PzkZue3wwrkKmwAfFM2AZtmCowNwZTdrH9GJ3eXJf5XNzgRrTc",
  "key16": "4cXpyruxi3Jom1eMxTyZf7C5v3qJFByRwZpbNftfmBZKHknAjrpXwo1FdDtuA5EbCvoD75r8YwnyRtG7FKhpSUoC",
  "key17": "E66E1EfNPdm6QQbeRUK8EGy2itC3iVna9BxajnPpZGjh294K84KWGtkpETKnHbMctALW6Mvc4Hc6QUJ642H6uE3",
  "key18": "4TySTqGUz4fSkNnDd8Fa4g4xuHAJUfw8HJQpzCPyr1ZZeRW5uSkmvJrLfMk1baVSKapJYnjDjagovAfWUE8brHSA",
  "key19": "4WVUnyrFdSYDY3xVmWshkDWM4d62CXjUdYvrjSffofdRR6eWrUkP3rpyrvdXJtP3BkXKqjWpeS3BYC3YKhkeCG1q",
  "key20": "CFaVh1skYSYEA5MAEdebv9BcHWGBhFZAs6ZFr9Dh98F6JeVXcuQqHvLkyT83vziagPTdcQUF62adrMEPUKiZegU",
  "key21": "3r6aWtsQmhXzQcyiCVxh7N35qXwiUzK9468ocinQfePr2i9ovyYBAoDsdYAJPGWBUatfSU2EG4xMRbu98HEQhbMg",
  "key22": "5k4vzqHTf9rvBVrffAoKce5uRTuLdsVp2Kr6ymkSLTqCeFiR6zpQEKL5V79QterNWsEmUgT9HrUwK8eCRQxN9Srg",
  "key23": "3sgPye3i9MJMpguk94YXdKWNn7zXwLCAJXBw5SSFqRUgireLUEPkCwpmCGD5RXDKiorFdr5B8XiYEVSFJHQzjJWV",
  "key24": "4SiuLu3nzK5rJkT3vF1kb2eQEUyMagcy4RHTacDrjf7KGaEgzJsYqYP29UiQdqGhVxzmaRp1c49fT9bj2PDHNUBT"
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
