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
    "38x9JBrBhCa218kpKWLAe5Wfp8RchKLZCnonYVLY1cvcT1f72eeLbdZkxNaFTTP2RUsNVe7BA2ZwjxWFm9rmQpHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XdspLwxMj4gHaXave1qb52tJSuSTrGCJhtNgs9hcifyVVKMc3qgidEUEp1Ec1szHMEyCGvYV3n3C27Q94m4dER",
  "key1": "2AMUaZ2Ta4TmhtYPXbSTYL5NqLVzCBZG5KLyAtUKuHM4ugE9uN9nJatafNDLAGhFeBgeXvCo6EDmaA6m8wttPnMC",
  "key2": "2BpYVp37tw8r99pK8MnJ4qBBB74vJ7n7Dh6WxYQuyQNYPPi9kSUNY9PSbckE5tmVq9UQkXPzofdccexK3VLm8p5Z",
  "key3": "gehNuUg7gh6riuUicb3Ejm3RWSnzn6h7igUmiCLqjmtBgEf7yHoBTKG667cPDraMYhZ2NsDnLdSBEaFFfRZZ51b",
  "key4": "67VuMZAFyi7kiWKcDcZpdPJGsKfuJiGZeeHgL1LX7XJgW2nYPujKFQ9xWFwiGnEVhH582s5MMN6yqKSKEvkRsNqS",
  "key5": "5iJczBw4xy5noyxz9uSp9GLimjRvRBVxbnQZru3xH31b2etoFEZffH4Ym8xKDe9e6B6ubVcb8q4A55cBooE5s9wf",
  "key6": "2eAdeBP4oWzmdN96QGa8m794kPMpoyz9peGqjf9hURcHt1qDtxE8bRNyLKFi2GX99SjWVx6bG338DC6oGn7J3JwH",
  "key7": "5EBdeG4AsRqNqZipr9yvLYq2TWcmVADEyAcLiDjNPYZaqp2S937yzLYHECuZaAFJntmoHDa2LG95CgwwC7ohD5fp",
  "key8": "42EYjXhsaCR4ZLdDchx2uNha4EALJjJXHU2GEY7VxzxbfP4enjFsPc1oBGTzJsXGohWF2vhd387RJuTkKL2YwTkX",
  "key9": "4rthfwjvPzt3HJW55353aGvk4VWyAZs2qyGzMTmJipUt8zdVj1Eko8kcFfnj59fGXFDRkHcMt9bu1hVzh9VkSgDQ",
  "key10": "pYWtLFbR4pu2cfhkT7vfdskL68oN4uuVxWbHTWLHNCX67HJkaaXRZSa1fSUSK8pRGwj4mh6mWW6gxsrGSJip5oe",
  "key11": "2EEQSUwp8qhx8jLx7noDabk6E5CttpfUUcMpAxS4EzExb2ev9twT2J6rUBc1VrBX1Lmg9N4juVENFGW8XqhVMqmu",
  "key12": "M5rXoiq3U6JoxUAKDheSSthuwyGVS5Tt4bXMox2rN5ix7h3LQob5t6fU9ZbMRMj7coUHw13vmk4XMN6bsKiA4oy",
  "key13": "5cyE6TneyegepQmcZuusyXcd15ZD7tgrQx3TydQ3AbxQ7GVcBWCiyqHtcp6CVE1MwKikRpc9Twvooy8LhwR45oQp",
  "key14": "zxUudZWT3W8sT1k1jQyiWMjRYMUwSzRgNNLrU79wgWijVgLAK93JCZhKftzcbdk7ikL7yCSKfWC8iwq759NdJmE",
  "key15": "5o46TccEwNFU7qM3waju8nzF2Cj9QEH7qDt7EL5aGPWd3P7CPBZoz4v6ciCHwkw2uDi4mLC6nZcrvQ5dTmZyaxgq",
  "key16": "2KJAv5na6VnkMfB6JAy7dsLkgxnanuzVHQSGsBTyiK64LFLQ2s1mXMaEimCpNU7HgzrRJnmxCV9ahJ8jGWfYrMJP",
  "key17": "2x1gSdDrx4QPV6vBk72eu2y5NAjDwWqHKxSvm1BMao9zVG1jJWNgsF83748NY8JAUFS8pbqzDDSxgQDWA5Knvdm5",
  "key18": "2CbfpiVv2kDJnzxQGj8AbEVLwemTzRmrPSADfBKiW3SKg3J3XK3sxm1H4LmXGcr7vwCf8MQBJtqXGRvTWreqReJC",
  "key19": "v5BDR7Sd8R4cyDHd6DydAhDNqfhqfzommFS7Ck1ruo8RUQNyfwN5vDS7t6R929xovoRnpzXfNSYBRducY8X4nX4",
  "key20": "3Q7fvRoXfNLuSZGFqQcqVt5fDRVCVLH8TaCeWGCYAQf62ktdPwDGFkVJD8RrS5zqqAE4XVjyoVenXNBdsDeLPrNP",
  "key21": "3fCG3GJgn8wxUgjXVNp8BZQjLv322QtgqY5awFZS7XpgTUsiDChHqcvfAAdxdCimsHuPJmkBeJ1TfTwnLMnq2XDY",
  "key22": "44qAnTDK7jZ4faYNh7RnV3GGDSogrPCvB9AbRjVhfVDvjQh7qgZrigULRRePXaMsMoqsX2ZakaCVc7c5BPUkqYnN",
  "key23": "2286Yh7rjNxnhDrjfvpYDzM8BtTh4qUWT3xyMhy5Nht6pryKGdt6bexifXLpsBbpvYssRYFi9wdcJkYokUH3EPFk",
  "key24": "5ByYJZtoQiChvwFAFJHNYk3Tu3nJtzdbFW5Qox4NNm7yDGXAe8bt4KuFh1K5rRcGJEU7VwoagVitvUEzVC32poDx",
  "key25": "JLzcKPgN8QTmqFkxe75obCpzjvo7oTNVM94MBSZfHJUuVVkgoT9ucGYNeQDW8nukjy1ZcCBTZQ9v9861HwW8LDL",
  "key26": "5ZcUjUo36seHHSTauV5HhtzehKVVjw4nF9qoo6eqqcEeDt7dpskk2HGBvUSHaTX15AZmn1PD4hxNxVoSyeGKsgiC",
  "key27": "2DqRzvnf8VrYMTEJAjKtYTdWjnnTe5Ewk4ZXWUnBp4CLw9ngjH6uSGKKmE9y3oRFqdGNAhUWCdxPWejEpQfNg6nc",
  "key28": "29g9joZvkN7njYizseiiqTZDLbwTRF9nVKghybEMffGJQpmmH1xUgiWs7wNQ9vjEUtkGqm93vNYyRE1j6jBFkdeu",
  "key29": "2hoaaYKaBYGWAHahiYbPtRqSuQzgvBJqbMXX8a6FPRGk8feCNTWh6ev1gFZksfDK2psZ29MdPThAUv3TLQjJ2ria",
  "key30": "3mXsQmJbmVLajMG9CyzboTZsNTL7UaznWya714craYtQhLrjTsQAGfF1NVUtowNiVdY1KJ96X6abMvNDkFksa7BG",
  "key31": "2xrRwm47FQcTMPifyF4XxSZnGD2y7mJvvZGM5rGpzDVJF36292JasNneMGovE1WL4d9oPJVYeRX3guEs7MZUGsaU",
  "key32": "AdWqNpUc9BAVjr5gjDWPxz6vHynBqM1XA3qSbsCNgEjxKVpVkesPwFcNwm7ujCA4TwWtapsdvT2RsgETdpD1UE8",
  "key33": "61zt1oCNQ74CBLDCuJBh3tNUfGGYfYQargLrTiZ9GRFVSLsc4ANhS1sJD6nMQw2LiSekRE49kwtksNAiNyC36xPi",
  "key34": "5Pb65PPtfnCUwpqmco9JJ1EMem9Esqxd1Fxr6pdqk2s3HSGuPhwcqQcYHv9SZnagwWYsJgae4f8gGYpZGkafeoZq",
  "key35": "4TyamFmBFqg2grHL89jvpnrpBYMB2A32gBZmJ9Ad999hFndftC1qFaQTiCbZWV2PhBkeZyifC2xhBB8A3YEbGeqU",
  "key36": "VV86nN6rWaBWDMvcvWoePoJYfUNXuRsPfs2He3JE6GrUzhsWpUZJQh61xB74Aga6toLVa4Fdotrjv52hexx8JRj",
  "key37": "4DysdbqkBY98gxiaUkSZVPhp8p3uMjCvahJ9TWEnrmiJThFKy2pswaBnGQdtCCfNAHtFdcCdGhuEqPBLZJktY9Gy",
  "key38": "43KeUG9ZrE8B8qznH9fXhgSZ7c39fbFFM3Lxpt1HsMNEyHN1Q3V1pErLgjmDuWKew3NCL4DMSo7MWdJ3mJjQ2B4C",
  "key39": "5NgNVC51U7q5nGVAWR4xhnj7uFDhoazCf5N18gCZ5DL2DCR532QgvtXZ81UhcWaBLHvbkSFKvacizGVuPr962FZW",
  "key40": "vRHdv6zaUKwgrsbFm6eg1AE2huK2idhYicQdmigyQtPFqNb58eoQiW6AL5DXFjCBN12hysQePZq2xhSiXNHaGTz",
  "key41": "32DtfW9owtPWiPd54r8j9nUrechXb66sx9YheNx7GtEGFqnnYFyQAy6ozhhFFMFdGaXAFpwCvXkPcWcetAfDwUvF",
  "key42": "tb7UjQBYbtd3LrhF4XpXWz9aYmd4WysQKFgYKnAZagQSsrZsyWgXgC5bG5ze5v5vUv8Me5wpx9p7v2dYhfpejye",
  "key43": "qfNUXvWUGy8PExnvpnQmQnTEZePhywr6fEh5HvGzijPEc3PMjkK3kZ8e6SRRNGb4t4iCzsr6VTot5DujAQ77Sko",
  "key44": "2Eta7egCCq7DVsCaESYetC4neYqGAsLFQH9eC5JNSV1P7JKjaoSGb9zdsVvJvjkWXuUJ8CEtEMv6bnXTzjG5r29Y"
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
