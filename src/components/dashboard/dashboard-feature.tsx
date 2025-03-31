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
    "2Ne8uYBoSR9PuQ7b4xeKYtpFcuySa2LPJhEZXwEA9XT192duQrv3Wb6s3jsYUpiqvzStFWKBsKYnD94rkxZy2YV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37erRxUGDpYKmFYfFrQgKeMvNT6byKPTBmuX4PuTyny4bnvcRCY8we8nny61y9xsKMXHYGTMTGfcvXWHmMBwMGao",
  "key1": "4B3zWQgdUVZu9gk58zhrR1aAsFstoNwiF4TqqZEE8fGsbfS5nnrxWvCsj8MMx32WCMmp2Z2iLR5uvek7SbsPpXo3",
  "key2": "3AaPDNA53NnuRzccCeyBEx4CtPx24XnGPAP285kmiogUxg7eUUDdJb2Yj6JosE5p38FoqhhtkmCeivaaqTxJ5ymz",
  "key3": "5YK3xZyKXXZeeSZUkAUoNLA6Bheu2WkM1E7EANoqhD4HzWMUpwYxuK8W4kztJYk1FfsKm3czzofg8BSHwQYLYm27",
  "key4": "4vu5AzfwhpioBZvDtVCKsZGkCute7bjoBmUMzroZCNMqjUnrkfq97WznDqkagUsPgH8wr9dGFCPGxWV4id11V81W",
  "key5": "39R494sH41DMS88qry6C7QshybU74VwmpLTgwdByYvSVnvw8NGDJKBzQpd9dX7sgwVBM37giwJ42gD19UHCb6RS3",
  "key6": "2zYv2wBp9ufEpHP2oTQy3tGhVahwoFKttHPnAjRSydrJWidTpLvWpdeDDtQf7D7n1MQbQgoFGyvKTCesoSNc7nGA",
  "key7": "3jebNRzJcYA3gamfvPmZb3r2kXnyv8RUxjuyFLapBcDmdhCFhBpL7mndEyAreCKecmLb7WvYKAFcixPnn7D42P5y",
  "key8": "3rD2ZfrYo5UXeLcnecAxPrvFAqkZzG1mMifzad6gDc4W6GhveuuGVLMP7NHekiVNvE9xcERB2dtF2LnuqbE2SZWN",
  "key9": "5R78fPijtp8vDMuF6C8briKqoprzNbstAsti4L8bH918tfjEk9guC8pD5qbREDbnsWoFJD4uxBPE2YCJpyzFvUW7",
  "key10": "3F3qpXNkJSZJ2qWxv94Px2qHGKgRLQDWpVwAgNvwW5NfKobKuEykEvrRRXNRE2oNaxLaREFan9sPddTkvpZoDjta",
  "key11": "4qosY1ZsfAwBaTn2hLcNQgzaU73soEj3XdRkoMvnbp4hosZWvtN169mdPY9zkyA1tveqsGX4i18jxL8EWwaJQHK",
  "key12": "WXo1NtDTsYRNa4PQj1TxwXVxobm7DS7qTtTxDc2f6mPG9gNp27GkAfeWDSfy5Wbmv8MQpAnXR49AbzjBGkYXKup",
  "key13": "66iw7gyRGp5LCRx4LJNfdcdTxrVrGXL8UcgTDGBEYE2uAgiiG2CaHfBwx6KbfF9fEvucBpFfKA2voVZg3TER9Sxc",
  "key14": "3FuQ2vK8uVwMjEGjG5ZCspyriNRGE7TJZeSqZYo3sNcExCHuRohg78cCGDVThR7eTKKaTPfhZcDHGkh4cMP7CHU1",
  "key15": "4oFDeEwYji5xoFWyNb3MW4vegSHEkpr4q1fFSYcjQuMv3b2PoMyepU37NPLXjrz5TeBLPT7L9HbunN6yVTMoH8sQ",
  "key16": "2zW7oUW2pcj7c8NreBnMBhzT4vJH1Xhnj96x8mxid6uBECoCS4Gp5q38NeVTEtjmPv8hgwy6b5rCxwkjpCTmo62b",
  "key17": "5iG9FMkd3WgNrSQPtSzTd4vrBpEK8cFp6o6CSeyU1EMv5eYWisUUZXEGfMjdMqz4nFdcLuyL5wDz4TNQTVEjAuNX",
  "key18": "5heQnwhoGwT2rv77A4DwWC9LFH2QMNp8FFEiEgTTuG1CHJ1ZToFUmmfSGnEp1whYGXLyQtgSTJivavNiSQCbDauT",
  "key19": "3KgfaJztHDH1Qy7pEmoenBR5ZCysMVK23nye6PaA97zayWBftKrFfxyCxucf21ecfzb9aTSX1tMGpNk9jQ2cq1s6",
  "key20": "3nLCrwMq4pk4adcRaRVQeUyvzQnaugL1PFTjcMPA3QJp37YCk1yLpDSxamfRCTFbpSFnUwmV4rZEiYThxR4sRL5D",
  "key21": "3woGZDjC8a4ERLsCPsQXxtog5izRxaZ8T53RG7A3B3nt5pyrCGpCsGuLBwbvembkiDiXYtKG8x4rHkjn1WSZTBf9",
  "key22": "39gecR3ExcZCwW1Zx8m1ShdzEEPtHX1cKfEjeKGLxv2smUJiVjARTjZZRfTobCSpTR7KubB6TcpJgRWPbS4ziErG",
  "key23": "5GBLbNUs44bGw3aMuAHMfycbho3m6tmGGUEsPdZiRwwNVUcRM2agbnsiwb2oJesYwN7ENdKxESx4wQBfVp6jp5Cj",
  "key24": "2xBjK2g6Mrnvq4RVCHqHgZNtogZQZNXs2VEFS9QteyzqsV4bx25Sio8YR9A1mc2Z974woX8LcoLed3bakNEppEWx",
  "key25": "x48oUatD5qPJeM9ntrqRmTQwVc4ptXaDFgAuhiH9XTqXL1gqfPMDiuVeGA9bZzEvsz6itBuJxu8AU3DwZyv35MH",
  "key26": "2gfsvGygdXS3XQrBVFSVrfWmJ77sfJiN9vz9NH18ik9BdXqeAWopjzAFi2hnZrWsxNEK7v85Rg5wnS3v2511WaMS",
  "key27": "2A68mUWLNNUsGz1kRg5iben6oiY49gnBd745gVQCZwLzBPrK86sJiCj1hoxVhzEBwnpdTvCN7kyeeDPe39dy4QoV",
  "key28": "3A8UKDqebiZ8iDVQ8H5VrN2dS2nQ3BYEQfjs4KUhhnve8DksD2niMnzzdvTatg6ZZLquzHbuiwCC1nc9ozRouZk2",
  "key29": "36FSZaTsZhyVcC7P9gDeXreWG7pikysad9W3XnzcUA8gXWSJjjkHJHCGD8Snmnyipzi8B6Dx724KMv7r2DNwYfzF",
  "key30": "2cG8SKr41kHAKpkWGquQtASjWNS5x5GnzXWnHfEZybQR9m1NxgzmnoZN7anBMhz5F14jttUXrifzy5Gu9bzFPkHh",
  "key31": "3Q1vYGVwEB7v7LTjei96cieHp6F2m3HeAt98YSpW4wDQ8RQNFVYzy1an8k8j2yzw6nejvGT3LSfUGP8PVEcfFLnz",
  "key32": "5LvoYFFd49XN7Mymu4SiVjEa7jyFMTzEj8RH4jcWLe25NuQ7et4VvNQyTZvJebnqjAgvx1RK61p4rUm2ARBMtAMd",
  "key33": "5zXPVsbKQ4rmCwTbjvsm1ZXs76iA7wBW8X1R5hxqU1r5eaNPCouyd4Zsg9CHH26mmXHArj3QECcBKTpEvgmz646W",
  "key34": "5ZsLhioJe3cRW4qerW9BbWd9dbvweUQoeESd55LxKVgWZ9iak98dA871RS6RRmX9txyQBzrmNzBPTaEV5hcoLhEZ",
  "key35": "M2ENkwUMt7f4NWcyEhgRtyn1hFxrTyB5JTktcVhGUHzs3C9ELaezaMA4YN3GHSYW7vKRv3YHn7pf1WL4MqekAbv",
  "key36": "5hjhqDS9vJX8z7SphzHhhG28jkMMfzqHgF6LbeXdgYJn7SdguSA5qF8meTPYdbu9w8eFh3oMZza3K9r5aNThb8s9",
  "key37": "3TUafuxjpCSN9MBZz98o3LfU417DbAe1uoZ8wgvxnXK6opEoGAUNXz7hUMmwd8YmyzDpn8izCrrJ4hW6V8pdWRHd",
  "key38": "4et7rHFQ11iQugDQ8RQr7oa6PLtmWH9mTotjJwij3nfMCUsdeUhU4KsFUHxZhe8xyGM9ipXbcwQzDdsQFQmZm5hu",
  "key39": "2WTuTpda8ycZC6ESJtm44DQQgYU8jAW58Kitj3fYWWhRhmYKVhJ7Ff2TDSV8Ndj7hoi618h5qypZtCo4uofN1tTq",
  "key40": "3dmb5E119dm4VP1iThpaUKPyfkmB6AwUMdGVbEVEtaKeKraLxUax3aKUXEXFQpQPfoD929sJ7jcaQV5Xuu2GobeF",
  "key41": "3fq3p1Nchbz8VcPnonjtv41cq834igD3ehbXtpxhTf54N5YvAR8TLon8T6zs9rRq5Punrdps1ab6ZXY2U53u3WLE",
  "key42": "43K9bfvb9ydzHTRqbsPdM41LTpaTZqBJdvAd1ceckRr5JELG2WzBqCnMewdnXRSdSAAA9g5zHLbcLwA2QvabRvmc",
  "key43": "2qkFw48jzKHuHF5T3RhXrFbaVPfRD7MVrHuXEEsyHAsWdYEhqSb7cNfPbc2rwkuFcQFn4kUMKS9fpfgbNRo56z1o",
  "key44": "4DSJ3u7L4YNEbWQj7SU8HEpaBYDcxGpReX9N5hpTZHb45aEngP9PhpPEWaUGJGnA3YnuB4VX7a99cqqzXfbvcriq"
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
