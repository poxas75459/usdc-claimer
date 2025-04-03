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
    "3KZBhesBFJzDj8QA6pxKaSFB9DBedFb7GhNW23ALoPJ2WPhfQfHrT1SKEEQz9ddcwxPxt4xEC7L4rZQ76cMSCijw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydXR8zpafaEQsfaU9wsun3a2wdsfpUHR2eQS5ZrfcyCWaUgCxde4HbVAEhGDaX6FK7VpzQPZmFAnybTNg2E4JcF",
  "key1": "fXrssfecXRpjro3fxLZCXt8UZbteT9seK5SxnV8TFCEtVmehT9ywmYG5ScfFdrL5KR97bYfqbPSHG3YdEm2QZwr",
  "key2": "4vL8p1zCYEWHGaBFTrSQuErzsCrsvKT4C3WeJPeuG924K6S2nG5irw9Q6Puus9J7bWKMyWFsDmyLY6ufYUcKdmvJ",
  "key3": "52VvPJJqTwjbiPtVkiuufQPZnRanNHE36uTEEqE3TcL6KeqxAf6E1wW3gRpA8u8u1KSvtK2RzvWHftLfAmSiNVHa",
  "key4": "4TKUHV2AC7Eb6Atd4T7yhdBWzNdp4o7XFKaJ55Yr7L25BDP6n8rnZ4WXEtZ4MidkeVHBd4xpSxwy1dgQehg6YavB",
  "key5": "SqrMJDx2Hni2CzUxEJRoW79BWLU6PNU5W9c52PMHWMncYiMWYRu9mnWwpMZMNcWDqYJPJ1GngybPrGHfweF2g4g",
  "key6": "WpeyVj6Tg2qzNUbdwyMmjbQht18Eo44jk5wfntuqrKe2nmpBY29QeEeMcnJkxuSxDJJzJ54iHTZRMUn5HujkiXY",
  "key7": "58zvEXKC2iiMunkBWrLsG1JN7pXTkgChUVN9X88xLNXJKk75tCZXeV7yWpj5KLsNmdhz84ZwuTaXGxDxbYsLBLE5",
  "key8": "2FCx3dFyxfp9XMR9hgUGLVkNGMRcjFx4Ds2JM8TJDTw9VZAf6H1yV1JkTnjXRGfWgYjoiLg1twvwPPuL7uZZqfeS",
  "key9": "4EezNJtS7x9Xcnoi1ijpiXmBNkzsyPS1o7WPpTQimVV585UqGWvtMY5XHvBG1LG8FFPBnUStew1nWj45F3ZA1AtM",
  "key10": "2h2Ts44dWcWuYkPNJ6w5L1eAiFXvWg9sYF88L8tF6Lzcmo2dqXMFV6d15Wi1CfkFP9GbqK8SmDpFpnY9ZAX65xcE",
  "key11": "4k9Vo5RUrep5JQRckWXmupACnBX721U5vas7eUf52wGvZZxSWLpQJa6rpxwQRmafNx2i8gBy6pTw3PYpCqQr2WQx",
  "key12": "4C5vJDHNs4YvPea5b6yTZNwnktWKmXbsX6thvUCCXgYmK8ioJFsAAvzcY4tTYDH5x47X6dNCvJJrKjwUzDm1rjmx",
  "key13": "2if1JFxgV9BAvxwtu1jza7fra8fsXJc2apzmVYVp4mtKha8EDVkQqmS4eWzd1Nsy7ryP6gQob5WAswbP8D6gh8XP",
  "key14": "5fUEtQ7QUQUgiRdoD8Q9wx8iDfEjeLZVmZ7nmt7ahLVQfXZUE1oR4aNZNzKwXppyNt8gRvrh6RJ3G2bSUYsZDfrU",
  "key15": "4XkkFqfmKdLQq9oUqeRnAjzMUub7osbsbNHMyVhFbsmz4CSKxGWj4Wpg17oQBQJCmFsg77wZnKyzMWCD5pFYrxFS",
  "key16": "HBb9JWmN8bZY67MkLHH7DVmKaNCEg7URUxevTeWKVDPUXMJX9LHWLTskwmsEKWdMYLUN4RwN4kX2S9qi9v7rkNV",
  "key17": "3hxuyxZXYeiGKDhv2GjBY3Du4bgMJ9NumFocjtm7PSunnwL5VVdXLnez3wuYr3pR3aYTBfNRyzF2G6NoY2paYDwE",
  "key18": "2qbyZPYYfEDQLdxbtZaPPnqgeckTm9UjZMzBwjiQSbPTRK8XQYcg6owXrMF1PA7BQrrQAHbriDC8NKgmr21W3sZ",
  "key19": "43mRWLbZ7nu4Nj3Q3GbaHTfRBHWfL8nvrGxuc8XYMj9CTAwMo4ob8Fk2HrPy9T4e6g892Y9RDWuDA7rY7PtPXSKF",
  "key20": "a6ofXA4U9UJi8bW9rYShRR6KPCAwP3PmEmG5a6ajMTxCgBCmDPbighVSLfr3AzbBFsjD5jqEeUu8H9MzWsYGpsk",
  "key21": "3q3hoZku7LB6ondrp56Wgq1uzL6tUtkL1weCNdLRz6KWNRAZZxmdT6zoMLGxxjhPG3s3tvigewm8qht3f2pUfL6g",
  "key22": "54a7oUb18XTVrSuZNLyfBgqak8PfXRZ1KHhKk853m1ZDiW6DAUdZy5iFgxP38g3dzkZBTMBxmVkMBzu2kVXVT649",
  "key23": "2joTgvmKcdihRTADmVsu8qGAWXcvqaH2MtagwYc1tPUHn3rLeSn5VSMdu6GLceQuuhjubtRqiW37MvU46dTtopZS",
  "key24": "uzTBvfcwEKSBn8v9EpcNx4Yom3KJYGZzbQNUqsHHKyNLeqkMJExqoaCWqA2GLThDh7VFShLvhrqbm6peyvHKMeo",
  "key25": "59Su9L3g8T2XoCPUbZ9yzQHY8EJFYtYVDcJW28hd8vbfT9ndqaKHYDASVGvLFqgdMF5BDA26FMM1RTyHwNNs9hjP",
  "key26": "4rvU7UpLGpiaeFnJ29ZCUvLUvoEoWftMxajzD5RkZwiDMTsmHmQxTcg7bHLLjfRuCFuPAQh8wPKGsfYG7BNH338f",
  "key27": "3cLbDoHEaZBqNUpxBiFgjYQyPY9WgotzbEXoQYJLVtptERch8cdwVPDRiUUBwcWHx7AFxotprDjABCcCrDJD96bT",
  "key28": "24ZZy6dVjeydD17KNwdK6JRvFJ1QqBh8BJHwYLux8K4jzcmDPJK2mfLKZHykaNyqv9R3cFh7gd14hd4StS5JjY6o",
  "key29": "3o5C6cMAVGrYkFTz8KoTdhfTc2yedR3CdfPvKzvFD7C7CLZkMRHGV5hEajER7QuBbdPR8CGhkCptx2DwEN3cYY64",
  "key30": "4iEDtxeACGmNfTcxP3TZC9p6C4sVp1NK7PgtoQQst7h5LqBK99Lcxe5r8T8yJj8bBFZ6i1WXibi69MeZizvV3RkA",
  "key31": "4AZnWFcHrURnxjnGnzcFFiJ1bd5e5taSFahThWpQZHaePHitBmcUJHy4U811dwJqwaVJf84EA6wcnT8QLngxdyCF",
  "key32": "2hWKaADxrPVHE7RgzDoaNSxKHTXMgJArEYKtYPeuG1bHZYJ6FM7JFuyY2M4BYqNFEoLRKhhcB97v1FZ5YazQUWVP",
  "key33": "3DLQ22rRnAtLYAmRbVH1LTuJyeZ64R4bGxEeofAGFyBBiGXwvqqMHMgwDTtsSaZGe85gri6U1eryw8xeqXXRGRNs",
  "key34": "3aRAMnn81Xq2xyUHFNTmRN4Ldx2KQAjnYmg9eLTAWZ9HPeaLK4SKbXavZs7qh3zZEQJLNPRe4nFDufgox8pNMLP5",
  "key35": "3NA8HaHQkZuDGafz1CDYLRLv6zee9pLPnRAXEx6Js3WwvNqHqAjBHbDno69GiY4e3JUWmGpztnNsszzqC6Zt9krH",
  "key36": "3AuQoPDUPvBKJ7m1qcoMty2Ptnj5vbD1Jki3mWHHrptJPzCLgkdyR6KcXFSTxGHBZrVdB7uKzwjDCZiayHwT8h1q",
  "key37": "3QAQRBfHvwu3i5Uxzd6iwdTRLbGcgnXmkba3djnJYKsJeCRYJwCiGu5fgsRc8zTL7xLmNHV9UhdhpsBKJE3xK3cv",
  "key38": "SY3BPTkYK18sbT22BsNwFCMwLSrnwncH1VjUYBg4qhQ1QVc8k6qWA1KpNRqmBZ2J4NqvokNfUh5ZyJxT4dJak3F",
  "key39": "4ok92C7bBwF54SgHmoHEcHwjfGDcp6MWLtXSomxeAvYB3qvyb9kMGvaLMaAbSQJykyqimW1MCKZFNCYXfTTSXRJZ",
  "key40": "wgMfK6xzh1a8s9iuxMYv5RezsDxdmFkZZ9aCGaLVvErx9y53A3TLjDCLsHxfdgNJXKaTw16wz4WeRMZbokexnpx",
  "key41": "54MLWkhKELy7PZS83VnYsHcHUEbZKgLvWtGAnv832hJECcULLRQMn381vHrwatprNnto4J42fRf1BJM1dPvK1afT",
  "key42": "5ko2j1KyA1gxQYePmNvBHZwjJg2eXnNGB4HWJGLxDjHiXYHhRhDeAQ22b9oK3ByatgTpdUwHay8FTdy9LrrqoHJH",
  "key43": "5jawEBmpXQ4baHZmK638NpbN5vKG1iP8ARrST9VSzz4y133PNfKqmX5SEFWu2ncbhZzia6F1DxKUAfxiF3KgTWLE"
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
