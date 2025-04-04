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
    "2muyjNQunJMP87Lm2TK8wQ4J5BHcxLRRoXQksvYCPHXdcdPXHzwMAPBytttuzTC8z5KmsH9at8CPzLia9DphJA5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDKKjPYv6xotkqwsGesrvqRsyhzaULwyJ6y8ZgwR2FXb5Ze4s7hdDttjKVC8U1mFNvjAtWg8FUnSjsGN4fM8MAo",
  "key1": "RSRkYnQQjWWYM7uQSSenMCo2YVdNeksbzZgzQ93jpzAaeb2yFGDaM8Nwf2mPmtmUrdo3bswbwneHzEsg5naWiqy",
  "key2": "3CbU1SnrqK248LYZXXSLZegpH1VGvvh6TnFQgxxnqegdhtkyp33vqX95QqBGrMSfZBNMeqFAqKQQ3zKTUEbvZ4HJ",
  "key3": "9ufo3KjW6YKCJiHSQ2DmShXHZ6fszh9J3MXRTWzAUGUzhHow8an1s8pQLWB3yLnuQUpNW947dDqKGS6EMZS74AA",
  "key4": "2Gy841akbxxMDPSQbEKyXRsXawyBqfbapSxSVBUhPbcuPWbQwsa6F7nJozXYNhE9QgWhEeRnd1CefrfJxBAUfHej",
  "key5": "3LFJLiHhFziMKDmWcG1SoJbKCSoJG6g3zGGQzzzDqa2ozNDAVKoXEdt6B3Hf4eYYerFYgkCSSvuNfutC6sXdiTgW",
  "key6": "3kApPPrPxngAGQ5uin7vLYG8UZ6fYjagbXhDVtKpceLnwtyzHKziEcetHYTP1VFjHivVVAZhmnrBxT96Jwn3inKG",
  "key7": "5EWCzyvrUoYaQhqDB4kMoFWWqbZt96Thp4EkkVvdmDrFKK568dGgUib286b6UzQXsMAx9fDfeZHzE3m1b2FTfZLY",
  "key8": "4mz3ZDxLjSvSN46u7NBSuFatp6JsEsp8T1afjykFsi7bAyCYcgW3AF6xEALoPcUFymh2vVrPqRhzobYrP5LJ8MRj",
  "key9": "23oebHGxjg1x4eQM7vAAUXrZMwoktfcZU92wuh4Wp8E8rU2GmxxmPQBrrgn3bRab8dkovC4UF1fRu6PMchy9og2n",
  "key10": "29np6hmHAVSZkwMXQEqH2SSpCb28kBdJXYouQLVgYiqMdKmUtncstiithooMpr44WR6AmB6g27XqwuB8JNo2Tryq",
  "key11": "44BbnrJ9PcoS5UFKCGVqPEnsJ96NRvJKH3unMUyPn1ZBTiY65Qb3eJc7foK6Rw6kJdhbNGmnL5R82fYuW3f95mTM",
  "key12": "2T7ijmXcfXVE8WiyVMowjhqnFezP6f9qjpeRmizKLA4YJCLz6NhadPkz9NchzRfPscX7wzftxkkntRPPdHKsWYgC",
  "key13": "DHbbgR9PuKDpdZ51EPa4MKka5zA2zk7iwHgFqmNiaVHR8iMo9N5Fq6i5trkSgb6ULFeLMLUMDPXg1YmAfQ98njn",
  "key14": "5JdsZyANzFCLSpnT4Gj1ZUNCk3GiSJFVLmaA38mrb3Wm4CbP8pVxJddfSW5um85wRaYRG5Ud9GsZAuKhFbNS9zcQ",
  "key15": "iT7eq2Bkq3KiALFKtKu5RsHmrUs85JbjBXfqBgSGeuY9DiMZw6FZ2Zy43KP2ZXEpxUCqvKgyfxVfemuU7jVQ21m",
  "key16": "5NuWS6Rgm4isz68Qhsc6CtpnWt66o8YsMyuyz4Ya9mR7Mx53fzAJah2Nr9W2rRZMH5wQ6rji6t3zPsMvTxo9R8BD",
  "key17": "5Zwk5NQCU2zXRuWtQ6JE6WL8tfDc2uq3QuV2bXq4xHU6sHBZ7RyMNro85usg7TKmqZieP65u7sQBbfcA7R2hc5vD",
  "key18": "411FRDFAH9nHxqTjkBCHyVmrJy5f3uB3W4GWZ4H2U88tjha4B7wPWFYhWHdTrrGMuYnbFwQcsYiDcdin5CKCkum5",
  "key19": "zPGBLLLVzoXkf8hXMWNJsgwmwmH8XPHHRrAFDAL9u14CrgBFN1ytN724EycmZKku26cDXzggoTQen27mdNYP9TJ",
  "key20": "4ZadzHHeKtZGTEjeBoQZz9wVDuKk3NmjZ8f37QvCTjKnFmac9VKZtzrF9LP79FJYCiYMKkUqhffk39cRzQoMzgSA",
  "key21": "5kXKLX3r414oArZsa2a4EbbbEBpDdDJmDhMRS6kz4hcnBWZpQocKNST3LM5iVFSrJoodApYYdmB3xBKAcLo7hfjT",
  "key22": "63vK78kgsysZdArGGYNtM5f3KPWgL3zUidHPK2F8bhJXQgHH73MUmaLCXKdT9A7YAQLJPwuqVB9QC52zCWYu5MUy",
  "key23": "5a3NR2b8ieJ2VmMcFtrPXCwvkavpydrjbFuf1HgD7uUXs5L2ZyJChaCZSwJDrnQQHp4QC3E8jacKaNNwgf8fQy72",
  "key24": "29QR9EY7RzHYqU87HukPK3wYm9wxY1kcJoYJK7URddAgCqW6mJ9RhYynHburaY7khhRxQ2BPp232wdCytfjis7Mx",
  "key25": "msE8DfbpJvCiEXhNqqZ8qhwNbY8FR4seupdMp2LbddGSpjWyp7p9m9WMBrSoGbAvjReTHeiZsVKvBhbq8aFUxHH",
  "key26": "3WPdNNneQkLxQmeZDzaKbkBRbFhweUZohCwuFAgwxbDndGADAqw2kteyAPewMZrqcMTo6pC9Je9agCK96oWbBA1g",
  "key27": "3VEPkpDaR7qgpHAUUU8hbtpziV9qWxjAFnqiRG7LPnaAw4n1mcxWTYYvXQv1gfdsYk2TXcLN9fHySFs7KyJTnVP2",
  "key28": "2dAsFaAeG9dpk35KCLY8MpACZTjinHiQZPfq58DuWjsDxiuKUxdJUujhdsnVGE1z2BmewCNf8uN1TjZ427u6Dz3P",
  "key29": "2VxmgBMo23SJAbb2mcdaNsWTaC73QWoFRXBpEtZE2sVzYZnVUMMVuChTSjNFsNb8XnxukYADvu3fri1rxvviiVsM",
  "key30": "56PnctxZdJtgKasSYCNXZhqVTJAbbLPyNvMPgMcF6TidXCTvvHpS32CqhothQYufLaFoUiaVoFa6CPjoFb6dqw5U",
  "key31": "4NjU6BcZz6f3jyBrZewqhq4ArJAFfEp3urQLh1VzhN5XhLHnyLpcGHFzMDzvxu5vRNqLHpr8iytWtoAUUf1j6Tep",
  "key32": "i1okRcSNvBjoTNJkRD3eoaDByqFAoVFFEnt2rvpofWCrDSzmzKtF6g4J49jUXw1Ktnek14mUr55hyeqwsFsb5wn",
  "key33": "4UyPgLn5s7thxgkuApULYzng45BL6FgxAf1xnFyGvSaEMjJXmfaz61Zg1SQKWUah54J7qczBJAAFuAUSYNFMqNaz",
  "key34": "5JZwqVQCG9B992uchYVFoQ614ubKTFkFZL7JhQjQa1S7rXQ6rRNuVFtKnTu9nB2yzXCbuUNN6ibkyVAXyD4kMZiW",
  "key35": "EGd43oRRRmwBf92V4LrMsnoRkTSzfryRSBJfSbDd57BNy24qMWyPsfK8AAPULcWkRpzniLciHxxa88hZyrHT8km",
  "key36": "4LJnct8C8MF3FwHhKKuAYJW831W6iFApuskzZmbcRV2wH8PkQsftwrQSefA2oVHvboC1MdHncgvkgW6ksKzSfQ6j",
  "key37": "e7fPgwixYphaXZLG1Xf6G4jqVgjJ4QbSBrKXBD1zmxZK24iNmajQiMfUtRCgTLhKPZNjhexeitG73WzHrXHafSE",
  "key38": "4Fq6q72ETog69zbX5sC4qwhtJNMRKDSdQY6exyV9CL2cHJBeEhZKjENiNBTPGywTDub1DzRs41shLD9nK8zrsdKJ",
  "key39": "3L3qzSsge8C2wRixBjwiW41VYv42CMziVctaBGaqz7n848C1JhRjVdBuiE4h9hMSshbKP3SZZVeoV3Qnkp7K4n1K",
  "key40": "4sMzhKa4RFGBJ4zknZNRuYui2hXCzMQ7fLCxBb2hNChyqGG861yz6ha97VmJHPbdBJN2eMcuSM15F1GdpeMxSEUb",
  "key41": "4hhoQaiTuTjpVGW7xMEoj7HMH4aZzW5WGru8RdSucHyULsdrZ9LDApsNj8DG8TS7wiVUJfhb6UFL7E8iT2fGE6Y4"
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
