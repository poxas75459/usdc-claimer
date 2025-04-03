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
    "xgh9uQNAFUGAmaBKcVVSuCcx6w1GAwmBdtccqMpywp9tcKrWcMw6buQFMWgzbVPnaUZp7BrkrJVeiTqUr8Lm6aE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwbsoiK4BQK2bJd5ZCiBBDm6z82YFeEk6uDjChrqkvh66ZacykizvF8Vp8Tx8UhR51bGtrnfHfoAeTBme86bNuQ",
  "key1": "3nHtjj6N3se1CZbh3HamPkmzLZfqAd54Fo2pP9jmf8KfcodmQFz8hinGKZPTHUWwarsopcwM1jCojo2xcwAdvsgf",
  "key2": "3TbLK24eRDwKVoSzg2Vnq3z72hfh5UTsk26C6UUxVDBwPiJdBPaVczCH9pu8KLzubcaroRvMyjnYcnyQcezhL2Xb",
  "key3": "5QnavKFCXjJXzvBS14rPapAMHGvMviVh5Ume7CtVA4N2FKGvLNrq8WDxNGt4D1AWK3N68gzwhAch7uJiiVWvvp8Q",
  "key4": "5GaaaH42z2xYpjMiNQtQhFL4KYUtF9n5m62okYHvPka4nYyqyksWMyThvh9ETyFFBYrs8pFior9EDBb3VVf1Unxj",
  "key5": "38EuJBwMpuscq1ih2kdBuPR5qanj3vv5dHgoAv9CySMz1H3NNYGQavMUhqZQTdUoD9wzmFX7DVrprczcTk7GcDmX",
  "key6": "m1N9NgwiT5gcTrb17AaZ4DtiVbBeunQkRvVvgKRB9EpJMFWQ7KgWCEMYiAAUZ6XuQsubbnFgJpFss7XZnU8JSuh",
  "key7": "48B473Quf9H8ENVWEQSG4amdnkp7BXkozqHtcCMZMnUMoD1aFDQyv8Si6xUEES2AySDXcdCo2MJkYFXUy53nVUdM",
  "key8": "34y6d2HtGWUAvYiMFF3k5mcz1uG1kbsjQgFmFxTtQZq7PvxQMW6s1RGwaJepcdya9jTwgY2AcqetR33QC7jL4E4z",
  "key9": "2pP4kyUEkt3Eu18fDcj5qNLn9TNCXmeeJYWLDwUddDAXXBgfLryH48CeVY8AyNtZbeNFykBeFP9ry8YHov54Kp2R",
  "key10": "RLU2HgKN1BRPoCd7SsAm6qR6rUSyftBQ7ZH6gzRssg1cHpeNX1LBHkyYhWnBs6X9FqaTgh2h5SPHzv3GsFgcMFd",
  "key11": "3Xd5zAzF22KJMYueUUgMhh8BmXB2yoouLsHbQKJp9LcnBbKuDHPdTWt9sWN5WJF94pN6ZeE1Y3CgjYQy7AxekoAX",
  "key12": "5sykZzQfY8TmXHzkpKWuyrDsqAgLNzEW2sxr9hGioQchoLzTvXJXBKUms8psZ4GHViuaNJqoURovJ8yLHks8rZ2q",
  "key13": "4ii5BAgZLE1kx52jonWGmZGRv5PW8DJPyTPJhRghv4PH2Cd66wUPo56dsAHixqrA3vYaQVRfAkWVbgiz9iKn5NuC",
  "key14": "5LAg6N5pph8o8KeaVDuVZ4dcGSyb5BJ35BU69Zd14eLU2uHcRy2myx32PPCXhgc6KaqaLzK7NmkXjrEksJ8morAK",
  "key15": "FFEcgHCv7iR9hdmfoHAfHuTsu3aMRBasZ44YcUW9ReTPLPB4LENUdQgY2zyTHBGFhdWLN2pMxPXBTz9RZjVxYmn",
  "key16": "xW1ASXzMwFNSPGTTzonsCCPrWCfsikZ2d61G26xHkFrNTmFxgGr8LT2RdsMtLUfsvSfersTdXXLXMJgw9GVPhbr",
  "key17": "3Fd6EeCGyPrppEkLANmUuTkmK7pxxCv7zAL7p1KZ9k8aDFx1SyWA3Li5QHqKuFydqgDz5qet1ZuKm1MqncFzykUX",
  "key18": "2BR6SSc7gWdPSoE3JTXrCWqpqzMPfD4BNciaknGdar5gBUo74MvAZqx3EBfRc5cY9rBPDPUXG4DwXmQhbxDKRe2A",
  "key19": "QsMfXt2bSoSrJc51vAnFSfDqttYY36EnMfrCw7JPTbiS28ae8gaQVeSoXCF6eYAU6Rij3T1rz27UBDLrATMJwNV",
  "key20": "JCkfHXT2QaAXgnGtnB56oEZL2zUeYqeuUmKXSQt1xn2mVsi9GskNKc8qXAmANg6wERUBaRKdeYTeWWKsx4kk3uL",
  "key21": "4BqsNe33zgorouCTivcESLyVRFrUabL7MfpFJuhf8fzYa9Fy7Gs4ZDqDDeMTicoPFJ24in1g3n5NsnTi736F86hK",
  "key22": "Uv7Y4FSi8qt8FRjAb5TLoZrLx2C3EMjJLznDR5kK72cMmJDgHcvD5pzfTZ5fiiq7WPc4dWib6N79yYv5ifrcUhf",
  "key23": "25sYZc2WDU6Ew89eopn16U6emfvjhPpgBYtdQDShiTCFzBXCwSZztKiBsTNfRYiUfjh8dhNyAsXymYD8iz4a9MHo",
  "key24": "4xst63AhsD6oYjUHhAAdvvaKU5Pb1NioN1XuREtDtR8rwwn9AaAdcmw4zfNnBnxdjAL1Z9MXPKBmbQnqCyxF4WYA",
  "key25": "4UdHDhwvCZQMcbyWVww22yHrTcdUHCooFXgaCt2p6tCwkr3V1o6QduCRoF78jcFYB6CL8dMRPcN4aUvKcmh4ri4x",
  "key26": "ZRJrVfbZ9wPGCZ7AKHdtiNPjsfFa4wPLwJpJkEBSzFACDUDEyQJB98xi5ox6ZZayWMYgJ9zeTHZTTbznzNUUUHQ",
  "key27": "2NnTXUmZdXuk3o3bqH4mn2MwcRVbFjWfhAFrPoEhvWqyVm7zQsiNRAktQRyWotbFdmuJPpW3PyGQGNfg2cowjrrU",
  "key28": "oLYBUHwdmr7xg6dbkuY5zGZnyCUs3W2Quq6VpGX6CJHGwz2U6wHyRtiV7UYvvmh4Zf3g99U4oBnLB23ZHPvLeF2",
  "key29": "Mqg9LqXoaxoMvoZj382sACs4HdVCsHqM6Z4pee8LP7LwJxFuoruEwBvciwWZ8Qx2EgrCzX1xVxVsFSiGqQmoU95",
  "key30": "2UuDZtfjDbPUBMJ4govvEqNNjsQaBGE4mvjZcQpVGx6hQ6fnAKgF3m7B8ujAKqHs3BrAjv2r6EFSqcNaLdoZxbuT",
  "key31": "FAUwhPR9NFkERQUXSVUE6fwW3PEocfJNWNGZjZ3hzuwYCqZAMe5KF2RcEsafKUrXWar1bZT2UwwvCXzNFPUU8Zk",
  "key32": "3o92xAvHe6aDCVg9jrmxtCYZCDrN3kADZjAygQm5JvM83E4JedRxh9BA3ndZNTAdMy9jnYyMK1cVtVdbM7h2pJEu",
  "key33": "5ZmFYwacCydTNyWt2GeZ8mwsrTq2XKDzAA1WLwgkGPriXt9vn6SMEPgcsV3U4eLZsy9L6RiNgEysGSL1zaAmX9AF",
  "key34": "5TB5p58k3MsANognXZ41fE5RazapuLTVaDryCewvRgZW1vrJgdykXW5DQd8cfLz6TPqf5vE3AwZcrrmGzGqquLRV",
  "key35": "3smwjX9MZ2xaD4g4uS645T2iRn9sntAZujNjPa96jc6qyhbiTWcLV6NFcR8zLjeEfHHM6A4VVcdqe4u5rTEtdvby",
  "key36": "GQzaZUVGzvwdX9zPsAuGrWSgGEPsNLpiGiXbzyqB23cwLf2fpAfRmfrrEZXkkiesTpBLv2gFR3oXyZo1WU7VL3C",
  "key37": "3FxfZvfyvGTZwPYgxsrPSjJRsAjqPJdf5JG2rMnF3uGGRrE4Rs1GMYWMPFRxReQWN5krbBLpi1KTDDQtoPxg2k9V",
  "key38": "4oxB5envZgJAKRwxYuUCX2PN8eUWBcys1qZu1fyMFwH5wLcecYcmYjNQtiQNFZ5oK3aoMAAm388Xeu1Eg45QQXHz",
  "key39": "4BGaMqot4LBrFXsvfs22Gz7YSN5RKTPoa8acqwYbYzfzXYjMZmVssC4Zvt6UhFVqG8qXyWpEM98BhwVUWwfh8h6e",
  "key40": "34amsx9iiPUg4UdiRFpTrDtQpRWP5eXdH5eSQtqMUPxsQ2vvyf35Z7ur6WkTWkH5eFVXuvJpSTSePdq9ED49u1PV",
  "key41": "2gV6h4iU1rvobEcs14d4MhSQ2RXfsJVS1m5v4TSGTFJm6cAPqzFBTZqSiiasDhoRPskFsnNYFGtww1dmtFRvm3jE",
  "key42": "21E3f2JuDyqzKAUVcjKUHGWqrHSfHfZyq5QBNZGrp8SZuiLHgQ1WWr9CYGZKZ2z2FKoPocWxrEpnc3PXpX1K1kyk",
  "key43": "advE6dKVJPctDqhwhmRLbm1EQqAqEJnzLzQ7xaBB9YA7LC8uEkTjySnNkjF36YgNboGu5YcMKQoWncrmfbG57x1",
  "key44": "64t5u5SXZDyd7iq1ux1uepVqCvoB8TtB7XvEqKfd4EEDaLxyFUvkz9JFY9TASMJkGfjYqiQhwV3HVyrmgP58tr24",
  "key45": "3vaxq9GrZde3fYkjkgHGHa2jkJrfugUd3ewWkxX1DhRgR1je62CRg3QbJJng6FqPhNnz6eqRtyFs6mdy3hJQoNye",
  "key46": "4K7c1FX9upboJqsxjMumG2kzUjoysP3PmD4Cey5mXQNVnpEyjLv5SkqQpyx3rEGDgx18o36XMRQ2KfFgMD4H5DF6",
  "key47": "2yY5hMRr2ucWnGgGzyyZ4GQHWwKe5hWh18XtrSM71oXy5zF8EZU18CcCn3QHACwVvjNQ2CcHG1V9ANeXpado9YZU"
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
