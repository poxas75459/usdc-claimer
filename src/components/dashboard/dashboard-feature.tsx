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
    "41hGGXYEYwTXKi4Bj2VJuqh5gZsRdsrRZgxsQogttDm2695UXe3cAn8zEAkCiEqkEauqFws5yz6m949FLJC7ovKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VBCLduUUxiHLkCRhJGEcQ9rg8wecN8CWA8sESkVnX4dCU28BC5KUSav1YpbG5vq7FxUUi7JyskYMaMUDf8mEchP",
  "key1": "2sgBfZbfyRczoPTm49YqvPjE9k9937KC8RF3ZAExw7iwX9nwxmtUcxPhQrfzK5rL2F6sGX5MdmcYozHfW5vmFRBL",
  "key2": "5u6Lb7N1PFoDhMeTiMiBmkNoZi3gdjHhQBgiT4s2uryHqmjZdVfespXGkHLU23L1nVZGuyXNrQJKPfXjnSD7ShYF",
  "key3": "5x2keo2bravjNBFHC4obAsN2c3tC9ZzW5U6chpPNi7KWDVzL7WWEeG8UeWDvwkGqEKkqwTgodsBt1yDQ8G8TrhvU",
  "key4": "h1q8HFutTMEjCmGkFs86wdLLrhotbS8R4Wiih8q9bLNEKreXQKk5TKPWPu5HxdGjuBSnq6vsrUL5XunJdZgB51p",
  "key5": "66YX6akjjGVv8Reo4kjLvxDKTATseo4WVmsn19vv1L6eMpmzDPZNQKZZMjMwSppB7Hm1J1MRVKSfqk3zNnbogMGg",
  "key6": "eiWzaXNEHr6vEh55HEwEu6utDn2ufPbpyNqoSzVYZeJ27H9M2W7JSxCyHtv9GG5cH2Dh6r2JepR83QLW9UQaKM2",
  "key7": "5GNjagcuqaubPAbnQ4XJTnkPZ3TDNKgLg734NueykygAW1fs6Bwj4s8PfNFNCTx9VziSNBm2VtXwmT1x1yPukf7o",
  "key8": "4bC4rmUVSuuF6KYK14TwzUqyL3ifTH5ZKfxfj6eZrz42dyNYKSvEomXP8eRUiQXb159ShA2gUj1NwuCJGZfgeyrQ",
  "key9": "2aD3M8UtgHZnfxGvjQzqn8h4j1GdhxCifYgYmro7GSNd5ndajqrvDsvxTk3kgqsW2NbRCzMLoupaLMZTg3GMfruA",
  "key10": "6JH3knFRSgKmFV5ns236zbEFmqHxWYS1s6S4VnSWBiocDyR5eZTxaKE63o7zgZhuEYCF6SAuqPsJ4VYaWweEjdk",
  "key11": "46E5s145zFLNSx4uKXB18LK7puewJLby6X413kj1UmHSKyRhfdMmTpFDYXjHGhbPpXvGQoC81eLr12xLNDtbhors",
  "key12": "25hyJpCcvNRSBma2w5iFbqyyG5A4zVpfCEn7qaBWV9y3tqaJX5M7ruTTMdtTR8ZBTHcGex1yEchjz2rjKfQ7JFgx",
  "key13": "5gZVr2TFbQ2mP7TzBzYyXr1ahsjVD9gAWXFBbTt6GsFgLokmeGXKnWPf75YDJF4waUYN3Hc3AXKdvA1c5QbD3iwA",
  "key14": "5AzZQ9PHFmBoGowSnZB7ZyzzWdRXb6jJaPku12QLpdH47dAyErX7UEbye5rqe6avzAmzZ6kNxJhJPuKr6xQuqonN",
  "key15": "5hhC1wQdyowC8Ld6TTGh7t5onc66w1Lv3TyyZkcHrsWLWMStkA1cTYMLU8CTcFdgAKTmQCi3r2EEbw91GH9eSrYk",
  "key16": "ZrdH2bb4oBxJWABHfofTTAzST1JKShZ8prWtACmNcPjXMRDyP6MhhM3vK7qEjRrfJQickzPJiKaPGCjnSZqHvrp",
  "key17": "z4DWjmvxGvRUxN1z9F2Yg54qWGnBmHJgJn31Jjavn1QcaugYoh7a48543JrfDjMmeSSdTDcgDziHxc1u91552qv",
  "key18": "44BghvV9BJxWWaCEe17E5UsFPcvPnb3Ldr3aigSiyJpjWuCM67tFKgWJnxPKKqStEUXfyuxnhQRMG9E8ciMhKxUc",
  "key19": "5ZDCR2W3Gt4arM3pUAwSKHnoKuERa4YSFpbPAUXGbceo5J1CjFGeqY3Afkts1wu5HhZTMUrNPHxEREhRgp8mw73h",
  "key20": "YWc3N7EHLM8QCSCkmDDnpUiN4DQgBSdV1g66aPwPMz11v2eTVgQJqvnXCT43Zjt67pc8g4H1L8zNZGK4YiAcg56",
  "key21": "mVmSiKua3E8e91sPKDgcBn3jHR2g62Vr9ENM4GhvSFdbMCsC9ptZ5Ci1EhDWeCYJyeKXwS1b4XCtWwmx6GgZCqb",
  "key22": "D4QyE2hPYFVjn6t7BQ87gb6DZ6jCCagEFH2SqmFkC8AsdGhzDqZ1CzBtMMa8xuzsx43zuvLveXTTDydkwxcXG1M",
  "key23": "2vqTsnaMS23zcbMkLE1bGEUtmYk3TW1WdewffXoZE1f496L3EQKRTybvJeJ2AZCFc7Py85DV55F699X7aPfCmDac",
  "key24": "3DLSGBxREp5YHuasxi5VgNTvv87EWzAtsqRfwg9UehWu9iyqAqDM94pNsUgcXfAuowWtAnhX36rzdnm8xSsBJ3Ut",
  "key25": "2f9JZagJ1B9yQNu7He8Jq8hBstz2wJfxkWz4mhwFQ7nGFvtdYq4zT5QsthZcNtaZeJ3dricPGtSPQMz4rD9DDX2W",
  "key26": "48pj8EpQU6E4kHYpUizJhsHGr1W8EETUcEuUdbg9BTnuBmNYRVmp5KLmDRYENaN8oCmPquGZmihjfhqj3pTSfVi1",
  "key27": "3h5LxD4qEvm1SnPvMwLemTzTrnC4qDRoZ3ZDVRr1GssFHxjsVGM5TPvffSstWEcQGnnkHAskcRseSQqL4duw2L9w",
  "key28": "2somXSmwwCyTNAAVZBGc2sBoEFbcX6MU6DKvoG69oQ4krnKRuS9ZNFSvsBaMQYh4M4b9mmkm6TbSqnophVEHoVXG",
  "key29": "5mXGEYrrT3Cb5WeYz98e7vRDGn9yp8ZRPPtNhncU4qwNExi7f1iHKfP7p8chevv9q8Xg24r2qchgYe8WXkZEmB3b",
  "key30": "2ijbAM7NEZTyAXLExR3SDmdKZoF7buoXFrvfKQUu5K4aVB9KWLoA4fAByW5LhnNJM7jLDyCj4hppJ6XVCuGETLhv",
  "key31": "5Y97FYEe4PXEyDHabSjoPk1YTwvCCxdZW1gwTEHCFdW6NZvx7M3THERQ8EfvhipDX94wti69TNrNfCgRQGHMZykt",
  "key32": "5rdve2SvrEUzqGRbrHtWZiuPKKzYwSvC8pyQvfbWD8najmmTxAxLKT7SeiQX9vSJkCkXiqmyqucCZ4Zmw4udX3r9",
  "key33": "2dAJ6H3m5CA2VdxSMC9AxSSr42WT7648TfdBmjehzzyBT9KsvysMMjzdN1hGBbi9g93QkzF2HX1cCwck4AAhrUCu",
  "key34": "yrYyZ8mUHKVeXP7io7SJTnUFYpHJCPcQkAUcnSbRhHdB9fcH1e2VxDcA252ejmVRLpAX7ZbnkAWAjFggKvVpJNd",
  "key35": "4UFHHMK15JFWzyviA3kqPemo3HxpYqbXP41HLwwihaADFZR9ZnmzvPTaKMJxzLxHQr8HkdF4jpR68Yu7K2SLvwtu",
  "key36": "3Yr1U8nKmayuv8h27sPrsUZya6VvZubkZiqh4TVVc3AkXj3oR8brRPtJKFf8ZLhSji7HkKv8o74gUwVMcXd7cpEi",
  "key37": "3sKzE1pMWjHW54DxDpb91rpuVdHoMdE2jF64hXybbTH6mC7HxyAwPFJf2iBTZLEpFmaJM4cEVHcnKqb1V34nQcDQ",
  "key38": "2CHU7mBYqj58L1YPWMakFpFXgm8qcSfLmSMhnfHYvSeBk7K8uv2X5xdzfG2xMRURbdpuxZss4cDY9sJyt3xZHTLy",
  "key39": "2nKsJSL3LnQ1PJHw4UsCuRz8k25mWSDsoax8XqxL9HQbWJc5ufLUZmWTqLLvvmPs2TEWnoFqChXnFcnYBtXicNTm"
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
