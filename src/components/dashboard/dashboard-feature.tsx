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
    "5WemVF6SYeb7xiDRBS7Txs49nekm5272xEe3yG8rxx2uUPUFx3cEza37BmfUPEk4wdJbjXCvv3bzj5RLZtUq4TpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r37ZL6yVm8c8jKCko4QRTUBLssu5QV8jaGmLt1DcjmpXCAw11TLHy4JG6BDBNJrWhp3r3h7g6pUkAtfMKqoVr5Z",
  "key1": "5KT8ECPykXF56ex2Qr3ptjfdJJ1nxc3juPjRwtB6P5WZCt8Q1VYVjDPpPosk85ZGRN9XneHsxRQXrHusNE6Qwdb8",
  "key2": "7cTSJbsjPPBUmsSLv9BniY9XZsqwUTheso5MzqvaFs5dxwaVAfmpDxh4Ud684MsCeLxwxkmAbW7RE9VHaug8s5Z",
  "key3": "2jn1fGpDjyjYBuQpuBU9hpHPhDt5VajHGAT4NknqUeQYZqPfr5SJwVrrQuGYCAc1LdHgkTFDkgorqq26ckb43oN9",
  "key4": "5bVSQECuNVnQq3wX5gPVz7risQq31BiYu9rwvESPLPTRcmVZzCeEzFnbUyjjAQ9qnyh5msKWmZcfs6iA7DZ5Euhq",
  "key5": "3jJPpjGG2n5svz6ZDDL8QdTyzk7svDbUTKu62tTQKg2bSaC7k87w8XicbwEeR4kEec8uPtVYgSwkWDRmuG8EqDx1",
  "key6": "2P1sV2hmcPc4Krszfx7rCLhp7mDeMzRn3kTLNjSJZdynRkSzTEztp1YKgVsLD1okKGcaiZj2ArcpDa5VuAmqx6CY",
  "key7": "2jGFyNGaundKDFj97LCpXMB4nSt17ZSU4E3tzWhDUZQPcbBaLhH2v7mRHkbCDC8ENL7iP8nWW4iSbi5hpowb5GMS",
  "key8": "5wytDSpcFmZbNrf6zFXxnc76sQZVwdTiXnev8CtF2Xd6azYUtc2ZU7dCnyoPsVWaDziY42yokSascey94zF4zeMq",
  "key9": "vpD9WVRqsiK4GwNHsx3V8HPTNtchswWTi3FTMErnffdtQBXzGyYzPAmqtJ87mt79C9k1z4VFJqfq8kYBQRx79Qr",
  "key10": "3RLhayntsLMRF41qyVyCDoyset2FPEw5UJEMLsapnE6YVTwJrSQrdFqnjstwYEi4VBjWJdfgBoXJyYiAr71UaVYw",
  "key11": "5WnghQiK9gYbPYJbg1SmvuhfYBLcLrbDEFVHwS9GXuQ6DczihnPr4xVqLevoP4CjVKF6DUH8TTEKVYJrg816SSvm",
  "key12": "N9cVpswfaSUZcnibHFpoBEC1E1v9wmR84tswVDTWY7fi2eRNiAqzYSmhFbVXRJwWncNV4QoKf8fU8RX8LhiMVmb",
  "key13": "4LiuSpt5NeLixq3o1XUq9sFUUMUB4KKt81GL8zX1eyVi4ZWv2htdFhPYmWzg1hDZckRDw8Yh94Hnf45ciBgDsud8",
  "key14": "66rDyAjbKqoBXWJPTXiWicYR6VPVAnP4nsbNCoYFXYoXAArQKj6eBiqPG5843o2jSZ16kdGbvFLBMsE52hXGCRkt",
  "key15": "3xxX1X3RKtsUjnbJnHdirkvWJ87vSw5S8viZMkZ1L7hrcZcYJKfE6sn5NNRG1X8iwgGLBiPcegfsFVQogdE9DU9X",
  "key16": "4FhHNB8Lrr2vvY2AybajyLqHceE99NrCqZfjcdQ5uaGzdz9e9tSK8Gs68hzPFLi7deaUY89ngSCFvvJEfBDgoQx5",
  "key17": "5LorAiXrKCZafLxxmAbadCFRpDH7P8dfYx9A7i7utWcUCaAh9jbjrfp4t1T8pvNjUnNdGL9vzRrgoipuPp8fjQwV",
  "key18": "3Ve26Y4DBeNEUrbvRPifNjTomSN9e3JC4MdTvaQwrixeox6yHXgx4dVSUkYXKU1YzdVvfwLWJpUh4xwZdX4SLqkg",
  "key19": "596TWcT62SnZkrQoJh1focMM5mmFjXCZse9FKVCcTzF39wKXDCQ4rjS8Xxg87bEwff2nehyJoY7qGWQDAf7H4SnP",
  "key20": "2m8cuoNWjnHk9FvmLe1vPp2RLKVDYhoqbYSre12BJezCxATR4QtiZNWWMDGrH3JzPZhiP7QdFVL3BtEUmEVKRJHW",
  "key21": "2fhdbP6pc6PASC4M7T6HHGStXFDgGn9vtBUp2D8q7KNQm9WZy8tp7CeVccCj7gcEyHPd3oruBBJFgCwGZn7m6qRv",
  "key22": "63KrUGUFF1k9CUiREoSLpX2VEsVearpSJJFpWG8XGuCPmMz5Yi457Yx8pSQwPMewSbBJumHgBkJxN35QmBZsNTNH",
  "key23": "4GYPC1z9jvSKpQw5icnvKYrYw1hKgRnKut7REjxH6vwAyPCm9iM1fFJD6JmADhu6Pt9ikYbYmXeRdR3h2JjfqdSk",
  "key24": "64jMtDHdCyCr3ynjwp457SMcoP6pciiDrf7ytqQqYccmMR27Ks9Up8EQ8dYub6qZdazL7jqWoTLKQmcatsWgfmzV",
  "key25": "yJTboQdggLAkK8bE67sMc2PLbK9j4VPyqzynepfsRymKkaGdc4NCbfAM5d4gDnDD2SSJmWXm4K4XBEjKfCQsf2y",
  "key26": "QGdK1z6nazvSuLidphbta9Nu6PC17Gc2RjwH92Hu9VZ2xzUEUgTYR9V8sVaK1qq2UqWdhNwfPo8SSAz6uZLaP6a",
  "key27": "2uW2fWZJ3uZ64mYgCTzMWuT1cVaEAEbi5ikJtRjRDZGkk6hANrP9J8pTSGZjMqBJuU8dGCdZGNpsmxWZZnQRbpKg",
  "key28": "3mjv2o9NV7fKxRSCHMsNcfpDCJKe6fi1UhxohueCEYk5UnbbR5gXMxnF2yauzYNHp9MyvrCNZFuTjVs2B1T74b4F",
  "key29": "3LXD4ucqFp2QJ2TgxYrAH2yBL29aYrnzADdLQawhonN21pPerhsoamzMngyPrcdVDV2UqMgLhUmToEKFKMQwPDLj",
  "key30": "3XMFsajxZ9c58o11yA4oD6RN3xZkTc82RxSP81CDoTqHY91uBMkbbSEqz1HdooVzt5fU1Lvbefg4Y7XNEdo7m2Yp"
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
