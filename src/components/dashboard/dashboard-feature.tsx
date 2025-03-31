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
    "48NXUyXx6riFXHtF5i1zhQx1YZTp4gXFjXfyYpmkdhmxT6RfaQtPHYN54SE4rfnyavcC9WtnyXWBSUkaQbaJtWyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSfkkDpMrcX3RebypwgbdJrxgwcDcsWfQhHPSE5D3ynEnem6E8iatRYL4KDrp3uPPdbvepfWFoRL5Z9ZuD8L9em",
  "key1": "585BTDhfGXjLaHqNKp7NFgDj7n8RtTwtihxfmJMsKuHLHwz9vqDybMnj7QxYzc9rEbJ4Dv9SntXFFwrGJMG7x32n",
  "key2": "4jBuUB2p6hwnqtkba8nHvD3CAzWx1yWhT2kugZ6hQMbF2c84AKfEzFaBNQPYn9Z4EPSnuRnDJXUb1ZwWBsVj35Jk",
  "key3": "2fQfBDyZMMrH2HP7EWEigh19HvBhV31zvbH1jwLSsUMV1VRUdsfK27MLkyAKMGw6EPXRAPptVQpbZEZ4bcdaaFd5",
  "key4": "3S3nFtoWxrX1BV4AfvC3rxFDzdfToSjMyKdKwj7VyALL6MNYdKsavTN9ZzVLAHc24FWmfcJUHeN3FzeD9PHAuWv1",
  "key5": "4EGRf87pDJLV5SrQt8sJYy9DbdLgLuwVk1xWT4rHUJaAtrUJEcTWRdWDf6tb5DnEKcFAHNSvKnafRvAiGEi7R1tA",
  "key6": "51aSxrQiojzo8TeFt5EkRT7nMQ879GiTuLJGpWW4xqKwgKQw27tKc7eTu8SXbTsAKoaReGzooWSaF27HKWvndFqR",
  "key7": "4QiFV76ekY83XPu6GJwPkVs8cf85vK38yezRXP2emmxJ8fgKAeMnrUzgod3FnoEcW3RhYoi4p9zS2PKiWqeiVrAo",
  "key8": "5EZYAavjnay8oD55TtRHLi6rHRWSrY2cRDMeZeups4EVMUdexh1qASYfBQFPAP9Wx5jRYSwPmVFuejsRXhY8DTnu",
  "key9": "4bhzQXdNtAFMeHRPFNLuawkcCybhEm7eYLqpfYJgbhMuHbpAeE8wXRrrnA848KW13NCUp6NP3sjut4jnR4s3mSA",
  "key10": "2gHU86gzD9r1GAXR6RZ4oz2k1kpYXFZ9jQ3urtxfkbWHaPoU4oLHvwUMTDHRzPCoANdCSHZFn5tRpdPG9MynB7is",
  "key11": "64Rd3Zti4D6fW1jsFX1RA2WSVJtjdX2CyNrvqZqfs1TxhZyh5UWERLb7KbhADBXDxt4kVU88eh85r3fBqYPEgfj1",
  "key12": "4xyaCwLmbmn57GeDvaBHwjpDr1Tu9H69mS77S31vabGuxpc6GXXhBcLVxDrf4SCN6PGDuFHdC7JmimUmehk8p71m",
  "key13": "3ZVkFThMtmeSndduZbr7Jb1cm9k75yQUADRNR4KPEiAcVxt8mx3MhRXEXGyDe4sA5gCruFK2HNrAoi9Fqy73EmMT",
  "key14": "5TZ3sVkmioLsh6ntJqDDTAzZtA5h8jeG3nidTjQawY2NMMYtVyEPCccvhjzJ5HizpSofqkxqQr5MT4djvguHjmiP",
  "key15": "1n9y18arSg6wVamZEgsz2u5JBvzTZSoaihiSLCw4oE1UHV4myuSurek1Q858ynLZsstjZFfEGNYoXuuYhCSBXyt",
  "key16": "64q2AEpRbriLvhfGyqfD3qrA6dqE6ieMD2x31Jt1rrkAcEhTcF6qWPEvqpdZ6GQHahZABJyVdScmBebXgkP5UDxv",
  "key17": "3p5qBCXEcizf3NkjbULMuhjtA8TFvvy99gGkCr7YsKsRpdc8XVafRedrqxmEP1mLiSe5r3jxqkD4LFmtJr26Pjkm",
  "key18": "rhapHznwaoxsLEKea26W56moUaecYBTSyJELEyDpQA6MwdXzRo4Q1aP4maUcjDGMCE5XGTGkTLVhuhavoAy4THt",
  "key19": "2Ke9gtm7HUMFHTqsVtDHqLqPgUZzqnAzTyMB5AUu6LxWZsJHxaPiV8hYdqUh7JmUHRhE84VdziA27cBQeCwjtYGP",
  "key20": "5nJ1XCL4cBpqsh46fHEqr9Pnwk1dJcEWtgh16nU3ZozszaitwurZ7QtCPPGzKyhvBFxhudBHMkvFHLgfXQTLLJgD",
  "key21": "5WjguM2tKv5XPZCMNE5iJ9qiFK5d2TXKzWGPPoTGnBmYYemz1LFV9frWgSrACJmt7Yt2CeWqrcSRRu8ZeCxxCwkp",
  "key22": "WGvuJguCCUf9N9vfgJc6tbpGePzaAq7kdPKD5Gz4RzSj3aohtoiS2vA9kwF5gU6ynj7U1zzcUGnmGAQBENJXXGq",
  "key23": "4r9JddebnCnNcgvV6VLEqQAhbdnWc9M2ip2gnyEWhLQaHPPEE5b4VhUufoxDhruUhiSgSzF65qqoC2U8w6mZ3bXL",
  "key24": "66nGJs8LEtKuhjNffEmbhJUeCvquKsvkXYJUu2mTAFSXWZ5F9GNn4jUAM3jxMKc2UyzZYiTTECTnCJueKmDSS5bL",
  "key25": "2piDxqCE4A9jcXNmDvgaZr7QdVUMFXkavcFJh5RYUzWcXMbdoibQE4zy1FksJXvgMJ9ke8YeYLVN7giTAhAgE3ee"
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
