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
    "3HukT4sVbF3NGtiGjz5iJBAXYXG335cXpWstyaod8KqgxngiDMaTcBs2RchVxzkyLwNRcGqyY7kXyCvYZVxCqkeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s8wMZwfKQXGAX7kb9bUT6Zd3F8jpGAVwRbr5t3b859swpyhvCWMYfWPLWGMsW3ieBWk2YFp5imqjgB435zymUG3",
  "key1": "3VUUtVLmW26SWPXNxsk9V8qys5VKJwoT4LhHoiEqppTCdN9wDiabu2RTXPhUCQJVk6SpHQYR8EbfN98waW5RJ6G4",
  "key2": "39Xq6D6F84kz2MZohaigdqGLWqL8gbFEBMyWuwWcaMpBy98LYPJEbtLjrEc1L5RRR8LLz3d1T45U8F6z1iKMj6Bj",
  "key3": "oVLXodHcRih8VYyx72h8VSZU8Ty6d9sxyATJSzk37gVA9pRnAVdticTHM6yPCx4srB8m9idjip5Wibi8o2sHfqC",
  "key4": "3VJkyySBAp1FJafNnERrktztkCMufULb65GEQYbydZHCpzxj5JRkK8ENHxTow2skUFRu6zkXzJJ7oxUgvD9R6HCT",
  "key5": "23dsR8HxiigyhBkewkyJYSv3f8Z2cPZuQH1wS34XsQN8YR2TcS2cwLddfFGUxDXx5H8coBtmazxLikovrVma3Ujc",
  "key6": "2TwE3FU16f9ZN395TbeTiMEuK5mWWDMU9JUzczvNz31cUrrnY8TNkq7iALfU8hciFJEqEkgC6QNgBrWtmU3b3MWz",
  "key7": "2iJb8aDcQ4mP94xChsUBzwhxRAu4iu1iXcJB2HprBTj1zbBxuJiK8ThAsdeAayEKCo1wyzEujLtRnimRA1UedG5Z",
  "key8": "5iaqEh6xWW3vnZ7o5LfjmbUPdbosTFw1e7aVAz9xKGM55xM5nXhrtMhZpipxVqfxCXRM46wPK3FB8ByqbLkcTUxy",
  "key9": "4ZANTLCraZ3ifKfsSszQHhZYvvPxEiZkYXVho4aNE9Qgv8i5pQJrHQFGquTxQtRgGQs9cErx5XdeXVhm9aQYP1Mj",
  "key10": "4Vbd9eHYUAkyDS7Rre8HjgEn4Qjm7zTxrvLKn1m6tRSoFWQXAqccB2wyugKAYuSENppNrxd2WQ8NN8fr3mdCfVgz",
  "key11": "4cfvgvDCdcRQUhGHeYJ5CkHuBu5k8NkmawcMaZQz7GivEXcV4YUvYZBbpsqBfx24BmayrCQuTdm2MCsD6nQzuCHr",
  "key12": "4cCcP2rYnQhqEjo9GVT72cApfvXr2BRTHM9FKyD75e6YoRVCyXpww5BYBjnj7ZzkoBq781gQW4K19pGaUTSRNHj7",
  "key13": "3mrP63Tjs7DBPZjcXkE1RiNuke1v5gRKbQHWcFcZwjJTchyuvbkvsZtQaR3uNZGEMz3NrWhV6BFJ6d7dN2gDKNqU",
  "key14": "4t2XbfdyNKKQhrZKHKtia4KJ9DAkYKCsyaJbyC27ub4G3zE9ciUFsWuRJxU7Z6n7m5M4GrTcfDsqdrXGcQT64kvN",
  "key15": "3HJRmjLErWj9VPUz5cBwoFjZt6BLsq4iuSh1r5nP6ZAGuYkhLSQNdfAXazcFFqLLptGaP5AZYCEeXjwUsyBDwMZb",
  "key16": "53HF76xYHYsqB21CNGeU69vUqdgHwLNGL3eNVEMA7rsQsHvyNHQh7ecHW3XyZt7MzY3tqFDbAZyk8CREcqGfsRXA",
  "key17": "5s5C75GXtewWHYKDKwr3Sgpfj5sVoCivmQZdeEFARTKfHTRuArzXnQAwfp2wzZCkmUqgHGbVJy48JXZqhPp8QA5q",
  "key18": "5gaAX4Uzr9926Deo2NNvMDpvxmEzT8W9Tawt93EPvrJYh3TGkMWDCCTxzafbyxe3qWzeE4pgTgvuA6D81Kd7ANkB",
  "key19": "4pp9tkxLGQYTKTcmP51q6aG7duToqJCPfp8pGF1kaJibYdGxNj7VsTdfpR3mTSf1CQWAkiAYYP8fqbCqyfFJRnh3",
  "key20": "ZXYZLwEPhct1ZLieBARZYeQ9rxEh5vRLDm3t22CbeBsZxGabhQ9hHsMV9Vn9TZzEf9Q8BpgrtbSpK5zfmgxg5W5",
  "key21": "4F9wGJg6K4ZPq94uoc4WZzyQ3NaAW14MohY1QFZbZANzKvELCQMy6UgaH97YYTb3tETXTjNqkgk4h7oDbsoeEpUU",
  "key22": "3czDsSATbBn9KBuGcqKAygjc6xpdvQx5Ljs8uugCrg7rvG8rj93uKNe5jA4kiaDuFGTjJqvh3PivCpyjQ4x7fw87",
  "key23": "ePTZadE5ezLWmi9aKhr7WnCo1csrxQDKEXQ5F3SQEW1gS4pPu7D4LqX49aaecU8DMqgjhaB5swNQYw31mFJRRnW",
  "key24": "wfVLUGG3XcNah1Zoqq4Lksphw4Uktz7KHQJ6jtiEay1oaAFt2R1un2o4DMDKcohkg4N1M9b3LV5V6dxh2JMvspa",
  "key25": "5MzSDkxdR4BZ6LxRj6fozVjujyJLAkzQEvBtcg2rhX7FNuPpBQ4QaUsXqvRduYWMmw7GGjaFCxthGUVzPXAinbMq",
  "key26": "2t9RTGVSrUc4PoMLq7pwHrVH2TdKVL1EfnyBiTy9WQnE3uvcGpPPALJpk1EmUrfVvezvNXLfChpJxAGXvEVY2aF4",
  "key27": "5YnB3NpWnvGht82DEshK5wmhvCZcsBR7LBSb31TMoUKzkyVNFCq5CZo34A8zeXMEwPura2o1939MeVHU7cHuRaef",
  "key28": "4ZYi1XtqesGkKrp9ygzgUvrHDYvnWxYQPMrH5Z6dmHcfVwCKErrAAWzf9pRjZVLAv7R1uR9FeSyFtCU2L4vgu3v"
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
