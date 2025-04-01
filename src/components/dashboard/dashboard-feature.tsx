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
    "23vCGyDzk88NmuRYhxiWgoRdQ75XmX5sdrxcP3aiapKAAVCNMPmEzMQdViumvFtdajeuE7pHAWtQ5LzDfnK95vQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67K5qpMLgSXsJn9ULooLfKsBtQACqskb4Dag9FSjav8T71uHVjvQKpXtzc3hHK9wDyo9gxBxVodn1mKi6VEAhcuR",
  "key1": "5ZFJ5axD383LKiKxAzYsvzNcAE9bvpgp1J27PRK1xmtc8xxJYr1AE7fpNAoXXUzXNKTgnKAFytS3C7QiGSgTuZnF",
  "key2": "4Pqhqbt1zsMbDorU6TQERdEk3UhZ1nAZjDNng1WzE1oESUJjUGz8vZMRq397uCxa2DsaCievTZodhFu89hT2w9EL",
  "key3": "5xFjvqpW8TbYf54pTzM6TrX3rdE8BkvNAg3TWCT4txhZJawfa6sTb44kLFuLh2fc7yQNCPtUQsGuk6pggtkTns6w",
  "key4": "5ACFECweiYwK8Tw85p8nGhraEg5mH36NLs6VLDnXQe92pystusNNS1ambRsJbK7pCYPMfhYD7ygKeFeL69BdckbB",
  "key5": "3gCgnuQiC55UUHAJHZt7CaRspLKe87SxB42MMtYBEy93hGb3B9buoBXSxzzQDyzfnLQtqXSnAD9F31KJCyLTd4MG",
  "key6": "62ZJ254VAYAajaEJTf5Dn2j6zPZibwYu5fAUZ9wjjnDxrA1zPpxUe7EEa1RAJeL6Mxd6GYa6v35RxRKdZwoJFtCS",
  "key7": "2SjfZXQ3FnT2Wx1m8AeFsUQekQbjT6cagaty9oLUP8BfwmH8hMP2kApMDp8JFnGBF8B5VTJkTpBFFybtWwKp2T8L",
  "key8": "4B1SNRhfrbjnZcehFxbdSnv6qwTyaMwwdnhdw4kBp9Yn7wTiq6kfhqmFtd3S1gj8SPdiGScEpCMZH5uP11vyjTcT",
  "key9": "4XnhJrvF3TMtA8B8jj1sJML3tvmCigtB3a75oobKMSETxfCgWEvCvS1bp68Nw8TzrsVYsK6QuEzL3aHbpKYEhi17",
  "key10": "zbzhCQcoJWLrkm2qgpcKqUV1x6BLWWfRLDgBCxqSpkP62aMK6i13i8JggEwXDxprtHTzSKoxZU1pMGhN1N7tzLy",
  "key11": "4r6EoN5CrPskUznB8dq2feKWtDLvaBLKZjf2YW5wzn4nDCVn9vZX3b6ZNTtoWpCg4EyvXGs3TdLJ95rcSapDsriZ",
  "key12": "4Ybq4bESbiRWcYHaxuKYCzv2FonjxDvAXb3B4pzsSiqkyVSupqxmjgywiBELZVLKtVNuDnSJ53YgonAAUm3b6FRb",
  "key13": "4QiXvdd33QqyPh1JjQWWHgiSJPkbYgEpHfFog7dcdiTPRSvoueuTrcshGNtYXDkZwwVxE4N3mE7fGvruXZzkM75B",
  "key14": "2aRfMfykhqeEfvcNVnpDWmBkpGHScou6ie83fBxQ26jDgivp61Qkk6vtNdYGfRoAWMGASd3eAw97sXZFxTqAaeLZ",
  "key15": "4Q6RjFcFUSozuiFfkRzcwX2WXPWpmySNbBWv5ZFp4SFsKpUY3hyfCF7ybXTcyXsWaUyk1GZ26R5GcivgeD9vsTC2",
  "key16": "5TKAHSvf2fSguSebR8URS6mGtqbWAVPkhkrbe3S4W5opgheWjG8XLQZaG5NX3SSFsBZZhEAAamZiS1htVRNt29we",
  "key17": "3YH8QVtqDhLFjTiQVPY2Xokn95pdrXJRsRZ5WuKFR8oKT6cXz65JsGLdjDYhBwxZ7qBKMfbgrYpDTJEZ9LBwc2sr",
  "key18": "4KXsSp4Zt9uCd9PtnBfi9cawPPszVSsoGn78BABiDSBGRV6GBirMi4rbFDCQC23ndr3TfGSac9u2KcWGXS89r5dP",
  "key19": "4EGhgSopncTyZJEw52zYixWYKULVhhENXCDJYe16QzZ7vgzZ71yGHDMsYYd9aJrZNx5Yz3rQAngaw24UPuCt8jCi",
  "key20": "2mxhNrSJjSaB9rV5Fu3aSvkEeNMGKARsgEirAW6ffD44XYyrtXRBZV27iLKaFWUXnHozX4mQuEF8n9xVFA4FSHdE",
  "key21": "4hy3xzRePGRAjdXWFCjf2JdaGAcYsmc3BwvB5ndpL2zmXinrBm59uDyYHPd432RJhdfuUdPsqDQcczirKRpoPi6a",
  "key22": "2kmf2wZguZWS9vnUxsxJNCaEHwDVh1u7DQbxHBoZmJBHTzzPveA6uU19yL2fk3u8G2C6K3jBon863WaEVL2LiNPL",
  "key23": "3KXnxgjN2pdwdA8mkyyovhiUAL59NxVzod2qBQC559g7iXz2qCmycYTErwZMZfxR817yGM8YFVBXg5AbysQ5n7vK",
  "key24": "2Ym9rxtyirXSgNJSmPUGx5Ds7CE3Lo4HDoLxJnXg9e6UkiVspAbaD5eyRfF6DiJaxjLeRgnRucmPokyYVDqD5RA2",
  "key25": "47F2hnGokc4NEpq3w7c8YcVY6DJXUktrdPPd4fa69tWcik8ZbhjksaQctkEGC9Mq98kiNSufg9tCMB4Wu374eFTA",
  "key26": "rZeDhTdiPqRKjskqxAKg7gujVFF8C7i4CWyRmgufWmkmfbL7Aj9ca1sSUHRLr5thbpf3Uz9S6mfj53gR6AErMxd",
  "key27": "3hQ2crkaiEMCpi2PPfVdSndXfaGcNFkWHE4yCwcVy1upH3aKvfxpBtJmTfkTZDuBWeP9CSAQJcRPmrT6uexSbyft",
  "key28": "29hxYvAMQAm3MDMb6TGLaAgbNPvCyHH7vMqthY8h8gkrYMZqRthDquNssQzD1GaYzgzkmdmCzLUndu3NcAE2Nruy",
  "key29": "3beHq9KS7dus6Ec7Yt8i2NafkTj9VqqfPoPtb8XA64uPLuh3L7Aty58d4PERZ2BqL3jgp4XbBkVvctp6S29R6hM5",
  "key30": "2BuE8EMZ6drZfvG1cCT65WDreLMW2DEwGtv3y5KgpAvRaBftYCQz1p1YDk1j8NnQthH98w3aAYgwdbyqZvXBfRve",
  "key31": "5zE49a7wJT2wWaERPQkZWY9wCo8kTeQHZrXw2C53GKHdcwS2ymYD2shAYk2MRSKX1cRwjitdGHSJ2HdqJRqWuJ2P",
  "key32": "42uASCFcih3ej7SEWMv53YEdmTPh1u9CDRfSMtYz7uFZdsiUXHEukrwQsYhCcznHVsUf2NLFfcargtieiEWC8fkk"
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
