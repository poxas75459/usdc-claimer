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
    "3vsTwacKDLM9SZi15iVLXRSDZiri84KgdaRvHEhkiq3kWNwKmsf6AQtmsHKUvBvrkuKJAnmdoUqrega6DuKDkZ2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ibeeARjgjy9kYnGUaPXjftvopwzT12fmuQyeLFc2yhLtE9sQb8oWvoHiPxTVGkfV4DN5coNCd143PPDzwVUyKDd",
  "key1": "4FeR6G8Q5UnJJsEsTKjZjGo9asahbXvBVRsYep3saxRH9BAHKL4BqMirFm8L2S9jso7LekHrSAgKUARyREb9Y1LU",
  "key2": "2GRFSUir4eTVbwoBGxoXiEcFNSDsAMv5ECZzRVjqmwipfb5mBECxeY7aVD1e4Pz3tswVYw2T2t6LzDXfS8potErq",
  "key3": "4GiordTMSrZe4cmiomhCdAuD3mAJvFxJ135AcEB8XCMk4snw5pq7B686TveMfaqhrd1M2fdzyCf2D63PQnF11FsN",
  "key4": "54BQgXqdXSoADJrSjQ1JsxrB1A6bZLm94WzHf5uA4qL6k9qXhYCXfy4emVzu3UprfjaQ4h5wQXzjtq8YBPPdiyEK",
  "key5": "iqq27PEhuAtqFACmc1PQztesaPsUwpbUp72fvTSXwy5vGFe4AAn4aH31fog4ebwkLWHy7cFYWdm4gVZK1YdYjVn",
  "key6": "5kSzDTgatwoVgWU23ZnpkTidvxa2gTvVEN5M4PAWVQEDNEtyTWMAFN6vs6oD9L1LeZ5vhSkFEqjEmbDz5qAXSNmz",
  "key7": "CSJZhgqarafTyhFHUts8cbnwKGxoE36bCMBBLW3VBFMUVEx2aHQ5jZV4YApvjD3ptGAgucuBjW2BeSA3JYjkLj3",
  "key8": "37A93DMCdLPJQMpURiPjS8PipXMd7RmqWXxi8HBwxcVXP6E6EGgSB5akDgsHZvFNnLVq6kaG1LDTmEiTVLeVKmbq",
  "key9": "5tNn38KxEi2Mztx3wtQgtCYtmY3bQnUCi89HDgH3igSSQv58X5rnXgTY1wTUvPw835RUXwYptiFGAfaSaHXzHwBD",
  "key10": "3y1PHRnp57jkA4AExTsm4bRp8TWimMGcCUGzxrErsdjo7Cv7Z1SjZcGYHxQY9hKygsHcoGyaCfdf4XxkVt63jBWk",
  "key11": "233zFWfXuwoxgU1gsw9toa5QzuCBgRzQWGXaLiJ3ZW7Lk8bBBp6nsNzWCeW6gjtu1WR6kVzcFj8856KXZwg43Y2j",
  "key12": "5ipZ7yTkUdUyiBfsnqpo6RibzC8R6vRchvh9zn5zCT5qXpUQaDUm6hj91NMuexgGFfWm25SKoEJwrLsU2QkhiQYP",
  "key13": "2xhZdgo9bh8UDjvrcS1Zy1QmDmfPqSVe7b9w4ajSNXo9bxddRERJJ7AKdGDkSqtuxSG7rnXL1tMchja9Nt5ZBC3a",
  "key14": "3Eb3VzFh5uUkgwaUui8VwsAjPYFt7u3mAMexgf5TxceVNGuP2Y8bgQ8Yy7ozy7EZogVMNdv7U7UrVFQwZcLS4Kot",
  "key15": "5DEcz3kUWFhf7tDdgan3BCSpiQwkiuQmsmPAThQQbK3ALnZEyLRGqJFy7yv9pdFr6hZnnvyqGN7hXV2A21F6xDAN",
  "key16": "62MwTjmzb5mJKG256mNeLzZhdX91E9VKS5n9bMKe1kBb7ZaDvzvd9HEQp6PiJbPTDHTCSPJVHnf7gN8tJXajbWnx",
  "key17": "5zergNiF4hSzAUWzM83Tw5EGnBas9rR4UgzkTBPoEJkQdTGHnP9mePnL1NQHw3jmRd6fDAU2fY2rCqeL3Wfecqnr",
  "key18": "2tyjcRpNZT87LUhJXDoLRBMgo9Ro8uCzoiyJFFC4k9uKuTSBsM2jKJjYmahJAUxgqYH29P9P9NrmYQFegK3gDfMP",
  "key19": "5mMYx5GvRj6dE4ZbrKkrMEqVHE6VyPcTzDyJwVWjkFD6PwrFF3xbUmSis2TCpBtStEt8FiwsU4KbxFp5cNqrXnF8",
  "key20": "4ns54QAQCEt1S9wj7ABp8noFeYorZaaQQ5crbPX8Mgfg9PHb1JFXmb8A377piGg7MfgFKNEgWT6fhsShDtf1D9E9",
  "key21": "3xSRCMfibanveZXx69aPaMkyQVArME1CRyR7pdLYgNPYAuPhSvNzvAdBJyBR1VxvLJsVLCMHuRWUADgF8ebDSJ1r",
  "key22": "4NNRzWkCo3cMi6xRMBPn4uWSfHtKrqwe8eN4RoLUG8rdnv47S1L6JLytXJm5qEjwWjq7rQ92ygajPBb6Jas8vbNm",
  "key23": "KeXVRunhVZEEQiNDrcffQD2seZKuFw2XT1W35QzkCBZG8mmDY1azWAorXee5HFgemhmwTehnVfVDSquwwCbnf2J",
  "key24": "4dbPhjMyUyRJhNDwb2ctEeYnvTY38Y7TZRa6wdjVFvftjFWXiCnZ2qdSRNfnJXF7rvhqfrPsPASCFpfCYYbNU2XB",
  "key25": "4tDJvY2HsVC8EpxRgMXT8GjToDCfJ7z2bJJ9Sm5v99vxGRat4fkbTeC88mgb1WjpzAGRJLKv57Xc5e2GqPmV3GMJ",
  "key26": "5HZZdkHBYGVWFaH2atTnaZrdStLhMxHRqceoUcjHDC4CjSUqoc5WLSFThWMiLBomsnJtuJTCoVoe2ASvcmW3FC3f",
  "key27": "2ygtHwRSs7N2V1oHtTT59XQaXwjkceL1SEaLEc5FKN855ywGxLoLFu4C9oQquUYXu56oCE24vZr6DwWxwNN6SVE5",
  "key28": "2DkuMZsVqRH3DoRHeTWKUMnn9F2uBSEKeM5ShUsyT2BtmyV6QRnQC2sKaTYFxPxq3wHHigbdjV2mzUuazA3gS52d"
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
