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
    "3wvEWpxDbGZa48rYTdqspLKpctLpV2zT9mtAkWgiCBbhU5quRdqX95Ly1MGkvFP1NarrHwS1zUiRmPEji8EzJks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hsRCj1Z3uHMir5yKFuqNqLgBVGZdNKEBWeLMr9RL1vViWkJzVwyvDvfzAk4rWz8fXm85gqMxYPbNPuaTLNiSRiZ",
  "key1": "fH5jykv4akouHRTr2pF1AmoUjzwRfiE3uURvU3UxguvCJ3oooSVzzXBzL6vRaDpUqSjG1uP24KaoxhUpZJ1xqUD",
  "key2": "3naiNeFDvCPY6csbBSsZBpdPt7wEvWycDGWPP5J3E2CiQUVL1ChAkuQXc5ELZQsHqiwveouPh9q8z5XkDgw59mof",
  "key3": "4kGV6u1Ra4yqocNGrF9ppHxWmmFiaWiGmdZMxZKhJEDiWzoKuPQRbY5UrKQGeBBkR585bn6zL7PAT5LHES4UC1vX",
  "key4": "22q2FhMwAQ3LE83oX45idUoW6ZkicMoqYApL4DaxMSBg5uX91wbiJrqf6homcJ8AeV8jj7bLQEMNTiZQEqhoBjG8",
  "key5": "5zrZDC6Z7ZFZrBguBcK4LL33tt7C22Tc5GtgeVocS6F8btdLCBfD1Bpt4tXvPY8zM3x8NqiyXKD3vFQXpo7QX7zt",
  "key6": "3gooDPiW92Uy2Ymfa5LK88pavt5QTyFtLVbFhAejmKMGL8x2XANYfSSUzbEcBjA8YhGjKXV6kPyAeBH5hk8dHU2F",
  "key7": "4MtBowW8ogVA17AqqmxzXFEe7buvwy8MuNL7m8tm79aP9jKbTRJ13TPzBN9SEvQYCv4KGhQZ5Bjahu7TRLzwn16D",
  "key8": "PjopHyskdeEcbfTGepQTTjZwQCsHx67ZWQRxWHFw8DG5C9JzbqwVSj7KnNLLiL181XBAzHFasQJxrLTfc6HtSnW",
  "key9": "Dns61PGiQdousNMpjAgsSfWuEvQFy3aHc75wi1huuj1VFBHd1scTUeTeH4N96XxXU7iQFv9rX7QcF7kd3RGYcjs",
  "key10": "5tkQxwY7pum94NgWtG6hyEiTMw1eJGQDHvq4M8JRrjeZh6se3RkP1UBJaHqaVyZ1giPU9AohZz3B1kKUvboJ4Ji3",
  "key11": "R5gjAViWy6VhMyeKk4XbKd5h4msXbcu6tH1wzMe91EVHmaZANTit2xigF4pjYzQmhdfvdR4D5P9RkQefRetR3X4",
  "key12": "2hsZvuUPjZ5JXz6DrzoAZgSmb6ri8S4ujAViYjQJMLDhB87RdHLdbabenYmiSPs6CywRG7xXsAufwihMU6pJFdf9",
  "key13": "eiZg3ZHcHvaQ5Di2HEtM2ShBpGSNYhRfYzdiTeoLxBSE77CQ4YcZG1RJJcqPK8LDoUt7KxBzuawho569Neonpqs",
  "key14": "bwqF6TCRYBo6t616u8Suh5SyetFjqzguquARTvjnUqa4Wmma99Z5hPBk5W4ujzEQiYtW65Dc3SZtroaf6ZvtdZi",
  "key15": "5r4FktTvcZ71HqA2yUeavQfXPmMB9LFJ2Wepsx5y6EJzPYq3Lh4DEq5HUkBxwJmH13L4WDr5F6NPQMVmjbuFW4aB",
  "key16": "4z47N9Nt9PWeLty1cCjbmTbUV5KV5fouSqxTDeMKXutKCg9dHxLV3qEPpQUGzLLhKmem2YgPTpgQsn8tZvoLa46U",
  "key17": "2E1hfhxZoQCQAWfZPpmuMNAEDEtBWC6rSbQtXnuCTrvYXLU4spqY2BTzxBjmTfJTxdKDKqtD9PFmWpgfDzBq5Aci",
  "key18": "2Q7MbMdHfGotnxiKPMLBQhjM6kVe8zNmAF2i2z5EShJhAYi6kGifMxBRPrKXB9xwrtH1aRQVdSxAJnxiUnUMytL7",
  "key19": "3sBjvoF5oxjTxqMXoaLSe94s4HT9tnFL7BxXpFWyUpBcxdoL3nGLX7uGPWHByKVfKWkZfDMZpsaFbv4Z52jtn7nQ",
  "key20": "4QJuXGBqKBshQc227oBJibXesXgwVnbTKW2HfCYCDc47GkeBtiv9RFSKKK3Hd5akBf47bmmPQdeEvpoEK9vfRaeZ",
  "key21": "X4gDwcwhwX4Towp9e717vBJQXWyquNEkCHQkQzGajihFGCB9HRtMTM9F1BeXGaPT5eAgGoWUguRodi2xHEzJb5c",
  "key22": "4MhWPcoboT5zXxzpdjWsp7i8enoBzzN22sAjyszVhvimXCzLegCoYCvrM1CojEgJFDY5Kje5ShMYdXTnbLwFqr9S",
  "key23": "5gfQgbbshcjZwWLN6F9AJXN7ovMGoTpfRxbS3pgj6KhwKuafC91z2HY8bN3jp5k5ZLjiTnPCw7eZC83wtTyspEyR",
  "key24": "2x68TyeHuAmUPtHQCSCScvaiCHGJWWKuQH4NeWoeEn4grpbSEndtXoGGTbX2d4xdj1b8tDTHvZB7FZCT6EnJRScn",
  "key25": "LKdfdSgoXBvdQdQoTJXksrip1ySqKcFQncY18qdi1PrGz1sucVJh6yEa8XuEebhbLstGg7ajwJDHD74cE68VerC",
  "key26": "9LhorYjoHuV7e6iRc1aZ19VCXwuZp9aUPbHi8yapiRXxvZ7YKbqUYUfBKdRkuv6FizSFrAuc2uo1EWntRrRhVs5",
  "key27": "5HzHjA9BVaWAqWwNgkv4ho2eQBx5Dcyfs5pqs9pYvXA84wxdZDx961Hi5jGv3HELqkQE7CEzBYuvoEo2fgucfyBN",
  "key28": "5TDpC9fmLaRfkuQcbWzZnkaRKZX1Dn4jfk5tJKByRuNR6CyxGZhxqBZw8ogVUpyaPGrcnYY64rq1WirVHw5QynUn",
  "key29": "4abNeHutZ4fHboSSkmUNEV7ZChwxhYwQdZbnVUuQw5sk4FT5r5cfWsU6bdfeQq9vk7mcNCtazdBeap7AQPQPz829",
  "key30": "42UxLKDXLK4VrP7u6wd6koPE9NXPLzfiyeeRWyzs4LaE45ENU1Aio4B2TwBLj3rs9BrNSr2wrrncJWbPcfvPrjhm",
  "key31": "4c45gHi5Xg6NjftV6uLwXzaR39apVbXH1URmRTqLMxwu48nL6nLbpnrLERQEekAs3Ru2sv1d8Fjge8nG6c8N5geY",
  "key32": "3xua6WMmVCncdZhJUCueEBhGnWitbfjwrGBBzpsRZ3kT8e9CyrC5dtfWFSNiRV5cmnZxPtbERrZgZ289sSq7YdXk",
  "key33": "2EvAjkCxuTdLrhJGVnowdgYg3fNSJ5Wo7zW2GkAZwk4hmNyFTB9e4YNw8ErJ8dCDr2Yxvqp5sMurG6rZPEaaqP2D",
  "key34": "5ckkG2V5zAHDaVd9gdBwTjWxk8Hd5763apR6K3Y4Rc4KDowuwqYsuWYdc8HMipdECZGLy9AtwJcnv1DQRdpQacmS",
  "key35": "21HGqpvvtXaiPN5xh8BxY5U8zqoE7MuaF2nZ9N7CURdbPvkAeqxVcQSjbXgc6dnvJZm3wtrWrAEF39U516jPoM4D",
  "key36": "LZqXtaVCcL4U4tvRVrZn9SwtXCSUM3GHxmmCMkTLRVWyrYR5Szz8HWicmYZ8TW586CWjYnT8gHFuF7Z3xaH9hz4",
  "key37": "2AQDqpvgLGjuQAuexxrUytJFDXAQQHCqrKiut8FoUxBFV9CVZTcfdFr39acoWu7XRNuq9Q6ZqUUeALw1FVhYjXY5",
  "key38": "38a2vCu4GWsdKUfG31PWNje7XcTBB8hNHybQu6t2uKycoBRMxEAPk6uC5s7zsrkzvUMRrgUAHxYdwd51uuijM5ws",
  "key39": "2yE8xc9YzfU3EFQ8quQsMuPXbvmwWcYpjuFh98CHZv9wbkGKGHhnv4DG2MXq1VTxzGmVGuLqn68CUemhqgfKhaJt",
  "key40": "2xBfSvbRub15CZRRcjPbKnKekZDA8C14miUJimP74s4MYHQJbrV9vDNnG8RoXkHKzVxMjTUmbnFFTCkhnYSnTZNn",
  "key41": "2EEPBPir3PCcLkEY3Vbx6z7R2mNxZvfN4kNGuFfmcMSgNEpWQV7s2YVt8wkinLuA7FKweztP2TLQRcGKGtteW7o7",
  "key42": "4KWNUZRQbNKULieQouJwueHzV74Uvou8WfhTotAbbv8cdB4w5H1vG2YKhEk7byjxYj4xKemchdqrrKQWq5X7CZJ4",
  "key43": "5e6u5HqBAADWM2WQkaEGVdY2AfKcFcQ8m4HDyKeyzYNZesgJAheDM5ShV1PNf2LBxBuoJxzDY1iongFoy1UXJW3P",
  "key44": "3rEsKET8MdFRGRnXhzCCKHBaNXNBxwcnvb1dqSHodX3Ncr83bXHJ8gyDzZcvxiWXfzVpmSyptbVLwQz8AxdPDLB6"
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
