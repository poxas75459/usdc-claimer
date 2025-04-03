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
    "4xuwP7JfsRxwAL57dAq1Ku7DFNjJ652Dnvqk1JHSBxytXDVzAasWJ2AuxkFUsjNeoyyQrnoj7H35vnBHgGrPLy9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDXw9Q1rdfFAp86LAHsbhXhvMKHZftynky6erK1EjP9s2tPha3H3kHP7dn2PBytwkeihxoqHDPEpRLaTQfDgq2z",
  "key1": "4WnJCFNA8y7ZF3A7rcZhKGjtGdJgZTZSUECGbgwQhnCTWTyrbgtGqqMpQMy4hCsaDnh2BHbZGTkgay8bXhySQXA3",
  "key2": "2snEXf6WvjZFdH8ehUp14fe6pedHJumLdnr9ZvnPZc38UvFNjhE56RKmgL6Mmt5vnvX41tScMweiQu6zwPX2fdQw",
  "key3": "7eAm7rD6Fg5J38XCY6DVf341xqHYkthJBPYYno22WGo2sVzE8kCrB4wEiNbuiTWRXXCG9ri1tWvzJL7uFUP3w3U",
  "key4": "5zCsJr1RYXpY1sUQqbvXvYL6azdMY9uyyqpjwQ2huMK9uR4Bq3Gqeevm1NmyBsQiBTYqZLYYYH1wxNU4tPvJVdpm",
  "key5": "2Ky6DR8TRCf9gXgBidYrm8tWPkX5BRA9qyBzxtzN2z4upkwinmAih3UwSXAKumQ5FHXXx6tKhHkSFn1GbvMarkix",
  "key6": "Abs4DgL6wtvfsLT5Xf5ztcWGKbLYvitSEf81iovk2PBEneCAU6nsgxCcSnRVCYYvmxmuxsMjYAuv6kLJsRX6pA5",
  "key7": "2huajCzXeRXzPQ61SXpzL8ZMPdSrH5cV5Dw5RjfoTfwwdCRBsPg2c6TbNuU5CwcWepeMRCRu5qcXUKuqNuND6gbD",
  "key8": "5HYLVZrMEKi84SHAcHdbXGo8Mw7bcY1bRKCWcyPcQ78JQ2L8DiMDC3CizA5tVCb1Y5PsTLiNP3HyQETXwkhQYQxy",
  "key9": "34BzDuQzqzVmCk5T85jByGxKPxoqozGur9VN23b79StUMdH6ojhvPLgo9N4GotrRVeciGFvA4kr1kVQfDVnqcXcd",
  "key10": "MomX3HJmrM4c8ULMMfxHFrnTeMFGr6jjLYxUgYJJGPiCdtPv7iAugVkRYDCg9zY7hV9TR6x7EQh3KQwHahC2p9q",
  "key11": "4BLkNmQNPbcGoxJz5E7t1pgi1CxTY1QyAvuEjZ9zFEH85FA5sMFeUNXXHDr9qVwY5f821zjcBpfMiRJSgKapPczf",
  "key12": "4hiKTjazPdxQPQXw5DKhG8kwmTxnzpn4xQ9GnL6WuyPHR496KVcSHww9wc1yYcohesoffEV3jCNhgw2VBJCuR8Tw",
  "key13": "2SVMJDmnxibuBXc818fXP9dTLTjC2k1WANR1hbRc6q1Bieb5RhDdCjrkQ2Xi5ka16rBoGVsqy5gzzis4fXsGDgz4",
  "key14": "5tT19v9S7XirioKcFu2nvS9Lz8DSH4Qvvk4ocASDtRWkJXcCf2hTLoAP962e1UJh7EUqyDT5sDfVakPFFoEFr14S",
  "key15": "XDNoZADFyMbN94B37vhbdPy4RzBwNtjgUHL9ixK1xwhLkheedkU1YwM1X6hiwSA1BLSjhof77pnmTxzJ4wW6wXi",
  "key16": "4MpXRwVC3TXnSTF85uD5Bj2oG55aWuUWPAxhj4y84h7YXQxaoZWcAuEj2964YmK2oMMoKSXhU19mzxHdtMe1b7zC",
  "key17": "2icBEwjhRRFuEau6CNDGmJu7eB1sfwnynXCGP7MenjmeQcHtYWry8X9aoNJUy6Se1UmxxfvqUHo9RprWiq9egKvt",
  "key18": "4cwAMrwXUMLkdeefgbgtVjUchiBFnvwT5F2rmo8X78hnyWNQbAfiS8UPgJHrXxdhFNAUr3E2J9MbqEmUrJBWPqyT",
  "key19": "2DjWRuQKvEbGVhXPj9Vxr68jKSAm9bfQotAbcqKUBQd9podNXxgAFB8KT6meT4c4SxKhB135Wns1JGTHLsTc66eb",
  "key20": "2c7adbPk94VrwKgAKKK2f75d8QH9ARAnESQsZAZEGDkpyPueBD1GkCzKK6Sv3wuWW9KoJLF3KWow3VXVzQodf73W",
  "key21": "4Br5HiJsQ3wijgMN8xLphhDC8TQE7pM6HXqqk62U2G2akkvVpxuRrmenYZ2qR7WuG1cWvef2V7TFdqajgd6WyLnf",
  "key22": "36AwvRvVHshoxpHCeym1YgdULL8oyHsUnBW39TScqM26rmgsThPoEUZVcuVtF51xCcTpQh4eWqwB1GNoorc5SHjN",
  "key23": "5adHCXKR7bgvcvmBksb3aBJZTn8oWEDyeUykCbLrHQgXWzBKX47i6Zp4eu7y1fBBbr6YtTKjaEbjDPL4mMy76p4V",
  "key24": "3bcRz66pQx7yRhdY317GYnNX6GVeMVzHrcqTNgNF4ugDQunakkkJejK2L3aoBhwoxPUr6pVyDSkPopLJ1NRg4R2C",
  "key25": "5cZ7SjRHTQvoEm8tXUETKkH89NJkVRcHbJHG93Y1EcJXdVf7U72dVhmFuMWzHrhDm8CN5yjLKTvqGmBP8LGrV2Ln",
  "key26": "29BGbqSfk8Ec3qCR82dsxQoKTvufBmXBWirgQE7Ja4er62A9guXYXVdUTXW8gs1PZJP47ibRBweYP46rReNcATio",
  "key27": "3zyMoE4Ny1GUF5E6DK6tZF8WYgMTz7GzjsJcFmXGiLBa8EmZ2soHy6vse7Ucxq9DwB27R3x3jVcxmsabh1HrMpWx",
  "key28": "3BZ84Uc6w1pzEHGX2GztgkYdZGYHzdCGWJV5p3AwsmwxjKddxTd9N8M6D9KMZFZWj19qfdonFJeuZWLLnLFWpdFd",
  "key29": "T5QUmgou6TZtM8SDqRu3xiAZQEFVFooQSFG65FRAiXFtF7E9d3VdkoJw9ym7g59XWbATrrJhZ99CWwZromnvtRB",
  "key30": "5ReM7YswyhDxCHMi22tPBCXmW1PCThrbvN15DSdo74ooDBq6tAuHoDPPpKDtJsGJRzsZznfuTCRqcLDZ1P3kuQyq",
  "key31": "4bfcRj6hJYpgm1W7kr53xN7YW63UWp1K7bFMwoNChZiMkK97WbSJq3uMmj98h2BeUBGgXaRXsmHHmrGQqdx7XLGq",
  "key32": "2mZ63MhQ5tf4prXHi1ytEd2Dssz3H3Sd3z8SAxvKNAupRYCLZKF63CGo5QRuFZADNYUy7tfjyPCcTAfaBzxM4efk",
  "key33": "4UCP6422z118GZm7pdkToYV2zRLruF29tCU4xHs7nM5wvp69Jnnq9pX89XHmHmn1EjtdjQAWB54ZTUxhL4mv4gjS",
  "key34": "4WW3RW9Jmw7ccTRfRBx5UPt2pKPf2h5kvDsSQKihj5nYPa875UThLBXWyuxPx7tMgiSwuxpD298cVcWJW3Ljzx4P",
  "key35": "GDjh1AMnDq7UGSnUFKWbxvCWCmuFmsW7jSZHSaMG3iUubfNQHHsGWFRd6xPKftnge5BkSCKkrd3E357Y1AJP7mG",
  "key36": "eLWPDXwu8D3YyHiRswqXjJuEwMhXgULr7jBjme1cFs7GBNGgpc5qaDjTWtgLFHfmzEayHST9o7bWquSHX6wep5V",
  "key37": "4XsYHpvBYUGWETz2u7tS9EDFm2joemFPtpk3FZyfJdzye2SH6K1BPX8cZWNeyHWA5NHMDthwxj4LnRybwg5zft2X",
  "key38": "5JLUq7iQf7xKZfJX8KP9rEmUJPqy3Ta2oDDNZbPR12sYnRmZM9dcLuQRnttc4ezVB9WpWfPcqBykgzGxeem2JKMj"
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
