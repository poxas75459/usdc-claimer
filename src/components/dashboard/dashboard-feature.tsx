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
    "3Stw5CmHkXgtvXtH5yY5TvM5MtP8gWHmQY5PhS4wL4WUTyCpDkrh8onR22eBtwApR1xxn77EAC4RTyyDQFhkRZWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58JXm96HvSeLfp62k1QjMQAERrckCPGWf1NKPHqfj3xwfSTUFrgsQWqDPkW9zY4ujZ9f2RhcrVfMxhiaHYSwoZzg",
  "key1": "4wEtxvbJmTTbyuYwu8p6G8e82XaZzszNWB9ycP6D3BhSpo62JubfA3vFsoP9xZEjd1RTcbVxRoKQRUrgK2jhTnce",
  "key2": "Jouapih1pUUgVnyzzYX8vorYv2TEZVybxGDMHtwGhMegiXGLTsx5Fri6zqxose2hmyWDJKj5gTeQTYiTkqSqe9H",
  "key3": "56rqguJ7Zbv4XqhovkYr9aUdxkjVut6hh8ySSZRhepNuQod8cEfiw8r1v2mmof8rB6je6RYR58MR1FYgs78x1uWo",
  "key4": "TjjGKEWXDCw77AyMQKJZxA9Fov6uLMXcE3VR4vwuiaseaupqKpRTWS8n3BgWEQtyyvJ84NSDam8BHBDnnHLbb3M",
  "key5": "3pHpPdVaRuSqbsq6PZfT6fwwJ2UZVmZfxSCs4d7fFtTBDDXEUyepqcCX37nvkM2tqybG85qoUB9f5XoVpiqNg419",
  "key6": "3s8YBDChNHywYfKT4vmtSX5Gj8xa1Hf8yRZWen96rmDwCCQ9skZFb8rTPu1KaJ3EQ1eREnbMnnhipF3jBWJ7JsSQ",
  "key7": "2N5ETgPpwzsp8YiUPfnrQMdzHtBWVqFSzSF4d3n6B959Rr888UQSyqicWtaGsMAbPcPXaZ2aYaovtUsGxiwA725E",
  "key8": "2PUqDjKLUvtThGqb71GiRKUTS6qPP38QA7JZN5tTDaKaA8BHAM9NbmnCEanvCfefPMhsWiKFHU3hE4o2eZgYqr1S",
  "key9": "9ankc5pjHef2rEF2C2MWg4FWcbjfQJavUZPJcDXYgEx3g8nwom7XtEFiMjfVjtqgjFnViME5NwE74cmGULFfLjg",
  "key10": "4g69YtrmYG71qZKwqCemuFeFsMUaST79bQe4eEwCcCBcZgJDcXnKwFFgjU8v8dAs2c3ixUP7GnhdnMVmhu7st8gx",
  "key11": "4UY8hVuFwY2ofgYWA21ZjGhEz5sZ2kmmYX8y6KXpH26noJKVHE4UBdNPCG7METuoPqXUfmxWgXVH2Yj2ptwdbftt",
  "key12": "UPDCLEFib85KYea4kD2rhEyPGotyiTw6kimExXNzFZqgJRc2Ky8oKv4khHSaDUffHguRP3ouBF88nsYigJmRp9y",
  "key13": "4dXgqKNRw6afUoD59aTfGKe8zKuxyZm1qi3122a184W3VXE24NivPoHhXC2CvyfBkpxT1g4Y1bgCk9MWidigRfLb",
  "key14": "4mGtebGiiWBSARMvdCuNrEUVwnvNcNZX3TMcKGYHEypsmCW7KCQ7pVPUpzPZzD5VNcBVGSDtJCuh2S3aZbxbE8yH",
  "key15": "2BNwNc2nMuLdx3HXXsjUT3p5zBYyV79cZi64ohzM7cKvQ9GceeLzJC4PDXrczfjGjiCKVCJ6VgdBiK5AGsjS9CPJ",
  "key16": "2eZ4xg38CMLuanjbWAcV91aH8xttVRthP4tzaCcogqZpFhs1HaSfGsvmaKUyQNy2thuCuCvu5MXisBFmn7WCXbeu",
  "key17": "LriQmiHLECqvvXhtLNVYPnh6LVXiYKXCYAZW8wZLa3DJznDZHFLo7YYYHcxFZsmdzRPCbe9NtBMz5QvQc9sp24c",
  "key18": "2jS3g9j2YFaW7JbH49PzypvCwxn6mQMs1oChR8jjrAbTwx7eVXyWxcvXkXZcGGLWMscNMEMT6BFRqChWE2wDBjws",
  "key19": "3m8BWWCXR2C7tGJ6284TsMcSa567juFPKzGT5SoNBCjaCZrQ8KFiL4GVwo8kDdk5eQeQgLSg8Hspib5knxDopAYm",
  "key20": "2C3Zqe2JATZFEsPj9MEwDtq3jxcsFfXKC9UjFKYPrVfPRTiSCzxhUaYbS5nrGTibxjqNq4z1aUf35BVVZkQpyHnd",
  "key21": "yTRCxynxyQQnMX9KHVCVEJG71Um3c57Kr1C7NufhhHwj8a8wA6zSyt5urPy8UamkBUEQpLbEex4LdNSKKvBRBt5",
  "key22": "5fM3j59gsRdorv2nZZPyJvqCtN6yFpRZMpYTrvW6qYuGaxs62TomzvZTQH1hfsB4Msf1ztq1ChuqFXknsUZKSmeU",
  "key23": "dv6Uk1AMEL87fwaSDZBjcimiAg7uSsHnuQ7HKVRa6pmppFN6FWeNd6pycAS4TyAipksDnPEVP4cHDxkBGb8ShwP",
  "key24": "541dRGfLqCXkKLnWij2MDBgmcafb67c2MtsS7CNc6jdoCyNsknbcks1YUduEtE8nXqNjPgXtUArujvCjMJc5ScVc",
  "key25": "TspvZkfQZmnuyE98xdpYTFCFm9XG9zkRHkeaEbrCMeADBhFeSse3TES5XB8tTPU2kBG1S1z225TeJWkuqngCTYG",
  "key26": "3RbxtDEYtdiqnKNyeaoyMcssjGjZGY2szY1eCpeowxy4uyLyARCWG3uYcc8zpbpWMENXU7Ap21c6zVjarrwH8zXi",
  "key27": "3a1X4iuzyKjkwcAxjKSBEDwHCutxvjPY5pWokgwe66yKHRMUqMr8KbY3fGfRWT3hwTWN6H6zaHrbTZDqFe9mY685",
  "key28": "5kdevNszNXE9RwLRLLnCJUq8hF45y7hsPoLf9ANyT2UL5WAZn6GFAK8YuZ1eFruLTa9puJe2ZJcMPnynYGYwoamy",
  "key29": "67VVTLtX7xGt44rj1e9i8SMhLGc12vxBz6KicuBvFdUuDpiN7Nt41QPvgdcoxpssEyPduZeoSVH86bp9n8uijxqX",
  "key30": "5CuFcBqy5Kyvz6mFGna15L4H6AETN8LJfoxqX7j88nD3WVEWBr94akV1A7Rta516xBDi1N8eMFEzYMoMnTAjLrMQ",
  "key31": "4aT4PPEMXFvTkuUmC1HAERQ67X7BPJtzfaVJXhWTcaF4Sq149fH8s8fFKJS9VJkoTVWYTqwZHasACdS68MtiDG4v",
  "key32": "36s5x5xBmeFHnk71e1XXHUEgoZNJbpdcBEX5cXKJCiJhWKeGwaJq5vB6fkji4BKxkqKxyVeK7CZ6r9bNbsAs44TA",
  "key33": "2FCd7sLnu3DL72q2QeB5a2Uf4JWDoogpTju2bzRkmA24RKsKkW6RH454b9aZUDq46XjnSHhhVt4ovryAtedweF38",
  "key34": "3Vv5Wd53LQ6AGYpUTCMXguCZkjs68vyYmpKRZhAWwgKVL6N9oYc6CUAqFYBg1cst9LgBYaHq77YiF76TmMVbktAC",
  "key35": "3G424t9MzqLr6Vg4FCWGXSxKFY2zMcZCgQr8jEEMVQqJwkJ2aoZMXZtv7tSsVAzNmMjrmFhFQiyWAW5tda2U82h9",
  "key36": "42njyk6d7z4AZQTQ7gr2sJP4bcFTUN3RU8hnZXQeke26pPXkymhGZYp8T48Wn2sVewn2uhK2jRDaq5ryDH4Xo9UA",
  "key37": "62HgZnBhiiUzam5s2Ea7NBcPN6D8eyA9u3MUY3dDx5q4Mi4Bomump7oY31evJk57xrip3QQakeJk5eYaMYcgrZ2C",
  "key38": "3NMrX2akjE5LhjYymFtMJrhhtuYkxYqavyBgfVpzHPrHJgnECzWMpFGjjWMetwqLbzNbZoAkfSRaJUGnECHdfPYy",
  "key39": "4PAkLeT9qkAm5hJWJQf9ciBieKbuJeugwJW8n3YmDGsVr1XSNirDxvRSYn7chpBKp4zurK1C5fwathwt9sabtt8j",
  "key40": "3KDa7H1qjqVFFwkqPQKjqhH6T68WeTHM1CPUAy35CLHUVVYvrmcMcHC1UixyqLb8yTELPDvjzU9HRbS8LkSvegpn",
  "key41": "5AjgdpPq23ARnFh95JCwEASZ9ggjotxfkwqo5WFxMWEa9ZezRaaPgaLWGLwcUu3rQSt5ZGH1iQZ5i2EkGx8714Qy",
  "key42": "5yw4j42vrhGc1r5uCP6yab9oJx8SAFhRCTEVo9gNYBsLJ5UeGJMw5kpP15NoZRqMMu2oRpg4c651JEozGS6v3pz",
  "key43": "2mE5Q2eopBwvMGnaKHMZvQus19kBk1EUh5KLA482AtZT5d3eSfqbWY1oWX343UaBudpE3FDGTcHohnmvm8XkcYFd",
  "key44": "2u7qTzoTELcsdjVg8qho7t4KQ5yq8Y1HV8CDvrkcUyKgHs7G5N37PQ9rA6J3k2de61659dpwj6uNJNrEeMWBG6VR",
  "key45": "2iGP1cJcBqy5qv6g7Fon3q1fsqqCHQtjsAMCwn9Y2wLW71sVdT93wx2jRiueZarebwkQcSNUBXcp2B8yWmVKPTCH",
  "key46": "bsSXA96HRPAg5fourebz6jNq9yBCDnNnU6vgEXzymQfNFBFG2trQGS49Xm3QBBEoyufB31kABKgKCm8onkhygGA",
  "key47": "2wF7mWKk486uqTkTAcegZ2XMco9kabTssLzH6d2BnJUtBMUvaPNtHQ73ddW5b9sihsicqkd4KhGj9c2ynUS7Sepc"
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
