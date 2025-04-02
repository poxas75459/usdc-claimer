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
    "4WG3GcxUJbkofWB8DBhMzw3mCr7RuEAZCw1hj6EoN7fY4sBaUrfyxjktdMxpKCQ6QxtE11w4tce8WDtLWdvS1o1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQqyDBCgNo77FcDNx4d19kEKEzzvwXphvJ6cFp7Cc3vH5or3KJeLkKj1b8e4ua7nTShWE7deNz5DnhgYeY1Wn2J",
  "key1": "41njHYaR6y4XRHZEUbYxG82RYr2hHtKaqUZJUfiATZMFCqdyiXxE9ojVX99t2hwEUUYFSvSKHGx7kiHNNpWmdtCV",
  "key2": "23dESJnKbM9H83VzLNzsLgwNuY4UVnyzTGwz9SEuBvZZgzteu6FAzvJNLBQvQyttTmyTZW1mbsGg7HA2FDmgEMYX",
  "key3": "2r6kmFcxmE7oTGTeXurg2dU5E2aBeLrr8MSZCMmgJY7opV5f6B4ngHXzWB2zq1hHnY5yyoaNqY9zBftd1FaCu6vw",
  "key4": "2WQfGXbQwyUoNuBAojzM6yHSGS3E6ZBzVkMki87o8CVe73CHgcWbH1CppQBucduCwZfF8YaKv7KfbJTMQr6SFmBK",
  "key5": "KrXiLjNLAQ2tiwuYbPbUpjtuBpivJcPfVaQ9oCeXreFvNQiGESLB5nF7PXqtB1wuSZvo9t1gHHxBRzi7KXJgNAx",
  "key6": "4ockq4DUBU8VgWc2jDmGVoDn5wRPoEMx7zQ4pJXMmQQSrHncMdQKd435RTNMYcPoQahZG4uante9wJVo9AQJyPu7",
  "key7": "2X7PPvgZWyxmcJrnLsTeKD3AeXGx9ZoqtCMijEKXZaL3cb6DSocpk7m3xV9YNm6Dyyj6tEJ5tYSpjoJZ9T1QUM9r",
  "key8": "27hv8NZZWh4BAEQrMQ9m5TNDz8qemeRYPNgHqavyhBTqDFuhWomhruY3bofcUxLW7KKMt3wU2J8RNXjiZXU6TYNS",
  "key9": "4WZFwPNRqVd8gi8FuuyehdB8MyaMjB4TKzJLdoM4sW8RWnjfMVjYVwoPfw6CrQtxRHvpwRbugZxuwHgrJC8KzG7G",
  "key10": "36Zwtf6baarmvV5GZFdEHNHU8HgajdUcHq8LTcU2vNFuTNe23PZo2nJwH1ugLRwDg9VnbT9h3EcxxxZV4FLHuLxv",
  "key11": "2EcLuVv2VNwAAssaZhziLt4nUitQQxwv48Q3Tt7VjMUNN36z2EanXGLxFw3MeesDjhTXBSdzyinQCpsTVVrdW839",
  "key12": "5zHdTfMGWqAuQqR9qb7scr6AMBiALNjbUhToUBGUeGEbt9FULKAEJNztpTHp4w5ENxhoXiuovmx74wcV6StcgBih",
  "key13": "2KF5nQjaqW4U2rowjSCm7twri7TqJJHeG4MmbKBksHzBpUifAMtLfLnLDByAoqwMRtD8Qd6s7ENBKYBSzSfqyPHW",
  "key14": "2fxavVPZ4RzDqosaMnLwNJ9nyL2WLdDcZoxoMDujKmhrqjP817Um4earKuUhzW4BDB8QCVoawuffk3eJHLDN7bea",
  "key15": "3n3oU71WQecpZz1PQFheWxvpmpw5ZLYaB6QdKRLe3UwKG6AD24YPU3KXot2rdpm3AdyFdRtFc4vs4Li3FUsQVpbr",
  "key16": "tXRLyfgntKuvvrXz3Kdhd3VutGzB8QNPBe18MgfBLPCGhW7qNUAdoyDnKHBt2JZefVmsoFcsXQEMzzdjDX9EJqA",
  "key17": "61XFrp5tzBgyJgtVPP3qQTTDMts6S9nyXasqUxGQCibDEmn8AuB6xTQZ65x1K4LRHBv1YTvRK57NQ66HsbP3nMTQ",
  "key18": "4yEjF3tG2JxYUWE9LyWQBMSnjHLTifNthH8JANC813uqobH8K8c2DNBuvxabGjLw3UVuDUVSpQ96HtEyPwdpybVY",
  "key19": "iCxGvvkjBhJyHJicgFttMekGNgThq64nNtyZ4yRsb6bvsCtgv9mSoPMjWBxtaBvG9WyLgXytyWUm95K1zyZ6uJB",
  "key20": "2cEDNV4naU3FxGKfvtuWBBRKrQgU7QVQnnAVLYs1Zux7jGDYgJEBNEAjTaZNhixPhDdEwyBCgxxgpU5pRUFkdzfU",
  "key21": "KCPKA2PQzLywqr17nVwYp9egTD69Vr692vJbzK4YfvMwnEw4NmNwEf7mPfLbUZ7fj1PEMVR2TLJSCasVQqjCHXi",
  "key22": "2T3vd6GnqFb6cwAJd8e7mGmvMSxYC33vcS51s2TcViqhMehuNsv2FfcWSpc3mRCT9Vd9uJHBmH2PeTXxmxCLp79f",
  "key23": "2GThLeHZ1gRpH478JTQvULFKsBDeXnYT2oRT9t14jjSBeN8fUrqRqe6HTjeUSiDjcpsqEo7jyR6FeYXhQwktkeee",
  "key24": "5iHAZhBmtpUbcru6SGgLi7p3w8QqRCLRiayQvMrsHKsDeDkGipRUKLCuxMXJSs9NLVUBesQxxf7zSawmt6v2ib1s",
  "key25": "4z5D1XLZ4c1kFouMPfQiFr9cqoRxMEu3fyXVTiYmXBsTuPaRSfK5B3x7Pvwqd6ZvQLLicyD6FRdfZQ4i7YK4hLqU",
  "key26": "3fbuRCG9ZmV78YZn3frPvvn7ZF5AHVY6MpakpY5c6xghzFkZZNqbnLvfAu3LiP92tpK2NFGrJEU7qQ5T1qHYijJa",
  "key27": "4oAy6upouxDL5fZpdCFusK1njjTtZVVrUVmumSAbmPZuvJAg3izQ8qxMEpUQKP7ykeJSgBCU4Png6qQYrXVAzSQs",
  "key28": "3eET1VhJmmayrGegFXaWc5mBDanGhmdCxPvqyNwJAxqF6TDaWfCTg3m2qpXoDgHyXLwAvwj1aSzwWwv2orQfDJEY",
  "key29": "4dzdpATHB764M6dGGvJUzRvcnrWn5X3fj7FZkHk9hJSrp4aVpwFYNtzNHvTGh2JGt6cQB19PHwoAWFDVJHF1AuZ3",
  "key30": "2KXYNqpLVpYqHxCnTmemZdATGMHDH7P2FPVmEU3jvEpX7vqAVsVopPuPmd9psqmKbqQLqakwhvhjGf1vR8qFr7B8",
  "key31": "3W5caA2EsdMvE2bsdYLHVjfkAb1FbHV3CLsiSp4zPHZVLZtV4iCyhqmKRxQZRMk6cn97XF7kmJ7zbBJx33Pm2C6F",
  "key32": "5AsXtkisdQCT7V3TVJyyYQd2GzA8wxWKfhDTApGomAhWd2LGMsLwdMA6YfPrkjfUW12SKf2C8F94z5LVK1pmMBzT",
  "key33": "2PQVhtAS14J4ZB6wDJMHXt7q4NE8yi37jjYVjRz8yz2ZqVVFSkVtXxfx3mChAYJUoqdeQBzztRSuarsJmP7MVCRn",
  "key34": "YhAccYz19UZkZ7PekqTFVuZhFdAaaVaxRQorVj1GqXstRXDhJrJs11w2N7putkLwHsea4j73Q5KXh2Lv9Ssigki",
  "key35": "5fDkQwNyEHKCx45jp8PotL27dscmx5NmQt8vBLqDsd1QRJ5sTRv1Yq1YQMzh4VEtgggm9BpA8865WkoXe5tYY2Ky"
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
