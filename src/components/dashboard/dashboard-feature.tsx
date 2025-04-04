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
    "41fnVqRCxsg7frhh8bw35WkY6LUUGWkGNEsy77hKzRSKhjg2KjfUBZ9fJfMs9WCgjN4djkvX5x2C1QNA8GpifSnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XEfHw4QQhYtdmxjD1usVUrHD8ojPgJJkqsqP7BZfvt8pBqqa9tzyYaK8VjBZgXaen4rinMnf9z9ioSgYa5LaYqp",
  "key1": "4yEDTahGvzihbsgmtcbLgai7TKuyb8h5YACXY5jEgxnugnJAtuVPQ1ZYCVGvxScfur6wW7txq9YffV4aY7FvZmoQ",
  "key2": "4bTbBwGht8dCgq5gCe6o3f2hPykPXciYtDasb3Sie5FamoES3sEYKVWsWznZ4tGVgcRk5j5rbZQnEyTA9yS2zjJe",
  "key3": "5pz2oQPEhfmr4vQCj7FxHSziberwNTLQtvHrxXYADLogkStyQh5FouQJhxWzchHcCmsLWUyQxGWXd4b4zLjRxxHn",
  "key4": "5HkRePogws9ZSPmBDfMEqeeWgVgVrRpq3EvfqoEHFytVsV54N1WF9EoHDsNVWqAHoxLGZSircGejVDKQFFc6rmLo",
  "key5": "1q549zuHnZCcXHB7ZHsaG4FN9skmP34vutSMYGAobTJhG84PB2J9JpSg696U1sDCWnbRShb2ouM5Lfx7NT55ixZ",
  "key6": "bsqzL9G4uEEcQSC2jQiSFrKsQVynh8ZJXihiGVD2pcbdifePUVjB7JuB5he2NWfgXSxMmMWAodrxpfjNUhDpixq",
  "key7": "3H5Ut8cpHR3aeGudbfuGmSDHBt7pWq8928W5zCUbZQN2RQb3VVjhGUbkMpz8UK2ri8PQsJJ6TtpFbsN9ei3E9Dgo",
  "key8": "4bnGWYaKFPjbNezVsET5F6Rs7aey9UY8dtLcZjDye1zy6CuEKnVDZMWeUJD7hhxTvh7mH9y5i5gzZKCiMD69PQ4w",
  "key9": "3xYm694y6C4nq2qMkHnTE76qcYP2gWeVzJKbb2fnYFG86eLBf45TbqYiv44ZhhZ2GDLzNbLK9bzhcmHE5uuqzgmd",
  "key10": "CJvmmTtty5gWx9YBgMA8dbdjiyoQ2u1ECUsh2dHv8V9JZB2jj7CQz2tLxbTJd13KfqB39jnt2eETnYUCKYDF7nq",
  "key11": "z8xPFqYU9UaBwrn1mXowViF3SHw69qNKtxoGE8VXkDbYyGK4B45fu6yWT3J2crVCg3LXyYWjqsEu95RrKKHNNrc",
  "key12": "wt5jcH3WwzBmQ9Gqnp7hqQkgTjwwPGmkeyYpVHqBGXJ5qpRNidZjsKYdVpMbbY56pSVrhw2uRy1uim15oacAuRH",
  "key13": "9sx5KiKQoyj2Bn9gEkcQNa8zPKyMeXNN9gg1bFqNv2UaGJgDawAopRV77vBWVzmhHxd3PmFTZVFYvTtWsWjWc1c",
  "key14": "BgjKGU51mNBC5W6Uy8Gevjshy3pBSh5UEPRJWj7L1XS5fW9mgwBZAjBfXMEzczwYVu1mu3ttAibE173eGuJ8tYb",
  "key15": "7VpzUKQMPea9GgUbaspHd8YcLUw5m3DVZ7BcY282BgCBJ3qFypViYFMb3g56g5rQLTJ3gPCYgp7s7NCLrYN1iEf",
  "key16": "2x68xxtJRBsAqjSbZjMGus3nfPv1B8NUqTtYYA278owV5C52qgsuVYpMidyor7Qvj2RGNKyhB2fCKPvCcqaomSf",
  "key17": "3b7efNw9bUrg63JdqdzByjGLBKmAYg8Lwm8kGWRVftAZitwJpQ4diWRsfQvxM3TMLgbNgHaPmtvabR1o56wqQbg7",
  "key18": "LVnMsn1TsHsGgNZk5xZLmaatH1jnNm3ar5T3kuYsdLWD3r6zyQY7r8kmKjok9nbWGRnfzgo8VcTwoPYnHKCnGUr",
  "key19": "3E7SH7EAk5zdyPiddq8stQdhE2Q4qWtUS8DvkstbVrVmmT6BfgSbC3o8FjFN27Dp4FECNjMWjWnasoJCXGbZGGFY",
  "key20": "5ZAKJChQfHZcpjUZe7iCL6fW25ENxaXYEcgTom6GLxNVLW5z4XUP2htfDLBERdu8WUWk5yepYJjpDud2MZJnXJGA",
  "key21": "4qL7JVJMNZdbUqctbevDZiKbpBeJGwuSR4DBRtuimdAotjmA5CPW96aT9dFQ5XRbWSyN5wrjZZMEAPC9q8nYruFr",
  "key22": "61kxQtnz8V8vMGCc8nSfF5doPipJs4ffQJ6JG8jTtehKPJVm9X984WXvpYzRQuvWxFc8ogrubkhhg9rongxteoN1",
  "key23": "3E5Y58gFPemarfs2Em8bv3zGehEuoKe9ysRtkyLyaBut69ZVaGXA8MyqpxC8noes3n3LYFGYAKS8tr4zgyVPbU6H",
  "key24": "3J1yvAkBmr7sm8rYAdXStrWbcNdui1ViSgkhNRy5eLsqYxgBZNUqVzMkubB4JZ6YyJ4bC12GXyTJ3UhZrNY2BfV4",
  "key25": "5aLHpRqQDsd2jq1VX6Bkw5XkvezyEKGZyJum8MYryCXn1mjKXMDz1z4Q8nwm9BUG4tEHSyWJGQ9r9hGdVEEHVrBR",
  "key26": "x31NPuNRJSwyRQUecmgWAB8bQZtifpnWr8MSJdTpcCzCw1b51C948KdcX1oADjC8wUD9AXeETV62dz2qnzSd6rT"
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
