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
    "5jVzWCRXAutHc2Q77GGRzBSnKkTP2rfv5MD3owq45Ky3bJ34ugbbovHsUf7nXDN666PHCfh9AtPq7DGWWmUfpQ6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgUmPNXsa9z4WCVawn3DNsLvq8q2psCpjwa92f45KNUvzBZpDnvgPf7mxKjhiBDaio2gMvhUHp1GZ9B5xdwc5N4",
  "key1": "5XsVom2g5AZf4uD6svBD4acSJMceGVjZkEwHY7jbGgLgEDn3XHrKGZzS6T9LBusgLn3AC2sMCJmkZuvZNMRtqhrQ",
  "key2": "3Y1w235Vb1tN6VU94rR8xoJDknq1rWA4zWnyuwZuvNfTGTJkeWgwq5NjSEQUNo3rFZrmjD8cYa2pfjxqzRm5ySz5",
  "key3": "3g7YVfHC3bacNiz29KSC4kvvfc7RuaGRouTbkdKUMrzFMGdSugeWoQJ4XPNmKf6M8RDNo1GGAZiPv2ziyRJ9qYGs",
  "key4": "5cUpcAtVNCbyvbYEmz5uvp8bBtnM35fZkU8fYBtr88kjsnZwQNAsqQQsocA4SU9EsrHZmqvhKTG1hEqwyrhkfgzC",
  "key5": "mKkJmYXsZZwCZ81NQzoLon33pd3eHmm2hK9cHkVWHzWNiSPqmLVnJc9JsRcpS8GASTmL7vZW9XWuuWr5yFR9Tea",
  "key6": "2dqSeHAetCXBbWJKLGtvWWXNhyDy28h8TjvvNSC2cocfr9CXm5b26qqSmCaZnFyWaDRDHizZLXaidqVtJAWLdHQR",
  "key7": "4TziTK8xj74QCrg2jGdrj9BgnfZCLMFoHZNyGSzJWodEEpApQsF17z8y3SSUHS9RVhE3BkkJBDWwQmQzu8wue5LT",
  "key8": "673j8rwDwdfKDdp9BYEDXmi8K1YeYX9bjfe9hiTZwEChaVnJsepuMHLb9YfD3vBkiqCDEk4G8FwaJ9XGdkb1sJs2",
  "key9": "4i4L9UjS2G2mMvjVAD45QrwS1nXcK7kmu36AqNFuKGMSFu6TZnz4uUxzVNQXNuDx9qP3ueh8AjJu8rbj3cBdxBVw",
  "key10": "4qHYZVhbqA7Fx1seZx62kE1tEAqofLVhqYXnYYcEENVfou6K6PntHmbzny5hZh2xnGnpSnzk9Un44bHRymGigdJV",
  "key11": "4cx1zTckNsnTkSV9wggLMpVfyYUsevYYcCuLjeUddcQqtzksKUGd9seCR9LCcCgUPJRb6y9bL2zN1M2JL9u82RKv",
  "key12": "4xPtyJjZRAdaQkhpTMob79owJX6JEKBVeH48NTJkVoxq4zdLZHMxrCtkvtGeutAhufegp8vQWro6rAxHWdZUXEh3",
  "key13": "2XMAiRbK5nGgGhJx9xK531sQDM6Vi6K3stWmw7qZECUEkTeKCiBWNW89n24FQsAxQi8xnV84R1BtaGr482AmVTUW",
  "key14": "aGae1NbJUKVg6e11KuWaKKSw18s8aXCq5DHHAm3mz8ZJrBzhUb9tn7mZ986HfaUXqP8nmuetpCSBF6dAzwDemhU",
  "key15": "2ii3NVGNtY79B6FG7HEPrpSwvW3kSnJrGhofh9igiYvC9nUdBh41wHPUPxSEoqihHAsPbqEjXAY7hMTkMyq4bGWW",
  "key16": "5rQGkbTNkRN5N1uygYtdj7P4JexUR32m5MP6Yk6uMuLtLJrG8kQ5TzVM2QcoRuT3CbbSxhDJdzKKWdBE19aJDSFZ",
  "key17": "ZDYjs7zWA8Wmz4TcbHHC2mnakg2pUptP86PDqVUd5KnQQG3Zw2SmciKLejN2k14mG5NxMDZcSovZ3zxvEjicxj4",
  "key18": "4iP5nzWS4S6A5tiUxtvKeiNPthZWk9M2pq9XPvrZAFa6AvTwZk4zyEgripPzwP1AWbxpEF1ntG52evCHEHfQRRyb",
  "key19": "4iMPhPssAVpNbCcDSgPu9nc7ff9b2C3MBg3KgyEXxTkK8M2Jt45ykTjAKVLvcpTwHmkoJ7QiL4qt32kWgsN7HorQ",
  "key20": "CMqbSSwcSLgzVCGwJLusr78Gpqzq9oera6HaCtkKvbheF1o4tc5yRPGfDoHVN99i9fcQd2LYYhpydyhtBivF4ka",
  "key21": "26LbkgYZJmeCzVRQxRyL1n9BRmQL5xPNBh3DSyXKfRCwTMVrXD1ynmjMJtinXfzEg67bNwjcAoNyrD5he7vdE2Gv",
  "key22": "3faTGPig8zLJwSC8ByW65ZCBGtqvNe5566tJ969CxUxkC6nW5UVcwBYDLt9TTvmQ7JfHLPrKac4DXmvYhdhDi4Eh",
  "key23": "bUsgGJRFh4i4aHwTY14YQAwEqNKQ9us8PfJEBAhvcAAn3YEUfpMpmsMa5yWRHE9b1adzPiB73eisboKUU9hePP4",
  "key24": "3BmZHREc78Y6tc8i6xRpZrwzYU1Aw7JraEbZgsGvbLNoRg6HesEnPJKmBnULjScVpjqC9SFuiSKLFDywLYmMRhbv",
  "key25": "QmWfMbEGuyGow55ker3PfTmtkh9GF3WR33poP7jhJ6ZDejBtJbXo9CHr8GHNURmKdkGwzzTmrdrVNJUdqSCiopZ",
  "key26": "4A4xQDhDPAThSTY1WPiLzNvJvm4xF6EK22xG7BREjcXAr6Vsru2q7373gRH7KpHKsaiSNUw1Ub9QXbsHDjF4DBbA",
  "key27": "5mEQ87hPyQv6b7F5pMgrW2fP1SKzgdDgxwRqpB6pB9Ywjpm3Sg2eRpPbmTHwsYsspmb9DSCKWDYSNsaR2tQP1h1B",
  "key28": "3tqcD3XTgHGoPhoQ1dRgx9MiTwPYjXrb6TvhToB4z8TthuYy4b6BXTmwBWqdfR2wyfbgA4jrMmKCvVSwiwFzhTHP",
  "key29": "5VSRrvLa9yo4BbVAC2btikFuq7WqbTtqPYxxpjaiETAvinE4Lq3dyWD8XLc2b5mqHHy2BYNFHZYmx3Xcm9R37KpV",
  "key30": "5n5T9J7X5tvDxjPgq6Dq1PBm7CZwnrBG5igiGV1wTjjq6PVhyWiaqHkf4gv47hdUeJbBwZ4CytuBJB6s4bjPgv77",
  "key31": "meK2xWoiRYc81jYVAPfpXnLe2ggmgD7Z4nKiaxdTsCcSYxFNdLiDQPehx4DbBLt6g7wA3Jb5bpeVeoJxZEtrr5r",
  "key32": "33tJvB2uec7AWpwpQM4FH4v8KGv1mxejzmYbodM7A1VAu4uZXVSG9y7uzjU89BRQHrpHhYBoYS1vAX9njqbGJsmU"
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
