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
    "4hQ16ayGmTJKQRpWxHNJNyQio6GwSkP9CLU4mLhpFfrg9KUUfp1KrfZfKWyZWefZCYhDXcjuXcJXQDfCWPZQ87XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R3UWN3hmQ6JEWLMSwCJ4Xx1UfyVdmya98nBuRy5Tkm1k4g2Kaud4768ZvruuaFeCrwLridciEJhLiJx1DejBi2J",
  "key1": "2fzLCVt3M35EFcM227DCCPrdSoBe9PJEkyQ5pzZaZWveCR8ze8z5eWmGmXGFf5MDL2mbGXch8fU9zmsY3rFjrC25",
  "key2": "4ztrRcPMCGBGFbHsahoNXvTkPMYYnhyTiuvXRYUhEob7cinHvcyrure8sx9myMpccwyxkm7WTSRhnFZMZgfdjUdL",
  "key3": "2WgcgKNgFTtYcrNvRPdNUjsjZh7LhACHeDzBkj8D7GVvu2nrjrJYSat6zrdbkB12Fx2LoF2Af6r6RhWmjWFTHEnr",
  "key4": "3M2FJ6E2kqqphq8rx4VEtrgCku5TojGSYtckqzvzfuUcDQQ9jhoKtY4EERt98Y7XuQo8hyE4sFrCkVBdZhVTiBcr",
  "key5": "acbbKW88pNWb38kB6aHvvLYJCkSaAcB5upi8oRpTZAPdABQt7yabtzftT3NB1PDofEhnVtFQQRvFXXnsftSDbPB",
  "key6": "4HbfVyGGDvjTa6UCA7voDLF45Jm4S9NTGPnaDU7xCSAZwtAyfYa3hPPrXBdzFxU4BT9bzyf97rMiz5Pjs5drySsR",
  "key7": "2FiJQ6UVwK1x2n42xzJRk8r26nQjLKj54At4aKkEzrDmZn64sfNE1paWem6bqoNZmwawdboKT7y5as5e3ZApQ3TR",
  "key8": "3PbM6T5VuRDjxnWkNspLkVtoJdenKC5NUysUnDPeb7JuByUKFWWCdZj1CYQWvPAF5THY3nNTRfTKAATzdfdJh9Wg",
  "key9": "4EtG3dgiQpG8N9VsjHeVagA6zFSBP3L7qeLty55E5iMrmtRckovD51XTFf6Nw2agQjYPs1hGgEnb5iDYwdtbZTAt",
  "key10": "SdD7thEujtZH3X6hzJViFaJ48Yoka2CraT6Rz2UknhN22ro5yuHMSRMJFMvrdS19LNfU9YJGCD57sNXPLJMTdWb",
  "key11": "2Td3dfitstwaDkDrxWK3Eq2KrvKxc2bub9qPcdF9cN6iFTUpS6f2xN655ZuVxx7iZRE3d84sySefPK8zyqC2Q81V",
  "key12": "2HBBmj5sVnxAhD5t1SfrikjYWdFQUzQ8bcV5EudYytBMm7uyAbGG2yekd4EvBsGSxz3teUKRUNMqriWYUD42MhML",
  "key13": "1zxisuG38MGHYat9UedevQy6tkz5dsouQufr8ec5umHyRn3rxX9QaZnqmUqtUEFw5Tc4uLAimmw1QBbY9gzoerU",
  "key14": "2uBErAWJEyYzRU9VitaT3Benq8NTSWLfK1HVoP89ChMW6mh6aoPNwyeFPyrzEvHXePr822gCDPNRLMget6MENLat",
  "key15": "2ACMWBZFmBfgkJfFnzxmnqf8P4KhCEBvmJQndvoi1xZEfRDzSDuZWEWVLGbpnuhg9EQBysGsogxmP5h3bQiFurfg",
  "key16": "4xvRmHb5aLa2pN4sWXGv1QE6RM2MYtBMJEWe2Y7bN1gNTgzm2AmRYPUaDoVT5WBowgxxAZQwGHWwANEPavvumQX9",
  "key17": "5D6ZRrgaeWQKh2WogxABg5mQqJV4J4PBeApZVSM6Xf3mcK9rhUBfNf2dEvyGjx6ihNqpP93V9XGvm5rMbXSHKLBV",
  "key18": "5nhYW8qCgdZfEMuV4VUrb9Q8TCNtS5jGiJwJ6JxushneW7rJiGbhctgtJv3GuKB8bN2SyhGuut4fbnttWukaTAny",
  "key19": "3o3FbWSVDBugr5yDoXT1QLRPwv1tN82Jv8RoLKR34sP8R6W2xcqQhqNoWpghkiioEMLC5tYHbYP7FAvbkKDmeZm9",
  "key20": "3UTWf2tCWmkuWu1Kx71E8bg5aju8Tbwd9pbekA2mES3bdbzF5cgkFePC6SdYhHQhNrY48gXdvyt4ioD6csaq4k9g",
  "key21": "3AdT8Mn6q8PyhxYxMELgssN6iV7sfQbVSyRWFBLvyRRCAAvEt9XS9r1DenQMvYJRQtnVrEkjjuAZo3DUnVFx9zJ8",
  "key22": "5TicWUoi6sCt9eAxVcJgQioJL8zdrebDjE58zWUiqgGjph6m7NaTj9ovS53QYgwZxv1A43JoiiRAPLoqBNbtJXxQ",
  "key23": "2trQ3yHgMmxVaEg8QUah7hYoHc2U28ivn2obJtv2NS2vux4xbtbRWg8cxyu7yDPGtra5YpsAU3bf9ZvxvjXBaVHq",
  "key24": "2xQ4zdNTJFGFDRRQH2M13v93ig3GtukZ7agmheRErbqDkBUg7dBtffWgRUwg1T9eg4HMZHo9SdYQtT3UNGwLRWBx",
  "key25": "KDaGeR1mQpRdexDGkiebHvrjbjCPT4y5Lt4sGjU2SqMrXSzBj3AFhrmFXfd8oM7VhefzgrvfxYg86oLe99sisgF",
  "key26": "w8V98stRqE8xq9kotTG7MLMY5LzD3RFyFqUhJBsJoz7G1Ti8V8berPGEiZvF37LQd9NAjtceTitRks9xjKMiHA8",
  "key27": "3EbUq3wUjvJUJ2CTxXiNzrJjwCwuqMzd6Cx5PgbH7tGzxkXTSMhLJSWarqqfd43oCBwWFzCjgDs1LsD1ojcqmpML",
  "key28": "2n43943MEEcSfyLf4Ea8nrZbmfWccyPMU5QVQvFSqGiEhQWaG2f9YgXUvzoUQjVZoT9FtJ6DRUoiBj7LFAFuFP5p"
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
