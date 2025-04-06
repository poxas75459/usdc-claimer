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
    "AmCXNkYgqL9pRaRnYJn2qU3dZUiG1FLvXGaRXEfhsmmS3ZL6PbpDVtcpBMT8MSgqXd4nsNsicvPAPsAZpQDoq9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E8pE8Amnw1PhtDPxYRjQMEcSwQEZ2cVuUsAZSBqaiKN2Ur6SsHVybH6NerfvotMS5yqZpPKkV2cdUPLqXiikLpi",
  "key1": "3tZbpehNcWhNsyvBdt3R36hFmDjJQZ1tyvxS4ThhvfhWzGGEKJY2E3giNyJRsCvGvTGHozBnydPvimSesEAoxjG5",
  "key2": "4x7qAxi82UkP8M51oPdnht2zxiAZvMyjNJowrtGmonV4dDTjkhfkZqH4BVSK9VBQ1XiScVuRSJpdmNtS8qqPLCK6",
  "key3": "5Foka4t9sjTW1JtSETXziU5D7Ew5AhRT4GkhAtNeBcnnPikQMrGRH1vBwe9ZaMJgAR5zRFDkPrbi5fZDD8Wu6BZs",
  "key4": "qP7QNRgU1ezUCBmUCVAAFj1mxedFp2qeSLC2UbwBezSPTNEPXbfTuhvtBykjMXvch6yBHC3fD5S4RnCpPLtkc5E",
  "key5": "59uRpDZT5pkDnzgLN5xvmHBv5WSSZXngmD7j1SjhuaNA9GppC6b7TpuXGUFUkfPQ7GPmeRCDJGYwegdMz9LzAzq3",
  "key6": "djYwAdVYqNKRLVCgi15kSHKg8tAEXFBVD8YbnM58yMDTyznJjSrLLDLxrUfdd1JoqyDBoBUEDUBrpJQdfiXnntL",
  "key7": "4MPfqGVL78oApxTGmtt9PxvBghUxbMcZWUMCb9hFEXJWMc4b2cGiJEegU6HKRtuY2RbWXf8ZAw1AmFQQAsVAW34x",
  "key8": "4gvxGbosSEcFxnbaiXDmkYrrkrM4pWGo1u4eTCLJXphZdmdfcV6kP815eJnxM8nazUjPsuD9pMQXPgMMrWL1rET8",
  "key9": "67GBXQbBzHB5whGbewWLn8nG3PH1VXnicfMj6cp16BacGbahQCqvDbfvk1nU1rgCVkTuLRhfmZbNSAegK6gaFHNe",
  "key10": "25cPtJn5yWuufwYuZzmQZDttwaqGfT7b3dMWHWSRC6iYv6fVKxBDHAXN13KHvXQUY5EhTT276Dd4NTa9Pv76AMZ4",
  "key11": "2t7R2s5vSuWbd3y6qRQz5WCwVbBe293waJs8D2KgfjvYs3EhM9MkHuuTmc8p8mPAChCRCzm7tYhHfs49eVMonU8C",
  "key12": "nwAjhhHBNeYEsqzRdX9gAeSExkvbFCeavtWRehbwgq8wC6cr1K6bm9Gm5NN9F12EUkkdMkFXA5Jk26qrHYLncMs",
  "key13": "4iUGTJWzq7gqBF6T1mJqvyTpZeoeVNKG7YdkJoakgUFFqdjGPEX9i1eLpcDMsV8Tx8QRT5hyrNUKjuv6wnabiRt6",
  "key14": "44WkZgvydDpkXHTTimiEdHtCNRAxpdDFfRNAKnUDs4EyDzprcLBWBB4ddUK4467NWPhFSMSoL1s5LDzqeBev3FfD",
  "key15": "5t8k7nzyz2dsCUbmZgEvRn1GXjhpB6fxadCqa9jix9BB2UQWfpeQZXm93NiDkmBGA6FPJQntsNeuYLJAxEY2Qon",
  "key16": "414K8nH2vXBY2Xyk5R1wLczcjQkwngoTE89Hg4gBHCRjjZYkW4j8n5ZQJgx8ndW3AtB8JT6Xs2G2CywBYr5ym88Q",
  "key17": "2LmPYeftjB1jPPv6GXKe3F2H9DU8rHrauX6idWMz46Z1qHXu61jpZhTUJD7ggdVGt6UNabxUWCpEGYP4CfYdQmkd",
  "key18": "oJxsBYpg4xxGdu6owK5f9z2zKqaQuQ68NdMA4rqwEFxCEzAM5HCCF6tt2XNh5TEA5gumTc77AMSU6vgtYiDCZt9",
  "key19": "2VxTRrAQXTCZhvRM8VX333D6pbfLFjbj1nAgUb7mGxsnyH1oCok4kqvETxqTN7nA5Epz9ZYsNQbjum3CM3KppaAn",
  "key20": "3cQt3Z4PotqbcaXNoY268NHitXN2q24VnNr42Mooe5Gk5Y6qj8EFreCKGM2HeiAtijFC6E3DSYBzQ57NL39c5Tgk",
  "key21": "4SEZEJVUm13KiHWbSrxhRMCFgnUryTthTDSt4yWZpRhH7x2dg33AizNXtCjcj2RQCDrw3D6jPbdcaUwe1GgLuZLJ",
  "key22": "2v6Fn9gfuJgB5m4JFa7BRvtF6v8y6aFy7xpVyKiLN8QDKgGC77g7i4Q3xPtJkduceskfdZ2Mx8dUCyXbuZbgSwq6",
  "key23": "3YXKcYq1MWqEj9NHuxwukK4aQUE9kVFkrhcCmswWqVvFhviYg7c8JGiCaBSAtNtB9z6Seq1kwmMvNNkGYehDRxLx",
  "key24": "4wVcsymbrxPNY4oYguvH5iaVZGCDjvSDmEdVEkZudUYtzdJQdTpNf7ZV4EccJCHonCFpPuhMWsf4KygtrwQqzbvb",
  "key25": "2wa1sQUQcHFcpb882eYqiUzoXxPPv7AnonfMVQtKpvwGYeZR6bDqBBPU58kQkre9cjpsq5JQGmndHRUvimZxE39t",
  "key26": "4g2k7371ZdL4NkeeW3BWMwB9C3rgReQE9W5g9ZHgqcqg49jxeAb1D6f7pZXZezpuqjfe9AAbFEBc31QnYYGeicLg",
  "key27": "AZYkfp9MPjPzsA9d7s3Foi5FtQK7M6Qw8hFo66XuiE4AhuYgd2QC8LFNDGaboDqeJ5VjSuPhoxDhzqVbdfL5gCN",
  "key28": "5Umfw4VNgCoQJexwcW4HUL26zm5RvV6tvsXXaiUxrfZAD8fw78djkrsPkqHCyXLhtkvvcKN6mb6DgPAZk38oJZey",
  "key29": "5mVmKb6L98CSBVESxLqW6zoMDRh4qkitXDXgKfWUKKtPiPPWmXbjGHnLThay9UXu9vCArFxRoeoZzVQ2YJAoFc91",
  "key30": "fiWwd9tkkKYfVvGLoXT5QLokQANGTNuEkYiYBXiRy6GtsQ9ojVgS21aMPzJV2LS3uBPsuEYmMeQ557zzmpJYQt2",
  "key31": "666civUUCDbfgHvVoFsa2KquCfbpKtum1oUbMtyY66LS2eeU9QLMSGQ9VGkssttZMKND2NizJwbngaptyqXjG63",
  "key32": "5dMYnRmhwqKcwK4hr9LQhJDhMo5ZnDoTyrnQh7Hkm6rDrfsKGR2MGphzm21iTSigtKUSswnAKCyxDvZvxUC6c197",
  "key33": "sfALhn2LSD5tkn4z5oj9RMq8HVmB7f3rvRFfqqDAFbATicza6YDpKjq5u92EFsN2BCRrVVt3HB6yZA953h9ZjYP",
  "key34": "5zaiKCxnDYRhWs9nWuP2Ub2mH6nd1YFz1NuHbB4CAD3as3AqadpYxM1TM2fPZTgCKppek1hiddH2JbPinyfvekAM",
  "key35": "5o6Y8856vCzdcN4Ck5euDyo5id8zUx4NBuAYBugwGf7vSAP5ggBtMf9Gz5qGsnb9htb6xtsekgmYT2TKPxUmsFZX",
  "key36": "DQxPQ5oEPkubk9y6pusiPvDizZ7UiVcwmVfHSYT8C55hgJPhDEz73mcEXBrYLkRVFinVAi4hMea1Q9UbBjDMvgw",
  "key37": "4o9cRKT5Yr52Dd3fdxHzv6uVXAcfh6kte5jqiak5wN5QH77968Rerez4aFfz5i54Ljuj68X5jvHPk1Z9NAq6CTzQ",
  "key38": "2LjV7TARHdvCPP9zPTNSrT5Bf2JDabWsgDR8GH36An3FzC5d9f2fXCTbaxQXsQ1fPVBoCDe5KapjSWGQjUFLJjza",
  "key39": "2tShWpGPowAymm8CUFGVLnkMMThzZRsPooyBgzwEdi2J52Hg8ZaCBD3HY6oD53VdZU1BmUQi2q7o8jbNqUgMjkzn",
  "key40": "3C55BN46jZH3UKwzjpA9c7XSzvgrgaahox7HUByQrPKqiS1c23mriJApYRfM3URpEdiacaUCCPuA1P82qUFpZV4y",
  "key41": "33UKYeH9572mAHsD8WT1Sw5c6ZEoKW7ko61wZ98nTj8qtFx1Jwr3Du4SeTZJCmafoc6JFxZgYBJrphNfddoZgX1r",
  "key42": "ZjY1qofNRDYNukDpsXDsZUZEsV2jdSxExER8yupQmYHBXa7x4TqU5AwdHcc9FfPunBVUjM57S6bRzdZhCsUMNas",
  "key43": "YjNSFX54XkPsJDVbtfrt9cTFPwtwCJpeejCErbMQ3DJ6PqZGkPJpP135Pig7x8ofykezCRWr12tR8L8N11pNz9i",
  "key44": "2iicuYS7KrcmpXEqssCewezp17kcVNQBYQsWE2GnH28T5b6EdjUkiTM8fH9vCcz8TEjVBo56U3mM8Ld9uzrS9hvp",
  "key45": "5GiTRmHxFRK4qVNMmi9ksE9i7ymtAcGMvPNrhwpgUz9D8aRyizSGH7vmgw1A8kcD3MYwqMujxNaMgmNfbV1Lv6Ur"
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
