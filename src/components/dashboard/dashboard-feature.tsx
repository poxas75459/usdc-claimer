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
    "3ooviZXnzz8MpS63CG9kwKcixiK918T7oMVigj9K4GgPgK4T5Z5QkDcPUG8UdZnEdnbYDtAZYbNPFmM72h4xfHKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUM7BHcxS6YLroVgXMVhWmMi1GYXzbUnmPKTe4eYHUNfeoUsePPmBqk8VnJTaGwCwoCaqw2NsGDnUK5C2J52R8G",
  "key1": "4mTsZEawwrSKmPPXwY8tmq2GbGHZs6RxTK59DSjscnvmKkyUSDqNSmHr6WUrq4f8efcBP8UwpCLkvhxaJnVh2hqs",
  "key2": "4t3WbcKZb8CvjUKVDGuqvBcxdVAU7Qi2YLmjW7fQ5FBxxXT7Xu3hi6bF7LwVcHaMxRqE3DEGSUHYExqXM1PxT96e",
  "key3": "4WQkaRW1oupKSGLPyf2CMfeZWkwAEM5Cskss6fisvcS8UnrEvaKX6G94Qd7sxakzK7fxM7LSaqUx117sN6hx7nLt",
  "key4": "cq3on8DXFAmenqxVddHu1HY4qRPo43dzdD8qGvZb76V26AJT8DRjcvLoe8wMHQJwJ5ayQZbazCTi3jyAhh2hoxe",
  "key5": "4nPNKBtVrzNGtQWgCJzAr1uJca2C5LDqUhbyE1rmMKVxipqxmAb2QJK1C4EZvMi6mi5V3MNkyUCdNEYCCHf3J68G",
  "key6": "4nz1cxkhqpsQHxuYenPQd1ptzPhSURR5NteDVKF3WdARGsUfdaT7b3zg4J6iMvubBRaEMavtJjw9eakdsP2hJe1B",
  "key7": "odbNJLGepCnqJNfnhhN618v9CsZuizWRtHzHErTJrxdy9RtvAZRtm4cpDG83HLosMMpySwZWbvJFgC9E2Yv1VUf",
  "key8": "3Voi6nEVcQy4LfsbJrDwkoqFxr3bp2smYcjfzfZauEeS4dmD3ycKYr2Mjja8ffvaVF6fvutX6oTajcktdLnCLJqp",
  "key9": "4hV1EUU9qfcXGXoTwpnt63Kq9USyH5n8dzfA8K1dqay2pLsP1BQ8zJL6YyYHf7sgF8UFae2kFhmgHMxeAKsCcmAW",
  "key10": "BgTq9e1iyLsiQx1vjCsR891qD8ihmA8JYs7tb9P6LwPxsY31Ns1sYitcSGQQRCLNTSfLDpMCep5aLMeLqFKPkxY",
  "key11": "w6kBo6CbcDDu4necgfmsPMdyK9ykzZEwMjcE18PP9waNtG23XViuwR7pqFwuifwcDyjzZyvdrumdHrju6R9Ts6F",
  "key12": "32vBMdKPDQFY8wwdbNHZu5Wr65twv2KZzEsHN1soZcvDuhyeeEHuKkZv7NsuoENKRywkBpAD5E9KBmFsLjDtym5z",
  "key13": "Ky3AF7Cesm72oXQnxEDUrnpx6DGYrd3JwCBbpeeZF7EBkMzzb6CMSX5LK51VA4g7pQbnnrKqGes3ZqNZstLANNQ",
  "key14": "4Gx1vtC1VtDr9YJrAMxnCQ8Yv2XjS17y29KF736yDGvY4vaf9fwju2afEqABtngGjpQKiEXRzYCjRqK8nuNo7nJ4",
  "key15": "5Q1ZYt3X5WJtnMzQMi5FY85Ae8W7FTgr7WFQ5tzKCzqbRPhVz8ra2hn1SrM7JWRv5v2QUVYiuP6r2q17iFHQKkGK",
  "key16": "3zTNSdha3vWLM68WxEm6zz1j3ebVz1ryxNes5FzKECtkURMQcuTb4VVh8YtHMsENMJg2Jm5NncJPNRBWH1Qz6vNx",
  "key17": "5wPsRWeCxYMpjWoEmZfjNwBSUpULWWxBCYi4VMfFsGnNSYmXnq7RsxxuMphTZB3Yc3hchtDNeQ3gQQzaqdw4j42D",
  "key18": "4X98xDB5uWzq6xshNrYLkbfg1HsesfKXAUmyccc42q4XzArHCGijhiEbA72TNfkxkLkLt15g482nyUPTSHATRJ3D",
  "key19": "4DgKDYsn89PvRcn76zW25fG9WGfNzoh4zWwqdNhMy6onTPH7Mab1SbSqrt3pEdYPDACiMfZM9PNftzkLMBmEje7a",
  "key20": "33Ni8aJFSV419cqTmJXD45JeNWuqCMkN9ar2aVWvqqi5D6v3H8qPf94qdPC5MdsmpdF6WSdufkvo4KtiUN3GM7Us",
  "key21": "5Aq8Fr6YCgHmduQ4UehHNpbhScacwta4haZdPX73JYQj3dsrwLpjiz3NteBHh2Zkges4bkkWH5hdnfNeC4QgQns3",
  "key22": "4nCNdqu1CpPnSqRdqJukxig72UUmDuM3FjsJy8gLNtgSk9BMtpHtsdPT5NmmprUPKakmMYb91uaFkRtWGtbnnUS",
  "key23": "2XP1RcQHg3KDUDVzYASFgPmJo7W84qzYxLKDu2JuBrwwbaYikUurdzG333B6ETMaeL8q5wkWz5JVAvRQ2CQUmBv6",
  "key24": "3tmWe8uxcAoNczpVRUioCf95bh4F22U8evYQUHL3LgGDx2gNo1rn3fBGUPoYrfYDknewtGYi4vYNbJkm2ypicRRM",
  "key25": "4ML3BfRgdmfXFqcJYPzE3CrdHFhBbUfJAXYVzEXJ2AJY9VQqq7An5yCefkKEPjXG9Lrp8ikQ5V1iMhmvkCwJ9cYk",
  "key26": "bDbvjiqbPY1o3x8Dev2oZh3VYzQHqqn2jxvq4zUTdtSrAcK2iXhLqwvHF69621ivWN3KBj4dHgrqcnYNwgzomCx",
  "key27": "2eQvWXrChPXS5JygF4Ffuc3NZKWfa4DYFQPamXCDQNfU8y9UYYxMFFZhiMUsmfjip2eSKZMtnnnDZsdKWDEAj292",
  "key28": "3uSxsasK5g1Fmd8FZd54SsdVxQQ3HiEX8rL5dNjH9Gea3MYDsrMEjdtvQY24yvPYygZU4f5Ayb2RvBQzHbWMxeYW",
  "key29": "3v1QBVWZhofQACuzCt5aXMvx1T8rBusGFajooe8CZLmMz3tUkyfjppXGeNgZxufkCruiwwbimdMgWhJfx8CoWwy",
  "key30": "5mPZrj7BRJSHn2SCTYwvLWviLCkLwhsm62KaHkTBkZv37e3gi1cybuAsWUDXkjHawSjT7gfHksTyTYs42dH8iXfD",
  "key31": "5FmzGVBSNUj9j3xCCdNvr3jgUMwthACBYiuvvkohkvfChxCvTvSDLmdGisBYSAtR1u9ud1DvikmBuA3w2CXdaX5c",
  "key32": "4KDvqWGM232dHYdVLGZQUH8DEY4EeRWxGY46VE8XpScxBwLU5fEmUhKJdDchY2wRPGz4nirTMeDNmjnm71DUbG5N",
  "key33": "3MxpmjQDZqcSRW5XVBJi4qGVj5PBQB4Jf4NKrpJh81T8PE2CdtQn3v7sNSiBEagYBoDzB528wU3g3PafV9CiAimX",
  "key34": "666EJx2pYroHK2RPNLKwVRS9snPYY6DkSVHdEvX8UQRpziDxstPJoGdPKjUusTMcHTQdDojxiTaLh4u1N2UiNJar",
  "key35": "wc3XLSaNuQgcJhoiVn9rpWhPrxHHMnNFcinUGREVQpgKBg6DyC2PSXPXezvxEkh7fmTGWqQEZfnkGBf6UG59ZcV"
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
