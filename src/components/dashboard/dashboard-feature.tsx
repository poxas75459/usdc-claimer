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
    "psRhzMZvkRC5gFgjk1KvSnbfoSeFXsQ83wZfP5PCiMU8HKwwEyyDrjcYScEdsG1ZACSFfWByQEwD5cHRDstP1QC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qXFX4aPo8PGD9ZpUgf7khhuJj8a395TchHZ3iwwkcYsnT8pmtkpnVRHRjdcphAwxMDfXKwQq761YVEPgVrK8DMy",
  "key1": "2hyybEgPyvnkqySZGzdaqbrnPmKm2AJeAZD7e941aW2ppmy5ajJuhyLrLqrYrfoWbRP8caLP1KHmdmhEc8KS9h7k",
  "key2": "o99gB3ai2USkF8HSsddMkc6xVM8R3aMknAVvAgtT5Qs8qmEqwVJjwwpxChnrHxfwUtSpZg9SL6naKMqM2HZXqca",
  "key3": "2QtkY71RETRBYX7H9QGFoZZGqx9kdiDN8ZzTueeXJBkFN4nxAVUefg4gev8AHNfViJ5XffuBajMXHRnvUFYi7PBR",
  "key4": "664HGv96b2ZHZx9jV9ipi8a1FvB53h1mbFCmdcCujtLVgTvoohSvZGV5wKnRHJRrZmRkCp7d6DyBKEhcpuGqC6Ck",
  "key5": "nGRFwEfmKYTWTph364YSug681qDM3E8Lq4LCezRAigrPDyCDkiZESTh3GntoEKdCEiLaP4aHNQREhNfBP5T29Qt",
  "key6": "5vEtYupnpYYxSnzKdTW6JAzR5Xs5Fxy1x8D7VXeeQS1mEeBc19VV2aASnYttTESEzwu8ieoVUfbY79jNxnbGuzSg",
  "key7": "4D6UhPkCVdgDptD3NUNf7tu6aQpFxxKH2s6K8FUHDMyT39ZqWEawYj8zHkf74ZpEE5DiPU6bL9UX5rXJ2eYQ2F5f",
  "key8": "5AbaP7X9dpZKQ3PuKdUrY3FpCBHQaVpxviqx9fRGzg9YrMnJB2euBZYrfqWM4bcL54PFmnsSqVeNPFLFV7EhQWMK",
  "key9": "4GYPSoYxiWUWeKDNy3AEhnA9UNjGr781a5QYnpJt7X65obPDmhehicddaYC2sZhQFKpz2hnkiD5wkqj2K6ASscPr",
  "key10": "44iuowqWHqLDwF2KZURQyH1JMPWuUajfNo3uPcWtB9tLomhzecm27GpJYe6mLpUn2TZgjunxsj9BuTx6GpL74rp3",
  "key11": "2429AH5vbgXs21rqUhb6xvCu7bBcJSj2mVvy8UmgEZ25H9QsJ8N9cFmcu68U77XCBdCcXAwP8U4H31wgv7P6qbum",
  "key12": "3z3zsJqk7WfDKr7U7Wnb2cPXQ6krd9hqc46U61fDRjCmkgjjF749S2T3u6oxz6J6xc62wCHL3iybQCxU2bZ1VHVy",
  "key13": "3JFYXx5DJNwswbFtHfxefevvqDJNPQweEbojgYh2DhA1BjS4aETitTS2kC5qSa4LrWxsnwFyNdixhKRVHhAi7LYy",
  "key14": "3NGYt818MEYxPH1NcDZFAEWqfakyrZnijwHX9tsBBg8LPDHhqxMLgPYYXPcK8R52PfNS3Kp6Nw3eHM39cGxULtuZ",
  "key15": "2ZbbFnDaGCzv1G3atcJLmxLS6JyeExsaBUqdxLaifeonJnHncGGFtpCAPV8HVCq28a1AcJpEcTzF4gHRTNBPHyZi",
  "key16": "5UbtDQcNe2UaD2zZHdH1S8EbCmB7kGXioENjTibTWNefQU1pvjEJbBL5p72oVBPHnx9KM3SNjcd6nBdKo8LmaQrn",
  "key17": "aKx4gFg48enLaXdVtkUgjTTLg9ELXp8TrxGgPXmiGZHiypUiLUgnorH1PSevrp9AqpRN6R3YFoCWjsZPbRRkyBX",
  "key18": "3Ty4TBVfqYkcekX91Lqao7eidqfNDoeoSDXFXvPBGVAULkXGWLaPgEtyLKc6ToQFG8PRy9GYQSD7Nztupf3gBt9p",
  "key19": "3EGDa9vi5bTbhXXY7t4RQGFhrMtvRaRpj8kgTAjC48gu9aLHizE3rebWLbWUfSraS19m5cJ3Fw1GG4La1jstjMdY",
  "key20": "55qskZaTubEFCBLLzTApozkzt9n4FJwyswakqAos8ww5A2BfWsY1QvzfoQ4jCBYMDTLfNeyFRa4KA4GVVQGMA4HW",
  "key21": "31g61c6eLm17wwMEBvYE1Qrs95mT28U21JRUd9het9xqqo3xnyFtkQ3oL6U1b7PZqZsfmSXbrvKTMUByrKAPGXdS",
  "key22": "4yj7nHnV24X1fmLaoUWp4CpDAXD6uXvUXQo6qiFyWMcNBz6hQPMzWdFx3h1etcTNP2YGgFa1DvjrRCgDs1rRnq72",
  "key23": "2CBZWggvmuWyDbjc4J8Yt1VFU86YoECCNV42qH9de32Cy2ZMh6tojsWqbH8Qxje3whHYQn8V3QqHCqRTk1pC9AxN",
  "key24": "5EvR2GFemf3ExfhC75a57e6jhDiPzfC5fUQh4KmeNcMSs7FnJ3xAFvzAzJJEHSe8iG7CjEHervZNuygPHugR4MkV",
  "key25": "H89KxJ6PWckXvoYZYfy82TLPUozfwHnWx2jKbgTbkNjr56WZ9Cuo3PKmz2CULnDzjC6M8Q8YbFE4YN2pqVBUkXq",
  "key26": "3kswUWZVvFfJUHwTpL1ReViZEaDM4iBgsnfb4VXf24hT5UaWQmdbjWpF1sEodonuD3NZsh23kX8WnQUxCeUHiD26",
  "key27": "4Z57pYticH1VuHMKyNP4XADDcUhdXEyLbhWcSGNNNkq5kGXHoSNkjRVC7mvXkimEH9Nt9RjNVcfs5guRknTgLxCJ",
  "key28": "4yNvhumL4YRZgn5wv6N7AyavAQJYS11yLtEU43Vm9VpixzWpPvcNHXQS8U96jiw7RUqBtQGUy5sHTRBo988XaZmK",
  "key29": "3knj3J8hEdLorT56u3YzAq3WjVshHJSEky5C9UvNwVduinqT9SFzLbP14fE3WUjVTEdeutGq3pGpyKvkwebRSRtb",
  "key30": "5gqA4zykY9djAUgKjGm6Sz1q4pg8oULVgYdpdPJWqVpf2xrTieNgFA7GxnaWA3tuG75Pz8FRzZH6HCD2hkdFTB2k",
  "key31": "c4oo9n1zUZ3fPhXiCh9vkP3NimanKcYhyeA54PHGnNec1hg8LmaFozWzzEeU5a4vnmFHGct3DKLFmXvhQYwypnY",
  "key32": "xbZN2QjX4x3QTZGAEVVbJUJfY4HLFKuLRJ9PpPF6saiDyUP35CE6Bs2Ln78vyydv9vggww7fxfPa7v1xrp2TNnk",
  "key33": "2ouiDWfzuz4NCQL6uh4574cFpSRSg2GwZ465aRSx9Dapd4WUqHaeY2fGnyLQmR334EPpSkToCTrV3E2eWHRLYTZQ",
  "key34": "5KowptxCghBs8uNod5d72YWh15MtWNXJj8SvYneu3W41dokA54EtN41B9kAnuxq9r3xUjFgkY5dXiW6mezBBbA6D",
  "key35": "3WAndaYjprCB7ufEgbS3ixf4gKJEJhiXUzYFyPr9HrnATUzy9xaJaKCTFTx31xRbfedBL97rfTKumT4tTViTphdV",
  "key36": "2iqPVapPipEU4zm2o8UUH5oqnxNZ38AFqnHk84LRw96z7SLGu6whKHSHnN1UrgfmoaMDyDfH9gJVDySTDLsMaac6",
  "key37": "49Qnoh7gR9DwSL5ni3mofDh1CEaDTJ6HNFrvFUFdHCZWKQKpHA6oir9sKhu3gB6x9L8QiDa3kbYv2SgaS9bmJbkS",
  "key38": "4S5zurnfCK9LRnwLMHtb7XCiAdC9WdxzzyCfMVX8EyL88f65VsD73Bidzsoq1reQgPcWGtwHb95ZXKiEYQ7ifDyC",
  "key39": "4ctS6xfdLqYGifuEFpGDAuds1J3C6c7ifkKLTr657LBryDdx9wMCoK6mXKsNd3A7v5GfTGwDWup6kQqpVGDEQybo",
  "key40": "4VgNERNnB7VsSfQR5Nd6DdaMZzos4jCwhWbRWUrMqo8wjVWJjXvqLJDduM9qGHv2Mmtf4ktRGkkVTPLb5RSuFfHT",
  "key41": "2fmnTYAKftk79hYS6oVDDqkw66kGQrFwxMp8soNpZda4wUGgXNZBNtTLgMDMYqoUiCU6C5oScRw2WjkQCtBmmPvG",
  "key42": "66CXH3BhoG38oY3B8jkwpGvMik9wNQB27DBfvKFne6FhjvWJqXpSNm1ajhSZdbmC6bZucpQMVFPT8aUg1DmLfLiR",
  "key43": "4DHycbcnUjh7xm6A19RQLdtTVxqoqQmXQus614Vx5xpdTiWSvhsPH411DT1Bq6eP8oc7wowu6HdKHqaa1862SY9K",
  "key44": "31eZFHx2b8Qx14tXdBrb4PwjZtaq4Nj5wgbsfmq6CjG7oEeANomsGo3FJzneLXECJjR44WwPLnTXHTphj4mzSLgh",
  "key45": "3yTrDGEks1uUpz8HjbiMPq4nFCWukvnupue1BFtoMPo9VXmrjUj45a6dLhW2B1NY9j8rgfFCywe9DxVs1orGBGPP",
  "key46": "orRHS2MMhkBNXTtTQJ9szGZgdy8oU5LRunHgnmZVpWiHWfrH8JFtyQte2S3qgfLMADvkgvVkouDFqUx5iGJ931S",
  "key47": "2VWdctxjMYHdecVSzntKH9RRH892RVXoGXJ9MN77raPjFNti46pDzZTyKBVSt87BsVe96GjbnFTDgVtFZRUbCS2B"
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
