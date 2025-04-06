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
    "3MVtYLzF2kgd536FXvXHSD7wBb1SeEPax5ZhhioRps9p9quEd2JZbBinKBTsBX1tG6skxAQjZraBUutxjdWdpY2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjYckbyBNvbYFShcvybJSvSqqEi18Y9J6uGTBK9TMt894CHscY1hnT8st8AtQ9NnL58mDBJbQ5Cr5wHLePsGVgR",
  "key1": "XKEvrrx5DNLwa2j5FVNVJ4jXC6GxCLqgm229E6mgRpyipVrWcyNiXpKq98Cr5eEgEqLjNYrgTeeaZGYdskdjZPC",
  "key2": "3xTAjTwtWysiyz9eLdqupiUX18TovQmAHbbiozADpFVnMRi95eKyjHBDPks8W3PhcZqnss5NNt6LUvkVdokZ2uSG",
  "key3": "3JCvq1FBSMyCUEch4RQVw4nr7sk3CwJp26DNJATihX38s9cQA4wFhTx9LRLTks1qREaPP3uxUcGL3Sm6Xvi5k5W5",
  "key4": "qMfPff3XhHyarCzB61kxMnYAWyxuuUkoHL3QB1xq4T5eEoVPAfvUCFEJqhVbAG43CQqEzSpAWH4CJEQqNqzoch1",
  "key5": "4eB57Bec3mRLNwowA6AjMMTApwyZkmZ43tdfVcgsZVAYrwTryDshbNP8bP6hv8oQ5zNqrua32a6RQh7dByZpTZrL",
  "key6": "5sgKY8dRiUVmNiNDmiHdo9PHRPatHn7wm7dJ1pS9vNMNVBse6MXUbBoybXx2eBCj53eZr7dqYyNBqpZ6DFi7vt24",
  "key7": "ZK6KqeBQNpqW971Dk5PTHRpxWe71Ho1RQSNStcLE1Dpco1goWXHAQY8GUHpvtNDgXgV3W6ZqaqREdoioZwcJBn2",
  "key8": "3phAave7VhFVzZvfdh9AtEnD1ZWtLHWc7aRQBVmjq7J31khcFgXJmCyUAUEDTExR4LnD4AS5FmVpMieuJQeAcr3G",
  "key9": "4v3iNURoHDPVf2Ud5kFukKxUS4NxmU3pRhaZ1os9nJWWeZ42AeeKPz6w2etGL7tYvcnBzD5AkSc7NtGTNwap8RvK",
  "key10": "3trp5a9jYGSABFSwvVJW8SjbXLGGE7bVEkS3GFQ88NxbNciAPG9Fvgo4kp7qRdooqjiAASQEP9g3xurC9GnTWKyD",
  "key11": "5CgKKiAPWaWsrupFn9rfwAEWVN5Uwn7XXVPLN7ndZJQJREzdw8uZrv43MzWBe7Cz4SnXkH3dGUUmo2ovr6kmNGcm",
  "key12": "24hL8EQhxuyWYfEfBUbgvXBEf35tdvQfqnS2xGyJaLbFP17psfxDFmwSubFoQkRiTu8NqERxiWTe9sihT5rDDoqK",
  "key13": "55TNuH2Jr61RcNjWJ32hdrN1yfExy6wDj2v29eu4etvR4ouobGZfYCtsYgPXNVzXhTk4y1dkD9k3F8fEpprGMaEt",
  "key14": "2kuExWGYMa3VUrytFAy562hGnAHvHGCoJ2VAxC4REkKVyzsSJ6q4cffjceH1FtXRXXT1nXoQYQcfiTbsNkfd97CC",
  "key15": "5Sdc2m2HjoV1mPNoZdrq1iJLoeHiPvEzruGcyVgLLktZEa9EvTU3XZBPFS4rEyaFiiqvDjYgztXkTJFA8VhgwZ3r",
  "key16": "2v1iNwwFpzzqkpFZhfxFKmkJK8g1JKnB9ccthk9rqDtRc9YMX4sz3rub5fWYw2Bu5gKLx7eebHvH7jYRFiKBStn8",
  "key17": "44U7g9NxRN4eChDEicTK5zQEqR3iU9em2Ww6CfYDZPgxDuZAgZC4BPxT8JipwBm6AQVud99ta7fmtL6AgrjLSzBf",
  "key18": "3fP3fCtyyq2B7nKV7THeAfuU4CYy7FeKB1K1vCXVfsNydeMufiBS5W1P9D2QeQNEfN7556tnNvumvckRL722WH8g",
  "key19": "b86M2hk33aJTqPHpc28Mef7iYAgZk5JjFtzTjBbTKfjUU5B1j3NcUtc3TS3HnfrqJ7wBsATna4RXnWNWpNANvcw",
  "key20": "3vwF3NGYp95uhTMiQcyQ8YDmDahxZHaiDggjQsoPJC2e7oC88DvJSipysNmKFeru1vPkKgndHCEAfHoc4JQ8NKr1",
  "key21": "2E7rxQ9BzC53a7649vvFAJmdnmcbDeHMnKYPNFRN3T6H2vaN5ykZDyQACFrRgWx4HPaV3MdJgWotHCJT5Yi86qPk",
  "key22": "QyVgqqszSV8n26mzVpe36FfD72vkWDMnpYfJXJqmm5k2kss8SqQUNGENumFsvR4EPUoWB72KkZyvcyTYAZQ694E",
  "key23": "2vg1Ky1tjyb6wS2p1Mt2NUPDK2gFNPWkyAYftHd5vTAwwNoP6JMuXpjgAXL6KbQ8mY9sLUoKhvDyyAhvbC8os5aa",
  "key24": "4Grfa7FT4jqJevM2sYBxBAfNAfjBKwsQ4rbHVHg5LJxQWWeUiyyBVTCThMrXL2y4M8wKP9GUKaEmNACpkZzErGDe",
  "key25": "277fTdsTtHqZ3gK9HVw3ioPUUPbrBsYnwLgzHCum3743rHP97pF4c9bz7G24syZmR5kWJCrpsqP3Wnj2QqThbN6q",
  "key26": "39QNjmxnc1M9CqdoB1HJN4PZ8bsizYKSWt267CaxQJPnVW4ghCHg1iQfiAsYCBtWDjTxnjrC19DRjMZzytdoAvFR",
  "key27": "45hzRaM4XezQ7uKkAwErnHhojDHwn2eqKvtwhUFrHAUZ4TEBzRk1qLvHXNp39uR9c9pQq7VqSDzT9Mf7bABd2N2h",
  "key28": "2uXdrqh5oqdUeCi86qT23FRz8Rtfm2HUtf58qT4AXXweS8g4GYy82NunWgzAdnn9Zw39cKJzpBwKoSswAbYEF8Zo",
  "key29": "3k5fcmdATJKEidS9jmsDhBG5XaUgJKQBbzq3DWTSThVBdH2277hVwkKcmkcKfrdEPYyJng6mqTfq15BcYPkVq6wb",
  "key30": "3JmuYyJwbbkU7XvQAuC9g7uEGfKZL3QqxiWbkzC8QxqUXxawW4UcRScxYoGu5m6VmVdVJEbXh1cxMbS9DGgTrv2A",
  "key31": "fYTABW3gEtyrVVCF95b45hGm735Vf4EWLJwsHtwDuNtjhkbm5XCToqXU4WHdDeGFD3323yrJmZZJA9XxjJhgajs",
  "key32": "4CBVPujJd635Nq8UYkSkEv4H3jVaVPtAYxTajuyhgTcGBUPxcD3Xmrf1M676V2PRYSXodh3HxjWFbDfR8i2AmdVJ",
  "key33": "2gd8YutZD2C1874K2w798kgWrWPJhM2xn259yDsaymWks8PFz76DMuVJh4C4694dhJT826Mjzx9GTqKiAvsPdQVX",
  "key34": "35Sg1EUpxR1pw4bQvdsm57TitiJVurUsKYh7TPEFZbMroehcyoan4rNx2ta78K5XGCYJRckcskJmffDnopWAaues",
  "key35": "4cpa6JLi4xz8UMXLhSY5KryH4yKxxfwe1fFFGq2pYRuMU9Q8xxmw5Nh1Z5vsYUhL12ueactNhsfWBkcyMuX9bTY5",
  "key36": "hQP1E7p9BVhY1j6q14Q2ZNo8t7bE5tPRyjFrPAZjuV6zfk9MVH4No3oQuJzqc8AEdZHKbFzjvZk1K47bE7TALxz",
  "key37": "2nyHyAs9AUJbDTibCc2hAEqiC8Mu6GTuQLXowbv22PAbx4nDtokF5bTqrNsye3GZzNwiwSFFHSSwTH176NHiYW9C",
  "key38": "2qrmoD5euTEA1n61eLbrEtqMkRqz8SoP9o1DXW2jqdPMNQ4pT752dBvoynd4xCTX5T65EuVa9vURJB8cVAH561VG",
  "key39": "2X2gaYypWpUoXDkFZjwyV3SfNguSChmocyJXX9pr3LD9GhBAUmB4wj9cFFNgJrZseUDXv1tb7R8wgPNcw4Mf3q2t",
  "key40": "37pVeT4nCxQD6z4ByvE5sZ7AZo4wHwzoS3e5rGpjKhiq6nKLxoGQbaYJjRCUFMsELGwZKmE2sTGDrCy9fan3UikA",
  "key41": "2PmGCfvnJW8GY4C7aTMqcGD5eHMhQDT4Z9zJtp1p6hoAwZaZFMqhBvpnzuHZSwZ1ZkXud1sAXpuciSciTkLMCNnH",
  "key42": "5xZw8VBjkzL8bRBDP4EFzQACCpoHckLAwTQZGMcwnYRLKzGbyewoCoRjGiPa1S96nb1Pqrbp3FLNaNTtABSt4o1W",
  "key43": "4egkQDxxAp5XEuaou4P8k1BWHs7dsPe5uqgctw4c1REowKW1HYEBvCwYoydYiux2GvvfT6wLXxrYPH1JSx35KBZC",
  "key44": "w9zvqvZkz8NeYXGPFqRsEAhSZL8AH75145uygRDGEqA6PbwgCuREwQtSJqjNL3Ayx2MPmiEWaytjhquzUZtFohU",
  "key45": "CcVhzzxrFy8sNTrX8eoxe6VEdGf5YrPjAtppzWqYoawRd2nGmKVpTiCcZ87wpV7Y1sSFe1ZhyUBFxB32PD7Ba3S",
  "key46": "3SGfNbbquKakzDFcfwb5mVqouzUgZ6mXiggrDN82ZLbQs6PGuj6vGnSzN2XYTjoVX8Bo4dSnD6hHLPCk13Ma7j5C",
  "key47": "5FwLMQdAgduD49ABj9i22m1KTS2W9qfEzWA5ETkHeQMCx7K1ETEQmtSmuWAWy2TXjJXeMnGJCbRu1GKgp1GUs1LR",
  "key48": "4utNc5hmSAcbDucFbTBoH1XjBCGd3AyqdQc2EuKGYxxGnd5hudn6KmoqS8W8NsodQcb1tsTeKj68AFX1aAAVtwfn"
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
