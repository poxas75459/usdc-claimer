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
    "3ifRCDyXQ7Kz2iW1mksYpWCq93RTfzbJghFWurcF9ATZQjR9Qyfo2biyKAVqatKkA4WThV7aCioPGujJyamSgHgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oeYjRzmz19WqzHH4qzAnjjUpb7HBch2sJsBdFoqTALxuh1KrfuEHn8hGCNyZTsMRRLy4TkMJL4Z5tQv4bTzmBHX",
  "key1": "3G22V4dV9T4B9iDeFBrR2MQsjkKsE26ZYgX4NkuArC3HpeRnZ93Shm1UT64hpYK13Z56EU5pU3Ynza7zezTWyB23",
  "key2": "3CZeNmxwXwXg5KiZgenmZaq4Qqwbe28LQ6FHxzQQqubTexvfGV59VuPNRkwdg4NPqLQ6pruRjLynU1iYc3XewYWb",
  "key3": "25EhPP7FAPgYRZ6v5LAFqmkgxShGYUscK4q77Eb5n8FBzs8asWwkVxMicA2opqv2Z9389X2s7TBxLa5S6ADwdHBK",
  "key4": "3V2NwKX1N5Qknq5nE6KadA8RjQLrRi3VqBhYbEVTrGwJpKo2z5mM8NLFARMBrfjg9ZsRHMjcc2WDDapnri99Mhzm",
  "key5": "5EFA1fps5kF2pVB1uQNBBKcKtzaJBqCuhx12jmAfWDVSvzHti4XjZ6UpkxVEVHZrP7CBvCbLBnXXRpeSP55RecXB",
  "key6": "61vJSnLiku2fjYVhksuWqrbq9rstSgc2bQah3T7gwTz1QZngZqvrALzYwegAK1GAtJaEbatCoodUGuJx7crsAfxn",
  "key7": "MohjrjUVZDyymh4TV9dPgNn2FwvXESYhUNCG3rs9sgVab2nMcGkAwPtyCeWqpCBMdxT1G8kB5g6iGmDhNawRwto",
  "key8": "2Y8KzvKHdZhfkmiZjGN365Lnz8PYo1M8iB35SB2jSypfuC3cZEv67YzG355hpYNZz2bZwm8E9WZ28E2FFfkAHXMF",
  "key9": "yKAKYEG6f4MLWXQAmwS4z1mJJZE93y3keBZ5ydqEY4gwmEwuvAQAqAK42FGPEjTDjPXoUyVa58JcsdWqdpJwKtD",
  "key10": "5fWUNAAzvTDR1tQK1Nq7piZaAtHbxYXByhDdfPZwjZdUPsJQiHYBUJbwGU5CQZLtsBrXY45h1Z4Xk1TzX3myGuqJ",
  "key11": "44RvJSKQULNG2cGVWatuJhmVJC6Px5m5DmeQukZJPTH8GTmf2sYZAzQCscngjDWF1vqbXDFWAHPZ93Tp8swzr2A",
  "key12": "5aHP4rGNqb7MCpZuxfmjh91GFUUi7jTiMZkHPcHR7p5Vy296x5adXANr6jxZRYfSmVpqzt9NNfeYLGmP7BajnZvc",
  "key13": "5qh3T6ahujpyCSthEciBbJuuE3AVz4jTmt1YqQuGkMxTKeBeK1NRCkFmk5dXSBnwE4YmnNtnXVAjKqt7nGt7ridD",
  "key14": "3rmUpHiuNeewCD86CK47EjB41w4PTgWnBp8pyPQhJrbvPMcGX6q38iXm3YoevCM1txtjfMwoXZNteY3fiAyuPepb",
  "key15": "2a2oYqr3rycxC9yGaqQG9mB27J4a9xnVAQdDmGDr5kobMQCrH9DWkKm1EieosKjMiNaBr81HECs9AkLRBKitGkgM",
  "key16": "4GATYTTkwTGiGB87nrXNivzQVh8Ruq8eNnEthRKrDM7fx4ZNk3Etrat8FJS1Zq1hCguBv2QoE9XiXhW1Qt6JwG3J",
  "key17": "5E3bR5RjZ72heQDcb1pEuGh68TDLdB756fndrK61VVYmyiapzphs55fyL3LVBJWa5p977AEsUazk2BfgBp1oj6yR",
  "key18": "3WgVcD7wLh9qHS8A6NDtFfSoc2KBTKPcAD3aA9Nptk2hqWtuucsB6qTDDT8PGmKLrgXEeWjBLPTnCwztC6ACdwna",
  "key19": "4dkwtpY5q26vWmRahndCukrzpUzVd1Y2k98NpaSD6KPDYfaX2WnTsFUgJCGZNcgs7AZ51UkMmEaDAuZa7kPxNTWX",
  "key20": "2WvR3hVDNi3TyFbDUcZFLTbrSGecBHJeyDQ7mhSvvY2uqkACPQo9epaWULf7o72xnJ5ge1xNYzePeV5TkmT7hkjr",
  "key21": "faVitFV1a1oXmAaxxHD4Zf7GSiRbMfqZieZdh9LGniVCa1v5LRQKjah3zXJc2joWoGJp6ZJ7kaNyKtiX4PfyJqL",
  "key22": "vy14jdW6okzBxQUjG4vzBQFKaBWenWruEfMAV5hHNk35wnZudcdRFTUCC8cVpjgJY2VPE9DPS2AVJz6f6vgYCVz",
  "key23": "4oPeU6sotm7LRdUopAyTovu1qmtYPKN1vBVpmBAvcqJESHdYnbQvGG9qGJtfuomoyyspfHsM4RcQpPxH6nhejw8R",
  "key24": "46xJjBoAKJY3r3cpLSSqLijmJkoc9yYA2rRhc7bzcwWdv4zZ7Sy8caq2Q63tT1BDFAVn7E4KdPMQYMZNus8kaifE",
  "key25": "4A5BrefeymF1XudL4Vs1ThtNZxLSotT7fxYCMNtJhUaYu5RUougL1gvSbhq7VDjjUsPignFZFXdNLrJVXAG585nH",
  "key26": "49cLzcLhLQBrnemMCuTfdkimCdwk7uKEvsdLqzNhWJJ2RiG1GaP8DsjUvcdAGRVTUzfZdGQeCSr6MxCSuaFtmAkA",
  "key27": "2VgvcZ2c96Yt3pSMwgCwd4KTaEcCD9h1XhjT1EFNVN4VmiyR4hYSgM33nPPh86qknBhcrbdihdJFjuF7qF7XGETf",
  "key28": "Fw1egjfzENrgLRmRXp9vqG5EwY5srN7EaTAv3hFPMwXj9LZ4xLS7LiKd49rRtkN9DqUy5thnbLBbvZbjjenbNcP",
  "key29": "3ut84LA63qH7u4KVkMXHhfJnVNW1piAoH365sS5wthN5B3DaXF4VaYeN7ByEjsZ4M5QbSAksiJNSn1pgiT8W5t9m",
  "key30": "3QeeDSgWG7XdUvU3vi6chRKF8v9iD9aWSPgqCcH2PFfLA3owzEhwQrVhuf5ds6rtYfNA6NSTTnyia13QUbzUM6iX",
  "key31": "5vX545daqtTUHHqj6tzVTpJ4b3SBk99zxY12EsEsPYQv7nvgNuwe3eQtttzT1CxPJeD2hF6wM4QXULVjEUN1U6Nm",
  "key32": "5f9ms7iA6hRzDT53WqhNbmuBLby8JMyJJ8hCqmc2WMedDDWjPP4hSSQMobmg3FZjCdHAPTJfM2DtC2E5SHRuq6wn",
  "key33": "5otGiV77dQHgSj9iRtC3gQRSY4W537ekGtccWEF3jfv277FYkMEYbejxktBvtBJcUKMT4JYFYCnsnW2M2vxZgQHw",
  "key34": "BjwHA4pFHtXrqomnzSShG2xcViVHC9qKQTQyJEFxwybXEFMGpj8qYfmam856ynj9Z6TspZMp6WuSSrGT78DPKer",
  "key35": "5oPw46HEAMdZApEL6QAKbYmycdFi2eJS6xWUZsgXr6gNuAzwjVpgDQL7KTgwbBDpvNb7EwYh371xpykpVGQGvYWn",
  "key36": "5pHCHpp69VPJjmvcixaKuCsSDtcXPmD2LCg2nM8Lz1xfqUpdAbVrLKKowfo9VSR78WHWM8bGZhcUG1M68GaJrQF7",
  "key37": "4QsNquqeXLriBoi6jZJx595VzmFeoSJBTebEKck99dKc3c9kx5CKzyB5D9j9sfdD7RP9Gv7ZJqrQ3riFHhEAFAid",
  "key38": "31jVwFuagEsgeVWKJDquS3KZLpMJnTGd4SvCAoiJvw7hZ63gi8Skk8eFdC6YTnBFgweCaRWMLyUvxy5aGGcvM6bx",
  "key39": "64wGNxrasUPhq4HyNZ7oQHKVyMgpSG3Dd3Xiu2oz4HTGqeNFJLGSzx18KhSxH5mH3fE72zZ7X8XQ9oxFnP7FCWc3"
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
