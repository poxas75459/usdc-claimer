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
    "4h2QCNy5bTPruYh2t6vtdbzSaq1FST9Sy8S9YZj1fqJvC4yGMv4HxmE9xRbzwPUK5FCLo27L15JXJsdjeGpwd6ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K5fzwSkCoSPLi5q51FC7mA3uj9RApui38xyWHmm7T9kTGPVbkeRmk2GobRAtBSxPxD4kcRntrZDHnrRFqGpxLVj",
  "key1": "27JkVbfhe5SEvT9qtUHGgUieZNH7EaNN4wmUTpxjRYNBQHNJWpoTwZtcUiktBCLrmu6yMTMBX8PPCUAZ8AdYG8XF",
  "key2": "5Bz4ssuVyEMghud2cMuur5j9WKutfoJFQk3kxY8uZLKAcyGu1enkPqKqPgDYXnXXkq2gcfYjtcMDPiHicWrGvb9s",
  "key3": "VzBVxxP9cGVNacuoWUSc988Lq3XuXPohMQ3FWTNpPfrZGeWZmMrJjD1kv9fk1ct5jo74K6AansrGJeHuiH87tx9",
  "key4": "4jkJqTnXdieRCbwowmGX9qW2UvKqVqK6FKqLr4vVCaj2UZhkVzMbUQTNwoe7popZ8qAz4e8LtaKR8buBBrgTSGU5",
  "key5": "hR9Zkb28CwmfFsDZFENcvcVBy6wVac1odwifQFZWAuiHELypyn5r5yjftiDFkX6y377A8EjRMSovuoUzwyuwuq6",
  "key6": "ZXHHkVCGoYQUkAuAGa67s3ZkAvpmDie29vC4hyrG6n6ux8EW8FWrfYdkQtC8L1xohpcKtr3uzG8Wp9w12ecGjyi",
  "key7": "2GD4dJaS29qYGPhLnVFQssfr67iyEzM9p8rfVyHfHCzjRmjVN9FxKRnAWcZUa8RVq166ydLxvBqHMHwaG32PtUHy",
  "key8": "4u4G6NvbTLsXBoTbgG4CUiQ8qzxdum2LwHsM2reSfeo9j1ZPENyUwN9cxBVgitZn3iNELCRHXXv1YMyTnByZuvxV",
  "key9": "b3fcaWur56VnnmWKdHM4wTvBwmCXiZ4U4YCwurQVncYtG3ScMG1DZq2ehqVac5sMHaJuTdv2qZNzqtnRKuf6hW2",
  "key10": "m4Li7K6BLHjctd2uGepGh3to5VRYmoiUoqnLQQPArLF3oXKLYjK6fP2s1B2QhaYyG9rqtre9ScC4BT4vig3ptWX",
  "key11": "2UzVgcA8CEfhvbp3nu8ybxbGcgTET8RJnZBhu99hekBv98BVWSmn3maLBbjNn63rNmf9ob4iZT7CA2oUdypPJ2GD",
  "key12": "2db2xVHkGp69wdHTSqiMeie5FRtshTMm4FDxUwppz8n5brGJPZabWXfXfNApsjFVsEgszNVSucj9VcZdwKFw1Azu",
  "key13": "5DNsdRMyG2RFmPVT1fyYfpTNFhviGU5UQmF7MMXEPLSAwTJcU4EyzWggPCZeimxjRYcgCGsxUeDJqLBmgi69SvUQ",
  "key14": "JJX3WuaQuXC1LK2MiZHnMAqNjV2NadoUvzA8jLmoqPPHMcsfCdJyR471PytSfoWxR91GpeZWTu41S6AHtP4NDDN",
  "key15": "4X99EYSnS5hWKCo7QGtHBjK9oc3M4UBF8NDV6a3GENyN3ztTWPKWq8RTYhkcssuxkEi6ACW4WuQeDukD6L2GC5RA",
  "key16": "2dpEr8fRXVcNBH41czdUbFWaph9ZRfmWoy37JsUBm3sHbwQYjyG9TFnJmX3ZAou1go7Xz3XRYCPmBKvj5K3bepeb",
  "key17": "G81UJp3KbEAV2vcB6GBixsLxT1XofpgJXFbJGvZg5fiu5tZi6GqHEwKjZKL3gaeR2v2wbpuFF5MNBaFBJ5JvDmQ",
  "key18": "3KWw7w9xHhNWFB3cc9RMP1izCiXPBDW9LmwncEL968FR1YxkU9ZKb7isN6XMmBNpTa9dvv2g5SAwyqqXGvVuNzMn",
  "key19": "9NXfp2E71nemYnRAhTUoDh2AKuFiY4NhrNE1dj4V44vXFd19wXBib53NktK7SmKdrAVSV5YJpE7aKzqJaZzzwkw",
  "key20": "37BozifwcgD3MthDdeEFK8go3MYWPrRn8wp7CKtYovSgrKoBUbbAvuNy5HrJTU45Sc6VgAcxMsSYHx4hSHNfBMci",
  "key21": "pSyFwNnTkupY5xab4mMEXQ6URf65bn5pgW77AYRfWhYykrakD6py9x6ixLKxR3ssrojChGu5zmD9VDNveJPbZ52",
  "key22": "3EWz7E8YW5dP4Cv6ScRYSK1L4XuGmE8NBmCAz9KBNYxU5iVnJ79zwSdEw7D2a1Ht3jrLzBXu6unfJoUyjx6pzVU9",
  "key23": "5pirnQDcMQNpfVLYFax2hQ9givyLm5LKJZyB2eADUuBuMkfchpYxkmufzVsmAPW2a6B9EZMNuAYh7hQ7LQ1yK18F",
  "key24": "4mFoMjRquQBpf5unFMMq92t6fz6zGSS4xYUf4S8wLrj2jG5wXhCtVFoRkaDHpHtihvvKoDNqtB77MAYb6cAPwBzU",
  "key25": "3b42Pssn16ey75oKUCmPP6hZc829QN7FWgwgSwxXxDUtdAigZyUEXmhNnzWNHVLgvbak7kaKpQmbHM4eSPcs4NoM",
  "key26": "zq84aSXWfhdwyKTNd2nB3eaLRPBigFAy1NZUgJfftrF8TtG1cRYxiLwfa3as66hwkhH5w89zZ82oj6LGDLdi8cs",
  "key27": "5r3MFNtKPJSXtUZXL7sJGHNLCSPeWYNuLh52GXTLaMdtbg1hugMp8JSmKVJVfbMtSpzASuUSpJJrcaJRy7sKUtqs",
  "key28": "4guCqWiDJiHGw2yxgJV4diX9JYP9VwroWaTbYWiueG1z4TJS4HDe7P5ZQhEyujAC5jARZS4M54ZmKvbLzjEiDByJ",
  "key29": "3S2SEqbfgydVY1wGMotAEbohoCZTd62YgCjPJMjKbhwHakW9mbsAGQHCsFA4cWiCJ8TomeA5Vo5wy9Vdifp3Dudv",
  "key30": "2pEQEFCuRuxA4nwe9LzCAsTWjZmkRD4AUpft49Ku91beoyTVUsShXBNyjM4qqP6sSUGME3rw9SsRYGqyTEJfnbML",
  "key31": "2GAETJoy7BmWHiN1cNcUV2nu22Ne6ZekHQRynPgDmbdJxr61M858u3BKJgTpY4orm2Ht9TsF7pijg2dNKpQqQVBn",
  "key32": "3RJvWyftezf6PjzRVyEXHhNuFfywFqDSt7MFWwaVN6rk2T4bbzc4iKkz1UWoZnwa6EvmTh16FKvbxtmr3xfx5x64",
  "key33": "Yq1P8iW4Jz6wj3sKtYV3yDRz1CQ2K4cU48r5ACoAyeYJSD1kJrgdqPiX4LWE5jFFgLGcp4iFCeKS3bLBjK12SzJ",
  "key34": "TQtrqPEVE8xehWPSvrdXg9FG6bfWStNZHzerPioX54cyujbRSaGSuV1VjVSfz9ic9Mgg17o3FqNdgDshAboUQmD",
  "key35": "63SiqE7rLkjY6omXXdLHq3L9YYLrjw4fZHiBa8vVHcQyKfisa8UGGjtDZfd3js3jVpWa4ALYHjgsyTbAkLdWmdHZ",
  "key36": "3FFe5NjajMyf7dt8sne65NmZ1H8nhcFihnegzLtoKzwVZiDNMNSA218SKhjk4miKUihyxr4K8yo5h4yfJgjyJttc",
  "key37": "3hUUQR4Tpn6zfQpYbwYFYrKfegndyzXHRjDouhZcugF9w9g3sq2BSyPKvAaQYnoea4p19E1P4HuULogySuxUeUK4",
  "key38": "SJUvSAf4SfCpocRe7Bi3hyW68A3jYSfk74SiZnT39FHEpNCpmmVqUMF3gXnnnEdGgK6tUtsUBoSs7pNfFx115cK"
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
