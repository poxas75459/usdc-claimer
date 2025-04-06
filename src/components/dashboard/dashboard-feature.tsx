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
    "4AU4EXB2EzVtDS2mt9kZo6zFwRoGXPLN8R6js6GjnGbgnfoJFzzXDYSio6vFJbAtY2evuddHTYFQ7UFR134zuXLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262tqYZAsfdMdZb64z935pTvz98MnkGWtfXviuPdwunfsDBauFa6gVeXxAKg4LA8xSxwF4i2Zi258ViHhWQKKnMf",
  "key1": "CEBuMqHRmDs32zNxZ6pw8Hye3Z4NApBuMz6LFYvqjjTRj6fa3oZpNCBEJzq83K2WpvSk5Vnr5wuPMmsw8FFgkMc",
  "key2": "3y3CUnHPaHYhCMrpzrubJaF1SSKscJskey449v3rsLB9zeGFi4temfj7C6D5MhbzpwV3Ac6rv2xizAN8RekewzR3",
  "key3": "5Vpn5cWEG3VWek3JroWMk4wevXfgpSgayYdYYCKFgrr7nvqGBUQi11TFAHsRX7TxGzXVVjfB3KzfFGPqG99RHC9a",
  "key4": "3Qs7uJCG8RrpbFmQsEVeMinmemZsu8FQqCViC6JHiM7seCyhH4RdSWeJKjrpn8RJXwYda8cMspEn699HVntbxuq2",
  "key5": "4NJkhR47Yyc5LRkdC2qXfQTCchjbuCrLw84XrWmnkier6UiLvx9NNFWDbkeebr7u1VURtz72DxM6pbm7ofJyAdUp",
  "key6": "2Ggpmx7qM7xjgx8GTuXfe532NL9rVifGs3NmBEhde3x38iqXKVscDFeB53ZXu3uhj4X11B3BC5PstJCeV8ESsxVR",
  "key7": "5rbDA92NpXrZBLLB27n92XmMaMTbqWqAUKKYPmn5296ne6ZjvEgt59JareGmHjYw99KYtxavB6L4pTNdCHm5AnTn",
  "key8": "azcyxJcN3tPo19vQVBQcEvt583sNbAHwauifbBcnTsHBoN7xSrNzk3VAtUdvLznWVrwmCK7rw44BtzrVovuHjRF",
  "key9": "E22RijTruCLL5XTQ77nuz1Gsgqh9jXZMVyGqJqbA23ngjQN4veTQkZCZgqGNHFFU152oo4LW9xZYe6m1AwxB9hN",
  "key10": "59zgT656UZSnYsk7i71fW6zCnp5FHoLLL8LpobLrnfyTMKYscgjuMv4bEFzmpFa5fnURRDEKeYuw8TzNT7gVbwA",
  "key11": "iva9Asn77FHiJvyTFsB5DTtoD6miz5ZpEu2jp6LheS3s5aQHN764K7pV5FBoppheGwoHEzCdGGyunm6c1N3G6vE",
  "key12": "Ms9hh7LkRFmiLZWgG1rHqin2pziESTaUZtPeDvLufNWHyp3iNa6xhEi9oFZ9GgT98dBTUMc6uqr3zZ8NRac7gM9",
  "key13": "2GkqPZ6NVzr1vY5eju684syd1UsM4QN9P3fVj2BYY551a24VSKky5gWJ9aJs9TbMyRMVdSPeLmthFQTkDCtrfZoG",
  "key14": "52JVgfsAQQmy9u9RrCy8c7QzU6ZoTy75E2ueWmTmVYkbshzPjbydxRzG78zV55WpyvuvenxWA1hThMgcDRomjXBd",
  "key15": "54oPd2nVgUCVuar6yjFnwAsY2WyqyNLy3XyWwFGkApvVt3PcBKKSuhcRnBC4edVtqtQFpMUj9m93XiSF1upJYBTD",
  "key16": "27dkTrkV6iA4RvWmiNBNdpwxeEZCxWzi4Rb4KHaMByCk9eAZzBCCPjzwzLwaro45qn9L2xFkHxu3HXLqb4mm5NLb",
  "key17": "568ryqHe8ujHVwFLbxWyp3f3qSuk1nK1umtshnfV7o29AkhqXsawGJRJcSDSqz7Wi1rAQ3FJVD1T7tNaf5JhjAHw",
  "key18": "2VveXd3m3Y3KCXfHuX8wFBKhTafXADTbszeLAScJQABm7fj6coitrcEK6ebKYWxdpZtmXRePQ4LZMvexQ3THdGP7",
  "key19": "3nHtWDFB7gx2potzG24nkeRAXsrq8rHmgVb8Xdj1K9VmXm58JTrz3T24Px66y1Wj13bVaircJfecJnJeVwmYZsc7",
  "key20": "2JE2G1kogQS1JxytTVttdBy7ZwsV5V5prEUZUqBP2oP86uWdRChTSCvQWfemHiBYdeXMjPrE7vgm9NrCDWDsi7ot",
  "key21": "4HaJWj2cqZetoD39tN6dV6ZSprwxzqiEYtisaPHjixoa7RQ8vHsrhuHgT9tFQivaD5DAsCodxEzQfACjf8soUfLT",
  "key22": "2H43qM2gaBmTQoM7T8u5Zo5ghUsD2orbhPNu72hm3ahYgG3ikwewQjsr45tDGmmF4bQbutRpPjCSkZ6oPtSKSd59",
  "key23": "341TRQLLmPLwbpnpKHi1jBU3nZ5yEAWMopreEt8nLM3gs9BEfXxBjKez3jbNASidPR6H9C1AKCrpqKW91DqBgMKK",
  "key24": "57PtA2JQ9UCj7bzB1aR19yDLhMPQiwCDCfuTTLJnCjoNQMWGvv84xevFbPHGTge9As81yjfdhdjswjeoBfb6xEfp",
  "key25": "ZmVeoRj7FgNauqfkz6qfhAfRRfcV6F5WHnSGDGZhoDEiPYm5p91tRYCb4hGdoRrjJngCsJfhSxrpXkMRfUFBLS6",
  "key26": "3TRWLxWL5Bj6pph3top1FyyzGFVyDCZbaLsMLaULRMj8NpKEapfAsoqPXyaxzrxvB7m8BB8cgyUwVGmR11UX9b8G",
  "key27": "4BxNe2DZyEuLAj7AjccpL93EjQR5PevXQy9aSRNBDnS6msRk1aqvgJM7JLM19nP4C2eU4biTbQDwW4rjxPh8sxHm",
  "key28": "4SoTDrByW2xk8GquAbYMGzAUguB884vPpBD7ZN5gg63tzdFCCDwm1gneGavQpMSH7jdrPnwaNtSrhBM11EaKnnpZ",
  "key29": "3wMdyh6kEPz9ye7AKTauwn7dmp7SFgAh2FUaWEScVKQkD8dmaWbtb8ZfrqkLJktQmNQCdzExzCi4RwkEBxcK52hz",
  "key30": "pgCPwojAqYL8YoMQiPoQ1Xb2r6W1UWbjoBWU3uCmCKc5mLoTWn3sd1hRbiFZFWWrjYnsc2h5jSQyGtnkAwGmRYJ",
  "key31": "3TVyZ4vur4iVvU2xCoTerqvosr8zytT1XZrnypnShQnrG59RWvz57qrJ8zHDG1BygGRK59W69TvD9NhLGuT7UQQ7",
  "key32": "5N5SxouUoLCeqnLxALhvvK9yKbwT345rK22fvFYLfUsRAGLSvt5Dgn9aCrRPoyq435VaJ4CBBbCiHWNTi1Azgg5R",
  "key33": "sQj7QMixaPJ8rg7GmWCbU15kSDYUGaRVQsBWU51X9f5i59sPsSJAEDfAsNJh2LG5tCVjrcwCSP3nFbqKbisDLeV",
  "key34": "3gsM3q1ouZPPhWc2RLkEhkwDGERwy31M1JzpwMYhud9a7GJ5sf4D9HJRtEUS1UyQabLnEDzzEcKhSNNsndN77cT5",
  "key35": "67CjA9Kbvg9GEfWMAypmnsZLjvBWkazNoToFCSB8yKWTP3WSZtKPsz7ZubZeXiwgfJdZA5M4LkE2TyJAmsiyewpP",
  "key36": "5q84gDsR82hqRvh5yPN8k2LkjmVTuewJFQEjwAdCSqDJr9NMxJxyqzVcXCK6JqMxbtfrzPbNQCEUKc9Nbe7ocoTA"
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
