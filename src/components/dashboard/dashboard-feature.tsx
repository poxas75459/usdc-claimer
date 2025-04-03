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
    "JqUWVHp75cA1LWWjXi3gyCsb68di3ArvuDStUSycxhWexusTqhXJQumNHgBLQthQppPGDfMwhsqrvvHf79Zazu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66KvGhzZXqXZ16tKY2tyBYzdSio4t9DKW2GRDqPn31FADQZoYrK9cTTF4kmstY5WLxHFQHDJZGrDcG8NXp2rj9DD",
  "key1": "57QMAr8DbZWfrZk7EHQSN4ibdbwjq3shNGZuhFKkJfAYTH4CCguqM7KKPY1ML3bUc4Y3CHyELavScoE3KcmqEzWS",
  "key2": "2oV3gqeDpC6Tek76h7Fsg8x2kiw6ZqDxdpVzBFE9isyw8gY6CQjd1Bn3yUuJK2bVig3W5bGjSuQemzX45vc4rwwg",
  "key3": "3z2UZCgbNnmP4byAMyjaNXKspNf3tzwqcTRHyrWKiiXyhWRoKEnz1Kfgzw4igSSFuhsciMRSRmPh9Jr3tvzoy9Kv",
  "key4": "X6icCCd3TfQLiLjwzcEK6mdSWFoEaxk4Rvq99UqR9jLjMXckX94j77d1LYVQzNTkhhqnMeoqR4Hqy8Mv64PJ9Lo",
  "key5": "35gNrmQzKDkcKkqamVicNMSNDy3jeTNdtjtgdN15vKzVqLWPHZ5NmFLq7WuQREWKqVs5ciqrR6YnCDU17mBFhhX8",
  "key6": "5x1fh34niud9vqEGELgohybd3CJVbUucpdmRaVAMApjZ6bVRtp8jbja888XtVz5jLXGvVnnJmmQXE6ezZf3dxDKb",
  "key7": "211C7YGtKojVeQ4L4knb9edyoLK1uGJW9DiUjaSSngGPDj9p74fzLg23N7NoyF4q7iNjgeLRCA3t8nMJi6LLPhRG",
  "key8": "5A3F7tWmMXmEkaGXrnkYAzZA8W3BQDpvdJadMXmD3iiHXm9bqcAaGEYhf3FZXgiUfgg8BtPYLdJoRMmdj6ZxbXQf",
  "key9": "4cqDhktYCktogAAhtqH5vfdaLYV8DYMDU5GcFVxE93MzJHnDkj1Pvw8fAs5C3ybSr8mQnpBHqv6QDw6UNf8NRH6E",
  "key10": "3WV342zzqfWBmqv6NBiShqiyyzpSKhXCwoJMtdRJkNghLBHPJGGTix32gyjZ2HLkbBCNnbfCzYaNMu5Mn9eRiFhS",
  "key11": "5Yz2NXvjangohxCpuTTYFYpt8pSxxdhQXkZXx1dYVrYEsinAFWDgJkVxena6AAu7q76U9CB2utxHXZNfvG8UABT5",
  "key12": "627ZeeVuQB83A6kym2BZFPn7qcSCjAosC23n9GMMbRvgLJVgKemWEbyQAKrGeFeMWXaQBbFaJ96JJ6FY8vKyoBBc",
  "key13": "3u81WimsMvcXmoA4csuGG7YKVpmdqX6bjx2QmEp528ZdNepSTnuw8DnDydchGZw8cNTkfvwUUZ9mUPtbVHHGMNjt",
  "key14": "7EnHmrs1VwetcyajLSUDqGRaUNcrK8tfe4B3QDXP4agFNigTCV67KMomMqFVHUATVi3nKXKHNw44TvRCHHBzPGJ",
  "key15": "2j8YSmoFjAx1cC6RZKgn5vSJLGxyR1RmbVt1evnnLnbtM2WrLok12KQUHQibFTDcD3Ttxo9CHBzDhBtd4exYsTzq",
  "key16": "4N247T65DPnMgiCqccrhdiXvGj2pJYVpQToGwPhqVFkwnva3ocvs1hwNJZ6hrsiQUaY3tC77AMCrA3iYmFiu9VWP",
  "key17": "4UJ5UP1JnU3V2xUHiRtVmJQUEq4ba65YWZuXnJK7iyKWGngaJtNNT7kC4HhCEymbuQ6zSgnL2HyKAWgA7BbzTZUu",
  "key18": "4LdtXebx6rgATiTtyUetPRHseMgMg8d5L2b34tvNnfQkXkanLGuLmA8qQYeJD4eCNarqtHNzJ8wMveTHTmMP6QmQ",
  "key19": "5g4ys59zVKPDPWZGY8Q9nR2mARbvoefia4bcdue1euCjwy1rLgw4sxw2ZhSGgub892aWtUsQvthpUA5F9SPSKvjg",
  "key20": "31v5xV96Hi1zxu4EB5TjC9MVAqzarXF1HTsciFt8PYFMp1HCn1bAzAAKGN5bU3PyRxHoyuXUeetEeAb7SsC1uAjE",
  "key21": "4sq3Kd6SvHzDTaYupXX6x1TGxhpV7qNqEPrAqLL1EXJTvjfZRz2z9dZLs86ri7p7FdQLNmiU6qdJooz2EF396P3F",
  "key22": "2NPuhoDdP5fBwDLdARQHu3R5rHF1RpayHyUBK8MEAihqv5yUhWtjJbXRBnCcchfd8wh7kFaG8ctqiPWpSYzKfWmb",
  "key23": "4WrnDKo9FCSepjozvhUbPfe6CNaYzMnwZ1Xu9ykyrRrqQQiKVuPK7Va27Ykitqio5MmozASuZJTseCwxy4sLDTtp",
  "key24": "5xy6VxPV5tuh8KpzVDuNHfmnWDgaFEP6NKydh88fWk9AUpe7KL2ViKiEtxPemsZuTXqN5wJDeaCmbr5rY5Uh4RWW",
  "key25": "Vxqjm564cCN5uTgyTgF3vLswpEXHhHShacmCvZvjXjmSNjLwArHGqMNbDjMqdz3Qhvfs1GWM1mnfYZod5KKnjNm",
  "key26": "5MNhrgPzMutRi91JV5mSTTX6qRhFzkUPBzybdi4sA8c8XpsYyN7vmGuUj4faETQri7825F7bMDVUJUxsUfEPUvxU",
  "key27": "584abati11TfkF78oEPVZecSJdoh9pWoFHVBARQh1UEEmscp3q4Qwi5KPp7RBDmnPEyHgtyDyAoWHgEQQh3ocq4u",
  "key28": "3dsbP2k6nbv855AriUocxzwVyrayYsYQ493UUo8PpsgoLsb2PAefoKvghJwnxiQvSW1oQ8oZ9Fw9ED1apVa2UQs1",
  "key29": "4YpeCHskrUDDhZbfXfhCoiz8EQqgJMw4tJNpyTeCschEiXae4kEbffnbdPZaWkVqUaHDJNpFMQ8xUC3GmQw8Gq3u",
  "key30": "5ZrHesrD3FsEXdQ2kKirgUn7tVTGtXhyBtZL3CejALN5ibG6k9s4hcRi3h2sCZWFtqDSzfKn8AQzdj8JnrRZrGUb",
  "key31": "2LdiZozykogWpFvyzi6xWVoekkE3ouXUmEtmLdjeb4rcwybVm1QSV6om9z1DfoHrM5at9ZgZ5vJTrUzyqaCEXZqq",
  "key32": "2iVprKEhQ68JCwhQ6CCSExnBpFBgpjbdqPCaHTdLtoXrMK5EQJVo5wtXAeiQK3k5VUsEvdJ67AuQZp6haU7TdvJT",
  "key33": "35Dpb4pTf8pxQv18V4fxLcvpSc6BtY3nbyUPyBmNAmYb1wUc4EbzoztnvdPgyxczJquFJwUwahCAKi9rXC76n41i",
  "key34": "af8RbzCf6nvfzW9o8GE8G8BmJUXKc6mf4jMjAFcjnZ9cPsG5nSRPmRwWCLjwDDyN7f2bzA1UZu6Nc4xbBDu8Csu",
  "key35": "4URyKNgLZXyB5pWEAt83nkjBLvYr1bJGBr8joZYTqu7K5V8ZEE3Zm6wTtyTZUKz3Nty6y1cy1VaKapkbN3KTbUio",
  "key36": "54KYYatDZpWHx9sU784ZjoXt9nQAvXs4sfQwGsdaK1PqTHD7eEoYLeRCJNjgEzQozKKUJzWsPS3rtV5HgSpsrnNP",
  "key37": "4g5vZsRqWnDdMW7bUHWgv4GAt734XeUmyR6Nk2hmS8m1ytbjzj1vwBcm4jycqqWdDe2xxNRhsN4DzCQr1FW1ASMn",
  "key38": "2vgsFDZ6QCBtRURtGH2g5Ay6RZSxTyuwcNuEkE7r8qKw2uBTKsjuMK853aqgRyrc7DryTDdEbCuBvkSLTdnajUvz",
  "key39": "2ecS5k5VjPNbemKZQadof69b1megHmbVg8tipXdzSSiMNVSuAESQiFjGDESzz2JMaA2vdfhfFWR94nZmTJJj14ER",
  "key40": "YoAXkAYwLfWPzYLTUHRZJ3dDH5nfrmuzC7FMydyWmnvFymFMYMFKCQyxrhJGE3QHTcds1FARLmCuBDGgzq3Y8NV",
  "key41": "LtoFicRcng7n6vYdrqjbTHpV2wuReZLHwuZsJHN7cQWYvftJQS8Hax8inVDmAQpENK7TVp3SsfzmhxP2yBoRn7p",
  "key42": "4j9hvzH4PQGDSK7W6rw1P93xGT5JzcQd2xCijzVTGhYAkah5FFBS5yUxx18PxGpgVGM6gWyyrnapNbrHzgM6ZNqk",
  "key43": "PjkyGf1952UdGv9Zj1LkVek6atU57MWCJKsyb2M48ssJx7DmvBxEg2FqAoLFBS72CvcfXVyjT33gN6epCdEmH4h",
  "key44": "5yq8E261drQ1wybigJ7CoaoyzcckwNnndP2t9p16FsF6BggnFdsvZ5dxxVkRfJia78Upr43RSpEtqqSiJC7TtLRd",
  "key45": "2dTaHuxdqQRFKrGAuBE63jsqdEHYRuEkUjUTSb91AYNbYJ4pWCmXr68XvTQCHD5Q8zNSK3JsbFC43HH32n5itHmt",
  "key46": "4jTMV5py351kxfieftskuK6guydDHQZwSsTtGXXLaUcFHkfh3RcqZ94TkgHi6k9GCcsQZi5wdawAYcuQn4YPswiJ",
  "key47": "ruhx5qbaRCEGhtZvne6zDxfc6YbUx1vgj2ZGE867L1DjTanJAfEnN8G1kXbrzohGsfrDrdDfmvAkiNJxT2CmaBM",
  "key48": "KRQzMNLN8dBCCmHSZsSucBqDWTnCYK9fDLsLeh7DRXDrdtuZHgiWptwnXX8fwi5z9KpcFg8P7SaUjAoTuivPYMm"
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
