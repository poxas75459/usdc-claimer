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
    "51a13PLtTzaNZWxenDTzsUGhFAfctAqKDbQk7m7X8Fdtp66LtYVK9pmKhCycbFJdX6ogcxUcApqcX26rV9m3i9Cd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TM68Qetscodnz5vNJSDNxMzE6fnNeR2rKZy2GELfkRrpnfgGKMDnf422jPkxpLyrbDMEdBzJaWorpx4Ybh899ug",
  "key1": "49MxGCgDhGhdbaJG3x1JCjxqLU26xSYa9wqKgJG7QLNAhSoGWu1i9mTs1ERiv5wPsjusfvJ3GDXeAMdSM8dPdRsL",
  "key2": "b45K3983Y75rDQc4a6ja8U9MxapJRbUxiyXq6DCz45eJgo5p8ydLhRaEtGYYpYJtCqavaaFUGcXnk3fBnGcRep7",
  "key3": "4EeTAWgmfnWSuByjgsU7DigBqUSkjhdW2gM6aVGd2hwrWiyyJKjAycHJ8Hk1m1oMH7Wu7fyC4wpSGxFCDw14pvhQ",
  "key4": "nJt7AQ4uCL482Em5m1pyFPQc9grpcpx7XACrX483voEkqmWqPo2MvxeUrzdaiEYUxp3Zsh7KK4foPjdMuc8ya83",
  "key5": "4atge5a7C3AJxYU6yXsy8YjN9w9ievThVKPV6Xj9Bx8F9gvbtSm1bphuPjudz69G4pXae5A4iuVc7LYEMSNTnAPW",
  "key6": "3hoXjkUrgaJqRKL2ADnyCAcv43dnKmiBF61sdzRh4TXGarRi7Sjk436JvKViACQngQYosAtRFEgNzMd9JSgH4LvB",
  "key7": "rJ8QiFTs2ozyF32YFW8KGbLuu8HmKqVLRHEMwV4B61L9AYchL8xVB3y9kJaDK1cumxWXb5oEJ9W1G1oqaYQK9ic",
  "key8": "2NgjngtKJZkh83C6wCSLVFzCy4vCtnWQMRKk3yfyHGNciynSXn5dM8gA4djtDdWU2QcaNkgiEP2nZuDaQGbTNtu8",
  "key9": "5j8Cr1M8ALPMGcgdG9Xtida6eCeGoDN7aR2NPpA2imxAT14P91e2YwoAN71AAvCrsEVC7vLhLWahiP3WALu4hV7X",
  "key10": "2EvC4bD3BGSZmFJTNvNppRPe3Utj7svwx6cSpGfaPCtcqBR35amu43ve3aoBnErYZHyf8DjAvuCSTsDw7UETNGT9",
  "key11": "eGQD3oKZvxT1aEiwKKPaLZ4G6F1B8oGu7oFwdg9FuSzEGF72VTRxTPFVCHjE6pVuFErhDrpkRWaRx7EowAVEXV5",
  "key12": "LEtJ4mWTByWNvR7AhG7io329e63MT8zUEhwvVLZVx7e77GcbunF6bNZeXavPyGFGLKkxZH1kjnTDonfAE3hNNdy",
  "key13": "3gH11GLfePdjiUZnnpH5dDguMUTea23zUKJ8LnwysLqwj31PBg4DjsNHKvudrEEudD9KnPfDxrVkJSYPCPwrHVCY",
  "key14": "gce6fx2U9XNpP34eEsH28W5SBG5CGTK3sn8Q8dorGuvuGaY5drQEo6ZSK6NRrJ1D7m8j7i5xYL71HXWZEU5pR8U",
  "key15": "gWoimmAW39L6pUgdnAcwqKxUjwpvjzewnKkH5ZHuw75fUGieojaCHASMKKed1aFP6WYaam5oYhy1iPFHR6gsHGy",
  "key16": "4yBW1XYJGH9J81GP7CW3UHonFVQMHoP8NfnY4H9DYKYEGYsmghGD6fDtW2de8EuRcHvUXmQKxx6WpxuJrqYQ8j8y",
  "key17": "5DtjCCsSNpBkEAGtBsctKFcsenvGs5ng9NYbNMsjLAejAfbif48KDWSiwNgK8UnQ9goi82oCAAiVNarABhzF8AhY",
  "key18": "3aE7y3GeXTYdeAuKfR3qz1ZxPXs2EGTEYnts3kTN2mAeGUwm1DjMVJrgNMP4BTTeimx5TmKDCfTiVAvfYBbdPPkN",
  "key19": "4vzgdfH6q3QtZoSXUqEWgajFxdUVs3dyGeZt9tM5bXjAviuxkgxaSMzN4SNZHx4PwqwDUXMUmAVaoCo7Cu5y5kTG",
  "key20": "4oUgLceQKJagdxvAaXeHLBxUPCNeHeAHZNmYPHzfz27Uj9PnU5gVQJERQiNB7VkepPWuDcE9ksqa3iERk8zALdxj",
  "key21": "vqWXfpHBVASx5MFyx2aKTkqWFGwQvSjcuE5uXXdjfHxR2RzvRbHdC4WvGRarBYqoHhJHnvGC6CV8ib75EpmZczZ",
  "key22": "3HwkYcZSYFZeCsBXbQeUn2WHNaeXEWkq7VSQ12N8m4kXEoWwfJwu25DSAenBbfCyGcFGzdMa4SFFY2WdKzjAEwnH",
  "key23": "2PvZBL1XJ38gQMNVS6NaC9XwfVpWdSM8WwYjUXpjke1B5Ccw3Y5gThfAs8UKhqhzWezWLv8j2UoVeqcrYLRWKMhL",
  "key24": "5SgNntz4p8TjG6y8X1XrEtYn8WoFFYWxK8N9hYattbUUEB15phYuYCBBS16BpTJEc4wz5bBbULapBXSGSJXTvpUE",
  "key25": "5RLhbnAwT7Lu5ciRcmb1NRQ5XJhY7u7uJ5dLNbmSsWNBdRxssXMzrgZm29Ne6Wmv1nkqX8RgPEa7SnsFmfKuAfco",
  "key26": "5Af6ZuRpxKbHqdLFVjXK8oVUvuGQ8HHNUgQ7VVUAMK19FtH27LkTXVUKhJduNRRg3dsYR9hx9tUKkvWYiBLaMfmz",
  "key27": "2fNK56QuvRWXygfZSA2Pd2Lh3u4T71ESc9gWngRu95xre3jTJHVj5mDjpo3yad8pw2TBstqQTnLLkt9LjvrDWRTz"
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
