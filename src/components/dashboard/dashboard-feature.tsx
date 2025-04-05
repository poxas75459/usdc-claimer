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
    "5HeTfCpAFitdiQVU6jwnqPHmjrs1UjhiQpbZDC9sPpiUCJquqv8HbmcixkkZ7n2M1YC1pM68BpeyCqhnyP3fQAw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "652kTeMzJgFdiSiXf4K5bp85UxGkp6AW9KT8L92H6MkpHnpuMMaRkBCkB2LHVruhmEXpgZX86SiDDJECXnaoMASw",
  "key1": "Qu31P9MrZSJvdhZYATyUrUGuKENfKorDRsPeWvsjPb3bpsqkNUL21wdAFoFdcdXRJSmseG2XtTgnjGV25y19zH2",
  "key2": "MjfAHyEiHaB4QnCVDJXsndQsmW7q331FJMi2spuLhNnkHcBVzwnkoAej6xD3sArkAk5nvEaCjtuQVQabNLDZVPx",
  "key3": "2AHBMve9FoYvBStQWD3Ei1j9R36v9NF2pzuYMX5zhUL8GUJGq1ukVFXF8BGK1ndbxXGexmQseApAzmY1mFZjYpFj",
  "key4": "5mp1dSSQF6rvxunHgE8ZXXYv6bhM8KQxbaFRQZxGFmZtXfa1zY9UHdtQj88GM6SQCb7HTCh3KUCANre2Y5pjH3g5",
  "key5": "2Hx3wTwibAgZnJeVJ1T8xGFpJ3YPWmayJCPQJ3foLF2hDCQ4rHP3bpWWH9qjr4Dj8V6whAu16bb76qUR2SttriK5",
  "key6": "5ZY1iYBN2vdJV22rPjhaYFGoy6SPuWVxydU2WSojD6t6DC6jTde8A1JSLW6zhKMvaViGdLRYWPFxUumcS4rZrqrS",
  "key7": "3PyCfLLjTGiEBzpUb8d1uHd9b42v2EHs9iwf5jCBG5mk7u5jkRptAYP9K8TkXh7Dz5Bokj7gXbp5kGbtVQKtfJnn",
  "key8": "FX2k7Q2cRocbqeDUrNKA3ap5GDCBp4pPbarJcwBoPrJYY6eRZtDUGcMwkThvhMdpGLnEGWMxnbQ9WENu3WjUiUK",
  "key9": "27gJ8VBwnvAfCRytyk8XrBi2JuHkgoGdhZ8ar2bmyo5AKVVaXAkwPpz5RrikrnEhLANzp2cYZHRT3mzqJDMLS2df",
  "key10": "2uu4zmy7fUr8eDEg9ntvrsaLuU6f35rbPhGZNUPMRAwPwzi3AZtnYnKQkHH949zZ9zV3swnsMq9JQozns5qWTBUe",
  "key11": "4TCXf7MVWgf2qgCfEwszgcEbTsQnr7GDujptaGYH4684pDJJ6KUM79zfxYKMd154oeSFe7W7FtZuA5DJa9fekpE2",
  "key12": "63N9L4jxzFKcsihKyRHfBYKizPrgQmQneaNcK9LXrLtWqx233K9RhcH1WqPmvbV5NEeHN4dYzNpekDZ2zLWvUYhh",
  "key13": "4WAPMh2FQVW63e8BfKK2TVq8ty7ongsgFULAicajizwWQEzCLeoRzMz4RQiYxh3u1y45N6rnbos2E5o51p8VPSqs",
  "key14": "5TbUPMirZCyVBwqYmWvYsEWHxTLiUfNofTpNm4i2zSWx8byP7nCxNiH1go5LSmPQPYuAqAzFNZiR8GRXSygjpMGc",
  "key15": "5oc93S2JX4VnVEfuEGdwEvL6oEHF58HUoy7x3kFeuEov7BvcAMZCMLZvmvxbPzoaCwxQrd4zk1tSY5PR1p277Zp6",
  "key16": "4zjkCw2gexPjtjX7VijT8ae9qw7Fwv9uKa9j9m5F997nnBLbarazLCde7wSvs8aWgnSk7ZkxZcedScEsS8UN4X66",
  "key17": "3KQQBL1L6aieWsrJaS8muYH6EyG2eAYFroJjTdD53bTnVX4wu9f1RMKebAVHC8vTYKuShoYCCCry6Wu9zdU2hkTK",
  "key18": "4PWyx8xhiDXPYhbc8jhhNpdCxKZ1ob9Y81tpceqaMY9Kh1bpn2LmUL5fv3rTqskVLAAHQNZh1XbxrR6cub4cnvYj",
  "key19": "3xKy6mfBxJmYt3RSqqeAF8Y6n1Kxvtv218sputRbVA4f7jsBn6oopPJgKHqixUDGeHfynXMgd812fwiTFWAdexfk",
  "key20": "1iu1ttzdGqbPT1yLHvXF4ptkeVE3qzBXAxn5EGCipnVS8VX9FhHXnJw3ZgqTwfTS1monu1VGZU1PiBGB53WS4Pa",
  "key21": "2ZATnGYQ5cK5kALQJW5a19xrVggSPhszVrGpDc9xEU3XcBnyuyPfcm6Sh6HRkNYmDoKVeDQZCmiDDTxN1NfSv4Jn",
  "key22": "5XzZSV5Ea94duLP3FeES93xx3xPVn5cWaSGJyjtkoHbovsVGbVy1x2RJbR46943q5McWXhCSFcRqJmWAXzAQf6hW",
  "key23": "5WpmvFTieZVkFwZrPpvZfgdFJCuaoRyz48gNKaqUaENFQ9LkyHvGh3rdoakE65bhUWkoRPjLj6SqorPsywvgz1kT",
  "key24": "4GwudTXQSAs16TsBzKR8JQQQoDWksWdqcSURU3dALhho24EK4W14NRUUkWvdVwDhSo7VJ15BdtcF32EdhGq6U9dR",
  "key25": "AXctf3S5knBeSK1wPjqXeTnpKaSezq2JmjhQAjENvS3WeLvjYickUq6oEuwj3Le72vegnw767cuU2ZWiuVBRDp4",
  "key26": "4eDSmEQHZtm3zHmXdJSuLFD7ShKEVmoekCR2WhFot1mGEGaWydhodivNA63wHZGHKeXAWHdno3teytMu8fMSWoDQ",
  "key27": "3S4nkvm1Pi3Rqdjx5VzzJfRgDtUbkLLDwaB2qLUKrPGyh3dQ3DMBUGAQCnjmb56bhwpRARXVfgrt4zqMFYsiMFvH",
  "key28": "4H2KNzToSKEcN6a4tfD9KbDzTvdxBGgLpwBdvYqb4mw8jacXZoEdkjVErXk61q4DMBwMDwsMa3uRRLaxtbTu7TTo",
  "key29": "5XYPdYzqFcf6xcTMaEu2t4Ykmfu6ZbW99djaWJT5cmtYvHWdCdVoovBoyytPWAF3HuSF3A1a9VYQy3HhxuvTZF3y",
  "key30": "MBRT33TEbgJHHfSdY6WAfF6zPne7x8S4hSUaNSvoVLLUF93XQSXkHvZDYhfr4BK1NxV1xJgCb1YskA3H4963y9R",
  "key31": "4kdbCNwYQzuveqAsLFkE7mcP7BDc31uYdoRTSbDEnhzjyrrdoPAYndx21Qui5DEHbpcBZjdNF4wUPZXcmLA5AkD8",
  "key32": "63y9fVwXPZZ1BJ7ExYirbNUsUzf45oap5zGnMXBzZ2Uoy4Uh7654SiSByAYiQK2GDxsnnp29iYQXRuKkSvbu9AAY",
  "key33": "rbhjjSjJ164f3AQoSZF1WuDUjcs1aX83RFQuE9Pte4pVCKMUQgKb3VBJ3ZYEAtkbnTyzauZD9uFc8eGV1jym92C",
  "key34": "HKuJd6ZzGdLEmg8ihA2ezbT3qvZ4UVADG7ee3McmVAYRqejZuucdf2rJeQjobf3ZXhSVmbeQvBWVtRU85k5ZFfz",
  "key35": "5ZNpxBkHWwXpEVcracX39Cw58HM66xS5R5md6bwED68pTyDXZVDNnF5Py59tcLWYQcn7MrPHRiii2zn6mq6BYmyx"
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
