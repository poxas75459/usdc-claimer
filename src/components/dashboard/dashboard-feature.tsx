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
    "3KChHJRNKfbMuXTDYDhRT2vqzYJfeaFtTqGn1K4nHhs5CM9A2MnRu9K4M2emQ2geFF2JTLcgvQ64jqf97hyed2jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHFM5ZseHPpod4Tj6xYEg5Fsq32z33QspE4aTF4r96tTJuRkf45XkqHFwWZNRTJTxnoj5UuoEUXeR3L8bUQSpee",
  "key1": "5hvkrkf6K7tHuANFtRhdS238RuEKJHXMtwyNdgjnun4qd6WnC3RJy9AzrnBz5b3qQZTQnh1r98qrpGwN7KCXJaxX",
  "key2": "3cgKHTFtHxAHt2beA4EzeoYFoVUQCMSV2BYFLfJgp8UPRRffkt9rN3wqTNwGdSPNHRZw98HoQkz7JNUphboYysf5",
  "key3": "4sN2LZ3LEAHAZvESfujhdfhD6Byg1bdzqh4C3n57LdSSc3F8DaunYRjnKoWboE44YEfM6oq7TsKX2ZHVW16ASkdz",
  "key4": "42adeJEpT8Ad7NeRXmpQVbvH5RsBwdgrU7tKeKm3273qdFZAcygik5fY9Pmdq2UWxUXgzYhAQe3dS3NQm34xq8Xp",
  "key5": "5Ev6Xg54stMHpiraCoxNw9ZanEViGuRKYfT94U8aLVi8KVze87Z5W2VP5SF9jP5brv2Krojx4xDhN4vs1prTttwG",
  "key6": "dkfZMro8f6kUJcpAxMtdc8PYBC5uxzPFHEJxSXcXiNGwsag1nptn8zb5iSrL6usYMtr62F1r4hSiittmD3ErGF3",
  "key7": "4D6236Hve7bNbcwb1oAzHEoqz4iAkq9sLebUwqr5CjpsTsG8JrhtQJKZYsPsjMyYrJg3xnPNz59PcYtXN997nFwA",
  "key8": "4Frd57sf35dxsjeAwfKz5rtybnKydVNEA1nRMyXEktHrABZmUKyy9ou9woUhJJRQtwSCPp8z74KDYfWEF1pZz8uf",
  "key9": "4rJSHdHfr5NtvQxspsDWf5yNCaAiQBw8mLCz6MQMCPPNr6zczKSxQXiVcGFXqiHBoeMpqndRW2Ueb2fpn4tXndxf",
  "key10": "v9adAUgBbVCPKUJ9R1kwP885EJThSWVozdeRDJyAS7iGSojBbL6RVxYUNBKSzsewNVSZaBNFL4KUCyHGTvtEfWQ",
  "key11": "5zjWMGi3pT9Aqsk5Xc22fVyeHLJ4B1UKhHmf4R5p2sb4kCH9fkVvG3HQcJYQZYi3tcBdrBhLQadoqWHwRkeKMNXo",
  "key12": "2tRX6hDYJxnd9UGnNxdzwZRsL1zePxRgVapUYNZqBjHgCKEAq9GL6bSGsaQEaAsTo6hVoEkWhpKML8vySfpsFADt",
  "key13": "5k13d7HZfemVf48G3CJxZe9hfhdybaLYMuqQsT6KbpGafWaa78Eo4rh31nznWcHqwV1W4MoSThQckhUK4pmrTRCY",
  "key14": "qEtNmha4WjFhxHn39yh1v5RjyRrpFrPyJXq6wE5BjojoF13maSMzBzL6ikGJpykwAR8JJBSiGbgMKR3XgjiUhn3",
  "key15": "3QYbBfvCpVKBg4QKBs7WoSZDbksJ5MitG7nDPECioCTdPkJFggasfBXQDY6HP661B3qtCewRKtdq4YSnH21Ft8Vn",
  "key16": "38i43m5J7uMayy9wth18qahkxWiZCE6yx7Wu7SwomAsvUCzbJGVMoGrYtD1fvYYVL74MvbVfFtR73pZZRYXFah65",
  "key17": "3M5NMAbFUfxZTiHv2fq1zneGHKGvvbGXLiHuA1Vy56pwUYMS7goZkupgNpv88wMba6ogCwhSura7bw9nEnYpz5Fk",
  "key18": "5M79iDLE18xt9ydbFiNCeCqKzJ55a64zCqVVWY9sPsQ4LpkMHaw6TrVZ9MjMJpCSUCQnGidvhypUpco5nC91C3vU",
  "key19": "sKi6SDeMjBHj91tNxLBW845dJERJeZPHJNgkJQXKbR4z1fLLPrK6n2pzKVs9JCiujiDpAngmnmhbSNiHzS7YxAH",
  "key20": "43WynnemVGMKVDoyudRTM8Ue45gmRYStGor9uzTjQL3JSA4gpicyQiEptJHTeo7G4iNn78g7ktTnMFffNVtHDFfS",
  "key21": "2YNSRqzUFdAA2am6LNHUA5bu5bzBafyztxDgy6LJrCawtRNwytTkLBs3GMwSxEKo3Rg9d6vZ4FKde4p82Hj4HpYN",
  "key22": "4bXSTB47B9jPVY93Wfc2j3igzpq8Frpam8hmteVikthRq9VG9Sqbw4xEbt4T1bfMEwyhmqsEcStifJd11WF3NnU7",
  "key23": "9RJ8dgFpyacf71p1DMr4xUf1i7GeQJ2wPSZcFrGjG4vapVfzFifXfCdZHpszmrU7yvQwqKwC7Ju3fGrRf2L4C42",
  "key24": "2g7iFoHk1PsvpaTpqB3ZsH2T6mWPt66Zy13C2jfwsvDz9Lj4xS1NwYwQjwYxb8VyeZohZcjfJAKJBPhpnJPwrdN2",
  "key25": "2YKZFMeKHWpUQVeLaaqJ18jZm9jccVreLWSbMuqeM1FxvzCZ5r4FDnmY5DWL74ZmXSwptPjK2Av8dvMfJCThaWr7",
  "key26": "5zXFMF5Z8oEFaSsNcuzjfyYsMpH8Gihb6VJoJmKRhvtb44rpJAP3xXNoK9XET9BWMGvobPyLivXs5qJDiAN9dMSq",
  "key27": "469ToyqTRFBBWijGzUyhveZgrJxobW4KNbNe2Q1Kyiru9FRcpEi7MKJabSrTJWajEnEHbzcRmxyNiikAm3hvfQAs",
  "key28": "4QaCqPFGEb1RUcvcjWELqViq5JFGrYZbHCyugDuuE42wt6Fuw6JFnqzrLaetiDmps1YE1GFzo3ckVRMWVJU3GZvS",
  "key29": "5Redqwz4WsEauwvdR65SrjD2BAz6SFCdEzyZidt4Yq3PJfMgTJvnXcqnRYJpvUE8PuUCGQxA56jqAmDfxm4mEc6T",
  "key30": "4R7MKetiQuCwQPBhjLt46S2gJidjfiAc8NdZp6KqRtg4ZkFvgTyeuJCYQLiF1Zzjnq2UzmwTiVNRQNoX2mPABKsi",
  "key31": "wmvCabFtA3TstEoax6zAVSGPRLRnobUECEJsUBoMtpkoSe94BMqHXmuDykC39pNfcXyWWuNM9U3vqgbgGQwW9yG",
  "key32": "oJyKhkWbu1ZpNqBEnHC9cfjY9pyWQcTVwAjYJb2P2K3tXLsRWFruvkgXusR6kduk936if8KYBTtLAxHrnwaPyNT",
  "key33": "3qqN8AAy7vC53eRX6izuzs7xw4m7ezDecj5e7oqRLK9nBZazuA7wu6mnn5RkjW4SgPq7n4ToGYckS8um3rJcAA6e",
  "key34": "ssJtPZB372ughqRq96d6qDCw8oeTqYo7UbY8EbKmhiAro5XS9tKrMVnRH4o6i4tHy9XaZdpH4Jq6D58FZsydZWA",
  "key35": "PN3psZGreYhPX13iVkVyGZhSTVxHBYgaq7GFp3F6pwtPNQns6w3of6u6dfnojKLAvqkDGSzQCVAHNA5U8aVi5Nz",
  "key36": "3ALxNAproqCxbLMMCQvHZcNoNbTJsT6vredcSyLhsS3cJtMMNBJvUUeEsi3cfSp1XPwaDmHPT9K4QrMnfi1C357Z",
  "key37": "2xhZdWVdaLv4ugyKaYRAuHi6frzHjYqMFqAixcE44LeBGjdujsget9Sp3oab2u5XLzVsKvqMsokQMkPEx7pJM9fK",
  "key38": "3mcLQhSd53qYHQCaafx3ZiEp5p6SubvHVhWKqp4hZgLKiXacFYF7W7rD4zn7eWNosDeoKoKxySfSEkhARmppdbGC",
  "key39": "4vavC6yWS6rttdoSxHUaBZPbRrRxrmYecFWerA1jLngn4RutUWYe3H3njn1UhhftQBVWPnWFKGiAgFviG1nWE1nm",
  "key40": "4FRFF7vHUxnBdoiC97sNjHasSsqU5fxeV66A4dPJrisBiVzuFCTCSwvpaYku8cD287Yq2RHLEG3Y9VkoaaD534R",
  "key41": "3FfzqkmAS9zXjYmbEnLgnUCv4CzCUCwBuegdepSayZtoE5Wo7dB6PTYKrZRoNQJf9SZz8C3iyDgK3ZSbcC51WHE",
  "key42": "3yYcyu17qvz1CkxVW3Ymk99Q3vQJCf5MQYUW5VJosRZYsp6VpZJC2TNzNinAxuy44SBYj3nz3EsgYGG2ALQiEz6S"
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
