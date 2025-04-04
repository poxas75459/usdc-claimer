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
    "5j2C1m2Fb8HRXubczP9XmatAfbnugvPKdQaL9vq62TSTt9NbKtJXx76Fi8chfWaWQLowg44v3MTtznjmuz55AV2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HMXCJnXESprRged4zfwSt2Ud9FwuBK2quiMwZdfnY9XowjMSm4kAxaJj3HqygWiJvv2nLyrcNHh8TaeHsNHhPK",
  "key1": "45dicajkbH8dBdcvoXFDCGa6XmsLs1pP5Men9yr7Nr79sZMrvHWzdmLtnUX5aYj1G9A9inRSMwKNMoFe53Guc2WN",
  "key2": "4js5tk8EGedajYh8QJjezoPpVsTcEL7BjrCiFgxFXjuGyrzSZ7gDb6bU8ZikuFLgqk9WRiAXXLKwy6sSziErTGHc",
  "key3": "tcNbvPes4FhhBGNDUigk6RZmYJ1778562BKna8oaeUotj4ESsfzHyh3tUnpaAWvVugLforQs91Uvb8yD8pc6dMA",
  "key4": "3rA7h48dW5yYAMUjRavXCVPXdmkHxwAPyourSKqP37y4druYV8dk8hKkrLHSH8jtiFL8CrdzKaA5rexrDwZzyYMz",
  "key5": "2ikBnwpL3JRBvZ8aYdkYwnBEXrHZUn8KMXzEXxVZuEJr6J6hyQmNq75gmnQUqWmAQdBZnKKShA6LC5rsn2Ttv6kF",
  "key6": "2U53mPRYJaoZeLqYc61Xcne9Uw32kEUvqpiynxBAbxBPCyVoy4dfURBGGh7iZ7aCpicGLTfMA3tHM2szQKsQkQEz",
  "key7": "5Xwv3QzYtJQCcB65RVosURxptGJNbymAFqMRXpnz8EGm6g8Ypc8h6qcC1L9ZZCxtBxDThook5oFPiZLwvFpsWFZL",
  "key8": "2s2H5i5CkUCVnPHXwEnKFowo5FQ7TBW4F7nWfPiH5A7BsFWGzVxF3Yxy4muK5arFgo9U9boxak7YoEPmp9Pyt4Ca",
  "key9": "4eCTM2n9NJVdH2wcN9BhStLe1zWE8poUiuty8i4Z281sfbirb16jtPJYRJMF6wFXN9LpH3Cj56aCm5bCURBZtvVS",
  "key10": "4kmnw5aj5UCuC1uY1ua4uU65rKxKrWjugjRdWpdYnFJZdoM2TYxpxCdLjzH5VuFoMKpmLT4Te2zZH3LhcY9sTxP7",
  "key11": "yGpjabF4iCQaDdNqNb8ivi6TeePVdNJQYMUTTcBLtPuw2xreneXywU7hytz2fMJ4ni3C4g9B2wDtXH1C5RPMvUy",
  "key12": "5Ra4pzsnjskwdzwAHaRbHJMbu4JxDD6MR5u3kUZEr4TrmjFsZJ7LxCmEB1GtBBMFte7iQy5WeM1n2ffWJUraK3Y2",
  "key13": "dKexsaUNmHFAUdfT6CeHNgxFeCdo3yk6Ubmmzs3ywwRcBfsNQthP4M5iAxP6d2xhCveCMpBuYY3oGkjK7uJgwFJ",
  "key14": "5TBAT9Sfj2HW76hNHEvnDKd91nzKHcNhYZURb133tnt82wnqF7vCKAFRyfGb6uCuYmX51pKkAWXYdyFB7z2hKY2m",
  "key15": "2SDGm6B4o8Gck1CV9qoGr1ctRUFLDobEeDNrTctVr2SMxtKQzU8xFKwpGdSfmp8N9cGdW42NV7EBkXSDypfrmTTg",
  "key16": "6n8HvSze2bagwA6UzbX9ygb4b6U2pstC4h4vtAqsbmdJozbjQ1nTB3goCGHaovY8XLQP3V1a7miBRMjxBk2a5fC",
  "key17": "7is5AoSqXiFAfQwgQJTKHiet6bHbbNQ4ucPrHj2ZJzTg8yPUQCEjv7QJ4Y1LzT1FTKHyjsVErNFjyRS4WiSoo2o",
  "key18": "NCiakAPxHmP87U2M11xnKfxQWiNwLPgsTA4HNpF47dB4F3fTds4gPLSPsWyUaJXitpfVsprPEYVtdmfczXzCVAH",
  "key19": "58ZvJrZNTfnWszbCxaAVdYRRb1xtEivgaS2xiruNwqYDn3Hso4qG5RHG5kp6k3msasCuqRk2KGWcb4KZ5ATJJbdv",
  "key20": "34vCcNZbt3TiTDWbNVx55iMqA3MAWeFm1mg7DxTHCwna5T3vT8Pfehn3QqXRG3FGYe8xTaKdmLsa1ppQV1sNpYtN",
  "key21": "4mx9xXBpjmVJ9XZxG2qRpwfU3T2Rh1NQ48G74HdgMRp6jrEbG2wVNGbgUzfiXUYtthuf47D2rBBsHt91cmavLk6X",
  "key22": "5LPEyG8JAZAmoJKACr3BgtWFfNp15hJYRPH1h5JgGK69j4C6wySHKB8XCgEPoPdTGeeK7EGxVY9yw9psB4R9hB8T",
  "key23": "3h813y1nH8DXKAGRoUZnzJxJXTA4bvbYRs85PHpPvGh7t5VGJrjMJuy8T16o3BwzTBQTpeYH5NCuRxzSL4N8MCPY",
  "key24": "3rR2V8DsN6J3f8jMF2YKFGWoFxGnRuE4c3Ua6pS1yEFCTXntHLF8H1gxrZt2uVKfbd5ECfGFpJHLt8RdLrdcHDiL",
  "key25": "4qrSPxekva3dJTXLqRpvTf2G4ceuZzFvBnPb2FELTxMdqnCEjnezx6MjHnmWz1ux5G3hC5jUQVKA6ajMcnMdNPGd",
  "key26": "3vN8ZMy5VJ3zNpT8t24CnbveYVqrsUntfsHoq27UjeyBBLuvGo5uu885soY4vaeqB5zPNLzw7wctcG8n9FKi2ASN",
  "key27": "3sYgKswf5tgxKYJHG1tM3Z5zQHTzrVYoSpeuArNrMKX7drKhzRmXTNZVCzNQ6CmgV8eE28qK8gcvbKNApSFXGxA8",
  "key28": "63UXK2X5C1xpyxjGfgSduaNWnurGJeQWfqQhmutpULw211KZWeBcUC78ZJ2jLgG5YVnFGho34h5viFM1eWckfRns",
  "key29": "MBz1twy1xKA6SWwBdZC575S8CANCBkJqbL6fnx4x99kkdFD6fLKma2rZ5kPLJL7uiaJ77cjFQHsP6HaKDX2osKf",
  "key30": "21qSbPz46nHSNYr2XDwNJtRmZ99czBGsqw72P1KrVy7cEB8Bh8Uk1WvruceyGRdr3wphuomvgpus2m9WNU5qA1EA",
  "key31": "5WtrtFGVsPRnXAXSPSYZh2UPSkKGXW9Xt9akhtoprhqJrM9kdbGN7taEzXzvR9r5eUwmj1KzidZ4jVqWdaDNFtvY",
  "key32": "5bNxjxZ8e6Ssqs4iVYVY1JrxLJVUiqfGgQT1ek7mC9c23rMNtvpMVmm9oL2UHSiacLVMFCmaDmwNjF7yPUvHRYtz",
  "key33": "39Z7Qj8C7wRHG9dTs2RmhCjs7VFLkprGwURTVRsozXEmiCXNjtvGb52qqCdNDRcKAetAQRZJ19zCRktSViBUv5jF",
  "key34": "3qfBAnayMALeQTWFp9P7tGuLdUYoB4sxgb9QMpTvx7WcTEGphQVceU4VdqPdAAiGc2DxGXBLEnQJsjzTU66Q6dri",
  "key35": "4PzaAaWQ8yj3sXsqDgo768wqBJZKfyY2zbZW6uTErgvRdpqjQwnbVUrwF2ZfwoneFngYxVAiLW54P2Hd9x29YwA1",
  "key36": "2JsmqNeuRbaYzqRokkuUKU9NR9a2zMHCh5bx72SPgK1o5qBq3iZ9vPSjTD4eVAHi5jZKxzddv7WVHixTvytVJ7R4",
  "key37": "4bdigpcojmuzWzeeA4EjAioZuewSTSrbYdvJHBEcqbZK4NaAhkTJYLyiDU61MSH7K4upazi2Rg6NGMCs26bW8mKf",
  "key38": "4oMevYWfWUhhYNWmRBViodXoiyfmCxio6EvZJAb6K3u9pKwojjKtuGv1W11EVVnG5TVnFFi5Ry7EQDJN2HXp3cpp",
  "key39": "2BVhmT2Giinqzt3Dss2S4RcLUYJdmAaMBXD3b8j1RGC4MFZoKs3JXXHq1XBMUYoPzeKyz297TWJVyVCVeAuiE3Gy",
  "key40": "5i22VqA5eznainyhMcrwUx1NBNn5ZfzDEb3w5dkZMPeYatb62vJN5bshTcnKqFbnQAM93NLcPSDdhrLQedVSN6mW",
  "key41": "3gfvvqmXjYuDcJkdJLR5bz5Mi7djABDPCAP33huy5egnMqZ6En81u4A58XggAtFwGT18MjbRVKSASPhShdVnozR1"
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
