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
    "27wjS6qkEvMyzhUs7762tSKWFbwhk9vpwVCv6tcrwUxFHNUnWWTuZu553fpZL6fJr2tYuB995aK6vnvB4iccPVN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "335xhkpV7cWmWMHo5ZcqfQrdFM2fytBvWVqUrb5EdqZQwKe3nmB57BhdaVmgVmySDzrGp7Ei5wELEatWor2TM4c2",
  "key1": "5X3fgXfoBBzJAGcne3XebfbEABae5Zn4sjDvJNeViCgVt3t7i4Cbr4MJug56n8Y7BD6HzdjpokDb9uKRRus7KPXD",
  "key2": "QZmrbdXWCWWTaLwS5AJ2hfv1niSo3WMniMBPXm1kQL9yJfsnyX4mgRR4KRD1JaxDM6CTEYkxU8QmH5SKkQ1YZQ1",
  "key3": "DszSCQUtkGTkkXbZHrFqftTkcoi2aguT3KfXszpuJq2ix54yLFXCnpdWZveiweLEa4iGEg7dqg54pLtuCEw6kXK",
  "key4": "smn69SDfrusQWAAVZX7Si5aK9JBCLrxaaMmE88s9JXXrkak1ja5PBJ2tUNeLdXsxmHPbnQ4G8kG7UqeCm853fR5",
  "key5": "4anZ57qA7TBsKYqpvvoHtQxHf3u9bhpS6rbekaqmTY4yotLLEHmgD8X1kGzovD9YjN5ZswkSCsV7qxcEJobJ8UmC",
  "key6": "56o3kJCkkkKuRhKS3hPtrSDrcA3SmecH2Q7QymrbnBhpTjyEPSqUgw8vupaU1an8qwp15KG8LdxsHZwDAuUZp4A",
  "key7": "4bZk98sLWFFMiLa3gfCGbMdujmV7vMnMHREYL7Sm7wffnZFz75qv4dCmuu9cbT1iRopppZNLw6apzoqZopVUCkoY",
  "key8": "42RpPtcEsHcTiW4eAbu2WEDYkP1gJeaSfDNaGQqGpsvXav3zTMm8nzDAZxTYomrWVfms7Jaw9kPEDAqPVABXiBpL",
  "key9": "5L9EbkdeSz1YofHVnroqSkjVnikWstpgKsE5bAakiThcNw9EhoW8D8qXHENPQDJ1f4nWhg8A8ERdDPns5FJwUxYv",
  "key10": "5tuh2895NTk3AEgT9fjeWwbqcrkccZXeixpr9vznGGWQxUr3ZbMp6iX4vaHsxc8Dn9vy5GDGb2sYCULb8ciB5U2k",
  "key11": "3mvctSarSFQt6aND72kgprjzXJcqqyXKAP4QS3t7Bb6WbyxtRrY7zE2MV2KGq6VarALEMaPqfXyzS2hLvyMRVRYF",
  "key12": "fP3EdqZhwVhv38YoVSK4ppL5PJww9ptVCrWPKxZ9ABMPAD2gjmTvUcjpA1sKFxN563dr5mbCk3A5FP4EWvMXcx3",
  "key13": "292rE6AeBKChPcz6DezGsALEr5RoaQgrN2fx9T6WyVt1XQsviYfCjtC62wgH3JisVB6fsZ8wZsb3DXwHNEkSrgqZ",
  "key14": "2ajW1V9okqXG3f6amJsRSMnNNrzCEPXJdrXEbb75nuDSMitGCpttnUTJsPa4WA5e8KTsiFgG3Uf4kRjGTZo79DkK",
  "key15": "5fcC68Z5niw9PyETPirymuVGsWUx8vXUpdcUmJRC21pABqqyNU4u4xvANNg2jptEr487396KuXhVYeiDXrQ6G9D4",
  "key16": "4rZnC1ygDqsZuHmrEXYvQdWff4p9QFXbjwsmSJiM1gWWbjVo3GFCTxowVgfyr4Hw2KBuiEeraXhGFUWgiZfEYx1x",
  "key17": "3a7HTnoG2wWM4vTEu6YDXhm9TpktjyCU71eaJLeHCRtdMFvwe9BPqFdpKFHkzKv7WhyZqkvm7UnWBSnrSTLmoApi",
  "key18": "3NiKBrrDyFgpyzadHmdc8zNP8PTSSfFVLa68RtD83Jp6DX4k2Fjp3hboEo5EDThmttxAfGjGrGrttZ4AQUbs1EZg",
  "key19": "4BpEgUAFNWmvGCZdTJqMjFHfPBi3nS4z3ZPpAoppyJZtSwGNJDZ3xQvbMZBFiDr9srvUHuvC9t8amzv7zouVeS92",
  "key20": "3xpis2hDTz63P7J8HvCEYWZARWnC98Hn297fjJCBZZrk7inFiUmHmRGTi34hi7eYa7Q8VtvW4y1AH6VkQqkgqrfW",
  "key21": "4rUtquuMbJ3kN1y4PcnhVjoDq8WYo8YtNVTpbX96KLUrC5GQnsS6AQqP68vc4w4z5per1x5uEmmhHPYJ26V26Z39",
  "key22": "2p3zQEy3N1iF1cRyTdKDMqk6bKZUqAgRW8SysbNVRxvrS3WoGDsLnq1L8mf6qwB3xF3QKhMzYCmcvyg1UTtPWSn2",
  "key23": "4DE6TaFDLUHf2VSN9stDsDffrrMgR14sfnFN5o57xoXZ5TWzB1WKVxdXCLbj1ZSHTRbaCWTeu47FervBbaxiUzeM",
  "key24": "4s9pP3yUYrpHbk5DCn9ziWPmnfRYttUy3uxivkQeGeThwN6z3XvHZG87LiR5QMnT2cMijtsSnwKzeU5UsRGPQ5Ce",
  "key25": "5cS5YNwPgEpfgLM1Eqr8vFAz3YwqP7duHreK1yGCEuKZdhmm8anj5o3PJpo98BBNagxGqS9s7Ldd63LRzdBrYPZ8",
  "key26": "4aVnkTC1oqpr71TtXihxXGSEp2GcCpn8U2a1aZ5gXPNz2GWBBhEGTJUR9tpKQgrWPf5gr5YPCaAEnt18mqipC2hW",
  "key27": "3ZwciU2uftbzzqUHe32zeTJerR47GbYSPciTmJxmRsNuqd6NZfAk5Eixb3L8QEqATRkgcZmBUjjfcDALaaW61JD6",
  "key28": "upJkHo56aJ8sYEeJqz2QpH4MkLeDy7CXD6SjYoL3sjwVQtpsGPRczr75MqUjqA7HiN9tQSQ4qKe1BUjctStqrHZ",
  "key29": "bGNzBtdNos8ntozPgVVhEArcoGxDBiQnw1Msu8jQBRjQKCim63rZLomvCK6DCZ3AjoC4gFYtppRL7cokT9Xf1yB",
  "key30": "3MRP5SpSMjXnTj8bbJyffP6N4roYkMVsLNLXvEqdcgZNSLeskseGxUw6K1RaaB95qdqKJPcLYHgbFpzZHhsNUzJq",
  "key31": "44Qc6k7gvhyMtc4sKB5sJy9KELzb53mGLcAFBMaxxCLZK3y231LYXQBMp1MUB9XNeZVYLmTMp6oNZe27dWPiZr5i",
  "key32": "NCrbhvb1Js1CrxEmQ9NzC7FcN8d3NaMrnekuwAisrXEeUdbr1G4Xf1rJceXtZMSZkw5678gB4McZADqt7EKNncN",
  "key33": "3ewtpHzneDy3aac4roXAZvfofrj6yosLqfGSUKbBsrUehHK5a3bwNr1pwUSmEBeoAFXbxgNupoakpsRvtu8MgXxS",
  "key34": "5jXYXhwpwGxT62URxgje2fHy5QqLK31DzcyHFN5f9Xp2AUPZTNZ1hFLQpTYrcZsQBYSGdkCqBs6XXzdhZ3BR1FmE",
  "key35": "ACh663SdSsFW7AQBd9Ytg3Q2HHV8msZ2jnArHyJRHEyXX79nYti4jsQKwGYBwszRyyXLDXtNKXJoiG86FtnGCAu",
  "key36": "2BNqcVnYbiJW5Hni8hz9nFoxxedDvmn4Qc7ehVhxedyLcyRUJVdKYZh4dBGquV9qjkqmw7ZPyznjtCqS8jJNjZrf",
  "key37": "4rsF2mPcXqJxeid26bdG6oHgkjoFnW3dL8QtJqWu2kNe1GodcyxBkVgMMvSJkJC9duBbwibJgKscGkY14co3aEQN",
  "key38": "5qzdqA6q4mvkfhwpTCyKGF69aWQkSoeJAKD3uMo1HzaNrGgaPT9Xe9TLpEo2tkUBED9GsJBjXDmqb1G47JBz5mUa",
  "key39": "5vAsw4RG8wUBxENvjtTSKQKMChF488WWpMvAwN6u9oFAdRVvfqd27ahBbu5daFFP2TkncEgQTxUaVZgCHNhqxTYN",
  "key40": "3BpUxu5Y3SVMoQE4r28obWJ962Hwc4vTKXUv3gH86DqXPhpunoYtH6dhTuaPABUXxnQwbYmLPpbiTUU5By4UL5gz",
  "key41": "p3dvkjPzWr9u5ApnZnBmDehfUS2zeEhdLyPhbtUkXsmeskusFLLe4vtyqza58EfzscJQnVMVXepmB5FHLQ4VWno",
  "key42": "U6B2Nj5dExpGrjRwsyhPd9q8fDQasuxusR7xBD3drLVZ2k6NxQeD9XKpr4wiM2fkUpw9ymsBkE24dyg2xp4v3jJ",
  "key43": "KUxP8x4pDujrEWCpsZXqviDKQ75DQrxR6ZoPR7HhhQvKEaFjUfsWFKNKaPbDK8Fzix9ZzYvTVeTYwbN6NzKEarh",
  "key44": "5CrkjRQ48MXo3ETY61RW3snz8BLH4SSUnVeuLsmTtKNRM8veev1cN8bSqnrV2BAZvagpupwWSBAUT5iTTzBtxC2L",
  "key45": "47R4unpTP85C5uNGbj5sSRp23KQybARakrMEaHYkUJbPUFmykZTv8N43JHvMr67N2GFWaz97UN2e5WnM2onXPdNA"
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
