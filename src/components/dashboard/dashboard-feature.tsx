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
    "aBxL7p1GoQAWzUMpHTRar9TC74hBNHnRbaikVam6NsR4kcRmSUdwzckbdcTrhypAYBbjFpqZjSP1rfc2eSYFTKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rsktQTHyPB3HQT6LWSRX8RYh2Amju9ztrdo27XWamepZpSPgNb3u7rUUbFU9aQsFMfRMUNhCv9Y9XnsaBnoMPNM",
  "key1": "3983Gp2z6SzRiKSz6Ldxs1V3wmZbLfrmrVmVpiGjNozjWY85rKBWM8oqLasDb1psTT6J1yGKezFeqF86Nr86MhQC",
  "key2": "4Ydb76ZkqfSKusAQ8KpC93SpS2benyWQrbCW1L5Xc46M96EpjMcUG1vYEdXSH3pDrhPm1EGF7o1rN254aaBiP2vU",
  "key3": "eKjLMmn28N5bBWx3HbfDkidaHydUfsQH4WpSBqoAXpLkLzadP9HVBRhoGnuCuHiQtg1KjmX8HPemc8gMmL5joE1",
  "key4": "3utrUoPG3BwEm8UmrKVp7WmzGABrqHNQ9Tfc7A3T4pP5f2EBeNv39AQMDnnJFBeJ2ddeCCjsFjLFYQ7i7ddcaGKt",
  "key5": "3KtY6wK17oY4LA6kjLZR8qBhZ5LNtgoruh1pzSRVgCML3AGX7itYFVBxCqf65QhXXazky11Ck3SsXMDGoPE1Wxk2",
  "key6": "4KqWpyPRmBcKjQDBtdY666TDMaLsyonLVescYHTTWLgm9fmagwvdCVDaLJSRvF1tqL6m8SpbtqmeDNmSaYvCvF2U",
  "key7": "62MSuWjSQ31HYJCdXLSaYd32xv9aMDcNTjKQuT6NkxPtseDXPjFxDCZAjtaGsBKku5jRSex5TkE9TydNyRiNgGhN",
  "key8": "2cTiMdJ3qZXaDWB9wjRLF1C6dFGwiQYYz97nTqfT1Ndj9U6MfTNHcjH1VwSGduV8pxY1xPqoR44xtn4kx4KpisWS",
  "key9": "3gxmRR2jR4r1KeD9RAb4vACLz8tAPmkM6KX3ZfaqYDcTFxdU6enkGUMSEGmroQnbiNWtLGmbWh29UFRerKtRKDYJ",
  "key10": "2qqvcESJ6TtTGKbztdUhtGZccpUsY5uWVRjV5w5UByivyT2weE3HFTXZ2DfeZPrxL7afDV8cb7jMqo5e6tNB5coP",
  "key11": "5fh4NCzcfiuYpLtpjeTkH7yW6TiuM2v8Yhv6NoNYfMDQHSf8RQ6EwtWDCycsRTGh8KSo3oxEBmodDfc9EqDkLySY",
  "key12": "4quSMsFtwHc3u5VRzotqC6vX11v8fkTmHPt9zBG9ZjhU1s81DmZWX7hdPHqQp3SMM8xCQoiRJaMpXDA1JSAuudH2",
  "key13": "2hEuTkPDFR1e9RZiuPHcKevk4ZbK5taKes8yDJVRq3MSPGvnLGhWppYkRxvt5jDk99PBe75NePkPZxKcmoSmurHP",
  "key14": "4n2SBeATnRRLePBdJckLQjpsBRWeKLP7tAgYA5LDnSTRTg8hDPACLwrokDiR5S1CDG3ydfaijbvH57Mgb7P9xBB8",
  "key15": "2wpVBvgy8jCxdyTTuMxmb4Bt4p3uPqfH3ZezRy8Y1HnaTcj3gCVoqvvahYCaDeAB49YSnMomqXpPPRcAky1H4Df9",
  "key16": "2Be4sWbg2oTaDyiUiddr7qCiYxkEnSX7QXuMvGa7ybAUJd1no81KjeYyC7ap7f2m14AnrPJyqjZk2WTvSWZgQ91Q",
  "key17": "49MrUnDwXYZuBtniTdP65w3iSiYBqzAwjbeZUuD3XbvFeMknWQn2QpY5rwXjNnKq3EG8n9XyxRBEamUo8cxqnyB4",
  "key18": "62wM1ThNySWx4JzmipK6TGv62YRHeYMZvY5btLLtFRnW1W64p5QsAo2bCztPSPACH2afExED8APJXxCP4CvUMHS9",
  "key19": "2D9djQVEL7tcQSzGfG5HpVaxi24DR7XaCpvL3kL2D3Gg1mc7rBRKHC4CsWqVhbBqGCgVpS429KizDkAQbgowVP7d",
  "key20": "89EUAh3NBZu8seSwzncEj5aXDZSTRQApatLUdDXQdMWUSH4XXv7qRjAamBNwfeuf3krPRJakQ7SjHSCbLXnZex2",
  "key21": "4T13EoysHaFjeyFALVVaEe281g6wEepmBvLwWtWjrvGCLzrjPdMnM6W6kRgVZqENMsrYvvsAT7Y1RGpQtDMLi4N7",
  "key22": "4uKR5Wcbsac67EFD93de1V3QbXScAkw8NYJT2ujo8S9x8sq7XLuQbesNXBXMk2iJMfHyEJ6cV5sXV7jWtdnVkV4y",
  "key23": "2e1SPiLzPdY781X1bruABQ1Fzh3Y4SRY9TUkNduTXr68VsqJXBhyYMozT7kDMfzTiqPhHmeop4smArAnmFnLfGn2",
  "key24": "28D4ayerEsUC8Vs1WzDUFE7M927cAubQADPn1ajgxYjWU6upPqubW3NkvDoswguxG44JxtWRC6YFaH1buYnW7max",
  "key25": "5Hy2ZY9rCxd115GivVVHYEx9MVs5v4263fWk7cbLQudm7XZe8RCpAdz4ydU6paDMfqGhaBYPkHG7npdTjtcBB3yf",
  "key26": "27nwi49usSH1yYDqrwYgC1qwBikFByxqWfGSWXWos9bKEJ4ZYrKQ7SVEtNyP8aYLRtaBJcBRGV2Z4FRppbt7ZKSH",
  "key27": "2T5gxwfbWmSsBNMcL6QPiURki1d5xtuekA5PWsn9G6vD63VkNF3y1EuMKbTdGYhqEZ1kTbJrPij3kE69SHKsD9is"
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
