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
    "4bfwnYv2Ff84MKAAjpRRRDQC1AKfyerWyRDW4DRMvk9pt9ubgDNtUG72ZR1ZXTwCnK8tpGS4s32TcXGfwQd68dPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwsdiZGhnRhNcVLEQD594i5h7gmWaDdSVnQ9eBQf7RaQknzZFzyApriXGqjSZJBX55NPMftUWMfBnRb4TtPnos4",
  "key1": "w1A6m2XUANxixZ7qRU3u9HgSThMNLuhg6vgZ1QSpunejsw9zCMf9yr1oEPLtkksLf9n2qyg9VrGndBiqgKBs4xm",
  "key2": "2N9yCT59ou17zFNc23Rh7399ugLrHEvseDkAFLUzDz4XPUJ9nDRtrVZC4duhwHPPgNiWexQocXHvCw6gvrv8ZgpG",
  "key3": "4VV1a82imUZzn8Na3NArzHzNuWjYJXLdnfaHaokaM1ra24CWKzC4nmnFwkYVDNRS8YLXF5mPq7nTWXKHUFX38FxA",
  "key4": "3n5YC3jsZxfo3v1EiCk3gqvxF16r6rLS168Gwmyg2NEzGqSZcxsZtEwesCy3c3jSajmDEkSYb9znj2UDgQuymr5g",
  "key5": "2FijxwhBBddP9uTLX4GK5RZydposaDMgziWSAphrpZCypNirZSXyM7JWmi2TdGuqpDqJrafjBhgKNuxNkX4inS2D",
  "key6": "4kftf8mknyiwh9jgpvM3JgqhaiPQKJzmdcQeGWwWjpcrjhk1JmuTLZizdcWeuisVhzdbzMPFgp4mZarnW5RDHVo7",
  "key7": "2bQcxW2WkTh8kJAAoN5SJfSc7GEkG1BJbqs1nigqBvh9DAJkbPYTqK1xVS1xc5TqmGjrVug8b3tM3uNfq11CJM2z",
  "key8": "65KjjMSB3n8uoR1hoCkTY9CT1LbzqN568RkJpyoaGzAHaxHvAzhyqMthAzUiMv4mo8Cc9dQG4bxrCTLxuu9qzd9f",
  "key9": "xuGDdnuLH3pUpCqeZPxcuMnStjmQVpe7eZicNJMT7AxiYgdXTV4mHedaVSQTvSqEaTA1JNiAh1JWncjyRbnJ4dm",
  "key10": "3J6nSEfMCzmtd4Kb73NXETQeMWVXBGMaemV2zwHiN5KaK4WW6VVr4XcEqUAaQekjQFfWzM2c4XjrNFnYcQyw3EDQ",
  "key11": "5ufND4pJdauG3xLK5NWVwBxEYLAMghW6DsCeSvAGw1feMKKR81vBfx4CmbVtH9bHabSN2e3oTZDT7FHwc5MMfsqf",
  "key12": "2ycHkc3W2JRijxAxdMfk37WYPHQgZefFzmvekhGnqSGxMTVZTerkianTRo1Kac3VD1BKCE427rLgeJbUzy3BwAVr",
  "key13": "4hzSrWWMZriKjjq31EinpArK8aQaX3bNF61DGnoaXrajSgervvC66S63DHzeGW36ANGimYLzoEsunc9sr3TXknJ2",
  "key14": "3gQGJG6EV1eGMhqAeBKPTq8t2RFddkwMP31X9h4qRFa1tQpF5oAmhm8pEHaKYpRVdKkvU7YaSFRPBdSi22cTyhPf",
  "key15": "28grDWdS7QUgH5rBwcErfK1RXo3RBfnsVba8pUDmibmaei23cXVQ2STpjT1MFwhAdDcu2Q7MRT2pS6b6NtXFeYdH",
  "key16": "4vu7DrGpbhv6LZqp1wBLSd3UmXxRjyz8MzT1AzznALeX1KnA6AEuCifVurv63gEi936Yj46wPYKtCeVPAgfHcVRA",
  "key17": "3Rv8G3Qo7JoicYwvgoJjF4gKgDA3dwprFK2A8s1XhojfPzucyhT1d4XSxvEUe7qTK83u8ynJc9RiN58QXW7SMELm",
  "key18": "46vEN3XmzVrzVwZU8z5A6TpndasmFz4cA294xgAWxwD6sh6RMrMroRAYEBjZQxctLCtwDbe8ECfXyy2hBhX6tfXA",
  "key19": "51yyhRK83GVJA16VD4hZ3bbceipLMApmJCP5QTtWPSHLfzpkiZpnquEmcLGVTLNxQmKhUHYzGyu8J5j4Wo863KrB",
  "key20": "5nnbSsCvPJ2P5Fsyf4Yhq7e9Vj8tvAG7NELUGmaDpiyZU5VwZpzAGUhU2QsdGn4yoatvPCHxPNjSaPuxjBPHjrJ7",
  "key21": "3NJKLoqFjazy8w68e3urvbCpetca261iSqMZatKZjHcoutJQbCkqdvMdfUGA9xLw77kRSYAmiusjQbP9LPMBdZMY",
  "key22": "4YfcZ4X4GTjuzdtwfwB4ea4gJHEBFh6ZJztRe2axnS4JnNv4eB6XFs9rAS68yCDEgcB6tsgwSzrvwhrgS2428Pkx",
  "key23": "a9QeQrvN4Fwt65u2BjqouN7fECRaLUfKAYoWFXauSDJiLerGVUtiTCG4xFwqNFxH5SnRna1CCLrXa277DGEy9kK",
  "key24": "2ygxdXKv9cxt5nGjSnXjDCNZRB676Qxh28XurubSbNcSTFXpTvby1ECLp5NVSSCabay23gdrgJ3WdRqJPpEovGea",
  "key25": "65UE7oCUhnGe7MSSp9j6Q9jE8ikZPqsEwyQFraXGiRfxeBJbWkFFPDKbxyTFBXpvBU66j7oXUyyUDYEAHAkSykvv",
  "key26": "jWpCyjvuqnsoELE3a47j8aaifNF5RNBfTjTYpkuhbqgpvnpxSRrBKyazmp9maDoKXJVdeLsNCJ8K2XBeYSF1z82",
  "key27": "n4vV1R1gXdGT9DLjoRAG2MqndudGG6tc1xc3wMCYkxo3CYoCueHvBZKzVfsPUvMGVsCA1Y1h7sdX9HGRzRXCCF7"
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
