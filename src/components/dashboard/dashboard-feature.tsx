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
    "4QMRexTNHhFANmtcQCoxq97YAUARdmtTi2ThEPondCFKbx5TcGQzs7QN75NSC17deb11hxssAmbBCRjrrWAzudQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XVsudBn8QzvJ6KVCbL7KXVo5LUFg2NbbbMAYFuatQ7dRZDdryZpJJD1wNv3ZRUBqjWhGta6b6XM3TzwAuTQGGox",
  "key1": "4M9wHdoHGbHwKrMTtAMzNtvEESb8RheZPdviswXYZVz3XSfthG7yYhAhWrmxKGQSuqUWzYFoGkAfydLby23jRWxa",
  "key2": "4yRYPYpqpcTdeAtmsdbxXWwSLRjJMkVp9NwQRHthM2SapMT1446yuhQ5AyzUfipnpDMTvWjo76TKxcFsHeL8SToP",
  "key3": "kogt5JLjyv3J65xF5ebQZ6Md3VNe84WxYydM1o9KT82vM2gckuU8ThkEbgSMt2JweeWUsMgYADURQSqANuvkcAk",
  "key4": "5dR8jsJ6FrsK6xY7tCd4Gw1Q1yKwBJvZnAnoKv1bZMR7EjjrQAVwVaF3ATajd65LhN2xkTCV5iiZXYgiGRf4Y3qe",
  "key5": "rKJdG9fwCeovBuvvecr8fo32HFJaDJoyJgdcjRCqXurZvNSDFW5QSAoih5MUxrho9eErTTEdg2anFchufRgxMxT",
  "key6": "5zCwq5poKropNjtTgzGL5d5TqCwhNrWDE8CU3MracprXUujrGKKhmQ8NRwXybWk5rhUkUaQN51fby9vdJkmqF5yh",
  "key7": "3XF5jvKW9x7kKkhCZo7FLbZEaVQdVEF3po7CsNkPY6HN4yak3RkfqU7vtSNsLXXV82sVvLu163VWf2YU5jq1CUwN",
  "key8": "MvJ2ab3g5VedsbJeuUBA7RGkxpVgBEMWd72mSsqZW83XiDrJQpwaGErnJfWfZKMFiAB8r3VnLWt3DT5hNiBbdn7",
  "key9": "43y2cQ5EZ9eJ4VBxK5YfFH8Ad2XsUGFr9d64XX8xhLuJn1YoThGS8XGvNtPJmppgQySfnNFnHid3qr4E6zyWf76y",
  "key10": "2Cu6FmQnYA2AKdPqXcZkgKBPFndsJMHCVs5WKodq7Hcc1gKFD3yAGByRTrdzcFqskM24Qw5vz1461YopcZyJCc5j",
  "key11": "37g8HkQj6ZsMNPsMJjf1SykPuC1wsfqCUHqXbSe3xqA7UEZ79NU44vPvjj9taG9g2EvmEuMfoY3rufjT9cyhncro",
  "key12": "5EsTmpuwoVE8SAuMwJHNdpRAcEQkpGcE9BW9oziUvocfjiPqgQpZ3ZWt35M33anwFnBL32zWYW4zBd1CRhE7iAzv",
  "key13": "2mnJ5g6sU6yqjumPsDVHpM9TGeA4NnNw5HKHJA1mnijZ1fDsDMTMibaV4aD7BWC1QmAikw7WDPmx31mYQi9Gb6vA",
  "key14": "25Ly1EFp562bzfjYTDmtKZ3MxMARg55da6mqreg57EBCLNiCnghsMCr3o38fWRyCk8eubCuAvNzXL4zFQV1hzWQo",
  "key15": "51ooMXnZ6v9qrPpGCVx1YJeNTrxbo5oLq1Xec9uirsJmFRiJKyXyQc18gHeVThV7ceJ11c5VSnZqaebTuJBnFMDW",
  "key16": "5LM3KVoWriBVc939qem2rxuRFKWcX8vTMEWUDirNTEJDsmSd99ihGe2chHYC5ayu9aWGE6zzb36wtHM8ZeFANuht",
  "key17": "3Abw3FMQXXRK2eG5zDuzoWfVoioNxtGeDgMdeeHEzRM7VoTV6VZvLpQQCuVAdFM24wtawQLiK9XTAu84QbjXu3zn",
  "key18": "5YvDewJbS5n8hhd1MgytCLDNayroPvJoShxr24oG3wqjWoQ7K42iNSrTuufZpqhEPwJ9mBcDkiTgmnMqnf1asegZ",
  "key19": "439Ear8f1czH8SWzDRp9Wg4umXKX9LcY3F8Z1nkHUSCjJZuxK8sznWQx3cgTfG5DHjd2gVBNqwUidk6tJbLrsjXQ",
  "key20": "4d66J7S5NEKcv4BeWtjABfuFQVUcmHtys3aQoLchriWsYJXkXjBDhHtp2oM43XjhxVTCpMce9J5BvJ9n3VHtGfJp",
  "key21": "2wuteguumFLV54m3FmfjGE1T65mHetDQBbfubDxx5MSpg71nuXcC1NLNz577p5rVVBTQ9qsmvA6jfSeCWe7mgUqp",
  "key22": "2wd18xf5P8mJXfyXkCS9NtTgZGDQJRM9GZkzpFuQqbifZCvVqeWPZY6UmcuxF7DrJxVic3SBUFiXSLSc9fdrMVoy",
  "key23": "tKNkjGdugjXTUuwrCgi8PTUfaVH94KbpMFJq95A77UtKKqsAujYJbU7tSmfZHCPryysT7oBobGzrSJe9GUiLstG",
  "key24": "4B5Qidj5ZE4DQ3E1sfNQK8tK2y6JvHSoy5QveJauahvAFXeVCRULvhBMJZ5bYd6wfY7Vj2hbpY2thHkpVwcb7bTv",
  "key25": "CXYzzqtFq54MVEsy3kxUhFBVcBCA1c7kdvuZJMbCnvByru6X413q8nue54tiZo9vVHKzWSe4zSGUwAYKRBP2pYi"
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
