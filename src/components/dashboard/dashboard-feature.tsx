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
    "2kfydgcH9zt2g9GWsFbR54juMvPrJ5YWfrrmyck2NuJfGU8AwYNeney2aWWhg6s2jaX3f6jgDyo2Ehbvo2jMrfsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21btsjT9sxPfxoa7AsWq4j1kefiRhyT1efm7m4yQATwdka9LMkoZse6QDb19tdYHnqxoLAeVhpvhmHy3Ye934XDx",
  "key1": "5rHaWrF1RLHbX8xCNWvQU5e1Ka6ZcDqPaFVLs3ncxZt8A7ULYdR2ipg92KYJznENYDVfBX77qNcJf36kkkWawHMr",
  "key2": "65FzppgtuFxu1fLQ3H6AcEuTmihSntXdih258yerGp5wEXRHYzCDn5btXiRzsbNrrtgkVaokqNKgqEAu3CRitWxr",
  "key3": "mQTCydrJuGD6a9VaGMpQrKwjc5VR6W9iNqQRNThVoKvbDT7Z1KspkLaeKkdgGqzuKDxxrdcx24bX15ZswVjzDSb",
  "key4": "4zDGQ2xT38TftT1uxjakCpsNRCTqe42mnJ2skBwGWuGEhPn5fFKpb1oEXXkdNu2f3jD3DrHixCt3kjurDCW5GkT2",
  "key5": "316Wm9GrG8zFVqNBh6wkRepJ5ZdKjKRyUCvaHmJYwC3hvhLRDTLrBhiHYFXCuEpWMNDpMhEeirEW2WJdqAJpg1UH",
  "key6": "472upP7BVw7ezn5Wr5hpYCMFFaRLJPCs4PFnpFvQCcAN2Ng7LPU21YgWK93MK7cgn8x87gKK1cjN5rJJ4WWiBBah",
  "key7": "5rGexHnwhQWvLbaSUXhd2xzwLCWW9uKbSDAADprG4AN9Yvu1u9qCbzaq8QQjWc3Q9Ms2q2973Wet5MuhJhtkvNjy",
  "key8": "2u1T19fhKEE39KifTgo3g3pZuH1x3EVqjZ6RTHtZWT9cEVQLQWx9BwioXfi2rk58YedNmPhJB4qmkZ62fzB1ymD5",
  "key9": "3PZotjLN2heGNYZtyYXcR1iHwCDx1unzGYRcRNFcN1RxZSzXzxKWV1VAj7uZRa3VrtnmgErTctFTtmc7bv2x4njh",
  "key10": "Z2Pax8pQwjebJpBC8Yhzm1UCPHY437EqUhH9gSPRVSMpS88S6vY47ohbZjmH1haRodRZNusQKfTFVFQPwXoEY6r",
  "key11": "2bUfkRGvyGdDuxNDXkcwP8Gx7qsVt6Vde4ush3jTJNVtia1NRQ49zEeMpadzQd5JKcebqCsxv5jbSJhEw1FKy3Mr",
  "key12": "35GX7eWCRKTD2nXC3W6bRK4VSpJ1FGzxSSNgviofyzoLjDdhVSzuE5hHcurSMp2z38TegLuwCZh5ciEZx8pbaHBd",
  "key13": "3rtD6xR6RFYw9L6caV6Jp4Xk45wbhf1zKyNyTpFeLGm575EWypbP5mfFHYBS3ySGiXevcANbyGWiNMdsKcZsT5dj",
  "key14": "7HFGdX8gTPFNpePg6a5persqdep6R12LAPqTPQMkwPVVVWyehi4HRUpMszeg4k5L55ThZWnw8PKF7DyNCupVqBJ",
  "key15": "4VJaPhLS8VZbbApWZzog7djxkqjMaDgZsoncdxJFyLpa86S917P6z4a4hGjDeWN1uDUVaUC3aSfoH35XVG64YdYR",
  "key16": "63bpL7CyaSpzSNCCsPG9vsukTNrnyCEwK5fgdUkGVHBCDn3ZGYYNsHE1PHND5MqVm8GsbRJE83j5eUWyryDMYWoU",
  "key17": "TJwxpbmELfypomeh4FgWWYSe4oAtxTw7E4LLdyPceJfMuyjJz5aYjbnLwgS9BXBZG3vcoJfBfG8Vo4eZhV3WB8Q",
  "key18": "5qfJu8ZRYp7eWFJBCqZUUzAkckDbC9eMd4gVAKeR6J7RrCP6epevc17jn3V2NeJ76bpJVVcsSWFiFfHQvETsyWmR",
  "key19": "3epuyCwLhtfJKKUfwqruAS3bf5XbyK6PWLqQcUc56AqQNQT7qDA7R1Mu9QnzvEwvPR2zyJ3qUq3azU7SLGwJVyuX",
  "key20": "E9gUk4MBs9sFj1ZWZ9pheugNj9Kj8f1VTMoyfgL2yTXdeK2fLvLeRo2iLoM2hXxbNiVzXgf8m2NKcAEBd5txmMD",
  "key21": "25cmmyHVRh2QnW6qxQAbzZxNP3U5wNpjN2ZyLuKGSxMbojVr7oFXsN2cgajLmQSbnz2ojESUEVnBWDqhPL32bYNa",
  "key22": "duPPVKgbVuxXViZs8UopwVU11pnqsS4Rr9YGVrgBUkKckGewC5Xv8hpAVJJAMhLD5SWdZ38AGmAvnt94HANTQp7",
  "key23": "3Fs7wQeyfDAHHxCwGhrGdekoaLHgLozVBqGEJZwLSU1fUAqcxqgC6otLh7BwT5Nog1hkfVwiJnH1uLTSVb6M9HUD",
  "key24": "5ykynZ5G2kvoCXmFqhgypwYya43nrPt7s4nKYNte7ZKyLk68qg1tbvqyNuPYCFXvRjgr54qqbGxXXobQZg86YaBr",
  "key25": "4sXxkV28uTsWxhWBGGrRmba7bmDW3L5wMo8K7CNthaWFWdThh4jeTxyM1Mi1jnaq3QHYbjWycxxr4yyeLrDA4j4j",
  "key26": "2UB98H5ahHNs5oDabMqdEKLK7iATpeekpBMesuVvipj469ByMvzMiBiXscbJvGGx3vnaDDAJnzw28xzLr9DUsJud",
  "key27": "2WaJhcKos5UXiD4TBdibhDYgV6415b33AaVixve186Hyucdg1NZTmcrH194yMNe3hjvSBXN5mzVi4T4tqvtSh9sZ",
  "key28": "2Xo3HgAJ6kFLUUXjpbkWfznQimVYezrLkYrqdCmF2qen5fCr8pyt9PqsiC3zMDvBdg2C5nDzecMSKmhr7WgZcSQA",
  "key29": "3w9UmmV7H5o3yx2fStFSHffCbKLW5fFZx5RKMXMNdLeiwp6MJefiHaJuoLHsU7Tqp9rz4MTLyPVGWMYDukDn1Y12",
  "key30": "bgoDwAKgt5cxBqnS8iuFbbLpw4G2GmJrPQciqFVBBez7VcyPnDWBDzq1NDrjRB7tCsuVFPKn4xkqMZcY4rkPktS",
  "key31": "2SWZWrKviPmXocFpouHCUd2WAsBxRY3CGmjhTCKxNs8NKhDVERLWJyDvRaVVxBW1woEWQMFpFPr9QG65vXzMcFjr",
  "key32": "5bUBhgheTFpUPwjTLUrzPo9JhJmPJDwXpu3u7xCMHk67AMMYaYBSW66R6stZnBJ495ctmjjb3LjMCh1JcbNbtZuY",
  "key33": "3JGimkPc3Zc9ubRxUYtaSsePZAE3zyCQWUaPnjX214jAKQtoZJZ5cQjSz9GiMzemhoj5wiLFM2qCs5BdPxeX6FYZ",
  "key34": "51cUgWJ9tjx94Fx6HkpiHnYLs6LiKa8wHeFAWPNNCkTyTSj4gTyCMmqUmTZhKJPYVUYPjEwkCJ35MoJ6s28XA5GW",
  "key35": "LBxuCWbsVaUMgxP59X5CGG2zDFWqiqTk9mspiYRfdSkLUCnsDSakCPwUnjyGv2kfjeLuHgdwAw63sU9jBEzNjcT",
  "key36": "qHwBNbPMvvBJZtffEyNGGjG84tSxqkqxYqhfU7did3or292AQWA5raHhC9o929tivknj7geBrsDLmBVnnTV2CKM",
  "key37": "5HPKAnXPKZTNJ1W8Lr54gY1kJ2AWNV2CaKuMrpwznFQd4vYQiTByBvAMAdkEKZ5sdmS5Dr6DCkkZeZSzDWUFd1MU",
  "key38": "2iLzacyUbesPjBe1mLhrYEgSenvYDu231MBJ6hSr3N9AvnnyoPW3nMCayWzLm6mLpGHZJ5WnTQjUKEN875tE77Zj",
  "key39": "36MmctSsvpFYJJt5dUmsbej5xQcVbxSxyK5VVSVoUjQvshUZ4qEbQCs3bDnUxPAWZjewtkum7fFvnw25Ws3sbW3N",
  "key40": "2ciASKMZwTzaWJ2PnNzsTevNSyq13nxcqL4QcxxgfduAUs5YegELDx8pbwAZ62Kk2piDUTEyfjGhXSfsCF8veqLi",
  "key41": "unzNpbUxhLvvKMaP3ffMALp3Zk2UM6FGEm74feyQRVLb8i2s3oTGqNgUazPjJxwbCPLn2ApiKsM3knxmZLGvo7N",
  "key42": "34Bsg8m2JPTeztb2QLKuNmQYY4uZo2X6HadGk8i1bFGrHHiFjpPUzMrVKRpDq6nxexUxd2rZtEG96nQJfCz28LmN",
  "key43": "2j1rRvHZXLznB4GxW9om3j3rsQZn5ecYYC54divUipqDj6BT1CTjoswe3GRwK9kTwwKMhQV6Fh37dw66p6Viqs3m",
  "key44": "2aB4JpKJAtvAbJdvUMvH9L7j4ZkQhuc1A3TJubdSLLLeQ1k6V7dU53YvKNMwLnStUoUJqoMcFCRFoLabmHwdQHTw"
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
