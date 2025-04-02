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
    "io6HVsm1ryEHW7d3hPAMtoo4T6gwvD4ZeFLggLG3XVnGEUN7MKKqvDsKXrkqniDdhpdYHFXbBQYEU9k3B1aNkJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gKfgygFXr6fA2dt2bTg61t7kb1xUcGr52zt764i6xa4pA8wTNoRiCSeidiZadLN7m4DiFQy81BKyrqCKbtkw2wE",
  "key1": "2136r86v8pvsfrZSm18fvyoRA7vYDEUcnPzFWG1BxJ5AEwch4qBHdSMw1WJxgNomPn7pJWoxZBbmKH5DqfQvAxLU",
  "key2": "4ioMHUiDNfcCKWb2cWQCz9L7WHznnhPwATAxCdZZtdzvBEH25bSsKMVWqj2218H2CZhy6T8pGfPXtVmKwhD1Jm2v",
  "key3": "3mE9NgTeGoKw1EEGz8wptkX2peJHoVx11CXyJBUz8TgGsZWngviaoiz9ND8g3C4APATPRoHe85FZG944Vd43GYp9",
  "key4": "rTFrYPPqzeZJkRNbbPQNrgyx96dxMstB11K3WXnA6E5fQdGxvd8Uv5VvxCofDgUSJiBWd8zSrvL9B4btChd3ECp",
  "key5": "k8MxoxDQnN8gBEu4zfcMqCg7GMekZHSWDUgwUhDk1uMDCZJSSrdsqwQFsnVkGqMfY4vwSJKy1a6gt2zJ2QyCC28",
  "key6": "3CWx8AjtgLzi4hGv25ZtDpCb8cdUMwitkdHPN9AMFF737564DQCpdp9bWDzpa8rW9C7JKPERR7awA9QtrDheDNud",
  "key7": "5XJA6k2ZQDNo7SKPDY267qG1RTvGSsnzvMtRfGj5CML8bvGQeEg5Hu5cEq4RTqtqYHkvoQHkfkE5uPAxA8fUSXRj",
  "key8": "66pMZrkLmQ5H1mHoXp5NxNxv5Mk4vAYPfaTrX41SwbPi88HpSTpdS1aUyiVg28HC3FXo7gDoPDLZU29A8o7zYrtY",
  "key9": "5hmb1AsE6hPtqA1DA6HToZsfc8KvC9bWgg2G1xwDBJu59VATyZXPLcq9qwKe3e19eM9rNrXLoWZyHH5m4FBibneX",
  "key10": "2HhMZJot7zhPDCoo2SLFS5cJZYj9pAmz8n2xfHovBqiZ2WDTsvscbtrJZCaZSA72nRXXQXZuoejpu9TbZ6vkCS7h",
  "key11": "2oxA7AzwfY45cdKJs5UHpid1jF1T3bEiG7a6zX6wKQ5mnBFHhNjJn1oMCZ3iDv9dfsP8rarFA7MfQFSr5yyeL4Ct",
  "key12": "3kq7UW8W8SjFbZqaaJULN78B6FJhKpRePZGcGGRjtubfvWcmqcztVihjnDg1N1D4svZ2HtxSnWfTPDffCt8RNYui",
  "key13": "5Gpy7f3wcT6DaRGsfgxKUKVyM2RiNgLiAgEEakdNw5rhx4NdZEY3pC9V2NY7u9CFP9BAnXMWMcPDmvR6T6jvoPze",
  "key14": "4hy1AQdf3RZaWG582VYxYG4r23ggYVEuAX1TPeUWateyxBJQUwx825ccT7JME8NN3AU6X66PFu83vmSydSDVquY2",
  "key15": "3wahpy5GUYBVwhAFAJ879BE1gLtPRbcJYjgbBgXGgQiWKrPZTVjdoLNSsSmhGc8GuyqybVEVeaHA9nDDs9vRKAGA",
  "key16": "3w6XS4sGPo7snhG4pmyf3XDMypAEsRt3kVCueDh4VMqcCEgWn3EgkrnjjfhsCCwMLeWsCQfBEsnaprJDCDwJxEz",
  "key17": "5cRjbZrGwEZpp4db9M9J2KbdtGa7iR2aFQgR76woMosKi3sPPkSdTnfsLX4QRPRhwAgGqYfv2Xc58Ex83AQejhMP",
  "key18": "21jgdVbhtK1MJgiyuqAicsiNAVSnjoCT3xBaERyKNoiTgnAUEVqPZp3Ay845dNDrCq3yRjaEmNoJLDRyKNbowWA1",
  "key19": "5VVQECQVtdKHb4uoHH5QnhMbxs2BTBCczwutsrsACXUBRfLEBiu2NFtfYGUNJ8D9iX1Kot3z42KLcVH4P8RuzW7Y",
  "key20": "52a11Tr5UdxMzRgXRPXvSWMP4cS15QoQkxv5hT6KAHMAjya9471dGRHMnpe9PTB2h5H5Vg4ANkHq7nAZCeTZbvE2",
  "key21": "2Gm9arhK6ijdKno7BkjkVhiMxM2mvRC36s3KhwKLLM2av4fZJ628yixLwPDVo47Fobc6p7z3gazSnYJr1uKEC9Am",
  "key22": "3nHhvmRcr5zZFyXWTCJ5AkDSzunzvAmHwUGnAQWHfa6aCWDB1qoot6E6KnLy9tESYWMy4MLT9xfG37HMKbEAfhfq",
  "key23": "9fnZTLdWxPUS7g5EdV332QCqC5VbgMSvbky3bTWcMdEcdN54q7YPRLZ65tCMuAGKVus5i1XxsokXmZDcshc24tH",
  "key24": "kHv7ozBrbHLQeGEvdT5n3U1ZpHN5rCYRg2RtFgXoiyjzVLEtyQm62t4Dqq5RfukkQntbVLMHYLc5KZp9wVZX9a9",
  "key25": "2ayiDN9zWgoC9eMJaP3pm98hKYxHnn9mS4pqPnfr3jCrf7A2BvEFU8oHCLFcXBJqGPmGCcQnm3x5s1ZC4KtArzmb",
  "key26": "4THNBSeZq7zfBzTJg5JGqpEDNUo8LQYV2QsWcFbcAo2kUZNtDDcAQxKmoVyV5uyuXH2eihz9twtR4MAzLpeEA9Sx",
  "key27": "4A2FEB15WawLVyE1Wu7SBcdJqNBV4xZzAkhvZavhUWqj5drCpvd17HFYyagpSMM8Aq64mgjp9zE3dGD2e23mcgGL",
  "key28": "2aFDJSVRCDpa9Hk75FGzLRFuinkqUdYWSnQzEPjcHzJ6qtSpCvHx4M4jqY6DC3LAWc95FgGJUaaqHJQbpkrfbaoh",
  "key29": "5eFEa31PqfSzxhMzRyQ91bwHYkYKWjKfN3VgD7CSMSDLWQ8rEcRsE2929LsiEUSwHwfeKTb5DDQopCx5CbeFprHX",
  "key30": "HGZvL5AfSydpVyDrpbBWrDN88PVbLimMyS5BX8CGTW7gBzedHNyj7jfd9gjLTQmp2dQ6ZutrS2fHGTRsPfp7QY8"
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
