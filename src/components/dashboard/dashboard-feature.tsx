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
    "s1uzFchzgwjiXNjYmUUsm4YgpxZeZiXPWnAb1Hp4BeUw7wUeWkQvBxw1MSsvUGyacYRxR6k7TCR98iUdagZUue8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2s8EV2WYjPfEnFPCxZPwFPr49GLf7dGxFsnkYFYo8tJB4KMkyUfhe6pnG5arWMn8P2NyvPhSE4hNYctVw1mF2U",
  "key1": "ywVvR1ZB6z3wf4uwC5hrTAXXgS2waBUVg3yEtTYsWjDwtW8LWUHRoS1TFAdWeFWH5jRYvmhhPYPveTotGAV3ucT",
  "key2": "2ahRGkLGCfgB4MH7HX5KmoRMoaep8Z3wmtq7f9ZfyPBSf7wjPY94jaGuB6rkJdWQibhhfoiWwLK7fWbXK5mG8WWr",
  "key3": "3uUpVYzVriQ5WwVDKMxCid6XdmGAw18K6oSTU991kWdYuMftTnwg9WBRMgZWSqx1qMPNhqz7tai9WUyCcCEQJ1bw",
  "key4": "4yHXsTk2osY1BmMdYcW39braLJPBnuZBYCEvP9w3wihxApwAiheYaMiGDvkzJeXrgv7q56e4u9vsF4UMCRH3hwkh",
  "key5": "4jLBR6mnnt5G6pDWBh4fZUmeAvnbTCydLpa3RmSWv738yjNsZ8siQxVfDjJYH8QcazUNgDhAMonCURMoCZcr2d3s",
  "key6": "3XTpyhndfBihqRyi5BYcyyB9M5kJLjiM6SYVdoSqHDsTV9ubXx5CSuB9F4TXvNgwkE3HYQMTfHbzX7jZeZEqMfDF",
  "key7": "31fSUb1B8jo3aAcJSsYXQYh8HaAJ882SWuq3nSNRHL7sCopkX24pdV1f8aZFSVgztTb9qDcuRYXdxKszvCEobLMo",
  "key8": "5GgwC1uXa5UfR8fT6Jh6igzrhBMh4etfpAWp9Xtn5sB7oLQBiFo9VbfQbNKU46NdDkN2Q2vAS84xdfEJTmzH4qrH",
  "key9": "5jHDvQqycaASgg38VkBYKGdoHVcX7K7FrFDDuoMBfVX2oW6ZPuYyTVDM6uo31eRiTfUb6SZNQNiLSVfu8ErUirUw",
  "key10": "2jkihkPaMpqLysjbocgoLmeY75Fv7DJ39i1HW9ykPT3jP1DH9cW2JinhbaHsdTpNQAcR36Jt16xncFj6xY68J1BK",
  "key11": "2ti3wFribJ2WGbq12w8hwq5fLpjc6wrR7ay2Fz3GhuWNg5mD9BMsXeZn4So8bhHm5XiJdXwgK9cwxnAagyrg5icb",
  "key12": "2F12f9unhkXwLMz1dJynDoZWtnWBj1NoWBHX15VjdVX4y9nGHadfPH1ZRPrYYnG2rHLWXoNrGfSL1f9FGqPnFprk",
  "key13": "4BezkUPAsLiATpgX8B8qcpitTPnSNfdFSj71MtAE3GufBnVi2Ry1q8w5erbjAUeQTqcwDFwoo7fn78gvC3c733cK",
  "key14": "36GQFU5dPHu85FMCQYGSBnj7eLB6LigNiGCTkemCAkRAjUAzK73Xp3gcUrZWiPh4g1uqv9uFGrQBg1qbESsJcLNG",
  "key15": "2oGvjaD98aaun8JBwTimaV4EFzgKgxjVkeEumhEnubHNubeWeYKm5osmUas2WNhLPs8TDLhqXpgQSATjoWBxxwZ",
  "key16": "2PuKBvMaohNJ4GBnLrreF5wz9GyvkBK21qRbbj5iNe3bym78ckTzaoJXTS6JgHwhicBhbw5T2yD87uFgEMxnJH1o",
  "key17": "5HnYoYMmeM5JP9kHB3anbjQngRcNCrFy62wx8GEJdV23sgxs57CFXHdGiuxrpysSegeDy3qFAKQLg8aa6cUjYzH4",
  "key18": "jgYrkijRo6haz71pdMtcyzRdKSsoN9FHFinPGoF7hTyimnTLAtMS8uKdUsfGzqHvztA8DAn8Hz9MLVNmkxK7kpA",
  "key19": "cvfLQfNjEDDkoYHCk5HHzzFFYGzKRLZP45RHNVY6pnZgvrRVSKnH85V3J9ryRkBNkDii8nSCB4PLbWEMkCm9iBt",
  "key20": "bcRXxCTzdYCvepLYGL5qg6AQJSayJYfUjXa8jReMrMJD8p1fpve9rqkHN3sL5FBNinyRLU58Vt9gi4GhZzu77oQ",
  "key21": "2J7jniJyzdaACa4hAZxUdoiMtFDdPGinTMGZNx9FVPGu812m5taCtQzcJWCnjDePETEAVoWywAw4hEPSccjLYdJc",
  "key22": "2XPzBcxAaQyQdT11nGZLGp98ydiZHWHHK7AzMQwLWbqLRrtzDV3YU4hnj3HW9QjcbYzNRE39Z5JaMDR6LGeJ8WeT",
  "key23": "3p8FZM2kPsoR9cB5NhL26PM68JjjPfGp96v6gDyKajxWqeQPZ6uuBQP5RwBUD7BwkcWqDnwvy3HbeiNSAzagVxum",
  "key24": "GyNzfTvsBvMnQXzhXQtPjnUJA5ui2HbSZGo4ZGrWVHDirjcP6MmVb8vzJgTnn1eoDg37fDZpEx3uM12NmbCue62",
  "key25": "4u1HKag2oHL1Jf3nM5QxAUHCy4vfHwGNAu7PGypM8qq5JmVLgA64owQCcdDwg71rVSuLrojPyvMKk46CzfHbaVTL",
  "key26": "2RYC1SbNERKCG6xKVju237YfQvrKUAptrKTaGkRwoG4iza5WaFYs4wjH7fM3WrULcwpx6U9FLbnYQkNh3Xst2kMH",
  "key27": "5JatnAiPgBiaJqKTKRB7f1Ubcaju714UjFiM7VLfFPsMo7A5juFgTxxfrUkUszzmsB838JfDidNr7SeTh355b4kF",
  "key28": "3uTYgtN2htrnxS8mn3spCex6fGLU8oKxCD1uQMDvcETwGHo4pdWyZdjfX9TeTDaA6uA8CSoBX8LeSYDW6KQansDZ",
  "key29": "2ioADzREaVwHngwWfccAXAhwpcJ5wYbWCtsBsqS63AJKa3mZC32UqNnuHRqCYqWg8nCpYxMekKP34nvEnoQpaJsy",
  "key30": "W6cRidWVpPE9wj214bTvqq5ZTpcebA99cCrizse3BXuSx5y8kw6SKfqSKXUMn7miYiYPspgz5ZfLVuD14BfQhx5",
  "key31": "2Tk6FLpjyPmjyyWQnsR2WjFYrdk5GRmt3CtNVHjRuYTLGywCTJEMeKh2Cjt8MgrEeKgFXPKuuMfaz7LUt6YYrrxi",
  "key32": "3R7avSo1cE7S1FiLL3xa36y35WpZ5kF5tvHoxssFTjX8mJV2XeqHW4Rf81Jgxde12y5bKkBC6dRoHTwLGRCEmXYr",
  "key33": "4FKXpSQ4Sk1b3ay4rVEDsfpURo4mpF474EhX6s2o1FBw5VJ2dnMVUAwpRmz5dddTwCY7DQ3QmAjgh9zgruZThZpN",
  "key34": "2f8WLf95PECfaypfiaWGf5nw9APiyeBLMuqipyGREEsGNxwMx2mJ1eWbePwFSzqHW19KZpcrw5nAWZakA4JVu6Dd",
  "key35": "5hpCvoUw22pHtm4PG2qcEcMPYifqxuNNeN2Y9BxgpE4cLCZ1FCReMschvy9rwJmZtcfWezFY1isN1obc4g84hnUz",
  "key36": "44rQNc2ChU2xTNKdWgeqG2MPMxjQHRzKmt2w2B2i88CXPhXf723SYM9b6uTL9F2kJg63vd6XAvxShPShg1Fceya7",
  "key37": "L2ih4XFxF5mrD664dTUPRkfDwoSnV9Pp1eLJw5SZsmyKUimHw44cuwMYAgMWMAHHiv957GM8jQezCv3TyR9Wsae",
  "key38": "5XDbrBQNQrdGPHEJopUC7HH1UYKk8AA5dT27dfNWh7BK2NrnzncRU2cGjMbvhbkRARKR9FDy738vVPZ2ekGchyyc",
  "key39": "3QW7bwPwY45rzagsRApJ9deu5wQiZJhmPaKYaynMBwx3pzWCkwm7HRMx8AfnMkHmA8K5Fw2xawjZH1JNEhRwauc9"
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
