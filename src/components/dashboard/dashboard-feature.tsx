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
    "xZZbTzUifo1WfTtwRryM2Z6J4K1HcAMJ5vYtA4HjpeWP3XdVGJBRK1HjYhb6bvmuSSkBW2XiMpyEWSM3rwHtyLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n48RRn9iPm6NMLi85PKG7vjL8x22BfTWeCoQbdu83CrkXiGiXxinWWjhUbESv2kZDtNehAnjenJ5ieYAfiCM6BZ",
  "key1": "xEjkRDTqcGYxNjw42fLqcQir8UTcPcVzoCX4fnCdSYvUr6w8bMhXzkzLimo3N48KS1PohJ9H2TVq4GZ6cUM37vK",
  "key2": "6442CM8CRwijAwVcaPURDpThHMvc6BNNsupWYk1GD5ZJmbzKSoeAh1jqtYNubAPpYSNhsVVKEDTGCfbCGi2ushQY",
  "key3": "35GMvjSnWTUjnEaheJAbvNwcwESTVKgt8SjL8orjNHEFg46uPmbmtdADWGbN9xzAmmZGxjTL3f5B6Rgp3SBWqhDi",
  "key4": "4LhyhkgEnrq57Mw25Yjf7qEtVAq8Jz5zCWD8DLpZwEWLBmVrdVMyjvxLpLwF6n2iqvZ4aGwQgDQ48HcfK9nDmGix",
  "key5": "3DiZ3NSBWpqHbNJgSErjxAiQ456UhanKBJEgNj6gm3VkX6GKzkeYCWsQMg6o3rEKru53stknm8A7SaiXAUFY9jgr",
  "key6": "34wDhJiMFWBxcwsEpLxD4HPKiKBsBh1WbpHnXg9LjnfW5jcfrmiwfbkzSJm21nrSDjoiK9Bs43pcRwGvgANK5kRT",
  "key7": "JfVRrawGAvbB99PyfMBZLj7STpYKyJvaLGnnZen22MPoXcqN7ocVFcY1JeUGNrURwjU93yN4bPvxRc8xXkNfDfV",
  "key8": "5HqJjPZ17JqRoB14zcwXtdjPCrWQahnUQguog7pZxatQJQFZs5oP2soWBuCVpfMjHkcr7o3PAupnpe7opp5FYKQF",
  "key9": "3njnigyZNctT4xtZFKbSwQCCf7JcCb7mXUjn9fiiewkknCfrdsL4awitpyPAWuGAHqZzfMHpbH7fdsgLhfVgiYwn",
  "key10": "9pv9aHrH3uurSCjoAKw8YXbcpnYRnrEi2nJQ2Jzmiu7iRFTh3skYXobG25XZ2MUWgmKxiuvDWNy6ic3vLdYUcQr",
  "key11": "4F5JXaXZ5EbAcscBPgSHNWEwVF86yWmKBEsuG5rxb3fqnv52KuppTRu1xTLqu4Jo1X7djZfXfFAoMQdCF6g89UAw",
  "key12": "5qX6f6z3RX7sqm9S3xi2nAGNHabC5uku6jL4jmz6wboktRRqcoqGJ4UYbdYCvxtFXLfkMnknYPbVi3WDsbYKxCRD",
  "key13": "3t4ZqDKzqPErrTbNkUeHhh5shPg8bnfawZsiuPSzxBZj2dtSVeGxHjxSVSAn1C1LawTFSqNYqsuxsyTq2NkPgDWm",
  "key14": "3KvFatXEi4wPUnK8uQN8A3pV7CdU2qz2r7VWD5DXHK4R7PKhfWXhG1rs1Pqq9X3xqrmjWBfSxYw57afq6MvRTbEj",
  "key15": "3fcGbzDqES4rdBf5ghM1BK5MEuq9TMgAi93cw3fE8AGBrH7wvTvQzgsKHBFBXhDB67Mkp4guqevAwab6DmnxuMkB",
  "key16": "4gjB3ZMj1M5WkmiENEEsaBJHXxcrv1ZrbwGY2wsEQvoAMtzwPRU6CGmrT471KWc3B2jJarjaaKj2G3wDML1x5PfW",
  "key17": "5GT5sqPLhaj2eitCmjacLKWF3sW4ouy8YQ972NcAceeHRo4qsyS1qpLEPGThU9Uw1k3uKkNgLKWsFwFkjrpPndj7",
  "key18": "3K82fTceVASAppNLVo6NdnjtXeQPgA7K8vewdvzXAsuoDR33d7e2mhr2ecUhdegKm7CqC1WVAerrkvcGvCSEY653",
  "key19": "2TPC2fW5GR3dgCgkTZUoMzzNTxRNrcCU7AaEYfDnqTT46nNVGacKWkGWRkW5y5E9s8foX8ufabfHjpQ4KZmBrSq5",
  "key20": "52yvKEQkq1vT16rLtKb4iDn621R6r7wpC2JWGMzHGisqTwPfT68ywZ3BMdRoyRVrXAU5LDmF76xVn7K46mPouAAm",
  "key21": "3dAwGbksqqTQrrUAD68Y2dJz3PPUocQpR7JPhdZTLV2fWxAkgBZSWft9JBbzh1AiiiZp7NNoCzkQqJec3p1J69Ad",
  "key22": "3y3fBr84Adm2X9A1XvJs1awQZGf8yM8KyaD6ErrrbRYmSnUmNxA7TYjKo4vUtW3cw76F3paifX8uhZLuoDqXVbmt",
  "key23": "5mbPXYSMhvMgWKYpRp93kiV9nfvQmhfj5wUZNxoTxHnVMmPc78vhJkb9UpMvCRhhWSvVK35g5JA2X36k1jdnUcXn",
  "key24": "pTq98dpqQvRQkYvthbajpvqFXnVAGp42Nrtt2o9JzJUEmHkEpowCQGCyg61yHv8vDBMVqKybXVWr4c49isnsBGe",
  "key25": "27RBpHQqgrEKrY8uBdaX3YWeRB2HUHosWbQmovwcrt8ShpshenxmmFH5GmsntV5n41ezkeqv4Q9HjncSWLZTgJ1E",
  "key26": "3ZksLHNucNPMpYSvk1wNTjzqvb3iDSq4dV6AJoWVuW4vw4x8NVm6FBGTYFeUqkSjCrTjUooVmvwM5McXhHBHLJae",
  "key27": "2EiZTDNeNCsgBjneASETVBdByoiw4rRoMHqk6kux5kWWWjCe1a5BYMoboayFs8hn63bg9EdTeV6Gv2oQXu2j5Q1Q",
  "key28": "4xBaLUrdxGhipomsKBBmjLswSF5tSDJy1Cb729ahQ6JnyufMRHoPTpsZwV4sWGo2HeiT1e7FcniJHYPHQdgDV7tP",
  "key29": "5wR6y9SLFQkaaYBaQMXLds7hMupX61mq7x24cNSXZKmZiodcRKc54z5HK1vkqSyxFXMpEBF6EcJ6THvDQHQiB51s",
  "key30": "5esGuBHbRDqWdcjUo3qWvj7nDhk8oxJFBFBfyiYhBnkr9ZysGje58KyD69mKnqTv7e7NWGKHFJg4q8fUxQoYbDkJ",
  "key31": "5HBV86s4CpJ9vqrTByENvdNHsAs9cP8Es7iDF48zbMrCUzYUPSBN3PwfFnEErrvyfjxhkUmWPkfaU64YSsRy1zhk",
  "key32": "5e7qoi9v2UriZuZ1UHBUPFMsBJkFWGcYj2Tn7wudCfaCawEHeS9DDoQbr9tZHskKY61RWCTRQaFF3sbhVsnETvzW",
  "key33": "2AQwsbBcQi1xHDS62sSu8W1Wc98iv7PMU1JzffAxnHREwZrXUHZoKAuXVkS7rhwwV5mHM7296tLkxSaD4j3DzMmr",
  "key34": "4vB2yKFW3MAqthcW8tqDRYuG2A55cz5PiNdTmceTTVpSVdUNzt348fJn336ZkAsiNMJJ77RfPuixYMEiZA2ptu2u",
  "key35": "qq3MwEkjPf4cgSBdpdFbmwtJcjWPdeLAjHwuoju7GvTeCTXxcbUXU5717UgmbF6KfsdG6YVZzjSewNjVb2DWve7",
  "key36": "37NXjwDetBtBdboSXoV6YBdsAJBwj7TfDrUPTnpK4eaDvAHk9z6FyBU4VtvNytZweUxdi8oHRoQhDt8CrA4APvX7",
  "key37": "46NbcDQj6sygfpwoczmxyCGbhiusyXmofp2PBEvMBGT9GUtZJU6JmcWAuCd5189HJeLu6bFu896ikUVrcMQHHDrF",
  "key38": "2ML7uK9ueTmAfXCP8BHQ4QRiFMPz4ygbYAaoo13vtoLwy2Hm7gWttfe47PXKci86WSatyJX8apatFCWZ8WiUq4jm",
  "key39": "3V334SQauCgu72YwCAJXWiaiZkwTWNzC4LKqBKXretRPwfvw5xq97KUNjmRGw5VfaFeYV6Urm4kra6rNTy6YEfia",
  "key40": "48smw9TkDLty7SjN5BmUca9KxCUyHbkaJFMh84gnsSrr69WnrapNHmLtXGj3vURYSbeHhnGBRUZPR1Jsj2CZqyVv",
  "key41": "4CjPwskvuy8H4c3JH5PoJ4Akim7Dp2Vnn7Hx558tn4bSteeAntSMjSnc2MVkvw79bCKtufKxrgyZaMMTk6wSMchF",
  "key42": "4GKh9JWc5hQZB7umUaH7eYrGrHzwec2Gw3MFBu17mdPQfQu4bxKp93MrWBWAKCGMEiDF4ZzbgN54Dyzafnpks8bQ",
  "key43": "UQ2vRbCpjWd1L8ex4XYHb912oiAW3dcybFAELoEhjzxGURC2ztK95MWTbsUJh677xqc95hZbTr38ZGWt51k7UKv",
  "key44": "35eCv9hPY5xcDwcDNgiGCFbyorXhKsYtSTms51PnbfgKkemSmoHxkaoEw7hi13SZxKMYNrWHQdddVLEhYZ64X6SR"
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
