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
    "26GHZMY1SRkPWx6typx5VSTJY8izsruHyQiD4AVnjT3wLjdkVW6UoUB95Wx92YBT1zxbtnuwA6CMMRW7rnrdvesf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXMtoqwmrH58tNvN2bJAriXQavarAnojQresuwVbcTWC5zeV6KV28JMa3CToAGzsScLcMiQ8CWjFc6W4x6RUret",
  "key1": "2weJ7RFXYej2vUvmuS4MfbD78rJkr1ZRErL1sJ8gSKBKUkGhRbKfAbeuLhzkFiWcieYir6Yx418zPRE8a1ZLBGuJ",
  "key2": "Dpp7yTbpXDRjVPYoe9ggom8CQWYdkJKg79Q7hKKudS7iVS7KYJY93uPxecAxQK1T8qJj2TmZWieoAoSLVjEQ8fP",
  "key3": "3WrKYpR4MvfG62Ea5ZpfFyjB5rgwMdp8xrdrb38tZytkr6ngJEmjfssjcn2xzBnhyJSH43efLT8stDN4V2FaiAcq",
  "key4": "59WmnCVqhnSLhHrF8BrgyA2DpDeqnCJFeWwxyGS6NG5p9jNaL4uajSt2Mxk6Z4sbwB3qt3xZ9z2bL2acRiPz4R4h",
  "key5": "4tsFdrNThfm8wCy4GgETxhZABEkUA1XFKvyoJTAeSVRJ1UTBS4vmy5G8RryMs4YPFacnX1VgdJgYkpdzPKE22nKf",
  "key6": "2ywGjdKZQ23SLXWpVddmHicdWVJ96AKVyehE94QUaVz6D5UFPU2Z7Bx9pfmHLvFX2q5zqg6nQkNP9wrGRrkAV9gJ",
  "key7": "4YbAo1DHqcs2P1kMv6s38EHZn1AemkzxwKeYSDkfdNcUMMxJ3BW3RiWq7Ha3VPDvx8wkjfwzJkHKQhvJcErPFiZV",
  "key8": "7AEhMsXwMxxcpXpu2oQNPvz76KvacfL8zaMTGxeGWqfZngKnkRs7ExaDt6kdcR4HuQtqT2oojzUkoLv4wFdP9yt",
  "key9": "5mjAPe1dg3mP4DZjLswrCM38YyqTwQHbQxtvQNL8LCKSfxbtUuEN4Ke8dPSsvEtBxHwr7uquaufqddvjgvVBSxkU",
  "key10": "engqYjkT8C1HTNYee4NQLbRCx3WaGNgnPNHqw1b66qsaSrAavRC59Y3JEh2cNsYFXeTxo9tVrmyMNSK9tgqpTYS",
  "key11": "62d17aecZJzueTqBCd3yVqSn2F97YtZmnuWDN5Bymff4AbAg6PTWzmUFSV8tfX4cgMtoAPXDkKB1pUBZtzgAvM8b",
  "key12": "5SnzcesUyovGCpNCp9d6AtGLJerHkdN4EsX5fFXfqoSuAo1BZTHa2di2SerCtvvk8qZa6f3seD7AtbrTTUc895fS",
  "key13": "PboYD9gfTroqdYmXjz95ME9r9vsMbyEsVsHijmtCcxPdPGU5pY7DX95y5f9KdpaQcBH28MubFeBHLBG5Hvtmcou",
  "key14": "4vSMkEU95u8Cs4y6pXgW28FmVV62Q6eKtK3gPYBBMwYL72QWS8ZepKWuuBtXTLcYJcFcR9hDY5H17FNE25sQVf7x",
  "key15": "4j495Lk97HWB43D5meL7RyqTDiXih68KbjgXHocxPbHrcQjxwc84THNAKPGsJn7Z2EfShmsvqh5CbJ6mgLX1YRGd",
  "key16": "38sTFQ6p3qoWBRrzvjKiS3bR8FyFjTkiGSNSEUTVKA92qpJFPe9b6G9qZZVrKSGukhaLzVQv5MZuqMugwAsRisLc",
  "key17": "eaGFaWZNYgBwAMu222Ye5u8Y5obNoCrByWKKPtjntut46VjC6FjavBKMfcWimmorEDqZnoFHT742u22otr9WRPA",
  "key18": "4NDyDoH3D7srsbSd4bvSDpa2MazEi2rmiqxiHsneuwQ4hNN2oatoKShemeyeGCqNqRZLMd5yENuyEve2YRz4hvzq",
  "key19": "dwxFkhoS2yzTY7r4g8VgB1skDg6SKLPLA3bFAffJV1EDw75mq3xrzZXzh4tWD8jpc2GqTiFd3J2NKuWAAz7aoHh",
  "key20": "4e5Z3piyYN9MXAmN6cD94bLCmwhGmEY27xhLyxBmqWuZnNPY7XEHmvVHD15PAMk4BZn2PAYqYvB7kYzyBPfoAZuo",
  "key21": "3ESKjz7vuYSNKfnqYQYrTQ62h3uNjiVNkBqG3qAiCZwf87H5uZ89e8j8KxfYzhRZ2QpjqojAxvimSX9VRWfTPRkm",
  "key22": "3JCr8y3sZLcdzjUKNQVehq6WM5qiCsmHKnhRGWskz91GHgA4dPW7cm9ZwGkRsevfvUE3vJQSXoZ8g2qRGDH92AN2",
  "key23": "4C31wDGYy8rZ2beZc5VGnMod9VuNUNWParj46dH77fomtCszwpxTvWoFGAvNTLVVYgZShU6Pvr1K8meNt1DU3PzL",
  "key24": "3oGBxfcwgmgr16yGw3d5RDQJuBaMqppSgnijQmNCU3Qhvodyue9imFSFxXqsfxWtUSkHewQLF1qrLy3R1tYRxi1G",
  "key25": "2LAvyFanorJWtrBnFN8r6w9UvaZ9HCWQEqVXkh4kikekkYucJcA6m3kvwSUk8WFBygFGJi3QZQwXzJx5Knn4ubir",
  "key26": "26KoZkaUvzPvpPoLeUwuFFDEzaNiUTyvSH2biGV5am6k8utqVLqPbVRaUs3shod6hbKtVJLqNDGh3W6CgM4pZHt3",
  "key27": "2KhsEf8wymmLv6ugkiEUaXt9wGLzJkgxtNZMgRRgsULDaV2HsPc52TZWsUTp23Xv2P8P5QaV42YYwR3U4RtJEE8H",
  "key28": "3YyYGBnAreqA5KPTVnXQ5wwuFNuFK9gF2HcWMFmf7kMX3ZP6Pa1QXXrGvGnnywsmG7RFsEMFGCFTkVop4gGfdUYo",
  "key29": "3ucwxEFtsPFTTKxb1DZz1m7Vf3GujKjBXaszRe4oWHGdvqr4cJtHMiVmAUqDGHBtpZF2vz47gMrDz4WbsnqLqu32",
  "key30": "5nofWF7Aa3JPJryEktGDBhoqiSaWmZW8Rd5GKMvAqD9cjWu1fSFKLsGumb4RAAXAh6vtYfFxfErKvxosYR9n7YXi",
  "key31": "3K5uedh4j4LXpVyE8ZUxUyBTti67XP3YvEbzZWcvPnxwzyMWEAVtw5qu6VEKWynXEZv21sgqvooEvhwqAS82EKt",
  "key32": "8Lw3AzSmEKgjsyNwyRabW41apbdP6QN9RyE32ik5WNxVUtsYybeyaDEKBHKjaWLQZgg24kj8iaoq6EuZ2NdYeyt",
  "key33": "t95gFTXpRQMVfgNzVgvzy78VEY7hAZM5Vzeh2QwftBg8nGnPZ2JgSzUA7QHywkS1wfp77k9rzBsUZvdVy7pJtMn",
  "key34": "zzEQdD11nRxuA158dVfEC2V1WqDeiyaUYuBSUtPiKp19y3zH5CV4MQH5ZBzwY3TaBep8m89Q4oBGz4BTGsESLUY",
  "key35": "67DnMZfGPJ8qZ1xWxzC7WtcAkAJW2TVFQC6HwyzUfUG1TejMU4wYk7tZB2YTiEKruvkcMFwTDx4sxHSiwjfMhUdR",
  "key36": "PvAxbYYZ2BLkyE7VfQx1ppNWYwHuZQHVGsEbadPZJAjjRRcXN6X6PEd8GmYmkqoTPNwxUa8UPUxnfnDcDt28Zsc",
  "key37": "3oyKaPh5UJmEhfQaX77KK9MhfVpEaPD9nBD6B2Fgmb8j6t3sNwtdQKotXHzDdSPxgAc7Pm579BfCMHGZwL99g4tA",
  "key38": "24kDP2eAsLMcMsGX6rgP35buTYE2GQFUE2NQ1Ld2prci8QVikkuWqMiNje41Yu8JNhuNYvVK6zofweNFKocqm5tu",
  "key39": "3x2fC3yqQjAr2QZVRiNBo6a6sV6YzJ8wbSE9KGTXEtF7ULNyXu4e28PTdDdgt3p4yuEtsVf2NBrnGZFFtzVoRZe6",
  "key40": "45HD3NfBWEhvcwfuQqnveCA5JgeLGAmmXgTgyVFQyuJN1P3p6FgpdGMhhFKbLNrByoC2fCaYAST5q8pwREbQ6yj",
  "key41": "3DStLkAMh95zAzmSnYEB5gxqJrk4VnPp7oTCSWdHEP38y5HfcRHej7fTMgr4wpCdnF8n5WpdjkMvRs3UZ8onkh2x"
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
