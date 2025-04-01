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
    "5zPwnWY85b4FLdMHn7LCgtSReDVt5KSEZMzDKwG4CQnAZUYL21iwdJfh9c2QDYu5XT4dDAPmGU1GokH9ZoTteWK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66K8z7r1xzKfG1cHdb1iPb88jZQ6Jb91StPit88We7Aji1A7tXZRCpjEtmTCxtcouCznoo8TpYuEPD6bobsmx5ip",
  "key1": "5QLocpdgHaDT4WJ2zEMi6Un1HVTVriaxjz9DDVWv5M842wzmbDBydd5vQDfG7WF7nQgXFuLP1Ghhpa4HxAbDQYMx",
  "key2": "2vZi8KAG2inH4v2BufDmnsnSg5suiUVLiLZrS5XXZm38my1oe9T5AmRbcbMjbCEdXpuDWj15nRV1U77YWwHyLxPy",
  "key3": "4JncMaFPeLCuiTD4WUq2Frrjx1wPnATEY69P3He5mkV2sXSdT7iMYSZVYyC8tdignh9aZ4yg1HeXcqVMwrf5M33o",
  "key4": "ThtH6yaMGftrDm6TLpkcdodiuNUic5cGBtwwxb83PGTPDZ4Xb71VuWsGExrQw3hBgtqNYojFaMbMsh6P2x1sQdn",
  "key5": "8R6n95LKgaCBQpKbXkyFU2xzJE2z4orRMUAgW2RQkCQz93dbcN8hsYz7sfDwhmUmeb5mULRRv5pbexGuNt7PkCx",
  "key6": "3d4gnL2QW2Bqrh5uU5PQLjRB8uwhfwodespn7bb8MdCXq65qt4xWuxV9w2kd7uVxoCp94tjnKjzFteBTTXoPP3DC",
  "key7": "4RJB621oUCzhsDhWZCuBHekyCptZdoRViAdMiErEdSUeuoFBAcJ5RkbZKFik1ekdifGhuMgbzGr8VqA9N56EL8Uo",
  "key8": "4pxV443PpNrbHpw3yVaDLJ1MyqAA2qiLRA2EwnkznDgvvWzfgrqKezzRpdJrEiQ9B2ZWV5m8hTjSktDccwPKaw6j",
  "key9": "2wHxG6JZemfpraGhfipc1v8o1m3J9HypJb7HLyVZySQscTZFU2CoBeT7eCqRiupQLFbs386V1VCTt24jnxeV4JqS",
  "key10": "2kFvZaNzac4DiiKaehJ8CFJbi1sjB3Pb2eoCqFV9VbDkp7AvTRpzSnD7ebYR7jyiy9PjA2hqYrmTywHepPYLcUz2",
  "key11": "37EJNG9dZf1Ef4JyQBWUCrQR87Yc7FcFTry4hN1vjXcUnuQvXvCBcpeEqgu7EMSx86bTiNqzvkocK8acYmqmntLm",
  "key12": "3AJRRHCyDkuGi8hZV5ujCZbmvSDHmtUPBNtfSZPfRgALMFhsbfp1pggswLXNrfCdAAuUD7cXMWWGz3wUXWNCMLpo",
  "key13": "2PBngNpxmp9jP7zQfeJLtubVGpaMttFjohVmhthneM99aootPVAq1UsXESNnEZfRADfAXURbk3xhy4eRzMzTkPy2",
  "key14": "38DDLpWJJ77dh5XAeX5HMGYTXY5mkX4MPaavz4isbwgdoKdWAJwz6QmLZeSSLLpCXFD1nsUcx9byHqo3Qx5aXYN1",
  "key15": "2zBqYJFxHnMguQEWi3sKFrjSZfdan8cUrzcQTn5vC7qbViyJbpFB7bdTBnyyXhCJdU69KoZFKTxmpu6BoW5Urd87",
  "key16": "QNEsyBvEKnPop4WKeu6HiQYAw51EoTQvE35kCxfSSbD2yzMnVAaBh8H6MuFkhBtxgu78Fjc5nkjwE4juCc15SFT",
  "key17": "3UMcqvRCZ8ptpxecvcKg1G2JNkAGHEVnFzRRdsrpqUuoQaQLUKvmkcaYXes5ZuN2jKibbbUH8ysnQC25y7smCidN",
  "key18": "5FAYzR5wJPyDynNQZzNDMRBV9wQJdZ2N7LaafaeNJ7iPx4eVUVFrrmpsX333bnPfqz6DfpsT8rjq2d8f37kRWEcU",
  "key19": "4fnDsFvj9HTS3y5YGoiQhNp2gi9MDVJXBxRqp5TAevxBgaeNt3aYbMjFXCrFEP3L87Rdx8d15QwQEh3oNPqRvwXC",
  "key20": "5fumhcMpFZHk8uJbv9S6tGYrB5Kjn7YEsFKhudNsX1qGozq2UsWWNebCFdn9fy82WruUdiRskBVKaVfiWJYcHiQj",
  "key21": "2813kFyP6ufucdj8yTsUEALKxxodcP1ewhAqUweSF6mHnA4Hge37RvkCBxrA7DppkLb2r5n9vkb3NcWchM2toz1x",
  "key22": "LnJzeby1U75nD2DonPTcrS4y2j3dGcsHz4kkGrXvnfJbRYB7MzEwrhzKAKGLB9jyY4Et8knc5AkpkovH5HGJgCg",
  "key23": "41dVksAtrXcGFk1LyYEbE9tKkkp42GKCV8H2WGJuMyo8HXSegR6mUSUWrx3VeKfMLrX8snqLWvgZmUnB7inBXrSB",
  "key24": "5JmxAhKYG4F3Y1Z6zA5P8R44zt3jnjkk8p3CX5KpRy17mykaYgBBUeafLfQiHETDNVqh3Tfx7iwWEtfvspuUh2uc",
  "key25": "5S5qo3xquryg4vogfQXM6GxZrycKGpajPNzYNesjNZjupf1oBA3CGpUMChVmN8FvCrRcAH9EHFsosPnuSY8Tohmd",
  "key26": "2ZzV54dXp8WcTjHc2a8MNXejycu1kFMYfYR1H9zLpwXJ8HrsNggH9Xa6VaJULHehMfaWz64nLrNo9Xys6JLVQN7c",
  "key27": "4ViarchqTunnzKULcyZfpxpebVn5JwSj5woG8yRXP2eeMvHR1rtEUQLBJuMthjeToYsuMZQg8LjnpScc1bN5eWHN",
  "key28": "46uYXRniSWisxMHTxYTTX8qXiY1DVdJcY2PSia96iXwwgjbVFj7wTnfCtFm1PrKHjtRfZXNEJYPhv5fDJhL8wac",
  "key29": "52RgroW8AzMqj8iRViv4BxZSNAuJtobnj7J8vFrxXNjshXzpeTed6d1rtHZAASuACjJUY6em567n5KD2cF8PvVBi",
  "key30": "4kYkXo91UufADWDe1U9BwrmYJmKUQN6PaTyuwnRM5aViLkDQKVG8Ygn1KxphARu4ErVA5FZ1FWDvzqPPrPd4KQnN",
  "key31": "3mhovGYj5q7DV75HGr3uc5rSbbktDK6zpxSeWWLA4Y4LnG72AFK7GUfvsSi8XGT2AXhg64EH4AKYy7mXyzXzNERE",
  "key32": "3HERcerN8x7hg2wjkC4C1nBV5UVwU8W2oWMPRxkafPzAhGDQnymYP7VNmxkKWdxYSUcDt3SHDyorEpZyGP1eJ26d",
  "key33": "4o3o7Q2t3FhVouo1nHeBybd8Au2it1AvWHGXLSGbXZKyipxjpQUN8jtLv395aqVDhNuyqjJSPTT6Gu79MhoQ6Ztm",
  "key34": "35LZj1R5yPkmTEWN2Ee1QWbYgszo5eKp2PvdofGK7ZgFeSEvogqgijFtDctJbSTmBQEh5QzNkp3Aysr3hwoGq4eF"
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
