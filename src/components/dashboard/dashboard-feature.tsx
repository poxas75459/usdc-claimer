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
    "371PZRnDcQs5q332Qt8Z383z861XvYauubroAeyrKZiaqsQy1ks6jjQGE4rGoXDyWeDs9dZ6uWVKZpZypEpErtjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTKUf8WShqwH4WXJ8CPjbrxEAcyP58BqjXwMpW4w6j3HTuwVGj6S3xV86gn54dDoXGziimLKwXNoK83ydpeRPbZ",
  "key1": "21x5dSFzr9o1dTj5fxUep6wmwVb6FTeXWfEyCCHpA4Z2DbLmQRdreSfiZmtReiZ1PT16899mXMTkANWPRkxyBi4k",
  "key2": "66SoUMv322Myxnu6e873xTiHWUcLURSykisKcP9DbAHy9EeqQ1xVmWsX7PwHQ2KgyzpU9cGtQcvcerbdz7EuhGxD",
  "key3": "3evp4JNNpeCYHytS3656wFLVsTQuMma2faAGGSjfN4AadjBMWdYVwRQERJXYao5eGBBW2vTcLPSPte4sD71q7DaF",
  "key4": "3HiAZGZmHWEL7bRLKWZ79fxU3psWMfogDLHW852E9p1mnvvUqbDMLdEzj8jW3AMjvfnbhM1S7bzuhjTnhciVV2Gi",
  "key5": "4A4QYmTimejS4aWY8BbkKWUn2Bhy6HQC8XifKhArwrZdhpN4qEiMcHbbGNftvdxPUszq5A2tpJpPosrLg499cMmx",
  "key6": "4fDKpo2C4R7iNGSPiy2VP1vVjK6nVTASzpCFki2zAZAKo5anEYcpkeqVo5o3XP8qE4BvwqBYqy22QRbj5zAeZSPz",
  "key7": "3WRRswiVpiXJQDxUp6Y7mkQscfkqpNVo8BoeoLAqzAh4dzU8ASqhsSNJ58PgSjXQkAK35ArCeeGts1KVa28u1yFB",
  "key8": "dwSjxZNjaAXwSSrcrMr4Mr6jPPbz8WWj4UpGnYxZHvVeuTqQ1fafjDFBmEZoWUvSq4656572H4MbXw5nRcgdKww",
  "key9": "2vdn1vUxfKgcC7ncsUQmogrrf5auQMYNcZDhTYs1eFNpQbRCtbVFXXsp8mnqQUcAZjDLshK58qkGCVoqNcFbP7JN",
  "key10": "4b95zUusEtiRp9jDNgKMK4icQBqhHrx1wVFENrMZs7WxnB86YtvF1VVnjKKKNhu4fyug67ZdWdv7SL8wX3kCK1gL",
  "key11": "4VnMt2w38LXGE3txKewU21scRFCDWdMNnXUX3Rx6QRJet5F3MjPBWmpNdmVkvgihJFPswFrXx6YLZoSjtEkYa5t7",
  "key12": "5NYBnXT2pq4By3wG7m4BQhjVr2iAYywFMu4BbTUFTJiav6fJzRzPkdcQBDZ2PtnjVJg9qsww5B6aiWpKC9kjxtvU",
  "key13": "2wLp5AB764JZkYf4kvJup1paSJ1yA3XUwsxudjVrmqyeCuQYZZ1tsJaW4LM2zbhEsxGjNNKxvnVwEVCarKpJwgWU",
  "key14": "TzvSxPuNV5k75rJyXkiricUkmUEpQo6eRJWzSSUm4EdHdK5DpwbHSDou2r1zun2WhtJSxjxHJgZ4tFjQwwvQ3sn",
  "key15": "4ecvkhYRZi9ZYa5VKizHSy3FdpKrQcZQQ5KFwPPJNZEeqGuhCmgWV4suJhXzbrc7xerv82GRgCtcERB4YW2wqaab",
  "key16": "2JCsJ87Hrj5H8ZsQjwXKZFMnnHRiR4VWXN5ta4STxPREBBKo1zvkHqLDiaqwCppwYHLLmCjpGA8YpgUak1higiCV",
  "key17": "2Zs8ZCcmZ5mgdUNz5p9rT8iHerHGMtSETHTdFok2dNHkUsimXZfnEFPGNG2arTThoSSv9gEXteh9sttZZXYUomvG",
  "key18": "5P7gyo5jEb9DQaNvK1P1JRfXMjDrQWFgSrFbPujCx7Mcxdcuf2EZ596QXVRF33SM5j4g2XkN8WEA78GAJiewgqDK",
  "key19": "5YaBGnRmkLpvHd5bghQUztmjnAWvQcecZV5MFNQDqK71R4bYxe5gxmkL3qz9BRvvEAHamb12SpGe5AVSnYLhDBud",
  "key20": "5NTMniM6YEc4FxL2sve8SJ6r6t2CSFhVMc8yqkoW4Vpap28Mn5dhUkhhubVfECoEUbtyBoUJ6akjTnErDmwmXcHR",
  "key21": "3PJJLUgGXxqPw65BhKVG4xJGesNaRuec1oaJGv3r66DiRnDgqydrg57KUwAHTtR7bwzRNtNdFC2Z6TUUVBoz8u3X",
  "key22": "2cgVNvjGgXNSV7NZNsVwzqsQKgTzwS2d4ph1A6nje7GhDDd1XB9fNV29izynrbEJMmNF2H78BJ9nSq5DembR6GUM",
  "key23": "2sPJD1FWtjfHVqRy7qk1Z51sk4BgW7A6KZSJ5RNy7G8dax5W9LoiqccZZ2Xfq5dxkavWzmY4NxnFJSFMb7ByqmDp",
  "key24": "23J1MQPVnnmZbYsZ4REtUEASvY2K3tDNuEV9xbENX5Q3Yera2afTYhZFu1rRTWydu4auZN5wgqcWBvGsa4KZNFUC",
  "key25": "5xiRFw7iUtoHE2HK2vj3LqBsAMGobikV6VfXjSrm68RhDWzosMS8tz9atVpoMHcbjp1EBnLRfdmguLRgw6GmEdxY",
  "key26": "36TegmLtBRfWmfmsDj1iMV5FSdCQeNj3jrDy2cLWh2pCznmPFgwCF4kNh1mSAU9tbk5x9E4y38HgyDbfsdfqGcwM",
  "key27": "BukMezYsAtZ7q53esRdmEjMby3Lzvsb361H3tqAvHkrBW51eFSiTZd1LaKuR5pDhe4arnoyscy1v6Tp1YUezggg",
  "key28": "z2mYQYZ1imcHQwyfBgQcT82iHK9ibSFp4MedDX7PNkXpm543QbUQdjhFFNuE4X6y5ntgdsGKLNkZUzaEyqrVLqz",
  "key29": "2MD5sTSnGhcNib2DsecKmdV44eHsNR8LbWVGzpHGg5iVw3tG84VGrJ2habQwKB1wxrYG9Srwgho9yNH4JNDTmzac",
  "key30": "tpcqGkvRWh1yvMewNpWNbQa9m3fmD4yB2B2oC9eRV8wb7Tng5KwP4E3PV4oNQSnMkB1ENV8GcmR9WFvGy9KhrVv",
  "key31": "4az785DNrZQX6vM3YGWbuGrZWis2ybjsoXDGABHnomrgqrzgNaEjbJ2kmUvGARDDzF2onez9HAaRAfoaRaPknMrV",
  "key32": "58Nysm742VWRi25BQpJFj9LrC58znfAebodiYdL2763tuwsV9tgvmcSPtnXC8JWVGGEGJ9s4g6w4RWwz2S6Wu63N",
  "key33": "35HcRm8dx2buwAyKVZ6FgHyvPWoQN4s1DJthVRxDc586y7oXRZVbphtuy6mZpufzNDCZRFHFv44E43aNEedZHPjV",
  "key34": "4uN4qE63keWppc63DN7iYsdE5JKEuxgawhi1ZTcA7EjUf9oRHcvC6jsRaXLmLfex53oSDAaRAczdFTTL5ptgXJwu"
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
