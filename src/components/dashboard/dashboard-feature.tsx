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
    "RgvvkSu9fZcnboTDGssQXedXagj7anyrDwR3D5iSqffmEuao3UHEueAn1MaqxCXZDhTuHfRZwJrPL3hQx3aRvWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yDuzHHuYGGgmSDGu7x3KyL9cAdUbdfPBfHYqeRTC6kP4tgP16XeihuFGRoVsNVQRLjd4nhjGAZhapzJ9ToNHoER",
  "key1": "kHzCEdp1pMejn7cUN49uYCRxdkQRAt6JwvtG7BRHDBj9gQvBYBmHxPwQKLYZkLg8f8Ld2KGoycHQtFvnnBK2YtA",
  "key2": "5HxqV4ExhxKWLj3H5LFhRPsELrhZff9ixw15XXgnrx4xqpz3ZvQ6ywj9VQbyj2yEcSmm1xYkw5jDgPrRKzaainpB",
  "key3": "3Zpzp7XYDchEnEBTuHFJFGKpTcPc3irxQQArAPZz8FWCVGdU3pPhWwHXrS8GjdZGqy68W1uSF6Ht9pEAb9a3L3W1",
  "key4": "2DX5QEE8GCk3EBXRBT3JCLBe2fMicnAdYsCVE25hNWxkjhdZBm1F5t8SuWF6mHNHjnu8ubViNq13cgMPjRUh6yho",
  "key5": "3PGdBuVEMpPbRT8VDq4iZg2T6DTZ3athfn3eLC3CMwbuw8F4cVbntGRzdD2b87mSrJ1TdpxtsMTCQhaw5Z2kdKDg",
  "key6": "336gBBtkYouk93YPqga9s8N9jt6DKZjgA2HXgggFNyeNo5sbRp6ZJwuRGfajkUxMMPcb6r3K6cCTx3brEkxDtpyY",
  "key7": "2SUvh5gMiNrvz88Gi3zuqBusRfQgqASmaoVkCh9RvarZ1so1quH97wwoZQkvQJtfqjNJFuTktG1DqHMdAPmHdRLw",
  "key8": "5xieGcnSPKNtBSbgfiwHiVDuFi5muM6Nms5M34RGvc3YrPsnb5raNLXsmSjg85hXohiHL661F8fBNEUXpuyXPPJe",
  "key9": "3zBZZnwkfZWkUheVhL6KiPmRjmWSnbAH54VZdRQve7FhXRcSg3CTNfCc6yfRmttKDy8GBrCptQUbLCMoCifWSSv2",
  "key10": "53dtAJgcWNSCzAJezRQKXQpSn158k2EfpAZy5CGc6bpt2gBqLqFS4CEKoCPf7imu8PZN93agMm59W3J4MT4WeSHz",
  "key11": "2bNLrvx6FRXurEygNn4aDn8roXehXNBgYRTTXd4DFddXsE49pSRVLAPXhUzqMjuLDd4iDhZBSkJfZEABsG6PAGAg",
  "key12": "5CHEzqHZGuAx78eEzJb82H96yu8surg6ShSEXtmWawwekfXoE63sFQUHBRYvKvo9XETW8BJuBfQaPB2pnW2wZxTL",
  "key13": "VJg3p94a8JLtBAqaC71LhkVTycBMQYM7gCoegfmY7cLLpH95SFxo46W1jsuwo75NNmDbNFc6QU8o4P4Sru4bit5",
  "key14": "4ds65YTbFQVfTgVvga4o7defogPJkEi1A5XoNPrQ6Qisny5jMEp47ykaUk6JP2pJ2DReHLt4fxWq3PofQA322mXC",
  "key15": "4b1kabHG6P76b82H8P8YDHMWvKLGCPynnje9d5zwEpcfaRkxw8Wkx9wz8sXAVBPwwzWNWuHfydV8mESg1Fy2bGzC",
  "key16": "43qBRtnTJm7rirtr94YiVThnuZ7cePJcCeJ6VvYHHiRJvaxy1CtiWoTBP9SCqmRxVvozH5eh85uWNULTAwKzTRXy",
  "key17": "2HSmATZm3H3ooQuNdj4G1euETgmcGs4Nz9uua4pT23RU95HFxtC6aZL9k9kYS8SwGiRgMrgLT6WS45CsREA51T1U",
  "key18": "3hx1GBatjd2v1etca1KKmMi5hGnUYmjdR8hTYYt6DvuqFHRHGmtQNoAG9pccDGZcbEowmhjEaC2jQzhhuHZ3HLRa",
  "key19": "62HXNB8FjLWdGXfwfcPBCX1rncZeQosVCaFXmTUeep8TLHJaF7y3PQvGcNqV55JCPD7LRYzSzcff5Gv319m44PYX",
  "key20": "3c8zTA36hcZDViie6s1R29reP2FTmUNHCtdEAwLhwRNLvMyFmDdsF6VYPHo8udwJ5gppRX9Q8UPsjMBr7YVK2wiG",
  "key21": "Gn4KzasiRHRRN8zDyMUXAfQi9GAw3T5A3fPXFtRk17paq69Crb375boTF8SPGorUqMMZcENGmx2yf6S41tusbvP",
  "key22": "5MoBupVDMr1z9jnJSP1H9tEpgkv2sCAfGiuaT9DqGzGgXXy5Dh6XQZ1dfLZyBzeMbvitmrx3LeLPRoC92VVe4Nrv",
  "key23": "5q38bgzNKCbMax5Nw7XTWKQCe8RMFAvX5NdT88Wwg72vHtACxBzEbVw6Qijt6udQuW6G9wSD41dyRFuBXFxR2cYJ",
  "key24": "2BuYTr3mueT93TJMrvDEBrYeDZyrat7EZnd3qYF5DbnNesRwKNkcDJ9cn1XNgBLdJQKHQeFd2DNForauJo32e5o5",
  "key25": "5vrTE2xEUAoYtdS37fij3ZPEPaD3rWikZBULsMR5MD2Wr6McU8cth8y4mJrRxG3UCEkc4BwojUThfQ6fniFRJfA1",
  "key26": "4rMkhWG4wmMrKRUBGaWBehykz94Y4V3iRjUpBCMBxLiHD9o5bTr6SbGdiYudMtjjUgpSdRPsAU2gDoGVkEiV6eXQ",
  "key27": "5VhzdtBW2GDJLgKttAYXghDRSE22rRkMcd4GkcCmLSNa2yQ1fUgvKya9PLKrNrThBgmsgZkXAGBUZyJW6eB63B5H",
  "key28": "3vmRKxvHz2Wpihh7PkzZefywbFcQzBcKDN39KfKWAkC7oVfegCjZsjup6VacxUz7tL5QWZ4Hfw1bZkWHQiVFGMHF",
  "key29": "2Mvh5yEKVSyQehnYbfNCNDtr454QbgGVuuKkqNqQEpyJ1yMzoC6rvWyxL41rixih1w2C5VHXkd5A5rwvUy2MNQFp",
  "key30": "3j6vjUj2trB8QXrFM9QH5pLdiajyvtAx7x5YMCjfXg3tC4ztL8AwhXFJW3kyKh7zbPu26w6TjG62KQT1QUfphDCq",
  "key31": "58u3C1uphLL4TcPg4DSZVmsea3wi4vADTMjy292HgwApv6jTpMaB7mnjDPUD4wPwv4c26QkKuT8wbh1ede3agnKB",
  "key32": "5gy7gsV77Cjb6B6mtgJC6WmPTSmrTAoUYa9VcAeAT1ZF36Z4SLUrDYxgdktVsjtEjBrA9QekgioMsfdN1UVcus9c",
  "key33": "Kf8zni984otfAKbEw3jsL4UEucTS8CTg8GLUMRSk5AqTvb8gr33JuY9ve4JKhDqR1BARDDH8etRTmwwed2Hh8HM",
  "key34": "3kWsymJAEuBs9Xsww4qzAKiqJrRW2pEXSnZNwwsHSe6YFDkQcRnAGuLRE6aNaJGiQLofpYpsskj2pKDxhPzshiVS",
  "key35": "jawz76Yz7gi96VcCoZFRrpBDQgwbumK7qixVu8GkiBxrE6mstKazg3Eu2dkFC2GbY7MKbhMjvtJMLqbNtsY3dZj"
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
