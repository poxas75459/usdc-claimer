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
    "5rPM95wWFaHiumm8oZGogyN9EvqPMKFBFnVh6poDKZSAWeNNhTux1y7GWSVTPf6axj4QjS54ReaPE5FkLUr9FhaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FY4PqL7m2PCNFgEwgVXt8T5kQWCrDdp87PhCKoPNS33hkdTYNpPMcbTLmdkLuPsVRN4WXD8eQC4zCCumBoYKL43",
  "key1": "4W116ZrATBxxQRdd5ufrbhapkv7ohEBYCavewxL4Q7matZHCYGxjkEygbKD926uvotZvr3z9khmBRd5qFhwr35ev",
  "key2": "QMCtvh626fE723RnhUdLgZMiEgzwuJ5amWHJPjvxMzD5hQv1QuevzBBTvyP1iFZrwSTKfBMXKFMK23sNQEin6vW",
  "key3": "3sN1nrD86SdkGRerBnqJnDRsvtkKrgJ4mipSH1dV5EtNKzSR53nuBKyqrK4ZksQ9Wt4mvr3qFX5LsTmA3kA5FmSt",
  "key4": "2ifpMmxaQLdxz4W8Uzar2Uc2Jyu1L6DVmCVU1m253RcLSZncrERHaeicuL5KhZ1jtJtMvCXqa4jz735H5vax55Wa",
  "key5": "2hqqHbPxx5atV7J49DKGPcrPB33XoLqNgcKzmg5B7prUL2KzfYf8FsiP8rQnKfX7yBZ2aBXDvaJ4SQf2SpGtVerj",
  "key6": "3jJSCavWwX8MnkV4dgHDDQqcckx3uTTXUk1UG9kCDoBhxx1nHAPcENDuscYnoHKNM5C8ufQEQtRyGtdhXmpc4EWP",
  "key7": "2LBfDXFr23BFcHzYWrqjLrmSuRxn2uoBuw3oLoffV7pSYth3bMTGHKMN8GsodzLcaKKnk7uJHudjMUeE8ihyTrbF",
  "key8": "58vP3L5GEZnSjMk5UHDDnLRWp7LrbmTvfZZ9WjoyGue8vvsFw1377W982mKzBkcDKvboScN8DAAhmgwrW3kvJ1CV",
  "key9": "3dRxbs7gng1fqhA8MgL5AV7wtSuAHHRiAEvBMBERs9kPiHNivYm5Zw1EEABVP97tja7YTezoSehizNL6sBijSo6y",
  "key10": "XfTwnDZ9p99fhUwH5ZquA5gkv8A9mzssLwBeXEWop3Rv8pBedbtCFHe7mY53KVJzuyZoa9NSDQtg8249eRfwS2a",
  "key11": "48ptb97iS94tg4YCFDLQQ6cmZt99SC4SH7FE5QSWzRogRxaGKmxVgxMzTYDSwjSG3CkRFiypz9xdGZYXhnBwe8Mu",
  "key12": "63EDYXbucv3w1VuqUpk8MvEziLaRfGa7PZeTDoKGeWncdV2Pcr4BaDnEqTQHyvHknUDx3Sd1eShMAT9hfF2BfaRW",
  "key13": "2rfbZMSQ6Fqihd3oSED6jRw5Wh2GdTqxrmzi7cppLGmuTeiKugiyKg6uccesp2bXxpzYorsBZSBq9e2YxKVmsLyS",
  "key14": "5zH22B4EmJMzpHhsJ3tEQYrw3GyV1ZPtLAf8SfqMipLXEPgXfEP6UMfbV3yGosbjH9xYTKpbJvodayxkS2H9k7Ui",
  "key15": "3cP1vuBVttqeRYxabndURFvhExDVHLhxgg1iyzxKm6z9fghJ1Vtr9YadX4nd7xDHwvz7fuUAdNZEpZ9C4iMyyUsi",
  "key16": "5YLpTEzJhkyPp1DVRDY6gkbTiyvVsgioCLDvDbgXegfJMPMvrZf8KnL5NogRHW82WB5bMuR8osMWgJy2WD1BR1Na",
  "key17": "3wSpoDJD3mcX8YHqJF99etJxppmEKLYD2nSb5yuA2fr4MHxcHYWknXCRcPSXxc7yE32gRA1byHNGwe7JCspQBdhG",
  "key18": "5KxLysLc11HAyk7hqpC2hitZWqqLNb8zt6Qj6vjaZ4BqTtYhZ3spscjFiKXhfpoonAJromcpfAcRrDtVJNvV65MH",
  "key19": "5i4n3wTiZAg7bQUMPkRRxfUbWGG1SNCeBNkQrcbYsCFY7cfzu2xm5UdQm4JCm7XSdtxTjfupDKJEfdzrDrNAMdYw",
  "key20": "62TsLLvQ7mspjaGYuomQLEypjF4vt14yftvj8oy4rJ96BrB5GTAvecp3Ns6wgQC5ZoxvN9UjJGAqSEFw9phut5ww",
  "key21": "5xWNxD39gtHkzCMfW1q2G7TPyzGL6bf9gAfEEajp6KxAB27BQce2BcgyF7eZFAbzJxKLEHz7ApwUriMrTFEUfjwU",
  "key22": "3BTBWkunMqJDRUF2oRjgwdCNwAtpAVq6doVJBvo8pTWxifz8bdbWSma8No3zZGqymQCvAWcEL8fdLBPYdQvMaKvK",
  "key23": "kVb8L77VFoxuPk5B8QRSAfcYgvVjJPDBaK3Pyi39kYqVS32ZRTWFSddvQsBVLv61FzarbdHeXYsKAxVTYSwAg8t",
  "key24": "2sN7yNpQQfmQoy3UbVvja9icCZFw5ccFu2QgR1j3Sh3dfUK3xokcGYKepjJyYe6pJGNpFduyyoaNVdtMFtEiWBUT",
  "key25": "3Wqb3PT6ZZvbuKK2sSEnGoxxHLGsg2msKKLDT17FHBumQYt6RjTsmgru4pyRG6Lxssv5P8Hc57iEcbxKKMsTmPaW",
  "key26": "U75kjaW2zxaYAjdaYXyRwT1dW5tW8ygm6apMWofFTA1GGdHA8BP1g95QewnVDNNaT55EMNM6vrfiP4SWw8XrAyc"
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
