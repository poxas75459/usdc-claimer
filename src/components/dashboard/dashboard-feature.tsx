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
    "2EXr88ibQnLKLQ8RGgtMpSQ7xainqQCjtECEFd3N4LeRhxqWp8mGkTTh2NQrWYh8P3Z8SiHxPXoEDLopY57mYQhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39VDmAdixsNKHFaV6tQ9YqzNWS2iZPUAiBuCxfT7ZDekdCEXmPTHhSAEF7NcsGzrmtSTWNdN4BzYnwPHf8H64oY4",
  "key1": "2Gxgg9dorWrtUCgRMCcTgKpHG5XrXVFCfvaEhSYtNeXVbrrSk2jJFtzq2Tc3Uu1khws757hr9zQzh5Ds13QUgtad",
  "key2": "2eeq16zH2KEt8nkWqjbar1ULLoAoBx7Hz2aqSCfTrrY9XGAvCpdkCcFjETSq2cveeqvSa3zwuoHd3YbAxULMuPQ9",
  "key3": "3eFogj3qqVimu9ZWjzJ6cqy4npgEg9VQ5Vx5ppB2KXgaKw1Ph7RDdoPi1qztcS9sqNFGLXdmcmSjaKFC72xgqQp1",
  "key4": "5NdY17vTHucaMYZgrCtNeZjN8dqoNW159WRd7WptrVULkJNSWpJV5txHYchJv4vUwCmsCTBXkwV7JFiNFgoQ4NBm",
  "key5": "3nwLsw6buYmU5HtivVFWjG4Bh7PkcPJghqmPW2kRgL2CtmiRzDgryjAnKbSs9j6p5aw8679YB4ovqaaqZfcxPyah",
  "key6": "5mgJB9ZzbiBYa1W81cCgXd7KAt9g4WMvyN7MBjbc6QoM3xVU1Tj5hkotrLP5BBh5gEL5tLMzndv8vnXyvbvF9WJg",
  "key7": "5D36afb9vDdHpB2hgL1aPGsG9NgVXFTGw1NDfWa9XHs4jEyDUJEGHFQPkuXKrua87Pnj1w8HjUD22GxAbe1vrwk7",
  "key8": "3VWbhhmkKoho3sDJpDWmcaMzCLxCvYkrm9UqrB6KV3fJqinrJTwMqWPD4ZEGcpQrrxGAxkxMj336xA8CcPN37WEQ",
  "key9": "3AYozuR2zUjvf5SoLKCKnjSo36CePZE7oxbt3kKCSyQ6HLxt5CJ3jdvPn8KzcSuY4aXEVf84boiKM1VrnfBKuWrM",
  "key10": "3N7kSziHnhyaszYaaUtj2JgknHRfxDnH2KN3tgEzR3QoDz1MUeCHU3ArT3he2u2Tqgj7aDChbU4P8XZiHkMnE6gf",
  "key11": "4vbL7NBuknzvMd2sEZdVvcJ64GmuURYU2Bd61DTpiq6Zo2uyQMSi2HxdqvpoxGLQcj81H8p6L6SKb8rqjLMkgsnY",
  "key12": "4kyGgDeBQCE4VxqgCr5vX9CnZrnF6S9DKwmghgUaFgxY9UDL3DFHkkieS4TqpihkGriYR1cWcwSQ6S1CjooRgMxN",
  "key13": "5Hc1rxpBZjRxQgZTMa3RA5xkqpSqXdev9t97XPrj2JaUB5jnBfGGFizgqyJxLGLTc5vsVcUoYAmdpY9ZyxrcQt2U",
  "key14": "5iKokdvBc8CfqVe4RCtSY8pPzCRJaCfEf9i8JHpM9ykjRC6JapK4y4siv1b1RNyHxVnEpNkSerFn38A5wHTXV5oa",
  "key15": "4RcPsSa5FyGN42WFsXM3Pwt2ta3uWqJDckaukifF8udHFvCLz3oDRPqcNmYSxoZguCJnaLmbKuS5rXUXSeRwB9Ga",
  "key16": "34sh45rGh1pnzvxoPyibKwQ3d5u1TK5HLE1D1B2A9cNe9r7bSFJnZaqx8rpNhsbQeKZaXkzhH72zPdvtxtCDcoj1",
  "key17": "47wfi6kezPwBwg2A7nQTrjCQXHohdS9DcaVJePr4QxHEHFC16c3SJsdyyUdMmYDhNith6aWmZpRdnLZMj5FvdAbK",
  "key18": "5u2ScUJU1QdueHhpSPZRfBxLBVrdhQcXNaDZ6MBM8GKqVdW1i5KnKaPMq5RdiVZ222rFoswfPXPtrazZxfaDvZWM",
  "key19": "41gUqDC6vm3QmZKNoVVYf8ywKETm5HDyjQ2SurJVRUJURFnvP3v4mcJRiLpnRDFg21qDX3W89bXn237AjwVYsjtu",
  "key20": "2sd7KTTgUuAHzT8bqoZJyK8gZ2pr8LeVJ1hHbn2uLAUZNeqxdJGuLcnHNaagZ3sLcyaabgFMebLBk5zdAWywdobn",
  "key21": "2RAAh8TgGN1iz5MiDgPNCRiCfsjCWUivTfWe3WtKwSQz9qHMy7AbdoEzowwt7NeZexypCHXLCKaSZeMNjHd9KWuP",
  "key22": "5XCkRmg89xPFcAagR6cpEwfUWevtP5RYSavtM8SgGHxmAmBoTCpEEwr1afWo3H9V2N2RkfYRDXLYz65rUqmYXqCg",
  "key23": "45EJ8iC99boAkvvQjujaptH4hP4DEHmPgA5ZxntVFrWZQxTVYDnyE6VkCwqSZQYLM1Fd9AG5yQs4774U38Di5dQ4",
  "key24": "epYnBf6NgTxjzqupq8NCpzyTHmQN9a1PeNq2xz6AqsELEx6qkiNDVsBjsXZcwBSwwFw2y3sqKZz4m4R4uHCpu65",
  "key25": "3zktCFn1v9Hxyh9ggpsGzzmkFT9scTBt7eEF4MRUKQosWbjnzZGGkia6RK6tfBwymsgZtkwqNfx8YwmvQDHhGp75",
  "key26": "4Lx46wiL1iDhjre7RDo8Pn3SGBGpCFwLmhoJ6WQV1MPL71mLP63WRD8iTz8RcuwgByWVehYgoZAxYub8RmGSYxqf",
  "key27": "PhCKefATAMd6gmdLwHNTJHRrQoNVMmyTagC5sbwX1kiQa8Cq4pW1U6jecE6hu3xUWpUmV43vSCSsseGonLADFkC",
  "key28": "4HsZJ9ZNi5i3mi5abXmsjrVg3tHvyNHtej7rNHtxN7yCyv9xsYeWVgPaRHfqvdc2Ko1TWka8HqQoRgKZHPf68L7C",
  "key29": "5d2KKvA9X95fPycJhvoYZL2gqdoQ751FvBSBD2FQKZCn5sDaGx4K82tFBcYSjT6vB95uzsTRfSF5VNQ5r6rY77ww",
  "key30": "2bhVE6Uc4JyZd9HtwwTNtz8kjBwkHaaSBUwp5jwDBGNxdte3QJsoUtWnGtFSfqVGJy7oiQzgov8gZyQd6qf6XCpr"
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
