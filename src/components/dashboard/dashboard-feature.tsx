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
    "2meE8DXcLmuaPKCGPLogkyM7TLKwPjgNTWq2STpSBD14SMK3a9r8Zao4vcXbiUvvCNHKeCvpmKxrQnRHKd3PSwKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjphpZY5DgHJEiidNHrg5L76NbELiD7RrXBDGBXfe39FpyXbQ54nmuDXP3xoeogXnCr9jdSBvB2grQGd4kNRWQq",
  "key1": "2gPEu6QLFgGZwfJenedVj7nS3BLAvdtAdZATeSyAUQ9yFvDML1p2B9ZSPt9zspd8vPV6nXdnt33PgiF4mXMXYc5E",
  "key2": "2LMycm4UK6RjeTnV4AvjxNEGATEHVDQqonj1b6PD5t7tWeX3wRXRC89TDUk6uAJKWuvvmYPURTaBPa5p4T4YoLQA",
  "key3": "3223yLvGWhRQi35K3AN3zbY12fzVncRGezFnXUvP964poZvFFv6uEHUKX1tq5rQ3sbu728W1CsnLQrG8E3C2bhLj",
  "key4": "4XBWX3cLYk71rSYvJsp7AgJZJkW1a3TeTkysUkei8fJfqTxGmNrYXBg7s88t3hSmNriKXeQ1nFgAaUHdKhsgS7HM",
  "key5": "akNY5MSiyezBxUHPz6UjHqXMU88Q3YQUmaJZnnNJmX7ATiMQnmdMoPRA56dn74xKS7q3D7Tv81zWjwyLCiSBwQF",
  "key6": "54voQxNsC1jWtmZx59oL8ckn8JUy2pKEjfQ1t1M58ySp2S12yU5iFFM941LF8ZrE2SmAfWdYU7UrB2cMzXfbFoZ8",
  "key7": "5Qtb5mMCKm92kBscFBjc6iJYA4n4SjzkQy44oo85Tfk1Sse3FVdUiQcRDtQwjGNDwmuTsGvt3ZcMkvVewuaqBobi",
  "key8": "35RVgPfAhWfZRjxVDYNxrDMn9wBJiuvodYXLem7RJs5XVu3QMjakFikvMizxaKiRwiiYZz9cM3sgKQNLBR239DdH",
  "key9": "o3BFBTPva7DuZm6uewoW31EN7XJB9QfACjooHGokj1iWt2FcyzSzAWpvLX5X35tBPKyGDyWzhaMZMtMkkwuuSio",
  "key10": "3ZdTWgMyfJiU44HXudAnoN27FUhyazr4Ve1j3w8wE7a24oYAKUeoews3y9VVy1DgP8z3kfmt86DTnbD7bv87pACE",
  "key11": "2kVHEksKVDkzCDME23tGs59pPNsFLs1yBH25oGqm6aNyj8xXGM5KP5wJ2mrY2kisRwGdHZgvfQYaT1WGn9atLGPN",
  "key12": "3tG1rU512rvEHboJgi2Wv9n7Fva2aY9RJ8nJTTVgxQmdAqr51FiXMCDcqMyQxKE5Hw4HESgQMrNCiYq4rSbhqrdy",
  "key13": "4wieANcE6JLWJE19ammycfE2uniUjPDEL62U7PCmgppj3zNW1nMzLgkKaUfExzVXByMBujGMed4Kwx298wNyrjS9",
  "key14": "62piwBPZFuT6JXvuwj85BGS4hyjFSA13GZKH5n1q4zXwR1JzXWDQgRc7FQ7ZDBEUWxVzNew9q96r9MsYNHdLfgbH",
  "key15": "3yftL6WNiamfKr1RSwQuC5jrYVgnRXxxvUYSduLpKy3d3U8sbkp1T5o22k8okjyz1kTGp5iZo64mVAdA5mTaDKhY",
  "key16": "5MgNvUr57xP2KQGfoLZ2eypx5SafbwNPs6LYPFhLiCcLVdcaaUNy26B7WHTVpgRME8DoQNj5DW4raKjphx82LJzV",
  "key17": "4Xa8Cs72ZzXTdg735nkWLVi6vgVnDpjXj9yZ7xAH5eAbA5wgnaksq4xVWvavRjsq1bYS2mBu3A1avHS9oRQTACGZ",
  "key18": "4JBL8UBmgxrQ7YwuWYNHt52tjf5jRFDcJhL4bsYwLRXyuicdH8iU6e4Gfs8GtF1m3QJF5Y8hrEAL1ef7hEABASt4",
  "key19": "3WquMWBURv1fEZJxmyAgvBMFzoHJiv18yStHLySDCMZbMJAdXTuNbgtSeuHfeSPdyqU7fUW6RcFY6xq1my8BUUVv",
  "key20": "3zbadghABz4mBLo1eK9DokPPzFV64ACU5hron1yGPRu32hteexxwyDMhTSZESWL6ja8HDn7HLjLQnAqR67o9mc6f",
  "key21": "4k2rRRJJaip63KMMBmfc5SG3ymRkZfMWtArBpiYh8ynpHQ4odQ9YuxDU29JPbMQpTZ432qUWCDoYVxZYyK1CuaoW",
  "key22": "2Vmto82BniGKiWZfMnuK6izLWWtDtxEtQ93YvsxnzbxYVQxRx2vnZde8qDrBkzpRCELuCvcERAAmNFetSZjGtFJJ",
  "key23": "534eWz3g9meNWs6MT8JVMVSaCANJH1NHadEuBU7r9Zodm1J8ybSYEymBRJpP66MYjQSvx2CteQ8Fxqc1vPBCyTCG",
  "key24": "qw694LMCDx99PM5S3AoY3eCDrp9hGYK6ZKnBPEx9WrNeQHLqhYEexeWSnCWmWhgRHuJPxNRxnn4ivUns9cGMgzQ",
  "key25": "4dFzZFnJnMMgJ1PaVMLkBtur7VeSoD7PJLUxAL4YQiKTZCCeLzq51F9oV1Zf18Zwm2LDGfaGV5eG2e1tR5sfbVZY",
  "key26": "4sCmsZ4FCPGnxmfgbLu7boXuVME5icj22ctB7mUYCWNGKhR4TCkJe6whRSjffeQBnbKxAdgy9QcbwHcr2JjzUb5Q",
  "key27": "5ybbzy1S5WX8Jv2fMgNb4njMx4yLe5Hnf5JaSD5NLSEF5emxwqpePBmREhP8xVASLr7w2VJbG4HkNSeVQk1hL3bS",
  "key28": "5XkdLyp6vHoYBoLxNUa4JdXkM1iCrrRrgoPPHncUgSFb4HsWMX6r4hazC75NBGdFQSCwAtZpyPT4AC5Df8146jZH",
  "key29": "3zTeNmAa8CK2kqWeU2mYVdiKzcBnYqbnMDbjHRgqY2VbwFMiKb8dMTfNoEUEsTMc8amj9zAbMc1Fw7RbdVXGPmC",
  "key30": "58iEFgJPFhegHigFct2GxwFnZM2xa6U8Ci52anUwdhnMPFkiA3qt9sYLfCNkL8WLzwMwBaxykzm3tKsomTUHTfdm",
  "key31": "5o7k7SQ9ipUzrpfMFztRADLRrccvhhFA1z8tgFMDpoqc6X3pmZcRbDFbqTBbVTk8NrrTmEtoT15gk6pgVeTN665D",
  "key32": "2rVSt9eu3aqEDNXg9hvXRpNDyMqRe4uBeruxJG4VWc4Pim857XreHeDg7VgBAmxa8cWssL4VgTTvuDj23bSkzRe7",
  "key33": "YPYjRQrnaiVY1XXvG2j3n6pwQ333nasy5wJBeJgtXKSJYmyXwbqXxJygCJTiavUAzBdmMnXap5vv64gRsYvWxmP",
  "key34": "4416v7xd9dmcV1LLXKvAXQigqC8E4yf94QtWkttZiV5sCQPAFKV1xDS7vMUyUAKZvGB3AgtSMFv9s44FWE2HfGMk",
  "key35": "FeU4GwmFfihAF4jivBzMrwCFD4CqX5RHo8sdvVdqJ1vCKYCpZriq6puz2mY4pTgmduwJYS8iuXnKMBmiQz4wu2m",
  "key36": "3xyd7rSAnsc5HuEo5hRr1DBUaVG2Qait9tEDxUTRBzthbUhhpzS6AH4mGJrNYfHJ7jqUWvGYKuzhqX2yHMY1ogej",
  "key37": "5axnfWCv2gRvcdwDFQwSsmdLbLpqRfTwVKpLPxQSPoFKx6FE7fsj6by7q2fw1gQmqmQdYPaGEMczoDNUSxoVDeHu",
  "key38": "3a3TZPHLLDBmh63zMq1bVhHmFfutq232JDkofzSqY5unEQtkNM11wyzcM1od6YJFKjsBHpUPfa2XnT8BZj61yQJq"
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
