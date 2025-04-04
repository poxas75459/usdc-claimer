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
    "ePowKWfQxKJ1AhLGfAsbLo97UzUiuYiJwrp2DofZjUKHuMGJiatf6THvAA17qd8wfnDbrqbqFgmR5LPFnkKFDsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbrZkSFE874KqA5RjMGszQqHMsYsB1hpuWLqSFkd7ycTGYiZYCpFPkynkE82ffB8Nfchu9t3pecagWpwzd4g4e1",
  "key1": "2z8tN1q2RgBy7g29HtPYw8cG3HwsmGB9HhseL1NWhKbyUUNCgs2JoJ79oqXRqvWG7eCwxWxwhtErAWEC666dYMQC",
  "key2": "L2BMpWHRTEj5yLP8N61Fuu3tFEmqX7h2wuYJf4ueZctoQMxxytAgmPGJD4FoBuQ2SPuaVEpcDWKrHmTALKNxGu1",
  "key3": "3LqR8QcBnaNQztKDsVRihnKqykwnBbmkfHc6pqTR833b2Dpj937S7hJdJPzY81rNvXffps4qS3ggG5LjejdsLt8Q",
  "key4": "3x6QjALQUuoKv36fFpBiaPCtKA164nNA2hBGyqabYUawt42wzW9LkX7NrJrEDKLF5AXpPyqQZ6MiT3C7Jg1uT1UD",
  "key5": "2NfzskrZ686ZPZnAWEY1zNdZkqbLLmBXm6u9XX7GNV9Zoswop1C5xMb2zWYFoyRge4zZMhVuKMZXnatk47GzPAdW",
  "key6": "2S3MpcoNQ8YaTrgf1menT7KYVSCyGBJjVLpvGpz5ZC3zeyF3LkLYc8ysYVin7HV3YBZWdhpsQ5ouYD3AJsuPBcfR",
  "key7": "4tK3yaEw3AcMBczDoBi2ZucThi3o9d5Sb4MeK4VFtkGHDUcoK4FYUMKJEf2hUTzBPEeCLXFboB84mxseJMg54rye",
  "key8": "3zZsMWkttN8dc38ihhJPAuk5GY9V3YZ8au5qxFNdyiS7LQqxtsQDUbc7piWpK829CHsBiYcU9LvngfbqKWQHdhge",
  "key9": "wrxXU5A7cf21gYxsw8fvW8jPGxA4gGZzBh4VbNU4KiKx1oLHXGBB7WvuhppodpJTEohkDgcD1XpDMBxNrZJ84oc",
  "key10": "6mf3BqYS2Sdxx6Lba4xu7QYwvd9cjLGRNFFysDWZzdhuynXDJzEqt4gnLtvE9uRXwktifPd3z6TUZieSaqN2vga",
  "key11": "4RkEqTkmjcnMQ3paBRDSiQBBdYKxzsfCdaSUvdvUrbKmWCVxk3akX8jyqDtTBVgFTJCX7zJHaaPb5upBypV9cFdG",
  "key12": "4HvXbK91mK4CKABGFYU3rHbrbNhfsmUM3rm3gQj7gbNjpb5QBAQPB7w3d2HdnnLE6dZgnMiuNSMZ9pasJ2frsZYb",
  "key13": "3DDVtvehWaVApYGhk8WMt3vRPmz9LMRPCdUdP9Yqy5gWdNv9NjdaMLNqoWYGHd3ErbLiqi1kxP7aQUi2W7QYoQi3",
  "key14": "2ggDCNVJZakoDTWFbBNBpUwvixhGRNDq5LkJ3PfnK4XNAMVQbHqGR6FMgpuMrg23b7y4y4P27oDzriU8gfivRAkq",
  "key15": "2CZYrSeQuCEYYrRAoe2vzsW6csWyrW6wBdpxjY48c68cCLwD276Abb6xxBMgFhej3Nb6oFmWP5PRMALFdygY9T1n",
  "key16": "5fgcbjFPEbBg4uV44EuYNZqU2ogatLcfqRVxzxLk2aTwbJHWkXcvp96KyMjZxaEyfZZMxQi7QTGV9pcoYFMAdkfT",
  "key17": "4nwcrxXGBaJ6BHfQuEx8MK7Qz6twz65MK1ByjUvVCeDFo2M2QT771x7MuRk41cbMsJoJFymWfx2Cznc956mxsVWH",
  "key18": "5bqtUfnNnZbPDGVmwkLEtYiv5YzT8JSBc2M4LswqnLLhwcdMKE381k6u2MYQZt566Hux8BVHxZ6UZEUNYJXc8G6V",
  "key19": "3gRDynvcXKdaUmFSggX1BHGkFGotCmPmkNaVpMUmQc1ndKCtKzQyNfvzuKS82EzxXqnUFt8Ek9cidsmNmaCKWsWa",
  "key20": "4ndLkfYr6E2YBaDVKsB55HxXEE8TX7Hx8tGnTLBTXSTU7A1sV8BQ4yVLcT8aiiLpQ5eFbw822xjZpqhChdFK8dK4",
  "key21": "jUWZxcbCdG8yk7ELnDRGfUwVLQtPCSeU7kXvnYL1ZGWjFQrMBSX9y7Wy5crkP2vCwHamW2hUaW3Y43jhLaN88aD",
  "key22": "5koiYkcvgj7nbqBJeJJCprgqkn4c42GPHYKhCjbQL6yEjsekui3uAkZkB3VeP4AeYW7VrqsUmkRALQufwd3uoiCE",
  "key23": "2T7WZfNai4oEv9uy7CQ9xjHcBbA1Uvd9L5rP6vutpNzGoKUtnF4VQSMHtfuweiozA7Fi6ETubvtKZG1TRamj5ijq",
  "key24": "24zf58Pc9HMWVMxoyvdM73BkU9K7H2iJBmiy1QThvkp2rUm7JAqiABzqepyJrDaVXZFkcDR28CWPbyeJEc9JnKqX"
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
