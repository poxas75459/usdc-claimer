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
    "2XsyVxHH1K13amDLdfQrgU73GhxCkFY8bCxrYgXWKgYq2vS6q1zuziro5haD387NWCGTgGXUkR52gzPDAHMahA5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96WnsTaCmbY1PLhuf3JSwyDecCfpXnnNUCAUHdN8s1Aa64FdtESPM92zrxox116VhZpSuqq2wHFYW5bGiAq2rZz",
  "key1": "3GLvtyGWsav1RHSc1SzRMP9ZfBFaz72uePPaaS9vLE5TVRyFEmDdo7TPM3NnLEc33EnVMAoVGBCvX1XcnLfctDJB",
  "key2": "4iPmEuCqkC9dh63XhV5dhf4wDebeq3n1GEWa6LM25XHtEAtpTHXNpMmoPFoiDzRc8UY4i3cz7uAkspwPa8pbrEah",
  "key3": "b5RPx4WFVRgGGorPPd1zfGyyUfZJ3TXTyPreQLPkDrHurNZQZ1mkRrxChcsT2B1QhknVeudgDXB275eh3sBevFz",
  "key4": "61E7uie5JnkAD5tLDPQdAS1nRaKBVSypVqRLx9RTx6GKyDMDAgbeud4EayLcaiA2BXkhf3HBmUF9GtZg1aey33Cx",
  "key5": "xbhhA4Ky9Qx2bYjDqyeVdCr6vowzXmJVFXBy4StijZHDdgP6i6STbP4D3ctaHrKPTBce4o7j6YdCjpzyvY9Jm5H",
  "key6": "2WSJW1UFvg5WFFH8tXGM18Lk2top9mPd4uk6EpxHJQzUsedG3C9fUaYdrKqrXq3vNZsgGa3mUhA2M1YGtP2evJH6",
  "key7": "2kSzbphcgUaCtdH9TcS8r7yvhU1y36tpQgcPB9JfcroRLw34mNzi1SPa2JuivsCJsV9YtgzTKEtmEeGrmppeUbSo",
  "key8": "3D24o3KXopQtsyepW2oGPz3UTt9LuUfbcXx5DLMB9TxhoRQpDW2m4gL1bVWQZmKRNYaMwUBt3F1MAT6aA6Ze9uWB",
  "key9": "5YTKaVLSjLf6o3dDnaGYmHpyLFVX6P56qN1SFucUY9wxEokdMJDKkzhD7E77NdgX7Pk1S8yP1MjvKuUiAfYpm7VT",
  "key10": "3Vz7jQN666dJzP6Ej4uyUuZ2PgiUsieXwLSqYFWhcamnm1k8Z4ZQtjqRF2ud8fwWLydykLm4gxhzWNDVUKuZSbPd",
  "key11": "ryqgs4cojrj9RThwup4LsZ6f93MbygezhEMFjr9uKWyuA8SeYniwLWMTEFCSqUTmfZamwJJF7Yc3eqvxTrLV6Hy",
  "key12": "65LgPKS2yCUEQAy7U14fKqTcuEM3S6Aep6oDpdSfmCtmPXZHkXj4G6RmagkrSX6TWoEwM9E8euvTHo9erARBjv2C",
  "key13": "4ej7ug1aXUrFq1tKnVhkMduofFj1SuvbXBLH7yx4duUuMfTJL5J1UfAbyRqTJmPRbvqX3vLPs5HE1A2j5Uj26mu2",
  "key14": "TFQScR2Me54svBpLC8sMCH7uF9GK66HRuzSPPAjPaiw6wLQvz7h5ACtqL9tkqoQoY5MyR18edzgidbkqbokkH4r",
  "key15": "2xWRCKVWd4JMgvzoBhHmRJSearTCWrG6XrsYvLJ7YPTMU2Ep2KbkjrQqoTi63S2X4JbppQkYsvY9juKCBz2ipPae",
  "key16": "25x1tQ84j3pj9tnr25rvgYRxnfhxYEEj6xYg2GkGLoC67g3yZ92vxcRnWTqce9vpFpwL8PEp5Q4Qf7WMB13ZVp4c",
  "key17": "2WPYLUtUQKqu6KTjjPsiTbZPshYDxwmzaqk3qDeaWsNgcrD59HGB8koCFE4KrXZZmWrXJNqZTXZknWd5CTofTbGk",
  "key18": "xYhif2wS97Mogt5X58iWiuq3VUXJzhNQ7hJX1MkcipCChgWrBWnjqmxTkwZkbQtQMrH23hwx9PCTMg8obULjAdD",
  "key19": "7YHmF5MowM4VfG7yUpXuwjJREjJEqjxz1wFBeVrfuLUysopge1rUc7Z1KRkZoQG2T89hxfiv4qQm8FRe5HwuDRh",
  "key20": "2trfgidpgppHBjqRVXdZKVvJiN89pYfEScJY2dW77ZoovsmUHJ7LjottDYW16kAGF2QC44YQpYZ4RPcgsVwXeTCh",
  "key21": "4tx12sxtVQs2SjEzQsvv4z5pL8qdYVRTo422ndFyk3XFBo3F3FvBpc77A9oJyx2v7AbSLMnDo3ysS9SvtpsYgnZv",
  "key22": "2gU9DV3mYikSVcSEc3jLKbJLsPaxBgbuzsaSZV2a5MWW1ZAxtsU2a4pKdKHK5FEnBtncx7Z2dzLAELae74PxWPtQ",
  "key23": "3PVMVdSkXYDPs1xyuDsG1F8BNZXDubP1Awh6ynbBKZcUK9kp49nevZ7hUtaKFRnw9ReXZTaz9VfdZ69oPG76hnRi",
  "key24": "5eQuwBLVz65MSNDGAMbgew7MKgB7FRsde1XWAP7kJoLyYCxF66JgRNfV54FT2kiBUaMkMs7LadpjTgaqyqwPobGT",
  "key25": "hGF3Qji4khmzFAYL8YuXy44TzaLhZT1sgwnp3uGVdBkbCrMTCNaMn9J8YZ8kW2LLpgLdZbknphFULH7PBEoc7M8",
  "key26": "5ykCeFzjBP4m5iiPaNmxN6QyQ441zJhiZKFLqT8TgJMVveyQmxa53Fy4tHcDYbk1A4ePf3P6eXnFfFgUm4Akbg1t",
  "key27": "5WWLfLhLwLzt1Pk9t13EChXeCy7m8pmvUFuWEx1ji9UMgqPvwWkD233SM3oG5h6MDeGyUaQVy2hrkwd4DC8hfy13",
  "key28": "3Ns1aacdULWyJtDJsK7QqJ3qS6AGSdvRVM98b3YU2sffZYKn8gFMGgTe5pZgUc5CqwSuW5BmchMiwgyP8kAZzxfA",
  "key29": "3jywbs6DmxxcMyn7Fpu4SY9gKFvwEh4nJen75FuumjXKVjKfezVpViKgepMEFyBdRMszLYMXHbEyLjw6gtX75Bhh",
  "key30": "41rcMbeuiytkjtkYK5TaTHWHhMJBx6691zhAcW2bYH8GsWEA71xkobJku6WBnH6xyfEMVuqACoVSG7R7tgsH4FjB",
  "key31": "427ztExzJuoKmgHwgwRhKTnEmrnzji3CCPwHpRjV2AVbYjK4N2SCWYr5o1hUn312eVGWY6YtwneqNRiLBghn7cgp",
  "key32": "5RdvsRYbGDRjU4DsazowbFxFbqiaD2PcH84sr585Xv36gqZwemQgoxWkVQXq3ErKPeyTz8F3TnGEBUgFE9hKNgcK",
  "key33": "4ywVUjvYkj7mNENoTUbcCzvvtR5zsUHCZdrbKHhgWsVjhuYfArXQo1zDGtZLEfPUCdYd2M3veBwW2j9cUMKTcwr",
  "key34": "2qTdRiAHczZg8pNb2nyRpmEJMLKPc9dxsbhZhgsqmAx9RjpQHzZJCZ8zVbToyVKLrsXaMzjeHx4BmMvsfdfpouy5",
  "key35": "3V7kepXqfdSf7HywbXKFNxciturFSpfueNkzMmeW5me48vX6mvbk9ANF2B8gg14HAL8p5sCAk9CRAAoyfBW1tLo2",
  "key36": "5BVmGbUcTJ4EXGPBB1BTF17jrBKBdYSipmRebu2JWDB8wdShmgPivdehcNQppkEJsJWFDHUTH6usx7R25shg8ACr",
  "key37": "4hxEm46KUmPk3uhhm1gU7EB85Y9zJRDXdiWV3SEYG55EwbhB1fCH6mSi2BL9R8kwFgrvEBhcfMTMG7qewTxC41ED",
  "key38": "5PxApVieMF2dV4PSXNjTcEf55Xd4bFX1Tcq91LJKipNSFm3ML3r17K8CvPahEy4AbYBqm5oCwxNWuFDetnxRHLu7",
  "key39": "3vrNTbeuhPVQXabnzddwnRAZD5KwcPNyCYHLcCebAz7U54fUvCHH8pRR2QeKBkXjGYfyFHrjSk3WUdgRCGAyGRTL"
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
