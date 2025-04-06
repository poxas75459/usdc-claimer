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
    "3qEEpwRJymsZCacdb75U9oYMKntGgwkSbjRpCiCEWwUSGrUuGj1u7fbpzGW7kVLoiK5LWjya1ia68uFc3CJtC46w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wbdVYrsfeGmq4YpArQu38z85AwsFVEkizLQqwQJSEZx1r4UWLhMUmbz4Ww21jF4L8nBiZQpR11tx2Cd7FFDBsow",
  "key1": "4dYxQ6kAcTYujT4X9Ku546L1dncHA8HY9wy41D51uJUs953n3TfpNXw3bewTwCFTUfKgPJMrcxgBrjpuauAmXPK7",
  "key2": "4hETjtzeUR4kJG8ea8BSKXxdk3esCxwxaiFZfx1mVnfvpUWxqtGhj1EaY5NYiUyYWkGAtZwE7kEeRdLnQRU6gVUR",
  "key3": "4XwJRgGz7YdX2z31NPkdDiUkCnSxx7PjxtUcqDXThzjnk5X96CuKRtmjaXtEztfzyg3GdhjDduyupm85ToqRvR6L",
  "key4": "37uXPCmThxKkFQ2dDELrJ5qDmhY1ovazRL7MXVhiPDyne96FfaubnYP9sR558FoMHLJkUEQjT29GHXmbpR4Ci7Qj",
  "key5": "4k7KVi15aVHJUNXCj3yE8ZmKjwkKrbokmgWp7xMokVN4r2cuaYWA3ufh9ZytAEGVMQHTHFaxxnqhY6mmV9KJb3Nh",
  "key6": "4tZxvMPGufM29KBK2Px7KHwKJ9qqGc1fF37CWWLpTzWjVabggpR6XeAJ2FSs5SgLYFnxN4LsNM6pyPqXLZajZVBg",
  "key7": "2QCFATvyRbrtYmLwTY7XndYUsCWxdTzkPvkQyW6yZW8bw3NWvv1FTMCaxmAUdjhCWQpXSvFDq8VaRopgWi77dewq",
  "key8": "BBg6pWLV7ShNkYdCWaHY1Sgx23EjkebhGYHuXA4FFGYa2FqRygdurSd4QGXkDsFNDktVvDNKNvYZtCAbsqygnZb",
  "key9": "32z6F52LjiMfcun9CpB4fF8PAVpu6CuYNZpLKTvweLfBnSvMeaMGpNVxiri9u2ojn2gPPdbgEwqe7eXRGLBCczUt",
  "key10": "4BWVpmoubmXxJYX3HAZipgSy3ydJfofCSzNFLZXJKKcwx8dgccGAi7jnZf4CxzjDhj7YF96mh5c9Bx19Mzob8Gnr",
  "key11": "5p7Pa9SyvukzYnidczU6hWzjBjGs6p57BjwAgpMWfRscZSG5v6YrSg5tTcDcyaZ2VrwNws8PnCNMSN2WABoiQWzS",
  "key12": "gMypDZQoDyR6ArF1khxj223fC6fGLUreQvvNJQNYFyA5vv9LRsF8mXHHNndig4553rxBkwKnbUzP7PH6y3mRYak",
  "key13": "2K5SDt2ysLg15W23iF2uiE8it9aZCQnhbhYx4K2tnt3HqAut4gzpreS4n5VETXgv7xXULChZVqMHZUU9uZeNhenb",
  "key14": "4E3yxZBjLjyzxhkuMNwmffSaDvTnRL6xc7bafGSbsMYWu23GoB8fm5cYiXbj5jcLqQdAK6sq9qmcoV7edpKbYzpB",
  "key15": "31vK5F9iKUgrpWysLbUktrsXhaqQCuGLnLAYyTqnZoPT37ZzH1ahq83kiSuooqDGLR87oH2xWo3BFWHU3vDaH7Zu",
  "key16": "5UYJkT6DEKc97zj89Bb4dgKwN6vt4de1pjRoZg2Y41WVDDFpjWWnbdDeQDwhTAYQUpH66Auh1abgcDkTCcaXoTMA",
  "key17": "3BRgwnX2uFpL8k56mAXrxMhsHtpVVCX82YduazMAZUVoDC4vuZQFfTjanhHjiWroK6duUzD2ShZ5zpX22dfLgEXz",
  "key18": "uVNrEDAB5qBccMMN8Zu5iW9ukF2RyoaCkNkGGsSD96cZkK5LTiuR9uSvCuQtYPt87FXcgV6WmNuf8s9vMfzXb1B",
  "key19": "2PvUC9dxtyWAELu7Te625VKzocGQBRxZ2h7bDNoivK191dvhREGrZ8W963BwkQBNt6tmA7YNKr1bsoiErBd5AAXP",
  "key20": "sjQgq3QhKGxoXuKVWLKcEdx4KZB8LMKoWwdXFYfDfrpLVPUiwnqLET3wHmf7ryZ2cZ17q6se1QjQ1vpobez4b4u",
  "key21": "2vTuXhpmvfaNYyYJBsTKybjXPp4z4bphywNwxc6Ueejv1XcHV1dsgPWy4QPDhsXu332mGdV4Xe18AtU5vdz8aKgk",
  "key22": "uteTscsK2ou8DRB9vYyPkJoPcjCfARqBUYkpvMeEeSZCGxJh9k8zM7Mn9G8bwjTDRhuF3QrtiFcJm5pHLk8hGoB",
  "key23": "2eYRy1ebSNStTDuUMJeuj1iBJyCo6xbMUbWGqw1z87EjqeVz4SXAPpA546fpRm1vHPhQgLY6o96iYsPMCHKPF6hM",
  "key24": "29QUnUtrrWgLzcf7DwNWufF1PegPUC7XJjbReNwedLQJjst5tEjv2AAH7hxr7oFujwQLfS48rTSHUBSMp1t69poG",
  "key25": "3BPQi9u4De8QEks6bZ6UUubcUaPy3DRtJbujwMRyyt3DrG6MwKwpcp9WY71PVzqnyVoH8qRXmngAcnu88ngM5gur",
  "key26": "3M6VwRVhBc3UD7BnCk2Qq6XGRmND8vSnhWvqbCCz767SP4UvBfgY8JQabfztVWYMMmK2BuXfHoH6EvJjd91SCG31",
  "key27": "5zR257i8ZFS4omw9cKxbfTCbX3MP84rfkRVrQECxbU1x94Zvhcgx3VdL1BGWQqm7bnxgArCsFgucnMAPAHKFwuRi",
  "key28": "1rfTktfuHJkuK4AK5RdrpgYZ337yFUaUFr3jej2zL4fobtfkh6Cwei7XnVyEfLxSCPzdaEgw6ZJ5yvLbrynbWev",
  "key29": "sregr5VGob1yENWA3Db6Cb6hcQ6jNA6CjFs4qrCqnHr8bh6UkYhjkW4bJYEvGE2STNxZYce9gHQjWw3aiubSpgz",
  "key30": "CiHPyR2oQyYdppZ53cnTWXXqs715jwNUzSK7MYLXhZKZEncADf7iUXV2p7xyoS3NcqwDZWjjFaZMUYt21Mu6Mp5",
  "key31": "3Yt5wAdRYV2W7gJHC9YX2eY7h8suUc1x62LBrS6t2i57nfucjvbZ1FuaAPsy7YyoBAaUgqGPAsUb4TiSgw4wKFH6",
  "key32": "3eQiHBAWnfgjPqUK3qdCEH9TWVhCCWkMBoibvABx3GgDMhVZ1R4idsZi2uksy4X4gPBtp9MYrGEMvestwBNhgjLa",
  "key33": "2mUA9dgpG2VFQ6WRmv9oRkkfdW4grPcuCFMZRxyW7UwfCKABfwau1bFbz43ipvuvFVhH5XWuFrENknnwv3jSCXgz",
  "key34": "21TGo8UbjZmFZyKEXoreeANFgC1AnqwBCYhSoD2aHZg8c9pQeoKGWmD1ZC8bkzZMqDjczQ4FNLGUiYM9kuidHizg",
  "key35": "3PrzyZfNoH1jMid7ormufbafp8XUqtda4t37yLcEfTgaEvRZH5DybmcEjGYEKB96u19krN28oRfCyZweHNpfvro6",
  "key36": "T9GDicxsRKEs4ZuudRs2T7RRid4qmm7vCQUrRDxRM67v26Yy5jjrWQPiprbpv74A9mK8bqUcd5z7dfakwX8DieL",
  "key37": "4SNKzEKr6yXhdmJrbNbFKbdJM6YADdYNhfXhFJbjT2rYe6DTLvfT44HzWLsPjhhLDoi9Vkujz3zPF6F4UEhoKKiN",
  "key38": "61k1HeW3k5o488NB29yaAqtnCdZooZLbdXL8DBXFK2CCvxjKLXVEaePHWmFkzHzeWkysmVqYeLtbdvWVChAtz399",
  "key39": "uSV8dNeRYovpMLdUu8CkuPLJuK1DB1GyHjfNKdKL2f1sx4JRjCPVprL8jJ3Ygz7b8tsREyBTDVnXT2X4PSJuLAR",
  "key40": "5RopEVWkNrJWgpi2VmjJyBRURqTSDgwNosAqBWpx6ZJXmsivsVoqYJVscgABXnmBWPrP1rDS94WeZNiNPsje9cKr",
  "key41": "4nfsnA188x31FUx9fewt4r1PajPArBaxtu3DzrukFb15VDfQt8uaR659kZt2tDzL6b6iHdeYgu8CqxiuvF7dbPyQ",
  "key42": "UZdDdKts9XLmapLskVUuFbxFCPDD2sYLwPJMpkrEHYhLj3ccx3yPHrSNXu5poaRApjbzSvRtf7SxEizApeqBGmg",
  "key43": "2pFb8L5VPE4nioVUgSCD8PaCXfoLrEA8EYX7zAo7oLkXWs37Hkoa7bLBuJuCJ9NbeUJzJN2QgpJLaXFPSChvmA3V",
  "key44": "4NL3fuZxYSyHFwTQF3JxvPPATs96DzJRDnWHYG8yUsTDoiJzjEiUjhfDV9fbfy9JnyynDK1qgmva1aNGEwvMZ5ew",
  "key45": "HBkF7KJD2czvNB9HmerniDZkPcC8JHdkvR5Y2DjbovxaFcjGVefpksSZuxKjdiMnDt6Hb11o9WDMwuUCYKZTW99",
  "key46": "TWwy7mQEZ3Xm2jRHb3bv5eb8MoxcnuvSaV1Ecp9t4yoHb5QDTwzLDX3KHrGsExAPjFaUYpb64hFX1Bn3CfEXYyr"
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
