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
    "iBM9uDB3rN2Rw7NRusooCmYPSbwVLX1qk1QJvJP7B2nQPrtzqDWCosCmRXXz1ZuXstEEV8znWGsRrWka7gun18h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AaZuyWoKzGoy8P9gGSqDFdtqwuaLAeaThjc1grD69epfHnvtU7ffgScc2ZnE7obJxJWkyjn7kSiHrb4DoGgN7Nd",
  "key1": "JGVzRCRgJL14VWe1KXHD5W2r9AAKmdjZZL2CdDtdVLiG5PeajGY4Sw6a3Homez9BwZz2CYNKoj2oQcUeTLA2KjH",
  "key2": "4x9QxkrNW4UCygSRG3nb8DSofviKNQ17YCh5GVc2n6QqPQ1Gfy1xCnAtJYwpv6st7pgWiN9CF4F68NqLmFKefNBg",
  "key3": "5gPjo44tXuAknjcZeUmyyLae4sEzXFNNin3UJWJiEqFJ7v4o2MCaZvMNfNX5xPd5N3Kf4tuqsxf9CCmHRhfR3LBy",
  "key4": "3bAidSjeR4wxqagUFhXLymq3SopFy8Ecme9Pkx6D3SvsGsB6Jh9kyN2jUEdnqLu8RAL1dSrELdhrtRyDw4e7K8Ur",
  "key5": "5T9pikigsW2un8dJ9qdTnKfriyLmfFSuhs5qpXf6hB3ju4BvKc2tZxVFqRuTAvDhXEktscaMdweFRH8w4j2NZhiU",
  "key6": "5yPPy61obqkbZPHPhzXFtZQNBnorrQ6qx2sddMLUhTW9FBr1mWCrCm5ZEUdvWPaJPMxQi5pLBbBbqwr1SjVWyxR2",
  "key7": "2FuhBMSMvn9Vtxgd2MVZcfW7iy8KSk2sZAwhP2EWC7VxZb5EcANx8MJvifF77UV7U8YzbWFx3kij2D1c5uwgDEm",
  "key8": "3vyj6ZL2f2xhrHN3WDW8hLyAtQqDv399wPhTb5AugzrAuGWGmVBqcksfcTREBYtBN8aJLLaEbGNxeSHjqoRsbQao",
  "key9": "4ZtkuswbU6w4nyNE2Y6imkS5fcyB1hpwanFGvAAwE3ZdcLXf3vTcpCScmXExFjJFPaBpedtkFHt53tygYDAxADzU",
  "key10": "2LdBes3YU693LG6f3tDSaLbqszrqGNRNvA4KAi3mqAU5JVvcSHmFZMcFPAkv36hXeMTttrWDKUGQujZJhvVh38uR",
  "key11": "2TjKh9wCvXgMsXx2hfb9VTB4LMXnhjYkEXF6NUYJbpebXLVCLSgh7qp9YSuDycFrhwa5SewSmHEYpmZD3y9tx4Js",
  "key12": "2ZiSmVK1dJn6fFyj4ArMtiR81DwFF8ZdvnrKHTPPL3QWULBdeDDEaL7c2r5AkbKAcrQqaKY4EALMb9A9FZ6chBPy",
  "key13": "5AS9G57SPQqcHEeEgj89hG5TQK9siwxnyqByCH3xVBoHVSwWSwuKvTsxwtx18BHHyYZw9X75T3Y41bxkLBbfbZgX",
  "key14": "9CbFV77pWMc8KX71rTNzLWWtBisxjxbo4H7R4hyh1fE16iejHjYkhAb2jW3Vmz3nuP3pA86aJNusb16UvJxXGEc",
  "key15": "3aNF6bp7wp68pyE9M8FKNRdBBDqcwiwwmw1xGgfSjnN5boKRfk9t3XrrcPMHKRYPF48Pbidnph7r2R7SoZSU4XTu",
  "key16": "2AAW3SE3x2HmvcgaeCJpzheSjpm5RMhP34LU3s2d2UiVHCrp4PjDdSyFps16PufMjJxwbnDtAKB3CL1GnAtkveu7",
  "key17": "3KpkWQqfMtu1bNjrjAaojsHMvzekYky4gnPydu1mCrQZ1pRbARsvULiNsRFmx5nrRiV5voEvbTDGNa96F7Bhie6x",
  "key18": "47p6nMbhrDWC73RnShTM3k9Aa41i7jaPqprQX7T3efAMESiDE3cCg4euWUpxMo3X35TY8yBSfw5G77nRHiqXphnZ",
  "key19": "2kBH72PnJ1tzAe5gwuZjapfcRzcrSLMAMDTHFyY5iirP4JkQyU4ABimtCphRbcN1arrRziqScaMoRmmEffqd1XDn",
  "key20": "3gX7z5xKCG7i6uNrnbAMjcwh8uC1424nA3Bhyu6MPenw3VundAFCrHgpmy7RRhM297acmFHb1pECyGFBM9CnyLnr",
  "key21": "3rJc8a9N3gN3dEiiN5SDMV5MYPMpbz8LagEbWcAqSvubuZ4fxipkJkL7H3Vdo77UbgW5HEEHWbZQRgofRVcuEqj",
  "key22": "2sTsZio8Gq613LmzmrovLSLgTzHTZTCNN1NUGtM3uWMQE3MbFRpfTxMdbWchBEdHLxbPpcnDJtRTX9H68uZ77xUj",
  "key23": "S9a249EkFtqtcUcyrzDVvtDkBeWS1KSCrh2ysMcHGMvsvqMUPqyyLv3E6UR8WZ5AmQUcf2S2oxZcurhJXPhPD5N",
  "key24": "4do7eyVADNFJfQCLSxBAcahr9HZHB7RNjkrrgWhifUaa6Sfjam17ASvNkPT7Mo6vUVd1ywMowVGpL8iFSaGLr6Po",
  "key25": "4YCaNuTCqnidyBcpwtbQWaQcPB4czgdutnDHEABdMN5dM5MgfYsKBmnseXW2ADk8e5QQ9QTXjvhc5m3SNHp96NHJ",
  "key26": "4TBAwrsCf2iALBfoDyazKUvBtQp1VX4hmxV1MvZJYF8AWHit7v7ix53LDrvXdd1zCMvfo4rbTKEJsvyFvoxCfmoh",
  "key27": "2upJrgvYiuT1MZNdBjM9ox7ZJepXJxhmhVwduTAU4Wzriup9UWmAhKu5WeJAQLyzs8kUB76i9kHv5hdrFym2An9x",
  "key28": "2hevTqrp5d9hmNfiLup8scjAkiNa6r27bYPz9TKLNWSooknP5LQGqaTf6Qd1q1YDzTFtq1zsH5Gb39XriKg3w5Dd",
  "key29": "2GDqB3mVBhHfbk6ebWLRnhoLf6CFC7bcukq4eoAV6NvvitgfHdnRgNcos2Tw5DsL1SrdQmFz79GyDM9DeeJ4cU8T",
  "key30": "5EZtQWNM9uytLiCTpGeeS9EYNyCVDJowUp2FgXt936ZJkpxTN1gPN2kUvNbJ2qQRKiZPRZiqk2btusJGAZDeCEkz",
  "key31": "gnBCwgtXxeZXzy82zKtxFsh7e5Qihro8GWtBCnPW4SnzPo66vUR1rApaw9XgDpxNcmibq5WUkFG2SLJqWuSLhjT",
  "key32": "VdKN8pfoiPSkMCSTG3ytaG1j14z5rkrHNd7QwrkD15ujAJLtBZNxJRW2Lpn33yoQ45WHrEzakqnxDCUhMJ4taZ8",
  "key33": "45cXQsEEPGuhPNxqPgveNSBPBJWV21tGAxEaot9axLSWSbMP7zq5k8GJ9QgTuXhkRsvBg8CnngLLAaib2H4oTswu",
  "key34": "54FPLpCQ1xoEGdcUQYGYTj8vz2XLABNbsFnbd87y1fXaEsUvmULuM6wi1gBYRzYUhoSddpLHJAtY7p3tWZmu1Jvu",
  "key35": "vhj9P6mTWUovKbFHdMLakSzecLGC12VSCw2WyJ1PYxWiBZZF2PRaNRyNSFUjwKuy4KagCYJvs2eXRAVh6FZbyyt",
  "key36": "2XEMepG3XbbEmr6L5GLMPLH7pBhTFFgw1jamRv1q2kuk7TqWq35ipMj6TUiktd6kWEiZqDenntv8FVcK5iXxmPQF",
  "key37": "2yVoeMFnoQWR6QpQwDGKdq8oyt9aD25mjLyGBD4CFZKTBDi6HwLpUFSAqbWMn3kYRZXHtrmWMhNGCBi7AiwX5Cfk",
  "key38": "4S5qfAixo2t5h3Zu6qs5hPAz7v6V6PvBFRr7KtLw63wmeWhdKcdqtcgypsqG3EMdaHxaaC53xjCgJcRp6nTSohga",
  "key39": "3YXLmPExDGVg1GPpDVHDKDht9BqBJwjG6AEHHmxhzeefHYras9wxsCxbn2fQ7Giu2kx6XCpkbrgHTZnRemVYEKgU",
  "key40": "5wXSmzSN1P53RAK4inXazLbeMHCaed5bWxRUwUzNigAv5K4TmJjM7zZe19fkUhFGC8tjZ43ccqhJnRschypnJCNa",
  "key41": "2w9beJmwKiVGjXssPHahDMWUNNnoboVygrUytX5drxTeLTRFiSFFesgMKsqy5AL9VJ5XBQ67rbixNrzMddaG38th",
  "key42": "4mDsu18RXAoVr237RstgBrVyqmGPhMHzhayvLfohDhztNoksfgxPzBx9VJ7A7ZjjaRQUsuJSau2iJcHVKF63wsVN",
  "key43": "24TRYL3orvHCQ5jLvepAqfa6Q81AEYLpdBuDQK2DiNKy68mcdNji61XEXFQf2huUPqMMRAP8ChQ31DTJWXzChbDa",
  "key44": "5sn7rETSLEqfr8qx2PjdVaxoYciZs5kR8RUx37ZCvSbgVkbK6WNDynnUQ5GnXcyyjJcjBijJx8Z8XCufyuUqQphV",
  "key45": "jtHvTsZ9o1uoe2yVZF84knxpc5pMWw9kGXbsQvpLtzW168sbAPRjBNV4qRa47nTjPs8k4Ab8RaNtAxe8DQxcWXf",
  "key46": "ytLqZaTgUrTmSmezjjZ3AhukZ6HmkL8DiGKfNAD9A2Bh3krJMntDnGZqh2f4be898FZCew4HYyiPSwyRzQdYNwK",
  "key47": "5phsovVPzqSzT275Ejiv2f3KPiLCaxZadLaWJF8NnvHbQWax7fhPP6C5ox7DBHqfYGabxWbvn8aUDXWY5djGLfnF"
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
