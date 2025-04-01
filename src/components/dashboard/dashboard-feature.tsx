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
    "HSacYobvnJzD5Eyzw9iFSRrkVdxnhSgXGqonumEcJXiXpYbeKeX6nBDtB9SHzdY5SnjUBWcjWKWmttwaikTz32W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZupiLKFHBrimdpESH33HXUv7u1GsWW76oqW3efVSQAXX1PsfkYHGoRVMMGrJicNPSdhM8Xa5C66tFD5oSEEVTWL",
  "key1": "2SyS98p4gnTxZmEjzqHhVB3KbePsTnZoxHWTLGrHzi3VSBiW6rxo1tVcVQsH1iAvUnrKe9xcwDCt6iXVHadWh2kv",
  "key2": "4LNYSZotd4NJYZnGt9wuZnmK3uz51ZAjT6w8ytsiitLe2wCaegVKRumnrMhH1G5jpwC1YyMgsin2bc5i34SY2Hau",
  "key3": "61Zydhk6GE3Sewn859Dra98VrvYgrdnviZc4vqnbytkUMYccSwMHpnBfkK5Eu4nKxuaQoWFaj9piGvcnnLdeKrpr",
  "key4": "XgPWCvigZDYZZASj2NHjhYsQNXjMPWX6JyMToBGrRPTqonptF7fcR3mMWqRDQs1wqUDDAFm8bXgzHmDqjKSLRpg",
  "key5": "4ckmpaMPs4sB4TgsnhqUubjmpfsZEZ83KPMhJYuaUCEUAS1iaV29eARjJH6eUZq6i2KJW3rgWAMWyvcS8CrhE24C",
  "key6": "5J8otCAjX5GcciRobS3DWEPTvwur8L83tpdf6KBZGtAxvMdjDW9BNAMmFH9nS2GnK64rr3G3hto1QYUPixBTA3fm",
  "key7": "2yYt4PZ73yhPaqLeLV39oxJLN9E86zYqkpg3Ap7UAJ4owgic16TtuNV8Ho9jd3JBDFaLWLfJwutm7QEsuqPosMmE",
  "key8": "4LunTej5Sm5L4sA5YNoZAHeyYb84w9aupPrZpiqmH1iy1WDzbTeSFXEL7moAaek4C4iq727FhcYawVRAfXgYtwnz",
  "key9": "2ZwFFD9yT1uP1QgfTRvbvN3XTJFMNnx6kMp68JZ4xUZhCdgPPKcfW3GEVGTzu2reVNeRTzZjDEyxbhJFqRhq9xxM",
  "key10": "4mB2tMjgi9FXzzg75knxEt5SBuffi1tLarSq48JxMUVwGWBquvZ4APdkk2yjBUQdLvsbCjiQYj7mjz8jvCwdjQir",
  "key11": "66g6EuwFAEpjNEaLvKxHyfkcMfgZPCLjfLsn4aepXuiZ9m9umYna1EQXkVxM2P5Fdw48f8iC8PrJSQi3CCnDWbUD",
  "key12": "3PXtLK6hUgEwnR1HZpLkUfDax7yYRkgbQHuJXG7fgJFdJ71yXQsg6jgh1mB3UTaAUMANm1hfi2VhJEHok1XNKwBh",
  "key13": "5HwYA22MEM7esKeEAiBxYxMZnv5SgvLdcp9b3cfxSEwMygEQgNxmKqnxmpDmhgn6K5dssG8jhaVizHpjdhsHNv7q",
  "key14": "fGjtaBV8v8qKMzCM2pHQVqZrirve1PWPixSV1uDM6fD1X64CrMBHUqbg7ujQqSUUe6NdJMZ661wTkY4XbWYVb9M",
  "key15": "4zfYoYmR82KXgZ6XzZatKhZcRuU4UdfTCcKTYKcV8LDB8tFu5x9VpADKFvZFVm3CyPm2EXonkEPydKgkLSCLEnED",
  "key16": "5QEKty5Bp4uiGb6aSPs8deNMTmfEjDhr5NPeFXAr2fa4ZThbcFKoeQec5KBb2WAg9kyQisfMcY4wjEun6jR3vWod",
  "key17": "4bzzT6EdWZ55XiMrBMkMhrED4hYx12za8iB3YYQdFFwThjEzzXvhj7cpTPaTriecXECcKHjJcxi4bjfhH5zEhewT",
  "key18": "41EgBVdHunE4YzDEZ4RM3oTn2jVrbpedFhNkFBYWcZnqmjyGJuTGfCMZ98Ws4dNKdXB6X9HFptCcKwocyNdZB85H",
  "key19": "5jCEaLxHiJSAsp2MLXBrsEMooeYWRNLYfMAY5NvC8UmUD1YXGbCZ14Hvw3nK2kn5px7ECx6rbk4rR1QFtA9QgcGr",
  "key20": "3crpgKoEcdCgvdXj7esepGbJfv9r58sa8wkf4uRNckEwCk4W6K5VTfMbrBtT3hX8Hgt2CNstuVSnM9WAgPTgmGrZ",
  "key21": "HJfgec4RQRrNXpj9DP4AyhABvt9qhXkZcRq8m9dcV3CPT4azkvFrpbnvr9K2Wa82BUwKgxyL7h4QdQ6YdjKQYNh",
  "key22": "5dgrMdnsXtyC4Upe7kCTk3Syk6WRzUJkaafkafFCM8WCf9mWkYE7h3emHeAG219y1DEPNCHUZcQf46rHXao2WE3r",
  "key23": "48fxLSYwn9ZBjLZjjach7fmDgQt4eizubb3FVM845vLPNg8qDEYCfpBfsTwcKKum4nHreurdh9QqP3kSJ7Nm3W8R",
  "key24": "qevpfyzykrA933UWKDc2GxZc8f7P7wxCeHqwcbga8F3uRSE9pES1rFBhV9K9gqPJSVRqJoadjr5tMr47wzLZBCf",
  "key25": "3Qspg9TyBtJzJH5FLY3yPzAbQRXxWkpSHqmPXQvETEjWDdnD3FE1Tx4NUYjwwxhyfQFM64TiLWtwM7owhghv7QJo",
  "key26": "3ZrdBbAaUjYAP3TUHAq5hauEALMt9oTFKRs7DXw3VUdDqqMtJQjdrPKgNJ3ytSH3TPXcTN5X6wRHd49Em6W1XME",
  "key27": "5kcTPSBfNJg1tCLj1CjPPJ3ArLRtBi7tRpK9vfCbF7qZYMSK1wdKMWvXgoRnL2ceZxDbV6GXqr2nkx9dP1MLoMxh",
  "key28": "yDtU8sCkA6DDPMmvH76gWZyUdtRUzqFu6zyfPvbPo7bqb7ri6eAZhctNYrHmUUpQVurGsrXHuo1asDKiU9msmsp",
  "key29": "4NhbzGYMnPJpw6RS4YfiqKCGrdzSMLwyG15WRBaZzbGZznikv4RMS6vaBf5Um61E3JAm7ckBtzjhZmxtk5d1W4Jr",
  "key30": "2fHDRyFYnvtsbY37GysSr4JcGM6bmz4B2Um21hKC1hbop5zLNFqYYEjpiK28r1w71fhYDGKG2vZbpNgx7bhXNTeP",
  "key31": "MY6Sg7mrAsvRc18LetnZis5sBnaEzijuzQRtHLpGGeobfV8nE1NZUAcJNPmV74t6Lfhznt8AqDsahsvdCtnKwLD",
  "key32": "QyW8en5MznHjyLe8wot7ev9Z7YGGdMdgnC9zfTWMVnizTWWJQzwUMk5a6FoAxwqbHffYi7h3EmSvkdwReyFQEkj",
  "key33": "27MYrzpwAb8tFgHPDSt6KS4WrhgeoPzcnBBvLDraWYWByeSLuyv8L8K8riEm1PnuvVQhrateH4ZtEaCGLAsSUTDV",
  "key34": "567cTTjtpv4zvfsW4pQNhzvz8W7Yu46gxMzXnNLWZ3LTXFEeVAz7UxKNTPQHzNnGKzSGLAaUDNewPf7SoSRgNTeJ",
  "key35": "5hzck7Re5raauRWwUcXD4wMAuAPHnnqgvPVAMTinMifgBkCPKzHQ1KgBufjJUaeW2udvER43EwceWyTE43M2t75Z",
  "key36": "QqF5rDNw3iikdKTCepBhibSoURVfwX58pnotkc2f75M3ZL8FWCnhXwf7WWP3RuXWeJMNmJKyDSuSX9cB1vGfhU3",
  "key37": "4ZuZRV3FMhAgjMJpjtECsDsSXnWmSgn7vTMUCCVeCCLACFMAYhuedTHszNmvXEVkxoJC3hX81byk3QFAGvkAVfQg"
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
