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
    "5ND2bzeFGmLeCLha6HrpmiH6qVSd7JhfqSLtdUjvzTrrUYCFtNysC7c8BoVDJbrQ4ZoF74PQE1MdB9iJFoNzdwEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJZ4ZapzBM5LV8wmADMttDBrPggjUt1ZAYNbavoE2DXQKFeHCxbY112GjMrTe7QhNmTV7kCXwQ9Kojysniie9Fb",
  "key1": "3wXbdDWoFxLBrq2LWvtohdZHsbJEBwCVVyDfhz2Rqt7SsHta644UeqvbDM5TMPRxc5WwawFjwY4HGA1r3En4RaQt",
  "key2": "444bDzDavmJdXTFW63FY2RyWniNvW41RqU2btSdiXwz7p6rUunzvAc543RxWg6HCR3fZPGJTUnrkCpK15SexsuXg",
  "key3": "4j5VsgFcYgxCk22ghN1YBRkMxfN7jxyPDw9LwH5GQRrw9NCw7fDhLXu8cSZfYKLKM3aJx911RRknYCbKQrTRTrVi",
  "key4": "3Hx4u1bfsDA8Bto8H5ASvTQXpLFvwYuCkmScyxs6X2dgiRPSKcA9MENtqNhRJZsmUfWeG6Pm2kHfXAMSNRt48gnz",
  "key5": "52812AvxovMhFtqJsyaZ1S7trvuGosagdiaw85kKwDWH7gME9A3NMahEJtzrbMcwyXxAffvb4zbEadgtg9jNtmez",
  "key6": "2cKF8E2vMPx2HSuJ7QcAWNuuFKLcNfpt3FCayGkYBk4okYdu184xrWzG4vgy3QrbGModRyKctJDD2r4yngtDr182",
  "key7": "3gQiSMwWMuqWfMfeNFRWK3s6tU8WxxAyuLE1PSXti83vbBqGSkBYo3m17vr6hb5B6byH4PCMd2joDYWot3WZgMaQ",
  "key8": "4LvDR6i2S77b52vA2CeWHeQDJbxW8X9hz1Zcp1ej8F51Yozxnfc4rabyeYfs9ab2D9pXDgNoEPf6WzMKQNCPyKca",
  "key9": "2ZxjWQAcPF8Mv3rnixUiUfJaTNitkwEajVUQk5ZzXgoWDm1ahE9hoAKeGbiMk9nSxA1eewJiovGzgLx7kH2sRW7m",
  "key10": "5zJvhZWkjFs9BRCSMsqDiqmSzYCHewTTYGNZ3QVurn3UeAoBYhmXF4sbpPkGYmCfNT3yaTn73UkVqmTTYHBVTvti",
  "key11": "4G66xZNCLWuffLPmjjV9LPCm6cE3RFwNYWY1koeoGg9WhMTwhxrhuaXBD8pupSjRijCroigpxtwbZchpMkR1aqD9",
  "key12": "5uDn6JPoF3DWrkJhjC5ZgN4ezsb3Kv8QuppVEExLFiLk1kJodWB1gYWiWaz3KrdQcNA1i2DPYGdg2AYYksvdfut4",
  "key13": "3wkV1BjLRfQJkXeyAxXVxvdvS1V3FKfw4Z4f3bBCFJokc7BCDHvYkKuFkFLmgTKggEJRTkk1Se44vFbu1EQGvPdU",
  "key14": "4QAAy1wra5S4Kee8Mg8APat4VPQeC2mBAdvXc63adCsciKebQs6EdJWjkTkm44Yum8pcT7FRB4LLRsBZCuAFqgcq",
  "key15": "3Ue9JHfmZtyoqbKZmeKJkJWcZtLRJW9cwRrERK4sfRsgGK6uoyZWm5zBHL9nQcW8t8zHppVjgmNCzh4fzepN6zhP",
  "key16": "3X7k9DG5ZoXFNvfyeVzq6hccAAQH5S9RjS7bhjWkzn4YG6W7TtLKvPk5SYyREbbNW24LgAvetAvAn7xGy1UQtCCc",
  "key17": "4EXfnhTyMentMihVUGFfDDnexhHWGTngZbjLrg4LRivJExEqkoTRL27T5AVSsWbypefGQBnBpp8s5G2ubQ3HEaCk",
  "key18": "373ug4r3t4RjfYUu12otLqATmAWXALamDmDVVsJWUnpKcPV2t1FtZ2GT7Tkg2pShCaXeRg6iucbfgPf37BMmZ7gz",
  "key19": "3Bwig4Z3iLzsm11xRrVzVqtD2FYEh2FJwToMhDe1FQoe4H1ErRexgANW6x6GR6bKqqbHwEUHgkiHWf8FozVp1Eup",
  "key20": "46x7uwHzxrTi2MzoaDjfHdhUzPzwmqPyyBxAW5DdvVnaLj3ohih1DQhBYBV5pPVXQu7m2sPmx64bkB5KLSaHiQ5U",
  "key21": "49EUDWtiVe9AqWgZVtBhnVDJSiTkZNQgbkzvXdD4DjVqmo4ugC3mgaaqiQzG2jPkcvgwTpXwBHLbu198pMcz4Pzy",
  "key22": "23aTTEWhT3d5MeBpvyH9UkZs55CVbqftbLpTGK9TPe2KNaPeSbptYmyJUtbsGbzkr6jz9H9BvLjWk6MqQQWv3rgF",
  "key23": "43miY9LACMWgC2CEM8dnafvtufRMqZ2VSfMt75xowhLFJZkVKnxjv1PzwtCXhTCZDfppPHDym3tt78Yvt2veSk1s",
  "key24": "3Pri8goVk1FaXxZUCrWvEZv2wTwajLUc94gD99T1ZPvNQLcr4Ti5pNNFJtCFNjs4Jn48TL7RBAxf4jM1y5RnzE1Z",
  "key25": "3tLj98kxdyhhJiJtG17VSQjrSMk2R1JDxfE9a7e5G5Y1EAJmUDyUzmJvZhTyUUoskHnYc6r6o4aZeqyMi9HSnTyF",
  "key26": "5Ft3RYiTUDd9DPPk5ZzxfjiSpw43J14XcmAWo8Dfuru595zjSyGTXC86tuN4iLbdJKmBDs5svD5LHEeWzSHkq9sF",
  "key27": "x5Qaug99fyT5AtFuzetyFN5VmyxtRWXTXScRScqxdKDCKHgCTUYpXecGpgpbtqqZzTi7MiJxnYLp866qZ9dEKUK",
  "key28": "2Ghc6xu8c9vQmXm6RdHEPEMqVMUPLE4o4ebEYW8DHbkdTafdmWeaRDoCv9JCwwZAoW9aYXmk8cSGAi1heWN5HyWX",
  "key29": "33sB1pqpb9BEwGWRX7oQjBLuA5r1uE9Ryw3g3tXuNVqQmSvWXMhvkq7mS85fNVEyRsjM78kuZFdqB2FQNVqoX1Gr",
  "key30": "3Uo8cdW9D7YEBU15e7G7eATgPHg5QGgbE7w7Q1quvgC8pgY9dGqjPAUPWdqYireQH6kqqxpBPb5M866VxpS71tKi",
  "key31": "2zdi1TdbGJ3CywbjkvsZffXJ1h4B9CmRxeKENLiCX9gF1h1n2TTfCEbMNjkBiwsbqD8oDRDBGFHFpApW9brk8C9g",
  "key32": "24iX42WFM2iZCLb1FAbxSbuGbmDnW3WkEwGdWoQ5cEJhfxaz4oQCZ2naWBEpW1Q4mxLUsTtF8F1TmkoSYikDLdkJ",
  "key33": "5rFBQLU7b7LsULFDrg7NWCDKpqgWtBgMP93nPrmk6FfGK9hLKyaku1VTHs2q8XV9efm9KVSAvG8Bd9UAAjdLAPnn",
  "key34": "4NQxAHLWKjbg9czchvVBeAXgB8mjcTEpnx3JvR1osTDm2t1zJ8NsWKjfXXBD9C2PnhE5hAKXsq9SZBBnsQvK9W1U",
  "key35": "2ya81SE6a66e1uSPGExDt5ak8KdeTqgLezT7LxhqFaNvdTF5PCHZKTdYU7MFF7eP9Uyh19c64fWQ3kavevpTYcZ2",
  "key36": "3rhoM89C6ufJwkJymKuv7NEFcq6gYiRMbJ2HpUCe5Vet9HSWxbjpkmTftiAjpauXad77aSoyn5EbMf9FFAMCb2hi",
  "key37": "4BwWLWHsq8nA3kkBRYGmTFWWbBQTPUKaFjCYJahur5BeTwcTyarhCJaQTCYmLjtmiV1KM9T3uHSeWwbqcFgxcFaP"
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
