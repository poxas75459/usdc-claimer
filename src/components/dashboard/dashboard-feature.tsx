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
    "4SoJETtCzciscSs6vcvF7r84DfhwiEs2rALHdR9iBkSyxfEXU2naXMSGY275kRBmhr1BD1fYx6twmhicZp2oo5WE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MLeaUDSTUNTt2mFqXC3mWaRXxzqC1PfnY38fJwibGTLLhTYmuvZPTokfV455FM451n3owBSmZn43UBisyd8uE8s",
  "key1": "1hCPjTchCsUaz1LQiu2QfU6YQQ284x966T9xBxkBTTudAnJeLQRsYJFPvnkD3a88riUeiiuJUTHSr1tRBqoJsac",
  "key2": "CRVfrX95NyyibB67WxmfyjENVZaQ5Dc6vzKGQcn2W8H8dR8J8HLvRRt7kZyUTgPKr7dSPMMSWKsaCenJTPkDPF5",
  "key3": "5tW3PnSx9BiQMM14BXYPtWEoUvc4kSmukYAqrZYVsKSfg72mvXfqjXNUNnYdb9MMbJnUkc23Z3KGYfG7GHdo7LHj",
  "key4": "5sSgZGjZWbdCuZdw5iPzqEYSD9bzrU68JZ9H15DAZyUTsUNYvWnF9AYGrk3iNiWBNgo8oMHBYULxeUtCx3HqXd68",
  "key5": "5n11wzEWXUCnBAXPcf9zRcmkTVjpD1RtnMUnbL4Coycds1aFVYE8qM1b42uBxmVQE7ggHKZvktah4oUtrDzRb459",
  "key6": "5nyuU1vseoNwftLWDaRxgj8tYdCLDnqA6QHJKhzjYNYxZXsxe9YSuUiUBX2sK2GWVqTfQLuxXWgkje9Toj6YixD1",
  "key7": "3BeJPK9TNHGmhiNX4D6aifZKiGsH5XVtsj944FeKfg3iDYSKMXv8RHTtKjvRtdq3zvuXzeGLxkSEk9jU4Kwvfw1S",
  "key8": "4EL9TrE8jDF9LyBBvg8MPLU3iQ1rZjr6p9ZUeCGJnPLpwcpWhH27hs9JF5XHqJsssQZMNWFvLRTGijFrg5szbWzF",
  "key9": "3wbd5yhFCNQynAXczd4usYVvA3yxcJgwfUsBQhpG2e2yYLpMZpcuCohsjHQGUhKCNKSx2P2YH1rrWajmJSSusanL",
  "key10": "5Lvyx6mcNsYjyZSr2nrdvC1TVtrsYRcXBb7K9tzS8QxwA2nPkz9poeicUe3pV2iwzAx9Lcdi75jr6WTsgADnMMBN",
  "key11": "3SZ7CJn2SKGfKZjSYVi4vvxEVmyJykQ27X9DsGy1U2NGK1saKwhqWgwF8WhNTfBARVwtX9ruPLprhJBngZaTXAYJ",
  "key12": "5HLaEdPBT1hmi6uZAeSxKf4WD71cAxvRwvrdPeY3VdXL8NLMWgrySQJRNvAhmYhqWK9Xtb4XN4g2fDH6v5HPwzyH",
  "key13": "3KjFdUctM6SxC1FyAK7venzmxi8GEBz1FaryCxecXhX3FMgC2q3N7NHXwuZ4ADNnv13UmVzaU97BLixJjj27B2Qb",
  "key14": "3tF52SQkCBo6pFoThWZwR9zoJg5tCqupYGhP3FzFkga7YrGQmWKf71t5wohHpkXY4MQo7DHLy49MsVE4UE3Lm55W",
  "key15": "xtQ86CW8j8foXhaNXmd7Axv1dZRusasH3C6xVt9Rweukixjbb1wLG8hqNdNhAQgi8h79vVFPUpZN6GKcENPQJDK",
  "key16": "2mzPoNJ9fNR7CqDZ7KVxTixnDUCNEKhLyV71QMk69njSvBj8JG5Y3k68LSsfFM4UiYK6qiazQ4y3xfjNySmJDkx2",
  "key17": "fBgFhqDbAQrEkks6xPDH1anZcnQEYTJ6Toemm1Bi11AuS7XnbB64JxokutAx6zsE7uijb6voxqaCfiyMTBgJCJj",
  "key18": "2Mebv8DfM6PVS5HaTgSJnPyysFnr6ZK7GodG4S7u7UDHa2GhiqZmC1aRduKoVi7tLAbhZ4c4yo3Nt9kUyNbKoyxc",
  "key19": "co2TtyAEDmDLmg3zB8PZEq5xATxXFDgQ6ML6f2yHiDYZs5zDvHicBRyj6LyXRttb4xngAiGszv5YNSUyxa67Eb7",
  "key20": "5XhcWASRBeKC5F9X1HSwRLzigazpa3joVb1swRZQ5WUGFMvwqW4A5NLjcGf5gb6zWBoCYGL9oq9dC5F1N9VAZhuS",
  "key21": "5jvsbhvWFa23SzhxGgwgjLHB5Ws4czSscm3bRXcdy5v1z7YCxepUjVsaMukTxckk6BvBMcZaUuUAmg1C5A1mqXom",
  "key22": "3aqGTs7m98uUoXpLWmfsdGkrA9JxgWZxGWt7YC3BJzTzfGJpMMJn5NkgSD1p96jejMoxEowLYSWKxmcirvAcmWcp",
  "key23": "3zAc4Tp1NLH5fbDsY3L23TBZuPXj2pEmqNPpxS7TvLDbdBqmmkipMyLAUHkqbsjwAp8Gx9263ZNvAxroN1MxxNDM",
  "key24": "5HVf2MBDHkXWTWD9jJj2tVNkTUntTgL52y3GNXCG3oK92RMCoQEQNKKbrFbNRBJhQjQzVYSHkpfMBEFQ9MaqXUNU",
  "key25": "4keYhrMsKjrHXqWj35iA2RCd7AingAGCXJWMexKTuhetJb5QuWi83zPsR3G1w432xThLWYJL2UPwiAQTLbCL3uEh",
  "key26": "2xwxxxKYNzVneawrvD5762XMh71ZbEJfWUXvua42K5q4tBdjhk87ZUVebuDxGVrqiM86qYvho4CsWZz2uamJxB66",
  "key27": "5yTpZYrLdJdMBFbbHS3uwEpjz6j77R7HfzVaLw2qs5LrcsExj6QBrpQ126vDtoze7rgKZJoz3tQQKHrM2tqPj8CW",
  "key28": "28Z8ydL2hDyRaVDpWuR7V7huZU4DMLAU3WJrh2fMwnRUrn9D73LXnMJHDWhK6EZXhMNC1jBp8K3Mb157SyxqfFFS",
  "key29": "2zo2N78K7LYM9DFZSmpDgbc6oF2NTXVWo7RKyQtpDSrsNWBiaMmYvu3eoAYjuZA4vxtmpxjnMg4GSLZFyPj6YwDv",
  "key30": "2VDQQXa8s3bW33x4irV7zPALxC8RKc4b3iwbeVwzLqCRxTjsWJ6cc2M3vTR11kyA7NgQDaXmB7chDLo7WmZzWKdZ",
  "key31": "4qz395eHGLyBDG2XTe8TGtWjYHy592YzdeqPkEzYQZJSoo9267LHZDwtRff8vXkQmFxFqLNEQ8eUjT9p1NH1Tq1r",
  "key32": "2Z5FCdS1u8PgFihCwC41oiHXwCUbHFFpbKZizsjh8vBmNboq1gRDKFJh31C416yksXkQjVPDa21oZAkY8Zd3KGwp",
  "key33": "5A7travwxThu3K8cLn7fG1h1vAQZMqfEeJy2LTFuKJJLnqM3FDtCpZKZTCoAMVi4e3FmAydhsdKvtePqBCBxSBQ6",
  "key34": "2Gvsxp9zkDFXMoFoscfhRUzmSrcZCivzcmgzPNB4tzmqafvNCW9v61gCnRwM1AbPatrqYS18eVLXuqG1ydHp8rS4",
  "key35": "3f2UhSQhzVHvDdzxrSA1y33uPFpbQG5KKpm5ffRD2Cb9cMHSE2My2paW1dKyrBoBgqckFzjZckxZw3SP1QePNtU5",
  "key36": "2nVnxRa53akfBQUVpb17Uz9UbVbCGTyfVbcPwPSrpxjPf4jBTqAQY5LqSfovUo1rViamEU4RVv4Za8vCzXbFZnTH",
  "key37": "2taPuPWptgnqKu6SGEDdCBu7poHVXFzz1RB5zaL6rQHo1W3Qjucww5ncnX7MHVHoL9uyE8rYrfd9D8WCzTWDnf9b",
  "key38": "4qeeE4bLfk1sboQbfxnpgUAwLgPKYSD1q69BojBpkbp5N37QNnvyzXJacn7aMNXruDrRFMt4w6Xr7QxndBjALgKR",
  "key39": "DH9MRzLd4TnJEwwX4yKp2fg9mS681LdSj2EZavBqvRNNKJYrNeh5F3CNDqusjYE16rtok65kaJKSPca9ByRAgLq",
  "key40": "3fukDBPPx6rTu5dHjoy1D3V6z7EB5h6wf9BnWo5QJrzWmL6YT1MG1fGrQy8qVM23keyGxsEWaPRnpfQGZkTcHYUX"
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
