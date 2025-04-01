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
    "5TEfMeC1bKsj7Ey3k1GsE58o5cBEXW58KZLAV6upBPqwABNbYWhrnZYsrA4Zvo7BG71A6e6HBja9zwrbUD7cZNYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33mt7pRP5us1HHwHmLTEZ2j97PVqKAqTmQuGDjHPQQRT8PUgfnHp84svC1n28SpXj28M69Y5mmiTQzVgEt2Mcu8b",
  "key1": "Boig6uFu2puSu2zseTQRWNexj7f1FZw3LCENtcWDugmoRRKjDbpjxtHLRgk3gKTtRaxYdcyNz65Znvmb77X6jCy",
  "key2": "3rgNRwBMXuE7sPvWtWHzXUQuAbikFPP9V8G7AWzXbzKW9d9pJTjbGtW5dgPUe6Cj9rkncBXf27eCJ5pJhfS7s5eD",
  "key3": "37bRsYgZcXqv6H4svSjqUSunJRuSFEQXi3aDzVMLK4onRUh1s5iN628nbkwiZCuNimXEbbNrKzp7z9X4WjbSfgJf",
  "key4": "3sXkbtGZUPKPrwhNWDvf8227FWsyN39bEbfRrxbfn32hvVApyK36cYU1SJequ9Woc873gU1kZ5aJbK7xQpvwxbqk",
  "key5": "cRywKpxZ5xWTYKAEJvYJPvDuFjjMnUvw7zutWcmzq2TtyBwLBdYQaCekQRjKL9WZ3TachsXLHYTQnv11CisqnLN",
  "key6": "67e4V18EqUJ6gGijgQSXnid1mD5x8ic9NCQ1iDouP7YAsQ79CP9XZrdXU2ekjoXbbr8oHgqty2xNpe7rrXN5sTEg",
  "key7": "5JsuHwU3sUARYduExYha57uP5CAb2wm23YmXa8vvV1zYBzENphvguA76pMpjn5BaSuu3sqfSjKkoaMqHPAJ7gvge",
  "key8": "DbEj3Fqu7PMNAPS4LmaVzdMr9oAdCCGmRsbQiCzeG67RqEC6p5njT32obBRSQQfmRDtCwdnjy7Ezne1GipiQsqu",
  "key9": "zRagKuKVunszKX5uiPKbh2CCNhG2oARKFeVyFXv289ziMguGVcUBRWM3bRZ4oTpWaWwc4GzSGxiY8baNADK2i1W",
  "key10": "DDM6BrNYV4WEaXkov9BvDibUBcWFBYK5m4QjGhUycTG2DDW3VeyH9sAy2ufWSY31EDtMqdF3CFvu1P2KpJJoqjJ",
  "key11": "3hPe58zHJz5oEAPmYC6ZoZT7xb1gMoT12PS5G96uyTbmZtMaVkCk36knSkkf3AiC1xBdJMpKfGasgBYHEKSBfqW3",
  "key12": "3HittkQBKonayDJw5djhMifLWGnKACC1HtN2mwqXpQeLVimktcKAFWyxVj5vzSebDGo3tpPuebmt3a2SfaXjaA9w",
  "key13": "3nzoSDtuDpu4GBbxrsBWPPG5KJxG45WkXhKbuT6gExk5oPGGbUozbixy8FSFrVdkhRXC6ds9hu47hqKZY23pYrRL",
  "key14": "2Mqwh4yGRuKUt1xEq14eMcW4vkrLtbNkcGXqcPYCxgsqUSoNBxVHbD9AgrjVJFUHiC83oXHF2MqHofxYHGZH9fhU",
  "key15": "3RWbNMVpXk8uf7v4JRGfk5gfmqn2WFDs89oBpGwgETSsuBmbMZEE29JvsfEqgZPV4RqQZcns9X9Ldvhf1bzEM2r5",
  "key16": "35Z9NvkFQ8hfy67hkJepgeo1HxjXVNYLUHZfCXYGtGkaPnAbNmhA5fyWFfDFEQAFZ6B9FcQ39Nx4oH6d8RbkFv49",
  "key17": "3WP82XqSXtZHRCMETNaZU2H5u4xiGxqTuBNDHoYg54yqA6y3oA3yWfPev3TT37cVjqBBX8SvqrdSRMgLNdahLwhq",
  "key18": "5rwCRTSAqAFzgiVFQFfh5V8VnF1ZZ3Y7jpjvZPFqnoWgv61E15PZG2x9YHqi3tg9NsuEB8hUWaZREunic2BNwCoB",
  "key19": "56G5XToc2WBJbKHLpEiEbYzbUksB6X3ZBzK4MnmytDgG17koE5J9eJj8VbLek7DhvuAYgctPLdzU9aBt1NmtE1rU",
  "key20": "7T6RabNYomRnwc5JGta5KtFqz37vrWGf8XwGMUsaogbyaHkUZpYoQ9dFo7ffJbo7RBR5pvMN8i1n1jLs8Bgtm3j",
  "key21": "5yZTpZgiiK2RCcUSon4vxSLCE7CwU5nMXrLXPAcqLX655LuW3R6WJ2WZEV1D8XdRPBckjMqLFUZWuxb5oGZVwQzF",
  "key22": "3GBkaLru4cHPWWLn5H7nHWo8qdZZoqQD38yQ4maVEFMzCsBFFVW93Wyf9MTNsEVchE34mpQ275KkE8GgJgBi9ZzL",
  "key23": "3cy68fsu6kGSmkaTeHb3o12E3daaqunPL7FqPSjGwMNxoAdWx5w2CnfyTc1c1ETpx9Z9tdijaPNTVY6MnFCnMU7L",
  "key24": "21Fys3T3bNfFBd6VZWEpgPCM9DPLD761jkH3mm9CHway67jfh8EiCu4YKDNu5PeMQgSt4Mk3S447zpTd4pSRR7Bc",
  "key25": "5vegSLjqWpArUvgKdcXMkoP8GmsmyigUjUSi1gL3UbbuT7JF2qPtn1y22b2QuqnbL9udPKFeYsP3yssY3oqAqzmS",
  "key26": "5YhTAeA3XZhC4qe8NbWFWjUZemAxFpn2PpRfEd4pXMcP6Gh4nmrfe1N6s3LNkVPa9kiVr4VZFzFuLrqSxPc3Uh7i",
  "key27": "2mr9m1piChGwUXgUdiox1Eciymp9VEVbXMhwcZtKGuwKcfNtoVHLKEzLV4p6Zj4XoKenzKU7iXiG4drST1nGX6JA",
  "key28": "2ryS2XabyQcNKAkj9RChcdLRbNbo8mdqTkgWJDvZgnNsbqM2Y6FygAqPaEpu1sMQvA2xuQL4wXeCM6qJAMJFnHNP",
  "key29": "5i9WFjZ2hjB4z5QkXgCBtBfrnvgzPqTVjffuwe26tKc3JrWEmTG5i9sje7jL5F4uTCW4v8FJB8beBXtKjb2juC3e",
  "key30": "4qViYborCCxNuLX9ixESHouFNX3b7vCPBx2xfoPd3Df2VgrMhqHGRjKKskuzfZU9ZjdosvZyTtQGBTX3EdNuiVz2",
  "key31": "cckXAvFM2XfsKKwXZ9iqE4sB7roVFQJQiG62TWTrH5rEg8RjYgjXSVpErM9psbLSsfrrbJ2rJZiamfMnHY3ijzx",
  "key32": "4sUdNpKk4LVHRMHspzivW68HUR44nTwRDovo5zPyy1kt8XMv2fXczLhYUqqxQWSvhMGDFvZ1Azcz5AjFRy2SpqeT",
  "key33": "57tNuVVU5zF4FkVTgSXzdvGJ7hJDkWRwuYPPoTVrFHJp4Tny7bR7H4ARv7vEtgF3rRtWEhKRNgq3RxvnheuiNpSh",
  "key34": "3AdiRD7rrYg9h5RrUqSnFvFvNiXvYFJCRUH5SBqh4Heq3YXY5jqXSNtbfZACYSSUDpfBL9grQ8BF58kt2zzdF8P",
  "key35": "2Qo8QRNZs1Bpc3s8gidGHH98RhTAJQ2hTn8izShR2fSj6TroX2jPABJNLqMEXCEqHPzqEadmxwqe8GjQHPkx9EVK",
  "key36": "398wo4aCUcwLfDabXtJxikjRGv9D2LDrK6fG9wVVsaQSB6XSb7DnWiUQCJVWNgJwzQ9MBF3q6V3BwJ5L3GuuMJrd",
  "key37": "3QG7GyWtnDVSaFnRL95b3r1wn8YmoAWRiDzteXeAQqzHDuTdR4NYc5SJrZX1giVvftv6jQvNvVkD5x7fW4S2kf3y",
  "key38": "4cywidRaPMACsGshSudCKGn4rWaUhMq6D4utXBC8oEAMuexnbNkiDfnVjQnx5r8EUTpKvAsr1WAYfTZ5bJ7zE4Z5",
  "key39": "iuis29rGrBSFZ2wx4GvUarqfJwLFuinGhwEyxNbXkwH1PXHa7PN8LrEg4yzCMo48Rry4VF7AFAuazKRyBbFxU65",
  "key40": "5kAheia6dSjoiJABSs5J5fWwcg6m6LJLD3D3Kxc3GspoDM9tC81hDCXGc4cdUfUGCVxwLh22Buhzy9kYeazrHBJ2",
  "key41": "4xtaKCX7vSiGzF1Sd614gFhnfcF4Ew6iszExviKhHGjHnkmESE8qnwH3TpQR54w4DhBmaCdUBYC1P2EVPdenF61Z",
  "key42": "NrRW8B6qGCmnMHLfdGFLEiLA8HPfkJkVDsPMh49GkyP5NHJ4hNpBf78roW3iB4rA7ygaPV24R9eVwg2RaKyRDH7",
  "key43": "4RJybZNdYrotTZB4yryDJDQm3mp66Pwg1tgWJjBLXk1azNXRwVJ1bxKWPvNPcDEMpALbHuenNFyj1geLhiQQBN5D",
  "key44": "4szW3fUe5x4z4wf5ZJsvSefGwgG1eKHVedafxnba1FZFmZPjioNXts6aArBbVA62CVHqByqFEeY2u9UEhwgDRmoz",
  "key45": "4wSGLjJ92UivQwyREmUP34kcNpUQ6CZgTRWEruZzkMrKE7AvvRDkemPdABkdPh1xc3qSL9qDxXvNXy5bTrbW14dB"
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
