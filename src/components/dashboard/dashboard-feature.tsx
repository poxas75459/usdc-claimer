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
    "2m8qBGuBmwurA5ZnSwEaKg4bp72xLGMqzPdm2rfU3dMQUenRsaFqCbSAyvJMDFJA8x8Pug9U1d4p8cg8wYyFwD6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M4fyvxuQPa4eLmumWUgNGx8dorxK2H9wvQXKAcgpsGgH8iKCWDwWoYgd2eXgeRBivTvPX1bz4Pr7Cdof5dRXZfA",
  "key1": "2aM6wjNw9Juz2QtM4fcWQ3hz9xyDJfMKLKLt4U1uaK8q1YYkveaXAGfbGC5aPkurrf4HSyvhS6hxStynwoeEYF8w",
  "key2": "2w8fvf2DFCb4TxhbXbFhzEi6Xz9MFp9F8LvqdCEcriSVXRid1GVnJZVeXMBhVaHS3c8yVRNpLFe3CWzryzyu9ugG",
  "key3": "45FRssnfCcVmU8XbKfTEG7zjFo67WX2voTMq1HPgzHwJnhQ1BpiEBqETbtyyqPb89ibCoEdCg6JxJ6E9QE7GBC2F",
  "key4": "3AWhVtPbspgK7seLDVTpmfk7xv7JNJiScAgTcbFBD7ShG8s7qYWrbgjk2bRBwkMbrevsByN7XK5QzJBN5KLr8uj",
  "key5": "2Qs7yb9gVitun7ZNMgtcs6Xw2oWhWmiWKbxw4bD2WRU9f8dpfBVcgBncigm1NQTXLdm9EGvGYeDvoQXYcX9zU5LW",
  "key6": "25gWu5DuEBjvke2DphzgVnRRYaKtYN9dxi7mvWLMGhLsv681KVAPgfTY916KnKNe4Ub4tSjnWQ5WVcG1ePz21puX",
  "key7": "4BzLUKvmcF7XS8VPPKEBbMCjA4Kq1NfduzCdqU6cmtasBptdwyx2Mq64sNSKDKoiT21K9ESTW6ojW8SyAh8Rtss6",
  "key8": "eBWormUka82iQxPFeFbU7EjBcPNtaZxMBAXEmhg3RDuyfwuzCGDWy6GV1v22r7tTqKj5huxLBxYQu9ukiGVBVsP",
  "key9": "5kqJmTMTPCAPPwGS8N7JFcSW8Zbf8KsZkzQJU89Gq1dCTijKip49hFoS23VQJTwk7wGJoV8UZjVRTq3R28TAvhS1",
  "key10": "3dEeJYYE1gT72tdVGi9S1EctXvqukSqcnDdHpeiXwiXxvjggSsjNLhkpSUBKH6UXsfDtsd1TjvdS9SGevyQ5Yzuu",
  "key11": "2iZNK3gwfcc5hPmzowjurCSWhAUNtpvssUF3iQpaKyJnhyYGrSy7AYh8DuBYmmn327JZ9erAMhZnaqKofiYd8Vun",
  "key12": "5FbSCnp3YZK8FdwbJJnkYLRgQX9p5wv182HG4JBGoDQNb4prRHBYxVLfrZtPsPHZFLTXmE2AbAZ4Q5i7xwWw1gtu",
  "key13": "42GcD1jgAUoER8UHeTKxcpQDFxNi7KaxZYrZFKJ4qx1qwbm1eoK5oMV3n6XYYTidf5vVEkKrhRmE4gHF3wXnT9LW",
  "key14": "4rw9Vb5VqTFsJia8i1J4Ngbt1qixZQGMaKGWTBaurdHJe1pX9J21NkhuZX5aTxBFP4ML49vjHWxBYoQwr13XLjrb",
  "key15": "6777FUQa41nN9uUEQU95avuoHQm8eJK1tGTMXBdQ4BhKrEtFqr8RnggUi2fjETEH8Gv7uH5a5q3s5VqH66YYCyv",
  "key16": "5gPnyXyF7LgduFSxoNvMUepjpgAqepcURkbqoT71jNyTSCceUNx18W4wgzBMFbaA9kmkKVUwQUeCW1B7iQM5XERL",
  "key17": "2AHTvWajgPmgf6ADsRpBCcZECEnM2ZmbXZiHqj6XhbRkynP1sXYFkPMK4eSbu6NzayzQirvx2SGJYZd1vb9Hy1rx",
  "key18": "2Qy6wcyZP7DPVUjQL1NeEP8dJYJz6sz4TZ5RUp8uuhizLoDLbvTmVjv7niW8JfCMPZgUgkf8u4kPWzrR1hcwLUG5",
  "key19": "ptKVavNCVDaEge2yCDMRTyRAwRZAY4dV4BjyPFm9hNQVD5Gje6bZmR21AVXGCRpHRK5MzGnByRkF19QRCH8zj5U",
  "key20": "zbJu2iG1iu8JYpnRv9BFoE4cBJcMyDMkPtapQa7vV4Gcg7jLTCAuysdv1iVH1yj1YGbbmhPCK6DeaAw7T3p7v3S",
  "key21": "3CASGLufQuu84zdqaiZ9AyJMRLKXTCPkFAshXPwUki2atQt271U7B1MBzhgv184jVYa8THX1idUPvMTZNbEEVaxY",
  "key22": "37w9EZjsfW2HZtjkriCTeNzpUN4z27po1sN25Shc1dWLpRpiPNGMiJYjEakWVy4JqmD5gekYs7MKT2cuyEBVQNG7",
  "key23": "2qB9SKW2uULVxLFK1xu7zn9oCwzjPjhJBGxmsZk6E7qEmi71V68nvgxifBXMwT7RyPXRDnH4sLLsmKPxN8rq18ru",
  "key24": "3tnig37YWVFoiDT4A2JZ32KogTfJA7GXM89JTSBToaotDCXTSTWJoNN6vFqiMnzuYvPW7kL2ZDywFZPudNqwoCRX",
  "key25": "65seBWviF15C47jia71RQGvJmLqGbZahQQjh72RbqiQuWEUs5ovBrNHmCJBPGmWmsuMT9qE9vYj8Eys2ZcgSNKx8",
  "key26": "5hka5k8CipcRaqP5ZxhwoaLmS6hgfueYp94DXW2fJAuhrk7GD6HvewoKnA1cvf84gyBZRES5xzuMd76gLjutMfGh",
  "key27": "5j35iXCKtEbyRfzyjdHiTuXBE3oEqraJwcYsqCHu43tZkpa5PgKhuDXNLvxzxgHfU7TQfpphAgLhkQSMBgZwjo2q",
  "key28": "2KYDt9jsCL3w2k57AKBKm7pXgKfaMuuD5siF2HMy3qY2rtrrXQmGhXbcJC7WmbgGkkTAq58UPzV4z96KGfeSQ6CW",
  "key29": "3E6WXY3Hd34Wa2PGybUXwWqiwRpkmov1tYknrwX1bwyHh1QRBQPdR5zmr2dHXYpK7K8zZPMsQBpuu3UNs19EapmN",
  "key30": "3fUuLkG6LjSdLyN4DA9ZdfDWRAW5E2n4QR1YijqhrAjYoPtq8rvNWKR3gQNWuiteXbnc6LwYZG1djtSeRy8qwbWm",
  "key31": "5LXPHekEZLbF5M1d3HYg3qk9EkcbYz4n8gpxB4znNjMvzSkoVrhAA7UMCupVubCzXhawpf5rv2X4tYUB8qZVRqXe",
  "key32": "2V2PLTkyFueLdckV4bK5MmUuX5B7ZkPpjmY6YiMNox7sszhRbp8pv2FnvWE6rS4vK5uXdwdoZnDhmcz3e39YCTkr",
  "key33": "4M4JMHfxbNR1kik2FQGtu6EdtpVrmB2opXnZNfkL4jJTJ5oA2vNkPDFSWw1yBw5yxtHYDLJkpWQVSeCryPpPbug2",
  "key34": "K2PcQN8DDwYr7LHymaJUYaaPkfNwjDJdXQJDv6RdppRxkHzb4C7yAG2UWm4TKw9CtFxXuhQmkCxL1XdFFjCK8gn",
  "key35": "4WkRvGCpJJr4F8basAJD2Ribe4sXjNazyvgEnMVDMp3T29fkaw8fy9oXqWojzXHaJmjNufFiQ4NVq1GAyNpEtVTu",
  "key36": "4iazJd1kFYUa9mJ9wxExkftf8ZjQ9tG4kBnMLMnxnCWsXB8KJwkwdwqeWrzULCHtas7T7ZLpT1fGRXJnNt74trMp",
  "key37": "3RozoiW5yJ4Uq9mMC2b7yRiX6QFnHRKphEUuF6ApVhhRJMnVe44H9e1cZkMFzcoXMxUCiQY8ghyGfayeXpPe6PAC",
  "key38": "3LgqXbmahePwwkRoASA4FeM92Up2e26cRPx3QznN3khrNVbktEB7jf8qbeHPxoyNNrBZudvuVCyqujwbgci1yPyW",
  "key39": "crwcA1NS25fSovRKCAxdHqTZ5dSTx38UQcAfc6p6cSJyQrnPE4y3PCzMiLATitndooprjsSJaU62ir6LpuxmqkR",
  "key40": "3cjCoDkuU1uk95Zq1cW2f5dazj9sjMtPvB2vF7UBk4K4Fd5pDiLWxCjfhgP9tQays8PHB7y2UajEaT9K5wQM1XNp",
  "key41": "4GisLfnRMSEvWxRuHfSgZ5PMmP9syDU7PHF6WpMGGEmhHV5BCGLDUKSFVF7KfgojzGdzEdNeJ82F9rXhB9HpsNhq",
  "key42": "3WEDbYH5xhRntosmKmDmZCdEi1VTysirXx9WhTaA5WJVpyJiqKkJup4K1DYK8LfE4KSgqU2F2EjH9KH1X8uJNasz",
  "key43": "2V8uFMJ8ABfqnmViFXd7zpTsjiSvqNS73AguMjPb5uyfYm4gZbo9e7v49iwxCNpq4aapWsxdGAaL4iTsNXBjqhKZ",
  "key44": "3ESDRjwMM83zeXgc4CNDDfgEBGoNNWVDGpokeh4u1RjUYsGZj3ANTbXnynjrBWdwP1EURMuoVzSd1BU4Khbwkwhx",
  "key45": "p9pRt1xh3S9YQ5Kn8DBSfXDwSiEWz1S3Cwtk7tfghsjfdhAASrhHmDfUn3DnVVZc3Re1PW3Yj8uyBMBQxXaam73",
  "key46": "oM4vPPH4S33xNqSDqPr7LUvndPrC1t55zaGgwjM9Zuz9MqVDL5mRfU7crvGEAcghgV8sE4oPfvMVom6rZV933aL",
  "key47": "2CBbroMrrhcYw6HGHkY6YvXzvuuB2vwJ9HeDydtzXWjY28eYcWPagU8CfVLbF5JY5etBhmfAgqbSENcDgDwXUnF4",
  "key48": "58vKpjjfSiUHAYGxPy1hy1nH12mu1RbiabmJXCGmM4TG3dkZJ3rSQqcGqNU9TkT8QiCrxD4Hfa5u9PHoyjn4hjus"
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
