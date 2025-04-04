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
    "4f1Fu929ZTw6JUygHCbxYHGbn2dXQP1iijovpxNBU1fxHcnf2EqgUmQBM4xGHqRd2YWpeLNYjuJ1jPpWxLS1ggyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjgeyEhQw2oypqYXtVVBg7K32ZDf4WeNwD7V83CSApeXApak5hGXRk6pkEYqySg8YJQDSNMVysE7u8KUMX4Mxhf",
  "key1": "twis4zk56cjK1tQtj94jnAocro3DboHQvdzN3sSQTMd36neVS5bEtx9JDgpWwWEyqwjHAvNpsWwEjEwLawEYRVP",
  "key2": "3gP4137LpgpxRBBMs4DiwozysvG9uPfaBzBWYcryuiqNwV9CurNBU9ewpqg8TANQ539QjdSkGA9yLK1p3TcHUj18",
  "key3": "63N2hVTobANGce9zEfFQAHVGb7nK4XtTs1ARStnB9MdK4sryU6yV3szfTTrDc4fRDAnH8tsWHjswJYdF4xHHBjcb",
  "key4": "3bGnEPf2xvGoAHaZXQr1BWgq9idKDDDfG9AeJY6rEft51JVg2A55939nTAih7HGewQ2wTjrr3sgrHihRrHHMjyZ2",
  "key5": "21KGLLVjLakk6n2oGgGJWNgxJjyas3XSSsdLepbympqf1dZfYEqyNJUa4K4e65i6fHfdrnApKigFP6AVyBqVcxAW",
  "key6": "5opatEaRPzQzEA9V7HtBQY2kppccDvPQaPZdZXspfGtAJ2bgaV4hoeEZ1Ks1gMWpL4df4eUiWvXBSBPAQ7Bn8GTo",
  "key7": "ktw9RXQG3W8ZVy7uZ6mHtr26rWZRkJ1t19aPY9YtEmACgdw59LVvncwnwmhk1X7Lj4AGzrEkcBNq6vdouDY8TF6",
  "key8": "57HXQGc4VLA9rSC8btqE1BdLHWhj8JYdSwvGSTtYrD2gsXFJpoPUjU3mpRqqVkqBiyctNKQXBQW7XVaByp3pXgZ9",
  "key9": "3GvAQdtHCxrbw1T624vFcDT5VrA1izsU2VkyJnU7Re2VfonqVBWF3TGLszsWpVrDy7d5uZss1BH5qHSoPfGN29jQ",
  "key10": "8gukJfzy4Pnc2P8xoM4M3o5MAhTvbdnkmMpquEHDDk2jcKUJRgWbKuTdUVkSgui7UEEzeQYMEq8hDXGFyu4mX6Q",
  "key11": "3aoyJ62s8JeKEb6f2GWptmm3DTxC1mGmg1JkuZfXbdMiEPdxGTXfv9Zi7Zyz6Q2Mx5JkF8JPGhWUZtZ4soBhLPg5",
  "key12": "27DoBGLEtGsQqabH8rGyu6mQwad6mpi7MsLmHiD9CCtRxFWxyEFkRGGDi3MY39iM6Bx7Ci4aTnY6VpqAyPGnZb2Z",
  "key13": "5fKoGpgi6tTf6DWiEttKMrFbYVH7QXV52768GSEjusUUYsho8eE8XMtvWLbXAvmop8n3xLjLK8qzQ8Jre7tggYFr",
  "key14": "54sEXHSGbMc8eA8NhJyj9LebxWxZcziWKAkQoy94BopY8jep6iHUktNNmLq91xtJHcPHBsv8v4YGiXpswacFLpy3",
  "key15": "2GhWhUrvoCPzYqri51bEw4bRe8F2eSBGEyqpfnjkusmRgnMvYYmRuYCTG8eDHZ6asDWYPEd49m9wTEk4MCKTYcCX",
  "key16": "2HzphTU7NqPnUm4EbYrXaiece91quqxJrYd9eBgJi81xPs72WCKXTMynG7PDdd26ucxRr1aNZ18HhULfQCMeasrW",
  "key17": "49v7eTsdx2J5EnVCQQSdHUYeMFSdW7z7Bd2kPsrAC1UcWHah1bXDxBywot1PPmU9enGQSH3VHP6Hz2Y8wZHqwvM8",
  "key18": "3MmbDuDJerqN37fHXvs8JUUXG8oj8AYsbGsF4wdJfPvGzca2hFkjj4ERUMJjay1pJFiLiMuxbW7ogJhgBkjsdPGC",
  "key19": "5aJA6C5U6fbqbbAoR7WF2My1nPrpnc1W35B6CNh6gc5T98Fr1RbVTfsAcZhqUSh78MYnHae61VVqnb7hnRs6MtFV",
  "key20": "4sWhMEoiLnVc1bGEHBDN43Yce8qeSHvq3KEmZr2EyvK28m1zrBMN3ofEqkkguHaSjs58ZJFMpthb2fWs2aJt3Uci",
  "key21": "4KCaPBp4qbsrcTgpX4yBduP9YbpXtVk12Wehf8UjUPmbKZAaamQD4dEDeuYAVxRzBHUGxzmWHyQKjMtVkW5rLsG1",
  "key22": "4uNHcDLnroVZ7MkqhEKNJyusRTuvyfmQJfKdT3TwLEu6FVEgx4qeiskVR1GinhApzF95AagVuBNcodAzfUhnNnRG",
  "key23": "3811znzpvr1XCwPfgeRDJA1wUMrp9B8zgCbJRqToKxypd76Z4UELqV5RscXaL8kNoeuzBD4jFdxMyuQNaKZWg4Yv",
  "key24": "GGxe2YgcLSPND5H4oAu8TSDNQeQvrAkK7kBLcodJqMxtw3TVi3VprA9Wt2BL3ZrSP4K49UsDL3r4EMFvTSmgsGC"
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
