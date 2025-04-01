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
    "63nJycDHY6pFDXCoJSfWZvnzNwV7cp6LqHDhWV6RJXMxXd8Z6jHJEtLPPwTmR2sigoG6p4PwcoBvYvm5ddcquVqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbrXRnkH73k3VatsweNZwYX6ihsiXKZUGpZfFv1piW2qo64fXnnTiMR6nWfZh1eUYmx2faqGbfwvaAcVEqMhvUx",
  "key1": "2HX881YUTLDtwgxC2xeSkd56cQuMDCcHdRDPeFLCgh8bZTWFTAs9syAUiFomhpu1oUuUBvzynwqPNUR4MX4tEsh2",
  "key2": "4VFBrAcREoxRBqGgK3KQbE66fFsnpc98p6GWNC1CDLW13Nt9ZgxGEWTLVARsJQ18c7m5HKXhQsDhQdWH1JXL6NNG",
  "key3": "3tTGFQeBWHgNK2XZsFt9Ho87LnH5VAPuFczS5QDmznix9tjrui2NmJEG4yhSiWjwpsXb4Z2j4NN7aY9ccNoNYAcn",
  "key4": "3wQjF3WPg9i124PGEZU97CmcGKmceekuKVDF2mt8iuHnkeHbbuLSoTdXj4uQXBMioThf5jRr3Mtc8HkLA84RPLYE",
  "key5": "4Z6JNBTNevPEWp3GL3BCLX2CpaAHcjDVf7eXJ5qED3LkAyF4CxzBJvwYcAMTRfyeRr3zS6i4WEALLaQ5HkJjdS1b",
  "key6": "vwmsECaSP1CVbuTyD7duiSeVeZobN2BkN5HiajUD1BgKcsEtNjvJeyMRZVnqdXgmxGvN5AxP13YToZXDds3iDFo",
  "key7": "4twoTxqdL7Dm3vSJZ464dzFuBqWVSsasMzHmbRE1J9NgWxZVXCgJfKDErxXq56vnHeZUuZbmBjFz8F7asZ8T3Mfm",
  "key8": "ji3AiNHDgGiZMLYsGBdT91NnmfH6MsRBDCYNmk3rBYVvzE94YjDs4KhSYz3cAreohhrKDFXUWKjkxmSvtDF6jvK",
  "key9": "23bvswbvNGJqZ2WQ4qVfCvnz6PorRMTmCAyTQfBuMRG7eTaawQJxV4FXfQed8px4HUE1jJkujX93NSrfasnu6mxa",
  "key10": "2xBwvHgiotGV8WnFrZAZV9QhMPo9udRRoNe9JFE1wrh9RSkS6ozKWrcoRKz7B9MdZhL6WzJ1Ur2d2nVwLhz9eqLs",
  "key11": "39PDDRuCAdyv4eweWgfVknfgyhWRWWCwWMrHT5K5m7R4u65FzickTxB4SnF2M3zrCZpaniTy9yaTwfgKC9fNnRwE",
  "key12": "2DZq564bHdkr1aZtCi2d5o3VQfdCJea5E3DARyRg8S8ntb4Cy2SqQPp6eNgyG6KqJFuwxFcmk11JDJr3bXCpUibV",
  "key13": "2qsjSaGQ5r3KYwGWRSQc79rciwhYMudFaemSdAJ2Gxa6xv5DMh9wC34BXGTfdn8PhnhmoE5iQj5yKBQe8isREge",
  "key14": "5hvKyzP5sAKemdkW6ouR9TSvRtvjxAp4sWZeCJi69iGwtyoqCu5J1JKMSZftUMpc5zKKb15P1Uez9PLWqMJ8UXAK",
  "key15": "35YXHhu1Y6jtK4BdoPMXF7Z7WqQJjFtSvhsXLAzRBMGpsCz1m6HAPemvwt8Smk5mALBBtzogiNPpKgLPuWDVK5QD",
  "key16": "4e174mqGQ8SUW3vfVsnJ4qycyLytS9sMqu2E6taT2cm4evixpP6b87Z9h6LTg2HAA9ocxHxiDSDLjGCP1cgn9o91",
  "key17": "3Jx2k3M3xTBj4KscW7LSuisocJnvtojjkqMH7qE3QmdK4Eo5cZcG9foxfKr27htXk8Y7hjnK6HEaZrQunt8adHDp",
  "key18": "4x2GFqYDsgJ9a2ShNBvSixkYzDXcRDtXjNrBtvop1VkHMQ8z65abdGdyzSN58GLkYJmXPxT2225byY3sof9anzgG",
  "key19": "3ReXN26icDhSTZ1a7sH8pRy1WQpV9LiLsBWrizTmEDK3apif3b7NuCaHupHDr2BiV14kHNvK1BdSAopQVF9LBWQJ",
  "key20": "Vug8w8vryPc72fRwuvud9novV4Jd3YZDqWF5Xvmk51WaPvbXe5UYRC2tS7mFbXLXjEoPAah994boJVmvJxxvYPf",
  "key21": "wUEQA65mzpDRuLG4v4TQkn8gsmvwe87jdCMrrG8Lw88LUWoQdQxrqdxfvLFCPSrQV977onZwKEqGyExbPsir3Zr",
  "key22": "3hb1H42iR7xpeT8i6rFF4rihXQSJfEzDNDVuTg9FPPQh24wXcu6gyPyDv72BLWiHvwGW6BLvj6NH716NmCF7dAyU",
  "key23": "2Eu6msr3KZpqCm59MKVVonsto8iHPFLSjcc53ttEm6KRDMRCZnQUdzKmqW8cUMyezRP14KAi3vxknQAq4HQR6FuS",
  "key24": "5k6NgbdUR9FPgcs6VuVVZNVM4rEHZnAWCs112Z5sH2xMFDVKb9TZgzAWSgrVAhtuERqNAaqARAE17eChs2MfAmdr",
  "key25": "2HxhyLR6T3Pjds15ZA5NDe4ffQYepcyC1jR8yaLCHNjEzdNLDDC6jbNgejkThR7FbhrkVSv8bdv475bwx5CH3RTx",
  "key26": "3t5HB99KmAfVCRk1QZLPPgnQ6B9wQXSkofzLkz77RerBNedaUJfdVUhd4AnEQGoaooXQ4DvuvNEkHBjLoEHTyUeB",
  "key27": "2GzYr6znykWuTqNqKWn4D63yD5tj6SX6soUcWZrK6CbSrfDi4vKeXcT8ufW6nwgq2AczjN8VLw1ATCHo5fbM4S8U"
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
