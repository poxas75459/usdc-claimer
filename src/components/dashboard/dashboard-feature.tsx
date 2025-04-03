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
    "4WrdNE4SbbGXii93rLRUhXGm5WaUmh2jtEEgWw9CaMWThc8ZLC2Wr4QRKyF8AfaQ9spkmEZkodBeE4tyCuEi6yTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cd7VAZVStCxu2jHpHTekLFUDh8ix2YdHeoPQsBXaT86Fn5gWWXnf6j1tU9JuBU3HqtHFLuybJ3sk795fUSDHLCW",
  "key1": "3m6Q53bMzQet5BQEar7DZdcRc75mwgnEcwQZQtd564K99qHFBcec9Uufig2T16z5Xn81DRwbnpC8cQe1FP4UC9zH",
  "key2": "27Gu7AiAtqGDKREwX1xnTmSmx78jhapXs8uT8zhvA684TB79RWwcf12iEDk8TGg4x9ucEC1hEpSLHt9rxCq29ayE",
  "key3": "5vvMPq37x8X4QzcM2Q7X91DiDgiS9YL4x6oDDRzSj5pDoqpJjYMUsLEZLP1ZYJEcRraVtKb6nVqwM3jPL1RDFVvL",
  "key4": "5yABX6XQFxRA47f9mdbqW7UHbkRrXV58Gveo6aBfZ7qPkPo235EJE2CvPWuBvR63jhGscSyqPKRhghizqa9hBwDe",
  "key5": "4tzR9Ysrwt53a3vcNrGShiRy176kUJiw7DrdvzevUSQD3uuwdXRux37sQuk47XQR7cdQH9XSvUhksxe5vDpMkuEM",
  "key6": "pMrHPEjwe7SasvNHP79n2hPUgdYksWXm37bo5CDYvcCJb1u49FitHptWHhPrpjresBaUCBGdjh4z11o3KZxgxww",
  "key7": "2FAnsmbAFEcmuimXojTj9MJNo4BY49Bi3jkJRzdmiyVH1i1sUemBPrfe3sZyfAnvT4iUk1rWqxAdqcSh65PFc2CK",
  "key8": "RDwWx2ofZQ7Y3C7V7hNNZP3cBbdYE79r6QBZ4TkcFNnCG8jYtzBjmj7dKFtc3k8baunKLpaCiyLP11BiDBb7SxL",
  "key9": "5E6npskGZRinmgtqTUimKgJypUxYKrLkMcLAQu9kyGmzN81YNGuL5ingua5Y1XmMorJWPxAWjqtLDjQYXMDVSjX3",
  "key10": "3z27pqnL9ioE8Un6i2aMVg5YZttTut5Fsm5Wj8rx9NiyZpQ2WkmjxUoRxyDwjY9LdZoAaX4HGCzhxd8rqJUh2Zi2",
  "key11": "56iHP8JKNJPyG1tWSjuUFyjGT3mVQg8qRNoaH5aGbH8YpUcEuzCzhEAfa2Xtiutda86J1YbhzZAoHiSSeaKdQKsX",
  "key12": "5t1H8LoSGtRoS9zMkhXZ6Fauwny3phHx6oiX4nEPHZRs76UTm6A55NsfTwWtLWroasXjyJydzAN1wbXyXiX5J9HG",
  "key13": "4wgF78Z7SyYXjdTuwW94qNuVUqAUPe6oZS3Uh8MNcWqUscEGWmnmZSBk4aocSYSfak3ivr1KB2vBTWRpKpjgoAth",
  "key14": "nD4k92ZK6PeiCkEa3ujULjkZpKWij9ThdB1qtfFJth88zMM2fjTKY4PuM7f9qTVJMepTBuNFMxFjfu8ivxkgZ9G",
  "key15": "2PAuzKsNPHtfEpRVwNUchk57ZZkMeszWnHSkfGe8S4npmbjzL3nTWVo8pupTMXKFwfFQgABMyD6eEgzmTDMa3arz",
  "key16": "2ixaKJvczCs6iN1dpzYRhRqe6XGDD1251LvpntBKJwXwfPm97gJJ7dFCEHNykMR5j9ZqL7JRMEn3LyqenG2tF8ZQ",
  "key17": "5e7pHDQpPAiehCrcuRYCFsQHL5y4kPKgDaE176cnbAUnFeTrD4tGMeUuwaB2nHKgoBNfhVWZQKyNpzC3C5WqoB85",
  "key18": "4hkt28912kt1w1NJM9ujZk48sdFxgvYRwbR8E2nG3bomxc1Ao9fcAGDpS5HWp8ot51Cj3zfYMW8Q79fZrv5C9Hyk",
  "key19": "5iJQxjfau181mR7N6h3tz5BMQCWYdufiU5qk7zLgmKorMeUevckbuPMcHuSrLK9ChFFPZ2bsnFFmZGsfMrskuVsu",
  "key20": "3xsKgS63Q3Lrkui44WbJUTEm5wcQvLcbcYRjQjgY7RhNxvov2FGRbW96ThB3fdVpqgRebfZHkeVJ6KhQ2QBd51ZS",
  "key21": "5JrzXPNK63pE4fTVEcrXVjocxfh3Ai9Yi8wU39AydEhpxpuyWEyoLyBJoYfU2VGw2DppgEfqMuuRoMcyvvS3FHQS",
  "key22": "dEp4YEMdXaMdZMVX6n18Bjk7gz9WjstGLwck3iXcJ2T1CJnhSmTbEkamXN4hEVScwkJ4XWKjkGmv2UFGpK3iqGk",
  "key23": "4RbtMSMpkBf7uoGdKeoY69oFpEUZu3brdibp2PsVJgmNEsTa59Fb9nC8Ze3yUKCLNuRrLHYQFWCxcFPWuN8TACfh",
  "key24": "62sMBS7mpu7AdkHTyiodXCfpswJbujgQYqwhpaQ87riS16NyLEZxPNURsrvkUovBjxz6jvqGBeh5YoMjV9cm8uzF",
  "key25": "5pXKFeUd72jXiXw5S3HBaHXLAUGXgCfJtYgQeqKPKCbWvyNhc9cd9r2YMJygR1k3merCurJKo9enR3mx29MAHrCs",
  "key26": "5h4iDD7NcJqPMFurk8daajKS3WJy9qbZPmbZ5Q4LNDoDFpnqDEKyZM6uGAqG1oJ4KVisUXDSXWNDVHF81FPdzxRz",
  "key27": "5RaomStKde3yBvffyNF2DQvsXkgDsLi3RBf7oFosFzcDeCBW6TZfHtentT6rM3NABqNc5LVDZ89He1jk7K2f3rLz",
  "key28": "3R9dc5S2HyHm2K7pAccx4xHVzxQQP7jVLxDkoK9t1SxyqZNesitUc5QtGMLuUN27hhrjMA1kC1w2hTT6Fe2c7ZcR",
  "key29": "3KGBomhFrBeVbgxaEJUarXZ4x2N9TXVrn11PPCAdUHEeLnNEcsSoKJskJLDMTDinM8YyX4z3mHfPGTrTSH7jujqo",
  "key30": "3h4kZFGGdiYF2fraSjSbLU6S6rKjMLZctiDoAGayitAYgB3paMQnXAeWVNZo4AYa3L5hnFrZ5GuFDPNKZHzxAqx5",
  "key31": "5gjdGtUmYkL75wLYbD1Gz8a1GqtS2neWvUhVKsQDszguAG8zGSFe4PyWa3AfMQwQsM9jv6GiXqLqyUTtg2R6WpxL",
  "key32": "4NpH16Bg4cxPBPSUA6oVbxF1C4R91nFBHygB9LwAjtk4EzuK3EFDKFUeooSu82w4wXfbcLGM3pdwTFbShPHQq7NB"
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
