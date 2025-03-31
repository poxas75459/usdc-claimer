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
    "2JxgfoXLkzBj4DGXqxNspdUUwdcsdD5CxhTTDi6AACbrS7vvzDgzEtBvDndq6qB3HXyhneLSMRSXKuE44DZ9gkdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b52rHLL8Y1HTaifCYXzM9FvDP2JAen2Lc8zWTqqs7qgjzziLafTLDw9EZgSiFdeMWV2pZxLrp3AauZiRnUkDGHr",
  "key1": "2KY4uJj62sv3LC6Nv6S6DaGZ86xUwtNm3o5B6UTpEPVTg2Xw9t52Tr2M4xe3aMnJ7KjFTgFKN5Be57hCHPoD2WJV",
  "key2": "3dVdEKq6dXoxdgGuqyULgonayGAh1TSdLVBobp9tZCDS5pwChGkT3S4L2stv56PQVcceicQMEWi4dzcJgyahHPMn",
  "key3": "79qMrrX3vzba61GMdDuHi8Rikd3TpDNNHzX3FCpJjBHj9u4vi7YA1P1G6yPS9WBPkZ4y6K2pMNNjDsVov6pcP4x",
  "key4": "4Xgf5vuYxHigABXTs5XKG3JtyiaBCfjkzPQkYtPMxo767qubiKRAER7SAnVJFRzErq6VFCWsXW4BNxRvLjJPMF3G",
  "key5": "2oonXaLbZpTqrvdCD8xF6k79FSn366EwSq56ouqMeeRCH887eYEiB3nAjv53fPaVTMkJpZxnbtswYfBvot3gfoXw",
  "key6": "5sjsRjQhzRoaCsv47vgYCK9vjCkpgT8nstCvwXSdNGNgC6m8zsDWiS5JquMZwyB9z7KqQ2i6JLpEMyP66ipESk8b",
  "key7": "5ATa7SqLcfbbz9iNomwQA43p57k5ixnnxiVdejZTtAaeLM4m1GD6jFgEKvsfn89ia28moYxsC2zTuHkHiLQkcNfd",
  "key8": "5sioLBjqKuNFhxSNCLBVgyzKUL8rSuJcMn46zFdsqovGFYfaJ4Q1Lc8khcsgTRiopPzcGx1KJAetKt6hz3G986oV",
  "key9": "57WrpHYxakw8t3fExKR2wy4aRnJm6buqA9VrM8AwogEzgHwYfpKxQwDMcdTTsQhFWihJmojBbdZpwbLJ17FeCfms",
  "key10": "5DRrJyvcV8AroWZqDXzxyCW7GifaRLDbViJkx5PutZTgqh8Cy2uiqCWNpZSng3Q5KjQnkPxVHBGAHdwY2R71Eixr",
  "key11": "2aTCq49Z2UcHea61RfnkJeJt8xhT5V1RJFpYxmqJkp1PgKYfGTNFyS3XnGyfm2pwyRtHiEpMXWme7en3fG5SZsUL",
  "key12": "42ThtxVvD1xpNm5FN7Ph72RfFDfb2h8ndb6j7AVyjJaaw16sMbciRDAAx3uK3bnep9iyBKu7mGFXhbyirWJQbuJK",
  "key13": "5naWixYjqJeUmqMLjUkpqSFiJFtWHAsDquzdh18cLbDuAaZHqNvzr5XDn9bXB1FMHHKjxmLL7BU7BgMHYPDJhWSC",
  "key14": "nYKAGK3SSdTsvMThoLP2NvdmfpAxHRyw5dy21AMqcfE7z7LQ6Es6Y2jKCLnFhi743avNTmigEZqxzy8hxb4F2Me",
  "key15": "2iEWWmea2H5gMWGiMAptCzSkNoYSHmV1cgVTdRpuasuqGTqr1pAipofJfyWf6nh4X31u3hhSKsRQzTFD8kDg4kMz",
  "key16": "4RXkBCZwfS5EyW2Xfb88jH6gJgUXsGhe4wUyFXMJdGn3KpvovQyNKJchXeT2irLfmhAmd5dkPuqcT387LoxvRaab",
  "key17": "3QAGbSC7f5z8hrDbcRUDY9ubhqFZ1u1XDVAAMo73TR4QpMUyuWYJAPtGVmHbHhe9fdfKfSzzKLTfk4o1KKd6o2Cv",
  "key18": "2F31A51R2dh73UwhPyuSrDXQjcYa5V6rzWruYGLaXSLzdhSTwsZVL9k1aVCGmydKYtSefnKYPft3uG8z9ZQSCg94",
  "key19": "wLoDAkJ44STaBJss8FzxnkZQ33N9BYzwBfCwXiWbG4fHJTGg6GvyBC4Tf2yZb72csUBDDYnLJYiFk2gNgrzYB9q",
  "key20": "5i4uQ7v9VKfgzYFVWqKKx8ZVeZYvzHKnbC2NPEmnb4iRe5S19pNs5d9oV38UzMDgNH4K3XMEjDGbLX6YvCkxKNS8",
  "key21": "41Cc8PPMgTG9TrESoG5WgdsyZv5bJu5XwxrRtQjoU2NmNiqWwipnVimb2rdGJCKTRBHfhUDN4QvaMKcU7svyLLmX",
  "key22": "tPD4K7RwphDLQRZf28MemgsEYykweFLfAcbsfp1sHgmfdt2UprsZbxPmzZ9Kt66Q16A3LxPsb5GdCT5Zw3r9B5s",
  "key23": "2ewSpwv3dRZUUgJSpRXHugHsQMfEEX61jgYknjL9geqbpDQ5RsetQwGuRAm3bsWWjBo6eL1XwgwzsTieSW96UzEZ",
  "key24": "uqZFwnHwKpNtYmfEwMudXyrR17q4N93WJskBKoijx6Ssq393w7bjqxXPL7HEVyyhE1nypr4VeDkgot1HdcLRdjd",
  "key25": "u7JhGLoq7ZE9kNehXbmNtmLASHmrCpRJnshFSbwD1bojnBft3EVnF3z6RLtyNqpJv7Hw9xEJL27h2xbcfkbE2EM",
  "key26": "57CYvt8TrctMigQu8zTvfJ4QGzyXrXUAAGy6L8L9EcUydfCf6nV3gEURpPAbKZ9stmmouZshPanR1YLwz5TQqNjK",
  "key27": "2Zm9FgU7nAidax2Tm32tyKJ1uWAMiefqaeSWrsNWodg3aF3dF4vkubr2uwT1eVQ17kvFJBFDGoVtSNvzMjLLS1L7",
  "key28": "hkESjq6Bv8FBMYHPgQggz5obKwEZaAcecToBmnTAWK4cTprAoyevFJTUsUyGGMfpX6NAWDGLtocWfQHLDqx2hfR",
  "key29": "3iCtsna11FquZprYpdk3WPKPr7qwsZpxRgcYqmVedofPtNV6KwwgdLTmm3JyNQDv9xEM1bJnUTYrAERHdW3Etc94",
  "key30": "2K45oPX3rE7pP9S1EhpvMnNpi3BgCym4voSe5YCkWFa1xq28tXxJWaAQgzfkSnD4kSsazCfxMT5qNVHK1e5CM3wq",
  "key31": "2qXPWDawK2fov3Fivf7qbVrjRmL2D8yegig6jJSiausK6vMtiKpH6vLZvVzz155JiCy1RaFc9ayhXjbCZGM6csdn",
  "key32": "4rxndeW2ZPZ4ntj7JepbrU1UhCQZwXTGk9Vuw2Vy2UtRhLDcgMWn6gTCNUvdqf7UcegzeHPtA28WDktc1qLKs7sj",
  "key33": "3YP5mg5P8TZqofK4AogfCJqRFLW1pBW7S1arftMABBgTEFbQPoQ3dXFJrR3cNCjT2BgUD9n7ZF4ZKd9Ctw8EjMSN",
  "key34": "zHKi98Sucp4eHv7irdH7etHUjqLGz7UYZb83aZGJ52eCwLBk3QvwqjgfQjcEAoNZjfncDNvSQe7SNyY2NoQGjRV",
  "key35": "5JSt4cxWGCYTfim32zKgjq5AT9A6ixHzWLSNv71uztfXWHTEaKAduUhRrTJVF6mNh4GfXi4TxEYFqDMJTsKVs36X",
  "key36": "2EYoZYxT4GKw8PeaZo9qqg9RePtfaMjo8hEd7eCQFdYvcXPBpYtKF4CQDHQyT3x2B3JdLjDV8xFc6523WLC8uTYK",
  "key37": "5HuP1H2dEPnPSSBDacAUYcZrkQyvUWDeYQNv5oXyRiaApSTYiqt3BCeaicrZAq5L3JChfKsKSGKWPgRvJnRUVJU9",
  "key38": "kwRgxPFXiTpE8u591Lv68EdRyprReyqqnDMw7goEH3E4w1mW9mF3roM7KwSmPM3RQSARJsyeGWiXHYp3a6MagQy"
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
