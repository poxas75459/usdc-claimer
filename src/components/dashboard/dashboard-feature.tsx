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
    "218zghgRh7go617sQo4Mzk3h8XixJRxaxJkQfHx7dc8x1AeAqJj8wC5N9xT9TeGaQ28cVHvVsCogmD1goaGpKYD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52oUQC7SR9JpdufXiPh1xSPYU3JXHLgvL4oH1RjVWsSULiRnWiQKU7LXMM6P3dzXMzoGHVSVqfGgFtrSGidA6eKq",
  "key1": "5rNZiTpBv26aw69srawtLSkwbpSVygpfC9eAucFDyXbRMwHkvgXmypAzh13kUsDH7XnJx7bxboLVqmJzZdDqP1ru",
  "key2": "4qurwjbXRL6n9NL5mj6J2WjAuznGPAJbjif9Nr8L4aSY1z4rEiMbkZvByXYkqeEsVVqQhP9CpzCnxY5K86My4S2J",
  "key3": "5fnNwipstqXLmQZyPV4AeMuX2FRWTxiAmQcASuGy4cGeN7GVZMCF7EWaD9isnY5TFQwuqugvmWBpVzTq1qnXgMJw",
  "key4": "4HzCM7s8MRXH6XuqYYJbAAWArk8jhsqdDtmR1pBtv5wMrHfhWeDrfyJ11Fwpsf4HZEZ4SYBx2taBe6x8ETzKpb4h",
  "key5": "3wa3VCR1rm7C8wscUAMNmbQ28rq4RuC5UTwGwg9aPghghZtDzNCCbTPq6qdxVvGuXA43QHpnnLuWFbw3vKu1gzsm",
  "key6": "5wcXJHT3KUWPTszLBW9f7UPPmBCTK6WbvTyRKVxtYwESrXHSeZ9FtVtdfEoLuPi2FwX6qC79Xhb2VW9tKamop4gQ",
  "key7": "65SHs4pxZx9P1wnMEAXgKpZgPCsGKJLz5GMZDUdZT8rWcmw2x42A4aJkueGLeXJaLyVB7o3ykZSbmZAaYmReHgo2",
  "key8": "5NLgQsSb23kMbPrBcXMUdj5tqqZByVqdrH41xH29CpCf3RtwQq8xuWU3uGHVj3Fbk5MdjbsJMk2D5hx6AsALCsyY",
  "key9": "4R2EyhSSHBHmqB31qzFn2sUzg9u6dtqqhfneoZwPxLhwedyNSg7oMp164QP6LHsiCiV2TwNgKumEUARwy1HXbvD8",
  "key10": "3dEBvrcGbhdFJMftn8fBP5m4nGXJ5Ciz1qkYyo9X3qkmmcNS4BE4M1nxdfzs1JzZoMMwCu75osUzqt9Qq82kWw7b",
  "key11": "Nwu6evVCRgjJVeCpG2h29aUY3c8AwHL3J8dpmPCJm5FfuR6Fxp4wN3EHxL114TzAPZpErH9FDBwLUaCoc8F55QH",
  "key12": "4RhBzMwkFKAj1A5KxF7iBBP5aH3YZJotHh33f8v3EpBhfaB2SingZeqRVvK8D4UNmtMshm4EYpPR9m5hztWL9ZNL",
  "key13": "jEeePTvEG2oKd1DmmSze1vsq5D96AnVTUNDE3rW7E2tWKXXjZP6EiBw9rjDCN6fYiisNSrNUtZWDZT1Yxaxdwg3",
  "key14": "3HXHimCZWrjXWt6j3tofGaUPnrjGjqdNbjfERWkotBgRMxMoWAe8WH6gKtn7dPRCmDLYnTQuZKLqx276tXLMHT5q",
  "key15": "4zsosDeexhtbLj83HwLQCFCMtv3sHFYY2MWE2X84hxeBXjVBVBUvAPw8EC7QXZ359xm7dX24YRqENEg63CJxg7Za",
  "key16": "ufTz7it7hHZbUSQfGy5m37P6e2TXGW9tX1rd3vWtSmsDXiJBSCg9vb3srYfb88FAAV9fT7vetw4Nhxiw9Zs6McC",
  "key17": "4up5Z4TgkanGs8Li4gkfJd8fJFLK8XqFUNT5gn19U7Yau7t1N9N5kg2gLTW3rCRPatD7emjSuWQ1pnqaPT3FfHcF",
  "key18": "3eSXiJ85abhfhtDSUKeUkyZujPAZREwCekjL6kRXY19AkzpZDFDqZkpBTHUzCVih9gFKH81u7r9c9TN5C85GUrY5",
  "key19": "4Am19KG1L7amFZTJohMWrgEyR3LWxohUVBCar395UXYu6hUMy9poS4xEfHD5uTTAqoKxwWacGACfbEBrZ3uqg95k",
  "key20": "28rHfTSWZpa6roTzMGXRVjo18beUBnN3BG2FkfvsWy7jVeeoU8NKx9zquPV9U1987xYfmui55DXYComHtz4BVBzt",
  "key21": "3wd7b83CShtJXE5UYpBkUUvEChYmXBYkhhDhhBkyxrNJkpr9kNWWyH6hnUsm7ZHqhaHYPReaUogn9pR8gxcaBNZp",
  "key22": "QR2hAFWHs7Y29sTwfYSDRqbb3smZH16xMhyr5UFyihJhjJKVtrf15aQZy15eoh3GWEXyPLwmkAyKJaG8SLKy2y6",
  "key23": "4TLTWofsMEPPR6JF25FRToJ8ZkDieXiMJ73ZYgT3VdE6xTVXtfxhpQeb9yVEJkGKByrC231TbVWjDQynjYzDAf4K",
  "key24": "4125ZkfPEuebhL3Tgj7rTd2tfWn6aMJEKKKyvaFRKaz8eFyuktd66MsVSvCoAohXSBzsT1H6xveS8bSH9nqqmhoy",
  "key25": "3jpCJTbcJMMh4nu9DBTUCWpnK6Sw1iJBnC61rrBipt5B9nESpXFD1oRiLTyxvmeFDUhHGMK9vTpW4EgDJsWQPStr",
  "key26": "33btNQ6JJPPtWmEcCBBu4G3ubQ9eZ1BG7bsCSHke97BuRg7MAEfrvfEryvGodAz8vFf1kTG8vfGXtRenoNybx8n8",
  "key27": "67Z5LDo4NvWtoVzpVoj8z5wSqNyuXC9TmEVFe5wpDvS6mbyxMTx2ss4BWorHmPPCnYRqQfUdqr2MUkUSyusZ6oME",
  "key28": "2wLV6n4iU1ggPnfzqgLTT8ZQajT2NebevaUoECtzQJzqhetaLrhPd3o5etJeNscHYffpMoMNpTVc4aScnTLyzq6A",
  "key29": "3ZbQRg7WYnthwUP6TrYrvGVnxh27zu4TBRhNhcwyzf6u2RRdYvith5pS14vwwCpFwGKdZH1jwGk8tHp8v6CYUo3",
  "key30": "2g8VYV98YqiQT1zzjBXpdkjgg58HPQzwVKnRcoYK9prEyrK8AgbpkUgfeRo1iR7XNQ163nxRKNnGJyJyTgwToDTP",
  "key31": "5GHgA8DSN4b8dsTfgyjC1pHFTvS5XnZLruUcVHTvqyh8uGByGsYYJPEeQcgKpCxxBqJRP8jLoH7XRfgwZkVr7kvx",
  "key32": "2ttsdnq8d67kWn8osJZgMJMAjyxYhfzPwrUwfuLXb6RZkN6bVPSwRpPEAP9SK5RLRSxvxLEqmzB3b34nfzp7tcVG",
  "key33": "Y2wKGEummVBhzxkxmir1p1JHB8fN37y3KqrykgMehaQsxDN25LQSi2b7gD7h5KuC5CK3bdCaR7EWpkJrTzF6o2Q",
  "key34": "5e6qLzz6NMauzbCzoeJyaLWrmuiSA7UTtBUhDTV6KmmpMth4Lnuq2S8vTDWBZ2EaW24XRBdMauTYFjGC2RxmKC7F",
  "key35": "5gM3oYZyf2XVqrYbGEUNphmio7wMiTRPsGuzGQsEwC9sE9wXkp8h6G396ZNVtAb2mhP4uDnkcdNRNBY9S8M79KzH"
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
