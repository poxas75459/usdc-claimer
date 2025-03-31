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
    "3avTtf8AjkfrrvCvEnvHz8XW2h5EuJMohoyVZ62uXtz5pmQoEdiGagVqjiPaTvkVNFEKKWGAosxmzKPeEPJffecW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNptF5tyQV4ykiLcTc1EjwmvmGCM3oE3junQabXAcgdzPqeLH3mmTWHCKUQEcGRmHBjRwfsGxcMxRX2TEuL3BPm",
  "key1": "3hVqz3mM9FNDWTYVvHSGmWWaHbrUfKfdK9tQsVvD1UVTeB5gCyBhJoRBcGUs9EizsPgMAWa99Ri4URFMhJapNsbz",
  "key2": "49u6H5VCDkktDaX48WNjVwNviduFyRX96rHRLVeQikvXG77WmvmkNznGVbq9DDh3dUnogST3TTyK6rkhmKPvggAU",
  "key3": "4FcGnZAuDgU1AnVcGjunjcMVHenMuQ8tTknMgcn4ixB3QeF1hZPEzjFMwJLBnCAzMQYp7eQ7oDq1QsbcN5CBCoGh",
  "key4": "5bddev23tgJ6FJyKsDZXYqd2N8v8GBFYf2MmDKvQUuMUXaz6AnyDH3aJbsK3m5g9MTPYZSWAS9ZUHzHJbP3z1QF2",
  "key5": "2a3HnrPVKtLYfdMMRQzGoTpQTEdhP88rxbyFpsnGNHNFvfYdpGf6fqFhzNRuYYQTTtqLiSRH2yNZD4TdZeKCyzPY",
  "key6": "5wCDtkBFFNMZHLLGPgxZy85guVid5pBJUbNmCJuCX77CJhVB8vRyXmNHGfxF1P9VWzxoQDLeCuhMKf9maRq51NDj",
  "key7": "2QhojZJ1enq1ARwbnmc5yBxmhRoSqMH2tshYRuaM8ezuu7M1TsrGwJZULHEgLr9uRk9uxvHQZbPR9BJRRCoW52BP",
  "key8": "2sR3bortyB8T5748tK68Uq3J9hKaP2euAbNdqZPGMvPYfvyJr5bnzNgexEPXtguqnX7yLZ1asjZSKN4jzHizb3xT",
  "key9": "2WMwuvSGon98CWMQAnTZtYqDrHE3df9jKMNeJ7dhebAHm4Pp5zMaBTDM8i52XHgJr85qr6FjXMNwTDqsjLUQLedo",
  "key10": "5N5scXRkM7z4fKcdGbXj5zs3nc5v3BBAs5fBZ1tAXiFrkdB1c1mkVgjbxzBAugwnucQn4ycYHmRTfqhPRQbaZKSY",
  "key11": "5vwXXubnPUg35RaLJEmEEtB3DnrzwLrv4cBfpZj3J4fGLYzvuhvDN4ase8sGfQ9WTkstA3y9qwMc2CgGH1wms8Ym",
  "key12": "2JfnARQoNC46XkNKwifs7m4EDW9h5H3tqxtgMJHgubvJxU6ZA48L4DNLx7gbDTNGDy2VNNw2r9HS5EGAdmDgzToN",
  "key13": "4s6jLLS1WyFpsppjEJo3iwF9KPRjnpvbs3fgbwtUSCHSzU91CRi65C1MEXnphyFA2C867hkBMfU4XpAgap8efihY",
  "key14": "4JJmpo7U1YWUXm2wDxsC29XvLJaqu33bRPw1295gA8aiK7zjxUEpaCqwpwVJ5NR9x2hJLisHaCo8npxfUsyRMzug",
  "key15": "4C4iedxzBy5cyHbdBQ3EzvwaaPK8cpGCvD7nTBDrqWUeddsQAstWHEcjcgPNmiNo51GUhdtbYLhLFNmFC31dekAN",
  "key16": "5rhgCQKrerX2RRDrWoGrVyFyEv844Vet9Fq2Zo27o4RUwSckQ7HDWqpKDtmk1S74fiNjUPwKL82zETXFp67gJEc1",
  "key17": "bP5yZxh9VYwLgzsE5VzSA83ridZCjcPVicFN6mvciXj4sNoC8WjKL4ofdGbbhv2eHYanZMc6rkomiAHB6knQkPt",
  "key18": "3uCTcXySXBUmZSUe2n8doGxGyoDw7eg1XxM8XM8t2GRiFdBR8KRFWVTn2KWePAvY8tyKYGiBtrMusV3ovpCRKCBn",
  "key19": "2o1NaMHzPq21hPKy5qoi3F6GK8yzZVuEcG4ACPzpU19r8EvfKWeay1eco9J4uHx33SCTWsWEFRFuJz6Mm4viEYh4",
  "key20": "4Mkg9zVc5MR25rBvFkmaHRQ3yMiuQSgTbQL5ouQpFAVEUNE9SwUu2yzh75Jq7EiARmn37yBEo6DPSY6KfaEAci5u",
  "key21": "4dEwSYxn4ozUaHnwbDjf61ELnYtVmEbDcxdMnJEVVZSMht91N77mGbCJDk5vkgqLMh6dL1hosHAGZ59fdhfuv3m9",
  "key22": "3AJAnq9j78gP9QdVZqQHsVEVeYv9ZpPzcRuNJF7ZJWVspK5PSha25kC1Ac9zCng616FWtLqiFWsEeHfivY9yjosT",
  "key23": "km3oiR6xtqyXLPzm25tnF8YpKL8j6ufhgp8tkS6kw3qbEaBB14SARxvCstDjwivn2RRiJL11M8UFAdnQW2qmDZ7",
  "key24": "XpXt8W6Rt8zXBLNhvHxopizA5FEbiRz6GUHpEDvMp9AhbemVy3iFQzTvaGFDSuTZqcJvMJY5AqPdzyGmbxhUtPW",
  "key25": "VwMwASUg4cnut7Jt2JmjuMhqgkcnUkJAumBLkWqvCPr8waNYxxgYjxbh88L343zE8541hpiZ22dxYri2oM53mQ7",
  "key26": "3TgCQWXwRay5GgCxBVRwx7prYWbK7HQncPLSawEYuQyGUWSpYDDcGTM489dZ3HTsxAot8euf7cReBijRmLdmxSNR",
  "key27": "3aFUYSi4HrAraxH13mtHwvJDXYkSSuodFHFyyJywQy3ptPStxJwqtkCt87sEA7eZZgPa3Z64Yx16oERzS1FcWBpo",
  "key28": "43XChXiacNMthJ778gpAdj1PfhsKYFjxehm1Vz2mHJnppd3MgBb1NGg45BUhpP4oUew5n5aHEYf6s3kZKngtKub7",
  "key29": "5Zus5PSmGEzQUM4bhpXmRdkpCHBPT7jbhk2yK5H1odiy89TWi2A9VYoNkVkYHA1nnJgaC64bUFoD6HDLPLGkHQQ3",
  "key30": "3vTHkVMer4uLKe8jKQ2eBvWbN6sHuPd7KdntpBTdE7xb1QFTynZEe6sVS8Sqwi1vVjvVjkEGNUwvihNQtg8hDhWP",
  "key31": "4J1Bz7cRyATav6gyubF4579u9hfMHXKyCDbPCq9gCozPtPxeadhsT3aX3fZ9vzknp6ZkJPzma3jZ3LLXNJJAionL",
  "key32": "3h3Uudzjtq4QWYzC9whm1hPvZiUHPQtodtaYfJYFr6pWDWbiQhwTfWEVLDf183zTxzRutECxewCR1WbAd3vN2DKd",
  "key33": "3Djd6RuzQQUZBgXSp43p2s5EqkiE3uAWS2vYXqePja5i8itH6tdnPt8FyPDPxMmWJEyx3iEUg4sB4UmeUYDHKa3W",
  "key34": "YbqoeGDcRk69w6aVGWRweSsSuA36fVNohnSfGuSGdXRT6RF4GMiHiT1bEpiEHU33pmhPKEpwuY8Z312ua7W91Gt",
  "key35": "4qy6Xq2gXt4CWnwJrYNJChCYsE8Q9W5FWcmVv7yzWqpmYQVFMxs9CBAyuqwM7qdUHemNK8ZkfG1VCG6yMJR1yX5g",
  "key36": "2xcaYZXLmb2sNKsBVfdhBBUjtGFxHvCr3EmgJQ4WPjHyGVX12zpMtqRWmR4BJDw4aoQwDf2u1JryqMg71hH1YXS1",
  "key37": "cN7qFeKeC7STs2hvRi1iH8546cTTUPv4MHAHw9Wak9fz3v8VpB77pbwAX36SouhKdQhiFnj7h1i2HMVRH1T2Lyt",
  "key38": "bWEE9yFkB9o7fgN93kwB9hhyGUUie7YK52Y7n5LZjs231HwZkctkwwcH1WsddW4iUa3PG2XZ3JyRU68wgkAqhDR",
  "key39": "21fWtLcHcYxbmSbLkHmRhH175o8mNMVUw8t3774nciZnqdk6KiJ7a2mpaDvptcWxk4JuXC1SHb4Ej2wJAAaeL63q",
  "key40": "3kLqNub7FuazuzygAvVu3CHfsCrWKD9JA6YjV4sgfzJTg6TWniKH6ou1zXZ1XVYouWwSpNjT7RyQbvLE6tffq2vk",
  "key41": "ZY2pqdwd6NNoQVwWnGQ9HiTBXSMPUzRMt4hqkQsdVYwpNVx2HMUoqFUsSY2gacPuDzZ9Xsq681pAGUzbXjTbFmb"
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
