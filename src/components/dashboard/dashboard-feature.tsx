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
    "4UrYw9MF7ffZnsxa873GWabzWiDvy5BuKTVFcKmfKXiEcJtp4xcqydj7d2uvWnAoYoo5hTNLZKK1mJjPyPNR83Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JRzij7XSjVU7yzg1BFzitvexaWMabzX3gaUuvPc8jCZfgJTuhVZ4SNuPSLstcFbfMq517scJgZzESwen8Mdax5",
  "key1": "656SgeuBLPhweU57dzVyZThd7wUdMY8msouqLy2LT9rLF5FpvcZRasXWDqHCDHF7PWG9Q9BvS3Xfuu8FtiKEGxBR",
  "key2": "2ro9C7pEzgBGtfYxKRzx9jLZtpfQu3DDZVPxwTDcujTvMjRytBQm5iPEdTtM3cQmtYmLyVeqmmgmqsuJLBmsoCFH",
  "key3": "2vEJBkjX76vDoUPgRKTGxfNZh8rgyPBVRtex1j2jkjkoG8xvtT4X8J8NWAhqmjUuHot5EZWEaU8mLXkwtLc7f1gC",
  "key4": "5Ua55grQ4FeJn8598Us4ctNX78GFqnu5rVXVJkQewHGR8M6BKjwD1WDjfY5PswTL63LfEdgvtZ3ERMw2NQ2ykdVA",
  "key5": "3o6G6nWjUfJ8NLjxL9myca3D4YPB5vZ7jXQg59PiMewEi4QkJdH1NZmT6V7Vzum8DNMxhEwy34cVjciax4dcouDx",
  "key6": "5U2g4ntebHtqngA7WRhSDnK3MNR5wqntbN6FHpRRv6cRu4MS6dDSqWnQXa7d2wNQ64bKLDEnb4F4M8UAXU3HAY6p",
  "key7": "3jSnvj8u8Nx22TW8WSuqYAZxosgdZdVgYNpxXkpijx9P23u9LBfQbPXJHHcmxpGrHa38DqTY4GhQT1tsSZUDWdR5",
  "key8": "5KtDrwHoittUUQGh69NnZba3X3PjorNGJY8pgxELJCBRsgcMmogGgGJAMnsT8vNWzr71vcjqNUbXbv28EHavPiBZ",
  "key9": "3R2UEz5PDzfcVAnPGtoiiGKf2xMany8uTuURkYAHEor5MFCCawjvT69nyjda5HPsvKdzoznYwGcbG1n882hf8Lkn",
  "key10": "5dDSJbuZroRFm6bokQbE5qho2jwKdTuMBr2NFF9qFmQTHTMMmxWrETiURviP8Hiu2JBYacg61iMSpzzDaPsxnoue",
  "key11": "2TZs58KnKnJeMfK3TpMEuK8ihKj8Dn5JN1TB1uJFXVf8jhsf9xqeh3EkVeDkNwTkQKaPE6pJ4KJUikeMLHej8csZ",
  "key12": "32uBYu6nwjBvAd8XmoPWFkAKGpx1HYG1WGVe4YjZdtMmvQabtxRxFaw6NPrTzy9uWftnwnakLTVdjy6wo8iiSekm",
  "key13": "39nWFFxhjgSgZgiQvEgQPh3yaYxv2dA3GTcLQZJPkUbhH32J5AV73p1R2rHsi1tnCXsWVNaFv8mxkkeoqRPo4e4T",
  "key14": "uL97tHhUqUESGpZvt9gqU84GD4LzpaccDKxjbQ14F8VdZ4LBowt6Tq8HhTbopBpawxMfhJPoYfHU4vNtd2q12kk",
  "key15": "3AT7uBzTZBRoog8LnDUjGj6qYZxnndUXyFYwh66YHGaKUtXVCAK3wqJ7wfA6hw4eoqkrTySaxJ9o1HZSzSgNiw6S",
  "key16": "5P2FiA6T7YiQFaNhied9Z6wtahZgKjmkja3wxq2e7CP8NvjsW5A3wnkALDfT1eU1gtRozbxRPXuRft3h6GtcqhW5",
  "key17": "3pa7z7tRdqiVywZbmFbfhWbQZVbAcuxyphAcK4aq4eYvSNbqBLtESdooxJnYxYVdmJnCkL41DTwitjJUhCSaHfE9",
  "key18": "247CWoaRndtJDZrEqNDVcva572oTob8PNYHCtwfzwSjqGohtGLXKoLcX8kuKTh3KRiTWbbmPZTkU8L32i16dSPRw",
  "key19": "4XXL9asBcqL7uBB4J4QdayDY5vuhRCkZxPeGL3wKjyLvroFkeay5K1ZL3YYQna9yC75RHUULm2uLxhJd4pGES6mF",
  "key20": "5yYapX7Bqqd7o7XwjoTmdWeVm7MTwKgr8iqhcQmFub2xjiLjYgv7kA3voZfWrj7LovcWTY92sXvNRW99xnmTDhn",
  "key21": "QddmFLG7mB6Zy7wGsSA3Vz8MM6bzjQ7BdNBcWCXihDKpTr5zrSbeZkDBX8rEcHhUngfqq15yHKPwZjWJKzAjBpc",
  "key22": "4g1WFGf116HUPGq23rPQZULKmKYZJx2ZGG5kG1X4e4kN7oF8s9S6MVAJjNkcyAutPFaVav8zHF9eLBEfF4Dn9evD",
  "key23": "2UWBo6hUdNRb8Pk81nrW3veCKJezSCY6euTQjHcJ29SiakAozTmDB1n7yemwZBgJxiHAqni73wYHjn5rSuo9sPMD",
  "key24": "5nhovJgPEEC8vx2yRbr8ioWs9X52D77DTJyiKTjQJkXbDev6F9syTSCCE5rEj7Yo9ZFGEKJ7W6SAZphNXqNX5mfF",
  "key25": "7qCyi4NJrBSEJVmXPxuPw4vJt8SwV5RCAii8aWhabM3Qvmhi9npLQJSwfX2uxxFa7WbnNaU7o2DnADzotmWk4Gi",
  "key26": "5g7qGC7c8KRY4pk5aBVBPLSgYqBvLDrFbGq2weTz3Z4oL9rTjSVbJGP4F6uZoj5pW5xbvJtyfc6gbpNYCT4Jnki4",
  "key27": "2ncvEGRTUNobLqNDuFaAtrxpDqfNFTkRerVjvJPEKcGCoSAv4j1Lqb9ywcBusKjo4ocqmGjUrvQApFomXVjy8vns",
  "key28": "2SBoVESp8f2qCcVtVy6bdvEq2LYusRp6yNreSm219BxFYbtpn7J2J8crSzdC9zaYT3W3ZB2uBvfeeEnk3vhKkxqU",
  "key29": "4Ua8RbiQ9eUETtriBjKY1bRwEWfn33XZyLudC14TuV3hEyqqp9pVpexqPtQ54DP88CAnZrN5haC283FCPH77x1Dd",
  "key30": "4VkgnnoHeBgo2y1L2JEwM2Ja88PfMr3ide2utVJrfvVfenbeLaAtKQ4aKQzf6bBkrtHTFWX2j2icbLPrZ9NP2fAd",
  "key31": "4iPvqkMjmcnQaf4PCTb4C8ZQ4gjfbYdh4Di7Js7bgjeaor6WUApZpd77d1dFaBSTAru3DHYRnuTpL4XKvi8pbhbq",
  "key32": "26oZCanxa6SCiRPBNdvCrLGpKiWqG5GAUsVcYhwkmaBW5wW21pG48BaqNSy3QkybQWZZPpUPXVqzPbP8b2hXKD8E",
  "key33": "4MhVc9tZTehv99x7kpX1ny8mYVFbCHVJv6zVLfLYL95KZpzmda1TGGDAb7n2pwMdn5es854GLQAKbxkQW1jcjFMm",
  "key34": "27tPwHSfFepmJVMMifuw13FTY1yS29PkkRoVpxH6McWZQpjJrNWzuqMeRvVPhQ5EwzjJbZ8fsng79bmzDSq5sYJk",
  "key35": "y6TFHCrqu1eW8KvjWCC8okpHzj9CQ6naxtTgZ2WpFpZkA5tKdMLrVwJ8qNkgTUrFrkLMRRfDdWTEeMzhVPxsd1K",
  "key36": "39K19he7KxqUWTc7wC5dH7qA8ci3V1R9F76syhnENGbQYnN824TpS2pGqrxTocrUjka7umCuyZrsbZ4MxYzdPTH7",
  "key37": "3NtPnNZrXbvN2FKiCf2FUwFhv9iv2o9oguvYexWjkLn8KJHsWzuWaNVVtoFPRRvs5kCrVRMJUueXUrFdyeQb7n4C",
  "key38": "2UC5SJYP4FC86UKHUp6vyBfWHjtVNeRMg5KkWTrXsFzHm3vMnUEYwo1Ay7HzEfyEMm9ustvCuWQfwUZwSxZR734c",
  "key39": "3LJuyqvqKdxoC71Cf47Xb1W9mhEUetzpyCNjknxkbMmHZEWABqQDCvsERdVKSUPMNA7o6YqYw1UnW4XR6tCw9juz",
  "key40": "mwt1vaaTYmAh1TAFvLddc93DKfCpmzs1DMYgy3mULLZs6zU7kti31KZ4RP8EgvP9gNciqrtQ8KJRKbPsXn6NVbG"
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
