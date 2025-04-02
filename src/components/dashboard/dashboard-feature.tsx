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
    "3uFbyNGar1cNf2ugwB32aDN12Tqe52MqVboupMDh6zQJEEjpSigGzS9st7pC4QeMT9wH39ePiBJFaNfYAnowQdb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoAzuLTp9eHPxsDJNm6ZwVc8mX7dCskg5h92wMTmK5A2HcePuJstvtCVJ7srojm9gaWmLZq6pJEhoMGN74z9ja1",
  "key1": "3LEWK93riUD6V1WFkFQTgWz8emSkNzeDVLxmFrKwBEnWVfH4xajJdSiAifo1J9HtDKkCGtw3km6jTrP3gMcXt4wc",
  "key2": "3bgQVDAbEYc5cXhu1AC8yYLuW1DQDqfWF7nzWhsQcXt3owg6xSsMgazyS8eGY9q1LCpMHcoKmsmNRmi4SEKjiqgE",
  "key3": "57ihP2kxentMmQo9ADgGPiGZRyH1F8RN8NityZoPFn3Gs2NNTcwYcEU8www3Bt2gSpZUWj6VgrcRRsbutGX24Num",
  "key4": "4Y85rYYD9qqNXxTtGFMes1Dd2U2H7KqhEoui8JEKwYeZKhqnLAd7Uxw7iPUBAwNTQLg1ULWS4EyUggFxNReqaKNA",
  "key5": "32jrNhXP5faSB3UCTUGtpq9Jma54554bpXPSBw4C5ksRxoqAxUXxmoifrdALC5Jc1Ugxk31nX5d7S3vwcSwC4LPY",
  "key6": "4bbnFjZB5c84WX1VkezEcndVEDQZZ7FC4Tx7NSbfMKEyrmu4HV2m1LMjQDqB6tQqyfwsfhuh3utxxxqRcRaaTM3a",
  "key7": "4PVMJ2kYLKbxHBdYppBmeKrq6dujM8ZTuPMWtWDNXdiHqvRVQzzV9mSNZAGBgqDhEnre2YKj9rbx2WxFfGvqQYru",
  "key8": "5xxqnoBEgb12tDMC9Mh4nAo8aCLxntDW8p1caXuJUwZekamdtoibaWEqtcXHcLrwGW7m8UmLsue6UxocyXGcBKB3",
  "key9": "5MCz6mS57udgCxQhP8YBkbq1jKPXTp5xqXcdHv6Te13jSh2pb6hFm6Zzs7Y3JpvFMcV2GPhEqQMWSEkaXWV29dub",
  "key10": "1qMfTAZn4HSr4hdhTiLWJwskUrcXtTXqVU7XFRu4s5nzHsdTYmTvrvUoN37JxFZ5bXtVtKRc58juXaReMJNfN8r",
  "key11": "5Uo5fnVc2s45NC3xHPjyjQFydy2qG8hWQZPdDLV5Fk9nkJFywin8pqqj8AH3k3e9ztx2HTDuRkX7fmXif3ELx91w",
  "key12": "2pqJ9WJzDudWmMiBGF5mgwZpN67PDyaiw8oAYyqKMHet8pLUafrXAh7Zx6mB8x7fFB8sfNfzooVXyaiyTJw6Gptg",
  "key13": "2DayzciNuPNus5jD8NsyU7ZLobZBpomm7BB1c9vurGqGHDsG44nLMnK7dxjqb888JKh3ho8nbbRMUFdLPktLWjmK",
  "key14": "5NrQwej6N71KR3jkxExKjm5kebxtemvGbYVBV6ztHqAwxqZNfZwVPLJFqz5mDZ36jup5es6b8FsF2fMHXw2hXhhp",
  "key15": "LvSptY1yWWhCNv9gRjhvMXB43Ctbzix9PioBusrVBn4VBAuD6fh57S4dFiFpRhAUWVQXGvVhWqi3qoqa34Nu7Ti",
  "key16": "2WCQTM3dcoBTsfQsHmaHBD4HJ88A8f7Eg1iPgaPWfQkPU54E2WmEDGX4DBXLbNEeMyPRbVyymhMY25fSJA4CHaB1",
  "key17": "5yqTGzNWTxHz76nJW7QvQC8M7NMpHNvD2woagtCRbCHhmtYUnBGAfsacx3iBmjqLUayRr2cgu6TVHdxxKQSYrG1f",
  "key18": "3cHS7D1942Ry1aS8JZzr9BdXjHH62JD6XfuqAobVW52Q4yTb8FLtP1f7BewzfZmWDvRWgquCsQg5Vr3HQV5FtVKJ",
  "key19": "3KAEHFRjuMLUcnkNPM4tkF4bhe1oGsPhd5jbMJJTtmR1pgjkE4QLZ8zmBCYMDFfdsGpvuJvuDdLyvR1s8FeySRCq",
  "key20": "M3JCrKb7KwCQfZLMiDnoPHtDueGnwFALt65zs4StYGRDdiAKynEKsqgHQj3LFdRf8Pwdwm5HhMzLty6cU8A4JGd",
  "key21": "4M6ksB4zFftGBtsjwejQEMYzFz8ds2Ywxgttw5m1yhyGtDri91FNqBQ9vq5nHN879cKC5neX3kUxSKiuCwgBW35x",
  "key22": "28Da6B3Qvu8zibhJcmwyq1VXbZb32d7e9nKNq8uLEYvznj64ZkdNfy6fYCLLv18VSSv38MV9erkcjWxYSZkRvtDj",
  "key23": "28VNgxXcpbhK2HYY4TP6c5zYkgLVNWRLFJEamQtLRsB47pk1XtuxadhRiy5P9mw1D7zpaXGzU1oChejN7STPWwWz",
  "key24": "2fUxYwjyCgjCvFuUYuVpkMvJUxx5XRoyJuUrgsUvyq4QoS1d4t9tuFopYA5AVMLjqgptKFPp7hoxf4zS1SkSGCEn",
  "key25": "3QsZ2yTanmDUBpUsFZpbufWJPAJaJend3TpoZHe1Us8CnAA5TrQNbWP2LmZg7omvUPVSq48LSuZ4mgQNfA6XoaQ2",
  "key26": "5DDaNibq4weTFT5NR9GnXJZzzLtfDKERRnjUn5Fk9BghN253eECNJPJBaNUCmEbd7CYCgUZCFr2whs6Xn2ye2daJ",
  "key27": "5eb1FisAzP1G6KkPRziF3VeHqjhjRAwHVF2rMMjr8acdJQWUW5YMy92ceM7n2CUU8Y8xgNa9TVAXnM41CpELz7Sb",
  "key28": "5WgRURSy7b4X3tdMT2N9wvWnbQYTRxXSX7sjZT1Vdf89hUQ9FSeZeYAau7YrSHAZUDbKfu1Wi6f5v7Y712MxbNJi",
  "key29": "3xNT7KJQ3q3mz75havGsDHg76FugHpTtei6fwDvH2sZCN9ss7gswY7CDPP298Go9VVUStgWU6M8z8dXMFWxrCuTF",
  "key30": "4pb3BzdPybEKsSv75tgiMwzzTpe8qct7Xfdz934VjtDBeaQXcmywpFxU5BsdVT5nRxiTfY8P62RHkvKQPsVHhw2Z",
  "key31": "4x69xDHfWFyY6nqot9ZHNy3Kqa4MyMKR5biMFPDtG57ToVF8zD5PxskGYWNLQcwoCYAjG9V1YktY4MYxHYxgXkrk",
  "key32": "5YaR8o5gitgkar7DY3MuiyewQvicf8ViYzSn4PpDzKu81q342swWvzjz52gqbSzp7rcaMha5YLHMHxiaK2GcNnLk",
  "key33": "ZLbphRWQdsop2zWgBWqYfEGnQxuNAMoVJBsNgYUy7WY8H93MdQRHcTsmNYcEeiPywD25KUPxVoo5TNLKYg3Mc8E",
  "key34": "2D82LLcPYr22nrMydchCkfPNTqZnvcDsccdDt9TsvVs5L39BcS396Y56cBXJzefzyaq9FGv83K8rauwTrhcunHij",
  "key35": "5TaXPNPXsRRMWLxwoqTm3gYWXB9w5YTMs56vbQB43LRPf7ErNnpHzDHbwj6h1RUPabHDwPUPN33ZX1YdLpCmiBYn",
  "key36": "3fF1dzLpSNKVjBHZZ3rCenJKmX7ysjbSA1rdVHcYKmoVgtwr7aFDTMcvQLFhtiJwKTk6G8Fmws6SC9HqKMDm2Vfw",
  "key37": "BXb7xN5Hk8Qewae4bn9iNSqdyZ2LQRsS2C6EK4yr4ih8mQNyph2gMsvPcTD9uTnNMEA6jpEuyxqSMm3R27fB7TH",
  "key38": "3Hp3eYTccgfwHW5fgXUPs6K7UbEo7gnmLJaFMPzUnZhCzCLzyGBtMuHPKE3LBuzeZcXDxb6LrjuaB8rPPeHExWHh",
  "key39": "5r53hUPVWB4G1A8xtMJyG4v6uajAnFZZi5XqoLaSTk9dcTSRbnCXg2QLTDkP6FGz47cVcnPJjzDtN1qy1aGH55NT",
  "key40": "4Y4ZYq4b8bfDpBsY72H2XvsMiguRPUnd59ZACMrZ8WAyCDzCmZdYqYB7mtxW6CEC4u2Ygbjt7pv8x6b2Pf7hDpWn",
  "key41": "4srE47JGf62afkwTfgV6QJfzpgivp8ZTYeHPuVDXfujSGWzKjdrtohpzy7APFJjvyAn3ovkzmvMCGMe2Jfs5ion8",
  "key42": "4r4bKnhhrv6VqaV1Qn1wTiFZggGCRQbdtSKETbLAmkPCRyCHidEsS9iYungzaEicTAmDnzV36fX3vRG9FJgAsWmJ",
  "key43": "66k6QZXp8RbXFz8tcbLBaytUt6YcRAySrHWKKhSvMTUnYTxZCtBhPwupaDpGtW6DQMdRA9Wn2aRPqAERVfddwQNk",
  "key44": "3XFkc12qLeoxRcmiTLXNo8FLhqogPu51tVsvEG8DxHXaAxWF4snzffz8cJR7foCa6C6oKda8xfhwX5vuRiPp4znb",
  "key45": "3Bbxc1sipzKFtmDcTmYfXu4MHMeiocci1Akhs2EXFzYag5xm2C6Njn9k9LFcDG7D2ms1DZchs1c1EzQ9RV9HhE6o",
  "key46": "5iYvs7GvkPN5mwSBicYwpbg4jP3Dp64pDDPcNvrAVnEEp3JB3C8JMTs7BvaGGk7johouHWcCsEJaExLYcZfNs9po"
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
