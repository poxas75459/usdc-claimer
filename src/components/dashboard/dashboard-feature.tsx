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
    "3iPDxZVxkCcDct77LM2RBqz5szgKTqZeJ26z7HrVASMx8rbG8e2ud1YEBk8Gedsz3TUZkbsfqDPgeSXSpcK9KUC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gJXcqK3G7TFVm816fWxVxcsSCoi1GBAcYrnpT9AEMpxBRfemu9a3CcZiDMcwu1t2BmuN19CH1TmmNDNGDs7BYeA",
  "key1": "2Z9QcaDqoZAwjwXQYRYyGwZrySHive4Dxqn7DzZsQHmSxgoxLvdQ2USkQAc3m9onDEiRt6H3CptLWrvvSbxBYE9v",
  "key2": "KCZjcVoigTAxWRtZ2B6PrnG9UTGQMY1wci5qGcAvJ9qo15jgcHdR8nypufoycq3kznZ1RSsBBZ3yFGWTZcANG9v",
  "key3": "4mMPCZgF93cja1v3qm8tr62Fj9qmbPFhar7Lhmfu5gT9Be63x5J7fFhHXFFftNsoF1mcPRzk1UAUuF6Yp97KDwdJ",
  "key4": "2veWuyhY8N5auoUdmzRSjREXJhF4RTD7Ep6Nz9bGxs84LGUUJK3aay7sBjCr2BmL5FwmkfiwYEJcH9XoRQ83eVEi",
  "key5": "28Tf98zRTtT7jiidz2ik7ad7P69f2HGAPW7PbMoyX6ijWx4JXvnjYaPLNCC9dYQptXCK6YT5WRQqyf8uG3NFQTdh",
  "key6": "4yE8UAh9sTsyG7hq44qTQfqD6bKXGAptckb9Krs4cp8tggeHRhHDJhgcvwGmSWpcaKj4TSz6FB5bKcpYXv8vb8oK",
  "key7": "3vuZLDU3TXcK1KLehCfVHKo4RM71Y5BDLkWAkBSrn4JmnuxsvsEqhL8iEL3yAahwZDboCwvcgPqgyQzGvBW4Fadw",
  "key8": "4LRwUtE1bLMgJ11zPo2kvJydMtStXu1H23niqyjtMKKx4GJ2uuYjCc9fwBGpSzaWbRnBaVNUXLfEhMYFo6Uv8q8F",
  "key9": "23u8hmmCk9ZrejXmYWh2Lz11icdcji4thT2NyhXbDMP84XJoFKoSk5Z8YmNGxpLsECRCqGqouUUTsKSrmJZHMNgs",
  "key10": "32HLxaD6cChDB5CAxBc5qDZPgcgqGuDszorTfjWFQXuMR1YriqeMJ4ZJ4bGBcWkfDNua71vfxwbLoWGMkZsB5Qp2",
  "key11": "4DCiMAJHYY6XDSd8p9BpLYMBL9XzqByw59aP2t6tMsr6FfPsiWuxpaTKDymGhHPHdosiwvHnCYH45rMFekv1tPVW",
  "key12": "3zgMy42U2ANQRSR4RPcFFDFKdEeRZdh2VNk6Wq7dEoF28MUdqFSBgJ2oXW61rBfSZ47zbWyB4NsnW1f5rSuD1GQd",
  "key13": "cQMzmz3QQESTRtrcAb6dcAitxoV9dDCccsLKjPaqRU651PW9YAenxmkt3nSnDcT59DeZDmhqyGWVZMXcArcAwLJ",
  "key14": "2kj8hepmE3AzMGvo4SdNrk5pCTStYf3HFcwQ9HxZxVaU37BvgQR7dfdcnrCR8Tthx2SvAHCZ1ThNjKqV116iDULD",
  "key15": "56dc3jqTWQwzpBBXx93KBfixGezPcu7fJvLo9ZnGbAtrtD35f6ycAFNUk27hkavdSXjbZVMj9wmJBvMMhAtwX9d1",
  "key16": "3u6oCUAdGfXK2YhKXVQAqP8SAkX3qe6ixLeRfa9SzZyB4KBZcgcJn4Yqvizn6fRT54NYZD2w3NpQD4GJCa6ugCtW",
  "key17": "4GnZZ2Ape2dSdwQYdGPzStnxNViThUZhCZM14XwAiNwsmsgWKey1YmvhKWDfWvf4o3xVvPWebogCe98PjqPn5N6L",
  "key18": "2j7h1deYRdhhHiVdLAp7NSSuAemfyL9gei1ybQMD8PUSygqFZEiA7X91pcocGYbAgfPfotEabd6jAKUdagyH1TBu",
  "key19": "3p6zekyuMXPj1UgmkFZdZmtAoUFQGjo1J7VkApHNi3bRbkBddehPNcRq7arHjhWUqXAUoAccdwG3rHqCjGVVrxSV",
  "key20": "28BxxDGBtzuW97ctZJb6tLPrBp1Wd2LR4gGR4murgu5NRHst4viVr5phE9xXGUKk2f3YfZ3grFVnJMcwMjMdJ3CD",
  "key21": "2QMKkfgPhkMWhhBnP9WG2nMp7e5YWpUV2ys5cTZygqCYstfb9RdiJEaE3u7166NYG5kS8h2HZn2X43qbDMSXRcmc",
  "key22": "5fKPHMi3kULy4Gi2kP9BuZcYeRjjUiNUQCo4cMEPX6ASCEsMyDJyzCKhKkYKyiWRwxbG9tfquRKNbucMD7XVgvji",
  "key23": "5Ca2U88fTDMu4rhkKg1HE2dzkAV2iMdBQLXRr4KDxFxdq5WYy9HwXKk5ibkAW4oegB5mrKunMKgPjCxk3WUjQLYj",
  "key24": "228mjFheHrEJa77WAXrVq6yh3pgUSoh3FpQS6t5hLRbZz7bHdPfpcpr6kSLPReHTGnPQjJ7kLw5hGaGgyX3XZNkz",
  "key25": "3HzndcvKgbSrJhiGVWcjEpyT8Exk4PA6oNJFjji5fzJsnYYmFoSNED6qfPWVbBotG5WWCuCjt6pPG78M2f5zpfd2"
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
