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
    "4iYihydPPKuRvC1iAkL21bNJhRPQT9DSr7P6trzrwysNN4MaksZjMxqYBJ32NMT8TCJwG1bsuow49sXgQYAHiMeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F22h1f11jqQBphVdKmCpUvA1GvG1haf2YLhBHjWAWRsqVsgqVmfwC4digpW1wnM6VMG9Wr8q61hKQTJrdMHjUjE",
  "key1": "4qLqAZp9exLwCSeBSaJ7yuweAYBPGdaL9HrCtxhLPSQfbmGQ54d1svMWUbRYsxVVkZkZY6yrfVwFQgaecVCxdoTp",
  "key2": "4enpBfGqBDmudnnvyKjocifPi1vyz528Yyxt7nAtex5iQtUCcZQ528GKEfTFdd8ttaDvU4aLeXfCcy95i9LBSohH",
  "key3": "5DU9XSCWNdWq73ooTn8mtft1Rzn2TMaWtLhKMzjY8EoqeCfnQzVVRHQ7iLVsi6smvQWEbVQgRihHBpwhq2DTVgCw",
  "key4": "2if8Te52rPakcwuRw6hUy4bAQZZ3UqrF9KdxHEoxrMq3suUugHYUZmkN6ANhbAsxkooEwTnzyLxqHUFAMF9sQoky",
  "key5": "2faKbZAKupZo1xQeUT4BJXfAhuJJrz3sB3Xr7C9ghQsjvTQE7BwwYpBXWvKH5xRgUSD49UKsa5r7NoT9pPQUB4Ug",
  "key6": "2jXLvEA3RtgBKVxDR8qCH4cdp21YH5Z8BTvmaUaAJynkFBRCL99VhtNzdDE6m9kPLuPva9Vr77vTeA7AM6sjEs5w",
  "key7": "2gCHN8ytYNrbNYJYHY52F5bZfeaczjLUaVkYs9tJi3f6tQFMJtpn3xQRhuZ2Nb1b8FG96MP61iiJPpmNQHN1WroL",
  "key8": "5MoY1MeJS6ptawwXNLiW7PsEFftnJEM8sgKT3qe3mQKh8cfZgFJDbdjkgr5cPC6sZacBiQvXNWCaV4ZwNEPzss6L",
  "key9": "5886t7gUXxLwSoxWEzTuCuTvFKck9RG1kn44GwTyPHxudraJpDZLm3P2x67ay72tgcemburNC4W5YctV6NqqkLsG",
  "key10": "5MaB5hJMKTN4nyVRNQc8E4PGvLSr1avWGeadsMXbDRwLiNCQCHDpptJ6QW8TtyVWfDZHr51i1216mLLdF6CEvaDw",
  "key11": "5EqNnfJfYtz83zsQk68LHwntuUqph3ppFZ3e3ZjLKrnDELq7fjjwtGM4AnF7nRJ6JviPYGiDoUGvpJ8e7Ce1T7mc",
  "key12": "2yqyGn9jELcDRkpVuX47DcVR3t9ZNRQ4G5mpnKmiTwG47Npv3DMEjNqcKz65QYzXEF7tYDbzDdruW7vHgs7DPXzz",
  "key13": "5Yn5X1krxeCC4h556snRdHNffQpxhzKRUHTs35PeSvjysXyxJLEgE4Q9sAmQZk7wkZGH8G9sU3jMVogAEADRRc6h",
  "key14": "2qDHmNGaUwCa6GfoAihCMPJGDRfZ2jCbaFj9TCXPfQDb5CW3zVysfhZfxMvHrniogeLkABujHi3V46TvrPQU33UX",
  "key15": "iExugRMqXYjNRqvDcHfoSutMJtPV6yfdTwXbXjkUD5YoZyXLzsjr2reewLdWpVBn1QCQpZZbSx5wtis94daLcvT",
  "key16": "3eK8MDriS2wAeW8Rj62Skd7asRTk48P5FLpu56s2Hs3z355BQMz8qP1Wvqyez4QLDnnsPNoRLUNW4pV6euycd9kq",
  "key17": "3sSbEFWMvdtG5PV9o3aiymnVWpvzPDeV53co8SK3B8kn8Bpn1aMGqVi9gAR66hrpQ5jgkPnRz6MPGQmENk676iD3",
  "key18": "2PeGy4E1bmbJk3u8B3sRpPoPnpzZYocEQYcYkzETzUAga4dRhBrjyh1R914UBKYYZUzPfwWrqAN98J88PS9zsQf9",
  "key19": "ewMUMHVYmFSVU7CrRKXMnAbbTNNBFUjVPb7NCr2tdEwwfHyTbyTwUoDfH757U5NvttJDgbCs4WaUf6uQ6Km5sMX",
  "key20": "2BSEbN3x6iC2hsyYgJnkDmTkw6nSLyWz5GpQc4Pssh5NoJk7HQKdczSgrQ6oMrjPaQTvbkNEuoGppYBB17Q9kSmk",
  "key21": "2bAnCirnuTD8KQLHZSNGwkebhUgRQSLtn6SB7D8sT8uDD1hT64omRA4omN3Lp6iK19VhJVF3vLQsoNHWnAUeFDB5",
  "key22": "5z6gBJCeXmt77aX97i3Sif36NZk6u6ycPP3dLTzVcXBTBw6qhmyBNsCBw8PMT1ey4peGAeWMbtYHareCHRM7wSqq",
  "key23": "3s2mAzpHHzi8hpEjv1dJcGpU346UYmS79Yj4HPy18XeCZSDoq9kjGyfJk2zyJcgrjzLZAbpsTGXjDgZmYxtHFVWR",
  "key24": "5tyb5i3uLKekL5rkmDiXPT1NBQRPkLPuNVY9dQFbbKiukdyA534yGygkDcoDq9trrm2zbMATwdVhQPHWH5mphR45",
  "key25": "NPEMs6GteX3KNxa7dWKd4zjeqdsqtN7msVGbUb3djZMngJMP3M2pVmzg71k9TwtfnX2L2us9xNC3x6kF5cZbRhj",
  "key26": "3mqXYxVDBj4kK9RZUoBSZnhQCEZ4GiRREQH3ZHk5nw5RS4rwYGafzWdG25EUDAcaz4hDkKMJvHDfcu2SHGyHTzHb",
  "key27": "4ftxbTtK3Np4gi2VisfXYupvNDCVYpmSkVL6hApsRkfUZnYyrcUcpAUxvxmveQYzGS2NqjSTLTqBpGahJuueoQCr",
  "key28": "39msLRtLNDZTeKHC2e8uLreNfS2z6Nh19R8dL99DTSqskub3HQRgrH6H2duDJQuXCBSQoqg6VxkdpBJfx8KBhY8H",
  "key29": "2vrjofivoEZ7644kycGXA4Qa5UK2VsVTXwCrBD4bu9WrV8iN7GstZENXa1xV5ykhDgn9x13tokLryQo1XeDMiVVC",
  "key30": "4vk3d4j7nzLsKhSHTDDnybbupFx59QkEACspq3N1S3JVGUCjyLeKdX2drGbXm2ZrCEsaESNQAJxLR2y51R5cEw2V",
  "key31": "4Pr6ziTYSgyAw7kPsHK8b3pcjW3QBcwptJnXAhW4VJfUkfs3t1VW158dEM6fw62atKLGXhsZ8rLtZQmNkJp5yxfd",
  "key32": "4yj5VraFceqefuoFPwnAgREKfD5fm5kjUidepsPcoiRTpjFGTHiEVb2WYF94ZQmeunoFLmWTUMBRupURH89VkHPY",
  "key33": "ir3inWTcUUgNgJPg76WEfMnAcvNwvmyACWFLVjG8QLFmewD8DLZnF5dF7gJaaBtj1jtz5zrTAcwa9MEm7zcyCpX",
  "key34": "k98uMmmYoNREkAX4Z9wbaPwn4KYa493xm5adFwknTCsMDbPX4qVVWjmeFzF6io7R4WRLew1rW3qcQE7Z3BCeMHW",
  "key35": "3cS1Ht9jkzGKWqaSV4sksDzwowp9TAPohx5895d4jrUXp5eTQaovDxPBLziua7dFq13QhYdEbUB3avSazCyNWupm",
  "key36": "612eTqJ19LDBnAu1gBBygQ1sLeB6673xhbmKzAF7GqzKbntb9qbCKK8UcPhERfAp1sHne6xeBK5RBLJkgdMZcE5C",
  "key37": "5h5ggtW7f57w9NeJ7NH8hZoGAVGMC63KsTMMCtCenhRDceqgosA2K7LMpt2Y1TtZREd8tqEmsrKDg12Vtjb6Lq5U",
  "key38": "FP5dEuLuTUnxGoUFjHbAqxcxbPsdgmFzXaEYLWABgq3uHhzgYoQk6n46zC2vkgVQ9sSbURLYFRbxZc69dXa1M5L",
  "key39": "3HvDK1VroshxUuW8JqV9puyi4A3C9fgUZXeF7Qh1279E3hD1WaejQktt6it1FjpsuZydZeeNjpGi3oZ6BSiuRaib",
  "key40": "SQPbzAieRXb6jCxhkWcnAwNP8HsVvVPwM8cAJR1Xi8qmdnr652V9wkdKbD1aq7zGx3eLP7tCGx6JtUB6yxM48qm",
  "key41": "5bwgMMa1BqcJoN2YPyoJPXXQ7cnza7tD4W2zyCpZs9tGK8dMTi8ctoYJxf2dSyB1DGv2F8pn2Jk59WCHqyPmyeLS",
  "key42": "pVzWSm1ubFmBLArSsdFRQa5V7pKPMPJFbTzV7g9XwVmb83Wa3S9QFGpV8H29ZfuzVGAMkPnfhy9JpEkRVwBEP5g",
  "key43": "2Mgh9kgGzM1tvAhGywrb6te5QMJ7NsVsojCsUsngqpzHdirpwVmWFg6mRFg3D32bozwPyKTAycefwo8Xwy6pWKCg"
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
