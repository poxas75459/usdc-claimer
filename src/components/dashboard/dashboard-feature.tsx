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
    "3iXCwqqyXZYK9uqyRrjSVKuMB27JMcu4zR59yNANehAsy7evsyRacurrjAELPAs5ZhsPEiuAVEXyYY6pSUnDsPPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nb1FVf1e44fVFme1gTEksjJkmf4nRuMGGHfjQ5gtDdgRpQXMwqxY3gi5VNotVK8JcNfry7mRg15Y122okQCEskn",
  "key1": "66dhTanFeC2sZTntKtFo86np9D44jizvL1viTsQDshg7KzChPYmbKunBBaELLodxFdu4tntidmQhGCiEJBd9korH",
  "key2": "5DFL1uXpQkJ3g8W6CANp614TUzRMHAFYAyhRWPjHdfrT1TBypoZKHVpCg3v5RK7R34hpY25nYQtuu12aBmA8CDbS",
  "key3": "2YDe3SzAJEXvuGRkRve8xiNsjYaPgSWfRMQAqRwqKYqyK4s64hSqgkjYc29UfwWeCawJX7dR8M6VYCk1tGDaQ4sx",
  "key4": "2SYt1tjNHLUiV1gcBBoM89Qw7zVizbW5fGZt2L25CKAZDwvHL4y1WApFA7vY5o15RzmcPTYtf5xyLcPWpNx3dvny",
  "key5": "44ZQcoDTWs6vYj94Voj8S5xQDJFeRLfUkAycZffAuGN6VHqYSY5zvYLEH8J2MiFaTJRT7pPy7dxUTZ5WEbUZvVV9",
  "key6": "365gcocKELN2y9oJNyEBJfXCNwEYyjN6AGmALwtVsRUB4HbHF5xB2jvwVNKeNbprDXcYveZ11nnUdtQjK9R8acZX",
  "key7": "58d6rL7C9C23maKCoiyn91WYt1YuziHc5Hjs7bsu6taSmhZQ74x51PK16CLaXFPzLBkTNygpE2Ry2rbdYQLJp9as",
  "key8": "5qc1Dno6qXUoxDHyGhuUzXMHAJsAZhiTmgdTD7EiQCeNAZk6bdSNjPmd92U7hocg2721unCgWjN3KDwjurrwpYkb",
  "key9": "2XnX4hF5cMQ9BNGQAykkLBBJaUJdcDUp3aKYiCXkHFQjzdMV844fpXTnbQYRVuVqmJkLk3qLNg8FffwYVeqXyo66",
  "key10": "2r4uqjpq2p5UH8fxgd1tCHk3rTwoc9a4y9witX17SzFDzuSR5fJwvaSHuarYJkCE4va3KYEmwi81R3ZEgdhcKgv9",
  "key11": "4oWfgMwfh6igiiSWFCJCnJR43H8PNqKPkcmcCwKmGwCGouq8mBCx2SdT4Rtu2RztoMtTceAi312tVpmhwSpKXRQh",
  "key12": "29fNFAyucrYXD4ehQvXMghg7prgfhirseR39kaBk2vq5bmpMz3RgJyAmX3ZKxcVFttwfPfCLWaorZtQExKpNNrvU",
  "key13": "3ME4B7WGvVkPuXnTKG6KLsAU6dgfx7Ns1MUtdf1fZJ1zeBvzZdTALMtCx1QXjvvPKH3YoUpQCHKbMo2FHiMRthcK",
  "key14": "U2qAP7YGb5HpGZindmNe1A7tf6n5AxQWw1CC15oTCJeiGGBYLD2jEFKZmKBUoXwe8jH2JZ1bf1Mh9zKbLG1g85R",
  "key15": "3Zkgu4Kg5w4Y231ZiugVuuYDAHvcuV3R4G1W6KBVhthktKrRH3CoiEXC9dMFGYh3mnz1N3s2nLDZmhiUTy88rBGX",
  "key16": "5G2TSqMhJsHMzxnKQndgase5iazHMAqFBMGhqRWQ9K3kXu69crHyizoESX5p62eMoV8zZAPv62tPeb7fk4VfZw2F",
  "key17": "4abGLZMKA8HXyD3vRvAWPoPkqXCuDGhcrybBXRfhzdpSN9tBYDYqsEFQ1g5znZPR1fZDVbfANiaTnomBBszF8V4V",
  "key18": "25k32wgDXzzDEYtbEzjcUoR5M3w7Y42Qhxa2pKCksakNZuxqiZQmG6i7L9mMxRma4eWtm3E3uL1bVCqsidcq5CcN",
  "key19": "3h54XDgUDLZAdLtxWYFdV6uL5mH3t4fVruY8aUDjgVznwcyGEk5iSftJStdKgeUu5XqHMsgqtwffNkay87s9CTWw",
  "key20": "4yaCNxTdeWswVm5JUsgP5fqrGphPzGcTzgRfDE9vCSE3BzCZXo4JXydwVQ9u8FmFifHemKuN1imRW5dUDZyKBXqr",
  "key21": "2R7w6gqvefpmnTJVyEFATeBuJFdSEsgTJoPi4q8AQgME2DveeTxRnRVaJdoztKG5TiFwZg1PpbwBgKNjBwtunbAQ",
  "key22": "5i9zPZr6XbJy7StTdEMLGpyM7Aaca1gBkdeF3d1vXMxkM19nR9FSrSGd92NKd3foJ1XrKZg2xzoPgVNsdpJdFcMx",
  "key23": "5RaDwHfAvFbH211qugA1abfRYcLETQreQq4v81vmepZrVzgiFvt5UFwk414XFsfX7N9k5DNCA747Py3aut8AXGsM",
  "key24": "d3JH6iYfBLHyd1stdxjDRZa5jMmRjG6iwWdNMxn2GZ4gEwtdbxTDNjkRTPUNxRoNnELeRJw1PpscwzTky5boAtj",
  "key25": "4Ty7UfQSzaQVGkMRenRSt6gP52RLxjpYw5jGhkQ7wusfBPDaEGw3WFsXqaSDz6R7bsHhsVKmEF68UkPneqPSM5mH",
  "key26": "sCU8dXVux7tURntuyLLXDdfSSyJtqXrAY73j8wUjtaZQVpcC1JoWSGk4tpTqWtKd1sVBKeskk8rbsCT8G2ASdes",
  "key27": "5UzP49YNp7tYD6wR8udXFxvgKLEJKmgJ6dxrLDG3ZnziFVhufBHmNQFqvLiDnmK4wsNdr1vKtYnGrWNpKWBNNocM",
  "key28": "53v3dMsFMaBKi9bDawTYQUcW26UyxrB3Fb16fP34uuKLXs4XQQPRYgAMkF2sebjMpDrwanM3kgr4VLUQhFXUozWF",
  "key29": "2zk9wnHoqgrRHke48wMjVojqiJvYfWrBqNJ17URVKqwamAnfaJPziLhcLF3k14jQPYX2gf77NSA99RxfPWaBCDF8",
  "key30": "4A5DQrxtRDwAYiDUNYBVKmTTNQPeCjVJtqXpMc5frdzPrLVG5ch6gYRkh7CmBsVnTBWCb2SdBQ2wDe7EnER3mdPK",
  "key31": "4Bhpvuk5qUa8tJZZqLaaXDaPTZoRchpizCNW8Kd1uaQfYV4a8Xzaw8jbFkhDq2nEdFr4oaSJLDdy6Ry9iNqrzHCv",
  "key32": "QFENXbxn5o2vGLvNfFj1qYSXXZeVfAKyMHu1RmB2gWycrZg3RizEwyTgwbw85JPkuymKmRNKimq7ro5i37rEouo",
  "key33": "nGhPwhJwhMspfi45mjQFeZC2PkbNJU5vG2rRHtc95DF9pKUWPRA3QYwWToLK8LcA7io3nFCpMVTjYceF7taKMW7",
  "key34": "5qhUGaBUxDLDUUqrRFGTCANd334KSELfKkRs2R7FrNJPFXBd1A5dM9fRByFxCTee6bsFv2fE7gnAa19fJJyFvtUy",
  "key35": "k1SPawVWRrSGJwM4tZvC2G8abkB1BectaHY9rZfiMm7X8HqVrWSPW9mwPZdQCbSq4gDi84zanP8dUF6nnFznWm8",
  "key36": "4P2wjgk4SFasQgrYfb3g5TV7rde9ZBy1PBjkptMDaCsqHMgNKP7LG6UHwEp2sYwT5kha4PWvZypBzXDNiGcUXhv5",
  "key37": "5LkQYB2YZ2fxekc8TS3uwmV7mp4fDXFdUaqxAEBMRa4sjuVEDCyFkTUuV4B7tGEvvZhksABiAGDwc58sFjwJKisN",
  "key38": "24qDM6dquZ8awkRvPQeoaJDWD1Zof4RwsB96YeTkjD69iJ1UgL7AM3mbBrCywEnHeLjyExMuAoK8YD6z8oAwiorU"
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
