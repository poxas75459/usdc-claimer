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
    "2wUAAgHLUpPbAE8ufYHE2taaVxnVvYJaGV4jxGeCMRCEXaBcWc4T7qbucEbe8RczNfRLWsStyfKd3DrjTJ1JUrAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XV7d6GSQiAKReZLadTm35VWgXtg1TK7Zgfvi5vxVpULixSu2KJyhdUT76rVRVgDU5z6z66yDjudzU4Y4h1CoFcu",
  "key1": "4vyiwX4BVe3mwgAkc2rC9c2G9zojqqu53r217BxzpmB9sNG4FAi2hZz3WLzL9ywGvNVFEDvXz46LMrx9bjen4q2U",
  "key2": "2CdKwqP3Z6MxBwQjHDD7AThKRZSNNMiT3JCmRoQUXdYiXT946DwTJiHDY1QGQpErRngrV3ajHhyfuDKQYGzvJm6h",
  "key3": "2Hx2p5RmQEFHnGzS2FhsmuMWVCoKJghXihErRLyJSzWxtHBcRye8nb6hwACnDHz3kpvx5iATaZmQJmMP824NKEb6",
  "key4": "49HTcHvUethCYT6o8J4CnCsUubBfcrqj5HkHSUGsLfFqh3RXcv4WqU6ADsguUT1hdn53EYs73W4kpn6dcRxBCjSg",
  "key5": "vrRmq7xuRbbZ9KM1pagZgR3sJmfRv4XPT6Pnikt3Yepjg62Ykf2S44aT5JjK7SF5AMEfQgjeNEo8uotA351mpiT",
  "key6": "28ZbvfPt3oc2EebXL6PfXDcXKSkzW22yoiEzdqqJuiifSPwj4xySsSPeprm2AzRJ1vngcUG4ptySo6BtGBWnhne3",
  "key7": "4XTP8iq79P7NHyfker9kWyd8empxs82wXgLdLQHMDvcpx5gRsUYHkSAEALca7B1KmujrWdWgah24tLzi3Vz4W51Z",
  "key8": "313cDcxE3GyozBNABHktHSkKJbrLshtDX8TgYeH8tCRQTKZVg3JTiSH2mV4eYvnyvpopmukiyu57yjZxYJXQgyGw",
  "key9": "63dCRxLdt1kvb3JZ6DPqgCt9gG2PviJLkT9VLwfFGwVQ978H4FmB1FcKveLGTFwytTajWdur7kLuhvtc3NdC5LeR",
  "key10": "tjRXbHtAD8BxfTzas9mknSfeDsU4ZsLksmLD13PQiKqDLaH7k6CMLV4mcXaCRXgGAWsstWPdLb7bfWmTJwiP2r2",
  "key11": "3W43QVyMTxRz97vh3VfX8kDvXRkx11GwnYMfHapYyswo1nC9y369qmNn7R6B9TaH5BieGhLJnjrK4ByCNJ6tq9WS",
  "key12": "2d5AGoQ5FmktSbwf6GBnGgWnhC2y1x1n3PwA33jvz9uj1xuV5N2dovxE8CAASjZepzGjGyDGE7RVsLfbzBgpSjHB",
  "key13": "2yAwAcPN3gAqoYJKahvkXscoSGEex6VP7HYHsT3G2wRmT6MTUpBaTcA2iY6G2B1QxXMmeCV1mTrr1uCzR5ebq1HQ",
  "key14": "5umMyMynNSuEVNL9rNH7c9z8138NkaxKgGvnJP3PFa8LPjTcD3DG6e3Jqt9VWzrqCqMphf1wbBb9aWq4Mhyw9457",
  "key15": "3bwv8cToMKMdZELr415V4xfsHiZiiPBcCx6SYk4uGtuiPR6BUQzAAa1e9j2CzZZSZnLDKTWxHcTPF553cZXQRyuD",
  "key16": "46NstQPz3aNr3zcY27ZSd75ZmPPBseFSha9YfEeZ2prVzxfAG5RCreUD9GfcjdcykznPKXJpuXQa2E22DxTj6smS",
  "key17": "3vrFq97EnPjKHvMFLsTCspMRoncbBHMAM15aVXF58fw4HiZmp1DhrAUtHqFTSe1eyHHH1JTYy5tEgKLDgU3y1Xeb",
  "key18": "3Lt9JZDqV7wvra42BT6eujGWNA4go139FV55FDLzNErb168purFTt3CRtz74U5Zsnbjp2i2HKBdNu7mchgcceT67",
  "key19": "ML6LFtyP26V5VQuntCREeX4kb1DVsh4aw2bwf7posszS47V3egdcBPydRcKj1JJq3gYa4yqww1mp9vMbjRYg5uK",
  "key20": "4S1XbiDu5ffqdsEqrTausKxVHAoTGiu7SJWCtRRgP5DoYHUSCVLzAJatFXXEW4HYeXv6SqVg9yczAgFfbQr5cNfQ",
  "key21": "3zbbfAoGx8oM68yfRaYK6Z7oDNPikRY6M9F9y9LTN4nqqorTp3KYiPYVEpcrc1xtKDFb3LDdgh4RJVU8fJguZrHj",
  "key22": "2Qvc7CKB7c3TUUFSFrSKhMA5UNdMFGyTJfxUZFb97ZBweHxmXfYSSpX3cetyF4XwHFvrCLVSdbpg6Hk2mhsrh7xr",
  "key23": "3mPuxcMrMMpPoAtYDmMbdMY3HNsLRu2UfLfpfdmD3JjasWhqe8imvhQsQzzB41QXY1F39j3AU7fL9nMm8rkYDHsK",
  "key24": "5hPTwgGUuojJ1snurcrjTiVXbSeSFoWDAjbdHJpy4tUcZvifX6NEsUG1WxH4hPnDGKktkV1vo5GHa9etBXTSZYPG"
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
