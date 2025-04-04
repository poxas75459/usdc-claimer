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
    "3RfgKpx6duTeTk3qxvYgaU5uadH9ZEJjLP9PCSZEM4xCBpyesT3MEY1kE161Z8LCC39vF46P7jMTEyiXv8uuugPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3ef1gz7sbLxPwKeNFujg5QopkRzT1q1YcXA6xoreUF1tWrGphxXJk17nTtYr46d9auKGh21PQK2zR7Sn2i8Yun",
  "key1": "4C9whspGLJPPNxopuqKW9z7GLahpoVAwf1LguBprztTZswUmDA7UF4GSnb33wEu7PMNGZZqZARn25B8R6aUeZeDv",
  "key2": "2xuPZDrZaYAKnGpTkK2ifMEMGo63UFirDzh2mikxGSmvGQ9zLoeGVB6LyxKXoJ3u3TSTJcY1ztFs2h2Y6kfrX6ct",
  "key3": "3cvpZuU1HPvCpHVJqmZ3vh4eeqJt1j5x9KWBPPKkdAYrhhAvtA4Zz8iru9mypj4pZWePbbcpv8JxVdkv3JQzuiB2",
  "key4": "48R2WESbfcFfKwd2ebmEKDcPbjRxcC3KVSEBsFUa2XBaf6ZTmjcTRfp3a3ZEYn8XBe18nHbZweSkt7kkAc4hRyY6",
  "key5": "3LXqLE5EaG1PdBDBkEt2xxCF7oCDa36mZ3h1N7VW9jRLBjE7ZoDGtsUTQfdXhqDq3DYbNWgLXQa7HL31wFGha2Rb",
  "key6": "5RNNxHmEY3zxJDE8NjekK7BH5RMNSZrZb7eLt3enwvfVoa4TaQgvsTr45Ri4QUM3myaExYvUeBFGR4SThriNWZrQ",
  "key7": "5K4m7fajDxfUo681R6Sbhv66dUK6LWQ3BfoCxuH8Lxv62QoiSS3gkzDHc7pKMJWw21AcS4ut1FiAPM1HMgbk91n3",
  "key8": "3yvEsXDXkAYt6otkKYBiqHjvzGmmvFCnhJnBnstQVQwwo7pnsZJK3UWesuuNcMgKzB84KTnkFMoY59aMtXzdb4ak",
  "key9": "sLCM1626Cvh1sQrPoiPGFJK3ekNye3PAaneZS9bkMyr3EZxAD7ACD95nnL7DyJ1ksUrHvhgxoEp2pmaV7t1HYqB",
  "key10": "3BUc3NAVjM4t57G1L4Su2FxXUqncP3E9Jt1pfdahRrmhdcuq5Z8Xx1FTk6PNcogvpYwXQziyBX5TWmWwCaPTXwJK",
  "key11": "HKNtSAH8Hm8Kk88PJpKxUHmqFLXXmw8Qks2oeXtFFy1EbF2RLGr2fE9qkr7cZLJ9hCiGNpPWLhu9Q87EtorasdA",
  "key12": "3eA9eRFtqFXNn2oMVXPESFFDb6YfLEmjzkeADFQLLzLjBLLJmrhReRZrGnRwzGCP8c3xm2DtzEvvxMAJG1wXHQcz",
  "key13": "3AQWjCtxxSPUAjw4MiYfkBmRWfCMVqU8FfwMg9RokukWg1Amf4ZthcLgTZJPJ8MZSmeqhZhpfDxrby6Y8nBhgXcx",
  "key14": "4hebTZSpvetaCs64w9ACk9XLYUbwMkUyyB8WmdTRd1eF73A7niYYRotyyJvkwFp99xvqPBm1wzSHp5wjn6ZRz51N",
  "key15": "4WhxfHXFXuZAifzovFbk9ejGNE9R9kJGBQwuM2DnSR3kL73XNVgzzFEPjJTXTehNMHPgUAXFvbn9XxQEbyy9owPo",
  "key16": "3cP15XTuTS4zP3b85pzYap3A3hpFEqkHbQnu1RRRqQ1W4gXvCtshbQT6yKtrrcNzy41jFoTBx5sGzSxJHEZQFr2h",
  "key17": "2UDhNwkZTDismkZEJDmm1cgesWHJD7bMVtcCyXxjEZ1j1qZMWThpuxZtQLUujhYqQeHcTRSUNDApw5KFQg1aNkbr",
  "key18": "5qAqX5qaq7popDnYh61WFW1qXWsAhV6X4QjNuhPAVU8nvWvke617KXj81mKghQ4piRsWxfqQkdyxMW3YmyrKAnAg",
  "key19": "2QXj7edDiMMdR37qALDrit2A95iU5DRhxnLiwhy1ToZkWmARR9UeMVpQyzvDMVWSudKkWAxxY8KnDhruhhHLHPiH",
  "key20": "4i3949UjUNaJVhRz6jT9DzdFFR7QdvsnjhRDuKF9hNLqNEydftLtCrFU5AYTF85wQm8j9qx9vydKv5sXSe2i7u7Y",
  "key21": "EuiuZhCSKdidPFAA14zM3EM2ZPpicvgtUnSBkdqJ8MfobAFWPb4xoZLYAJd1A3PsoWvpwJcrWtyAkjwmEPjQQaV",
  "key22": "5ewsVjwhy9ozZ88WNuwtHRzpeEQp2MZHXGTm3H87pagjBmYLShomUy3EfHNhgYqHVuxxRJ2hFKN6h8CS9J3jeszu",
  "key23": "2bTe9eMxRb8LychcctKguHVWKzeM46RJqezzUihFrK1aLDKnj2jBk3XQjeCnGZbHcpiDPiuh3YdRSQnYfykFG6ue",
  "key24": "3LivgBt1PLLDd33fR1r5xsqgPE5yf87z9mGpWaTvkjvUXEkLfRuQirdNdaB2RQCUyoPvFUL2bpZdHusmym3tWqan",
  "key25": "3ZKE4e2oWYz1sqXybjt8d8VmEmZVBtKEyprNtx14BRXriJxszXbZCrMwFvR2NQCJpuaTiF47ERfbLRR5ur8gVMWT",
  "key26": "5CXRZDZZpoF1miJSvuKDXcraDLHtDBTmhXg81Tqq4zMLx4bT9EquMpgfewcV5PK1iMqy69i8QNFwz4PKHruzUj3E",
  "key27": "29raRaEinUuaPifnULaSKLzW1Kz8wAuXzAvqWESQWWUcaYc9puZnsGKMXakYCF5oWftrDJyKBUyrjDAnMykJ1mrN",
  "key28": "58cqfazGZAjEERs4sa3ZJeur6xvDcx82EmbF8VWgPd34ELrGf67QN88EAa56YzF9w9aPcMoC5wZRoXCbY19UAafr",
  "key29": "uz2FNivS8wo8ftY3jSoYiSYdZ2DrGoVZoNB97vpJXhyufkPd8aJxPAEJsqZGcy5j4vCKRhwycG2bcfasrRzZiqd",
  "key30": "3vRoxmF9HmxgDNWX9nojSVydzXSqV6V8G3za6i7eD84DKmKfAXZjsKqhW8iiZyPX7SqNJPqRe3ubfFYWoAa5e11j",
  "key31": "4wdyGQRjRDn65v3pYEWYUw3otwy5pECHa9AEtBpmyjHT9FcgcpwZHCCty5oFVHTtGYVaW3GHcZLfrH2WL52NA5TD",
  "key32": "3F9u326RpuKfcZkmga12QWKeCb3FCfAnNweoDjZJCDCZ7ctGBLD7CbZW2pdqXJB9NvwC6k4vsxcECCevv4JPTV9W",
  "key33": "5ejJ7pi6uGPmZaq8hJqYGRsUKSC79ULjTHPYhVHmRQVpzTCraau86XqBWW6AnR99dCrkW3Js1o62R7mXb7p3LLfz",
  "key34": "4bgaH7DaivBZRM6yDaPL6e4C112iFwaKqzjaQ1pDnxruVdobaymJUG19VoLcxGtQxjF9nroUFqyutJ5LjpdibjCu",
  "key35": "R34cG6ioZUCcCfvtr7vrVgpy16kcG5YWC43Watk14dvxL97HjKKxw3dGQE1vLYtAPEJuxJcsQAwQAavyrkbNNt5",
  "key36": "2cudwp7FVkUg9PQACN5abvKR42Ld2r7MPjc4u6FZqXR4CFgQytNTocyHYKoznhFTYCZzJg6KgUU8chJtA8SoZKoC",
  "key37": "4YwE1G5gvomA6kc4vZevLLLn3c2eYx1kDVEwdtHvGERecCLYKaHc1Zz8M6RBayix6T2gSBXncNnE96qqR8h4aeQt",
  "key38": "5NomgvzntPq8ZkSN9K6UEA6MMfm7VG3k6sfjE4vDFdN9szwPJCQ6sMSH9sTZV9XRt5iMo34XU6ooYBuLvGnJrck4"
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
