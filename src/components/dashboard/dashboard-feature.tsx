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
    "655DHAZ66FaPLcNBafPjYLUB9geSgWQn5y3gP55G3gaFzoaa6ifnJSvjLcMZ3Xp3eLnWt59BPtPiRCcYwxbm1642"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EzobM5xrCQvcye4nmnFeHiexbjJLAeRJGvLPDCwR91FB9x2vUQaNnoF4mWiaWEshNTxji4EwqKAa2qguE7SQJSj",
  "key1": "43k9UNU2k8VNRiCaemoramByg8RfS9Hane2cr4Z7Fw23XTLz191RcUHAJKiz5SqLmVMp1dx8jPcmE7GXStWuRcS7",
  "key2": "X5WeaYjD9P2AkSwdsb5aLqyWyV9rCEDNJcgjNqZngJEwGgX7zXyb2YBwvyowohXe9GQLjMofP7HWrEFYn1dkzLg",
  "key3": "HJSg2KcNx9fNQLWYjX7wJxYCRznQBwdiwvpKpJEfPH4HPvcnXF6HFWkaMKwgbwzpLeyiSWPV4Y2q6T1nRYfT2Rm",
  "key4": "36AYwud5LN1qVAjKLEmq4oa7LtzTkPrLfWBSrqhWQy49oV4FHqb5fHWPyAwKt6XfphQAtUQQoxri7LYXtpDUxiYV",
  "key5": "4dSRqb5U4rdK7Cay2iQxq7VgwVrWqoZQ5iG5XbBoXmSykZPJe84wJHvDhePsqoU46JHrUbR1WtCV82haZZhoSR1u",
  "key6": "vAuTAoZqJtDac1hC23Khd4BJTPerC2rc3AG268ipc4mZxUFVUDWkTD1hJhXUYLJeRnft8J7g7wXmvhg3cfhuzha",
  "key7": "2B6hXphyuk7Vs8Sw1fjsV3GtBPxbwkmuW73KZ3r2g2JLf77Gcg9NNq5KEm1Vad2cgTsCkHARYtzgUJ5HoZq8A7VE",
  "key8": "4HmJ2agwXpFhyiU1yPLtJRapJRoGrbMPw3eaNbYtnPFALSN9sAykPG1bBtgcX9zibVdfMZmrmivuKmsdtaFa3k5r",
  "key9": "45nPeUcorbiw8ZGmSwAKV7gPFRuAjdV1v3X451bBdatbNe3dkYo4HMSGUa6xQ1rgH8UxdCr8DEwZWbqZdttom3cY",
  "key10": "4DbZmK7KBoUZFqHnEjn6tBuSeg68pzFoYEhAvsZHP3Sd6auvBF1aT4d2iX56UQcxCeVpxMuebQgKZXkeG2dbj9BM",
  "key11": "5dVAMgC5h2VAew5MNdy7tCbiFYcVptWbeqfjyoMEyRo3hUD46bQXZSV36kCoE119QcEAHuN29xp27zxTRkX8ajeh",
  "key12": "26sv3s7jb9MMNjQJUwTr1XD4NZXKVcoCDXoYL82jSJSxhp3St3NHzfxHAUfgKrDyWhMub6cHiJxLRXBWatBVeB32",
  "key13": "4ry56f7VDkWSDf77nxc7MHfS7eYJYGoeSpN9QAr9eCsYoeVifUahZ7Dj4uKsC8dBXVFFAFg8VhZenu3jaMyvufEe",
  "key14": "2Yj2xuP39xhTuHWHjoDSaoW4iPF165y7XhntugjsMeqJzxrS5wZ1AxrVMTiwqhMtxNh9xpzPSz6CYiYvBbwyHyQz",
  "key15": "2jtVefkj2TVcer5kNtmJDTPZ39U541CUE7HpChDWeTN3TscCJe9YjG8SpCHsrL31BPrcRwyDUH8EgfZAoYfVY13e",
  "key16": "bNchPpvkWaHjaN3UiLwgihYP2fsCpbDiUx9ti2yzHBRmMqaQB2dPDiZQd6jLJtSZaQB3h3Pp8UujGXvHEULry6Y",
  "key17": "5Uin9XgyUaQrF4GyHQNef8GySKZavYZpBYCaCHVUi3Nho6bLwAsMRTNGaRBkgfo8ry78u3cGwtfdkryZ8fptvpyT",
  "key18": "5KNWdbadDaTXd4vWg95B71xmvDvmGfBeSDAHCyVZpXsdAuXajoyS6gL6Lo6jdGQMSxyvQwsQzCuq3waZbjkfHHNx",
  "key19": "4FZsDM1zU234guUpiGvrgUriSmZCwx8JkGNXHwAtngfQRnnQaVnPkrYaRDKbSf154y6KjNt4gtQzvP3KVhEk9JBz",
  "key20": "4wZkBQTointUK1gjfa6mz5hcXKUoguGfp2YrWqKdGbH2caNKKDAFfWP66JdQNseZkaH2zh6qahmyKb5ST9ProwoT",
  "key21": "vPB3596nJsnC1c2p5HT3VEQZsF8G3zQ2uK8YHkNVSMobtGy9QP7G9qw8T7Dr1BVtc3oZBgLMNQGW1N75rtykxGX",
  "key22": "5fKdbpUNMQSRXdTJJrNiF1KsvqDcaJt2aQdMsn3K99Exz8nf9NE15KNL1wYq6BpZahQWSuTHMEgQu6HcjHbZexiG",
  "key23": "2Pa9zurXBuW9c77AGs1mEbKub8LgRpEMtNY5C3txjWcAdPmMbLwWQRctYKJzv62M1sDp57NBQSLhKme1tHxpx1vR",
  "key24": "2f1JAu8kMGKRMadwnoiis5RddfyCvci92MsnEgQ5nrevvdJC82hg24H8mtQKNu1wtceaBdvSWMA1YLpXnSfq1Qbm",
  "key25": "5TQvDMwy4Fju5pzNt8DaC13jiNRLgPfTVG6fvAz1METaRY8SPjEBrWQ99BwUfgQhFnP6T4rbdswumJbnjRsVHcTa",
  "key26": "35vms9HB3haaP8wKeqzXxhNQFvwQ9HLhhtsA4ebNPHB2jyqCq3ymdNWRgATTQDaQny1wNo5tGwsrAUTfaqCwr4mj",
  "key27": "2GV8VfWWLJQskp2aiF2fu8AjNt2PY6L6bWfUXXEUncpDgRsKKP1vUjE2bfuScQ6f7vW8PYw2vHLVQCSDq8uoqswG",
  "key28": "3pRjZFFAdL5fY9kgjtWBPmLMtZTmn1xVWkbbi37yhpWe2jhrdDXjXSWkXko7VPicN1paz67ityLYexDpNRQargYy"
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
