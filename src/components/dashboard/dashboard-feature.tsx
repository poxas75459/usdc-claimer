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
    "4uywxTeWc3Esg52a7EcE81gCA7nh9eZ3PshTu5KXmSVtbS9qcWaKeAdLYbVAFJbCCSJR4BHfBLcemm7GP6QBP2sY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kr3M56nnC3Sx9wnQLTMsFaC3EKpWhB2u9ckhyXegH6XBf3tDSozUhaSv4Km7WrZpeGMrKUXjBHhocWi9FRL1PHS",
  "key1": "6hcXsnJbQMGZY4h6yyRC5nCL5tG2KQNqCqDxxVQ7oR3bHfBF9QzMBjZn7QJzNpGivqpR3WSpdazr8DWFMQdMRDR",
  "key2": "28sDjauc2oJRoavpqJdvFyfP5LtuEiChdZiaByoWmHEEp6MZC4tv6Zjkn8ZP6m8t5AtNALSyHoinkfsHq536cwkr",
  "key3": "ohq1afYYyoAGzATBAbyVHPGxtMaemEofAWXtzuQv3awRvvHBhsH7cUbjPYjVmxxzLNq9bY2JBbp7trXCmkgHqE4",
  "key4": "47xnyHRdvY6eshg2QhVYYnQCmuhAaU85ktzpfc4VWkHAWMb1AzTMNWeRKXtzLU1RQTNnE4xgw7xAda6695tTZMTu",
  "key5": "4THvRYNceNLFT3R9DezSyzDhxDe3WfbffZH6UXqRzCkHduYRApVp4R67zQptuHJdQZnYnc8WMUyeAZE3cemZGTwL",
  "key6": "4wBX1HF581YN13zcGdEGtjy6bzqYTRtr2C93MaLqwsLwz6dCn8UcGjtkzaYRGsHYVhp45ZfJp8AqdbNk3ypZ3UYf",
  "key7": "48GcQxo6hkYkJPqtQkVwpS1E9QGmAnA2n5zMgKEwcpcq5qQnnD7AKYoNtBk4Y34oXUNmYiz1dtoQQMNyKjNtcTZ6",
  "key8": "3FQnnQWRzV2huY6jooCmrGvjF4VPZ99KS2huQc7PpjkctEkPvS5ayPHuJCWG6iLSdGAC7MLnmnDiFYRViWr1cwi2",
  "key9": "rnKsS5t78ZoaN7j66rb11qYCqkM8qr2ECgVwaS7QGrovSqdTYSCSkEusdsuxLfHHqisTFLrcKGYQQozmfrUXA6V",
  "key10": "29zPn9ipFQPPBi3CTZTsRWeNp3Zkt58kWW6kh8Re4KV97SZCwzW38Cxkfe4zRKAR6CmKE7nAxqbhSKKCMWBh1L6t",
  "key11": "2VJAirTtsjd2dCfPUpnhB9BN8nKDNx3dwcbB1LKbxLFajTzseSnCRN8C1RSricgVrwHY2XMaK7PpPoaEhZUAxN5X",
  "key12": "21C6QwBsLVu9uyew4QrLwvi4BE1imJWRUP4QUJvhj5wdkA37FiudK7nF2mkgRyXguQQtnMQbj4GJCqhuCATPQ9tB",
  "key13": "4BoZMYvFieVMpp9HT4boiakndPqH6NGBAWQNABd21tfVTpVCmQUBaJAuUQDZWYorMu3J2PHa3Pqt9c4PP8yg7pRL",
  "key14": "4PunxRWHv7a4dhG1ZjikV5QJGixr6W7fbx6WZz8Xwrrpi6gNC497o3eiEsuVqKfDGS2s8eTeHKnAh1X8dZc7ZeFY",
  "key15": "jnJHhSATcB7Jgt6Ubs2Ym7bdYZaEVsNHK5kqXrUrRHfR43GXCLkxJCK5Avmcb2DU38AcuKrrtBDx7brFCW9b97d",
  "key16": "53nucXXXzVrPFWymedZKaTwbqrsqxnmZKyuFZ2C3APT17ukUydcbCJunbEb3rffJPJ35a47ZpqRvE5vLPDHGD9x5",
  "key17": "2yyAneq86m9oHwe6M1eDUJUkqKtbTZFEcWkUSaf4JnYxH6HWX73TZtWCaC9tc2AXVy4fBgCYPpiP6KdajqeWzsDo",
  "key18": "4aiKn9yibn5CN1aXSPLwM3ZMyxQpvv2CCUvtQLwcnxnWsJ2RN52YY695LQFeEnUUSUzprxPcbVAapg2KXzEAjXKW",
  "key19": "376Fs7bw2zrXGKy4vgb98cAqNeYhYUGRN1ADEpdr2oFRJL4CujFXfEGY6duCvgui5VVFymKBRCvw6YT1aiviBTKD",
  "key20": "26NDKgTW2SLzVLMoTbupqZeg7jw8bBr3ELUaUn9YQhmdsMAmQyXq5B2mneYNP3CNtL2XJtS7GkCz2sSSUmnP8hi6",
  "key21": "5MEsEbNG1epJeqhSe8En95oRa4YLLjc3wh9sZVj44YMwTUWa1eLqmunLmqw8JBjUNkFZUD9JPcELZQzFihwiBdD6",
  "key22": "3LCa4k7zVe7hvvSDWJHZUG1kW88ViZCd2f66ETdJ6eWtvBawaCBSFvQvBs1g3BDjbwGXT5x7zsbTY4zvAS9QZvwM",
  "key23": "5Nt9Cq7J5KLum1krxxycGAiQxUit3cC1LNc7RAR7YyJ7Cgg2x8vYfzf6MFGKCG2cUppwU22jsrE7cTG73ma8vvmK",
  "key24": "2CF17VHQQ4VGQtsbArTWyNh2DQjFvKNeGM2Wzka2kYHfMUqfSSeDuwQYmj6bZaNUmNetk4jws3S27qoPqkmcXbJf",
  "key25": "4wWWfR72vjqKVAAaoFnfGX9Nruc94Wobi6EB82tzn29HvJ4fwW85AiPe8ZmYvGfurPABWhk3vHtrDXzmP9qz4Far",
  "key26": "4CQeewYNX9wR7T39J7GEuu8veP3qqU3vHbSDHtN59zvnPfg44a9jCN42ZSao5BZmAt1AJKw5YqN1AKsK18P8bEeq",
  "key27": "3GjZ1eVLwng6vRiEunWXGhWGXN8ZnR8EWVoEanYS2PLcZQmJf1cY7fGRqAU4DqjF6Sk4F2SuURDpnJqpvD1brXdE",
  "key28": "3d7ha9djhpo2Jzn71Tmbdx2XGJx1n2q8r6VWZm8bFNCG2gPGxfP1Wu3T34GuVewBSfDh9DaZY6pTZYCoats4ZRZs",
  "key29": "5PX1QBmUePUckNaSzFUfjneouLq2AFE18tL58mVqdkofHKRx2zMh7Wk4TC3VLSkgZiX3sHoGK5sUDJzvip9uZWf9",
  "key30": "2VExQMDhK1ohHGmXmxz9Rx8bjYteetyQKTc84xhP5F83n6ubz5KRZzc77DQLqRcbKhkMWaG12XxHqArwdqFpKKd3",
  "key31": "5oX3tWRRBihkhWXeF33Qm6XDtzbc2DuU5CcHvKd2fxA6u3RfhxLmnNBiQe1zKoYEUPKidAYWWdASBy46xceYiarm",
  "key32": "4KkvrwBmiCCy6xLvN77zCHENewyrxfw2GuZmbfUeMVon4DLf4HHK55pFe27tL62S6sTxjUETLr9pmRfTLQZG5MqG",
  "key33": "3Xivj6YEVKB4rVfu7tQy4awWrQr51zJwqztQ4xemUGq8nGBFfmYmkfjvFAkLtuL1iwJgFfQqwsvR4rtbVdWNMHDr",
  "key34": "3VojsuqfX4oKL6qNpHnWibCXDuhyVVR392FiAWGRm1czNEWASxnKT1hrdPhjkmk1N1uaYu8nCrp5GL8mJcMPNAEd",
  "key35": "25m1QY9Jwb5e7NVXTYQQKfRQ58PMb7GdmbrhiCAsHryq3f1j1MX8xcU4modMysWoR55yXnN8DELsDBdonYPddDFc",
  "key36": "3LmFn1BCmenM3hAgHuLhQyhgnCQsrqMjY2jXmcjMQWraXWP2BqbDhZvYtSdfzyfdFcFpuWAxWprNBhCkUnW9mUkM",
  "key37": "5GyoSVSFMBNAUpass8TugzyhaUKKZFGAUCbCRBmGY4SJ1U6n51qUbQNry9x5j7c9LndcvJguQYKqkANpufpNzPq8",
  "key38": "5TCS2Ctvkg9BP8GVkraKveTPUqPL7dNWWFGPAiJ2sef1rafzRfeNNJQRMavrVY8YmhXM7zFhY8NDtAZpZVSpCyqM",
  "key39": "4kRt53nxWCJDwcsyy4zqBEzRsVw6oDqixkA6nkdwhyT69JL9ZNGeJZfa25ciSSvFyfmoYSZLfftHxsJ84bsDqb8j",
  "key40": "5c4kpMcx2sBD5TaomCdZP2cKegT2WLcnXeqBbooXwqJSuGF5zFVpSiHFuLPD2inay9FRNHf9TDPKWnwMtHbNyzoG",
  "key41": "62XbBWL8rJiUSVQzPX369miaDkAhHE56RxkhPVbeABAvwMkqiHiPE4ffRys9FqFoEYbCDDBc6MuhXZjaBYcaiAVw",
  "key42": "5tbhZ2vzqUJg9YZfNVnrTJz8H3CMDJaPfNZtmwHxU7cr1yDDN1vTEHQnCMr4QcuG5b8aiiMtwiDn7V7q7jgWKfR8",
  "key43": "EArM7qnmJCzBx1sW7X1Wk8x9iP3WZaZWCA76nnbSqk5uDLmNvNju62R9zXtvPUJWHS7jUAjZm9dfxK5y443H9vN",
  "key44": "5wYkLBc37NHAdccoSru62tHseF45Aj3LSsxmF5rFdmq2arXTxxBQMjjy59JnvbUfcpGGswoyyVREj7F6vYfEqYaz",
  "key45": "3nhdYUsw63awXJCaBzEyK7dbEWLFJSJmnnpytVCNHjtQb8DFfA1NaaaR49EiuWo8z6RKAt9kXM4PoaexfSp38As4",
  "key46": "4dABhp7XbPoguEY7FiHHYvNedigbV8LH7ShPKZMmVhEj5gdQKrrAzc3gubzsSXMmJLp64nASQKwxSZR7Aekgbdiv",
  "key47": "45G6arsUXC5RXcSGYSLbqAwjjx9uHbyaZnkbHmGSyZxSiBaacUhChL2A5BFEoRCPyvgPFm5G3xJdz3swwb5DDcJd",
  "key48": "2oA6mjrahZuSqtnKwe9SNq41xShrQYQSHEDCJ2iEQtDAPSRoADtuuq3KPWjZLUHcCPQF1dPtp9A1Y2hQkyfyDCNV"
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
