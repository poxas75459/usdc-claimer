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
    "4XpLYuNuZjTDLabng5yg2cmP4dyvrYGstMhVNYhCYuggSkHHVTmxEpoWFj5ywsTHqyWccmCygbmwNWo5S3qtCFHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjbBWiW6XR9FDZEr6meytggpN4tBpGG119WgMNQvzcp1DmgeqZSqvTQSjBtVvgHkXiaiLSFVaCTgxyDuipdjUyJ",
  "key1": "5Ug4tumvZQhrm49vBzPeazQFGfd24cjREqWkoHNK5oa8KWiKUvbsNjJs5iMTmC9cfiNsVFnZWqvs6QPANbShGqdq",
  "key2": "34mTbwmNnCRiZ2BTfwyUq8mdaWhAj7c64EDNeQtdfAZo3tzy6fmmcMj6xJ8dLxzi28PENah1qc9Pw53fA5zs3Zi",
  "key3": "nthhRLQeGDT8ApsWY5F9de27aEacRzdi9WCXVZYzYdAxuwQzabbroD6Ui7LqASUAuzsw8yqnvF4wezXiM7vzZtn",
  "key4": "Wf5d8TEmkCSdHjqjZzQ8Q4njMFHYujtJXfP3t5Wj3qp6qSVcQwCuwnz8beSB8zB5JeLL2bmYvKrzZKS3DqG5Tcb",
  "key5": "3TTCqwJNYvhBoKNyZEp5XioHkbSmkFuLdVdCK77b4TcxtyNpCRKwMqGppfppdP4RDfwUG4ASDKBrpE39mAA8X7GL",
  "key6": "3D6uuzkomzXde2PUDEkcEguvqovtcJfc78HybkFQCWrey93Hzi5HeVWXsvpjtMZu1qXJaPdEFuDMbYZAG3KY7fvR",
  "key7": "65F9KY9PBUENmvdc2d26cQnkJazHRbCU4jedhehgVuPy9AYHyVn28nGELwok8ccf39MN7Ym4cmKzUXCHdmKkBJKb",
  "key8": "2LmPWh1HteY6yjteftcKTE26snKCRLkuQGEZN3zYHY4hdugZTosc2KhdyhvKgrgBKNWmhGkGy4AL62DTUY29FmA6",
  "key9": "M7bYhfq9rsq9UozNb5xhKhFSUU8ZRhrHZw8DHkBHKYMfJr36Yo7WmS73ZjEuznJqiYY4iG4bRJ2j9N1k934SV2q",
  "key10": "eWfn2GTVTBUXZ8UkFRh8WxyEutCSuksJhMBLTDQeWQctuWBmzHKA3GJU33YG4ZPvQfGzq8cCjsabUptFaAUmJtX",
  "key11": "3kcYZj4TK6fp9LncWKaPq81g9be6wsxfauAJCMsVCJzTxhxFGtFJhnNaJ8g8gY6vf8J6HwJvAVy5rTZaaQ6yWfhL",
  "key12": "3gAMjmZavEaAQWohWuRYgGdfiFMBKkwYbrm2BAtKkiQc4msq6RkwUwe6DWQqYTRZuTtknt6mwRdUL5ZRZuBz6brd",
  "key13": "5u4SJFaEFZkVysyQ4JYeDxpW4dGeqTdtku8kszrjJz1hJvDLBqDkuaoxmazr5zEQ2K4biUvfvaggEsyWYqVyzrfq",
  "key14": "2UaunnC98JGK8asZhL8ZDHFJoHgNEKAujCEjUGEy31xR3Nf3kjMM3hD22wxEmRrZp9y1tHY73wKiWfQFHr9k71hB",
  "key15": "2635vcYcUH6LwcJ9nyb9QERUBfKQ2FCbCWBQvonGgKA4YFosGSwY7aB4FutuZtir6YW6jyvG27e3R4AHjAA8HiDa",
  "key16": "66cCLcJ4fUTjskv5MyNr9PcCnDccWdhB6HWGquDUCgA683Yw5GqfKALmEG1BT5DzkSZ5pC9qwKotcBLMqiBeRtcp",
  "key17": "2MiM5KvM5PCmK7JyugkSSV1oRcfQL9cHwCcN1NwCAYo42N6iMn18Ga4X3Eci9TnA6oPwBN6ppDAj36tLcZyPSbR",
  "key18": "5nL3h8wNhmVSGfPfH6kiwfC86wZecnEyHPHByhvtrgUww1yqkX7XMYAnAe6QwBGHKZNd1NB6Dy3nqvMQgZzZPdcA",
  "key19": "4wdSPUDJNfYnkyXuVvnPAAnC68DtQTjgNzD9JmemcByvdMak7qafE9fq8DptTja2HUtMQvSwmrfJTbJnn2eqrCvD",
  "key20": "QG6Jz52q55VZEqGid31uPQuJ8YbNNvZanYTK3sSWYgENuT5avZHLZZMgqsyob9LA41DdiLBiDqvMyHfJu6NfZp8",
  "key21": "41q6v1PcQrQz7vxUZcFVMUxcRu6ajo9y1nPso3AcKTeVmBN6g4xdcdP2WcJP6RLvKurnww6apQo3je8kBFtpTUie",
  "key22": "PXad1E6kN2KQqe8p6ZGVcZR1RYVNztbw7YtQushgvPzpGbnPAjZeBTGJxCTkQnfGvccc9Y9Ntz4cn8tBfBS8Zt3",
  "key23": "4BbVbAozWHzR3seusaWjXg7a4HmivLeCNcCCKVkJ21RPtLvQo6cFa6pm1irJtD82mVKgAuGP2vecfdiWfpNuPgCZ",
  "key24": "27EGkMkNCjx6EWnViJboXg7hdJNg9SBGBrAF1A68PpTYXwigdt5HRUbVMaoaLRusDprh8mzmQMkXriHtLTk2DD6p",
  "key25": "CYSScGFyt6P7km1PiH9FwKaaQvrTcCdkLxsYdo3UPcrX5F1jyJqrg6Kcn1hVE5pZ36DQKdFMsswNrvBpXwKt4EP",
  "key26": "3kMAtaXssP1Vxu4ScUNHVBzcLfsB9dWuuQMS6U5gLJmcwSiVT2skg9Us49oE7qBRm23zpEtVuG22Q5yCPDox6BfP",
  "key27": "331DHowockaygVS2wK5grhv8W2j9MhUdTmeSADLbyzZ1XZsBWBgMc6xAPVdyKAxFCm8mtqEFgfdWhFp27jxbHA97",
  "key28": "ic3Bi6fyqakkpxeXKcfzQ3anT6cPjsLm3MS2yAtN56z9HgFt3mwnCwjdJGW7R9Ea4sYnaAAP8kWBxz46E1hyKNf",
  "key29": "5dRR6cshYksEHW2dmL16EbWJ7R7HYEaijbN4SHNWkd1UuvWqiAg6XA5T6D5pF3zzv2u8SunCuqg6mRi3YVUuiohL",
  "key30": "2Byn4buTANv5gWKqknoPJFXVUpRpLfUtnDvhDKLFN4MMqK14etHKWobehrrUBKCsgfWZqe4n3WqgLHCs3fUD8QDG",
  "key31": "2PkNkgzRktshukyTwSifmegMjXi7P1QJJyCZtLxVGNCrJkzSyAfvZuxG1kNbtndB39bWro4yTzLRmHdij2oKpgXB",
  "key32": "55QYC7FiNh5B2Z7VKqcXeeiDgxUx5s1ucRsCZJ1atVG2zRSi8bGne87EdMLK3ZPbqVArN7R1no2gLakRvxm2hzPa",
  "key33": "9WTnwWXbMoVzXVcc4DfnYBEX1UfNrSAhJXrz4NfYeeuSwmVkLpJgqGa1RbKFpH2UFcL6j8Uas4vkzH6nGWjxZD2",
  "key34": "SV3ZqLAh5YNpnYbKf5tSEfxtgHhtE4p2SSxzAcELD6CxEM4Y8CAraYicESS8jAyKYvaVeYAUrG4fBpq4yktt8T6",
  "key35": "33q9X5wgr8df1p8tQo3yR6jMGx5BkpnTzp1P7RqNuDAQcfK86oegnxF44tM6kPXGEdofRWQG1QURmHsLy67oKoVt",
  "key36": "2JCwzbJEcutJ7Qkxtjf5PrE1iLLu5cYU5pf9xm7kMgSKPSrcvLNxbyJD1F39ruebmzZxNUVcEmQrC6JdRuTrwQee",
  "key37": "2SgTwMmv8D6qoKQ6hzKcDPyYUbUhwfRES5MSpLHd2jhGAuJ8N3K6E3PR2MyQcjCuF3odZvxs89oByv5pTSGkvk1K",
  "key38": "4X9VPDYX7onngQoKa2cZx8KK2LwWk78KhVKoF88DsAaJzYMLzXmnS3CAYrqqMFSwSw5JwnSJQRsJKPVAdEXKZaWz",
  "key39": "5waVajJvzuEQtPRU3cQMKJi2CZ7fngayM5zstjDp8SYeJUpRhppWZcmT1xfvHG5YbjfAQvc5U82Df68zQgTot3yH",
  "key40": "oMRYnNcHoG7vwSF869NW3EeG2yixskVVWJ1BD3rs3LSinxpS5XiuAjEnoAYhyUCJCCmiVH6mwCeQ7d97X1MWZ8t",
  "key41": "3fP8FuAiAd5sonJivG3CHndYSpncWZdrYe9ktWuyp7v1DLhrPRwjBrgzbHZ3m65tm55XHozgnBZowqUYykg1gcj4",
  "key42": "7Eh7x7hm7YN8DisUVuQi7HTt9VRuZtJ1dCTmy4rdA38CfDKbVYoz2FXMjXeUAZcSNVdiYxer5CWdKC4PVkrSnix",
  "key43": "4Lah222mRModYkL6BXbP5QJaz15uCK2DFnt5wvDPPdKJGbPu18nPpoQgwCAqZWFVwC7kwenAEuPNvFJWFyxSLhGf"
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
