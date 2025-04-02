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
    "iSVMMYVZE5nojjAY1MRyhSfV2hJ2eNoLqagDmcW7aKrof2oCNughqKQLd19F6snQf5A26mJynp6Mk6EUer67Vxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jb4YAKtC9bZtCmdZri6pjT26b26eMz4b4YRsN8L5F8EXyCqC1frZmcFBmeHgnfyYesm8fQVdHsMMXJTBeF3HwzE",
  "key1": "5B4wTbBmbCi1wSu7ZHGZTijtdo4QgLcQpSanPzz1rB8qssRLkuRLmGsteXBwTRqNpKkgFAkCxbYqNikuhbyd2cji",
  "key2": "4ipBn3LYrx43bbtY3qk8rMNDZVNvgPpYTstNB446gRkhxLpEyHNZLdLk6v9ewrhXzquud7zYKBcqp3SMSncS1KEB",
  "key3": "4MzGhBYVAS5xzcdhPH3uotQvUH6mmHKX8t48Uy4AnWW84RkLJWWLSWhutAAEmzygjtSUqL5L6BabCaCLXr4db2RT",
  "key4": "3WGPEJKMW3crsH756dH8JBR9qWnPwEuxDzhaNL68zRAohgeHixEH7V16QLHMMR1UYhDm5cfjhXoqf4LCeKDSTWZB",
  "key5": "4woxr7vkcyJZMaNVepWGvCWcXpT8irNNxCyTSgQhzBix4dx7L3L9MYJedrmVNdp4MvqMn2fFygMCnxEdi4JTib1X",
  "key6": "21vugFtqUaMHreaeAARLKSXRbaGSvpqvQhUXiACNFwmRM241XDQ3A49CdJ3TihswfMVutPPjrVpsTdgzAR1RgAx9",
  "key7": "4bvNamsZzvmXcSoagUC16qhsgq3yFtqYu1ki32nTxuMNJhEDg98iZskVF5CSepdBZeRZAN2wrc7K3an835t11dh3",
  "key8": "2WGn5171rhFJMjUqMXdfLmnqdqd2wJXYknzrJejtRt8W5y74adRRdJsvJ8PLVGZNAcpMx4uTQvH3X5WUTU3KUAY5",
  "key9": "4kuDr1JFpPui6E652apV7U4mmvbKXn62TREQ41ghfcVmNCp7SzVpqNFPKWrjsruhogoaCqq3xob81sFiMbwAXth3",
  "key10": "2HBwbJkLJxTuxBrnJtrM3nfDBLeN4zVJh5kUYWi7jiqHpGyY537KtQeUzHYCPyDVuPmdCY1p14qXxsn24bu5dwMV",
  "key11": "3XhuiyNBNYtHQcXpuPUfN2GBT2JmWokHRjJ3yBUvw6cXqyEsTtECXkop1N1NF5osAJWAtAUpMymA5EYLFT6srQXE",
  "key12": "3XWHGi31ZhKL3NRghTXEjsS2dePEbQVC1Xs9TsyxzBAchhDKEkBtinGZCN91JdCCBHGuWnN7BVCdVbSC47ibSx7D",
  "key13": "4DiRmNDZKSvJqf5CtxnU63rncX2JxWNvfFKCxrxMJSH9pJs4nD7aXUrjTycjMpQMYM9r6G82u9hUUtuLgHcrP19B",
  "key14": "2CRdkfypZVpK1DappbJ2tXsaVp84EopmscbGHBq5Vj1JE6z3AHiuCWmMEiWzqZi1DD9FHoSDJdix6tnSYESgzEZY",
  "key15": "KNPArsTx21AkpNVKegnSNLAb7iTX9xm8b2xSppJVxgzQv3tAcy1aypSiFufze4ZMtcpq8xXXEgm1GBk1fnFSTFq",
  "key16": "VQEv2rJZXuxvHP9U61mzZAciA6mgRSGz1a5fezw5EB2kq4uhwTbH5E9CjXAc2rMEPeBRBeiADyYfd2YGDgJxrms",
  "key17": "3apEcbo8snBsB5GYgae92EzsEJYKyXm3sHLx7PHELkkdcjd9L4HF5U4g4bkN1mQ5Fx9nyW6rHwfBLjXvhWgK7J7A",
  "key18": "5Ngx3P1N1eaLKZrSMSQWeykvJQGWcfXLBMM3C46ap7YWun2WF5SGcF5izzzCW2s42Sqkzb932Rv1oteDXdvTpL6A",
  "key19": "bVCyE4vsM1crzBeNR5Hjvgq4J5xSwJbak52KF7tWzKNncqm2fxpUzNRNksT23SdZN5YgVVgy8LhtCHxF1vSSLhB",
  "key20": "5qz4s98LB8TtFKAvW5DESC8daPJrNo1qfJwmfPzLHhtbw4fXw8KFbTSthtD5urm91NXVZzzur7N8bKjv2qx1r7XV",
  "key21": "7vVWzr1jsf18GfuiXnkdCEhgAXyjya7GmixeiLyJELB94Ho1YFR6KqNuM1VgzxFehBmhMDv41CgqMxB9z7htaeb",
  "key22": "5m5fWQrWQx8uxgH82KQx3Zqsc1UMLTmP315RfJTmWec7bSrsaNeisJCGVe5NjhDTjwEdATJpeDevbHPuTraehwao",
  "key23": "4BhwFv3QyhURg44WTemc2mkKjhbFJhwDU6ovTA5rdWq2U7DbaryNZCEtaWc1r2vPWnYHDMsDxqKrw6bK6TXo67cD",
  "key24": "2ZprUbpLgut5N8FQPkSe2VFSpSGET3F3F9b6fXF1mq7uR9mvVeyUvt93bNQb58d2UTW82riseAtdwv2RbAWJfxaM",
  "key25": "7d4fyQMExisHeZbStqQ8s2PywTpV8vcty7g2y883FqWycMDLuLhewTucdCa3fGSSbw6pML1FYRazuQGkUkKtXPq",
  "key26": "29XsDj1E1oSgLF7sEER1shVxGhK8VMxu9yH3X9gTCEew5QZ7inazYCQCFDtqoDiBsPFS8ehALHZXjHBnScb3UgJU",
  "key27": "br6LPCrDk62nSNc9Zo6bcJGJ4fKWq2SdU6WSiNJ8Bq2kTHcmFB6JH8bv7An9PHpSWUyejzPJ1jjYGeMxEDqYKdi",
  "key28": "3E13cuf3H9n59avcWpCnrkHZxs6AMNJAiv2g7U9YBpVYTsMYiT3N3GcPQN55iuohBLVJjK4cJ74cSApDmyAVVxtv",
  "key29": "GYne6G3WLA6cswAWMhsozhYgtK3CWvdXEqxKC1v9TPn7fBC2nz7rhB3HHyUY7gzNwfD1R7PJnRtmd2Y6ABppk9e",
  "key30": "45anMH2bc2nTVVrbWWhJj8cheXidpNt9QfgKL7yvPcsqKYet1B5KtNqcQcr35uvjB8YJktmiMt1sT1oV6t7s1fux",
  "key31": "1ECmGJVjKFZwdYUYqZZzPu7DBWwXggNmPmi8tfoFnEFtX4BHAUwuDfhtRNFG1p6CSH5NDr8brUemyaJRPTvG7jh",
  "key32": "5Yd5mC5NPA5QfiKJQuCD9NT2oaR4BSWBiejJQ84i8rDLxrLrGCbJYcWeh1QQJfv4A13kB9LtxZnoi5xH41GL9tGA",
  "key33": "5Q8siU1o4WUFUj7uYQKmfNpJobi5y3YKwZeNAykHWDY1SYZBdP27ihV8R2NmHH3QcQtdh3JhCigFrXirGmEMdZmV",
  "key34": "4efZ1fD1pSMUqLxJ4vb7dzUW6aggjTo3Q1bjKp2VK2wiACLwrdhsPwenGs6VGRjjobryxHoJYQDbocLi8kZKjELH",
  "key35": "cmbr6seBsaAJXfMJv9wPMsJU9VLDNv3TobwiCnFeHqUD2k99QigmXrA3z7kFjx4eyTAAuuoyyYQVSGhadzAZN4F",
  "key36": "3ezV4vGGsmeQrCgRhBNhqzYhhnkydhQgAhiMELcu1cA9TPGWt5Z79fMkJ3NK2tpBUDWEyn8XJntWULixn4ZSxcCy",
  "key37": "2brRMdqJJzWhjqmjY6mvMbJmvj7vYAd4z8ZXXXJFYygnvQcg57NzTvMJn1gJNk5sw5n1mtmU2m814tL7P4CgNxe1",
  "key38": "3jNF4Rk1fmmuxqDhX4w4bWdMTjtMjGDrxvmA7RGi1N4WaxV9WBaC9rx1Yk7VfCbebjEtKYZJizQCz6JzSVnduaTM",
  "key39": "29BFEfsHxLThJqGcd1c1Spo1YbgW1u6yAV99TaB1JdKxkKgANNUE8aXjbacyCXYuSn7AjKnG77vfjpMTrqQ5775z",
  "key40": "2ZKfmxsXUUHoeckttjUdMs63TVwuRBE5E6tTT2umjBvptTbbtc5MY6g3uNKm1aNBeCdPM1G14rSACdikuZBGCkD6",
  "key41": "23KiT3ZfBgVgmBnaEch1qzxTUbyT5Xr6k3yB5CmSnmD9AtXBr7XDVKC3mB8hK1wnq82Ci2hvXj1jNbFDWm57Ld25"
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
