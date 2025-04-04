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
    "2H1BexYzxzH7Q6W8sJUK6CRu558ABE6cKRfRNPV5ifE8zy1bzzJPjg8ftyCzDrraLJ9GMcijrnREGRf4vh1JpGVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GSmqiMswVi21ukNdFTgAXA2iXdSXfjQ86DzVQEAWcv4VdN2dZieD8xKdCyRvgGVNKzV8rFCmq12PozBz54AbAqP",
  "key1": "WTKoJqQsDHjXx2bq8UoKBGntFaLhXReLzC7iNNhvEE98PwM7p6KW3EGmSSZAuFd7ABj47V91rkS79CaZgpyWivc",
  "key2": "496AnLeWai5DLGqG69zVNUU8upwUNwf6y9A2MGU6uAy2ZPUz9MErmrkZ4akV1YUZmpWpKPcWRXVcpABnKWpGvT6Q",
  "key3": "2MGBmLCWMXSHjFDGJFQBzzKpEvcELWo6B3kcRLwJUQkDMZ5tnUSRCd13Vfxe44TMDgTZCi7oBX59BR819KAcmT4k",
  "key4": "3MzsiX9ywfmbZepiHbWGosWVtBaBzH3QUf9ZSDjjKCnyGJ52v4aaX9cEiJ6HwhySjuw7Avqrgk7yRPVvBwJHNCGo",
  "key5": "3tS9gB6gSnJb36pb8jmgHffXkQBNxociNZPXbrU9FX1rKpFGG9E9Up2kuMi1KrUJbzCCzxRCqAP2Qku13T7mYVes",
  "key6": "RBo5LAURr1JS8dBmXyW9JoveTc3VFUrRYkdRHq8fZB76hoRHAmHr8XbFvwNbGxBUb5f1P2CXDSf49fAcdPNK91P",
  "key7": "54vxdH7ainJiyR54yEFS7SaYi7f15YVaos5VndwgN46SvSoKASbPxRM4H8Dz5aFpha96RvchmY8KbK8w7Eg3oEW",
  "key8": "2SZDDRb2FNEmxwzDB4caq8T2oacXPZRqojaV53Uik2s8jGi1CwozZpQcJfuH6dYtBbVg4tEwx1wkri7N5szKMmUs",
  "key9": "2EYbqmvsYAEJE9Jx7B47QNrNWQKikQfM6m2Gc7L8czQc5QwHXvigNH7FzL8cnWBhgbbb4heUkKMbpcNMAWKc8L5z",
  "key10": "3bNjsDVqsXiYKPCnjWXsGLbE2M8gMFbZnbSndZjHtsYTBs1zkRwWFN63d3oAoMSdNyL86Majzv1yBxn9N6EX8NjF",
  "key11": "4aMpGEeiTR3Q5J1dmWcKwU2vc15kfZHJa6YuAR7Q5gbS9PNnhRbvC26H94viSkCfieMqB5ZR9MUQzzZ8uro3DUZU",
  "key12": "Ydk5FggfvtRiqdVcQpSzf1nVuvirUP1sqHKkLRhEe2uMhW5xA5ugNi4dePZwUpKv6nherYTxtr27WMaeVCtU7Ag",
  "key13": "ctQN8CLwDpb9NpDSwMABSa5Fmi5A44EeDwwF545UkmBntXJmdXwRZd5cSD2xawfZbLkuYnFf3PUuWd5cA4h4vPK",
  "key14": "3zcDBfKG87RBZny9Sd9UV1EKR2i7gS55rSg6vKAPZPXBphTrUQ6PLgLFioNBjTjqtmqWT6pAoiNh7avYs5nm4wPP",
  "key15": "2UYpWSgbbJkCnfupjBHTzq5qRsYqtUNYPum6oQSG6jY2NrCrBfpi7QoT1nejH9FfGYqTWYfq8ArL49PkJGsUdbp3",
  "key16": "2DfZSqN3wJLe6rbXoYEsZguAC8LMiaok4sGGD63cyRYcna24ffh7Lu7zimkpQ5gBpT12SaMpKFJRWRcdy4Hd4nzh",
  "key17": "26FkH8RTgZE3SrNJXagSkmyAccc1DtShFpjponDLfEi4c6PSrzUg65Zbdp3ZbWoQFJsfYK3i3XvonSg2EEcT2Gw8",
  "key18": "2fqJP8BVRYmMc1QXberHaa18x3gznsnheQCHot5sxNpZcr1zoihm2vU2to7rBceTXXPXvMDQNTJ5ujHwuQUHTGXD",
  "key19": "2Z5Ch9vv3uwbVc1VKk96ivBMhpzrToR4VvAt8vcWDsg9y3jFRZfQFCrifnC6uBJCYDcdW7ewrTP3AshWvoq6d58j",
  "key20": "49upWNWM49t2VC9ggn12qFxPAXCgCzZBC52MbsJSt5GbDkubnHt6XbuG5qbrqXTGeMPxmqMN9MCjroq7AXvScDBF",
  "key21": "2xx2ibPEj4pbn9gy7EpHCKpNw1zvNtFj7TkpiXB8HEgkGki2fcMBVwdJQkM8Cqeh1QnqvTbjHvZCcH6fhDvThxpR",
  "key22": "31emuXFPghatmgxQH8rVuerhWWRikNiYkKXaaw5jbX85K2BGD4ECfjG98eXVENXevUXzhjXLVm8g94VFG7uCTdVW",
  "key23": "3CUxUUZ1oyV5cBVASYdWagYKNhQu8oxp6mSBhS6uNfpJHvTiJXRgLzdoZwsmvALRpn2awUrVEpenGvHNGjmNvhjr",
  "key24": "3Nzg89xAjoU7fkgRdRrFutqFJ7ZD2usYADMn2AGDabfYhtVJC3vAqYo8jHth5vV4wSHkYHi5KJ5HAJCywV3R9uZY",
  "key25": "2gHBSjpcce6FAJqqP9giXSg4NvhDQrjUcevhcMPYpbUzD931XqsPnsM5zdnpZ9ewJkjTzamwTcCjxHK4xUZTf7dt"
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
