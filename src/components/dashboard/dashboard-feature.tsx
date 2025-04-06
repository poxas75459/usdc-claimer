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
    "4hfzcF52rRV522VqaHAcBu7yAS7nVhJVx6EnZQzjLV18jzHnbWh51LugPjagJ4brTJdL9CRtZwwKAeG3zQrh4xbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QbFkaeduwfDwZftVMSSNA4JD5VtRij7cMYcqKweufsmjUeHzvbG6n2YypbYTsN7wRR2ke3tJwdBGCGxBDARrriq",
  "key1": "3qe1gpTa83bsRVGFG33EsP8LHA2BF4sJgyxJwsQEdxtfkLkxFYdanFixiPuaETdZ6reGRgEm9dmTcqoraKjU2tnM",
  "key2": "5N3iDVouQP3ACCedNmsb7zJbh5uYpaW2JxbsMryKiEGWWF7DX4UrL2uzg6kf1WTGbJxQt84cmACaAgFNWjdP4pbs",
  "key3": "61KYxb67WEzCybfwbyG89tpvKE6rPAU11bTQeKsMa1LkY2ASKPJrujjCG49ing2kLsUkT79xAZMk69ZAcr8ToDFP",
  "key4": "q4nvoJnRiin6mQboFiSxxiwkBLsggmCekd6shXMPghrxi11zyL6d4PvyHJJyhsEFvTaTsvQtScjaXB996AK2rnz",
  "key5": "5u4iqri276bxywot2vH8VaHDmeeMoNeTTkJivPeoqudZHPFyTD84orbQjen8hyuSXaxNh1m6rhfSfVFiGkBpQiD9",
  "key6": "2BByeZHtkTW2QJmNjUYVuN8NEMjFHyYmifaBJ7xVU3CLd18qXtK9G1oQL56k4AVEihRBD9ybDvR7zfWBnJoBGWeA",
  "key7": "3WUEYEiudcKHLTSc41BsQVgraCfx7Dtfdcid7oQiG532qjfChGPGGoysFPZfpMkZ3378evTCowsqbKd1LsrmmDLG",
  "key8": "5EZ93uSRRR7x5PtWAEULiY36UhBvufdMqLt3EAqes3M2ib5gAQRE7oTPmehXEcH5qHHQzaQgSJSKTjRrNXgFcQzA",
  "key9": "h3JAYxXfVk9uKQJPnLry2nPmHwu8PHXtyV6LTYPWfdh5QoNMGZzP1PxV2ZWHHaYr3ixL3aUX6uyUSYK3QJbekmV",
  "key10": "6UyWCEsXzLhW8qvXgtPRZTvtPkWfc54cMyGzW7tcwvs5jbUiwko8zc7NtUxJV58SJEHMeuCCDY48UefbzoMP1Ek",
  "key11": "36UkWgLSGkkupusKydbuptq87GnE5u9a9KgyHf2JCu5YkPXfCc6vVgYKjsmV8kzT2c65hfNCjqAArX9QBWgie6yv",
  "key12": "3iPpJcvCTHJc9XiNyfQdX6QPihXUfDFDrjxi8cUTzzfA1kaKVEXUSXdHu1gQdZ3jut7mQxgBd2DaJo3QrLQyKUDF",
  "key13": "2Mjgut8TrQndc7iKcn4Q5EsueUqEn4nCSqGh4hV39fW1Dp4kwYSf4UKRY4VrXMYtuj68YUSujjsDZ4VQY3gQfs6k",
  "key14": "5H9RJ4MTzmLYuMWVxnhTzQUecv43Pyt6kt1k2dWPhnzQz1vcUvT4obU7MWsXkTKEsZRzRT2KKAfFTtyqhLGZRoWQ",
  "key15": "4mKmbB9gXQubp8vwoEMYReejyMgaD5rjGbr5rVMrCGJk59DbMTGMDVXS27NHVTv9VHieyMBVTfbd9FQDz99qB6RK",
  "key16": "4bddX3Ze5t4mnbBePQnS7svsQUpaCH7pm4nyBireH5oLUWCqBWq5krzpNtfYqnQ3oPfaahFkq7CEbNXRfukvXG1B",
  "key17": "5AbBpiuv8He4VqgZRX8CdwnZfHqRf71w2q5zkriPinnDVZ8Mc6X2wt1bJbsn7mYD1aan6hPSi6kw98LiBioik6zZ",
  "key18": "3NHve2pDvGRtxajuaNWFKivA8wXTJ1EGNGDSqGhWjyJa268PUyGVQneZNxp15bJVDh2UQYCbqmsbeStBaCTsu3r4",
  "key19": "395EE3WhX33XmFUbUnDeQv114rtn9L7SXdBPZVpZEZwKozK9bWvbPJNUHm4jeHsraSZxjquVbMpjmgAFgP5jbgyj",
  "key20": "dVBssFKPiRf7vdvFtWGHE3KN6rgkTRA2UzKBXS4vhnRYvDvrVah44Y8mifHah82wkiFZk7xdxj1LbtR2iMpByrZ",
  "key21": "4wC1cEX5dRGryh5eLrqsMYEe14oZEph7xbhcBZ4AgL5dX2593wErDRvYg7YB978ioU9jGwtz3wmVG67xmcde6x2n",
  "key22": "2ZWJzhah5LrrFdPNGCdEPCRvVL9g1ZYtyiMoifv2uJXbeVv242XV1JcQZXwBmkqzH3PmwdgMix2GaW39TWCyrVbe",
  "key23": "23v7psjPSDkamL3vqCttqVzdCWefKDqy1yPWWGjZUnBvUvu8zr8ttknEUshRnAUgYEUS7Ue3wQRLgCScABijGc4X",
  "key24": "3c1gofpzWRB3bWvFK8aYQvrz6Uz7TGWoWXgeHFAFedZN1DHwmgZsQ7zcwzJZr8mwG8ZQmmX6GFf9dDsn7jnprKP8",
  "key25": "o675zPPqzYQsHRWDywHh2PLgrx3VGkH4aUh3AEWLJ4ZUCgnvgeAN99f9ismRd3jVNcZuBo7mU618NDCatNWxQdV",
  "key26": "2u9YaxA1vi2yzDEDi8b4vNDmZ3mM1y16GCXYcg3gp9uMW34jmeVHDjxjYPd1Ka2PY2NkjQxKcS7HWhdaVyLM2toy",
  "key27": "51LzvLzfocSWfYAF6Gy87jwXHdERhjxdT6hGgPLWUwifkP2DSQLVmKjFP3kiBRuPwzHZSiRmH95xg6Annk8RNiLA",
  "key28": "36mDiRsAmsqsovJvrMwbNxxqa2fgwEMYNPqqmo9SFALYNyKpJWSi4PreDhHYVs9B9evDy36PkAhSXbWSeeseGQxA",
  "key29": "4FHJGS6hk36dDCXnjdb7zraxY5x9ho8ZetcF11tVzhAsobzT9eWYBmE376DHZhX8ToEamKMZT3vLQxeBZXT1m6mt",
  "key30": "5zWeXwCc8GcjcLFahKYUe98uvCS7eNCjFYm7pMDo8cYq4fUayXgk1nXyYCZvCEQcqaBTJ3Jgz6juQz5MDcXT6Jwv",
  "key31": "qhiHDXRSYgjbHiFFtmuKRMUkgG7qCxXf9Da4sTV2V4mBa7dwgKyuCBB4e9eWyNqugffrgpvTzWX2xZfyLSwV8xS",
  "key32": "5HHGGCzuBQaGHRp3etSMej2aevGEM5La3z5GAvRiWjfAYqDqtSNf3CH8zpAb7ZCdiqeEggFKCxZ4HaYNTSGfc2h3",
  "key33": "49Qjwz4TLMyKHcpihgi4tvtHbFzhz28MMKRntbbaKKiUq8rJY6r2NsUKc9mPyuU2L2A4uS8ntU6rvoVjrG2Y8V2U",
  "key34": "43DtuH7yUFojKuK9znwrA8dXXnEesoCv6Csq887QvhuoPLRqN2Abbw6KgGgeifQDm55seZngBBL9NAXyToCFKd2o",
  "key35": "4WoPnrB7yCHps97eQngbHgDjCzz4vPqWXWTkvjdHXSghwtkLJMPxRVRFsWvqUfHLt6QQjjC43ZRHEUDHBSdR9QUZ",
  "key36": "46pRjEnMwapby445ghfSnAwZMKBmzWctibB89X3fFvjhGXnLgMrMyneZ4J3yTgzW2WQQaAotJUNcy1JLwzwv9nvX",
  "key37": "4q2ZCpVpUCEDmwGszatLQu5JYmiB1fjWbuGJyTFHBGYzCr19z48Yue9yj4GTy91zkk3r2TRmrX8HT4xv2WBkbVnU",
  "key38": "455vDiw1hSCPSEog3GrA4x1v6i6u7xEZZubCkgyxRL1Xw3BZpDeGjH8XQWa5gNWW4MFwTnJhuKBu3etMcH1y1TMd",
  "key39": "3LDNUfQxG1A8199UosoLMq5JogHYTFefQQMts3dUvs3tKBRgyUcShWmsdJ8ZpocrurSyX9naYnF3V3p18PndJm3X",
  "key40": "4hETjazgr2pUD427eKdhUaax1XF9UEe5vsH1gU2wjXm5QnRUyAT83cpDBxf2iBr23DM4LvNun26KhWg2g8HvE1R7",
  "key41": "2v6VGjtJTGvz7bKukQbUDJn32rTuRMBitswtV2h2FbtSDJ79jyavqk1xJobbkJCY67DZpNjeAz1TPhm2D1WhcDcj",
  "key42": "4o3SZhC6L8BmuKfibT3FZQwM1QfLK5kbAaBmPYemr2qkugjZewbFE6VBCaRGBnRVAEGLBBZZdWUtb8ba31jcmPK8",
  "key43": "P4Knk6CqFXRPDRXVYLwnhT6pjGndUwM3LNpBpqPeNsCm9ZV3Zw9VxUupCZpvcRDyTrr6wMAoQkVpjUgwb7twbtS",
  "key44": "217LNSrsseixVEggKki2jeCWt9JRsCBu6mHe2PvuYJ9giXSY76HFHMwjn5YXSWk7pwzw1d71fF3TduTgdwpb8oXW"
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
