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
    "2JqzFLBa315N9MW8tmAr7tqZEzCn8QEEkCtCysVvQJDt5sYcMbKAak6ghJALsKdCyV5YSacrZbEGD1QSoLdw8Eey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHHsArHoPVxvC5BXttL1sNKcXRe6qAsAaHq3ABZfBS6Yb8V4DDFK2L9fgSJzP4AkZTiuG2DzLV1PaUXmsaPr9j3",
  "key1": "2gMnjTdWszBGZaeCHxdEUdJnyrKuGNoLd8T8khXkLQFYGiY7AzdDp2LjBARSux1rRnmkxBxvAfrd5VPaF4xKJetu",
  "key2": "26mQtUb62cUhCnE2qvFePFGYrzuVhf4xRgBwDUmaCZAAqe5YU8iTycXGCbQzJwDFxnaH94w84N9zEYH33A5Q93hj",
  "key3": "BuUgXck43Jbuki3ZxquuTWJTjCmFE3Aiw7F78tA2U3R1tyYy6hGEQH91UYs18rJbvjvdhyLqFsmLGP3gi8pKTZx",
  "key4": "5AyVMZfyMNF7fySFASG8q8oSqhzebPprdhcc4cNS1c5BSV39ZLTe9Kbiw7qVib9FFUhWHmqiuEA3eT88jWivCifp",
  "key5": "4DUhAp8iK7GgMaopMHQnW6cNSfA9kUC3YWZWhx8n5zCCcLk6w4ujNVKWfJiaXwgzJJ3h5GnQ1q6wsvaoqEgWzMud",
  "key6": "KceBbqhA2DG5QhsZj8K1uHGQt8oZNoEdsu1w7vV33FxJ5RM3xwZTUAD1dNcmY5E2WuRpZRkufC6goeamjsrkzuk",
  "key7": "4WsQcwAB2NPTeavph4DMzSPRf3pmbXzqyLJRhQPywg3tXqV4cFmkLzrkfwT7GLFKxYWnf583jkYsLRmxpedJpYeA",
  "key8": "Wu9YAtfMa5GzX2XzH3DJjvqCaMvGSscBeFLPFxSUHscxGyd9yedaqR9JcmxoZbKhmMzBSWoGuwdyq8n2ZU7sFUM",
  "key9": "2ixFWMDB9zhb2FDDzRgb71rG4j47tEQdWw19zdN9A8zNdinFB8Ep3JbBUPzCvFrRsGsLPyKAA7kzYDCPo1pi1dUA",
  "key10": "3Y4uRV1BBVrr4WPG1r5ZiqhEtHB8Xbgi6gE6HY6ybBR55mS8uh869sZgcphSBHCTsogn8RYmqEbz3TiFiLFea8Lr",
  "key11": "3XtwnFDH8W2TnY39us6UFjoAMHzGYPWsi7soG6LHXLw4Kd3WXb2zufVajZYHwTCHyNShe1QtqLc4JZ3LjJYKZouP",
  "key12": "5aBmYgT7V32DxNUCxX4RxZyZhn1NQfTcutMWfEaKeCJh96GoJLtoXC3YrfVN8vQgj8WxBUNXDGUUunVhxoCmxp6U",
  "key13": "t5DJ9PWwqLTjfWz7RQ51cK6eTWPBUFwrDE85R5gfoxamSmpbapdqBd3CxzNMFcpwqPaELrDNx7YvTV9bRY1URCR",
  "key14": "2Mo988K3F4482JtVm5EZqyeiuZ17zZBYmnLj5euyGQxXqaTMAL33T6RePVWVVX8JJA8t35q4TW1mbMPMTAC4cAns",
  "key15": "2swscjanHbMc1aD6TaoetKD2htpsSF8KKfSdBThqs1fjAZSicpkDPgVdXqYo4v3V46CrL39srzdy4b5B4kLaEZjx",
  "key16": "2N2MPTVeErXcFq8xVHQRWpm6BWzATPXfCGVr6Ho6ePNb32xHL7bMBbhED5tDmQDXmd8UvgwqhsE3N8oBWuagB68d",
  "key17": "5nMKUyipwtBzJxiC4MGMi4AwfpJ3HFxiDq2ZGwPa6xzd2sa1jKoveFh1RfkHNFhsDz6G33Y1UvpoMfjX6oP7XTrD",
  "key18": "3kgPQNJ6yBZ9bXKgYc6d7XHUbe4NbHW3uvFsUbpRaVfTgi8xf87Sw5NYw3RvzCpofHDUSRyzASDEvyt9FubRH1iR",
  "key19": "4Jm8GVdjRqBZyNqT4UCLc9WUbsBnjvT97oUFXg6ttxZXRDxkNi7Fhe33XHpefHZJbm9rB73DhpeExk9zX6P7CMEt",
  "key20": "48TqECPC3pkYfzQwoB4K7dYszaz953LDFRKS9ERVW1TBmtMHgWVYiuSikLB9PwGCCKxVM2tLAHg4s8bk4XJsFLjD",
  "key21": "535mnBsnqXLTFwJCjVRDncm8xZR98W3P3zHWq9P5dc1WsvxQ9ZCK8goae2XYJyeGyZcj3DUTx9XdxKXzT5K9Aih8",
  "key22": "5UTYYPPJHVSwP2vP9a2btrXAfbgZ4stHmwNsKHFVxHSQfbbnGDzyJaQoRHixsZtzHKdUc7tBigSKJAECViwU5v2G",
  "key23": "5u9BgsiMp3xFtEQvwZ898Wb9BCEAQUW4UMdQtdd8UV21J7DNzByuffFHQuz5VBq2aknSAXiwWpZwoH8K3CErxCPh",
  "key24": "5WWdwTF6W6StToAfzuWSbkqU8Kuz3HFB335YSN5eE8N67BLUu7baJvn9MtNyQDkJFYpmUhmr6NhEDBJYHi87zY3y",
  "key25": "NbnHLXmCAEzbczBQu2UMPFS4ygh5aE4FzayGGoYYrjnTAPKoknWfbHG3TEgPAGs43YbyMxYYapnUWURS2YuhP7R",
  "key26": "2kaufhXkdLEQYhqwY716mKhJRYzHvvX4KNGJ9dNw2sYNDBczLpiu3KPPz8TFFEuFAeksD4mrHEnEeCMmekc1EPF",
  "key27": "5HPn8dLxenLV63HCkpDhbgx4ZNPVTqMBtHdawmfMpd8Z7TXiqrwwt1xgDYXQHpTev2iyT2HmJfKcfTMbNoT7Ndpj",
  "key28": "64XcWh9a4SLmwcjfh3MfYSqo9AUC9FwtZhpDXczU1MtihEkmsh6dtt8moUmGLcJ3dTrNGG14a13bvvEivWF1Mdab",
  "key29": "6T9vtUrAS1DYunS6maXqGoSuQELy6wuvYcTqMc3WBLe9Cyvpeuszr4jeAz6LnqhRCNEpb4vXPrdXtJHxo1rXh4y",
  "key30": "2SorM1QB8XR2kVV1RyJCAoiuBzPTRsJeRt42yRdTPomnmraRrYSLUjR8WsosEpAjNxZryaeWb2PaJTJ1EkaVDhsS",
  "key31": "QjcAnoeGTHhbd6uyWL4jmoP9UxWgKNBiwkZ45V5TWgqo2Ae1tMUCtx2ayQizizQnf8VCPRAvek7AHt8no5pVnhm",
  "key32": "3xk9eqZW2RDkkRthFy8ELB6zhrmrKHftLbtm7Exbe59r2tX8mHj7DBheWNfgHxZ9JJQkQ4R2LQyn1Y3kNV3Tgv6Y",
  "key33": "2E5GQYYoRUom12o4xPFWRzrJGTXvmKfqeiPmXr5SJjBd3P1htBcNpo6gFx4svzVG4ma7b4xDdjCwCZu4aTwCaibR",
  "key34": "5KWohZR2apTwVACiExLqVp4ZND31gqSw7ktdqe6DJgT7AtrHHAJHT1G5qxVuN6hHHhSgHQZRB14X3fAUJkp4zb7"
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
