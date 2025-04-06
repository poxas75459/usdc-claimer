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
    "4DUroZmDJAjTaVFEXSndEUq61GcjrJ3oShG5cNwG9fKracHKiVQy8wCkrjk7b2L2QYQDKdbb8jt8Cq5kUTbgTHPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ifiEh2qGAMKGWSRPppepMivHyKSRKKxAnPx7rYdA7YzEELq7WjVpYwVXCYoFGoffdH8QZDZzzQze8yQyNP7F853",
  "key1": "4w99h1hkdwvaMQMrHgMSYsUXYqUEq1sf7zErwbaAxUVddQdoF8eWepAXKFftcFcies63SWDzSyWCGwXrYz81rwTc",
  "key2": "2wSycJnhoPH83vQrWZbkwqabu5p6qSfQR2YPnPMPL4AxCxKwWWVnzAycK9ajagPAz8Xebbu7UPsVxNXyQZpo4xA",
  "key3": "31mCrYifzDXGt2XvgZ5tA9MZ8t8zpMwtn4VDzAGdg4aD1vFP4euw6V8ynpx9Jvwu56HgQ7u2fnzTz18GRYHzeG1q",
  "key4": "5RNwyftgrCiAhNS4iduuiCSgpLpQ8oiG9qfxZkbF6WJu3vHkm55W4yvCEZs6y82avwEj4zd6a39zD7Kb1bWys3cc",
  "key5": "rTQgcpWQmiJchFFCm5yavMPVAzW84ridXdnae5MtwccNajyv8sGt8cP29dpexQRFzQMQsvxfQoz4LBgNwFKWMdk",
  "key6": "2YCno4FPAEE6MWREvTKU2hYNLAKDPbTopz7BgMg8xEnyGHAEgSuaiFrGgJH6sqYtRq77geTUmwdSQVTLAiCcVRqc",
  "key7": "3xpQgYvxGdUCkzrrY43SRHFhhaJQCFo2BWDjLWEUDvbfdeL1rgiqEHbtjwPFbS2KFYZv4SYHh4TggvUeJN8hqKKi",
  "key8": "sRNCrFAtGqx49ahUA6s8usYoe5Lc86k4MK2yfH2BWjdBf5Qt45MJPNwXofgonFKsbgUELC8XH9NiS1CSRK1YZEB",
  "key9": "3MFgFC3XCqn1etwbpeijtqpeKuL4YZXzoFRHmui2pYPgwmyuonhLsyuaSfHAYYRDgb6gJJ5qktxfHosQs3Q2wRdZ",
  "key10": "2nap3gAfV45mvR1Ut3YVWBUrFudxUoW9dJPqYEsZR3oiMMeQ15puwMnrbrpNCtoT5Rr2L6mgiZvi8Aqy2s1c3Apx",
  "key11": "3UZrrA1Z49x32p5n6Fh1gBedj6DmPZXqpcmMYJ9QoRyT7Syme3yvd4oxWPFKfpUZDxm8hH63hBu9HBSPdMxNQ3vD",
  "key12": "31XZxMLCsaWefy9wbsS88ppm7sC6Pbq8FxZ3izggQFWMhbbtYJ6JAwrF321YCjEyN94YrbRx16CzM953mbShLdqx",
  "key13": "3Yo8DrozSxwoThh1fnFZmn5smhJcAiQ2Dc3i8YEwzX535fQUQSULyyR8DPMHeTn4wvhivjekwoJ68CfymPdTL18r",
  "key14": "3Mg7jnRU4ohMioqVomUs9MuiLnaP3e31daqoD1daJcVA8XEuN1oPkeubNLBLCStpevdCP443a8ci9hkFN33mLkkt",
  "key15": "25C6JcMrKZLDTAg4P4o2pvct13iVBKdtaLbvSSt7VoCS7qQXWy5MaEvEfmScS4jToQh1YmJTqHhRxmtvsrQugwF8",
  "key16": "5UstkVwXL1ZuZUPCZeZRotvYGXxBwmojNvRgKnuE9zVoJwX1EVY8CRXuCVJnUnLUWm8ytGxNoQWFhsydSpJrJHTY",
  "key17": "4pB817jFEqx7pBxGEvQNiGqS6mjo9XvGRUc9DTtNnvegDuwf89sYaH7MQj233BjB8bVrBrBDmEuAqoU7J8u44jSr",
  "key18": "5cwdewKyQHD2xv8ZgqeBrPHkjUM4JaVovk3mjqY9Y9TW6sWBjJuTX2kmEqAkGqviTvFS4JaqTLUiqFNrKkS8zD1H",
  "key19": "5uTCF53ycDNqQXq8P29T4zXTYn6YX8Mdq4jot3WQWf2cgrPuuvh3wjirFfPZTd85vhBiHHNaqL1sKYH6oZLiVWFp",
  "key20": "ZzXAKxxEV1TU9Mhkvi86E3k9rxLekFTUdxpsorGypNuSAuGjL1tPmBujrKK5VWngA1hgjdC23eauVtouFMULTPf",
  "key21": "5Ct3ArN6JXbMDTPBv6T5hdbANu1mogRp9T79idAbc8suQQQ8ftf6fRXeKtYBCjVd98VX2xyZbfhwDatKtcDcUVw9",
  "key22": "3Wds6dSHXNCBxuYoXzqvDAVXe6pbQCFv4FzhjDym8hoBb4eaMSjixZqLbMRJqLN8CzarCoE4MBDmbJ5nVitYuyd6",
  "key23": "2Z5aECNfwVxvWAncQGNDAQXM1FddGscBxytj4snkqB4YueZGCz6Kaun5pooepNFNngxUuVsc1yCqdyxwyR9J4xWc",
  "key24": "546A8dF7mYwUuCADuJMJyZT9VKKbFhvCwgnPtQ8Sb693R2ysxMyGm57skfLJZohMBGrwJ1qBTER4coaFPJPHpruE",
  "key25": "49Cv1KEvcsRbgQrjEsLmNzFLTrgti6Fs7hpSBCX3gM85i7Mp1Yui3z5SH8LViB3gF3AXeCfWqkGv25bsJ9CTpTA8",
  "key26": "2PKyNDXjoPa6fHvqxSFgcTohmaQK7Yb8cdrUC4kgTpSWr3HcspP1H6bonpULbb5ZxfiREQU9FksBZTydxXmtyTWU",
  "key27": "4QkhuJLpy7Z1WwKNtRjMYDvn2FJ2WQjwBJAqv1Sd94zg65XwFpp2yAHPqh1j15mgcJbhCwMc9SX3PBD3vpdMhzSc",
  "key28": "22XTeUMC5DKFxoFwnnAcfessi1q9F74UAMG3QGwuqHXcbuYPuDFmoxJZWLrcJayUxAeKo5M71mv1NBC3Z8FXD5Nh",
  "key29": "2dWf9T88aaVYqkpYK95stpCfJV78iJLf37gnWxNP2mqiimjNgbsHRH5DJyDE71NyE1yNZ8uUt1t4ijpKrvqRSEAC",
  "key30": "5LY2p8KTWxF278j2oBtHNzS3MbtYdhDzqasXpVNYaCen1veQWsncXrEnAS6SMtCnHYA4g3bwVFvAJS28iQ8QdiRf",
  "key31": "5YyVRqfa4ubgXbYm4eN2kaCzY7MBFopzycNQiDLUNjwrUCerDEKoWgsThsJ1FR2iJjK3ArWRKDW9SAoSL8a9YU6u",
  "key32": "3gbNmdLaM2vxd34SUPa1t143kqUtSB36agyT9wWLvhTVDf5vdt4fgh9ztFr2xmuvD4g1juH1vQkRdDmsjwxvfDDL",
  "key33": "4ZTRSY2sEAf8cm5P8zukFdfjjqtQjSojmEEhrmLsNK9VyFvsTpTXHHAdATx1Jx5dGZWPSSYvheLdJPFcGuuAmvbs",
  "key34": "65xsGhwBWD8tUx1cEyqCwpJiatwYypCrejqk6spGm8YhgxAdw2DEg1r7WaZq1WS5sm9Na2MgWS9rsCsSfvJ1diR3",
  "key35": "4bDCDHvRh3HPZ9mVzhjGbe7mPLwzkkG4fRUrxHZjW5N2LE9pBNC7njjWjYYRJZ2232yTXJAna2X7wok33nsgTQ9j",
  "key36": "5tbndqp9tNRo4GENfA2hq2J8GXDAu74fn1yNJxmcjfZbSHrdk5JH4K9xuwGmrFKjBWpfeuvT1kwYCbeQcFSR67pa",
  "key37": "4DX2e6tjmXddUNsBw5WTK7G1kUrLJjzq6rZ8K52ZYoAydpELXif6Yn9TeHAaPgYcvZTmEmUWuVLmvH1jCbm4gZft",
  "key38": "4jRfj4x6Nr4U5zxEF9gdiQfTxsS4ST1uYuv99gLXfyM8HWH4FEjVisrZrULdMtGxqmQaxrxdwmhN7sHRQo5iMVYG",
  "key39": "53NbjakCefRTB1F7np4JVzHh16v1aL9tqg73pC6aHYtn6MTYy87Qdf9b8Cp8t9xvE67Cptw49EaCsdbWBXKuJdXj",
  "key40": "4TyioVZbFLnz34CFraDy1LBfGD6Ke1aEhRSLJq8DsfbRUGw1ZfcGZbTzxigMgV9kxHxYvThi7uWSpaaHWqX5Beio"
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
