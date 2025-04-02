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
    "5frotkAXMuCBJnt5PQGnDVDCSfoc73NV6iWWkcHYgjWs8XgTudyaAT21tNjA2Vu5WehUhDxj5zbSPgHj9aeJ7V82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHujE2FtPJoRa9Bi2RwFFD8VSNc8BzsDo4d5g9XXnk7wUSBwwQ9BAPGjhPjycYx2YYH64oBdz1Hj7hPoqJd4miF",
  "key1": "4eaATRySiaYvpKTPpXptT31DSArbDMdgJuHXY7efq6mCaNzWVESYjS7JYWc6hubq7WEcJVrV96cf3iVnp7HCpSGN",
  "key2": "3VQsFDaCqhoS2zaQNB8h4CgLVpmkbrXyYN3au5VLaFGBjiqrL1iydX3zh7Lrr4DwAH56yjipnxMp6Awp4LyzBSL2",
  "key3": "2mLtzoHK7Rx4TpNyCAYZhaecKWmYgpErHBKKX4YHx8mvvmzZUk3uM9J31ZNKj6f93ATKPiTmMA6cmwL1ZaiCjqg5",
  "key4": "2qWhK9N9xHqY1X55FwJq8YcQ56T3uKCiP4ypU3xBuU4SZjXzGDXkJ4uhgpYh31EtDUoY5MBYXexnW3XLxqsauK2L",
  "key5": "Tf56LW9j31EUmqavnKciVtAJNSCMB3DYPhkUWVpCfsXjHHZvx49R9opqzYUTCnMRAjQs9N4HHiifdeKWQC9YfF3",
  "key6": "3RAKdXMZFHjfJZPhBNGMCffb5diGQtkWasL9DB957vZaWAAvSPk5sCvurUT5jjWaZTJBijEibm8HNdmRFctcAHye",
  "key7": "5SqTMo2NuyEXbuTDjamfAci3EmoGGAp4ARgWGxJtvRjZVur77gf8xkARgzTM86rYnTjshJRi2LZ8YeoXXeSMEgpC",
  "key8": "4cWackdVUSrZuozRANeeH1Esw9TrKxn5anQrwhRdgr7Sqk35xfTPWRWXki2YNZyH8qbbBBwts7qMhasLi8PVy3fA",
  "key9": "2KEkpDtXrFVWgH7eq72ag9zKYaiXTbBqeLRQvcfvgRnko5WkxDxTNgFwmtN2A2K46LM7BfwTGXnSdmFDCGepiKa6",
  "key10": "3RLWPLnWiZCLc1YAKV9amHTH4zR9mmgMxFuvXhKdhdNpZgESspN11QuCAj6o3x8upE5thpFgsPnLwvcyK3YYAE1N",
  "key11": "TKfAuoYv1Kt7JWnL2Ee2AANsNevnr5f2B5ZxDn14KpwUqH6py7eAg4qzfDQkgpk8TE2tUQXmsGtxzCMaUtexJnf",
  "key12": "4k5cSk45bgCMwCXNxkgtjLMX2WrxWUP3ffB2NvFu2XMswUX9kUsY3ZfPmDNHHhpERkkad8ZicoiH7CwEt6YMvmyz",
  "key13": "659wnAc6Z25UWrPtpJNhXXD1pTnStF2GPt8Ub4RkP2cZ1K3Pn9zC2CqfVcFSVsADQ71HQcU4qXqaSms6Y39sXMZa",
  "key14": "5bfoqii6nokEshKQK72GphYW6XKRJir6tEG38Rw4t3B51HjwjYxGAnCfYf3vBsc1dkwe2mkvYijakq9kwTnVhm6r",
  "key15": "4Hsta27vpuDT6xXbWNsKKgjAygvPdm968sPsmhfQdvoJwrHdXCueSQJw34CC95FSgb3oCaFh8gya8MnSESPVs8Yr",
  "key16": "4Ts8FWnmYVqv51ZLZQghQS1PBi17n9Z6t2jE1x25i1qVoMPkGxmtZ5KwBVgYLsqjb5S9eqRQ73L3fr1dx2cRKyH7",
  "key17": "5CW8ytbAf7MFRRbVKCwrm5CjKkucfmavVpXuirfELKt1HuDKWK3BspQRExvzPz55L3DD1dFTw24gxBDNcns87VuZ",
  "key18": "4uXUYwxyGxwmZeSbMNJ1vhFsSeDeyHm8zhVPVHt2owVG6kqQ4o4zNBuKTFG25KQkoprfm5BnNGMniZvYPWpGyWNH",
  "key19": "4DBLfHKdQev7mxKM56PQtTFstdgX9n2LPNRaXtrW4rBVJ5WMnupMdte25Y7XKewPnzvxzttvXKiMWGShNVW8Znkb",
  "key20": "3UGtjJ4FMzkH3p38gBz7BUqTjnofba1cV4kvVqT7aeCpAjFyUT3K63fmEyjkrKsTe36gNfPHo9icFDwfbwEhtpbB",
  "key21": "Jn3UTLhUfCVJQv6ba8pqvoRborRBwW7mT9T9MM6ZM19tiLBaMaXzvJbnZHkQn12abhjmm28TbBmFNCvuUV3j4Jd",
  "key22": "47QZzrNdLK2GrC9v4YBz2yN2NYzU7uDQB73euQMVPqRZB6SpGhYs4zKS9nc57DR6ARCkzZ3cm6AmK9M9tu8VF8PX",
  "key23": "4c5hPSrAM26AGKxmVoqmXmGm6LqhV2X9iK6fCtUWxQCggZmMeVjbrqD6f4vZGgExMU8mfEUuA2i9y8t7eMugzxbL",
  "key24": "3dLdmgfmWk6sj5GM8baHR9QF2vEeZ6gmXvsHEFMW3WokPJJWZwEJtxaaVxD2v2nMuHf3VuamUXNbKVHNkr1xsnqc",
  "key25": "RTsWbs5trEyxQs1VGC4MerE5e8mms7zp7WZNjpapMuXyew6hjQFhN42pBNUpiT9NM4D3e5gYehBggK8HEcRSXNf",
  "key26": "5AKWsFrTTD3qCrZ7gBgCcyKTyigAVC2GBjVGxQJb3Bxvcwvxg1RjKK133jGFNirmwos6rXhCg7J9RbKRPuS7RyaY",
  "key27": "3y7JqbwKb3VE24R3tpvzPHv8txVDjtDxAkoH7zd8PGRwMX5Fa3vuP4niz4bJjE4xRD4JE1PfJrukK4vwgBQmYNCt",
  "key28": "4YDBKr54osvLLyqEouionPmAdf1tAWoKE4dmUbGQX4nFpwSj6hB9dKm86GYv81vXxaegBAvbdh9KDSvoKs9LbQAD",
  "key29": "31MooPYHfCFcsrVLprjwmUTUfHZeWutKMTU2NoD6Gbk9h5zgJch9iuL2eqaCWpzhrcTuYdYdcFjdsXvTyvaeSy2Z",
  "key30": "2i81wN3YSyrVoqBb1A9m8cqCbhmTrxhpzfMKW2gZ24PrrnpnLsmt8pPEdUE497y1X2bXwVjdjpPRoYN3FmhSpbX6",
  "key31": "46GSTLEry14aK43TET5HXsmqK9eMuSr3x36NfVrMb9bBngwF2GVhMumewCK6cqWDUqE9revUmWdTdLKxbwjqaPtH",
  "key32": "5SjzWZPPMnQL3Lz9n3A8QSVCAWxWUgdZ4akyAqAxRVKAiw6kt6g4rSaCGAMJGxPxmHmm1hQGTxu9Hm6DFMBSmPQu",
  "key33": "3nBLMdbWpj7Ba6CtHmkKXSEBSjRUgXvmbpMXdeN8JxqzdWjE9ZWymnSVudQW6ndHSweCMHhftohP9MiCzGAiMTXk",
  "key34": "33dPaBsMdKBXriXRU4h6x14RDssSbKCXCRgJojaLJZeTvQVeeYo9cCZraaNE1mzv5coQ1DG6cELsZ64FKYopbhpe",
  "key35": "3ACfr27a33zjVpiX5CQmUaQEpMBUaH1Mt9kRq4yDuVqVcifEAbnEoJ8YYxxShRGwafjtgkoWjGuDXdtU724ocyh2",
  "key36": "55jMwoWuRm1bHQxGiJUCR3xNScmgSv7qvyCHw8jhDTs3YC6K3AC8ZwHpJjiSTBv2YDg95Nvj8qYM8YXyttkypZdr",
  "key37": "47LnQ9PafFvRo4rxDvbpFeMy7fsrXWMDFcaH4z8BvCt8MKSsm6EHSG1ubUgoNmkNaQvq6nz8GdrpSot6UTqLcdZ5",
  "key38": "4tGfqcnFWZKnk5qA6xuoPuhWaKqSBYsXHpxzdK3fM3Y2QWW2oDZWqf2kvW8mdGuUU8PDx4Qt65gtJU6oenvxXtWH",
  "key39": "2f99rCYWgMLCAU11xvbrA4KzyTzFX4uHN4KE7Vkhx3cMndJjFRPNsptWAisgu8F7KKG5nkYeu7pEmQtQJAuCkfDn",
  "key40": "3M78bvqSB6P8BzXhtdjCtPdrBniLid7psV222dGNv8qdk72XRcQCC8iQqPpMH8c5mXHPnT2Emzo75WdFjTZcDy8t",
  "key41": "4CKSAhiSXLE62MBLLmm45WVRFLro6TEtGemGnw2ohwJUCue8PNeLDxL2NNYa5bjZvXNDVeovYhZjLYhEY7oQoQ64",
  "key42": "5FqfE6qLtA3npWS9AxHSoq2gGDGUZN2FfdZJfhrkKR4bb6rZBvE3jxEmhNJWV41RYiba59xJhmYtwJSULxJXc1ti"
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
