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
    "5KSwjSMWjoEFXKVNDZUHmup8fhgALw4Bg7Rx64uaFWWZZod5C4e8nhK5ADv71q8kkYiNUwfaCyYXnXaHVGHStJrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5howJo6Mg23j5PT1TjvWDoGZwvVd9Sy2MQiwMU1zQZaMtoK5vJB8WH9yvPCVVfhPEGjhpv6x1Dpe1rGWiy9pEoJF",
  "key1": "2FiyzAEhtCyzxPyHYQvGKqcgqtmPB2Hgaru9ANQ3ZLLoY6drmFA9wQ6HR6s2xsUUN4VXCxYz41ki4GJ738rpUe1f",
  "key2": "3yTmPQaSjiJG8tFkZijSy5JjPNEGCmvchV8wtABjiGXACoPqd42nKBKgcUBYsdMPfHyeb5pLJHGhiXzZ7PcpThnj",
  "key3": "5MygPNxSdfo5RGRT4Zc2uEqFjtjPFYuhQ3qU44hurxntDeRy2kvvLMPdnt2RLEDHJi7Lfhi7J4ySn18wfrCfFMS2",
  "key4": "3WdyWgKQSLFQ6bUmZ7dfoTZtfS6kntVfE3SjnK6v3nVE4N2c4r6G5xiAeXZ9vmyiWgWsemgdTacvcnG3Xw87FdXs",
  "key5": "FmL3nrXsRsFbaGVv5iSApobkPWVX5vtnCPZeMnnwTMWisopydcesE3MC3JuQRiqhgcE4UyvZZAEHcDZsUaKHYUW",
  "key6": "29Cdg6zAgT7yyqCrBU32qw27MYCZFUaxUSXZAcLhGGS8oQbvK5LBfg8yMHAbgNbercYbnzkewiJTPeYqzHQAbF6U",
  "key7": "Y2FMm64DxruMZjjRofUacZZDJkxMnmm9jXgEmffrqUgnpVxPZmjbxXpnSRzr8kRfRbsCoHjUL3rJdDXR5UbDMLJ",
  "key8": "3gJgkqUMRuemC1HYvM4WmkazCj5pFygnrLpX7dAX5aX2vghkHxpiuedYKJDaN6zduvRpGr9jKNnmGXLc8Wv6PRv9",
  "key9": "2ypMtycDa5kmvyzEe6oHmTzotoG6dgjNem9ndc3PrzbDyCQfMSX4M1ptAEKpStvVCXWyrXLbWdf81d3Zz8MXKwBv",
  "key10": "44Mnr2ibGqwUzpB67iEwLxuH1AH4Cf11jXDT1zwsDUyUSMreAD3xRX8TPqKCFjPyze9RnV39qd4boUwZwvDYEpRw",
  "key11": "Yx9RrQAu5KAASx57d7Xnqn4UF5XwgkfdDvRdTHqRF8nJvtNsewU1MPtbawhESZZDx6q8oEJ8GEg73caEpVkiz97",
  "key12": "45cXd7LB4tWaDv8ZcK3ZQDTZqjAnfn8nVzXHx571r8bWU91a6k3cBVtjoehsdnF2YWCH58yi9EjBxDxLJ12Ru5uf",
  "key13": "3EFT2Xqdrz7TSGfCDV3zF5zPYXLK2XADECwFsuQteKeWAYfct6gSv6VKisjfPwrmEsvoSB4tDEAXGg7aDvVCANoo",
  "key14": "2QkgttjwUSpPzJYjUH2WkZ8uT18E2biEdjGvxttCjL3Y5keb9Xsybp4WLTEgF6jk3Wf7c17vD6crVQDQQmdvVRCy",
  "key15": "4jjCjcymWS2trzDnra3L2gUNYDUDSjpTwBe1sUkVjnmtsWhcwTJswPeU8hvv3Fxq2NsZ4Wx5W8nw76DF8k1wwNtr",
  "key16": "2bxrUDqmfcrR2hRvg7c62dTZbRXDWRpZ8mLwJoXpwffPpEV6m7cnCEDEhXbNpVHSrXiLMDsGrjMeL4BRsuudYdCX",
  "key17": "LmoWvQDtqHhMt5dhJUBugZWiwjstJnyyufMkdxRo81DmLqMWB1cpVT6eeR5mvpLj9V89hdEtso57npdztRbff7M",
  "key18": "5yu8iPx1KkUz3QsLjyQ4JKT7aYGVpocMfqm6jporsPLKURycGFQ9Rdxb9p5HktrdhH4A5YbiyubbLtMV9bct7BRM",
  "key19": "4aUmkzfVkmdS6msQrYEdfpzEzdbi2vfgfvWpqpgfrLcHuTkegiyVL6oHjGb2TwzVsfbY1yDPRZESzRkohu3yUQED",
  "key20": "5UAY8WEkwB7FAYJSKRQBiKvn3335toTUDtzhNB2PFoxaGAVTq2gu7wUvccvfkWTHtMp3vRBeWcRfVLhz2HTRQzU8",
  "key21": "5dhHx3zMrMS5kvFhZgS5HJ4kdpa8yFCfDB9mLmrRSGGv1G7j1ZqQy5uty8N5pSKQ7hRGMtudX7ihhq5JWBBTEJep",
  "key22": "YeKJkbxUsMTAf4ezjrWJPkoo3xJYqixKFxnvvmEc1JpkNbbubXKgQhLHWS4EdLWaxzYD14b6bNrfmFDvS33S16t",
  "key23": "uyC3j7rUbF4RDb9pSHW6ab2caf2VTWTDhRPG8PLQrygJChFhuAcAWgZ5LG6JVXKqyJ1tdk7eZNA1upNWdnAmJbE",
  "key24": "5nGuyxiQ7ETBA6K3DRm9iQoH9Hyf7zyDU1R8WsW5GYgeBpL2rKYUKC1e3hWWACVintASnDwqRM23oQp1PHGLYSmC",
  "key25": "4tVXHjDTgeKQv91zPzeDEmMgENYDfBrqsjzT4nyyxXT4CLvUjC5CfYYmFBouruC2sgnNhYLEqA7MWRJjR8zKsqNE",
  "key26": "UFZemmMd7Z4zmUJLwXLGLHcpWuHiqCmudQTcB2TKTDzxtuZaKg6rMp1KNgKiADgh7dyvVhYBuqNg4NhFvXRns59",
  "key27": "3QfrVnbc4SpBczcb4cbRKhKgvKfmsnvN1n8xea9g1tuVSaN7gfTewnQPhY1r57LUAEiFu53Up4Gqav8tMyc4KwnR",
  "key28": "41v1MQ9PAKJP3yGseJMqcfSQiT6fSCXxWaFcHNuy4MA6A2nKXf47zLhjajJiMzjB3CdR77m6FuPV3LCLGQmzrSnA",
  "key29": "2FMKAbBYrn78YNtJsuSwcAehEffVMaNmgi3J8o1wuSVoFjf6tT6RP9uQjEyDvkT9i29vVpvd6gZoR2wCsGzMx19T",
  "key30": "5b4WA3YAVBXR1b6hCfbgEF4r4brVdaYiPK1hcZXipZxwpJfxzUvsEHochZRi9LGFvLQ8TvtMw3dRkgpyZBD1a3j1",
  "key31": "3r3vuniCspv6NUVBZ91wsxTkFikakbjojXjxJGKj2Ta1NQrVpwRFd6mcB4bS5tH1zETZg6DUjB6wA8pQgx7YADfM",
  "key32": "PETJcQM9EncwAQ7Jk4GUVqrBNiQVyWGNU9cse9BQsXgRwbwpe4sySPA6GF8RE4UwXALafwquucMSD9UiZFK8zCY",
  "key33": "3h2RGbaD1ZzUAc3Tkuvp8cPLjhboTtmyw82dX8KT8yChV48ZkfnsBm7kkxyq3sPx62CTvTKKaCcz31F28XTG7UKx",
  "key34": "2Vx2B23jjoJUwbx5icQEiXpbbZXpRsGoPRAcuM61kHqvpkF1jJW7BcBxLxzzmBET5St1UAYmu2ro5LhR9ET6BLmm",
  "key35": "4XexoCV1BLP8SNKGDDszE4ov15QAYbDVFnqgFNa6fhn7wVdGn7EzqcQeZ89F4iK6zt4jXhJ7dJFUKB7GBEMYaErU",
  "key36": "32Lb7pCHeKhaY2Mqin7PpsTTUdYRMGotzMPPFZkKxmKgsxNc94jv6PJ3suz488ZEhohmC2Zv7A3RhGHZcuWxkTpS",
  "key37": "3h1xSbCnWyrjD2JyyMyus6kfcdQngGRGmiABXvJXbrX1m9hP9gC6eraaB1jGTdJfqnQvp7d8KAwGjhQXSfTbkrZQ",
  "key38": "31gCujPFTUsTqxEfUrRtpkYEM7PUEsZ9mcyT1A2K1HgdsceXHvh9v67z8bsptUV9wcdKytyZHScq322Bi8RjYs6A",
  "key39": "2516gHrPBb1juzNo1JyePZVHUsZ3qFca5afVTuhPpEmG7o7GqC473zChw5JHDbnom9DWoXn8NhPepxwDJahAFhdy",
  "key40": "3cKUsXGEG7tcYexmUuyPCmt8AjE8dKH396Nsw428S4GQnXxpcqah5ktWsuTVn4FVD6avCJUkZoAiSo2iTqM3W5YP",
  "key41": "2g5Qvc8jweJV8kXTuTXKXk6iRMQoJLkn5sEvtbDvZZ4mf5sqnzfQxqSRTWU97dBndjkpPc2st71ak48bFXtCAM9d",
  "key42": "3mUHjpnM2Xd3H32HvBdUX4XbzuaXbRGo8KbCXG7tuzya9wj9nopGZ2jWGZvZNZyYye577BvL49asAJJwpyvTDG6Z",
  "key43": "4c7QfTDV8TZ6Sn5RYwpS2wZXPZhfihK73MrNDtfQMWdUaaH8txrzjhB6fMoDsEJiSE7Cs65QCfGUo5YbZ5wXjBUh",
  "key44": "2HGy5kakFyjCMt9BP8r64jj7PtuxNTSH9gERyW6HmZJqr2V9Lc6BvzhMaeVeYw2PUKt5NXtSDzER4ge8dAxMjMHq",
  "key45": "4h84jiMXqFzPoPE4fqscE5mMzWw6YdZ8uLf9t8Ew5KKHUUPm6uc3RTJVBr4RPagLnZBhZBYJtC8uNJPtcUSUdXUy",
  "key46": "1CVvi6M6dGaArsBLSeNoUHkfQLjQqXvmUqa8eyXdcsRnPLencDwdmvo88SAwrq5Rydb2xPDmWMRN14vJiG6bKJU",
  "key47": "3WNLk7qkh1gMgTDELNqGQ83YSoL6wTQRgrkR317LzLgREfh8NQurMAW5NmkdxdpH9QgG1u1cbXqfT2SSh1UK6veK",
  "key48": "45far2Z5VLQAhjV3URH9NNeFLKihdngXq9w9G888dciwEpQKz5E3xGUJstSoNHVVvqQHHAuopNaEFpBuFSXUDvHo",
  "key49": "4UGNMCcPnBZYHET6y4EhghsYBzTK5amwgdPJx6VyDWH2qZiU8t1qdk2gFXFYNeRATu4ZA4u1cU4pkS8VD7BRvToY"
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
