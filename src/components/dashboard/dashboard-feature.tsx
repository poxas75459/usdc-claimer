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
    "VDmrg8JdwxXUJ6j7fU4vbm7Mejvp2V9xj6T7TVQZQ2NAbxJ9kPSXY4DW4TZpW8WtyhCYHxMK9885kz69mQ3upd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uDeKoSCq3oYyMNFTivfdZYxJ1mYfBHyUckd3UfWtsrAneWimaNG7XKj7VwL9hdcZNn62tSx3LecQDnecLnvgDrV",
  "key1": "4BCuuSvYzZ4Kq5SNNFPSvF7q98ynncWziEDBSvKvnJtCfcw4nV3etMYe2DdqdEeZSPXGuQZBwSAer4pfyGPKFgxr",
  "key2": "51kmBNhqGjSpLuzkKvf5VsDamiZcCRUYSgUUnn2ycPJ8yUPsu8fAA26do7B2WZKTQBL1KJJEK2e4VoB4VXqCj2a5",
  "key3": "2xfPYGeSZRbND7xbxqpopuehHZjZ9nQxyvzJfKhsmoCtZrTtQZCj4XNP8nJmzpu9DnScfmuMpe1hocd3BsgWpq6Q",
  "key4": "4Ch1KpWynvyfyiKmMU3iLmKLNTaTPs6ZcF8KvBEr9QqUsGcDWWfvPnXsrXUz3pG3Dhpj91tiGd1GcN48YcMLwUxA",
  "key5": "5oP15xXxrKNhxVCnzox4XmZk89JSwVMj2pUjZp9vaiRuDyUbZd23W7rTUm7p2SFjeuPkXtjD1dJnPJPS9hYvHPsz",
  "key6": "55B8MSkS4dGYXtfDmJzW7nmYYivM9Q1NkhQX6m2qBkjMaG5EN5YgemU8JXfrzvxwC1eNqawLyrrK6z4BAFXi8XJT",
  "key7": "5bsaKuio6ptZUPDQZnVkwpHufP1X9oTLUB3p8TkAyeHMpmhcgYMJ2ZTBEmbqgRJXXMtJ2A374L7agU1PgBsSvUGd",
  "key8": "5vfQZMsdFzw3BUYWAsEr9AxwmFaN2sVecuStTu8aWbreCqyssa15DvJGfBMKeA1wc54mMepDDT5T1hxWXo4SuEfR",
  "key9": "cs7KhyQdq5CKCCUQGCAedk9yhNsbPHYBUhkqbQ1hdhXEj7onjmmfAWD1YfynkurALQdx4LS6oXuk1dt6VQwcgnz",
  "key10": "5pqXPAB1oCMoo8FR9ZZMbEYpc1cTVz6PWXoCVuuWLhiVGVn78yUrQJRMBzCyXaz3MBRfCLbbhhdP6aDRamoJZdnZ",
  "key11": "qAgTXhkLx7eAjhfVY7vWMuGiyiMJpUc3F8wPGckW6DU4f7GTezWPiZb6C1JpVeRavFEwrSb6SvYbBNfYjgJGH9A",
  "key12": "5TjWFMSQ9HVLB9tLNyWvDjjc4qETNLxMM84wEW4qcCNudsgJY6bAXWC64SWLtmRXBeq4g3w6D3qXioTbCgr5NtHb",
  "key13": "2nTctGNLXPAWtyjqAuPxwf3cZX9WeDBMdWuRWiPmBYqCf6rnWCRDiobZFDaqgyEcGZ4kKxadELRhro6iqRkUFNTV",
  "key14": "gFtcF8ZZ1Hk3je7Yf5CgPrgybk4MT6AeQUfwsrcTKSdrViTsEUdg1CYqTXFz83rs3kZfXsSbY4C1aDigQyQMYDm",
  "key15": "fw6hRWwfXN3BWf6Ejc9uAJp5CKk4hDsdBvbD81yaeBVyCtki4LbAFvvkP67LK9BG3Wnr1bjsyEAeQDjm9D54wNN",
  "key16": "2zdPXBYPvQxKHoJz9j4DgvvSMwopGFoU9W5phkVAjCqGoEuxsgvzcoWjWG9awrGVUKzGoqeKSGdNe1oBKt12yjeT",
  "key17": "3nWMX9Dup1dJraN6w5C3fgBxesQQ7psFaAVHvCchM5dErpH7afkCmFcNBkwgTwofyMFSaQ538obsycjWDHGawDvg",
  "key18": "2bduynJcp3KhdLqgm8FKMmTmNa8kTe6uqQiyKpCjrvKdgKyuKvhnzSGP9LS8H4VouHsUm3VpWrvXsr6cjWgnENFp",
  "key19": "5Fvm8shUu6ci5DMWyLKVxn5i5ML8r1LyPxPf6qo35Gq2AMYwktSFXZopYRzFLvgitNPhQZLa8ibCPPtqLpweFJVb",
  "key20": "yVNVbs5HmgnrjHctbk9ovAPMBrSzBD5caQ46LnCScxTfEqAJd5ayoKmDURH3yjLC3utm1mVpNA4kBsxBSmdKMkV",
  "key21": "36VZKFgDEqPYVP9wcXGRTQnDaf7K1e1C4iQi8yUCWWf5NULudNUhJxYvDLRdf5xnBFKCpbwT3AD5phzf1Mfycym1",
  "key22": "21YGYCmqvYVb5rBFgYEB3S78AUBK21nFcJBT7CTUpTzneQdbLk4ZvNri1jPLVjhs47uJXUx5nFw1LNcdJVqpuRvu",
  "key23": "45nDccc4FxcDQKGzEVunmni78wneN5B8p7kkSkvM63oDS9ToPEJtXWKo6xdjJT6S5vtG2xuSWsS7naU5zZyQYhG6",
  "key24": "67eu756oU3sZQ1gwjbiM17YAF4UxqiN2oMJkAominKT66X7MWSXNeiS7Kif7ySyrSjKMRv94SNBuKGS3mnvaRYAs",
  "key25": "2UqxpmfLznCQmYv9GZqxv8HyhRjXnRqeRr3BJQUVZD671Noe6UCEXUUWbhfQFZ47AS9sQn5Q7bv2ZreAopFrapNB",
  "key26": "hKFHJdvcjFUjDRHz8rYitfrAGMhUdABQSdcGvLV62d9WhAnzu63Zq8LL6h839afhZ5PxUEkrHcDbTYquEJC6hm1",
  "key27": "4o2V1LkPCW5C5hWx4Gxsd5zx1UtEsG3XXt2HoVKKei5aNESQttqzEpokz3TaZZ7cLuirBZXUXHa2UU1T2fN8x2vc",
  "key28": "5aXgFrmMXY2kMSD3to8TrfAcGMQocxJgmTHb3dDpSampXtxsGvLg96mFJixpwNVYtPUTivjWnaqDSSAiRJeC1nER",
  "key29": "4GsTNL5Fk3AqEGgbaWjUgVaQ4wrwL2vpZpyhPeyn8pNB3xECrYDGhCZwrFYo3bM1x22WZrHAPGmvM2Pq2BA8WaAp",
  "key30": "4QhsqzwCdepZZYk96xfvTgvsYgs1y3gLbeHPSbAsnsGLxeLYqcDukvvnc1XzCYTvf1kprGnUt4m1oS26iBRZ9Pg9",
  "key31": "3kYXgFHpMngBuoXEVPbXVKw3nMwaP5BeZypkJLUczKgUT36o6vEx11MAoGAW5TwfsygiTSFkaRMYm3dyufxb5eh1",
  "key32": "43fneLUZ7u82pKNkjNm1WU7w93bV9RoaYafEkMYCfRuoH68obUrC9PLtAqmBSCwpdDbeqi2KGCJwSERAGVZziTKN",
  "key33": "5p4v63yqbVPzjfSUPEXLxLzoFRzqPcjP66SmUVv1rsRJA9c3MnFMT9rd4TVvS5hPnNjJJWVJNwVsRaSku32ki7SZ",
  "key34": "2eYcL4LqQ4ZAt1azosUESwMLyrwoYSmvhicjvaLb2NQmyBhnnRvTxzKoB4rWDRBSyvuRA5yJGhQ1SbDSYatVqzwC",
  "key35": "4UQVNSXCH8YSphxGp6gmyoex6vvzXyDoy4N5bx4yXkDXUYPdkrmmPE2yREg1EbZHb6ER6zW2QzTocvToMRJELims",
  "key36": "3jLWxS5MDAttBDt4UTcc5nG9h9QeKFKSggncht9E56kKPStDRZ5nC2iEeuEYeLLDJWcpUq41oRKzUFEaorYGkzEq",
  "key37": "5WTJfLZ8ymzaHaEjXTfsjBeVdw43ZT2viK9bpvVXXgMdtFmHyQP3x7oetw3r8nAmG4Lj4DR2uL1HdKb7gCJPmzsS",
  "key38": "rJJhEGbWvNGwgaNhULMVEiaYe8BjcUSE5vxKubZCGbzqypEA6MfTfdPom3fAxu9F2gAXFScmjhfLtdYSVpcM8LL",
  "key39": "2m1KEiWTifXvYBDhPJYD6RAF4nTEgt9zPoHqBDW6hCV9qSbPBdBSECHLVT6NT3TxRqjY6Zm6gkV7r76otv8i8ffL",
  "key40": "dyCTownbKaSrfWP9eYaXq4N2sp6ZP8YpxsmaWVEjTQiD4jWrGBRarKcBtjFxZrvSbijHwNGyNTUx6FYnghzzrsA",
  "key41": "5DXGqYAgkWqXsQyDv59C34MPUiicBYovvC8YFNMVkNxPM9aXH9FyZghQEQXgLdFWouhACzWcRB1eyVxgVGYV1VyL",
  "key42": "3G3nvyiD9nVnRGNZg9t8MgDzy5s4oX8EsgmaLhmmnpX4jmmNYbCJAXYGg2zBYN9KqikAMGPoxNcF4AhdirFzgWa4"
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
