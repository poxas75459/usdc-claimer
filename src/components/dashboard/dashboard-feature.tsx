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
    "4TDMzS3zit68oxGskEadqnwNCB7u6ExBaaBUuD8FoAdRD9wqm7dy2diXEFpvZxobWKRmYgj4wVYFcYUFhC7nWL1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmQNunJS98uewQLVMuhckZYYXafX9Jc9g85KPykPShAi46pi553m4SW4QRrQ38fYwjNMPPcbbivFzeRHNFyw26L",
  "key1": "3eDbHkRPWBnvCP2d53QBKT7ueckSYSqzwcw98f6irPdSe4qZTUDJdPdqBDZrLyrMeLRyLbYtk3m5T2u4hY62TqVh",
  "key2": "3k2PgejLXATHNhrqSgQmhrvJSJmECGcVTtZex2JVorj1iR1kyxPinzPQyVty4YFefDTKGd4mpyu8oZuKP7w9hnss",
  "key3": "4KW6YAGn8EAYWvpjXHtuXScKW9Fed22uE5jmC6eCQWx3DtDrFkq8wcT4ExNjqxE6j3vFA4GQqrjMsgkRd1A69G2n",
  "key4": "2etVAXtaJJoUELFebgzj3g4rw73ryLCoGbfUC6U3QpDPAoJyGyEhMnqakymCiru3KpH44Qm7Xbs6UvD8VJ33RiDN",
  "key5": "5EWfzbXkATptgpW7DHjm4P4XKL4PqqbWfZyU4agWZyLRuVGji77NJUP3mTwe16DbMQtqCqSKKRgu8DdEiBq14J9f",
  "key6": "5A16EJem7omrr867LJQkxMgBDt8QmY6bKzEQWGQhef9ZCTM4rVvWYHWpikbsGAdMdJwfvjnRikcCtU3qJs6TxSAv",
  "key7": "49tuTTzvNYno3JaVyPdB2ZnDww4KU6dkATtVpgcQ2fEccLy6wRx2oLpQuYGiXeDho1s7jvrBjjoayW9JRQaUsiCx",
  "key8": "eVBC4UMZ6YvJtfQjNdFFsdpNdYc6gX9M6qUUCfmV3Lp547E4wt2Uh4cNbtUcjjCsAUgP34FqgaGXrbroQd22tuw",
  "key9": "2kwZDjNiJFnVRCr3HJYy392F29K9mVziVym5KZ3upJYCgPtyKFwFnNXU5V44mo3QLLPNCs6Lf9XXLUBLCFKgUnHc",
  "key10": "ptN1SRSd3RgjFbRMaWKc6ThJhG8BXg6HBEZfiHoBbc7yrXpS4Lz2k8m8RszJwQ5jvJfTGvJuoxKmpcH6SKi7mwp",
  "key11": "4p3MY9cwK53KcD6BMgC3xhuiV8RvyWCPqqjfjEFpWQSPGAfUr3KJnxWXopTRqveJhWAcfmhTpKGXNxdtyFKpWUKz",
  "key12": "2uhPEHC4UpJJtqDrdHNpaSmAkAQtZKU9hewAaFeQQ13MLahJJdZcx8NBPJ1wWSdk6J81gNCLGoMB2RSn3fH4rEDk",
  "key13": "2XnCPA8kiL1asykBXmeDTG4b1ZP8SMvjxNDe374FwzqgYMZ6awJZzy2tyz4QGcHFwSBVn7iZvRp6cpdzdygD746p",
  "key14": "4g5oNT1GZn5oLNVyccNQph6x8FxqafYAk7jcZGbya7YWmtPF6xM4C3cLLGdpvj9YypwcBhXyTYyHJ27ZfFvQh2Xe",
  "key15": "2Hj96FyRHgnZDBst7Jp2gHmYArss2xWfHxYBLw5iok5VoFmobECW1nw2Lie83JfeoF2zkEUTnit73STkQFLCMCcE",
  "key16": "4yW2n9yWBJnVhhLwejxKrENheWD6J2xbHsU5ZypWib1pumkEshudnucuLdBSjFB3MJXrAYPFohkjr5P6ME9nxTAk",
  "key17": "3UkGwC8AoGac3BwUx3Z9hWFDznb5MfnN9qCdVdT2EJMA2hEH7FweE68WFwovhtehwtiVX2jcqQEoHGQizrJkToHM",
  "key18": "4KW6CdgpKBgTycLrpaSajjwJTLDcY3BuoonGXr6yzg2yBg96xLkuCSLMPry2MMbzig3yWEX3DTc3jfqTFezXpREJ",
  "key19": "LSbuqubuug5CW2nzQC41CdTpqEUuWvEMp2ykvFcXdzp2ctH2ggYgVbxCKr1TwRHAAgoU8rCuSMiYBMbKGppg7ek",
  "key20": "5jhVTfYHw1oRtSx1kPVyiSJxiBZEeak5ibotSdCjLbaGB3KNa9mm7mbr6mvmErBwNftU63eQn3A9jHsRGkv2TnND",
  "key21": "2mSXZPmKLjvYXyzV5PBJPPHJwCFzcuop1byX5ekLGK3pVcCWGc3aBtzJ6TLyUqvohf2Q5KHa2yPqoyygXsRD8vgD",
  "key22": "2sVNuVF3vYQGVqpCLE9gTB9GaSFX76CYTvDY8c1adCSULk7y9amjAxF43pgfCvHMhbGqQgSKBNMv6t3xjoMbBj46",
  "key23": "4263YkJt5WHx9nyseeo3PcioCiSBFhGmT2Nq2cVxEFBGUiDzABFUx3qAgjsSaYergi89xUqRaWJJ6gqEx3gBpwoY",
  "key24": "3JRTXitcd9JyHVpXrkDUZL7LTg8T6XcLhkzj9SVNus7RdfsgMZYgszNHuSZv59sUFxmh7JBTK58DVUzP9BtRUtaF",
  "key25": "5BvJFqps3DJpKswjEkkEThxKFRp5X9ADKgU2831HGNW54zVnxsD8RpBCWgvU9d2gX8ufUPajuG8F92xGixNUP4za",
  "key26": "3gf9WznDSue3WtWSfGK4qPeRXg99L3yNk9gbaKqAYcyPzs4MBTmKQCTXYLxbiqqbKYNwt5H3LNMgrAYCksLXsTNo",
  "key27": "2LqcektC5AvV3WHFtruU7hBvynygfiFSMo4amyeDFg5pevixG7MhVK1QXsmku3upE9Y9zU8vmVUuZzsUtAFmjQcf",
  "key28": "5rHTMrXLhisay2wWBfCdMki8FCfPmGFBaNrATzzDZwRoZsFobJgrikLope4gYjEagrcouufuvrdyUD5DH98ba1UH",
  "key29": "3dKc1v1SPq6eiUzMHWcxUqZDu4P1LQ7cui2bz6N6ZbFSYkjnnxgFSarjkjhJMZVaLEyCd2dZ4MUY9bdovJXGZDRA",
  "key30": "Hub1yNr78GGHb2DccgbUcRumXVPe9nWP6dPb5oGtYhuKKBYzK7VKfGHcZ51ocjG5mTNzvn1bvED3mxra8zuYyJQ",
  "key31": "3atsGT2kuvUYJzuAu4VmSLwquJbj6EUyE5p4ScAmfzvQcMRme2V5aYEV4xCRKACRX6Psdv1pWurqYaXJeX5A6YYu",
  "key32": "3jsrhdWPPD2A5muF8AgMCPWpjV7KT66n6ejVWCujeQhuiyBxERtWu9G7T9gEjo1HVwq4Cj7D2QS9L9QftF8nAPgG",
  "key33": "xi6XRJ5qJ4fxNrKmNSccoMdzeaeRRe31UjeWrrythokLm86xFiiRwVif6FhE9UPJsDMnPgTBRCiMGp9xfyWmS3a",
  "key34": "3gK9vZDQ1WFC5C1aEY9wiUBVaoCoohfMZiWNrxya8rDGdNnXwfpK5UTUjw4J8QJP9Kih4ucwdVZACt5iHrp6Hakx",
  "key35": "WiHFmxoAKobbe9CjQPjigJzUgXJBKh2UHyoH9bmnSNL6EeNXH7vtPEmoa7hmtVqiLKK9MpNRqP38BDdivdTRTbn",
  "key36": "2LZsqwx9gUhbeirobJwp6mvt3uN1oBCUhNDs9GGFuCWWa31CzWhH6C6wxUGRtLQFTgUQEPE9TrN5fbpoMxFLHDiU",
  "key37": "vMqA1dMd6WsZSDouZ4odbWbhr3RruEgi1eWUcHEaYhFAVARr4DaDwjTA8njEjWQEzA7HHutdkWBpfgMtKgR6ynX",
  "key38": "55tB2QUvd8uuw217KQ11tBGxWRa1tQ2LSQVwXk3Swt9eyFu1XAA7TY643Ufvu8YDrEFJUNQw7QUwuyGz2kRDVKgw",
  "key39": "2JvUkR1vFCgVauJNwpWEzXZAWt65kbTceJLmVwPTALA5iZwisX6X7fifsKZNPuFj8SCzkN6ar9T55iMf96gPJjJp",
  "key40": "4o5cpEV795Q3BSQzpDaVAQsumxQGjGNM2LK3mVTAenarW8gNkaomU2rNMTGDFpT5cGYRkaTUgMF5kukCNQg4kYti",
  "key41": "HMx7t2386ZKLebyToZYQDxtxEg9hZQYmiB6Kgwz9HTZPBjcL2T2Txkm7KKGHAUAGkLX6uYTjLTTYsDGxLA4YTNQ",
  "key42": "4yzfMrevUKoPP5kcVtviSSozJiCwpgFqEtGeiz6iq3R654Tom34cekgfFw9aSkeCiAu4WY23rT24aJHV5LXAsKW5",
  "key43": "534ZrxL5gnsBwub9evUrmopMAgLxyiCTmuL59AnAchhQXkPMdBzVURzq5sL55G5fGrUCtwVGQoqQM4CoG5xqsnGR",
  "key44": "5hJqHXhxPi6RGfSGKWKQMxgWQQDAFqejidU3EEdUDt6EuTtzGLvm2nWsogUKEDBgpK3XjixGVXFDCbi9621G6QQR",
  "key45": "4cFEHsXVS5zMiTjLdGmpvPpbxckyPHFLtkpRKCsGU4kbEme9W6NUUkirch7Yfk5SdvWDGpgxTzJ2YvPPUmt9nX9q",
  "key46": "3YTiwo3vAAnY4yP9HiEmXKQ9cidegTDjQJdFn6TeXK4T26BjWUy1LBLCtmdtRd5XgQSkSEFerT8t14dRm6ALhoW",
  "key47": "5oa2uGTJc1CNSmyiQa5v1ZDApF5iGDcSeNN43r44i9VYXhwykoy1hAaNtyPkFaNbH88WxsvXRP3e5gJyXmgxpTKK",
  "key48": "2XqcjiRrKVtQrquSCXjreVuF58sz3nRYwYBaMWWBdg5Li8myjrVJ91R4nTGgSyPypwZttQQ4raZ2YcZKDieA1QDE",
  "key49": "5mJuXAvacCb1WNV1BaeLMqUw6E3ctBXfy3RfH9whMZaUmiSG96iuWB6UYs5VLjjFvqXofEKaqQjVknhKpFyvX8u8"
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
