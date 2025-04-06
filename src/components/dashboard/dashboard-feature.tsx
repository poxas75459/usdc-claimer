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
    "4JarMTZTojFQSFsoUnpV8nX8YdZVg3pEWd2pdR9DWugvnEpJWj3W3jNa2E9u88ws9YYkuquj16eeaMb35wGjc4Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1N3uzoWLAz45kQ5N5c9DRzmgKvZ4ozp8uBQmVu3oDyBd4aMbWk1XqMPLgnVaNuXuWg2BwFhmN73CHbR9ZqN6SJv",
  "key1": "4nymxtAXb7APNytAuRfpERYNHXNGiTrziY8ZVhuvuz1CuN8MWeNKucwRGCijv57htpHp2KZ2u6njvL1zwoujVjr2",
  "key2": "39djV56nmWFkramcrTPfdocv35DA6JwiGE4r3uRZsEiBD9ZtFo5q2cKYgwPDx4tLFxKkZsKm6La1jEPys4CJtnty",
  "key3": "4Y93sR2vPT2cKJdyxnmShMkZbGGbFfqDckPUrehrP72CBUZCtGQ94YeM15KLQAFeWi6EiPx2zyX3iXxstxj6EhxW",
  "key4": "4QMWU71X1yxGoqXtwzvPATQPKmoHvR6V9t86ksnr6eM8hkGo2FX8PR4WuM5Q6XHfndzcreZdrTcHJLq9JB9dwP9K",
  "key5": "q88joUSZwr7aF4feNjrJySzcgGN8KjkeWuEZ5RCuiG2HMgrcYYaqpPTFfVwfE9eo1nXqR3G9EWoj8VeFM5HYUrd",
  "key6": "5RjaaKNAW3FckrThWpvaGNm6jiGQenHaVGJeitnro532oB1ekrJwgKiwf76gsJNiZagwoBhaNvvKEWRWiPKqb4Kh",
  "key7": "3FFAHjCpkpeLyZjDvDf38q126wS2TCcrWF7CHU4oExZCUHCGsKYGg7W8VqeEKfbXg3o9MiJGu3yM78rNuhcM4aCE",
  "key8": "3w3Mb8wtm4rCG6z6FnaNFUaPGNmMZ6JJ1ebcVLgbLZrh4a4Yo9hkHiHRkcL4R2XAkgzaNJRWZRchv3K8NLs2e26j",
  "key9": "4wY4RYD9LqcWzTgj3nkzRyufcNwh9tTLEyQAsPkaQXGsT8tEV2sDrkJ11KiNSG3yUiNWmhAfLw8nCedtHo9qC7BG",
  "key10": "2u3tao3SyEqMQ4aaixCvYzypwRcoy51e5CmBSvL83vphBxH1w7vSzSPByYHi1xc4Mba3TummikomW9Yni1C9u25f",
  "key11": "2W52Qb1dzGmNTUMAh6UqRVco6t9wVca8hA2MfZnXGbhpXSooZykA1ZsDyo7s2yD6NmmbeXaKMzdBvPbsV3TLhesL",
  "key12": "3UjvVxpC48B6jNVUYUDGnRAaB9xa8wvP3jXdoTt9TK89uWpJHgaqWuoTmATZPNyEsUDfbqvj4CAUeztYjonkpADd",
  "key13": "2zHhNnD5rBZapzwbcf7h6m5EsCCDG4se7Lk91SCMiGn2du6XFXs8WokFkhZd3KjEeVAGR9Rak7v6b2R9r1Xe9dZA",
  "key14": "4vGDhXsJVzzMMcTNffwgbWRhGaov4Fs7de27cNQrve96NW8ZV2PTCeBtqP8S7o5GoBoWgcgrgsGpfpgJKvnbsG6s",
  "key15": "5sEEVyQzxmpQhVkXZKh25mzapncN49nFR76oX4tEaESc9Xz2hGh38E78iJB23o1qnQUsvtv4LR6ePYFXQumScjCH",
  "key16": "qVvnVb3mtbyVyHwrASb4QRGEVrbRDdwxMiCWHjrdsfYU2N5UxTDJZ5CLsg87yqpJPBuUNcW3si4FjkV2b22SqNE",
  "key17": "3Ftg5AX3wJPsSTGvmziNgoC8M8ua2vrS7GWU2jjKgjZC3rcYfNwsnXTGffEmkomknrwujmCA7JJQ6qvNv7cocoX1",
  "key18": "3HAx8V39CfAngMUqSoNwqY4WWPXi7L1brpvgrTBrA5hNA379C2RJSReXndmDiea7zRSq1wYxru1mDP58N2JsRCCy",
  "key19": "2eU77ueqt2NDKTutZqT9mWgfDBY6naFwzCSF3tyV66KNtsCRnqbREjwKdRzBL8mnPZAZSpBzeXMqbdZPGMDb6ZXM",
  "key20": "2DAGxofG7nkr8MsHuER1djtmHuvUt3FQ2uQCghb3742VhEkw8WgsbTsVoJuHrqTafY8eYqZn2TMc87qj1MNMvrKG",
  "key21": "3LnRmnZTwbWUGGMjFbCf1js2B3WdgiwR5V5myrNQdt6MFwtLD4NWjmkkC3KZGGgzARwygVjxsdMxA2v2DeEUeYda",
  "key22": "58VspsEeJ5uLYgY3ADJnmgupZSjQuwrfiNUt2zyPBqkvpyEcfq9rr8GjhwiQQqGXfcubtqb7Z4m86GYSzk7C5MRj",
  "key23": "3MMUa4YukZ67nMPzGHGiN7Am6szGbp4i129euYRi6aMgYUvcVAYiDCrfKZzBeCxbcUZ6AqtSJe444JNPsVAZCaRy",
  "key24": "VcusVPnwjueSL2oyHDBuFdiRsxTmTJn4pZPoDKGqnQjmJikS8fwi11a2m3xBNmuCe4XjJXPVfrxbwH49z3ZuTkw",
  "key25": "ZpoonhEBSr6eVDJ8K6UExo66DjJXR6up1nNP3woaWmjthmEXh2U9FJwmPXSJ1jhSmgvFFsx59qPaNybAWfzUA8g",
  "key26": "5coC22d2EKnKauLC3Xp4BLnVs7o3tgBXSNK7o3PECbFZcqn8K3C7jzf5MAUAy9WHovo8NowQSvvstigRTWk53vxr",
  "key27": "5rWRQPuRgdzQ9Djhwx99nvpbqhpHxHku9hU74HCiJRcKtkTWWvbP89Kfq4HdLVuLMHz9TiPWMRikSojXPp5Dfe5G",
  "key28": "4SQmkC4nSu7StDSJsL1GWzmT42PksSq8do1QNREV6HFWd72hZC9gAHNEJaM6JmsSgojuXh81KswEqkJ8z7pzYdjR",
  "key29": "5nW1yiJo1NfUMmpgNsY4wqpnV16HaeYuPd925g8roa1N1jn3aLURbKjjUrEd3mEZMEZk1hQvD8U7hWGA9EqsQ1Ef",
  "key30": "2cissZvsH29hyb1cKcyke1uYcASQvKLqjxAXtChFX5PYj1cp3cJLNFY9PbDmbhxfcGtw8sD93dmfyihkZeQPRQor",
  "key31": "5qzmu6xyH9noGtSxJNNwFmfcQiEaxGivwGAc82Wfn9Yj8pjGMAkZWr84aWwm7AoVKaQ58HLzapNBF6w6g1Q8BSZ",
  "key32": "5uAm8gtL4BUJYRG6ZZ9w24YgMM47esTdmZdw6tsDvsw81gqrY6kzKeiMi8V9aA9yq6zMUnSUmg1Y9WqUotuLGGJf",
  "key33": "4RehqaHqh3JDgueWX82yJLk2d8rp7vhs6xDBtm8nYcfZhxkiyA1Rh6uR53EsLneqvgaNhnfLJotjX958bX7DuNPn",
  "key34": "3hGscTkZNg7EA8TrGxg4GvxE9PW24SDwkzaxLDprQvhsUNQHbw3gatyCpdATCbXxnMS38AjpPsntmRLppPZPSH2D",
  "key35": "5tdGLUNK4kXPm2RKZ8haY1XDARPofd7C7iXXg8GWiJWduTrSJZ7HoqBXgbAopZDnAdYizTJEA74kUG4ATPyZCUd",
  "key36": "3eVK2FE1yHCMrypyTRc24tvM6dU6cYYZQJ3F7MWdscYHWd8RzG8RAdAkN2QvNxBeQmjcnzDrKrVbLiDfwc1vTYZC",
  "key37": "2f4eqdd3fNUMCBDC6AM6QMWg1VQXWPFHajXC9iPcMGYcJ2kPyTTpM37Y7NAhMF7qNtqpcggbBxDHAiNMKVvDJoQw",
  "key38": "5EFVJ5BsbBqsoYM3rois1yb4hN2TpL2zyBZ8fkkZrkRpHRJpWwrbHQBK3r3fiyLkdgCTGNKgbNgzuKbprws8HqFB",
  "key39": "42DXE4XXMrCntmYnwi8Khb6GQLvJiTg9JSajboEYAcTPbvvyPYYrrMsTa1fdu9XNzpgZChuYvRDZWzerVpUcKToM",
  "key40": "cQ9b4zxZm4Tzs5oHkSjYT4aXTx2nFrKCqMBkQKCxn5z28QfZV3gYoyt6MizpS96SujAQ67Y8r4Sk9ihx8CKPM5S"
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
