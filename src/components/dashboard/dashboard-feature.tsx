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
    "zWNcZW3WhefDTcErdyzh1SY445X6XVcphzMe8yE8UeAPsw4YqtZ8tZvmfNCEX3RAbrDyQxEwWozt2ewWKuxCtX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D2BcpbLfy1wysVS5LvgrWPJyrDdhok18mHYZn1iEdW3RqGfN3jCixGVMXRtgrLrV9d9imE6aWFCpsBzdeLCfQwr",
  "key1": "4FcwZs7dr5st3bTQGdD8ApfMHbYniEisrb8twTNbpwrZHL7BmB63zzy6vpmPPFgUohkrBqr1UfdrVbJvapmzpdg7",
  "key2": "5Qd4vsYYo2bQ5RGbvh14pLbNPaqsQhwgqMkox8v1sovLZz6FPF2V5MPgCqRRgX9e49RfiV9PWD54kDMhzba5FiQ9",
  "key3": "48khtYF58byuA3jKtf8yUK9koPUe9aAQyEpjvf19C9R8nXWjMvEbAqbSsfZRrcvN3LPw5G882cH4SW7cJwoV9mLi",
  "key4": "4JFCrEzyUSLkCLfcuFN65RrDHgbBnJgcTLcoWjoYfXeWfvgNF65v2d3qHF6C7H9SswzNVYX2zRzHNWXhRPisTgFe",
  "key5": "273Fc9kFjob46wCbvnKLq4MVdSo72A2VRGFz9V4PHRZYLc27VhzL743D3JP2YMBg4GibHnqxQhCyA4vRZoiytsBg",
  "key6": "2rSswCWG61FkzjV8bZKVsAtjSrbkyYQLHTM2Y2gQhkjZ6ugf5AKafDc9xPYzgsqhwPmALJHWsrbv7SKuHfZPbci4",
  "key7": "3oMMBnEW4J3MafNmQV4uzCaPAVR8tyBRUdEMTC5PkAndu6BGxqnth4mLMCNziCNQu5AJDpJ3uhzBtfdgUhAiHKgm",
  "key8": "27pZqBAMnGd1wWTqhQDmEg7GjfVQGtTVYWbkfLiFetKhiD1XUbuDcc9yyQeN8EN3TUQE6wtS9w63PX2pcJXDA6hv",
  "key9": "21jqY5H12niYCQHnAxpWu7YjQoJ5KrMiKkzbU3bnTqnSqhd6JLfK6GwXSx7LiyNzUg4D9WndJ4c3yUaHpsthZx9D",
  "key10": "4qVVEVFCzCHenkGvXuev34Jz4tBfuiW61hvR2hNp1ZWXXWgBQ5dDCzjPLxrRK6m6m9U6jeszYfrbPLBukCzA7ysM",
  "key11": "5fjN2c538vELgynudb76DuuCKz6kDJTDYZb8GPBPEQtVtbpP9iMaiE9W7NH8bvJQENjsG6KTHybm4tXzQRsz4sMU",
  "key12": "2iW6jg9BrJ2L6oenRx4uRqqbBWV5c37CXDs4oJ33UbJmx4SpbnWS14ZSaBnoP3RaUWoY9gjgFAog2kEqQ6GkUAuz",
  "key13": "3dm6HZ3t5S3qdHimNEWjhRtLqNMoFCyRCktBzaVJ9ANZCtH4P6LrwzU7YuKRN1pWqtqcUR7UqgNLLMkYCfbFS9eb",
  "key14": "7aDWmqSyQHidNqQ2uLX9KC8hp73g1pgaZJ8Tz2QgFQbTwXQRAspHetJRNVaZ8duM1RLHbxaCcPLKXfzNGNQ7pko",
  "key15": "5NRKK35NfmEdeuojf3E5rSV6QVaENZpMu6rtXot9iLiNPHBpjgtERAuhDunqHvERUgCbDwx6muUhGDZTuS6kipCA",
  "key16": "TG7uUkbxzxtnZrjc7Xvzod16RfeC8BeT3nakis6gmtoABkN7jWeKchPtKn9Ztf4Jq4BY3k3RkSrGtSo9BS2PpRT",
  "key17": "4nbyqnnHC1M4mUDfs4fmGu8mpS3PkeoTEFgu5gvbGbDurMQVzYXcRSJLLYM9vyqujVC1etKYmaTy3TxVeDJHvKQo",
  "key18": "581XgkDk5tRMjkUd1vLnh63HUxZZXWitxAu3hYjhY6cGfS35sCxpy3QmY8py4STMKySE7p9kwsxvvtSacs91ywim",
  "key19": "55bcGuoKvvWxGikP3W3pV7J4XidaB2B96QrSpoJnTPFicZsdg6UXRvp9NNfKMxCC3NeVvycWdHcLbHpe2zKt84NT",
  "key20": "9eYVVqqAgbyy5UDj6FkDtL7S7KxN4nkgqVpuPGzeAmJxFK8nayQudyahAUWYpZZt7eboPWx6xsfsXzhhpzAaNzq",
  "key21": "2XfQ36Xz7SKGEch8BFpdCG5pCTyjYj6t98FXs4Q4BiGjKkqtFW3ZvkGe6Kx2tKwtcDPJGgTEcv6Eay1AmPJ1BtXP",
  "key22": "2oFiCFXdDsY2GBPpHPLL7eEaMc2npFQ6RLczH7s1ac1QzML6YGvn6GgR48zzPRG6n2AFB35KNS1GaTUB6Yhk1yJz",
  "key23": "5QthvEq4QiudAMu9xqCtrjcWkERw62hPMfuvrVexnfdwW42TgfjoGNpiyJ2J6j5EDcMTLF5PfpmyUDyPTTy77TEY",
  "key24": "3yfoKeTbAUGWc6bgS9qM4PRPnuXrB3A68rguZVuYNJ7BAwme4YfRgFwEKVubKJ6Nz1GJ9k9YkUzGZQSYBmXVdmZe",
  "key25": "2WP8X6FkSQJJGokWWqzJShyukhqnYKVMaxcdCRWLLHrUKM5nYfQjfg5ACZTTKBUa7kAKikBzGHzbnE6pGpNp8XLo"
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
