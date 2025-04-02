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
    "qfkVdjL2wZXeAwYL2Mz3kFkRchqjyBzPBZnuJg2hsGTAcYp62BKHgV6dUFoXdLwZNWRZRyswqEtiNRHpZ2ZHUxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313azZBQM5Unqna6rH8shLVpmKQujExYDYnNyhfs12Jq8Qy92MYjBsu8NXtUV6X7QzfDcKZw4MjATVmrhVJu4NpT",
  "key1": "3dFk8Hh33MDL9gx2ntkHBgqj73csWs5Xizk8aGrtxHVsVn3C4xFE5YakfvLKUbHkACCRzfiQyVWTHDiZkiNcbbzH",
  "key2": "3Nsu9r7CMiUApw2FEtnJXrnVspXfk4CWvojb5DT1dN9TkLSkrYZcHDa6yndVNiem2yBaM1RZ3PACENgdPcUq61wE",
  "key3": "2LixcBH64esfpHCGfAPXnL7dekmJEagW2AiuZ3tcGbrSzkbFt2MeX3v17uohs3pXomS8qUCSipqgRMXwbQkHniZo",
  "key4": "3EvpreA5BdYZQG77bddhaxDySdme3CFHMBmjd2jwr7L329pFyf93NR9KJKvXtzViSSTHMbhBgtjchXZkyiswhZ2h",
  "key5": "xXR1nt5qXfu9gRLxCJxYtxV2ynpy7pEeWYdVyS4WAsBp2D29BGHLnP58zjF3iXJk6zuB4eu38izjjBmYzgSkhxZ",
  "key6": "2dFz4jtgYizEQ828BLzWKsDLcK4Cwoy4SfUn1PMPb89DyyqDQbxgM3UiWHYfbuui764gstKFp6fca47gMgEy36yg",
  "key7": "2FkDRXunfnNrd5SqgWC1BBa6X4jAwXbtth3EfxoQqKvxRfGHGm4WaTjpkbgNqVfyYUzL7qBoQJb2QemcvArQS3vN",
  "key8": "ErU6xNpAfSRc1H3Xf4YqJZZHmuai15RFQdrZVVpi7LXB1fzbJSEf9rHPzhwyUcqLM9EY1Qu1mdVd6bP8XtoXcaB",
  "key9": "egJ4Hofqu3FZciAXjbXUc6rhU3T2eibaFAcbGSPKsbftsva8MxQNoymwuENrCoU5ApiTu3M1Z44mrH9BcxvRt9x",
  "key10": "4smebiDJV3haRs2RBqfqdUDbTxg4x54WCtfwFzRgZjPVf4EQ66ky8TifDguQwrSFeSvS4CuYgC2jyFnPVyKM1mSc",
  "key11": "f5bY9bz9ZLCiLtnkDxZtn1pAZWuMrMGiCKjadjx8J1aHWeEmsCpEdjy6do65WYPmiEiManc65vpMX3JCdbNyQ5E",
  "key12": "52vpfc9FAZMfubhzXvqyMKqnhtGXMBzwpAx6iRsRpmjNvnycFzpZVHjsm9RvE1X8rVviitTubwkNPXevqhDKq7Vk",
  "key13": "i6TfmtJBgF3fsJLz1fhrR2fWv39iBfurZPgcgVMT3A649s3Lq9audtuBB53EZVCcCbH8aXLKucoBC4WAyoMFQEf",
  "key14": "fPK2yArbPt9ubo2UX2BhgARUAx6YqFdKGx939droEH2vyySSmvfg86hhrc2ZZLXT8Kh2YSaiBB7cBSWgLMYSHaP",
  "key15": "2wMB2jF5F3dMnJr9sD4pzgJiwkh3jNorEHbeCkZfvjDnTWPfTJW9Y5NVnsNpcL1FA5rUzm3m6PGHnvWcyiSMhUjR",
  "key16": "4sQK9bxk8rqgtvrfSmBxkGm8UD5ZXXcbMEjgPVohaBjR7bLsA6idYKsSv2DB5n2xcL633TbKThdGJrYW6FpC2UxW",
  "key17": "64Ez3ChoNJxSFDyueYdDR5yR8Nyhw4fpFQyXGrKcsJUJyZtiVvcdTveq7rCuo1VBg8zp6Mz9aNGDvw9FqysFE7BE",
  "key18": "4VZGWVeu4f7vMMPnDNVbTtairMMSBEAxYFVdATfYPTHhgh2WtrKMcDkWv6UmcHy5YBeNYmWQAzWR5CQZKXEhccAi",
  "key19": "3e4mtsD1tjnRs143CASiDE7DHtktKcQj9VXn49ZFSYmLRQbcLGxL7riaE5GE9PC7keayb2VyUnyQzaNphqfc7NW6",
  "key20": "thXQyyQu94u63VQMnxhUapNmVTEM2a9PBhHEeCWCf4f6ETaLv2c6yudAnTUUvXD8JdiGajxkUXqeKFufACEme1G",
  "key21": "SiE5JKsB9QZnuizbBjsdAjVoqocEF4aTVv41dKcQfpDc1cCMfRSJfoUXu7i9xNXZm541hi7EfDKYHeVSehnYckt",
  "key22": "5L2ycwaSGYq4Djmk8nzy5knaditVTjgPjG89L3DHzbr4FeMKuEhL17RQYGUG2j7TN1vVBNMRxVwP823k6yV666Qj",
  "key23": "22UE2TYcsfJaYF14U4C6LXSGWK5DtBfcv5QPPrHjopZAG5poFpPD7v9VHxGyvzVYvqzxnREJFziKF7988hLgnGmH",
  "key24": "4NnoiU1ybyo355YdKLr5s5ybU5ATvMaxiAfq9kFsEpjabP2Ev2drJnbzycHjpgkTrQWvRwUMcbeMVpBcpa4eJgaU",
  "key25": "31ojET4N2Z3xcQUWqDRAA7Y3qeVeU8Fr9KmfoL25ZRRahav7nWGr4SAegzcW5nqeXBu5NfzkQnNdUYVfhfjfiFPZ",
  "key26": "4jhEUYSU2gu33rBp1FD3nYENARmWVQthBWuQHvbXTbbwAVb3fsChpRbxwPM8Z8Y2tjR7bgyQGZtptMAH2VVcPAux",
  "key27": "5ttQF4beJHkGYgkgAqce7K8WST2XqPRicFoQTgwXfncZwPz7HDGSknYcYtPHrXJcY8w4biQ15fB3hWWXkcwEAbaz",
  "key28": "ZobxfYP2NUSVv8Tdha8HB1CP41RGQ1tuSBBnkmXbRR8LF3x63VmzcaqL87ztAbnLpXroAe59NuKesqpm9vZLADu",
  "key29": "45PQ9jq2eiXCRWJ3eDvHqsW7mpqyrKYwr16y3bdcme6iq4WKQzrZW3h5qZTHtNKutsiXR77DXd4hhTFwEDJRwfi3",
  "key30": "2xHkzBypKCiMvaUNrsLXfb7umQtvJk5C1iGWepTp7JWiBunTJsm9Ppt6prTorTMJnVxbWeHvJUs7QPrvQ5cjMtKz",
  "key31": "1LyGe5JBRF2Lf8Qg9muP1pbwykbMzZB17M7zVBWrkKsScytfLDjNy6dMVr6sjFhAxH4tvRa9WBa7t65JNWvChPE",
  "key32": "L96xdMZ4GgmFGAaAHXLfm4XHxVKXPhDa86rqCJhx4h8Rhqc8vuty1vtEtCs5t64k2rJ1Ddj9nMpsS5gEXujxfHu",
  "key33": "NewUByzcZkApuCY26t3YL1ZFokhm8cPaAaSX2Zyu4wwt4i75rcUj41KLyTZj5ZHRg6wo1SGq5Qc5yhwFShXPiCd",
  "key34": "2NE3LEbnE1b1cadLm66e8zmzSPRDF84L62U6nuV2J4aLrwBi3rHYj9H5MQsQWFSAdp3toMSvuBFgLPaC4k1PsSKQ",
  "key35": "3KuavbAti6nPKrLBJA5sifY2ZYeiZESLcz1ajptj8JQnhEx9nCGq9fSnGSzPJdHaX3yXn6kcMVkdf9xkNERqCN2q",
  "key36": "5xDFvZJm4Bx9xdE1HfyQNUopKyqbnGDinkRRQUfof1ANF7nrGQ1fB8KpagiiKe7YngGZMtjTt16YFmirwHzgw1oL",
  "key37": "23B42nE9zSE6bV5eJqK9BEMrT9r7kQTpar5emx77shTSwRKexM2MgekkAUMTHzseRFQzmxMBiNCM86hxHRceFAEz",
  "key38": "21cPHeddhst5LqFdpwPfvUjgkXdVDEU5WoCdBYgoce9dPn3hZj3iW2Y2HcbkCrfcLQbtwVJjMix1WPLYSrcPQFET",
  "key39": "668V6JQ1cH7yFJ3Q4DPQQumRdMNNQNfC4VxdUw1y6s8LkKaT1oSZR8eU3C4bRQcpBEryw5QTWZWCdwtKq9z3JLm8",
  "key40": "4NDapFUJE2posj1qBvFbNgB65JYABFxYZvJWz2fuz3DPEkeUpQD275CjthwvMze3U95ZZamNM71EUz8QQJepN8RW",
  "key41": "4TS3suT7tcosFZKuNL6iNwKB7Torj2bw2dMB3KiBFYkPdbSxvRiL4U841ddL2QU2ETS2ikktbssTFBN2qBDdDn8B",
  "key42": "48rRmMdvUi8sUThxXjPLA4cRKdatA38kVcUK6BFo8LC6zqaRPhCygSuKCJmcwf7UNvW34H28mi9fzdF4hDhu14xN",
  "key43": "4UWL6r43gEw3VT8LSg5j9e2LpA4oG37uC1p1EAS1TjJbxpFB5nBrFtxC8efFY4X8WK7R8HnVmxkSSoGoEmsVtE92"
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
