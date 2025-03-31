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
    "5sWx2pKxiSkQG2Xai5Kcjk6kLJGTxt8yqKVh3nkAwdd5Gor77e73AmHMuX4ygSBXkUpExtmrBW3FsyvdPs3CFrte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3bTPGtTgXJM22WL7VMcwo8vb4eUf2gAkKcph4d6NLv1QTWwLaH5P89PdWr2CGKjjdvwoiUsxG6mXjT1h2x93f4",
  "key1": "59zgZdEr7bqFYK9jPdVbFzVKg9VWy1iwLibZq6tgoixnyazRRi2wnnK65zx2yzRh25U5Ldpxvg9fve3nKrSMjWUY",
  "key2": "5nGEGtRdsnd9Ca6NnQVujK4Q2eLWsZrtcivRiyVDv1gB7DvPjBWyMZp23D87UamabtqVQ3aSgL8Vi9LNCjsqszJ9",
  "key3": "3bM7j5XqofcZFE8QSVryqo12KXycksDQ5xKjbrShnPDyesSrNRcsWgrQ9hvqGGPe7cW59fE6FKnM3aW7VHNgc4oc",
  "key4": "2q3FmzkBf7XSp7zsRrJwhNZ3r2CCxth87W2puuuep8XDwj3LtfwN1kzcVPoutg9qHegoGvD4oH3Lj3MXnigT1XkD",
  "key5": "2voucaNwho7QXHE9PLQ5Hap9VRAAAGpza8GinXqXMXZp3tHfZrcbfdCQz6kn4NuqbKe39c4CDV7SF2e69uPhZfJg",
  "key6": "5QgcggamXaPcyjLsLGpyJSq685D1RbLLSJdgzBfn54qAPRx4vPqTVWRyR618NJ6xN7vskj66fYef3G7ZPxjRtDt5",
  "key7": "5vHZbzYHZjsL55tsNTW1eUkqra8ygmgeMUnYvLJA82chSijC3Bx9SXbasDAax2oXXrKY9qVcewPguXR86yD3wscb",
  "key8": "2znrGJ1bpvp1DZy3igEoZythUqZCM2h7bvHrLbMNF88W9MyFZV3h3EVBQ5nH2a92GQe6owbVSmNXsBXiaviP6681",
  "key9": "5kM7qjYBqwqiHnXMG4VrdHh1me5hm8dGPsyP2T6Lb2KhzUQmecTBXMQ1EXM6khFof6J17Kx6YVSJgUV5MNvA8EEb",
  "key10": "4U7rBnkDdpdAhaoFwrtFguuaF4XmcDH7dnGQE2b5aiVPWgaKMhRdv5kBAiy57kqhQJXpZ7aPzMSmNGVfr1eeduL2",
  "key11": "3YbY5kz9QkU2rgH24S3qSQZAxUphA5pgqJbBjUfSi1mZAuN1yVGWDbzwwpG4XnW4CN8FjHHCScypxLy5qeEJ9hiT",
  "key12": "5qgV6nLfSS1QRUcqutnXzicHqybbSX9rb3yx3LhbMmGh9hPvtUTrBc7NbJSv6j7rQ1tWJy7av6nXcqVRu5Ts587X",
  "key13": "prTUzUe8TYy1iGT5pSH5zSEY5V98s5wfXzvPcQL7SAupM9BsAJzx3cgas1sk7UHq37mGdRMoWV8u1pAgcFph7U3",
  "key14": "4bXfXFyoUFJ37SvMcwS7kgyYu6Z5FweV2zuMCww1MiTLdoWduG98REzQNJyJ6d1zLqTvub9Jmd9KNNJFsdYrJXEQ",
  "key15": "4NPurRdZxAD1S1wCoo2k7bVL9AqsxQ5VDMFQwFiDpZZgnEDJgD4Adqujd97objAE3xMfXGQsUaHPf1VPzWYmW5oR",
  "key16": "5aGMQBCCruvFKu5D6AXJ2JrAnXHPQa9LHbLFDcnczS3hzrRrDDnXxLWY94oUmkCpe7tuRqX4UzsUQGTPR2T45PZE",
  "key17": "4yppmUxF4ShRZCFTZcuyraffXAjhMBgTpVQNZ2Hz9YTsbApUH5GVn78P1MEHmtPzB8TyRj8yyFKZcAY8GBbstf1j",
  "key18": "2pzoqnngh1veCdzjZFiFiDtDhgsf7K23br1ZRJJAn4tSyXcKoxAZabJCbWbBzXYtLyUnHEi5jQQAZNduD7K1div3",
  "key19": "5JWrfusZkAnTVv4rprkhXrFwb5R5UZQuq7A4iHBKvnntzuK3xWjQYA2DPho8cyHovZSKPe9gS9RWRLoLZ9ymRFrR",
  "key20": "ZJbyGNVRWfQ7zNHrgFRBHvDQAqGHWDDLmWZ118bskraN9sgGS8mMy6EfURAH6jzGhcZHUZkbBctQVtLoHwQXMRW",
  "key21": "idfyRApfrM5EKJpGTyBmL75wiJwWiJTZsosShcUTtMAJEJtUpkUD2Qkm5NMwLE3URfE8QrgiZgVqzfSWjvTzjg9",
  "key22": "5Phz6FhQHxmNyosfrsZTNu2rPeR4wFhuiqvzAjShz9QqUDCMZZ1B8vaA6ZTnDvQcC6R6ofaTQYJ5HdyXN49aTsrv",
  "key23": "geaebE1aBRpi42f2mjDDZNzg1XpzX7h952R3DHbE8rg4mNPtSxNuimVXg3DL1Mr7zwRS2pHNfkDQE8jkXyjwPW6",
  "key24": "NENqu12gYPoGgpGD8m6fYi62umus6VRdfTtvEvjTsM98BSdueAwGpgccy6sykwxHLDxkaPHmuJaRWT2RbEEzAfw",
  "key25": "253V9r2sLHeF9pxZ1fFwJuep9xJwRhMMtFgceffZJjSV3zmoLx6v7F4HyenVDVWBBQdrv3eq6YwJ1qmh2EzZrRtf",
  "key26": "5dkftvwFcNhaHe65V9hWPzHmDpfgrfnvZEX4dHdXNhjNptsFgfrkXNgTRjRNCptFENyrLGHt4aN8rsnr9gq2Ph9g",
  "key27": "4gi1eRHLGKpo9oCDK1LVLXcf9AJCTxjZcjDu2WJ6vgsyLXQbabrWsHAnCtjPXj9gkXD88evS2c4M4bJ922bHHF2S",
  "key28": "KgSrraSwr5R8m6R3apJYiupssq5xhDqqMbz98TS1MiLwfZSSiKGB5GXSYcYZKBvSWiq451c217ARQAMCSkGhMsH",
  "key29": "4VDhWooZDhWUozerTZEjzCLgHrt8PJg8qeEy4ond8HK8U1AViTuEKgQxKwiMfc6geAYW7HMYNw8ZtXCrDv98StVy",
  "key30": "2QdVHXKumPEQPV99kMJKy7w9pxxcqrFfbQykRVfd96kwfJ6PpBWR8Dz3jimxqtJaZbmmpRkFC8NasHMV9brzrnwu",
  "key31": "629EjerBRxRdPxTEAhuHSAP5pNh7ae4kXrANut1rFuzoQLLwZsEVyeSmW8uMZvPT8tqLdDftbQuRUcCiGQyQCwEy",
  "key32": "4sHxcGhW6BxA9rydrxPKEPMF3TsWCNPZeR48PAgPsPCxcC4iQekk55waKq2R2CHcyeSc4cayKcFhCDp8FwFizMi5",
  "key33": "5PrSoc7ppVEfLkmGrbfnhZNxohZTFNcMofdMx3rKfLiXUt278sSzcNVxtuVWBCxHHCYeFb21zkHrRPEjwBfuUPNU",
  "key34": "5x6DjLC3HpFsshvqb8RgQ8JLAKPNUUbW87bQe3M5ntrHTdwL2egdqM5Trjui6DjeW2NRtWZSvDFVmZY4yYA9RsTr",
  "key35": "2xayyQ2ypNKqNZ8Lta2bxUReZLSPHdJ5aak725khhe9ANPDrCBrskbSPgFDtG21H7ebyeMStyNoNPXsK9aDY5R95",
  "key36": "v6YaZgzpDTnygomHHzG6w8tjxifjD7uCpEy3Hsza1JBjSft6mzpSVMzGvXPAqm6VASMpdy4DebzxnwntXeamkvy",
  "key37": "3huYseEiVXAUp2uWF3XF6xfnLuRSzpuTSjXj831sZ4rH4tKuJcztjbS6rQ4z27zgjdWtnKVfnE2a1rmWgaw8vNSX",
  "key38": "2CnNv6saXDtm2ht4zjjHvUHKRogXMGWaBtjCbUnYpRGD6xeoZwLMjR2SX6A8i2NhZTiAYpYCASu5yikonanQah3n",
  "key39": "2JTyqNwYF1c9DrRFtAzRfzitJykrsJfriLTNP9ayH6NCPJbrf6mA3rC9Gw35DmRy7t7xvANbiSy4HRheYADR9gob",
  "key40": "2cggf75rQ5hSMnJxAng7FC2DBzfxV9vD2GCbvbJLZxwxJxcA6QL95r8E7drVdowUJmKg7jqEtkNXt6fFU537h7ki",
  "key41": "59oRoSfYoP4GCHqqrrRUBUnSCBeczxbG5p4Edho2MDVobMuiGtAQUB2AdVPtyMyu8X5jgVmrErf4fH1sPDHgw1HY",
  "key42": "2xHAxRT7HHMwhqC3sTzhoT1j2vqkC6XeVhfYYTkUGuLwGz83gEcGisd2CuZ5ekxuwPn1ycEuX8yrbCaak1yWfrrt",
  "key43": "ojcbbCnZn5L2LdY5pVfDvdhhenD2frjTtHWtY6GqTkifgKjoHQTXesXFyMHCeTPnwzbNM1E2A1kkPkZun3g1ER6",
  "key44": "2GxxotoUu5wJNhaiqRtoF45eN1xeorPZr58UDAWKVGhFC6x7Y8GqFHq8M4tZpALMGoAQAzsAtxMMKApXezb4XAJ",
  "key45": "4XFcbwThXFB47cikQDqNX7t8wVwJgj4sfK5fJ1zM1EQYjNpkGyZCtBHKNKA3FM8aLntZ66TSa1bmdXDh81sX6tC9",
  "key46": "584mm6VUyZicArDcA7M56eTJp8K6LR6fbvbHcVy8MRi31xX2NyfdzmuLCn9gcNhirMLZBGiN3xYay3KKJDXN81kC",
  "key47": "4bBY1Eq5CjSADPhJxBHhcMTZZU3YkzhozNdraVKES2u7b7gUFs1z5H52JChgxMcvv3KLsaaCgGGiXb1B1vna1qd3",
  "key48": "4kLeQWaHj3DDCXrtYe1hoiPRxoefAsGNXFohqYiguAnbNbH2BBChrxZReoi31m9J5jULZAZywePeHX5TJ3FNeLdq",
  "key49": "63KVfWW6aZ5bxr8fGVrPHpR75xro9qMyr6yXVLXz9VxeJxncapaeudzGZSKSciQX3gezCUapLV4Aib3rBJR6WrAC"
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
