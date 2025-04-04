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
    "4wvZrUabLKtAG25WZJ8deKnuUkfBDFBD8T2NNpfLVbZ8aHWZLMKcxR3FpEDjAbqwAkfsgnsG9GEEmAzQAzw1tgxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzCK5Td9JroAjbvsUGEzkoacMecZZLTTsPY7mNFoZ82v2LTUwiJazCSE1KrLVrc75fCHYSpNUMjvs2PzWBGZ9rr",
  "key1": "3437yT8wjFY6XaPs9aVwsuc5dA8BWo1q4cmr2Q5SVCrjqdJpzPEVz7tP32WhbyaXwsFs1NZDbsMyUaiAk2Bc9JjJ",
  "key2": "3fpDAvpF4reTGsEjxcULy6RYguvRXVYUX9yJcmMVt4vz6rBcFMXK6cfqtDs9hbNWAxDKQihLYuWpMWSpRHN5rEyP",
  "key3": "4TcqxX5Em9grjtZVHucsZX1usyWVidQAx8XnbrSNX8hkdLSrBHA3sWebpC3SfJWpc2emSaPh4CL3Zwu9xxG6vLWN",
  "key4": "2j3L38eLn2GozJtkPReHHPpSAaXs1AcV7eVv3DThdddTnN5pLZX4e5xrBjkwNyDzpYqkjdgAVgESvHBQvuuf5ztP",
  "key5": "5zjkmE8py7iDZeMuyUXnzLXhQCrjFYWsNmp1iff1cB3BLVpGut4NZfBmJZvt5RobqfyyuCQoq2hVigGV2SvqNtif",
  "key6": "3Uc9Y7EsRsf33TSz8MjjNkr7Gp8TR9o7T2UYRuEuWVfCTuV9sdp5aVMz4No7Tgs62eaqTM5XHk9SqzxVeDrvf2pa",
  "key7": "49vELjW5TsVkrU28Sa9j9ehmxW1PYMR8foEi8VeZu8RV5tPBKZk9hd32BhyBEkT98zG7kk3aK67s7KZyAhwjadGg",
  "key8": "3uqbJSskkzNtUm6JF2UF1yqPZtB8CP1PvJD1H4tKe4kvUtmnUc9pEwdX6HZ11SzyYqidaWzdcucfDHJ96H1NvGsQ",
  "key9": "4mx3oFfp87PmAqGyjTkmhS2461HzCLbPg3zvJXqFJYRN624kr7kpGTdK4MJ5ArDEYam2G78tbcYwQe7QCUzDKLqh",
  "key10": "b9gEdioD8NTofukELcHnC1omsq5WUJw2WhsrEnskHDNso6VEXwFaYu662iQZF5K35oTMUuaTLgJuewdUuzkYdgY",
  "key11": "3QKkEUCXq6YfVoJcdDh57EJLdWD4nAXDiFWada5qtkHV6LSbj66odSLy2pPmefqh9z9qFyNrdbDHZQN4t8GUKvt1",
  "key12": "51QBJ1zm9QbCrQBbRDB53n7VToA5kDbZ3Lyy8mBCBopnBy94bqdkh99urxKsWvZuPLAuxLiP9bvUVz2nz44bELAX",
  "key13": "4fcRPmzSMbi9dV4RxKyrzCg16khcgMvfXqVuYTq5NDFao68ubduanweF7merewscCd4qSUa7DXs3BDo7RyHqKA8z",
  "key14": "5X9SAV7BAuzh9kgJZBWRw6e3iatm1fRFRybQmywxW2eYAMUtYRRvWX87F6hkqbpapYtdbgDdNh7wBe8u96k13i82",
  "key15": "2J97FyfYz7WNBHa5boDbqngPBmaGAU5yqshcBHWaMhb2niw9jnhqbUEujRs85GsqHZxq2fKuNKMzeTFtwCMipqsa",
  "key16": "2RWK5GyrScAsZSSNECkVagPicUij5hzbr3cWcmBopVQytjsN2czH2wuQjuygY3iw5JuLDmdqDijb3pY6aGweGR6Q",
  "key17": "4LuW7MsXNhkqkcfr51csw9UogXYBYWW8XaNNYCbXwP2wbuDhvqCAAD9VhCBNxZMQrvtP2GBLKfCrdkCqn9TdZ293",
  "key18": "3Zjpp13qFnqurLvYEC8DKkdguobmiamz3dDZ553WNCfcboDLc4RgcetpGgf3aZA4p9rAHxGDTbZQeok3ceV7Rj6p",
  "key19": "66GSLw72qYdJb1CaWR9dSJTiunxcvv1cwNsYJrDRzdXdU4zTes2bUnsjjb2JoDN3fiUUoXmMj9AKoR7GoJHusq3n",
  "key20": "5r4nowkRiKJUxr6gKaaULfJH5MhNRMw1ENXcgcUZGjCN4yaHB1rQw9Q1x22SMZbjPqn3YuDx3Nn8tG7U3V4SGb2t",
  "key21": "3dc4usZqP6MrTJLexv447fPay7rTfXr1ce7hQuhUYzAKK9yjPm7jMCVPdnNsHcDXTUn7ySbX235zdY2PAYiQbMfx",
  "key22": "5oavkjj4vKKkRGVSTxkYrfjCU192P5PgbEvjNDyjpzf85qV2yj5zciMDudRErtNmJJqGSfMB5n3D3LceniBVfkPj",
  "key23": "2uQFTk6cp94hUyw5pXam5bqnp9FrpiSZ8aepTydKg6U6NRHFC6Ei9BWuwzEzBCuzDUjFHkb3FKJn2hYmfDtNm8Vy",
  "key24": "2JC34CswGaD7ePgAwecyg7iKyeaS1Eakz6Fs3A4boNf7ovziFNuGM2VnqKM3jSQ7dTvpjug8QGsHskUNoa34XUH8",
  "key25": "4Z4G5euzMHYuQbdUacGo4bLCkYyMrqzvW7wSKyLNamnFAQssBDG1xCTL7brxkYPoVNUbsy8gJEy3GXppeNJ5EhUX",
  "key26": "4debvv5NQwZ6dcuygk2XHoc5BiRcP7JmtyfTjbPV2zYaS5r8nVLaxfnZmYXqzTwF7sSjpDvy1JXuqFHoUXSAwgZ7",
  "key27": "3SoJMuxtkYCxNoG1y8ZWDyDWMAdp4E6uXMWwNJSzbu3SHBEKEzA2vdsV1gYt9byLKf4aTFmsh3oKPGxRRkWq2UQs",
  "key28": "yinKKiv9RXTkQQp5CkLDy1rNfBcSYccM1Gk247LGpAzGMzUac7rpwe3tjZXHeeu9ozqZff9BbR8dDkzkTwdajkN",
  "key29": "5G1ZBKHP9z1AhV7obwpMzqF2AX926NUwWz2WoGRCNqQJa6M36tewQUwDPVWCTnarazLXS1uYDqDwcHBmXgUWi9pJ",
  "key30": "weQCLs2XpYzRpuB89u4RjF7xPwgDKC5fFuBEkXhWBLUh1Z98FUmZRRQxu9N6XKHJnKypscL6Uo7bZM8tw8xAfNF",
  "key31": "4ewwb4FnogDXRJGmjX4MXY7C3QucTM4f7TX7yGNZnyACv6eoDaiiJzDw9Rfm48pMV24AsAfdbL4R1zbpfwA4DhQU",
  "key32": "4Uow3CBcJYddQCMjrXag6cZCCDmWz6qCPuWQaQtVy1PKp52yr9RUrEvHbzEV5oZdtRuZu926cwzrQ2hCCTgBuWhx",
  "key33": "Stx4cgYiC9XXiTJGdvGjKFFTtbMhMCSG6XqngMM2iPWiLKzv2VbHKyy2zTUp8fWxGct17Q5f88BmjjWabgb1HQs",
  "key34": "3c1BLsb65qdzhe5dB4UWik8kUerySafiNFfJ6pH5si5TeK2RjzFCZGRkkE2a5gbQWqy9JczWyQ63xXAiZJPkqz9W",
  "key35": "4BZUWWGeF72g2sqHyzcr3XJySbHrQURKCydsita9zBw6TFJURdvaeQjN3Gt6Gf4DbpUiuprRzPerKREkG3etkh57",
  "key36": "NpUU7FCHsLxWEkxDQ3kerdbWSwcH7K9jrwBdDyXSgUcttpXRZJgknDU4yPQehPi9TeHWZiV6ZXXLHUHZ9ESNyQU",
  "key37": "Uy2x4bXR8jowyZAF8uwteKemuqZfz7TagAHjHK7zpt9vz8jJTxycQGTNwcNkdScZqxvxvUUnTWNyipHPx9CHjbf",
  "key38": "YqwaxmoCs6SgUPwt6Bctmo4jHHvDCYFRWRqUkgw8Br9czHMtKx7n1qAVeDxk6xofA9sFNtDfQEr5rVJxM6HQk1J",
  "key39": "4fg8o5WKtSS427dFYQXKYJcg4Y7edvwXP6R8PMSQy7q8UWWbCoxgwp51r8HTNL47dSxXk8okbnLTE4ko6rVGsCHE"
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
