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
    "r7M7szPEDe6VhW7btXaRMg3EbfitEwKdURTAby1PQG3vL2VemNzRuksdRnGkjHRUH3rYEJXqTaukbMt2RnrsSa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cdQHFnjHxcxfD2maBVVhDJNAcw4mk1mju8iWL4xYWka8FbAzW1QYNaN2Pw6awuny9P8DSZUFhLsdepYiAyQcuua",
  "key1": "4r4xVTH4i7JLoT3oxfXny8RfPA3vcxY9rkhJfyQbUy6szWM8SUaet3KKHs2D5tQ6hN9HYuMHEcTS5Gh6Y3TGhfkW",
  "key2": "4wy162MjLYzv2FTGi3QVBqcxxQdpmHESxHg3nuQh9kBRSZwycMNzsPyPJ1tL4bFKXetAfh4mZgCQuPcghs4QjQ6",
  "key3": "PDgXNaAUBZy4X1L5ycT4EXXwzues5iCvFAB8mNVe6UNHe31EvkA7vYqSoWA1z3oP4jMt1VTTHyBhG9E9z1dCZqK",
  "key4": "2Ao8pxbnsgLcd2idsr2BV6Yq7QM8Bx15WkJrvCifLbVX4p5gQbAc1ZJJeXLsV1R6xKT89wGnp6AXPuSQk4SJWwkc",
  "key5": "4dGYi8AVCiPYoDDaSf3DWDwvGCLAwLRLHuFZnu6rRgoxEP2J84m6n4maDxZzVREcQA1jnbhTmprpA2vsvZZLcdeQ",
  "key6": "3zQTLwQhKin2Rmy3Qjstu4vhvjfRU9rw3XVfX7KaUdzCMy5N7Ls6bCqAb6ENxhaAwNRj7mvaKgRn4532e7ayYC2n",
  "key7": "XkL9Tm8msuF9YRSp8An73mCYJcMVjvXDdj1dd3ec6ZzrAudXFEa3p2HAPcY4LHAxkzjU7z6BSm5QLfJizfWYUMT",
  "key8": "HjNMU4j7Xn4mbsnr19quVmim3CWG3HUZP2wuq8jAzYSbqeV7n1pNhStitKdnvtQFNAiqwbYnDERVpCCu59m3ekG",
  "key9": "33YFkLZ9j7xkDiuEXLQ8SX8jUUE2mqnwzB5S8bXZSCptztwFiUw9Gzc5pQP8FnEAa4nrnBkAP2v2b8fjU6Xgoec5",
  "key10": "2dpwgh9M6jFEL51Ab4osJKWD2JuFUreKgpEpFcHTz4fWcRmPew4HbP8LiRfyWd53KuhL9K7gymm4HAB2sjUcBsF4",
  "key11": "3GkZVjJM9nmxfFUaoU5mUvDDkZ1335Q3m7ksZcucaY7hTqboFmG1nTa9Q9iuqqm82WCDyTnBkYs6FpdywPUcPuQq",
  "key12": "4DX5DJJp8PgtgR7XfPGXLBVrXzyKsQV28NkRtYDB87MVpH8gXPEPdMu753hG7SEugExcduypTDXm9nbwzSG6DXMB",
  "key13": "4eH9yYQfXBqxgamp7ZpqF9hBMGtFpj8Yznu3rBBf2Mehgw7BsvdbphqZCS2sNMqjCA5yU5PNChw4nwnoNAQM18qH",
  "key14": "5JHpAWzDWanQ8RERY6Db48vY9wUVJPrmpwSTu5LVhrfFP3CqdEJEiF3Nwg5kt3GVxuAZpaxD9izqStAxo1tD9eRC",
  "key15": "2WRAwL6KiZtWwPuhfGAFVLe3chCpYgRVRidjxjRuNYTAK3i2tLofe9vxMCRXpsMKpDSTxG6hvGs3Q8MsubZALWFg",
  "key16": "26tPxsm8aFVKKbU46wjD3oPDKkR2EZTJbVJH29BtkWQgbk4M1Jyazg7FYhodsrjXWBeRubJQFmUptjnQXwzgMJ6r",
  "key17": "4JYvaWfk68HCCHPeds4fSax3ANo6cWTh7qb5PEMGXzwySnrxzwfj2jmWc7x3n5gWstL9KsieFz1KX3p1gPwYf6nH",
  "key18": "GYxTai6Vyv4fUR1TDUvsxxsWCBzrMBAa6ZRT6ppsP6PHRUvtZJmch8WazUE1KV3jKyJmUPB2kQ8rPPnetzqQumd",
  "key19": "391WgdaFGYGvAup5aFwgs1vXBqSxNqHQJwUFiMDSccc8SKjjdS3o2m39jjnjq9G8MmPhbL9Dc1Qi1EFyEJt9UdBC",
  "key20": "38pP9RTNXiweabfuRaR1MhzWeMrd8VnuZooJhPvdXq6BZaKGHfaQVnEQdDPwuMruVsZFFVb38ArFXV3waGS7gC1Y",
  "key21": "1263Bbib1XK3QbDcb7iWKs2GvhCdPnVNLg73sxg5SxhajAogYp3tFenpTsZ79C8Q3Uz2GnHe4dY2qiQ9aQYTDmxV",
  "key22": "4pAXhc2yYGoZeHnDRoSfjmpFLDTu8yt8kdMxrWErN5c6GWeeQHvGDhDtmcT1Wr5kdB3uES7pNWSmm3ggi6RhrNB8",
  "key23": "bgZoWMtcJrx66XgmwfeNyF4wAJygz38W3izTJ1z66vVh4AfjRK7hdt5MXcdpSFodcitLHFbizgct34LAatee39T",
  "key24": "4xdHg5r2L2eQwDTH4qyhgutpB1HFEJwLGKAtTXfADE7ghY7TaSjKXVZcHp4GiSbCVye6xfDxQnXeQSL2nHxuGA6E",
  "key25": "3aCoNvneRgstNxaVpctN8mnc65rwxrHgzU1qycHeMUaGHPBGY8cZuVW6UTUtxtKRQ3As1J49j2C5MkQpHpoJzKkn",
  "key26": "2siBPxjR1onZeQzAuVFQ8nPNrJsaEHsBsGbSauS5fm2JWh6TRvuBzxQqivjKmtuJsKPeEdBkTegspJxnonwPVxGZ",
  "key27": "3hU3ZRyDqvhSQbYRbwC5EBL6ntk6HaoyazS6nv4iKTYKJQr56uCB98mXbC9K1ryUsrSqHyq4vM53pyHt7A7fBwUJ",
  "key28": "4GHBx5nbBGJVeHTJdiMEvmUXZVwveCMUnhn7LRTwwk8RffnRzik2XHYU3Qdp5sz6Jm1UmkXMo2YtaBQ5Vt6MExxb",
  "key29": "WdYTXq2UbLjUMyQwsDtRDVuLNG6jDr3uqm3dd1J15GLbu4HskM3Dip1VSShyWN7VjQJeiJnaJurwXn964P8EtNx",
  "key30": "42yajGdV5ktfUw1QrBRf1hpVarrZxcd4nEECZYz52DwgKSMzJmH1K6TWs5Q8EymNHGKAsfqqHWKZuQXPVUGkX5vx",
  "key31": "Ej2UnkWpQp6ear837txomKdndi8QZRHNyidq2d3aUFHy5fYv7R3ez85zzXi91aCKdMkqmdXDdbkM61tjTPkohUX",
  "key32": "2wwfTe7TcG7aFGeErMVdSno2Y3vS1LtPoF2nVCv2Jgxc8ikYocJnt8v4XiJMMpVbQXHtYNAv87ehWseaA7TSZRvU",
  "key33": "5d3wP5zr6DKAp6AQMKTHeh7Lcsj8cJEKcc3hxerC3nVLiMdZd5xZDdaFR56VUZKBngfMwC8my3FaPuAZYePmVeWk",
  "key34": "4R47xyE1hoqus8AA9uX8SwyPj795UmLc9YSSCprdpGHQuGbqxTza39NAwDskxNGqKgdcX81CE8Xe5S7CLRve6tgb",
  "key35": "26Tbu49X3HZdSkoFK6u2zZHp8RujAc1CokgZpUq3RftJ3z8X4GUwsn711UmGrzZeUcEyCQbRedivz684yxoAaPva",
  "key36": "4bnEsxCL2NikQLwvkrB7SeRGJ9CsAyjTD5BB5bCUXwEV626GyhTbnHNG1WxXy3u6nm1kyba2m1GU5nE4ZhPPq8jE",
  "key37": "2k7fyFejhZtNg7AjX7MTHZL6k4XX4sbXMQfHBtU4Nd14mi6DzD2iQkikMueqZj8TzuuzCizdTRJjzFVUbfTJNvHb",
  "key38": "5vE5K3Dgc38HHwrQvMUC8oYYKCHafWCXnAt4wUgwgz4iA2GpJGjBXafuAtF5awj2enmKhjHnB3pU31vK9SJYZ6M8",
  "key39": "3sboPGJmPrTNUV6x3neGDJs4X2Uv4nw5LoaTVxwuL5YRmCysJ9C7XZb8maBPSn7fYiopeMcrVgnzYdsi1gefTj4u",
  "key40": "esBwUBSSCiFRhUigRXYyyVQbQTEixVyaRDwtZGvoHK88e5hkTMLZwF6nF68KXSXCg8EtU7XedwES88zL13kk8es",
  "key41": "3iCwsX1arK33YZ2hT2RUrCg3QDmJ52CFhC8rd8KGhLtktaJpb7r2ZyGCdBz2emoH3uGdj1HJBKhTaqPk5c4U2DKd",
  "key42": "S8LktaKG91FZ2g2XRTfVytCAmEW3hqnG7MC7noNz6xPK8iQHQ8fyRP3yPWYfSE5px5VR9qgBhM1aRXNUv1EBNuo",
  "key43": "2EfkWVDb8sNZLVGMHfrdW1eRspWbVjnvw7L24WxDLjnT6f8BRnex4WB7PDEWuFjqMhYYBRUTg6ebV9TvrhGbMrzZ",
  "key44": "uwyGXVZ58KT9KJrE7mmhZZnMZ4i4Zze2FoorbnWQZwQdRqw4Z7dxQn6ndYtrKQFoQpM7ZJH4B6TR8Z8DTTJo8VR",
  "key45": "4YEXNaXvHab9yKrFyCDNkttTVxECV8VjjKH77PPMkPA1yG4p1nnNmVo5RBN5d66bC31hSfAgEtYEd7zv57Bo83r4",
  "key46": "iyGsHQtADVeNNfDAGajk7wgfvLd4EVBHmsL9WqmYSVRRiYDYJSkVcbiBYFGCC3ZeTzjkZWc7o5s9jyHsVykk6Lm",
  "key47": "55dKYg44ykUu4UhaVUPNghNtSsv9aQSJyWc6ShNLrfXgRcdi9SXiu8EeLLJggVpKkWLXoApAzCHWqbH4GCnMpd48"
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
