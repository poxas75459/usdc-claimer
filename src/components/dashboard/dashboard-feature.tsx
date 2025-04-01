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
    "3Czaonu1Q8Q1bAJo7SBZNkTBsoREMiDK89LzcjFvkWpAUbpCyDYMAF3XmGiEJdbQk51kxtzkUt8awaDnPp7Df5RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ziV2rVKHtRoLBWy6YgFv5r4kApGuuuWy5aUCctdbtNx4TBEASwes1BHR3axBbdpGK1HiQxEZtn5vEMD5XMnTPs4",
  "key1": "5YLWG1pj3LjTBzTvEvREEGsvcEwBYVpPsAk9yedecgjC68yztkcWyCALg6VnZBUs1CmrnEh42sLjWKuFi4pqLaXb",
  "key2": "5FM975GgtyFNcB3SLN49W3dMmLYpuTX92ifugrQKzs1QYYZ2vmUTKLLHw3d5d9fbmE6qmkPHsPe2PLsqbvGbKb8V",
  "key3": "Uvrw2CNJXpvDPkABorPGZprzrt5NnU7eift3YCc9e6H3XrsqtJ6r6fQh5ufQt2tgrGY4TbG4AoSBB8TGnMkMDus",
  "key4": "2TP4uhredd7HydE5MPpzMRNWspwP1essxZrTEjYD81JJJjUW1Eoakf6KCzZC6AWasFWzcBMGzDD9DoDKT3oQTATC",
  "key5": "3fPSC6LrWMD4GhBhgS4czqCyRJ3D4n3dCySg78BkTcfHLbBDxFedAQ4RXcuFqoPrN5jBqoC5AZ2cwVnhf5WemJqN",
  "key6": "4bDV5DSK3ekVEatWFRcLycCptLkfWyd2EeGZN2rpJGBwb9sAbSQcEbg2mTu4guch25oJXCnPuMr5uvxZEYgwgGh7",
  "key7": "3DkBDwagsugMX3zrkbvFupnYtpYunEBSw2tZjntafLUs4Phn6J7VLM7rQRsfXjqYF4v3MFCoMa1bzPnZcREQ8isn",
  "key8": "2LTy8h8rwRXR6AhrU8yz7cVyepMSrR3ysGA8A7z1HfYztwuzjWcA6GfthWKCzy1HdavDkL96pXdrj5c3T5LCm5qo",
  "key9": "46Aw6fpXN7KoVDnrNhhXLkptuvjMLjYakMCHB9ZEZvRLLCSAXusfu61DG5Ta4MGz7tNSondpxyDV4bU17V8XLzwE",
  "key10": "5bPoAmmHpkZjzdG3ZwnTLNUBWfeNypwADRtn1HbPXStSvBVDNSqnnhvefWWzodBYwnnQVQxZ7PkFsQxRcVe3aMQe",
  "key11": "Htw4mZi6A48T24JPjRVqojnRTxYcRAHGVJTrwUPxLkVwAdpVckYGzKsFCM6CBU8x6hSR5PyNEPcQgzbQk7NnEjo",
  "key12": "2h4AQxThFYXPdZkNbU9JSemgEi4VQvEb5EnxZCZnMCmRQBeb9iNyH63FmnibgZCVQqri53QYTkThke8nJcPjwHtF",
  "key13": "4GJRHQVb1vAzEzw43feKhjPzb8KXkPPhcVkCq2xX46NHbjhxa1hVuJoAMWHWqUV7wWqTxzPpCQgz8YJbY4BmYWbz",
  "key14": "2xbDNU77i7t1b567zPxPK3kPzBrPuAtgTdmCiQ2oymVsJY4fxyFZ3sigNUWkVNrcSS4vCJX3gpEMLgd1fRz7oKbw",
  "key15": "3RBa3wtBLQpeMTcJRb3ULGbyiogAej4pjyWgQfPq1CbVepDhv6QJ3uFj8TYDkYYLYfeeUAR79xA4ETbNaNtUxBT5",
  "key16": "ibTEokwkt5D4cbM4MCfsisLf77i2B38wRo4sqz6VV2GVbfGAoHV6TCc37PWp31MW8shpKjvBZKpy145CUWuM4Wy",
  "key17": "5wx8YcdpHsubsBK5cm9EMcAZGGGeaBsXFECHjBM9q6XwS7HKRcbYvwY6TdZsGTk7UCYTq9qeGacmF5c9DvsvwJez",
  "key18": "2Qb56qngcGuANCNvjsf8YR9m95vzjNWW8wH9QsWFLZcKvMgEn6dnkr5xdHFGPpe2yigPLHraJknAcfNK3Ldozkyt",
  "key19": "2ey9QqhSBYh6jzhxN6Y38rzcFbi6GFPann85mm8m2H12AoBFBAfUKuQQ5uMHRNLJTJsfjXnyvcyZ615ix9yziuz9",
  "key20": "4Hq3JijRYJQXXZaasp3P8vB1NiJZcQ9cXAT7L3Dk4SNF9EBtXrq9FsHw4FEqbRsbArQMgCq3ygp2mBuQqbVth3ET",
  "key21": "4Yj9tvvQCjSXWwtNXsyiixyBkxLsSW2XRaYosCo6Q2DHFb6wH54KC9UfT2bXj1eEpkEgrZryc89bGH5vZdqyJ9SK",
  "key22": "36Aoc4qH6jBnPkCE4QYLMVHjMGXfayNH4jmyWo8Fxy55ezAAULgWtydM5ZVzvZghiRcbqiPcpGJaCJ66b63hdmjM",
  "key23": "3uM8fJCyvvKSCspkhWsQQgE46kEScsyDzkj2LFkTLGiR8FobnjDeuXRzxLa6aoHo4Nt88RPYszbmjKsiMR4eib5i",
  "key24": "2rsFLKKxHETgdUnMfpd9eCv34kADzmpjmJWky9KKsqAR5BP8753iNS4328mFwuH95vr1tXg4E9tC9JaEp3xwn6t3",
  "key25": "53sMYPV8vhY2h7yineqi74Pt8LdbYUQ6bau4RkPKfQ4yagHWcPKWMeVJeUk4Z814isjuNg524UMtVaa5FkZQxBqt",
  "key26": "2drU7nmWdZhQY7EfH1DvMp8wqpmKhdm54BTgp8t6KYQL3hyfV9bD4ioF8DG8wXTLmEaFHs7dHfRQPxr6hcBTXvt8",
  "key27": "AC68fPDGpZ2WXRqxMcwUVG6iEe11edZryqGipj55VRNY4fceEaojo9MTx6ZmH1uZ4RV36bs4gJwnTDN585HqkaL",
  "key28": "2erjM5RnuY4Grk6L83oq4zBMSyeYNrrWtKMTCNQLZzzcqcTQhRM5qJcjw5BXt9sLBuakHNvGM78FNPrn8AwoCm81",
  "key29": "2w7dhdv5ciDANubiknWkxoMjtMof4MZ5GQYN5BvnB1dCgpX5WPJ6Rv4hWpfzR6xgNtdrUWhkaZUBGMKVKxUZ4chD",
  "key30": "XJcWvmdAVhzTesaChPQFpMrCjLTtoZdk7T4SfHUv83W8FKk5a5pd4Qe16DdZ5bbN8yxkAWcJ45DBWS3AW9xRt9h",
  "key31": "5jv4fxMAizYE3DeqGYFRVNVny1VF7DL3AoiChozQGr2e9nJYE1nWHufLf8teywZcPee3pin18zbYyD2msC2aZXSD",
  "key32": "2GbsadPsiS11mfXobAU1qUYGrPBLNCRAuZaHdjQ3qS1w2xysN5FHahvkqEEVo8pZJjWitGccwZkBDzanwePZn4ni",
  "key33": "2wNN7FRnTnydGAw3xobyggmDDFc38xRm8EA3P1NGs3211Yngmvo97F5CRMeFeVg32yRdFsJz3aeDLwuVBj9Qn2GB",
  "key34": "4BqpwGGUEMpVP7VuvnKgzdxeseX2sCVwcC2y1SD77V3rMdS2tEJTB2h1upgugWAiP8bczqTKEJYM3GFrrGdGTgz9",
  "key35": "2nkmWWLAFFPk8CXRRFZnyMDGSPuY9iHWAihAirD6y9gZtT22ureXWXYh8H5cxW4Uja6GDePufzUMBf57oRc1Vbk8",
  "key36": "4Y7JLkBBpZJiXLXGcq9dZoVchpuAWYmD9o2iFLFYu2FMtfZhhRPZzQND2Y3aDudz6TSTVvK9adagCbb5MTePJNoR",
  "key37": "2aNTRRwHYDttKPw8LxjX6f9FcQrfg4BmpPrN8w8KWHExdFEdoF6RsY5GAf4qeumLLJh3WNghgmzPTsFrscFXNri1",
  "key38": "2VHqEiB8HkFHw8Dk55YFvacskuh3GBAtsUepTixEW82X5KtcPddYPcr8fWUs4wGqMjKzfpUQeG4qJi7EozHPe9f4",
  "key39": "382PeYC5TteSRi5zXoAtHwUjSDZqBYzyRqFA9XLC8Nx45LQwk99xUsXmJCGwZxSfzeDGxxaSNrteanKSJQp2pV7c",
  "key40": "4kbSDT7TFyfQLyjchhgt7bDqpYyFWYptphZLYTZ6SJ2ciCvB25xTXcSZWtjrXdoPx6M6xjVDqC2RxDhDWhCrp2qZ",
  "key41": "5ueNHWwi3hK133qLhbXMaGhwdiFm6ri3ojaXHFbYwSvs3tbQNf1jmNQygofw3mTj8HrawANeMYtjyV1BZxrw2UTg",
  "key42": "5FRFvXir8kjsQ9Lx2DoSK5q5NngbNCtakwXHzDKVfb3wGwbviKALBJ3awAbCtiDH4T3sXVBTKFCuVKX7iDuMhfY6",
  "key43": "PUeTaZ6myLkFdrNhsBCH98sDusafRKnkCWavqQKVFJvhQrS6RXQowNLVxFUV9Ut5UsxJhACWu2jAsg4tLdLdKBq",
  "key44": "5xcxJ81AqRjijfgHL3EAGTAWZxmY8LeHY4VJtXQTYdv4izFdVSgoGfXqKuvG421duPrGts5oABnWZfn4yB4mWThF"
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
