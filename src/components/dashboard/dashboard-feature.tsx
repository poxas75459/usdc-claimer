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
    "Ld9U49XXHpKqyVtZ4R4zBQzStYr6ShQSTmLa1NjgXf3i3AGXDpU2eo4igNKnHutVG1yScuWMuHHAvcskhbsyqnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bb4aAN85DunThjKBumrPAUuZQCtxwj6eSXcg1y1WXHu1W8nRa3efzgXxREsWa6AXhDaW7ouHFAtwyZuUYsSFmSW",
  "key1": "4UJoQW3W1Mb4PwJHQb6Gy4XqGZzyEG3nx3mYFLw2xUnzBxoXDeSSW86FKAa4PtKkKsd5Ar7F6hfrASLEobx9GeZG",
  "key2": "2vhVuxu5JgssKAKDuurpzC3WCvnVY6af1uRaRpyAH2Uxkz8CeDj3PkpBHdgWhs3sd9P1FfvoXfnDdq9VrJsy8t7t",
  "key3": "3bZzBc2d1NQw7Bpy3xQRdKxtB2tkvCRz35D97rcMJJ5u8FSPaVGMGn2ZUqpS1t79pQUMKjegjRH2vKiN2WYWRFCW",
  "key4": "4a9k4RnrDqfMLYsLq6f4dZXwK5MFwhoNb1pDnjAe22nPNnpTWnn42qmTpxEeox1oa7EqYNE3U4JF6wqFhEiLSUQu",
  "key5": "8Njrm2yuAc317S8ToobcWayno51jbc8LEWCT7PVUvGHZMY9FhmNEQGjvk8wmSyhpsg2UPBUfcqkHJtmNA5Cu3a3",
  "key6": "361ncAaBkWtjd5UACtPFUQpVD7ctwSGj25rm2CF5YLicoMy8hSujU8ZBvpCcyYYSkBXJzgeizCYiuaXYLb5RrEsH",
  "key7": "4gMsUt7RfxdCQjA5XSwnLyhM4UjR7iLnmebhpr5sd18oonRk9Ai5poJPBLbZ3PSsZFtsP86DmMFMp5BWUeGu5f6U",
  "key8": "27oceTx6DZMWBMxfDnv423rzj4W26zgdmd4yr8AJtBD8AEXES6WCMuPBguY8tRvYpwfu6tG4KduspaFLvuDfrN7y",
  "key9": "2BN1EVEyW911d4STyeiQ2RPUGEgD5F9JycL5wyXyAEpuiQvvUXgYjuwmQC2ypDdQm4c1HxDB6zie4ddUb74rRPRL",
  "key10": "5FRWh7qgHBwebnZdyfffM3KjaaxbCYjks7XprX1MKajnG43JW4X5BQiPr6EXfxMxFuquf7g1wpuDNmhTG4QdNDk8",
  "key11": "3usntG3YsrSDBHHt5CkfH3R8bPrWuXRD56cAFRVywXEGHnAyDkXZ2n359o4LR4uTwsLAnTagVpCG5jDfqx44TXKe",
  "key12": "5YxxkRkHJReW5MJnwdfB1bZAPohhZAEkZqQfniuf2uMJSKkXQTTzvSUz6yv2RGoBXoEEBWHbgCWiuyBnVuFsQK9D",
  "key13": "3BsfLBqzyae9ZeRZ2Z2JWy888TordpRjF8VbYPjt5PXTqydx528Sm2r1RfANWomyxyVU4g4Uwkk1Xek952hMWqZi",
  "key14": "5TjKw52hH9FbwDQkVPdPRStDnJLW7ipccE5ebBguzGHtgRJKQVyysKTLBqDZXapxkJuXdYM4UhXC5j3tgWWzismt",
  "key15": "yJV6aUGhJ3GnnUZ7G1utESphhjfymbEijjMsyFyohDwgTXJVpxVK28JU5PvvsyKR6vK9CJAhSqtmv7cgp2A4Et7",
  "key16": "58FXVT26CCa6MgytuShLp96xdMq67XctZtDL1ux59s4hBRK9tBNKi8kCQJ5qxWrubYkzJmywbshfje9iJDBr5zV8",
  "key17": "3MGiGwNsJCRNopCz952gTfKtNat2TrpQoKt5WYx8tqAT4PUborduKMr8qHGLnHLQzc3hY9JwwJ2NSx9CE2BMiB7R",
  "key18": "31DgNWKb7kG5fKURsNbLN6jrFYMgbR4E21TiuE75RziBP4LkvP1r6tNFyGqWr5ZCJLKj8GgDTWcR4FAN2H2RwF8q",
  "key19": "611tyFS6iG9x1CGismjXuHz5AhcoU3JVjusXDbuSkdbwLnu2XPMmiS3pMSbNPY8US2EP7ELDUFh6rwC7EfduDVnX",
  "key20": "51jyGz7KxLge9UDRgKz5v3cwzbLALsNiuirMaHtZ357H7VPPTYhHdw5YQqczrwJbwftZTZxccqGX11dhWccmGsdG",
  "key21": "2QEZrUDE6ScSNft7nL2dtFhZkV7u9BhKjYMoojRzXfu5EK3mJwfc9fBdbGkVfQwmNPoUgySpkEutPXYyXs9isLtW",
  "key22": "39TppEmKK9SVu33PPyoukqaWeEgdMGFs5fQJvez7yMrkhEw3vneDgynNxd3uSR91YdwxE8QPn1wrZB99tpjivJBq",
  "key23": "2ftxnW8XXoXHYqXQsXyybk3AiW7GNK6fySvaVPVvUqB55NaZ8dGf8y5kLSxBstERLbioSS8R3q2xy5ftzMhNkRoB",
  "key24": "HihYxN8sMqJD76qw4uxxfGA9LUoZqMJQvegPK2aVAP3qXaPRWaswuisKvCFLU2fWvTbMjy2z8pjsTMGD2hUqws7",
  "key25": "2puWMFgAhdFYrjpepeEWjPgkcnjKxoCPZApxq59p5BsgDGVo17RC1ZmpYupCahfSVZTuGWrsho8cnEzr4q2NiRnT",
  "key26": "2ofhoH2deQGdSif5n9xnnZVyDyuXG3m2kwjAQgVbq6xNDxaPTTNxTc5WK8nRPhKxk3eZTJVRFaBDqm34CZpEAkJ6",
  "key27": "2gJaHRfvp6qHaXGffgi4b5e7TD1mGG4RWyMZzRur4cbjZaHKM1F2bm1VeFqUXQnvSekodpZS7ZiGGLooH8N9ix4A",
  "key28": "2CgXxqP3MAKQp4VHo3HkvobeXcNekYcYT4cQY89dwBkreGkcF72Gybyeokhhe2WkXiuv1WyJpKEsoGwE4wmj7ydm",
  "key29": "284DZVr6pbicEqkpsp76UnfTSfTaWyQ3gtUGXXoensDQw8Tf8v1yNA98hLgaVdxiEu73gXwwYKF7pwSDokzZYsrD",
  "key30": "4zM8HtqTURwVsfFrARWpytfX9A2haby8zurfCxSGNwSDm7SsPAg7xuUjkj9kyCEGaMFfrfL5poptbtANdDj6fRCW",
  "key31": "2t9gLgGLFsEi3SzJk73KdY36eugiCqp7XGzXxeHuUhR3nZr5QMa1Ub4S1RCPF81dKeRxC1nhGfadjfV6tp15GR3n",
  "key32": "32AaaKoeYfh25DDoqKEvaht21gb2nGimNDisHBTi2PvANc3FthxWZkRcESrGvGqrc4U6whbD3RuBJTQEsFmEygEs",
  "key33": "3RYtnCr7gZoB7h7fb2E3ZzzKWf2aCYVjif1kMPCLSstyEUwFtGqcYhui7M4F3cHnwko2nv47sob6hEESBsXvGUfJ",
  "key34": "5N8jGyxSeTcQ9y3a5pVMN87oZLUJZxE95cXCrvvYufcFpjcNM96MQVnEchNRMtByZTCVtMRScVSLt8Zq9qyoz392",
  "key35": "bwpbiJrz4AkAsRnNPkZvx3XvyxXcVgFxNP2CSv3PQnic1aTxDg8XB4Y3NF65nfZFB48p1HYvsRLABo9xDgc3Com",
  "key36": "x6yt1FXzbMVBwM2ZwujcZctms5f9etRdAfqDP1bRmWpyBPeQoRGryUv24Gz9BRfAKPEqW7JdwzLBdkBW5nvh3LK",
  "key37": "4Yn9kTNjcSB6A9uuGrkWz8pFuxquU93A3WtAcRPGvjsoo89TLcgRqR2KoMZEa1NumMDQsqnyWEDPvMmbZHUMqrtN",
  "key38": "3q8KzSiuTrLmX4iiiTbZZNFpvN2SX8vTsqqUQpinv14zLgpvnVVVRQL3u2vJpKcTfSzzEFb1bqn2ShhVWf4AeMRP",
  "key39": "5HyVv9fP6Ckrdybh81MLscAfWhmQGxeXdshQdkNR4jbPjhXGUtfJwKkrPqGUMqpvZbRh8JcUo4zebHNC8LJ8Y6yw",
  "key40": "6Nx4pBqXnZwMqc6PfaYWxTMrHrWL6iajTPdUjouU2QtUEsuuXJ7wH68aX4yyws2JJsCmUJzuspuWJN1UE55kMUV",
  "key41": "3oj5HLyCC29HFNvWSYZbHYdh7EpDjW3v8Z5dGi3B4dQb6phLcTgN9ZE8kBvuVHXDq5KDo4YLm2PeA5baQnGPoVyD"
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
