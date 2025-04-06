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
    "3vcHiw4VKXGFRV66RzJqk7Yozgn6qnC9k2AFkuF48KTftErogfJ6HqPbC5YZuHZvszf4XmeBCtDA5caoUdvyFpWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627vt6MA5FALUcpBqhLQiTPeu3V66ZQNt2cQdSJk3pfAmsQkU92CQzNWc3st4GH7kCUaNGTwtw7PDS221xmbiUgm",
  "key1": "58mW2Ps7aSwRopvJdhwaWWBoeAwW1AgHb5H5RPiSuGxUCBSPNvPFpB7DbqezXcZSKbNBY9JThaDMQU9WDUg6mx5s",
  "key2": "3J8oqyqwE7m1Rw34MM7mmwyKm3PwWyQ6MgPdh2Wk8gBeQwGGS4SCHHWnQEJT8BQhyLRMqLM558kUV9JjkuFeAskA",
  "key3": "4P57ppTTfcKKPegyTdBSVH7Vm42ifJiwEq5nwRrdbZ6Pak2MczmZZ4CR4Hu69DpLgF6U6wPnaqpPTssZ9UGxW6cz",
  "key4": "35C3VTfadf9m87PAjZpUsikzcPaoRDgzTXxhuvE8ZoV6x23SyLGdwCt1LZQQwQRyEAs7jraAYgqDw26GSiSCj6J",
  "key5": "3yK4Zhz1obTd5gtNVjhJgt57Js2FwdWNjmS9C8DEU8aX45eAGKVpAFtAvkowNfenDfChJxzpcuVnjogHmz3MpxDF",
  "key6": "3rtdi5hduYwaj74Q5WEaNhY8wid2dFE5bNBnNNK3YNb94RpuGxRmpvVPF6VrAr1XtapWrqpeg9g5BNmYvQ8fQQ8f",
  "key7": "2YawDAsF5nbu32NRuDBJqgEGuhMMzCFfhqwddjBJUWjhquXfsfWeatxYzHfg6qxD45MGJU9domDUmyJGhFUQxnLn",
  "key8": "qWUyGdnuy1nR6bmn6kza64L9pxV9nyoo1HX8GzdiaA2gpdT6tZcQJk1MdpaXKKXvrqJkgXkaM5pSoiZWU3VmRFf",
  "key9": "4ev2AVaah6YVu9BsyejDfAH1J6s9qfmFRyEMaqz3GdAFK8HxysL8p85qL8hnZ6f2vGJhNRrFigQ9fdxazhjcnPY",
  "key10": "27RBsTFdhxYvb5Lk4crPrxXbgE9j44WJeBFDJoHv7SD5TAqjqoucL2QyGQQon2VRQhUEjv266PJLZT7e1GWyiXSq",
  "key11": "jHyxZEVPAxiB63dpYKFJ4XGLh22PRP2oAsXdFANxJfmKrA99fnkMfSMMJoHnL9HCwo1e5M4j9AChJY7VdiKhfqN",
  "key12": "3iCkqTVeCXGdN5xJQU1xS3nWV4buntNVci1in7Qgya2mN7p7gYtgvWD67X6RNNA7RK2hTZ7mmbfSBufHdYaGRPC6",
  "key13": "5j9FajQAsPLcuYoVSoSogkE7CcQ4QPbkxqdx1NMHok3KHL4Tt4VSnkfa9naVkAzGKhbrrZSPNW2zrdJj3PWWR1z8",
  "key14": "kFPzNQrH13BgDghRw8ACTWEsCwmfuXuhyuqpA5S9uyAYRfffVTjGqpXtXuf5LbnRvnYYCNTxVQQBzT91CkRx5Hv",
  "key15": "5stojyTopw4eLBgvBuVeHLFP6KeJfkxN1j8xEPK7z91E5wb8aaJE1fC9oXxVe8Nz6Q4YGq8guSyNb7T8BuXq26zh",
  "key16": "dETqe67HQpj7p9HtCpeiSxoMacJcCsERxUGmiM9QzuqvRhgVfk5PXgWtbvUUerr7f7Q46HnS9tnLowJau4xmCWE",
  "key17": "BMuwefZuYertA57uFaYCP6eBHGAJUCytz2Gmb5n5n1TWFms769jKPZXh9rGAQNmRFeP8DEV7EzHqnZVifkaSoSx",
  "key18": "3Mojt9tDC2sWsAzWTPUr5uyjeMTPL18zBoXBwMfP2y8ejnFcn3y4KEPKRMqUAbCiL72y3GPatASq9ziGS9B8xQNH",
  "key19": "31o9pqrxrBkQUQ8LUo1QX57fWYa29KCX4q7588jKmyCvyAtpppYfifcrM8ni4bZDLdnHc4gZ1NLH1HJP8oPfft22",
  "key20": "5VtxRF7kfkMrRHR8YmTJ375D98CdmL2XTEZ3iDr3iT6d4skWWS4gVWtqJXPqQUV8K8SJcXtHbbHVGSKETTWb5fAu",
  "key21": "2MTrmfcaS4RYo4tEmzZTgHTZJWrHV6oQtoCvGaYVwgiEHoLuj92EdhQMWMseBiNaPbZvujuwi5qmHWvaZpZdBgkY",
  "key22": "3mFaVYqeatzYcFFPjDZ3GWQZ1uwBzr5RhW2bfXMDWRuSePHtuB73qd1tbjGhGjBcVGKqQD2PxWSM4rFDxBYMzDUT",
  "key23": "3VtCUVnAgLKXHtnmg2j1LAJFUspmNWoAZuprnKzYzMwr3qYzgC2uyizkigr9VBB3hoqsDZcVEq71AAPZEMawGnAJ",
  "key24": "3EwdM6TSDnPmL1kWyjNB4gWUDA9zUzxULbPWQxtaz9s9WjyPPPPPJjDJigEDfRhB48LtDkc7rKz7rrMhRSrUSZsu",
  "key25": "5yUdWjKVZgrZ57bbbPVLHv4U1cbeqVojx65sAF6DyAMfxNSGsyHsBBgzaNqtJKz55unofzaHsSwQMBMSdqsDAa7s",
  "key26": "mcSv8dbCFxY4fLQ4xYXW8ioz4YmmCJvf1c6tomfNLJ5c4hEHPM67ZMWQCpGi3h1qoo8mgkZsJBbzKRH1osfV8eX"
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
