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
    "27E4Ef923qbR2A1Z3WQNzVVxJbNVdycoqVtQGo1ie8YUePLv8CR8NnCAVsvkEb2rtxSSCkQA3FE9UTQxQ6dy3WXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gqPUsmhCQPMMGaNn9w7rpAwBprQC8Vz551PYgRw77AtZg3rThjMAyNXPtWe1DAXAuSnzSV9NPHZ5GY8KiCwMwUP",
  "key1": "6fxY7vkxYVukFtxtEeNJSF1gXaKUK4GEq2P9PiK4mvcfJqdN8N8sQTKYtFGbEpjRdGyqSGxiahbL3xCQN1W1uLT",
  "key2": "Dw8JVusS5fz7E5TMkKiHdiUfRk2xokf5SWgWcekWZ3XUjqhDXAzj6QMmB4RSPqdB3sQuX9J9twraAydqERCrLri",
  "key3": "pibgHPrGf7sP8F7m2phQfDdpQDx91bsBrUyTeotzui3GmX4kEK4DHNU96DepUNM2mag22p7ULy8vh8Ue1FvfCMK",
  "key4": "3kHLM9wfUtySnHU6z2mAZGKH9CEcGiuJUmUBKRSWzFt4SJcQcsCYP9EBnXRYifCYkvawi4kAG27HzDTesV7Ua2mp",
  "key5": "4TFtjdgdJiwRKpVtDxmH6NMB1eiyiTTpgs4LyuSATh3GUH7ShuZgAyK5EjefABKAZAD3zRhD9XhXH4heM3Ub2WR6",
  "key6": "CaxTvxoLhwmSsjqa8uVmqg76qh6wPyxt5ys4L2HHXQG2KmwPMfA5GPkvU3dkTnS2rA9AD3EGhzNdV2UjGU5rWhX",
  "key7": "s5Rk6zJRg1hU571dCAoRnRvdufupm2ZbbFBR2893mRa2kwa4Uqc9btxcPVEHd7aX9pQP59Bpa4WZxxgJvm7pvcC",
  "key8": "3y7mxPeTDmGavLQ8HZekFQ9Gw8LNE4FPK6bXMYVLK7pJsSJbtUynCgf3hXdMmMRLZq7bwZp1uxPVJ5eVRRqVyMP6",
  "key9": "2M2NmeahUBNJYgFpCyfEXQmMjkA7EGtGSZmTwEinU3xRyj7t6CYm1V3VpwrUTZo8BveHozuKzDx66DVvsqv8YFHz",
  "key10": "4CMmcS8A6QN7tVANR84raL3SvX2oLkgqeqB833BTQa7PexUPNwrsv9rWSD2svsj6rVBdR5WHH1W3re3VPmQDK7gj",
  "key11": "BeUkd3UaQ1pD1RScgZqd7RQWQEM6hxV3Fs3bW4dZxo2C3MsaJZs6QQaZXiRV51vbNZUYyhgJ9ApeBZG3JXUeGWf",
  "key12": "2mFcJcPwTQPbsShfSvxDhw79dpSFkFLeUHMzaUNVpx83YwcwkQ6NbLnyjZkcwY9ijPDyJ3cN7X4GKxZrgkapT9bY",
  "key13": "53WhfSuqrW9RmzpjPKyBLjGqVi1JYNQTzLfqTLqq6iLff9zCF7vRsGxfGyPYbYzeSKx4PPuWvtFyKthkDwDvGyD9",
  "key14": "3bWbSprCZ8VMqkkQErVPBH1JwtBscpJ7L1EQgmDA4WKg65opcE6msuabm7u55KJAsaG3cRLR4J6rvFrkBPQqmC1",
  "key15": "29YzQtS9RbHXQmVB6wya1pVXtKFRnNFsZhUKRCddCwcaXv6AnQEsCVergVfhQhYXgmg7quce1tbX3DFardm2SgyK",
  "key16": "2vADXByZJZFxSuhCAzxnYDCmP9uZ2qTRjZSmPaqJozjmeq2uzTxNSEaHRzQTeVsmijCQV7MGH2zAVzN5smFkQuvp",
  "key17": "3mC7UhzGAgUY3wtsyHVXHrSzuLEd19hJmvtgJXg4x3u6VFHQXssueocu3gbGwwiZqQ3wyZnJtTLh9nY3DyhG2aam",
  "key18": "64YJFRJiDT6AWvdSaiEpEEjF9ihFPsT1EnDUZHrdd3NUha51A3q5i2oTtbKxV5qi4ar8JKNYrWe7Yd52rE8Mvq2",
  "key19": "5zosKCzSrTTqUVVhs45H4qTtSRZ4va6ocQrNgoauW9Xfqkj7ms8iR34z4TPhi4FHd1vnnPJaFpYDALeKjZucCtFz",
  "key20": "2NFFsj3qDRMP9EAGNKCp4p7X1Z6cLkhgy9mXqVX44up175gRaKNy3BzKmEei6Qp4SswRcqtVnaVKB1Mh4cXpBjfN",
  "key21": "3ntgzWgVFHTaDb6x2G5hS3QG46MzLdnnVvpXcPNKG2VyAeBJd1EFUQvFxrXnsf7VJukDpxdA6aRTMyAAircUh1JD",
  "key22": "5sb1x3Wzf8GYTf5NVnktMWwGr4SneL8rQTKv6BSsPXao5pr7hs5mvhH9m13qbxV5iJRyk1zVPJqSSXBrwPfVyFnS",
  "key23": "kn9mPcjB4ZJxkx81jYvZFWXx3xjYRYdm8sgY3iVc5Wc7DWA14CuPvTP7LHPq27eqwmy7KEHUgbYbhr2tzVjuu7a",
  "key24": "5fyZ5fa93pQpP3hjkLPiLwNShdEv4e1zu7SwieTroXx6W8dXYV2jwEkrGj76nyzbXc1zqKGQDkZFK3rvJ3pvnj9K",
  "key25": "36zxNbESix8bcZ8daeQFgypfCa5NNyNGHq1zEa8mRcuA8cUTTjVkPpdBJioLDvTdjJUSAitWCq6nr76zWiLC7YEV",
  "key26": "5uiGrqos8u2x4awBZUoPHBM3BS5SX7WMoDeKihYwZuEYeHgg2t6APSWLM38CVSdhMUW1bAiiYFotmW6jxJ4dhaqv",
  "key27": "4BMcqXdax569gpnj4La5pDXGnZ2rikXHJqEzZz2zQd2yr9DSaNqigN3iZofRcXobxvj6G3EsJpG6frgs9gdUi4B",
  "key28": "8rFgjL6MfvZ9fvtgYTHZ6ek6mX86SNJrFCGrpAm61NrRnMGkwJHpaZmZtHHWjiEtats8HttfUEUvePAnSLLeFaG",
  "key29": "2fmJLbunXM5S8nCgG31pJbR7aX74srYirtg4mRf8DA7kSoceMwsdr5k2HviesdVEZbnM1r4tgekgkbkNyfFZhHqk",
  "key30": "yg9QBpGpuKrygrc7oZqY8Yc3f1EN54cjqynToC4iAQ6WSQw9XLKstrWypmuTnEtpAWGYbMCx3Qa2wxTg51EchLP",
  "key31": "mKwB9ZGVsF5c6wk5mLLMLDDQB9FVAPtE2cn41tWPRSHNgasvxV4UtN4WkNaxu66d919SEc7bt7fpqubKD17gT94",
  "key32": "XcQo8RsKPZ41nNM9cqpD627FsJAMKaofAzcWHH6GqcBAkqtTodwj1ECX2HGiNbLk6MK1C2GQ4cuAsHioXXait6w",
  "key33": "4cTw7e66pZdFr6gkGGU8aot4TNkkbKPNyVTCsP2tJV8tim9UoDuWL3k1jg864m8DK2Gcw6FHQchvfC1y35NASUeJ"
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
