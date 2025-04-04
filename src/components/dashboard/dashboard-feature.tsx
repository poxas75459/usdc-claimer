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
    "2Ke5E3cw4vYR7E8Q27NUxMuQ4KEYSn6vvwfA7FhhmKh96Lo714tTxW6eJf8PuEPp6Xd3ojqLW9NX5MbKbxRPvKrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57w3dtEyp3LPhsK8rE7UPT9nnfjgF1wmaYjMW6v97nhbwaEdfEeMwHj1rFnM6HJBrFNTPncAdcu74vc3jyErwvjW",
  "key1": "HFcLgKSVpqkEdpy8kyiC3ygqKqfytQfNU7FtE8GTQJLDrjm1pWcVCkz5d4ApjJmte1gXZdnZdpMjbtmNHFLvPN4",
  "key2": "267gCWC7qu2HnaageUhHgXgMHhJTvJ952j1iDjyxtiCkL8EfSsNhEm5v5566qPDq5JbThjEFuUbZvLQVW4nGn6W8",
  "key3": "2LYN6sYjYZX2XUnULBBZrc77xz9RUTuYpeYdymhWmpPux3o5pV2QJyZkHQWMNhnqFxH6VwEvnuEssyTdc7PU3Z4P",
  "key4": "5VDtkXayaGvKgy7pqz6pkZW8KV66VdNbiZMArAM1VapfagHLzK5n2bh4jSKaH1B3muT5aroWwPuLgz3qmUvYovAd",
  "key5": "4fBe5ZxboGwGN1c32k2fzWYi24Srn8Woe3MhvLRyhPo3nZR5U6oSkhPCQmKYNGHhpkyH3MCnUK729UptWWQgj9S3",
  "key6": "49LBjiLriEWN4yG3noJf6gJtZFUJJomQXknjjKWejmBzVgbhaZWnmtADKy85Yu61BfRbP3cTx9JHVgafneDuNSzA",
  "key7": "3dJgWiLdukCNFzrNueWhboDK6G23wEU5CL7FeDnLz3zAxqAbUtY9w9SKXKuNaeXXbx9zVGjJUhE5hxKNhcYa2WsB",
  "key8": "4dB1x5r6azBrqzGqcbtGkLAmF7EgZiiyryKQPRpqeV5L3T3J9Bs7YtzfCkCynab2iGjAWHndt6VarM2kmtsu6S5T",
  "key9": "5ZckPuJRiS84PvWPPz4DYkS1X2moBuUvni8SKV8BwoLyDnHFzYcav4gtxj8rWsMzyfzWnzsFPppvKMs7iqPpWDc6",
  "key10": "3Pm7zmPnMS6VozVJjkMs2D3WmbPFnmf9V5gzR84291WBfuS8KwNmibFUDWS2ti5VSBWrzYJFhgmXMVHNdDjks3PC",
  "key11": "5fy3YEFNbk3qkeGMTLKmrRh8rmepBFYwtEhUdYxkoiV1txnch7C9fY2j38HTRXwDEboyHeybtAVJ5BfjbtT29VwU",
  "key12": "5gLPqnsyVVm2gBpJKJEXTotMDmYLDzFqEHdMSTN66ML9PF6RixRq6zo9Vq5NTawWrwiFCC5BGFadfCaRa7Px7Svt",
  "key13": "2DRUDwxZk6TuFYZnBQeJ78goUaGiY8yNWMbtqS7RQqLgvsNP4KZmTebnK3eervpsJJaHXghp9CfhBSdxmosDNvmF",
  "key14": "2wEgsymUjFFE1ZXT8z4q15px9jgXU5aV8VD2VnEb2FS9acqCuaeGxPiK4XVCsZB7meHzXr6727PD4prmX1x4RCFK",
  "key15": "5sHRz5kT2Tv7KYyHAJ8yEktFzHNCrX7GMLQRaNvSfVaGYP2i2yocaQ1zBJwPpBDwcW4FBEYLmX8ZqVyHpmbLazrJ",
  "key16": "zuxfyqmMfAWrMyyAoDPnMFCiazTBWg3qbLvAVhpSwJ37pzPxMqrv7hQiBxhFmNJyGuTjfiy7fNv8y9La7oTbX8u",
  "key17": "55GGjrXcmAiBLeiXkxEdr5Pg7iY6Z3z2Kkia3eEaLW5CwuFE8Gtiue182qGwt61rU8Lt4RbcTPJdRuc6yHXDoEq8",
  "key18": "MJPTYUMSLgZjzB773BAUdHfkLsBmJ6VuesqtzMoUAemtagP2vFVTc5S8skDhh16SpP68haNvGr4G3R6Kjnx5VcV",
  "key19": "4gGoKrRkFhWtqYSi3VjHNtuiX41htqtzSzWEvDDGV5mDokYejgX3KJZsYNtiCKNV2MVjEtKk5DxMpp3DrMDVqX9r",
  "key20": "2mPBqzPHTfqXxHYUMtYR2GR9xjXQzLaMkNThXJkGHd9DEg5oHEDoik3S4HhM23VauP1dnhmy2a7QNzTnCAwFVEMp",
  "key21": "ZQx3EaVMcaPdMYinHdWf9LQsjttD8FiUYHRrd1MZb9UXc7AeYQuvPuQrqenjfJrV75CgzTQNkV8SGfcSxC1waHC",
  "key22": "52K5skFpfx5aRAS1Kg53VyZkLbyH5jDtBA7Bokjd2nZre484rBzJMqYcd231DBEtTWq5NPDtFAq2dyijvSxJwZPm",
  "key23": "5ZAYh9jf9Gpo8e5YmrMsom1kGUmJGqMJjs7DvUhUGgY2D2DcEY2eSj6KVWonALM6nLa8UfmWiGERSsMvJPVA8TCA",
  "key24": "25irrf9ycyPxXsJfWo3B17Q4GF2RuZ1ERaBH2owTYMV1DyT9Ezpm7QiPHM3GYd8xMmwTYLCevVxhoGt84NH2kTvB",
  "key25": "R8V1RXKLsMGnqgH62TzUF9tsBqVbJoHf2cfJ7eQBYAziqmCKS9Z5iMp2vExEGaYfLEr26UtgWzVwifx2mNfjcTC",
  "key26": "2J65oGDFPjYGFD3XfpvbG6Eu8usvrupcxgCH7kcREBU96LiAurva8NoNiYVMFECWmu9LRPKapTkG5XJRZ5hHZYoS",
  "key27": "5KBi9HP6EDFjw7ZZMLynJ7pEwTewUHePNDGjyTaDx6drciwWjWmtymHU8S5sJh4CHa4qtDT8o41KFLoL7CaRjggx",
  "key28": "25NtZW5spuSxZqTk9d4oAsPJrbhEoMbCdqdssrdvdHk5b1MGKWCSZuyX5QuzNfo7z76ft2oDeCpSsfJMn3YSmr2N",
  "key29": "2Un1R8yStCzmNAqmzUrxY67T5edVHPSdKh2bvVQrqvkgnJRTt8cXVUiSAwxPJ2hmieimggRcDFuj4DoA4b3mez4t",
  "key30": "2t5e7dgNsF2adSSkHjyFy8qPsNMX1s2qphRGCh44euTKRt92hNA2KzPorU36FCQTMTfUTxkAk56psaQUqimpvtLJ",
  "key31": "2mLKLnXVgEFL2ov2uTGNawiMhkRP2isKfDYNA4PxMHrLtcHhPRFBhJXwWbq5XjKVUAudN8yt5iDjcQ1YuMKwsrpX",
  "key32": "BUQ5hFo8jvuB95AmuFy2j8wmEZQEaZMzAN3CvjXkythBa1pvtSt2zqUeopZ7Dt8X5oiroVGXAJRacz6mQWDr4Aa",
  "key33": "2r5vz21X5GFaw1wd9tnjPXAgaYjfNFi41VNoYos3wYmpV94BCrQFnsEVxWP4rdEARmWPXKMK8RbtCV8xQdhvaQcq",
  "key34": "sFYVZ6SATjwyCrWfhKTx9Q3BX6CmFRrfGf5ewT8S7G4UZTg6eWquLRA9rr6DBGVQjFkNNDTT8NoeRHcg2EvNw72",
  "key35": "YKxu5ycZf2a5NvJXZtkXueJisMwqXGchMfzob6gyavuf8JrVmK4cWNdCKbA7BEUdTnvwYz272hfu6kjjiVa9qjX"
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
