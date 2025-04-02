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
    "49m9cmtSfYX7B8ZFg5hF8K8G22r3Z6FVv3ePPtcKWaQdwTBJsgYRZ9GMMYg9pNjapaPTtsDco6anGtbJzdSFXrp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1vFwysrgsEdGzaHUqHNKUbzzj52UBkwnbZB9qTxVb3rQdnVfaaL8EpJ6WKLRbabdtcnBDJCAXPjLwijvL9ANT9",
  "key1": "4Dn9obn7wzkyJ232y4EhohEMXWTwiipArjY1LZYYwhgW1TvA4Uy5L5ZxtD9DxEpkaQLg4EWHFzF6e5F1yeiJWiry",
  "key2": "361UFQpdLnox4AVhbVdsrtVU9ubvHzyLNfxFkWH1dZLJCqqJiDcYwFSFYV1zYgzs5rN62ysvYHaMnnFsv2KHEZwN",
  "key3": "49e7zcVXCZjo9E2DmwfFA1ZvuHnekjvp78wCFeDWuvqoecDuzcfVY4UaK1GmSQ1MnWG2h36y8FFFzaCKVPNijwzg",
  "key4": "4bSag3eataM7dBcQ3ei25hbabNgEkLScZMdqU8zr7MCzZXT6caYowKzQNCiooNcgf74rW2uR3rMbMYHb3rLTamhg",
  "key5": "N1mDeKV6ibHcij13jS88FGsMUcSytq6ipwNznuwPaFo64H5CueNBV49tMPHMfgYFmQkLTJKTp3renrDNW1BkMPe",
  "key6": "qzKJCbYCWK3ESPZRCHBSZdKtA4XoG5pmhCuturPBwM2mmNboYHWL65neLTBdqydrfvC3ifFYVkQai391eKK98Rq",
  "key7": "4SUF77K6ChfFb8Qb24bk6fMzLbH25A8HgC5HDGVcVKw1nR9MKAKgabduooEhL3RshtbbGMaWqsW4Sz46NUTKqtfM",
  "key8": "62RQS3vFr9fiwiru3oqPVwocurT1tLMbw1vvXYiAN72eiewfTBoTrKdTLDmUHWhqKyboirqycNG16RD789C7FdX2",
  "key9": "5WL62VsddV5vYKJenVVWApedbCdP1LigjphqQNNceSfon9woCqsHX3x5SExCppPNCPAz2bA98h8GVQUwaK26oD5M",
  "key10": "5JBMwyMq9Lt7gF2x5GGVFEJD4NrcAfZTA3rg8xYp7yN7DkeYojHignj9sXKeYLYKJKy6pe6iRQMf4Suh5AsGTTYj",
  "key11": "235GGZFwP1ber6pSEBibtfqydLb3fRB7RrxgZ1FgDzBzD6WtHjEUrEQT9Pe4mfzuLBJXoxWMMsGVRcnXgu8feuyM",
  "key12": "4nXX1YDVSADJebZ3CStDikPoVH8yngzDcoSENAe87XPCFnsbixD13DkTTLoviepMh6j1DW3DqVrnMv9yWyuKqfDU",
  "key13": "3r57Pm36QcivmSnCJ745zWD6YWqfMqysGzC97JsZyX5RffVdgDKUFnCLoa4ao4qGQYXzV6ARGYMmUP2K1LNAANr4",
  "key14": "2gF7WMmxckqXuKHw1Zx3ddKNSedse5DMTjXt3ZGjuJaCjdv6f74e9KfBHqYrjDKFbpNQTBCwoiojH3NdPhZsJeLr",
  "key15": "2JwuDYbQ46trbfNwjhCvjzFPgybeN2kr2wRzSbY92ctiF9gdwPcqa1eMXEavXucj5TbHjxKLARKZ9HFdNTf8AUTD",
  "key16": "5FZpQBHCtfdRnmZgX27UxfaRGths6PspBi5mDQ1ppqt75pGXp6V3zhg4yfKKM1wdpH4LXx72s9yZaNvQBXkFat5K",
  "key17": "2piRw2euXDhNRkLWC6Tn5nCFehjtFrDcRdtWuq91BpwYkAaGTPXhLRBUi61cGKB3E4kV3KBNKJm8qqytTLebvgzu",
  "key18": "47E2o8jjcZ3tAwY4zFQv9KeFfBLXg5RBycC28PxJyzHawnFApxv2TLprdHSmKC3yNoNcKf4q3sojfegycwVyJzLQ",
  "key19": "5cmZjcWCH5CWzWCEEZTqdnVUUeT6vAVLPqcHvGeNSZehkadQ4iFLiBEN68KRREj7YynCT9etGJ9oa5piMJB9qh9c",
  "key20": "5BVKjKKRswczNN16Dc1KAqBxA9ieNBsvAecKwkUFVSnFDuTbmWUV4f4VF1iyVauXFTQyxuDShY6bNh4JcJXkid4y",
  "key21": "4toqmjre3BQNxw3vRSsoKLCQfuQmXuyDwELxe2nJyBdDxXbxrUDxYLd4dxsR1BFSiPnJu2F42v7MuHmXw7FEHR3t",
  "key22": "HyN3mZzQeDze6VANtWDqr4c7pnG1rMFfsTN2ZQcp4XubMZiBkNx7GHEG6eQha3nS6MenvHzmHy8pF1HUSB52anV",
  "key23": "5jYypreSN8gCzZeAF5QQAPFyGgvdB7zVk9arQpMVQmC5gVnqpeq6urbNQZSgHPSKHKo7qFAzAbYsvrbpcsxoyTS9",
  "key24": "thEoTM1eLRSUCUTKQ3WDCukjvcGJGoEn9aYoNa53aYk73EQ7BaWZunsmvxNHDEPEfcA4g4JhK3uT8SjhR7w56vy",
  "key25": "3G3eMRqTUVYT4QNgRfMmAAWyKp4HAzuFFbxXF5SSYCHL7Ghfzjn5JGwe2G7KymE7GWeQtSLEZRDSktFA4VYoVxfz",
  "key26": "4vTCzQYmn5brAktHWRu9gdMjSzX7bH5QhWvkg5mLNzP4peF8ppyCbvCsAqnGuLoLXQrVkEkg2ssegzAKznujcd1F",
  "key27": "4ns4TikLXNTdBgRjAaE2oEd1aAPxyFxqZ3zcus6vCeM7PExbSTW7h7boWAy4J636E76Xj6BrvVEUCSyC75hgyy3f",
  "key28": "3FLdPhsQvdqoEN9XvZzkfCDsd6KsTSUYTMUgE3NWp2cPWJ7PCcNyXg1MCFatUPPpynwKSKwyBzJe4fmWsVWtrgrG",
  "key29": "53hHnNoykoG5153ByXSMWV5UFwgVpYJtY2AprUjnUBt4SyLYHoiMvM2bLBCRpMw2cDVB2GBC3txBvC3xT5uVpaBi",
  "key30": "2YsR7qupMeTY6KcFjheqdqzdBoFsh3232UELJaA5wW1KXpBhZN187TNMqD8RYPew2BYGBS4sDQH8AWVhRDNohsgx",
  "key31": "2vncA8v9Rpt4qasNrEzV1c5LpwavtGUeYzQQF1mYstyvB8ZqGtfwptrL3ooDXnurCQwfodGacEv41eh9sSzQt2cB",
  "key32": "4BXAvxLhboGsgWitafbTPK6kiZF6Pr4n54tECg9TFoe9VVcdT6QczuYXRrEuzRwy8ohbn3qLh3uc3HQqhs3MyrCd",
  "key33": "5ciTCsXwx1MErrkYEab53GhiPiabsDZXMRNmNxquWSfookdKrMdKCsgYc9htMKd7JBHtbvmvDpdW5AwWi4PGoQv6",
  "key34": "4MLPsHwR3oKiyPXsTNuMKEVK74Avd2gYUZfaZsGmAhn3MkNp7G9MAxiGAKdw8nxh9gvXrbzpPmmjru97G8s7yKwA",
  "key35": "4dBX4CpMvtRcCcnG6aN9avbnh7iu2YbjPsehQkXY8s19XwmD3e29wjhc3tcHE1BZKZvJNNe4yDrgmS4BSL7EYXK",
  "key36": "4q1FTQvZZbovAK2Q71X1aS9kfH2BXsepDkyuSAsD41DrZyzS9pJ19dsnL6BsAESy9PSebrmAC2Cr9adurEw2M5zK"
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
