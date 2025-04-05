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
    "2Myo9AqHVaaZyffEkryX2YvCXu6EpAEfrQiMdt1GRjw7ZRmKfgNqUEKRmafrtzEY4stnpAwwJASCABtKeqL3JLCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZzKR32jxayJj5y8wpAwuiK5Vj1hvEcYtD7tks4Bk21PYwsVKuEg69JVujLaphKgw6JRwiii4u4kLDB9oztGuh1J",
  "key1": "5SQV55gY1q8a3K9A25dRujTHo7gGJ1uPrWFLrjFzmo51evWMdjKppBmhLC63HzSm8BQxNmZVxPVxwUYMfoFJEqCC",
  "key2": "3pJJDtQS1e9KdYfPhN7g2qmbDkAaGa34UVc7Ux1Qw7uKwtB5DQ9uXXHu59Zrmv78QLaN7AzCJa3KcZHLENiM7ngL",
  "key3": "U6BcF4oRmJ52GcA4MUbWuwUWVBt6gJ3igonrhx1EeT4f9w4UNQjxS1V2hUjRSTy4hpnbB22dgvQjDVyiexi9JNM",
  "key4": "hNyojsAvhMDyBT8NeEcoWK9o2ihNHJDKB6v2JU34xb8ZmmiWLcF4GvLprUCP4YFUBTVpA8K2Lqw4c8hXXn2Yfgs",
  "key5": "64cwte4oNmo1SRkSwT2ARJtEFF5RaVLHBFLCcqagtx1twy7XuoMZqLBWtpRQYXRN7iAfiB895pEatxFtfRV5CH2M",
  "key6": "5FaELhnTEFuyUV18bZQn13UieK8EZiMQ2SJBhFJ5aYj3HxVbKr2sGQ1QKLCgVgxRL56ATivFUqH4wL6dRciGibAF",
  "key7": "3ipTxz4jaQtzDMhbSFUQPbnNSNHrsQ7YqTGb5edy8oX8PcUTWWvVHc4kMymFK7z8JCnGs4dncAHHLWd6xEwB9La1",
  "key8": "5ZEkNok1GG79ePvCyKKvHheUmrey5dGvjfrMgyCZcDEbT5cvsmjM124XQB6xyg2uraFVDNFdtoEzAZiynN1PXKqi",
  "key9": "57eikEw85ZS37coPDLJL5KJ6svDUeCc3FM5mez4EsfPAG4B1Rd395EyorVFEEDygsgNmD5HQa8fBwhYfKxdTsvkL",
  "key10": "5iw56zJcsexXNzPkgMttvrX76D8mxftR1hW1zt6KkicdUT2B3qN1CbJiXbCf62FDd5DnZuBf5m96RQsWaoPNk9Pi",
  "key11": "2NSfRRfrNtPgTzr5a31F1eLQzNKEE8xcRUbcBV1wL7oJ7Cojk11f2PdieCpUC7GKyNA1VHLzzrfHNUvSN9wwxQdz",
  "key12": "4P6VbewxaTa4NNusUeW58xznpXoQWyK6mLQEPfJtFQ6Rn6ZdbXcTpMhQEwNPH91FA8BcAU7Rqt2TVqXLeg5GP7k4",
  "key13": "4M3YMFXy5N6H89S6zodaJZLhiUfAvjwwSH2VjE3JmFbjD29LP48ddH5K7y1moS3pJcwGUdVvSd1nwL1pSRakm1NW",
  "key14": "63BB5aMJbxcznxbFBqQPRKR59rP6BmvphUyodZjLm7kEqG5QQhisj3zXiS7JDSvNXEcLAJmVNFZYXe67LmqLzJaX",
  "key15": "5fS4UCFLaz5bsgJ9bKysQNntFPrLHiw5jewD1uDxQuWkaHax91gtcuDsKVxzAgMEEXWcUCng2ZQuK9rPqEjDUkFN",
  "key16": "351pPoMwHsXMZnbLng685V5MYmhWVJz9m2nXK1QyEfJTHpS9FHEfxujZNkQ8gMynhxNbY9L6i7naCPVsCfDTUPAw",
  "key17": "3HzDEfaA7w6eVi6HJVHEepLCJYGAedncBq9FriqK8aaBnxECmLqkLbHPRKBpGTS1gNwfDbt6Jx4heTuVy1S1yNDf",
  "key18": "2i2eB99KeQ2tjrr6weQFrNwg4SGe3qU9VLavRJC5HVU9umpP1u3s1J9qCBnkc5ukkUGkTj5KnsVrgMqWC3WcGJcW",
  "key19": "TUvdEsR149ahQFqb1S731P8tLMzn5unR5bHBdR6ZoTJ6G9YckZgZL5RENhbuKJ5sTShrPXCdFLFtmGuxWBEc8gT",
  "key20": "5XN4ehA1CVK4H4yKRUrLqbk2KTWsrUJ21Hjw12Mff3yBKSWnPFkQwiyF3Udkgsb1Qhm3zh18J3mKnE5Q8wdf4Gba",
  "key21": "gVUNKhcNniZLBG9gNS5LSqFfhTUnoJWkxxWVLcMj8LJo4RTofEWWAuQD8a7CuuUhL4wb92jgzM95qE6mywNGQUr",
  "key22": "2h9MmZLWFnN9jwUSJU7v1a8p66J4s9sBruyCU1fbmuwS23eQEM4VG587ifFnNEAqSbP7wKpwF4d47goXSY1PT69j",
  "key23": "RBWumrpxKL4PvFMSTstbJmaqVGqW8RxVAjgCCJ9kke7Ywbf5HmNsv8HEemkAhND2MMe34W3oA1zrrsAAdkEWqBa",
  "key24": "5Mc2snazQQbz9T2iPuNbdHkorTnNDuxpkb75Wse95FQ2RwyCvvp3ehXTKYTL7gfnKtawHNCxmTEXFSFSrccdfAbK",
  "key25": "3RcyWQNzAHJLkGot7aBu8heK8FwBztMrGUxFRgff71fe4MMASo4LvirJuEoFEes98rfWJjxVmYZjd1eHqX6TzB4M",
  "key26": "47x98KQ356iDjAUE1LDAVRbQt81PPFELa5wDsNVGzrjCrsiqfawEkijs3vXycaRcoTeWdqb8iyFVqeKsjbPzPVes",
  "key27": "ZNXM5J8nWcpzobgAhKDqcN9qcysKwyPqc6mXBnkpTFob86cHS3mJisf4oTv4iQ93JU5WxYiD713qeeue3QMuxgg",
  "key28": "4FCYJqwp86TSqSBWwnaWM3bgY85RYYSmZ1xf3EWVPeWPoTNVZNjmFnYTESuxRBmBSJVCVvfSrBM6dEzUNRkDhXFR",
  "key29": "3LGrWxLMg1r8PxQSZTEz72HYLcYG9xwL4LLitZy1LhFZqXiuxM4sedBzUbdCJioxmJPhDCUuqYQFjymjRT8awEp1",
  "key30": "LYqtgEtrNqRDmBhCTGN57MdPuraLVPRm6R7FHVP7hTzxMpjDD4uBMdJvTLPjAgyHtNEqKy3RVNkMgD17S8RBbNP",
  "key31": "54pp6u6M953nG8Cz5rMFvkBSwZJDyegCvVoqS8ESSEe4ystNNoRtGSzmmQ5Jr43PVAYME9yz1thyoR7chnMy8q15",
  "key32": "2W839ZhEQygTzXkXu2DovE8feTRPV2DVz7Gzb55Dey61e2UmcMSrRKSzCyTW5kUWePUvECqFaDPcTmoR2XLrrG7t",
  "key33": "4jdVWyckTgzTiwSoTQhe6DgFE1dMnqHNbFPNXEJUxap5mXjbqg8ke6fGAuVnHLGbJDNANnXhyDXySEX85hk3Js1J",
  "key34": "2SPrkfeWiPDcMXKH4MoZjG98yAFUKEs8QWgNyixchNFURorS3yqjbikz6nCCeHEQz7XqZa5iXHqoUMt2ahjGbtwt",
  "key35": "2SYBCBaxawUwF9rste4afNxn3gAEwFBPXWRBdFaYRtVv8DV4KZj9J5U7b2Bh1Su4mBPt3v4okssY4P4ieUw6uow8",
  "key36": "5donos8Ks9dnjMTRutYnbtz1rPPX1DHWEMWBtQ7jnksYbDM4Hkgx3x4DxRz5meH8gjWNefNLJLSF7X5q5dRmWLhs",
  "key37": "3egT7XfJSBK7VosRAPzBNmpSEoCcCYKAJxV24N29yKRgGZ3HLirFECGF97KuBdVhTMsLp9ESWR3cAqdk1Z8Xy26a",
  "key38": "3KErhKhUd7qf8yGppphcKZuTzkUmYPXrSAcQ3yRnxy5Y9KeVwtN5yiM4vqnsdpAc4Ct39nM8yiqzRHodhmekAuLX",
  "key39": "3qwrkxuU8NCwcTmbMuU1R59ejraXNPQo8WrBXKDYNtmL59pp2pCNjMMz2oiZX6u21XpJeZ5JfkQy6ebAFMHiGTNs",
  "key40": "5kdmvq4gMHcTnuHRNuCde5WfJAer3a4233tBqYcX7xcFUHQGJwfa6Xt6T7Sp4MzynZfwRxuA3DLhR7PFXbFpgAp6",
  "key41": "5NYeukzJChrvTecRWKpmjWJRshBiqbdf4bBWHtrkNAiqze4E1Hrrw9JJg5CX8kmFg2Ka894ZhgHnrNjUB3VbE7Lg",
  "key42": "WK4JjxpSAFMNSHgA1a6wuZeERZ2zgQHyJt2o5XLttKbC1wQpiYGGCCmxC4NfsNbEUr5LVE6v5U3aEJANvDrMBYE",
  "key43": "4qEbdn52DhdsNE13ikZbx19SMEc4az4hxDKnqN6P1xK98RC2dnCuZMVWyD576MzHgtMhFRu12JLGNBoLQZREgdAn",
  "key44": "rRdwuvyNhVVYQEc487DWiycTHKS7X8o4VMTjcsJTSoD17KAuNL9MoSDNVjEmKLrDKe2YyF2k6az7zfceBQ9stWK",
  "key45": "3MrxCKvo5XRw5k2Yu6Q4sQRFiCcE9EHEPm4PYW5TbvFXQUeyujy4F3fRFtBYbPgiFJ7eSQ3zjPQ6zPPTHmLchDSU",
  "key46": "3aVt2m8pSGLJ4F8RirtxsrFHcWDH56uhNrce6PVz74oWUebYoKjgWswnrWhwwpFMf4XDgVKAYAFBYJSNd72GTB71"
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
