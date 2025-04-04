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
    "5oygrs2BZEDmwDkyRh3X1oDmqrv9E8cgpXum7Bui2PTqtwvzy82gb3koiACirDteVXkcMp9XMXjz7eiYgSpbBLKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RM8cqcE1P39UgdLbLY6v9uAanfdNu7rr4Y1iXgm4MachhgYZnXiaGb42jSDxaSD94anCALXZkdFFnVKooMBKjT8",
  "key1": "4cmYjEtLwZWasxyUgLAgEuc9n3ueUHNKi91VtstiS9T6C1Z1f9731mAABLGkeBKhpHEr3S7yNUbXgR4DsjF8daBN",
  "key2": "5UfXrdZhjM5xxEosYKYxqh4B6UmG1oDT4VGh7gdZdyNHnYv1AdABrdZeVoJhEUKvoNPjcXFDohqrfzRCYdBoUZNh",
  "key3": "2o99baFneQKCbLiuh2H3nX9yR7C8uk2mEWMxyRQjHkb9XUsXvJ1bu9mD9DhMYrE7EvuxMNV6j35zXE1ovy6a49bJ",
  "key4": "nNsNmjDwkS23zPmbN5dj4xNWeGCXEGttGY5QHGt1wMCkndLm6JzkTT56Fu2vEDzuFAQPnYQZXH1vzVBtiUwKXyx",
  "key5": "rwohxnTYZmB79sQhtonr1LBpsGbAcHzXPmnuuUixsawMG53NhVxxNJZFEeRF7k3JZDx5YW3ZzdzE2dGAnVbwQLq",
  "key6": "5AXcR9bnxLckmhTr5SkV7w2scHqzz1tbAUohG4R9LWMCSX8mvsgbdPG6knLeok6NV2Njy3saSmdwYo8ibcnTmRXv",
  "key7": "oCzfzWs3Se9ewhxDNmYrtsYe56dKqPJQMg4bYDE527dYUjs6RtUN6eXqdZ1LESxhsbZfuSfX8QPNFAep22q4QfN",
  "key8": "23CMNNvR2mmY8RALwREtFRawfih6mSRt9Epk4XDmXTn9dYBWstuXjkBG6mkSua5w7J6WQ7UzEE4HGan3B9SNpkgy",
  "key9": "5uu37NnQvAc34hysxBQKf9zJsgcdzeufaBzewszYaZ91iTvUD2eAa3EqUxwiJq4QUr6TeR1iFoktFvx26hoym9yS",
  "key10": "5YP43QfcrABp3CBaXcQQr5dXy34iJpvAkmncKMnTh8DrkkLhngUZCCa4EUC25rX12ryig4attmLUDiYVz2u9AXMx",
  "key11": "y5FJrBVEqVomE7eVjPrft4eH84xeP1f4QTW8Pv6CnYw3tHFjPZ8EokjnFnKz6BcH7oGGYWyjZBcpKiDuQH91ZUN",
  "key12": "DvNeKkptEmX4ns76ED8AfE1YYCtAyeAGC1LysdtrN15TLd6BAM8X4qLPMiYNfL2ZoM6amcYjMTYMdMaUnqdz5Ud",
  "key13": "4URZj5m7xZJACgsecK2GK7n8WwPGdqotJMovZHCW4gtg6patK2baGutRxFgTGE5cm5DysvkkDi4YDsCtsy2DHmba",
  "key14": "3fUM5pzRzFpnZm1wQaGkV41JKvR7TgecAkkqNMHk3VxCfmtsnReANRD2s5ZQYXKt1sHMhPQEQs8rQ9k3yDkRs5y1",
  "key15": "33ji93aDU5tJ6zs4whq1JoJw9L8ydZvgbP9kBv1HSVt2yMELdv1GK74Ku3DYxCjpWzFAqsnC9E4jBSiae4v1h6Wp",
  "key16": "4hwazUGKbm73hTtj7m8qLyvUa2CBmSBEhNAXBgh5kZFNMCidwwU1tAreHFpsV21us9gJGo4tJuKzisMhxASUscJP",
  "key17": "2rSVojtHjEzX4T1Yserg3Ye8HmRmd11aCGHvtT4c8GFKihWVsX2Rf94jpqZhwkLvrnULSLPcHWudFXMYzNv4tqiW",
  "key18": "3e4qJvo9hkkVT7nELHtpNWspVapy7yRvKFH5qvq7FeTiVdxdt6cC8y6JmGCS8yoYom3q6Hx6MjG3qD19AR1YJsud",
  "key19": "LxbRzuuuaeYeuf8JpW9nLZexBpLqrksuRmQ9AuqnYUX2bya7s8rorwNrKsNrk2ifssDKTMkgAPwik8jWWydAZFH",
  "key20": "4ywD3jEutEgsmNhhqwqDLkkxGeDCEbjmvoRYQCYe2cTBuSgvPDmtbuQjw4mTLC2KgU3K53BUn8fe1fRtambtxsN6",
  "key21": "481dZ7ewJ5rKGxK39RSbXXUtTECgoCQp1DxDkoNDguuh1Nf7ZBGr5SBWytv8oJLfC8eEP6TSrgjThAQ7DEZn1Gvy",
  "key22": "2wLtV8iQ2zhDk12UgdAp6ApzNggyRjaphuYach2kKagbZgQJvzYpuNXtWwSuBSDMTgRx1enunv2iXNhLSuMUnP9f",
  "key23": "4HmwFWfthcZ5EiCzDEFQPGexPn3nUVUT1GvgRDgwfuMrj9WzY4mB5hvX8nJ2EDKcAgZDPUc6p9MLcg7UitKB9q6t",
  "key24": "5PSugFamXPC7R2xXaLCPpHHhHhpV6KudPd224o1Z3cUTn3VWn9VSjWDy7SAaZvYfBGqpjYWZVgpMontBopJmgMpk",
  "key25": "gNEhnLme5dTaQDL6Prptaif6S6Scvw26qoaLAJrr1yFtitN7cPsjVyeNU8dmtJGStFMGKHaqqfxf6Yphf1WmXDu"
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
