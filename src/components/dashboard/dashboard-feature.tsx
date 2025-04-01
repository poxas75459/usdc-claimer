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
    "FjdJ7qnNEstdMgwDVn8bh6UBBxeC6cngvSkit8eNiypFpsw2Ms3ra55EcK7yH7CaAd8G6GmPrJACwmEpN6bUxVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3krJiYNrDRALjaiiJXcY9Uwn3KbfktqAAhsFsqTBj812KcWb8PnMP3zWa18QcKSHG8tugs8rCoy4Vf64wSpkSMsE",
  "key1": "2snqwn3VQxQiqgp2eoL2owPMGmnDbu2RQ64C3mRbnijVy2Z1fTbaSLkH9QWGyWNkkzo942WLV3eSAqDqBbp9fgYo",
  "key2": "cHV5UcnPzx3f9sjQzHvZqX8gmwr7kuBGFh1tnWPgLB9oaZWMvwALjKh89EYdXU19qz8WJr2Zzg8gy6aUBpT1gQg",
  "key3": "4pBzdaKscoNjAtXznQs33YmBZYfkUW1JG7Mb6HrjgCnZnSToySt6Q84EqUA6AyuTGzkzR18PLPLB6r855UnjwGW4",
  "key4": "4wkEhD7kw3tVWBTKJ8Qnwe7ffAAxcUeqwTNQ9iqY8GP6nDuXjAzxNpncTV6LH2Bps5GWZNnC6uaSSkYsJH3vZELV",
  "key5": "fzmubqm6PQEGf4ajKNp9T5j1PR6mVRvaZnxySSJD1g8mbVVaNtWXUnne6H6aTBs9zHR74dQpXC3xvKwdUGtVMKF",
  "key6": "4mQ5z8gRJGcYV67uhyVJzTSb1QSxhc7hDHx12UXeenp5BPbCL3UZ6cfTQbacWwGzBKGiBkPHs4sLuyt5HkWM1xWW",
  "key7": "26Lpgk99N3mdNx67Cg5ArSFtcJGhcMJbcjzmkEgBakZhLz6XEy5xRRrUD8RsJrbSMtBueUugQ4f4DufMMwDx3C5z",
  "key8": "CMFy1b7bpGPFAoj6DNVgTEaLUYKq62yF24nso1hHG47znmQr5jQ9frtGDTpu272C3GGuaiCsbYsmBwdDzgUwL6V",
  "key9": "5oT8oap2pFgbnxmcdEFy1dQxg6Hur14gQrL3Hb8BjrgJ3xaoGbJa2XZb7yNLfse2sNs4818ufNQTHdNPjRkuEgfP",
  "key10": "3VE2HXW7535JWWt26nTPuUyvf2tJL3K5UVPxnpRiQtj46zqjwRD1LGSE5cettdb18hQ6DUmufGLffXhkSEQGinpS",
  "key11": "2HKBkBxKmGHRN2bGbBAHqAgU6B2YyU8sbngjSvJqZV7RPyPHqpAf8qdof3GMptqjAgpc2e9UYdCJQE3KqshuhD3i",
  "key12": "23XfU26nE9hzkSgxn9UhEiEmr7JVgHGWGA7oo8D33oBakhKuNW7sZ4G62YdoPrRp6oR1QF67hSP1tQRuw5BUYrm5",
  "key13": "5hfzT2kLyWn9stAyduwxY88RFQUkwVafNcRyf85jR6E717tHh4qkGoU2BQhDikH3gCjBm4ddpkHGUUSZQ79xMk26",
  "key14": "289A3PZjnivvmMoiqSE9K9UQsfDye7HYjkufvcW5LzaVEjhtnkKfLbr5Z6TRnKmZstCaa3HeSRaBkhDJAPsaotW5",
  "key15": "n7uA7zcHrVs9C2mpUd84PLyXtBjwZPsj5ut6fcJEYmPZF6ki2V5gBnTfDnyQbuhmopsKzZznHcmKaAQGhGQ4fyU",
  "key16": "2X2nizqdUMaF3ihE5wkb4MPdRnVmUvnsE8u4sR5ab8JMnn47ZFE5K2K4znaP9trvCFsjyXE24TrQmF5zA6UTr64q",
  "key17": "2CKHqGNvuHjtyYQL7mHvAuPs8hvHGB1fzJAirfstUmvwKyZKpftGUK8XHqP9qwPd5gPAKuGtuZFFepUpqRnFyh8z",
  "key18": "NPPyNtLxBTnQx5UbmxJWRpinRppMe1LKYhGu18MdyLHypfPJQih5fHy8hkDbohEqCSNujFBg9wmmJ9k6SMKAM3N",
  "key19": "raqRQw36nB6eHrCLzEbwbXQWfxpHJ6eutxZy25GQAyQAYi2G727mJb48AYEtBxmPcbXc79pn9njF1AAuBLmmDBs",
  "key20": "29WwnPWZFAWpn88JPmyxZ3qfd1KmTxtX5H87TvSvrumsS5ME7ksUYKfLrzfgkS9vwzAYNbNsAHfLRwaNGhss9MSW",
  "key21": "3GQYiX42tjsgiBDQhnVGS47QyMPAbF3xfZ3r14xYqLJiJb9ojzXUm6CLKBk9MJ75HbgnvapKbzo6maTh49wkWQhz",
  "key22": "y3HaHCwhk15j4rFHyGjY7VStZraJZmPjCJWorXNVHYoYny6aZGC1A7eC46Wy4nc1SHjdugHNKByu3AKGt3zY7Hq",
  "key23": "GiCdPcBtPTrju6Z4eum8pieJzPnghYKM87xy2HF3m6N6wB2RPy6qJgptPc3Nj1rBiFjuVEr7ramXyMJFbZLbtFP",
  "key24": "zNtdA4NCRUrYMSLBkoJT6eiRiC4LPwH4bCXyYLpjR6izSm1nPjzz8dfJdbHc9ceX3RnJL2Tz28ojtjqPBgfaduw",
  "key25": "3P4LGotMEg5JXySurhq62PRgdp27XXKNoq8KhjUw38G8cBgKHL7ZRHJ3dqgJiggWki4zQc9ZYbwFSLiMAQjBBy8N",
  "key26": "G6iz7HkyREoQJhcqs2Qos3PSrHnChKrh5nfiwahYSrAj5UXJmDX55zX1Zcg7zz6zoibkppeerxuwkdxa6fDtN1D",
  "key27": "3CUYkp1nRi1aEiu8bFiti3MnxYku7QcmZzhBXpbTLbjwexkC6QajXqaqRB8GKnG2UdN4vGC6Kb8Zpb81ipcipXHt",
  "key28": "RsiKaGDAQkvwR4NDDujpuMeXpys3Uf9JiKtFzspP5w2NkuqsBpRGLp9kTRqKYukVtyyvw9ambeqcEuLosMy69z9",
  "key29": "4vsuZx5JrxucnzUuJMJYubKC9ifTEFzKxYj7ARBtzDaboCBxEE6jHvdHwLf3UxYmCYvujuecZBVpbhH2pPwEGQWm",
  "key30": "3rgZgb2TLVfsxgnHv2eRcG6GGZoevsM5WeYAaTMDKNLRDMfzqdTCPW9qdNmToz2kUMR6c46weAcbCmy9E8zGnQ2u",
  "key31": "5J3LNnjdEJB51hVFiHDiwkQJBZodDX6Ut2T1FULwcSrRdFjs8C335g8m5HNrXyp4jBzHZMAi7iNRpbGEdeVfZ7hr"
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
