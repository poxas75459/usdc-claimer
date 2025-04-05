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
    "FxjfSyUZQpcEYhAMbF8hHXfU1A62WhKhQf1aQQ8nGHkgvaz3ZBN7pEeuxeCPURcRRAsWsikQm7WhX4mtxSfrvep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7zBPMVBTWuMq1ta4ZyvAM3NjCCkFDTMb6g5fjcnHfDXoacCBjGc6xWLznHv52DxVSBvtvxqK8WB8ii7XkRoAdK4",
  "key1": "3d9mCCjK4YNRtL2Gs9ihtuvo1vFoLQGCzjS8j7WQwNDs8Mx5ZB3miFd8cGpQP8sWGFvFKkNYjJg6oaUJQhdhEE18",
  "key2": "gmbi6wgLgr1tgfuGTBhAYfcx8ZkXEoB643iu1Ao3aGfBFGeh428q9AdrUQfbqqBSdYMk2N3LAs6bd9T1NDnQbik",
  "key3": "55Vj949FjLB4r7UvQg1WRtKk7mNkzhhgMBs8Pnkqarvb9NEX1GVvFQPz87EFreUq9V8VUs8eMTWNWn1VHcYV6z2Z",
  "key4": "55MnnYSHzk2oci93HbpSMRAm113n8EYpognj7CL7h97PMPTrVuXm13AoGjF4r3EUCcP88yi8H61kanY1oZKVYj6P",
  "key5": "4vf5HBb3BfwStNtjeEJyYnidCiSUvhF6bV27tEW65dhTDvYLkA3uingeWQY8B3qWu72UzpQaDzSfFXj1QVndJGVi",
  "key6": "3awp2BBv4yrkmMejt57vVyjowoKjWVdw2b9hB5FN9HHn5N9t2QU2yiQyPGLPHHMMD8a59amqF76jN1QjtEtjioqY",
  "key7": "65XVqCsBYoELp859YZ7vpLMZZRWhkGRFXwhQoUxwXZQwHJyshCftkHSGLJcKhgmtsTs5xdEUuYu3hieo9PuvpRt5",
  "key8": "gSKRjp2JBk5bsNpiMB4ddtjMx5S5w6auDuGRLU38eExxKZqv7CDw6TpSfDaeY3JTHW9JwEKZojZrmeD8BaATmC7",
  "key9": "fbsNUtfMaAHNk9jhAnKEFuXCWShhkxeyY6sY3pYYVZYSzcXVRD9UHKnhr9eRo7n6BfYXt8Vvw5XZJeAgkgPhJEQ",
  "key10": "33VduGXBGNZAquK7va4crf5BVZQY64Trtg2GLjV2XBXugJHKDr77VBGNDjqF8ySPW4epGn6tZTB8Buf862AQEJBp",
  "key11": "2EPvNQDd5Fkri75Y9mrkzoPqwsARhZTTyVUnfXZH5WfUz3yYq1KUSWEmjBPijKy6cRnc7o9Sce4jSRN5LjKjj8Qr",
  "key12": "42RU78RXvVvV7RupPJ1rfTFaSL133fRfordhcipCYs9HKj67UAynufbwfs31t6qZaa1eE3RBwtYt4P8vJpAjvxjJ",
  "key13": "25mhm1cVx61WtoDz1Swceat1dx3ddrp7m4x2FuuxbCrwM62ThDkvAa1LXKGcFRGpCwDWxHkeiEkvn2aUGZpZEfHN",
  "key14": "W3B4S7wD7NJGywh1gs9LR3dFefFEeo6WhFawaSup7iJRMUL4hrxzxezGcxjiLqFGVPKqvUosyUtFRcHgDJPqwSU",
  "key15": "35HsRBQLH6cctrFfy3TQPpteUGofbVZTpgS6dfUkD3FxqWU15u8EcQgPQN6v2eHjSYBJKNrfwQUUvZ9kawEBYmVe",
  "key16": "2rpQgMqLt56a2Tm5zmTpcgmKn7bTJuFHFzHd6GGBB2JnZGLTwmx8cnWFCpScMZ5s7qSVH48eTw4mWVrgyW1HGpRJ",
  "key17": "26ZGNZzVttqcZLyhqGhWc7D8eX9xpi9RsXihxXLDvMcQwvDQEYZpwWw6hvUcMEwjaBg1cCAXH8fSN21Qb1upmiSR",
  "key18": "qD5igXy6fbJiSrDGKwR2EQeVBK2m2v26UuN7qnpvqXbXgApuDM6yB9wHqxraJ7AiiWZY8g6UykY7sV9jsVYwLAv",
  "key19": "2XZukFf8KbVKLFcXEaNmcNXERsqVzreoCBH3KJ5eK5xS68LP7JdUdMGPEEoaqeCDyE1pn1T3jnRRwh6CspcTp3YX",
  "key20": "2o7tnRwSGSDdpWrcBbP3GwCWDC2kc6pmVGAyiBmzbfCot5n4eBbyAakikoJmR8auAqebQSFQ8EcqfXfhL9vcEteK",
  "key21": "2APRpsxB1MuaCGbP81jHV8Smm6L2Uhztpr8hmb3Q7sC4APmiGxiunwyVLoSi5S6AcJiakyBx76k7LK22rnpvWNKY",
  "key22": "2mVjqSXukzZgjGjarubppFWcMQMWHzmA6vvdwd2cjWakvkJagnn3YRziseqJdtb1VrdEeR6xSa8b6dioMnDXHqEH",
  "key23": "55uzudzbw7Qthm2t2pQsweR6M3omoGvEegYdNmsBAcp9NDGiFeTqP5SHCNuvhDErPcvbMMHJ45diq1k3z12LxH3h",
  "key24": "4x3q4DgexZ3NRu6eagvNiALyaxYymj4n3a8sprnDnwTht3MVHjicgzVHgd7bLF5RmhSf82D1oDRKy5jutjepPYr5",
  "key25": "4sa5vJMbVrESaEHa5Fvg69KnHCuxgyWEaYM6fDvKqYg9wz2VitLjiAEcVE6aoAkGTMi69NJwK1HqLhuEe6nMV1tQ",
  "key26": "ATguqgLTxK9Bmz38acQfqS8hyY8i4vaMEZcBucZALUQ9kp8aN6j4F7mPgEpeXTjcmVkSX7z749Cvgwcg3cHuuXd",
  "key27": "XD8NmHeQTGBuK8HoQ3JYVC3n7u3yrrgThjTdSLjkSoDCKuQmyjshKbhE432rKJEi17nn5FS8TcizkzK9HL7kLAW",
  "key28": "31DrjDjRzyPxLYKetWkRkvL182QesByXaLdCBYeWXWMAMyqEPq1F4LpXNA68KKEBdQpS8f6bkN9DqkixWAmMsATj",
  "key29": "5K957azVW5ZWMr8tVF4yqkqPot71PumskuU2R8Q5ZrYhHBQWNe7R2eSUV5VhMoomGZHvD4gJuFk44LqXjnr4ScfU",
  "key30": "5ctj135rWPigNBeHRZK1js3tbaz1ZDacfAG21rxivhojmQmSHqt5qfWBodwRoqDJrJqS1FLHJkx3Bj79ZpX1CrMN",
  "key31": "2BCjpaWRaPQzkpqWY3ffK4M4sC1kKBm4T1SXLbx3VAvpb8YyhTt4JXeV3ANdhq4nZqKvJPyrWDMkhzgf3XmSZ16P",
  "key32": "JG9aFzLmQAFTkdTSy1Ys1GPnEjAZGdXDxYiz5UPNh6mtz42KPBmpz5bURoz3zdV2o1ubb7fTbzxFoFDxbSFFfnZ",
  "key33": "3yqcgsSrAf22K9rzVBjyW65Z3AdCcJ2u4AahSah2BmSUGDnKWGc7VC7x2EwF2dRCQZ5KCo5vwWpAU5JUt2A2Uwou",
  "key34": "4CTDdPX3NH6GsWLKpMvBpbbvzutPZq9JVeC2DMn9ENeLoTuDxphprwtBbmDT64xk8N6Rd8Ube3QJXGH7m2SZ4RC2",
  "key35": "2WoLhRQUmQg2rAXEG8YyquczLW5y3qineRsVETKUUHEpagsQN3448yaAuGGdCbWKwCfNcnuqXzvtfoh7oZ9yUdSh",
  "key36": "4sb5n5SwUfGiMD6mCzZVDUrikyahaa8Q2Ws5wJJKUsoP9EyUFcV8YtwnrfM9XTCse2q8pwne9vjJmrRmgM8emb46",
  "key37": "3JcKpw9TerWNCjQsJzvCgByffYTE77MFiKQT2uM4vH92eFqGv3HrLE5y86L4TB7iNXUgqM7XDy4hrF1KNXR2N8Gv",
  "key38": "2jwCN7AbCmvqkUkMo7amGowC9EDdyMi2uGPsiL9J8CqRyaZ1xbzTJHyMQ7fp2BdWGWnGJkzhhvLZsNYgNUbD48B4",
  "key39": "3cRjmf9qYKLPZLpptrKYH25Aa4uKZCkFRbk4MTNrFscXFpU7tYhq2TkZTYJNtRtJChcsCVhRefaAUN1sJH1HZw2F",
  "key40": "iT9T6W8Vi7fKx89zXnRbYt3Yu24RxZKdWcahPYSmUY2bMXbCbmC5gR6cHYC38ZvMnhHWpey27NFY47jcUMmgN71",
  "key41": "5BGwqo8gdyteLgcctcGd97XLvtqJ66K4MDjxVBZwMTxq2vAjvnHmeCvkhMiWrmSs5DN8pvozLHEw4K5ASSYvkUzQ",
  "key42": "42BbFYqWa1w6oUK2m3SVWTrie8p9qqoqwmvYuhQhg7thehmUUQpEcsGxrwypRb3KAPyy3M3d2YesS9MCZFr5F2Mr",
  "key43": "2Fghc3oD78gMfsvdt7Vg9f75x1vcexF4z5Jzr8jeduALbmMWSG5LwpPiuLnXGMq6u3PLtk1z5Cxi2SZFQaFT8AjF",
  "key44": "2W4F2rxUmrvWNjyJsL6SyTRxKBpu8wx9SA8hZWHTmxeopxcf532vGp6MbcwhkYmVE5dVa1rgVMeohXTxB97XjTRY"
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
