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
    "95pEzxQQx3miVgQBgu9Ahs2sJ2A2Hve6ruwP8pCn43p439SAP2bui47MzFz8XMM4neAxKDXGC5g7gdmGeyaFnV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZvjsTMXi2Q4MGpXmaKpMAKoqKztRTKLq9meZgrSQHHBrFhDFZ71Nsc3cacM1TGVFcfxwCJ5nCShZP9FB36k66F",
  "key1": "2FyxSLYppNY2cWxyTDvahqd52UHgmxhwrgb4vAejqrFs3dV1kmsP4NrVPfkU5LoAEr1HjrCtu2KCtcNHVDEuWrRb",
  "key2": "4u4bRPam9V4v8etrXtNVRhMTNBrNRB7vfmYcRWYq45W8m8192An6pM5Qk3PS3xatbkY4hmomgP5zkob5XYoAZGVw",
  "key3": "4rtTMnKy5NN5FvA4T6S6bjqKQPCsMpkawjftfa9haevt8BeUphhen5GKzUnsMGjnusGpsf2TnxuY9mnSPC6bfjJe",
  "key4": "2TdxUnpkgtdMQRD2BsthoMwHkXGhJv1FG1cjc5fDY3T7MuAnjgh27MiMH68iPBhzKKHjYWRK9BcAw4RckudY3WQS",
  "key5": "3GBt8wwRS9rRLi5C2wdZkXSqNtCiRGBYF97FcmNwxCqsLT4hVg8oQBHugFR3DWnhkW7XnMjePC2BemaetRYBw7SE",
  "key6": "phfpNDgZ7QjtzqnCcMzMAZiM6FtrYiSDvRP6r1fNKuMqAfspY1N4Yb3nAtJdwpXdDuE7qWRNykrWfcAGC2X1exR",
  "key7": "24pGG5zTQwRPREVkLUNtE6tXRGgyAaJu6K2SgsEB8tyHhRnqYrruKHRkEXHrEWB8SK8chS8xE3JjAN2qDAFiki4c",
  "key8": "4VFu9Fi7w8ZQF8juZoYrQnH9RNZbGH7Vf1hWxMsYbDwoeJdDyT9XqeehJpqpbwVcmcQxnD6Tjp7SFATn1cvYJw1K",
  "key9": "yijuFZ3NeGH4w6fjcNcDeMXaBamzFmC5N3dW2PHiDSVgstte7NEnANQRFk68QiKqHhtgQohWMWQxRs1uwoFGzdc",
  "key10": "3UstUEo34zZX7qQU1dhKV4tJrjHHiVyewDgWx5h7EccqRkJ2Tu2aqiBZfJTAmFVGRUycb8MCyrGp7Lb1nsrBFXNX",
  "key11": "7Wr5XXb7t3VyZJKbGzw3fENWHtjnMKWAhV5MGUwp9A6722CfuGpMopuMHRtz6bPHvFQeEiCrU4bprZZxBEFgzAU",
  "key12": "2bcMMLuhn5qXwz8Bk6RGTNzJt1h2YJDJnbi4PpE4fn6Ei3HiZPamj3XXPbjqifPyBYrehc41f81vUA4DuoXSjpxi",
  "key13": "45XEZZvDhTjr7zF5FKcdDSipbGcXYeSpyDufaDkjTj1YmCzt8zQpWUJG5JUEDJ9vMWB4FV4HYb5BEgbxqDRKRNRw",
  "key14": "YXJYmZbNtsPZY6V3dyHxK4S29LCYYRAoryJEkmKKVWw7c6HARDKbgCSfb2QKCSTwnrvacao2uWwYTKibq2QbVdd",
  "key15": "2G4dTc4hPWPkTXEoBBpyXv9hLxn5e4QddCeJU8PzBrKQ6Uu5T94wD4X14Yz9PXg78cKQZEDxzhujszhao7H2TqaF",
  "key16": "3nowMnBigdqvvVSciBw4MQZq5aSY1WY9UA3t9VtJ8ZLVJiU949RW7ayHG7GnxYfaP3r5RzA2GNGd7W38vwdxsTJD",
  "key17": "5C6eqVh9QJu5qh3kySAPBR6kZFi6YUjkK2NZXDhxghcqSKYYwU8tvo4b816ZSQLxfyLuNxwR1DkEo8DJm2C7WNKS",
  "key18": "LpPP9G2YWFk98UucADhV8xWiLtmmPoJeRfJHJNWFoHkP4mQcoCTzcFGuXgN46PBSPEwsPMmVTH77myzhzB5iwyk",
  "key19": "3JKQ3p5jwW9BC5odGxchfe8xxKFQeYmNFUiswGnrxG9tJiXDK6kGApyJa7o6wisaAUADWYSdDTcHCjg7z1GKQ1y6",
  "key20": "37m4EAE6aE1gKbmvvjvaLigv7c9VtdGwrWAsohd7obncDvhTq6iaEaWCPKcMTLXc3rs1cGaMzmLXu59vwdv6aSLs",
  "key21": "5Bu9V3aGgZSqhM9bTqznL5E7PHxXhELc46yJSbxbMCnoHtmpRVyf6TfjVcFewXQGCPmD9ZgSxNC4tJEBfuSbxuLn",
  "key22": "5UgJM12roBbcRh9Zd29F6aVeq8i3V6jaQUBBzZsUBRjVZoWfL3ehgTFd1WqyiZkiEpHwwomNwm8WQaawKqinipPv",
  "key23": "4VAyr5qn9Jqia1j6XzWreBzg9PEMXkP8QmSPEtY93TZidPEQkbPYXvpGcwqSJeFzXMUeDbbkLxwBGcjzTL546jkX",
  "key24": "2u8SXUuViusL9sTHabUyaSVsy75xvp9Wf4CbvaYS1QNrLeok7dWtHaPqWbEmG9xeBZXX8Vkn8WsbT7yYgFWPM5w9",
  "key25": "637jZQUD9ro68sKUD8xEdZe63unjRfizwhmrB1fZb3PBi1B6JnPEQR8Fh8cZgfPjRcFqptbbHA3CxpmmPxXqTVu",
  "key26": "5x1J8BWQgPqHhkSsmHcxaZYdHLsPaoZmpr1EpA7K2ePXxrnTvwaWusUudMBGBdWBhTnzegZF3em5cdoJ1amMnJLb",
  "key27": "3FtrrtvUWdD7Tr7V2MW2r4tRynWvhm2fsFESCufjNKoSWAxfe5sM4tou1QQPko7Xxyk2cLiE2AfdCRgXxmZ8P3aG",
  "key28": "5iLcqC38dgnzB5zAuac19bRy8NgZb4caKhkNE4rg7xBVvKzHTPyCPgFaa3FDVsrkw61raZGBw3KdwhnESZsADPmc",
  "key29": "24M7T3YoVzcdDBN4QurR3ZJELCYdMR1JZPimkEGJkd9jnzoz3FfKQ3EWV6kUTkHcCmq1jaHqiGMaCeKrZ8gLiZXK",
  "key30": "64cuBHDgeTDwdBqXCVgU3stxYpWJYFUxtNgk8cShgwQWJENUPAL2nmHPDQgtdKT11T7urUaN8ihtC12NyoTvhrJF",
  "key31": "2PtB9vhYW9kdynYo4dgcx3wAs1DUcWEjmt4wJDvEgUsgHGfXKLBk4Z7ZmYokiPgWHhfkTta36HqetKZufsU5NgAA",
  "key32": "2jxe93YREarpLELGfwYxZerq9FYjkw6eSB722EjWbNgrhE32MMrrmfDbTdGseA6vVU25g55iwrpEoittqQK3wbid",
  "key33": "BmtYEptXVSnfRfpRG5pt5Egnt1rnVsPtQWic8VdnCWBvPggVqkWVt4cxQHgsigWibXn3j47nDEMm46vgiBnk2eX",
  "key34": "4enq8CskztGLpqkrUiCZwaaRNN2h3xZHf3Mrfot3XzvCxGs2nAn4yjmNVJegxYeCWfrLP33hWmrH9NY2hbZLe4X5",
  "key35": "2mg2dRKuHByGKwMU6tsHN5riT6Z7CVXKwBH1EfJu3Ctwx7rqrVvk35LeC4QDwJ656PH7QSykhPepU2VULhwSoRwC",
  "key36": "5kgf4zNkHBES8quob3vLpQS9uoFX1vhByczq9ddoYdTf5qNRE2UBQH8vbJ3rba4Yo7pRJB9x5rj5unK5aA1Stmz9",
  "key37": "2oDiuBnefhRXUyuadQHGE1WhfLpKSB1hHt2c4HAbHNSC74U5ANfimxQASjnv2tMS1UT221yWpYmpa8ovLBQ7croP",
  "key38": "5rkQTjBmb453mnAdxdChgv2QkdmLXGuRnkK5sQNPzwgsQKecFycjnprAa6a5M4dnW5gsYnH3FKbdMCgqX4ZfGD4k",
  "key39": "2vE3Pze6bZ1Mc41fo3aPuBTYmZjCKpfkayAUoAheKPxsYpNhUBD2k93C9QphGM1FjqnSAWL2DYT5HxVbV2cAS6xz",
  "key40": "1qigEsHxy8nozrcT7oYZP9ukT2LwYd9XoJuUDhqTe8Z2W5KUEyHTHmuTYsJfswHFsvDAYYVRfZRRVP2RZdpofJY",
  "key41": "2JrpvHvjRojKB4JLAnPN9KkHSYSrubwLDf2PaheMmdbpm4njgvi4r6WowA541CJG4ghgaGfa5KNwag3d3mhwL7me",
  "key42": "VYNjm6YG7ZxFeeMXW9ZuYR82LRae7hyHdhp5Xut3G9fAJJJo1FbdQ7CGWuiAqhjJsJfqjPyHezrz3vpoDZtTkR4",
  "key43": "4mQUL5ZKEjV2rTQmrbg5PUwicA6QJmWT61wyVq33cexfWYXQXvtCUeNUNh7Dj8imoGFzZ6i51t4J9TR1w7rH653M",
  "key44": "5jo2a3R5iZQEQyNgiAR2ANfPq2vzSJLDjamaaYMkZdNHL3hKkeEcmC3uYeQYBFC5M9eAxgDtUFvyJn9E4d5dsE2H",
  "key45": "3TvTi7RmuFneBeXx6muaa1ifhNgm43wghvK8PSdWopxZf1GgUpB1dKXrrqqKDi7Jfm9RN8VxnG3HR6XfaA64eKzg",
  "key46": "2SqfcJQTPc6iF19ghhMB7RkAhBFtKZjLSmSDnV9QAcoCMh3NrUBvQpAo1whwGvSCmsugJcMqtzuZJJDGiiHMVYvY",
  "key47": "3gYtyK4nyq38dmYHoHKivwBHSBmCF9dMYLepFKeLUiJnt1eahJBxNsquaazB7tN5ET2xArTVN14vWKoTCmdmJhZf"
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
