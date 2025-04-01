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
    "4xSN67tVQ65SY8gKZyfhvsvzUg9Ev2GgfrNQNVVNFbprVDPQ1bK244VtSfUVF7mpifXPdwjvHXmYa35zLxfy1JWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ibQf1q1JGP3XECmSTf3tQowJ48gEwyUswSTWfH49Jy1Lt9yRm6PRFdBKqrzF4cqo9PKc7Ff2mepcmmCMiHrn81S",
  "key1": "5CAd89wM2RFwXbq2WijJ8bBzM3zpA6ZBP7ReJUf2xkDrqdSUj7YodUN6FAJazMU5Tsc3nn7ois48xSmxznHmY6BJ",
  "key2": "5g9Kq4dir4DGkUX5XMxrdZEXqPE4tPiYEfQNVux5nniztkp7JWZFkWorRQZq7Yqsf26Aafkn49abjN5jqrB2yhzN",
  "key3": "2GU61ckM5xQmisRCVigoJ6zuR1wpTSSbaJeMWa4yei2KCDaWPbwnJvJB5Yk3KHoTpRJke4BpMS8Uh2pTZD9eP3vf",
  "key4": "2MToWe8EvqdexEiA9e8fxbqN4JNcHXUXRtMLsfmp1i5cEVy7DKWNivMZoUUqN2gyeXXnzVXDS3V11jprAb9KvMZp",
  "key5": "5F1fG2RpVWjgNjugGe6SXrmDHq4H196vfuXBtq9marSA3higb689idCiFNT1Df9hTqMEwZKNTe8jb15YD5ypRtJp",
  "key6": "2uSpMbCd6jXsp8XxHszvhpRHeGd5vupBD9HtTeaDHN5HBRNsoHCUgo5vJNbQ233myB24c8N7VvkeyxYeoa1D2BhZ",
  "key7": "3vzfFNiPnajdQ48ZgeRDGRqnLXxQHyDsRQ6aBkaYX8dFYdGFag9Jdk3Lg5FiqFST8RZBbgn5ZvRnbHmbkR8YKdv8",
  "key8": "EcN5tRAwtomiJe9Vu39M6u8e7EKJ1pocWUHWsShyeNEzaD8DqqrfTFRJXZpRdXPDDi4MRT6Pcdw7MAEZCkgs8H6",
  "key9": "pjGZ3YuPYgVJotmRPdSt8ASBJXihi3y8bF6C8zzRXsezG4vUesCUPmV6CqJgkcVRjroTwKrJGBpP7ZqYdd4cwss",
  "key10": "3GLMX165Fyqa1df5fCPGs62xHYoreAC61QhftEAf3GYMeZGnjQpnaSNtqnhjY7egrXLKDbb2nFm8X5awmWc2rLfU",
  "key11": "2PUCq8kThw7BLqa9nounvr1RCZsmvqN9GZndnhhBd42xW49FqNq8BnHRdUsTfAUtcjUgpQuyuEQZFMB9rDr78bAS",
  "key12": "2ADDkPKNzGJPjTaufmB559yTBuLDbADqX5NQmzDd6PuvMtWjS65dS7kRibaGU5x59AEZgHhDj6BbmHdVU5NeMsm1",
  "key13": "3CcgGVzjVoLskUNoYRiP34HU14DvYW6aUSzPeQ2Mybp7tznBrMycgfGRDehy2fWoTbL8RBXH4BWfPLFupTGGeuou",
  "key14": "4oKncDkkdBctE6TXynn9XzG7RAWZ3x2cDPjcVRvs1aiUxwLsnLBhzQoMoAa5cHy3FMxN5bke7PAYLdMxuPGNw7EP",
  "key15": "2STkdtX5ppvehVL1ZL66fUouARw7XgbrxZhroLbNN1Sdquk6eixsW7og3q6zzXCxSobS3QuTcphGqshaBnpqLJQN",
  "key16": "6265ku8pSBvYxAHcjhuY6PYFK3Dw6aiY54f4xE5DDWRJraUJpZnTgCcNnRNyFXFTmdr88EYx5jVP9LsTw3Fo7Myz",
  "key17": "5ZQVLA7SZdZUQJZpGbhU5AmBxaxAmRyzpLEBCLnbBqtJp4ByT45Ra9BSWeRcEgJB7357sgeWMRcboFK9uLCXNrJb",
  "key18": "2SEFymRoUJb9kPLDDzqb3sPh6ymjWkHC5A3zkV3ZyAaZ2ry9qLCuyNLXfgNbyJRWLGHNdnCfQShtzb9J7RTYsEtg",
  "key19": "4fg7XvmELtCtzs9tLVjMQ2MmxWZKU6PF9sAGddVPyAbD2rVCLQZdBq8TgFaJtv5carhVWapfdGWHea3ww5h9tN1x",
  "key20": "3QTzLFm73kyz5pDE7pZT9xRarFfmGpc7YS9RDur7tJKt4azHuUUwwGsGeppvT3gWuPkY28YH6uKkfVQkLQRfUG63",
  "key21": "2yvhFFtNjMEQ3hWosW9D2BtFQVAWAMjLh6GXAqTgKW2hTE9LV6GXrpJB1ixWxyvCBkjh4RaCseZtKugv1mYY6qEr",
  "key22": "2yrvAodNBiohq8TtM5mudjGxme7oKLtTWMsSEb22HdKf8PGELgqfp8DsF7eBmNy3nZzh5GYwPVQ5brfAPvigZjLQ",
  "key23": "5JziCybWnvw4XZCHqRds2G1cih8SCPod1aG9XT6Sy1VuFbwjaHiaXHKD2Wids9a4VXRH8qf5VFCLo7JeRHfK9xy6",
  "key24": "3xNsQTwjekB6hSgky75uPobbitBTkrwqrjmanuhWd4s46TAxepQ7GhNPf4H56dAy93Dxzh42PTdioC2ApN17ywjs",
  "key25": "8oMgMUtEYrv1aTcUs5KgvdUtA7tKZcEweBptyFKvRkSkvbMpLAN6BQeZAid9Y1YStpZJxWGcGDmpS1pToYJv75v",
  "key26": "2uWpuvi5w6G1KLTasF2jaa8GYEvyfkisYYRbKsxaKHHA6HSWNgMQt5Dc9UYPcZwkU3Kna7hWcoSWiMYJ1iBhyPdR",
  "key27": "3hBxmY5UGJaRnDUTsLmXUABhtwhxg9sctt8WHhZ1WCJJqof1rj5H1LTwfJ4DWnpGcuw2JZECTbuBfWJ5ThbiYd5n",
  "key28": "4JKTYivTLQMT5HMFRELcBY99AjCYavxEv4sR8fSTEjaFKsVDGw8GLxiSDCeYkJRbehXU4bsfUH3Ui9pooPemgtnd",
  "key29": "3NZRYF8EDMZ3MX2hL7PyYbd8JfMBZMPdqSQQQ5FiQC1GLkrZXncCdNUh3MXhPg4Ey7UUdVVMLZcHXuPCesH6HM7h",
  "key30": "2mz2dF5oCCJgMYCLZ368E6CzUD4S5AXwi1B3dB6y1cpF46J8xfDLf1SYkcLGnezMRnj6NwMHZstoCR2nQggMgpzG",
  "key31": "E6gZMxmxi9ykbbq7NEZRAgNYEHKmTBNQyTC66xxKq3nRiuc7fgDYm9wAQ6SCZGxDgYk62S61MgYt8B81HpbGJDr",
  "key32": "5sTUjgU6h9Z2pspTELyBESFKaDR2f8Bb4SNGnL4R4rg3TGkftLdEzGzAGvM4J1JJYQ8MoZgvHPuPePhzqzDJxe3C",
  "key33": "5RrkSrFJ8L5azSUV9iLYkLA5FDoB2C3rBMUwEtLNbxLnR6KnCrU8C6tK8oXV2kLiqYtk5KxGDDrtznyYrScoEuBb",
  "key34": "4LzGbQUjdWxPNTyTmEDrH6bE567tXBUYEqZtKVQMCCNwe6u9mo1G1gp6sdwEUoDRRYgFdg8m9cHcHFU8Zpg2yij3",
  "key35": "5qCD7yfHMVPE5EbZ97zsLPVHfMH9WP3b6BWrhb6sw9Zmkqrr4Nt3HcxoufmnhSzcATPAyA1A3exTjU8NyBP9mxNg",
  "key36": "2NXeuNy2f5WxUe5xY2uNXUkmUc2CH7Eh6t77WnGuLQFsQBRstzYgdG3WNiapPm95jQzqJ9d6CSK894sAi29otBrz",
  "key37": "kTTMkq5M31c1LJhdXc8bAu3ZEr25HL1wNXpTFKpo5yTVURVp1VrBF8PXvk8ZweDPyG69dXLYVevXLrxeGnR5m3R",
  "key38": "Zn73p1BQvscLhBvKuULXmAHF9oqxuiq7rpMTy55F1MT1Uq1jp8s33kJxyrzQDDw4mrDqQuAw6okPXKAxy5sng5Y",
  "key39": "3hPDTy5Tjmt2Ph9WdQ6cXMtNiaDQ9uvUj1GbnHSEB6M5VSkRJj7Q5DDGkbRZTsrpPAKvQfpfoksaJmL55Jx5kKzG",
  "key40": "614L1v4akaya9f7SGHQBfJjBzL6nBydAFrdk2qKuVkarx1J7Mdxm9QjKJ4c2gXdnRXWe3VKSgrq5pa5ykPNmhoTU",
  "key41": "41ciAMbWird3S6U2kjwVghotRga6fg6smgLUb4vjgWW9V8sK4j1WQtzeXYKqUfG9Gx6spzvo8s59wuE9fXsY3rtf",
  "key42": "5BvaQjs5xjZUiW7k1CiaCTDjrH1xVKKWhQLm75mG9YAkC1E9qZCFNqCDXe7MWd82NYscVrvf5jaHUrtcxymTfUtZ",
  "key43": "3tFA4CMW9JunZw59B4nEyQaVdtHFNncM3AKoNBzu6FXZdAgk9nMTv18V5gsx8VK9yQfvgPR6Zayw13eBQYhvAWZf",
  "key44": "2qgRuog9QgCoSmQSEfJx3ZhsELP7P9rSsyL5aJs5kNp3nV2uUCpabgSzzBkjDVV7sSAvrMsmrGUo6bToj3KnoDz5",
  "key45": "37kpS5nZBaFsMAXi2RVM188s75q5aqtvFWCGBCJc86rMkUkneSioEus1REF8vVUYuwbKpXtfs6EmRjiR79MQZzu3",
  "key46": "4rn5rw1mm8L8eetr5FS4gb8CP5yh77YYi5xfs6LEdhGosdH9T4uvnhVBceQ9j8XjdGkBJXMdtTbGARwKbUUGqKsp",
  "key47": "5x18AbEVWbvRkRghiwfNTR8a4A2UsH83HvJDZEWZn3ZFkVM4dFjtXbxF4sXKVGGT66iyQkCR43M6bt1v9UcRhzL9"
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
