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
    "4Xw2mV1892pSvuAQJ9euEUPSAz5QCgBehzaNsybVx68gHUkBKwTwGLzovr3rPVzHpW7vNu5pwbFNMgmT6YYhPQq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KMvTFVEMwHNtWesMgFsAiwLSrN65LbcnQyCY8FeCZan4gyBuo3caBnqwKZdtCVSUuavnqKc3kHXwpmxAPijmL5p",
  "key1": "3iNfaiTbLTzqCSjZWUmprhRWePKD121S5peeipKtrw7uut5ZUm3LXz2EMVLRSz8kkxXVpLwbyGvLEbmq3zjhuiMW",
  "key2": "sDQE4ozJ2ntmUs12ThWpatDReuy8mm8THBYaZ8XSGM6UfiYJgXhTyoEJEWctZHPfyHfZajKiFRUbyihzgFiBMmW",
  "key3": "4Sx4sndU9ZSVNyLuMuQFdDUa6XaENJ1XRyDzM78AjFSBFGb6yoRKDToorVtNkTztyKPsLT56EmgTiyDgPsRdmAxY",
  "key4": "2mATPevfCxLFgRM4Qrmwamsg8hwSazzxYcEcBhfEQu9Lqt4DWTJWmFaH5hqeA3e5VHeoJ4DpLcb9NXMooMcZ4D7s",
  "key5": "3zWKLuqymPXnwMkkTfDx1Z81Z3KcnrHi7QVJvMcLELjJCNc2orDMUUabZG6HpEkEPFkxvXh563iLaQUoQswfi6rU",
  "key6": "EcCdKoaEPSvA859E8xf6tQHc5nazAvfnohte174qqAXM2srw6uhKpCGXXPdFjc6cMC9ctLE7TQTXmjpezFBarcp",
  "key7": "YMMxBqiHkBrBUgp9GWc3hEvChWk7HNMsyPgRdpzR7qaKnnH4d4pNKhUJmDCFyMTd5PM2UnmWVW2qgCjdhFo3KhC",
  "key8": "3Ypc3ufjbSuVsdaU7kuiHjdqh1wc8dgrZ8QVBcybbksTRsu26N29rBz9xDRGVkU9HhLGzsJqnpeynNxzHze6gHem",
  "key9": "2b8mFQdCPQZUFwytCBP8i8o6GDS8p3BaUECxoSXo6ZsJLBJXwPGCfo7cYFLMK3oiVVbFicWPCcv9H2tL4dvd49Fy",
  "key10": "65a1fPXPYe4ntqADgM4JCmQYEKVm35aAyFAg3NEE8v8FykQF63W1tUskmgvWwfvXHskQoxFAvg7rR2Se9aVYatqz",
  "key11": "p2CWfopunJKLaDFkBVZKrRZZGcJnQBuaU7i75tsQdYE3uLvNxFKrgM81eJsjcCVgbRXwELDZkctCh8Rf3mHjpTy",
  "key12": "2QqtXFX48zstYAfFp1JsUghqEiGXnXAbHJ1g7FgmMdHfVnhsHJnebz26c59Hqc8QjG9Lh7SCU8z2iGE6iWsGMKAe",
  "key13": "5xKXKZd3hvQQ3nVe7BV6F9KViWgjnEffeTPUtHJGm1w4Sj8tMkgJoQf7xsRXUZSyAh4A3rYNZF53FGrWf3NEh5HP",
  "key14": "2aTHBobGMUy43adTVsk7QdCR249aqEE1Pmd5nQwcXv5dSLaueRpxRq1yLhHRexWkfJ9A89G8SLZFQuF38k3LQxpx",
  "key15": "2w1VUAHy5Vfe3TicLj7FdAvgQsUrzSpVgrtVFWXV22BPdNMmxNcLLETyV2pK6Jy7uvsgguJKskhrYiBB4ykbfzkA",
  "key16": "5egahqzSvcDfAfAvTGsP9GHXAyu9tmTeb8g2BQhxi6uAmrdRWv8cBiN8foDTbV1RxwDUKGcaVPKhhK2j2HoTjA5f",
  "key17": "3hReiXetxGccETXDDk8kiToav4HLn16qoyhwC6y3rsBHt38HdMQ39AGMj98HYK5q5UZsfp7n8Ee5Uyyt13TUB8Ry",
  "key18": "2mtM5kTZSUGhGgFxpYfpPuXFUTzFYzQ9axAvvEdHhQjbAANbR7Hm3pZnSujt9484z3wYFNMLH5XUsQsk9BTAgBm4",
  "key19": "25EqydPjUqEt1UMj9a1A2ZVNQ381cneTRJzLXYYeYZPtSK2sCBwownBv3qiYaJwWcZ2gGyrfkNWtT6nfD1eREaPk",
  "key20": "5Za9dd9cMy8PMaUiPV8fELXNZcfdcUVWSUPdbtpofHwpDRYHW6GiEfvWp9a7jn2X7S5FG2tTmDrWhxVLnU7AYJ1F",
  "key21": "idwQQ4YSXKxsmgw1aEHMEobhtQ4E9yKWur12PpKCW87V2LaZjkPkKVS9dA7qK6SnBqxNYFMdHu97vyArShG5ZaC",
  "key22": "4VPbDnWwDKVpqfCJaLtN4aPoLwLCXV1HekzdfTgsZNjnTz8WA9162JGphbhRzRYvKfxMmMEX6Z9nZ77dGBhzg7a8",
  "key23": "4Vk4Yd3TyMEwktkqS5ehbAhMAxkc7KdgriDhwP2qgXEZFJVwKRCbANToNoUWckrk17F7JfQrvKFTmnqxfyLwnpnR",
  "key24": "34Lhr9ir4gZNV2qkTjWmPRzKpk2mDqEjNedp88N8GCWyvoR4DAUkovRwsFaZbwd8VU7VLVqrbmAC42KRVPXo2ehJ",
  "key25": "5qP3SvxMN12XaVcgEGRDCPPtjV9ZXndMY778cRJnyC8KjQWV4CMYxtzUpZHmR5c1PjVAeuTybJufSqhyXQS1rxDj"
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
