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
    "3sCmtLMGoWcpyQNh4kgvC3urj7w9K8nB9vQQ3mzunmAfMnReQZWwGp1g8eyZUyyBxqShPTtcG24kvoRJWhJv6zL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ba8wcwRfPZ7FjbTmeMWouiTtRuU3MvC1bgR78Hy988mztEC3Tsn6cbZyLokg8Q1TYca4bByFfZ6s4V4iXpd1oWu",
  "key1": "39Hp87QKQdvTEV2qKBNXD3UNNCGKem6PBrz58HnyMcKTw2LLMRPpQRzVMuE6tXP4Rn8aXbK62H7CWur2oThpiS4V",
  "key2": "49yb5o9MVZUtTx3ayPbcs5kPahqEsez26YVd9Z9RS4GDfxECmKuRHX5KSxiZXzn2KGm2sZECcPm3VshJhgQvH5NB",
  "key3": "4f3yBcSywyDCL2rEpeNDX3Wm7zvsqJmwSQCjvo32WfnURu7Y6SATNcV48FtXD7LiNhg68MJYaB6mxUtJWnh5Ns5w",
  "key4": "5okabDk16isgT9gcqhDiwe2WBt1QpV98fJxpTYLHjh8namdn8BZiPWGSRRDvEaLJmvAUWiBfH9y7fP89Rhib2tyL",
  "key5": "GFQELfG5hGyF7sj7We8FRdfosudNfFEkLBPZvTbJcRSkgyUUshSLMUhF3kK8bHYi1fLCGCMg7UzsAfh932t6LZs",
  "key6": "3oZ8zdENfWJRkHupimHaFEqMm33rU1f8RcuSoGbqmi4UX1eMzP5HJoJqJ3WccsjdXcbksTWwJmH5BbFAy4ypHJDA",
  "key7": "2844UfmXiXh59NanSn2Ufk5fmepxxWi1RL8tuAJEPRSyJHWVMmNdKjffmTHF54cBMuf1eZcZCU4J1iFWVMHQftxT",
  "key8": "3oQ1RH6TdhALfgywrpnyTiWK1bd9JvDKathpniH9oXtkdAmJV5h2ZGQ3nEeYkHDFSR9T5q31VAPyKUVoYkm37QAd",
  "key9": "34MieFtUGu5nUUAvx9v8vpiboYK9FvUMC2m8S2HbWLweNBpFk6pGouKYBo8wfg5BcmMYkgubh61D92KwcoE3xH3Y",
  "key10": "xbdSPoJbMDvKSaAqKW6jpwBTLLkWfGvhMhLcsrCwdg5H9pfd4PtBGEMf9A8bKqv32uRt4bAsJKh9CV2thGFs14m",
  "key11": "2wu6jSqNboLTPQvEra7PErxvrjVBVHKEYUKfkhicHTmoa4bAHpxt3rKq2mmXviz7f42FNjXgKCR4QbQiX9jmxtSH",
  "key12": "5HkCw6EYgxWG59thmHWuxZUzLqkQq5u6m2AR1ADQtrJjM8X1hc42WJCrDKtHSyAGY2rtBz3EWpxzokPxqs9tBNTA",
  "key13": "4PeWbkKXNyWYwNqQr1re5VW6WzdRU14aQmHkPXADV5PDwbV3qqB72X9ePUtZoufMfE9XoWvuMQ8Yxpm4prtfwR3D",
  "key14": "5nMCLaEoBeZMCrJ4ccMh2wVshJndujvZxBRT98HdiFDBx66wPgt8yMDmhiiqyuCh2HDdPQsbnFDnpP8P6HYTUvxh",
  "key15": "4bP9cL2e4ijHtPALjVDurhPpepREoXKK1TajYvuco4JoPqAP7hxBmS8LxZSSaFtThS8ZBF1TGbE32uMDektv5Y6h",
  "key16": "FacBnuSJVFEd3KNaefikB7NS4GRyZFvBU6Smr39cH3ypAWPZ6vHkZP3g5PznBp9sFjr9w4sdrsKTSf14fMnnW8B",
  "key17": "2sezRYHiCL9KhsHs3qZjvxfn29oGxA7hAg5UzNRbA7gUs5nY32PkzND5tEiFbzmcJeymWxRV58oJiZpmqD4Q42Ne",
  "key18": "ZF33TD6UsGMfCiky8B18LVx5EnBUJmMU9jy57uf4TKMjNoJDgfq1rKk9ti21hXNoYqGw5m3ZaEaW3nxAeHvatw3",
  "key19": "5ZEvwLbhGj789fGsgPfSSLQugVaZ1cj1yfToKwkfQmzRDokDbyNqwbsGAfRo47yj9ngbreAJ5jo23UKxpc7ea7DU",
  "key20": "4MagGSuiuM3gu8zWTXVd927zmUb6dsqDvaXQJHo1oaUjAGJREdu1ZSfjEdhi9aqT737kjiMk516ZF4sWDFUGeaSs",
  "key21": "uLCzQzXx5WryBSwdGBgvopScBZsgeAnh5wsCjow3cviJ5qVUjfjBR9MGjpWWWi2TAE4xW7RpoEvCmpXHxaWxKY1",
  "key22": "4dsoxp8HgmUakTqcULfVHW2pYVo72z2ovYqYriRSjuKo7NcgtphDwv5LsKnLeA5SkeL1hgqCE7EpJiFxcenEr9G8",
  "key23": "2HoQXkB8h7RH9Z6PPAeV5hnP4jxUERnFUyn3oribXh7QGQe9yHn4wswGuQBnJsDwQwSKCiwgibwQ46EVyMMj4nUk",
  "key24": "3SMRr9swtE4S49iG42j75CZQtRkpr8Jmb88FJiwKn7icHMQwWarPFrAw2Le5kbyNH8uCkY3HkwvAZZygBS3U4Rfx",
  "key25": "2kCRzJDqmuGR5nQUPKfRwDSBVLuWhPN4VUJSqKca5FFSRDCE8h2DpCBUh9sEv9SwtRhqCzL4yAdbpqCSfKmbVmA3",
  "key26": "47j2TLC26k1J6YnkHwXuTPM1N4iZMTD6mLtxogztVmBMf24eGRXWv6FraqtA6ddAYPSCBwLRrE2Yy7jRjCvDTMSM",
  "key27": "4dAuMWqp8qo7dGHrC6Yg8SfBUauMoUtZQFpKWtsZ7BNLsRqfYiAJxC5DPZ8cEu1YRXFVoDHzk9M62tgGWZw1RtNN",
  "key28": "3hdTArSVFjEsMGrnEtdJbuj1pNPfhM1UHvSfwL9Q2eNmy974XFdFzNgvDPd7oCXYA5oWmqLdoi8Kx7eUfZpT6Cqo",
  "key29": "2gGF7xmf8oH986eYtnpavrWvf72UrwsWf5315yNpJgpycvKH38Hfmmv9xvtvdi7JhuWiygZ4TbX5PQzXekFmy9e9",
  "key30": "2t82nRAyc7cXhMdz6cw3vD7VXyoFZ9xPgrqLsPJ88qzHxax4ALsf9PLJccmEg5mrz81e2Mg5RtCGfQ9iZwiviU6a",
  "key31": "41mx174JKnQ4EJj9gnpkYyYYTKeB6PUYgfqVrwhkDzo4m8ZxoJd6NJShqz4Dan3ca64D3TmPdqpwHyBNHHDHsaKk",
  "key32": "2giQ8dm783PZVwKy4eX4euQFZPeZg3zqycC8a5ztSfChpYeYhrvBrx6Ny82ivEVpXBcwSj5yxJcEtVJFC4MZcXcH",
  "key33": "5fu1d7nnJ6tznhuMuJtve62jf468Nwh6h7Svi7TJ6mwE7QJq5UDiykZUk7PJzGtgGhRp5ceNs5Nxn1A1HzG1aDQn",
  "key34": "4metdxTHzeN5ytFrHh2T3ZFzWhPoGMsPN4u1H5HmHry4r828aBdHLXB2URAb5DBKgm7ZXBv2tnAGm8bProijwuPJ",
  "key35": "4mGGvfURE9wpNSAG6WwqUE4TLo4QQHAbqJx6aYL9BRVYyAfp4RB63KkjBfXj1rzUwGHJfpVhya3WacERdZK8GKAh",
  "key36": "34zorXT8mKRHRdgqXkbcNpBBeNufLKNGg3G4Zxw8ZJ4Jr8RBQsh8TRrR1tLAwNfrspphJJxtkX59NM266NWVp8qG",
  "key37": "7uPEjsSrqz91FQNABjqG8anpwQN3CqQ4aryNqCvcRXCdFnhhzdC7HeocVjr7TucB97Mth5bc12JLKG3xmb2coLE",
  "key38": "2rcdAEugXoBv7VpHqfwfEkpgVKVwaf2hvKRiNA5Mn7gJWKuhhMGQ9Fxk7wiKqXkSzT7GdVAC38t1UzxypvdkCQ5U",
  "key39": "2RQiVTGBTE8akv3Y8gTxnhxeSGbwcyCPH1oziDRmb3ZgGkcpRooSU6hH8pXuFS2EoCmCNPZrmuEuQCgDJ3YKnK2c",
  "key40": "3NW1gQpSop7Br5cknj8qmeL1M1C8hXLjZPBDfqhmfVZvs9DwwDTYHxpqCd8L8pCWRd5b6wvFFHnd5htsEPG7rbRP",
  "key41": "3f95afB9qU8sNKZEA7rLoqEBSXhM9Z8s2TBhmfEDaqjacVFCdd67yd2GwYipKZ1ZCR99MX39Sx4JC6yKbQkbAkMW",
  "key42": "55GMRtorNZugCE2a7yUzL2QWBFoWwYhDFVhgCaYGeJbt2yRnCJUYQYEfBcKXZC3xARU8YFvkuyTTA8ET3hiqF5Wg",
  "key43": "NYHRL2UiGXaR37Ewn5ka1h89Qt183s1NkULAx8RP3a7KLoC4w76K5d1q6WTxjwEnGznzAZS2ZBjpYVCMWGKjpX5",
  "key44": "4u3jTwMN68GNrnDVYL5QvCqTtbho8LPiFHhRKYv4pjhDM72fFuXVmumMn4MayXvrVTbDMZyxhPhBJWwveyarhVBD",
  "key45": "5x2eFTijk7GKARjxokHvgF8XJH1f6mfN96j4GHFn9qJe7rNSXJrwM5RAMC3E442UhAz2FtTdoGQatPV8QQ8LbW5J",
  "key46": "2qaTwHKVbqQpQPhgLoMrZQg6DgwuyiD74z5D1AcLUvSrRZ6wnaycMo8g1rprc5hWyrDyQg5UioxMeWso7v3f8SMT",
  "key47": "3dDdCsKcN52LZoX9biRizRJJZz9CxZ5FPVrdUDRCgq2FPmRhQZexdHam9MvA2PY5XeDb7R5fiLRM4zPJ9uZCfo1y",
  "key48": "5gghzXXjQYjEWL5C4aGjdHN8LsGkDa8nrmcxEzkaYBUefKqHiPY2CJwzGRSNZpxMjqEXvukQf1KdQLTPqsb2Q4yw",
  "key49": "5r8XDpmPs7UT9YDTe6gPwQ624UKndqgGrnW3ATSidKaGm8mk8jpqbNTH4brZeErXNcoejnRzw83dMAn1kEmEuvsh"
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
