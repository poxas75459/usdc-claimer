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
    "5NWLJg1d5XwAgFq8ZJYXBhL2u2xrEqgCv1Zi6pU5Q4j6xs3GfnuV6PdPFY3gry5GfQx8FGig9mU9BEgRCEARk5ok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H72xrUicLAUx6EjKjNVJXU6uYgVovi6K8pHevWMj6jcUe67EcziMfF7EULw3FCpyxgC6gYTM7KqiqxqDo3cG1Q4",
  "key1": "54vYRdSRzvCZeiq5BAACu11e9uEPBRzjTxgKEgAvqAxsFta1ijTPjHjzQqso7oi9pCdpXfAzVxdcjhqf3ZtHVsob",
  "key2": "285rAwDXsUPhEz16L6cCSsLVn16tAjP57NMozG2qLCpopPCitLHFtJbtXi4Qw2Ad8ShzPkwkZi2ewRGXxTcQWERM",
  "key3": "3rdSAyKfNiTMFx3pdkbcCoQxGHQ6BTBzphR1Xp4UGbgHiGFqsgcM3A8yfVXdPmuP51JVhpL5YQTxwuAkDb7f97qn",
  "key4": "5Kh4zViqeB3c239TeVm6ZVj9jpXNPe7DZzoGPfMziJ1HaoKp924PE5VCNwPsN38LmdH8ijAfhsQFr6zHdrqXTXSb",
  "key5": "rY7soLk4mYKe8iwDmqf7U2H7MupuDRuSEgRxfLMZrmRpj2xZ8PooGgSqF7xZ5uCWYVcvACxfnNi49VmcXhTZGhd",
  "key6": "2xqRDuSoiTjaaagqBH7t41WmGfcXkXrXt5xCo12P2KTXuR5dLTxgcTpdQPU4MGhoNYNUzJhZBEoQKaewjr1yGo9h",
  "key7": "4gzsvmZhShrtXJAKLNG3iWyZPAmPWXzcsKbYvq7HfHVvZnJBR59HV69F4Y1iM5FfqaRTD9LtNuXoGWAVBM9he8QG",
  "key8": "29G6k7CfsRCRNi4Wrgb3nch11U51Sg8k9n6gbfCZRfP795v2JX28FN47JdBg1KNjiMDtGufYLy1wVsMaWHaAG9Nr",
  "key9": "5HeKRfgtG7uqsi7VQTgUc2B2G9qnnK5Z18pgDZ9xu5KDchYe6dmT33i1Hh11KiRAuy2x1b49UBSdbKupBEPNKZNi",
  "key10": "53d1ueXsxzvGCcbVJzQZ7cjVEsum7gJbjp2cdh4GYX8gBy85P46zzewZsHBx9Bi2f32tJk3GHwFyeKJxB4jdV443",
  "key11": "39riP68hMY29EtTiJcFaPXru6WckCF4fvcZ7d1egcEjTBMXvSrvFpjyvCac4XLqA4fqn8Q7n45bVoH6sTTHePQjG",
  "key12": "zHhXQQRLiSCWjFwN74xqhZpKvr3fPwNL3HK5K3jTV8gWjBzCYEgGbi64Jc97DznRzhw9kzQEPdYFyf4zX6e21zb",
  "key13": "3neGpLemgxynhcvAYJrq6UuMdswNxnVXMtCG88FKDgNAtbJFgRj4bme1DuoyjmGF67y8Lqn9aPiaVV1bWy6dsFuP",
  "key14": "5sELFm4PEC3dSLFs9nSDNa8zrzqSicR66whYNNBJgS7E6HyaBSVeQCWi1soWH7MXbnLuvE5JodmjTfNUyZHBY1io",
  "key15": "3nsG6yjwiDw1nJLo9kgnKzERjZD6gEavSZfw2PgRwsPQfteg34gBK8MdUwXCJpA9ygYxQG5U2TKtzQgTjqUJYMkn",
  "key16": "4FLfTPLxBtdh5ygoj24zJ32fZFySdYSjS4oE1GEtDY5uA6Q4dWLHwYfxA9ncSRF7nxfT2M2omPzjRegzH6TQyrKD",
  "key17": "2ReaVMmZdsCiGv6Fx7zKSrHJGDww76TRdxHZgmuAiQC6UWDUTLSskKhpUz421a8uTgA9srW8AF4raVm3zb7KqrhP",
  "key18": "5xbooh2o7Z3VnEdcudzSJwuYqrrUtgcFJb2HcrSAodwaPza6jXzyYvCGijc6WcmFR2aujsJWdG4oEswERodqhd73",
  "key19": "37NwVyMdTLYvk9tGPX8borqbRxDL7k8XJHagJtWgzeLk1t9xz6QiZ97iuQmQNaDHNodsqyhzQPY595ZqsB7y9ALP",
  "key20": "4SQQdccbzBPivaeVPQq2rbtyAb4yUocvC6tWpAPU1QKwBuucGCzfbfv9TbQpbiYEqsX63E3KsBfRVnnppnqzrTCz",
  "key21": "4BmcYUYwayEWc4duHhwnBQ1UA8oC7dWKBVB9qQb6JpfVSXoHxaRoXuhkBMHVhowLbC2iWgbMVDug1h4HY1jqq53u",
  "key22": "3mnBj2yK9ExduRU9XHEcSKcC838ft2aHJq5L9iagXPh8wLDc4n4CZhAmACAe42tPcrygmW8kBWLe8oAbBW9zP4DL",
  "key23": "37PzLd7NqBvNHPRF12ikn7ok1Kj5XUG9QcnKtAR6K5DG64MipBPQBePAC9yvQYoDcMBwssHb1Eo4h2Ti1Ve7rCGJ",
  "key24": "2ucyReHtVhDKkSbmm7AoTc4EH7Td1HVGvgMbGR5xjTQ8GHQVujx1RhJWcjnTudKYz3m8nD9wEYbVYVapFc9HVjmz",
  "key25": "5PUtYR1ZPHzXrqKdKBHqGSwazLCAtR6h5sHoEF5GErGrBJ9iS84tfmA7Czb5UgMuoNKFPGadds9WXzDSXN3gR7SM",
  "key26": "nxUjMC6PuKxi8yTLc5hjGXXLPpwiVLEePGpmpxhZhdbiZ2vbSXARrxzoUNK7o7kVVcH2cGXg4ikQoSHnQG3GUHQ",
  "key27": "4SxfBJ9hwsbHcg8yWHoJLvLpH6qrU4RqTeKnx61T5emqDoxFptQpRGnHfWUu2JUQJY8uueN3mkim5nFDL5G5faPR",
  "key28": "xht1e4TDzXcJjhvyTpvPLzhQAtG8cHteogj1ifcNsxGcRjexbdQQA74tsFhHqasnPVKnfp6Z5FxrDKgTVEbdkp3",
  "key29": "5EpsfLb2dBfwB6dUwkrwSVNwm8o3sHEscJXban8q8P1FCp5kLBFveUw5fnNYD23sGrYLwgJNtjJvJqNNDZNzDysC",
  "key30": "23hfv6DgGScLjqSCA7KATtxn2Noj1ich8ghAeUJfie7jVtVGsMdEHFYE2jMmMDvYG2MsgaTwDH5Re3A4diprjuJt",
  "key31": "2NekAA1zLY28F2MeTEnPFszZC5SsX8abnHragCzzMWd8xY91trqpWnciZ4eAHPsHs3uUCdGBAsKepzMtVQbLnN8m",
  "key32": "4qy5phi8RQXQafj46mMkAxMyNSwXKrxQyC5Q2thFAfFW8U9x5x37QgqxAT9A5pPgS7LcJcD9GSuPVgamo6Ekgh5F",
  "key33": "36R2qB9idyKd7CJ7rBMz55d6Foi5vyCiF7vYevqYez3nYN2pQwtUkMLMTdsWfVLP7vDWjoFFUSSevRPVNSvK8Pa5",
  "key34": "2apNxYkEVAaMsCxuv3cgbzjfAd84rrNrBAbzmAv3zU2B2McayW2UFn627db5PcaPsPpwAN4BiYv6887BBfM9WJTt",
  "key35": "bQJPm4V7a4gFgvcDxLrtyoXAYuNumA8MMd82brdACEisAMZLvE8EhTNNgr158FHpJTHDfTGy7Z94Bz8WQEsBtvk",
  "key36": "7sABS1XGR5r7uw7PtDGmsbyVYMTTCbCCZ1bmJoMiCe71qFZv5oGir9ZVxtT5P9Mt6k3tKkBrBXCDLugge84sVqB",
  "key37": "3KX58J9KShxjSNGMGdk2U4YSKFHQicxjsXQ42ciJRypVcMa8qYSVo5iL5v7NPCiMxekC9EHqsgeXuoK2BRykwjEr",
  "key38": "4qESrvunLFY8nChPXVUpED2k34qn42ZxVPNwKLNjjKQe9CLuGfru6xqSG7AuHmZR9eyfLoL3o96SeZ7PYMqT2x4H",
  "key39": "3BAp8AKSbga6XaYT1EqCF8rsRJVzPdSFGy9EKeqLTi177rdfhuoKxnUTLPEsfbnzB5Q2jG3H14SXi1TnHajnL93F",
  "key40": "2D928jvbhgtKvYDKkdWDfyexMD5r23YpAfsdDPGZPwK991e8SK91J6T2xPYa5iV87FPUPvyG3K8Koc71qsuQeKyC",
  "key41": "67JkkDQ2R7YaiDu14QZXXEGEj4yQeRZ7DPHeTR7qp8q5wbZCRMdvoRKypsHXXu82hBkoHopF7KRnBsDrSrSwrAk2",
  "key42": "Ce395pj9ip18sj8XBGra3iu2Nb85LLpst4FzQ5cFeBAkY8RBHjgxLtW5RCx6q9KNGKHy6Qrzihoz7L6vKxCS9aB",
  "key43": "2PRh7DLJiz68XHuD48NgkMC6NWDQkpMMMHLTjVe1a8rQHci5gz6rKoidqxhQDkaJpDXFbPFVt3hJ3b1CZ6g9uV6Q",
  "key44": "5wHkZ25HLiAun2ifdkioqk3sn5aAWaYAB1zYzz2YGKZp8Y7mv4trUvQXk8vwGsU3ZiqAEEmzZfyK8czNhBNAQQP8",
  "key45": "5fKBD53C5AihzvdtsafMzEetch9Qfdkjaexiw5heFCjs6kd8rAcmfDxTmhseUTiibUYZ8kaLrwEBHv2je5g1bvvt",
  "key46": "2XsfMGeYM5KkX6VDK8P1iNXhS72qMGQqsZceCB2jJvrRzMUWWtop21usgbPSAs2dqodqzTXRbFM3onjJfz15ZXgn"
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
