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
    "5g774rqNLddQ5p9JMvCaAErhEqainAAnpDsQSr5ev8Akama7ZWFUuAzCfUMEeDVgiGHpLKTGEewTEPKsTkVCuL6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k3phow395HMNahCLtkGZWfVF6MD5gVaobfnxdXEcbJnpDhb3RY1UB95uo3QpGhhCiebb3CCYTU33nmikkLs8N6V",
  "key1": "5q17GJhmU58wHdAcMMUwvCJ4cGGjs5G11eXCFFKWMQKpXZ8ZadYDpHmjJf1aEZfRajJH33yVMBUnoyqcLdpG2qWG",
  "key2": "5NTHocp2rKW3E7iKWALv3DXE8qXKcxm2P4fBjBMbncDzfMrEq5nwsocr3RG9tSFeA9zzjDxXcJBtFLmt7mzha4PC",
  "key3": "4Ma4T4ZkjGS5bJaF46XsrQbTWeXNSgcGbrsEmq42dh591cD4ifdDCdXgJ9gHcdurTVtdtuz4mRjZLcBLbs3yTY6B",
  "key4": "3Q6QHLdv9q5PF8CEJ14q1NF8H3Yv337Zq7hUKpjN1AWC8jFuaoehETXSNAeMVAhhtoDKykNJpj6ddFxmMDGy1YRv",
  "key5": "3EL29as4hgoAyuNr8nr9FBgmVEWuCN3Dkd3r52WBLsm6qSGudvPS6qZhtbPGk21tUzEPftGjqy5CqTnZ6V8Eqo7p",
  "key6": "5MskJpUubYKQhPTTbyQjHENQe2MjgRRSfJn87aVeA91ynDdg68vfw4QsHGDf4cb4kfFndAneV3CpBWYt3qPXzbzr",
  "key7": "2pcQ2kW7KHeKHyuzw2XAmEbTpKNY6cVt6VHwJni1ALUvC9WUsxJDnda1UgrT3aRWN2waZfTNyao12Uvh7skb5f1X",
  "key8": "3E8amoTZmyqZEBa3gx4dYk3ditnCwdpbG3AiAuS1SciVUmmL2ysxfGb94gHT6cTPtevpdVcDeQunNyU3KxsYYsYP",
  "key9": "4jQvixkYQnTByEVnxFPoLhGGaVd5HWiWz8D3946wFiCi3TcCHxx6rJDMFW5yCsmfxFEnohV2syh9mpeSGS2wMkBD",
  "key10": "3byt5b2RcEKuGG7hr56qSKrPdM3BKrHJondEqWkzHWctjdsP6Gs9bYHTpuUTL3ej6VziLXVJG52mQBiDTGcXmb5o",
  "key11": "2daF97qcqxnLtXKLbFYKHz1sE13GYSAUBQyDVdV5mMxsDR5a6iP62v8w18wJW8SLNTPCJiJbaiJeFmSfGjYbp483",
  "key12": "3d2n7WXTK2weHTSZgSKd4upBBFD774SVispg4YbaXYRgDqL3Qdpi3ETjafZU7sqqFBm8fazzQCSNtyzAMsbnzxR6",
  "key13": "L67LhqgbunfzCM3uRvkZMgFvHFFRsDSpsxQqK2QwqPiLrda1JkuMhFVL8uEJR5bfs6drfbeXL5Pc64WK2V5Q4yZ",
  "key14": "65XGLwTU23WrcHFm58TuxmQRKX4jYhpjhUZUAXaDhJMQBzMcSLufeTT98vcwmdW4SnGG6AxFeY39D6iHeAPtsWGc",
  "key15": "5C8vwYBTKmdfSv8yk5XBEWd8rT6xtGyZekTXoNFSJrUTQnbRkTQSrDkK8qK9EorKoFpKP4N2ASWQVAevgrqCFn5",
  "key16": "5vgdu7fVB82LxKw6QvEnou5jnZecggGJQvbM8W2jJvBUsSCgP2MnqZExDSUv4WXCj7UP4rv2jYRvjp4TUiKgb3Ap",
  "key17": "2maczV54SabWtGHG7RU58BAKxtyedavCHAKSqGnM5gbtHNLYoNivrpmEeJXz4nfVdWLVafc9hjx1fwkyEhuKasVx",
  "key18": "4Y3EcnwSgmfA3mXpJTvADvKY89hPn31dTLZvcm3JNLVDbeoR1uEEp1QehN7GNP47gTcTNo2egTPjjJ8xcQt9dQ65",
  "key19": "3V9TiSYhwyy7gK83Q5aCZJKUYS3vv97KkHLPUwMhUoAuoyMUxP3o6xJEWQKVHBHi9daqod8akr92wQhpRq6tRzaa",
  "key20": "5NwFrrGMzeJMJHmSpVJvkEREZzYvZ1ojZnM2S5KmG6i1gXkrzaBGQCNMcKHYTku9RYnYKCHPsNs2hC6RRL6rkYtd",
  "key21": "4oi9EHd74JxfrfPVhNKwWhF83Y2dCuVWLsNAxyA1aWYLkcoeJvNKJv1E5HFLnewjiC6FgEVGor31uBpZV2FhaFnz",
  "key22": "jPV12Muf7sAnijqxKn2YnYUHgnJ9G5Tjfz8jQredy4zM6tkHqkqV8BJbjYmtUYtGk7sXshLj7o6scx2kT3k3ajQ",
  "key23": "5CpAVkEUMHBbcy25hNHUtmQjoJURNVNL68mm4ENn5ug4sLnKZrHvYFcD3xjTmzgPKQee2hkS2nFc4iK66DGaxcQR",
  "key24": "2sMupjh4jdTohSCTgt6r13H3BNxib5oMK8reTrqRgNnmHmf4FiVG3vu6t1YYjHzq7Cs4ykEBrKkooPwu9QKrWjFu",
  "key25": "DdumQWJady9pNEmAd797rK96cnfcQiNBMeNNhvg4CLvHoD47LTHr8x6rmm5ngMRiJvc9hnMf4v4UywWboLN8Fjx"
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
