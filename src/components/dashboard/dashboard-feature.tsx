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
    "1NgVJgemNtQQsisNK8xWyZibNJcxggkEihMQsVETc9CmLm5cbVnwC9rRXrCTVsxgRzoZMjrVzZQyLQsEfAgcFst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LDtJY5QK6S91DsP1kij78tnoo2wicfcBEhKBxVQjiUiga2Z3D55pxEpys88EaLz6sgRaqdxaCyZqoC9syy5ch83",
  "key1": "4amJfPoLy6M2NSwtJLefUbVztS3ntu759MghyT3YWKwee8tZT6G5XUdMFP2MBrNpBtBq2e7Hi9eYr5hM1beQXapp",
  "key2": "ibXJobG8hQjXPHW7zGAPE2ANyMqaAB3tF8A7HM4trAiWxzX1BXHgtFQFDjQmAzUztd5vK4LXF24eCbKJB5L8ZwT",
  "key3": "2x3YGdZf1b2nVnNA4yBNR48ELRVEbthh7c8JmNsdLFRYXes4uxHv5UV9YptVbNe9HFKYuvNZ5FffDXfLvENRkHx2",
  "key4": "37krv33GcrSM9STSJ2BmnjqGMtjGXyLinL4okWmkZp37a9rgBEUFLrxJNAhgDB59wjzYMuNMmGcEwn6Q54c8sDgr",
  "key5": "248iPK46XwyhhDynPvLbRpVdYgLBJGBqXrHoDXL6wZ9nFgvdZbU3NQ775TbJ6wmfgMxxzNKQTwQdLnmrDKggtmWx",
  "key6": "2FCeXWKsVZkcgM4dLNjiKbfnxP3JjsatDpTqi5P4bLwJy1GkJ4TtCAZEh6ycEHReLwips6nB1kDuCiw9iJsAn5Ee",
  "key7": "5r4uxMoyJXRDWj18swUwqvp2RLGZw1vKqGhk2qi5vumeFRvg9P2N8nb5VXiDJbrbZYWTYmkafCXeM9idJsY33fQA",
  "key8": "331yJ1jgZR7uYfwdtSM1cioX7sEdQjHLb9cyn7Qhvv7WzdqHLnT5VkTVXcpHVuPLosAx8AzUJFknXtWNHAmKCL3Z",
  "key9": "4NKnDP8wEZE319TfSYBCj3dwjRBuJA8XUn7NWKhQwHfmbSxCbrpvwaC5N4yo4cfS25SkT5GAMb6NbC8hHAsWb59N",
  "key10": "4uGas6PGf7rdr8Zw59Vqvjqh9AHNL6pXK1Vrx5YETdhz4BPaFjgLe3b71Qxyd5cMt5kfwuqvJXxYFrF9j7TvSurL",
  "key11": "5fbxFfjXed74DFLJAa5vSveT6oCxxuuhETZvyhEQhtQmV5f7n7uiif5nRz4GyhkT2fQ8QPCoLw6A31umqKPu9vgb",
  "key12": "2waSqm6jDnskYWHtDV8TvTqKCz8qCCRu1jTeroFviyaSrrdUZU6nF2duTEZpCUwBF9jGrhXuV5UA7RAs2xAGxiYX",
  "key13": "5FbGhAERHCNGwfH1PYRrCMU3LxdC4zE9ffMeATVoxgPe6JgzZocxumjm83KzfBZMKcqqJoLMf5vaCmhsYppw2WsP",
  "key14": "5RXGs1haKe8DXMs7Vp9dJ9H52vAjMH8AMsdNxU6L8Vj8m3s13MS8AtfbGgZDqBLnv5haYpYjvdQ899LdgLtutRFB",
  "key15": "46nHp4w42VNn7hA4mDzSdsU64MVwL4vMnUcaomtvvaCq11bSp7a5W3DqxKUPGxZjtjtXid1hYU96WzZYRyr4H9Lf",
  "key16": "5BuLqdMFYR3LjksGa11rgsMDKMSCzkRaxTzzAh8XRWRQChFQjKVfJbJk6PvjLAAmnLmtRS1hrvK5oDgH2TRTuch3",
  "key17": "3n9eJHUSZQ7GSQnHSGSknhFnD1x2aNGAZ5YpsjckdUyfJjyTzXcNXC4WHxHQnRrzY9AkF6TuWzjBXQuLSBMnTaCn",
  "key18": "5a7jc4hrHFsWmNi8k3KzheyRKcCohg6oNFzhTK4CB7WcUhuPd4Z7yE2dyi2HPPrCbM6Kjf6hrWWWZMPedDzKLKbJ",
  "key19": "5fhzChgmWArJvTywR49ykSSuWjfYBS6vFmafbnsbgiChVcK9FzThikA6PETtx3icxJiQWP6RDrPSrPCvFSM5FviP",
  "key20": "5SKjWe39va7szrxKC6x154iq4wxdUqVqGF78fNMPkS2h7vVcRcGedLKLkDdrQzpBAEhY9c58twQvCX6jJNuh5Riw",
  "key21": "qVMn4dtJiXishin2YTexT51ASTreoPkub2z8p9PiNxkpYHY5NKRqCUnKLAUPgMSmaMB1nHZtJWii8wwaCPiHrPs",
  "key22": "4miJc8RmZR23EnaudQkYATsg5QqueUzgxjwvJDnHmxsDp7XcWnMkUuV9cHPpMBfXtBCXC3Q3LXniPy2fLmijH7zg",
  "key23": "31BZZRG4mxLud7tP7tuorL8TbR1rn4Cbf7qFmPR5PQewAq8Zid4AEWzznZDVto7h2ZJwJMAXYjpwfEQBcMu4eHcn",
  "key24": "5ngWsKMyvK1vDn15Q1i6ApXwQRjrQHSRwwrsp2sa1t9zVRT3CJannEXtYset8bSuQbun43gMvKA3K1xPue3AYdyh",
  "key25": "5iBLBWEMgaM9KrEovpNsHk4DCQX6ZiaL3TSr78wAwkFnsRt6wgeapwPuiZR4RcQuFUbweyruQyegANGEk1VnSncw",
  "key26": "46RqmnFigCTpsgLTv628GUuoT2yVJ8TnJbEKmuAg5nm1zFJtPHygqbvy51Y8T4mo8ugkJ4uTHfxyn3iooFMT9WcQ",
  "key27": "2a2Bf3peeSY3dkBU683Ct7F2d6EaU2Y2m3gxE7CKejVqg8Xwh18Awp8JBZEzAE6jfvbGgoQMpJTDtvi9WUnuo8mv",
  "key28": "373jzaxHzW4jcgiaeeWTSa8kYgBCqioKGqCnaKqW5LMWxbHMXNNya2ytRwn8tCaXQMAJfzoGGci8QhJZLB16mzVB",
  "key29": "3heHRPFMkETg7rFdgRFwK8VA97dELoZ6RLuxRsyf8fyNaZicRzBXHWBa5MYYmnnzsC5jv2xdNeJNihMPA5P9qfw1",
  "key30": "3wniwBi4E9j3MruFe5mfcDrakcqmYuoNXzjTxeuhgqut1a4CjBib75mdnHtokN6KTxABbniaGJy3X8ExpTB1nwcm",
  "key31": "4qPTwk4dDmv8mUaUBjXyooYyhht6Znt3uMiaU1GvEXKcP4jHDGktC5jan4aCqDCJbEXd2U56wuu2XrcSFmXmXusD",
  "key32": "59oUx8cTs5eWCnWdbGMbmcASFKa3ZiLinYU4acdBQcCJ4cGo8YTygJBX1PtiLVvngHCj6ozU5pMjiNvN4zkshsGf",
  "key33": "4wMi1gtiZ655MUNTPh32Es6jEPWve38WU2GJt4Yep9Ugao1ueDxd442NK1Bg7A2RN3YcRqSWCyDAiHy8KvbbFde5",
  "key34": "5jCVLFwX4srgFdTVg1QA2vBtoEnuhsstwBhbpu4aHasF2je9h5kGygRRTXCccQXNAYPvzw1DM3j6npwdJhx7AAhS",
  "key35": "3BRAcF1riABEFfugbctTTh91avXc2GFDRqhizHooo56VymLHAkqwnwfkLKWxm4EiNosGY5d8HKkSVdJNZqJQhMqR",
  "key36": "2oYdtNpfEiF4GKQhPgwr7VEKz86Qrd1y24EHvcaUVWgkPaMzBCG9vGN93Ca9PEijuGzSqtZ6qDBxL8sbdYZ6rEzD"
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
