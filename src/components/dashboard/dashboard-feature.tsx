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
    "4BDtCosqYHEasMhWTrCnfavaJZW7bNZMmj8W6uJJ2McQgK9xZ31igmcWmqTy8u3EvKSAeYyXYENK3uBgrTNZ4chz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1QceAmKRxR2QwSQ4hVnNLsm2a6DDgzhuJj1PwurickeHLU4133VrytLJq6buM2aW4epMJUeTT8oNRKBxwjQjn8",
  "key1": "3arNYjJrxXtk4PtC59uypdAawUXvjdK9naZpi4qdPTethQ9bnug6FVKhuy4GwPKcw3kw7TLYyh7rZCnvGcbsTELj",
  "key2": "4FUncFPj2RQcPgSQQezaaUfSebGgdWpoMKVLYen6RKvHhV4V5WRcyN4XbA58dteAyMVAgjpd3omd8cLHfsxy7AUR",
  "key3": "3qyzVxF6LbZxkcd7QGbkLK6M9TF21hCuPM69sW4z2agwNwy1iysQvirdk3JPsA6ycjJDpEHtUHxrxjHjr1FV5qpo",
  "key4": "51a8YuiZ2oKipA73mwTYwdP9FpueWfFT4yR9qhtaYW9j38KyM3ftbRnsfP2pVKFha5VCqgv7hf2Jf4fGQ4d85dDg",
  "key5": "2fNmQe6L6ymcR4GAzXR4FxSVn9PLrDDTNRXpFnC9Ym3Xp6qJx4Ju15XAs6houDt7gvSkw6X5qcMo6sdcMVHrXyw2",
  "key6": "64nmV73whAcaHRLuPhy2uAeTojR2UoPp6GfD9b8curaMhKAaM3QaPoSVgJMeu44gJ2bbwXaqFKBf4sHy2v3srLU2",
  "key7": "5r42NiPGJ4w9DyVT7LZwXH94qyiNCrcacPcXa8gjooY9wqwuo5p92gFnHv65A8rKxTV9vsu9bvy95gk5oxXkJYiq",
  "key8": "ASFRxFxZerCPB3p7c3udZzixvwwrG8VhReUarmp5jQnkbjmTyVaQxo9WqT46CiZ5LLQsHnzETwmcbU4J6teBYJg",
  "key9": "3ddceYTQg2fjXqsaWiBhhvWymTaJxyuT7KzFPqRCrob9weYcB8CV4RbXWfQvjAkXuYbxKvnaNVLQTg18if8d2eWJ",
  "key10": "NHTKUtDgHpTkvxqrTwWdHVkQeP7GSERPJE13NpadGcsQmamkosoKuekokE5sFjQgUW2eraEtS36H4PXU8d4nf4u",
  "key11": "348raRTDbX82XRwVDBPBDeYN4zFfuq8qJZh7AoHwH6rvMxrTrzCYepqAc6XhkTAnyffG6iMend1GacmoA1v8zXkU",
  "key12": "3Hv3MRKTSELGr1aTWufLG64tcvJCuqYPa1phpgPMPZWHJmLdHQ8mf31YnMwpM1zsDA8HFKfupzXLoePA4QCCamtR",
  "key13": "5qDadeHnDtsLNjEBj9jAAD4suJAUkbXKWmxB1sAkqoU1kPUCbjootnbq9reTy1fxxLbKcXpHwmwH7Z8HfikS66MT",
  "key14": "2svhXmPYMED9g4TgpfxFL6gpEYj1mtA2hJTmAcZJAzjtCNzQYFiR5eNc1sewYQJe28syh5GMUqrgy9Hejdfs2D7D",
  "key15": "38ZR6ogsGbxNDecxi5CS6nVGDGQg2zbXrnbBtj2kXenMMZhRcsnF3iipGZkkdg5GMSNbjjTYrT9sit1rr33c7M3K",
  "key16": "2kHXY6JSXVGjrw58CBzmLb7oY1EJPz4P1mLgTKcqyWexiUpo8SQFQDNivA4gnzToLiYo3i4ZeR53eT6ShVzo6pt5",
  "key17": "2wzutPNfYFn6c6J93Y1iDFxzeC5GPczqpV9Wei4WZtrDpE3TK2ggdoZhefwU2vsgdqoctn1FUP6qFknnMybvzHxN",
  "key18": "3ViZ6w9eitGSZZvMDidzHscJCVGRqUmTqnvJLFkCPGi2HUJGDdwAqqR2Hpgf6vRoiULRx91XMUm5u81ttTnbYw8V",
  "key19": "bsS7MdMjb87eHibKbZAnD6DohR6GDTNHBCKtFYFL3Ridcra69o4sWSzHR7nAHvnCKoXqQwzDhYdvUKBwLXCGk8F",
  "key20": "K7WnCiDt3rkNTpdPzte4KW2Zeys52FAWYsXCCWwPQygBFgb589Q7gXYbSi8y83x9PTyAVVAksrVk43uYvD41cNS",
  "key21": "5WYwBFjFzM3LBPZakSDNn6qvAbBEAkFNghSCWJDPXnEQsAZB2ost6hoSDWRSLVMGoxUkaxaHpASLbPpzxEE1QWFh",
  "key22": "4EDRATxc3DaHK2aYsPHBmJPgoNgdnR1Ly4QqVbftT91wkvSimHWviaQ4KMgoisoGN1QRZ3xyEPFNEJBheyqjKp2j",
  "key23": "3xvxb7ze1NACYYGrTzpT4FfcQyCCLvDiaEkj4N1VLP9aKz69oJFpoTDqS7JC3XKPYehxGNKZFWeUz6s5UixNuNrg",
  "key24": "4jtTiB2LzdKqCgZ2zRgVrXcJ3FZcUJeqhRr31JfJLcAQ7VaMDJf8RH5JBHoHTRGkmrZ6fgv5UafmSbQa1QF3uh4",
  "key25": "3btxZRUMvY1kJLkdAdGQSmhgiXu75STanNuafgHiiTYAPsRXrC6aqkbJo1MNTY3a1fKxaAHi5TcFsWVpbcFFqsdP",
  "key26": "29PJnw7hJhZwUN41oobrsR3GS7XkobjXnVdQdX2eGR3chJ8zVyyCcGZ5bPnRJrTJrXG3aiyMMWN8Zp95ELa931iP",
  "key27": "3aiCcUvy9DB3T8NDzgSjFLM37iLYYH935KSRSYwqnc1EDY41i31k8YGgyMeCwCNLwzoDjt5n88x2zYnzg9fnn7kn",
  "key28": "254iHVa4BrzisyuWU4qyNUfTUCCA8GLnM6imE7RNidpsAKkM2gNbbsrYakK9XaMcf49qTo7tEc55PKDfxeFTU6VK",
  "key29": "21X5HZ6xNECveXStsCxN6q3bUt8cVfWzJqEzTgo39XPHRwv8mKj8XPQdpCX3P7WknGtBwDqxbe7nrxyNJzEw7aQS",
  "key30": "TD2yEQuv7mkBoAgyuYCfmMDHWMhavm9qfVXTRVFhviisW55HbY52mALBGi2V28bEDmb7cVdxJT8hgvahQfSrXmv",
  "key31": "5sD44f485G9na5fmfp4fL1hBNGQHbtVBmrPZ3huvN9zSfBnrvGZgRRiYNfMnsLu5TJjYZQ9isnHjLCnLBr1NCd5u",
  "key32": "3eT2ib4nL6Mn7kkAWZCtaZxsMvpsjkQuCVZm6SGpaXL41tksDAdjYfcAb3QzshphxtXG7NMDFuXiTHdMiFQzQedv",
  "key33": "4gBMVLi8afWQfjxtzKhRZNADA859VHwxTP8czKJiZjo9CRqoJqYqTYDN2Lj692Mt6iaUN43zzmp1cTr4Kv5voddh",
  "key34": "9BoMpFSG1VCNpWCzBdXobiJgvf2S2WL1QjbQXvDAxG3kRh217zNwhtsB7rGqoDcVqrmFQcRhYw3XJH9RKue2tPq",
  "key35": "ceD2ffFBW32Fiiv8Kr9bFTV87Eq3E1gakcQXZkXdmW9XrSvWK7YAdyfz7KKquXvMw1wygVEZbEGGvxTBoroXXsy",
  "key36": "4iECqjn6zRgfDdiQNdqHWbCMXDer6ppudcyfioZcMemMDjK1FcCsgEcUErm19F1FP61qqE6nqmP8nghYQ6ot74wS",
  "key37": "3kDCMtTKCCzUrsuY9X9QxaGrGgqJ1rj8hfJc8ncbdRVNmhepGbFJhQffXVHaDgriACoXWxunqyRvgai9wf3zUpSt",
  "key38": "TFh93sL7SxHRrXmUD3Hj6ENWjKoXuuQmwA2oapSAMvTCBa2RqzdZrBj8TxCp5nDkg61YucnorvRd4GfXGyroKsi"
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
