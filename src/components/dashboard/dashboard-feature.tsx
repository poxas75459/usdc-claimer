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
    "PkSqYVQu8oDB5AaCjJB9cyomnYM2JDdDUxxQd2JZyp3o9ujs8zVV7Yo8yBgK4eCNGmSNJbtyuAHBnk9b9AZf4Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HwLA6xWRdmE8hFoYPB52J6v6K2VHh4byaLwWBxSGrVpL9XmVbCshSsFUNKrp2zCSfENJLprwCkgV9UUYNvSX7wp",
  "key1": "4nhkytDUVAw36eg57Sn6gf4nqjBzom9Pf4Tc6Zi4B7md93Keua76nEBqduE5fiVckA3cG698pmgb6VgcWSXwjEax",
  "key2": "251LJVvWunPJBYkcFWonYabcpqEoxxNquYt31Mm73B9oXjLy17CYZy7QbPzJE8fZyT1aN17ZzP82sn4EemC2Sr8s",
  "key3": "5qPCprz4q6BE8RYMLqNszcSHisC6SYS4aFJPyTK2fZA4NjDrnyAHkZSSJMQEnyfgVQUjpzRxzA3wWtvJEcQL1koH",
  "key4": "5kLkrtP4sAfWrWvrMo2iCs83D1vXMVnepAdR2CFa96DkdTtbPC6zdAuV5pKEcha8ymdKdvMhugmsJbXYpW9ui91j",
  "key5": "xLATB1MBSo1swnQ7Sx9HKtsFTFRQkDGLfPgyMUbZBAyChBqBeNexyqjn64JanaRpXaQWieDiU1Hypy4UnGuj892",
  "key6": "3jyznpFeCifFApLsM4HvhuzazsAEs9gowd2iJijzxEVSkNH1bx7uUQ8DsktrFFiMJayx9rgvrnHsZSGcHa6AQsnQ",
  "key7": "W5rFYZ95V9pSLvkGE5nkyLsG2QZpdHZo74d7KvdRsVLTCCx27rTzTRGHWfLc3oRvczX2HPxvRTnrekf296FZWma",
  "key8": "2UQZGjmyfmhJmJ1VMx6MkAnEF1gQsXZm9Lh1NnVdamy7TDXP3HPBjYzrVNv6V9CuHfwzcBLUSwnPqxDbzjyAkfZa",
  "key9": "51ZujpD7PwM6Dw5zYfxeBxVQ8wkmjyekbosR1LhDYE1EoncicaccSCCbEfqNGCxLi8EY6R8qwvGLvyjjLHg8qCvq",
  "key10": "2W8T6MukvTjvEcCZ9s6DduhZBGitQFSt6q72Ht7oy3Vo5xeKY22KHxTMGogrNZKfa7z1mvqd2rYEvaxQ3vGhfygE",
  "key11": "57YNjwE766eNgveEdthzHfEPXMiorsn5PFCdfqvc5wPc9ReTDKYkYf8BcuR1YP7HUKtKFp7QNVLECFFzAHsLzDeT",
  "key12": "3AKAuPc54tZ87PXtyDLnBMtPZ1Jcvytyvc5VPwekyzcsSKFAMHhC1BCCFFQLFnYJbrgHmKSYG4w1hCvS3sVSMdyi",
  "key13": "24qxZY1R4KKQcBNtXqqxFRsGWCYcaGxV559KnUNmLzzebFDfATgYLUoeQEBMDmtHPkRkbCtNSKa4gToTNQ2uEY91",
  "key14": "47spU7W6dHi35F4Yqm6Z4BmrhhNqgYDy7ymNp7ZjeaAAAucdXK68GaCRMceE9rTHXT1WRhLMkGBCwH8XyghtmLLh",
  "key15": "3vNVQtcNN9cdf2V6mfYuUfyEmqVHeYeEif62XFis1iSAwRBBtJYmepQXLSFDgkASgJMnDzHJGsaZUn4gVxTSxuyK",
  "key16": "RfUKNvwSk3UxEPb2kgsXMbofcyHoWjx2eSCutCF4fsDjAwDwoUNdbJjQ3FtAPkVe3QhwGYL7FB2C7uSxc5xVxNe",
  "key17": "QqFHgxdNmKpyBQ2koVMH79LVk19hJCApKuCe9a47hPnjkpRd2zvqbCbXP4H9dqT6AaE6XdrGjyaHrqzuNbeHP6s",
  "key18": "2wSAsyS4PtogVDjMgMwE8Q3XXb87F2XuH96ZJw3bKjA53tqgxRQgwwjHE4gwXV1YtYpBsbh7UFZUdTgM2j9NPhM2",
  "key19": "5DH2ZtwfjYX7cmbZmAZHzDWZQnPM7avRSWow6cJVJPQygLDMCvfnrByZUqySgNEnCGjfHmB4CVimScBcTF1XmUPR",
  "key20": "2oaXYppyxz99oAbJBiQF1uFhrTUfZYoqmDUYbxLZtSUZDkDBHHqBBAmHMLXHRqA4p5T556CM9MHQhqf3HYzrisfv",
  "key21": "5gQ1ecF97vaXGj12innvQ8ocEo3CmhQWvPS8TY2QUoCdgQvVZKffqPd8nCaRx95Hj7knhHE9X8tiRDB6SEag1PiG",
  "key22": "3pfznoKT2xoHm9TbHA5SdZmSRG21jb5Jug5dL2VrubFGn55PPQ2Bh88GauX9VuxXqLSun8Bcmupue9gvPcG1ShGz",
  "key23": "2PHLXPYYeaBLMup5PbBYhWr4KZjt4ff39UR4a74NwVaayp1HqiB1sphiC4ydBqusG8cgzrvnHVm6wTiNUSFThz1R",
  "key24": "yDp6mqfmHFcnpp3LqmuWJKgpePbST83rv91SeQm3uUV4KHhr98rHu8eWksgzSmCLZVYgar2ku9yu51bF3ayJ2AG",
  "key25": "2KV3JcZUWoSHj4YfXNA1BbLKkCKnjwQytasJZa4KdJKN7H1kqU33iBnBWZ9DkMUaCNC4WukQLnYLAgQ89khZXYSs",
  "key26": "57YxaACTB3R6dnpjJGgzNCeZwjAQi8WvyFJvT3EAM4VWj83ngiBCgFWoiJym9fbvCKa9BVSsMfvbLEuucEzFixiE",
  "key27": "5ZtWFqar392eXap9xy6GNjFZzsBL4JyYk3ooJGh2a3tMm5yvnoRHJMuG7qio7ujbnFGgwXBb1o4Tfo3m5DF4Qipu",
  "key28": "56LmfkWiFnLoBtoDhW9vZvYhBAD1zWkpQsmizendsvmfMy7NSgKZG61y1TWXK8VwC8ShKjpT4kSCVxukTrtXHR6h",
  "key29": "5TbQCnBzMr7fWKXc7gLEj8n7XRubUwrbt4As2Ysa8cTmrtCNUp12NiPQha6riHf9UVx6EGqLZYtgUiJaFMTA6kJo",
  "key30": "USiwmkmnJsCDxznKDZDafsTB6NE781BmXbDB7NqbQTyPmRRpm7VJ2h76uDe18BffyDpk9mzQtRWjf31x5gT1bBp",
  "key31": "X2U3sbQ8A4QoukC1Ciqk8yKPHPeNDGqSaZcuN9A7wLhqxikXMbUTxVh9WATMLMnRhFgASBxge2dhQaviTvVJJak",
  "key32": "38Sh7RHQPB9Nb64nzoDDhusxPoYHAcY1bgg8bP3Sx5zEVgUo9zrN51zYrs1jLF25ysGeVEr9LtmtnppxxwNiZQgM"
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
