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
    "3Ekobcby8C9ZqmVJiaqntyUA1iurqnxNWsNjMWom4PWbRFk8kad1XpLi6gJ6DcxuhU9YiExigPZs1YuV82hkw7H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fmCJAs1gW63ZvkBDRk3V1cwuwWjYa7XXnFEqit3jVqe2qsnPvfJVeVcz35mXNPj2i73BmGaKmRuUYEkMgL7iz5D",
  "key1": "3wEUDJNLSyBuYLLEy6MogJ2sXxceA5QVnxJFPfQP27SayoUzzZdUP5fxwnCNozzxYERjNs2iDwiWFr6yAytarmSZ",
  "key2": "5qFZ2c6rGPQhuTXe72tSjBsPtUnf5H6yxAC4uRYBbUeACnyYojq11zrieJpT8nFmbCwEM4p7DZWkbidq3wWcbx9E",
  "key3": "2ueaKeYMqhosowRXC9BpGnWDuybBJXUaFg5jA4KfahjU31UJ9LBfoXgG2kGo2FYSPMxzXXb9FeHcCgfJRXw7C4UG",
  "key4": "67GCRXdURqia4SK8yvLLSWT6FTU6B52YSAhx8hgaHc4DpR7hWJjkQBXuWuYkCpvzBky1WRiAhXVEXYJoRevoDvdv",
  "key5": "323sn5ZyZ5vk7XCgUhrWsLsE4aZZ1PiUZo42VXNQN53KEAA2E2krNwuxAxtjQKvZwhCJe8DgMV8N3rdpdnoM4PQU",
  "key6": "5MiG9SkpAGfvWXpM6MFboFGX7nsxzWn88yng16R8PPMV1HRH9fgY6icbjfZkMF1zeshtXJJjfH2DVELPtgjRrtsE",
  "key7": "5qVz9d1cCk1ccmwBrLDmTopD8WimB4a8cZJx7aM4on1Dp31vzVhe2EUnqPUkhLggVYAHRQMJurL1DmQB6Fvnavcm",
  "key8": "63tWWzeSCtiy4jS8NUZxdEVceioyeXtLL9q69WdG9GEGobvEQEDKEvdK8Tx1DvNzbYtkk1aCo5JBEYZa1Cdo5tvr",
  "key9": "2ecqMtT3WZ4iirZzLUkzC2Pm6AKwzJ65XvMZHYwBCosnT7oGDWY7Fuhv2YSfWJejCRYjyoWbUwrgAX8a4wzRpEE5",
  "key10": "3MeHdDe18wGWTi9xq8kkCCD8jwdTmbrkUZ8aUBSGRdGzym4RjyWYH8euywNeqBEZjAsJqok8F2BUvspCu1RbzeYR",
  "key11": "2Fb9A6KACzML3HDRDsgPTFZmM71jUPaBepWZkyTpVQ2RSimX5Fux3NJAExBGV1WTTsceeWvcYwePdBPgE3UYnmnz",
  "key12": "2uushYyDiRCKv7JPjYwuETn1ctc9ZVdp8gNE5r4QNLMLYiF4vrvpnoDQcbSF5uw2GKP2aVX6YdmF33BY9C2bEnsZ",
  "key13": "4wHpADt5iisyoZbyEuhct99a1LkfdPJN3dwommP5abqmYAGD6QnKRR2n7DGenbpXEzKmsnfJnoiLWgMtUtFLkA2f",
  "key14": "2UMyC2uEEL8X5gXdjPchC3gTJ1vrfWrheBVbHAaMwbUjPSY12D5e3saA1BYe1Rh5dm4bV4WdFtDm22sQ3nd6jDe6",
  "key15": "2LrPYMTcuxzoJT7ASv1vtXLLaSEmzoHb5V8JmqaDZjsnbN4HFgaRUac1T8oqBKKSy7RxzKzub8aYyo8hFcQwGZbq",
  "key16": "2BFGjvu7XtT8xu4ta7HAeCTaLXk3C4LhPg6xb2EXWgFgCJbXJ2coCSQ45jhEqGxFvAuv9fhbq3ZBbgr6hSesdaqe",
  "key17": "4Pnd2MfqpVehRTh1Ecuej2Y4AQBXgRf3y2QRSYFhnnxJPobiAX6gdMPceK8Asmcg7H2yeV792PaXGoxGUkVeLdeR",
  "key18": "4GKoqKzu4JHPTomzmZMG9JhmtwVJt2bWX9x1QFNrGih5TVP8ukSecZ7CcjxaEdKE9ZRQfKSAm7A4ur7PnGTD8GUe",
  "key19": "4Dmn35D2NRejrabRvtHMSSWiPfnx1vxz7J1ijpvveF3LKtz2KspQpsF529ZDgntc4UWn4jtgZcmuBzV1mxKvupLK",
  "key20": "59DqvA6A1tVQMng1SVJv7A9YremB1WnHAp7aZZS3FDP3ujNmUKxVYt1WYVM26iuuj6BtbmekJGqPiK5cngoh7wX2",
  "key21": "2trHqnonmiMXau7uLCa4QFuvLBzQ9dgrAsmHnQAwRTQuE8sEcGX6bQZJXu2eZDtryxZzk5D42YVP2MPxw8SyE18G",
  "key22": "4wnAPrJzmfgCaHYgesvpnpUh4TTtauACeuwdjou2qkGWMvPH4m4DWzA4vw17UaJNxcs6aqBgzXxvRJk811Broh6N",
  "key23": "E1aNiAoA5SgG2UWFidvDP4pSwff9Ky7L1XNgGUbayHo1ushU2dh7Qjyzirf65cMAiWrzrvNo7YggUtTE8Sgqn6E",
  "key24": "3T2phr8SA5xbAfZnQrPTeiMVUYTdWLiEFewxbJhY4KQux7uVK4VMbP5uf436d87BjRrco1kuZbqzWge1eoyw7CSA",
  "key25": "4Xm2UHTmzP6wg5VRebPyfjvGAo3LGarZfBdo9u8Wdojo9yrsp2ki5TGk7zXRWCnhofF1nMuPJGYXtFWYhWY32EvE",
  "key26": "4zJGcthtmKjh5Mz7gYGkDPECPEuB3nPAB3ehxUeJnsAh3BonfCRhSSudG1ThtD4YrkGMJBZc6YAkSbASTATbxdUD",
  "key27": "5Lv5zcKGB2RWGBwePH42BJStadgPkLoWHAgQHpJsNwRsK5uK5KzQ1PUuqYbU5d1h9XVpQnFeuTz9qLqpz13yZgx9",
  "key28": "2r97tYcTq1wZ3WrqUZWRBBNwbxgMcWPMKNDf4zbggYAKx6QLwHTttSE4aiXgi5KDwgiijoh5R1WEr6mYSaHyFUw4",
  "key29": "4BjYf47jwPjxhrTQAwwjEMUDujZM6Wbb85UjVWBu8nqo8eC1nEbhPM71SxS5YfGEuFJhpnBACQ4taBEwgadNfcac",
  "key30": "uox2CUV8M4s5phU8NpZ5MJ8eGRThRfpLCUjKc1VaficEKie14n4f8KX3mck6a9uhrSgdHrhtkikm2AfWxfvwfsz",
  "key31": "52aEbjBSH2484ND12zadEZTqSKAMEN1aihu2cgxMnUsMKVm1iTKnioGeRXfQyQRYik4aVttMFqzus2q1frJJMLuc",
  "key32": "32FvnT5txYY9bmyH1hCnESpQQuxdhfpGoKouRPdddn8d6EAkwvnPNCt6VGmeR4AWav7Rjo119CoDbrJieFmXwg1j",
  "key33": "2eH8p96jkNAARrj4qAMroFecw3RZ8iXCB9rgATs7pE2BmTLyjy7axhvkSWyTNp6BRKJH3V6sATb6dvX5rfNyUJ6M",
  "key34": "3bg74JG9YkkmMy7PsMj4LW44HobjxftE7dBTBMFeWHhKSfAw6PAoHuWbbx7i6CiPMeKZcNRY7NVe6esyk5bNy7e8",
  "key35": "Ew8ryMX6H2G1GvtmxKwsmjv3dVSKx4u8FQZxFhUsCcN6cotWQH6RLytuXzdXukLLBPw8D12ggFF9VpU4ue8Loxh",
  "key36": "4F5QD3bG3AM59Kq7TaBRQ5dB7XnZ1NnRZb8WD3kgEv3LqBmUoqj6P6tA5RHBxvMM9derWH7m9mVpdfyhCo1bfhSp",
  "key37": "4zvgS6ihpqtJgCgLb5W8wvAnihgNSYZD3yNXHK2cmnneAedz4bmwQ2t6KmMbngAq7KE7vAZ2JPoFrYN2e7FUmqaA",
  "key38": "5MyMr3KdzbGySVb1gxjquAyZJLa18425T7wJQEsR1V9ud6zEKcrLnEiXDWktxBVDv5F65SbG5iHjj4ssTmbpMu3f",
  "key39": "2KoiTkZacxzX6siecrjGdEw9turVKpuUVjjwPdnCmz1STgFdePWy7B7J78R8KL7vXi8JXP2CzXLPhuEY6W6Pb8LQ",
  "key40": "3Qds7qumayEyohKTQZ9P8ZrSao7ndyq1kHG9QiDCFLLfSsShRaSLJqXDEQJ3Umhg2Y3Ry6WLg95JzFNgMz265TJj",
  "key41": "2jc8wBajWXZTKnrnXT2xhnqBXkiqWcoLR9n2vcsp9gJYDFSQbrpQcCft4GLhSgYtpWg41m7o7PgXMz88sPzgrrrJ",
  "key42": "5qDpyCz52Rt38U8hTvxUvXKsxkJBuDT3raZy2fBvbx9iFypfYQswFQosbNvVhSCTV9NWH8XmMBpGqgdE4pz5S981",
  "key43": "2YjPpWmj511WXBK6be2KZ7w6NWeMMfnaU6TPwtDmDRWb64QRWPpzhTFd7KtnEjq5mij5owCUMZwhBnXCJfKrYtcY",
  "key44": "5kpbiKMfrWsRE6EXTky7akQGpv1p8q5HHksmtoAjkcHryUHjWNdTvhqkaXA6VyDdPDdtWZ72PXeHTnUjUeE5ngpb",
  "key45": "3sH1aQX1zL8XeoqsrP2VvE4n4iw3yx4kWDDrB4DToM99fiACpVpL2AuXRWoRc4qmrGrzvHbm5Ude9rzLbk8hffiE",
  "key46": "2LALcqHHrHuMhSqBGR2u5CC8nS6HQTj6TDmr4xhBD8wWLKkhqcyXSUUXpTjGW8cG8qFaxUTDHSM56N5ZtYhWeoyw"
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
