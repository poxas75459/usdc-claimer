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
    "5xPn2NAKcrEExgg5HVLk8cFiNUrVxZmeUfJDWs3isDKME2DzvbSBwEkR6vj422BSmyv3vryAoDYQRMo62ZARZQ2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kV6a1wsmusmGKiGAfYXjEbQ1NUyAyQD8g3zMyrLnm2KHZK4zpnEKKxmwd93FgWKHLAypzmjR1JPcSaAUUzw5NVJ",
  "key1": "2y3LquBAMXBNTofXxZtpNbRKLPV338AqU3U9FXjP8XA97vM4TKZHwhqEsyv2Vq829vKRMR4xmqZtBcxjEu6gHZMY",
  "key2": "2LqLdi8kgdwbsBHrKKsHmnmh9SbgUxBf4u4U24WUShUMvW471E2CHfyj5pE6stGk7FsiR11ZJ6a4VHvTdjRsHTYz",
  "key3": "4SxVCJwqBoce2N86r2Ai2AMaoSqzkFA3xYhhf6pctnA92kDG7x72QG9ryyBGFcGkNdsTMHAEutnQ1SVhGHoUBi5x",
  "key4": "22xxqH14bKSjv1r9hJDMPgTHAtdGUPazxHeoJJPBNMJAAyBviQcgT3QWYe3ipCkCUcwGbrP1zjS7C2EeTNEkYKu8",
  "key5": "5nqMC6G49ErXcQ84AbBB1gXcpLKQkuqQ22pN59mLsnB5hxJPssPUVdCqjATNhjAP1GBEp4zwFEjd5uNN1yCH51NT",
  "key6": "48RphsDnvtRvxjakn5grbSE2evKcwrMNcUAtap1JEMmkLvbqEPkBGE8Xb15G3JLscg2SnrRPXCxzyK7k3BRiqGbb",
  "key7": "27aWRbtKN5gahuEHDnLxAH4v5LpeUHQbdD5xpXSpzvWEd5uWJiQMzk9y8qwbWKNQVjUWFeHJdAd65c8hxtpKJoeD",
  "key8": "5FuNZzTjFyGtEzzp48TjNQUxYbyY3UufBEAhrrbvnGXmeXbQHWwJTeo4td5A2LFJMNHU5QsqRxchemn4GUNBTkE9",
  "key9": "2ayA8D1K1DLaNW1VCokX9RxvZt7ugqHTgB3ArEQeQXXBZR4cyu2zDx4AmbjgNZE7pmbNoBu9KKVMWcRxhZDj7gd",
  "key10": "4omWXnjQnfDZxAbhuRVrGci9GdaRaEHfepnzcpjECQScS9hK6BFrcwQqmhy3vx45QpRpnpKzgC2TyQJ8u5GRw7bS",
  "key11": "5WMHRB5uZgkZVDoojZxmWH63XCVZd3bFUgUUaHKKWV16kkjTcGH8A8gKe4aztQo4jUA6sra9oqBpQE5CbRxBQiUC",
  "key12": "owFbevNH4HfVLTfXBYYC8Bvqfhj8NPcfXRwm6LttPWpN77bJDP5EPk86FMgNakttAYrbQf2RF5b3gESwCkr9cKr",
  "key13": "5P6QjQC4joSeSsGLZYJXcuXVJ7UreThA655QbzkqraNRxHj3JTrysSpPYcM3HtdEpabQNDxk8gLvcnY2eshC63Dj",
  "key14": "JwEovSFhX4zMD6R1VgJobHRVPurHXNNMvyNve4YKByBKia7HkL9irdLvSSJvj5yHUkWELq6ordtiFDTZuwPiu23",
  "key15": "2VEoveWbPUPumpRkYXmYRjEcy1eG4SnLevK5jHq9u83A5MfXjZQnn9jETRYw4a2gS2SspKJb428PvAEtiagaXtb2",
  "key16": "4QfU5JeXpjKcRH8hSrSB3QDvKJYYpesdbJusipduhpJguBecBVj2zMRqQnvAauhVYjbNmraL2rfV2NGyM6JfdekW",
  "key17": "23LMNn9AJoFiXUh1o3YUJgrDohAj5jFbXs9FDvVJv5s5NEF66y6t3C6egA9Qu6GMuSgwx3rqyoCtics37nPbvZP4",
  "key18": "5XXfmYoWZrgCM2x8VVVznmgohvVfpR7AJ1xcYEzNLSDfp7k1iSpGpbis35dZwYumNRJNq9Z543tsviVu9xbsrfUN",
  "key19": "262wTeemhMkw9R9Cys8nJJFgCWDauRk6swQPcnANWvnoh9ih3DMkScE2SVgzbDVPfMgBgJAyVRsTNkGxg3V9Dppd",
  "key20": "3BdS7E7kZjo5keMscrCZinDVEN9XHXehPACA1s5zJ5uVBngRM6Btu4uDxzWyQchcoyKyTSC2ztjm25YF5t2GHCdv",
  "key21": "5p72rb55zc8no7gR5dpjFUBeKw3zosJrp98QVpmLfqEYeMxaabTKhXAGc5Yj9bxZQUU6SeWZdAkZFVNTwkToQ536",
  "key22": "Xr5r7FusDQQJvdxaycMoMcd7Lfu98Qc3CoJPaTT2rfqZ8y5GroXXPcuX5oms5tGKUcjFZXvdZ1QmkyDPq6mVxLS",
  "key23": "4V7FSFJMbt6YhbAsvg4i85wuHb7UsncHMVgjSRjk7YACzgCdnAFV4Btr5A6pbcyBMHcfhMqBfpCcJnytDz1WNz33",
  "key24": "4Z2znaKeixWVySkvJirp91xhssAC4etZi1kuwadexqF86uwZViCBpb63BwmhMK3NBaATKSxNJA9sdiJHg7drM59B",
  "key25": "f9Sfd9biBbBE4G2j9nmCyFuF3DExxYqWMNMXLfpXGdfW5M2XSS5XJ3nzF7HGM7S5WvN425dLsoHu1Z1rkN9HnoQ",
  "key26": "2itdUWgWMF7TFnbhDjPdqymyzoJ3w8NXPw84P61JXcnzXVnvdNLgo2nDwxcEhnDy7bZWij3ECbgxdaTqwBihgAoU",
  "key27": "4aZkN3mfxmeHfyTRHje9rUK36kwJWqaKFzJnhnFqXrXZ8gg7TzLVguaFDLPxST4BQ6EucR3JtT2oLnYhWN68cdQB",
  "key28": "5ZpphzgtC3L1RAhJh66smF8w4hgbgd3ZioEgYsg4xnSichwcwbfemU1jkha5umfXVg2rQGeb9DsH2ibAbZeCMQe8",
  "key29": "4d5kAjGGZbMq9KrGZdhU6FsoxYQnJ6AfsHsYzv8QJGLqgKoHw9u6vwJCCxaBPhhN59Ed6qp2k8HtQJt5c97x7SpK",
  "key30": "x9rZSY9zRnxcWP1ciQX6QTZZkA5eiVyAWs2Zdd8ekLQaQTsHJsf2szkx4d4Z4VVK5AfeFeKn8iXZ4UDmebGEvUV",
  "key31": "VH11ANEijrESRbh9GM7R2ybj7VFhtdTeGFfjvx2pYJMEQ4H5ZxgV42jZkv2WS3szF3DrMekEFMjEfyEmr1BBysd",
  "key32": "gnB1zVvH91dLNbw5K4tWkkn8dfESrtfbQBKWKf2KHN1d5z3Ke4ZZxfnJzypxDtnA2Tgm4puMbMpAKfyDWfN1jgf",
  "key33": "4Lj1TCM2yc5WMtX7yNNxnfoBakc3J6HcM1A3HR8R9RaQxuu2hqn36iLym2Rqg6mjDbCrDjNCgg7AywAwj5iBivXy",
  "key34": "5u43t3RqYPKk3yg8JwQb5rVQnzQMoDmDsyviWrJZmz8QaYRKNxkVFoPeHou5K21tsMfqxHPi34sdVMtvx9sbhjTt",
  "key35": "4dpgBUftTJRA4irdS4RW6HUbKhMMgeh9YBwFLvvfRQTQy4cA9LHr7Ap2Vzdjzi7ts2hMiSpSN8Hs33fDnNifdaU3",
  "key36": "5RkrgJV4Va5B6DhYNRCJqUMXruYjjE3Ei6jaQuTced9JkKkkFUm1xTvos1YE7SoYmzdEHXWDToGRKcmZigEoN1wB",
  "key37": "5to4tQK6fpoRmvvaQ6pVUEJVzyLkSjP4uGr9YW476cXRNqAaiubRaqqz3Gfxnn5YXKsy5GDwYmSRcTSLcYCuGAqf",
  "key38": "4kANZruotzmWXnD78xMyw61UL2QcSdx1Tyt7YdM2tcPMGit2JJajf4daEL3Pduzzy57v4mYPwiySmHZXXoB8hTPk",
  "key39": "sDMCPBJxxNZp4pbCCmcb2dgA4gRELNwMAUAc1bGrhSV15gSemMBmfBrp5FKj5mFcvHVzjgJVmFFNcaU54hNrC2W"
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
