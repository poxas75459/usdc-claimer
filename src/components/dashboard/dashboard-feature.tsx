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
    "25NCRCynU72ZM2tyaV7mdgyULwzMabjWZdjrUgJPLE3YFFBgFz4iU8RH7wFrVK7PtymktJv6u2QJ9ctMHvAUBW8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bVfFoUmvCDF4UYhDxvw9R24wMrnK7NsFmdcUgjBDiztDetsaMCpdb6royFaVwKin2z4D1tJpWWBnVRm4PCtrHX6",
  "key1": "34zjvwhANMCPhrnEDvMG6JJTbtiStUw6p28nbMnXYSuBWos4a6Kqb8ZBzvRB3MMsVERwnjG1G9JNqbAyM6raLafy",
  "key2": "61rRYDbETGyTWB6NuG47ntkA6h75ELTTvEwc8hADKLtf9Y8PL2yaZd4Hmw9L4mgoytsFAK3ZVAfJuYi4wTvW1Stp",
  "key3": "3nuUSCgY53P11eNPtVAHdMAYhywHSKaG5io8ZNnzERjYus4jmSvc2PACZYoXn97GQAPYaF3zybZJnPUdATMvnrds",
  "key4": "3ELgyQ9jMGdV426paDC7TZS1gaeVUDwunWyw6Nw9XWSfbBS7fq2MctMeYUcEyfjzynBSLie1Pcd9Zk8cwoscYeVG",
  "key5": "2kkMa1ggesbyqLjciVBMgcmTyw91M9Si9R4AxnG2GJktGQiD1z6YvHq6DG3ftKuAuft1YLz1QWaU4JjWry7Fd9hr",
  "key6": "L2qqAdn9kfdzTN9Aa3tHjn1JTe3UX3bZ3VfnJtFu85kPe3WpygDWrL8Ec2ygjGj5kg6vyT9NZuWFfHdQrCBmuer",
  "key7": "44Vr6359NdpjKCm38quzkW8Fy8yMcSd8kRm1eGCfPoyuoPhrVrRX8MHAaQWUixqLRrVqZWefam1qwKdRWPbEqNiN",
  "key8": "wgvZU824kAtXXqU2zfWYos4TsBVrKAXAdnHMVdAPrAK98w7JzEwgdEJBro6T26jmN69Y2NgrqUrFg8w29fAaQ9k",
  "key9": "34Sgo6qZCLk3bZ5BY1U16Hv41H1MKRW36wJU1US43R87KLQdU57qoohXbp9vHoChyhRYHbDuNm818a8xXUmkhRB5",
  "key10": "eufWGahgWhSyAzT4siCxBhiPBTVy9fkATFGezmoWogQeTT7LV3ouve9KZUdbdFg847mFuDu2bgWw8VBdTC7cQ5T",
  "key11": "2t2crHMtcHsjvruMcyaFqUiAghFpUqUGSA19NXx18HUivnhz7yExaYTPdsnQaQoTGLchu9B7P5gCHX31rZcY5wz2",
  "key12": "4MZg9ZQSnoFf5GHZ1HSXL1wjtew6qDowGu2CXVpFK7gUZSz7GoHMGZtknSmjgNTxrsQFeEJ7Fro3caVn4qiZzfaJ",
  "key13": "5ZSEtAW4TGMWo7wJgiyHiJJtdUVt2JSWrR9Gn2xAJuePQbNamUUfYedfFFJGS3wEe5e73Li7TtiFAr3NM3U2jRgR",
  "key14": "KJh6omvH1qM3WXwmFKj4ai2QTHXsj33WAgPE9Jn6BGuoaJp1n14meHxARjgi4NYePmfLoXVuKxgTNoeyVEsTJco",
  "key15": "2fj1DxjAwXNmbucLiJ8opZJVKaQ85rruAF9ky2vy3mwXjUqD7KcNDqArihWJSYDYkmCyU6moqPB6FZZ7qqhxiwv1",
  "key16": "3HUpStEm4gi3vcS3JKuWQfGAcEDeHPQgNy7RDNxAJMYcHeHDbDTUKHDDkqMsHkwpqeQePwsHwXbn6D2vY2pnninm",
  "key17": "2X2t29DoG1mcZ5jgaBaNWDWZ1eiZ3Geaihn2wViwYCuBfkLQbXXD9H5pRUiNqMH5WWw5YdLUso3Qnij72oX4s89Q",
  "key18": "3y16CYVAA9K5NgUTAmp1z35KQnSPGzxZyok8RWMwisx8DhN9jKBwqw9nRdyw5S4upUgvj5TdCxUY7X2MDos74iT4",
  "key19": "SDG53SnjiNhkPyUXZsMrwtYri2jfu3cwJYQ2LR27JwonZA2g85ptK45FJypLqy5MXdtAoyutxLYE2wsL5mD22Bc",
  "key20": "2xU9H3Tyxz9Ze5QxgP66X652uonPTY9rqxgRzMHJMVLtMSfgASYjEKAaGsqjRekB9V2fDXW4ofTJLtanGAYmqTWm",
  "key21": "CWhFEbyCt8KbSyh7SmGqzDn84bBatdVpJGWnuPSKmx5JZZQnExeMiJk8NVxvzQbnSLYaUhKK8HNBaMhsxKttSdZ",
  "key22": "2VxjWzv4R1jARYD7C5SKT6G8QsBQE45vwaRgNcSJ8eq89gx7RQoyKVS7SVcXtRHiXZfSFuhrLYB3o2zUzB6JXLM7",
  "key23": "2zEAn67et2kqKjFBPwc4UkmHWY2pRFYbwCrBMBBcJpRWdyq4uACBJaMumN5Lbv96BjUevcTzoz4UEmNkJrcM7tRV",
  "key24": "oYr3HFHRk8twfyydVGNSYKB6389FTqfo1bAPQJY6uvy1VWS8kedGrSuEhZ293jPvZSNustozHDzB12UDJtTh6UW",
  "key25": "2EceAwnzEpVsurwwqkJrapm82VbaaoVNfjBpQaP568oQC2HG5XSw1f5xcqimbLNiJdXiDScpSLKwrELBvrX82d86",
  "key26": "MoQ6WyKN2xWPCedzzsV7XvY8faVGk6wN5RFWcoX9SmBtJD3RhciXR38MK8aeWWa4WQLMPFWxXm8KbRo8jc6q5ks",
  "key27": "2qgW2TKukAGEEbQGzjSrb9Dq6dGPanFtQ2DcVWZwZsRRaqUkMihEL4z67onExVdD3GYm3CU1woBnSY11rYMnAjYQ",
  "key28": "56AxCWyZ4oiyjX9dRHxNZYFMaNfhTaCqMHna9GvhYx2uC3UmqBp4zDLfHPDHDEP7dUsaboadeGTD32SmYYzYj4LJ",
  "key29": "4mimWBTmeDBhDMsh9XRjeFctrh9hfWQyt6afVyeYD5zAymm5WUUQVLvWvAH5TDXLJY8ivDDoHpm9MoaWuYHB6edb",
  "key30": "3Gd5qTSZ4eW3fV4gmUmwSHeKy8P44MfiHeu1LKrqHNEb4CLG5CtVqaL36q88kj7CDhSLziQBv1eycdJiWdttQyaS",
  "key31": "6dEh7oB6SuupiKK9N6UNSf5vGCYGJvuCbFE9mYQ9jcSaMfjBpVMPxCwa1PifEcGsBaR7LecQn4AFbG3CjyaXutM",
  "key32": "aUiwwp6aPr9TYzJQhRxcGCuUnXAuNCzUAQ6vC6g3GwENrnfwaGGnkLRhD6ARMd3Ho48L6vQSAW74qxNykqCA3vB",
  "key33": "3swzjMXZzJfHLaAsh1jqai1TXsYgDgcxMfvESfz4CrhdiWj7BqBHibCTEqLRGqFULGJEuDqhanJMWFft1fQ2KnBg",
  "key34": "29vZJteRDyCWgCj6n3yf9FtTS1X423MPzHA1T5dVMdPBnGSXPRa7RqJiUAvQxvAi5pFgQ867rX9k3VCESXTQS1g6",
  "key35": "3eESUX6c6ePgVHayhio2vZtNsMnrBNz2LEMN4dwxbVJHR8Xuy8y7JuAtpFoJkgCugtat18he4q9RaYxUPistofxq",
  "key36": "4XqAgtMAmoT5gRWCDsu8U32y6XNBmus6GxSgSCkj6HNjSj8HsJicU5yAj45YHxFhsdmLdBoB4fCMH18uRaEPKbJh",
  "key37": "2wKqecRFWuUkfGT1LXrDaMMkNm5EggvLghSXXefk19ygeAjWwyXSvyBuJFsUiVwSsXZhJcnFrYe7LxroXSsrU43p",
  "key38": "3btYYJQEkTfhejJ4YJu7KRRYVgZzRwLBzEZmMLyxft6UtWEcXQ1uwofBn3NFkJyfSWcKnJN7am7pfyKMtaoKBfvL",
  "key39": "4fchRR7bhDVYXbwSMeUwgiB8g1C9MBjBiArs97r8cj7P3YTQyPWB9nxuJphVWecE3uysdFXj6bMCXXsaa4Lw97d9",
  "key40": "3ZTKQa38d4iMLk7fctgbHR4J4nK4zQQhy2SHYLJHZ5nh5HvfvVgCyY67kcv6KH7nh6quPXeJGjSddTcXX1rstyiY"
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
