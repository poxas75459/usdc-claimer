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
    "3oZ3CEgEWCFW8QDj6hY39Mj2Yx1ipkdyjpSGB9wYTBZWFeSti5hxTMCBq1inJeUCynpBcA4cTdvFq1D8Ys6n6fC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iSNiAxnRaWKm1piQ2vKvMR5zPJoVufj5BGh58Yt4umHn83MHREtawMkdKmtNiJDsfyCfFDcQB2hgxaL1sGQPwHU",
  "key1": "5BtAFffuXsQCjNCUkdZCzUjzKikpHsXgB66BpNjfV4YgS6aUUESUXNxxHiSfsXF3RqsAyLoMbNgAefskSVvoepZr",
  "key2": "2oqPENAAemr8yq6gtQQdiXvGhKaG6bW66jvzDWecmoz727wiq5eLmgwszjhomTMYUHH7aMJxHx9PQmkKEpGrNtNQ",
  "key3": "2NsuG3Rv1gvRUw9PwMQTKfhPyD6bAiB4Rte9tyCHL8Dt35JqGNJwm81dykLTLtg8v9Hwyy36ATvcXpo8vNzNVtXf",
  "key4": "65Qogz8EUcdDjTBPmDPP2rWyFXH5p3X8hE7NCzfs57AzhHJyM4XuGKoGYRMK8sFUA5V4EwRsdfVwbc6p5AF16j6h",
  "key5": "5iE8ZTib94MVNKjaALzShmLsntXthrn9hDp6tb11gJidNFGko2HhHGheM7cq4bceCJft6jLfHcb6w4bMuGFYmbmT",
  "key6": "3grbUZofiht8yNLs3LJ6FfHzBtShaJ6oohKf3tcuAtzU2oXiQqx7pfaLiq9HQi4YonWApNJbrJspa3LqAG3esZCF",
  "key7": "5VnK395bKfhSHZHoUzUpRoAoYFyPLxjtmJQDujmTaWUKTR6r2FfGVFMuFb4ohRzSa6C2wocgcAuC3KsFw87H7LG5",
  "key8": "WzqQ76xftPydhVRXA22WLQJG7HkMBP5WFHTJ1K6fGUYd3651zDxZgSdqsTES1cZy14x5SfoJBwUzcDjYf4kjfKa",
  "key9": "2udyb3Zv7Z2VCKuWB8Kg6XHMgC2nZxEkJxqejSoLTCzptAQbEDrUscmFfWtwZRUjo5EGR5htPTRGBBhBMNqbKyV8",
  "key10": "4sqrU1VdfV3d7h3YbovAghEazduGbiAxMJDEW8KEgWCApc83whHGLiA6AvckhXBys1jSUSu7eC6xtf4hkiTzvGcQ",
  "key11": "crzpYQJgv1ucEds6ZnHyfAVvbzvZ3sXqG4Nrv5sZxPQH1pCudSk7Qun5F1758vJKcAhzsPTbPT6H1bQ7gCxwK48",
  "key12": "44tvqJmmNxzE4U6bJt71bw9Fjzmit4YNwjSYeom7Dd4QqGHwCNQAsvGQQXxsJz3W5EGJpYvhEGxLypxUpUwCGu9D",
  "key13": "38SFpyxBMmr5TLDHpeX3adPcxcmgqNR6eGCPWrHwq2ZqSHwinkAQv26SDpdEUhavoARx4wfqp47grZaNkKtpEpZ8",
  "key14": "3H1ahkTRcsZo8yZ3NriZT3px4dfQb5q6ajjMCemhrHbyta8eoq1QHimuYHhz7WpkzaXdmRizNJK8NpJSm7suBw62",
  "key15": "T8MWnDGHPC62kNko7V1LQ4rdACpR1teXPHt4BDc32ctSKy1y4y13LxnuDYviCnrPS8Vp2g5RQUBVExLHe6CMbVw",
  "key16": "28gpqehBGovgZGaKcRkw6Vn6Q7QAZCJqGAS19pzoaxgZ8vLq4mamkL2ntdPmfr3te4vsMvYxcK9XrDNrWeJ4Jgg9",
  "key17": "3Exx8M1w7NWcryrP4C2bGqD5dSh2aXRv5VxSj2up8upLHG3s5rWQZLa8rZ1wsofanNEDmeVNjFx3R4snjGfWEB6x",
  "key18": "5ZxJ2YWgXpymuSpYFvGuhRHwvFdGdggKSYtrBdTdQz8dAHt21tg48TkLXsAfWcMxeowZo7v225iDpUEjKyLF2P5j",
  "key19": "3GcYQwPbt5igm3UWiUybQFGqYgSRNbvQk3vBMxUeygiXRbBTRcKbnh1NkZNjbfrE1SkBbMhkrGa3WeSx5Mvuame",
  "key20": "5jenm3Wozh52egzfwXQpT3cPby2z2GBuxSNKSksoa15KX5Z1DW1k4JMNRdswjXRPMCSMnFeNfCtkWuqeWvBTMFm3",
  "key21": "43sGJmHNZqpRndN6AvJxH6fBz5dtexo7nYKP75RryDfBYN78eWTiwSBC8T6gjPtdRNiFasiEXugQWvSbsskXn6Ku",
  "key22": "36JZXs3PDYGVD5ZzvZynRMRfBQTxWew47cRogjPQhNmECxAvMChry76uwrxSmXqEaVwX2bV4EV4R1XhBjpevuexk",
  "key23": "3CroBw3xBkDRYc2Uji8VXxaNDoTqsQHotRThr3538df4h77PfZd9mBSiisZukAYGJ9AJ1ojJuUq3hsHzUoorZbE7",
  "key24": "43BDKePLbR2jS961MyjAPaRkxgXqekXSJwzWkwoSiLGDUt8KRGfcC8KLRwoYbhXcPvDtds7idap8hEShuYdR85Zt",
  "key25": "5KwGudmNtUa46U1i8rDaaixJzxYYwE19UKL9ETq8zimENHzHhRdJB2Ae4xVMabaPK1VcNk8TrJXZuWj96fCpDKVS",
  "key26": "3bAjeNCUwEktM7UASP5CaaNWuvsBDkiLTSKFdLoQotrSScqUFnk5pT6Ldv8AGFJahmLdXGqe18xzHn4pvgQTPp5i",
  "key27": "4hsRH3MsEwHFzQ6WhL1peiqf9yU3gwJyagiREcgJHziG8FnFfQE3sbaRwZUC9BwLfBCDqdTE7xFnUhuebRbxR3wQ",
  "key28": "3BU9s9Nc3mn8PrJM7jPCUgD1EbQPKPqL7PuTQKxbCqdz6ThqJmBmbMfwB9JjQEGnLYWrR1UhTctcQ8S1x4jGqvWB"
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
