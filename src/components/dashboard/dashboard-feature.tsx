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
    "5hjZAdHz44XBzWRxtkS148XaL6xbduiMsFoToBTvtn9RLi5XQxAJWc5hBiFWBH7qAuWBgfnCPJuve53W7vs7zx7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kMURA9yCN738zfCLtpCaKmjWkquQ5uVRXK4zXKLU9smX3n7e6AUSTKXum6L3ymZN93u3nsbqek6JA8zWAFEc5Gh",
  "key1": "3pTu37sBLbj8z2w9LC2V4tsNC74EozSNfsDaVjddfW4m8BrMcWPeypUyLmYbsi93xf5RQUXBxUKwaeo4tQaPJVmX",
  "key2": "4s4tDCRX4uVT1oyB519ScfTWEamx2fVMjUdyDJUHdPiUfq27PnXHrAoDS51tNyzgu3a89NgRN5xHRkXcxfJ5B2w",
  "key3": "h1t81YmHuRd3TXjDMBTFU37Qx5iC8sMLHbUjPvbRqeVBeGcgpLVr1Dpyp9BZXeopvXoeDxNjkPBWMbg9mnPHARe",
  "key4": "4ob3gyPGrU99tdhQe3Q6PPZAAbGjbhaAbVDR6fEATSpBt7rmcqY13kzh4kmgp9vwUauYEFKt3VobQT6HXga4gYji",
  "key5": "5h11RD9Y5kQ6TKTusgwSZyqPFeSwFmxoiZ8mos2jxfxm2BfYSz7t89bvzMQsigQY9MtL1ZERvwxy2N1aSviSdAXu",
  "key6": "3qH8QCwNh1SfsoQPYJaVAippCN52sbZEymyezXNeeq6cx44Qu8AtbqpvTCL48viDfiYEfsZr5rcfB4VWXNpGbEPF",
  "key7": "296inpbvCz7d4Awjd2xRmgpzSUvP1k4K1Cm5ERAnK5wDASSZnuf2TmSyovArVmEMFHXcz2o6XiBJNSGxhicYaha7",
  "key8": "4GG8ukctVCp4gA4rsAQvYe6JDUTePnjjsAmeCf9oENXP4hyZzKtcZkiCVaBLz56XyQHv1Xy1y2jXkbLifVDtMop",
  "key9": "DRNv2Eby5PGNNFEsfroAsh1djjFFN2TmWqTVEXpfLoKTMfEU2guMsVRwjcZB5AabhR7hfo9MCMfsRo9mFMNBM4C",
  "key10": "3VK1huf2yQdxnfRvPmFEFwkoDak83VYWcQEp1DH3j6cukPnJoBVaJB2mT9rC6cJfALfZXuNpUD6yHSdbTqE39UdG",
  "key11": "4RAdjYCR7etTBNCQUwJF59HkoUaoscEgN1jWssKZ3dGhBz9WRqgYqAVDKXoaC54ibZFYjuu9q7Eg1qvZDsUo5Yji",
  "key12": "3Wjvo3AVBvf9Syk1s69W2T6D4krVyfzsWJzKwuemLVQPrLBbNrheGWhRcXuULsrT77ZCMpvdgWSCSP3P72YT1FPE",
  "key13": "45grMVWpm5W4iNXrhKmUF7X3fdSRn9chXguHfErD8vgrTe8dk3kDGdrAyNwvHN9ZPeAosLnNBZszvn9ojXtEXDUz",
  "key14": "2bgBjgdUvzAiXwppxXECFH9jG1avYa8AissnKnouSQELpZtMaEXJuz2knZNf1qXd3LvUxVjtbHcXgEtsXf2Fjtrq",
  "key15": "hmxjDvu2RHV2hhuutCD3ET2q3PSPQMFpyQQbW3Ao1kmePYugdcy7cs1Rngns9wxJGpEkGyXhZ8wXWuzYbd8DJoZ",
  "key16": "426jJNVMpjfy3yJd78f8oSco6EsbXtbqUr5dqfvpayc8NpVyEjkCJFdgWpXFsdpTYdGMX1rnTE94SjofQJR3xrMu",
  "key17": "HuCEuYWBScbkfJRpdwcuWC1vrAk6hM1KgSyyA3CGFZbA7btGhXmJW7pGq34FdRjsZRCp4J22tye6ZG1eVuBFNza",
  "key18": "LicnXakRTtxnBLDw6u35UM7Nwm73MjtTpdkY9Txab2WZQALE3wBFvpLHGtkF6ZvvvjLQab3QFBiWxyW4AEiLf27",
  "key19": "5ZFyM9xq14ggqqfTYAzVqGG3BX1oQGErx3cDcAPhSZBeD4Fe1LZd6YKZXcpup6qiai8L4yxn2txJhwXWFECg9152",
  "key20": "4J2jTuc2KJhpoNzhRDtHbzJoKGBeYjaX8XmQ2xEPoE8w59BAjKLS9YMAxEVn3oBhsi2iFhiSp2Dm3Wwkd3ZTRTr7",
  "key21": "3BCatheanQqVx3HTs1fn7qRFtYyBQMSfwD2zpig4sVdJq5SgQGJYnJLZYC1CQV4HZzQBVjJJYWPaGEtfve7bEP23",
  "key22": "2ewnjEuP9PwCEAN8iVvZwR3jQS2qLekxqVasG3BpUyCwjWzmKmRbf3ikHmzKyS75qJuM7jcw3SCNS4CEvbprSLBh",
  "key23": "3S1g48p7Tzu4jw2s9Jymt7QZvX8RmzvGPnUbduwp3FSuHa8nmWxqqVWc3XSf4LYDZGz6rphvDAWFLcYSby28nWT4",
  "key24": "25VBJM585dM66Ar2wiS2H15Mf3GVNjLYLMBX96svZEGxiqhRxMMaNh14F7ATYerSvQ6vkjUZ2WQXzTdJ48Rbp5s5",
  "key25": "5DHJdf9QstzSKmEAKFKcuiCDQEFVaYB8KkHrTQEZABBdXFmzeabRx6K7r7n2oob37zFo4kP1yKDq9pLZLPMDLf9N",
  "key26": "AVEJ2fJkQ2n4x3F9h1k3TBJaWVUAVVc3WUEUxkWDSu8mEtg1dpY2Q4bcxAY63be9Ceqqb3dNbGgLshJrWacQwUe",
  "key27": "51uUwuXotwjkRrnDZHMCjHM9GKkcmvkvScdnh1v8NGQy58tkWtQokt79mydmJPDdmaRwr2fF2Uu7xBWKFRjrBF4P",
  "key28": "5NGdeC47z9cueB6qtJCuET1vwtrihwbT81X1x878Jbf8ZdpTW33TH57yuDfLz8mqFHsqsCXzQcQH8GWGQ39FNqRE"
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
