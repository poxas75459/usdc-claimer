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
    "4oEYyH9n3qtwT8mCkVNYXDejs1agGUXvaAescDCLdfitQ6VntQWkZrNGXhKdhdRQXvz2twMwgL2k6ChHH2P5gbT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8RHTKV9cMcGQGph7FbrQgbNhvMRCrgvZWvtuTvHVVvFsy2hboY5oMuUbco63nPFSkyDSeV2GHdx8hB9kxU1N6X",
  "key1": "twRzU2dFVborgdQfMXWoPoYr8mdDzDrHM9xN471eoM8xTHPZDLatTVttSecyHBbbJ3bmvM97N2HSgnyvbYPD88Y",
  "key2": "3ZEynvNsgDgsjhFryCq2TKwArE4M8wr3hgXuwT55TjWG2P3T9jGsJ2YdzJ9RFkySQQMbCY1rJTWiLC7bPtY7SHac",
  "key3": "3sygezfJH7vu2wVGiftTCmjkChGWVGhhM3nsTdFvNZrppqB3ocaZErqm4y6d58UwZvC2Af68792Kcjg9cnRqzxyp",
  "key4": "2bdgX5CMXiked7pq3hhSaiEoRwE2fe9kgGb9zzQGQbiybiAzXavHskZfMVQf97pLpFdquDyfXDf7BPX53z5fjwza",
  "key5": "393DFRaw7z2KMCzeZCMXYDfV13tSpmhnYMLEoFP2ksKSYvSN3WorLJZA3Xga8KUso3J6xboUTSJJd6UzrhgMfmXf",
  "key6": "4vWKxpnQdcmS2NYk5YWN79ueYHAdSf4XYBcpPLXZg5CEuEH32DXM2evyE1SJ9kwWsbND2Wdb7LPpcoFBs6veUcjT",
  "key7": "M6ep1A3uMk9E8Wyugtky6oQ9KYW4XLQ8giaN1Q9ahhE8NJ3cwtegHCsSW18EX9B9fND5MBPVwWWkY2EtSzFpKjM",
  "key8": "3SYpGbvoXwoaJydevn8E3wf9jQfynhhzUk5AwZLXD1fXkJXD3XGaFv58V9wtsrcgLZqGWUbWXH2Q28U5brJjWFfj",
  "key9": "mSNmwZdiksGvzjBgQqymCqFaowKkZ5vdbpfn57btXt9AqGesn6aCpZKqqRFe2jbBoLUrEMqLQhrcMzMaQXYK1Ya",
  "key10": "4RcjQ31DqekfzFvm8jFqfqzSYmopYPDj1d7iR4U52RAcQGrs94yeYQHG6wHWpN78f5Zj775p4HMgdQDhKjFiZwPY",
  "key11": "4vohKatg6PxPJsAorhoj3yNPNAxdNQ15HNEbVFzS5xUXUZT72HPDwkXmESAJaGDbjx3ukMeqx2QqxkxtALsoSUsP",
  "key12": "35hoJ5hwN8udYrS5kjiJaCcSiHbMWaAPvF4nNUV5F2FgdnCrWNwrwvVvGcB8rPKBp1G8xCFtzBcjurq62P9cNCWY",
  "key13": "4SKZupVFmwUX7zJ19twvpP8o4ECHR4rFNNaGai7e9cqTRKAbGFdES4cA5kvy2t5qvLYY7kxLhgSTcEqVMBiDwJ6J",
  "key14": "26XUWb361Mu4visjdT1bkLDUtbNXWRavUGJmcLpyV7sQMvKvsJasLr9GbG27ncZLkxp6GkAmKXPFHsU7LjBzwvWs",
  "key15": "Vxr8JqWg3FMRwiRCp9gripZvZrD8yBsxLYnq3YgEdhRtqhW4PhT738Yx5VyDNk2fuWGJWcWzJ3P2fywPC3WTXEe",
  "key16": "3wDpojkH3HNqHWM7fYoekENcUxavsacUAp1jvrC8TREM7dz8cW4HkzFNyMLbBhdHupNhZizUtZENAdRP9DCY9pnV",
  "key17": "3QS9FZ5NP6QkiaUp8BSQEPxtNfiifRYxfBn5uBmPHcTvVH1gZGgPJ6dK1hk6beEavEGYwfevQQgEdRaTVABtHhyc",
  "key18": "2wN7uM14LuiNfqEnHa52YMbGj9VYtXdcLy1MD3oGuiFfYZCYT5J3b1a7FicuG2koyQVNE7gB78nRLqEf9zanzEaU",
  "key19": "24aA9BML9SgSZsmEDyhR2mVpmYpD933UF5cWxzE7GyBq386gAwnqjuxVCkp5c4UPrD92PreWXCiKHo9NCLCESWSe",
  "key20": "2QY79eSLKARbAWDWazLbCjNUfVtMXhZqfB8Rc7tHwJwLxn5f7UCoqKp9xqL23z8yST1JuXCzE3q68Kj6g6iWyMVK",
  "key21": "5mjec5nWH5F1PTqKAZyRVFM8UBTFiX1fmfTAzpvNt2YFAxx7UNjVSx237WaswLyuqGJZXF8Sb2sgvq2wrZkQrx7e",
  "key22": "2YEUCnkwdVBtbswQrcW9vys95sY4wnhjgVCX2stAK8qqkgQ3u9EzfsbdBBbQotafHGnjFURy5nYcL7gde4PjiYPv",
  "key23": "2HeUTV7GWeZFLQ9WJENh1fQGZh1BPy6jkERWRnZV2c5vPqCYzcjiMtMNDnJUMM7bfJEgKyScBTbNhpgrKrwWKzgx",
  "key24": "3fgwtC3Let3pQxp2q2zUcJx96piRm5Hpbujn4mgUify3S2SHK42NF4CV8qcdWMNJQBFQryT8KKvqMbvxxXmv7xCf",
  "key25": "3LGX1DDcmudfYe3VdwRnDbygbceLDyAjJmfy7NhCRMFpveZcH6gbBYoMW2gU8xQZY8uFbjKFVMFZmGSJz3nbTnmi",
  "key26": "5zEJKbxpvx2vFXnN5mXbJSaFM3praVJAgoavWPvSHUL8F2VZrRwCpqCSr4UHbpyAhMtZs9zu2joiVmibp2YmJbJK",
  "key27": "42Z926dBUoWHx2DADbd6uUZasWCKQcBaKSUKB925jgTG4Uh19MenHnVfM4v7SCLFpaiEFGDbyt8LMKEdTY11rzgv",
  "key28": "2yFA9HAijZcN2oBPcenomfa9pF2XXwNsijxEH9NfDGGu4dZzzGs8PBF4Ex2uZj2BbSFP4crftVxDRZXNrMCMWVh1",
  "key29": "3Ep18NfFWpCV8q8MCweaiNZ4qEKEjMSEWikUk6SQUf43E7GUqfUa3Q4QM787vspNre4FZZvdkkxN5iz6ZQ7vFtKq",
  "key30": "3b9SaZAKMewKhVWy1Bp46bkZygeNtCHW1Ggs7zs6K3R9MoH2Cox7VXv6EtknY2FwaVrWLtwsz9hddXdVmvAnq3BK",
  "key31": "5ckHX1Bv7to91hLDDa2EiuaVK3jui6rpsPLhB3YrvQHx4SQgX721PL9ddpXa8QmW5sqHQDmu3JPeCofQYDwNec9L",
  "key32": "JhpZH68twWPn53xGa2jQxzFtnPK9sMid1GYFUX8zhfsT93ssBU9wky2PTyHPDVBF2c6spCgSBmpfsC9MyVRdf9W",
  "key33": "63HdiYkY6j3Y5cpVFwSLqMJwUPSy22Ubytq6DaebDoqMdaB1DLYcGLNDDmsWNcgfPwFGjXJnP25GK8aWSUPpHBk4",
  "key34": "5ZTbWpcdqkWguN45gDpyrMUQ51W4goJtzmkVmpBNx4XvQMExeS4ScYmWGLTGNP7J7Um4fGnNfHBENocCpQT1mhge",
  "key35": "4BqAZ6UpMQkAtP58Puzfx37saJ7f3JouXwa8DyNA3ELzWjmHruiQ9rsxZd5KrkoyA8KcLjAKxSj6jsjmmctJ3WGb",
  "key36": "4VYxxHRPVLVixinFpFzKGLg3ALFaEQMnnP21AwJh86BDpsfu8k71CbzHW8HggUbBX9yn8u92jzEy5W5WSHF1tupU",
  "key37": "WbuQaaxExutfnqKRVTMXzg1xuop7wQ7aZYyCZs47Jafz5himE6952HHAbxdnsZh8EXc9vKTr6QowuahKUJSmBbj",
  "key38": "45nDd4d1KYRrs4ZJ6Len9SuHhfUf5RL5s6BKTA7BHoSxsf3Nh7V9sgvHQqfsyNoJzRGS1UAEkajoqpeVPJ3oA9h7",
  "key39": "3jWad1AVYkBL8okcB8j4wASfmPmHokKwiyWttfED3dQnaBVPv2umRkrDhTj2yBzNCmnBTpVVAjXCKAwRtNE1f6JX",
  "key40": "vFELFdsyL9KDYwwqRBkSnveNLzVtd6dWNXBTpk5h6CaEyu56BLa9jeKZEbd6aWVP6BkBFTALsooUTdmjVGNwJxA",
  "key41": "6798g99cqcrJYhJtaDc7NHtWPWGKfmVzJ9VxTX3ggg8syRA7JxBLBfCXYKqdb9Kx8Chx3oPjaBdyep9Q12k6XgcW",
  "key42": "2xHjrkvkSYJbGdmbBJWXX9WQEpWg2yTYzUx1DkCW2W24RRJMNLzHU4N4x5MDAKxFMi8bezAe4j3Qx3fRLMt3aRw1",
  "key43": "5V5tQswC8RCgSCW846hWZmaVBa1rq9paG4DDMHNuHg6qG4h3xq647thm7chwC9DxyczyHMABiYuKKbRfkBUMm7Px"
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
