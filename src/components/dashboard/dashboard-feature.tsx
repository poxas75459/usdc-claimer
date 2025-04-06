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
    "5DXCWgzwDRJLiPHvsoSFPeKqrhoqvPGiB6YAixP339WAJPyHVPVZt5zb9eSBmtSdtRsT3vHNvEtsNRvnXHmqAik5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBZPwmT7QWMAGywpDcpyHyNb1qyZTYgv9SjVMgkRd3ShW76rP8D9n8bLCdGsYfHytpKETj9E9hpnrsCK4r9wtQa",
  "key1": "4WUg9sc3UxK21W2NWzGxFsWjpnUGHXCmyQm3rfXqHrCwComD5cST2ZrivyCTY2oPtuDZvs3tgiXrj7gHmgzxFNKh",
  "key2": "3Qr3DqQ1EwbXa2aLH6MXCdndrbfkPfghz2xMFuZc6GkF2BNGec7vDYd88cNcpe9PwoAnyX3NqESg57Ds9GdtJwgb",
  "key3": "58GigC3fJUvtuQR1b2rz18JtJyxWfU8mpTKS7F4Ta6Rif3SuSGX18DFzsWecJHERXdH4ABswHsMpGBiEqiTDN2hT",
  "key4": "2NzGwiiHVMToFhYfNUihivJZeFa3qfXpAxyw7edroPqTyxAKfktrmFXShTk8C5RPXapp5jewZPGHfL646HpEDDkY",
  "key5": "4JeGhg5ud1gkyxrZebodUeHyamXb72Wx7nP1qhSEG5Kwrm3J2P3HjwkZKa7sG1Gr4aFUEvQEwzZRXhsqDqMdNEg9",
  "key6": "2yJhwUPwbNbDDr56idkagCRM9c5nv677z1vmtBgEktuRbkFqZagPJWoncqRWQCgQEwmYFaUoZB5R9G7Q5LDQ3XGt",
  "key7": "5swuQnKdrLVoud4khKLYnoL8MZf5QdtAmrfT4ueG1TUuCHZmsHaAfE61u8yWeMG4h5xMYKXCyxrcX8extzvVtmUf",
  "key8": "4dASLzfkhYiPYV8GNS4nDrLF6jPhr1vDQ241cKcHHBhuwQNyDXSkuQKMTfmeZtYTsmvZ87fH6jRv8y2AriSzd9uh",
  "key9": "4hTzZCBGptyYcGXgQXUk4MrJborw9tFJV9AAQPfUaUTG3G7Vei69bmKTre6Qkdtk4TmsWJLUbvyrazkJmZ7X7Ze",
  "key10": "FeeXGyk7EZXy7TLvqP68p224Ko1Pmnx2U6e7EkpPsEg4xsKBhRwftGSGEm9u8GSJLtW14C9HdKkprvKd5gedSSx",
  "key11": "2pmqdgTyut1P6efWqSUqJbUidjjnuaeZcSiEowzh4dDvpQ1sGkGGNwhtZGMex8ibpmqVRqkJSpqoFmCLyAunb66n",
  "key12": "2HvtTrFnYmLkAUyD1vQh5Za8hTrZucLsza2iApppRwhEw9DpxHMFE7dUU7FFb2Q4aRwEr9j22ouLBqYQ9T64NLJm",
  "key13": "5eFDgQPvvRFyfVKTCQZvcAJcXRXvmTjDyEHcPataqPVmNhPvd5dBLaNop3EKjuEGrhSbN4b4GPxaaEqgfF7N4xBU",
  "key14": "2argNqYobeW2Em2WLb8KJJhBVUDRS8ApffZAkvm3vQmB8s4ET7wt8XBYgcfbqjC5pbSbW8nyvFYzjnyeZpLqhR3G",
  "key15": "3tAmfDGCygg1PRrdU5goS7U62uEww3V4jT2Qbmxsw7oZi3xHqAQy8ufdSWGdVq6EUDUx6rGJgbwMfjxr2dVyWiGm",
  "key16": "27D8seSJCk65taK86287hy93m7k2xjV9rNsT4JnMkJQrwoTJn2reE824WKMEEcts6w5cqqXV78mRR96CW5qoqbar",
  "key17": "2szSXTnUKcJrZ4uYgyFqfaEmpTjqBcEzp1nVgxTDdU5Bnr1BtzwvixxxhLHeKpzrLmTsNNeon85GNkEQzV4KfGn5",
  "key18": "3FKdNDr79ghjZ5PbF161UPBWaULjnZYhwdCm7gaJ98x2L771E3fgxsga3pe98TLbwc8AuASfj1cwZzZA1gsafTG2",
  "key19": "2f9FD87pVSXUD7YxnnhtZvH29fVkdifPxfcmnfMxtsDvQTS4TazCucGpYDMqVnGdgZxcjqtX62gPsVfXh6WxyKeA",
  "key20": "3mFYVjViJMK6o6vfT9mjvSS46XK8ZBixcvF2LeZLPgxRfK6fuYMiL5LvfGULK7bZcvcAziLjQ6YDXSYhWkz5tCMj",
  "key21": "3xTQE7Cv29d3aU3ZmTcDKcnjYPC4ZxcMSraqgMr5ucA3eSwkiAHhfTEMA849GGgdpcNEdfpNQWY6aJpC2M1zKhSw",
  "key22": "4jMH4WJgg3B8KVZwQNmCvemCzibX9fJ35NM6s1J5E8hPHaZ6PzP6uiwbCsNxSR8anzmXCNh7spxSQWPXvNBvNktG",
  "key23": "4HYjhVWYHeY4DRjjEnMYXSTd3MRJ7zThh5yDYULg9ibY8rvXNgsLduhvb6n2ZHX7YngJne6hKw5pW6dFxC9HrPhW",
  "key24": "5MiMnaRMAiinYXWyCgQ76AxVHxoQTDeM1wCZp4b2cRYZP5y9A3CxBdhSjtKb7KNkswouzpHsS7qgqViyvq1Xqa6d",
  "key25": "4c2oYETHPT9N7sJ8XfJsKXeCqdFQcQw2sEKEaeDRKsY7ucaZb3B9zg4qe7uRz8nCqmcpZk98HLbKhVvx2UA5KHVW",
  "key26": "5mqbBK4oxunDS6vbpLACbh1rsuvtGysoC2X2o1XseBWkBWnQEDXRscbfgigvBXkZPJahqPkL2EEArx2UDyYekXW1",
  "key27": "3gRAuN9qrgu14AJ9SGievB2VYG5EC29nKfwcq8NxqQQVtBmkWU1X7zcmsroveRfjycKVCaHYhndu6zTV4557xksc",
  "key28": "4KE54UmHELu31GxNexuhidkK9XsMYGhe5eSv1xg4YJWnjMLo61krV6a1KCw1mb6qksJuJchY6N4dCeb51nxoDVCs",
  "key29": "2HuCj6K86BBgEb2ehYwj7dnPQpAea81pPxbusg7H3j3XBCJofsTbL1zHwT9FASm4DssGQuPhZVfzNSykutsoFyGP",
  "key30": "QnQd2sKmaKsJLT5yPb1gaiJrCWSpt6YYBSuvo7nx3K6T8bAP16CN4UZDFdAVpwRbErMSwdFdKechNuYiBkuas6A",
  "key31": "4rCsN6C91YsdTorbFXkcJXr8q36P5cVPzZyYKrx61KfdjiddMNYsrjn1e5Hy8nnMUGMgDQuhCjFvWZbaqWECoUqo",
  "key32": "u7nucGXhAKbo2msUbhbukULBYxQJqCLAUcnAwn9yL7JAwo3uBTzf1Pfs4Q7ZVQMyuvDKmaiBk3Sub5D4dh5SEzA",
  "key33": "2N9BNP1DEoMyGN8giuozjM8TnBuMEoc76DBC2okboeURuxiymct6RLXAS2tBLMA3eVscU8m8Tb4Cpk11Z9tWFq9T",
  "key34": "3Eq7xBcsN873kwjng66HDQv1xwVbtFBBK4CFfFKGzqWarfhvVgytcD7iitfWEoTWj24dpAhLcbmEXG6o4gcCWxB",
  "key35": "2Uvj2B8qnYpqNYYWgXDTuBt3xWXwjNyj4dX3buQ8BfZrA7Evumindx3SPN1Mq4QyEgYozy93ov3RJvudwZFPq3nP",
  "key36": "45QxpRAiXLECtqSKV9xgpycdeQEZHJRFe7yUmmtrLQVJGWhXY1bV3qYEAkDBvmjr2TQoJXCgr287zWSyU5bRCbN7",
  "key37": "5zPYN5PhFz5aTDwM9eaedYpkSGTUiBfqx8UXUUBnMB2KaXfwaUVPQMZCijaG3m21MADPh1vask8Rkwhemg9cSTPH",
  "key38": "2az6ggapkXoc9aYWBDmaPL56EvTKhvVCsKVTWcVx73VfMjixtzbxXv3zw1sysX1RGkEyhzNzzJPysVmJz5PRDgRT",
  "key39": "3ZbkPooiHDc6XWb3PqnyresF45ZoQ6x2um7DKNWTSgS8r1R3UwC6wM7V7YqV32PgQbGkgWbb1GMwi9MRgsDkZ9Cw",
  "key40": "3NhYCAULvp4MmvXVUxXDDMuWGo1K55qACBrBpqptHu77UVoNrQ35BLpG9MCvS2621fNg1ZXDDEZ3sUPE9BidcPsM",
  "key41": "5LnLrpaMRWPrVHc4UTDRqUWhEKQzMboZu8uPfXimk6sSty3VztJhmdgHEbto22UiBg8jBhqfu8Sud64U7J4u7Lmb",
  "key42": "2BryXgtrCtESpzehqbC3BUDHyFfBgAxw4vGWMiwrcKJ1x5j6YDjw37i4rfZnQPfshVrJ4UD4Dp6r6Tg7ioCGAL1i",
  "key43": "38yaUKgn9uaEszuyVTDdF3VyHFSgjrdoBZvXGyk72fJKSjePBWa4FUXjkjFrvXE2Bz36RLuCQPYyWJbiJncgXx2p",
  "key44": "5uPwucaKyNwHcMVuXwaLZfRzoP5W6hn4L3pD194sJkcA6ZmYfTy6zyTvePosQQ1GBjK5x3kzrNkwupZEstiuDbQ7",
  "key45": "3NUsBNCwnqARJpzw2k4rbRMmQEmTX8sq3uZMmzZh5T9FSZUuPXnWQNT1tiFQ3yqiZpBhS3fTsBe1TKVAn3QQCusa"
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
