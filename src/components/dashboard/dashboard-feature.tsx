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
    "5aqAqz7PLzcv7ETeac8p8zJo2BEt7mUZeAxoje2GsaPtQEc4D8eaMZEp1XQbUoRavx9bjMsyzGFvuki4sC6hJKLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eSc4cFwMDnwWLmiij5UfdJkiYhvdoGcdChnAF26AnBgsLB2BS64DMZoeihQHfB6QS6cWeTQ5K8o9A2cT4cZLq6W",
  "key1": "P7qGvC5Lr1PE6ddrHpy7WZP4Z6ziNnihcNxFtwtURmNoNUTFeenjM3km8CMHf9yEmczyrYCdAnf2ptRaHDSR1R4",
  "key2": "2u6zwCeAoQBoZM4EBFkuUmTv3KC2M5zCEHx9PVJwYqNeAuP8bxxAVFMEueCpMdS3kYb6M1YPWp5RTsX5mQje7z8J",
  "key3": "2RtJdDzdwAh7fBZj1cPnTNQMcgFBSq8n8z18h96CArcGJpGmTLssWw2tgK8KjP79BispDeLoza9zES6tXy3MWVbQ",
  "key4": "2vqfJY3ZXdFMLsPJXxWHMtQFPAh4g7t9PKH6HjWpnu9445SyfB7eNvVvL5MZvjDBNbzd1w1A6YJA44XwCig4XVd7",
  "key5": "41SrpRz3ECvL7vZqA1QrfcAcQMtxpsNMWQYpvHa5HqysP8u8Zx2krwnQm52JFwaA5PtpjT9Qo183NpTKSGiioZH2",
  "key6": "51RTMRk1xHMt1A2KspvGficqTRmuHLDegJE5DNL6ECn6SAieGnoNDD6q5YmQMo9RSSg3SbTAsb24wGjv558fUM4v",
  "key7": "3qMPTDkN5r9C4PJ6NqpaqeuXnazC2rt9BhaNqyhzYZaNQ9jwhmwLZ9bW8W64iVTjCP3WuXwuHDF96zy9jPSGGqP9",
  "key8": "3WHTCVPVMwVDzWhS9TrTx1x1gHFqoqT7vTZ8ZLfQupJX2W3PPhNyusyCp3493ioVekQ4BvqzwxUoDJy2UE32jkQq",
  "key9": "4ZJpM5KZqpjKEHzCj6HK2xD6pVNhJktihc4pJtxxd1Xwc6efALbGxnW6CJ73Qh4qB9P2bZYVA8eWhHmUm9nt6jf8",
  "key10": "2nJ8M596thRE1qJgtwoZeQcvvNh8EgUEyQHH72E7QPRZ2Z5VSv6WcjyTVKUaivZjU6LZKjCCCj3KU5X8K78fqvU5",
  "key11": "5FGBEYXaTuufKwiY32XTStxbuij1sV5p1jG3WaR3rdQiXKMXk6w5NiE4Uyrm6fUwQrtM8EgywBPDPBnkx1yiaKXC",
  "key12": "3xowCWtLMWTRAG7ueCittwDWzd4K7pJPc5aAAer4tSv7CyeAW52gc64GeZpeyRdhUcH71wixvH8nBhEszQ8nciRg",
  "key13": "2bkNRC8TTBTaTmFFQKuN32cBL7QwnTaXJvh2WSx1bWLw95o4jXVjzTarDSag8UjwYA3cZLG36ZM48KJCusJ9PRAH",
  "key14": "2dkPD5m7DuwzbehKsufZeSr5AVec6Gg5DHqXjtpBjbWtNGBbmoLDKrYt5kkzn58wfRWrGG43T7FePeeippVwZWwd",
  "key15": "65kHJn4DGBzE48JB4BigyLg6AAE3sHiVuyjdrDZH1hmnQnB49qi9Etj8ZVshkZzrGz6Np7Tq9SSU1DWRZprwvBUy",
  "key16": "2w4CN4LG8MaNr3x8c2jCZLxa9ytEt78yZCSD2xC64vcz9pca7Se7pdqkanNbpnJGVyzUtE2DvJnYXBhJ24x6rrsF",
  "key17": "2aCFTRWm1c8EK3LkZvBodQwgA9xqub24zkPBVT71TpMyPCy4CKZZfoyY1G8oqXoyPpijYZaY3CU67hDD7HKGVM7H",
  "key18": "2RSLwDpqzy84uE6C4RdUZn2cTfEsv5GSX1aoDTYMFtddRP1JxPkN9aC2dZcrxRsfhXPKFoRr5ndqCn74FNDJwpdn",
  "key19": "2qAiCE1iLzAkPYNeNPnSUwdFArjpWAytzVuJfUHbuwncWVAXneupRjFDUsd4QSMrN3tmHe61BPhDnm8d8GQRUZhE",
  "key20": "4aypL2ffdx8kcEQiYoi4E1myJLH6oLoTThVC8cx2Yg5svDdFAhVTGrQ3phWN7hGtNS9izsytKTky4iqfKCUSoqvY",
  "key21": "5ZZiJqesW4wovQmApaQhYLJke1jCUMCdRJmzpCpFQpQjve8NEw36MrwvVPxqP7UhTwJiu9ZcVzxWu3xKeH5b7Foh",
  "key22": "5M6jpxktWZrxVrcP6SsWJkLRsMR8vBnULh3bhoWTovenQynu6ot2BtGAvZB3f7BBL17uYbqB8mJAf7CSiq14aDUx",
  "key23": "rxJpCTsN7tmAvwNh9W6PKrUPQeQbJHbjJ6DxvWvCqPtkzWp25LksAPKpYUzQhboMmAfA7mnybhds9NESEdTAwV1",
  "key24": "4QEqUJpSXS2D8mFDzFyGiSDvVpY3WoXX9SwKBGANdBfYV3DET8PMUNz2J4y5srkuTxpis6GJJStgeQT65Su2Crb6",
  "key25": "zJxG8132Wiu3XSEkAPUtoWo36L6hWx5SYxmtG2iVwwedqjS4ii2DzyuiGoFmyDyarzo5Ui6JpacDGVu17YMxez1",
  "key26": "3VeP6p1xnePnACSi57McBK2qABXC2ydW2RFMSYVGuQbFjwMC4dUiQT3RBaMKhEsXuXoZaiKi5qceyyvYmn5BUbAr",
  "key27": "4SYjUUW83PXrRchjuFuzkgXTyDDawXSA1Qdi5rk6ULr3Fk1M1fK37aQV5k37g1Y5h53e1Qw8MAK568q1Es49teEp",
  "key28": "45hntiSd3gCYs5HDr9EmR1MMMGxdeBoaMwZcketXxJKoH4meW1GgE5mASP6i97Fh1eKXrWgRU6G8gzNuktzcQTfh"
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
