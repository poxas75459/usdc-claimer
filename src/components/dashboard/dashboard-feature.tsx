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
    "3rwrPKsWWfu2qiNFA2W1zJ2VUkiNVHdnfTJVEyuuuKeEScjmeYCkm1VUZv3QMZYw4rp6CewbW8tQMb8KvteJRr9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mA1Eu3JsdMuD1tnUJgF6Y75s2ksJCWyvtu1yh2Mp6XVhvZU7DrCv7HkP5uifExpruDkkcgVhYa8RwGFFQM2Fgcx",
  "key1": "5Wj6QBM5CmSoSihvFxenCrPMX8ftZJs6jgnWc74PEfzeDoW5tSQkRBCcRCZgymYV2pQ6y8WUVXBhc4FkzKRiLqPX",
  "key2": "31nKnJsrhkwssqhKh5M8AX46kinEseFFj8NmiZNKnuzm9AnyxvdtQ5CzVooihboA9s4JofBvBFF9LWMJh9NtyZLM",
  "key3": "PLVz5EpNtiEiyhGHv27xUt1j7cnkmeLBjK3nAqPRZF7xZKRGhYecVYHM2oF7t3JNYS5upvHTfP3coGV6Xg2RdXV",
  "key4": "29rcq6UWbDdRswYEDsDLZnqsEt1ajCrQbY81aMrJEvQtBvVK8zPCG3ETVsCk19YtNCPJ4Nyo6E3hbNsK7JyiT6iV",
  "key5": "5BSMMAU6zrdywzy44zH9PAEBaJD61EV3fLHozMBuf5HSBstnyH2orchjKBaPLN7nLcXQyPwkJ9fxD5PBRSHEu77s",
  "key6": "34bvcH2zGvW1DP9Qa5enVTSNMZyatdnwhCaiCyDpG4c8XXx2PHm1niMpn2C2i1RSSpzjdzB3qpKbX6QdkqUak2Ut",
  "key7": "621m5ywvawuNWfq1UjAXoqVxQitmoGFTGd1Pw98zSpxTxri2AqRXB43GV7oKQNW1v74F6KBL6tBsg84b5pNwnzc",
  "key8": "VqQfmGuD7uUGNc217UMZsQZRsK3H4B88eXL3d3T2JmJ3RdeeLy64bWTMnwqvwKn1Z6oc2FUJMoURMjjkv48QqRP",
  "key9": "4H6omReSKs1VjqXpa6L3kstuNyLsu2WVWydkvCXt9gDpK4hHMt2LgknydjUJdv8JMLUJyi8qAy7iWzQR74dj7dNN",
  "key10": "5PiWrbQzCMnpUyNQTqsLoM1pWfzD7tsQ2mM6XHqTT2KooH9iBDwFAjU1Typr7Ek2LnpfJh5VSz73jrjgfdrJCJwT",
  "key11": "4tYPCG9S2Y38pKV7yTBQnJS1esnT86DgWxuXwxdxKFCxuTNHXaSLoWSrVHfLHPGJJJx3eMLEVzQLsKRDfPawFYUz",
  "key12": "4ojWCvDeZ6e12o7CupXuMGFgTubfJo4kpkmXVzwTWoRKZT6P1PWRXzx35Sjcr666jGw8s8qBcz5ECA1m8EMUC2Vc",
  "key13": "4RGharUUKqiu4GX7RKzEjYqooGkxK8Swxuov8jubXqs2PupVuYbNKf6g3XLSmV8qVRNSFAP6wJs5LB2tJAu4pkv9",
  "key14": "3BTRqAC6AUNvraWDq1bS6SUZnhybcBq7wWTjkft2AUxbg8duYUfGM382EFDNPhZhZUR8jfd311zDkLCcCJFkGwWy",
  "key15": "5E5n9vtNYD9JsS8PmdrcNVQHKxZ9PmBiAdQsAbVnqgys13HBQzgcMSSq2WdCHVp4FK64wZENQb1KyTxQuVHt3HT2",
  "key16": "5RbmzcHVcTJvKZ6QpHZDtAcqEE7ARWKw1axevScjsM18R3LfBfL7s7TWNKiQgVQTELigd9XkoydqpPxmfoV99xF8",
  "key17": "5RqV3Hc6ShmrZ3Cv9NMNVLdCGESgktPXvnKDUTM9iFHYNyJzZijztGb3BU394KUc9XWTRrmbuyUVSosDWLVqjGV",
  "key18": "5Ap8w1CeUbUEaqBxQkPdP1NyRu9eindM7WtJqysUe977XgTZGPtDrXgx4dUChPMkFo8Dju4e3yDjxM7dtsve8uH2",
  "key19": "5Vn7QziPhHu5d9Gij3gzciHq3nMpTM5retRA8JzmoH1B9sDpWMmxXNeF9u7DdG8qPHB3nvQZxcmncXC74yRzDDq8",
  "key20": "2vChoqd4k2MbeMqALv58JgEDQM1zeaTNbX3EH3uDWpE4RHzyzhrJncoVe37peGasg8TeTfUAxzHCH4LLjAmMGJZG",
  "key21": "3ryJ8p3WXQGSHeCGx6PxdxVvfvTtoS1UsHYs4NgRCj1p8bwAdqdT1og1SYeQq46LkB7wnAcyqnnggXFXUzjQAFHK",
  "key22": "YsoncCuyYpe7yQQgFpePSrxbUqLrDzopv9QSrs3AbUinc8ERiDRnAKNm5LzAUnvoTuwX455froGPApaaHRxtD6a",
  "key23": "59g3gt7Z3DrmqyGYMkB4u8vhkgcfRpK9YtXsoKzsmRMHwzQoV1FKcBUbRoFUMqotQsaw2Wyb44m7NwHivwm4uoHQ",
  "key24": "GuH7czXpK3yPx4XkazRXkiYbDSezAiLTBmqBiv1YunM32eUKJWVaKZpEeUZ4attTKeBQVAdCVWi8sPpijhjL6sc",
  "key25": "3nZihTwPdWNorcoz5fsWwvuP8tRxFq45FFupa4THpKZgWrb4JUBfaMesf5zEXUQvm2Kwqm6Cz6B3RiwEp6a4yrho",
  "key26": "SJxidhBJEFkT24WFPRy1N8b8Y6QBDydgfCR2TUJWhZtzhkJyvVCMW6evQ5BQrvMqz51Q4LLVFxUC3E4xzJbqB2r",
  "key27": "3CpxVy19z8Fb5V9QNT8zoEpMhERpJkpjZ74Tu4W7gxnAJ7gk4peikA7i8eRgUncthP1rSpRLPMh6qhDNbNW9J7R1",
  "key28": "4JiQjqgsdLRjTQwTQzqnZZj9pJiagvNPPRjbTucxX5UenHHLXnZThuG5Fu4J1Uh83zvh5v2FianfphoVxUpof1cU",
  "key29": "41r2uzPjkvy2hJAfQhrDgYq3mJtLKAbhGiShaLYR94SY5tr4Ucx6oeUaqoqLYsNZ988P4Jd2vCSEhE5xYdAttsgk",
  "key30": "5AyB1tg9ejFV4gne4N7hHajgDL3qjRz1ZbLR6XfMUbgkEPmtwPhuUhkc1ZN7zYCigH8Y5Yv44wNm9R6zswSxrmfc",
  "key31": "oLaAvKn8WJCHs7qpJnVdN9oGDZDW3AiFRVhJV2JoTGY6dD9hzAcjyrrQth8be4j4ZbZ3ThfXBmEGSuS9A953WwY",
  "key32": "4QQUvEYb377fcEbruzEbVDVKU58UUSjLP4WETNnfmUkkDxxeB4s1EyD89wSeo8PasjzetUW2hqVTspdgctTRMkRE",
  "key33": "mDFZFxrWEV8VHJHrjUqXRZRBmLMFNDTuu73TMPuLM1Xu1pFH2yhrxNXgQYacA4GeN6sVCsmhMZF74yYXoitiZPD",
  "key34": "2mHDkjFcrc9nB7D31R3hRwSi8T3fgMMTv3bXZp9pdgZQNrqdof7Wz9EAdWouAZC7KgvhbTTiNSPxf2ci3GqJYcfq",
  "key35": "5CXmCmWRzCPdNnHCsiNYZspJAwpUGhWkHAG9D3ZPTAgDWdrFiN6qaR4GNEnJxrEstxFXWic5DQmavgDcoArpne4J",
  "key36": "4wQrLeFgrqERJZgoZ4BmsvNPtQ3jmHfZN7ftp1btXHkxmDRhGFNeot46UpQCvS42HUkHYuhDmh4xBrAUrGFrar9P",
  "key37": "4vqYBQPuDVMHggBpVm17uTpKUqUkGYfgdUBo8qbRHhvE6PsyaxgQZepNJwN4wT7hsRJ4XyvnW26HvHZodaJPnhHz",
  "key38": "2soRj36oHDgp2n95ordAonwAJN6SViVrpvYvh1xFtid3ReqF1RDF2h8dkTVhGpBHrgZf9ryYH791Mv9KJxwvW5w7",
  "key39": "4mjRBk2ZBvPcBfinYeE1aoyHfr42yuiWMsbE7n92Le8tLt5ERYWDEUQ18PZxMSGbTcxAyYAAFoRQivKARyn3CJvQ",
  "key40": "45RyXS8vB9BCfZkPwDPsBStRxmpVKkq5L4aEQuLUrs9ygADwVB3U5jzLM6qpoo4nwcXmnzUzg7AYpvo5fVQFDsZ8",
  "key41": "3ziki9e8kCCpCpoUSh86MKm3z71n9ZeW3TvPFS5DwjJrV3rFXcAE2ohBYCDbV7UzoJcz3mHSFyvDPPCmEBHwrBDa",
  "key42": "NfC4sM5ZAnzAD5dKYNq4Hmq4HUVysUFfosEDDb9obeakzusKPk4HSSDxhAQrxXMK3hkHWp4v6pZ3HtF5s7RmK4Q",
  "key43": "36SXYpMeHYaCDAmFfBzEYdEHxAfQdboopwdEqx7R2wvpLKdpDVhZpZ1WUiAysRAp56YX9hAFwM9v6snwfhrqcofP"
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
