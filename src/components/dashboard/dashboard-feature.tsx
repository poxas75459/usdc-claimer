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
    "4LUDwWZqyS7chhuBTbZpBWhq8DvG3yTB148pmfEy1wjHwYvi4PRsdEpWc4W7kdDNfjjmfxVy3kngLuanksjU4Q1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mTbfvdFuCXFwBRn5Rd3BXykctfn5az3FJkFMw2NQdZgJaKsjs59WYqoBrdi9B6TAXbbxTNsjScLTBvf8YWa9QwM",
  "key1": "2kon7xqRtC4733iu5kxQhXWxtmPEM1u2ghZsuSCHbyPN1HudVtY1tnYjjS3jVzDomk3SffvkBn4EcVvDAPxusokx",
  "key2": "Vn36NUZFYGXFYToLYQa3cYT3Hm2xGVJ8NXuUvWJHDpSVvhjaZzXEHzzZTz1T2j1vmaoSPB6KpzGV4YKsMLtwH3V",
  "key3": "5Gqt3eEXgDfkBRYzhVMoQNqkDZhVLv8hdhw96ZG4NHD3baXcKjsJeZQro2gGygQXvVVoHTH8okJdW8vsmzV2MGVE",
  "key4": "wGvtheeGNvNBkVdgQKvMwkCpywbLEDyZmdJFWwAPdu965o7c3QW1hKtV4XmmuUErfHGgLN2EK3J7qFDUEyoY1H3",
  "key5": "4PDxp3t2g4poR9w5LBwyaLfheXz9Mfdnfx2XsxT1RqLSPNNXsGpBuTHbpxaSAMqGdgSEiJFvTMGfFRFSSLYgoFko",
  "key6": "4SExjwiADNPV5NGhEtoYF7u7NYWhDSinriVRh6SYZLXMwQLQ258tM7Ju1NFAeLUuzvoTWqWcoL7bTwR7HQHn84XG",
  "key7": "5AaBeeDUgvjudJbiiy55THviw3Xz14rWkE2b7d4DfADP12HNrprajWfqJbMMkrzDAW6ZGKTTxPBhniz47nzUbfwD",
  "key8": "3syRnjGKvRagAdhGCWGAgv3CbcyEzoQvLdQsbEcQPoCssdq7FpZfZNGTaoGgDvtt4R4GXdyfDxDEnhFNc1rk7odz",
  "key9": "rGodBphd3cXPWiSsMs4nPFoN8YrwzEyJRdfJsnP9C57nN2o6FFy6ZNFrKz1uyV7UHdtB1Y4eN7DmsapvpnDMfW8",
  "key10": "3ZM5NrcKh1gxRR2PtPHUG4ostKf1qZmgquuvAFDd4LusAZ3UAqvYtaUVTX8vv93EKwCo6TV1v3f8jCi7dyqQzh3E",
  "key11": "BCqhC3uGDUA5EAsMqi4MyftJsXjAXXv8R18jSQ2Gd81iLJZZpETdvticV77wJGg4hJrjETVHCdAGvgoD3y4Fc5f",
  "key12": "36snAnx9vtG9QgGgZzwPPyHjKDCCpEJgwnm5gFbJyn3NTiYRZ8aninLZxyYv7xHa5EV5bgQMd5oqoYqctU2REnoa",
  "key13": "2QZKRVcCDcvBnDEvBhabnevUDX7Khk6GHaiYqvN5Uvjig7J3zFBsfCWYDYcpuGvfbsKPpPMBiHtr5odfLrN6J9dT",
  "key14": "3kbmmuzEvc3eNk8ALRWj4GJqhC9hBDiM6zkcsUmx1opFTwtwUpycByskZNSpcEKUDXsMkStKmBd3Ph9ZhEWd6r1Q",
  "key15": "Ura8Vr19ijYbgE1Xmg8yM1u459m3Yc557yCCNGVhJZKYjBMTfw6GqPEySN3S7S5AQJrdjrdwTp8MMDxkEmzdw3C",
  "key16": "3T9fXqLbB4fHdgmbKmnX7wzk17yYrTecBHVZT4726BkoHP75wJrTwwP81pddtUPxhCJYywfwdk2bg8wa87UXRCAz",
  "key17": "59nmE8SLDReHnHTWnAsemo5UU9dkynor9TaWSkns4hJd7kzaEAVu9PhaSfhHFjWfUiQ9jCxAProsFeQ6fxqnnXtS",
  "key18": "ys43mRYjzEtHqDLEoqbf2xXkTsGJZHVr7AKTp32SjQDcb7Yp2oxYfXuCUfFByssguSXrJu2YP1bK7g5YpYygXqc",
  "key19": "4phgy6aujAGAQqLqskjoSfXcJiaxEGFpch6hyecXNfmuCnmFPmRq5JksHResjsZJkdf2Qq8FzwVeCtcbtAxvtcwb",
  "key20": "4tpgUKfuDKBA3PzCgPoqSc2EEUz2XJHJ5qpTkE57Q7p69uHLvJCktYoxRymWr5MAQ4cE1v5chWbpGdXeQAcWg5aC",
  "key21": "vJ8Azjr1hBMg3ptfE8u52zeQNoFtH53dDKxYkMLk8miSx8SSTLmbkwDdgEVH8Ec3cYj65myQbUT5SrYxhQTZ7ia",
  "key22": "3UA3kVhLrA3De4pgVyG6RBnrLB96ceC1vaSiuSKKHMKtaCx3iY24tWDjvPVVJqmwTGfJCNEgJJbpt7QQ6kUdX13s",
  "key23": "Cx51YTEWLdBAnok7VAQELR5DyGNKDqL7GEy5s9um3j5y5uCPuiJQVtmiF98Jq9svPH4KEB4wPGaS65gJQqrDNLn",
  "key24": "5tCpeVQXKYgrqXU2CEdsnnrWyXejPGFGEU6ji5qJna3wP6EPJy4QNf6L2cY7yQ4fVcZRJ7PcdmRht6ZjYUQvPAnP",
  "key25": "PUghHT27cTMHaY5FRaPa2dAyWdLWqQFKLkW8bScmdNorj3VPZbhbBGkv1DHzRAjYCYU68XSvvUGySyT9MVySEdT",
  "key26": "4drj4EasZVCDyxQ19zASXQvdfWStKMgatYeHpJU6PmJG7V6Mxfx6i8Nux7hMa37G5Z6N69aFu9JJXxeUxhKZeZbP",
  "key27": "3FiY3zteMd7D3WZaVga7Q4n99tQpr8ruDzJ3KDmvLyJyvgCdRRCJ1WjJAKPFKXfBrZvWxBdFsVMtLgnivTEyP5Ca",
  "key28": "3zi4DiiRGj4MhHMD9Mhc3iAdiyYAeqXoNmv9tKHFMcjiW6mXohhKY5GnZQfGKiDqPeAveJnEArb4f7HqAQ47BfSQ",
  "key29": "WHuv3zNogG3Bf3w5US2Te4hXuVpHByQSyEwYBqhiFCAArvJHWt8ZmsBQzikZ68TNDtNCLZco9jKMvVGDjFof6nz",
  "key30": "37wXWQa2JoQZrHNhVNLDoMoSUeToHDGEA7r3JENpvCxaJgEiSdFyExcboQEC4HfQLjTZwN3d9Xo6yeJUBK5EkxjJ",
  "key31": "5hE9jyExY3LLGHtyZcxGhUMA3jghuNmy1yL8NZAZ158QpG94BtVmerwgQhm6zCQW5bpBwE81FiFXErHZQYWyRLBh",
  "key32": "37PRhg1XE19s6DhAU8VF3q9DVHf7EH4VvaGygnZdonWtLkyC35DiMGqQnWLeFAECHNB1xBZKgA6GfHSTxzv2qC8c",
  "key33": "a4pY6eLbsp5KJ1R1nCTeAJHVdQkg5s6YbGRTwhdjPjh5T7p7uASRZSMKm8Pfxx1ypWYAw5hmR3Y3j4WVe79XWh3",
  "key34": "2oHyBrrrSYPftk4phvAtxo25osPBRzfNp1y9toYcVU6D7tpqFRS2qrqpvWD7kXd3jRRpdFhP99Arw9x4Y4xepkus"
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
