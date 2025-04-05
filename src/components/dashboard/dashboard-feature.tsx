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
    "M8vyh4yhciK4vt7ZwzKHmBJpuyUqT94FMzJfFksG3bZyGNifpijwkwmyC4DrzfCqzUSogEWm5RymWWCYnwZSPx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VzBS7fZygJq2ABjynoTB4NVesMvioP1mX1bKCVtYnAJsFS1MMCvcsMYKnwMwqEEYDtePcgeM4VKRv3p2goLbptM",
  "key1": "4EuUSjQxu9Krm7zZGU1srFhU1cxMcE1dtDt4cP6M53csqeMb9YSrj5YT6Emh3733kPkyJPQ6vLuKKRLKHtEGmSik",
  "key2": "5LscmLQymUFmcYgN7roykFTmaZeFY3A54wGdthScjzzw5QRTb5oXWtCTWsxLAq28VwErn8WhxPvHHJBX61LDuAm7",
  "key3": "2aqMvPEbSojuLeE3BWBD4GGghy7pnqXdDeQRjCK5qAAogfufR2RbSmEN36H7V19MUTyYEJ1b72uu6ztmcnYtobkB",
  "key4": "uNdFERodYoAuQKuvhZqQLGiLbsKo1SUULWvhBSsaSF7qCuv2gstk7ezdxdUuR5LqPzPJzwVLAr5t6MopickCkMh",
  "key5": "4ZULwx7CiXgpJrFtVcrm6tzggH96HyffzXnKSzQJJSPGTkeNBsN1BryMNbVbwiCoKmwtnieHjEYVhC3Fh4JJUwuU",
  "key6": "4Y7dpSkZ6nNSbARXYaD3CTAQbK589mg4h58xygY899ZaDmJVRGpdQzuVqSKXTBrBqretjswTs2UJBfQ6PXne2tjv",
  "key7": "79bpU27T45w4H4nb3eyWedofjTuCzT7qkZfc5eGs8AC6b2BS2iZu9eYHAdQ6Q2NZJVDGLyA1KntvW1BBvKEfyH6",
  "key8": "44pWicBRTX4weR3WQfG8LBG8L1cZHtYRWNFBbrPwzrM2Deeb5Gz6BxA2ireQnDDZEjM2zYr8bcTwsrrfagq1pPFw",
  "key9": "29rwjwp8B21wzovZj2Kc9ezfgcehnTCcBFCKk4viZEypMUe9EauycuXj2xD1fsUeGywfvegKT7KJviGt3PfQynFg",
  "key10": "44y2RiidH7p1ggZMYrSfTwSePxu7VEpWQWeRg9Fyp3Cd9nQqZbP9uf7dNMR6o5cdGeVx5kRz5YuHQ1pHNZbjdYjG",
  "key11": "ENkJE2ZhUUMftcJuhTKAfspWhweV36YzpUbg2qMdWQ8x5Yn8twsaSrWz3s4FS6bwp4mqvdWW4cs5TsMY3Wq1NH6",
  "key12": "3ukkBn5wJggQ5uR4ij2PjTKnM7SfBRAQjMXt77ivaCr3AujDgZnazeKpCdvMqytJU5GAmZaU73QF1qsWES2eDtsC",
  "key13": "2hqn3AoYPpc2VHe8BxL8YCdNJ1qxmpGAT4c2UB7zPQ5CP1np52FYXpWPqYZgbvocC2xk6XjBp6YMXMKobGNbhGPe",
  "key14": "2ohYq7EVvZe2Z8hgaz9N7fAPtPE6uGWW1ReWwLg8rMDeZdxgRP7gs5y8Zu8GXp1U4EMxVUxXUKR5V1hTGqCKk57e",
  "key15": "3KSeLdBXgeHSTNfvdoRApUohRCngiNo2fcFwsfJEWmiUynwWDJB6RPQQArz1RKo2UfinyuC1NLMdo34sABrJ7iCy",
  "key16": "3vBekSjUKUWy226Xp4rqaiewue45T1FPZ1Q7MsTpK1w7bHzsacpaGahhx8aJ7QhUrojejADoCh6mbZs7VY18acfw",
  "key17": "28iMh1V4japFzTRAdM8nZeM95HaGoF4VkfPAYTXAY1yMy7mnxPP24tsCHfZwpsuapHCkVAia4mr7DzUKtxspRGoZ",
  "key18": "XWi6S3vucnhi6H9KzYgu5sTKL1i7hUVBenxgbXHkqQFVKQH7K57wN8KPYqH1kc6Hm3sj21ny4vTYtVaHouMxZdG",
  "key19": "3NcgUxPWBeHaQfrduTswVN2Cdmw76fd44LwdbBwGC5yUGZf4RmEAYtfyhjYGMVBsnUY4tJnnY4gQReotuRJ27kCJ",
  "key20": "5E1muT3SJCUubCnwYLyaYCCveXmeAPvgsvKtZA5ntHPuUcT6x87VkNJ5GQQDDoQBcjj4r38FNysjeUwMU7JjLTbz",
  "key21": "55vybPTq4nWQx6PauT1wxifRMdCBfKoNGL6oo73NCeWstS8MzwaY3QAjyxJuJ73rfpiB9wkpKKc4MZ3rgr9badbF",
  "key22": "kWUdkFkKydTxt7TCeGJvbuZ7WSnQE91SrmcaCDjf6Zyed75pfAo1qWFfv3D7vDDggpSEC4jouSA9xG6N3QyD8uT",
  "key23": "4HJTWiCH5u5YwoFA6yQfRfRqaP4mBgUP3U5ADGeKa5FVy3mFhLvmuUu1arN4UvNFnUHMzo4TKMCVFeNfFUUPUvxZ",
  "key24": "2HkDrtvX5UXYLG8uJW3DpU9eDHYHdh6Ybhdrh8dMMCPXUTgZEb7UnH6pkqVyN4F5EgLSbSA8GXRkE7XuYpiHWBHW",
  "key25": "RsQMaNkRbe78bApkkFuMozghtHrghkryh6TXhQQxVuWjU9WipA1zLCUM1zeyWKUiJTR1upwbHWL85CWxVPueaMV",
  "key26": "4SoXFmSWeSfMMrWXSnoy7x9g3fbQbe7qTFw3CTeBEpaFgfun4GsT8yvkoffrvMCdR4BYXMvvpdQwpzVUfoDVohvg",
  "key27": "5XHnEFRJwzEZoeAGLjnSpGnPZF8aJgz3gmnNzgsd1aRwCgxUkBhVxnN9qk8aJHu7puvEecuBdLDqBBsUFsWCAqEV",
  "key28": "613ouGN2w3Ja97onkbR6RojbCGSj53H7bsqtKr5GazMQf1bbAAj3WC9YSgFz3rwLx9kmFy87AZ4XovVJtABk3w41",
  "key29": "3wtVhte9xPAzS8WcYtZuPNv4y6uVmrQ5v54N2vGtocw1dJvJDww3uNCK1Wi3NNgDxTw6PwL25nodYBi9JkDkyDHn",
  "key30": "4VzhE5YVuve3xzBGyRRXFeirtUVadmdnswMeq3bucxsVWL8gtzgwHtQyt72UXraBHQPYXRoUcqnUqkyiQcXwrfp2",
  "key31": "3uNM789cfuJqRXNW3yo7qe4Gdf7TRdP6ZC6vJomiU4c1wjcJ8bRVFqxGohzUncsuRFPMUWKGZQsVXwokCnjAFyfz",
  "key32": "4r2BZPdSJkj6CQuHDwX3vchw1Ho8vuGvXYjovkERUgXRfhmej43bDYkc8A4kTmFcT9toRWoihiuzqLyVLdySUAog",
  "key33": "4TtHXxBScsTCnmQnZr3Rv4xbxLxQwVuDUpM45VqS1cKVjWP1T3Z7tBzzNv4yEYCjyTnNw9Jh8qxSi4VuMZVf8zNZ",
  "key34": "Ae2Jjgd6MmbyLxjdgNjqF6rsyqseaiTugve6137NyB4pU43gCGejU85VfyZFsGKdN2DGRrguzUaShx4VkAskjwt",
  "key35": "2pBxcNGoZr7XHxdi2DZhb8whEbBvLmK5i8vxsVnMQRwN97tNvepG8nS88YArCEJcMvGNrsfBjY2XzBHkTuPbEopR",
  "key36": "47k8JiWKRSoLW9ZPf6UHuq6stYfcpTSU8tfY1pYYKHxU5mvJkNGGNoJkniup9N7VyMzyipRUvdUPbJZ4G9ryDwJd",
  "key37": "21mYUgaz1zjD5Ssbu4umD8ATUfQvUyFjBDCNV1QT1VTQ8ePqjLxp6D4xEpufNPWQSmmDdoY1q6zFq2gM3MERUCP7",
  "key38": "3vswgNNu5bHG5xcV6M5ynfVhjZHYLALMiKNNgvQVqoxtXgmZCoWXBWsfhqwRgTKTJ3eFB73ngKZ497WzqtHR1RyT"
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
