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
    "4dPWqy9RGD5krDLgqpxmwnK8a6TbSxr4kF9UVJ1YCi1DHWfd7WbqXwddLDH3LZpaZzDYT7y3ebovhUDRwj6zeWRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TnFb9uioiuLeof7gSgRH7SDW4r2jiAeswUQEbsZpKwo1Ynq5bjx5ZxiBcyER2bNrY1qqGsuRTRVuv6pw38hdjX6",
  "key1": "4pTQ8uk7yAmHEDpuusqt2oNv8vfFtXxP1LNuPwBKKT7FCGHBUhonVkpanDKQdLZFH8238Vi7ssMKz7vzZGuuavkP",
  "key2": "339cdi6HcNvqF67eMqs9eDBQYmcGhxbtpseimAbU8tpiYcLiYpKUA1ZsJRRczVVDz31cGYrQc4VCKjLUBj2zAWWG",
  "key3": "2KsQp14dngZU8TqjvUJ8HBN73hxcaCQffrVS7m2sq8YaAbf7gyLuE9cNb59STqHtUqSwmubg4tNj6P2jPWaNS1N7",
  "key4": "3VSFADAQ2DY8pv1HoHNzGRkgJ5gHUYd9ZsmEngcivVxHjZzZzMjNhpzhQsqHP5Ybv31DEWjCuSLfu7pr4ttMwLVi",
  "key5": "4VX9t1oN92chhuikwYokdywu9JVigAMBWo8WaPL7gbBzLQR3TFF2BWCeWiPrcfPc4xRcqKoWtgmzQEV1Q6JYLCX6",
  "key6": "2aiHfZ15ZnrsqnETmiWUH8pHqMbX1Kq1BhVE8MPBjBaEcH5GQUULhmFxshfDxNC4fp7iFeDJ9Za1hA9LzeUFU4ME",
  "key7": "5K5NpgfMHFEUeBRAyE55PBhyvABnSDY6u44u5fH7DAqGJTgS98UtU9N63C2Re9akuoardUSC81FYxkogR6An4Qfi",
  "key8": "KQ5ShVuY4Ay3KQgDiCZGinSszSAxA55KdBLGUpT7B87tgmKhAimTBisEVBLij72umNy5mNjMTbCrxsQUS4TaTgW",
  "key9": "4CGxr9Kpsq7GyoxgsePApMEvEoGvfAFtL5Svmpb3XLJxtC3xWxzrmyxgjsVJ8XRx5jpfUNWyJFLsF69HmASLDkL4",
  "key10": "4Pw48THSSMMqeRcXaJqMAonGaUxWPqXG6SvooDhjXBQmAaYvTrpwvsktPNXm5vAvWzYGQhYAK9nZRa3xLi2wC2T1",
  "key11": "4BTKVMJDVzbHbFnXM4bT7qqevfTpN3miBPLZcE9yEaLA2cCjDbLtKYpPNYv5723T5RuXAuReW2WmUEwxVnMSoXcn",
  "key12": "2yZS837XrBhvpRgrtZnUkyPEgE3rNEnAvKGppgaLDpV7gAPzz7qYK5VYew1Z9hsTSYajGowpcyDsWdXRNnzBtxd4",
  "key13": "4a5dUKb12H1twpfex4s7Tnrxvvcr3UwwbZvJPB92mauRnkMieUZFwDDZAu8ZB52TntkbWeDLtCx3ZrFbfuJJmQPR",
  "key14": "4xnLgFD52ywFvgm3LM4V4BbztDxyF5rsd1s4tb1kDiyfFvFEyT4D9LW4BMm56BTFetByWJK3HvxtoTYqbAMrcipZ",
  "key15": "22yYMbn1XfyvHc4y6bM4LaodTxENVS3K8dGKEaMcW4cDsM2dtPW3YNRNbV59zabsmqX12Y97QS3E7tYYwtbybh3u",
  "key16": "2U3BM4FcNvvMxKTS942csArW8a2u2pwmHUmbjKruGPDNYJBrJmfvJh48r2uUdg24uyQrWrcgUYCZ5EtASsdn4CHq",
  "key17": "3U6XWhox1JGYA4p975x8EfeqntdsptCn1M7sBmNNUBGXzj3HxzcRxfVWqYCRtay3JKf6oHHFLLa5py9gppf7SWE3",
  "key18": "53LDvT9h1Dgt6mD7cK38JzKrEFuNwqm4K7inDh1ucfdf9x7CunLNeWY133LPwb6fJbEB61pyUHQz433aHA8M989v",
  "key19": "24MC5eo5CUMUKwe7Jw9RpALXUbn1wpmpPmDjb8qd5AtHYPKtWA8jTu6p5Xkf71mfzYFS5bPPpeTJsKT1kHdquGeS",
  "key20": "PkoNKzHqLDx46quZXKfWr7YCcBLe6iExm5ddZiyXp3HLGzzB1ad2zEqSs4d5iKzxyCUzpHgBBAZpKAN4uFabc25",
  "key21": "CFq62MmbNkLzXeqAmXazmFy4aQdsrEUpwhRcVj42svahkAH4Xu5dnMAZMkyyKudterRwjmdG3HVc18zZrwF8r6A",
  "key22": "3EnMJtHsfevz7ML6ZyiYGRagUJN5tshUZjL7ofSKv3y9b6vgZKUKATwZQuNdBvWAwz84f3LAnh3Q2PwZg5kodxZ",
  "key23": "2V7PhYo2BS89dNZbKgSJjaNvE1QatxfN4VeGUqh4LaiuoyM5ebXbvZg5zWDroyeTkQatjEK5vS3W5QMwQoFpMAXM",
  "key24": "4mkHRiqjfdvQco81ukXwi2Yc5bLjuEjz5DCszdXAPVuzoHjcSTrChGxdd3GpnY7ozH2VoQELEJZ9xXDLxFggfGzX",
  "key25": "h3GPQKHqHQwuTMKdWCH6NroE4HiHJXtBJdsk6w4wYKqdScEraYroPynRy9YwhFugSPvmrg4zzif6gFNcdZWG8h2",
  "key26": "3pQX6CWMghoXyV1oJ9Sr9GTRN4kCsp3ffE7vFfX4rkbwvmj3oMfNaK6EPaL38gfQWPaBxLVyVFhCkY6dEhFY8yjb",
  "key27": "228SoCvv5F5bN4xkQB9H2eQbpT2uqCTCqA2fMpDRayjJQ7hciZdfe5RXqo5jtHZ5fZM98SsaqMtG8Xsjtt9QEXTy",
  "key28": "2Nt1UYion5e3UYkKJUPpwcrrgSV6z1kt8fFrjxBrTUc5p54pCFfugrgGNs9c7BqquXiJgZD5AA8SmzcR8Z6M8qdN",
  "key29": "5z5EJVZz6n4yCMFfnLDjYF4yQr9FgEfBCjHW2k6Ce1mPQjDWE4WQbnEgyfJah9gu5FoDiz5nttrL2yyDnHnSJZa3",
  "key30": "5AoLNvhQuriSKsQLGgUJoPba4pdAzRaHr86QpBAtJsM6dT7tNqjBo4c7azpSp8qowyUSs4b6rhAwvfoEkrTjeYnX",
  "key31": "3mvDXrJvK16ejFBPhyqCZJQ27a9X8LKueeqAdxq4bSwgwodJFmxBX5Xs1YWCTZbeQHFBJv2VruzVyFzyxS3hxP8H",
  "key32": "54ZiyvKP4TJkty8ega5R4U9y61cka4EZEfd2rGQSbnEUi3KDy6277U2PRbCFLmzzZYNwbDfKYbeo7LhyEUgP6L2w",
  "key33": "48xe8UtLvpLtZEsRQT6dTCQPu59Bns5y6YwJ85VhNcYUiYcmBvLVXghsj7ypb12k1SeKjFKtiPM9igX9B3rEA5Vb",
  "key34": "4TL5oQirfpRcTKRaok3w3ueftdrzCfRq4vKZ8ZoRA5WrTusD9i7b2c4Ds3t16wQLCt5AkA9qPPSLMoyNNjc1yM3i",
  "key35": "3Mn3ADsQ8rgoVr8GnZrKKutnQQvxRaWhPpPcuF12D2GvS92gMaizaSPCTVjKCpr3fGaB7HRR3nbjmMGu2NW3YW61",
  "key36": "5T11mXa7qKr9C7TtweLEraRDZrqcXbzo12F936uQiGPHttFJbov4y5vSek5FR1Kfb2hfVQzYDEacyNffBe565Csr",
  "key37": "44LwozSgUCHsEcBexoXzWHCTPS4jhFnSyr5CXB5rjcsazkft2zYLKwJKoSaVTu2rUpeeh2JygXmC4PzjKKcXWMLg",
  "key38": "4QZJMoaNqegsBWWfbQWRrMZ9Fi37CjqKkpYU6C3TjV2yGg27w2x2VhSVMSexGeWjd4AcjT4kkYSP1jbtKVaqs74q",
  "key39": "ivbKicZT2arG9czXu8FAEhhrVhZm4LWJ4sAAZwLJWAo91dVSRYW7peuLqxi4fG7u1AXpogjnr6g95r1wj2rgPf1",
  "key40": "2LnunFAkYSPpumtVDhjwEkeA3BBEkeAa6neFevg2resajsrNQ4dXJcFiqrvRXSjFSdZ31mTN7xs9XShJByf9saRF",
  "key41": "3Ca6ZTteRb2xncRu2W5kNrGWMkRnbzfmX5tGGaz5R1Ckb5woyyoa7E2ftGcyWpwcBPMsphCzrv1MuTfMdAFyYbkX",
  "key42": "4CuR5MzRphMouYX7qoPmFEmGFpzdYUDYx82DU149QBVxwj3WPpmghiTCbAdt7ruuDrr7qMQfMrz1kYhTxB7naJmC",
  "key43": "3e1tNEpQFnQ2SggcBNh9Q2yoL4ymZs4BvN2gy16CnbADXoa8UcTzBxaBdJEF7ZGQAfRCumH5KxiA8H3BLhBiP4KM",
  "key44": "KEHzcDyAktva8nywwYazLzxTaEPrh5n5UEAL7dZVXHqZRJhUEeKEcYGPdio2oiKfD8uMYQvZ565qmvCkeXvDXWK"
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
