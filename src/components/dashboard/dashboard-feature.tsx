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
    "YcMWNHPwtWquDp3ge9WpTfi9hoN8MeYnb9chsqnRGVvKNnsegeEYZWgw1qN8RoLfR9MXB2nc87zbXYc9a8W6j2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZrgcVrvDChZDxJtEFsTm32WJi9WNn2tBCGdyifePFXVikwAuSL9TwV6hTjydR5Vpa3919UAz3nLjRVcsP5jZ3Fj",
  "key1": "4kpcdGCd2RtBGXNdKRRpwtmMQZnPDFA51vUAZg4z6d75JvBZWBfwKf441dYn5yMNhiNYVs34uKXY4AMiLqSUGAJV",
  "key2": "2631gyCjLWsdRUhrWYjUNhyeoFBBCrVqUMRQ3H4LWg2Eokc4V81kns7jXpxbGn7yKRYovrF2KUTJKTjihh5BhAG3",
  "key3": "L7EDxW98qogE6gv6W7rQeidUGnd16uadyR5KdHnnncik4aHzZHCTweo4n6pyE1zTqScw1vehgP6FVsxVBhGB7nq",
  "key4": "J7yM3BM8SWcUnDLcPqZjXNCoXVMe7zBQ5iW97Cgn58fHPyYwJqBauH5cksX9gjBZEiQ8zu9XVySTXYMqqo2afda",
  "key5": "4U41ae3KEDzN56pZaoBKp4KFRMWQU4gGfapQvPr7LyjVcXLwZoj4T9hWo8vxFYbQLXqe3tJhzzRLfYVtf8pvZBz7",
  "key6": "3KQqaJJ6HcdW1SCLRHQAbLM6DiSfyWQRHHEfWjXjVtHgdoyhXfwdVT4XZ5sofRixi86AVFjCLJmUuvdzehqgpvZy",
  "key7": "3g9VxC3zm7eM2GpskQoezCJrka5qKxP8CUmEq7rT5V18bvjqmD4Zo5pnyi311Y4dq4AkbzMdSipmoUGvWUzfMMAH",
  "key8": "3tf49mSMwSNfprZfiLjZXtfg6kZ9jpxw8226hzYuo1qXbRA9DY15p4FbgL6QXvq6BwBZfHDNZ2gHfxJyjrBCwg4o",
  "key9": "RcBZafxoRHgXLNT2tvNSK11GDHgPnm74sL9UseBYyAUsUdPzSxaJ1w84yUeiPv2ViTvaZFj2D5QHCb2qa7VPEgu",
  "key10": "2Vi9gFjigNWKyy3xs46rf4BXxHGKy84rqexuKBahf4Acvkrd3jEa4tpmEWf8rZvxtiKHAVvsHMRYKPAQEGY7QMyt",
  "key11": "4YFJxucEVCb1pT9HYD6RaHmNLTWHE35x49wrJhhD98aKrRixhyAvbasig4Fyg2K3UZCw7VGZ5JD9xabXG5aMWxVK",
  "key12": "24cs8njZXRmdRnLRLS3LiW4xwrF2kxChh8wGswykeE6JNnMKMfHKj9oAXB7P8NbSyQrWsZvLRmYfmfdo1vSJkUJJ",
  "key13": "5DY5FJyYckSabKezfJkC9xS1adzsvwE2MQB28QwtDoabBoiwpRqWqLNR69fpEi4D3zDQUKsqWrV4oJkGWxWr3Lci",
  "key14": "46okWDrs7ZwWLLa8SiTZaWX5qfUZnqaNZyQmBFM4uN9Wq3nBAzrZZ5iquagvy1H5MqPZFNyuMhdGKUCzQg7CKcNc",
  "key15": "4QCUnQVVaB3yQBXN8GD1iggExvK1ubLW4x5SnCAudyFYg6VRM3Fj2gfV61tooS6Exw2LXF67Un9arpSz8DGULmEU",
  "key16": "5MUJtHLJjFzEFjVjjmKwbXkqieUZvbSVbe5GHVbVsXef8nf7VjYyq1W4beu5t8X2GKSptX8ghmXqFwW4Uz5ex9Y",
  "key17": "471pQE88mPbWLCkX2tNgNYzx63uyLfc3SWztNSke9Gngzit4f1SvgPEHFDRDD8EMyQQRj58G9qZEnL3pbRGwhPPL",
  "key18": "53XBuGnQUy3uM4ouTmWzyQDx4LkKiTBmECHtSgbeMEXqyevgxRi9eG6eJX1yybtyCYLbxQTF9KghX77GX5tgpQhF",
  "key19": "3RhTher53iMPbKAgE8jsA4575KCfGk6ihUuE68Ao1uxPJFZ6D8eHSG2C8wz8sjMzM16Nfy2rCLYJz7MjrSkKGkur",
  "key20": "3HCMvH42ptnFDVuTLDdZAE9f3s3xzPnE25rD3LxUiWVsioRKQwdfoeZaJ78LJjLRkzVBCmk1S92Wv7Sr1AoaJPMa",
  "key21": "RwV7CGWbszSBc5cfxnYGeon6ESrc3KHR8oENb9Z2NLue32iCWqCpfztZjaYot7i5pKG2zdbD6dVcHtNGVBVdn6D",
  "key22": "3Kmhje99FjsM3u3kHGiiygEd2GD11BdMv7N1gSkfL5GDN4gEoTkkgPA7E6mYVJ7HeKDkD1jeJL5hn2B2KC15LWKp",
  "key23": "2YiwAufJHPG17wmdafy83LJ1dFXDh9KVhFknNowPCJ5ai23NU86nVsYWMkhk8Rsb23R2dYS8yKYFUgh5oTGpKXra",
  "key24": "YHErkAVUPXaXYezdDpw4Do9NJ2KX5mS2hDojA99HREd41a2iaNKd68KeUqvprZPZo1d1K7gVrpNnukY63tPci9a",
  "key25": "42F6wRizXxYxStB42kuU7EStgm4yFdN6PBcWBzkHeRCM949HCKtq617NxM5HVJUwiV7rxZtEDmg8Pxi1p4dMzMCd",
  "key26": "3pmbodzLH4CyqkQss3cQQSMzDc4j6TReZuk7YFHG115Y3Hzpj5yezi4GgwgYb1y9g1G9cPbC1tQ9KaLYNakXt3Cd",
  "key27": "3ipqsaDBtqS9WPoSJVQQmbidd7tdF45jcnjHK4TKDmuguHQMnMLBVRag49QmD61wvZAjk9WkySaTaZHHmAQowFah",
  "key28": "64vhDusx1KWLXzzNWoojz6jqbsiuNQ6iDZmBDq4tVPsQ7eE28hT8bUEEyLVq8tbWrKp7ZCYRWtavoQLwb7hcQiyF",
  "key29": "48yn3wQzuCyBgMR1h4HkeLyj5k2WUbjwMgfQSsEatv2BNWr9jguVHx6fh9Qwje3YYmQ6AaUAjgMBT61nMApYKDqn",
  "key30": "261dH88EsQK9TLg17e9j19316XwxpppCfTCqXuFYLKbkMYjPLJr3M4jmu1e16DQ4BVf1FES3Cuxd5jViL3CLy6kc",
  "key31": "64TyM1DbiGBRr5irYe4b28n8YHja74ZgANfCQSUMCs3fjvVPK36LtmTWoC4hpVsVSkRdD88dDm8segidzWrJZyYv",
  "key32": "3PW5Q5qKWvxS7oMkFmNZGAoWtYny1ZxQsT6w7U7KVxfZvK44NRbgsfpXGi3f2bjj3GPE58U9824dW94SptGhq4Ru",
  "key33": "5sG674741awGr5fJATLPViVf93KbrYj35gkKan68BysysALSx9iwU1bQpW4s4M5uCC7LFRHJ1X9yhsSEbuDXqHhs",
  "key34": "5yut7u3z7aDZ3xgNHKPmMi9HKUvHZR4x9Sv64cx27roXEPYqEAPFusjrBJitC2xgFS7KP9qxerqr7drDik8ettkF",
  "key35": "2fepKCXD8RGiRvV71AS5r7ktDSyjT81DjJtMaQXRmHCaC3gLq6546aYnA4M61Ck7kvt1R6LZJRm5xycVBq1BZY3t",
  "key36": "5psrH4JAD14x5r33dyq63hVZ7btMMCAusmitqKLCqEaGM22Lj6TYeNzgsn9rRDvcED4b7MTPW6aJ7Ep5xUQfHYnF",
  "key37": "3FJ49pog2emwphppx6kaAhBsbF6wU2hcbLBBaufFm1F79hGdzosvYTmEULbwERBzd7G2rL3ZFQt5bkivdn6Sgswu",
  "key38": "427YN1h5QfnWc39vfJ9jhvSLsz4X7EihWtiATaZsSkfmtMZACSJgESdp3TPi31EZ5eUxR9o3YMimLTsVodEq7mpC",
  "key39": "3Bfdkasw9UPSsYggF2oygcJGwykJza6ucF1oQoQLbbpoEwWFnDXViCpBKUcKubpr7D6STh9Yf7Eh3LXoNcVFyZ4w"
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
