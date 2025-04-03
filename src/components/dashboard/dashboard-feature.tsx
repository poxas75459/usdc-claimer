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
    "pqPtukMHtXoiKu5SxKXxVKxSMktMYrGNtVvabA4dqmLdREYXxD3BfvSbWzBdhHvPKZ3mMVp8h4fTKszMJSkcgT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Efj1V5NvXfXsPatgzzjbLrbJrJidXR34w5kKKzwQzE4MS2wuffnCidL8TQVnUdRJH88dHACCyPJgzNZhQnLgfBm",
  "key1": "VUakDMQe3xd9bgQx5U59R2kUaQtgHJHwZtP8WgbKaibtcmbEFXRGQUhq8s5tR8zD3LffWXdVjApG5a6LviGv7dt",
  "key2": "5jNZ5xCFbNPK4UrQGfWvGzevipM7E8aDkfPYvEwDDnYzQWNN9kB3VikCDbL3uxJux81SYVYXB3FM47whmoXLZ15f",
  "key3": "5LmD5eAHdwPKPebE34NJ5mr5MRe2WDuS1ATzDnZbNkUwNSetWj1ogXMLAu7jSu23Jn337k9hiS8unECa8xNwxddk",
  "key4": "5hVLnUsHAvccaRKvMiWAmrmg54CX8t93zFBZGAXDfnBXYQQ68sRf74q5cjAByiaVT7JuShRt2t6jdFaF25mtJTTr",
  "key5": "2Us5ZU2wnXUNbcA13CGRjMNdmQ3vPzdF58EwdRiSURKgX9Zx2oeEjy2AYvCQLWTbgUqBcSjXzStnqDpwoVq6kKFX",
  "key6": "CLiAw6rr6Xak7qpkG9g3DurJPoXMp23FDPiream1jN57muPqGYwaxvPvqKcLdHzKPsPmBXknx5LwqUvsZcBrAYK",
  "key7": "5A3Tov4ZEvABpstWcEkNXFwjKj8QWMKbRCDB5Bt2Cbph1DGo36ncUaKsdkuLF6dEt8d26pm6U4X8N2Rb1VC3gqJ1",
  "key8": "2FeugPk3Kr6h2dkrqxTjXf4WdeKjGb14FTf3Mx6uu2XzL5exxvqjc4Rzk2cLVbg1xveE5L4hujQi2AVjnwgonX8u",
  "key9": "5eDuFCoCtk6rLdvTdjJLn8TzLuRKjTQKtHqsbhwQR1rYx48vZXHP1hfzCqFFCfvo1E39K69wKzfUYnv5rCaZc6fs",
  "key10": "pCzmqrEEJ3DkPd8mwbX3ddrtuLYXxx7ckNUAQqtHzTqX2McHiRL97edCfuT5uq6fhWUqYdBR4d9pc6UKJjNkzJG",
  "key11": "3itRAHhNqWAgnvjBbWWHPtvwD5EYBS3rsSfAEzE6rs8y7N836ZNoh4zwJBkuLpv7pMJY4zByHJzzKLhf8SSya1Fx",
  "key12": "3HaKREDFTCEGTG9vteDKM4kfkP4v3nStQ8Tn32U38ddwEhqnLnQQbrUb1uL1MeMis7B3R8LcKXGC2urt6w6F1Fb5",
  "key13": "4zewAWdH2HkGDST2nGyj9HA5k2Uk4JPvZVLznVbwgNjFNwGdzRXMsaMz1FV5a3RHYqoj6whtWJnjJgBTnRgDv2ZW",
  "key14": "52cwFe7ygZevegXFqweJJuNpaitaXwFhNaWxtwALCJkV3k1ic6jENnTjzJwG7o8WVbJgNaRrWcQGadkfiaao9QRU",
  "key15": "2TfuhJPnzZ4Cvgq8PD6gz5ZgEZP9QTfLbh3Mv8n1nKwU85fC4CsumPUKeWwU5mxyBfLwohhpMfuvGJStWzTtD4fr",
  "key16": "28xCFBRgGmLDqcjKNfAFisghT1YWy2vA6x8b642Lv8LJWVadrvYo61SA6H5hGtFxrWT2ZXAT5pfV9SoWPUHgQDyZ",
  "key17": "4Paasvgu1Z4xuLFE1vw4NdyJGwiACRbKBXHWknnTrpKrPbJxUCbnQRLB7ar3CuXVEVXAMvGBgRK4h81WamtRjmo8",
  "key18": "4kZU3sjwmnRkmCLvhaEqND3KHnycwyseSCx2yzQ6vfFej2djjSifZXHPiairPLGT95wCCCUL8ypbMp9jKQZewiwg",
  "key19": "4xtQK1tyoZaMkNuTds1FU1koai4TU3gumtwaFmdcYJyvn6L7p8E4B6pW7bL9oQDXzFUh6meu4nHY4Uk3KbXfYpDH",
  "key20": "saQk9WYSafpG2FHGk1vJdcx8vvjojCx2FNmdh3JEdTCHZ16Rj9Bjo9YA75f263Cp292K1bUtN5aKLrSaSnNnXHW",
  "key21": "2eaE3H7Ke54avuQ1kb9V6Apt1E3s9aupKMmpG7Q941Fs5wiLtyByq3x1xSRxBqm3qSwfWwmLxHuHWwwUi5aeergZ",
  "key22": "2im3c5YJTAmE5MrPi8NmX8A6aYoPg3oik5Ua6ZdaQCg4Pyyopx1JifkgZT2ZAWLejvfYzCtoVUNtRguz2ufVCDrK",
  "key23": "2bGvW7YX4svPbyX1ThcS4JBoY1hQ8FC4EW2eBkFa8XwxsSCQuh6a1WLHBx9oPQzexBuHCHXecFEm7eZBdH8XP26v",
  "key24": "3BSrZmqJqti26SQoTJvSSzpemXWKAqymt3rPDN43YWReChcAL1sWerFP1yqKCAxPuyLFFvF3BxK1UZ1yuMUYXaVN",
  "key25": "aiPPrQfBViYpZCdNVqeG1nvuQxy9hN2djke2dJYA2xxJWHnb2kgLsZHFvsRSc5zZW9ySDXwFKyywWuo38EQoXEw",
  "key26": "2ugRmQRAiudPuZ1quNsS4S3DhVdeMVZfHYCQttGiGBuTJE1FkMHpq4StFzoQrq9wWics1Bcv2JeG4DnuX6fEz5S1",
  "key27": "2fZX9kwE2f5krEqz6BcqNiGrTbquo7CB3hJRoQbvNeed32edMYDZ4i62nV2bV7mVbpT9WYKhhAwezrBtvtmtxd6b",
  "key28": "5TfqAdkSJEmUxRyNEuzEJaAYkU6D7tfzWJY9a6jf8v2118NC3Peys1thandUxLN2MKXQ57yesEZUk5jj9GcAxyLS",
  "key29": "x53464wHfoq7pCcvGTRVkhakyHEjuUe34tGq4hjp5RqegEQApN7fXMpU4hTzTarjawdgtwkbyoC2iVsE7zvz2Kw",
  "key30": "sNdbfAGg5XPvLuma1LscckgtpAA3EzBqarEvMLosDj9NHWpNZeAfzMLGtZNkvRn6XJJwxTMARcB8rae1NQ5BjLY",
  "key31": "aKB8MUZgLrKyBdrx4h4Ab9ffgmWUaDRHofMKv4WZKAmdFxvkCPtswiJxfLkWUf7Rfydvgoj2bBFebhoZ9hFSwur"
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
