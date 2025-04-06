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
    "4FR8x7c2pnLgvi7r3cAwh51Gw85s6azyhDqqhx4aRGMSfdWjDAoBQ2n5HKidozwdpyfCN8RLTM9cg48WDYjDRSmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zC8zcmXARNEqgyFjHmBf49QdivmEuRnezLbU7dAZ5DwRmMQCawSxFBsaV9p2ym3tzznmAcu9ofBUCpfCCDM6DxT",
  "key1": "3447tKe9GFKMY24CXCxgbkGAqsnwS8BAvdmX6sukUiDDrryqBooLBSjRtgwiTADvf4SJXad1oukXLpTW7j3Jp4CP",
  "key2": "2cat44dCC2dGsybBNp8PywRkPYo4uySfJQ2gr8o2VphrhZyEYv4XC8hb7Vvvesqcw1WoS25yaZufERrbQn371Sdy",
  "key3": "3Sc63YpiBkkG4NsEUp1syawcrwRP2Ait4rn9FYa42BxXJF5H6NBkw8DHGmdGALKsU42SckK19hk23qcaFU3YTE1X",
  "key4": "4DULJDjg84DTn2XcjpwVVY2kdGogPDYG5FLp6u72S6dqqQWT1ztPDe8ffk4bKAa4YqxXdrju5Ca6VUXSEYyY28XJ",
  "key5": "aB5UwSEvmnazyQvLMEwtEisnX1HeAPY9tTf6r12Wpdaem6VTnuzvZNGrdGxajELX67SUhGRV4BkokcCZBxEvxqp",
  "key6": "25WNVT6ytYpLC3pkv7BFWaqYJreqQb8mG3aUXUByzxv1ECvs4Ha8pRt6Q7qbrhTBcwQuRX67h1w9fG7Esfsti11N",
  "key7": "3mqsF1FmuNnGfbRCXpkQL1xB9kH4M9ZQtDaaQHwD1GGsk5U6FZSYiiaHQfHpmySDx3jaESnir4LWNmSCtQrfZL3Z",
  "key8": "4zGaFU7ySGTFQSRyecXQo9ZfrcHLN25uQQ9HJqUXB6R211Tt5ond7Q9TtmQA4zAKXnAfCf3GCWWVSHHRwAFit6g4",
  "key9": "X9pX3AhDwqTKVaYqpNFen43MrkiKdhsPtuVv5CSeBz5Z9yVXmsjha4Le69gngZRRJPwTCCUUGmMmNYq4vag8kBc",
  "key10": "2Sr8St2iBTfwfMt7PEDjWF6FnWUMtFS411WvUDWFusrxTYGPNBTvPpkmjD1UWYaZBoX7i3EZnPsRfenUBu8aZf16",
  "key11": "3zG9V9Z4Dc4tMc98FNQrERgj8c61DkJyjM5THXYPMe6DShbc3hvCfMjSgV2cU8iHY1QQVbxT9ZQJosKBweVKmkZ",
  "key12": "3MXW1cGMoVgC9n9J9xr1EmdQfjkSWxcG1cCYHDWZbLycngjcJEjceWVxegcoPLcs2j17Lj2N7W3wgUq9sKw9pdfv",
  "key13": "2LjyBg3ZTYorR8D3F5fX9r8ESiZ8NpNn11j36AjNPCK4VWZXV9MQrqoKud3SgHJkpBxqTeZgmZM9hVCtpSiNBiAZ",
  "key14": "3Lu1QsK119KGSQX2fQb57jzVvHGLg5S4HmSd26VWAWG29KaKhQhJom6UPyjyyC6qCo7BKwiS7jkr5CbZVtbzn1iH",
  "key15": "33FXHFFZuBAep7HzV4vs8ANev16iHe5arHCYjyHkbd1Ctm6F2y2pVFHrs3XJJQeqN5pq6vHrQ6mkjpTRMEiPbmi4",
  "key16": "2J2yHeat2ANSuWUJ3TczsVZKGkhVPbZaR6QE4mhUwgq6dJBkaUifKA8kbN6aNabRnoYfKCeqXzcLWdCeTHMTv2hY",
  "key17": "4p87nFZojYt5umm7EzNVjnW3FgkhybmXSue2U23mbsvv6SQGhsSwrbpBYB6tFw7VK5UHyPCkuVh3BL3UE1iARoDB",
  "key18": "4NdDh9pLhYxRAB7xvmN8NZVtBwmeSwDmkowp6v89HGTPDLU1y89v7dm5dCwdpraxk6qcraYyTYbrthbXe1Gqphes",
  "key19": "3SKD1Y9hHbKQr6paev4L58BTjcrVoh3UxQVD6VWEUKCmthhYaMa7PgMqUSL8TZzzBjSdxfcFUhv5zufHKnvy9aWp",
  "key20": "3r2DiKtfEReanzWAdjHHJKrh1jKaPopw4h1WTczE7cNBXNgMgn7dJ2qRF14sv5Fp5Ckm5d1h81JYdV3twBnn3ayp",
  "key21": "5nmfzwMYdFEkjAsM7t2aRy32uhtwheWKnqeR8gvXTefDGzqAqrDc4YeWjvFdfSGhm4ZFuUWpir9bdFZE3BW9bzEm",
  "key22": "2NfNkDFmk6xRoN6RHpdz4xmP8z47zjKWUPDLsewGkQHgqKpCCpag9H99Ju2EHAjLBY2KKtkAhUeuVRGSKjLQDTee",
  "key23": "44PWTYbHb7fh4dLtbNdk2gDp6PUe2re6E3cGQgERQXrQJtBH1qgocH1NbrggrkdbfDJzZXN8VwmvsE2Sw8tn99kJ",
  "key24": "5QUu5pjkeRWHD6L3Nx11ebiH9vj3co6KVm9GjQo3iiA5d6aMu6hH1FwDVLLi9j2ZriBVHZRn5nbfJFxnVuXuBsr4",
  "key25": "3FSJrJ6z7y2Dxgv5Ptvcg8Buw23FJB47rWx7vLPFGXVuC9wP5qehc2Ndkj1QgSjZafqLzsXUKrharqsTyVaaTSNP",
  "key26": "5ZGtQLjTCUtTG21wg2cKnNt8QCWiiDQYQzC4Uw7QPdH7m9emjCfEAeA9pZkHEu2JH7wjrhYjzuPQ2SbS5R1XH1nT",
  "key27": "67pf8ax7DuKvx9WEhU34gEVcoACCJzVP1oWeARKHN6W1bE2H676ipkdfZHcUn7iYKsJMejizMxjiLSDc2DmwhkpE",
  "key28": "3tiV6iYhBQn3BYveCGzyWNyugw9D8DzoXkBt9PPoDRUfMYb1yBqmd94Ce836S5vFREVEXzYQvC1ZyudAPqTCWDSa"
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
