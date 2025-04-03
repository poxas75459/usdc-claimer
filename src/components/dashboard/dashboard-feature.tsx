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
    "2ozFibqppV2SyUbS3brymTj4TPhmsxXV7qtHKYHmGBZXPrsXDFiLNXrYM2B1KRdpuFGAs8JvyASZyAjpdANu5xgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfrYA9AKA3AKFU6zXfW5d8RPntRFftL68kktB4YzKChCrhheJNhRystZMPfw59xkCWDd6EMXzRSVfbVa1R3Sy9H",
  "key1": "mFVVEcko1twN1ErxwL3xq2dfzRBHNhQum6SDDhUKsaEqPBNxMmW2wrmYdLY4mRhLkGSSCw8Mh6rfM2Ln4gn5CmU",
  "key2": "4GwJBrUd7DFnNBvyuNhbCUPembH6d2PcKn9QdqdZQbG4zFzqNfBnGKk2UQ6gorffrNnxHuedhcqYWTHy1nEEA427",
  "key3": "27m6jQNTaVC1XT5ovxYm7iJir7tLnzrbkFesZwMDjD6rSfDcwXwMzhmbvoJGzYf9U3tKsWXBH1Ptro4gpa3NXYa7",
  "key4": "FXQYkq59fhBhGaxujexjsYiBycy3DkgK1sK2aHyY7QGopJdSCyLRvorYx5aAJMxnX2JtdS212DYVeWh6citrbFh",
  "key5": "5vescxENnETiN22KtPvLtFZc9BNXfqNnHWJ1neL5QKPCLjqihWXoaSJXFrNEHV8JAFZpuLTefq96AaRuzWKN2cd9",
  "key6": "5NPyUcM15DHxU9WDtNQ1od1kqYths7HDDgsnZwpb19tgyfMk9CARcRGxcM2pehg7pxidhAF99LwvCGKiCGSPrjvu",
  "key7": "3yBLgFxNChQ4uQJ97rfpfbWuS8oNjLRYQo78sUX2ihqCuRWh3Wv7WtmxkotTvwgauTMKKAxhUB7CieKVKGAWXXQk",
  "key8": "3WpLmiNBZxJLwszXPxxNHkm8Uq5W8GxQXvCWamkDHarnZTMuabfZQh6HaTbCip882goBYDn6ESGKqpDXxPGr4gjg",
  "key9": "2oiWmZfjURtRJk9QoWu3iHVJc8hoPWoHGraeuZg3WP1S3aVrBWhSzrMXCQjo9rLPzqvXXBgB6LMFao3rAvAFAwmY",
  "key10": "55GJBXyEZS1ch9n3dhA7rUuQ1AgFiqQiEWDNqs8gew7Z2wc2a1DC2s3SSbWazwkDdcBuNUQWqgkGHnx1ZC5uqZSN",
  "key11": "67Z5Yt2kGJNVi5iUzVtdvhfd85B4AFi4ms224SGMGX8vhTunqNkCwtpE87qPNA6aXRBeFaALwXh9Mnnd5dKwRNCY",
  "key12": "5kbYCJoBkAvY9BYzcc4ArCD9rPMNBsZE6newMvMgkDnCFSGqgNRazhWAm2pHq3Xcp8pkPiwD1qNMrukY277ddPXa",
  "key13": "33NysBHCejt22qjpmfgSSHeedAaZzrjpR2XwotSXYq3P6HzKNDqAewbsFnor4nr2qpUATLV1BSQNuMSjKEhZSYW2",
  "key14": "4NTYFHapCoJ8jtJh4ajBfSYA2fvbrLSpsbxdVYVvpZegKieiQ39sywWg2XuG53ipzddTXv4iPqt6TtEfhuqyJ2sU",
  "key15": "5fJhFFhk4pnP6XoLg4xPwurzcdBzBCT8YGt4isXuYWUxXuhzuRuHbExh1doWw2P5sxgA4VXerNmDfAQeGP3BWgdv",
  "key16": "2LshTKRV6VvL83VcdXieycPCGvVLSAw6EvC7qrwnVDgMdA18qhp5vaaAMJ4NiUjvxTDshDLJnYgsXSMZWxsg55qA",
  "key17": "LbNb1pcgwZ2YAXF9RsPqidsfBT9KdWmcVSGYd4SZJcHLZSkxCg7WeDwunvJLECs2S1TsPa4nfjNS9CeMTgCeTqJ",
  "key18": "35CxTDPZSXq7Pu5yzmnb26Y4rEuTosRwJ3zpQhi3M3WTofs7PHzx6Wnu8mYYVPYkZiSHh6pmMhS9GmtejdUN7nzg",
  "key19": "47j7u7sD28TQZvUM159s4ohHkdVtyUoN3SBZZdwbxA6aoRY2NwLbWKq4U1DghyR8PTvjWrqgZ5Wqqw6yYpR6esRo",
  "key20": "rardVo87W4v5CmPThtSdyp9LwAjqTFxxcVicT6GCFtZwqfJqchVRqC9SiYVoeD7zUL2CgXZTvzPXu5qEsmKMVjL",
  "key21": "cqBDV3At7zNpe5AQ7FnbP3Ka8j7nePiCpVnBtEdFWRaePi6yvTzn99jBJXPqWE4vq2bQ6Nhms582jFPhdsttA6f",
  "key22": "3wxtEFuDNCMfQmYmV32YgM5HF3EazqYUP8JtT7Mqg49aQPU7p6qwAqb9sdS1B2aobPZko2gBNnCyLQ4dYcAxWA6E",
  "key23": "V8fbRuVvqyRchg4gEApj8F11phnox43UnV4hz1VKA2TBoea5LNvMyo6EGRZSZ4notESosaxbZW7fLFemtLVZMno",
  "key24": "2Z3Lws8magbMCdfxkffeycotYRfrmCkhudypU1QHbj57d3D32yXoGUFkAnY6R7oFPpg8bxCaxY3BCCTV716pKcVm",
  "key25": "52NNy2ZsFgn9tSNMQXoNyhy3o7HeG2yGAAznSJ6u94sFcJduuA4tBJyLbdh6hq8ytiEtFwxUkFELPXu5oVmYQPpj",
  "key26": "4Y2EBPFykbqLd1fnajR7YxVeoXruGDFhH4JWniTq91rRU4h3S15hcM7AxnbNKNVvTzWaQFUteA1TBZghBq96UgnF",
  "key27": "3ZS7seBwaF7kE8mcWpEY33uBx8DXCwqjJ1wEauc7XPqi9xQpHo4YDGzWQJ2fqvxZXN533cYDe97ezdsWBFDhsXi1",
  "key28": "5ecKYgWuYZT7FyJpHgEjpoN6LC6akXWHwAHDTJVxC98buQUNNx4XkJuoREndwMeS6kRs3J4YgoeAmhQongETnfpH",
  "key29": "51M7fyGHSmHutFbUNk6EEqMb8nBxFDL8EhVLoFkV4LrsbXsyo9VyAAU6JmB7Y1XMrCXnvJuHq2ZuqQuDZJvFdYf9",
  "key30": "w5zUMpiV1ntbS2xkjSddf6PQ24Hg4uzQujpWqD3bxUgv7VfvEeXRFwvfoxMTcMBNJSguw2EWewhfUwzPFbdt5bt",
  "key31": "4JgQVhMi2uQ7cdoS3ncirkiGgHhYGCmeDbVZFL7KCKts4CGA5BXEeSpUsUqZ8SaU4ATBw5xehiGJSHkbFmMPg6mX",
  "key32": "4xXPMV8SnZkZ39Pj1zoSX2Jfm8gqfJuDrokN6nxEJArBDAzx6gYqwubTn4E67H8gg8PWNvHmWXYgJKQPaZSUY6Cz",
  "key33": "3xXzyB2pnXhRW4APzEeEgGgxbL3vy38A73PYphBekhTPiYbRDQLzysWLxWtLxa79rrGiT1dmepNH4qsu9EwvjsWs",
  "key34": "4KBWkn6ycDeKGPwW1yziHLvBrMx2PJa8s3WFwTPyxBDAbXAPYbNcERG8KLvfSVfk9dqLw3W3aAm95UzwNmybRnTB",
  "key35": "3FmiggCD6ZksyFWpAf3dc2Xp3vuQUawWpEPK7ezKHEBzrH81D7jExDHB9KdsvnSWs8UotkBR9g9S9MheP2Zz4Hxy",
  "key36": "3qgmgxw5Hg8rUDWrTiXJt5E83FSSoBsjRxhnA5x242gYiRsX8AUei5fiCrqwZN41Jg2eThqLY529fPt9ktjTMFqA",
  "key37": "Lz3F5dxDu1nYB8eLMnmSn56T7JHZTdeuoMwsUngjB7sADZBc2ThLpZtNZxGusjYTuBvAb12fQ9LPBToXmPyajJ9",
  "key38": "2uhzRGQfeUYR6s1x9n5NztXjbxvpaChfwE9AC8FegoNGTFttpBHjfXoLH51nsL6to3dHmjPTPdCtSzrLLo5DDAg",
  "key39": "5tw1r9uF2G76DM9ahbiBMBZ1TCa73V5UKMiXx5FqYscEAXxcTNXn9z7gGSfAWbjewNeZCpfjgUyEwbJEoSZpBRmL",
  "key40": "4cBjGguGkuBp5jS37exP8gjTFVGnTF52jPPzU9NAwNZzsr3ant7VdzZEYnrmC3ABJ2MtCs94ZZtwSFucUEfvA1FC",
  "key41": "2uSQZjLhkKLhH7rLGcUFksmaxmCgr2rVqFgx1f3AKLKDXmgr3J13oJ4kTF9fDjgS4T1ae88cD5t4D9kEU91mwVKf"
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
