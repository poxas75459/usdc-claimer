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
    "5P8FEqPKHQpDBanGPRzKgPTAkxg5bXE7ZKsinbxKvXZQ5H51ALVRxHHXPvs5mGQv6G8tVtPPYzbfnA8R4g9snxww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFhwT34v8mZ5JMFrcqskJYxQabMvLWULtLVp4ipGxqPE3XXr692u8rkiUsXZN48Xhu4wpxto1wqdoKVdELkoPTS",
  "key1": "2ucBQw7NrLfM1vLRugMfLvWpobz1tdC8udoZQ1XndfpuNBod7XwiFLapDeZbCEcqtsP2zK8mZteS3A96jNGQsyK",
  "key2": "4wQyUYMbPtGitbckEgz7471Fga2u2tiRDNhhPXqzdTyXYxGqCwfHeRhPvS8jE7vnkxMy1oaq6WJdyL5A9KXsX5Dx",
  "key3": "3cqcEGagK7kJKcb8xMfnk5fSKTGpVRMBKUfC9HdmG4L3VuVEkz7nsd8vx1e3ZT6oa9RRxDvLP1udEzTkDaFmTZ7Z",
  "key4": "4nqyjQC7YMCHiKv7dREWUM1Qc6VrJW44ZmY6DbCZ1WxKaCfZWdrjkxiHjbaZvzJbnCCEmKRduhsXMRGMbfcct7x7",
  "key5": "67hU56rRQXGsQ1X9L3VHGzQPtuVUrCpLKGmSytPNT81MyL7hCxaYNBA2mZjf8xW4FtFoNnhE5FjWRQvhFqdpLHJd",
  "key6": "yJgCRW7sJbX3fZTorqXYCBCBev8WsykvzF6vzv32LTCN8vcGCeLKDqCwmLCV5yXuqLAjAmXmiQ31qDjMMkeFex1",
  "key7": "3EZZHrMmjZ1xGXKayU9jU7CWVJTX1D4cDZ4mv5FD3da37L1abefaTDFRZVgqWHZhK68aUddfRwRuojZQXaVbtGp9",
  "key8": "3krWfUHFabQbjyXx9N81xuFXB4uwHU3mg5fuBaQLe6s3AyunXqUvPGigaSLRSiw4Jh7dQS8ZrgaxSiHWnUvTJxih",
  "key9": "49KeJeTwoMf4oWZP8oQg1a5C296n19EXNDib7pbXPk4eVKJtgkSU54UnSaTmduLGeyYrQ3PjT8vzYx5Y1MCDcpru",
  "key10": "36WYxVzMitXWofKbtJqQtsNimEf1sBNjbFDdRpDzBw5pWhRnhhbGguhQk9di1XkwXCQnKLMLMu1d8BNCNDhciwAu",
  "key11": "9hSp6tsQVZSszACgU4nSDAcC1stmNfse5JmDA8T5suztFo14Hgo6hyErjLUcJKNvBFrry8A8yMtcaH3zxA19yE5",
  "key12": "5XsBKMYgbLC8Ea6uNaa5MFYqJRbxt1t3p6Vsi5yvVDKwKJ3MbekgRPjodDuKpg7oDSVHHT12b9ShUR2tXugH15X7",
  "key13": "5SG8R6QiFyJuuPAR1DgCLvbmSvY7S85cHFA7XnLFbM5bKKDgHVRshB9W3oLMQWbDM9dDCzruqJFH4sR3EhubQt8y",
  "key14": "4f2S9ScQig5SJ3JPuBLw2HzhU9jvFfV7b1e8Cdgh24AQNwgCTCmSbrbr2bm4A2QgFbrwWJfKfohnRB4eG6N1z4LW",
  "key15": "qxTmY3nhjhpMoAb5XTwxQgQmLFhMY7dzLMCQtZy3zWrDWXPK3GSHRMm4WJaEBfE3uPBwj3JrUHxLKmtaes41zyP",
  "key16": "7gaCZ58g6ju4aPmCd2RUuFXiHCkiS94YXtS4TQ4PnXcE8PX6tVu59X6tNpVxqxe7wPSykvJTSYoNtMHUNEDdQXw",
  "key17": "5MsjrwscwbxDQg7E9zYgEsMUnxiNLEsvu4H45pZ2WZfnjY5My7dJXvECh1ZC35MMs12yesnPdAeNDM86DT3xwW1Y",
  "key18": "2jRxnoQBxmkTNfM8c3DYB7o5AFKPDaM93924mMzxBBPBNvDLxC9UcjovFCmjA3NK6KLAN86aNb9cw3oF5pFYgqV7",
  "key19": "5PWL274WHpuUgc7dwtVmyVGxUCmy17K3b2AryBjajKE799m2CHRYP6thTJ4WHxBfHA7EWaCHEm8PmYgJPmxx9dhT",
  "key20": "59UgbrfGiq3BgBMvPf1kxdbJcCFb3JTvy8gBFfujmcn6SBkVE1h1fmWTrCryinAV7eTEKBwkDNFXf4jUxXucsKVn",
  "key21": "379KinsRRNy4Tv2QSv6aGUB4BzQdv3ZCaMpej9B4fr9GQrMEfHnfqZR4XGJRLY4MLxqb1vZgfcs1ML8PVbd81N4b",
  "key22": "4JcZ3ovf2Kf8ML162DegHymmLcEmuTYj8x3NnHEhV8VTHnAcRMdjRN83EwvR2yxXxfixzB86sq8dCRNReyxUQ2Uf",
  "key23": "4k7xZJb1PebmjvJHXvzU3Dt4367vMU5cFN4K7Qj41DPuzMwyFhi1kPZRfHuYUH1A85eWTx3PbH2y3QkVfTBaXRy3",
  "key24": "3AgUAePcHL6qWHEi66yRQyF6No6zauyq2RQHzkLeBe8wjiPctCqexAgSws39pmYT8WufqvqDDSRy3CgNdxAZk6hE",
  "key25": "rEZqJBDd3R9DjN2rbH6nDAvt8AXFBkquExm1GmGF3zwg1LUPHYJ76V9vQmUxSXUjrnUbKb9jJH7v8SpbBsfud89",
  "key26": "49W7X7N6SXxRqsRVFpCGx58WX34BQMPmuPz48qKQYK9cYQZLdRaeqJB7yXaD4UVdMCLursvr6TBaqJrUduamN1AW",
  "key27": "2SAQDowjsoWPwXAfnH5Cay93Y6fLLYcv4tjrBGLaPDW29rmiN52nkVQhboLe2AQ5F4NJb3aJrJtfFf9gXHuDrBes",
  "key28": "2Hzw15YpkqDdzAZcT8oXe4twkmanaeB7wZztunQen2tKvJjUW2YmG6iE26vY7MDjsMv5qqEFQmcyD8LK4i1XwMCg",
  "key29": "4u2xDGEW8aP7zVQX8QhzPu2ELuVshiAjJe6FXiHkGprFJgvdiUdpBKG2U5pFsf2pmBpTkpr8d4HKf1kCdCcNgfno",
  "key30": "5y6T4xLWi8QihirnHmw1CKuQodGdof7Czqt4zPfRjBDn2eDbq7rgxoDsG54FSiUQanmS3Py6rw1vkLgr47NPBre9",
  "key31": "FXQZthfJkuTkTYftdJvytrm15Y5ghXpkf9JtCVoRTygnDAPUEHFeJ7TiiGpfzt4G8rntqozK5625WPpTQkACCAn",
  "key32": "3tyL1RX6PiaoZ7GgotTaoo64CFYdysAK84LTrEgQQWn23hcP3X9PNTLyQSGXjTxukoahPaceEXJiMN2b9jjpdj4B",
  "key33": "2r41gxb3tRdskVoQPR9Zix6cbo51aNcHK8ddEab6xp8sXHhYGEk48Gm3m9uJyc7PfKpwGVXWjJs3xjiTYvRpWbrH",
  "key34": "5vR97WPW2u5GCbMzitbUJxd96Tx144ENCYhANeETALg4xqrfToijFKAdx4gu2kvzJRwtvZevDhXNPTu1YQAqDLiC",
  "key35": "44D3WmpUYKhgcHv3b82KerN9ajj5CMBsY2s6WUzBzHwS87dXYNknGTXFBLjHVcG2SszH2nKSp6b7YEeVdvv8S4Ff",
  "key36": "2XnNropZTYVZntJoNoAp7GxkTtanL43o1WjFbBRUpxzTgb5xotYfBUWTvFHu4MCGsvttcsbRfpAXK9yRtodoCE3Z",
  "key37": "5LPURdKvXpPkVZe3dV8DaDUYr4rTDUmSScnwx6z3QP9Zj2TvgJNzZQ4Ct3bhuJXoteuEs7kNPkD6E5U5gLpr6ka9"
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
