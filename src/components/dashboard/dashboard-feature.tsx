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
    "3oZpY3hkrnF4KBay2zde459JXvqXJ5RerycWAjymaVRnGX75W5AXu4m2DiNxE24Uw6S6vouPLys8dJWjiX9pyNDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7zrKaUZEpV97jMjC8yjKChWG8GDrroS6BQkBCHHBUqnMnKJqBvhpDmbHL6XYaZbuBVPSfWp5qrfMaDp8gf9KAn",
  "key1": "LA72j7GwWsU1aza5bJDjURNkAmC4TBbML2e97S93M173r3bEkuBH5ERsbbuGvtsBtL2MJFLtDS8vahzfrDb9Bmq",
  "key2": "45HQodxaW2EirqPufD1VBKVh4irr84qhYuVAGCmszBZFt4JaVaHde1k6XeYphTdDxJf7m7L8aBd3LkmVej3T9NMc",
  "key3": "4NzgNr6YiQUhyc8Njp6SwKzso4pL46ReGJS57LPiuush5yMa7qyzw521MqeNaTk84coHbUdwJEuHvNEQHDoYMr6W",
  "key4": "43JQ28hG31Vj712fTDLKi8eQWRBbUjRU7jykHrHeXHrUd5KtYMyafdkp9Gu5uNeteagKVjaoh7iQdKd7CsqfZxc6",
  "key5": "3jxfxY6xKCJpKCqAMsEfLt48aT8DaUziyDb4XKpokTgLeopUYP9B1LiW5M8NpBRSdmQNmsMrbQXjjUUNECto9PnB",
  "key6": "2oaXqVnfeD73TRBugc6Ep9yb1E5vUgzQ5PxA5n7kWZVVD55XoMsNTeHzy79RHQGqqTCMXnRcvRc17cDccEZNGbEM",
  "key7": "2eMYiwDmxxm2WVUrBpKNEHTXSnmN8AcRLHuzjJSTYFYLh1UdBcr4Yo158ZYuPR46hu1CFqwH2bNJU9e7qUGUAPHz",
  "key8": "owmH6ivfurEbLFSzwgnLZUkVy7yPr96dyyLHTeoMQZSL2cyijirnD7PoNQNge6YwLcxd9R8Va6zA4pfhDXREtja",
  "key9": "3AiuAtuT3QMuV8v2TMe7iuSfy9SXw7DF9HK678EbuyQff1CG8Sz2kjDJWgo6YiP8FKokbpD5QEGf94kkDYdzPEF",
  "key10": "5B6XdkbmFZ2KqyuVpQJAEMxcQchhXNp1nVguKg1tcrSvDviBF51PG2cbGbpnAgTK8AVazayo14Vk2KsGXgRckN4y",
  "key11": "4MWwQqvcfuEC7GJKqGiPtw8KNHVZmBgX2swyTsP8TkmXVhzDM5dbUkKXTtXBHziW9WeDnFsxVQLW5dngnTfXrfZw",
  "key12": "3fYprBWNAtzmMV2qfL4z4e3CRD22L832xcUVmDhSH5ZH56cCNXprywHhFpugpzf49H54hv8GkuvqbqsNbYnhtNoA",
  "key13": "2CJnhtGHfqpbkwzuxwDV3kViMBX517trcUGmRBtLKKYR3G1QiB3dzxCm6QCBoag3JuF2i1zaZCUSm6h4GH4naGfZ",
  "key14": "BKKSqtGa5qEYhcY41T6eHfaSqf4GpFzeNH39ns3afb3C58np32stpKVvxyVwtZ9KcD1JgkJFLLr13iLz2ja65qf",
  "key15": "JNNJBqmnEn59jnYws7KmJqeBGB1vbmH4xv9akhueEKsjJKbL6thSX3GNVnviJTNmjVkiJD2siMeXh3cBiKkFpN5",
  "key16": "2HYe3KtYy1Qi6FuovhUoqxHyLqoxkPv1ZN6SHjDvsBvGufk816YfN7xuXAgnN9eHXd7AiLFSmb6d8vZzAcPHt6ew",
  "key17": "2jpUeEjCSgLtdvFMdkVAAcKARptjJ9yBmzcFpPi7e4b2uaLKEEx834r7qiSmaeFMjZ3ofvtA1jJnzLBKraEXEXiK",
  "key18": "ESTgU9na9LSJuJLeWnuf6HnZdjxCDHaE2oE3h7BZwN4sSXwCCXWW6W3PS5s3gFRoXaJiUgRNeQ3KjLkQKo2sDVt",
  "key19": "55XRwNnWHHGcvRPaWoU4bTZCfJDKtXVH2jzGPMUhk1GfD9huRHkPKDFoVtbM7uk1L2Z1MMCXRbwRnozNUzdPvrP1",
  "key20": "LR7XmAJaNDrMSX9MaFwxMSxVutsJ6eUbR8vyKtBT1Fmw3A1wk662wz6h1JbVoj53EkQa6CGrarYLVzDuCVydygV",
  "key21": "4nhuhSa2tqUVRTbV6G4b33knJscNc5eYsUpKzVGzqauB7Ctfs7cN1ENPXuAtGGZ96s8hS2Z2vAek2Zdfj5XgiZMu",
  "key22": "jPqDLyToT4aiKKxLF4viuJn4B3cKrywXLnRYvtJg6cKRq2Vq7Gi3YHvhTZ7ySPxVJeX5JC2UgUPTHLs1L4LZjue",
  "key23": "2MTgiXm8U2hhfgSRAAqceTok5PZ3ixTs5QFf4CBBKCrTGnt9fRW5munEcWPTHRKvrniWKhmN6rdbnbW5aYoJiDZ2",
  "key24": "63vzD1tp8njs7gLU6GhSZXpoNB7Yz2H53dsWK1zoHwku1zp8v2MSZ5kGQVzdN3ouBRRTdTDW1APdxMatWi6iFuEE",
  "key25": "2NCTNVfy7ZWw8hqsUtHR43XW63svPZMc8vKkkH21DsnjqquJQYUhRaRdeoA1QaoqEVwx2fn6FUCdDdo2iJ1Xfwtt",
  "key26": "34B2yD6jcDF5osDXHwewEr9P4JMAiRMEmvEtcTooJAKGCLauRJEZYZnzpPXBPZhCdWasU7bBNWueL4SCsSXvLy6R",
  "key27": "5AgZCBUAsWeTcj5wRQJqnwtZaHAd66VsDTRuE2HHBfrPiz1opU7kCg94oHizXyfYuoEBRU2dgLqofnDkBvAeqTwr",
  "key28": "2PabAfVTtgqrsiUcbgFxvJH6VhDpM7rA5Rq92sMwQUUZNscKAsRpXHbZS8eZGJ8GMxkSnqnbVDnFLG2rb8Joyq8L",
  "key29": "3mKmhocVcsVjaGiDyopiNkNRMjZkB5Vzg2cmoQFYh7649UtdnmUJUHp8JQxNWDzaYbQynYaEQ1oyHvZJ186Zw4jp"
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
