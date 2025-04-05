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
    "3H2MFsBz8Sc6RNqhfugEXa8i8dVmiL5uvPvi7aAZgXo5yTfuFj6gmXXxmtzUrrBf5esR3tYhtoJ1zmYrqXkkB3yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56g2jmo3oZzWdAD8Q29K5k8Fds1XFDUTJuu4gDu74FmxuwTbcZJNF2GfmmexpQxTU524LDkiFBPuyisFa4zzaPo",
  "key1": "2VhQ6gpEeVBMgEKDFNkz4hJQAtjeGknJm9M63XXzM2WWBbDo9cVWes6aXhSEG8yBTjBFZ8KYn2aMcadgo2xxwEhG",
  "key2": "2XiuAiFMMpGd6QZ9dY5NaPdCo8eSEs7CLify4M3pk5zQfvMb6SHo2ci1KE6k9qWwLN1JKXxszhjv4Dz3doQX6fKh",
  "key3": "xa3MV4oMfikdLY4hmMGKPegKaNUM9PPp9bpywABjYN7hk3xTFHrKHfUDc8yftL746ouiGEEoh3TL4Ss625QPgjD",
  "key4": "53hSgPhB4g13TFTXuHZRVWktctYhmLncrbgfm9jp4JdnM2fxpnzQWLfLh32DEBJ8cNspffrWnE5F4UFeg8EQhob1",
  "key5": "2hVUpWNtDA6n7oEMaJsyTYtCk6stsJ7NdbuAhY3CJE18fbMLdsicUARbmxeMop1BCifbTeiZG3XK1Q6dTBQkAsgw",
  "key6": "2T6h3UdBQS5ngz3zfpGhLwFhMK6a2tpZbZK5r7w7mEJUsgzzV5mozJAHF6Uc4BUZtCombwD9jpK8qTPKN3mBDMVB",
  "key7": "5oKt5rC5n1AhnvDf8vC5zxVagLknLAfa26bUzRVhDDSadqWBpaReVjwxYuWetLtVU9rzqERVicfgynk5yXVgUNJQ",
  "key8": "2XxXXrociQhsey3ktEcw1bqDN5HQRXEacRU4rSNCRnTxASQgTWqwVsTN6Kyyb6Kw7R7xTkPfGY1YUx92Z5jKy831",
  "key9": "Su7L7BeXraHqP6bopLHNEMmutytG474JScUuhCuAHQtm6dRRLigi72oSy14Fqw8yVvkJqUfKsfABm9Mkr7JqjgK",
  "key10": "2hqvdjmy8m7WXwZndcp6pP88t9Jvak2vbBPnCY6B7cGMS9oHVp4zuiFvnrndi5jrtXV6NGNPNHQsZo4o7cWWysH4",
  "key11": "3RY9ySYxFkkfznqdJqqZxuRYTt8CC4VGEbG2Fn7dR1JTUPAFamxQbocdHET2dwPaCqB4R6RsYDs5qrHufr4JFyiT",
  "key12": "12kjDxcoQYJEbut7W8hFqJZuJCGq6JU1gz68t8TmCvosgLKTzBrW9L2yU9cZqUc9xZAFN1ckZbtFXYzAYQgZK8v",
  "key13": "43mgUMkLbgXF1nvqVJBsXMrPN8J9bGpj7ABvQpMfFdznyd97Xr4XBdy9iN5yWbPcM5WfQWoN87FDpPcqtGmJaCfh",
  "key14": "3k5h7CEA5SnXFLLR7LHG5uUV3zjUquHFDBY3uyqKrrvtKo1UDqLGLPCByT6DbyrjyhG3eDn1rBmzhm8QtD865VHH",
  "key15": "34NtzhjupQz9xEyAjjs9fiAm7QsLZhjNm5DEku5njYmgGCpcyQxk2qVqaQwwJAKAC1gkjn86nC3BBTbbpq3BFdde",
  "key16": "4ydJ8T6mubSPu4nAwKyTZMWtH3K6UsQxaTKVsu49M1Kk2hV9Q2RRBTGE7kcdpKGqGJAFsSZFBT9JEFU1LP1snsWy",
  "key17": "4GaFRse9WccmjUZzDBhntdjBbWymY7PHA7WFkhbqsBnqm87kWCUPoxRaBLWWMRm4wMd9F49R8gT6y8fX4eqnC1WG",
  "key18": "5YUvZvvwjyVp1BAtwHK2F6yiFA4wZq8Lj4BSxhLv5X5t4ZfieCmJftKYkencUpdE5VpUE3sQKC1txJsie3pmnUaF",
  "key19": "4tLrk2jVXM17abZVFyZVN2zob33xkVL1puD9UfFy836KJfVuFpP66bXHrHkvwgL3N6Ev9g1ape2ekw8HiocjDAcy",
  "key20": "4qsrMHSspU9sJcGGvVQwzT7p3FwNbsWKLgWvv1znpFJKNCcU4Av4w1xnwoynMHVzwbiATidTAtPihifmWhfFLS7Y",
  "key21": "5cHDHWtRCPZNXjMNV98twFzhYWCcLSY9Xzz3gZGRmSEpaYqt1bacicYN7U2ifM4zXDGVoVx8KCj3jwaKYNuFtH9D",
  "key22": "5Y1FRZwPnnFWFNCStMTyZrZepS6LukSuivvARMGPdpzqBqxRcHRevma4HdGW6W8S5zaE2stHDjLj4hgECQPFDgHu",
  "key23": "65xtLuvEFRBiXKDhFrWCfBwF33ncwnv3M3KQdsVbiYgyJHGr8yDYxZBv3TuesL846WSkUyssZC56zY2KkArB9DMF",
  "key24": "39dm4eVwjw1cyPbwQypWbbGvwfQJKE7bBnC2KojxVdmMRXkGGrAX94hzWNNSndmceNQWKSDxckL9q1vo7fnFXfyo",
  "key25": "3CDzNN48V7PusEgdKU7PAp6v75vVSVoUkp4CJHRJsYLYgregzVhDrFFnk2s2GCc8UeyBxtBgvnSLUzGaR5AsUvxQ",
  "key26": "2wrkpEKU3ERJUMZidA9JWiPTPxZbZ8PthFMxaVd2AaFePkTbgcYzAmZk5jzXtRu9KddBHqfbh6idsY5ZJN8mZVAF",
  "key27": "3WiPnA8TPj2JCzDHwGT6sG7F5G5EdRv8djyyusRKHULczcom8uJks3SMbwXxuDpWjyXi3is9QgmLxetfUUAg9XKH",
  "key28": "3ibnkCth8MmLYsK7oVxnbjruEmsX85RAvonSicXM77iyv8ZyjapiZ6bytQbmLR96eMjen4gV7YuYHYRT7zB3Pc3Z",
  "key29": "5K7WDew6L6Q9ZCxVrg3cQjbKctybGaTNLKxLKnWZgoZvHmNvoao2vi9YiStR3Bn2PMtz25u2ofsHxFC9f2CVusun",
  "key30": "4YpG96C8GmzSwhVZ7qxuCtiDKcTCuwjHGFfEUZxrVCBCto5VFfJg21rNFFYWFfC6b7wXMsXQ8FE2dN7PYkU1b6Z8",
  "key31": "2jtmqkmKJf6bPbBJZvMKW6MmAN27gQakf1hYcm4dnbouPqXATYimEkWb2bkhNLZhZNJkKUaFjP3dA8jtkrQxWGA9",
  "key32": "5B8dc2CKvvGBLh9X1efw1MG7hDfbDpaz8aSRdNyc4JrtmHCzqgo33v11Pz7PHuqeTMqjjevdjAH3umcYJ1sYCxhy",
  "key33": "4dtTY5k2ZevhG3E2tfoG7Lq3UPts1fMSqxWWjJ9jJkZSdPUavGzPX9wSXFje5pvoV36g91SNwv5RhLTh4uckqqnG",
  "key34": "5YM1fcDpu4XoAmNZD71aNE7VYLAw8qWFrF9ZjTnMp9Y8GvC4uXRC63ZTtm9wYYbxdtBur1sgXcUydK1zsTk8xyiz",
  "key35": "5Gs94qEeDcQFuj77RHpp2nqGxWr8qjRQMxCPhqFYrV1HyQ5GB6AmRSo4VeXTsmDYRBZgBz3KJgk422WHTZ1xMJqP",
  "key36": "3iWumXK6n9g4jsjMd4Gyez3hdV7JX4HeUk4658fXgaD1ASm7evuyN2JWBsS92iUai4qoDqMQzfNrJPy94EJRi8Uj",
  "key37": "4gw7fhh8kDsfvYceQJ4oWf5wABQYDHLQ5FdGorY86iCLNxVNcBbgdhJrRT3ULeV4aUBiX2n3xGBvkNjVtpRhXfbj",
  "key38": "3UYicn2RsXYxdtn39HZvxyntBZ1qrmEPCiyckVgtWpSQPNDdzYCKgZ33HdnU4KnDeZGK4y5qocxVywSDDwGmQ8Er",
  "key39": "D3v94ge8mAukEHbN19TdQggUQfpjivQTZqTYShvkLhAC8KV4TTFpAYHbAdK1QdNPAmsmCA4uxFtTvq5ngCm26sK",
  "key40": "J4BShofvoZHHWgQBFSauqA33gojncW13mkoYA7fce2R9T5gvqWGgGXQusc8VcXVR466EKVMJ4MxYL93iJEB9S49",
  "key41": "4gt7Njckucr21AceuVxrwF7uSoChnEZQeijsk1ANnZMhJVZpfWsAEPZ8fGMupSGKdHiS4u2sEi1UkTQPwDdHDHeU",
  "key42": "49sj6V2XafeQLRNtevTqvq4gXtTo3AjGpV1a2aCC2Ja62ukZxYc5Ujm1FLDuP8Sy2FKoW74533iHnBEDnpL39BMT",
  "key43": "2KiCtbbzKbJKbKVEVTwEikHowzSTf8ARMqq4qBDkK7r5sY7tY8o1Qa1JkKxk7jFXZsFNUW9g16umvbYJJ8G5ssUy",
  "key44": "FFogUM3ohji2Sx4K4nag9f14efknAuDoWngqgco4UNGZ3fi5xZvgrHZpYGy12MaGSsewfPiK6uFyLPX2NQZ3mGV",
  "key45": "x2FAXncAJTZWxe1yxYcEqVjq5BTqdcNRvERkmPzGVKbMr48GqM4CHvHDBSxPeYa8ChZbCxSd2nZNxWHBAmzRbhi",
  "key46": "4T6XCMQKEtdbm2UtuUQQdGAPYXDCC6Viu6kw2hvumgdq3YtknT7bwhdA12anthcf5MdXa1uF7urRzHNZ8Zmktkse",
  "key47": "3nXJMpMWbL4M7wRByvexAGRWTBvKLtU5bNu9mf4tqSosGznsLxYbKeRsbDikNeukDwi3DzcjFFSxTQG3vgZfR7PK",
  "key48": "4nTLeNs87uGX4g6CaKrHqdhGKkWRFx8smw9iZqFnUx8cuAYm7GxNYPigabigUyE5kpBwf3bGuKidK8rni7Nxp8cH",
  "key49": "3xtKyonsuk5RrSDqgzEWwE43ToUmKixtPBBBgTfvFXDesM2mtWczWTqXvLoBrYh2wo9CNF3Sq711zyZ5aTXAti3m"
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
