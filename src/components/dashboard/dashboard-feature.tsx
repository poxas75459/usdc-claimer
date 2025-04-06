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
    "5UHxreBbPrqXFRFeqcLniFT55A1v2zaMtdykigAVc6FYKqW9Ytia88eAgd1TDoeJekmYoNUrv38nBYrxoP9EzX3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aa3AGCh42q4zdkf36dFYE31ZNHsXpXEzkv9R7bceEaNeDQaFnxaaV8vjnRM7ijZtMTQGDgqZwaf5xZrUsXSDXpZ",
  "key1": "3kVcehzgrzbTBbHuxPL7QKS4HyByrqXvqGxAtKFo1VHMZqnySgQUaqAsr4Jwa5CLSJRkFU3tHZK6Mepg9iEQrc9D",
  "key2": "5MCuUPbMvtdFWRnbSEeuaEkbhWJUD8ooSZtqsGs6y47kJdjsDxzjUFZ23f2TDuD5kDw3CcgMiAneXqpeHRBLwjaD",
  "key3": "3cRbxA9uX4a9Gi7oPGuEmtR1XXPQ2rwaS3fpgfHfhP6EVKqN48NG1Dvtmiu94fq11QNwqXRbUVjucRTFpKznQQF4",
  "key4": "2VqPJpJvXkqz7LTNQTFumA7PbQ7qH4YE94EioPYLUMY65KPm7HGvaeKE3ZwE9Q3rWyzJSzXFum9z1d11eKmqr239",
  "key5": "y6suaf8GQFtDCCBWBRP8itQefppQ4HHKaz8NFHtpYycnSkRSjqsyQ4gG96hTvALyWGWXxruXvE7Q2956ZpT1FMT",
  "key6": "49zaQFEgmQcLhYmejZzjnt5hveeSobwyWn91mjmg4Ng2T7cKwqPhKMu9JxfDhs5G1NhdSdWBwrp2GVzLKtWDxxVw",
  "key7": "44QXsbyXyYihN8HTfM9aA2LGsB3N2TTEyYo8TM7LixLacNsuwEjQfecf195hTMeaLjUJDfp6E1UP7cAeRwc1SCQA",
  "key8": "5rDjLZppeDgUNk8rjvwkjk6tHgBmTn9vinQ93wzjAhv3mddB66HzbvdZPiqUfiDZLsppEAhYPB9fE6vGxpXhCJsF",
  "key9": "MwrH6miQXxQ1TCUeJq51dWdxqWJHJoQopvuN66N6UegNWoXN9isd97jJCbPmEeiB1at89yTXRrsw7BygFTt6gd2",
  "key10": "5yXBFmTvbx7gnExAQLXvJ8qLBUGtXZtUBHzJ7G5DjxuXeNDwZnqwASGMo3kCQvNPKBqhYiDPiDozh4wKymGLTxSe",
  "key11": "3FNZBpJnaHmF2TUF8UYj6wWns9fSDoxukAnjgXjW851cAmktCd2FQGDL7kEwvWGhRVBdoCxtmdwwjmx8TrSzCTPw",
  "key12": "3N3frjYGdKnDzJjgXS22DHChCZubZ1aBUtakxMVAvLceWW8vMzhTffWvBCbvTgTb6uqfB9g6SbTCJRtF9ATMFuKM",
  "key13": "AdS7chsZYhiseZpoWj4ZFJeCSwJY4JVnwqHXnc4vDnTqE2YKwktshWsYX4q6LbKZmG5Zj2dG6R7M4qp34i7Qdo8",
  "key14": "3AA52wgy3ijLxE1y6RmUqifjY1Xzd8a5vL9Zo883BEbr21egNNhJEa4e3wEoGiZkQjrRuiAwMxyLcjZ2usGrFQ7F",
  "key15": "4TfWnP9EThLpe6QV9Ag1JdSazwkvKqaRfN2kYZ931oRZTA145xEZezoyL22XTrURUnMmEonKitGmh8aCMthyL6kd",
  "key16": "5oJrZEUqiXii59gdJBD9ZANZpC82v5X36FrsRVZsr1ymM1hMat3ZSdGLgYvbEm6DyESkNhspDm5AZTAYvKsTdTx5",
  "key17": "2cEdYBZZqj8Z3WmSBfbFb8qwBcTGbXEu2axNfbqQBNyA5GoicoY1TT25wU5uwY77PB86MJrxepJaf6Uv8mUZBLAV",
  "key18": "53qqT4v9EzEbuFhC5iSkydfjbdAwQavSE2G2MrcYWbZTwdrysYhFR9fU27GQ5HPSrGBn5bSNQP9EWt3NTxDyuVfN",
  "key19": "48nLkDrGatzGYSw1qzazL4n1kHDAn66mbCz13paLna5Eazs4M2Bh6mJoLu9EH9rRFxJtTcMudtXfWKLea8udbNQG",
  "key20": "BhvNUddEobueXedn1UzfXRzCED3JPdV5HXg54BAhqL2GC8XnDAJEDv5KXLp3bSJ5uHwDjQpNSfTkLJ8m1Nv2Np8",
  "key21": "3R3uwyAFj9TDi2bxrmtxQ9kBaJTksmyja5zhMecEXnLJxtTQg92JuCqHjzJ8eKrHTBkoy9d72RfYDrmE2X4Rszpj",
  "key22": "2sCgve2Rr7UbaE1mJ33bXoRagBn1hPwg18BV5KbsCBbLP9tFaztQzQodJnC422FirRJjV4zotYqLtxqE6M8719x1",
  "key23": "3h1z2snQ7TaYQUdi6EHf3jM2KyD22P2BoNTfcRXz99jptCNKq2sjaqC7EfphoaBAVRbZidHvTaHSRggxa3gT6y1u",
  "key24": "4mfNUWeZERVef3zzpPoLoKyddSc9eoEoF98r1jGks3uUU4QSJXL1u8gcbYUvn6SJnt3pVom612sU1HMiy1FgV9zq",
  "key25": "2zc8GuydQjjGfiDynsH63dzUUJUsWt1DTsVCpSfPdqHfqhRqnuq4wSovrEJNRx4ds6teUGnaVriBW19wEgi6dhfU",
  "key26": "q3gS9kkWTLrFyW5aRYk4spzvvDVrBA3AsyDkSXCVqZXQ3dVuktPXVrufoDkyjMBM3Eqf9kG1KJ22xuQPLgAtpGB",
  "key27": "4wRG7gMYLyXGdiBPrPFx9kQWUwLofBAJXx51gp2L7dvTgaAv9LFayTiit49iBNSYkHqKW8PRA81mNuvKZtea24KC",
  "key28": "3iGHX6vj2pGxYkhUwGNMwj5DR3feGTSp6ufSVqDExnn3qMQ2M1v9w9K8nYEshryVcHiPxZdvBiBWpGJh3QHTfYFc"
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
