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
    "fH5RKBWrjzTFuSA1B67e8zMRmJdoBwiP5cmct3wo6feaXAnVi2goJDQyF2dt8zft3xWN12bGp9mGPFzGDk6Sy6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dv5KDk49dW5nn9E5K5ft8XNV9Twv6yvNdagQkMrkUuQUjHCigocgysTpZy2kq4a7GarmvDZP7D53FNWUFFpuPU5",
  "key1": "59R2AjBwXq93uYpRp2RpYeM4mEfuufm2SHPSyshVnBmXPUyGWpszjsB9Zfx5o1j2U4Vu9TpB4vTuh5mdc6fPriSK",
  "key2": "2YJoaqhE4QdK77CkaJJz7r8pnVL8xb33TucjU2ahvQDodhjVivdoyivfXi2NNoARYaCVMLV28UVigM9N5PZFFwAa",
  "key3": "2KX6gReEZGn3s4w3McLgmmf8BxeBhRPkGmD1qzQijVG5NnCKSUf9LVFMEi9aeZQXUcwjaM1Lp54vdWqPmsYJDoXW",
  "key4": "LTCUXYvGMiAjTWBERcV8KTvej88E4snBbUcqvVQef2GMXQVDJd3mkKegVPYJJ1LvaBnST2xPMM23FGeUS38d2Z7",
  "key5": "4sWJcdNMFkZGVE8X8mrAYzom3p3hjc8zex9A2WTakMjPDJ4a8gLDwwvbsjmckGRTPqdDk1F3mK2rCpx9jELbL6Kc",
  "key6": "4G4tRUK1MjESZ6zwFq5aFSn7YjnuBeJoC9uEngkz6zV2mUwdxD2XSasTZ2JKB6qCSNHMbAi1vhreeYtxYp133rfz",
  "key7": "5nHaQ8f61rShJdUoX7giNXmiChmibGBqBkZPBJcESuveQifynCbd92gLWqG7ZFR7ictq7gqmri8zHKYDuMTSzKTQ",
  "key8": "341auXyo6Lo61MgFGZ1fTBUcvcs61cRmEEgQMr7dQCEygoDnaYXu9m55UyV1rMaeUt7s5FnzYj9XwF3cQa4Aaaz6",
  "key9": "4CPzMnoR31Ftx8yvr23dNPLnvMo268mXCXT1vELrpuMyNZJNg8pgfMG5DDwJCLwk7YrFXpzapz9478smQw4e3ChU",
  "key10": "21bhkQsfYngDcqFsjZKAAXqVwAue9bndVqmFPwJ1WzcfAmUfv9S1siupSRRW6gJjurQCXDJZNVik2vj9rFPwab9Y",
  "key11": "635CndPfbo4DreBpMdzDpotFJWeu6RTqU8tUZhfFVbTkF8tjUT3gLRPzBcBb3QTR6QxJAqEpf4xCfVcGfnYoLws9",
  "key12": "5AGgfrNcvoCGD4RsYaj2cBwdqLykUpuqRju7CKG7c7yTcrXeMnkAg4rmua3nb97HyYKXui65GQ5Lo86GX1Pd5wFT",
  "key13": "2TumheLUzYmgDWkoUGvm4ALV8R2aWQDF7R6HovtynRtFWBpV7ezshZ7pFiGrhwhyC6sGRee7RLKbYzbmivUdh5ZM",
  "key14": "4kZJVyB36L6mPSbkSPNJHaNN8AnLTuWGdEhriReswbH1xKwro3eE2xGq9SqTPSbp1GAuCfrjqU3Y8Ln1Lzd1vQVE",
  "key15": "vC2svtqbE1oy3S8AmFxeFw8TFgENVrTg9cLaSQVrUb6ZtPAA6atu83WBr5gE9Liu9tv4C8qxFajuigxyHUM4fqG",
  "key16": "3jzG4KYveS2mF2YTcCtLFSCgYJR4c6S1iTMbVNhuA1NAG5ZPSECAxNggdwyHCyBHoVKxyVcFUNkzHSkdrY9ZPogv",
  "key17": "4HSAhtnNGuRPvJ6DQzFjb1wo4mAV5rdD1kDYEuHBbRii2bwimZZhSv7BZHLPsro7vivaUWSSTV2zTbeCKvgPrZHo",
  "key18": "37tYJ3M2a5tUPg22B85ovkNwW9M14f5VH7DLCh14TCUB4kfVVfftMDARDcKxUYZqBTM8dSEdoMAFh1ZZMpKgHYND",
  "key19": "bx59jjULCC4n1Gc1qMfBBxL3Std3wWjMf6BNninnctqfPWyKVYKjVEH4fGrjzA7z5YvPtuL5nFnFj6cNHteSz4q",
  "key20": "2zrqybG3Y6bvb5kcapMkPPTiMeB1KgxLRci3eQAj3vg37wXELP5KHhRkCB2QqS1RxYJqi934MAgL4fkjBoJkwebW",
  "key21": "5LZrR6uxcrmAQc4xcXSKq5wHA4etXkADLXbrmvk5X3HMgrs1R2qGRvHLnG3GpiWSTFNTbCGEjhgVoDd5yDaZzZpf",
  "key22": "2QaZSfiDZX7iXCbczVBZiHsZA7TuF3kNw8h2B7kyKGQ8ob7jTqRKRvw72L4pHL2u4xsYmSucyJwFqbMX8fP5mhph",
  "key23": "3yaB9NjLqy1hqNeoUZX6aR6Kd873eaDxKcyGSxQPDdhu8JLcttpg2F51BMr538719N9nwQZtj12jTRL75MoHoHzn",
  "key24": "5Stukc4CWn8QvNwMkB5mpUPRfDUuR1XSAs2j2A5LyP6Maia9vkjy7ZZGdmi2rRmJUVfE3BmHYPgDAnLNnVrob9KY",
  "key25": "2VAe1jUATr3LCVjreuKz92tKRwxSKU4mDPh4MGRxAow8anawwRS8rXFPSmVuxFwwwkGn3G3vTWXWWQdDq3f88zNC",
  "key26": "2Zm18czs1r5iAXc2CRQYi2reBoXsZGHVRW7GCL9g82mUgxyVuQ8qhDi1y5cechESwFov4x1w9wDXpk9fiVF82e5y",
  "key27": "6YY9z2B6k4MmRXSecNQmPo2cyoUmHBd77sPhczEcPT1KR1g8JqYctsdgsUbCN45RSknsfSvhB7m7cRFrCTjemvd",
  "key28": "zu7FtkPEFTTrPaZASxFcLPexrxLkXzmhME7AuE3onMzGHh8vsDvNAMGy3BKG4Uek5xa8tPkoivX1HMQ8rvxBxrp",
  "key29": "4QsBqyyrd4JbnLHhZ2zTr7rnJjrd4ray4C6yS2sosV25nneBgwnqMD4u1zxodDZTcLo8hXRvBFwbhBxXWVhi7Wgi",
  "key30": "3gyCVQp8nrxgFDvDy8XqYgoXaDMb1YkfgXsfA3bMDQEs2X3SAoYh7YfS3c7HWVsF9tz5VR25NsXpspESqRJ7NiRC",
  "key31": "2SGFpooT8m2ZE8tnfzMMNSdHb5kwqQGp52GMHapAqY7ZzZrukbCQP7t9B1ARmZUGYoP18PmciBbf963WB2q7VBDq",
  "key32": "chaNVp5ShBHUY7GZwwczGSa84BHc2i6VhXfqzHh1hG6e3EftjvwX7Pdp8Vmj4Lx97RvkaoPYkuUZ5eYQSfddrmH",
  "key33": "5UqUXmLt8eYpVgERTGdi5oeoLDyMSjm1mE9vrdUNXQjVKCP1JWvH4KpLKexiWWD7f6r8RCxsa3y8ei1DJbfDKhTW",
  "key34": "47hFwu2pKiyYiwWf9JtvWXEi1t3UUDpHLAjYFS4bwqmWBtY8d5aZbi51TPvtsEGonbTojD2iqSyusJmoCpzyZoeN",
  "key35": "5zvjH1hjEzK4mhLkeGjEXdqTnYoYffF9UJwWER4r7ZAAAcFfpMmY8whoTjwTNgUFp7raxTrgdoZM4kBkZm1MGouU",
  "key36": "5Vk1R7gHBTdScDQVZhfqTod2MRXxVquehGdWiW1fRkFtzK82pS66mRx572urcpd7q4NU19HPM4T4Giy6bA8f9FJy",
  "key37": "51u83RhRAQgeq8SMMmgawVQrdGf5WbEfpc3N1Qqv98ggG6qWpiKSbA5YjM83aRrB3dSDN13KbhXUsWNHyozKBTvH",
  "key38": "bTiXo7p28JQ7tp6SgrXi26exeo4Y2DjChfc25okAbdW9KZ6vNTQgUT7zBCYCafHatiVh1daQebPNCe36jV12SKc",
  "key39": "5bUVBHYW11Dwwk6URhrTRBy8CN3sN7gaV1nLf8RJTcYU65jfeiTbid3Pv9CFLrgoQz9cimnQB1c6Fq8WFE8Fewhk"
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
