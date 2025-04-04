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
    "4iArUfgMZn5xtqiHc7MsBr5JuaW4QrKEmc9XWgDcEWr6wzQNtaTn2oujXxdHKTZQzP8oK18s4ndcQMRJB3KTHGTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZUauFSxERCj8nxVPHj4gnLr2V8KyzFmRVuQBnh6md8kfEnXTskfLnz5yLHL9MXnZFKHbTVf7y4LUqDcu7mQGpM",
  "key1": "5UyRQzxVbDiNvz6FnPzWNbirfcUBbUZi4r5eicoPyEETNPsaKVD68AeioEuXaTmWVoVFVwLvT4Kk7LhfTWCBZcbm",
  "key2": "5x2qaK8Sf81rRUuVpu1MUWpeUPchdS5Vi8HeyS2c8ykZboW8VenLwbCW9NBGGZmp2yFQLc1DC2LcVksSb5b86Wi4",
  "key3": "2D5pkw7vH1U47hRd6y6TN7RVePk4XUYruuEvC6gCPgvUjGvtFHaantFxaPUd1xVFsrn36pkTSx5H8DnkqDhLAqaN",
  "key4": "4S66oLUERANxw6Vt2oUErMafBH1jZHopV2iDa61uwn3ewFvVWCvM1twaFmA6WmLDtQhm7ARtLmBaVsox83RvqWH5",
  "key5": "2vJu1SPEmLDHUG8oCa6QvS4tMiNTTqUda3k7UbkuQ9FpD2EUt7X85QBdXepNB5BVhj59RrN4yvoSj2niiTpkmYQs",
  "key6": "rAagmwHckHbQN1xNe6dkePiSKTjQWRRabwCf6mHhx4Jwdg8VZACBaYdb9xfNBs3BJhC3EwBu1QDRFaZXqMMM89T",
  "key7": "2NaA4npaC82hVBfYDhdTpyM1Tk9qCqAah7UvhhGH9gkhzwtzYq25XM3sqGGxkaU6C1CcV1dHRZQbtnG7V5W9Gt3c",
  "key8": "eTHmsPoiKmyetr5B5p6r7nxobmjCJBERyt7rC7Xnh2uMFFJBAFj3p3uWQovjQMP1z8b2SmWszpTSXezahswABye",
  "key9": "1HzyxtKDHooYTB2FWE3Kv6qoB7nDD3d1yXowHJPSpcHj4SQD3CxfCq7tPREJJC7NhxuPovnq9VNkhfFZgdX8UW4",
  "key10": "4sgy7n7A8rrKxfnLJGC8iCVck8pZT3LAy8eLGJ8eYPRGWd6tjz6jC1m2jDg7aVGzNrQ3faBozApn7M58AchyYcR2",
  "key11": "4gJ91cqjvFHHMZVGsE93RH3YvctjxyVxVYSiT3ZAXUFunYFyHtkKanphXzowYfD7dHe9ZC4EjKcgzgEyum1Yp6Rt",
  "key12": "4XSEr6YVb1ucVutHGu6Pj8yNzELgvKQxRHvQgphkrZjpydQe4uDQuiDE1bTiN4AuXJM348tTa17Y6vMCPFiohYKR",
  "key13": "5SZEhgNaFbvgAtsdBw2QGFiuyUA1Q5aPGkss7NDDVydJRgFEZDx5EnycaK1VkMGkusNqmxP8Pi53hhYW8q3j14yM",
  "key14": "4tTrMsJQoUTPqnW27Bt8zsXajMxx27bsve7DvhxMYFHW4jJhc9swvgTpRDYzZ8ugVjMi6pS6sXALya2yJaKp7aGf",
  "key15": "5mMJxTD6zeEvfxKTvY16QkYB3PatBMtqCrdE3Wx4GABEPAcnVQAZD6cVyhRutmpKxxi1r9rTzSrGmmJMQQfyZubC",
  "key16": "5K1gQxMMKF15WnUHu9HBX7TFAT1vFXTpUdvPpCCPkAmtRFtTS5XwnnEFrpsm8m4eWXvRYcTx6LyDso5VqMzZR8pZ",
  "key17": "3QuqRa5nv8ry5pjp53n5bymYsq3q9SedhpjAdg3jiCgMwM8VfQ5GNAeQatKkyR5WSZKwJytjWnG4eS1yEjPaVNYn",
  "key18": "5YnRVgZejVCzvV65N66LZmYjPfQ2yPcc4cahMCVLc2cMAR53jTjebQ9yCLaoAWCxaut4J1XHmb4PhmFpvuPDG49S",
  "key19": "3LLgi3qoj3gwQrjnEdb73JK7eWKPuH1y8XhQPB1hPbpYg4eyZsXLEvnswnZwjArz7gxePFuK5faQiTPg2JpiAq39",
  "key20": "3Wr8prR6MZFeTUyd1x4xfWBKc5iFkffiUYDtYi1Y2zwHtV3ZVmLbTrvydYvomWPwewqZWApswuPhhk4uEeynwCaB",
  "key21": "d5uod4PTr81T3a6kMJJiAjVFwPsmetqknEyCtMKyhfUQUDV5KiVAidZidHkvtpnrpuQ8sG7LKaSNsLmzLnoZnGX",
  "key22": "5ZtQH8wCHsxvFMAv2MkLtRNkbj2S4E4Di5MEWWtmY2CHJbS93EBYbU1vRstNs4CvYCrJBRSzMQe1TH3qrWLucjDD",
  "key23": "2xtHrH1tBYExf2u1DFZpDfZaSB8eAUW36rd6ThgLYCiNCbwPuH7YoKruCxSwfNZr3ZFP4imUsEvrm6tgXEjypkF4",
  "key24": "3M14GK3n7csXZpAbuFieD4HxJfP4cgjQfxWTdhn7HLsQkVPaEezsCrC7b6atSZXt2ZSn81WQKtQYVGzpxwKyVNSE",
  "key25": "3yLkiXwsSWq7cipVEGCyVHBMfArbErkLTQtUeb1jxcGpK1vg9gJhCzHEXSXzcTNzpvNfYq62eZ1xTFwxqidQBzjf",
  "key26": "4kWK6DPLodMYmQXTUBTuoJEn5DsFZ2PpovobVRpXiSKgvp1TpFpXmKfEL7VCVCLXS5igYtViWevzQgnxxR3e118Z",
  "key27": "5vEyPvnU5Go12eDEpKTJMsmyN4jvLftAfJxdNdTibGwz6uGSpcVq3qpXRgghkGP6vmKAP5Uk1fDCqDsS2ZVU3eGW",
  "key28": "3skUsBLTTKDfMZsXgxFJN5k31E8DpJqHntbmrP4CzPaLmxc8b4izK4xHptiirFe6cGJ6ftFkZHXf8UY49WUbeqV6",
  "key29": "66k6ALsQWKUPYByxDpLAY3515tjssDoTfmh3muKadCtgs5jADsg7ttLaJye24D2MQy9LLTVo7gFgYPYHoGDGgFhm",
  "key30": "3SP5tWnNJjS1o5khxY3TbkUSFNM9W7dDytFoTN6yDLZomA3kq5ZqL6tVQWUs4NgkV5KqRdmkqbxh1SjAeidHAgvy",
  "key31": "63P6etHCkar9jmQDETCcUNGMSkafDoDwxAV7TZke4m7zKj9KeZ8DvnWNkAVzXqENYYjwXWj7x3hD8bVUhuXhKfF8",
  "key32": "5rTQFYWxZJujBkhJy5VTn2vENddMoSHAP6pKQ2t8omG5RHyUXDQNbnTu74EtHnPD7GetJ9UxWpXKVywi1GeD1Nmz",
  "key33": "b7XVKSmxXGckk7gVJKwUFYSYqXpeiHJ71pVewtvCDtynEzyHPa1B4L5uKnZgN8KUXHMjeoc7gLts1pRaYgLptJ3",
  "key34": "4YPBWTvKVm1cTs8rDcDGSySpJetWGTcE23YQnBgmB95ep7b5yMRFHeY16rtFfC1V6ZEoKawniZuCFUvqjoEykU4M",
  "key35": "2y31wamwo7r9C2CuhvVvpTuqmJVgym81ikZDYCQL9T52wkLSrh4kJ3A3sK4tyNK6J25ivN4zwYkXJrivHKDQocus",
  "key36": "5VsUBCUc7bxdiUPqzosX6bXheEMA3ZtHmSvTySJ9WzCmZboW5AEGEN3m1idfet5zTMDEg1SJvwJ3hQ84cZBFaAXG",
  "key37": "3ptj4M9phgWDDXLuUjp4wQyvBrKJEv7gP2gRoiSQE1i8B18NVosqZuJh2GAxsRjg4kyWyjC1Tqjrf5yFQhmPb5DK",
  "key38": "5oiBBjieLTRoAMbwLiVAyRZ8t5woqwNWBAcTZpHwRp1zktxjbuuza5Sw84sFMU2heCb81UqGSjornW4zJqmKySZ2",
  "key39": "5BYDgWS8J45naWvUKHuwyAJkhrkBEnftsAjJFrPqe7kGNKkDZyPf9Sy7CLvKH2xj5QRogzy76WZZkuRm7RBj8d5f",
  "key40": "4c6DbAvZraEeCo7nwCCmNUBbgr4rqbXoP5xa8tSSLChLi6FJUKixn93B9eoA7poaw2jBRVTfcJKFiQgJA7Kzr3Qe"
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
