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
    "26uhicyqhTERrkRrwkn79STcJS8cg2PXoa75C1K5RvD9aLjK3pGcJ8FBkV9pdJXN5VMwaJc12oCgFySujNCNBJuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzWBvHh2nic5ZsTd9GUex6D4fDiEWKDkGasadUaHH8Mbk9WeAhCrp2gNfo2HmUtwXXw6mK7p7JQccC4fQkqJMZS",
  "key1": "3u3NMTK3aR8wfmuzmwSXzXVDZ1M5uEZyyQ5GwFgsShs3qWNnttESychvqGRdJc86U1c8nYgdLSVYLkABBB1ArEpv",
  "key2": "5QXtWfmspq5EztZiBFsetDVPQkEtoLgZ57HRXLDYw8Dk1HeBeEPLdRvczZkT9etUQPtrzXGUQNJYgDucLkNUD15q",
  "key3": "24mRswbDxVnMkg3KrNfVUDbtnqZQQHVj6DebU11UAm2p72aFgHxW5RWFNhm6ZHCcCaecbzUfYxdokYanbQ7yCBhh",
  "key4": "3VAjq7F8vcMzeuk15sp8Lp96HdMEej5ukhG1uWVLKTNtdzKzTDGCUhkJuA8Njn3Wipu9AD9ov9meusyEvoEU8avN",
  "key5": "3p5eZtCuGBfYb9tATKEChTvEVRN2PNhkvW4EdSHdDCWKXJxCQKoPNbnkAyd5EN6kL2rnDVHN9Bx54gHcPZEpU5ad",
  "key6": "26cAyGSzDUx7H1Q8Z6bXonvunx2tsLmDTPxKJhck4LxrDuhC5ZrnfQT7D713SmKQrgZRpkMvkU4aJ9qmbrbk2od3",
  "key7": "3JUaH3eQMgoRB7MCgboAUN1wYxjZvQiAMnnhkhocABKokesy4zz8yK9aqVuuJZ152pbLLg6eQKfS9cvHgSaBUXeS",
  "key8": "f8p57HD7G3En3BBu5yc2LnMjWL3CPPg8LqrVC53Rwyiiw46E2f43qMnUEJZ1WrUxWmo3XkbDnjsXediYXpqCciz",
  "key9": "g2pP9caJdyEVk6yPeRUERsQJ5KDfEWSzdTgnf18DbP5EjshkBCmHh4nkfdDcX3dGHUXzBeWPdgwiXA2sr8M2uYN",
  "key10": "67p6jixxvwYujga1nhhq1grmMxafpobGxKhpHTU2ng4Ma4LxjvcePpjQrUFy2qdmzXvwLxCaTex4H723poaeJtq9",
  "key11": "2GRrtYxMHAuQX1LhbzGqYShqaUXqfRPw3S24jju3g5BAuCRb3G1rCc2PFi3JNASAD2TAzzETfB5xCGy3qpwTnznV",
  "key12": "4SHkfgpoUgZcgNSHLNQXT1854Q9TaHz1H9vM9yYow8wnTmS7teXhmzj5nCXWqMUsN1k1cEBv54G7sGDeE98aiodh",
  "key13": "5rWRtV6Qmz8vxFZQV9NvjncqZrLtLt9GdLsWVEDQktVXd8cMEPQwbvs2JPEZ2pD85xNVBbdqZf9EQqsQPGuPSjqf",
  "key14": "3xoBHmohA2F2165vDgKvMtnkLGyxz9t9HDaY9mcQgUSy27z2vHyhQ7f6Vf59jgRfkrKszPxQcnyd4nghhAvGdx6t",
  "key15": "3AjboiKd7wyVPwNeT1XCFEtNi3fqxYBypC1CJpPAhBpteZwQeroAJdXykx2rJ1DrDEM79J2Yqy3DSd6QM2ax8Xkh",
  "key16": "4ckMtPwbuFBRfkMdZvMB9T8joLnkorko2Y5fuyi3d5TuxASMYJ1EqRKrUSwG8dH9YV5mPcUu9vLuyXvtpEWQrDMx",
  "key17": "5eaQyDR9hZVhqPn36JH1Qwvk2yV8X1SpWH9uzVr7NUtzDiCMzCfwG6ARxXjGK9ez4XYg2ecbGGdnL6UzxiQQVeea",
  "key18": "2Ms6ECbBsdcxHrXjnLcrWNbdBoHoVa5FRS5QkyyKHRUdrJPGPKLzUggGtYvsSQmDd3wXs2rYmfeT4no5jqhCq16B",
  "key19": "4d5ys9kfWjXbVScfwkynfb9abEf9ibLmRUfnev5HVSKT97QHDgcT9KVcpqPgEKzCyogVjLt8eJusVY4NwbiYJ5X",
  "key20": "2RMkyMd8kp25wQF3KUFgD6G4kaReaB7dWNdipzZnDvQcVdaHQjAg5zuwJ2BdpTe9qy57iDuwLeqqagm2B8KRTajD",
  "key21": "4mq5WqNg8atDg1aAh9cf3si8wckG7swuybeMsCxvbWhddRzYxcKaLmi97wKEnDADWPpMzEtGTi67LUXpL3LajCHx",
  "key22": "EQSLnx4sCfbmjAZ28X5cd4TC1R6hP5uxYVtzLuqMnakotpgiFjfbLcF6bLJU54wiRAEfPsqVsWTNG7Fa4n8Qu7e",
  "key23": "2BdtDykh81rkonJJ1YcqZzVhkLXfS2q8ARubBcC7Rr5DGMut5z6HsWpzyp5ZMHkqXLhu2b5x4dx1VnwE5bhQXvfS",
  "key24": "5rQJ2wkShjA68nhn8grid4b3aK94HaJ2d3n9MboEDAkuUnzHjxth7wkJcgcHBpSyXfGiuDffWybgkBKLJpG9QnrD",
  "key25": "46foeZK1sgchh4QELZNyd8PKqhkrcPaFkRf12ZjKXSs3nNkwnPsoGaZcfficV8MuN2YYpLWEJrqSWkLFEryjCLHq",
  "key26": "3qGJvYLHjxxzuLkG4UtGsBWfkeQMmrrp9YfdXRxWDg3JdaZPqK2ALBn3tjaGunCkBVHuKFsvUnTFFKZZiWGR5dP5",
  "key27": "2RWme56d3qL3P2Xak2JWQx7WCWGJ6n4CnbQPrj3LsQV1QcwuWPyAWvPLP6wpufguYrHeMJJaAExM9ecr8i6BFgFj",
  "key28": "2wEdXwNir1sQcA5Ui8kFYmsHECJMPg6SAwnmuFW5JHfGMercVmJHXXYHBSN1WBKd3aCofUWBFdnAiWjt2gXfYFJn",
  "key29": "jBi5KopKdZG95YvSN1vmbSnhcPh8hnAjBTmdFJ7pSsB8hLJAxQvPuHV9Exn6hfKzSrkjbkzJvCkCmWep7UJ2bad",
  "key30": "3am8rHEVczVcvmiGhcDJgCzy3YPERRJuME1UjtkTysqraatjBRd2xgnNVtt5DBdsLSeeDhdVN3KydKLQsRHHZNpS",
  "key31": "5eXs7LvRt28hE1RkKKRYeAF7Hzz6gNrNRdoUQ9kWh6rMT7ogAfarghFsVvoQXGTh9BeRMGLEzgu6br1eRwywGfeE",
  "key32": "28D2Qs3cA8ztyoZd9z7UrTY8fAPVwExoCtvjQYAyAN7RDJNAbMST2qisqF1LX6ZHnKQ3hNiP48dMXAHntHBjELvn",
  "key33": "6qrmS3zDRLZoknLA8DoD3nbFBKTwJQSRx8saJUXussgSKQmChU4EaTq1JWk3T2wcueaZUQ1jZkAYNNN1SYzn1uu",
  "key34": "3zLVtaHq7czCsVoFTFJJzimsSTjWqpyvo2PH66PbqJtkeYEsGEQuKag5P84EBx4Wf4x473C7QLRZZxcxqh7zCgb2"
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
