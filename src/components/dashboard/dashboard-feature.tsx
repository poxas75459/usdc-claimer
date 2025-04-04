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
    "3ykByJkvw95eS5FqqnEnnMGorpXG9Ymt8ER6vTQSjx5ScFkkg83F4hXYg1vCqxH6LdgyjeAR8AmFEnfP37kmAqmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ko2gPNmkvGMu3mu2k8DnKTA5eSJr368wSQbWxnMirNUacQtBxQ7eNQQ9m7ouV3Hn5U6bQ9FwaSaPYbD4Z7N6MV",
  "key1": "31bvtDmf9ctGPdTjYK63wSW1XHs5xNRmvgELi5BegXL1WEWUqxsQdWnppLBHdm7hr7qRoL1Xi843MbfjXx49rj5f",
  "key2": "5XDuv2dzyA1yMLL8SckZ46h9zLzFywHWChs7Zp7fQubH4eju2s7eVGTSUWfDoqCm26gCqAJ5UcVYpqdX5JjrC92L",
  "key3": "5BisjeN12gWKZTS2jToWZmBcBETzeLSBydTENSeYfypDLhLH1Q7Ngz1TX6Tr7fWf9xAza42uZAmXhLaVPxYypqrG",
  "key4": "XJkorsvdqrY7KrTpPkAKKiBjV9Li71pQ2rXLDqG9hSHm1bVW8hr9DaWpXJ6N7pQgDWEbfdMfEGYNKQ7jeiXned1",
  "key5": "4rAu4WThMFayKrmKtxXivAxTQ9KeFn4ub1NhtrkuKsjfS6yP9A4a5sgFi16RuSPtzRKJ7MpYtMda7W7meJ8k4Ezv",
  "key6": "5vbZDVQau2kZY3gQX86Rp4WUs9gu3eY6ojax9PBTobKCWzJbUhSHoc6svGa2iraviNPecZeYMaPP9sjDxrwQjeax",
  "key7": "waym4F7RET8mLefNtXjSTcMQgfWHECV6wSDq3ucNBVpgMSG6Dvyc19EgmyCj993j8JBfzBz3hsj9ni4JH5H3JmB",
  "key8": "5r4zXSVVTGuTQ34VxxXSSE4Mr7dBrziGTpyaFUS93rYL4fh7pxPjNW9MGftZ6VQSJV71y1jdfHqemift2r8h1N5F",
  "key9": "4iC57RFz6MLz4N1FUxepa3r9vPezYkkoRcJVhErF94gti5fY1mUTzhpUEDp9esgfJY3EGySFUMXZ2SFRVBXCCBMA",
  "key10": "55ozukSk8CtYnhaBByeEFM1X5FYvZi2XQoxieUTc2jrqnAGqgRGsrTPNkdEGREka8QF5jxd3z5ZziRwX2mUPF6sD",
  "key11": "4q7EhwTnZVZxECRzk4ZUrkhyMcVKbz3azc1aTtBgZz1sG9osrTLzBTy6QgtdLXF3VzzL5wYeNED8K4qWsejyFDT2",
  "key12": "5dBKxfVZybhhJrqS8G5EBdnCu6CKPyZAbRcfmAstRtQ6zRshqhsZYyfaXaRfGh5qe8nPDTuDcKm2zQLTNzsMtPvU",
  "key13": "5HQ3G7LwhqKonNU8mEdUjbviVAN1jG2CAGnvL71gEYKawxk4caAWqr1rDQAknAMZ1XGdVV39JxoEPeVNHtM6zP9Y",
  "key14": "3cdqGE8UKaU7c36rxbY1J3ASfSHbxKF2q3KtjiiNpN3WvadgRPUwWdtg1wMngW61RA6hidsTd9ANjmGKXHwEmeb4",
  "key15": "23UjE3L8D9qCda2FvyrC3Q8k21eeL44om28sYu3tQRrFLfaCeoDAfgJp4kBwmJkig29ncnzQ9crUV4K5mzN2au8b",
  "key16": "zYswMCzaNrgE25sjY5sLupBFXi6qX4TDcWJQGLrxdRd194L5DPhcawMHv61JB7A6xgYwDP6KXG4JMbSbVH6H4D4",
  "key17": "4XbMARNFJJSn2HqjdpJKEmcLpzhBMV6m1aDLhjm7h5eB7DT1yKsF5Ycooy1B7vAjQ6xfUUcPqfag6qvm77WiuWTL",
  "key18": "3ufvGZv5axSdGMSCoQieLhgAput9qUUgmUhfRnDC7PoZrdHqtHiavkSyRcvtp9HRX5asLRoHH9g1JaJndG4pXCkv",
  "key19": "4G2qhfrhpLE98qHRUBXQMByJR8prw8iJHCVWiBKTkPYv8rvMAbQLvwfLBv3BpZozD7Vx4ck6oE7yghQ7h7czLd5F",
  "key20": "2Di88mA1fidVcp7WsNoFFMwvqPy26BnL8iCjBLipgyJszMkj7xzqEGnu8Btb31fYqty7JtSjTWrkwxAG29SJsaPs",
  "key21": "3nq6jFZggmE23YtJyJ99PStDomzftA83zDHWDy6iPuAnYW3gqFNw8LR9B497aPBY2yQDUwyBnpf55WJgVdDBKnvs",
  "key22": "5eZ44b6iEqpLpTn4pGW5QMQBXoH1yACGJfwXfgUSM8py7cLk2Yqp3RiD92ABhUVriXW4BthgWbwZfqw7xzWTY8xN",
  "key23": "45H4v7FGF7aVpLw3Cmdu1hF9wNcrZHCX8f61qVFccYTBiAU98uCgvg5prGi4Eg4wZWJHV8148ALEPTTcnkV1MxJu",
  "key24": "ZnBEEgauLsZtDEAiPaLoLwBE5mqBjTUd5RQ3HquXz4te6unU8Yax36vFsKaD2hHJzPtLsRvu6Hsd5pvj7RhVAei",
  "key25": "2E1Y6TZ8GqtqTeKmN4CPVeJNedgEyNrXJUnv9wEd4Vd1Taij8idKkTfubtVZFNDsAtQG6LVShY946fWSVqpyAX4Z",
  "key26": "2eab7uGo5xhzDqpJ5UZ8bittfC4kkrmHheACVxgc69rCk1ZSSQjp3JSN7gHYbLJbgrei7xH5cQsLDREvZ8TYbVKN",
  "key27": "aYDH63kMhy3pknaeznvdjzkbdHfCvZwXY5mvtQC1t1kpcxBMXnuTS8oRL3kEgzWnWk5Et93jHUWWnXXfUithmTb",
  "key28": "2nU1bnvHFm1ihL7qtrD8QPYUUuFNKFcdrjUYK2BwTiRATEFGfzksbxuhFFHXAzfgu5B4Lp847nMnbi7DbUXUztdQ",
  "key29": "5MUtVi1xwpsFqPFkP6FDPjxgAUT6D69b4nfb2CDQKMLwXxsZH7HcRFcoLywPQ8qReGwmMRPuikmtDngtggDSY7dt",
  "key30": "3GZxtibZqMq9cA8TRvB1KEbCXcDNjfJnWaVt9dSaY8KNjqLwpbfnSEZ3E5uQkb8psSxLBuV2aZKsm599ZLkvS8cF",
  "key31": "1r4DffU8xpNMzro1GbgcP1BE4H9vuKNcTj2ejDj6snGdbsFGQC3gDNtBXUsZGdmtYJbd19nE5WH3EaYBKK2mxRu",
  "key32": "2ae2SgY8BY1XEx8ZmogHYrSNzmvDczjMSb6Kkppkd67PyjYX1VzTLwxxrcXtBbkoU7uVPoaLLDsicST5d5HzHHy3",
  "key33": "5ozcUjfkW1vBZQPbwiSUTCtcEYF26LfvWpQygow4ioPspz5fAL48HWNMLRpG5MmQbiVwYPUqf9iYFCwXZHhiYZ2o",
  "key34": "58A7sMuhRT3gC7HYs6YJjfBKNzRNVKqZqDbnPArM4BULhkQbRCfKbuKL6igekowwW89hHrJyQFWz5Bq56tftnRGg",
  "key35": "41y4vfa9kMbt69nE27vmNRmDKoetgLE3nq9z5J5cj4mxEgXRbhDBYBg8p1g9t67PPDavWenMbNekwAVA1afBF1c3",
  "key36": "2xvBk4LLGXQSoQZFgLV53xKEpsUwkWYH2bEicvW8kfUVCLUVLDBmips2SJZpVXEJtV61qcP85GzfvYUshJofcSHY",
  "key37": "224Suj93XeCU61WhkynebU8xoD9yKkG3SSeFhE2ZhciPfDXQJ4FDWNhEXu729epBwnPCABhvEFdKi1ASRp6EhAEZ",
  "key38": "4PBYazZTcGbFy3xtQ8rxCtVR2W1tPf7jGfH26BUPv98F4RnpwsfCfEY4D9P5KjBkMnBJYSJDyX1y3C4TdPMhcK8u",
  "key39": "25PJUmsTVQAAZFG3Gfy7wYyuo8nLDoLy73z8H1v61VR675eBphNXnEsfBtknuvbVsL4P6a2V4MbpvbDCWEDDeinJ",
  "key40": "27E7JTEnuQxDx7oukhvCZRxhGFGNU2nfme4fQzJF4DwPrsnT9Gg3ZV2an9ekWiHMUgDQkYuKWBj2Smi4xwJpEwxd",
  "key41": "2EufNV8N8expGN2NHKdrPQGt9FNL1r1UdqdpwuZFraiYAQv9dKkfZHHmfSmfyKicwC8hky27ekzMuhfmtL1k3puK",
  "key42": "56GhTY8pPpWqW3USEf4KZnVCgoRrrHxQzijLxZXqbuW5MNPV7J1sjL6d7uyV3q6iLrcXnkWjzJb73rRt4DfRoxy1"
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
