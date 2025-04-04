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
    "4r8EDR3NbS6qCQxJv4CZnncoUBJF4gt2evP14QryWs27wdGzjRPGZfgFDSxZsgArqTvnTMt58avm6CzRxfyASZSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J1zh6qdnLGZ25Jrrrn9o44bRKV1tjmexGE7f1hPLoVuKcTLtsiwz4PStPyKQHKxm4yFTook1ChuC7tqynm3hqso",
  "key1": "8YQ7UHN5H4piu4NY1RLKEFxL2UiPDBZ76spQvC5RY7RbMt1xfjVn221y8K6iCPwNvrbnFJ5AJTX9VaqSdZDmrMF",
  "key2": "2fCUDwrmpyqTebciMJbfxPZkKMs7m8h7FduibHoG655VdKhLcDTzDLURk65fW7buaw3XpEzG1fVQhD7kfNdJJDM1",
  "key3": "DJcpt11fv2vhErFUhNsqK9XWLSX52WRgQ5PGWdGkkM885vdhXP2kiH9kLtCLfVnTiUhJc4nvSFuSRZ96H3AFe9J",
  "key4": "5h54ws4KMLK8iPJKhEtuXdSTJLtmTS5FDmhx3wPqu97XAK9QMKTzeQnRP39PVpcFeUu2YsMowCvu1Zx4gBGDgfvj",
  "key5": "61bf4UWZ429heAJXhArYV1E3G96e7EJwtMnU7cLGkcRxs2vyw2SV6fxtw1HC3FtaNvPznWwCwqbUpU8ik8FYPVBv",
  "key6": "dm1HaFKRroVaF91WfAUHyJ9qzpTSxCgRfNhNuiWey6MfV4J1soK7Zkxbv6CdP54MsqvJQdUBLvWVid8CnRjf2ga",
  "key7": "4YNKKac8MM3XbdPJBdfKnoiAvAqN9cDNiNMCKk6kZLj6Ss7NkASNoCHehrk5jFuXeXVswHC35abY7Zwz8JHuGj59",
  "key8": "3SDzhD1z5PvwqUzJ3pQrmzFKzSAMU8kdXB42VqBh21B2irWzw1Fmy7yL2nrEgHxaYfuXmss3na2uFqX7pcptFUTn",
  "key9": "hHm2tCLo7NhaFA9t5E5ffgjBbuZpi3gk32ursGt42x7xLzi37uqEyCVfsTNstPsKaTTqpqL1zcZTuxsVKfWCukp",
  "key10": "3c3BV9gWr6ijQLNwxXF1wFmCkwswQVhztLhsfxmnq5HwPz7y1fs5QX9zwf7uwCiNg1osGsnu9JCSumcqQeHSURKJ",
  "key11": "3boKUHZEGTygCw2eE1ZsFTLoPsj1BnV6kW77T9thqrw1qDFm2odB8u7eB1rGPUxFJiVot6jxtdeJ5Tdn1GuHRmVz",
  "key12": "5ymiCYJ2NXdGrqU6GWfNoAXhBFFg2siLNi1TaL6gdxPWdBn7PawqUjdqE1DhJwUyaPYpW73Qyhuc2G6Y7NEdYwSj",
  "key13": "46acqVC2KG7fdHisYZQCp5fDn9wA2P8bNQPC1ebDn6yoJEJsP5zquN8Xe61M1KujGV2UENrfndgX36xGGe55TS4s",
  "key14": "3DaVbNMX77LW3yFr384W57L71fNYgy1H4nQnRfTXgfP5rYCPNJwsxRSvPaSzYTLGxHvwsNRzrfsuGDMy3bVsBWKL",
  "key15": "4WsFC6biRrmTMVLpRNXg3qLF8oqGdo5xZaEnQzBoZNDprHomDMiMDY9tw3iE1kL5yZDkbbiTmowZ7x2V4tFkiENd",
  "key16": "j3g3qTKQVWVYMsvbT67uDkmtWMuXsRakrASAgRsJo7VSsBJAvKMExdbS729G1FZRwU1Xk47m6vdwvThV2KoSmVZ",
  "key17": "2nxuSuCZ46NHNPDjvyx1ZL7QwJM65vMsfCibfPBWGyDdQ7jxHH12NK6Bssb8LnPsbwSEx64jmEs4DsQS2kyYx7MH",
  "key18": "zaQHUdczYwYnfGcQyUQt7q38TWoKhqffktMEDnE7qwe4LKriX5YGitmr1R7si2SFgUVWehzXcZrdzY9xjd4UefQ",
  "key19": "so86humfcWJZnPhNyPxstf56JPnnmxVdBZxSHTAvu3XGj8rxFG52SK1ThW8Mv71K9J1xv4SVEFgAwmNMuFXnjYR",
  "key20": "5JZTw56J9QWtHJgVewsdv8G73bZ41a3Lq1XMHM7h7GVu7hFe5B6ZTQVKBRRKfZ8TiTeN3VAtBdwCftA7sJYUZruT",
  "key21": "5uyaxTaJW52EjcXTdN6wCHsLhLtSGJXAnGFFaP4ByKeLfTxhUi1caUixTXfNKSccnJVgqtGiCHT3KTrxCHjqdiKH",
  "key22": "2yFsERh5quJ7rxK1D9374bJvfUVFnp2dSHNEbhdzgXXQNwLeHsKmQGzWVGjhm2U3v9iNNgycZKNR7MHCwCtMf5BC",
  "key23": "45EKk1oJd5Chp2Z4ihLzBwcK3Kvsx4cEA1FcToSFpcjsK7EQdhANNGyX9UDUz4PT5aze285vtciVuQgL1Cm5FdFm",
  "key24": "osJT2MUVrX6dDue3pnwuJXp37JGsHPGgEtdj4zQtcrRJdGtNYbv2WVBGT3rh3eFFxfKwCHn46Q8bSzdVnf5hGmN",
  "key25": "22nEv6WYx6Lr7XBWJghEqZriT5gJgTHsw4NT4JTDb7s3Y9EpQ9oogCY5NeSe1PkgEChiyu5biHPR83fAT9hKfgWr",
  "key26": "2JJrAUzh5CnFeehzATsSGi5jSmQ6Wje9yih3AWhDwNN8EcrDqtDLEQbgypPmXuDPich9qbXL9ktaqa7c4kfT5XTt",
  "key27": "Fxi8DSNPtzF4ppzLcraSyrs1WcQcQyhkbrZiTYkBEVNgKdjnwAgvSzx4YZxzhaLB63bdR3Ded99ViXQQ7gJjKZM",
  "key28": "4tdLcjx5k1jUesk6zs4a4U2CnvNpiN4pzeZK7PujFmp6L7TsnixcGqmCNCMXQNYVvP2wJ5qgR3xWJGPnYx4dyGQz",
  "key29": "29v3d3oGzsebg5N1KXrwH6NnZzhkTxRRX4TNChkQjoVXAduQjfPeJgNaK6yNuNH3cEKCEj4Kp5MvYczdxwBh7UNN",
  "key30": "2aya2V9JCvVx4BPs7VQ11xhjf6EQ2vC38kPo1eYzTRcYqfV7oc3F9dAZQAR6zreUHqLrtkLySGFv2WLkKiwq5qtr",
  "key31": "v4RSTYB6WWY5Vh9HTqdttj17KoTfmjV4VdobS9jDhZktHiuV37WXCrCfkwpMQRWcNX1KVdkSGEAGYBvxqJpRywF",
  "key32": "36Wnj2h8r7hCgkpGqcMQNSmT7xmgvNpN8ghATAFFkTjYQDAk2bSqqSLCj6SuB5cgZRu8oYB2xqiNUBvehDkNkkzL",
  "key33": "2HEK3KESvEmkTARUbHr1S4mMBCKEyPxB8BDX8VM7kRP79s7A4h2b6eLYYUg914Gy2CmFFjW1vrnKMMWpujVLDcP2"
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
