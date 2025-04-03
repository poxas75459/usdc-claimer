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
    "EFmEHa5y71VJ8Jf2QcT1zRpYeh5tvDisMDaTm1PgHrmUV497htwqpMVpPfBpgpsJ4frc2YJwkkRgihqq3p1XLYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZHu7doLmPqVABz42SnysUX1Wmf6TzW9btJAvzJnnMjxErA545KTRARoBm1dWASVGSVcpkjcUSfChMEs8e9C4hs",
  "key1": "Q2Mi1HbW1jUaHicu7VUncv38GDv6Rxnc1ATDVJSbHCo5etbWuEvbjXKm99YcP5iXTsWDdrmcs126CSkTXo4dMuv",
  "key2": "2iZQZA7awSSHfzvuRP14rFfF1Hxdf6ZaMpaaN4gsuAMddcVGnUwEP3BfxsR1UPcDhBy2srWPwLD5pf1WA9aXESty",
  "key3": "LBX4A5AzfomBLt7CKR1WnCr7iCXEXVJFvC46K5K6JsEdzNwD5p4BUNkvRpGi9cLWsdmHYewPCay6oi7u7U2wfuR",
  "key4": "5wWdbiNioWS5K73cpRaXu4FrBYoAsf6yQ6MMTXHXiGuzSSa942i2G5FYaW5YFdoiEAhLUf1WHdgcB14NTk6Higzk",
  "key5": "YuidVXq4seywhnYqTKzAzoUhBYoQFgjpGCpEmH6cS3xQwmT1Tk9FMmDKb6kEqUVVLWVQ4ZKFZLRZthJrQJDAyrU",
  "key6": "3Jb8CaDjFyKNaygKr9uMHNdrsFNCC55zjU88bbxrqRBNnXiMEgJEWZoKvH6wzb5ADwquDY3BSs5KL4Z3JbvgaKQW",
  "key7": "43zteLtrgtcV4whiZw98DsYNWwb7ujNH4WT9RbWQPmVrWF1hwCr1xe3ZwShAkQtzqfiDVxCiwywQ8sxpvvdmFYqX",
  "key8": "3B9WYqaP1u1yC471yr1VQxScP7yzMRZvcU8Y5UhTGhjrJrRK7bQWGQMHregtnSfTmZub9fSskidt3HJarZrfDqYK",
  "key9": "24RzzGnW6BbCBSWBLPzRyMjLz6mkYJDvyZWZseUqFvkJZd7rAJzbYyQEdgji6zpnwfxCKKck1tBNESrDbF1oy5su",
  "key10": "4bqtQB94AG2Ev5F254gwj99PyHvi59Bq6cKwoHzurTmDByLzhiaPMrYQrMbNcUrP9F9sSJQGBECMmrVvg8wsEoip",
  "key11": "5iyoTvVffRJEK2bkXTxbMNanPMM54Je3WJwcJNy9oDcmffuxWzPWxbkJihoxi4LqM1CpGnnqbJV1fBF5bCGFpSUs",
  "key12": "4R9Mp5EPWPq5UJQKEv5MY6KxzRw9MM3vkLfCBRhtCn9KQ2j739sqW9BLaRqCVot2SFqzfGuZRn4z8NGCWRP8TcXc",
  "key13": "51dTCm5SrdjssxVu9QAsryWutaztyK2YoKELWfScYJ5Lmkeez4Enuo514rFkkKi2NGmdFsB1fjUkosjQfQwZTv9C",
  "key14": "yxZoqHnvoAWPNSxcEAymiaeS4WxNqNsyyGrh3jR5d9nRPWibcP7TmnKF2aBvppKT118ngZSRhy3hEvZvAinDNtk",
  "key15": "35j8RaqXnktFXfNdPe6wY1d1RzMU9GevYtn47GUL1bAUZrj78XPfMyQgZM5T8bMqB9cJcFCyh4uCYkgZZrxvWet7",
  "key16": "2gTguEcQHans1e1YTLJN19K7Fvpj2n8xpqY89hoEUaZozPkh3CEQaATVrecNKFV4nWKzC9vd4kubUf5umzMMzcF5",
  "key17": "3QDwvaD9QH3zxCiL6vU3vUdkLHuuneUpoDz3MifNzN5RWT4ax4LQKeyjkEcLTEhAEXe5XQbkyj3ktLRtPHTJZQEF",
  "key18": "5qXXFygSeehrLMgMEWdsRZftadzEvhYxyMZhhEsgxq8e7JGrRysknehgB6ptgEbNpdW2dp6F6cTKsrZ3j8B3xnZz",
  "key19": "2iuJP66BHptDeByhLerxP4bF55U2Fvuibtw9uKZFH7m2A4c3rTSeoKj5wicPUiWxC8fZRo881q8GoDJtbFCGS6Fe",
  "key20": "pEwjkqiKWWUNUDK4yHsxCLXamjPcFDF5wrH2zh2p25ex6g9x1MummZVR6Fuxmovsn4WH1nARYFBXCT3z78MKWEJ",
  "key21": "3WTNXLRCh3UShhFm3t4qAprBo22AhRACSkkaPHvvpwExLumzfgmqbfzNHvEYPboh7noYzNEWN5P4ohjKXb6DdVEr",
  "key22": "38SdKzyxVFdTMVW64UdtQzBibSKXccUHWrzwz6euN5nemZGa4zs7dusVQrS6gSMVs3kxmeRkQrfUSpgdEtPYJRya",
  "key23": "LyLBB4c3xF7jRf4b5yNKHshgEq7i9tEg4Jecd2vJvAqDEKVNR6x9vaanLpwb1gppbo51j3SHKMR6EEcSFp2u68R",
  "key24": "AFtfRAZTBW8Q3Cm3TsWXki7sfBShA5yDnNDtPnrHfrBTbUfNt8Y5eGv6DTE4K38e5wjC3eNEm77JskcjHNp8WpV",
  "key25": "2mCGQNkjfg1oBjENojiWcEk9NWSJygUWuv4XM9qevx837eC9X2t54PxoCP4TRi9yvTKEDeyrtQUu7gZYBhKNCc4i",
  "key26": "5xceH2Uw16x4U772wrhiLBR6CLampndC1dfsxyFjrrM7ZGPjwSgxepd8wL6gXAnJBtzs7t21ESPbEW28rksBTSjr",
  "key27": "5Dxgt3FSAHNk6HJUD9mmf7opX1rroYcgKiMLdTNpVF8N4sGMc1YSxVWzqACwE59KTEjZpMMYJqhntLwp3ST2HCQt",
  "key28": "2VeTpg77E3hneAraSu4WATA3e6eVGR1So8boZoVcUqWcH7o8bozEHyApiX6995NRHgmKun8y4KiTtrFwkB1Kzj54",
  "key29": "3mE9wadVt2hxBebEV63zkJSuJHhknSAEkwGqJEQFNWbNC8jr2Q8JWmjKY8BUuhEA9hrgJDD68afPLeV7TdrWCBFY",
  "key30": "Jot4YnTKt4tRFtEtKGp4vDy9rxMSVy8dzz1vHuZiJcEwVZ4gaZio1wht4adqgxMbC9QYitNg5Zu6dK1aNftvQSc",
  "key31": "4rY7ypPSbqZEhfgsQFZGCd6vUrXXgy7wY1aUZZeG13bLwELCUXVvD7sDBPk74zmE2GCV6eVAQB7T1KaT3Kysys7e",
  "key32": "7PMhMJz1fzpimKwauBqx1tXFrFgSGecpuuPSPv4T3yUNrj4KEetMafxbCCGCBDWXovtwwJ3vP1CgqgdRjcwPo2D",
  "key33": "64aQi9mthRErAU2L4nZY8AgoW6VDYQZWNjj2bEwUtMSWYGKsnFxTA4W4rwB67PM8292eq2oxirbx1dP7qbHAgRWX",
  "key34": "5AX2R6cyjL3vc5Rf9FzZ3nmwAZUgAKsmkjY4BCBZjadmMmurkVkswu7t7L4C8psMqrP8Fw5K9Xzid7YNsd8o6wrE"
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
