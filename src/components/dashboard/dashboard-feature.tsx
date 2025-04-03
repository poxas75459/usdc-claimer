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
    "2EYe72292gveM7QKYSkbZ2DNaGv6mWroCYqsQ16qJDnNocVP3ZD6QC2dwqW67HobxmZXRoRT2L87xtzw4WBxP2ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNa2mb4vsNhdYA1m5d1WDJ9W5oCcBixRmmeLjQ5PCNZtMM2YZ3ARCxLX62SBDgTLCqLCGHzABK3TQbvo7S3bfpF",
  "key1": "4EPNn2s9M351SAvBqcKRumcSJkuUoPpWuSJWfizbrVXY2NMU5jN57EX1Sj9tSo1cYHywwzekoxKQAsUCvme5UNf7",
  "key2": "cZ6PZimYShML4agGiSwp6sJA5guw6PeVC6kBbiPYEVdqq9spuQwMRV1S6ZehRVK2e74yPXgEZsUHv9tEgzWXzGe",
  "key3": "51LFszWJ1NH2xdYwzffvrdw5Y2qAjTqQXFisuYDd8rDx287zCrajrMBpWjLwZsYQowDZyz8LCSVPRv2DQ56gAZmW",
  "key4": "4KNybJug4JEt3TvnDnEowBD9QhRczPNDrBXHfkVNXjpJjhxU1u8VCnkoLYnLMTq6wucNagW2mkZ37fpA3URs2tAz",
  "key5": "3a1MQcVHSgwGpiekXGZ3R7CP3eD2L1YiyXREVG9J2CnykDXV5Ayx8EabjENye1FJWekxQgyDiavSSjz65hwoXsaK",
  "key6": "3jKsWK5LGReeXuDCiVr6LADxPvm3mX3oasC3kLkhquqBCd1mwo8giKx2akGtVFFDLgmGJJ6cd7WnneC9Cyd1XRru",
  "key7": "4JnvTLpJqCP9MQtnBTWRnXmXqFaKJXRYhwef8ZZua7B4odMfQNZACvQD5GnnayisCMSs34dcqkZaTcYUowS8MNNt",
  "key8": "k2p4AgxxkWF9CxuCY8pZUXTXh4GSQdByeyXxpT4WgryGtfN1ES5oCD1ZRCembGWtkL5BUPRc6sBz9Ap22YPkGD3",
  "key9": "29jKWRbsZMz4z1Uoa6FzbRyV99gjnz9VxXNq5TaJgkscbJF5nng6hZEAHpYFUgVeXQtz5eADsLiYWnSxs2CrYWGy",
  "key10": "2DK3sxHqEyyTCeMJxhm6t98BSmpJXNoKFkFvKZGucwcFUG7LgVpj1ta1w7AmR4ubMyiVoaiDvsatTAS8tkMmLp6n",
  "key11": "3LyUxwDq9waBuvB4EUFFAmFrt2AiJApgtVgTLdX7T4r2VPuKE6QiWWfJaaUGjLcvbYkQbysnJMMAppqEb4RQVoRb",
  "key12": "5WimyjRBq3omLAKeQRab6XfsKLsfr32cVrEVPRvViNoX1tUzsKMuSen1FvRsxVUDVBYyf7oPC7FsG7MhbYwA8ho9",
  "key13": "5a4527W4AB9CAobMGpZNYuJ5fkqW2hNXaLhDVS8R3VpoPWXfBfLvaEevu3ND2CCsF5bgVSQNQduSbUVvB8e58Fxv",
  "key14": "PRw2vmsksph1xX8TNDVJ67Txbzb4b79bW4bpb5kNKoJkMY2AVQQj54qyZTjWFmeb9UfHpR1aQ6NQnz5chsJm3MZ",
  "key15": "5YrCaxVSZPBcSiLToVDohPTFyGGiug8oS5KkDM1sDHtHtJrQqsSEgctadSdSQ9GT7UoECxyqrBhZV9FpzPjGM2ER",
  "key16": "2UioRZFuYerqJawjonbmqGuGW1jug8mwQZMTCEvFBNaBaKzjm2wFhur2s3wG6zgEqZ3xRR9JNosZNeR8ca7F1xGQ",
  "key17": "5hc6F7vSJDDTTyty72utn7eR1pN56rp6Ymx6jZ9GTTD6dW8zByUd3js6pNLNhyGPM4mCoyPsRKgA8bbsEtGrTN59",
  "key18": "4TDGnp4n9FqYNvztVp5uYL5G6KjA5gswVazvFXMDj7PyPjKxcecntqZU9vDBX6ZdY8seXoZHCVQedFbh69caS5jG",
  "key19": "5suLw2r9tYDiiW5yWwU4txoK7fZZCMxwYShkiD6KgG5G56d6XSW8NUpiNZ3Je8jgWrcGfahDprUDv35PfZCDGP7r",
  "key20": "5RxBrTE2AiFY8UwsYrWm4uprSkH88dJAofaHSP8DyJBWkUtmuSaS3bBLGdDqBWtue8f2ZCv4QDuShmLdQxjEkDWJ",
  "key21": "4fYyyvYDfWzFfXbm9PSUEw2J8EvJv7gvDPwR9c84a8dsoPKTDVbAvkZbUz4v7QVB6SEWL8HUVNyq9BcFrR2zN5K4",
  "key22": "SNgeiPETEFGAuRd1Fk2uKrPGyaSsgpnz6fsBvAQ1nHiX1Ke7ZeMTZRLoMa1rQaVxVaHgM28mSW8QCz6bsCnvJKN",
  "key23": "2tz6UkBwV9MfBwZxEkGhMn8RmEYVBgtF8SmipbwEwpuVvemMqyZM1QhnrFns96bixnJ2PQ3EgkTP6ZC8T1UnsVhW",
  "key24": "wdoVbwktqyKRNU1VKyXHLs3noi75ycAbrCQFT4C29p1VM5KymvyeMN8uK37TobziUKvUpRFAJpAAL41JoAWFjpo",
  "key25": "XN8gj4t3LNELENSnbiBHpA2cUYDeNYPsMHdzAM7gBcozLifGw4rJZGLwVmuPwiyw9SZAg81HBeuQr9fVXJ3k6hV",
  "key26": "58nLMgFQWCdBu1AtM6LLtzbto4jETqSsbTZakewP1Dn5zaCA1xRpeGSWaThLxDtijoqw3WHDw48753xetzx4vrwi",
  "key27": "5rpXHbwLptEX5Z686UabiMPPvZqQY2Y9Mwka35c4euap75rxEb4YpuSY8BQNKAcWdjunGd6g2Q61HDWcyznS5hr8",
  "key28": "4huP2Nh2EesUqf43zRtiDb6bbJUh9shva2U7ZBayr8qcJ9fJEkkvFoBcWUAnWaYQ1C1fyFXqriWR3JNJhFtuoxmS",
  "key29": "3Uezme8xrgRw5KjSnFQmj2VwqLyJhQGvyU44LtJwvzdvSgnJ3iJcaqJeumFMfmDE6s3EkTJmXc7qoVxGi2qB6Eoq",
  "key30": "5JyZbDr5Bg6jMutJaH2Yup3ktsXKNjYqbBqyyAV7VnwUMmECUtJroxXqcn6H8uJamx2VVH4SBtZ8isNv8s43Kcqi",
  "key31": "34rYHeVo6ic3pEmxLBZS8BMSGfHRAgtDm1kRFa3MFt4o1UXp7YkKFfmYM25sBNrMwe42i7CLm954ykqRjmy7K4qp",
  "key32": "2oD3NAYCXeBaSYibNk34rfrvB3RDCDibypmCVStMm78AVUm1biwp4fX4ZLcJ6kKtyn77BgofV7uU5zLmF7kPYheK",
  "key33": "61aM9gBdQUeuG4Fsmfph7ZPG4A7iMnbMgn2gthe4cBnRXuj2PzGHHGZfWk6bw4QFanAeoX41gfQHPv343NfKgNvF",
  "key34": "4WLqB71manuZEkK3utEGCiQ7uMZZQG8rVLWzoqExxBAZfHm1kKXH1QRcRuuJbwG91bUFahyJBcdfRewdZe9J23yo"
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
