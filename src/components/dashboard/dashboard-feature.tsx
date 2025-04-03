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
    "2Tm9WaH8kKSJgAKbv6z6WYAd3b6ys9ZjDHXZAw9DrVgFEhCNH4HPUZ8aeagYXWFMLmeVwnkrVXriuCFKkcX8D4u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wfoTFPduT1ctDLLZHbMHZreXMNsmzk1uTrFNemjo93PYSXowTDcsovPa2KjwAaBWMoqmcuvbPHGZfPHhL6TBgrg",
  "key1": "5zTkmf1szxnBP8S5wfN3Ekuv7Z72JEENi78mnY4QJaGMVyUufnPi7NavKQCo814i75nCoRzaXQpH8WSEGHYukUiB",
  "key2": "3LKxwHyJDz9KYQtBpR8oeDKTVWVL6XZbdoqa6UvCFkHAvcbpuNMEVQ58ysNWzBp9VzBmJn2UbAB8pZBRxUL26Ar1",
  "key3": "3YWKAH8gAkLC7f3JSoHypPKvysMw9ryjVnZd3BcEhPR7aFVBpKrgZfDoPZhALE9KuRWhwYEg56BeX31HD8or2ar6",
  "key4": "4vyvTAwbu2kQ9EUVg3j1Jn96C7f3Z3G43AZQFSqpDzraRv2h4GZKNwEj3tJXaaHZNMki1c6vEP6xdSyS5heGFt9J",
  "key5": "23cTwxTeXjVVNxfRfLUiB7qQuTf5ieiGCGkx6BfNn6aBSLp478xtQVPVxKm7e4ZZ9hM6E9V7Y8s3CgPNp2VrS8f8",
  "key6": "41pSdes8AQYTjk2WcRWdL2haehAyDD2BLuMxANCcRFZGSEE5CBbfKkwBAuYhdPCt24KQmx6tVVBkYsK9wAmuSezR",
  "key7": "57dmm35sGD3nF8ta3tsZQBw1yE8n77FFT6pVusJy44DtqQT9vVVJQzRWyKxvC7sUBNhGGvbojtN4DNxekYSi4fmx",
  "key8": "38AJYSZatoLoa8YMEHLk2q9biDJxm5kdY5ijpDwzqewJoqKzudQM2FFCYjdhC1HkGysPd8e1sdgTEoUrZnoaRrLG",
  "key9": "48gmUByL14Le65EdRCyjyKN3R3hUgdLcCreLgTkL24RrLKTECxUyhnGkF77RLzKezyJhRzU5tPza9sRYgbS5gprp",
  "key10": "3fWm8opUj92ftBoFQJ13MJg27CSMMDpKFsT6AaiRwCoSF8L1Gd9Hdrw9JxrJJydiRTrzVMyjxEWvRd9abKf6LLDa",
  "key11": "3HoDMBMKwcz3tnLgJ2sxz7w8TJ5zXfp2rLxGNPDYZEcpcqjT49gALM1tgb47Z2ksYbbyTnQ9dphR6zodSPg2wyXn",
  "key12": "2NuN33gK23JNygwRuZcx4A5sqUvJbwhfiaX1dm5DoHGsdf9zFy7TsD1LZKA51GPR86bq5BNqLD7Bqb6MsqsNtVE",
  "key13": "2uX4hUHoDyvWdz24VPfEi5beGQ8z9xxWDMJNZsU5h8e8BuTtTLUioS6DXecu3iVrDEtjvxj5Qfw2XY13XSXmSGWR",
  "key14": "31EyqVMdKmVVEsg1rXoMhsuvoFeF3yYWtF6mLe95vaLGShoaQu4r2MVcGuoWsWa7q2GomeEeLtwRvNSdCLxf8r55",
  "key15": "65kio92GmbZfMRGk7oZxKewHqfEGseHUz44Wk1scDmfwQ2tU7pprM3T2ogUxzitbcgJcF9P5h919YHVDEGpYH3ZE",
  "key16": "5aPC5BrK6cc6xK3G8p5nYTw4ZJwYxBJgMJFQAG6cGT5yJqYU1grUPP3ts1y2uLzEs5mAVRGrXW6qy4f134Nduv3V",
  "key17": "3kdFGp7tb41M3jdVQmE6V6HwZ7tgrSMd3ye7PpY3NWBu2rYa3tjpnZDceULL3rFDsuVzzhvfKbLAdyXGCuz9eDt1",
  "key18": "32uET5zBnfs4QbfrxDBjkheZLrmCy4W2pU4Bt4FSg7X56FEfqVwQ47aJ1y5Gyp8TKB1Q5T7ruhPbUSXGWKFgCxqH",
  "key19": "2DjUYa9yYVwVEJjGANEYf8Cz48Hq6o4AhvxK1uftCvg9w3J3jAtc7Xu4vPdhN4jZsBk3viXzhmqPykitt9WVjTdc",
  "key20": "2pPUSiqo9vMzZqT7GCi468dH1n7732W7ztoMH9bK2Cnj6ze5mYESRQWxkgXMRpvP2bixi3LGhGgxme4WXWHWGHen",
  "key21": "3Ff77USLr9QYoLe8Bvy3398vbHLEKwhXHU6Vbka5to6Z12FSAGdBuHYiJ4zVZK3SSx7Lp1tp8FKnUpAmzUakZUXD",
  "key22": "NJqt1BGHB7BBP2aZQ9NFVPNee7S1ULDieF1RzDgF9z7oyB7ofQGtUTZFouUC2kQRRZZ4cZWbcoa4VoQXzhdquLz",
  "key23": "2tptadgH7gD3YKMm3Q8ebtV1qG1x5RrwibfapC9eev8iRRSyB3o3tgQSJRw4JnU8eVCQcav8NEeaV7DxYhCrJJHo",
  "key24": "4decfEJsPzdLZkqzNGN6amj6pnWRtpX5RRQfGMdEXStfzTnL7QczHPExgYLfGs8g9LRGoF2oZiMn6Fj2aet2Pj92",
  "key25": "4EoTvR95YxVgyKibXNWQzFDxrqb9G3VLdikLHrRRuZfF4DUZGwtxq9HGAP656vx28UtspY1jiRCTLXyEsT8wRoQB",
  "key26": "2KZmdXNQDEPJJXT9vPMMhyHAeTusKxgGCogfUW7UyXFV68m4VnUt5SWsYTQuZXm9muw6wqGW3yUnYHNWfh5x9QGb",
  "key27": "5vKpVTbfpbX5NNnLv6WAL81eZTf1F1RSYEVrmFWi21mghZbMqruRTB55jq74ZchA8JuPLUNdpVzyNYE1c2gcepRE",
  "key28": "12nBCLJQbo49eY9KR6YmsT3EGqbNLXCdiSQWLc4yfBPs9nvMwYTYhd8qUuews8H1DNKCmB5DWWWJEqmc1XQRuHU",
  "key29": "5gXRebvFpfjfkgBoEPX5ALA48jXTevd45a3RythPQcJs5egDfLKWFLeGmkJ2Tsq9Qr8FLv3QhYvaDSHM9m8e9pKY",
  "key30": "2HAzALuYajZRMJKBqSGPzK2ghLhLooYUJSLzwn6bLUcYjMpneHEcvk7FtRNM7E9qtXJY8f2rXpTvPnhe3AxrJayt",
  "key31": "2STFBecm9RLpg8aDoFsU12PvarcnoyLRVR9rHtwYkPEvXhY2aDZE9Z89F1aRxjHoxF4B7AkC8ckNFgFLbRTT6Mc6",
  "key32": "FWrsiCBEMgLBr5w6yBTN9oEMboH7MdVUANWfwCUhaagmv4rPMAS9uJWQEU546wEbg1Kwk2MPCXVYv4B4vTbjNWz",
  "key33": "4MqePfafLBktSxonzLdQm4vcGcnPLBMBzsq7Dy9ivywHvaWcZWVDPJBqCuv64tMxZzy1dBYXu4c1SMW6nXDf9myu",
  "key34": "22gDvjSTXDxXvd3ynXGqBd4HzugFULpGFtFFuEYqr6XHUZeCkUM8ezy5Di4bLm3U4WymWMQZdqfAZCc2Lw7EksBG",
  "key35": "3CH7W62ZjpoGXEB1bi2nZNSDsnY7iWkmTeiZFYdWSKwNLE4asQYe4bEb4AzQTsBWrMJ9W243a1Kn2Rs69eGgRubj",
  "key36": "4VFptT8y5pQdQKyn3Zjs5u67kHt27mJ638kUC9y4vTap9Rg3pcqL3bkZHp7CesrmZXkPurzeSukTSt6u5t1L9FjK",
  "key37": "5okmdbZBf6VoYurDfP1XKXnJTYQ4wcPsYxJHpcr8VRza4fp1MPKkcPMcryDDM1h5PMJ4bsZ5v4ECUBNJ6jruztRF",
  "key38": "51ViAfq1kBsRD4LfR4zFVc5mf8hvxtnLiMb44Gv8yzeqDCjNMqMeaDq9pGLWxuD7UzrGivsvTWeYUGxxqEVQTkvu",
  "key39": "33GovySFym8YH8two4p9fpK5ndA77NagMiPxnpqXN5Er3EHpWXcPuD5UqmEDrdLQusMuHCHrtB3JYxepZ7aqLjrz",
  "key40": "4TSHtc4BMFqcuf8ZhFgaJsreCe1N8CpfYn37gZDWgUmMD6994EynborBhw1PUnMG5Q1vwuR5e2AaZ8o71xWGqNaF",
  "key41": "2sfJw1ofdreLNSPeRhaATP3Vspr5975AgqjZfCvAhjsrA2goUx8WgbSe4C5N45J8knk8XVPMe3WQoSe755DQjSv5",
  "key42": "7q25DsBU7CqenVTakGPu3RrSLrRycJhbPB13z5CeY127fRdhgTQXLbWd1cwDnKAjADytFQs6gNttoiZc8374amS",
  "key43": "3bHMK6bQ8o7LuQVowtLDNGK7azpEgGPPdSBwmarWK671YwGyBUzsh9Nud6CVwSwHaAYT9FbHvs2Std9daN6uMyew",
  "key44": "3XnYmYPdYSu9eNPQXLVFiuCiJYa4pgniRY4euHTXtZhZrT1PcmNYHmhE5P8uTSerY39yEHaN91J7LQYux8RvUuci",
  "key45": "5DnJhjyqTZSjoXFSNLqyTL9Q1ue663fqc5au1vJEnh9qvKstF7zouTyoxDrjia4Bk6T1nCeaL7DERibQKtXoCa1C",
  "key46": "cAPm7c7rW715Krnz9ymapD7aXd8ZWvSGjkJH53ETrSNvFbfp6vkb7uo62MicmMZc51E2agxNXaaaVAPJYpwuqh4"
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
