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
    "32wYpPiHFKPoJApJX2FN5Xu2fiQN5xZGMysDRwCa2vZe7e5qpMFh7iSrnRwXxnV9fdURrW3XCUEvjQwQvRJ2BhyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HJTznDk87AeJUkcQ9Tugj262diAFT9msbDp1diNzoYnana2ygzRYFoPrTKMJTMqATRPHceTjJ7y4Q6N8mskctb6",
  "key1": "56tfwa2Enc23EuTkeem8dAyAwV4wWWQ3yTTJKhprXRoBczTvz2JKnWvSLNB47UNZHHUHh6rUshib9jTEMbG67JUD",
  "key2": "xdXaCPosKGj4sz4T8PTmHmrgpNt43J1aVBUADKqF3ezuTX1GqMUZK6YosURXTpLknUQS644iFZyJxSmw6wQ9jmz",
  "key3": "55Wxw6NSPF4knVJqnpCJxab5bj7FH3kNvAE4CUXZoX1rYcC6YCsQfdwYJ3VsmJHxu53JhzNeWfLWRrGNpwyyMxpi",
  "key4": "R44DKBuGUALcfFSEGqGM3BXJ5oBJcFf7oNtfxyqqxNF1eJACfswfY9Q1NARGjE51q1YBi16NUNQrr3g3sK18oXd",
  "key5": "2YPoAcSyxxCwKiX3LNzWumiyE1QW2axKE8tuYSXnjhjRYU6o5j21gsKsE42qNVvpUog5tPiQXCgFMxLd6uNPzMz1",
  "key6": "46wnh9FxnL6kfLpUBUumU3hbLzSP3FB5wBLyEih83g2tkpjawt5nvYGTfvJyPg6fE9oXrFdACJ63qwSSbyEwTB4M",
  "key7": "rFEv7wJ7aUkV29kxTGrJTCTAUGYTbgmVZ4x5G2nH2K9NB4MH5R7K4HxD4Ryv9iJnAYd1ZFxm7FN7DtHMUPazKuF",
  "key8": "5PoKJip5kHZnusKvUPmQgxMdLayEBhzTzrBeRRNLsvBBRethy9LjRe3ATnpiGLkPbipqdNoDPnTosFuwooNX8ji1",
  "key9": "527SYCNZGvChcd5xivZqk3bxQUCuwJcVP4pZrK8dXzx4z4SieD88X2iyo26Dj8dfPKvD5Dr6zQS8NMQnXFNQdWxy",
  "key10": "3GWjqGC91KdNQmEBDGfeZEfCTEoFj5iLT7me61Dcdb1jB5KNDRmye8FmjXwzThyuzobZvcPHiGk2mrvPdFfqwxar",
  "key11": "MtCLtaFLCpvi7ZqryS4ytktxjNsdU7pK25VscidNCotwdBPvcHkQLpvEARRiyKdzvuCqSjVoxZEwAHHQcK4Dc6G",
  "key12": "UvYcjQ9DVP9XpBrtY2nLLPTdVHGkRTWrbk8VDTGMGJfFRbdLQXxdnWfHPPK4YTmSfSYoiLR71bV2MVDsm6XQWoU",
  "key13": "3LPkxLrCjwixZXG6PhAHBd1YMnqt2cuunK38eEyPbEzRtso7snXTX5dNZKtAqMwEejmrpLwADJisscRP4auc3DF8",
  "key14": "5WipcEujpooEi7DqQdi6qXbhjNiN9xmbUTEjChKHmTc4Z9m44ZthgnJ5ra2ZmDMMbLCwz6WpuxiHXyeFN5rXpoxq",
  "key15": "5GwWYVcfRuTD8qucPanhLS2ukYE7ku1UCaWzg1MgXFRyvUEaovEeVB7PdZv7zEhNSNacjbaGh33riFzz5kKAwrDd",
  "key16": "5wAPs8hRa29gtkqhR8tquy4n1F94ntj5yScjJYRgqjsGHJEFnAjydCWenCa3jFKP8rqCiwQDU6AEPoXf7pt5qevE",
  "key17": "5ZGShPjXh29jBgkTx4LGGcdxYYmKzXKGGtXR43Vg7fyQmryNA4xwNSn6967F9NWxVjsgHqu3ampmJ33y6X1Y9RX9",
  "key18": "3iTQT1uCncH4TWmQeCE3vYTu8zo5gLShV7Bonr28uivuLCA43UW7DbnScJTP5pTVj34D9Sbb3iZ63VjZ28thafPQ",
  "key19": "3GRXzzY6o6pAvxzYNPcum3dKeXuXzrbqBPEFV3UhgKJA3Sim3eghQFdacBTNGQ2Q2oxov348pr4hqbg1sWBcG9uC",
  "key20": "34saZLSvJWAo9gRPXU2btXq2mx8XoLbfkrNCE2YzEL6wH4aTUiVwwQobAnskPvxibQsdcw9KdLojr7dAcH2bnhmu",
  "key21": "532GfA9nNdvtf3KcnLGhjQivmZoBWHdnYKoPub8zZrnit9egLjVuyhYXvFciGH7oQUup27L83HbdbWxSM4vR3LMw",
  "key22": "Zqvx9uCDRtFUs8GMn1drPVYdzsPmb3GcWE9F8otUkSWY4okiC16LUwgCkdiJA9LU5Fd87U2Hr9ykwFpty955gwM",
  "key23": "2wWSXkmvox7ZKMCbujodkRFx4UDej9bKZAurNzZZxrbqBSSY127c888D3xd4dyVTt5ycGxhzJCcGGdbz8Ftg7ejD",
  "key24": "5HfBbi7wqqfcpHQ1YidhG3Pg2uCHerWZGqZGUiFrewsNUKoHAtS3MQ9ELse41mdZG2o7DuYb2kLsMJ6aQ6tSqsja",
  "key25": "5zJokd3FLEZbrHfi8wErFWon9zouDSpdJk6quyha2dQueo4ikQjn681rGSiSJvx26XxxQtDxvJHiPXnTTbyBZBAJ"
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
