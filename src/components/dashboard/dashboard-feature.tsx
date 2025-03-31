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
    "66QfhVsrU5bVMsoegSdR4aKWrWUM3w939Pm38vh6fKA6nKB7BUFNC5d2b5kFR1ve1Yi1Nt1k6NcvWEJXrnXbhXmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "426VHcpsdA11YbBkxgmM7ThB896SuXuNfgqc6wcvrmg4fAL5wGxybVc4NvLJSDNtapJmC9PNWeL1YxJyVgtcSkZh",
  "key1": "zNjsFnqaTaZ1sv1msbq2cco5KecK98J67ed4pTMRsueEhfUAE6XoNSdtJ7q6GnAWffcDEsjkE7EQnPPuzvsErRf",
  "key2": "2771FHq751ANt2ZreBmJrBf8wNREFVYDCEJom5SRBopsg2S1a4GMrsWDzGWRyvhmNLYydoCKMYcr791aB2UVVoY4",
  "key3": "3yastt6RpM4obk8vXvSryFcGpX3sAjQL4kRbrKV3Ndmh3S5Ebu92JdC4V79sJzZEGMiWSFK3EqFLDtZA5aheVieG",
  "key4": "RAtPaMYK3GeQvFL7Urp8Ed89ZbiWPcv59A7ff9YfrUTJmD5XtsQFBUw8H5v4bZsm8LazXr9fpLRtzcoDnksKMF3",
  "key5": "8AYDUBVjdzRDNnXBAamZNrk7u2VNUBmjRBYf2WEFcqFHeR7X5kNjiHG76ypNywrp59zkQNo9UPQzPjzpdmHr8fC",
  "key6": "6eFfUwGdigyKzKb11qZFT2Nuia42g61S2CDRn26jHXq5fjdYZDkK2CKsVvkL3o812v95FTVyXJUyhZH3Vvn9PCq",
  "key7": "5ZqehEoL1JXdveSPZKnEwHocYJ5iqsKyRwSc7Q5KQK6HY9ML5BFLacbAZg8RtwDyCzRtuMcAi1ZzirbSJE2k2GBR",
  "key8": "2jhxgYzyTAttQBMBLjSaKoVajuu2V2jnt6XVr5HtGYTZHM4F7a2n5AGr5h93qVYxtVmLmmuV1vRYjqTc5DdkKzbF",
  "key9": "2QR4sPa9vo7455XpbuTYCMLH2CkkkA2r7SPXxa5SDPmQSquBKo9h9CCFHhRPFmxBoX7vo59aYBMgpFMWcFLuEqtp",
  "key10": "4vw8mchQB21DJ7D3g7LoxeQZRvQYgamGyNr6aJXiutCnXbDFzkGh4MiLEXRfDWtn6KL3nSUPSaCHdXzdZb7DBJx2",
  "key11": "XApMs8c7YvBY4hKJeGLteaFKHyJ9rpRSfsDdDWojkF5JULih8CtMeEuLpk7KyZhpqkEBhcM5NqJdWccv6S2uWao",
  "key12": "4XWmt6nU5s6h9S64i6mn1a6SKXADvxxJAgKY7hYVjmnon8m2XcdYrWhbEMmQPQEyvxXSLtJsXP82e6Kx4MoQEeZd",
  "key13": "4mY83Q1pGLxpoFuRhTbzGvXUkcFQ7qQcAikcRCtMb1smPjYgdYbJmq2GWyC5iCZC67bGpmggMjEkLxMo6NvZKYNj",
  "key14": "2ApWdbQDsJfX9hHAUXWs1Qmn4MfJQHJREZY9HVk22aBnTPDbBmGzfMky8BCj9j3Tpo4x2bks7dZQc4ANwLziW8Un",
  "key15": "794s8ugv4ih38fWx4jfGE1awVG6pubxX5tysezpRhEYasoYRzUdo39ohMF76ofaZHCSwPsjT8b2NkpfN7c2FpyY",
  "key16": "5oyMXWrmiK6hQ9bSX2ELxpN8V8qXsCisserxepYmHgnCXgfzpDe78fzJWcqs37db5rTbKDD4SuaBWXmKHrzzNqYd",
  "key17": "4DN2DJTuHkfEgErSsyRi7ZmS16Q53tvWsECE2xXXdB7rjq6n6ucxjmzsTQddWD4hXwU8mMaSw5kM2bsPqzdVGD6w",
  "key18": "5e2ehGSdwQUdkSpdpgkmmZp55Qgd2h5Fcsma6ni78Hz1ZjwF4nyFQJEkMXSHdxmuGVYXKjFHyQFBfQvP4gS3aQbm",
  "key19": "55f98EF3fWj74K67kJtLDLAd5hSzS6rQ8sfL1HPPptRRz7WbiDNRX24kvU4cCoe9eaotvBxXQvi7ncG6cuwcDjX4",
  "key20": "4YFZmRBLoBjWJyGuXcikQMgkmRP7GZPgM8xc9p5LjqSDu6Fpx3Bxr12YKhdHo39VgWgLdaK8jBmuYx5pTquq52cZ",
  "key21": "44YZ68UacNcZHCPXDEHWwSNtVcK3dGzigZ1Lq47DnqUuitB3VC3JRCGjGNXtVREpY2A3toS9iDw4jayWbSxmSj6X",
  "key22": "5eTqHBa5ob1yN1CENG3YZa6KPZ4eNzboJgFx8f3GvHGmg24jjGvtka6NWWi2qrU1qGaJmed2knKX4HoL3vgUE4yn",
  "key23": "H5B6BNn66iidKnSqqgBQC3Pg2hzhRsnF4C6GQXsE7WKnSGHvZdMTEPfW8e2ckxb7vydt8dmqtJZGJUZx5xw1gbV",
  "key24": "2wcbN39mcWC3em2No6sQs8R5Luw6gmhStQrncndxwMcqiTViwW4WQpgVVa5jhCDz3c8iGPpqGfVJyA3soV8vk7S1",
  "key25": "59vREBqkjTNDXjBj1dDsAufhFsAhqdmryyKUMZhWRAi53ZKHvKYiTu67zg78TZwsbtQDDiajNoWqnsTdRQfCumB4",
  "key26": "Rpjc7v7iNcGvNNTP5SboeGovz5fr5WZRwTSNqmt8TfJzbDNa98HcRw1S88FmiUDfp5RBfBcQ5agM5s8Tc5zJp8s",
  "key27": "4h9ukG42dCcvFvDeSGf1y2uGvQmk5z8XrFZogs2BjJggPouQyVM9b2UTGqfRejVzeZs4aZ5yBhh7eKeGsvrfLqzG",
  "key28": "5qKoAc2vNDStHmn44R5SP1uRqvCLCcwauSdJour8KUU4jk8eW92pWYFVLNM23S2njhwFQv5HgCyP4p7ZGHXbnQKk",
  "key29": "9taapKatLmrPghp5K1KafcgjM1PpRGUsAVTLgy18aFzG6o2JiZ4UD5d1gv2ZjLdx1rcDESLpK6AGBFVffW4s4Td",
  "key30": "34f7PbAAJ2mrinYXZWULKeRNHWvV3ngaF8Z9CsYiAbwAD9jxTrb3i7h8QofpMrSBhaS5wakyCHRJM9mYh6jmaGbg",
  "key31": "2ptpwhZeZ57gYtbbZocxU7hBTu2y43mtVrj4cSbVypk2wt3YjDkAJkCoNcP3GdkSQziX6HzWigi8bkD4t4ujWKcb",
  "key32": "nNn6246Yjx1EPjj5zE2tCmqdA2KnJGhenb6eG79dUJVvLGx69XgjTW2ZU7kv2HP3HGZnaP6zqpjVLgL8CCRbaNw",
  "key33": "4YmoczBpmzxMRDd4u6HtCg8rziCZnFTZVpuYtkzVeB4q7xWzrzEArCkG8tox8GymUAmrhkYPHR2357gfSgzVk7ge",
  "key34": "4yH3GxPkr2JzBZiKu249RFTLLb4Ay9n2AhFqLBz4A4MnY4xJXx9mJAt78nsKF1V1buBcwjjveGGPnefMnpyHmDup",
  "key35": "2p4UpV2ST77CZXCpBZheEs52gYoCL45VAFYWRcaxRypqzZE4hthVP37hDKHWJu13gSJPjeUhfBf4QHscVNuMH7fj",
  "key36": "2g4C81FNJBtXechxkdctEyycxR5ad2N4gSnhhMHZJShQFWBSx7VUxc8Fwunhsd77nLX9F6zz9xJiPbtoErZ5nMGu",
  "key37": "5CgRAthu1dVBAYhyp7ikX9k7UhPwwUU8rXiBFCBeQUCX6XULaFpiStCqZX5H8xFPzB6qZCgmqPjDpsUDZ7GmakLo",
  "key38": "5Q972Yqk1URH5EYNsBtuWPz6J2sSXucvzy1yeaMeJJvMLSmrwXSCZqtQy4DtsnkSB79U7mcpcSv4T9GD9CbaEBbc",
  "key39": "3cNanp53xbWZjEATfT3nKGbjjYpeTVdanrZdDidmB9mh2MAUPf24myQcDfC8jSkTkA5uUPvd59NEF1yiyUzAaHBi",
  "key40": "2cWDGzXiwNnCNW5DPwaU4Lhe7ivFKJimymzXUz4nAUYhoAPjm1VS9bWwryjZo7STdYmaoUJoRAT1u8gB4BNboxVU",
  "key41": "gNxNCdH1eKpvFxRU1uaJdiykEtQmsTKuKowJySgWLSWKEtoZEDr3uCSik5zh6ojhWPKtGJCFL3i41Xm4zTbkfay",
  "key42": "4bWvyYZui2kjEkXh66MSfy9sWZTZyhqyVFyQbwuzsMP6HgULYex6uRE444fKrG5swM38eEuJzZN9SzUtxJSeUqdG",
  "key43": "4eurne2Gk2zgjC16uU94ABjGc2FQHEyeiYzTdJEYgDqW5CbsW2VJG9ar5irvcLYnSUvrD7juonWNqxPNswnoCJQz",
  "key44": "4D71fHJapU58sgQ5jqpArCVFRFSXVUHbnaGzf6FUxP3kEyZ5G5tjrX7sdNZT5Em8epkp5ZszUdTVEau4iG6eU4B7",
  "key45": "2cxKJg867gHUgYQyAuM13dJCaSgKSnKJD2XeHWLta6Mh4irNYYoDUdsw7TQ78cM6SkFCSmJTvnxbybwAUKkdkt18"
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
