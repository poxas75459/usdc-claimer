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
    "5Q8woAJcp1kMBQ3goZC2vUVdnt7MvGpwnKBgrZDQ87vPVWnxmwTDdSKyUNhQ6uDfuuzH89DmjzMbgYcwKJjenCyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uqs9LS1ZtYcDNHrTGwj1cg9n3L885fvE16WivaTQiH1whr1xNKdt53LdLoms9TP5CvykyA5TSAp96W2KTYi16KP",
  "key1": "3bJCqt3faKUeeUZRT7yJyLX8DKJWesdpK9NuzwhRu66XzWWf49nQux99NodmSDCYpK3y9AgVAuwt9HG1yUwHFZz7",
  "key2": "4QU3iY1QtEi9UhZikaPxVPLsratSpLgQgrrQ7WHnaFETC2NXoRthDZmJd2ipgDs1QArff2S7RaXTD3LQJRiYQLm2",
  "key3": "5hKauz1J4Bm7cE24MfmNduWnDzZa494pL6R7DDNpJ6szr1QPMMgKCyaTJzojcgjSVpV6cYzgCw6HTCdL1HVzAd8r",
  "key4": "4sAnrR2i8gFmTeau4FJKzWy2EPXM4qiKBKRedpAKQtRDUgFAQ8t4TgubfEBVLVXCteQnaDeL5EeUpMcUtVtK6x4S",
  "key5": "3p7wqFfTT93iKx6Wg2ipe1DdAg8TA1w67WzF77MJKtcnHySYTYPsgrWC6LoXRLuPP7jGDeUAoSYoPio9peLNZcsC",
  "key6": "9iHcoTGGdcqy4uDrnpokwcrp1Z5hgnTLCMphamR3sgJFcYfx4ezHY5UWxAAvtVjvaeKGq8HdxRfJX4zYe29fTVm",
  "key7": "5ouZysccg5PExiPvvnkvgezb4GJvtJKU4VXKWX3tjYiuS9qjn4rLjewjodB4ySs1RgqSc39Ku7fnYNPHZtGE39Mr",
  "key8": "2ChFNZks5NkVHBDNXakCUwH6Hwauruzk9JzTCuB6NqWzdKeA8BV1tpwjezC7AEp7m9gXQw6bmVfQrv5AZhNRnRSZ",
  "key9": "2hNpA2YdbCGf8fjbbFkxhephRcoPoRwG18cqaUEguEQira7SuRCuWme45pLAquYnovddu23WYwLKmTTLoGdvwhJ7",
  "key10": "4KFrtEPAb4ex7EQG472D2LEVX216ymkUrYKihpV7Z1VynQwHqM1zqR3bDf8ERsx62mwZwFsQJEqN2ai3DtsnXSdL",
  "key11": "4X2MPszjbYv5iBxsTre86JgtPiwiXmqp6swjnMVhTJfKzZWCL7VLX3EaoxVXgTPWR67DouqTATjraVt7AdUfgBWd",
  "key12": "4zCYzzgVZKSDLnfG8sCh9GnH3WZRfMwq46KoGCxtoS8a5bLZDYGsScwzp9UburW5QAwaBdeENET3FwUtCNk7vUrZ",
  "key13": "3TCFcU5BdurMHhg6rCw5CDvsH9ND43UuJA79nhJ5Xrw5mQrvDpmqRubnbyyffxwGtq1CBPUKK5sF6ow9a5b71uuS",
  "key14": "65X11MQ5vDY7Syvr3KWmx8QwPNt4Q9n9C3G3LDzxuty7XAWdRXsiWa1EDh9mf57gNXUrHGEPfY6d6sakZfCjrWew",
  "key15": "2e3rDaRbg4dNxoV82EVJDUd9ybfzaaFMn27vnSZtGndBroUNFANo115hJYMZnb3S5uPhvytPw6t1seveBB7aQot3",
  "key16": "31TxioXyGkbF6KqQpfdcQr3muwfSzdzg2w4CRDLBX9sDgLoa6n95TwZfB3nANB5quF8F6Pc5wcL8WNTS2ypuN6TU",
  "key17": "3DC4LwqLYy1sowMi9YPd7MDZ2FTVn9HYajgKMUYf5gVwmLB8VshbfEnA7pT9Bt5NyMj7ErBST4e4vLJZXyw1gYvc",
  "key18": "1TuXb4LZSg2EVv9P2siQrTYRgsCKLKyNY33Bm9yigtHBxtj92ZSsMcrndjAeyqGR5HfEUJtQgxKduWa9YLNEoxL",
  "key19": "4dA6Kz8J1fP28QC5Gn23nnxcw15ogkbvKrTvWqSiB8BNrjQYgUzSEPDeUvDwig2JBVa58KR5vrcfo2EUPRL7P9VC",
  "key20": "5YdPRELAJh4S8u752gVMiHs9bpBs7o4jnpFtZ9nxhA4cTvkgZW9QfZnrjq1jSgXd8BpUetLeVMu77ZLV9b4GfLTb",
  "key21": "3xCGd8cA4QVn8HZSXtEPBr8qHtMMZyowLkiQEaMhT6HQk6MkoR3vonqPHA7LVUw2N9EYzkW6Lpej9QWinytiv2Bi",
  "key22": "Hqjc4oognyi1X532sW1ecMd6os1XV8Pr55s7vVurcs98Dejpo4MNCRP1c9qLuxb7miF67fJcMbzmzBTLd5tiUSX",
  "key23": "3uyAQ775vT2KwQJ2YXag7KR4dTiDxTZtm7yoGf4jFwYsHEaeVVJDdUqwmmWPtU51JGc9zejbMQwYc3xSKQZ75m7P",
  "key24": "4g38q18fVVuB1bk4Wc9HTsZSD8jJEjz3fPSxRXXieuagPwyiPfroknQ2UNWXGZHaoicJ6qVDFse5xD6rL34TRS6k",
  "key25": "4hg7gtuyoGuQ66xaachjwdqTHq9Tq3qcvSTcq1JtrAviSiSJxyKw2aqpxHzbPmyEMtAkia17KUjZyo24M3vbtC46",
  "key26": "6QvcSGZg1eseLn5owZeGf1xfeGgH6SiCipSWi1gCb65A5Awa47VfKoG4VfGEYfSNpnZdqgDKZNz1iQJ3Hhx9mfA",
  "key27": "2vHhGyUwQBYwvYeT2DPPg6TcFmvBZNRqNTMyCq5YuRKeHK17zVdsh4XSsu84svAsLvHno4HK3vYZZ6WB7SCKWmaF",
  "key28": "5VqMPWNtigMYvu1ayWXJwzMpofhQFiJLyit4nquMccQCYVx5CdN5XYfFLw8sGReaKLTBe9cyL2Vm7HFwxqk1oyBT"
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
