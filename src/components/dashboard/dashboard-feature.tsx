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
    "3f2ebT1aBZ5BtK1TrhMrFooaPGZxqeNyac7powNZC5XuomtY97vHgAohDAJ8Yj6eoXhXCz6fYLeqUJ7MpojqjZ6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKih8ToZpCCFBtnfYd8BoSjmAjqRuXNtgYn3gx7YAhp43tBLCf8hGKxEw46kvisT1w48AuRoizFngHR4qNgFBL4",
  "key1": "3CLcP16APQvGxRVQmG7UcEqVFyF9dn9n2f4jzXvxdz2QRXtc1S9LqQQ1QWae3rUGpPStDvTsx8aBDHWUWEem3YtR",
  "key2": "5cHHEN5VCK8dNRwUW5qgc7LVTxNDnsoxCHv2xf1z7iu2qb5BkDZtKXJvaGSBQmpNRAZc2TspagR82jLZ1mYvYPZm",
  "key3": "4i86DonSDLAWt12kTEaVMLQ2Bm1oRChUhtHaeCGWW71qjQ3zHUPKQjga1B8P7nAUkRqsUcgw5araymYNg2xAEEi4",
  "key4": "5XVN2kNap47GYRTrqwhgby3dR6SP9ZFje5YsqhpcQupMxYsbpP7gF8QM9ntRjjTmdPtvKAqhwDCWtYnVPALJQaGJ",
  "key5": "5EcGi6Cx7i3oLSRKSsJZNeRbr3GDpKkzwHkWgHdCUKjEJCPUS9FTfbbKCw7bwc5CcvaAEP7qMgLk6TEX3Ra2wqdZ",
  "key6": "5sEtwkpWnNuW56qpPNLyQBcez5ig7WKcjmFbTnnBMEXMksYyBXqnuSCwoGmhMMqXJvfpnGoGMy5Hma6LxTPvpJFx",
  "key7": "4CqgyprJCNbNWRhgEv28SqPr5WZ9mBToncHPc45gZPo84wmnBZr6tDRHb73dXWP3ySHoeJxrXVL3aJPsuNWZxWNM",
  "key8": "iYgtaiD7BtLzLK1JZNoHK65xFChmxq4MjXajV92LZqN4Rz6ezTf95SLtvh9yuCxCrHbiCmk4ayS5U6uGyKEkBnr",
  "key9": "4mPU72RpHc9nmtZU45dMZ229o71mu9wmL8NSXiCLnP2i91vSoHPyn2HoMZRdzUAby6iDUoffzPUHNbhbBtdgeTvJ",
  "key10": "3regJUwXq11o8HyaqhommSpWxHNjr831PiGvE3i6YeqBYVSemA2NNZDhVP49nuJ14BSVyh5dPDv98jex9Q5da4X3",
  "key11": "4VhQqsTFF3qfc6VQFnXXavtzBX7K56L2ZcvUqXHQQRLSCaMCuhJSexVBsAGfxcL266xXRbMs9ZwcJXemHzNB7NEn",
  "key12": "5mXUHmCGdJ3c5SxXda4XmhXaopJKzZTUAbXgkHbrsTfz5JikcqawXXkCZ2rLgcoW1Fo838GE34WhG31hnLSgzqV6",
  "key13": "5a24Fb1FmpgxsMbfjELRUQhSm57rVtvct4LqDNwmVe8q5BHmkJ8ZbT2BJtoW8P18zTgeR46oBFGPFa3AUBJVKS1g",
  "key14": "bHUqbSwEP1E8P9WVyXgLp1RW6GC12QrdRURkSGFcRKSMBVm9g9rbouv5iFKohUN8WUskWn7YA9CDkq6Dug7wK3h",
  "key15": "2rn2oc5k9sPMXfpsGpZM9vY4S9hVrkB9ZaYHdXWxco4ampdrmTSKZEhagMRHfCMBFqsBD9FUUEnm5YaiUZjhMZyP",
  "key16": "5acH2Qu3hhXhHTj48XKmH8o7c4curZM2MJxHagTD18KPMFWTX8Qj6kMywAhk8KL4Kj8229hgFWCGLmeLDwD4ZKuP",
  "key17": "5EGgHVt6xm17VoBaHRt2RPqzz5oaobPDZwSTzKjnJvTfYBQcExGgYA5D6JHu3yKPu3zhky8Ged2bh1MP4jutFUi5",
  "key18": "63Q1BJBzWgK2bwKtndEGihyfFkwF9MdbEkHuR4YCcg4ioTnD2oNkbLMspxohxCcZvvJKMkt7fL4GKdKLQvui4KCB",
  "key19": "4uiNBwGFco3e22EHLGAa6ijEnt47454D8QdYQmNfcPrHhPVDNkKmbNgSLhJZJ83RQCTedRoDjVbhhE8mV5izDtUt",
  "key20": "4ef8DgnqrAENyTs4UnHuypDMdZrN68dFH9szfwvj7A1d6mMS9UYs9UfpnxHjoXiSM4QxZVDqQjAvhZXmidqsh3Zv",
  "key21": "2pV7SNAhbVoDtCBmDpBasLF6JeTtHxmWzzK5P5LnE9vprqFnteoSF7HUxrbu5x2ABeqRdCqBMfhHej3Nyp1MQ6ip",
  "key22": "h3epaxUB1J9UcxNQ9BbY4qNwT64GEbtwj2bCE2PsGrtJbsxepSooXqcbXBPoyNaRDozkGzbwoDTiUHoJ6NATqfj",
  "key23": "33vnMuJz1JYdW6GpuZ86ReNvQV7H9CJVV9zUHWL3fDSQpahDCAjiFJc3jBVG15zhEpmuEeWVqsJVa6jta8WvJeyd",
  "key24": "4QGExubVae5kJxJe82eMB19SccCh2rmXqD9XaKXMjMDGXhmtbhk9XFsKcdK44VcnxMNg333bnDFCAWbVcPhkhLWz",
  "key25": "3PXLj38TAqZZ7ujZU1zZiDxeiDcfop3kzDiNCRFBupu5NbPDTMj2hqwd1qzYxmLQXWEMUhUGnR7Wg6N3aozgR358",
  "key26": "487HHSPREWHMvEUdXbXL2f8G7w1n2uafsnS31iEki1VRjp7gHpmwcZkF3wpcZiz75d6weUrDzYYZFjKRyTLcz92H",
  "key27": "PqiLyQYgassrJip6iLZqAAGLrxArRaupNU73GxejBqKpAfRwYx7AZsQXm1BfLbUos1bKpcCAvweGNs4pXrUUokB",
  "key28": "2Ev5Wi34RkHFMS2QY7rEwFZKjZrwJNJPvrt1SVgnbFYKMK6nkR16yDAqDyCFjgNkrVM1D3FcsjrKubVNxVJujNzP",
  "key29": "3ggchgfkp4fNmvaKQmSd2Apgo4rEJHqrXj9wNEHpA6BL514RpZHPz8v12aAPRH6QfHkK3qkDvg9aJ3Rztij4Y2w2",
  "key30": "3NmcTGo32Na5TLHgZ9f3Q9EijvbeAa6cZ5Td1Pmznf661HPsL1n9zQVoqtgQN9ebEQjFpS4FqP6Ax6mH7eVEifZ8",
  "key31": "2m1HUrq1mkSVPLgjGJcPkLzRzCXt5aMrV9BYpDokVXBX3mpfkftkkaoSEHnWPTzqEYUe7hzXEwAgxTQ5k3T1ZFCc",
  "key32": "45bmdqQvbz3rCrGzuno9efYgntS3K6jr5nvhMpLyV1QxHxUupn5RQmVJvtkKgQSDZ1bzx8EyLnff7unwPGu3Nc5c",
  "key33": "Nn16GBUyskXqu9yYQbKywhe7UMBkqReqpdumUcU3KLMZnnh9JSAVAgAvYDSvep1y2o2uaaW6kbZZURRhVzZj6oo",
  "key34": "5Z5HxQzMrYspFTjHMM3gTw9CEbNqoKQwtv7aSvTPLrvHRytQNeqpK8zu43BCLsLBgCqg8ihKc3Js7FwDHEsiyERS",
  "key35": "2wCyVVwY7w5Xu27FbfojbPWaKE8SWwizbpz57g8PVaLNnxwtYp7bqMYzeob1okNumwLbAHHscDH9hq1vdMdsVWDL",
  "key36": "29pNsKpPq9qkwzXdqGqexdx9qHqSSZB5mYAoJJVLUUPw4CQ6fgP5KaECBDAguPgo3p9dZvs54A1khxrdeAtP3baQ",
  "key37": "47VGfbWdfWdpP4mXXDSFFy4hkdDxydZi8jNSWiJMXBfHR5xsYvxiwveYMS5PHRgZoVdgmrmeY2N3sa4HksspviTu",
  "key38": "4vTrVhcJDZJa9ir2PBR8ThongyNtoHiGudFLCMPnR2htPg1urZ2RZwHzzAHZ7P4s2jxfK88GgrKH29Ngtmh5rwHH",
  "key39": "5kWWAsJTfbVEq6BV8HbvAvRmyKTiBSGgmCHZxGRa2VhdgPsetcAAprhLtMJpK1gfNC7gCGSncvHEVbai84H1L611",
  "key40": "dv9t4vmqxwh4GDZQ6Bk1aZjWLEhv7YtaUrK5VCJMNqXhUPSN7FnVe9BL3Ze73gargTR6MHgx45pGrDuVtiFruNG",
  "key41": "3iZRGEZNhzem3zR9zSyHmAfkGZihv9KfBUE3gvXAL8qsqc26aDbydjBDvQBaRFHtvexdHoy9EcSVaG9wqQUAgfw8",
  "key42": "4pUFFRTuarZNLSfQVao4d6MytvThmkjUcnv74Jj4paz9QL2NaWYkL51zMEqhtBpmy65EFkU6P7BMGnBG8pR6Qiik",
  "key43": "62GS2idYYoJhvmtzKJzuB5TrNVBSfAbyJqUcjts5wDXPTGZNMZcyzGKrbmtceNUBWbukqoTJtQ3jJEPmsdwb31iW",
  "key44": "5KcksEjTUckcFoMfWvoVME3xeFQLTMbzxxDT2uyTPnSjWh6xxRz4BDQ3F2YoJbe6dJzX9HwnixTSQVuMRnJYnBZ",
  "key45": "4yrsxTfEybkhVaMX136aKM9gd3a8x1QDJnVU2RdPma2rfRcdnGt6qSy3jUUbH5NkThCPpwFrM1yBkqfPUrNgd3Co",
  "key46": "48LSYKRuscZ3HyZpXgPLcZMtVnXqK6LyHKsMN3mqfPu1x2jUstXHaeD4yFq8si9tLgAeHoS4CxSEx25i34hgHi3G"
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
