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
    "3UqCjbxxAQDkqY3nRyBvdrbNCprN9eRgQWmFB83m3j49TscTDeYrE6jitkztit8824VuW2RyPztjKNH9yRAw5qU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sn5RF5UtPoVAbJd6nmALArrdsud22c2vTtmNkon7fyqQ8V5iSR8NeUj1ULddNMk3D24Ywy41VkiigUbB2ygeZM",
  "key1": "4UQNcG4TBEuyz4nnWZ1VKtrzaaGSnf7yxCk1dsYyNLdkzkzL5DcvLjWtF2WUwcMhLbToaCQDFEMtPpkKrkzPJzq5",
  "key2": "4xrNBMtemy1yqMDPbFCRwuU8WkBoeoHTbT5zGobhXvoozemGfignbGjYqh33vTEW7qFzJZ65SWDwT6M1nfew4juD",
  "key3": "2a8hbVubHNZwKPDko9odcRgakDZCZsXMWfG4uMttzVzVuwKJcLkVm6HXR5Cjep56nBh82tNyyJ83ocrYDrpaA6BD",
  "key4": "5Q8wWztNF5Tcps2aLL3Hxsgk6MAZqQjtuS2AoAHZryLCqcedrGKbYFAw81jgK6wJBPPLtbZ4R2McXE5Tn1ecBU4V",
  "key5": "4WyJT5KQPpLgWqNR2HENPJQVqj95yrguHEMpseTEsyDcfo8eNrEDUS7wxH1ojiJHsYZvZqciGKWJSR4hjtDSe63g",
  "key6": "3riCvJhZ1eDPxsE3XetaYfT1ia7dbiwNLM9ESqHsL2KCX6638kUffiAVoPh57mRitb8x8HQKL3CaWhTFFjidKryz",
  "key7": "5sCvmLmyKodRTZNexvtBsj3jGJ7BL5yqb9ZFPgHWWNFeAQzth65qfVpgBrJRvmwgd2HSVG8YmvGc9QKtq84DaEkT",
  "key8": "3vzDtSTvmg3h5c5jq8XWXsnzDQvZUi3KL61P4Ra9KUU5hZccVjyYktJ2mvnobJCkQebmvRZdbMdR9kMYRKjKSyzK",
  "key9": "4sjfkR9QgrGMotFppv1ARKWvzh5aBaZtu4q4rXb5CBFiWAi3V1U11vcVF6qGBbQ67XC7GNpRSTJybveyDz54XaPT",
  "key10": "2rNVqsv8Cjvtci8WhNSeEG45xn3xQ9iTczgcTUc4z5erJ7g6YNs3WH883ArhW2qw4v5wpWCwGBhaJyLWjNxYjCmM",
  "key11": "4jFX9kktnkJbeyT4sKMxZkr478WZexS62ctmtSajEPQaxMvLBHDkNJL56o5Qa2wLTDnFx5P92L2uwzuP924jUaRk",
  "key12": "5Wjc6Vf5RLdU7taYitAQdLksMm9xV6vBKz5R7JDrTZ7yRNsGJPjgrqJWRaW3z8XaC4uvdvo62iMq8C4QrEz9VJFB",
  "key13": "4UZiHerxb1gKL8a6H9yZuAarEoYc3yMo6VXtE8DZNDLznSWqmpurJ5zjEGZm1Qo28AA2xUXGAd1qrXPBR9gmDqxR",
  "key14": "2AsjHTGH5VxB3atrgA3Js2fVQwj8w6e67o4PAtKgCZ8Zx2DX9W9p6Ljoshfa6rjYNaeUGcu8bsAtP9eP4p2sEy1s",
  "key15": "4F4TbuhJsk3pgN1e6F2iaqBihA4UV3RWqFtjeTd2Rwem1yAnjy7RWczFN2xdMA9o4HERkPFseaHcWavYZh95Cb5s",
  "key16": "3fKQyhfQ3uEa1DSgbqhE6DPmEVeAJcqRHxdv2yF2yCQyTvKi77aUsdh85qPH8DsBSHhGd4ZadGzhZ4a6JeTwaRwS",
  "key17": "3MeJMr3DRb6M9mR7HzqJymZt36jJX9rPgQdVmvBwcfeyeXrjNs2zaTeU5bXyd5wborhHUzgmhm7mTi9ZyEDekzs3",
  "key18": "2FZL2CDTF3Uh7YT8iGWGihYznot7sih9cQvvpUENUVud1QLgxh1cv5HWfviGCrTjLQwXjSy6tWUt9rbgDYfKyMq1",
  "key19": "4o4k31un2cwZMXiQUsppWm6nyRRvd8a3KExReuVcCEmTfjKQAzToKrKWcEJzZcN6L7HLsDDfHCLSPG7r9GXtoG5J",
  "key20": "2ZebfoxRtFet3gy5hhKi8E3EYGDnM2dJoTcqNgnPhiA5cBt5udHwuDZ8pb7PH14X8JqmvyJ5ofgK8oDmcLTpq7Cj",
  "key21": "2LAJfFFFx1THtEBdGHLZkaj941pHsLKcmYMCfTm5YokTVbPrfLK53f2mA6V9W5sfXPMadJQ9msueFofhaKcemvnc",
  "key22": "3Nbkkf8LxZs4usyzb5JjTNfTzqmEAxrx5pwFXi9Cxfh22BiUuvboCimgRvCVWgLcUUv3RyfsfKq9RrgcwME1Wfgx",
  "key23": "3yQuBNECXDxpUJPjdphHBUSTia3PwLsnKpfybG4cJBxgUgCeUQ5QiAPxk6h8yvEyVRyu6iUsdkobRBoLgAZ64kKt",
  "key24": "2SEVV26vXfXjQnts1E9SMHGWB4pb1aeAuiBLkPE4iT9UChLVi9Mh3HYneTDApbyHoUS2jBkNDfmLi9DJ6KTDNcQA",
  "key25": "4MAt5oZY8GLX14r1EZoppAt3J9h4EUpPV5msosHdVsaN24hB6iPGMZ9hRewiCFEkvy5DKfwoLyDTmAjXwDU4YAnT",
  "key26": "5EZegBFtQQ5wH65fWThWZsFPEJgSGB7Z7VCoEgVH6ENUhFU3N9JjETwithP2FNT754YiZEuKfUbD2Fzwr1bgBjxt",
  "key27": "4oL2GkFQNfnfqZ8uGAwPPcNZ9ADGabkxVcfYEAUyYezXGzm4Hk9n9zCPYvEW2AHm8rxFFkUZTCcgYvEno2BGLfEV",
  "key28": "2PvZgTnGWsb7YKP7F8JHpN1Jdhb2tCjoo79vkeXcSrC6axZPyMZ7F3vLj3DzfF7NTxgjkaYzRfQMZ4g8yqNtFbQL",
  "key29": "aeYQ7gVgccJT1caSfEDrPz6WthBKFegBDh3DU5Jz7fg3KAZouyHRinMysvUdSDjFJdLpcsrJDaZkr1aQsDRMJnc"
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
