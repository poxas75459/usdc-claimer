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
    "2ASqDcbajBMiQFir4ZS4PbvPvW1rtkSThctZemhpmEetNczPy44f2sWLVFXsZWrSPTxbSYbjrMEyqqzNFPs7BKNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3LaBYLYu5V4x2FvN3W98EE4SDX5vKXmj5moUw73AG4emSByfh2jtyr9rA37AoXje5HNWcNF5GhVHZCshkf7XFv",
  "key1": "5ZLA39yoHPHx25B7SWksQGkcrkUfv7Z5Rqg2m5KJndRNr7fJ12WgPRg2U2SbSR4tMegJ44jtHdCragKYfCkBJqxi",
  "key2": "3aqr3Wt5aBbBqThumGJXp265YaVP9gpmm9fJ8nm9FccuGEAhtfqL7ZmhBkW5ERj6Sfa1TVqaWEudK6VD5VtiJ2jo",
  "key3": "dAbvebGGH37iRcVd6vdvbUqYFbSHyzaSs3it2bJo1REw7Lz2awbwVHvUrpySmQuf2vs7R67JHXEo2Mhfrnu2QS2",
  "key4": "5tQkBeJDBb8NUneVPBf3zobcFRmTWhGFMPXVvYWnk12Z44nqggmKGixe5he5MDa38QB6VK2s8Vg2vohPD4Rs3MLU",
  "key5": "Fb7gYhQKpvbKhWFwA86mmNBY499MxdTPZNr15KiChSVZbsdboKPXxvyrdpQFamDS1JCdpZk9BtJnsvZPn7BT7zN",
  "key6": "2Cbo4nKhKsz3Qx9NcdfkTzvTgQsM55tpcGZ5quK483GbXTuH7WBmNAc6T7SL15ujQbJe4dpatcVJVjJCJezg6njD",
  "key7": "pFcRmjKsZSX9Nf917ypSAAiHiEgiqTfe3wYuASfYPmo9y5zpvNCBSrcMByb8qHGwVZAfa8QnXa1k2E4kkbncEKp",
  "key8": "fKdMJWdrAFzUyrLsNVFSA6d3JY83PN7cyGjQxj1qfDAfYE2yePHd2X9xecZ9EU3gz4GQtSQ3ZdBG2hXp1PPkses",
  "key9": "52HDZPrRphoUsn6DpEvKttMrgvkPw2Gqnh3Rbcof81LHvYPaa7fLUjoNpbdwewXoBNuc1enkAZ4P8SQEpZnoFixC",
  "key10": "4WbxNGEerXGQ3X38BPM1ABiVyHbJ9xEThufninGySe2wdz4UbF2p1H2Ae16KTqUnvUPZibUbNNg9KiqoghKtDtNF",
  "key11": "25f48BMcrBB1HadpHJ8ABEED3byvAPvrs5V7C64DBSLPG6oT7s5tTMwPWT3epXaDpPZzd28AC9ntUAEbKmiu9Lsk",
  "key12": "5Kp9nAwcenbd8dXfcQpVHGBQQSSiRN9eb4a8MoQLpLsGkf3YjMiLsT4UGwoyfxXYaTheVhAyZVkvBXRXvCYxv2o2",
  "key13": "3z47cfXsnBeA3tYZe9ebL3GQYXk5mYjCLgPsuZ6Vs2oW7E76qJYHeCF1o7GumbFJmmE4BYA6MH1UaiGDg52Aa4pC",
  "key14": "3sCYoRAHLSokufCjtNAsjEfVNAe65Tr3HkhEaHY2q2LYPWpw7jB5cHpLNcSWdFHH8AfTAApb1MBESwBA3Voi6dFN",
  "key15": "3JBNsKEjTEGm4RQnAWbs3g6VocRsjcE551bHY7Fd6JWeXLqiirKE2NGRHShNqKwiuVKytKsC1UVKpZcQLufD6Qrf",
  "key16": "3yR1VsGxZgXvksRUk1w2FeSWhMQXgtHm7oJTrUPK28F3jB6GZeycKvrXfUtVTEj8qjEQejuxoXmFF1QdbzqJYaLM",
  "key17": "7jRUbbvhFB7NQ4RhD9h2C612LGkEbqtcAHdtVH1hBk1mWgS8pgvjZCmQmZCf7tq9iadaek4RmMmHkoy9fTwuoL9",
  "key18": "2QcYCe2SKoxK2zkiy59Asfhv16xD7QkdMEaGfCDSEjJiR438F2aieskWTAGXp8gqD9rKihXxVyzm45QJsxi6UksG",
  "key19": "5CBXpYgCzE9S9pPLFF9ucEhYfjRKfnDdGrnUZBkzCVehEdAMJkdcm1Nc8fmwDUqwNHjkpUnVhGgqckUv8FkfXLZM",
  "key20": "3bpuPt1RodXRHcdhAuE4DEirhtSUhYfGCbeqt11tRHpzisK1GzArgeQfwYiuE2bqSC1b2mSo5XRCSoX6YkH9HsH8",
  "key21": "47nVBmt92CPeSm6aBiVFqYFWacoguRJtpCDJ5VcaHz3ioLGAYmFXMGR6wAVUxirbtmDsJhpSiw6AwW3Si4iYmSVT",
  "key22": "Jvw1H5Lki8XRoRfrG3THymji6pDnRji58vZxTQ8zd2w3jB2oFK327qsJ7UmSgDShgkXzFW2mgyGbJU3J4BmV9bj",
  "key23": "39QxzanPjg2ZSuad4SPRnpQETX6QHU9LDAkvRGH2ZRuvzLWrqSNgN9STzaWwtVhB61fpxX1G3kCn4zeo3z1KK25H",
  "key24": "25Z1vvGh2gTNQz1QLBvx9ed926ZtZRRZepHLzVcVPiXdrkrN9WxyagbgHRKxtPG9CyshbywMYRYoZYiEsGM7SnTz",
  "key25": "PAY4QxwC4rhJt8WrwFJFpUsX6ZUYMjC4RrZqqG6yqfZ4E4c8XA1FeYH4uaaweKAax5TiofTcQF1Hkd74caaacWH",
  "key26": "2qSwYxj4nCBB76ctRQNTnxQHCR1Rgx5b5wCAsiLVEBUfMTnerSxNtabuQbkUoADEb7qtfFEHAuewQCjzTzQr4fyx",
  "key27": "4rHNBbVAUoqJiiSKkZn9KrKbCnYMdJxp7TJQZd8HGyHpU8j4GmNtwqci8ESo9x86atpGqHuJvjpuYsFy6jwBUEqK",
  "key28": "3611qvns2esSHqrWQpgJs2zYrssum5RWT7xHex9qQgBaYM5fdPSsUcmdaptAP2zQwwKr214j1tcwCEtjWeMtUKNw",
  "key29": "5KbKRkeVL67eQDNCWLuz689TfJcpMSfjmyfWnRg8rPwR3amDwYgPkaczzwdGtrCZaTksERmRtg22VmdUHGoRGF8U",
  "key30": "5czT8DQptxEsvE7xZ3pibes3S9GHtVm2c4QjByndUefuuQqGx8ZDtnrse18xBVYutLj67d7oVRbUYScydeiSneoe",
  "key31": "hFGBSHSmD1eeeUfpLoZcZJ1U6P2PShkrhxj6ut3KnG3ohzMARigPm9pCB3SfsX9C3P16JrbKTDUarB3NMcVstgC",
  "key32": "3uCQFnxGehc7uoqYhVxFu5TYwmSNcSvsVfmRJjwkzyMCRcn7KL3Nm6pq1nUZk8oGhFKni2ZhEhX93kJZENPpt3Jh",
  "key33": "3YDyHhGPJkEd1GBhwQrDJPUAV1MJrpZTHiK2pQVd42R3TJLBKQrcZR1QG9qUQtwNpQJY6XXRGdc43CsrURcpDTBV",
  "key34": "5ehKHV5H6M47Exg1huvhh4Gwz6z5J7Cz26fbEWVu5LHmqxGdpPC7ciBf1UAAbEzhukVKhPMWf4AxM4bnPZdx9a1Q"
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
