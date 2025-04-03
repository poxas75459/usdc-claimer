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
    "58EnfVSVmKdMbmm5zcnqKhhFaqN1scBYQKh5XXMNFQRrWjwpaxyQVEcGfgL6ThJdZqqPrAysdnKetLxop3Eugx3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mnfdegCvahDCqEkHVGNit8jk5EHgq4GGPT7dwB5mxPKAomcURKQbMLwdvB6XrvTxUTDDKbnwVYtMHLaG6Ed1bgd",
  "key1": "4grjSEgAxJ2ayS1ZDdjXm3eydrdAYstpBm5wvB765edvUKRw7qQjQWdYy4XezXiMBLqSuFJ8VcEWRUa8sVa9NZeC",
  "key2": "x3my4qy9sdc6fyJo4v5LVSbHDjZavp7Aau4XdWcRzS35zzZvTF2QQeV9YMmgFuwu1XiAtyHrcPrFqH7f5SsUL6E",
  "key3": "3YpGg5EhK4k3vSYWhjPaUwKo3LsfmUXamv9GUNBAmMLVCFKmB2CzFTjNQ7maAkhLrkzFkZvU4ELHCwea8kQrXpdT",
  "key4": "3Hh81WnkCVYxiJbAmao4wMa5DBtMcyzj3iJEzYiNxMRiZFQr4RhNLyvH8fRcvbSGxGbtvYQVDWwJJhxhPdfuJjbb",
  "key5": "4H2DhvyUcSA3mPBATLMeHiDDMB7aUnNwNzwk8RekVdtWTiyDs3JHTG4oP2YBDMZDN4FdSz8BYH63Jpuzi4H94r9B",
  "key6": "2BxN1jrySyUcKg7ncjnQBdToTiXqVjvAjW8pQP3EdXzh8VoS9XEk99nYmbqTxnGZyq1yte7RpycccsrY6XRM8sjv",
  "key7": "v214HRw7owWiiF75sFoM9k5HLZ6F1L2heTUdZ5LiqoguWHddBUm7urHJz4Cji2WfxZBz8zuUGY6goTzkBmvKQfW",
  "key8": "o74KJFRhEHguxc582JnQUrurwW5o68rya9Wdp7SNFSkwuus862RQXsmPKj3bWKasF9dHAAPfSLdCSck3snxgxuw",
  "key9": "4eLQtAeWuSnYnHRswxcCxePo6FBFw74uLN62Pvy18f4pQLfD2R2RyefZkMAbdK8rwGmijcrNAg1Edn95ZHDg4XpK",
  "key10": "3CHJpFbd5uDxeNJ8bcBetutp4Evm9QBWwsnEhFh871e9NxzVz1htXoZP95EiLd7jxHkpc6LcLyoX3p5AeJu48FW3",
  "key11": "34wok4aGhpJRaieN5bZLhw1Ni2vxWuBs1gyvs5Yiy6j2yapUVaH3hNJo1ySRBWcwWAYX8DKDERSRz8EzPg5J8XTJ",
  "key12": "61w9viCWmfs7gDQJ1vRJAnc98uFtV3FvwA4uZv9nGJRQVjVjHq6w2WDq6kwacvThJMxg1ZkDGpHejTbWNo9UBF5g",
  "key13": "5XD6LmQfRa9funfkN1y43RbbsgrUu3xR1JtTsZBYQbDBZGMCqVj3k8CPWScju2g7SMd33j9z7xRKCqZ5oRABoSTx",
  "key14": "83hyHUe4k7caewTh8pT7L65B7dUyGwjhWq4J4ASQUKRxpVJtqVbBqA7m11VztK5kFoyPJ4ggBSEZqv51wtUYJz2",
  "key15": "4nJRmi9rbAvf3tBWMq8zJJ5M6VDWuG1R1LMBp8zkUh8vaaYktz25CGZvQ6LmrQDvFktHokJabak9fhDbZbJzSDVm",
  "key16": "33E6oSSQC6ttwTzBe344RgJeb4DdCvM1EKHsg99h15Yka7GSUVzaqf79dumkqBbYGbrk1mgzWgc1CxsT5F7kChCo",
  "key17": "3nVCDMWSpJSQDMsfAgrHmfYeHQgegw6jAFXk411WvKcgWVXhBDJk2Xy3FGHVmchyxTAjCqQPuQxvCdwYQyEYKpQF",
  "key18": "aSfMnHSP5vEaX49vgqYPD7AVWj7HfZPaadLNEtcaVTXm7N1M6FykoNkyxQXR15XGyS1v5PshEDUMBMpKyyfpREv",
  "key19": "4CoLBBSrmnq2iF5G6RF7toeirP8EtpdwMSfZASCW3yixRv7o11bttSfhPCeq5XEaDVi5z6uhZwmndTr8rCZ3NczQ",
  "key20": "35kBaUxr7ZirN8etUVEwxAgJv3UP2nAPCNgUdtEsUXo9QtQUeB5TPGq8GZSpHFgNaeoDHno5kgskSgPhBcZSdv9G",
  "key21": "Gz7AxQ8mFQfRhJxCHqf7u4R4XQxhVdrm55mFbwHtn33mzj51Ka1HkACxWh1gCwjWsrm4FTtbNuHNCmAEAnL9k2T",
  "key22": "BgvrQk84N8pGJqvwTvMZQHf6BcMpagK7pmdR8CRVf8tHqBB2gpowFoQULyUdq1nsQfgpyfQ4k1E4pnNcuiumqPU",
  "key23": "Co3DKrD9zC2C9GFGjp8eEs9DvNs6gZcPawC2udrf4sSBHjeE1sHfU2MckSTPN8c4T28snTsRXbZLQZBwE9fr7eo",
  "key24": "5uMDaHnGkUm5F7eS5MfqTKGbbjpvwhhCTQvmez4bLhxEq6TkcdwH1YDvCRD5Hgetyn8vTHBSTz2wfV53YPVrGptW",
  "key25": "2A2T6DmKbroUPMtKQJ4yZoxkTWcQbTWddrVd2z7TAgNRgwQaU7RGESAiMeTRNVncMC6qFazVzCdZThPygSBz6KAQ"
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
