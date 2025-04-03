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
    "477e7GyURri9bPYZB2kCYRfvkjxjtxBmAmuuk1oCjYSJh3UVLuG1wy7dLoLFHn1AX6fN1sX67aTmLkuE3e5CBi3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fn3TEu7HifRomCG45DzSpyBqRJU9qqV1VRuyFpir3btXHNUKzdEw4kE4v1kcBS9tB45ShousUcBJkhcSNE4bUDR",
  "key1": "5Y2UTo4F2KKynwMeWGRy1Zdr1mCHsigYpfFp5j5sU7Ayp1E19YBVKiz5jtACHwYtqVtLU5Ja3uDNe1WyV1fVyTNh",
  "key2": "5r7EKDyzrkELn68NQyVoPpWhywB4F2zv6r8qU2wYmAogtw2pEN9QE8L1HZJZMcGghdQHucPScUgW1Vt4tBssXxqM",
  "key3": "j9wR5V5hK2XhHQ6BVRYJMfBPtCDV9eTb3cSbe3B72rdkQBinKokmVZ18tn3HSYsHWNiWNfiPZmMKmP8SFEqqgAY",
  "key4": "F7uc1K1FQFFcGE5ZM9wSgNYKNcTtXqq8ngq6FqK8pLzAXvq8wBqhFTThEByZynqY4crwRrRF2qe7xDFtb6xjcYH",
  "key5": "2qMWARgyEoPqmioKqqjwiBx1p5GSTWJSP1jfzmTU2MVhttwybXkM34DDuz5oj6aFNTDkN4Q78QhviJL2qRTpa2U3",
  "key6": "5T7Gcv9PWYncEPv3grpJyCoaBfAo9epEhdmFKhyxHdYunL2YEmxMSnCqGcCTnJw1DqyVYtRrkfHTi1ECtakf2Qr6",
  "key7": "5oWAHCZ1RrvMDCB696Kakv96mb1tu7xEbiYdFe1QLqUJLi3mqSpr4T1uKbJEZDLgGWocLjDvqpeDuJcnh7qKTtGn",
  "key8": "3E8FfkrQfoA4nzo6ZLjLriBjbNAtiWpj5ECh3YKjvsj6ACSDoKknkVE1XQCQdVF4BY2AKaAR13TeAoWKL3As6HCa",
  "key9": "3EwWa4yyhtXoMk9gRadd8tNNhozWjdSUgE9AmZY92mNb1tXsadBU7CxtG3yWE7wC8NB1o85oQVirzW4Haq1MemQ6",
  "key10": "41cSWYTopNBeBeEYQoWzZBUS1EVFH1Cg543rxcRTSieG7sA2CEhJySV5ZTNmAphDebvm18huqiSP9cuQ3wvvYHHj",
  "key11": "4vaNb1RyJ5p1Smy8KUJ5ztNNSutY9Vs9pgaDuBs3fwP565xx3bgRcmmArf8ekAa7Nsf1tweKQSE49rgxHvMeErkJ",
  "key12": "Ea6EgttshZtUiRHFbhZqZimmV8VvViGvZxuXzgzQrxAaJzrmmCbj4xLhfAj49VyKb9rtE58AsF1NEdxQGSTkJBp",
  "key13": "29XyNACSZBnRw7motMdUaBoMsrbKSeA1rdL8kthEQewKap3FReYEWMaGQ5vkkdH45EKDK6BcjHPzMVHdpbuZcJQR",
  "key14": "4hkZ7GPPwd5razghRQazSygacaX8sYRNCRhAAUM3Wuiutc26pWZj47MU32A6Q7zFbtyDw15LTotd58oQEQaLM9W1",
  "key15": "5soZHtafFBvrjmQNZCm5QghRaN4qifgfT5buV6bn623WBcrM1DQKv94mgFcL26CMH1EnpnUUfm3A7UXpprgrc34W",
  "key16": "5TTUiVBH53QjqKjib9CeTff1ktiYZUrzyfjsbzsArpgPnZHJa48eFPdvjFab4kSssB9MbdZ27BtVmWxdLiH7GGCw",
  "key17": "5onFtbm8TjvtZURPtzKUQAn3ZHug4vGh1B17Csm1HYdaRwCxtGPV3tGF7SHku9pUce2Zwkx9Dg8BxvwtBnvKWH9B",
  "key18": "2nmXxto3LGuK9iAm41i1V7psqUCrbaiHyMEXxQGHSyPzUUCKomH8q67tCxJ9KPAKE6HnpDjSKyNoaHpdXSpWV7E2",
  "key19": "5jWBokEftFhj5yidf7zTRcJnDgErWYqAKRvgdVyztVMV6b2krvg6UDbspGBMcDRfS4ynBACnq4YWxcn11GKkFKqo",
  "key20": "2Picq9hUoyUgbtUp2dseVcKJDRfJCWd8FQBn1QdkCfC8rEAKnUuduoiMXmDve8tUrY2Hh5AhosW8zPmVQ8CpzAcN",
  "key21": "XnorhgCHadRWn7Fpa52ytgAWQnuTzVttYR3pERG69QYyE1sPyUmND486ZNjdk4W69b7ZUmg7194CQq29Dbn7Pyp",
  "key22": "3bwUuTuUxFt3pybYovw746iB8DMZVeQvqWcpuk9SGu82FgZ65ComtnZPWuWzDLREBMGHZLQuLEeQScoPbf3Nb49",
  "key23": "4EaMKCvMV9Mgfr71fNJ2aL3gvDabQGo44aRbHHrUg5nNAovnSNLaZcr4j4zGaKrRj85Z4kJc4T3S7RBruffZGVwX",
  "key24": "3nLXs9LRvkefuveQmwmBq9ADzWYahF5BKkJSKr7ZhRv3v88qMACnqPf5mZmAmXtgMR2noKUbDHjeLSqZ2r2p4ryZ",
  "key25": "2zEBugbMVrwY4EikxiCiAuoQN42oFxFcSeKeagJPQ1G9zRVJRosMRMsq8y2d5yZPLKrNaiVW9D5Nc9K6umeVdUzV",
  "key26": "3xnKYPgsRFp91hr6yh4BnRSJm5K9csqLFoALE8Ad25j5RcL9WrVnTmWmsLKoMCNqa7fyzkSvgHHLHGJcSfvwdaaH",
  "key27": "4xkMzCASq5P5h7nKwrv8yKafAnSPg498mBSnAuXRndk6RqfqdP35Q7epyBNvxVMnD7vq9seRDYAnw3bMxMJ9mc9n",
  "key28": "r7QdgN6gsxoUp9FLN8N64WQA7yA3DJQDM7SNB12TrBYy6kKpzsacVJW9pv73zmdZksPhgJHuJYbhgy2Lvy7sRtT",
  "key29": "5YQ5Qp9H3894F776Tkyw5VGVX9MiQNVdgrYhZsiyhNFtiL4vc1dBqdfmsC3tYinuycgv4f9SacqrJfLzM71surwW",
  "key30": "5wuyDg786JFB4X36aZfXPkCupiZ6wpWFqnsKa1Az5oGmNZhdQedufVWRtmLRS2Uozre2vrk7VSrMRWv1pybYpgeL",
  "key31": "3hT7tJ9N4woa5VHAseLh8qoPeZs8e4Nx47CzeT5s9YFd4NtRJ8nAqNTaogmT5B6SacVbABj6odhfRAGFTbRG4R1t",
  "key32": "4uz6jGw5EB2wJWXg9jPjsUFkbQpqSibZf6eFRakvjVR3eKan7pWhaiSynZEnaMfv555Gqxjubc9HVFocjeCGMhaE",
  "key33": "53XURiy1J3aX2STcce3vWQUfQ4zvqExK9RfcUayGSTzDjQwnxELFxoGm6ezWHBcofkwstX7zsbGJZAEaqU62jhZ9",
  "key34": "2cdZK62eCsojfXXZkYeSJoJMg75ZhwrDYgZkxyvpkvBsgtqynKdPDm2QxP6JbxxQiu2kM3mnxnWPm1QK2DXtUFP5",
  "key35": "5vdmvCxn7V6P9NeKhsbVN7zCh7e3hmZGm4EKubVQwRH6DqqungjMGPmU8zyPoL3pT2zxbuPQiKxQD8DcMrw8m34v",
  "key36": "5UDX7rF4Asi7FJhYjkVnydMSQt4FTKujCWdaYrtrUgXuYhDsvLeBaenQxuD4Va2Z7KiHdsHduFGuFbZxm3LkZ6bh",
  "key37": "3W4i1isGFUD8j293Zoud7VnzRHmrFT7b28JibB2cLKoy8i5XjLGFcsLC6912wvDPYe7s5PowmZnPw5BAEfLyZx7L",
  "key38": "KiCLFFQC6BUjNPNQkJ7fEPTfUWQSitHB64mfWPn6sfcyLvEhvfbvxq4e3vCWfe4h3Hpj7SQpnfZqQVTz6K7aTpM",
  "key39": "4PYgkdoMck6RBA2Q2toRPxyN5BdsfqW5MZrGzA5Mey2uHYJRPkEiL9VDBgEDN8pW7BxDMGftmem9hZUseknV6KX3",
  "key40": "PWa59aixzfS2uheCEUX7QnajxesoGDn2DEtvi5KaDt1NW5hRMcKxm9rHKEtEWfQ4dN3qpQQfvm9xyej7AHnQtni",
  "key41": "3F1SpEYPqYUjmvTP4TMhpXm1NDtPQhGhidwK35yMafTVAUS5n683kmjWYbdz1cWPEXndG2JLoFpu8Q6HU3pxycBX",
  "key42": "4XPNB51cXGWqeKFVEkWuiTui1rEJKPMU6PXnVNeP5B31EVvxrZ9SCHC3mRBVaYtokpx9mhiUaQfAuFchKoTNJ214",
  "key43": "51TbqcVzDui1VwoSNzAWWzCtdBgth4cPBkeua58u2rdS1UpbyYqUjrrnfp8PskeerEykkGVq6VDse6cLGacXKjLA",
  "key44": "3VS5XiJy4BBc9Zo3Lds46y9XLiJyRKzURB4gKnUw8e1zoD4VPEK7bSyjg2X8C8o1iAz8hFxzBj2KYQLbjv8AC84n",
  "key45": "4FDK7kJuufCvV38m2mkizX1qrrpD1sxL17HcjwTNxfcYCAFP3j68kUrJJFzLB7hRj9e5Dtjvx73871pstzA3WG3s",
  "key46": "pPbXbRXkRCLvps6DtePVvEAAuxPh8112kFVs6mC4M7qH8ZCZ9BupmqrzPL74MAVvLY6gQyExLUy59kC56X75AP9",
  "key47": "4ohWv8BvrWKSf8a1prYwJpiuenMSLE4cdkjmzNazA62pv6cVc8MgtZ9P69mWKSskiMvjhAMmAYUXVRcb5dRGGope",
  "key48": "4qmyqKfdSkK9uPBSrJyu971nHr2UAtdofXdU6EbpSEv6xMTTsmLRrbDcFgEP6cwwgsDjDJ4kfqWBAUQicekCHa5D",
  "key49": "2pS26CMH9QBL9aA95JJkv8BtKZvnxSNmBefcLgzYVHuJ8XdVP8mLWD15v9QxT8fPt2ch3xnUHmuruhDf3wurX5ZW"
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
