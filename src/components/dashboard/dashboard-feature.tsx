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
    "4Jrkvn2jbwnjcxhdWYkXnv9cLrNr44qVH2G3S5MhuAomQVcJUhEoGe9SPX4fFQ5wQUyFPLc7KNYTjY2vSAg47rjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27YKMvmc4Lr3fmJ4Mtbg8wVpMV99iGi4xLG29AjsKzhtzErMmN6t7Q1U1NZKZzyN8GrekkHVJZaETG3HoxA6FzCk",
  "key1": "5ygRLyJzVBcPJiygA7FwT8b5dJ6sDdVjpe2nLhLdPD4ow5uPxxSWWx9xjYGzsNJC1cF8BaTsVma9yWTpMbGukF5i",
  "key2": "3A5FgFSToHTJ636ezGRdThdtnsZmEsazTTgpx9Ez2M51yhW9CYB43pgt9aqP3gtxumZyZjDnD6mHHciX9kU92ung",
  "key3": "3dNAMcqACQMFSQ2qRyAKywBNsqM2e1z8nxybMSTzMaG3ByxVnEfaNM7rgme8PL1jrjZJ6yBesNHP6sNWwUSxPpL",
  "key4": "fTJpbhYu54bP2bPuHqaDpuW7qj5wvPKzmk3dU7TjWbahrZfVJK57xSEr2Znnz5fnAtxf26rN9JgqQauPEeVMKUA",
  "key5": "GRZ5n4dskih4a9E1YXMtYuBGcLPMztmRD53kV8NXqDHpDvkCKUXsN3SeivJZvqqfpoWymb8Sgig9Co4qcaKhExC",
  "key6": "21fLk1JZg17h2P2LUopVLBq6dnRfYjsWVUJziGmQARMapu3iBRYxqSmrYsqcE6mp4kSM5rhJVgZDy8HyL7KaDm3g",
  "key7": "3eEUqRajgVwSzxVTPvUiu7E9atB5hxRNeD2o11fZEQLzw3qGbZCQD4XJYNNJ9g3GrFYF9SCSYpnbDrFh4gydZNic",
  "key8": "2653pdjVGpTwwjGyjy5Fnsh8BpaYNzJqk3MoukzCakgFNXULHYrfEHfnK5yQssnENTxzWsbJ4RvNvGhPgtqLNU6e",
  "key9": "3Dv1rfBb7PtNZJhR8GT1Ke1QMBYiuscyssBTh4uj4oEATibWEK9UsHyKdwFG4BKfkLu4df5sJEi9z5unS6fqdpPG",
  "key10": "2k546aCHbBRreY7PbWNmMhJqZWfYzamrdr2pAjVGcDHpKCkBnrzC9A4YKpSeatRvaZA58sZdQn2bpPyuWmhEs8uA",
  "key11": "AecNRgKJJdjPkbG3ZGeEg7nBeZqfeYWsMzig3RDResvBxVCd8L3yHNystWMGoDTQwgcnJBjbjc3wH1Ykt8XAsjq",
  "key12": "4VZS36zpnn4BvumdTwEHjPfHXvs7XptFhkW7KX5jCq1k6JTLFUyG8bZYQPLAFxqTHzLtAbk9ucfpg2pxBHd2BXoR",
  "key13": "42mtRu3AP5xWZTL7iwKJjBPofsHNQtgCy3geU2gAwXXurCY6CG6cikYE3nmn8FEuaryiwWQemNPZEiG13JqQABCL",
  "key14": "3AP6gsnqyGPg314VMiU9bVLBtS7tjJVsU9u9DsHjtMDo4Zb7f1pA882JLXNU2szqpsa9bsYmr79SfE8MtpyUkyr9",
  "key15": "2FUB8pRdPixFKRp5WnoKUeojjyfZrmwUAQiXuHpeUcoMk6amZQfjLpmADmSQxT7H5Kez1JNq7Hjm5wgmFQx9g1Pf",
  "key16": "3tqVAfDZhYqjhJHYkAoBhcfXVZ46XUnruk6YUDHKxes5Ntw8Up8BHxQWPkPfX5Z4DMLG6WePC9wfPRay9Lk1CxPd",
  "key17": "5zesQ2AvCe3upQGdL9Ebc4bDPSmH8EZCxQQExYCotfKds4P7eWWugB9urybrFcCMsfejQvNTagZ8644ffrRPE5rK",
  "key18": "rD6q9BbCfQD45GkZopxmW28qBPNkkaVNJW22CwaSxz4E2hYp2gMntPMgbXpfFSUkviQYZZDuSEg817umo6kjakA",
  "key19": "3TUzHEiASM9b6wUWB8smLQzJveQzYqFK1BcTpWnMrytf58xtU3nmqKLmMzmoFiD9En11eqshe2RR2je6tS2BPuU",
  "key20": "3g52pGVm56882Lqve3A4DfzV6eFsPnmNQZX8hPKRFsfA9jYh9szd4uTzhDPLtukn7fmg59DDR9vvfQXBG6ARDFR8",
  "key21": "3XTWryueJSQDZfjrPGxAQsQjX8uFBbjB37JpS7B9Jc5JBnAuLWNuGqwMTpNc16MepNEEpjxTtWAHsvHJUUqimKH5",
  "key22": "2yvLVs7Ayaobu3VQv9Fg9GSD6sTEoiDAEhj5HUDZT5rVLxcbfueabFwxMtBAnit3MQ4uq7zb7n3JX9JRM3svCeYH",
  "key23": "5kVNKr5wyoVLttWByhUHwcxiMDnGGJf7ZdtDt1dykCo8jRngEAzTpBWNdRp46gdrB6yXTQQYsHZgaiktYmfEKPdD",
  "key24": "3YspGnxrmMLp7Bi8ueGXukPPb9zfCByKmpwkXpcHpFRo5jNkGhQivBGy6h5ssRTwBPkXGEUAykG5bCoJdJB4vTX",
  "key25": "5x9wktRQWxSpeHsZf1DzJpapoJhGWkW1KXBbmdzFs4kz6bUTqYJMVeX9vSbifPMP9cCJX2Etfmdc6J3gbGJigLAH",
  "key26": "4LrQyfLLjSMzMPDJoszUzPJ3f8axJPabzXt4RP5yAc95n6KUgnCQkzkrX2c1kreFaeou9cT8mcKvKyaR8bK4rDhC",
  "key27": "tVPhZrNz9Mks2xMboCXvARaXxjJTPZqX6NJXVXBvPkToy9Pshih6u6deraVVamQ3bYQddN7s3aXNVxWfXnCWNxj",
  "key28": "34cgotFfdWgmJBz3jArs91svRi7dHAJyXoYNP61uq1CANHpRjxXLX9Lj6fwKeqcjGK7jdFm37cNnRyuGQkPyCEBn",
  "key29": "sXQkpbKTUjP4GQdN7oZCicWA53S1AKT4KoURTEkjbzBCbNq1dNTuUNKhLZbeda9sWbFHe8DTMTMxKg2CRAhhspD",
  "key30": "2thB2UeT2wXrFDeWRmAAhRfapEhLQBGB1UqWDjJPDEXNq7M3VCb4kephb4TtXJJTSzmRN7YFess6zfoT9CHsUvmg",
  "key31": "3u8N4VAeVx9wKzWpwxsvBuqvHHo3dPmHkyRSATwUbN1bDacv2HZaUQd2mwk3CJNbSKUwMGjxhCvyS1VofokhgXSf",
  "key32": "5XoX5vqzDyqoYTby2JMkVTrhWiEemhqVHnCNFkyztfDTwyvdQBL4xwak42b65fT6J5EaiJaKm7QhxzQohGwfi89z",
  "key33": "2gPSUZEtamTHYRKZx5684j7ybWzcxUV8WSrzzVPvefTt2qhdEqb2iQWVXYDooXAAURQfv6hv9vUfwQTtztk1Fg1k",
  "key34": "5y76ztyvF2SabiWtXTxDnMULSHwvBaTMsgi9aykmrsk3r7AgrLvdi6GYwFsT59SPkvV4ws6jByxJeTw7oyQm2Ak5",
  "key35": "Wf7QhUXxKPC5D8eGTxYTrcBZNb4nLmybfoc4CiuAU7XUp5qBBS8uwa55txt3rdFCqFwag3P1WtgVtzrt2wX4bgd",
  "key36": "54AzTNioUMmVpBUxbNotn1tDXLywoASZQLo1K8gj49rA1H5TVmfK4G6Yg4gHeSkyRhoEGttUhjL8zMgWi5yXvJJT",
  "key37": "3YX3DbK7onQFTFp9tvPFbreA1Mor5Sz8SXthNx46SZoPe313Z5zFz7yzgMwF8zTvkkVoWpwNQYAXriq55yLEKK7q"
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
