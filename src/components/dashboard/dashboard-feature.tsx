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
    "4VcNkQLTGPGmLN3ePmc5AobF697UpMbFjKMwauR5VwtJQPWQn3imEMmSVdgQaTmSbqWtDRV4Zh99NHLkkKxvDP8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cVuFXb79wUvGr7odngiSKLDjKbnhAzuhrSxSCGZL7caCRzvVQ1L4dHyeSNcwMhRPntNUQEQdC9PkW7RCVZjagTD",
  "key1": "3Ry1FBApSaCz3CF5bitEZTG6BCgGve13gUTBEpEZTs66NZkwWZRX9MQrjWQmZkVyhQJP7rhh1zMc48hg97UTvHwm",
  "key2": "vwQPzrebHc1MiyU9ZNEY6irQnGMxJi8a6o5LR1JjPMi2zZ3jXa89MAwSRVFFEtsP58QJkjEWR2nSJ5io9J8vJaF",
  "key3": "NbFs93PUQhSfiVAKjuu9NpTh6Vr11cX8HQjgxVwijee9Gyphox6bv4NSVSdoWV8yhAxxsxrkCbVGL2eiDrpEKLm",
  "key4": "3u4oWL29SG5r2DJErodjGjbJeimj26nPGkKJwxmgKc7LmN7penqajsQUjQGwEi2GB3yk2E8miarkk7UMPpXCPw9P",
  "key5": "4Xi4hsGjNzoYM5ZpUMF1WbnCenibbWiRzsfkNJ4Xh7TCdfK4SVmLZjHqvb4oqChxpirgXiVS6DURRMD85WTjpCiu",
  "key6": "5QXdRDx6dTxr9NTgUJXmcw688CikiB7N3T2hfWJ6bSnJ4MEDDg87NjYhXerfQ4reJF5gGmWhniBRiovjZsqvjdc4",
  "key7": "5Veqyny3vZKXyf1TthB5tzEvSXwRv66x5Byh1LUut19z8zcux6ExsU9eTaTYXcARv2jx73wX8v3VMnhGCkMfqyn",
  "key8": "3K9eoz6aCnNcGNVKqKCk95YSpuJvsNGFLyds8PnhFYM2nkmC55aS2n9q1drSN5dxNjMMBPLrkec3DftNSzALRK9U",
  "key9": "4jYWxFoniZnwRfrPCks8B1oKNX9AENRiyfHEuBQ38i9nG67VkJ7a7jee1SFS5VBJ2RU8pQsHXEtPar2RZS7Swdw2",
  "key10": "44x7ShSKKQCLbLJPJcY6fLEwPPtaBFW2MJs8jqZJspiWqCfDowR1xVdWesYjssBYnjjB2EwyxKKj5D4sauGuREp4",
  "key11": "2uznBSkFtUk5bb2bz7b16DR6ZXZ4qS8s2bWfGDHYLCiYeURX5EKmj5WGY8XxVaLLdZi352fkib2UVqqELspcvpdH",
  "key12": "5dXFiKU9S8Fhc9ZwcChZavZoDJQNKDT4dmiorVQGYfZo99ty7ssYXg4yoAVGt1znWxWe6uH7LcGQhAHTmkpp5tH5",
  "key13": "2xeDGa9sBRPRgqWLkrC2ZdUYRQGDjq6FwZAdZfmxx9oJ7Gn9YMTmKhafamyG1DbwGAZdbeP5G7qEkb6UfFHMPg8a",
  "key14": "4w59uteEmoC1TGPpj1WyJqnadbDp8c5YGF9zvCXzyW4ajD5ybaG23wuCGSebD2xZtmTiTVuSF1dYJBsy7bqWUtFX",
  "key15": "UDRTZyWEQZiyiUv3KrFjk72RxYnxaAUWQwP7Gv5AukPHYzGGGeTTtQvxX62U3oHbf1Bc9H5mpxZsgGatkSsCrvA",
  "key16": "5w1W5LpojdRQs8QkdXRCHbFgmvfJnc2CsXGJPUEQbHyCVLjGbKHVwobLHNK8ssaqwEpzJf51nSeAnNbpXiYP4naB",
  "key17": "2nhi1jqTwFufcqds2vihZcHVh3SdcuGuArWqxYpqSkkDbS7qwbNY2PHmDD9iM2j3eEfW5AsPgLRHmsFoHGikNuM4",
  "key18": "5Tx1AViobBMp6eFG44HQzTC8xPsY7qam23tiiH85CWvNR9KsMShxp1wvrmg4ZMGxa9DTo1zJneqsmaR53uvHBNPr",
  "key19": "3QifAGE8P4QkyndeT9agM3SzYrUFAMNQPSxvfuKhHJngcYF1X1jae9NMfnDH3sqs5UZUBdPzSHKQ6nKsJJA8j3XK",
  "key20": "3WsWqsZ55npB88p2AaBjfSrK6Ek9VJ2xzv9181duZY9dRaV7T7UsiGss75By1fMdJnozWySx4Mx4cnXXBPEJTTHP",
  "key21": "2HHSFE5gvWsdd5ZxLYTYApV3h5zV1n3RC1RfynTBp2RGXN5VF8BiMqBr2ujBxdXeJvQo4BSZ5WVR1Pvq5qfWr5ZZ",
  "key22": "2EGJmHez2qQvoULVMhoYvWcUXpTXa1oiUgvENST2vtjmGz1kCu53dHYa3g7zxTZtjjCsfr4tkJPY42ajeQP2BQFb",
  "key23": "3TuirLkgeyDrHNCmx7aRCDT3UATmh8Xqj1gq35EM2Kk2oRggEEZLfa7qWeNPeXRVALTBXH9s3zGRDZBwQAg3cih5",
  "key24": "5aMXPNWPB5PjHz5GtNyBjT48VC27isXLwUxWQNDbefeNeWCyQVPQK2mpe1yQa4Hh49Vm1E1BpWavw2nsayap2YUJ",
  "key25": "5KopvTGyhGeA1pCszzk89MtbHYBzC3vBi9yo1dVS2qVYw9bgL293PZj6VbJrmxqEeKRAbDvYimkiKboKDgBxfzo9",
  "key26": "3RSidzcrBoeNrQqxUhvR8MW8pVtyfAyeTSSHRXJwcJXuabSoMRJurVDbDoMSpCw6dgr9yeMkawpE8LCDFfEkZXTn",
  "key27": "2n2dEAiwgq4s72yeQ1wQWpAYtQnCxefnkZwfhbe3nM8isuVG3LMnqCTKbGU4Qf5uDX5zjyKm22G43BmGMjbHDeb8",
  "key28": "2woiPeZvEx9NyTYe8UCZdu7gxguTNKty5t7ASbsr9hNtKyRqc5e7VaVucu56HzkUyuHonLxuwRBprzcB64sgHxGU",
  "key29": "3kvVi3u5cxM6bChyVvaX4KQtb6Huy3aHYZNfG4HMaBGKzFx88Udjh6NUQraAchboKCnD7KjkaLrme219G3LQusnz",
  "key30": "5saq4DEyXqj8NEfXR2SRb4cupzjM19aaTDCbKzVVBS1sDKjiqHd81Cb5fNhMqHYF7iqak2SLV3Za6Kx1nBUSpL36",
  "key31": "2KvrXB14EUMwDYMog5dABBA1vu6YiGFU5m3hKAy8xcW6TPUtVWX6NtysZfB4zTEp3ykLN9omBhNM9r1CFUwqKCTw",
  "key32": "2wq1PXb7QAdbLCfc7syTXLDBe7P477ofve98MmvuzRfUJubUue6wLGgJbZ1J5ZFemVzjHBtisVnWKFQZvieCPFc2",
  "key33": "4UNuQcppfgk6Kqvqic8m4yMFhPAeNipk9JW6r2Hq7QQxqGnCZBk59Zn5oR8Nhas23DLCvFmEJ6mfRobkd2xaP24D",
  "key34": "58XEcfa7r4kWXXGpfcyATMwPBSaMnrW4hoc26njb8tfN4EQ1oXHCu1RxaZCCteKSk7UoVr6iZKeQ18h1pYD7Ko4A",
  "key35": "45CVHFbwnqnkBrayDHb2prW3nNivQLRxBMHFY1qoExo3nFX6p6gRZ2QL43wBSggQ5DDJeaMBRMAGT4fPqT1uqnHV",
  "key36": "2owVaAs1ahrDbiCLWHX7zMYFjkMdPTMvNMzGnmwqZGVLmMebVUeQPTrgr6ii9NFEC1ZcWjCj78KNtNPcJrVAHHfx",
  "key37": "3gVAMJaNLme8VSmeBRkzknHqUqHbrQu659FYQkS84wj8fotq2MZbuzKAWFya6CrhkvTMwVBLLAQTQGHrJ9vDyMTF",
  "key38": "2Qp1ocmE2hQ6xUXSi4DzxUiSFzoUyZJCV4B5cF26bU1zaTpZuFMfCZXqowVHfmSmgwSSXvqNb7bBAwDJmitfJM6N",
  "key39": "3T2KtguocJqaMVYEqU7D582b4xKHDqQg9NgoJTtHbaLVyCQRpkaGNKiqtQre36NJRSg6KBGbLWhNXALf3PGXjWwG",
  "key40": "34x1MkfiuEHKM2gQZvLyXKWgV2HNbDtdBJnhqopm6LrCBGocqPRUsEf3sphUXao6dwmqNnkYGnb2PSyE2f74dras",
  "key41": "2AdrG6ptgFwJNRBbRNCfotcv7wYgkBzNKAsxw6pjndQ94a48wifAfQJnmsKB5QNrwtJbhSR2FiJVTATPghuZ85LB",
  "key42": "3JaGhUZ6QeFwSKBTsjqHMgdjt3yhtPUHeB9xLqixk8uJ1JaEma5C8Qs2TFQufadg77g3eVYp1GVaPkn7y8KrRoV6",
  "key43": "5c1uupGDKoML3PC2WEG2NKfxiRgvVhBT6cEc7U6JucuycpaPq2nh3ERdN1nGcY5jJGCF6XdCUMWdw5pTvCJDksZE",
  "key44": "o56i3kbN2tUQQPLhDnRui4SjaTQsXhkjKp5QiZdrSSVgx6TLH2WF2b6hNMWuUtdGCkFcxDW1f3NGYVW6vkTHuSh",
  "key45": "5ikJ9LzMvBicQoZ7UpLyS5ZMmabUgq85EicX82GBvsgKtifXgf5bV7a27DvFax9CGMKdw1eFmBPGpfNQhmMMPgVr",
  "key46": "31y974RDqF4L1kLvUYvgBoVa3qCLMkG6VRa6ZjiA2hV4TVDbtGjKrJXAiViw6SjuKUNDA2eKBXcYrWYQM2qu8f2D",
  "key47": "65xD7n9XL3aZy1kUAbrpGTbKtozh8oQ9sZsTKQtEsMLs6CmVvhgvnzgbDYM9qnGM8tpw6jL1c5y2G6sxYHHnuLMj"
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
