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
    "2XCJAJc4sA1we5s3YoNp6G4ix1DkPfR8vdvU9KWpsJzk8Tx55PPnXd7SMB6vhRYWQaQhLp5tkaLCTG8fdd5iaWk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y2f1tVDuBwAGG2LNM72WZb8THAHvJ2WusTqPeFFTcFYUMkhf7LesmQP6MkDNwDXEuYQw1ctoTCGqaHakeCszi9D",
  "key1": "4poy2D5RU6RSMjfQn3U3RMuajMkXK9Re4ZnNLhJJCu3iYAUfX3cPaCvtkAGfJA21ywaT7j3x4Dkmx9jvmCanLPwH",
  "key2": "4yT5PnsN9Srqqs4mVsQxXdQGLDgkCupUTouermaRgFFycwJwDi4Z5wZwDg14ie5qsgk7zTipyh9dRdQ3i9YgoAmE",
  "key3": "61Yx2iNVNmpfSt7641zkWTTVxsF6juYFyqHaTbx4e2q6td43vA9DXAipEsjHYbmydtpgxwmLUvpmLDzHNUMVyHsA",
  "key4": "2dYbnavqLhh7RWREQTqmPHoQmcWAmyCUdz2YThhVfviDfg6uvJaSHuWzyNErNqDo8Ytdra5GVBB631oqrQaSfn5m",
  "key5": "4WoeCf1tknYHK4pfV19Edg7QXLLj3UwvAXUUhiiiMKyKv3TEFyTd4GLGVvCFoftrX9PBwjtheSEkaXPV8Nb55Hmr",
  "key6": "3guZcSCKdLjvaDesuMj7AQK261Jnf7fTVPuSNcogFrDrqrgKxDqv1VusHhCdoNJWi6fHRjGQ3j9KPLdeYUbtsCNK",
  "key7": "4xgrSwePS6mhh7sVmLDMiecYGLB3Uz6Jh1W6KMjzUPUVjbREGDcXrRCrwhNuYugTUhuVYRbVPjuq4MuPgsuxZrUg",
  "key8": "4AgeUN7YcoMarZEAXc38K6vkHMVpjTVeaCib7EvpE7D6AqbTGsKYB6yExrs5MRqu3r7AEmcZXM7pjaL9ETLQFbvc",
  "key9": "4MgJg6u6rjN8JzNneNeoeUrPQ12ywE3hz6CqbQYSvLRMWuqpejVxjgiAhzjCgUhUMfUzJadj9ZJccaPMPYWA84vw",
  "key10": "4G2zejLfKRURsgQLDHSQXqm8Bu6ZLtutpD78o6ind42bvQbXJf3ryNLPySk6BUiapRH3nSUsqkzBQLSRUhYJ8GKf",
  "key11": "3JgqX8g1a4k3Qk2CFFKJZXxZLBPih94dyANwSXJWi74HZFrbuudkHqKsKpkPHgnKooa5tMJQvfWkofWm4Kz5kjZB",
  "key12": "3xdpoJk25mPmf9ZLqMZQYwLSF6dPqDjbgbH2nL7UZsdHq49Vfr5guEwMvJ22pYdieTKaUa6F9LBQF4wLdTDmbLUJ",
  "key13": "5STedRYs4xKGBjgegG3oUsTf1cGDTsN84PEGdByCtR5Pr7gWBMrNvA6SmqQWCxJz2dGM5yA5XfKNsdTHqLK1GHDB",
  "key14": "7B8FbuqT1xVSJ4SkyVKn2Mde1mLb95Eii4qgLr4meVGMBNf9qYjniSDGRSigcKdSekkdAg8uzyEr8xfeKSsJegq",
  "key15": "3GzkLSRvFAR1hBKxjUAv9JyXB8py2adT5zpXmgqRcpNqi6mTmoT4jsRUC3kGCkMDZMtwK7h3br6TXs7bg3ZpVLbh",
  "key16": "2fPbiZhK7xWSgu8NY1pTuTjxcRCcFF1zFBLqcngsbs8vL6NACsQzcXXw62ktq4TswRVf9QMLh2RV8bzcqeDZ8uGQ",
  "key17": "5AcNFSDyZB9XNP1WLrxWSWzVj96votAaCWr6u7g4JA6jJkoYERx4Pvju6A3ji5hQjAPYHDtcycx4SvSRQqCUWP6s",
  "key18": "55VohM9vnpsdEMNmpFuWvfueSyUpewKg9oWu9sdJm6F1fKUE5SwN4foaVyLWa4XybQQ7AeRNH1fnr1mq1HSSxpLS",
  "key19": "Bmph6AieYWbUJ13myGziVJn5pgm6DekYnkCuZgNCXwu8W7vpyqemGDR8o86nkV7U2NUjWGdC4pCSndYPB4W6mt2",
  "key20": "2oyEbRoaVMvjrPby31b68QzfDD247adCLPqNWU4uUogN7oy5gqT3CJwGj7jteiRqfpZsiWrz72xSZTK3mmk1ALy8",
  "key21": "5GAwVPvNx6kuspyf2VEQ29t8mtFB9MaMAVKUPMFGX53UBHmxpqGTpZhS4iedQ7Ru8Q7bTYFLxYMUsDLr9K6JSu7a",
  "key22": "J2DH1KzN3ELJn9fga3Tw5JbmwTP7ha2F8tN7sLipyEM4xQKhHa2Fo5K4F5akWRCgdtgCzVtx5ZRAzorynCUKoPZ",
  "key23": "2CJMybtEwRs2aoLVHS275Wmw6XtFmZKr9QKQLeHcHagZ7Q71RzpjPG29LDHmVkY41ymCr7yjnd4GmsHKCFPza73P",
  "key24": "5cbkHJaFDUjyTGdiiefPJab51uw3zGbTYD4uXYKxyLoM7R5WygP4u71GQnGFKPgKo9ksYqoRn6bBoRduhfPmpJAB",
  "key25": "66YsX6MnLvTjABtcoHdpovkM6XazGc4dJp8y89qkbP2ZxaFDoaim9tmeuYR146wSZh6vNF3pCQcqLwCgP463Hfs9",
  "key26": "3bne8SJ8VApzrpeKQcumtFa5oVKSLFKPsw28QXipnoTPFkcNTSzVZDbyaYM4NgNz3ono5fo5Tx5B24NfkE8cjbTT",
  "key27": "4HckncJVXzULHNyE13k7EDtLJwqeP5TQv9w9vptJFMxxPMtFjEhm5VwyHp3FLm6a1kd5cu3xg3x3exQthSRBXn85",
  "key28": "2CUjuR88B4MA9vhhAm8CtXuF5mNhn3sE9fF2aQ1SNdHrF8N8b9sMGtDsM2oyStJifz6sG5GGSXX4HXmSAE9xkUif",
  "key29": "2R3fjAeqU2S1UGS5hKTXX931Tifi9y1vmUffLbVsj2xi5hY553YMJDb9r51311QQ3VHbMCrpehCn317VZoqRFDd9",
  "key30": "2xMz42XWnoxYT1Q1iDc8HdPS6U6448ntD1BhrmuipkpoGJ3zxkM7xT8TkgFmAoSedV1K22kuQu24ZKhAM2kPG2hx",
  "key31": "5Ro8brJYV7hoPJUdcoxvNP1tsc8B8eYzgieqiEBhWAmwnLGZ1UNu4xy7X6TCVaYmkpoM3VrMjXzJ9UudnRodZY3G",
  "key32": "53EBLxY4r3qBJ53CYxxGbdUG8nz11X8N9nBeCCtv2XkcjoZMQxU24LfKc8Rut6oKntBWvmTAfHkgD21iXkr37uU8",
  "key33": "4HD2QcYaBNEHVjw36vaRoheF2tUsj5vXEhY95BTRcdSGSThZgCharYPs1n3TPqZvzPMxAs6RwN3jB7MgtLfMNB52"
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
