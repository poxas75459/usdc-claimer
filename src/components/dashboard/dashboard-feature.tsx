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
    "4oDuWFvnuFG3N84d5RRWR9d3KrupFaB5upwM8mCnfafeMP5D6DsRzcXUjLjjkYJYP8oqtKCdJ1UDuDkTQPQEBFS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Hb1AMwb15uq5xQJvcnese5xJ13NFaktbRQG6gvsaKUSDSaXDVPSybnNbXV62b4R2jLuWjDdx67qnnfQvQkDD6e",
  "key1": "54sfTovSrWRH7rzeYUYEKCDHdwuBBwDPtZxscShZVoe4PJqSucGxq9XpgPHkoudwZQMhRobs9zw1z1x2gR5vFX4L",
  "key2": "oaSqBLMk1atsQNU1HhSc1TsVYNobErgxXCiAVf54Bjxarapi221BUSbjzsLRYSp4EPpL4KcZyHduDyFw3uNCwQV",
  "key3": "rugjPu9ABLFp6ZhxS4cfgR8mAqVpzcqHBNP2oFq1zm3KScQXUBnj536rUTiY9YwAoGqSufmvHkLST97yVQSw8QA",
  "key4": "5ULLKZoQ9NqV3GLSE7ZqSKnE6eMkWdUse7Z1UStmNXrPgWYd2vzYLV7ZMiQAkPWRtMw8HA5qvrA7uy3RP44SAeRG",
  "key5": "a61sPejNuKHwUWFgRYirKuakvujp4WySVCyu6avmwTVvuJy8xqR2chDouBEqyGMX5oBGtMwzkKMSbGy8Zt2F4mj",
  "key6": "55rmgq86EdAD7SKnwFN9oUL9txGXc3ntVsrBUdxXwN9U5TkKGtuadCj3QvrMmb1gZjuvSX9ekg4FeVZfhwXr4K9e",
  "key7": "221YHobfdaV5mSFJYXorjMMmni7KuoEcmQ6RRVcswiUjBpP9WS1nbfPC8EPVgf626S1KH8MXjAUFqZcrZkk9Uuh3",
  "key8": "5E7unnCwfFvxrbXAWwLU6zoYYvLupHeZeuM78acekyynuGHaPGa4MKkiPmkLtWoHQoVkFWaVuycgQy3UJU8MZJxf",
  "key9": "3mwr5AGdYcNfRgTsezR6VG3WbSiqwzcorGK1bPChRXsaHUwoixw2kaeShHwLPcpAo6FFGVrryxwJuf1bTXttokN",
  "key10": "2zfKfD7dgGaa9y6n8ZK63ooJ9AvhWo2zyrqN71Coa213Vn6iEEKtjAsP9ScG92FrdA7r16FSmRdzLTTQXvcJgvPT",
  "key11": "3zJZ8GMctYdXhw3f4wtpQySkD638wVEFQ7znDUCg7f6JnDowFMSpVojYtQqJQJEPAenEtavv4QqMTqyi7AmG8ZZG",
  "key12": "5RkmSWR51SwmRbwzA1KMfjLNStxKXCHjLJhB64xZgeBueXp9XsQ1xCWMBtgav8m4T9PF9ZL2nLQNdhDTxpmXE18r",
  "key13": "2WjULFHsz2kFxG8Yp36q5PAWwAXmjHnGsA3QwhVTitfTB6sDS5H9hDuHPwjZHzanaQGZ4jMzmUeSiQzX3bFFis84",
  "key14": "2VZWnMBjhYnBBXLZRsxTi43rHQzS67E99YEvvrthUajF1zmpWytv9qacNjuvwSQhtySnSduHJnkJ8HKwedd7oZK9",
  "key15": "3KdGAq7DFXroQqAV3EpYa9ypFYHQuGDDfL1soZ565PGNUCoAi35N2Y4kVYqkzwVXud4nCaSfuatRvDucSAxftz2C",
  "key16": "66fpX6mchF4rkJ5HPqEWK81D5j8svdnVGJJ1jQ1dMPqHzQPUQxiJ4vpbykSstAeKX73ZDv6tzVjsDqE7c88zFZ6F",
  "key17": "5vW84qGi4FiMRQpGX8pp5zkhf4cNAnu6pHDKWSBnNA9CQy6gHTFx7tXtSRoApq2rqixMMkCwvGrMqKDMwpcLPBkC",
  "key18": "RxJtiCLaTQ1XaWay2mn5QJAfLjYnspULgQ9dTXvdRaksrcfpCtVZ9hc8AWGqE1kAPyezhXYxwQnmE8WQ8wincsM",
  "key19": "2wVUZ4DLgMvCoVYFfCGhSugdZuVNSozGwh2yfYPqU97jYkEDf6Q4uRWZVksN9mSzzFeZgm44y4PskQWV5tuQ4kHu",
  "key20": "4AWeGPjfNgmZqvmxVZ5Fa6GNRnDGuPNX8G6BDUXaPuiWkBLs9LqQXFDU1VJRTbYpk1dvGEfsFCkfBKALTnKivnC9",
  "key21": "1Mz2oxXgn1ifEqeLRGWK9m5buSirAs4D8BDzvZvzYKZbuJhq4Lc6c6QzBNV5BZeSS1toe23EzjrsGum5xfhxDJh",
  "key22": "4WgEsCeBZbRSLbAv4bEo5rZ7Qyuh4P4Tsv62Stvf2UQESXqKejNLWye294f7116odiS9bTHyzhrMbwaJMhgTAnzx",
  "key23": "2GNcA5cZsxU75VVj4ruwfBi46fhTWC7Waq6Em1J7mPAAqSNVnj9QmL8cQy11ETFYmt9jQcPMueiAPY6ZTiW8m8Gb",
  "key24": "2xbn9Le2F2H6Bkf6FydrqPoyNuNSxeV92h37uwkSHKfLcnsq4DSyGwHD6D1FDUSgdqSQocciqUDX6ireYUNkFFnF",
  "key25": "3GK55F2joZWVcSwiute9cg3GVQHQEneaEke9SPCf2Zd5hVSTnCDZ3FRdiC7at3qKvLAYRZtubuT4EG91heUMnJjN",
  "key26": "r8t3N5QBdazoMEDubmhXHvhMiUkeXWHgZCpxKvG76XjyKgCqDJwVNs5bv8xo962dGmE11QCLCNGUcr1nC9hFBMw",
  "key27": "4udEQHMnnHrXuDzzwXjTD2XUgWwZdpacy3DXd1eQBdVMRcqf24H8Dx9PpYw23J2YNfgqZx2srWEf77f7nTecWZVG",
  "key28": "3Eq6U4mecS45wt5vk5z5aVE6RnBEayaKjS3NEcEorMg4SjTfAPnHEnrxScCDSz8qyrnVjfbiSvnWLynzfkWxiXJQ",
  "key29": "4jZq5ch3Q2jWeMsDponD1pj9eszd8dBU7fMEAdW8gRZCcizDfQX3GMfotm9W4wsYKjA4UZm8id4bkHEQHFuHr66z",
  "key30": "59WLrmSWrFb4XDcRSYdWi7n9sYqzbQEAfpVziRPqatBT75Eoe3GvEgzWqRXU3NTrr7By412p5JvwwsWCG4dVVVrs",
  "key31": "4i1Y2dscVLx2AdauNi2Fr4q2v2TqAxypTCqysHdPQd656hzydKZy2hRJ7boSPyQrJgYTsuREpu4HT6iScKSwBGmj",
  "key32": "54MEMLdTaqLJVaPpqAt8viW2hgnSXpz3vBxzatqRYVUYe8yvEJo6G4fPHcx9HvNnjhKjtypuBmUeJLWL3DmYCP5i",
  "key33": "2M7cngrF6dGx9bmAGwUsdNGRPj9pQVZJP5g5pES2csYMutiCHR76qjTWCQAcQP8Z3CVXKrs1An7MmhapokG9Hytb",
  "key34": "HrtUhBADSAxUUogogcfbyE8QYyk1tPtSQ2UHDBtndeNWJbaB9mq7CDbqUACDEYEwc3JM631apMhpeFFQ24pJ2Lh",
  "key35": "4vtSnWtGPVpLwgdwLRG1FBiov9PYJijgUSRvvnY32oQDHfs1ZTwtoQXG8X41UW3WYQgRDmnJkQLEm6zfEwZZgWNG",
  "key36": "DYgDXUPFVPbwqU7fBiNuiHtuJauycGw6sBLuHdSyZqsBB8DosagCGkx9qKjf8K7vJn9d896rbySL2avKnTeAGiU",
  "key37": "8dwwH7GDETDt6JjLbJmFjHa6xyYH3UCqCRpLJSYm3cR3yiZqrmqJvr3igZXoqwA7fx5mvfj7nqcPHHcH3zPBAHv",
  "key38": "2CtnWeSgkVrjF7izG9CrAUxgry8Uw7oaNfiobgjy3EV29Uk5J289ghudwaFtbhA7c1jzrvh4EzCsydtpnMeu7xdL",
  "key39": "2J12rmhqwNQZYpUJ3Gp5DFioSZ1kuHACCw9Wo6rCYygJNa2Nw6UPMXidPwWpjoxF1pCRNeZyGnEuKtPokc2wwAjn",
  "key40": "LMx6MJQ46Bt4GzBHYrSr1ugi3A76YP45T2HPwJpjmNbkmt5rbpEwm5L5rwoX2d631ULV3RBHkxzHJTyPQyCEUza",
  "key41": "41ot1rePVGraMDBCJfL8bCMmJ4wVpSQosTJEcjTgyp9eywm1PXzFKMgcENTVwt35dpg9GpyrYHJ1krPTG4zg135E",
  "key42": "5SZguRgEsu3rYfLsKV9t2iA4pLDafBjKhtmMCndgkdmnFTuekBASEMcBZS99eSpv3g4e7WkqFSTDUYNFrLH4Fhns",
  "key43": "5c6HN8NFPDrFvP8aw3kdWMdTifA4VsvhSCFNefVaRMd6xfWnzG4S8fGaPXgFyke1PipZktAivbYTvKRFrrXoLFDQ",
  "key44": "3GR8xzKoSURCGRurKZge8VkSUcUMALKEQya3UUKi2odyYpJ6sdPHWbfLvXfs8dw8aXCBNPikuhQxTToC6E322Mw4",
  "key45": "2jjw9J3ZCevwbUq2uZ9HqfmLVvgXRSqmT311DExoKLL4F3Dpg4gZbdNxrbKBw9BfkXhm2pLtGvWGK24TQCL65AsX",
  "key46": "JZZB8LWScRCgJh4qYJhKVh7jAxP3mwMnmaeBn8udTs3fLvz8WLASRDxvuVSH178CTteXLnBZfXHee5QMWcqrKfQ"
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
