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
    "3smFmb7uWdurdqgXepEREGtDwZR6fQ2WCrWBG1exu5RMeAvWuNdrsjzNwmhNwknM3JoZvHSXp7FBmUY97XPnvq3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27htnw5rQy7g9EwwnBYrfcq8ithJZ4fsr4F6FYEeWLC45MsWA376H8xC1btP938fzJ5MRxtQdVXoQY3GRb4cU3Fo",
  "key1": "S5kChcM95YMQvL6K6Q6mTynfew8GtTuFrHoQehwtwQwiDC3Q5L2PZHB3sGwWBXUFWMBuuc3ACpkzQw34EhDe1gk",
  "key2": "5LninMy94SpsS2CBUPdKXCr4W3S86cmXabu1axTykPoreHcVqoitdYtd3SzTD7fBHPJbk7ENTARRzU9LBhLfAXev",
  "key3": "4xVSGS2nWZcKUCpmoYSepPe8fqqiZPumj5cdLrqLcdeMp7pLLWQ1USu5ytjyTyjLVzfHiT2QGWndtF6qRkqbgJ8B",
  "key4": "7aRdijD9MWrPUt74Biv2bs6qtLrzd1SvqESuZXoQJWbZ8gEehUsZCRMfAmLu9LF4sPt7AVY2tA7t1ZCYfTH6pzm",
  "key5": "3U6oCW8mj9eabitSGhQDHpGJfAHgu2LDbMgasFPmAsLkJkVzdzekcJenvH37JeLtArMW6akqFhdHzPBShZEofpwr",
  "key6": "2Pbxngn6kzpJB9suiuko2KJnng7ePqGFPKQCsBqgYez4voAUDHVw2kCtuBZJUGHhkqZRpeGK4zkwedtDhQr3ovsB",
  "key7": "gwoRxafs7JLMFd8Pcf6B7vHxWsCgezb3yUzxcfjzKpJ1mMbbvhLCe7vHvT4GTjk6M91xrYwuCj6dZHszxspuD8S",
  "key8": "xVdqegNMMfHvKuAjKGTbws9KHPsghSi54wT75KCv6ZRTrJ3JzQH7gW2UL6fPKdd1foogSZUQPZbN5KhMHxNq4KR",
  "key9": "4AdDSYWHk77jFhUPPRNiS1q7JaJprWgefnX2mf14RFQAXnKhb1aibR8irKXjT2qsY9q2mxQ4e13nT6QySp2UFpL6",
  "key10": "B78EfTKjNmvLdv4KAw4b5YSKXPt5Bk2a7UykrFZmdTidy62m91HrQ2RTGcVKMLmo88nX1sLWGYEoBXzSdc8XdtC",
  "key11": "3EMaRECWXMPMkodrce8LGxtY98b5D479QyFD4D9FozsdMBFbuPXDZzfGcbn222ST2eHgdzpdtbccZy6JJ4Dy7GG",
  "key12": "3ExNnJMyoef3tAJzXHW2WDJAfZJNYfq81aTGuz4UqB8MG8mejkfPC8axcSwyGtxdqTyZoH11TvjaNt35Acz34bMV",
  "key13": "hq8SDFfNZyxvdpAUXgbP9QGyiKh6pBUKa72sXEXUpkRHSes4YziBGhVjL2m6MJCC1JHZLGi4gSe6iiEkAmmZiX9",
  "key14": "2M1crvXr15Bp9seezEHRQWsz6PG2D82d6yzdHBgXHGtMEs6RiSNwTJyRUVJRR495Bkoibzrxb95bBtGpBrAWq2S1",
  "key15": "65BGiymg9vW3BLgeqrpvivw6FeYtxqEBU2nAtUww34uyfAPKjFVtkrWXA4a7FkVzkz2dTEpEP6ZTqQYxqvQCDdpL",
  "key16": "4cJ3ur88oZJVo5de19aJZncbZ155t6pxb1jr6Nfh2iaM63o6MwaMdMbhrdkzKobWQkxHmP4KEd6bfeCVbwXRuWgQ",
  "key17": "2fGLwdMkJ5M5TPtD6ck73PFzggMCd6Gpc4RSZLrG33Tfnp6TLdsFnAWr5nR4ip5MHL442tWcazYjC3tjPqPBHddd",
  "key18": "5D6QEiziiv8ZZNGbqJ4Zg9My8ZwhX6i6jGNcWJFUgdDCKZ6wMfUPvCpi5SgSwqnnXdrwqGE6G5KhK7zmDSfkiftn",
  "key19": "5ZkNej7mY8BuP126WzDifkU3SEGpdB3USG8Qq7rGaw5NruHMfQw2AuR6quJNKoqXQcGRtbfKdGBvdsRNut7d6THn",
  "key20": "3sMoNzRbiCrJASD9d7t7E2SZECPFqmSALNHpiBq9EPGaYYRq5FFcSyWNUcDWy55PMZk41vXtWVwmzeqmcg62i6SC",
  "key21": "43sgw9de2tZkhYiWewJWTfaTxJ7ckrgNPjxcV4rd2FCKUSq7P6nWGaVVyU3zTpsCx6veP1TjszhzVknYz9p1aQTj",
  "key22": "2AVNeCF7W9rVMbdECmjoAB8VFuYpSyxDgT52kE4ahxU3pywrrVpY3J5335d9gDAkeapSLKVpDSRQvSdmU1oraqiP",
  "key23": "3HDvQjYSQMSkDJQ9DrdsQmFsw6aEVNWDkJ4G6DyCC8scn86QUxfvRBq7j9HhnUhhekfja7KpyyHmHHYHWhrN98p2",
  "key24": "2GVh4bigW39rpNEcPTm3bfw1dcSGDQPJfvFHHwgh4aA23gQBns9Gj1YWjBpiQHVhFzNmgQ7NHeUtvkvq3uFZdCCz",
  "key25": "4v6CjnAMLTpVWXUbJCEdCirwtk8n69VGrbUpj3c8zYpNZA5nvrosAiQWoWUoMJkthw43F47XRFTiz1XxS96gdWFG",
  "key26": "5zGimJZZPrBs39TcJPcT8tAgPqh9BFi6dsVpCboaP4HkdVvzNf3RHmi77qBbb4ibE5zQYhbTUpfJBqLzMm9MQqZ4",
  "key27": "wDPpgnYd2Gh9r5zHGbg3jTs1CwYKxEnghYBaQKDCo25TVaGmScSKz8ZYZumP9d6tS2Z7r2hjqRFUpjeAvckAnWk",
  "key28": "4XPwbdKb3sRsJRu1ScJD8yab3geKb9Ktg7wtMUoket3kmEqoGfo1h6YANJzYvPPFAnycQUbubrfULwu4tetTPc7c",
  "key29": "4Kb8e4q1vcfLDGpWYu1An4a2ePtSRw8wAvDD5KSZ7ZAv1bic5vdPXQ1qVCweAQhiq5DJGa7KHKPw73gTQzcRVcDd",
  "key30": "5whPwvmf4n43b7CyhrUF6dpMHjT1QydMD1CKiEN92UgaW849jhEhCLd24RdM9mPnUALLNzs5P16uAL3kwNUq71tG",
  "key31": "5kbUvVRmEmUXZfNeg2i7FPJf6Mqx2PwebRnnzCExSsi7u3tnFPtpi2rtwK5NMBkuMep3N9SsMDJVaomGCR3aLdGU"
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
