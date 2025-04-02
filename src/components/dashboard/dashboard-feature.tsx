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
    "3SAhbuW33Woxa2H1ZV9eK5A9NtWLQe7Qd2vSxPVtTgRmkjZaWzRAcYp2Ke2Xaj4Z6yqSAS9QMSkatosPEH9QcDsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxHUfqboWUHoYS2h2mjNKRdfpHoCbP7NPSzSapLvHSgZDL5NYPHYMP7okHQzviNqXgGXZxazDdzAtHcLz6tTH8t",
  "key1": "4xL8Y9HZUWWfXZgQ3QMfbV6fyAZMWj9js685xzEyyPtZTyJpWy6kBM1DW6xYeQi38JiR8dTSEWeyFJcQvbb8H4sD",
  "key2": "4sMXLdAbH943H4zm2amhmtUUHFrUG9gHjX9cb5gp4fZRNvkfAgnbxyAz19dQZp4W21yJaMo6qfBLgqdbhaRgLiVB",
  "key3": "U6GY49NuZ2ctSjxFWcFz7RuXv1ibV3QwAV32waMkm5XK9dcRwbZqHTNqmAzwwT85EtPTLDK74e2F17DxEqVznjD",
  "key4": "34ZeRQ9gAxxnPRmpDMVqwzvRk28NPY65m8S6e2rmCDZE4axEhsiidMvPPeZ1UGgL8Vv3xh5bm4Qq8yujbeCmom6M",
  "key5": "4i2VPovN9PhisNVX5EbomayVpi31486TULMzBHiTofpgmqivnrhSCuozVA4463hJkXHhvN1fqtAZeLqs2zhr8Zki",
  "key6": "55dRurebFoUWxMQHzWARA7U5bz1TcAaYwWNnxpmyKEQb4i3CfdwjaHzh9yPbUDtDxKtX14EdgTwNoRfk5jnznunq",
  "key7": "2itNVft8GN36RBDm2H9jhCkBgJ3Bg2TE5pNz6qUVuAknVpRwuwqV8HqPD6gQHEE8piZ73wbz6stSkaBFD6k3Mxcm",
  "key8": "48LcdDmJkVAZuJSVCeseiFEuxs34PqBdeU2TjRkr9NVmuz7tKK1mxbA9MAzWWgPKNHtH8BDxbHyAVC9epdbgJ1KR",
  "key9": "jWg9JXrt3PZWdiNsHvsqwyaUrCLKnQeu6LwN1edPDWkmEeXW1aMb5Qy3d5GzcXmwAeH7rsDRThYDpMkFM4DgcgN",
  "key10": "3D3XasFMXPGwT8GYDbmyLTxVRYhrd1CucjL5uVHRFbNH6MgLb5zdGSJBXkxLt79PhP65WocpHKYuGhaVbqqsLjoc",
  "key11": "Jf8a2ae81EsxhueKZ9CxZU78B8FKKP7CVGFYqjvVAzVkwAet5QzeK3Yr4Y41NP9GrhA268Q8wd1hCpiXhTik7QZ",
  "key12": "4f4K6L2vrZPCyaFSs63tsmSsP2ZMfzKCr3qD9XUy1Ydg54TYM9iLUEKkwQszrzAqDzc1VtViVmmafh9Vty7qqK78",
  "key13": "4XSrthRcC4vFn72YiFRZBR6WXUs81Sf1BvhWZzq6KB4WgsNBsjUWthZrjFhf9X7FNpNXm6orBi9gbfpF16v4SmfK",
  "key14": "2DJ8UZUuWCW3zfDLP7if5wk6iyREJABwZBHAME6GWvv613co5H2hZdisot1UN9shuxp3G9RxNZQ7gAnWQpmgyPXL",
  "key15": "4JVpgVtUUydGJAnSmVLBuZtkbmXpM1aSHZHGPSYAxUji2XBjJ7z6UbpmqhDVUTDyL23U2yZrydoPuPnA6GpBQ4xh",
  "key16": "iECCSRmBkK9zA5xQdgUqbBUoj1yteWHaYTZU4BzuyZrgiJNyTBXNqCGiNWnNH4VQASLD9vRgRvWaypmmwi7Mxqc",
  "key17": "3DmUMxxvAPpqbapYm6zi4F62VEW2T3chsKZRy8aAexZTNAqRYhHpWADbfSmbfhfYHKg193XJDqnk27VPEn6m96B",
  "key18": "49ikQoMsDjTGL7fdsEhyncMeADNBAFJBDsZWTTVPj2PTceLuwaaFiu78swfkoGf9taUuyuXq4AucMqb4dyM4xRck",
  "key19": "3iPHjST2ypaoLG9inXJZYjrkSjLdaX5uUiU6DHxkjqPdtBJqRWSw1azkCSj7y5q3dwzpcQLfwm1n1rNgiYdPhu5n",
  "key20": "7BRehYa4CnbqzaJ53Gdy6S1nhKtyH17HQRtoKdkro8HAWxBHUvpYDQrpoJtXLqcYnz3iRRowFKZyyCmPkFJcusP",
  "key21": "2dbAhkvEMbievRp8msjmyqiPBPuJHqN13JEZJWrtSscZWEXxa9agLJg3HrDyjEZbfurYCA2cjPHPYMRt713rXnqQ",
  "key22": "qgtrjeu9uFKDnSPgDx8vWfauhNS4EsKGoqDB9H8NP5t6KP7NdfDMzKyd8CwqLJpouYgB5DeCP9wyQEop6YMYFiV",
  "key23": "2KdB54gCrGDiGXoJXBAEW5VMxHbd1N4Yubzdnobg9UE5Jp7TMLYcP851jNxF95uxzSBwTxthiRjWFjQQKFz3AeMJ",
  "key24": "1j2jfuD1eXtSoHfwbu6UiktL1LXpPf5yQLUd954JDZRanpu7LcXz3MQfX2QgitYkuZDdqdS3n7ZLkgEbMhZDsF7",
  "key25": "3x1Gua2sGWfYEWA4cZ2qozKVfJgCds1BaVVoHK7sdzuwxTGksoqDXMXyDsYuE5Ux2EwQF7TVjXdvb5WfFhgJnhfP",
  "key26": "4S755Hf2LhNANNHDVzoXSMGYoyxN4mFNKK1beHYnE2Hd7qsbzyupQgqCSn4TwWTGcr3YB5cuQ4kxcYQtaqpiLDoZ",
  "key27": "4Fqde2oCweURqrfqA6SEmrWf4c4ZZ9PTvNt9jkbwuQx8UASRJxdRs2Kh1R8dL3qM7onZxMCFcutq12PYwt87HDTS",
  "key28": "5DiuTpSLk7A28x1vjkz2N2eMxUyeKEWaZaFbKbQPnJ6vDFENMjqSajrENUkskzw9mTUMYAbgyDH6PKUpzZ9EDRvm",
  "key29": "4W71PGFpBt1t1TtodGtvdEbt4vTJFiL3czVLb4sJpMNMqdXcqXdYMwcX2zq5JtdVfeZJj1yTrZHJysHZ535c4jx9",
  "key30": "yuF3XEPUeawTCEkVmZd4fzvqinQngysE5vQ5vH5YsqSGXvLoaXaDZRWWr4BeVDbsF6FVUjeWBH3FPuUjf9ETqX4",
  "key31": "5WjVcu7KWQUo4Soz6VQLAr2PACMbq79uRyxwXwFvBGFRAc2RCPw2snMh4ejVfUYpmttV5qeSecof8gpj8kNMQt5U",
  "key32": "2bJ6rVHAbHnKabUfYTXQ85jWpWMyK8pSd61DSU9QBcUMNH2ubosxu41y5gpoAr1Mr5LFzU7KUcFQLu1fm7ohHwp7",
  "key33": "2gVEHYjwrUKmtvdBedFaofHCy2y4rriycZYw5NHV1xoAYQEsCtMAGaTfC9ydNYAteCmijYEqWuJdRQ7piJq8zyAT",
  "key34": "42A7FsBGEyYWvkCp2sUGUbBLEKk8vzXaJhN2NyrNh3GF2SuRFfM77HSbVCeRrhZYsgWinU5AiiznrZnkshAbasCS",
  "key35": "5k9YucN26bUUwn9Gs8MD9TG2LKS5c9GmCYoADSGAcz3Kb5VbdDGnM4QTktLfGcuP9JwcUnhtoATsqQj32uSK3ACk",
  "key36": "Hi3ePoTbDySuMYDjwZjabtXPpMwENFXY4wXNmzg9nXF5VAkHmnhuQ4B2fxSuEZ9sqUsGAoBeCuzhzAvnd2rqfU2",
  "key37": "5ZXy7JkVGBj5JaZE78eyMr2Xh4JkSU82V2gR1mHWJUYayGizL9z8ab4ML8ZEKhbi7GbVB1MgkxGD159RHeQVSp8a",
  "key38": "5hvaabV4hVagi2p5YRUr55q63a7g2oZtYnNC9wbEjyupDymg3AUXCqAYcDwQdTNtPmnDSAe194XWcNNH47iSEjpV",
  "key39": "4XJQUf2c9oPZX27G4HZAhtHcscL3TB79PgEUmXPXo6XRsVCiHGogRvW6uwUCABzJC5iMqpa3ZPmwsU49crP7mbGC",
  "key40": "3HVQrjchHv1DjTgkjKo55SxgDviTAwJTknNWRFBgGHfadJueiBHiN19FAsKFoEcHvZy2BM312Ma8BDuAjPPTTGff",
  "key41": "3s2HomwqurfoJsW9Txo66RrzZMCyTkfFeGhhzEqKjDWMuihZcZtxAS1dh8WGSp63iP1t8RWX4Yx7SJkhKMJb5M4C"
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
