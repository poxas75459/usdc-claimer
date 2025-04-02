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
    "3DuzqmcpohQ5md472MHo8zMTCakmHLCf7ZaEnDKer13AGti47uvpubS1FPMAsSVV9NpAq5MUGNcB916PvKpcPiYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qN5CsTW72CSJHiLBJc26WtocrFCLczWAWktYn4zn4NXNJUZtedSWvN9EWmeaEDaqL68AHYDDgejiJQTZz72DZpC",
  "key1": "rYGzF18r2EUemJchoQxqktjjc8nXHPq9pXRyY6w1Qx3mEDHbiFveyEpXZb8tgwSmgaUHLiuiX5dgyirbdLrEEmr",
  "key2": "361nxAkJSVzDg383dBHY4cRym2suT4dQMdBU6yrfwnEwoZLaaLgHqSYkyXrPNSPxx616Um7qGnn3snBtySmVjxya",
  "key3": "55ozHuxGakE4DMXcgka4MEVE86oQo6YR1iK4rGuZu8z7QTYgBCDkvVaDGXu2NRNscok9sZQ3xCLZQhyebwdLzSbW",
  "key4": "dTHv73EozwFfGx8MsEAV6ybbCrtZT718wkUro62UGTN6oWedNFpz9bxtKpDty6PtkKuwo4MuhVEm2e4tUDgSJZh",
  "key5": "LoZMYFBjxSZB1cJTTDwLrUFjSfKhkYo7HFdRNixsUCBteba96gftEj688PbTsLpMu5HWvymufwk6CMTKEgjvxWg",
  "key6": "3w27xa2AXzDrAG2rkW9vhPcHvM7yhtPT3nqi8HPNjBTBtNeY7ZinpbFS6JrGtYWeoYVjktUBbXc8So2SNbpKiGkA",
  "key7": "5KhLDw21PKPys1kwueEpDUioi7CzCBCWtFzUHP5D5pU1LD6P8C8fUHqv9bgTasqXz1NqKMjn1cbRcDZx1Vug1eWg",
  "key8": "2XY4Q4PrTSwz6H4JchgcDL2NXo7Kt2r7UjzZ45ur3b2HMP6oeKcDu73jLFLYaFtFykeLQMBXhhMyq5fRgP1NB7hs",
  "key9": "5k7KHxoVgMxze3oQYfRsCa7PxfJkTxGXagVX63jLtgxGLzisue3FKihxMuj4jQyTheYQRAhkzrx6emNRjeZk9qmP",
  "key10": "2cesbtUGZccRctRyYAN1biCZcVAouyiXvEm8c3oPEJb5UzXrMQNg5gVt2QS9jSvULPy71h68EjdMTokCaEwrqojm",
  "key11": "2PEMfdRFvLC2JJFvqkargAfosUqezEwVKo2cjj4XeJifmmCaCbe9daUyhjHkDPucgk7wHwvDYS1Fatpq2gCvB6bz",
  "key12": "4EbqoFGHihFWcda7yh32zmjXZcT2TTAtBYNzSvpFf95StcGGgpHcy62hjHTkw3d7qBoi6uE6wWHE91AdHWnujGKx",
  "key13": "5wFanSuUk9on8q8ih8T2uCTvC6jZNXsJTJwhtqXyH1eULqXy3z2mDQUcy3LadMGMe3bnRoKJxY7SVxkjnAMX2f2k",
  "key14": "3PtFiKdAxkaQDnbqga2GeZ7nWLcbyBotGH3NuQWtZUDXw77EYK5uxe8aSi6HuKn3sQkSFZkVx61gLf7272uC9xAH",
  "key15": "66sBrrtn24y4wozdzogTCAA1g9hEYMAL5DATTGvdVkjHYSCoLgfgcXK4WCZNyBw4mvFPgS71G7xrk24EBciFTrJD",
  "key16": "22egq3yPkjgNyNfs7fnJqWk87HuZg17jfEY33hfto3VjWgDwuXpfqigdKN93mMahb54SfYRYobprw2w1Czm45EKn",
  "key17": "3bfm1t3gNfM4rPTm3FN5hZ4zkNZw3b9MZvFqeaH5rD3zVGGqmW2vkDS2KbL3h1H7Not7Aa4Rm5oQ4eto5niwaXB8",
  "key18": "2UEBWNvt6a1v1fshv28ZRWU3gW395H3s37GbXaBmK86rLS5SvCP8YyCnX6Brv2m9oG96QuJt6sd7JsaTc5khKjvo",
  "key19": "551RwSvq5ZvtfoJPxdZK96fcup3R6hSLxKuRGtUdFrgxzEA1YCyskoGSVqUTWdhjGXmEtKyFZmvappV8nGZEdsMx",
  "key20": "53ndETPJZd5CSZPn5Ff6D4iLMmsqSB1V2D3BZRLeSNxjFgHLV3jfxG3bf4BbtpKm44hJehkmtkw3d429wH9UHgPJ",
  "key21": "2bvvoy81dnra4DEW73NcqCGzQU2o1efdKq2gk4EzdQoU54DWDRbmsnpASJ3LPXwzwKWNbjwSNDfQ2s7QVHQAcp5",
  "key22": "453WtMKkq1J8urmrscXLLA6ndJzkQtWn9KDYCjNB29KznF3oZETk2UGRSF8EN9cM9DzBoVdQvJeaAvscaZ3LE1Zu",
  "key23": "3YVpSC1kkFPJNPXrMGsDLsNwbnweqX357wZnxny79gzeyx5RKj6uH9WUM5WLm76epRmLvjMzu1Qt6zbkqJNhZmP8",
  "key24": "5dfBdTTGKLoaDw8LC6pceiQkCp8aumi6zAPXKzijfhN6aMS8b4EauQvdTFUD5FcubS2HcbgEsbxHi4pJ2dBHfgp2",
  "key25": "4GwVFzhHudKmZRtAxQozZvBUyFX7cA8gYMgrJNAgfLugvjhaLkCwqhfww9eYmBeYENnh6TR4KQfMT8cLy4EhhF2Q"
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
