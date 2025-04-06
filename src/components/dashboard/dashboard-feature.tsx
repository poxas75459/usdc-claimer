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
    "5MXdC7RwYnQxSAAoZyN5pjg8R3kYXpQ6ieFJfCfQroo6U3npiC3WwEBVWSTsqxDQKzmhB9QYvtNpwgn1DpoCkke2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G3LA9xXvnLsFTGi2NzRguZTdYsLVJBvoUUotLDkKXKk5z6cBrLGqogj2ZTUg67ED4wyXreVMUvvaf6rmZSn4E6q",
  "key1": "4AWq1zB7fW3vyDqynzdMjWzLW8j4RQSKSbZmYdWRwAydMVZPfmFJZQJ6sxeeLrHaTpg3KRf5MkvRXKEAtGJ1quFE",
  "key2": "QJeexA2LiurPKf473yXbNTneYnraLqoBWrmwQMY8N2Uky61wrMHW91unVqAC1yT5EHC39AjtLVMKskh6rfnqmhH",
  "key3": "2xnadDNRL7xdEezCkrcz64kcATk2iiRog8eWA1L14TDdMaqwnaHKsxi25n8yQGsPbKM73mCNw9PEo4t4BaRP47yq",
  "key4": "3fVsv7TvdHBXdFRLGjRRYq1fFr5xmDevNeuJH8kr5sog8AQpAVjpmwva8gGoejrC8EatkhUX6xjbfpSb1VsEdzyZ",
  "key5": "65ETuXHeSQP595Evo4F1ZpvrMzihbns22sqrD9WhRnzNdFHBxrRFKGYNVeTRg5nMioLfADnejGVsv5CuABreU1D5",
  "key6": "HMFzDox6esFZieYftWQSomVKk5zjWFN25k8UVjei51owAt6kr7VnsGgs6Cv1mR5jXxhEeErZRvELh6AaUWaJ2YR",
  "key7": "2cyHncvDtAVYhcEFkfkvkSDz78Cje7qdiAhoXx8muSXFEtMd2vx9c65tPcJ6r8WKnE2chS3GYSQThtyLJiDssfhN",
  "key8": "5SGwvAUizrzDdAtixTxYrvvMxUqrrag7j4MDMuugQEqTSrjVh9RrDUAK3ZgWHu95v1x54RDTYX9ukRRvTF3g8vev",
  "key9": "5Dq5fMXC4yhVoJ2QYuGiBt1qk65vB5fAt5SNfVtYJkXDHASdFevgeh9AsDNQ7hjAVyfrQb9yWrWdtqN3V4CEE3ry",
  "key10": "4mocwh6V4N21ZSoMVrSB2CrzNdsfgrQyuw4NdBFJBB4pgZXcjN2FraWVY1ZtXRS99EwM9L4bXKLM5MmoV2mQVV2s",
  "key11": "44dbXFyFiS3ZSWag6Wh4FXXiHtGkrrSCUZrUdDUFkeZhjyHfrGiBn25iz1TN8b8imtbucaox37zu71nUXibkvRuK",
  "key12": "5BesgEUyLv2AZvVFx8LRptiDHDQXpz3KnZVteNaV7m4hcXwkJPBRcE49A73ZfUGmDKtueNXCTajfuSacEKSgLoB3",
  "key13": "Q7gKhvSmU1wgUiaLXvU2cgVcc8HRgWjohbx9FgupmU84byRA8XAqZ9fAtTzeumcXVikB8nwwCQF3Q3wtqhS29x5",
  "key14": "5qwkuCpoBKBaJCyy66DU2t9whrCXPz3V13VtaVZvf36ubZ3CqdWoYRodG26PsPzm2X4oasDNfYYFNzLJDJ2FsTJA",
  "key15": "2YDmSgYUktBiyb6yyW53ttgESSf4dYMYFeKLksuMPqf4wqJUkC5zfpVf6EsXqH9ZNU5VYU14VJhDjVqJM7DhXn8a",
  "key16": "EZtMeU3gnuxnkfQKCwQgxBx1Uro8CWVCRjgseDpqTXNihcqfajTD7ALSqGiNgtXG7SZsaj5m83aaqXS6A5zuTAH",
  "key17": "2AYYVhFBcdXTfNxJ3RBEVsa1nj9de3QWvSH6ph4yeRuvujysTPxEBtGNhZ2Zp2t9c1bSdLtqJa285fFBsGUo1JcM",
  "key18": "2ndKbGNZDjwogJri3CFdfxNqDNXwBTEZauKLjG6TniUfXKBbCiyXuQBHbFBDuZCWsTkcbmqrAL7RDVDw5g8YBJiS",
  "key19": "3aXGjnS6H3ATyShY8nkeovoz2dcsLfEyFCiZVVFv7ZPRAPJ1jVxXKjkEc98A9ttRzcVfYoDkVJjyQgqyJVKh84fD",
  "key20": "5NZ8CcP9edjLdEoxtY6EZbnLGZeWqYj6seev1CLAKTTsyWhrW9cMjThCai4FWSy1WTWckDrQFcfai1vgabwTpxcr",
  "key21": "3AG1cFHUXLQKbZaji5YSje4FRvwZiZA3piKyLxa94cZD9X8Y9UvnVafEH1PB2QMWvb5vfnWyWjxpQwJMQf8Crmag",
  "key22": "2NfEhVXHtJwox5RP6oe52VoJJukVc6bbmsPJD9vsosFZe7agyauCBHD4uNHZcAHufMGGgNH1SVNmSn2NuXGrU6ao",
  "key23": "59vkRTrNrUXzPAmyeaKtkRwEGXZCryfSmQphvXFHWK79RJjoi4Ma3jC1hjM7f3aj4zYAeJyyqBULgYozzWEU1pyN",
  "key24": "3yZ6VkrrC6RLh5NMdFLZiXE6FdA6GGPzxAvSBJ6hb3PpTeZ25RshttQnXeVJ7GqQ7d9dBChqvs6AoFANe4DkPZdx",
  "key25": "5EEY3dgHeUcHKYUcoyaBkzDnPprFwwNfogK2LHT3EoRyTUgfFHaYsQfupm3PhYELcKSkz6Bg2DFzxLiEmsDtR5os",
  "key26": "5NExTieQmHjmybQs2c6LjPHDzaYj6sHVhaCpPFFfa3XRJAueVMehGana9G5VnDMEXwLzhhmcTtEG6mNhKdfDq5ZJ",
  "key27": "32GPWX7rpjcYszEYD9e6RnA1TchorkPusgu8DWs1ME9Vf8PfMxcFF8Py91dkeKM4o84LrKg7wTFNFa4Ghogdm8hy",
  "key28": "4EEQVPrdZXVBgnoRn7qht4X3VQTUJbWXzYH8QE4jEAvRGwsgqYjhhp9b6p4f1g66qY5oQnccLx1uPHHAtFkUFr3Z",
  "key29": "283KHA5CAGZJs86e4EpwgeJJ42auMgS5wyKWwqeNiotqUWGLKGhhdMcRVv3xHmYu7UadtAQSSUCuaa6aotkmDig1",
  "key30": "3mxa18fGEGdNYQkRb4YLnoqsbuYZrMHVdVFUxjVAD4mCx4tAyNfogLu2mj8PJ4XPGncu2H78zFF1W1w5R9indN2Q",
  "key31": "4zjEzE1MieCB84uLkjVds5wGaNX3W8sKWK6WEX7AiFyNk45akEw9omuhdP3EgKh5Mpopwr3WPYrYYc8fUAnpEg2x",
  "key32": "54C54UJZU2YaKtHt4cGoyce4v7D6upjuZ6PKVR4igKeUj5uF4ps6q8gUJWhY9nufNHvDX7hF3LJ7B3qAS9uS6J3r",
  "key33": "KQKimGCQnWYHKaUWPY9L12QPEB6eHDBrKWdNUq5Hm49jVqsMypnTNLc619CCeSWQw2rnFXL29Lf4REf8iZhzAAV",
  "key34": "21U7avuaghnGSciwDXFp5ThjqRNDNv5JMHkRTVYDeMf9nqSXdFSx8QobK7jCk2K9asuhMssAUsjmcR9ykTxEoMbV",
  "key35": "5vAdkqvkFNdVDfAK9gHdMukrKGfBZnZW9zHnw8txshqp1p4QTfEYMjCyDk4kHFqjwq5S6tYuyKWjVSFNJwiK476T",
  "key36": "4qvzPR3KvgxiKhphUjK5fUG3DgRiKRcF5awkUgKcXN2y7ntoqZgBGdh9WDfThJnqd6spgSkVTwEPapKzBx6jHG9S",
  "key37": "5PzZvzqUVLcdmH79gXvSvG9q8NxiaBbJBcMgKTRFjxQpeSAYm81uTWVRMV5QeZ3HJ3rUXwUc91jgBoKQPH5geczc",
  "key38": "3tGXS354MMsXoQJYbTRrw78CvAEvY9ZmtPZPZz2tPXfysjXDwPxsNiP9JuDT8UsGQQjPojgRhwBqjj5ZzYuDK5Jp",
  "key39": "3X3oxF5V6FNpF8uQwAPNcAFXw5VC5pU7M8PHCN1cAHkmKQiNxGk6yxDRjYNMWcxSiSAB4586LjzW4BcPVvSCG8Le"
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
