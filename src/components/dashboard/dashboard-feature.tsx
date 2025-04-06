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
    "41fo9x9vUVW6RAG5aTx1qJ3GDeZHCZBdCmcWDrD2ffs5x1LN9yk4zy4y8RewdstqVHmVtwTzf4Vku8jBxQfxrTfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26e5tob17zDs5EwAHy42375R7PisHJib3ptQCuJpoUh3wwpprMvQs8we6jqajorTdhrJtoimhrBvVMnZuAkx5rTn",
  "key1": "5inaxqH2Hoqv6oEeTAjJ7nNEY2MMkNJawFKu7qmytU6DRbxiagY9mqenU7FnBAH9XYBwEyNpdF5phRLY3UEBM3Rr",
  "key2": "3KUw3Bnz3WtvpbdqNykdwg2kYLiP7vZeRg2mjyAU4RhQJ5ZNb6NR1LBg16Ubhi6kEYnYhB7qEtMqwFz79uArcxX4",
  "key3": "vhgAfyaJNrh6LFgoZpXt4nquXpzdgawLnX2cMe5uQR4a7siGaSDnyyshL5K3a4MqXozZQh227d93UQ8RX2pEPMt",
  "key4": "4GsQNfQJ4haRTHMEgAeG2YTud6TdbDZibmsD218c1r9UC6Eipa9Cx8inPY1RpPPvdN7nkLs6KXRUznSuik4vUcRw",
  "key5": "2iRdMLiq11iSkhVwfTHqGsAFCSi3xf2L3HAxecAQ8SNuoVmXZ5wzkJDUH9aMwHsYU8At6fLVJmVwX6EjE5Padxqo",
  "key6": "2GJaAiWemxYz4i1ANf9gkhnWnoke4yWHTLwaa3ymUw9SNbdt6vQZiyDi8pPQnEHKF9kRBnRjnh489hz75kshsJ85",
  "key7": "3NNvg75v2yeB2xhDPDtqfYYykZvQfrT7jJfTunv6Dcr2QVKdru5EU1ZdZCN2beDpftuYEJoQacEnzV4cywf3R6A6",
  "key8": "48Yiq36ujJXFMiHqTJCuyu7vid3Gu5yA2sL53UCzEaX8wJw64TeijSwWi91JwsgE3KsFJZ3wMNGFUbjwpQ4HRpf3",
  "key9": "5nvAqaZg3rLSjzgsYtm65Hj15ESfTqVBrkrcgdJCELrwqREAjuRj5H59w6eqKGw9w3QoVUc3RS5iSwjKHrAooA1S",
  "key10": "5DjAAT6Hxb5wmpMoVxNoTRGpkevYijxKLatk2Rd1r9kgQDTxU9HCifr6gerxFfXXvB7P2G3nDVmyPiBkNPR4qDaD",
  "key11": "4Wajkra8auqnUWeiCpcoaiDoheuAn3UzT5zXmPu131MWERmRPuyrhYZkJs9bCoY4YDbK3F7anCStXRXEVEEYxRMS",
  "key12": "362aSaj6DHcac6SYmnjDBih4puEn65XwLoPHbVWveapJnJcbL9YRDbURXQ6Hpika7Euq4oiBbTRY5ZeZUsk4pje2",
  "key13": "4btJvcn8SR5cN3A3HLYjVmhgdveHKWgUBYAa9xXp21iTLouxGRnnar5R6BPwKzqYspsHaBcnAYvtMXy3bsxKTvGo",
  "key14": "3VwpeYP41osjmogepnVdR49w78JwsArcbdpGRTJjWsjyGGjdyQYp2WJkm3TrWALRoAEeWCHaTvb9zv96GqpWaGHG",
  "key15": "tkxpunBkZV1iAoG3y4i5JHRNgBY7ZWXpp6Jx1Ndrax66ov75chAqvSxgc2esc2KSWCG3pMLMdwbkMcQr69dawoq",
  "key16": "2AfVmENtXcUvoMkhc7aRjLe6r53qpp9LjarBmdLhSvjXPc6jRKXVY5oiA4P3B9rf6x3Fn8deYV1tAxH5HMBVbReM",
  "key17": "pUYvws23g8Q7tenCroJvieYaoWuZCU7P8PtULec8Ez6bCNZ5AnKGZVQbvUSrPJEUSFC6JbiFqKEq1PTxJHZ7ztF",
  "key18": "2fUJ94N1MZWC9aRvChcQuD8sTRmag89kQyQg9dMUHp5vpPV42e5HVx9PTLSp6fwncBsv5HVsFkK146pAhsJpvaNP",
  "key19": "94FKXauB7wSYuqQBkpsP1CaP126CM1AYnZUA7XfMehxrxRqCMbSDidUAMb5x3ziLnwPVeAvoMUVog5THupLEHeF",
  "key20": "2y7HToBWUY41wWhDtbGqNWG9GqEYjpwwBCy8fucwXS5uF7nUL3ssiejD8SABfg8KvmfaLCP7F8gmEvMHTdeUXuej",
  "key21": "iW6QTrY3E8iggEH4JN13QR2QBDvQ7Mz2QzGvyNXgmuBFnyTmBVz7wsMUvXJx4SioM7vtPgt9wEtZLDn9V8X7VVj",
  "key22": "6bUB6pqctLhZU9XdLhtvzop4oAcNjrRZqBBnuMyno6q4YP16dbrTiQtRwkz4WQyB1LcEchVcU4CnLbSaiKbKyUo",
  "key23": "4nueU3rq7HPYXNy1qV8fDZbmS9NbAw7gsa2DVs5GV5th5y6tDf6UpgpRmqKCFUFZVyu1LmVK4czmuCZiN556mRq",
  "key24": "Te7y8QRNHCdnu8wiZ9soa6RJiWR9EpTTG27oE9qsZkbKBAcpKXtBhqzptbjvmTtEyZHXChmNLYhyvMdXr173WgT",
  "key25": "zpwTypW5sdVnQ43dcSy9NfjyfdDvpNun2N2GcfpovrwXLLEC7r37giUJ3eaHjsUradAqWxRSfwYwY6fTP6GhRGZ",
  "key26": "2K1oMQmRywG4LF9gLgJk7hNuDm2pxubTKP35NcrnTzKePjV1RErASNhnfbnpKwUaqtQTd5EthEadnyAjvDwFe4PA",
  "key27": "24nMXAC77Brdzb7sjam4aGUD4cMKQY98XtMu7ieoPocGu5d1Dy4RHxDN4Rj7C73rAyp3MjGNUJh4AJQwTSKwQ9xn",
  "key28": "4FqaqaHsxgxsuUdBiMwv2kqsNHXxcRNHNAAtnpiz8cEUucZvTyq5pCQziH6YdMGTnWsX7hTuWMZwENB3Ai6yHaRU",
  "key29": "57kozBoNe9qP3oqSqyHrKjThKXNc4qdqoE3cRXdCBquaKXnjRuzRedZJ1EywMPB2Q58sPA6sT1VZneFFXJj51Gtk"
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
