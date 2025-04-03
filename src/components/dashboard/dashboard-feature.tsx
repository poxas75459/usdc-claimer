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
    "2EXPH6J47jUjnriBEqh8upszRGBy4ZBv3vrfCgw74vNyTx4WZxvUQYgCDBkfiYtQTJtdnZ9c3J2Y5opErv9mK65u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39A3XFLp82qtdVtAh7sqog7W6GjWiqrQk2s1Exc8GAG4djTWD6kQ4J4uknYoXyPYR6DUiuYBqpttrRQRqt26dGYD",
  "key1": "2w5rc8wTUNFN9Bg2Ptxxh3bJ3jTB7UfkgcSki64TWDkN89PyeGa9yJ8fRhJ55yqVTY798xNaNx8SqNakdAxxzeCM",
  "key2": "c5iH5mfeF4yxRDaWym732jkdM2eLXyC6nGo7TBihP9BPWEk821vB2LrACiQsz8mf29B5acUoJ3Y8ABHVDneFF64",
  "key3": "48sDf66kRTWg9jGz6F7d9VqLFYTwbRXBn9KdxozBX2Zo5xuHEW1mkB2pvyPDHP1imbdvdAqMTLHVHgADcpbDUZMV",
  "key4": "5ZAwpZLDjW77pLa9TeDWGoixnBS4Gb1kqHzYjREAJG36FPqKcTRDntxXTqSwHh3Mc9AK8E76qkRKpjQiSSxoWjNQ",
  "key5": "5BmRopWcKoyc9RQgJ41gJH5zB1o8LUMKCJHaUUAbNGnRf28TM2R7VvtMJH4AxJFb3uLEb2QwdXaNFMfCf6SbYG7o",
  "key6": "FN7wMueH4uQjUBGNTNU7QVBX5NowPdELXmrfAZ9LerWpWh7LQsChSEcZsqgR1M4R8MMHyftsQ5cawswS9xsFVY4",
  "key7": "2k4k5Ef41gdqU82mUf3jzygbg31YqVygF9c6wgSRjA31eTtC96Yj1AF4aSATW9H5hnvqdPBHvgoB18YtAARCrPEX",
  "key8": "cozXavrrddYMH3CAXTZeQMRugrYMbDE7fVtvPJRHVbn8ZrNUjAzPLpkEey1h5mQqd6DV9uTR2KnLMuKStLAh667",
  "key9": "3yVTAqhsCtN8GS4uu8wZY1An2XhuoYuaDQefsmVkFZFHy18JJX2hforveJtB7HFXY4oJjK6Z5ExSyLfXFHBeBPY9",
  "key10": "3SYZKBbbf7Mpf8xvpV4bQbpiLE4eUthj9MMtTR5xakxsyRuba6ZukGFmveh6YCv4adQhc3vd1fh8sjy9F1vvgs1C",
  "key11": "LGnqgEhnJfz5Vf5WruJmUoin19f1ZzMBGrUJcxjMc9Txdjr4b1gGBmUut82SfoF717EeWWKZZ9AEY4MWM1nzJcc",
  "key12": "2daWduFonPey5DYdcyR92J7qCMyJCeq2amuF25KwwFfsK8oV1jj2mrP441kj22c4DHhcg3ChMaUTL8yh9MzBJGEe",
  "key13": "2EvE9pWRLApiGVkxebTW3hUS1nW5dnNMC3A53PbwjeZXWR3DKYBTj8KW6FrmH5DCQ39JRsvyEh78LTaCS8TWdyer",
  "key14": "2DGtCKcM6n7eRAU4ncDNTL9hQKGFPVjXoXuVpSz11DJMLejR4mciQd85w4s4MsxLNryt4FWpMgc4maYxWHa957gF",
  "key15": "Q1SJsvg4vF1L1d3GmiPE8MZqf1qFZoXPcfbUWczu5bLk3QneXWW4JUBNKReKLVgwCoEi7nmFTQgK342PDQHPRj8",
  "key16": "Zy51ZHViLEARpbABLUuRkFkJbm2Lckn3KZwau99pW1qH1uzmYnH5Wc6jYGgy3btWhYZcKaW3haTcFsfUdf7fM92",
  "key17": "5BA2tvyaLmHLWoE3kL68dTPrb9THrmGYeR3fAfz1VShNJUjEFw7kBDpDRCHseMYoy9X9DNsfSb5k9cDHWPJE49AC",
  "key18": "2ZcCgXqNyRD21j9P7xZwNw6BdB1ffDkM1ULMQbJB7iBBvMaRXrFa5L8C5HKYANjKRMGzKT7XkUhNng646dKJoiDT",
  "key19": "3vRr8JWW9f9jUZr8DPvktZFwLddkuKQDKYbuTUEyBuVYmUiWMU2zakbSkCqNq3jJ4ZJijfg2dcHkv2MgBHMqqUSm",
  "key20": "5ZbVo453PbTrwzGqhHuymjoMa8QYPJYxGfPCmsgnxxh6XsetU3FM9sJU3T79yJvHP89oUfsni226VzRtUJdBL1ZG",
  "key21": "5BevCrdxfiXh4aF4SJQGYqY78ijK7xX1BobHP5iZtcobJhpt17UHu9nGogYVyoKDschL9nFjN2rQcfHbgRRu9FUV",
  "key22": "4vG9YGvuZj9hmGyVm8Nr12e8sAm8c2jsA6AWvgkAB1ByrsysqA7e3TpoTTTkn9dJA1gjHznpTDHarJXqd677U2u8",
  "key23": "2sej8cKi58vyh8gZS59rWwVHMhTQ7FkYmGTfmnPVvTkrysp3KsCuZtHcHe3qLEATvViVPYVSFjHd3y2u54Y478K4",
  "key24": "3GpYd8G8sES7Rq8qVf665nDykonZcGYmJRdy2wjjFobv9ZMJJrUeMYs6Q8S5pSiRHbL5gPStQyHg5tHXW6u1ZDQa",
  "key25": "37c81g2ZcnW6JG1MNPYDwkYRHxp1NEa9HGkkgtQKCJaef3V1kgcUyeKhZKTaPo1d7EzZoZbmYyAQLxj8hXmSg8mX",
  "key26": "UmCspwABBMYrPWAq8R3AiAeSLpmj1vg4xorBdUvcwKFFeBe9aNw5eFCWUeSfQ8WAN45H7drfwTe6ivU8hJ2g4ZN",
  "key27": "cGndDxk2CgfANqUZfLKqfPhWULVQ6EFn6S1zdacT9xtq1HRGaegjbmf9AHsh1wVy6m8AYd8BWsnyE9DVzj4zru2",
  "key28": "4RyGrLA5bZrxLTveeJFcXzUvE3cCFoDUPUPvcVWZoJ1pPUKsuosv1fjypuNA5xNfVKGNAje6VuoXK7p7Up3qLSNw",
  "key29": "46DtF1do1y4zpfgsrNY7nTgBoPXAjxY7VyWDPoVYYpSmp8r8iTgGp6gZ29kGHYCuJZvssHFz5MZUVhKtAkvoWt68",
  "key30": "3fawBEagNHdwXiebLkSqjxv9i4sXywYiTp8PksGbQt77JbyWtV3UgjXaH65ChbZVUsgrHg1M6NnXehPYRKosiDFt",
  "key31": "6rc9HEghEz6s271Dw3FGuuVPS3NBUY9DZCvT9pkq29UpaPNY3rk2SCv1ZAGMhWwS2bt944FEgMyRvAC9xuapHiR",
  "key32": "42DGjfFSCrtT5eLVTc3rdk56z1qM3yL7tBqAKnjLLzkDXrshW8pu4P7dRcNYkH4DXyLESSD1J46fZ9QLsVnjksuY",
  "key33": "3414H1RXxYCxULiSDMS8PpcTi8qZZzRuETieQvLnXNZ9C9H2NzvUTwBJu2rZG5CXs4TsvQzFXr65VRPSNMeTdMdy",
  "key34": "4XiZuUWiZCw9amvivYyjtpUcAQFC3ErDdrKjM1973Tt9nFJcaHzQZ5vgebVGbTFfxnubDkX8xVULPv5aofABfuyC",
  "key35": "2Zn64STmXKev48t9GFNLAFu2fX3eBJoBcUqh6Zbrogq8bjqfPZWEgQd7LAo45fV7yjY51bVcPbdZh9UFAQT8WGpE",
  "key36": "2gpp4M53oZb8k3eF8cwg3F7FTUfEZF5gwjqMr6BJ6apq2xkkbEgSnsC1XFQziPvonrYg5XSiMpCgyFMJ9FHxcJ6c",
  "key37": "KbVeQpDeQszyVmkYjpoN7qTzrAZzx8dwU9ognTPiPFq9mihJR9uYD4Siotnzh9ptQecwDhzwhG7v5iCv3bCQPKN",
  "key38": "57QrFPSMBvQPty7mWsVPxNZJ5YQLjUuDfJACKM7GaJHAVZvFj9vxXiC4vY37jXoYEj9C3gjhk6GbvRYck16eWd6F",
  "key39": "YQMom3FBFE5eTVnnhRd3YBg7HEPaTPdTZJwkM1NQ1q3asB5B76qrzMQjr1WvCiDCEzFJryhEEgCWhD8L8xWSgH7",
  "key40": "2VhjqBzVcS7UNZXMf8qYoppHvjRW65kfcuLHPDP9vj9bLyv87UR3kcJgQmHBPV9agMiR6iHcfMmBYQdF6nQN7u3T",
  "key41": "4JyEL19vhZreqrw5XdZdkskw2Qwk98kYoVfAWWLdqJvWswFg1rSz9wsyFVeAkPosFNVKJ2xEuoTD2sZ9YJ5WRdz6",
  "key42": "3p26iaYHVaSGPP5SGz6NudRsCQY4LEnB31pseSKVHsgk5nMWkg4QJjpvhMEdxjy7hbpr3h17JSBaBsQuEvaSPy3A",
  "key43": "2hhNZzQVEEL6hb9qnCHk4EU3aYeQgXeVLW3NroXLjntw6GJRLpJsKadY5KyRvqs8aNECm3VYqoAYokpMc7mJVmPi",
  "key44": "XSNNcpt4dXfis8k69MiuH7yw59aFBvhFrXNbTdZcx83X23skPGhtpcxP4K54ekwU9MDxPwqrfoa9j8NQJxDdBsA",
  "key45": "CgzEzA7Yazeyhi9YJ3H4JRNnhM6ttTxCyoYtcATjzmsJHUrQ3nhUiNSGZbwmqh8ZePj3gCozWWBrEYNBEdyurmC",
  "key46": "28psL4ZVJVvUir1QYBvLqcfsZGZjKWrorkFXosYXVQUf3mGBqLMEM9cwTf2F6TVsJwBELQtkEK9M2Hmmp4boaWJZ",
  "key47": "365AfV3459jafS17HbfT6GbgH8ty7FypHqAU1wQW6KfgYwHipVTbhD81BtvaBuzBM2RSbR7RMj8RUwe1PQZBmtQF",
  "key48": "r2Aa2qsTrRwEqQA6TpUKHeWciacPVWHvZFnT5PtaMQ3fTD4UW2zfBUKgoPudXNkfVv1g41SDf2r5dTVGKsJE3iu"
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
