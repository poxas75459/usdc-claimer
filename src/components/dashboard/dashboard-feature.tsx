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
    "2ipTQEh6PfWh4ZPKB4wn5RyeWZS1ts6tF793ueBSyXHAX6xwMPP7fppEjxDW5JjKzyNALBkGQYdQXXHXfJqx2BkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zzkU3AfgaJ2tVLKeFR3EGkgZRwHxvD2FxyGGWRqpEsNg8Xjpp3CNmXG6qwzs3jKy1iBuAHWeqZUtSEtrNJKm5C9",
  "key1": "2qgB8zjckPUS2YHFoGrFoFGmwMZskSg4gShm9VrhQuy1wiBj86pdvE6gutxbiYBZR8zfWnn1nYZoeDsZiT1CSNJS",
  "key2": "4A57SUsNjP7d8nGnLdRHJvAzaSdfiGi9KzDgvK9rXUZ8A2HsKrpqjeKKmFhPB9DPvuQ7hpgsp8DbRpPacdH7jswt",
  "key3": "AjAMb85Pi3G1HvV2aNeVgDT5Fuz3raG6yucHiLeMf3weLXvDP99HFfi5nnvVeAhWBmpj3iVhE24yPhEp5dDmUp1",
  "key4": "Etu4Fs9yB8StZADgEuYBKasMEMoDsTDKrwgTvefJyoZxCKFBCFsFWqWeoS1thQJ1nNWsNXRrbVEvTvLKusMSbpm",
  "key5": "2yM1QwJuWzLXKevAvbrG1sLkMb8LwgPic4926FfjjnPWZVnZb5HR22uwqFRthPDbGqGrZiTDb8sJXAbHsYkbJT63",
  "key6": "5B3p5pcvYSvPLnckf8UU9qkKV3ioFcet77fD6AT5cW4DfpiwAjBuZ5wYdiKcgX2k4ktqhzXXs4gSg1YidG4eS6in",
  "key7": "3SgbQ1Dmt85EvBupmYdhMB7pEyfcNz19VAwfGTAL9UCcaNjmwD1H5YEP8dXLRwFystcj7Bin6Y69vvbjjE4K1DSe",
  "key8": "53BJFZ4VdLEDS7HzJa3bbYj2DgH4sxy29XMCC5KxySpV1edZs9wUPSQEqnrZjRe6sKsibYWSTPwSzBdCeUDD5jyV",
  "key9": "4sc9j1d6dRvKw4nRdXMupuFAFmPmyVkgQe6SvUxnP56qncRJw9mGfLPMVhikc9vXrpE7k37e5yZ5TwHAJHnB3AdC",
  "key10": "4BEkF3H3YDPTpKW4XYF7ivnGVMxoisYR9jkyQ1skHfHNsPG5wb9zK8qvuBXPsfpt4nE6dT7218nRDZDanEhJrJ8p",
  "key11": "4pANVVULYs9o74nqjPKtJPq4MoDtmSAGHr4YYvnE9xoYQMbTvvHTyzayo9Dbk1Hwc6QcstApG2EdwfooFPNqZ9bd",
  "key12": "2pLEQDoMmovG4GU5LECLnShM2UFZ1e4hgLnrewQPdpEytd6XmaPHnDYhif9CdASooarWj7AxRYFBVrRARdJKqxEm",
  "key13": "31fPfyNBLD9Y34EScWKgaDRt7CgBn38U2SfeczHFN2NmJEMhcJqy2BwJnZHqkiF7L1tUX9ZpTiyaTmVT6N7iEBqE",
  "key14": "3zN7jkQX9gembLFYSGc9P1osbM8J6hJeXMHca7nSAH3QcV3Lp2NEAggy4ZMeXk9b6X1AF3VV6oJM7opcXNE3WiEk",
  "key15": "5tLfcTGRFsHYmELxZsD2zWcDcBBGfvMshMPwjH5xErFxtVnE3F5CVsMkDvkepAEkPYz5Pbu9pEi8eGKcHpWo4LzN",
  "key16": "HfVwKLudsVVjbZH99KAm4GMeUEenF2RGBMMCveXeXDmwe5QesoyfXh1Jx82HnYQatz9b2surdBGY8D6cZURkWeW",
  "key17": "4QgAZRvMaeab1Lu6DhJeMMPwGHz8Hu2PDzriQo4Nd2rsYpc9HZkXYiL2tDwNZtSrh9o56tHiRvRvfXAYbGjCq7dE",
  "key18": "C1w8KWcskug1up73fvJhT2iZERTW6r4Nhq46Kjki4NPKu9TZVaJyAx6GPkByCZXC1tzxeN2uGGutU3tFVx1bi1J",
  "key19": "5TbV4c2r3ngShs1JEtvk7Vq5sypwA7aUzXHpS6rLmrxyBnFyGfz7z9EwVXhGA59qP3CiJVDik3QL4BRQ1YLhvTE9",
  "key20": "TBD8ZifKkCt6Zs2Ktug7AweWyHo6v19tb6mzMcy31AAMNTaXpNXsGQUt4q6djNmSm9LpLy5vY8xtrpnWVtwgsXv",
  "key21": "5ENws3va8ZW2uLi3Jkmu4A5C2WbbJ6tGWhP75mPfD1p6AdV9ViQzvmMLjpZ2KiQdUm4ZqeuxNNGMtVzyU4KsQjqX",
  "key22": "3o946qL4EC1t6pgwkk5QQMcjqdr4NoQC286kUwui3PgWM4bs12nNwvyyg9yonAfPgwT4ChXzdY61bxgQ9qjLcQJJ",
  "key23": "3DN3PqFRKPowg9UwZ5KoGkjRkinqsRQGViNRDRdV1nCamotABvLryHmcXGpuxGRYToCD34oSpZuEgzNXhHhLNLAh",
  "key24": "2pyT9SnqJcHPeCvn4mVb3Znv9qDKAcgv4waZrFCFw8ApUgREvgJnmhYRuRGrKFyqHvoviuFPC8QfMHDma1TtJr6X",
  "key25": "64dYy8wK6Pd5BdTTnrGZ4DbxMYG5fasaacx2adXwjsBqW2xiKMuL5YHbimHN4udmxjNW9Euu737ZbQZztvV7tXoZ",
  "key26": "63xdAJe6UCuTKBZEefrmZVsjqjcSra3fK9XnVguacHuCWXy5ksEU5QAZVg8jCaSeTEBCVHBeTXxAYJkiX7XUbMkb",
  "key27": "24rgbQGgtbHxorNDQw4bXTy56jNQQbAd1HnBhDpNxZ9DKxnbvcj2d8QVBMUDNNnkRRiLfuVNLPNUHP862kubabKG",
  "key28": "Kqydnvr78od5G5hDGGvMm4djp7JPZm9RzAAepcXaSjGpjsjdLqoTyfgGfK4b5w9T5FG2EyckV7Uh9vEHetkfspN",
  "key29": "3fxVUSzFbVXEZhTg484JL7432AzheBZ9eJvb22jAY5V78aCFTZnc33fKcKmwFwZLg8pezwAFcGizgnECZonCpYvM",
  "key30": "2UZVFFGupzEogognzvHC5G8Qymr5rviPgBhZFiyqwPFZURYpCkdZK6vhjkpjsLGiS74u8y9MTVP7TPwhDFBZf8ZV",
  "key31": "4ru9hDq51WcBioN5zEJePgzT5FuBWHtymkyupGYQc9RFNeFFks8hsC9Qf8r567ngoriTtW7rFEVHvuPndoDejBcw",
  "key32": "3pKFds9ReSuGKjHuM9NgPPYL7t1vAQk6REkzXCX2ZvUadR5mHLQpRrV6JR9jw1EukxEhMUSdai1VWwnXY4puF4jW",
  "key33": "4J6sVqaW813US2KnQpVx9jgRgqXvE7xrovHfQVt6WTd7skWrvKaA8fXV2JJSaX7CfMSSVE1b5eKKGUNJ4BLWzniM",
  "key34": "5juEMoN5DxAPrraxvUoJEJF2Rv76WvcXk9sk5mcigTZq4nqwKz35r5AaHecWHFU6D6NSBTZyg6LKiSBRFbjuAkXt",
  "key35": "2dSajJj1ScGTgpMo1hgh4sYPSbdVubknM7Me7F95ocUM2pdawsh21eLYthdZARkwMWUbAxP5dVj7wu42pniEsWiE",
  "key36": "4MWLmevRTLcpNhPGYNyMyKig75nMUK7NWQBtxWpSBxBu8R9ufW5c3nTGBxA4DvMULUx6QwEjq8sRyq6GuW7Ao8mc",
  "key37": "3gDeh6hGQ91p89Pf9MnwvLVdsc47iJRebfxWJSygYnEgScNv893kT8niQknqNzfeuEgk5XZN9hMuuzWA7YYML7PE",
  "key38": "5iZxJQrtf4cqenWsgPKemWFh1BaM6REHynxsd7qLbG1nJD9yx6BzEAjofG6hg7bVrKqtnv6U7S5aVuQRBfd1UPtH",
  "key39": "CgjXkN1YVKb5t6KbRyjQ3U2jQmY1sK2rKKTE6jvYd7DMbg69BuiRcGSz5daZivLaU7E8ZGoCZZaXU1eBE4bMxxt",
  "key40": "5cp78i9h7Wdyx1rYpZJbBqsLevYJx7pFCYLt7ZnMsUVzSRpLHJzE1D8cQobrktdf36Usjm42XuVk18tCFhQcxy6w",
  "key41": "7GusMMzUseXBGjCGwL49teWNVWHALG5yJTcWxoAZnny2216XS7Z8nCLdjUyt6oJMMYHr6MDgDuKLbRYQ4WJw5wH",
  "key42": "5UQr4PuD89UAC9UW1YfJeQnyYF2yhzitRDWRoj32exYZmd1T47X2NN23skvgpS8YBPvAedcAfNVtozJcShoS7EjZ",
  "key43": "5vUjESX6myscU6BmJDoEJVZdnXSkDwKMyYKBifCCgYU6gRjDWHgKY7gRTht14ujWDqaqNbbzXAhavc19Dyq3apwm",
  "key44": "2GrsHPdjgH6V1kDtiLPmCjbvvPc7dfxhsVmHDRLie8oZ2wrJ7di4whkb9roFWWdbkvARcQ2ZHCsDz1pVYenw5HMo",
  "key45": "udrie7Q7iJWrPnv4sBosXHeYYG9XPqFierjXM6XCvAsuwBCXJQA8adkGyeDR1HArhiC2EmAzJgqjGbwMq2dohT3"
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
