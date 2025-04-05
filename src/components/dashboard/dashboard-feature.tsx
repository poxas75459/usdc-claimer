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
    "4TGVuoMyW7fD9LB3FFpxNFUL5koAWMoSBochNJhTDpPBQvNsGuzG9j56Mr7skYQYDmQYJBM3Za16gSCiM5yQco2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DiHs6cfr2CPzKqQ8zHusTR5Tb3AZ1eeyPYU7PRGU9MRy8VMWCHrMozJF7y8bFeX1nNm1e8grshwgHoFCaRW8ph2",
  "key1": "51a6TjBUyFLYuWSv15mY9zHjapRU1oGmCsRxhpKcrg7ceaZxN9Ae73d1PYyCNKdX9QBw3CkQJzGKCvuFsnPx8UYj",
  "key2": "3Fc22NRHjuEnn1fgxsQXwbgcLdb9NhpHEQmFgWzJ1hzbUYjWognEEjwCg6LTAN1KC5FrRAULww9zLfeiggPudVhw",
  "key3": "u7Xt4YFhjLCPjdtwNr7WcBjL4YBSUy9oq1NsN8c6XrFswyynjUXbkH7JzMdzcmZ92VZ8ZNuGgEDtLt21v6g9MBR",
  "key4": "kWxdLw6g7fo6eHi66oB5zbqZMASF2mTTxfEaNc65ZughJLoKwHCnrTbVacEhujpdeAdcBCMUuqYjBVtmgk3V61L",
  "key5": "4VEiPAfdEWRpyRt6Lf8omhjak2m9CAJgUZdWwQnHQN7mZBBP7YTH7JXhDYxAvaNbbxHpnNehN8nxNsTN2tCdobzg",
  "key6": "5fTJq2qeEkbS53EVpK74T1UDkkZe4zJK3YRhsrpyrgPfxxgCrWRXoZqA4CMZtbgcLhXGiqKJ3vcqkSrQ2jpPNo1d",
  "key7": "55D6yymNno9MEwys7BM3aH3t6Gp3bjEcRe7o8b39n1n89uhQ9QQR6cdQQ3QJAVCgPN1WNkya6vAHAMgeSd4WSw7u",
  "key8": "4eJdAndicuZeZP4xtmTSEj8xaP4y11hoNsRCEY6Wg3Vu2rJuHoKKUBtL4YLWb93zfAkkuz9A6Qm5FqJAVUn3h1mJ",
  "key9": "2NtKBT6E6b87nQLAc2qFMdEr3TaTpDHgbXLfw9AdsfHAbJccYEbTaMiq9Rzpq9mFbdGfp7fE3418LRrpdKcyKsXN",
  "key10": "3kX7bN1zTmDYAvftx6gRBFQtayeCvirox3bqFNaNvYCBh5coNa7yqtxifKhnBwN1QxKscEeHoJ38c2d3KrtZSLB3",
  "key11": "232mzAtuL5EZARSuw7ChZwgLP5fDQL7ZiTnAfCZNqY3zw9nd37ZsVaqfLvuFLnbKCuPMX5BqPuCgL6tezqNevZeD",
  "key12": "2KPZhrztdMik7Fs5V3NJuZYtb2peHgJzVBhtBhXCcx81SJFP2jhVN9Jbie6sHPUNNqdhUSpaeQxVrT71VRDJxuEh",
  "key13": "47GUGqunCAinVAkYrRuxXBGnbTivynzaSbYKc1aiQht7vT4UVJ2oco2G4QrjgPhJPhKg6ufTKntHHMpBS15fH7Jn",
  "key14": "5hgrbN9ukzeKfFQHTsMqnaPxb3q8w2DKfugrkpEEyLP16fUkJ6qQRRHUb93m9NRGMFznk1ujp3M2TC48UFXzJiPp",
  "key15": "3i9Axj88VR9RQBVVH4Cdpys6iGWzwHFomB3FkJqMjMDMpyht2wPJCnNXmMwuNAUfcVa9iCJraVVm4TDqKre8HzCe",
  "key16": "2pTJ8VK5tdDLM3p4YUAmd63D4jYGJfFQPK31ADBJjmRXQm8ZddYjz9qhgr7axiQWXyhWw4jPE4qbSyzB22RJdVgp",
  "key17": "4Tf8SdVjkYo4P5NHMQiGfGmT7RrmsJ3kZPCcsmmLGK8A1BL9xn2jLYzuZPVy9G5zfQnh6drkDUNCEsKrm3fuwXGb",
  "key18": "2cxtKaD5HW6GLL2URHE6eyNG2XhQjedMvpAoJD7XYaERR9WtKeCFCfBAjuxh9qFtSnxSozKRS5k213kbgKDwoKzN",
  "key19": "2vQwjKkUCYqKoWJTRimzSj3uncojkrBVEysgRx9mWpFuKvxWyNvZR8CejdoGddib4u6efPyoXwzkXMc6v13cTr6z",
  "key20": "2hLt7iyF4vjN1ptHjXA9wZrWX5VKXdpxW37BV8DsSRUwUqT1FxpPuVHthFaHJpbPLrzoTgqbCvaqeQDzXR89JksV",
  "key21": "5KKrdDnpLYwJ5mkgk6d7zy12qLHUSoDsWHBDGpJ7czze4txJdXK4bmZLKD6TtXQKWSMxV3KqXhgYbD32jHPgRxLU",
  "key22": "5jQAthNeZR6EKS2o15CcV1VDFq1fhk7DdFTRNEmG8RqBU5CDiAu1fdVaVck7Z2nGXX8hKh2cHoXM1wTBFx57eASB",
  "key23": "7cWnzMFVNQhmw9TyV81gsc9RaXdhKT3pT2SDGbVairDPVovW1cHpfD3ny9vCYDH6sd4JHjiXwg9m9G3nDRno7x1",
  "key24": "5KELjo47E2EASHEgH2ZBJHhrVrtyUAxYhZRG2W7K832gYeer9SHAHiYdoteqjSWmAKccrFqLk7rm3HuTUAUgjgDx",
  "key25": "61kMUhYR4pSmX7U8jgBF9K3c5A9DEiZ9GhTVThFsWRFQmbXc6SELFj5sdsSqRhwn4bMUZQ6u8cqzMKH6wGvi4Y9B",
  "key26": "2RGn1JZMmLmqWGwbu7Y5goT26g76GRJax1j3Dna6H4g7LQ2Wrn257fnM6widh12aLrC51Z6jezqPCBvp3jdE6af8",
  "key27": "277L4pozedWenMMUqe93m1ggfMd67GakNQk9YmtujcrtHjoPDqDG41AbUAYhhjL3JjwAgP8xah2dWqaE5s1aANUD",
  "key28": "48c9PUogqcHFdAXPNqLmsB1rbKFZdymD5GinZi5CiS7k1p9RzRq1rMJ4FiSU9PbAn7X3oRyjDuQJCa4QjHdgXKY5",
  "key29": "2VvraUL24XUeKtxw46PhXJKaQFZvP2BfJNgwPCxoUJJHJRFoUK33EAq9cn5ZemFkWPPjmvB1ecw4W1ce2MoXvssH",
  "key30": "3MPvpsWLE6rWirZNzKRE4jUxL9UDBYipM8Hqh8yJRuFAwVQxnMH3vJ5NhFC3WMkh9kgGdQ6v2BNMGW7CX3DFWknw",
  "key31": "51XYpcX35ZUGnGK3tsEtimoSMPmogsr9hpULUXMaPaiNauv5Cs5hBbU3kfZbkDR75cSHwiv8RkQpRNwC8g76zGPZ",
  "key32": "43mYzsNoaZs9uCLzbRgSMNoEg3UwofFmFnxeNjkso2T1KS68fN1Qh9Pksfu5ouTQh49a3VgWfDrAWAXZSoMpuzDz",
  "key33": "3oEPbZoyZggPMCNQgLt2UpCdHsYCKES2fDs87To1LeMm9SHAuPmka8Y6v7DBEnWXL1QQ21H3rZD636s4ceEKh8ie",
  "key34": "5eao9LzdX98vMkLQKiQJJJXz5UehnquZdJeuPph5uSoxo6JK9qWEGopYX3owyvTaJKt2xqDwFXWnnrFybTP7XXGs",
  "key35": "3GFeUsXn3fyFMs6EL9qjt4JxWZFFRmo9gSm4PZoBjL6d3AchoEbL54wM5786rFA1fYBCZeujvVT3j4NrvHUb8Cxk",
  "key36": "2s2bbBiAQKVqM3EFad7aYWrg5AkBS75qtRd4gf1w3TfQQnFRx2ktzE8vhYWdkaqy8EUM6oQXvcjefqPSjRVAxTWY",
  "key37": "32PLLCwYoMoKZD3UJXNBaYnsLCK45Kvixocp3Sby2eNLqfdZVa5LwZAgjW8K3KznxExRnkqCFoEyhKHqPsf9vfKp",
  "key38": "3HycnQ34hAAPha3Z3QtsW4uif3vtQrHg3PB6rz7s56F4PJYMfPkB6LkNLEaURED3yuXLsg65QhqobbHRUjR45JjJ",
  "key39": "DkAWKCzJUNSg8J5bkdDcW3N4iTPtJpCdCQshiFPsV6teRmfixzgMUHQ1HvFCpBzNhW3CsAtxKNxMmDYuxScyYrH",
  "key40": "2jjKSCrVQ9w4zjqya6VzxN8DqkcTwYnB2VN2emwDMcUwhiZ7aUtsi7wG2JTGAriffPqzdNQD8j3gxHH5heAZNvH2",
  "key41": "9HFss7MCPfcmZbBYQfhDipbXQqRp8WGYV7kd8VrVsTQpH7HSQAaEN8oA2hm76qPpRB44adctj3QKTkEMhSp55YB",
  "key42": "3PLSZycpep9KScdJg8tL1QfKfY1vvUrJNTqKPB2Dx8gUzEC8PEjLka6QHMKNHSBk31PmcquochfxjEvnYSGUdFZW",
  "key43": "4DrFVCJSWdSpQme8mrD2zaU61sTkNTFHSoKbMUfq5k9mgXTHu8K1z6XvbxGuFH3wZGYcZCw7RmfURwLRv85MEE2b",
  "key44": "2NtgRbuEpLjx3uxjAg7NRLCKHpzFAGR9BwNcj9mDAApQ9THb2Ewcjutf4cEuk56PB7TsZrdFiGsWLqkUX55LPhCq"
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
