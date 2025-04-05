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
    "3K5Bo5ajQszXpPitKtY7EJQdj65WGgUDy2YNwdz32a1gBmatfFt7xy4ZYDrYifvwfBsMKHUBo3UiN3fNfNJXbnXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22kFdUJJnemNb8uLuSwrLq4RZZX2v8T9fAZX6XVhZz6nLJ87oGS7e67Cc9es6m2D8ZMQkzqaRo2PorWvNbKJDmMe",
  "key1": "4ZpVwpGAe8e4MrRCqw5PNzw8sV8qivQToY5Va6eWTj3ZckMeQpcySezCR5NstcqLuVQkdEYukBgUiDkVc3SkCxn2",
  "key2": "4472JajNGxLqoTTkZu9ePTNREnpXwurQox6y58FTVDUN1PJtkzyRxzrqFW1vAztEcfSP54XSDs5rwXkAPjWU1cNC",
  "key3": "2apuK1CwjZXr2heK3hGHzyuWL4wzD42mfyJRJgwRKAVstfgtkg9FQFnGfe6dpbLobHaKE9ALk34zE5bkDRK9WTQu",
  "key4": "2KWCS7Qc5rqTDVpTZrM12JHZcbLckWBLfL164pWsqqRJkSUi6GkwM3zwJViNrKFF2VP2p69YCV7GdzATJzKiThge",
  "key5": "2buYUqrFmruga7PUBC84HUMTz8RpyjWqh6wDEPmbUCFcjqsajFiVm6xEQCviU6is95SKN51sdT6YBbe2v7XS6afq",
  "key6": "2xXE59i28N6w2qz6yVWgG5RNJ6GBpN4SNHP86kpMpjWXu51PYqWmUM565NXWwTrALgToTyrqLbemvfnoZkMQjsaJ",
  "key7": "2pHCfrYyQLmLnaMkcu9ShFksPndwmMcCa3mMbyKNZ4TKLhik8r2RrgrRKaGJPf9dAhLQssvhDpMDhPKYf1HpBQpm",
  "key8": "c3Bx7V63hdHvoYsEPunGVUBtjygJM4fpbNZBkYJ2RoeAdEqixhP8Zar9La417hFKpRLzLZGxJ5pdmTPmYz9LA46",
  "key9": "5UGUonrgd9UAxG8WyFjn9GWqdjEhScpXMmcjqyaH3xEpYiyzcPmaUSoHk6nFhUUphb1FegfJF9wyn2Bjt6b9s5tX",
  "key10": "3hFvPoNFQjoEh6FNBawFfKNhmyLcWhgASx72BgubwjYjCXzUgnVRTSreTASrE8eitmEBeNbpZKcXikCszoh1X456",
  "key11": "2VKyjLdzPXNqqNaAU9tR8JQGdSiXV1TXkLxTP2rkMYiL8SVzScYsJ93cVVwnCcC9nhY2DUNCqztwBd4zD9NHVR1c",
  "key12": "38hwnAGQmmC1WrvaTuQqNVbQEKrc3p1FyQixtuo28R2iaguTdcMTm6jdYD3hGyKE8wAgSWUkkeuTkVBGCVe8SU4N",
  "key13": "4eW7kJPwRUD8qS9ZX9f6WkdE77Yuq2vGPcNbb2N35c63Wv3whJTWRwQ1Yw1YCUdscZ2pjtj9hPkRs5UFQKmkUKmj",
  "key14": "eMtXJsfvLQ4pECw84HgsCP9oCwUtk3nE1458tvSiR3MTvgvdfmGJYN9oKS1XDQoLGrv5bQUa4WSRd1FVFjwcd23",
  "key15": "xBS2hsXC4aenBS3GtNnwzM9Ez2D2v3t8yqYchVCoaXDKUeXrH6GNJh8zZemRZPnzvuh8G7eoM9TCMobsjkpVzZd",
  "key16": "2P4tnGxjw1BKLiBosH4tb4Ffp7o4YJDmybkuW9WopBKsJvCnjErd22jgbg77oqNAiA47tfUXDXrHZUWkyyam3asD",
  "key17": "3KKwoJ4LC8A65h6LKkcctdirDyUii53wduVS6ua46VGktJKGoAQabQ5v3vpgLPUbyNK7gvjgYHERzwMPYDtV6do9",
  "key18": "UcVZ3GagiJ7sJ9C2BRPGkquAaoaZRj9TmzySwPhjTv8rvCPCkd2U6WrHz2gvwUaG42naWq27tNoPCVjtv5PkVTX",
  "key19": "32q2YDtuurKhUFr6jvaxWnTthBZ5Mkiyo4C1xYDYvahQ63njafUEsceypjMnkGtNMPx4iQ7MwvxS2HnjYyuKTdTM",
  "key20": "2yKRiB9f8Z4S8jXv7WSPRTVFKECozGCzGYz8FFY2USLFgBMEMHGM2jYt8sBCbRFJAEaJRGwEsCLneoK8fW3KJ64u",
  "key21": "3YcVNbfuposwXJMTFN7U2gADYTezG5QCfTLpobzsrkcVJCtZ5oNv1tXsNVcB4sjkEpiu5hzuJBT3PxwkYtCEsaaq",
  "key22": "bnMzVBxNYNKb3DZKZRcyGVatmCCGAbDCJ6pvzbEzrUN3FmsAgYMdbyy7NCx6pf7izkMdwQ7nbDSYcv1rmRp8yZ8",
  "key23": "aND7Bv2Z8fJLqyK8VeF47SMZthKrmq5CHDDXjMijnAgLEazDaYXSuXBdbUry7SqQ67fZk3chAAPSTBW3RL54zW7",
  "key24": "EvkpFsXrL6WL3rSNTaQ4MGozYZLTwKMKuPJs9KGBqsrBjxrDAeNfYQbHp5MgaDNZEDCKSZp8d7R7AXyf3w3kJaT",
  "key25": "2Mdq1z4MPfcYQsDs8HmaJUhFZEnHMn9HmHb9NYN5s2W3A7FuR1XWvuZgde9PP4XyWKuRuWmrz9jJDdq7vmP55YYX",
  "key26": "2ftp3n25VKXNy78ogFLzbPutfNaZQwJd2CUE3XSKLQmhZbUR88iFw7WXTrHBybm99HPTPqgJqSKao8deQ4XBY2Rh",
  "key27": "4TfyCJzUyuTwg4iXHwzYkZPuVn5mtLuRBdoHkpHcaLCwz2gruXczBgT3EMYDdNxHzMqD9gLaXVowAkmNPiNdaxLM",
  "key28": "58VBsd6pYvHzX3pUzR9r8VCRCNzkfLNxYkoqX2TRvxiq3otHjvH3kffEnAHXkdyoAPL8bMY5sQ8u9Dxonv4NLxVp",
  "key29": "51R57iSfvyQULqSv2KDmsx71NzbH5MGpAFg3zciMqsqnU1qxoLyYdUZKYnVtQu3XpZu6Ga34jkQRQTR65N97A3o8",
  "key30": "3qvabg9WkKMHs4kCDkdbKbfedqHniHHknMCLwcGeZzpaJw65dKFav3Nr9Sya9gtjztZ4yJkkkuZoJWEdJomLcn1s",
  "key31": "2d1DJg1bWAfByWDE4nuQeG48pnxqbmw25c4HV6YxGBvc9hF9u8eR6EDc28iB16SBmfwG3UMYfaX8B6KAiZqsKUso",
  "key32": "5iCTgeymb3TgE4yFDT7J5Eo7UgVAbSiSsjcpJ5e2aZPpXgFhuxitGtsqZiGcPPjwf7MrVkLAsSise4YRJKvhwL9r",
  "key33": "3Vb9xsPph2vq3V1dFwFSwqaFzRp2WHCjrNhagkhR4kDjJSgLfkrWe1Psvvm9CX2EgqxJAYSd2PhJDQHkhhkNr4yp",
  "key34": "4QJziWwmc5GfKQW1YUHmP4wsT6so3rkJBWQRWU2GfePeGPsQz5vRa1Y6Eu6fjG3u2St24g5wLf6tpM8cL7FRvLqo",
  "key35": "7koTe1K8QVwWFoAGDRdGxEvgo28uLdYrnWzd3k5D5wZiD8Pa7Khx6fHxXEn1pdiLUciS4tQLQyQwZBCQkBpjWsZ",
  "key36": "23KLtgc1JNmyrEBBf5PTajhZivnzRCytqJr8aiduVzer9ptR4BQYuvxU6pZm6iHAL2CHQ9FJPhKK7tkYm7Cinn6q",
  "key37": "cCd7LaJua8YbDzWtNHq2VTR5ihtJHii4AmKfHuifq7BiFRKCrMSvtMQhUChpih9YBQ2HAeg9LtZosKUzq6tqNAY",
  "key38": "ux33VJPNwdiwbdyipVdwfo3BvDSxCU1UodZakH1UNRW8QcUdJE8BELixdPaCti1pozTbc8ndtLeV3xC8rqKX6td",
  "key39": "4JT8eU1FPrrUbGRoofkGnF8SuyLy1qrgkyL6qXGUimKAXpzBkC5Fb8ssVN8JT1DDGFxvQUqEzw8mzqpc2SyUYvEv",
  "key40": "bvEorY8HGtf9bdmLZJRCGBUN3omjFmB67d4FPbPv9d3fjPFafrhrafky9kPLWY94AZbeomPh9qNm9iXKgveCCqx",
  "key41": "aat5S2vYnzr3GRAV9UCM94z3NqGSwVEGmkyK9imaVxmtJ6RwBmtDNhDqb9DhPEGsbgUFUX3pPGskPBydDktcdHs",
  "key42": "5DkqL6WkAM3vyUcr5WKvYiAd4NrSiZnMWancH3TX1sCgHzVfSFjN8kyWJEgVRiZUgW2KVY8GEcJNgcD3WE517wXB"
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
