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
    "wdLUrzqTP12pRRfJwUNjEjS8phL2LuGrymszMgH8Z9jVDc8S3mzntPWKmEwoLhJTbJyqR3KF1JtuUQMTG5oZKVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBcQBMfZX3xNAppBTaqFid9SwM89mqC99rzmw3PkhrTvNWRmFiWv1vCwLG8sJLUSbFd7ckGiJyCrtV2HVXJUtQ4",
  "key1": "481rtjJGmarcDnXoDjcELCVA3Bn21aHKkQwK5ky1oXy76wWQYrRcSXUwii8xbyq2g31fQfnQ6pwTLnrHCGEdccmk",
  "key2": "3uvvrKpnfytkpqKkkPx1EeG9afnA5eSemvb4smpSq4pik1cnMKvanycwRsB2wxxh3R5TTUJBn9pXHSTijWF7v8Nw",
  "key3": "2iQf1HtDfKbzMaEgbWym6RFr37T57VErYdwgL99Y4Y15vzxHAuzsjuzkzQeyY3mE6aV5qNN4y96aXi3KhVvXQWSS",
  "key4": "57cxkcEMxUuL3kaeHU9z5dg7VzaPJKsY1d3LJQMdqJL3YZ4BeQ646JCuD442GjtpAhmUqZnsFD23gA41r4Pe8oJ7",
  "key5": "4wj4tnDwRxJ63VuyfzP5TFjZteVLtK5w6hy481wcMYPKqzVdZAWb2UKcKQ2811475B6QRryMCfSuoMx9NNA38K67",
  "key6": "cDFGaoxYg4pm92foWkfXgwSDAFTZBPgP4yeJQD3DCMFQstdc5vxF4h2Jf1PJRR78YystVWFGMSQq2AqV9tT57PH",
  "key7": "4f9XczfbCqiuSjK9rehi8QH9HzNuxFxzqLmvP5n5YtLdb5iXfHRX74St7wHo2JGBz3uep2M6bsoxvjaQv5N4EcaD",
  "key8": "5svLDqbsszQedqoz4ttPHLyTmaZoAkuR9kRbN7sBvLuJ1TNHCCpmZgNuB6hDyCpoaPQpqxYaWqg8w4fj4WB8ePNs",
  "key9": "4skPhePx4fgKxWgwYthCxSAXqFZ7MERRpeunUDSyPvkwNRq8NfzcQm6VBdzTk7DcxQgqsaiSHwgzmbVbWPSu9jia",
  "key10": "5bMBG7PzpM2S3o5jEhMYBBNr9vQpLNQkvUNfMDXTcWCyUypvJ9sZZuqnWHsXJUPUGswQZJeEoks5XMFxvNzYxCSk",
  "key11": "dgrKkaxdG6mM3zAoPX7zzvF9z9verPNLWL3Vz9x6viKny8ZDu5i2QT2toDFuNbrafn8ovXqKoW3mRka8yHsUZSF",
  "key12": "4cqVGjzYD7yNvJvCLGCz4KU7aa9EinB1srnAzm5oAxcSQ1eaCFuR8YYC3Pmj4LA82AAxJchzo2LgrnnGqZ4aur6X",
  "key13": "5dKEZ2PfR6bKTrzcMmKk7YUSv7yxtv4ZjZj8CSuzho9xtWaQiqUdrCK1WkHiygSg8HXyM3B7WJft3D1fAYRt2KDB",
  "key14": "2qNnyJLDAJWdZfH436RmgYngfnyDGY5eFwExMucPzJHDd5sgawkX6RVwxqpCDTXAQ9cGWoihnzoy9ny2KnRQLMrD",
  "key15": "2nSXzqhSVavWFA6hMeBa84zCF4Q9AXas861BcoTMX7dJjYaNgR7cREKesUbabzo3WxEWhL8u68EpAZmjXnpUwyMP",
  "key16": "2cxC94R7tM5MVMV4KHw4FZ222rqhDmJAi97NoHse4cbK7vFaTpALfFRuQWXABKTxjANMRJbHQdPqx7KPNt4oZYG1",
  "key17": "5UK2hbEyHpMVnRuDZi2hN9vGichgSLqNat8Qe4EhqxeYNoHdpvomV1PH4W3CgxKAzcGzH67CZRgY3seArQ2GisUk",
  "key18": "64foPfu4FH7huw2Q4UWP6GGMByc7xnSZXX1gW4yRpa8kjyx6zGqZdiGa6i8Rj1UuVAB74FXzAwVTc3q9UVxqFqhp",
  "key19": "XeNxaAHmq1DwVmH7oidJsRByaLYfnUwg9A3LwC72LJ4PqD4GM6c75U25amiDYzBywRY2hn4p7R5KTacDELsNmuk",
  "key20": "3Rg6PaRKoE1dt8bwYBuofkdDjHyBju3bSyf7BrMMn1m7GSGNBLj6uBVRYNfLZox4y84JTfmRcvDrZaJK6MU8LJV8",
  "key21": "5fA6JHBQaD2RQdZsedaZg1rk41w7R7KKWMctPnVPuMnViY5Ae9VaJQKVLy3fikwddPXGopZjWZNvPits1fC4NnaN",
  "key22": "5Ls3Pz9Xxf3bs9tAmkuYsVcxXc35tuzFeDbWDPxp6muuUxKvKYxkBC2qgP85HRYRCporwgxtv1oMWis2Dx9vkHKu",
  "key23": "3Gyqv5qp8QSCNXTkJqfHjE8WNAt5fY8Pu2LL5cHGiACVUUAgcG3JzUF6YCzmFwSnECiJAGDk7cRagXS58tUiBHnh",
  "key24": "3ZZTRgL2N37k19oZVhT9ctk7AcQzZ3yEdXfu3Zf8YTvNZU9Tw6Q8n4ixE1QozkWGRuFTWus8KcSLns6Hifhu9WPn",
  "key25": "32mFwd59HW5HuqQdxjTnLqLDeMnnP5nk9gsxp4N8CzEniaV7ceo6CVMmH2WEFzDfaZdA7cxj8jXPrCc5YwBHrS7G",
  "key26": "3NWtRjkkuNbgdbtKTJ6Tp7e6TyHU5jq2endTRF1Hw4E1hUrVdb3sQCGZiXmuM4i5kVt3Po7s3RvCR9V9pfsNypnW",
  "key27": "5F6kPcHY7KkN38SzxvRXeymteKAaZGQ2RP158RrTSdERd6tMGL7F6SEfxkB2FziKMacfjjNgH5AMDkHD6FhW4PJb",
  "key28": "y5EK2ck6sdLhBdnNkbWo6NvWgGxG9DcBj2qxaoFgXCPH8w9F3PMamDHYCeSZWcCMCMJopNVmGUbdZwgBdrQ6873",
  "key29": "2kTvM3FqG53BcvwjS7qyFEuBW6JgU1XSdo42zRh2q6iXUytPnF8jNJwsxvvgzBQzSN2uCzd2tsNCqYWBqa7kzyf5",
  "key30": "44ykU6rJyWnQh3mJVPPoHCw9yrszCprAuTJQKQP36bxboTmxHwjALRiJXSQw3NGwiLV2NHnM2pvC2X9vvkFHHEZF",
  "key31": "4jijof81Ucw5cnjXDvxu4PKTayY43HNbzuwcUx1RKJDeJ9wRZLHcvSWr9iZML56vkQWDpRzspDVpy8F6QUnVc33P",
  "key32": "Kbd3jyH5UDTWScoY5abeA236YHptSsyJJDgH62kWbSp2G732VKg8SSf73jDtss5kywrP6S9rUj8bxh6dfwtBxgj",
  "key33": "3WAxrNtD2PwMmFWJmKYJcHKrFYr5WRFAtWsEGr1XBAu5nSsB4oLoDasZhbEajU2ivn3o9izXxJ6zKuoXsRGep542",
  "key34": "Ek4ViDPbRuwZ8U6b4JTiEX911hLHo52euM5LAVFyXBX7EkBwZPzfCAeJuwuERiVzPM8EXQuiiEp5PR82voZm23f",
  "key35": "25iFv8qYgi6yVaMDsRsMbSeAKrHAACxTsSRw2gtLHmNW6otbFRVeWR6dwMa32bTDYDK5pLU5EDsRctxSv6Co2FA7",
  "key36": "5gM5Jh6NCcEwBThqSkSeZNgnbjUk1qY87egFFXav2DsKspvhc51cSPKnAyJgLuGMobXGvcWNmmkZ5DmXLTbCiEht",
  "key37": "58wpu5pQ4yKA7vT1Jvyo56sV3iLYR1JfGcFpgd9giPAWMUpz4jEjTC2EJvajr9ArWe1DYTUWWzEEDpa9kChCeAB2",
  "key38": "57p3FRHkH7yRbGh8BiqjsdyPXMs75Mvjrwyz6JFE2TJWsm2Jrtv9a5xDV2LH7nAsjNMtq64ZmdXeDa4jxpU81qGz",
  "key39": "3ToXBKHbN4hDbEPZtc2HSaikxGZaSSXWuBtrk55Hfbvy2EHBo8bf6GGCytYZHweKFJwj3V5EMMFKgB3KZDF7i74W",
  "key40": "3ekjt9XGm1BGpLHebf9XmzQwPKKRXFbMH9iECiBfEHadGFbogDrVunUc3HEfDTdykF5XpiV4eLJyUcvauMd719A1",
  "key41": "4mUhsRabfbPDEANsj5iWhQDCRFtyAaY7jNcxaPFThCedDQYKr2cNVMVtcxMqrYnceQL5tGWMJfinFcs3LWKjUPCG",
  "key42": "5tgawZxezeH5vTNRLrNnn6mbUaULDXWyN47nVtjJjz9fC49xCv8DgtejmaojyTYr6oBmZCBQzvrKUgKZgkiNXVr2",
  "key43": "5xwcFHKRJHv9BegSiWYpEksWRqkfWWeeYtzkGioh6kxnK4rQ8zwP4fQ2xNLBMqxScESgAMWQLQCLyP9C1d9niKNH",
  "key44": "5wDTCWJCN5qagfXJRaaTbgbxxbkbTpfHjBZm8EaXhJZPBr7iNLzj3FKLZQwSxwXvjCDKFmyfR3D2K5zBDsJfTDER",
  "key45": "45Bzu8zwzQu7WMTHKW88eiqTzeKsBwSTSxdf4CqCutUAiH9pXxDL1ZcNaiWFq2ZvqDWA17TC41Lxf75FZnzFrXSA",
  "key46": "D32uKzAWy9ddA4ABsZi5nxRdffSCQzbwpSy4KAxKxjtcgprGDaEKeczxoQsmFPhUUYPXHjtcq6we4wXTwiDVa53",
  "key47": "2Ya1NgTRwYSK296Bn7teETyJ8iAM9skqYzS3meCsMrV13tEYtVq3zZKqmby3Qs3XWuhedczavFuBurEUiNuEA66b",
  "key48": "4PduXZPhPvfWFFksz4L2p5rHgaSaD9ybYsNCKdM67RHupMfrUS6du6e2YgcfMx8WXG2C1q4F8aAEsBKm47iVX8yT"
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
