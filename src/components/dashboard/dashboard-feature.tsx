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
    "5q4fbXsdipALomXMS7xDufVj4C6zhGQYshfXutTwkefTjCKSX5eEBTqQ4pCgGevFihYogKicn3kTyK3qy5vWm1WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsfW94BVfNUAsGAAHLYTeSVEFnEyjsXBE5WuVN3Df2QVeNDfPPdWK8AXcCXmmF8V5zxZaSNPtfZdS2kfiqHDYN5",
  "key1": "5modRFH5WbFyjCHLzMmSgnjPkZqiz4QstFzuHq4bgs7HVPwWEqBGYfzpKtq9N6P2tR1Gsbp1SLRxGkUo9fS1P4qw",
  "key2": "3QD5AhYFZDXna5stSHiXDQSuYPtzXAbZvrsqMTVjNssrJrncrVpzLFGRNYtW9moidN5izMk1MxjHyU6wHoxueguX",
  "key3": "KRCsANDDGrj99NKp4hWRqpHDn8roBgAB2E1qngxGkGTXw4Fq2vwADHrxWUaAYs9kSK2bSvi3sAhx4yQbdXc6Dki",
  "key4": "u38GWPv5zgDUQpagujd6bDTuNge5PgoMCAtj6FmC95c1rSUpDqk29Ex5SVRz4K8UABrv56ZvQC3RT7YW85sr3Sc",
  "key5": "425Zt61ZMtRtLuHMF6YhXufFyEqhjetUHMmcmRq6N1pYB52M28JLy4i1AqeXxstZ6tVtNF2zGoza99G6Nq4FgwKS",
  "key6": "31D2ciWX39iHjvNpgaau31w4LKKHgdiCPvB8rhUP2oGas2HStRn8exhEmtf56jrpFGSg3AZ8dCdwsR8Z9SGSH2EM",
  "key7": "5bBuCrbeTqN7vWRKwkxuESF8jkzsu83hhQgpBTZ9QvWVnYwyYLLT9hE6w6CdK5oGtrWKErWTSKghFsRb3CtCR8sK",
  "key8": "2syKWnVzLnguiV3wf9vy8Qwp8Lz8uQ5BwLEFxmJD34byJ7jKyw9SQwakpW387bcqmiqwE82xZMWyCbWE3ZeXYThV",
  "key9": "hqTPhnmHHqtD7m58vCp6wYCwmanVvTMbzSaMinvbUMZayHhGiw1wmnyNZS5Y55aA5MY8DW8KetzjRAaT7PUsLi1",
  "key10": "hPEzn4pW6X8xBKBR9tcQEQPAfPEUoGdESrtqcMKrTDo7JAKbxx4RqaFRtTV6ffamQ1Byjf6FGvPJ7XEifWck6x5",
  "key11": "5kcDE3UHCkBWhLy71KKKc4bNggpffBjc7aegkoknJ8G1M88RKUpp9ACGZHmm5Tp3A4JnAmgacrjWpwSujNt5A7DE",
  "key12": "5X18XhUD2Et4rRFSRHyVCQQrgCKtqt43stwQPbjaeNCZXv4LvEvEtUyBs4vjXPkPpzLz1bYdWgUUMByH7J1u2mUe",
  "key13": "48MxYjGctoAgdFzB2hahT3jqoTYSr8Ua1gaNAsmpQdsx4zTveJ9kPmehymLYCNJhpCchjCzoAxjcNUYq2tLPr1S",
  "key14": "3GzauJra1svgkx7YAVqXjY7T9JA3QYLemmXcKk9ZuQCpuAUAobdW1AAv7EJojQ53k5cuScUbCEsCL8oj7jsY1a9p",
  "key15": "3ELdUX3TjKbjMSpN55wYJMZaoAkUrqPb9CnEKHXPrMXv8LhqjFYEmUpejQG1J4ZfQrBpXPvtjpZgvaYwi2tZdefQ",
  "key16": "61uZAbfP76MZYSXVAJkvtFbeoYwLP1evXmCn4CVSsenvXzcr5t9YeP5tGZZW5nwy3oRcBprsKqTMtWAm9XV6cA2A",
  "key17": "Jwf8vDiDWAFRsYapommAW8bdFVwMeR2PSuVUjnAPuUm3wTJc1ioRgaCaZNQ7u52oWe2Ky9bwGujyKCaP2TVX5xT",
  "key18": "4QKVFQkEZd4b38oEDJKJf4qBbatAgxNW3VecNzPry8hRTQKJiciA9sxrWPwbuiD6i3JCfpMi5m2su5CUQwPNcqrT",
  "key19": "XdGrs1MpEdgFZTDscCv6wL4zYBF7os2RkkGLHhURnaryT7WVjnVTq47L194t3GWu9vTzaqyX5VCbTaSRbsbXeec",
  "key20": "28eb7wt3HVGsWgR4csYszeKUbYhc7xCm8F2GEcgFFpWfrb7x8qeVPszqG8XPkgqEBGMocRD4eZNek6N4EZSKPz3o",
  "key21": "2JQzQ19xUTzt7rCLA569K5QzoFhdHCvTsWPXBg61kCidMAateG4zKQZBpGzK5uWEmPvHitcSpF38jzvJS7nJuYmB",
  "key22": "4NKUBmdP7dsE6DmxapGbRETsH5JxbDKDYXW78DAyubVsAHYr4cwytNmN5mh1L2F1Kc1cX3NmkLf7S2UAR8AcvYYf",
  "key23": "5xzt1fpT7co6XesgAGpAfFtj8qhx2rCcvZgRrQnmUGNu5Uwo1uamstAYDva9GNpYsATWtgxUiZKGnNSuxpbRUBd5",
  "key24": "3FpVBMAjzzNCq52KyS64JpD3HawjSctVGUYotM9w5tkKGMJuVANJFxVkgQwQCMJPPCgem222J351ESG337uivD7y",
  "key25": "bV9XHHcjtooKuWc8AhTaTyw8QYaCmavsdADecxb3YnFNTg3oFH7SmdJq8a5Z1PMiJNR63op8jLUt9WM47YocZs1",
  "key26": "5tQDcqBNsBqE6u5oKQtYY1Jq3u9XzW2NN2BHw1um65x2q1m2ph9uCztHQJ12S1LhAPnSR3SY3KhfhARULmrgSq7M",
  "key27": "2qDMdMQTbadRZ9UwSTeFx6RYgELMU8ECsi5L9CXVVyDNxmGNMvW7k7z2UbYrLoQ9azmKETpvYQxRnjioMgJtbk2y",
  "key28": "2qVe5uCPWpVKe6nfwkKH6j6oJnjTp7V2yeyTf5HEfy7c6VbpnZnQMf2widZBN6UN1CM9Gbyzpng4cmRM2GH3sD2r",
  "key29": "5J2kZnGxJKuYJQU3z9Cg2PogJiRWFUKXnUcGNPbD9UK7LnEKWLPGxs3u5mJAi5pUxr7BHH7Ei7aYW1ezvncDb3ML",
  "key30": "3wMdGCWVVnRXPEzUjStcYGM9VBHfv1DrU2e91vvBGreuVEyXEmnTBQPZB3KfDFQq3TukNJQzcAjXYpMBmKw5L4xD",
  "key31": "2wc4qSFA6AcsnAMjYjtBNTs2cNQGw8CPmJ1VnL7vmKHb2yEyxxe3nm4z9LhT385AiFnCh1KWVSUKc8WkHEfH5shQ",
  "key32": "3gnhfMiKdXDwwS7BBsGm4SL2qcQxu8VgdH9YC6GeJF4zhv3CauMuR1hbsuvURKVpsE43TeSQMG3nLfRwMciJXukB",
  "key33": "hSpxSa6ncV39Quv7jy9wrBB22CX6mzVfZx9RLK8gAwytRR6Ejzi3j3BBnbmuyAb4NtswXSfZWTwuE5TzqJPWT3z",
  "key34": "495EYrwX9kukFgbuPgxpRKhwWy1aAZgAanT2xAJNED1z2ovTtfUZups8Q8Uq3YSnz3cQFAVUZ8SrwEtwuu3cPcea",
  "key35": "4ByMEhisUnkgsWqy755nVoBahrGn3aDiTpvvoKvUgdho3Qwt6i8JfmuRMfUxXkkRo7SQB6nv2DZ87KWHvbGF5Sm1",
  "key36": "2ykxSw3t5gJFeNM6SBLYrF8ym6bX2YMRTramU9x7ZDFXt44GVQoeYW2q63qzPi2aBm23rTaYxRBfBVYfmxVvm7Rv",
  "key37": "3rbNvftGJiqq4ZHeePTyn68vNHdsQwwT42QcpoFSZ7r4H6Lk2Bi4TC8oAoYFNNLRdWvCXfhWVK1sWanRiEVpsQJo",
  "key38": "2GTcRHTEHDnUq2voAri6F3bh3us16BJKMbEhf8ySfUQPwq38yPCcpTGUeRJTCVt5G4sKGsUcBW2d6nQ2Xii49FXB",
  "key39": "5xRh8nrfey4u2Y3DhHFhEgo6VMzt18CK4G2EP5uKs9cxkeA5fdCepQex2ciAJPdsy6CbFa15UqPF3eQ3NJsdBDAB",
  "key40": "38zH6NvXVNvxkb6Er85sEdhBnpZpfkD12tTgtLWTXF6s9UXpUpmSGSA3ujumZ35fSuubQgg3X6yUyMy8PXo8vU7S",
  "key41": "BJ3CykTvrpsH4HwtAQuw4c6VsQLkVWhJtmFc6ZT35rE6YbNtHrUDmXcD7y4aEC26NYhdS4YWG3bZzDp2yx1YG8i",
  "key42": "t66vESxQiPVsar4ZmPCAnhstiAyQNRs7VV9suMJo3brsTQViUWNZNCfiZvfat1BbrEKLKbWUjNpUm4aNyipyKDF",
  "key43": "4VYYPFYTn9hGPWHpPnaPFt3hd5YrhXgN17GVExE1wynKVpLip3bDZ6zPwCMTt4VownQmrbyecmoBc9RMP9VkQoXJ",
  "key44": "4YB8hHcGEpCgtj93W8xA93N3yXdUV4HtSiDtgHkWiyvVEFn1MYfxMMV9iHwvAMLb6df8Y6ti8BXpvW96othf8kxf"
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
