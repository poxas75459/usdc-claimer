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
    "2E4EbVNkP6mw1EHzym7DvKevUhKrZxJGpXud2LsehG3qB58MtEvYFnUc19HeLL3E8SemY8NuL5pifA156isx4wem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBK9veTMnhVR8CP1R4TJpDQM6YWvQxgNP2RYhByPK15Z81p5hR2SBaD8EHg39HsBnuKRqTSHddGkgAA79xRnXs4",
  "key1": "66bredTbXKJFGBJUhWKbxprKBPEr1symdCz4idVM84izEvN43yoEe2Znz2sEc8x2SFerVfJBoqS19KfT6ZJq7hTJ",
  "key2": "4m3sC3mYFmtn95nf9cJkm63BmqbJfwqo9azeJEabS4AfpTVprmh57Xq6tgMPtnyYjZMNE8EdvUyGWEQbauh9YFVY",
  "key3": "t3P4KeF1bLTBxYWpfUMQ4ZCwDY7xnw4nqodYMjtvT7nWkb9HduSagy9qzkjQBRpFDxEXngVCwtmd3GaVzCemFag",
  "key4": "5eDKwMPy4dkJVA7VMa8HtRRn5pyU7kXd3CEjVRTLisDFDk8d3mdXFMh7BZ4uFV9P9noSTpvNFjqLhMLmUAF31vXi",
  "key5": "2Gr8Rzd43WTcwCeQjnMpnX782kTsufEtLQ54iAoTkigfSeFKT2npVmMaP2VdDtjvL7zyVupR5F669eC4VaJwaTYr",
  "key6": "59iRj89RGXoRpPrDJ9pF71rS6t9o5XYt1nbQ8k55AW1xpNDz4EdrkqaLwC7x8yzF5bApe3tgCsJEcZ1VNJd4MGeM",
  "key7": "3nHBXT5kQbduuC56hEATqDveuuBG5pnEsQvgXHtFTfB5Zfa6eDLru8Q29Zt5QPyzz5N2LrMCshkYaiCrrZQsoov3",
  "key8": "4boAPBQL7xU8j4PDW9gQUPZP7T7oCZKiD1mH5p5cyM4qgpktyo72rezbms6RetyEaX14URbhNWAE5H2Y2Zw3eFYz",
  "key9": "2bCKSrtbFdMSKTdc8QLFNLV1yugHqrng9LaLYgCQPuXcWDVswZxDvhTu1p8jcev6QVKdLw3SqxEui1AKCmyWmTaQ",
  "key10": "5wA5cDCYYSg51dG1cPPUS4N3Wot1NjJ5KPC9gDNh1nN8JK4cco5CgrudhhxL2UHrpqusidB14G1o9tSHghdNhdcT",
  "key11": "2AzGRV3jd8iZmESxFMPDFPTziALniugoba8UbTqyfnFagVGpB3uq6dLFVvspZFPvEcosLkgSr9JztdigaJpaPxVX",
  "key12": "37oy5m1n5PCTxubPqvkJiX6fFM5mHKy6GGsxfrRkeqyvPtrPVRHf3FtJ54gek6C3iXbBE9AFSLxekWocgb6fyDv8",
  "key13": "5Q8zFaADt6D8vLkf8MreiPyKewFXReo4eeMymzAdxfWoyQ9Vy7hxe58jcw1btTfqHSx6wRro614KNCXm8xMnecZ5",
  "key14": "548WG51xvRqSjQ23B37M2R9Mkq1UjQry6C3RnQGoSBJZVdXifXW3Scx7r4qT1a5W3Uw7D9JWrWL5fWKUeapg1MUK",
  "key15": "oX7eAidxt86zb6xyQjeDAFS3wFYdvmFiNJW2BWcuPg7YCzoHATsQYdx8Xz4ZiughtpvsQ1DDm8vXYTuYWHdNozk",
  "key16": "4aR9prXFddeVjtLFFdSgZ4qubip2DJfw1UDa64PRXzaeH6xZvYMe1ePsecuxVFsC5tqYP8JQx6v3QQbTHN9MrqNR",
  "key17": "4FCC7WEKH68XrxhAdAHMHA1SzAaFxaaABgqMNzDWvSPZnoEvKVYbCveUo5wQyWurRCFYXQTuvvi75h2QSK4jSWQe",
  "key18": "2m2D9Ld5D1Ef9hEmiyu9uqaziXmx3ZehHxW3sP7riUSwbFW2zg3ERkNsQUfs1e8FzXKjNcAQc3PCR4uR2kXpomDN",
  "key19": "4wtAkqNEPjT8eFqCAZDCuGn3gGGnmqnSg822dLWsPxuwCT85ze6fwowrvm3aKjDkjaDpZhdwmExU6w1VZMSPM7Yd",
  "key20": "24kp7pAxUZhsS1UPVGA12t6rR1FbTAPm7V8zTzmpePpLTpFAXxXBs92SrWdhAPLsk7h1jYC4ynA2nDX7hVy4UtSm",
  "key21": "2qVzJnZcmrBnhwMnexktHuodYhRMA9hHRKHTMdpdPGcM564oS4L41kdNLMyUdYpqcjB2zFmz6TecN3BRdd3Nxumz",
  "key22": "qJN8VvbgxHkvbpmdygK6epZqSJQkF86uFNERidHgrNejX6SoHjPZtv8QGwJcCRgs7aUoL8o8aQ9YiVDvXZJaCCy",
  "key23": "3RhnurDzsFJxx9fcU8LBM6wUSAEq9dwijfNKGMcKcCx7ZDUaht9YXGtcSFCvuj9eFAHAxsUnmM7ypALu4W7yv3p2",
  "key24": "4JNC5fkPhErjcWBufz8YWcb9Pa3RC9bAHStCKY6SJC9i342tTpXvJYfcCAdiuqzYAwT3PNCmWJhMHK5CURdzdMDk",
  "key25": "2VA3YZAmSUhrY9HkQKhNyAApVgdCMhniWswpfPBRKD2rRfSkJkrvo6tK4xmbYfcUsKUkPucCkhYK3V7BEGcifQ7q",
  "key26": "4s8A93Dcco22bgLkMAVDh9KGiUS11W3nKgkzVwvVPoBXdAcnnnkWq3Re4qLS53YYEduPf8goWLoXCjtosbLYLLR5",
  "key27": "39MJ6MPrDTWL4Jb5ZgQ1DvYEyF8BExeGo1j441duCByFkNwZVNm9iNPVGkK5HyhKJCwuuKncT7YaezBpvif6wfvc",
  "key28": "5ejR6m7URWkq5JZ6SAixCP5vXwpfmn4U8bUTVWs2YPUixMN2podkTMjrgmGh6T3gYNxwn84egQsHUGUM5WfnyVHg",
  "key29": "59YrEAcmiWFLf7MJcYbZrmp6QgzgxuHGMsfHWv7uX6UQrpgpEMMjeo8tKSWpcj3vUVfaR4uxhYHqD6K1xNyj2QD2",
  "key30": "3kqYDGajxq4zXVNLaak3RyYzXNfUiQes9dfKUKv6EQj4ZrfKSVAukVdYwxfLv3bciSFrogVmUPyh8QgQfB1vpz4c",
  "key31": "676WV4Qum83rehHcgpiXu19TY6wtfWbij8BRrMkBL93yNXVPKKR9cne1EnyLHdNcdJoKz7nrci7UEcc4pc2skUFP",
  "key32": "5BHLbJVAeuBPbWRT6vP1Qu9CvEiRfx1MFNX7MJWHq5pJp1pHDahLfb7BDU71JA9rKuhfEkw3XqiKfHUVm9ptjy7q",
  "key33": "PAonBWHewXRR7CorrKe1gnWwKm6iYpuDovp9LUSghuFZCqGiHP9C7JcKaYEKMSis5NK77bbQ7vdBUoULJpF43z3",
  "key34": "cN89GDF7EoAnxfwsxarH62nwBFRgGAabnPY9wB35bKbxmwPCS8tXb12JptNiuH6CgfnRc4LJaqyD1uAJZypNtMk",
  "key35": "2ZFKNfwrx6NMrM3icTqvUiX52MQS2TP6LHgiJv46rMEWb7gxBzDPyWujoBEssVJ5ebnA26GTnrYWCGVWd99mwcQG",
  "key36": "5EEiqrN936w7cCQBEBrQPKjx6LSBfX8JEYpRovam7wKV3E69tbeHdneaVh9rVy9SGm6VqK9uyCC11nbhf9DrDCE9",
  "key37": "DCLFqriYr3s5vX7NhTKHFoL6ZffDhVU4qBHd8gUdehu3nZqDYfbZZ1v2cSdDXpB4skTgWfXHmoFQT9uNMT7xe1Z",
  "key38": "27Y57u5jcKZ1EA1WhNsFApyaP7FzykEU2YLN7TqB1n68zB9iyYy1L6d5G2Yy1hveiENkZSQtQv9hhoZCtqE7VSLN",
  "key39": "bgvMTf8ouBFt2s3jeUbBHRQp6wULD1iyWjA84sToTpZ9zFA8D3gFe5g8y8fe9mZvspnQZwqhCRUW9HKwYT7cWyN"
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
