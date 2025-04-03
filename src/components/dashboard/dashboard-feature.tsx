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
    "2rJLDS1jVEoLwWWx28axyrFT9dtD3uC3NwYsbDhA5DRfcmGtsHep4TMjBtezcXNGqHRhSaaKzmyTqQgcBN4eLqR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wv8vpg3Vv333hH6yHT2fgFBtUCVQL75C3tbZJDGwogfscBcXn1pEh9JB9XvPrUeBY6M5qBWyL2TwAqErCu9b9mr",
  "key1": "66Ga7gMRT24kpNzBvHJ4uHKJiWUgoEpaDsuFmSFNpHacqgEFhBt3C5cUDNCoixN88abaF98CLrYJN3tD4Yft9q7t",
  "key2": "5tvG8JWTtpfvZ4NdrSPTRHdpDU1N35X42M7vmaTZwkYTuRpAk72S5vzhHMXKMTdeCuKf67LWrPRVBopbtBR1GxmU",
  "key3": "59nFWfm5gnhkmLe6bb4u325rUL4NnCvkCn7CEtpThdW8jq9M6bLVqa7RQmGeUwy1BND11UnvuSejdDaKq9THv1LP",
  "key4": "2wj5g8WvzhDjWzsJqyfmg9FjjCzXVdpJRiiJAz7eWLYgjczziTqqcBfaVNfcjnadnaqmScLpXE5McHBC89hRQy31",
  "key5": "2xW7drfpRhS4u4XnxR9vY1dMj1nPAEE77b77mQBKRU8edHLsPLbgj14VvviBZYCSqyJodmAekGtfjdRe47MdxHqt",
  "key6": "2twnQE9Lp4pvXsuMkMvNe2oYmsYjLsGxtdYdeUVzZReSDKt5kYiVYBfHkHnnhtHov3CLZLL9zMgTJB1zzJGtT4zr",
  "key7": "4MBeTJTVJcq14SELQX2JWTCkQvz1azw8vjiDEUeeaX5F29pp4gtHsbgfHyAgmVwUZxRZ4VhBcZy4iJEaqPFzd9Cm",
  "key8": "5eMWjuCa8gHmC2x4RJwRQMo2mAyVMsxPgt5BM8if9URJb4JsDkVCh8XhttYfhyYXgryJbuo2QiYoXHsGNP1gKoNN",
  "key9": "3xB1dYZiFHqR7GY3hAY9dWCCRF29sLTLM7VteWdkbU6mU3BotGTLi2GjDAaPJ3LTHniVKnVAtMmxNeNYzwv6Mm7h",
  "key10": "5v7otKfy59vS3WNSMFCvw1tVSVH3pw1wvCpeXpU2HPKvVfpX6ANA8D7a34BMquLr1yEruyBYtJn4DJ8woKN5M5uJ",
  "key11": "2V7242FSfK45aRcGy61Zk7LCD298oFMNMZkdNsVh4kPd1RM3GKJK4gLXFirY7aczD4DDPjau2AroSrkUVN6k7qLC",
  "key12": "aBfWjNWKwm5kpjRQJW9JJVHpq2zx9XEhLH8wuP7k6VgcMZKcKomzKGY9dY1Ekm3Kg6vP6YcY3g7UHp2fPc2nxJs",
  "key13": "3xQpSRByR9D7FDoiexfeW4d4m5xKTNLa2mgPNivtdpyZN5ousReheZAdLR4hqDrjut29HqoRg2UuHZJpXAGwfwoL",
  "key14": "4GJWvGKAVwhLcHL5J68pSUZVuwbRu8D4VJafEXTMqJ7wrePJEwAju8ZDDxwurwxk32fv7F25eW3FAfkG5egophnk",
  "key15": "3Xp9RGYdhvvtgwyjcW87wadMCZW1rc96mPfAo7eqZPv44NJ4jgd7jKHzEkyDkTFnmTaJuvu3LW7Dy6VZzfyU2sEe",
  "key16": "2bz4rcZAbqUDx1JDpodWnAVvDjpAaLKNnwg6wswGzTYRrDxKGL9FCvU5pNM7U7ez4W143BvGvnkuVb1UJsrz2qS3",
  "key17": "3wko4nNVnLKTic5NtjtVomz9AQMsGdEueJQiMw63rH7GMBmPTKFRUgUisx9EPM2XQpBu5damdpHvEcVrXERYMpyc",
  "key18": "4JpxEy6s7zf94aLmLTagYXweWQJr1jpuXALDicz3He1z6V5KLFhS9ymgXKzxPfVSPj1249Pwbq3xsLfsTTudVebT",
  "key19": "5cW4oCjjEihrHgAV9qXs4oyHYHt55hgFQnEDLWcynSrX5Jcy11LXQhR2BompLK6GkNekJ5yNtpjxYGf89bQ9kwhd",
  "key20": "5j8oEFTc9Mdw1Reb7ZSDEueZP9udMXggTHM3K899HUSpuqbc5iYyexX2dNadqhyX39WR4rc3PU3h8jwcobaKFfx8",
  "key21": "4KqKEpY6RYvAV7Kv8m9Gd8FnPQsSC7Kgq9EFRvDLM9wKcmdie1qZiUyFEvLcwbK4uLUtn6Mr6WLNraxhz5DGsCz4",
  "key22": "5G9k5f9nZbb89GwDia1tywwmEFRwsjZZPaVyiShydvkuBHnsikfPNmUwVKcEaVAmAwxZEzxxY2qJgB6zaqeDWyhe",
  "key23": "4QDkCpbHb2HWH6aJu2ANMumW2QAnSDAWAvQqQCKSk53e1LWDsWbBu4jD6eA3NUUBLgNmV5SRacrEgkC5vz5dM8Ck",
  "key24": "U9rrGXvv4KR5tLri7PHmZKB1T8BmJXBqTvv1BmZSXruzbfSdVyTjEiaiaEcesxdBeg3R6fo6oQ8B8SgUsycCPvz",
  "key25": "3K9uKKnepbMk61uuco9KLvPPkxXJpWKnMbuKhvNwuNzWh8tBnv4LsHtqnrekWEWZqn5zQSFdEENy7hP3X6ABFivv",
  "key26": "597BVs7B9Qfgitm42AXwx1W4F2fxsJswDjiDbfayak9TYW6mvaQvSajCUcbR6gCBeY2amPB37XA8q8hxTanYnLyn",
  "key27": "2xkRo5sHtJ9Doa81xEaLPxXeiwpZphBqSBaKCsG3FCnwpB46gBYLHx5GAXrngVorRRfgdEexpKduQ1AfP8evL1FG",
  "key28": "pGeH9aUUALoX2veHcUkHhdYEbLoubKv8tEtw82X3zzJvJTwqNaUaNLQk2d6zVBiFSrsSyLiM74tAoTd5oamZ3Ez",
  "key29": "5dgupyVhK9fhYHcJdiCqsirM2efMFUxHYb6jpPaYhmC6KxE83DxcKJAzehVYCHBj2Eu8KBsQU2musFJX7E6UsvLK",
  "key30": "4eiJ2U5GQURsgG9vVTaPnbYBmWhr5gFTTQ8TycHsxD9r5H3gN5TbHZ8JLqzyyLEuMjhfTkK5BEdm6jmK6aRhYLzE",
  "key31": "2mpCxTqUi3FEgxUzPqtPf25jG7pHi85VTXL5on6wEUee3w1WLojLuQGNaDnShkAFT6FkAhos326e8p5wj8fZ1VDJ",
  "key32": "5UqkCkcURw5i2XkEeF4oVY41CV1dZqE3B2Nt1ETkSRWsj7FwPY1T5vUwBZNAy6NzbLzoyE68XwN1hMBLK4h1UsfZ",
  "key33": "sX7HuJAwsnw1YKg7CwGbaeXTZyrVe1gG8rf1fnniTP4zWwo1S4Yvnd5E16mSBAcz9eDvp7MkF8UDDNiqWcQ8EUU",
  "key34": "3GKxmuePmexYzSRecwtbjF9qy2BRiuucSgVCEyazhrxxVmiNAV4UFeZ9C9UdLDTC7eW2Ca1mKG3KVFCcW6BTfNHp",
  "key35": "8W8Sy1mQrMjBgtNen9aMG8R9mj11TV86jyrySCxDGj5cK2HypSPJ6L5wvvtyoPHehnF5thKdVMyPdmmfCcyE5fp",
  "key36": "43DH9FbWdDjZRFtNa3nZ1nmz8TofCnT8nhy8jb1ymPxMd3okcTi8RWeLaWrmTfNFjL4C1Rh12v27H995fg67uxqB",
  "key37": "4rQaSk6oY1sc3H18bxK7fRHUnAwYu3fj2g2KsRRo31agvJM39X9im6AFKxRCxBS9wbPhPfL7saXdsYpSmuhEXcuT",
  "key38": "2s3s7fZGxdZTKuEKrcEPhkmrnB3zjmsjz1xgHQGDozQXpt2cwnJJSJ6XRsvdEgKiCtpxzQNPAqqqnu3Jv3rLKeWr",
  "key39": "fx6hPJ5heYsEqhvHyt5mpTd3n2QeFnXEiyqjEhGoiFUhVjmYfJY5WFzgV8PgGzBVUbw892CfrohngmLN8eQivju"
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
