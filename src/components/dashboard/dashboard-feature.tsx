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
    "2MVvf1f2GcgNJyNMcYyv3Mdp2AuJrcZZnhEQ4AVhEyqxtwiToVRzxcc3KLSFRTGPuKdc1RpMwSxbdy83cj67nYEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfmcmNebKTrkUoRkswij1CWZ5SMrt9Jg32WYrVBz4Yk7RCtkp51gkzhs9LhPNZXaU3E5TARhC3iq52xEz4inykJ",
  "key1": "1BK7AKxjUKnShPxwGAZJEEfP4xhHxqkCHb3naJYaqhN8BEFjUH2PDk6psi2nWMdGYC1g6fcXY9oT6h36uY6hSoD",
  "key2": "5yDtDwj5JhZzUJSQimc4qaB8SAW9XRxwQ3t5HCTGhHDUSwe1EafWCYrRc2dqLUzb1vHSXbGSksjMCRzPW14FruF",
  "key3": "VWLYUWCLQNFeRhoj3L2JL8tcsS1GcMwmUkF4pE1Q2sfRjTqZogEjPkMkd764BYHq26zPyNsRGHd3Fdtorh2fJh3",
  "key4": "4Z1aidTDCSA8DBeQ99EfQ1fwZdV5ZsmozGXkvCEguutvrEhfdECbvP2Qi3YGBmcKZZoqDoEMQMRtkGQemjmjjaYP",
  "key5": "5BQbvF3ShJ1wn1LBNXgn1imxbw9itMafnyRmfu1E9ZDAwZGRSTyEvxARqqMLmAYtSWUVXTCumBZhD5zKoC2BeGQk",
  "key6": "4ozQD5nwA544kWfJdZSzeMkBYauvciBobvn3ca9QHMQwXcSB7bHVzU168J1ojhzL7FCzUJdS9TuDPCsxKgsohcFB",
  "key7": "3RxVu5k3yseCT4XoNaattW9PzWCu3P48wogb5c5ZjCUNJD6k5nFqqz2PYW8BYrvutD15g9iWEywiBgwai2AxzkbV",
  "key8": "3q3BYxJni3M85eng8UWU5CjvFT7x1jgfM5WhsVu8F2YeE2DbfmSuMX7thbxKpTeJVNhPK3SqzyiFSG4eT69VCTv9",
  "key9": "4FVZhuhDSQdH5kHKrJtSm29qwsQUg9qY9cYQB9hxoWD2qgoF2YXif4SojbRmf94sjCvSKTNd6CxinoGpWTvrRzZ3",
  "key10": "4ZQuiEoqzd2fCjbH3w9Xd5NkSmLtkeaVLB9roX1krjmQiUXfWg7z2ym6sWfz2vFtpKiEbkUWFsaXMuuhFsyTvNhP",
  "key11": "Ry1DDSogD2wkwXDsyGAhCvexGgqPoPZBYcTsyL5T4H9Ziikek55hEHSFTBNufCq4REJ3thVNipZX772aDbNGtLV",
  "key12": "3P3KirzCmSyMuJmB4EzQyspWME4MemWWvRXMeHyMHwgX4VoNRDRC9h4o8Mpmh7h6VPpUQQhSx35Y9nAqZcagM834",
  "key13": "3VoMh4BnxdZRVUmnKw12qZFk12eU14i6rgzRySynAPwzAHiqDbk7znKMU9d7AavbtSWqwanKUkzocY6Dv8bWmRC",
  "key14": "3MQD98f37dQVwjCVwFkHDih7NExmPXvF8dAkZMMDVUvEkhaRSJZkMqgsaaatqhNmpcmUPM6ddku8Nuk7fK82eR7R",
  "key15": "4T12pasbNSwYCUqaoydMpv82vre4EcHTZuG1H532ETS8RcpdzekjzRyd5XtuLXeAcrmB3324JiYVJ32Vj7YQwhRB",
  "key16": "fam1onMUHnGjiLvyofg8jLRXSNEQRkvY5w8XTRVJnVAAH3vfkKuz8WW9YKmCLDPp4zNdeuMWREt2kDpDeyYym7y",
  "key17": "4dMEyf3djFsiS3mDxMEyo2KGJkK2LLwucN7DSb3Lnxj8jS42wvARk8KvoEUrweB2CEF4eRmsMU76Emk3G7CZZvBx",
  "key18": "4XbjDDqDQPgEDK3UPcZijzpJRaZCa9fsE7QoS6L4wJEfqijHN1cLVB1psw9tENa8agZWNvFbXDf6HYeZdWWjmNKY",
  "key19": "3F4qnzzaFgYZqCV2Rrnqx98AxNnF179J7uki4Jy4miJS4h1MRcya8pLdu3Erd8yM6SugJYWdaWFPB6g8quqYfxea",
  "key20": "4rpdE9np11rMCH4oWXgutePFiy4n8Ju1eXmmNGK6F9ayGZv713buLdRenN3QNiMvdaVPukoNkdKDdsMKWG3fNciW",
  "key21": "5USxDrYrRc35xZSPDcto3wZzRV1Pdnf6pnWYbxgQHo1BRA42GXAjyk8kpeSTAUu1wPpZUgSc7m5fxuaV7SLAy518",
  "key22": "42gvTTSZeiALZeBMz22D1GqJvktM7FFa4uSyvLY3UWtm4KnRfYs6HUKbv9S1PPFok7yfUrpS8RSuPJoXhvvsAEZ4",
  "key23": "XJ7zXbAVr6GdJjzi4bVKkmXFvmotcnZWwDTxv5gL6tHnf8ZtGy4idTQKpWM1xEmPpbcKTiBvAhNCC89QFA3VCUo",
  "key24": "3V4toCGarqRjq4Ht3bPxdK8PG7CEquWZfkaKbnP7xvireeikeMAhBnu2eA4rCVG6UBHeL497rJkK4ExqWtuAcPth",
  "key25": "4b5QMx1rd235aoZePmPFRsz4e4iDBGXDp4gThupZav6iiksuXKNUUvGiwzwcf4LnzrZ16ahhYkvWwcoRRrewAmkU",
  "key26": "tjf6WoXg4XhaTfG3VMnK1sm3LmiG6ZKanQYaE8ukRNXY1pWkV9f3EWRJkmkJuBeH2Y4kcFvE6dWy3k8WAdx3yZg",
  "key27": "4of4FxzVLktTQETZKBrkcMNQ8th5XPyX7MGg5xWjbVAnGVzaesew5pAtaKrGhTHoNiV7JBC2axCj9sPRT3VwNH2h",
  "key28": "42QEVp6v52SjJLhN1Ww9Fox9pQUAR9QJBtzNU5MeTzUY81SFPo4xpDNkHmnf8nDhTsQsEbV8jSx5NE1iKKVCYAPd",
  "key29": "4rd1THRaKY7m6uqaMm6x23BxaNgcBmLuzDnC3BxrMtEQ6YM5wf2r5g7FaYzJWJ22skkaXYkGfmU46dfAFGNHEYNc",
  "key30": "3xivRGDywzSFhVu5Q9JZW6R6ywbnQ2HoaccEU64cSciTHZ4Y9RMKhTUyJXrP1zQJy1tYM3HEivW9uhbCuqm5MxJx",
  "key31": "fX3bi4dr6EiRJvaeKRxrpbJF7LzLsmE18hie5RU6RLjq5q4xt7QQ1mH2RYbha2h8L9SFjuQswoffxYUimeCk6Am",
  "key32": "518b8m8HXzDR2BfVe5gVmbE6GKcKhSG35rQdrRNeV3wVoqypAS7q9tstKr94LNR8BrUnCPAuSqSwfNHaZRQ94ZCW",
  "key33": "38wX6mU1tKvKoUrs9Lj8Y2xeQCLrPuRk6FSdYR5tM9KjeWX7Y39e53Cz72kvPRKXbfsGWjdpyV172DhJkgT372XF",
  "key34": "3Ww372pb1BzvCqSR4KD9AGWW7X1x1TTh3qfWkeAjethmwXsZm2884X8BpjaxtMHWqjJuNm5rER7x49afateYnBJb",
  "key35": "4gU3oySBfTCfNAxyVViMuX3S2A8wUgdeM3F2qnucXYKN6qFhNToLbLrxDhYPJQ4KuMpVcTP2JRo1aSFCotLA519T",
  "key36": "4yPREjVV2GVDGLLRDGqNGj2nouXqoZtp7fRmDoLzF4Awfq3cNhxxc7ZPd2EUs1Ly2EquxoVXpnaWDQG3YvxAdoUC",
  "key37": "BmBiE9bjkgXsnzX6y9AbQSSyp69CayGmn1scpvnAhxBqcAfwv8NuTpiBG6ukr8qcnHkVRndNpMC6peMXib81pBG",
  "key38": "2ShyvrArEBGZ64ZCEbjgcNEHzg61R6MgduMmU4KEZk6XJ6kiGQWGih1RZ6GQkvdxS5e51W2Y15RB7HFUr8C5sPUY",
  "key39": "66rJa9JUda1RVPcoqZnw2phrV87AGUwpHrqAgBbS9Mjierid8pnRGk44NRUff4C3aKQ7zZH6an4tSTfhfcaawn6G",
  "key40": "5gU1ubzC9f2yQfRdzc7ZwFaBmwDAFgzFFqvymiVHSSJ7h9d7mUYDCKMmyHRtBarPz4RPuGhinEUXLMXv5XxLFruw",
  "key41": "2Anpq55hrLmRwwx5iUz2m3vftfZjwdCVWkrQZMssBKwhkabgosUjWwd8DZqVVwiVngoTwfgyaUMn5VJTQd3zJxf1",
  "key42": "5sep4gqXBXNSqCcbTg4JEgmmCL8G6e7V41WfCt9bamo9GjvJrgy6TAELiWnrejAXUp3TKRTGDnHXpd4WaJSRkjC5"
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
