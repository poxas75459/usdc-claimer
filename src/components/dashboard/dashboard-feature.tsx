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
    "2RYNMmdfwqjVqpkNqzyNksYBD85vJRGB7USsFJfyJoqRRukDJ1eE84drEqQuk4YsgMQHjyjS12rgMGJaxY7PESvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mpb7umzaUMd8wJjKETNVFTtMpgAZvCDhD8A35LZpzcvq1sd87LZtXobW84xe8trwQomA6ru2s8XPmKQaKv5cJnU",
  "key1": "5PoRhwMpgSCU1xjSgs5VRzUQJGz9tRSpnQicozGNW2PHm29fgfwp3rBzx69aXNnGWv8hgeTQKM1WLD5nwGkfBeR8",
  "key2": "MutT8knNjvR3VMppezdKTZzDqDaar9m6uRR5BTiugj9Z5mNnpxVSxLzJBqHa8NeW7nUyoG1rx4JWtHTRmUspMt4",
  "key3": "4ifddCpWdrfN4s6dc2HMei6HRNeBFf8XiaYVBhTSAjwbVSFpUCb4zkBxD7hS2p9vQYV8gafQoLz845h63NmFotD2",
  "key4": "4XMZMARA5txZqs3cKRSt3FcKZVDdCoTLDG5Va8stk12z4erj8xbQLcEp45v7cQvn2inTY6XbDcKv2BzMgL5vxc9n",
  "key5": "4iFogNhwBASPexMXprMxxzFfw2Ma26LNf7KEgPDFmxjPeVjrU5kvdvzUNqV51dA2gvLB5eN2WXztWbmv6NKf22no",
  "key6": "8CzY56P3mGrXAEqmQiYALbPwdqDBJHZFcR5cEmmEY44Sa5TpQkgsd63bie1bKbufCf89LoCZZd8UtZ8o2FFMQJP",
  "key7": "5NcZfxvEUqvshzpgxiG44SymmqEQ6AhrskjXtRCbBLCDWtBFjpaUfGmBSgoXRBfM4h4XcBFibtiUkKKgtpA6gqxQ",
  "key8": "oQoEA7u7V7vNbCXBrpNi72wJZxKcCg29FBR94cVxJMHPMSz6ok3H1b7trSyMWyRCknzpg8o3fdCj4NzB1PXw3Fi",
  "key9": "47PsimXTYaYS1VjVF2syohpCsz2WBvM6FfYm2563eHkVrwu8pDvecPu9rVNKj2vuoehj3kRGmsRUDJc8KsRoTVyW",
  "key10": "2TCMXwrLEGg9pTb9P8hKjatnmt88pcNU8eZHNsGwSVJDV5rbPDxt1brPfBCtaUNqkqm5WQ9HRiS27gUmoSg7CVTd",
  "key11": "4SpuD7QvUyftc99gTXkzKScXqKDSsry9QgTWn7qmM73kRjWydK5rE5q2vLEwtNbGQcTg96ZSmfXSUAnFengkVMen",
  "key12": "EoHVUvZgfUZM1Ha24Znazp3d5yzBv9qzDyogoNj2YvjWki4YdZb84YiKdf78MKpsf3MJfMRYkv9vz7WnnSahNRM",
  "key13": "46UGY19NhEB5DKF8ntQE8tEcqzCof7qAxH9zMYpqYX8MDNVYgudQHkS18F9GJDECZMoR6Qs8yy7u2C581a3S1k86",
  "key14": "3r3Z9gJNbAGfYA3g6Ln8iz8dsrUrCetBAFxe4e8YAPXrrnQuDhqqGmQtMMNeFSvWnotezF6TquTXFkWT3igseMpr",
  "key15": "5F1M9W5PWqGfDNPMvjSq6HSaozERaM85DYauA1XWnujUdDp6DuM4vJPrv4iEPDLgUKzjf4vBiwY8raGWjzjjMLwZ",
  "key16": "5aLKHcdi7v5w2fwYnUoNZnMzGtyrcuKenNFrAtR7F3J6HFi14djH8qmTdA5Y6uAPsQ4FxivYz4yTiichSdueTPx6",
  "key17": "4RGu9NA4YU6nmpEuikghewUrFwveXMf9Uhq8a58LKRwYzaRjzFKH3dNKAG1UNYoTX5sDKG2kwRKRB4qW7eJAkzHg",
  "key18": "4iARGM2QJhFbHzGKojhGquBY6vDZX8KxsxT3WqLvnghuKTVVfBd31P74ZhanDZmXVDXMpF6Uie1Z3MLQtLghorHA",
  "key19": "4dWkAQxNCRtXqEEQV4BKgFQPnm3RczHJjxhcMR2Kdg8ZVKcGjMUdY6UU1dpCKGVkiF144veYyzNbMGzK4vCTG4e9",
  "key20": "3srVQWbDhuACrRnbcTJd2TrdDPNsxjL3L1p2i8i2L8Z2bTvjW1GofyQ2w68Fyz2Bt5ngBZMcdhhNbts7EHn75PTW",
  "key21": "3PSte1kwj5yHNt3iZAc4MHhxFX5rkMinZnvHi7JwtcSCnDdjRtMP7zX7tDjrin4ZwxXNSXCP9HZmYY9HgyA5fzXy",
  "key22": "5xVsdqKgHGCRixQ4FpUQjiPg9ZUmbrHAcgL4RPTe9JTXT39iP76JiX7EcUYN8Y42E6MHk5cZJHcKCMqPJ7JAvA25",
  "key23": "5MwKrmeeg7QHJUAd9rp2me6gwutnK5GgJ4PNtQcdCZvNcP1SZEGbq78XajMXvzftzQ2fKaw4Redsf52MbgoBhjHz",
  "key24": "1FWCUMNiz55jEqLvt7NXNVfoVBDwbNC81u3xg3Gu7U4SWFVTdjKhfNfsvpFKUZGhd7np5jZHXbjWTbcZvgMy1AE",
  "key25": "4D4R5Wn7RW5uetj4vDqnpu4zzFKGrJxZ1tqe4kHvitTi2cusVwU192AoZp28TdCSYPeA2hxPTAguQFCFhYKJNtho",
  "key26": "328GQtcBMxMjq2BoXZwLdP7vrmZTXALMXcwyqkHuYwwN2F1wT2JyKKha1Y2sq8EVJMoRV2yf1ttWn8m8ktofPZzf",
  "key27": "67iHn75YWUPsJ4WQP8raewCkBHCj3Tw52eorqhNJJibttgovtz4niNaaf2tD2XQMjjThk9j2wwdgKWxn7vgE44My",
  "key28": "3VyBKoGc3q7F33Bhv9C816s2YcXuVxzpqD9pLVt8McLAyDhCUby7PqnhZruXnbkC4wq3GjhMvoUvrDbxem9BX6J6",
  "key29": "3mhGyQtXvFUj7QLbb57BUDXoHJjtWXfdAnWaM7a8orREZwm75aBRLS1dv7u6ZzhHm4ow7FNx6FZFLDmJRnQEYgwF",
  "key30": "4y179C8uije34fZ67yWZG9BdzxqQJAzZrqSEX4DSgES3xNQRGJ12aovCXvGVhcMHKBuE7TWT8FND6G7ULgbd2Zex",
  "key31": "4WyRAXyWeShYaW3qppMRiytewasVRS4UVvqgMLocT1c8dSqyfuZn46jqcv6B5CXg4QYBv2q8gpBAdeMNGRUAwdgx",
  "key32": "2AhR5HD6PsSM1qAF1ynjfj3E9iEAhgZUSAxf2JNunQuABBDzN7xNsNbAPnHASCn9kN5T2BVUwSwrD7NkvCEL9ENK",
  "key33": "2cBSAzpwDugtGU8zdCm5qxJoHQUfNCY72o1KjKqg6VccWPjbwgWZertGyWRwWXhPBwGXXWHJ17ZGtvKzftxFp11x",
  "key34": "5E1EEUifhwEBi51p7pyX4Rkvby61FSyRQhYsCyn7x9yDokNopn5ZLULmD4R3WrwrY5C8ujADx8Jj6s4pgfiRyt6p",
  "key35": "2ELLPABWmV93vHwBubrt5AazHP2taNZc7fLGEMxYQJWDeUpxj7QdWAnyPgAU1dyteTYJo1tcinRqQ44YuqNikN7m",
  "key36": "2uPhXi68feiqrSzu3DJeuW6B1dudEczPtPyJszpRqRB5Bioj4qehWBBbFMGB3jKEeG1erK1KsZ8LoxDm2CD5irrW",
  "key37": "5diHiz9o1E2smjqb1TYemWuue3aEHP7RDTrAvkeHj9QktWJaAdBZUETy8tyY3TH22jvRMwrA4xvjNZtQKezN6QmL",
  "key38": "2dPXXRyjLV9qXMmscySb3Ccus7Zyh48Du6te5vWaMTmdupbrSYGx7h3JsgGAymSveZTkptKwsUkyDrb7hibXEvAv",
  "key39": "5FAUqdz9kL2MQu4UGdX856EDwKGefjfqgdJESSFMuLHkXvNAv5HR4kVKnZ1VeFXVrBF29rm73H7qFZ44Kexv7NvR",
  "key40": "62Ej9ZyfxkQM4VoHADVK6n6QNZ9EXXixBBBMMovZat1KZTJ56UKpDRudTRYDn9FvVhtknme1fWMmiamgX8BnGQ5i",
  "key41": "3qJZjr1Ww1TzVeB5PvSasx4Xd94NuoJoaZnMybYETE5PpqvMDJPFgNQgQvBYm55mip23yojr8UekF56H6efUuBCu",
  "key42": "4H9imYsgFP7q54QM7zEiaNUvBzRYAiEpTdxN9kMZiBrxPLkpG4Ky48zWqFvurJ9fetVXuQDwLhK8WRsNZuyeKzWy",
  "key43": "47qmvVVFTxSNBAte3WVPhvzpV2tgyiEumtKAy8xVpwaXtDfgiZ8L3SzxknAD3Q83fFo3hD938ySc6FKo1av5Rubx"
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
