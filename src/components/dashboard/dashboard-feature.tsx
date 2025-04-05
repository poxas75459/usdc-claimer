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
    "42JG2YkvZBUUdT3TShBf4tjKWgMwVT5jHes5E3sfsZsyBEQ4RwJZTb2BgAhcEPa91E7PjGP9jxo9rBUcNtxSeDuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaqcLRahUpQ49Fp6XCZWutVH3NGrac3CZZzcHGQmzT7ep6XMgYpyq9hYA8hsnK2hiQ68AgcBmFbN8WVNLx9E9N3",
  "key1": "AdaN3Cqn6xsDmgD3wpxsJsVev7uq7K1hwibuUZA38ewRrYg9wQBNyAsUKewdLCQv4Yyjtq3b5GEVBLRUh75FYds",
  "key2": "45cBikL4xLR4LWaTCcLKhrb1H7kwxcVoUyVoCz9eNKyurpjKDPJ6n9gBN3nma8sEc8PqJ4RDg1oWSFWwqrew7euF",
  "key3": "2HEF7SNpEJjbnmjznA47Qzxepbpz8bCGig3LzwqFkcfFnGStsTkWXW4uTHnF8PZUapx2G3hU9bizmpbb6NoP6VDy",
  "key4": "ySnDGSim7wnvf85dr9khjLeoSSp4f489Fxi1jLrAcnTpuK6MRsiRkuN7iNi3TSdeE3txRtjFxoFiair7zN7T2u9",
  "key5": "4WJt9qgot1KtqX8T225C12VEGVJYab4UcL4wPRYk99XzaSJLqAFdXBcJJq1wqH4agysBgmBSRPBUwvks6HvU8p3N",
  "key6": "45puEtvGVcZZ9df3rq8RJGNCeugQMnrKqZAZtaVg5huW3a216upBbmJTftt8ued7TMzzUeZLHCU6wHws2CAk7GLk",
  "key7": "3QqeGBurmNLuN2NkFnPQUkgHcujUQXev3m128skoYfrfyrpiikprQGfMMhGoL7nGxuXiGKHTYRjEg97AYfeQGDd9",
  "key8": "pvogb62m4aQVpieEtkikFCMe5bczUgQSDWCyiuP1fn6dBfuK7Usy64rVoXy437DUQBPK7GJmgc78yqzMEvQWX9z",
  "key9": "2EucJ5FV1LJYCW65Ugh1r2QUUbsBvJDCZSAuRKegGhKnSeKAFZSrwjEy6hwKvTkLUvcqQntuQPVYvxmvk51SLvPH",
  "key10": "5naxyHHt2dHc78AEcttZBQTftMCp6r5M7bE8SmDeXxiTC4FRpjPiZcupYQm85mar45f7xVYxnJCDYUvqvqHrBh97",
  "key11": "EQDjgbK6XwxAWTQMN9MrjSgv2CiQMvuBnfNmKTzuu7a35MQ1kf4svAh2Lqmzp3d5pUweGzKWXWRru2SPvNsMkE6",
  "key12": "2HSrYrxUPdsHyQVkR9h62P64344NNZKQC8WF7ApRioNm9efewQiN8fhPFTbntiz387XjPmyHqWaGkCGfMFjaMArd",
  "key13": "3ydep8JeTnEdVCJ5jEs5oWFGBbeBTLUFaptpR6KDeBgdLujhV6Fa4FeAcoDA1hA3CQhwzSn1TJFVNHHMSHA8S52Y",
  "key14": "5BmEmcwCdUWdJbmbuVnCaLXWmTowKrSnTuKVHnhXvxm4s6eaBTdurphzbVYbFbYtyhJVnJBp2NLAGKhNsoerxAnY",
  "key15": "4dYo3rHnH3XcnWvAiXLVVrBxduZBpH9veheBhmSSydhANLZcmEiSX3mPwQXhRUWeo4LWHMLeC6MAw7msYi5jkMZZ",
  "key16": "um2Z8H81uBVXN1pqRQ8Nxhd7Jo99FqiR1qARR3AijKW7FvfqtxS64FdCQz7WbxCEG29FxQPLhhZhXY7eWqZr2am",
  "key17": "2eBrauvHBc6Aobr3LYVoXEHRytdwGNXp9jJDspPgkDGFqtDPXAXW7oZ4MGVQ1rK7bE2fPZe1YporaPSFjQNNX2ws",
  "key18": "5e3wrHGpdmFhRBfDsHheZ4PtrMzr42gR2tmgpMrndUAeLuzbsBrC1ZJKwVvrbej5uj3ncwYDT1M9X817P9GRLgQh",
  "key19": "Seo3Ex39YwF7ByDYVQe7Peyf4YJkXB9ZXbEy6i9wj51AkmrQ5vuereQjaA2ojy5ksbFY75XQrB9nincjct2kPaB",
  "key20": "5ApJmhYF2wn8vMRN3ZzDzTVKtvPLWgDFckZxsnP4JQT4agmVXwA5EBVriJnE8Y29JLBLxqUHR143RUUPtmjK8VYe",
  "key21": "27uAd8M9GDJjzQpfHH8uTiQhN1yVR379i9S3naFnApAH7jUavuh3sN2pjrXq7j2d4urXxJZJh6RttD6ErAsYUb3v",
  "key22": "5LJAvuhb9rsV9RPoKkJfHoJ1VBG4hcMwhbUeDp1tcgmYSizs2hmvzsdYmSnmt64Lb4YD6MuMtW7RFAmB3KEbRKi9",
  "key23": "4TbTAtjbpxb4V3snUfbVDzM5pCg3Kb3sKGwSMmTywo21rNWmbftvce9u9dtKsJa9ACQGcnvVyAcEn776WyGhuFtV",
  "key24": "4KH163NNZJe6jpJWxrL34gY9rrec2soTEruX6k8R5hjtLdUq4PeU8KZF7spWmdxmQt5p6BbhvoWDeJ9kAfMERz1Q",
  "key25": "3DgLzzKbTZvABx7tUig8ggT2qK7Ly68CFKVQKBLmvHcJ8LP3SCwY487zYCvz4JFKKoZLqhKu9168qDRNdFA4Fn3y",
  "key26": "4kESzEZsnGqSDC4yBeuyhajFCXbEaRvKUyp2kWdZ3JfdMKGtCD7asm2da5WCyn9pQtAFF8eRhwVVG8F6WhpY3JJm",
  "key27": "3ugg2VbV8bdquWjvs7meKw2LT99o4z3SZAaP4tFBpQHtGepowce2ZHqysZgzqFkLfgJr6BwUybz4pX1A6BGwcQ4v",
  "key28": "5KDKWcnzv7kvvGnn2PmrZMC83KCz6fDY8WAPDeYb3CGgL276RYVZ43HqbW7RCRCJuB7UmhtxAHciSbUTPgNMTosk",
  "key29": "3bpwgm3DG3ohmnh59BJJHNhMBPwtBJwrJvZ3FatuP3aakdGXTv4u8CsFeForz6koDEz1KUcFS7uUukXfXWUfcA9j",
  "key30": "3XbsBkBAC4B4TcZtSURgLyWrmMYGhvv4Yu8HSbmNqzAsNz7zNr6aEQwqAZoQpqPoNCs3voUtrKuDqo4ycE7AhFnp",
  "key31": "3KrYfnE5Y6gXmrsYp2DhFKFXaKaKG77T69TVyuYjzSUd2RgmicBc7apAZEjxhfqweGd8mYqSPe81AnGobZhE8bfc",
  "key32": "vp7MDtTVwvsFNyNueQqZ6bRXX6gwKNA3vxH6q7MjxieW62Rf1D8K3Zxa3g3UV3TqFWjGFDvdjXhoPKe4CnxhcTd",
  "key33": "3txUiUPc5zBfvmQ1eT7XtoGJYtWCDZKbzdNA9ap74nu86aFtHXiro9jjg1vLJqTaEUjxCyHbtzhHQqo2a1aayvuJ"
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
