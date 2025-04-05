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
    "XZcyMjiRv7mokDBB8VUAcJh2UBzPJkhC4597csmttUvDQeKK1tTVQcfuFtxmoPTo8LJk2sGYavmxVR2fKBAJJsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pz5n3FhzKfWeePZRRjC2kBbi4BVbzcKZ8LXUyYcWYKAwNYrkPQ2WejehGyfyR6zQ1So4HfPzzxv1EXjSEtcbaK",
  "key1": "5coqLJGawv3KC98eAxseN48XVcnEHGYsD1GLZV6RMpZz2yMcTfU2gftPGVjSiStikyVReshdjuNZTredc1ADUNqF",
  "key2": "2PiPTFWHbvKzhR1vnMD2ySMh3BgHgH8Z2zmLEZV6d6bpcMwbW8JXNHfYnhNeYTFjiPd8rBSR7VWb9SnNkuYc6aMb",
  "key3": "4118gEiRVGcaUaohiwh9Q3UQFEiwjchmPpi9Ta2KMeyERD69Fm5ei7HDSNyaM88wH5wfZkWkvgzZEjMZUUfm25j3",
  "key4": "4guFS4SZhpf9wXTLgRMZydKkXpywAQ6D6UMixG3uLwriZptShqwff9HV3scchEMypQrM7SLn7HcEguwbXD8gft2v",
  "key5": "XwaX8xePBp8KMB9nfQii1Zq9D8rRNjwess3Yxob1Jca2gg9USvUkFhpn9djGgN1owderttSbMR73Yb3qmDeZJHR",
  "key6": "EswkmbnfGp8TWhwNvbdtTL2h4L45wpvZsnEpXeWrkRYT69ZYJcfBs4gchjddQTS6j7G8QcWLpD6APMRbcNJRYC9",
  "key7": "2sfRSnXhNjCt7LfrFe8oFV2qjvGoZvExWQsZAJWMFP6PZsWmhWY7u4ZtzxJcSnfm2v1MD942NCA3Aj7RxuMw7SoP",
  "key8": "8NpoJiZpzWG4tJCFTtRvNnuJuoNwbXvxDaqMDdYKRgQmBGTsmtXHhJXTWEtZtJehe5jmTeG6pABM8HMPTQnkdTb",
  "key9": "62GKD4jv5NDxnoYhftXsWdTvCDxAqkbtZu3wk79oc5xNV94oLAZ54Kyhgroe8WSEz6dNXNqPkYUCxDBaf21w4vGX",
  "key10": "UjV6bGRzUzhyGo7vWk2a2FTcFMtvFr27ftdRtoTksmNHkM6acUJW4SzY3wLeb5ER8rgP2XnsDcMGAEfixyni86x",
  "key11": "2eVkz8RuXD5Dm7QtxZF8N82HGFk2TMBjDYkjkEALMdp4mUsthJiHE8g1unzXWPV214XRdSCEUWEho6EmRx9H32tX",
  "key12": "2rfqGaHyiteooLAn7Zc6RdwwcKK8sTWuTsa98YB1Jrrfh9mt2468R2NzEC5CtQDLCgkZPL5zGFwotWoAsugWaHwU",
  "key13": "4tKRU9SG9J69gvonBZvHqCLY6o7eCp8KRSDTSxQsFWE2URZdfPySw5APZ2mSxcz9HZNa4kMWqFWKsN1XfE59L4wR",
  "key14": "HpQjC8vEerQ4rmxWJnrkD4Nmb7R1N8G9MmCjKrsnjwzdHkr4HZGxs1nFJTid4hakAYRxtKaCiYuaZCwebCe7CSd",
  "key15": "2wjWeYFQmGaeZsJAyap7uw8KPLFPx7MZd3t9teV3usazDL3g6DFEpHGomohuaqreznWMbJa7GcCnwkBtUqqVBBSL",
  "key16": "2dGWo4y7mtGsivpJmSeBscACvBfV7y7GnQVmZsWiM9Dq4VCYJF33MC6eo1gjxH2DLGvVGuSdiK5Epp871iVJBJny",
  "key17": "5QJpvgGUVbkS84hCQ1vbTm1jvgQWdzvCNddsk1riuepRf6tpcPtbbQp4Q2rVqxvPeVr7y9Faf1fuiEkWUBNxU2ds",
  "key18": "2uMZLo3xxY5M721M88xdMNUfF6ofXzWGUqMtv53PqCobvaRXHPapBrt5uQm2ZuY4tRHQmZ6xvcw4UF5gWVXqqZ3U",
  "key19": "5UB1yB4NjxgFz4XJNSQCSL8tUj63BPSrZsBjWxUJsyVgGyN2TAQg1e2xzdUzKUFVtx22dNWJH2YkKZtuhhUcbhGx",
  "key20": "3JnXsns8pCJwpLm53yPkD8nA9fz85xwCubi1auBh88iCWjbUfFfd7S4A9ACWBsPN9WyJ1pLsBj6uCJv55ZVVyEwg",
  "key21": "5gTPNVu59gL3bbGXnTUmSrB27mwv5wHguk4kH3BaarEB5EYWz9CrnLM7Xh8X4VdTwajMU7NoHQBBewvVQk7tCpFs",
  "key22": "5SZr7cvZipZv3mQFWxMmPbyTyV9a5Xqp2pNKEQBo3WRk9qBYE91eMcSkzbrozpYkjPghxsMbgDfQWfRLyLyHNBiA",
  "key23": "5VvUia4YgmAEgzUowPyo8jBaac5YzGWcvsp4HP2J7HUxDiqWXrW1SgJbkhq4DZ3uLiYSrqn8NGqJQXu2qVR1Xhss",
  "key24": "3J4EcpgBR3TAYfo7ckntMUJvoAbd9kjckQeHCbk3quxPawYHkHXfg2pEaVeHMH55zSujL1fQRwkB1rZfayZKEcap",
  "key25": "nDAstLUgnwdR9wB6yoEZEzbbsfCPon72b62AfZ5DsXE67dw8gDfPk7x4xns1mD1S7w3rZAYhBrZF5s5ei4d8Bwm",
  "key26": "21Ma1WdgQwTdFnNMZQySkZ7JydVgH5RyJ6urJmA4DUh2mRs9inP7mA8ZA9Uohp6GNTd8JibM6yW76vEDeAhcjcvr",
  "key27": "4oStHPsw61PxY1ptcZLg8nDFTvigunisAx3Ek669mcAMF2HXgcepm38k7EghtWszNPjEWAybJAA4BukUK8XZGTMD",
  "key28": "3eRJ88CWerfio8tCVmK8TgWULdQz3za6Ht22jhGWUWXpjgiMGJpvLsfHkVJvWJJjnqmFU7J2Pp43guiE2BPpQ3wR",
  "key29": "3BQU5ywViNTELS8mA7aDasPRXsa2wgpNxqLTN8Rf441yxt7zHdJQMJjgkv42kiL7qS9DcPcXRxawHnVofT4upXTT",
  "key30": "taZVRnmbUgv6rE5gJZ8i6TNMNU87p6FRvSSgen9F7HSjLvU8hQtcjhXquMWxxe6CTbWCpHshQTXBFyqbnRFbqsS",
  "key31": "9xxmAVSBDNPcgwQZSJQGfwr6KYpgDptG9XHiSZciFoFE1KBhdU2jz49Gro8M4diX679aNVeBkQmpMTvqyMEeiph",
  "key32": "52c3sVp4xoDR9PXGcdNbHiGKuyGC9iWqkKJn3mVnc93d5knhSyYdB2jeptqTxLWzUJK25FD8ooL5rzCpUC38737X",
  "key33": "4VaNuFZS1nSdYtZRt3PdLkyTKr8U2yACQCQ1EAZj4okNDY7EnSaTn2jtDPQ975e2pZPHrSYsK4J8sBzwyp7WMhf",
  "key34": "2cCEBXAtnM9hQsZV7QsY8KuGuV7tkzKQdvnjdNMs6eDDC1om8w9n2GumDgXtxVpPiVSaibQR4qnaTtaxx2Gn3bz4"
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
