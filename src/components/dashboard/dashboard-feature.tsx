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
    "5B2TZDQHGYjpwANj77cMGFtDsKC2iZ6ajTUWLnT9HUrVT6iGtBqaqJaqEv2hL1VGAhcR65tgK6gFXrZUqmRUSQH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ZJKGdCfTpQJqh2aoyX8rkxafD2gTV4j6Ct6GbZ1GmLLT1EAayFKaRqhEbda8quoacP44H1sJPWtWzmNyyJJjmc",
  "key1": "4TVTrxJFnQRMbc78dFeF9tykWGe9S9UCS734s87UPdqRjYryuyapVjrnPF1MTgBjU95RjtXvcQDRkHsNJt4P5Cib",
  "key2": "3Bs5c4A39GJAbzkNXCdTCtzi1bNs9M7ADmZK7xwtvMpuDite8VUftn8L1rWigkEoEqktwWqR1UiLJdzFJuh3z7ej",
  "key3": "VaJhCnmeA2Jmy1qdoi5GzSruJxjKZ3Q8AUsxYT4ibCajwaMWtn4K5HndwbVBD9fawQxpmB8U8B1qeENkCBF4sRd",
  "key4": "5iJhdzmXfsTBY1Y31LyfMySvSGfjQxf4nz1rZ8Ao1xwG811o19vEnFTZXPsQA8bfZAdr2CPkxhSZixgN367XwTho",
  "key5": "5fEhkZ9GxJZyBvEsGYF8VphoG8m2x9X4Lx6VMVN1tpNHezLE1pSXkDLCc91xjETvxKKEEe8RPt2KkZHjq4qgMaWL",
  "key6": "5Mcuf1dKkQZp21cHd6PrGLw74WrC4XYhkpm1chM5hbwggGjtx9Za6Xt3jc6mhQP6bGVsEcucmh2EChchYYRj9v23",
  "key7": "64wWD7zBhdQ8adKnPKNS8VnTb5bXSjXqQfRbXqq9DwEDFMAhnVvtmypQjnTPNAsCYkz2WSPvvCLGJ7VB2eeiLs7A",
  "key8": "47GgaP8onNNRqYhitogJffpLZJZnSy1G13DhAK8Zcu3tJkWyRcv9wcFE4strYLwd2jbT12pX8fP5py9GEh8vuVCQ",
  "key9": "2JDzv4g4T994ibB47Kcofqb2xMmchYFFJjMtNc73EBYxVNjvev1qeviRd3CJrtTqG4TWxR5m2AptZh83pHJUZD6Z",
  "key10": "6ALCz9nbAD2zEs35ApLoJzE4zRrdtQyXGxyN34vKUsFqyijRvVunoCGy7nMsG8Gdh6p3bDQZkwiuKizDnaUXtsx",
  "key11": "pJyRhDYMfgPGjtq39rTQq1gU4M2nUTdn1GjZjMq2g3YcvkE7waVrKTKf4wHCwTpNzgonCrPTs7GmAQKAyY8HZrT",
  "key12": "3nBiRK6PPDsNoDqSZYBZUcsckHaVW7N4BMoXyUg9Rwmngti9LqqeEspziFLm86D9KHe2ZZuoczsTmESNEcnsXJxK",
  "key13": "5furCfkZ48poZLa1VMYn5w4v4TRVq6yCuSyGSBRQhhrNDZy9dAb31Ne3r297a4e9gS7oPFurhcvucz5sZchqtLNV",
  "key14": "64P9fwmWaTZ2Ma1cthjiF8hDEtMaFDJwwcprB65cdtpWphJjpfstsn1e17naVaNUx1hdh5mNAK6iM8F9FYqL7WDP",
  "key15": "4iRSNttYcd1XzWUoY28M5kmpFS1hyoXRxYd6FCKpSYDCNwDhFXML4tdHiKrEzetXoqpC7ZSBGzVV8VrPAaXeGZoe",
  "key16": "5SAsAEBcq31DueecFKJTGUYLZcJSgUXnd8iS6Kgb1fQ31bVgb4ssrDahEF6ZxCMhEZnUZBQZBgncmkkBMHRtPPiB",
  "key17": "MFJZABHffNBrYShYodQB5T5kmy6P76hrefkoTRRoEs1Ngv2heJc3XQ3zsKEyJXRvmKvLFZthn1H6rgU2dcoLQdm",
  "key18": "2iXuqmkyubfoiaHtexmgmjFcjgFve2iSYHo4bD46rq2tyg326HBQERBcyxjmnFKaEuwvMcWuidJYcKmVHUsMxhjx",
  "key19": "4ULJeSutq2tgMXa1bG2JTQhmiDcP1pDsTs6fW5sFNUQFRLDh5R3JR9E4PHkbUnUzV9sknQ84snncMznqaFgxNid5",
  "key20": "27VLd2azkqBoeyJzXCZn2cxb9A2zQ8wUwyvt8wLk3SimYfbUDXSv5Kkv5L5GVmf64hLd8ZpynGagihUB7Ne2oxtU",
  "key21": "3qGgha1ayWJAGUg418RUZj5a2KVW8Z8o62KWo4zbhqCaXKBXkoy1eb5t2gXBJs8xtgRHpBM1e2LgvUE2PbX2DqT6",
  "key22": "37bz1ivRBZJgDz41WdchrfkLv2KJuQRZkr7TNAe3rzWsJ3bycFHvKvo1u5SHwxW92hjHeq3zcCiFUaxXkFj9c2jv",
  "key23": "22669ZNY276KCZoharnQhRwUmtn4xXV2WssSJRdMSQxDx3hKmg2t8uDQACC23fuh17k49ezoA1fbjnRwoeapgNRV",
  "key24": "ASqbrz5EnPG8KtRYYhZiYHSB5cw1qK3k22K5HsQFAfaFPR2gxX8WGqhc6y1fD8xxuKN41z27CtEEd2WjFinoH1V",
  "key25": "417xVLNpWzz9UfYWSrzjqSHbgfDNDhrk7KMmgTqKLdYQxAjrWm9r9CLGyYuGJVusqA1UQK5cd9Qn6iSsLCaYEzn4",
  "key26": "Pwbn3E13XQfewc4sWAZ21iVKxnGxtXJ5nFCawqEU24p5MkQ5GUqjYJuP6BosPsfq6rgT5kdR8tPU5xoTQZVyyt3",
  "key27": "3Lb9ANW2GajAAT7CRaR23QUarjeLL4DnbuVNf8ZC67eCsovUKXRVEokusYromEHbZadKz1x35pAXZukgRihUkcSL",
  "key28": "4h9FLQrDrVPfvsTqVDemQeQiRUod5bpcM3Z68jX3TWdQCgfgyazsvRFq229dSU1gdZGJWE1LvNAZ75FBYRmdG9cL",
  "key29": "5tJdZFUHaqsY5eCZtRy7rPiVbioLy9ofnERnhKXVzon32SHXJPpqL1biqZA2Tj1dFMqNG6BXhfPiErxkEY7jLVFX",
  "key30": "eukuwDo13YR4DxrVMSN9FdTYnkjRWBAUyVrDiEtfKXHqqBJUewPwfChbZZ8MNhpKWHiURkwq9LfHUNF6sv8Ti6M",
  "key31": "2sWSuVxLXFJfVX4UApjZwJr1kdfigAHFRhvAegmWrdrRz1Mq9hAfp8msWS4p7DbGi8Ed4y4KSSfsSNgKkKTbaLAe",
  "key32": "3tZMmnPjtgaKGwBjQMUizH9oBkUaBRZdaW728oxF4J1Q2Ty5AgTBT3nTkP1DcH3816bqg8E9ELZvNtdQuaWh4P9i",
  "key33": "KaW9NtwkhV3ovgTNppX3VJZjqqwF9KkMFvcee9RuaJPa7unFqSeqZUNaSDzzqz2f6QgfQVyRuSxfCgxR1vZT36q",
  "key34": "a853xQqNJKcBv2V3jyNZ4jC5GVLUtFDzzShxK6z6csfkEeY2q4VorGwAz5MiexGbRzs8aL588ERuGwriVgjSk4Z",
  "key35": "JU46Dzo7TZMkvy5Pjnxxoi65XNWU6LSSj3Y9sJ2NmGUPTGh1uxzkHEVbNVrHxBSKwHKomtLZAUSSL8V77ScNidC",
  "key36": "5dLfw6UeWnjerfXPaUJuoZji9TuoEPHzFR96nQbtZjp5WXbNkLRVdF6mtYU1qyCoiZkcZjFPk8ScCQoQ2b4s6dUm",
  "key37": "5pgDggJ7sGYDopmmqFv2S2ZoUdM38tcRSg6MCYZtQWNE1EuSStJVLSxPN3t49kFEcFWMqeLpyzYSo7PSe3RusDbB",
  "key38": "LStxcmWN8i3VZ1JtHwmVthPwy8rxKS5S337B4D6eyHH1iQsGszvbMPy3hnug4P7ynfmHPpvhHt6TQWq9KgQVhqu",
  "key39": "xhm1dWA5WnBRzYFHu1aUtATUrR32mXSGxcnoiTuuDfkGvD9qabPV5KShMnFxdMBKV8gLhVGzCVaGdwYu99av4BD",
  "key40": "2Diu6tQ9uB93CpBB6Gu97PMkctYagaDAdttctgaPyM2fV3zuXp2q94w1EoFCfGSaUPDK5NZgkxKQmAuKzVTYPiwH",
  "key41": "3q4uUibGFGGuqJqAzhLbnvquVA9ZkJoEnVyzbhwh8c64kh2xW7si3b5ctQLqCdjuNfYzQw1AgtQMfyZYNCFDyS7m",
  "key42": "5oESMKLdMyVDaVNuVPXbcKJ4DvRevthBXgquZSzVS3XPYADutfwxgVLAy1LnqDKHX7M73zwBm5YtLmGP6um9bngJ",
  "key43": "4RsCCrtUcKNo3FVhZhrYq26WbJMk8i3LXLnCujaPeFAo2t5v5ng5B1eg2U3gqozJSMCKEAjWxiMoPzJLC3HfqkoU",
  "key44": "3c7MgFWGYHBb3AWD4ZPEi5q6RNXdCqcHcdzqEnvKXcqLzCdcah2GTQr2h6neWz4hKdYQooZ525FfidCUhfjuRQZn",
  "key45": "4t9EsmLXMR9RU8zGfzebYy6Rk8zgJ6WsgZTktoeoFVBLdMYarn1tsqMqJZv5ujSy4HfkwAJgxyoFsyKFKSeLkv97",
  "key46": "3Hd3Fx7KeMsywLPat4PusNNKsBCt5VZRB1Kypms2CcPPNCD894uD8eQdvugzGReZyiQhQRLEQ193rdFKLRQp3wk9"
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
