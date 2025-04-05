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
    "55BBKxLnDnCfq8YwwJbcSAu6XWz9MnmHaDpDjVLHh77bnCSf66HaYCKDAMZQuBZKpM3my3DiYYDpyMCEGXFi8zkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jT1W3ciotgnuwXoMZJ5VGSFLduJ4rQ7HELrQLzp5yzKfH5ZadEvtwtSq5hjgvSLzFHwc1REAqnWo7tqPvMCvjN3",
  "key1": "54mCcnSrToKjFKxrBVZNaEpiJX81gjGsh4zziGZjxnMpymF22j4LR1YgoXsyn9cqBAyFJNSNUUuxoQzpXAgupTC",
  "key2": "RnJKaZhg4sFqZhpSNfWt5LrZJFS62sqdHdzV7gKwatdSyhKry5BYwUCpZU8ZM6WMaKSWuysxNXNpPrFFDwwR9XS",
  "key3": "37Gzqut27wgf9QkdnL45WLWVLqDrSNNrboNc2kvTck8KdLiycU3WEaGY4YWJr17U6JG4BJVxp6F4Zx1uoyMW8zcd",
  "key4": "PTfPYZmpZ3sRvCt1ugVSsUsJAGhnPj8DvGz4DGoqC8zZGBdvXFHxX191fwzdAMw9R4yVq2aHHPgZzMzYeumBezN",
  "key5": "2ZMdwNygCFQ7WHV4zXmt7aKY2GTTjigqRUxTHWzAyvN3GcufMavXBiTAaLKVCbDGtxB51LsekVRLvV9iPi9xpMSh",
  "key6": "uzNX1FKuH3PtjZSfwq4WCM5hSC2RLpVJAmvPhSByZqy7VMBri6TvZ596Uq6arNZqnDBgQ8nA9bwb3JnBJwwRGDq",
  "key7": "5Cbhrh2wA5QaRp5KPqn1P3At9yCiT38cjYK44zAsxYqoh5xksC6dXXvAVRY85JxhAX4r4obodcSAh5ZmMfsPK7bR",
  "key8": "3wtdQhfgX1BKsfrMR2ThkzZzZcRFHsfm6WqBuvNytPWWoSsDshFAukRQirzzDyFmkD3UXvUgf8aBK73ywjbiY6A",
  "key9": "4AZwuEDreTrtXuKoEnoJASYAy8wquv3ASMWcdHh9XowAaxD6S7ie7mBvm3hcnH9uSKBBmAvpPLWkiiDL848ckjN7",
  "key10": "4VDsLtzDY83VknqKTuMo2e8dbfifhouVBcP4kqbX5TiAMWRZYBkkhCZA4sRPBQTXhEcNNksapE9Bs1gLS3w5EKBF",
  "key11": "xgTxtg2AMYqAmdpXiGr8TKdVW721AD6N5C52mCgSM3e67ztWHxJg3ewJCozC6prArzbb4B4GxbjnVvoPC1SHcmC",
  "key12": "4WTsaXqa1ccoB3cpqPJpjyTJK1fuk8YozBYMYWDjjXQEzVzPAwU1GQSUPhq23AecN3E2x8TzddU9sw4Gpm7ijZCr",
  "key13": "5T8zxg8h1Hn51tZ7N3Ff6vqGdKzyNQX8ZigrDaaiiBfSLeih3ee392fd9C5Z8YiqqXUqR4wNFK58vbzc1CGTMY81",
  "key14": "4gwJZ1YYoCMcVz49pNC7qWrEsyKB2NhXeTm3Wz5CAq6bgYNwPaMB7VHgekwGnyA3iGZmVZRQ61bGWfvVsVT9bhv5",
  "key15": "35b7rfY5dnx1c6wv3vuMrkdYpaAmGFyXSUaBk99jKDkcwRBFVGocQqg17tFVGC8brjLXiZw9LTU9FKJqo6c8BGzm",
  "key16": "5E8S9Kgjk4Sj5ipB7S1QSVLpmyVmZP3N2caZkdSt2cWBFX4YHuWs61etTaRDr2hKvky1dRtpoLYyrRqUeDWJMGV9",
  "key17": "mUg8AorE8YsqbDVP8owHWHvkweDKuzLsfvQEGEBnEB6aPEGZSSHU1j9N8tHJkgjEnEHVuGvJ52GXBvVTAM72tdt",
  "key18": "2zf2bH6sz5aBhWzdbeumDV7uHxbZs3q8bdNizegvqQbJjrNcL9nopjQzFfVwCYg3d5mAgHqRoaHN3JMHNNgFQb9G",
  "key19": "JxiLgKQoDsEqPufjwMUKryrevY4wxj52BU8R6ARSTpmxWDthQFRoW6U3n4SYp49iCGgAbHQnHFbGmCwo4cS5atn",
  "key20": "29CFoRfGjTw7acEuTzazjFL7RAiL2PT3DJPRkci9u2jrSWKHHSbFn4pvDkCHgQkQ5tHXXNY4aUiYAzxdsN1rbLDG",
  "key21": "4FgXSkb89dAPabZAsYV3tVfiqMFRDcyfSn7RPPBQn3uGGfGN8axffJSVmYaRPL9VhLEPwUND3zMvsopBhYo9DM7F",
  "key22": "4cMRxYnZRfRLhXxxxvzRridwPdZF49pyughKvEXmjddY34K5VRw4X1Ab7ur6fCx8nCgoU2SV5pzRKTwgPDE5QZk5",
  "key23": "3m398hL6PgNyyy44Zp311eYxc9vBgNR8KiRqGkMPz4bUeq1MAaSRpsf9rVkyyZe6uHQYtwDfx2NPEoggS6auYUso",
  "key24": "UuNbew9iwBi583YBYvakU7xesE5CyVSfrcYTxbBDt2tMisTdxRJu2zMu7R8ZXcP2Vogp2meE8EN37Mea3Ww6eST"
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
