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
    "w4wSYpzzqjGeyD4nz4BfPcUbKRQF8K7bzFMhxEZZDg4ybq6ky9pDSgVw2yoWLcDSNtvR8zQmMUUdJKjqFxbtwNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcULfw1iaJkm4uHBbi3dEhyiE6By1ufxpCkyAuzvhwN3ARi9ZqxhRLjmtPYNWPbaSsgATqDaoCpaEe7KF5GqSbx",
  "key1": "az3RCPr2jehVFQnA37fvWTKpQ2jVpzdPmLD8FmYH26EHdqz3F8M1jzzJctmyMaEYbV21F3EGxvuupgXQ2aEMNvG",
  "key2": "Drn3tenb7Ln19WQN8tQ1byGCyKbNYruFwvWq9HYCT5ggEA9JTVy5vsgMLCQt744tgp6e8tEhaQFjpGQsxwWcYDe",
  "key3": "WjxTP512EAE4z4K12vZegnykBnNpiukjAFZ9MEMuRvA9dPWs3wWDMc8yueHdLNH4Lsm35DBUSh1btbjfkQZb7G7",
  "key4": "tqzEZAiQFaBv7W172Y978m1ZNnWmr4Xu6jbRyB7rbZLSfs1Wu3fmCEkiorivZierid4RByyao5Zdq2SdH9xei61",
  "key5": "5gq4GR3GHynVzd6bSepXmc2qzNzWigatFqgwyhvdtQBjtsVL5zku14Ux65aA1cZh4KoWRpoHm9utkKqgdzEvSgsb",
  "key6": "3fpG3DARCzH4rc23upq73KWwDNcBE8dygasm3u2iVEajwt2zmtuMSUjaGui6qdXMwkX8CazfzUtLQanJ1DeMYZ6V",
  "key7": "pqyUeMjKL5w7LTqeGf7knyY6w9V9zvzTDSmc6xN26AxqAkC25oRsdwrABZhtkecTjTNcDT8vtWjPGcaLJrSMicp",
  "key8": "5UNN2UPScFfm9sc6ByMYLJbtqdoF7Cr39bqW3ieujHAZTmpjHwzkhd3rEW6hTPgBdmJtQbGgJCqXaQAFBhrcbFjx",
  "key9": "4md9b9doywHdakSosMvNhoT9DJiTLymZj2kbhguc8jgAkn2KgVMSEcZG9NUeuck1KNao9tFPYJz54JZLyBGQztDg",
  "key10": "pd8Qfkn63vQMN8No8D25pziXrdJKe4xT81Mo3ybJg2Yhk6WWijYE1Ab32fx2KGgX5qsWiYjKjyN2KoJLQ58YTgq",
  "key11": "5E19eH1QGtSF2QVoRzWeBvfR4xoXdBSFq3Fsx2denuhFmbiQSekxU3kRhrssbuftUk5ED77hceewMuMuJJKJVTj3",
  "key12": "2ya5cHuFnV14m3zdeQMiKFJkYHa3ohdYuw3se34BJD5X36BC9gtepTjYLte57X5SDfevpkePaPn3Ftx426UDV7W9",
  "key13": "WSYYqjMYLQR9x2NKBx4NwGJh8Bp56oKGescbimFEmqLGeuaauvTaA2UXoVpLuApqdXx6KHmDFTtjXBeP8aQJBbY",
  "key14": "5bbNunfVr4ZhxfbQAtXkiHHawLiksCBgtZubzwSupdRnMDjz4WRGiWs8MTLugXoQcY6Aj7W5fztxtiDtfSX66xc",
  "key15": "fXgNqRHwyKq8Qyku5xdyjELgwDf78zeLJyc9HcNyvCk7rURFJJW54yQL2DdqYoFjvoV1ALoLjHuFqR6gQA5f1w4",
  "key16": "ZfjbKTapnnbA4ry7aMmwwwPRT4gLEC12SmRDqh9DuAkbstHE8hmxme1WwHeY6u7yTJcgZMQpWnmzTCpK2Ji4tRE",
  "key17": "5YkHXZ5CUEb9YRyjz9pumAGUJBhZQZWkTfotqUsdGLS7PzBBkvNGhavJQ4M8TLKuAhRAZNkAD2vDGsjotc6ztfrF",
  "key18": "3VipbikuR5Mgbyi2iCcAax7JbhuT8gxwiEHvnPaEYL4u9FxHrwRmiigCx1Sj1sBtaJtVj7YMVKuA9intmyKKo2Yx",
  "key19": "4aTxEhDMSVkx36JpEUhaACwXW1FG7m5yZPEyD8SZ4cmQsGTR6tegjRKQfNyCpRyHHq4YH8gHKU1sMuEmKFvNterR",
  "key20": "3xX4HJPUewATbJWTowGb6ozgJiBxEbDjvbG9rfqHCbjc5FzW61dSA3PHVXrCCekybH8avtYdDnVPTaT7Y5UVxFGs",
  "key21": "64JHfjYg63Q7U2GSUzLjBamLzEQiYCLqBSYrMwkAKxXwiaTupyS4bAQxjxbbkm8r6qzqx9Tj6QLFWHyZWCqWpm3n",
  "key22": "2KEGbChyDL5V3HWM9vi5w2ThRQvzFehNDUzCRRmqDyLtdqXPeh6zHKNdUsY1CMtPTUyWXKh7doZmubr8uJVxu6o3",
  "key23": "4WGrngJVgLycJwFgNaUnYsC877poZ876rJTXxtqTupwH819oCqY6VdCmqJMMrV7oUcGcFmo3mAzcMLugd4MGKjkE",
  "key24": "5MMBLC946UGxHosV9v3y5WsyyziVmcJuRWcMJefzMhr4kGQvGKayadEwn5S1H2KnogRRTNScQFvYU4ovq2TbkLix",
  "key25": "2ieJTGWmVuWuWhmHrP6g3fxucj1MGgAAz13SWdcmQgzPYT33WM1rGL6qjvJhv1yAq2WMrSRZoLbTtj2wTQ2ShDmc",
  "key26": "2nJPeeRiyw849rQMyrFsj87PBik82zyqVmyBi7szhDpA6HGjSxDrAi9NgoFCs2qmU5pBgVJC8agZnjP2EJ5gKm7h",
  "key27": "29fg8K7tD4cYvKmaDZLKeLSyFDd6MZUCXij4B83UtNyHYCtxg4DK6xUCAVF4KrpvaYGBDa3ThpvSraJjxfymWWBu",
  "key28": "4QDGzxB3PHW51wCQ7KbMt3znbGxDPtYw3QLVmCfhbQvja9jNcuKAGMJceQstncFNMSrnyYjxm3Jiw8p4joXueKAu",
  "key29": "5EpMAohD8kBc6Mik8cfr51QpsioFE4SWE6LyduPMV38N3i1MLZ1oNKVKVHJWVKweybsJ6qhq8FgtMrcE92w7gZYZ",
  "key30": "5MM9snKDrA4NcozDJNhAhAVWhoaUdocmJ2C7BqqSFqTyXHqg6XDaTAJTSkeKutRJEVGsg8Z1VxscdS9a8yRGfk36",
  "key31": "27fDTo3vtpERb4eyd8U3N9meAVyLYWnFp4JFazaEeSYzwgRg5RzLGgS6yY5M6Gn79wgNDzKeE6EDPGxEGDfiuB6b",
  "key32": "3gbR7jfN4MGEnj41PoEk3U9Tdq9ifREnxAwaLufRwhSiy52ei3czhHTBxL8aSJ6NT1vxBhgCCuVwX9Ed4FkWm7xj",
  "key33": "5P4z3Wv5Fjcyj1MPAfYh5Vbr7XaGXRSj5K4HBjKw4qDGiw3Xz8QMtu35oNbAQudt813Q3QqQ2YBmodH5fxzGzHmT",
  "key34": "JKgLXh55a93pTXZvAfGEYBBMqiamQcEPoDc8pDyYLJGEXkaehRY9gAyCrrMhe7TUvgvhBhe378bhmFRrxgo6pPW",
  "key35": "fjn5cp5Eds7wSh4maHHENWwfRPCTQRCe4BNnbqgTTXQqbWRK4kk42Zhh3h371QMyW7TSVRte3vs7xC57dzvCTu4",
  "key36": "NLeA2tAu5wUAmRJfUVx2JgGPNtiyPQbAbXfcDWYiYsTX8qaGdFUbGufcjkvqdc9VbKyAAPRGFqi3xSY1BqCV78b",
  "key37": "4tQJfHe53Xu9N4vcnCy43kd6BzM6KTDomY3munRaHbGuefuDbcNVNLRDa6ehWYpy3BgmJAA88WXHBHZ9hCs2NVCT",
  "key38": "4VExRY31KhPiVYAv1V4Yk5bSmAx5eLntm9D3vTzvws2DkDoy7XQJb5VQFaZnWXXrkzcbSATYmwCirztwXm77w1fU",
  "key39": "2aP5W7jazuUCLTd4RGLyrRTWoDutPBmXsukm3SA92UbUBjoPKmWQb4dpKEBdqEDkyLVuTt9YerHzcMWwUknM7tTX",
  "key40": "2QUiXuMiQsY83pHesVampFBWQDAhfS9hTr54x2yvuErAmryDirdXRi2UK8YnxKmZyNkL8EssNt9yT4kVxVtFqA7e",
  "key41": "4emEChA4mH9LnPU8etEfBPkoV4t66zTPV1jSCohatm8c6m1AZnnMMhCnjG9s2AdzzFvebod5K3RjjGUauQhEqZmT",
  "key42": "3Zx3Rg4QAFk7DJFc19FHYByzhj5VT5R9xTCgxc8wJNycbW6rMSoCnji79DFc8c1EpDU7tP9gxNX59okKWDtcjfvv"
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
