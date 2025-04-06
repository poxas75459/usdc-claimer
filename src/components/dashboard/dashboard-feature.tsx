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
    "52V9kxU7ZvrfLi42M2ujdMjgC3ZLZcLcFXTmqEPBP4iFn1FPwQUdBbqdncXhSPS3yFLCcV9ogNpJjiQ4mJc8SRtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dVoTVTLaLuW6bxPgsS7pZS1hjUvJ9JWW3s91eaAvEbkUzcwb14r3Pudq7D9c7rgdQy5bttSfvNupfpfPUyrdpPe",
  "key1": "2T4zE5uxTeu4TkepokNyxHu1HfuYnCwu4PsqFv2YYD2R8Vr9h9NqJMK2DPe3Pa5g6RaRawiSfL3c3qFFyV2MzSoc",
  "key2": "3JVrabXQzPbKRJt9ZTKgRz2tVxLr2MzSArYyDgtYA7TGmtDa92fmurJ7prrDqFme6qt7929drrmdn6ZNJhz5P8Nu",
  "key3": "qEFVPpkyyBesqbhp9NHTUZ3AVHxTKBRWzYyiZTjnaXo5haLmjm7AqHzbUbxhkk2g7sQbJSFBdQSLJYu58y2LpkE",
  "key4": "5xcBtiizvGZaDP6hzYWm2Lip3hiKtfL3fENGTnLMUnARfTzCryh95Ec1uUjrW4oK11AfmsXLZdfcwnezD4xc6Vfc",
  "key5": "3hRRqmo6spbr8hYe4KhKuhgQVFim2smDzHuTNPEZ8Yh1AZyrdr6EKLHrgzGxZY6qd2xY5zUQuJ57yiQZ4Jd4KqGN",
  "key6": "rxsCfpYucj4GC6z8RapSDuxvBWDZjB9oEsNvdBNSX1Z37kFw9ox1XfhBYXtMLM3gVohv1Sw8VmbH9p3pP6vq1Jh",
  "key7": "3T6x7Fkcz2kpb6czJJteZHEhNrXszE23gX8osX8ML1j4sK58GG6q3qH69aRDJWeWDdTnyjUthsKKjPMs4PUogx2M",
  "key8": "5qRqCeZBjhKEsojJQADxLX6z5Mfa8QXeGGm8A8CrT9yJVVYgDQLtsZ6ADHpPdF4sexy9UhnJBVu4poKgqdGhf2MV",
  "key9": "2e1YieVpNTdWZjAE5BVFPF1h7UuF7DZMYuv8REboFRFaiNCxYzsKmNJA3qVDSptf2kXLCYHTeMjr8xdngJDmz2ki",
  "key10": "5oWYebFknjRNnX1zzvVxeX2mqJpkvTongxEvUu4K32H86TEU1qmbHjgX8GVLGNhTUSNV32oqTcSDgo1hwbqBi4r",
  "key11": "23bYQoezwyrzTaimjaXZ1EpPbmM7oGK8Yvrwhmt4k3ZAwSTgfuZotREn5ukN7nH54m7NnZUj2jFWzo3L6FNBQnyt",
  "key12": "3hehpCprj3Xc4pT1MkH6W3GWHM3CRQ5VpkHKqJDLLe84uwVxfW2ieaPWtzJUHvDEumv69ioEKwQuF6NNaw4z3yN6",
  "key13": "2eWjqFCTN5EhAZr3wksmfBZmkvsWzV3Jxy17G1X1zoSsaVo2qAUZaRudrN4nshKYtKfV4izsi1tVsiSvwyagxS4o",
  "key14": "4NvNNZuZMYnnSCkHTPceXu1z3hjkpCaqBQc1KTn41tpujCDa6FA4r2DnfdXwMnjRmLgGngiU9iovBzyun9JtWNNJ",
  "key15": "4ju7ToYq9JNy926v6bwtoyPNkGZARFfvM8jmYE8CqmJVkCzp1ftVYgAbQEE3AFW1Cj32k5CSXnfj7EXMhNkSkWz1",
  "key16": "5L1Sx8dzaAgeN2E2NboSZbPbjYGUaCQm71MUBPHt8gRrDPsdoiQ1iXXRQN7LMSJHBBMfs7VWJVEGxPBEXW8XgKrG",
  "key17": "2Nkw2nxAU5x2GMhjU5mi2tWPT2b9J9ULywmb3uzPVYNMeQvGzRYqWiBqeA8KBmotgGGfi6akFPkkSuLiHWLDKNZK",
  "key18": "27SdwT9xk8jCuWecf7EwjNtNohakXHeecQvshhLw27nGUPB7ZVPjC4xoCP1gkKGZpf88pDat5opysZ5btkBZMSEW",
  "key19": "3XwrfDz5avng8VBhZE1PTvzz2SHrcwq77uR2smURiW3q8zibxGEmBTCnJrnBXgcbhAXf3U2nRQ7teyb8WSPRwcdP",
  "key20": "LuqJjCkxTKeSSemAuA8ePLa27t6eHTidp7NY86tA1whXRmVpXPSbEEQncgCA3XCexmbUrdf1cU8vMo2HXuFBWWk",
  "key21": "5nie9BcrDDv8Rcq8WRCmdminSdaYPTCxEdJkcdz3QhgedBEJpjqsqyKU2SZX2TB46ssnSa2qPL57fosqJMvPp1BQ",
  "key22": "4ncfLASLYJoTKe1DLArm6WggEAEaZieRWQDD5tk5v4cvVaAHmp8DxvQzUW5rs6tcq1Pt8rNv4wisJiuBsP7K9Gua",
  "key23": "3TbCj2NjC6MoxCJj3ivy4u8PSWu6MJyndjisX9chPDm3Te14X8DCqv6cdDh6LLr9KuBvJ9djYAtCKeS6M4Ec5X5M",
  "key24": "5MsfEpcXP7EjYsdMwrQt2wBtu71iNZbZVaDxVwWBXRh16VGiPVfUhtEvJ1HvFn4DM7u4Nvf2w7kvLTuZjNiUyWXu",
  "key25": "2kioyrGRhuFdHbjeRp5f4ESQCKoPZffZhyimnqVoeW7xR4Smf2G3rMdc9TNgd1nmGsNABnk3MkzGt11nk6zbcyuW",
  "key26": "5HxvY27BodseVN42coCAnjZNjAyY72fDkVqs4eWYDinfsqsBEtbftWDqzDQVeo4Z8v26jTYKjNSgYW7jzYswjtHs",
  "key27": "2AEyn6huRAdDUL6u9Px9JDBknr7XC5RWhDyDeUVLVfcm91taKshp3oymEyhBPqC2xiXZsPMz2JMLbfmcAwfXCUu6",
  "key28": "3dFnpDHCy16QPWER1HbtGxA9dvdG6UPNnZnA1QkxDTyQTFNX2XrDtmxwHRmb3z6FnppbifinjXGsnZxMvySd4dPn",
  "key29": "nktCUFGXgzSnKYZeiioATaivfVPWHtZ2gycke7Pg4VrVkbzxB3A7rkRYT8VTWiTrgib45nJaAnD73aZDky71PAL",
  "key30": "25mxxqGK24hTaGGEgyLzTfFHqjkFAGE5c1h2N4LizoPuUrykcNripWTPp7qhmxBScfoDbUTtVbUco93PE6of3U2U",
  "key31": "5CGZdHxSjois5hwzuRvFwuGJjknyRStL8JYzsb2CKEi5tM2NF6VegRNr5wnLNzYhqMEmr3ZcSvKNGAsaz5FREpQn",
  "key32": "5A3A8Muuegz44Ku1EZkaB9WCk7FeyDfziaph8NG94bMTm7SqFnxXBNDAh5GcrPZVFg3vW76TTLwMvMr3o3QS4raS",
  "key33": "5LdmpxdcSwzfuB3EEdp48VB8J7VCMEG4WCE3BQD8GDDhuJ7CKxnv95BRz4M5wab5DNDkUZkQTckFUNG2XgmnDEPd",
  "key34": "3NSjyqzKqhKxgNJ25cy2gyTPYvLmyN7h49iYJYdYBUhQAydYFbWJtqkunk1AZcbGjNXPhwZKq5uSLxJDeuD5zFAL",
  "key35": "3Vg8XgxKekGhpRBjfdMk4D1azNnuXjBEfWe9NJ94Azk9M9uRnKfRwvXyiN5L8tRL8bv5JCHPn92SX6Un6WenEJkY"
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
