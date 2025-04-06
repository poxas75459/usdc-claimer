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
    "4eSMmqf2qwMNY7TXAgwjDHgUn1rAHV9pGH5quVMi4WsW8A5cUyPH1v3bvnjnJiNJeXZLAHYNBV4WA2g1QhmaEddR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SH6vgchTT33js5tySgu1wXkrNyK5ECBE7vNozYx3DXozxgu3TyrdgdvmgTV8Ckejmin79ffaBuMr9SujBxmyFgK",
  "key1": "2fZb3XPVDSsDmJZYibMBPMwgBt3vLwPYkZfAS6CoKwa458YtnMjQjRhZ5YzxDbWHykt2t8Nfrny6Pw168tCj3fJB",
  "key2": "5erMHZq8exXLTAL1UYZp8QZT87mnJNHbBDjN7pgvN8nzXsR4NxWinMp8KKTtm6D8b6Dk3ViQvdi6RwJ78y2n9Q2A",
  "key3": "2Ts9GN4JPpS5PEB2vjUtcxKa5Cy4uhQaYistNp9426B1ufeRxkS7XhuHVWC43UnovspQEa6Vd1EWsQWbA9hrAVpq",
  "key4": "2JLhSM23NqNNEvksvad8oeHCK1qSQZAynjr2wHdHT36Y4euxLfy3dNoAT648kBRnzDmLb34K9fLmbxFrEMzV8QAx",
  "key5": "75Tec9qMTRUTPnc82p2yTT2euFqWZdwkU5xJr218Vxtf2wUPV19tpx4LP5TsyaPW3DiJ8K7HxmEPTaKX5Nb3RXH",
  "key6": "5qj37h7PLrZxazqdUQfMaj2MweF2YshtJaXwzfLZQbEzC4E6S7yoCXpPwHLqojKVtdpLTGwLJmAiqLMMmKPmr4J5",
  "key7": "2kpybmWcJk5HijS8ZRCFx4PyQUTExfVpt9qqoo4y6DzPaqgKrxsfdSqXZsaBwrKhLrgC9whWDfXqg355bSJ9TQbw",
  "key8": "2HijN8CuHrYkpZtnYZ1beWDL7N4kQ5CJJNbR5FXHKgyGz7hnVAsJfjZGsDPP8bMjwqeKQimWiy9SkhLKBbXYBrst",
  "key9": "5oyrrUQ3GdVdLwRXaLeJnSfGazwf3Sf1D8hD7cbkYk5TRqDG5ekxBjU3S32tQjqZ4ibWCdqdZEdgcghMTzzysSG2",
  "key10": "3HFp1hg5mVn7eZFSTthAfbHt1Gm5JqH4B4My2apgLkYxN2CWhcsx9SRpNkv2tgs3JtBsmB1W3EytRR1FnssuW91E",
  "key11": "3d24iYYtFRhJt3YinJPytH6X1KCH4M9PSuKjKndPoqJegGojR8W2FKBvXrW6LoTHkHnTWbA73rHGRrJTgyNoUn1Y",
  "key12": "4F5PJC7rrZyFdshjLWj8PyzXzzMXtUgmjVQbBQNLzKkghayZEBeaHhPWqajrxU552xPVT6dmJn8injbMycVaoKgH",
  "key13": "5d6wtngiSs6bqQDejSg3MhwFFa7YRB3PaeXNV1YNEKnZ2QLh8hqb9hKismMLE1m8NzCYVMf8TxkMgnLpXXMhVAuQ",
  "key14": "5tyy3jjdt9vHfpH5bV2AuiT1GgfHKy7MdosYKLcjJVdKFDQH23zCmmYUrUVR1jX7G6wZJzhZSkRjL3t17TGdM2Qo",
  "key15": "3Xi9Gm7iXX2oorXkoH1jMYyYZfzcSq6RHnDX9cEn8XKoy7UTk4Br2BPhxxx8riGX3sF8ZMUetaVTwe3SawkjCLvY",
  "key16": "36vEqY4i8SSUMiU6Wq694h6ub7QYNipBqyfJtjZ5d2tcVuswrJZ8gU1qA5tpd2YpXfT8M3nuLj9souZ8g73jcNRC",
  "key17": "2uHiB2NgvxFMAomxKeWczSG8FZ36PWD4RRacaXvUPJ5ZpcwDwBUKFREhyvPLhwf4AkbZUtb2PYoaxe8K1ccLnEJL",
  "key18": "2eFKgAvVRFv5wvESL62TEYH7H7KBCfd5DKvJDHWk195RRK6oHsQusUyuZ2rNAhGNHoPijfxVciWGtUUbh4hz6toK",
  "key19": "4Scwk8B3fyw7ssjiCPNMJJ41TVeQ8Wgv2CqDQRfKEVhgSjHg2vCeG1YHTcdFwmkJL763Qdjk4EtBL56LYkqJj2ae",
  "key20": "2sj8xvew7nkxWaUHDmikLW96CJQVvsN6276N4861g1v3H9DDE6bUAs7mSsvxYNqmFavK8eYGE224K1Zop1D96WmM",
  "key21": "MJh21a9stAeemtuVs87P6JKr2v79cyvVF1kx6qfYM7Vy91RLCxZaJsDued7xqMxSwPx18HnNnWM3af4gLez3DsG",
  "key22": "3RwiRrYte7FhH9N8M7vyvvHLpbGMkBS7ttfJWPsdQyvZp9S6oL7GjUGxqHBAbi6qXWWpbTsVj8jRMSHyLPJYUcea",
  "key23": "5k6dc9JQsxjcFKFA94kAJ2kjVUZd9V7zJpokKKsTWWFtpWGgrPraXbZVAQLrMSjxEGbGVbfBjDDGhj6rpgxqQnh4",
  "key24": "4ckjPxNsRTs7TiPphZWyTaZ8RwUXA8JDHChSWRv1S89zGifG4aYGybJxQgtp2WU2gzvu7wre3kAGRWDweh3Znyr6",
  "key25": "63CoPH1GjssVtZVks8AzvahE5Y1ZNh7QX79DyKFo6woMtBsWHmVWWqrHLnuoBDETDxfXVktEzmdJTYxD5kEiCuGu",
  "key26": "2ivWgbhJ4NSKbEPDCHm8FXKdU2CZK6SkQJKZY4F474mRdunUWGrsy645E5gN9WJcwk6h2AVjiQCAuhEgibTPZTwe",
  "key27": "JS7Z4QBJV9rdx1DCRW6nmGZS2hYSB7HnKAjJPEnrWqv54MFLvCtLEMSwu7TtrHfpQnhuEGmFBbBvypCygPm15Wk",
  "key28": "4uorJNpezddBSmBYu1yGYgkNTiF7wRopNDx8WiuwxBEZ1U1tyoYqGQhQvxDabBtgmSibZFw7TeGXwTd9BVfiX8xF",
  "key29": "5aqff8dMr9NRNLWoXfmQRxg914g5kncv7rrkP4L78BtkbBiPSZQCcpijVRt2RyqV5U3BWCoTdbz3B6X6sKkJ9iNv",
  "key30": "PnyUVkHTd4rSCTfGGbhyGH1K51SxFysArwvakB7fwifTjoNWgzWrxz7e5erq6hjcUpWgDAFYDxpQs96aXkmmczi",
  "key31": "5tmut7KFrzXa4axQsEquoBQsS6sPHvJ86C2FMp2eAUeo9b3sBTHfNa78Wsjaa5gf6um2w7nbjVp8QFu1GtjgikS4",
  "key32": "55gdY2mNyQJhGibkwtcqhLrF3ujKDrrb7HuqDGhLbZXS6oxFNrB5qDBqY3Bk72ouBkV4bWRmeorAXDPHVf7TWbxg",
  "key33": "3QXokEvvyPXQYU6Qnv2Wj52YEr9P5rRgXN7y5bWfoADHAonMbjuXG3czGnugjATdkXaB2TfSf5d9hj9SqSVEn1UQ",
  "key34": "2fjxxdgAHNpfYXWSPtSmMztsX6GbBf1BVp6KJMfpBKUtvnnh45y5i9ULhPXp8XK3SRyvdQn3fBbCP53qtERfhN2z",
  "key35": "62atTaXJ5Yzbv7nHR3ozTpuQsPwDWg3KkuxJdVMUvh4sXKPUj8cdsue2cAmDsMT3xRYqN9fN2WNtaXGEazaHiAD",
  "key36": "5GM6JWgLQ7t9N71AHdzpb1DbXZkZCAecS3bXrxwUimvLRocWkwByX6TQa12NhQ2qUwthQWzH2pDxii7LwvJnTdGi",
  "key37": "2cWzzfX1gsL6T2PgdbFVxv8sqsX2ceN8zwUbGd876RKUoGMxzkULMsZMf1JbaQJJw8mx2KfPva3q1KC5zzFjXdYD",
  "key38": "xTQUiFoJXi7j7WQfvokACC5zeExWvJ9tFQC8wiMmCE6brTV7KbmUUx83Lmjscj8hvhTwVBuYbvHPBXHZjUonPRc",
  "key39": "4bkfpGAsG3grx7f7Xy4HsfZM8wmrW9Twjo4s9ncu6XjgpyDSUB8a6xhMPnGSqRu9H9LFsso1Rc8cxQhuVYCehhKj",
  "key40": "3QE6EHqpwt8ECGEXVduk5R4t7RqqzwXaAjLyyvRAvSM66m4Rutf8FBr2S1BByDq14zV1GA6QYFQiSPxxpfr1ghw6",
  "key41": "4Yp8hc4TVAz2qciTA55JXqy6eWQkRnoavtLdwfjYYbfBVVgvKnHfLrMBcKVHZZEuxqgX4hrUmBntEb9zw7J5vr4B",
  "key42": "4ukdqYkzEaH1cCbNm5rwQCUMehxQ2MC3mFwcaiAzoqRHnS2JqaFtygADPPyvpQsSPWnXHjnRT9AD7cwFviB8UZjF",
  "key43": "5uEuETGGSxWsAaNUcxY93fG1FghnPYNSmP554spWETSeV7qguCwC8iEG8ia3EYNxgSNvC9qUEqP2dJq5KTccEqmv",
  "key44": "2Y5AksCoMJrtv1o5akTYDK6PswgSBjkeBzhCBZ1VXmWKuHBD9WA7v8vp5YiRmdJxCiThbghbhze7hDvKLxCEkZS6"
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
