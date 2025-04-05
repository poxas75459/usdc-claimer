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
    "3339H9pb9oeeZ6iJ2Wg1bGv24Xq3sbNgvG3bMCWsbrZoXuS4KoYE42Gwby1MnkhDcrPorNtxLA6PCtmBwEcTPAat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nPoLQzofHMDrGMJsGpiujr3hXr6RPyVKnVJa8Vb2Ao1KXYg8pnzKXiRmQVczFGgsrqTj7HAq4say7HnfxHxCGWZ",
  "key1": "4T7F6Q6f8WQ61Jahvh4gEE4vmXD9Fj5vdp2XLGsQ8BEKCCuGfiuchEw2UFEcHX4CqQZo3Y8K3TUmBj7gdQLJVXBy",
  "key2": "3Te5T5yPDRLHbYE5hHFFEztmzLgksWbnvdRRuJrJ6aV6nuiBTpKaofY3Ljd82Z2tqNn5ncAGYJ7Lt4Z2KBcnEVHa",
  "key3": "4aaKUcmEuphhoUmSMMQZqhuqqiU5t98662WtYD4A4s7MJmoJPrBc2avG5RFLKqXmPozfGCPNqQ1Z9B3poo3w8446",
  "key4": "676LXfVoGiMaUg6eGiZNfSBtJq2dtbMv1j9eRw7Zx26hxjA41pYoTsehkFVq9JrTQWJHU3Z8DFNWJqYx14a5n67U",
  "key5": "3ggFj7sb2uD8ESsMvJiy13s5ZcVDuvcShtJyfEXNVhFaCTxRwHuJ4ASZwdxUxV7ErvLd4KFwp9TbRvTThMQxCbqS",
  "key6": "kdPoFSBCqcqGuaN3fUiEPbeBT1Qg4KLEQfstC5EGyLHUXuZgWVnYvoPfYoHb1hPerN1or1rUo958NTj7bTxwsAc",
  "key7": "LZJQiUj3JUBWdaeZzrSjLgdSYsDGEHW1C9QK8fzbnXMQ918hC4Qu1L5BNRzqGHCcMZGGkW75FzQSeA1mhQ7u6WN",
  "key8": "4WjdA73fKm8kDpfSAkE2kcGxBq5VEBcMja17ajff3nbzVnRyRqhZxRwWHKzRCwZSxV6KRCgBqL4mik44cPqtFGW3",
  "key9": "3t35FLkSxdzbbX8iPdAsyN64pk4597DEsGMbSqfD4sYxFpzCePPwh2FdZgZTd5AJK55n7iAjhKqvKbqwvXu4vJEp",
  "key10": "j1QbbU6usNVYiMdDDphG8NDRunK11EEtHGyvCx9c4VKRtLY5SUhaXnd9WCaqCdoK4S8Jhz4fJjmiouyPAjGPD5D",
  "key11": "DxRT7PSkUzbkPxvVVxCW2ss3hRQxchU74gdWEDPLufgdGQomY1NNmbRSUvwgBg7pD1ZfWmzJ7ZVCxViys57PEbg",
  "key12": "winRmLAnkwZLaKsctjXXFFkXqzTiqkyLh1PQ13sqqr5apLoj4EjS9TesWd1uGCEYtEix5C1tfutxXXPYegeXghm",
  "key13": "6JD5Gi9B9cRHVxvZQHn6F4YPnYofzcxYdTUBgL5MyhDyXbHWp4behZmwgoEL91ZWi4vExkthqfpQnoQo1KLxBRy",
  "key14": "5V9nnoWpsWPMWTo9W8nkLSNBkHvfM971zr6xnpNifR1PWoHcqQZrpEnaDVo3fuDeAXuzc7Y9AJjQ2ZRs1MtvyvfA",
  "key15": "3kW4dNokbvWAFju5pesHbeAtgtmsKUJskyRWoDPhfKCXQkj5eEccgGYtmeLzD5N9umbzikNVrHVw4iCxSj29FqhQ",
  "key16": "2KT5Jb997u2K7pGS8j3oVFeW8iqUt9kRvFvmsPdL4sfD1zJv6n2dmnvomb8ctuzrLzyCZMCYgmWhfc73LFQGR8hP",
  "key17": "2baZuEzQZ5BNXcWi1RUGpa7TFDCkLv4QhW4TJXxTjjGmM1d4Pn5hkhHZxvsmxkVzjNF3XQr253jmrX8gR92pWGoh",
  "key18": "nbxCJDJWc5gWt7hDETCz37NDEGRZehfogroDghw4wtqbkDEf6ZRf6F2LcAhj1afJXGDK9dutLZPNHFWXpK6ZZtZ",
  "key19": "ktdQ8F9aSiL4VRAC9Yo5a2o7i1vRSkiwSrMFbrGbFyvTKFBm73yQwauMzju7caTsQoBo817g7yTCpFSYE6DQ6wL",
  "key20": "5KkbHwsxXBtZB56i2Hwv6MFUVBaLcH5jhHxMwgEEfd4pKrBaKbVYpubPZXY9ofZxGtzFpdbLJQbs3Z97eFoFuutk",
  "key21": "3zcWU7cWBoMHGb3SSXrugkH2T43PBdXYH1wXv98UcFGKFNnnWAhWUabreLAUjQSxfNUsomrZz1K4VqZq4rGC4xT3",
  "key22": "2WzsWCYAyoTM5ZH5VSHwhc8xfgc1ma3LcteVPLbTVq9C9sjgTjBKQtNPh7DqTten8wT7kxnhrfzNXJLp5eo1V9aj",
  "key23": "4hLxmoRw2dvR1Sqo12tZiHpL9rpf69iPgR9TRFWNsHHAQt67nyKeU5YvBofG38B4fF6Z2GVTENN6GoPQRwysjsdd",
  "key24": "5RqXZ484zGnP7eTrVU3eBR6DuQGoBV7US4aqCHNvee4Mt87F37K1RZ7tb4eoN888jbR1Qa57MEhiufvEfKMGypdt",
  "key25": "SsekCtCiMTvhEHvXyyzousM4u8ndcA8fJbqWRnJyXJqtsP2Mcco8x22GxMQaHKVk82HbhaKoP5nTkQXmRr5q35Y",
  "key26": "2PeYMJRybbXJCutoSLZss1aNp6bcAzoWAPhhR3EnPfG7xt19QiiGStsKuExcLTJxQaHyHm6Soutm69Qyd7i2BGya"
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
