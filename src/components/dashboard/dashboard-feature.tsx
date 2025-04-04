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
    "pfp89dLZJ2KcrsoYZ3U8gXpTrw2KQB5VEhDAqCxagvN25x33cb9ZK1JDVkkNGXUzTno9iKF1gpakU5PEsTy8gRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bq4gh5qNZXFyfgqMtDMu2nVbjHvFEq7gj2ZMi2sihMNX3V8JTtBhQRHf77LsZoW5wamceCNuBW8hJAmzKpjMbNR",
  "key1": "5hHeoDFFeitmk54a7yqrgADDq4hqhD8au3zEkpk7WinsgDxBZDcyK5h31oXaEDCv2rnA9tFjvijEohh8T8UYMqje",
  "key2": "b8Bv4EfB6q7DB2J5hPBA3syZz4nZpyUSYxcgHxSCNaLaHBbLFZFH63Bf5GDqdVrD4LoLoUWuFoH4AA9uvShnMLq",
  "key3": "2oocPY5x1ApMz8q4sDskpwrRDTXydR8jAGXvbfWMbAv3HP3GZwXSKJPg2LRUdmRaG8j4KbmDJFKHzeAZxCd5C99X",
  "key4": "2bLWp7aUkyWDixub4xwfkapHqQGprjwvfWiGs4GdmyAVwvG3mbRcNs359AQKNAmDSipW84vEkNtFoik6Z5Xm1EaK",
  "key5": "2ox85jSccCF9c688MxRZXYkhJDdJuWLJZz9jEUmEf9NivHJdZsYsyfjPjY5Z9Xi1bdKN4uHnSTPeU21JBcKxaq3p",
  "key6": "32N6oY21EAbqtyFmvTMqATz4CG3ufQ6xv4NX59MtJ9EhSDnDNQcQDv5CYNTo8d1iAgZv4aR9aHmYqd4U2Ein86JD",
  "key7": "4jZS8G4NwxW3Fok75FCiKgjD5rviSUb1xsHvBi5xeNwS1jY3zpHwbKZ2RxBNaDaC1fq4sStBY3FXjgjWBuYWS6VW",
  "key8": "3Rvca36bwm1ttAsQNtnPnZ6iAT7Cv6TTRHoBMxY1pwtDBhafze4Xskkk5YSC95fcCzpWV2PiGe2ut96n1yu5d4xX",
  "key9": "4qMCSjh38KGWK5A74E2PrMvUaRq2M7hPSv5xCxWCNftaeJJcdbrWi2w15WxN7GhNMSEYyn9rbDe935cp4NxRuobB",
  "key10": "4S6bCrsrP8h7FGb3dExYh4F5TtjizA5zuC17kd32YgNCkfKRpKeix2E7oR7KLTvrkQB3vDfgfyX7BdraeGY9c5Q",
  "key11": "2psowCr564thuQUXZeop5FCuz4tEWJcZ2DVEZJaiiMdA8bVeS3nJWPt5X6ws7eUWWhgCDxgAs6tp6TBVBS7P1dB4",
  "key12": "4NF1G4hGALz57HTixvGvQ6mxeFHkaHxYF9RkzbxPvNBTZKiG7HvpZYBtYReX7qY3JmieQ4EuUPQbFFgXh2DgWgD3",
  "key13": "3iLzgiPSiiRtUQJPjEGrhjv93jWQv52M6YvosfBew4ACScZuCzrJZgwVyAhLVSaGG897wYNeeovB9dFESMK6EKxV",
  "key14": "2tgCcfbpQKsTux6phjEexMgbrfcic1oU1v5NWeoUSiocf6F5CCdKteQJZtawSi5GLXNKbuQwiKPZ6XCeY8FgcUip",
  "key15": "5toWFT5MWwyyURPWibuEUsuDudanXxk5kvoG7jk84zdB1Vwj8GZonfvxDbzskcUUf7ve2e2r7n1TADpzJQaAhntD",
  "key16": "5MKhHtsqumwgxbvrkpeJSktg6Bo4jk2cdMjTZiUNKvENyoPCEYGejPwnxJ36ay5aJkjnPrBRghFC7ViJAMTS1Lrt",
  "key17": "3UgPHtV7hL1frrLUNUdMbo9qRfUpkTeh9AHbgrDGKtXSFEKYjaC7pKW6xScgMSNnf9dm5G1aHkqPFfEjR7B6TAGo",
  "key18": "qWzztEGzXbEUXYz3eA7jnrrNfF1Cd8SFSfRk35B51894b8oTkN1iF4nXsirnXrFAMQW9GViKMe9QRQ4ruZktEPm",
  "key19": "5kP62Fg187gCr4nk5ud3yd6dFz8kgkroLckrBFwKcoH7T5BSFCDBeCEx96ZqM2ZZrbYsPFdG1Fwk97wKS8gijDzz",
  "key20": "396gaRfzwfaVpPhGRiGp15AM2QG4UgcYyKtXTfM7uMJF27uxnmWVLwJzhfP6sHYgTkX8NMfymFhXxVnpqZDbPck1",
  "key21": "34EDZYCBnu4XfPfAbaKKMWhWynQFmZ5paZugxfnU3BppuFYpBP4yiMEdQwaeFARW3hgwsijLSg3YMqHuSpDyWnPX",
  "key22": "Wx8A3TSCwsCnE4Vatenhhnpz6HjcPDdUzhB3ZhUeEVG5c4B4m45LGEaVvNWqysevLumnYuyAdX43qSPPzR79UDn",
  "key23": "2kNtdmaSeTn9eDSqQgGdueYLUUPNcvDTNnweqsKV8aZLp4GVFtgkBT78Gzi2E2EZuiXiCbk2HGTdA2XPHPmgbjef",
  "key24": "2s6Eir4k8s1BuuxKZjaPWKsxDkw5TB9n1p7w1K4qyjYbDP7ExsiEfGKZkmgJDsiBs7kmGyTyP9GmtTshCjEN6QNm",
  "key25": "55MHDQGGVpwaSV6jcxJ3kHTcZdkTYNWzWjrBwmVNZDAgw1r2aRu3KWXuYWNjZF2hMM6y9xTTNan3csie7A4iSYgo",
  "key26": "kvJPCLEpHL1hDwE394tCxCJvYhVXLVVWsX3xnd9KSSSz8DCuFTEQ2ZCowXYRA7b8rru3B3K3Qrz1Sv3qVi3mySE",
  "key27": "52H5THQZqWVgLjhTVCpU6xm5C2gHMDL2e4B9uCyWPq5Mjh7bh5dmpJWjUkFVVihvRmwRfTFcg7YcELr6MYKpkJDs",
  "key28": "4HTnTuRY2canreQzpzhs8XT6sM8hVf2CsJqwrSCMZE6no5hcRWUDGeCdUHwSZf9hkywhwupq5x2KR896ykhukgR5",
  "key29": "2vXtMPJQxZ8fpVppkyHfNoLD2F7Vx2bsckbhvFBRAc7HD5FhdLmnDAwTiEVrom655wetn4aMNbU8nDgd8hqc9Paf",
  "key30": "4iA9WfZrrEmi9kmqSv9CTBk44jhSpHTvvfoaJ5H9AG1n4JaEasDiXw8JjozDKDsPXHJjtsQiZwrqh1pScdtti8ff",
  "key31": "v9iGq5QUsiUAXziQy4qPCFivbuqQ7mMPN2w89Xhx27MtLeuYHa4vS1kDJn7HxwCpq9kp3JUEnReQawCrGwST2id",
  "key32": "4Mzg6gKwYmqAwQsfTCZWYjXL2VsahdfhEScTVV7mWJsduTsmh5s5pujgU7x1QdqACJ2Rx3L7LzaELcTJyaDZNsuc",
  "key33": "4x5gBfSXHuh3jxjjGen2kd6Qd7vgtrokGZPs5niyyHuit4v7FiAakRpCDjKkzKJL5g6DSL7asy9yHEjni6vL8vQZ",
  "key34": "E9bf1Afv7LL4GsNDP98uPJy1pB8XB7pp8p3ct7AJQgoGH97fbsqQoxQSo5yZgKmT3Ym9TnmtSrUnne7wpaHySne",
  "key35": "5qX3hv1q8AztfY1anRwgu59KtPz6F1e6Prw33MLHTweiZAMRoVaKTYWbkbs4JQgorhen2hwKGMr3E8RnAxgHaPQQ",
  "key36": "2XyXNN9kuHCVyhQ8DwqaW4Xn7TiRCAPExvnKiL64sMRDUsFjXvWxik8XXUwf1NSvYeddvkbxGmb4MJoG93uUDBgZ",
  "key37": "5TD5NJqKQFoxAwBJwx3FcYUAfjWF4TEeAnx9sJTSw6KioKoifwGrgNvvQciDU2evSfdfQV3FV9yJcCjB45C2HEYF",
  "key38": "5RRYf5mU1SRHeCqJtDvCbc8BHhiLo6qAuTQnwnZzdQ2Jwr3r3CzYgBr9XQfGiMKB5p6PPN2B9AdArjAAaGZMwD4h",
  "key39": "3aHpfDnsq25winSNvH2vUbjUVknySoyyk4fNFPXTv2hWGZB6RSHz6k8QmN6HKRgxvAXvrPZMmMdZMApUwYR6mEW6",
  "key40": "4qgErCsQa1uNcBWLN2TUGwt3TDkG7rnKUvVYKx3G5PmwN583viFgCbFy48zLLN1Hpufo2hVV11x4UvKvY6XZovmQ",
  "key41": "o2DDXp77XLByJJRd9bBnjbAaJqHk15fBVYHnbqhvkc7HR7aYohEQ1fsxEN7vmwtKM3war4SNMY8eDWjQzCYCJhW",
  "key42": "5nJPV8CE4eMzqJFnN9pe854YCGfYGcocx12kY8NbvKhd9FU8nKbFAtSvJGBY1Ei2xzqRL6kA1fYzjb9HeMRcg7QP",
  "key43": "4TSzXrzmuscDYJx5TWAkwjeJYVmDTewSE5LPf5kWX4jutaHEeCWda6bXDnn6paDwbkLWXF4xJ9jp1pcQ6SbdmyLz",
  "key44": "3KG1PvFfh7QHt6NXNsuK4RAmMr3iSt5TLjyrS9KTXEKMV7h1L5D7TcYNRje7ZUuZok3f7Gyt43nHwxAGjFJ5KJCN"
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
