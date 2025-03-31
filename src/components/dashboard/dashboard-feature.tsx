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
    "3raKcQtjDBwz1Zsa9jnLkYa9Rj4EeF1Zheuc82nCJUonmApCGKQDLob6eA4j2YUcafYNqaocevuqKC4XViFzAbdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MpwqUpZV66mDUBZPbXw32gvuebetL6ncstoTHREsV2rvwTPvi89sUxXBhyGfdJHxTkNk4WATJ6YxEtJk28NVjxh",
  "key1": "5RPp1LVHkxboSbVpaTHVX2yf5XTtvSiRYhLdDh5hEUVKSuSLpM5g5T8TbpmmNF7Rsc7LVxCcrPULk5bvk81iG9ip",
  "key2": "tedvofxhN4phFThybxZQCUsYaddh3bp66aW1e3NdTztcyNcXRjrsBkn4cHuDvhZp84vZv2Jkmw9y15w1PfRE16T",
  "key3": "4qXUBFcgXYAsdGhMhaJRDCPxXbgEh3mQ82PddEeW62fDr6nADPGT3bc64CwN9b5783e18WfCfeuFQxMZjPmJUrF",
  "key4": "g5ikTdRxD7nRa4MfPq9HsQsxRRYbyX7yVxcDy281pVS64QfiGWSbRFtCuonpxyeMn43wph5xBoPkBteN4t7LwgC",
  "key5": "2fxyRPcj7qsaSxVrgQyQJMnYCUwzXGMm3apTYMjCVpjwc6JCBgqZR7HNmnbfdamiapCFiVw5CcNK5xjsTBXuZdpg",
  "key6": "4jYxhYusTjwY9dBFeHM38WZVAFmaioEGDPjWZZpECwPwGgfmPV5prvEjJqorgtSMfwG3ZAs3RXYgNV5wSvJzJzNE",
  "key7": "yaf6tL6kvVQUsS5u1F4FKHmbZG9ZTtxETrtRjiBJy8Z2AviMSGWiQKEoM9MUqCEhjYRbHbbtJTPSZSzzM77gPCZ",
  "key8": "25dw4LE89wifmcAV3m4PSAFbipn2JbZnXr2v3cPgfJA7XQ8Diwzu3uLcEmKh9MSjFqmgeBvmQZwGJcLDNURYVWA4",
  "key9": "2izPJRgexLjZUabz2oDvt8db5fBGAccN5iqAEAd8QzTpS4GiVq37e7ZBtfyrynrJKnRq4uZi4r4Mgo7VNfzP7YHu",
  "key10": "2x6PXWHoDC157Hw7dXs8xoPZB3DAF4PQeRQMUnz9YTrj5Hm6tBBPqmKGf2cLeCXk1A42UtYEbs8LXE8Va7wEwU1",
  "key11": "3SnKts4JPuZvWRz5uu7QMpSQq8WnokhRE214J5XnyTmLrQjrrnq4wmEPegxXQ7hZq5cZLPUK8yy6VpYRxtHrL3at",
  "key12": "42JV4eDVA2tGCC3hWudtMekMiXHU5WXG149mBYyqmoj5bUsLCNzeGJbYQoyWqLLmVwyiac1kYd5hExbvAAraqFto",
  "key13": "3DBegNEHKcj3wemhFpLJVhUzrxiqFUEPsbNips9cEtAJ7z78PPU9XoSg36bMWiVCH5rMrz1Y1PYoUueGZMZSoh4S",
  "key14": "5DTDYnA3Cv2jWwurT9obWrCUeLk5owTjXrFtk8QUFvMPmZKCPZU7UotKqwzismKtegbY9SQkQrvvNhRPvkWD5mBP",
  "key15": "4qWHTPPnq1y4MMWWUZvP6DmkA34aAF6cg4FfAPz2zVFL4WNaYhszXTCrDEuT88vKEjpH8b8qbS3ogCEZsNtpPEm8",
  "key16": "fGCusT5Pqxsh4hQPaYc3bTUzaod9DPRZQzjtkdy1AdQbzNpuxC7FJQzpXHwTH9kN7CQ4t1TXEosiKgTSswviNgm",
  "key17": "5HtSWnXXRWyPtZydSbE8FBU4H1N761C1BWQwnraMTzZEdc4vBNG57p7oz7XbWJt3NRPrWkVJhBxdpnKUNJ4KxfMp",
  "key18": "4JmdLrNkLHPYtf1KX5erJGocQNmziBqPycmKsHzBKGtGCFfk8Ze2EwyTD5srNvmcapW5ir4huFLBEGqxon4KLnzE",
  "key19": "52E974pUWec9vW4fEbcWPjoXApFjrwyhfc8mp3F2MvRynjFyCLK5vBn4EJztTqk4gA3ifaBcwWuKNrm1V1QYyh99",
  "key20": "2HCRji8ibUSo1CQN8roz5g5az4eXAUFYVCoqRF8C4CSdwtyqfFKRJGT4tFLTbNv27QsycMyPinbjsxLjTLo9oFb",
  "key21": "bdpyC7F37mdYRqXFhTyAubd8WLbdXzDSHbbyWujbeXnjeegsJawCSYXeaMeEmyGTCsjMJM6rRJsUfo6czfkcewk",
  "key22": "5T2LASAxfKm4C7uBM6gwvEjnrXiZiUnLKqBgosnGSW4s2dteMvLJ1Ck5bJrj2G9sxkSNwdbpuJ1DTSA8n2PySTBN",
  "key23": "34ijpcqC3VBNhfepAGDEMGbM9GJTK4h2iTbYbwgaHDq4kAArwE5mDyxZiUcMh8pVnV6gaj19Pck3eD9zmboohv6u",
  "key24": "2BL4NWFu2C9xdAte5bDzrkSjG5Tz4QfrdZa6WpBdDHBcXczCRHyXnrJFwkvGcQJ4KJXJaZJi8yT2yvQRhU46SLkf",
  "key25": "3e7DwJBDpiLMP8HiGcxiF8B8QLju7KqiHfSssqigMy19N8EkHGut8zRPpnXe8Deoie5tg8iVujFv5z71cskSZ6n5",
  "key26": "5q8iPqruS65Wh6WXwqXTKcrZxoK5VZRkeBRjYmiN2JgK58pie7PZs3zRMRk8i8jdeYjCWCY7i1AcT4SCdqYHM4zd",
  "key27": "24Yj8wsxKrscWUS8dxUG8qLRbYZwJ9qGQA97vusAtjGDbYVUgHPafqFKfBKTW6mBRnMs22UufStu6CwVAeFDq7j5",
  "key28": "5djKkYheKf4k5py9fzMCq7r8iWeiroh7cPCZLro812Dgt7y54xzaKv3iEtxKUJ8hngmoGknCTYVz5uJ9q6RF1QA3",
  "key29": "2pb4HwGyZJB9zZ4igXdL93nZ1Pyye3xcAhCoYHSvL8Dd3HoL5sekY1QtPDdFw6XXp7YVLrG3cVj6NyQxAHofGqS3",
  "key30": "5ZLF7UTqEV2gFooztARWPRXmHYuzndTjm9MPKSL9avR11YRZ3y3LoMeyfeUbXqZBJLMZrAfNuW5FoFnVbkg14jde",
  "key31": "3B9531ZEctUGtUjJNT9xpV66gb7vCGn8ztQZixFZaUo6ujo7yYV2rFEWvYygbuLY2fPTK9YznMfkzUyuoV3wAjDK",
  "key32": "4PusviXY7msagbiFhjBPE1a4HkopjJ4K96yNFkkhneHnYHAPSLUr9xvGBD3QxRV47TPoSLNbqaM53gUVP5KCLoPa",
  "key33": "63xqCj2LZGHu4myse5XrRRjG81p36ZAymhLdXzQUqJZWFDsSe2qkw2nzx7b4KeCT8gFHmRQFKk7xMwb396ArhS6A",
  "key34": "5nZpFcSrRtjuL4FSBdeN3MsQGaH5kxKnt429HiNJycU1YzmibXqVVDCjYZ8bTd9rjyfQnELkSdbKXKqA2ABEiVnS",
  "key35": "49ghCSuLraYgpcj7jvcDfYrvaiRggtXwQPPwCSUmUqtZAaC11kZEbxQMpHfxAD9Rof1q1BjfvprjPXQcVp5GM1Rz",
  "key36": "4jeRFzJK236Q5kAk3znPBikUqsQhopAbS9rnJDtoGNBggJd5ttVDiFYpLgWwfDf9yoKPsq35ddjnLXJx8ivjxFS4"
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
