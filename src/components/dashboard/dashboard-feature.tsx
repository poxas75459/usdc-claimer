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
    "3pvGRcTQ5HQPxvSqNtWf4ksDXH6jhHDLxqiDmvYR77bKsakUrgKw7hbTB58iubgrBumUgcb2dyC5ECejKGr1Z7g6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diPcH126ufBF9pJHVG6DYoJih15nJS5V51zEmdXUmaJsAM3aj4fHASCmusNvHsZi1BwnC1KyeTbLoHU2rv5mowj",
  "key1": "5LTBG5pgEGpA9x7vzt9qgoYFCjn1RXj3SifZLRGzEUYoPwdo747YUgiiLN7zF52iVc4LAYXu3hohPE6U6L2ZRUSZ",
  "key2": "4nHj5NsR2zUhuy2ydF95oHv3FyzVYVazJr2sUKEQmYbBEUyVjTKh1xx4VVgn2DrUarJEmBrRbFAaxg7D7tKWY6Jw",
  "key3": "4z568pqwuFC8f7iJ5mPgTPW3QgcqiPQeaupK2LedFW9MBQxGBdBQNxQH6nnpdTbjdaiYKF7W3HuDmkGW2P13KQtk",
  "key4": "3DfQs1GgNcnXQQi1SxR44DNteEXyM8bp2GBdtsdGW5tYgwh8a38zLuy22tzRL9FPPsbLCFQ7PgyMZZ9uZ1TEUq85",
  "key5": "Zm7yLxTpvbUzxdwNbmdRMZ6jCxKeoH1mhPkRgpakyvug6EE664RvtrWKQXonTx2CjWsQS7ZMAS9RRyoXS1qv9TR",
  "key6": "5g3LwQd1P4bfAzqixRfREcMhEJeNXxf9aVCt4RJVi7FT2R3AFQsxbEBinAHVSUmYEXWkmyHYwuuFbuBszcsfziXU",
  "key7": "4uPvY2hH5Mh6u1zzJhEBYeMyZuAKyhWSNCZeKNn12UUWBDGkx3CW3riXeeFPDBexpa8y3MLgANKSXcU7R9S9RuKw",
  "key8": "D8t348sFnhcciMqn6QDovRqucYbx4ZbG43v8deNrkhBc9Cjs2Jh3CeHeddHP9ghpuAB6w4s3ZN2ggzGGjJ1DZnr",
  "key9": "5RLpoFDTr5qXb3nzm3c75htqioZVgEaX7pdWtMKvKPvys6ez6gFmuyGZLrfeUmtVy4fyFGMzpzJ2LyfC89BPRHhZ",
  "key10": "8iadqdZr7PdKwxL62dfjLDDVnVGTTBzv3GqqjZj7LFxEGGQUcSYAoWBPYypb92mhYQ2h3yNJpUFraXVdxM7EFid",
  "key11": "tvwc5dzrpxUpueJDC9doabp9HD8LmJf69AMVF4r5ReYdBB9QKkaEfnLbf7Sgf5uVMqyJpNWwW4PfMHAkipQLCyZ",
  "key12": "Y2aakBJm8N9BfcfEVMqT1aAGxZVSFdXSzJU2rbAtDx3bHAgAzCSgGcY1gzp2p3HYdJWHieWYcRycTnzwYnbdHUi",
  "key13": "2ReJDB3SGZRR1VUk1AqDDKfvaB5fYFyFzzjxZTQRAvFhFjH6SStw2W3p6c8Vr3MrG6AxeSnU5325xU4mooLRuaHq",
  "key14": "3wqn6mrXPTwLfgBQBaQ51eHzXe9ZoeNMxiEfWQo9xE8cXz2j23T8QBCrUtED4PUysbpE4GNJ6idtew2NdMtTKhfT",
  "key15": "5cgeLiXALnwH5q6pDewac8WnQRkipSrkmAjpske8Gsgr24WaQBKZeJzwkQDqafUkMajetuyK9JTEGYa6XU4hkoaJ",
  "key16": "2yyGVP2HnhEaP1kNfKfV88Za3dF1ARJvLSuNr2XaoFmqGu98Ksn7kudoDdAAGJdVz4rp2vkv1UZdFr1kM7skirc1",
  "key17": "5h6Tw1pkBBgwxVKoZGNkXG8LtD4xWj6zeE5WZAa7oyAbrkHi8NoEZZ8Tg4ZemtpFXdRfg7dytNVQXRfVie2oRQsL",
  "key18": "4jjPxBK8PwADNFJ5xbidAEzH5Buuv5HykhtqfSwSXTJZbYLTpddea82a6G8nVKdBSR3chhveRN2dHYy7n6pVJxea",
  "key19": "5Em61y4wG5nL2RnfLKX5BY7AYTAmMtokDp9SRgVvCA7jeZZR8UXaJnfUfQcYJFNPMhy11bK52X4viZAXqu2SksSE",
  "key20": "c4WHeq1ojhEUiWr1sKQCcpwpSk3MbYjr8QFcCpwhNJBvHd6SYppWhd95Z9zLXpj5RbJLXSCprhN4KEhdmiSD43t",
  "key21": "4VKAYF5EV4hrJ2im3W9UyRHqT9kNJJLRpLDU7eC1DnUfuCfd8tjMVKzjPZErvwLgdfAC5sMTjoBaWbnsHuq2zpHf",
  "key22": "4L1LzsWCBDTL5wi75SDULGG6jp2EmSUXemzvCQqjYq1hoZTRzxU4TmmihCzyqGBJmbani7mZtBBzfLc7WZTAwxpb",
  "key23": "2FGCfqKjcqaUF9vTxVD4hR3B6zMVoUQGz3qoWZPV9HFzZtzCMuycz6o31A7Hu2yhnDo7j4oKJsJfrYi3XBXMz815",
  "key24": "UHzwrE5NdiZPFjcLwZuZgsyX2ZZhgq1Si6YFWsKuMCoPTYmXTFj7Z2JMSvE92LLMM8ZkK2Kw47XqnX6WAmGpK4m",
  "key25": "4gmkgFamyhRnXCJHxvjxoAYsyG16AkQxeDSuueDHdJhK3Ms8Wtmjo3z9rrpbvwSUFKUZgwMYgPrE89Sfawtg7iVN",
  "key26": "4JDhnT2fzBgsu4GQdsxXtRyWgYyj9fKLFpKqNFN5RkXMV2de4SDxL88cqqubJoDzg7DE6iEankZj7k22HdetJ9Wg",
  "key27": "4D6S5BX91hHUJoYz3g2zKqKbiQqGsTXrEEq8oQ6ryABLpY7KDRESoHQE57nKrKagotf65j4KYJuGEk3HNNQW6nXo",
  "key28": "5xShDWb8bEfJKPS68ooQ3ERncwKbtzwkbKqWfJCthNp5ivK589Hf89e5QA2bVY4drqfHrFVPd2M83UfSHrt1J5JD",
  "key29": "2HFYQyMHJ6hibLYzf2z9cTK5PJ21zYQhxTtbJpVuSYe9TcJi4boZwCtgVzmw5TgDofab5AfxefAeMf523Lvomkds",
  "key30": "5Ubxuxkj7xmGeoBUBzoJtJnn7HJWMxbhwwRK8Hd9GGC78fegyW3wnvbi6jDZeGA54cs7wdLhxGhqxjfJfoLevG8p",
  "key31": "5Ki2hzVVobdNyfh9z622GNNrh3odj5oGEuSPcFD7sZwJ7mzeEsLgi3wv9yen56wnkCde9tcd2BCCZuCLcLpaz6fE",
  "key32": "34TX3GWUUewKaigBL99riiVbtt2Jkc5X25nd4m1bsxZcRYkcMfPGit9disdrDoQKc5UKXiVdcCPdsxqKbQcDxKGE",
  "key33": "5oLBQ1cpiQ9YJZpbE64joDo3Uzg6vReFLAY5Gn9BSZBVAuQfAhJWyKQDmbnw7pTkfP5pzRPCKGvRvjjgm5KDQ3LV",
  "key34": "35Q3HCYjU4xRkrYAuPRmySme4aTWr5JtutWB9iCzsz27ySahuC7pXxF5czRQDXf1Tn3gz3WMDw3fxWSu29yyUuJ1",
  "key35": "2esuRoj6hpxtFuiY8XZi6hcdcXKjRvvH8QdzXo9LJ8fH3uyk4Yh4pUiBxTJPxB6h2Y1b2g823YSK5KLEbmxe65tm",
  "key36": "yMRb1D6K3jQPcegh4gLwN2SnNtcD5d1hznQ1dMBrbFFLP2KuKZBoupjNM1PZJZYfnDL6fSok62MdKREYA8FgYiL",
  "key37": "3HttAxfgJAKHrXw34UtowKWYEGioUTEoB1qkuMBFZYJWeRRfLmMpd1M2EK7an5kxxaMStD7m5JvmsecbivkrBSC8",
  "key38": "2XQMbraw6WbE7LJyPLzS5GgxbUdx18QR1WMZcfHVQaEnV7sJCH7tCfSh73kECwYik1r9vEWPsCoe8JE1fTpFHURd",
  "key39": "Fz1xkG7FYyWLd58sqvxdbGNLhoUdCnfGKP3azN7L2N8tPsEDnNgQmSoNjk9XoUruAkLHU4oCwz12FKECv7n1BCf",
  "key40": "2jjRUSxEMrWp9B3EDcRYQhpbbsx3bpRKmVcKuGPtSYq42UJWShRBQbKkveTJNM1BhbosQJwTc3cNFaW81SEbepcD",
  "key41": "2171BmW4Ud9KxZdFaRsakVpeXoTXrW7RSpwkd1VvKJNpsDSBoj8UuRxbRm5PQW45Zz8TD6xqnPmyM9Mw9xePjEkN",
  "key42": "Gz5qzcgm8GXwZEnjrxrCD9AXoNpoMg7TNXjXcocXNdYBuABfsdQrmoJnr9eqaz8ieBQ7G95JKy9g33Ph7PmMUgw",
  "key43": "nEssPDW5UvAAWKqSE33Ngif5rdewSgnSx9GHUwc2yxnNFZ29QYGxQtAyeRSAGpxgP582145Q44vtPSGb6gsDWnv",
  "key44": "GJWdbattWfuMbt7vYAP7X341TD7zwLWwyJUkNwFdqJ3okrFwYjhYucLDN7NgMEVZDVQjfuByqtAfgmh7RZtFdFv",
  "key45": "34nVoseD6tDMA5e41kAche9etjg5ngbBAxET9yRSbEkmVbTTJtch4sg4TqSZBLajhhmi3dweovJNCkTwStZg12qp",
  "key46": "63EFk8fUnNXJXdTLrkYRhtCCMbkqpQF3kBbBkL6LpsjQPgXcEo4oWz3A1fGoZXxh4iPkperA2FipKJiTqmNDqfq9",
  "key47": "cusWwxTP7YbpJrV51evJ7hfJPMSjRvPhn4KgdikNjjVjJzD23GpPcH9v4TQWJcbbUNjMWEcsYJ2yBn5StVBinDi",
  "key48": "3f3SUYj36HimCQAoniPujYq9egk5noc7qKS6YGPJjLXjt9zUm1r4K3hix614D6A1VuSX8J3ss19YMaEq2LurD1cA",
  "key49": "2TZiUKN4MqqVVddS8e7tmJBmKULmP1iePSwshrpDuscF25cBXqPpXWPi9BfgELqgWESknkG4Uk3yJQ5WMVLptpp4"
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
