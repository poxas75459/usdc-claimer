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
    "39tcz6cwHGHsQ1BWo8UpDDUk3caWmmBhxpGvQgmzc9emsEP9azij6xh1nhTmyVtvZeTJUbqFpET2qdbTPGc7CMNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPgL6VNhctGYavRmvTRJ5PgB21x2D14JR9rvUCE1octEEj9HzyVg7e2kGoVh1oYCdv3SApANNfQZkQxEpGCRhrx",
  "key1": "3kd4pWCdy2GeSnuK6Vrfj96LzbDiK4cTLbzjdruo1GcjyX4RTC4DgPThrNetCWjtzmcgizVP3E4CgYmxkXsB2piq",
  "key2": "2vJeDCTQSV7ZpXtrktRPy3hPgHNpzxrkJWxzdB1WnWG6Vf8Yq8bRwWnH4AKaQ41wpGLDsKA3HLpyptZzXDxveAVY",
  "key3": "3rWyyzU5wUrAgTKJHYntkXz1Fq2gEgAZ9vrC4g9dc4z5pdfkY2WAbeW3R7HUNpRttU2HRTM8Y5aFHECVM2DRtByq",
  "key4": "65ZBdivLSptK8kxXwhkpxDeApjwStLQqfRAxgiigzqesT84AV7AGjNvFgrbtS2n74odhknRkqH5L9FW7vA2bTm2Y",
  "key5": "4VYwqPsmw8y5GcF9zffeWhui9jbknXva557ZGU6wxahf2M9U3fZKQKBWoogLebb1YsCQwDz3XG3yLQghgo7d4Zja",
  "key6": "4P2asjkAXeaFzpqdfGVbhqitgD1cjYfgvsbBejweHa7Nn8tewgz9wH8hTCKX1fzNG3LXi3H3XjMKLNPXjfxRXSpA",
  "key7": "5S2Ww5Kx7Rj8RiBjorkoiiw7r5g2RCr3yUf5mwp83yXT95gzpdfzz6bHAG9UjB5B1siJr8EToErLDGY57cXGZePQ",
  "key8": "3D45GX4Zfg3HgxsPyVKvNvNmWRMocikgbyUFqCwNAkzjrWG1FJ56U2vHx7mRjfVvmf48c1pC1yS1FgVR1vaqEZ3q",
  "key9": "2vriKeSNbvNiPMgpLcnGuB9KRYi5WPYS1ownqFbsM6EyaoxRG49QebBpz6JnFpiupb8A29ZkZ8ShBfiu84aBo2To",
  "key10": "3CxvvbDTU6ZREof9KyJS1StAD4SCMQzu1R98ej6vumzFnRiD5MBcTyvAAZGSuy7dsynFbDbb6aXPEiMG4CkiT5tt",
  "key11": "2qseK6q11NKqXX9ohQyeR7kUywJ2Yp1eJhNQhYVZVyKaP5gTRFek6PCx7XAVah3hLgJC3RxqSuZeYVX9RR8F5wkj",
  "key12": "4H5fRvBSkKPuLZFxetQmQoEhNgr9kMYGE678pbViP1pALhNfadqkHNf3Yif8j7cGBDPtPn1EdSo96q3BKkiSWSPJ",
  "key13": "Xow39ZfmB9giftixRq7sRQTJMUmBAndtXGx3ivpFafJTbFhzTQUuQnDqND1rw9TMtPY7SxRB56vkCpScgCUs9Kk",
  "key14": "5FX21PFY3ADGRiChpRk2JMJ17Wi1Sz5Kf5LJvDzzWh9QETHf2Ap8CanCgtD43Bmghc8VYtmyHtEBBXUKT1FtGbUT",
  "key15": "4zn2W7rc24W5eERQ7KFpD862xKHA1iUkFg8VKcrnH6yFmR2BnUWHhKrNLVkfX25wrWCz6pjxVQrvi6BChoJTWbbW",
  "key16": "5y4BDDyvsp2azio2kGxjQXdygMM5WvLpz5nVdWWooF5ZD7PMhgtMMETr9gx3qd5m7MshFVAsdqkLuMNu9nd9y4qV",
  "key17": "5ypHKZr3HGmBdZxq6xJFCgLRVBG79mX3KJEvYnFRD89LAKi5se7GVAKHs1oKAT97ooqDq1LVWCzhksZXyHr6m4TS",
  "key18": "YChT7zVkQkTFqgP7mtA3ezAeL7S5oJ7jvSkEq1VtbpLQLK5uZgKKbTP4HUU9huKkJM8HE24jtTH6c3ii2HnA3j3",
  "key19": "2HLHj4waks7rRKwc7FERnqFG7ZrKEt8Nfdkmcrspz29aygHae1KbS5qGuDqC6VKVbys1c9GBQG2sUMFPK4UXDqkL",
  "key20": "2Dy7NNDgg4Nz2eRxGwkXRYHXjXHfc3j7czaS6YQchgBwYqWHW51trAXZJLJ8sZFxbVM8MxRcwWn85eb2Hx598od6",
  "key21": "5PfyLXzRcAWuK869wbZi6TBWgqBx7YTsK7eH85DANASr2atGqc19PpderKp2EsHMdwCKdQ9qYrDWJnEw2hkrnX69",
  "key22": "KuY8F2GsW3sep7QqZKZsgrR4Hz5i4xYeuTgF1VonwD4E76tqhXAzqJUPVfKwHSVtD8YzN3QwRZHpyfUgow6VqP5",
  "key23": "2VJvBkWRShbJENqeciRUmSpttX9sYDmHQBG7ZoFi8WT8HmpGYmFMzYgXzQ9mMERAipnCBw59fr9DuGC5wKCDARjv",
  "key24": "29G5uGtC9Mrr4tX92FNHPGdQPGpRNvKHRf2G1LTRt4Zp3uDNWVSueVzktHV6wMSAPP93BLELFYgU1zJbBePFRJ8F",
  "key25": "5cMy19926QfH38XEhYJhn4yKJ7XdkVdW5YiKHL4nd4J8jKh29dzJjdKRVceksanBCvvGwcDUrG79T4YYCNkTkSSc",
  "key26": "5EXB8WRFKAVqehz1y3g1xJfDpCGWZGfszTLwC6eUAXqKzqRyHtDfmomUwYNQi8NxVLGAUNj6sYNwWB4uNqUHHHRB",
  "key27": "43cbWUoqK3FfQwi4Ccj7V5sbeJXNvbc8tVoquv5yYQyngrM8N2uvuVmgVtR8Hzv4zVdZ9P8Gq1AscDHpjp2RxVGD"
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
