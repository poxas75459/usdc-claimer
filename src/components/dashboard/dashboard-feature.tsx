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
    "63tKyWdX37P24CaRVoTgxYw3WhshvXQV8FtPJc3xLvydqbCFWReh53zM9egPM9zDb4MbXZT4ADubRopvKC8TbMZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zMSTPA3i3mMiH859iRWzhCAEBjJY2JmL9tgSBJse13manxBBH8XNudroVGHQkaJswMLE71pa5vuTgirJPz7H4Yv",
  "key1": "4fxz2XthhhQKLFAPDicDSYKRf5JHJdWFGphZWsnvzg76oCsMg3TXhs6rE9FosuhCRWJ5MzB8nwnW7BVCxaQMK2sh",
  "key2": "4KsRSKuiBKp9S5x2ShBDWGd7pLq1vRTPqEEkjWFbAhymuDSEDroSJ7iwkGJKRQULZqi98Wo5FevPiBhvBCu3bDHQ",
  "key3": "24bAhWKfH4yo2DEHwRE1yJs6AnUVcprAqaExAdegKyVErZSyNofJPPT1NQGTuCyqoCe3fDjfDoHbA5Rac41hV85H",
  "key4": "nSq5keMGz2ayAKhrwA8f9w5hmt95qz9AESrBTRyVAA4QgvYnj74J4U8fn1qdEmPBq6KFSkECFEnC5RiN7E4NPH3",
  "key5": "4cZxDYYGZEZfZD1f3LEZu2pq9Ft8d4cZLFQzTZJF3E2kEXZdfmLYDsA1T84V8e7LbtVZNVWv8J1oBiQAnoaFpFmQ",
  "key6": "LumnzDjZo6Aw9pmMamJcYL6minH3PxDKhnxeZDm5DJb7rXiSY3fiULRD4h1hHMwyBeRhtZhDdzVjVn72p9R8A4t",
  "key7": "5tvPJKoBwwpNvfAh6yy3nsW1438tNihF6Hum8DyP9L5P2N94s5i9tfC4WhP1Q2MZbncXZCPw25FE9bzNvWaA9jji",
  "key8": "35EnCWQD7gVL8xHkH1XDkPMLEpiqFXphAL5Qu1J66HxYWrFE97J2jnt8rw7V4C2ThLWitXZcx4ewSjXHsUggnkqN",
  "key9": "3uPTYHUSjGKgtxmWQkGbqrd5tPk7MiDuSNVSHTkfY3pPyzxDQUNvoRLgvGgAUipN6atmuBMB7az8vksauN5mhpCv",
  "key10": "4RhBWBfvA5Zd784LNEiwJsYtrF91yQoSvLsmWsakMdH86FKSfNUWruHS5cDt9e1oEDV7u427QqVSisCwadb67s6v",
  "key11": "X39Ruh99eDPsSoFBvwLg5b6rmwxCd9VAy8rb9JuiHvuzMwaLcoAxkhAFZJwAVMLH7yoc5YJbxUQuoXXNFfrG9Bm",
  "key12": "2KnKvrBizm4QJysETPdkE7bQESEapTJr6CFmBsKa2ZwCFaEguD71Br5VLMnaqdCaeqqPB7fak6PQ58J4MjdC9SP8",
  "key13": "3Wigy8e4Z4qRHp88KMCvKpYp3Kuz4GRE8ZaQwVXShQq6iGYWPXWmMZWy3diNoxHcrKamkQv1uCWAmn7Ze7PYoMfK",
  "key14": "3uY9Rca4tcbhRmmfjxxwraSS1AFMxKxKS4tbEYhhArTNZXWJFCnighoZ1SY3HTEcvS59m2xZExe4hg1zcc8HGjJ6",
  "key15": "4jkteJN1icoREK2UKsj29uWH9TtCqThWFiotG8iRbnYpcWUDkg7gsWoJL1MGrtsE27RvjPPFwYHd2HWc8mBZs9vS",
  "key16": "2HzQeSs5nbgrz8wmzCZA5LfBYbXKeoAVeuJcUyDQznpBNkQD5F59MGXn6gXqQPh4Wt4Go92QFQE2nU3AyzhHEV5c",
  "key17": "RgwBmewXUkTgM5kxcGcXCp1De1Pj8wTC4v9GcyLVmeZSwHK4ZMvLUFiwnzAmRGdiKqRxGupoCdkfjCTMJrLsVJz",
  "key18": "5pYAFn9qtKvumbi37ihk44kAwgEHRXUtTCcorCXXae3ibNHZYDxZN3ZgRWaoPF9JwEqNDzAkDa2ekUMSbWc6NPUX",
  "key19": "4YFT5vAqeRbyEFbKFAWreng2tec376GCgFGPB3HZ6r4Apdbn5YCHnGATz87MCTDy5PvaPBkEHTb768akTtcbXdey",
  "key20": "WGWUhVp71TM5GQZ3C7LnSrcwL7MLRv9aRjKQvRaKxf5XiwY9zcwQ1kkbBkuM48JWupKTTxdb4whXit2fXcZFW5T",
  "key21": "3iX8oFc6uf4RXb6AUP7ytBQ7u675YN7ubrSNUJ49ecnGdcKqwvx3tZPtQXoMGowm2w6m4Mz4Vi9eNrrcfBenRwkQ",
  "key22": "5DjxhkVbRkptKiwZsNSxqDFz81xa1ptQExxrbvkrgE3wYDCeh4YAjPzEmyHD465194BCvNoZkeBtF8SuUp81z53e",
  "key23": "mN2Q8dUAhYZt5HSAPGUuLsNxRESeRnY8dxHzMYefovrG7WUhoD9NtE1pH6ZUoNY4uGU8FeDGMz4RDLvJc3DzNCA",
  "key24": "238vrB8UdgU9f3boxw5FJmMaKWYK18KxVUmdNW98AVrdX12ULAY8ARCrtPeTmR98kGFhaNjSpirMNGYchv874wjh",
  "key25": "4HtHi3mMGRRP6wgM5uoGtiV3UASumc9tQEDNtMWu2y3jVMEQaUW53qu59xLbdArZ6DvcWpyynH58rg2oqEcMeoKT",
  "key26": "5HAWgAkMWM4TP8WT8JoozcKqmYaUXYraS5h7tQfVkzkAys1T6Tm1GtsHBQezgjNJTppzVyMZJaiuYhCxe5c82jUk",
  "key27": "4wLx1YrKRb57rrVm4csiG7yur4dRpgWmcaGhSLPYhoyqT2Z9EUnFRMSgcGRqUht2vaw7tfxVXNSMJECs8maf9ELp",
  "key28": "5rW4zZZ9rRgNRhYRNAUsA7YdS8joqAt8BF46nSWv3pE9as3Crhh1QR8ufw9BXbmC64d5ryXHvTpDzRqBwqWNaqYh",
  "key29": "4Uu7wfUAXE9o4at5AR15d5ikvyaVALs4jhdj1bogGockUWZMKgqaabQJAvBwRr7BktVkTLgfiY8Ju9dAtqkcyuSg",
  "key30": "2Rqdj8Ta2MKPahz4ATdfHzK8XUjq9pnAMRnRAF6rSoQTJeGr1JqQpHPdcSF2NQiUsfGVCzHVLQmuyub4PUJyEAQ4",
  "key31": "3UVkWYcA7F374cBmZZyTJqu1F46rPihQ4A99oCJH9un7Qtr14LEWmgbURWnj6M53G781VrgqH8ZeWhx1S489scVF",
  "key32": "4KK7aPX6LaqqN94g4M6F61mXty41d4netQgaRVEScqqVTW2L3jRLh8zMtviSYQ2jxqWbZtciw71gva7rEoKswdav",
  "key33": "5T3G3u2sHLTb9yuVaXiCBhZekpCRGhXxE3KNjEUSX7htc5FG9Q37VQNkWQVSWa6ynJVtxkCbaPCpjPcJvyGSibVB",
  "key34": "5enPK6dNPkHkG9quj3EcC6coUnX8cWz6d2Zu3K7VNhwGcDTSwciJwHURpmNNdChY4nTFNnhRQYyh9ksiM4zHVawH",
  "key35": "2xePEDgjANNLJJ3KHP3G3cqBXrc2ucKdhsoYJXNaAKYjzEyn9ZyTs3ECbQy5TG2xmuV1AETXiGCPmJ1tMuL9Qj6M",
  "key36": "4nFqk2diW4LpagQaDGcorQMVJsab4eFLFU39VntEwN8wkRDNpSgH2wYuRTZ8C57axi8T1PQJyBbtEXyiknWgzcY1",
  "key37": "5epWJBp19BuNrmRw2dvfdhQZ61bKi7Bvn3fR3TKfMghVE6EqU2hwrxGgdNm7N5NYFqbtsaDsB6JYvWEcuU134PvS",
  "key38": "53vLonjBUsqEb3FySkq5MjBvLS2PRueeQuEBiFudLrvnsaEnfqphhrAgNnzcSN7NDi1DkeUEBvAJKucyeqyynyQj",
  "key39": "4BQ3Xzjf6UkcqKoUixMdoDzpdFhHvHdSN2M39SWELCXfdt5A7mQwcY53FpjsLZJDnFLLXqPv6nZW7bVYkqQYzuJr",
  "key40": "3ceVzeGRrwZnzNMVhRLusoHpeNcX1dpS35KjqSpmMu4YevEcVuu32nyTTtm5RW63t5tDeug6HKzqvv5V1pMDS2NT"
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
