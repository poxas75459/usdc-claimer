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
    "4mpW3u8py9xKGVNaTdMePY2hEq1SRKbWksDBRReNZkqoMQPKo68zbt8D13CDRKC82hMKNWFroVNP1MvTtoT4ehT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jDWBEo3u3KwhNgLHNUhvcPoGSzVs48x4UbD3TtjnGsW4zEFjCh91ka25ujopLu1oRtb3bb1d3kHBMAvNqk2rhqw",
  "key1": "4hxL5khBnuY62xnxpwfRGkRYePNbGiGfvVFVyrbeKX5VgZLiUXDy3Ls9w2tsxkhHnzCuh8wo43vZN4hDGNTX96Ff",
  "key2": "3YtQegPqGtLzN6r7wJ9SuRprrKk8CxsdPS4DBkSrxm4HRxVxde649uT1ghAo6SPeHSRZSnMdEewoF6eoiBvCJf68",
  "key3": "xdzgY1vfAS5MfzG8GRF2AR3xkNXaoa4ARh7Gshb3FP4HivjQ9JgkBVu8XCET9UDLcQDpY3L6u35smioY78qCVCz",
  "key4": "5FNUDwptkzmSyvPUgnURGehnc1TSCysdYcMf5nFYHC8nAFEbTGzxvnVAEtY9V4oewo5bhCuPdkqxnaqcqzbb1GhX",
  "key5": "4qvdd9sVL12szXvsSef9Gqf5Dd4Srz3rwf83eVTdLhinH7C9oWyfprgCCP6UE2VyY3vgcAvsLD4sXaUA3pdNiki",
  "key6": "2aYUbRfQoDyHPcyiQe6KVSgNwtYFZqimvcm68Juso97u2KVhkB8jsxPjNzspMCwC4aNJoKKtv7Lx3tjhWDYGvcCX",
  "key7": "2HqNKzHC25aiMBVyLkujXSkCbDCZ4cjzfGf1rs5wbKj1Y6NK3LYtbqDVRCcXuasECKAykhXioyeGmeL9pP56TzSH",
  "key8": "2o4TjLAkEuYdth5yyj814HLrfGnCgBgmnQQCcwLPgFzhSkJb7zALnYeaB1eGJ3aDwfQhRMCvRmbnJLsd1kbWLmdj",
  "key9": "364CQR7iBL6gwzR8LX9QKPAWAELpJjq26EqTKxFe5YGUft331diDHPhfM3Gr19iosC1R4jVZ9PDzvUBZ6jUM11Ge",
  "key10": "2yk9r5JdoAS8KFgS7rkS83RCRZo15R2VwKMw5powiVJUoUFGnGMfLSkgZnbFNvzECqykHEwzYtq4d3aXZZxyQztd",
  "key11": "4kqNM3dnxpo8QzCx7J65aiY9Gf3WVNzCC487PJERCRwXKohjhypo9Cqpy8vxWfpGACEwfwTtvHjehNjMjVtGE57s",
  "key12": "2TeZFonreU3LWA4msudMTnfcQwECGv6rAmw13yqvvjoPG81G3x8xBejusqNxbMZU2Eu8NSgNZLAZQhfkb9BiAK5s",
  "key13": "5Jh4VVLxSiyJ7Twui8CGfzN9hvUTvQZBoovg9mW5REfBsGgPVAi3yruR5PkWCNXffgSRohRArGmeTguYeJoUVm1j",
  "key14": "3ixqRyh6di2QjEJWJxA2B15qhrUhvXMQZAXCUx8w8mn3CP8DLUw5HLJVTaAGf3n7Za8h5hCSFEPPiAxzBKnK4rUD",
  "key15": "3M4Cs91Gy7iS1jwi957YTw1Fu8LWiRdMi8HyBPE4mso9EKMhv8ei6XNdWgrih5vLyeNbWdHttPVAGr15h1FVbZUV",
  "key16": "5UcqwTe4JXNtHZqrNSrQeV5KBJN2itchzGCV9GnGQDhx5wbDM6PPZMBTkqrjBGM9crQqqkMwcJTf6Uk4CxQRVoMk",
  "key17": "62FzqdvMaRm5FLxjUxX2kNaNmW8MXFxhpaDdmM22sCiPkEJZ8CLEXc8FK95qa7zepyK2x7M5orVQEpv9QJDmGJoC",
  "key18": "pWsY1bXwC5sVbJVj2N29brQyq63nujmdaA9CRCm6CxuxDCA4zMNkgX8tCG7B2BqzTiUgvLhcTVwdHCf2kNA2Maq",
  "key19": "4VDz4qEBwfrNkJMCt6SGUtWbhnHEhXLMjQMxiFYj1tfWr1oWoW38m8taRgrxxEEkGcfh2KYskU4N2SFgohiZ2LwA",
  "key20": "64CAWjeSTfdhKAScLSnCB6V8tWhatPs7Zn4zkqNLYy5Pv8GzuHFmPdpHZYUv3qJkY9YMG2PbovbaKP8JQ77qCD1w",
  "key21": "4yzrVhYPF7KFZGb9QwLLJDsnVN8Wz8Q8SRa766EgVKpxEFXnEZKyKH6ff4M81Czvtcz4YQWvbFRfrSwoyeFJzF7r",
  "key22": "31Pr1NC8eRDPm4hat4KrmJWhz216tUqd2DgPoSTMxv55tLit3zkCnxDJDd95Nj6uAhqT93Sq9CrdfcZCqHEX3PT6",
  "key23": "3mAatrfRECaaXNSsmKgxGPFGTkVcPD7TCTSdorNJUjnDb7dw2QZspw4eMShXx2YbU2Ra1MMXoEVhAF4pXGxyTPmq",
  "key24": "2GbZ56PMzQRojzg2MxyDv7nxGwgMqh5QqJ4CcA5yVisVDDmFmMHQcV747wUi2hkphqS2yVCR4hxzA4BT57mDJbMQ",
  "key25": "3HjW82NQ9mQmeS1b37G2gfmsx3U9TwnXJ5VfvKZNqrcNH56DuhZeN9JSed4vz6ZBYgASpSaosMyBoJwesovNQf6y",
  "key26": "4sQy12k4gsyKVSS5a1NVn2CGeHs9kuNE8dGKoVCj5MnAqoGLZXwEoD38BwtFUpq9em6pzXbCzpe49cWpUussLE2V",
  "key27": "2MFKEjc5UZwpC32dqqDQ87ygK4h3qMo6VkNcJa7aW4hfhpcyFxhNotRBh9zWGKKi8pr6xEjxfSGneyW7v8r8Jtee",
  "key28": "zRVtznKnVqwCgzwB5VAF17taG1YeY828aa2j9jwshQiJWgwUcP8wPAreh6dH5LdYEbwSWD3YX3sfBbt1VtpXaAg",
  "key29": "2dAyPkuCzRoBCksxyvfXYnTTGwovq4EvaCvddKZJneszJ7XF9mAPCZK6FfUKXeGZYUpQ1tPegsu4eeRnBqBPUewY",
  "key30": "55XQUpcv57DkmZ766iwWtdHJSU85hTc5Sh43tqo7fGAqcFDPywpHioCVZsYEQtEG6umnD6qcYgXF4FtpUkAKVNfd",
  "key31": "rSSkvyDyuvS2KNe9Q7xM7qmuWWrSGqFP1mc4yRYuzVkKx2pUgEtQWVWAxnuW6Y5PXVQgA6K3vdFXUqrAuFdL9zq",
  "key32": "4LEfqwanmzSs91rcZJysXTj6hn6JGjKHW4AMPbaUtwJBa1xVuNHUHmGjiZ7SLrLokJqMjutsgPorkvWdzBss5J7s",
  "key33": "4bhzpwbLpVypzKXqpU2XpF763QXzugKeiLwt4RHsz5g9uQ3b1Wh78vF7jYcvXFq1Mj7qFNYqm9PWCgtG1pEqLYKG",
  "key34": "5xzzGsaxDBdRXWDe8on321vgZVjAQkmo1tuKE1P2oMD9Ro8obwMvN8Y8KPKAyR8syCgn1ACiiU6MLEUDieungZ8H",
  "key35": "22KdwYezg8JS3hr7t4feggwPjycEporSjCMU17MKXTv6TiXSc5H9HFNhZX9KJmDmdfULd1F2VTowu8z38UqgDwfg",
  "key36": "2tntjZnD1aoVcdEVfL3Pc79GkghRzKxhrt2syKskBuCAmAsh9JT41eYQsUk7g1VcXaDL55b8mGkrNzvSeBganvKd"
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
