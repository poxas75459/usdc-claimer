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
    "45cCEcSsCZFpbyssCqsAWKp4a1CMhYxRFgqwQiFUfJEBNk7ev4yxB5tN1iPSvyDr6m33autjcLBzyaz4AyHZsk23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p8TgqC9PiLvBAbhVRh5ip4b8Lae5mwZmtGos6PeSrV1FfNnxiTFPfzXuXR14wXbd6XZQS8pzMStqNYXPaRsDeUf",
  "key1": "3B3fL5d7JErvumcP7dq9JqTo3btrrW9f86zg36yqhrs5wYtfdnfWWr6mrrXCzDJRcwBSfgUWGj4V6z4gFpJGLm16",
  "key2": "2wzaCKHEbaQwXu6TKSPds9XjKCi4mA8r5rUyModL6rXzWs4dJHk5h5UV1MdNqa5t7huw7t1ViReTeLhfk7v7pd8W",
  "key3": "5zqAJjWk71qhomAHDRaWCzrdrtBuL9YxUMbKRcfhjWKBnZFxAQHx4Nh4m8JCPEuLLJVidcKT6DbNqEwGeSmxdzPg",
  "key4": "5choJRBNcDeQHCeVgDNwnLftqE5LL2TWVP5F3Kr76c46sM7acVpLJVWoNossughBdYUQY2XTUAwCkpXp9knZKJ7n",
  "key5": "5B5ZwfyqjmPxpVX5K9a6RbZDbhi61QHN6D7md6MxgvX52PjcVhprobK4vEizCb7HbVe9fFn1ot63inRqVV4XiLGt",
  "key6": "48h44tvEySShoLndPeMPjVnE8mZw8oNxdBioK68m2GZY9RMenSvocGaxfaG9gXXiBUwi3jDGWpYCx2g9iESwDmdB",
  "key7": "4CXhkueKnehoz5fcRSYA4MfrhwoBL6M9CpVquK2rNATjSLjBuRhp7bd8CNDXw7bDmSkw8KyJxMqTb3gDPT3PqaTW",
  "key8": "5LhJEjtVEhh7TTbQQNhTbXaYunLp9KC7f7Kq5KtgKnWyTrxiyopZGPBJoUpWD1kUqJcsxgz7qiXE6KM8sihWCVyw",
  "key9": "2aguHiYgdFmrbkJNDpdrKCsY27YRcdhDuMeG5aWVgj5pNMQVffAAiz6jEJBvRsf4k9hYYkFUKmHVQUAfHDc9sXGr",
  "key10": "3Jdh8NP4KiEEKnXBzpSQTr7jpiWfgpv57nqpBn2EpyoeFHDJH5FPP3rakTt1eE5hQE2TNiyzwd9arEPvnZ57LvNE",
  "key11": "2oWk2bwNRn8z1hiD4iwLWTNMSUs71kzfxGVYv95js6dfNeWvqBqmb1ichJpAj7aPSmg4ebpnf5jXsehAksjCv2ch",
  "key12": "D2BJ66qJ2V6EpU279WMWp6CZnWiJfd6JPtwepJvHbL67iNWBvBKCUnkxtMk52C86aGTKsg2y6MjYv5knc9A6oLH",
  "key13": "2tnj2DgQRP3iY2Nx9rhXXLpiwoaF7vvWSE4xZn6BYZ8B5L4Gzhnw8zEAEYmq6aduJt1ortUdY7bFWCx72yRHuLEF",
  "key14": "5SrYe47PtG6t45CDg5DSBe42K7LeBJSK2xFfqdy3xgL5EkSm9K6m6zAMXSQVax57gKduu7DeQVwzXhDkx6FYyQbh",
  "key15": "3jFM6UKvNYuELK5uqfj1rhKMapA6ZaNscj1kAXgXE7NkzyFsSPbHmarz2ejBkcVNyYQePw8x4o4H2dC3Ncr3L2Kg",
  "key16": "3cX9MNsk95M7CbE4o8XzQD2js4GvtemfPAnJiUXvevuoVLTk9GNMnJNuqpxvuMgEyV8gUHfRX8ot4fq52ob79QkU",
  "key17": "5zsfMFprbUKxqztgUkkbPCS3zHRiPaSn5kjmKLNvxrmRuSMZnbaX7PM8NVGDK9atXyswDFAjwhKYYPetsNb5jBab",
  "key18": "2VRwEDhiaUN3TjobLq7zm5PdDELXjd8qHocWGfj9RogHMVM8MSMYN65n1agawavanGZnwqMMvtizWgXaJm6nS7NH",
  "key19": "2r972oDWWn3JE7S56BoWPT7jtHn4MH7RtgknovLnsDjzSBZACVKLGVwzpnDkky1T4raguVrdtjkp7cptTvgMjdaY",
  "key20": "F6txHjvaqbzrEtBdKqTHHpRmy9G68HxuR228hHSNYmjgMGh8YjcPC6Psni7RDmZoQsq7ktyqB3pMNjK4FMRgKxZ",
  "key21": "4bpbP2HR8Kn1w1JmSJX9dy7wMPy89Srgs3fwJVLBJ28Ws3ohR9DrkjfUS978L2zM37QpTwhbJ7KvM9PwLJgPT8HV",
  "key22": "4dZWonqfhRbMkC74HX8X4jVoSVMyn6QfdsEAK61mYVnPXNcCa4ZVPCPbd5TpiA8oxT4BPdnqz2UEftdZS4Q2vde1",
  "key23": "62F9yU5MEsPQaSz2zw42Nu8jibonxQ9cXLauBnRnNeKbhCWVnR6S19qd9iQnnsYFP6rnRwmpxYypLwd8EG1D2dJH",
  "key24": "263aHsUdYPJCErT2XmBxVcsiPRPYsWiEKWDsnzVMLiv7JYcewePoy1KwC6dwtejVsrsF7oWRdKhwgoznMwMvhfe5",
  "key25": "2a8YWDmZUSPtrtj12iJQDhtfbL7M8HUa4RuwnvRZ6mH629oA61c71s3C7LYZFwn8ib4k6pZP3L3Y1QqQGh4siHXo",
  "key26": "35mgxG99csiC4Hraij2Lm3kJwNMa57b6DiNNWrcV1Lrmgm9ufcT4ahDazHDgaoWaK2n9YhCmgfiyZvpKoaEP8H4r",
  "key27": "4UfDhAHukK6yn5tbHAHuRCDT9pkTHaqFc5QTaJvdksHga2bfguk7CpV3WpTEbjtHYG9tmDsFPd5NkWvbUhMKXFRh",
  "key28": "SfyzrA8f5MmNfwcV2ehBqLEM4P8cPGc3akMhV1x9hnUoH3Bm5zcMCzeTpS75db2PxfGiizGUjot14qQzPAqYiNy"
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
