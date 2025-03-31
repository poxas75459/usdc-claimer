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
    "5cK5JwVweZmqUyTefHhgr6RDJaEwie6NF87iuNq9cgHRjU9frwGbmvwVq2sGkrdKWUZjpvmn4S1sXCcr41JeEM16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qt3kEgSj66Za87hwvHFXoTCgVoLGdUGT7aatnbxS7yCPU3j7xjaW4RWVYWNcZCu4my2bGFijrQ9KZd1qCEhpNBC",
  "key1": "45y3ZQk2Cc7kyaq3AUshX2CCekkP3rTe6KLfVLNABpUjPUksryM6C1dVX2rr1XT66Er9CJ9wYJVcnnM2n7dzGu71",
  "key2": "2CT6v1fxWxnvPNaYsm3qDFwRWXX8LFsZMJPTCBgMeH6mTSPtzaWVDdpG75pupDhFbxLUyVCiT2ysTa77EuSNw4AU",
  "key3": "iCj9hFFZx7AcLmQLP6ByWKBPuwg4kWZpH9eUhSBtgTkNvrGCoWpq2PfEAyqhgQxZWJ2VVSGcKo1W1gF8kW79bVc",
  "key4": "3J8Fr6M4r74yxV69UxEWE14JDXgxDHuuP19bFEqaBdCeYZ7DeHAA2ZtNhcUMBfgKZRmMKvPBGjQ7W2PqPmXJR2Cw",
  "key5": "4ktb3eZW9MbYA7xTxfAsusmNFrrov2QWkmHr7QYbZq6CHtDuwLSiQgzwAwLR2KawYcemWTRNqNUGFNJ4kTecqDEf",
  "key6": "2zF1Fkb4GTwjTxwV1Kmf2UnE6sBxanxPu3jAdnGFzXxgvyQERvFbE3tHZBxPTATxGiwj4Zch8W6VAnttW8BSAqDF",
  "key7": "4B9iJ9bRqHp9qTdmEY4f8LbAWQ1dzHBuo8R3rmTzGCSXL8ZqtAA2bLPKRruzXbNUSg6BAEH6JRMCvHtCKFGmZ2Je",
  "key8": "cGxwqQCXJGBjEn9SABtXX3N91Pk83s5UJL2A2dswqrZHebhgaBervvjaNDH5w6Jz3yPXcbe1WRWG6SVhRnr7kHN",
  "key9": "3sJd2qwLoCsaa5wMsViFegvYWfKLwtvHBVwJXpxjWYX7XeJTR1BBNQBysuHgPUv2qSfhj3223fazK2JGGE5TuXbh",
  "key10": "5Z8CfmWsjsubqCRLUvRrzBXCL23RpEZkUMkLWSTDGf4BaNosECXi1zevPETRCatsZigRsji2fhDseX43jWKiHpNJ",
  "key11": "yhdpZdq7Tsr79K428QeUiHMKWxAM58E6tgpPaHhJPzxM7cVVJ914H79FZo8iT2kSMTiQZb3oKpYFRDu9Q3jkzzF",
  "key12": "2ox2pjkCzMAjHzPfCnRFcX9d6D1ruL3TfXkXhZDshryUQsvSxx2nw4qrxdzsKu3BETbr7AwVEbrmPHXsib6c2dSC",
  "key13": "5fq6u1iZ56nPUR9Y7NbGZ2729atNFucy6v5tVRT1WwDz9BMsfFBG2Czg7ty4xFsgr56j2AfqQ4Pb2HS5YqLDmGY9",
  "key14": "5rJPnvUjqZG9ee7pUVMLE3GVX99KgJ72YW9pWnSKypAdKEvM9ML4BhWhaVi8BR4a3Pa4rGWwVoJTix4xmPxnVfan",
  "key15": "4fgDPNufp5p4E6BP2Xyta9SCvBe5CigFVShSL9NsdQ8WgR6mAwsfR6eKhG3HokQfFKL2bRFqvdN8Pr4C6xbWgxze",
  "key16": "waxodquqB1zUsBw1xmkk1Nxb55bV6EBjWHLJ3oqffHSP5B9WRqUpe9Cv6znysrpnCoFLDkpzoKNJg44eZRrjLdQ",
  "key17": "5eZqPwSvqRncW3YDLY8ZQGWW8t3bY49Nf4DtDtJvsLsSjWWtnUotHE1tFCVuk6xEXHwdtZ7EPsrvzLCFosGUX88e",
  "key18": "2kyje4jvvKds3PLDqXYHfNkcTydq33bXfoqR2ffMp6nD33XmkCrdQPY8jNKUEMQKx1mQmYrP7kjYneJwPJWvEnE7",
  "key19": "1fUTD7zdEAQKePnYjM3JPBqPDovvXX672jA3BKd9ijP51KhsxbQmwufNgXPsVPiW2dAYRVQMUWUy9XpJoiGTWQh",
  "key20": "47eqeivPhLov6KC3QdkHtkCj1fX3zytP8k8WJ4nq8qQK2HJaLuYTmwgZJdyXWpNPdCChkTUiJGAipkTPsktN7qDt",
  "key21": "5wSsHA6mwaWtH3Cj6cHMoG8BQjYJG6HZbfqL9LwPBJ8jm32aj7rmnsJDxZHuUmL1GDQinqoRw99dAHiXFjGCiSC8",
  "key22": "4XVzcd51zNaj5QVv82K8RQnbXzNipu5HujYEyBD7ymB9gbc1GpCetCrs3rYaJeZLFY4mTPcPQDHSLbb8QxH4JEVo",
  "key23": "2wYhfMr1zduBBfGzENnXPUZNgYRRr2APPJ8rtg8pQ4JYT8fcHk2K13dTFSwwSZWRdNmV86LsSUAaWF69dbX1zp5W",
  "key24": "5HxcteC9TAaTFe7vRemRPd8R41827C2V8YBjCfumX5T45299PXKZiVKNPGQw91tkfwHHtXeTfbwC8E7AJdss1cJZ",
  "key25": "49thFRKkXVYy9fWs5tyz4JvE98no8sQxVLTJ586uGUz8BEq9VuCtmLVpvUZMmJvznzYyVfBRcQ8z28XQFKjxaPEz",
  "key26": "59j6Hh44hNu8HpgEufj54apZqjQjvR7Tk3HuK5Sb7XrcKrUTTHyJaXppBS1rWmtED1rkufiPFbSv2MTfM3jVjnRn",
  "key27": "2HZLHEUepuikeF9gKBUBKAqsKYeRb6iVdQqMdUrYsWHwweXjLDKRhP58dsd8JC8GdM4BaBM3QKcynaZXad3N5BqR",
  "key28": "5rx5arPJxTJNmRzZenVceC2YxDiUZbcrQuZYUNTnhUa1ASJPP5MpRQfGwrf2hQEbSgW5ZyCEUdXRZLp31trqZPs5",
  "key29": "8J2xtdSm8VPwQBnhVJJVa2RwMMB5zhTNqaitkeZmLdXzgGTGukcWdiArLAi2pYS3H2ngToRctMwwam67H1Vecys",
  "key30": "49UBYdLmshVLnD6RV8C3nu86dG1LRVHZUf37KuGNqdEVdz6GKfg92FyRVggagRPiodk2cb9WC9h1YDbjnSbSXJT8",
  "key31": "2FU5JsKLBBbP58dC6xTD7GLkEAzTyayUfjPuzT9iY3tSE2DopbB5irpNK9iuwWufEyXsy478CBwMAyPH3qGRpKM4",
  "key32": "1JrD3x9s1oedzubRErjAS2A5gpQH8HUr8UQ9Puu1iKsMA4Y1KUibLsvyMQFYRdxkf1jQdi1HPAWa5EGgSK44oZ1"
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
