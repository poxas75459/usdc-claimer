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
    "4svb7uKhEVS2ruNXZJQevvy8fsGZedV73zu3PapqMECuaUd9quGK4DjQjLgzbRmULTrpqyjvrdMPfTr3sfBUrKqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26o1fDpubaFEgbZRm62G4He33Sx3GHw4ooEVehL4ebKt8jZZZJ1J1SgYLF2Te9WXfdyH4kNGWpMzH2b1y5wbHU18",
  "key1": "3TRKkeNRUbQ4qFvW4cHraZNxzKQMHfQXjtLCn5Y2iKDZe7eW3RV9KYVrXCYbUkKK225zk22bQUJtcggGARrFa8X",
  "key2": "24nVjJ3ZT8tCNZZcBj6fSqEnoUSSNLABEx8UEWRTVnud6JS9JgVwsi4ZKSfe4auc8EoGbn5GHt25BSX4TGtQN2yq",
  "key3": "2c9A8tyEMtPYCo4Wsip6gFTEZFEWcrT3fjDiBB8pVCgJiRcMZj4AurruhMLiUkTHi2JuTxu7dnQRVJrWontr4SLb",
  "key4": "3M3Xu7h7aCnJRnRUrrTfm5ErNFWExxKR6YQvBm85kFwq5uJxZT9MViq8PdcDHTHBedQuU7KHvDLnCqSqjKD6ucHF",
  "key5": "qbTcUkyNBZ1Fv4pPh6QEdi8BzXYvSrvGBgnw86xKAhMfMDiAQvseE6rNUTqAFaDJXjHQYgXFRy2ywgbQoU2Nyw2",
  "key6": "2TiTLYN4DnKXVJsxASZpeJL3gUtucmrELKJSZDDqYjTsqSX7JmuCpA5PQPimNVomqv4PxvpDaj6hwTooKdo7yT6d",
  "key7": "5stbz2iWHomaAZCnzwgQgyK6Kv2t2BN3L4oiU6ZEAEh9MPxZEYgBCUXszxURd81hYvcgkxWUizw45WhoJ5PPD25i",
  "key8": "31kGRh6dQcV7yk9rCYbwpDJwqSuMTwk1aSPPEcZLKmUNNZghTRQDC7cPsv5SiPsoJcJmwyGT29VX6WW1BeZkUCBZ",
  "key9": "5ZJbVPCDdLTU4uxWKDRrHDeSDJBoZ5bMLZJxLpyeQoBCBsy8TMbKhTsGaVm8Dkefp2ZiZYo42f8X5MAC5PPp9G1G",
  "key10": "5EVv9y7V4j59eRy1sbTPPa7zEhSMNEmBo6PjcEu2ESQaagbTGdvU5cwnfFJDE1BUUkhqXqAJNkTZxufRRdbaxCDi",
  "key11": "JWS1D2xgt6m1GBaCetmcosZAEkH9H77uBWXYHdPDFkwVHAXENTFgRLmyPoSyUrLFNyEh5ukdkWJVJRReNaJTecR",
  "key12": "2RdHVeH8nQDBmTht6JJFB9LRWhQbHpfzuB73ynMwpgppEyVsXKy2AFDwfrtgkDHxAAA2TzEPK6ZFhUYGCrv7Aw2x",
  "key13": "2vQgdfaC6GzPoHLB3gyF4YmL4sTgyv1mZT1L7L8k3L9Yu2s5a6hzkaPTJMXEvZ6gZGXSxnD4UMuNMpoHjdjVerEH",
  "key14": "5djZU79Ct1wn9pTqG9Sm4yr14mB1p2fZ4BTgLuK5ZEVsU1TUxh7AC9eCzxoagXpoQE2UH5p72A9A4NnaYVkDQ9Rm",
  "key15": "3NMc97uzComed5jjDada6KNLDrjGaLAoFCxxdCTy1vxLNjrz1NMBMn8BDwGRXGki9Mc3HuA7GQ6JSVaTcJxDZfZX",
  "key16": "ds2dxTK8Rc1goYCFzfSJeKyFf6ZZAkCTKpzL6Utx1mvTAFgXweWKcaosSBv1sRGTanQMdxFpGLGoPDbQvnVFccB",
  "key17": "3P1S6cxTeBH8NEkUiEuaQsNFCdAqTC5W2iuKY6K9shQZSe1F9kgbUsNqKGZ47dVFJUdGaoc8HDMF1Ju45N2HfMSL",
  "key18": "5Qwg5jcxZNge5hwAhhsxpomj96YPcd1oZK5xbQk9GnPkcyqPCDMqa8LDo79xHyFh44KhKT5kgsAYPCwY5Vyij2qn",
  "key19": "5T6RL4mTMfA91pv1ZVyGV5RpC4phVP9wC2d7tnH9Aw3auTzeXVeAxCSnyfWyY8cDdAMMvFY9MjtndsnWQmUaEKwp",
  "key20": "41aaZh6Bid97SdvRWRNc9Lbqf4p7tH99Cnng6uKUgXs5QcdCETEeYy5xk3Mb7DBSP9vFCqhACSqqReXjq4gFz57k",
  "key21": "3b3818kiDkXDZU1aWdUU4XdxdMaecBQGwjt1qzZpkmK265CSJgm2wY1TikY6hxKURqeYUNi4FnT4hz2a8qR4CusA",
  "key22": "2YHBs1ReqU2CSCFsoCWgVDXt4zJjbd4HAuhRm4PdSodKRVay9gLYPKBHBeTzwdrWdBbUYkn8MR1RzhiXvWXTSqR5",
  "key23": "4bvqZreKY3hFZFyGbgRs9vRQpp2fbAPtaNXyCqXhnkU828c5Y2T6DimvwmZe9GHNfE6iwk3v51upu4iurXNcnUSm",
  "key24": "E4vFVxHzabzcCGFhoP99khuz25WXNds7syysg9uxs7GbtrkfdhnTSATTSRwhJErFrWmrx8JjrtM8fjnuDQvvhDi",
  "key25": "T5bpjW8Egy5PoyUFRwftbdEcuRJPNpwiW6UiLhKEG7fLCcYhhh3RRBybSXDJcHeWcTuCpyTQwwdA9PdqaXwp4AQ",
  "key26": "5WJf8ZRT1RMeADAAMafUTg7ahzSzVuRyrDaqBZx4UTJg3qA25yU6JkXSnUf26wcdJfgQhWfWJaTfHzCaEeatA1a5",
  "key27": "DHp97r6Y33BbkEvpjj3BER8jdY3BeSRDtaQGwZCr2STSB2ApWiSdyXZzgtgCWFNyWLPKCYv3LPtReBqM9kwu3XG",
  "key28": "2UgPNT7TSMUHQQ7oA3CQByNeV2C7wmwKnyvg5aQtyD7hRB6Dq2jRPCJkVBS5aSx1unMXnnaZFtKzssCUN7nAiM7c",
  "key29": "2MMv2qVdB1xLbS1Bv5NKnKCufgkKUNQhVmTtLxU4WdxVLfxVJSitF2SA61gHJ4VLvrL3ry9xyMevqgjpXGfRK8tE",
  "key30": "5r5LmabG2aAGuKsVWbQagv8j9anvzfwM3NKWbqfqebAa3pzR5sBvkTLq79hUyfKHPi6HB3RAukvSMiyMZ1M9LPmJ",
  "key31": "36tQgpB31guYYoGRYjrMTxkKgoXg4K7JBEC2H83SCkpxABa8V71WeJHqquuB7nZU28XYBDPmPF13aLwQWLz4mr5m",
  "key32": "2zvA4hMW7i7BtVfqaj96kMMG3SKSdN4qskAsVwmUTJBPFTYN8SdTenrGJkmEysTgxyWnZdAUUqHzZr4kFvjCdATs",
  "key33": "bQMncit2PEKWVxyWVebbj39wPPrXm8VpFKbBcbiRqf9aefrN1iWcfwAj3hH5LNVx75o6gTJpAATrW9Z5bxHx9oY",
  "key34": "2CUM2gqnSxWnajCyNicNUKtJ5gsFYBGShCWjT7tuogzjfzUmsq7UNYpEd5xK5iikGmoovS1gyuCWcEPJnGpbbS3z",
  "key35": "zGR5aYGkS9etHCAFmYJWtoVqSp3qYkBfchfTptg9zm7NnEHsn4PeHb6TwRSBWQda1zmFUhHFZEHrFixqFBJYx53",
  "key36": "4kXjuGP8Q9hZyNkpCbcR2tPFMrpv8pfWxkgNQXQSQGni74S2xrAi7iAucU6rJkh9t8oPDbaiXgJFxZNMU9qhMmUk",
  "key37": "3xi8VEQRttPP1w6QEJPdCvnU9bCHBJHCtBY4hPtY9VdmHNzxWDLQK3g42F5igk9R6qiC5H7mrZ5K8BjLJbPuMWqF",
  "key38": "eEeUsNypUtewKkb4J7eTpksXUbGWQbEvpV4FWRWCgkt39N96Qe1zYBJPcoVrbpEUeqtT5EKB9RqjXAbH9ZNuV1S",
  "key39": "3ryiijFdpT1xURFRsncPzyrpWuC5UANofHsq2HTVBesBQeAZzMFBUmSfje9ypjzvwv1hdrYGtKgJwL9Xhp1EqgcM",
  "key40": "4xyd84NFiCBPfkhnj4AsmaJouoF83ik1WM6dAyZo2Q1HZNQADjAMxPkfFiBhMpWducWsK5NfQJC9nsn3g92V7L8d",
  "key41": "4FcZ7hQLs9DLVWExZazRSgTVJGLhyhRkemSLCpnfigBfv66gtZpFdv6XheDMBhWVq5bHau4xavq2EhtfenHRjYHj",
  "key42": "3vNdsUsH4Asjw9qm8LKK7DZBGtevcWZfT7mZt5Dt2xd6TPeaD47FmKYphgmjt1ejdXXapc4U8DSK5VqSXExJgkYM",
  "key43": "3p8hFtzLrUYniiDkFztd6LrDZsfpE6J5sDgjWiJUUkR2G2wN6n2nnPbb6Hj4WnjCQmqfWtdgYJyLNiM2wN2pKkSt",
  "key44": "8vDDbpXnPvQj4wnS6RjtunxcLaK6jngvbzirpNXeR4HW2pLJKaKSYbXTFRRZxo5Y6dFmYTBxXnJhncGFHAVu5sb",
  "key45": "59rtND3DfXAoSDGgZdWfauvyEKqy4sKthCxxaiEkc4QTrXPmqHiTodgioPUR5MJRS7R3vLXqmL7poUosWuTvheap",
  "key46": "2MZmAkn6W5e85G86wHBTXPs7gVaboAL9apmFw9ZnpN2AFbaa1DPhrHgg1MnTtcQyEHsayWwCd9yCN2XtqZ8XKYkC",
  "key47": "3oLtzNSexPp1UCcJNDDxeBUz1rnE8P8SgAc8EYStnwGMeuwkYJ6q4LnmV27fkMR5e1iR3sjgsxoLZc6QeHdakzw6",
  "key48": "9irzFNX6JGPPi87s97xB4Siz8D48Dn16Nq3N4Puh93tQJ12dtfnqCHFn9FEa6q26YeXqmXsPBKFDrNUm5bLnXdN"
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
