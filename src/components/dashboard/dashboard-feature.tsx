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
    "3Xwr7P8rWysWmjkKMx3q1KhQ2dtN6sYVpWRYLvRMAKJX87cXT1yawM31vNmHwS9F8B6WZx22GF12ys4HrYV2W3mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BkfrSiqbTSZULcTiQRyZEpcMLs1DV6PeScPe4cYNn2bWPNQAM2vyUuSDJx67Hb6gDyXWYb4BRM4Gv7ygVsMHS6L",
  "key1": "467RdrS3Bn8HRacUaURmGULoxFph4y5WmHMigYjtZDnrnZjZTrd5GwzB8NKJME7ebsmVUTmXCC1rGBc1M2n4MKmu",
  "key2": "2TLWxZWjYZDiT3SqsQRihXG9TiqHbzdR1FdXFvEYjLoDDBXZzhGzYUZuit8vitvp5UJemtL34A1yBitAPUHhdLZG",
  "key3": "9VMVfDiCGQ2Yw5A3YkTosbMwY5EXDcGQdpP8wzuTfUiPZFQ6qobowQR1DZUvJuizNCreg8qBs6cXnXKWHcvZaA9",
  "key4": "5gC7t6Pe9viGMujrBRLsbpDavGpvqamCYBHxeVAo6JMvfiCcazrCt3RQcbshLpfXW81LRdsg6fD9zNX6eXHKNrVe",
  "key5": "4gCgn4TKTqZoDypKnLK4qs4KuyuFx9XjgZEEXTMv8Ecp97fqVHbVjqu4NnKm48DopWLZesAE774qi4Smc1CeauqL",
  "key6": "2uMYD3kzYYiYuoWPybrtUXAPbAVeKtcoJfMUGpr4PLhC1njv7mPP18nniTC8iv1E3H6ePefpwXUE7aCdCVYgLwRv",
  "key7": "5gRDDUxLffiARfYe1foX5JKZVDJrMCgXAUTz8e1EPS7bso28fRX7wRa4BENx9LVWGHgq1rEM5pBX6iLF9YqSTVdL",
  "key8": "2LV6HwuDV6AYmjtmwCyxdWpCeMEugDtYBgtJPfC2wHnePfM3SFxCjwcPjYP5N2BYQovYRJpsg2Dx3csWLcniNXDr",
  "key9": "gTh3twAcGAxdJk8ALTaMdHg2e33WyB5D3Xv267w6ieka7CpQ5XpbfQ4nerAy1AkCnhbBY4AM3ncPTZZ6vDX2Lbc",
  "key10": "2CKLzQxyoob3jfCK862sWWrNmwGButEnN4SBGW65qtLUrpEzn1kY1uUCjNaEoZ5KPV95BA6vM6FtFhiRDgmGrZvx",
  "key11": "5orGJecUvDqC6xAeN2rfo7HApfpoHULn4ujAnMd7mHkTkARb5NPwj1n58AyRWUVc1qRYv6SyB9GYCdvEqaXHuhaf",
  "key12": "LLPjBooyBW1dmZzyV9ZoG4ShLSzSvG5TZ7UQdmBP9Zukf1knaY2jHx4jGZkQnS1KvVLhGGqmRUsB5KeJime4Rn4",
  "key13": "3dpaJXErkFU2UWWWFwQZ5KMuGa4dMT2gnFJh4GWLxHudmYcCnVAU2GEc6fi9rKLUwAGnCcdWLM8K6jR1xutmNaiq",
  "key14": "3MQHukBqrTHf6NoEgpv1Md4wD24Cutdz9Lh22Tm3bsZK4F31akHAYQGfZMwh5X6twr73qyB4hMjZzYBxFMwLGKC7",
  "key15": "4XGUV5vL9CRL2fUCEQUyuMxj8pNbWZSJeipGuR6MvYno8nTnr4JuW4C3Nm57GZwWAwoaRjakU7Pz6TMv6YVyTzcU",
  "key16": "8LeMSemFYqfuLNfHUq2ne1ptowNSJgxWY9uCBvyGJ6kZCwLSvGoyZLGSoM77qxECeCayv6bfZSsGwASpe1JkFMp",
  "key17": "2A1wi8p4wCa6SXcv5Pa6UGNiKKzGskvkJTeTncTJdLY3NCGEeHsKT9y9wAcaiWquBuNPtZmLT7eQny5v9sCmowo2",
  "key18": "2boBcPSzdkkcftt6Z8QHpgPu73QBEnYvCzDNsCigyDYHr8yBK9PqZfRVFhu1BKmQZcSxW7igeTchMaXMvCgF5Cj9",
  "key19": "3xasvwniNrkMNjtU41YKHUxVQMWMjpoAVwg2rqz87sbkby5Y2rDj117DvpGzP46Pnc4m5zTVdEpBM9JNcUD8rbB",
  "key20": "5eQueuvd1iu1YzL44ztDW3Vv8f9grxWmqMRM1VeWboaty9n444idxWZtay2VGQ6VqK2M58VFoBceHajH2CBUKRZc",
  "key21": "4KcRQ4EgoUKXSR5dJWaxzBhTszsPmzTNQo4tc3Wra6QFDaxQGgfe2ZESY1fgSwJmVgUcNZXoAdTwiLoEsraFsNHM",
  "key22": "6WEQ4gHHYkGaEFfZgCBPeWztArH8vQn6zRVUcZPyUXRwmWP1uFmwFf4wQsRfPSYFUHhhu18wgRKm9XiPwkUVYDc",
  "key23": "66dbAnY4miQvhPcFaKAKipZq1usjFDkxi1NR9a1aYvLzKLTk6yczPz1LHfpDpDXRYHKgfowkXA8fxt5tePz2Sm1E",
  "key24": "2e5DersjCySkUZBGBx7WmHyMZLtCWaTLVXoyeEgCWSLw6uzRSDigVkBhLDF8aTH4hr71186auqo5dGvS83hrRNL3",
  "key25": "2A9wwV2RPAAT6oLZjtoPBFa7C8rN31crrgGfha7pBMWbEktZ2EkgAagmNyBC6CVxWqa7z1xqMwgRuMg4SNYy71mb",
  "key26": "7nmCf1dNvkXFNUS8FRVLay9RjSHFYGe3MXmrc6dDCVBoMt3TmfdfBFar4CZpfsvQB65o35pzx8poXpfRqBqESHq"
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
