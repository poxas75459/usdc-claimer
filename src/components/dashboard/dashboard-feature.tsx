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
    "3NgHwBwMfRom5rcAbucPd2AKpHcpbWzz3cnukWva85A2FaDJW7TbDp4JtZhoY4z8zTnDuYpfExBDBHxV7vbRcXCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SRrA7i49Zn26uvQL5EnAcsbgHxyvSGWP8383YJGstzcnehJPBBS3Awx7zst6Dhrr9ckkBA37Fb7pQRR3MB87gCd",
  "key1": "5vj2irp7UFYoFPfW1vByTfFRHmMwUBH9wJxzrL9qke2TzbFRyZfXa8mzV3utYDjrzcS5hgYxgXeswHSxcAzXyknW",
  "key2": "Zmr9FdQBxnFazBTuXNGkb6NkqpasgjW9zUPU2qSGh2158bKAfrQUXwiDxCRvQ4ahpW6TPdcdRvP8FWStdyYj2wD",
  "key3": "3EomssC1yeXZUWSNUYfVwL6VrnYdWPVYh1HQj2qeuz7GUCk6JYaWMpPGsV2LyUMNJwzwvxg7LJBCoGNY4qAmSxi",
  "key4": "3wtgwwyQMMNiyWkRZR5LqVy5ua9ehRKsGxCgjuG2UxsnGuJ497VndojqXTRAt5JLzBNoJBzxov7d5zGG2D9LrHdY",
  "key5": "WQ2MSBxqDHjMYLmcWkEGQqQupmPA7NwKuoAym3sqbzPF1BnFkpNQhk6mGhX2cDZtgDr3ayt5iVVrDuFRm998axC",
  "key6": "4qfsHUjqSBCwwvCLw6nm2DLXEyDsRUjYasJBw2pXtKCoDDAAf8yY34n6DEvymDwcZUZppzfdiEEn4D5CZrVcfbUD",
  "key7": "rNWnXGnCBrzXet6wuRLEntDZVPC4cnPF7eDuATqEQ3rgMPRJxqE81A2ozMeaYcYeLYU7Twi4LuNehbjHsrnT42b",
  "key8": "2g27SbMXP5jvw6pUneWiXncmUxsob7uH1WnWrEH8JwaJJViTVPVTRSxch25PmRzpZHgzKJn9K89iFCgnWkrQS6xk",
  "key9": "AwQcLXeHWbrZP8zw7t6Ssdzp7ueQTLsFB4KCdNgcnEx6pbH5KEofMJKYZ935sno7z94Fm82srGbWSLPUXWHLq7e",
  "key10": "WFdN1AgWi7pLwXtAHGQN1K7Eu7aXFwdZ9DY5kxHAjJKTMRVGbcXAZp6d3zVAGLEzb6UCdmt9krGBpz7ZQFJceaP",
  "key11": "2Mfo5kCbVGjoYQo72J8DwfdvLcKRtrNs1QUFJY6WrYt7A1cmZQf2c2pykX3eTX3cJgYxc8S4XY5wnXSDaLrbgoKZ",
  "key12": "ENFYpuK2xadA1gZg9moUUAv9W2XTAVfYS8vtv8DLN6mr9sTM6gtnUmW8a41dwJUuSbK7Ps7rUngNoWkrYf3qLKq",
  "key13": "TaS1cHj2mJZGxjbZrUpu6gBm9eCgqaAG5ZwVraMGvcgTm1z4EPuemZiHGXjrd9yhDZ2RXcWh2moqmgeFf14PZ5v",
  "key14": "4x1DDkzQ6HExzBSYF6LXmh4ob5egVrwshY5RjVY3im3rQRKBHkWzJeACwv3X6nxJQjMVCHxpXydnbGwvHPrxAd8M",
  "key15": "23rbidkKeeMZBC2wRkaS4PVaAuduAZFqiQ4aTSHHrKqLWihbkeLLAXvKpGTkQoSVyUQM7WD3zktTWVsAeTQftMz9",
  "key16": "5d7pKc543dUH8XULkZBD4FCMjTgsEq2DG9uPHYEtTsUdGCF8zEEhULnAoatEVSBrs1X25obNxuuHR79P7jf19gBb",
  "key17": "KpnMVYqG14maiFjYFgN9GU7sYanNhhfQRc6dKepACx2Fmewg6H964qyeXajZnGczPw5HKMTsL2gFBTZRhzW2zmw",
  "key18": "4QDJTFY5bXkzgCXsjZtyAjfdbc3N2h9kFwZVKbHdfyA217wbYrNzCRf3ZjBFEXMUmU5AncNBc4HXxiJE3zkcFXLZ",
  "key19": "5hWPwsxBUydTX1ngCgzc9or6bZosmt5zfURuY5WMmat8pq1mSGLXosqNPSzRvnTJmESLUU874P9LoBna6t6DRERA",
  "key20": "4992zr7jkZwyAggWuNgo4F9cJYCVmYZgKytubLs1asmfNNMDfYu1Mchm3jSVbx4VmEwf5didxA4yHBEeHT7nozUv",
  "key21": "4yBoHFFbcCQzPD1T44RUYpu9AyRxcdvvmSsLYmLrjndvHEFTSMBkohBTXFSPFTT35EmbE12dqbUGLHEzSZ6LyoUn",
  "key22": "5mgZ7jbZVdPGFyJ2E4HYSmLn8iMwCBLxeHxocV942LtBwE9XcwZ2iKJnAo7YePLCCf2eSKjjVjndAswFHGjavjQg",
  "key23": "pRUV6ThJCD2RPjGw55kwksJE8b9HocbiUeXbJGUsrbNspKmVwBEaUARLWwLN2Sz9q7C6Ud51c2r9cGDMdiCfvZd",
  "key24": "3wKqTnfirzuNf3Nsg6S9WfuH3MXJj92qhQTDj7ste1FDGigU5zUKPesvdaaWcPzkVjzn6BBVabyKdGTv6P19vYtM",
  "key25": "59ewaVQgK3BCKaVNaSuexv8ABL23AtFeLjNXM8qocPax7iMLPfnekkijC4yCSPEzxnJAGFzowA7VqrGxVUe9qAre",
  "key26": "3RC5Zn2vE4qD3fgkXsiMbVoyeL8qJGrGGkvg8S89CyBpL8dSYxe5QFRqYydxquepBeKCAqM9eEnU9YmR2NE7s5vD",
  "key27": "4ngL3f8TbyA1jSaKJrfYjvk4xB6grGc3UxxN7aQ7PGWKodn6JmEThKkPMjxjZ6kRjUmD7TK7TLCtBuDkvQxW9ze3",
  "key28": "5fzRDA8kZLqFLRd5WRBg2RPtGoS2YtseY616oGu1sSPgQJAsU9KWAhuoowbizrkjiaQvDpjY4cQkE5QVWjYyhM6g",
  "key29": "vrvC3hjEC3kDkmS45kgokbn56U5nK56PDbJzPh9EkN2Cau5SqAZUfWMPAeYuGLAUP7dFDGCG6e7eob4ohhzBzbF",
  "key30": "5t7vmnExigdc2se6vxNbM9o3ugSsd6yoEFp6apmzn5vorW5e9ekjHUGtV2G7PdedYSEZnvp4rBDWZnbAmR7PJ2dc",
  "key31": "4tYCuvHDpdhawKdoeqcNYuMDKnDVu67s2qqadE7a75puGPQaFHH6JwF5VYTQhpV6wSqKALzQ3ukXVPwxm7DHUfMV"
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
