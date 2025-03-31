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
    "45vi4MvYGzvArY6sK1AYof8qNYRmDuhRbZS4dUnUE9QkDWoR3pYYFoofd4R6zrLhy7PAJ144oP8UKRca9xSHVdHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pT3bSvR7LgAdapgAP9kGBj5UzfXER8q3sQVgDAXkb5u49iE5xYAQ5GRMmLia2Qaie35dnuzrZLhk42Txe286WAp",
  "key1": "5GJ52aeLf1jvrqD8q9bSYKzvs3aWzE3DpP64YNrzL5JY6xGnYwRBXjtDtvN6mZk24Jf5G9ryMiSaawisowrmzAsB",
  "key2": "5ZNaDct5rW3n36dC4cuB99e1FdotFHAioxDchfwQ7BpifTzMYz1EhJgwGQDknzcSS7YgsJdVT7a179quV88riWZs",
  "key3": "q7RX5x2UZTduTXw2syizgKniihsyb2F3GQXB2H9vwtRmjfkFkyCs7yipxfyRGmPrA2urZXAgHcxmkmRvwywJXo7",
  "key4": "32dtiCycXHTYAPnxch7zA7akWoCh2ogwoF7b9H56zc1eiSG2HovYWVyeZaQF79vXQXbr5kvNERE8XZsmp3ASP3ku",
  "key5": "5jU7PQrm6Ey4VgFi3dPJsMA9J7GUWM7sPD4QGqUfaAQ7mbZbdQQ7mqXCCfF8iucQujkGrwpaf1Pb3CBsxnYLbBqJ",
  "key6": "2f53DaKpaLndZfQhNfZGun5ASUrUHqMdwGkEuHeMp4QJM1bjmv4jrrkYhamVhCQxyBGNKU8pf8HtMxNzRgphfAtV",
  "key7": "5483pTHjB8KvgxoK8f7LMLGAR92RrEFPNUp5owu7BCQKcuDCGKtAPmchnyLWzJrieydXv2ufXbbWYwrDaykDoaao",
  "key8": "3JgMmBcuZnkgyv7stdWRukGaJGEP7C8NKtGSgaZxE9QAErPsuEAni7cby5TVh8YZcsdvqMcpUnoe3TYJ5cAUzc3N",
  "key9": "HaJ6tnc9tQki9iZL4b4Zdk7KmyUADUHZxE2ifhMGa7cQrmBP8PiJ7edNuDbdP8HQurAe2fYkMEbykN5KqQeqGZJ",
  "key10": "knXA1EGqj5GL44X2tPVXQjvFfxEHmRcWrAyhHrr4PMc2DzqjsAat6zBYB5zgjRoesAnWxk2MQ9Gi9BSeKaTyY9q",
  "key11": "67mcPTXteGTEK4Eu8x2FjRLxscvBTbYm2cQgmNo7nznyzB4pS3RaknYDvSD3XDNTnz1kjGDPvQQ5WPXr42a7Fetk",
  "key12": "2oafT4mrm6Sca5dPje8Fab7Y7zK2ej26T2D147KECpfFsX6FZCqgtecVeiRPFighBMiNDoKv8vWuW9Z8bDXMYfSj",
  "key13": "2tJiUqZCSgiWqDaTidZi7eztk5wdeZPuCXzq9y1sCagFrXbeBYiurFR2gHNU9Rd2oB78vrTepQerdXZ1WqWpJU6Z",
  "key14": "FWsiCg39tE7stUfNgwwtUAH5vYvBa6FV3PSLyHtcdWYzpwW9DMakB1GVnGmsfpMPEriKa4jXsCVyzQMZCVkTpoK",
  "key15": "44MtuFojcxUARTimSrrKd1QjP6mWHMQh5ED5ZGv8RanwKbcbdCpYjWxWTmT8SZsj4MTAxpneCMn6yUv7AD9nVRYj",
  "key16": "3iTUG52wTnFGpGNVe6RdAzPmQ61k8UjN1join7GrgrWWEwn9Jyy3Dn6nd2NBA2196HdaGiVoykiiDhYR3fPy2ETw",
  "key17": "5kiQ3EXALTSnio4B3ocaAu4mUp4WU6ANVDEkGEqJ24XEUjhcDvCstVMP3dCoMUws5rREFEVry4ewc3PtaNSZHYi",
  "key18": "5n1E7joXJLLe49fNvHZCjBx7itJHPtCGF7Pzn9NaYf1zwKJ76MSohtk3schizMqMjKD6QSZNtA2Ehb6pk1AMpgwP",
  "key19": "2tAUNTTKAWJBSMHMCUbyRLcsA32khkvx82GyoqYbvXQSTwsu3gHSp1V2dbywAX2gMJwZLo6jbxGHwob738zx3rS4",
  "key20": "7uug37sJkhiktbgT8CgPbCMnkut9vymbcPQYGqZ9RPrNedUVoEJdN8MRPVdVV6GhMnXBAgxNmTUQHtj2QX1B19z",
  "key21": "5AMge7hGm27kfgxvkJx2cdBaZdyfCzrAZ7HrHiDhS1UJHGdPcgJBpnEYgrkfoheiGFKgCrkoq4RRTHjARKGHDQh2",
  "key22": "4oyMUp3GMkWLbShTpEFU5Gvo7josJN74szk7cwFYZqgsogHDVDup2gNiJ3fP5qyPPxofSYEdDMTkMSo32enoE9GU",
  "key23": "3Tr6WhGRBRss9888eqzayudZ5vLDqETWEDGYFC9iUpJiHFAXFtciP9DP7AEH4NYUyqxntnT6UhuykJxMJWiSMRcN",
  "key24": "3Gbu22DFyPuQYKBZdigni7tFYRGpWmC12MRe18PoHJysvcFs2zYqKyC1Rujmyj6PMS8rrp222L8SxiJFYyytzf7V",
  "key25": "3gheZBNXaF3dhvjjwYSzBaJdRgzqk5o4aHUTsRqp38NMccdEhr3ywGAj5pxAsPHUPXp8bxW3uy9xQJwMpuAFJMg5",
  "key26": "5nLHBqtEWe2kEiNS6g1GgQEGdJLnko9MF9qcj1QfmyGQY3oMZNJh41DqS5tRYqHCQEE9iPYZSSeTnMUAYA2rnWxP",
  "key27": "5BWKiXeDc3c1AaNRRhKEhpY3xjPLjLidpqcTRZ33tjQ7cZXEFxixqJSVhQD32t5jt7j3eL5G53VKpwrt3Udsi2qk",
  "key28": "2DBxRx1saniheSrkaFj55muT4jqf95B8LcYmSQGUNudxzXDJ5hDwXZoaF7UZhigUvWY2A1m71ZNwkBJRpUBT8tpm",
  "key29": "22RBcDY2C5opztZ94J8NtquD9cUqHFmesee4gw36Sj2eKus7Jo6yh1RiKn8EY7h7fMMK1RL7H9MLW1ioHqpLXaeJ",
  "key30": "2GRpXw9uLVUdxWQhbBEpEGTiq82ChnGfrgLakg2FmWvSAYUDy6KAgkx4L7a7C1fcKqybYQ4RJuJsC6oWdRFKnHx9"
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
