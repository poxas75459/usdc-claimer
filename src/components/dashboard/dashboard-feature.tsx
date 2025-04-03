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
    "e85STq4ofPJugCxDSGoZMg8KYnqDnxSQgMfxEtdz6U3CAY248p7b2tt8tGnnfEtJfJQFgkSXrH6QL7FA3tpn1mF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TjkhVyaa33TNBpJZZ3zoxZ8HZwEdb747yxgRo1kAgpGZjzUE24ovcR71HJhxGGcdAeV1AVFtauW9GSxvxcWqVHy",
  "key1": "erSdsAAwQR3yrKVELAE3RWECkfqybMi2FHVziEwaZNpVR58gsTuCi1QWswiVT54WwJm3tBSq9ur8dJJTcqD3bNG",
  "key2": "22BMi7WQ46E6hjRFA9nPEvRcjmGZeEq9A9T41f7QP1H1VpZTFgF2D8mrhdAY1i3oRwuAJfQeDBhuhjLk3qKRT9NX",
  "key3": "p6vi9L1S3qAUKcxJKSjKmAaW56PEKw1jisBnEMptjmoVwrisZYC7droZKRQXTTLx3YQmg87jxFzXhJfGbqr5ZYL",
  "key4": "2X2YpUC6p1zGjVMj37T8umtpKNRuHKozz9MyzB1hA3HhDXaPM68fY7pRdv5PASUuyzxd5TmQ3DQDezC6k69oKV6x",
  "key5": "mMSBbVDuDyK3sVoKqGZKREXuMzDingNuf2EjD9X6zEgbUXzrKpHzqB2fgKwe5NqMTeXMk4nZrppGhj4wubTbVGb",
  "key6": "5rsg1ja62UnbXJG25HAvDfyeUZ4DVDM38LyNE6xBuR2ws7TFPFHiryNsky5BwyeSfB6vcmUu5ZXt2PZLZoWjZmF5",
  "key7": "2MezTaNpzMmumxgagRgWqtZEZGPbR7rikBf8q13KvaL1BcQ5yvcf8ju4sQKSJmQfwHMzpXPf28njRkGhusiuweiU",
  "key8": "4Qw8xACTpW4He9N68rT1etWGj1V8nAKBY7oveEQqyct5KbZ48aPAQd6mueJXSva9PLasMyuHTj2wMrJ28s4CzDED",
  "key9": "3buKRLHdn4LxbiCgvyMeBonAQsepUyvzpzTFr4NQWy6T1F4MHrSKBL4zuAmVWDo2RDGfh2ZmgPT9FsHHSpEJBARG",
  "key10": "U6kTAJRFBxuGiE6vo15dcq71Hyp7yLcUQYWqVLAK1aTrtGtyQPn25CUYeMisDuqfrKRp5N8HzDuHe2dvSsjvLq2",
  "key11": "2ZckzSAUH2wdB97DwQvfrHKWE2edZL6KBy3f3f5iMABUBu9dzBLajqZDxMV9aT2LzwSUNQsHde5V9xYNVHG3uGzB",
  "key12": "3jMkgRDrR5Z6sZoHFJWafBsBjF3iHc5XmhGpLdBfTSnfvxjYi9nLrYgPdhSi6oMiUHKyHXkv9oB6Q9fnPaW5XXzc",
  "key13": "4hPb2oFdLAwgZkHLkwXmm5dPTE6QDGfT7Jyq78oXktvKz3tbyqmF2SYqG3qBTaTEFYHSqQMkdMojaQdNWb8384v",
  "key14": "4kGvFxhgwxZy2mE6vJDLsvUUKCWBKNEyDx8wgRnDNr9YVetjZBHAfbQ2evfb7hVnSgGYd9UvXrDXBKzqzGbHFeid",
  "key15": "38RBkHYep1LpV1Df49X8cettYSKsQRbeNUU9Wq718b1DPuDYvtHCoEMDJsP7rw6rRVEhNC1ikLnE2BEA9jHbT5dk",
  "key16": "etY9vWbr5RqJ9JULpzNgkhLLQGz445UVyMVamzxgHjA6HDH9cfpyeEHHcwsQzECywy7oCAMYbkGjRgx9k4679Sp",
  "key17": "2QWN1QPdB6mrxLTdE6PPP8B12iiZAqHh7YF76nY8S7wchR62f8azT3zYkK824EETV3uUs3FVzm9jBnBhiTzHNbpW",
  "key18": "3XZGgTCxkgKDVSneDJVDRN7PkuC13UppBaNn3hyy9F1ZLjBbrDAwVch2o9LuqesCB47GZoEDQdowfMu9oaoXbdC7",
  "key19": "2kSkMGrv7XNRL2HNzRi1cqPfdYjhW2ofxex23y1t5w7dPRfihQoPaDeUa4epdA76nTcFDmPxx7wawsvNv9RopFeo",
  "key20": "PcnFMLjNJS7iGBzFskwGndo4Xho3GujXNS6hGKkzDbvmLtJEFQ9t9TQsAwqNoA2QdAg5sH6FBToV1nwjnU9J3E8",
  "key21": "3JnZp1iJobkFrPC3mdVSvvRrThyTAUAiUzDKtnC1kPic1m7Zyk9BA8qfvdAnYHFQngygxzBtNVqzdx9ppEjV6RUb",
  "key22": "25mKr8isywCRLTCq59Ub2dMgb6hbL5QDFmP5tFvx46UYDSp41ye6w9nRB9bmiMvwJ5tHRNNMzMRinzEpVXYRqs1E",
  "key23": "37ZvSqXijL6rH1JGdGxYYmvrdAR2kjUVLZDDhT2hJq2VX3EXYUEfuN4qX2PQonbmdarU4sM17XCfjxxuBN8MJD2N",
  "key24": "2hPBqBjprKHgH5zWhDs9HaPpL1vGMSfugoM9uQxfD4SzLeYp6NKsietrk9Htee5aLHQpvdmss2bhdxDsbgmSifs2",
  "key25": "4JBeWiQcZnka2yf8C15X5y99i6FspeahPrGrYcDacvfDxg2kdaWYXYovU1UwTz2hYFs9ASGe3dZq1YP6ZZxEDi6M",
  "key26": "37gYyiE6A4AjLzaQMErK8JbdPHa7dtB9E9nGsbCijteRd6cV4BfWNAKjNsb4k1tWZn2mgNdy5fdMnfJRLkRHcPAD",
  "key27": "34mX1RYNFfZdBaLCQVpedadEJaCGsxxTWS8h2Hdo43pSQGoDP3owZEevSSzYSygucdDuX9snSaTWTG89ELYKGpww",
  "key28": "2ygkh4zZhVhuGEravdTx7xr5VrNrfXGqtm8orcLNzFPZ82s76VuxbMFgBmgDEwGPkXCtWdXFtMc1wkdevzAze6XC",
  "key29": "3XjxHm6qGbNDK3dKiPq1Rsdf5YbGrHEs2y93sLkVWzBKhDrkNV8Z3fc4dTGaPqVKGeMJmBJmdFSkakvFJcyAjQGd",
  "key30": "3LZeYcxXRzU8rrvzwhj7pcFseZnSJM6V5xMZaNe3LkEyCJuYFT8fGdfyWh3iaFBK3UGeFSs3MkwyerajDEomfvy3",
  "key31": "5g71H1E2LTAY1RXKhGewARm18qQ5iczkhQEV537ayrEW5yXa92ho4uFMu4xirKpQt3HLiP68v6PdKHYYyRZcHycU",
  "key32": "2dhFjPHEh6k7vsHS2MDcBNmVKqttfmAJ6ZnrGbLJeSPMo2HGf2rLfjnA4DR95xvERZycw8aU5UkGQzSDLwJkATSZ",
  "key33": "Vps36LXR2RXQrHJNNdRSJbQPeS4tumtKu2kPAPPk5awch7UQFU8uig74Rx8ifeSXqTcmaRHC6fqy3dFfSf2bkQy",
  "key34": "5gUHGf6HEuCXs53Uv6YcTqDpddKQdZ32G36FgMvEPsVM9zWTc3CY5Y4EfoWWhjWzRumEjjYE7RPnbVqWsKQ5B28w",
  "key35": "5epayBKETubqdmdMeMhAYsKErtyXtPpTkYTNtQ8ucWAC1VCznKpCWQjie4Zi4eEZFu99HFgRLtcWMqvtVEKy3hw8",
  "key36": "Tw1RVf1SaqjKBMBqrUHzFdzZjBEaRjcHGxtKDarL4aUfnLzuqpcsdjZkQ3KkTdZWYHtLH8rVXiGqx56NYw1jAvE",
  "key37": "kEUjMk8uZD64h4XzQ8v3WdnYc3JrfGCyXemFrDzYKC5rJiu3m1SSxyKftf9BcnM5DLgGpc4knPSCs431v5YFepm",
  "key38": "5GDbU8cXJWTVJDWQyc6Fo32EW8vN7mZEC6WhhWJFY5pBQCPrguX1egLhQYDocm3nNAJsuRS1m56WPPf7tJBZMz89",
  "key39": "4KAPFaWCDUQcrP2Ko1xS5jb4GfmhXz2FJbaTrvvE8jVDmAMZoCqFmfgKsKzsfMhBfFSXvzKUj78BdwquPUc5p9QJ",
  "key40": "aKz3zc2nSq5EZgBrjEGSzjXZBVwKbVq6tgzzwycooqecrXTFsun5FdWATUwtBHbELeqGSDYYWoJwoEfSY677JnT"
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
