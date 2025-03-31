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
    "5AufZZKCmcB2wmpV2gZk6Xt8ApYj22gg9hd5eLVQtEWz1JRPtERennkwaMYQoCKR5jAkGj51UCopjr8eZRSsH7fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dK2QLUancDSzgHkBdNfYpXvcUxHASk1KLLikyQSzTVfaCg7PRx1gALk3wDzir3V6KwvoJzP5kHVjgpTBtCyR26",
  "key1": "2h72dnVUV3wjbAFjECT2CpfJor8Rg5GDfAtDQ8JjH7iGTpj6jgvfLzCMrGi9R14aap6gJJAu4Td6hHLg4jNYKRQ2",
  "key2": "GPrzgssqRbzCV2Ag729RkP9HUhKLw8ednFFvpDHCzReEFERXCLbVY8z7qVw3dsLU5TiDCexdeWTGDLSE4vUoqBg",
  "key3": "5xrUU4pHd4nvFo1urNHcNnt5oomCJPpJPoPHxv9UPoue27CG4HQes7DT1n6cdt9yMtLNnk3dmzJJyrSeDn3Zcv3B",
  "key4": "5oKjzZWBumJhXnVtpE4WEbdi8veMp3JF7sjWjzFVTvRkHUsV7cuaTfh1wUymDxZ1saw7RbzjhdYE9PrCZ3L7g3Tf",
  "key5": "3KkwEqW8RSqdE64m5AodLg53KCn1DRdNM3kpnXNRAwt87RntDqcNq9vK5YEC2zVz36Ynf6CYTJySc8iYZBTy5k7Y",
  "key6": "2QUgrLD1yrraBGCA6Fo9fvJ9zH3TNKkwZm9aenpoDPEPjUsDoo3CtESuV5wSqUh5KTikz4RHFw6sNwKtiWY6W5Fk",
  "key7": "46mTcEQDwjJMVGQy56k7AJGWTBNEu2TPAvnJohSwMfjrRX3cY1VB5wrHApUfLD8RdaAu44EdnLJfm7mAfpBg4Ubr",
  "key8": "3ySh2paa9QTF9Vd5v9aN9LrkzCpknxkJsQ2Lc46G2bxzrK72V3yh6Q16HJbaq1UUg2evUhHhT3eLiaeScfoUb885",
  "key9": "3cK88rSBL6nF3soEHEvtGqtazNxTH7bE5rPJ8wUoyhwrzqPjxFD3ChC8wxzcQDXMoRjY7TVaceBJxu3qHrryKhrp",
  "key10": "JGUpXwycvmv1hd62mjuvwa67Zjyaex9n6BjWXpVJjDi5RhDwesGNcC2ibAJVdiAyKdQcegQik8pWPVj7xsveet2",
  "key11": "5L7ThUZtLjoHj6hM6varSFM6p6eM5qzWiJwxutwsAKD7SrWr5MG5rHWy829UKuLgkPsYLVcCz4gT1WPmEkRvWfDE",
  "key12": "4Dj89ggDPBtfdB3UNWcnKTGvjBCXQN3SJqU1NtJ5emK8mzeGCfzbcF5Tthw5yxxK8pvLeFDynvBGHgUui8NgYb6w",
  "key13": "2QvEkQBQNif3Z4nM2GLoGN8jtWH3mLNkh4mzvkNthhdZD7YGGhYgtqSHQkoVJoGySteKvKGtMeC8XDxB9vWWoQY4",
  "key14": "QBcBW9stVYxFEMMN4z5ESQ1tDGdaVVhxqt49npafwojPgQsp15kppvqCzzBq25hb4HCwF3vGbkukqMuPpC9K91j",
  "key15": "4o9rUpcCKpDEavVZPmFmXeomrDcGEasmXFQ2tY1D765LYFTaFPSSBrYTLtHsVnaYftho1zsR8YPEMsjcXwUK4DE2",
  "key16": "592tdbwXSBHjaU6UsdSfHPSSkYW9on2AFpG9uAEX2JmkG1Dybq6pkK2ibdt9S9rmL2dK5fgz3KHVhhknG5GvU1tP",
  "key17": "4G9JWgAAhdxC99cnMRfEXwTV8TAphVPqZ2AgQ5tu1RQQYLwk6fL75y9kv2cZ2fFVwLCaEYqBn5tm7efJ146SXyo7",
  "key18": "3FK6MsPerE22NKKFtwdEKj4anXeUhH5dGqhB8DqbBi2wP98zZErA9j4spnZD7Pqs26TRNjfGPZ5YVE3sNovJ28JF",
  "key19": "2B4iGAhczK1q78SmgAt6Z2A3cLVxXqwZb2YPuGfd514Du7jRfgkcC4ENiSTPZAWGXfMqMpUeTQq7dJLM24n2Ksfy",
  "key20": "3wWiZtyXJEDMwWkVdRgun5rPS4cnjNwtkoVZVD35cjxjzjc5qmPcHmVDNBxiJHpvf9KLih5JK9fmRYGGVuU7EFMc",
  "key21": "3ye9ABZHAWkra21BP6D7YFPR1AZUc31ixrY9Q9uUc5HfUeKn5QHiYj2WHYsDG4mVvYvTTFYvBgC6mewuQBJyd5o8",
  "key22": "fcigSZpeQLsZy8ZVnKqmgvdmGKcjtG3fQNEwM3VWx8x4JDDpNo1MLQeGgERfiMSGtzNTiNVYQpxdCLvCndqZ8eP",
  "key23": "3s1bmwEGU9Kxr4ywzGWhQ9NNoPTkDX9gCdYXaYsLmNENDevyW9nQNtXrZf9xPu9i1XoBsK8Q7GYTwJXRZb5MT5C6",
  "key24": "gZbjAXAjAEDcwJfsCMdDCkbcoPc19bAqn5BNRatkcqSKCMfHqFpim3e4TYKS2yJ6mGTs62B2su6nvab6YjLTF1n",
  "key25": "5oNstgn7w4Yr3UjwgnhQGLELu6D8u5MjH44c2iM4pTbt4CaeqoVjfaj7cw3BwuE8czyF6imaugVHZ6UFkF7LPnGr",
  "key26": "3UFahAYUXWP3f89WD7KtL9gNPpWFyYUk2EWfXEBFCNRidTbvN3g5Yz1nu2sQK4YC8rBWoLDBfdQniNqxcGeExp3r"
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
