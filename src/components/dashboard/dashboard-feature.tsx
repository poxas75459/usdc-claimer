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
    "5Cvec6dJtE1Gj19cbPhJvBvALzrkVs4vr76Sdvdoiix3kSfkqgdrLm7KFFZzotcoVomudDxkPdfeLQWiRSJ1qD2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SxoTcpZeJjR14Aofesojg7zomBEcj5THdiJYaB8krEJVu8YzKzLAmoiZ28dHQJVYVRsGP45XRMwxJRs2H72mApt",
  "key1": "2zKqfvdZKsJnMPamxrmUGaMQDbGoUwM5aR4yGznnDXiNDihwdkEGYTsVQSWJBaudArxoeM5K3jwueJfpddCpSxsx",
  "key2": "3yDyg6UAkM8vfYWKuyXpNV5rh5qenRHL8Fe6hdrNmgVfUv2i8JQJgF1xDHFSDHoZyMdWxyE21Sv4mfmz3sbgRzSC",
  "key3": "RSuoSMTSXbQWYcWttGkuCqRAYmxoXMwvLe7BeNQgKhQuDEgq3nzjtDfZbdUx29hR8zwxHSKAsW76XJrV8kX5Kf7",
  "key4": "5xH9WYGknuRUrLLtpVsRyp4zR9GboMmJiLWQZUVujm39tyBNxKyRNSTuvwNW6abXD93wFBR1At6sYptfPu1ojZAU",
  "key5": "64jmUJEBjDzrxHFiXXXE37AAipFpKdoGhLhf9cnCP1MxUeu1qpoD5HL4KnnHbyW64z5rVSxUwqzv7ksEcsTYb133",
  "key6": "3UUakk7NU1ruHpdLHABGZHQKm2pcXndTaBZzoFTXA579yf2XfXJBfexkwjLcRWm7Dq3SAVjao4PRB8qVh8YdBV3S",
  "key7": "HniHdruqqMybZERNBvBdMjAZXCTPskJXCquFQz2DyySDJ126kAnXUjKryY2VN27eNiAEEtKWTcNCq4NWiAzyZqF",
  "key8": "4SNFVXRcgkvhweWa8uDaWCN6QedwUVAupMg72QaCfE5Nx6hkEN9YrXghTULhkYmfwmPBLG5j84hHH3J3Wty2FWf3",
  "key9": "33jgi3Xfw6YyYDs5bgWq6x8L4kbMC8YHx49tK4LBm8yq8NptT1MPx3zkxKiJgFfeetHcDHPSM7ojLLMZrykBvzbU",
  "key10": "4HpBEM3gmDCjsz9iBd9yRTDzjd89Lc9dKHUYpfyu6HspzVmfUkSzih2B89v7DUMdwk8DJfeQkCvksb2doKsUTz2o",
  "key11": "46Fs3WGhfTFUPBbwR9F25SyqAZxQ8iESW5pq4x3pp33VixuEMpUvcYKXc71W781RdnF7JEYr2vqrSHXM8HF44beQ",
  "key12": "3rQeV9WUcYeCHYuZcg5J5byMSGUzSzYzdNjxyNjkHWUz9SVMceCTFoEwT6WfvhCb9mj5jVTnKH7QQf2XMQYAX3Qv",
  "key13": "5Cf1bPWtJijvLV6zzsu3ypPb9AXGroFUoPxsQZDZHxSpU86ur9bwM4mKQXcqsdgzSygWFtCqMHoRhCEMv2FcfWSc",
  "key14": "2ZSTbi5zfyH2PFhK2q4FGDjtrtMTQ2a3uWG2hz5kWb7BFX2u2SD2JzWGg1RrxeCUYUv9USShZCELRgsNugsPrNKG",
  "key15": "2dxgDvogZju5W1WQK3iwENGFqGnJF3cYF1cPRwDKRw38MBmqKB5wCiEk1XxoWh1qNV8nZfTp7fiuneJbCyNqGiJA",
  "key16": "4QgjVVPk3RfKVX3zHQVtrdQgKUbGk8vUxeY5H7UoUj9qgtpvznFXTDJ4TunzfSUkSUGwRh3DZ2cMTQqnMSiKDwMt",
  "key17": "Y8Kw3PPLiZaym91UXDR1AV2f5vPQjXXfS9hGGpVkb5BnBfjjr5ghvoGhPQWQYjANKNZZWLa7H2McY8oL22qkat3",
  "key18": "nnPzwxHHkeSkW3aZAhxaFk5hXLsDdeDvUhVqy2miTEJptXgyUnhq2RhoccaHX7K6YtduqU2sB2ESZhjHvKVo3Gy",
  "key19": "2jmEa2X2E4xs9MpAHqGBCQAX38dKHbD2onrRS4uPUJ1RCdCeghXhHRmKStmBeQyVXdj57E38vFjLrTwd18RHFBVE",
  "key20": "4rLFbonEiwV92pBjVchrARg8FTNTx25Q2KL8AuF5jMrYweeizM39WMt93btqKURVYzx2nqXaJjbrEfjsaFvmrRxB",
  "key21": "5N4fiXJWdUB1qnkPfVLoEuoRdM1ASQk3VzswmdzqSZ91bwMxUcctxYTvbGedcYH2PfYRsrThY8EdcSMzZ5MSAxq",
  "key22": "S2ZvHNMxRcAWqgr1dnhK5iqw1btq7X8brVepYzepQovQoqB1R83FDzNNBAuUtDvxWk4Rin66NqJV2DwoqWYf9Z5",
  "key23": "24v9SQ8jLPWys4JSGj7C5e97QhrSp7Ng2QdY7pHDsysQhR7FDttxYsNibN3UVxiFwXSWjbvBWdxrFWvPapCnJjSf",
  "key24": "2CBVU8RbwfC5okCoM9qwsTT7iVKogYHpLGnKwi9Bj677qfCWSwagcvnXkXXKQfpkwm5yyoRo7Ht177U3munA2FAC",
  "key25": "3rcysyovZ3JNeAV2CJbyxwDGmq39gHVkNUhY72ourzkcrH25PQjo38jGuwmtrAGJWV5EzDD27szKLpM7uoWrsbkD",
  "key26": "MA1zP79VMuoJHffPoYkwia9yzVM5QyhT4yfhNUqxSouy6zxMTQQZWxcZ2XwMDADnUV19W49sRwc6JfxWLySWnRD",
  "key27": "rGfiYAcxVXVy1tfYcagJ7zy2tPDchme1mieGt4BkYXjJShnhfPAbLmJFquG9BVLEzK5LmgTVdqw9BdzCGDKSxDo",
  "key28": "4BCk1rbSbDUwoCGMgcWwmfF1DT1pPyePnu2j4Ad52RxnV45RDor53UKEkqNt3tHhDhG7ELY1TdDC1cF5TsiN8oAA",
  "key29": "nA1y8xLrjFaFwNvitZvCtXgouz3BtwfdwDcicV2QLFiaf1qa3pXFog998wiCWsqTNBqxYq3JLZrdF1EysYeiFzL",
  "key30": "2pzu29ttMhedr8mAGQ5o6CZbSaHE5dSoJ3YtFrJDQQ1z1E1MeV3B33AbiziU7iEwKweV66sSnGQysFgQYXeLDhQU"
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
