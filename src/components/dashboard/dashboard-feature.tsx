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
    "2MYxjHX4wDprZKcv7WMg6gXNy9ptU1hxi4vznX4QJb2gBdVY4U6vXeEAq3uq2L4ETyUH46353pjWSoyXYutjZreQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eKFuwmHd3w6Uj61sQuTzH5dD1uUWqrSDNPQb68ZDKGNoy44RL1NWegwrATy3gYCLE5WWubUh9yVeg4WboHpEWmf",
  "key1": "hxmTdLWN6z69dg8HCyez1FJCb7gLAQYJ7yyKW2LLKPkeBJS7k61FrgyTie6foroegint4p6k9dgTJChWAecMmrd",
  "key2": "62a5uanpGyM4r1mRnTHwCeSf3P9cMAzqRq6Err5a44Jwkdh5ngBYb2Hp8wtanXfTAUnCMiWjdxUNSUmaAJdEKhgR",
  "key3": "4iD2ry7jGTHNLsSAt2ychLam6gps8tN329PPvDgsSLgQBg65zBjDiWmrkxKzcRQtJE2ijk33e5ksVaYtzPru6zFh",
  "key4": "5kehuBHkVt4i6N2HJvJF4Mp14ZiVfh7sF1nNT5yKGHLrdkrM8uHmM4DPyQGLnAbvcaQehpuYqv3QJcc6LntsmwgQ",
  "key5": "3Cmy7cHKheDsrK9z8fXSLG93rDCesGYjsTtHfHzZHC7QLrf2vJBGRhYZyVRrTdCVhd49ib5s8r8f69QcMs6VM9in",
  "key6": "43vP6yYkoA7i3bjhPHB6zk6wzjQ1VTXnYbG9SsmXLWCeRYxv1u21EECRLEJNmpTjvTMAmtoYzWmy5NYfmXLtJKJb",
  "key7": "58na8LWD2awGnnZx45dGiW3mRhBoqEHWbBdEWdE886iN9ppzvDVCGbrbKezq12j7Ge9gYMkUaPSSMWLaghdoQnxU",
  "key8": "3Yw7tbWd3JyF7dryVgssW4K79jQxp84xjcjvvcGZyXcXMpNYfqh2f3j3tomxHebBE5E6KARSJurqok2aRvUhLeDJ",
  "key9": "5xNt9dN7CLXCQpJv49jJyNmfj1dLd5iBoRVrCsBTyPVit2KHmPsi5DyAMxStXFB5zbuwj2HEjZRnGUjNsVaF8Dq7",
  "key10": "4WJZkr2u94beMkGb58nrEugyPdHi3Uh3xJDdxU6VDPeqMuh2XCDhGtRMDd1bHYkDKWWu9EkEFbAjEyPRMU81C95s",
  "key11": "3ozhVswydXqSsg6BVZcuKJDmGU9ZsRujTY5jzhm8Ven4FjGpRQcPdBuk4GaXs91YTMVr9HCksxHCjmEwQJWznQN3",
  "key12": "3DHs7xLmkehj9JQ5NP4SjgNgSdWZ6Z9yye33DGXhaFEx4LDwiHRHEioP5HCVwopTxva1cGCTpd6urjtUGZojN7gr",
  "key13": "2pK3dMx4PhHMVL3MsCxh13HpVHeAnYEejNVBfRwn2hCU37yfNspfNL4ec2ZKXmYMmoi9uFYiF6jwB8u27h6avzRC",
  "key14": "5pd6TaWJjKTmGbSKfPpJtT2RqEbNTStboY3oAr2ie4QR9ZpPeRWdQGFymuBTwR8FS8TZqZdfvyGAHhmKzeckD4Yd",
  "key15": "54hv8FetbHtjqkxEJo2yM2f1dHmjbY6QeiXk9W3FwiUGmpgZwHa2bcCvqNbrMHK6guWbZWUCPiWYaNMGRxd5Ebve",
  "key16": "4kxAPDchG4jwAToirWoggn4zBAMm4XR3pJjSaChyDPo831hgVTRyx7wSCimfeN7Y72s1mNaCmd8a3npGbLcHarSA",
  "key17": "3XezyndPAfc2WPJRvfhLYgWbx4j9kM5jHsqMc1KVi6Zd7UVSkqMvjezdC7F8DcxytLYTBEuyeBCJw785F8QYPMiM",
  "key18": "V9z18AquAqs4xmFJYruyuKfHwHWEEsGFgMrfPcAcu6KGtNrnVCxjnJSaCBKEQCdF4f1HTMagoinyc3qZUCAKUij",
  "key19": "4rU377jBFG9R8PM9wSCWuPfLZP9uc9eW5vQNxbKYXgXo4M2ax5P576sw3kPk5YGu3HLuanuEew4b5JCrW27BdU7f",
  "key20": "f1k2P1QPHPhScF7g7saugHqvRk4xR9239YV7hsxjayz1Z3xExtqFSCL9BzXFNA964VCmSCEhUQVv1sTKSp9xpNy",
  "key21": "2mLKEaiitBFRmq9kpwgi5LYrMJxCooVCw64ry4ssHaTVJVe5tCdcVWcUu2wjBVQesGnURtVvgdbkvSgtC6mYnWFi",
  "key22": "63JUQrL1kSDPQp7SF1DgFh4UXLN9kxHiqUb8Vc2FK2JJ4f4qaYa3UtSkrXMhrh7Q8ZQNtkFAegyUsVkSP6KYDTR8",
  "key23": "5hVsrBvF8ncro8nLwPi3jsbgJeyJ57SUX19s6cGbA2YQBUGePJJ34baupUHobgU1CtL3SsP9N3KFstP1sYnU6fBr",
  "key24": "4dFWgqjzbDPSVshBzoupTHJBeWqeouYUqJGGVJXPTDkFCvjP3qcP72RF5u12teZAbFjaxkryafSmVnLQwwBeTqsU",
  "key25": "9vTG14BhYWZq62PThbnfJPJ8t1q4a3C5pJ5FCuR3VrLGLBL5hMCfT1UngiD1AHDvhG5sPtNSkUgVWRGkVycguBS",
  "key26": "57LD28yN8Jb7Vn61QHgKEKUfL3oTJi6ip6YTP5upzvFhL79b6VziqgWgWuPosMPJox5czEtmfZkbbopyoxRCWDxj",
  "key27": "37p7JyuVJFPR2c2txaQ1SgvNwuEYpCR78DdAWFLJrvKbiG65sU1gcoLbjLhG4y4DsXELX3e1ZqRyETaBALZwgKP3",
  "key28": "5FscQuQdinZcgrQ325HtN3LHfFHZ8fPLwG2z218sbYsXqQJeTJmt16EbTuEhAkadNGVncHWnWQotB43UBwavCWht",
  "key29": "3v3Kz92kALiYwZDLfeehNFNM4V9D4BYmgSvucRr5pEHES523JKsksCXuarPgULfcCrfKxAMeYJvRVb2b847LaQ2D",
  "key30": "3yu3pDiQWnB3FWimdMjoCEEnF6tKSSAaZDBV9B13jmj4cBiRWTUQ4k6ReobF1anFXFhPPkbKUr4fkT1C7ZxnJcGB",
  "key31": "sGPvt9GDmPBXcFKwrERUKwLJwP3MGPNtEmXUryzVv38Ez4wPa7HkCsmCcv3r1sdjyTSvDMioY3eJGpjb8U9vKgF"
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
