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
    "5VB3Z9Zs1WtMKXH65soNta24c8u9wt1eYTq1tJXQ24ad1E4v2v1JVAprMZffVSvLZgkZ8yotqwMtvfeC3gtBdath"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kRyyWTPnzvrDRRiCq7x7Dvce9RSERyFutak12KJPTdAQMgjNBMmmX1uZ34Lv5JSU4JAjNTUDGxHCkZrtyfRVXoy",
  "key1": "2RbnN7rccYXdXRqtu3TouPt47E5wJZKFyWw1bFFeCAAvDUsdjoiNwcy3q5tuhutro5vgtCiEmRbBCwAHmSe9b4Au",
  "key2": "57MjV55bQH194CcbaJw5cGPKmfeFCqUQVx1suRLHr2JqYTuuYDq8SVjGe3b4EizxgDCkgNBLGesv2pBVHbzCFPuu",
  "key3": "5SQaDvM1Kqw6yzxkhvXtBGJAQgiEN8VghvbZ8QX6uDZxhs9xhRRobCrim3PyajH6xWVMzFneZbnXRBGZKvkUuG5w",
  "key4": "2CqxsLYMZ5Vii2L1AzGTS4bzMkZqdXKYfZC7ZKyHTeoH2orbLHdoHrj21FKh3GvhXAz6UiQM2R4HXU6Fq6t6zXuW",
  "key5": "38MVDD3j51YFzMu6LpS37RMKUaBdYCXpkVLYsFpG9vuXTUcVBvowNNbEYNTZB98jqmix2f4kArWNRvpED2ugkezm",
  "key6": "4yxNb1rFVjjbkdjun39CK1kBcyi16D2qnN2znB281w1eiXsGYARXEtDcem1zqgnMgbbLdx8wQNC4rDcre1kYkQma",
  "key7": "2EavQKXfCGmrE5GXUE2Wm4ugBeoYRXit3Bt1aPo7PWEsZqdnFustF6eJB3znkD1zruxUHpHsb1dhKtvP2EcW1DrZ",
  "key8": "3hzUUW2wmYmZDY2wtiV1VifaKN2AR559xd5LnpREoYj9kksoBbtSq46ubriuVUspUTmfxvQFB1FWF6KKjrY5kUAE",
  "key9": "3fq3Cav4Lz3m8PHeDFMjKQ8J11AYvppQX1DV7692Yy6C5VTaAn88zUJXD2onA6CXpUr6LHWq2VGnM1cjs4r1dr4w",
  "key10": "33RLVpYSEy9rtpRWacyUgarsHkAR9eXUtANLP5WQPHbQQkDpRGXLa6NK2fia7CoT56sYQrrZYyTD5vqUc3E7tfxD",
  "key11": "3dAPQz5C4Pwng6rykg1CKkwiFkcoomBbjg9z5WAEB3H6nozozg7gW7Kwsj9tWzTH6Jq19CznXWg3yGzCBw1VY6nx",
  "key12": "2vyhz3BJZWmxSPMRW5WTQodKdcKRac3QwPMkCowDvPxvRjXdsuqn58WS12NCCz2ww5rxpoSdwv94Zmbyj6vMPbZE",
  "key13": "36D81uqSmKayuM7FnAoYzaKjqmZjGwQFtQpymsosMKah12XjSt1mMDivdi3P1M7Rp2USA9v9mRhdJ3CEFDyNEven",
  "key14": "5HuGiLGLhsHexPEEdRPUqDttHETAtkWBRDwGE2ANxxgdmPXvUz4Y9Bh9Zncw2L1YgdsqMjUpTr2Wq8QZGF53dsCC",
  "key15": "3txp3MpzpWUqa8ZBq7N6aZzBwqqvzf3ti5cn5z95b2YY4szCWnrV4TfCo28auLx6MBVZoTqKzE9Ftz68R4nuqPHt",
  "key16": "cbKBFHfjDugw8eFQVkBBw6j8wJda9ivmYF3LjUUyigKyhwhWLpTYYDmsYF9jXEXgQJ7U9TETuyTTm4ajXHT2Z5k",
  "key17": "4exuLVgaP11eTNKCwQ6jUecGRsvEn167SbV5suE9P27WtzdfJKm9qpY8kKetCwb2FWmcDSdPxdQtV9bN7DzWPuKs",
  "key18": "PBRaNxukxZ8FtpgqfCJmKjFaSnJuhka5Hqgk3NAfWcbTcHiEmRLcGqDdSegMTjN2H1e7f538CqxAg6QdXuW11sP",
  "key19": "jorWBUA8Voh2ByG4JfX6AYri3NzoVzXuYDrbQmh2nuEt7cNtFAoktsepf7sWQqSeMzHHBDCNZWHMdXbHtFzmjfq",
  "key20": "5uud116XFGsCeX7sqPpZB1tzPkLfwBad6MWd2aBz6kZkt3UKVpS5fRWYRL1fXNmJkQJHwF2irBmHraLEoPmw4nDg",
  "key21": "5AAYrJJmwpvKpsPoabemjAuf4F9km9rHXyApLgd4BKQZaMvoyU7aQYigfqw3KQnsCAepCdEtwAsQhtygFMjFoGV3",
  "key22": "5Ai26GutKbiGt6A8AGokTbrjWn3VKYg7PcByGNXoBRyYApmqRU3snH8wqozeHTgG3VbwtBQGb2F4WKqKWBubXd8k",
  "key23": "66RXNEjyDssmhsNHDuHzaHtTP9nUnk6vqW4xx8ms5Y13JNVSJu3iBnU6c5uat7ruUyByBcFq9bjW6QrD3GksmKkj",
  "key24": "3oYW9nCd6eixNC4Yo5tdp29AY2QXt9UhDxA6wfjEXqAADtUw2Q4pKiR4AjJzNnd43HuPpGg55394i4Lhm64GTABj"
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
