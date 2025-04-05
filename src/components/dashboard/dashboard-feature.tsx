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
    "3jLVFNbiLNxe4fm7kM51x1nBFE9ZjXozm4CLxk1PNYWpuNMkBLw5y7L9Nsfr3HPcjCgfJQ6CFTCQmXe22CQEnA8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pwqcat3SAAwt5G8RCmNwENFJJiDVdU6EGsdENnXdT9DypVC6ZLvbP6P9grySKNCsDKX8wa6rJ3FQCduP49FSRbd",
  "key1": "3sUnxFmLVkYMmgUHLY1Dw66RNGtR2214Hh4e2zywqdbjcyV4sXWFLkkq98ZsbUDjyxrc64TzfwuL6FDupCrLsat7",
  "key2": "5NQSvRHmtkQhqXWsqZGPXLrgH1o5FhaYmWUoMvpr4u8nU4jmWtMkdrbSpWKtHUHFMP5EefVrCrvyuhrcmUMKc6gY",
  "key3": "3XYDqsPUhgNMmcCmBQ1c5cg4zfAezECdSytvFztRjqity4nZGXGXuM42VbCPL8PTxifZufV6ZBEkNQ6ci3Cxm1CS",
  "key4": "21W29zeeJoaBxzh9vH37wCSZqSxzQQ2ue7JdRqSp6ivWx5YxnzwM4Wtb3QgBCU5x95dNQLNiNPnuqwJo7KWcKeRV",
  "key5": "4U2gbYce8dzKnxwHcbZf4Exu7YXNiJGHfNVw5XGW9VJy7kr9EfbDsgxbTSydAuSg5TS8gAuZvm1avap1wC1te8X1",
  "key6": "3ALbwcGyQP5G8GtTju27MPsGrkEpgXX5YXSCHczwyw77gbq99BD4oe44jh6QYPwHprGzYcQKam1bbFNLscvMu76m",
  "key7": "3daYy2UvmYptowudNkydg7T4dhV9o16rEaYRdGbU67EwLRnY52gvGhkreh5FgrHvqbrwjMno22VHFcJhW6vW6DFz",
  "key8": "pVAfPeXdJafEBMryeN8cQHcGmxKyXWF4T97CAUPRgyiMEsL6U5ib9uLgkf3hQ1LToGk4KgGWjCmzviLJuRifJWf",
  "key9": "4HyCko7wrw1U5E7ZcK18eXBT7JTkG22iYvtXT13G2ypAa6mSAgWC77KnK5t5wFAjWWiSV2Wzdqt3KdFV82EcgTDU",
  "key10": "2F6WZkx6LjkrZa66V22B4uJUXkC11MHAn92rZGN8kM68VU2rdADHD9zCANe6MwX2otNMqJegfyBxKCTzxXh4p5KB",
  "key11": "65ze8n8pPegTym3rG3qPDqpcNagoScphbxB1npnNzsUq5HUYB3drbfWd3BAZhsPRwNXjC2a6K6fMjBVMumtUSCQX",
  "key12": "2Y6w7b13v2BedadZ8ro76osCsH3bJHC3pNXyNjp4EtdGwKTiF3vVP1UETyAuTgsDydbSzBEnXYgqrMPU4W8eVeks",
  "key13": "4HGhjKRffQa9KA2ey4FsMCC1a9Yc2i8ncrxPcQ3DD6WwrLWHg6U4nUzkHyJgh1iKHs9yRW5NGDidVFmUMTpm8xor",
  "key14": "67eBCvKZ3VTZCQC4oDepgfGuzZmjbQBpXgrCqAYKbH9j1y412iS3KAg2VSY6BRZA58GUriejPTXuT4cwkAYW28Hr",
  "key15": "5DDMVioAZJ3cGUdoGLWj8cs9gp23i1jCPErU65DeUBYAaivWRQF1wFxdHL93L4hUJZYqvxJRGLfQE7DMTiZMCBqA",
  "key16": "3zPoXNRgQYRxh3izvBknN9dYLeJRv9WN5AGLjhqXigjS3XfH8NVtomc39g379UZxRpU9KnGVPzjFwkk51igJSTft",
  "key17": "23y37d93rAsuNgW3A946jjzbzxWLKaBx7KRf9kJqZpku6oppq3EGic9rmU1kxywxnfaAbYEE4j6UErALdczqSt1V",
  "key18": "44T3wFoYE33gcHBCozrfkPGT6XZjdU9bx1rwE4QKGMWWStRFp2ZFJKhLytjUAASBhaWRQaqCYdeE9GEbBgWjpb2w",
  "key19": "5mfG8HoyQ6REfnUFVz1Dni3MnKrgbHubMySghHHNqSHPr7my5DamPPth6uYQjW5QfPp5oq6ipN4FPkJ1tL9tKZec",
  "key20": "2qBS3AvK7cHyAXTeEGtdQ2YAEPHiW8uhEU4zuUjkEkLhAMCMjjghg8zxTGZmDSeFgmy9Ywiy9v8bQxW7Tc6gRF1r",
  "key21": "CkzoWKNu5ye9uAshkkeKB2rYijZ8Pu4A3cH18NZK3x1PetGPxb71TE9HxVGozVsGDjg8CUWkdYarKnD4tyYzct3",
  "key22": "L2BXbNX3JKsgMrhLnXULffJAr5WHvGDWGc2CsWrFN7M1aBFajYj1z6RHuwY7TZkLR9psYuj2JoaFerFnueuF5M3",
  "key23": "8KThBBhbfABhaE8K8HUx5oyaoaQchBL54Kt8sRsYmMxuWkahFgEXKiJyeofguQm2Fn3ScZNRXMXRTH1cFz7fcym",
  "key24": "35aiNi18J84NHuwx8xGHj2VragaAkyT6RyCy3jh3UKAgxHx1Y4pFLUMNwjvLPGWDP5fKiPMy3Ey9VkGFmgfkPVQd",
  "key25": "3gz2p3Tfav16wtrzTD192CiwzP2ck4hQ8MbpXsSh9UWApAeFRXvWTBTYk328ksCYqucvUxNzvgF7FtZRomFgSejY",
  "key26": "4d7uC4fhGwbHurAGKxxn4GXygoLND37syc1zWMkwwx1GwKVFisPHfpU1qFvkjvKGwkUzMfbQrEKwZHjSmgvtEStz",
  "key27": "2LEEpmwpZqCAGHcjsNsT6eJebXxVRuKN4y2PDRNu5jYpDBveG59ohwvcTVuKZM9QEnrTbhfA4rCmSQ8Dtv6WqVPK",
  "key28": "3dsjo5LmrfdN8a6Kj3Hi1ZEpW9LqabVWGULxxfXjh1iGt8Nc2QuETXeHaiSURQ8xWDbjKBFWGan4SVDwwWFSuo5F",
  "key29": "CB8JWFFrwG4pFTq9iww96r4uD5948zt6QfFDZVZrpWDZRV4N9BFAUoCz4cJVxst923DHf4Rx5ApxfMdg3YmiQ38",
  "key30": "4q61EUhiVqkqhDBPSxXycdVawRD1J95b7e5tmZGKHMR7zyALWWjYhRwqMmvCMQEa9SLjS9UxUUCJFzv85iVVp7xg",
  "key31": "2Z6wUQPiaUE7A6XHcaWYDRKC2dBthiURyfZoLjSJX4zUVBnuE6ThRYdG4ou8mWtwL7zPdSzmjPut1qYHauGywYWP",
  "key32": "5cE6oFKykqEYZjhhSjZJ3mbpFG12WRgFhBUDK9kFRHPYF7Rx6gM7yTPEwifmXkDjsFSe6NYKw2hwckqLFFt3ymWw",
  "key33": "2QDTQQWioRjZGticBWdsfAXhZ3SRiijFomKaLbgmDc5W4ALXARws1GPm57fWfZMvYuFXFYip41Lk7fq5QnjKxyme",
  "key34": "4FsLFqWSVoWNyjkRvXByfd8fkFjjw98iaUuJP4GGBEZAvd5fRQN7XjBjBoELQb9noAgLb88aSPPzaoExk9H3tSXo",
  "key35": "gewfqESswHjZfyzfTcVBESm468HxrRrjyoLd9bUDmSpkaPDhGwUGQV3PwZpsX3c8BcLDBL21Jaa8eoV4gCB9Xy1",
  "key36": "4f7V5EWsBziHVUQHvx1pvTPzhANQC89Ax4sdrCgPULvDsU9LKPE3NrQfkju3vHMjjR6tAP9brnFfn2DFC6ksewWu",
  "key37": "2y1hy9qh7cC4ySYFXHKZ3DNk4dsTb7uwC28kkvGPBnYadJQz1vyGSyeNyQAs3BkMnEThr8JG7aUTurNnnZenYZMd",
  "key38": "2jFS1suuxfRmFBKmowJHnLJnyoYGnf9iN5CumdyfPZEavnkQiMf5LpVYYsDNjZ1KcL3ZcWRLrNntvMNwVzXqjEjW",
  "key39": "Jh6jXZ4SVGthDVtvViEyDBjA82BQuTzwSR7LBQcikZAubHNiwFmhoSfj3UJoCaQFWdc53wAEm1q2o6vpSsRY517"
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
