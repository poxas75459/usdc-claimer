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
    "4AyTs3dBeCrJdsA5z5xaAyyvyJe6Gs46csfkeZNB1wQwTgp7m1ZdEtVLx4iRTMufG5ui1p1D9j9Wg3Xi8iciDr2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k4BGds8GiWNeCXuc7Uzdv3Kcwo62opoaCGepsqUJXqrfowDESpjErP68u6WndiDxCjZcjpnmAoHhEPvbmHmUQ5U",
  "key1": "4czTYkH6U45A2PbXfBeUZsbaSdYpM1FiQtxvXDPdos1LHPoEd8qSAfdCrbNEsJf6nNAgcRfYjxtugXe8ieyyGkcW",
  "key2": "4zkCrdR9ZAQSVaQ7n6BmXzT2fg3wpCALbBgcx2XxrsnJqs8TRcyMd3htoDZpf6B2gaVzzJf4BnjfEjDwDamtTaoZ",
  "key3": "5dzr6LZynFLWMuuk9mhVDQdfc9NTcgZydxitxN9MTByHfyuKN5gw3KQJ6VczaN96K5KpW9BdAfHyhU3GhcUi1gyH",
  "key4": "3h3WwvMDeBtggcgxhbefY1mCbjqD7wDX1C3JhHF6GypYaP3vVv39Bp5fJSnNXB9KHeY7ymbgeyquP9a51NaYxF5J",
  "key5": "5tUdhEgp4pzUKUgJ2QDjU6G5VojXuifC1USJj2uzeYVKddVD7ntQS3xqs7edeJ5iiHSRWZ43ZCksXpLWzqbN67z8",
  "key6": "2wee336G1Ps35Cpj4bgeLM7VHBy1KHfCNsEW4A9KL4bZAocyJQTFvNY72KRtQdUrqZhXjYSk8sgypdwNEEWdHmbV",
  "key7": "4jzkdZ86DcjZxdwEcgu7wVGYJpZumr2BkDwcCkePQEEgk9Rbx8ecz2SbMv87Ny1qXyJ2g2utWoqA3gpNxeiKT6tf",
  "key8": "2kSKfkSiEPQ45BpfSkYQqsbh3o1eRWyVZf1Zr6N5LLPCGj2EbPZvVccDRDVGsMUDjdBzj9WsAcyXrUrUv9qgatJV",
  "key9": "3zPrq9JhYH6ebboJupDGXbLeRjvfNcZFVTCY3CAjg5CYgsZ9C8XegidM2ZDjMRw6Wn6g4RPn6wLeHDkfRBtZY2Eb",
  "key10": "4K3c739mwFteP8mxmhQnfZbbPATqJe85xNsRBLR2pRvkdoDLduN6a7PKEKckn3omt9QQ9AZd7aokBnCa9aSnMRYr",
  "key11": "2amASvgDaewBu4E5kAEJbyHtC3zb5sHAvQoowg2zS9sRJuGQSWcTHJg1tVU5gKPBF8Bf7Xikhv7aRJYRBEnoYYAs",
  "key12": "5jMNuMpW5ZoJaYtkbJSjgT2pYHoJPWptLwizZLZX1WyBuP1gpH97ik7yTyowpgwUq5U48dUGKLTXq55hZfHB8LTm",
  "key13": "5c4bey5ohQqdhzb4tk3zJjv7TVbWSYZAEGeSPac7R8b72v34qXsH46fntcK5uyvKJbyXYLmC59dYNPaBzn7cM5X8",
  "key14": "67gXCQzvW9QbzePFWVGitbyfdfqX2basq46L4us7Kt46FyT7CattW1SeKQ12nrgX9JvY4zP3iH9U18ZiYMC9jVgJ",
  "key15": "2gkieRdMapaVo1dcJEchX2dBvGQS8T2gzAG8vBsvVAiRrBi5eAHeRnGwJmDEj14kPg2cv9G9WYgqjsfkZ6kH1LYY",
  "key16": "4bdWUJffge2GH5Uhnc1EVD1GbUBq4Encj1VH7FLy8yKBgk6A4PbS992dPRiNNpX9uAJasgNTkQNPXsKnJP96RXGS",
  "key17": "4oXaP9TKXPbKE21p9LnLvvWuNbZscqd6aCdcpAsCv9UE1T7VBBHzxytv2JRNomPnQcU8r1jKDmSN7nFPLNuMk4EM",
  "key18": "572SCuMNCJQ1n8UovHkX5NYjXnGSwfNtLAXStkrfCHbrz657DcLhV8er9o48wZaJ3kukAeKXLgA4Zdc8HtL8A9Xx",
  "key19": "3jBTMgHxSQ57YZKyhiNLsmQfo1je9ZasR8FULq91vFZzX52DqDi5N1QjTw2x5vKV3YcrtEzE1F4DJvtnH84jm7to",
  "key20": "2jmGVCmkQT8TraNK77biHCrBATuX6xdzZRKD1LMrcwRria6FpGQJpTk3JcMt1sxRNRxkhXkU1U1mqVJvVLLMLFo4",
  "key21": "4Jbm36vKme6EjWVYgG5SEosG8TP4qS6DAyPja2NKGGUC3nrwDvcZBa8ZV7SMkJiMi7CzQ5v1o1V9nPRCw4EcmH42",
  "key22": "5eDLhq3TEohtCKBYwhxxRFBPJRk1fWtWTabFPDn6YVMkyEDgEREEWVRbFiDUTcBNketpgHRNjewqV6WykZwksSD",
  "key23": "2rgnK4BbrNRTjzs9rbMDuMtf48dqoE1Q7iRg5H4MnnNFATuH3ECZmotTkfCgVk572MHCxCxkbqZd5F3ZhV2qXmVi",
  "key24": "3TL8c19DgbADnofhYzoywB4BtQXzU5cMeiSRAZ9VnoHswJMtioMFs1ak9gF1BbwaaCAgx595ajg5P6FuBrt7bc8K",
  "key25": "2QwgVPZrU6xSJhHwRwab34EWvFEaTtviQ7a3W4aU4sbW7xu6FjK2vyyvE66LPtJ8RtiCnVXE6rEJUX9nYpZ1f9z9",
  "key26": "5XgXmfuyvnT3tiCcjMpXNGjncKwgYMmTfgeG5ruedG8iQ6btmnrASNGDAw9qM3kcQxheu2raJa5CD3qjyeowLM29",
  "key27": "VzYfMX2JUmjyBpZ6D6VZwohbbYYAJLRZCty1G1jvjCfme6S1VmTMr8SSZDNmEk986iE5ciYDXoyuV6vVpxx9QJq",
  "key28": "4hQ2wye4cQmDLf3GyVinqESKcmY16y4TFL83TpFNoXKvxjDCcEDNcoz7anM1VR8Qt3x87UJLUqWFmJwRtm1qWQNV",
  "key29": "NbWoqqAJHxrc6vFMUumRbApizZzqxkJ4QyMrMC9mpp3ePcAbf45Sjcutbs34fHYR5arH3Hwyniwa5WQszjb6xrW",
  "key30": "5cTnyMQdoNXWiM1SntpEp9JgD5aV2xf41idRg6sxNfSej4kDvizA9B1CAF9hz2Kd2C5mhdKQrGUcxwtR3LUu5ShG",
  "key31": "4K3LvLzAi8bFbCAhEAkAxUKeaiV1hW2dPvX9XrNW2DrNV2cVmjNhcH7ioCaaz3WhHqTc3ySj3d8WGZNCB2BLDLB8"
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
