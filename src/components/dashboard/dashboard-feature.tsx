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
    "h5sEfiUpvyrXjxGRD7YcTDwfgpsNGutK8xXR7KJLEmR5tpSejFWhNCE8u6GSEh4oSHKXJHy2eseBt5DAW5pWErN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HfhmLLgHBteibZjgvdAH2TEmKQwAq2odJ2E9wh8xSYdD1n6Auw3gh7aBv7ug15eA5ADBb5uvHPUBiEZyJto2cLQ",
  "key1": "59DovSWij1jsyu2uAUvJmcJHVN63N7o55ng3Tm3MR68BkQXKiwrLLLVyWYPDKptxy7xC2iV8q5qGNL2zw3MB4tqY",
  "key2": "3iaxzjrhvQbgbgwpnjguRiZTGjMmCvZm3oZyJmUNWDW1GjmFU4EGBRjZHmcjq6jYNEyhd8oDRpotLFWDok9SYy4",
  "key3": "3toMHHfe2LP7TnUqTdkg1C86CxEuEnkV5cNmRzQj2n56TnmGXE36htRBw5BdjVGRirtQr7EY2gTZM8JQgZ5o6T9m",
  "key4": "2afJmkH6Ei6qqizvYNMSia8gLayshbKJdM7QqwMbWrtzVNS8yoUUGNWqfWLWLvkFbESceAk17E6KjNvEwT7R7sf2",
  "key5": "2CDBe7HQfSkYiC4VZpeopGfhTH6ZEuFzBbZnJ1xxzhruQ8BZmJ5tY5DdpsATsJ8g3hSdDygXtw18p39nxWotwV2X",
  "key6": "42y8BqRgLDehB6en4R6CFfM55wfF8nz8TuCeZXqW6oBvcbjJPd48prXWPPgj3v5PCdVYdCVMkrJMTKL3Sn5eP2Ky",
  "key7": "57B51v4GU4hTmHmQ9EamRGbLagRbMCTTkkdhqtM7Ppoiv2kijf4tMxhQhRAASNS5kNaYyK8dgGYbwgDfp1c22cm7",
  "key8": "4aFwZaXDBJbyCzYTKLMCSoEVq3babyycbVFuLEYerbEWXhREirB1Mq2vPPTmgb54mAbheMK7CPCFTRQDuvDzx888",
  "key9": "21tv13sHooMPKNowY3w7g572jTwfnsZ22ULCXTde9wn7BSWNbEurJEuiqFnboZuAYw9cmyHhjebtwLAE2b7iRQYi",
  "key10": "gVPyNBsdvUsdMohmW6v9oef59VyXZQH1DwZhMkmsUVXh1WemG3qBtuXCbgSduu4JSGqLfNcmpLSiwGD3RAgCf3W",
  "key11": "5r9p7kq3A3qYjMS3P79B9kYPADxVbLRUnNcUodjX95H8FHkQ7cdQSHmrvrD2SuZaMQBoc3GkDAqtpEDCafLaYx8y",
  "key12": "25oo4RMSGJCxNnT3T3jL6gJNYJ77g4zfd16BiX8qdKunRFzNHn8GaJTrYfX7haCzT8bSAiQ3Jz4UoacvjYWaEX1e",
  "key13": "4arkJRRTdDPnoPdyvdNNyzUjBRctrGCB6BuP6GjBYxTrgsMnPXTFq5T2Pj9tcVB9JjNMzbZ27i2z2ke72WfvLwsD",
  "key14": "2KK2UrcfydYutABF29qqp6B6dy9eKbEV4s6Neh5dJEmkKk1AbR1UaKY1ETLnXx5pZ66hHh2rTwN2QTDADmmceHPj",
  "key15": "2LHJE3VwFqQsWWHEze2uN1XP5E6RM2VSaSu6heShmZ6VUpMv3aLnSaBVqqkyh5FazVpLnW36PsGdnUbXzb8ECZMT",
  "key16": "59D2YrSEc6fvfasdVYX9n4gc69ZR9ZTT4qdNEzZa7mMnxKAmg3FC5RKfonsFrTUW8Ve3iXd1eeUdqNpFEEx6KTy2",
  "key17": "36CxXKQq5nGVuREmhHsjSpo2vDJNNXdFd3nzxRNP1UMVJqxfNvenNsBpPnUzqHU8tpzEtz3bkFosj3Q2e7BEgjaz",
  "key18": "sKtYsPRZNeTVUtvn5pzJcjAwKeTH85akDS6X28zXqJVTzFqceoBFxVAFsADbtrmThjZuypagDini4ceQirQH3KF",
  "key19": "3EVxddm3A8zLgEZjTupMhjRQSLc5jFCKdqJDDMQU8nEPRcXsDwuxcDHet36UjMg6iCRWnijxtHz3uBDVoaVTCR8c",
  "key20": "67CSXfxzuMf6qjkn9Thgd8nNF2sAoiwYQNbxZa3tTWy4MANQVnD8yoHuRpqXcXc9K9dTdBsyf2BuDsUkXigpYSkP",
  "key21": "8RVDob8PvQGSwCRStn3PKGsGpw2WFpMpkRxmtKuwVQsZUv2f1KgNRwy7Zm91Fka4oaAD1n1qanmWHEBEJ5ECBpa",
  "key22": "2Qw792jcVmtzYsz1P1tmRefr97sWzCAMPyXnYLk94sVGP7mUrTCGZKhtjtzSUfBFzifWN4KJNfTZQeVKTS9QUdSY",
  "key23": "Xwr3FNe2w38RYTbhjYBDCFUbeeC9QCPc9Zx5Knp6c8cHdSV7Z1VTbZuo9yD9sVkyV58kjNSibtHUgpta5AFTAom",
  "key24": "2BpyiAsMz9xuVXXG1QXzRfuM7z8pcX6yuhAH67CjGbtYeMc8U9JWH5CpLf8Dg4wEF8WsYP9PXAHZsXUNNvWUomum",
  "key25": "2rATEWYkw5R6x36XPdGS9qpqmag73D9sF8d94mAnPug7QoZn2fagf3sKw5MicwFuiLUtFHfcs6miwWgBePsbhxwv",
  "key26": "3QPy7bJsVjdB9XssygaSZjneMmV44TnFACYwcjpQCuXdSiRJ9NbTVGYvmVV87kRsd2KjewF4Xr49d4SAYQoMhKCy",
  "key27": "j7DnMD9nxh22851LNkjL3Zj34Hh4THUq5mJy2EA4fP9LLBveanB1wrj2JmWcSi4eD3YHvStzjeQjm2gSY9zftqw",
  "key28": "5xzHAg36bsS9y43JBJ7NB7FW1dBuXQvsVKNGR2fwzL6A4rDUBByAYoF6MYKEBcfj7rbwiwa7PwVEhhS4KbhKKdj5"
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
