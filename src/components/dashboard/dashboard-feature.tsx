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
    "23vptoQd8YsPhRt6fC3oQBK1BtWZaSEkrqBWuLWEa6gxgxvP8gdQnuYKXHAyDtUk2hUUtpWzwV23DAV6UMYoj92w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fvrgp38fAT6waHcLbzFv2wktaMNx1NFtemrF2pzKa5e7zDyhwvQdF3dZ9foXy2geUXyGHwJX1FzFUbYM73XLScE",
  "key1": "3mhMzJrWuAiwP62vmGCWcLMRgU6xTHzm3Fsjuz8UL98EkMfLGnGsWqeQqi7tYJTL6ZpiEHrSbHwrXevFDeMGKHmk",
  "key2": "2ekswgnPvDJbsmCWXzAxvC7DS7SfJ9BnvbLbREaaZ4Cv5ehwmy6dyfRFceXedzDUreH1JyuwHXgN5juu9B7kFX7E",
  "key3": "pynPh2KXSCrJRER2FkKVV1q5s3WdsabqUDovcueonNEiWZge83PaigRyVF5Qb4A1tAmnYbEvLPqsYNdcWyiJvv6",
  "key4": "3NQkJj3JfoauNTZgiHguc1jYwpJyJ94uw8TG2hn7oR9wjBX4FQ5Wndor7H6FCMsC3QRRuo2YBxn2Q9fnKs9wCiX5",
  "key5": "5mJeD5dpn6EeH6xdRdY8vVyhr69qegGJhTbxRsjWdNZz5knqmSmXKtqk1i9M1xZawhABArCJ2CsmUesYpy14PWh4",
  "key6": "5M5wWAvAVWWfmE2DYjnF3pe3mQoXiHZYHzygMWtzBFBoLRHwNGdvUEE11PHgMKjLuLhsLvEW6Yutg3tJttvKXBea",
  "key7": "U4r7fGLYCMvYaFdnpTQA4F912CArhqnBxnkU5vjiRrC5CAFUy8oJHpRCJ4VheZHp2e9zkAkhqFjS8gYbNSdvGYt",
  "key8": "5Uk4p82Vzdb7Yd2fCYM27zhy8SNXy48B7b4seC471eNmSjSNUrvwf7axYNeGaqQeLXFWHSF49N9qAYh8KTFEaDPa",
  "key9": "A3sTZfEbwFvqXUyMMsj68EetUbrnidx4JutGHm6Thjv3FTfkcwpT5PGetYNXJhZovU4zy7m3Me64vnYxPpHPqau",
  "key10": "47KtTxPeFw3JgktkLxPJh3y8EiZ9PssBjq9Azx4Zkeys89tok5n9p2bszbrvbmFxkMdU7wL9jXmED18asY8Udin",
  "key11": "3TySkmVRjmtr3uTc2P5AgQD4nM34qSvVyA2NAX5TXsbcaNKPzW2o9jaAcBvjEz8b6GSGQUF42u9F4My7no1Z8SNy",
  "key12": "2ScrR838N85VGgFxqwCiBksQ5geoaDctvz665Cwdx4r3UL9TtAFgkhWpDLYXkVWu8DTXXgbFZC9A2FVuqPhJHHf1",
  "key13": "3ArZYpvV6X5KMhZzugHpcfdccd1n3PJrJEvphnyCnj5NcdjnUAtaTrpcr15m2GgGimse1bqo3yUsxtfroh6wWrDe",
  "key14": "4CCx3ACjEBK4VDX5w6L4jNwbsGndZyMYkzxb3YL6AjmsTPrUUMBJRgwD9hLethWp5xRWVS9W9Pb289DgoSp1drTM",
  "key15": "4EEAZiMgVEKACXwapEMSFYX9gPyThCeJiHBnfVzWB9W6Hoeq9CSHemqmDx2h8VykdWUSGYmfumoGvp8KpN2FGxAL",
  "key16": "2nEcN1JTQPHuet3aLrbAQ9Y1BaVLj2MQCxsoLPiGkVreKe5KjeUjB1rF44DPWAxoah6cGfR3PkyV4AGgjqRq6R3W",
  "key17": "2badQoYVpahKJZ79P9Hg5LjvNWkKJ2JatVQKp36xmenFeR826hyDAP8USuozG4XYQHtcuySnvqbHNCwf3FiUGXte",
  "key18": "Yi8k9hWsPoGWhmtC8m42EJ8KCxp4WbTJBLWGyf3EsAaHHoLjKNDDVfKuBePKs7qGiC6ujwdtMupcQDa3KWTWFCS",
  "key19": "9X6jBpXymXTWWX4hhTCnhkbggAYteoH6546AnT1XVAyWKf6zyGwx7zS6UGEFhLAKRGbo2RUfyeyZrvH2tAfRopX",
  "key20": "GCf2VBBNDB7Abcn6eRGfeFEng3Vr3rhcL5xhtAcWSaLR8yTEDmiahc9VnxSSX6VbyDc88mvuzZkr4he9P8FGXgi",
  "key21": "bL5uzmCsnb8zUQhBBTZdm9Cv7frtW6573YNh2fUM7SFs7GLyGJ7FYpPxrtcGdCnQ9i2rX5rLeZGYAqJeBGs9cCY",
  "key22": "3qvvtxVTxbizaDmkPCaJTzrDiWmLf4ZwheVQJ9bjjLJ9wMpNcvJUvpx8WmSFR6iKaagdGVcCiUddxqz5hthfW8Fz",
  "key23": "4qYnRQstoRMQ1smctmKqHjcg6bhFxUQzJnhGw6XdAv6oxApRDCnC212gjAm6mbiKebdCsQYw49NEQsgpkfgkss15",
  "key24": "ZJgqunU9ai2T3HKrcjaxmcCu4hqUZm4A92FqUoK6wTv1KqJ12GWbgExftscKaL13hsmJpf3jSxftNUWmt4PTSh8",
  "key25": "3PaKbtebMtQDvwZDXcWXYgUovNCkMpLtXyFhQCLHYjrR2cJMHMSRoEPtueXnfwzjVXsS5Naqyg4Khwe1NCtemXT5",
  "key26": "2gud7vzc71ikkWHwhzk2q47beAk67QfdpATrwFnGFijxtyd1C7hLLtAM5F5Xxh9xSLSATbuKhJ42zzANqHvYVGSh",
  "key27": "4tQLDBqmWVHmmqRdrfHNZaLyEbtj2ZhgENhpf5rR6MNQpLnMaaGkfzgi1GkAm5C5NZg8qs9yeSqDMRTi3cZGbwPa",
  "key28": "37JXK2jp7d8NvmS59zE4jqXZoCQPRCKCeESuhxBxn8LTXFwdK19EjM8qfVbxL86dCupMaAT3QPLZYKRAJJwVE1tu",
  "key29": "2sYa7wo8Ge26U19gS2QaCNXc7bqsRn6Nyw8ktuMLCFrUnh57fsY4r1TfuLi3wq3A5A9z8AGCSeoAADuhtdS4Hgo5",
  "key30": "5NAb2rcxHiS33b9We9rx8T3wvLLhY2QMNTLPQLySgFyRPQpb3exjwBuZWqK4ReV1dLYUCArPS9n9KTgrWyHsrnEu",
  "key31": "2LjLTZH2GpYPNnVQLscdKqD6Npi1saFVeom3L3wf5Dwmi5yRJ41qL6vVfSGQazSboCRgwBJxWoPRwqEd8XgP1rDw",
  "key32": "3kaCReaw12vUnyoM22u7LaiezeusbDZ2n2CffwGQ3PBgTKopK6tBW1V8uDqJwnhZcUZxELhZSPohHNMZozijHceA",
  "key33": "4ZRgfxubm9ss98jpB4EqQBXpVhKRQzS9qRPP7NLmbE71TBcEx5TSUN3Yg77BF8PwWcVdDXFqBDN5YSPg9zkSgFRR",
  "key34": "2VXdNdDZkdHQ3sNHgMgeno2g2AvK7tGjYDjCgW4eVQK7vNmyA6aQJTPfp4AXtXfqA1zJa5NApKYd7sggqR5cxwfY",
  "key35": "57AarXDcCyZAxsvTmydFoeKGrXX4sB8DL2XimjTR1KxzK9UmT2KdXT979NZWTj71mPjsFTxaDsMP9yGDVXxfSH4q",
  "key36": "5YSuU61FT8GWddBQ1FWmLgMAbDHP5VAyS32ZMG1YvBcSmKzBM8J2LzMoJnacWotvWxYqdvzYAgZJjJw1m3LqKnXw",
  "key37": "41Rm7jZLaA5mkCvmAXJHuy2q83gBSoDfUe15P6LN2TMM85LwWMqutZJWrQNmZ2QJHXxphHoeJ2qD4KjbMg58Aoie",
  "key38": "2kURURiLDrgNw5jQmQ4tYkhiKcv71L8HhcdZfk2RrG1mnW79cv4eoa9dfTUhQSmCbZeWazARhi1KwmDdFYB58ehC",
  "key39": "5P4zzeDnLCVPeBxhmiJi21xe8uQciLfxbGCdnHrD3wkm3o5pEhjn7FnFmyduEGAFva8xHmgN6T5ToRH6RhNkHwwB",
  "key40": "XPJE6nYMoA2SWzE84CUTPEmet2ThzNL8vt9nx7yE7biojZktWvYX91fQHfA72teS5XEGMAwJciiRkCwNsWVmXzF",
  "key41": "23aoHLE9NQUSiXjkMayEo6wdthESyK9mgZkjzkBBRwmzsQuzKwRJqtGUXTx2cAsxmi16G9ZfG2nRUwJWb3xAskKA"
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
