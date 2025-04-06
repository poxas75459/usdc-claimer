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
    "s6iqGGoB7DxhNtgeMLv9evB4UBziJRXzsLU6dQvG26moP58zFPp5vefMMAGBEgXYUoLQZzXd2qFADFmevoywUBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44wuW6heGuoEXMxZmpp45WAYSCyv89CQMiC3aA2JyhfsApRSMaco6ip2N64eDTjT867BhtmjjT6JEy1Y1xS3pKH3",
  "key1": "2AWremwUtipnSRkD6iFesucyyoCHQ7J9LeGL6WFNxLzWqGwciHujedPgiRWjYsZkUDdXPP7xEbqvMxfpAi9LsnnJ",
  "key2": "5v4EYv3fzkD6DGDYAQHbrfzGkm3nPxr3ayihdZ9uqu91YgkwBHz4JySDjzFqMXNXACVybiw6Xoj1AzQrxwQDMiio",
  "key3": "3eL34smhGfYtZNiGjS4RQa2gBNnuzo8GhUmtSpCVYqEjBe7fXJTNG3KyBgRFgFfRAd6oYKRrraBtbrgzvxrFU6ry",
  "key4": "2N6Zr6w6Rfa3FuHuJXHHGz4i7WGjZ9jU8UexxiPRGozQ2VW3pyioS7uSLPKnS2SCLzRRTjQhVikwUH7MaLcanufE",
  "key5": "4j4XY84q1PHXaqzMUCSHc69oKh5WX3YG5V6GEDgqo3jAf8FFAuEg1dyrdd241kmPmCPNvYoMyt3Qoc5Qr8Fw4XBS",
  "key6": "24QqaacCGoijjzea77zNGYfarjwhaitUS46BJWji5mkL8KYfUsdUaFUeHdUQs9pV2mtq4jv5VJAUdx4q4EaB2qf7",
  "key7": "RKcxWUZigPZdv4oJ2pv7aU82CwSRr5qBHMKzaHpGMfFi9Fpx2cE5WJvVTJjauWeZ1FjrSbsGQxLuUgnE7hJ7CPn",
  "key8": "2H3EWgez2xKqnsD21veYJt2PgpD8tRZQs9FwMTUrcjtDxBAq8CvZDaRnKr8CA9ssgBTEm5n6V8bnuWHUVguiuqxZ",
  "key9": "4EsDjRXpdQp8MzeuBU2oK6ypvKkVKQuNQyK1v2RGqEFyFSSfn5AECUcyhLgAxQuRzRew6WbGYVS9ftmktbsbw2DA",
  "key10": "3fCbuzPbTHtQKbmXvDUvfPuT7GouuX1578pgNKG5gt7iMm3hvCDyFPag8muQTgd85LEuwgLR3AAQ2Wjvefc2bgFP",
  "key11": "5ESjb7KcSH2z4KjdqDobmfJujQViff6jpC6biFsbUsCNmbUZY2Dhm8rKPR2xSWEfK3hZ4kzM5TmM2XXBXuC1Wndg",
  "key12": "4gmmcwK2s65XGPgCNfwDAKsW2x6sSjuuAm2nbSmvcXT3fdtk5uJpj6zjwQXPKmMobo8GTQxuXA3BYD6yyurDNmyK",
  "key13": "4ipYQnAmpvEvUZ1XgYrdycAFpKAxb2EbBWzYJ3mNN3iW87zKrnVt5JmJCsRKTa1NuVRx4ELrQrBvc9y1yZSmBQ5K",
  "key14": "2udGVmtKn3XoBntENvJzbYrrQ8ChdZKkDty9m91E4MftE7Z2T4kW995nK5YWBm929UsvzyVVfrYbcvLC8wQEj4qT",
  "key15": "5UPNkCsxrwdXvJpmYqfryYCZCFRLg5XNUctswojafzCvtv27VQ8XFfeQJbozr433YnV9KTMtdtJNiTB5qikCzJur",
  "key16": "yYGbtRjH4GT31n87jok5mRMmeNL3hECY6Q58pb7vDHcCqgkoz79nDu1Fam41gSFfpK5CcwfAsfJK4WXDRuyCSPx",
  "key17": "5MACPwpWkAV5pPvH9xYE24bGJbFm8YbGiL3J5gPAgFzveW2mSHMVg9bTAfZBGD9avGWVbYZfkp4MdPNAD4Ks6pjC",
  "key18": "4pZotfstTwJQArmBh2wcSnJru6ZgWTLo1PhcjDEGHhmNAAgXvwFEmExVGNfFz4ehKKaUXUPerMCZPRkLgVia5zgC",
  "key19": "3SaS72cmgY9N9ULuVt78SxiHJ4NHKfS9DCEJfTdyMdfcNrzHZSU8GM4aDz5zfTSiQ5zY7aeR7BwaD2MnTtZCzPa4",
  "key20": "4jVA8nyp8bKTPWR16s4htX61QFMNySuz3VTX5JUYkSFhh5PopECBpDpwCkxaf1xonBpdMgMk9SjUAJ7AZ2aBF8U6",
  "key21": "28FENV7wHEXz5JC762jwB46k3cPF5UVPSuugGbcR2v49gXUtJTxQWtfmCuP5h4ZuttFX9JAK9ynxAbTgrfo2yTD6",
  "key22": "hfmJG48cdKHBfvXfvsdLPyRH43VGBcY19pxtr5qLaUjRRWRfBGY2YEJbFqZ5A8EGhub7qtuxTqqWXBFwh5qeD31",
  "key23": "5iTTjHBCkgXMpqH4tNuXN5VPXB33kLdevAS1ookRzMqD7yHe4deDjYBzuYnrnDffKvxYfGjNBg3nnxfuhBVkR1a4",
  "key24": "NEDMnSSchaE1UE6f1XBwvLwKcLrg7HxAvvu5F3zX4EESbf99KZ8xrpt5pC5uiHLqZBTpEwj56cfy2E2Y8LAMtbC"
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
