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
    "bxtYvQPWKxqBQ2VV8MYx5zXcBWJWMdEgEywZAqGHB3ZCMBEKNx2CRWW9hmsa4tDoU1kqrZRB6xQynuK2ToQjm1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WRdqLkXquibjuJB3rgn84DWkhsacgmP6gZYbDYDWqugXASjw8eGwKbDM8DDZp9wPNxgGwoTNAbXKD49nd7fmNvT",
  "key1": "2kD2bPMuUdKtBFBwVzgNgRYw4yx7zgmj79rRqDbMjzkCDpYHte5yi5xdhWqd9gtohq1CqFcXkdLMd4M7iCZDiJa2",
  "key2": "29ku2DJNLAxzrHXXVUumWnxY1yA6kruCnJ5AiwJESPdafcEELJ3JCgZQEtYDpMMRVYTmnEhqezsZKfpPy1oDWdYd",
  "key3": "397mHCRHhjiXyUV5hxkW1QTwAesV4ofs9on7nXfRaHWWVFTxHBqCnpHPXVA875mpynd2H3ajy7ckEmgXw4whnTre",
  "key4": "4HfV5YDG5s5qoXfoPUqWC4eJ89WNvAT237GvfPFTcWud8prHcWnAreHHnHLL7cWfqpP7z8vne1RPE6GvsEF8sYbW",
  "key5": "589TJVUMvUBtJ1gu4xUDzPPRYbfhazmHKUQaxz2qZUkRXThKvvTPtigWdrK9DadXPoQwECkN4MSVNErMqwd8Vuqo",
  "key6": "BgW3BX4f3tYmrT5BzfL8Mo94kkw8koZm5LABPXLVQEMAgABYVTrbSVosTfydeMYZQGGUhdBpGuMZ8eUDHz5ivmY",
  "key7": "5zapXiB1bSyTTbwosnbJ9sD3Eu1jjdqG5c8PCSYth5VDbtDPpPcchb3rF84QSCKURSVK19FLhk8rVtp6EUZj9abs",
  "key8": "4p1TMJZL7Kmqgtagt55ZkUrEw39ZSdVmj1XJcocujPaPUTagDEYzy6JkkZ3NiExYWhYA2XsYJbZBuuXXZ5Ljuyb5",
  "key9": "2ee8TSSARGLHdwZsU9jRnEyUaux3ntihfHXnyFiumdSMVA1L7X6xMQvhQeN9B9itZSXmSSM3JNMfCTYPFeidtRSc",
  "key10": "4Dfr5Ty9w58rACTAQQRUFL5SCLsvRKK5447m9YZSNLjMmGoM5Aa2PS17BvAumzRY7w5Gq6hD4ThZUKAJ9LK8aP43",
  "key11": "4QpBin6bmsWRm2pxaJtKGeedRhyTxhxx1noFKwHBBPukh54uV8U3ttdKx3BFgML5tqCgj4u9AR1bFfccv5HhPtZC",
  "key12": "3XxZQBbdZYrvcHr7Nq6bYzPQePhraHW5apN3bMNW74ct1uBnacvs2inAUn9jCFDcVSmKvPzFequrBszTkj6EHT7T",
  "key13": "2gSAzmWadA3FXnLzE8nUK6fFjEv4drmvLfkTDRKhvYdn3GptREC1kRgwmGk9aFQLpJALdpYs3iRPE9ikX1EsEabA",
  "key14": "DByMhz8dekorbBESwxkosHdmUpCcQ1cirCEJmTXFcETrb4GKrhJTkLSeR2LQ5uxP6LaAh1aS4A1fTfhDBGcVuMT",
  "key15": "2Sfv5AFHDdxhaTcbqZ6WPJENTtuthez7hiFVkEi5a6TEfxfBRJqygnwYXQD6ic9DM8rN2RHfPnLxpTHSaV2i7U3B",
  "key16": "3By2zoiWyLcxWNJnYZQWQsJWWr6HBZKSjjZRSx5iHThkSWxVMrGuTkWb2ftHzXGUpUadYRAVSa5fHxNqPH8pR6vg",
  "key17": "Vr5wNiN2tuEB9nzsynuTcMdANYcy5FKmwGFLeoKZigSbfGnund6Q4HJhy9TcEwY3sQtMABVRJGLRyfkiZz7whKM",
  "key18": "3h8JD3rN3zMorKXVGt8Fv6EoH1niqBifC4V8Hs5ocYx7RSnN2FCDhLfQ3NbpytgTrbexXDzUCVtpBq4QesahJqGR",
  "key19": "5TyFwkJsAArioFaKzN8hau7EX4PTFf5i9B8v877pihJ6PoDCNsFR7kwsp2fvQD6CK5QHmKE8GyLzXBf3KKMqBLKu",
  "key20": "5ZSnJ5Eh1x829fchie1va7dUXFofb3waZpKVTtyW25Majwc6aXZAXK7dtk3yeuY1fJcjBbGFEQtfDswDEVtuGmNu",
  "key21": "2L7PHshqFRWqW1d4AsJbBrzmsryVkFrH5xTnhgbZCEFHyGxKwRbEHhYNYxuinFNE9ddcYagH2GLHHDt6Wg36jYfS",
  "key22": "5Mng7rMjx9V2Q3emAwtptv74dsqZ2Snou5XVDE5gt1rokJ7aneESkuEY6wnFPhRV33XSd41zyGkEcJy1RHpy6ntE",
  "key23": "2yqFd9hiHYWfFMai9kx197ShpMaiY2E5tcPeJiPuRS44X7svS7rrVVgTyNfNvRfXwhzmaSfPmFMWjzmr2JFgZ11r",
  "key24": "LtqzfXzH5DECCYtFwi5zJLSKk4a7WzPCfW5ne87XydWAkG5ZTRYYgSfEzLykqzM2a1fUsbQn9Lm2SoEjKrifp9u",
  "key25": "2uAUXC8bxPMtcnA74S8meVhHFsdUe9KDTwX7djFcwQP8ovo1icpsbncxFR4DvPPCMUFSiN6VhhppATdzGrUJxQ3M",
  "key26": "45JWdLYgXNmTKSnBWMACERBsBE9Us7UZnr6E7XEsZ9gYj3DY9D1muCZHqBSrkjR5831bFUv6KGADKHoNLNcVNhSZ",
  "key27": "56WY9MZH1n7HDwGPEbxxU5pVMUh8sWheta2bwBrYNoPYYctxG7AvhEkb32BMnuQzAs5fPYrECVMXzTYe7Azsneme",
  "key28": "5wahYFj77gRvTL7f5jTSTpnabphECLRp6vvxhoa9j4m3QciLd6unLoGfLkfwiT6DLBUvERq2jRLKDvPL3hBLsgwA",
  "key29": "eZrbivVUh6w5ugZLSH6kcxe38ipsDVS9nZo9d7N4mTDpJywAs2anj6oTEDU4FwRivrfLK7YQLJCtJedTEathBsZ",
  "key30": "3mu2vrwyVWVDQLrQxZYXw4sBEWFAiryGAPobGzTDAY6u5WyapequqffoTTUkoFBXRQLxufaSK6XpQ3mVjLNphs6y",
  "key31": "5iJdxgSh4HzXZ2Dpg8k6TZ3jS8fdg8CfEmbGbGvEwizCfE6HdangWS8oBSUJhhv3533j2e5uMBSi5FNYCWqija3K",
  "key32": "3bi6GJZD46S4YHAiV9izTtQgR9rf1J8hDLonWoeCHU1MJdySVt76XJxDKNUCxETC12PtnXqtb3ai38dyca7ZSj5g",
  "key33": "V8cToUndb9bemP3k8Qb7VieL7KMVspCtbqMkAPM2nLkV2fZ9xj3wsot7SUsYZexqaiQnD3nG5gwrK4Ljx7sHfKZ",
  "key34": "4ryJos191232trkc6HsJSAnihye2R44fNFjyggFZiE9eUBjJgzwQDb5XxEuQUNybmfuh89tT4RL7fgWH2AF5uNkT",
  "key35": "4rE4j5k6DY5qcB9tBMJPWoho2n8EnxqVHyBLUqFGinnPyAPESpq2NfFAdK6QQvymZLw2P4LkMRzEUR7Div3dUaT3",
  "key36": "3bwbnjU8U41vc8jyXQtuRX4tz837kTzuuHgSdDAcwHXb5SwL2b3GtsbCiu8cBAhdnBkC1btW1SZmR9B5jiwCZhaK",
  "key37": "3HuMT8N3JSzAYq8SwwQKwhUz36EcBwuRiebxKPZAcakYocQXDUUAL5KuuLNR1kLAStbqpypmvuLnHRNkD48eeLjH",
  "key38": "5VQzi2yX5tsdhMyFZNaU9UdtDz3WcFgi6tQX6NHFLpDsp2qM5EohvdUR2FqJcxXVX6fh3JBc1fqBdk6hC9w7d9NA"
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
