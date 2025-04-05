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
    "2LTWx2xwUZgGDERJ9u1hLMCqQLyCJNsBHPed8u6paSqksxmTuqwLRrLTfgSpCD84VgUyGDUHDpky75dp7CdJeYW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "124XUiUmSkyyWtJcDeCviyz3jD67pARnCB17thQR6T6japSWWkAx6DqawPoi12cWPDxSC8jifovEmg2q7qSiVCvK",
  "key1": "4y9zEc5xwcQSd75Y9djiBtEPRBtjRThjC4wnuM1ZH2YRp9q8xC3ehXN9J1oRCgF9MXf1Q5ns7TXgVnfgfPP5op4p",
  "key2": "4QogoophYGRwGFwuScs9ZeFdiS5qSbW7JVNXsRRGNdcVyRPv7taUhg443VA7cFtw7oggU8aXcHuR9wPs2UsgHCJ1",
  "key3": "7kThtuYs8u8vhstNi8BA3hTRx13Z7YsK7Jh6zzh6dd29TBer2EppfxMEUFweE7km2F3FNmodWf94juJkocEaggR",
  "key4": "2ohuYAnu5Ui85WnHzfmDBeZXt8UbGPQhdHPyYkCAKXFPTbjkQaEBdtBdcmjyRiKK5aPQYXQydg26TWw69MWYgi8p",
  "key5": "4BciiAPB66EGAfVC9FqJrxp8ba5VMq1xj4XzKhmj7Qxvv2mPS5aS6maNsTe3n4m7LPvndMtkY5sgWh8hd6P1NjX6",
  "key6": "3m7A8y8aFDZn9Hwuu7PKZdo6D2LDc46P151AdstRzMPqjFNFXYvn4A8zUy23xJHWqU4y3kctBevPUkrViRmtxeQe",
  "key7": "4fpQb1DXuqyDM1Az55PujnRAUGm2tdyCx2Dxa76VEYuC3GwX3MqSp3vB6S1B6k4MWEZSqpuv9phVUaN42PXmMPWx",
  "key8": "5iJsjjWLzvJSuXQsUjFFjGux986WYSq3Dsv6JuQmty2Kbiwr5RgW1CoGcKGc17rTrmmCpmUwEaU4tiNZsi93j5Ny",
  "key9": "3PptC1aKhbyAwBXZGveHWH4ePiFHaDu12J64Q3gHV3gw715dc3aTsMvztCaMfqpw2DuZYD6YUanefP6CAHdcGSmi",
  "key10": "4MpXkPYjW9gyia2KadFfpZBiLvwd3X3QmD2e7KHwBe67Fosm68oheaTLaGWxPLCeYBBwkTr4y6qG6UkkwXguPdo5",
  "key11": "TQus4Q49JnBs8zzKueMogP2Yh95ARDY1oy9VRrxvCWwzcAQHL6Jzogp11eyiPrGFgorJa5WuQeMdRUcXrfDaKaQ",
  "key12": "5MRhsf1rekV4rDU4mRqPWQwftuCpn44xAuyTiXiag9xgaZtVEbzbmatbvz1V3Xbk3x6bVuw9b3K6rVCWgNYdKdm3",
  "key13": "3BWxmpeoJSaFZNv3KXsnkErFjvCSAo7FnEjMrBFMVRyKY6KUEinEpXRaKXmvPMEuCJLCw4yhoSVaKWqwSaUBe5xa",
  "key14": "2S4ML6hNWTEo99RiKZA5tJtwGJBFpSQTDxavD41oYMzNFB56GdDmnZqcKcR5aYDMnNe1p1vmUqDMg4aRwZsDLMk5",
  "key15": "1qx3Z7As2SALnwr3SajDZ8xw3NXPAjVrHewXmPiGVPVo1EgevLfckUR841BKoHcT9RyHE6GDx9A9Y1KxUYkV9C5",
  "key16": "56TZuemgBYE9XoUytdTxi6n1CxFcAivqgmayQCQ4jZN5D7pdf2vpNRMmtH3TwkbNEjHkdPjLApBZUn2EwgMZU8yK",
  "key17": "45d9aVLxnV5zcxVrNi8vodkN9ftPA36pfH4RAVbFMEDNn1KF5y6vjfYEK5zDqqkw9ZTnqab3oYRxGHQsJXDYwBqp",
  "key18": "4b81MfPxyGbLzNLLEVTKjEBiES9NbXDrHt7h9pASvKAKVSUghdmCe2Jj12T1AtsZ6TrD3RKv4gca2GH1D7P3LoJi",
  "key19": "5EPDLFMxGEEedzw7d2QHdjLneBXdz8y3YLWYYUVCx7E3NJMCoYF3VYdc6qL56XpSzcqKsHFgaHXGGEzM7wQ3VBYZ",
  "key20": "2th8uuYUSVfnRJhpoqifQZoitjKD4m3SHXYqN7Pf3P3brBm5kRH4KrnjZn9zjnqDtwxYHwohV8vaDLgpNdcSBWqD",
  "key21": "2WJc949iSibvUBm5zniRoM8RwXLuThW4vPxYeTCJZWuuMc7qoGUxVXSb63CphxsTL4tjcY9z2584znHkQgvbjLbg",
  "key22": "4gwpTTqWeqCnCCYEYXK4kaqeLJBM79oxmdrPAQwKYFWkTk9qRFTp9XA7uNqYfrySk7azoYdUyzuDtjqjcYZpiyMG",
  "key23": "3JBUyxQhdgA23Bc3p95YxBCCzLt5e9kq6nsu2bQdBCyBB22uNbrKduoE4go8Yx9W5wpTWQDnoKpDuvsSb5jjGdJ4",
  "key24": "3deqrLhH8HAdPeYKLTwTfEeawcrCMcjSv1uGXrVY4TwtEsMAA77MxegqURikD4QMp8yifvMPLWm7oXx3v8HEL88e",
  "key25": "3Hu21RBMZjPQEb2m14oxYKBzrXZB4mPsNZ3fVtVyQN29UtUcFSTLdwnZ4SZMwRaUa8WpG9KsT2EgVWJun2MCaLAL",
  "key26": "4PMu27N4McrgKTdpHvh1gizDivFQmJYg4LYsBfg2Ym8hPCAvWPJaU2omps6EhhS1qQbN8Y7pPpdz3n4QBu3Ry5vt",
  "key27": "211g6qKp28ndu9BTuKtiVdUWpnAvDBUxMYMpfzd9rSEGzNFc6v5PqcLpHBnPd9cCerx6QfDw7YMJYr2ibvS22tyK",
  "key28": "5EwHq6Yuk6BBt51XwWAp9zXJMrNUVmr751soVqTuEAnvB67pYk6qqtbfRgzRhz5A6weC64i6V1dJ1n77MEGrEUuB",
  "key29": "56idEaqkcJLLiz6W7BAxMifpuFCyWA5ZwGLuKCZpyXQE9dR57hxSLfw2Hy1P8MtHSpSZVZRVzwVoutEjZzLE6RwJ",
  "key30": "678iST25mvMUpAn3PYToR2zbykhLQfCzG8gggAWd3vwR6TC7awbuzQALbAGoZh25zBg3UgFs61isbkBJ3ucaKugx",
  "key31": "4KMGppV5ux9GLf8czhTeJ8FxaV7aBjhs3sRhJ5kT39hWxT56fPY4euSAt2cPhHneooos6SPE1GvcKuwQJsKujRLV",
  "key32": "33in1NeUiUo8iJ3KB16LkkF5AGRi87o3CF9E21MUfTCeq4SQBLzxsMCNTbwkxaC17YFsgHWHFxP26mFzoaUQBuLL",
  "key33": "2nPSNe7jNcbsiQUYyT7Ho9szs6b4gs3CySc3Pv2JuRV6XXjPxs7tFZhcKZZ7QVmejBk95no2L4YZD8LK13SPYbXn",
  "key34": "3M34r29Twyia41N8wCD9naaWAQyWWheQP4GcQJ1oRYbH1YgkS781VVJPwHgPnA4VEbEZ68NR2xjMV5VkLeMLKotv",
  "key35": "9uTLRuGDe14hnBsV9ZAFeDgkb4LAzov9oSvu69Uy1j4ozDYbd8oK4CWtWaS1By6ba8mFLBP74HTLYqnuCvq8yU7",
  "key36": "2vp93NXJQZaJqDYbf1wkRvFJnmHsGbj39Dyhsoo5J7124byjqxen5WUhvCvZPnactnzHXbHG3YmabbQPRsUiXUnW",
  "key37": "3CxKwfksFFb378EquNdV96ggJvjANsDsB63cZQqD5zkhzo8mPPeh5QUs2Xfd4ye2TuFyGPZj5P7KyN2hCjtnCVtD",
  "key38": "2c7y6sKtFKhWDGQCAc8z7pXPxA5oi7uuEhh1HgQjzuWLk8mc2HiVkbQ7R1awRDS9qT5R6hQDtVL4gVA9YuQPspDP",
  "key39": "3VN2ZpJUg63P73mG9eR9hnJgXoYZi9eH16QTcEXHDF9M2ph3Jqz7b2KWoWbdfP74j1Su812jmRYy2dQm2jyHWmZk",
  "key40": "52HZxpX5HzE1cukau8JbbyWyupCVhmoTzEFbmaoqjg5XUcEC6u9xG8EVegPAefX3g8yQ4HrY9bRaHpCLnDSCWk89",
  "key41": "2dK3FndEawbEhH1fzPcC6VAEcLbozWmvg17NiEi62ZPDLxnMEcQRXWaTwkg7DABvijZhte5v9c8ZSEQ9PPRP4Mv4",
  "key42": "35kdEQyoxC1RZ8WXH48qAMvtuws3a19N25xcJpSZoEhqTN31czT1kNZhv1mCfj9G7NE54xRdBrZqyS8SPwgXe4Gd",
  "key43": "Ayvm3TaFXY1e1houpHnZGuKcs8eUSjGDdPtxxgS3dwJMLVYKGuB53zNr78rG9CuyeTa6zxoyeLwDhFqQd4WnaJ5",
  "key44": "555AQqRt3gXgdbf9K1X5f3EvjGe7Bv3jK5uuyCVV8QfU2a93wkE8s7VAgbjZZo4MVtzgR19ZxbFGpakT7PbRLGKR",
  "key45": "5gnX9NsVg1BZciCGCP6w3Ho9GL6z9zNzvQevYejFibtEJ7zRaUqkmz9wjHHvgBZfkU1Bv99xLgNDWvmrr6WkqSzM"
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
