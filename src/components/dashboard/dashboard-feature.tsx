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
    "3SAFsvR7s7uvjjN88E7x8s5N6YineZHMbbyPs8ZSDBojsQcgRwrMBBEKqp1jgEbnXBSP68bL25r3qVU44veCLrk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ub296ic4ZKAYw1PTZhgFyucuuxtr3xGM7VL6i1yH71QudCULbgn3vbCTBNsqWLUN7ZL1e2bq382cCcDga54uA6t",
  "key1": "4Y6QBnqPNncL8bUyKmJwFiecuViA2LreSVvBgTm9XiRfL2yGoBQuNA7YAv2N4YMWs8Vc6CfhdieU95HJkF5JPfE4",
  "key2": "4W7vaWyMFLAeSA8SRLFqNs9a9QYDWgZEECFfQFLX4jXD3o3LVBqiu7UWeSD7djSLx46zdRM3M6Yum2M6dT1sir6F",
  "key3": "2wFJd1Lj8bMN3BZqRuiqBCnBwHPZVLbbeoNtFu45RnVSM72oVC8jxYhDFvsECCEtkAMgZkvpbb9B1WZfSonB6K44",
  "key4": "4d3Rrwu22osNZFwDuBXCUTSiB65WD34CkXDKhj5e3K1Cc27ixTpH987s7oyUBtLtBKGciNe7eteo6VBv1Uj96wqJ",
  "key5": "4dYvTMmpp7FhDpprukEskAgCXubsDHB8mPRP3JcUF86mKBZxNhR8ket7UaxdWSN7Dx9gEKi82UySLDvQBNtkBegQ",
  "key6": "qpeRWmYzme1VpgXJgSPSttBQh7s2e7T1k8FzsepKZ8kG2eunDd1ogz8sxei7toVaqeB5vqNAfEj6cfrefE2apuH",
  "key7": "qcoe4UtxWc8J4f3aojWrMYQqPwd5qmmpwEteHDr35zmwvJ25fFNpM1HdtVEcV1aX8efAiKieurvWCqQo7p82Yhp",
  "key8": "52F9sqRF6j7RZFqMFtb3ET62NWXuT11m1HdTufgmF9VepRoDzwPqy6oLyV1iuDCP9eRN1JUpahAXXgeW1NEtQuaM",
  "key9": "3eJx1ZeWvs9Rscoxfpr7xFwcWwPieA5BL6AEeWVKRuBjnx3xHjHnEfZ1WuV7XTQ1X2GNjfXrULMhiiQqbFcvcbq3",
  "key10": "5B5sP9NukNPwzLLM5eLaFzGpoq6XU5EP6pRuyGinQ7SjthrbcGr5JL2wbAGKgf8u9yn8ZcTZF4zPB8MNm3Cm9Q9N",
  "key11": "2NzGKkYLtapWegbPVnjJDosK5p6BRbUrKZ9ybVjHYZEJVSvmv2UiUzzvnX1jsaSHu7LRSibbkRwp9cqxgKuCJmS",
  "key12": "4ZJui9iRnajgFAXDPBzL7APVDC1sLBxwMxP8d2385BCVdcZWxpzRLtcEnoSBFKkgZCaj9ACjKDRsjBdrbsvGLvvs",
  "key13": "a5M1vvQ2PCTT9snfQPFVxQGhBSeMZXoQnae9LuPqxT88uuMGJaDNputy3W6H1wfgaoJugrHost7AWzmkr8fCCD9",
  "key14": "2Fiqy8HS3QFUBHbfmwLMyGZL3vHcCCSX2hr9JqwjWph9wq1jmw5JawJJmDWbvVYkjwHu5yXkfnBpUbFaLVD6MMzM",
  "key15": "37wa3VuhCVJbkGZj7kuCyv65XakpG3u7Zmch7M7QpmkjECe3vYUX2i53yZJxbyqQWomoNBZsyjf7TzQg8noSib8k",
  "key16": "3Pni9o8SeLvRwAaqBi4eDqosx6Ck1oQX9XV7Q3j2A2TTUzXnBArrv4YvXSEmRVRbCe8vMdN5NwRumLTgK6mjF9vh",
  "key17": "TCtewuveXho41df5ZRqQREZbKDCsqqQgB7ERXzmsL6oizS5dmBT9mqDnaBWR6iyjfeMmRCsBt1suHGYMcbaJBpC",
  "key18": "2FqTvHCR5LGANwSr6t5DCbZa2d1WwXdYqiVBDyvbTrmWVuWgsco2Ep8ssm5ENHUrUCPVntRSzkWERKP24Gdu4Cpb",
  "key19": "SXCPdxf5czx8Z5sV9q3REB6YnTWDtwL9VLdjnuTM87JCBwZwN6A3HfkEjPM7qNKwMwjSjFLcHAKJwTtsVsaSkHj",
  "key20": "4gtczxY1dAw24HfgG8RmDzzbVfX5dDrubUomQR2rTs3ZiFXUGBcRFVzBT1okdwvqSEpnhFF9vWJM6dxxG7ZZwapR",
  "key21": "4BjRA2FWfWKFKoaremrWxPT4BkKVv7TjV5a9RoRcBAr4YBtb8h25AdgCeKVbedxqLpbyHnEc9PJZPda3QPspxP4T",
  "key22": "2QznCNm5g33HVo8yF4CKVr8u26DTBPeaDLBgA1GP7cfRruDjXqnDy33cpx3jkc9JguqDSNUvs6DDFpMyMCD3Ashj",
  "key23": "2mjSwBWiybqP3siLuv5we63ZwQAPskPyGbAbzURe4CGgtw8m7g8EuWw7XSbHyN7En5pLj7dbRUtN8uQBMzJJUKUK",
  "key24": "owPSjL4H5Dyx2K5w6TLnh3NSqkj56KrnXVGFXsCNi1H69Gxu412DFa9QAXN4SENjZVeSoWAFoqhhGPLKqPVfhjo",
  "key25": "3n2yHvhftuSR8sqTq9hCE9XAqRUZCA1UFvaGD6XuEXgvmZorJEixzCzcw8Vam9dhnUvJ9io94K73yJZPFu1n4pqN",
  "key26": "2odjBHdrkBQ2ioj1fdemXFfHiDRX7RCr5Akb3npDQrUWbZBmfR2uBc6fsY5vYnuunqFrxV3bnVzRznwMKQguLe1P",
  "key27": "3aHL2ggucB6G5ZyhSB2rXWNpqckAasw3yxCNhgUMhbWvZABY52kKaGPaQHCBMsa6x7P2Hv5CddfsGHLnWt2gokAb",
  "key28": "xMNNXuJvWXzz2yDuZJDWKeUrwnp7Ug2EimKyi96BmtY6cYYgxCVqV5oZ8njhv85KXBnBoPAyDAh2JHYW8AQPeVA",
  "key29": "K8GHJQLEby6aWhR6pnTpeVkr446X6kYWmtSb4zWrwpRigk5XqRpJ6BsArCPWywssaG4P293Myqaixrk6oDvFAdh",
  "key30": "5HVxo38zWmiy8LqhaP1RPxLiCfY4ERBevHD9u3wCamAv59er9MbgSGR8oSh1jjaWJRAZ688EeixcBTYVxJnj1Dra",
  "key31": "3FUSnsyAdHwN87tGsQfpqEpCW1KX2GwmfjtVdhTBz9b2NmAECcM8UWaGjUfoyjEC7wCqfRunLAUJjTtTzjTh5Lbk",
  "key32": "3WQ23GPP9KQ1fyj9PLyPZKZWS8e1LFg9eNeGzb6eoWhRSrL7wAYminiiEUjEabHTtr6JbH5UsX7XBNtVphQvdpS8",
  "key33": "2o2oYeGYb6CxB4u8TF73AXX79jFGYmFGsFAGdc1X5YFRna77NgaHz3uWkXKmuxjVVHqtxxFzyWqKruNhHMvGL5ic",
  "key34": "51y4Bo7ATR3ABWw3u2HWvp1RNbofH958vPuVjJVVZ9PJzPCrFZT51fBGNH8amVNSFNSncMGMe69Emh8UAGTo9EJ3",
  "key35": "3JjexP9iZxFjTA4mskUjWKhaULEeTf2BJJwSmVePmkpNrjCzqAT69NCEicx7SvdQLB87qY8CX4dLBBG1gKoQ5Kf5",
  "key36": "3MveM2QjNXxKevNYUK6WZNPrhsmAfo8QEc71NfeM735CVpKv97n9Qawzu3TaudeqZuLfNYUqRaUyy3LrpPWVHisu",
  "key37": "2xudCkmMYmrmduqKhBpktHsMFp9zYAmQSSwjNymRM6FKUafXQUtTmiB3iLdh71sRiUiBbnUTKow2wkHrR4eRBm1A"
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
