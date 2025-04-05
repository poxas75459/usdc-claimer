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
    "7Fi933dYp3a9DtNtrb3Ky6gAd6AxhSUihdcXz6GHJEmUFX8zXrsJTVr45tgH2eA97KVJBcJz8T8TAkPqBTqPYUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m5nZcQ6j9NH6ixpGDr2bUVviFdvcpiNVBZF8iT4PMJDSBKY7Nr3YdFMSCnCsqoPhS4YVUwLFB4QgSwxYeqWArYn",
  "key1": "54rXQHgwQmK6Ujj9oPhbUnq6VKqfTA5w6M3FbsZwzqnSjLpXi3EpRQiGiHhzsdEbjqUuR7PJwBffVEccnpvEpWuo",
  "key2": "2vG3fo4ftcrT4hRfYnoHMD8CbYguw7D1zGyra96odxqjh4nvYexzWFSwcTEtUZ5ia9sJs6PQtVvtcF8LTaN1LsLA",
  "key3": "2nEPK3VxoS3GyhfJ7p3QMMKF5H6oPZqYDbM95b5HcDYgL6ndSkXKVA32DxfMqUGHGjazjofdrvz7n12okjEwLf7",
  "key4": "5gmFNMh35wjkkGFfVXK3B3jwweJ4qxWbGHLu9mEj6UiRZnwFU4iLn2J1XY837cNoeFFM5huSeMzn7jj7eb3EVBVF",
  "key5": "4nHkH11Kq6nbshoNcChaHA5V1iLYQHuQMAWSx31BtN8LmtHA1XNq2CFofPkCDMbZVcjvGMrdvchA1p2UoipfnsD9",
  "key6": "321iUN193ss9W4n6sg5EhxPfBiLscNNB3tRp48U41kGQCS4s84hDPsnhUnL9PF973jjkwnLBG5EGoKR2z8doG1Se",
  "key7": "3eyS9TgzDkoP3TRdShtbikipLEWwKqtAxUERgt7SirWTBtZz5KeM9XnMqj3c4VtFEG8b1SsAS8yzJXvSR5FfRPX6",
  "key8": "5o47Gqrk8DgwEyxpEfoVvFG7SKKXNm99NHeNuRti1B8BrEHgdNiewzwhagYDYGoBHhE8QLxRCHgwwdepphResKN3",
  "key9": "5cd68XUQA7HJBvPmGxqdD8BAbcPEYaUFCLSGHxsFEeXZ4DeLiDpUnMdbZ2Sp2cCTYhZkGCYTurb8EwuJxNmZSFPw",
  "key10": "bcocLduFRrSqACpRUasyTY6Thf8ainrUjTkRsX22MAAiuqty5EGrcqNh3r2MCvSLns9an5dryXp24QiuNy3tUVe",
  "key11": "2pgCcQR5Eb3G76psnKTo6jrkjZaJtwqr47Rjm7gZUMkCuaKMpVLSmCCrojVsaBA8UQzejD99NTGGbLRRoZntM7MG",
  "key12": "3XrnUdVpG3o3BuyMM7HvXjK2HDYNTF4nvZfCZnCVohjYWpDmuYkaKh9DpQLsQ42SjstYesh1DeqwMzzJwr6Q8qqa",
  "key13": "2bMrE9xmUU5jKZn94b3vA3WJPqzZ9Pi4wQNy7uwphQnNiqinhNwhAbtrmyuFR5KopTNoMyGxN8N6dwd7MmD9Wh9x",
  "key14": "4uHe4NBzaMqMnj7kiage8QN35XTiCqn7KNsWtpLxhjtbG1d9zprcWnDYrRzqsrGDXMBhBJu2jAA3sMPCDCTKKg1C",
  "key15": "2KMBsfggyX2swpu8rqi28oUwDBcU2VNDKwoMe8BPWfrk3pCmpsERG1b5KnXS4CD1eXVyYYj5ti8AxYDXeYV7paee",
  "key16": "bSF4PZonaQZXSfgxauRNQbBWe5Pq4CdVmeRvvKtweRQ7i37m7QKFL6PXTCjdgPRaMDApgGFAeZ4KuSjnAx3wECc",
  "key17": "1CZ8fXpyQsiUEJjgvpbTwbqa3s87SfE724bYzEthKt5xz9DNdgr7XfMvdUkEdAzZ2Xr3sgiDzSADZmhtaEKcAuk",
  "key18": "1TPF8Jd3QWsuib9K3FvBRfQbQNAz7ub6mtm7MSeYuSfWZZXLMaGe5RNeSm4C63XV4DJgsk1Y5SNaGm4Q44wS6wQ",
  "key19": "2YvF4r5bhTtnwiZEGQrKDnzSH6hNFc3GFaVFQHdFmigdZkh333z4AaUUKE4ADpcJLq429QgNTzChbX1rGbZNfWhZ",
  "key20": "62MKJxTuw8ZnyGn49wJ749zFVX2KAitNusHwy7fCcb5EFeYh8yS67icFdK3eaU1LXmXWeshJXaYSCvoMNvrbJDqx",
  "key21": "6fKAg6JFQXUSWkCaqCGMUxLpwZdHecXxAjqBC816qQANanAtp8NgzDe9LuMabEBTdkVr1n1ijL3VJhcd94LVb13",
  "key22": "UWtL11WS1HgH9zcP5YcbUc9kCeP5CPuH7Nj5H9Jkre7gVCxN9UvLNAitXKyW5bi8w3pXSV5TFDpQi92sqrRwMRx",
  "key23": "2HEM5Lf3PKNh3tZUhp5XGV4dkbvzaPhrhGKXdMVtTtunyAnVACytWBEGnVSEN4pt9h5NLkuGcS53LLArWJRfSbvZ",
  "key24": "4saVkYpaxsxBbMgMVJvLwNd7N13jg4XVPCFsdzEY9ziQiYxgBAPzU2MmTZxfULLT2eRwNWsZWrw5NjLDapGHF9rx",
  "key25": "kTrzConeXAtq5c8CdnZbzPBzVTfYMLQo9jL1ftH5Sug5DukDhXmapteukc348gzn6kvsTj8y6LtmqRkKfz8NeEC",
  "key26": "4mujC12y83FW6Q81t2smydyjSuApwXLU4khRx5AU1Sk5fkkTDr6Bbzs1GTMZTiDeafKruFcYzitkUKKqw3BFvAea",
  "key27": "3Jd8GnW3qBY9Hua7Bthkmy8ucsidLR1x62wCxdVJe392NXxrndKWSSR9JkM2qN7Tx5N4QgEqxL1Z6vDkENdrWHWu",
  "key28": "42xZJTkYWQVVAggW1USYVWHiVSiqVjcf3V7YiNNf5w14KHQxix1GymKXSFdcuf7QB39chiJwyCAkdRfhTmm6GULp",
  "key29": "64cKzM4KM9N7nvreyTa22X1Gp2PPVfM8Fsordo3o7Jr47zsZxmf4aiLqdWDoxoPg5JVsJdCFwfeRL82ysbiTgPYz",
  "key30": "55P2hMQfdqHBQCUBgVtg6ufAv1UER6hzvUULBqi9dkfbzA4NZfMW7muid93HCNMG8MFSmb9byD2C4Vu2hdPR9yU8",
  "key31": "GudDTFqUs9VGRrQF75GMq9xNhiNpjB9Nc7hKWsJ5KVqcEBTGkitNm485QxCfeG5YsLT4NQV1pDW1QGoYNX7dQZp",
  "key32": "462S7hhKsFk4A8Wio7CBYjtkbLJJ75PDjHTCxvP6hheL47tusd6YkfpadfNhGE2HHx3N3RpNeioJJ4MrH4dv2dhb",
  "key33": "4NC4byRn4DzZ5MU7WUf3GkvLp75mLMuxwSrrdvukWTH1iTZ8vMt72e99SvndLrSpNLXYeja8Dj2fYS6qvjMxmfJn",
  "key34": "24VfudJAorBcb6pHboirJfmT3hvSjWAJxb51yP4QvSFJa5mm8Ru92U8CApPsKRogVv9hnaLEKVR2KFvzF3UGwpNY",
  "key35": "5hpPbWy2LDCWvP5AqMoXuw6ps1vjfkW6dzdBzqXpzxH6Bne9RQBakX1MwasiypSvo9zbAnUrv2hGgvN3kQh6ZJRL",
  "key36": "23VVafafaXDxBk6RRxKBkrTssM52dhPUFfRSSjNDvDftAjxKaodEMhHEAiaTmUfSmxmvhUNQpJF4jeKwAzxCXAMY",
  "key37": "4WefcG7qGgjLV1xPYfqvwmKwYoJhoPvN9BRK95wzw2Es8FMmuENMUR4dfogxJzckvXWni6iaNTARQKseACNCQcJd",
  "key38": "39G3Hmz8gQpYJJk5ACG6RACBfAytAHxV1EmNYsRCHLjhS2QArDp5PUquS1AJhC2fKh3o2sUL8jhLYQqqeYXVzbEJ",
  "key39": "3Yz7ztrRmm2mjcZrdJSwQHQ95gNZPMo2szBvhKUc77hhd6BfprZQ7b7EAaev8xJ7nmxbCctMfsfMvNbRmyWYmjLF",
  "key40": "5zbwRgw8Ju23Wm1BMwv6eEbpdBo2VjM4NbXGgrUG6RJPWshRNoJnTpQQKA8o1cRggQi1qjJZVNkzx2wHbNEjSfQb",
  "key41": "4izvEvoxKeEQy1U3ESTJrQicaACinZnZgSZoEZxz1SUQiyzb6MVsCDts3Y54fQnRrrq988K3DWFsATywtLLCvFQ8",
  "key42": "NoWPAC4i1MRzzQsnJeA7pppchtYUFqjRzfzy2TaCz5XUAVmsZH65Y6e9sjC81aHKbQEmCExh9efTc2XfVxhiRZT",
  "key43": "3BXAieuSXHFMtUGbn4Ye51KcTxeXzb376ycdXBXM5d7jMy7Dh8macvG7ngVqkcaPYqDc5hKxg3TjQ9V2Bzwmex2S",
  "key44": "KywXik6nmsSXUfaFhfJYk3UX1pbUahWo6oZzmX3oecM9JUm2CKkYa7ThxoA4WwAhZ7dppgnG979S12pVNDuQH6u",
  "key45": "3jnGP86wUt5vtyUKLZH5GuzYEuJHfjqZh9Ewxh8XGNfEm6PV3W5khWqWnLr5PzDCfacYmExMSzeesY1k7ckef2gh",
  "key46": "39YbDyAJ6ViM4nJ9eLzs7nnQATyTf8jVQGMav9kXmBdoFGv755gqf8m6nY7raqXaeWh3ZC3tTXcXkPPJkbjw4wEb"
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
