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
    "4ZkBtZ5e6sgAXaE1baHs2jGRjw68JuycEkw4N736bkhN7n6S1u9DS3qoJ4VVCyF4f6FaobBsoF7aagyXxa9NMBZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QnR5qnVBXTo5u2sWE9v1mUTwKdAt4tHjJdGgoLxZHfXeY15FeH9ujsdCGKDZpoN8YXqJ8exrAxPJooiBNUeGkaL",
  "key1": "56fqnETdgb4KptXQqnMLzb51KhtporQcrQkAaFjH7kTY3VSAVPLDqBACewDX8kjLUjeguLiWbaUtZTBeqAJRyc14",
  "key2": "1293ywLRzQaUM3soLgEHep8PSomq4toTFBFsnKE9vM4fJxmoEUC4htRuubKWWHYDL7ityDNQWZRDZfFR7vM4WBtJ",
  "key3": "2PKajWX4H1ryog6VAi9Ld55c5u1grXvWw6g57k55NZueBad7VzhSEgzb6wgHJcBcuKomZd9oAg8QsBj2ewgj353R",
  "key4": "3aN7j6F2GHfnyNa8zDpk7tSnUt94dzKS4x3abBmk1GTtK3Rosi2URvEg14VGhTPKP1cAykdmwck1bHDYCXr68jzt",
  "key5": "3mij7zuSeriVEa7Zy9z5kneLsDE2nCJPTpvrmCkPYx976mkn5z4g9TgwWiazi21E8X9D2TdUQrpJALfMMMLBqQqf",
  "key6": "623w6Xq4cDEepZZPqfezLoxXfAzA9UeyoNGvAeGQBXcmiGp2Yyoi4WfCTRqcMvcVdfkQYuosYpb9fCh3xxQsTbF4",
  "key7": "1cVgrasT6XxkXEttLTQwv63J5KFXmLQkMwCU2gWW395J1u8rJMJxPuMc5DjAyvyt2CdcANTeYebmt22VkUpXyjT",
  "key8": "4djN6jWTuYrNzYT3e6iVtdwuwmPiLy9ugTZ44b8V7FEWLVnRcMYScSeptB2uuvnDZFB1xWcQc56tWHpHt8U2N9is",
  "key9": "bbqrYierWfDpKcGBRX2SH2v3NkMK6qMWELfCgCa5VcbtYYUuAeBNP1o7Dfrxhwh72DmWqrg8vG61jv57gs7A3tk",
  "key10": "3QZZoQjEYS3L6ikmEzuYeCXBdyvTvBpAsuiKm4iEsuLgaCvDemyVM3qtHPi4Y59APwJ9P8fXucYzVVhucnD6TMcD",
  "key11": "d5jMfByrcjQPJMjcYLKZ3BAWyikpwHUx5ackZAuvnpWTT9hxmwSBTuzWxK1sNGgXxxU3GUixdjPtqwKJJQVmzNE",
  "key12": "2C9DWwMK8TD6egfCcV4CCSh7XHX6iMkc8TWvMAUUACyt6jvYHGQ7UHqzL7NjzQ5VmEUhxbCiBo2HcjMDrphQY47h",
  "key13": "5Grtp7bKbr2PjubWmrr5gBUSVY5gMBezTKnBxye514Ep9AahG5Dp2vvwYFQddLQKudqwSs5bQWxpVidiYmW4Kmxw",
  "key14": "PvHrhUwpMVdiz8wTzo1STVfqXFmvoy5sr3YXp2mUwuNmetFcSomqJbpXmeRWYYpvDF8BJsdSjWY1CGdkdG2iQqL",
  "key15": "4EwqBDTzXF4bFepM7TQD9w2hoThkyCGu1QDRdNpbzdwydeNnQe88FNwRfuN3weMmW4JEZ7wA97rXCnkMesw3q8oN",
  "key16": "Ar4iZ8e5JLMhmJQvzDZ3Zomecnudx4krDnNP8M9etCuX2Tf5JRAytuxgBk2WsPqdHpxTyh8VxYmBUMcMS78Zag6",
  "key17": "5N9A2wUYkpwj21TVrWhg9ZetmY9icSam11m4KM7rJLKe944ZznXVo6Bj8TQo5D8k5nUCCiBoXauAFGM6MrGgqxRG",
  "key18": "2oft2hmrAdvV1GYk264qWCuNPYH1RwLwr9NZmvo6bftLQqpXd7Pg6M6eg6vAqA36AEdW4kcivUQEVLoFBe9T7j7x",
  "key19": "3oq6Z8JfMcx57uswAWcyvPRjjJKmS7JpDHWMoKcGWtJucpZbmsj193RK5RestXTZpdoruCVbqqsWFbhfnD5LCNpN",
  "key20": "2kRLXCZ4JSgVQkzpfARa56Ry5cc8iBRf9VdV8fYBtFg5t9NgXRLcriB9nm2vW46ehCxK6Ve6de9C4Tu8rYmnM2U",
  "key21": "pyreR9Jajfv7MsQ62DSptecmBvdAGJ66eGAyyZSt5hqLcnvGJvVNZRxzLL7FPqjBqTmN5HwQko2KCQocjrKUKsa",
  "key22": "4LpZxNDy9XKg79fqwRQYPDx8jRLLzCbpbEC3QYynY8RSMsow3zUDjPxkiGirWoukFAMSneaU2QFtJrAgdmWy3Sb9",
  "key23": "4bxMNhMwPsvPe46KpioDC9o5hhUgSmUk51LhHBSftA8jpYozr9abpovrLvQS5ShRsDfs54vy9FgJEpVEFAf3Rw9",
  "key24": "5y82t4hYNKAeB2D3jSrZE3c3tiyo4oD7MHRzohLRMZGU94rdXckqxoRH2tT85bDh4cuQ19ww3uzahGJ2UajiDvQN",
  "key25": "UX9DM3Rh2KdGbxbn5Jn9nV7Vq7oTFpEorFMMokjgPNrKbjpzcmQWpU91H7pNBUvyqXqMYizKVJ8cmiXpeB4kgRm",
  "key26": "26ZbvTPcyERriycLNn8CCwscCbBXNu1nMoj7TznFLt3diPuybdM8vGLgyWDmgbTJCNWn8rPy1H5kK4TjFqEB3a7Y",
  "key27": "588hXZ2BRgwijv3BTQ4C4uMXJizdBrcZ2QSuEqX86agNhaQJZDSe1UZETjZjbDmR7iUBFXwacxuYdqzPxRYtKxbx",
  "key28": "213rQPXVux51f5jAsMLFGgQpcd4pbF4gEgFR2qcRg5VszxcyKec3y9R6LwaXZwKFh28ACYRRvTzxqf4kVdJa5HnY",
  "key29": "4hgGx8qTPwppjFKTnWgEZCoZd9U96sxtcgsse7xtfmyTcpPjpWxyhYxsoJ2Eb8E8Wn83m2uy4qTssUNbYdpASdfJ",
  "key30": "32LkFrLuH2djntG7Tsesp8YvGxehKmo8eqSYwEZy4fS3iWGVtLfyf3UAt3TcTDseB59aWxksQ6wKU5Wt6vWevgzK",
  "key31": "tygPuWUFb7QgeqthRk9gwF8KMLwkEG7NXtgk9HLUU9bjJqG9ZRT38ztaU3WJCH2Z86XNns4P2EuNRtZAF76JBVP",
  "key32": "2Afym5VQgsxSAxgN1k1bLv9r8ZpS5uPFtBhQmY9giqHk1dQ8AUx7v4sJCVZaFYnMM74QPaRAGmegSrov4XFRu8iR",
  "key33": "cgYDE2Se7RoVkTA3DZ7BAGGGb1niViBQXsy5NgRm4Yv9gfzXpQswAAzTHvdEhhbSRg8i8pssdaUX8cJvWjRAqka",
  "key34": "UzjZ7ipbg3KXNHBMhKMy3MU7NYbJXcFxbWAeYt8A1jzDGsuZEBp5mtovzt3mQTsBMDKJdCySPJGUoL2xqk15xD1",
  "key35": "2ppMgChV8FzMnpJm3aQsBeSGf4PaeZCtHg6fjkQPG7ajaSzj4Ptv7Rx3pegqA1LcwLstk83sbMkUd8dBFt3mmG4S",
  "key36": "2WW5iqtEAECMaUdWy3FdDPMH1tu8QQqPKuq4yth2quuynFu32XCHMDLqWZD7ztNhYFK9KTkYqaiVCUhnLN2yAHNZ",
  "key37": "4dHsogNjZQsvgpw1i5KwWUj9uhkhxa2SaSH9GwwAMQEzoPGakromLhKZbVQJHD2aSB8Hg22o2ti2gwbMYcFTh23J",
  "key38": "216kjAFLxGyFtmsUfFQDvoDR8fJEtjbtv8VtiMXTL64LGfcuuYZYzbd8SBgTMqDybykFZ8yUPsQ1dhctb2YbcaAJ",
  "key39": "5rdTfXU6K2udnvx92wTnjrUCc2KhHzaP4umQFjMtXHUGNLyeaYciLVrQMe9KT5rdUAFoVWCLjhsw38RSSRHVsfp9"
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
