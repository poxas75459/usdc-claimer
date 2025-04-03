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
    "Fn8qj8sV7KKX7pnCEtGWL2bA4dG3bP88r6oSzdaoLLFiYWcu3n7sbNVf9KByZYP6xjugwqviDNxZe1zZKycbCgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CdzS41nZxZRxXDP4cbAahnu1cavpNAFnagqp6ZHLT54k33FqupmkCKucQUwYjAsgFsKtxqLqe7KP5yxguHApePK",
  "key1": "2phyg4aM4ffm6GEhufoCJXbrrf9xLhLmNFveb5mDT7EVbQsNLadz16qvQv7Bz9wXkw7mGQBw6XPMPE4FwGWPZ3sR",
  "key2": "22vFawhs496c285n7r5y4rV235k9JVuRw2m8Soo1e1GdX8wzgW6ntgFGoASJ5nnK1BJ8Hwyh9L45ypa4q2dUwhpe",
  "key3": "2CtQjKi61bafQiBpDxVKuJ9x1uuCbZv59RnucLTstGGY8MdFX7qXXdBPuAfVhweTLTswQrKRRoNhFtraneSjUVxX",
  "key4": "5susi95VXwfetwKpkhKSPt4HwTjW2kqtcirDNdofgFv6eSvtxzcb3gXjbmA6MFzC1hRCpzLz2VUFaXv1KnqZ3WRk",
  "key5": "4uUp4KzGsns8FNeYJ2Cc2Qx1PPydAyzhuf6dZ88ER6D71zV2vZnSbJjXCoGCKgPPW6Bxjuoz8JQXL3tEULiw6Ca9",
  "key6": "NR5a3YHCfo34qPifpcnyjAYoBjLfoQECxQLjYzHFQHxkp4G1NZYEkQoBPpw9apMtMfRjxNYbCJhXH2gCRmsebsA",
  "key7": "4vh6UAiWYFKhNAtxg9kcv7e73XTaTu22EPCzrTdAXk2bfjLT3WtqRhHwXbUrQFdvmbZyF5dee47cBtKAsyqYuaB",
  "key8": "46FKnYyu7qs1NAbQqrQ3asyMTySJ1VrrpYM9HbcU55vf6TppEb4YohD51KJptpWwh1kVMEkqNT8JKEP6NdHsiFYM",
  "key9": "2YjZ7gsQf4Pb2yKnqa4QiAHgprmYqAq3d8exYfD5koYaVBeTh73y2ird6zrVdf54zo4yM8VknFYs44SeVSxWqee3",
  "key10": "4EWqFLAowoXJrTgt4qgvNg2zBmu5Tq44DhuhhUJUNKiwMSfLH8SdjwESmBA5vJEMNeAM7SHuzLEJp5yUnoaD5dHm",
  "key11": "3hmkrpRa3VR2x9CUKBZ1f1EGJWdCbkU1PXbo9vcrAMb4mgMPewktCtyyduf7ZrWLrkfEVnEDePRfYP3gGLFSwgCo",
  "key12": "5WQW4Wn6jJdPBLQZ6155TwFEHBm9y8dnViPzFnzCv74uRGq8ztQv3ecMf9iULVy4bRGcXpbCzCtSSCd52kU6a3Cr",
  "key13": "3g14fSAMU44S1bWnjLHo1GTbG3AstLWTJHJCvUqDWUGtKArNp4RkBq4hroc6MJYMwQ5yjynaJnow2QaExunGQCZ1",
  "key14": "2vmHYA8LDxW18RLaT4ePLBYzcMtKEspAwZJA9K42QQxB5cJsyuSLXxMHt5e18NzRQ4Rdcouzac8g7hFteDAERHSs",
  "key15": "2yfQhcpx8yUiFPeKswXcZcrpvMTuYUFy3zJnkrQYG7DYjT8XNyQRnjKKr7daiZsWfgeiCT2aj6TdYwtstMateFSK",
  "key16": "2KAqQEcEKjc5d5cmmMCrBbxMSfbGX9ADvrabbd1KaAdSeZK5GyEfwb9UAJQ5HdhXuAoFvNX3P5KkBDeyvbHMFU2i",
  "key17": "55Y9jEqVNVeUTtgfCbTxLdo65skiHXxyRweiXfxyzCWqQ818BRYGxCM6VcrohSKqJC3RXdfscdGk68R2ZTc5cH9f",
  "key18": "2PA8fZ1bSnS6cYbJ9a16utfynY5GnJ2qGPKRsxfYPPYiU8z1MiVrdKrxUQdsrMQ8sHLweWoK28tfsJTf9GeGkexa",
  "key19": "2CdPjPpJxgeCLL29KYSzzRhzKheXd1kfc1qxur2QpLkgDVzcmDJ3HYwCq2rqQD1PHCo1druY6ZpBCzGuHQD7KGTh",
  "key20": "paHQTk2XcTaEBVgAFSgLLUTNb8K3C9xAKsmbjow5GbtgypybMqMkgnS4rhBSgEgb163i1cLxMd6Ad1N3U6Lefdk",
  "key21": "GEFUyK4w29EdkCWqhQGptF2iWMExWgoPAmbKkPADfi8qutYkRAWkWfmR18YfT1bNwn6Wr8SM11dUJG1xtnfZt8E",
  "key22": "4h7C5rdps5sX8qeVzTqTDJvi9AarpFzY3er4UnghmF9ZSGJurxoZvTmT7ABJ6aqDRriRfu4k6yBNjEqZH8ayDyuK",
  "key23": "3Y7SHY9qnADTmFrCVinzxkj11WPkYH7JuTGVe8EX98ZDSVEr3Y5esw7LEz9Uwa6NvxKpJQVNm2tsaJ876rMdFKU4",
  "key24": "5ookTMXG9sLiivCqKptkQmtVjd8W3pQZwJzvvm6tY9fdQoao9fiEg9gAcWYWhd3vUS3bx3yHKdbpBWmAUAjjZpTa",
  "key25": "RqWxkLvwhnd2MkupjRPns8VJjKLKWpcPj4uBo44zw8Y7fJjBxBJ5CJv36Rdj32VJQde6zjFQTdTVfVJWSbYSjeo",
  "key26": "55gDwajZ3XRonAhoDXxbqfVQY4ZorCPktGq8FijgYBijQovPCYGFjS8MwpQiTjB6xRBhWzieJg74zfhM53dd3NpB"
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
