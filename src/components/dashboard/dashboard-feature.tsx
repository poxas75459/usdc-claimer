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
    "3zUQ59m2TbszSh7iXzqLKLc7EKhzbnYJJ1STdknq6dLaYH92M8EE77AgGdbXr1tjtKg1Rg21ohjNENRuxeSCviB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Aqq8vVVCFeftujjEjuCstL8qqo1rCK8AnZ2e5fCS3QeD6hJHpQwfp8RrHb1Nk4frme5ZBA7wCF4uQowh5naCaH",
  "key1": "5ZDebZfdof4ZghY9hohMtqJ3NhuG1zie4D4ucCYu3p66xLuJNFJ6yZNe5qtqQR1Psh54E5YL3Awv3a5Vtwx3JBoT",
  "key2": "4EM682797PRWSz38Pmcf2zYYUVezMZGX2PUycJSs2cchKupAMR7pC8UdVgAtSDaHGkesVxoU3yruVzVEb1h7hnX2",
  "key3": "3PBwNJYiyPRELbAdQR9ToccwURxdEX3GTou7rhmruKrqr7kgPtQMXotaEcS6JXwzZb4zKAMabosMjW4N947bTMtR",
  "key4": "2kyyEYbCMWNiZgfQNNvw8ZgN2AXVgWrf4jHm854rxyUDCgJKFEQe2cpow4bA3PC2HHmgnmqsi5q3ahMkB2uxDJfQ",
  "key5": "mBdyMutBmyA9yahWqJtGNQEUydPYjpoaofA28rtf75SAuiWm18sxTAHpRtaVYtcL7iNXv7Ykk7mSy2d839PNR1T",
  "key6": "2QMvNGQeVJBzDw5oGfTobecThbKry6kDc9JipUh7wT5P6R8AFKzHD3Th3rMx1oLL89HDFAqMdwKEbGeZe9H6cRVz",
  "key7": "3UgLuFyVJJU6YE3qNgT1D9yLScUX6uHQGjE76QcHCk3adEfty4YWagubLrjYAmdwF2z7iGRzQx5ecHjakkE9Uvxy",
  "key8": "5Stm3QHyAhZ4trAzRk1TXkzkoafBoa4xVv4NZsrQ1W4Ut6pbNLodwh6PDavffCpVKUcbaHgdu3FxYyiz6rfNXr4a",
  "key9": "26wLtNqkWveqpB2whKeCaPyie7r2uiWQSKKeSV2gtrjN1u3SLV7dbKnY4Kqh8E9FrEsoSXFinNN3bAZB5pNuCcWk",
  "key10": "4wCwcGYBbrj6qpWmsfwXBptXsiVbt76v536bPxxnRR7HoSybnpvY7PeeHHBiyEVzQDtQ6DPszyDboqytQHVdNEsU",
  "key11": "66JhomA5aRwma9YAYb4NAx49YcByvFPaF73vMqR3Cbdo7LxcoYBeBLACMj1qDhwBsZCzEc7zJTqHgsmnLQQX8cYU",
  "key12": "3h1Lo59JtWYWrAxqgjG2rnBiogBkKpoy8ST5kqUujhLwHhi2VWqeJ6aqdojxGxAqGxDWZ96gFujiuKGfz5zgFFm3",
  "key13": "Xzozd3L6jf4JyrqnENdPwvKoSzVUdaCc5ymwW6gtaSofKXjybfvq8vQsJVi3vUbgH8cJBsNm3eKJvZJHk5LcM5G",
  "key14": "2pzKDucVLeudcGKwimuaQkqqdc8mDRxcBDb1KAFWBiQFfeXMFa2tqxENFr6TA7789T6Q5b4f9a99rgxPNbut8qm6",
  "key15": "5tv7ryZ4f6EL1nK8JLnVBDEPfEknxvnTs7Nf2bv4h5MEJL3mEAJcfRZw8bNmzWK5qhUj9FepMfmhDQoYp4d6dnqt",
  "key16": "4tbccpWa2jGrJEZZze79wK11WNDuzqph7ALAeZVyZTPUoNEYbY54GHHHaMboAoaTqoKingbZzDauEM1CmaxzV9fK",
  "key17": "4e4imTQ9hDtLAuc7qeMaD4JQ4ckPfVoPDrtK6L6HvbLbuMnbPvJj1oxpLRGRiMrUDae8BHLt1Mp26UYwn3DaGfHR",
  "key18": "2WbPJy7NYLMXocbDsQYaRtxrC3yQa3g56avYUPQ1NQqLP3YABSsCWi4WXdEqJmFZyijjmcdxqRnHNtSunCZSCn2Z",
  "key19": "WcviiwrLrJN2NcAbmu6vvo9ydkjm22g81MtCRXsdxVPhTo9woswF8LXyGqKmgwkvLYN6QzLBy3E1sT9f87mvdiG",
  "key20": "2uxNPvosSaMQHXctBj83ZEk3i3wefMqbfDx5cyxi9jBGqV7G4c8EHEM4DUNVyyxeQWEtfE9zCzDZXsC9WjpDcVBY",
  "key21": "fBkNpxZYcXxW9GexnyJwJjZK84ddL41jvMyMHQB3Q67Pa3E1TS2ic1yzyTaAiBwunqqccYwQrsQ4RBA4Q7QNKrV",
  "key22": "5cYCJXnwWaRTLn4cZc5A3uumm6HyJcVFQd6DzitP5TCP53TpULRU5X53WZgJDbptEvciYqZqTXS1aCVud82spWq7",
  "key23": "5S48y2HHJSiTvizkEhCZw7aWahpFVCnwq4QjATHvvAKzydPKpxpf1DASxNnjRsxajHsvH9DZ3mqae9j3jeWqvZoQ",
  "key24": "25T1zPmBiEKmfVWwfEmbD4CkD1NQN7chRYpsGePMAC1hDC9Gy4Dvi4EvdKQrZ5uEGrfRp3p7XacnkPvSXkW8Udnw",
  "key25": "4RebG9vzwpzXan1MSVTg9QRVhJoetBmFFsfsb53pDaeQPFpx145nZAca7RKrtdzr8PHk3SwopkDtcSQftkcEB5W5",
  "key26": "27JhrgiV93bD3BjPU5XRSu9FWvXMRDrHXjGw2qFVcJh1bbXrWcgPcWxoWzRATMGFLq4sTHRBAfTEZGxAxFBqWVUF",
  "key27": "56RCUU2rbJbm3oDuhc9rLVLaY3bpYzQkA3eHquhyGHUZjDhV8H5GQ9CBtrE21VF4dLs3Tva3VA8jHXgE7idP6HHf",
  "key28": "3aFcb79H2AyqH2W1xDLd1i4krNkCfCN8yLwoN7RVg8ZYvvvnrR8bhPt5qCWuGarLUFEXc7CjN2UQp3sqLEKHzkDd",
  "key29": "4TiZCqrEVZySCcgkqg8R8bMGum8JVNpQBRwLB1yEn6aesdpsHg4NJdpiFZGfPd56gnfY2ma1yL9u873zjajdN8Ng",
  "key30": "3BmDPk2ixP1w3EaCXcoGtsh9gVNCDJfyKFM5zEqHAPNcDxoUbUYHgLaorRkCxoVEfNJKpLywzzgDdnwoSKHvH9Ui",
  "key31": "5txhMtSC3uSUwtYP4VmV6mWnPqVBB3EBDf2Kik3B9HiDLjwcYRQKjSNMEb26qo1UMZj7AhgKby5Gq2de6pretHZG",
  "key32": "2wxpRv8GLMEwhmEMHd6jHp2opnVmhQp17qwXYZh8hUqBq7AuN763aQaSCx7TbwAQHmYTu1fvWP56ePmQwhoGezjA",
  "key33": "4mS15H7jLt2abcHHmD9fYqcUVEN5DAUm466A8jd1zqTiVs34dn3wrFFnWYzKAaoFhcdCbDVkKbkcLRTaip3sjYbQ",
  "key34": "5RDJMThh16QtJgcnjhsCjt5uU5bTDKs5YQS4xwC2TZrVWmA9xX1qvUCBJMe27BNj2LDYwMHEVWzHK7P5kyEzHFFf",
  "key35": "4eExFQr8Q1w2VpkQ3iz76mM9ReZbk2wDUoZjT8QFRfsVoSMFXvZTbbU7gv1VgjVmAWLG2b6waD7bXYVFD1J1x1rr",
  "key36": "2voSniPKR8F9ZSc7a5JprdrhvKaDyugDxbfw8PDybX1n8VJeFwcwyukx6WgxW3KRdxxSGDKdKxrVqBrx3w7WGceh",
  "key37": "54iAKzpGUfkeiLuALvMrCQEUNJypxEzWgtoF9B3C8JqUNoiVLPu5C1UjJfn56rk9gipFLPx6neGp42B4A9b7WcqU",
  "key38": "J4E5GrEaAA2r4vbZC8q9uVo16ti2zBbKWTF2FYG91CTVfPX5VA2GXS2aBTJqfVnsuFD8oUhkX5PtW7QjhVemumW",
  "key39": "tHbjhhaMHWiK74Q2RRcDYhdJHmn9woxkTMWMwnouh7PEHoESsj8E7fw6GsJJPGvV51UkY1Fetr6JzBfipjJTNcq",
  "key40": "3HBDisZydhcusjfajV5r8FegDfJKSqsEqufCABrdJvxgKLdggPJEMhkUWNWdC6VUFHrkom7wjk6JkjfM924iKBJr",
  "key41": "xod3cbHWQZ9EFE8N7swYqDw2rxwT7D1C2mErJ11b5BAuMiLfyNnjV2ephJkBk3BGq5BY1F48ZMHCUBHiRYPbmWB",
  "key42": "T3VDREGGN7sKiW3vEakDXBBzpz6RMFMWTEUcz3Li1p9iyFZHeZP3VC2DsWRqDfVSo69TQLpttDKiNA5QxjgSWck",
  "key43": "5J2cgcaxksJThvwngiH3DoV6EjtsWfJkThU57RKdtW8qRfPFhEPE7pHxBWeTWqmciummBRoPCygzu3Ny7byitdTg",
  "key44": "4KGTMQHBwyvN768PAzSY9UbbGdtG2VjV5Dqo8KP4XQBo4YPYUkH2kYJGzg3BGboUXFgFJM8FhqbR46ApgQNDeGCN",
  "key45": "5Z5AABaK8kQsfM7sAuK7t7Gn1fL6fthEtzFE1boLCjvw5hMoem8ERgnGU64a1naV7j5AmUzu8bFSnwCXCbinjapv",
  "key46": "4JFgLheHf29HvYymy35S3WnptPCG2AW1imen2r73WbWkj6oUn24LNg8Y1D8d7XvrJp8BQ6f8RZAt6eGZDWBGHKB2"
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
