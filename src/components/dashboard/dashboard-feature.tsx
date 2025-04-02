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
    "2qzgW3K57wEsd2rSdGWnebvPxTbtZUVMyS1SpzwE6s7TEoNvcUacfN6PFs9cuGj1bzbmCzMWNPWEMVEBfC2Xy6y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eHzwwy2zzVGQe8NfaY3tZksi8oT5wbRFaZuD9HVGTrNynFwXrExocHGb9Wu5ZBfimwE1rsmbdWfbSKVT8WE2U4",
  "key1": "5FRvy3MFf4KRLjSmnx2rZ4JtB91pF6L31zqUF7xrDjXHTsjXivUBDoAHRA8qxmjaax2Ct5f9nsXwvRCwBfauiGh6",
  "key2": "5MSmGTf5ssidEeq7H7k7X3JjZQp1c5UFdFdYh4ocuT7H7XanFVHPuqPQxhyVXHT2uLQJrjscwS1Vz6MmPzhkJ1yC",
  "key3": "51VK4QyUprmC35bKCeiN5Rkgs7mHRpKRSQazpRKwL8P6ir8HGeg31pENDSnTxLDocg2TvStNXSRdszbk859BTcCZ",
  "key4": "2WhWHBBefSXZFBNZ5TCZWGJ8kLpFKX6tMfYWPUCNLB6Ko1wTak7tKMB4S1Bu6YvTsASgtnBFBGcS33ePLpRMatoq",
  "key5": "S86GUUzD4ZFRntJfYAjcVmQecxUArdHsKz7uvBZbnPUWMgjs1TVgGmubnTPWNu1pEvE2QsQ6vtrcWGCRie7bcKA",
  "key6": "3bMqRQyYnPTE2bGdRvWKKAYkTWVfLP8NPyLY6a4H9smw38dbk3QxUNcuHQ4L24WGTsqvVEgkadccrMGo6qyFk17H",
  "key7": "4q97FweZL649rUCwvCCLURpXHstmbr7AtWonsQVJxorp8w32JZZXa75QcyskTkHndGSvmJTjrcGr58PsyWsMEAG4",
  "key8": "3MMhQcFPQ6FjbTJgCcq2c4ffNVYcPupDtxBM2BT8eAdTvnRZMvW28frpMJc9cJbmKkzN5B7VuNNYs443xKpPgqBR",
  "key9": "4K9aQsJve8g7HDg4P1gwjMQbcQGkNhxAgiyPZkpqiPibgR9TUu7sjVo9YAnZConwBfhh6pUThJvyiDW3NyoYTxjT",
  "key10": "25muzoqCMvbMtgNcxXmpJRDph8CTbYW1P2m4VHTB6kiHfqUgPGdZsGyHmpKVmv8tDS4LvoJ98THECyuQ153n64qV",
  "key11": "3v4HHRExbzJQFG3riFt6rur1hY3NrNuD4GWDGbJTMX1n4B4oGffxxVJx44scPerEbVMCB5WJynSgLewTsKe9ScnX",
  "key12": "qj3DtpY613gVLvak7CeUgJLDL8XxfT5mu1diYjGvCejY1nrqUxxmBkW8qjycV22GVcT7BDCTbn5jfmxDsqu8H7m",
  "key13": "S1GkaMAeqiH97bP8uabTBGy4aDGxS5JrRjyhKMZ3CKuwUCHSiwx7N47jqPvEFHPpzfFRUaqJkkXu3tGpjLfdEfL",
  "key14": "3BnyUEinb5oXFgDGdB8Bze6NGtxjgujqazsdbc3aaXZ6DQWU9ToWgwSDvi76uaDaTv1sD9xbeNmMmvHgg9Q5kyS2",
  "key15": "3YgV3BwM7DgccY6GesPu8n9FkH1LiqqUST2F1bnx3Z1xHbapCjnDzz3WhoXbKwRdGbmmNXzdNzCbyLfvwpVGnjkT",
  "key16": "2fsEQyxFTPSSMWaCPEpDi3Hctmj1yY1SVBtzhbGbrQPsk1YtDwZu4FF7L9LmZPwF1kSpRwcKYWFzSFCnM1Sg6P6J",
  "key17": "sppaxb4x2tstPGt5JRU6TBuTEbAu6v7u4BXaJKbVKtzPzCG3TkkjVdASQfTHsRHrSFfjDfstnmDQoZZx4KzW3PG",
  "key18": "SFcDoK9TqDYEK4RicF18sv95Th7Cs62BofKCAQFN8yYwwyT79jXPcJqZ5khD5Nyjqcc5dpYJdu12E2NNfzJXktm",
  "key19": "5tYm14uzFdyXeBiSSgiwhrnV723G57NHbTLseYPVdFLcftMtUs9irhbkDqEmyFjX81sqeiC432YrT3CVykyah48o",
  "key20": "5mzheaX6PHBqDwG27RZNizgYn5QxhijMmYqe7eBTUPmNguQJmZ9bmcaixvseWvG3w3GqDJajajBjV4i5z4xfsRoN",
  "key21": "7in1FEfB4oduRhf53RLuqntDFMRb5uG2vtpGVp58eP3PP5pphpAWtchUkwBnsresfoq3jaAFT8aQD7umcgsN8jr",
  "key22": "22S7TgaXP6hJpwBcuKgDgF4vnxUKT6yjxyP2JJiWT51XKps59fBh3BnAvb4i7iBgbPh4Jz7iXFPkNgoMJgwd4U1J",
  "key23": "4KPoFGvjkbTpSMVNzSfY3rUYEWCsPYcVcDcanZEVnm87SZyg783vwsC5vWUHd8qr6sSEkLwirKTYhCCwbh2fHNCi",
  "key24": "4DLjtHZRoy5ffQNF2PF2BdWauqrSTTMYWdvehcvp16piKhM9ECwZzjq5TaNZiwtmLyL47LzM7BsXxEK3kq224web",
  "key25": "53Rgh3NAxqQzJNpqxdhrCXpiJ914iX1c7eAHu8tiPPh9jc8JtCzEfNCPX8UwgSBgZ9bYY8kEZaLQDvASreESVS9N",
  "key26": "PymNzx9NUn6xRcfRVQES3WrAkZcWqoPh3nvyTiFPVzHr2NSQS8ua9sctQAoxgTDPpyusKBRdXtXH127FM2dzq1E",
  "key27": "ww3s6UA4VSQMc1ecc528WhoFkZ5LHDL8PUcbZrwS3bKirCy99YN7ndeeQ13axgqD9BmK9JW5r3xmoSFpvyhaQK2",
  "key28": "3UGfbhqLVb2fEZC5YhRQnjD2nutPTMtR6HzQKouycouBBcojnMjiWK2pDvGF81e7fgwAFeVq5QaTBV2AnK6FhCgU",
  "key29": "rQAknYXbWfDpejfogjt7P1F5bnAyYe9m1PXGqfyXajndAsn4gLHJZ8E2ZPHSm5jy588Jk2ZZKGvQN1v5JBKgfjf",
  "key30": "3he3UVduedEvK3M9vzTP7S4vhqyMepQ641ztUfoVWhhAhwqj5DzcPdUVDJaSoSkRYXyZhXvdTvWdJnfs6xJSCZo2",
  "key31": "34m8EPgdV74L62W5KmbMUBVFEqSzLz1qniXeA8VzXoHUw2QX5vVmfZ4Nyn2Y24yKUa1yvvBoPGh5o2k3d6sCbYQR",
  "key32": "2kCsGqVYYQNaC2XrvGsvkY8hbMcG2SdVNTYiPABaTuvwrczq5Qpdpog8DWsvy6ZXo1UATTw3XU1kFfTcRPk5VvEy",
  "key33": "32hK4w4rbyTv1xiA9DJettoXD33kncNFxSc43kESsr9k3UwDc7eJ6Shb1TTDJKAg5Z8N6U5NmGdW1vy3tjpMVAaC",
  "key34": "pUudqdMPefpGy8BgDci8wwTyz5x9E2qctH1RGhJEacJ526ANRzD3LrDiZahKP8BpFxW45sSjFbLZWi3x3sUo6JZ",
  "key35": "2htqs8EVb2zGezfpVyq79yTXovnZuaFsV7V8j8sVSHkcYAyxLEjTdCBVswUZ6Vshoi1bFoGSTByVzTDMFKoVSy9T",
  "key36": "3oWLyTWSUGNi2hqFRwXLuHsL1k7MxpuhkBuUX9z3duqCRBvvzar4ccWrQdhjeH6ynVdxoxWcLz1AFWFCUpezcczZ",
  "key37": "7HwWYx1BYpGuHtraWchXgeeqQWQzmri2wDC7ea8wtbUG8q7xCFac4NZPCa7rM3eL7Xq9WnRqEuDg1RRiRJsiYMN",
  "key38": "3kD7tN44bWzycqzwZWGKmwTnBQGpyWXKA1FDR5qQNiSrVyS7ogSrroSbadLjcSeek2LLRu9ixgDoLQ2DeDcRHjew",
  "key39": "7GexY9KXmrTJdZXajhRSbnY6982iPq3t7a4Nk8QhfFxmkxnSQkrjT7nad2q5QaaJ13oTrPoUMseLw8hqwM14Vz3",
  "key40": "3X3xY8pt7zz7yBvuVUiUwQMH7q4KrCvMktVBGzGb38z4Q5JeiB4iMGyqNnJ8BjRvrSptgNaBEQUbZnuvPmpqaZ6J",
  "key41": "67dKVvA2zgacyAvxcYqKP2yHbtrDGbucPPsK9PemaNHXxVAphhys1YZgGWntdLPk6GdvVYuJBrS5ni3sc8Sy7Tr5",
  "key42": "5LZomLzLpZ1vKEf2METpp9irdFPwvzyNrQxyUPp3UZFfTH8z6RLr2fPDfzAs5z4wTxs9cVKtfGddHgytNVmv9VzS",
  "key43": "618NdUhuwhqz1bt7iHtxarUM6PgWnxpt263kn13cSdDg7WpGopNSkHU61nCTzau5L3KNbHsHen4jmSqjHStcs98E"
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
