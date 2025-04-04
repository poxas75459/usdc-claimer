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
    "3oHoMk1yKZgg2PRtbTH9vKY4xmQ5iG1G2JyGcssNztGLz5siHnHXRMFFAfA1oBm2ncSd5mmoXx3cR6tAdTLUZVxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFa6m4s2dmMqSpR7CM3kurm8Y12LnHZ1aXCgo9hcujy9Ntfgt6Usz4CtHSbmwJxiFj9DhdKBXkfH53XPkjBuYti",
  "key1": "4tV3oo5oGW8hDgE9Gfi7vYbp8fa7AsWyaxUGyBaQbtf959KwtLdSAUNDMFMkikWXpRM55oBn7jwt7YwRbZLU22S7",
  "key2": "3AiyjyeWCToup2sqZMJXagz7mBiWn6kpczUmJEvRXwAxtprYtPrThJwPVCsJuoKc9toZ2i5gRxkmuHMmf3KP1DTP",
  "key3": "3z9jJTrX2ff5YbKF3j2Rgyxu3Vx2o8h4z4Vb9Qyz684qQ3okERLysMNcEgQjRsKJkxyrgbw6vw1e548ecP8zRxbQ",
  "key4": "5su1U9Nh9NLENjspmCtYZXGVDLRGAn5aJRtaiPRadKMS3qL7J1xTWFWnTQb9fRSYujEjbe539ybb7y2FogwqbJnD",
  "key5": "2d4ruY3WKNRK8cz3k1E1x3n3KG6hW1ZfQ9yQ4d4QvQobhhGe331YfSc37p3EFq61sCo195J8nQ3U5j7kTVkXZKNb",
  "key6": "2Y4DbBtLENvEiTY7wrUowT8wCfdpFftz48p7F6CmvQseV4MU6jrS4EGKQL3gtAtmATXczAXgJTBdJaLvE6SfkG2x",
  "key7": "4PJcNky7yaApREhLGbPZ9G15MZHFobncc48LuSPwJ5EuW4Dn8eNXy8CCSmjWMaDGgBKm3fBDayyySnPUqvsdvPDB",
  "key8": "xpmqxKmQ23a65JAApdzgX38V1gu1JeWtBrjKUYLswwyVAB5E43jd9ydzwmiq77qrbcR1AZvjhsjcHaNmjtNviPT",
  "key9": "4Jd3G1vUTWtLLeQh7Z2hdoWyoPZtWvbi5kFFTCT8qFpAsUbj2Mxt6vJWvV5UVz2bmQJtHBQnqp97StN215CnsbGM",
  "key10": "edKptPixvtRRp2D3GRJsDSLMCxJtqMVPY543QzKkFoS3com8xzQmLEe5sfoNS59eezRovQPApwzcjFxW5T5NySj",
  "key11": "5oRgtcU4ay5Pp2fJZ38CDPFEVqG49Em4qC8vj8DaFTxLyZG2weE1bSodCu4ZVBewvuy7z2uTXpyv19uU6iAB9D2s",
  "key12": "kwYTFqpLBAQR941WpQKEmiKr8FrQPyAoakqQjosQFmuxJGebw5xn4P9N9fg9YHNyQ4mFPbY16mah2hJBUxG4pzT",
  "key13": "2yfVjR7388wfCRzeMFEcy4ukAjNBq2J5NV3ej2Yr1PMUawySRzTyNbYuuW4yV9QX6wTp1QgrjPTUtX5cRPhfrZNW",
  "key14": "3qsVNHG6Hgoe22Buzezw362wLnpdvBT3To8nXg6jBSn2mXLJwLCjrSQdqyQGYfCkRnKB5dPcphqq8ZTMY13SCkBF",
  "key15": "55AggodxETFR8DfHgTCtqq2CXVjAn8nfb6EqCAd6FJEuSWVAKzt51ooT1YUNQQW7kwTBKoVhrWTAsjRYRkWqvLpQ",
  "key16": "4NZgFPs9d3bF7LUSPneR2bDCfrMr37zq8UF7iy7whSSuHoAaEvTTzdmcEK3PNmftnhiF6eTN3RJ38kz7Vid9hsn9",
  "key17": "64WMWJFuaCoQxEtDA72buHYQ3J2A3rhmh5qf6gCL6UUWTXkDtCEggkTBRcNh8u8sMpfLRMoAFY5gDexUJRSmqMQ3",
  "key18": "5DxmMKyfhJ1WsJpwYCBXygFtu77h9tKKvk7Hgtzjnkg5rJDNP6iqgww1vfWPAYGUt11ZTz4Ljd7sGGW8tLVypofJ",
  "key19": "4tUzZHJ7d94rhW9HKEN7oCxazxEXt8LWxsuK5LWoZWb1HTET9Cc3P6K3rYePWakarBU4Q8uztSVFDT3s4zpYGvH2",
  "key20": "2vBPQWRAAFv7cc6jsyrTgk77aa9mekSYpyGQykt1mDwKnPRRZwjdjJEns7yN9hx1qUYvjSeCYyC33hS8wSBMEjtz",
  "key21": "5rsQYkxPvSt6hab6BtZsQkrymqkZzR518jL13vqa4vZSFCU6feLQACWxwGqAcq4UwGtRzCNry97GK9TwC22X5DD",
  "key22": "5HXEYtQnTKAoD5puKTUAZ25u78TTEELgr56hGr27n9R8BEaaKdEioJWdEDLZiQMhvZ9KFcBabEbdhTsRZ1HkFAav",
  "key23": "5wDLTuGwS1F2b6ZyKFsygUi73KujNmZQHtzdTWZfdhJZrrEF9uB5vP396SNrxeJEYQcpj1Zh2KAHWFNhgaVJKfpG",
  "key24": "3Zghcqhbk3bZVdSNWr3MxrPhAFX4oCMhP3DPcoM7QGY5G3TzSxyRgc4VH1D72C5GhP5wyfv2HmpdkRBRBRwe8wor",
  "key25": "ZzZ7TnYWCoWtZk4iErTKFWnx1dWVFHP3bmiNq5s8NyUQC5dC8X8YibfuTAthBasTUfEBgpLDCSKDfGvF3QKqrLT",
  "key26": "62dFYyuDwnG1fK1Yxg31WAZrpScmM4pZzkMfEm12wswumb1NgnBtYwj3rR3wFyqNBESLhnBHvKJEdrz871UJ1y1J",
  "key27": "4SwKdVBFY6nGqQNqKxF282FCpPEzFnFhKyXYvCEFbFtobN7sh4WEhYE515LmDixRV8X248UWX67rGqHiGcjU4ASb",
  "key28": "4qNA1fdrJH3cAg9vEKez9zpUnuPAHe8B4yyiF7HNdSqfMjDC75i33LeYLkUUfMtW2h3aDmvqPK5FvNjWBAoBsjHT"
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
