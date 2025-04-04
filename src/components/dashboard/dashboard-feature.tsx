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
    "2ZKyAEu2TJESniVNof76Dv6zt6scWyBF4BKj4mvG8oysqLjNWv7tWsCAcR5ZrxPyCgK9Vg3Mzeukm95g57L3HJxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNKGNzSC9RPpNvd6mCPeyAc9afvaCEb32Bg4BjaLAbRycpn9fnHp3SUWYwYmUqHH1KZ8pNrr1KJJuWRE9pgWUST",
  "key1": "ySPMD1KeLyAC6wdJgFJua4LpbiKXWJkGN7grQTz4PzuunhYgwUkXjUo5Y8TTXWefVSU6LdpgnMcnyEGS9vza7iJ",
  "key2": "2s9ShegwtE3Asg6bD7pXRwJn14V9ctYg3WRz6ftWS6hnM37ivoZetHiW4YRHS8mPkLdNwdf6MFtbWsPKfmSoEkfc",
  "key3": "666qHhgLzjyX8QU67fXDYQpwJVi9pHsvEKAceGPruPzxnmcp2ZYB4oCci8PhK6iWsoJrwg4rrrduwEnDqFKyUrJQ",
  "key4": "4cQYXCN84GsggDV1vpG5uDneKK5aZdz9gSQ1ykgcrJwuv8eHxaZu1bqLNXiy4j85b8E6sGfQCURXgPUnT4UbBZtn",
  "key5": "kE4f4KfC1yz7eGTrhxUQSoxmyyWnxhPUQqHe2Y4KYrSedDN9NLkXdzg8823j5SANWso7wrbwuivuR8jBQX5BMgh",
  "key6": "3KUzmZ6zhdTyTvUHysDwXoj3gRbSKp4UzFU4pQUsMSqBLbT5Ur6PiqH6nYMLQw3dUpgoQgjEwoTCxaAZaHLdqoWw",
  "key7": "4cZQS9XvVfY6WvQzLgPS7pHLU3bgXCyBzPFbieJMKhq1UvAHnFLF2LnRaqh8tVPwqMaDeBE2uSYCxhRvTX3hbHih",
  "key8": "4AmNF2PeqCanYKp7RfZWx6nwDnrWrgY9Xxrcn6GwdA5Q8iCVcUCf52ZqFEFRVWF1BafYNzJp2hHhiBAM9pnKB4D2",
  "key9": "3PXLfNe2QkGtTwdahZFMguH17tBucG6Qo63gtn5jYqF2APhF7NqYPK8gZc7rRYdy9KPCufew7EoWahFctjxM7Qpm",
  "key10": "2u6aqFLKBozSuqQYm5YMFo5C4RNaVU3DV6AF5Actf5kAv1rFsyNE1TGLyFP1cioPUfmdmg3sgDLJkKqndbiExVrC",
  "key11": "2p4Xrx9kqmQKBbzN72Jp775nmf2rXuyh3umLjhPJ9p5DAi13USRoArtC7KKB3gLd3vw3bPLDZoMPQRbdAYponVHC",
  "key12": "5y2565S3cnWZQyfSLEKcuuPeJBCAfoYHnZiUR6YBAseZHep33fyNkD3c87fZRntHdR9iQBKJYgeWqNAAyFrMF86k",
  "key13": "MvG4rSnToeWPiHV7FM1p5XJL9ieGQ8tqx6nYMHcke3nGHUmipi1GQ7623Z16AuTCBvBAQGiUgxpq7fYPLNQnPnk",
  "key14": "32wxwXE7X8jVTxe8FNKxGzmo6SfgUwA1caqsxtQYaEaSdtPtsRhD7tC3s1hhoRExfshJ8a34nHJVh8bnfChbYtky",
  "key15": "wicVgf9MrEKupiKfv1XoZMsghDQ6N2ZHo3uN11Ai5H59qHdCmbTNzarvaGoVL9XuQ16hxy5QiP7DgMcNPP9M1M2",
  "key16": "5B1BMYykCuWbeX3JBHA8hbQMbZNnMWbHpQsE6baeCnA7uiro4QznQeBzM9YiBLHXH6oyTNLDyqX1SgAY5QQ89UUJ",
  "key17": "4SyjzbX1WGYeSibWXmfPswofw31qFwpEanCW8jGBgn5fpEajnR88NusQsgFBS4UESGiqbKoNFaCUMaiRj28BXDvA",
  "key18": "qKzJxkz2yeWzshu26C9MgwLPJg6dkxp3QXozXbJnYQCqsUEkJq343bgkvDqfEkLfTTYh7d9QGiWTp3R5VcqfLj9",
  "key19": "25LHfDQwmRQ4Z2NRJvoYuZgeLtvMYWaceSpxCsMSK79HPWPS4jCQVqn7EcFRpvvhsLJQ2ufzRXSmrC3bRTWHLCS6",
  "key20": "4JTXsAZEL71fLxvctgutDHGugjPJzC5Hg5fuc6B2o9xAex9fF4pZqbLf2h8C5XoohgqJy1mwb2S22KmYDtnzSa7H",
  "key21": "5R2cXyVGgYJSuV89jRJgqdb4XL9Hvd4vnrrB4Lsc24Y8eiTDZBR4J1tLgvjZZ54a4ivEwhnUV9LNKJGZM7QGoYkB",
  "key22": "4F7LyJotKmjCz8xkJN4NLWtMM6ujBFuQocRF2rEoxvxGZcgyMNrcuwSswaBHbKFc92UKjRGzdfkV1HvUsPBqJ9VC",
  "key23": "5YcZhmNfaKK1h4rNa79hWXzebpQtHnTbxLmJYHj8YUPBMi1HyuwJkLeKyJMjrFF3AYtEo8XKWriPW3gRvTkpEiTi",
  "key24": "3XcNtLX8AakbnWqzEy2zz5Ctg1WeaYAdRPwWuNi3KyyBfXozh1Sakz5ZvTN4BggF6yDKjVurvttYee3CensbeUQb",
  "key25": "3R8s7qE7Dve1Ld3sTzSFBdEsMb7RhBTiHJ1UdVc2VfZV2kqXRUxokd2wV5SFEncpKfLL5Z3GooCZiDEdP3RQ8rcX",
  "key26": "5USKNbHvqNowkM6Zo8VpKNBy2JrDxyQpC9vVKf5pv8oP6q6sbWuBB7meKMyy3kYWAfGnJEmtZXT3z2QceuEjEwR7",
  "key27": "2dTJEzAFF8VVepngMfBC7K6YamGaDKNrozEBaTVZdqqiKqoefj7JjGM3hnTCzag5f1BvMDkV4Lc9LqPC151vBq8S",
  "key28": "3f1zemybong5JEmgk2NR1SvzNddGPe9viKjuzWrEiwNsDnnT6Cwzh5brnJytUR7LjzeWmry9Hqe9S54Bj5HrQp7y",
  "key29": "58fdU7Qmo4ZbkWQPqWgKtJR5Nn3AFmyfq3bbrjV9PEXVJDX4ypAvQo6Y1bCyt1S9G3JPoqmKwVwGnZri9nTyyWmb",
  "key30": "5Mbg93DYSgLTnkoSJZ41hcNHzVcz7mYzEqtF7mRhGaiJy6jTGyjDz4aucnHaJfdSyW4HS3oZ3iw2f3TAXK3hfacz",
  "key31": "2XAq6kFCWUsxcoWbqDLdXSkFx1WCxbAw2wN4PXPbgbe1GM29AfLX5ard4DkhJyTpX2MMpZD7pJnQpF1AeUg8zpFX",
  "key32": "2MtL1CQ2TEAoinVdJX3wQhU2JDpBXqUcWwq17Wr2fhjGwYPWUEE85c9fb9QoDxzbtBN5RbQhzUxo7ELxfQTjzV5g",
  "key33": "3wARXajtiTtN35pqbuD7pmen1k1f3KNJVECcwQtqmP5frLKFtEtWjoumwLQEUjGXecTiDZ4njpzEe9njZoJdbMr1",
  "key34": "3ywgboj1Pcu6fW9KBHqY5H92bpxqv8J7CS6ufLmn3RTUvPpnQZ3vaEoC2w8EZw2zTzKP8fxhE8rrwP2NqeH76Lkf",
  "key35": "31AR5pVjngU31ATKEasAGBq7HJo6zKyzRZ3qsR35Be82sdR7A2tpUXgGSNVzYEDCAQhLAbkpq4mGewgHVuB3B7cj",
  "key36": "4XA2vMnUsgevdFGdWN17nnveA2hGKHDmS2c4RTNoS62y7iVUhdNxVaQoHPGEoPtdrZ5dsypCZwjndVJZQxhuih5f",
  "key37": "5CDAT225sCpMCZhsCvJWLDvRAuTrJ1D1bXtNoZmff9x3kMiTNX9HGaxxpWLebixwny81ZU6LezfQ5QowoAdJbNDc",
  "key38": "32UnRd14eEHsALi97H9e933VkAinrJUFprDHieRCe7qyvwy5arQP6SsMDAi5QBWdXVPXb96BgFjJ494xCCH3XmDf",
  "key39": "4pNVJuV9W33o56jATPBekRhwazhPihjbqUGZgdrEhLyCJvjCx3NB7QTg1XupFSHRrJbxRVLttviqJJtTRVLs9NW2",
  "key40": "2Shtv6HQTE9J56j7CXvCGmy89TdcEN7JM94ErMvWZj63tZ4mc2KzrvcnPQL6WbXRtyS9Q5915pBCJESqTS4X7H3L",
  "key41": "3528o6c4fYXPDNLiu9dQiNFNf4cCS7Vvu5z8XzBo8VzcUMby3fFDMTor9cbXFNwFrZodsS8ur3Q3xsZfUM9CyyU4",
  "key42": "2UUKunKKhdhU3Q5A7JgNtHERY54LyFDc4N1axwTBSbfMwKXukB7TBBYPo9hmH6iRR7Q9ZHjCjaESCVUKLtjiAHa1",
  "key43": "5L6e7HjT8w5Z3FEFP9WeA8MYuE5hE3Bya7ASNmg2f8XZWu4hrR2gPKPsdgyj1ZGzEwwMWLneLhmY5Bt1y6ddKEHV",
  "key44": "NQovQrUq6UJhpgVLJgwfMnKQHq6UZBx5bAip2ewzcnxK6NNicCtYxNrqGH3u2cg2mw8RT4jD6PHP5Whd8336N1E",
  "key45": "2H3ZWSU7GsPF4tuibqCMdmdUUkeB8DGmvtjXJEKUbbWrq7ZpcCg1hjM57njKQcy1EC64F7wkjGiFLnbeGom2koSz",
  "key46": "5UwdVHC2CDEYMGwyM64E247XeTGBn1CAX1RgpGd1tWwLLgRQg69k5PwPQGQvFavL2a8b4NKkLQXpAqajBXPgWpSX",
  "key47": "4FT2PBHm8u8zLVPUnYwtZBRmtvkEfQQucgKR1WhDKedUANRpyraHm9yjQbAZNoFywDDstkEnZZRXk3J6VepNR5MQ",
  "key48": "2D6GJ865QTL3xq8KQ8TdoSKTCMbkF1Pvu2fGGR2tPQ4uMgWMW1qFhHsGG8Sv2UogKw15q3tubWGooFNVMaNa7ijv"
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
