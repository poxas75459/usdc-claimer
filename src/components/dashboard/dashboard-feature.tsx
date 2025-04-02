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
    "5tQWSNjWiSXsWqmows92kdnmW8YCATq4Az3vT3ookdPfTmCZ1Gx3iwhBS5PcPNz4jQzbNtLLpsXbNMDsMaP2Y6oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pW45yPpiFgHUeJxNqdmea9Gs1Kh2d4nx1a8UMqpt5Xi6qUAeSrDLQT1b65f6uStdjEdkH8KNuv3xvRtnifSmXQy",
  "key1": "5MoprBPFngyLmLDBiFWGUEBo8LgRTt8uWAoqbQYYRncctFaSqN9RozyVcHUFJzrLVYMjixxX3AL5sW33xYAubDG9",
  "key2": "2qhvYjzQ1WYNJxXzY6feHe9voy64VXRK6SVcjuwesnZZjYL8x8FWdHPFad81LDhiRdUMu2ecJZtVQf25iknz4j4Q",
  "key3": "5dwGvpR7zqFuAwY7HQT8F9pVpxSkhWU9xxXASmKEHk8D9s7Tse8wqjCSX9K9Lu4QZJSS1UmQ9N1CbTHKPScBUpSd",
  "key4": "5Pv7D9rA7JGBpuxdioP5iNCnrtmXhdnnx23YoAPbQMJLcyiMmLVZ1k5EWt8EDFwYcPkPzgy3q6QUTF2h8sFu8TV1",
  "key5": "ptzFNCuTbtLWCPfDWuy2F9q4pTsF6z4XFzpXEpNgZzuEMYxA9ykNMAhEei7o3xvYSssZwvEZCyBDMyrxR6YzL5Q",
  "key6": "27eFv9ND8z4GrKenAggAKU6wWypubN6U4pmWEeXu7RwvX8CALjo6xxHr6geXpHB3efEDKkjQuupVVRhAUHcb6w8M",
  "key7": "3BStxibF289HYCACMhkw3xLisaVPupE1D2aA7QcUeKCSRLjYoDnRFE52grUvpktiBTMFAkQvsJwg8rESsYB46sxL",
  "key8": "KPbeUiJarmQnfdYnc46Spi8ntpapFoLK6Z4SGKXg5iF1cUwhnKo3eEWdgXz8M3Z8s81c9NXDT77AQPnGVNLdmgd",
  "key9": "4ZNeM2wruCisn3zYY5ZbDeMZNRVedosWFCWyPZLwk3gvi9dbJruoUs19fSJVXFjtrN7fgvwa2eNRTtHjEWgiXhVY",
  "key10": "NqWZXfW1kvb6c7H86Bky38DoPHy75MSidd4y3PZnkaZnhyhELepRnz7bS1HNTfnBxNbNWmzzowbApGTCgJYoBoG",
  "key11": "3o63ydSZsBvCkWy2UjyYFTu2S7gpgj7wRmVN4TznmDHgf8D2UWErGfi4GyectwcSXEKW3u62hSY7EkjH7JoPQHXY",
  "key12": "4mHCooQPZ6kZg5Z6iWC4P9UjqmtQti4CaMdSQtjufKLf45a9ApVRDe6rpfoqR2vss61avLTrJ1kUDXdszKRzk38m",
  "key13": "3tUmDnzTeJSmCZuTiRbX1XQFiHR58uRkFbzhijv5we8eT3vWrHCS8wyJmEatqEUDddagnpi65pF5ocqLrBHTMsS3",
  "key14": "2QmB1evntFsZuV5Zn7k2yEpNdHxAFDWW2VoQjDQEd4h4XghQMfYp475Zz5iPydUTjEeLAivaBoYLZYnqvUU14u5d",
  "key15": "cK65RUHSH2aWJdPPuv18no8yWBn9o4sQ79SfxWwfS3kFv916RXVwNdgGd2fDZg6qiJxJvSy1HksinviPMv68K4h",
  "key16": "67eLHhei6qMpeEZ7KUHuJrizJNW8HbPifHUg9Xfc4k6DPNLD7VfqGv4HjTStf2kAg1jB6Scz9P2paauUC9oHX5sA",
  "key17": "5YHJr7QANVXbZGpcy9LNbb1SEXgFiUkemskUqDXGkqFcxxAwSgsm7f5fmv9cGQWXHSdTJicsv4SWzNQ13E8CFa1J",
  "key18": "7vuMzPejuY1NyKh1Pufe3dGpRQBbmZyZ5rBhQPiq5rCEt4PBKcz1PxmSn3XQ4RD42iPkRWcdCssUndENyTPaphy",
  "key19": "2VyKgAEqh8Wowvnc8ooHVLKrdnv6SmC51hNT211z6tEpuNmuU91VTLxoGiSvXg4cAsf3oKwhmuBCdsBnAyzZ2QdU",
  "key20": "4xLnCYNkkDM9WvEW553NNJENG3DevWp38LSg1mZWZ4n9y6oJb5yhp1RN4uhNQFb84a2gSHDNwQ7ifRQjPCbcF1ky",
  "key21": "129KhzKwBzB7femrvs1wdRH1A5QAsZhxAaZM1jk74h9rGJWtSkr8eutaQGshkWV84AdgaFU49WFL3MqtrqPdAXUx",
  "key22": "AcqH33iw4ur8CJ3GUEPBNGn7MvVTrqhcqZESNruVtSN9tytQhHHihKD5VSNeY5aeTzZnLBzySEGjSsD1ssivHoD",
  "key23": "2rbejd4r4mUTYopWDJLZoFaYBLXWVkwJ84BufPaeK6vj34yJz7NaDEu2UuDwz5ckzwL3EkUvS1GPRyt2RS19XBkq",
  "key24": "5p8AoynvEc16u8ne46ADP8C9ZYD7hpqiD4MU312Tkh9JTWmEiLazpQsUPHYBRh8zHZ7xTn65Z51r1Y7g1aUuq5FF",
  "key25": "RjNSLr3RxN29REhceJVvbNhKye2yGnYFp9uyc2b5hMSqN3kMRMnaK8h9fYPuzacqkyvqM7hndzcVV8dDTfJjVfW",
  "key26": "C44H639GvGAfDhLXEjxLFNGuyCcGTJoZYM7i76DnZ5J69y1p8mh2yHEonbfZpcZ2C29AyhHnqF8HK9iTXdC3f1j",
  "key27": "4eotKfnmbMH4rsN8gANq3qDtUEKDBsmQC6K4hLqEmPqUWkWpNJCaSw5Q6xP124rLrSMxkkAwMcP2p3ceAdkRUBUP",
  "key28": "4ts5DRmy9Kd64H7Y7P32DLedMo1jmhzquYA8CNw2fivUuUWvz1nP7XETEvdHeRuiJCKhtCxpMrZN2iBjVuDtHXLU",
  "key29": "2qR2u4yEACn7eiY9Nu6zEVxN97cQbo4o5mxD4Z6AwuPzHGiV6F6PjiVdxJ8ZfsG5Qk7ime7nvwU9DpAfWbEe8AYD",
  "key30": "3eENyvGW5wKCzdi4gNP7PqKwyccFYpMcHJfm2LrNgGKqhkVmoFcxqjYpGknNakxgJiYzaJNLzi11mbCLfbWmmFMc",
  "key31": "5Wk8p4ih5dr7cSrpuNYjZVhmf2bwpS2Q44xorVjr8Ze4sXiFHzQgqT2yePNpzx66f9rXUJ2jpxt5xfYaSvcT2wmz",
  "key32": "2iJNtG4RJFtdipe6GuFycNvxv7TNHp4DMWc4452WBFhtdzQPZdpeHGPbsBtjUQEin2wPvxAgMqAmGPo47VeY2LkR",
  "key33": "3yPTSMKUAngEJR2azx41noJd7LqVAcqAxnuGJwwG1ZaqZ6pwAX32ECjyWkSk1uJjSQZvAfu8tAnmRAuJvjGRHti",
  "key34": "4ZLhwczpGU76jyFkX3eSizxYgDpPgzjZj37QWS8suwsVKebGuCQGzMeTbRrNkXn8oKnXfi49hK8L4VTtRKvhGrfC",
  "key35": "2N1SRw9NCy2rnutmXgVhfjZodZntFU5c4Q7T4iFnNzLk6WMrpox4t6sHZwyz3nuGyuSQcyiovHZjtmxdx5GS3h9P",
  "key36": "4P3aUogFHSgrzubAo7CN7FDwGwADXy4Uv2wtFMWBs3rq33ZsJJtnzhrmJEr3mYb23eH4wNknw4foiGZ625KKyKHL",
  "key37": "5yk3KrDJz7soFzcRELtJDpscYxAJhcZ6qgFChdaGivJCgaRvQkBuUNLsMXGu1hzZxchd9vc2yUHzyhSz5G24KPpR",
  "key38": "2Rwn1wKt8zHCCppSac1a7ZAPfNVXgK1nbywknvTbRSYui8MLg1oV8mZRyqc9fC1UjRihbh4XkwfsofctUXkxPTMy",
  "key39": "4BERpuzZB65eNaUAmaVGVtwv7GV9NjrR8VZtyawa1P72MhKJ4mpn2QRHCRdmGKP72faYCLrWru6zg6uaR5DutnNU",
  "key40": "57jzD9xUHAMhfv7oeQWR47wZ9Mz1tM6BgjvWNdCaUoY7vY6QdYRd56PNYzyWz97Q8FYEB4e1KLq32QpPRsxLK1qY",
  "key41": "5MSGXhovzqqbxjAJHcBQxg5AaF1bNmPnLwUNzdYs9g8jH6EfT8PB4du7HrwCGJ3oKKDywhumNSH8HHBxmCmuqunp",
  "key42": "2MokCbhqB5MmMyvmxeARtGgZFMh5tWL12DxFjVpWNBoTkh1LAyykjaLhhfUVvouodWmvDE92Ra6zXCA6Zv4NoHi6",
  "key43": "4aNx4i2QDvVT2QbndphKqTujXNnNkYkuJ2PVTMXhr5jRsLo3CyboUVkqrLxnWVsDnXKSVSuBXL9yP2krLd6qUNf1",
  "key44": "3iGnXbTXGLBBtPibmf8qARJkCNkApDUY6vqFmStRRcrWRwJ9D63zbXQo6DmRu8wapnKL66BwEck3wzTUgXZwASGY",
  "key45": "4MAdqd3N2LtWnSbPVT75GGj5NYc7EpvULHabMsZWApV7ReyEpiSVW1QSDxtYiJjfBaNCwbziHehbtTL5CAitfU4d",
  "key46": "3qiB3Ri5thR8GYkZ8FKDg2qsKnjAYdaobbj9dZnFXoGPaP7QRRuZvRkF3SMTvTDysgK3SXRUWhsYhsR3qFbbu1XB",
  "key47": "iuKRjc6FSXWEXPgRSDADhmKjmz4yJby7DTAgmYz1BJXVuAjZY4LTYxwG3ZBo2DTEzZvg72BDmkiRoRs4N6XFHUV",
  "key48": "5weQmvcWhqeYLi2j9EZgtYLYTQuRaG2AvnvAr3HDhgT9kPNMx4CrpcEvGdbn3X4vXEFpSrArTsyzfUW2fMRRUkMK"
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
