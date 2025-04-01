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
    "2bBQd1LY9TDkGbkF5xpYrchQXYZYGEQagwBvx5natbskonueiEn1XWySewviVe6ubhUVxyb3JDdzPzQrkAV9AbCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "386BFDhFX5uwPcrevXqgAgcnVFNBcjWSkzTngV8Zpvqekg53gxzEwLkcSfL47K461LSPK5uN5XMWZwopVJUjk3S7",
  "key1": "5vUS3zW7MWkZyeG1u52wdujRDh9RLeB3g8oyEkGPJncwMGSy17312oZuGbAirzjmG1w1ibbBLCeSUUHAUsMkiinF",
  "key2": "4i6fanpQR5UPmXK9Hk3gpkSfhA6oW1uSdSLJKbGMPcvYDRUJXMxZqh4bErKBcUJFxVohcoyRpTmQM1rA7JBtiiCR",
  "key3": "4Vij2kZvwfCm9tBt1VBPeFUg6Lk6YdSqyt7DqfVu11LHcqRKijhVoqSjNSqco13SNTvYHGRBCy7Z992jPS8UGY2C",
  "key4": "3XRyspZ1i2oNzbCSSU3Jr5vSXCqSh3viwc2iSJFnK2FcRzvShaSic9qUi7oQDBVnQJJAjunUfuzXwX5rAbqFSy3",
  "key5": "4d6qgtJK78W7WiUaQEqSUvC46Zb6tFdsqg7cLmJ8nA1PpH1yVdDf2z6JETRGWxWywBmGx9rcFNXR99EaSo4LxxdS",
  "key6": "4GhCQ7aivJVuL8XNydBxNRmrknNbC6aUsvXpmxRuHNkimtt15QZbUaMag6W9BFsGbGVz1z3f7qjYd66KPwxexXDC",
  "key7": "3NesMn9JnPZjQ5HjeirBgKGaNKPbKbbSr8bpbUiuHQ5bjpPWmRZK7Pvk8udnYq4TFWN8Lzfbq8aTtpSmrPKxNTYN",
  "key8": "2jnxRUpLbLm9NctP5vVTgtNZdUcXKqpHARb2UHLbhx9E8vpwPWPFjnrkn8ppucsgtGLyY7J9GBDAdN6Qvtsp2c6j",
  "key9": "4scUmr8SSSck1JhHspQW8Tm3bvZ1HSax7ZKnsaXqVxL1y4CFx7Vn2Y1PUzboJZJR5ZkxASJGqdxryce1ikJpLoqn",
  "key10": "3g9PwwZk6Y3M21ACsWdcQ9absray87VGoY7Q7Gqucdpa8Gv1wq45KzjMpeAgJbyPMjNhJyLPsWQZgkaHZDGP2HZY",
  "key11": "31APv2aAbaKzv4psF4LFSfnDft23cCjyPc15PBNBsmznZ5wGnTfirQpSqbeQZKayrgo1SrABbJW2fFSBwernKxXe",
  "key12": "3R1SETBLfgisNxYhFwVadL9V1skSGKgzkbLGH8ko7egj5SxnBnEwxPxDceQP9H752A9R47SGxL9zMYrMM1uGdsaK",
  "key13": "GMTquSMvDPK3LWgfwFK7Z926Bokr1k3Sh7Ei5G2iBYmvLFrEA1P4FLYUY78rkCVnDrobQ1aT4a6c8Q7bQ8xmayk",
  "key14": "3vXvUbTDTnhRzNDoPYyAZKmUL8a1XTCeCsPz5vNpteZUjTPEZtHCMS296UVErtfXVpdwwL2NE7y7sQAo2J4Kj2L",
  "key15": "2YhWa9CXcSzD1K8bfZZvgEHVST5q2sATrjHQU8vLLmBxmw9dy2orVhiDSdZY4ZucdwFxPQxP7bejpZkn1kVjn9L9",
  "key16": "4pgq4PijUm8yQpTDLTaXRNSp4t6pLjubk8xTb64ZPxeEbtc5MejfihJCSGTiAxuShHcSnG5zfSt5AjPd2DwxG6qs",
  "key17": "2BzfK2LJbVML4D3jJpQHSv9ALM6WNUYPD7h7ZK9jAvTCmBCBKgBqCCXv9Kko4jfywRw5Wjc1QYDXi5t8Q8NAUvGR",
  "key18": "pGKZzPwhsKgNE2s4W1dFsxm7FCfoRr2d8T8C9FWf1wTzqSwMQXovde7RVkYfRFUyvjjtK7Qt7H1y3hHqGY3E5oX",
  "key19": "3aWsxF7QWG4qFDEDmvGwLswnceW2hbEU9oGnLGUXkWe3jANeibXv72UM9DSv5fyj4tDqg9JoNLYpBFw3Wrikbi1w",
  "key20": "2u17KSWxC5fCgttcgWFQY34jSfkQ7JWBKp896x2TJZLuVWwCBQMiDUMQbDv7q39u4Gic8hLc1yKUPkiuXj1aPEWb",
  "key21": "EjeZoP5SzhA5HSBktU7oTSsivgiouPnatanvjJEJ94p1PWnorwFCk59P7E2cogYA3PiLgFKfvZQwGHgnWt1vXjF",
  "key22": "wbdD9yf7hGkQseizmNrtvZryTiaLo8BdTBTpKL19LhKodTjaDKGkcVab1Dr2kLG3PCG76SyJeSJbBFpNnuoZsrg",
  "key23": "4ckRJUd8kC8E4vWmx9NXTMU1u11XeoTkAZDUb9CzKWx9DbhqFxxxJQTu44FYiyc6aHNCC9vBmipJu9zhdxekzCex",
  "key24": "1VUH55qR8v9n1pAn9M4nmzL9W8MNxnSCGzSyr7QmwoWC5ep3LaWwNAKGPPHt3AmmK72HnVXxrAUWSGt9ySxrQLu",
  "key25": "4gk74DKPX5mvHV59y4FFvD31c5hrvzZEnYAYjb5ZJae4dEKKDqPg7RuzCgpSaG2uzTQtgBzF7nf9ipyqUV4Xm9sa",
  "key26": "9gfkGRssBYgcFBjmx4kroa2bVNJRBVV3HGQno6JPCedXFFbpYU4CqqrJCinfYo39XRYNmMrzQ6z44NNgogNoj8L",
  "key27": "2u55bESzXcaj3JqmXbJQPxVmvSGkhktGErEdMGXsERef1pMsDkcZMffrdgNRVxYJPhdHjJ8BU4hWuHXCGjsRxo9Z",
  "key28": "egBtFYii2En1C2pW8EdmjXWB3DvLDp4uZk9VHmHtVtzSvctkQ1p1sszY1vfbuyBC5m6RoZ6yzXnmrGzgABfqUJc",
  "key29": "7X96SzLNpfo9j1kgNcBf37ZdPiG1eyrgztqPU8i37fpGroBxrTizP6Q3R7KZ86w4EsVSoneJaA5zycfygiQzfhs"
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
