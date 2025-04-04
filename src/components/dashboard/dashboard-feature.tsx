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
    "5HABbkiE6d7MY6z4NuARB64xBdpQ1qSxoVtdVG4RAjCqYRgEn6yxxLRKBtgTd4yaW5fsTFoYiNWsFi3EY4T8xSLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49TUK4xNxHmRUn28JYKB7SeehVbixttahSjNxxiaVBmhBdxv1QDrRScFXBaBYgHgVv3YffrQeEzUY1vF9wu1AJVP",
  "key1": "9J4FnRrk7P1c2jenk24dxCfp8dSLNjzHKoRWdRKihs73GwktCz922pBj5cXPzDmPECUx2X9ngHwLTjCKMHLHZBw",
  "key2": "56qvbaCSUSf5oWXctRwd217j3bMfjShEGkb4jrEghSdQAhEQs4pCNRwA5YVed7tzxWj4ERFb76QYpXpg3GJ1m2xB",
  "key3": "4L28FWu1xDtUcAQzc2RQrhn5nzK7zwpwiXUYGu4jdd2dMpQL5gJFHGgCPSQoi8c9EABJRVBr3KUjLdcH9j7wft3G",
  "key4": "4Zrrdyqa6jtHp56ad1YF6ZTReUyiRrpG8tzxpovantuJfvxUHqA1MyoJyYcrNUe3sx1GiAFJtQVmoEZfgea57cT4",
  "key5": "5SrFsRztGbDU7D1Zpoh4ZdSt5pbqtVppbnqFaznDY6WzTSi6NUamLG7DDdvMQ1oGAnmgrJq9HKxRZuZcqd5cuWrA",
  "key6": "37iBDB8QQzzfqUuduWPgo1wR4K5HJygTcaocv86hZZkaom3n2BbL1Vqs4zwYHz9AzKqi5qKyn8opLvRD2UifaM1R",
  "key7": "HDRDvBeirLMqw7fyVXfx7uF3gT5zCNa9iXzJyq2VwxSEt4k8f3MT3DBDBwZc9P7qs7EcTMcyh9NrCNh6Eyd129A",
  "key8": "5YK5bPKMSv2pcqFzrqsB3Y3nVjzsHwFyTiw4qD7wUd7BLAQfgmJkXyqKrrCMv2guV45tFTs9rFsKoujAzSR1kVkb",
  "key9": "GKFC99Dh4GNPQ4brrQQ46NBN7UHi5g26ZCoRZtcYA8WppXa6pwdkk3p6di8y46PyJhSnXtsQW2G4kiuAnAfcPpZ",
  "key10": "2L21n5tjK3sZWccwNfRaquAq7beBWDPvW8URSuiUbERhXnUB8bdbK4rReFr7zPBtJQRvVFkN48wSC6JYtQuDdMqu",
  "key11": "598ZeaYuthqEPHA1Zcx4XDbQa1XaX8DEaafmwPdZwCNXeRkPU4c4LRb6RdHZVGmSSbYMDqsc6BwsEfYsEgXhjDqG",
  "key12": "2JraWBsKU2yUmLXY4NFabCvqv9v8n8vgEJchBgVfzDqGbkPaTxaNrQWPE7ScCk368SQbEzn5gPojM1UgspJTXqeD",
  "key13": "UiUWHVYc1BYbFtwfoy2f7aZjMS5aPiFyXekdk3zPp3yptTfQ12LuG2PWbwmWP6HNBEZnL78AsdWkhwdaEGd84PS",
  "key14": "34xciYyhRKC3Zb9cMouZ9m2MtuN5GLWMCPzafJyGU8ndM16PrM5B67JutNQYtBRrG6G9gLF91KyK18mPzmzYTKj5",
  "key15": "2egWi94pvhedG1d5H69mXKQkDavywMEU4b4nt6zDKoB5rjSQdCZ7Jsz1EHGAPMPh4grxKqVV2cwgyPDLfK3aLZph",
  "key16": "3x53Ej9gHiJNB5CH7prXNW6nKHwKPi4GxueEmhHLaQW9ZvgmoLuvvmf88NjaaGy65R8nCkE62upyB2AWEPLYX1JF",
  "key17": "66Uj3fbX5DHbvDsE5bbu63AXuJiRcyvcNqFPCb3eumoUMLqAZzuo8FuMtqVWuiSuZU9pbRaSztFPbJEVrdxYu5qk",
  "key18": "5buKkaqz8zCmj3ZyAftasPdvCz6Poqo8kRjCc5vCdVd71hocps37MycXbVM5YYCPpDkicvne7cbkEanteCTyatwe",
  "key19": "64pokMvjKk8N1dvRmqbEEdRUNGRuAEwsMrJcDmEctWG4pdNQ2Fruy5z2PCxfYk5c2rjiguyBFHAh6oicX5DaFExE",
  "key20": "36QTBwdaxxYukkZt45Wf4WbjG2J71w47dkdeoknX7FwJyKypBR4oMjqD47kidVpQK79jxsqPgNkLG2BUFj2qfFbN",
  "key21": "4MrRVm8frKxhnR7N5WaxmsLqfaHwt2sV5sKNFjXEZRaRYHH8k6tQzvB3a4xHnrZ7MpfofjyXuYmR6Av3ULeo2ore",
  "key22": "W8Xm6UtKmk3BmK5o6gyF9vZPLSzXQcWi7t4y2vAX6TFovNzfZPPaYTeB94VvxEM9YeJQM6XtRJojgT9mNnwGUCa",
  "key23": "3ep2mcqV1GoEeGP423fPbpfntvhyCRC65bStJpBiooe8uEd1riddMZCSpacYm43sMyrb96QsgLWrZ2nDjEkm9H7Q",
  "key24": "3NwqtHLJajWSn3BJLKvVdsKfCc7a4YHWXt9xLzHiNDWHxUkUKJFgfXwLhvsutPSKuxPGCCTGodHtRmJJhghwW1KP",
  "key25": "2oFacmmZ5iM2EVmzahweTrLzw3xaCuRVBjDtN6a7WPVQPptt8kCqngaXK3CpidoyAEdxpieyPK8ckYAtXxEGp3zc",
  "key26": "5dfB7WWvw3dU5cyTkYdU7L7RS4kFK7sd3UMW21D3fkygSWpqHjCHyCJSknQhiX55HsrKpKhu6uCNsJPjpQAAfFRr",
  "key27": "3UXJVShBQ4mqDPBCgBbwfpwAwuBQZkjUiT2r99gE4jLXMnESEjc2FocDSqryPFA8RJPP6pryivHGJXUnxfMhScbe",
  "key28": "2wtPFVhoh1mzA54xuMW2U6cDfjZZd1bqgcQR3eR5YHnjAxK7kYcYnzY5BfxCCahjDaFYmTSm67J3ASwYtdWkx5eu",
  "key29": "2evRP2UTngtADtnD68NvreoAwBGFKKXSpQw1CyC89ouxHDJ6ps9HNkh8wU9kUpGF2tixVXCShFab9byKcmajH1X5",
  "key30": "FwQE2RFsdJSSbg9ekGSipuNDDkMwNTwi5Mvg5RD4B8svn3bn4njuz948jXD1zag8HBerj55egKDRchc2xYY7p7H",
  "key31": "4X9HZHk74rm2njazeWByhj2vu3i8kpQENQ8dNeCEpxa7sFrBtgisJa76kLEu1e9LGkTTGSRVCYqEAeBcDnWfQvbs"
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
