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
    "5yBsaSHAGk8gAj2y5PKhoVcRyr5ZFiP4nATtB4pLgfMVmnh69qAE4nsmQiCk6t8Di9MJSSwg8zQvdbGrHJjGAGsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sajZAo7JpGXL6JAro1dHrKbq7XP7A7LEGADvzZTmRSFamRKyrKhzf391Xj8aDM1kwAod8aZNTQnomcS4PCrtE5N",
  "key1": "9922X2AyP4KaiPg1Jf2dM2nCvUQDUnYgXEsYfqd6RVTQ6JCCSCeCwgb1TKER7wyEBFWmrMZus4qrUjxyrFGULKp",
  "key2": "qKdxZQ6tqceywRu31q5efodgCkSoKHW3D5K6n1VQxVQCzviEvJsudmVBoqzpfYpoYjRLKBuR8JgAQDYSbttYpq2",
  "key3": "37AZaiyFQtx7gKJF6S4pQPo9fJugzSUNdLoJHd1g7ssUeCm53w87Y9JB9pFoHGpfffr6TNNEDWLJ4PShvSAdtCKe",
  "key4": "4hkkrByUb9yemf8YfDQC96fcN9uqAYcugMN5wb9gpeLzBzCVtQVAyqsmaE7MUoAGAuPvojHgxHbzvpTE49gc94sn",
  "key5": "GVkMpvDEWaDWvFRcCVjWyzVjUQ5niXUSrcNTA8nUfFD2VyRFVgeXUu3LZf8g8AieWq4bQYputZNtDkGdVf7j8WZ",
  "key6": "5dKqcxvMcsYWGanYxiEaocsTx4JCz34q3g4UvknN3F7CsWr5h7nP9yW4osTEoq3n45Fknc53BFqggPhNqM5oZsaz",
  "key7": "5Db4L5Tqwf4RSH7Yc5FTaJHfVQXUkynpvccTuL9Mu26ABDinMQEzdXu2r9GejvtvfbYWCE5NdWoBrY91KaQ5ibVv",
  "key8": "4ngiM36sKDxqScf2hZLUDoZFMX94sKMMUZf4N2AeNBYCUUQLdt1UdR2iiXggEn68gQiWT3rArkRFWupVgb39R1Pi",
  "key9": "5WQhMgyCoqf9whKgWTQVJKRT7BN66NBkZVqe7AbPmgsFjN4aZVigHZNXM7uDLHnpzFprN3QuSKs6Z34XCtjVa54f",
  "key10": "2crpJTQvjbAxUpg7V8S8TCTaBKvwnAH4nVvU4CUhWon4tbJUbG9svVW2AmdzUEQ85Ze1HEVfGSDoiCP1Psk2ASRr",
  "key11": "dsdnz6N6JQMBqpg55mg9EtVxACj4CQKV91cS1dDV5fJvQ3Azud7vPaBCrm5Q2U4fFY4hkPUiCWuZsEFCybwneM7",
  "key12": "3zW1KVNbwdk9fK4a6H2LP1oywEzDSMyATUSR2yTFnWyZpBCKPkciXX4oDdmkSYr4aAvDVdxawTJTbVbPFsi93sEt",
  "key13": "5MJ4t8BMqtHcmfNLac9ybUhkYQLQHDG8HxKaaa2FQKy4SUxsGb4NSWvCGn25VL4MHWNWv4gmYf7Fwd7x3zpzPDvK",
  "key14": "3kYPMhQ5QgVD1tMvu1ibhMgJNKhES4BEYbZScqnxcsjawJBQndPmQdxw6daJRAMWFZea6GGH1e42BjBS25ZYHmwt",
  "key15": "4TdF9ybCcCtiGWm7u6o6krYaKKkrjpmAkL29ijD42wcxY9KFTh2QXcAofefPzqiRzpgYkKGd2nbnw56dZrAJ7RiD",
  "key16": "4UEgifSzfGUQMbDuQzRP3iyijDfK3GzVtrzHAcWQNqcKvhrAfofZLK9iewCg6F9C6mFVxTZ7Aa38qMgrUaYmBBAP",
  "key17": "67m1EDKUkszs6u89YGRhyoCvHTMx1PvYSmsBHCtmcMYRsWyDr5kksZYCkgFs8pP15ajVvKSNepbK9e1qEF9Qxiww",
  "key18": "3iFwDMad6bPruoedZyqqNotof2Yv3xTNc7VrSB4E3JGB6fR1gcyKCJxTYpBj9bhwHXEXjtgJK6Pq3FHD7pa1qycr",
  "key19": "3Rxqcq2Uqcaze17S3ed96yNp7Rgo9j8wq1MPv2zJH12VBKPLXL62QXW6dKwcLPAVCV4tDhqteBadXteBLBCPARmG",
  "key20": "4MTq3UJ88GV4WY5Uk1EMx48x7sDDoGwgXLiuxHigMHdf71Q2NC5pjR7UE3Bu6HFhvbWgZHug83KyzUZB7t5tTyME",
  "key21": "4hDQENgQDvZ5o4ZLHLQ2mwvKvJgthusiyir8goDuP7edARHxiWqkb7xWAKM8MEJpAMZoNnGyBeLKZVUKoa72wxqw",
  "key22": "2CYYL8qw62sSmJ7N4B5zJXvwrG9UkQ5TTPAw4NvGYnTTQ7Ko7tpH7CTLHj6DSDUMCYqoZNVp2UR3LkM94nrEQCSU",
  "key23": "3GrsoS7MFCvSnfyMD5VhAPPsYj54Anp8XxKgCMYZmLfxAz7XKZSaPMZbFWiV9BWoPr22gHjK6HY9ZR4p9tov2rjM",
  "key24": "czxaDkdru7CT7neFDQFXzmyWHvPJ6K3RbCs7Diy4XBvPVzwjoF694DSZu2VntjdrvQ3SkmwRpubfMkdbXEkcbCA",
  "key25": "2Hv3jjjyHm4dsu9x6m6JvRaW5sDfShDnGdeG2XNrY19ykTbnVzEuubDD3Hv7XifhH7ifE23Dp6VAAyi5cwtdPH9c",
  "key26": "3TfMBCeoPqr6T9FopAknNN2BNuUQnZQQ481nMmZjhZTmZ8j8XtWwXZpGyDwQ3dHkxxqJGE1gvmuNUqr3aJPTLQAD",
  "key27": "N9bEBorPaWjD1cTD6sp1UTyQ7XKQTkYCkEyjPurmnMrtdZyCXr9JDgqCZumwhfAsUfUJ6QQE2QndrwGTYicaBAG",
  "key28": "4WNpNp3UWumQmNCWAoqNyWRG6cCn3v9QY1ncFre8awRhQyyjRxxEhBnNAUr33zWQ8UUrZgyABnMEp93kWmFDtWcf",
  "key29": "4WNySZknmF87Q7EY8L6boFMCx9CTaun2ePJDjtJhZenZ8QwDV2VoAs4rNBZtZExtSevTjMKC3bRS6nKQVyeVdSiy",
  "key30": "6Uscsj9DP8enXLe8JiANPNHbgrDwMDhKuAh3eWQK7FSzVoqqGo9A4zjgaPMXDHCzKEtUtab6Wp549kDoH8ytbcg",
  "key31": "5aLrniuJxS6gLNekJfQnp4XtDpZkbLTaZmz3aGednagZGqU39oFpQEa5phdgVMLa52DSxy18RpiqBzsX6yj5nZXL",
  "key32": "5CR7iF3w1vVffrAT2V1AX8VeuLF6XS4UeDpDo8eZfRWSJggRBk7gzrabG3b7kRm3zAciLk7AtzhqSStFqGbSpgiz",
  "key33": "2rBQPM8KXMmELxF8dwSFDgumU7pMNAaxpRhBRZoKgVUZWM8uTKhsbafoxCMZeK9qQ9QdzsWPYXx39ZdnSX5gp4fH",
  "key34": "5h5aqU4BHmWFfbKaRpR513ueRxQ1kXJNLiu76Tm2mES8RntMkXM359PKNHpw77RZXEt96RkTkiPzH9ULvpuxLqvf",
  "key35": "2dQJmQnkztVPFcCREmcENCjrB7WEQME8yEerCFy9PMFtZgc8e39YxSbN7BB53P7jRe1gkc625VVpzt3q7xeEJTdf",
  "key36": "3yZx8ZvHuw13VLb3Xi2L4BW7Z2UB9AfZ2ntTVyxuDrHg3ZrUzXjLaSVzWyMzVURT7vLVCygUPdxU4XAXCgDFkggo",
  "key37": "XfYa1NLLm4wLpj9ZtqheZmyoDTY6f1Ni3aquw6SHUNur3ifgcxFbbuExjzfFvPctQkacsxtwXEfU6eyc9dtX2YF",
  "key38": "hkS59NwAVkXNmf3FmZAxYjiQFfLJSRChNcb4TaLQ9isMdFyt8FovRrJH5zH5EoryUQGwApXpCmTpe5UbjrjptnK",
  "key39": "5xm3jHA8wAjotoB8G6V5CjHdy9TaGYwd5gsX6t7iYwCj4btAsgnojPaY1Rg2hzkh2NDkTXGRND56taYKcyf9Gw2e",
  "key40": "53txfBDG1rzp2sZ9S6PWRQ3ZoR7FZqn77ncC2H13Az1S55Dq8Z6Sf1P1szxRzpfFArFzmqvpJaveSVwzUkhA649h",
  "key41": "671AKSe8xyFe3fjoaaUUivbkSKsrFy11TwnL7otuLUs65D5oLLwT3eJ5DLXtnf2CZeGDfzEDyrnMbotwNgQ9r3F5",
  "key42": "KEjp8aVw3sZL98QX7DQv7Bk2wd3ddUKqtWEBoUmi4EdHBzxumZia4j321Dtn2QyGFCDd1YgusH9dveaft81ptT6",
  "key43": "3Nwio9bTcJ7w5MbzVt189qnJUp65qjXAkiNpJep9WVJcMe15cKtNT45KmoNyPt8w9KhDA8VaiodVDW1zt39ZUNAg",
  "key44": "5Rkh3ci6PDHKqwNaevYBNvCK5BcxSUWKtRSahiDbo4LupJUhaKdanHQnpi6cxrC4HPBUwqgdNXwem5754TVb5rAj"
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
