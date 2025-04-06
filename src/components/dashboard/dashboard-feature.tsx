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
    "5u2tteDRnVXQVVaHhxLFUSw1xwni34oLAjThN6g1Z8fCvV8hgiwDErmJGmraTrqJuaYdu1ZZBU331N5bRQp1u9J2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFx6QhP2JppesymPL5Tw29enuCviJDcgim6SL6h3Z6yFYsT2ApM6TGV9oBaNxmy7M2fWhdptfkcozcVMpy75Vzf",
  "key1": "xfEgrk1ZnC2AFFp6vf1oUUW3tPJD3Xb4oPeye38G9ubJbjLFtiPbCoodAeX7EeqCU1tH3qHntjZed839L2mLppJ",
  "key2": "3zsX1BVWfXeYZd74cUB4dUUxT4UKoE8YCbiYW9oQDEV7EJHrC8u7MwD5hjM3LrYKhP8DyqDjgcat1pCf6qJUjqeG",
  "key3": "uet9Z6rJvUrin3joMnNv5z7wTzFiMj5CjHys5MSYqLGXHWqr9JAdrReDnMxd8AjEgLSpmdE9uSDzbzCudob9gha",
  "key4": "zL78kbNs9tAyVwBwdrfdiLT7pJD275M8hCuHUhYDWZvDbAwSU7f1RvYeKGpRhTQpJj2eE3wKXUsi8fzYLgoN475",
  "key5": "5SCU1kUe59igX4HBtvuAstMyQp19T3Uzj6jamwVGzb2RTkCJhFnZejaYVHELDgqbVXmww6RVJ6FaUxYhcPprBqMu",
  "key6": "3paSYQAktRvsj3XGd6H4KKtZqJEoNw5kZ3upUF7nR783tGyJRWFWgNTacJDq8SVeGDW67bysPY4N1972psifSd9Q",
  "key7": "Tn9sVVoPNxzRtdiVPDd3CxJd7wvqTLgBdmspWttgJQhLwEzELwch3JLhFMsNHi5NSuqTbGTogCbV9TnBAd4iMFR",
  "key8": "4NgrSnLhksCGVAaBnrx2w3V7Qpi2EvTpVX82ViUADwHS6HuwJDbSDBL6ooztBXrhTXDLH4w5PEUB3kFaiswypQc3",
  "key9": "5qYBtgQwX9DYo83tma39ZHerrboBvkMZvRUcLxrbXsDtc7WKUz3KhsGNRYM66r86FNDqoGhkjAFuyGw4Q1Hp2NHj",
  "key10": "xDeK5PpjdAGX5yvkdUrGhkkdwBjnsc55wK8mFfvEQRmiesbNaobvnG38xRxixEcAEPpbHQg3v7CHRvG3PeJrGQr",
  "key11": "vFt3whg71zfTVHMbTu1LrL5AbLcnZcYgDZmXYCYijHSvKM1Qh5fFj9udqSV5Mj2WHDncvTFxigN8thVYBBBMCdX",
  "key12": "45DbZgiryeYnuEga9GZiCruHdNz7Yw2SjtVtthf33xPewC2jQkoDzkDw7kXT5yYfJJ1p96UZqN9DwM2DWXNpDuP9",
  "key13": "3Sbv17KEyA9nDvdEeQ9cQTkJmsJm5SWnoD43oY4FGh2tcf9CzuA8brLHAhn7oyqXssuUaRpyEhoGSLd4e98RqEBS",
  "key14": "5ECsRw5fSJ6EUQ2eHtRJsxky7ebLKezUSZtkkYhSH8zixRFSiqEpSXAx4jfd7pFiSyJeADeDMKfbyxw7XBQnWzP5",
  "key15": "4wfbRJk6XVJGPyGoZJWyynTYmxSGL1hP7sDNRuKJGuKAuN6bbvvwbfoh1bAkHagmUPP6iTK13aRKwNyKuiP2SFZS",
  "key16": "65hMy2k1fVHVMaVedWZW6RwcBVAHaub5SP2dCk1V6dhyyJEgYAtZEFtr4QEReGziydupoTizxirzT6EeA2ZzPDmj",
  "key17": "2YPpi2PRtDeUcqAh7KBQZgH2NTEmUoSVjzY6s4yKFBoRqL7r4oNXznhjZZXRoQEAzVXooHMVBEuhGkfrMPNEyXRj",
  "key18": "2fWTeiVG8rgxzeyc3gegPDNJ2fCUjcM96ZeNkDFN9iPsHXJnpNFVD58Bj7MX4gYxaV6ArQQHEzxBx5UBgzzFvgNf",
  "key19": "3vtrPnQvxZnFmGk7R7P8WrBrZS1srZHEHVjfrnajzeidUmn7mufTMM7vqkcKDL3XU3fK7ot4jp6CuNPEjWStjesM",
  "key20": "mosAta3uY7qDPVMMgDiKrE15RuNqsBtUJpZhfaqp4FzjEAJBT3FqHB4J54dicEEoxC8s6TLfH7nSadZKLuB6CUb",
  "key21": "5gZ9DqoRog5o36LP9Mkygd37GeusGQbcCxejrqFavn2KtF5vJqhH4CLQa1uC3hpoKpTiZ8QWgkHYbg5GXJYcDmzh",
  "key22": "5LdmRkcWzpBT5VvzqVuWja1LCfg7tMcU2CmEHhKxB7MRc2WGepm4XLMpoRB7LNwdbkRgVN74FHeVYYyVddiKhtXp",
  "key23": "2vP6yB4ej2yi9CVVtTpkzmSFes83gyLRixDPo2rXdTvCV5CPLJy621Gkj5kd1fKwvcvcd3ZvYYgwTUqH4sotDsXs",
  "key24": "2zMT6A7nrmbTWAxW7LtXsi4KXaaQAtYM58uzrkZ4gnA5A5TeDuNB4x7ZWbdDsNiu13faBPgv2zyMfKsi8kjhkanz",
  "key25": "4ZaP2pUNNQKamNUfEm1kqhPggS7qGBFSoCJEnNQDrmLkePMuqQyThxcHCZtRvVtZQ7365Fk5jRDtp2WDCC5D3yZ9",
  "key26": "3QQxcADAS7DQkUq7iZE2JVtH7RTaiZT6NMYXAZ9P3okoi3PhcE7fQcmtdSyG4Jj2xTCFsAxpa1fxZUUw4exuxEnW",
  "key27": "4GjpHX29uPb8sYjCydkdoUazp2RmPgMtwYi4Udi97f9WXDCB5dV5Hm7WgjeBtvsHqtQdGpTwGZ7QCR7iwbupcG7E",
  "key28": "5PaYd8ptjaQXXQNmxNPoZo3aJRgdUQmAaMW1xYuVjxvGNQBSWP681sFX2hm17AYTKXrHDPEwX1oFfNZ3HAF16WCM",
  "key29": "3kHNhQVRwMsiEY1dodeVw3gmmBjaEMne3spKvPMCspHy9est8ydyUD9VbSvp8kuHBkhpfc8w81tPscNnh8E8nx1p",
  "key30": "5k88S9bxyAiZYgWdtrxuG7Ajy7fjbdYZ5u23nZaQuXSCcur2UvmDveEkNWrgzDAWRQ3YprYPES3bFpFhw9fExKF4",
  "key31": "Jo9iDLEZTB9L2pBk18azDTxbPtZSUPVdh7cDwBNQa7w3J1JpsJA7AX1hLbUHcSwe477ZwTmKwes9ByUJTtZq6G8",
  "key32": "2LjqxyXcDTzBVWJYkqKLoXUiTHCLWUaYiTHe4V2cMMe8Fh6PbuFFYMq5xCs6AYuWjgXgM8NGVpS5TWNZM5Qy6Dv1"
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
