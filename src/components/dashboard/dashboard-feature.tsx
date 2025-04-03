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
    "49dXdDYLPQvFp6X7fkg4gCYrW2DgFmRBgUdkjCEgeSyjkTcMntqCivkvAymo6B6mZAFLsXwM71rHn4Yyc8zyGFdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YPEWTva2h8zaa2p8D4gT89gv6pdRw2GPDrJ3r422joNXQw5htyc9hgsoSuqoMdbnGVEUNgdDSDZaGR8uYRhFGNJ",
  "key1": "4KGizvqCueBLdeP73YaU9MM7w1nVvnA9Ru3cQHfjNMcM7Ha9R7t9WtKuLBLnkUXDsJUyTdCZgZVipYg5svx6jFS2",
  "key2": "4edM9NmM3R3wRihVnfPrVH5Mp2wD7a6p6E6Kn8SkJm4MDozozyAYTRqgSv23QmM7v3thSKoxSbgPUWW9wZHqZFbE",
  "key3": "4QXa45MdEXARC7iu82hTawQ2ABb4iBekvA6XgjqPbtKoQ24SATbkDLA3US2nrQzi9U61ZhC5NCnDyh1FgF19nxJA",
  "key4": "2FupMgrP5suZjT71AtC5zLdBmi3wzoo8xM4Zs11DC3QMEDsKyVFv6XkjsmgRM5XiX23QuAjkd6Ho6rWc8k4bfom8",
  "key5": "4BGiSn3guKTMb1msJ2b9jHtwNJmUkT5XKUgc5hooYr1gtRuvWbZGxmNucvV2XzrcMimsVNrpKinADdooZSQRQVGj",
  "key6": "4vGW3hr9kg9TNxkXQirKaKFZTzsiFj2eMmFq7t1tdg7SsbShZuqysuHEYXAczY2fkv6Y79C3rQVVHiEW82PdDwYs",
  "key7": "JL3ew8mG5Lno3L7LxXnbhZNrbNZFN5RWFX4scikj8dvi1no17qL5qsj7izxGYRPFY9t9z4ZYU5mk2MStHGmEEkB",
  "key8": "2HF6YYFzfAHVdaBXoLd3hi3Fr17RN1EMXHRTuTyjUbmti7Tqi9FyGinoAYSavhNmyDGJvgsYJDREoveHZ6XB4357",
  "key9": "4JQTJQQeEWYknccNacpBocVUqxBw1gzJGs8mS3cjuCfFfuJna57LUeKPeAzsJivyqkAaFa8xbTKt9a3pAGkKYfm7",
  "key10": "4VD3wMeZGDCuNDUdX8DLDaaReKsV22NZdKzu4tS8THfsgL4N7NeRLUjXwofXEVr7tATH1ocZ3FkXghAqDJ3unG3W",
  "key11": "4o1dTZdmQhRCmfjBjdvLVENKYcesGD8itRXS6ZkKSZR3uzgZGuZXHgwHVzS9uGfhNKmFxbFbpaD1opzPV1cPtcBo",
  "key12": "62At7FdcDPhtJPTBaguH7Jr7ah7jRxX6Dzko2NQHkt4rNiqYPLUmg1GaPaXcVsA3gU4FJzsSXmeYjyDRWbqL2EKC",
  "key13": "2PgSqbJUfUaFDQjY2mFn2ruLqPbyKnHE9XfmFDB9k3aJXgMbnxsbqr6bLrheLLDUYhjorfwXds9qhHKVZEnZUuAc",
  "key14": "3UsxgBtL8hha2pHV1M6UAeujqXb7qeJFwVb5vd5LbfDDpMBDD3YmkLyf1fHBgJnsBMsYLndrSKy9hGngm1EYn48R",
  "key15": "XFgSnsbkFKDabUcQ3N7fU9aPqZUdN1V7UohpEQJbfRJ8uJsbhQcvrLDqxYVQw53smvYnXbDysD2rkCvY7gDRgZd",
  "key16": "2NR5qaKsQYe9hDucKDcdBb365Q3LMfuka1zSTMrykNADH3hv54RjNYYTPzmmgcGo4X2p4orMA9Q5kmXJ7E3X2JLY",
  "key17": "4kjzXHLXxLdxMiuw9Tj5JntLunFR9vh4jj8NTjgtCipXp8mUPCqE59RMX2x3vfTMb4CL9NRcmeZQ1VMxtdp4Sk8W",
  "key18": "WzVTtruPTc4WmACGp5uRe4YUJzFPenq4o55JX44fUzwcMpuELgkuGP9wVpHBWRHqdCZVUVn4MsD5yRCHt9XFcbq",
  "key19": "4q2nAJm2nHY3raMKpLwstDrRiUBUPRSEviCV83Khg4RNwwJvhd9UXLjSJKuR8AxenGmkvVg36sggET6xtqfAXqdF",
  "key20": "3NzqYi458b3PcpFqKYZvPPcErFE2kNeKsCb97gWoCepN7PkSLDF5FjZqPSzGNaM5MtSdGa2d3XGuUq2eDNWr6FiP",
  "key21": "3bNYSPEAiaTFt3xp3s8aPuHkYtH87Pw3WVjgZFYBiyudL2mYWjf1e6jhHUxhNserkJGWQ39a5TxM8ZzWiKqCSvsy",
  "key22": "3x1VXRQ1amfDpp4qEix6wvSHzVeSwgZDfFGBPDpHFtgDFTjqvyc5EBeFgWQmdwG3yBDxtiE1aDX9BUmLqGHELM3g",
  "key23": "4c48yZQR2bFCzGdwycuLBccV3bsgvMXjqfsc4eUvQuMmnPgUFo8Mqk25s88SPWWGNFA5qDcpRmQ7Fi3WPZLXZHwp",
  "key24": "AwQKLFiUBoWrsEiXvV1SB1Cxbx15LCsbxcYbvUjNyBWRuSZ2pTT2BjLVu81zDUTEG1gK9NCJmjd65e17JFFPcCA",
  "key25": "2Sy5Tf2jBXju8sQjSbpBHE3mkBqkrnucD7DeLbY2jr7ep1RaNSTnrtR8NfSa99t96zDsdFTchJ5h9oAVByxxqNxV",
  "key26": "2Rvc9Q5uGP6on7wkoLEQrdgJAnzshmNckeXyMo3LPAQyBNTChCgbGBuxPpt6p82FXUxzD18nK9sxCVitc5QowN1i",
  "key27": "3WQKmNzPzakTTqFP3qZ8ezbiiy38uc8DHrnrwP3bmtaMDS7x5NZCKut3rsdk2ANq8EEde9NujsBgHdbVLn8BGXrC",
  "key28": "5p4tWbdZ2DdqkY51Rxbgt4Qzu4DpY9tfqLR9gPLKntNfTM7UWM6Pathes3UtYaNM6hqi1reH6MNrA9RVfjrCF3oD",
  "key29": "2tENqrqoA6BbSKctVNPakKXWctaKVEEntNynnsm1oGPouuCUHkqAEv9Lb96YVB2KfpjgpSThrv9HVmfxciLwDnTu",
  "key30": "2YnFgTCrLuQnP3DES595Rg4JyPjFKGBgLsA1mFYfPcMHbFz2vyTdeQjVaBuin2yx581tjrFRG49md5yFtMXmV6w7",
  "key31": "4gFaEyFVLAo7hUtZfZVPPCksiDy37ZFuWqDa5qfEdz71kcdV1XYoPZbcJn7gR34EqxiLCo2NM8qxzvzAqVX1Fdtk",
  "key32": "3jDKqGYoEQjmc2YwppkQ9vKYKtWFZbWRjk7dVunj3pP9CwKcm2kASDeLenLFwLnmpuATPLfX3DNXBizH49wbHhdw",
  "key33": "ivL4YbB9t8iTkBZpkntVuGhqCUC6HCdf9wQTsWECChtvG28oWztUf6cLeiQ176udhqSfehhMhYwYFJqehGpSjcz",
  "key34": "Z6nC49AU15tb53Zme1hfNr49ea6uSgDpMjBbk2vqxrWZCm7raXd5D48qG2rqi6Xvv4WMgzkctYDVBeoHm9zhJTs",
  "key35": "2d56K58kKmoesicEvbxZ2z3VwjrZRhVqgQVTWWqYAJ49kp58iih3VvX4UYGutTuJkk1hLCegYjN9NVt9ssNeLRj9",
  "key36": "e5XseYCaKyYuAMoBdCpo1vh55giAZrCTUTxFgUpPJoY2q7EqPvWJmvSptwvdP3CWE6Lr5UCc7jxFkUYdEZtUW8N",
  "key37": "56vVQJBpzAqjq1ZNHxwbJUjZ89CSbyPZ2qo4j2XEk387ZBqsnhUottSuW7yyUUWa8yzRsnYXfvNSAY6et82QgwRL",
  "key38": "4FkkvSDq5AS6TykrrbQbLVG19Pm9X6pZPZQ58TxYLuvDoGUJ298P8hsoxPBMFAHJY8tBBF4NznV3bhCtAz24uVXu",
  "key39": "3RaztChAfeTnLAmgGXVzpfimxpxqQMT32hEqj45tTw39Y1fHf7MQhMoWsmrVa63qTQiimHWZ1EAtpo4XwKHZM2jP",
  "key40": "61vZW2sJ9jQxZoMHkKFfVeAgpewV7HfcRfB9ccoEnSQxKRmLGeoYJDe3aM1S84g4UwUvyoSiUuy29pRgoa2h5up9",
  "key41": "5gNjnNp5gvyQyiorVnAPcwKgf4ikFtU82KWiUPSZBWCQE91hHxqhGzvD5W9HQYsL82zqhPCGE8WVfJheKS9ZJCoD",
  "key42": "5Ns1G1Na7Dctk7h8pV6953c6TSwnKCUpTT7nGnx9hehnFidcE9Mj69nLrXzSPSzk2bwwnidNzVq2TCa3aZM1vvGG",
  "key43": "4zQZkXHocxm51er91TDHum9twKS6kmsh6rXGtCEE1hTK1L6qFQDkq73rQ4sGxpFLQy4LLTDLvaaKy69PoV4eoSxA",
  "key44": "3CjVeQgHyAkyQ4k9S8W5seqUhQDoZGvLH1gh661EVu31yKtWoCqwVVnjiWD9vvjSQFt5wnm1Au8yU6LFRv44VUMe",
  "key45": "4qpMxmGkZgZvFtybFGmU9TTjuLnU8qdiwCDuE44PsJYjMU4PzANq1R4wEvqphMMeXCcs71Ms6VnCAT9SzZdY7wfL",
  "key46": "3hppCiEMyg5KNUdWMzBGFWPsGh1Hx5AqkLsz9guU4QE3Wye35amrjqL3TVH1GX9P8MVjyvHyaBqdC7qGQpsETtPV"
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
