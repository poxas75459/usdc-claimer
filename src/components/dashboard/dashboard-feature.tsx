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
    "64f5k5cPj8rN7Emqf52ewBj1UqQm9sjVuiA54FmnH6UL8hVgovXHdSdyEroSg3SjVuKQtrBcQtyD8eA7HrEAWK8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NYagnqWYYPV3cJuE3gp8N7EyETWnm9JqMKgeKgvRV6LjwPHgDkNHhWpMnux7PDxPJBCpJspR4KfpNd7sXRNcxgH",
  "key1": "3HWmtaT3Se3Qd2biUKKVrWTJe3k9gJDPL3E6aySxvVanFYiYgWM8CjQKQMwitiCPGBfsTRotEz9KM16m4cqFcwVu",
  "key2": "4eu8Tf5vFUjQzK4ZGQ4k5BhWs7nYjuHB3frLyqB3xtaCmoV76rN2tMqt5LE5jUEcBrUtfAGzWK4FEU7HJy4sETFz",
  "key3": "4n1G2KCDmzcBG9fqZbnQppcgfzP4k1sCaXEQSSVjpuuTVafGVqT7vsGASxaiVYnjAvhzuUGSwDfCsAwCoCd9fHAj",
  "key4": "3UwSErtXfLoPXSUVxs5MDvR4bNDWEUcAU3D99cMf6Vt4xgW6cFnqknctBstDuYaLQ3YNDiP3ejfyw6fYXvgBMrrL",
  "key5": "2ihzG2eKhgLYZfWUH1nT6MGYBtPDTmAJaS7UWf8kd7vixgx3D53xPbeufyzomBU6ZBPgr9gFXbwiMY6kwdG46oh",
  "key6": "VYquFXigP5nQgnw7dxk7Gspn37QSvLNdzGqffE7LE8h3yqfDemt6H1XLwsiBsDYBhKzcPhXS8aJnNCWK6ATVv2a",
  "key7": "4txFS5aQyKdJTxQF8RMLK7QYsTnG1isuRWkN1VLeC3VBSuD9vqQhbvgJ3Cz7rPghTG8QghZk7e4h5zRpgLAhgkse",
  "key8": "5FzUCPVnFCRikLd98r3PwRJUShP44L9TraiBaeTxp6r3cBUjmbMk3giVEm43qpcuWsytRm6By9LxDCArCPi4gQZj",
  "key9": "3TyC9Np7tZqaS6UT4GPaLZyBu4Vx4SkdWSj8NwUc7TpLAC5F8SrMyJCugaMBKNrwsm1vbiZVAWwp8DGU4wZxww1r",
  "key10": "2CJvY1FnFrQMzsv4fdAKngejKuTsjKbDHVdUCVFNQq24C3qDwreFT1ZHRx8AYHDQhgBZEBV7yBFti7hzu1o2VG8B",
  "key11": "3bVzybR45r99dyXHq23eFjjUmYjLmp38LjkojwTcMoNePfgi48qmkJAuCLHNQL4jnALN78uFMCzFTt5J15Wr3M52",
  "key12": "5pZSc579tDqDMcE55uMRRfjEHAUcVHk6TE4jkoKpSwwSYLwGVoeXqc7uYtA8DYWy23yjMwHdctvjBTCYoJx9LARg",
  "key13": "L6k2px6EWaBNABviJhQ5q5FoVH1ui7iNQJACE1M8YSfEJ9nNSjEDKqTAuySQtDZqZwcMefr1ubaVS1mMWSMbN9z",
  "key14": "aqeGdyMC2PB4Ef4C9deqorit9ZnYtyvFrk2DViK5pRGcuJyntzmtHpFzaCTqFu4UkYNFVSnwD1XAfUXLK8HgKNf",
  "key15": "HWSP6RGxni7LqJTcg67YQL8dgMsB8ugTFajThSnEuqwB3wmyjAcL7FspgHiwwKvwUuhcVbaqwMjjkSt539VMbDd",
  "key16": "4wWqaQ3Kcx28TJqH15bqDLVXLQ5T6hKFXAPi9kTb1GJMMKr39X7WSLf1ihvhqHTBTvdeLQxFD9DxzUDwoMMWCMPr",
  "key17": "42ZaEByAA4wYKaXzT8UGvedneWz26NoSxXXkYQmGGAPkBRH5aVDW8mUgXiaMxRnF6MY4WrR34NxopjVTT2ZzuEmh",
  "key18": "2gweT6y4G5jGYQG3yM9B5g35z1ie3uHaCtU3wkEZWB4NTa1xDcFiua3RVvs4S7igX944qhHQZufCYpWBdNnqiEHp",
  "key19": "2MA6jJE8Apv4smWC1K8n1YNLchFKBgHTWqBF68a8RfgD347keWW87xTvNAhfNBYaP7jzXJQZPMEGVryiQrGi2fBC",
  "key20": "3VV1UqSunr5Y4FB2RiSipAxW7VFEwK8vDRDsnGtkBw1uSknrKNwuUzrVkghQkAyNNpvKdPpmKgfgm6wrpoeWXpSY",
  "key21": "4AxBE5ZfovsMBSGDMavpVAtNneG4QK2BCfdvMzBnC7wpNgyMjPWyqHXsbYsERpCV9kFQUapvCUk36BiFYx68Rz3a",
  "key22": "3NhCjsq2FYuiR8WfEDaTYkuQdUe7EwygAD1FVQDswkxg2ZCiu69cejy41eSTsik3x1wrwYWPvS4dELGfBywKSUUh",
  "key23": "4go91quuugoVdrx5SaunFD2cJ7JwpUETvgHoaD6sNpmXHZiZJdNNwy4HU9FBW7vofi3fTsnxN9VhQJ4kQghVnWW9",
  "key24": "2T8t3WkpAdrd3yLQjHp9HTKP9MamW1Kcr1UdzfGbEPEWPuz4Q31ngbE7n3oxK3ut1UBpfCTC7XPBZsFXQeAA5QoU",
  "key25": "5bR1b4nDVmZZyLwhcrFCDrHZ7dwFiwc8uTuJrK4BqNDSgvPTuisw3SHuRxeTw8qLAM1s8DGWj5EWDpVJGqbMW5E4",
  "key26": "5xfhoNttHz1oWTyZiFbCpRrLkZgAdnoCXvfbcb5r4zQa5NudGLfrAVGN4rd3QLceQXXGgs43fS3QR9hfuQRVYHhP",
  "key27": "4ivhxFb3xuqRA2s4FbRshdb5cPBpbFKUXojZeGgBe7mPU8gH28FrDM6ehpi9zdQpFmMf6LRZyUePmpJ96ogcBNZs",
  "key28": "2K8taVhaY4h3UzUQ4mpC6YmS7GJdEZ9aURqz6nwzLcB2PiHo9cjyqCtQ6xBCRtNtpxJRCGjvZb5Yonr3ARcnuWPK",
  "key29": "2dAn7qLHDm5CTm4ryYiKt5Zry2SZ24HKa4Zm3sFp5NGryJrj8Vu12NdHzvf8jGghWQqvtDDVRXnm1Xc4pd6Eb2Wi",
  "key30": "35e8uBtsC1iDbBpA48j4zAHBPPGGDcMD3c4St9uE2p6BKKQ8Cdc3PrAAsNcxa49nLDAa31qr9yBnnKSAnprA3fHB",
  "key31": "Qdv2LGAGdugPM5ztZZYqd51iVFJUEi7NZSd1GS8ZCk2W7Yv8YPWjpSBa61JFSQ57W1mMbcNx5aECbtSsn91QyXS",
  "key32": "GJS9FweGPB3tMkLnMbX5GppaRgCZdKeRd99yBoqzYWdiZFFedCxYpgy3z1DsSYoSSnd1FYMP2UmxHWRXbz44jzL",
  "key33": "57jpYZUYUjQt2xcQwX8XM6c7Jxg4YjieW9DNNLVU5Td7dnP4bLJzhdNWpj457dri4PAif6SGPrdXNFEAq8jEFkpV",
  "key34": "2DFvPX1WSWWmJfE1KEMWtRQjkPX2UYhPo6KLhxNCkTrowCNSn8aEpw998CXRqW67aHkksujRWfDnjdy9fu1eFbGz",
  "key35": "567GDBcoGZRm7MvEXTsF19RQReFvB81v8WeV5vDhVPqSSoZHbhok3uQzsycAHzcixZu2EUhfcCWkT47DwgiTYE1d",
  "key36": "5EqnpW6LwxF5iLw64kN9N9sUCJZmB5BHmjBTEMzhZoWGRc27UgY3swvTLU9vdovfiV2UnPcUza7UhvPssBREhfN5",
  "key37": "Sw3sftzQCtSgVRwkztehFxWEbNwqdeQvGrndsnHepTbpzubdWaVFuLVdum9uPo61xkamjasvzwYgYUubtKrqfTR",
  "key38": "5MdpbSUDetiFuAjNVkXqEwknTads7ZKWzuAGZk2mhRKr1Lhir8AjzEHhC26tBW4LQvwLjvZseHciWUkFXb4AJ9k4",
  "key39": "2HxvK7TqiLvLGgT1SCNL2MUa9S8wzgaHaiXUBRzUxyFkqqBgdajbNEWRmz738QKEHJpKSwW8Q2mdqmrKQeYy4Q4s",
  "key40": "36YvuYcD5vsMWPCThqMd4WtmYMZSTB89HLbBsHM9BVzz4eTLSJVWFCogq6jqSi3VqzvYKForvKsViBhTAq7NikGh",
  "key41": "3aqhFXFnTLYgPyDv4SWPomKJxJrpsgEHk3bB99NA11fPpLy6v5pQoGHRYzbzCU4ZVNUFWSK9ERznU4DLigbgm1yf",
  "key42": "3YBZysPKSptGjAmt98nrga73pNWqttqxxG6t2RmKKbDMT2Zj9Kd8JUr86UxELZf5sbVAZZLAKyM732f8uypEbYUW"
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
