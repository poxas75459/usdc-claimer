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
    "3gHafKjsuioSSKEJVVxbwNFPG2Rk7vGFq2HZyodsrGCjvMJbhYmg2TdEsCG4EGNpiKLd9C7fZAY2V9XMMFyM3U5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frNpBvN9yJiUTNphDrKG6pJX2Ss6hEw8RDoM1NWNJ7njs23kNS34CKfNxxPFar6cfhBQJyc3SFdpsLAQcuaP9gB",
  "key1": "2YZsJ8vRCdi27HDZFVrxyDDu3EgGMx2w1ohuxsbDw73vCS6jEmBnaqWMHfTESEP3NwZX1SyGLjKi4QeZdeQbVNwE",
  "key2": "2d81FLVuSwYt17Mih4YZW8dSu9guafEYZeWdqWHKJjr6FBKMDEmcssMUxXP7fXkVtVSzgQ2TfGriFNnFGuwm7gMe",
  "key3": "2uqwD5L8ZbxKUzpPt4vwSKeNxrTT3hhdjqKr453ZJ9myELUmkKirjv5NDqsYaDSQSVnyxEQisZd1KKFrDCNjBc8w",
  "key4": "og2UysHzAtqUzuxmNkkNnvFjCQWh8YZxyx8F5HtPYfmqJ1EJkufw19YurjjaTpgh4Un9YS1r28ye3RYGqcS3EQN",
  "key5": "BGNZa6k5W5jp7iofcgTXJLDjUK3eFcnUcsFrNohRLoBknm5LHy4SZMq9qxrfayqhL2i4qevYrh7K2QUP1jSpaAL",
  "key6": "2iqQ2oC7Uj8gwp2SJre7pkmfhCimfNX5eGSALVHAuCBKg9PPsbpygo49N4SzGsofmFbf1xa3CB6ZWbsdi6QgPppQ",
  "key7": "3nZdTkk7Tde4WfrTEcDHZ6qQZbGViDeYqDHCoimSCxiZaYFJ432dyAHyY4sUz8zRq1hqDBNWHDnfiNwCs2zaw5xk",
  "key8": "6uoD3CKprpbNivXbt5XVpT772xy4pEGqBSw286psBmdoH8Xs5kXvmrLmCTvqF7oUHN2NDG4xX9kUfSfJinu3BGD",
  "key9": "1Xb3okmWVjB6GcJC1xBADntvvY5pbDyXLyMqruU3G2aH4QNG9KwNQbgpnqjf7ezgZuN5qc4jRsJPm14TybuoG47",
  "key10": "3YVbigY33Jvy3oKNcbmD8srhyVkmUsghW2fH3xV8RDaFiYVGgHwK3MrwKKTGLm74pSj5aGuvqzJfXQ2A6Tg8wGhq",
  "key11": "4X5d9m3RqTEKNgrTHgHw8GRDzfha8mogkREB9v7FVLo8pqQEKNgnGmGAxkTpDi4koT8oYbQybWp9NBHzH8EGZ11C",
  "key12": "2mtecWtUrNKTJUg1bY4w4brdMYmdp7svaSsykgHyUVFtDypSW4FMNPgkjgtntXA5gkXT3TJziMnbACmxfLnHYj2P",
  "key13": "2NWLmfLJZ8RXKUuBoiYJkiAKcnRWkSRnhNJfzWbiuEicETcXDZ4ugvCadAf1bg5MWhDfaA5hULizWdZNQyPamugP",
  "key14": "4LYPTnGV3DRniR3KDp5zjWmHj3NEyVPE3Y1ZswbT8qFxU4t6xsmmaU9nq7Zk4CeVLkvmaR8XhHXi37rqbbkT5LjD",
  "key15": "5q5AKkSxg69BzpQhM6Z5Hu2nrNitVAh8EjGoqgpqYeQ4aThQGjXGcHFisUwB12RVwB8f9YNimdAtd9H4LVmXpT78",
  "key16": "26FpaGBu5ucytyUvauv43WoyLBPmqA9q9juP6v1cpWr8fDMNJeVVfg8o7uAnhfChngSgBR4yMi9vxKmCHgjXmWgn",
  "key17": "46efSjeyDysYxsXuvKHFNbYTymt2niFtj8vxFj94b41UszbDbYpnntKC3hCodyzyjrTKV5qX6XG5SQNzbJGo7g2w",
  "key18": "sRNFwx9BuSvTZzWY8Tk1zP5bRLYKXEprDDwDXwkqycgCrWNsxPVHp5JUVcjELqjRFHuxPH5ryqXckLhLW5Uvwdh",
  "key19": "W4KidhdF1bsrcpE1cZ423qNoJs7dcLrEg5DLF7BUtw6TT7mfwrQMrHh3TJyQ5dfRqycTmS71wQA7eHjAnaYaYwN",
  "key20": "6127JvGNpzoCVMuFjBEKkAcBn8hmNZ62iJg5XWeP5gzyLAFjmDu3f6S1HbPX1rUNgx93B51Vr9eZspNUF3yyPuai",
  "key21": "5yEhYPca4oKASyHqWBnXFneEcNVvoEzpn7m6KZX138dm49UUoU3p1nMmtuHomwGoWTTLwna2dmkbpMSE7NYHEwUd",
  "key22": "3affMx5gkYDC2bEom96RUmU2UTChbnnsxfxhSNJzneAFboZGYgpupWUuiT8hzDzMGJe637gZDpFFktQ7JK5EYPia",
  "key23": "4JMEJQD8HoYN6vNZFpvHWiPonZ87nc35zhEPAdQV1ZUfFX5zRpvkJw9GrPJXCjzrihNZRTM3tafYUeZozJ1KVfDR",
  "key24": "3za9fAAqVH2CrRaTTKgaTnZGCAr9nnbmph3K1aicG6Kbub3sp1wab5G9JADwsWjj1s6SmPJtn8fSyExcQQ8HtmZb",
  "key25": "2MqpU5nx5MQziPzC3bj4wsF8v4xFzsjwkvPMvDZYZxGFXtvra3QdJrkVbAdQ4CQEAZQXsJVgtca73zWm1pEpSDbZ",
  "key26": "APsETSvjbFpHFQCo4XLv2tV3VPa7cMcjohVEMtNhtvjy43Zwf2ELkEz4xf27kjFYkrhDs8UhNiF2hwMDewnPpBv",
  "key27": "5cb8sq74BkZzY8ueNCqwYfLHbJbgGrkqo7exiiGH1RXriidMck49dHaEsALGqfYKpG8Cq5PfisS7Sh1c5MCpWwAp",
  "key28": "5UCUr5Wbq3dmANqQEjPK79MZdo1yxQECZcd3KNSHaGEHN7kXoeJWC2sPATd6QnHqbENrLMomby51S9ESpmas1gG2",
  "key29": "4zhHJf3HkBbqDRHxcjhEXtEgt8C6zsE9dosE1vRVh3wJoGnYgmuGUjdLoUmhkD3WEHoYBFbwjzL4wRAFSWPgkG82",
  "key30": "EW9x1W5c9P3kbVcwE67Y9UTtx6DQh36vZgwGLfN4zWRbuoh4dwYsEFhtJ8iKk8BnCvLAaW6EYdGBxeyL8urnm7J",
  "key31": "4EiW9aTruENN1GwF4qY77oxxagi8FovMYtishVLuVFh9mYTaNEnaTE5oQAsRp7WN18nMSkabstZGj3478FKT482X",
  "key32": "4X919N3YWQGh95Dj7ije8n76Rub9FtVyJs5EBipt2e4TAA55vBUx26mXQ6vhaW3sna4rJbgLKpBRMis7HiYzgqte",
  "key33": "3i3BYdJMHNYZXFwZVkMSbnUJCismahsvbp6msF19mqBQHYkK4Cb4iEoko3wXfXc7kcH1Czwj5EyAHrheMAopbEoV",
  "key34": "4tCAA4XJnUo13Z2rAwttdwHDpBcTWh1yZPWw3DtR9ksSW9G32TkMia5oiYLRrE8CnpkpRdHaXgpFSa3KBr8ErhTm",
  "key35": "ru8s3TPm4zApUMq7NgH5Aqe8mLTmtzFfmtUwotgKbqXaPH4mHv5FRSBKBGWhWAXEc7Cn2m71Tqzed58rBezyyXL",
  "key36": "dHpCux4TyJRx2geHJGVmP7U7JeyWsRJ1dLuvmFA9JgD6rUSuAjYSg2LkGBjuqhxWw9h5FEm8npgMTsvfsuafzSX"
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
