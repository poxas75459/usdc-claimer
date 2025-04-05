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
    "27L3PV7QV9JN3PyWGA7b8nR7SmdmR5EzLFXateRHciKcv779DyAMAYxKHYE4tNg1nx85DPmQqF23cCYf4VePm99E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zy1768WYZwMN8DjEfmBMCvdaBFFRjRaYUsuWfr8e1TAcnf1HhuYjzkosWDet9SVSyHrFVCLXfPoMFUYnMdMfoBH",
  "key1": "4tP6bAg6PEbBKQDFN7YSoaFnRNG4caf8U85AbWJLfN2ShkdURp7huckTtaNhE5LF4WWj3tyTL55k4oQruvs21bJ8",
  "key2": "621osFiRFzaxTLdt59USGqHqmg1d3hBciyj8m6a3UQ6YEU59py7Kn9kcU9nj4HNycdooDKCZYaZkLrVh8A7tVQkr",
  "key3": "59Djbyqa1yW8uzi24mJD2xYgFagXC9ZTX6n4dVQqnQdSFzMLBkVeJc6bQveE2vDq6ZuNLoMYaU2DCKtmTvjcAX5G",
  "key4": "4BKEgidB8RYrjMJFFEFSSPWNVDebaVNSGiYbuQpZL6JiULFoF9DpyNb4Fm2A7KmHeucasF8E7mkxywjKooGyztWt",
  "key5": "4BPsxH7ASVEamMgLt5M9BEf7NftMLoMXkL7Y6yRmaepxzaBEyn2mnwpKQku2JkZEjDeLbApeioSLpQYgtEwn7gMp",
  "key6": "4TLmJV2CEovfETyREi7XNkQYPBRQ99zPXmoppJzP7bLPawD5uebcjWtPxLdmf7CbngsJRYRU1RL8dg6KTM8i8k1j",
  "key7": "5TemiQ5mBhFNw7bSpnqk4xyUy9JBMcUpQU2sCMBGkKc1V8ZB7g4bv2kgxo9LfGe5LY8WUob9FPAuJJo8wx7T4gm1",
  "key8": "4ypyuYnYy6FmPoJ1z2YT5KvH35L2mvuPg2x4TWTjDYNBS1csVLGoWB2rUyVm2pSoX9bgZvHimEjpvHjmTZFsC18Q",
  "key9": "DMPFPXWSiX7qcJi4w5AqiyhLd3damYR2kXpUSpNctFq66XpXzNhoEJuQXx8JR5AWPuoAfHaNNvGZDRjHvaDNyjf",
  "key10": "uw5zUD2e7ZycFDApUTrFwA1bZ1eDhwrBdgpccjn15kJ5ApsqNJ3px3KRwP9NMbtdFQmyHZyuGsvRrFELUP66J6B",
  "key11": "3Q49hdA9TtVh3nd8ZBG1qQ2kwN7Ugm22z532kNpSMwwDMsyiQjkJSTeGwGukogsY1YPqdXo7BY6h1qDJaN8Udzbm",
  "key12": "bzeVqqR5dko8kCT6G6FGUxY9s9ZWpWnvosvumjv4pu8amXTGh7ZJbQqHPjXrJiAnXbkWGCMUAgx6VZdxYRaN4uP",
  "key13": "5PZwy55N89LcB3GrU98knfDwPBppEEssnRcaJMYUeuJoujet4Ng17zSLQn3dCgn3CoBfUVtz5vU87NjcnmQfutD6",
  "key14": "46d2xnWxjgqGFZTm378fouVdq7FZB51FedrJhRSyoQUqM1cAV5GkvnQJtUaSviE1fTwvxe1aSxDAQeAmCYA4iYDD",
  "key15": "2GeLzSqkxe3TejvZp8t2KsvbijXqRa5wS2c7dhmnmsQD1kJc3ix2X3rPgpuXo6icx2ir7SwM9no3pBP65qSfs5qG",
  "key16": "2R76BfSGJ4s4m9JPxKqRq7toV6moZgNbcwyj74y3MFEGGV9YsAmD2jxrr7g86tzJg8st29CvJYyP1SGQgMZUFmLJ",
  "key17": "4iTsQDLWkoS31qSQvfLyH5TdycUvWaUT9gK4oVR349aaCrf4NLonBPiFUZcN33D6YZMCWTKqPXG5zaJgSS6h584P",
  "key18": "4tMAVKTQ6QwquB8DC5UxRAqr76NmMfzX4h5hMLwQvAqGhKSXZFmiMswSm1syUuXJ6h2oSiGSfW3eYmWmuHN3eRQN",
  "key19": "2XR99YzDfGgLRrwWMvtrXdckaXsKUmZRWF9PjH4UkzcewQnrGjoASoJQXYo9o8kypoBH4z3ykapQo8sduDzt5z4g",
  "key20": "KtkWG7TrKiFgy4H7vAkTMJCeu1hTrdVbrhHHMwqVEdEmCg8kHNAQFvAroHbpAu9CXVqqWTQtzo56qTHAexXBVnr",
  "key21": "YqFx9WWAE4wP6b2iPGYQutxZqBQ2y6nzbMmi9MiGYmnqD8Z5V6FBrf8vGDZZR6siiFcqdcGzQ76LhDzfa3Tnhvz",
  "key22": "3SYSZ9ajsZEeEgH3NKD36cRH5LbL2XxYtYefooKuCT2N9wBp5rXnh6P6khhjHFbAdjoHogoruoN1hEfYg5njoqHs",
  "key23": "52meh5E3TXTdFziK6uin8sbHm9jrKuhWSj7otkmbVxmiTUxu5XUK1T3jLHDyNWmRmVLSur3tWrEwgTDwNZxMaCBx",
  "key24": "4yLx1U5orwYFGR8U44ao8pLoHedbXTCEHrAgHd69t3hZ1mX26Em31NHnri4AQA425T2W8ApFKSp7QsxJzsVqXWRc",
  "key25": "1tES4ryatsbdWKfuAg1VKDJRFb7YLKboCZyW3xJFuRfgaJSMXJF1v3bvEwZb7FvQ67uAerymCe9G8np5NARGidx",
  "key26": "t8c84rwZVHLYZkabCyZq88EP7hetJQJ9akWHfaqPtjbg4M3fKdcs8A98MsiB1vAREdQ2txPaVFP4ZCUJxtWCvXo",
  "key27": "3CjFp3Xw1xA1r5tsdd2YwAddcW5m3BN49EqBHWjiMJuxgfvKKghiQnEoLoHQiEG41rNq3XWQJuujHXEBxWSWz2ii",
  "key28": "4TGkF2i4uaDpAPJ9eWdQJ8HYKArjd8x7GdtA15ASMxjH21v9p7YZBbZWh7QN7tHu8t8Z8qfvHuQyNfHZ7YiZgvM",
  "key29": "4HkpeS3mdADU1M3cQdfHZK5irSi5GV684f3NK6uYPqBqVWg4kcvvMJcPSeRf8eSqVF6GLJcTPQEDPuRN1mxhtCbY",
  "key30": "VvMpU5qnLKQ9Ymjb1NrWw8pDpmNE2Y75Ntw16X1PuRKWUUUPVL4TR5iHaktxpPcNM4aAJxNEUrBc9U9mnHRxRJ6",
  "key31": "3CNqYvQkfLTKMWFjMe1mhU3iwG9GkZ6Nz2HKHi2ob5yVL5J4T6RfB8b4EvcLpv3dYbUSRtTW3MvxkoYUGwcQQQj3",
  "key32": "24L35MeNZCALiCLRVYe2pJ2gq3ZWofBwPiSNJegdfhCgjYqTHYr7pTJjcfYoV6sAicgRWHBDpLAqCpvXhkiH53Xs",
  "key33": "BWrpkFZpktyBz8J5JgTTJoG6jESDtebn3RFuRiBmovCBZFdMRgPtWLriY3smtYWNSq8wKS2FVX1RD9axWraGyNV",
  "key34": "5oerKvXzwAbPiMu95btMSgHcLoX6iscsP8hSYPdDX9Z5Nerw9VhxeFRxfEEXViGZ5Q2ZTsC3GMYhgRAgG6T2ozw7",
  "key35": "2TAups4HFdCh2pAGaKBh3eWcfQPqQNAD8sxY4W6PUU1c4TLPpHTCyxJDdnu8CS2m9ss4PzqKWhEq3AfWawcPEkzu",
  "key36": "dJ7Bbr7gj3GHmzcHhYfXZ7XAtxyVEchwn3BF2hzZqxV97Cx9KgZgzwFU7AztpSrCShkegwGqTgoib3myZdPTTQM",
  "key37": "5tcn4PUxcgakcTgmsitJuSqFwuXCEYgeoA5DYgT89K9ERbyc4A2qM9g2vAmRjcA88z7GaUKn3egLZ8fJHXbjcXPk",
  "key38": "2t1xE2kLoCi4hr5UV7EXpFP8DFEs6wG2MQFXpBcCPSPwPamKVKpikbpkwDaZBs5k6hTYtUkAVbKsFuH7fMyU3s4r",
  "key39": "4N1Uw2HEhp385iCDCHAQ2RqDvrRgC5a8h6pjaeH4fVxMi66sa1KTubA5SL1oJybDvqDbsCJ32wjdNU186Rk4AHSC",
  "key40": "5HcPPTs4WCZfv1BNDXSWBPJ5bgpCkF9YN3tGQtB2m7YL5jLz9nX3QLrvUm8fUNVmpkqH7ZnQhF8oNUk2zhCP7ApD",
  "key41": "y2bUjNkxHRWaU2qCcZPgus6XorKWvd6cac9Mq2FzKyzGS1c4VBbsFbo5aCwDSq3n4gE4EgwWRWzVRn2WQqThPnB",
  "key42": "5DpijUJGQ9i1Pu7V46KgBqPsvoGoc2NEjBfoWhueDEJq6i269C1ySmZxdKATmFJyuUMWDeL93jqddCvc9YkoDVay",
  "key43": "2Bb9AAXE6UtcDTszssvKnJXsmLyoYJwriEwMkdPa2pZ3ejKDyGZzSyDLYstS8AgjxH77KrMEGhUHxVb3AXBnE7uy",
  "key44": "3QifwiFUoMrMRhD47JG2aW38HP4LAnYD6RsFC8ThWSaSdwrVb5L8tKe94WAgnyxBnU6uRqqN3gbjseE89X98nCw7",
  "key45": "4GAikyHdWRqx3wSzeWMBDZ3Z3frJpYFh1EwhVCFZ3UDTQywBxWsffiCQXnDfbpa4GPB3A2c8D5RCTDsrCH7uTu7u"
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
