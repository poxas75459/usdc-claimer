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
    "s3vVo98K7jtvHoSpitCwKyvFSMJ7ES3rHE2Lini3ddfhZySUQHjKMfZwwhG79zqVnTAdxRW2vTbH7oH9DDk7uCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6Cduh63SHY9pX5fe6KsjEcKtjR3y1kXpF1Crc1e2tKewSGBBYSDSRBh7WkCLgJTK6CwoZ4EB6SmpWF2NozzKPk",
  "key1": "4zBmPqrjsf4FUL93hstdQeMDC1zdKvSyWHJopSpQmVoGkz1v3Z8rWQVETDLLqLxon6xQLaKySjKPRWR1qGHPijk6",
  "key2": "2hSmXshCJjNZFbMESEhzKj4UwEumJgGzgqjUxE1TDH728g6Rdo6sdHoPadoyaLM21JQ85XXsEtY1g6eEpeXFvwKf",
  "key3": "2qPpyx4vMSStTuVhnkeCrUMxZLmTQE7t626FKovbq3VFdpyFAMM64T3ESVB8T1JoT9u4bycTpmZkjfhk21CfxBTJ",
  "key4": "5A38aq5SbnzJWQz1KsV16WmwKVwuj1X1wRgsYhi44zSfJUNiSDbqDvgrkHwBBzX4AGqCsPiNWEkPo4t5p6gDoU3g",
  "key5": "5gzP6ee92XQz38ep77Ck5X4K3hXW6WL8jiLhrSwtEBChRsnRAQorGRLJEsHpUmD4UcXy2f9cUJ7YBvbVk9M8rtm4",
  "key6": "46vU9Ejfe45kLzysZf8JpGVDqKC1Npdpd9xNXszqDekrARB1e1bqckTwiVYz1qHpyGjmZd3VnL6J3ajd3pY5F9tg",
  "key7": "5K8HvRQcPGSqvDfhw1tdm2xKNSJThUBNXjTpctzWHQtK9eURfxW7TafRTwczmTu3BYKQvZ69MGKkrDMvJsv8dSPg",
  "key8": "22vmBeu9HywcsiUD1nMGNkmiwkxritjGmp1MDBYMeiGwkm9T37Mmdp4c8vAXMdjm5z9A5WYvWGvsU39fpGPxnrHQ",
  "key9": "3oFJZE7N46WrgKTbiv6ASr854tBA4DfQiqmZL28Yi7GnPLDo4osFc2zii5tgaETfuQKRXx91kq395VaFZ8x3xFFu",
  "key10": "2TsZGd25peSeASsjYtPPgfUmFdewJ5xT26oQoSthzsBwEZrk2DJrxCJuErEjZno9s8cvBtWAU187W4g8ytYZcpEi",
  "key11": "5jyvmyNzvvUFfH3UwYNyhVG9mra53XouxH3zbt3GYPLRwt2RHtEEB6htUvz4Vo5ntiNytmE1GaHAoHYqfucpAdgN",
  "key12": "3bYCpAvRTPds3SKZv8W6yL63gNcnT8UWMAxKftmZBGSNhK7ZCMyGkepqeE94rrydLCmrrzDM9k4ojYaYwLYaMNRm",
  "key13": "2uA1zvY8uaL9NJSRewi1vzXZoPuF8KARwLdXfdBaR9YJ6iEoAtx6iwpdsQTbHX91qYevnbScEgLBHPa98kjXezU5",
  "key14": "GTq5PNwRNq32mfKYYiBa5dGzrthxGnztWV13vWAb7bkqraoKGHtbdPwuJm79395xXL3Zwjixrw62fyUYStrfri7",
  "key15": "5A492mK7Pu2JPCSyAvzey9Rng7qwDf3Kz3PNc4BFGZJPk3DSGsYgoix7mcQfR1gnuqMhLQYvUgechBMpHbkuY2Bk",
  "key16": "36f9FyDrbjAxD7m4cDstDLNxoUDqRn8NMbyEw5Q6B8LQycqTSDd9jBnqvfF2udzvmRV4McoJ4Nt3TLcMcK6Xoi1S",
  "key17": "4ppzKcNgcbzHWhuRtLoKURsWpwWrcD3GwT2k2e4kq6EP8Tbp2NozGFHFX7G3fFQ6YK6NY6Jo5DzrqcT1rdZnzMi2",
  "key18": "2TXkHeR3YcsvmZDyYYXj6nAyNkA5AiUNav4SrXvY1BKsvEv4iCSowPNqgAvV7jK4Kv1Z78pw82UuaKeJvo2cqX6n",
  "key19": "5dsMJx4aHvG6uXThR6rje7KaJTjQjAWWgCv6wvGAb1SuFnSLjSAqtuonnPT5BgYEzMXCeeW1b17u1irj9TgYFZw7",
  "key20": "NH94w3jCjdtmG3B6shhouYQsMNgNQTaTZVXZiFm3fxuLZUNH1uVM92XsmMC8BjYVWFGLUCxofnF9yAEALijK89d",
  "key21": "4vmufLLj7Tgr3KM4fiqMTgbdj6d4uAgEfDnauF2LLUdnK7TN2TQswzujEmtiGfwGCYSEehkS5WrbMR5qBTcwozqi",
  "key22": "5bVnebREF7YZkbvCmWtUGkJvBgMbJ1wRFniebadmXSRMgf32DkqGgtjtG66Mkd4Hc2pLHnjqZf6fee27vKfYMC6a",
  "key23": "2wZCYbusmwvHksKJTDDB5cfW5Fisp9DMQLWGq3j9gJHnuP4RQNSY7e1x44yaoaXwpPj7twSA2k7ycbegHHcEEU7A",
  "key24": "2186bfvDpMc78acv2y3EaHPH6rxsYgCZwYutWbhXfoAgpWhCZFunmoWUWDxqkZVaqksT2FPKghnmCdYgybVmASDD",
  "key25": "3PyxzGuppHSvrrNhoYdQLT8DERQ2EV1n3CPbtV9J3GZycpwgjqEBcExCs8yZpZ3WuL8vYcUEmWYg7o8iwXsL9gG4",
  "key26": "38DdwZnwVWAdrVE6hcejMKybkkmvKFCgz9WhqGeDkSBJ9dDXcnkPz76NF6LNpDdWNQmHcYfCsd8zCVw3qoSJKfm8",
  "key27": "4LTNR9xx28uBY5pmtZyBkc4GrX4gnu9F8UEtpXAsznqN9XQXpdeRz64yP4zznXrh3yKQEnLPtqtTwaVR7oSYtQgq"
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
