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
    "rT1ZupEbzrd3NmbYBexZBhhVsWNLm1yGgQ9YhoXb2KKWHLskgpSXXtu2R9y9r19JPFC8yTBoktHxJ6YedYJKtzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ymfsdfbRNjNrcWSoFw7tgmcUXgFqi79oe7u89CtiTGrxPwGZPy7wuGtB423cU3kbzU3pfTiLtsgf6kSVB2w1jE",
  "key1": "5pUvdK5deZqCCg9hK8PPoPVa5cadGiNpoBF6RzrdV5jVhT25jxGbMAnT8XMCVxyrVxh3f9JZJTTxtQwzC7ZUVU8u",
  "key2": "3q8EtbTaBmdi16LopwHWQfAdeDVT75RGgzXhxDoJrA6U6sSXSGd1KoxHAjvEMdzEaZxd88YZD9XSaqTVYZF9jUcx",
  "key3": "2gtrjKLvyxNzDUt4s3pcRkfTDFZhWBSFWD2c4ChYG8L7CzMVd16verS7KKMtJHdfGXZ1WiRoGbHrTALxTBsDo5jP",
  "key4": "4RtfBUHGFceUFXeVU8MjpHu2J3dTFrkVHYybNDxvnUrGAoKHVKnnAY7Bbx4awyUngaY6RMg8sFQ87M2UvU3zo99V",
  "key5": "2Kt52VeyrJUrjvqZrPrnuoLm48jwx9GWmLreUcYRXNHvts23nFUrm4kRDm4zBKCHgjFY7FkaBp55EkGesvECZdoC",
  "key6": "4YDh2vdcNBWjr1LPkUtgYn1i9RefYJRJifuBYHKn4jJ9r57SrokGZu6iRreRsnjtHUHCSgq9iJZacXJEyGQyNVDQ",
  "key7": "2n23e6eht9BtGJL9bEhux9dSQHqPws3dHKw85fVGg7XTZastrkfBRrVC628NvzoMNH5V7PhvH5Kd39CX6jqAkFW4",
  "key8": "2vAEtEuAbChFg3iyXT6r1g4JPV8vNrJXu11d6aiWTGsJpJbatYxJMWrKEWiqPThmUpuGBh5mxCbHt5fbcuKYsLsQ",
  "key9": "mbzPXeBTx5KS3P1NJeyWRgfKUM5MeMHeADQTZkhfgjvbZAYf69bNK2GsatkWeTcK5teb6eKc5MPQMDkdrBGvPMU",
  "key10": "Z3abFE84jYDvZ6CbGjz3y61STpjBriEJCMDCbQYWiwx1PeY7TQLzS2eeW5hXbUPm46emWYJV9PMf3SJN5fH3S1f",
  "key11": "3ctwwuKWAmS1Y5TGp78nQWXLFSaWK54Yz9pFTBJSnWihnG2JfvZgynsz1zumhsqC913EE1a8um4aCNv59VJgX9h8",
  "key12": "ru8CJWzDq8eFPYj2UkXw9HoCCFGNmTaTDTbKRTt9zfhv6DMg3HPAe2jWSq6fyk19uoPrwSHh2SFiLnFE6DezZEU",
  "key13": "CHP7QCXRPTXYNHjn3V1EQ787JALajqxK7J1mk5wj3kAH7Cc1PngDHojo5J1zx6GTHirF2p4kVwoVezrfeNE9Kff",
  "key14": "2bbwBU7S99mu2ZFHUfo17UQBdHCPKchhPiTFXDajZwJdNgMnpMcqnRjavYXp2Eo1n61H2vudCRgTpnU19F2AVm97",
  "key15": "57QrQxoeo6LehS3aogeuzsBLDDwiT3bHphDm9PoMVzBKr7QjM4FvHVpPPSAr3ZbZZUZjPV28C8G2YruJRfhJ5S9b",
  "key16": "5XqnK7Mt2G38KYUxDN2b4ak9Ywknv5YtM56rpAeh4Hgddmu16jGk4ac6YupransTPiQ3zBk6grPTsre7BKuQyhyM",
  "key17": "3dzLWbLpookwE4sRwr9hNz6nqZMs44kTgM4YbG92Sm6zxpE1BrtAzc1AAt77xVsECjLnaDuAucNdntJZSeTjd7KB",
  "key18": "5XqsiZr6e7av4RDS5z5VsJcHp1myL5NyMf3m8deXBUwriFydBwkokbp2JjK6fN5WmoavKx4HMM9zdTwUXmKgFvJ",
  "key19": "5Gn7VUTi2VTvTVMmd9BqhgzjNZWi72vjiujV9Hwq28MZ1nEa6TBYrM72ZJSporrM2Ch9pctB2fc2bPAhEbMyzTbA",
  "key20": "2cce8ti4LHhVwAGEHrojhuP1sGRy3S8kzRzdw85b1UU7uiYcPRtqBRx9KTaMyxRTQ4g7AA4WAC8DEMASb7mL9vvY",
  "key21": "hCfs17vCoeN24Dbig2zUU4fkQ7SEidgGk1kDDqjTiG7VcLcqhRvre4EYMitME224q9dodoaXTQ3fq83M5KrpC7V",
  "key22": "2hZbQGJHaPxybUrV1z1YsCvBLTNCj9W4DAB5YxtEbntNaBqo3y1cWu1t3D45S5SuMuxhUnVjr3TB6ucEo9J7iJ6b",
  "key23": "5chMzAnQchzVpGqUNEGZv9Yhq6A6jyxeXKumSGajLpW5ShGUmD4a7naewoYz4mJsSwJxZ2xqQGRUT6sbEZd5hZ5s",
  "key24": "5hHJZqmeJ4PRmZD3uAWjv59NkRic7SNkPqST1ScwEL8orTexonaHUTTsXdCUWJCcp92RsdwuRrHBWEJq3V1GpvmE",
  "key25": "48juTcY4EEHt8b6pGJUmJFjkYmZ9U3SL3cGXp41Fw2FpSY3bE6mQ5ZTNwGVZZ9951rLPX1ZnacTcQ3PW7RDRwpx4",
  "key26": "5UznwjTtdnysQ6NvomEwy7Mj5zt8BHLYmnGAVf8JF8Rua4yhKWoS1ALMtmKA71UJpZqVmuVn5Ls652sFXiGo5fRP",
  "key27": "5zR2uCKybmkxX4DPvW33h5cXK4bp6GYf9cuR4JSvA8i3CNhU8GvCoCuvGhTcT15Auidqs52HzRLX3Yup8WHtdTXi"
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
