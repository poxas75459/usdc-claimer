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
    "26iJHTH7h1ZS8k3r92WLaZYmGQV9GU3CaeV68QtqFjd1uAAqbFPHcoULz9yn9NTpBo5fw32acKgP8WFE3gj1xMHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4auEMvBitnZymjouJQa7CY8YRzqBYhBW3JE5zA4mSodZ29pVJeZioPq5LYpzuLy8sbuuZoh5YG1Em4BqzvEzmuGE",
  "key1": "42sVAzBH1K2bueoFz9sV5C19fjrGdPZ4dsdhnxoxd7LaHEa72QNvkoQMxBH6p2nxuxyJSh7FNyzfAfixkti42Eag",
  "key2": "2mQ4PRczCAKW2oSWRKoUjoTVqXYjQMw4ULanvqV5s8ZLT4P8r9efJKBXZNmnTabE1E96AuUmoqPiD35kNksouQJv",
  "key3": "67DGifsRJqcUhvSRLCfEDZPYMWho5nio4PuiDXHQ3qicmf4xTjCru1X54ajpGf4bC4JSoLzzpwqexL3mXSXaE1Ch",
  "key4": "61t3bsx8FhcgXnWFqxNd68MvsWW2xL2MViMZtkuuCHgmuTHqnJtkKBPEGu7tWxyiEj6mWVgNu9rWkPeJnjGVLvoE",
  "key5": "5DF2bNXyxLDxo2JR4UqsxfGkVfZmdzVG2wShqrag8n781CSby1K5y8TVCPs62gH44FRM6DZM4E7ZgXGRdzaqTzr7",
  "key6": "Z46R1NooAJnfwiThRS7tPatxSiuuGFehs3Dt2FimtRA9vBijueGCFSPZn3yrSN2XjGvKyyu8EAFXGifBVRtU5Nh",
  "key7": "2VfXyeAHyaVGFpNW1Q25g29s2EFhfSEc5WcPL5GCpbWUREHnc9eDEzL4CMZL5KHPzgdLeFPDPL1fisByLQ9KVaeZ",
  "key8": "3U1KgSzF2AnhFH3G5VjrsWYwkZHaALtbYK8UdBnfduz5Lu8EzyCENKa2WRwBJ5MQVKXgkootQNXBwwspow6okJq4",
  "key9": "5fnj1ohXL1RULS8bMxqvPh7tYqFbHzQXdaFNBKSoEYG6eX8g7FjRJgExtts1ib9B2DUpaeJv1nd3mWUYKHtn6yEF",
  "key10": "48FTcUt5X3rDJRwf2SdfaDrsC968vDhLpDjH7JBPMAwQsMhvXPLso7mVUrcAL7z159EdRUQ59bSzaZ1YseHf7kbi",
  "key11": "2LXNHjkYzduoku7FboQTm6NqZZa1kdze6KADu6xYXmH8MqsqjDQLXWagU5aMLXiiXfBM7AM4ypjc9zsSF39Kc1hx",
  "key12": "48VXyQxuAKcaNGkGN9uU3Kw9y6a8YWjC2JugWkvagBMMEL4pkyzh2wGTSkghGqG5SacoMVnyxTC3gzXTWmoYhJD4",
  "key13": "4qzoUbPCFNR2iVHbpu7BCQ2p7wJcwZhwcMcDiNhhG29yR6FTPdT7jyBMs3X9wtkCdj82emJ3oadx8VjhjBjt5qEZ",
  "key14": "3SL5yvPAqpTaNqESi1t3M1pKZndif9idzrNJYYHerMiRqYi4pf3rDBvfrkvyHPrHxwP8KnZeLLKgHipRcTj9eQzB",
  "key15": "52dgT1t8tst3AAiVB1e3ymWPJiueha3t2ppngbo5p99fhfUkHRVHf5MxJ5ArZsNLsxLLPsKG55kFvgoFbuVpqMwW",
  "key16": "36v9nrzCnreChiVEj4LDrAyuvMmh7MPmhRapPcQU1u8ZzxcRSNZNtXkQV7EWQhGY2Kz6KHhke7okPr5ma3rtaqA6",
  "key17": "3rBvBsJK17R7FBK4qUpvzt5CayizYHmJ8brSe9DfNby5DKU8nGsqfLJVGPqdw197uSKrUXaDGxS1amP25E3Xnawv",
  "key18": "5PA77AfshbKJFDWK9vsDo9UXUpYkCi6QCSM2zpDuS5iPZdPritSf5VHkT6SXED4esrxVKS9d59TrZNSkc34rtoiG",
  "key19": "4mhbenTwYHe3Uw3V6jdQ3teQQj8H9jeiY9QJrA9Tzc6nxWTQTaQVRDkFFsAKjwH4KDcRyp5S1crTExktyTC3HEqp",
  "key20": "2ttBZ9rNwPctwGwyXjCjcGcLkNbjtet2cd5tJ6qHRwx6z2oPrfAxiMSixZFFWGrNmKWtyjKBZ8SuXyzoviqEqene",
  "key21": "46PTE3r9FcTfuPSDxK4ZztAhKXsurSW6dstHw8aGNANo2iCkPPqmZKrRdKvRwxcBELVt13n2GhzApM7abpq2VcCh",
  "key22": "3jmC5ovWiKudzxwyc9QpqGw3dG5oH9rm59sDou9zn1oN3dkzxmy21qpXAWcR138tuAQ9Y1ZdWSzYQNgigAc7WJog",
  "key23": "3PMGJyJJCRBExU5bo4b9W2v94P3HWjdtWfzKkvYGRNNirjFivNWtHhYJbDVzUBVqsCWTd38BMN48X71ijSyS6ZqN",
  "key24": "2v5XoRZD8amquDXdiQaky7tu6SgNNFmXLafhWGKjHsZhxQ3DtUasuXQghEfB8MXnrVZZFePjFUDr1rBpxzRW2vUA",
  "key25": "3uUCqW9xqaMM91gW7QqYdeXsLdNFZuU5sMq9tXAxKke94rgmLUHSB6sK6sddKY6h6SUF2oS1zA2paSfBYECUvs8K",
  "key26": "29Fc5p3v6tken6bEB7E7MzVofsGeq4V56e1JzNWQAB1CNvHuhURLHp7bXzYmd9vN8uJHtjrg9DRmm985H5WL5y6F",
  "key27": "3FJKAC74BaoHLwQopjuoXDonomoWCPdPgyaxawfKNEr5WHbg1DyrZLxGJiDJvHr9EDfKf5GxrHxcJPnKkg7xAtct",
  "key28": "TFk9eUXBjHTfXuYrLgULYA1ha4LZXXGsX3QGSyVxBQk8UNX1ieU8tPCdftvuJoHEDVC8kaFcSkFRLDVicE881KY",
  "key29": "5mpCWrPDUFRseM8xaTmbeLXa1Rtt2GxesnHvP9WxgU72RjT5rC9cUWpnGyHP2GaDDfrMyX7CuqVM6QRRa1AumxQJ",
  "key30": "2B1BqJsCJVuFYUrJftYt1f4ydxE6ru7B9B9HxsCAnBmr8Ba3YLYCabbX38vr3SgSWLn51L53A9GyUsxqnXWuTReN",
  "key31": "4UARANnT4DY8uWJot7YWQ9S7F1c6xoCmbw5DyDfMZtAi9qjvTmV6ZiH7ocMcE5qrj6tDdjWKJj9BCpqUjztTtQHY",
  "key32": "2Z5D6wNiMryowkmBRVPPhs4LGascJndDFZMuizPW6gqFHAx6gBbYwxEaobGkzPLRJCHhnoRYMND3Gbz2aLybqGaN",
  "key33": "2dF5kuD4ZJQ8mcpF8iuS3zXTmpD3Qo5hnpGCWPPJW3ogo2rDW8FH34MKw1o2hQZpHzzLHHf9LNC5kTXJAFLtewUV",
  "key34": "4fLUGgAiG15YDcVuGcLZtabUECmB6trivDVzfDX5mPgq5JeXZ6H3JZ5knxvQKA27sfcYCpc9Qtk2Kk8RhD36ovxr",
  "key35": "5vHYobbectxMSWVt5Uj1pjbT51JKgvvzsTRNwrRRN5dY7Yr2rdxhwkaJhcgaENfkkDSmLFY1zbUNg86v2JFECM5K",
  "key36": "hRLCtJxkinb9zqmd4SPG2cu5i43ET8qSLHotQcnESEuK6ktpPoheN8YW91D7x7azjeARZkHX2n5yTJZogsxYiAe",
  "key37": "5HEjMnf4svFAimDfuwGkLbqMUJTciAYUn2fwbCdmoxu2pTDip8N6RBJabbjC5yYt2Dvap62sbxTaApkEpmWpddm5",
  "key38": "GgNGQwCAKLMzm2EpeWN8bbsGQPygNLBpF6T2V36HSQm31cxxqceC3CkS3aRaprESirccMQQrqL4GFa8tWsJZpvt",
  "key39": "4Nj7xXhtmRNH23LUxfrJuSufzWy5VJ834YcGg1vyNpmaoPj3Wn1NjsFCkz82Sb2jSX6EmiEyQBz637YoHvTRxkP7",
  "key40": "5sz4YgFWBREdD7Csy5cnUfhAZc8VkrBsp8b5VueZwT9Y6s5tcrDhk3x1g63dD8s6bW5vUsGpo9zhTXvRzLQQhq6P",
  "key41": "4K3yghTtb1xjuZYng43xTBPnAW4ZdYjQ48BQucXiWWLtpxfG3mFHzDsLKxEBZQomw9LzMQsCYrvwwZDHWttmNZwF"
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
