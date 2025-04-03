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
    "5G82dHsaJVykKXKmWhwuenPYMvkqwhmM9AgnNYx27W6rpiQhgDzCpoSNKXWwxFh786rp812ZVEXoj4XyuSmjF4o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8Ye7765xfyDgL3cZGVzv3qLCWRxayxGF2vaFot75MXzjcePtmgWbTpn8ofk2XUUhpqvFskYLUDWAgEeAwf35Xn",
  "key1": "2qv7MbWoLpmJL44cvNaa8A3bRgQGD4qJVzusdCMut5P8p7zMSCLy5E42TF6y5Fx9yqxdU9wksvwGfEsdkZaobRM4",
  "key2": "2QcBkT91yxzHGsCkCEuFCv1Qq53TLzoRkoYti7RDgTk5QwqB6jQrAxDMQfTGF6K6bMLSxeZaaUWf5UV3MaqBFe6",
  "key3": "4agwTHyg5jHA5JX6z4JgJ9H4W6JoaLqvPsjS51gTUP62NhgkdbwdZdm8a4UZxfbFD5f3zxH3txK3ULzehwsPhRnF",
  "key4": "3T2rPHGSDyNqVsEAoKGgTnLa3XxiwBAAsmqkHcbkhCwMzT5Moa7Q3fRvXBjXYBdrWUyamyisMZgd9xtUUvUQUMo8",
  "key5": "DBEJkWSnt1Rs87cU2uwtMDumtBJVdbjuqtkiS1Wu68TVEUqw4x7VjPmPXm6fpJCaxzDJXADayH5B6SBALPUT7cR",
  "key6": "HtWdxogdptxbW4rPNBmCEBEBGAB843JC4AAtER4gMBrvWD9KMTVB2vKjsGG1t3ZFcFit57U16yYhq8AdMVWGB9C",
  "key7": "4HpHUU6MeQA428qdS3zMTT1wRuTjCgUdprDPMYu8bmYcLFqLXxMuJ3fmWqNhwWNuZht38A1tBEgaoAv3YgxMREGq",
  "key8": "2hKjzL83Wz4iyKPgctAY6R3ZU7dEDQXDVDTjQELVXfJEifyiJ96QBNFE6KkY9yGQDyfZu6dt1Rr2vYcaXsCeQ66N",
  "key9": "mBHa5qqeUnCwj41QzyYbXCBPvt92vKVitJhBwsdbzAmEyARGvku8jfVeWe56TE4py3MhKnDhB1fJ6bYUzm6Csw5",
  "key10": "2eLKmMvtcFd58CjCYUG2AojLB8Me31rfaPpPqmWf7x9N4rubyUPh95a51urzNPvaVYAR6zU96nf5oatv9xbdH6Hd",
  "key11": "yG8v5gxhE7boWb2xBqV9wBLBSc6KAjMGPuY2uuDu66vPZ47MXyhytF3Rzm6TEXPp3k9dZF8aFLD4nZKDpLGPsw9",
  "key12": "2zxZuyZ5S6mtZFsLvKaPwvX2TP96YfzhENzJ41Umfvp3GdL2XRYzRQdJqN8nqrPa8gBiqid2oB3WrTkasuA5gLDn",
  "key13": "2Q9sFSbcpVftuXiNPCUqq7tS39q9rqjiCYVnbe7fSQnman5GybkQz7JHvpJ2m3SniKrNHkkz9fmN1fS5GCfF4kc1",
  "key14": "5W9aK4hRNrg34E2Rsy6DKVikBcs3BbbSQ5VU2qtBtW2fxk364oCYSCshWZyEeHDb9Y1JXvqYYeAkJ1DMhUo9rAQK",
  "key15": "3vCgL79Ykq1GkUCR1uBY3DrrfPnSaR4CHghCCkr8NT8gr6TZWDveR7xwQx4Lr1J5rHqqoEm1u145nywGB8bLhvPK",
  "key16": "4cZuhU8TTTdTELxtfhNmVPErxF3yiz6pF62te3c4Lg26zHjnP85RQwyGD1WjyV9NFSeSEvX6hE4xxeTLVjGZ2YXG",
  "key17": "3fSjyW4cjo3xMP6ybkU2YgpdCqnV8n9PmDEG433BWXozZa33bxGUaunAyrEX9phZ1Ltr7TQefNxx25jWuGR5V4CM",
  "key18": "5w1o3k6xUauA3T88yiuvdEmgZSitjKLhFEXtSYYV2fyMTnTcsTrHS7Fq6yaiwfzZftq5LumQoe3eMs7SasNZbWtF",
  "key19": "3izXCUDEfFwvGydHZ4LJD6hdaLmSyBEkDENo4vU3YV5Nnja6P9nizG7t2RkA13sSb4bZLV5bLhz6RS8KGnrS1jiL",
  "key20": "4quRLgkRrTV8PBiNspAoCEQ3EXgeTKHYDKXG8W93CfzW2vNqt6i4vU7SumARSpRDfYZcx4G1sYqtPBA8MJwtSbuD",
  "key21": "pKC7CtXXt4XvFgMTJncD8xG89qL41iPXvUi3KHn3SYxawkeXFZv1RQnRrmLrhrMoiThUkpPW2SyeXouZaJYpUHa",
  "key22": "4fTgRr9jGc35NaYSqDd6yafBVwYzHTKfFwabBv2tKKHmZoYLN7d3frzRHue1tYCBGAJ66krCGyFawc6UyJh6qkyX",
  "key23": "2sUzUooCm1TZhTqaUzhs8LGwJCo3Kq5aGCrvrUFUdsWo5vnp8NH6cuLfDeELRWWZTvBqMnq6uQvakf8tHJ8epVCd",
  "key24": "26vVdS4sd9h6NqUaYLgyCXZoDQJp6fJUbHokxtJvKHdQWqsmgGXdoop4oweaZoqeKk2ioKxPuvUVpY6j35ERg8o9",
  "key25": "pVC8m52LvgSKrSnRnr18V1Xnbx7goEycG1LwRxTmfkEmFkYR1W4e68Q6rpDXx8GvkggVh8c2W5vMqps4vkDbf6Q",
  "key26": "3zVSqK4XhNU5ws6jeohPDAJtNNKZcNyw48CVSvCVVhMwvW1cp2RZLv5b3gR83JxpL13n6YBdR4pywnNGMAaWm4yV",
  "key27": "3Y2PZ3bbLgP5qcD7FvLdzRjtt4XGWZvf6PFF7KELzasso7qUARDrn1KAmF84e7Czr8dn492fw8Sp4p54GM4DrbYa",
  "key28": "2rLuLfygrS41jeLQfqMc4nEYavkkeSKcAMDVSgqCrCanFsn2kaxxYjn1jQ1QX6WbdA7NWiDdZzfQTci383MnRAN5",
  "key29": "2tvvjFoaYYaHg9jGVLbwyRAoDRQjDZtEmhUHQyYAvdVA7XfKAk2wrjwY9Zuub7sTBsxUKt7JrwVAjmNp8oP2ysH9",
  "key30": "2xBmpxLfebGEA7HVRhTqibbejw8ncyBtHUxpUJvorsLCmpspa7SeDoHLnLRaAMCyDcjXWszB1s1qvhjcp9mQuf5E",
  "key31": "3EtXLLSsK9qK9XoUBysDrva52m9v9Jax4ZTxmTZvHkhfuNaYMC7vhe5z5pZ8wka9759wViaBkcVx4m5wFmSaQmgF",
  "key32": "4fsK38PEDfZhGTvEhAuWonvuSL567CkHH3WEjmGYGFYNcs1g2tbKw4LozMgMRrFN2VEFrKsd999c6r7fn4WMkrjR",
  "key33": "YbN4zmvNXWJsAmhJG49Ve5MUVzSyrvrKZHnbUW9WcHQ37fbNb32LJMzRpwo97JsgKStcH8nDR38Vq8i3STV1KTF",
  "key34": "4VNRrazK5ZX8ZG7vKyo3YAoLP6WtDWMdtRB6sPkZxjX6QkhvEvekLXyUJVCZk5Qa5Gpfg4wKmRdtMiVH74im5hfA",
  "key35": "23XbVsKT4eFko4TnjgFpR66EKGp9Uj6TmKiBt3Nr47PKvGAE37B8hcp11Uu6SyCHPphQCJoFTfG12DP8GnsNDMQw",
  "key36": "21YHXQ5XZfcDH2hyMPLg59PLyvPtxwSNHzjvvw9YensvPkjPSLKwAhmUhVf99381vvB5BZT3Ww7JXmJba7F68sRk",
  "key37": "2ZhRMiC9eemwAjTm6zwZGdE5T5EwiL43PdmTxdYNFr7d6B4pdqmb8tLi5gmHUBqHq9fqCDfPs1qZESQLoLSti2ty",
  "key38": "43QwF42r2BPrVGRCiTB1DZu9yCunpXpf6w4hWLyM6bCn4caKGW3sXkpmQrHDavssmXDFsaVXxEMSwuMnrE3KKDAg",
  "key39": "2afxkWTCa9bHNcG43YAu4EwN8AqH2Rw51wYreuXG5QNDXEn1vUGLTY7ksLoEyt6iX9qbCRjL1ReeKoAYeSukBE9C",
  "key40": "22Cw3SEMnPmhPGGQ1XRjZXbkcP5dwHvczzqUYekkPGUUQqnTUPei8HPDQxC7ttFBHrHTgR6mUjXXLkjxx4w8mA2U",
  "key41": "2im8a8BEx8zSxdMykTWy5UVWsWvXFMN2rCuhjppy8WpBC3wgmJBzxcjunpT1fBqCLYDXL9vWp8SnGcXxw6fodLjU"
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
