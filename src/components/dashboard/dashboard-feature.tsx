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
    "4Rc1tEbqHJQ7bZxccD2rhDzGpQEQWaFKMvHEHhCdh88B3He7wsrJJqvJ9uuRY6LBsa9JWDua5DXgSydTRKZV56yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ktZo2LR6ZkjT9m3iQi3cLEaDP8VsgnthiD3bJWR2BjDbw9KUnNv8RC4HW1qYtoAyFWSNbiXx1qvLCv2K4tQ2vq",
  "key1": "5uLkHsxXPK4BCUQe6sLgnoYD3tPX8rdiqwsRV5Rv4xxKLq86Xz6AVMfFakCQbo3fiu4cUWoHrrhK9qVCjBrQrFak",
  "key2": "hgRgNNqHGNccYViJuzT9Us2YggS5rMFV2RcgPp6HFnGXj2f44WGc4prYr9n63LCcVBsfCDiu8nsRc43C6qT7xMk",
  "key3": "49k66u9SLXnegUdPJwWpBm1wMcatjZb35WLsLsLJzt7QfJALL9SJ8N1HjFr6UQCRu3z78fe86iyrx4g26RiLGMAd",
  "key4": "3irqv7tTNsb9DT15CnwfXQ7ozgXu1u1aif8g2PJcJNYQnd6LFZvZj1cEeFGog8EzKJa7EHY3qpx39YV5VjmQ3fMX",
  "key5": "5nAVtiZXLqLN22BxT1g1FGKfBFi77hr2cEuduvUT9xnHMvijD5scFqLN9B4UmdFvnC3yHDPUhdN9xNryqnCeYh7r",
  "key6": "46a9UmcZuxwQ9WHi5kfxEppBPMc4CMXRxafivxRuHVxyfekf8AA92FVw49QHxhN7XtTaVEiNnvy8jt17ekk43jne",
  "key7": "43QCH8iuSEqEYvLFFQsfhaG575fxESJhKUmL8xVYdFSopuasjSmGjKCuFQXDQVBdpRhE8c6ZgSXo5CT58FUuBZPA",
  "key8": "4UXF5Xg79eWCrdH7xRmaFPMBnk5qBLtRDTN32UMb4UDwbraSf5X2sBVA4nbPoXHJTcsChyJg8vvqL2GYt4pKjBqH",
  "key9": "5pMjoXAU2epL7na6zNLkQRQGZACDXdzjmygVZQffM9HQbbuaYroattk5pn8aRx9gXnxhe51w5f6e5nxeXvDF4F1D",
  "key10": "5sNiqmRfD3YL4AwVUZcqEsT68LYp5TkbSgTYL5oEHt1oe6CbzzPS58eCM6Q71iXocDimquKPVyemGjH6QAwU5BLQ",
  "key11": "3SMuNvrs1ze6fjb7EvLihh8nLtyD6GD9ovi8d2NJdjutxeLb6cuCGzDs73bJfY1e4kET8GfmxfxA8dmWdz1QevFr",
  "key12": "4XZyXCE5iowDXSNswFarMGTcnUy7DztbeUbEZJq5xoYafyi1VmgHcesASwLDgMbvoT6Xh15DyB4FXjKu63cQyXvy",
  "key13": "43CDfVz9vfBzYcQfWBCCzNnASaiMFTJYn9VJari22K8aL6sRERRkHxH2vkREMVHEdcwTtALvonZisuYejgBjKrgA",
  "key14": "5m8s2htXVxbuiTd515brUAoLgsFsWNKLPWtmo4LzvWbvBTX2pSD5gFHxYrE1V1MivqCBZjBKLhy9bVxKn1nHjzJZ",
  "key15": "3E4JdFpuCuZGsqsvATiAwVKmPUGNMnGruopt4Uo2d5rKr3w9UwKumECySc2JCwhGsDhfZxSgxF1aVq7J1urQJ9fX",
  "key16": "2HFCA9WVW8ZRiPdC81ZbSxjCMWqSva8g4ikfprDfKaoUUvoDKYjGoRDo5RYUV8wY4vShnUpbu3Xg9P8VxNyEUBaW",
  "key17": "4XAbBwXSN2SgFz6XhGiuAd16ZCitXDcskeU6rSWK8WrQ7hDndpxJ49FyUskvko3sV8Znfvti1yQC6nSyYKvtFJFi",
  "key18": "5bBKcUt9awxte4fBdvgiva9X9xnK1YauEcSdLpkwFy1VCGDGoKqtg4N8nXJHVEkeACTSntwM1GkAVwgTBC2r6XC7",
  "key19": "4px5MKnT5Ae6GYzgWTiCHc5d6SjSCvkWXbZHhKrBWqab9R3hvw679KuvmAmwpDSWYexi1FpMzFJjqZ6yZKJWm1XW",
  "key20": "55Ma8qAj3U4jCXRFCgLBy7ZDqQR2ekXRms6y1AP7GGnpFN19JaCRzL1YTcq89JgtAqpMuruxw7Wqzcf1gkxZsXWo",
  "key21": "5VXtMLq7zprxoctUqci84oSGPgE7LyHbo6w878DHaqFA2BFmGgXtANkPFDGCrzgE7qtRg9tuHcWxuv9ngLGsBQWa",
  "key22": "5oR42z1NBHUeyXC1oA6yVRka5Sy7PRhjYoZ1odCd1jX52PV4qc9MreSJScwxGa78uL1qbmeeBiwmfMgy7h7aBELq",
  "key23": "4J97KQowSoijXi2ZUNYM2syYGvDxrQQAb6aHBH741pBNRMaFCD9VTUQtgLACCdtA3i4rrS4GbXmC4CbhaTsFTArm",
  "key24": "2MLzF92XsfsfBewB4pMCwWXxdpuRnwDtW4SBcpGdzAexmM2QLwZt7vTzpK2pkVCjn6qLxjuoXr3CpBsxNnuaEYhZ",
  "key25": "4YN8VAQbBo1cf9LWiuqTFaKCtR3AXPG7Wv2ToPTfGLSipYC3VhLoFyqQJB4EFAPTEzY9X8ywTZo3fQfhEnMfn9sN",
  "key26": "srTnvQbhiVNi6LQj5J4PYGNAoJkDWjZiP2dFVPAhbZ4MXMEuRp4qGJ7aTD3cRiKb939ip4MhrYhYXnnfcnf9Wgy",
  "key27": "397QW2cPeRnDWTN76fnSngmx155PHKhm9nAsFsZZQQ3hxBUiRagomQ4yCWCjGzsoqiqH3PwSWNC2oVrrmFG8iqSz",
  "key28": "zBfAJx7RQ54qPo3ZRGnY8UXBYAwtyHzviB5wDk78oSkQ5amKkzQhEb7SA6LqnBgzg8P5FZjXDDLQVAazAJL3k1m",
  "key29": "HjuBmuYoCPLcN9pav6YYvmnFCULbPb7ZhrbLXPknRJUvoVgsNhzeSvQRiVRZ967uihukZoBR3JsLJKMU3DqWmMT",
  "key30": "A6aojAP7Shaxo7gK7bUNF8z39TU5rNbEYkHJGaEykEXT3fiMXmPZdiYLY25hQHhwUFQucfiaHVQj5qthi7CNgxD",
  "key31": "4k1xtUn4DPgjLriBwDAM2XfUsWAMySbsa7U5TnFRiC5nUCQ2cD6AVBEwWNe4axYXu6ewi3iSCaubuGZgfRr9f7BV",
  "key32": "2WP5kGWYsWqYKK1oaWJ8txCDGS8z2gwS4pCATb3r4GSXGCfXZZEtzf659HE5kwJCRhsmFyUivPFncWB2PiXo4cES",
  "key33": "5xEx5SWjmACBsWALw71FoHED1hHYUf3cfyXrSDngCTYhNgDAjxhKBbFxgkL8jFpqLXEY1wxwdHEGhM5XkboLKVwC",
  "key34": "26Yh1HKCLNqQtcjX5ChMx2UrT87QKomcDJGCtgfG7sp36ENEWo9LA7hH796bUnmJqozgQqYetBcm88Myy89iNHHK",
  "key35": "5BRZ2pyKHzZEHKRGGjGnA7jNZGCrpUEAe912pFR7oTkWJ9TBsTH8eYwLHAEa1poukZU754tozvVTKu9kPf4tiXsd",
  "key36": "26U2qVwdXxp716GYt22PbJqhYXL13146PaPp5hvEy5iN824f2o4RjB7GiEbFDARAUDeZikKEPiJPP2cwdeiCNDaG",
  "key37": "gsVMpCozf8tkqhcpZsHZRRpqzR3S1tQmufRHyQ1xAR5ADFSC2YMmqU1vA3mycNdbzfK53VJXUgrNq7yvAWqdbuP",
  "key38": "5mefapykThV7bpWLuQuQuvyoDfihG3CLZuRG3MB5ij4Sgmu1Z4FbkckGqcgjkBGc5kvpy1upWRiGgk6pG2me7eDQ",
  "key39": "48CboJSudKLpLz1tFo6jpJBvcbadXk9wj7U6TgNVnppYMHJXCMLNMeJmgDRZqcpsApoxmwKbSqezpMfQ1yhEY3gf",
  "key40": "3gjyBkUKzaREtCqqCVxKk5WdkkN11UiqtTDUSAjuSqUTa584hcc87CwykQnnmLuoFXHBjYdm8YFS35tFNq1554QC",
  "key41": "2AQvgmWPSeRJqPnMCPg9f2sYD7tPM3ndg3xnMR59hcwRnPYqhps2jf5KGEkERgBGWE5gfZ6RDUuQscVH9jE2sQVe",
  "key42": "23GTcb2tvVMGUTotj2FBUevFHxaHTRep9NpNNFRHiiWn91fhzF1Baum63BxLPLvd4iKCK22CDxnfioLQQdQNkUB5",
  "key43": "6xZoTXKji3ZbDUgLZqBmmbobivYwT8vCEfUrk8Up2NV4WSvfUwvvgyLTk5qkZnxHfWaw4NamsHPci5ajmgfgr6y",
  "key44": "5BtMyXoQoekEsW813698Mayv2aP17zYYjtXiqbgeacQmLWdQvJX4DFYdUX8zRUvL7FhSH41BYzzkNp2ucKVqAvrd",
  "key45": "3NGBmgMtgBXEdiHAvqb9wz94PzBWVQsaAvudZKP88zjBttrwbi65vwot3brrMDubRVPhfEg1JT5PMnCNuUeKPV3r",
  "key46": "2ikNNdAbir4mQ5qqGaPrRwNGDTZTZFnWEb27UDcLLuC8iRbf2JR2SPAjVUBLX4NHxw2yRPJpGFWrJNZdPdHJohNS"
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
