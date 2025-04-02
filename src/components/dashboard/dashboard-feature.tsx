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
    "ynDp6ogL8Uk2GKZcJMy3w3LGKB78BEqX88CUg4kPDoeT1uPyrZyxYKmei9fYaH9yGU6NhLtrMVBPGzSqKY8dFtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNqfrnaSszR2rLuz7LKERWHzygXsY9MvbxzcaQemKLy6G2AmtD4vy9ANvXoqQAcAPTH9bni6ya9kviF9d5yKd2N",
  "key1": "2RyKn3aXePXvxzPPfGzYg4g9YtSZTgchYCSTkSa1zf45hsY2TD51Qi2HoVqCLjPoBC2ktidSBfve2LKFWcywjWit",
  "key2": "5bWH8HXguGTe1t2LGTvZArfiAgkCqsJUycVgmxWgcby3My1zrQf7R9GMEX29GjC8B7WokBqbp3uZe2X9D2gkf1qs",
  "key3": "5QU7aF4gPJyTqL9NqU5NKiLHka7BFJPu8TCeUDgtnBvAbvoc9pfyBgNneq9bRmeaKAuxYR2oawqaiTumn63Yf7D2",
  "key4": "5bY7CweXbTwbspt9ptvhXkQUQcynKwmpQrNEtNAegUxDTx4MDG2VAsUhvwYpttv3S74VAEY831SoWZeHRErz6fzC",
  "key5": "Jzg9Ns5641B72CDceBkT8VmE9jHYguRNcXg1jwQr4T16pjD9uANTj35UGN1XxUrVtD7KQa7jArTnz2Vj2K54sz3",
  "key6": "5QW2Vwf9VVJH3oKpmo7ACQY8Bsj6iwEfwDprBYBN9PhE2473WGi3ixEq2vc3SMhMbjCCdZSgXBPuNgjcm12VUMTU",
  "key7": "4DHaudPS6RzEqwJsL5JsMcTKCqEi4rifGkU38kDiCfVZainSEjdkoBqnBG2XeVjqu3STyDSua2987pb35XZ77fu6",
  "key8": "2gmwwzb9S87wibPXsRtAdbP2ezQk6DLAZJhxcrZ7FtM5Y6sMzaXXcj1WcMaaMM35ovquDdiQp3CAox5CPUBgqMb2",
  "key9": "3WkDSQo57qh3NXFCQJTQrVG2SqMev1wEzA2tdwCo5wwDdbbcUvsFQowPzKmWvyf6PVmdKcSLRbyLkCCfqG6Q9swB",
  "key10": "5j1iy7FtmnxLiyH344YTxfzNJ5zrVjrXFkQ3G3nPLcNvP7voS6crt87ai4NtP1U4PqYiDfVKMLiUjd75yvpveo8k",
  "key11": "4Z5DyxHoT8G9dh9DHkM3wuKiHJSWYXNfNpPvV69AM3ggq612Ho58stYdMTQgCXe7AFWTVpv5NaMTgF7zJUpq2GVF",
  "key12": "5dNEQV11Y2NGtRhDXbNY8ouu34uMfH6VPM9UW8TadRSMUeGiXZ7orwDJochzavbCruJEJhY3bNfckC6BiTL1K7rJ",
  "key13": "3CqG9D4FCwJdjWjsLCZ749uQHPHnXUdNnm18uhfyRWwapQStGK43YreKSTCrFTEPPF62xAuL62mTxsjYKHvcjcea",
  "key14": "HoFs1fJnpjy2ggjNFfEc3pqG2midZTJEae4exuYWn8sDo4EXz13rHyacvmXYtD4YKoXvAwA2JCZmgBtBGBpDeWX",
  "key15": "3wktjyoEUJKnXqg6TKFfc8vqz2nG934LzmXtGaE21Ud5QzCx8YuEDFUo1KaoHXGNyEM44fU3nDTLpBzJQvrQGC4w",
  "key16": "48PVHBNieNjhaFiM3KEXuWveZDgdvrAZGRQ7e29JmeeYrDXJdHhcqWtfPkeUQr42dRxmUCRxJmshCARijfmEA3vR",
  "key17": "6ncQD7JegdyL7zsDz5XzZEaCqyohFUGVibVV8GQjBj24TjENs5ntnmrFwLuPKwhXobg6s8zWZdrLVSxYNKXYzME",
  "key18": "2uj8NxfSp41uxQWA38AkttfFNPHJo8RLSwhHP4KYgk8ug6inVre7xS7Hovayu6JtkzciBxjkK8ZucKvXThJNr2si",
  "key19": "64o5NoRaRGPBCjsTi59eg2qnAyfYk5Ajse8pbESdrX3y5VjfsBps7tR1hiL5T9EzyFc38JjGtR7NiEvg7EkGzhDw",
  "key20": "5Ari5Ap1mH3Hw38MWLErvhCcbcuuWY6iebEJQToZzmhyiY84to7kMscjqMPxGk6QmdrMW5Fou9jh9JWW7SnsE2vL",
  "key21": "2JiVDwAbpeWobRsmxjpgXorJW75bsLy9SVJFdPaw8ohCZvZJ2w3EvnEB51fVJWpugaUWbXoLP5mog2jDbqzUj24o",
  "key22": "2EemcsbWiSCNYkVHJMFhLkLhx4Y7ZnKhd1MAA6etZ6uBs2wdhHEibJkNfVbcbWUNUsz4JywR8uRtfqo577EtEwLy",
  "key23": "44CeLV8qRVsjUbHmXgtCQxhhU28mmXCwNyFSFFQ2edgPV7DBTEYR3MYzbXCLHmCgqdmRaRvZxKcSKsRq6N6w7e54",
  "key24": "3Tv3yNbBySDDJndYqNa2P7rd3FECdEDSuP2fqgEws4UYxW1LBCKoyHC6xxiH65m9D1nVEmf8F9sQ4SvBNWZLhrtt"
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
