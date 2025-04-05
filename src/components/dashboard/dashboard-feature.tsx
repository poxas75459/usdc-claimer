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
    "3mTECYhFKbdqrkgqiAwYE2tSfkikHHA9r2JudosDYsPos4mv7aaXFm9UGzuLQwqt8HAN5SGFwty14RfnPT3qhWoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1of7mGVzuKhtggTQRrcR8MsxTcrAuEqkaar364dBxNZBKdQdVs7J2g14bDHE7AQcnidNYE34LawTzefKy2xDnJ",
  "key1": "5tE9rHju966WdmWfswrVAf7Gxgfqz3vvMGzJMHwGso2P2HPHUk55Zgz51apUctLoQJdzVMpYj3Mm26MuzN1pC22a",
  "key2": "2JJc2XnX4Rdp4h6UWF1TtiCCrmk6A7p9LZnUpaCX5Xt3Q3TEySAz3sQA1b3fidVUkgXTTyty4ZRSe4TQBVNUnNKT",
  "key3": "3d2eSkrUKCC9TBowSF5WfVkhXrr4RS5yWBN1KR8L4tAfoses1eeV6bhFWSBkk2sGmUejQ65kYAXxzAF3jmy1nBew",
  "key4": "2tF69ZKF6cXUo1FqSqSHdpLiQU6aVixmosDuXHxdxTZaUiFydrwryzH5uxc13ZQeeWbn5dYMh2C3JVaZqjEJjJqn",
  "key5": "3Z58HBCF6mwUT11nZrh2vLY38Vucsur5bNpqpv9bxNYtj6HM2D4P3A4BYzVhnmAsTdLdiZfnpbuomdW5bowR9fni",
  "key6": "Lk2z92HjfqnnBBCJ1fiGrrAeFTRvEZ5rYaPbbbJa9oPC9zWYn8bCtALLPFbVR8mtCx8KbT6UNZgPZ2ttGQJVk25",
  "key7": "52xzaEzduoKY4AyDDGQhMJ61U5jN6ssq4fNVCeH4kYuyZiXacvgyARKQVe1wKH8FBHV6RiieUJQPRD1nRCVQr9m4",
  "key8": "46wnY6JZoWGzAgbbDAZVFYEEPcJa5SFsZ5NaVT3dg99mNbRk474CABZZGFzHpnUhQDTeDxGGMQM7yE8mT3PSZcA7",
  "key9": "3p4CKWHmAAhPDFQPQTEJSh6ESeqcni4RwLtz7D3wXemV7GnJTgJc6LAVtFPgDyPi8bLHbVcjFWdwCrnjwf3jX9jC",
  "key10": "29jywbAfEZW6a9U5gKHDcBdqirUbM3daZp68CfYFiBb1Pw254QXgFLpvm71JxrS8jvWTyxZbDPLapn4WidTKQ27r",
  "key11": "nNxsQtKsHvkUgvSsQPW7W73jemmvFrj3gdnNDisivLzTJEztKLnStpfGWwRaUK6Usmu5f9EdXQhbE4jQRwXuia8",
  "key12": "3njy5D4SLLGHLa8KLr8eLAuMjtR52ZoSqFsuuLM28cHDrdcZBQvPKZcVpQ3XALfQ9bTTVVNAyz9mtSjJhMxPti6J",
  "key13": "4uDHLr8Bm4oRPsKPmebaZNNGhGcgj2cVz25PoHrWrG1Z6py8HctdctBWMZDaacWTfKN2mJjhpCKXjDQQxdYfAqRx",
  "key14": "2EexUthGGiVKpTkQSgYzwFDdK8ejj5KeXSXzHScttER2bzVzAXyByUBidr3Hp3W6KvdSJmuxbNb7PCnYJ1ky8PsB",
  "key15": "4ac612grJkktJ8RpXX6n54tFJGKBv7yrc1TfKzaLkLuPGNzcnQQmB1LwCbkgotdANVDY3ATUJuYtV5iVHSveYJRZ",
  "key16": "4aSdZTmPeLum7gFhYWXaB73z7VfSSRcb94NpdMW7NYMT28eqKdaRuZ3JR5pAQynNVX18KaWvsgYHnxQtMykv2rbG",
  "key17": "5zPPegRPXX1ghqKBhrJHEb7oJu838pi8q9sskJ5dXsSpUsSyDYX5p9Q8F9qmRzX57De7gpaYwtHnv5x74u9qBiP1",
  "key18": "TZuLnWDMe4fohRgHaa7ZbCFJqLt7tar1hRm9xxED5CmCdbSkgsr3iQzEWrYyYXCLBJ5w3ecdp5Z4w4aHMGjoce6",
  "key19": "2wmaYr7CV8dRqLXvRvYXVumoiJZDTMjNbMWikVamDfJWmwDdcaNvEUKeAYqpT29Lzpz1ZkBo9kXLgZ3Kh2g17FGr",
  "key20": "3Lhza78cbHrnUMQrHerFchDsd1DLdkKn2rv4uRcFmK4yKWfeH72DtDXPCD3AyzDNiSEewBZVCbZL38hNsg7gztYC",
  "key21": "A1xHsNdpKVJqWwcXhRLALy4CnSqXgzyyvVdxyASqzQoadLpUbGgRWeZx9tVCD99g2rE1d4XnEAhGMRbymt3Ccnx",
  "key22": "3u327vp3ZnLas7s6GovNGnrqs99e2uwmoZAUAywFn1a49mZyXSqD6XNNADQ4m7gnPGAyQacsgbmHEGRtWhmvGtaF",
  "key23": "2vcHBCqCBg4PzS9ijcoK4mL3fdjv3vxRSTwdGXfBYZj8XYiFW1cKdyZ4x4xYxacwVE3uAssGsd3B8XW9uPFi24dB",
  "key24": "46pHLhghcKtTKgXnSvwzr4g6Nd6D1683PFjX661vDByg69iryR5AvS3L2EEfYMzGamE2UCkSDrwGNHqExzHkhPVk",
  "key25": "koLb6CriwtgSF1ZUAQGNbZ9JuR32esgFe9nG7u4reZ1QJALbHk3Q7XVyBEXX9xu9zRpjppNaaJ9nMqfF7m9Sq2J",
  "key26": "2jX91881hAoiQD1StxaQ3M6AdgHjQ9biyWRNNKbqZaUHh7AwWmc7in91LpK1vJzyBuS88timCRqtJBm6cwnK9rGV",
  "key27": "M2HCzn8FberwWyWoELNhc5k4P32srATEM6Ws8CyHkKXpfFMsJPgTXzihjeYFLKzCLHSyEuXLJB8L42P427pWpHE",
  "key28": "4zF89RjZB11BjM4Swe5rBPhSuZjSXVidWRnkeErEPsokrk1ZzUoxXCesSRoiy6r5yDx2kC2Fi7a3VWKcLBe5FQiD",
  "key29": "4pYNMf9cXsERY6RS2AB5Kfq1ozNAcjs3wSGdUJwbJsjxMGEkJeEfWkJvvcRxc5LXKMnKzxLEMPFKm4heUou1p8Fs",
  "key30": "5MNHgvGdci4BmwZS5E5bNsJsPEh8LgcNgddLkiXfbEJDNRrmDzNsXiGKSd7rfWLB22JB7SgSmWEswYQBxmVhTTbG",
  "key31": "PdgAPBwTJ2RyNBY3Tthn8Y5GKvizZpYGAmCfbz6Gfmzf6kZGSCyB4sLx5QovPc87KFmSxWLyf7k7MR9ugNLUcWN",
  "key32": "26nQPt9X9xEM8K1crN63Dsck6iH19an4ovPTdPNaEahK2AP2yiqQwcfFgxy3BhQfRvynUo8FDmZYTxxVFk1aaL67",
  "key33": "3LHxNqSaT3ei5wyn9xDhaZHUMXbPxFqezXqTEKDNLZpzRPTfKVnXdqF6fJJuwyNeRbj4P57R7wFN4NHPnxwiByBC",
  "key34": "4AeG5DkEJzt5hXe7t8JBYZCLKW2A5BidSXucypLkTeraN1A8vYxjVDeosG7jTVgQR11Vs5o9dXBAsn6uX19ZVZ7B",
  "key35": "42ttcjpkUL2CWYTm6ZZbsDeWHiQPa5KuEDy8eAm3ZjkJpGcFDR3vSXKnzTzd1rXKaMPV6PyGmd9M5PMHCAUdMJ2a",
  "key36": "2S9R8kG6WVGzcaQJ8aKPfTRrHpyuZzMhrce4WNoUogPH6Mp8mopx7eBZM7c7K7dgPnKMZsKQSD38qB3ZaT19yAGv"
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
