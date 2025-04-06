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
    "21zwzLATai4VoRsPFmgAEkQu6QbgHZ35n26rA77V4pGNACkHDSRwkxD4m44QL7MGah4Q3ku6w9P1eqP9YA7JATk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwtMgQ27zgBDUVfeFZGp3WroNrJR9AhKmLc9uHhh4WidJ8spBadgwoHSrbu1UfgL9vZLmnuitFFhP6dGuhNCW9D",
  "key1": "5pFQ716nEysK1G7mykwyFXzimmA2i3NoK4yXZBzyfoHa4qULMdP91g31M7aQJQNNhuWB3KfJcCoJWsx8eHtFuXuz",
  "key2": "3XDx1sKEbhr34qMCbMa6HbDG43gfouS54iKaxK1tqCkiRnp3fqUqKqqvRLhwecsM7REDwvHsnbjiSXP4emFtWY8E",
  "key3": "22w5LgcCQfpe26VMEdNCWKs6ZZrtpnXDT9KzBWQ8fpwv9b7WNAYGDV2U61rdK493VDPZenQGTS4sQWcwPCoachf2",
  "key4": "4J4mu9QPUVej2SuYDfe6ows5csxd66EATFAjgEjkAx8tToCW4g4wCvE16t19osngR5Tw6F9xwyXWQGnpjqyi6oTA",
  "key5": "2hkyTKY2LS6vGiKp2mr715Pdg6ffNUFqpG5Fn4X4sdqnNjLpHqEk1KKdb8SHCzxL97o5MHzgQcoToq1Ys9tDeSRH",
  "key6": "5qVJpfDsoQDDXiZEBVoWoctyRnjRKkNPAXSpkTgRxY4vNtwwbZyigBNvmM3PEHvatWCFLEdLvywmyTohWiPqNCmm",
  "key7": "Bs9kdVvBqobcFpfPn48nSYEksne7icCsY7U32PmRycbEVdS2L8Gfy6ZP5QDMKW5eDXXTJEteBSzyUC7SapzXxgt",
  "key8": "2rvd7UxKZwJ4vHgebbY5WQNF9a2WWxJzwk4FV8UB3dy3qgip3PqKgkdps5UfMLejqA9fxB8noyK12zW9b3tJMady",
  "key9": "3Es8MBmgppqjEqKkfLmjjuwmNAK3Buu3nWpz29Be17tKwxTv4jhCwVuhLHvS7nmWPAEFJtrvFC3Yo6A8N3cqaMJy",
  "key10": "3rknmLLKY8BiDS4y3GbTizXXVYhusassyceNQgT7kBZ3QtNxmS4QmeZH3K1ivFvUz1iR4cBTAB7VSJYUrbLLgmfK",
  "key11": "4W1yYpycuvJe6Qo7KzMQjLCzr59WTTJWWNvA2cs7Q8FWxU2HYuAsgNLhJG6J7UBUaZFhXQhwGRBX2S3b9zBeGJnF",
  "key12": "2S6HixFiwUzeXRUUCDh4VGDMSLX9X8FGCZtNeWdCgC74VrKipGtCophyZck7GGovbHaxTJFn6JN5BWJjTUqq5TWV",
  "key13": "1vDo2XTUgc3x4StiJHF592LeWxTwLaqFxkQwRThnx9DDtanEWgVvdy1iLjrQZarQfUqHQUptzxQAnFpgPf6MRkn",
  "key14": "2PgHVQAHNteKyKAYuF171DdKg5imrejd9SvKpJsDyfaU5AHKNt8zaDyMwKKCTDjDGfK34fFbN9644TkZggyTjkZc",
  "key15": "2z74KLJN7hWo8TKDMttcY4c39JVLQJYH7m4FbmudRVC32ErjVeaySw3mB5CTrfDP8tfQRAWi4m8iKL9YKGbd5gqj",
  "key16": "65zsEhiWF2UmwZouS4Uswo7SuAaNn2B6kKAxfNLmW1oaM2Gf5ipSPkrh99ZCAYMJYaE7c7JT4SQFkKAqxPKqjeWW",
  "key17": "nBNcj2aCn5EJYd4YhKsP1RskZa5t8ebZcR5of9oExzjnDsW6Bj14KML7GSFXG3Cwxexptj5YCtVA98LVLfrKJEv",
  "key18": "Z7nANiJCr1CkzrYuEFdozHq4NfzP3ZHUMJfczaLWjdfcyjn7ZTB3J9S6LGzjV7pqpZwUaXTxgT5nk8v5rhe8Xsk",
  "key19": "wTM8PHM2ee3WmBLNvjHL2XJTrsJqVaWgspmzZgGA1kAsdKvREANUNFg45DR2vTNiQhhGtmWPYkfUWvRTgNguRyx",
  "key20": "5pruJpVPRMksUHErSr5bZdAS8E8qCEENM85jP1xozDVYVTrHGsjE4B2DMZZCfVmkt3JB8Cj2LJ99b4uqMLbt4MWU",
  "key21": "24xyPosfjS1MepMdBaCSKbUtHJfQMwb8qco4mGsgRc1XV2p96SS3pYcrqenM8CmPHzK7FKAkGezgku9WnBE27SGy",
  "key22": "4FDfUpenUMdy81cNyduHyNCz4PJ9NXNSkTSs6N4amQrcwNDZXvCWg6qRyjaExb1NafbJBDZBWF8QbrCbCQzc7izo",
  "key23": "jz9z9EkY9HkocfiVahgVAvnASYK3FgmTKBF4QRUB3dr3JqbTBj7LBR9PnNgUTGvCUFJvpi1Z8RLAhCXeA1jXqa4",
  "key24": "5WswqtbwEQ1PJkpeH4ba8Uay3TLCqBK74TEPAg4FBLLVsYdDYExWDz7Qcb8mq6VnzGzbrEwApJuxAJSbgsPyyW5B",
  "key25": "4RvamFWLzyuC9Wd2cHyERcZCHAAQE7THR6aLzoEozA6H6NFzZ5C3vErtZPiKgr8amc6xWHAdBZvRfkziU4VwzqXu",
  "key26": "4jLcckVkULQpHjw2bdmCEYi4zRRBMNVjcCc3j3TxLbZ23uayz2rE5fSqmeuh6QFuZcxNHKf3VFcTEGTswxkJ5sVt",
  "key27": "2CU5d6n6SynmxfLi24sGUh96kP8hCWzCG4LMFXCXCNaW5wxB7Hs2wjz3YqpnbtZKR74VskFR1FycjXJxfBxMVC5y",
  "key28": "MJ6nH7rUaZuUfVpF2R19ZtinLaG4cjXyNZABP4ujwEVu7tQZRtosRx1F2WzYrzziZXdS2W2A9vzsez3fyKbnduw",
  "key29": "3Cytf7gGjCuhRJPqpZdBhSDZ3wMqWXYKhegs8APoSVqifJA7B2Hrt4aW4JfU1kQ8VSgvsY7iZx6y6cySavLWiaQh",
  "key30": "5SZE3FvQE9pTJ7aRxRhte5C6cEFCW8KveoXoRVoeJ6UktJnY8uw8TSMnrpKCJEQMWYMetr2km4BC591G5YfcxKHk",
  "key31": "yF335YQn2PFxsXAAzJr3dT6vjJbhRtd1JBAnVPqAedMyPgGnvp2UAd6tEpw1goXDhZJgAs7YZ8f8RaCoYjAELhH",
  "key32": "33itahFqk3EvLzfL6Kc2Lr2YMGgRCZ56wZcMKmKGPKJzrydiNPNMck4Dpg57cnAaRuQa37iAgwVYR3R5Cqx6LjW9",
  "key33": "3Zo5t4hVZhg9Psnue4ZqpzJ731qnrSivbW8vqDFC8neNEtemviD7kV5iS1WnsjR9JpPpTH6VfcLzo1G8xXnw32ky",
  "key34": "5i3ioGHbWNtxNsinbZ8K6e6DvzS89Dm6d3nBqvtuEgUBsLF2wPFCSchzsdehKQKw4Cixm4cfrcuhUg6x1WKyzn8k",
  "key35": "5vDwsSBdH8zzTq4hCUuLRNPyEyCd1CdCyMdQywsTK6nKS5J5DaQYTtzk4EwyV6B6BtQY65J7Kg5dNhFwRwKPe2mp",
  "key36": "PyHCwMTsk5cXzcvXw2EiZF9cxa1psqka5jF11VQXt5TFwHXEVJVR9sjWGGNP1rA9Kf6nyxDMmSeXJrXquTnX3vC",
  "key37": "4AcrgKjJW3mrWox1PMkT3tuax3eRpny8yit4cwoX5qkwsEFaVJ4pTbmhHxM41kfWbE4Ef8NgcnKSYPVturW85HHe",
  "key38": "28vq8rtg6AweFa4r1o6zHUi4G6vmRcmBtxWh38CAB2PNNrcNxQ6drUw8E8Xz4GU4baXRuKcwEgqX7RMJTWdwMr9C",
  "key39": "58keUhWjb6L6zV3hauP5NfL6t79bXTC4ahm5ifKNArr1x5hMudfXH4gXwMo8SjLrK2nqdbWeaYDqV4si66hJqpER",
  "key40": "36LpNLqmkNzyTdWaLMcm87oLTL65hgfLjJVzMzKn61zR2TaDg5QCABfPVy95kmKV7zTpdMomh2uGiP9sH8QuNc8D"
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
