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
    "PCLcbDieTRnoscR9Rc8moJhPXgAaBCdtB4rjcNzaeePoG97Ai58XcMTcA4oNjmznoKSMPscfBZ4Gkn4tbLaR24C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDJPWvrQ2ictmpuvzn9ePUVc7By3KgHoDWsUk51hFeXExZBqxacvwfBt92X8v7GmcoPcHiRiLpfJgmWMM3qjepb",
  "key1": "3zb3vwCW5zbwabTE6GCKQ5CiPnUGwsqq8RDyQm71cjBpSe1kw149frULPmT89BDcKNt3u5gNUs3DcXF4rJ6Rmq4s",
  "key2": "xftxqRvga7CeTGWDdgAb7syAnDbLJnud1F8ToE4u3zHRmBCvATyLZLT3Df2a5BGNKDhv3ptsLUA9HAQs6Ek796Y",
  "key3": "3K4Po9DkDTWyVhc7vzNbCJ7zWNvRNnrXF2AVrnKfyf6BFpzgVJN6ftYZHRStmn7fNjzwuSQntsKz6k3icYasgoYk",
  "key4": "4LT9CnXLvffyDiDVV2Zp4xoWkf8ueq6dybamr5zEsdA3jxnotMpSwYC7hEXkP2uvzNJ1rgvH7kjgCjzpiirgWXVM",
  "key5": "54dBzcqxLtiusY7GtQ5DTiTH6zvyx8FeLcLDkQKXe62mai1MnV7uKAidJe77vTXkk8R7kNtN99CPjbHrQKH2JHYj",
  "key6": "4jacNLuZJhWRBMiEF9R7ktEELHWYKuKrxRKNnBkbtcKbPXgsCfmJeh1fwN17QdBWrcMzGT4zFm8gQ56DbS6w8DTz",
  "key7": "4Lg4V6b26BCFXH3ifMeLEbyuM1tuZeeDhfkM13bL9BUPvRyqPisoRm5myq9oDNFwudT7tshsSJ5Ww14eDLK4q8y1",
  "key8": "S9X3PLfqngF16r1vReygU1Ndoarn2ur5cj8CrYQT64xD8Yz52CYeyoMEKKqTX1rN8vPrPnkwW2kmbxHEWWYTKri",
  "key9": "2ppjFQQXDtDbFmgg6P8a1v6NmVPEnJRDNz7Xw7Lsn79PeByr8sAsusHDuEVa1MzniVucVWSsXw5VtqH4zEjXbAWy",
  "key10": "ve9q34P2KWyYwu69nkGufVEkQHKxYF8GBTpW8SgN8ZeBGmw1zeBqRJdHADtgDTjKHzr9WGGwWgX8qgYJquf1Qvh",
  "key11": "FXdC6fa5XdN8ZwRhEXAgzz1SHLZUzUWCr3xwu9mtAS3JbhLcWCHtHwTnK6HvFAEuiwNkdC63EtXo9v7fD7Jw1c4",
  "key12": "2QLujVfFr1J1kptxZ9rg1DHNjqAX5X1upvdHmUsbFEwULQFX5wDAtxmktcbTGKWUEtNyYDLNzqG6w3BZUsgxVPRr",
  "key13": "4xGwQdi687M9KZtSgSS8JDzz9yKEhm1PiwoPiREiMczmhdrN83tbqoT2sU7GcpVLCwPBbF9WA36TQ2ZXYppprTR1",
  "key14": "3nejh5C3TyWX468tgLMFxPG89Uv6XzfLWEYYQhieXBKw71uND1SywfnSkZxsDdu4d3t79vasYUPhd69Az7EHhG5C",
  "key15": "4xTTR3kPi4Y1q6hnoy41zjDoKXdRCAoiN9vC18nJyXDPDGDWTXHvbnk9bJpjMuT5nW8FXASgcRq1528CHGwnctQk",
  "key16": "4UMviBQG3uQkvsdiJytLgRDi2woDoPW7yCSQRtCW1CTiBqGFCKJ3hWg1DEErCqtXq3xPfGDgrDKNTYskpeYp7rdg",
  "key17": "3FnD3uygE1qWRkLT1EX2hPugaZP4HbHe2Ms5ThwAFXDiGcwny9VfnnNrgda1N4Nwa9wKUQKfBBYRhTjCw2Wzc4Ke",
  "key18": "4CwbEEsfE1SmfqhbC65cAqeHBXwrvyrd5hHA7iY2TTXZTm7PRMEbm2zDSbKd66PGRZERUvjSGVnYmuRbaNdEpXw6",
  "key19": "2npy8s4oxxaHEdT9FFYQtU359FXx9Vej5k1sK6RsMpsaXyby4Ch3n1VMnRanRhSjCD2pNdut4cr3Bn5oZCM19Jdv",
  "key20": "3WWXZxfxdAyWfC2mp4TTYz9TpnqPsggn2MhQZ1coyrJDnkVGmvyjmPRharmVnXNSCHGtq1udpfbueWJvP8wueQF9",
  "key21": "5G9HNQ2UiatMTu33pPJqynwDayDSsCyV9hJBkd3piKzSRrvZqG1rEx8pN5TQznakwdFmzJxssuB5MK7Q9XiUyHo3",
  "key22": "4SRHqAYRG3HLrfWnBfcKXFWEepvFPRZM71PcL1RkEKqUYDaBUWHcesp8pxGmRatPBR4pL3zJqLvKgo8RJBtCNMbP",
  "key23": "4kcfYXW4xp23G8XseGjvraeJLS2JWyU5njs8uJAghQTMZ91JSoQej5VaZ85RHsgVfpfDkAgXydD3p1DynuhZP6Vj",
  "key24": "xZwTMjjZtxPZad1TCHjsjfYj2KHw2odjxdqwf7pFgMWnuVCsN5Ehejkrf5pAtrhEEvZz3nsE8Gu8SJWBMap6ypr"
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
