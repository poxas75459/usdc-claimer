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
    "zYMhuga8HcS9xRZZ8XmNFqGrtm8DdbynTkeGiNkt8jYufeJ6mSzVg9jvPNNpEXfr3oPeDEDdie8FyzJgcnvtCf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ujqpdc3qr81fNRnaGbL6HQ4dv2c2ZacyajPpjGGPr8JJQf86bjTnrdCq6xPMphEahxiSm5Uty1ssvtZF9BVAsvt",
  "key1": "5t8FFqFjpsg3ZUBBxuSahBRB9eSPiRHQdw9QffbxBcbU2t3KCPaKz8mmQkWzuYvzmYokbBtSHstpeFy17yfzuQhg",
  "key2": "5C1fCsWKYeAMNT9DqPnmdyFxpQmCC1DhQwo6Qxn15g7o4CSHKZ73SQqodmcxqDVk9g227NyATGG7WYe45tKEtGEC",
  "key3": "2t42CGuMB1oQVjFtS7dPQVWwRq5iuABBoc6CGx9XDHyXZsVifzPFn8PhxLEnucyWGg7hdiSdenazG6nBqRHuttd2",
  "key4": "4RPDdGMy1sPzCkZnerucEnzkDZfVXEvtWJrq6CdrXdaSaJ6hBBboxWfEj87tKsuFJZ1iqU8Bb7h2ZFS1vgjHcaEM",
  "key5": "2yd5cNsqgfAf5ojz1WwPiCxbBdBYpxT56PygukuDQB5zASCjtrY2pygc4266QPaqzC9xfs9NeKrkLY4izDMa8Nu1",
  "key6": "3jYoh1xzi9y3FFTTgwrFgoQR7Y3bASuLfD4GcX1sQsUKvwKdudidjxgW7nBYdNN8i9SwxbtYJ7JXBE7LpBd4922C",
  "key7": "3JJvXmXktnNVaiLQrru4MnsYpfaPMHzBgbyVGRY6oQoryNLVc7RYxCjkHkGkR9kRbTuTKtR3CjgtZmXeKjaJ53hY",
  "key8": "3bng2MvrW8oSh4hK7BaosdHF8rqwd3YVhFSzun4DupBXAxe6r7aYV5z3GhUqG2737sfG2dhyLxa7sfs1d1129JM3",
  "key9": "4ydXjMNwdLxHsXTa2GSAPrZYLoiVKA3aTtPPa8819oVdrQ5C3r695tmaV7wMkdJ8URABrPFwC4zarzarCXKtNFLh",
  "key10": "5aJrRHCU7g1s8CsndDiZ6JEB57JXXaafag4C6YHX2DZwSbJDaBr1bBK2Juuod8rVU2m8u2yRA31grHNGuijrAhWN",
  "key11": "2CNoKtaQJDqNxfG74oQfMZwrUojo8AFwNQEZxu5d25abUMaNcCNaCBqo7kKeuVmc4kNrZERJgeaoWuCP5LbGaXEY",
  "key12": "5wLJJoKNZMSftZes1qRNTPQ5RnhCeGdA9Fk195cvRLeNNwJ1s8qzKytPGySrQaivCToQFZyXo3VkKFqMRQPUHudK",
  "key13": "HPc8yiX74neyf1HotFsMYRr9CT6fV2KAKTLhAkdeKPkQ6FHBe2zGS5HUDZKsiPCutmmFkuhsjSBY449JPrpnrvT",
  "key14": "4zHpBaQWhDJnT8Y8SSVPsWvyBESxhH1FRc5v1T75WiLAbY3nksgMjp6ssAm6GY1d581oaumqD4xxqwvmxAawyfg",
  "key15": "2jwc7XYC4LjJSqfaMiLqVnvxhWhFUrD5wkC728aUtPMvcZXaQsN7uNCRuBRYFxk9XKT6xQYQtngCmykzcadDzXeE",
  "key16": "5Y1qMqiCkG2XSJetRWejMFijoNuj5DX11cEy72D97Esox5jAP4q8pnM7Ln8YxMht8fHM2soqPy5k5E8EVoapA1r4",
  "key17": "7PAxpmUrU9o3oTmbhQoPFMjYEfbtBY4dadudsF5TxiyywsSpvQ1zoPgohaxymtLUS2wRryqhNnuF4k9hUGfCPEV",
  "key18": "3Yr2Yaix4xY1cHoXHxCQ836jT7L6kGeTWjU9w51zntKEH9UMBrPTp7vkZMmnE1jgwsbcyjmhH22yKikCY9qVEv2W",
  "key19": "o6TvaC4uUoxpeP4CLoi4WemsU4ZFFatsfrTK9TGfEHWJLVv2hGFYrUcrzSLMfCscqXeAm7oodMZdjQWwsFVgvZU",
  "key20": "3g2i8K53KBeAcVv5Tjf2RZkpZiadukD5qgGnSSuDD1iFZxCvu7XKvCdotLEWw4BXMWGBSwLYtSfymq1Z9E2YaWky",
  "key21": "3DZ8x4b4EThsNNMTBnKq2KMFo8VzSy3T6RkwWhQFAa5VTsUBxxPjdAELgANk67iBEZZLieZgzXovfRaVL3jaeZ6C",
  "key22": "3FDH6bZKv7cqhjQm93t76K7JYxLth5qBBWQmbTR1fbZSY2P56s1VasjCuC3Y2JJfg5BuU5vojgG4hafNnbKbSWsn",
  "key23": "2qqBQ2oVA8F2bwLHWujvKhdAtyaBna1stdAcoxdfgZNiPKUWShfYwDWFxZqMTvj1pEW82pTgaqDMN5bE4eDFn7fo",
  "key24": "4YgFrboV5EikneDUMhhCwqT8dgazYtXwz1QbFZmq6mfwtJxaM74Uv77pCLPxY6VkcEdQq3eipoJyuyDYidCFXDR5",
  "key25": "RR3Y6PjkiHswUN1kPgeadReXpiMA882for7fscD9Yh8au8DbuXVwqP1NmwP8g5VaZVT3ScwtKjFcCjE6iz3zdoc",
  "key26": "b668VCW2ZXMARMjbykxwAhNQwuVHa5wcKviZ9iBoA1uCdUqaST2D2CeW7vfVoPjJJVpcdZCBDCCUmz9SBjsvrsn",
  "key27": "3xYdBVYauAdenTGbfVEiBGJkDBQMsKCiV5izykB5qojJPTd57K4zYc7nngST9GZyQNbp2NcvaEFGe9wUbmjUbdiW",
  "key28": "3GwjPd5h9u7VDNtc5Y1CpoufoDMqobdFYMy5mhaGUk4BzMzRjzu5CGYC7Mdnqfnnt5YX2CifZ8AqpChB5C6DgpVG",
  "key29": "61kvDdTLjQpZqqrudsGfK3kWWzCLCKxUsKAz2jtozUAvovnHzc9mU97k5rGLXStyYWXmjKZgDpSBnXHgpHv9B7QV",
  "key30": "2c7CyNnoo2D7xwFBfJgGHAAwC723F3XJGiUjfjGoWhtuB3ZsqH4Phjf7QfMdntxNZTBXqpK892b9DWJ15gUmitw9",
  "key31": "3PYvRSZodeh2FyUGNSUB56SrqAyYzM5vWuRbhzkw7csvhpbHVa31N84UXhPFvx6fCiqEHrkvm2GZSVgUh2R5vAxZ",
  "key32": "eCthHaPLVutyZ2tDAohbmsY2MKEMSR4DvFcMFxLp6R2WVB9hWvGDKyujFsLnpsnRusSdeSu1s4B4NLQynfbmbii",
  "key33": "7k1CYCP4aCQyU25mgLZq8EbDvRkPvbahUhZaWch7BE9uGtJWf5A8KNWS788GmjuJUDcQMfYJrQeBupkNDsA69Mj",
  "key34": "59zRpz1Y5ViM9VJHCA2LsApPopzxSx3B4H6HyCsitq5rkFtGgMX3VjbwVEeeCHnhSGpNSUDS6BHwW4Wbn3oDFCKH",
  "key35": "2kKzh54f3gsZ2iJZFdr4hEiec5YfxwZBnEeZ2w51xbEJ9yRppYXrSNBNVBeme9VfnzWbDWC4GWYzpX3wcWScS6Sv",
  "key36": "f56SRyz9xjW2PMMCr5N4e38dy7GDp5tubbE9CFMLGhGhynkpc7dmaQZUpJzzZa34rw8YYwkkHarLYmJr5Wkge62",
  "key37": "bZcHtMNxmqCAEPdGHqVRkRzYKhsxCR1CbvYqBdrE56aa9Un9kh22HSxVQRoucxmfXG9ZoS2AKV4cE5nzLAcoVPv",
  "key38": "4JdsftYcQqt8JC8XJZ2UeV7npeJddGMFBRps3H2Fbmv6MaBAdjUBY3YUw7FXZ8236T1duDyNPmn2BAoEMsQCWk9x",
  "key39": "3qic6gD6hTab51dL8nXZbwVJsXrGUyDFopUPwLVCuZkyvgYfR3v6t5DqasexBv2GpcWM7gq1tyaztHLeKkbek8x9",
  "key40": "TQoPhMYMC4jMw7Wx5HzoCyDSHbgQbWoGEcnNfStiGGmE6E8kuTLpvYPeHizHYxXh7UJ1LvjDJ3qAA2ktRnT9Wut",
  "key41": "3svKKQ1JU6oF3MTrgF3JMWvLmPkFPNXXFn73gNhJkJgfsxffRgJMcHtmecvZoYg9NXVBbkY6WTh5QfHZrRxofLc3"
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
