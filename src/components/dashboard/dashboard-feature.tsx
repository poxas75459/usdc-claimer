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
    "4HMNGYzSx6CeQPvC2vHKCb4ifV6PAoQcLhpdz7NFBLs73H2CG4xZN8R3yutruUkhUEjswRpG2iv6y6xmz7gRZ8oh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A2YyANSQ6sucAbdnsEJGDohPc1gqXMEGQCUn9gakEpzEsFn48bpiPNw68VZKApFn3sU36LNtHKvsaEwbVJdFV9h",
  "key1": "5Qq6S5AzPYqMU4dXZwbpmjCGFtAbAZUHjpddLTm9JiQDNobBN3xWaSKnpfRZU1wjX28TVhBiPjJhAytSzy8aXUGm",
  "key2": "3Bpc2CYZHABJqnL4CgwzbAkUhAATSaupQnK83payLUdyBFCAYqD7qMyo7E2SSsQN6q8DwxU7ZCqBaPwznyGh6JLF",
  "key3": "2P86bYQymncnFiLPakr6dj6PVj821ypsdFaFi8EC3NPuHrujcc7ayMJgJGyJqvq3xjWWazEvkKzXTw18EfR7n3RU",
  "key4": "63gLeAoGZMryCHtctBwUeYSnv5yGVak7xtmRSkxsfaudLSqgVAjSKosW61hEQvds65YXbsgjWjLNBtAyNjPgvudz",
  "key5": "2Wuo8B5jugR9LoQNYU6yPktHoYGD6nqmwYht3n9CovgeyXU3eeN5aS6yFYiRdsU7HjZsbVSuitYGq8HtdQsPkBj4",
  "key6": "5vrqcw62nTRZFZ7HH3djnvGKgh3xFVjXusmXmSHKfKAzQFfheHRdeNWZAWfVoD7ujDd9vpiYjKSmKtoTCcHUNTHr",
  "key7": "2VGohgiA1gZy6RLPqwdgZMDz2z7RShgy2UmsutJ63Rkg5aBThic6crpD7miMtSoFCMsbY9H3MiddhtFyidioGWWQ",
  "key8": "JGU2mzzvybjgRKD5zJY4DSUSbZETBNDocboEaaAzgRMiwo6owgCWPNgtSQDzdUu2nnEqtVUyfibd1oRoasaeWQR",
  "key9": "3VuboVRRE16yb14BHULLmNJgfgapQeh11gHzFH8FFsrp3Y26jkd14qhkEjHg6Mw2hE4NKkGpeWTnwWxijzEEq7kt",
  "key10": "5DqtzLuX7YyNvJmmBTsB5yG7PnzFDjU1PCTM4XzBMT89FdKYgtpd5ghAFp4JwJCsEB4VEqNt3Jw7SquQnm71BMYp",
  "key11": "2u4Qk5zfxofBVPvEK7Es5niZ5oEXPHfab2QtqcHm6oKfGtd3uekTUURpeWFEFbKp7L3RGc8HmDu4ezozJUawFZyU",
  "key12": "3hP1XZKXSYHvGMLzi5WdQAEZPeXmr91BCaUQuoiVByBHQjWm7wvoTZxUaPXd2zzW7Lg6ZeRM6JWdgUPAkwsdkER3",
  "key13": "3aS1LECbFA4xWPqGvzkvnhHpjrHZsWXYVrsSj6AKf85uia4ZmwDrdYEHf8nBG4M6c3ccPu757GZTTk9sZC2FKHii",
  "key14": "9wXmYtMZWdPsv3cDLn5gBfXZnCusqGa6YxNtHhh7Tr2cczMEYk7NzwURKDv9QajTyBgEaFKzWc9ehmhqFMWYiRz",
  "key15": "mKTPRxkmFLpUW7Vz5svKuqYgFTPvZyJ9mD7qBn5QsrC2Xwu6vygJhHiab6A7A8TjMyfHZdgCFzuzxQ4DHViKUia",
  "key16": "23RjRXC7ndcPAJedq19RWptzAzcjSkhVJJ9bHfn7yGBov3yS3KYWTXzQgy8t9FF77J2QPh3ctRGXaSBfj5tWBQA5",
  "key17": "442xH9MLz4jtgvib29XeiJics7PbrnimZ3TB5EgsjMhAiwRqrNXKPHiAPcV597ycBrZMLtg5ns445AgCY84cJaAd",
  "key18": "4WMPzts91JNDP3sqhGxSMxNjj6HEMAw2KMWE8CfUCNBCdqMAJTjED52Uue7xRGXwMTW2aRKUqfi8E6vPbLYcHDSW",
  "key19": "4sfReUKmgSrcViHQanYYCToa3iZCVrYeK5PpxCRxL9T7qE2V1PscnqmdNrErV4K4cM6GmdiJtaHm89mgkL4FXazb",
  "key20": "53FC7yv9oCuu8mzvpqiUdC5CEseJHdsAo7FadEWb7UkMordbFBJGnrfRCzodbqDNJDGfmsMsQSUr4EbfrzCLWCqp",
  "key21": "4HLk98r8ZJbxeUDvPrHMPhEUbXSZiCTeqnhiZYvbcMarrMLq5ouYypoHCNgaJuPAw74YX8RVr6LMT8hvcHaXAfKx",
  "key22": "4Vm9SufDrwzh7PpmBmtUH6i6UHHNazZZD7XCNh7hmTTeoV3YEJcadLhArihkBBnSZYFZMFQFipqoNasrPww2FoW6",
  "key23": "pvJNvqybLgNctz1VCkySobY6BXnUHE9LMX862KM7MTfxA6QBMsrZDBocVrU2yuABCF2S6Wseckn5UTLnQ9X53V1",
  "key24": "9PbicaesHNcCBYsULEXfvadbTMz5zhUtpGjPNfgSELjNVChxLdjCfjcMF76rXQABYdNdmb2J1NyegLXEDVY5KSj",
  "key25": "4eApVpiMS4t3bXmCRWaBCyqfBXKeAiBAs57xJtuYsMxwndsPxFXbLWbCVzeNkQJ1KtmRv6ra6GVkCgynRxvCjEUx",
  "key26": "62JnF3Bf8eVoB7esPzFnGHpFLnrzrvrREwdTUHbaW3rt35GLRahetsdCxZdYXzqc8vbrDHaHqoxiKprZefyffaNX",
  "key27": "2J3rQ8uVtNeH9hk8ZhtcZYuATevELbHSvxAX81jHspFeABQ1ZvoMVFAAXaB3vJnUTVhj3TNHAnZiey4h8GNtNTUc",
  "key28": "2opU4AfKyrrEzFzeT6vXsz7BgddmbrrAdM8ZbHPkAe8x4qNRG7bN9yX18HnR5UdSB8qRaZ9fRa2uMDjGcaMyyUaS",
  "key29": "2sw9Vq9ZaB89iN4gXg1BJMnXPDn238BjuzKu69DnTTax1mgCYYRx8dyfs8aMte2VAuAJcWQBwckNkqskT4sUMrCJ",
  "key30": "4sMJWqfeYzbjFViDp2CghrEQXF1yoJ4V87bBEbaTtyKT77qEnHYZrcLQXh9C7kcp3fFQzhJvhAN1YjsbSjB6cVfy",
  "key31": "63e9tf92PHG8Ct3wiPgVUZ9gbFQRQ4MWafSZrdaRV6Qvc7KEhxU3wZaxoty6kX5WSP2xsYDG25ekdd3J4tg1qe9j",
  "key32": "61JdUMnqN5s18NPD5U2sENLoz31iKQNA3CrrkdzcdRNDtQ334zHKWPpZdYWHp564u1nxyufrbvLCuSgdZMjueKkQ",
  "key33": "Ywe7fPMh486Xjmn7UD1xDCmnkTcKMhV4vGkywEZNBhQs4pdAukGkmLtQc1uiz8Q9rpUm4uiL8xD7wnp4oo21XAv",
  "key34": "f44Huso5cfJaWQDjAzadZ7Mmif5hH8pdZvSmy5NrtagUUsheiEKZ2ieP6btTYBPNSCjRk6oGbqA9Hc4FDJZX5gd",
  "key35": "5fnFgkbPuUSoMyU1iRntubkpigrwKT1HTojyLEauq5epeRoVQsvE33ZUS7Ju7M4tUQ7N9HaRQPciR9tKTnWsgHQS"
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
