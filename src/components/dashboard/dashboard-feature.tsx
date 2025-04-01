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
    "2Tuw7hTfL4JM1Tb1YjTyt1guCWozPhwtzMf3qfe4SvPPubZySaPLtyzHLafRNt7NbjgusTrFSqazRQV3xqmVc2JA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VW7qhBMUsBnY3bwKbkMc2tcUp88Zgr7Qx7CnTj97eVy1MeZ2ebCakYdiw3w1FBweFTRCdUZYEG8G6pMxuHGGrDK",
  "key1": "2JzAj2oMUtRDy32bUEEGVbjdL2fAupGyJfPYez9cqrmqKhyVnE74nSnEBHsf3umD1UasoyG8Jk38pjc8XN99RvZB",
  "key2": "SkCc4MxZUPqDJumJnTwoSSB6xcF3HVwuubbLe1ni4Rk1M4WiQxFTN2s3zb53osocL4kk7EBX8ERoq1xMdsNn5SK",
  "key3": "31hVUzoWZ9MJYx8g3tYbHDfQ2LkH72JxogZXS1KmNoAdQXBtGNZkwCiwa673hGkKtL2mR3kf62iSFbLbQ1vsEex3",
  "key4": "5Fqy4o3cjqCgXRvCxrFtbLc8HXndqLNPnHqhC9LrdfqS5Sf53BwUeXEpnvKd7NtZ9BiFSgqnHFKPeFpGHz39ELr8",
  "key5": "34E3LnKNXuCJAWnparY3mpDKLxp8aEJH2d3QbCiqPorXWLfg9czmk4hEdaWqTJdDNGSefZy79KwmiYFtZShBN92H",
  "key6": "3FivbUi3ksjvFWbExz9itg78DFZLE3xMsqkEzFvRiJgNYZNKQqK2qSc84CDgMbsWKnMgZaz3mxn63UZezGsbPQ2u",
  "key7": "3qQ6FkJUn5a7AMDVKrdEianNGV95UPEhztGRDxBtbzhFNa3jwxC2wHkey4vAd5JgwsYdWSg246M6GRJBwZn19vkR",
  "key8": "3VnwsBvddYgx6NxNjUK6Cz3RYQGNjdpBs4qxuXYpPiu5t8queJvnbyttFFZ52NCJ3UxEaw4xNNDKD48MiJcAY34T",
  "key9": "4fR2JTGNoukn9C6FCwKxZ3u1Z1eV2hKB5jvP5EHb7i74DebJThUH78J1KeL6oVQmGa9qxgb5bzVHg1u9HxLyRTqH",
  "key10": "4YoK3FEUaPihQnLrgZ8mpYPwJbYUHMQ5H4CNBKD2HiRLKaxh9aqopHCPRN3KMySAaDF9VPVXbgswzFvavT4CQyQH",
  "key11": "2xP89LPb3YZ8FimuV6tGqZJYxRQXCSSA57JGChW2H2ZtfVACfgqsVpgDxTect2xn3qAhGgcUWU9nL4xVo1s7LPL5",
  "key12": "PMQk1CUagDbbzoPXZcCcY79H4iqx5H7si9RWbaVBHKYMm2REJjePj2eBUdjQd8Xmr2NKccUz4S59fbi7Re2oYqr",
  "key13": "fwQvgE6jv9KZK1qHoJXRgGm5hc2nWP59pdUCPUtLvt73T8y1JyJCKNAMpgyMi238tPBoYHxFfS4TTGDzzERm7m8",
  "key14": "fpTKRBEscmWAY4keKQgH2hBNU4cXJuGpTfguL8AzmVwaUQtz2Vwre6ym12UhcNgsQzDLbeULgvPjFjJsAT3tr5i",
  "key15": "4v3zwjHoS6LoTNonJb7D1Z43oDeaXLemPTHz3hQfRpC9GgBzuZrH7fRTr2pi89oBUSRvdByFaN71voNJNCPZzmWH",
  "key16": "59GP3YV73fTP1FVb7r1L314F8cEEMHr9vVY39n5SPQEcESKbyw2aXXkwMsAyVHx38VuVkuEDpUALLrU8QgU7yHUU",
  "key17": "MZgynZErjw55SeFkLD5GdRVMmTFcpYs4f3Q4QoCEcaqTpMYTfcUqLC94b6RoqAq8TVrVkyCyRt1wonobRm3Up2K",
  "key18": "uByEg57CHFKVxfjf5gpBZNqMvLRedYt8Z8ZC926eMmLBsD2fho5S2BkszHgwrHSfRxuRiMPhvstURmHkG1GaC8z",
  "key19": "AzUjVaFL7SrKwfcUR3GDV88bPRs1gC7UEMSGRWEYqFe9BXwWqhtDwxLxmU3F3PoAiBUhu2MpiYw31tWmF5kyQA1",
  "key20": "3T2ZogpmeiJu8V8AivEXwCaTbw5XYo6UGtMLiF6VeJrABikTYWk8oApLkg7u7B7266YermKq9JrkCsp3cD9L5ia4",
  "key21": "KVLXfHrF5v2uJDSNsf9Ab4QQeGMUS2ZEDB5SV4nAV6Uh2PGDLisgt65ReaJBuShbZLU5V7H7wEQVpEsKDDvPfNm",
  "key22": "LMtX1yCLXtQHcDuqTtVnHZRCLGLxpmtk12RxuYsF9UvrpVro5ni5zinc46xxLDzEfbtmexkp9WnZ8HzdkpdwhyS",
  "key23": "QGMvz9ThPbbeDQTjUZbjn2UPQ9wmGp4S33n4ShusQ5WXYrsmCHLFfHK5FA2g7zWmFr7KNvAz85GsRf9QSMadB8T",
  "key24": "4cvo4bAjMcrJ1jxsVeKr8pXsnsn4M6K4wXGWMj6oUuCz6qBPTz74XXURdcr1f2pkjWUhUeNav4BYtoonbh9fwDrU",
  "key25": "4KGdg9ygTX96ue5hJM5cytEWUdGjypVcC3kEhx8wB6LcdscMuwoiCDYKoRxFKCXxgWbXd8oPKXsuaMDAPPpMYEYX",
  "key26": "3eiXvibVcVGvcaMQCxqwfvBpjYKf5w1YAeK5fy42tNvCW84VaVGFzJ6icoZgtNRWd5JorGsFyLeu1xTFz4DwXmsz",
  "key27": "2oiEK7LpaKYQDaGJ2QD693KjiVu1vGv5DYUF6KSWmyszpN6qW5M2PMq3UKtmxHvaNUHDD3PAETuAft5MTEmoVDKb",
  "key28": "3cSVVfjUxZwqeUsTMx5GGMFUfp2ELFpNrPBHuutTt6LYXSP97VpH5bnfhE6UVNqjKWJtnu93KaEsMQNSs6bKaKZw",
  "key29": "4gzgF219gSCUbgEYPEPj14SHrhDUL2stYRKsu6b19RnVZHm3CVusRUzEWQrRyLTVe5JcRUeifgC9z5PEbezcr3zH"
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
