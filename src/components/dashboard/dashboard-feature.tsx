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
    "2BEZ7okLrqumYqCZjkW75j4cbdP2zHg9QDpPCZHck82Qf8f5E2G7SNeK7SY8YVQQAE1v336bQbBiCHNNp6SSnPB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XRh1NgZojc55V5exxnfc2y8423uY1Mg2J95B4iZdSb9KL6Z9AkykNkPk1JHZqjmAJZR9FCCrX8DgPLdJytKBow",
  "key1": "3FbFTQx3wcsAC6NJoFcMaiZXu2K9uBqzavpgLdNeDWSw1ivbME2oqoNAqKu4i7cGzPtvm7DTRyG8x1idCR3MLiA",
  "key2": "5U5yVEvnk7azNs7TYHMRsgdLQ2HdzojtcQ4VgRoGtori2wN2fVkuftNL75PK6jSJabDP2Y878dKWtw1mDSkkxPL6",
  "key3": "5M6n3yFXKNSYP2yxa1WjUVF9kiL42mWK4zbMFLVg4LYFLrifTJ1oHCPqLWsqRd6f2yEyctAC6Sd5iuZSRk2cWUvM",
  "key4": "62eU51JFFD8nmrgdDqbQbYVEXPC2AFDa5B3Gjsjcn2B7RMvaoBzxq2hjv7QTQnkHtidTD2zXgsK5Xd971GnujLB9",
  "key5": "4ze6iyNYkAzv1iDnHcYuv196LHvxqB9WaC7B7X2Xj7vJAaNMs7MRqXMbT5XewWVGA7VrZ7z1W2LqFNCfui52DMr9",
  "key6": "3Vw97B8XKTTT4odSiTLZ2J5mhrokExY8Mq5EFQBvAZPrYzf5hfrgpRtLrau3mJtiintZmU2HFZ1SUgaoZPoLSSiU",
  "key7": "54JFbY3gVxmZfCWVj1CAEzAxRjWiDt7zEeNms2xwo3fCsPiaHxRE7bWRQ4uk5FQ1ebjnknHWARC3Ds2oqEFExM4G",
  "key8": "2mbRNru1gUr7XzZLSjo9RD5pqCd2NdH9VcgoAXqEzVvBxEuUSJogmUyDTykxmAFNoy7t9Er49dhDuKZwzZyNe7Fc",
  "key9": "4V9tPwDf7FVwHh8pTU4nywmtasc1HMyTNFr3MadBWEWvTQUhQCpcLpuUq3aM2YYkar1XLhv4UZTj2V3dDZ6AKrbj",
  "key10": "3JH1R4DkTuXcMDb1eYimu3Q6wrzZNNtWDEvzF6jm1wVdEYe44AABxd2zcqQv3P6JU8CT7shNTDKnfVbBBm8efbVN",
  "key11": "i3Zijih4AEXLsHQUp62AcUPSx8Rzz1kt6YdF4URgtFgRuYtV8MrkRDk3ALL9UFpyqUt7sVuUZ7xZSiS5j78NuiB",
  "key12": "5tidiYSY1ixpsHHf9u8K3iK3ZvrTcAvUtPLS4EsS8rAy6KDZAHhsqiYb9xoEUjnLCqQmvwC9AZMmFrJG2333RCSF",
  "key13": "5JoeUzMNvB8nQM4NZPRg8e5e4zA3zjoAFFktYtWHDQSNeBT27Ms8V6hhvvwbH2pMsR3pXvq9vR33zfXRvCw7xP1P",
  "key14": "51z6o4f6LvsZ618xAgmiE6TLwAnssDfBRMwP3c4nY9891ErBWyeSguGVW5jAshhQ128d1PTumzaKZm7n8joqbmwp",
  "key15": "4pGUdmPWSXTf9Gz4ySS8LehcHzFkaH5iiHHHNpsaexo2YYdPw3TvEL3ZN55KFL6pYqmsGzX8wwrMRjq3VBgwDXFh",
  "key16": "2RmqNRGqGVfWcrnLEH7W7EwdWm9o9EZeeU83J1S1auRqbdab4XT7wTchFF9evjz3wLqdxQCXPkMZB6JCYWQ7matB",
  "key17": "531Ag6FiipQawhcFKjeFBh4Y94CS43NrTpNQpyTvcr3ykjDgG1uMFNTtqJBC61XGgyeDyLChUU1u11h41wHbPtSu",
  "key18": "2FMC4yZ9vCAt5HQjJLmcb3S1S9eMTZS5JfmhAHAgxs8t636fFpqSN2Xyn7dBWLvt3aDM1KHzsSHkFTFY1Mo72biQ",
  "key19": "35aSdDDLdLXdudGPSycBuvMggWJ5nq7BSUThjLkTe5saGG7fQMgopsGU5q6rmiVEFg6thiExXKdEpkxe39njLDxG",
  "key20": "51KvGWAaiCdK6mrqq9spUdqMpMjDuv5Bhd2bbRKFLFyoNWpgtHwDEmJyCmroN6rMitVrqUnzRd3y4jVtyS6xm32g",
  "key21": "5GXrDheRWgYQGAf3xdJR1PqXc7dyo7xoZ4anYVE4cYt7z9qF63oK2FU9zRcVYCrGHc4reFvxbMMvbgDVKZLN1dSr",
  "key22": "3jAQhTSkowbm4ybrqTNwsE3XoM2Xq4hywyMGUvfE5V38dGyS4YckUJjMGSV2taVBY3tskPFNbpscZqW1Xp5ysB2T",
  "key23": "4ApTALU5pqrEFoKciVpNQvcaW3D9iTasJTkZXEANwBuAPvv53Lhds2PwmUtiPCPEymnGgB6p2xEUjB8WATnZbnYc",
  "key24": "4angXp9Za5ghFHrnb4gs3W8YB8KRkPaQXaFF5rkLDsvsEznRrepZwMvA4RLZUvoAxck77bsEBEwFp74zPvnWqho4",
  "key25": "5kNcFx8f1zrdgxwtFHfJ9zMFs8YaNv3C4PJzCU6vMKRKSSyBzyPAbfgMhH9i7q4zGyxptoaJtdYojvzeHgDZZvcc",
  "key26": "5pbpsmMedTpBW7geDVHTKTtP5gSQTqnVpXsP2o3AwsX9GZQVS2GfmhaezDKtLNitgp34gYMNSe2xXFzq3G1YbZ9D",
  "key27": "2LcTtWfnd6CBt7T3mTXQxc2SozN3GAnLW7uvnVRrUndppgmrYmwe2vfTcaJZMMZBsd6AvWbuh9pqwhmpKYyN1qgW",
  "key28": "3HUhBoc7Tyod2brWfE7y5d8Wig7vBENvUrddvJR7wdzj6KwKcxLYqFknrp17sH3eP17YoJDfRWPzy9xZNfVWanuj",
  "key29": "2Wf7crNv3on2oqcXsd9AYd6SGddgEqNhaj2X7trPkGC7CJGqSHG1pJh5ihkEUn1sq45MH2PmjidxxhTeQGLhC2zS",
  "key30": "iPnxhcatJQ4W3FNz4KtsXDn8FiDh3eGMpqy8bFW6AFUgnhrmjpeqrBYEASpqFTa3AvJpP6XWfzjutsnxUPbUq8N",
  "key31": "GMNtPmBWMSBEJiCS38H4Z2typiz6R3pckDWF8X86Dt17fQvCWG9Y3ERKzj9YLx9wLA4rYqmnALJiwohZEYJ17AE",
  "key32": "gCasoPRKznPKZjSnxj4uNtH8FDRu5V6czMbwpYmP6eQfP3G1xsjZsCsxYDx3DEuMNuU66sQEB1695y9utHvKNNt",
  "key33": "5ZwcKH4XSSAPdmfqyfZQ3M88XtUFeMiVAscbJoX2GDX5Yt4jEt4pc8JHw138LzLToqPxPmtGkfFhnniMCfcSVzHp",
  "key34": "hmYGNH4RnmrPNqtHwmLw9cA2drTasah7VQ4EfU8scFX492RUkDdFh8XzcvRaQtE9fLDX1vZrdsU9scmWDDWPg5r",
  "key35": "4WwqkPmRaFh6xhKkyYHmuB66i6FCnskizZNv8u2bJHJDCyfvYBviimtsM7kBWWQ3Gjh6fk85VRMCdEYMdFgFWc3t",
  "key36": "RfWn2f37byiUREqLdTvMoBEkgoe14MkuXVDNe9cpQe1dw2W1GiTdebhQpS9VzEtJ2V82GYkFUyf2SRf9pjrJEzM",
  "key37": "gmXn5jxuju3qYaA1867c8H3Xk8c81SWYtbiRL7dcFkNX4wBppaMYZUVrpJpPUGwzxDC1PGAe82HPksmhKZL1bzk",
  "key38": "2pyV8RASsFpSWDM8VXgLqg2ubpSH8y552HPcCrp7MmjAUMYb4Y6wVzV6o56oDBtDDgcesqHZeYg5QVGQc1eyEFf9",
  "key39": "241M7Wh8AJnjtp4pnLhxF93idEm6WCpR1wLt6ER4THRQSfej887wC7DnPVvPcSGVCYiLsnoBUFNNhrDzcPZ68Sxa",
  "key40": "38m8Xpm7Q3Yf96qpXqQ6iJC1ftxNi1rsggVtZ3NRjwkzsdmeLbA5z4wqDfmtU1yFoVU5gEy9csbv6m3BhwgeYAto",
  "key41": "4gjvRmek6LGL5DqcWKzPECVG8BXzznmi5MvktgFp2qQGmGWnwHuVXqMPpibrAKUn8H35uGhosKJSSLYn5XnDntWb",
  "key42": "5k6hm7LB9QwQqDoB6BTtya9etyi6qG7x1Mvr9H82jysFGQ7kG3FV3LaVsjy1zEABSRjU5rUg3m82dEyzQZfUHfXf",
  "key43": "dGbnMzdmYMpRdogi9ncKtF6QAc5jZ6RJmHRBxFu1FGBeeNyvNgodXBTU41RFeV7DofS4vVyvtJAKPAkpt4XsmPD",
  "key44": "4FdV9NBdSb2Ypy4Q8YQdmFA6Kh2uRdAGinp1YYBvzUqR4c3DJsNa3nUA9fiUNASUD8nxXs7crHcdwVdUowxjEgmr",
  "key45": "4GrM7aB9pzHYF6pVj3jRSNkFewCQiEmappR7XYifps2Q61s5CaSFQ9xHtRaX31uEugUtLp1yiMUjgyUVmVqUwmQB",
  "key46": "4Rb8pEi7JGroXJLstm77G9c5vC2azZg5S7gyAwnUc6X39J7bPQ8Gx2VkVeedunsHYVujFhG1FuEf91M4hzTr9qgv"
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
