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
    "3UBwKkDSc2peQswWhcUSVRoMbSqbyanrKXf2K5yLqMxCH4pD2NTwquggdvYm7v2Nzof4ERkEkzvAMUmjAsMVQ3Qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Q49rhBdSqtQqsGi2SBwik6cPVS51dY1UwjnJQfheGwBowQNTV8qWbtqivv7b7kFKarscKPXEqJADoFjbULHGUL",
  "key1": "4mEUEbCqS6L8GqGiNZrY3ZcfmDyeGzpsG6QdW7BJ3PKPnzj9KGLgrgDtrPfof5p3gTZH1tXzVeW9KwfrRTuNv2Rp",
  "key2": "EdJQYNZiJNf7W4R8PZmG3rbDKjeZeNZYmkE4ZedVva18QC7oQxaTtEdR2vjiorgKtdnskcBGzUdGEaAZWHnNMKU",
  "key3": "4MAXoKVC86y58SmL6H1FYZTxKN33u1Q2KzXAF4aHrdhb9oB4rpuCr8Pb5Rk8GLeDeQwGGWKrjfmXbZ1yEVKSKa9o",
  "key4": "5Y8EbvruZmnyrvUXGS3E7nfPBrz7W5bFcXD2bRddtYU7C1q7xTjKyGSBcg8EcGHkC2id7nerxaYBc66QrstWADqZ",
  "key5": "5gVYStRBjSTeC1svmqK2F7cnyiHbCvHpipymhWmjcoKtwBeZvQx93MyGA2zbubYe6P6Nb7xu2HG1hUpYEQkQ9SF5",
  "key6": "5HxYmjDSPhiicyZZEfdxH2ZkrCFV4TJ4bwX5EUdA1FPivkU9Dzca5n6Bp55DUDqov2L45MbpKzxEYQNoJ8KGQkNi",
  "key7": "nMSd5euWE999rUwP9NGQv8tuzgVkNqVHmxdiqePt7hC44fLKkrvxe5xevboo8Uvg92bEgNpuPvx6bidBEM7Fj8U",
  "key8": "542MZxD1apW4kpmv96yEaGmiV6qACxqGKXwv8PMPqjQLNwDoEazdBrCFLdSGqUrjPAcuWu7S3nYCMPAQf438RQfd",
  "key9": "2hNrDa5AEtp1WLYGN3RBPJfEbSerLAVNVi5bXGjoj6WwT4xwrNYug5X8Dqkz56P18EdnubiooCMjfksLTgWZiKNo",
  "key10": "3PUcHmyQLgCR79CjQsKFyTRMBaXGzRfkJyRE2irk1PsUrLwbJYkgq9j3tqC3qhRYL9xpjfUtXPSB3ECytAXpGMSt",
  "key11": "3h8q1x4TCt4RR8KCx7WveKjqb4uAGTvC8jqruo6mp5u2GH8xpe44aRQhfPyMJnZkrM55Seu5ygQJgkpTf5GJnE36",
  "key12": "4fAQhSaEzqjy9H6Rv6WN9NJWu1qwNYAoKF2CJDCTFTcRBWeJYs2BFKYsCrWyfTZw77RjJrYfGMY4qViByCjwgBQG",
  "key13": "3v333ipce9DgaY8UesDUKg39ooNsDVHibTUD1w69H9rH2kJgxfqa4dDBDPmmLieEZekgX1YATRWbKSWrFfDG7bsg",
  "key14": "nwvQE7qTDvFjM8hM6mAWb5bqqSjdp2LeWw3ttnTfexfN7ccvhuRaD9pfvPnexYgkpiXa4vHnrDVBCaw614G436u",
  "key15": "5kCWqU3s6F7Qfb2KUiHRDMtJx1rvcBTKBCdVDUYU435QH3PdmvmyRzFswqHeFyTbH3SGqTZ6GMQMCgx2pB13LFM1",
  "key16": "5pKX1tdiSytjvpQzPTtqYbJNti6Z8QC16USmC8LYrZWcsdUQiLhpedbPtdLzbRxaEqmfEiKbsiXJYJnvmTJdTRBY",
  "key17": "2dSmr8TaETJmmN8LZjtcQz3oVBaCeRbiLrPqrAzotHRbP32iv5ttnkv6tUppLBzdJ6E5XRinWQp29CyGAGDsgyH2",
  "key18": "mRrB4e3TLTrzjhvsvtEDKETQF7UTeNhTgJjh8KnC5SdX9gV3g1uRbsQ5WNPr2JrbxXPkuuewTsfCMGGj6dod6Bc",
  "key19": "4EAApznoxp3jUnBaRYRFMrm7NTvjGzQiJHM6Hj7B8QmRD21KU5sDF6qSEt6kLAtRu4SzjPr83T6Rg5tqGUZc4vQ7",
  "key20": "HZ9zmnyGbhxMeT1WSQo6M5MM1SLGtr7ETocmErZ9nA1qvNqhzZ2WbStg7xZcwxfrbyHU6jqTtxsDPQzwTPdfZph",
  "key21": "MRDAaaXp8KuQEKrwjJiK8qEqbkju6YmLWz24Sftbh4q2FG7BApkG99pBc17ruma3Y5C2HHWy7gcviSsUvYUNHVD",
  "key22": "27bt5ivUnXoTHvwhiuwyFrCRfquGs5q2HMhSUMFf1GfuEjTNCEVRDTxZN4LZ3skEYoFPe4CKYUoJ6U56fUqsu8ZB",
  "key23": "L9UKS66LxfWdZGk4VLU2bjnWUoTCxF77YBicYVCsuDYmQWpFZuG8usXuXmqFyjT7n6GbJQEkL5qwm45Lc4G8CDr",
  "key24": "dFeLakMrGNyTFQYGb4Tixe3qoPxnJYiFFG4grhQJVTvsLG1HE7cHnt1pDaGkw4TEZpwtjWJDsDd6vHd4HT2xJja",
  "key25": "36mDRWQzK5ax6udbatJVMscEcSo6v57iXK4RCie9KpUfuTooUgSvBt6CMPhdZzUWn8ro73aCNE1MEQo3engeV2NK",
  "key26": "4jSCxcwFe5st68zHhSzatynFyhrQNmkT1VtfxmmqmWEi9gSpDnVxodJWQFoV2QnB68foj1iQNSAXmymapwjkueyj",
  "key27": "nqqXdRUkTCrkoFDsF4wRckDFechHjUbRfFM4nKuexoRnQZEDMVsQAboWjKjhjCSfFjpmmSR3WabGUL4H9jgBNZP",
  "key28": "4PHi7xNAjebCRnNFRH3nXNunXtJh2CyeUEyAvpNxCopnvo34ywSRBULMD8bhtWPvgSFdZBCGF4uumFNcdjDa2zq8",
  "key29": "KNYPnRBu7sGBYURhvBybF2mnW7u2UUJ7LPSX5ShZHMx9Y6pTxWgXjx5RGMeffxYqmVUMr3xNJ2zgtbCTGGodrRB",
  "key30": "4V8A2WT76TsgASYn32pT2z14dSEgeXXJtgZfEpeUTC2NM91eWKYAwohUujXcqEdy577DjMtHL9p18xHoGRrNVLrA",
  "key31": "3EcC59BbVvPAfnZdZ3Lk3minmYxEthm8ht9ikuFJsEkbbz2XxNnowh3WSVnkR8Vto5vPc4DppWpaeane3vwCsctZ",
  "key32": "5KutmHKoqeKkWNnNwmEEwbp1D5FgjKT86DJkGU5ARfhjTSVNCvF8GCD99ySNzuuyqAGfFwc76jvm5EMySuQxNsH2",
  "key33": "2rFvRYTTfs3ph9tTBoJqzTf6r5ChCnGBCQBhysAmYSWgPzx1pApcPoXySznJQcGwd4eZfaubsntHt7m3wQaRUAMU",
  "key34": "4esarR1TuFNYxAk3E71RUMf87tp6CQD3ktVyMz6L7wCDcvFZ6YU6UVPR1dcNw58eBVBrMTqHUEuKELRmQgt39UEV",
  "key35": "5rL95SiHYFypiwDsJTgtve2eqnQg4KCfHZz4CbXNWxNxgSfagcUz1ZwRMP31tzmeJDYn3JXr1XtcNcHr44apEwND",
  "key36": "m38KyWM8ivFPdVZYAAEtJ3dKQhiCp2qx2iDv2GTiekyn1r9G8ucqeWqaTR4to7xhWLonqpmREBKthYZv4qZXj5C",
  "key37": "nig9id8KwjeqijdeLnJ46aCqk7LrSKQdPXdQWJ2MW18EQUwQWh587zJJzKVem1eP2RPF1ERwgGsiSjyzBQqXR5X",
  "key38": "4J4YqbkAjjPCAX6grbHcUWpR7HoEUsbCxyiFAZMnQSzWFSiCYQx6quzZw81P8ScE7o2cVFjHW6C9gfsy9SX4MpGn"
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
