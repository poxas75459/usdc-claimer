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
    "5tU7PzNY8BwpJZMp4pjsZT24vEr5T1G1Sa6YXVxqvVA3fnGk6ewbS1WEHu8hEyV1Vh5SX5StFvvjMbWZgaHh9KCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeWhmZyydXU7fNpkinRxbdjGSnxrNNaJUkJN5zJZhsaauSSkfHjzS3xEfKUsd1Z3QJMBpggevcaSoJkhUjUHeHv",
  "key1": "pLvtGcEjhcNsB3MqE6swYNrKp7SYmqqbw1iwanduyfPSMwxbY5HkWrMNmyYWpu2knGn4ZVMtrjjvuxMkTuMWYZs",
  "key2": "61AcwSs78d8UpHpuVv8N23kNMFrZrSJPXvub6kNN6UbvWVG9Z8LoDNjFZgurehxpU2mKRFmDb9vnM5rZyv98tQFJ",
  "key3": "2MroDsPna7EdrLYbPkFf9kPCZCzdoNqFrvJPjdbDuLEC3rJ8QEtAKgniiqcnnc9hVfgKzJFie6YR8AorQAgd1rzw",
  "key4": "4zUHY1CWZy3rnnX1DpkDWUBonkLVPayXg5XQ3YVbTCHcWcfx9Dra6u6yB4sbiXanBMJaUmUNx31HLSe5Wxqn9uCS",
  "key5": "5t7CuF5dSCPNioCX6mqYTuN7CATGDeUpTu55kMnTAfHYyxgdXTqK9CjZYxpCRurxDGFCn7CjqskPfJk2cmFwwMgN",
  "key6": "FomdPcBh9nn7tsWN7jgxkzpZki9s6eCWiFPZZjgFbeSNKpLx7hcSrLCHFkb1iTXMR4BdK4YHYhcptwygASe5A9k",
  "key7": "4PvNB4FCw88VYfGHuXMTTntT2wc9NcrLC7inRpYA8KKy1XzQCXymdq3c5LbUB77VjXMzQnDVUNdPvL7wQmbMuxFx",
  "key8": "2NqSkLocWUgKdWLFd7Z2C9tiozWSAk93SvqPCxseaPYsp9SkoydxZmXUAYxpuiMdbJ8GLjPWcbzUJcn518YX5Cur",
  "key9": "JuwQT494gg342tXezeoZYHUquT4DFwKBnk1XDRuGdUZZgNSkkBJAgMDq7ts8qthJ4fVmctKE6rYPZqiBtpFJXMJ",
  "key10": "3eeBosUvpKu5NnqkqSdXBz5aLgfXQ2h9zNXd4YvMYePJVxTyFjdbs54AgVvq7DVRTu81hdMVf6QjiW94qSKq9BwZ",
  "key11": "5frZBKPr5t3pAnQXE8s4GXJqKWrpZbn4xDwBhz4F13DpLifGdr5XEKzfENUbtsC3JqrqDabExULakDkta7hZwLGp",
  "key12": "2YyMWKvUG7AgJMWFX7NwptVE26Cc5k1bTqW3X1bYmXigGMbG6oCahJkypUqdpTdCU97CJtrZWAjBcCrNSYfPgxB",
  "key13": "5SzRWjt3Bw2UhjdCTram2nznjpspUSMRLcZrjWcMPKJQbnzPWSZJyhg8SnmBXASjsVgf9KqYb9fSkHhpaWUyzKcV",
  "key14": "2Zg48FNue1kDHe6JMbuybmLpNyUdmL427fKDiWdrDkjUNsfDNe7y7QrgXiNZmUsJjWMRsANCxCNxTDdGFJAJS5mo",
  "key15": "4bXRnFQn62gr1WXLwPe7N2rwFyiKYpqHqKN1jCSz2MJtPEFT5DnrUsAp39LqjfXG42h6CC6gzaLDTdiZXpYpDbJ8",
  "key16": "5E5ZHCmjR4CtuXd9cYJKj2T5dn4FbiPU2JWn1S5TZCkwzcRcoBBFu5mmepuJwqPRLx8n3A9obwkMjtJpyBq1iRyL",
  "key17": "511MmjsvY23s84UdmuDTDdHTgnEoLtvKPTnMxwoQqYzhYz9zsuTt6ZVw57mrhhsYg1z9AVaoX43aWwUEGFnE925",
  "key18": "2tPXGabixx58KegnvPQr9Uanu4AjNiTQTUtYG9XBhZREnktqie49tRmxyZdzmfes29e4EmJY1iwJuWwAmpiA4Rsh",
  "key19": "5woQvT5goirScy6WjcwdFKC44BpKtgDezyhxv9bsaDadH1sN6WTwUag5fcy15P18nmr1ciEZpYqgUjwP39tVxxFn",
  "key20": "3U9ZrM9RGx9sGrw7KnuDycP74CCdHqRMgQhGwLZkr4MMtxAVsqSuFD6o3EwRXum5EWLG3AfTXcBjL9fUr8iJBUTJ",
  "key21": "3jQgTDomctbPFKgD374Rive5P41Kr96BuB4JzFhb29uCY8sH2S47cxovgBrqfyNtHU15y6JbwC2i1Hr4L2UeRgVQ",
  "key22": "3atXFYJ67aEgk36t6CHdzaZEyuah6xyN7b6ijA4p4kFXhkAbC9ztkxdcpomkrbmqErBtYrfakmMp6Z41SN9ZWb2K",
  "key23": "66XgEoQRmfCJcncfg1bdruwF6rWGT7PNcyxxtEViY7JZxSayrPqunW4HXtxpf8VaEycSeiqhTdN8cqfYQYKG9jVC",
  "key24": "2Bjr5WrUo7RRUNnUBeVvzTskWecSWyN6J826AYpMAjYrJAB84TTQzxgjDJvdZd3ohDrfftvhCzj7A3tnLic9UWsm",
  "key25": "jJffmqTgoBX1XDS1XYA8eVNwHaqK7yN4zXiwtHS5uajddLyNcCEv9vB8B73VAfptxXJ21A2HFaTc9FuA5JbF97o",
  "key26": "QQjPwq6uKC6WTZ8BTqEE3eShsLdEi8QK7nKNFadsPLTx1DXCzStWEhRdH8g6pJRh5bWZboFDE7m14hM62Bs7ezV",
  "key27": "fZPGcdfkS52K9NP3L5jqAH7yASJswuBC5E3YtUok3aN1oFzZ1LF9rRcTYDxKHyA95SPBxn6oxxhK72AE6CWKeT5",
  "key28": "i1v5WB5vUZ4kAAMrTFqdkfnPNazrDy4ZVEzix5nELPrCZAEUd5YXHDMoHmZgaSxvG65Z59ifgXbSS38aV4vEwue",
  "key29": "2cpAfonuSmfaK68XMAugFrvcJor35fiBXLqWhTDv5mSArEmijSQZ2QzGJzKeULxMFYnQAF17pQaiiDDUrzwgAKuh",
  "key30": "3CYLiv2RF8y7DZJWN9M8bGti1V8kk5x5CVNgYCTbN2iyHPq7nwVvQpprzvKnys38EFifxUgSYodztcYicTotDpL6",
  "key31": "2XxrbcJvnpodLWD75EP5okmzXHmVMMoJZ2fwRT6zs76CaoUGyw9X1mspK9bnxCuwPoz2Q7RhgeNoTwmQnBMUKxat",
  "key32": "655FhysQQELLBSPw1r9pmExYxdZ1ynFjUqTLT9aqgpSgFL11h937zxrRjrX8umZ2CijjB3LGxiiRRi5doFYabyVz",
  "key33": "4FHAWUNZZf7NmMn6i7hNV4JKq54yKAns3TtSU3Y4KoCbvv7GoGH1pjehfM7oiKj7gLjaoj15vUsopZpxUow3Rj1o",
  "key34": "2wKVAZtoHCvYGJDpnVZbaPhXJhBVRL8iSEJVY37172YTipzGVS8uYzhRa9QxJEStqM6NH4JajWqRuowZeEznRJf9",
  "key35": "5DYWsPxw8QGBEGDHYgNetVZHQhmxmvMCEtoc7u4ayAFuYa8KC9UM7dKKFtvMabK7in1JQ5jRiU3ScDvFjMHHaLdS",
  "key36": "2BNzE5nQ4eyoxyUGg6cWyibrSfg5w5cJ5Amna6sfipXAn7vdQfktFp8PytmAHNuW5wRWBZ3hhzNJPGjuq76ceiFH",
  "key37": "3G6NnA2zkRS2nK6CVSVKNtxRVu8FxutnZp32tCifQnNcXT253bhmxabsHBQU59tHxT5ds9fMbFE6nWExHLCnyfV2",
  "key38": "2dHYoseLC2yC1Yhj2Fh2rFNzrdytJifgRaNxh5wuYra7bkAjxKThfzeoCoUAs5V46pEb8ySjNuFBRNso6J19GTrp",
  "key39": "4s8atJ2Dg38j6BLp7Xnjqs6i5gU471qNyMPbnd48Y73HonZd81mdBj2vaT1n3KtjG5ByeLh4h8qA4Bjttteudfg3"
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
