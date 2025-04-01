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
    "4U2uFPanrvXwSssju79nj29HkzNREwqQyodiLFEFoQQ8BA5KBCo8mPaQraG7XSF3tLLtJrB6D5v1u21kBr9E9xDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wnnU4HDA1AHBVkSgv56D5JfmHM3CppS55SJhPqN7GQdWeWZhGWud7GL2hUsZYWtFpyMofnJWX3CnzZMxDQuVG3T",
  "key1": "2FshSH6iMSypS19e5rb3xBHojhj9CFh28dRcTnTSeDZ5Uxa7NiYaNMx5X3HMYo1AdoHWvuytZaNtCNdCTSrd6Ehr",
  "key2": "45CrkTaFTfNHh4uVN5F5b2zN6gWHwQw15gJYGjgeAL3QSoAzCD7D4fkKGczuqAry9q7fqs94z8jAGjJDoqeSNkC1",
  "key3": "3Sfx18uHP5aJhStiTbLr4vwDo9wPZiBPEJXwHtdWpRjeGziRag7YpdE2ehWQWqLBkYnwTbx6DJ59cX9brRyoKFE4",
  "key4": "5SuZY1N6YvmLStR5dGujNsPb4jo9kd7htEPAgL699WcAgfHGzWXG2rpjGbEPKjr2XA7WFDbTckGmieu2EyP4pvGF",
  "key5": "YnMEKBBi9UnscZobDqMcHnje2Ui7tghE73jQaoFzroMXkK6fGZxvqK67U1PKQMBWjVzAxWU5Xj9ZAy4iyQC2XnE",
  "key6": "7JGQp1ni2BHQ6iXC1u7mmUdckscghcxxU8Ag7HtQeHB2QZJ4veFaRcDrGQQawXLkfQE6sE3LXMFr55yL2or2ZoD",
  "key7": "2jQhaBvn46amF8ZCXe8ULV4K2KSWRrvhWCNgQfjVi4mocpW5n9tmGfm7N4GJL61DVXWgsV2HWfYZEkwKe5MhSLob",
  "key8": "5fyRzhbD1aVX4Kroxhy9jadV27QbkQfgRDARBUud6vH8G74LRLVUAuXVz97KKiVaMCphdeVEr73j74zu7xCfxHKH",
  "key9": "3W8avUfuvMKpybR3rHdkSKyewuJFLjfLpB4WhVrt4GJ2Ue3HavPv92RChx98HaeP7Lpn12A7u9xrgSPQ5iYR33ae",
  "key10": "39ddSZguGiMn8b54R7xCD6zwLNCVQqVbbS1TEq3B4H8wpma8rvYHJcwr8CsRnNCkcGknv8PecnKbngvj7sdqPg9t",
  "key11": "4jkkSYy3cdb4DxNCum3AzHBo7cWfRkvFjVWPw29WGLokQic51VEo4DpPUFGcPmUGRLMebkfKFYAdZEeAjSCaVCdC",
  "key12": "4QnzVHuT5DASCY17xAYfVw6DNnzz7MBiEeG9Wv7X8SyX7WwtxB2pfGnb7RJuGToiMMmqKxfuVv4BSfnhLsjq6pQN",
  "key13": "2nWYzLPg8gpAWYwmFVBDfw2XDtDDSrpsqyAGdB3Jkgrgpka9ovj9rYBiVQy2SmfZqZWGAwhMhgWVRXCP2NNnNEEJ",
  "key14": "58DPpnTYbkFDDpLjFxZKwgMD327YqQ8tFA6qt7fQ3bzwUrsK5PZEqPurbnrGHmT7C5hRQDF11YFKkGNQq1wxydgw",
  "key15": "2cpuHExCjUQT8qpAzcsxzEXriA5whsSMZ1QFAyUL3enUghiwcannXW1vEMmH7pWZfEN2ZdY1RVtrMBhBsUm5LDy2",
  "key16": "5GyZP3faXP36dH1v9GLqNy48khqhhVMKQFaFbDTngD8iNoFQec1zobisad5F1iG5H8qin2t6ADr1iZJvbUAJHvoJ",
  "key17": "8kKzjjmr2LGo1ZJkte4gxhzVJvWFCLCYuajumgGTYGv5QkjUjtvrrParpGWiK5v3De84Dcg8GF9HN8QnxnfSpRy",
  "key18": "rDvgfB1HQi7aa6o3SwYSTt5uH2WFBDSJgSAGBFCC9G4vD1iQCFvg92LCN7JR1fggyedry13G3Hp9GcZp38zMD4T",
  "key19": "2GxPpf9Xb8rARdGNB8CmZ8gkezZp4GYcFjSrrMocGjxbYitCM4j1bFZ56oibK7x7paVRgSWH3qf8E1v7CRv2e7xA",
  "key20": "5aQesbiZqHXzFkjVg78An91mmJu51aazMZe2waBTZW2vFHqShGM9mmoMbY93zQrN2F1kiL2FsKrG3Y2ru1sEzzdi",
  "key21": "2KViAtN8cjwgbWBC7xEBzJoe1F8JpaCaj9gZuQJHcKEMFTRraeRM3jiL1XZ1FqttKyYwGiFebHz5wSR418cDdqXe",
  "key22": "VVWoh4XgxpE4mmfaFnYNGy7LWxmEuj3aRwVbiqJsiLPfKQ7MQLtY3DAa8r5p7R7SAXDn5n4whw7RaopwxWnxeEQ",
  "key23": "3HVTcBRHh79kEqWh5v8U6hsQrqQbUiVdUgYCrKmAupBL3WL69wJA9rZTwjE6beFW6L16B6ceVnebhNMMgdGJErTu",
  "key24": "57RKoic2JShhdTpFqTtAuvUNYnKZtgFgFhXK2ECYbw84ftPiEkmt6FK6pLDxKo3MQNra17KJrRHgyupwrAH1LLAE",
  "key25": "4b4aR6zZx8d37BtaUYyeqftP7DcPwNvD4td6grAsSdgHGwVE6Nkgk8Q59M1JpB9QtxFwiPr6irnkcfko3b9LvHGp",
  "key26": "4u3DskRppGzxd21pdg1Zuy3ABTXUF7DU6g9AjQrsanY6itfxTyHZ7va4rcbbihZeLyzm2oD4Ro3sHQ94aUfh2K6j",
  "key27": "3ZComWLF5DZsyonG6NmaUSjG4f7uC3kUbCJZTx6iLADYqCQ7wtD3SN9ipJYqcjkxLYgVxwUfzYUBJZkN5bLXVUR7",
  "key28": "4k41hrjefua19PhT3AxyNP8C1iuSLY46v1TfgaYbxZs2yvsJa4e7jg19pmHfR5FFCFuoi2BGRCBJnnM92VVrkBN5",
  "key29": "4Uq1GhMdxZcnJWnvbhKdzfYRrMqN2Si42DLV9ZgCaM8w4uB6VG8qTAhyF9Zzpxpofk4TYK8BrwZdeFeQN4eQj5jU",
  "key30": "3iHofovPMMF43LFt9Vw7XiaVTbQzgUwwrPk7dNMY8xJKMYP6khSwfceHG6qjvHpze93kEwi9PPcuSGa6twRuM3PY",
  "key31": "37bWbxVnMJbF11Vzd3xoLhrJn7WM5EPTPg6dxdNAfvM5r5gM2138KGXryEyQegaZRq8aLWuPLfgaPGkJZKJHN2ab",
  "key32": "fPsfc6V4mDpi5eishZmts8DRyysNYZ6kL5WswEuJhogJT6oHrzfQFCxQMtfwBzzCZVwESnpRmxjAWbs3RsjTbQ1",
  "key33": "3xyEW82kEMRGzAWMqCnDXWSGrkBbkU7dSX1uiPX3rfUkkg7SW12Yvi3kU5KsWF7JRWgkw6syYSNz2wx6CUAQxYaC",
  "key34": "4y5ebYmtWVcUa4uUNgZ7uuxLAMEPpqVGmYU9QzdmiKep4SBX5dctKxWuVtzJBvTGNXY3pYcoAjANgmQ3foTfEq6z",
  "key35": "N7D5LGDZj5x8ibdYfz5mEbZ8Cu9dHJLtyNDnEUpxSFP4ZmVickCPre1XkbtjrCAqteicAT9A6oVijqkBxXJTx3F",
  "key36": "Us9svA4T9rpUDjFcXHJfYVHHtjxhBXCYRK8SA4tLCxu7gM1nKsVh97SQTUwyUpHpxaANbWBDoaU59L3JTSuuveN",
  "key37": "5uibYQBm4L7VURaFcGgmNU8riABe3vaqXVPZ8Gmz5yMSeqXUZnt7feiPFqpMkiQQ9B9fyaDt15CeHSt9JxK7mdXw"
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
