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
    "5uUwwcFSwnRHwuxaTZBjkKrL3yhz2BNtthmyYX4XAYiRuKdFwsmNtY5nptRYR13A47VWC4r4umSyVh7NPWGQUKfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dFR3zfcxxXpyUwRYxMkimaJYM2Gji3fwJ3W76WnNjcURBTN26rHA73Aehdg56CpkRXTcmbkpc7oRyCSBcubMg7Z",
  "key1": "4CRDGsRqvYsq2HDqsAXqg5beKosD3jBTMBsbh7FEwNEXZwaMTAxS2X7Ad8SsSEHjto4mqQkxqSGJSqTApXkkKXa8",
  "key2": "3we1z9nUUYzTHKUdsZGmacRT8tq24oYcA8scAQ2EDs1icMukupetE6otQVWEbGZV7AA6fBAoJ3kvSdTHWZLebA86",
  "key3": "4DbtBfxE9VEuvZhQEE3tKWJtYm8FhurjZ52tgbHqowQ1tbQpuno86B8SFWiQANqRCEQrWMgWfwS91iyMMQjvrgMD",
  "key4": "3rVFMJ3XxNhnuyKjdz5m29gzrTGuXBfznNA6h2cButt8zmfPHE9Md9dBQkjctqzKvwWLULJwXPt121j6fSrFe5QU",
  "key5": "dwLUqCzX5nt9A9NiuDTEww1uzVETVERF1RSMXmdyWYX8RVDYSqbN3Me6FFQJVLeZVm3ncHN2fhewrdAVD8eyF1J",
  "key6": "3Ve8Zn6p1yhXJZ6WgxWszLo98XR9dasYFiGFUojmS4bb8JaGQWWqyGLXfEP2rYoNnh2raRx7nwrC9GGgVJaYunKK",
  "key7": "28kbRGABDGadoxUxCS6NvxbwiFdqknBk3kJWa2T2SBWiETbC3LrSJ5CwrvQnr4suyjFQquvDF5LMsvfMNSEZkGs5",
  "key8": "3xPmHsNzEmjqRRHh5xpwicysPAzagVXTtuNNn6PULgw7jGJ5gJhYE9GENQmt65CyTQreZAHHZ9r4ZrBsTdLsQkDA",
  "key9": "4fsZCchqFUPZKKYcpMw8YVSBXrcoxqRhQV7yxKWf9yxUmyhVxWwoTEckoLxSRj1WT8xNhXa4ssLuB67vUcLvsUdy",
  "key10": "4TXgSTHtYCWgr99WapJiSpyv8pP9BiX4ZxfGvkDmJbg5mk4PzZpGx72Hky9DFdXgXGiruzpdFdKQYKWTeYyAz72y",
  "key11": "3v3xwm3UTMffDDhnYx917NUDK5x83NS8Fsi1pRUTUwqB3PJhXag7qt157sCoQBLGEqU6hLeaXmVxmiNfvK1dyTfW",
  "key12": "u5HCQ4j92RbtpVcFhqzeLnxSuHmoiW4MG7wA1hqQdw2Gfsrm28SBfH6ff8cU8pXPmoeH4f469FKEnnHqf1RPTLe",
  "key13": "4godi2rxvYpdBBQgyhuCrWLANJ5sftCcPxPqwtCqWMNHL9tiAjWxZeDwwsUWyDweqZkSRF7wqXW92vv1NU4tZphp",
  "key14": "2LfjBbASYWb76AwbURkFe2nD7udWDEdik21RFi2YZuH29K4x2KWE615GBPgUrGttp1XLQ7PCeFapJ9jdEefK1PZ6",
  "key15": "2Vg9KsxmrZi65HPa6xm5HUa5JgjBcy87KZmatwL8iK9gRSyNGUm6ntjmUj6GADHNk9gdZY6b9PMdSge3iRVnnABT",
  "key16": "QzbPw64d7sjXDA96MnUkF4qN97qaL7W6hyfxe5FXC1WALhpZpD4zGkQPjHTKMNAJj7NQd1SF9xSW2op7jyn2pGe",
  "key17": "3DFFUA1e3i8yKeXgP5JqqMZ3pJ8AAoKiHzHv1JvpHqemwQis4womzDWbVMKoHPXtuQg5tjjpAtFeqKbhgmsCcrx9",
  "key18": "4EDAz1neHvN6kWqGt7Pg7EDdqpSDwEiPF4khaGKjo6fmvSGwbSxzCiAxSNjUD6ivdTKUxRXwjuRxzQR1Psh3ZomM",
  "key19": "6wB4EH8ivQmdXvr5xRhysoqfP77QgQRTsxfFDLXBKmKvNr8RCz4ebM1kzXFTkr5HPXZwBCTdeqyPnFgoQnLYG1a",
  "key20": "3cewwKWMqaSypHYLHK7aBmKogJPQiizSoVHBciquCwB4fX7ZAS82chHKzxWaFZMBQCXek19qYDxpuKhpofq4pA6E",
  "key21": "43GDHnL6eQ8TpAJph2SMFZ2WD59DZTcLxtv9AibNEGVHb5Mb54s6Wvrh3biCiaCcLbA28Nwt9Tw1JVCU1a9g8SN3",
  "key22": "zU8C4PiYYeiCWLx4t2YM33ZeGNCo78eQqUDn4bQ8kTDkWWZ1WAQYar2Rb5ehDPaXDXN87XpFfnEVhKHMxo7rhWY",
  "key23": "JEbxpEphgvGdxHZ9CCJpL5bLnJPRkk6TK5RzgYGyX4pa6HfjdtTzfSYrRcedjkxEnbWYXmCfHjRReeS8hGKEjpW",
  "key24": "61ZeDhS23o6uQ7N8RFZroGiH486AF7mVLS8d45r8ohZXABKU4UnWH9S57W3e9Wgbyq61J5Vr3wEKCXBmVL8K4zQa",
  "key25": "NMjVnNTA4jJUMPXrKUokBvHpHUdvwoHqbpBiA5NpD9amNE9gQvZvh6ejj6hhe9W9RhS5DkaEVsK3sNQmMRWLnaJ",
  "key26": "4eisHNxfiaoPJi3hrGFAPXUaHhR4uguh2HPd12rohgkLvPXDzM9vSqNjQjmgNHwsN56YCka2n338MCMoBf8nnwBx",
  "key27": "4yZ6tDfzzzRGZdcYF1d4aZ3kZs5uZAQonvpZUyM1RDNATgo669yiH5pX6YuHuJh72CT8w18Wr3g44JS3s26WRxG",
  "key28": "4AEiwf9sm1Xu2TZSAS34chbjBJ44raWtt6vGdAsBGRzcB3yVm3UxvmAe8SZq8jE4rWGYbp3qTJK4CTAJfD5oRe76",
  "key29": "2yYD6whMpyFjfU2nyhqsxmPPpwWN6dHAYDa7sohBSzffEdu1d6Sq18S5b6inXjjRsNcj6CnwR1DvhHTs2EwopN3K",
  "key30": "2o2wwmH1TDNHHxZ5v1QEYJ1mv6CFBYV8Gi3hn3bRimjbb4Fo7SB8St9e195QHnzydvsWTDhk7bq8QGcFK3wmUU5c"
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
