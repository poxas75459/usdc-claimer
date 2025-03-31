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
    "66bZyfSjcbVjPde7LFnNNo4dQAvQDYAsrfYB1dMDePtxo2MCaVyPYWEZFnW7LpVcZXi8dJmk4sD7knvCE79UZKp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGUdxL6XTN6Ps3qY65jX3MdPmpZUaUZ8K3qtVYmkag3r3z7PeQm6yuRWN3AuBFWSPHTXsHEZK3xhnAoNuqqmvmv",
  "key1": "DY1JNqArrSN5b3AFHfJbKbcRsZd2RJoLbtBTfHdkQGXGHvaKsAnQFBEQfSQEEa9irMZcVimeJKKkZpMsLQn3FxF",
  "key2": "54SRs21n4GafYjQJd1ZPJknowo82vEpjLg5H7iRKnTbtN6yLoFhg54gFEqpMt4otLNsoAJL4hTCjRiA7q7dU5fSM",
  "key3": "3uBnFkdiEpUWWC3VFvsT9GvVhzSRVcNpajDVwav5McU5GgPQKi5mwt4Y2mvDPQFS5PSZjCmJSQshtpQprSXMjSdn",
  "key4": "2VggAF763QKZHt9yqKNFvy679Drh4oEd3LtXoQpDadXaJ8gyVSr9wFs7btWCgWYkENVywcVJ2UNcb7Qxg7QbucNx",
  "key5": "3BbCwa8nrmpnHzJCq181wZ9ZUVWSwKeHW8PsaS3DrdrKAuJr4DcCnSpAsZDo42BTqR1oV6eS92D8tGKugTAXJh8V",
  "key6": "5tFRnpYB7b2WtD6gjy4L11JmQ37uQKZNqHfif3kau3GZJAwJGBSWJD8o9xMYbpB8KoumuA9TNxoMc5ekrE9rC79X",
  "key7": "5pqkniugx2M6hFmRnUGWVjx9v7ukuqJUGW2MD38Jafg3P6cJfZcPepGmNsY9Bscua9hM1jg5Gf4DwsLrpZHyrRgJ",
  "key8": "4ZhGh8CTCLwa1ojNXwM44NFiUNcsrJ5MJTRLapZa13aLYL6Byq84gRcc6KQC6N8dLFmJ3q7x9vSxvfXgZnrzdswt",
  "key9": "2PVCFN73HWygetsCVgeUfd8baWBAnywFkkE8Z5942QN1FYjWnFXjU3ycCqYNPpmdM9v7BFW1baZunMJ2SVVTdudB",
  "key10": "5Rf2QtSSWVbPTXXjM7zZgyzpSZnwAcJbMiLtBBZeERqGvBCvextCbQESQDpfEW8eKNsExrh9pY2zAXxX7bZYjy1e",
  "key11": "eG5EaLXUYQC7nHwvdXNSJuixVHBf2CikP4XYh1DvuvaNs66zQzdqGR8jxTabv8LFd3i4xPWGtsydpuHiFDj9YNB",
  "key12": "3h8JQdyemLz2TpDYGwnXmU4A18jBCzkEqWhw3syGf8hRqQTp5Smr3fyvJfPoNcwQYwzRCoVPpSHkRsyMvnnMuRrc",
  "key13": "4Kjxka8711zXxE9Mpm7nUbXpwaUrhsTejuB3mmfcvaniU7C1kVHEZsUVsQwCYkUzqdHvDKVaroS8gEQnv1mpN2vk",
  "key14": "Frr9k29NRGap1fMe3t7V5yqaZVR2mSyj1o6wLuHk2BPAK2NPc93LRD5wZ4KG13EAGsQaPg6uHUpnBwmvdfb2kGE",
  "key15": "3qS5jr7yqmNYTxWoni6UCTnDJbhndiQZodUUQiWuAfx52MKy3rbASpZWX9fjvPv5SPwMVZHLkmeunwVL7gRmvEhB",
  "key16": "5H24Rt9CEvVxRY7SR3B6oCXThKKQq3DJjebK87hbFsyuvsN5KAJd9CK31hFkRcQYYuo7TDrwRYG2zfNjrcDQx7cK",
  "key17": "5BWnSQmV2UDvWrzqJ6dKeE8SWpMacRz5FW13bT4JFbqXdeovyZDqpjkijcWTmSpXcJGqsf9PNGSHnbYD4DZyN1K",
  "key18": "5y44YCUXXfmqbJ9DU1cQHrVEZk77Dpg2HH9Br3H5obFdsoJJgF3VasDMXG3DurAX6wXTo8DUE6CUzuCctCxMG9n3",
  "key19": "3evK3tYyLU4yAVECMpyba4zwebsvat5KSmCQrriv7mACb61MakbRh85mkbCAVN76QruWgPzTS2rGbuow6v4XK9Ec",
  "key20": "2ZDXEuiy8XioZ2GmywMszE7QLHR9eEZSJYtEbETC7cTA7UoVPaPPS8ChoXG5VXC2n13n8KaU9fz7kwDwYbX1exfS",
  "key21": "43CsHsAFKX9uaWBrHzFia6MNTyLKJSADSeQPEcknJFU3get95D9sZy1c6LBkdoHsiR3UGpoTo2eAFbG3nEvJazUH",
  "key22": "w3VmHQEHE9wD7BWJtsxnnkHdm9PtmmCCjN1ofRRuZ9UbgsmQufhKzguDffzMqCr5rdSJc9NK6kzbLcVeGybAbb8",
  "key23": "43mMSGGfi1fsqLWswkZGhv51wKWeKEDhWXM6XFMopWc9znWW2xz2By4f957XZv589WsDxZX9utWkQ1MUg7n9bS9J",
  "key24": "2WES1YDSZwZKEyrp7ERu6BiJBZo8WVCwwPyJ7hzRXSdKSwX3YY1iukEuSDQ49ppZnfiqsZCAYVCeyWx1EKpqUbmi",
  "key25": "2mRPJHq7QbWQSwUurLvNCymT6ub328KChrDEJYvZ1AaAnUFddtRvZADxkqFuShd9SGLLYADkKWrWYKwdqhR1Cnzr"
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
