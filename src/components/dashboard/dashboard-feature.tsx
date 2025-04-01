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
    "4H6Rwg4BR6Rt4n5CQcXPHHGSDZgzYDwwaPhfwXua9D3C5BDuT9di5azdTzs25birvCyUTvNobr56Ba3wMN4TMnni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RMwKq3U9onjKnaJ7MHgbZbctoQ9DmhZJCgbvVK6WfBk5xEDpQCFubzgWVrbjBy6pRTnGVVCrJV2m8Wu7q2EZxT4",
  "key1": "2a3aQYTAjpBnuRoEdEmVQTYioEbkQsHbs78diCRoZpBND5NbR7ALt4BvH5A2dUXw3RbtgueC6vpKFCDVzoqbDrJD",
  "key2": "4zFu8GGvi9GYxjYT3Tcu2yNZxhBZ4SaD6oHCBy6XtLzawTnCnZVZbR8ivScoG2gBncyahStK9UdJdij82bvyp7rS",
  "key3": "2aYgzwR3MzbSZV8XNLrkSbRBUaJidifAE8n43dCYdAYp9jLTxmsWt86esa4iecTF2JNWjUmstG7FXYPnwcJwMfDd",
  "key4": "554r1jWeAoLuQ39oyAZ5SD4X2C63GAHha66LE2Askiwe9Zjn31Fp72ahmy17hFXRSbmAE1FKDqLoQqGFo89oh6kE",
  "key5": "4cxmgY6kimuRFnpGciPaSCNiWNYtJBVHhv5vzVXL2pCTYF6GmzE8dQhR3BuejArNTQt3m5aC4scCF9o8xHesa3VJ",
  "key6": "5c4296HFQSjep8JbJzs6K6c8K7YLUPoc56bXrD3wFaiNtZqg49ag59thA8LqYCQthNp3s3hiaf2Q3AWamnuabDNA",
  "key7": "4vCCDKvchWVoR2bqxGkKeENNQsC2VqBqYB6s8tXkZMVB6Hj2yWsphJLUSBiQURKvAn6AwMZA9jRck8f2ebfos9s1",
  "key8": "4QkAb1xNzAvZ1GaamkFSZLRh4FHzfTNw5y1XrSNr4FTJwky4HMEetiu46M156vwTAkG8YEtqvfxvngfL13FKWP5K",
  "key9": "3AHFHebD9HYsDBdWvfoAQ5vPjEuAdZUi5ztFcG45pnbxiftx2BXJ9v4CbVXLahpnXwLjNKpCW4fkPJUhYYV2bPW2",
  "key10": "3gb8BgKeWxCyc3JVkpshA5owPTGdHBvZC21uuVdZGZ2xgDJUCzQto8dEKkQB3Df6NV8phnkfVsvmxYpsaAvZ7Vyi",
  "key11": "36CMbTfhzroZVDRjreCc95ae4FD4pwDhjeJzgmmcrrb8UjkMZGG6aKkqyP9pjKLiARDDh9EFcbNgj5rvQQWwMdV7",
  "key12": "2R3X9q6hP7uzdtujD46k1wm7ozjd4LMtc278cRtz4gkrnchqnWMhwXsKshmzHoJTq9zSfC5nzyXzGkswwdqSfnnE",
  "key13": "3CxR7uXNVwh7r3QVbGk5My2LNxZmx9A9qRWcZhPXtjuiTxWbkpjs9gEnYekkcUPnr43psn8zHqeAnYeYcWKh7jQk",
  "key14": "fcKzuf2GP5PNRVSoCVevD6tdCGMLzEPAzPJspshyqYahvYzjoVyMyaD8Qf8vRE246mdTkYMRsW5eMjkRtnPxHZP",
  "key15": "4GbnFYRbyJiWhmJExgXWqKCangABVGpDhTn7mqEARJJRdzpdbtAso2QmCD86XsgmaNypn4djnNxczBxgyEQLgxLw",
  "key16": "w9YauSZs89Gp9cTQyw1xDYr2geCKQPCeXdm8CikmLVnnvqv4wfruyfiMc5vSteqWC3qtf6L6HHZVhiJaoKxKvPt",
  "key17": "4ZttFjkH9iebymAsRun5TM4vjbiSCKyDEd9Gy2ezCABrBsRtUu6mgEVR66LXAjoC2f9AmxmD2kWCfyrQ6qoLpL8u",
  "key18": "5QDstCV4tXooqTcQL8jhuDsaRGuHWDowCxx7dAirSdEvKhfR9ZHF2BHMDyPSM4AovzLatqFHm5a5yfE6gpFfWvZW",
  "key19": "KkYQEqLUeE7qp96nqzF5CC94sMSEKJ2GZtakCmdnmZHR4LJ2rZD655bYyte1rqHkstTzcUNGVje6P5FkiDkC5EP",
  "key20": "4btjQTCffFHaV6RXNJhzDxY8hVfFaLimR12VR8oDJAyrqBndbzBWtDmBuypD64PX25vcXhiG8wvWEnaoCzykc9wH",
  "key21": "29GLiE6hsyVRnPZkeYXbUhChRgquqVsHp7cSSHtx5Pnq1Xw3oHHyWADNfDeB8QDpiC5hjP1m18A3Mcb5nrYcDrgT",
  "key22": "HKjkSiedLFVr29EiTMGvdvj1tLo1Fpcbx3bznwhGeQatf85jv7QBt8BjqkbQ6iuteHKaigSYsKSs1urGqr1arSs",
  "key23": "wRsuNNFSwLZRQfWo8VByGDrLnst9Hac7PNf5VT8ZzqDYKBq7efogAWyW9QiwfoUtsJajPnWy1qkemCPFJCz7Zqr",
  "key24": "43K6MSA1j5f5pg2a8cV2M3Rss7t8GoA5xUmyFuUGngrVh6fdbF2Uc8xyz5hcG7MYyKHwrLrZxcDcTCiBBhQTyr7K",
  "key25": "274qRUyv6CfHeK5X3P2Kr5NYwyurfYBNJfMnjExsw6T6Gn4D3Na1a1PrBx9b38ou3GhbbSoG4f3UWSC5UrFs8fUg",
  "key26": "TqUN6BuEPY5vQPh7DywpLrJ35CNq6R5TA4uiUiEdY7ub2JhvJ46nJJuuP41pd8NNTi9tZ1xo2qVXQRin9LSPiRg",
  "key27": "24nTyLTh7YQdAPXv37Xp3bUKNc8oAXk54g9jQFABr1qAirpnFQbd82GEmXWvTLausAdjfW4D7Tcsg7TAifVtYMy7",
  "key28": "5ed7BovLVUYTrKinYZUio8inT2Vc98XnxysK6jXFe5VTwo4h24dHyW4wSyELxEt6TcFqf9pHEhnc75XJLNp8e7WT",
  "key29": "5ZkQD1GRa28hdXy65sLySn2xYGwZuCNRk1s7igtCSGeVx3gfuBN2UAnhSkupbkSFJmNQNpgGFNykLAcYKgG1hchb",
  "key30": "5KxcECKkLQuoU7S9E5R9S23ZYjPCMF2PEEpRRjSeVewLZvrbhxHi1BJ1z1RNj29PcXn3mtufcyS21wgjJiyVojMz",
  "key31": "5u2mbJs12ikroN2dbQeCTZaqq7G2r2uuAuVVzRfTFjwctpRqmrQmGHQaYJJQfaBXNQ8B4ry5PC3xGhC14W2NMFwD",
  "key32": "55bfrSUEBo7sAPZgC4kuVPFE8JcacmR27GRUsvYy1ZCB5CJw6AxcYkvYfw2QxaxnFcYqbrwxMaN8Fourz1qQKkRN",
  "key33": "2QmpiT4Z1tgcMpoaDrbEYMGhqtaU4uALtBBJN8LKu4vijkbh4r4nnDGVoRd45xxW5XUQZr6TjR4mjsb7d4grxt5"
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
