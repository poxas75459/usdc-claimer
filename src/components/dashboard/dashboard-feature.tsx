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
    "dwV1hJ1zFZNZ7pqYjgqMAnPgkdty35SiKXBWwLVZ2Dg6ETmxrNv4ouVRa7pJJfpejEyDYjaoSYusXxNGCjD8YfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32caYZNKKxTEmVDPnKw9Eh9GSjcVEQ32jKmJesH2d48Yu4JUY7uFfuF4sfXojCZszy5smwxaJdpgz3DypquemD6P",
  "key1": "3tHbNN8kFwwNixopjbbZbfahX8bL6TGVXhpe1TEMjij4ige28pB8pPaHcZqb8YVPwoddHci9tnGuELDzbPm8hoN8",
  "key2": "53NMg2i7KVBxbSiUpYN4Ym1FphnqTiKACN2H2odj5omTbYa7fRhtaF5Hdx9mwq2oXDzPdVC4xtYEUn6jgRmioX9s",
  "key3": "5b6vETJ8tCsRr2EFGsh94qPjisa4NAHV3h2u7zrZ79epbwczuUwksTfe49DShX6Tm3g59JZ2fgQsT8MpCjGbaesd",
  "key4": "4G7gdBjkL65CWssvXzHReWcrBZFsMbTT9bUJkqokAZnGsTavAhg75fcuQCdohQiQMRBLaKLJCGoFRsL2N1JA2HU2",
  "key5": "3ydjVK4GmeQbTWYamycrq369feQCxMQx9RbWKeAZdE2Nk43pGpyYrNmtr9XW4WLPTX4xKmMmHY9X9MFjBnnZ4aqj",
  "key6": "2ydkmkyKPnsQse5wCWpWiuD8BLecoNpkeq5NzXZ96LZEB1c2yQb5VLxfyGqtw1St4FRSzJLd3j2pziQo6QkL7KHi",
  "key7": "671AzEo7hxDZogGDukvaua7VQ4u3cuGnTVEt6Eg957dtnQfj24pKj7jutrmkvapLQZStwFfx7JRNeBdbBL3g1NXN",
  "key8": "3YenwbGgAAZ8uSfpLuAA6wVkTgS2aSAKNS71LZSYjEyo3WsHVuB3hXJR83D3sFwcqKJbRunKVEcy1BvTxBbBWeXG",
  "key9": "3qhhz6jEUpwGayUhPawdyifhrfMRnkz2BZtxz1T3kQceUeX73WjEBe2RywE4tiw4yAGvb4GKgty2Bv1a1S66bb4y",
  "key10": "28F1XTF5gpRk3EEjwjW7ptjUMajP7C4vTCuqJHV6AaKYDigrq8Xk8QKV5gwYfZWfdCWRkFd1r4SWPR1uPKkAPx8S",
  "key11": "3CtLXdD9fqDpTdfuRhB1qqCGLeGnd8JJLGQgZLcsn7knCEYc192MNQ5bQ7A8btV9tNsStKfBjGbX5e5J9ikB3pdK",
  "key12": "4hZQVixqQ96QQ8T9kWniDYRnr3r3MhT8VQxLqE6nXMhnVRjfDNQqabTcPGoSXwBEYJDxtajyQpTZtScJKkXt8jEJ",
  "key13": "288Fvcj1Qf8J8jUNg8otiQWdQ5cXgSY3LmCx79duhj7KHbobrFS7NXF14onFgLDm5RwMwxbKXLoezuyDZ7WYQw4Z",
  "key14": "5X2MUxwMrnZLvorxgjqDUtKrgNHiw1CBoGSVjjJfz8GkDD2j69Y3NXcuXqqbZkQG3PY4Xf6FnqjTxiFEyULe4uv7",
  "key15": "4XbKL18aUWg39RAQWmJ3tuUw99W8teTQi4GmG6N4iSkUYNYsgSES8TCtwXZb66nNpTHLnPbcweuhbNMmvxtJuTnd",
  "key16": "Fpg1uqpsD159AgraRF8TtaDg7RUFBFH4eZEznBz7pp5pgv8mKm6EMTCfHU7sFsznypAhX43wMUtmdUXEukhof7v",
  "key17": "ugQjQuAg3KwAh79Wc1gLY8oxfUrhN7gNUgxpwE9dkBWG19gyT47kQH2KmXmj9sVmBHJxWLRYnJVkpHhMv75vivm",
  "key18": "5bFfKTPrUauDz8h7UPHUKXsMjLBtkdiDPZHPBaB7JtbCqVR25q2CqQqZea5vyaKp1Vxb5cKnC43cMWYFYTbb74qy",
  "key19": "GjbKp3DbZogvySfGeNYUNkHCRx8RVhfNrGAYmyDgrmwRGrTPTLK58BSRdokCvdeQytSQi8zu8VhqC6ADessqERv",
  "key20": "2J8NKFqG37u6jBksKquZeVgKzKojQqj1DF9VtBB5j4WqW2za6BK8BWU1HeFsC8Kpb2JWN2ENtCYAw3Rti7aFjiEp",
  "key21": "4tEeLVhtDGa78eSFTVP7ckPoKZdAcdrQjr9LaYo8Xa1Q455RT4YC2mg6xsFstsd4ubuLwLUARAN2JwGxS8Az1ACi",
  "key22": "39W8AyowygZX2KaFTZZzj9z493xQpSLQcb69xkdScdNW4Fsja74bo5kwotiBGG1jCtKRBeGbavWiz1ZBrn1xNdtu",
  "key23": "L8QgfpoHUVUX53y6dBw5UHpjZryPugYZFK6t9jC2H39PBjjxxSTugdwFTMUFhMDupWwkrs4wqNrK48z3cjebVxo",
  "key24": "3LwjQkskk2eaNdjrKwgE7zsSxGhAagVAUfy8v85SrQiko4Ny6fdJuaX6ZgjiosNcturEE2EpM5EL56rqejnUQcYH",
  "key25": "5mA2xVM4Fm1Ws7XKNHymQN5DAtDCetesZPQsq8nHEKusHseGp6L1VKdiVb2LdaRcZzA79u4j61ntbocqz2MNSsDg",
  "key26": "51nQqJDM7Xube1gfQ3cFTs1zefWKu9t8FnNgkfniPkgWobErKYdUbtkzV1akF2KC44Z7vfGWJGEJuYzsuKXxA67",
  "key27": "3qufRu5zkMFkKaJYMXcm97fLyVrs91cM2vgtEpDvMeDyJophZGzfHLA2KwgNotFMxtkHCwbBVyegUGJusF7FhoLy",
  "key28": "37LY1ZSTngLwr7o79H2WgzyFw1a4zA8Mfho5T6SQKVa2YrXBH9tp4SbA3N7PxTUvFgK4u64L5GspxifKtDS7Sw4u",
  "key29": "5xHdW9Bjso9W8Yntxs9EvwxYboBsaxs9bVeM9on2t5PbgfVKHbDdmgBkmpPdRFj5scosNDmEMPANBPB7pmfwpoyc",
  "key30": "5VfziwfWF4AR1KeDXDUGwhKFtGn3DNT3g2MAPPAbrxB6oNvJgQBBwno4Lri678SnzgTtQ1e1dMJ23b5CLoLT2TNz",
  "key31": "2tRE44KaMpWG2KXC6heF87QB522Eh7yQPyyJXhN97MKGnjnQFYBTp3BvhcnHuHCxLtFpFk1FihD6mFA3Dh6WBLQR",
  "key32": "5weysadsrM5E8mFzb5zcpf9YPuWnZFiPKG22wDent6BxeRQ49kqsXCkw8G8MULrrdKNXTVBdWArZaBh5jArnJKWu",
  "key33": "4AQycpWhR3ThesN2L2WmAh1T1X3Bby7AX77oqLsTwarGjNbfbuUw34GSdRbwH6ngyYmWrvCfkoygycARtsUL6oTS",
  "key34": "3BKhjecSiqTSPWjW2qZAPnk3CJsrResCs5nqVnjm7qYN6Nsyq4JHEroXymNtWecnbuH3k8QoygJnV5TJnXTsDAVU",
  "key35": "5AVyQgrm5b2wGq5WzEJshHvtBcjfChDQYKeb1c2Bnq5ZQ2q6P1Lu7UYMYiiyPcr6pAp7MXHLWa8LWzMifrGozxMA",
  "key36": "LHeWsePqifmB3rEyZp4mi1XKfXcSBhajK94CYLGWH1ajTp8xMTU2HNfsUQWbQ7m789GURFpqc3XqLvDjQ7Uap2a",
  "key37": "e7vPvtLumqe9aCJHwoGHbWxxaDN7UxD961Tg78jqZavvZ5fP4gtpX2P67fLjvCnWb5o71Va4pMfuF1mCvKQc7vi",
  "key38": "2ghRvdAhcEMCcsNkL8K2t5QgTqhjEZZTzkZFryCYm9V8FUxfPKuWuYS3Hs1coaAo1VNAC1R5ShKMxWGH6p6zb37A",
  "key39": "2Hj8p39LW4KEHZQU3NmBLtRdvpSmtws2AWAiYDV5noi2LWeD2y5b66vqFSXP4Hwzi4hK2YnEn1qLC9rBcttopCE1",
  "key40": "5joZ2sd1A8jPmwAvFJf5VU8DctC1ThsJhakDnooLAPb6W2qw468q86vYr3Mik51d7rJWURFo9vS7gd7DZDYWArS",
  "key41": "5UhY5xkmxqBPWcqWDxa8zYtaGnZ95v9kxKqwyvppEu1S7HUgovpHRbJxyFnYKZBdmmmV5LEkeVKaq6a9ojiGXzaE",
  "key42": "3magAd5BN2zTXno9yao1Rio5T9ojcM697QFKXnEXDsDkgYWQnE5rEjx2FZAmvY1Q9yuxUoLstPvJ5Yhqahopsdz8"
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
