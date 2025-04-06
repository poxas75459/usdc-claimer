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
    "4zo9KWCsjSqBAHbQA1QGZyB4jD6FpbQNpiBGr53iBo5Bp2E3eSy4uaTUeFycvX6RKUbVy1X3kMhu189rjbGY6Vic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kurY8gx7BgPxW3f9H1PcUSQ1G3YqTNNfGKBbpfo8HRLS9XNyd42PK6DdjWxVNVFBkXkwY1LRHDRSA3xoa9MR22R",
  "key1": "4ABfuBDcmqzogzPppJ8Zz9ra2i4tcponsXwRHM8UhdFaGo4Jyg4o3ocpxhqqe4wYNXq5eEpJ1UtwiZwhRtNQWDJm",
  "key2": "5muuk2KD3fs3ezhZ4sMsvkqWhZnxHygsLQvMKALFTNZSG5ahi3FTC8GPwegVBtUzstmVvZHXT4VZjXZs9kbd4Xg",
  "key3": "64i8QnZU27jTgpnCxmW5JmFM4NHPVGXVoUKLeYuMf5f9GeBsPhNAtikTW88t2U1y56WAgdW9cCXBnzCKbYaLw37N",
  "key4": "4HDvQb3jPfExVNe5wgTbq7kPza2g1RqhkJ97VzGcWr8oMvRtvDKaV64xtMM4N7qLz3GnJEDHfdtmWCGHzKdHs5PZ",
  "key5": "2gmnkYAJo51sJipkxzdH5aP51zCeEDbNpEr7Ks8p6HSCUiy8AiDPgbSzmXGc3o7DSbxJ6FLaoeoh8TTmGYq4ktC1",
  "key6": "2JjZyqW5La5uhBHXUQDwgSrbbcqXXCHGuDWx5AGFhsbyiv98mjtrfbDPMnDPjuBT8REA4SpBEfxdzjqFgtQG3xRF",
  "key7": "29yvXctZPJXdwC1sLzcSDdhhQCpHX5gx9sRc569eoC2A1vLCwTAuZgs9vLbpxSywwiJDguzMzYDXQFEqkbLX3pgr",
  "key8": "JJswDJkHXtwLxzgVYhhxVDK95YfGLy8h2EmMjMCypA4TNG7WQukPLgo86ASnwVs7Hi3FQZTBVKq7beKby1gbq27",
  "key9": "67W369K8nKFxc8iPvjbFVN2RigkKQ36j5QqD48YEY8oUXcZDXaUG76BGffAP2wVFmoBTHCdDFR43FygZ1qZQuiXw",
  "key10": "2v5muwAXGEZCWBERWpjcHukzsPpqWUsKUBiJ5TcVi2qB5x6pUL7DqETLkdFturtdkhofbsM8HscCoeCwo2nhWNVX",
  "key11": "Sb68FDm4nAvbrpW7e83PCSUGSwf7ZThqzFeXLEVRpiXSu7oUaJWNWx7cCwNKh3PTsMmCSjm8qXhSkfHTUZZoRGJ",
  "key12": "mHz1kZc9K7fudrK4wNNoKEMv2pzubCRU7KEHfKiAfHNXESDdCFCVNzTnfkSsu6RCfgoQficDqoYi9bQ9rWFbMS1",
  "key13": "5m1HSChGDyNYVxo9LvUP91bqbZEUdzb2s2uJngh5XU1srWkyVk78QzwRcoRvarkkT3zmrg4Bt2Rbd9cJ3PEoyZFw",
  "key14": "5PWycMYE7zgEbkMsfa7zPeYuq58hVp94Z39ufMhcJHE7CQoTySKxTAfcG7AvhrCLHn5mcoWrarQdmF3hwna6VwxW",
  "key15": "rh3n8SRUWyj2xgERhF8sSVih6tw7tcJqnmEAzpG4Ryw6uNVLDmQk6a6KX9UEgmKaddtvVXkLumWGMKhQsNEeF1C",
  "key16": "2VK85jUjySAWxfE3ZnP2ZR1v1ncZhVbci5Ffe8Eesxc6gDsXLX6DM8pwSPd14dfYZpbRny2sVtYb3SKH7xaZimF8",
  "key17": "2H154MP7rLEwLAZ1DD3RDrzehawDRQSFCAT25zkpLjpFzmgHY8MKtXChXWtrPRksVEuFqMpFTUQoKdQAz8A7Rt8d",
  "key18": "5oXeREEveiyrbGFuFf1DNLUzRwRo9f2oDzKGDAWrooR2Xn8GnwMSA5r52bUuC6osjwovJLjoroH5sJiwGKjMLaXK",
  "key19": "QrmHv8X5bSFjCYTJjkEk4QfzMoLcBhmmGRdivwSWdjweN8fVJfxg3zSgZoCx7wtvmHuNF5BBwyv9Pogniw4g1ue",
  "key20": "2M8ANH6GKtGE4AF3zR7Px6ajHQKvPfqycLwNQUQ8RzNP8CCGcKoS5NeGKsRyw3BRmhfWk5WAB6A7QkgYzmenRAGs",
  "key21": "UxueKXSuK6rL4ASp5kUy7CHjxNzFiA4dDMng2V3TeXVh1x7KfK4gVeSG57Dxr18XkTQTRg3vUSFNVeXYoQLoFGs",
  "key22": "3n84iDvvaitwzB4EgqeiVSv6WucfDURV2vz7T22Hb3btupMVErFgzfMPNB5Bsdebo4RYkPQSJWqYq5hss4wpeTwX",
  "key23": "mWKhh7PQrHoUZ9CcohNQyg9NpiN1UcxxZXZMq5cXPMCA9cMP24KcQxefaWwX44dzhoMgWdKdeN3FG8fKykHse9u",
  "key24": "9LRGNSxZSMSHbNqqZJVdoiXjNoGs1EnvjiokwpoHAKwtkwTKF7EgT6oN8v3LTMkx3X7SrokVuM5di5BJgoEdDDH",
  "key25": "3HxD3dDpPjHKbGtZDS5sfk5Efo8ZcxAWpuWBEQtx24SWVLwQkE1R2Nn9TpmTHLDkSCQ6tUFu7jA1qhND1C8Wcv3J",
  "key26": "2zDMHKR8H2H9WX7Qtf8sy1ppHCWH3VpMPMSwCS7ZSsCDVanGAJHDHXdiW3RX2ShpapPpA4toLPEpBuTy61LKEJwM",
  "key27": "5mqPz8Kv1M2PH9mtKG2JiQDDnhZkjdwErJBbSYc3jwza6R269FuCrj3twb2nkNfHHzRLXZ4sHinTE5knKpuQLN49",
  "key28": "33w1fSDmRdEYn4piyUpC5boeWpCY21Nt7e6TR8ENkUnohvf5MXn6D81BCUNRuZHTvdMii8nDhXD9NctAE7RAA9AH",
  "key29": "4udWSucj83t3czq1Bscho2QriSwXWKUX7UjusZ3FLZyckdXbcn8EKrUubsj6uEe6ZPf7X9LKzo5iN8p4UbQKvXp6",
  "key30": "53yrKazHgG3u9tNYeGkrdE9tSTFY1HWKmQ3f27TehsobYKJ3eNKMoeLBa74d9jittoqFh7KwSbJyUW8Gy6zSpfDC",
  "key31": "4hDAu4ruyLdAMDWhRBGtpC8FizDPif9EMMkXYz663kLvXHqtZnb8KuD6KrCDF6XgKAwppkMzrZadp4SZ9bBQGH7n",
  "key32": "4jwwQGWe7z41zpdkBe8MmyMjVLy2EZ5yrAQBQi15s5yfJJvHQoyA5AYHmz7H8jsQoJmuT5BJhmdTQGop95xKDSP2",
  "key33": "4nMjEohY8y9DeikoLD7j8zk6FxJwkHGaUUvnj1pzgR6qkb2Uf6ZQXtDPxGmuBZa6wJvRHKVzJ9FvcUCiJvnmNgQ7",
  "key34": "4sUBuax6Az58swJGCcxFXvPqkUH3TkMqryUnRnX4NMhUPUbMLaNU2C26L2x7HfkF94gEtbPX3p3jPXnjWvZpWDnH",
  "key35": "vwwftgXQmFKXcTjHeBQX6KhTpRtyQCetgPkYFbKchKydd2rhi4YiKdKgvkh4mgwCiru8rd8dmKvb1wzSRbc7kph",
  "key36": "24Af5NpE3rcvrEiowwrQQ3eQYu1FFN8LRucu4Sofg5Ex6CY9YrdqH33793x1zXixVgfsBBaMe5PAKeE5y1P2vJfM",
  "key37": "5rsFGcP1bSgrpj9GaHKBWedwouDvH4kSyNG9VcDQKzzw9tjniqmgNccHiQ4uyBTwbTYqBy9do2qAHiRheKj8xhCA",
  "key38": "2xgMKcxpPenLVnud38n5zdoHt6zhYT5h1DtN4LXihnyRGszXQqJAV6Dyn7qi3QCWk3xAP8w9p65p8kYZsQR6gzfG",
  "key39": "3jioN5xgbRbAmjBqK1VEJmoBBMc6gNCEHyAbapsgFrYbpzMAupmzzHZb21E3AKDokWkTCLKS2nvKf51HYx2c1FNJ",
  "key40": "vq99jq2vM6s2Tet9GBs3CRbyDPeuG6mhBhfY6F9i1gg5wo8j8advVwowwWannMpWTPXeXBicuYfuZUzPpy6cHDb",
  "key41": "3pyJfQqv281U6ffBv22AseqZwLbBgzoTtUdrxnsKRSE6mvhPcUVPofWgg99z3ksXRH9mCQc576mJk3cLFZ7ckuPG",
  "key42": "46qTbUBKhgneohxF4uAUnx7Fn4JXfyysjUbnJaj9cc7WqYESQFPc3dJNJeq9AidaN3KjPCNyAuMabHtt6A7bwVN9",
  "key43": "48rjeT8QW5wNii2ca2HkkxBeQL3ZH73YXwyjgo3v7r2nDhgnZfgEvr8X7pn1EeAcLkH1SoJWDZd2GwEhdoxVg1pb",
  "key44": "3f9RVSGmAUKDnNaxkGNqJhxhmJF2fNuRa3XWDDvsSUpj1qVDvwkzp3HBoHjHS6gBn9BeV9NyBCcfCXjpmgj4LdKj",
  "key45": "5tNXJLwwEKBe7e2KbyEcCD4iXZ5WPFcZokgbZzKNLpMGvfYngj3iohGrdz4Dp4NffuvrnPc41j3RDWehiXW81V4w"
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
