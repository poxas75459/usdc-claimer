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
    "55Xhgwq1rbFRVR5ScnQEaZbUCsdYj1JrJnPHjDMFMD7g6z66dfQtiqPkVExwqz7NNMDqcSjP2EdMSZksKT74rimL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZafXnJ575oCXYhtJBhQzNysXzCyoYPp2zBTYXMfSgqU8xXagVuYMT2o9BibYBusoAQwwioz2QfbiqxCN7rSCwc",
  "key1": "2ybhQ489xBcaw17PJWrYVt4zmhuFffgTozSBGoLupMxurgpu6JGJmDqVPMPMmcQqiCU795rTbzYrSWYhqCJyPaLZ",
  "key2": "5GsNFTU121cz8aUjAmYsgzRBxxrzxpVAKX69NoxWcuCsB7uXtc3zfmtdqz36Gy1QtsQ9RqfZ2PauqMeu3VygBUj9",
  "key3": "3BRhi3x4htf5B4ojtJxYX9UgrS4eDkfCtfm9vGrDwhXFrJos1JSnM8dgwaub66zkfq4WM1FdUptAxEY8VVEXwAsx",
  "key4": "3hJBBkctRYXhUXkzYJcRwha41raPcnT9MvGigwz3gFL8fyvJ3tdFFpjovwoGqUKJt4tDAKHKJFZyXHK168Tq1ENK",
  "key5": "5qkQKwsJa6bd2ubXcXif49XS3nsWa5tTrB63f4sW7PRLQax3et4CNvdGMamJPVaiAefUDV56B5aGcT7aqpqDjTDT",
  "key6": "X9vSHoLmQa7pFm9qLy3Lc3BKJRi2i5zgCvExy7edZZH6qcXh7SdGt4wCAgNdphikqas7ZMs3c1Rp5Ha88zY3z5B",
  "key7": "587Vkr4ntcop2H8iJPaCL8fGmJpFxqQLySkbnuWHee3vTSQAmjKgVtWkb8oyNieNvxGdytXaAeWGUUYoJqXEsot3",
  "key8": "21EM29wRKUs1CWgdyuWCDZUuuzgqt7pa6Xa9KEK5ymfdVpzXsLvRVaK94vEjr6CU8PMw68jun8CyiqbZmybAwtuQ",
  "key9": "2xCAYmc44jnQmQF9GMJiSjHLmicmSrayx7WJMf3KEWYgsX8X1pjshHAmC46NBw6b2d73BB9wTRdfX6ywpfkvAFDY",
  "key10": "2dbNFms7v6REwEuWZzKtb8YG2q3GxgDfwH5cUviuuEj3xDiNn3K53rC26o64WNEVEim4iegwUYkgnoegjfPrt5mD",
  "key11": "5nfcokZpmXENTmF3wVjcAFtS5SJeR5sgZGRT3xpNBNRkDTHDuV3UVht4edPReBjDFUyey22CGfhf5cv6TrykeuTB",
  "key12": "xhq9wjywXA3evaMUgwddJDa8yrtJoe1HDtCfkGVAyAR76e9PCRcM9TwSPvwTsgQXd2hzcXWDnEePYU6rneQyX4q",
  "key13": "5HZyPtoz1QioBpUwZD7djfYZFUZocDcahgf896QehMbGfGzLqTyiPdPQQjR1bnRrHHmNoFbpTamF9P1A3aVZTKu",
  "key14": "3HZwj3hL5jzyxGFDi7cWPr3caLUSibjWTiLccZR7mBNYuFL2rx3go7vti1GpGLTFSLrWJQ7NgCZCodjvhbXmxt72",
  "key15": "HRphyVeN7gJXLxFfi4FzHm4Q6xYDx3uyLVRvoCiduznMy6YBwVzfGquxaaZ4UrXuiAcodhnfZmTK4vwDdSCtgCE",
  "key16": "5eKwafj8g9zYagTbQJbypeiycGMNsSZYcDVPTg9uMNorH8SfK6VHqDpvQ9JSJyEs2HLmkEiXuTNmDaBmm5hPLWPN",
  "key17": "5aebDB2dtz9FL2kTW1mhC53BvKwDzkVwQk8qYL8eGN9xixg5JcqJHt6Kxfr3qEkYnxUWGu3f87f32rVfPzw25Rxd",
  "key18": "tpHBwAj1Q2TgpTRbFmDGn3HyM6EE479xEZmcGBCQs6RpT86tCdYkTibnBH1n7aoyCYKf7kZn94yQYgTCrHc6yKA",
  "key19": "393QkhFSCDJyL5URDCcfBnqLJzj3ZEVTFkjA7G2zMEx5h3FQ3JBq2dL2jbmVUezASQVfQBnr5zdFAJgebJ78TbqW",
  "key20": "5ufVNy6JG8Eq6vcBTKPBNxh6Evq1EnYmZqGSWDf6KQBUpPt894M5Td4ESpiTcXFtTUMYVYo49jXYhq4S8hnV5pdM",
  "key21": "5HQcmzxWotRnN7uUCUNhTR7Z5FVN34R7aoCza7AvNnZmVRsssAXAp1CawbMwYJnJWoQ75hYgGzwnh7qw9TjJwpWq",
  "key22": "4k5Az2uGs81KuktsUcGau1oRDmBn2wnPzJKqTxMxGHi8U93zCY7bZJ1XNwSXyh83x7JGNS6ZPeBGQd2NFCRgPJhC",
  "key23": "4Xt6s2WNPtnzd7SKhcVMyKjNMqBG4Z1s2X71FbtqocL4LCqaeKNSZEucFxd9Hz4SitTnkWCyhcTSmXtDNApS8U2b",
  "key24": "4ZYa8m7LsWMf7drRUosh1jjEdbVkM44hYzJ8VmGPJEk5m8JadCihXEhf7dETrBiUyfKKGDuSE1x2Kw1xXCiG86UU",
  "key25": "ZCaXZuxtryzZFEEQmiVgJNkM6rWKwpYeYNmubhS2zKkzk8XjCQ3zCD8G3qn4tMfVbofL2ir9BsdHLkaeNbfAAC2",
  "key26": "4MUmenmyj8iu6vsWAUxjTb5xY5zY6qiSJuhkduCE2ZWXsqC9S43gxxHBjA4dhcVJn559DdJUDHKtFsXD1FPbNdRu",
  "key27": "57u6YrRbgW9qkR7Vs9NhsnP3w7j38JXd8dZ553YfyraK2nGLRkwUU8h5d41rrzHcnFR4afndi5ZTjwj69pijWzvC",
  "key28": "hDY9b29P4WwEwSnT89xXbSrVzxU4KBimxEMLZzjivMy9FjCJnDYJLTjBXYveby3ayGCa3E8K8dHWQAdmPE5g8pD",
  "key29": "LpTDRLQzXQqHJ6NxCFM7bLh5SNPQN2pPxfrXamumPiXYHRmsoM6k3RwBpnEt59UktTJyxyggui8P6NZeSPkeZF4",
  "key30": "wwBwqF2RXhDu2Doy65cL2FAH7w7QtyoEhH2D8pHsJQYGb1YYNo5mhy2M7pcnwKNwuUuLSGUChRUqMpJJD3cXUHt",
  "key31": "5givu6mM3BUNUAhwS7PKwcJTxCfVBnjpp19fypAcCwTrNSA4dAXcxpNp535PNS41opnSdZ6UhLn7HDSoSPWSCWeY",
  "key32": "4Lxq3bTFEX3tMnRETpTNb3W3Tu2qf1J2a5zzuqxjfKHKmW2sp72tgAeQntpRoTqP4rSSXzsavZrWjbpmN4BKzb6p",
  "key33": "3PwHfVeYojXde34TfARf62zjou2zHbyySikxJ4Xy5aGvXnj3bBCFS7rmp3CxGLyia4Mjct5ZdVz8AnNNveqDAUL4",
  "key34": "3iMdyZkctnz38wyvbBSYXuW8AwLDtRsy6YEjeyEsFfHWRKez1zCRFbkMniSZtYZcHEpTAViYGU6gFxjr23fRDg8m",
  "key35": "2BA4WXg6qGfAbzNG1QSN2toZD3UHu515MCfHBnLF8jHrwnnVg8ricdonpsmgA7F2N6cSuyaRQdTmcneuvznsZJk1",
  "key36": "4iUQM3QCLwmy8U5jRKUdNZMvyE4uJ4BxBYxsQYfmXixvS2Hbyp1TCTeZdPJ9Qnwnz5Kq557XdUuDrtJNSCZk9Bm8",
  "key37": "5PDjx4b9xgipsEpB3gj5SNhZ44svD596Meg2essnjxXXGPRNCHnuKo5TfxjNuVHP3gCZwBbxw22kn73j6jsCv1qj",
  "key38": "nrBKLfu4iroxdT7tYh84MaTXGNrSrmVz4PFAgGzJNotALK9pNp57CheBPcCWieWZ7VGzhGukVvLVh6fCZdfLZeT",
  "key39": "3gnLCxzrYSJAAcxA31XG1qPkwrydo4RNMq5Lvjp1hw5tsvwsB3zS7XENDqRACo5b3G2Skhwj4WXGptzEpsuH4tHj",
  "key40": "2rGiy3ySfbdvLzWVWLxn1afaY4TQjYLRJj8fTu6YroHLF4TjU2fRmmcC7APFABjViPNjakq2JAcm36NvwoG3EGV4",
  "key41": "2LcSaQdE8ZrfCNyTJgZZRPxLZYaxWUFmhaEUCpJt5M9rXgtwxHJnrnXm6aaeckSjaQda6w81SK1UKWwSa8m9khXV",
  "key42": "2HMdmsMbKEWUddoJTeJXGQJP6VDvXUmVK1mFgUiJRHr7h6M6Ra3fdb1PayXe5s3eEyfibQrUmZEJQLswoaXVYaH7",
  "key43": "63Hw938G6P1Jaj6FFfhRYC8jSJM46eXghku6GJA2HVk1vpMdmFhyy7Bb6YKM2NGhEUP9TEzfpMzeTpFTsUCH1voE",
  "key44": "5dpuv3yRUgUbvS83adgYentStSxGHh5tdd8RTQYodJs4ftDpcKm7NmMn1rCMJJfzpdJ9tgtHf7LqxHhvk2PVGtMH",
  "key45": "wnoPdP1GGXWuqcYVZMLsQXCy7dTRoAxtfvkn2bfxA4Q8AnvGG26EsTyJZdezXgJqgT6nP6rKCKj1WhCU9Mr1WcQ",
  "key46": "5DeSqfwAyuTnTfV6cSBn5i6wgmVrNLXm5txq4BTfhsm8D6biD3rJDGVEPM5QBRUqp6D7uQpLULqhEXU8ix6W3pud"
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
