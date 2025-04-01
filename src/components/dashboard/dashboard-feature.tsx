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
    "oQcR7v3SQQW1oGVeWJpViisUUcVUGH4AvaQG11aDnDMcAwcCGJpUqaoYahBE5BciyEXfqkS6V4Cd4TUWDmwRrUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uv4zwHaeicoXSMCbkvNZySR1MNkkbk9QTGhxZGwtqiwrFonsFgBEj1dfCBxHhdxtx9HnGHK6v7mxpTxp6FVYdVJ",
  "key1": "23X4aQEaVxJF37xzDWXpRSHE5WLsw3UCcbrLTeDzGA5T7rR36cTj39zcLDdPwjbApMkiwkGoK1XRHkB3GwwHPhS6",
  "key2": "Xo4nR6TEGRz1DfAtJSg5PNwKphmUqhKB2qGEhwBvaMhv9caBsnYWH5odnMBw2ZvEzFNj9Wh4GzBRXQuBGV3qnee",
  "key3": "nWGREyDxZ7uuPMrjjQ1pNJrChEiAJ4EpwX5QiiUeESTkmFcDoSyjyknjNgWPvoHmw6z877Fh6AHk84PfSM8qDnm",
  "key4": "38P4HJyENdDcEu16CDM1tG9vf5227ouGKTT8TUCjvuGH1AxFGJXUpY6TcMR4Yd5toXgnwParwVBn61CbqWtJdxoF",
  "key5": "5UUWU7Kn6yBf5gexzJJX2ycoVv2AMskKz2shozLE2Pi4wKzEth4CNbGZTjScPX2jEqk1yJbKXMBE96gVWeQYwJmY",
  "key6": "3xNNnFWd7NVyeWqm3xL6vSnFGtdGfEpazmdc3gBnSnhZCqaY55BfPvESdjKAUvr9TVukt7TAcFsBnQk9XXqXmW42",
  "key7": "AFjR4nUbEUk5s7PLgmJayLxKZapz7CdgyKqdzJ67NcZkiq6gC6H4zx9Um63SUmSQLn4jnFizmXDbb3ugerUj35d",
  "key8": "SoSuzQs95cAkEfFnFLtfmpXGDk4NMkErj1BgFby7deEdFdQF88pF7So7nc94scyR78qXXBkXbLwAM3y85pKBzBN",
  "key9": "3r5icBw6Lw2XuTtCggzM34EHgnujNo4mgAsDKKGqQuuJ1XuJodjTYLkcnYpt19PjbkgtH2qNCuJRNNCSDL2X6Jmi",
  "key10": "ZNmzCRUykXSuQwfDR8NG1haDzXXt3EprRqhcbhBdo3sLw43C2m8eqkR4AfVn7MxXUW7K27sUN1F8kg5xLbeUedu",
  "key11": "3S1B97YUYDR8G8rxmrDDyKsgGoKgjJRQ4VM7n9vTBkxvRdwqqvKqcUvg5pQVSzYtCttJs31aeef48fkkL1e5n5Zh",
  "key12": "4SNCSyQKnrWZ6UdEvX4fE5QZ3YjHK9oszt6T36Jf4UsLoyAj48LE23wu9P2uM12v81r76zT5V14RMRStnMT1uajs",
  "key13": "36Y5ezXbhtbFpzNfGzgeXw7fkmqkQJvr5bfKm5oneHSoBtpPusypt3eqy6LoDf3y8LUcJ5mDZeoGvq4AeJQ1E9Rh",
  "key14": "Ld5qB1G7gb5kwSRieSi72hk1Bsydm1pq3ww9UNhusUp3igZ7kq16XrRNWmtvgsq4w5NLsYADJwXakAMQG4eTKBq",
  "key15": "XeQkgPNKjTwwLWQznRhvZeXonS1Tb6AMhohqsxRUNutnHFNmJmVcZYVF8deQcx9uHQWbvpJ3CGi54JMvTp9NJda",
  "key16": "3UcxvEJgL11TPGi3yst76CTFTjfdXyBhXuEFARY3skAzcLQQTitTixnXiHujJzuDTm9Ymot1t8D2sMj7B6RHWcjp",
  "key17": "3rzv5QojbRHLGZtakAKY8TbwnT1QdDDgKKjrP1y8FVWXRavinq2ekvmfb2DJ18u4e1hxPANZPwPSynkNZHtyeWfE",
  "key18": "62gCud93s8sBCPNCJzsYbvnFUi12xG93hZ7X35HX2jqQnKnDteUymTqL2h93jgiNq6mVQTydQwft52DpGiraLFQQ",
  "key19": "2pLauWyAncr8LwgujE1cZifAMRheLYCAPjsAxXWazCyqbAyESJffhyrs4YStHv9EtS6Sr9sQj5MJQwDg39SART7f",
  "key20": "4sT1TuA2isarVKNKs9nKfu3Gnxr4szPZDNTH3Uw4eyxG3GbvTKumdoZNU4Poynk5DMaAHsBTJ1pHCUdHpTEQxkEi",
  "key21": "4EEdRD8kktGsc1W6rF4EmGvERqztyE1kWKyUscQVadno7pFkL4axsSrEnB5y7oZjDoTLPMmKTGq8e3ZnY2w9tYsJ",
  "key22": "5rW2iz3ZMzD8Hgn6QzodGftWbk6iPPCeCQhSN6g9TcnALMouMsjgur55Do34FzYxMSGfRAGF9BWKYVGGVz9fWWsm",
  "key23": "5Yg9vVdFbG8sXVmS3ViF1oMsz4y2m5suwoV8RqARgpCswb7FC2ahqYLesWMfq9irD7AQjdkwXVHUQ849rXjkF2k5",
  "key24": "29JS7dhK1UJiuzSZUR2rE86K7ips5aWoMGACHXyFM4QPjY6h9PbCGQdXeGjKDpEWUvYXapMfXm5ch1VE2CdcLGRY",
  "key25": "5ZGS9jWQ3ZCwKmPzJK4wWH6y7Zfhgn1ehGhbqFjr7Lp2ZfbKtjBCcwtkJTCHXVdmC5WYQJ9GhmZBU2xAzxX511nS",
  "key26": "2ZZAtNV6T27Xm2XAbWa36TJUTLL9Lu1isZyyXMR89ERTRqakhU7vc8R4LtjxP2NBpPBVqQMWDVSPQ6YBZs7aogaS",
  "key27": "5LKRsZ7bNDCKinDafmdFQWBYRFfsH62jguhrQFYA5CinxKCXNvMikyVzANVJpS9kR6JB1R2oxAXHko6iMwxg6jRF",
  "key28": "2MLc68h4fEtyZBAGMQYVho8MhudNK8j6bQf6w7Q3cNv3gTySNNiGBwTTYkBZyemRpPzU9igs1EgCLpW7EeKuLMM",
  "key29": "3durVpyJdyKM1cLzFYVcZYFqN7A5fxbz2BYHZPqLc4MKZfuPwBvkY6BuRAUd83fgZyCwU82UuuypFLs27oG782Kp",
  "key30": "67SbfPHX4eWusQL5J58LVvLb8er53XJyBtsTT13U77GQbpBAL9s6xtwDLELTFUVyNjg4o7UvcZrcXnv163BY7BLy",
  "key31": "5Eteeb6YariQd18YEMimVgrBuQn5mpQKunJ4qEkZgzfxREV7ZbGS3Q6BGaTwFGtu1DsLbbHPPbWzoRhDbrYDmmEN",
  "key32": "Fd9c3GDxWdK19ZxgnSvgxqJamHbLbQ8tC1noKFxHb6MqzMGnH1BsqnQKZ7H3zGTiocMaFf4y6U52Fz8NmKtwgWT",
  "key33": "3gu2xPGZqjTnAKuSkBNvk6oAb4oYXHw5Fg529XBFV9YcJcmhXZjpCB5U5h8QTdDhpcKqtUkPzGbqNJSZcvjX6Ru5",
  "key34": "5cv361AV5urg7qwUQJHmMCvpccyzTX22zKuYJ5wrA9a4TTMHRvJREhLANrRJyGNa4xyioNLx1eqanuRhECuGwChg",
  "key35": "Jf6YACEgkE5n6ErWm9xv9YLF5Lw2kDP3mQar8ayERsYryL3dKHAyhgWNyzZ7yV9d51TCjEqrYWBwMFqtA5Tu26M",
  "key36": "4w71me3J1Dfny8K8s932D4tDNpiFfTiKhacFYrkyYid21423VPgagyntxfFRkB6B8wkvAQPmor5Dn9UgqB2vU5ft",
  "key37": "5YHWwmqkXB9cQwxLDin8opDACrnH35xd5yaXfvrYQ7FUDfgXotk7mCBfZcSpkBZvnHv3KxCBqy7eRSYzQkyHbhW5",
  "key38": "61xzLDPtnaWRcjrt9ohET3nUAFMjBmSxZraTuhZyfc2gR4pZGPNmUTEKymsND1oAab6tSUNSyToBnPZGiUjKqWNT",
  "key39": "5RFC3DcupENyW4qhvPFmE9Yi16XPManu7CwUA5APVMBuAKJWYZmnsvzdVgBmeNvZ9aKqaJijvttuvFBtEiMDDtDQ",
  "key40": "h6be2npvYFz6yFcTpnFEYoGujjBqZkxQpxVznDh4k9877JS3FeSNFUbwLd676GYbpkw6ZVHT9jtpSrbrZ8C7jaK",
  "key41": "3vjjcJV11xPTAZzNE1bB9HQmKDBmADyzPiTQLUWFaN7oGijwqysy118wt91umLyrVPFHtm3KQWigxYryTFLSvUuD",
  "key42": "2rqm4BEpnVgY2N1JmzPXGsj5J1kGXpiyF8TZbApynip5DDwQgm83V8pdKDFS1Jax1WTFWLQDCQZYbtdMmcKy6goC",
  "key43": "52DowGgR1TBpbooxeUBqnXPwLXHYzGxQtW6YbFiYUqdz25JEsGKNhoKMEas1CAG5hXiipxpzg36QxwGGjSyTmk1b",
  "key44": "2xwpVtPmpwnhmvzv2LWTVkK7QLz692Tjm5mKgE2rpcm2EhQoR1Z8rQqMYAb7kxR4ewZ89FxYTXPKoSLjrxgAuLi1",
  "key45": "VoNH46ouT75YtNJnXsREqiuzi48V7Fg3dcLva9PrA8jzWwWineaJA95yrMEuCZtLHbzDXtxrt4FdkswtRzVKa41",
  "key46": "4Bq32Aj2RMNbdwBywwAmh19bAdnhMNWXKJQJuqvN4FxamdyRJWUyWo8LweuiYBWofAnG8aGsvB6HW5NeXAfYXd2u",
  "key47": "3w3Cxy4RBi19YCXjWGWWKW4Pp1aQC1v1NiGrJGagqUzH47MfMLsN7zjYDSDFRjpwNLgUTXbzqRG95YBeTnfnMUQX",
  "key48": "3gwehAoVxg4iP1KvfEZsF618igYQFEv4r6mLec6zh4Us28tVpZCWt8d49PLVBvqi4WvpEfrXRDTCxsb1vYfM72hh",
  "key49": "x569UHmzDKmz47Tpvpo45nSufdyU7aRENxCe1zRjGjUVTZsrKGqEwaUDAWKPriptqyqmSrfEuZ6Dr9fbWEXGg5R"
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
