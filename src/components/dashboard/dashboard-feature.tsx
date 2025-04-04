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
    "3Addu395yNFRmnrYhFoQ2PWH5h9h4KMVTK2yQwvKaAE6Ka1UYoLbMAr49571uLce6ZGxAbvU4N3diNJAWi2QS3mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42onx3cBP8jkDvAKc2t2yeD6bgeFZcjXzXJfqaUMeFG4fyf3BCHwEk7X5oEsfQpDaUpqeXmWEVrRhEv4dgf78g1v",
  "key1": "5bqjhLMKBjPRiMM1dvxGsPhpxgKfM5v9XCX43Seyck3jbFK6DnZgrYtr6Np2o9fxxDeyCR9EpeMTQrGY6dm3aVLz",
  "key2": "3QXDiNexHitDY5G8Ws149pUf7wQRbNXxnKG5fns5kK8LhSFHgHojbbrvzXz5uD4gY2EzzpU8fkwqzd555aEEKocm",
  "key3": "4cHh5v1BoGUmskyTFBEQzJEApKbm2hjeFLSrDwnLhBQ8gGmFkojZA7L87cRx5SEvTLkskYF42HUKnWpxDKcd8ygB",
  "key4": "tZvKGpj3vdMNy1ApjAnRqyVuHenXaC5SjpJ7uBH2bg76LXsb9V7Zfvz8gAxwZWm8jGdrP2LgzJSQfFPG1QL3vZ2",
  "key5": "4s7qbK5BTbLnJpF4trrFG4n8kPfWLnfgFcKqHdpfp2nE9ZSgN4SMHMPiJx1oN633JeFEvYst3oMZGUAocuhmQsqT",
  "key6": "4zw1nwvvVH6z8tNvR68rvwBL9R5EuAJ2hQ5mAzZyRhGdb81YSPKhv1N52S7mhqaFcu7ZgXVhQVfN5uR1J3yR9NtP",
  "key7": "4Y9VXyU1a56FF4VkjPm6xg1Pi8irobviSLL1j5WHyQsb3U8qWfPfZdwWR6QZ8v3Y6Hqg9QgQ11kG8BufTT8thk9n",
  "key8": "2nf7JRocNWXXvZ5obn8M8xntTuXBzr8jDc8bVeFb9nogV4ZF5zChmrwcWt1huRLWMRLn2oBa2FNBXrDbFaJbf2LH",
  "key9": "4swUUuPkRvyEEyFFJFDdhoddH6sCDsnH9MW2ieEKAyzFChZgPPLT7zrsJD7XLK1bq7LqZRDJMxaG5E1D8Wx9kF7g",
  "key10": "5C4fYti1bjWJB7HCKCmu1DgWjR5wA1v3vUXCtUzFaXDqg9MopcRFLXRdLoLw5yTMTY2GbX5zauxNnCVv8oS3XK2P",
  "key11": "4yXpUdKs1Y5VEy1P1D14p2XCaoq4rBn4zjZEVSTaGKtxCB982utWshvoHsKyJ5XZzbkvQS9JuQX9BvA8ft5KsMCC",
  "key12": "25DZ4oyQ83ge7ujrUGQQ4CCx3N8fv1eouYL8fPEcykNoTTyHmcVgKYUcXw9pfF2ZFkqTYB8LYxgsVsgJXTVj9NMY",
  "key13": "67rVgf8nQMzcuGZr2Ncc6d7DdPeeHKwqrin9Ctpxwxz8rkaNxMmtmgpdpAUAv6BkJLiEbAnFabj4ep4M3uuTHNDo",
  "key14": "4t8KpmoSFcqX2nfKwpg7Uvc5HoKvP6SSXWTBpcr8vywXC1ctwAqHPE9vFNL4qEsyWCrHxvdfXZxz2Hp5sakdRuqV",
  "key15": "5mfLn2dKs6HDLWiKxWLxTH1E5DPcWgEH6e6Vw9i1XrUCiy1kqvEfgouX35TWUMzuvDFDTV2M12tTXJadB6bsbFux",
  "key16": "3ySCDqsgYWCo22dbL5yAeepMFBt3LdUaPehSzWErLbY7RULjit8nUB6tLMsqbx8ugb5kaHVwFEssJKED6FXakhtX",
  "key17": "cqY4bYWZLnPjAXxZuszmmAc69qin1Es9WcTXYBwhrQrvmW12TrPKGsVnjkmQyM8Wh97Y9eCAtWzq1RbseDdcd9Q",
  "key18": "4io95GaDdWjHzwzeVF98FoJA7upzYMgzbxzeKxast6qB7boWahYK9YrdpnpTfQ8kLQN7Paz376EGUirhXa43oq7c",
  "key19": "2NBqktTcEUBCfwvUx69WhshyZXLPt17S9PDnu5qhnDoRhu18ay1FYqWQiPYtKZdzHjsCnMhczFA1LryvPWYepHhu",
  "key20": "38LzjipnALRLQ8kpXdPyBfbgSt8i9iP86NUTAFyPYUjYBvfSuD2TE3KSGZpMMwKF2CBKEx2QUJY8U7t2TQhzpnWE",
  "key21": "sazeyyZVTLNaq2W77dWXSnMZexM2Maq6toGt5gENwLBXFm3cizjFYVTkePXyrnmTb4F9dZ758WmbWALLboAgzsn",
  "key22": "x2kN2LtZicQiNtqtZzAZjonQTzpBMHwoKUxYBcS4ksbe9sLKZBxXejbyu98FwvjrUYXXK1UAbYHn2dUNTsy7gz7",
  "key23": "BJRoPTc3cXiuqraR2zM79HkGcLmtej2KeFbsyG9mevRHdrrvmaDyBLvJsEKXCzXEdHpCVuZSjpTkaavKx8vo9dc",
  "key24": "294THgn6Sj9dRMVRLnE3e1T2TNBiasHHYJYYoQYkS8nHjLtutAPi4KLsdTx6CqmyMV1Sk2wxMLNuR5wVL6S3zEhp",
  "key25": "4ZX3P4Wode5dBZKzSoubaHipuUXPbnKx1oLd5JFppyhFr3pQ1MtZxhNnG4wDqMGppavJQwe4A5EdFfLhQAudWWxs",
  "key26": "49S92CyEieBmLLVvmDB3LjPpvL5Ge91Y9kYwSGhwCkBbyZg6qyhTtVQMmcYvk46UoU9bahHdA9t9ubLMLoRV7jsa",
  "key27": "2SSdU1deAo4HD8W12Q6XGAj2R9et3e8tkE2w61XJXipZFPP6CxRp4n8o6GFCpGNuXzjcNZn7WYsVyLhBH79Jwue8",
  "key28": "2B8MyVyL9jtvW3ZAq3GQZJ5goEvmhKry3xm7MjzbzLAbfs6cVeMJVvtB5sL726xsSKZ7xVo3GaiaBpu9hFu8H7Cd",
  "key29": "5uptXJjiMendWVKGkLZzdynmwe4UBN5GtraYBDMAHz9XS8K7TA7oVgJJrCmhe4YH2UhQuVKuYCizwsYGeKpRSJDi",
  "key30": "mGbtUhPWCyCVU29x4cN28wYnsZc61Xu2WVXpo3i3VotLbyhzKo6ysixg6ZbgdSgdqH2eqWYMFufHQ2zZUHd6nea",
  "key31": "4UYqMVorj5R28r82cocjtbs1L7YZb8akUuYY5tUwrvHRs2mVQgCBXS9LwRNnnpZUxrchntaw4pgvdsLHERBpyuaX",
  "key32": "tT8L2oxfZpbhA61t3FZAftbziewgoaRe2JG92Q7hpzvZP7d9Hc8AkT9RddtMZchu4ifkNyoetWQ2rZWYVBxHxBr",
  "key33": "bornRKrDdX3bnYd45CNEk7xNbFQmYfDmTZtfCe4NLKGXduV1NQjPy1oHx4wWV7aGyX377zfjDHDz5ipBFC7KdFQ"
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
