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
    "2owBiKzynJM8QpC3JjxCRu7ZDGzwgMrPMkvs6HdS6gsiziZvCMkePnoM63hd12wSc5zscphfsDnGnc6XCtEjQobP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fus4wmCY7B77sPQn6NNqjBhWJsrbEUHP5hhvhuSGff8arTYgpZNbA7vsrKfMV88Qbz3MqgwLn8yGeXoKQFf3S9g",
  "key1": "4RzPc8HdQ7A759kUbyKS13N8sfgDeMqxCzZ7NoQ1X6j1tSMLeFU4znjud7Z9o2W9mfdLSEMrXhCRCLyKrH6bjy9b",
  "key2": "5FVqq62ABHh1KcaLn2fKZb3n6eYGsaNsYjq4KxcBQ55ZAFirssrQGkfnitij1ahkganpw535Q91e8A2rJo9mTHeE",
  "key3": "3dmh8aWDiHCsn41yuoFeRBpeYcP7v9r7Ln5XPFF9wB2EEALXBp13UfvC742spe1tm7R9DXX1RzS6Asew9ZPmgdYH",
  "key4": "pDPdZgzW6oSAHMY4XBdcJxkyhyNGHpcH8Gob7cHaSgUYL9dWkUkeF7UjBmdKs9msjr6cHJUxmTxksZCpHb8EcD3",
  "key5": "3vCNqCKc4RQwjzv5J1NQe3UESBTwJmigNUJ5jWQRpwE2jW7tEE9CPZeFCPMkvyLimzKDdtJpQL4mcN1i4WMFaZVH",
  "key6": "NFoi42Tc46UdLGkwXtCrKvAKhTzbccmdBtzQ4XvsiWwboTiuUUviXFxJk6Jcv6DXxazLEc8LqGTDGQ9v2uZJipm",
  "key7": "2yidkd64q48Ly2YhfafqTxHZxiUvtj2evoprU7DMYf1Pi6LzpTFm66SFVJu5uawFQz3AjLx43H2QxRbwx6G4EcEM",
  "key8": "4SRYCzx6ebA4fkSHFjkMyWxjkaCqvhvWzuUCqEwLuyG6d5DdAtZUJiJhHGbgwGadRDgihZL1bWRYxjFcnW2EJhL6",
  "key9": "3BE7GbQMgizzaXaya2jFbbCrXFQLVyb67qTzEiYTbAN8QVVboeq8vNgofxiwck8Yi7PmXFQEuD2wCdMEfvkfFjzP",
  "key10": "FV9osHaZW6faz16YpGsEPBDSgLSHWd9envkqQLaDbcZ9vPNmZ9sdUQ5iVQgThJHMMB8sBE9Etc5z8MrnjM2QUXe",
  "key11": "2FHPPRrmttRxtX7LsWhLCC4ucy93NFwCrn56eHvTbzQ9F3MZ5uguKWeL3W7dRfPn5cEuRKWjzTqpNC21UaDXQnDe",
  "key12": "kz1x7wXWKDARVC63A76LzZ943fvwbgRjdZVfYaBQoouwAcNWi1DvWxS7efaro65TgYTqMn6ET1zi8gheA4mJwyY",
  "key13": "2L9JrHZ9XQMCgcx77PktbSAC7DVnR8p58fS17C4MGsCyMiCSantqgyDZDDKsYp1kmqK4RtC9sM9SJARVE1UeHGYw",
  "key14": "2Fj38mdvZ9aMDqaARte5yWyQipLz65GgHGx8QvEoyGS85ZbuLGXi4VWrsb6KaR8pUBadGieTsEDsnDc5zJiJUe4N",
  "key15": "4Nd9T64YNBLqhWZPxk4HrVjdNTsxhZp89zuqa6ditdEbEtHAriASNooFHpfbAwsW12WSwYc2XtWpVWEfxRRetCLn",
  "key16": "424Yd1WWjk5kxBZeZxVCabMYSkD7vELu4xgyfwXJe6xKJ8GJRZaTh4HvS4ykZoqGj99BprXBRWRiEM4jiqdCkwE2",
  "key17": "TF2Mzn43kLNLtvBj4ApmoSFzknsCRmEZKZbQnbZbYuiFbAF3zPriB1aAcmPZWG4VxLCPMEmD9hq2zUjtEKG2NJw",
  "key18": "eyuzU7mvLZwSMGcAESLGQFnQ4KyUi2ghcKQL1UvQ4qGJjiY8TPCxCUCNZXbsyTo5cR4xT1v6hvykZK3ugnjyCUB",
  "key19": "4KdJWegt1yMDthN3vbx4tNiizPw8eKYaGrxqmhrRggVBoJxMnWXA8j74GB13eKbwKcDQKpouXmMFgpGYfsMv5hqT",
  "key20": "2ppqHtbaJNXJtvL52Kyrdiv2bfa4eQcGr5GKg23psgWMegHKbYxRLXJNRGJ7jptxhEdjUNjkmAb2ZmyCUdd1XtUD",
  "key21": "5LD8KLGLzP7TyzVwoUSTa6LMcq5W3zx5QKwYfdmbjhTGTRiGUHN97Fb8PZZQknqExJKzuZuf4SSYhRg8D9dLebNA",
  "key22": "5qnFvfpejcSYpZ2zaw5JqYWsV8AtwjXZpi3T1ajAUPniKK1PWhPJghRyGPLrvstnTj24vSzDbE9xUAqDYEVqRbf2",
  "key23": "4tjgnTZGgRxn4QGfqTZmMtTmZ3LjBGxJ5qXpWjqsQiNM7SBo5WYdUWjZM6eeQ9xhnSfxCwY6e5RaHoSTjHWZr1rq",
  "key24": "3a67dmotLywP5NYq2jhFxNSGcd88S8sc8Ukd6yUazPD7H17FGnJoQJ3S9hYFpTgM5XDcoGUFK2sno8XYKMirAcwA",
  "key25": "2cK9mRWQZzTVJpAHG84pkLawhSNqPxbtZiGQb7dZfB9nLq5JdvaViLCmgu2CRy7RoAffrVzjMLrbKsbGwb9fCG96",
  "key26": "4dD2FFKbb8GGBC8FPDYB1R3PxbUV57saCx2P1wqeHPU2gfDU3tn9xChSDZ1rubpyUxpE3xZUBkoAV5vtCYqbQp7R",
  "key27": "fP96mEsb5HyrgdzFQrqfVgtXMG45iy2EPYhgiYuiMZ8cZmi4NEpyfoesF5dRMMg4DL7q9GxqiSS1N37QtLwv2t5",
  "key28": "58Zq1YqYf53cbnFTGoXbksL36qt2kpg6zMxSA8gmYyTuYtYChsDwpovexiCA6nF7TEwqaNjRtBrPEvBRatz7PnoN",
  "key29": "5WJf93E9EznVn5BS9UpRUTZRkfYMuEd9uwkhR9NhZRodm4tpjxqPUvWBdUMbQbBHi6bEWtQPbvVbvwQGWMCnN78U",
  "key30": "2KLMJo8y5S3oGLi1H2VMDrz4w9GRn3hTjhyDyLZabQCMqJFV3haR8FJkZtjd3eXS1BPjoAGTnoYSzn4GjnMtnNHP",
  "key31": "3gxKHtFBd7vECsmRtEQSafaNvntKwcFrP3Mak3KAaaYjAmJJyKiLdWe5tNG4URkB4zgouWCeJVhddBeA2uLAmgLH",
  "key32": "2s58b9uxhsjUCvP7iVdkvMAtZ3owqupGgYr1qouncFKv8KYKaRxzXTBBf7Xk2hkqvj8Q6ZngTxkEXYzu1Ry1cVWG",
  "key33": "5zbcGKofXtC7Lmer6Ek87CcEErjRZWazgD43Eue9qQwZ9H5e3BWxmgjkHAxsgDtJbxGsiRboRWNAbELDgZkiapmD",
  "key34": "3hpFBzCcpmU4wDCkbn1bJ4dhvVR4CSkqyrbVZQgjKVH6iiRxVZt7eAM6NwdQZ57ZqYJxpZTE2Z7LbmsDnMgkxaqp",
  "key35": "3xXo7FbU4vbEdw7eQwFBPbYh4ghnPLXtYZZ1jh1X3LmiynxwVQZpL99hjFgGVJXUwEdFyRpy5NqW7cNpLuSXTh83",
  "key36": "3q6b8p9UhQvhQEqdvp3ij4qVAw6fpWN31B8AM6vD84bRaHqReBGaB3TgKHtMgNksbHro5tg3RvBhMc27c1LwmNbF",
  "key37": "63szxPZWggNDQwLhSKHZKyKopjPdCH5S5JN77RdN3yqTW2BFyuq4TPMybYThKkrkX7ppSVd5iq8WWC5ABGZVwQWD",
  "key38": "2rQ7rTTepwmeibvA5HcgdAzYkQNmBuL5c1WyZHnnoZBysZ9z4QRDktqKB6k6N4RpDoTRw46XyQemYgqudS7MdMdT",
  "key39": "6YAW2LPHV27FtYr8fNvtE1WrfPvk9DCv9w16ZvdGGoX3ss2mGJ1hG3V4DFb1yuKKW2r8hseuj6R7bBxmvwbonEu",
  "key40": "4MUKwQsLatTiKRFrxTK5fLY3EcX56NvZy1omjEvvAwwcXrZoHKgMzMThbpcopj6ezHE3iDLeiFAoiRxBNJUxP25G",
  "key41": "2tUG9LCJn9ujMLTiaxW2hNZa1GatN6x1wH2VqkueWkDkDH3RYCPW8rTuhi2exhasRhiQNs3tXpdAoMBXN2pqShS9",
  "key42": "3tLz8yEv9kToUjFuYhiRxChsY9sXwfLYK8wXufKFgoS9b54WBgphDkib8CerEWoyk9CDb5aVLLxXGahAV7VbCvqQ",
  "key43": "4FHfunCrxbAfj5U4s5SJpeVm1dNp2yzKUJTDWoMiHmehCBXcMAFkozrs7CMZSBFD4ELj9vZH26qA7reKMkUiQpw5",
  "key44": "5T6kEYDec8HRaTDqbLWSk4VhvTgNzH5PGjPGQ1qzF84N2CTtDoc85VMj2MhxhwYVGgRtaRqHuEL4sLGcii6QzAVF",
  "key45": "2W8QnEtXofzRokmxBFZTMsyA2GjNxoNuFYqFGoPX3wV89eH6VokgDVFAD5A2HfmQJDKQBeZweYoDtocXcJs3BA88",
  "key46": "5wmhffkE3U8w5X8H1iQBiYmbczwgh8CFhzXGcRr54bPLeUai1C7kYbHJq94aJzt6hRPz1yzXaWfqKQwhfRHtYWqQ",
  "key47": "33p7WmkWEVFLFduVe9ZLujUZdd2g9kq3xXoBRoka6JPSZmpn4uSyDAG1EsEKF2h6H4HCgkJQ63NRLLFgvbXUwKZE",
  "key48": "3KbimE3dNwYi8ZDMDaBMdQ7Vop9EmkG3fhS3pyk4VitAHQq33Bpw6FXseytMGXYThChjyRNTiwyEeLyXSdxtPdZH",
  "key49": "3hUnWk5G877EhjxBKRfjsJSxjgKQox8e59eJFXWnpns7MsQqQsmTRpuHonfqSFhg4u7kze9Vev9ZhUryZNBpuaMX"
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
