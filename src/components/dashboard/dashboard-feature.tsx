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
    "66dJSF1aoRzAiDTo6RentcpSa15foeqiFg258cPznS1PSfa1ZjwU7HPirSjkXw813VssW7GrHkqXeQdbdZQu1gYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35zdXmZ4x5XYzPWBCvgXpcUw3eY54fMRhFHjt7Q8NPeDe343g4ord5XYyKtDQ51FEtqURyKUZpdfdjeZA4ChZvxN",
  "key1": "UBxR7zuHXTRrGvGHG9DwgxN2AfHKaaado7hzbNfRSn8yU83k6N8AqqKHqzcZwH82A8LpENWLFspX2tA6EFbLhqX",
  "key2": "5a5Hpwauj6zKfjcpP8bozqcRYMHnvhkK5TQCw3iW5quJo1cbgWSUQUfTTbgrVvcD9heyLHNAsgQ1x2bduaxAef5N",
  "key3": "3LyMyZcVGvx6vuLWA3iXR3ZJPMzdxGDFLNpN8Vj5BtJaDYd18AfMibhjvRGP4sL31KGHoJ7oErV2o47PPquE5RXT",
  "key4": "2vAdRDTXCLUCPgdjaMJa2hvuoDdTHtyf9YhRv9QYYypSx6Rutn5vkDAV5VTX5KeTJB8opjvBWkcoHfdpVtWRufFt",
  "key5": "4zb5SjGoVH9DYnSmsCvVLqKfdwk9ESFpFaLNF7DQruLh6rBjHBibjsHjrT8n1p8Xu5um1fjiiVvyT1GrZxiKLPTC",
  "key6": "5mBGS1YHGhZkj91YD8nvk3HSEDqXSPG3Za9UiWsHTpYczb9uZTaoVDffxEE1i915tc3qsRVBkADn82sLLkBxMY71",
  "key7": "2KGK3brHD2wnooHBsLXZbURjvbTM92ixUQKfJnzbXv6y8wcXyXWJnNuRE996N2841V6VnUQS1JUkmmUdVaRPzxgX",
  "key8": "261beJ5a3q9qbEdwDmL4rG4RY8gMyrRZAHKvQGjsxn5dETHyW9sh5TokFQykEAKaMMQ87ZxDxmRnsxxprRSqGhC9",
  "key9": "5BH3Sjb8zQLk14bVFSdjmH5UDUa3jTW7Z8RoGaudTx9YYyoa3tcAVcYT1jkhXfVzEerCzcLaZDfh4C5KfDEQXry5",
  "key10": "5qaf9UDKEKQLvMXHxAga4VASpZi3uFiUCsx1joJGimN6CRh4cyoGuAaAtSUpAgLAnrHshHxHLE9xhjjfiMZTaFL5",
  "key11": "2JHavtQi4eMyEuwGfyS2ZibPgUrKRZLfTh8bBLKdMMTzYbcwB3j4LPMEPzzHit2LXt2aWWJdwSUKdYVqgF7tPqpr",
  "key12": "57JCLVB3Y31w2s4nEekqDvLtFWSwcYMchdKqco6NxWnC7SRAzXKdfjHnzeEmEPMZW3RJ8Mrygi1upopmUjcmaqiN",
  "key13": "T7JeaM1uL7HPSM1irwwCW2aFMQPQKMbkXCicXWWKPHf5gkX8Te6M9yM9p38kGphQocVvyDN6WdJ92dn54szN9nx",
  "key14": "51qf5n63HCuQnN2xdESA3DmxCWpPmFdqzAmTeJbrcvCfR75Bud7theFjipHP9fuEXFAotAX7Qbgo48czkg3cEFcn",
  "key15": "4A5mb189jM1bZSJ2AhCD3GosKv8dAxGCgdVDATKuVDBxnjKLwcWqF9wAHKbgwUhh2aEcwcXJ2m47SWPraSGp9iuE",
  "key16": "29QqQHC3XaK3Qj6JrdyERt9iFi7QJ9CuvNnoeWqn5tqTPrcCqXcDPEk5dznZAYiXf64crtHreJ2Sdr6zsVUuBA23",
  "key17": "464v8npsBGFD7LCGGjTFy6YK38k5Y6ZJwERq9grqLo1kefDhg9eSP1SpNmyMULQ5SG3WR9iNpD6nEzyGeLZTid1A",
  "key18": "4WhuAbq5hogiWbJZL3hCAQg7q1Y3CoWQ7KivcudPMWAfDi7qr2Jn7HdGcPn8TvtTkYJhBx9QLsx5ycVWjVdkWixJ",
  "key19": "4xfrVe8H8UuYKqxGWE3rqptyLcbNCUCtNMBtVWn2XVgGX8Af5uan7GhtMxo8w4e2ryk6N2oJnuoLVtHa9wVKhRAH",
  "key20": "31SrY3kcBEDhy6AQyuVvx8r5h3w4hHx7nLKhBnksoAfU2iU2ePoaanJEvdV9kuKJwarbfyb1ZhPgWbv9TVYMsAq6",
  "key21": "2cFC4jy7vaRygD7Qh9CBk8m8qiTHuZy6Ajyto52iMQh9neq7vWU5g3ptwyzK5KKJsd9KhQHmN1P1WA6TnYQkG3rZ",
  "key22": "3RW9awJWV7Rvs9okk9f8CzZZQrRKETNnMcHQgEwPmFTkESG9hme3HPYfhX52rZqMonRPX3HaiHb65XLJU8WYxdEB",
  "key23": "3Sdm5TdC1iXx8FxggcRW5KDcDo68aYtN5wrcgaNLDtcjuuixwB887WKPkZTVFfaex9qCsQEtzUVrsvyH9kMDyvFc",
  "key24": "3xmqWHNsyQX5FAR32wZP57ZztK2r1xWsPuVM1n7cPTDA1Ve5tJoNp4sTzSHvoPwrLAQZr1bKypJk8X88JxUp4J8F",
  "key25": "3gUHKWMPgxUt2cZkMCMoKF6vGNw28VdYTdkLoUA7C1TYBzPW65BaypwfRdhdb4XCkQQcXu3KKcwqshvQrtVJBRNN",
  "key26": "5csxd7PgaJ59nPmM68Sreen4dSjki2n8tk6Q37k5jEUiq4dKmQYygGpH4ioxUDTLeHvVfvCanmMGc6jXbL8fcfaQ"
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
