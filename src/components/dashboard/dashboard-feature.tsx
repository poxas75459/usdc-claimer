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
    "3q5qVkyJQangkPyFy7ZTBN9jFFoRagQtH6UFLrxGYFBQhcGFRcWotDQx8tfTXNiRukJbqMA32d66XQjTrDC9ccT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LB6rfTt9Hfyo78VkhdkBtkY7pEx6nMLH1449FWVaun2hF8amUb21QrmNeZpkHqCgSiZBSFymPGTvUirGRhpT6ZP",
  "key1": "3JR8e38xPcQ3pTTFH3R9tsh4pRip6b2KMR6LTE4BR4YMYpstNGtUcBu9Gwp5kzPPNcFuDf51VRZfgjQdgmG7HQd9",
  "key2": "3X1nhzZQ7Swim3s44wUFpC4Pqhd4rqEWXKYsuFGmuKpCJHFGCep1VYurNeyBMtpe3Yh8ADfE571bxL9rSFin7pc9",
  "key3": "5jV5uRgG12emCjE6VgFA9DEXU3eGYh5iTGMYcAAqNeGrEDVnD88m6P3BUYBc8cAVTDBR8q455HfRuHxm1Mzy4E8i",
  "key4": "4CgnUXX3doAHwEpG9KhPJuMnEBKb6A3cpyrEQ896z7jy57EXZrY4eEUspFU1zrHXJpG3RB75cFwxtMww84spx1SB",
  "key5": "22zsH5517r4LhPa8g1DsLgQjfvRDhaSfhJrzwEpUyCuioYa4ig5pWuVqgrLDsodPFd9mpoBxobojB65ehhds1bD8",
  "key6": "2shhNmsh6pzcCHKjEdrgmomKfmtYspM7PS9bf7JzymgXnDVPKf7YrkMj3WTyxezNDzLsg84WcdYSE7QACvQG5wA1",
  "key7": "4pbVwC7TpaFAVxioDszhCVwN1sMozyehp3gErrjdeATpLYmDgmAav7DWGFNruJsYDeVaJJWxR6UgFCzUVwsx6jQC",
  "key8": "5ahv7noy5MnTX1qeywufDwQbBedevC82xNcHm5vJpMcVEzqn7bXZG7tQsHMZFjtFbfB1Lp1N7acq17Jy2DyTvtby",
  "key9": "2DFEbChr1EaM2yGRS8voQfZujQUZ8BpzN753YzCy36uaGJX6SUCDSKj388whtLtc3p6z8xgVgtR7fpUm6jEzyiUG",
  "key10": "4qnoqYFsyN36WbDNmVQbCsCgti5DEXTjXj8zVg5hqzRTGiA5SHLgrKhdiHK6kyVZk7wQJnJ2antZ9Zyn8toRsWzo",
  "key11": "33QVoGoBroBmauq8b8uvcFWutw3bZRj3goRzwAbFgHpZdJqbWxZH4DNADANe6yAYcJZmNr3G87mQk42QmkfYMMQh",
  "key12": "b325s1cNE6qdyfeFTZHPjSTXNBDhYXZwzTxE9Pwx1BKMHQG3XN6jhxwrLE1ETTLs6wLfiJnQvyzGbHgUxFCwSF8",
  "key13": "3f5UyyL9avu33cSrRhQ8uPTHEQRmHjyLK7XBScxNGdk3d9pAvZi7wF6NozHteRZeASSwM6GowPJzeLCHQBK5Xhuw",
  "key14": "3ci2ZUnVCi8Nh5zvaHGcEfsQgcFHpivrdhxLBzt11stbUdKLKscn7RKSG4c6vEpodnhSyPURENAq4WPpxxt8u42a",
  "key15": "4NzUABRtKAMd1cgn1UGKfyUtsVS9X2FZZs4tTeMsmTbjN7AK1oFwAAPJbbNwWtcSuwt6ERCRJhbUREUqZUkGuK58",
  "key16": "37mNZ9KAJe9hcogFgFa5MGPWJEho86uKSbRLPJRznFPvNR2z7y3CQSpJgMq7QcWYKtV5by6RsmcpQs9nAAMung8h",
  "key17": "2dGdujqwF8uBTHnEvmwMaA1cdprgjPsr8P2qVBdDKbHVtFu3gNoUah5JWTmemF67fkriTzXWeN8iywXq9Dvy7CRy",
  "key18": "5vX1sZteGedC8noJH2vnYEhTaMawjFtQwLUxBBvpFfJC4PdLwqSddEEenbEvPaEGsKzs2pq8KQFesWovv47vcfD8",
  "key19": "5CBXWmf59PBMnhj5W4esG7pKhRJNDKxrfzwx5kEJKq74LWN12j9HYSCeNhGPECLnbX6Y4HeuSKnVZfdvw9tHAFm5",
  "key20": "2wzVZGoPPmWm8MC5dzK7t86UFMK51tyoRYUMDeCMDcAk2yC8B7eUbAyVt6rWsgcGeDLWLftnYU3Fur7ULoNze1Vg",
  "key21": "4GffKh9M8gJADABSesSGJr36LYCPQH1SXJu97GfqX5SqLQAqjQ6rKuqKZE3Y8aULvGbyyGumBF523tJx4ozmwVoA",
  "key22": "539xSuhchrQ5YY4AFnnRfGbfuTXxXaMpnmaVYeRPSuwNEk5aDtz7eDU2bwrjmyDQYLeKm9HRVVKsp6KJhw6Z1m3a",
  "key23": "PHNkqm4rmViZUbb12BmmtwN2MxKecbVNENSGz2UBtQAEZRJqBfkTSjFxdjepzoTBFXqMbDYVo2yiprHcSS15kAe",
  "key24": "5ez1KMUWn4f8wpSQxDir47jMPw3gvhx1XEBLYCu9MV4h9wZ73EkasSbBTnwKjHaQw6j3HZTTcRHyD8UdadJknDey",
  "key25": "41CLDQmcTPKg14Mv44Z2YLeFYGiuiouqjj3g8kmZHapiMpP4DfMBu1go9UU3Us1KB1hn2aAGvz9hVLV7Ln79hxNG",
  "key26": "3fFgZyyz25VHH5K1oGGxt2z5PNdevXsT96CfumB4ZQzsjV7xn6FUUrqdVsWs1k8Pmq5H5f7anXkzxPxah3KiEFkJ",
  "key27": "2R6GHyL8ZNjSBoaGaV4o178nfVzG6FM42aKvGG9pT3fp3T7cLmDBjCUUwbXxNaj77hWX1uS9WwR4vYvfGVrmRZET",
  "key28": "4JhaVnnNg3JxJHTprrfata6GXp6XxNf9m1rP3zxyQxZ8en8urREd899cVadL2EyfeR8uvNezt5Xi8JQkNDrLvBWa",
  "key29": "5XsoJYfNQXoc17r6dxkpSLrmJLVw1uqd23wSHXaxR9jqV5ESsSVFn86tXwWNNqM9bRQHB7FvrEK3qjmgX5aA2Sc7",
  "key30": "5i2YeBEcAr3HBh2RyaxVsRLpGZDTYsw3DiM1vNLKKcCNhwZBgSy5zdEgREfaZ7acxKXqZg9ceTM3VBGAUFCgqbi8",
  "key31": "4oks28qBaZr6cUsf4jfZ3gr3x8kNwAaiwTYrPmPMWUPYoV1KtQ4XjwNThBBQhzazSh8EVCYrhvG7i6a7zhCYPfT",
  "key32": "5RAvHgg6fWcj7Hg1GGofom8hErr12J3v1isfELTWoWZgQz1UFG258YnUXPBuHLzBnBAcG8tRD6aux46L9RKbu39g",
  "key33": "3Zdti6m2J6dWdtYap7DzpBo6xuSzKBzDwfHPRTikyUjn4vpLb1yfgq8976iYVbg5RFoKByVmwB56UPPgZhCYQd8h",
  "key34": "5q917NYh5Zf87Vt3FJV4FLvsTJeTUdGH5JSU8H1RbzFnQEiizjZGXXuXMpY6SckGkTSR4AF5edtQ8NVhrK9NVj8X",
  "key35": "3dWj5NZJ5UipEVMhbWhoDv578zjHjfSGgPmoAXBUnzPjFTNVLGSMcvB555cE9d7aS8ewhxZbgLkEaRUU5K9hUPTa"
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
