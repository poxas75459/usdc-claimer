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
    "ycmHpM2yPNFAc5fKj1jzXg1Dco2uaVrr5vjorR6Q2ujteXkcRrJVmd4kGmqCxtGFu1CcHaRz7HHz3Nfr8PHy3A1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4et7CBVdvJLX9BiQdNN9N1S7eTish6182uMQy3uWvq5wvBREtRnKn55NZ3m2TLzXXeAfH7kKRXZxqvcvUArZLw6h",
  "key1": "2oQGbqCn66wCLJr1LWz8PwkTNC7bPAxYgJwJE44191Y7emQKUe39ij2H9MyPm8ziZJXWwZKKc6mdntrK8xr19EPq",
  "key2": "5i9jLWzST93auNVzKRLdKLSPDF3zwDGWvqpbpQm7eksiw6xP5eLaaaTEjeE8ocDv5GBhuSWpYzTkyrz3Lj4dt3qF",
  "key3": "5deYrpZVWiwz4NN7SkGZQPs2qY8JGkLDscvy6qCGAkxPsLajyeuititDQRmBDoVoguUGgKBTuZ88MTaXMhwRXBqM",
  "key4": "3jPM5JW3XMJSMVGmhwAuenFTbq3CVuzfXd1HPmS4HsHv3nqBhm9mZcAPrctrEPz7YPUaMvPqjBCLoUfZWWmMZGBg",
  "key5": "3TVGjNz4pqCjHPnMYzFzeadg1Sk5xrsFNV2f9uREC6fDMyrv3vkkpGLECXspLmVU3WyB3WzveSu9R1gtRaJcyY11",
  "key6": "5S1L8Um4sUYnuL3bRqAkPVvF2TbWx1TYbVz4VMzDTEHsAH1QFbadoTjbbHBS7VqX93riYadUheDUDvzvpKJg2Crf",
  "key7": "vdegD58yAuAja8GcePfb5AjtcemG9YY4GoJPVuM5CuUkx4fRJyN2b2htHHurFoYfPy7DoUxyTBkUmyjLzMMJxmS",
  "key8": "3z6LbpotRcP1Xc8VR8c5tMD2rWbDmHhctNJwF1EoqeaiajPyZNRi1iAAu9apqhG7NiN3ERzHJqcgrV4u4uzQbVtP",
  "key9": "2VquazwzSfU5rJVkSAG62t482anQz9C6rcvqzP5RSUXFpcLp3zhzdUbQSdnKZX3F9Ey3qe6WaJFg6Uf1JgY2PpPb",
  "key10": "u4hPjPvz5LUV2b6NWJcNGuMLG1Dw4NeBfbnSgbXs62szDU4838wiBSFN45K2p3T6FvwUjmsYj2Wrj4n86a5SnJM",
  "key11": "42pCFndMsWow4Jfq5kGr7XWcN9gjSCJkzbB4pSCFu1fdREimi6FQkJGPty29rXKemXyqM6jof8aPJ9nAc43KFbCa",
  "key12": "4eobMApNtNKBrksmxv3UUZ5FcVMS2oJ6eCxsXNCZ9AZ5UoaEbW5JVs4H7We76Q1q1whc86qCa6EZvp8o9LUAMGPe",
  "key13": "5ncuDDCySmYdmYX2apH1fQVVjhZDboPcpQLDfWEkys46a3UvnNMzT5V9dBXxGtm77u7pdP88WozuXmMgCHKD2oJD",
  "key14": "337U3zjUsv3vnJ3gizMgxeeS3tnkzDwnNhFqiv3H8hjhMk6nYW3LTEQztxjYAeLBppJQis635ZJ4yaozaGLFyQHk",
  "key15": "3TThRLBRcnN8T9FwA8w6KJ4KGd9gbYbBux4NU1jBZGg6xYJoeH4r2h3NgJk7uAXSXhe7ijz5HaCpPhsMPYPAVJzB",
  "key16": "2GmFHmP2k1HVo5Y6EJn7y2JQCCX5Z5V9RnV3NWEkZQgeV3MsqVtvRa9YiwqzFdxtDsGJJrkAWFfz1MvML2ewiTkm",
  "key17": "3sjn4pJP595e7Bxv6WJ2RSFU7983F3GrGmHwxZKiBHL17Dr6e71yzqDhgcL7sDuGZuiDqDKz8FcS7C7ypctpLW6E",
  "key18": "5Jx8khZPCxJAHaWcKWZwFBAfafAAsz5DeytBz66yHcD5ZWX43x7PoKtMc1KYTK3YYCbjdvV3ZepdbvxdEvJu9uWa",
  "key19": "2Ru85ioJLm5NwkEuzPKudxFuNjZagPRQNmVAUKs1UhSkDqPswZYknrLSZoaQfLs752xbqLL8kNt9G6SykvzWskVA",
  "key20": "3e5yue5NPr2QKCMT9ffUKJb7gxAzrtZ6Jm7BQcCmPed4tohNf4TudZiipBa2TCUATDs57miEWCEBqfJQ12wJzbb",
  "key21": "2RrzQSUJcwe3qFzjS7SLdhTTkpmtzVciqH1YrBQhAMCLBHELLJDrJ2SfF7LWM662Utma6XcEiZG6oXXREuuK9LgD",
  "key22": "2o1ZVE5P9D5fuow692PuGJDttYYHR6BvqwxuqfjE3YRBm9w5vR4rZhP6VcjQ1N9bBmVEskVoqcjwigudSrfjgkTm",
  "key23": "4wPG314xh35vPN4qZL373Fo198bqU9wP4sdKjuwtvsNq8xgJ5AdnZDrEJEbbgAWxmP4qw5CcWsimuDfVYr3kUHJK",
  "key24": "22s2iHvTcEPVsgeFGa1NSW3nFFyCUaXf1suL2AtmjokJeKZBxgNxUw4s96AJ4QzV8McKTyaFnEiPQbL68m2qk9jE",
  "key25": "47aN4h93dZvQJ4Zf1LEWnySLcVoL8tJ35PhqawPbPTpdNLfFfHY2t3Q6hpYSf71A7S13ApVeJTGDLWKnuzAjGoGB",
  "key26": "2CpBVSGEtXo9pDiamhKmjsyA2Qqn3paB8oTgi2SWzATKEzE7cBPMRVkJbFsHxnizM6WuaGgx3SLY32XwTkSpsPN8",
  "key27": "5hmMgMVU1R7xaSQkQ9mLEAbZPEuB3B5mfVMzDnpVGnqGc3ZbCBcoNu5Nns6paLjGR7oJB3D12LCg1r5tTgj7fy8e",
  "key28": "EYSLjrd1LhLGGQAoxYeHFxhfKBxErHPPAcgEaszqTTQvWRbtN1Rmj6hodVZ4pXipg1ZAsii6nwx2vt8JVxQFTF9"
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
