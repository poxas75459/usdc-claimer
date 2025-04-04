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
    "3SPTEevQ53yB3WJhaBdETh2uKMC5Rbw47BUrw7cxPrRamoWVpofroC3KjzXQsEuhhYGyTxsP4CFYoenkzzj6TAAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ChubguGBAjBCAvXNspEAGyra3gRy3zXTu2RyGX1CJ9x86zcuukC9JYXrrByYtFgF7vBHWAhBYeWTToVTjb5r1k",
  "key1": "24sFh2JCywPWvgAeR5ETKpu3FLbBaibY92ETy1gWFxxokM1mKMyMQvHo8GGKPJ4CwxKT4UWdrhSFsNsDcwA5tD9o",
  "key2": "2G8AADtSSR6t487YsvzXUKMchQhkJJ5MinmswRT19ALAxP26vytwtMPYn9bTUix7pzud9YKYcqubrL9p6nsEooYM",
  "key3": "5QZ8cGQdEvTWrn9qTRCcizMK7686k5ZygpdRvJjLaASWUhtdCsGPtnWi4svihBnpZNjpjbvZmbyoUpRk7n8QC1Ed",
  "key4": "4S1CVBvkb13ruVHjQAqdu1ao5PYxSNQKksow8zCUyyEp8Uag6SKHMHmfCecSDtG9mEUY25MRxtHxaBsJXkJFciAx",
  "key5": "3GkD7XYG634TtH4QAq86WeUynGuSQNAyPcZRsushgcax9i4ZmdchGSbAZ3qj6xYvryZ1T49qaUPaaYsrAEup6fNm",
  "key6": "ccjnrq7LqFtqrGrkBtEJ5XvSHEdgEPNfVk43hwHf3w367VUP5y2qPgQCR94TFXmwndjnvMmQVSfEjogkiDPhaNs",
  "key7": "5qo6LHv2JGn7sMQ7nhyjegRQ8bjAEeA71Uh21kUzFHdseGHE4UUcuHdbjXs55c2JXbyZxbPy7Mbe3N3LEhgis2uA",
  "key8": "4jptA1XBAX8ffdSNMQ2xebpBS3jNx12ZqTB1nZ3LLALw9bBZvchim5noyjMfWza5d4RedWqXYEdK2hgU3dq8Qf2b",
  "key9": "53oy7zbdNuMXAMExaxDPtvLqdnBpmxRurQwtJeX6ZSXMs2KVjCpeaAiycirmfN4rX425tpneYB1y7z2u2y3tgoeD",
  "key10": "5gZHn2VJYogB8r2qcuYaiW3iccctFwYZAAdKzYTduwUgbGow3qHZdUbpjZwJ8eo5mgTiNF4QyrWHC8HMTi6zPtxf",
  "key11": "41b9e67HLV9GC7Lbive7mKjHrnYSp9F9KmxqUidnyeXtCKqP9oDNo5QUiu8BztwFqvtBxRPu5HEHRcnmr8B28t4z",
  "key12": "4Ukfzn5VU9MmXB5V9Gn1dBGkPNSiUQxSR9S742W7aCQCKZLWdC22RnzG8NRnPkkgEm6Ea1xRu5ZCgh3d4XGY5tGb",
  "key13": "31JD5s3bMfenk8htaCKGXCURhucNA9XRgHqNiwdJ8BbSDLaumiNKE7XgBgp7tLxUJc2oK5dTteFYzjb1mhqzRTfk",
  "key14": "675S11SQqGWHJjzQrjhSVeZiwSt3nn9CKXvLTmPY6Bekf4Yx38QkCGW556f1nQpbFqHaeZ8goezgeDNgPFQgqHYp",
  "key15": "3zqefWNR1bY4G6VmMXZ2eE5igRPpAEYaZcKEBbgx99aFmc2jFVNj3ziWCG59MUJafcTpEkDcQL7FcymAveWZLAoA",
  "key16": "64ZEMuMVkQHi3ZuMb8dop1Y5CndLT9fDB9jNwwnJd6i23fRa6ef5K9yDe6qTuoimczZd8c2mzd1Y3vFbyi6pHZe2",
  "key17": "YVcF3StvBZD2f73FEn51A8YroBC9EKkpvaxp5qn3Aya6WWfX4DeZ8fVj2bpECxZVe1z55ujyC7UMndXBDCBDdBC",
  "key18": "2CVP1dXbHiFeLidfhwpZ8jLBZNKTa56iPa6TnZRBWzDtz6JiV6qDpAJwqLmWrXuqQAGPPUY8Px9PMVJGUeGdeuVs",
  "key19": "4s1hozxovjsPwDYHz7dtx5wTTMwP6L27sLF5BgE4zF8fkCFLzrgLt5oj867KKJL9kYdfEeyewnhjzNFeqPcuertf",
  "key20": "4b6u7qXy9Zhq7b4g4kRc2FihVLCDZBRGheyLRVYcq7eFxFvLWyMom52evBcA7VpcjMAdP8BvRCyxQwka2CsoUrw4",
  "key21": "4t87CFKod4SdjcCrykCzBAvsn4zU5NvNsC4eYvxeB6B8ymxWX9LBKrNnXKFtu3YY8ChqxB8KdLMQXhUDHKCvhM6g",
  "key22": "4ZyFooDX4Fx6eeH3zJRPoR8eCuPFs2VVvMpWZAK4cuJYv1NZSGtvsCLvEuzza1ERFAewJp6CKT2eJem3ZqXTs1HJ",
  "key23": "VtBPfzBTdDdEnetpA69y2nyGv3mkp14SJW8E3awwhxbNQgao6V2zR9KTrhobHXRGm6tYszsWt3YCEa4fCCpxjig",
  "key24": "4D8apY5JcAJS43QnfPrtiR1bF7aSBYT6nyoqcCpz93GSbEDCbHLcHztN4CPPXcirden1wJpq8EWG7p6wVRJbv9eP",
  "key25": "4Ss6NXKKzDqGdxr9BxbFCfeJnHg6SZjQbeNQAtJzzZoNuGvVqbSGYC6TnEqHTgRmuagDSMEURHaZWxb9dF4GYrz7",
  "key26": "eTsA27qnBbZdViDznuS5nixaooQp8eLn57UgHptgoXtjLdrUjForvJpWVRimoy9Es5qSE4EyjHGMqSTzP6i6PZ4",
  "key27": "2nNRkmstvSWq9Y2DsVDXeTeRYbsNGtmfVBgbF5uq7Prd9cHVKFrS2oWWq2DYLf14LsWv8WooseWwn7AabvhBJieF",
  "key28": "haUcAALzpxuiG2QWJUnQoinUfQcJnsMZt5Xwh17yfbKwU8winrMC5GMW4d7XSDuVEMw6b5J95JvwrJ6wCVuL7Km",
  "key29": "5qMoxJvtsRZKixFWBwSeWe8ZvjtkFqCvgdxJ2dYLjVcPCvGbDxqMSNGtEauN8yD3PneA2v3bAGHpVgmTLrx22zw",
  "key30": "4ARjN7kQN7tFdUtb437zKcCLLky8wWrrYmnq1beMi2h8aTtQr9QKVCZ8PdbkZ6TuuhqQMf6LBjQbeHLdotkuZbfH",
  "key31": "2Vj4hPxguZgMvyiZAMkZwNLvq4NiSaGX1sbdvadUy26o6dCedTL8k7EVjz2zeZRuH5ZzuBUUggwRyNFLq6xXC7Hx",
  "key32": "2TPXFnZhzbXzqSDTxuWFuGCPuyHFi7dW8kBhvkQiGtyLj2bXaxx9ebc6pKDoKycbQ8R7bk1byysRJjc45uivngEj",
  "key33": "52SWLhn4tQnWUrDapXv1xRmHsxi1UmjQM5okVd2G8NaYAPAijf8QA77J5NUkf5MbyXFKidQJLUH8aXFvejPaKCRF",
  "key34": "2Pt4ggdRyLrzBAXU3Kr4AfzxvBoWhhnpNC3fZjEoffhFaPxitfJ6fLpgEWKHrhoJFfLN9NfzJaKeUBxDPnYeQ8dn",
  "key35": "2tJgpMuiKLANh4hrUKbmAR2CfE2L7CtvAMLqe8N1hweXRQZ6GoXnooEAVMPwKC5Qj85dWPh348jNoHd2hzAAgAPz",
  "key36": "gdphan3LepZiRrXXtzt1G2XknNxgv63Y4ti63ZCEDm82FzpZE254aSNKVw4bnDWUJdguaQjFz9KnQwcK89NXGzy",
  "key37": "3MDVoN1pE2FmRzyXfw5ZQB6x7M8qcZqSXrHRvNPTsS8sNa6eQ3jFmQgdLcn39fZ6bwetXWNhVcchPsidJQXTjcwN",
  "key38": "3eFcGAYxWXhdTQ3vnDxxkPv9WV1bKo4NcKLDjgE9WD1kLXDWWtDPaQuMjd6EhhG3TLdrybuQT3e8K9povRApso1W",
  "key39": "3h5j4QJGmzYs1bdGzUBq1KYGzZLdKn7sQtZ8Hnfn73hbF5wDahabHRA8ryYko5mpvvY2A7Zutoy6RUV4j9muY3SU",
  "key40": "ua2nGELDQ6SfdBVZ1E3M7r2ehbWnrJYxzCqtoAXWBoSjVPGXCLY2wnWG2TmeXaPmfCUN28FFRHkPecWcDsPVb4A",
  "key41": "5SAe6zLi1mpXUfRskPmNzhBnYytyyBdnjbGkHKrZ3NxycXyhs2m6enuA45iLpjFAAXHtkwY9mcJAARjvCKQtfxAn",
  "key42": "3Kzqmbm4fwM7QejBmuzP52H2UTfDisDBuNfnoKXW6kWQvnn2PtzEUxNynV9Zygra5xM1GhtyunYopPUUogQjpH1t",
  "key43": "5ktUSrwwrcMMGpRcmxPWz9aSVYCbsoRbKWwAWygn6VUY2S25jokcouUBLePnnJHj8w5RGMWvHdmcAKXuJWWrtiMe",
  "key44": "568TXgfgwAKGcJs8iL9kapQnCZNGHPZi8iomXack4io4ZBDjtZoFUUumYaj6jwTmzmQZg9bw75DqMyxvhzjgTy8h",
  "key45": "4MgB3xxjzUKisehbBxXDBbd9rCkBDY2RxvwX5ythLb2FUwuFJCzxcLKawMhsQU9MYnxCq3zbSYMjJEqFTbR4kPFP"
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
