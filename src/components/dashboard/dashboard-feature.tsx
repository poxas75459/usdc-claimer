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
    "5VfvuYGWx8FQXGQsQsukPodGZcc2Aj5HJPxatsSh3e95ydr4WRLSdHAbBhZWAYRutNxD7b5fbV7LCeCSqqzLamTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQEeVnVvhMpKqJhwoCNZiZieaXJbbihu36U1rrkcFn1wqTsNoMRRy4AvrBb6NQr2B87YmxYKtPWdcG1Vf2jSrJy",
  "key1": "opMLkfD7oNjcS7sBREpJJ7bGQGhJGU4btLeDtLmAn4rxNssoqiF1zk5gWMqz53zorsZ9TLbrCQWZRbfj5vnDwu8",
  "key2": "5myLM7EWBhVKiLZ177Ysi6Y4kntG4NEQxhwuUn1SqBQdvNkiY2tjwNEEv3Dj5L5gPfjSwgaZMEiLX2oJkM5rLLLJ",
  "key3": "3vd9MM2J6RNXMT5S2RubkeBQTNQkdaGuQWKBaK9pAvCoBzSvzWJRDRC7D4kBz3eyy47AKrcc9WpEW235zC6i9fNB",
  "key4": "32MCXBt8VXYti22Yrb41tpjLZ3eh9juU1XtMq7mXQ7Dva19JgqfP1UtJK4t285E4aBxmx8mwDq8Nz2vfCRoxu7mS",
  "key5": "4S9cVRCKUN8KpMbgGARKV68suAeVC1rDQhPF7vZcf4gpatwVW8PubbyxKgyJQ3NQ7pWySpqDKR8BECbeqVdNpj5x",
  "key6": "5g2DS1zv71njHWvQg53qn7Tt5Qc4SF67EtYfEAZiixpSfuJdedBsPhko8mfkCAjdHhG9Fz5DVoTidyj6vYsf5hmQ",
  "key7": "29gSHXZkkL2NcoXGeVLM9V6pdpMJUcDtqrC3ZEKG7qzf2diSekxYMFFs6YVJgWWyNVczv3MxTr4HjNBffAoXiTHA",
  "key8": "4QnA36H1NKNe5j9DDwLByGyY8QWtdDEz6U2W3r4bhRwRRj81FgsVbSfYK9zeJayHQqEqqhfo8hakKFmjKoQsz2Q3",
  "key9": "Gy8gfgX5nx7YZDiSFo78Rpp2zg5Yw1Y9KRyYSRHjdHgS5v8BgF5Ns2KYhc3KKAxkD62VTtDDyhtCfByHYRHWmbk",
  "key10": "4g4wf8mg5GTaYmogPpDWzwHZrqLKBK5S7Z8YekWry3pC1iUuDUYRba8S7bg81XBCGj46QNME8b3tBL17hWsjg5EQ",
  "key11": "65hE3RMNXp1Sz9k8bsxMzYDwQuqWPEjVLAGUCopxMoaLvtWKZfmW8Kye1KTpFTjtPxHD693GT1aHHkm7hiVCL5tp",
  "key12": "UbyPQrmwpQkJwdoc5Apd7QNLFDQQL2ypF2m5BzHfV5PrLuKTh5vi7rSCso9UyZyTKbPCCo4ewduRKepyYzRpfcZ",
  "key13": "2bY4p8sax7n7BLNYTnRAjcxbPw2Wi8nVbowV1JT3VPuSdBBW6GaY52CFKG2VsewMo1pssLfe5HyZTCRgBSGBygcz",
  "key14": "5UpEo8MBUPpwgPAC3CYuVC3jKeVX13xKGEJeaDoEKcc263o1oYCe1ohXV75MPM36FSeL42zGNZK4tCBS8v7WWkbX",
  "key15": "ZXWCyaBd7Rj1wEuezLJcazFTusmGTKxs8XrDcPgGi1hkaubHrDKsb8TrvRQPoXBcxjK6Qx8eQfYeJghw8v9BgvN",
  "key16": "3DJaomU551VVNaC7pPQ4Qz6gtdt88ZWaifUejPScChJSHMrhtAVRJRq58kmT6hQTVcbjFei5rANZkRy98ypg3cXS",
  "key17": "3qASgiCR4Wf18ogB2LTQr5eEzvwnGf2XC3HafzSia4w3gFkwxwppbu8fZJ4aHXkT8nt21qqFLty1tcQutSivJURe",
  "key18": "4iCniHLgM6vkNP9XEJSxjYmV1KrU6Ta5tSt1eMFzGUyfjebjQUAGowSskka1uguH6jzKBGawTCTG76wid8d5TmkJ",
  "key19": "3ma5urkXzCPnVSgMCzq4Nz6qiRc6JRe8dCP68uFiDKwsEzU2KAJC9Xw4Bep36aNueLtAmGBWSTQKtXf7R4hwme9q",
  "key20": "4m9MJUpyCGy9HBfbxk1jhUG4iGGppRPBsSs1Aa3Ch4YxbbCgVwCVRuefKhUgwgdfAW344AxCAqqvH9AMxS4BFRbx",
  "key21": "4eweWEDWW8NgPctq6hrXM88t4YQCPoPq9ui9cEUud7XhwE5kwiEDTeLE8DB24ZXAzNfdY4bkukJWxP7P5CWaPYBr",
  "key22": "52FumcsjLccz9J5Es5zvxaDDdpManaHTpDNHk9YqSGRSqnqccCgCGM9P33x65f4BGyhhUAjHC3T8sD184Jz19CnF",
  "key23": "3MhyYzQQJti1vKztRWj27c2xrBFym83QFALjsQDDyMEY6Mts8tV7nEEwD52HcBzmLAwmMkVnBduSVJ6XZUPPdnQY",
  "key24": "3sKMPfforjrEyepT8AooBCDpHrxQsJ8ZcxddDLoweFkHU4wHDTf84GUxR139g94ftF7rQaQVaGkPs8HtyP1Fz55s",
  "key25": "vychJLEpHsBBRMN2wEfrZoBUTZaPiJMC1m5kz2Xa7BeTCZzrNjEuQMwfiDCcfLkCSYfYJWLD5G1reYebp18vPJ4",
  "key26": "2wxqCBoUG4suEVpinENy7FB6vkqUBkhGMc2bSJcjcVvd41sncQDjco76iGX5Pd64jSLZS6xUs7LeGvHweqLDkUSR",
  "key27": "354QDNNKhLMcqhgqG2D1jQs3gfS4PKTjD74sVAhb2PKVG3bm3uFfAZKxg2mKuPWvzN8ubM3hPjMhQF3kkVX2Hh9o",
  "key28": "5oAVLC9E2hv7kJAiJfhkrscW1GezU37Fx2o378cocamzBradd4qBfe3dDzJ1CNeTZdbRmutKCx8twhngmJAFcAwP",
  "key29": "56dWsTkXYoJKVddYFXYxc59QNwTiQNbje56Tg3A3aFzANYgoqb3byF94HtvDnrGKXezuWPHJxfgbVVKuk5s246mT",
  "key30": "3uFvx2uYmhkEnD9bxBv7Hw9bkiCT6sM9zass5RVCeZxUJvhN5fL2AwjTBRVHqnm7vsZnMVrxm1P5nUJ3wZicqxqN",
  "key31": "5fBNbnTSFdcfseeAp4suCPcC7m3QU5rBXzKCSusETf8ZXFwCtxt4vnsWfD9afuvWXhNbzMnYLxMxHVQYUJKj4b3P",
  "key32": "5GfLkUoP3hPQdh5SbuTvW6o82CzCWqB8zEG6QHCGE9xGyPZRUFwSK6ckgdkeqUZcRrF1Rj3Muq3C5gC2vuPLDtAD",
  "key33": "24ukQR3FycZ6QV7cXbnNQHQbY4qFiido84nxcjY1H3jMheFG7KZZBU9UqGRxKVQ4cnWAL736qCgShaaiFuaex7Rh",
  "key34": "4vLfHznBkAGf7JersfRswronyUMXnh7seApMNFZN1Ys9j8gjBqjLnPFxtjub994MjvKkvQBePMc3bxBeRxVfLSLc",
  "key35": "oYLvUuwxQDfuv8rXdwpEj2jkKVcHkYdqccZhQBprD3mGR2ze7QtTKVboP98PvNeeDgZasLHQ7MukLZ4EMmssnta",
  "key36": "4QHNA8L1iQSmHQspSUevvrzpA1ctwXhdRNQXyJDiDWibk32fPeLm6rNXs5U4CRKDzntbeZ7KRfmuMhdDnqDjA9iv",
  "key37": "67nMWyx78zuoHyFgkfKfetjs42Qf3REnrEVAE7m5a2NjhnVRMsXnC9sEnq9jta7AXNL8JD5iWcV8LWyyftUs6VGQ",
  "key38": "3A4UydG5qvwhf8kH67nkpkXnFUt5pJTH2XXMTopvJZoSQ5cY5LaUVBjZuV4xiMaCAcm6fxxBjqvmEPg36eS9hhHr",
  "key39": "4xLjt1Wg9pkMzPgWh5xeLgwZWFByay2cHb1dTtQYwtv3mVK4J9mGHZNsQKpm1PcYBC8ipwwD7GZP8qHybEerT6oo",
  "key40": "28VJCogW5WZ3TTDyScegomddVFpwhKHfUkhqVLFYhJcmcdZYsAaBayJ4ZLUo3dAQXnSfcEreV2e2JGtmpJ71uujp",
  "key41": "29eUR9QE72Wd58kAz6wRhZvwrdCLtQpSXJbP44qAPHkTWPuiCHhJBA5eKWeNYxFNEeYrHyB3hgCG1UrAbPcsoKkr",
  "key42": "g74CM4QRCRgzMEjP5tczp2TWT8cn5iFfBFpqnjrjtZ6MJdoneec146dceku4AxDwiBaXmKWQFCu73f2GyQDyckH",
  "key43": "4a95hiPmU7MtrFvFENNSbJUWW1uiruwpy2D48YKUrv5BLpo5d2s5vbjQN7iw8eKfmxYJhjUKuapdgKn6C7ZLhR7P",
  "key44": "qMxyVX5vvJeWtqvE1g3rp6m3D7va2qTdkZMuf8AeCgGXeTgt9U9me79qgu22JNxQRvZhUoP5TCwJZNuaFL8Mg9N",
  "key45": "43WkouzdW7oqhgcd8x3rTdJVtm8ePkYuxNTRpimfVJia2eLgqnJXqpb5dup2pdqF7CyLjuNkK5JA3KRkUJLvHbsL",
  "key46": "3kux4DnBb65DW8MswWKQ9Br8bojiSikqsJ4QJcQyAjXc9KWCCWLKgJhhFEaVM6w2nPNAL919YQhz8RCD3VwHFfDz",
  "key47": "5mRAaLLBrnEo1nb46sytHLq669LAxZyBpU4QZwLHCEUBcUkDB8bEbGS4n8DwrP6AAEM5Mp7ygRUXRWZiSuHjDQrj",
  "key48": "5C2FtQpNvwVySYsU6zyjcptdCXbohSjjfMfpHJfSmtg8UGB817SoCueEV699MmxmbboLzMCPdVoacYDGDiLcRL54",
  "key49": "p4MPBpCZZtchp6vvxXwZcW23FuJ8pag5x3kd2RrQ83FAe3kxgtAMgPnf4iduLKCoXjYbQ5ovfcDBKh2hAXqhwVK"
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
