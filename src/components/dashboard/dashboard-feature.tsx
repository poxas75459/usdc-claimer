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
    "CdDfBxfGFnBPn9iwf8cNepBb6ep9Bji3w8eRmirk83dyMbv96itzoSL6S87dshemun6AgDZft8Cb2ofzm1RxuQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LkAE3oyDnU8x3m4CgCi75aay9BRED6X3Q7KSqPkaUAJbACJC4RRfEsbAqsgiGM9CRR17pkFRtxzx4ZZyVHfR3rc",
  "key1": "5kHoKhzLShYRdQPa6Pri3MrRv3gFXdVegRspvZfjK46XhZGadnVzXU17HwRRJNTWfHeRFz3LAr6VBBtKhRW7kwP4",
  "key2": "5ZvYjheerS2ERynP6ExJaxqZRvwimqvZ6vdN3EcPAveK4gcnuKubuumKCS86zusYEvMmnuKaTYWk72SyGSps2xAN",
  "key3": "5GrkJq43gE3fxxDvZj8frqY4TCoCxY29y9NCTcDqD7Rjq5isPuGgUdMVuC8qKR5WyXSvLkdBL8jm5h8ZoiekLLfu",
  "key4": "4Dys2ETvaiKAMG3vX2FsJVDpvMwdaCtPPtBg4WKoAovgmHsi68Z1sGmV2ftkpP3wdMms5926HZKUBkJ9bTgFSDEH",
  "key5": "2R6Go9YYS1pcmBN3vcevHmiZzSuN4WZjFRHt37Dh9A5zGfjoZ3JJeKrUzm62cb4EuuUD6KCrCVMs17vhE7x65F87",
  "key6": "yC62MiFRGEEKWrUCKWzCKFwMi2JtbJgpBA2ehrYVs2rc8evv5ncK8HtsDsCp4VYNSGqwqchA4DZTpqZdBbQMXUY",
  "key7": "28H4JVgiuFRJDvzEyZLrV1km561BUtugXmNar7b93UMt65vEhiND3UfF84BNdcssmwTsnXe3fbqQX8b3u6BUB9ck",
  "key8": "4g2Gnx9hGRxrLvVW5xQs84BHwqSksmCj8HSmK1QbD62rdbnYHS7KBquoHdSCo6pmYPPSAA8jDrRDDNExgrdr9JbM",
  "key9": "26AVbEFiTRDpr4MZ2s2wcxbVckrGrkoRkB7w2CB6RmoUEEJZ8Rw3KaePTj3MSVobxPs1zFcuBbzUnArsSQGKe5D7",
  "key10": "C8vAYW13DyX7oWtCHEiFMbQvMhf4BtUQ9wB5GXVzLnyo9AqAWrRmhHmq8vnHyw8aJN5nxyrJj4XYw4RQdCBTixc",
  "key11": "5tTxXHAqZnwfCxNoJUAyKTsCtNX1Mf8CR9meefuA1hHN9RaQerXqpWUhVwWMg6kS4Li4XavvXZBrHaZneyfJGrtp",
  "key12": "5NaCpuQ5FbEojYjrKx9o5db7cAEnR25D3oYNwH1h26BLVPJWqobv5sKA7nDKooYWWozp1YqkCT2iF2eRu1gFm8wg",
  "key13": "2JYREWHuJ2YBSzegdmEsvYeSNG2F7T2eAjS1GqSjswYUKMdqeYvrAXuJhZt7jJNkrEhf3Bp41dsmc1GASXkojrqo",
  "key14": "7F4qHQxKtbjyxMf5C3Vwunvdnb5Avb4kvkibi7cqyuKBGbKgsNwTAu1XNAzFA9edLygeYeqxaX2BLw6VVsDueXj",
  "key15": "22c1svmHGewQvoJtdK17FeAQZSZGQGUgTzKZSNhMTdJGswmK6V72MEBb76Bnos3pATftcMd2zeCDxoFbngD6xFMm",
  "key16": "21y9wJWbkMUyBPJMgZ4gw9bPw6fs1p6VuyBi8i7tfy3TofngyZ3uSoRS1qySRrTS4gnk53zUn8ef2u2munQna5kb",
  "key17": "5mehBaxEXG6NXoTE4heHanPeTiemK75doe9uooP3G5FPAcpb4rQzjZ6n9jwXnsDZKhn29VMjcg2twjYprywjUH2S",
  "key18": "3CdQrMGUpi1X8dGa7jkwQ7teNg9p7vcoHL7Lo48qivdxqV5nZANv5hBsxYpb6nKM4wdR4xpAWwdMDgKxwg7KMiPd",
  "key19": "rb5fXyocCYmawWjhjbt46zajqXPPDnvP8L4j2SeQJUrFRx4DNoB8W475fNxsXJS9JDHDxofPiB92vuhhUyqgm4V",
  "key20": "3aHs7AV2YpAj6gaX5Xv5MG3tJgQyt8YpUC48GnE7VbmuZsgnqpCAvemd1eFGXpp1x6qTHDMjh9RWG6JuyA5rghEc",
  "key21": "5rvv9bFQ5mQ9i4xP83Taw6ud91DcCaHXjXfU6eS8yWDrsSx1WFnNAok8nVqRQTH9iHjKZhgZTTr1sYe7HCJA9DEH",
  "key22": "hkubJ36KwRBjyG8va347UVxqmmuJph8w23ULktEDdJzUMjBnB3QGyiRT4W9EKhqzvRPHGhy5B7ouag2mpRVXFLg",
  "key23": "hupojRVC8ySZN2sRF1SPnJiNjxsVf5Yyr8UQq1uxoEA1WFPa5sNmJiQjKqrEHTmWrbUrBVcwKfuaLuaRp6atBCt",
  "key24": "LF2JCUzQCnMADZL8ew2P7KCLPLjK1EoWPi1HLcMp38oitUFXjr51BHmVxHC7pmdEUiD37yfhz1V6hzWmyt8Svnv",
  "key25": "4FMdkD1VcGKMoxFKQG92Sz17keBR4Fv8ymv2jonW9RyoLVEK1q8PirMgPqDA9wR1gfvxBUke6Svz3tnfoFvzcZBU",
  "key26": "3AG3gTG6N2LVDS6Ettp2LdiQvoXHkKNF5PapzjeiWB9X1BSAJJhjz6hYJNxCTggG8BftyhmRqnmdACiBXFWfnxnX",
  "key27": "52nDrZ4uQ6fDptegkT1xuA6Lz3V3NFjAo64nWmFUv94FyN1QGakNFkfS1qoHpxZWhzvHVCpjaWYEQMHpzvBrzN2A",
  "key28": "4f67fRccE5ZLALQasY3FeNanaqqyjxdgWjcFDvTZ2gV6mEB4PuCSfLTsR4G5ZwxAt6qH1YieNWqNVLMTsJu1TFBF",
  "key29": "4X13J83qrCFkvJKu7fEAjw5Wc1wku8JTvSCzDTXPBhQSQdS7gGaKomHny2gMA1EnqhhNUHdvRb3EwY2LBcpX94qM",
  "key30": "3WKVknm6Zyqkg6c9MgaSXyYzeBnwfhqne1ALPJg6YEtxEnT36hUe49YqKcLEWPstWWCXTPh3DYtLCzi64CV3khhC",
  "key31": "27jt5WFpqafnNJWtWS1uXJZv4UohjXMVjwNXGAkGp8DSRcwBDtyNBu48k13yjANnXhPgdGovxKtb8zUSXRhqoHfM",
  "key32": "4m9hNB6hi6nCvWxuAzXpaCugDTd2VivAN489Zq8Fs2VLwCaBiSvdjELHfa8M4arz5MEAapT5q8d4RyQKvTLc6D7B",
  "key33": "2wGxpyuE4Wb29EKajjrp132tKkKESqWeQm3tvciciYsswY2dH5Gu1hUjie1TR3ybWZ6dbJjSCnH1dN5ndMdH7obr",
  "key34": "5ZfdaBH3YX4eLaVBHSmtp69JntnnuAmAeNxMgYMm22dYtEajcNwwaMLuNdvxzeUGHogPVmQCquQ7TZ4AiyPFsqod",
  "key35": "5qoWbufZzvt2fs8EpkKWNgmUKnvuxqE4RkWA6ruMXAvn2BrFAuYK1BBsDUo1Gzi9YMkhpnSyNCLvP6vwkbftVS2b"
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
