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
    "aK2WKWN5coSHDyBEgMMYmHg5MHKKRcPQLSvYokr1EudAhSMmW3uL2YUzxB6iRmcQziTHrXf4GuZGDyZDVyKHqrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y1GftbLhCScmynjtwv8ec4LnF6WbbHNVzmuHvsYKHfrgeDEQnUYHRQDzdYbUj12XKy91f7cJqKPEFVCZf9PLYoS",
  "key1": "3u6HFU5TZS4xMsNfr3LdK99nW6Xc5XrYKNS4joHCa3zjx5zzTxHCKiRzQKTxbYKqpm88LVbrEbsYtnQSGmEXGdHC",
  "key2": "oa6G3ceDGHDpgGUS5smjwgwiNTqR1Mhwghk7xBF6Hotfr4BvMFD6Vg9qC626MZQ6Tnt9mZH4tLHrtcWmNvfvCJu",
  "key3": "3Jki3ynxZBoXKZhqQxEjyZUK7ae6h23Ta6u7xmUgDjzxHS55rAFaoWFWWru9KCECXgmdccsFmMsLQgRhZDFcNtBA",
  "key4": "5zaPedaA1V5r7nSMvUJmde1adQ6QNRm68kg3gmnUoNiQBKiXKmujk4KN9orjcM9DtYrgvwMaRDubouaktgX4KyHj",
  "key5": "2r8hGKEz4xJUeNyua16rq3da15FWXptXC1HBo9x8xFcNJ9a7oB9B5EkB1cnNt3P69cuqnaWKcen2U7fgfmP7DGvm",
  "key6": "5Hp5qAfsf8gSh4qJufyRZb2gqCrLshd4erMK5vFXnDpRjQTzHyKzWCMhhcfUK47x9E1Xt7cnwbPTTTbsdGwKkW3n",
  "key7": "P2CHRkgCUBWsQyATi7dbbqPwU5xGjz4UbiPc9v3v8USCySw9qxLLKSP2FbPNEJNbXBG3dnSrW2D8X8a1gH9CDCG",
  "key8": "3u98DcsuWc7xxJbUEV5uSqF93HMzERyy9VYpHrzN3BAkBvjRiwX4LJ4jTNPmWEwjFKJhNxZ3cDAcwDNCBou2pjQ3",
  "key9": "J4mdzFG1D5oersiDsE7ySSDTVcvAhWgRqTTbFLSs4ZHDz2jJG7Eeofahp1YMNuUsycDRbGnVaBw9RVTFRTeob4L",
  "key10": "zVaEW5W5KnTB2T3Kvyxo23Zy4Rik6htKk9rb8zm3HfinPakvRNNWDHkBYA9pccKF3qZob9tZQwmzvE8JP5Exe37",
  "key11": "5fi6DNUURqrG7VkeSEom4dfmp4Z4xKEdHo9E23CJBRJ4R3SaE1S9DwPN9gCQFEmm7ySRksA4r8pknjNRmm6uYYLv",
  "key12": "3R7HhCZ4g97q5rALatRrCWWThLAcNazxqh4Sx82ke6BEzyy5XMtaZV5adjdzdvt3bbeb29GD1crVbLj34ZwqdraX",
  "key13": "3y4jFqs1zUMPPHFfDtHsGpB6bJwcs8D91erS4DaVDkGSpSmQ5uwqYo7BXPkf5gBAJGqDKGfhL3RY5By7uiup2r3W",
  "key14": "5132T7WGgYtH2xSnYZ2b2ZroqXwwvZHhEpJjF1dJERRKkMFwCsg6UzQXFK5k4sHPM8Cw5xjsrVYuGXfFWAVCfW79",
  "key15": "4V7kvsMZ8Lp5sscJCfwmTH62dHfwRHUNWKQnh5R7Phz2DUwbRech6sZqqr3VASWRNZzaQ7STopnpV9RegEUStF2W",
  "key16": "u9v47NEK7rkLQB6cbCcJK9oR9YQ4hNA2JAhZuPTTCh2MA2LgQZnc32Lh7uDuwFyXQm6c2CbCbmw6S3xJVAAasC5",
  "key17": "3CbzHJCmpnVJnm9iWx9FmJL5hn9t57ZXVtqEkeM1pHsyD2LE2LBKLzxiDoi6R174ix8VRPNpX4NCPwAvKarss7fm",
  "key18": "Efm2HuiaQ243vewXKQGf3oBMUnkAQg4e3PyiYFogRbcEnRrq2869avpsEvEP8D8jy1yp3k54e6EQCCWCW1eubTA",
  "key19": "4d9cKMsg9B6SuYAozG4JZTsjepLPWNGRLqxrePCiHS1dT93EEgaAMytf981RqC4LVBgcrh2RdfRTLzFbw4g9jJ3G",
  "key20": "3XvW8JGwjfT4FeR1BmETDWC5UjtqmGHPrs9ARApVbmqmQnbRCGNEzEK16pJRcmwAVNWMoGe3cAqihEFATvV8rGAX",
  "key21": "57p1hhQk2ZMMoC5gF56mjWwHv6d2o6BWcAdAPeZtvEh2Z87spm7Y7Z72Be19fKfEJmW1SSXKjkrvxvwiNo4wogGA",
  "key22": "2vepmYMxTDn96SU2yR8WpuBiaBpqbp1tyh7xvtD1nNb983m4pg4GtcuvVdQk6xHL675dfCi4BBNJyGWV6Ym4rB6Y",
  "key23": "7sVhNNKMB4kZpCvPyDUBEXVawWmt6z2iNeiaAGwDfAVLsDKGDVY2ZqAwwqU2ku932SkUfVXzvLeVt9Vmg4wKEDt",
  "key24": "R3GvoJ9fdVgBZYUD78A3bjM4ze9zmMa6ex6cCg1MTvB2weVHcszh72Z3QczXGnfZmDkHhGgeuYf7ccLkr98QcuW",
  "key25": "2c6TksAp3dGB1JFSByue7X4szdM12CVpium1FRYWEMC9R2KHBPvZx3Z677K5iYk69yA7qDtnnjFWzDhtMqK6dPWB"
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
