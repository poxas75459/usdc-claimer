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
    "qqfoK3p1S5ik93xp3vmsxnaQ3zALmSwi8h7FkSwReF6cMxVpwZXz6rSKDqAGZV521AJu7dnVDmqWBwfspBrhgJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qbFDxKpeiVuVw6V6TkMgADiL8D1p47QZicyCqvnKRhaRqDPysZAW2rWhWuarosamnUHkMH2aVB1rTfaspbmaAhb",
  "key1": "1rvCDX2Fg7fEMrMDMBCbvASYBt6Hn56o5iGT26Dv4Fhz3rehmJPs5qMABNJkPDE4Uf71E38Atzi2AFhsVztNzWW",
  "key2": "3J3G7FTjwceaoXQrmwimXMuaihbToncqi3jXSDsGxGcwUxrZJTHKALLZpjPLfgK5Nnj62TP3WSUrGf1biLRhi1DH",
  "key3": "3GfsR8X68wUbnckGDYEizixaeBBT4nPJZ4u72gEs9tomSE6zuGYH4MCvYWLMQaWLEzDgE5r6UKcUP4qXMzAFVzvx",
  "key4": "4kd3qHUY8oft8RjXDKyACkW7ndSjojCrYdsUvXZoAcpFJZH58CJifv3sStzpwDooJGrzqpnzzexsL3FAhAh5WiJr",
  "key5": "mNNQXCgD9MDLp4wj6cEx3ksFWCURUKxU5gioa27vcTSPahZRH7EMfmcGzH2BouWPaFSP9aAVAunrMtsEHpU9vdy",
  "key6": "YSYytdpVB5jRLTZxQN1aYDRds7Sb18toyXNxGTqdxN9oHT3KGtzaTNYM5evZ26UE5to16QvqrjKSeXjsAW3BiYY",
  "key7": "3QuvCmReTCRwLSEUDEwbWZD7DM8ZYCpez1FwKuY4zXhkPiTvwK8367b9FuWWNsFGjxLGhBLwqww7YStgLECQt8t2",
  "key8": "25UGuYWHBvNTg7DvsEHBVe9xFoEKw1hortWndgpuraWumksn35XrhbbW4wb7fHfkQfQ3c7nbFdHPP1z46EhNr2ZG",
  "key9": "3XHVpZYqzJJyjJeVidSTPuFScGD9dBozFA4hZWvEsLyGFRPcAppPQ4y86gyxaSJYLyEZPsZEZ33o85kffkffPQGo",
  "key10": "3khHqx8G3ScXFC5SdKQsoRPXb1FF3YWrrisjnSW4KixY4FPNUPXT9gT11Xsi5QP5euBxWiqfrPLCxRtsM8rRvAnm",
  "key11": "3yp1TeXwYFaSNP91fgK2LcSPmvTWXvyGUvJXEsL9TrxDdyYwU2k7akVvRyNnv53rxnTdW35SBkMDgt6Z5bXGC2rV",
  "key12": "a3JoSNkswLSuzwyFhjd7a4CUn8THVHJNkUrYxcsDbYYTFGxZCxSrpcFAhaL684Sgv1sM7WThuyfj82iPn3kKxvQ",
  "key13": "43RRccBM1yGk4NyYV38T5TftQsTUXev6D4c4VkkRjgw6GM2yyuZxqwvcZx37LeekKWh2thYjgeBdxwypHYncZGTd",
  "key14": "52M2HZrLVYksUx1c63bHJgQjXgwfSCzrtZ97LYbCEMFWJdU4cfgLfiSU43H3sUNfNwgLpdvSGkrYsAvRJdQ4oWFe",
  "key15": "54YMGbFsByQ4bvUbbE3M5cryWWBnmvLpafCgVubvsofE1S79oFLRKTEC1CWhtFyPx6bZ2yzWtDJyUcNyaghSzdn9",
  "key16": "3TjdXFF7vLK3g8BQ8XtpX63iyZ3RtUj4eLSaHSDzFNRk3Zvifna1wsiurixTXkWkR6FVnRYgMb8xSEDwdHzmpHdc",
  "key17": "5fGswujJPkj53Mx9xQzhRuaLRJKeVqT1NnLpPSNbMeUNWVoKa93fcVGikkBqfKtK8Ygbo45SfVkteSeqp5rDGKwD",
  "key18": "jt6SsdFXxP37eDjbAv1MznWuvSx6VgS72b2RbvdMGaPYdeKBhAKBLWJM7xdf5C6sCyVkyMLsYm1apUAihGnuDk3",
  "key19": "3Jxyn6VwcJiAd7pd4TBtWXRtNrVhDZfpdkDA7w5sTgZCYypQNDLXb9t1Zm1t1si1c7HZpwrJLg3uZCBG95eQEAa4",
  "key20": "2MdmXp8mq1XNzBkLayzoeujNCKAjK6k6tzgBS2wmyc6ngSUZkiwP34eRc3AfRMKP85tdqwsuerzVxQp4cimpqgdf",
  "key21": "2toHxeKJPCiLCSWtHuPuwXzV6SsrFmVfXXxr992ZjCKPhsEFDR7NPPHB752zK73LBYMjKruobWsvCb3KddRqTUUK",
  "key22": "3ZukSsV3QuE486nNHc7vcPeEfzDPn8kgUatENwiTEZQ1Z27XsUgf9vBXA4zARwvTDCjvW27umw14bKJtRD7a64LH",
  "key23": "2WPR5X5fxRzW3uYGCXhEvPCkxNTr9DYG4c3a2tv61fuyMuHj6tTMmTi3Z3BhJGjWCs4WpKDhz1BTpEVg5LMG2A7G",
  "key24": "53jGXgkt1pDKjPsNWqfsTpZ2wdkDxpm5yeC1mahAfF4giv1uMEBbVzagErcaNhvMgWym84Xdj59YXi7wahWTUyx2",
  "key25": "3nUrfApAHy7zutKMGebiBKoRCF3HPagB5RdEDzLc79SpCFgaEVahfjWFtRuC1NREsG1i558D3X7WtWRumMCoatXs",
  "key26": "5kbzR8wyB2vSZdqg8xTPtywmFRRamUzhRFSJ8KSYfdzWbe9dgtp6oPqQvm6Te4uCDd96Y8sSXGTGT7fsAoNA7jWh",
  "key27": "48xjHCF9WsXH1RBiew8HfXKtaaaTB9f7nwvR8TGGhiyK8GhXSaHN9DbzMsZpfXWf2hKrMREcLYAx7xsUH4FsjUpz",
  "key28": "teojb4x6muhbszt26DkJZ7fpu99XPMVUjcdpfm3KC9tfvtkdHpYszFoAgLndL4tZFNqunZruPVpsbBajKFRvbWY",
  "key29": "37k14WzFPsku3RrcPqMzZodzYBLAEFGswMCJbkFvvSPrB7Kn13RRzDW4iNdT2WDGkzETFxVcB9MCRgAbDqwhg6FE",
  "key30": "BznyQ54XJEFynmmQcMHjLzgkujoq1aLhBakCGCK3gAf1Wprmb3THU12tEVDfBhXkfSKaY7guEwjHGeoPxNgBs9w",
  "key31": "5vcvdahASsKh7qGMAXpvYG2MNa8izgjdJWQPUymZMHTu7dgEPuvbSGpwKSCon8kisiDGEmGTgv9qGcGohZaLPn9J",
  "key32": "4nHMtKqCM8qhKCkdqjG811nKA7X5gNJn3mo3wB4z3p2gLVbBPf2mAQGwx5fb5g7T2NQZPQph2QfCz52sVHKud6MH",
  "key33": "4zeqgAbgv4jufSNQsRwjE5r5aP1a3heX7WiwtXboTNBvEgMmkurzV3XTfG6Etj6dQQ2vdoesmGGxdfeviMGBfVSP",
  "key34": "2bj2Uwv7VJJZJ7QRSjLvz5AnVsETCK6vow1xgsYRj56RPFapiiNB6ZNzP4Ht5L8RGry1zMPHkafb3yxXYzQJ5rxf",
  "key35": "3C2yDCd2JeY2ohRLr8jdHh4fvWfqGAg8UXGkM2z7eJXUCkZqybRtMQRwn5JrC9duGEDDDuPKDcw2d3rFWvYJPih9"
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
