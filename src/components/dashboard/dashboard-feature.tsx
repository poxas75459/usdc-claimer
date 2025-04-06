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
    "3tyuQgTkTCPvbdNxppfQfS6J5YWAvDh78DzPZGYHt8MqUmp9npZPBVhTRdKEAeqKq4X8tMPEupA4dZN6HYUnHJAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NEoeA8GGgEttkev69S2XokXJNEsGq4uHJjM2Yw4DWRFrLznASP75PR4LJWNHXkYEErk451CvbKdxbE3DzZ2arjg",
  "key1": "3gTcwSHFui4DoYsbD55csJNsFa9NTT17sPmd8DTqX3ySfLSANQm56fddrQqPLVT6hbHodJkxru1fQZg82KcCNkrp",
  "key2": "ZhPGEwDuf67fSUrAaFCnRSuVZPdisSxQ64qKTTrQasg7NssyaxbhVKorxxBH5g2T38JZRbyJQzyj3fSPoeiP4Ts",
  "key3": "i9zzWDGN5CYKpNwXGePZkw6PwD2pR8bdBBCivTbg9Gg9v1JecBueFksCCjoc7pn8dvFumFRYjhVtf95uQ3cB8iQ",
  "key4": "2apMKN2eBe8cooVdsP1PenS2aRDDZB94YUuSzHL41rFdwgDbD9EcVn9D2FjyXvJ1XStf45jKTFxbhkU7j9VoQNKx",
  "key5": "3XkRHpDhPyBcm89zX5i7H5MrcGPtCkWT3KwwsRxddhBmcc2XBUpNV1b1pQ3SzkKS91rnQkWNfWvFGRcKkDbRksL4",
  "key6": "2XxQUHEFQzPtw6SjdZcpsuFUQaQ6jZLcqeuDNabtgKxw7uGeDSUoBwEjFsGYpcAmLgH7cYjPfjHMxoHiKhnjdci5",
  "key7": "xagqMfwQpRLSMw5kyRzZjJyWpymLRJT1QeMMz6UEBgo2eSinZexCqYJttsvqDEfyW431T2nL4QaKWqYppwVm5Hv",
  "key8": "Q2UgGmVoL74Yb5uNvPCwvZosVAJqUiWhz9Su1ivFRpXj9A6u2R9jBCR5Z2tPGzJUbqi7TuEj1WeFHA2pBJCyexU",
  "key9": "3rpHAMmAxhW97QybyMuTZbkWQ8WNoPo6MERhS9je6nMWQWJCCbfSRczR18JsC4ffBrVs4DNky2qMUmXPDWT3ZSk9",
  "key10": "5wj5LmKTLkJmwvfS1WmMyqNHWv6RCXXDiXBg74nir6NoDAf4q1he7698aaqCCpjBVgBN21sa6Bn5c3ySmm7zG4R6",
  "key11": "55px5C4EL4pnYq8uwqD25FFWihEafrADNrviTqgjJisk8LYFc5svMdkqM1A29QUvU8f9vyHF8i8nuk5ABZP39FaF",
  "key12": "2sr7mz2o66EjB5Rat13YxYqmn8x3X7wwTeUhBPbZaV9hrMjFdY1KVbLP6coFRPCcYcobQN7my6AnNEsj211Emjt7",
  "key13": "xpiGNTcJEC2birgBZP15BgTj6WfKdDfGuF1mDgKXwDQ7c1zNtvxN2bTHWpdyAk1XHHDYMAKFAUmipe68rFgGmir",
  "key14": "4gh2jMv2ENF4rTsxPwuoKxPGmezbDwMtLicfTWEKphcWvLx9CGyLxQnY1H4MsGpHELpCtmgkkEcNRdtF1am5Dc4i",
  "key15": "453wp3CJ1ssjiEG6shF6hkf3XsSkrFJ86NzjMNKVuiYbF4V3FKC8VpBbq9bf37TDug8yLdrmL74YfKuF1nveqQPq",
  "key16": "47dafGgvrkbUdhu8REUiX1t55K9Tt6uXH7MVf5QYnNCgjD1EDGAg683Bz5Gh5VpB5oKpWg6kkQnvzqCw8A95ed3K",
  "key17": "341Vkp9rejCGNVaRxSJXMWkfLd3m81NXUmYm6tEcm9nc3JMQEmQUMMKr94dXUJihAhLcz9d1EZgKdRu7S9BVRv1y",
  "key18": "5eVS4FpHQr3MS1uphmZJjUyBt3tymLo7xrPhSNYApUmVPspeb76BnPa4Cvb71oFxV9gwo6MHW75GGToCBGJy18D7",
  "key19": "55xgxscqWNgNNCXKEdj16nvSCQUATQsEseKpE5pwn5X8HxTYnYr5y6tsFrCNziZ1h6TSTH5KHGd3N9NrKWCjrXbm",
  "key20": "2ow4GJQB92bUoi3j9vkqsm19Hvibd9A5QPmvLxz6pZ4mqbVwVZfXTL5sQjoEfr2ZHc6FJJPLH8n2Z6cZtG332NZk",
  "key21": "5gLuPWw6xi4g5MwXVoUzHjmBjUAW2Bre9MSzXFxBAC7Ms1WEZHD8tkxzH4J8HwKLRjj7zYheDgBXyB47S2MRcy4x",
  "key22": "2nTkZ4MaxRsCGajuS2cN1V86X6zpQCSzSUEYVGeGVHX4rgMDT8VhWDhe4JPuMd8Q8WcwAo5NUJM6Ram8stpFG51a",
  "key23": "3qUi3iHAbJVipbkEDGZaBLBYhbHN8iapWGXYSC9zerkBMHKU26rqaTKyqdHcuaYtsmK6LZd28PvqLwGET4vm5hGF",
  "key24": "5ZhN4YgKaCjiugpkYHvH1t2P6SbiMgjpLaBcYj3fZtPBZqT8MSSXN4afvZ9miy5eCARU2BjtZdC4Fsa2SvwdZzRa",
  "key25": "2SCCwM3wTgRoPm5qHKjaT15cGF9zxKHk1GQyoRognUTsX1cJnj9wdZr11N8vU1gDNUC8bGPpbiE4UJtDgz9jKSqd",
  "key26": "h2pD3mozdheEyWtR79WbjLGpPXe33Cc9tuBv7L6ivt253XoVgdexAKUgKx5rd2yPB2WnjMfn9nj5DYFZtW1eDmQ",
  "key27": "r9qYgJgZUx31CXtjswpScF6P963vrvjmwWQmsFkguGiH9WnatWN3qaDt8sAj5P9QkzqQMo1PDAmXCFCaXp4fHvA",
  "key28": "ZFUMHfG36WnGhd38GWjMQTSFdyZoijK2VuGCboGxA17jiLZntDdKVrpokPVnnaxXVu7mEsBPSex3NqSwU6KZtdA",
  "key29": "49EpdRdZ3txJXbiRULFfbuUh9hRjoHDjFNFQEAnLYxvRd2SmubDKMsJAqx4Zbeau3nKhsw6GtGoxcTD23qejESNu",
  "key30": "5M3bz8pyWEPZpKpdmWp6fXCvvk7UEfPMYchzZvUUcqNgWrbPHBpZQbhdyQ27u8KG4eeYbRuNtPSpbAoKcrtbkSrv",
  "key31": "4M1ztDZz7gz6S7oq9TE4iLdwT8RsLanT9JX5m9ec6rJ749j682a8GkZZNPRB4ipjC1LvKxJq3FTNEgqMrFdWeGN1",
  "key32": "2MPcHnu7mGiGfhzQ9BMDhhrAHZttDprxUT5ggGNwZ4dqPpgfoi9bsm5PfDw7iMArKrdHRzyugnBzcqTBY9pe3k3G",
  "key33": "2vD9wxKrS72zPccVKj7dRJHKk7xs5odWYRWJbTjXcFfLEmobNRUv5suevDKNkRdEJDy27De8e9gWNEQKaha5gTXm",
  "key34": "64URuraEVNrr33ZzBNBsqB1oNcbcEZXoV9kXLkbVnLUMh5qPjdcfvgBG3iNr6ZoC47F9zcKyzvaXeU2C4WM6SXWe",
  "key35": "5VBz9cRfmYAwBjQK1hEJueWJygPSnPftsiV65VdwcH7RdxajJoBiUC3eUhko3Xmfo8dfLKxNAy54uFzts36hVcx2",
  "key36": "EYatnwpbt24ExHuVtpZe75aDs8KixDPnZVgPwPzVqQ3TsLuSHr4YwpKd9ZFwXG2s11HoTcQwPvbKZmNHg9fXmdv",
  "key37": "5QuFkSvzFA6134F77i97stXz55punxddsk9yLey8bQcDY2HRdsa1Buff9ENFMvW3WUESL215DiR2cisqbviRLVy5"
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
