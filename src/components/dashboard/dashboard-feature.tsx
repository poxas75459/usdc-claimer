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
    "5eKgtZGLdoMVxjRWRSRYWWjkq9U2aRCM5b8pJ5BqiK6eZRNStKLvqGzGVkDXMMzo2VyJ6EmiD4aemxKvgC5oEZpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d9LLqcFb8XZjZFFEvzZdnPziAYoAK2fazTyJM8RVEwYVxD7GMokM1xQaXHjxzEK4e8W3DMfoRA1H9bPPfRcAHKr",
  "key1": "n4aPSiWfquFchMQwjU2or3T1WX1LfL9onhDRe2a19eSgHjSdPCG4NNPce34pruTnkvvrxWXbNdvyMTPzSBicF2s",
  "key2": "on1s1TVp3y3ABDChgfbLQ5vAvKwySJb7nQT2MeLoGn9uviNktgRpSAURT8LB88wZhZxKNYUD5APx3KyExyL3GA9",
  "key3": "4ZjiJpSMN8QPVNUQUqZZnVNa4VhjR8it5jU9wpVV33Q9spmakCPbVJcPeQNNpMvwu5x4PT6xzfH8JWuurBvQuLwR",
  "key4": "rFYNDMTH9f2BGPHJPjz7PwCJv6bv4fNXgGrxFUhgALue1UCaNTkCLDSFSV26CnmfpAn7vdMu8fKZqviEJ9eKfbB",
  "key5": "2m9rCBET7i35cyHxH97gTjKQCVihQz23SkHLFfvwRu6Kwneqt9jVFyibgBDu3r7obFRtYxdmaAwb1udGZXAU2mkG",
  "key6": "3zFgGiVyqrxauKM2QVRsF9mLe3bCAEtK6Ev5zwAfYLzDHcGBum6bfXDis2dFQ3TfybobnVDYknHKXRYctU2E9hd6",
  "key7": "2E4yAppPTpnPCh3W931PCFKWZ7Fhqc3v9Z5sLRQxJtdRmfNrMwMuHuFwJT7py4mvFKX5z2ayBDn2fwUw5U6NFEXU",
  "key8": "3Pn3yvs5HUDnewSq6WmBQTrv5u8NmQWAPMFVzFNC7L4EPgL1YFiwVTBcVopyFF8gjy2iGNY558yaBMd1GcNZzt4r",
  "key9": "5gjN2eH6ewdHWJg3kSdDXJBm6MKWU4ccZpsDWcmFWYGRvxUUn8TyHDgAZW4QD9K6T6Heg2ScfwyMmVoeHbYZQKVf",
  "key10": "3nS6Exzs7Gp72xBvnY3B11MiYcqEr55QAU8HkHDVj26PR4Wdy5X9ckr6tJK4Nh7DCiBk5ZYNvkppwPyPFrxfaeze",
  "key11": "2bEbYzoB811qcPQX191ZQmRRdn1kZowQYSEuxGe7jhF1MctpPhE4dqbJMaYceotLqrMaFTEFTfoePv9x2rr3eiHC",
  "key12": "5puskKLodcVKaxPkEp3oERygK277aSb7Zjwe4t6LRUFDML8QcesKnLhd2VhcL8VMaRsJFt1dAqLZnuvVn1mPQAku",
  "key13": "3PQXJwNZoitrYKbdeAXpPRnbCkTnJhWN15u4qPrcb6i1gR3swMFSwZpde6fJSJAa2H5KYqooJ723rZ4npUCu2WFS",
  "key14": "5h46n6VfRidxJUq6cVvQpaxK1h8HJu984Ey1kaxV7bCgyeXynBSCURvBqbTmaFrbhWLgW5efzRUVZ5HnpxtGX77U",
  "key15": "4PVvTTLzkr11LwfdgmWLPjxQzWxnNh8obmNhswPoBgS4TxHfHweMm2xXtfZNs2PK9LtrSMVoZUCf3gUFUmvoStn",
  "key16": "3pLUaPvRhdEH1v6kw4hBVp1EYbZu7uMg39qrsvfxuQinmDqzsxrVXQbBtgJs19HvjhU6FKYcKDho2Kk4tanK5C4e",
  "key17": "56AaNCBN9s2KSaPWyzmaZQMCREkEs7mKmQccB2v1mjfiBEabEqUus5HBNdG3MjfpWMwDAyFWbuVcoTHqCz47yG3h",
  "key18": "3Bj99ijkaQuEuBVs5tAGFQjE9CEm7Fh1NKEvkAxau8nFDFpKEu9MrVvwKZ4dLCRXTRE1Y1Q8zocQFYuybQY6dNzU",
  "key19": "uxF1wXtftu1ZqqeP2EmAYSpkRZND73d2yab7MPUscLfUcYdBeeQzPGXo4aJGQguz5kEyPBpe6aF2uHPfpq5vKmH",
  "key20": "5nAWzh85KDCNYCUKMGKm85mHmgAR6br9g8NjnSNtgMUy16AQXtPjAopmrukUKW4hfiAKztW291uEC4oZeKMCtveC",
  "key21": "4nA8Jc3pXm8ozNNSGXNxb4yZpF234NDKpbiXYP5T9DKWeXyhvcHCkW5PuHiz7b1fhknkZCKRLAWydv2b581ApF13",
  "key22": "25F28mz2Vhq8RecH3JDu2r8J77wvwax3cRx1rckM5L9WQ7Dm1SE7Fcjw2kP3182PMnRGjmjytLq8ponNM8TRYJKr",
  "key23": "5yf9arRJ17uZcWbngTKaBP4Es4EdK1VkEFYkygaEgM6jHTFQ6FQ6fjsDMGRVtvkX3BQJmACY98z2c2mL7ycTpXA3",
  "key24": "65f9DoioaWvxRBeiZ2NHcSkT1Hukq3SnwEngfyrZ2mxz5UaLbYfsZCAwfvjMvWEVVoyniiEYC7gbX5AY5HHrft7k",
  "key25": "4xGt1NW8yJHF5TsVmHpGeigksLLZDhfV9tAuEQ3nufaoFoNNsnAf36429Jxb8TAKJwNbb5hwujcj3mGY62J7nV1n",
  "key26": "3t83wzJbQemzMnxQ45rDicHWV3FGBMG9Ee6zGQRZLeZ2FLpttofXMvygTp2NLAfbUbj74uZXvThRrMcizrPgd6rQ",
  "key27": "23zHvd3hktEZKkGhwbt9DK16dp53nPdupWP3NCyDreHsozxpr3Lpu4pQ5ZCKFU3FmGcJggx3fvxRUwDvUGVKyGFB",
  "key28": "2MaYU5hVeWQMVfiSPqYsuSEni3aNLJVbNVRfQxjjB9sb7kVxDfEbbUyNPZs5dvCccH3rPX5jHsnNRdwT4MTqA12s",
  "key29": "2XxfLmoRPEKdDNm2B9kcm3G9TExwmBgWHCdACVHAuJe3sodYuumCYiN8i4QGaarAs6vM38JiRzPGhhHhsgaBJZ2d",
  "key30": "Vn62JFiPJArBCUybJrNPMcSL7sKQCQ5Axc3yWGyDXJwCRw7qL7U9Pxmz1aEusa5ctw78q9tyGzqJ6nxNmRAmUxY",
  "key31": "SaFaCWc8eUSELGFJuwCMxv9ErWZkuQDgrgc1NHim8zfuHNtxDwCTpJKKVB3mqf5W9EpgPSKTLm7yvt41HQWdwAh",
  "key32": "3LWF5PZZi84atMzEBP2FoVA3JuYZHtKyF5K1Nk5n9DhoGiMGEqEkUeeQ9HA4dYKWpbqZimYk7qex2UFdxXx2xjHM",
  "key33": "NCCjjaMZsyDjTVn7o6JaVwB8GEXxwwbs89uGTCYqX8d1ejKF5TYBcQGNTLYoptTjDgT13HMUxs2WpEeGkMboS2n",
  "key34": "3Ld32yoJ37TWHcDC8fBpU2aDvxemXKksr4Uwh1s3TDPfLNxBAKqoNEYDjvFQyC2xzC72pfGNNvdAvAo6Knghg3qC",
  "key35": "53xC1f2fLRiEjxybd8vUHXnuzjJW5f9s8mW4yBm4MpAJo1zCbVPuwVN9tjK1HB7t1EZ5uZfSLgmM6g5wxkuRa9xs",
  "key36": "5xmcpXw6GsNk5e41tm7Ppz6tMp9ZyJU9BF5VzWmvrg8rsPwNmRH43DkQFaSprBiMH7nasH9jCmeLSud8kmdwTFYc"
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
