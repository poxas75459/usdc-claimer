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
    "5aTj5LfZofwTA9oUnutBihnceSdKanR9GHuYLMMsq5MSm6Eg27dRMS32SvKQSNzb4mUd3vBBdwqpW5h1ddPi8xNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5udiWHM1Ry5JkKLkcGW1UtFvqaeEuzLVLQBsY7e1bWB346QWin5FekdR1akoSEx7eqAFbkmy65pPv7grwZGv3zn1",
  "key1": "N2NJc3erYMiwGAA5LhWxN9pJCgPdXgJTS39w1MqqgG4yXDptv4bgmcQ5fKSuVjsaBK3ogbFmQFuFsJFyFeAGTZN",
  "key2": "37CoijAGv1MXHmQ7mnhxyitGEQnDLornSwKgDqCXbgaaZtWdAs3ti2F4PzKeWddVDRYJiMmtMgm7mZZgDzbegFaG",
  "key3": "YpMjT4dSRUKjdoFK7Lg43ZLzCkbM3nngJPAFeXGhwuRNd6iLuKmdXtAD8zcXdDfMVwY7C4jKLgpSCnfAtNX6L9d",
  "key4": "6zAvDbTumBXsr7kDk46XdrR3Ju9ddx7ff1paTP9apUqNevjadPjRgig1V8M6cHr4iNUXs5ceLAGqXQErgrPQRbd",
  "key5": "3jgZuj9gRAPY8THkw9DDA6ecXSvboCLVfo4AFWEhtKurDAhPxfRwWrU2NKy1RqkwiunKbs2E9KKZyz98cnWmEbJP",
  "key6": "5H2c8SvwUVymizWJTC3Hc3BG5WsQrUMabTr6QVoVRRWqbKJNnTxx56HnQ6RFESpbsUQoN86KZximABcsLaVTm2T9",
  "key7": "4BdqawAujxPikGR4SuWZ4SrinMVEjJ1QF7zKU2JRKeiZjbHYamfzQhuzh6bZ5Ki7HhpLfpBW8m4g95xH8YHHHbsE",
  "key8": "nvEAHtfKovAv8iTjX8mZeKXKuxqNGuc1n6dmf8JTYe6QvhBhxUVSu1CEwLCZp3xw2NrxpxDvC2X2mkPqqxCngCE",
  "key9": "427dFQSVZC152pg5gK3kqvYTfK3W2gyMcMNMKsjM2KdDwh5P3Z2hDTkVKm1Nr8keSZK2QeDbYgq8em5HMEEUNCta",
  "key10": "4HH5RqP4HjYVCm4AGpCnkDQ9Bj7cMeV62SvWrGS191S7tHLR9tZmX8dxrdCvKrHEYWNQUSEyjNYsKG3YEFuHCsSB",
  "key11": "5u1uTUh8x9a4ccuBkp7VitihwSNaD5ev7QeU7tYwaN82SUFcp7dyZKZ1o236E8Gbke6aPReDUJ2U3hkyJuv29szh",
  "key12": "3Tv639tJow69Uqm9UFaTHxEAuH3EhJx6rw8ajrokoH4iZGUi7fS9dvkdydTyHFAn38iP7P1e853q5evVtPEVGM5R",
  "key13": "5m6pTT5TaDw2ZGKDGTZcL3r5xNN22cdFzHA6BkvQ2JettDqNMZas4ogQQKaVWzMa3UoGDHEReZTXXxNLURLRCui",
  "key14": "5JXWvSbH7segrVeWJzYi4RFqqJbY9gBeGSn3Azt2b1pfroU1auswDQq5qJ6kFCLZSUfdbNRW2SLtZcvLDwQ4Xgww",
  "key15": "2hBx5eKQw5rBL28JeUNDQGzKwUH6SdTgUZHeqADv89saFQwktJZ5B975arikkVZEDVLcFh2MfdeC4K3nZguU5twZ",
  "key16": "3RC1jLqVtvn9AiPKHFckFHzPC97NCUi32LWr48kxXdUvqnCKmgpjsaJobjS7rxHHmQEAeopiGYisW67Xi5axoKFM",
  "key17": "5hcpN2WvtNMJ8AULP8m6ES59qdVvVrYM5Hk54mKarA73NSW63rZZttd6qWoPCFgQTCBqunyE75Gt2W4smwAYNMb",
  "key18": "23yX7UjJBiLeHkYWZ6s8rqT48DuBTjN7KXpShL9myXVJZgZh68pPMbPmXLGEc5hhCs5BFVidtDdn7kWXrjzA75R7",
  "key19": "22FJJYRfSGpca4biRisBDLMeDfSNPiXVafNKxAn1u35jC2ZaY2aoY1L3BX7j1J8SwCMA2ZoMAWZtA93Ly1UUvfhT",
  "key20": "smyQmxZ4wu7Rt7fhjuRnPJRkqe1zgtESNW2enGuHAdKJR8ACGyJSDdQdaKnj19ixCFJpAjmvKTA9degjLhyFKyt",
  "key21": "3zoXzijteYg7rXHi4GrMiK48pZEG6djUxDeMCwBkJ8FdsBw1M11cuLK1tk4cTyuPDzaAKXXeBycHQ2xSdEhK5Txy",
  "key22": "5q1239BpesE8AJpjS2iTziUq2XeomafcJ7gZBfRtF4GunF8SekhHpUA4HUd9bhWhqLTSQvWWTns5myhmnfaio6d",
  "key23": "3kewrgcTPBtVnbcBbn2ePq3wW5TLfTUPs9ExdKyKFmd1FX5xmsrsMbJnwGm26a8amjvV9u1YhGmjrEt9krr5eyo8",
  "key24": "Lm8LdGACJoL13WUFBH1murRCnf14qgkdT4vyPKY6UqaHgHgEt3SqAS1Re9fZKPPqXFiKVBvTEXPvZ7PZk5kRvBX",
  "key25": "5TrXh5DRFW5C4rfvc5tpqBEVdDpK4EhhjvbmnHuitaK4LqbvPMqdoC8UzcmmVR8bJjdwg5CGjkE73iwoSUxinvjN",
  "key26": "2JXCGrrprwjKuBRNVSmawykogsa2igvhZDnNgEoqzhrBzB39yEcVDN7dkSYNBp3bhwRnSFNHBvTio1Ru4ugUP1ER",
  "key27": "uGfPt9uT3wb9TMTFho7cmhgk6UsD73n1AcoE1m6wgnbAeELLsdAVEswkNC93tarR2fStUTwvqjJcyD2GgmuTmCu",
  "key28": "2XEyCxXBsuXkBs3AzyovHuNcEbDjnPo9aiQgkUNrJhTfbTBr6MwjpJy4Yh6wg5VLPgQJdMku9wi8bwZz1XzLaibP",
  "key29": "3WSmoHpVNBfneJiv9VRrLeN46cfPaT1JTwY8zZYCaVVJSVgZ4Len6mYUKwncse6k6rXDVAmBR5N9PnQTxgrKib89",
  "key30": "4CjzvZq6zcyVvuLcZ3kV4Jhrb3cbFc2de5ooPNTRzgNUrV3rc7jufGRweiJpNxE4PYkRMr8MSE1FxBUiVhc9WgQ1",
  "key31": "52aQ2K3vEBNNhpi7gjsmZ13T8JcF1FfYTi6rRdEFQsyA1nhrEpmNXwrcHjHqzGtPY1eQJvbRZmgHW7opd43CqABz",
  "key32": "4gLGb71KKhEmVsQTfNJf7S7ZuqneipnAByu35cmwnh4BXzpEs6XGzQRWxTp9Xzz8Vnt2yci5btrsjnis5eN5mMo",
  "key33": "5XuEfXkMTqGxsto9J1PeSJuGKTkN3vKiPD1Jus7NUfYEvorDAxPwsJDWnUAV479D4wCJhWU23V5wAGdvAMfU8QcF",
  "key34": "5iNoc8rVDE8RH12msjyprpFLdcqoN9i1EHfqzCn7XrggSDZokPNWKbd82FWXQUi8KVRUwg1rPRhjDWvqGFroCUwV",
  "key35": "4WJu9pQeA8roYpE9kJoFCR3EaEX5SRXprB5DcgMXAt4R5h4p8fJyLBtfPW3ehFr2gRst5h9n78ixyr24huYXDiBV",
  "key36": "2bdy8mhyFpvGirLGWKKTLzigyjXeWr1cBbpSPMyxHRvvhLRPrUyy5qoYnajo1XKrsKqoaxFJLkpfXaiJqT4w7q9x",
  "key37": "2PCJ8qV6Rddb52jC2EeN1b4z8csw6SwkcyxfE4wUyTRtXvG8WDEYNAu5xhsonsfTeAPcLt6qQWoUtiRUQ21ANoYU",
  "key38": "khuHGc7LRbFHd8ijx6h1Nqdnc375fv7ixL3hu3yXiwzkrfbmax9HvJ5XpUiLbEW4HQKLLjnFVQ2dW7sTU3NdfW3",
  "key39": "2FNtggLRv5Ezh9xGH2KjAGmo7DrZLjCRHGvyn93Dek8EJMKYU7bzQ9phqHqbYFPK26bN4W6hkvMpBsBUqgZ99Ksc",
  "key40": "4bfKWtf8C4mbs961Np9GS3Rc61MVD9z4XWRDpKV1kvjkDhmQxRR54YS76QUKjvNzLqncZDmuepxRu8NXgqYM1jUk",
  "key41": "65nQWuJtAnY51U33Gx4GkGbbdyb3TyfSxuN9bcS4HCWpqaNHz1VpEn8X2FKYf1fDt3NkQkPJPQQrTqmfatGqLn87",
  "key42": "2WdatvNB43wMjQmK1CoyMwcgt4PKthMzU9UJjqvxoze1jSkfvMYEcPXkJhviianwpPp5vYWYkRCjj3cFRZPhZSXz",
  "key43": "64YfFPWos888J46qzTAjQtVP5njrgphdfsrHVhDLLcY3cXGaFS9WHQxXBy2ibXSDaJhzjnoBrcDxLsYZZxQ9XYpf",
  "key44": "8y3esFs3MY5TaNohy9jM2GahsvpvNwFDPRdBx6AY5CGeVPCekq8zNHD9wgUoKYAeLW6umdGHhZkFJajkTNp2SJA"
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
