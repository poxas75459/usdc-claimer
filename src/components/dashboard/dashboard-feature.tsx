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
    "4fK3PKZwkShe5Pp1BV6GzNi1PhoQWNiif62aXyDjTNtRoVhdgCJuDYMobWFMZ7jZ45wE1Yrjt6YFXLxEsrRp5cjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pp24Mn1nknPTrzZqgwP2aXWLXMkJScdRtLv7j5GJTn1xzVvNX93Sc7pjFCymVLJ6dHFzKgth2X8GyCPXheCjoLo",
  "key1": "3FqcpEAgZcVoK92KmcXadFGxv5gC7qhqexUD5RRGh2dmJNXE5J3uZNEK1cyezZ677fPpXBRQBQfdQut2Fg7kzCNC",
  "key2": "5WDh7WRMr5zBZ7ar9BzswexkphkVmNkzdXGSrrFmPfGhBCoSEN7ULx493mrnN1gKU9aaymuLjT5E6t524zmjpY7e",
  "key3": "XEptdeqCx5HgPn7f7CNeQ8YHTPFaQfJEczjefeF4urGCiuG9PuQ64jtexWzgSUNaaft56rk9vtSnmWS4KmfGZyQ",
  "key4": "nfNdU2RyS2wgXBir3okcC3mxB7ZWhqdSVfa9w446L17skRui3VyB4RkcZJsRhHiNkmzEJfnEz5DiKqrcCdYqaUD",
  "key5": "4MmZ58gXdQU4fFX2pGPSmNY9jTDxgPmYbyD6HVn6b7YMZsffRRfNe7rwhCMmdjCHRNDV4wD7tM2wxXS1RUqEqXKp",
  "key6": "5yEkavN4oJQkSjFGh1cdqjFtS9Ho8Eg3eVx7n6YkcvTj5yBnWFNm9VYJVJ53itZPTawsmHAoUQ2XBMrswXk2x4Ho",
  "key7": "5aYbQzX694zsfzR2ZCzb19yUT3if9J95yhWLd2kX554zSKYg7XDNMLoykpWsVF8sTLzJA9GhAJqy3fqrkgzWXnhB",
  "key8": "2tYYdw5eDvgMWeNMTaa8DMsbHoRHiNAHL7Dmx5XZd5r7wgf6zdmw3hwkseZ7WfduaTw2ZFUSddM5DSYGziK4aA2M",
  "key9": "26W9NxF2JQryyvMDQB2i9BF7sRuYGVeyVbAEJSvJ2sahGdZK4vEymHEneKx9jd8wzZpvhko9vbQmhPFvGSv8KGow",
  "key10": "Rxp6b6wXrA1QUuLMy8Kf6YMVYXk9H17boSa4xubK6GEfjkNSyqGX8wMsj8yuS4PPUaSssBDwAfG1Qb7UuW7qPjk",
  "key11": "26vh4Fx2QYqbxMGKZv4aveBDR4sW229DeWbqDbPYwuZBpkEJ52EMdmsFNEQzdJ1oTNXruDhd3B1NZNCirvdw6Bs2",
  "key12": "3sj7opHEPbsdEVUPa3rT8MqrKkBBBTfXDBtMbNms11nhie54rfLpDieicwXb3RoPSHYjdM4hbD55FpkX42hYbXtr",
  "key13": "5bPrZQitkJocRg6XWtuH7XHQUM8q41rrJ8Rd5r5zQn71DYe97ry2ViZpywe4QqJCud5j4m2BWTdxqBe8vnyg2mkD",
  "key14": "3yEkuFQnhueuwpuAhXzps55oNvP9ADCko5w3pV7oWYg7Ygcq2nHrDPz3pnefEBZ2ZdMxYQhZuiN1rzWqKg9AziJL",
  "key15": "3Fomh1hdDBzFABdQ2EUBnFMezbwfHwqQbKb2Z3q6T5i36zFMUSPKMiadUHTsj3cYpV4mMp7w6yhSBhXDoiWJHicy",
  "key16": "4LuSdqbAXh9JeTcBMdgZmAdurCuLPX6zATRHCXmPtswedMihJtG39ngENrtQpjEAT36SM88q2Tqpqx5pkn9wvHky",
  "key17": "yNcnJQaHEtnDs9BxWyWsRrQx2RrktEffJvR4DmPVv8Ujk4D5PiTDUXNykbxGQ8MRR3Uv1PH2Vf6Ads4BBjqvMrb",
  "key18": "4T1iq4AGYtn2TsL3wKWW4zxQTdBXGEYpEKL6fQKWxim6oLxXY3DB81n4jxuLHXi6cA7r8N3w7DumeCyyYmQCJyPE",
  "key19": "4Q5wjHYFbpkPqe3Lki5GktZPJ2w8xbAgEu7sTkg6meTiw24rUhUreJWW9iWj2Jxezm5DCsXmRQ598StasCN8NMwV",
  "key20": "3nxprM9WVTDY1bdWRTSfhaqxmTkEQMUWQKY4AS2JFmRhSS3sFa2XpS88PHMBtsatNR2TbhNHX7u3dGaXLz6jGwSU",
  "key21": "4dZtGERtKx7rmH5uHoRpDnAD2n9veywmvWfiAqjHQ7tDHK4x2ANntAaJScNQuKcs3aheWSwGEydxpVz1uk12dr7R",
  "key22": "4v9ctgLrdBH3WMuNBj9HiM4xP7Z9qxRJ3EXMQpWvHdxF37KY7jzJaZydKySx63E6Ay5eCofXRkRThGv5Dj8sgXap",
  "key23": "4mEZWhnC8VK87LQEjCHaDJwqZZWbXNd9f6BA6cM6x1K3RWgXUyMKKUjRQ7dY7hXroVVT34CgXypVkpDgkYgrEAWd",
  "key24": "3xn2Z2fvTEFs2q9n3UUeDoiuahKoJi5dUfPdoM1pPiVAQFcvVmLjXyTTc1TEeUurNkxEcTgw4wy6PrxHXMHVke8N",
  "key25": "3pxEKnQstEF4mnBmmmAozVB3PzmemXRhMGfKRawgkAsKTSsttCxNx3zKthobTTxky3zq7XTYLFEBtNAtYmT6aqQL",
  "key26": "Ai8UQAkbCZacnW76MykPtbUG7dkCXaifPqFwsSR29vaC5zBMMikZbV9fDW5d6wB66MpiugvdXv2BaEFFoZLxdB7",
  "key27": "5Sqftw7jFeseWbNhjC3YdZftz7au8hsg5U3bF8YSaYFQvumYUdqNmdF36eDvhGaFVkUyjKPVZ4XTUj5J3BvcT7hP",
  "key28": "4aWomtbVVYH5FZHaQUDaUjAi1XJyeU9yqrd2st3dUA6yseTxj8u43sfLoDVdLE7sqzRWXSkjgvhQKfwiXdaDcpEf",
  "key29": "5R4Zx8FrYJhWR9owk58NofwRV5urvjsABtWErey4zPdxQNL1ruvVCANzTjv4B1p4gHkUHEtG2nGfLzABPZpM8MaF",
  "key30": "31ZPbpP2e36Ch1ExxZtyKXdJQ6p1e8JLNjVL6zwZPcmS1rVt1nW3YbMSdVznwR2RjDSYWmpYEuPoYFFR7mPjbsNV",
  "key31": "4ymwQQ3Lrawiqs61WJTeG18hmCRpAafzdvgZLNkAGeaPhpjr4mg9RJaU37sqXbG3jXfov4rFBa6cxoEqm4xdjpbK",
  "key32": "2hV1E38J9YwUseRkCVgFjkRhnmAgY9KYDvdYNXt479Bxwchxoi1q4zfW9s3cnxmeTuAEiZZnTANu9qrDpPcfYts2",
  "key33": "o46V4wpA58ybTFtPfv9X7tFJ1ze5J1NF8orgS4VFh1pHeU3SjNuUUyp8cEq2jqHLDoUL4W5HLgqp8ZRHmNkpXii",
  "key34": "4oTgVZpPqWPZsWeBv7hD9DajwyPjo1MJgXbTF5q1yQG1ETpu336S4ZSyFep6uh8YiTQex1DfoHtcndLKo8WPcZkC",
  "key35": "54itCu6tf3cMA5TBrXyF4B8tYHx2jn5bRHScTDAxuzC2e6thqaHem7EGLfin2Zovv5PvcHLMyq4HamCg8yvC92Am",
  "key36": "45qkPB6Q4ugNjpNCUYWxZSmXJ6n8STjmY3s73NEwdNa21RdFHAru1bizLEcxo8m1HyDuE3JWbYfyo5mvhmG4SWVn",
  "key37": "5rDP5xzJAheUmt4FJcDTfe93XDDk9eYdedejtT4hfTZYtEycdNH6g3u29XWyGjZfgtB4R7ZWDx2Gr4aubQD9bJPu"
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
