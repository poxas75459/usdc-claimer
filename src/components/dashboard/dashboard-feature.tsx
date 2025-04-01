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
    "3FLm5Tv8PQCr8aQ35reAxsBHPJ3AhDqfXV2AQQHJsvnEvJw81AcSfLa19igSEwiCYPn1SaM8SUkGejcTJmXAdndd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D2vAN3edGX1DHcmYPdDTkPQAquc95hSe727ZW8vW3GKcmNATkDjEaQDXpCSXKBNyNe29t9kcr255kW6MypEoU86",
  "key1": "3SdQypN9sHuPyfRQZRrNQE8VZ96KnEnkx4Tz5WNhxZjqWWDrRnD9tFMW1tJUKhMsGRPQywvaMHLUP6QVLGxrSWdc",
  "key2": "33hw8SUD3V6TLpWDRvQMLdRZtgNJfpXUGqJAuj12dWsmuX8T1VUCsDJfmgoiStWpFU8c71CZWppeH6Ty7h2fr8TD",
  "key3": "T6BYmq8KWq2zhB7grWPpHCKforUYho21uiDTQKYcnwQVirm7NFdBTPhY3qL8SiB4ASAXThB1z3bBJUxW6XC1au5",
  "key4": "sFVqopVBwcLTjgdFdXjGZtHQgv8JbxszrEz8EZkxW4a2m3mJHx1e4ShH6KrHu1LC5TSfywQG4SRVL2qnp3wSUee",
  "key5": "3EWrNuryZc3aqWY9XLrimP77w5K4pLRZCPKmF9CxEs5kKHSuyzayrBY7eXAgxKpFHdWbvFDL58gyChbc1hZWysxo",
  "key6": "4NcZYjsRBmejiL78U3ZQ5ksHUvBhT4fQv2WknW42mxzVcr1LFmWwFz7ymeK3YEZ8Y31yc3bJsjdj8VqVt1ovQrqh",
  "key7": "3EvvEZShkTsdfLv8hZsy6Epi3ZRHh28rgMSf2r1nU2kaYrBFeVef9x2gnPTba4kN1K6Pis4mVw7FmD64QLxzVoCj",
  "key8": "4Tncv3dtDHQ2dGs6UBEhJus9aSMMRTyfNAKprwCX2MA1ZmVQmXm78r3YbjKpf7rF3iAL4z6MqYzq3Mt3MHgH5Tfd",
  "key9": "5q7ggzhnSEGTWGqHyAAZZDdhAYfaJyKHP8QFYGz6cAUytCCqhJ3tFcp8r83arE1czVnGMN2PcJ76wwRJemBuhAFC",
  "key10": "5ZSqBXic5i4S1fah9i4aUKUgXf6ju7tuiQHYgfh9WBGNLCcZY1Q71aiCZxupswxFJznXnvbvwENVjCQPTB2PaBF4",
  "key11": "396B6UjH5KVAsSTioUrAFVcP2xomeNDcMaWFK3FGrmjWvd3S8HyRQjVznyg19ve4ikhbGurCrg836pcNYVoJYe1F",
  "key12": "2roqxok6WGRZqDiuJwWrM4WWKyrFqoU8JJeVz2U4Jcm79TSSWsz9bgBzvDJFEZG297eKxUhdHpskBWgmMB48XbRc",
  "key13": "kENKkSbceh6Ub7BZLjBMw8KcbCJGVAzDAJDKGtPs5qJHndWQM4u5badB8gdW5M9Jny8uQKqfjBRa26DBZTJqaMN",
  "key14": "3ivTyTLfokGLPCSu4FvgWfyB9sVG46dMwTdX2Aj5r69xEKw3rPCUKb3f2xf1SLQQfeGLXFiK4hSg5NgvffB9PR3Z",
  "key15": "3VqMAKKeEfG9faGjoQXo8FeFVaWjQF3FKgxzTBeNrs4rdDqEWiL7hPTfCtbnjVUgZ9FY8woGcjSFb9kUNkMhEEjQ",
  "key16": "3ASvbZDBVRVU35KS2hyf16SuWu5M8CKXDLP7yAQK9hr6ZQHPcVT1BXk57twEmNAZs4jnQNJKHEfEgsLuk6MWGP2a",
  "key17": "3pZreADXXJ3EKn6oZiwfLq4SHDRsaGw9Ln6PgV8PKg1Vu4xUfHsHLvAXbnqQnWtuLuM1VraroB4NB2JS6rQdzcY3",
  "key18": "2VZE6pufFejdbEGfKKXrJJ5HBhp3onLDDmUaWSRCUqY9vZhKQZAG7fvhoqqVCZ5r8uKZ1H5PpqP6NZR3iwWa93w3",
  "key19": "5ENSwsLHx8qFk9soYEewH66StR94nz7ArcCx6AUAv72QKRBARiajdHDjyDMGdLiKjfcamkYHqPu4KVomnERMXTCt",
  "key20": "4xD8ccHrKiqKDEvjFtz1VgqrjpnCZ7UWqZGRcS1U1ugTwu8CeN8Rqsauq3gnxLhy5WprRDERViYFHKJm264HXPyC",
  "key21": "rzEQgw5mRDA2rR9D3Dcr2MbxasAXBjdfDYRpweWXiwyRjkfE5ngJMpyUTdobPY68BZtdFcqzw6meSJ1dfouzd4i",
  "key22": "gyPkEE5uthWcsh7MzxwKeV1BNX9uub2X7Tzbt485hcdsrNBApKHjV7poa38oLciCnV9hFCVEU25nWeWanBAJ91c",
  "key23": "4mYsPQ175jLcTYuT4tUDTgTLzRE9NGzMbSpBtcA1weVciDMh6LBV4YskN67rRCFw68qLGQxq8eadLjRNSopEa8Eg",
  "key24": "4ZWLjBhTuPKacbWRLCsrms6GTQBRdRphU4FzxHNDopZQ4QUx7k3KaacBRASaYoK1ufbnFMgDi6RYuTn6H3wguTt6",
  "key25": "3ZgsWGqBs5vevjbmTLVY7TyNCzYPpZEyVo6Svv8B6ayL8ezX5PRRn2qpXGC81FrxgrJu3GASM6FMBoRSy6Vx2JCF"
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
