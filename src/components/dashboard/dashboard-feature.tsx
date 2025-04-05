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
    "ckByguQFhcgFxShUQgY2W2DLYhr9fQNjDAJfmfRXgfqMNuRUPTNENUVRPNY4CKNoWipL3D4G4vzUQcErdvL3BH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzxxaJacMB6eSE5GPVcCPi9zbhvUo5852iWAPYnsTM2U4qEaQnz6Hsx16Mv1U9KpM5kLRWWGm5VNAHfWe3jrAmJ",
  "key1": "4cho6L8AeVipCH8oduQciknQzTwQLD7pgWPSx39gRDKEi6WtmEJexPbnpfhX8rAjX4nTtgutm4VZkroSKr7C9BWf",
  "key2": "HYsHw1G1FDXVxtH1iiEgX6D8kequtsePmXPpLt3bmeGEf8ApbhQbcAr4mj5TUSaLdZ2BgA3973qHrkxN55UkZpm",
  "key3": "4nfuwTFDbA1pXZfJAwH6wN8FcRaqZJiKredZ4bYeaQdwVFfFTWTcPaxr8r1t1rSJLm35MoAx9guAKN3ELTDDjGnH",
  "key4": "4cFQJoMBFtmjgjjc646QqnfaUgkcMjCcrLER7U3jkaASTCz62TWkq24yyZSZU9o3L6YTJWFthMs4iyXQdEs3f51R",
  "key5": "2YU44s7p6bBSS1EFb648Q1m5DvhCJfmQoYzujzxZQ9PTSnh4Sk3j1oGgznKdVTK4LVB2t4Li1hEXprb4DLJ4qm2T",
  "key6": "3kRUYFHHmjAYcdFC7guv3XQ6ju7NkHBfVLkUxz2tCpS3YVeftRMUMVcKP93wBjMSV1rCLdyv2iAEiqu58pTswqNT",
  "key7": "4mbXEo2AaxM3hHRqMfQAxf1kWE2e4Cf8VH1RvpSqyVRYZ7NPd6j2z5xmBS83kwhmmawpEzyoRTSzXV2NXSD6rB2m",
  "key8": "2VjjYw8uujQsBhzqn7SSpcKU14ZsqVzfZ6DgEZxPWxfjDGAkpNapz97nre9U3UDSwz9VNMKdxEsQ2bBpo3H9QJa8",
  "key9": "VPvHYCPK5Ah9dWw1WpPhEtbhwAkCycD2hF7tuZhJnTKbNeYgYaJTUrcPDH5yVJ4CqCY2LDEuCysXfqCvtFFdxy8",
  "key10": "2C1YttTx8FkQbfiKWoyqaJWrtDDQZKHPqsATuUTXqhdTZtPf9UP4mHTiGirjGp92cD3oqacT7M6BB8UqTZQP1jaJ",
  "key11": "4qiVgXWdsHTAER6zxZLQpuusWRCbgjMTxxRWgucv41khrEFa8B6ntwGxB3cZ2KSPr6ZN2JJXV6SCMz6a3g2gGJFQ",
  "key12": "3qLHw3Mky3qRFqAUeTPz49PZqxVMryovMgpUNjXfddxgfco4Ltq7LPw2XUbXnyyQt6M2mTpydBPMKUaMoHWtaM7R",
  "key13": "34NF7gNjo4GjsxFJpFZnToxgS6stQpEYkiQ36swqZJq8QMJkdenMn8moxV55V5HFkq5hh24TMg3ubSFw9zjj9S3T",
  "key14": "5MKGG37j2bttbcEn4RPRRhw121e9PKK8xeMDmnyeJS8WfW6VuMWEs4UVti8V6Bfdr2DWbyrzcFdQ4vaBcqbEpoXz",
  "key15": "61gF63nmeWGFVUMZ7FLWmpFL5K2PLDqt6R7fcnDtSYwHA9ikxxo8WS42PBWKhLjGZkYYZyRmE2hNNRsetG5Qv3md",
  "key16": "4eWKXuaYT3vbXnyxPYyw9frimZ5ky4rDafm1CwHUw5mZtZ497UxKHm8Xc5bGpfkSAKAgqt5vf7aCBjRUoHiFsBNK",
  "key17": "483PhdZqtbKgqVHq4tKYBQpFpLNPZbqno5okBL66cbbq6yX6Vq9nFCMNSnomvNghmzv1MGLr4T4m2c9f9Z76vsAG",
  "key18": "4KQNqvBp4AaAT9YudEJmZ1pDriKtkYecpToyjwWQVa6zu5wTSZFqidztzLnjwzGj4R2D9AqTin5YAand22jV38X",
  "key19": "5D7DHHiXqwE26gKKaS5BmLQ9ur1XRSZwVG1NmYwdfhGyguoQY1WSjcxMGTQGLNCzKDPf8aFJwEXx4WcpYovmtXKH",
  "key20": "4kNHnqNw6psqS7GNnBQXJsHo2Lkh7qdUeZFGXAHKAFRNdk6HFSrpbwASaANHoaGMKe2zjdwjJ3zdaTqBnU9t8pCx",
  "key21": "4MYs2GubLSi1vtvNkCJETx8KRuXirPAGJwHfQvaoTH3Skhwougp9zYLTqrV6NKmQLW1Xd9L3AYEXK2z32Rq872u7",
  "key22": "MRg6CFxk2BKPQu4ug5XDUXnsxAT9cn6AUB1qdMYbqhidDbijwgKUfSG7CjTC9Bu6vTe2tW4Dvtc1tkDJXqa7H5o",
  "key23": "5QcAwsdEpC8EkgK8TerDou8oHe4QsWYqpe8L5WHn47ea1LsF5ZV3dHZtVFQZYQqXiSRBS66YGYx845RKjzWc9WcY",
  "key24": "4nTRqG2UuGnaBQ92Gv9Cr8SfFxkuPJmqJxynGXoeGhbDESmb4MTvUrstc6z77cqWTkW5T1x5ZcxJpLYceaBjUDZW"
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
