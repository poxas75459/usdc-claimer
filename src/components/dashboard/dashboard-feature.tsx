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
    "9C9nvRC64qQxAr1QZoEiAHhqsLKdWoJQssfoNdC9emnNsHGdvTZr4xHDg6yiqG1ZNzUjVJGAaxEBqQRkZAAr9sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fDZSWjmp9vPYd9xadmH5NJZccB8oQGt5nXQn5HdSXiyXegxbg6MhJeokphCoUjVB737KQMscSSuhcdr6Fb2etAq",
  "key1": "3EBqvZWLq4oyL12DZwSj3y4iqZBLtifnMUjVoenqUTwoXaK4wYCeCek6QN6mecVseFYLfXh4vEZRnF8LT7bRdoKQ",
  "key2": "46HrsRdcwQHzQqBPwTcz6p62dWSUVpDGfPRMrb2XDaomk8SNf6ey1dXidSgYjgsyy8TY5zkF5MqySuRiqp7LrFKD",
  "key3": "2A6FD6bXsrndka62Ywwih8GDTcqzp8VmtUa65XabYDpXugKUN2paXBC8soyXZ6H7L4MTE9cnrf25Tho4g6k8osGo",
  "key4": "5V1PkatC5hpFDk3ijviPdSDsXHkeyhC8FLqaHQLyjGfJQ9rTGp4tsMUzgdkhCJaZsGptkoC58rDXpoz1uEdQcaim",
  "key5": "UD4creucDoeECiXzTUCsCaPSF4itYRoJTcF554UXkZU95raiz4brFuQt7mgiM51RvyzBAjUyr1LbUhLYjUtgZ4e",
  "key6": "GfvqUu6puLTgYarZsRPDnZ6tL4orqj9BNVagCeSSZfEoDnr14jJMBGSBN9XJYmq8LenvWhk8dRPDbQ9HcWYSYAL",
  "key7": "5joGpXLTeZecADp5F9BvMuraeWirDpwo3ZbHRWJd5FEmNZ8SPWRK6ejxqnpUuxV647vHXwsUYDW687DutAkGHQ5b",
  "key8": "5HonVSGPWsWPrsm6aAyXbhYBT5ruw42agWDKePyTVNhdY7iNLeiKB3pUZ2aa1TYg7BMmgDGsKpw7SC2mUfngKMZM",
  "key9": "4ijLwbY31bdcgbmcckrKuevQn3N8Rw7WAJAVCGkLkivyFJhSVK4JUTxFbkkUPR8Q49YSTvbNu9QVCedytnXTsu33",
  "key10": "bVNsj45SSB2gfpjecfq17KRyXmaY32WAYmx5es475Fc2YY2wExE1ksbtSAo9nhiU79XvHSakCCfRFPNFnbfWwUn",
  "key11": "URDrHoKekPMnavrZhMtWFKht6KgTkEkkyhFDLhX5RVx2EqFUtr9GBxJUvxTyGDaGsvpa9ZKPR3mkQra6UrmaoJ7",
  "key12": "56GQZnBeLTUR45HRmPKhdqua2DdTLvnfmBDKHXRxigse24GFoSGdLo8s5VdVRqkM15GpWdTfdzgQufby1G4xiTNd",
  "key13": "3waFKgA3NswQCtWzegvKsnqkAVxA3Abnr1gfnpxtan98YRxojZsS5CMhFCHL7Am6H4pvLd5Dp1N8DFn3Wd6nnM2M",
  "key14": "3b3T1YpxRoHFQaub1CkZyP9wo6ZAeDmDeCwWhmMxCtxwfLpsZC36eySryWUhwnNjfiTfY1sNweTfXQ7SQkKbs3x9",
  "key15": "2bvsHCSPZJ3bVg2w5f9fhZcPypUALjihPyfvYcX3nx8NVsQ5FMtDGVEuHeU8KGfhBaiFzjWFaks2xmVHmA34e8xb",
  "key16": "48cPpXareBG9Tf8GDRJBcGtw4qGurcdp92v4VA65C5sru8WiMNNW8xz4RFHeUjG8KnKw1oLiD5oHL7MU3hyGgYoQ",
  "key17": "2U97ktqCd2uJXLXbzoLGw9oTeC57NcVkY8GhK3jMxGSrys7RRop2jiUD1eDgJEAXJusrEfBe3qECKpZiwgkpJh16",
  "key18": "3Hff47L4j4CsRFdtaNi8cQ9Rt5pzcvBw1MN4GkqX1zyBSeWunQXBGJEeoWHzV8nRgstWfpqP4GixGgxCKPBd6CS",
  "key19": "4ik3iMhbyL3BG4QB6YxmFmfd3vzZjWjGHAJJYjkkZ58friLhMt5mgRMpm5WHVeE3JHGYzTWESLhT6TWbgyBE7e9r",
  "key20": "3mBhUGiiDegewB2gmVmeux4ytJ4qkLPp3p3FWiAnNW42kXMHwZR3RAjRASjshxh5ewuzL3imz2baHAniNyc7bUdo",
  "key21": "2GGikWXkuCxzUSHwSHUaHQ7v7FM8LMu5hMrdfDR394AKfac4S6VRPsP428Da17sFVrXsck7xGum8VKoVMb95g6rm",
  "key22": "4fPfmsXop3ighra4Bs8X77w3ontZsgLUW5MpuJuqab7FJ99qu8HdSw6m1bU4qVjsNAgYjQPxsAAwoUwupmJ5QF5G",
  "key23": "2N9VqDDWUbjmMMjw3ZPtQkBWMU7EsAiB4N8iveVAuwsFpTJ9DWuCxVuFfZsckqqneNaMX1nGJgx4xVN9L9mk8zdJ",
  "key24": "2bamWu2bRFmakZzJsDf8QRWDhtDCnrkcvKVK1WLfmgy2b8adkKLjZBZR5ZsA6ubQ3S51ZFV3BewfDMWsXEz5ZZzU",
  "key25": "21Lb5nyX48Wvw1WNWRGyUo9Q85Z79NsXx4tNtbZxcgcaFkvZ47qn1QVkYnCB7bRBVHo65M17yBitCBt19GcUDXPS",
  "key26": "2srQMAmjXuLsjHMNzcwju7KgFRGPvj5tSRUKENpSc9W9mPYxEEHeQYR19ZURKMxFr1obkJK8v3NdXzW1ygTqcbdm",
  "key27": "38gdvhQeLrEMY3UKZJn1pY3FqA4SLiAf1B4xWuCVVELU75rqjHc8h9Zau8r62ai4w243F3LWS3okW1Bv5mu9W1EX",
  "key28": "2VGZG4f9uY6sS83N9V36Y7Pd2GzfuvkQkmSu4vLGz4AGXDBjpTHzC6BkJzEXJXLHgGbeWtZ9eCYXjSCDBR3yaJjp",
  "key29": "47LUyREyVGYRddDbxfCqHxc4k6A4fwiN1SmdjFmUXDJeG4JJRAHSJ4gQgPx2C8Kf71STAbsFRmsbH1USm8PVWZwp",
  "key30": "3NbRbhTEiM7Hsuik2SYpDEipViN4AWY6jk866feeSsFN2NqoTugyfXoPBrCRBF4N4ZAtETbEWNYQmKKjnT4y5e1o",
  "key31": "4RUHhVeeV7AamSLmo3pZuZixtBrFoMYBT2Prb6wRLnHLK5GnyHturUy4aJ8nvFPe51a1Q9tFG7x1j2DKSJjKNEe",
  "key32": "2EzTo74XXQZMqU3k3h7iC68ZvGwbn2h24H2DTrjBWDNzuptAXQtGmUNtxh54wgxoN5xSnnv9hQv4MZiBRCbaZhoG",
  "key33": "2ucF3cJ53HSB8L7G92rtCsKzY9T7o7hKVF71xFDZHVQL4BEdMF8GdNooJ3ZaERRzSUyiGNm8hZPWyjoUW6BHycjo",
  "key34": "3UAJpT3fKrhWYR7LEVTKrf7ABPTr7dfkNX2RsLqrffMwuVgb5cMBAp6jj8ZfWxu4eWPNDGKKzA5MKAULviGesSVk",
  "key35": "cqmVFHQw2wU34rFXYdixFqttA8qwmfpRMHWd5T8W6ZRsDVqEFt76miEpz6QNc8bvQMXosm7jjiPGT8oMcyjeifw",
  "key36": "i4mJRN17UsjAvxVEXHDc36MGtkM9SVh4cS2oW13RqhmFiTQCXtdHGe7Ub8Zr2XY238XtQreJ8tYMBib749h4wZ5",
  "key37": "2Y7UpiKcJ4rn59XeWGTcJasTEymEnMCKHDmKwzsEFGKDJQW5CenLZKsXiDMnGgtmskJ2yo97JRXGmcvBgN5ecxR9",
  "key38": "2qgZp1p8AG8kERC8CvEuNCwJ5T1F6CHR1rNHn9ntjTW3tumUwVKdSH9mBrGE6oaujWkZfoTduo4EC7dpbfFoHXhg",
  "key39": "3S6W3SH88uBd2RQLTr6s4UHvser6fQ7GW31JLeLtj224G793iujEBHu22Dz7yyDn8aAnwvaTNHsDBmS4h9bFbbeQ",
  "key40": "vEev5GAXMLfM5VaVLpiYSmAxeWBBVdxgcpNST5LzbTBQ9T4Ldv3zJ9fmq9zGfdenF2H8SG5JorrL3otsmbgY15N",
  "key41": "2wo8aNFL2kTe7EwihnV97L43fdXDiMo192eq26FY4cYcAuRzo7GPFh7Eq8PxvuK62zDtptHKR9T4R6Y23LCDrQLu",
  "key42": "4bDcRZWjhWsJL1KuMUZVDLpF97nLSgqmd4Dh3g5Raarxuo1ZK1bY7q9DeckrqUCHCpqd4gtFg1rkAQqfiQ6jq2rp",
  "key43": "2CPhKhoysQi4Ce7Vd34b1gp1es59TJKXNxnzCi7nkfWkBb6NXSKCFSBU16XJSKx6nimhHwHSavcx9DWrYh4XLoRL",
  "key44": "APibhpNoKJQB9K9kxrxbE5FC2bGiD7frvs2jm7FDauvGmesifjQi9pjasktw6o4pWAsahrzKCwft5zko827rfsq"
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
