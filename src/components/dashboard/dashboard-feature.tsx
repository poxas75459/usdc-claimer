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
    "4jyz5VZPyXd9Mam3EjujgtZWp44cpuFudkAMz7ZRdRSfT3NBHXNNLjT5Nm4EpyFDzn8jXzhtDZqNFcPpob4DUHcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54j5DYujiViwmUNGokgy5KY9fCBQJGjnPRhZ4CofG676t5uLa2hPF9w4NY9ttURFKM2P3JQXVfpfLt1erSjn6eY",
  "key1": "5zeFNacmUtyWK5bdFFNuEt8DmmbEEEoTcNyXWjHTnft8vMPisJuRUjoswDgkGtMjGiGR1WCCMsXXhLpxWEMp5LFW",
  "key2": "4rFUgotW3R27EVX9zYJ5yXBuLoTdRLnLEYc4sY6GK9pRuRexmaHDjqbu7P1923UwFnojpHZhmM6B4DYJxD2eQqSJ",
  "key3": "53dgX12ezY74utYfbji9Tac4EwkcM7SUjJSnV9sEWbHhmZF7ogcUQJaL9pQnqYAVpzdvRhSUQjpETHR8kRWMySQ7",
  "key4": "4HYk6ass5n67GT9oY2wi5gUs9Jxm59WkvMHqX3KGR5S8HkwdD2W2jpdqUTTREt7C9pcgGTsnugKVKC9wH9brM67G",
  "key5": "26SFQdP8gue1fC3a3k2QBvYtpB4neDxqJq3uEporwzRxzmUQcN1kdhsa4B1nj6KKSYAecHFK3uA8MHe2ri9AEUHW",
  "key6": "4pob1Q2CSnV3DEX6aovquRrpam8tF3omtoXdWgFFUEF2k4cuGt9BMKhrKDxwSx1fQQgWA4MqSvYbgTY2KmSgm7np",
  "key7": "3PVwb16LpPFhym7pMvHDwyJRpwEDir9MTKEPqeg8WtskS7sFrogpysdnkVGmPRhTbHNRa2VLE1J8MnE6XjqnNpSq",
  "key8": "2Qj9vbwC8ZMJukBUoMB41NE3nsmcfrQvq1ZbqHTyBeE8GJBm3zbbQRprujTnSDAhqqWdAKkrkk9rdrGoWeWKeMkV",
  "key9": "MhWviNjgFQjYYpLa1QDYQA24zRFEXs622BxFtbC92CeCsTWqLj2FNy9sXQjFrvw93bzss7SCHBh1vbx1R6LCDuD",
  "key10": "tu6coFCubdBNh36c23ecQv6n159YCd4FvkLvtHbkRcbUqh5gYpk4dc3HXzhpeVWvU5ZEMTd1xDNBq2ZH3eLJ8t9",
  "key11": "5CtdDnZ9qLqVAVU7D59BNT9udXw9uYWhdzXycjZZBJbcycUwPZRW8jpHNQLTHHWDy2aovd4itvfZbqhxjNasDjeN",
  "key12": "5FEyq4WW75rf1Tq9SYqfc4Q6UL7AzznEjEKSwdnWxmu6VjJXLpF6si4EgM7s2gP5eiXYMTGtntDYpG1rM6AcgArx",
  "key13": "3suesMq4sByN8CimcJNutPS4DUdUJkq8dYnp6viQa6vkAsYbkE5hPURsgSQTuadY9Cj1FL7TzmbvCaD6zwJ7Qv4N",
  "key14": "5BRc3TtpXm4t5APxuvcZVGQxTyScTu3iERKfY1Aecf9Mc94UMjsWxjMzPeEZjhy2SSwsokCx8rqYusJgTGCXEjwd",
  "key15": "4LSnMXWbRiGLkRqu2KzNKfCY6V5EaWRvnfHg7CgSNc6DM6c8yiTuieA65FwAZR3p557pg2zLLtTbfComm4mzohv3",
  "key16": "4VS7CRCJDmvEdLXYpo7fN59gXCvWK6ZLS32ZA3tvJrb9b1S6dg6xS2Mw7zDCjJ6uorHPd6MTKTLCNpHQsMn6P145",
  "key17": "5wKfHApxsW6HRbj4CePVSK82q7jU8z3Q9dbukaHzrRKZDDuntWfLXxZNkryrDCYvoXkxUCRUvmkso3pHVtvhTR2x",
  "key18": "33TeKvtb5sLRZVoK6oyKDgS9WTqNSqvnBT5MaW5QBegCRngfah99QEWkp5ZuaTj2nmzgGFfKQ84fesobRGP8dsj9",
  "key19": "FqqHK7CdQqufB2veVqpk7skXyvPMWaKjBy3XD9ZJRrwXR2onUgHpGc9NvKpcQrpKtZzRGMHY7NgCfTLw2gh47F5",
  "key20": "4xSo8dZyk3KqjLYW4immJ9ZUbCjpP6Dv2HXzNu1avGia7Kosorx2KbKBoe1eTNR9wxEZFMRmpHjXmKiRSBkxBPJN",
  "key21": "4da7hwcuj6YTmzW1eXjBNbj5dvPAQnmFWxCZCBusCJVm7vg7snUrdDT7VfB75u5JgMaMs1JkkmMEdQB4Z8BqCddm",
  "key22": "2gUg2azSTDH5VmQPVNsADHvhdBX4ecobFUy73xo9oTCz2Dpa7mtChSKeM7iEytB4nx9kjZm8UwYX7W19zpE8xLhc",
  "key23": "3WfW2AAuaHywLYhneKEB69VuwkuTyDoR2mPnZQkz3nGKYzHN7nrfvgptLhXgnSzfT7paF8gEoejEvbMW8zR7SoHQ",
  "key24": "PL6b5Xnznz3TZNVPZ8fmjoXLYAK8LdwWf3atmsBj2fKSbKYLGLbQu5Lov5qsbZ6MYCeoCL6WACav4sYvGR3UHiz",
  "key25": "2f352mQhgwn5WA5rCSEKs3JAGbPnVMjoATr2QUfCCtQ6fu25FC8NAuazfeE68UDQ7evT2Pof2L1xPoCTiGCk739a",
  "key26": "2qo3jseL31mRk1No32YeXqTcHmgoiwAPmsriMPdbP95wRdj941xKhMih5ucgoLDwpVbsvAyvdqR25bGt6kGcMhh1"
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
