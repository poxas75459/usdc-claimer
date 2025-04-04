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
    "4sxhqSJMGvj8oCBMCvMZz4fqtscZHw9a9zPFjN2pxfA9DDiiuEPdLC28vxTP7BkLi7ArpqGjXtEhrkfSwtgEvTkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxTMQnayDBraAgsBKGBCmc99gg11QPAurz7TzLLiwGzLTd6cfLatCMyuGRf9GgPZTaZnMqdiBmGENypu3mUEPDe",
  "key1": "3JzWqHF6nbtuYXq1vuXDrvCo89L1vHW8g3ub6LSXDzktKB7wS9oDbmuqekRtEBNYe7g9KknF3kmZzPe7Vppb81gk",
  "key2": "5eN8K5bavjccdDVosbMVr5WhqGfKA44fSdY8jUdo9g74wCJkxVvnCV7g6pNkd3mU7ocxjkKctDZWobzkqfa5sP9y",
  "key3": "3KJtbbpriptzDFBikngCsciDiMcu64YcseR7t6rcd14Rt36GTA1r5RpHgkmjzXGVK5wmpFy1R2Jx4DYdR9Bab8i2",
  "key4": "3Gt4CDtq1qrqYXoRVzRSTYAtPhHaNLc8bVLZDgkZ5EefzmL43YMXZiqVBN3i5FfhRf2BsaGniF6t3yNA46VNKbRS",
  "key5": "3eB6p7MStKiBgER7m7FzguMrz6GEKrx5zGqj8c9edpvvEFb2mC9EFnjxRZ2MhHnGdRftaXGPbnuybGkX3aRcJrGo",
  "key6": "2RxJCs6dooKzA1xkD6mWwbrg6pQasqhsWh7GP5AJhE4bvMP4K1cGqySK7g8EDRkZVP3ZdSLATaGCmWjBubv9JFdc",
  "key7": "5MaJm6QEvNC5zD1STZfvroRsLduUYj6CTPy8a4msmKgikhRV9jVc5ZNLm4JAfVFbsEfMAdLWSRxgG8GxVhCVeXqk",
  "key8": "n3peiknWdiAokLJasmgu2cdMA4xtYnPtTDTCrTd4qgjzX3b2dAJiMsDzgxfTeZoREk5byF9qQHkucHTXUbDLF4x",
  "key9": "h6nfE1xTjhK8JffxNvjqpzjhzRh2Xf4hgGJtHUEaZntELas6FDXhA5mWBzDQbiVUzPzBJgKjzPc3KhWrDcQvDVV",
  "key10": "4gpcigMPkD1PddeRVzRZwGakVReuKBhSxzRQjd5zZekJjqixoxeR4Ht1PEzNFZpcQEUiXT5vDnV1kDAkeBFM4kyw",
  "key11": "4p6TdJs9u23cmE6yFZtUQyWNGYwLNSeBmmkFh8fjjSQW1TgVzeTKSKFh9LUepTTdhkKruPu1jp4Au8NR5SuMUj3",
  "key12": "3YjZVHg5dCD1DeZTqymopnaY6qnC5qA6L8NM4fvemiRchx7kvQLfArpyLBjY7QFuqjHZw1VnJvFAkuYbpVmyoj7P",
  "key13": "4fYE8jHzsQE6JyykQ9PtdYfKuG9jtdc2Lp6JSahdkoAANUQYkrSXjRrQF3xX7v7Sfhog3m8HnuKJzmXN6c9yFmah",
  "key14": "2UiMCFXo4tZ2sqaxAtnZLRtdJmuUshVbRx6PnnoJFn59UjVZWPJPiiPHcyCVZSh2h8KgNaZMpT2c14rJLDfPBeWy",
  "key15": "27a8W9XE1FfkwxkNy2jSNqss1sJPgPWcCYLh4g1WPoAhY4xmwvxXbEC18uiD1MGjGEB43xbzpq1ys5TDvgCbNgcU",
  "key16": "3yLCQ3YjqJxEJ1szobQrmSkgG38kzvApvsYVsrQAnRDUkhaNyUZ6yRansQUkpmJEs1gsieWowHYz1KWCKHyWKG4",
  "key17": "61JG5aQcEvCtitvAfrbPy2DiCdhtiYQ437KHrcwu3ppzrXRffR5k5yuT1V4Q64Mj6ignJkFPirc8rdJuYs7AgmXw",
  "key18": "42g9e53RhCAdB6ZAXZrcmyZSxJ53DkRePAYvziFa15aU4Q6zQN1fx1AwKzNBeWfdqpcGFnGrDPbkaPa4wMpai5aX",
  "key19": "5xegxUgTLDkjszx8AVrX3rGBnpMPFwgNFxeySQBAeUEiQ5xG1GUEv9y4pKcfe6uHEqw1KDN4N7oGpGJuFFixGNk3",
  "key20": "3CLGAg8rR7kLo85siBiHn5CG6Pqxy1zPttSCoBQtMSyeKDKHp3uR8jC7qC7ZsSuXVjDHz4JYnMYZTo8UKMf5o34s",
  "key21": "5bw1SbEemdDzBsepRZCbQMvSXt1Sf5aU73xZETGstCcjcWP6sgEYzgbS998d1CKo3rGnspXN3ZB7QtgJW7gkLXfb",
  "key22": "5Grats6CxxD1HPpsnMtSowVi5MG3tDdMwrkqgdDLubAfEPdFfuEoTUmtskrS2CwYLySrtqQ3HvjBinW9PtqxEKct",
  "key23": "3wHoJvRa3NtAKQpv1785WoGFHTih4digRU2QEEjGotjXJRgJikmcwPgR7WapWJ7C9RkkjDyrADEMWywdSjEfvdPa",
  "key24": "4wyadDDSvSKgRZ2NKKmUUD5kgX8HPtyUxdoRQAWAYi83xd3R5B11Hhe7GJYZADKCk4qmKvF8eNhhACXs4FUnQHEZ",
  "key25": "3XMyqGEUZ66CJ9g4xVgkBLJVP2QoZLdHun7SfRXduwApAXN97oGD49hRQFt3wv77mftVK6BPoqJWTE7rXR8bxAAP",
  "key26": "3UtESookcgHcCoS744QrNcVA72Vm9Dfaoem3mgcCrFqsoavrrW8j2ToLxmsTKx8roVKwU1q8nWLoHKD7ngb9Rht",
  "key27": "2Pm8gfUmLdqopQVUTMu5QXSrt1L2vTDpVXh59HNLziFE46mq7EVRUXoYuxHQupB35UhR6YV6UZHYnSZLHhCJ3V9S",
  "key28": "5tnRAR5n3tGYLNAfjc5XxaouVFJxdK7Zbt7nav266ZWBJrSRnj4iqVGswNmW4X6zBnKHZGaXQcCVtcc3PCr8PwSj",
  "key29": "39nnVkHjV19u8p1gTpKcpuTPm1dxoK8LK1kVDis6gntddoWtTBHctnH6js5NYwtupoRwbSZY7n2w2E2RFHWLdvAq",
  "key30": "2QAesLxZXRamadysNnt67up9U8DUUtsjmSBSa6PULvoEB7dzY3F6AgfZnQf6Efhn9AEHHetcGKWFEFTi2zxFEH4h",
  "key31": "4dbJnfDU6ZSkzT5KVFnHCA9iA8gnb7CGK21Kw3ZdxrKP5VcVYJRXXPtKqbwCbETCpgjZAXNHSHa7KqhqWxjBDrwW",
  "key32": "5JXAmPL3DJyZA8DqQUYoNacsPQ9Mw6ovkG3rPxzKFu15bwKtyqBZZzESJT7XESMsjQnENpMqmCYs9A2MQNaKtvLn",
  "key33": "47J8CFmPhiT2PxHNCoq3w5c67KC7qfkTgZQfgBzHYLrCSX6sgF5Hak9qCGdLDFfPwfAYLRgsdDVinJjPxJST6fQH",
  "key34": "5UxAxxpgCvnYNstcju4ix2BAJR8N32386aC46t6kZv3sTuAbdMJMKz1YDBVrjzcKAU1PBLsTwXicsq9a8BqcpF9f"
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
