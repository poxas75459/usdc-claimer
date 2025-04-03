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
    "3cJULCm6a8Sz8KaPnUiRyTSHaoAxE3XMiwjXq9fusvmvimtaqN9WhqvmbXrkNAo8KFDa9Q4gRqScSSL78CFGeBoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "121qqptiKLD7JjgU6Xopi7GVxTeKLsVdEaZ4fVQfjaT2ZAtsFb5aUaWqWmySbhPwH5ANYqVmcgU8jsyKexiEywt9",
  "key1": "2d7VdAqi17pvn1auJXUHwZZysT1vmU7QAhrc7KL3MbLHWyrnLU7gxDEk9tfBwyQ9upiFiKrEW3TosPjq6fDJLTU8",
  "key2": "3rFVK4gf3FgzLb7ZHo7VkDaerh7vvTpPk8xhdNQdxsxeqQdhn3YenoPAHiBtPuzN9ScMN31GAabKzk63GjvREYfX",
  "key3": "2BiJ83uJ18ymDVcs9URAxjJK1qS8Y2CKpwKwQgestbbsSwCpovqH5opqRFznG2SVreFsrEDqEzdeX6V5A1AgJ6Da",
  "key4": "4PeE7p6tCBkAPBWCff5t7p6z3pU2kpQKxV9tdxswcv138aaGTHPeJ7u2Gx3geMTikA95AJuv92hVJH5tKG6xZM5m",
  "key5": "3jj6cPDzKJ8v7jQPt4X2qrEo6vncShmLNmo5RDxwLaXrYKFzvC8BraEBBgE8HtzigVw6nXUpFb49y9qTxCHjv6pj",
  "key6": "2FpGbovGcGbFcuBnd6vGuRH3Tu9NUcjXuj8pv4bGB8zYFGWiDa36dTcMMwpxHDuaodujYReAPi9RbngRPsbjEhVp",
  "key7": "3ksnmT7hwrYcmQboRcLLZPjiQqP5vcCZJTP86CYvir7YzqHAFKBLak5zjpFTTLuf6TCxGhaDweo1CpjyUbLWxyCd",
  "key8": "37zB33MpbVjBgkGnJx41ns3qVkp8cTZxXHQjhYKfsgAjh6YFk59nF4ohMD1LPydherSUw3JNd5v979MkDoU4bxdo",
  "key9": "5XZb4c7frXCufdV8bQw9qvjTPq3egLyQYDQDJCDcqbiB4aDTjF8s4Q1gsqmFA1Ng9C7uQvXLzEpg8GBA6GnLCiKk",
  "key10": "4RVB9VvVA8CdkmdF7MZaaNxu9hUPLZzM113QGRKmDWVci6xHynvhhnmj8Y8Gj61HkP63CxpvmStGWUCsGN3KPhLS",
  "key11": "3MWD4KMEnj3vHrBzasQU5MQdGbsnyJiK53sEAEA1PDGxYJbLLmhRhxgEVAATf3CnSvMiRRby39MN8m41AvxZd8z7",
  "key12": "3qbWfKH7UjUpCFaxz7JkG26rH8ZJSZ1ahTXBe1asrHrUJkhSVFzcWcFvqFYkZrTwBjW6FgSfx3jgfPPiqy1K11ss",
  "key13": "4RvJSFSSrcr7z4gPU97UVfqWV8ZmEkMWrTq6SgNskJbCTLf4r2w6vkKp3W4fLJ2Af5rvinGERNAxqbmDnMLicGMe",
  "key14": "Y35cw6xHS2PtCa9gknaHJFk5buDFkJHmM7aME5AQqtiZgKEYmHUALFcqYGBUnfR3BkVvMgF8arEjUaRBS3VvhCh",
  "key15": "4ZsZ5BPLcSDDp1UjHHT1u6eZeoNn95TimYYjhD3Lp4oMWo8Lov9Ngicsgo8kG4Twgt6k7Ny2hXuWkXgu7a871hec",
  "key16": "2GCUwjuXkDeEN9r4FktBBKYFmGNsvc8vqqXfsEp3aUJhWAXbZ1ugXjjgh8cgYtaMMtMi782agQSNwufBGcQLTT8F",
  "key17": "2kAzg3816Ngz9CGV2pPfedDMJpEG5RHPzmV73E7oPPEoq2VgCWozmde9DvuHH41JRjAzVk9gBN43RomsdaoYEXAB",
  "key18": "5RHtWWGGxVNTpJxvpqEKwSNjKnYjkA9Tkz8P1ZUKLKVEu3vAzSdKvMyY3UbLRkLaHvixUNwWCAMmuUT4jHPVfHgb",
  "key19": "4DnUjf92H9fPxpbw7VGVc2Q3VKpGihYieF9PiBbNwiPSNF163diZ8N7sxVSMKVudYTBUGcQHcVvDV59qfcSi2h2w",
  "key20": "36zuaUDTy2DW5EZo1U3HFY4SQ1dv7FsfYRcr4n3PbWpejz4CgFGymVsKfeRyFRSJz41EmtMrrgEisXJqxSfBhA5H",
  "key21": "4bqf1WTLJAqCzVFwVCTcM2JVKAEGhaTfC89nqDVkyoxF5Mu9ax3CK194wuBNrsiLUxpvs241Cv456wgy3yHdSNiK",
  "key22": "4LhYrYWY4y8xPDQTGUE6K7JYnUB7GD73i9NrV4GRU9qJnPnenT3wRPEKtiLrzXc2jUZFKthY66q18hgXkky3ZCGk",
  "key23": "5PfjtUohKw1P69eG5mdQLKy5K1RXSgt2hys7dZWUgdSBbN9ax4tL7jmmyxVx4jn6wCyHxUktrnW3a7DvgnWY4Tko",
  "key24": "2ZFsffYEPc7k7wUHPmqsWk8sTx42D27By5r6HHFBguw4NcgZoYjjLuVPFU8tBsJWPtSTN7q7jEgMyKBV9bVSnMqA",
  "key25": "5ZcumfvkshB2wRtyGcjuKS91G7rZLWT4gKQGrrcgh9N8LfjxjcFGWwZ8BPDE2GU1g4D5mGRTWUMpuywsiAWGqgue",
  "key26": "GfHs1iJFYgG9fqjFcUrxyWYZRhy9beiAeT8cvM8HYUS5QCiWWCM6NzhvgSBfWog2U3ejpnsY5F6B4qqGqNDY941",
  "key27": "2xFxDiZFzEWn4ThPKv1Pg1LBtya6wEQuYThAjxsx5wdTT4PA27MgBMhYVCWEtBDxRgA4thV7FCkJiGrSNk8sZUG2",
  "key28": "41F294ZsL9VGNAobZjeBLUh4ydvd9k4RBxqoEv3UHHGuGXYQcYBW21kvcsM78mvPhMd1dxFRMee6bbcJLxGgnJgy",
  "key29": "53dFz63Jgp4gR1JdqWApA1cyCC6dosZaWfkos4AmvZRVDPko7wxQnQGaH5kt26Nr52BgbqrWNvjnTpQfgQcK7wtL",
  "key30": "5HboS7sKTV4VJA3jKP1pnYnkh7gMxthCJdShYd26EDrsXQRU4kGREamkxkenFFetoDfzHYMF6wUWFWkThBhqGick",
  "key31": "2dLeK8w2HRVuYWdadTKK3NNd1EpoF5CReAuhiQfNynX2YTFMjupw788Zrb9rNmGaMu1rMG1Y2rjcZWRnYbTAzyvQ",
  "key32": "65yUgnfR2LNBMfqeLk3PJspwp2ZF5fjuqHDnemsojCkeaAiFRqQNxNB2AjxL6fTyiMFUpQ13nUQtAPZQu4TyGS7A",
  "key33": "2Nj7j1gvard1JXi1RmgdCFMVUgEmz4GaE3R5kTVLNFarN5ci2PX7ZAMeAjxVBScKRytBHt36sKN49Z53487VuwyN",
  "key34": "5D4yuhCjEy4oMfth7e9oFgsSv3eiF7vBdzGZ7gRNgyJDDTgXfnpHWDYGiscj1Nrk4CpLVvMRDwZX19SpyEnjEFnJ",
  "key35": "k1Y7EU8c6xbTsTp9dBs3TKxEaEbwAUCuZVrF8rjZRmDrSLqX5YHd6keB1YsCNHsNjdgpt6UsWc1AYMaCf9b119z",
  "key36": "3QdLARdMvoGkfNYd6UFNPHe27FTz3NK6FQLQZHDQz8j1df1L51GCMbyu1CN4bEP1qj7ZksdyPoJ6JZaeQkQsXwxp",
  "key37": "4vmUiNVnfxXKsP8U8KmqAFYX7TymqnTBD8EqZnmq6ETHngvtL8gMHU3ucjthr9nCahakUh4omCYqmzdxj4yFY2DY",
  "key38": "2uvWR58yRbyDTg4sX5tMNLyjwZkBP56eR3ELiFWzM37ZVkZE9i44cMPVN3uV93pH2jVddEMchsbFFiTe3iQBdDbz",
  "key39": "3pxSDaak1ojdePRLN1j6oqKU9zTuTT97C9HXy3VVFam8ExbCqkEYBizU2oSEwRxHcYEVnzzjCM59FczxxdoqASSc"
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
