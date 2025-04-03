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
    "4fpDTdS7n5fkbnrGBHfycjpLBd3xHiT96AmSHKppYwkK3gr7JgZu7vugwo1gAHTW5pucVeMPJ4aKqivpSdJggAmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ssDm6iZaK5XiC3VcjqsZnbVgvLp68Fph7o89L8nSXkSnb1gMur9XMqWndjyv4nXD9o6B6dzM873CW681Z6Dt5qN",
  "key1": "4wpYcdSL4ZqW2tNbgVV7zthWjpUXp9LzaDQhbQLHvUuxCx6xaLSXm5adibGQsQY7bZBeVjw7S6o8qHGARQU5Aw1U",
  "key2": "3VB3n2gThuRsGDSPo3EqQ8sM4RuVCj4TZkye9pMyX39DoYkCJkcsXNDDZBBoyPrKVFPsRnMpjS674QRbZVpBW8B6",
  "key3": "3FnsuQ3ySgB9UNQpcwugTunPyiaZrNwz4MscKhYB2NQhJeSxUdEb8fiykHdouE9Jf6fuiCxS2p94d1Gye27pYX2X",
  "key4": "4ztkGTSmZSdqDsQrdT6y2KUh9yqaH6tcwJQaE1tXu3z27f9aj5bvTNfqUrsCuqxweRNdDxEg8PAoDZu5eCub4ntw",
  "key5": "5trvsr4WvyQcGmt1Z6A1uEHQyzXoHxE7dE7YKe71zQysbbWnCLPgvYJjF3nqk2w3W4qxRUWt4x7zuphrRCuUMUpb",
  "key6": "4s8t43uAGgAmStm4PvE96CZPyybpP5xXketcGK42y4QmAbjzPg7N9pZ46hsPQajQ2NanNQPHTpwSgVaa61JDn8wo",
  "key7": "3hMnqLJTgGtspht27L8RGEiqX31brvq36Jhf6i9iZHPBLWstz8yVWkCHkozr1Mfu676mBBrQZXGvuPGHHuVFNCcd",
  "key8": "2VJGPZ7jHeHosWmWCmWwvzVHCxSJbfvyUw1qd41qTpDYEYhEDKFU1uNn5qX1afjTQsKWHVaG3QQvjHK7eYz4YyUn",
  "key9": "3bBpkoDLmUgZUh7N2SEgfjKYgsa52Uimr4KvDSTztofGCfHxRaqiQsg7zUJxpUpoJHicoWCFPrjF8taE3yC11H9e",
  "key10": "4QHrJdru9iNh1H9idcjzdLqJQGKd8uqrdc9DehgLELeQxSun57qaX9aafkrt5aMcbu3tkaNAjbGqDKVvC5dEEobS",
  "key11": "3LgdsQPVHvNk7DgEoBwFVQtNGtba6fuBdoAWFWpydp5KFTcZ2Y78EMSWmpByFX3cDcUTXm4DTxa5MumE3jPQh2cQ",
  "key12": "5D4axuZ7P92yvGmoZQERwcd5WtJSPjvgQJKpTZXCfiKNKtXmDCD3xDwH7TMZg1dLK1fvwr3c3vmcyNpgK7frZYSS",
  "key13": "4HEwk73wmxP97KCfYD8HdHEdL9bN9193ga5pDqgiWAv7H4siQvTD6bk7tnhhX4D7dwtXyXWBXumJPhEWPNmMh6nJ",
  "key14": "4CPgsY2xi2X2ZGvnEPb7CUUeozW9N18QxwXq7hKb1uhu1HRx2JECuD3Fi6UKmSXJWDYT7ku8EwS9PCbveKZbbYFG",
  "key15": "4pGTFgCeE5Y15GANCSJse9Dykwcda8qZFvMQDh9jRovELxajzMNBahZGGNK6KmaNWiPzXXyGojVBh3QATmngtYQa",
  "key16": "4oGWNV6pJVtAAETgDBRUNcad15uft2pJRJErozBqKTv7Vfd7yY9Gu5tTARZZS2aEphEVLFhCRV4jgqTemF3vRK3c",
  "key17": "49YuWHpHdVxjjCxL5HjQpEaL4hgAJVLkrH5C4HffaPdEzXzWVCoPViA8oe8xwhqbTt24Vc2MUWQUV376twRqaaus",
  "key18": "3fg9p9Acq7sxhQpXLfviMKXMTejZoV634xwTnKcYhBXQ258sTiXTBgw93FgqTZtxs2LCWymo1GdozrpmJ75UDEGk",
  "key19": "4CchXXpUXEaFSafU52by2kwyvXfqn1reY7YbdnNJDGXpF4pDy1DwWFmqPitqox64jrcP9UdD1LaCz1yDehUVddUZ",
  "key20": "93aSTi7AEqbRPgEkU1i4wH84fZ5sJj9atF9qfcqfpgnQ9gPce2X6ztKxJ7nZ5zD1wBq9zhMDSemX4aaDq96RBgi",
  "key21": "64dF5y8b4xNvo7TLCaeLXN9RxDJpUjCbTRzM3sRYv9tFSPX1QsnaNNJuFcHLkw3nRi6v1b51Px8aSgD2TyyD3iKr",
  "key22": "wRP1gBJRpuNyoXz2nMkDJy9nkT8BrTAbePeFFUxyYYk4Fi5v5dpAsdmJA9g6WRXKTDBzoNu6C3khMCG38PJoGJE",
  "key23": "3ruf9SDWD5whNtEH77xXmhMyTdZB98NYx6n4ycbYAVLWS4GTxtAsQQ9mrP7GHcCGV3cGvHpmLPn1Mi61FLH66ccB",
  "key24": "2dqJebeDXu1EGkfSziuDuC8iiw9ngXMsgbek9QMBPw57RHv75MFRTBqDrPGQx64Ztv7dMeteZwKsajx9R6L8Z2mo"
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
