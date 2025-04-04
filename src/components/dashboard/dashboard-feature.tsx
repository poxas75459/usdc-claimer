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
    "pe31jjaoReEuWGSQAwJ57B78UQnkKvfQoTMmvUjtrEv8fohaPrtibskqz47opT88KoR9zC8VTPUC9VP5STXEBYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PBZgSR45a84zwuuXMnuHoSGTGkzxqEr27RdUtwQP8qujFfCM541qeARQi7bRkiWNBUQ8TUSMyzyRZEbSfqTAvbR",
  "key1": "VHKVptwpzmueFqthcKu1V3hZzLqyu1cVwip8nyGqowdavNVYCxWqyRRpaezeU3YJgx1WeLEkz24Dkpei42D7Mpw",
  "key2": "674LgwduNPB8wkecHakQk3wHcPBofiW2EirQEW5fHAsxThCajWBv1cVZcpazCJFNBLQxoRrs8acaX8W4BGPQ6i1g",
  "key3": "3goAkw21fUmacvhrryFiedfbrJMAg6SNZX7L1Qocecfy7jGwBcDDE1ekRAdd79ajDS9iXFEv8zNwvU8aN7r9Hwam",
  "key4": "3xGBSP18pWfa7H7soEjPCXTnZy5hbdFSnycy78X4hrg3nzefATMrp7GqWrHsBiXhSLeYTHt7baFGwnYcZggTuTfy",
  "key5": "3kjrkQ5qaXiJ7AkrtoZGMoQssSViUKqGSmjfEcKdgKK9pFocbHJ8TsA7k22a9s9w18NnoVSWVPdCNGvYMofkNQSo",
  "key6": "5MP8Q25jN3sCAaWj1u65jstoPkoJiejWpdCT7tm6wviYSwjt3bCS9axuojLHS1m1nQuHuXvDW2gqZngNj6cjo1BB",
  "key7": "4qeeszaRi3832ticEpKwBfkqwQharV6yScQ9J5jRvZgNKrjHfJtCYnQUzVwLvSCxQFBUQfFuoEp6dxEXDmfPJVHc",
  "key8": "3U1eMcF2mMJ5GGPrAQuk5qnN3hsC6KrdGErqFiA6Cm6hRRi5M8vt46GocwpwU7F7GQrU3CN4f8XK8AyMobf4Q5RV",
  "key9": "4RBJV7PsnXoPBWvBY3qvLg8B2PEHaNxVibMgBjSAUFwH7YNb99M46UwhPqL8Dz2yYmB4cW3YPHHr3BLjqx3S7t4V",
  "key10": "4pdYSfNfNrePWrBVVs1bUU8Cy5brzLrsMoGd11mMUxXNUHd9qgsw4dBGxq7vpyUCz7wMmGEVkpJrd6kcdBEJqWdZ",
  "key11": "32yogMxHH1T7jUhSCBPTmP2p5Z1jyA27Zhb5yqpxmnnYAQEd7v7A5LoB5MNNd85TU7bxVKLV1KoiSf8PWhHhxZ55",
  "key12": "2GgEi7kpQ6GF5ct3nEtygaNXGgeNXYxEbiYw2sfap3dez2KuDnitdC776keJ9Px3G7dwnaBtn2XTHt48Qm5afpuF",
  "key13": "4yPx4cBGiEGo2PY76ikzmbVxywrk6cxonjuFaKvfEv4pzSRmtUPBWH7SChMectkrrVvxbc4RfHa2kzWUvTnd1G5k",
  "key14": "64EnGwXEd4k5MkBmWXTuF3tMhmRH4ix9hr8rCyaY9bYdJ65AFVfc9EeuXdpTSnd6M6qvSQ1ZwWLFiALT4JRDgctd",
  "key15": "4uWyrU3XJ2q3SRWSNJhFaZfuuVgyAdhue5rZJEzS6poFU2h3ZNuP3T4JZuFnXPvPRMxDPPsCGGoWZkQ13gdNbFX8",
  "key16": "228v6Xn39aCjndRpde5S7G3KGzfDKFPr24Bdz3aYUEhs589pGjVJ7d5QigKsrNAKCm15wLhNiP8mk9yhXfLXMXZK",
  "key17": "4rvaVBxpPb7p966RzPYBYjaMRNNaKn9kFS23bYxZg3GPAQefwAfDPAo8ZtE9dyJ8L2uY2aEXU1pbe7dTusEsePdL",
  "key18": "ikxN2UjkemrKvmGH8VrsauGh8hJ5JTbRx5CU9W8adgxeNKBCUb68jJfMT3a3KRANQCcv1CLMXcxVkneRvF9c8Kd",
  "key19": "3uyuxvmKXDkcpfzK4e5FfTr9RAxmo3UjRHkjnD6SxGXRKjRHKjP9UcgLSsq9fUYhBkQ9HqUHiPspj6qECgedc7KU",
  "key20": "2YhNRCUoXnQfcVRgRkgdbFEvegtPmA8BqtqvkhipsJobQ6GJtXqg2D8Z4KBdM1ZAHkiavg7VnK2AmmrCEMiyksSD",
  "key21": "2XzjpZZXqeEXrbXye8fb6cPrasyZq6E9HBvzJyfYYy3CNNDxqckjrRP57mSANN9VycEXCQz6kw83R5KNG9HwxD2f",
  "key22": "36iEGzgKx1ohgdEhQeBFUkb9REXYNANFaMDAVyW4QbwMJ6MofDMBcbWynsNsu6MxunT36Y3UFFdkHyQGBcMzHtef",
  "key23": "2BBhcbQcPoiWfLEzhTbsJEGf94siGU18jt7zQNMhNSth4zkevwNGg59LWfWCVZFs254Xj9s3hLpEEe2wqz4LiNCj",
  "key24": "c8YLThrvZ825LwLe5souivujmCprw6wFC9RoNWomFQbFV5pJ7TWG3WJKJBpMV3NvFRFFxa96GSXMcJ8YDrfDpoX",
  "key25": "HT5Z9UJAbk2pZNJMUoy57DZfXgZXEdbv4sdZTducV8qGqJkWX8iiRATjSkmz2ga5UY5s4v8r8stCrv9ptaCBWjW",
  "key26": "3Ggp2VwR86Q2PG4aJForg5G9hKX6mbHKTYEgR6FfAZA1k788SDW8xkkEwNJXif5Wk5boTkmkrV3u7cZkeSX6zmgd",
  "key27": "4LJGUcAELsDtsvB2JWEu5BLtqADDpptFppu58TBZYhswXJqaVWcMtGhZ3mqys4yRBze5FNrzVRGQoTJk74H2vLtH",
  "key28": "3qvmf7STTxsbP9kY3PbUzM9pBj1X8vH5TpDXqa9fzPyszMTRmGCDisAk9Ah2kD1g5UC1Ld2Kvw7hXqFRoBCV4VV8",
  "key29": "2coMLp4NJZdnPefrw27PjAyaBnvtsVQvWRnxXNwkX3mz7Eu6PfRJNfuCA2ksQLzZvjS91RNLMGTWFQs5aAsMJ3JV",
  "key30": "226X6LFskoQ7PuxwxRo7BEYwNQJDYHnSAMqWrojmoJVEUGSADLHExtPSobzg8Tv5rzzApsKo8EZBZ7iqPVXe2TQ1",
  "key31": "2qhGKuszBCJ6sE5otJRYrTReh6EsakVWuwYbhtEzttsyKqN9Evhx7DCb4RDcbdBvffDToGEz3Q1BHMvbvCBwdYQ1",
  "key32": "3Wykzcjnczsi8oPEPPrSKzWDWcgTjNpEAWHpfapPN5QCNMyTEPvyHGGPgCiFjzFpKpHnh7Vr7hTF7txM1HFSikmn",
  "key33": "3CLZgvZufC6DVwyQD2hBnQN9PvnFGiaCqvqUAYKvp6BSox9eNLkgokhcB1FNU9gU1jaeyKMwkhkGroTBw8Psu5Qc",
  "key34": "VEfHuPsQLEJXgqUe1tMGbYdFm8Bb57QFkkydxY1Ezg5GmjsD3ZMAFtHPc17teTS2SesgiTM13dZmaqKdyuQRn9F",
  "key35": "3H4uiUHJGCCZp7Mdup3nPvoX4Yjp1EncVyvPdfpbzedPoqYYtRAHEGnhWir3U9AsSiyyHTpkK5ZLckUZZUS7J9P4",
  "key36": "FoxcY9iLnRubo4ycekwfG25aJ7v3ydJqWYJ7ZZKWnRSCGzWWbZF6VDHeuZVbvsyCaQ38Dn5fjj7nKQGnuRGfqPQ",
  "key37": "N7xLCxsncATkymwnSYSAWicwTDQcCD5AwbZ5vcC2FwBMDBi1Y7jhyK6PrcB7iVvt8mhtpripZRsorcxx33rbamQ",
  "key38": "4w7S2zrx12iqUqGodyenJd3iGTrhciEjDvSMZztVjBBftmQ6FYJufCRzHywUi4Ks5E5GRKmHiCaCjd9vqMKVgCne",
  "key39": "3LivUBAsaAAKCeHjCzhbWYkK2LUzCmwan9cpvrW1kEA3VimKcfGzercpDKBKWXtzvrCfjo8UaqqA87WBnwC9GVbq",
  "key40": "2NRCt1iYHwMRUNZsVGu2FUc51RvmgUg6r3wLKFDMW3wwfGgsV11SmPqvrEvdooctgG3wCdtyxKZT2ywfMaXPZd1"
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
