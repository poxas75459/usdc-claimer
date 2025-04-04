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
    "2cVaPRwQAqARCSnhpJn7H4vGyrp7HpgjFc1eSMiZEXZTWc9KVwuJzWax1LXG4quto1m4epfAHBvVg1gJfqJEeWUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cwVz9YAc3M3hXkx7oViULqVusV6rNU1pzpZVkVX11vBXC3Bb93JdB2Cy6a5N98PPHSEw6A33sfTCFCfJVUvTQYk",
  "key1": "2uhmWFoqR5P75RjNECrc37i1h4YkCAGBSjMZm97pVweHFD53m4JTRSRWBGb6hJ8pGwEi5Hziu3BpM2rTfroKyvRc",
  "key2": "3xxCPZqcabmsiQ4gdLdg4HTcFWWc6RukBMVqGyPiPDoo9hiEEFLgciB3t4FucA6prUuZPJ7pSYMYrruFgzFMSkfD",
  "key3": "3Frj2H8UbYT4HrWchVbfarYAieALEovL5bjXjTNMwLZk1sA2CnKT32h83SNfEkVs1HoqSoNgRZiXh5Sq7qiH5aTQ",
  "key4": "Fu3YHuoEyczeRi8GBeRno99PN2289ZjAfizjRg9bkdHmWh33HvpHcFy7rnX5XVYYLScB9cCChDvuN9ZW2aXdaYi",
  "key5": "4PJRswADD3PoZMnmpmBjZd4Dw6MjzYAHR7AFpfn44WdEr2FefRRYe2SXE5L9vCfVMNFPm19T9hZmiPHuzXbtmK5U",
  "key6": "4TdycepjUdwcCLC1oGAiGTtUmdxfnBcHUvQnB6xdLaS4Upym91qdsqpgzmoaurXc6ACeDTQ5kycNUXPY9KSwcPgY",
  "key7": "cZQms47yxqf4cNozgxudmwCnZcKnuDDKR3nwN1N8sMsFB6Jp5hPGRAbxk41LjQDtSRJacE9QXUoDq1UTm2CDbsy",
  "key8": "5gcCZCD3nxPK2UnMT3ZpUyCcWSSPWA7tuJFiV6v1XiQRkCX4AixZPqLu6ovEP4jgEFME3cDZ9kBJw4VjqAbEmt3v",
  "key9": "3ouxb6wgpE4QDnRGjf92EDbawFur79aqdAxDVtCgfHwEvhwnREbPSyUSyKBbNqpK4C1wND9eCFAie1NiiKnpCxbw",
  "key10": "3rDytdrQvUKNyH6Yme1peBMeiTPFaq8aa7dhjs64TgrdTyEjQrJcFZo9yEvMWBJpD3DNS5x8n1etL8ErGrvvBAWR",
  "key11": "5wRab7gc78qK7LEtm9uUaXdf1HXyMZHsY44tUzQxK2cYwgRcngsp3rMJA854AmxKEu8VFm5C53KcbaDVTfjeHQxB",
  "key12": "5bKesMZ1SYgh9HUTcsTm3xeNGK9LNZFDYYSFrHVTSexQkp5YwQLuPGPH436GpVcL9mJtYVcVPC4M6MnnNJATix2N",
  "key13": "D6y3YqNKeqQeMK82Arbr6etutDfc4ByhoH5VviSka2C4PPoM8fh4Y71vYX8G1KgZcqrWXWom2HnJ4xiy2BZVf8X",
  "key14": "2y98uHsnzjbtY3C3nibYwmQ6Xa2jAVz9WD3igM9u87VgaLBAfPQwnK1GpFDhwsAqvg2v91FiVQcxvFkhwotyUUhJ",
  "key15": "57rVxG1BWLRXQ4exQvZzYxCoL8iF8mkxYGn2bVi83TpsR8d2eqanMwCwSYEx54X9NhB2qyazAvSjnYn18FRWUDpc",
  "key16": "4vF6BRXc2n6yoK3myQHCc7t35qMRAx4hMaaF3fGRKcj3xyhoRanGXzEguauuWMheqhuuHHkdyWXkpXRu9EfETN3L",
  "key17": "iy6gfwhY1MUcndDHEKAhZcimq1wDsx9voMSuKg1ULsyTRwcPFsTpaZxywHNpbEaSurJeXRZzLmdS6W82eQbSaaW",
  "key18": "5fftFiL4BhF8Ds6bEpinBrWMLEzmSch16nXFxZPRUZ51ZiuD6bhuynHCnUvp4KwGrJcm6mad2WhKmyi9uBa18of3",
  "key19": "4HDjBBv4TrXLzPsRunQsAAMhSyXFXoQFUhncy1xii87AdiBbZ4H2ii8ktbVJTEV1CNnhFjYJkMoC6CuRr6a4JVWQ",
  "key20": "5Zqfq4MwumitpcmhFeBttDcNK5s4KPfAnzR1jhKrvskN814ucpT7S1pFPntjv6uhf7SX871CLzXmwzgQyGimq2dy",
  "key21": "wTqXnhb4ZpZrmSXq7Kp58C7FedE6mwk3s3A8DgcXXhN3rryJY1CkumHwZjndJnpH7so7WgrkS2vRNkbQH5Zwtvp",
  "key22": "3PfQTrkaHvrJDNjF7tvPzdvcoZh75mrdxWLj6AEx1qSTzHV6FVmq22rCovjdUPH4LjTjuTXzoCLvQM2t9imiWiao",
  "key23": "2NeSVkN9ZCqiRPsDkKMt69wwB5FVtKZQah8o3c4VJ6YeZiJYhvv6N8ZY5iH53qXBbpPey3kn5kWXZzMJW2Q4WCAD",
  "key24": "5vRqtSLedTRqMBq3HrsVWvUrp19EK3yVZaUsDyqCMwz6782X2M9RNMxZuBDFiB13NpW4hmjxiJSS1swdnKbu9vee",
  "key25": "2G38FVXCHa6SC9YF8owhTbD5irB1ZraEWXMdBdW8fxw2WYpXDnDGAxbzzM2aHtqLgxipgEeuc3Q2GLGtTBFVL8nk",
  "key26": "4dHtNF8SWXHwJRe9btrrV2wJj9qBVX227ZwzHNVF1EjrgeRTcS1m8QhyEbNasT6kj9xENuD2Tuerd5EQvCNEQC1X",
  "key27": "4aCojWAC6WMtJaGni9d6jSHnY3ze3DYQkjqqjtkpUrfUnkYq7c5vGqc5pYFbQnQW2AESdxXhM8UvgjcBX8giurfy",
  "key28": "5TJBExkWaCDSDSL1VqwxFdTp5oyPoCg72MGweyHMMKS8c6DmwyYZ4745XZhm5DZexCypmgLNfJboMtPXemzbWKHZ",
  "key29": "tpEtrdBdKZFQAtAnKxmduHfKcATLKc3mFtc69AbbjGbj4WynGvFCSpvCNfhwY1MFDHZVsTnhAoX2koXv5y9uv2z",
  "key30": "5QKh5WdKZFK9is9PapFAGXdT9GxoSKRfBkyWPGLWJuJjWRFLkTEbajyxsrcSu29wjzU7MVkJXev9avGBY4r2jJGi",
  "key31": "2Man78yAv4f1zRxr9t8DuqRUspzQe2aRv2MqZ7aFJCvMEqgvjgvNmeCpCA5HkpYUUW7rLYrFan9V2ywkqbJBUPyf",
  "key32": "2tNfU6ZKudXtmpJsgCD8NvMLBfzUVhXS4PUbKwFwUNCcm1d2BuybQAmUJiK8QPKFqJo3YsUWYDRUYuLSXfXYoB89",
  "key33": "LvC2frCihUFyQkDjx1tJi862FEPrbRq3G22xvhSwwWuAP5NtmrmTQ6dnmekCFjRs7LAjKy7RFNQ2AhQ1wL9uqbb",
  "key34": "4pjTDWxpUGz1GLTo6Pn3Q7oakRAn2f9mQcHSLroMNMbMfzCRPFKd8wntC66zpWYuvSSXndWC2bZaHySWKvKikfjv",
  "key35": "2odfh4FPAAYexuaGjr1Cy1rTEm8bDPJmwXZGNfjT9PCUw198D3kGNWHC2pWB6iXAhx2Aey56JiSrxXnd747MQo9W",
  "key36": "oGVv9ZjrS8iWugk2xxZEerxSNi61kQM8UGP7DJ33pn3pRhjEohN9353FTbSJPSiWcWvj6YKiuZ3VhctGaqtdEAF",
  "key37": "pGdg9oEcUKnHgQo6bEYzWqM2fAVHjox8GpqaHbTUnRntLZWxpoUiC1uab5TL3nrbc2apsNwKx6YBeJRKMcRV9LW",
  "key38": "4EGSiKFUbhRMkNodvYkatdVSgnvGJaCsdUMCMcnmvJLqpbVAnjQkP9jAiwgEGkfdmD8KZBNYhaB6KjSFcALyKGk7",
  "key39": "5bmetTXPSkvmLSE3KwDrYYNP8LYgAGqxpMAjJeMCWNVhcbrucdBhPbhQajcG7Ebe55ErR1Rg5pChJzheBWvDQngx",
  "key40": "3LcMkgf1SGVPEvrpxJnXEo6RWCTAYqxrsSkecaN7vMr8YrNq8BjEg2fGga3RV7ms56xGhQckhja8RMqcHY7v2Hwe",
  "key41": "JEgoFFQmYVQjad3B6UQU6KNPkTpUvZgzG9hvkhURZJW3N7eagFpAKjsTxVHpuxEQcgiprb2UatjeXoxDvL9FoWL",
  "key42": "43htdhDdqTQJP1ixCdgTz6fNp2VvKsGJcaMaUAah5Eq2Jsk6SaiRbL8MSjTVAvqStUZCuB8wRTW9H3hZRXJ5bAk6",
  "key43": "5GJGkaJtTTD85WQDkhJsddT6T2vXY71k2FN5GWeuzqZMTjLVC6wdeseTzbNhE8u5makSxkZuscg4xTnJfHBTNnxr"
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
