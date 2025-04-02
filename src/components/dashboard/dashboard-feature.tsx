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
    "5KBkZSMyKhttyAKPgZWQLL7zZr4PLYdYSvjjUUHqeGuWfnvdYYVVVbkHQFXdLps91tc6z8CKyhBcnUDQLZKgysmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ckChePLR475aRAWRtXQv82ZzaTdAmHkKhZ6G5K2co3zoAL6drBcZVAvkjvfQG1LMz4fLGpuYve2yseWVWJopy2m",
  "key1": "4iAPrSaYnuDbYirLLY4DC7sVwa7jRtwRtxVoR6f74hoN6ZjMEVSuowkUpbfBRyxKkqW5JUi53AWvBF1obcxV5Lj4",
  "key2": "yEAuSMrL6dUik9kqCtpLJy3t72xLwgFsVHfMvJK5gVMetbZpyQ8qEnAArP21boGf1kFZoq8cSrwyaAKcAe4YD3C",
  "key3": "3e2BHTmtwW1W2trkS5ehsgGTdZ2WMmdNpRq16KE2rHD7Tb3FF3EBeYjT7cWps86vtU2YVwfqhuBfo6nhVdkNevca",
  "key4": "4j95U3Xb4AYCZgK9mMmdjAyrF6ZFDR4KsYNHne7WtoHyd8Bfjf7pCqmzMPXBQRSSirj7L3C4uDcAmcjHccYZ3EYt",
  "key5": "2yZtBcqbwp6NQXFr9dHexCQNNjBHUifQNgqav7m1ryUjxHfKTLQTD2qKEuLuAgTgc4kXghn8h7khr4U7ktEYjRr1",
  "key6": "43BZWpjHMWonbHmufPjq4PJYiGcamLX658jFSoeR4EHZqnnP7HqEubB3HyuedZZ3fqNUQANYnWuV8sQ3NjS1Q8Ss",
  "key7": "3DZYnotN4uXzmxWGyugiacnthBB7LM8Xft3AhdUT8tKH3evrWYXLpHMKcHrW5Mtvk26hnjvmfpy7DzkD3SWDNgX",
  "key8": "2nyMyzpgDL7RUki5znt8Ewzro9rYZjhRecANXbs2EEwuVguQZhneWUWiuVsdMbYuXp1VKww8Y3bkhyTqRkTV3Keq",
  "key9": "4CDyz8NXgD1fcMQpUdkfAMHKoaLy275uMFKPWvjuVECYGxAR5TgYjrgvXQXUQ5sxa837AuJE5yUz8B8pRAkvnN3A",
  "key10": "XsrEfUkRTZtSpkQBoLqgBMRC3GbwNAjWM6iup2CFfJrFP6u82a821ZW7U5Gx44SNW55mzvwPziBY6QdGTRjiRBs",
  "key11": "4MTwkHjUXeDSq6mZ2aMxc4oRT91ybymQVBgfxE6A56BDJ3AK8tThb2Y3uBNbSAauHCVJwv3DvVLcNYVfioPG4EDY",
  "key12": "QyX6xSocyV2FLR94Jsqgh9xFQBx4yh14LaSCg5eD38oebNBC8ZbVTHKXVA3grKcyEUawYjuTJ6PxEZ2c5SgS2LZ",
  "key13": "4d22x6J3c4D6HWMSbeBZvTLdHMv8DxizJ5wH8XMLpbFZw9QVdCvsSZJz4F2PNtNNuyZpFScTn2CbtE2Ppgx5kyrJ",
  "key14": "4bWHFcmA2PEATv8E2GzrhxsEoLEXeUBwN1xkog5w3E85Jspza6EJEJN9youXNTSjq4e3enXDNCsKJHxCqs7SScx9",
  "key15": "28eVTK3GXp4xtfjfCY57raoy3ekVaeXnLbvpv2X6DtfMRDKDaqY2r3jxbwPXUP9ZsLFz6Cwf9QxG76vKLdSq5iMz",
  "key16": "2Pjg7DXRt23qzSmJ7GPULVVHmATeZTRFxo1UkKDzxgT2dQkgawYf8GBGzSLC4CuAcy3UzYhNbLokE2uFWSsPZFgR",
  "key17": "45ShYSuRsMaHoF4jSerofgQYBnNZAwg6Sp7fc3jRoaawrtt8cYR2WxVHXyEsiJiaM4cG7EdbNtW84AuS32fwH3C7",
  "key18": "9uTkvsv5LBwjFXzSzNYR6H35fYaYRto8ZQNKzRr5Bafxysw2rfTGrNqznRcnUYdW8cNQMy45mDzVaqsZQTqrNfM",
  "key19": "33JFeWdKiKNLNo3JL5EyDEzsqwj5ktceDXBRkwA8Et6E8rV2tUDZHk8nZ2aLTKhx8n9ugEjgBDUEd6ZGMiDDomkb",
  "key20": "5VPGas6QAnX4udCuFMcEWbAciLEQmah2QLkqZdfpTr3w99rjnM8GDm8zhNnKzoY65Gu5NRJWy7e3dugBwyxGyBUP",
  "key21": "4xNegz7KEhUFPQLgGSRwGMC8LLcWg4KM7vtYTTbAkEq8iovRdd2EutG2MzFfPRoXVgyaYA8EMA87GPwWPCVcPqWZ",
  "key22": "5u72vDs5ayFQN7yCpPj2zGR5BAMzem8D3NtkhShp5U9QwxikjtrLEBcyS6ogd8GD4LJpiWehR279rAWSMDY3VuUt",
  "key23": "hk4QWSHjGqWq3HKeCFaPQ8dcprnM5soPvkUdhr7ePUNttdo7UivXQN1RxgCBWSUfhko9U5cgBdDPNVbwy7rr91K",
  "key24": "1SR5CEjjBWbH5pSE6J8MTdznsdnAsyKDhhpsLrV3eyn246qbpxJtJdD6VYiironwtdgqiKgMy2BVXJYoc7uhLig",
  "key25": "281o7bov6FvXmXJm998w1cdEjmjCbe4dnAmvwXPWrNRwH2Ss1Mt9b6P21nQurUpEvpC4xGVgNrwS3bvFA3zB7U9J",
  "key26": "mTfQv7HdUixpWDJzp5JEWsZzB4wLxUis8cHohQ5XKK31e3yyD8kk5CxKCENpE4ph9fMsv3UmezfkmhSNsiHJhjr",
  "key27": "3fVFxptNLugv98r2JdZXCinbZKGADAx2F38gewrn4YYY5AoHkmE1zRaPgmZUyBbjtuo8g32JXVSqHG91k4mXyZWT",
  "key28": "2upBg5WVw25KR4mtGfr14zjEv8r72DotmBXcsiE8obCqJDNqx4WsHSqphV5HP7zx6Gp7Yuoeao9rwR68xEwh2nkr",
  "key29": "5rc7WS9cTuQ82MMJNJbh4nd6X2tN9xpUPz4dPCM58JnqgteNPzpm1zaQ7geMuQDna52qa1sdzeRUZWckgkC1SHpj",
  "key30": "2N1vgM886i6H3t3jpW1oKbf31ENwmTAPZzY7BhAmBbgqK9jmQR6Ghx4dySHutvaoA7KorrmAxycGrbcrE97MC2AD",
  "key31": "3uhWZaDdkn6j1qh8xeCWwkpSk9bA4j6f2WATbUWehg2tPqCgEwQ6S3SW76MVE4o1UxJRnGKe7G1Z4mKf7LkheKVS",
  "key32": "4FUf7D1mGEaUEoheA9X9Ca5QMiTWjgZ8NirTQHg56vWb5GzqfdpNvTUwxxi1Fip2K853sDQ12X1LWzBstV3DSNHU",
  "key33": "2Hv5yM4n3mFB4ZxSjZjWyzB7zZhNiT2e4hmJCdTK3BwGVDTxvW1YB3vGmB6TeSJLSqoxckVtrb5LPQkxBL1uuTjz",
  "key34": "3ygJ3RXccJJdCAbeDA6t2SUinays61ocizJoXWNPTQgWauPmNNLiS9YgFSMnjHSTgnQQAiVaCpkWEpdu7TrxpV4S",
  "key35": "2pHRBLNp53Jp7KXg419bjfshDBQHtrwpuQYdD2FDEkzDZ3QzQFUNtwEG9VfRwq3JN39XJHowJFgmKJFiswGy23vS",
  "key36": "3e4WYZtJZudX6Waw5PSoKVffvY2vHvwbnGURKZ1PdvH2LCNfQAoKJhVrPn9zVBnyhvqWtonq87Cpjopifez6wjQZ",
  "key37": "5sR5kS2CYSa49mjboHdH3dHCAf5DPArbKzoSfrWpb8SjwZdcEPC1AuZ1z7Bgvp2rgznzS48tu7CehMBnTbUp4C3G",
  "key38": "AUEhtkn8rqaHQ9FiukhJjUbb424XBFCcV3vuQ38Uk32AuBecJr1sM4NoTcgiwTUFnKYJjY2YQDVRpHJ3tKFeUk4",
  "key39": "2jn9KQNviSwaRKLVREnZQrY9LMrJYC1C6czPM4pyYW1fiHjHHvnSkwkNhfuBgbTJ6WscmuPXkHnu2kbzeHnXmNP6",
  "key40": "4RU5KDu9NPiaR9ZckfF9rGQUjK1A8DGXQ9hzY6RZd22E37AoGUCUYv9ota6g8hV9twUJ9Kfny8wqft4kbWmhCo7G",
  "key41": "3pUJ6xe6XJfkuycGtK4itHF2tbFceJccFreXamVfzDg5x6Cn7tEeYB76Qp8YKuAxDVXJg7Psd6h3bK94b4vKQhHF",
  "key42": "2uYAuWV6xuQgzWgLxSejYL61PVsLLwwCQGMDGU9Xp8yCw2RPjjcEtdEzji3pXgFsYYXXxGxAnZpHp5nKwjQ4VeiC",
  "key43": "RLmr638CFMKagqgMii4mXehruS1x5foUQH8SL2cr24429W5m8EgaPDaLuAWpKmU9oLiFwrBS5esE22uvQTj28Fx",
  "key44": "5Y6Pcr1FEX8XB514h2KBq276qhFUBUrhck6T4zATvSwRxLNXTu3jc1GNRVEgrfPUh88sDyrwoJBzxFQkFLyyZdop",
  "key45": "2ciuoyeS3ghqbAGZg2TTQbYBRaD17XnpcaoXTa65M8kCaNYF25zQcsmZosSCdJiVKvcRf6zZEJZ4YzeXWkLE2cPN",
  "key46": "jUF2qTxeEjnBsRcTkinnLYeCcXog8sps5CUJ79PevECU5nTrvjJYEBiwPuKwgnjZCEAarfSNedLLuWQ91TKjUFD",
  "key47": "gWZKruend9LSevAf3wRKJY3jjyehm5FDNPz1nGQHAFUYJFguZEuT4sR5X69Xq889cBLEw2JEMcC7CgAsd5W2Soq",
  "key48": "41RwSTn6Zyzx1g6v7ndHw1RqpKYcnkoaPJCa7vJiRVGrv4Hk5DwA6kMVMv2kYUjCkxStTmrbuBWz7DfQ2UaiqcH2"
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
