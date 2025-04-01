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
    "4gdszZcWup2SopeGWgLcWkJASwQ6KxmS9FPY26GWCnkihhhdUwkF47v9mUrMkLu44NDmSPfXLQqLGfGF9Zh6EAWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZTMckeLaYW9wTraTyKCfA5XbJoNottwhAowfNQuRnX4pCUhGSz1SgVtnfoVz7si11JDMnfQwsadr4JkyTUVTwP",
  "key1": "w4JcKHYEgok6YjanCXKsxJGSFsUiEU5mHowSUW2vCdiVDqXGqViSvMPTjkijQJoKGPiwaRchArrBEXQ8wXmEHwz",
  "key2": "32S7unDLPQKhx8zt93F6a9FNf4nWei7QNivt6MSSVEULui25Em4g3ZjKA3fkfyTdqRniBCw7hz4codu2qrpSb2DC",
  "key3": "sM73n5x9ReFo5yYAMTw9KfAKaD5z95dJDjzTWjy6HtK6ftJ3DT46vMJn8uKGz4cpVEzmG1jqzMsRDvrfoBXdmXV",
  "key4": "5zic89f4gmgScUNjn9pBgv7VC2vp4MAfjfoypBXK1ypdvSi52q7H63kYmS5Hgm883VbzouTbheG3vQMfc3WfuXv7",
  "key5": "3uqjb6yzEQrDQaE7iPyyZr9FgnuT9TaJsRXiskZENQAbAh4zJdPBERyi5Z7Ddx9k3WiDnJQ6qhnigBmQEDYgdXaZ",
  "key6": "39dYmkVpV11fqsPWoV2AkK7UBWxXuEikuHL23GaBnySRVgcn76V3QHBNsRq1xFu6m4kokBSKR8oz4p11pmDH5Ahj",
  "key7": "3PY9WENynFtiWZhk34P2FfsVyoRQe6T6LsHWHTXKhm7LzrwKbPVfJB7aAiHQiiVvE1Y2qsgGsGUXXZTzz2SRVeR2",
  "key8": "5NmBfrKZiysHxqkRYqYMfExU7W1iZSMcitoZrZHfXxeaVW8N9ypchv8sav3GKdvcdW22fDUjB2XuoAQF84E7ZmDM",
  "key9": "39sr4TyPQGiAC4SY93ai2SRW4vi3kVWs2tLgnQx4hFWmEbHMBL1bouYWkYvEe938gdmQZMBfJzp1b61saY3QPtqG",
  "key10": "3tKFThBM5SUJAe8JP4hCN8iwTUjbis1pULaVYxmqH72CLqLGn7GHZWNMQyduf8vaMzTsXCLjdaVJqi4x65icpfa3",
  "key11": "4zs4vCyUe8NmpScTV5seQu9NhC48Kb6SPSQXjHzzn1AtexY1Z2nNnbwmqE3KrMbf9b7Nt4LRe9bgVvuZgnfd7WiZ",
  "key12": "zYMPQJtksMFU6qQZgtuUzxV46CnRjkioQV3f4CPnq2N4SdmEbeDmZ2ZawfEPgS6eCz9wGDiRACUQsFsqiX7iSGo",
  "key13": "2skx61SeiZmLxtBp1jUYffLu3xu13jz6Wfn2hhhMiPn27rwPCYYVUtS7swkh725KbA7H3r5N5keghnUXNpbX7de2",
  "key14": "sP2pE1iJyNQrZk6BnV9VirmetEP6vbwLK2vwNouTNAoQxPR2qaucrcsxTjXnPCFdjGsjWRua8kpt6mVxRF3ThLC",
  "key15": "5MjdrQ9fNdJUKRAtCC99JPvbjdTE3D7YFkRwtY9qetKNGMJdYwjkXy3AtQC2yqYrKBeWXWufBhnhx5b7Yr5C2Txq",
  "key16": "4wTxYUGXwyTnhccvpGAkKh3MLNJEATexnwhxQr6MjG8G8pwDFrFhaCWBKVhTNsDeQ9n8yvWFq3ZPropPzAQxDGxN",
  "key17": "4wcSfYd84uPcu3Bns9LEGBc3JBU8Jxkw7oWKGd9yDCow8BFS8USehGS27mipee1EN5GGZ6auf3Yxh2Xv7rmu8eYK",
  "key18": "5qddiQAFKbemm5wxusDxRZJ8g6jEYbHEzbEc8P8BJVbBzr5suz43UCwjb9Eqk7QWTzJuHy4pF3WjXgP53Zy6UtDd",
  "key19": "kXwB8Sv9gZy5XLrSwDuJopxLzuJnkZcRQ7yyHC1GxbMzetPv4BMGEdKYgk5snQifTBYWsim4BH1y89nPjUw83eE",
  "key20": "5SmRU4fxC1mXqk5rAtbgF34WqS1A1pwEie7qRsb9CPWYxhE6ha9yeFpVuRiKKMGcPDDVZ148UwPDMCjH1AHb6jyk",
  "key21": "2jX18gezQUGJp1mQWvSa8szQSQs3GW6K9K2au4aFa6R3SBET8iTpr1aWous1GMtqH49eeG9gJcQTFxV2eWszQTZx",
  "key22": "3wMcuUFTykx3a1TiRTu5Rk4K7Z813rbh7cPkxRC4B7CCaz9wncoN9HPUzKx8KVKDpA7sSZScnN5H3TVCBzN55Fo7",
  "key23": "5b8MQ8DLDjJCqVa3SsMt7mgNxb4v9bhfEkphxFuQVwhV4fM9hLKHHP8snizVVao5DSkvaRvhqTV2mUyHyWPHAn5Q",
  "key24": "3xiKWex55HeashXFw7ibs2w581tzSDf6RG2yVWGJzMi7BAMLhfFu5ucTbvqoMKFjjNo3AhtMfb8UG5PRRduNTyv1",
  "key25": "Sk6m3qJ5SZoSryKcFjp6GLikxcg8Gaz1ya3oyjH4z4nAndZ5obZyxGiabRQzCwmh64PUresk3rXAh6m8p1i8mZH",
  "key26": "63Dd1t73zMoLXnLsS5zuVHzsfojjKQASVeQG52j2J7s91Z3scv2CXKyLRadmaaMwaKnJuCGwcepaVnHhXydHyEqP",
  "key27": "3JPR7MJyZrvgMEa6wWQi5EuUpMAF2g7y2M4TCjT5Wj9LuCfa6D3psaAwRUBqShbyZuP6Lxy1K4hpco1enNB3FJjr",
  "key28": "5PwJXPJM2mx5qZuAeFTUHoDVEbci3SXieEtBQtYEqoRgKQeXEmipVqUouGgDmHXA9gXnHPNRWsRrqKbypA8DzvBH",
  "key29": "2gCAy1co7SkxAtUsdruDjNmu3LjMGWx5pTjvDQinooomJZMuE6WBroD9QU7ns5AePBnMy7V4RQkPrGwGHE1ezDuJ",
  "key30": "2kuqYd44iNmUEF2kDdtVrKcU1gsocfWbHq3hG8J3sXmQXJY9nqZkudPBhXsDKbwVGbWGUZtX38hu9j2FNa3EdoBP",
  "key31": "5Exkh42PX3AE7LhYBHFu6ixjjierixH1TatQ1ezwjBF4bgGTzhtCWaXP2FrspvbJjHaz5yBfgcVB9Ai41auH5zAU",
  "key32": "4VdTcgUm1EppEDV9ZqdugRk2647FED5D7KMRqiyixykeaZp4xGsr77nDXN3pJquuZvdFen3oD8Ua5g6UC9omMQ46",
  "key33": "4aq3QJ4gxGjrtwuNMPhhVGwg7yhH7n4Tngub25aCqayrdZorALTqLFnpb7iwSLYbf4wrRcRYZrzFwbwWbBjUnES9",
  "key34": "Xav7jsE5zbHfaJuW3ecJxceYgtJRvqwwhjydGSbxe6Y7TasrvziSJVPTgGpcVBCL5Mq5HcCcw7h65cS21pKYJan",
  "key35": "4T7esqKrhrJFuASBjLswEFiLx6baz8GcpNsrQ6F9PSRvMMEDezNezyFnuJv6EGzGi2eYAwrRbfn5xC1ceRUwbcr5",
  "key36": "2FhGdnUpnBtrNeH2QwS4hnnPX662GF1NqNTq1iN5F85WqMjVr4zqECm6bgJF21ZaSHCrLG76Ezus1t8SNr3dQoj9",
  "key37": "8BwVKAVLthq6n5TDSSdX4oyLKoGRUdSn8q4hHBfK3W4ASZapuUBVVvFpdZpzqHjtgdsQZYjYecTv48nXxhVZSig",
  "key38": "2hqRWp9N4CwrNaumDfuDS3PTQBoUGj1YfbZ1MmB6UDAdbMZmKkYqCmg9tVuknWZLFfV3NwRUSv9TTuFpP2znSnza",
  "key39": "3fz4UtqHckzMM8uoNY91CGe59HQeXNCktQD6WC2Wz7jKJzA31m7Lr7kB3Cyn7whbQ5bga8PeCaxAwH5ov62P3YoX",
  "key40": "4v95iVadD6KmnoahEuVGvtHjPjmxmbgkqqhH6S1xxXqiyEGwoLvTgd3h4GjyDydA8eS5znvxjfdPL9KeKKqsisdR",
  "key41": "312xnWGGT7rFtidZwXATfienQ3Eo7GeKx8sYCKGnVRTXpQmgV8zaRgsA2ZEYPMbHsAaKYUgSLgHPz8yMA1ikF9nv",
  "key42": "52KcNgeWgp23Tcuu3gkDYMVrmQ2PnV9Ybrifxwoy7StrZWqigKXs4a9y4S2tJGeV5YmnaDsDcNVDLxMmA3knXU7k",
  "key43": "3KB6XSKXetQz6KbL7iXaHqfq7MtzeKTPDa8MSbMZP753rSvwkXnp3WTxtJTHTGEBBLDi37tXFbe17HZGCesxJnGz",
  "key44": "4mp2wruDETJb64bNBkgU5iGFMxrepgMwuDwCvx5Bp4vUfhUFmQwjUu7WCs5MGv4rUa9bi5AhL5V3dVFa6ur4EcXZ",
  "key45": "5vPAHUQTXWtvLDJnAzpZZFpwHvXAPUWeGNMiGxdnSMEzqXiM65pAMCXMe1sEvtVAK5aCqySKtFMEpKe8Pv1uMVu8"
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
