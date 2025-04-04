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
    "3z8xWkSNkaq3HN8h8YYcJGszydmd1aAs6tfMHkuL9XZipVbKyGZHfmVSca3LHmB9QSudS7W9SHC5ij1AXvdsqAWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5888xtGyNCmG6YegFaZXHLD4oDGtyc9FdCtpkrYLikx4ouPm7qGsM7752F8yntDRTeWPC5phjWuxq8FPi3Euj2su",
  "key1": "4TvmdKA4SyhBJAjCGQuKQmnD4eTFHCSPukJnb3roJ61aKrTvr3kEhdnAAWAgMmzq2yARVGy3FUQYb2HkpqsKxspc",
  "key2": "4tFWTCX492zZ1ncSpdPMjzWBkuse2E9eZ9CbqFx5948rPgRKXdsTXdXDWqxyhhgWmBYdCdXjiGeE2CXacmzvPfPs",
  "key3": "vpcTLRmd2fKtzsHakuTJPvFyu6B1vB34SsnawRafJCWqgJFUbjrZNxRs14nVSXHR6YTwtXsiEVAq9MgAT51xkrU",
  "key4": "2vao2iTEheUgMXgn45XKvs5J1h3WYjCPttaqFvj3nNJZskgusZGadytDEJUxjSd4fNUanEhHwgK4jsXFfNVFALmp",
  "key5": "4qDVmgBVGQ99eqp7EkXypNUXLveMaCBzpwgS9AMqM9SsHAvamrr41q9vMiuovSRNRmLTNRHtGS2N4XGy7bSP7VTY",
  "key6": "2FgU7bHi5CZUVrbgLC8ddqR5EmhkRAdohbDnQSJDPqoqSsXNJt59QUwAkVZxHh6df8NKNvdTYKKQcF5B3FtxRqic",
  "key7": "4wpMnzp7uWLc2gHanbJeUqDqkjxuSTit5DRsuXoFJw7ZyRHqn6YNpE5fLupCHHwjnR8EgVJ8e1LdsPzvSuv3zoUh",
  "key8": "51g76DUoBWraxS23EwjGtdRYF9tfyGEMNzkD4TemuT6nj86LkjnryLFdt3fVqydrHJP8itEtfFnqrdLEd6RuDZ1",
  "key9": "4G2WhchQj5geM8CqdhAyf1t4c37J4qGANSD4QrhCGceGi9vcCELKZByjAPFQLqVCHEUUkwNRiYpP2UmJyyHjPHdj",
  "key10": "2sEbhfVPKcxK6ectKMgL3Kd6hM45AdUhF7y4irErRs4cPzuGkiUJ8z1pVBpC6kPDXHsMuhxSKNhdehnqZ6ghSkQ1",
  "key11": "3yoLRaMSZneP3iJM1AqxmeMqq35fKCZ7MTfgyGFEQUy3R7W8wCB3ebS5RdyYLH4M8RBCduoZBdsh4XgQ3DcU9iPh",
  "key12": "E5S3xeKfekiyNKLJjjcCPMvndT3wrxFhSsi5syLYsM4DukzegyXGYE1ZSGwzgZN6gxCcXsgKk7SrNJeSgiAWmrV",
  "key13": "u4LbzUhDkREtefhuku1X4DbFCJhm1zpQH9nbo97YaPasTjrW4NvE26PQg9r16BTVPmpwrAThJajZXCTkAi4CyNz",
  "key14": "4gRQYVY1GVfs8upZGCJEFpfKvWzFwYc5nS8t6BCyetzfhJR3EbhcktyHScLfjLc84dbwZ1ecbjmWUUT3zTfqqVCb",
  "key15": "WEbAx2QqFsWcu8eLC5afTMM4AG2R63fsPt61byHekTg4N7K55iWJdqSUd4fUZ7xKeHiLTxxTt9tsgzdqR8u6HDY",
  "key16": "Md4BKQayDfAWQrmHKFyjTBiPp4HBjSLhbGBLQ6uLEwDUh4tirghedLvfNirvwrodghMBU3aHW7iXcyNhR6VMEKR",
  "key17": "1zQe7a252LbFHZxgkuvJBVz5xFdLqbKLP8iHUAo6jV3tpmNLMVpK2sKvBAjQ929vdLwPexXCb6CRKrNXpMjaqj1",
  "key18": "5rU4S7counrrZ6HaENyc84pMWAgmLayyHhrirNBmzLp1YHHZDCNykRvn422Tv44hC7GXcMLM18Wr2gpZ4WPw4uVX",
  "key19": "aSwLfXodp2Wy7rPKqMjbax1qosuh5RddhujgFTYpoFX3hJDrsNQNrjV6J7TCwe9mtDhVZ1ypziRXPfPAkGjKDJM",
  "key20": "trtSpFyt4iMegg5Q4Jg7JJAxyfDDDKoFPyKuJngcy5QpqvuocpANPrsqyrKNyTHCUrDCjznUKygRyjcpZ217YKh",
  "key21": "31xjkG66cTnjGyRkSQW9eRLm8resQA7zt8xeexnhJuSb5XD9cA3oRjs7dspsNqc4DUHn7rpHD8FCggJWkEWAuT7y",
  "key22": "NYvZHgxoW2YLhbkWhSBC21yFt5MURwkh9RGK6ejYGE1GJajecoQf3PcTQMwkLeXCBxiyaqjUgD8s8CAh1H4G5AX",
  "key23": "65WFYBpQTxTYe7NrEkthETd6egizsJcTbL9sm86PBb5MFxtaLxS8PhntNJ3LDKNL6iR2wZ1D3C7ySrmmPE2B6zFk",
  "key24": "2TGaPGV2pGQMi6JZDH4vVAhrHG8NTsyzmwe72ziY527v4kjrhosLmX9USpUJ4YSpeawNZ2NsTk9TzL6pyyC6E6mq",
  "key25": "2v6s64eDn4c9SRYzBy8H1aFX2mPAaxsdjZVB96troWraKDoLX8ex7a2k8CSysjvLSYLs3JWXcwhXxLgN88fiVtNW",
  "key26": "5qXcTCXT4NchGsJGZiXcEdeb3FsgWJiyy4fD6yv39d5CfeS9x2Kd4YSWfC1LmxRibZmUypGmX18HnASFjJpm6BoL",
  "key27": "2upypqGq7ES11TTbyaY72LjKam7NVaBhpxZGKdjPLD1oHVVNBmvJDLT4vxvx9LNKtc5Jso76BSDrBKGk1XhWq6WE",
  "key28": "3DpGh6Lgp9yxR1pU612xCg371ecxmzRdqYiEBNKZ6njCc9JAic3zQpY5akk3oUxt7Cv8ZmCMp3AjuGLBrM1JNjYx",
  "key29": "4zyYMkvquzetHDq7YzLom56RA744fRoLqYb53e6MsGLXzNvzH8C8SYW6E6eeWaHPRbaCy3h7xyvuVueqLXhBTWW3",
  "key30": "cw4RWbPERYokN5yuTwjTrnbCspqjfVQUnCbimWwDP9PsqzigMfcAqTUoR5ccxGraxdGVTgy5G8PVJoE9UCog5YM"
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
