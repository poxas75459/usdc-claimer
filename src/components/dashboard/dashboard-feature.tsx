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
    "4ymJBrzxNGFpRGhG6Tw3zftiYg2gSTFgifCTgJES5uYUvcpuXXUaqmWFDor9a8shFKvbHZdAhNqgwW7Gw759pv8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPq99kGVUe7n3zeDcJkMogK7vPQoEiqhgLaZTCV47SCPQ79rbYnF7dgFHiLTeEeQRktckPqVvcVkub1TrdNF2Gs",
  "key1": "HhU9KkdmHYiZQ6Q2NA1APZjwjjpJw2bqRoReuFBXdhnArKWtqTNc33t4SeVkBQ4Lh3opjD1WL8Q9zJw41mNphju",
  "key2": "2BMwHePh53raY1uRGPt7DJnXCtmQwKpMWT4HUGGu7q84bJY5wJ4VzuppzxZs6R1zT6eYKas8KgLHSSY19B7RAjqQ",
  "key3": "rJtyq95nSiZKr866oGjsaYag8N5vnXKpTSHYDcMGxK2sP15ms5gigNo18GTWuQnUazzEsxRdTd4RFpP7YmsrjoZ",
  "key4": "5eso5suA2VmEghsRxTw9arV7K3pSPiDSeUUHVAN9bhJyFs9AS5dLrdrkCtVNDCHttNZMo4Pr21fLKSNFfALRrQH4",
  "key5": "3KXGgBSQVaPsFtvzUmBStXpZFGz8u711SfXMMtwH84foZbHVzkpwRgGeQTZDqHCjx2THiHXpUaRcdZFWJxgbthC9",
  "key6": "37bMF6RYa6cE7tok5gH8YafACPsnu4qE8UAKS6p4Bauft3PFDC8MSbAjAH9qhCuCTCj3hFaMqaN8JLfRn8yVes1o",
  "key7": "vp6ykzx8UtBJ5FfHi4dhgrWvUzS17kE18ue7spmr231mr34LfSjDMj8bqarrwKUpyUXPiBAnHSeiAW86jULZck2",
  "key8": "2sGaQHzuE4B4yabm9my457fDybXjeErfr2bEnv1QaRz5G16U1P3qPQU2maxyoBgH2oeL2jWFcdMF6dGJgFnQSSH6",
  "key9": "5ej8PSH6bxRMqsKa65MS9dA3QREEHvHY5Nvvv7upWimf9wgCDfQ4vTuK9a7q3anyBqPntmnLfUvGGAKWhBMt23ZS",
  "key10": "3WSNPtZcV5XkQQCBqKAUxTqiRcEdefj8nPrb3PLYZRQsRjcR3GVjVYSksxFGifvDwkUhcjPungqoMwzuwFu4VsB8",
  "key11": "5tcnY44Qubngwan5mFcRGq9XP9ZHCj4mGiUsXHabkcBYzapBaABiq9fqAX7xHmQmkKThdoTYYLPNMZFvFd2zBWkS",
  "key12": "5YDqcvfzkfYxZRUkBHABKAfjbVC9WK89GaN9ivc9FeLJRtWA3qDS8yXSeBio2sPjzHX6sMPDxMGbo2Ph6eLcFAE5",
  "key13": "4cHHQN8BejXWBZgqtTqJPQFwf9iRoNbEdCBNPuyZbJRBrXV4qyKuG2awEnMvjY2GShEnAWgC3gVvbQSfTdzNigyZ",
  "key14": "3pue9e2UYB3Kea3RBkS4eeQ63uUPmLf2mvHmavh89DNruYGuVmCEH6PHViKiiEEEG5o9osWQTdkXxUXy1BrHHgxf",
  "key15": "5FeDrt6UrAr4rSVwLKSLhgCs1XbnFAHpZRvaSmhabVoRKfYaaa5ve2b97J2rE8cmYLNYhcfTknPKLLBxXrwtHmLQ",
  "key16": "26WuNByLJ5aH7kAHSmnGDKr1ViatdYwESzjGnW17KsUVtHZPmJ2toz458MmDGq96Y1B9djzHAhRgksHgSQig1acB",
  "key17": "3u6RnVahZq8v57xgMY2BTFoPxJbcfbS5s7FgCrQ6VxsL4whfvayus4XZTBQy4YQdZy3xJgrq5knJxtdawhmWcHBn",
  "key18": "4GCfUPMkjrDnhQtVtPtDJJPAes76zzyYaP3uHsz86B3n5LmF6sybifQNWuiKts1rXaaGtRRV99votDtC2Jv9CUxF",
  "key19": "cBss4wk4daUvSZCWRCtUAfjpvFczbRiskYnD1sbdHUkicoxVMDT3ktkZcJfp1hhT5DRtL2fmMgxhtJbeC8oS6eh",
  "key20": "2pZsBRGqnYXUKe58Uu9TstX849zuktY49fvLH2vHk5YrhunMAeaeHSirgo4Qsy466Mn6yQpSr7RfpG1tYfw8LcKe",
  "key21": "3PCPyHa2PY5aSKVEwjrbq3W7DPn73TLLELhoJUo79ZfQuQSLwnnkJCc1LomVQEd7QSM6H6UCrKqBL6vPwTUXyDdE",
  "key22": "3F6RvcpVaJTgkYQp8ViKRN6aeF8KntXhuTwVNnxcY3rxuY5xoREpEEj8Jiwo5zHVpNfsoEPCouz1CjsgPDNNEzfY",
  "key23": "4JuyNiZiEdGen3Gcw7UpLzTqytRJoDuCRwbmGCMyvjRLAvMqATWTqmEyTSDYhHjfFdPmHhBzaKhJmesidBGMwJDT",
  "key24": "UATXvsp6zagXddT3MQUvMcvQwmiAcBUBwjYgivU18jPQR5ScVUmWZCiuhvgcQq6MFQicUn31VMtzq8PtA1aYCkT",
  "key25": "3CfhT4iqibYfJvLdfza5ydWMfQRURukNjdFsLFy1xHZWPuu9HizwPLHuYyY6JyHyfME2nFFDg8wz57XpQSBukBMo",
  "key26": "3De64BwpuMLy6JXtH7v47zq2nf9spLWifU2grCkvLCPJyFCadkpa5BiztoYU9JGNsPtXaVM4Dt2rVGHUgtZ5VVnw",
  "key27": "4FPxPVETzTtjfLQWVML5kwD9CFPiMmo6ZCH7y8RqPBD7d7MLTpE6eBfoYKWxHtPWSAL94nKEQ5G6iW2UStwPLCwz",
  "key28": "3RCLvD3LSYmxecY95wuAtgArw8THehKw5NqPeY6T4D48we2dXd4dHKWVefGmxSfbGsgUoHAUJUPgH9KJ7TyKJzfE",
  "key29": "3AB4Zy5DnScGBnUeR8NRdBAVjZHxnbYRhtrhugp5U2drCk4LtRnJ9DwMotZ2cmSarogii6h4hxVNncaV7rApxM8X",
  "key30": "41tx7Jj1TYwoRJbFFbYKqoVcyiAjYUwRSCMxf7sDhBHhYNGchxHBXmJLSnEztoaVsU5PAgDCFULda39cMH7zijJD",
  "key31": "3G67K2NcMeoG9FVtNBgFGFHKmQs1VfgqnkYzg3go6qNddSUr74x5aTB9RRby1uUuZT7ECaCn9GanAC1e8GGWFYiH",
  "key32": "27bZHCppU34F9PAvPBKZiTMoi2jiHXbGSheTsmmsYatfUm7sYUspVkNyR8KYFGWGhHMbcULRbmMaPh7NdRXpGt8X",
  "key33": "5ykYA72GqhnNHgK2oYmEjG7CeFRDXvFyCJfn9dWrseTw9AMU3gDcaYBZEE5ZQ6DBMFQh6cVwSjPNy2uyMAMHcb66",
  "key34": "psdezpLBnroduvDynPjC99kHqav8WTyTPphGaJq5MUnU5A53VC3aCwChEtRgnH6pjPJmnbvLTc2VxT7w7dhk4ef",
  "key35": "2eDU65ZRC7W8htgMPBtbmogBoBqYgnAKScLwFExbpMNvZ3k9eJ59KfTSCDtmV8R64njNLPLyEjrH4sdjqNev2KtT",
  "key36": "2Dsh1oRpNMpktmcKtWSGLmTQ6kVw5YsQ2CHwVxB6N3KBVAd29hKRptvx9oA2miSvGszxqcD4mB8Xs6RsiduUDEZi",
  "key37": "4gf2bxcvMd8H1MuMkhBS4e38UNsrvecSsYwu9oNaRi5XAbRzjGRx5w1M36oFQVLL4RVkTUQFNjx16C9DuBf1NRm9",
  "key38": "2gMpjcMpU3jGQ8euAJ6Xqx7bAhGBgfgRDY3dWQiEaEx8PqGLA7r9PTfhyFzYq4RUETRZpUZyg41AEP55zRgiDiLk",
  "key39": "4rsYQFkRSidFddZoycey76jRwzvYqMDpVqLZLW9hbddg9o7PWWrfkp1iAd2eejj2Mi8JZ3JBs6eeSFZeJcqbTeKj",
  "key40": "3wwe4Vyvj5KBUeqzWTo5YsEFQFZjcm3ms9sufQF76fQ6yQDWNUgfZAnctm97UJLyjRW3JzM1GoPwcqS7FCnNEhWZ",
  "key41": "XtjJWopDLzHxjbHadMMtkUk4Q3nRNLoeUgNenLf3wXD616sKTzHi42sn2ywZocKc2etFXSSHZYBmtRx2bgt64ez",
  "key42": "22oWCNapbp12QuvCueN7brSXqjmU6XgZ1ek6TqdPLq59eezhTTrA2tXSsNtA2LWJNcxJDtiWtptTnx4XLZZcijSX",
  "key43": "4cDULd5CLAV8aPc82LEYuNUQN7nMZ5YN1vcNB9wBZb56ngHSwyZByNduZXZ55gww15SF4yRfqquH79ZJj7C9w2dU",
  "key44": "4oABZGTAWbBPxUeHK6USjT7m4ZFECtgYh4Pp4fu9PVmBKYnkTCzK1C1RtHefpQcccTTzeYCseqgKEhdD1z92bBkM",
  "key45": "3qEQmgbscHLuG1htqz1bwizVkQUGhoht2ayTZ7y4pYbWuTksDYQuTmEmW8ap9YpPQ38ouMxmjKhLbRu584XcbnRw"
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
