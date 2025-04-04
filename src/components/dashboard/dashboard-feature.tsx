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
    "3b4Uz2pDSdB1Fks1eQbPaXVetJT3hARBq5h5e2J56kx9DSuFTWEzn5wCUhK41shUbJ1uq9WUgwhBVxTbPb66uqq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57BdiGDvmuoV1o7exZnjDAsMgjzRUbPbSNUkaVgWoKbThPDrFbtFGqNXgnAmAxTSr6Pweyfmwjete1XnViEDbgnS",
  "key1": "E21vKhrnzLuHgDQD2fFpmKXt7c76GwG3ugUuzhFpbLtdnV5cTuKX4xbJDX6hK9y83N9GV8dsZn4h3hqpGG2arS4",
  "key2": "5Rb8szVfX4JAEozwD3bEe8WMAJNXEnpK6yFJdc2fKACqqpxQZVJEQm7KakvQnEvSYFvwbEGY1JUk8iBrJn85gZ97",
  "key3": "rG34GbJGbG9jbaZqwQoLMiKC3MHJjCLVCsVxEw2ZhAHvXVmspjaSXF1NTT3FZLYE2bjTQpukSCW89W4m13STUMD",
  "key4": "6aTEKCvWVWT81Sq9YzCdbFXyMDht97hgaRMkkzFcwZuXAsCj6fC4b9Vv815b5p1Bf8pWTdGdyXJyKZtqhr9tdbm",
  "key5": "5YxK9FVnciUGbef9Z1JXnMPffaQEop7PmXsuP1vrzRNTcjapmZFuh3AdQrGAYn9WnmmQeGn9ugbjA3Bjbp2pCAS3",
  "key6": "2Uiv9cbn3HvqkMw9UqWGHz6GRxRxeg7531jE49GzAZD8FtDjT3cCj8domLzSgqEgrnLjFCSvvSXvUrBGBAJQtWpf",
  "key7": "5dCd51oNrrEJC54EZkBbZEFLkb1TNUGr4H7pzHW5oagKhHMvfTYNZC6i71bXeVNygTr3naUZC5ewfzF5hNvWNFg6",
  "key8": "W3ahguqFfLbcMESAnbVSd9z6K2RjK2PZcBDeVS6bHJbXqKpdUMvvGqbxzB7PRWnxx6PS6aj6rf2xVez7XoWAKah",
  "key9": "4RdYbwPmUWa7YAf7mkUrkEno8RgqMVp7L4DbaktyNw5SBofPiAjjHeUMNKSpG43PsRBypxwULzWC4iCfb4rXfdvY",
  "key10": "2KxeYQtxgBQrjm6CWLaQykD8hPYZ2LMpkQtrozowZz6EEuo9evwPPodgR32irWAob9vTDsHsPtCWovdJP4KB7RmD",
  "key11": "55BY1ZE6R7yZnBoe9VMADAw1MAwRbfNQgte9V9gwKQ8vxxA4jzZzsS9yG1eF83zYU287witd7sofynB8GDMJeUn1",
  "key12": "7xAS6g5GmF9hK3Yjyndhj1yd478b5iVbpvyqbj4en4jHP2eJeMUuxNoHb2sP5T7mJSvAHpGRnEy7yBmcs1GhUEj",
  "key13": "44yf4djCnbiNQQL5tBeNGCLTwiVRozWMhZJJarZepLAu79Bk4buAiwXyUKYrPWUBgGJWqusv8ehDmUvoFawDdwHe",
  "key14": "3tQw2292V7UzM74AZa1D48zkviycMvJUuDjZxp332fiNHi6i16eRCm8LfKSSBDnrfXqysFzYz9Pz3QVn3hSK8jJ5",
  "key15": "4maKdemw61biPchnUb2FpnxRHwiCnBYT9epNX8jMuPGKyD1jVZ6Hec9ByK3SowE5Ec422D7EqsS2BdDLgnZ46cVB",
  "key16": "6316dJXU1LYP5eKst1u7Kg6SCc18gBmpM9oBRwPkZXRsnfNWs2n8d4LXadB59MHN2xcmvFM7SFqRbLMPk9wmCegm",
  "key17": "4qZnVe3uQPHfKw8QhsqhFvyAyQm9SskaNtVizJURp12RLCYpbhGwmvm8pk6tcob683tuVWTz9ucZba3BS2XsRsMj",
  "key18": "2U21M6Y81EmMHfUYNNrmUYKTt18NbeQvpJ1fxz4rqm9uvqX79sufPTduiyucyZC1aQkqd9dLebgbYZY1sjt6wNUa",
  "key19": "39NAqLPSMVCTXAb4BpSUCwhB7GRUY5aE6fF9TpgBUMCWE4afJP5YDePe2WPrjbnTZhSGBAnLdaGxce5iLk1Chuhb",
  "key20": "3fWyuteUB9YVHowvpguYna6c7rs6qHksn3gAuDKP8eDXSFHaumQhpgJ9kMQaurBUWqrMHZkz5yQvcVK6KQnM2qm7",
  "key21": "5dBTzuFFZniYmeJqNRGq3KKMN4RCpqZm4ikJhfFoSnCor7cXRMnMwtKeabjiupauZxDy7vSJwuUCEcrkv3wJshj3",
  "key22": "3KEKzUt1MQtuHiFCnAtbcvCd6FPRHWe8Qw48Gw5RKPxWEx9zt7odVFpWV8bWkLhbEXLbaqxvaXDZzH5y2io4ZvFh",
  "key23": "RKvEW4ve1pMs6MqV6nB979PHwZp92FoijY2W9ss42Bo9h65ow4xEpM22PXPLpjeGhdbANvntFGEPCbZi6BSqBbs",
  "key24": "2dRE7nVQejVqgCQtxLrW2B3fSbNjLezVSnBGnUwiEVauRQsAtx6fKqfAQC3tnFSnRttyq2m3i9hzSkohuuftb5Rz"
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
