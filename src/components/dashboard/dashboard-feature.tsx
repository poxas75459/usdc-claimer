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
    "3yA9Qtx45VjKhSjdstqZFTtHE5ArV29xr9V77twwUERG7mcifGvg3er9MBBnHgm7a9BsrdxFd3Y4LeW1k7nQDN3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21LEFWeN9aN8rVMjcw5B57xnojcXr7Lxr4k21zwukke4cB7oNauTGc4whQ61NHe9EHrFkgcgbrZR3VHDKNzom5GQ",
  "key1": "3n5iKrVDgNTKifF6VyMi9M4qw9AEwncxhbGSKJLVUBDm9un3xLWxsRXA39fqeXwbYCdgwLBzZhZp9QspQyhU8t28",
  "key2": "3dmnzYSfjEp87FnYn83QG2EwVmtS12o9fj4hTN2zFgHVZvvJpgeD76PiZTvw6GCXmX3vAq4JTJUVAkEj3tmVGjnp",
  "key3": "xYQqrz3pfhurfMzbiuZtCrBW6Pzg3iPDVnhDeYD49aKYmoktC3VaSVBHAJkS8ainrxyupqbZRGrDL1e19mJsoDq",
  "key4": "3GG7KZLcDrnWvBMLKjuy8EpDC8C3tDgZXB7U1guKKvJ32FRvg5moxBcRSXe3HnFYd5vCZjoY3ko12sDKk3xSMbxF",
  "key5": "5zcX2Du8UQKDNiM8iZPiY8EsGmZu3DHJpTJXdoxJgkzJpuhxVFVxQ6zpDxdZGLycGmE9hidCfGDyc5jdbBikS5eB",
  "key6": "ffbnXrUPbyympBsv1LMHxarkLLXwf4QVrQewznX36bmiiw1hnsxRfpBgdCgiCJkj3LjEqRGp4XBC2R8ix5QAXL5",
  "key7": "3Bs6YB45r79YGLCJJqkpQrH6EgYNqwUfb5JZSd161vBw3Y34STJrTK1rAstLRgwJt4U6fbSdS6Amqatie27wd7g4",
  "key8": "5w9fKYfpQc5N55QzafzjE65zV89xzmWLm5KLjsmZ4Htjiykyr57cJmozd4HDAWY6xquJg6pntX37ZNr6dRfAfqqN",
  "key9": "NojhkUQzAkYokKcVbWwMPhHnFghytsYT7zC5DutWpc6PBMnprympUCLDy51iLQ6mFamu9oEgNmcX8LNy3t72ndS",
  "key10": "mbNJsDuieNCqkzXCy8EgPTya7TVEjmC6rTev7gCxmJ7FrzxRwEDQ3mjTQZYNQW9psRq5HiHLfZUJpzj5L27cGXV",
  "key11": "39VTnZNaLqiJxvpTyUua2SWRtoS6D2UNyBdcBrHorp2PtcNPtvCRHCoiUbTQr8Zeu6i32uC51WFN2VNATMApBB1j",
  "key12": "2pma6nwfeWHTk4XZf8aNhRQasVyxxpfStZFfPWu3NG69xF6VWMAHj9U1VdxqimdNCMtU7mc3RJQBQmmqnsYjkfYU",
  "key13": "4KLAvEmxzgHrrR559izSqW8X3azBKviiRJgzaf6rQEBoAhHV1hwQnyEKu9Jnp8sqfjvJDqa2iy6QLKCzdkkPyv9E",
  "key14": "3n4PmjZY69FcEcyTggdzzgimDb4nK8JxZEf9n5dtvaUUf2zTzx8ZXLqp4Fh59WQ8CfpesVnGRBYGisF2eEJv3Goj",
  "key15": "2EX366WRpGBvqhhfSFfmeiXxFe7QmFBdxvNsHrF3os581KHeqUzeZxFrbi9jpvJeMVeH6QVGVsQKg1KE5dojYjCe",
  "key16": "3NvQt2VSX2C3sK8mGxxFzTD1BZVbYYmtoGcgpDdtP5KkvcsYMNDzZsAgSihYendPRLGMCnZNDdPa1WMPvUYCSZ4q",
  "key17": "mvy2uwT8kWXpdurVFHCdoqcYErWZpS1SU4SxyiBVFRdNaHcMzFX3Afd2ZK9ckMaWekaSBxRRiAMb32rCWMe2ZcE",
  "key18": "4eNe25KQhuQQztdBbHjuEv97rZfyMdbLsfmzigymw8VPD3RH4SzwisyLrbkkeGGvDChQXwdvEsmTPZL2PKGeAbbG",
  "key19": "3D2ENx7s5UPSXNrANtBGCMUgDh5fWdqo1ELwi2nh59c1GH8WJwTgrt44cG7Yu3oKUv455pZZQQnQGtPTvLp3Won4",
  "key20": "4jadCrP2dz3gsnKzwnhzJ1epM4AAYitXwoag7F7fUm4enjK9rqVmyDryBEctgsgs9jqyzqMZ3Wro6ZaWBastex3P",
  "key21": "t5WZC1AucBQB8c83DgMqaqHjbkeENApSSmu63bB8HR5rwBxDGcv5XbA24pn43sUEf6pqF6JqHMaxuijYDwYkRFB",
  "key22": "3S45Wb67NrRnwtP4Vkp8S1TXUEeeGHPkWNraQD9DoZygMb4PvTSeftHMaYQiX4DnPUqkZfDGVsHXsjVMefxXr9mu",
  "key23": "4VBawmTFyEsSHRVsZGrBUKcs6qXNtxznAB6oGKzcsJaV4ukdnvCB7nccgtNPXVzmL8C1MMc583W5JDjrDFFLU1Yq",
  "key24": "2dtGiHyRovNbHRcumR8GbZ6Xi4xCbLNnBBmzYfmqaHnbHDXqJQ7dzPchMZcAXxm5vMQdWrVKrozmReVNBKC6uw6V",
  "key25": "5QdnJ69LePuVKCkSeD1jyicJq5eL8iaEiBh8v3kD9eoxKAbCnbpXZ5oj16eJ8wYZ4QgXK3PxY749YHqBrLsK89yP",
  "key26": "38f4wXYxe8JLQ2tpc2tQZguMrPDECZEznNEpCATmvNC18KfQS6AdE14Hai5t2NBwUV1D5NCU1jSJkLWvid46JyZf",
  "key27": "36pUnxZziuBx9RNPmMaqLympThRF2qZueSSRJTjAFfMeTr2zBrtmzsHRQfcyFNvEtgRRaQmvqasbcLygPrhiJPgR",
  "key28": "eD88MvmwArVAezZW9UCqwMbTmYN6eGnUAriPHvZDbHyj7maPpnmU8svpNboJHQz1XDrTJrH5kj6koas3RTf7heB",
  "key29": "2sH7xaaFaih199xMot3jYsmrJy7RPGbw9qdofyrwM3wDnBiurHW13YCjP7x2nNsqW5hktrNT2zinZefQ9kYMkavT",
  "key30": "62kxvf1VqNokuGkwwTVaSBdhTUiqHqYvdwXYzxRmHbhfyvqzP8ssQz11EFXdB9MUZA4srD1HM4iJUGWnjCMAQrJm",
  "key31": "2FQFEfuDh7ub1RUQBd5bG15ZYHtfrceeog9CbXXvRqks75Np5fXQHg6XH3itBum1e2X9CP7r9Mmy9Ecct6URLkW6",
  "key32": "j12rdWnHcCqpsdwTiDN789hY352mKTv5NAuLbpPXkoosEKjGZXHZnCFg3Z3mSVcuykyUc2mrH8WD3wDmNVmLCT7",
  "key33": "thLysdqawD99JKXEqcmT8Y7vBeTzdELLnC1RhHfgoYGi43quRwRwfFycNiaEYK73rNPK8rKYV7esrPwcMex3xLS",
  "key34": "3XcYgpfjkfoiLU8G7xpit8dVbQ7tzUNSMpmnjtEoZ4aQmdtxZhxffwsdpYaJeXcKY1DtetEUQvX7eAJU9MyvJaCc",
  "key35": "2JXKCZKuPBifxzXjhonNpuzCUYDpAYChge3ot3gHncVScyjj9sewzLDXwQKTvTqjdWTSRfJnih4ZQ9a6dP1LoQVz",
  "key36": "3GqoLo4PGaQ7cV5MrtaXtmb7NbNhKF4QnxsaGo89KB9vtRk8RE6D1sopGZrQCnvHZC6dhHhMUki69F8AgyR7kY8v",
  "key37": "333EE7EDnf4Ax65a1H4ySnTbFd3Ngui41q6hmzvc5geuPFMidkbEwfAJiyLbFDoMeSszVer3gXYsGFH2RAPuY15V",
  "key38": "5FeUTkAmh6FPGW8x3SEKdWEQxCx4YMQArwjX9i6SxppevYaVgiU1Yx4jTr2BHajK11CPqMbiVDkSnTBUVKjDdgTw",
  "key39": "4PKhKvSoz3L1FPREj8p2ut7842nTYhvhki37PXLzvepD7iwSAmweQsUrcoHNJkHojbMEezYE6Fwrm3gNtukP5T8g",
  "key40": "2CcMT36UhvdPPYc6Pe7f6m19gYZSD7X4hqHZBaEX8c5XfVpHUHb5g57EsrRWXmnWZbW21rFwWwDQ25hinxkBfGEu",
  "key41": "2Su8c7orfSPaegxxNu6JwMctS4e4rY4gMR9HzTxyLVWBq9NE9Qff1JL1AWNyU9G3KaGxANoaCUo4UjxDyCnzo6jy",
  "key42": "2P6JpzBhJsH7ddX3gJzsDGQejUTdJwDpea7A89cGtXj2wczvU5noD1nAHtBZWz15Koi5AyAgjSMtYPmmsxg8BWBM",
  "key43": "PYpBXSiazDNirNN6bJi8cYcee2zpTurwsGtvHFP2AsywjTHfarCJnND668xGorVc4JtnohZGUjrseCBBPd9V2Aq",
  "key44": "5CRdwXSnpv8JDr6xEM7ALdiTBqEBUVgzKMBE7ANUnMWLa6rqZAoRxCnYzZ8nu5tRz77jEPkqmHmYdEWgFst3CNJ8",
  "key45": "3a5wkeh2fqvmJYUftmC39rtp5HhhpLq1Fq6j9bMKxFMrHBknZGEf4fT67o4QTxHjbM7FU9jgQqpxqUFZLEhH4Apx",
  "key46": "5j36eACcQ9h7g1QmLTygRb8d6r4iuhrQVyMGiXri2U17H28NQ3sPkomVyYcrSCWcaF4qaxWQNHqG38JkL9ZEnm2u",
  "key47": "5a2zZEVThGwionUZr1jRPnmJKkdux9ATwfkcqiKhzaAwT6z3wpBJfA4ukZKk4S7DNqum2bnDN1wYLJ5Tg6hFhRai",
  "key48": "2xGRHETrwiU5o2HRB2nqsT4gpqB13biWihJaSoTLvj4ovGaiAExZMzE5Biey4GTCpK2xxNWTw5ojnUieuCKoV3f2",
  "key49": "2q8ivqhzGCywfmBdVsicG3GinbafxgryoxkG9nZAmTQwCyaQHXWTGt3EinDjrEjvDmys7ya5GBFtV48gui6AkdqZ"
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
