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
    "5hsdRC5CJqgNoLwb7ikXyaFnb9AUfzRXGzYyy49gNxutKF4qoKzEAhRVKYtm6ismWQA3knZyYiLjzjGrZmtqajZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCBwUU6K2foHLpZfZBFhjNZwxZyjBbUmr9gECmq3a4qZz4wxT8BqQEGnTQoBhPsu5os24tVaUj8fbw8SVrhoxjS",
  "key1": "4tKVHT2UiByEMtrsN4v3nRvsSa7ZXhFxUoLWSvmuRCUnayCD2mxePNgvXEPTGDXkmDMg1Z5EEHoESunXjzQXivmQ",
  "key2": "H22EDqNpDtUECocCspsYNDsiXqbCxC9cjXWF9VncBvkA5MkKMYVohGZMZAP1rKZL1ewZxHBG4nCczBVTvgWdSMY",
  "key3": "4qBiihF9y6coSnasFkftAznfyGu3ZeVubaNAj8DZ2wnQ1AyJPNNu1CXXL5CFzmUZcWmAFSagXo8aUCzbo5VCsAs1",
  "key4": "2Fr9gPiRX3RrbqyvUqLNxDyHUsFGb9U8ZfmTxVuihH1gAth1L6PeKV8K3GhtvketRuR8yAc6F2y34jo2THZMMknT",
  "key5": "RYXtQLpQbaVvRFZVdX8S6gp764PN9jr6PPppPpLGLDK7L4UyGvrS1E4Rop1xRBPJDxKTUcAND59ENZLVx4u6CUd",
  "key6": "3T6XoEDWvcDqumXP6uGrrUqLoxoaV46UEZXoc97a4vVr97wCQGFE9kvr7qbX2GYz56C8by9AMKdJLMy2hbmdD1PF",
  "key7": "4zVWufBnK2MvXKjMzDG5ar7EJH9DVNkpGGj2K8o67vWkmCmmhynbgQMP2eavgp5NT2ZZzFHhM7CDVaCQUbK2Fo6z",
  "key8": "5K7bcPFoPXvPvH9qBVFNCrhXCRpcUYDnhgxueiZ3J9Rgmhr21Z9H6Mi5NCrvxZtxJLDigkWTZ7TJXVHxXVXe8xB3",
  "key9": "MrzHkG5X1rET1ZoGq8oCJ5nwMoEiLGCXo7HYrQxNSo6mq49vm3KsaP8xBopWjoyDWqhG341Po1mhuMQ8Dfa9jeb",
  "key10": "EHS1TULbiczRh7bgVVwHqeSQkhBoLd9Gqe5S3F6V8y1YauFwk7KQayPmpDJVSpG8EaAJ8WU9NmbJHBHoAvvBP4r",
  "key11": "2z7ax5uhLVmnDHzRPCovvnAgt7Yv2n1KbEpycBGbbP2fpRaQK4e3xzBuTWhVzCTdPgboKmqPLkW7sonjytMvhwXm",
  "key12": "BcrJeqXBZJzMJDkzQ4ZxGEJv2tA43Zotj1iTXS7x63zvKeHcePQb12TVEdDNKHDUiaN5PtjzcJvBNVDzFcwSrPB",
  "key13": "2gpXPLifbuusX3RWFRftPG9m2fyLnqeZqupABPu7qCcdfpveNeG9wKk8YTNEj7LiK8dkXLXutp65mN3VtTYm9Hi3",
  "key14": "yt7TFqYYMDimxNbS9LfhriMpvBFjbqHitnaSds9fcS3ifU4M1dDSbgubt73xfvE7RLbsApRorMzpQS3UJuq4uTa",
  "key15": "4TwxEfpk9sVhfstiAv8VTyQHemX4qNmFyqEWLcWMVuCTHvautvdU8f5UtJJKgnMndAQRDvjrdK7Aqpj4GmGAnRR2",
  "key16": "ipZ3sWwqrkvB4XpMcrXxfFLsyRyNbzsKP7L1iFgWpCHcnp6Dg6n917yFaDP2dwSBkzwtc9wBgNhuF2FPbmKJ3ga",
  "key17": "4ExBn35wgKjNHK4VaXdnqHnHC5fZBd72Px38aBiFRAGrMt8hfnCz4yxZqGgWGDHYsjJSvxDYkdck2FzDKrRW85UJ",
  "key18": "5zxXfJtsAJ8AqZ4B3hHRmgFstD8sKQAm7iSFDartRKw6tXVUs5J28WfyrqZL2Zj6zSEK2Cfp7kZFPWnGbu4czrGU",
  "key19": "29Ns8WwL2hVB85vkHw58pAifnbDSQ2gKaKDpemRfw2JBmWM3fvvJNTd8JpzzbuQ6DA2c2RkVFtCGSKAhhnq9XNTJ",
  "key20": "3Um1Vc3zCPd7gVJacPbh2NCtwNde4wB73fo4n5wZQ5ctgQb9Hr85u43GohNxvzzMyAfDXMccEYL27Q8qyR41ZLuy",
  "key21": "kKmTH7EHzZdSX7rqGkJZwtDSfdC9cUcEXM9fZiXSVHup12YUrC2rMDehzvLQpjo7kPvuuGi2Zxd2MSLMp9B2f94",
  "key22": "24ZLAbWhJnFyfPiNCdg8uehQUPDyrhDz3G9V9MYCejHBcZ7p8gqqphLpNB8PVtJHRDzUkPsZfYSbNHQkG3R5bW6K",
  "key23": "3mW87rKdCEx7WMZ4CPekniZBQPmxKA452zE46rhLtN89YDo1khYFbGGPT4E9Q99Q5Fhwhm1bfmSNU9eorfdbw3J",
  "key24": "fvop2a2qstkb15Tiv3S2g6yCSFy9JfEEHLXQretGPQyFoyKKeX7Q6S3jGqZToGRhWs3jCrpXkfmEycqF49zMcYa",
  "key25": "5RJWrJYyqfHJKnCHALtNo3dEzqQk3QwkTpQ2Xc9mv277Wfv9bmkupaoXNCGyvZEzXptxFbMDZoCSBxk2Ta2tjzr5",
  "key26": "2JXZ7m52Qzh6U6atGtP3PUNKkv9niwxfjbTjfxfJs8WHzQswv6fGB4qiqACUQsgLK7Y4UdwH4wgvMayaLSDwNWHL",
  "key27": "67DZo8BNoakruHdBM9qN7AoMvUmRXdyfhPGhA8Ehb6bPCGi11KE6kmbfuggFsBfNpXg2HMkrv8gkG21LdPySbyuy",
  "key28": "4G5yUrtibJrrro4AogaMoEZZSJp7i43VjNQ917TQqKRZX6B3Sw1Zn3kZifYc9n2CFPjcXgiSkGNnhC5tM984g8ps",
  "key29": "4n8at6XnHSR4NdUJwmxg5oVMJtNncTBotqZ1PnUxKtbjojohrFcwXqpKhQDgRNWZaL6dYqzKSuHPt61K22wT58E8",
  "key30": "beuim6ae1xatKkWnjGU3eTWWMh3NTHz2rRc82grs9AbGpChD8K4gQT8M9WdUdgFcHHrznB36MEuknbvvisPYipK",
  "key31": "2GtHxkeCuENDHtgCP9KUP5QaqAeffiVzbZ1dBjxTQqjQAAKfZYdzvsnvcGQnGb3L2LFbks984nAxUw7k47DcDaZw",
  "key32": "528gRmXL5zeNWZcXpjSUzhevmYEgoYJmM3v4FreFTPp9uEzE5dhwrEuR8UHzbazNwYuRxF67kDxFTC9XnLcSoUA6",
  "key33": "2KseruHstnwW7HqtucYTspJJUPfZbWiRHxyTLDFjkbiMxdcge5pEey3VRNt7Lz7a8NcrfA4jnusW5nu7niEJ4Xbj",
  "key34": "4RZCEv53z6wjdJkDPcrpmAdVyFYzujCdo7bP1siEJrH7Ghb2DLG9jPvHMrQxvPvL6xtL7zTNEJuufeRkJ59wSwH4",
  "key35": "5kG7irV4kkaEP8BSFwgYntbFib73H8B1pEn5fBRDKBPvfWcbZvWhx15DHoSS13HD3NYkTWk95BNHjckT5dvQdmFa",
  "key36": "2NMcowUpLhMMKtH2RitSbFLqQNPpDCwdySnHmemSFdzdAcaiABqYb1td33eUjMQg7KkAqM1bzvUe4XeRZThozYtS",
  "key37": "5ueFTeev2qPhuo9vkiuKHi2U37b9LaVubP2JXpPxsCVDjHP8Y6tz6nHHuh8HG7hxypvZ6dt6NBiW9TUnsKim15py",
  "key38": "4W4LDcTciimHssUqBSA86KFKVQUdM4ipSJQACVT48SufZgRVZ7eK1b1ikrowtgvPXAsJqjvy5qvhiuu4WF7bjdWx",
  "key39": "668CRZxjjoi3wbercMB2TvhpMv8hQ6rAUuQKTUw89khALNr4FdqKmqau6KgpQCBvJtZZG7mJvXmpeQ37kY9dc6U1",
  "key40": "4a5kEkVmuhkZ3xAvgyUG5uDuzN2ZE6YZDLZXQNWrGcF7CXJ1t99EAhPoQnZJssMj6AzAe3448EuSSgoWsEECehke"
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
