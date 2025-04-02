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
    "22rGRATBqk7wGScZABkkRRzmA9GWRSvVmQi9g7VKSBsBk1DsnYh2dyyAD2QbT53ST974BAkpg45smxycDSNix4jA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Swe12Rp69TtvhJ47cpTrYLpwWteKTBoVJqrXF8Bk9bBARcoqt71axKUkXLHC6We9SyVzeLbTnF8ypyzWcQFpaMo",
  "key1": "3dMn21sLCyjuxAtSYixxGALLvBtdxpPsJH2XhgfLhYsZLv5ZLQjEvzhiDW4bBxmg91fG1SpAYpiWbhftkS8L5QPS",
  "key2": "3NC5N8m1BChPH22nrx2ipVzxTTzw5Vz1wMrgBf7NzGEkMwTvB1uP9fAP3ZY7RDFhfSnqg4igXFxqEk59bdKkStVd",
  "key3": "iAaVibti3M3EnvisdTtmbVkxGmPkwzhtiRetZ4gJaYaUtKuTnPazbaQbjHtzFdsDBXd9R5tYMeKHACa1w77rkS9",
  "key4": "2ffd7zEZDHZEQTUTWZUmvqZLXRAnWBxewL52d9S6g86LJH8pGQaPutTtms1cHbqifFeLXbBnQGSzR3czcNdR7YMS",
  "key5": "2fz9nZsfsmA36aoZVkD6seRXbHF83SL3HNiFGpzUdeysQFR9LyQBioZQKAbz6w8UHjPyaQ4Bw3kmJWjaD4xK428c",
  "key6": "3wdkPcr1gjBCKardP7vioDYP4ULsgHdfNYg2BWcWkf34ma3fGfsYGqKuhLAQqYFmZsPwFwouTeBp9jw6SMqHJWKx",
  "key7": "2XwXB4rqjH1YFvnfgtjgjbFJH7W1ArPc6NgKZnnaMFaYpU3sa84yweLtsy378mzW9NZzfiWBy2HeB36V1nwbE6Em",
  "key8": "3RjD18w7A8dAaPynpbmxpXnrBkzDQ8BYUQVnCC9SiPHRJK3Hbat2FGcwFYLwp7bVtRmKsLU4PdPJucoGZs1LqMRD",
  "key9": "4so7m5RdJkCdvmiry6SaavpV52C3J9MRtKbKooj1ixB975RtQXNgTd6DVBWf2eaas5dchdjftZrq6W8QFW6JDHP4",
  "key10": "3Kj29N41qiTLP1je3J8SuFjGNjJeNvLfT2LmSKTKnUs6p3GUWzQxdQVggEdr7pkx4KpiEU32ZsTBXta33jhLxgDo",
  "key11": "4n4G4JjS4voDmqeBtn7xefxo1gtVpzoTS3az3mNcdyZxi62ihwand1JWRyR2cf2yshFzkVMnLH33rhhQRGKuafyv",
  "key12": "3ap6Qx285JCapHhRA1uPdkRwnmewHrZhqyCGYJB7Hh7uH5Ds45LyfGBMBXSp2qCRSAy1ooXcYzY58GPb2mWBCqsP",
  "key13": "2JTnVdDjedxRTxu9HbMJtfjnA3i3EYuZr4TsCvUG2rK66oZjjJvmyE6gmvrMppN9yxThRbJsXPD9ESUWUdftwvFj",
  "key14": "62KFrVBccKpTRCAJBSwVCeTcEGcGKVNgpjBfYRKMqAhPBXnBJc5ByKgAxDR7uYpeJBP8i9vgFeTQou4keVFrxNWm",
  "key15": "2kssyznJtxgp8FWbKXWyNAu3BhyjvpLwfnrem4D4jFMnrp9ziUwHoD4nFHMHLYK4WA4SaSRr8Rf2shr3gEZiSsro",
  "key16": "5ExRthBZEpee5KN24uv7Gjm8o8Th2DzP4WPr5scY1D8rfk6UxgF7cqCebJ55jvSX55Szf9v3oonbhwM6HgwmU7jA",
  "key17": "2fdVtHC8U3qofNQqgxQ2gVJLjBMBqndS4W8Sew3ff4RHg7r9z4AuY5Z7uL36THFWcU6jjuJMYQjXbRAMRoGs2NT1",
  "key18": "2e8yBab31VgS9RzkqfPPHge6erXJMp6mg8Xw4bc3HJ4SEyCSMrjLkLPmDJwY6bjyFuQsLBH3vsK7apscth7RjkXy",
  "key19": "2XvBUzk1Ln7ar3hzRno52wCRz5KjtsRFdPEjzrkxVDEZ6RLiUmLKNAbFfWqeXwqsiL7G6ajy5xhMud1g8M6UAa35",
  "key20": "2WYiGooaimpeL6xtTRtsC6ccBBcDtQF3LLhjhSEphkUJUCEnM8gmyMvNkbRq3sTAPYe4cPLFuDtSrkBRCebAqmY9",
  "key21": "rDW1Q3h7gp9AyRbpLLscfTTJr5fQioiym8kbSsr1TZc9MoM57DK7k8xoNVuKHGWyumgjGhAYy2xRjGE1qKHKQSn",
  "key22": "51xXDv8rZg7ZDdvRuvs1Sg7u6e11wTLPtmxbPc6yU2bNE3JZiE1ayujSiTyNQjsxZpUYVCLpxQjfgYmmUsLCwXCW",
  "key23": "DstaWCCwGibmLULoiXmMVNyf38ZzRETnJbPihyEsVL4Vpod95cQfwBvZVQX7bmrbujwagJNvw5u6w4vVzYdGPgr",
  "key24": "65BuJFdhNT4buVqza9UmgYYBZ3VxFvnkuHhrni1gvDsZ29Wei3LeZTwoNydiTDxy7ac18CbcMqTfA29V4x6HEXMW",
  "key25": "3evdqzQMoVbepvsEymQRVqmiLBFSc4W6biFHu3GsZRvgWp9zZ7EwjmWVKSaRHGieeixYeaLfRe9U5dJPTotai9Ya",
  "key26": "2MVBem532ZQqU2M7hEygU8cRruvmrYs3PX6CAmJohzHMPGvRfhcShxqELGwD8Zp1Yn6zgwq7nvfHEa9ufD3FsKeA",
  "key27": "3ho8x6Ksmt9h2DXuwUQXGEckUwY9cAB8ZPgGzrBUpZpEWPmdbbeDztTj6mzQyaKA63zsfWzY9JrZXy2izMHsrugc",
  "key28": "5ao1jFv9kRZ6Ph3D8tXu3vDW5xhU8xjC4adxiq7foyuVZerPqub9oXGjsH4qxpfEAEtWPwRxH6smvYMkNNWKvWPE",
  "key29": "246d5QF2wHGp1Mxs6AEuPBoYTHKseR3q7jRu3mtvs2xyzkzoakbqqA4tewotK9r3kS2kbaKq76g63tETj6h5CFxM",
  "key30": "3FxorXgP1XCwx2nsoQCKTA8wCgwKxhhruChm2vn86weXumTnSBDHrhRYccnNMnGDdZFkpQexN85mJtFMZfvzPn4H",
  "key31": "5rDhYVdZKc4uTFPtDWySBGpunHDbbb3qi3oi4Rwgtwh24VBQxy6Sfmfki1PW9RxBMiKrxccuJTJj9vAc7vCVMnSo",
  "key32": "H5EJBJwRJ5nQav3Wp5N44ZqYCYaDSWHUKUyYFAPBNcDSaMDNGPcy3B7EouGdRy4CqdRW4mvDVKt98G76aTC9U8q",
  "key33": "axGemGWkMvNAUJ4eNi8uHAkiox4T5xQ3n6EaaqqKm7shfCJ1y754aT7ngGVUofaTXhXxmC81gajKLaikLfspMqy",
  "key34": "rhcXjMdCYfXNjfu8LtRbsW3tPTHjDabbbpuGFuQV37eQcbiGytsR9EWhpCNzAh4jpkb3i7axCcbg9mdjK4KDoK1",
  "key35": "5eFCM2bZVCKhgjXvVpkXnrXo5ahYRz2nEuSQkbCMjzPcLPLH7cyPKoSZ4pVwdm21BbufvwEAjWQWRR2JVDBDGyok",
  "key36": "3npXctqLcMYKD6wLWto3uZFDV59Tfrd8V68dDBcciQCjeu3KFG8dLkj8DhhgxLkqaZXzvqrkEjrvQeb2Dhg8dpa3",
  "key37": "4ZmJHP7gqTjkwKUrx3Vht5bcuTvARHB3CC67RHfH1rCqm9FsXF1HeMzuDCiYAHHKueCMxrhm1FT8SeTH5xWemBCx",
  "key38": "3NEG9JcftbN2Q91xbgECwK2juiTy4YDo9MQoCJcXvc9oAeNMrKJEjbhW2m1KPdXbVnzNP53LPZ5ADT7ZHhSPeNde",
  "key39": "63NiY2v8Wx1GbteAnjfySq67RXsqetdQxCMeLwbnmyVgtR4PeepKg3f3qkHJE9S2kqAiVsKGD6Na4vWtAVL5AJ9b",
  "key40": "5iXvqqxKo8e83GKbz2hSbJd1yxRWCmiqk1KtN1bZ2f1Q6VZsqDKeQ8aqxhTiX1Ch9hnpn1fxR1iuMvC7BmGxQsEn",
  "key41": "K7HYg6BPkuzoTBVV25hZdoTtS154wastEmus51eaQujEEUdo14c3Gnt4dRS5Ca7UspY8iewsqkTg5iJR3tggqm5",
  "key42": "2oeA3oWAHiEpuaGZ1VGuhfYMEzZBsrvWJbJDVDx2VvNaJ9DYmvYCGyutkhMm43SFuWMMaCB1EyE24RG57FxK4EBF"
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
