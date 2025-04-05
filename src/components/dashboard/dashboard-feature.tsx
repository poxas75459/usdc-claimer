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
    "5vdAgGKWaVefLpKKJyQVeRmouYcr19Rb8P4qHkZDRmEeQRyPueFk2D6Fp9FZZ55HJpCSGMuFYwDd5C8Y4XcQqNFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUHavJhCZQJDQPdH3zRYYf4UDBw8yNcUXSfyeCDZnw4QBaZniX4a3TATReGdL6cq3WPGiTqvCNxLaoyx7XWsmxV",
  "key1": "5N6pqpvjRUwBRhLeAEVsd9FRB6aU6AWLteMd7KBURiLZscMfEBsShehMWTSTFyRSXebNfkS8V5vx1CV8YtEKA3A1",
  "key2": "445VJYN9N2753VnDgde983Z9QuvDoSVShaBKEHSthTMWVzqkrLJWHh3umEgFxEsGPfkJwHwonhQwwqLLrhau8d9W",
  "key3": "4R94dbMmwWcUMyHbfmeHfKZFKRr6MFpJboHVBdry9dz3EbceFUA8n6mXw5pYUv8ry7y4sx4yV982KJtAnf4eNZ45",
  "key4": "3EKjpSEtdPAzXhLQJAijVuascwAHxLrBjhxR5D27yLt9TNKAtu5F3xMoTvyWvYRZmxKu7vkZerwY58Z9P7mmbyoC",
  "key5": "3tcukpK3mgAAHBrDqPoRsqUt5Npc57ZJaJgwtjbF3jbpxezca6GsZsV8hbrVP9sySzLwiAPiUeQavKbMsgoYfUUL",
  "key6": "3YLst45oS8i2hfaCbJpC8BdbWb6hogJB7iX3ScMcqdrAUuACrD6REEaEkqWS4eKFbEbVgTUJdp5baQ1hytq1ma52",
  "key7": "67WpVGTWhiagHUmR2B2ykCqMQyqBjHzWskooiSA73ZxoX5vZkyJ9fRjjkuZk9pjSxZBKkVWfCSN9eKSqfB2NEt3u",
  "key8": "3uw7symjrYYr2rV6zwtZzgQNXH2ob2V7oUkLdp9R3ProHJAExxrBhdMUPUrWrvUmySnrwet12cCKhhJAZHBHwt5Q",
  "key9": "5hTCkmxSGAhzZBXcG7M4fwKtaiHXncFHPxEcmS8127YEhFctpxSUqdPwmnBDKFfXUh3CCYwvfJnCPiyqaWCXYHGF",
  "key10": "2dD2Q2yzqdSqTNjQ7WyFBiip2w97daSFPiwHkmEHKPaLs7JDD1MTQwKWRfrZF3ypWtASm9FvksFsW2XjKWGK9gAV",
  "key11": "63UpdGACucL6rXVuarvrAw8bGskN9m3b4TYucMbnazh658AGKwxTfaTbxcyfUySrdYWKBVGsfSh9Y9DaQcVc83m6",
  "key12": "5WrzxUBQZh7KeUEZJ4NhAnZHvW22BQ1n4VHUybbTfrbMaZiPtQ88nj8gy2XxmpUjxr5YeLTYCwsASvgN2BdBVM8u",
  "key13": "4MJnYxqSgeqpVsXgT2o6uJ5FjVi6ksnBPCZVaobp1t25ooENFsSsqKmyXeouitu1b2KnCRe8QswAN7FVEZ4pNZsG",
  "key14": "2B7ck63B4Pj1m9nACmAb5JHc1gh9sZyq6CWKSfu66VQnzq5kXu548VSHc1trL17u51yhCR6aDmX5SfjT4fzWpUdS",
  "key15": "55MSMthjTkUB4zVi7spMCC8krazexjz46ME9isEBm8sann1zCkVYp6uH4CycN4H9y6MKTiXRJquywejbsVKRNyMM",
  "key16": "3WsuZV6adAd7YAHgmExPnBUs83LnpEWKzLFopb2JU56obC6tSTzVxuRfpWjFSpXRpR16rRVvpoH73dVaVpneqQKQ",
  "key17": "3KMHRarg25jx3jx3VirWxivS3dcKCUxx8exsXGLvXBN7ancpwiMLEuwTWTckXtoCM8xr8ML4mx9FzHPkJinMFQxU",
  "key18": "5As2aj6m6o9MoUzhADky7nsg8zNiXMyS5vbPP66pWm26jpyWiqbaYytRAjHuZSPKpsqjzzD9UUH1bn8wNYW4XqEY",
  "key19": "5fyzPjPCpcPszfBYZfYqDw7UiXj3nfzgPUSohc1EyBLm2bvh671uZWgEebcjmoMPG8GJtGi9QrrTUNMaHy9hd7GH",
  "key20": "5zFFnswX96Rm1vNNDgHAQmhqwHHeRaZqyBSB3bemzXckwd2LLvQ4dBUB2Sy4isHaCsnArDSWTne6Uz6rpy6ZAaHK",
  "key21": "2YST1xhMZaBMPsuamAUwKXBi8xJscSBjKCS63kk3fEDThbHydLkXXkJZVi2n4oMj7TDRwfWpUHtCgBE2iYtAN6iM",
  "key22": "2nHk6Yku7esbosXrEFXJGkP7sucbPG7NFrsp1CaR1Cyhq2zjdQYc4tF5HU9cpXELUBsYT1DTD9M2pqzS1bC15KDU",
  "key23": "2rdEFQ19msNW8agaZNyaBMxGQBEgVxuH4oscTNgU9DKw8T4CwCG1RzqKLEbVcSUdkgEr3G127o3FGKWzFA9gAomx",
  "key24": "2QN1gkNGi1CieLavJmaS35dvb2vtSK2ZzEJyndr5rzejjyTWj54GB8CpnisiZqhiXnJWyaPmEteyEyC6iwe7gLKZ",
  "key25": "4DqNXhWfMvi5LNteXxXhnbBZF56SQEwi3mpET2GXAh5PoSZvrvcA6PShvU1EDCjRznKzWDG4y4dxCtT843FczCNU",
  "key26": "3tmLUjpuBNyo4Az9PWxXr7jGc2PvnqRjEnYwc6SLJVRuXxZD3Ey2jsgNfHn94gVB13Ddwn6vetW79iH2iPTFBk1N",
  "key27": "2yqThq5VTYXRo1KcySZ1x7katBJFU9x3XX6HVwhzHYMHoMkpuTmjNYWBgtc6qkCE45VXZSfRmceq4ViGgMLy6GtT",
  "key28": "5wmj8QGBmCcrZF3mGVrFB6Nddm4xuKggontU9rFBhukboxuqGdxhr7YPHT63dULUDmbY6RQkpuEVt6BeC7qYhGsY",
  "key29": "4XCkyfyKHEhdxpBUfyvSf2F5j83fS9REkR4w7oF6Lf3S9pTaR6tWX5EbK1xbfSwy8fFoBcRnx9tKq1hrpQp1xemN",
  "key30": "3tmvgnFQ8XixsWxWoaohXPWBw1XtW5QcPBFSiWHgVJkxnUua2BzExHQJW6LypScqjcy7kf8VaWb6zwXZt3A2of3f",
  "key31": "3yTeWCh84KYPgNwKpspJGqUygXgf9Ct9G51HMaJpVk9XoAaYzf3ojjChmV9Zuh6kyBzUK9Ys9upSSB5iCM4WrYL9",
  "key32": "3xWhHrXoQkMbK2E7wws8Q9pbkYHAkcbbCFiXU1E88YcQFeC5uz5xExMX2mJgaTNqZpYJhkvYnMRWzfw1mau2npaT",
  "key33": "3ysZmzBDdGmTYJrv6o2J6mUqC8rUigsouoh59G4eqDLRCghqDxFsZDru4jRRHPiPdyfdbUGQX1X5byuExg1JSnTy",
  "key34": "3t1Z9esW1HzXhvySChj7FAakapdFPD61HMuZoy4U2WHRDzKz9UVccZg7HxnyBXKckuTMjERmPfEry2bGL4r9K4DP",
  "key35": "37ihqKFc6L6snNeWvRDTEAHU9Ady7odhekjhGjhybe8Hgwnxe2if9kzXkxYSN5YNovE7GkKeq5UffNW9AQwPjPQf",
  "key36": "SxcXc7jCUYaDuU96FpK3gDJG4zExkUbjDDZVcMdjKnwZXek7uV1qNLaMvz5nnGB5JVvzLGeLQobrRe1ekBkLR7x",
  "key37": "2XdTPvVS9Ve6LfCzYdXoTLuLanaTfe7sGdWW2eqLmGnrpcxU6XCFQZczQb7kSp9wTieNRQ4ApfGstEwSLFqUW7mT",
  "key38": "4tdHsfDPjw7UZJo1YUZy1zCeyaFkqW4LsbQgG1HCty17rnzNRQu1ryAGNmaNVTC4JTrXvRWfetBNDaJPuGPgLrNh",
  "key39": "4mzHo98QiuP2vC1S45HfPwmQ5p2Xax3tbt7YRgvEYVZr8w2tvRAUMeLDqzmFZLxnKz8nDdbfzT1E9yxmmymJXbNJ",
  "key40": "2M8FbipfYyaAbkxEeqam4ebR7UrbxJ4XqfpZLLRZ4hbyHBwS5QBb8jCSnwvE873hDg83UxDjAuoq9UxHcFzYtRKQ",
  "key41": "4kQZZPvBLAs4mMdkb7KrHAw3iZvYDctcfTuAAF93cMgsnMQq21N7rhYWsJbHTWmEBsfXr35mMPQUYAish3WBFFGq",
  "key42": "DNJpATNrmL2U8bmgvfBRjMEig22FTHG4FSdMKneiVJMJpcBJ3HHEVTBkAq4YNxF97XyxbGo6vdFzmMdw5gXSyDW"
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
