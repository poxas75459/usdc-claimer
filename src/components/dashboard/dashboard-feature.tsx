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
    "26JecsgJoEpn2eXT2TNdZMXJjmjA4aGNiGEh9r1Hze38zmYN3CGQk1ikPTgrY87FVyf7ELx4bwWiMSBKYJ5kyEgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XtJbkVcvwnxr7C3ytX3uQyzWsrsrzyyRSXBPobHDPcH7D9PFYerBAXkErr6MZQmPL4bVFCwnmaHyANTKyFhST9T",
  "key1": "2ku7k6GdyJcZP5gHQ7YpwCerGs937z75LQu1Y5EKxXwBTsu7xNvTQZqAuoD8dBmnMRreLqmJqFQD4GkvghNSJFth",
  "key2": "3BYsNWs2bmUjL6fpVxoCbNZxfKffYRrcJiWdbnj8M7oYvuwivRH95Rt42xsur1okLPJxfHXvVsidQZ2ZDX9BzBhE",
  "key3": "2W39n2Kh37TR1p9e7a5y7u9vfPmTMQYJ2sJByHoHDXMgCVRydDAG7t4f1JWD1oaie9J2Jun3ohgZbhQGWmKRACvr",
  "key4": "5dZbNzjYWnSvGX6C8BxktdbY2A31knHHK6aakEroBFEAjeyWUJx3QZsVqrGpQiNmYbEYqkPyyC8zdhwuvf5HXYCE",
  "key5": "2xwt1sAREvboZ6rQwdkvic3jvkN6Tcyi382iwmqXudaofEcPUWZ4kCf2C9ePTh6zDBw22jtV15R1EZ5szW9Ts1VA",
  "key6": "5FVpEGbRkyRar1JYBXF7KvPAT1NXmD1byGDq2FgPYrtzhmhAoAGRcK4ZBfBssNC46BcFDmh7MkyNPiRh6kmkKN4X",
  "key7": "4zkhiZ76h2g23KCgzvjHbma7qMeUcEUvkHiyJRWdVenmhwSogQt9Qp826VJSVgeJSGwbM8DhjqsEfAghCKrrQPRw",
  "key8": "2rJbJZy8K8XDTTLzZRc8KMHRZP8q3zpoPnLxniFHcDczUTUbsyTHnd8UQ4SjhRcdWioQKinbBxSk2idFuagkPgn6",
  "key9": "5LNfVakf3r76yc7MEYPmYubZ2tLWmAsUPaUfsYCzxdxz3hva1UCqdHat8p9xEzvrGWDDZ5ydT9nCkFFsV6PtQ8DP",
  "key10": "4n7fepCbDtykph9xtoyuaW6xyhN7um6MXyZDSeeCRUDWNT7exEKpJ3qXgwkm7Mgjij3pkJuo5GGpyaXodww45JLH",
  "key11": "3B7i8dkffSTsBxc3kmVDM9DQNBUxhCYjZoBJQhZPPv55YdDqNPJujNvXtzLbvbVjfS4mSS9vVbpYYxLktpbfNLgA",
  "key12": "4XQAEDdCqNH6AaMeeBQeW7ouSktyALmfXhc4cmep4rDzRwZhPFjPdapyArFemPwDBhcSkAe7QFWZW9kY382gTe2x",
  "key13": "3aMMg7TSbw16EH1v3Hf1v9S6XY766noUBLZfNTsfyfqxyytcCjTd1kh4Q9ze9dHg1WDm6XeeqnJKmxB1N9ZRGJAc",
  "key14": "2w5VLpW8nFyEmqnCaas4GWpUqEzTcxS7ii7riQv8ep867Dd6ujkbv4MsCtDAMMt8FPXiHH97CjFYTDEP1wnHAKND",
  "key15": "2pK5PEtMr3xZsYqY9MaXcFZziUj7ffbU5WY2Vu5BGsWrPJwrug7tLce5RnerySwTrsg7vNLYTAP5gxX6cxpyVdDs",
  "key16": "VTr6TQ2dWR1ALZ8MQVmqwQP11KBeVnnufyXCmK1FeCmEWMHVGgMvduj8Yu973sDWPRB7C2zVLwdcN1wy4NF7gcZ",
  "key17": "4s1WwnixtRkQci9jCwRYdC8DF3BjSqUpQpEP7gn95CpgtS39RxjCmJTb91omUmxeSn78QuPnZY5XckdBisgi8VjT",
  "key18": "hmFoXCaFjinESoVpiDMZA5idfvS2mMCzseTQrwZcqezbqd1mUoVtXxicsv5YsMtyK99fKgyAiWdiVLQ91nUDWBQ",
  "key19": "4m3BoDyW8BANh1sWPyKxoNiovGhMxzrpCkiLduv9FZf7Qb7o8mciL232V4PAYs7rFA9UBVvnkehUiptJY5bVSYtu",
  "key20": "3ecfJ5sgsCiLGmMRQ86k8As7gyhYJHpbJwZXjdoEBkQ8QRbtL6WXxNbBAjdihipvaUGuVDwLG6BDHmaDfrXogoVr",
  "key21": "2oiJispubDUXnVH8jVY8PZzmQdNNBCayUYR7AqqBVXjLXwiq8aRiTS258L1QbjDoKq9ZbwNB3eE4SkBVL1beTfFy",
  "key22": "3WzZDXna52n8r989xRP9VKajp5S14emm9FGmAWkYqmobgJFf5gDd2Bxz3Kf6id7eY3mhyUY5GD8dupvTFusc6CFY",
  "key23": "52BC55AozwN174bxBhibkGFK4jWAW857gsoYfTuavTADSc3yWCsYdwqp8BANwdT2iXYFee2o6rtF9JaUZdS9w3cP",
  "key24": "3qZBfSVoU9y5nMvEdJCbAiGhQfsgG6jZfecbgasP4D8deYZAsypTLrM3mrCPBYesd2XbX6W3bWN9V1gvx7KKDoj9",
  "key25": "3ZfcfH51sJQyvtB4tSwFEjb6phJ3oYzmSjm4oXg5bfchUHTjXBHLb8G8m9zYJmkwjsPWzwi6vhWKaDUVCkx7cLz",
  "key26": "3FsoAr54itswNErnebUMtzcKXykhW4BX17Ctc7SD8F6BAXmoxJuHYSb6gKqdhZAdfu7cMP1C3ePyVJfqqhoxbrP5",
  "key27": "4H1RMvx9Z9YedpL9jqUM2LnbkgC69AqP68yhiMLerdehKqttBMHCfE66n2rJ46H5gG3sQhVUp4vFJ9UqtJ8DN7Eq"
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
