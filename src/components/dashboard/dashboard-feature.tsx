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
    "4jgCfd1T17y9TKckhRgQNAwes3RBja5XBAebvA24CKGtnY1qPehwKRbbf2xL9GnJmgxFYgu1y3hwU31v29ksFEXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WW9xVUuQi85n5aSabG3Evng4fDFdX1qHxCU9xunJkK5A62zT42LwdpBrETH2BAFfs2oVnzGemXRWB8rhsK3ofFY",
  "key1": "5iqZLGm7BQGpEhhc6DnDSNCAZsv3v4VrjsTu91mxY5uacCkNXFq7bUAMZZzUzET59HMmQ82eGbSsq9823Vm4SeRb",
  "key2": "645VxjgYzMKpWT5uhsDYFtVVrCRLcKVxgL1AQmA3v1yRDrht94gPeyJreNK8dDCYVppQ3yce9hHcemxm1DT2cwFH",
  "key3": "3Q7bebUXuTeDFvGcuws5zik38uUMPcnsx5dECjSyFbU1YzXHRWMy51Ra9CsQxnhcEKDReAopv4PC19JHbKTKd4g6",
  "key4": "4ynX5gjUb811QGMpvEgFUUF8iC5wwSjEhkR1FXTiKcXszD9NLhXYKUcUHkwr5WFi791tVqvUTaHxK6YEM1ctUo49",
  "key5": "2JdLizu1grhu25uWoToLbjuLNuYPfs147ZQY3F8Tj5gUPLRAfDcoidhjcwvHCJBAPjVBpZnxhvAkuibgRXqKpm8m",
  "key6": "3R9QD4brWtsGd4SSiFkG51TbYjVPxDSDpWfp2yfs2jKvWTF1q5fSj1phXoUkkYRyh3zo1Pz6gCB5AcgNcKdDfpDC",
  "key7": "65hogLff4r94b6By26ck9B8BNQpuLK4bKfhpfTH9jYCAoLmQcCxLXp9dF4VLXzi11yDkCAp9RYZPuyfpbw6at4Kv",
  "key8": "4YSiybjzzLY23n7h67CvcJJjtRQnGnSmykErRW46j1za9yaijyZE17bc6z9U9pWt9YcfqohmffJjxLMxUobaC5Ch",
  "key9": "2CSpdJ41jn7V1WymMFYWHsWhdLz5YGxDV1k1wJXxe5qj8atB4C8a3tKKGCDNBN6jhaVKUHfSSXpnnAwcRx7gYVyb",
  "key10": "2QD1mLpV8dRn1VLU5rbS6eFm8fpkZYi3fGeSp1WRtV9uAzsUdmstAR5a6S5MEYBP9dCb1MJwsHLruc482ywD11WY",
  "key11": "5zFZxQ3ZmAfJoZt9mtoP4ZUfRREzBZ43cA6SupQ6iiyBuJfRfdbGZPuUm29Fqa7fwPoksFCgA6K3jW6WeVydBKPK",
  "key12": "2c3QiTKXtzyoUexjSPnjsxjthkDAguYeUHwFiGX2bpBkhppzNLaAWEM4Z2UwhJK4Cao9i4GnxbpXQ68WK9nR4nfE",
  "key13": "523fa8uTZrQVE9m1j842punoPE73bthio8UqwineiCAvXb3N7hhjGhTeUMN6aCvkDED2tkawo5Ux96614teKDyVg",
  "key14": "3t4p4WfT33CsqxNtjh6UscvR7GQjwF6TAvMpM32JtHX2WvZWNS8nnzPRH7Y1btymCT7CxT6E7XbKdCeheyXJgSVg",
  "key15": "4UcwEGUMoapnoiD2daP4QfCnMxycas1vAsMN3KkGX9mZdg5i8jor88yzisFjxw8WQvRvKyKaYEFmSNe9m22AW77g",
  "key16": "3PUwpnzyJ5T9Pz5F1cuPnbG6fQXZE5o74RCUEN6zzNCNnC3ASWaSBCWXGQ9g3YRK9okXZ7tKLwTj88ccfPHhffMc",
  "key17": "4a7LUvKH3VXPMdyZuU1fNJGqqn7K9LaWMnsmPEsHSXGGcm6qwJ9jG5khkLyguCq2FCYJ75rGci7ZPdZERjFP9aG1",
  "key18": "5NzgkpV979a7WAyU18D812moagwfnM5iNzk6RYkUkm6aTXXJu6iZGjx6vY84hdnotnda8YbsWRCoi6RzfFwNtto1",
  "key19": "2gGk2i2EkGJsVmZSXHtquAA1Dyq3UmnNdZJKjWXuKP9dbFvb5xYreee2iUjxYcsKm1gBNdpPb7e2WEwppZ3sYQ5Z",
  "key20": "5mLdhooaSfUmUKqPRQRp2bNGi26wW3TMFboybpMkSeviWJL25abv9vJaAYJvKbGLC1xgWrk9eYnCkBBXrMzbMN4d",
  "key21": "3qgZZxsb4siu129FiCxD7EN6dHEMozC4pQGA2h5wsTmTawqHrtBEuW2usLAEsLbFwDJSjV53x5Mjb5bHJtagfBQR",
  "key22": "4kaeCmxCxStaPFcjDUbu5aZK3DpKFTg2mRDjUZRbkxJCgehJtZ2Q23kDhZWtxTyncpqURCh2jgMaT42cgKVnrv4Z",
  "key23": "NmgsJjsXTXbhP6rqSf4zv2xzSpsoKJPrBQrKwqiPha3ceeLv9UY6vaFipnvWoTMTqL5U8JLiWLh82Ym8J4hTvTh",
  "key24": "2mY3EbkFkLPeaAs5M15pk5nKDnTvUgMcJKuJxWZ9k1pDRkFW2amampkVAERbYDwGRdr5neSWiFqzCUvYTRjEkQmM",
  "key25": "4w6uCK9o242Qq4rxXRUTDs7ARZataoNZQXVXDMyNYEYdar3K9YPzX1UYFFiv7ZBDs2QVUhrke3MwRa2u464TptnT",
  "key26": "4fZ9UmEL3wqC1rA4S5rRrDnQ4QqU5YpBUwxGKFshGKEVahwCQ5v4BvHmZasK8LYdKHjK4dRhQAm4Ee4iM9fgG5Nu",
  "key27": "5CfgYhJSKkTwABZuqGcs5NNbsUGzjyLa7zcaBJZyQQjGfbyn3tGxuVHGFoEtCdt5Um23H3TSmqVfEswTEW6Z9i7Y",
  "key28": "2UAsu9XbztnSo9DcG5nY4xL6vMySsUHVwo2RWAGNBcBFeNBhuJdiBS1CWZKTFjnU9KrxG5hJdeHhbCEcCDNMG2Z6",
  "key29": "5aXRbTZrNK1pF3HG1yxcKV83CVBCJzAPn8hVuu6HmbKdePG6SZtQLrmD65q1v81tPpnQ3nBNoZShXz9ztqMXVDE2",
  "key30": "4MP8y2LdDphryBc2NWbss6ekHMtbF2VikJxXZD6Ykgmtym9EHCiyPhdCQXhutvfwrgUYmziAQfUhkDG4vui7sVSK",
  "key31": "32P58kuU3tokotCMFtexUg3k7h9MnNA8i9e56hTs4vPsrCD8Zm2fbpTdCv62ixDKALVJfmq6gRGCseqiJTiouPXd",
  "key32": "4heN8AdpDUHs2GfrMLoFRpb6aH7odj8NGv35PkZ9iNfspyG4wd7Ym1QgK4A49d7nkygYULDnv4cwnxLuMLieGA5j",
  "key33": "27LYRAyzHvVXAdpzbk2S7EjLm6udrbtma6XTnAXmZA169D649wvHfYdSsVK5rCD9jAM14gSqdftg3pkH2EKrvPQA",
  "key34": "MYtGDTxwhHP6bP1sqpxML3i7Dw9CCMKzfABsCN1kdxakaxVzpDR4rh2XQ7ze6FueH5NVoY555f5pPQjn7jzkqjs",
  "key35": "nY1TXukdv7vQVQ1xMU7GVjrpFP3tPfXmsnSJdd9wd9kxpd8XCFx4cfHMDz2jWT214rUAU3FYoGuYgXid2t8b3zd",
  "key36": "5EXz5kst3yWgV5WiS7itNFmHjqceVVLRKCfd2SfoUqGJiG5nWYxChgRruEzqSSahtXtC5aZACuHVVFXoAiqLPgMa",
  "key37": "gtiohLXP8cfNgbGmtdD9N3wGEEqs8EpH44aq5SebYY4F58wH76ZhfY8HSw8bG9p2ad9j4vQMkSzG2QtEmrWDabV"
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
