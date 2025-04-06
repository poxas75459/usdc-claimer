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
    "E3hveopJdSPEetUeGzRju2n1wvfqniuFMxH6AZBfvbuDiV9CSS1wLTsUDPpUvVAURW6F94LFGk5b95p5LMve36g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JuD2JX1japujKgcsVzc9U83F17Cd9EZdJ8aBWmKcdF7LwwNgKzcwdKf4SM1EEm7nFbnUF5JXbVoimAyMFMo2RXr",
  "key1": "5sVvC2HwdBmgpCS9s8ZgjpiE3uPwU75v47qeDe1X3bK5EoWqkQMbyE2P9bdNBgxA99oyw138cTGHjMnCvQqAiZSd",
  "key2": "bKGnzp39zmnU9sbZR7A4cDDAHGht1WHthTFnm2z7j1NaWLi3Vn8fUbQ8AUus92jMJkLB5FazECF4Zd88XMShsfP",
  "key3": "5XnwZzkHMgsn97zeXAnHq4JetT3Cm9ct8JhtSiaYSEHfa7tiSse5foS896L8yNxzE1Ec8uADVnEQC7o2JhBDUCiM",
  "key4": "2LVaE8b1sYwhb5xXXgUVJhQzdzouvgaJPdAgeKE5XzT74pLCUYXhx5MKESC3Vj2ubHUvunoKW77YaCzohmWRBxd8",
  "key5": "aZbAZ8L491BWpmAkRngenNpRwT3iiFiaDonpfrQt4JXMumQDgAWHtfVSdxB8F81mLaRhVQqPm9psy4HF6cyNDqq",
  "key6": "2kTER9rqf3Xujji6CtzE7hRvqCVq8jFRRgY6H8mEQsb3y53qYa7htoTX6WRsA5i8pppQ4MvEPsUjwvr6H7yBbPSz",
  "key7": "2ZGq9Je2AwjWTyNWY9NENJd4HdDyLbxYvdosxQA38MRixoFV3X7fxRhvEFk9H9YfiqUUYWQ7qWfR6xKZRgKJEmhF",
  "key8": "26BtP3jTNWf52gQtepAAKEYp4zRSwPivVgyx8BbTgLCwG5e3rfiEBP67nvY1om68gvAyiKSWhoTMMvduCgvAS6hg",
  "key9": "5jo2xiXRAUsv16NEc2kDWbfpf5H3QzhhdsCz9KGF5G42M9wLabA8AAS9jiWV1tdgHJoFDtmhptkGwi36PCaAxnDE",
  "key10": "4Hxwt3FyeE23659Dsri4cjTPfg3mwgGwtkxkbsFJucTRYNmPBXnCaQrxdN6gyf4NSAR2ADXrpXmjKQQHcCxjMVqq",
  "key11": "38ZyfXCb9YxcDmFF1VzBiiqS8oPWMKsoKeubEfxSMVYvbGZWhkaZaDwEppQcL55TkqCGR2nD4KgdcJzfvKfGDcmt",
  "key12": "5Mokt66WyyDTa4VtJLpQVChQGzCSQaiYdcrndZMzt7VMCUVM8uMJkX2otVBFY7Qf1DXyNdPtfe2rzjMG3N5ZjiVj",
  "key13": "5zvw4a9ooHXEfzEqAExAbfC1GE2BbFC7HHyTvfiN4jKNLu24i9MGqHFJ9TuoaQKMfesU6mwXaN8n1DkTsW6Gn5vY",
  "key14": "3PuZqkKVjwWfnZAJbe2ZvjYD8GZbowpHwXYHogTNVNUTzjDvBkVbD6AzMqqDZRoPpiq5qbGe2rxHYUZkx1oc9GoV",
  "key15": "3sTANc7gg6K2SaBQ2fpFLfcp3tX8kCY6zaXsvjMXYzRqj41dtAhdmS4hc1grUw95NJWanKQWmiJNxw6RKgLfxa14",
  "key16": "4GVVYeiJvh8FpeHDc83xUDTHFerJDuvNH7YAQtMKijtNMgsciYB8VKhbDnhqMcH56Yf2sLsn3GtWcQfHHKFeVFKm",
  "key17": "2soVfFWjkiwuxptLXN9ugxfQavJvAS7d1cky73GhZdNaMeDzDPH6Udoxxrcu42RQk52qc84RPPzMwCRX6D9VrjN",
  "key18": "4FA13UCp2M7C3L25SQQRbwwvWYu4hpuxdiJYx13eE5AveBjuiyhCi1YzkKk8dtAm4PAecscBSC5KHc4huTKhaFX4",
  "key19": "2sscRsNQYqteFJvysrTDqdCJEz6vF5XdsMFnU2wBLSEEAMUFgoLdMHwBftKqgjdnJU85xgKHgHLjgZgYV2ssDiMK",
  "key20": "4Aw6tgHX63LB1mDYvBRKzoUfE34Vtk1QpWJd1iggk4iVfXGFKZueiEYBrZTsyEqZ7JNGZ9ecccnbKrjPZM4GU74m",
  "key21": "3ZEr7LT4T6gypdV9mr62HdVuRH9CpP6Hng1NUkYumMoqbHSfpzFE9AjMMpvaF1PeNo44vttLQX7pFYHcaWTtSrPV",
  "key22": "2b3GcRbRe29EUi5WhhLXhp54dZEkcZKtwZ4FDyXDn126GtdB6tGLdQnDJ9Ee6y5MinhNX7GfGBnqmtgLzYQ5cYPR",
  "key23": "5mUNgWfextkELDfXdqWDfJZyJZhiFJJ6SHoN7v5qHVj98dCyVDLo6NN4rAu2fAGM3TTMq4eTCMGbx8sbtJ2ozAzp",
  "key24": "3Jsh5GgdLDTgC1kjrCmnYzjmtfFxAw89aTTYXni4W6wqKhVJPRmdfBChreWuXGE8BJe9zvRLibA8fspWJad377Fq",
  "key25": "5RpHbscbFu38t2uSzQDS94WH4od68e83zMjKZykomfSBD3BvS1YpexZ2fAADXaYFpmo9GU65DHEAXFUFa9nB3pQz",
  "key26": "2QajoDRmHEbghfBkUMTmYpnCJepB8WFovwKacGosKtg9aRJzFxbRdfiWvJnuqfEpLpGJ2s72yK3mZhwqw3WcFS67",
  "key27": "3vbUgubDRtA5FuvtXLgVNT5YSwyvc7a3qgBCwJtijD5AMX7z7Ctecr5HSxqhV1NygRfbov5mn28fytzdR9ACXUGx",
  "key28": "4i4tnyQQDohYrmDjCHXHF5FcARDoVSpxN5AKaMfhqnMwFcSr6v2pb9pJL6KBrQLAXTxy54KqEHtcR4oDFALWoJmw"
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
