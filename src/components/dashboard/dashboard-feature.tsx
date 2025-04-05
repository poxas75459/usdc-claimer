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
    "3EHcvikYyA5m7u9zPvuyMmwzAEBNFoqZbWPyVrXzNhKytx1HqkY36YFYo85WYMggsEHwGVQA5BR38dLAvhHNWgub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jA9ykDFFueNtij5PnhuV67AmmGyg6cD77atAeSFQLuY44oQyxHtTtJzmRNKXUmaiXuTLHGhh8fGc86hz6HCisHF",
  "key1": "m5qfW7UaHWmTY2pcqbVg4ayCmHw46VVCSGbzGQ8o9v5u8cKM2hNZG8oRCvRB2pNjXm2ER8PCZfvZ5sy8oQNZ37v",
  "key2": "35BE3EbAgjhkkU9XZjchNUHdfCRUsWBkgjnfXJC9Ev5jB4KwG2e41zE9KyXJ3YiodMAA6urGfEntLKoS14Qedav5",
  "key3": "2J6inG6d2Vzm8zqDZpJMdWgfJsbSeXY84qy3wcwMuxHJUhwLiHPy7AxEsHEpwFQLjjzRv1udciKTAZckzj3xggKo",
  "key4": "wTTsk7ybiCRLAHBXR9BGwF4EBN4rfpYYd59s6iy2EoMDfZivi6zk81onzk8Q4MSPrxAVcxmygKRc6Gcb4GYoDNo",
  "key5": "3Kikm21bm58UhYJVc9qPjVtdD3vk4M18GpmFHLo5jzCcxBDHznNySPLpcRuW3rmCexoBw7qkG4QGdTvPYsqicfiZ",
  "key6": "2SZL6pAuqTdVucxdzgw1d8ttivhZNTqtG4mCBPV9HFQKBr3PwZrLeXfTjEs9bvGxV2QJCggMWa6g4weEp1n9jr7S",
  "key7": "5uDYYytFaRmxPwvh6GVTPd5iPTfdQbDivXxfUib9NjNXp4wS3h56UbzukptrLSyA65awSutqEAqazCEhgiKBb7Yt",
  "key8": "3mcpgVRWwL4iSFJJvjt8bJQekU9ZXTsrpX8cpPpS3zBT37pRx2wEvfT49mxSguGVBKsQ2XRWYcGZ3D7wVakaeEFn",
  "key9": "44hBUGy7HaJxVNwMPxSf1uasVF54D4bDGmNfwBZUwiEANGde7he9hMsuKvXziQYy4Ljw2jsBmCkdrqwhkNbGPFGL",
  "key10": "cFfV6Q1ESfXMwfLhQqivkGmuX6f5QjmufFcaSvFDpv8JyawspbkQitSUmJmebGX6A5eNe1RvXnbaRZGZW5YaTFJ",
  "key11": "5VV3o8YojgDwnvWpSMyaJmrErHDmxv7bwG6DiiULEFWag628fDizFkyfHjrMUgUK4tvtu8m5efnSAtnQsnr2ECFd",
  "key12": "UbHU2g7CMSk5ZdeuyJLnMXPMUpJDp73H1eeAjNr2qDVBpFCbkxLDbDqoUJ8crkmkijgoKLKU7PnG6wcyaGU2y1b",
  "key13": "3cYUok6B6YjfsaXp7WK9oQ2fLF7W2S9HLxGrjL3GFZjEEtqMU628YYLbc8hFtTtwwq3n1tatvGw9Y9kHAo8Hh5CA",
  "key14": "39hnrF3cocrmWjynJwMjXEme5m2WfpLQh5h3FYDV18BvfER7AjSLYjYqynP8RbmF119YJmXWixPc2gyRgtUH3VXg",
  "key15": "3QEPmmQVYYC7BfTLDnsF8xpH81Zk7p27S2GcDVV5ymj6jb7WcAsivwfDjU45Xb2c5ZANwvueYRgzwz362QerCqNT",
  "key16": "3SkDVEC4GRUKFBbB2pK92CDpuFgBtBkzRQ1KEQCLS2XYCPUFhyM9re6av2P95cRta39m2QUo6yzUiAGovALXwU9i",
  "key17": "3t2KTeY9Yh7qEosSakWvWGfhcRjvVQNbxu5Dv9NvSbEAJsUf4tGnYR13iDxYqz57rtAXfZj2mHJuL4FPpYsPxgM3",
  "key18": "5r1urWTfNh9Mdp1DDBWBPsdqXKr1eyk2EgabUNBL8psZAeibe8vyt7K4969CTQTz7LPLwYfCCMExpzooXNyAZBQg",
  "key19": "5QXFuvzBkNWBQ3Pd8dmBpLZfAapUdaqrQisQ7kCLzU2rgSbGfC1g42F6eGUWCoCi5QtK8mrMPcP38sQifia1KC4q",
  "key20": "3VUfWCUQG4xxUgxitjfZiFWdDJEf7wamq2DnqXxmDeAqtGPa43hkK5eAxr2ocoun4kG7N5RHHpxAUTt8WAE8DyMD",
  "key21": "2p93J417m3soxuorke18dB5tHUTrd4omnpfaqfwJqJcpp25PknirqAHx2Q3h1EFPvUwMUB3ad9ouvL8CdVaEDviw",
  "key22": "3N9pFcvjqi6smkCnuTWdAojqXz1cQk2uXgmCfmnQff8r8vz328HnWwrQWtSZzvNpLxdPVVeWbk6yHgKDVZ3GEmhr",
  "key23": "3ZjPS6RsfrAtLqHvVgm5poWWTxTLmu96DMD4NwdjtrS8uLms5jUM3sjqz1MoHqJgyyb3HgvkPwYYgSe6ZJZfdkBV",
  "key24": "YBQFbinUw9AFruM7iNHsGdaQDAsjPfRSs1Lub6GoxnoV9Qs5eAJYv4131mQLC9gT3mc8k6Dr9dNx3Hf49oTRrN7",
  "key25": "4dpwYYomFF5yySqcmt8wM8uEbA1uGfjbjaCjdGqoy8PzsYS1vEKKHjaRQJzbJ1C7a8nDNZaRC1oVnUJHB4Q4y3e5",
  "key26": "2oLogGG1dLFW9fJygRyvQxp2J7VaY4TYtqZ1gS2qRWrWkzPWRPr7ph9KS6MBfe1eh7ngMLUEUitzkqJwgvA7c2hk",
  "key27": "41eRJEJC9jDe4VZ2BtzKwkjRArf4tYkGv2vzYps2uBAaNevjf6nv4vKBjWFiDiidRbrAWJFjMu97esx9SfXCEfBD",
  "key28": "4hP6MAuVvcdtonG7j5a4mm6wwwzJRGxZHYobbpuuSuC5ULQRMt9k1B9uyqVUp9ZYm2M1KsUm22sBVxHfo5LKJzVC",
  "key29": "2BACGcjKCfrR7y7KNJgMZFZuBdcjJ8yPe9vzAELKwyu1AVuKfYwh3AXxyb9NfbzgEQFR51zA5HZ3WBaJ4yhNQ6ST",
  "key30": "tAmZ75CiKeTCMFQ48qhJgBAGSbyw6j5baxv55NxK4Qehg6W6D6FB6QNBZ5GoEqkHA1fbnUXcPUNqVa3XuuZUwNo",
  "key31": "2BcNc8Eqkwp6rViJ1jPNTLfRFGSqTBKagL9yR3CZtHzdjcXhhGYHR2Lic4kyxYgdUWTsrNJB9kYo1WSkigvZjSab",
  "key32": "3UwKbNc1pnAnb3gy4QkTdbhkFjXdkKAmfMXF1NTxx9eEJZaxS6ivwqwBRCLbtuzPExZNY1u4F1cTVqtNz7ra4Vxi",
  "key33": "HuN2qm5mDn9Te4mg8zdU46M1e1g1H1Jq67GnQnFWZGsKWFQkjz5hxRP4kyE26LY2wJJr9jTqH9Acu8KrbHnzxs7",
  "key34": "4vgNmN8zvC41R8VvAMcixqxYCjQYKmZasutxqwrmXJi1V1EHiMMk1XrznkEzdmFJRh7e6oBUX5RReAgWdVG8NA4A",
  "key35": "3vj7tm7WR8fNLBC4JHqWrwHBT18NzcsEBoKkAnKxTVudRXNFUKxesVkS48L4bjCnuksLwxDSinXgW5ooDFfY2nRR",
  "key36": "2NWcf2E7RAKmLoMQQ3yxxCNr9YgH61ntGfrrSG55sVXQvrzH2gzpWqqoVCXep9arRGX1FXVAH2eN7JsX18o99YKX",
  "key37": "5xVqyz8c4vs28VUW2Bp4Xjnu8N8747AMvg1NDRESdXBTGFQBPeye23CtBRgR4MQWyHrBUTpM12CN2Zd6JPrRB2bi",
  "key38": "5Y5PVV1NYtZnr5D7dSDK5rrKMxZSqKAqHyYHTnBjZYCfRkjRCTU4AFEUSVBuX6G7inJ5GHrYwNM4MMwtr4LLnjsP",
  "key39": "2xbSRm7QEu2VA8k5cMVP7PXwki1RQPhNidQoVV5ndP4PWbMykjNrE1FUgikYwBXjSzvf5yG97X5W322zc5pnepp6",
  "key40": "25xU65PbiSKyoUFqgRRbwpnBTT5eP3WNTrmoN9ryQANHrC9MFnngSgPNmgvnaFb4sFu8SStzTuCdQSpSvMBCxHG3",
  "key41": "2vmTCF8ZGzsQ4Q229vL3xZBVntfz2F7Sf6tSUS8YsrR2HtcBdk8urDcRHkd8uthH65bXK8reneC4XbGaKukvpQcN",
  "key42": "2NQpLP7AsNDuELKN4AGHF9ZP6XESeYaG1XQiM6fhVfNs3taY4JB52tuHkghV16Az9Tt5WBLhAdSeD7JuDpGqotGk"
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
