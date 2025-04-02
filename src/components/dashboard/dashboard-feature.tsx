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
    "aHNEex56D8VVTSNHXSMHUjkJ5cosZuzudyv6hTHdBhEZJSxxqE8rteF8gXDfoKLZKTjiCdQEc4cbLyx8y7vrUyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7RaH4Jp94PSELU6cUbwR7SjDimbRZ9U6LuwgeRmPwejDRBjec8ybBbRZSokUacRjnHYSqqwxQXyjwVYhpJdHSU",
  "key1": "45Hyt6ga6pPo9yAfVMy34PsdUZsHpNd4zHWrMRQQwoQBhYMQKaH8KqJy5wmiTa9uqJtZjp1Pf4vca1YMUSeEiB5M",
  "key2": "2zjQABKr2SFAgKrm8tQRCeizUynJXWkTVfFhM7ktqDewCMsMtKHCBp8wGX7uojBJEdborjA2p5iqURN89LUN9gLR",
  "key3": "3f9BLW2KhbkDVgd8ttWeNW7qoLZL6PR1CbdcJoZ9sN2juRVhHuGkvdfXeyVmwRJbJvt7WQpRSZv41UophYj44NuU",
  "key4": "21qcJm279rcFo68duCfSp6ex3om148eY29iYYrbwvAQooS77SavdbG3dz2DZnVSNMBcgvCe5AJ1xXfn55LvfP6mg",
  "key5": "5S63rXVZwYbNmZ3RcBeY9vvMiVehEWAUEpB9YW2x2ZNPjEJ9VwZjbaZe7swMzGuRkVdoG9fQ5yjKq8vJd94fovd7",
  "key6": "5nXaLxRGhShGJkAeyEzwUAYcoRoeQ6adnghDq1zKK6EgpcoVnJzCuN8Wnev9DGNcscQM1Qg4FMv3mjw18pzo4BzS",
  "key7": "2vN6Bgj7N3uyXBHVh1bEm5XstBdQUbqDpry79BsFDw2bmntePm1xcMD5n1bjHfQHVjtkBFC6uNRe6dq4sfkgqB6z",
  "key8": "2Pj3JkpL7TraVt5nFfqvNadVNGrWZw5e1FZaiCCgdqoPq6i4TjQmbSSBeVw1CkFy589KHBy8nfGc4kfHQPcGRXaL",
  "key9": "58ePYzNJivpMpM92RDRAjGm93ZfJhtd6H8q1ax4ZYck1f9iMrq9DNVz3VRL6eXN8DV6GNdEp1N4JE2d7LbzdacZf",
  "key10": "5xvt8HWZW86YGK6NnYBwqyCeJYBcNLtRvgzJdZJfCj4Nk3oEoyX9c1GvJZNy9rwXKfLNcTNDVaiZb4r5Nh58R16T",
  "key11": "uNDWpR2CQRGyrv2nF4Kxq8Sn27kVSqqaV6uMr8VEefwJLBGVT5GNbRc7quq8wNfTGghVh1617m57EDrGNxebNrm",
  "key12": "4N1VLbFVWxgSDU9xRS73kES886ScQnVZYwAcgnQsXNiwDkzwvD6RpCaGY2PDgdsJNQWNqKnya2qFQWAHC4B3LBAZ",
  "key13": "5MJo7fUiiQpp2rCchampQJtQnrdKgX9ckRNsQNZEu3mAkDcVVSxjHxxTKGaGUtk9JokxG2KzXYFvj7jKPDeHQ64D",
  "key14": "PkmbtZesc8CG1vdstC7GijHtu15vC7L97TU8D78hiJFHD58yk71Q4UhwqFa1bu6SXggv1oR9BP3SbvaxCFHNAqn",
  "key15": "4RpkXFgYtepFK1YBREeEwfBb2ocgePso9efHB4etjfKgUVpxksY8LNPnfmSiTzaKtnBLvRnfjQHpbFrtEVrUh4JN",
  "key16": "ei7E4iUQ1s4PmbDGmn7Gvr8PC5j1HcZwcAzaKhJ94gt6hDnYpuAdwaqCxHAaPC2nNWozCREn5EWAQKaWXPcJwVT",
  "key17": "4kooZoW1BXMNbgL3EcRgMcKAUsDffufZrNQ7sbGNvSvUGb6hnxttprQLVsUsSYVHTZDq2rPizsjS8s9zYVvB4wob",
  "key18": "62eDPDYc7ArVgaZm21bGiwHEpQ4Mz9L3tGi9UaMKHRb7bopHmxxu18H8PqDapAwHGYmjDnXfjxSC4NHCbXFNfd91",
  "key19": "3SmJPrjiUT8KrkFh9ADDKQBHfYVMRtmgAP19CnzpThFyPYHN8vtuSEbMcPc7JzG17oBN7MEmo9kmNkii3YNFqXbv",
  "key20": "mw4Dw85JTRLQKdpEM7kZAcx9MxFm1v3eAT8XshpPqezej2bb4F4eNnuT1qrfHSFLQjA7UKxzJcnFM4oSwEAULLe",
  "key21": "35fTFmsgUW2n6MNK5My4sspJXiqW9atjM18LAuS86WsNyqm5AJK3whBhiicrVtf7a7WsSnwUVY8c7fW9WFhcsW5H",
  "key22": "3Uv8Ykxtnq9rnUJXCBHo3u3n5L9qbfckNAxJ75fkRnsAHQActgadaXpEfjLoFZWNRaY1RhHRY839BLs8YWo4AzcZ",
  "key23": "4wqe7frXUhSWYQVjFbdjCXiHkWaGnH7gwpJh55DUqShsBJcaAqpZb4YtcaSD8Eao4mYvHf19ParFVngdJFCZGcQ1",
  "key24": "55jZvACWuV32wmAoEhZbK97ucxpun9a2QEob3Lkm4DFRCgj9V6TTsoVVaMLdNTyghfpLjb46NXAAGQEzbqDTmneu",
  "key25": "2a8NZkSaPFwPFY6yfsShergnRCtKqvMCc4dPVixLtETXCaQgLQj8Q5UKL3GmKNi3GfwAa26Uha928fYKheG4a9Mk",
  "key26": "5giiNwwchndfpwoGaTyS8sYeT5PUpk6VuNioioyN43zPFFRWH6GHPwxLoCuYX8w9qwoZN54DDqmPoGhnArLMncUU",
  "key27": "4FX832dXp8Qh7FKfeLeR7advF1RC8dgbkNn9JEtuuhtM69T1sPuasJJUMArCEyRKBmMJJAEAwfGt3caGeSa9Ckmi",
  "key28": "CZhuCHV5Bsktda5Ua88PuEzUBguDGDpi5FkrHHGCgqPeVJps5yWiwFfw69qpjKxL482GVgibiEHjKxyi69kXGjX",
  "key29": "3owyg1goP4VtUp3fr5UM4wpwPnHdQXsufwkMnjusWeBHa7EB2mWgbDevJ9r83zEXofhMZorCsEMbUUaYvjtj6p9y"
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
