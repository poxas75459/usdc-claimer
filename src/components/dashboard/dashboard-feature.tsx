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
    "WHp3ZqkXKqdFBSrSP1d1HQGDdr8U23UBELuoynmsT45YxZGs44J9w1wT3CM6zUVgrEmBhSTvKJKpMSFBFAj2Dad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgXjBnnN7kLYrcL9oVm6aBevmBTmrhsUXVkrE5HntDJ1rMYvv2jAEBUtQ5e85TYkj8Rw9p8KatsbicjKKJffCbW",
  "key1": "r1NUqvAv9kbw11mdBLB6CvsiXFKtBe2raAwkuS5oBgf1c6s7d89ZXsqaZktcJsKNYS8KKWiVvBRGVeJQC4VRNfu",
  "key2": "3EEjV5BtqmgL7acthZ6XGKyuSRyZ1RjjZ9zRrvzD1wFDEz5BG9pJeC9695iBcCnJpJKQbmwJpsQj2wEhkvL2cpGf",
  "key3": "5PZKeLe6HehrYzMn8dzngH9dHDXeuBaxR2P1ueYTiaHo2zmuKRUeVR647GAwWnpvwn1cug9JUn1QPxxJUQ7ZGxPz",
  "key4": "37EEHd1tzKwioXvXCXr9UPaCM83LH3oQkaUcgFgrPCNrE3qjuRH2gVSdxo6MZcu2MXQ5cNwnAAUDjCKZxyEbegFb",
  "key5": "3UV6Sto8m4eG89F9xUhZ64ivmEe2viHvfGeNpPK9QUAAvdGgLb4qvn2PyBpiRod6H2kBGSqdd2nzauRyYokGKkVx",
  "key6": "5tFs9Zy6P3AXj3ugJZr2yp9B5pRf4S1kWphuUowhNmbLrSphqHJ2uCfr8RBvzwRzAASZ8W2KLUQHmUNaPF4GLTvj",
  "key7": "4TFw6R3WX6Ah3AQLnuwh3YJFarKVp9gaqFZMsZ8RqQDeS4Vyx81c3TjAEw6iY83qS7cZhWv6CAr2qZc1jbyTzocX",
  "key8": "5Ger8HjsTYBZVQbrHvAaz52vTsJaqAkQXQ68E3AZysGFQSBYnGkin7PMKhK8V2DsDU1cKUTCmHZ4TguJ2K7bcfgi",
  "key9": "2BgwQaamH3bHi5niCZX81QynGwUHPvLMAFCHydmQ4YM93tpVgLt96eVjX3VK36kPCM38GcnuvoSkytceUV9mD1Ud",
  "key10": "3oXhAGDkPnnPsf8TKzcTS9RoHrKwopG7c6VjP63wsaA8NLVXnKT6DBepLxZHCsGTaefTVz2nP39YqC7QdmYTek7o",
  "key11": "5hVQH9eoMpCfLv5sk9ya937bnoDtyiSBYuhJpq4pgpnXukDvU8FNjaKQn5LMVkw5A5YwCVmuLKPuTCbnGgN3eUK",
  "key12": "2RFWkJuCmv8CCuqiPM8mBF6GC2om62RXkJmmZsZKqVEtDLp2oNTbUjDxYWZ3BcvT8DNzU3KNfNZa26u87GGGnYWT",
  "key13": "63mHtmpL5B26u7zCcDAu6RSMa2Z4JmpB5YQtBmyx8Y8gTxuQRrbTfXeye3TVxwa7s1C97rMbVavYxWwxDsrb6wAC",
  "key14": "4TkauLQfY8q3xkXGLZYRNsbBnTJ2A9yDXgviyStTfdTUcga8AJGKA3Ytpu4xZxVPL9FpZS1VfVuyUSbkbr1qoMHP",
  "key15": "4NyPrFpApMwkqRxK1J9Ev6GS1gcKHkcvceHdQyrXMWArYv3KqgBVCQaRUnjjeqrJPipBpVLnqNk8r7aY33poDMiX",
  "key16": "3FUkDz37UrfedVqdSik9cT8rrvrBFkFo4Am7W9UczoPRtRHaWN5xd6G6aSYRPU21pqpKdDEZnvKGesddNbj9n94F",
  "key17": "5SJhUQFejFgHVoJdjNZyGi6Zogu9X8qhxiMeSA8tG3ykLMcFSZhVj13NvSRD6xttcs1jZWWcceXxVTuPLKgZw3L4",
  "key18": "3nWLx7R3cggb9Y7nW4CfCK9tCddzKBUhCUNjHXRdyuDzWfFhK21jX8J1YK95LYk8Vphn5p4Y3ixX9QNGuhSoVece",
  "key19": "5tXMkuGvEz2eFJDqGriA22VhD69oNrJGXR712q3Knom9ERvMyV5NaCBpobwDsfRmMCAdkiykc1gjCs5bDRp811of",
  "key20": "4188hvquK7A7Gpa2nPNQijw5UxdL2bYUN3s2Zq14N91D5U2wXQFWwWtkWgMsGDBFcGSHQuy7VTAjfH8CBzn7UpMx",
  "key21": "dUS41BJXG7mavyKMRuWsWEsoLg7SQcgmxwWKGwaJxozkfu5U6kwdYXrarx2BQb5YA8nRm3BUrnCiBPQ9K2BUZzc",
  "key22": "3tEj2ZtMFPyjpZQfDUWvCUNRXd1Rk7J5yZp8w45MNAUuTYYC8ybAwUWNaeGAtakibMCdegcNpp4SQvCZSohUMtWY",
  "key23": "2usJKwzCuKD1swUbkZb3XqppchR1ccaSKvznKTQUa5gX9aaLWKUWbm4STkjJvwjUQiUKjFgJe3z41HDPYcmucqGA",
  "key24": "3qo2fzEU7Q8ugh1sdXRJFfZ1suBxar9VEii37HMLnBymG2s11C2UESGWUaZ9CqphDDXnBuhFJsNoZbe3hTQEXb6d",
  "key25": "2qNFREeKC1TWKv5VkBk3pu3bvLJSZeKwQNGfjc63ACSj1iN9sSD6RkgTRJ7XYd2zAZM4mtXiKZWM1Ms9FDcmq5tg",
  "key26": "3ow2VypncR6gPQHQuasBeuF8NznSBoL8FbibZSccL9sU39GWaap6zkG1Pw9bGT2KpZsofUvET3oqDSXbgXfByFSU",
  "key27": "5HG4aGqUhNkc3f43EgbG3YWtB1sqVScHADxezDup5Y4nM7DJ9DtxyniR8SW3FuRR3tMHZkXL3jpxTzC6mLeBkaZb",
  "key28": "5nDPNKSVmvU6s9R3wcJCi6AXwSikJHxziHv1gC1FJRpBvtoPWfqoRWUBz75d13D5xVd7fPwsaMFjabfebt1CWaEi",
  "key29": "39mzcQmw8ZzTx1TkfF7ux2QD6DpoJizuwkgFiUAU1gmo7AdF79KerHB2bYu7xMxeUrDMNtRm6X1rEMFe1HamtcaZ",
  "key30": "34WcwKSgzaSnfAokbLpgRvsqCKjSrfZqRSeFuCFo67cfYNF77XWdAqXYbPTsutedVGmiu2wswaMVdM1Lr1H1UuoW",
  "key31": "2dCtxUqF6qCMXgAtDQzBoN4gGY2yiBMkiufsLBBmbUPyxjktasqiDqXWE12TURhDdR99kbk38T4Ls2q2bdxP61fS",
  "key32": "61xgYEQUzZT4ANKif7uQfGVokJZTMD6ArugtHeubE5XhTwex8X6aciLep9KqSX1Wd1YscWCCzvCfQRs15uDz5uZh"
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
