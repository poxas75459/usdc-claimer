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
    "2JwChgLq1xe99WpiEVrBQtqcNS7K6qM22ysig3H7FwMi7wwpvNMWeTbzbAPvHWQoWz3zUJRdnhoNH9sfEX8iWDNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1b3B622PxjYQLNCiawHzkMpGosc6v9VTuxbVhwAy4Y9wjzNJjes41HVA2TQ32Sztiuue3CUzWs1FDJQrPPEBJD",
  "key1": "5YyywC4gCgeDob4urAs4Ti4ksbnvsqY6Xft4CeBzdpfNnWcuJXthhi2jwveG6oAMfnPnMmBWTyf4QHhWG149iwv",
  "key2": "2bew1jopkkvhsN8x6mLNuHFZDbYETD9PLcCdcnwKqZ7YzvcoQMf7CHKPBDkvWCRaVnih7W7hm16vCSJBaqwtuYSG",
  "key3": "2YuYt8hTxGzvCy2ZD9YnS6BzXDWPUKrNxRbWqApoVNApdbvPbLsieceSydMFa29MKeWq1nnDGFS63opv8uHfp9fN",
  "key4": "5pNgNJhnxAUtSF8WkzEqRx2HJNESTmaTrVpPhpnEp2BNLjCrEvJ8w7khRp4yehhf5WhHR6PdKVggXvY3MYdDcVUY",
  "key5": "2C4nwJSxZM1vmAh82KhUxXkitzSBA4wQF3gtP2q2LrdjKY1eB5eDfiKWpbaabTXWojBNDysMfxVsiJ8YvTi8Y8nz",
  "key6": "4vxKNtkxsnGm7nzigXiRfh6sumTUKB8age53symZjrhRe2MtDGVEj5aWaP9V3Qm2dqEVm4DfLoXnPHvMYa22FkMa",
  "key7": "2YQxAeCN7EephV7u9TVYx14b1KovTyLH8D4ugzhe3ykaBxnjK5ThQpPKC6X8FAMU7PdHGc2TEpFd4k5gqpju47kM",
  "key8": "5AFA8PzPGasXMAJuTNQRgxf4dgcjT13e5JMz3F4EGb4batHDvsgrVk6xD9fH8cksgCDv7QbkfgvTx6Jd82u4RnTX",
  "key9": "53tvQmYg2WgiS1t5Bae2sazn76GRRKWh4KUSxSQyJSbmNo4rtwK9Med2yjEsUFDRx3cm5VWb8rBiuWG9jsGnXuDY",
  "key10": "3mD9DCEVWb63Z4DcdhDHb52QRo9cbZG51JyioPC4RNYtxkcbEE1N48th1bBpCQW8oH6pSHLWjMucGyhCSLS1zi6P",
  "key11": "51VWaQ62nrPzbnH5sZuKzgo1d7qAd5kLH9pbLvgG4UrknZZCf3fLF7iHrP7T1DSHsNtoaeQXXpQ8kBkmGd3a26sN",
  "key12": "QYwiAxuu7rQU3QL5h2kkDfJHnac1wbJkby46qR2AYgh5WCGVV5rUZSRQKdoBFoTnfmucbN9a7ouLKQ7UDmmBke7",
  "key13": "3WHXgAkJPV93B6MDpp2e5MEDkvvEnMjbJuBDhpbHu15xqjbEwHY74J9aQv5fUZbWuBZSMZA1FJw39PnxSU6rRe2y",
  "key14": "21hfgA7cahGLZud71FEizYc98PFDJk7TgciXZgefDkv3TeqsvBFyjAKgt3awezxmG8vdNBp4YTTggCxNnig5dUEt",
  "key15": "BNFmWBYkpzMbBRYKMPid3YaPZeB3eE8AgPGHpuM3XGB6bjZaUhTkykwwtt6k5PycQit1uAxwpyaC59JCS6hS53x",
  "key16": "2rMo3EdfXY4KrJQ9h3fMfecFRqz8Kcd4kq8K4WDLq6ozhFmZMsdSzGMDKtEouzgmikZCG934guZSzcvWe8RaPAnH",
  "key17": "5NHRvUwRChQDtwo9Pg46wtwqHxT6D9WgnoGB55qmGzLUbyD6ALSVBrcsudLruwyY8hW7SjT1xYPNsptLtkg5fdjY",
  "key18": "5NKTCq313PumpukKssKr3jtXGgeNDFdHfBM3c2HSx94JDgiTjkx3BgVNNwJSd2tG4JVEEkQAXJYMjjQ3ekhsYnES",
  "key19": "2ra8J6U4fhidPgDNFzMJVfVPuE9jLKhxSAuGEbHYk61QVmjMukdcfenMvXz7rWXu7CZg22gWU38iXB6mh52gFcqo",
  "key20": "2kcCx64Yy8eZtUR4KBbmLZGeEFnoe9hrDsJLqbVFZXcWv26JVBDsi9ed8xhJkvPajxd6dof78N8WsA2BzLW3e3Sf",
  "key21": "T52ZUVFES5z4LvMLVmZ8fjymJVRowpfDG6V9zhjhqxU9dDdm8xp5h7VpZkLwFzy4DGVopb9NVFVY4s5W6BA65HQ",
  "key22": "4i6tZTFCMNz5uLtWKnrj5i7DCMMFeS1r5xMN17hj2AqsxXzMiZiH4BTrQstTVRefFB3eHkBrWotxyD9wGXpK1EbZ",
  "key23": "2iwZVSpuvtsThgABzWWTsc7rsMtSCqALNthN6NJZztXCBWFiv8vX7vDmHdUeSvEANikzyiDaUZyD97Ts4JidTEj9",
  "key24": "C4FrkkCZWdf1YHvzdUof5Vw2U9dmgH8BH14w4R4EZurAiLfvBQuurS7xKQF4YhikNHuoKHoEZ4YES2Ab5x4MDx7",
  "key25": "28pHLJMKv8MvkzKEeQvpvkKG5p9ur3PvKD5upzhC3eQ3uyewsDqczzKrHCZjnPE1wakXSnLboLJRiuvfveQ16cYH",
  "key26": "2v7nbUTaj1S8ngwY4pvYLyRHLRuJEcqd4sipvV9SuqPPjRYK342H8uBFK4VMQAwcKLgypURfAqHzytHQcUQYngjk",
  "key27": "edUjVzQvzBR8DRcdvPRKvz6dm8UXYP9GmdweDMD9WkFcneLasSzzF83W1ymdYH6gGHAMzVpbcv4inCsDDAFChTQ",
  "key28": "53pcSkYdP6fnhDVU1Xx4SgJngh2axsm3aVJ7B3DGEwnhyXXZ6LKNofkvY8oyFhHsG1m1tY3MhU1wFU6Xwf9JrYrj",
  "key29": "5CcP2PVu9aCfHhJT7rCYxqnsYsrytuVypLUBAyuwS2Yb7kHfFM5TPTHZGGHuB1ukyrFVTakR6waFCaCSw27tyJhZ",
  "key30": "2B98GCRfH6ugZ3MT5mJvx7ejv1DAbWVaSgH1yHrKrgLVQ7R5LZkCQnhhgtgM4QByEU6vLagKibZ9XW6FmCY71eFh",
  "key31": "42i3RpGPmx8AjM9BXDtXULRZYq7W43GNnwAAMnNciSpruWa6F2m8WtBA4BsAgWMo6XLtPwvZDH2QFHhRCe4HkHtg",
  "key32": "5qHvzHtbHdo9PFUBCTHjy63fNb6h6xVudcWZmd9fTWZsJHthmRPfC23AAz6VhjVQUKcJNAxL2hVbpEHYLUCgyCc2",
  "key33": "2cod4XAVSftwxiMVgvzbKqs3ANUmtixqVYNH1NPBfxh8UmgRTD1siWeYFMy77Q1it3E3LKELGS8xSNrQyYa9nvsp",
  "key34": "UpXpcEs7QgzGnRpK62qNC1SrzsBCVE4CHnUEjZTs5HKy7QNMLoJBCWqF3N7ztzTzfdv53UE8b5R8ahw6z1Piutr"
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
