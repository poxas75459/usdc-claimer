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
    "vzgLGbrYzqdiXo4bSHvnL2T749fV1hGoHXjFEPh4XkNz7qrUcYddq75aXx2Md6apBsLgSzwv245jNaNWiV4rr7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EeqtzDjxery61d5sTJDKUVZCW5yhra6jrDxSribWXn2c83Qf7yYDbevHYTxqMUCERYDjWvoVwjcswRSb4yysMSu",
  "key1": "4FEBdjzW7S1FDjS3MnBJHxtQYUhmZ7BsHPi9GDJuTkPmshBwhooYJrkaCgb2hQ9ZxcbP4HgwHoYPFsmuc4pDN71H",
  "key2": "5UaPexxvqYHeMTDxXSftSjzq1AdQEV3BrbqZxuASxYaor1uC6DXuhEaNoh1NbsSd9rZu98CgXXmkTbUtMM5fxxDW",
  "key3": "4xfg5TFLQmmLVf4m9NYvSiFYBj9D1mvjy7J7yiskq2UqYgpbAgKR8A4oYRh5qJ8JSTztPnXSoMCYSmtGvJg6UdKt",
  "key4": "5LEXm3frh8oBv7QBzWmkos2qxGah6L7xworcVEo7VxJzfjSnQ5Ekh18L3xAaiPM2JvCY49iJ24hRUJ2qjpwYKLmJ",
  "key5": "3zocvbwLAvzjnhkyEVnTnAsEtdnpEHzZxwLgmEBGkRSy3s6YkVuXhYCKzZxzZFrcZyqvDhLziUCgRdCQvGU1i713",
  "key6": "2GhVxjn9NUNKtzPAoz1TxGpoGkNUK8Kt7mSyyBYysntte7i2UJZvXLn8mVB91pxJUYQsfQt4cxk2w2FBKLEeotBv",
  "key7": "35AKjZx4Xt5xJzbfwvpNUveNqZLauCiMKsrMQFujAszVPJg7tbLNGcVQHfxo6gY3BCaSh1FtAVSCbfMf3pLM6Dg7",
  "key8": "4NGPHLe76ie5Uetf5F8aLWEDeFRyji7up6MBSe2LKeRLaUjSnRcdFmxA4uU231TVHZGtozo8euh566zUnaVg3frn",
  "key9": "3KVTtaVCZYbhzvss3DRX92Qcb9ZoZy3DW83KEF5xMTLVj3sHPXga6BuTkGsf7M3MW7bTHbNrRd7ZRX4R91TPn171",
  "key10": "2NMkCRoLfajvRaBMFsmcGKSvuRWXcGoimBEDBe2aegQxt3D3nSWaZ63maGcv9LJpa9axpQyKKLYGYwLMiFqYmqqQ",
  "key11": "rN9w8yHTVpqLj4ijbp1YCZXtmoqPiBvaAUSnV3VR8TFRCq1mgDQhwdqP52gUNbxnP5HLvv1dkZF7KuYg4s61Sga",
  "key12": "4jvvXt8toNgystHBrrZ8ocouVYsTSZHNAucsEFXyXevF8a2dwSJJhDU83X5MTGwGJRY7GZttSaS3fhRKpSLVDCSC",
  "key13": "3Pr7tSnm8F5kHJAnjq1kr8vCztAEGYYnt21PdftBr4GhVh3vKSNDuifxs9Sxqbjcu7CMGe3kq5aNsVWL5VoweUEK",
  "key14": "65JvzQ8dB3jBkpaYyF897ycfmpbhm2Q2MGhgct76pgXk2j44ds3X4eKXADuTY1yaq8KWs1QGXabEcFZC8bM6zCNC",
  "key15": "3ZmY634HdnHgcCL6vr3ZehUBL6fUNUnmSbEgCtWPWKC6bgq4wg5ghqVb2PsscW5sQmH8z7GLkjb9Zwonzuvrvwp9",
  "key16": "3BmYDNHz4Z29oTKN9eo1ZHVacBMp3gQP1RF4GRJnz4kKFc4hdfAEY9LBmK8z5uujqXWATXDBboXUA5tyYmtDXmQC",
  "key17": "5eFucRagZdknyf55N5BBSTPUQeSKh96ifs2KYQ5cZEcYh5Wb8Tsj7ruCoqNaH5fRxSEaynXAfnLw7GSWmsxxghYN",
  "key18": "4Qr8gSE6Wzkn2B3uezNHE1A5H6MZBFVgS8VAFTN1DBh9QFFyRewPDcNWAmE1iaWWafkotFi74xsb9cZFaDKDJ1gQ",
  "key19": "4a5Hz7shKYHAKc73pLjwaydidvbLnAndEDRmmL4knuQxx3uon84SsBUcHUhNtmQBEqgYKaL6s65sLD2wurMEHRGn",
  "key20": "PBLtqiZkXCP5wfSLK2oSCnGPFjkc2UwSWP7qYZi4GkBe9b8XuE7WLi4mTWshQ8mseqexrdmbkpRhhgmFD1KAA8n",
  "key21": "3cPnvbZEKvsY2zgDcYoCijYvdeg41wQyzZrbbeqPKZzzU6NFBEesSj9aCrVcfm2sXSi3ipkA6bPrsjczEnBcF7iS",
  "key22": "25vvfED8qvdrBCESDPrFdJtbVPydQWKs5x4mPowHhWebc15hRKAT9kNQrUBXnXqTjujpjst2hjw74buSqWQsnHZU",
  "key23": "4H3RWWtqUTAEp3aYqs6KbCGFDo5ZmHmbbQi7KxEJCUPnfy1ZqSnXb2Pug63C9KhNrQNsCPftGfshSNs565tGDHdW",
  "key24": "tdkpLEbUcTcBm5c32RhVrmQsu3Q8J2W1HGaCB4WSxANKnqDkgyVcQBwDi1njzu3TFFyWDKJGrdhj72GUQ5AV1DB",
  "key25": "3rGr1Rc8JkjxCd6hxJkgHZuMmbTP4Uh6qiqtULLtyrZmW8DsvcrFPjAEiMZvgW6acFwDQYbJ7P9A91oWQ49RMfZN"
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
