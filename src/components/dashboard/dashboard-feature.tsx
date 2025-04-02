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
    "54yBhMUKtKqEyPGwBL6kGngBjTCXL16qtqgESAsVfGUQfcBNj51sUNu6UzPwHh8DXAqyd9tWjaC4tbxsmkQvXhLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZMMZrbimBmcwKPDHo4dtTZiKvcajaWND3QM9hCoGpjLUZ9N6qi3o5wtLadgTS925Lnb3iY5JH9mskdPDuNmQxk",
  "key1": "3s9y3hS6nHhGQRmUtwGPAu6y9DiPtNjbLPnqKtgKzwvg4bTGf1fix6GLNX1CejSgfs2FeoKqw5wYYPUpPPxzJcH9",
  "key2": "4YjeRiDUksHh7khuq9ynSmL2ifmsB4KEKxhd2VRsnQSELkzNXWWocYWtvTGV6FZfTwj9XFxQ3AKPAMenrrfthPy4",
  "key3": "3jzxW4mteWEJY9esYfb1p1vXy868qJqUpMsGaQqHknWfr7RPwhjPybhk8otdMUYWquGRvXsuXSq4AydCNSZpMeG8",
  "key4": "54s2PDyDEJzeK4sVUYAgeB3nqeDrpSfQDPfq9Z9fWdn9fqQ92Svhy8j3HPVAa7Dc8nSS2DSvfdfruitiqAUMHH5t",
  "key5": "4ggTzw4JTCoiz3X2Mijd2HNbaFnnftavPK1LHaWP3v4Voz7STmuf9BjkXLaYLnjfHk8g9X1APdFjKr5meMMKrQ1r",
  "key6": "43PAEamMpuje5CqjyKd2AU9WXjup7r5Z54HVK1UZWmsH9P6RZmEP86FTEDmU6JcpdqCVz9PymkZPoZ3zEXWPQ3ji",
  "key7": "5peqgnkdpPCUEBd62nqMRP6hqqBRf5Pb8K5o4nfye558tEdKL67MNdhTe6qKf3Lo18y7FXP3ebUKABhZg3HuTS9M",
  "key8": "4BQWa2usvYVPpyeLJjrGw51cSQS9v91hxwjQjReGgpVjiF1fdQJZepLe1jNazPXw1VWPn7U7DESWuz2WZPReSQma",
  "key9": "5udDZTP7BPYxNAHUrQKa4h3yNrsGAr5fhehUAkP2QkbwvQ48j466QJ2XKswztR47cZ5q9dnniujqBjSStog7jRyS",
  "key10": "3PdxNspYFnXMpBXF6XoVudVYEiek7jt9A6xM5CgTmTnoCWnf1GJDWB5bw9c46hr8YMpezJjDmMVTyJctqbPnwE2w",
  "key11": "5vKqzyhts2HpGHUaoAbYo1YUN2ShWTwaET3wEFszr8r7qH3qc5nFxX6EhTMTRSHjptPTVxtCtVuMs1MfPNmtfM7t",
  "key12": "3drUsdZiJhgSZAHkzZjMa8rcRjXZRHaWkbfa8cRSC7XJHEKQGFDhJ85ZZyo7t5j8JXme5ZQYeYdntfPkvXbBZcYr",
  "key13": "p711jzHNVBs8nxecyP9dDszmGD11QYPjLyKNprWUuNykQFXMtB2pJZwmht7xaxHusnzpCAoB3ag2Cs6iXHNS1xz",
  "key14": "EwEUVcPSkVZ1aF6bCJ1cFUHupHYFzNKpLtebUUv8qCDp6vb7VPmAzoZMDFVszjibWDCQvzNdVMJVhz1GPskZYzj",
  "key15": "s9YxNK3VkfSJQtouZC2dxjURkAt7aA4HBpvueAJURzX3NViSHRCT157Qiu7u3hjpQ86UYyowCDNtFUuTVnCuJRU",
  "key16": "43ZcJyjS183hwXHEMTBYZTM8p3AjkQ2nNths8ApS4BrxNHFGpirx6DyN7Rveh5Wyj9LceRR38sNtz6CaaECRKEPC",
  "key17": "2KH9qsYwyWHboNyQNZzTGKiUJByMcU1tMmVHNRuyoHJUijHf1xt1oAmtYYKCsU99gvBTSVofrbwr9VgfoBC1Dhoo",
  "key18": "4cevGKL2mkcRHoGFnZtczzsXbkdJ9jZrjEQwte9P6f5rfu9wGSY8wAoePg2iZki64BPq1RFtbSxcM13tiHDUxJd2",
  "key19": "2cEFabYvSMrZRRC2HeihxeMjZnnpTK39ougWZp4JZnMfTDLZMo33kDwB96GYbZcLTwYDWRLYyf5bWsvE56Yfu5wJ",
  "key20": "e5wr5q9UqBttdW6eTsbAXixyPuJHCgP97RJtnXLzt1YBKmZZiJP41q7dkzHYfhrhnx5SFBPpnwLsHewPNvevLxF",
  "key21": "4uTNd1QX7goAh7X5ffveuX4Lns4C3Tfi5xx6xEsDGbxG18WzPaDCBmmgeGEjWC5MB4b9fZoNt2xqry7Wg4FnPYb9",
  "key22": "m4fDZfT1FrUtmW6vrf18ck8Dh3qdNFinsGhKi8rLZuzveYzqJRhLMkUroUgTYEZGHJunKKpypgBHFMYUh1nQPqG",
  "key23": "2mxrtTd5xpeJnzDet8bRBb7RNnQVTJjkWXivvRHpC8q44ui4xXRTxpcpsFeJsJ3aJVd5CacCDVJj8mvXStN3b5i3",
  "key24": "rgVsT3tVJhJsLLTK3yBJTr96LABKfLzauduvVSwrUxrqQxrCXZz4mZvHGeob7WjGa5LTLmw4YYnrHpKNLdRcT9r",
  "key25": "3bEgP4bMW8cKqEsV58TjHP64h5xAwbwJTbihLZ9N5NtEudBnAf2GYoqk84iZgeHLVPFUdywkmByn9Z9gn7uAEpaQ",
  "key26": "5f1srdLZEjDHtArtgqn3oJ85iDBEWaKoY1rYiWxykFyZaXytAMk6FrSDjmsBAZ9x7emAb8g8NftoyiRYoWmw6W11",
  "key27": "ey8xLNo1Lb1SXDySkecg8EQHvTsf2isDD1CUf3NciGDwTLPjaoYeDdDjaCjvDkhgMV1LBNnLUrJWzwkhkq41BHU",
  "key28": "4m2F2oJ783VWMdJQuc8nsgKo5BEgi5WUnFYVZWNRcLhmhQCBeGCtcKs5PZTqpwixyoBMbohmitgAxTiTMLQs5Hi5",
  "key29": "4xbpYdy5dWmS16YaUKsU1RDdZZ1rN1sE1DYSrCCFyCqy8xY5mvREz67XGAeefKLHQbEQZW7w47SvtqywzFtb9DLM",
  "key30": "MswWB1gASEfXxoEV148gZdU3dmy9NETAj1kx8Q1rqSX1Bc1WpTNSiL1eCbaKwZKv2PdpcpxHnfMAxBSXzy2ydzw",
  "key31": "3JUeCnFvrHQ9C9Nr46frN9VkaZzEHMMe4quTASyWnrk9e1qa5hjYAVYrSTVhWha7GXTMBUL6W8ZGc8S1bDycHQmz",
  "key32": "3E13fm1Jq3TKinWSxtC4QduuKmSKkRHbsAL5nwzvtVw7kivWoooZpmyZADe3rw8xCsm4qLiKy25jBrWbd2hAUTbf",
  "key33": "3CPjnZ4jbqK8zS48VbsBG2ohE98rhLwosf7VjDuiF54t2zBkwJiiQEz9AWakXb6H8yATBQ9GFqMNv92Mx3YgymUD",
  "key34": "5TA8GR8s7LQJhjVPPv5Jvw98Ym2w3jXiUg2kBFVuaxkZnnSQA2a1fY7EcuLgVWvDrfuBhq3aFoeb15ChsXuxfEwG",
  "key35": "23vz6GswjcM2DvN4zNShmtBwM4qTLd2rXpzfmDaveTGPvgTpgZt2Sg7hiyqCnMpatHuwxLf66XXdtAZ7REgETF1X",
  "key36": "5o1vMk1BDqW32Feiws7DtgQxK83NsTvqukwG5amLQRg81CTCecbnzRiEXQpXHokR574R8V4qDfmrQsSLPGFWZPzm",
  "key37": "2keohA3RjjAxFj3shYz4rHBq78FdUwzTEidUmddtkd2WGGvK4cCPVr3TYr1mGTjCiWsdXUbqc1x1rbZNQdZL9kBw",
  "key38": "473TBcA49m4yegsyfGxUoopqDqoMoc8fZKLGaVmnm7wQAiw3wR8YDpoYMaQxF3qzC77KBsVuQzFnaHwAFw3zJ1GX",
  "key39": "YEmzZz84RkoPJANf1Rviog6jRYmNg3hj4JcdnefDxYb9GyY8DaXQ4aP6NbVR5SeEXEQ26FeJDdi9i73WiAntFNW",
  "key40": "21JH49QuoU6GFkqwntgDYcDPrNxWfSVQVLboQukGTDX31mfmHTjtGvqP71LMNRaSAjD2P91msi3BGvUT26P91Zc3",
  "key41": "3FGcFM5vLp4QDXbNKNeFdEdQJsySADnRoJXLpbcXfatFkS9orbbzJdPrtXtu3XzsjstzD8JHHSCg3FydYJxNCEPw",
  "key42": "3kthv35GkEkke8B3YXkXUSdnPa8JdroFtFUM2BXF6fS1fHefYygdPHKLTiyJTUkRMXVttjU4qnFYBEj5HkkxwzwA",
  "key43": "2UsMNYXxwDvKP1Nuo4jrDd55rUW7WCnvtnL9YWvneqBZVxuoNbBTi8M1UYV8wZi8jbKevjiYyBJEZDkTg7YBYuK",
  "key44": "3A8ou7GJ4KADg5uD3e6R1S2nFSaYofvyZhsPCeo2sdLErCiaUSzrCsF3R16UUe3AohFv1UgBaUVYBBW3o6YNK1uR",
  "key45": "G1csmf7ZMyL6XFSjznn8UEsNTk65qHD8vrdfxJTRXNLkM1pHzEsiJxfSiVaHrTsiFTcZHqLy48qHqdAgu6tEDaJ",
  "key46": "MN76mASTrHmoJA4JrjJF89LPcRoZsWYFNCJajHyj7cqRwr8iCEzPfKnZog8SernHUdvjYC5aNUukjNtY5QVRbU9",
  "key47": "pYh5mkDQhJNzVtY7ho117BMGRFkZEEhUN47KA3oQrHTgGegagPqR4hH7DpFvfmM9ivszqBDBmTDdL8GcuBD2Q2Q",
  "key48": "4E5CpZyEF1th8VUTiq6oXibvRfSZpF4bXzawH5yy6XmF8r7bXViJ6z82rw2nKCEZToA3io2HmhbpknMLXUdnBQJD",
  "key49": "3PidXRMtVNHY3XHvmS7aQwKnB8nAZKGqK2kbcC5xE3gyYZXy9FJ91FhtjQCZFd4SCHxLbUkNf5oXSndhizoh5zYy"
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
