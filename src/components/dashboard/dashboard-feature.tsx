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
    "2sN6bBLbHayLvUP9eN97NH1YiNaEWj6UAsTu8AJ9SknffLBngZLjgGC8h2BfVmQZVAfebWtvx92brp7rufX8yCjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oF8z5QbLBZZxhitr3mL89g9FohT9qXCZjp6YqmBCmAS8ZwGZa9Unu9h3AdNjniTFh1nY21Wk6mkMJqNzbvz88fn",
  "key1": "4Jzi1ME93k3xE2YifJbETaavb9JkmeY7bDLH1BqzGRTrUbznJfmyguYMvL3j6Ls5nsRaS3qJb7x6do9CtEy8TNBJ",
  "key2": "2YLLNkFQXdMueeixLPSZoUd31TDaCr56AsCjFfTgu93EfBFc46e1r8UKxFT8X5X1eLQamuquBopqF9JWuzoWC8oo",
  "key3": "22qjnX7hadq98o9xqVjLeeh1JhFBr6fYrAkMggL6pxsBysriVTeiNsAw9PAy7YzjXTyXRJuBwRwsj42cVjysuZ4B",
  "key4": "4FfsBN2pNdhDGNT9HyE9Ldsv2Wi7BUm9ACUkmhbgHY6hD6jex3J3cijmjYS6gNPij3GNZ3a3HpeG7grKbNy3k8FJ",
  "key5": "5w2xzoVNwdDkinoxLQEZytzq5L2CpbHzyrgKGxCwehCD4YFqbTLjCT848s4u2W3QUEh97B8WP2FMZDDqpdW8b1AD",
  "key6": "4bsRSjRWdeGy1Z1JbFM6xcxNrg2VGj2HQiEgBUmpX2GmZdVmYTgXpSqfAM7MXYp5q974yX9uVC4DyxnTiHAs63WH",
  "key7": "2reCZBSo7YUBjn33c4qQj3KQRF8NRid1HkooWCSWLNuCFKabDx5aw4NcRTujx3CWfhdTvJxBKdqsCFawTF5YRhBq",
  "key8": "RzWgSw5JUTf3Sph6rouPTi8dp6CZJQjbJvZYbZeiqTifdQ8krYKDxgdxnKTRa3EP8MVni1Ng2z2GmdrBZjAMx2C",
  "key9": "L2hoGoNpLL2CAEChq8USvfU1nbmLMGrvMfheijnHtgzBzDDLdbJjrSQdJ7zyMiDRKrou2H7jXEd26dMHBNsQcUn",
  "key10": "5hmvnAy9EfHZEUcsrQ6tRYBvYoEnFd4yjgLYGggvcaSBkb79UpjJoidHD8WERuY33JgdDbHPaf4ss1onz2swfSjx",
  "key11": "3LX3CpRDmVTXwPkhwVBSMEkQk4Qu84fZvfoXdoxyUXj1GESFF1GLXPSR4ojxwu5Gpzfq7WUg9RRTPXzX1VFzFvhj",
  "key12": "2iE7msy5e72gomqpuwDHBPwUSoXiczzFvauccWpp6gvvzJ5ghTZZSE8trTJUjwz4G1zGhb5i3CtW27TKBGgnafPp",
  "key13": "3M3TT3Kd83pfjzAkpRmVC21tHCfyXPHAcpt9fvcT8xQxiC5hk8JtxNRMoSScpQboXc2YTeVu28QWCWhSDrgSVcfc",
  "key14": "4nFGjq3UAXwJcg8CRRjASe2D9Z4EA8gVNiB1xrvnGKL976rqAMNbRvMbW7qGCQR9DHq6cPXvmDVjWghoFEQ9xppG",
  "key15": "3AQ7jb3pkYgiuAMy8LDmnb4eQTEVVZtPdPYhUYZJWcZr6A2JshRyqG2Y94dJco6thNJhe9JBgEHep5E3DuPFKwK9",
  "key16": "2yQyMMTSWCQaoUtWrQFhLLmMC7xpxRADzhFEup7YGmFM9LF7msczUS2ZKjbho8poGTJrZToy9FxPpYrtR3DdaaYV",
  "key17": "3dVdvoNshWS6ezVKEp8A3ukWXtF5PFi22pVyfgYMQKmuQYndK5c8oKH2T4G9y7eS25J2gE5qXteXtoWVnPvkuCMu",
  "key18": "54rscpDFZr9QSTnaYJfJcdW6cERysAJjaKz6ERosSgji4YKbXyphxPWFXeNqQNcar76FWiomJDKD65r2gswEnC9H",
  "key19": "57wzv2t14eYPzN1L3MiuVDcRagLDyaZYjhjPGcyXyzqjDhJPqUscRvZSGQ43qygSdBYbotCEZg5catyNnBcmPimu",
  "key20": "4kKZgkcLMWmoKm3JzTWqjQuuXerTLTaD5FiBkrwoC7EUnihbzKyfcVBRZutiD3JbdqAijWF9CbVwWDiyHwhvtDUk",
  "key21": "2UaW6LoHEC3E7PwQwoFNvsYkb3Ukx6DCTJc9xChrk1ETzdAWXeVQmuaJZ31zwdZGnzMdtmWxNrp2FYsA7RuMT4fo",
  "key22": "467QQv24bC3Gkmsev7EfvhqsR9ZQDcsyBX6CU76GDZr4rx5dYPaoDdFSqR677Yzhbzk97XEFDQC4VGvx2ZMxTeMz",
  "key23": "Hq3kXq3FRZwMfupRKmFdYiLDBRR9rSv6rQDR5huvoWBqX6WdELy5bnA36AkWgZMmjTgpk87ipkogHpc7p5mZhft",
  "key24": "5yaF1p6gEnXFwy8S3HVNP5zG9U7GDn5W9rCzqcKkVNpafh5QG7CYQJ1oziKZDdBGYKXtKgspS2MXauipsHkbJbXn",
  "key25": "NRWr1WEg4ftFV5J1WunYifiA1i1fvxaFfPKM6aJwN6Vn43K7iTcaDAaujXQQrtXJSy45abxZZRdYgMF6MHWZBhj",
  "key26": "36UfvrqRapHuaWaWC4iEaR5FiCxphg6XQC4ugiL47fbN7PAYU1Eu5LMQyBtcPCKJy7se4ZuVaM8N3aCZ3Zte8nsv",
  "key27": "3a5SK92mnko79mcfgh9vWByG84nBQRhJWQp5qemifdLvkN41GuLW81BQjbCS5x39KpLfodYmrJfNxjGYJ8Dk3Y8d",
  "key28": "3xQZ3PXLPw77vcPgM9YiJxwjZPvmC3AxB7uu3rffgAqbm9ae7e6P8Yax8JZcQMGU5TVGiXEq9kPSFvXJsQYSvyst",
  "key29": "4vXt8nQq3nmURmaoTEHmV3Fr3HPQPEFU8aZSwuMjrTkGXyVRMFXAgnUUfb2kVSgFxi9VoxQgbggMR4NePnHsif6F",
  "key30": "5zVwxr85cs9QSLB8sbkJkPwdRnVJRTwgMMhuwzjEfraQeb82SkLYQYK29hQhowwyKiBpjFZhe8PSJrWZatQdxz8a",
  "key31": "UAhMimhqVeu4YkiRxgDAuwTKvcZRiKveHQNRYiHNraUdKPpJSkE2U4akvziA1ZYNbvTUvwnQkdVfPs61j98drp7",
  "key32": "uPaL6UF1hGNdRBwiRD87T5MkYmf8BQPv7jpJzrDfA7LDiBheouQ3f7QPPiCVto8Y1ugegmK2XvHktauCgXmZiFA",
  "key33": "3r93cTzwhdgPEQpgBa2tzNW2XKCLwu6HAkyWyMettw5ZmT4nyCCvsoLJwbHR5cK9TukP6Xi5kzEeRKYvGmW1AY2X",
  "key34": "3uDzDi1KLQNciw2AZoL1bH1hzYmsHoP6RtUffk5yvHVv9c584VjKqtr6RTUutGP8eXiYGT4FKZZrsApCXgA1XybY",
  "key35": "5PjpbdpCqHQndga96fGdjhGMLodKEUiy3sKhNqTesGfKCShkLJERNgjJp6oN7o3g2MvoY96fMz2epGjtnFnBpK5S",
  "key36": "2tZbxqMmr4iDwRkbLYSngELusmuuLssFtGaVkanB5sPVa2SaAzQbD4Z1rUtoLLgSF9krqAnBYYXDz7faVfg1AvBc",
  "key37": "5rGAgxRf68nTiX2rKKhGsMtL6cYhKBMts5BtY5Hz6BoL4YWYPQzYLfSCjTQbiBMt2uLrLDzuzupay8XdpCH5Sjpy",
  "key38": "4PCCUCqAuSodoVFcTbZXrwWq1phv3uC6Pk9jTuu2ryWyhzqSZVqNnRQXvBs7K3QDYJY7Q5XokvBaPkBhbvQw6Lmk",
  "key39": "67X4oXWkiGujzyJLZRAu1mWfHc17mzxSMr2XgsExAMioWPJFsWbqE8LyQV4vemCiU9Zx3UFjqJrw97nWLxQCCWiT",
  "key40": "2BjSQxmJTEXtsq3jhvBfALKfvi1HKffdhmPAGQTfpdeaHn2uKanqwfRougkDGCrGFJ5sKsLm9K59Z4VTSfUV2hmM",
  "key41": "3tT5UYewH4P8CdrrxBDCTb69XvTnhzfiZJYPr8hdPrR1udfuRUfH5UtE4r7mwAUePZujU9wupvk9Muo3NKMjbdP7"
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
