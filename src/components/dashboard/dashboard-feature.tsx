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
    "Mx4yj2aHkJJsMLLThacBXEmibg85d4CfMeo29YH746zA4Fb4N2y8RGvpYLVQSBWcgagi59Aeg12QAXmK9v999FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tDhCN3HyakwHN6Lg9PR3wbY4sx9kZ3aQfY4xbBLng2qJjkqoiFBdpVCug3aG6wsqbwvH3gXHhC5VsTLz3JJEuEP",
  "key1": "2i9pFBixnVREpthWHWvbPHaB2EHG1myGxqC5AoLJBhy2wu3iXNDaYiaZvSN16E3giQgZE6H5pDFT5DKpTJKFtMW1",
  "key2": "KLQQqJDfJ2bxiqbiijebm7PTyjfBRocmgCv7pMfMTc3yCWYuvuwy5vhZ8NeNRN6MpaoZRrdBNwmQCm4M1PWnWAp",
  "key3": "5db3BrLhqVNtCx1EqJNfRHSXyFCW4oQBsxRLmv9YCixh6oHkWH7fWar7Tu8Ug4X5Agkq95b1M8JMibZbQp6P6SGs",
  "key4": "2s2uCXg99ZBKyQpf4M78M2AfdLidb3u7zk3b668Mb5XuMt5eBn7c2dNDJ6Rwi5x2sr3AogZVqHTSazaHsF1hLCxs",
  "key5": "4MP8nDPKEK22NnoD1a9EWpQHn7nqvii4HwSTebKX7UjHQK23NkitBJUPPxEmnvHE6N3ttMX7kChZwmf1xvRtyV9o",
  "key6": "4LWDmeB8QmfmiDXxAK75qryonMJUsgUaG1aFsNLfMAeNNqVewkhbZ3o8E9LUwkUkBFc8t2vPG2MoYUXDsszuPiL2",
  "key7": "42TRbYSBPXWJqJZdQS6rcFxuNeVwRPhnqyx2HKx4DUmnrZ59yXKeFqWUYEaFp6DnGQfz527uSEmPYGJf8hne2y4T",
  "key8": "2TiBDvm2kPGxt68ntVmgX4Hs833RekG1rAcWFU81xV3nq5S928PPFL1ozgoRk4puiv86bQYN8R1dxw3bdmQCQmCM",
  "key9": "4ZyxCjgs46RUVh2KFKAs7mzfzDBNciwdQ7RZD5M8HnFjio4HHava4bA9Sx6C33hAckL146SRR3tiBKpvCXMvAHta",
  "key10": "36apwovH8pbFhgKpJ9zA2XzXxWwuQj62TQUe33YbguKj1YPCEJYjzpT3iAmgNhueMHF3NcujtfHS3a53qS2cPtcf",
  "key11": "4hy8zDpfKEkuvgr26Cb9T27BpWLsaMJ6AKC83h5hvhzKhnSv9VR3TjFDCCPiz7cvdcYSGiJU4KKbixWeVvYtAH8Y",
  "key12": "5MQBzFmM5mt8kHKjVztDUCAS39AY5FnJREzhrqoxY68SRQGDLnnUhpDT1yiCd4AmL68NpqsZJYWhxctVJXUfAej5",
  "key13": "4YFrJrhneoii5iLqy1HzVEPR5KCcT7wqCyrni3Kn4BpgHoxzLrubE8MupZC3Cp6DfzY7AbiVc4KtQr5upEZirrLz",
  "key14": "3zFzzGNihRyLeWvUUNMuxUNtt2jsqBdk37GxndTFMXgzwzagJpHVv3JCmnJSdUZcjhws1vqCoM8icQU2ut7g3uHj",
  "key15": "3FkH6Jo6Ly2rkMym21k93sUkDHJBDxksyJ9YXaGBFnnkLoM92L37vwF3akYHryKctzxjXNrjK1LXmPaLyvBJroXE",
  "key16": "3yp1dJxJMQyzQX7P7g6qJm9DZeZ8TBsN6HoeG5GZzMaxJUYNYZGtcruFpg1pLCD1bGGzZ6ymjJNj8VpYid37AeLG",
  "key17": "J68snjzUq271oXgsE8AGD8j3tsrrzCDuaP29PZeAuCAEMWp3LzEyfkFTxahfjzN6mJYmFkqR7oVKHsCRaBwKWwH",
  "key18": "4AuvF6sJETfFQcS17bv7iqwHGG258kBdycwENZPBDyadjwq1TiJ3AwtesjJuzxyPxcUJ6uk3kCTMo1gFahbUjBTS",
  "key19": "4isx3tU6Mgnp8w3cuFaaaFcoLD1M4y4PrCHyeDx3jwQFkzJARtYQzjPLQsZQMvj9roPsh7SreZnyazQqwSB3GWTg",
  "key20": "2ZUvg3VepWFzRa7jJ24eyN9auPCYK1Dcr4VY2SK1wi7rYpksfipwtkLU9rUujuZhF6NEbcEQRaQL2SUVKcmyTyyY",
  "key21": "PBT1LYcZHmHxB8WDTyq6efGSFep6fJYZNRemCSbBhdFG6NdF5NwaaUXz5GFc4uJ5d8DJR2ZhyyAuxoP4gyMP7La",
  "key22": "2kmsSERsn2739QJLjAcaKrQVTinp5sLxvYad9zn2ZnUkKsNqMcJS35V3LrcuZ27wVjYEBzPMXjzMv2qutNHwugq",
  "key23": "4NvLHSxj1DzGQPaQ7VVVK8Lyu3YeXtGHG4japF6KfsYWv8GSD8vGuNn22gxgBZXcJWAZs8vDKx2v8APKVshH9L2c",
  "key24": "vBTuzLTh5CNSaPxZi6zYWdUeh5j7Zxjpg17ZTpbkqnEoSFwvif5XRiwZRomVb4u5go8tRwWHYFdcLygEhSAWDWE",
  "key25": "2WBKDj7Run8bpDmH4shSKbu2PRVnp9Mitq6fthShxJjSqMmbKzE7aKknf7uZz7ugvB9wnAnHQkyx23ZFe67XcCfa",
  "key26": "eMiuQLeBTNiCxmnX6tsPCLPtJwbtGyrKwBRs9Ha3PGKQdY5j3WXhKRtfQgh3ehAwqKhrGikABZQPCw5Zr6tKEfZ",
  "key27": "2WLf1cY1WVfc8QeaUFcgj8R1yVkQTEzEBNPr2KQJn1M3dLoULnLn9o29H8V3o3pghU2DwuYjYDJKPwX3HjnTzSxa",
  "key28": "4GG7dqV5bgPe1Cmcrhh9Aw9Mnga8zL29cD5YzjBBtmnMd1s8MwAiQGguNRbHNoenfg6BWymTVc5fp1yhudmsBS3m",
  "key29": "5Hx355GkDxJ9s9J8UKoCJ1HeSSGHd84yhg5P3Tt263K4aMtnV4xz73Z66L22J41dP3ReoPbmsv2vFgrs3nNsLVTP",
  "key30": "4ts1cVbtYP4baP5H5R6Ms83mvyh1YvVqEHH5q9b2EnMQSzMXBQNkoFGvRobHyBqBvBPwoMs3oSfFcbFnd2NnmqxB",
  "key31": "2oEH8SzL5sffHZCyLNwBD2agtjfgNSm5tsMfa3YxLXbacT2JyoYeD2jaLWgvSoQz1bayo5MtVSFxy2jNvidra3co",
  "key32": "4Zvq1mnBpCSRtxwTajEwhRpt7jz4vfWhziEnVQ38fMtWQp3QwkDiYBmf2EwdRPjmZjzPFeZEhPHEd5yy9KqWjci3",
  "key33": "2AQ7m7U1te85kC6Wnb7SpxP8pPD7xdZgafxXZwY4ubEqNsREEgNR8pH6d8Fsaw3nkefbehCnBf64qrjTQBipEpUp",
  "key34": "3xyVvgSfuF3t2RNyLF4AZ44zv1AABQJ74t272GYF9wUGumMURaukCtPsMSF4Ndx54QmLm8qVpagbJCBknxWdmdh6",
  "key35": "4VA2LvvTUvQdCg9gfJWiYLK6gnniH2L3WBaisWiNbqJyM4rpiqAXoqxNyKDZsrWEbRgxgQFZHfJ31E11RgK7YbE5",
  "key36": "48EsHgArSMHwUXV2fu1D1EXf15BuuHouPqxqXPxPQVThRCsJoepCozKYu2jsLyYGeEMko3gjy4wNgjuMZFqoWczz",
  "key37": "67SG6BfRFK3XytGisv8rgXoe6B5SYjUFw25YsarnhyAtSnJoG15cckBnZYKqwMu32AUYJHE9JcH8s2PqBvfppnCU",
  "key38": "3ota9u5ztc9Afnhwog92ghU5k5fVFizuSKdcx2ni64EFyn57NcNf1UvoQcUy499dKUFKLxfKux3JTYtFB4fiUMty",
  "key39": "md6S3jkP2rB73J52dPEDpmhmNyyGPexPkbUHZTiw8SsgYVj897fykhnK15HEi4hVc7C5f4XdtGuLwaMWgG8rhKt",
  "key40": "PrW5dYuScgksSZUdERurbdkgnX3vTN4kx9mextsZjT17reTVubLT7eHo1E4x7w6SNySHotQdsxHbqReuXHHEs2e",
  "key41": "2B3U9PLzGecKAHdunJSqS8aonLCUveCWoHbwoYCGGo32y9Gk4aPvuyYGX1XYy41edHPY6dCoh96bqDYeCVrjQK2t",
  "key42": "4SPLzZWCFaSML5cdLWpe29K9LxAajzg2Mip7P7Yv9nc3Vx7BjVceSUgNzwZsfr5eJmawDqZSSLAibfyC99qT9u94",
  "key43": "2Y6iVkGSK6DQnHtiFHrfmGH5dxsEs42qELhiAUkYTn4p684AJwRtKm4FYUxo6uNi4NxKeBSVZt8DtL5qus6XiCEh",
  "key44": "66BxueS6R9gQ2CEEDxc1UVUrAie1dtRE9BTTRnkNtiEe1y7r9G8JccD2BgT35iyfA1qnLMwaG7P341eBk2mYpLSv",
  "key45": "29G8sp2cVu6a1AjmfUu6JZGyTcJXz9hR5c5wZgYjccae1JAdycLqUs58QJ11AgTkZCv3qCJbx6dH3WFC5vcfG6CA"
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
