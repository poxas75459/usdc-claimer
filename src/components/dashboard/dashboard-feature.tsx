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
    "qKaKHAB8c9x6V5Fr9N4L8fZRiML4oNHVVXMMbbJdGuuSHhuoBfofk8t7kZbfppAn6txGCAWUz25QjHPebHvBCx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hGrK4AwKZD8MY6cwNN36AkgSPEzco2JEN3f5fHab8yVmZsmPbALND2xRFWYZ9YyN9Zi1Z5UiS6NDAkQ4L9ruxqM",
  "key1": "2ReTnLW3Z33iDcWrPZhssxem5XENRsdWkDvuw6dU4AvHh6rkxB7EVAt62VJvt4MFcrtbuBhw8e4DdPCXYN9RL6qu",
  "key2": "hwop8bh3fFxkMYGaRQVrE9rf7Yp38oEprzm5H5SpvoStbeBjM4ZDC3LgLb3oyGEhMREX34b4gbpndECGZgPo2wD",
  "key3": "orzaLqiW1XdvBEPvbch1ehmbZnPiHmHHMQTDXGrZGncX3FSZAfG9KfpDMPc39KQUqEDJhBRvk5b4EYrJnxpTHNC",
  "key4": "4ApV1WfEykgDJZBSdRJP8Z4yTzSw91Z24JdwwmrggBTMZ83FLFSQbfwkKQymfz4fXE3DM8Fg1ssvgU52gUDneFVR",
  "key5": "468HcEeJmgQQRBRciAVZTmQvb8CZ44ktebeAiVLxpftT97NvjHsVfSbS6CFatknZYRqabMH1d7XrrvKLMfeUD7TY",
  "key6": "4zxzfhdDihnB6skqwxBpgoDeos1gMtEMdRPozDmBV6sDpx9Q77vEq5hhyRmgAoy5VgyzUCT7UvsYxekNycoKvUrE",
  "key7": "4wt6USErReexrieWtVvgLoeUcRettVSkF2jczGKbXxVed4YS5AzfA4qfYbNnk2TiTkinBWHbB9C8nM3aQh7jTbZo",
  "key8": "4SAbMhNuK44h65376APYfqyYzHKkLrAmgsDcduFxC5fK8zk3XWFzqoj1N8LVzZWhNq5v15ZDKjRBkpTxsF1PKe4W",
  "key9": "LtP9qZM4LYBXa32r7sVVV5wzxXiP7fAunwT6CG4cmWqBX84A3H291Wt3p1NLQruYhtzDkwyiSKkUZGrEHSxG9jw",
  "key10": "qnV4pLvxChHx1BADZB9AdMsUvkn1boCQLWnzY2XPaiex94dDUMYrBVt6GdgnqfFSth8FTACfAji51kjv8X2FFPN",
  "key11": "63DJY87KnE5QA4k7fuyN3H7qYkx2J6BkVLfsZmrXF1pKMoKQ7kUCopuT7bhkRDvaStzWGC1cVeuekxadsy9Gxbf6",
  "key12": "2LdP7Ysqv2tJSUc8QB3yrWeHx5uRer5FfSEpWoGrGHvu2WsbZbQcPJoANbY9aCkcmg2bAg9UMnEkxu9tjWWTZpp5",
  "key13": "5CoZ6L5QgkmVhjrq2QxQsSPCZKCw9YPiZo7YykGibfZzf9Z4rvcPFAmptHHEhaQjeFdnnZbbqWZ71a5s9Q3XMb9b",
  "key14": "4cf9XNu4RbWnR2z16G3V893j7fhwJtFYKjfTGw8UKj1ptJdANj12sq9ysDbMRCe9WjtLmHEKWD3SMtUHcKEQbAjt",
  "key15": "4bkva4jS7WV5G8eDPSLioaze5HWZcsMJVTa3DdWAZZyZ1SRdADvU8rRarGkN8wR7c1b1FhSk1goiZourHELaShkg",
  "key16": "3RFsDp3Nv3xXB4BwN6UgA2W8BXU9G2RcVrCcYgXVE2bEQoW1KqHazX7sYD8vvcV6tPrHKjky4t9voQkBMa8psUV4",
  "key17": "VYZVWd2wGCKy1d2i5tCtnA2qyvkJec84z5jJmm8T3tK1HtCYdUPxUsWADhtdHwXtJre8o35SMqJKif2d36F83sz",
  "key18": "3GybRYjr4vPbx8hxDrwEou7uetmbvFc3ggkBJQPMAPAysxnugPkgvC4pSmuWiy5ehcr8LHQwRhWMhmWcBT9s22Cd",
  "key19": "4RZ3pNmyYgHJe7QuwCtDUTbFCmVmpZ1G62Za237XJZ2CnrYJdT73fuhN9f1NoEKrgomAoyQTwqqW65EFFu8RHMek",
  "key20": "53t8M1WkZe7RUN8DY8MD3JGEq38WhpTUuKX5qbaFJZ8QFpvHzFVNgwLELXQ5QsQigL35NvpMB7SWJsQuc1awMLRr",
  "key21": "4DrzFiaezjHXXCYZW9EC8KK5HPqmvsV1Qnszt9PkDmjMxZFTmtHCEHLYyd6YLz8f6VZhG32uUfBaW15MxRmC8n7u",
  "key22": "5oyR2FkL2t2LruMd6D1z5btjnbbr98618P9repv7vyaS12JokgbTv3jVWFCnekJybCYGFUcbS2x1geG4y7xneLXw",
  "key23": "4ZxEam7vvZnBBf6SgcLMk3miWdw758bWUww3kBBAkF1nPKdLa59i4vTei5yyXBdmTFhYf4xKHWm6ru4RgBGsx67t",
  "key24": "29kbo1UuzmguLN9G9npxeY5CLzHwNBwoS2uGgz8NjCSFndg4KhKNcrAGhxQreguYWA8jbnhE71hMb39cggbnJpG8",
  "key25": "WsB6nmVsj2D6MppM11m2fCbtgtCkiT6WFLL6xNrafVS8haBpVW9a5z4aKU7CbSwFf1MGAzDBGHADbhZ9FQ9Cmnp",
  "key26": "5UFTrzacATM95nMg66iiP4igtco1GS2wKdmBqKHNhqt18Da6m7K95TfsWMut9Ha8LTXertJRDhci9ocRfXBiME6A",
  "key27": "4KQ3zNgpcFh2PzqjefuN6rXLF6Ldv9w8azgW6S9KR7KLaEkt5m9PUMMTZA78curLbPNYrJ1pejQTQWTAqFq4iqaC",
  "key28": "5rysHMzpDbPv9J5UzRt4kmWwd9RQiwDcNRzzKdH6ePTryy8QZ4GrpahXPgLoPmpYWmo5YYRrqyiRaFFrV8Uihcvw",
  "key29": "5DGwW9X7kKkkrcgZ3gwwwinxgUwHSYVUHTssoYAri5EqDezfxqSzzJQaJQ4zwkMRKhqxZVPZXqtVNE4eiaVjpv66",
  "key30": "4u2xiPfKMPV2cTwKC5TzShabodpk4SF9x3gqZVyBoxC8uirdx1n4y8M9sUWfFDmfdgBUg7YsMizHLUWV2roRfN5K"
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
