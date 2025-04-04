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
    "56inn8hUuWHiqfkfxyWZSQXztNvrTwkMSLzCZQ2MpZsu14cvrFf8p2T1xD94dA88sdwGTS1hFbiFvMQaHqnUoU8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62zkYei5rCcjVPCJMjVRZt2uZF2jB34Jg9f2koQmJqAcduzRC3n25nwqPtDkME3812hWKEpe6wctSyYpDLqbLcm3",
  "key1": "sH7ny1k6hGBz4J1vkDHg6KBt48j6JUZBSrCbf833mWU9JULaTYmujF1ghDVp4uo5sZs1uVUXQbQaQehRBsTbo5W",
  "key2": "2VJ4XMD2DzM7mxU6V8n2gT6PS3yuAVChsg9zGsJTsh9XY7J2bfh5a9vtXnV39KFeYXHUn5tNinWP8TQoVDPPN8Rr",
  "key3": "FPHg6jQQQJUx9Xu8CwfFFc5gCzwYoLU4wxj6Q3tzYWMtEPdAb5RLVUP9GCwRBCkJvHZ1amXuayBwpw9fagGf2HA",
  "key4": "uCsKNT8vUbX9qbfWKtJftRH6FzbrTKDeCH1dUoX7Y2ciwqJ5NZzSnXrTzRGSpbhhobCys5PdcYbrEuLbEetyXn2",
  "key5": "uSJQcsM6Xjh9ZCR1djsz9kSS9DKJFimhhkhCU5arK41ntgDjoc4CiXXGzB74mbrYwWpSxsCcD24s65YXgs4wGAr",
  "key6": "UCX6pGdTbZSYnynkGWdMncxUAfo4avLTfzay8y9USPoEnmukELyhN4AM3SCBC8G3NysVaV82g2cYRrFT6V1dTp7",
  "key7": "5K8jcuXmVBsUmbT8LnCYoHkhee2Gkra38B56CFJwubnErZNrrNX9rjixwEq9XQRpAEMmGTDUZC4NZd7R5sNvYfva",
  "key8": "5TnYwvy2ESCyM9xFx3aPxasmfSohW3EHeYQoqFyJ8WsQmrRHsrMP3tYAoTiP1eaAokvDexgy8V4QbZnWU217FRZY",
  "key9": "2mSfV7dtmhmzKwSyAXgTR6pYrdz3snnjNKMWS1XpeiAPbjdJNFLNb8aBCscXhQrgK7vHaFrCX9V8BXgi3vY6y6fe",
  "key10": "3d6JziNb7yHiXU7c5w8Qi5qdEhPuCEWWfFhLKv7qFWABTYbcgXVW4GFemKjbmqkFfGYtTpxaZQKXLo3ahBKKMVE",
  "key11": "sCjhthH2JA1vVr5a9iG6g13Amvgqj9PSXLL3UTC5LXEEfNSbn1HMXVy2dU47KUS2RCYMrvjZYsTZBwiore6w2HX",
  "key12": "24RpjAmj1y6qSLuvLXNYfZTEtEwKvRseVDdZYMJrt51hYRkhAzFMZGi3hcoQ2LgbeRXNYnbhUZTtkqLvCrBjv7Xv",
  "key13": "cx2VkU6vwvgSY5nXusYBHG3Rt5GMpFXwb9Zf2Nf52iHDFHTB5oYhkQ21Y43rgrvkTpbjJmgTx7uLRaeJ3YMte3S",
  "key14": "2Qc6WHwP7dcXEhLRmMzCVP6du44WUNMkADG2vWZnZ9RsYPVriHueG7J6mMWYtMW2QukHb7qTNvnSwZMMYywJzKRH",
  "key15": "fvW4f941dAHC1opjXPMiVqUPpf8gcmfSMGVGe7cN35t6gfVZD4U3yG3fMGPqKLy2D8jE2DGiWFhTtP8ffk29E6e",
  "key16": "55Jyb4xBt3vBxhuYUmkhY2bcd49PEHfka9LMWC3RKY9B98JHzQCLUGuH8oHUAsWktsgiNckczPbQBfjMVXZGK1Pe",
  "key17": "38NPAUa19kz9YtBzyByoTVb3D5ftEcXRhEWM6Ra7fRfihXYgJHFQaWgufEDU7Ts2H83ghQjUP2sxHqTFsUbjsubw",
  "key18": "55gvQwLyMcUbhTWbXabyaBzq13rq8433Kw5fvNEeAgjqVjk9aCt6gtXDSfrCu9bA2s5AYwEDcy9rQUWnc9wyu5Kk",
  "key19": "3h1AAwKUEN4K7LEMd4Jg6RCH58NuhAHvMjXeMiMAJwdi71i1gewDXEjDcutuHQHCXdYFcN31bMKG5zLG1YZtMNHM",
  "key20": "4MmqdRqfozxjrDX6f8XrJ6aGme1qe5jFbFGHqUMfnpgK7KyRiuPX8Ac7TkawF1jJDzubb1EkqWh7tTeJuNccHePs",
  "key21": "4oAVTYa7CwcczZ4Pr8LGMBD8vWsXVhKvKVP6FRzDT7EgH8WW4LE2nKUhAPascgCHQHt3vQLY2SwQuUDZhs2tBeF6",
  "key22": "kwwFj7Cc1n9VFgw8JhTu9nk1u53cE9VKmBKeWJTsEfUfb4zuY5dHCXhwP8G4DhB4aq5j2oLb1JJqJeacf3Bc86t",
  "key23": "5MopRT1vq1qMX5RZuwmSr6b72zpKH2Mw3mgXqgPhTH4LFUB7byn4zimBUi4YmC7QZv3t92Zuws417PyacDHTNih2",
  "key24": "3eL7EdmCYp3YtLnzvRxdeGvhF5YG24WexT82nzS56XPm5qSfvrJESqUdX7mgGRxyce7heufnywcD9h71AxEeCmcB",
  "key25": "3WQmMeSkxmnQbArWuvpvEftQnQYE1XmsWAyNWxAcj6eQZvvgoZYNdyDnDnHGFoGazZt8hPapHYWDbn6Pc2ZSgjUd",
  "key26": "E3rARTyNqKeoAe6qL5smitJ48bgW6w1MbNxEyRnizZYPebUuNXq6X4YouYu2cbKVBprxPfaB65gLbbNUEumqHY8",
  "key27": "ep5PErGDMhq8whMjSVdEhSaHXiUQf6RkPCgcnERSch5bdUj6rRdWXNJKZCzhZVgbi8xrJMksGz4aw2qav3PoX9z"
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
