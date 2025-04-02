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
    "zVknxUFfRMPSAeCAKeiD5goYfsrGxDK4XJf9FRYX4Gmw6LBgXELatJ9iJevHmrWYugvUBcnymRWAUVe7PBvekLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkdqh7sFg9XQxfxFXapXEDLTFdPoN25orDvz6popboJhBfbVuC2uHC5oMjxKrkrbH8zJGhcpA8pBstkQzucXpzp",
  "key1": "3U8xrjPyyBer6WWPvVut6Xo67pdraaLrk6rRdv1xRdvpZuJXorwerXc372cbWUZGUhxDnnNCsxZ54FcceqSD54Ko",
  "key2": "52BQwJCRi4dGGZAw2nziHUucxEKyPmnQ32CKQuDgvCtzaGo2jHu6jURdt39NFfyv3qCayGL3siujK5sfdfZQKQjF",
  "key3": "4bejUXJHHj57BPhve8MnDJbL8dwEn8KZV3S7G817KYkuQfWcM8mV46BuxV4rwRR419QK1HF4okfa4n7duvS7SSfY",
  "key4": "sqWEEfYN7VX9BBbmZtVELSFHmxJ9Q26SmryeYc7NfaRNZcakV7GTv4feDyoDDbk9miqsW6RdYCLqpD8NAgQxpAF",
  "key5": "23mfyW8bJpBhd9txKueZzYRbqET1iV5uAqjukp4T11zM2MG6x1RY81CCGEUPAVWLcGbCJLPa36GYaoPZHmV7W7Ao",
  "key6": "3EL73Z23JkxArMgTio9hvgPugFw1FPNq469kZWSfmazCtSY2UKD7XE1sGFWYkXCdm1ZgCqMGf3VxqhwHvTCmvsfF",
  "key7": "3gqawRdjUkc7QNzLd2ofuUQjcYLv3PCJ6tzFnjjWYD6C5ZyFUtD4UAVNrm2igGUcfTRHr5g8p3g8k2xHTzVKHJMt",
  "key8": "ZHLESxjfeCFbkok17XG5VsbGkwvEfNwC6tvDBNscQBQ3vsRn1uNRMmvRXFbG2YavpTJ3a8q598Y2oRCYFpmBwfL",
  "key9": "54dvx7fobnshzrtH96EtqRbdoRN4PvybLM5kPn56V7HAisB46Vs2WuWVHARzZFmhCri6SNfgjm47h4XVHPSEmUBC",
  "key10": "2Fer9RLZqGGGhNVPQaJa3yMi2kGqLeerYX4THMS8gbBEynq3qebnXCj8NKui843bs15eu8ApwSVTny3EQofuD2dx",
  "key11": "3PE5EA6EXZvm4Sab9YkqeoyP9QGxgdSsLChkLPpYAzEWYdNrox6PLgupGtgL5MKrsYYHZNLNQFyW49FqxS7aSgwQ",
  "key12": "2W1MBT89WWrVKD6bznpUUwjgZyNQ6pk2AwYNZUj4P4xcAxZn1WsdHczjsZhBfmQpfxeNGHbqjYu49EuvxrrE4rjA",
  "key13": "39xv6BLC53ice1ncik7uoaGoqwBXxz6tunKdx1txXVVHaFVYbjUY3JxYpW6LXuEBbrZsEKRtffyP46d89whdDUYo",
  "key14": "5vrrAGNvbxDR7F1RFyTKRR97yZb51xxLgkPrkpkyeju1kjzxzXahgz1C2kgFbssvd4hkw9UyBXV15LCBG7tbYprq",
  "key15": "4Ma3jZhV2FfanLrJetzBYH24Se5VZHiWbBVsDaHLdtS8JgDRwEgVKafbK1kw3wapWMNRiHqLRyZAA41EF4nNz67M",
  "key16": "2LfKrat79nXkdMz3GC4oAVwjL7xDXGrpaSZ9mEV31DUcSpxvCvggf3424BgUbvT3KfqAb2wtbHk1sqiZnNCY5Pmy",
  "key17": "2eJtLd2xoXiHnyqNn2gaziMKm5hjZ72gEKaDUafHhrNvM5vMKWRpYjs964iwg4ny5BVvmwFfvKFwNReajUkv7apS",
  "key18": "4wBWivs5n1X112YTVZHaavLnhPfxFZw6DoYoRASroWEcLod1dxfFy2KcseGGeLxVi1Jhqa2FSdZQEGfV62K2A8So",
  "key19": "3n89rAADqeXJCzC7Ly5ogmGskxZNpXcMDvaBTagFkA5Ts9zEf5w3Y3drp7rKfoSDSgHY8btapm3eMLPxiajV16KY",
  "key20": "5km4dJhUNcEnyq6XCgjqJ73WSJhKPoKKvzWVoEwK6QWzsuE3bReurcs4mU11R8aawgFSKEr1NuWJdhdDdjznbprD",
  "key21": "52mzWD6CPxjsiCFQ4afspfcycTfwJmwUvAT4eo6ETdM7LFjXbZzrh7nVm8LEF6KUdRx1j7yGXdRVpvXG3QmuJCrD",
  "key22": "2i2hVaovxztJv4rLqNfPaYEajjpcTUve1DACkJ5C9Y7XD9cGcT6yuvPqY4X1Fr6DmvDBES4N5iV9KkeVD7YXqmto",
  "key23": "42jCBWqrFrr8ZoHpfpWwFNox3HKWAhd97gtMrPgneimaxCeeB9DLVKR9veNBuhQLQ8LeDBUQFTVBrUgv3nrDyqTB",
  "key24": "3bySsTsYt1CNhmFTH1iboASaGqZvmQrbqoucXV8qsVSvtsJpiJ7tH2duVN5yTHNDCpdbeAhdsaozEK82E8NkcMgr",
  "key25": "3tv5jDP4fveyMV5jQvQgoVkSEja3F1fq63ubjeWmhRMdb7PZ3hzCbg1Uk1CBdFjHdpFrQ4yVdeohR9LgoayCrhDs",
  "key26": "3qDqGB3mEQ5y8Snk6V4YdRNsokDDjJ4mvkRhkinrPjtrtKMwPUUtL1jM5SzzWxgpk1qJemTsUejUnreePP3Z5y7S",
  "key27": "4HqsKwzA2fKkz9nXZ7udrcKDFsNPzaJVCYj5bwsUmzuuTm6nTstuR7S6UJCirr8RiuLsg4Zapmgdwmpc79N5xp1C",
  "key28": "uaAWGT4iZZHZvwwErwsxc935fWwHSdqDeadj3hXTS6WwDn2aaoaZHPNMoXjDn4WThoyTLHwVMyqsbk97eNoDAVt",
  "key29": "4BKNkBDCwtoM2mSJxffPixfS7uvsMYDwvrd35BbUExMuNguJKEoc49GLNjsE49ZzdPJ432y2Hk84zTLoFxpiXrPa",
  "key30": "3A1TDXHaRy4qvHheGbp5NopDpSWom7nztVxgipE4AnuNDFZ8T2F8Bj5cjfoyCSF1Fe7AdcBZaq3bt2rJFqLnGGwL",
  "key31": "4ghW63thojmtpwqnKohzfDYYy5QtAqDUx5pCEnA7WgetXE1GrTNeyte1K3GYwCdch7fGHYg6cPPGXdnpxuLz24k9",
  "key32": "3pZkMXfdgktsWEz3jLjrdYK2qYS33jiShtxuE9eaHjGzBUrnH7cCseDRLggbXeajSMYS5TWPik3hQNnvcvgiGpks"
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
