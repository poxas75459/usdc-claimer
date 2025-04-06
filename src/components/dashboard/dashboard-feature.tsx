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
    "3j6BPCs2rbPZZox3UD6fjV3sZ2AiPJMfRznZsnN8eRvtD1JS6Gbqqp3KaTD79Z9wY9Q3GAu34YSe5aniUw8gq3mZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQyeNCyA5L8XHPFLP3x82jAeWMy9ieMt7SwKijAATF4QQF9uDgMxz15DjTWwkARDxQQGosWp79RDYrSLtcJanUN",
  "key1": "3Xo2uxWYyrvZchLDD8Yr2moCW7Lk988AmAdfXrdKCFaf4mmYNdCHJjuNJSU8JYgUxAcnryQDLBgBEjuL3HY1vfp3",
  "key2": "4GWe1uL4HNW3bfCGcJpyzQW6kr61YBHYm4PM3ZRfEhsBpVmSKLNDmx5Hcc2jqm2PzuGixyvX7aytA1yFZcH9DnuD",
  "key3": "4tELsXAxDLmbaYkD5iR3YedZg681vAzPUF7hfoBGeqLMMvoTJcfKDseMBdweATKqpdZSkfAZRQ45LvVseRD1Dxw1",
  "key4": "JUa8KCrpZBsreAsv2wxsvFrdjWdg8EvSZPMDShm9ShN5Yt6e7ZSG4jE7QPJrTDDk4FddksTFQBX2rrt95xfwCR8",
  "key5": "4RZSP5wNHgQETSstzcu7EVRd5oxy9Y1daQ2ntDjkRKMte7RCZiNtadyLHqB7GLjjuLqJscgXJt3d3X3kkt1u2bFh",
  "key6": "3ruPnhhJNruHnWtU8H5VGW42arjwgSQr3FWwZUcUvVNhFFcRb8znRgHTnsr2YjuQDv2QkdBju9ofyGyyjXXmZXSo",
  "key7": "aEdYxuvayUWUD38DCr1fniwfTgLGuoNoT16HrbHxCrK9XZtb53nvUaCagjhgitew6fxaiyPe2n1TnV3LD3ESURD",
  "key8": "5G59sMhGJxSzjo1ZPisYzDdrHowEG9bNEB94SyoG5szoKoMd4iiH9Vyo3WpvZ9BuLXC4MRaxb7K1p27YHRzjbG4W",
  "key9": "3BDzLRwaGrnUuzVsW9vK7vKR1T9SgvtXuEADQZHM9t1eos6i5Wd5FEG2Yam9XuEgCgP2RiA2ptNF6jakuhKRRWvD",
  "key10": "5LQ8rjGjtU5U2nobvm5426dgjsVHRAJeQhsi4uFJQaqBNFTcBVoMbUmA12Kz8NUmh5JupcsbQFGwS5hFvtdo9KNM",
  "key11": "3DUPjyaE3LWEPoScK3Jygz6atjd9NNb5Qh2eFsgXaKG362vvWdoZYDvPrBTZryE9VhERAhRSK2EmZNryGrnvTUag",
  "key12": "5zwVkk5AMpU7CZ2SyhHCq9qrXkegkACeFCvb5QxdkdARSdo8awuge4fH9Lm2zDZJYKHJk5o2RfTk2AGmUBdvVd8s",
  "key13": "3nYhNVk2jHcejF8ZMpPP2hXzZmBDym1UEDfucG2myK9Akpq6Ar96k5FjKrPWhfWB17b4AWSFoPZBvCqSEFz3cRRm",
  "key14": "66aQwttsHfSWzAn8xLbYK8fjNL12Eh3oYEHAgS7Dh6coSkTkk4djFH9PScyWJig165nc9DxYNrYqS1qYf2v9cpbK",
  "key15": "4ma9dERNurZw4TK7jjqTutLp5ryhsR5ejNjGfNEkbZQoHHBB8CWCGzsykKPLGFcCfmAuxsGwmPEubggUBcqCHKFX",
  "key16": "4D7tKrdyF3njr9WGArpKGw7fajovPWd1VgTvvAZ1kLnrBHVppLDZSEgE98UXbndSP8g23LUDZ1LL9HZfKHU7CLYp",
  "key17": "3ks9E1JrEmnjJ8kQMpZMGZtpgrwnNDksDZ5dpnHd4T5MC6DdvFj1SjwcYHjJjsx4fgnU7EL8tyEfpcmoWzAynGpZ",
  "key18": "4rYXXJck4eek7eZMwsu6qZaHFASnDHSFcDkZTLr49XhfbBnbFXbN4Mtqk4641akUJCdwhj72ZtiqobRRbvACKjXR",
  "key19": "4e4HPfVgEpQSdphGMBsR1KMayhMmoJ2Xs86aetdSqtDUuCT8SsHAeAjhkU9cLFL9MRM5Rn3x8kF1n9cB5DwwaNbL",
  "key20": "5BXFgCArnsDnXstQy4WjfcNkfhdfPuNbdHeFH9zu2ZVinx4VvVdAwRsuw6pEs49tED9ZhsutpkTNG1vioaan9QHc",
  "key21": "5HLX6RFkB3TFcAuqP8xwghzX1sbyGS8K6gbQ9EpBmhA8P2rmG3x1HzZeKGqZsrUR3YLp3qnVwqo9yEFVzRuTetkX",
  "key22": "3DGsygGaUfTNmNig5j1QaxjEdW6phTy49Vgs1qCNKNeC1Agaie3F4EkrX6TApjBZjVs9LbicDbgxhAc9JNNeBHzs",
  "key23": "3qoPF83nJKzZFbW6ZK7tnTpYQE7Lzpf4erTLEgBiaDkyuoGjyvkTZKSLbd6kiVP5PcKZnybzQMSEvuw9LH85cKzZ",
  "key24": "5kFs6AaLWZWSXFoqqahYWw3iUEXcsHA8y9LEp4mnBKK2mvxY5fXNMLaYTw86MAkZj9riJLE3wVX68TGGqjWgNELJ",
  "key25": "3PkidqsYubkxpUMA53ZtTE9Rw3j9Lccu7JWRhH7ETQ83gAFQjTqXkr4nsWByMWBWvtvy42PkdEpCmb7F6xu88myn",
  "key26": "4AVyzDTbL5pcpazGwQhZqfLtuQxRg6rqPQagzQnC6uRq5MqLcdyTrgh8L8eqZhmByUmBPNEfTjDNErbTqTXBXP4U",
  "key27": "2dRUigawyE5mpb6Jrdr2haBeoP13uCwsCD5S2Ernm2p8vMWkvgNwProrySkq9hN8CW7YZndiALhpTDWwbXHtfrKy",
  "key28": "3jg8b8cu2AQYuVyAvaz4vcasSwAP9MmGPLrZk1jZwQ1TBavuprA19UkVWDi58Lj2yHtz9VrycfypMmFnWx3vMM9H",
  "key29": "56trGvRAR4qgJg4P972eWHNYtnKBJbpZDLFdiBSotzeJt94wwVGkKNYySTZBU8hmhNFQ413PgcV3ac27ibDRcWQX",
  "key30": "4zfifqLHsYw5EgzTyWFhZaGTz784frVekvp41qBWGzuo8pe9Hben2BTRxxf7YBZQUJpvefFdcUkcJcotif6aT3h9",
  "key31": "2V61wL9RGvsH9QGVdPLX8G2eoP9PgkZVLJMcygLAbahhb1EYx6y1bvL8338NV3SDpoPDib2S7bMqE3Tg6jBMgBda",
  "key32": "2DxYDyKsLZWS5HQTjqygHVAUfgDMezyb8fvP8erjpYSQ8Yj6wdXojfWaskxB1YrkiiRs6XurtfJjoRv9w61dXTGb",
  "key33": "24Ku8qG4yULSShWKYhxQcf4fzqt8dTxbi1UWbkGrJq7FV4hRz5cTqNVW9Uxht5FDU7s9CfmBRwLw6Cn2NwdynjNJ",
  "key34": "3mqwNjhTxQQGMzS62gHVqgQ2VNYSF9nSNJhzYNg3MeArieE6CjrRrNuXQemFRxAnBajeRgr3w5gFbrNKLFYfLxJr",
  "key35": "8xBpeHS97JkxjTak34kN5cdcab4fnzciETETAn8dnXhfwVWRDXEvQSCnbCinc2wcnSQBAdbCeERBQFEsEhSrnU4",
  "key36": "335zMTUrtc4YEiCS3GzXWt4De62s9jvwVUD1mS8CeXbRoKvAVfFEfRiWAwxZSFx8SyurtDNKBQQnsEm7zPVj2xaP",
  "key37": "3GuqznLduJ62PboUAX1bBAHGLWfqSbst6rX32x8LeqY9PQvi4zNAuhXnvZEcjm967oZJMnwQWJ73pJxmcygV5pif",
  "key38": "3DVSuJkJfmSH7ujsy8tr1w8n27qvpWuUt4db7sDcQt6nahsnWrfm4AeZdN7yXv4Qddd6ZcyLrYTU5C4toxAvT4jc",
  "key39": "3K6HitHfKfti3wzn71kDMwrFqQgUQ3hYQc2FRT1dd5M9YBsLk6q5wKD3ivjZe3YfQJeTQ4YKkRLAeAeFTV72Uxgb",
  "key40": "43sdHUMHnvwubFknfQ4uasHDep9XiojDRZde9kgpNZYqZPSiHZTWUcFbTekWL84FXcqRtBuTnv3Ndv84QtwHmvLS",
  "key41": "3RGqWk3XKe2gXpRdfPjujyP1Dp7iV5nKt1HUfSo1684x3oMTox3A81JHh1JHDNRiPzVcBtnguzbatcZSPxrUeb6",
  "key42": "5MqXDLwi1ghTZse7PhetLe5QnfdT2gUX1YjtvXySvtz5V9ibNWhuvfqfHzA35sMV1ooKu15qzWzgKBG3xD5V6wHH",
  "key43": "4zFtfL2ZXA1zQYLZUAREuuuotQWrcggrZFJDep1uZM3tx3WRuB5UU8i8acWssDK8pNzFE9aSDWipR4to1byZTUAM",
  "key44": "29ECW4nUVdAqFYp1GWgeCWe3HYV5LxpJx7HWrNonwrMU1nTjnUqFgnYwJo13EBUrBshWoU8kuPHnwGfXSdhviA63",
  "key45": "5SuQ5D1GpBbMF63r6MfH2crQYpyDu5Em1167gN3S5gWc7m5eb5fPMshJs23Wy2z1T572j5fBSDD67XGDP3dLqGDw",
  "key46": "5xL63gj7dGgRs15iCW98eqJ9oRSup61bN75K7ucCk1kUwWw8LzZpHaPtNkXJnMxXMa7t8aDDoUMUNMjSBZxQEMb3"
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
