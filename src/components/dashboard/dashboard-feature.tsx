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
    "5p7ojr7Bk9XYv5nuFxpA4gDrUtYueoAWPm1w6Yvuecvc3tu4zazBX3y6dY5SxiRqJCGfwVeZHVnrEb84cFki1Kjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iGRPFXRahvvuntNLrfi8c9hux9tvf8Xjf1q6P3ita5FsfURmLevJM1vQ8wq17gbJXc96KsSFsex8WPqWKnytA2s",
  "key1": "37ZbLMgkDjj5xbRf6qbXvDYPYVqtHmaw2A7eK3X3yLxsidJtoU3fmBQus1mWXsDvbgxZJrbJxru9xsRvJyjZ9Scn",
  "key2": "YikuK3APzZ7deUvdGtYQMy7A2WFd8hxzrAB9EhnuKyvw78GSenj5W8AkVeF5yjRx5LEmYpGJ7rpypo1xmsXDooG",
  "key3": "YaW49opSCkrVXxbxMGo4qkrChxbrBGPWSDAP6MyXKSDBeyNh5EygAqi9dAf3WxjLoz449wXkkf3kLbk6VCYwF1P",
  "key4": "44tmzgPcZhKWm7AHKXv2fKYBadzUYTLoB95kaKGnUYHbgxsXb9FMhuWfgkAxtcJ1m89TK8XT7fC6zhrHwoq596gJ",
  "key5": "3QtiQoSpi8tF8uwAqGtdRoa5WfG5KmdYjFAbV7eEdvVKEgRysJhxmk1eU8KntTRb8FuRb79yCMD6m5km2wrgnPQN",
  "key6": "41tZLZmQNgKc1XiWhu5bG4kByXTgCsWQjmGBhT9oeaZQUW6cATrPvXut4w7TmbUix89nT38SZdrC7yT565YTBJkj",
  "key7": "3TYCKD19rYShSvnZCMgFSHXLi9LNGapweDvmABJMhu9eWVFVifaMUn9kEUiiUNYuBn9xhyeogwuCM6HMu28yNYcy",
  "key8": "2JQTfaZoyRM3cuKAEgjksrNxBqmFApRXuy3whd8jrVMiJS2mMCGe3mVNMAkZBd8Zh95ijWeDDJoWqACJV8qLZUmi",
  "key9": "VxrCmWrpLnhT8Xsz6TDnPTXoagmcDQu8PxDvSXCc2kXyWrTzZZSXBvBzuLT2iHpxFAswFHNEno6Er4mEXgz14rz",
  "key10": "49LvpccFtakqmkJXFyhqft2PWqLzdiTP8u7TVugo1UvH1teU6FkaLHWY3QWiU5vWKHn5Q5fG9FEUnXTHWyH4DHpw",
  "key11": "2x5JSQ5EyMAE1t6XF96Y7w3aY65FuVFq97uvFZ93FSnCe2EEhsrZvzW12DuACPFxxqUHaErhUgN1XDLL1ErCuRRL",
  "key12": "4yn491SWMTd4Us5RyFVDyAErP1tjR1Yx6BHr1wGggdneRnXw1SmXGnTjpzmK2VfWiXHC3BLCb7pw36Po9kvGhqJU",
  "key13": "3N3ahB2i8CGRoJym4kgLxJkhjqeP3VQqp9aLCT1Z8eg1nVAPyUcSyZdte7i51Wu4TN6CYWvNwMK5VixXK36bxWhk",
  "key14": "3EUgf4iNMGmVsWMKuBVeRc8kPXdGNrBr5CYyMfaS2myoTMPZxkd32vnH8ge6snEG3aJN4f94bc9rqorV4pXSaiuS",
  "key15": "21K8RGbtSu4dTHLyMCBDAmTFhdiicrnid5KzjhtNCiEjsP6SHJMABTgRq7Dmf4QPCQ9MhNsCkJ8jYMB38omkgPg9",
  "key16": "2C1VoMsGEFrJMxi41wTjWMih6hhXT92A9Cej3EXjoqTvQfEpgzHHnqsq4LVAMj431gMX3UK5cNRyNerkppnCJcgY",
  "key17": "5xwWABYms4nsGakebrMgNW633zVR8JUNRnt7uBcP3cCgzk8GAKHPUjwrVLVoUNBwiH5FHqDpnachqRyLKkAxU8rK",
  "key18": "jYWAzfBV4KhQuJN1hoVbKWmpVK8FNjkUuPtYQPQTsFEYHLURMhKLHMhMgMQSaQ9tk1A5J8dEbrtUvGZX5LriJbs",
  "key19": "2k9C8SSLGaLMb7nUsBn8vDgZqx9ZUGm3du6ghfctqvc1ujz8STZeReU7qkckUJUdgjyiCsbS6j9kqMDhzeLEajEh",
  "key20": "3USyiaHW8ikkVCGjf7JvuucLB4fnmdaKTYs3CQzo5dPHyDa3yANrUKYGDHEYFfns1xeRauEbhSQy1eJdxTkw9Bgo",
  "key21": "4Qo8yuAsZMxwa2XWLfbwptaRyWFkuDo67LUr4GjLmzC8iNjtNXoUPfgwbLiZXUPNYPFFUhTz5Z2xP1cPbkPpx1Vi",
  "key22": "2sFHBjsyJqnu3G8LcVF9YdSWBh9kj9uY36pPs4sTFPeUdcEdYr4R8RGMRNZEhkYeNkpv59NPA4kWk5MBjavjZSQg",
  "key23": "55At77prhG7XN1CVXH8wCfkR48NPcG8paNP44QrVVYSbnCna1AdM3bNhsCThVQjdvfsECu47JRqDGEfs4cRpg8MW",
  "key24": "LiMK7JzE2o9opngvduS7kgULsky8kMhqVdTVmB6U8QZgaEz2v1Kk3m3qTBgt5ebfznAnf7FhECexY27Qci1pt9T",
  "key25": "5ztouB4mgtQrFBhuJSvUxgMxYeyBhMqbgmipRPqa8LV7whBfGGMPe4W2g5QrkDvQsgPycbSyr2yg5NnUneX9zJhf",
  "key26": "TVwRyMkXG6bY6dAYcYbsfnhqqkK4tcSE17c1Acz7SQxPq4zTtVCrgkQv4LX8b5zrsR5vLCDVyaR9prA7eEC3w8t",
  "key27": "2PsA7mVTvn5JP9sRkg8eCG1D6EUkA3dmSQUB7wk2DA8uZ9tTrRxu1uvi61UQJqsWJEvuamBeYZZHXJnXg2dcR6m8",
  "key28": "Chi3fM5opxP8JYZtfVobpvwVaBMYrgBaSdpGQBWNanP97YtmsjWbordvAoN2Sc3X3vqjKb3yte6FBi8vYtxZWaU",
  "key29": "4Yu5YN3U1yTUJ3wy4paj6UmTuwtsBAyA4fHHDJad25dnHeRpXQHmBYDsXuPJhbAt9mgkAmPkCNVHSQckpaxrJ2bq"
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
