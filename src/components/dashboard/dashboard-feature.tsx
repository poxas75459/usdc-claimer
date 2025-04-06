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
    "53hKjLg7kWh7Mv99DjEGaw9cyw6sjTq8EidtKkbAMPbmQnVFedVWEsKHaaQ8dbowLZMuZYg2eV65vnvRZDCGuDQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TiFYubKAcKk4eDXZyHrcxU5bBoBFnDuY9neNpZqaphpE4N761gy6X7m3XLaDCHzGhojyS9Ktm6pEEAHowpSqhso",
  "key1": "2qPuZW1o9vkumGxCUP2X8TiJN426qnRzXJHTYifJyXsW7aCWsn4AU49V4GtLVt689kp4gZQjKUz5xcbggB4ieEKK",
  "key2": "Pa75cyzuiL7wH5GEqwwSME68xRf8NC9GXGW1XKVXa1KtT7nWJBMRDQqxcavPHSzaWYAwu5evnxPBxJP8PtjZCRT",
  "key3": "5ufCZNnUfotR3X87eZHiSnhHgZVrvLqm89JJMWHS87pKEtLhd2PnYmXZrEHtX3JuFGtCm72QceEbCeBLktgnH768",
  "key4": "2uicj6ezzxph4TnfETkc3KeKrQaL8hR2fxo4Drcyy9PgTH97Df7xUbCKoYV6vzXjUY6EfMeZ8HLn6DYeAjDirs7",
  "key5": "5qPM44EGA3hFYWV3H8DpzZKR52K1G3V5i9eS45vAXpkc1krDZjgLC1kBmWQfja3CFer2JRYnQnM6wrfhKUaE1hQd",
  "key6": "3odDV8fdqjdynndPtqbUtD8xBUUG7pKd5CrF3HpbaesoSENr1qLn53mCW7NSjCUyrQ5hg7GRyKSak2vr9kTEAHKU",
  "key7": "L24pPzgrhN9Dt2LGhjMPooGERVTG4xJcWyhuySaCvY24T2AXyufCu44SumgDW7raH8yGGKEJkvKKpf1eRv4YKR3",
  "key8": "xcTCKeMXwDzDEffUTrUdtNJf4S5JS49HtCpr4LW44sNjwHJRkLf2sS8Qufc1ciXQbpA7skLKjzyuFYmsKTzSRAV",
  "key9": "3FmvV7rrVd9iBaMjEN7KgV6qc6Z6M1te9rtGWDjRGcygiKBDXFZ4vombA9aG6LD8BR56siHDuymMYJuxH9XCSUpW",
  "key10": "5RofDBp7Mg1GmnAgRgqTuPnCLp3UmjB8DZVt4KTG1o3C5Dp5SABQjywokiPAQQYEX8QwUMtedZ8Exqo7MqN8Mc6J",
  "key11": "K53qEVupGXrzprCYzUnVSvrQZNsRNKHaW53zFtmPuq6KCU2kpTK43DeFkAYGbtkNWwryEvcJBGG148F1Kvfz6Pp",
  "key12": "3rn7X1mnQE1PjRpgf1JpVZc7qfcrarSZ7cZmKYt1tU6YQeYfPJFLpdPYW3iDfTkJDELzdZcW3MKSv6oKeQhr3vTr",
  "key13": "2L4haaR974b3eMT9A1iMireeCxdwNhxyRoz73A7DvW9uv7p5j8VdMY8mjUqs5pxXiqyLUHph7n6ZuACqNTr9U4iE",
  "key14": "2xnaZE2pQ2QXRkHLYF3MPeCXCxfBoALyjHH15iasxJprnoqqfWpvcVShnY1Vt9DAEqxHmUrtnYNkEBvgs6Mamxmo",
  "key15": "3YfS2F1kwyCm3jDEyU6N6hmess4mVUdTr5akaLLnkmeptDkNbDeChbwCFYu9zsQMoRAVLH1CLBZXQE8EnJGbXwSD",
  "key16": "LAVyggTePnouZ9qggbMzKgNaJYM2RwbPqL37n1bteui757pTHkjJJwKNEgCvrRkYYcPMv518uJtyGce8aV3ZYuk",
  "key17": "2xd27vakZj4zWCuPoycXhpW5KLv5opzSM4oDqt3ATvrbTM2sexDmUWxK3pestyRdxKsn8gJ8RTHzh5SoaRKP2dhW",
  "key18": "52avjQMdusq9jxDb8v7qjzM7J4s6kc7KkMo95EXW9R4XD4yw2ZMqM4jT8Yk99CP4SgrZXvptD486SKku7o69KgBY",
  "key19": "3PsW4Y4H6CN1aobhgpdCqS1J8Q1qzqW9qpdqdBZLkkQjRStJCEUUcm9E6RZL6fDVGo6QYyykDGSv2Q9NiHJdGfMp",
  "key20": "5YhAj4V8zM6xmLXYCo1buwyNyDDvyRsbh3ZJ84omJRVhbH9m26stWdtHGy7Nhu34FjvT24Hzr4Nb8NU7Jk6CJdco",
  "key21": "2KrN2zx8aeZktVQb1pjErN4ZecFZooeNsP1UTHfQe6mafobbs9XJrRFUcnwQm3HARjHEXMxssYjZRf9aBAtfSpQj",
  "key22": "4Lt6Wb556xKc5pbENEBeipXEVtMWYhJCvsNSB9CsmsyJJxvJQbok2egY5dGNjxfKB58ZQZYBMqhXQDFMNoHz9Cv8",
  "key23": "m5537QpMTvPMPLxrq4eAqYQep5vJFyi7E2gxUBzxGsQWhQY6AxRENxMyqWpQE9ZXbn5GXs5CRU8rwZ38mraCLPw",
  "key24": "GsQfyNDrfBfjWB6QEoJ64picQHefvUKXmm4tvVoS6Wbypdm5paHjkq3L1bDhFeiyXsHcGNEbEpwBrSvbsYqXhji",
  "key25": "4DxKYLCsVVmtE1R6F3FNSqgYzAeoFfBrUEHCMrWX94fawr7PajFzpwox6BrAD6yvAQM5oECFZfVwg9aC5ZygYtvN",
  "key26": "weDUAKpMxWPqTW3rqfvytwLsTL7GfC76ZBp6xXfJcEjfFWdpuFGU9NxFZnCG6Ui1abm5ViApqqQuCw2DjM5hvgD",
  "key27": "w1WoVFFYcjESKbjobTNoky6C1DihCmoJLstTSwfPumg2JPSu6x1VXSmHCMB8qmEVXuicvFQi6FvAHUUvWE253Cg",
  "key28": "46toHRdxwJgCYmLBJkKiTMvF8zbQsLsWd4GLs1Sf9ZZStMRSgSidZnRnQNi2WiZarR2HSk94nhAsv8YofW37R7Wr",
  "key29": "2DgVi5fv7XUJTzY5yrZoszSThKfdxBx1QCZfEQ88KiYF6kAx22fB9ihLu7oQDyWLJMDJFWVWQgRhGkfHjPTny7M2",
  "key30": "5YGGGkyXctK4gMk2zt2E1LTDaP3BVtSLquH8LggrS8mgJpKm5e8VunMtY5Ek5z7UtQDyci5UrLBiFZpuoHw6RWaq",
  "key31": "37QULuLfB11myfXf7cXxUR84jARKpwnPS4PSgUzTYbjsStufEHLV1bLnxSTg76UY3rZbjfaWCC3wKM4iyUfD3atZ",
  "key32": "Sx2XmZeYzwUzY2pz2VqDJQagYfXKqKEQRUtU1tzU97amP3qqrqZbiumf8F5i6SoZWsUz1mgMrF6s8qDdotUN7SM",
  "key33": "2PcE6cCD7ag4Z1tSw4s25yzY9DqSC6w7TvpRSaLhbifuwqYBvJ6gK1gUvXMVoEvcdvPoiaU1AZTBdYbnqBnTBXtb"
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
