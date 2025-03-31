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
    "3pty4yvYpSFisMMw9eNHPpAP3BWN87eGoYmzYDJzdWs2T5rJLUMozTQZ17AnJHjoXM2sYEE6Nv9gbFTgESzrFouA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RbE8YbnbskyYsMoKYmqxTip55u9wSdjLoZ9zjEj9HYwDb5mAwxARK6VroPGJ2ZSCFfBNDgefqwgr2H8gvNjjqo",
  "key1": "3WSNU7XtYG6sb4hDngP8QxzqQfth3rqXVhy48eUZW9NQn6JRZUxjP67zUCu3obJojAd6TXZmrSp9eF3ubqcgefoz",
  "key2": "wiNYRMhhFLzwrqncWNENDjAzWrorSmUTrZu6dLd9edD19m2e1hzZwvkY3PRKZG73izaK4LHedeG5Vhhnwy3hMer",
  "key3": "4pkHUx4u75J9gGe7yxgjXzhaZhwZCGJhiuTpa7Tv8Enp7tJHWm5Yomo4XnfWKGShjQ6jGQgf5Lhj5Cg78vMY3tdu",
  "key4": "3gwp6aoJAoH2uqTpYbAPggtX7MtH2oZyHVpd3B6MpvmitN79aEy9FqUJWiBKmmHamz8tg6RUPNrEdcVny1EeF5KV",
  "key5": "44EmmCuZvMXW1nkbjn3nGQr1rmaiBkDWSQVEitnbdTGWLbqoyi4MZQqXjBp1zM4Hx2yxmj3oWuRf7R79mnLRAX4T",
  "key6": "PV3Au9V4BZk1b2zhDTZkGj3c3YQm79dQPFiYJrmzDHQymn6g8LLDhui62B3yhW6C9zHKqPuH5NkUpQMcNGB11S6",
  "key7": "YiQ9LcirNetkzPsUnhuAXP8RJKqgx9UMhbLjVDPQNVe4etocJCpmM2ZFBNDvEaB1yVh2SgaVkVdQZkr9s3Vyxqv",
  "key8": "66uMDW1ReTFzFmiM7fRTi6XhZZsQmK83h1CDa48SWsQMJi2hmFQDc2pko6FSWsmK72Si5dVbJLHFQwqYGgp7BjHK",
  "key9": "4rQkGGJ2dJ4DCy52PsZwnGREFju7DWAouv5yrhJMpzGijYB72x44Kd2zw5mR3B3Ap6guLguXABbWuzbj2aMGEcCH",
  "key10": "F5rd1vBU9f8b7aTJbHwrnGv7ikaJvqcitsXb7SrboK3uf5rjUJMMXYshVDGuchyCssPM28vMK4fyzEgXs95umjH",
  "key11": "2jNWG7xxnRm27L6bT8EvMfWuCovKvdcykvkpxaCr5nVGM68PvTyq3aR5GsQbW2dymNifraE4etYCJ97Q9QKeNCc2",
  "key12": "Rq9S4JjmpAo1GCoYit9pj7eUeGFCdUaKBECcBmusEZcf9bEdSdc2Zt7s1Y2EcZUZjhXyGoZpiZuNU9Wr4HjsZqP",
  "key13": "2mcR1ei8cDpkBeNbrTgqSBHAqnWMmU8jAC7UzAET2wwoKpJgDidbm2GLSE4SjankwLgT8V1maWc6rZmHLo8fpbaV",
  "key14": "2nS21VYHx4d1MrRRtkVoDgfG8ozVMuK5BfCtio7gk5H8qTBb8NW8WmvmzazwzBKeqWFzP9uXTdWNbiH3geQuYqru",
  "key15": "5vjaACvLPGjiDPsVhzTwK6PVHsvn8TjhKa9YHrpWtnnAkCGsTHuhEneK9gTnFtjCeqqzasDUFJXbouWvjhKZs7wk",
  "key16": "MgFyQQvKEuJa3yiED58NFC5gGtzFDUREJT1mvfDCwQzDWGom2b1Uemq1VgtLDTxJxtuCYu6RfbeND8hJ5Sjh3Pv",
  "key17": "3uaZWuZvQcGo9hNfdPM4eF9hGQTzNwhUQqa8pxvrkBbQ63rWMX9bqgf9TxiskwW2BzgsJgzMGaXmwhVGVaiWjAwc",
  "key18": "3eVw99ZB5JxDdzEynuAYDPkqwMDciq4kdhEbNvwXFUCUsFU773Edp5dYxbVcx13yt9RNBReW6zwK4ijRtBpVoBwm",
  "key19": "4Ycjcv5MdBkYTKdwKzWS7ozJbdqWdLyQSGsXdC2euWq2DufBmxawy8gg8T73VkWZXBtW3ZuqiUupYUHSn6LoDt7o",
  "key20": "4tH4MR2yNudVysvPcXsNQv1mFDRxtVzFv2wasY2nvH93Uk2qgDa1kB4hh2QwFwd9baQvwNYm3dgtbFQBwcuCPVbx",
  "key21": "2Jpx4NgCv4eAWUy2D42kvvPCyZooA6joQhA2Prg8qtJfTzFrxeD9oi6veqn72Z1tE7vRjpqKnQFJpefjRXhyBq9C",
  "key22": "3C5Q9niw4MLoGpjj74HQhTUHrjxZuiixMbgLrM9hGg1AvU7Czkb5Xt4zBff7H1mhVhMgv5ziNfpXvhV1kS7wCKBQ",
  "key23": "5DhXMSVSUCi6tpuaegrRMpFLZDL8wB2Sj4EFn9vAhLNdCUtA81CASvoGn4o6gBqr5jd9ZZD6wvjtjvaxKGdUCBBm",
  "key24": "yPAKdNiEXasmQ5W9PGBzJ6wf3jy8GorwRvGW32FHwr1oxXQFHM79pA2o3yA32xeyAcA1t8F2i3SqQQpJniQN8vR",
  "key25": "4fKSQjHhbBsMqeZ9kvFzoa6C6f7uMxC1PSMfKAKVCVQg4Lha3S9BUNVFwCjSpzPXcSvx2P7oyQob8UMwjJ5MPs9n",
  "key26": "4LgK1EHP9BBR7UBZhsyJ2LiNVid72PRSmANwuFwiEUS5Xf6WvqnmKU9X5UTd4GSJhag7ndA9wTQMRw6vMEFwTXnD"
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
