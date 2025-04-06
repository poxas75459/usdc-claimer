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
    "367fQeEQaBNY2TtcZxMm8Fj8tEExL22MVyL1dv6GZvcbmCS3t282gjXymm6NYevRxAF6qWS6LAkY5KL1PiRgkFnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WRNStShPP4iJPn2AJ4K3gT3bbPiz9Av7jtxo1iUGSX98VgB6G1hQv4wFkoZ9ahnkLkB6R7uWxnwtHMLjaPF89ew",
  "key1": "46rnyRW5z6rFag7takWaDSs9XEMYWWE8Bifwk94ybFdEzRDTLUwcnzwC8iuxAHMCJW2UPWRYGXKXwkWfDVQYQC4p",
  "key2": "ktjwk4aQz3b1GtVoWx48rRrngzctbzU5WvHxgGFRzr6zNGENyN4LAWupepyWQKHBVhjrAqf2u2Yqn2tAAV7vzRm",
  "key3": "5KgEtxzq7D55yphxMFfju4QKWA1FaiuFsYZa2kDuCyMsoVb6QCT8sLELvt1bs3KBu1fKFR4oSAFopkKf9DeTx1fE",
  "key4": "nxdygf5iwWmtNLKMJXPqYoQXL5N7sKcrcgfAtGmUysZFpQwVeCYx2jMYJcYdPPaLDY5YhXvZEF8m5ax44V4dY5V",
  "key5": "5XFRfjdGAC4vYjsscLyqQLNJDVEPeh56U4ArYUzqKHEe2MUiUw9CELFoEiZKPUtHZX3ewQe2BFVo1VLyaLpcp38t",
  "key6": "216Hj5zqUYhk9mqwbKMNv7Uey4HFhwRkSLNUDsZCxqbLGKfzAbp469mLsb9KBXjdF3UPgfxoc7uwHAVN3SprnLES",
  "key7": "4pYiLbtkghKrArkVdHzVaNAaEX6GRvmnnwxeJk3EYYBX4RmwWdRwmPgRoByd4WwNokEQvGJnLHqP3Ryrq6zyVQkM",
  "key8": "5U1xJYZXzY8uMZGMAsySwoc3GMH76xEbBtZ5zq9JAoFQZUSHfY7B6D7s7PhkHErNto8bMLxPhHL8SrqB9pb2wkfT",
  "key9": "5ijPrzGhigkDYrZPbpVtxb9Pzd9qpDqw12WaVwN7bT3qeoRZ5z3UMQ8RQCtmVGqfUSCEWqb7khuNRUyQVFHw56J2",
  "key10": "5avnaYgk83oMsFcUKKYqGfRZAKq5J68LX3yUCYHXEWPmoEsm9f2GTX2G8F1XMDpPhDyetEGNWfEQ1BjbFsdHTcrJ",
  "key11": "3kv9vdb5hxS9yj6srSZ2gLXZ3aZBPsZJdMxT2KBieoGF8emjBcBtVkvkXdWEFkmJ95ftXidSw8UUh6bA2tjfxbSg",
  "key12": "2ZX81Q1ZfGwoEUDk7D1kErAqwUbuEjzB4riLusjS9sSzKcddrSgkG2CLyZy1hoL8jaiC7AubvPCaveeLrqA8byGH",
  "key13": "5VdvihSHrDVxaivoBnc9pHpjPTqahEcgJoPcMtEtXajb34Kyxt2jtsSs3N8khwgwJp51ctkKQGHdu8sGK53xXiiq",
  "key14": "4vmzB9SKnqbziQkEps798Rt6rFEJAMX9WmfNDgerkMFEXySFRcGa4PZ3DMZChG87Bk3MiUQ914k7gx84h5oxQAA6",
  "key15": "3xwTepp1siq2CXRNi44nfKCFiXvQAzhHKeTeSaV6SoW5NEBdfwZNYBmKTDQ1XbzJdWiYacJUeP52jGn85nSD7ej8",
  "key16": "2ejejKH39FkrP46wAXzYzzGcgQ3uFE4M4o1Q8bWn3XHgxjEoCBoiVm2YPGqNcw3EeF3MpVQ5TZD8Wg2NBDqzWs23",
  "key17": "5aD8c5icpnw6g9u78bApF1u1pVUzmPT4gyiYPe8XVBYrWuvb6i1ivtCQgadx9sNtuehmgkU96x3g9zgJ57ZwPNaH",
  "key18": "2SMQ2QLmkrSgMqToHHfJ1AmYV6DPa6rmhkU98Wup8CHRtN32pi8E3J3QqBj7tsb4iZHo52GWbtx9QmdMyzmXvokz",
  "key19": "XFYkBFf3z94ZLPNaX1ppFi4ET7EdEXVUPg94XgHJwuNffk9kJLS5gukVm6zK4pp55SqwUjgfALwF6A8Po6Xk6zW",
  "key20": "5F4YJXhKXfhazVpixv5tLAQPtJJyzCsSMorpaSgkqRFiq83zr6yTpZgHX1sm7aFT4oi5UTVfBS5x2LhMz6KfC46g",
  "key21": "iP4GHFThU2NJyuaCR6Six2e4rcHA7TA8gAFTtbQUa8t3dSDYxaHpK8QBT4kDhXbuN8UHVL5taTT5hwX5azHCKVX",
  "key22": "3rDPXPuiDvKbu49DX3FKKBJ5pUMD1eFFAGZezkFdZYzuGB5SveWSnLXYE89CENRnPTmgicnQDrqmCL8JpKo17rwb",
  "key23": "R5J3PshvC9xg7pT3uhjYLbwgtQLJTVXDZWjfprUuTmTSobDDrBnRZpN9v6hagHgb8E5QahzrjnrgPC7FpExFpQ5",
  "key24": "2yzQr7fXxeGEywX9MdcFuC4NVUnjw9GrmG5bjfqYZSjEWHX5fWLqFFad9dFu9MUtFw6LuKJ8fVeeax3XpyYyjw8h",
  "key25": "3juN3bZXS5RxHmCA64bQsVG5CpB5P5nNhLEa4cEEBtPA3V6vKS5hWarESgcngKu46kNsa72JtC7WNpPNm31KTsy1",
  "key26": "8deyR3dBY8EHNmgdxvSG8ucfTdbsZ1kRDkouvdHF2hXnC2qsX3odjbaWt2kxGXGw3Riz39bY2Dh8gRDLptm7eBi",
  "key27": "McWHD8U9ij7cjW9pT1bmSmTSozELj22hCoqucufzDxTKZBoTYxL3C7Zakhw2qoQtsUaE6sYYojhfTA1ppKybj2k",
  "key28": "2B6ZuuSttWABqUvLp2GufFdLBb4CGvKXYe5cEua7osYVo2H8ASQkumsXAhgLudBi9Jem7pQ82psJ2EAs9n4rUFg8",
  "key29": "2RsTMKDBGwe5Mx721yZ2Lu2vXDhrB3rZaK7uLrGzZLqkh6b8m37xMs2DNYhRHRZBY3cpT2s8vwyECJHZxEh6WY9A",
  "key30": "549o2R4dw2fkhHQYEk6f94usZQNh7tjtm5YveRakPttvFSiD33jbnPxqzhdehWtjgrwvt1dwckLSxAUT5DqwHKaz",
  "key31": "4bfBf6aMsgdzASbckzk8TSGbYbHYuRD1z5JsrMi3oURhoiZVNTmg18Dm49cFzsGCxPtBrJLvDkvJEYDVua5VTqtq",
  "key32": "3akCFdr5JyugvwYSgsnTqBmWA85HGEEFHPNQDw1BdmqdJ6AZqAZAuxR9Vm1TziAhkrVNc62iw5VZ66akd5T44w2a",
  "key33": "4NvmtQxbGYEovnrBURVPpnrEXAXu6ddtZC6fK3hgijxdheVpt2wH6QxBwmx8WJ9rAhY6rLHaXaiikM5p45TLsumz",
  "key34": "RmTZDKDssEViNs6ckAzeCAHZZpLbKic1AZGbABvib79p26ARe4crqir3EziW38vSfWYJ5uEo6Ugv3kmqiU9uDRd",
  "key35": "r3g3uuHEwBhBgUA7kgBG8YhWrGKCwSLUJxEqgA5WcBS9Y5joE2XiaMXU6csvEbyMZdfTG7gyz6Wd1aWApd6DxV7",
  "key36": "SfCZnWiBMZZGxyropKs1QCLfazRhRUvN1DKMonyhs6o2kjwb4m8cBCp1HmP2hvuibxnzviGfMvwPwfJrFH8jsmE"
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
