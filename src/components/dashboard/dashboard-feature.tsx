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
    "3vMCGXp8hZMiRCD74qKMRPp59c3s1XbuVavZ9DR6gFeW7qWnfC9DJ8BufV3XN32pFj8KuZHXG8u8WGy4zu3zz4Gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dgNWD69AtBdhrXpPmGYK2ie6CdSHGtAKsG9z1YyThT5CvjdAFZHAEQELp3zkyySuJkwtN5pmmDKQ6a9D27XhFSz",
  "key1": "4XXBepZ2DEUSzP9WL3ZwG8bV2JXmoum3kfh8gYosAKiY5Zffy5LuzyYDbjYVGDu2aUQTiw8ceZzycWadMHj9nh97",
  "key2": "SmCB1irF1V4MnJFdLibBtCq7LNUhaaCQAoug8RkoyPnXpNSvaWm1QRFSLdW26yUbwfZJKZCXCpqqHKX8eazx9oi",
  "key3": "4bCRTzczPAvgbgSu3jpjgXyPkz9f4JRo9PLcwPFBgVGDEmBv3BUT5jp6zKFcoDcTVcsKEci9TezbmxkbsH4Sf7xv",
  "key4": "2U2uS5phXt41jYfhig7nCJvAQNYnQRqXMR4dv353atDkCkWBbQkt3JUsmo5GEV5mQC88UCHWk26Qt6TdhJb6uXzV",
  "key5": "3RGtUUovHma4om1nXATkuRUB8Cw43twBbEKe5wzrdokbi2SvCX3BDeh9wCjQiz8BVZjMJiRLGDNQSwBhzw2sPjyn",
  "key6": "Ebm4MGYY2VYGUmxBxc79Vknud75qRSetaW8TpGQCAan3zagBjhSGyNoaZRwpBZVHP3WCwvGoHTJ33GJdXM2Y4cS",
  "key7": "3QREzrKCkEvhqT2h6mY7Dhss1mEJL9x578pVWLVGTSPhmBteJWhQw1R4MpQzvkXyCAZQzymM868ZjqLi1CWqsrTP",
  "key8": "49rr1DNb1wrnPrM8bCQPa6neyKYAbK1dYow44LYkpSzhGvfzBRUZHECjSL6A7QUGcbx8WLnqm1jE4fPCApoRWK12",
  "key9": "3KfEgmWRAJxYLJPrLr9sVpzci7hBogrPt1tC7Pdc7W3vNLw8v9LqDCpx3iNfLmWmaUGnYMGGsri7nkPmdp9P23Vf",
  "key10": "3F9FyBru8jwDwxbamWnXouGb4f1nJshnohgpNLkEDuqhD7L5gRdbWHHesYaNdxtP7Kscsq85nJ4babXvuAarkPBD",
  "key11": "4ay3FMbbCLErbCxA9R3Ad3E1SjwyVAL8YyoUaEy6k4EPVF9McXrxDYrFfX4EfaYNLX5hLaqC555Di7Kbm6LBUHS4",
  "key12": "5vaXbRH3JtYLgnmKorpf3yVMMxbz5wYBtwAWsJ4sm39t2Nka6mFKnxBXypZD4TTwDPnJTgheFpWCG5nshgBh5NxP",
  "key13": "2mmxmVv4tKJAXxGYhJQ5AAF8eCKTCSHoU8qeN4sQ5vETsoStacUHNSeqUz8LVQUpMq6foxDAEC7x3jav8BxhNKe2",
  "key14": "3p18Ns7RVYY5L4HjarWrPGeTBTzgCjrCapT1gLMo5VCghN98CztehPAQrNXK3YoQRBihwLqdWVp49fhuj79wsjBA",
  "key15": "3SWzxJAPxUJyeC7mMcxXWWGePxNsgcNgnX2aGvKHCKZVDoRGvwgPTMaQMue3CYMvyt17s6wEuMXFJkgRMHanZk1R",
  "key16": "4RNwUbiCDpWFAAPSZdA2W99GrkN41x2KnFPoMbi9Qb2xgNKHE1ryETrHEKNVXRgM2ijsV1DGvERhfiqWfA7gHD2X",
  "key17": "28fmLSj5Gh3tNh3ZCufU7798Q9Y8CWaAp6A4kfhhN58kNCypk8od4wxuCkZAJ4XBpzd9thERh1ny5CqyRtuH5Wie",
  "key18": "3XNNT6iHaEb7N5rdG7DqAuDZLjJwEMLb9jLeAroQVG5KKiHKdTmtUyDcV5a92KhfG2F8MYSe4ML3wgVQr4sdvWjs",
  "key19": "EUAaeUyEnPcCYbeF2gdLQftteV3TVa4gAhTXEHPs931wuXNS7DyjEzuTnoiH6B8X1NM76PTiVmKnqFRrfWPd8AQ",
  "key20": "3rsMm3DsVRQCEpfdmqqtNah51GYyB9LzN8EHo1JbY8NhhVyuNkU3wcfmMsBgRWB2YHYSrdTxNGNC986XHckYyxFJ",
  "key21": "5xH4NrEhZ6xZq55kXuMBGcJ2ehrRXfMmfJTsS2CYM12gbDMDjsSg2cW7BRRBHC2sH9wWB6eZRg37TzU9J22Tu5s4",
  "key22": "51LWiPzFY4LZsjgzbRT6kvRDH8hLD81pt5WkEVECS6tE65AEyPd6PzLZiszY3RkhXrABHUxurYebgqksY4ZfMW4G",
  "key23": "5e6xQCfDJMCw8H98vyJ3FNpbUPrBzpmqcEG9cFFT4X1uESzPmdxriSnU6sVCNpsD5uZVqCyEuxgyjium2yWYVYwq",
  "key24": "2SUhjP8DbrcQmzFyi38sVRY1hjN3FtE7Vu2ZyqiPYmju2p8HAjGGCrP6pZaC2CtdKv1HcW6P6PARaQ6ZvmYYSAXh",
  "key25": "31KC24pgrmAhoMMKM2GocGkxSDYe9NFMq4QKBsKkGKkUnG68MzXv3ga6ZDasEQLq4SzKiiSqUa4yHwGo5HSE4cUv",
  "key26": "2GcoDvKeHBLy2gdxxM6fNp5psnNNCvMhvj7XwtwsZooxxezwLXCo1W7tHQdxBpAqgJUY735MWAa4bVhiS8uwg4WL",
  "key27": "5kRMkNQWQYb8JNirrGu2snxffLj1kKfFTkvnm8RRgJJ9NpcXhBGTsoMPcVj84yELLL1PJk8nHzX61Q52kzAp1wX3",
  "key28": "4Gf27xjU2q3kJeBsUzLGJMpLQPDVt8vhvwSkYXp27EaaNiZULsUFJiwMw6XGu55pWMThMiMqk1R7BmGhCFzuNFzW",
  "key29": "5R5mfj1GKMjS1QRLBuB5tpBWKmsmaotqgWZU6En3P2k8i3oN11Xk9ZtfFsaZCPm2Jtc9eJLrXkxvSVysk8Wth8GQ",
  "key30": "2dTcsV6q6xWr2Nmf5qoxgPDCsQG2fdT72EDwhLhHd3R2MSdKgxTeGiNbpznXNDcWNTWKxFZcCEUkxfePJX67oWeT",
  "key31": "5973J9Ra9RskjpEyYwcMksy6Q4PKpWHWUQnZgZBCL6qQVKcdHQuwP99ZcaVpDvqeAxPMTadBGD7o5ig753a5LzUw",
  "key32": "5dfpfpiC3oQNJ9RrMMbk2RfqkGZggptfLKsL86cPXx7rSKbk7Ke1KQXtNdtm7LQCF62fHBCiTmTp92YPgXbD6do9",
  "key33": "tQGZ9kKUmcFyQu6XuzBN5ZwqA4ZsSUdWLkvGAojk9YYtv1QVD5HXQV2UcCcZe8fFg7Roe2kHrpxzwtRyjATTer1",
  "key34": "2Hwizj8tp4HdwMxnJPvTyiqkJfg5vjyXABrY71i58xnmjjTAhYd28QMkN7wC237om7bG9YSPHqGeQgZXmwKr82rJ",
  "key35": "3217PLtG24GkqsbRV1kciu4P6bWVMxns7oeoumLM2oUHhkgHnkM7o23DQQLkPSALZAovLfEFxKqzhBEEmNG1nFNk",
  "key36": "2cRsGzwL2RvF8SkEu92TApJnWbnNxDzt5nt5aYXXMPReF3x15R9JP1EF6jVeM3Mo9SaeR3i451v3jZHcyq3tfybc",
  "key37": "4RtSvjny9uSMkSdkUQW3dLiawH9LoziB3c3ryJ5Sa64s3oqdghni486CW3pFLhAL98oMBy3DVpq3WjdVxyGsU53h",
  "key38": "53FQRF5fAyVazJMRY2iscFXPPCvjy6sbReXhmZpgZySsKxu2mzaAGUgnJHfb36WiDaTefNbZ3mgtGETVJCk7RL5A",
  "key39": "2BbnUmqqGPDh22PeQpN8CCm9xw25bVHwfhkzdk949dNx8Ndiukq7pABoXsNjoREBf5qE3qfGACSmvdN2PDe9kkBR",
  "key40": "63P21BnArJiNZ5cGAZCzinsZxE3KxMP9khkvmown91shAKWk7xJVdYkV5U5skUqpVPRZEHzeZZkEbpm7pSxPAQx2",
  "key41": "44WZ4r9X5WQJEV4Pd3C6YvgYrgSxCSZUmYZZr1mqSuUJPVaNft7L4FmhKvqXof3gDfVHFT4j5QP93S6joXiS21TW",
  "key42": "5c8y8g3QifK2JxMskwe2T6UJekc8HnMeusxFLiNdfz5fmKYZ91PV84pA2H5QAeAcgG3X5DxB9EfXhQ18uT5WNsVB",
  "key43": "2XMWeVvjeNFzTeB3uVjrDfzLiaK4xBd2ZPJAQPqC5vvf4kLpmZuH1iiph7wH1iuEYzozsSqt4ZcPTyho9bX5JUSy",
  "key44": "38NzQ7GyTWLaUHE9FnCU2J7aCjRBBqPjQ38NXTsehTHFx1Lp17GEHf44aYEWaz9QUiERPNV69k336Liwt8Wqy33Y"
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
