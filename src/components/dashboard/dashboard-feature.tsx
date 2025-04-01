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
    "56VraSXES5FxJumuXCW5bYjELhVyTTAozd8bb7hi3His6kx8GCUFDfGj3aod9mgVXaNFP4dSAVgEoXkquPQ5y1Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpnfqxCycJCbZwSKnyf5FSSBPRnc46iBUfRqaV9vk2EXAa4dYptfWUdyY8GjsJyM778KrjB4WZqm9dh2zRnKxYv",
  "key1": "2DfpgWoWuxr6498TS21tMRJ2mDDrJGKLa92kAMDPhBSAFu564WKdR9jQSySoAiUA4MYVroHw8K42ZKWpWFAma9Mz",
  "key2": "5Xvk3nyydnZBpS2Q5xgY6CxysU5Ap54jAbv6KSv1sTsQRazn79jYix221j3ir89uP4ddVSeaxsFy3xh9Dv75KNTi",
  "key3": "4w5LSpq8eZfTXa78CyRkCSqFkJgoiByummKmET7xR4oQPZVzj78FPyt8YjkYA1d4ct2Rsy4uHGeLE2Cg9SqZiGU",
  "key4": "5GyZkRritugLFqr8FWQBKKGyDB8fuxKdg3zFcCnLCdwrsXYebfdSrAQeUqDBd33SasCcBCjBtefuyaYpjCmxjZLY",
  "key5": "3hcUwvfgCm33Wni6ErTcrEY6sLfX9wkQxdc8x3Z1yzq1kkbmoQbJ1NWePneN1tnbYfciNb7GGsSY1zeDU42LooSb",
  "key6": "4NkZwQVT891VBMARkiFnVXMZypgEKLcWb9944C4w5PUzKoQQHSiuVyg3ErvBd999gt6ERwSpeE8tpYNT5Eqh2Jpt",
  "key7": "3zgBxfZcfNyEMFsdfPBLLLaC6ErgpAnrCuobHCB1YNX8DBzTeHjrdqv4Lg8SwgmooPmEJzQLf7YGpromgDRu458e",
  "key8": "3tAQuyZmX5NC8YeeyEyWpSJ3DMcQ98uBmbsDHtoQp6kr8ZuAKAE64j11rG5jsAbN55U54g4BC632SQ4zGDkKGRJj",
  "key9": "5N2KVqGeDQuRB9eVuamoH6hggPUu5QeDFfsH9PfGssTVTag8t9xJA9K6nU3wJvgweaqk2Lvor3QscK8nFK7MvY2X",
  "key10": "2qpcxAavzmH5QxE74Aqg86dAjhGTW44UdqXwHXtHTgMo8wLqwtWJtJRzAu97uaDyjD9DYKAfTFYGri5PMGkN4j3P",
  "key11": "3CorgkEiUYKjyC5PRwpu85kBZe4WgifnkDdRgxuCDVbxUYqG1BJ6PxSLXyumnmrbdB1UEMZpEBvJardqdSEjmtfg",
  "key12": "48UDHPbz9jVS3MeeaWqpWhBoToxwhSFnLY3yBYQszHiNwY1zN6xANWTijDMTZ7Bj9Gh6GSheSwQZNYJJ98ifFi5x",
  "key13": "2ZczJ631tfByoPg4kpkto8sV7MhHbVn6y2HMonAAUvYSa9TuC77xA1dtBGXcoJq4QLpw6tfuw6jUkjXtW6ghvPe4",
  "key14": "3GJaiSUDzk4hapM21jf9SVegY3SeBM1VPw1Bzj846n1WVL2LDyQ85SxLYGrpQaFJikv33fgD2xPCmBLLFM36KTwA",
  "key15": "5JPUNkCwBx3K5k5EARk6yBbcehdhmS8rsqsABM7E17cc39C3vRFi7hPEmCP3woseydwDeRNyjpMNEjUMNr3swWNh",
  "key16": "5CZLPFDBeZKgsgnfVAKtoLNeZ5p5TNcNgywXABp1VPag65fTJcLCf1hoYW84wLQBAqxhuCYf9a3wED6U1cdxLbX6",
  "key17": "2n4iSUhLLEU1KUs2vfe1jPjCriqiYEz4hYzYuQjeHQvik5hGKNb7m8mbQy6M8rbBRmAgnt8kx1xohdT1TmzuTS12",
  "key18": "27gPXqDudtRH3peEu1g3V8amMwX8aFbHwNXk7avgxdHG1kD1ZiRyEmyMbhxRTQYhbtvXBhXjn6JWQYPphSdQtbFs",
  "key19": "5E7b4MyN94JhmUoGDw5oAtng4WgN8ukupGocvpxWHFKycWFxLZQeig4Am7ozAEeiLqTQqV7j1spLR6CJ1XfQXVq",
  "key20": "36cszRX8VNr9YuQtsaNXJRkSMGxrnEiJL7X2FMimrskkQFoVJXUNJsvq1ZGfSnY5cjjBj4NGzuNdnT5MMCbKqsmz",
  "key21": "2nmP1A3Pkn7ykFeHeyBXtCEKDqvwndP6MH2nc2gxhfSKNKHXn5nCDrBHLaLNTscczi5V6hLdkpfLvg9oSX2Dx2Aw",
  "key22": "39fFUo6NksLiM5BLE1qsZi7Rj8JRWoQaaSnVgVeDxLkdbAojmbn6hReTZeZeaNdnCnDbVF6niopFhd6BiJkoaGxx",
  "key23": "5u4RLDDXuDgC6CotNLALCwjJDuk8LNoYemQzAss1rotCaCVn9pE8sTAfs9EG1gPW5iGRDQF8bZJ351K15jdb1Ucn",
  "key24": "4LnmWrVEQdPMiqymxa4ni6eyTjSkan76uQMWdK2ay3hcKnZpFPbvs2SWN6VxnDgUG5ujyAfNET2tSWvBX7RMbc6r",
  "key25": "21nVEFZBFsZ9jaAPDNFq1rMjJ3BkgCkTHFK72YxY7zMyJvpFLkTsqKHyXm76WrkqJMzuw8JboUGjSLSSHrnwKQEU",
  "key26": "LApccNL83igbLhL957QS7uBvFG5W8ZD9SFDNgDBtfPNzAmPxGjJm88gt3fB5RfwtAuzD6DJPTBqogMRPLWvPpzK",
  "key27": "2Y1rNUmurY1W54WpHnKVukCeZ9tBgsAbEBYkQE4nbNf2eNEEwDANLryibtaT6NvvHAN7UVm1gCUpcGESqN7q9vJa",
  "key28": "548X7UocoAopeF6zt8vqJmG1uyVGbtHekr3sjNb3HJqjdXnN6VoFoiTdAuCynJ927fS5BBW1yNsVL5xGGkY4ZdJm",
  "key29": "2fvvA4oRYe8gtpnRaXrRYHa25tcdvnsRe4yjodhZDXmC8cBZ26HERF1dwskW7ZDFvkkp39szCnzTero1syTUsDYB",
  "key30": "Z74bKn1crnKnDfgpkjfxBwphPxDAVcheR5d6W2oxWigwqBWxR4V9nYNSiCKnGUjADb55cbyDXirLPHtm759uYjB",
  "key31": "3KsYQJQUzk3kKwmPmzuRdm9Pi9pEdAu5TUr9rkKEGt9qCC6QjHiY8QcCAKVYFmb6hRHvH1RkDK8SLy9AQxvHRyWo",
  "key32": "2KiNYVuKepMZeQE8Mir3hqn5Hec44oEej3mAYdnKuMigKWQFyAhMoeP2roW8moCzaB1jkSrFYvjfZYKmpvTyRscB",
  "key33": "4RHMc4yDLx5Ex8ehbqpLiijEWH9mJj4zhY6BCiYvNVNcvfBi6Ba7RNXm8gTdWQFZoDqUPR2had1wzcxVFDGb4syT",
  "key34": "3hrfiwpgh4KwZi5e3wAw3FYjCy5JrGnEvVzRrKvjV2U8QnZSKfS8kwLhS4xHpYVdwmozwgFpdC4veSQXiJYSnTdN",
  "key35": "3crW8airCpnUmE424Fuh6HPa3WcbSPCm9NDpKqrXBHeY9eEuo4SDVrATRThtgPipyH68s5w19GUAGpzfLr1wkmmw",
  "key36": "2qB6KfJaDo4VFN9ZYBMwkAaDipLQF8mhcj2icAr2au4tnEs9wTFREXDRUr1c9RdFHTZxwizRDA3crfpPb9xzCRza",
  "key37": "iHC8XENfdCJHLGdpMLjkZxSGoVDufhYDPDnCdrsKLx3VTuE9x2XyoUH78sAUUnHbX9DwkPEPNWKTRmztnj9xKC7",
  "key38": "3pPiefpqRjBmy28u3EDNWxbr4N7CgCvryQJQXckuEcE8Ctexjn6aJdA8siZB1jWaEB9wLqtpZBgHKCs9JQxHBoTt",
  "key39": "3Xf7Cjrnunhhdw45SM2b1NYtNdETSPDRgsUr3EPtgV5omR4xFDSwGMa85nQ6n5M7iQJpk2KrbzvDe4UTRuWm5YKg",
  "key40": "2sdkfQwjRbX1AnqXWXSN1VD5rpp3AW44AVBrKdzhjiMQRa8d75yj3NPgnRxxoDphwDJzJkccgtYmAxr6Hexy4ARd",
  "key41": "5BBXfp4GoPyaDSKKju5MVPbBCJPdBKd9DaaWQaZZsBzn2Hx8JcbTAhippM458sDLr8CGcYN6qUSUeWuPUveG2rH4",
  "key42": "5UDKDSBu2rmLzPC4a25Gk4cQVc1YFeN6FV9ix1qjBNNLe25fZax7KaSTvtYEy2jquAKSqRADaUMuiFYVuyTRhmSf",
  "key43": "5YVhCV3ogh6HxcPkYFWTpxubauePqCPESf47jPpdY5RPc9iCb3oJc4MvEbUdNnoHhpoxn5RkDobS3ybkZX4BZhuz",
  "key44": "3vTfXCStuVkpn41rZiNtYkrYRKtHxt9hZC3BERWQka1YYzsH9X62V3tG8CzViu6qpDph9Z7a8m42skTtMJFPxhC8",
  "key45": "5rULsfwFUccmehk1ai3UpRZe41MLzRnUp5rwbJnYeSRa5PnxZtTWgSK7CaBwgxPqg888krWrqGuTBbutGHMTuFbo",
  "key46": "3KPpbKAZfU9hzxwd4es1ApvqdZPU1xxmFYvBN4pBcCDx2J3PhxtraoAb2kRHmC2yjpaGdSGAtvhZmMZbWPe7FKg8"
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
