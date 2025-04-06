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
    "32CHXuJTo6CUb7BiN7qb4LQMF9ty2wvqnMB3vCbRoHaZv2wkK1xkTAA8iPYfnWwhQG95sFstGHQdX9UmFpxosJHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eg8rBsMMqycutxZraY2bNK5CZDHusfiBUmSS62j2YYxkfCHkvfMeZGRiTCFNqmuGDgf1N3k3E7wdV4diQ8NKuBo",
  "key1": "5VskfQ662dkm4R5Z6zMPm9RN2r17xiGstSHrrVVGqJauCDeZR5cHbmRtttYyTxLDT9bfxeyedJhYkDh58mMCgj1A",
  "key2": "2bB1aJGCmBpzkoWvvz7c3PRVWe7bonAjtBPrmtGr3d68bYZXGVGacHcDTpY4anLsnLcL2rmCVuvEZyz1H8uWN4mi",
  "key3": "5Ym5kZifUeumeuskSfKQfM9e9H9bXB87xkbPhxP1QgR9Bea1mbTkFrLn24WreRdxZRjXV2r3tQJyQvAbWeG4Pisr",
  "key4": "2GedFjdME1F3MeNgS4fPB6tdCtqt75DEXG5T7poZBtJqNSezwyKq86aXuX4vnjpUvCdRr4vRBiyC3WjHBW3mTYLB",
  "key5": "3Dp17d8pgn5jrP1gVhTDxRjsKXckbvbVdFkveHAgbAkea69WjfyRsLn1JhRL3TJh5hws489hY7AWAjcNsaXZRXko",
  "key6": "5dHba1VRyAj2SZoaMjUDEpCTztBqvvm1UbJp5LF3HBCV73rRHfE18hUQ5y3gkoFhmP3xe4M5CKRCKua2Mze6kPdv",
  "key7": "4GaYg8GhzWgM2PcPxBvoHxdHkwkc7AodUW6BmnAtuUpk23a4NZs9dKiZ5cjY2mdkSnYH7ePqmtK5Vfqtm1zzZGbn",
  "key8": "3XmuHz5V6sTgjJJQy8xua18Frvze7hBK1jH5kqmWn5VM66oycATNF1CdNic7VWdnBA3TeeLc66JWZmP9vJhZzTf2",
  "key9": "5rirUhi2XbDZsSWGnQtQDrbDUbytsTL8jLcX4Ji3keGbEgXsvCPuCSyooGRupba7SymH2T2qwk7tvrry7AAveQCu",
  "key10": "3q6te6efJUEok4pLGhNhQ4qKmdzJmPogtcAMxBNroH7mpku5a12G5gF9eFcqECYt6hFE28mRq9atVRhXr8ysFdip",
  "key11": "57jfioZftAKbZXueaRgYfXAFARaShut28NNNpTJC8keaEirwZWxM8ySrYnt7mLp6P7h84bitUNRzpBj91JV3h9Bf",
  "key12": "2ZjpUVD2EBrq1BQmW3YvnDshePLVrbLug13VFeggANP9pg7KTwwvMQg67vjxEGDM5Lf4T3vKRjM2Kz5hDUFfj2j",
  "key13": "35ixWxTUXX3TgxCV5U1MwDgCyCYt4KQTDKrUJuYi4wdb2ZvFri8cjaz8BXA1g1bbvpAzPPwYX96jbxYb9JAfshPZ",
  "key14": "3aNxzBvMdTK6Kh5u8C9fFLeLWMm3KhDz7tmqNH1QTnaQEXPP7LMe6Qq1A33S4wNa4iEJJpgFbXtTwmsdj28v7bhF",
  "key15": "4C1XXbSFkLGYKwT8hbWamycxYikDkeoWrWWT5oPtA4QJDHdQjNR8xi6k755q4t1Ygd8tBJejSifq6iFy4QjYc3Dd",
  "key16": "5ZhXGvbrwF8Jm1qTtu1XvLrv2vsPb8bnGPayLZ16wa6u63iwHsVrzRuJDX6pDtm9LgWUQ7E9UT8zFoziCnKa5z1i",
  "key17": "4nfyzWEzeuiMHdC1kLTnpXbap7s7VmsNA1zEdFnHvipTzzv7tBvaCPvz9SS5Cs9hmGrXGXTLxze36m6e5GFnh3uT",
  "key18": "29xWPUhvLm2jKyFfU3YVmW7bUHkDMcRZyCnkuwvfX6J7vvh8BaisqY88SBHcrqpz5NYZeBmzrsER2ops5tuNjvX5",
  "key19": "nFsMqLszhMZED4FKfuCi7UqETesHVwFTiQdLVktYFCbiVHQBswuzzMfadm9BYUQ1DoH9zgHW93GMwdko3DKp3x2",
  "key20": "2ArTtuFrJjXYFsb3rCe7omoAKp2vTxKmYmu5t6pY6EUnRXx3Sp3odnApNTtcFMfmPZA66Ht8uzW4dbd9ghw6QCcV",
  "key21": "2igNG8HHKyJgDcp62EbXwWPCJDFtoxcin9nJyzQ3Lw5nSd9gUMMbERY3SEp6ofFUt5U2ZbnefzDQSD4Lm1mwXEs9",
  "key22": "3egYUqnpaxKwuXt3iE2GoLQDUYELBdMCnevxH2z5CCnE3ePbVcuRiCrpdkmc8vc1hTHk5vGQZo9ASThQk9a8Qiy1",
  "key23": "2gn48oNLuXWN6owwe5rWx7a44FproccaipyLXUTuonXZhmHQY6xJ7i9NxS5S3ExUTqh1FPqvQcBVzHzSYGqwFxV6",
  "key24": "3m3ZYFuKAoWfqzTQtf8w28mMtLCgJdbsjDqNNvfz4gH6KhFgFQrR3vvfxRtD7sThTtXnZgqvNDuTsySQyfq8z1XX",
  "key25": "RGvDsqgQ6WeiyTRt4dWjkWnfYR9rjCP1g5F934pnDKrRSBRa8C6ay8oe1zJhVog5pvrWM3M2PPaB3uHzhNnXdNQ",
  "key26": "3ptbSQw7vCB317kd4xnLPrYgmF8XEhiNp7SX4XqeobqQP7wVonEHE3cfCkh4497qfQpKopdQKHX3gXXb94wGNM1b",
  "key27": "54FcGHcJ9VarHgCJBLebBHKxDNAFc81dbiJrGRd4MN9XVnbcnMW9TGC4r5G4zLKDMwJ8wdG9WTGjVpHdx8dNZeP4",
  "key28": "2sQTFoes8AehBERAUWguAaFDeKHzJj1Vcdj7DX3cXzU9pVeXvjLrTaR4PXy1nf8bUMr9gsDYesdqi3ojgvCefDet"
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
