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
    "59MKGDjXpbDG3RNfbLRD3UcDrJiD9wwxyswR9w6yzY3QngXttJno8RXVEyt1ymSwiaEeMuwbKG4pVABB2g5XewzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tveJAjPYfQSM68bbLG2Egxbr7aAp5Tps95foQASWHXN6FbYkYxbJoQdLfdrcjTViHQyov3sKnr1ibAn4dyT1xQg",
  "key1": "7zNCAf5w17bncxiqSqVmVcVyG9ZgX8HwkKyJ1cCz4yMEyp11nn1ryB9aWy1rraKTNG184dT7m9PzXSiAAhx82V5",
  "key2": "3mPQnfWQaq4oJqyHDKFnhxGWmyQcVjrhGbsUuFXMHSJCY49CCmdapCGYzKTesFeBA2kGTKXnQckGGgSgchNmEkSR",
  "key3": "4qQTpVLzWnkYg63qSbUnoQzznu7ZtN5EFrqih8Tieud6dudRjna2F5dXt2QmfNnQ8QW63tBFrmkXZy8A7KZjbXcQ",
  "key4": "5SUYdFhP5H4Yu1Hq124Lo6q155euDVFPNhQS4KmFdUg8x68dimftzZjeVY6SwGqZJzhD5DKyHRfdPSaYvH5rzFo7",
  "key5": "zPksj115MvpVnraXtRLju5Qkuetf4hnnxkJ98mQDwF4VRgFtMNSyhsYJqAraRQnXGKjx6XsgZ2arJxmp6hbGwqe",
  "key6": "5wySF55JKs2Wo7jBzjU3TSHQtwvL9hWhPyBkkwS2RrbVYhvfsaweKKNBHTQdrdAAx8jrss8LjLReEcrrN7612KcZ",
  "key7": "5YjpgbkH7nH6BJ4UUuYk7FKUPmjpHaN2wdoAz61x7gNwWJzGjJBbhXXLbSEVByocSMPrfjSfoMSzAhpd6CujMvhx",
  "key8": "5WeZtZLzDR8jroWJqigwxom3rjGwXSTVbpTDQcF855mkZxKzShpbpu7AZvNAnaXd9YhQz1pivnKuinFC5jtqryN8",
  "key9": "3WztgEUSuj89khgjQ67CnsHdwctVQxodqQVpwTnDHaGswWE8MDZ2JeaFN4ifcJxSwE6Qx17n582cde3tekatX716",
  "key10": "352pVmCmCEzTCTDoH8u5VD8yKbPLmHU8gnaneUevkWoaMHvxLB9ovaXywQNzGmAESA48Db9ABEjsReVxNzYMXcW7",
  "key11": "vpdynRcwnm73EpwDZqy88WNgGjSBDnjrDGy9FZ8rGF3vBshsdiS2zUD1vx6BJKaYSWzYJAtKFJPzepFvnT8T8DK",
  "key12": "5J1tpnV7STqVGAeyZbiXKHgYjJ8ZB5NvSFubjcFEq4siGceDz7CLi28EBJenzaoWF1sBGKWbgnonSBS5Br7rrueU",
  "key13": "2kMYPQD9Qxz7eqo4mwSqLZKv1uBQiQyEMb35fRWgAQ459b6nuoXLKoLTQH32cqaarEa2i2UiK5qzfRjV89wHbaGs",
  "key14": "3JP8MJxMCneXp5bccViDHGgWQZs8e259AyAJ5pGKSdje45WE358qEPh2vpxZUGUJZAvN3XqG3V9JANJLXS42qE8j",
  "key15": "279kXsDvSeSqQ9RAm46xjt6GhuS9uaodUacUUjK3uJUNeeS4J4nBisEXrwKd8PkxxQuo5htACfR7XnoWxCjn2858",
  "key16": "4oiobCgX2YWzQpFaxQbESU7C17VwRa5kSMJtkDKqs4R7W3MpdBKWJ6mYPkNJWi3jUNxhANzxYEvgtR7oBdpMihBU",
  "key17": "4i5NhrPoRg7U24ToU4Xu9jtDd7unUF4c1kCDvThME5hs87r42WoyAS8eNpdJF86eunhx9AvyZ9DWiP9jZ3YNGUdz",
  "key18": "2PjrhTELLwjKn6Qw8sncK9N5arJVj5z7rBe8Xim14dkBch1GowqK1pV9nBgwKeKHYkxJ9fa5F1VHTFH6Jm2cTYXa",
  "key19": "2Q6tmN9JbjihALjv3Meh7Qu3y3EWj2zL7MdeYwqse1yFHiKLpbqm53z1dNGJdmU2VMgg6ANsq78fxAzxV95cTXRa",
  "key20": "55BsuUA4ixMRP4TUDy1jWXXw9SD6PTNDhSbbdnjg5kvNYcEp9fsUnRXJEuuxGhhSNUQj6nfBPtKSLw4tqWC6XoEq",
  "key21": "5Awpe2mMoDWS2s4Ntc2Fkxs5jVdxhMbtxVBJGfDDmrDxSLqRGyKi8P3XX5A7YizJD5znNmEVyjFcR1BbXokK2X8h",
  "key22": "3KosU27pgAY6hK5Z3Ray8p7i8TLp4DDnjtjswBjQd5Nqysd6MndvJHKZjmBWjaD2TH31hwwounnNDyjByL44xeTz",
  "key23": "4xh9twaiEE9N81ChQoTy3gSq7kJtdSXXsmhscoUGV5HWCV6HPNxAbWGFnH1SVUmWF4ruKLPtcZ7LK33rKghjkFSW",
  "key24": "5dyy1Xjyr2LCEUgW2q5PNz51s8GCV6i9mfW44xHwSrC6wVmSjcEtPK3kEwu1ZirEvx2nF7UVYf4JAPUqsH6NuaCs",
  "key25": "LWr1AGVrsuGuTj8PZjk2C5L37CbLKorUdJyjhRJ3WkNYLNBsuwXNTvzcCCPwZYErawr6ZCfmYCi9S1Qu2ejMkKo",
  "key26": "3cZYfxyZitJehgic5kcBRMkpmbZJDNAhHFnA9RBBYk94ArLnDCcaJ1pLNKy8NCG2GArM8qBSSYzDDTmtGm9NQS9t",
  "key27": "44f1o6wXiXLqD6Cr9b9DCV8YCgxWCsipkiSpqePwithuUAUoL7Hk9GbHcKUCLUss7twYb9rnUFT7noL4z43Qbru9",
  "key28": "2d1ANgfG5pshZQg38psnrisndsiTCxZqVjy4844Gm1wcTDpC1DTPhuwP2tf2yoqLWo8FHEXcZobtCN8UocdcRm8e",
  "key29": "4mLYiq8iNmcotvPFsixpgqrARGZ8hvCeRvhWfU289qB7u5utcm6JCAKLfFRLrb64YmV4Y3vevvE4Q14ZB7uVS5k4",
  "key30": "AdzjV7NPTvFtBcxSxWgz8yVQBq4WwNY2TpEetPzLTdZx5QZtsmxadiCsZDkEtJPXivaHZ9FM3JYHiWvf3soFgVY",
  "key31": "5WFHVarXS35Zaa9dLgRN49B7A6kU2EZszBDb4yCU7W2RHL4ipBeKnzcXjjLZ2j4xj2oqZXiTcME5U4PVooMB4tFm",
  "key32": "2A6bigWNLXjx179mFLmcrzPbHJvZmnyuJiGHvjSR55HCJSobbQEEjyLBjKN67MWFwYDz1AGjCULqBv5mQmAQTr7n",
  "key33": "5zkoHaQNNVHvtBaEjMNrn7xRukvgWKQwYEWYgJobUMV4MXq5RDw1K3ZaUrzTGTpsW4AJJJZNzenRSa3rV9d6qAg",
  "key34": "qPoAKW7h8c7SHwJu2PS2T6XUkKmiX82FXy2m1rBUqgmp9RcSudVzhvMpdv1chrw7EGhtQBKL2P6gq73qnZJ4E8P",
  "key35": "67GNjrrtNAbBhbxiR4bs9WNtTbx22WYaT9hgmPGsimTE4FmzKY5Nd1pz3pJLqvQhCnjj31TGdp12qP2BkxrfjL2H"
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
