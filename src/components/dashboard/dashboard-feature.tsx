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
    "49sTSQSAbDJe1sFKBwDSSeGnuuf59NKFV4Xidfw8JfnXGYn9vbWXNE4c1mR14HzyHRmRg7BLv3rvMqrMLZxWjEuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26T5mnaCPDqY6QJYDSY7k9SpTwRZXJqpmezJRKvmY1u3JatCZTYUrVRAfZk2FmX8PJtU5VJXhTGKgSkjk1cq4NSd",
  "key1": "464SBLkgYyPzvvqWN8HJxs2vZoinAFPhuNPczb5QBkCpcfdC3pQjRhYvwfg6PfSTVzBBA8g5Tv1XrhsxkRs7pn58",
  "key2": "diaAM9BhZnAtoMpn2wW19ZC3Pc3jvdD8a9d8HqqtTLXuvj7vV44qcC7hvUGX47hBh3Y8rAm12jpDxAT7JsK4aeb",
  "key3": "27G4PGeNUwXo6otUjNEzwcjn1CsQNrrpxDqAPhpLjsGbySzTzosJDZTxJpRK5FN2pVPFLGys2Fqogk1pe4wbcezj",
  "key4": "3hMSe2NTDLHfRz8kmZf9FYw5UxT2obt8d1FEPwp5q7D7HySdzQ3JoWPQRqn3di5HH49YNBW3vhzjamYgWa3hkDJL",
  "key5": "maaAVPdHaXb5SKCaLjcCCTKY5oUfe7tBZp53moi2ZFR3YEhJ36maCe5tCgB95YTBHmFtadE4WPeBjdHb6W5w9NE",
  "key6": "2ABq6CDenZ2M8hgZXH4MiSriLBa2652BJiR2dLGXSkbZF1ybei8FrJTQDrHSjizDqF4aQyuJTC6diBRqisvyG789",
  "key7": "5oourQow7UQX7xWNaHTtQbny7Ft9aAuva4UDkXZ15XWfDiNvYcLQnVeQWwg8VvL3m1MeRaSHQDgYp5aEu3nAP5dc",
  "key8": "44rRyuiCtMx2Bvdy9C2J96Ye4PpeATq43qtBzyE4UrmA3UGd9AM5m97Q5o4VXhZMhz8vBCkpEYyxJKiGGdAPRJSG",
  "key9": "6G96VcEpqBJqUycPAJPCuNoA8dH5hdM7QN391siEwKpsAoJgd7uPWnbVF8YXfX1WvX84TGLtGdoA7FE8HcNymBp",
  "key10": "3MXSwqctQAgBW7oRvQ4pazQcMuV8iNvKNnpCgeuxqsBXQrjeZP9kKH61MLHXemNkJ21h9ex2yGVSGuFZAjfGZzpp",
  "key11": "5HmbKEbjownr4Ltge5Zk7ctXjgsJcPtH7TSquezbBNpoku2cDWtFeyFXnbqRrDJ8FeY4FrfnfRxYHV33nQq6usjb",
  "key12": "3mvWwjwSntKNh6TqB7UiFmePQRspE5Vb1rafzg54RQw5B1XfzqU9S1iz7Ui45Q54bMBZT8F4csn4k4m6ckJPk4Yg",
  "key13": "3JDPaB6NQPvgucyXt297ogtQrJLVoJMq12DbPkh81TVkrdRnkPi7iRCKus2BGb286G2xay2paPaN1MQdScMiUpZt",
  "key14": "31Jd8UwTGYtc9GMe9Lv4jQJu8pqtqyhyDeTPvNuPVTLX9K8amSQLutDWdrJdDCa8JQUZhp4WST69jSM9H72r4Mp3",
  "key15": "5EqRsMS8jTyRpb5ykh1C2H4Bnx5ouzQa9hgf4SKiCxKV4hbmNyKqhraaRRvubgP1x18BpRd1rDb5dpcLxDpqbQnP",
  "key16": "312hjc5aeDSMW9AQ1MULCTxKvhCbRzWHb9zH5XmrGQK2i2bGQnon2oq5qn1LMKJJyQkd1J7ap3NrYizS5nsP6whX",
  "key17": "4RTSE3g2PiHG4ShGt7CYY6TsTM11o8PzCKJFAxoyChDAWNuZ9ZfawDvaLDd64L7324oMNxKcd9GPj6omY2pnHkHR",
  "key18": "5y4ZyWBKeWr9otxm8qBbFa8iLt6g2vALJauNeZWYwNmFGxfRnNpoboUhtFhhGjrXnTpofZpco72FpRUbHGPzG6XS",
  "key19": "3oFrZyfgGHsdXC7MYZDaBWh8i8tcJtmn1DxUiivjym1DRmPwnawaWSTdBVLSU5EjVDg4QVA2rW6andoQJZmLLokj",
  "key20": "3ebjEq1aZH3oKgwM7PnjCTp7hPdPzXC8h2b1QdiyJDJLsLxLhSdy4aiv56eN9dkKN8gF8BbjJagyn89jvQgX6Yku",
  "key21": "38JqAbbC4qtGB7XuWUEBAgYoy8YaHdeHyGbZ554WpuqTVkrbgzaZvtrQZcGx7jaXnGrfVxHavSovAoRGT1rX8kU7",
  "key22": "4Fux1yXwE9frGWebMBtDp69vdSCVrw9Bn4wZ7srxLCAd1ME6qchRuDFaZHkvKHsQTehGJcZK7tvrf4didfPekiiK",
  "key23": "4fuh8ouxbxmMuj5Q3Vjwaw9fmScwYJc6Ffsfnb123WhzYXD6QJUie7xCSW5hB3R7eLdEdbpZrAbUXJGTtGsWza6c",
  "key24": "5fqHEB1Pr57QPemwhmDhkFboHhoMBaYePp1DebXdT5FgCwTJZmNnDJF1TJ4XxaBwci3BkPuzuLgEe3Eem1tZNLWh",
  "key25": "34qpBae6ytcPUy8Lz4MCkfrj6vuBxQJ47LrMsLHtwoJgEiXmy6Z3aRQsRH6XMVDJq1k7qp5pZw4q5pcH92V66X22",
  "key26": "5FGAaVMMx4tNRovebJvGUTyBsGTV9xmwX5yWRtxfupiXPyqZ4sRQUSa4FDAWWewJ2rpxdGoyqVbdmRcr5nZ3k3RD",
  "key27": "7rzEe7fk7A99gHZEDAxVzgnWwAKfJgcZJa4wzMzqCm42dSEkrXxhB3bV2wUe1PKE6aiTYw69XigwFAEgEFPMtva",
  "key28": "22GeCUS4sXEkVfCkrS6yaicAekeMDCJGLckhDgEcnDxdUTtt6vRCadzUhrbFj68tkBGw5r5uCzVkq3cX8L5oHS5J",
  "key29": "24WS6i5aY89qgtsGecLR3J8yuoWABxtj2BP4YghaTc1veUbQxf4pzmrPPEvNidDt2vEqCrS9UPrBayYdL3QoMjNh",
  "key30": "4QGoA9ZTrsBfjD1Ha78drZt6KwTYGzvykG1g9Ja2yM7w8EqG8tnKyL5mdQEYmZphUsGykX7jLEJeJ4fpKf9RQKoL",
  "key31": "322fEEUNAK55cuWFU7YMECa9oNSZKnXLtawK71BfKcqMGngn2MpnHvWMmKL3sNdWigVRmccF8UCwZZyM9XKB5Vm5",
  "key32": "5dBrgsZu5gsMnsjLTWjG5Ja1uDJH7rDgCXiHAAk3JZGfopHX3SKZYkRBMzR86CU4WbDLTGRa97ntVyiqmzq1He4C",
  "key33": "2ce4EtLCZNdxmtCkLTzvuL1qbAQ6Cr3G8EoUAdtvbMfDYAe4wrtfraocW5U4xc99s8TtP4iDJzCLbai4sTHUmc3X",
  "key34": "4g4Yaniu4m1okcJLutwrH3ceyEu87M7NWnHHjKc3fFd8PBEX5qL3DK4ua7RDdyyGhpjNX2USDXMpVMCBWALfj6Bv",
  "key35": "4sGLsRFGyrtTMFb7o2L1YDgywJJN9GRCsz6p1L6QyXxrrqH5g3nbjCBZ2aqMfw1Mo5RfjkYmy7j7EyBLcaXh7mng",
  "key36": "ynbRXSzJHAVVkGgoXuVXXNUS7LkCyrRWbzf3JRQzKd9ycXW27HTqSPTWGfQbAUexRhxADuRuUgiXqE3u4ccNU38",
  "key37": "4MM3JYY5Z4SmRytji64xTuohhwJwH15epLojdCwVSxjknqB2o6C6JcXGgAmiZ4QucgVMiFdVb48h4SLLzptv1Dnn",
  "key38": "5EzsDFicXmf7nUkuLP242TD9zbM5zEL4ePbZmhTpNzQex2U8MmfTUkL6CCjAFJ5a25B85ZUHUjjLotSQAQSvKRQi",
  "key39": "53nhe1YMPmk5sCveTRM5eqHf1sbjrQKP6ASvKf9WHYfVRPDWveTMQEC1PitRGp9eMCAhKnryYJrTcZVCV9oe1CUf",
  "key40": "5cB83QMnaEs6WH5aJixiTDSfJfeWTMJuFptnQ2vSCR66CSXP9n8Ub2EkU8qKJgY5hava89NrrfzFfEHuhAmgy9aA",
  "key41": "4rVHufADvDarGxEfDR3ruXn9mgPkXLZRDVjks2WtgjJjo8E5kbMdkAuKrgv5sYGyS5TiFg4v2fXpWFCrFnghs5Da",
  "key42": "4vrHdHb5gWus2fzeDmqDHPcKNqtkw9kVatskMQTtkXLtVeoN566roPZkJiMaNw62eZSBoChpmApFqokoRvwpsDAV",
  "key43": "WZupw2ALQByRDNi1W5dEHxcYW9pLAQNHniVfk9ApDTB3ztgZwNKJssrQRami6CNxUEb7QkxHBGkaJRaP5fd9pNx"
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
