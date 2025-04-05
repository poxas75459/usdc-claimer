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
    "3XPxAsyw1nFKWFAFfUCUhNX1VU8FwQh2H5LK8oqCcU1XZt1q5aYEhuMRVVBmfaXMD1GkTn1czrYqSY2Xq7g1MNzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkeyfyJUfq95uJNdGoAz9neJSKgMv4jgEWCZsjBk12oRVqsdxbzsRoSSD41qGaqo17bA8vBmmsb8J7wivCNYe39",
  "key1": "d1PSHMsrpnDAybWL5FygmcAVDLpGbVGBswXPwKBksKHckZFrMeTJiSnp61tYteJ9ygkgBuCJY7bdahmXwWEvuUU",
  "key2": "64a3A2mHKYbkAtBiLJrHP5qfDLiLokwUa8P3V3JPy9Y3E1ZiMYbCAVTswZuPboJeLeTFFRgsxaLoZjxKM8woxCfJ",
  "key3": "4GMA5dEDA5M3Nxb39ECHU7KmLdUiCT37ofZtkB8TLH6P4PLmhTQkw87qPSck1bbDhU6S5UsMcAajmDuKSBnpfMGg",
  "key4": "7Q66X3dBG1tHYHS3QhiG3ZADZNwHAGPzGM4pPaf4zwceQeifkbXXZojUNH57joSXNv4RNsReweMz6sub9fVk28F",
  "key5": "2eLMVSGK4uBJX1m8ZDWCPgcrfaFaU49MSAPALjfhF6adBNwXxZ3h8YJbYqXwF9inRhEoGJ5YHdT6NvBQSBnYCgD6",
  "key6": "3qZvX3RZw2kjKh9AUQ2aLxeVuGf4VQhYceDakuugNNuxpPJNMtBcqLFnNkkJzCeEXke12MmPcSkariqaJAzcLdmW",
  "key7": "2ajkyVWVWVAcP58piJzpAToxmeeg1PBAD63Q1z2HDpuQA1hPM94vsnB44Nm24ZYj9hbKmb8KjWCYQBWVUCjchC35",
  "key8": "4smny9ZZp4Lbrogt4mL9xot5gmaZ1xGVvXd2XXk4dEk3iT3Hrtxj56TbyvzyoDKrScz3hfEDLjXVBZL5F5FRjDyq",
  "key9": "o6bdgYpZmGoBmTyyRZT6ZeXw5Epks6Kfp4VRY43EhTneVMkbRxNkAbH8vSSE7U4AhUaEQkZurHwPKRvUM7iEryh",
  "key10": "3pfh55DzbMjXnzzuvkM5zC41nhDP3h8bt4YsiUdTM4bNhC2pXkRtXAcWJ6hSvxgWW2U43opH9mS6NDp49LYn6X3t",
  "key11": "2ydfXZHuZYwBggCzihGeVC91NbpKQZMYnkpkvY58BYqX6po2Mu2urqQxHZGS9YMtrmfu4i5iEq5VfuDGdeYxCFuE",
  "key12": "2BeQYnFfjbusXDahZ9Y8EQpLYyutb36pdbt7nUwKXKWBh8pKNmxcZ4mT3QWweU4wgCT7jse1XfYzgPYiqnMvHZz2",
  "key13": "2jw93aozxdf8FsScpi9g3cRmpbSN6iMByokzbfQhHShtttJkRez38cTLSQwYbsExLV8RakJvJoYCqk6FpuQSePKh",
  "key14": "3NHYiTtABMyAg7NDe9WhzngWDX95hG8Aa3CYSg8gPn74GHbCQ7BNYHEY35wsMeoCgBLrZ1H3y4DE14uFxeosLZNB",
  "key15": "2gCyUo9vEfTD3qr52S5HMiTSGDtvF3MHqVkckudLEvRWZg2ezwpsMs5ukhSMHruMs5JDBiUeFap2vkbTJ1HMSQeS",
  "key16": "2ebLSZ7FY9sA8WjpVk42xDbAAP31d43HSdm2TsVpHu3xu6NR3RGtsc2y6x5nZ3evxjRrAwNMZjPbBoNijbUgk5Zk",
  "key17": "2dQapyADNY5eupENEEnDi7Dqtf4F9eXZnidjdMHwziBv513ZmURRPfroa8r4GRnz8pAapJFuNsh1eS5C5dwjSkZo",
  "key18": "2CzdNXtu5UTpnUcwgFbuFVTLaQAyR5QDXzK1ZkcaCm1ZRbmbmsU8Sxpt9p9DBeD3EP4EbqKcwCnhouptqbWAezXQ",
  "key19": "4mjjiT1k3cqizhMy3Bx1ua9mWTkdyTGdrsMMDwdpqHQgtftGcuUM8U6L6i2n1439qrKHRpk583o1YuQ3YapELrhw",
  "key20": "2RZBj5ZxeV5g1DhH3yVRga1bBsLPGFFBHnKW9gPzQkvUdSkJHeEFbHPrZLo57zQbEiw1ceL4QvC8TpGKLhhiFy18",
  "key21": "MLwWpznCaifinzb8GPJmq656Pb53SVnRXMgdAhXQCsPMBhC83uRSUyME7uvVz14wGLs2ERogMp9f1EJed6DvoDa",
  "key22": "3GgHmbrCNWXjBnVMZPCbNevGXMtYYLUmd1FfzNifkM1WmzMoTXU4rfxxfy28Dt59zE7Pz2uxYN8cS2WXG2rGvZLy",
  "key23": "2UAPa3ikBZMPtFzqDQUHNK8ohX9Qdfkt2KxyRG6DEEaCZZHuhgkzSGhdUjeFb5tCezMUXU82rjRVbbiCVeHtH5fY",
  "key24": "33zYfHt5aowuChndwDf21FqhNrfBpgu9LjdxJdkgN691EqtWcjt2oQNcPc7f4Tj3V7WC3vyF7yRgsTJmnuMVkcRX",
  "key25": "4DifwS2xvQDohDEYYQzMsJgWnUbvR9PqTPvDAQ9mQpcGSPE2PbAeSUmJ1kpoWjMakT7g3rXojMxpeFzDBUqu2DSg",
  "key26": "tu9szqbZTJMWeaQnoC5JMD8BkBL7X2jn3uc9oLw83rwc1Bmow372GZHAkaSLMovL9BHGWPh8i1ds6DjL9ty3hT3",
  "key27": "2Xvf3vE2SR2KuYBhRcJsjoEc4hwu5rWVsFJZBUf1YhtrNMirDP5A3QtRexVTChAEy9kissEu8qgEvqHTTDaofG8r",
  "key28": "sNDqQkYhiUi2FyEy6zgqZCdTfBkmXAPhACTNwcDLoXc3EYQcePD4uSnqjUWNXWCZ5RCtxTTmAGGrH2Qvhkca4NW",
  "key29": "4yfKueTmF3Gpg8K6AXr5BaEdN2X4jxnXuC6NA4xVCd63cmcggkminCiTfPggHK4PoDFcU9kk2bQPHjXCVA7mcos3",
  "key30": "3YTwNisD7A77uJmVHifUT8eCNrH4bwbnKhjt9SsoYwE7FjaPPm1RYLoqFipSdTkMbvvsPdn2WfimkjipLdejQLjU",
  "key31": "HqXSfn75zyPAxV38zVAJv1Qpo7WnQTqNTy3ks9dXCZapFJmZf8YudStJKg5sPHCKvcuVfnrfU8GiFuowvduVH7K",
  "key32": "4JheSAmLpgwYPctRZ35HT6YWsUrp3SNfnWN6NGX3zk13b6FmFKx3YYcWF4CtaLCrSjr2ye3i7XJGr8gsAdAmtyCD",
  "key33": "643eYmX3P5B7tTbXUhVu31T5SKnh3Vqqs5ucNRvnZ6yZyrvUvfJmMZHgyGRN3qn7PVqgQHsMX7eypPwpqcGRHU5E",
  "key34": "PATiU4vniAU4eX5LVWjgesoMaDowJRGXz9wRsMxoXtAKkjKzGz1747BDCREHVRuXvWmfEPv3fSXGxgffwRP2MEo",
  "key35": "5Gnv2axJQU2yVtiKZcq7oN9HHCECBrB912g7XsNXBubpPR29KjpswDYjaQWypyxcoUHYJJWJSFDhQPXYJSxLn2Kt",
  "key36": "2ctkKdkB8LFSBN5xiMpy7WWWP4qzm29etxw3cNUkkYd2s2EXErLpDeGTeVNLjF4Mmwp4aJNeFFNEsdp24V7nmbmR",
  "key37": "3BtgvEjSVMp1RisGwoFPE46wjCnNMtEBnp6WRCsyYGyVPd49WDtQuVfsAdb8brUuSMSvGQZuNWEnFWdQE3B5UsxB",
  "key38": "2SoZRHJd4K7H5uq7wG3VDu7Vqv82ytRjNPVDhFrRnV7VBQNcjNUMLgpKwNHxwgRLmS4c5xa1siL5CJwAFWXanpu9",
  "key39": "2QYx6eea6vfSWvo7uBXQVu5ZybQHbxH1LrfTTF5XAKSStTmrLRbGZLwYJhAGLvMsw3K5mZaYuQTvvf3Xi5VGwQ7h",
  "key40": "2kVd9WRuZdy6TZSbxucvcVWvAzeNJunsoZq79rXqAYAPfkg9HHSDa28h2JYyBC2LFbGhGaz4EQWBymHSQQiVbxWL"
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
