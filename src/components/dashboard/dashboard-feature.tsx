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
    "y2Wk3KzSUUg4qTpdh3jJbJMudA27SP6KoyhLZ7Nu7pWFT7vA9G7wYVWHfhzKJ1RqZttXqqbQkHBZd5Fc1ZPbeEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7E2MrEaTnsVjByafE8J3HDMa6xwxb1BcL8CrmjjcuwJoxueMNX34e5aYXf8Mz9DLjRjn6Mo2zVfYGtTdw2p1pR",
  "key1": "5Lu6hKnqgpwDqaPTgoMdX69hpuBCQ4EFTYDdAofdS9NMayPnJV5YsLagtrK3usXSrSUi3KLTdc18rtfELmWvh3x1",
  "key2": "zyUknSM5k9CDWDnxSuJAUafAffxz49x6eWCcmjYnpHRLwiggRE5yGS2h4oTTGpHiNGoDx6f4z2ZKDm2SXF2YsPo",
  "key3": "3qCgdERpeKgivZgQACCc7tEmtduh7hUwRXD1NcpUZLF1Dy51Y5NnFCYb2UEioK9GSVSLFd3twBbZTzpHd6K4KMSa",
  "key4": "3xdLWWDQKe6GpERZBSf6BvXCEAzb68tvDtJay2zhsT5AZJWXVkAdZDPaH7kn6aMWXV223tZVPTj7cyUk1Y7itqfT",
  "key5": "4kXi8LqyBbahzuhYShYKQkraTiFEJLbkp8Mafxg5xHAZyy9bgX4SJVQkHgRuAZT6KivShSFWiixobFGiexzgfxrt",
  "key6": "5fNVEMVCZKGWtFgdvJBQZqM5q2nHm98hCmCYB4M5SZXjRU7PbkS7ueDPsDp48JDJTD6wZw5hpWWarHeUXobXMg75",
  "key7": "2RDy9aEWT4TQXAXMKtTtgPhT5VgpvQ2Rw2dhzXmXwYgG3bvTnfWjYS82mNH5u51jTKKV2MdUWujUuJxu5bZtTHgr",
  "key8": "BXRUTgwhkzKVzzQsyjWm3MXxpxgwJFRLj1gVXo14GS6wzAuHoxi6z75uFjwN6JCeBEtCX3eG1SeRdx9EXZwagCM",
  "key9": "61bVHk4UXLjREQX94aWo5bZhu3dW9ogm1bzXD8J66p6bLLhuiMJ3f36WfN56TQMKPZ72EFcqVimWGxAZ5LK4E94g",
  "key10": "437F61aQsC9k6yNmTZu1svmtxPnijmYAgZTH9zKHYUP3fw481df4LDnmNP94GNFNb4Ee1n3jQpmactbmvh2jZNVE",
  "key11": "4FhXnQQf94u7dbagkWiNbQXLYSjNeN3TKi857hqmdbdTVAMq14UgzTvGRFMnJgSJws71r2SmyMQYwGSp8Ann7CC8",
  "key12": "3KD5QrdZeiqnBDFmhQ8E8nP34uEyVtyufuyfL39ZVnV5EA1acMeDTTwYwiKx1T4Pu7i8f4w6C3zDCHZmrP2PLzmU",
  "key13": "5gnshmShur5sDprWSPkCRTHS1J3NxEWCdYKq17NJpUg1EocjiSUKkf18YyyQxHnRQRNLndaMLJEhEa63bymubqP3",
  "key14": "5jmw9uTgrZJQPfxGAePKzgdyfMrZdeEiz9WZ5bgf5UCQCWYgFughoN15itQyAK7U6cVMcLweDhZuMLSjhZBBxjVR",
  "key15": "4qRbnd4k3EDyQpeQfsYGkQWKrdomP3N3WPeR5XJ18gGe94njT7hKemRPdQVpGsy4N5D2CdeHfYtrgbpG1JU8TcVp",
  "key16": "5mRXgsKinF65DBFgtYMmXuoHvS86zjxLn2upxWBT4gLY1JaSFvGcsVrHrQoFw4kkgAC9xPEB6TqWZ7oLpP5hnjQY",
  "key17": "4pbar7z5xj7f74cEgGhEL8Y2htXCHwGtKGyyu95HRZi4wbA9H5QMnxhG2gVTAKbkNsJphQjpVTLMY7pdqjmdbBBp",
  "key18": "5gymJRtCttxaaXRVjSsPTWRDc91a2SZxEdmDtSjQuqxidF3L74YWQdE8GmrmNfAG5Rn1F78h58zmcsLgrTyNb3yw",
  "key19": "4X4xSV93Yf1PyvDTXScQmQU4B5XwPLPTY92AVzkWMXG9iK81AXKs2iepWrJFeNApqugSE8uDLG4ATTodQPYFk5VJ",
  "key20": "3yAvBUHvoCH9cuZtATQCT6LhSC4nxLdLVoQqE1gKbQ85RJgQPdcx3X91LpA2vot5sog1axcXzk5tpG6HTdmy3dfF",
  "key21": "3RgPVLixqsFuCiCyKrugDkrr38ceengshKd4gJ4LiwEP8nThGCu67Z58hu9cSp5z3sUtmoS4KtZueqVBXupEwkC7",
  "key22": "5baqvs44dD5rU3p9ad8aVrLWmZjWLuatkbqpJW8kHYjTnuZvjNAJr2K8qJZ18742w1CsKgLRgV5wG5oGkihefyVb",
  "key23": "CavQxQNQKmKTy3GsKwBv1zF8Hrd4jtWDb7z3FqLuBUBEjgxRiM19sbhV3occutDdwQVEzYm5ZD8W1ubcWHyctMU",
  "key24": "SBSdwYRMYhHK6wyzHYoMeNHxfViRMG48rUCuUnNRRyepJJYyUcfZR87fDWJwtJVJoEGJjpwZAMUW7KH5rcotjE3",
  "key25": "4Y7tXypMa8eXz4kutLtBPsngjDcS3uhiURSmwqPPJ8AeNUFRBZqhu84UT2tHBKiqqAPYQkCmCRFeoP6aUkDJAhU9",
  "key26": "5aepHbfczbmBuvxgbgadJRveqz5TAbKSWS6UiaHHMCP399tpaXurkR9BudsuDL7AuGvG4TnmcevLXf2ByfgHYYyW",
  "key27": "4rdUrTQySDjciEcp1sNPEn4GQpHjL3WiiffURSTRfSNFTbo7XYth2559SmaLRWzk5yJh361casMyaZf6AytgWoZm",
  "key28": "3QAogkbM6XRd6xd5faXzGGqrC5E6PFFHBZsczLPKk7xe8tKcNJPcUNcVZoo9rEPnvm8nQpW8jfGPheJkPUHBNUkS",
  "key29": "55Roe9cuBVM2HGpw6rtuDSt9FTL5VWD7SnxmLBuyHtxwmovatj7nYe7vjFFeErAqcKbPDWK9si1f8FwUFhjkTLho",
  "key30": "4GAAadakkHgMo617Kvvzo3Xeuq9XWsU2WDFwGGdGuz1AtsNxv81wVxHWMeU1QRywj8JXkerHFX1aRHQuEpMebzTT",
  "key31": "sdWWDdNvnRsBPUaT8Si3dttFUr6iAPHWTLFuvtaw1PLsgBAPBWNKAKe5wGemZCe3UeiiEDpqvGVMQBE7jedge7U"
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
