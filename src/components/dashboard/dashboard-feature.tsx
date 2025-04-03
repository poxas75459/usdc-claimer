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
    "53e5qiUodLs1HHEvBRLGJGtrhXZpat8MSRCHt5fwinsEjm41Gh1WGrT5thmzRurCiPj4Zugj9YjbnH42zNdPDG56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhR19oCq31oieweRzJ9AJpzeoq5Y3RC92Ue6i5Hkae4CF72QmMg9jjeWny9XXjDoUrvu6MwEPHQbXuYUCCrprX3",
  "key1": "3ruDt1EjWFawe9yby6MYApdoXcjzinasq6AetLqTQR7Mo94ZnjqPoMPGdv4MrGLMoXKkSjJinAseM25kG3Reuh4y",
  "key2": "4Ayz8HvuLWvXxYjJbQVS47NZBNga4RUb9yfQz62rrFXC7jrtHjVujyD5k1fqgV6RCfnu41NoDWLH3wZYpPyaZSxB",
  "key3": "57E6hmRYa2GN1EUQjqkyZvmqc1383bz9mZ5TFmkPpvWZFUdsr5MCuW843Jh3XekbSG1EMTpAG92BjtWm6AooqVo6",
  "key4": "3iaGrpt1PArHM26P5ewP1icYABXdXtLJnTgKLURNT1ev5PrxEF8xkimQ8DG3j5W8CMRb8yDQKzBKdTgufcC2nUxT",
  "key5": "5JiKHpTb1eQ6trn3rFZBfjrA1rPHeHgmyyCwf5qpZEr4qBbuH6Xcdz2R2fr8jTHqSeTz8NpSS3XwoummYAgpcuDv",
  "key6": "2RcnfB6La53q16YZFuFSb6ks1tMxcy8ExbGhfYaqjk13cZGA1kf6cTqcZVcXM2wBUiBvS6KQwPWB6y86EoV2zWPe",
  "key7": "318McR8WoGCAbrParzHpGgSkk9sSHd7JgwLbJdVp7LC5AYTMNCXk17eFW3Tfj6kmCANig2bgm1wXKdtH9GJLHHfL",
  "key8": "moTUUqG5EQ32shCP144VJmGRfnoX5NQnYgT4SqsFyGsXjwYJsM1Qi7KfYWQhRPKokpj7U72KJF7txxTXvhEa7W4",
  "key9": "4Sq8p4h3kweVg6MU5HGy8H8UoBVQDKJNqxfqH9Jmshr6r3m59NcWSBRgYxcRQhevEp5NYs7ga8P4ZPjUQyvYo74r",
  "key10": "2vdyo8EZt2eAfJFDB49YaymHQUiKEaptFWrBWmY3mwPo64c5YkeGLjGUXrRwud6uXmG6GKipctbzR32DEr3NbEUc",
  "key11": "5bnERqXE1JyM2h9gj2Nh8Qb2R3iRKbQtBycHZXmjF4D63Z8D8MJh9yrLeBY1dvsk688YvQhUKtWMbipaFqeude7u",
  "key12": "2pjSkoZnJ98c3ZVsQXsw3mWzoqTDBsXp1kWMsbVwonvUYSRQWP1gLjhchuEdfiXzDA2M3Qzvo6v8qsBr9PoDsuHi",
  "key13": "5BzD4Cxgk1K9P42cn72jDgJrNSQpRzL5YHVQRDeeUwwLFdF6Fg1ia8QfsDzRG2vFJVAyX5XFvQVyMrPmruccX3Tb",
  "key14": "21fSmD3tHewM5RvsDbvbsVu8GgAeoRPyjKfxWdNZxegeHeWdDLYuwDWiXVZV7azRoTdSENmgVqrJDXuDH89K75uS",
  "key15": "5CtLjNx33iEPXa3YAsZmSv74CaRD6jdqaKvxej21HNv6uF2MAx1o6bGJTFxPvQwXGN5Wtwzqo22WL2waZeBE2nof",
  "key16": "4i83cDdwwZFKEHBy5gN8gmG95ot2p7FLZZaYeyLsA5JZLsGkjJmRD9mDAFxS4Qy9cjp1g31vZUJ8LvuEAF8e3S5P",
  "key17": "4xtU3Hk3gmbpBZLb8zvL7Jf6Mij1UmysqfxxCGD3sRSHoohqcGMUTEHCoMtMTu1WeGx7CvcKk93LDvJkNu7GMZoN",
  "key18": "1QxdCUQyZBaEfit6FjrnRhiMy1KQbCEPCMYFodXM8V9LBgD1jnfoFsEZ33r3Gh5RFDAgPgr9krELKPVszD19N4L",
  "key19": "49P32Ny5yTfoa4N7Ni1wxr8bJuHbKd1vJ4cEceDDDkSecKB3kgkNH3yoUq1UayXz5iHT3LugjuhpAbtkEuAYAYvM",
  "key20": "5RmQm5LcchcEqiM78YAVeuU6jCh7p3fm3SsgpuHFfhg9zmVuiKpwp2pJQ2UNiR4BHRjAjucejETYGQziyxfs9GC9",
  "key21": "3n7zgNEQKSxYzpbWvKcdFsdw5XR8br7T79zrsfFPYvgGB6nKiwT3QnkrLePmMs5QspGyCaNSLn3ySD5rSA3YRRQN",
  "key22": "3XHCDGDkcehT3rSUSVk2nzfRVt9twMXQWnnpbTLzivZCTMG6vMGQySVUpQk6MLfMAdCZ2RAZYh299PCPVGD4c6Sh",
  "key23": "4ND4Ahp3bPZUfpGMbbKfLGEirEd5qzELGy2sAP48LfPSoiKkie2brqzRpgFmn8fxokt2weJTFbXijyWWQBSxwkYk",
  "key24": "37gNB1km2coAXbdjyfNgdUNcWqSWt7P1drNcVFJpnCmMsXt8suzNdxEwmWbzarJ9Xb3kHfny1oa6YMCebRyVn6LN",
  "key25": "3mEiHnuxirBdgPw2mqBoWa8Cejwy8CygjW39vnDkFjDj5A6cnx1ZFGnR4QF8d74TbuCc4YaWPTetBAGGeFD4n1Y3",
  "key26": "UPawgLko3inADaSchuEJ8pcP3nDwYf6YZHHdVGi6ityRuJcMRi8ikHuCaPy3T2jNw2SCkRwfxiRvikPdfPjDTo1",
  "key27": "2jdM993tfk29nLpAFWS2psnrLSXigQGQvpB4wtHQfEwacRsh8vXADdtqjUS7pn3btwTQtf8qBh6KVHY2Xjoftn7a",
  "key28": "5pexw1eqGLhXfraWSgBfhTpqfCwEmvAn3Yow4YkiKmoCqqDLGtMiRkS8ANe7cq3W9xTTDGQzqANq9Czuy2khWyFt",
  "key29": "3j6zRkr6bPsBagPdSTS61LhyYB5mD3RSy4oY7ijjDAC4d8j9RjDnx7ZtxfYoMwAw9nkVXSRmMouvz1U7yQCC2fw2",
  "key30": "3DDz3VJUHGGANQ5qxHiiJsZdgY5BHjgTSJfmiWq2KCbEAsU8vzRGxDyYrJGffQrSe7KGk4Vi1hR2XVbzKKeD495u",
  "key31": "3FLqigJKzUFPTXUhunormFXN1hRnnacGHvaUr7gprvUvr3qW2o4osc2exjbAggsijAppt9BfRtPKf7LorBva8m3U",
  "key32": "MQJpfcm1fxkQr2CcmRTzxzHWNq3R6gMqTpKRmkFxWwHGxrBzBMejc8DsZ91cyqqMHNxGujE23nP6fFDngUUTrfh",
  "key33": "LRpdBWwpxw6LXLtH416RBYFTMcUmDepd678DSimQXsUxYvin8ZTaut86Jyvy89LsAGG6L9RWayWKZ94xvcPJz3W",
  "key34": "5wcspDwYzLL9AYFKvMQN6m8tLLTJz7iGPmUWRZKL3dMN8PAhF4EA3KwgyV8Bs3U1UCD65KTTdfDmm4ktpCMMBZRQ",
  "key35": "4sBef4LgbAhKYpd4pb5ko6TBEcS6185JCYWWnMGFCoEmzRDoQjeCcbSA5ybf1p5LqB3UdY87Gt1Wq72zmNek9md7",
  "key36": "3N8vKxyJaRRHaRxjTu3R3HSLymJG4WgBfgEP4fsRwQK6TqDNJZjizaDjW97cdvB6PYp8U26Fbkb6GVH7NFXK6mzK",
  "key37": "4sYc5HRkFeyaCJFZ72viVtwhCnnrMZ1ZcvPQfgL1aWJcsEcj9JEJqinUN2wsbfeGrEaBM8An6XktMhMNavEbcvYv",
  "key38": "SNYq6uTriZdQZds2Z6mfuT9hjtBbHNZAa2xS82apEnYfkQ5RUF54EUUTVeu7YcjX3QQ1GKhkhyQm2PojobgwoGc",
  "key39": "3J7u3FfiH91euMMdtRpgpMWStbcgaNsTcU3aPAkv6FkFHZbbjAKJPr4xHLzqfRfDB5rWqLNC64s9q2H56EfA8zMa",
  "key40": "4fkA5GxZQnriEc1wWMXXKMy5b1prjjot9D335L2t41CqfqpVGk11dGEa57YCBKaLNdEJKWEoV7P7AkFk4b7Ju8iP",
  "key41": "2Bee2ZVdQzaB3PXQiBPZ5Bfppm3qqxPeuiY1DD8cm9UsSMcugc6BgyFeciN99fyiYyo5HgojtEAeMCjEpz2Q4kYH",
  "key42": "3ZBqV6AuqTMBzjz9NLp9EpxpoqG4egd5QHAxVWKkpmRCcwLJXdUjv6RMQsQs4aFDWEpHTL6rurZnn4t36TvYZoYf",
  "key43": "ZU1bUjsxNPH1w9bHBK4YGkvWLrzBtFpQQ5uDA9e9YXb7ppXUnA6UKrEET6u6FwbzjdLPNP8Qua5a43CYafHpQgg",
  "key44": "5DLDUKEGWJCue9q3cgGUUFRiwqd2ARGfuM38LqpiYPmSimXzBcfDFA8DF7zUz6RaJmidCR4MMn5THdEKGVr7uJQW"
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
