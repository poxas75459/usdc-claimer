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
    "41gpHe4srvfFErWmN2Ssid1pU9nPccoWA8bV1BgAjbJXo7hNxBTVo52f1EvkJgW9SWoAn8qWWQQa9XgUhMiERS9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdfZvYMcwiCqGvd5Hj2ZRjtHXkcbWmbav4UJEY1LrZuqMVrw8HwL4bWWqiPtDhnydZj8xQUdtBjB4FvkzK4HEWj",
  "key1": "5FcsDe6CuL5mLBJWmE3zRFhvMcB2NsA1EHE4J1HiyqWFFdg6Q2PVTKu8jnam4aJfamNdviZahy9X1mrABccWmYbU",
  "key2": "2YTXBTsQvPnfHmPPMRrM2GXqE52KFxQ5tAncwaGj1ftjY64Fgyqs5HsDcTpw5xRsUVvTEdwPWLgbuMzvtKaXiuP5",
  "key3": "2kYJG2wAhQ1tcdHMsg3sUffujgiQU7AAXiGa8PCev8FduhYdgJpUCGWSwtdjd2AW6hej4nyWnKyhkBsD3nnx8hk8",
  "key4": "7ya4qdSosPJC1NctWY5XdcrcTQqZh77fwpVQf72KK3gw4879tYZwVRfXWBtTZBhSPMDdgA4hu8GNHkWQpzMpU36",
  "key5": "4YEj5Mbv4EPajyvL8yQn2XXpL7MFQhbwNqAWdm71RyMCgYtwed5fQdmXFH2AeLemEWW6z6DY1VgxqL4HKmm1uXmT",
  "key6": "2K8GFu6LX4bwu855GhuYVAD3zj4EGBVLrkQMG1mezdK4efAGX7ADZWTVhvXYgjwcCGa4DCZHRaUYeZipyTJsTdCd",
  "key7": "2Wdp9EkrGhLwJKpu7DzVop8dDFc2XNLocin7AeCNRYNRrQ2NEf54fGQ6Q7vjGE9bsbpRV25Z3jHH3HN6HseLKEgo",
  "key8": "ts5PRqQ95qCTxKUKu52on1j7KG4PqQQYzfpqQfvvftXvijV8dhUDYK7YYzVPTfU9PMfzJUNAaMYT71m1J4GZ5gS",
  "key9": "4GwSmcCzBP8RN4SEis9sWNs4FfP3p6bDT5WXPb64jidxBRqQk7uCbShr6uh19naCADK6Ms4zF57KnMGAgRWBDJSW",
  "key10": "3ELXqq8XLCFV9xSQAX7nEXP73e1pqqbrnrtZQT7KiuSX8jc7tn6xgHwxswTBzLC1AAjhS6Dnn84VtLFkX3eGAbvk",
  "key11": "TbEHnKh8FHF24GiV1EWszmTKstereECAJR6emwYUa23Rfrnr3LurNbxNsifsXvdZaCPNmMaFQSuQXwxLUo1FeoY",
  "key12": "3iAyk4HeuiDKua3Ti35VqAreuTnvdz7wdnNdGw4ND7jqsi8wCg7RjJFKe4Zs9nAjtFMhZBsq6uVS2eqtQsNyaJUX",
  "key13": "5RfHk9MKdzLGRMrtHhmFvhKFDUfhYL9bddugEjWo4gT8ZS71zoWY49ReQDeTjxWJbQjfnQY1RMcimXsQnmghYc4V",
  "key14": "4nK8psEn5Hc3PZfn1wDfF6ngPyuxUGjCgqzbtoHXsGvcZZWTvV7ZeVqakoFLgSqcHuFHY4jdFBqRumv7CijteTTU",
  "key15": "4VBUUa7YcfebkmwhAYbmLUCm2boB4tRTYx2AdxTqyRLeapRJxx6yrAvizzRZ2qmGGTRqDq53Hg9QQ26iHEagPdQe",
  "key16": "3T46iKdqBxBENqQKydtE9pyVbLcBhfhAN5wKSCEce3UHWpxdEp7i7ggzG46wXaJtWcKdRSb4hSjCw6u5xep3f64n",
  "key17": "3dPpvK2vUHe5yQ4EHhuYuwDZjk2kqiWRcA2FFNetddMZ9YRdUqSQTvomEGytcUU5wEDMSP6NfdqBHcq2ECLYaw2a",
  "key18": "nD3YR1MqaqcU5YAW7vkza8owvLev1dTTrUuFFGbvU5BzxHHxavmKxTyLvi7pRr6G8rEE1Eeb53EZpT6J9jbvyWp",
  "key19": "2zVqHs1ZSTuNgdffnELC9qcsWiLM1XQ2wAQKaGiPPhQnwyYwedqUNVZe1FNdWtSdHfUuSD9YGMfyXJQHtDGrWTdN",
  "key20": "55vC6WnCtUhhHj1c1H3LtDEushoRFcpBjC66SDGQ477BzY8js1vbVnDRgYKJ33Ca8cZNV7SR8C7QHB9EiEaoaij7",
  "key21": "qGksCtCyVhexo3qUd6fxjnm5nuANxotTa6WchWUGC33nndbkfEzb2bnyReSmbmxLQNk3W7TVyHfzQQZqfhNjMju",
  "key22": "4e3vFy5p5RwWh6jfse56nCxJkUK915J4wqHb6fbgC7ZYFCvAXGxnmBx1NZkbuh58TuY64CFL2Dm5FvAuV6WpGk7u",
  "key23": "26qZTiVzp6AKFbSthebK6rdCJt3oZNqXdVZqS8pLbCyAPt6KktGAbB9AUsKafQrajcjSUsYaXFAYHZmTnVoRVGvy",
  "key24": "u2EhH42HYNaSB9MJCmjaDefZdiSVxFiTN6MEnHets9grNojSjsRE7HitwQ8gSrcah2NHLvEzVB4h5AW8o19rmf3",
  "key25": "4SXLuEJRM2NVjrAN2tEc1WKsUYZSVzDjkJR1EdN4T2rK91ksA5Gdmmjjsa9M4zGfGa9uxWLYVzqMTKd6pNR9EXyz",
  "key26": "3r6KRPpw3N6Nb5qAzYuHm1vfhP5fZ1SBgEpuGnvHKBmFEYumtqibZ5ChAJdfR3zr1n1xGgMT8Umh7zCgh2U4NRts",
  "key27": "rLiRSubzmy2BX5F1PDX6Pib31PLgSqbYPEmddqqgFtNBee3JxwNzgAHPpPqAbtXFTnBi2h7G1Q8rheByRYh7zMh",
  "key28": "4x8kGnRhLSHyQLR65pp6x8BrHDtrm4RcKkSF96AKjiBc4km1drufrXbjWH1mq4qAMgRUrmiXnBZtv83ajaPuk34Q",
  "key29": "3dCuu2uAvaTrdNdpjZN6pE7AGeGXev4A38Mew4ogxhrzyiFsGmjyEoUpBrEHSRQVrCB7NFw2G52HBLoGuk1YVkBp",
  "key30": "F6uz9Dq3ZGhNBgNCBtuXPKpvfDCZeKuXUGQBAK7uoXdzNd7gVjTU9cVct2GvTVcobVPKbNBsczVs5E3C7Krz1D6",
  "key31": "2Mxcrp6GcK6S4ypDV2yYTGkxHdzoiREJ9VV5tpMsbjXqeW1zs3R3JRuRLhwjyNrp31HmtLXCratjFXvVu9pix7nM",
  "key32": "3iszkR8ytqbkMLpgFjcodfb9dUXmXko2bcbS5yW4YxbRTcaxNszSugbxrUrVpktHsFYat9zDWK3yN19AzfBq9q4A",
  "key33": "YEg2SidVR15CJqcYimQ2h6zrN6JhdfVJWokEb6zBwH9UUSsugYA4Y5doRXJZB7Xm12Z97TAPF8kczgLQfBuvjB5",
  "key34": "Gpo4RGzNt3vvoF4zhL7z5FTyBB6h1AjdNB7dpkVrKc5U5rPnvkGVMPkUQoKy88ZstpqNLsGcj9Xk7yZhETpniqW",
  "key35": "KBwjXqYoqdNSEp93r1MUUAdUW1L7scrx6EPJkurdtumBi3wvnPvj9NuGnmSyBrhg8scHRfRjLfdcAp5jY8sJWJy"
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
