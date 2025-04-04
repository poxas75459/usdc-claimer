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
    "2WJ5Xn93ZkncEd5YvptwULaejBrYEghRBwFUdAJQphRY7YUn3Qm26CS3Z8bRmhu6QsryPqAM8kEzUVZtvnQfWhbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fh2pvZDy17g8DrYQ35X6Q4ST6E9MYANt88eK4iPjT5PRHn1bcZakJxSjayHquqX6eZwsV4TUyopeQcuS1EYYma",
  "key1": "5Z8tQAgu4yhbwWxFkQ2LiQhD1QWXcaQPw2Uk6DPYQg5TJ3JLRksqyL2bz5RG3x97SRqr2FRy6gr7VuPF8Cz5vSvM",
  "key2": "a55S7F4AuZD8t34nUq5R4VstvpZtwrQE897F4btqXTfPZRz81jFqDKsYTyMaR1z2z9dcmHETZ6cLNQZP5QJwAVu",
  "key3": "3YGJTTXEPL16G6hyqRLWX2PBZaCYeQbRhsYXh2zkbDieHNyVyF9vhEETZEXFwnEPeibKTKiNBgwnuEAJArsCTJHg",
  "key4": "4iGPhSqNSkDG9eFRWQhPnoa5xHkQGD5jGQMqvpN2uhrb8GZvUuDWZ6eQ51uL5kJyoHm2kBU4VLFiJRyJ13Y11ng7",
  "key5": "4NwzMYxhBexgcA7iQ1aswmLW75f9Xa7hh86XCgWxoTLkgpSg7H3eu17KbEtKzL5X5ToxLyz7CcrheDkDqndnYgZF",
  "key6": "1DD7jywChVWjRgNwEVf6fFSUjgCKgUhuEoWu11Pe9prkGaKuh9XebEE9hhZUWDQFJUh4jFGZtQvcgtBuEZBYsgF",
  "key7": "3gKyJxnLGadeE1jPhH7PX2LpjYWSRZsYUrRnKG4rY44FeLkh94cVQL37ATEeW3n7wApNBPgtkDF7i7sbsn9vsPZj",
  "key8": "2XnJpnJWtjnKi2x2JKkedXQqDnYbtgdLX8uTiFtgeeY7jqMzP4pJjbFv9uUU6oNxxeKWdBuY31Hu8XHTyMn9z9de",
  "key9": "HugEttzhdCSdGM2Rz6mM8DPYVftVGE44Pc59MZW26nGEsjdRXmxfs6i8P3mpiPEoqm5qUzGQQQ5GGVNRcD3ThaK",
  "key10": "3wroe5HLgvnWnBPBw8Y7SSamUJncB37nxfDEP32nredfKK93pTZTdHiARPGXvuGid7iEECX1VmvSa1aS59QAo7Wn",
  "key11": "3HLS6iBEAuepwVYNsYq4u1XuqXnZoE9FwHZ3DgnxJcm6o29eCLj57co4eMLCgM6xPpU2PYoiWBeaPrrHJ3grzyGh",
  "key12": "2gSa4kfGDgY9nNo3Yc1UgCyRz527tAKBSXqkcEpZngNfHXKJrm8gkuaFPssLW5Y1ovj7fSz3zZrtaKSL2V6pu2Fm",
  "key13": "5CP6rdaSkUH7pNHKAT1aa64wVDrXSpLtVGAufMpQxb5NM79RVktKxXqe14KvJCCmTc165aE5uFvGWNKBLFr2fVTe",
  "key14": "48VeFwea92fZJeeLnpsMNY25zsPhQQ34cj9i7tQwVPDGsPseqJKquSbMVEzxsCyQZJxDy5c3TDK1Tw63R7PwGYcz",
  "key15": "hXHscbWNoTG86nXjrxhwNcdGY1Q7zZoSLK9QwoEdGUX6DNk4yFFqsEh9z1ZwFT5Dzy9t77qrpKNjXYDL1FFU2Az",
  "key16": "49NyzaVApv5ZE3zbqkF3eXCu5iS4bVQ8SsyUBiDvGEAAnKs27VRZkKvfvnhg9nAtvqSWyMfQz9yGadvHzSomwJpg",
  "key17": "3Ceho6AqHwB9hTgdqYerg8nacK8Mw7GReARFJ6GuWx2fuj5rmFqo1V2EuDD2zNrsYttLzakskdyRx4AKmkE3KsH1",
  "key18": "ZmYzaGksiGpnu3wvoG4W8YS9pLBsJcTLkNVYVTaRza4jLszSCKSu6KKRkbr2X7fxHzUQWy2QB87Rv15XYYbK8T2",
  "key19": "2pEZD7QDk3pUKjuojKZSYUxjHRPyzNrDxCnTdkt75iSmrtjDPXGTxRPr99WkawBGs2QtTox8W2rPzpNJ8t4GLyXb",
  "key20": "kcwuMrfugwFxDU6pPE4XojpdczZWWc65S58yf4zSqUp7VNurXpi5ycQHsNt71PjghMmxU9Mm7ss19zR774HVeR6",
  "key21": "4LzrE1kDRd7G7M51J9PfPSJuHkjnpv5G7DAK4FBb3meNeBfWPMsZ3urnkj4jD1Eb5TVm3Muzw98hk3FERHzzED3g",
  "key22": "22rRMmUuFxgD8YncmMmL487DCVbhZSLKcx1FvxtghV9J2vvf4BdiNACQ6SzT6WgB84vBjE5V5DKY3oFJ6BW6XwQ4",
  "key23": "5rPRHPxidfQmyxAsDGQmtRbd3y4CWD5BEkhVYpXp1MgwocmMRkh8dfFmVX63RLbQs5QpZMWBbrpTqJ7BAcScER4m",
  "key24": "3ws2QuNhFPft2w1thCX1pMBzoxJpD1quguhm4ZaX29YsJnFemYVWeFQm4RktBbYqJWvMUf9fMxoej3dNQ5sfNpEp",
  "key25": "4Rw51FRGqnySMdwk9dJqXKT6DMCA44vYQkGL6hHFwT54bLVGULFukoMZohKebqFsDpUR9Db3HXRCBidPx8AAvEhE"
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
