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
    "3S4DNmwqJZJgGeDz2Jwii9vwGm1mJnzFgDZiHdqaLeBah8RnTgGoNxSsoJcbeSgmMBowt4ansEVez7h7TrHGGTeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CFsS3KHgwW7ZJCxmdewSwmvhUHwegViSj2pqt5osQgaP7J9eQBkD65dW3RgUeE2zcBWE9xW1zwcPKjNN1zV2B3y",
  "key1": "28cAFr9pcxw2rmpTyRi1mhqmswQrkQnzEpVEfke61s5kWVEmG8cqAVXTpciFh6rWC21ywTs7VCvnxikbiXbXvJf7",
  "key2": "3TcK4YyZu6ViBFBtx2zbDQHszy3gbwWuZh5ZwkLhMHVf5mMkFFJ1EMUHocoYGS147HqNfhYqAL7UeUozuxtv2Zw9",
  "key3": "4DHMetDbMveyVjchzGEu9zWvzmwKBACzui7j3T3UpaN6wkVNohbbHTVTsECYGpFkFxsueKQLNzEEX9gMxJYoy8ct",
  "key4": "42JPpbLAun6dD63B3R9x67EKx54Vf3TQ9pZ8tXNgGBKjtd5nXMFwAhzA1XYVGcfL3mFT2bhLTrP96zj6GPpECzPY",
  "key5": "3NNVLjuHQ7TBbyKSUzqNKc3HZ8FCfRDFxzBAK1sMYTbLT3AX1ioTtwRP48J1kNHPzghK46hSgJPA4mXLaSd8a34d",
  "key6": "3aCoTBEGKYZaDnXJGVcaWkzGXyQ2VvkM4nwG8prXjzwnpaNBgzDyZvxBgAv2CTa6zpbwQfyEpD4z4dX6Kn6FATsD",
  "key7": "5YNdYdmgP7UGqTE3A8swJovSkHP3hE9VyEQmcr6CsXyaQJvuXRwzUpdwovFkv1qgmDzsjF34uMmFv7d2MAyAb2zk",
  "key8": "5dWa5pqJ6o4ZDHHX7WwoUwc8zFC65BvWb4YMgmuUsnegEQjCfjgTCLeco8PoKmyXAGWUi3zLJyN4hQjiRr4HY8m7",
  "key9": "2sEAqaNSwEmz2GDv191qy31pErRxjFGcfQp3kAmrgED1PRLo1sNhhB6dXq81BsyYXAdWizHvjZSugWKUMsQpbBrL",
  "key10": "32SyZLPBgS5j5sVyKEvati9dWHtvuqvvzdNHr1jh51TkK9uon91ik74aXrMg2gNcgE47ftaQXKPZPDuS6J2PLMvF",
  "key11": "5C4bocrj5ihtdJG2q2PEdPVhWCrPyyQ2CjvWH9852osAnpqYEVwKMs9x8oMMGvRf9FD9U2qccFk21n5Zfkza7kKN",
  "key12": "12jjvuVjnqLnWQTDQYbus8uQ8Yo4QqRdfWvWBngv2sydoQdVHDKu2kY1WmHcFPkxMjTjdppP29CN9P3aG1FitdV",
  "key13": "2SrY3iY8YQBcW1EShobQwsKf2cGvrn3DpNw2XXNjRDzL2LbVsAVkU1dHU3oQAB5cBsM9cRaHmwA1bK3nvzgmPazG",
  "key14": "4nhWL9S7jh4YUhVBnnFFCtCxnqjcBBztpjC7Ebu7f2XoEckz14L7by4Suwj9nXXW4tBdNaGcJjXPV2UhMvCvecP6",
  "key15": "3x56txBBW7YrSCRKbrHAvjHcUaAbQvVdmhQxMqkwABZnbjFup3CeCiEkogmKUZUQkvZ8DXFfTL6rr3WDY2WAd7Y9",
  "key16": "5pgb7FP6S9PNqBfysdRCvQLfTcBRWbSzCmNd8vnNgKj6haSTGyzrVezbgc69h7jjQu2PDb2qffHMUGU9mMPEdDQj",
  "key17": "2HcBDc4DAwneHxhwhpWujmuyjsX9QYV7mVnR3oasmSYZK2QVkUjKhrXiDLJAWQKVNPDf1yj1MC89VApcq3NFRH38",
  "key18": "2eQeygrvMFpWBCdiJqo1Pt2rQMgAxsZzkBAPy3nmetNz3rMSF5rE8Q98WgZBGeWa7oKMYdXWDnjYbmogZhne94JU",
  "key19": "5D9Fpp26R4QzrKVECGFPmYdu9zTYpTcz2bBgFEYboXdBsRjWKdbW7sZqQmm3DLVRSDXY8cWC3kYYq2MRjVonnNqW",
  "key20": "QDEhi9VRM2KyQUWwevJoPpPFNNVU6uQfjwZ7aaNLnx8mnLyujFtAHguLcU1SGbY258QnZ5mF66v2r5hzwLbW86f",
  "key21": "8DYKfMMCKokNnFEZ2tCNPJmsFSm3dRUPmQdk5B8BEBBU3rXcnWCoVkcZgA5Y6yzmo3GtfeNBs7xiq7qFbyoicWK",
  "key22": "3cFKoNHhEfBj8H67CcMyaJvuoaicKzxiCjv2zaEmA6DaQrizjXNh3LgiPbyUyPr5g38EkQWi83cXwKiv7onfWKA1",
  "key23": "3CaGcjm8FMF9ihpj1748D1asets7FDEUhRBX3M8RN97aa2xSbJqpj8rE7gWRV1mFE7j49vaSb3wy75jJAUoMrP2z",
  "key24": "4uSe2ukfPnDKuRLjZToFxQvdiBUxuLYQAnpunQ7JuqKebSxr7qkq7WcNaCjz7TofxZgUdCTdn7YZ2ZxtZXQb6NNA",
  "key25": "5UruC93TCawazpfkp6526CYoTA9y4Pg1v7E3981GyyvuNCWmPPcesas2M5WxQZjFhsHvSk3CQ8anX6Mra2Er47Au",
  "key26": "51hDmDmAkQTRwoTeeDwASjkmTFWBM3K5fzcXQVd3KawsrUXBMWArXvhzXjXw1ytquPw4X75HDXgJ4pv2jenQJ6GP",
  "key27": "4aA5aMFZMRoSQr4NzsiCEVmrswhMeMwJ77T2ph6BA7CNJ4JwvFTQLsAu3XhSXmWHmGfSydEZpqKsxHVCCUBLACCt",
  "key28": "2TGRMPLYgs89ubLQvu2MzKMRpV1k9SinPzqjbq4fJNw18aR44bri2K7C5WTkD7T1ra6JYagyNiij5NNCUU1yqC4u"
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
