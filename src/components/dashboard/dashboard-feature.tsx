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
    "NeD6Wdb6AGXdui4kQyMzgTL9spFYKV8CiJZRmPuE5Rp2SWa3vjQXkKKCbjt4LzbiNNvtNzjJY5cR4dEhdiMd8AA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iDKgVcG1PSLJXeSK7aqUhJKj3LNu2TXsf9wQqMn5NMcNUVkEwVPfKB7pcMjXBS4fTSN1H6ubWoYdX1LpX7vHREN",
  "key1": "5Y368An7MFch21A4dYBAFQrPtqZmngD4AMAf3nfJKmWuwSa8hDmoqLrdqTVvsFMvqH8n4y1fJpuQLgXrPdxLg28G",
  "key2": "5nt52b5fcxedPj747Qs6DAZqwCLwkuFniwnDnDiBpEeTd63HD7FXUJDZvrxDL4MvbN4fRcCceZzRvqXex5ztUnkn",
  "key3": "4mMEJofaMWerFYJ9jfPfXTWjWQ15c1mbw5kn8e9ZLMhmmWhqbqYjBHSB4qHouSgrnNL5YoKofSNPpNxAMysRwqXf",
  "key4": "44JHEudMfHTm3hEsHXVL8EVdgCFDFVNHAPHUhitNAPUeQQN6yVCCHJZTEhNEM8BiSLQKpDvuNLe6BxFnxDbDfxt5",
  "key5": "dEkZAP4JPSeDGBuS1tkLsCYrgLmrniGzrrBdK2iHYJCTjwTiiyiHmAtKX3UfC7xH99TPL1f93oUgYTeXusE47XW",
  "key6": "4yVcuFSF2gHrhzjiCSUZ4HMy1zJEvdxNBYoLToJM5whbmed8XHiGthQzGetcE43Dh6LMBL8v2zqcaTfbL2gPCuvZ",
  "key7": "EW6Pg5yX1gB5HQP1peKUvqZQoUhx1xayLSkuFJVvjawsiGNh59QHSZNukpUKiQaCkuRvPYuRYyYfH8Ubvv9rBvd",
  "key8": "3eWoNnc4x25jVwTRevdMUrr33Jq4x9mQBhDujF3fgkmCK2qjC9gb5rYBDVRsXjEHfMTnth473LFWXMTVeCD9WsV4",
  "key9": "gPpcQvDov7Wy4EjhGKLEdasxz7bBE6rBy46r7izU9tktJ4nn7U1ebCzSQ2egsLa2N524qP6iCxnpKtUMik8QbG8",
  "key10": "2nUHvW7nHsK79ZHFa5GdjQYwAFdKf2hvLDtN6LHByXk133DMLMLrKS9vKWerRZc2WKHbicuYHHtRxZoXGhdThFoS",
  "key11": "58KoYaZcGysnjcGozXpjiPShRMPSDuRR85PP9nuwPmjB3eaZcHqSVXBe58onhfPmDi2Kzy2E5RhdM3ZCgVuQ8ikY",
  "key12": "46xo1mmWKqBwwPb9Y2KFTvcxNF13hCDUYfgaduYpxQ7yUtb842zHkvy4jRv3ytMTm1qMnUVdrJ15cFMWUw4soTD4",
  "key13": "4QyrADXjZq8xV7dNgjbNSawQ3uU2GZD61YYt5yvsJTWvJ1ESqHWFnKBvABxVtzokShvCA61UMLt9qaGtvF1t2XFY",
  "key14": "3mYwdEqroY1GdCyvsuPkP66NjpsAtm3gh9qsxCnuCJj1uvPH9d5k1CKsb3TcP4pzR8aMUc2GCCSqLEQZkd2yC3N9",
  "key15": "5ViFgaZBg88NFv28qPuCDP5aKBQMJGJQEytimWeydAr5zXvDkUai4pdAuWnCsWUKHHV7rDpZ4pBK6JhN3B8BcvND",
  "key16": "5jxrr5BJo6n4TwEuwaTuQQbkUEhhKEsqGxikbcfrKx1svVTw5h7mJZ44iw4teDSdeBqd1Lb6ido3Eb8d6MBtJahM",
  "key17": "3vZbQFNWvkBmsg7tUPNnvwMLyXAC7ZzZ4dYZaQci6wEfsMroPvC1K1m1uThzkEmvH4ir5GdizfGd5DT3WQf8b5hC",
  "key18": "4S75eiyZPuHhYGnKECuFNhKoPkkX1bNpV2Jv9De1BdeFXckMffRPufRe6BhW6iwzNxeTmH3fQsq8VBmWMCpkP8Uz",
  "key19": "UCsduwsBVqWB3b4c8CLGQaied8xko7JC8kTQpNdSW7jVmRNY51efKd5UB6H8JfabrHgMecvCkBjTxcxw3kVMPjk",
  "key20": "2q14H8ALUQCnm1qmGjxJq7wbTBe8GsJb8TRxZa1w4VFJs1JPfKAaRhYKQsCBSWvdjWPNe4PtL8eUxbX49w2mrJx1",
  "key21": "2FAPPEKfpDjSi9fc9GnhBvQzWBbErJBgSunTyorPM7LjvTofJgi2YCjbamPFpFf4dgkf6eMrpbpcgHAUBLYiuWqk",
  "key22": "3WnVqgqDUekuZkT47au8gvL3pLN6mkw6Q7hZmjaFcNP4WbxJMygy4LJqP3pSUxq4ah8imWN34R5Nxh3UaoaXtEHm",
  "key23": "ELFnzjPwFu2kMC8Gvtk3ar5bimM2hqWe9Cs3ecB5XYGGA1rg1B6zerGBim9zEZnsyV49ceBMTV6xBMbxDZdTmZ2",
  "key24": "5mHYNUmJ3yyJHBwiKVPx9V3Bdk9VDQ79zRQNp1bWjhrnoNkAgFV1JG9Mr8rB9tjyLTwY4XDp2fmy7Xwwd5HyABAr",
  "key25": "4PwyhzLzm8ZoWUrXZUnk5vJ7PWsVHRKYfBkgatenvXatQoNRZWz6qjUmFe4RXxX3qMaHkSi6z7v9yNW7yZqhGLzw",
  "key26": "4h64DUoX7zSW8AQjQ8uiN9ociEB6DeiVXmCS9QYb6hJsQFvzd2iRuLwGKFD5UHKz55x9XANLC9xTUTe1uaupTXQC",
  "key27": "2CM9i6497ZcYzTuHQrKWMxSL3bnwNUhhCj4FnLAMwfYbVSrsXZTmbdokuE3JHizk2wdPfuuWeLR4yZYd6XAVnsAx",
  "key28": "5sjvWMh5tFPHNfWNnFBwGxrAPZNBd7dN25JxW9idTQNvJgUN7BBxWk8Xpux7HXEVWXgwhJWRDMSmZ3PDMx6bmBAo",
  "key29": "3iWqo1925QrdcGaE9Gshw4Uxmj5geii7bHpb51Hsia85SdXUpMHNRJ4XhFe7AXi21ta4SkYPL3E1brTdzFHQeMDo",
  "key30": "NT3dC8VGE9faSVp67KAwKs2aBCN2E9TnbTQWVCvwwSeVsoWoPo3bZ1LNv211YqifYrrpH2nJgn2sAFbptonAC6q",
  "key31": "5fww47diPenkbqVDevKxMsfeSP85QJ7mU8GBQrGzpv5SUrabw2rkc1nTBxwrYPsRgd51tWeuQLHRWZ8FuDBZqxRh",
  "key32": "66VMcC3sHWKPv16EE7mZtCP3sZx7PzGT6NGzJUGvJ4m8b12gDiGAHdsHocVUAbzXaymDtxEhG8mj2LnSxRvXEsC5",
  "key33": "2B6Thkdbq1wLdFWdLY44okNaWnfCrCEbpXJYmahNUG7QLDAKj3cdMgcWttUHmgJW6dNUkFdWoqCREgmfUG5aYjLR",
  "key34": "2W172QsFoD9Yo3nLADxxt5PyD91ogwG5CcFxxorfaHyW3uWqLSdtJXnFsGuz37yoMPYCET2EMTrM3XhKsctvqmXT",
  "key35": "ZJh32Sdfu2eniVYQoMN1Pa4TAGW4gz5xxThMMrVnFaDf62aB2jJQ3CTqaVHybGRrK42xCb1SFZLEdd6Cpj7JvjM",
  "key36": "4xZpnRHBb6Ke2j7qajKZWkAywMFXhQDd3yUmXFMKKPFKNu8U78DCNSoSTMqetYotMBsX7qempCFsNKDnwLDEgmW5",
  "key37": "4mu4mJ9QbRje3xtHLHGmvxLQWnxUmFiof5g4g2r9EtvE6S4Ar557oiQjSsZ9twkSxSQbqMRUPajReLD8QocyudwV"
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
