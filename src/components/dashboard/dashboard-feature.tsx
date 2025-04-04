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
    "2yAx1p7VRDHJXvCgtErnVNG8YzRKrezxmz8nV6CVhD1wmPVz8x8JWSFSvNr13mXmsvMxFpHUzc6RWtrYNyRh6STj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61GGh2TNNrUM5ZSMg3EhQDKdnFP8EizzMkfByhypseaUx2wg4FMKsBvfsKsHsZhNagTScBdUeQGf3Z2wV3HX58r7",
  "key1": "b8sG4xeDkueQj1pnpyuGnCWXHCFu3evF6aTWYLaexSN5VFmPuhP7uGwZWMXeygpdz7yH3oqZyuwwWJnoQtCGjY7",
  "key2": "hZ54NPde5gVTkEHHAPfeYtoN4WnLtdJWfWTH1poAvWc9yUNfzG5a3apebAEizEZxdEe1mkpLfV2Wqxg97wvN5pK",
  "key3": "4X56imGGFB2zwsWbzWTEkD3Jdn7EX3YBNMrLm1BiMLX1rpg73v4eWuDa7B6QtYUwqL6BBgUyDSHTotWntTDaLjK4",
  "key4": "5rCKXZzrQ28EzwvotLJGPcCVU6XSSzAvcX1988Ytpg2wJ6GxRLDFFEp6aankC3BVCCtpxZR7cF9acxnDtELCuyzv",
  "key5": "25LNsSTBFzqH4UAxFk2XB1xgvNccWyGHmCw9K7DoYiFyfhiM8NdMdeAzyVdLofhXPxQuLJ1R5HYfR6HbqFWx5oc4",
  "key6": "67cnsfqcMhRKJB5fQKmKrug6Jj5Z14F5zGP9GBqSKQMTrxGR2PKQzpPafKK8rM8z6X3k85zthcXTKsKbPH9BLa8q",
  "key7": "HMXx9hGZq4aAGcfk29YD5tg9fVtxw98q1sZwB9J15WjgiCS1UMGxX4EjncMy78FZrGnXGcWWQ3rnz8cGaQhkpWc",
  "key8": "4FbEsRBFAfhpUuphJ19soXX2LPTzK56B5XAhBZiUf836WzcEUiXBft3A5MPN563mtJ3TKX9Ad9VGNWWqSgQKbMCn",
  "key9": "3Fd38VgoCjfH8f8Fd4EtmGFYTXvDcDQMr4GrynXYLGgzJMELepaGME86xCDJmmVR6L6KhtHXnwYWj5a8RZ7y8XBi",
  "key10": "5nhcCpTeP7UcNvdgff3LKYon8JVP1RGWF9qCNZiJgxAkdsEQkB7bZwATkHgDEm8pEo6RfWivsTFMrDknNsYq2gCa",
  "key11": "3yKzD2HCdxZgStmmmSSw4urEfioyLUttmJkF9MJoSmuZECTQ1fK78VhKTW3U4nkczWXz75ZPK2qDyK9KiC9Nf9z8",
  "key12": "KxSHKdPCMscEvayivBYHerZkgU4xntPeGwGQ8no1RvuytT4GrsP4XFSWRvpzBvQdmiDimiriQPL8V3D9yLggpLW",
  "key13": "241uQ7vUz36CFAyj1tobimJSVdkwVaXx3xFYBqPwwJQbEs3qfvAJnheHWiYQZG86cHtDcxRfnjnKkHVUAD75MW2M",
  "key14": "3erPttety7PN1J8qmxGiUdxYBdsaqnoTp2ynXxcW3ABcFFZ6dYtrUnpBEacbETLVfrvmVpmR2dmM3eEen81H66ix",
  "key15": "5Epj9u2g1CLV5V95RS4ZmgoY9rMAKHduCWPygCDHnHxu87fUkmsXjaP4UkrXrWJWcHY1v8EgxbCjC8QPG6moGuwM",
  "key16": "4x5DgZbmSNoaPcmLv5bSNBx4Zd1UNU2HeiKVJ52TDMm6XZCNKDe7Tab69qFurnehJGgmPtHTMaSUS5xZmDYDH94H",
  "key17": "5QVyHn6PQ6ms2iZCtdmdsLJsY9ZFEPDv2gCuqLF2f5TkS1J5bZM4D1jQZS3iMqxXgSoJmnCtwe872Q5t23pSEH2g",
  "key18": "5yr6Lfvn1skHW3aY4MjFnMe8fpqEKKfHFmvacbvu2UzVUh6hGEbMRAiz1JXRUMvUYecvo4jK4rdntzvkmM2U1VZM",
  "key19": "5oqmk7BqrfUn4wqij1eWztc3QatWzwKRQpN7oyccoEZA1khrktf9ZFRT4hGaZ8mhQa1hS2mfSMTvpbzMo38GUDGq",
  "key20": "5k49WSoY574tAnCzmLJk2yVZpmiM5sW7ZXEso5HYeJtMZvawkweFzgyet2SA6Ey3iNZwAbbYieY9pMSMWwZWiZ2Z",
  "key21": "4GSKGRUaW4tCzcW86H7bfCPfLVNVGqtzS5fQmQvFVGsC3EUtX9mVjnMoZjUFWQAcC873tPXDvEX9VUMtpzjVkLpe",
  "key22": "4yyghWdAfxBg1sn2wzE1pfAqFMqz9dmiqGryf5RheXFFii6xPa5rim4T3b6i1ornXhT771QRnA76QmVEVhnSoNrU",
  "key23": "25t2D1y8oWbXSVEcYwSSeKvGFFYvaikL8o7EPZT7vEKrtt1NVRuU4v9THT5f1HL7mfTCTqf1cyDEM2rcaQoeAxpy",
  "key24": "4NUDKX1m2nzmmyeheGz6JgSobfGcHBSa11gzgkskGRdpVF5ztXdKS6ozpEwUk6iJvyLW6JCYDYdjmuY48QGmJTBF",
  "key25": "2pBapJa7xQuUpL8mNpZL9NUbBMzQvkT9K58gVSPr3LfkarKfYCgL5gFdaUKNVKUiCbVUcPmmcUaYAx1EHPKZbvSe",
  "key26": "3tmqVL2V9Jwv2EV2TGZSPhXW9GJPxvY7mPkTqbDr3ES6r1cBQDRpt8ADxim69oi674Efh43S9QxCGvv1RR2XtLa7",
  "key27": "29oWFacMvRd3m52ebi1UNKx8nPCiBavFyP5WprqFTzFPVH4PuE2HL9QQ9oK3uiAHCvC5QUrxPw7NkK93YVSZXjtd",
  "key28": "mNmg5UF6xysPDiEm6zcgiPkE9JVTHqXxPWh9JwsQQd2qNyNtrhpqKjfYV91KVnBLmF1k8S96cVftb32Eqg5b2ia",
  "key29": "2myfuc8e9GD76VeNoYXdSh98YdpVUdENCSk9ZGC7dqwm1M8x2xmBEuKeH6VoxrBxhWtBxm5PoaWEpAwM9MUC2XfL",
  "key30": "2kZv1iLfFkqF1QFRd6E41AYW598f1f6Enh8JAG45Rwf8fNMY84D2E3iwV31yCdNap4Wq16MrhZ5NpqcpNZmRAud1",
  "key31": "3zsrLHrwbShyZhGcsavVo4j4gqnse2a5FqDhS9wrrcbHYB4c1RTCKDLqoqHnU2yUBJC6JwVPwEafCdS3HXHgaHue",
  "key32": "5DXP2JSvhST2eoq8VpdZqMXDc7daEdwyggWexFKAr846iXb8UqBdKtg2Q7pCW3chLfDkPjttaYanpF9m2WNfaUew",
  "key33": "4byDdHwwdxMEesVczZXn1pAAdtJ5CanwGo67fwQhBBzqcnonv5K3TUEukF4v2HLLwSSrrsqWGQbptG7mHExb8tZB",
  "key34": "4CHmtKB6rgtZf3hoJcneFxK8Ugb5n2SbKwfxV11Qzjw8spEFJtUhrY1ZuNMpxECe3V6tLGGz9ThAYRhRX3zgur74",
  "key35": "4HWZEQL6yBjf4NEek47sGZB7vpf18QFdZionTseUDMM1EomVsZKd7bNQ4Wn2i3zsV713MFnv2bR1g4iSLjV2v1vs",
  "key36": "4DiMQQQpbJnZvCzbvHTSYaUxNbC37vL4jFbT2uUYVaYs9Z4ksTw1qtuchkJ3n29TyWYAcEGVssHRboWsQbYEPZkW",
  "key37": "5BAVNv41xafj1cSh3esGn21w8BorccuAmydKyv8tbeg1QEHvePVEBZe8x22pgNKKSgjQZMDZRABw1AiRkRcqSDkj",
  "key38": "AAmhAS5DJcfekSgoDg34vy2jc5xeJ55BcVgpDWqJNRiNdEEuCFicXTus6SmPq6ipHKApry2Ca8MHemio3QwJy96",
  "key39": "4YdhsN85yzmS3L3qeyhadCWFF1zNCMQ1fBKN8P98a44k7JJVcrLCgANauBvSUJLhQne2MsagiYBCetocRBhdkeUF",
  "key40": "35BvBDmkZf8bPZ49d24dHHq2KJDokcemeKuXNpM39VFurWuRsRuVf9zmxdQGwVX4BPbshrRmJEVSXbAGF2zPqyZ1",
  "key41": "yYurbSU5E6WDpR1fU4V2Mi5U2qHLiLS4mW9u5XdTYtyegGcJgpjbuN6nxDSdYUpZsDi8CFM4FnJUwhJddrrtfGy"
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
