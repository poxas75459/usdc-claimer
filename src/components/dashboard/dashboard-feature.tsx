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
    "3vuKQZDRXqkTRRwXpR544xz27AnqVvEnJo8pyrQbbhTUaQVgVpCP2r91Bte6BYxS2SEb3vx5sZzrQ6CE3n6Mtppo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62uEYKmRyZeBLoHcLuQmet4WbeA6jX9eMUitWy8AHoZsHFfgrtTzVhpHh8t84Edaf8bBp4fHjgrPP5sX9rTtwwYJ",
  "key1": "2kS7PtQfMrxwqozBc9hB6QwdfBimvivkAydKVGZrjTCv1NHxiBYdY4nxocWuEmoVs1SH1XsXckTaxtWp6GapDrh4",
  "key2": "52gAPJECun3nD2NkRKmzSpoAnWCL3gzzQbzsreERqBK5KWNZSAbbmBy49g2UPDwHo2NyA6CfCtBatN9izT65GCPt",
  "key3": "2cf8wRWaBPh24A8hBZQfNTQF2836skWXtCMEK5DXM8o4RoEaRuWAeeqLnToNgoWpwFz5R36AS1bu7Q3mP41umreN",
  "key4": "2BzGsDmuYZgvPMEhEyVaC5D43bi41s6BPEKQo1ioCartak5nCqEW1kzm2x3dSgHBHifEeFZymhC5dYF3YJFsXBEY",
  "key5": "Geuk3pg7GAeVGVrqgEbGK6fENwHnrqVNJfgDPYmqNY8D9sRw8EfTtURkkNTH5961XNaSCP1mGjDxiPaUj6ZaQR3",
  "key6": "4megbWf8EXrDSbFRKZ3RC7YrZXwBwxq18aXbCYjJQ5RntFhDG16ZzPEtGxUJnrZsxKj5Upk5J68mKxgsG4KCxHqR",
  "key7": "56yjaVpzJsTrVEKMG9TNEnGvc69JSCQUh1e5gj8qQDBqZhZX1XMGgCCfzF7uLVbyZTxQftTozuyDqhvvgEVWQw1A",
  "key8": "1tJ3TPKff36rEKfxJbHX395AAMyEnkbUnND94RD7XfqsknJbR4kNG9kVVL3uvgViW3MsYWFukzbKbLUvuDGLVWc",
  "key9": "61Lbv686dnMTcCTr89fNZD6qTnHwTgmZfvuaFAPiK1i7vecACvz4LEHWrN8gGpGwMi4jVBzLf4ao74eTAsuHLHJJ",
  "key10": "5vc3jN768ZfxQRM2wPFexSU5eJctahVQb9orGPCKasHGf9cdiGsosrpD9ZwUtDo44ER6fS5b4AcgcvyUM3MyjdFt",
  "key11": "3srPhZBcVi9A1mjZ8n5V2Zu8Mb7Sgv6o7JUBSBuAhSvEJRxU8nYWeC1NUZK2J6kL9FWjiXdMCJAhPWnhfUUxmNW7",
  "key12": "HCFkUbUqZgPPEsTnfvRxWWgWMVQTmNUhkyhYhJaiRkcitd5NSwn1speUexJqtJJnhX94StkqGLQX3PHuBZxGEjB",
  "key13": "JMBfqUVzjyHpCxdvDVtnnyJNZER6Wzq5NoHizKRwhzYKFWuksBC1ZubffBJZ1t8Ti46mPASxZfeveaUMudVQfaf",
  "key14": "qmHDDCrejUWKfaCS6p6kyu857vffZi7KzbZd9PXjDnScwZAfSfAvqSZZjb1WHdLd4xzofthJcY2bFe4dUkpJnw9",
  "key15": "Bqd5VnTuyDgJvzXBhZXAAjxa82ptNuY9Y7DbhSx6xvqv6u4iieyqUXjpD9tocDbprNnpdcanVVpwDcXLPiYtSdy",
  "key16": "4hBxR5KwwFzPXnD2J776vLMBSAkdj92DV9dMT6wHGbNCruz6NK7xtvUqYBriyPMNNR28v1T1QYbDJUSFfe3gMEoN",
  "key17": "2GE1S5AVuaKSsPNC2N2jpre1K9ePDSUsgEKHAPwqqjuh5brosRBMHiCDsLdhixKuucuZEckWDMi12EQyQDgrM9bK",
  "key18": "4VLUZLkzqEooysQ9UbrGsqsCJZpFGDEE8rNcv7oS3Z4pXPcvcXNhRTihkygffgsmkUzfDKVVg3hH37tciQhavLpw",
  "key19": "66oEanU327MBMSYtoZvcVs5wKQ6F1FJdc3ZYQDtSUNCe81TuxwFgAmfhU4N3WLHNwZZVy1kkRbQXovZ3fu72tw71",
  "key20": "2hAHzAa8g8sXYQKpT2ZWQyn9oLTYxLPASbXztbwthmVeNYDc1Ew7Ud7gqFS8HUda4t8JBh2CikT9Cfw7USDYuMYp",
  "key21": "4czSFuuXEvQHZSKwPBoRh8sz5JRYChz4FMEXXQ7nSzg56cAdTNn3JDbJYY2bUVfupRzASz3nnYUDzSe8WhdRxPCn",
  "key22": "2F3s5ozrSXi5dhJGGg4P9HTdsEga5hb9zMb2PVjRhzzxZ6kg8C5jKaVRJPtuVvz6kWETeCCXAYHJXxe3Uxth4X1C",
  "key23": "24eSdyWAQCCujeSmv4UJtT3T8zEyTtJoHBbvh1HSugmeUbEq6VCQ547j3XpN45bjqkhAkznAUK4vQmhdHCCz59c1",
  "key24": "2gF15iBfj9DKsDpYdtY3sn7B1pKksN4BFrgLSiUWpFMt2hH2DxDftuuygxyu3XhJwBCzeXbg18jE91iSo8bqsmDo",
  "key25": "5VSbCeYYbRKbbNpLZApAwRDXewdDX5hjAjqCievEL5Jwg89sZxrz1cc9q7D5u9JLcFGcsYydZSn4SMFZoYZ23WqG",
  "key26": "3xVH25Rr5pUB7GAKcWNcxxTJhdfn4LyapBYVsG3EZVo4LPhjuiUp5xp2WnNPPadPjaZFxEr4KqEa4DN3ASDAtqcr",
  "key27": "7FZpJZa2TLLnUCePsaUsECU55ZMpXQLQJzr8PC8rdqhE57MXHPfeHcQvcQDaJFErBZqqtoMF5EJnEKyuHrxFiJ3",
  "key28": "pbXyy98u31BVqWywCSxwDnVBPW8NZS9E9DXea4osL4Ua9h5h46RXUFyiaGZP6saUafVF2RfC9YYqkeRxSkKTfkf",
  "key29": "3Dc1BE8W7z8MMbZGA7ARBCFHB3dZQmaug29gwQxRGqedg76Ce19TdDVGuinmnVVPfCq8NgYgbbLMDB3wVUEcP7HR",
  "key30": "3jks4nj41xKpPVKjmWv533gDXJ437kWe5RehPfH1W18NKNZVd4QrMWA2XGPaQTSfg6psc8eES8fAvRmaPgiJkr1j",
  "key31": "2pS9Sh8kWBt5Jn7n6Uy1dt1gfnRJZwTdkY8LQM6feaDjnnTJsmJYp6qvDzVv5qx9wgfCuqo6WZjErt8kKZb9npav",
  "key32": "4t5JxsLDU226BLyJgyGRFRVEam6SNpS8JWwNbngNQpuQWBr79aYP2MP6Y2EQfNwwYtiUjPCZANJuVZPdhFW1hgEH",
  "key33": "2o2CTiE5bn4y83yFqtAY75PoJQf5c1FmMHJxwvZ1xN61EbgMkQbroFh3hjkXFSCGASxpmWf3Ti1kxt39tKxAeeZD",
  "key34": "37XA3PhTG651JKxrirzM3gEkdp9kp2m4YW9Fc1BB8pzrMC2N9ZdEHAakbx5WxJWpM46jycybcCaKdkSZmUJrg8RY",
  "key35": "sbBXUXWN4UNEa54b4h4kEQv3LnBNA3Z9RrB8fVKTrPWpfezacjgFfpvDA5nmYrqhjseLjevz1cDKBU4qxYzK77s",
  "key36": "4mgwJoe8RAgM43sWvDvCyccr3KvwDV5zBJCCtszwiWbuv8LAzqevb3qHjyLCGNbN9HYiqoMqoWiibULd4ZELfUoP",
  "key37": "2i2z4QWsh7PyD6c996NWnKLbHrV3dCYFSh9w8hvMrWpuzU1mMCaGCxBxdDzHeZs1cvx8JnjPb5JaRypUmEkgKdM4"
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
