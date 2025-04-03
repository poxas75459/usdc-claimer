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
    "TTP1rarVbK7AFNVoDanPFMeaev3mxKshd6bMftavZrm3TMGrtjSLwVGgSLh4YYmRJzCLEbwJwxaU2C46AqxkdtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TMRmyZUVM1WVvfCavNWQZ5fX1QRMQkrP8FhdfkqzsXxDAAEHURQM6Kte4PGjSMesaX65KaNpQvDYgjvKkLZSmEq",
  "key1": "wSJfdtiixVHvJH6dZXNmCkZt6KmejVP8mWAza9H74qEsXgXzt5LZnhD7ELtKD6EYdTHdRgpF6zLe654H9VK5EwB",
  "key2": "SknaxAPFqBrqwgT2b7jw8KHGena8bgAF7TC9fFaBCTWxnyvmFreWoV8MtoTUVX7Ck2qe1PnVAMFCygDxvvwLKz2",
  "key3": "3gGxSyYPWmtXHYR9nBnNX8ytMxmPTx6UHbeCp6qWw9yxHyKYtWa8a5dnrdCJ1LopXmrbE7hpNfeWRYmft1JxP3VK",
  "key4": "2CYxv15p1wAduqJ5mfNBzaPuFsdrjmyjfJPY5M6rFXbSLA2hYcBCGPp7rvfWVtenRLGr9ygJ7rwawA3eJSkzeoyE",
  "key5": "8pPPtCWrEWHE72nnhP8LqPLf6JzLk7jTwNqz3oqP3W5n1DofCEZS7DPcmQvr92VGt1UJYaeZa8TRiebfzDuQQjj",
  "key6": "4uPnLXKk8Pr3JVCk43AGVZAws8uby1JGLiouVGwoBmKTpwoWQmwUis1Bz4gC1jET7YsHw6rLH8rYChxNaLexort2",
  "key7": "tcT8L3NFkh5E6i4EkDzcoSxp4QgoRLTD32uPLj3ZkRp4bk7Lmz4EdaKNgJY6NKkWyK2jp6psCciR6ReqcqXpSom",
  "key8": "4SmgMJ4YCqg2UdS8RbYQyvP8EWNtJNgoJ57ZmpmhPz7bHA13Lshbtro6Azr17vMurmbYtBj9XiMPLSoyLdvQwAZH",
  "key9": "44GyXMd866TtjL6sHbVzPcsVBBDwYxaHkZupddqwHD48eB6NDAPiVKJmmy8g3TusGyHgTcDMr1g4Sxgavwxmz2PP",
  "key10": "3tMkK6BdyTnXFbNeDvJGLf8KQWJsbPGCHKBrqziezwjJssZs21FNuVSGEBKA28Q35qnTRv6SRRCCnnLhJ7AVEine",
  "key11": "37pnfWTJcH3AB3gS1v1mM6Mc3KkFPrtTtiLPCoyR7YUMJThnmWw7AnZUFkoge5E5M6s8LhZML73d8KNmkhcjQHEB",
  "key12": "2HxwCAb2NvfbeXC6spmtvhXWs9SU8CZUBwmjHs2kYwCGTAJpvc4M1kAZ6eXesv8sdbz35cLiC2zvHfSQGVyYjeiJ",
  "key13": "5cVxjYZoyj4UEeruELGFD811x1dPgrrLNZZos4NYPP1zxNcQdGfNc6isZwzYNV9TE7Lou4dqogyaGgX2FuFychJv",
  "key14": "2AxjjzoYSYZvVs3ZaStKapukGNypJtiUNsUXcbgcpNLAyJ1SXdrF8Dz9ULPCaKRCs4UAiiFtYeWcxGu58ch6ZGwY",
  "key15": "5LfMimckmGEYErMkD4tyQve6eczTkePusCVo9NrVjYgEgHjTY3oEnq6wAxkF7N2nexVerAwREvGPvwgEEru68tWW",
  "key16": "5HQuarQHYurP1uESQCgaDUCToQyngsT1tgcGVbVU4YFp1iCXHEHWzxYwMDMeeLoGKJcUjcxSXyRhgqDCpJz2YZZg",
  "key17": "51VFtGbnNJ73pEJvvuqrQWVp2jxzS9wGT5sNPc6ETuSNEoMKfkGPRcLExTRNbciFF7vkHu7iiqtPL5KVyHU3zPz8",
  "key18": "5p4KiEb6hCsyb44oi6Z1kV2pV2c8wEAwjs5GvzEKsPYsn1pjSGFynWWmJTg42htmEzf5W1fezmnd9K1uRUkyGuzo",
  "key19": "5TMXZeQDaXUTxwsz2UFKmfs4oLF6QqkCeDmyrWT4gKVS86N7ygQCG1hz7XLgKPgJ64wUzF77Ei4VsWTfsErLYa8h",
  "key20": "4Z2bxK5NLucbwJzuRDKmVBiNqYRsC19Wt4xCrjUk1iidvzwY87hqiDDEJewqAaTke22tDKTKcW8zQ1v3uM6GK2iR",
  "key21": "2sKxp5VVB4mueLXRvJyrY7K75EugjQ7tFjcZsNNMNJdGSYVv6d9rz5eCona93rm1ZDWQDguyaiysuj4dQa7VQwFJ",
  "key22": "2qaov3zbRo8WdmDgWwdD9MDwUakvqntm1kobJ5tgr1bnJ9uX245vg2wDtyuzi1TVSwMH9FAEnorPRmJNuLpRuSsY",
  "key23": "ND5w3RKs8KkGLjb8pTZiXdK3AadU3FSH62TZ6dXBSDRqJxpMeXyQAJZwZWFDQWhZTLnf6gVDjm5wD8V5WyxP7Zv",
  "key24": "5H13qDpz4Sk17jTTYig2VWhawgAuZRhM7GdSiH42Pr6ug4CKkwgzoAWstXFLecrD2uLsqBzVtUmofYPhkeCtSDNh",
  "key25": "2xp9qdDusQTr1ktMg3aghn2y9pRboeLLiWaxMGCzfYU1uzHdn25V3D2VDwitwnZMEuSV1RxVazWTgjjvigrjB11w",
  "key26": "2cCiXdTZUbH3qQz3EfbtH6dxsrrYWtFynNHEtpKePqV6z4LrgYhLgmPvoRcE7M7ZZVprvP34EUmmowt9VmZE8BiS",
  "key27": "2FN8RUXR9WLCJdg9xf9Z7fkS5g3o3otD3dyk36ynWiG8Ko3e66EMDgxYhXW4WN6tsT5JKP6WhiyR1ihAFAVUMiTD",
  "key28": "2kSx8B8zMbgMjxNQxE4wVyBwNhyTJ13PzgvwwA6FAL6yy83Wta8Zn8cA4rRMaDa4H8v3y1G4AYHCS3rVwg2KxhkW",
  "key29": "38Erzj8Gfz569iDexszvTNp8EcdaBCeLG3CW9GFPLra9iiEyzymdMpNPcZzJDfr6so1xWpFJ2ktixRhW2H4j4Ga5",
  "key30": "4C3D8hqWXRE9NKzQoSBkt8s9Ussb1zR3PQq6VMB4cXtz3TSetBotAth2r1uu8kxFm1hAxcPm1g7DqhEURD7oZHLo",
  "key31": "5NABGeKaqKS42twBUaag7KofAVzjqLDkGosVKnX9EWzFJYFm2mpmZsRGGCUqUnag8fu7VrdjcjRp3DGE1pBuNbfp",
  "key32": "quh1gs4m1G2uCnXZYihHLSDUxZRuxFXBWL2uEe4vk2BH8xbmTq5E9a1LhDdbuxd2Eyr31F9M4FSHRyj6U9gmWa5"
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
