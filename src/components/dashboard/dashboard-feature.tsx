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
    "RMMpFrtsss2Jr4cvvszaUPLVM9kmLa4zFYhnnZNcUFAdJXajurX4ZUJ5U23PAcEYsgDcT8TWr6Xfm3CkFAdkrRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FAD1wGakTJDay1LmUx4C7Gv9Xocrn1hPSJ7KrXhhYNNq7j4U5QQJUx2PgxrWcC65DSQDj1F3RDZjBwGdocm55LA",
  "key1": "45ySqvN7AGPzTXKtgUZztzBV6ZdxBRFpgeASVXcZhc6UBVabTNqgnkumBTTaYMQLcRmpaZPC4kFTcVJcNS5bdRnr",
  "key2": "3Dphy6biUKjEwTDAjqt6gHzLyTGJ8T6pGMHS13on3jtMDEDsfHpK1xYueFYndqQtBCfhzzW8NnbZfqeEDv6WF25M",
  "key3": "65N6Gg6evoh2kSQsPotXwK98qBiaCtsYqHVaKz2ug6XR6GRxUz7XqxHVW9fMvhuq7UzT6WVXMBL6gsQfdMxo6MMq",
  "key4": "5mpfucEBof7bZQb6zc3zxVDBjb32xXw4jFgGxHQZiiCcd2Prd795PMaddYU2zc7V6jwfexv9ujGfAhZv6ZxgGPSq",
  "key5": "3z6FvKS6yGfDNiGRTFvQoxP4UG65G19tmf3Q3Ckuegv4zMURLiQZxZ52yaYfg1ke3ZBxwVUd89QkJPm3ERRKm6zD",
  "key6": "4ddygyBaJFk5L4n7ccVgADQw1rbVaZjVaaATvBn7zCcZCPpeigwXVv2L1K2aFi5NtFwcwcDGETJnZkNvfyafSoJ4",
  "key7": "5BmnjyEEi4kkEVZgpwsj68F2VojaFeyp8NGuh9GeqHfYGaTCYe2jufvTzqFZF7XETXwHHmx3udZwYym8nouUZtA1",
  "key8": "4VHt73hdL2AnDp5LCzm9WSk1n1bk3AMj7utkoVVwJjCH4xUV42LH8pUUsa6B35r2gst77fi8joyxjSHu3rYU7boC",
  "key9": "3QYa5zmasSxjXsDmEpLchB5dY7ZngBMSG48qobVVrL6mahKQoa5d2L5iLMA5bkESyckCMgeF9bHjKtbSbkJYRv3d",
  "key10": "58bBiP4HRUV62pjjWDsnAYQfapkt2dqgw421UgTBA2GzeQLEykbwqzi4DZ793J4UJbE53nnm54g9xQvZ2e7VoRGd",
  "key11": "4RiikUBs8c2foAohrSoY59myhrhLxqg2cfaiMRVPg6dBhp2U7R1hR3S6sXnqaZkekU9R8tDcgRUELUBWNudpSW89",
  "key12": "5S4JVwSTuuspJHDswoyfyknanKH1swALaMsFmtjNnFe7sdXtkH667ZWJuYw89jQ2oWyKN3s7mptZVNqBRHZHi4cY",
  "key13": "3FzJUeFSUYBne5MKCe8citMJ5nckZFdVvQ2myoVhzGxsQiR6EuQmbe3pZSbUM2JnyWdxxqEzY6DvQi7w1tgeq6Dm",
  "key14": "qcXPn7dBJ6W2Rzf9CbmcNFLyuDvz5muq2UJiKbb9YwkF1KrDo465wqYyfAzZ2UYiEjuj31dHUgFkL79DdpFD3Yw",
  "key15": "24B6YaruXX99HwkAPNCoXyV49zyq7jHT9i7rSXLZYf5mwA59CRC4v2xy7ScdLM6SYqxyj5JY75FAx4MfQKtwC65n",
  "key16": "46tkhAmrS1vyUyGokhbPg9vSHqqckUKcGhDHqT3Gt5G1GZPNQSRNY3uV4vZwXr2Zahv3kLydREoEaSUozrgF5iWS",
  "key17": "3PzyNpKe5wrmZnE1PtCkYaimLi1yVUVexEcH5BcrnLye42aPnho9R6jpYMAwho3EgFeiRz6DvEdimwGHx5d5F1vp",
  "key18": "93mSbe1HLUxjMHfaNCUQM7LF7F1nqbm3AHdg3JZrACSsDb17U4tWtusFHcuwktGKxkQ4QeNRQntP1WCWv3N8jp3",
  "key19": "5ozGE2tp4bk83CcbEFco3orzXWZbkfoQb5z6jVy33vxkEp3BrCMCHXWshY81MKqsENGm2B25eD5AdtUf9CKzKtrw",
  "key20": "3vrLX91d6ZL56BdWygerYFVkw1wRdMeUwTwitGvU3fawG5hU9RfLUdBQREVSBKWvd2A9Nz4wGn1uhpe1xjBzmteC",
  "key21": "3mTZbEhNidn1u9CNcXvxxf124hXn9mATTh2sC2mHLcyCazSzu7hEAtH33kEN5PJQTYM4mXFejLSKFFFAgz7r5jL7",
  "key22": "5RDKDG4whC1iT3V3t6zZstu4QG18ETWxSiEqWxFuysDR6z47hFuxcetMDqGdeeAUwceQNfoFFb68EyrRtnrJaupG",
  "key23": "wpnQzEEZAwBf2eAs9K2RXMnwbazJcZU8Sghj4zxXB2wWuxLPomTGyMLzK7nxcDQrQmp6NJHMYNibGgjV94dwrrR",
  "key24": "2UtWSazwe8eQAdj6ykTpourzDervn91Lh5J9Jg35Xf2QZb2go1eqjSkEgSFFQRLpLwPjQQ71ye9Sm35HCD8469QT",
  "key25": "23cvpF8LTXEMXRLoVVQG4mEyqsjvaB374cR8Sn7BTfiJUsmTz5sNPhNTDHUvrAADJg5yVQ2kWoeppxfFeMLRcfXT",
  "key26": "3v7oV97FytybuK1axN7PSgjkdd9U61V1ncbrK2GYZo9JPpHgr9T2TAkssrb5HYC7Ro4WABUAqRg1oH3UB5STmLqS",
  "key27": "2dQxxaaQGZyVje1ZcdS5xd2XH6KiXXkUtpvTtfBZZZ9uCAZphQmi8v4zZxaah7aX3PJSKWhcTBeMeAGtYLdvWgU6",
  "key28": "5ZwcAVRzwKWz1gvzARAZttTXsmhTPpMURk7kh9S1Ny7rAsWxhYrY29FGetWdppoaNMtXSn1fx8VvmdM9pFv3PboT",
  "key29": "eJxW4cz6qLfj7maBbWz86PVNGKqqwrjVykN4KxrvCZfALVQnoSc7J3NeVQYPKNJVwtSpZyABXrzmCoNgGbjGD2t",
  "key30": "5QvKAQ9RuxCdXxybEQ2tLgmXeZCq7xr393T4twZzYxbiG1aXcFYWBKcyp23nqLT3DpidV34svYZzN3T67eFKLQMN",
  "key31": "3qxW6GLPX46xvsgvAHokx5zDCsFUKHZfeedbw634rLoA19fzv2Dvaoqqy5NUfpjzKJoHo8TzvQ4jGaqBXJXKTWr6",
  "key32": "5WkUx9tHdcBb2rW2hyWoVWV9oHaCK7sukVyNQeErRvmPfjt9sEv6y8ggqbndm7rRwZpj3Vq3GGYPP6fWbEa4iYPb",
  "key33": "3zxFzbifGiNgLobYvoV3hq3EPeWRXN2r3CQ7PY4ydnzQuWvUsTpKFviHN46o2RLukcN2CHyW4S4bNQoNzCaBMSq9",
  "key34": "3ZBuSqZFh5BdEZMjNJnZpc6oVc7CptXozYmfiebvDYfxgKkfHeCt7EXNVQ7jojHmtQfUKxcrG3oFsogmtoixqH62",
  "key35": "wvxFzuM14Hxxs7zgHZNgxFQZwfBHDUGprE7e21bESVh9sbWgzmkYxdRG6b2wbjKTtb6ayMPA3YTG993fic925oi"
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
