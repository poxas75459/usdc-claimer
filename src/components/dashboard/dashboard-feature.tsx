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
    "2Kv16zBwGyttjEkhmW5vp3ejhYJxR4J59oLEjs1WP66GtEzxQbvhFuaozBYtE2D4Q721wijSYH2QcjDam3UUt8ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuSTgUoeyfoo9W6qzp7pkVHNGVhTdCQRnEis2tc2go55C4im1E3xwUpvjDvGn7JbNFS1sFz39tEA76ScMbGYE9S",
  "key1": "2VGp9JiKoS7taxWb7ri3cMTj3DejPpR3CyCbqUJie4i6F5bEZBvebkkcXvaBG7g9RugjCfMmgoyVdneaS9VEjTiP",
  "key2": "49f7rUQ7fngV92qB7tVPDjPnYEsCUtXatyeHAmKvYVugjyyy83vuuq8MQiY1bJ64Z7sHhhv3EYFV883yWJXooCeq",
  "key3": "49Zxkx6GBZzCDFsrXbkbvbjTPCqKZAb4W9hakDZqUW76pFS5VJr6DJvEcjBbwrnWdWdVNGhxX7cVVzNuR8RLLW9V",
  "key4": "3aoyvrEWjJgQ2z3jx45Rh4Y7TWTYwAqZJ7pHFwHjtqVpog9bmfu3CvyTapzmm8vbVRDzsfvRjhhrqBH7zT4sVnXd",
  "key5": "3xbcTMK5GnvEhUjTYrtKgQ1VGniafAC18Aqi4ZB9HVBhnxsiWF1R85sKKDbuVgmqxE8KRvS3pmxMhBpQ3g3SRy4A",
  "key6": "5VbdCEFLbeLb9DBdNvgm8depPPxWszUPCnXsZvCWmNqubMRznEzJrJdTPE44JZL7EUXnsWMYwndjtQWGv6tBwurv",
  "key7": "4M3Z2JTKxk1pTBvgBT9xjHZoJYCMeKGw1xDXmN6ABEj7HZBb1pEPJ52bb5bkGP4xYBtdD6Hh7tptzgbY5AcbGyFA",
  "key8": "3op1irRYLSmfqKygrPQ7WQuKXcZuSfaUipk9fuAiQf6EtE4bWJw1QATNVkGjHqofeYbHHPzVa49vNBvHuVDWAxyb",
  "key9": "39RXqWeP5a9arEkMTCpVp5wSiHSLqjXjQvvjp8fvL3tqCM7WAdzMzqc3WsT2UrZ91tDJE6UGsVpu5TNnzJYLLPFs",
  "key10": "5WkwVqwFDPVbGR7uQzDb5B9ygg6HAapMnhVcMBA8e9m79gzuX4NPdVC5AUaTXgCtjeQvw7kNQczA9xS9QjE2E8Gp",
  "key11": "5APNNdrFYEAf4SGJABTWEu7dZqwunwJsLqUecV3dWNE86NrpVby1QFZngjpDr77z4JaoF3pVb9EiUkzxUccoiNe5",
  "key12": "3rsWgFCVVY6kcWSJCMTF56fNHJ1q4YRBwrVFN85Gm9eqVwo4h1Zi7TficarV3ynAtiRCNTe1DZM5gBwhJDwf4DEW",
  "key13": "3oi8Tq1vwnAh8iaJ3U2d9ezc3WsJdCnuqbq66TwDXheyqGnrFwJkCKdfVERfPAPumei4w6vnE33KAaDGNNEJA6ci",
  "key14": "4QVLTpUEnzZvye2XKC2moMK9fdRMYh7imcXAWZT8JaHFCeTn39H3pBysYX7DAa2ZnYAYALog1RrqiskHMfnfd16t",
  "key15": "4eieu93TD8vdYHVbjexSDEaMriZMDdsVhNLkJtrPkm3zsR1P1MRdiMaoxaCbGWnSJDSpzD9ffFDquRhihmBdjaV3",
  "key16": "4KeTJE6q9Q4LajGaqgWz2mgyFXDrXZsyE1M3jpaWMsFaQw9qy6P86Fft55yAzH2GF8Frii4yW38KxmiLyFqnAUJD",
  "key17": "4kBMuavuTwtibXz1EXKHpRRiUYsrSnkqPENTCJrhsVh34DAJR3ASgrkLc7jg8yAypCDbmrnFQm3vNTKdf2waGrv4",
  "key18": "d9rTbBqGf4pguCaAtAurfX2ou5c5qffthSK37EMAAP2ZDMcu8d8ERwNRkaXruPSTVQLFAszn3bmKnvrkMi1Ck3g",
  "key19": "7xpki5RmccrmxL83WGGYaFERW8B8d467uaDBrkbgRCFnToCLdLo9mUsrYvPwdbJqAFGzYPkmTsNCj3fy5Y7mRNs",
  "key20": "3dhpvqwrdSAGriJs4sTRTpjm821ANjjv4J5WTG4LFswCgJNVsRGub3y2f5KsiDVRGWnD8YFJhQd7uh2hYkUNRDvQ",
  "key21": "53HWhCZCrovpv7MRfC2Gw3gG7dYMiAu6SDU7pT6hexUGbCV7UGtysNJoupnRYZc9Ec84YPFneidF1mgCUJpjnETA",
  "key22": "HrGoiLWLm63p3TbT2jQsrqXiZNPdw9LTsV36UReW34t1a6yD3LSijGYhPQEGTYYAcudZH9gA3A9TGZdMtRHdR2q",
  "key23": "54F3MnPdcC6MSjCWdUP2kez9gRmYRHkWDW2mXX4YT5X58h6gweP7voRcNrb1sYdhn9zTUxyz9346GQMdcSAusrmf",
  "key24": "3Be9Gak47zAqfsm2DtHvibQdcsCYgfQJFiCRUcXNw2ZXShm1wmPMGZ2xUpiDtM4bVEXSNeZ8bidiJjSYvDTqZz6C",
  "key25": "5GkBVpV95sQVo982kRiB99vWygRRNBJeSbfaWUGHRDgENFtv3oMXEdPC9aT8nf3JBJb4cQxoKWMTK9xSpyMhQDv7",
  "key26": "5Spq9QKtanKEZ4Ph2Ypsq3te48LmfnqJpB6mNZU8R7SDTnQJLqYT84qjZn55vLUu47pJ4hvKwiihfPZzGta1Z7r1",
  "key27": "3Wb4T8Qrw8F1YQde9MyhC6zSzJmNhjiraf4aBJMpqG5Kcz2fq29bKTQabftTyuwVmd3rM86XPNcTLvPdCJXzDw4u",
  "key28": "5tzEYViD2G8rnk2B97Y4RJhbMHFbCCTkPbwwqfP2NtoErkT4wrwgFhCxrg6bZZsRtmZ4w7VJcWm1Dh1BJqUVYqcs",
  "key29": "HX4a2YSxi9zBsGEK4pCd2xDkeDT2BQ2h9xT3yenmezbVaQqzRpkoUWane6Z9q8FuPyJTGtSoFVUgNuMMa3q887y",
  "key30": "5ARBcZxrQ98wpNckWwwZDnmpkWy6BQxdnsp7Shgda9E77WcGeuLvsfS111aaKvPfJJCNu3pD4tJLSaAoKbKjdjsY"
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
