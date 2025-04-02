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
    "561Lq9M7gDy8xcC82Evsf1EEqD71staSQvEMbHbG2zgrjcjyCo1yydZyzwVeh8CCmcmYpeCLLUQKbgatfNJKuqyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X1x9AQ9T8fnVDagWcnhjg7vVZSuBVMRjUve1xEaQjbxDq3QWuDToLDKKKfmvhCbH76AgFu2mmWCYsLQaD2faU3g",
  "key1": "5ssYsVcNVAhboPYTfZhEhuyvDjZq1D2RC3ady9AJZWttsFBt7gP5G56vL1ZVf2gfvDgkQEwMSywkbBesHvFRexT8",
  "key2": "4LM6MpfttsGovjTM3osqbQJ1yfbkhfNPsMuHK4QEarqi6YetMG32sB8s2ZKSLmr2SNozbE1VMxWdC2SRoKTkDAaw",
  "key3": "3mdx22wHEZzMQbsHNjsaYUPXbBjQdTDHUdpzN5dfGy6Tjeie5ChkXPk6LFbrBJvVe7s9bXagxRi4NCePZT9UtU46",
  "key4": "5or1rPPxXKhJwjJ7TaXByBXxdHtJTTHaTdJ6ePgXq7oYSQHyYkENY3VVC1BapsJxXrE6L5m6gxUioVKKM7T7fw2o",
  "key5": "3gGmQRSLvraZZS9EChatbuqcXQbLT1s5xuJ9CD8wbSBcgsLihz1U1KEb6wbP6deFhbEzyAvz2en1zaeAGQxSbsbQ",
  "key6": "dj7aa9J93o45mdUF6JZDVZjCb8fQvgrJ56MxisQy4wjc17e9MrPyBAyv7T16kNTkwAoYWNgXbMnjufRRjdxFjSr",
  "key7": "41Wz8J9XXmVkaM74mL5GhmHhYEyohKk1RwzyJpcYqm8MyZ1ZDuEzQh6SkAWEjdhDvDneUYPkLPK7cVi53Y1AV6Pe",
  "key8": "4M6znyXPAvanyweqDUjMfL7Gjuh1eK9hco8TQ8DfMUF8GNh8tJ5zxrpQd6TvfXpWNpVwmbtaJMwyaRRiJYgZHDkn",
  "key9": "4iJ4H3KdcuB6n9DkkLREPQZbnhPrscDQeqLUHjkxu39eeDvhJuewJE6KA7JakP4tt5C66pGzQVcZtgEMdXpVf8pM",
  "key10": "4ixNqbGUH3TbPFcM3che9KfqA6Eha3Fi3q4oeYvYbacU7M5gmCMXwaRvCo4XYmLTPNDkMM2WvUc713pwr3hX6wgr",
  "key11": "gqBE66qCYojJwvfaZtvksKkQBLsR4yaxE55JS3Wp3XzzLiQdEnvxQFNNmxcvnpfdPrmAVboAc7yt1td2rjPbDYg",
  "key12": "23h21oBgQ6HhUMbwYaAe4v9DogegxYrHEApMt6gfNpWEDLVEciVjBGesaGfqCVndzXKChy38bo6gcp72MwDXpYPP",
  "key13": "4oxaa5USdKMxHp7ucz7agTAgGn4Ne6eY7ha8qSkAMmPkbAYoyxfRuJ9ufRYutyRR91ByS92GTtrvju5VvBuHNSr1",
  "key14": "3wW5NA7uW2a9qLTGdNaMtNykUcbXoj7wnWBBKPambzBfEePRccMpZrwsAhDrWLznFci74rz25Tuo6psgbbNNCp76",
  "key15": "22xPKu5povtUFqXY66bdbz7d6MoTeEcdgPiPLRcgHCyYRXGzfeiCNtqnqNKWZu72RqWanmBHzhAFFtbrL2yW8Jms",
  "key16": "5vN8p4HcERicief7n9hJeVYfk32b1xCkV3bMYJVYtEcTSHw6vP1o1YrxxKNHGjJJ7KdWXNYMGCb5AgfK2qhybyTL",
  "key17": "28LVT2jExicQQFAg2wngvA3rBU5fz3Ufm7PqtWvLk83wcPzJjMQTH3epgHCJhuLmvjcaau2T8b5RUU6pidSf4HTg",
  "key18": "2T6u1FtWzXGvMQm3MtjybJY2EExKXmA23rMN21X9uR4ZQBTSFWNwwHm2ESMVqx8pMiKeHhkJKodguN7jfgXXuEpN",
  "key19": "2yNKDvvrWsEav5moDubFeDHDBncydiURqz69rs2n6QWrp4Q66qkbNT1nfjd9e9UpSFma6QypojZanBe9FQLkjZnE",
  "key20": "ynGztf19iZqEx2dQurBubxNor2K89VN1Bcz4AYrekWuA767ZSRw3C5hRep5GqmuMt4JXW8JiCjXpjeV8k7M5H7T",
  "key21": "5LRJEXEaZCvekqG4fDMcFGoiZAoRgYJJ8UPKoiTNDoZLQhZ96XNQNCddGoeEy4dg6UdU2J772gD77GR1zk1FdBj4",
  "key22": "2YsRqXE8yRQNKsXh8RXo7NWbiEd2JSjHTE5QwPHCuPACVrwmrShMyQ84THhoykoQpprnjihCp29oy2qYF7uq7Nxv",
  "key23": "21cL9sQg13wRJPpJoW8KdbwU2zu9ggVXkjVwyZUKu9kSAAsti3V4RB4eogeH2DypieC5b7TmAnZxuvjPT4bjQCZR",
  "key24": "2AQLoEeM8o62hUnDT1bVUbzFTP5vjTmUt8N8n4QKUBz3cXzNGEgSFMEJa5moYEaQ71ts9KzMNvaJwYCVdrCigATf",
  "key25": "47iCeY6xGXhDwBL1VBaXEm25j88eMJbircczTiENuvmM6aTrz8amoaggmzBEje5ZyU2CZvjkqvanRhLu4DJbsLHx",
  "key26": "3gCM3FjLoLxukXkKp4u6jMEDWrxE2uAhS7UmL3YwN7Uf6vP9jyiwLViJkr3qVmcABQXTHYaJtCGhG523yrfi1pxY",
  "key27": "2HFPrhU68S6SDb9zj23yKb7yvVtjrLJNq3Ptxqk156mkd14octTvDQWJhfMccGv8nhmeMtX1QGM1CuYbTi3wHqFA",
  "key28": "4mPpgGPrULG7JfugNbs2Bo4RXTY1HEJR3wqD8skjMFWkna77Gc3bjZUUvLXHYX2spDaCGxLAT95a7ugmGttnw8Vf",
  "key29": "8J34r76SxwrGS9G8mVypbPDcJMEyJm5DBJymumdgThKStwFxpyf1A9rCx3hiTXZu1sMtwfpskv5VUFAnchuETiK",
  "key30": "4pe49z42ZmnT1JjBspYEQcUnbNrQT6FEHeqFJYQmCSfPtdiucVYLxvG57A5w4nUPqUjxt16YayNsPAPToCTzXboN",
  "key31": "4LM9UatyWpqswHHydiKwXD25vPvwJtejzoenku2vop1gGuVwU7W1Bxu8x6YHhPHNfpMyfcKStRuR5QUcu5P2Karb",
  "key32": "4aDM55mceyLfNosL6ERBfZkDK2VEXDNFvpenuzAXBZDDoYxPmyyH16oDkdZxysm7FoyUmCSU2PijDyuWF7bimCER"
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
