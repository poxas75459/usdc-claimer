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
    "5yHg2CFvQz3DydPXrhFDHY1LH485k9CLLN4w5Ggs3V8dagpHbX3ExU1JDYsKoJ2MHnRAvXYwWCg2EJs4Q96pZp3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iCkUNSu1YUCY4XzVzmXmMsV4QUH9vGFGSQP5Mu4VPF2TME5oAcgjmYcdDPajnNHoMrwachoqh85websvd6GHNxu",
  "key1": "A5EQhhDzXksJoPgS7b1DzJKmHaJXcehK4dBFLgUj1QWmcbr1jaGCTbxWP8sRC19Nx52aF26G2qoa3JPNqsCYX6g",
  "key2": "64BmS9pCEccjJbTXhUu8vjkRYZemrc4VLr6KTZBLL2Ntkqd8SaeV3AGp1cP745h9wrqF8Y27ZaPnXkvXhYFQhn88",
  "key3": "4jhWbY1dmAuasMEp7hQ47Z75LCQxXmzLTkTVZs7n4PiNCmrWaSzR8XYxN72YS1sZEcTnPZacWMHyJwho6XcwfkJh",
  "key4": "4dytuvkFNTt5uRhE2dFQLyn9gEHYYzpUPWJZfuhwxHiY5yh2juKxjFUFvBqmAHktdkx9JwCdBdi3Mis6u1V94bQR",
  "key5": "2qjNkoZw9sxv71qEBduGX8e5299Vkpt5enHKKaGpJREwS7xvKT84BhzkMCpMvKjumfsBRJ8qYXeR5tc7n2H7wkcP",
  "key6": "RkWfHHUQXbhMcd51C4VHnLgpxPoTMYvc4cfPhQL7N5xjrvLFdphqFCToggrdemcYQvDHvE4cGVuiUZgPXKonjSK",
  "key7": "WtWXDBd2Sh8ZZ8rVGB2Hx1ox2VuZyhfrH8Lif2r5nh9CCHYrdunWg3xjD8M644NLfm2t8o1XuREphD8igamcEks",
  "key8": "VqBChEycZthTxHawzdcxBm1KYHi59VwKFyANWKjjAzXuB2AWeuaxFmDobvt1nd3vpYyXLRKBa1peyta9Mt3tbAE",
  "key9": "2j6Pesg3GwB65gdCKxbprecJSjTF2XXnK9WwsE187DScspkwYKt3tpBwZh8gwyqPm4PHGUPKpxGEciHVNC7imShc",
  "key10": "5EzYDsv8WgP2LRS8AYb7tB3TAKJcjp5wWvdVPyaLHfE1QsWZ9sYZ1PvyddHqNwk4FLHy2h9FWdR7YvK2SdbYQsA9",
  "key11": "25gC2hXmJe8sAd9JrJAQLSufcUsBCZmTd2doJHCNsrWgNCK3pef1YX6CSuLmUeRdEAVGZJwU5aHzEVq4YixuhMRq",
  "key12": "5AAqKSAwqWfX9P9G9eSvMcyJdpsiU5xnjmHiZ3zB6hYQkzCfmcFJFCGiqeEyYnYjPW9zhdteKwwYHnJXAHcYe91T",
  "key13": "3niA9R1X7pya1Vn9n5J2jUsjnjHRApRAp7o28m4cC8FEfLkMg1uGgNibq1TXgTd1mMELkXJtRp85MaXCNju2s1kd",
  "key14": "2fXfjw2v7kH5PoQFWcMJqLJUphS3iYVmj1uxqCVqxTWUrKrHWyb7CT7zmvmrqfcnfBLhKCZKQ4ycWxCAvy47WQd8",
  "key15": "3CndkRCVGzzNtc5BAr9QxL5aJEGzavKpNmisZxACX26eDmRHZ26cRUH6ydd55xuNa5F4rpifFX7Qcu3gMyvXwEUv",
  "key16": "5yLYi3K11AVmKp7zRQqLRYJhrSrp4ioypL3CKDp1aDZH62gfXjSJBDfmDRRnpm5H52ru7TZjSSX2FZN8epbaQrkP",
  "key17": "33rDBv8FdkzZuba2xidF6JSeqszrTRmsAhyPBpLgFgyMyPUmoAaW4wizj74q7WL2rvBeTkJaRRCgF1H1wqSp2wvM",
  "key18": "5tvVpwqWbmWTKVA36qYGXJdZNbtVf3ubycPXGK9DVbiWyRfvBSM1sSUp2oeZ7SGsKKVGsUCBb1mbVseJ7sFHK1K",
  "key19": "2xnoiNXVYSDibeg84FEznDmYNuypEDtyLnGRLqWUKbuxJJgEskfmH1knf67qWmC4XJKwNegLfWTMS7UKKa9XEdzZ",
  "key20": "2Tsaoa5DoEcTABGunFS2j1UpCDfKZ1jADT6Kdkf2ofLgNTwNrR5JYB7bqWQgMZJMm3JZ8t2yJefjZ4wVoJfQCvuV",
  "key21": "dUmbyjmKr3ZbGVoB8LpPAbTzQwF3PUEaimypLSGi7bn7rwDjNFQGeEeWHKzrMCvynnrdBVopYdcdqwECAH26QTp",
  "key22": "74Dc1nrmDciDecrEnrVVDbnMACDfVNwddaexoir11TPEKnpvCT9UJ5s5xL5sG6c7UHuNaBV4dCqvRuCR73S3Vyq",
  "key23": "4Sof79E9nBGFvKNkmafbyyrzNXEsieY5gqtkw8JkbwS8nSRF4k72VrjzW1quesfEiAkJF48iXcQQDXANtp34cstp",
  "key24": "5dD5aFEjfk5yeUebHTSLk16dTeqP9Q3iQhW2FJxZgspnvXG5TJd6qHqQ4YzoiA8Pktp7uDDqr2n4PRe4MPUREfCC",
  "key25": "3PZ9yKHHNTdBPD4Qqdozgn1PA8vT5ay1dVg4HcbdR2vZpJbVcmmoy8FJByJwsTdscumjz4BzxKDULeG8g5CnWUUy",
  "key26": "5ycbtAMbeg43NzFa2hAaTK5H5qLNNqenB1Ebwaf9L5JYUKtUwuKwFtartsNEng3iTKhAkr2nnwGoXTRoxHWjhanR",
  "key27": "5BAp8rqtcf5hrxUCDiNkJAUDtJtZ3juD838LUCdvyL3uVGZDtgnCs5yct7o6C1e8j2xXPjuRwTYimhSagEhCqyF6",
  "key28": "3X2dZuVq2bopPQtEv58r7q8f9EmzxYM2xYvYjxetxVcLGduTjUWxDTPAheAxzLcXoL7X51S2RqcQuhEAVfLMR3N9",
  "key29": "2NeEd8NdpczKFUu8ZdAcr8JsQaouPkuaymC95Y56RxhsattDggoiVc8c1afird6iLkYtg4GMVN1Aoz7pp8U6ENXy",
  "key30": "4BC1QWCHopLAtavmxQEEQp2M7zCwGoexFQ2sqbsoBgqaeNxbyicwcnBMJeeEpBh1H1DM7SSxJpEv8uJdJuEQoCiC",
  "key31": "3KPYn5Rtjwjpgi3CreqGreHrCdibh5kEEDxfT2P3y1ZSF6KTaqJmdMjY7jnZUF9oQ9yJYHvzNcdJYUCUmi2qSwzK",
  "key32": "3UxPHwnLJ1sNAuCxixjto8rebERpfNNrarZBkz8yZMqhqFYB6yEaXmLmTt3PnKDPWxs5pK6gpmhRVqyEKXp4G4Z7",
  "key33": "2b2rwFfks3uVMnfTwG276ySA8TKhBNUYnHBYWDKcpqRyH7LkKrzwU6EvwVXpthA1jaHmffTHhVrhJugrpCjEsKUE",
  "key34": "25EBUNrW5DxtzN3fAnuSCYzzdVWrawkhD5VBsW9mNYxcLBBzB6q9cHBwpFGYmNAd1USAS5coesf4wJ7fTNs5SYDA",
  "key35": "2sWNgZcuuCbxJ6nVsMKRcdsaCRMH6z2Dej8uXZFbxziD7ffEev6UWJm5B3k7vg3eggCaeYTYV3cegCZaK5DsPfA3",
  "key36": "2V3gvTwwHnH87QyRegz7oK3UY1WnoegQ1jh8Lo6iabXvY4A8aWSphWhFftDoQY1cHX2cCy75PCCFrorL1tL7eTg4",
  "key37": "4XpphrgS69GBEorz27yJfs651ZRfhAjyD48eifDC7Kt8ZFNJ3xaaR3V8teyEatCW2TczzFgMYxAz8EcV5nPzPwKn",
  "key38": "4hv3xbrnieoqQFz7Tqwxo24XidEg3CBCPZa4YQrXr1tY4g7EM1aaLjugvR6kqcpx9GdPsLDhb3ar4QSkZt5sUquS"
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
