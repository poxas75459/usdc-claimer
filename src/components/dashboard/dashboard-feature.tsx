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
    "2oGz6ftnbs8CCpGMGR98cfKxjPs1NP9JUixMnuPtQBrrHMfY1QbKiYJgbsymXG82sGiTES7uGzwHUUchonWMw9dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X7RPBqDYQZ4B1dPpAWqdHebQ44P3uaECt4rB8G27ZPx4psGbyxjEV5mfGozjjVbpfZJ4cXJHXYHcBMjFnED7JNe",
  "key1": "619F5kinDQhcnpGE4nyKL9za9T9hLGr1mkLXdyvav2zJyirfjci3wvVLwA4YfUSTkBog3Qkr3ETsYKUfirmjGCLf",
  "key2": "3P3AmRdRwf8idHNorqXMZC3ghrP2JPjtB7rRZGCYLPX2VCNYEq38dWcNts91Vtjx5FqC5LTmVKmtAZYV7Jc5aouR",
  "key3": "5wvWagf29sRmpLcfC3j3VXoWMrGM8TP8Ng9xJRpG99J2kssdTKYKhnFbGsFDgVjixs9KXK1FLiwyEHqSvGCkJjNY",
  "key4": "4NzFnZXcLGt2QhbpASPdbJeHEtCNUoGjJEQARon2Gs82fVXpeaax84DELiZwtAewYb6XoyeX8kg8DuLNPYrGJ4FD",
  "key5": "54FhV2rd3DWyvovMgN7RSyv9BrSSgEkXkDiHEPBFSNhBVhaBEAgWveC2rdFRzK9aZtgodhW1ghekUHBodHwrbPCC",
  "key6": "5oapwFqJLCpFr8CGNDpGdcXjitpdDxgWwqjptExsym468W3LTkirGK1CyLnS1rCCkcs4gfrFs1XmoFPzoJDRMxvE",
  "key7": "55Hj7WimsERdTzNUhN6EQPs6p5fJWLt51fRk79Uwhnrto6MsasBvrXstneY8Hrtja32Af9NMWdJTe9b9RjQUUTot",
  "key8": "RgukYaqXqeCfYqmdj5EY5fxYetgQUmyiRGxHcZVFCEKFAPaeBdHLa1JLmhSpNeXhDWidymhojR1nUbstFquuwYf",
  "key9": "4wGBz5tjKhZbUh7BnnjGboQS4o4b7WsVTYY8DvPuV5VWzxTtU2VJbzHcH8kwwsK6WinkNTXqQr1wTkSjKonFuAL3",
  "key10": "5c8jWYm6mjxnjpaesk7seB6oNtNTbeN1J9MDP4sZDBaU4i4ZDFXk2KjmMBSCfcqDdx1j9YoFSkgofZj51qJ2Gpfs",
  "key11": "3ngWMJp8BVffVt4MEuGM1uBoihwcNfgkzzByczrF4xig5TJVibwagCQh92ACEC7TEgMriFoXVBY7dXkZYWMraZmk",
  "key12": "4aM9DV7R39T2UvXKCdC9YbrBy3fNXaas9L1RTv62RTBYomcaD8TM2sRsoyfZs2gCdpKAjHMhUeArsy9dXXfpyuiL",
  "key13": "34S3s8pXetm69NNRwFdc84zXDShva8Dv4wn4L49e3iUJWFuzvzzLND6pwAejFwvLvTShEJV4t47ggs8xykpvax2p",
  "key14": "3kZkwNrf7fjCY5QAu3uBMHJaXw8TgASyEsBS3GJo7dDh8Hi12sMFVqUspTG5ne5WK7k1p5Ki3RyTJLh8vjTv85ZN",
  "key15": "3LErkMaaChuKKs8ERqyRB3iFtQi4582qgXbtrUTDj9ZRqK8yHGH5nRxoh3pZK4Fie2fjFpEHu5QNpcAzqLscvpSi",
  "key16": "5Fg4UHZkCQHpMCXpPTgw3j6fUd8wim75QVEgPUp7rV7aevRmtUyFwFy9JQmhAoe7iXiJKQJTEj6yBPnv4TJ68Y3Z",
  "key17": "3EuoAgc8jrx2mqbD2UsYhcP6VaW7Msr1a6qjSnzcCmhbCZUGkJ93ZWzdtgYmhmiUj1igH74ioJTuHbB4n4VZXRX",
  "key18": "2SEKigHACX4T53ixp6eGfrogSJTHKGSpsvsW9DL8aahEAPjGBSztrX1yZvg1NZZMsXs9JSejSC6b872fErnB4GGR",
  "key19": "2MgysQjTFzqgRnCXo67zcE2SavXywSS5FmfQQnWfCtds2KrR5nqokoZbZvejupq6E5tBnTYV1WWjgXJPAVDLAZHg",
  "key20": "5P1rZ7AyhYoAJZb9hwtevdooERVP34AbS3yixq5mfuN5eyv97ZupnByFUY86UXqvinp2xgwr3Th9ijc6WBtaeisd",
  "key21": "5nf4UDzYwhprUF9WQwTFqcFeACyA7st2qsq63AKbDaYJhJtXk9Cd4DBvmXdFWUKhuiHgRRsgcuRo6W5UHC81x41A",
  "key22": "3w2wJmb3Ggv3BfBAZRZBC1uSFPdExq4jzSHaMANbgd7eyuE1EtQEErzAeeKsH9LfohskgUwS75biLrv9ErbwG4Z6",
  "key23": "2xeRihWZyWEam5s9iFQYUkG9nPsmATo8FUFZUpYt6hqf4XjcGF2fNfgYQPwRP8LedgAWdyGeSSugU2d8vKXJxNSQ",
  "key24": "4X7H6BRZux8UZ7qYiwBXsvHZT9Y72qH1uxoiYviu7VLCx6PobVM73wPH6S3DtUsHyhKKPMwZ5w5Bvp2KftWP4bU8",
  "key25": "4RxoHG9uEzfNdhdxn8xsTTADZaeNeDsLctd8ktzWgG4fkog48GKTVFUUBax7dbUTjHhEvM92o6gGrPEms6JZjWMg",
  "key26": "2Qs3cZkxVfTPuMKMuQtKSttPwsZXnJvWZhHRMAF2UvmiV8D7z5Y9MUqq2p4tBwge8SD9uzVwz1H887UmXCuvfeRJ",
  "key27": "4Mqz193U2mBmMBMGPVb1VBthXxWNHYNSX8jewfoEQoRHSATfisRiEkeFzA4at3bUzHW1CBovgLfuaxjaBtcPf7o8",
  "key28": "35ZQJwqJaiXAEkghTGic7eD4aBXrXMJdpyeFDiuhzjfKbb3mY19NbbpSZxhSDNXPu4mGiL2ipsXiet8qWT9fAdcS",
  "key29": "3ukZSbUSHKzoz1BzMWNLNaL41c1zijmWnZ6bWGrSSunMxJvv2enTVraJVyJK428SsoNz85JtsraWQQMc5TB2SK2E",
  "key30": "2VPJyiFkbLbqgcQzZ4wT1ogjbqZs4Nu27y6dg6YP3bzQZjmmVG5XdSV4TUQnEVD8uufEEQvWxuXcxxCEkpLNSNiB"
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
