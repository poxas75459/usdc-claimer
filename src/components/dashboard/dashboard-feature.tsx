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
    "4Kwrx4TnAT5AmJrrrkATkckLDNPFog13KastrZ4a5gMEr4fzktaCgkgPf4BU69iwnnHYnx9msFW4CbMdhHqxcAXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EixiN7nXb6twu33aJzNY5ziEJZ96RWjhBhCCZBPYFsGktMLxGS5gkQTER3deXJBrGKfq6kpork1SGuBzSZ1t6WE",
  "key1": "RfeCL264EFoVK595cLfrxuAGgL4QSJpy4m8HjhudC8szXh8QHDNimZrS1wGuuRKhEXLmjbSPbaXUYQojfzKNsFH",
  "key2": "2wBZTBooJDheDRCuUWw2FsF8AD8AqgRAKeLyaQh3Zn3TS1osWF3d6D6AhYX96aHeX5v3vcCZe9rCQyKCc3X7o5Ma",
  "key3": "5viRHXYzfZHBvkscAQBo6Yg1vUJ32diPA8pk9ookv2yAdDcH95bSpt3fiotZooXrmVnKPiWcBfnKpGs52DRZmqZv",
  "key4": "wTuBj1zCDoAXQAFAVFx2fhaXjmtekE21tqjjseZTpy9y4ey93xi9ULjX2fEVVo5sqTQVsTuXQniiMdPgfSdQ898",
  "key5": "4tweBBBReQsPwzAn3YmAB3cwmN5mXQSYibYLk7xPinkiDcdbrqH5DAmor9ejmACAhwi3rwX6zVv5WCqxPSppWFs7",
  "key6": "2HtwwWcupw5BfPxpgt3eCzg1o38aUNY25d6vxiKonFVfckTV8uhHZHjkvoWSczAwutKbN9MHUo6dZEjB9T68zRfP",
  "key7": "2ibmm5RdgpFsgtz6W2uHsTWtE9EYhUHdbswbeyaPvC9oZYJq4gtthke5zS3cdaU3n4DNEzn5FpyPzxV95PocisAa",
  "key8": "3vE18TbjZQV2M8UU195evXwb5Pwz6tB9Hc3qnLw6PZjvuea9J35eecLn2YeLwdQW8WddMzPPc9L5pYCyoZEZc4Pg",
  "key9": "wJh6MSfURdKfMeCJF9rMtmM3iG4FzVozyEyAkLLPSZdkBSqKNTzTBas7T7hZXPPCG6EEuyCS5DpSM7Hp1Sn6geV",
  "key10": "bAvuxTb7SEWXSroKj6k4ai17jpSZ1AQ8kGpMwnS2u3SGW7GaJW6aQdNtNtsJuNoEvcsu9WjWKSAC768PfKVPAZF",
  "key11": "2XfuxTr18Mpk8WmLhKEBMA5fNgN4k69MUYbXtsrZMbTSjbLLCPTVaqDDEtoMXVMKh5gv8eBKup6EBcNhzhqWitBa",
  "key12": "2mUE7QXr6Lzi43NUXAT4Xn1QB83EQVHPd1CoWXKH9bazQSpbg5kVJiXCox2TDeMAwAXtCWT9hEgaBVTacGPXhNyP",
  "key13": "3wpJSWqiZmy2VE6xRiRh4Frp7q6LT7CXuksBzeicFYb23Hm8WcYzmz641dnxMKmu5VDk5xwo7LRYkB4UctRYpz4F",
  "key14": "2EbAiTPM5w2nspSKAUpNNKywnm8iwMRhq3YpgwAFBg7LtJz1swP6YBDwNcXqKDNKRZ4xUcN3N6u2E3Wc5HANbxV8",
  "key15": "2GUeET3x5QSpS1T5s4TgfaWkPvSq9oFQM81ktXNmYjw2xjdwdUPpPincyeN1iP9MMyfQJxyQYjGgoUWbirJm6gKv",
  "key16": "4TnSg354APCamJJMKfpFTdWienTws1ZZsLbB7HRhbSJ2q9HBcRmUhVyAU9C9vmod7DJ2B497YQ2ugBECF2wnwQox",
  "key17": "2ycn3YyY5V8gpUouNcBzG6ByGD782DtyV5iebrSVudsR5nT1yvexhWfFmyujEAbSpEdcss4qzJRjLfJKptpu8Fgg",
  "key18": "5qgEftsCjPT5EGZ1SNhaiNos7wvf2fde6EofYDUgmZShLZgBtWHpZptwnrRyqFGCib3TbwXHudKrT49nL49Vtaff",
  "key19": "5HXdsnCTZgQZarXvg4UDnFbsAiGdtzCdq5qJR5w946MFi1yk8SxLr5QLeJAXb9UwdtE4nvzgApBZcP5pWMQ2ZJeY",
  "key20": "44bignGENrhiCVM6AiksAbGtZkorUnUPvSVWGa7Ksihh4Yc7kjqbjoPDtHC99CiD43AuUG338sWzgxECPtPA7mRB",
  "key21": "3XfxXYZuhQwVWt48Q5MN1SiiR2gSjwqvZzeiHNFiM9vu4w4mfACveiCzeV6ncm7RgXXFmvzz4RAW1vwna52qfZXX",
  "key22": "3oPMusYBT84E6cnoFkG5d19ZyjFpmcweWdX6wonKPyewhpWHogn3XmJSjZNxr9b7r5maNvHcdQqcs4AKAJxRrzoR",
  "key23": "2HaZmBcjZmeADFcq3TnNLQWnk5LyMdx5KqiCGL7ZQCzcdrzP93B7KWUjZGFaSyveEWqTR7uT8Cg1JYRCdsRAB33q",
  "key24": "2HUbUpeDkTmQo1VnkJUGUo3HsnKhVcT9aovVDwYR84UBbuF3j7qzsahEK5Nk291wfWucVPMHKpdjcGutdBTy5FQF",
  "key25": "2ixNPzx2wRnhpWJo6F4fL2qUet8tRzkFPP8pm5niGd786uZp8PfQJJmFdrKajDGTfCtWfiPFPS3eLAoBRSkLGUc9",
  "key26": "3GXPsAurRCoxbymHKJBntqxSLPz2CB3im797NTboFX21EsgUvWUma75TfbmGH8JDPUpYrCNa8T73gydDDpXJHWos",
  "key27": "2uoPopbJbw2SU9ViqApPRDnHCrz2aKv8qNJ4r2SF6xTdjPcUA2hQvn6j7Umfj3hoPc5LZrwQrvFH4pFCbPYpZ3TJ",
  "key28": "DwPqAiPNFts9pM51UDbnYpEAp6ForzNy7FZpa2SoXY5cMrtLfYzo2g8Vmo5ZMXGmWwgCrJ1bXYKaVYDoBkMpY6g",
  "key29": "zXMXb7SiihMJUS1FhK7Xt8qrK9cNBbv8hD6HBABcuvNYzZSqWa1fQgaf9c8gwafcjzTms3dVPUpwuMLfitRT7DE",
  "key30": "3BqB5Kv5dhytwoghR2bmnYkvox45bhmosztbxZkpJnMjYDMuAFg9xKNZr3ftCNdJRgJsnGYEhNXtswz8Sjm9BtwX",
  "key31": "2uZso6b9nAYCTn1vzTjHow19BM5q2D11GLQ1y4iBgjmb1FN1kTLq7XhgZLrggJKqYVZo8y5dSrmenDaeUT9KTnva",
  "key32": "5qWwatCTeRWpi4RSgofQHtM4MYZ8MnHAtU9vCad6T8eR3TVRTBiDT3QjPFY7AA4mMsB58x3YwL6Jordoab4trH6R",
  "key33": "35dSdeQxUz1QQUM4KoVmav6EuUdMPTAUg5uJCWbEhLqtGJQaubczPJuTY8A2c7rRQf1uqLum8WSH8KHJGyvgeMR6",
  "key34": "4yQ94CUpahqn5eEzNaw9AZpeWS4HTjL8WuXyCHDPfinXdJ7NX8LZmBrzpLfuWJonauB9Cqj3TvRFy6C9JaPgEmox",
  "key35": "468b2qs7MN9H7Vy5ZQtRgL4LPqJYbAy2MVn7wArmbBsRX8xB8sVvyxNH7Z7bMedz2LrgYYxU3STo1bKwQV5wdwg1",
  "key36": "4HqH2KFxH2QZWeY63jNF3hMF5bNvXcqgCXkdapEFvuHgAXrrNrWuBUdqBT6F5BGCyCruntxMRALaKsLLEHa3Dp3r",
  "key37": "deWr6S5jYKvRfTVWh6oD8h6fhKeKmSG4VLQH2QDvLQd4euudnxAvrrVw1K2yg3sKbsQ2uSoHqDiWfR1E9CCoYFx",
  "key38": "2D86rXn8PNmLz29hBpU7AAEarn4kBhLuaxTYXgeSnJnAKFiixMEawZj7s9rEZbTF1nxhym67nZcJCYbG8hpaqgth",
  "key39": "43VnUADsBrjh2G5f3crwdkGGLbMKaf2M78JVXhKDWXXKSgLLZmnZ7zDrzHKdR46dXEgKBYzUy5QmHHxqszsyJ1BF"
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
