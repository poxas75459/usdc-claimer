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
    "5FJYU4biax2tRtEk5472jrXeJENTrb4aY64c84QuAfJPBR8FVRoj3CQk7HuDM9Ken1jexcQeAxHTKewkFAdnnXea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mogWBffvBrtKfimsaDVSwXpvnXMWiCKzxXK8BCbt22vhVTxCaurL8uJe8k56GojrhCGapmjxbyhvkKRzhWHz6i",
  "key1": "39Aov2j5K8qa3TVqmvUg79hhrNx98y9T1btkbXSWes6w8TSDgMGo4v1SFZGntk3Gw3ZC6p5vefutqqB8kgmn3cQ9",
  "key2": "mY9eMf6ZKtSiqFM7kJim3BHVrAyCFE3TCG4pSU4SpsjEEgh7m75RiQUYGyuSwFG3fg6aiWLVdXuq3pCaPwJ16dH",
  "key3": "gxPnLscL3oBN5dNX2BPMuHftWjRoFES8ZMeqmDiGcqpXfP4Vd7o2NF2mmJ11Y5LzSmGdvKjQ48qDGdTfFzy7b72",
  "key4": "9a1gHCSkbV1oAXyD2zJgp1bPCEZtZxydqXnVByvy2fg7VnbfkiaNLcXNJYfPdSgCPYggx9xVmhgpyviho9RBUTR",
  "key5": "2qXbh7s7uP2jGTDTUBKGCizTY3zJiFQjz92gJD9GMGRGFE9m33RA4yKS2ZJSFJcE5iejiCDGkTCMikKex4nKt2FZ",
  "key6": "3VmdtXpMqWrQFU2pnukKdo1t8N9XVNxoEbVtpHiXNUQZNYir9skQwREnTgnpJYziKp3H3iuxyRr4GJByvyQzi5Ph",
  "key7": "2u44GUx51gQm7YsUbZcQrQaeAvSN745NKRDFQv4ULb83bDWKfV4kKYEaDqcnxHA1LtAYtVoH4cPjvJSBvQBBfvtQ",
  "key8": "4nUp2iStfR3ujrzn9KRErJmT4n83AmVR5T6eFU1Mne1EvXMG6E6cy14HjABTeX6K7k5hAhktRczHrjoVnra7Wbrr",
  "key9": "2VkUGJtvRxF35ok4jCkVAjSR9aKZ6jtpd5ShPuVofRQXFCFdHmBU4UaAE1tsjq1YBfwHywZjh64v3ZA3gYNG9raZ",
  "key10": "4FDyZqxKYiccbUhwS9wAQPsS3SjKjP34XcUpATf96dt4fZPUjTTrgxwfFuhvHYZ3VwQWVtEyFekCKbJcAu9VVa5F",
  "key11": "8xJQEturBvcRC98Q22D1GWpjMPJuxFGDhG1ALh985HPELigb7egHmHc3eYUneUjDL2TS8mDhymVV8XBPtNQm8Az",
  "key12": "VhDNabZi1Y5PHDBHYdC8azh2MefbsAcAg6WBrJfKSRSdaZcS8gX5KLDpp4DHCLin7WTcoKaQmw8bBLWnnrULSps",
  "key13": "28cNCXBdBmgrMkzXY6YHeEiXZHuem1CRBUvJqEanQFKoyj3Eaa8aokawwbU4WfLoF7bvkWbcJpBpLJ5Trrd8v8vM",
  "key14": "5SqCUimLpThM2F55jcgfpVkjvhKzbeQkNkUnsGJ9VXVvZFq8Nfb8MgAAJhFXhjh6srQcb49x1s6MPCyaem4TTYZ2",
  "key15": "2NVGQkiYQeZP7Mzzkvs8uK9KJmLdB5hUJeQTWyswfoLiPzu2onSLMGyVrmJm7LDWmddqqakVdBqj4B93oBFZaV5m",
  "key16": "5gq7zahoe1E57kvzF6G67FGtxQGWZ1Lhm3AXC9NwXrDWcSrQpVwMvTEfX6vrJGgfhhWfQ5rdPf8onynTvW4Bbps9",
  "key17": "58qrLkqsUkSHjN2trztJZKrtukH3sXrjBXMRUHp9mfKvHneifPDW5pkYnYqSrh5DMnFRkJEBtGeUEpuP3XHjtwWX",
  "key18": "5auaiKwmECJ1KiHh5kGcxCJz9iojHjWTUvPWFiWHVCe8QTvvTw96DhH5nkarwUgU7V727yJnxoHC6xgzs4LcX3Te",
  "key19": "63QLGePNDKCEStPwrMkLRihcabiQBoT69pT5AnHjxs8oJ7ovcb35kntrueXezAHpTCDe8Mgj9ooCLGWvXzUs61dY",
  "key20": "oWzRayFo7QpwUyb6NMhado7R4c5PeB2ARDy6eHW9BzBXFJBPXuvnRXw62TGwE8M9q8Gge7nFyrTBGqAf6hVuAdS",
  "key21": "VCFQXHakaiAWo9UExAqZ9oyAAkQayppuF9tHaZxH9hXDp1DoTCb4eCdMPgv2Ee2PWzx3mw6A3p8V4rhFmeW5NPT",
  "key22": "3mgDx97VUUbPQB8HGhPCMvetUndqHwHofwJ8GuEEsuj8nPkNaKVidBkesPscdD7o95qgXimR3Ch8aYothz1jw6Kr",
  "key23": "3Sc3xeUcJoowa8VMCdMKK2gyGSGLCN7T6oj4wh3csgXoqRQskJBfRCZimByNRdp9iFoii8KDdCS9Gv3goh3ksMpz",
  "key24": "417a7rDYQBupo6obLJh8bLsvTyQHs35sCyFZie1bPWCtBxZ91zM7t57iRuS6yWSn3QmYvnTSJtWKkjeXLCM6cgbj",
  "key25": "5c9GvDcT724a1CnXgGN1ti3mxZuL4npkXQsWCbh82Z1XhG9WUfWTE3GmRVEjwHBixSJTKZSLfmH7n5c4FfrLRL1e",
  "key26": "2PRrRXn718cZeUipTBANxyVdUdUAXYrxQTRhRfSLASiA8X9UasmcADQhYvAzak5hk1im3BAWPjeMYrZ6M54Q1GEU",
  "key27": "46BQ1znzdJFex2L2snRWszSYc47iBGxpA8zncwswJFHG2eMp7inqmex3Pb7vAJv1DbMYS7s9ACEvfA3Qtge6bPyT",
  "key28": "5UyRnGRZNmFUYmMPJAZA5CgKBbWd54xLJandi5pLFf93MFtNryNgEFCrhzwv8jDVvgaab3WjsSM63qg1osGcnFYu",
  "key29": "Saq1Ny5X2viSpQp2rHUb8MJWVrySQELPyMNfgJGugvE3uvVNoJLSNBRRnNkh6WFChdjgSPxXcvtHEjzNN8yqQAy",
  "key30": "2StuVGTS9nkoHfmUnENcm9f7YAQdpWT38uaLwQtfRiymHN738CVxcxxoEbviRWMmK5TnE6gc1MXSPFaZDGkikaxT",
  "key31": "2nfD1CwbxerMMtT3mxz3eZ12T6WVxgSifXunCPdo2id96qtxdpXgLX2XrnUtDhhZd85De7FYoPRCrE2Xh7RLkmzB",
  "key32": "47UUZb4SRMYTDd3TP14hbCj1T9Tna8uhZonRmueL7rfe5BLEL7fvfQ3G8jExAE4dBJX6ej9CdeabZcxSRUmeBX82",
  "key33": "yHqkLaocgBpXqsyqRwGEsQSKzxs3AitER5i7ggqrZ5J1xkuRUCf9FekFcA7bWf27GLWBywRQ8RgjU5JS469VgLV",
  "key34": "42V2zz13ttScdwGPNrChCLMrN8TbubDn3ABMFzBd74Puj7s1kREacAYJ6LuWYrJpc7g4GsEFtDPfSGYW7LfnhJX5",
  "key35": "HMnDnKeV6MSwaFHKGiLH8fdJnBu2XjzSujyiC5izScUX7nS97G7ov15e2RiFWPXrwoXfvxhT6jRXKMnaJewKHcU",
  "key36": "3WwVVFsBfnskgSAYjogUF7QYPjw1mF78r6gVuUNPGAJ1gtgCeWY9Pkiu35etagyiZgAKnQz9cJHJ85bzfjJFJJBe",
  "key37": "66FbBtJcYy1snmRYUwmM4w6Gc8o1QEA4ZWSC8utw3zbnF177fvf7gtuezmYhYjzYLVetndnZpPiJaHnqgWyC5uas",
  "key38": "3PWWBoVLtXJUjNne26iZ17TGwAsLonjADNAVECUZG5wZXAXEyqu31nqAD6yq2btRKdTcyejRv6buVrwzG6v3zAqY"
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
