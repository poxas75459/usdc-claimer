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
    "EFfnmAAcZpBjjHZfxjohe49zePSso77SKSj9DWBtULjhQeGQz265JPaA6wT945ZVT5A2HzcNfK4u87aPfNvnBah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z8AfrZHQarmY6HA7PDFVsU2KbHjEgSS2JN2ULANF6J9t1mxk3fNn76mZNK3H6QdTqABNSMf4M1QMk5JWJBW47Wt",
  "key1": "44gWtc6jNBCyYQhFrGtumeWVfmcBm57Zpyw9RMd7XZaWkAiXcoXjgs56RzvZdWbKADspM2cf9rYsuDrkMptCC2Uv",
  "key2": "5K7xdkiz1J69CdcFbG5QPcp5XPw1Zt6oKsaneULp12gpgifTeRU4LS31iQh8tjWQw341PMxa5NFMgYkeF9pSSkWT",
  "key3": "FQ3b3NrUiFnzyjTvpHzGLhTLgmFSd1totDswmZwX1mX8sZEMmEcqraapciwm2J1PHy1XHqFs9XoocmeitgXeg5e",
  "key4": "4UE3xRVrm3AKrZQ8daCNSBcYvvSr46jLNmaY9o3gdhykJU1vQndnWUxVigeQkcqntbz9MDhyRcBKfJLem42AT11o",
  "key5": "2kYYVm4foKAvoYZQetXx5aDpqH88qMKQ1JrH1jPBhUwMdyH1mRoKCXavhfrTd5xrx96zXUX1PA7VS1aWRk87rRXJ",
  "key6": "4964EGr99iVJgecgGE7VMN7c3o8GoSHbckwfPCML7AgxGxQ8KScVxZDZX7XPRkdRWPbQf1kbwtQSknK5RAZFzE4c",
  "key7": "3FVLJLegb7TdSmxXX6spNVHgoUNf3DuFTDAbz3ofez5RfTip2EdPbYx4arR5Xci1eL2BAdT1LC6xXuMVfetKwMiK",
  "key8": "8wfc4v4V1LgfKgEh3BCvZM8x3UmPzfQEhgadCqZXubDKDY3zoekCxEtKHPZ3ZKCTaj7yDAr5g8QtqQoPe4iMvpY",
  "key9": "5ZwJS8pYu795D4qyjy7BQxDtKPedHqwjb5nPQHcq2MvSUJHopx5aUybmAXm2eoskRqcAM6YWKb94ZhFkQjuC3YXQ",
  "key10": "4v6sjKJ5mqQ65xLknchq7sbCsgjE6i9xrzzwJEUdyoJsrAyQU1zioSq5QTwEArQQiB713JPkoN1h8Ypf3D97Hrtp",
  "key11": "2oqeqxo1MGxkU7B82Yrof5cogmE8PJZo19iAcrieXos9X4L8PCKaTSDhXJwbBTnzi9JDm6yrBV27pmU1LS1Ke34M",
  "key12": "2s6qrS5uQ1uNsbwtBrqMWaW7Ax232aSzEVikmCFQQDjJ5HaLQF6WuCQSan7X748FHyqMLJCvARGryJPxKLV3HYM1",
  "key13": "2p4f4ADno5qSxpPxoxYcKZCLD8nSKqsGEVuoVEjLuSy8shdLXT445cxE6m65v6HcLzEur34xRVSZieR29QZUDY1e",
  "key14": "4649nDJLPikSNSSRAcdU8ynyXeUfrndgVTS8Lh3pEJN1S86DDjQZKgiooGbchbLW6W6NSzWxHgEVdjCGsheJArAY",
  "key15": "39bvSmJTjMmFZPjjQsjiAPjsxdstn8azeKT9SUM37xZj5fFuyD5KksWQCtBk8fgwXJ1jxxefL6UvHcGfeA9zDvmC",
  "key16": "3iGPznc4QF4fsxLDWB9FZtFS1jFPz3grWQYcifEQ2KxCZyteLRaq5L5SmY1NFCVWiSUqVa2y6rwXihSfV67HdEqi",
  "key17": "4zyiNqf2GggoMhqaaCxRZMGaBiBZ92SSf2QDF4nVXn147LECuNAscQxW6rtrZYLDRDAQ59HrrH7jCFPApUZCGzwE",
  "key18": "5wH1sVoHfXJHhma7BHvW6KnEh64PH6CV4ZWSBjtER2wsVzbZsGbyVuDGNnRdveF9JfCpbQ9P5GgnxHeEZmPJhdJs",
  "key19": "3EQmopTk7mNgGuy2Hm6A2d6Y432pRMyfD5BTABsx6SzXWcx9oCSbkQURXAT8ATjJadBD7UjPNDnZLx3ARevxib9g",
  "key20": "5wsoWFAmXq9shHm9kVa1yEQwYPmgDwJW4hzGrNzezBPSr6qKMGJjzeuoyQpKPZ6NFpTKzWDS6D15q3nPEAgvgehX",
  "key21": "r1vU8YFhhWq6UJzUGieBkXyvTDMgqkbTC2LiKB4fYFDAFrEaCHVZNjTQF6CjAPX4ySDQYdbqwohJ3SZBQt8dQQQ",
  "key22": "528yfobGJm9sg6iCJWkgRHghVQVXEMJYyq91qpTutwQy1EKuSAwu2SL2xQzeXZLG7Wu9gvGT8PszSYbJgccwBWGs",
  "key23": "3exWTT18ZUSMzF2Zn8qZhMcq1b4QmFBv4eLQJDfdycTHXu7Ly1Bo1ed2VJ4bjg5MUYNeWtP9ZJFShCgNpTVNQGS2",
  "key24": "4D9XFPXj5hgHrE1WgJL36ENsQBof1tQSM4mGEkdEt9fZEsTykNRfFsBPRE4CXCiwTGrx3bWoD18q7aMJ2cbANx54",
  "key25": "3N3bpnZgPjoHsk31YmkTbuWDhVL5NhBpgg4g7DtNnHw2fCvzHti2eMeVsZvw6CaGsguXvoXvprLfWsnntk9dSHwV",
  "key26": "5dAomd7KWt5aru2HXPFE3CQ2by4pzfJza2nZ1ntSAFifS23yr6RqmEoouA1vuWBG8toFPyyQAoxMoS1yKfGufjxE",
  "key27": "2h2L6L4WFGWcgqzGJCeNSmFQp4ANobMiz4paB7f8bFrcNtWzK7374tNhtqbCL5gVakvYmJTNZuWNkTVjSgK8p7o3",
  "key28": "3TfVT5eJ581AV7Vmr9ukRSkpYwVbRurx9k8GwWvBjwsRpJ4uFDQQAaEjCxCgF7s4gqUbmtHLMRRCSumbDzysFBt6",
  "key29": "32sonUPJ2xep2X92iMKbSAeyLq6ELrji62qtPK5CoancebsUWNWuTsNUFdgwr6s3Gi5fCSjdJMgHKffPDsb5dc8D",
  "key30": "3GNLU1HYW4ZetVYu6zxi4DUn2oEPgSvjNCK5gYy4bBmgr5QwfZJGYHVnQQwStnCftsUMzn4NoUQiqxTmvkVirc2b",
  "key31": "o1cRBugtaE4TqqkC84whyiE3zTNMkLacZ5c7Ck2xoWyeViWcmSS7ekPNuDf43zZMMCGMs9QgC2sRiAdcqfkAH9S",
  "key32": "4fGjNngd2FZHULv1gyU9KeLkkQ4ynVSRnEzGEW9TM5d8pXMzcmbc6i7FF2qU1ivTKM8evSuP62gjyuiYdoLn5cgr",
  "key33": "5mzLRjFwem3dB6rcBhKwEuYNeg5KKDW32gRkW6vmA1s93kgagx4phvLnZhMqfqFzhQ9ULUBuAeVd2W6SaMhcKpST",
  "key34": "3rtoWtWSPvewvhQPFo7korX2DRaUMFLWAsTifhSN3TXrpTwTfWgnQLdoJsaKZN2FvMGaPiY46cFsZWYtnn2TifYj",
  "key35": "24FGrFF7Dqor39baJ1JenDCPv2ZVuvKNiccAZ48zFjckySM59iHUsAF3V9B1Zpx9WF5FtJ7aFSf9bNxyorcifEwN",
  "key36": "2speiD2d5xDHhW3tEX3BUsAGq1SEfWH6TN7dhtqYMGdqYRoExWmPqhsZRiBEWXgqWRcfDB83PLf3gHeabzLWRgmY",
  "key37": "5YJ5v3eRfGsxf3yo5dmFCDm2UmAiVSuF1pF9pSMs17fkDEKkD7Z7VijEYHgcTL5EX4Jpndgr8kJ4Jq6oP9532QHx",
  "key38": "5VXZfzyAbD6cYXzpUcRLp5ji8RiesUp7giHiXH9GibaUWZ8iX5sgHb93fWTu6k7BGXD7yM32TC7AdzVB1cD5uZDm",
  "key39": "4VJdrbXQkXAE5N2ggFevwRSyET39GvuwGFMexgcughw8yoSoZ8Ca4annFRi82dzcFNL4yrea9epTYnQsSg4UnrKR",
  "key40": "BPteycZ7joZufu4p3LJDiK7gqwGt1wR86PbSZsy2ENrfBF2123tuz64ZjXpWJ9VhNR59VpydXCar11cmb7zFh58",
  "key41": "4L8LQSgjBgSt7mzgvwNVmx4qkTrGuheCNUTyyHs5SR2nQDtPAMzcD28fPFbS9FUssvtjgNPEoDd9yyhEeghr51ri"
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
