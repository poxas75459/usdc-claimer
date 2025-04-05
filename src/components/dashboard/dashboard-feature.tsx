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
    "niqrBBGSZuczjntweYZ87bfgNoSTK6x1yP9HXpS4CxMeQtYu4YBHbjdocHxQRZBuCBt3QzeWozMQmbpRkPZrPhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fgTEBac4rcgWPabTxnRbKEW5yd8wUtM6g48r3vLTYjMwL1kQ5TcbSS5kx896kdA8nyTwMX63XjSg2x6oNFgrmUm",
  "key1": "SasRpLcwk42bUCiGuAGxhFiFpse1hXsUXcnfitawQhtPvTjtW3MJ1NEChE3pKaftuWG6WcT1aZZDtwVi5WP45qX",
  "key2": "35JDuz7cGniMfgsvY9JsLgg3pzK6YNZrbdV6bwcRAzABrnxkByt2L3j48DLnuT61xmokcRtHuGfjjoeV7ahrroHu",
  "key3": "4dEfZZJ7Ln7bChBwP5vFvWzuAgfbJT7qFAcaEe7Y7bdNtgGLiRUG3h7BnirFJjSB5p5S61iDYysaDsfJpVfstZkX",
  "key4": "24zU9rvs6oELYjf6YqUfiuEPaeot32YdygEgJCbqg9H2izs7kFo1qfvhDJQJ8HzTNHWBfu2BAgVnav9amcQwTEmd",
  "key5": "5fr5LTdkbfUcdoVA1skfmCXNRGokWucdReUNM5WMDFYvboR98ToLAS2j71SRmP2UyExZimoKARpeXsNgUSkoyGke",
  "key6": "52xU1qX8kYEf9BotTcNhxs1KPMNEWRtNJNTWdfnVNNfdZovTN25PUcFNeeJKw8NXhg8HDP4FBGroEPWPioLfRZ6S",
  "key7": "65bsd45znUAafRg8km2xF6WfhKS1mXkSUTUxMKFyfigqGaHoME5sRsA6kep4Gkgrxrs7CNJ37aAwCodWn6a5Q3nE",
  "key8": "tUo1BPfN4xBC8quDKMG9DTQ4wf4QzWHPoVjU73MC3UHMC4hFzMYcYhkciGmy1JBCj59GRRqhpyxCTt4bmFyYhoZ",
  "key9": "KW5PCex3Bfa7JmuFcmwDJuCXHNxoJ2L6Dg7QtMUea2hAXda5RohLobovq1Hinb55sT88uPvUCsShpQSA82fkvrq",
  "key10": "66NreNRo7aFeRFyataXtypdTGoJfAjJUKcBbVm8yfaGw2yjV41PutKXBnE5ucebgX76MUvYrBJ7hUACBQYwhRDiE",
  "key11": "3minEi8z1zNh7jCt6Rw3obPBF3uHUygRQ4SY5J2SSF3afh2Aefc5oD617ri5mL99Ls1vL68F8iQ8YH76bof69rBp",
  "key12": "42vdHyDnWrXnArusW7L88k4nt3GowvJamK96LrmX7zjCx8ASWTo1ERonQoMrv2e2ZHewG8eppv91RVDpEgRRaSxJ",
  "key13": "5JmTprKNCvv829zG5NuhsT7SUxCvKftMHuYaBAvwz2qgP9KZnKbsXeAbE7ieNi6F9bseo1tvUahm6PbrUJmX5u9R",
  "key14": "QDczFyqMBzGGrUqnvt8oDUNKeGoCrKgTKHe1KTFsZNWfGJpRkcGGux3m61jxXJxGuVb4Q3od6PBShvfRAVaGLYK",
  "key15": "2NmSue6D61PhufBZXqw6prPruw976xdpUrhr26Jyz5CxW7SyU9Htp43vaWyyj4v8XL48rLYZnm9jtvbTM7LDqCNV",
  "key16": "3nwQxq1JZ1pczzma5nv9J9wpudovz7twNQd1aLJD1aQRV1bZiJsKEbt34X1k9MeoU2tpr1h3KZcvPyVK9HzzC8qz",
  "key17": "2a7AUyQWK3BFCCD8WHK9cdeJ8jGBenxvyXosRjzSkpzZCYEyLrHfLnGgrXGwDFiNY7iqbecoKEcijMA82JPqet1P",
  "key18": "5pDLo92zjrirtjxSBxdDpXXJCGptxpn2wJ5ZUzocqqqouRL6xgoF9FEHKXPaEXtegVF3ss88Xcb3zTP4fw9DmR9x",
  "key19": "3c7K8SFDKY1hXoBZt3ZZQq7YZkxTQJSL4JrnsE5P3MCVGWM9nmiubqnKek2PSqU1BfLVJBn98SseMGqhiJPGzX23",
  "key20": "4JbkETZnSwUCgytPczev2TkUoTMDHse872szPYuN4AC3GGNB5FqjZwx17RZgHrUqZ8vQh5yd7aN4zG8fsPg1q66u",
  "key21": "2n7MKLRoaaJonLfhQuTEqCDty1PpLYQqAaeeUG1emELouvuWRVdXUBT7xgU2Mz5kTehmzeVrCUEnaJBfpqGpBN62",
  "key22": "4iyVa5jvozxe8xYX38QMEH8eKM1mAZ7kWzquenn1UQGcgWizmfxsvBvVoBHFSgBmRdzCv6mK5n7vaSTE6rrxGEUq",
  "key23": "Gx4PVixbTUXJYLRCopt7E8LgcD9v5MaM7FNfocytpCvHF2V69gGpFebtTCSMQtGyhj1XZSAfjkZ52HTAt4nvjgo",
  "key24": "5Gk6Q2Spxiwf9cX2NtTTJ843bZQt8uLYGEUuNFtqeM5rEYfon2GxGsqVCxUrr51ScvnkoZFxVWvdWFFuNVMaSHpp",
  "key25": "2FADu2TgpyA2vUQUw31B5pxpcbnPqzWCkvxgcSe9XGcvoDF5YW9ummyUs4TkdbPRVz71Kqd2wXLzvABvDBcHGWTi",
  "key26": "3YaN77SRCywTyEAwpmkJeGTjPPSRWL5r1nwEnBU5vYhBAAwWYVmz65kXQcuAed6RaA4EgrLcqeyaC6f3mWeMxf7c",
  "key27": "5LYotdFasrh7sWtqvpCWjf8VffvH6LtdW4Dro8CZSV95vy556vY87nuL2xHw9sfwf2MvfA9zzz3SYL5CgYchMWok",
  "key28": "Cj6EZnWNdnQdyDu5SK4QognKnEVBsAe6sQr51fEjk9EACBF51Z4UfNrrFeYstrpZwReuoGJmyJEEkn7EMQEHrhe",
  "key29": "Mi975ywonFzv2nAwLmhrBX4KhZUCJLUGboeiUxSfWHECsbveSVTMUkLuU2NLAykiHr7nv96GmSjN4pCFNWDrEQ9",
  "key30": "59QSvGyuCK1TnmdSJGCVVG5rpcAdznsNZPorSMkZasP6qo8LABa31pUk8LAnEGVNB3NQQreVRKFZaoE6UmVejbPC",
  "key31": "2nc2tpz76UB8bDKPc9hhUJmy562Aw9V9iSXdzhHCbDzn3EVv2MK5UPWNGqKmqawj87MeNNXSkD5fFGBct8G6bdeQ",
  "key32": "5YQC4XnedybadcTX9puZWA5f14qF3cu55aL1qR6vxkSsNZ7PitZGAdeecn1MxdsYjSuqEG3wqAh1HiCjs23HKyNR",
  "key33": "4GdAcaUYsErGtE92PGvbYjTiviWw696Df31E5sgf6K4iZRzLbEJVs7Lm6UE3pi1a5FDEH6gBaFiZFYGGeQKNg2vg",
  "key34": "3DdKWDAskC8R4tGtx2T1YswUNLmYPB7Sc4ZPdjSNtidVGMxfPNyneSc3LdgqT7rPam4KW9rgiVf2LnBbgJRXyEoV",
  "key35": "3E2HtESYEmxyGiXaprJ91ho9Z82Nvuf1Jfh4NGMw5RtXt7TG3fqqNEKDX6nwpaXTsxjEy5a4juSs5uByV4jxoUGb",
  "key36": "3cWHH3RBtGQCUT9ejx8WPvLSph1xW9GrMouXs3Pga6R4MRtKKS3XVyHsGCHE2z7tniV2LaFTQhMKrkzzuswjFJkE",
  "key37": "3ivvuR9sWQ9PnR17buA6Q8b6rSHnSAHb7MCTCVntA2VGPBEieSv4wkgXd2wGfXkRzRCMd8Jtxynb9sXCmDS1LvxD",
  "key38": "KhepQWEfZ84VviotzUAa2EtgwBKhPrRvAWdPbXWhmyVz8sHsXEiaCUbLvFLHQqxxfPjK7X9FvwFgpXxR77v6hzG",
  "key39": "2QoATAXyfCHMgqfGzaKvBA3ppoFg8ZRyvKSeY49FnB9ZYhCi5CXeSeF7qP8ZMTbLKVhM8dND3t8iot68KPHCp5G5",
  "key40": "es384iSR8CBicHg37JdaUzLUXrEXBHJ38VBmMYt5aRe39rTrX8QJZjHikSJ73U2yGveVft5P8qC7R4eHS1MXK7r",
  "key41": "24gNEWXgvzeNUfYhGBdZJofiqqxcvqik7LJpM45zpxk6HKjaTH6asD9YcJ7gFwryRT4g4vaHBPeDP64rwxXKWBNY",
  "key42": "4Ym628TcNDxvxTjbywjb1ZCi8ySdLuBb5gNQ4VkZtdi3rhYdgghhfJbgUkgFy8Bx9YV1LywYNv4tdeMF3tJ3gjQZ",
  "key43": "3Y4BCfpwKjWhU6EJz4M1ECaErPHmYVzYFKEyBMbRckqa1UxFVeZp5RtzyBrcHwr2TrKiBHCjfraH6BvSn8kBHhMF",
  "key44": "2DXeJ6Bd8VXLJbmfML5z3aMY6zizo1XBGr7mbseaR1BALcsXoL7cbMaxpif3Ryx7ZK9vkPos43wuRvMcGJpJX7zL",
  "key45": "4H8PFg7txYXcPT5MT7naLz9c6oQSoLeHHqoL53JcWFvgx84TfgNUJWk8p7Et9K9JpeZj611q5AcoV95ECtU2VvSA",
  "key46": "4FuhvunZ3KzqXSt4ZGrEYhBTThPShpywqZgWHhy5yL513Ruyxh9Xwpu6obgMfMtQW9y7yfnBsMTgZ4znDX13ntVm",
  "key47": "BYru72DnKBPS38VYyLHNY1obsCLbPn8BSHA8wg1Wuk7mNm5MEne4oJRfEvtFBSdA5HhZxzVwExxPrEcvQzE1ZVC",
  "key48": "67iuh5YXWj8FtPMeA8paert3MYrsBkSTy2X7Tg5wMvVAQGUYhjkJBFHQekDpk6jciXN7LKdhmdGxXUQ3sedb1zSB",
  "key49": "4db87THVGnLUzKeoc4rtXnBdiPGiaagQBPCGW6DHrdSmBbWcwriDEbMDLsnbmaVbUjJ3qh8sDRne1SaALWiXXaMj"
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
