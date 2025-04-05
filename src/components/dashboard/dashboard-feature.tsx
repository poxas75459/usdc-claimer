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
    "2ZTpb7wdeUSbm4JmEUVxZa5g3pACPVJukBgHXtHWZLXjC2LDgyYw8puWwDKzz27tiiahZ4XnNNDre65msa5qaUBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFL1nf4vV8TVDP8z1oPWByi4JsrdWKZdMd3SVMRzGakcE5i5f6Y4BdZVXbufC4rHbU58HwdCjLyHij1pFCnVN2y",
  "key1": "4ApoCfWTFcJdgWDB3xYsEKtX7MtYD3qpd8CMuM2BReXWLZwTckb25WZQ16T1An1RkneWXZ9No867tvsbidw6YLFG",
  "key2": "VNsWzYi6iA1F9VGnKrRf9KAodoznnDF9kmjGbgmLwgetsvVTsULamkhB5MxqD1f72DDoTmuZGnYTjsp3qevCUZn",
  "key3": "41YPWZWCd7Bqdhwa1HThpRTNjzf3caeTJ7bhJ84LnUa43v9u1vnJXQo6FV52a9dL8TnM5hyyPabpTvE1G31uiiE",
  "key4": "58q41ef7qC5FziNdx97rz5QyrFenQzpEULPGZWiSqQrMEc5Kp6QgBP4zhsFkCdAYhKpfxD6mDdfQqG5RkTJt1h3d",
  "key5": "5tQRdsqosPCx5QFgaepMsABttdWjdabgmvnk46DR83tGMb5V8Qcyo4iYCE1oK2j3i7YgW5gmBR7ngcwXdtmNXzs6",
  "key6": "2tj22bPxSJKt9csdov8Xe31q2nUKBLEQg7QesMYNSWaoetRhEfits4Px4V42PvW4yegnbFvZ9A39cubPHywpfdoC",
  "key7": "5pMBt4LpHyzpT2GEjt9FSLMVYWRsuY4kBiaj4nhZXYYuHDH5p44xZAU2XdHukw4CWa6YEVo3Z5qT6zqVgo6xX2pj",
  "key8": "5jH821BgwbQFSnktwPTyyLpCphywSsPJchzZU2W9pvGUpTZUsrtjychp5a4XsXQkQaJY7BZ51xsYhoQYszCTER7Q",
  "key9": "2Ct3xmaXnF2zHf4eaW9ZZgsmSiLwz5ph7qpb23exS2H3ohsGruHTaQUmyJqrAUf9ojVkBZoJqb5yCuDYMndzkpoK",
  "key10": "3DsoFYcXdsgvsKrGgh6Q4CynZqxRxSVDtzCmCcsXxjK5MXcLZKoqy1AbNnQWyhXfTsd15fp2otcv822c6nZHjQaT",
  "key11": "4owUijgLawxdRG7r7N4UuKA6KAj7nHMj8Y13SUKg9Vq3znExAP2AjpNLBm135MePiVxB3qMw5oaFG2ahBAyde5a6",
  "key12": "36CCTJeqquAQYR4FEguif5uvBre2V99We7XV1iyj8o3gsRp5AfQ8cTP4UZpeDFnewJasxouM7z8oYZrnGahCHXX8",
  "key13": "3C7rCTJCaB2rDHXUCEe76zRSsydWcKG37kT9ZXXsTsXPVoTFXVkFZ7P8PLBTjgPZG6gcAsgc5S6JV3nvWp5b1YRJ",
  "key14": "4KHkh5DtvNR56m6caHwcEwTMSBKhSvsptGN8ZgCN9piksnhMs4MY7sognjuiQw67xGsrsX9n4DLxR5JTgpbxdzWx",
  "key15": "2X5gSrfM8xmKfGDwqK7QZmLiPWo6Mw2GY7GH3YgTAijtR5BvXzcwMUHoNK5wvXe5qq4dPJLiwk3LpYWoG4o8Yyjv",
  "key16": "5C8yDYuDADaFLbK64Jz4nSn7YV86gapFg5m8quAGvC8f7viwsx4SmasKB49wfmSviyyz7pQBfDQJZWQUeNVGsxzj",
  "key17": "5AhprauSAnZo7gBN9PzVV2pSoDiR9tZuc1u6mChNLR8VMeyKKwoqU4XW1HaE9Wc8bXCMqhDjXMhuNfrBDk6ts5ks",
  "key18": "32UK3ZuT1xTMpoeUVybnwHpi23a4i5nZHRyB57BwkjpGfdeRP5zHCfpiZBnJBrB624opAGBMai1ecmpMQxfqxmUk",
  "key19": "aJQb1jznoB2fuiCMA54gHkBAcPfoKpLQmwUv6UGu9BSS54831CNcAporf6eKxHjzoyvudnqjPFinZtUphFGeB2A",
  "key20": "37cgiq1oU65bSLXWcRU5neAfW8dnySASnURwoknJhYskQguS3EdjF44fY1gYGUJ4qzDXgwCgcMJgg7neYQcNGJv2",
  "key21": "2WHy8x9pXHe7eK5bfCVsnsiy2NAS4KNyjwDu6n4TNi67qXWtyK6frW6jsQjHWsZZaheiq7vWMXjtGpVxifxRDgvM",
  "key22": "5yHwPPRwaCMQfS3vSW3dUaZeJSChcZxX1i2EFpRujmrxPeJCT6nGgcvkeUZJFMnLzVg7drddwebrfjreW4XvEVQb",
  "key23": "QPDRihgcHp6ntKnQc4VK84ErRDaq7VjmWGUgH4uw4iUVUFHPQRn2bRDrw96U7t7MP6QGV4TiqpoxNW6dCTFoSBh",
  "key24": "4kGjJWaBZnawwjZM1vnNVaYhhZVCiKfBEJkEQwc722FRi3PafPcRRgVogwr3GsgTwPQZNjkXpBV8XP81pYBSa2zS",
  "key25": "2qiDBg9XJatGzcM13ujwUC6L2ooKCkQdVprG4UdXTpDU65WYty7om7HqDtoQPjhGipA3DcL8QsxKyopJY8E1DjtU",
  "key26": "4z6krvGtEuG2xQ2coGWvhZPHZzygExku5pEuBAip4eUtGQ25PrZCmQpBng1DDkQEPcKWZx1w1fE56yh3qWnCW74S",
  "key27": "5RLNJWNf9QSXsMWg8S85HG1ywr26yufqWoYyaY5AcgWNcKizhqEvKmsB1eTpmsawCVkpJa7oegpjPgw5YiCkxgWm",
  "key28": "vtokcWCPEeansdJgJaVF1WrQWg9xjxZU9CBWMuoht1YZCK8xD1jraR7bwo2p1rnmS1ZfuJ5NNutfRnjzQ9DjQHV",
  "key29": "4JaSUFw7tLbUvGzKb3VPzQ4PwBnkraENkgu74JH28exLkZzzsmyZpL6Su5vBbLKDjNops2ib3DWtgUkadaNSSEoC",
  "key30": "4sGQd2UUUPdDqdrGzggCEeDG2kKccwQ6eEmMZ2rex8C417UELmStaQp5BbCMZ8Y8o1d7V3df5VE2ResS4yN22JcT",
  "key31": "3Lkw7C8siuxaER1EV2nYU8dNqUVu5fS6ay5t9FtvXzocqssGPmbjpzCfpMsKdmzpqBxFsr3LMgLx8wJ3bZHqh85r",
  "key32": "MkEWJQt2GGFGLD3sN3B2qtvZ1VN6i61M8kzGYZZzGaTAJJbL3h2esHP8zggp4Af2Cw5hmSGWCE6L4h9t6kLVUmM",
  "key33": "3o8Fw6SxjKq5VLmtsGa7837H2P95rXUnkxF7mq7zU1nySA4gHonFnBFuKLR2H91971KYBLJKXatkh5nu1gH4JFEb",
  "key34": "4Vu5ARLi7oPPAgZHAMnNwxaoqF7uSbpSBcmMAWZ4WYJhYnojiHumWESdo4xy1wDwm3HYAhZECkjnGGwVAzM43SCr",
  "key35": "w2N3KpwyLoXCXLYLyQKDvfdjzsXrkBFP8z6yhszwrfVL8F22n3o1xEMyzbJtcP7FPMh3JqpXSBzW2LxNSV6iZET",
  "key36": "51M69oicTXX5vjdkt9G4uC4m2CRzEih7Jz4uXNhYKwHcwgSnPok8EuV79ZBbctxMLJQVr9VGWaaoX8UsyxSxkHNL",
  "key37": "4dQm6fYhbnimBQriqek25NGFp5CkmMiDejrqFNfCL21FBh69UpS9hKKHQ4zhfLAmh2YUDh88oJ239JsvriXbcUps",
  "key38": "6373eHeALRXZi8Jqzk1uMDimXD6bdATt6Ch5dKAYEU8z2Uvj4ZC1oJ44CBE5Rm9juPqQsw4w3h6KJFhy4KeHrXt5",
  "key39": "53NHTcGoTmGjTtDUJqoQSteiydPsekUnTRG6rLY7zyJeaeFVc8FzW42cwk56S956FvrZDdz18UQ49ZoFZzFkpbn2",
  "key40": "5TGeWqzxqRnhLAWooeVazPPfJvaBLvgmeXGuu5qzsH69EfJq89VGc7tDwvVSQxFndDv4Z3gAqnaGeTUZstfEhv14",
  "key41": "3L1d89jqgGgX6X4sjwjyq7R6MrbDkBKSLTJgqpMuDT2hgPYQ8wLE9evujDv8rjkubSb67wuVXwXDuJKReaJtaGqt",
  "key42": "2hB99GZfDjbG8xZJEMXGAfiefYWjftFr96jh9MshTsgD3yxzjL1EfnnX7UWLmQe3EBjgd32XuH8fW7V77yvwihu8",
  "key43": "4VnyLFbMYMdzMkn8Dtn6sADV8sRxfw4k3whxaFrscLXpGxuHoj5PXJC2E9MD42GzEwHo5eYqQ9MqbnKrAnboysvU",
  "key44": "2Mv73Zv4UmpvPaAKHXpZMp1fcSqpworaPVyH57WAZUeQGjLUBro1PT5MUhKL6m13bCSUhoGYVQtqa5fL8yqkUPsr",
  "key45": "4M7VmsHTyd4kGksEgm3nLzPYbX17n2yKxV1q2rFA1tFhwFFXFbrjvPTVpykirobLJ8HXzWHCBdip2b3YsQa84K1B",
  "key46": "4FBnQyjks7qJMTDvKrrudZJ1zkNC3nqwzXTbW2EiQiyu9zcbAs3EYYnvGfLQnXTuuYUNqhKQhSonS64aNRBgLyzM",
  "key47": "4vx2dsrvy4EKuyCkegjumVPcqArbjTQNX9s9WS4q9Hj5LkghQ8WVsFasops2vDbDHMJx6rTeqxiuYMxfuUggYLtU"
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
