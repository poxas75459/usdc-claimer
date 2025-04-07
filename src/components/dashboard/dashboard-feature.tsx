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
    "2H2ppvz3jCAEKPQq4feL7jz26655kYuSVVCErt1m2pKbK5UBuruMN19cdfggBwqGwhRsK8v1p4rtxoC2Zrk7WPzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXQSSSW78Pt7fRPqcdGDykYhuiYi8GHsw3W2kzNJ7tgN5ijcKkBRN1enToGbJESufr8u5JJhL4DtZfPbqd76pTS",
  "key1": "3CiuBHzEA7u2kVaBxe1xygQy3x35W9eAif58ize1zMnXYpSfUPbZBic7MHJBUhHDshYmESMhrqn7en9rd6ffVcHp",
  "key2": "5L4CmxNKhF3STwA4RWLvhqWofjAM9A1P42bZKMzbxRqEYhfDezQED6WsXsryUw58dsxzeF6wYzgD1aMM7fCTgKtu",
  "key3": "jsfPi4jBpNr1q1687BwA4y9DCaiF9uvoJt435uZojP8vnc1f6htkRTBmCde59n7hMpxrazSWv9HcLPdUnfiphb6",
  "key4": "4RyX4NvZMo5McCBVmCM3a2S9NTpxDQUT6BYBEG2vSJTdVhabhJDDpDwRBD5L12YNH9f66dYqAVtusXg4MspnDvbV",
  "key5": "4cM7JGrYjU52exboxEXFaGmymGfxjnewuL2tz5KFVJ3GgZqfCGZG8XC3eFvApUnMMByrPobSBiYioJBDHWhVrLPK",
  "key6": "41vQTdLSdygvjqRHQmshHxm8BCHCy4bR9K5a1zVC8ApHFYThDNwCx6abXXgGffH4sZcsdfLxiipvVeVJDioUJdAN",
  "key7": "59HAbm5iRfw3ntEs6RvXoFbdY4nFPNTzHNC2HmH15TApAEJR4gL6yWtqMQPn4BMkwYEwecC7u7bKyBHoayv328wM",
  "key8": "5wSChM46fjC7BEWrup2euPrMh9RzphMxQghjLi31TiprRjbf7KtV4in3Qe3EpFL9wh3vidMoukKQgT1ykdD75iQD",
  "key9": "5BXjdXcCLjh11Hdgof6Rzxbav2NcwNTopr6Eghs3ce2BC5dD2XmtJDcNwo2rZpcHvhhnfa9L8op1HH1T51iw1nsL",
  "key10": "2M11eeAAMruxshMabeUQbYzWhubZQap91HzwJorFeMgH7GhyGxCaqpq8VKmF4po2porLDHoerNRESV6p1KcddvSt",
  "key11": "4PFmbe16fRPVnBC4LVd2ggCg7YoSg6yBDEDg138c49wBj8NBQxqypHMKgWouc9BxJg4HqQyTFmKxyUWFAR7551wL",
  "key12": "4QjwVwJqjbQJciFGxvfYXdfBF1z7VYAjF57P1ZnrKQYJu6GuUeR8BRjs8TpmxgoydkHLZhMnPoYqxDxNhbFZCkeJ",
  "key13": "4jJQwkdsYKQRVeZJ4sA8vsw97F4w2M1UEqQP4utaKNsifYqrtL5dAwdmSC35SimUAGchgZdKQ8ZKrENbmnyPeme7",
  "key14": "2UiJHafetiZ5B2m6dupuYkeLAbKcUBDNMhdwppyESek8YtGop5U46NWtWjXJsaGiGZmcRfzzQveSEKD3S44PUtes",
  "key15": "3uf7NWin7bDEhXreXbU1bwtgiPr9VfgMSzfqT86ykXpSxCjLk9pL54rwJsttcYj1iw2cGYUvP4VDtJ8uugfK8zGG",
  "key16": "4KHA9eLkPmGjxbGmWZyMu4xTnFgMj5rvruhFxuZ4BANnSR36Q7WwmdCuJUdSNfN8xKmN22YZCuWFsJxoYBQG72SV",
  "key17": "3sNNU9vzTYBMZYpQN7jtP4jRpyyCCyASwyvwjDofuxHo7uLWL6w82HwUuNRTiuuyhAh8hp9atVmegyfsz26xyny8",
  "key18": "4fEkez4HUSW998wyhr3CWo8YFhXi9hMvHSMAMDy6r1azLkEdNGtVGubpeXFhrdhBqXhi11sYCP9QUxZ5kgEi8SAp",
  "key19": "2z2F7rWF6t2kdDW1a8UDadVh8QErEDSKsy3MSXA7rA7ThLXS4iBpqdK4wtefjbidgxGGFKJfXtr5b3y18opdZQuH",
  "key20": "5cwoQLJDCzU7aBJcw9zHBzGDPE3Fgzgvs8aekdqL6VYVcKsqnvagt8TvFDkjJGqDW7cgw9nSUP38uFxx4Uxy4w6y",
  "key21": "2iFi9agzviQC3WBuzsCrJXwtEAGGZsPtsLgfBBCd9hwBWsXm25xzoTN8sRJbKckLH91RNyn6i9VtDgQFxSDc4kRZ",
  "key22": "23oNJ4TTrYy6VboHHEjeqzJC4SAG9UWvvT3MVBCsRM96VvBFn9MfCR8xd8LwZt5VYDg9zthjgpATQGrtGHFqopgp",
  "key23": "DwrTvTuDpfcVEVhs9xU6TyrP1u3FoYU7wjT5wPhaTUjJwFVAdnZG7a8m3coLpSz64wSTn4PfUQFcZ6EMcQERFxd",
  "key24": "5J3tCRowSG8fcz5N3YrPC6MZRLiP7139s66yPf9BErhrMhUhBSWNfDoZm5YJoz74qabzxKmmYGrUikJy92TDKRv3",
  "key25": "3yx6af37m4Gt6rNo8qhzWTnPdshwjhT3UBZfGcsHiesSFuz7ZWEck6x8Pb1q5bSeGGQ649ygnWSKPh4uyXcsw1eG",
  "key26": "5mMcLQwfikpfrH7VzfBahy64E1ea6uRm1m7YxsorQyNErzdHgHrLqRV4XAzv8oppWL7FNj2AAUUu6xdnRQw4spzR",
  "key27": "3szQauoDUNeGzVBuVaiGvrAbrL4jfQP8hc2Unu8Bpk6vhtS7ohpC1NMUfkVt6UWLkhnW545cbf6nv4UbyGJqiyuY",
  "key28": "2fctYfeGNnF4QHnhdPPWk4oj6HEyqXRgs8iLymRRBxMC8tpAXiTmLrPVmrj1b4gkGmsRuqAN8yphPNMJVmnfYf9i",
  "key29": "5YHjB3cHK2dXhp7v5vNajA3LdF7xToDoKPnGon9dfVrsjkf88pRQhEz3jvYtHMNT4WRS2njjYUQaYLvAHKj5KrjB",
  "key30": "4Ntmkx5G72T4LmeLWYA3cQts7hpFua2RnUcdmdma3oq2Snj71XwNwfLbYqhfEHtKoUx5MqMyKA51pLybTQuPAb5j"
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
